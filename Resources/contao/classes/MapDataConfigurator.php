<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\classes;

use BugBuster\MobileDetection\Mobile_Detection;
use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use Contao\Controller;
use Contao\Input;
use Contao\Model\Collection;
use Contao\System;

/**
 * Class MapDataConfigurator
 * @package con4gis\MapsBundle\Resources\contao\classes
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
    public static function prepareMapData($objThis, $database, $options = array())
    {
        $mapData = array();
        $mapData['mapId'] = $objThis->id;

        // import user, if not already done
        if (!isset($objThis->User)) {
            if ($options['backend']) {
                $objThis->import('BackendUser', 'User');
            } else {
                $objThis->import('FrontendUser', 'User');
            }
        }

        //TODO: currently when in backend mode, not the correct things are loaded
        //TODO: no profile is found
        // get map
        $map = C4gMapsModel::findByPk($objThis->c4g_map_id);
        if (!$map) {
            $map = new C4gMapsModel();
            $map->id = 0;
        }
        $language = Controller::replaceInsertTags("{{page::language}}");
        $mapData['id'] = $map->id;
        $mapData['lang'] = $language;

        // ------------------------------------------------------------------------
        // get profile for map
        // ------------------------------------------------------------------------
        $profileId = $map->profile;
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
//            $result = $database->prepare("SELECT id FROM `tl_c4g_map_profiles` WHERE `is_backend_editor_default` = '1'")->limit(1)->execute();
//            $profileId = $result->row();
//            $profileId = $profileId['id'];
            $mapData['editor'] = [];
            $mapData['editor']['enable'] = true;
            $mapData['editor']['type'] = 'backend';
        }

        //check if we are in backend mode
        if ($options['type'] == 'geopicker') {
            // select selected backend profile
            $result = $database->prepare("SELECT id FROM `tl_c4g_map_profiles` WHERE `is_backend_geopicker_default` = '1'")->limit(1)->execute();
            $profileId = $result->row();
            $profileId = $profileId['id'];
        }

        if (!$profileId) {
            $settings = C4gSettingsModel::findAll();
            $profileId = $settings[0]->defaultprofile;
            if (!$profileId) {
                $profiles = C4gMapProfilesModel::findAll();
                if ($profiles && (count($profiles) > 0)) {
                    $length = count($profiles);
                    $profileId = $profiles[$length-1];
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
                $profile = C4gMapProfilesModel::findBy('is_backend_geopicker_default',1);
                if (!$profile) {
                    $settings = C4gSettingsModel::findAll();
                    $profile = $settings[0]->defaultprofile;
                    if (!$profile) {
                        $profiles = C4gMapProfilesModel::findAll();
                        if ($profiles && (count($profiles) > 0)) {
                            $length = count($profiles);
                            $profile = $profiles[$length-1];
                        }
                    }
                }
            }
            if ($profile) {
                $profileId = $profile->id;
            } else {
                // set defaults for geopicker
                $mapData['zoom_panel'] = true;
                $mapData['zoom_slider'] = false;
                $mapData['zoom_extent'] = false;
                $mapData['zoom_home'] = false;
                $mapData['zoom_position'] = false;
                $mapData['mouse_nav']['wheel_zoom'] = true;
                $mapData['mouse_nav']['doubleclick_zoom'] = true;
                $mapData['mouse_nav']['drag_pan'] = true;

                // map-information
                //
                $mapData['attribution'] = array();
                $mapData['attribution']['enable'] = true;
                $mapData['attribution']['collapsed'] = true;
                $mapData['attribution']['cfg_logo'] = false;
                $mapData['scaleline'] = false;
                $mapData['mouseposition'] = false;
                $mapData['zoomlevel'] = 1;
                $mapData['account'] = 0;
                $mapData['caching'] = 0;
            }
        }
        
        $mapData['profile'] = $profileId;

        // ------------------------------------------------------------------------
        // set basic map options
        // ------------------------------------------------------------------------
        if (!$mapData['id'])
        {
            $mapData['mapId'] = 0;
            $mapData['id'] = 0;
        }

        $mapData['height'] = '100vh';

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
            if($map->show_locations == "1"){
                $mapData['calc_extent'] = 'LOCATIONS';
            }
            else{
                $mapData['calc_extent'] = 'CENTERZOOM';
            }
            if ($mapData['calc_extent'] == 'LOCATIONS') {
                $mapData['min_gap'] = $map->min_gap;
            }

            // map-restriction
            $mapData['restrict_area'] = $map->restrict_area;
            if ($map->restrict_area) {
                $mapData['restr_bottomleft_lon'] = $map->restr_bottomleft_lon;
                $mapData['restr_bottomleft_lat'] = $map->restr_bottomleft_lat;
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

            // basemaps
            //
            $mapData['default_baselayer'] = $profile->default_baselayer;


            // location-style resizing
            //
//            $mapData['resize_locstyles_zoom'] = $profile->resize_locstyles_zoom;
            if ($profile->resize_locstyles_zoom) {
                $mapData['resizeLocstyles'] = [
                    'srcZoom' => $profile->resize_src_zoom,
                    'scaleFactor' => $profile->resize_scale_factor,
                    'minScale' => $profile->resize_min_scale,
                    'maxScale' => $profile->resize_max_scale
                ];
            }

            // map-navigation
            //
            $mapData['zoom_panel']  = $profile->zoom_panel;

            if ($profile->zoom_panel_button) {
                $zoom_panel_buttons = unserialize($profile->zoom_panel_button);
                foreach($zoom_panel_buttons as $key => $zoom_panel_button){
                    switch ($zoom_panel_button) {
                        case '3':
                            $mapData['zoom_position'] = true;
                            break;
                        case '2':
                            $mapData['zoom_home'] = true;
                            break;
                        case '1':
                            $mapData['zoom_extent'] = true;
                            break;
                        default:
                    }
                }
            }

            $mapData['zoom_slider'] = ($profile->zoom_panel_slider == 1);
            if ($profile->mouse_nav) {
                $mapData['mouse_nav']['drag_pan'] = $profile->mouse_nav;
                $mapData['mouse_nav']['wheel_zoom'] = $profile->mouse_nav_wheel;
                $mapData['mouse_nav']['doubleclick_zoom'] = $profile->mouse_nav_doubleclick_zoom;
                $mapData['mouse_nav']['drag_zoom'] = $profile->mouse_nav_zoombox;
                switch ($profile->mouse_nav_dragmode) {
                    case '2':
                        $mapData['mouse_nav']['drag_rotate_zoom'] = true;
                        // falltrough
                    case '1':
                        $mapData['mouse_nav']['drag_rotate'] = true;
                        break;
                    default:
                }
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
            $mapData['fullscreen'] = $profile->fullscreen;
            $mapData['print'] = $profile->print;

            // Starboard
            //
            if ($profile->starboard) {
                $mapData['starboard']['enable'] = $profile->starboard;
                $mapData['starboard']['open'] = $profile->starboard_open;
                $mapData['starboard']['label'] = \Contao\Controller::replaceInsertTags($profile->starboard_label);
                $mapData['starboard']['div'] = $profile->starboard_div;
                $mapData['starboard']['button'] = $profile->starboard_button;
                $mapData['cluster_all'] = $profile->cluster_all;
                $mapData['cluster_distance'] = $profile->cluster_distance;
                $mapData['cluster_fillcolor'] = $profile->cluster_fillcolor;
                $mapData['cluster_fontcolor'] = $profile->cluster_fontcolor;
                $mapData['cluster_zoom'] = $profile->cluster_zoom;
                $mapData['cluster_dist_spider'] = $profile->cluster_dist_spider;
                // Baselayerswitcher
                $mapData['baselayerswitcher']['enable'] = $profile->baselayerswitcher;
                $mapData['baselayerswitcher']['label'] = \Contao\Controller::replaceInsertTags($profile->baselayerswitcher_label);
                $mapData['baselayerswitcher']['filter'] = $profile->baselayer_filter;
                // Layerswitcher
                $mapData['layerswitcher']['enable'] = $profile->layerswitcher;
                $mapData['layerswitcher']['label'] = \Contao\Controller::replaceInsertTags($profile->layerswitcher_label);
                $mapData['layerswitcher']['filter'] = $profile->layer_filter;
            }

            // map-tools
            //
            if ($profile->measuretool) {
                $mapData['measuretools']['enable'] = $profile->measuretool;
            }

            $mapData['graticule'] = $profile->graticule;

            // map-information
            //
            $mapData['attribution']['enable'] = $profile->attribution;
            if ($profile->attribution) {
                $settings = C4gMapSettingsModel::findOnly();
                if($settings->con4gisIoUrl && $settings->con4gisIoKey) {
                    $mapData['attribution']['con4gisIO'] = 1;
                }
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
            $mapData['overviewmap'] = $profile->overviewmap;
            $mapData['geobookmarks'] = $profile->geobookmarks;
            $mapData['scaleline'] = $profile->scaleline;
            $mapData['mouseposition'] = $profile->mouseposition;
            $mapData['permalink']['enable'] = $profile->permalink;
            if ($profile->permalink) {
                $mapData['permalink']['get_parameter'] = $profile->permalink_get_param;
            }
            $mapData['zoomlevel'] = $profile->zoomlevel;
            if ($profile->account > 0) {
                $mapData['account'] = \Contao\Controller::replaceInsertTags("{{insert_module::".$profile->account."}}", false);
            } else {
                $maptData['account'] = '';
            }

            if ($profile->caching) {
                $mapData['caching'] = 1;
            }
            $objSettings = C4gMapSettingsModel::findOnly();
            // geosearch
            //
            if ($profile->geosearch) {
                $mapData['geosearch']['geosearch_engine'] = $profile->geosearch_engine;
                $mapData['geosearch']['enable'] = ($profile->geosearch && $profile->geosearch_show);
                if ($profile->geosearch_customengine_attribution) {
                    $mapData['geosearch']['custom_attribution'] = \Contao\Controller::replaceInsertTags($profile->geosearch_customengine_attribution);
                }
                $mapData['geosearch']['results'] = $profile->geosearch_results;
                $mapData['geosearch']['div'] = $profile->geosearch_div;
                $mapData['geosearch']['searchzoom'] = $profile->geosearch_zoomto;
                $mapData['geosearch']['zoombounds'] = $profile->geosearch_zoombounds;
                $mapData['geosearch']['animate'] = $profile->geosearch_animate;
                $mapData['geosearch']['markresult'] = $profile->geosearch_markresult;
                $mapData['geosearch']['popup'] = $profile->geosearch_popup;
                $mapData['geosearch']['attribution'] = \Contao\Controller::replaceInsertTags($profile->geosearch_attribution);
                $mapData['geosearch']['collapsed'] = $profile->geosearch_collapsed;
                $keyForward = null;
                if ($profile->geosearch_engine == "4") {
                    $keyForward = (array) C4GUtils::getKey($objSettings, '2', "", false);
                    $mapData['geosearch']['searchKey'] = $keyForward['key'];
                    $mapData['geosearch']['reverseKey'] = ((array) C4GUtils::getKey($objSettings, '3', "", false))['key'];
                    $mapData['geosearch']['url'] = rtrim($objSettings->con4gisIoUrl, "/") . "/";
                }

                switch ($profile->geosearch_engine) {
                    case '1':
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy" target="_blank">OpenStreetMap</a>';
                        break;
                    case '2':
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" alt="" />';
                        break;
                    case '3':
                        if ($profile->attribution && $profile->geosearch_attribution) {
                            $mapData['attribution']['geosearch'] = \Contao\Controller::replaceInsertTags($profile->geosearch_attribution);
                        }
                        break;
                    case '4':
                        $mapData['attribution']['geosearch'] = $keyForward['attribution'];
                        break;
                    default:
                        $mapData['attribution']['geosearch'] = 'Nominatim Search Courtesy of <a href="http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy" target="_blank">OpenStreetMap</a>';
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
                $mapData['geopicker']['disabled']  = $profile->geopicker_disabled;
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
                $mapData['cesium'] = array();
                $mapData['cesium']['enable'] = $profile->cesium;
                $mapData['cesium']['always'] = $profile->cesium_always;
            }

            // overpass handling
            //
            if ($profile->overpassEngine === "2") {
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
            $mapData['infopage'] =  \Contao\Controller::replaceInsertTags($profile->infopage);
            $mapData['link_newwindow'] = $profile->link_newwindow;
            $mapData['hover_popups'] = $profile->hover_popups;
            $mapData['hover_popups_stay'] = $profile->hover_popups_stay;
            $mapData['popupHandling'] = $profile->popupHandling;

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
        ResourceLoader::loadResourcesForModule('maps');
        // load internal scripts and themes
        if ($profileId) {
            $mapData['themeData'] = ResourceLoader::loadResourcesForProfile($profileId, $options['type'] == 'geopicker', null, $mapData);
        } else {
            ResourceLoader::loadResources();
            $mapData['themeData'] = ResourceLoader::loadTheme();
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
            if ($baseLayer['provider'] == "con4gisIo") {
                $catribution = C4GUtils::getKey($objSettings, '4', 'id='.$baseLayer['con4gisIo'], false); // this is a bad pun with key and attribution. But i wanted a cat instead of a kat
                $arrKeys[$baseLayer['id']] = $catribution;
            }
        }
        
        return $arrKeys;
    }
}
