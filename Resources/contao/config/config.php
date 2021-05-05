<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

$GLOBALS['BE_MOD']['con4gis'] = array_merge($GLOBALS['BE_MOD']['con4gis'], [
        'c4g_map_baselayers' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_map_baselayers', 'tl_c4g_map_overlays'],
            'icon' => 'bundles/con4gismaps/images/be-icons/baselayers.svg',
            'javascript' => 'bundles/con4gismaps/js/c4g-maps-backend.js',
        ],
        'c4g_map_locstyles' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_map_locstyles'],
            'icon' => 'bundles/con4gismaps/images/be-icons/locationstyles.svg',
        ],
        'c4g_map_themes' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_map_themes'],
            'icon'  => 'bundles/con4gismaps/images/be-icons/maplayout.svg',
        ],
        'c4g_map_profiles' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_map_profiles'],
            'icon'  => 'bundles/con4giscore/images/be-icons/global_settings_16.svg',
        ],
        'c4g_maps' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_maps'],
            'icon' => 'bundles/con4gismaps/images/be-icons/mapstructure.svg',
            'javascript' => 'bundles/con4gismaps/js/c4g-maps-backend.js',
        ],
        'c4g_map_tables' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_map_tables'],
            'icon' => 'bundles/con4gismaps/images/be-icons/sourcetables.svg',
        ],
        'c4g_map_filters' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_map_filters'],
            'icon' => 'bundles/con4gismaps/images/be-icons/mapfilter.svg',
        ],
        'c4g_routing_configuration' =>
        [
            'brick' => 'maps',
            'tables' => ['tl_c4g_routing_configuration'],
            'icon' => 'bundles/con4gismaps/images/be-icons/routingconfig.svg'
        ]
    ]
);

/**
 * Frontend modules
 */
$GLOBALS['FE_MOD']['con4gis']['c4g_maps'] = 'con4gis\MapsBundle\Resources\contao\modules\ModuleC4gMaps';
$GLOBALS['FE_MOD']['con4gis']['c4g_search'] = 'con4gis\MapsBundle\Resources\contao\modules\ModuleC4gSearch';
$GLOBALS['FE_MOD']['con4gis']['c4g_external_map_element'] = 'con4gis\MapsBundle\Resources\contao\modules\ExternalMapElement';
asort($GLOBALS['FE_MOD']['con4gis']);

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
$GLOBALS['con4gis']['maps']['api']['geosearch'] = $apiBaseUrl . '/searchService';
$GLOBALS['con4gis']['maps']['api']['geosearch_reverse'] = $apiBaseUrl . '/reverseSearchService';
$GLOBALS['con4gis']['maps']['api']['routing'] = $apiBaseUrl . '/routingService';
$GLOBALS['con4gis']['maps']['api']['geopicker'] = $apiBaseUrl . '/geopickerService/';
$GLOBALS['con4gis']['maps']['api']['filter'] = $apiBaseUrl . '/filterService/';

$GLOBALS['con4gis']['api-caching'] = ['baseLayerService','layerService','layerContentService','locationStyleService'];
$GLOBALS['con4gis']['dafaultData'] = ['Table'=>'Table'];

/**
 * Specialized Widgets for Text Input and Image Sizes
 */
// @TODO maybe move to core
$GLOBALS['BE_FFL']['c4g_text'] = '\TextField';

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

if(TL_MODE == "BE") {
    $GLOBALS['TL_CSS'][] = '/bundles/con4gismaps/css/c4g-backend.css';
}
