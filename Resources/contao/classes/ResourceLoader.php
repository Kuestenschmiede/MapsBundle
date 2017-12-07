<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\MapsBundle\Resources\contao\classes;
use con4gis\CoreBundle\Resources\contao\classes\ResourceLoader as coreResourceLoader;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel;

/**
 * Class ResourceLoader
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class ResourceLoader extends coreResourceLoader
{
    private static $DEBUG = false;

    const BUNDLE_CSS_PATH = 'bundles/con4gismaps/css/';
    const BUNDLE_JS_PATH = 'bundles/con4gismaps/js/';
    const VENDOR_PATH = 'bundles/con4gismaps/vendor/';

    /**
     * @TODO: doku
     */
    public static function loadResources($resources=array())
    {

        global $objPage;

        // $objPage->hasJQuery;
        // $objPage->hasMooTools
        // $objPage->isMobile

        if (!is_array($resources) || empty($resources)) {
            $allByDefault = true;
            $resources = array();
        } else {
            $allByDefault = false;
        }

        $resources = array_merge(array
        (
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
            'exporttools' => false, //ToDo
            'infopage' => $allByDefault,
            'plugins' => $allByDefault,
            'customtab' => $allByDefault,
            'cesium' => $allByDefault
        ),
        $resources);

        // debug-mode active?
        if ($GLOBALS['con4gis']['maps']['debug']) {
            $staticOption = '';
            $suffixOl = '-debug';
        } else {
            $staticOption = '';
            $suffixOl = '';
        }

        // third-party scripts
        if ($resources['openlayers']) {
            parent::loadJavaScriptRessource('openlayers', self::VENDOR_PATH . 'OpenLayers-' . $GLOBALS['con4gis']['maps']['ol-version'] . '/ol' . $suffixOl . '.js');
        }

        if ($resources['cesium']) {
            parent::loadJavaScriptRessource('cesium', self::VENDOR_PATH . 'ol-cesium-v1.33/Cesium/Cesium.js');
            parent::loadJavaScriptRessource('olcesium', self::VENDOR_PATH . 'ol-cesium-v1.33/olcesium.js');
        }

        // core scripts (1|2)
        if ($resources['core']) {
            // minimum CSS rules in order for maps to work properly
            parent::loadCssRessource('c4g-maps-general', self::BUNDLE_CSS_PATH . 'c4g-maps-general.css');

            // need to be loaded first!
            parent::loadJavaScriptRessource('c4g-maps-constant', self::BUNDLE_JS_PATH . 'c4g-maps-constant.js' . $staticOption);

            // load language script
            if ($GLOBALS['TL_LANGUAGE'] == 'de') {
                parent::loadJavaScriptRessource('c4g-maps-constant-i18n', self::BUNDLE_JS_PATH . 'c4g-maps-constant-i18n-de.js' . $staticOption);
                parent::loadJavaScriptRessource('c4g-maps-popup-info', self::BUNDLE_JS_PATH . 'c4g-maps-popup-info-de.js' . $staticOption);
            }
            else if ($GLOBALS['TL_LANGUAGE'] == 'fi') {
                parent::loadJavaScriptRessource('c4g-maps-constant-i18n', self::BUNDLE_JS_PATH . 'c4g-maps-constant-i18n-fi.js' . $staticOption);
                //ToDo translate this
                parent::loadJavaScriptRessource('c4g-maps-popup-info', self::BUNDLE_JS_PATH . 'c4g-maps-popup-info-en.js' . $staticOption);
            }
            else {
                // use english as fallback
                parent::loadJavaScriptRessource('c4g-maps-constant-i18n', self::BUNDLE_JS_PATH . 'c4g-maps-constant-i18n-en.js' . $staticOption);
                parent::loadJavaScriptRessource('c4g-maps-popup-info', self::BUNDLE_JS_PATH . 'c4g-maps-popup-info-en.js' . $staticOption);
            }
            
            // configuration-, utility-, core- and miscellaneous-scripts
            parent::loadJavaScriptRessource('c4g-maps-config', self::BUNDLE_JS_PATH . 'c4g-maps-config.js' . $staticOption);
            parent::loadJavaScriptRessource('c4g-maps-proxy', self::BUNDLE_JS_PATH . 'c4g-maps-proxy.js' . $staticOption);
            parent::loadJavaScriptRessource('c4g-maps-utils', self::BUNDLE_JS_PATH . 'c4g-maps-utils.js' . $staticOption);
            parent::loadJavaScriptRessource('c4g-maps-misc-maphover', self::BUNDLE_JS_PATH . 'c4g-maps-misc-maphover.js' . $staticOption);
            parent::loadJavaScriptRessource('c4g-maps-misc-spinner', self::BUNDLE_JS_PATH . 'c4g-maps-misc-spinner.js' . $staticOption);
            parent::loadJavaScriptRessource('c4g-maps-misc-tooltippopup', self::BUNDLE_JS_PATH . 'c4g-maps-misc-tooltippopup.js' . $staticOption);
        }
        // experimental panel loading

//        $GLOBALS['TL_JAVASCRIPT']['c4g-maps-misc-panelbutton'] = 'bundles/con4gismaps/js/c4g-maps-misc-panelbutton.js';
//        $GLOBALS['TL_JAVASCRIPT']['c4g-maps-control-panel'] = 'bundles/con4gismaps/js/c4g-maps-control-panel.js';
        // end experimental panel loading


        // optional scripts
        if ($resources['geopicker']) {
            parent::loadJavaScriptRessource('c4g-maps-interaction-geopicker', self::BUNDLE_JS_PATH . 'c4g-maps-interaction-geopicker.js' . $staticOption);
        }
        if ($resources['grid']) {
            parent::loadJavaScriptRessource('c4g-maps-control-grid', self::BUNDLE_JS_PATH . 'c4g-maps-control-grid.js' . $staticOption);
        }
        if ($resources['home']) {
            parent::loadJavaScriptRessource('c4g-maps-control-home', self::BUNDLE_JS_PATH . 'c4g-maps-control-home.js' . $staticOption);
        }
        if ($resources['position']) {
            parent::loadJavaScriptRessource('c4g-maps-control-position', self::BUNDLE_JS_PATH . 'c4g-maps-control-position.js' . $staticOption);
        }
        if ($resources['permalink']) {
            parent::loadJavaScriptRessource('c4g-maps-control-permalink', self::BUNDLE_JS_PATH . 'c4g-maps-control-permalink.js' . $staticOption);
        }
        if ($resources['zoomlevel']) {
            parent::loadJavaScriptRessource('c4g-maps-control-zoomlevel', self::BUNDLE_JS_PATH . 'c4g-maps-control-zoomlevel.js' . $staticOption);
        }
        if ($resources['geosearch']) {
            parent::loadJavaScriptRessource('c4g-maps-control-geosearch', self::BUNDLE_JS_PATH . 'c4g-maps-control-geosearch.js' . $staticOption);
        }
        if ($resources['overviewmap']) {
            parent::loadJavaScriptRessource('c4g-maps-control-overviewmap', self::BUNDLE_JS_PATH . 'c4g-maps-control-overviewmap.js' . $staticOption);
        }
        if ($resources['baselayerswitcher']) {
            parent::loadJavaScriptRessource('c4g-maps-control-starboardplugin-baselayerswitcher', self::BUNDLE_JS_PATH . 'c4g-maps-control-starboardplugin-baselayerswitcher.js' . $staticOption);
        }
        if ($resources['layerswitcher']) {
            parent::loadJavaScriptRessource('c4g-maps-control-starboardplugin-layerswitcher', self::BUNDLE_JS_PATH . 'c4g-maps-control-starboardplugin-layerswitcher.js' . $staticOption);
        }
        if ($resources['starboard'] || $resources['router'] || $resources['editor'] || $resources['measuretools']) {
            parent::loadJavaScriptRessource('c4g-maps-control-sideboard', self::BUNDLE_JS_PATH . 'c4g-maps-control-sideboard.js' . $staticOption);

            if ($resources['starboard']) {
                parent::loadJavaScriptRessource('c4g-maps-control-starboard', self::BUNDLE_JS_PATH . 'c4g-maps-control-starboard.js' . $staticOption);
                if ($resources['customtab']) {
                    parent::loadJavaScriptRessource('c4g-maps-control-starboardplugin-customtab', self::BUNDLE_JS_PATH . 'c4g-maps-control-starboardplugin-customtab.js' . $staticOption);
                }
            }
            if ($resources['router']) {
                parent::loadJavaScriptRessource('c4g-maps-control-portside-router', self::BUNDLE_JS_PATH . 'c4g-maps-control-portside-router.js' . $staticOption);
            }
            if ($resources['editor']) {
                parent::loadJavaScriptRessource('c4g-maps-control-portside-editor', self::BUNDLE_JS_PATH . 'c4g-maps-control-portside-editor.js' . $staticOption);
            }
            if ($resources['measuretools']) {
                parent::loadJavaScriptRessource('c4g-maps-control-portside-measuretools', self::BUNDLE_JS_PATH . 'c4g-maps-control-portside-measuretools.js' . $staticOption);
            }
            if ($resources['infopage']) {
                parent::loadJavaScriptRessource('c4g-maps-control-portside-infopage', self::BUNDLE_JS_PATH . 'c4g-maps-control-portside-infopage.js' . $staticOption);
            }
        }
        //ToDo make executable
        if ($resources['exporttools']) {
            parent::loadJavaScriptRessource('c4g-maps-control-portside-exporttools', self::BUNDLE_JS_PATH . 'c4g-maps-control-portside-exporttools.js' . $staticOption);
        }

        parent::loadJavaScriptRessource('animatedclusterlayer', self::VENDOR_PATH . 'animated_cluster/layer/animatedclusterlayer.js' . $staticOption);

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

        // core scripts (2|2)
        if ($resources['core']) {
            // load map-controller last, since it is the "main" script
            // and needs (nearly) all of the above scripts
            parent::loadJavaScriptRessource('c4g-maps', self::BUNDLE_JS_PATH . 'c4g-maps.js' . $staticOption);
        }

        //ToDo bundle path and tracking bundle
        if ( $GLOBALS['con4gis']['projects']['installed'] &&  $GLOBALS['con4gis']['tracking']['installed']) {
            parent::loadJavaScriptRessource('live-positions', 'bundles/con4gisprojects/js/C4GBrickLivePositions.js');
        }

        return true;
    }

    /**
     * @TODO: doku
     */
    public static function loadResourcesForProfile($profileId, $geopicker = false, $profile = null)
    {
        if (!$profile) {
            // get appropriate profile from database
            $profile = C4gMapProfilesModel::findByPk($profileId);
            // use default if the profile was not found
            if (!$profile) {
                $profile = C4gMapProfilesModel::findBy('is_default',1);
                if (!$profile) {
                    return false;
                }
            }
        }

        // check which resources are needed
        $resources = array
        (
            'core' => true,
            // @TODO: check BE-Switch
            'openlayers' => true,
            'geopicker' => ($profile->geopicker || $geopicker),
            'grid' => ($profile->graticule),
            'home' => ($profile->zoom_panel_button && $profile->zoom_panel_button == 2),
            'position' => ($profile->zoom_panel_button && $profile->zoom_panel_button == 3),
            'permalink' => ($profile->permalink),
            'zoomlevel' => ($profile->zoomlevel),
            'geosearch' => ($profile->geosearch && $profile->geosearch_show),
            'overviewmap' => ($profile->overviewmap),
            'baselayerswitcher' => ($profile->starboard && $profile->baselayerswitcher),
            'layerswitcher' => ($profile->starboard && $profile->layerswitcher),
            'starboard' => ($profile->starboard),
            'router' => ($profile->geosearch && $profile->router),
            'editor' => ($profile->editor),
            'measuretools' => ($profile->measuretool),
            'exporttools' => false, //ToDo profile switch,
            'infopage' => ($profile->infopage),
            // @TODO BE-Switch?
            'plugins' => true,
            'customtab' => true,
            'cesium' => $profile->cesium
        );

        // load theme
        self::loadResources($resources);
        // check & load Theme
        self::loadTheme($profile->theme);
    }

    /**
     * @TODO: doku
     */
    public static function loadTheme($themeId = -1)
    {
        if ($themeId != -1) {
          $theme = C4gMapThemesModel::findByPk($themeId);
        }

        if (!$theme) {
            // load default theme
            parent::loadCssRessource('c4g-maps-icons', self::BUNDLE_CSS_PATH . 'themes/icons/c4g-theme-icons.css');
            parent::loadCssRessource('c4g-maps-theme', self::BUNDLE_CSS_PATH . 'themes/buttons/c4g-theme-buttons.css');
            parent::loadCssRessource('c4g-maps-colors', self::BUNDLE_CSS_PATH . 'themes/colors/c4g-theme-colors.css');
            parent::loadCssRessource('c4g-maps-effects', self::BUNDLE_CSS_PATH . 'themes/effects/c4g-theme-effects.css');
            return true;
        }

        /**
         * If custom stylesheet were uploaded, load them. If not, load the selected builtin style.
         */
        if ($theme->custom_icons) {
            $objFile = \FilesModel::findByUuid($theme->external_icons);
            parent::loadCssRessource('c4g-maps-icons', $objFile->path);
        } else if ($theme->icons) {
            parent::loadCssRessource('c4g-maps-icons', self::BUNDLE_CSS_PATH . 'themes/icons/' . $theme->icons);
        }

        if ($theme->custom_buttons) {
            $objFile = \FilesModel::findByUuid($theme->external_buttons);
            parent::loadCssRessource('c4g-maps-theme', $objFile->path);
        } else if ($theme->buttons) {
            // Rename this to c4g-maps-buttons?
            parent::loadCssRessource('c4g-maps-theme', self::BUNDLE_CSS_PATH . 'themes/buttons/' . $theme->buttons);
        }

        if ($theme->custom_colors) {
            $objFile = \FilesModel::findByUuid($theme->external_colors);
            parent::loadCssRessource('c4g-maps-colors', $objFile->path);
        } else if ($theme->colors) {
            parent::loadCssRessource('c4g-maps-colors', self::BUNDLE_CSS_PATH . 'themes/colors/' . $theme->colors);
        }

        if ($theme->custom_effects) {
            $objFile = \FilesModel::findByUuid($theme->external_effects);
            parent::loadCssRessource('c4g-maps-effects', $objFile->path);
        } else if ($theme->effects) {
            parent::loadCssRessource('c4g-maps-effects', self::BUNDLE_CSS_PATH . 'themes/effects/' . $theme->effects);
        }


        return true;
    }

    /**
     * Loads the default geopicker profile and resources according to that profile
     * @return void
     */
    public static function loadGeopickerResources($additionalResources = array())
    {
        //load geopicker profile
        $profile = C4gMapProfilesModel::findBy('is_backend_geopicker_default', 1);
        // use default if the profile was not found
        if (!$profile) {
            $profile = C4gMapProfilesModel::findBy('is_default',1);
            if (!$profile) {
                return;
            }
        }
        self::loadResourcesForProfile($profile->id, true, $profile);
        if (count($additionalResources) > 0) {
            self::loadResources($additionalResources);
        }
    }
}
