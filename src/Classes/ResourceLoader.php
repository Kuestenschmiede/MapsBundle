<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Classes;

use con4gis\CoreBundle\Classes\ResourceLoader as coreResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Classes\Events\LoadMapResourcesEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel;
use Contao\System;
use Contao\StringUtil;

/**
 * Class ResourceLoader
 * @package con4gis\MapsBundle\Classes
 */
class ResourceLoader extends coreResourceLoader
{
    private const BUNDLE_CSS_PATH = 'bundles/con4gismaps/dist/css/';
    private const BUNDLE_JS_PATH = 'bundles/con4gismaps/build/';
    private const VENDOR_PATH = 'bundles/con4gismaps/vendor/';

    /**
     * @param array $resources
     * @param array $mapData
     * @return bool
     */
    public static function loadResources($resources = [], $mapData = [])
    {
        if (!is_array($resources) || empty($resources)) {
            $allByDefault = true;
            $resources = [];
        } else {
            $allByDefault = false;
        }

        $resources = array_merge([
            'core' => $allByDefault,
            'openlayers' => $allByDefault,
            'geopicker' => $allByDefault,
            'grid' => $allByDefault,
            'home' => $allByDefault,
            'position' => $allByDefault,
            'permalink' => $allByDefault,
            'zoomlevel' => $allByDefault,
            'geosearch' => $allByDefault,
            'overviewmap' => $allByDefault,
            'baselayerswitcher' => $allByDefault,
            'layerswitcher' => $allByDefault,
            'starboard' => $allByDefault,
            'router' => $allByDefault,
            'editor' => $allByDefault,
            'measuretools' => $allByDefault,
            'infopage' => $allByDefault,
            'plugins' => $allByDefault,
            'customtab' => $allByDefault,
            'cesium' => false,
            'olms' => $allByDefault,
            'magnific-popup' => $allByDefault,
        ],
            $resources);

        if ($resources['cesium']) {
            parent::loadJavaScriptResource(self::VENDOR_PATH . '/Cesium/Cesium.js', self::BODY, 'cesium');
        }

        if ($resources['magnific-popup']) {
            parent::loadJavaScriptResource(
                'bundles/con4gisprojects/dist/js/vendor-magnific-popup.js',
                self::HEAD
            );
            parent::loadCssResource(
                'bundles/con4gisprojects/dist/css/vendor-magnific-popup.min.css',
                self::HEAD
            );
        }

        if (isset($mapData['router_enable']) && $mapData['router_enable']) {
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'c4g-routing.min.css', 'routing-css');
        }
        if ((isset($mapData['feEditorProfile']) && $mapData['feEditorProfile']) || (isset($mapData['beEditorProfile']) && $mapData['beEditorProfile'])) {
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'c4g-project-editor.min.css', 'project-editor-css');
        }
        if (isset($mapData['editor']['type']) && $mapData['editor'] && $mapData['editor']['type'] === 'backend') {
            parent::loadJavaScriptResource(self::BUNDLE_JS_PATH . 'c4g-backend-helper.js', \con4gis\CoreBundle\Classes\ResourceLoader::BODY, 'c4g-backend-editor');
        }

        parent::loadCssResource(self::BUNDLE_CSS_PATH . 'maps.min.css');

        // TODO: load editor css from another bundle

        // load plugins
        if ($resources['plugins']) {
            if (isset($GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins']) && is_array($GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins'])) {
                foreach ($GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins'] as $callback) {
                    $hookClass = new $callback[0];
                    $str_function = $callback[1];
                    if ($str_function) {
                        $return = $hookClass->$str_function();
                    }
                }
            }
        }

        $eventDispatcher = System::getContainer()->get('event_dispatcher');
        $event = new LoadMapResourcesEvent();
        $event->setMapData($mapData);
        $eventDispatcher->dispatch($event, $event::NAME);

        // core scripts (2|2)
        if ($resources['core']) {
            // load map-controller last, since it is the "main" script
            // and needs (nearly) all of the above scripts
            parent::loadJavaScriptResource(self::BUNDLE_JS_PATH . 'c4g-maps.js', \con4gis\CoreBundle\Classes\ResourceLoader::BODY, 'c4g-maps');
        }

        return true;
    }

    /**
     * @param $profileId
     * @param false $geopicker
     * @param null $profile
     * @param $mapData
     * @return array|void
     */
    public static function loadResourcesForProfile($profileId, $geopicker = false, $profile = null, $mapData)
    {
        if (!$profile) {
            // get appropriate profile from database
            $profile = C4gMapProfilesModel::findByPk($profileId);
            // use default if the profile was not found
            if (!$profile) {
                $settings = C4gSettingsModel::findAll();
                $profile = $settings[0]->defaultprofile;
                if (!$profile) {
                    $profiles = C4gMapProfilesModel::findAll();
                    if ($profiles && (count($profiles) > 0)) {
                        $length = count($profiles);
                        $profile = $profiles[$length - 1];
                    } else {
                        return;
                    }
                }
            }
        }

        $mapFunctions = StringUtil::deserialize($profile->mapFunctions, true);
        $buttons = array_flip($mapFunctions);

        // check which resources are needed
        $resources = [
            'core' => true,
            // @TODO: check BE-Switch
            'openlayers' => true,
            'geopicker' => ($profile->geopicker || $geopicker),
            'grid' => is_array($buttons) && array_key_exists('graticule', $buttons),
            'home' => is_array($buttons) && array_key_exists('zoomHome', $buttons),
            'position' => is_array($buttons) && array_key_exists('zoomPosition', $buttons),
            'permalink' => ($profile->permalink),
            'zoomlevel' => ($profile->zoomlevel),
            'geosearch' => ($profile->geosearch && $profile->geosearch_show),
            'overviewmap' => is_array($buttons) && array_key_exists('overview', $buttons),
            'baselayerswitcher' => ($profile->baselayerswitcher),
            'layerswitcher' => is_array($buttons) && array_key_exists('layerswitcher', $buttons), //ToDo
            'starboard' => 1, //ToDo
            'router' => ($profile->geosearch && $profile->router),
            'editor' => ($profile->editor),
            'measuretools' => is_array($buttons) && is_array($buttons) && array_key_exists('measure', $buttons),
            'infopage' => ($profile->infopage), //ToDo
            'legend' => ($profile->legend),
            'account' => ($profile->account),
            // @TODO BE-Switch?
            'plugins' => true,
            'customtab' => true,
            'cesium' => $profile->cesium,
            'olms' => true, //ToDo basemap check
            'magnific-popup' => $profile->magnific_popup,
        ];

        // load theme
        self::loadResources($resources, $mapData);
        // check & load Theme
        return self::loadTheme($profile->theme);
    }

    /**
     * @param int $themeId
     * @return array
     */
    public static function loadTheme($themeId = -1)
    {
        if ($themeId != -1) {
            $theme = C4gMapThemesModel::findByPk($themeId);
        }

        $themeData = [];

        if ($theme->buttonradius) {
            $themeData['buttonradius'] = StringUtil::deserialize($theme->buttonradius)['value'];
        }

        if ($theme->buttonsize) {
            $themeData['buttonsize'] = StringUtil::deserialize($theme->buttonsize)['value'];
        }

        if ($theme->button_fontsize) {
            $themeData['fontsize'] = StringUtil::deserialize($theme->button_fontsize)['value'];
        }

        if ($theme->maincolor) {
            $maincolor = StringUtil::deserialize($theme->maincolor);
            if ($maincolor[0]) {
                $themeData['maincolor'] = $maincolor[0];
                $themeData['mainopacity'] = $maincolor[1];
            }
        }
        if ($theme->fontcolor) {
            $fontcolor = StringUtil::deserialize($theme->fontcolor);
            if ($fontcolor[0]) {
                $themeData['fontcolor'] = $fontcolor[0];
                $themeData['fontopacity'] = $fontcolor[1];
            }
        }

        if ($theme->popupMaincolor) {
            $popupMaincolor = StringUtil::deserialize($theme->popupMaincolor);
            if ($popupMaincolor[0]) {
                $themeData['popupMaincolor'] = $popupMaincolor[0];
                $themeData['popupMainopacity'] = $popupMaincolor[1];
            } elseif ($theme->maincolor) {
                $maincolor = StringUtil::deserialize($theme->maincolor);
                if ($maincolor[0]) {
                    $themeData['popupMaincolor'] = $maincolor[0];
                    $themeData['popupMainopacity'] = $maincolor[1];
                }
            }
        } elseif ($theme->maincolor) {
            $maincolor = StringUtil::deserialize($theme->maincolor);
            if ($maincolor[0]) {
                $themeData['popupMaincolor'] = $maincolor[0];
                $themeData['popupMainopacity'] = $maincolor[1];
            }
        }

        if ($theme->popupFontcolor) {
            $popupFontcolor = StringUtil::deserialize($theme->popupFontcolor);
            if ($popupFontcolor[0]) {
                $themeData['popupFontcolor'] = $popupFontcolor[0];
                $themeData['popupFontopacity'] = $popupFontcolor[1];
            } elseif ($theme->fontcolor) {
                $fontcolor = StringUtil::deserialize($theme->fontcolor);
                if ($fontcolor[0]) {
                    $themeData['popupMaincolor'] = $fontcolor[0];
                    $themeData['popupMainopacity'] = $fontcolor[1];
                }
            }
        } elseif ($theme->fontcolor) {
            $fontcolor = StringUtil::deserialize($theme->fontcolor);
            if ($fontcolor[0]) {
                $themeData['popupMaincolor'] = $fontcolor[0];
                $themeData['popupMainopacity'] = $fontcolor[1];
            }
        }

        if ($theme->shadowcolor) {
            $shadowcolor = StringUtil::deserialize($theme->shadowcolor);
            if ($shadowcolor[0]) {
                $themeData['shadowcolor'] = $shadowcolor[0];
                $themeData['shadowopacity'] = $shadowcolor[1];
            }
        }

        if ($theme->popupMaxWidth) {
            $popupMaxWidth = StringUtil::deserialize($theme->popupMaxWidth);
            if ($popupMaxWidth['value']) {
                $themeData['popupMaxWidth'] = $popupMaxWidth['value'];
            }
        }

        $themeData['useglobal'] = $theme->useglobal;

        return $themeData;
    }

    /**
     * Loads the default geopicker profile and resources according to that profile
     * @return void
     */
    public static function loadGeopickerResources($additionalResources = [])
    {
        $settings = C4gSettingsModel::findAll();
        $profileId = $settings[0]->beGeopickerProfile ? $settings[0]->beGeopickerProfile : $settings[0]->defaultprofile;
        if (!$profileId) {
            $profiles = C4gMapProfilesModel::findAll();
            if ($profiles && (!empty($profiles))) {
                $length = count($profiles);
                $profile = $profiles[$length - 1];
            } else {
                return;
            }
        }
        if ($profile && !$profileId) {
            $profileId = $profile->id;
        }
        self::loadResourcesForProfile($profileId, true, $profile);
        if (count($additionalResources) > 0) {
            self::loadResources($additionalResources);
        }
    }
}
