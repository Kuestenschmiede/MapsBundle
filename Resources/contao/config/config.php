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


$GLOBALS['con4gis']['maps']['installed'] = true;
$GLOBALS['con4gis']['maps']['debug'] = false;
$GLOBALS['con4gis']['maps']['ol-version'] = '4.4.2';

/**
 * Sourcetable definition
 */
if (!$GLOBALS['con4gis']['maps']['sourcetable'])
{
    $GLOBALS['con4gis']['maps']['sourcetable'] = array();
}

$GLOBALS['con4gis']['maps']['sourcetable']['tl_calendar_events'] = array
(
    'ptable'        => 'tl_calendar',
    'ptable_option' => 'title',
    'geox'          => 'c4g_loc_geox',
    'geoy'          => 'c4g_loc_geoy',
    'label'         => 'c4g_loc_label',
    'locstyle'      => 'c4g_locstyle',
    'tooltip'       => 'title',
    'popup'         => '{{event::[id]}},[startDate:date]',
    /** other example with start- and endDate ->
     * 'popup'         => '{{event::[id]}},(,[startDate:date],-,[endDate:date],)',
     */
    'linkurl'       => '{{event_url::[id]}}',
    'sqlwhere'      => 'published = 1',
    'alias_getparam'=> 'events',
    'title'         => 'title'
);

$GLOBALS['con4gis']['maps']['sourcetable']['tl_member'] = array
(
    'geox'          => 'c4g_loc_geox',
    'geoy'          => 'c4g_loc_geoy',
    'label'         => 'c4g_loc_label',
    'locstyle'      => 'c4g_locstyle',
    'popup'         => '[firstname:string],[lastname:string]',
    'tooltip'       => 'firstname'
);

/**
 * Backend Modules
 */
array_insert($GLOBALS['BE_MOD']['con4gis'], 1, array
    (
        'c4g_map_baselayers' => array
        (
            'tables' => array('tl_c4g_map_baselayers', 'tl_c4g_map_overlays'),
            'icon' => 'bundles/con4gismaps/images/be-icons/baselayers.png',
            'javascript'     => 'bundles/con4gismaps/js/c4g-maps-backend.js'
        ),
        'c4g_map_locstyles' => array
        (
            'tables' => array('tl_c4g_map_locstyles'),
            'icon' => 'bundles/con4gismaps/images/be-icons/locstyles.png',
        ),
        'c4g_map_themes'    => array
        (
            'tables' => array('tl_c4g_map_themes'),
            'icon'  => 'bundles/con4gismaps/images/be-icons/themes.png',
        ),
        'c4g_map_profiles' => array
        (
            'tables' => array('tl_c4g_map_profiles'),
            'icon' => 'bundles/con4gismaps/images/be-icons/profiles.png',
        ),
        'c4g_maps' => array
        (
            'tables' => array('tl_c4g_maps'),
            'icon' => 'bundles/con4gismaps/images/be-icons/mapstructure.png',
            'javascript'     => 'bundles/con4gismaps/js/c4g-maps-backend.js'
        ),
    ));

/**
 * Frontend modules
 */
array_insert($GLOBALS['FE_MOD']['con4gis'], 1, array
    (
        'c4g_maps' => 'con4gis\MapsBundle\Resources\contao\modules\ModuleC4gMaps',
    ));

/**
 * Content elements
 */
array_insert($GLOBALS['TL_CTE']['con4gis'], 1, array
    (
        'c4g_maps' => 'con4gis\MapsBundle\Resources\contao\modules\ContentC4gMaps',
    ));


$apiBaseUrl = 'con4gis/api';

$GLOBALS['con4gis']['maps']['api']['baselayer'] = $apiBaseUrl . '/baseLayerService';
$GLOBALS['con4gis']['maps']['api']['layer'] = $apiBaseUrl . '/layerService';
$GLOBALS['con4gis']['maps']['api']['layercontent'] = $apiBaseUrl . '/layerContentService';
$GLOBALS['con4gis']['maps']['api']['editor'] = $apiBaseUrl . '/editorService';
$GLOBALS['con4gis']['maps']['api']['locstyle'] = $apiBaseUrl . '/locationStyleService';
$GLOBALS['con4gis']['maps']['api']['infowindow'] = $apiBaseUrl . '/infoWindowService';
$GLOBALS['con4gis']['maps']['api']['geosearch'] = $apiBaseUrl . '/nominatimService';
$GLOBALS['con4gis']['maps']['api']['geosearch_reverse'] = $apiBaseUrl . '/reverseNominatimService';
$GLOBALS['con4gis']['maps']['api']['routing'] = $apiBaseUrl . '/routingService';
$GLOBALS['con4gis']['maps']['api']['geopicker'] = $apiBaseUrl . '/geopickerService';

/**
 * Activate caching for con4gis_maps services
 */
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "baseLayerService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "layerService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "layerContentService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "editorService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "locationStyleService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "infoWindowService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "nominatimService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "reverseNominatimService";
//$GLOBALS['CON4GIS']['USE_CACHE']['SERVICES'][] = "routingService";


/**
 * Specialized Widgets for Text Input and Image Sizes
 */
// @TODO maybe move to core
$GLOBALS['BE_FFL']['c4g_text'] = '\TextField';
$GLOBALS['BE_FFL']['c4g_imageSize'] = 'con4gis\MapsBundle\Resources\contao\classes\ImageSize';

$GLOBALS['TL_MODELS']['tl_c4g_maps'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapsModel';
$GLOBALS['TL_MODELS']['tl_c4g_map_profiles'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel';
$GLOBALS['TL_MODELS']['tl_c4g_map_baselayers'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel';
$GLOBALS['TL_MODELS']['tl_c4g_map_themes'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapThemesModel';
$GLOBALS['TL_MODELS']['tl_c4g_map_locstyles'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapLocstylesModel';
$GLOBALS['TL_MODELS']['tl_c4g_map_overlays'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapOverlaysModel';