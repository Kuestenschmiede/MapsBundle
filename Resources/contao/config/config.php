<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */


$GLOBALS['con4gis']['maps']['installed'] = true;
$GLOBALS['con4gis']['maps']['ol-version'] = 'v5.3.0';
$GLOBALS['con4gis']['maps']['ol-cesium-version'] = 'v2.5.0';
$GLOBALS['con4gis']['maps']['olms-version'] = 'v4.0.0';
$GLOBALS['con4gis']['maps']['ol-ext'] = 'v3.1.1';

/**
 * Backend Modules
 */
$GLOBALS['BE_MOD']['con4gis'] = array_merge($GLOBALS['BE_MOD']['con4gis'], [
    'c4g_map_baselayers' =>
        [
            'tables' => ['tl_c4g_map_baselayers', 'tl_c4g_map_overlays'],
            'icon' => 'bundles/con4gismaps/images/be-icons/baselayers.png',
            'javascript'     => 'bundles/con4gismaps/js/c4g-maps-backend.js'
        ],
    'c4g_map_locstyles' =>
        [
            'tables' => ['tl_c4g_map_locstyles'],
            'icon' => 'bundles/con4gismaps/images/be-icons/locstyles.png',
        ],
    'c4g_map_themes'    =>
        [
            'tables' => ['tl_c4g_map_themes'],
            'icon'  => 'bundles/con4gismaps/images/be-icons/themes.png',
        ],
    'c4g_map_profiles' =>
        [
            'tables' => ['tl_c4g_map_profiles'],
            'icon' => 'bundles/con4gismaps/images/be-icons/profiles.png',
        ],
    'c4g_maps' =>
        [
            'tables' => ['tl_c4g_maps'],
            'icon' => 'bundles/con4gismaps/images/be-icons/mapstructure.png',
            'javascript'     => 'bundles/con4gismaps/js/c4g-maps-backend.js'
        ],
    'c4g_map_tables' =>
        [
            'tables' => ['tl_c4g_map_tables'],
            'icon' => 'bundles/con4gismaps/images/be-icons/mapstructure.png',
        ]
]);

$GLOBALS['BE_MOD']['con4gis'] =
    \con4gis\CoreBundle\Resources\contao\classes\C4GUtils::sortBackendModules($GLOBALS['BE_MOD']['con4gis']);
/**
 * Frontend modules
 */
array_insert($GLOBALS['FE_MOD']['con4gis'], 1,
    [
        'c4g_maps' => 'con4gis\MapsBundle\Resources\contao\modules\ModuleC4gMaps',
    ]);

/**
 * Content elements
 */
array_insert($GLOBALS['TL_CTE']['con4gis'], 1,
    [
        'c4g_maps' => 'con4gis\MapsBundle\Resources\contao\modules\ContentC4gMaps',
    ]);


$apiBaseUrl = 'con4gis';

$GLOBALS['con4gis']['maps']['api']['baselayer'] = $apiBaseUrl . '/baseLayerService';
$GLOBALS['con4gis']['maps']['api']['layer'] = $apiBaseUrl . '/layerService';
$GLOBALS['con4gis']['maps']['api']['layercontent'] = $apiBaseUrl . '/layerContentService';
$GLOBALS['con4gis']['maps']['api']['editor'] = $apiBaseUrl . '/editorService';
$GLOBALS['con4gis']['maps']['api']['locstyle'] = $apiBaseUrl . '/locationStyleService/';
$GLOBALS['con4gis']['maps']['api']['infowindow'] = $apiBaseUrl . '/infoWindowService';
$GLOBALS['con4gis']['maps']['api']['geosearch'] = $apiBaseUrl . '/nominatimService';
$GLOBALS['con4gis']['maps']['api']['geosearch_reverse'] = $apiBaseUrl . '/reverseNominatimService';
$GLOBALS['con4gis']['maps']['api']['routing'] = $apiBaseUrl . '/routingService';
$GLOBALS['con4gis']['maps']['api']['geopicker'] = $apiBaseUrl . '/geopickerService/';

$GLOBALS['con4gis']['api-caching'] = ['baseLayerService','layerService','layerContentService','locationStyleService'];
$GLOBALS['con4gis']['dafaultData'] = ['Table'=>'Table'];

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
$GLOBALS['TL_MODELS']['tl_c4g_map_tables'] = 'con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel';

/**
 * Purge entries for cache clearing.
 */
$GLOBALS['TL_PURGE']['folders']['con4gis_layer'] =
    [
    'callback' => ['\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeLayerApiCache'],
    'affected' => ['var/cache/prod/con4gis_layerService']
    ];
$GLOBALS['TL_PURGE']['folders']['con4gis_baselayer'] =
    [
    'callback' => ['\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeBaselayerApiCache'],
    'affected' => ['var/cache/prod/con4gis_baselayerService']
    ];
$GLOBALS['TL_PURGE']['folders']['con4gis_locationstyle'] =
    [
    'callback' => ['\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeLocationstyleApiCache'],
    'affected' => ['var/cache/prod/con4gis_locationstyleService']
    ];