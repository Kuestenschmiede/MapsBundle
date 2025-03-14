<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes;

use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\modules\ExternalMapElement;
use con4gis\MapsBundle\Entity\EditorConfiguration;
use Contao\Controller;
use Contao\FilesModel;
use Contao\Input;
use Contao\Model\Collection;
use Contao\StringUtil;
use Contao\System;
use Detection\MobileDetect;

/**
 * Class MapDataConfigurator
 * @package con4gis\MapsBundle\Classes
 */
class MapDataConfigurator
{
    private static $allLocstyles = false;

    /**
     * [prepareMapData description]
     * @param  [type] $objThis  [description]
     * @param  [type] $database [description]
     * @param  array  $options  [description]
     * @return [type]           [description]
     */
    public static function prepareMapData($objThis, $database, $options = [], $preventResourceLoader = false)
    {
        $mapData = [];
        $mapData['mapId'] = $objThis->id;

        $keyParams = [];
        //TODO: currently when in backend mode, not the correct things are loaded
        //TODO: no profile is found
        // get map
        $map = C4gMapsModel::findByPk($objThis->c4g_map_id);
        if (!$map) {
            $map = new C4gMapsModel();
            $map->id = 0;
        }
        $language = key_exists('objPage', $GLOBALS) && $GLOBALS['objPage']->language ? $GLOBALS['objPage']->language : substr($GLOBALS['_SERVER']['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        $mapData['id'] = $map->id;
        $mapData['lang'] = $language;

        // ------------------------------------------------------------------------
        // get profile for map
        // ------------------------------------------------------------------------
        if (isset($options['profile']) && $options['profile']) {
            $profileId = $options['profile'];
        } else {
            $profileId = $map->profile;
        }
        // check for mobile-profile
        $isMobile = false;
        $mobileDetection = new MobileDetect();
        if ($mobileDetection->isMobile() && ($map->profile_mobile > 0)) {
            $isMobile = true;
            $profileId = $map->profile_mobile;
        }

        //check if we are in backend mode
        if (isset($options['type']) && $options['type'] == 'geopicker') {
            // select selected backend profile
            $settings = C4gSettingsModel::findAll();
            $profileId = $options && $options['profile'] ? $options['profile'] : ($settings[0]->beGeopickerProfile ? $settings[0]->beGeopickerProfile : $settings[0]->defaultprofile);
        }

        if (!$profileId) {
            $settings = C4gSettingsModel::findAll();
            $profileId = $settings[0]->defaultprofile;
            if (!$profileId) {
                $profiles = C4gMapProfilesModel::findAll();
                if ($profiles && (count($profiles) > 0)) {
                    $length = count($profiles);
                    $profileId = $profiles[$length - 1]->id;
                }
            }
        }

        // check for special-profile
        $hasFrontendUser = System::getContainer()->get('contao.security.token_checker')->hasFrontendUser();

        if (($hasFrontendUser) && ($map->use_specialprofile) && $objThis->User && $objThis->User->groups) {
            $groupMatch = array_intersect($objThis->User->groups, \Contao\StringUtil::deserialize($map->specialprofile_groups));
            if (!empty($groupMatch)) {
                if (($isMobile) && ($map->specialprofile_mobile)) {
                    $profileId = $map->specialprofile_mobile;
                } else {
                    $profileId = $map->specialprofile;
                }
            }
        }

        //check for profile manipulation by another bundle
        $profileService = System::getContainer()->get('con4gis.profile_service');
        if ($profileService) {
            $profileId = $profileService->getProfileId($profileId);
        }

        //check if we are in backend mode
        if (isset($options['geoeditor']) && $options['geoeditor']) {
            // select selected backend profile
            $profileSettings = C4gSettingsModel::findSettings();
            $profileId = $profileSettings->editorprofile ?: $profileId;

            // get appropriate profile from database
            $profile = C4gMapProfilesModel::findByPk($profileId);

            $mapData['editor'] = [];
            $mapData['editor']['enable'] = true;
            $mapData['editor']['type'] = 'backend';

            $em = System::getContainer()->get('doctrine.orm.default_entity_manager');
            $config = $em->getRepository(EditorConfiguration::class)->findOneById($profile->editorConfig);
            $mapData['editor']['config']['drawStyles'] = [
                'Point' => ['elements' => []],
                'LineString' => ['elements' => []],
                'Polygon' => ['elements' => []],
                'Circle' => ['elements' => []],
            ];
            $mapData['editor']['config']['editorVars'] = $config?->getEditorVars();
            $counter = 1;
            foreach ($config?->getTypes() as $type) {
                $counter++;
                switch ($type['type']) {
                    case 'point':
                        $mapData['editor']['config']['drawStyles']['Point']['elements'][] = [
                            'id' => $counter,
                            'name' => $type['caption'],
                            'styleId' => $type['locstyle'],
                        ];

                        break;
                    case 'linestring':
                        $mapData['editor']['config']['drawStyles']['LineString']['elements'][] = [
                            'id' => $counter,
                            'name' => $type['caption'],
                            'styleId' => $type['locstyle'],
                        ];

                        break;
                    case 'polygon':
                        $mapData['editor']['config']['drawStyles']['Polygon']['elements'][] = [
                            'id' => $counter,
                            'name' => $type['caption'],
                            'styleId' => $type['locstyle'],
                        ];

                        break;
                    case 'circle':
                        $mapData['editor']['config']['drawStyles']['Circle']['elements'][] = [
                            'id' => $counter,
                            'name' => $type['caption'],
                            'styleId' => $type['locstyle'],
                        ];

                        break;
                }
            }
            $mapFunctions = \Contao\StringUtil::deserialize($profile->mapFunctions);
            $buttons = array_flip($mapFunctions);
            $mapData['editor']['enable'] = is_array($buttons) && array_key_exists('editor', $buttons) ? $buttons['editor'] + 1 : 0;
        } else {
            // get appropriate profile from database
            $profile = C4gMapProfilesModel::findByPk($profileId);
        }
        // use default if the profile was not found
        if (!$profile) {
            if (!$options['type'] == 'geopicker') {
                $settings = $settings ? $settings : C4gSettingsModel::findAll();
                $profileId = $settings[0]->defaultprofile;
                if (!$profileId) {
                    $profiles = C4gMapProfilesModel::findAll();
                    if ($profiles && (count($profiles) > 0)) {
                        $length = count($profiles);
                        $profile = $profiles[$length - 1];
                    }
                }
            }
            if ($profile && !$profileId) {
                $profileId = $profile->id;
            } else {
                // set defaults for geopicker
                $mapData['zoom_panel'] = 1;
                $mapData['zoom_extent'] = 0;
                $mapData['zoom_home'] = 0;
                $mapData['zoom_position'] = 0;
                $mapData['mouse_nav']['wheel_zoom'] = true;
                $mapData['mouse_nav']['doubleclick_zoom'] = true;
                $mapData['mouse_nav']['drag_pan'] = true;

                // map-information
                //
                $mapData['attribution'] = [];
                $mapData['attribution']['enable'] = true;
                $mapData['attribution']['collapsed'] = true;
                $mapData['attribution']['cfg_logo'] = false;
                $mapData['scaleline'] = false;
                $mapData['mouseposition'] = false;
                $mapData['zoomlevel'] = 1;
                $mapData['caching'] = 0;
            }
        }

        $mapData['profile'] = $profileId;

        // ------------------------------------------------------------------------
        // set basic map options
        // ------------------------------------------------------------------------
        if (!$mapData['id']) {
            $mapData['mapId'] = 0;
            $mapData['id'] = 0;
        }

        if ($map->id != 0) {
            // map-center
            if (!empty($map->center_geox)) {
                $mapData['center']['lon'] = $map->center_geox;
            }
            if (!empty($map->center_geoy)) {
                $mapData['center']['lat'] = $map->center_geoy;
            }
            if (!empty($map->center_rotation)) {
                $mapData['center']['rotation'] = $map->center_rotation / 180 * pi();
            }
            // map-zoom
            if (!empty($map->zoom)) {
                $mapData['center']['zoom'] = $map->zoom;
            }

            // geolocation (use user-location, if possible)
            if ($map->geolocation) {
                $mapData['geolocation'] = true;
                $mapData['geolocation_zoom'] = $map->geolocation_zoom;
                if ($map->geolocation_bottomleft_geox != 0 ||
                    $map->geolocation_bottomleft_geoy != 0 ||
                    $map->geolocation_topright_geox != 0 ||
                    $map->geolocation_topright_geoy != 0) {
                    $mapData['geolocation_extent'] = [
                        $map->geolocation_bottomleft_geox,
                        $map->geolocation_bottomleft_geoy,
                        $map->geolocation_topright_geox,
                        $map->geolocation_topright_geoy,
                    ];
                }
            }

            // map-size
            $mapWidth = \Contao\StringUtil::deserialize($map->width);
            if (is_array($mapWidth) && ($mapWidth['value'] != 0) && !empty($mapWidth['unit'])) {
                $mapData['width'] = $mapWidth['value'] . $mapWidth['unit'];
            }
            $mapHeight = \Contao\StringUtil::deserialize($map->height);
            if (is_array($mapHeight) && ($mapHeight['value'] != 0) && !empty($mapHeight['unit'])) {
                $mapData['height'] = $mapHeight['value'] . $mapHeight['unit'];
            }

            // map-margin
            $mapMargin = \Contao\StringUtil::deserialize($map->margin);
            if (is_array($mapMargin) && !empty($mapMargin['unit'])) {
                // [note]: inspired by contaos stylesheet-handling

                $top = $mapMargin['top'];
                $right = $mapMargin['right'];
                $bottom = $mapMargin['bottom'];
                $left = $mapMargin['left'];
                $unit = $mapMargin['unit'];

                // Try to shorten the definition
                if ($top != '' && $right != '' && $bottom != '' && $left != '') {
                    if ($top == $right && $top == $bottom && $top == $left) {
                        $mapData['margin'] = $top . (($top == 'auto' || $top === '0') ? '' : $unit);
                    } elseif ($top == $bottom && $right == $left) {
                        $mapData['margin'] = $top . (($top == 'auto' || $top === '0') ? '' : $unit) . ' ' . $right . (($right == 'auto' || $right === '0') ? '' : $unit);
                    } else {
                        $mapData['margin'] = $top . (($top == 'auto' || $top === '0') ? '' : $unit) . ' ' . $right . (($right == 'auto' || $right === '0') ? '' : $unit) . ' ' . $bottom . (($bottom == 'auto' || $bottom === '0') ? '' : $unit) . ' ' . $left . (($left == 'auto' || $left === '0') ? '' : $unit);
                    }
                } else {
                    $mapData['margin'] = ($top ? $top . $unit : '0') . ' ' . ($right ? $right . $unit : '0') . ' ' . ($bottom ? $bottom . $unit : '0') . ' ' . ($left ? $left . $unit : '0');
                }
                // [/note]
            }

            // map-extend
            if ($map->show_locations == '1') {
                $mapData['calc_extent'] = 'LOCATIONS';
            } elseif ($map->show_locations == '2') {
                $mapData['calc_extent'] = 'CENTERLOCS';
            } else {
                $mapData['calc_extent'] = 'CENTERZOOM';
            }
            if ($mapData['calc_extent'] == 'LOCATIONS') {
                $mapData['min_gap'] = $map->min_gap;
            }

            // map-restriction
            $mapData['restrict_area'] = $map->restrict_area;
            if ($map->restrict_area) {
                $mapData['restr_bottomleft_lon'] = $map->restr_bottomleft_geox;
                $mapData['restr_bottomleft_lat'] = $map->restr_bottomleft_geoy;
                $mapData['restr_topright_lon'] = $map->restr_topright_geox;
                $mapData['restr_topright_lat'] = $map->restr_topright_geoy;
            }
        }
        // override map-zoom from structure, with values from CE/FE, if set
        if (is_numeric($objThis->c4g_map_zoom) && ($objThis->c4g_map_zoom > 0)) {
            $mapData['center']['zoom'] = $objThis->c4g_map_zoom;
        }
        // override map-size from structure, with values from CE/FE, if set
        $mapWidth = \Contao\StringUtil::deserialize($objThis->c4g_map_width);
        if (is_array($mapWidth) && ($mapWidth['value'] != 0) && !empty($mapWidth['unit'])) {
            $mapData['width'] = $mapWidth['value'] . $mapWidth['unit'];
        }
        $mapHeight = \Contao\StringUtil::deserialize($objThis->c4g_map_height);
        if (is_array($mapHeight) && ($mapHeight['value'] != 0) && !empty($mapHeight['unit'])) {
            $mapData['height'] = $mapHeight['value'] . $mapHeight['unit'];
        }

        // ------------------------------------------------------------------------
        // collect data from map profile
        // ------------------------------------------------------------------------
        if ($profile) {
            // general
            //
            $mapFunctions = \Contao\StringUtil::deserialize($profile->mapFunctions, true);
            $buttons = array_flip($mapFunctions);

            // external elements
            $externalElements = \Contao\StringUtil::deserialize($profile->external_elements);
            if ($externalElements === false) {
                $externalElements = [];
            }
            $externalClasses = ExternalMapElement::$arrClasses;

            // basemaps
            //
            $mapData['default_baselayer'] = $profile->default_baselayer;
            if ($profile->dummyBaselayer &&
                StringUtil::binToUuid($profile->dummyBaselayer) &&
                FilesModel::findByUuid(StringUtil::binToUuid($profile->dummyBaselayer)) &&
                FilesModel::findByUuid(StringUtil::binToUuid($profile->dummyBaselayer))->path) {
                $mapData['dummyBaselayer'] = FilesModel::findByUuid(StringUtil::binToUuid($profile->dummyBaselayer))->path;
            }

            //+1 for older define checks key = button / value = sorting position
            $mapData['zoom'] = is_array($buttons) && array_key_exists('zoom', $buttons) ? $buttons['zoom'] + 1 : 0;
            $mapData['fullscreen'] = is_array($buttons) && array_key_exists('fullscreen', $buttons) ? $buttons['fullscreen'] + 1 : 0;
            $mapData['zoomPosition'] = is_array($buttons) && array_key_exists('zoomPosition', $buttons) ? $buttons['zoomPosition'] + 1 : 0;
            $mapData['zoomHome'] = is_array($buttons) && array_key_exists('zoomHome', $buttons) ? $buttons['zoomHome'] + 1 : 0;
            $mapData['zoomExtent'] = is_array($buttons) && array_key_exists('zoomExtent', $buttons) ? $buttons['zoomExtent'] + 1 : 0;
            $mapData['print'] = is_array($buttons) && array_key_exists('print', $buttons) ? $buttons['print'] + 1 : 0;
            $mapData['rotate'] = is_array($buttons) && array_key_exists('rotate', $buttons) ? $buttons['rotate'] + 1 : 0;
            $mapData['graticule'] = is_array($buttons) && array_key_exists('graticule', $buttons) ? $buttons['graticule'] + 1 : 0;
            $mapData['layerswitcher']['enable'] = is_array($buttons) && array_key_exists('layerswitcher', $buttons) ? $buttons['layerswitcher'] + 1 : 0;
            $mapData['baselayerswitcher']['enable'] = is_array($buttons) && array_key_exists('baselayerswitcher', $buttons) ? $buttons['baselayerswitcher'] + 1 : 0;
            $mapData['starboardscope']['enable'] = is_array($buttons) && array_key_exists('starboardscope', $buttons) ? $buttons['starboardscope'] + 1 : 0;
            $mapData['geosearch']['enable'] = is_array($buttons) && array_key_exists('geosearch', $buttons) ? $buttons['geosearch'] + 1 : 0;
            $mapData['legend']['enable'] = is_array($buttons) && array_key_exists('legend', $buttons) ? $buttons['legend'] + 1 : 0;
            $mapData['measuretools']['enable'] = is_array($buttons) && array_key_exists('measure', $buttons) ? $buttons['measure'] + 1 : 0;
            $mapData['overviewmap'] = is_array($buttons) && array_key_exists('overview', $buttons) ? $buttons['overview'] + 1 : 0;
            $mapData['permalink']['enable'] = is_array($buttons) && array_key_exists('permalink', $buttons) ? $buttons['permalink'] + 1 : 0;

            // location-style resizing
            //
//            $mapData['resize_locstyles_zoom'] = $profile->resize_locstyles_zoom;
            if ($profile->resize_locstyles_zoom) {
                $mapData['resizeLocstyles'] = [
                    'srcZoom' => $profile->resize_src_zoom,
                    'scaleFactor' => $profile->resize_scale_factor,
                    'minScale' => $profile->resize_min_scale,
                    'maxScale' => $profile->resize_max_scale,
                ];
            }

            if ($profile->mouse_nav) {
                $mapData['mouse_nav']['drag_pan'] = $profile->mouse_nav;
                $mapData['mouse_nav']['wheel_zoom'] = $profile->mouse_nav_wheel;
                $mapData['mouse_nav']['doubleclick_zoom'] = $profile->mouse_nav_doubleclick_zoom;
                $mapData['mouse_nav']['drag_zoom'] = $profile->mouse_nav_zoombox;
                $mapData['mouse_nav']['kinetic'] = $profile->mouse_nav_kinetic;
                $mapData['mouse_nav']['toolbar'] = $profile->mouse_nav_toolbar;
            }
            if ($profile->touch_nav) {
                $mapData['touch_nav']['rotate'] = $profile->touch_nav;
                $mapData['touch_nav']['zoom'] = $profile->touch_nav;
                $mapData['touch_nav']['twoFingers'] = $profile->twoFingers;
            }
            if ($profile->keyboard_nav) {
                $mapData['keyboard_nav']['pan'] = $profile->keyboard_nav;
                $mapData['keyboard_nav']['zoom'] = $profile->keyboard_nav;
            }

            // Starboard
            //
            //if (array_key_exists('starboard',$buttons)) { //ToDo
            $mapData['starboard']['enable'] = 1; //ToDo
            $mapData['starboard']['open'] = $profile->starboard_open;
            $mapData['starboard']['label'] = $profile->starboard_label;
            $mapData['starboard']['div'] = (is_array($externalElements) && in_array('starboard', $externalElements)) ? $externalClasses['starboard'] : '';
            $mapData['starboard']['button'] = $profile->starboard_button;
            $mapData['starboard']['showLocstyles'] = $profile->starboard_locstyles;
            $mapData['starboard']['invertZoomActivate'] = $profile->starboardInvertZoomActivate;
            $mapData['starboard']['colorZoomMarker'] = $profile->colorZoomMarker;
            $mapData['starboard']['maxZoom'] = $profile->maxZoomStarboard;
            $mapData['starboard']['openPopup'] = $profile->openPopup;
            $mapData['cluster_all'] = $profile->cluster_all;
            $mapData['cluster_distance'] = $profile->cluster_distance;
            $mapData['cluster_fillcolor'] = $profile->cluster_fillcolor;
            $mapData['cluster_fontcolor'] = $profile->cluster_fontcolor;
            $mapData['cluster_zoom'] = $profile->cluster_zoom;
            $mapData['cluster_dist_spider'] = $profile->cluster_dist_spider;
            $mapData['cluster_scale'] = $profile->cluster_scale;

            $mapData['userLocation'] = $profile->userLocation;
            $mapData['userLocationStyle'] = $profile->userLocationStyle;
            //}

            if (is_array($buttons) && array_key_exists('layerswitcher', $buttons)) {
                // Layerswitcher
                //$mapData['layerswitcher']['enable'] = $profile->layerswitcher;
                $mapData['layerswitcher']['label'] = $profile->layerswitcher_label;
                $mapData['layerswitcher']['filter'] = $profile->starboard_filter;
                $mapData['layerswitcher']['filter_placeholder'] = $profile->starboard_filter_placeholder;
            }
            if (is_array($buttons) && array_key_exists('baselayerswitcher', $buttons)) {
                // Baselayerswitcher
                //$mapData['baselayerswitcher']['enable'] = $profile->baselayerswitcher;
                $mapData['baselayerswitcher']['label'] = $profile->baselayerswitcher_label;
                $mapData['baselayerswitcher']['filter'] = $profile->baselayer_filter;
                $mapData['baselayerswitcher']['div'] = (is_array($externalElements) && in_array('baselayer', $externalElements)) ? $externalClasses['baselayer'] : '';
            }

            $mapData['filterDiv'] = (is_array($externalElements) && in_array('filter', $externalElements)) ? $externalClasses['filter'] : '';
            $mapData['filterHandling'] = $profile->filterHandling;
            $mapData['filterResetButton'] = $profile->filterResetButton;

            // map-tools
            //
//            if ($profile->measuretool) {
//                $mapData['measuretools']['enable'] = $profile->measuretool;
//            }

            // map-information
            //
            $mapData['attribution']['enable'] = $profile->attribution;
            if ($profile->attribution) {
                $settings = C4gMapSettingsModel::findOnly();
                if (isset($settings->con4gisIoUrl) && isset($settings->con4gisIoKey) && $settings->con4gisIoUrl && $settings->con4gisIoKey) {
                    $mapData['attribution']['con4gisIO'] = 1;
                }
                $mapData['attribution']['always_show'] = $profile->always_show_attribution;
                $mapData['attribution']['collapsed'] = $profile->collapsed_attribution;
                if ($profile->cfg_logo_attribution) {
                    $mapData['attribution']['cfg_logo'] = $profile->cfg_logo_attribution;
                }
                if ($profile->div_attribution) {
                    $mapData['attribution']['div'] = $profile->div_attribution;
                }
                if ($profile->add_attribution) {
                    $mapData['attribution']['additional'] = System::getContainer()->get('contao.insert_tag.parser')->replace($profile->add_attribution);
                }
            }
            //$mapData['overviewmap'] = $profile->overviewmap;
            $mapData['scaleline'] = $profile->scaleline;
            $mapData['mouseposition'] = $profile->mouseposition;

            if ($mapData['permalink']['enable']) {
                $mapData['permalink']['get_parameter'] = $profile->permalink_get_param;
                $mapData['permalink']['div'] = (is_array($externalElements) && in_array('permalink', $externalElements)) ? $externalClasses['permalink'] : '';
                $mapData['permalink']['saveIds'] = $profile->permalinkSaveId;
            }
            $mapData['permalink']['withoutGenerator'] = $profile->permalinkWithoutGenerator;

            $mapData['zoomlevel'] = $profile->zoomlevel;

            if ($profile->caching) {
                $mapData['caching'] = 1;
            }
            $objSettings = C4gMapSettingsModel::findOnly();

            // geosearch
            //
            if (is_array($buttons) && (array_key_exists('geosearch', $buttons) || array_key_exists('routing', $buttons))) {
                $mapData['geosearch']['headline'] = $profile->geosearch_headline ? $profile->geosearch_headline : '';
                $mapData['geosearch']['geosearch_engine'] = $profile->geosearch_engine;

                if ($profile->geosearch_customengine_attribution) {
                    $mapData['geosearch']['custom_attribution'] = System::getContainer()->get('contao.insert_tag.parser')->replace($profile->geosearch_customengine_attribution);
                }
                $mapData['geosearch']['results'] = $profile->geosearch_results;
                $mapData['geosearch']['result_count'] = $profile->geosearch_result_count;
                $mapData['geosearch']['results_headline'] = $profile->geosearch_results_headline;
                $mapData['geosearch']['result_locstyle'] = $profile->geosearch_result_locstyle;
                $mapData['geosearch']['div'] = is_array($externalElements) && (in_array('search', $externalElements)) ? $externalClasses['search'] : '';
                $mapData['geosearch']['div_results'] = is_array($externalElements) && (in_array('results', $externalElements)) ? $externalClasses['results'] : '';
                $mapData['geosearch']['placeholder'] = $profile->geosearch_placeholder;
                $mapData['geosearch']['searchzoom'] = $profile->geosearch_zoomto;
                $mapData['geosearch']['zoombounds'] = $profile->geosearch_zoombounds;
                $mapData['geosearch']['animate'] = $profile->geosearch_animate;
                $mapData['geosearch']['animate_duration'] = $profile->geosearch_animate_duration;
                $mapData['geosearch']['markresult'] = $profile->geosearch_markresult;
                $mapData['geosearch']['result_duration'] = $profile->geosearch_result_duration;
                $mapData['geosearch']['popup'] = $profile->geosearch_popup;
                $mapData['geosearch']['attribution'] = $profile->geosearch_attribution;
                if ($profile->geosearch_engine == '4') {
                    $keyParams[] = ['2', ''];
                    $keyParams[] = ['3', ''];
                    $mapData['geosearch']['url'] = rtrim($objSettings->con4gisIoUrl, '/') . '/';
                    $mapData['geosearch']['params'] = [];
                    if ($profile->geosearchParams) {
                        foreach (\Contao\StringUtil::deserialize($profile->geosearchParams) as $geosearchParam) {
                            $mapData['geosearch']['params'] = array_merge($mapData['geosearch']['params'], [$geosearchParam['keys'] => $geosearchParam['params']]);
                        }
                    }
                }

                switch ($profile->geosearch_engine) {
                    case '1':
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank" rel="noopener">OpenStreetMap</a>';

                        break;
                    case '2':
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank" rel="noopener">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" alt="" />';

                        break;
                    case '3':
                        if ($profile->attribution && $profile->geosearch_customengine_attribution) {
                            $mapData['attribution']['geosearch'] = System::getContainer()->get('contao.insert_tag.parser')->replace($profile->geosearch_customengine_attribution);
                        }

                        break;
                    case '4':

                        break;
                    case '6':
                        //$mapData['attribution']['geosearch'] = System::getContainer()->get('contao.insert_tag.parser')->replace('ToDo');
                        break;
                    default:
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank" rel="noopener">OpenStreetMap</a>';

                        break;
                }
            }
            if (is_array($buttons) && array_key_exists('starboardscope', $buttons)) {
                $mapData['starboardscope']['div'] = (is_array($externalElements) && in_array('starboardscope', $externalElements)) ? $externalClasses['starboardscope'] : '';
                $mapData['starboardscope']['open'] = (is_array($externalElements) && in_array('starboardscope', $externalElements));
                if ($key2 = C4GUtils::getKey($objSettings, 6)) {
                    $mapData['proxyUrl'] = $objSettings->con4gisIoUrl;
                    $mapData['matrixKey'] = $key2;
                }
            }

            // geopicker
            //
            if ($profile->geopicker) {
                $mapData['geopicker']['enable'] = $profile->geopicker;
                $mapData['geopicker']['type'] = 'frontend';
                $mapData['geopicker']['input_geo_x'] = '#' . $profile->geopicker_fieldx;
                $mapData['geopicker']['input_geo_y'] = '#' . $profile->geopicker_fieldy;
                $mapData['geopicker']['anonymous'] = $profile->geopicker_anonymous;
                $mapData['geopicker']['disabled'] = $profile->geopicker_disabled;
            }

            if ($profile->label_color) {
                $mapData['default_label_color'] = $profile->label_color;
            }

            // editor
            //
            if ($profile->editor) {
                if (isset($mapData['editor']['type']) && $mapData['editor']['type'] === 'backend') {
                    // is already set, we are in backend mode
                } else {
                    $mapData['editor']['enable'] = $profile->editor;
                    $mapData['editor']['type'] = 'frontend';
                    $mapData['editor']['open'] = false;
                }
            }

            // cesium
            //
            if ($profile->cesium) {
                $mapData['cesium'] = [];
                $mapData['cesium']['enable'] = $profile->cesium;
                $mapData['cesium']['always'] = $profile->cesium_always;
            }
            if ($profile->minZoomStarboardScope) {
                $mapData['minZoomStarboardScope'] = (int) $profile->minZoomStarboardScope;
            }

            // overpass handling
            //
            if ($profile->overpassEngine === '2') {
                $keyParams[] = ['5', ''];
            }
            // check baselayers if a key is needed
            $keyParams = static::checkBaselayers($profile, $objSettings, $keyParams);
            if ($keyParams && count($keyParams) > 0) {
                $arrKeys = C4GUtils::getKeys($objSettings, $keyParams);
                $blKeys = [];
                if (is_array($arrKeys)) foreach ($arrKeys as $key => $keyValue) {
                    $service = $keyParams[$key][0];
                    switch ($service) {
                        case 2:
                            $mapData['geosearch']['searchKey'] = $keyValue['key'];
                            $mapData['attribution']['geosearch'] = $keyValue['attribution'] ?? null;

                            break;
                        case 3:
                            $mapData['geosearch']['reverseKey'] = $keyValue['key'];

                            break;
                        case 4:
                            $blKeys[$keyParams[$key][2]] = $keyValue;

                            break;
                        case 5:
                            $mapData['ovp_key'] = $keyValue['key'];

                            break;

                    }
                }
                if (count($blKeys) > 0) {
                    $mapData['base_keys'] = $blKeys;
                }
            }
            // miscellaneous
            //
            $parser = System::getContainer()->get('contao.insert_tag.parser');
            $mapData['infopage'] = $parser->replace($profile->infopage ?? "");
            $mapData['legend']['div'] = (is_array($externalElements) && in_array('legend', $externalElements)) ? $externalClasses['legend'] : '';
            $mapData['initial_open_comp'] = $profile->initial_open_comp;
            $mapData['link_newwindow'] = $profile->link_newwindow;
            switch ($profile->tooltipOrientation) {
                case 0:
                    $mapData['tooltipOrientation'] = 'top-right';

                    break;
                case 1:
                    $mapData['tooltipOrientation'] = 'bottom-right';

                    break;
                case 2:
                    $mapData['tooltipOrientation'] = 'top-left';

                    break;
                case 3:
                    $mapData['tooltipOrientation'] = 'bottom-left';

                    break;
                default:
                    $mapData['tooltipOrientation'] = 'top-right';

                    break;
            }
            $mapData['hover_popups'] = $profile->hover_popups;
            $mapData['hover_popups_stay'] = $profile->hover_popups_stay;
            $mapData['popupDiv'] = (is_array($externalElements) && in_array('popup', $externalElements)) ? $externalClasses['popup'] : '';
            $mapData['popupHandling'] = $mapData['popupDiv'] ? 3 : ($profile->popupHandling == 4 ? 0 : $profile->popupHandling);
            $mapData['popupHeadline'] = $profile->popupHeadline;
            $mapData['popupMultiple'] = $profile->popupMultiple && ($profile->popupHandling < 2 || $profile->popupHandling == 4);
            if ($profile->consentBanner) {
                $mapData['cookie'] = [
                    'info' => $profile->cookieInfo,
                    'name' => $profile->cookieName,
                    'value' => $profile->cookieValue,
                ];
            }
        }

        // mapservice
        $baseLayer = C4gMapBaselayersModel::findById($objThis->c4g_map_default_mapservice);
        if ($baseLayer) {
            $mapData['baselayer'] = $baseLayer->id;
            $mapData['minZoom'] = $baseLayer->minzoomlevel;
            $mapData['maxZoom'] = $baseLayer->maxzoomlevel;
        }

        // API
        //
        $mapData['api']['baselayer'] = $GLOBALS['con4gis']['maps']['api']['baselayer'];
        $mapData['api']['layer'] = $GLOBALS['con4gis']['maps']['api']['layer'];
        $mapData['api']['layercontent'] = $GLOBALS['con4gis']['maps']['api']['layercontent'];

        $mapData['api']['locstyle'] = $GLOBALS['con4gis']['maps']['api']['locstyle'];
        $mapData['api']['infowindow'] = $GLOBALS['con4gis']['maps']['api']['infowindow'];
        $mapData['api']['editor'] = $GLOBALS['con4gis']['maps']['api']['editor'];

        $mapData['api']['geosearch'] = $GLOBALS['con4gis']['maps']['api']['geosearch'];
        $mapData['api']['geosearch_reverse'] = $GLOBALS['con4gis']['maps']['api']['geosearch_reverse'];
        $mapData['api']['routing'] = $GLOBALS['con4gis']['maps']['api']['routing'];
        $mapData['api']['filter'] = $GLOBALS['con4gis']['maps']['api']['filter'];

        // check for initializing get parameters
        if (Input::get('mapsParams')) {
            $mapData['initialParams'] = Input::get('mapsParams');
        }
        $eventDispatcher = System::getContainer()->get('event_dispatcher');
        $event = new LoadMapdataEvent();
        $event->setMapData($mapData);
        $eventDispatcher->dispatch($event, $event::NAME);
        $mapData = $event->getMapData();

        // load resources
        //
        // tell the Core to load all resources needed for maps
        if (!$preventResourceLoader) {
            ResourceLoader::loadResourcesForModule('maps');
            // load internal scripts and themes
            if ($profileId) {
                $mapData['themeData'] = ResourceLoader::loadResourcesForProfile($profileId, isset($options['type']) && $options['type'] == 'geopicker', null, $mapData);
            } else {
                ResourceLoader::loadResources();
                $mapData['themeData'] = ResourceLoader::loadTheme();
            }
        }
        // @TODO: Check
        $mapData['addIdToDiv'] = true;

        return $mapData;
    }

    private static function checkBaselayers($profile, $objSettings, $arrKeyParams)
    {
        if ($profile->baselayers !== null) {
            $baselayerIds = \Contao\StringUtil::deserialize($profile->baselayers);
            $blResult = C4gMapBaselayersModel::findMultipleByIds($baselayerIds);
        } else {
            $blResult = C4gMapBaselayersModel::findAll();
        }
        if (!$blResult instanceof Collection) {
            return [];
        }
        $baseLayers = $blResult->fetchAll();

        foreach ($baseLayers as $baseLayer) {
            if ($baseLayer['provider'] == 'con4gisIo') {
                $arrKeyParams[] = ['4', $baseLayer['con4gisIo'], $baseLayer['id']];
            }
            else if ($baseLayer['provider'] == 'group') {
                $layerGroup = StringUtil::deserialize($baseLayer['layerGroup']);
                foreach ($layerGroup as $key => $layer) {
                    $objChildLayer = C4gMapBaselayersModel::findByPk($layer['baselayers']);
                    if ($objChildLayer->provider == "con4gisIo") {
                        $arrKeyParams[] = ['4', $objChildLayer->con4gisIo, $objChildLayer->id];
                    }
                }
            }
        }

        return $arrKeyParams;
    }
}
