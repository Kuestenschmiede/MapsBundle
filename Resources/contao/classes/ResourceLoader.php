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
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel;

/**
 * Class ResourceLoader
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class ResourceLoader
{
    private static $DEBUG = false;

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
            'plugins' => $allByDefault,
            'customtab' => $allByDefault
        ),
        $resources);

        // debug-mode active?
        if ($GLOBALS['con4gis_maps_extension']['debug']) {
            $staticOption = '';
            $suffixOl = '-debug';
        } else {
            $staticOption = '';
            $suffixOl = '';
        }

        // third-party scripts
        if ($resources['openlayers']) {
            $GLOBALS['TL_BODY']['openlayers'] = \Template::generateScriptTag('bundles/con4gismaps/vendor/OpenLayers-' . $GLOBALS['con4gis_maps_extension']['ol-version'] . '/ol' . $suffixOl . '.js') . "\n";

            $GLOBALS['TL_BODY']['cesium'] = \Template::generateScriptTag('bundles/con4gismaps/vendor/ol-cesium-v1.31/Cesium/Cesium.js') . "\n";
            $GLOBALS['TL_BODY']['olcesium'] = \Template::generateScriptTag('bundles/con4gismaps/vendor/ol-cesium-v1.31/olcesium.js') . "\n";


//ToDo find another solution
//            $ua = \Environment::get('agent');
//
//            if ($ua->os == 'android') {
//
//                //needed for older android versions (< 4.4)
//                $GLOBALS['TL_JAVASCRIPT']['polyfill_requestAnimationFrame'] = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame|always|gated';
//                $GLOBALS['TL_JAVASCRIPT']['polyfill_classList'] = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList|always|gated';
//                $GLOBALS['TL_JAVASCRIPT']['polyfill_url'] = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=URL|always|gated';
//            }

        }

        // core scripts (1|2)
        if ($resources['core']) {
            // minimum CSS rules in order for maps to work properly
            $GLOBALS['TL_CSS']['c4g-maps-general'] = 'bundles/con4gismaps/css/c4g-maps-general.css';
            // need to be loaded first!
            $GLOBALS['TL_BODY']['c4g-maps-constant'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-constant.js' . $staticOption) . "\n";

            // load language script
            if ($GLOBALS['TL_LANGUAGE'] == 'de') {
                $GLOBALS['TL_BODY']['c4g-maps-constant-i18n'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-constant-i18n-de.js' . $staticOption) . "\n";
                $GLOBALS['TL_BODY']['c4g-maps-popup-info'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-popup-info-de.js' . $staticOption) . "\n";
            }
            else if ($GLOBALS['TL_LANGUAGE'] == 'fi') {
                $GLOBALS['TL_BODY']['c4g-maps-constant-i18n'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-constant-i18n-fi.js' . $staticOption) . "\n";
                //ToDo translate this
                $GLOBALS['TL_BODY']['c4g-maps-popup-info'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-popup-info-en.js' . $staticOption) . "\n";
            }
            else {
                // use english as fallback
                $GLOBALS['TL_BODY']['c4g-maps-constant-i18n'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-constant-i18n-en.js' . $staticOption) . "\n";
                $GLOBALS['TL_BODY']['c4g-maps-popup-info'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-popup-info-en.js' . $staticOption) . "\n";
            }
            
            // configuration-, utility-, core- and miscellaneous-scripts
            $GLOBALS['TL_BODY']['c4g-maps-config'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-config.js' . $staticOption) . "\n";
            $GLOBALS['TL_BODY']['c4g-maps-proxy'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-proxy.js' . $staticOption) . "\n";
            $GLOBALS['TL_BODY']['c4g-maps-utils'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-utils.js' . $staticOption) . "\n";
            $GLOBALS['TL_BODY']['c4g-maps-misc-maphover'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-misc-maphover.js' . $staticOption) . "\n";
            $GLOBALS['TL_BODY']['c4g-maps-misc-spinner'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-misc-spinner.js' . $staticOption) . "\n";
            $GLOBALS['TL_BODY']['c4g-maps-misc-tooltippopup'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-misc-tooltippopup.js' . $staticOption) . "\n";
        }
        // experimental panel loading

//        $GLOBALS['TL_JAVASCRIPT']['c4g-maps-misc-panelbutton'] = 'bundles/con4gismaps/js/c4g-maps-misc-panelbutton.js';
//        $GLOBALS['TL_JAVASCRIPT']['c4g-maps-control-panel'] = 'bundles/con4gismaps/js/c4g-maps-control-panel.js';
        // end experimental panel loading


        // optional scripts
        if ($resources['geopicker']) {
            $GLOBALS['TL_BODY']['c4g-maps-interaction-geopicker'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-interaction-geopicker.js' . $staticOption) . "\n";
        }
        if ($resources['grid']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-grid'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-grid.js' . $staticOption) . "\n";
        }
        if ($resources['home']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-home'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-home.js' . $staticOption) . "\n";
        }
        if ($resources['position']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-position'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-position.js' . $staticOption) . "\n";
        }
        if ($resources['permalink']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-permalink'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-permalink.js' . $staticOption) . "\n";
        }
        if ($resources['zoomlevel']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-zoomlevel'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-zoomlevel.js' . $staticOption) . "\n";
        }
        if ($resources['geosearch']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-geosearch'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-geosearch.js' . $staticOption) . "\n";
        }
        if ($resources['overviewmap']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-overviewmap'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-overviewmap.js' . $staticOption) . "\n";
        }
        if ($resources['baselayerswitcher']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-starboardplugin-baselayerswitcher'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-starboardplugin-baselayerswitcher.js' . $staticOption) . "\n";
        }
        if ($resources['layerswitcher']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-starboardplugin-layerswitcher'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-starboardplugin-layerswitcher.js' . $staticOption) . "\n";
        }
        if ($resources['starboard'] || $resources['router'] || $resources['editor'] || $resources['measuretools']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-sideboard'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-sideboard.js' . $staticOption) . "\n";

            if ($resources['starboard']) {
                $GLOBALS['TL_BODY']['c4g-maps-control-starboard'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-starboard.js' . $staticOption) . "\n";
                if ($resources['customtab']) {
                    $GLOBALS['TL_BODY']['c4g-maps-control-starboardplugin-customtab'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-starboardplugin-customtab.js' . $staticOption) . "\n";
                }
            }
            if ($resources['router']) {
                $GLOBALS['TL_BODY']['c4g-maps-control-portside-router'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-portside-router.js' . $staticOption) . "\n";
            }
            if ($resources['editor']) {
                $GLOBALS['TL_BODY']['c4g-maps-control-portside-editor'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-portside-editor.js' . $staticOption) . "\n";
            }
            if ($resources['measuretools']) {
                $GLOBALS['TL_BODY']['c4g-maps-control-portside-measuretools'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-portside-measuretools.js' . $staticOption) . "\n";
            }
        }
        //ToDo make executable
        if ($resources['exporttools']) {
            $GLOBALS['TL_BODY']['c4g-maps-control-portside-exporttools'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps-control-portside-exporttools.js' . $staticOption) . "\n";
        }

        $GLOBALS['TL_BODY']['animatedclusterlayer'] = \Template::generateScriptTag('bundles/con4gismaps/vendor/animated_cluster/layer/animatedclusterlayer.js' . $staticOption) . "\n";

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
            $GLOBALS['TL_BODY']['c4g-maps'] = \Template::generateScriptTag('bundles/con4gismaps/js/c4g-maps.js' . $staticOption) . "\n";
        }

        if ( $GLOBALS['con4gis_projects_extension']['installed'] &&  $GLOBALS['con4gis_tracking_extension']['installed']) {
            $GLOBALS['TL_BODY']['live-positions'] = \Template::generateScriptTag('system/modules/con4gis_projects/assets/js/C4GBrickLivePositions.js') . "\n";
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
            // @TODO BE-Switch?
            'plugins' => true,
            'customtab' => true
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
            $GLOBALS['TL_CSS']['c4g-maps-icons'] = 'bundles/con4gismaps/css/themes/icons/c4g-theme-icons-fontawesome.css';
            $GLOBALS['TL_CSS']['c4g-maps-theme'] = 'bundles/con4gismaps/css/themes/buttons/c4g-theme-buttons-openlayers.css';
            $GLOBALS['TL_CSS']['c4g-maps-colors'] = 'bundles/con4gismaps/css/themes/colors/c4g-theme-colors.css';
            $GLOBALS['TL_CSS']['c4g-maps-effects'] = 'bundles/con4gismaps/css/themes/effects/c4g-theme-effects.css';
            return true;
        }

        /**
         * If custom stylesheet were uploaded, load them. If not, load the selected builtin style.
         */
        if ($theme->custom_icons) {
            $objFile = \FilesModel::findByUuid($theme->external_icons);
            $GLOBALS['TL_CSS']['c4g-maps-icons'] = $objFile->path;
        } else if ($theme->icons) {
            $GLOBALS['TL_CSS']['c4g-maps-icons'] = 'bundles/con4gismaps/css/themes/icons/' . $theme->icons;
        }

        if ($theme->custom_buttons) {
            $objFile = \FilesModel::findByUuid($theme->external_buttons);
            $GLOBALS['TL_CSS']['c4g-maps-theme'] = $objFile->path;
        } else if ($theme->buttons) {
            // Rename this to c4g-maps-buttons?
            $GLOBALS['TL_CSS']['c4g-maps-theme'] = 'bundles/con4gismaps/css/themes/buttons/' . $theme->buttons;
        }

        if ($theme->custom_colors) {
            $objFile = \FilesModel::findByUuid($theme->external_colors);
            $GLOBALS['TL_CSS']['c4g-maps-colors'] = $objFile->path;
        } else if ($theme->colors) {
            $GLOBALS['TL_CSS']['c4g-maps-colors'] = 'bundles/con4gismaps/css/themes/colors/' . $theme->colors;
        }

        if ($theme->custom_effects) {
            $objFile = \FilesModel::findByUuid($theme->external_effects);
            $GLOBALS['TL_CSS']['c4g-maps-effects'] = $objFile->path;
        } else if ($theme->effects) {
            $GLOBALS['TL_CSS']['c4g-maps-effects'] = 'bundles/con4gismaps/css/themes/effects/' . $theme->effects;
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
