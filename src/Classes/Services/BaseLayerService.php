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
namespace con4gis\MapsBundle\Classes\Services;

use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\MapsBundle\Classes\Utils;
use con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapOverlaysModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use Contao\Database;
use Contao\FrontendUser;
use Contao\StringUtil;
use Contao\FilesModel;
use Contao\System;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class BaseLayerService
{
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;

    /**
     * LayerService constructor.
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->Database = Database::getInstance();
        $this->User = FrontendUser::getInstance();
    }
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    protected $arrLayers = [];
    protected $arrConfig = [];

    public function generate($intProfileId, $lang)
    {
        $blnProfileBaselayerFilter = false;
        $mapsProfileModel = C4gMapProfilesModel::findById($intProfileId);

        if ($mapsProfileModel !== null) {
            if ($mapsProfileModel->baselayers) {
                $blnProfileBaselayerFilter = true;
                $arrProfileBaselayerFilter = StringUtil::deserialize($mapsProfileModel->baselayers, true);
            }
        }

        $arrLayers = $this->getBaseLayerList($blnProfileBaselayerFilter ? $arrProfileBaselayerFilter : false, $lang);

        $this->arrConfig['countAll'] = sizeof($arrLayers);

        return ['config' => $this->arrConfig, 'baselayer' => $arrLayers];
    }

    /**
     * Returns the layer structure for the map.
     *
     * @param int $id
     */
    protected function getBaseLayerList($arrFilter, $lang)
    {
        $arrBaseLayer = [];

        // C4gMapBaselayersModel
        $objBaseLayers = C4gMapBaselayersModel::findAll();

        if ($objBaseLayers != null) {
            while ($objBaseLayers->next()) {
                if ($objBaseLayers->published != 1) {
                    continue;
                }
                if ($objBaseLayers->protect_baselayer) {
                    $hasFrontendUser = null;
                    if (System::getContainer()->has('contao.security.token_checker')) {
                        $tokenChecker = System::getContainer()->get('contao.security.token_checker');
                        $hasFrontendUser = $tokenChecker->hasFrontendUser();
                    }
                    else {
                        $hasFrontendUser = FE_USER_LOGGED_IN;
                    }

                    if ($hasFrontendUser && !empty($objBaseLayers->permitted_groups)) {
                        if (sizeof(array_intersect($this->User->groups, StringUtil::deserialize($objBaseLayers->permitted_groups))) <= 0) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }

                if ($arrFilter) {
                    if (!in_array($objBaseLayers->id, $arrFilter)) {
                        continue;
                    }
                }

                $arrLayerData = $this->parseBaseLayer($objBaseLayers, $lang);

                $objOverlays = C4gMapOverlaysModel::findPublishedByPid($objBaseLayers->id);
                if ($objOverlays !== null) {
                    $arrLayerData['hasOverlays'] = true;
                    $arrLayerData['overlays'] = [];
                    while ($objOverlays->next()) {
                        $arrLayerData['overlays'][] = $this->parseOverlay($objOverlays);
                    }
                }

                $arrBaseLayer[] = $arrLayerData;
            }
        }

        usort($arrBaseLayer, function ($a, $b) {
            if ($a['sort'] < $b['sort']) {
                return -1;
            } elseif ($a['sort'] > $b['sort']) {
                return 1;
            }

            return 0;
        });

        return $arrBaseLayer;
    }

    /**
     * Summary of parseLayer
     *
     * @param mixed $objLayer
     * @return array
     */
    protected function parseOverlay($objOverlay)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrOverlayData = [];

        $arrOverlayData['id'] = $objOverlay->id;
        $arrOverlayData['pid'] = $objOverlay->pid;
        $arrOverlayData['name'] = System::getContainer()->get('contao.insert_tag.parser')->replace($stringClass::decodeEntities($objOverlay->name));

        $arrOverlayData['provider'] = $objOverlay->provider;
        $arrOverlayData['opacity'] = $objOverlay->opacity;
        $arrOverlayData['attribution'] = System::getContainer()->get('contao.insert_tag.parser')->replace($stringClass::decodeEntities($objOverlay->attribution));

        $arrOverlayData['infopage'] = System::getContainer()->get('contao.insert_tag.parser')->replace($stringClass::decodeEntities($objOverlay->infopage));


        switch ($objOverlay->provider) {
            case 'custom':
                /* this values work for the js-code */
                $arrOverlayData['provider'] = 'osm';
                $arrOverlayData['style'] = 'osm_custom';

                $arrOverlayData['urls'] = [];

                for ($intI = 1; $intI < 5; $intI++) {
                    $colName = 'url' . $intI;
                    if ($objOverlay->$colName) {
                        $arrOverlayData['urls'][] = str_replace('$', '', $objOverlay->$colName);
                    }
                }

                break;
            case 'wms':
                $arrOverlayData['url'] = html_entity_decode($objOverlay->wms_url);

                $arrOverlayData['params'] = [];
                $arrOverlayData['params']['layers'] = $objOverlay->wms_params_layers;
                $arrOverlayData['params']['version'] = $objOverlay->wms_params_version;
                $arrOverlayData['params']['format'] = $objOverlay->wms_params_format;
                $arrOverlayData['params']['transparent'] = $objOverlay->wms_params_transparent ? true : false;
                $arrOverlayData['params']['srs'] = $objOverlay->wms_params_srs;
                $arrOverlayData['gutter'] = $objOverlay->wms_gutter;

                break;
            case 'owm':
                $arrOverlayData['url'] = 'https://maps.owm.io:' . $objOverlay->api_port . '/'; //ToDo Port kann sich ändern

                $arrOverlayData['app_id'] = $objOverlay->app_id;
                $arrOverlayData['api_key'] = $objOverlay->api_key;

                break;
            case 'sea':
                $arrOverlayData['urls'][] = 'https://t1.openseamap.org/seamark/{z}/{x}/{y}.png';
                if (!$arrOverlayData['attribution']) {
                    $arrOverlayData['attribution'] = 'Seamarks by <a href="https://www.openseamap.org/">OpenSeaMap</a>';
                }

                break;
            case 'geoimage':
                $objFile = FilesModel::findByUuid($objOverlay->image_src);
                if ($objFile && $objFile->path) {
                    $arrOverlayData['image_src'] = $objFile->path;
                    $jsonGeoRef = $objOverlay->geoimage_json;
                    $jsonGeoRef = $jsonGeoRef[0] == '{' ? $jsonGeoRef : '{' . $jsonGeoRef;
                    $jsonGeoRef = $jsonGeoRef[strlen($jsonGeoRef) - 1] == '}' ? $jsonGeoRef : $jsonGeoRef . '}';
                    $arrOverlayData['geoimage_json'] = $jsonGeoRef;
                }
            case 'geotiff':
                $objFile = FilesModel::findByUuid($objOverlay->image_src);
                if ($objFile && $objFile->path) {
                    $arrOverlayData['image_src'] = $objFile->path;
//                    $jsonGeoRef = $objOverlay->geoimage_json;
//                    $jsonGeoRef = $jsonGeoRef[0] == '{' ? $jsonGeoRef : '{' . $jsonGeoRef;
//                    $jsonGeoRef = $jsonGeoRef[strlen($jsonGeoRef) - 1] == '}' ? $jsonGeoRef : $jsonGeoRef . '}';
//                    $arrOverlayData['geoimage_json'] = $jsonGeoRef;
                }
        }

        return $arrOverlayData;
    }

    protected function parseBaseLayer($objBaseLayer, $lang)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrBaseLayer = [];

        $arrBaseLayer['id'] = $objBaseLayer->id;
        $decodedName = $stringClass::decodeEntities($objBaseLayer->display_name ?: $objBaseLayer->name);
        $arrBaseLayer['name'] = System::getContainer()->get('contao.insert_tag.parser')->replace($decodedName, $lang);

        $arrBaseLayer['provider'] = $objBaseLayer->provider;

        try {
            switch ($objBaseLayer->provider) {
                case 'custom':
                    if (!empty($objBaseLayer->osm_style_url1) && empty($objBaseLayer->osm_style_url2)) {
                        $arrBaseLayer['url'] = str_replace('$', '', $objBaseLayer->osm_style_url1);
                    } else {
                        if (!empty($objBaseLayer->osm_style_url1)) {
                            $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url1);
                        }
                        if (!empty($objBaseLayer->osm_style_url2)) {
                            $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url2);
                        }
                        if (!empty($objBaseLayer->osm_style_url3)) {
                            $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url3);
                        }
                        if (!empty($objBaseLayer->osm_style_url4)) {
                            $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url4);
                        }
                    }

                    $arrBaseLayer['extend'] = $objBaseLayer->extend;

                    break;
                case 'osm':
                    $arrBaseLayer['style'] = $objBaseLayer->osm_style;
                    if (!empty($objBaseLayer->osm_keyname)) {
                        $arrBaseLayer['apiKey'] = $objBaseLayer->osm_keyname;
                    }
                    // custom?
                    if ($arrBaseLayer['style'] == 'osm_custom') {
                        if (!empty($objBaseLayer->osm_style_url1) && empty($objBaseLayer->osm_style_url2)) {
                            $arrBaseLayer['url'] = str_replace('$', '', $objBaseLayer->osm_style_url1);
                        } else {
                            if (!empty($objBaseLayer->osm_style_url1)) {
                                $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url1);
                            }
                            if (!empty($objBaseLayer->osm_style_url2)) {
                                $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url2);
                            }
                            if (!empty($objBaseLayer->osm_style_url3)) {
                                $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url3);
                            }
                            if (!empty($objBaseLayer->osm_style_url4)) {
                                $arrBaseLayer['urls'][] = str_replace('$', '', $objBaseLayer->osm_style_url4);
                            }
                        }
                    }

                    break;
                case 'stadiaMaps':
                    $arrBaseLayer['style'] = $objBaseLayer->stadiaMaps_style;
                    if (!empty($objBaseLayer->osm_keyname)) {
                        $arrBaseLayer['apiKey'] = $objBaseLayer->osm_keyname;
                    }

                    break;
                case 'con4gisIo':
                    $objSettings = C4gMapSettingsModel::findOnly();
                    $arrBaseLayer['url'] = rtrim($objSettings->con4gisIoUrl, '/') . '/' . 'tiles.php?key={key}&z={z}&x={x}&y={y}';

                    break;
                case 'mapbox':
                    $arrBaseLayer['url'] = 'https://api.mapbox.com/styles/v1/';
                    $arrBaseLayer['url_classic'] = 'https://api.tiles.mapbox.com/v4/';
                    $arrBaseLayer['mapbox_type'] = $objBaseLayer->mapbox_type;
                    if ($objBaseLayer->hide_in_be) {
                        $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                    } else {
                        $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                        $arrBaseLayer['api_key'] = $objBaseLayer->api_key;
                    }

                    break;
                case 'mapz':
                    $arrBaseLayer['url'] = 'https://tiles.mapz.com/mapproxy/v1/' . $objBaseLayer->api_key . '/tiles/1.0.0/' . $objBaseLayer->mapz_type . '/EPSG3857/{z}/{x}/{-y}.jpeg';
                    if ($objBaseLayer->hide_in_be) {
                        $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                    }

                    break;
                case 'otm':
                    $arrBaseLayer['url'] = 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png';

                    break;
                case 'klokan':
                    $arrBaseLayer['url'] = $objBaseLayer->url;
                    $klokan_type = $objBaseLayer->klokan_type;
                    if ($klokan_type != 'OpenMapTiles') {
                        $klokan_type = 'TileHosting';
                    }
                    $arrBaseLayer['style'] = $objBaseLayer->klokan_type;
                    $arrBaseLayer['klokan_type'] = $klokan_type;
                    $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                    $arrBaseLayer['api_key'] = $objBaseLayer->api_key;

                    break;
                case 'here':
                    $arrBaseLayer['style'] = $objBaseLayer->here_type;
                    $arrBaseLayer['here_type'] = 'HERE';
                    if ($objBaseLayer->hide_in_be) {
                        $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                    } else {
                        $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                        $arrBaseLayer['api_key'] = $objBaseLayer->api_key;
                    }

                    break;
                case 'thunder':
                    $arrBaseLayer['style'] = $objBaseLayer->thunderforest_type;
                    $arrBaseLayer['thunderforest_type'] = 'Thunderforest';
                    if ($objBaseLayer->hide_in_be) {
                        $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                    } else {
                        $arrBaseLayer['api_key'] = $objBaseLayer->api_key;
                    }

                    break;
                case 'google':
                    $arrBaseLayer['style'] = $objBaseLayer->google_style;

                    break;
                case 'bing':
                    $arrBaseLayer['style'] = $objBaseLayer->bing_style;
                    if (!empty($objBaseLayer->bing_key)) {
                        $arrBaseLayer['apiKey'] = $objBaseLayer->bing_key;
                    }

                    break;
                case 'wms':
                    $arrBaseLayer['url'] = html_entity_decode($objBaseLayer->wms_url);

                    $arrBaseLayer['params'] = [];
                    $arrBaseLayer['params']['layers'] = $objBaseLayer->wms_params_layers;
                    $arrBaseLayer['params']['version'] = $objBaseLayer->wms_params_version;
                    $arrBaseLayer['params']['format'] = $objBaseLayer->wms_params_format;
                    $arrBaseLayer['params']['transparent'] = $objBaseLayer->wms_params_transparent ? true : false;
                    $arrBaseLayer['params']['srs'] = $objBaseLayer->wms_params_srs;

                    $arrBaseLayer['gutter'] = $objBaseLayer->wms_gutter;

                    break;
                case 'owm':
                    $arrBaseLayer['url'] = 'http://maps.owm.io:' . $objBaseLayer->api_port . '/';

                    $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                    $arrBaseLayer['api_key'] = $objBaseLayer->api_key;

                    break;
                case 'group':
                    $layerGroup = StringUtil::deserialize($objBaseLayer->layerGroup);
                    foreach ($layerGroup as $key => $layer) {
                        $objChildLayer = $this->Database->prepare('SELECT * FROM tl_c4g_map_baselayers WHERE id=?')->execute($layer['baselayers']);
                        $layer['entry'] = $this->parseBaseLayer($objChildLayer, $lang);
                        $layerGroup[$key] = $layer;
                    }
                    $arrBaseLayer['layerGroup'] = array_reverse($layerGroup);

                    break;
                case 'image':
                    $objFile = FilesModel::findByUuid($objBaseLayer->image_src);
                    if ($objFile && $objFile->path) {
                        $arrBaseLayer['image_src'] = $objFile->path;
                    }

                    break;
                case 'geoimage':
                    $objFile = FilesModel::findByUuid($objBaseLayer->image_src);
                    if ($objFile && $objFile->path) {
                        $arrBaseLayer['image_src'] = $objFile->path;
                        $jsonGeoRef = $objBaseLayer->geoimage_json;
                        $jsonGeoRef = $jsonGeoRef[0] == '{' ? $jsonGeoRef : '{' . $jsonGeoRef;
                        $jsonGeoRef = $jsonGeoRef[strlen($jsonGeoRef) - 1] == '}' ? $jsonGeoRef : $jsonGeoRef . '}';
                        $arrBaseLayer['geoimage_json'] = $jsonGeoRef;
                    }

                    break;
                case 'geotiff':
                    $objFile = FilesModel::findByUuid($objBaseLayer->image_src);
                    if ($objFile && $objFile->path) {
                        $arrBaseLayer['image_src'] = $objFile->path;
//                        $jsonGeoRef = $objBaseLayer->geoimage_json;
//                        $jsonGeoRef = $jsonGeoRef[0] == '{' ? $jsonGeoRef : '{' . $jsonGeoRef;
//                        $jsonGeoRef = $jsonGeoRef[strlen($jsonGeoRef) - 1] == '}' ? $jsonGeoRef : $jsonGeoRef . '}';
//                        $arrBaseLayer['geoimage_json'] = $jsonGeoRef;
                    }

                    break;
                default:
                    die('This should not have happened!');
            }
        } catch (Exception $e) {
            C4gLogModel::addLogEntry('map', 'Error while loading baselayer type ' . $objBaseLayer->provider);
            die('This should not have happened!');
        }

        if (!empty($objBaseLayer->attribution)) {
            $arrBaseLayer['attribution'] = System::getContainer()->get('contao.insert_tag.parser')->replace($stringClass::decodeEntities($objBaseLayer->attribution));
        }
        if (!empty($objBaseLayer->infopage)) {
            $arrBaseLayer['infopage'] = System::getContainer()->get('contao.insert_tag.parser')->replace($stringClass::decodeEntities($objBaseLayer->infopage));
        }
        if (!empty($objBaseLayer->minzoomlevel)) {
            $arrBaseLayer['minZoom'] = $objBaseLayer->minzoomlevel;
        }
        if (!empty($objBaseLayer->maxzoomlevel)) {
            $arrBaseLayer['maxZoom'] = $objBaseLayer->maxzoomlevel;
        }
        if (!empty($objBaseLayer->sorting)) {
            $arrBaseLayer['sort'] = intval($objBaseLayer->sorting);
        }
        if (!empty($objBaseLayer->consentId)) {
            $arrBaseLayer['consentId'] = $objBaseLayer->consentId;
        }
        $arrBaseLayer['cesium'] = $objBaseLayer->cesium;
        $imageFile = FilesModel::findByUuid($objBaseLayer->preview_image);
        if ($imageFile) {
            $arrBaseLayer['preview_image'] = $imageFile->path;
        }

        return $arrBaseLayer;
    }
}
