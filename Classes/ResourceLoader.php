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

use con4gis\CoreBundle\Classes\ResourceLoader as coreResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Classes\Events\LoadMapResourcesEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel;
use Contao\System;

/**
 * Class ResourceLoader
 * @package con4gis\MapsBundle\Classes
 */
class ResourceLoader extends coreResourceLoader
{
    private static $DEBUG = false;

    const BUNDLE_CSS_PATH = 'bundles/con4gismaps/css/';
    const BUNDLE_JS_PATH = 'bundles/con4gismaps/build/';
    const VENDOR_PATH = 'bundles/con4gismaps/vendor/';

    /**
     * @TODO: doku
     */
    public static function loadResources($resources = [], $mapData = [])
    {
        global $objPage;

        // $objPage->hasJQuery;
        // $objPage->hasMooTools
        // $objPage->isMobile

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
            'account' => $allByDefault,
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
            'cesium' => false, //Default
            'olms' => $allByDefault,
        ],
        $resources);

        // debug-mode active?
        if ($GLOBALS['con4gis']['maps']['debug']) {
            $staticOption = '';
            $suffixOl = '-debug';
            $suffixCesium = '';
        } else {
            $staticOption = '';
            $suffixOl = '';
            $suffixCesium = '';
        }

        // third-party scripts
        if ($resources['cesium']) {
            parent::loadJavaScriptResource(self::VENDOR_PATH . '/cesium/Cesium.js', self::BODY, 'cesium');
        }
        parent::loadCssResource(self::BUNDLE_CSS_PATH . 'c4g-maps-general.css');

        // load plugins
        if ($resources['plugins']) {
            if (isset($GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins']) && is_array($GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins'])) {
                foreach ($GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins'] as $callback) {
                    // \System::import($callback[0]);
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
        $eventDispatcher->dispatch($event::NAME, $event);

        // core scripts (2|2)
        if ($resources['core']) {
            // load map-controller last, since it is the "main" script
            // and needs (nearly) all of the above scripts
            parent::loadJavaScriptDeferred('c4g-maps', self::BUNDLE_JS_PATH . 'c4g-maps.js' . $staticOption);
        }

        return true;
    }

    /**
     * @TODO: doku
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


        $mapFunctions =  unserialize($profile->mapFunctions);
        $buttons = array_flip($mapFunctions);

        // check which resources are needed
        $resources = [
            'core' => true,
            // @TODO: check BE-Switch
            'openlayers' => true,
            'geopicker' => ($profile->geopicker || $geopicker),
            'grid' => array_key_exists('graticule',$buttons),
            'home' => array_key_exists('zoomHome',$buttons),
            'position' => array_key_exists('zoomPosition',$buttons),
            'permalink' => ($profile->permalink),
            'zoomlevel' => ($profile->zoomlevel),
            'geosearch' => ($profile->geosearch && $profile->geosearch_show),
            'overviewmap' => array_key_exists('overview',$buttons),
            'baselayerswitcher' => ($profile->baselayerswitcher),
            'layerswitcher' => array_key_exists('layerswitcher',$buttons), //ToDo
            'starboard' => 1, //ToDo
            'router' => ($profile->geosearch && $profile->router),
            'editor' => ($profile->editor),
            'measuretools' => array_key_exists('measure',$buttons),
            'infopage' => ($profile->infopage), //ToDo
            'legend' => ($profile->legend),
            'account' => ($profile->account),
            // @TODO BE-Switch?
            'plugins' => true,
            'customtab' => true,
            'cesium' => $profile->cesium,
            'olms' => true, //ToDo basemap check
        ];

        // load theme
        self::loadResources($resources, $mapData);
        // check & load Theme
        return self::loadTheme($profile->theme);
    }

    /**
     * @TODO: doku
     */
    public static function loadTheme($themeId = -1)
    {
        // TODO defer CSS scripts?
        if ($themeId != -1) {
            $theme = C4gMapThemesModel::findByPk($themeId);
        }

        if (!$theme) {
            // load default theme
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/icons/c4g-theme-icons.css');
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/buttons/c4g-theme-buttons.css');
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/colors/c4g-theme-colors.css');
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/effects/c4g-theme-effects.css');

            return true;
        }

        $themeData = [];

        /*
         * If custom stylesheet were uploaded, load them. If not, load the selected builtin style.
         */
        if ($theme->custom_icons) {
            $objFile = \FilesModel::findByUuid($theme->external_icons);
            parent::loadCssResource($objFile->path);
        } elseif ($theme->icons) {
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/icons/' . $theme->icons);
        }

        if ($theme->custom_buttons) {
            $objFile = \FilesModel::findByUuid($theme->external_buttons);
            parent::loadCssResource($objFile->path);
        } elseif ($theme->buttons) {
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/buttons/' . $theme->buttons);

            if ($theme->buttonradius) {
                $themeData['buttonradius'] = deserialize($theme->buttonradius)['value'];
            }

            if ($theme->buttonsize) {
                $themeData['buttonsize'] = deserialize($theme->buttonsize)['value'];
            }

            if ($theme->button_fontsize) {
                $themeData['fontsize'] = deserialize($theme->button_fontsize)['value'];
            }
        }

        if ($theme->custom_colors) {
            $objFile = \FilesModel::findByUuid($theme->external_colors);
            parent::loadCssResource($objFile->path);
        } elseif ($theme->colors) {
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/colors/' . $theme->colors);

            if ($theme->maincolor) {
                $themeData['maincolor'] = $theme->maincolor;
            }
            if ($theme->mainopacity) {
                $themeData['mainopacity'] = deserialize($theme->mainopacity);
            }
            if ($theme->fontcolor) {
                $themeData['fontcolor'] = $theme->fontcolor;
            }
            if ($theme->fontopacity) {
                $themeData['fontopacity'] = deserialize($theme->fontopacity);
            }
            if ($theme->popupMaincolor) {
                $themeData['popupMaincolor'] = $theme->popupMaincolor;
            } elseif ($theme->maincolor) {
                $themeData['popupMaincolor'] = $theme->maincolor;
            }
            if ($theme->popupMainopacity) {
                $themeData['popupMainopacity'] = deserialize($theme->popupMainopacity);
            } elseif ($theme->mainopacity) {
                $themeData['popupMainopacity'] = $theme->mainopacity;
            }
            if ($theme->popupFontcolor) {
                $themeData['popupFontcolor'] = $theme->popupFontcolor;
            } elseif ($theme->fontcolor) {
                $themeData['popupFontcolor'] = $theme->fontcolor;
            }
            if ($theme->popupFontopacity) {
                $themeData['popupFontopacity'] = deserialize($theme->popupFontopacity);
            } elseif ($theme->fontopacity) {
                $themeData['popupFontopacity'] = $theme->fontopacity;
            }
            if ($theme->shadowcolor) {
                $themeData['shadowcolor'] = $theme->shadowcolor;
            }
            if ($theme->shadowopacity) {
                $themeData['shadowopacity'] = deserialize($theme->shadowopacity);
            }

            $themeData['useglobal'] = $theme->useglobal;
        }

        if ($theme->custom_effects) {
            $objFile = \FilesModel::findByUuid($theme->external_effects);
            parent::loadCssResource($objFile->path);
        } elseif ($theme->effects) {
            parent::loadCssResource(self::BUNDLE_CSS_PATH . 'themes/effects/' . $theme->effects);
        }

        return $themeData;
    }

    /**
     * Loads the default geopicker profile and resources according to that profile
     * @return void
     */
    public static function loadGeopickerResources($additionalResources = [])
    {
        //load geopicker profile
        $profile = C4gMapProfilesModel::findBy('is_backend_geopicker_default', 1);
        // use default if the profile was not found
        if (!$profile) {
            $settings = C4gSettingsModel::findAll();
            $profileId = $settings[0]->defaultprofile;
            if (!$profileId) {
                $profiles = C4gMapProfilesModel::findAll();
                if ($profiles && (!empty($profiles))) {
                    $length = count($profiles);
                    $profile = $profiles[$length - 1];
                } else {
                    return;
                }
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
