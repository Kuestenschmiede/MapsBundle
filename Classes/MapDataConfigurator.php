<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes;

use BugBuster\MobileDetection\Mobile_Detection;
use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\modules\ExternalMapElement;
use Contao\Controller;
use Contao\Input;
use Contao\Model\Collection;
use Contao\System;

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

        //TODO: currently when in backend mode, not the correct things are loaded
        //TODO: no profile is found
        // get map
        $map = C4gMapsModel::findByPk($objThis->c4g_map_id);
        if (!$map) {
            $map = new C4gMapsModel();
            $map->id = 0;
        }
        $language = Controller::replaceInsertTags('{{page::language}}') ?  Controller::replaceInsertTags('{{page::language}}') : substr($GLOBALS['_SERVER']['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        $mapData['id'] = $map->id;
        $mapData['lang'] = $language;

        // ------------------------------------------------------------------------
        // get profile for map
        // ------------------------------------------------------------------------
        if ($options['profile']) {
            $profileId = $options['profile'];
        } else {
            $profileId = $map->profile;
        }
        // check for mobile-profile
        $isMobile = false;
        $mobileDetection = new Mobile_Detection();
        if ($mobileDetection->isMobile() && ($map->profile_mobile > 0)) {
            $isMobile = true;
            $profileId = $map->profile_mobile;
        }

        //check if we are in backend mode
        if ($options['geoeditor']) {
            // select selected backend profile
            $result = C4gSettingsModel::findSettings();
            $profileId = $result->row();
            $profileId = $profileId['editorprofile'];
            $mapData['editor'] = [];
            $mapData['editor']['enable'] = true;
            $mapData['editor']['type'] = 'backend';
        }

        //check if we are in backend mode
        if ($options['type'] == 'geopicker') {
            // select selected backend profile
            $settings = C4gSettingsModel::findAll();
            $profileId = $settings[0]->beGeopickerProfile ? $settings[0]->beGeopickerProfile : $settings[0]->defaultprofile;
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
        if ((FE_USER_LOGGED_IN) && ($map->use_specialprofile)) {
            $groupMatch = array_intersect($objThis->User->groups, deserialize($map->specialprofile_groups));
            if (!empty($groupMatch)) {
                if (($isMobile) && ($map->specialprofile_mobile)) {
                    $profileId = $map->specialprofile_mobile;
                } else {
                    $profileId = $map->specialprofile;
                }
            }
        }

        //check for profile manipulation by another bundle
        $profileService = \System::getContainer()->get('con4gis.profile_service');
        if ($profileService) {
            $profileId = $profileService->getProfileId($profileId);
        }
        // get appropriate profile from database
        $profile = C4gMapProfilesModel::findByPk($profileId);
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
                $mapData['center']['lon'] = \Contao\Controller::replaceInsertTags($map->center_geox);
            }
            if (!empty($map->center_geoy)) {
                $mapData['center']['lat'] = \Contao\Controller::replaceInsertTags($map->center_geoy);
            }
            if (!empty($map->center_rotation)) {
                $mapData['center']['rotation'] = $map->center_rotation / 180 * pi();
            }
            // map-zoom
            if (!empty($map->zoom)) {
                $mapData['center']['zoom'] = \Contao\Controller::replaceInsertTags($map->zoom);
            }

            // geolocation (use user-location, if possible)
            if ($map->geolocation) {
                $mapData['geolocation'] = true;
                $mapData['geolocation_zoom'] = \Contao\Controller::replaceInsertTags($map->geolocation_zoom);
            }

            // map-size
            $mapWidth = deserialize($map->width);
            if (is_array($mapWidth) && ($mapWidth['value'] != 0) && !empty($mapWidth['unit'])) {
                $mapData['width'] = $mapWidth['value'] . $mapWidth['unit'];
            }
            $mapHeight = deserialize($map->height);
            if (is_array($mapHeight) && ($mapHeight['value'] != 0) && !empty($mapHeight['unit'])) {
                $mapData['height'] = $mapHeight['value'] . $mapHeight['unit'];
            }

            // map-margin
            $mapMargin = deserialize($map->margin);
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
        $mapWidth = deserialize($objThis->c4g_map_width);
        if (is_array($mapWidth) && ($mapWidth['value'] != 0) && !empty($mapWidth['unit'])) {
            $mapData['width'] = $mapWidth['value'] . $mapWidth['unit'];
        }
        $mapHeight = deserialize($objThis->c4g_map_height);
        if (is_array($mapHeight) && ($mapHeight['value'] != 0) && !empty($mapHeight['unit'])) {
            $mapData['height'] = $mapHeight['value'] . $mapHeight['unit'];
        }

        // ------------------------------------------------------------------------
        // collect data from map profile
        // ------------------------------------------------------------------------
        if ($profile) {
            // general
            //
            $mapFunctions = unserialize($profile->mapFunctions);
            $buttons = array_flip($mapFunctions);

            // external elements
            $externalElements = unserialize($profile->external_elements);
            if ($externalElements === false) {
                $externalElements = [];
            }
            $externalClasses = ExternalMapElement::$arrClasses;

            // basemaps
            //
            $mapData['default_baselayer'] = $profile->default_baselayer;

            //+1 for older define checks key = button / value = sorting position
            $mapData['zoom'] = array_key_exists('zoom', $buttons) ? $buttons['zoom'] + 1 : 0;
            $mapData['fullscreen'] = array_key_exists('fullscreen', $buttons) ? $buttons['fullscreen'] + 1 : 0;
            $mapData['zoomPosition'] = array_key_exists('zoomPosition', $buttons) ? $buttons['zoomPosition'] + 1 : 0;
            $mapData['zoomHome'] = array_key_exists('zoomHome', $buttons) ? $buttons['zoomHome'] + 1 : 0;
            $mapData['zoomExtent'] = array_key_exists('zoomExtent', $buttons) ? $buttons['zoomExtent'] + 1 : 0;
            $mapData['print'] = array_key_exists('print', $buttons) ? $buttons['print'] + 1 : 0;
            $mapData['rotate'] = array_key_exists('rotate', $buttons) ? $buttons['rotate'] + 1 : 0;
            $mapData['graticule'] = array_key_exists('graticule', $buttons) ? $buttons['graticule'] + 1 : 0;
            $mapData['layerswitcher']['enable'] = array_key_exists('layerswitcher', $buttons) ? $buttons['layerswitcher'] + 1 : 0;
            $mapData['baselayerswitcher']['enable'] = array_key_exists('baselayerswitcher', $buttons) ? $buttons['baselayerswitcher'] + 1 : 0;
            $mapData['geosearch']['enable'] = array_key_exists('geosearch', $buttons) ? $buttons['geosearch'] + 1 : 0;
            $mapData['legend']['enable'] = array_key_exists('legend', $buttons) ? $buttons['legend'] + 1 : 0;
            $mapData['measuretools']['enable'] = array_key_exists('measure', $buttons) ? $buttons['measure'] + 1 : 0;
            $mapData['overviewmap'] = array_key_exists('overview', $buttons) ? $buttons['overview'] + 1 : 0;
            $mapData['permalink']['enable'] = array_key_exists('permalink', $buttons) ? $buttons['permalink'] + 1 : 0;

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
            $mapData['starboard']['label'] = \Contao\Controller::replaceInsertTags($profile->starboard_label);
            $mapData['starboard']['div'] = (in_array('starboard', $externalElements)) ? $externalClasses['starboard'] : '';
            $mapData['starboard']['button'] = $profile->starboard_button;
            $mapData['starboard']['showLocstyles'] = $profile->starboard_locstyles;
            $mapData['starboard']['invertZoomActivate'] = $profile->starboardInvertZoomActivate;
            $mapData['starboard']['colorZoomMarker'] = $profile->colorZoomMarker;
            $mapData['starboard']['maxZoom'] = $profile->maxZoomStarboard;
            $mapData['cluster_all'] = $profile->cluster_all;
            $mapData['cluster_distance'] = $profile->cluster_distance;
            $mapData['cluster_fillcolor'] = $profile->cluster_fillcolor;
            $mapData['cluster_fontcolor'] = $profile->cluster_fontcolor;
            $mapData['cluster_zoom'] = $profile->cluster_zoom;
            $mapData['cluster_dist_spider'] = $profile->cluster_dist_spider;
            $mapData['cluster_scale'] = $profile->cluster_scale;
            //}

            if (array_key_exists('layerswitcher', $buttons)) {
                // Layerswitcher
                //$mapData['layerswitcher']['enable'] = $profile->layerswitcher;
                $mapData['layerswitcher']['label'] = \Contao\Controller::replaceInsertTags($profile->layerswitcher_label);
                $mapData['layerswitcher']['filter'] = $profile->starboard_filter;
            }

            if (array_key_exists('baselayerswitcher', $buttons)) {
                // Baselayerswitcher
                //$mapData['baselayerswitcher']['enable'] = $profile->baselayerswitcher;
                $mapData['baselayerswitcher']['label'] = \Contao\Controller::replaceInsertTags($profile->baselayerswitcher_label);
                $mapData['baselayerswitcher']['filter'] = $profile->baselayer_filter;
                $mapData['baselayerswitcher']['div'] = (in_array('baselayer', $externalElements)) ? $externalClasses['baselayer'] : '';
            }

            $mapData['filterDiv'] = (in_array('filter', $externalElements)) ? $externalClasses['filter'] : '';
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
                if ($settings->con4gisIoUrl && $settings->con4gisIoKey) {
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
                    $mapData['attribution']['additional'] = \Contao\Controller::replaceInsertTags($profile->add_attribution);
                }
            }
            //$mapData['overviewmap'] = $profile->overviewmap;
            $mapData['scaleline'] = $profile->scaleline;
            $mapData['mouseposition'] = $profile->mouseposition;

            if ($mapData['permalink']['enable']) {
                $mapData['permalink']['get_parameter'] = $profile->permalink_get_param;
                $mapData['permalink']['div'] = (in_array('permalink', $externalElements)) ? $externalClasses['permalink'] : '';
            }
            $mapData['zoomlevel'] = $profile->zoomlevel;

            if ($profile->caching) {
                $mapData['caching'] = 1;
            }
            $objSettings = C4gMapSettingsModel::findOnly();

            // geosearch
            //
            if (array_key_exists('geosearch', $buttons)) {
                $mapData['geosearch']['headline'] = $profile->geosearch_headline ? $profile->geosearch_headline : '';
                $mapData['geosearch']['geosearch_engine'] = $profile->geosearch_engine;

                if ($profile->geosearch_customengine_attribution) {
                    $mapData['geosearch']['custom_attribution'] = \Contao\Controller::replaceInsertTags($profile->geosearch_customengine_attribution);
                }
                $mapData['geosearch']['results'] = $profile->geosearch_results;
                $mapData['geosearch']['result_count'] = $profile->geosearch_result_count;
                $mapData['geosearch']['results_headline'] = $profile->geosearch_results_headline;
                $mapData['geosearch']['result_locstyle'] = $profile->geosearch_result_locstyle;
                $mapData['geosearch']['div'] = (in_array('search', $externalElements)) ? $externalClasses['search'] : '';
                $mapData['geosearch']['div_results'] = $profile->geosearch_results_div;
                $mapData['geosearch']['placeholder'] = $profile->geosearch_placeholder;
                $mapData['geosearch']['searchzoom'] = $profile->geosearch_zoomto;
                $mapData['geosearch']['zoombounds'] = $profile->geosearch_zoombounds;
                $mapData['geosearch']['animate'] = $profile->geosearch_animate;
                $mapData['geosearch']['animate_duration'] = $profile->geosearch_animate_duration;
                $mapData['geosearch']['markresult'] = $profile->geosearch_markresult;
                $mapData['geosearch']['result_duration'] = $profile->geosearch_result_duration;
                $mapData['geosearch']['popup'] = \Contao\Controller::replaceInsertTags($profile->geosearch_popup);
                $mapData['geosearch']['attribution'] = \Contao\Controller::replaceInsertTags($profile->geosearch_attribution);
                $keyForward = null;
                if ($profile->geosearch_engine == '4') {
                    $keyForward = (array) C4GUtils::getKey($objSettings, '2', '', false);
                    $mapData['geosearch']['searchKey'] = $keyForward['key'];
                    $mapData['geosearch']['reverseKey'] = ((array) C4GUtils::getKey($objSettings, '3', '', false))['key'];
                    $mapData['geosearch']['url'] = rtrim($objSettings->con4gisIoUrl, '/') . '/';
                    $mapData['geosearch']['params'] = [];
                    if ($profile->geosearchParams) {
                        foreach (unserialize($profile->geosearchParams) as $geosearchParam) {
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
                            $mapData['attribution']['geosearch'] = \Contao\Controller::replaceInsertTags($profile->geosearch_customengine_attribution);
                        }

                        break;
                    case '4':
                        $mapData['attribution']['geosearch'] = $keyForward['attribution'];

                        break;
                    default:
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank" rel="noopener">OpenStreetMap</a>';

                        break;
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

            // overpass handling
            //
            if ($profile->overpassEngine === '2') {
                $key = C4GUtils::getKey($objSettings, '5');
                $mapData['ovp_key'] = $key;
            }

            // check baselayers if a key is needed
            $blKeys = static::checkBaselayers($profile, $objSettings);
            if (count($blKeys) > 0) {
                $mapData['base_keys'] = $blKeys;
            }

            // miscellaneous
            //
            $mapData['infopage'] = \Contao\Controller::replaceInsertTags($profile->infopage);
            $mapData['legend']['div'] = (in_array('legend', $externalElements)) ? $externalClasses['legend'] : '';
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
            $mapData['popupHandling'] = $profile->popupHandling;
            $mapData['popupHeadline'] = $profile->popupHeadline;
            $mapData['popupDiv'] = (in_array('popup', $externalElements)) ? $externalClasses['popup'] : '';
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
        $eventDispatcher->dispatch($event::NAME, $event);
        $mapData = $event->getMapData();

        // load resources
        //
        // tell the Core to load all resources needed for maps
        if (!$preventResourceLoader) {
            ResourceLoader::loadResourcesForModule('maps');
            // load internal scripts and themes
            if ($profileId) {
                $mapData['themeData'] = ResourceLoader::loadResourcesForProfile($profileId, $options['type'] == 'geopicker', null, $mapData);
            } else {
                ResourceLoader::loadResources();
                $mapData['themeData'] = ResourceLoader::loadTheme();
            }
        }
        // @TODO: Check
        $mapData['addIdToDiv'] = true;

        return $mapData;
    }

    private static function checkBaselayers($profile, $objSettings)
    {
        $arrKeys = [];
        if ($profile->baselayers !== null) {
            $baselayerIds = unserialize($profile->baselayers);
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
                $catribution = C4GUtils::getKey($objSettings, '4', 'id=' . $baseLayer['con4gisIo'], false); // this is a bad pun with key and attribution. But i wanted a cat instead of a kat
                $arrKeys[$baseLayer['id']] = $catribution;
            }
        }

        return $arrKeys;
    }
}
