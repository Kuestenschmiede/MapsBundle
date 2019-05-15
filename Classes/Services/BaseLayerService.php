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
namespace con4gis\MapsBundle\Classes\Services;


use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapOverlaysModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use Contao\Database;
use Contao\StringUtil;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

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
    }
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    protected $arrLayers = [];
    protected $arrConfig = [];

    public function generate($intProfileId)
    {
        $blnProfileBaselayerFilter = false;
        $mapsProfileModel = C4gMapProfilesModel::findById($intProfileId);

        if ($mapsProfileModel !== null)
        {
            if ($mapsProfileModel->baselayers)
            {
                $blnProfileBaselayerFilter = true;
                $arrProfileBaselayerFilter = deserialize($mapsProfileModel->baselayers, true);
            }
        }

        $arrLayers = $this->getBaseLayerList($blnProfileBaselayerFilter ? $arrProfileBaselayerFilter : false);

        $this->arrConfig['countAll'] = sizeof($arrLayers);

        return array('config' => $this->arrConfig, 'baselayer' => $arrLayers);

    }

    /**
     * Returns the layer structure for the map.
     *
     * @param int $id
     */
    protected function getBaseLayerList($arrFilter)
    {

        $arrBaseLayer = array();


        // C4gMapBaselayersModel
        $objBaseLayers = C4gMapBaselayersModel::findAll();

        if ($objBaseLayers != null)
        {
            while ($objBaseLayers->next()) {

                if ($objBaseLayers->published != 1)
                {
                    continue;
                }
                if ($objBaseLayers->protect_baselayer) {
                    if (FE_USER_LOGGED_IN && !empty($objBaseLayers->permitted_groups)) {
                        if (sizeof(array_intersect($this->User->groups, deserialize($objBaseLayers->permitted_groups))) <= 0) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }

                if ($arrFilter)
                {
                    if (!in_array($objBaseLayers->id, $arrFilter))
                    {
                        continue;
                    }
                }

                $arrLayerData = $this->parseBaseLayer($objBaseLayers);

                $objOverlays = C4gMapOverlaysModel::findBy('pid', $objBaseLayers->id);
                if ($objOverlays !== null)
                {
                    $arrLayerData['hasOverlays'] = true;
                    $arrLayerData['overlays'] = array();
                    while ($objOverlays->next()) {
                        $arrLayerData['overlays'][] = $this->parseOverlay($objOverlays);
                    }
                }

                $arrBaseLayer[] = $arrLayerData;
            }
        }



        return $arrBaseLayer;
    }

    /**
     * Summary of parseLayer
     *
     * @param mixed $objLayer
     * @return array
     */

    protected function parseOverlay($objOverlay) {

        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrOverlayData = array();

        $arrOverlayData['id'] = $objOverlay->id;
        $arrOverlayData['pid'] = $objOverlay->pid;
        $arrOverlayData['name'] =  \Contao\Controller::replaceInsertTags($stringClass::decodeEntities($objOverlay->name));

        $arrOverlayData['provider'] = $objOverlay->provider;

        switch ($objOverlay->provider)
        {
            case "custom":
                /* this values work for the js-code */
                $arrOverlayData['provider'] = "osm";
                $arrOverlayData['style'] = "osm_custom";

                $arrOverlayData['urls'] = array();

                for ($intI=1; $intI<5; $intI++)
                {
                    $colName = "url" . $intI;
                    if ($objOverlay->$colName)
                    {
                        $arrOverlayData['urls'][] = str_replace("$", "", $objOverlay->$colName);
                    }
                }
                break;
            case 'wms':
                $arrOverlayData['url'] = $objOverlay->wms_url;

                $arrOverlayData['params'] = array();
                $arrOverlayData['params']['layers'] = $objOverlay->wms_params_layers;
                $arrOverlayData['params']['version'] = $objOverlay->wms_params_version;
                $arrOverlayData['params']['format'] = $objOverlay->wms_params_format;
                $arrOverlayData['params']['transparent'] = $objOverlay->wms_params_transparent ? true : false;
                $arrOverlayData['params']['srs'] = $objOverlay->wms_params_srs;
                $arrOverlayData['gutter'] = $objOverlay->wms_gutter;
                break;
            case 'owm':
                $arrOverlayData['url'] = 'http://maps.owm.io:'.$objOverlay->api_port.'/'; //ToDo Port kann sich ändern

                $arrOverlayData['app_id'] = $objOverlay->app_id;
                $arrOverlayData['api_key'] = $objOverlay->api_key;
                break;
            case 'geoimage':
                $objFile = \FilesModel::findByUuid($objOverlay->image_src);
                if ($objFile && $objFile->path) {
                    $arrOverlayData['image_src'] = $objFile->path;
                    $arrOverlayData['geoimage_json'] = $objOverlay->geoimage_json;
                }
        }
        $arrOverlayData['opacity']     = $objOverlay->opacity;
        $arrOverlayData['attribution'] = $objOverlay->attribution;


        return $arrOverlayData;

    }

    protected function parseBaseLayer($objBaseLayer)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrBaseLayer = [];

        $arrBaseLayer['id'] = $objBaseLayer->id;
        $arrBaseLayer['name'] =  \Contao\Controller::replaceInsertTags($stringClass::decodeEntities($objBaseLayer->display_name ?: $objBaseLayer->name));

        $arrBaseLayer['provider'] = $objBaseLayer->provider;
        switch ($objBaseLayer->provider) {
            case 'custom':
                if (!empty($objBaseLayer->osm_style_url1) && empty($objBaseLayer->osm_style_url2)) {
                    $arrBaseLayer['url'] = str_replace("$", "", $objBaseLayer->osm_style_url1);
                } else {
                    if (!empty($objBaseLayer->osm_style_url1)) {
                        $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url1);
                    }
                    if (!empty($objBaseLayer->osm_style_url2)) {
                        $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url2);
                    }
                    if (!empty($objBaseLayer->osm_style_url3)) {
                        $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url3);
                    }
                    if (!empty($objBaseLayer->osm_style_url4)) {
                        $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url4);
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
                        $arrBaseLayer['url'] = str_replace("$", "", $objBaseLayer->osm_style_url1);
                    } else {
                        if (!empty($objBaseLayer->osm_style_url1)) {
                            $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url1);
                        }
                        if (!empty($objBaseLayer->osm_style_url2)) {
                            $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url2);
                        }
                        if (!empty($objBaseLayer->osm_style_url3)) {
                            $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url3);
                        }
                        if (!empty($objBaseLayer->osm_style_url4)) {
                            $arrBaseLayer['urls'][] = str_replace("$", "", $objBaseLayer->osm_style_url4);
                        }
                    }
                }
                break;
            case 'stamen':
                $arrBaseLayer['style'] = $objBaseLayer->stamen_style;
                if (!empty($objBaseLayer->osm_keyname)) {
                    $arrBaseLayer['apiKey'] = $objBaseLayer->osm_keyname;
                }
                break;
            case 'con4gisIo':
                $objSettings = C4gMapSettingsModel::findOnly();
                $key = C4GUtils::getKey($objSettings, '4', 'id='.$objBaseLayer->con4gisIo);
                if ($key) {
                    $arrBaseLayer['url'] = rtrim($objSettings->con4gisIoUrl, "/") . "/" . "tiles.php?key=" . $key . "&z={z}&x={x}&y={y}";
                }
                break;
            case 'mapbox':
                $arrBaseLayer['url'] = 'https://api.mapbox.com/styles/v1/';
                $arrBaseLayer['url_classic'] = 'https://api.tiles.mapbox.com/v4/';
                $arrBaseLayer['mapbox_type'] = $objBaseLayer->mapbox_type;
                if($objBaseLayer->hide_in_be)
                {
                    $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                }
                else
                {
                    $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                    $arrBaseLayer['api_key'] = $objBaseLayer->api_key;
                }
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
                if($objBaseLayer->hide_in_be)
                {
                    $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                }
                else
                {
                    $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                    $arrBaseLayer['api_key'] = $objBaseLayer->api_key;
                }
                break;
            case 'thunder':
                $arrBaseLayer['style'] = $objBaseLayer->thunderforest_type;
                $arrBaseLayer['thunderforest_type'] = 'Thunderforest';
                if($objBaseLayer->hide_in_be)
                {
                    $arrBaseLayer['hide_in_be'] = $objBaseLayer->hide_in_be;
                }
                else
                {
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
                $arrBaseLayer['url'] = $objBaseLayer->wms_url;

                $arrBaseLayer['params'] = array();
                $arrBaseLayer['params']['layers'] = $objBaseLayer->wms_params_layers;
                $arrBaseLayer['params']['version'] = $objBaseLayer->wms_params_version;
                $arrBaseLayer['params']['format'] = $objBaseLayer->wms_params_format;
                $arrBaseLayer['params']['transparent'] = $objBaseLayer->wms_params_transparent ? true : false;
                $arrBaseLayer['params']['srs'] = $objBaseLayer->wms_params_srs;

                $arrBaseLayer['gutter'] = $objBaseLayer->wms_gutter;
                break;
            case 'owm':
                $arrBaseLayer['url'] = 'http://maps.owm.io:'.$objBaseLayer->api_port.'/';

                $arrBaseLayer['app_id'] = $objBaseLayer->app_id;
                $arrBaseLayer['api_key'] = $objBaseLayer->api_key;
                break;
            case 'group':
                $layerGroup = unserialize($objBaseLayer->layerGroup);
                foreach($layerGroup as $key => $layer){
                    $objChildLayer = $this->Database->prepare("SELECT * FROM tl_c4g_map_baselayers WHERE id=?")->execute($layer['baselayers']);
                    $layer['entry'] = $this->parseBaseLayer($objChildLayer);
                    $layerGroup[$key] = $layer;
                }
                $arrBaseLayer['layerGroup'] = array_reverse($layerGroup);

                break;
            case 'image':
                $objFile = \FilesModel::findByUuid($objBaseLayer->image_src);
                if ($objFile && $objFile->path) {
                    $arrBaseLayer['image_src'] = $objFile->path;
                }
                break;
                case 'geoimage':
                $objFile = \FilesModel::findByUuid($objBaseLayer->image_src);
                if ($objFile && $objFile->path) {
                    $arrBaseLayer['image_src'] = $objFile->path;
                    $arrBaseLayer['geoimage_json'] = $objBaseLayer->geoimage_json;
                }
                break;
            default:
                die('This should not have happened!');
        }
        if (!empty($objBaseLayer->attribution)) {
            $arrBaseLayer['attribution'] = $objBaseLayer->attribution;
        }
        if (!empty($objBaseLayer->minzoomlevel)) {
            $arrBaseLayer['minZoom'] = $objBaseLayer->minzoomlevel;
        }
        if (!empty($objBaseLayer->maxzoomlevel)) {
            $arrBaseLayer['maxZoom'] = $objBaseLayer->maxzoomlevel;
        }
        if (!empty($objBaseLayer->sorting)) {
            $arrBaseLayer['sort'] = $objBaseLayer->sorting;
        }
        $arrBaseLayer['cesium']= $objBaseLayer->cesium;
        return $arrBaseLayer;
    }
}