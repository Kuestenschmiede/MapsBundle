<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version    7
 * @author  	con4gis contributors (see "authors.txt")
 * @license 	LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link        https://www.con4gis.org
 *
 */

namespace con4gis\MapsBundle\Classes\Services;

use con4gis\MapsBundle\Classes\Utils;
use con4gis\MapsBundle\Resources\contao\models\C4gMapLocstylesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentDataApi;
use Contao\Controller;

class LayerContentService
{
    /**
     * @var InfoWindowApi
     */
    private $infoWindowApi = null;

    /**
     * @var ProfileService
     */
    private $profileService = null;

    /**
     * @var array
     */
    private $resolvedLinks = [];

    /**
     * LayerContentService constructor.
     * @param ProfileService $profileService
     */
    public function __construct(ProfileService $profileService)
    {
        // ToDo infoWindowService
        $this->infoWindowApi = new InfoWindowApi();
        $this->profileService = $profileService;
    }

    /**
     * Returns the layer data.
     * @param $intId
     * @param bool $secondFetch
     * @return array
     */
    public function getLayerData($intId, $secondFetch = false, $lang = 'de')
    {
        // Find the requested layer
        $objLayer = C4gMapsModel::findById($intId);

        // TODO: Check force-nodes for more structure elements

        // TODO: Apply additional filter logic
        // Hidden layers or layers that only represent maps should not return.

        // Only return map entries
        if ($objLayer == null) {
            // \HttpResultHelper::NotFound();
            return [];
        }

        $objProfile = $objLayer->getRelated('profile');
        $profileId = $this->profileService->getProfileId($objProfile->id);
        $objProfile = C4gMapProfilesModel::findByPk($profileId);

        $arrReturnData = [];
        switch ($objLayer->location_type) {
            case 'geojson':
                $arrReturnData[] = $this->getGeoJSONLayerContent($objLayer, $lang);

                break;
            case 'single':
                $arrReturnData[] = $this->getSingleLayerContent($objLayer, $lang);

                break;
            case 'overpass':
                $arrReturnData[] = $this->getOverpassLayerContent($objLayer, $objProfile, $lang);

                break;
            case 'gpx':
                $arrReturnData[] = $this->getGPXLayerContent($objLayer, $lang);

                break;
            case 'kml':
                $arrReturnData[] = $this->getKMLLayerContent($objLayer, $lang);

                break;
            case 'osm':
                $arrReturnData[] = $this->getOSMLayerContent($objLayer, $lang);

                break;
            case 'c4gForum':
                return $this->createC4gForumResult($objLayer, $secondFetch);

                break;
            case 'table':
                return $this->getTableLayerContent($objLayer, $lang);

                break;
            case 'link':
                $linkContent = $this->createLayerFromLink($objLayer);

                return $linkContent ? $linkContent : [];

                break;
            default:
                return [];
        }
        // unset popup if not set in layer TODO prüfen und ausbauen
        if ($objLayer->enablePopup == '') {
            if (isset($arrReturnData[0]['data']['popup']) && is_array($arrReturnData[0]['data']['popup'])) {
                foreach ($arrReturnData[0]['data']['popup'] as $key => $value) {
                    unset($arrReturnData[0]['data']['popup'][$key]);
                }
            } elseif (isset($arrReturnData[0]['data']['properties']['popup']) && is_array($arrReturnData[0]['data']['properties']['popup'])) {
                foreach ($arrReturnData[0]['data']['properties']['popup'] as $key => $value) {
                    unset($arrReturnData[0]['data']['properties']['popup'][$key]);
                }
            }
        }

        return $arrReturnData;
    }

    private function getGeoJSONLayerContent($objLayer, $lang)
    {
        $arrGeoJsonData = $this->createGeoJsonResult($objLayer, 'tl_c4g_maps');
        if ($arrGeoJsonData) {
            $strGeoJsonData = Utils::replaceInsertTags(\GuzzleHttp\json_encode($arrGeoJsonData) ?: '', $lang);
        }
        if ($strGeoJsonData) {
            $arrGeoJsonData = \GuzzleHttp\json_decode($strGeoJsonData, true);
        }

        return [
            'id' => $objLayer->id,
            'type' => 'GeoJSON',
            'format' => 'GeoJSON',
            'origType' => 'geojson',
            'locationStyle' => $objLayer->locstyle,
            'data' => $arrGeoJsonData,
            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
            'hover_location' => $objLayer->hover_location,
            'hover_style' => $objLayer->hover_style,
        ];
    }

    private function getSingleLayerContent($objLayer, $lang)
    {
        return [
            'id' => $objLayer->id,
            'type' => 'GeoJSON',
            'format' => 'GeoJSON',
            'origType' => 'single',
            'locationStyle' => $objLayer->locstyle,
            'data' => $this->createGeoJsonResult($objLayer, 'tl_c4g_maps', $lang),
            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
            'hover_location' => $objLayer->hover_location,
            'hover_style' => $objLayer->hover_style,
        ];
    }

    private function getOverpassLayerContent($objLayer, $objProfile, $lang)
    {
        $objSettings = C4gMapSettingsModel::findOnly();
        if ($objProfile->overpassEngine == '2') {
            $url = rtrim($objSettings->con4gisIoUrl, '/') . '/' . 'osm.php?key={key}';
        } elseif ($objProfile->overpassEngine == '1') {
            $url = $objProfile->overpass_url;
        } elseif ($objProfile->overpassEngine == '3') {
            $url = 'https://overpass-api.de/api/interpreter';
        } elseif ($objProfile->overpass_url) { // @Todo
            $url = $objProfile->overpass_url;
        } else {
            $url = '';
        }

        //simple option to active clustering on every element
        if (!$objLayer->cluster_locations && $objProfile->cluster_all) {
            $objLayer->cluster_locations = true;
            $objLayer->cluster_fillcolor = $objProfile->cluster_fillcolor;
            $objLayer->cluster_fontcolor = $objProfile->cluster_fontcolor;
            $objLayer->cluster_zoom = $objProfile->cluster_zoom;
            $objLayer->cluster_popup = $objProfile->cluster_popup;
            $objLayer->cluster_distance = $objProfile->cluster_distance;
        }

        return [
            'id' => $objLayer->id,
            'type' => 'urlData',
            'format' => 'OSMXML',
            'origType' => 'overpass',
            'locationStyle' => $objLayer->locstyle,
            'cluster_fillcolor' => $objLayer->cluster_fillcolor,
            'cluster_fontcolor' => $objLayer->cluster_fontcolor,
            'cluster_zoom' => $objLayer->cluster_zoom,
            'cluster_popup' => $objLayer->cluster_popup,
            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
            'hover_location' => $objLayer->hover_location,
            'hover_style' => $objLayer->hover_style,
            'data' => [
                'url' => $url,
                'params' => rawurlencode($objLayer->ovp_request),
                'popup' => $this->infoWindowApi->getPopupConfiguration('tl_c4g_maps', $objLayer->id, $objLayer),/*array(
                            "content" => "tl_c4g_maps" . ":" . $objLayer->id
                        )*/
                'tooltip' => $objLayer->tooltip,
                'tooltip_length' => $objLayer->tooltip_length,
                'label' => $objLayer->loc_label,
                'zoom_onclick' => $objLayer->loc_onclick_zoomto,
            ],
            'settings' => [
                'loadAsync' => true,
                'refresh' => false,
                'crossOrigine' => false,
                'cluster' => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                'boundingBox' => $objLayer->ovp_bbox_limited ? '(bbox)': false,
                'forceNodes' => $objLayer->data_forcenodes ? true : false,
                'showAdditionalGeometries' => $objLayer->data_additionalgeometries,
            ],
        ];
    }

    private function getGPXLayerContent($objLayer, $lang)
    {
        $arrReturnData = [
            'id' => $objLayer->id,
            'type' => 'urlData',
            'format' => 'GPX',
            'origType' => 'gpx',
            'locationStyle' => $objLayer->locstyle,
            'cluster_fillcolor' => $objLayer->cluster_fillcolor,
            'cluster_fontcolor' => $objLayer->cluster_fontcolor,
            'cluster_zoom' => $objLayer->cluster_zoom,
            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
            'hover_location' => $objLayer->hover_location,
            'hover_style' => $objLayer->hover_style,
            'data' => [
                'popup' => [
                    'async' => $objLayer->popup_async,
                ],
                'tooltip' => $objLayer->tooltip,
                'tooltip_length' => $objLayer->tooltip_length,
                'label' => $objLayer->loc_label,
                'zoom_onclick' => $objLayer->loc_onclick_zoomto,
                'url' => $this->getUrl($objLayer),
            ],
            'settings' => [
                'loadAsync' => true,
                'refresh' => false,
                'crossOrigine' => false,
                'boundingBox' => false,
                'cluster' => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
            ],
        ];
        if ($arrReturnData['data']['popup']['async'] == 1) {
            $arrReturnData['data']['popup']['async'] = true;
            $arrReturnData['data']['popup']['content'] = 'tl_c4g_maps' . ':' . $objLayer->id;
        } else {
            $arrReturnData['data']['popup']['async'] = false;
            $arrReturnData['data']['popup']['content'] = Utils::replaceInsertTags($objLayer->popup_info ?: '', $lang);
            $arrReturnData['data']['popup']['routing_link'] = $objLayer->routing_to;
            $arrReturnData['data']['popup']['showPopupOnActive'] = $objLayer->showPopupOnActive;
        }

        return $arrReturnData;
    }

    private function getKMLLayerContent($objLayer, $lang)
    {
        $arrReturnData = [
            'id' => $objLayer->id,
            'type' => 'urlData',
            'format' => 'KML',
            'origType' => 'kml',
            'locationStyle' => $objLayer->locstyle,
            'cluster_fillcolor' => $objLayer->cluster_fillcolor,
            'cluster_fontcolor' => $objLayer->cluster_fontcolor,
            'cluster_zoom' => $objLayer->cluster_zoom,
            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
            'hover_location' => $objLayer->hover_location,
            'hover_style' => $objLayer->hover_style,
            'data' => [
                'popup' => [
                    'async' => $objLayer->popup_async,
                ],
                'tooltip' => $objLayer->tooltip,
                'tooltip_length' => $objLayer->tooltip_length,
                'label' => $objLayer->loc_label,
                'zoom_onclick' => $objLayer->loc_onclick_zoomto,
                'url' => $this->getUrl($objLayer),
            ],
            'settings' => [
                'loadAsync' => true,
                'refresh' => false,
                'crossOrigine' => false,
                'boundingBox' => false,
                'cluster' => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
            ],
        ];
        if ($arrReturnData['data']['popup']['async'] == 1) {
            $arrReturnData['data']['popup']['async'] = true;
            $arrReturnData['data']['popup']['content'] = 'tl_c4g_maps' . ':' . $objLayer->id;
        } else {
            $arrReturnData['data']['popup']['async'] = false;
            $arrReturnData['data']['popup']['content'] = $objLayer->popup_info;
            $arrReturnData['data']['popup']['routing_link'] = $objLayer->routing_to;
            $arrReturnData['data']['popup']['showPopupOnActive'] = $objLayer->showPopupOnActive;
        }

        return $arrReturnData;
    }

    private function getOSMLayerContent($objLayer, $lang)
    {
        return [
            'id' => $objLayer->id,
            'type' => 'urlData',
            'format' => 'OSMXML',
            'origType' => 'osm',
            'locationStyle' => $objLayer->locstyle,
            'cluster_fillcolor' => $objLayer->cluster_fillcolor,
            'cluster_fontcolor' => $objLayer->cluster_fontcolor,
            'cluster_zoom' => $objLayer->cluster_zoom,
            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
            'hover_location' => $objLayer->hover_location,
            'hover_style' => $objLayer->hover_style,
            'data' => [
                'url' => $this->getUrl($objLayer),
                'popup' => [
                    'content' => 'tl_c4g_maps' . ':' . $objLayer->id,
                ],
                'tooltip' => $objLayer->tooltip,
                'tooltip_length' => $objLayer->tooltip_length,
                'label' => $objLayer->loc_label,
                'zoom_onclick' => $objLayer->loc_onclick_zoomto,
            ],
            'settings' => [
                'loadAsync' => true,
                'refresh' => false,
                'crossOrigine' => false,
                'boundingBox' => false,
                'cluster' => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,

            ],
        ];
    }

    private function getTableLayerContent($objLayer, $lang)
    {
        $arrReturnData = [];
        $pidOption = '';
        $whereClause = '';
        $qWhere = '';
        $addBeWhereClause = '';
        $and = '';
        $objConfig = C4gMapTablesModel::findByPk($objLayer->tab_source);
        $sourceTable = $objConfig->tableSource;
        $ptableArr = unserialize($objConfig->ptable);
        $ptableFieldArr = unserialize($objConfig->ptableField);
        $ptableCompareFieldArr = unserialize($objConfig->ptableCompareField);
        $ptableBlobArr = unserialize($objConfig->ptableBlob);

        $connectionParams = $objConfig->customDB ?[
            'dbDatabase' => $objConfig->customDB,
        ] : [];
        // for non-utf8 charsets
        $connectionParams['dbCharset'] = 'utf8mb4';

        //check parent values
        if ($ptableArr && $ptableFieldArr && $ptableCompareFieldArr) {
            foreach ($ptableArr as $key => $ptable) {
                $qWhere .= ' WHERE ';
                if ($key == 0) {
                    $sourcePid = intval($objLayer->tab_pid);
                } else {
                    $and = ' AND ';
                    $fieldName = 'tab_pid' . intval($key);
                    $sourcePid = intval($objLayer->$fieldName);
                }
                $ptablefield = $ptableFieldArr[$key];
                $ptableCompareField = str_replace($ptable . '.', '', $ptableCompareFieldArr[$key]);

                //if there is a compare Field instead of the id field (parent table) we have change the parent id
                if ($ptable && $sourcePid && $ptableCompareField && ($ptableCompareField != 'id')) {
                    $query = "SELECT * FROM `$ptable` WHERE id = $sourcePid";
                    $result = \Database::getInstance($connectionParams)->prepare($query)->limit(1)->execute();
                    $sourcePid = intval($result->$ptableCompareField);
                }

                if ($sourcePid || $sourcePid == 0) {
                    if ($objConfig->ptableField) {
                        if ($ptableBlobArr && $ptableBlobArr[$key] == 1) {
                            //ToDo filter after select
                        } else {
                            $pidOption .= $and . "$ptablefield = $sourcePid ";
                        }
                    } else {
                        $pidOption .= "`pid` = '$sourcePid'  ";
                    }
                }
            }
        }
        if ($objLayer->tab_whereclause) {
            $addBeWhereClause = ' WHERE ' . $objLayer->tab_whereclause;
        }
        $stmt = '';

        if ($objLayer->tab_filter_alias) {
            //$alias = $this->getInput()->get($objConfig['alias_getparam']);
            $alias = $_SERVER['HTTP_REFERER'];
            $strC = substr_count($alias, '/');
            $arrUrl = explode('/', $alias);
            $alias = explode('.', $arrUrl[$strC])[0];
            if ($alias && ($sourceTable != 'tl_content')) {
                if ($qWhere) {
                    $stmt = ' AND';
                } else {
                    $stmt = ' WHERE';
                }
                if (is_numeric($alias)) {
                    $stmt .= ' (( alias = "' . $alias . '" ) OR ( id = ' . $alias . ' ))';
                } else {
                    $stmt .= ' (alias = "' . $alias . '")';
                }
            } elseif ($alias && ($sourceTable == 'tl_content')) {
                $query = "SELECT * FROM `$ptableArr[0]` WHERE alias = ?";
                $result = \Database::getInstance($connectionParams)->prepare($query)->limit(1)->execute(strval($alias));
                $sourcePid = intval($result->id);

                if ($sourcePid) {
                    if ($qWhere) {
                        $stmt = ' AND';
                    } else {
                        $stmt = ' WHERE';
                    }
                    $stmt .= ' (pid = "' . $sourcePid . '")';
                }
            }
        }
        if ($sourceTable) {
            $queryCount = "SELECT COUNT(*) AS count FROM `$sourceTable`" . $qWhere . $pidOption . $and . $whereClause . $addBeWhereClause . $stmt;
            $resultCount = \Database::getInstance($connectionParams)->prepare($queryCount)->execute()->fetchAssoc()['count'];

            if ($resultCount < 45000) {
                $query = "SELECT * FROM `$sourceTable`" . $qWhere . $pidOption . $and . $whereClause . $addBeWhereClause . $stmt;
                $result = \Database::getInstance($connectionParams)->prepare($query)->execute();
            }
            //ToDo ???
        }

        $geox = $objConfig->geox;
        $geoy = $objConfig->geoy;
        $geoxField = $geox;
        $geoyField = $geoy;
        $customProj = $objConfig->projName;
        $projCode = $objConfig->projCode;
        $geolocation = '';
        if (!$geox && !$geoy) {
            $geolocation = $objConfig->geolocation;
        }
        $tooltipField = $objConfig->tooltip;
        $labelField = $objConfig->label;
        $locstyleField = $objConfig->locstyle;

        if (!$result) {
            // TODO test
            return [];
        }

        //load dataset
        while ($arrResult = $result->fetchAssoc()) {
            $show = 0;
            $blobCount = 0;

            //set locstyle
            $locstyle = mb_convert_encoding($arrResult[$locstyleField], 'UTF-8', mb_detect_encoding($arrResult[$locstyleField]));
            if (!$locstyle) {
                $locstyle = $objLayer->locstyle;
            }
            $tooltip = mb_convert_encoding($arrResult[$tooltipField], 'UTF-8', mb_detect_encoding($arrResult[$tooltipField]));
            $label = mb_convert_encoding($arrResult[$labelField], 'UTF-8', mb_detect_encoding($arrResult[$labelField]));

            //check blob fields
            if ($objConfig->ptable) {
                foreach ($ptableArr as $key => $ptable) {
                    $ptableBlobArr = unserialize($objConfig->ptable_blob);
                    if ($ptableBlobArr && $ptableBlobArr[$key] == 1) {
                        if ($key == 0) {
                            $sourcePid = intval($objLayer->tab_pid);
                        } else {
                            $fieldName = 'tab_pid' . intval($key);
                            $sourcePid = intval($objLayer->$fieldName);
                        }

                        if ($sourcePid) {
                            $blobCount++;
                        }

                        $ptablefield = $ptableFieldArr[$key];
                        $ptableCompareField = $ptableCompareFieldArr[$key];
                        $blobfield = mb_convert_encoding($arrResult[$ptablefield], 'UTF-8', mb_detect_encoding($arrResult[$ptablefield]));

                        if ($blobfield && $sourcePid && $ptableCompareField && ($ptableCompareField != 'id')) {
                            $query2 = "SELECT * FROM `$ptable` WHERE id = $sourcePid";
                            $result2 = \Database::getInstance($connectionParams)->prepare($query2)->limit(1)->execute();
                            $sourcePid = intval($result2->$ptableCompareField);
                        }

                        if ($sourcePid && $blobfield) {
                            $blobArr = unserialize($blobfield);
                            if (in_array($sourcePid, $blobArr)) {
                                $show++;
                            }
                        }
                    }
                }
            }

            $popupContent = '';
            if (($show == $blobCount) && (($arrResult[$geoxField] && $arrResult[$geoyField]) || ($geolocation && $arrResult[$geolocation]))) {
                // replace popup stuff
                if ($objConfig->dataType == 1) {
                    $geox = $arrResult[$geoxField];
                    $geoy = $arrResult[$geoyField];
                    $coordinates = [
                        floatval($geox),
                        floatval($geoy), ];
                    $geometry = [
                        'type' => 'Point',
                        'coordinates' => $coordinates,
                    ];
                } elseif ($arrResult[$geolocation] && $objConfig->dataType == 2) {
                    $geox = substr($arrResult[$geolocation], strpos($arrResult[$geolocation], ',') + 1);
                    $geoy = substr($arrResult[$geolocation], 0, strpos($arrResult[$geolocation], ','));
                    $coordinates = [floatval($geox), floatval($geoy)];
                    $geometry = [
                        'type' => 'Point',
                        'coordinates' => $coordinates,
                    ];
                } elseif ($arrResult[$geolocation] && $objConfig->dataType == 3) { //WKT
                    $geometry = \geoPHP::load($arrResult[$geolocation], 'wkt');
                    $geometry = json_decode($geometry->out('json'), true);
                } elseif ($arrResult[$geolocation] && $objConfig->dataType == 4) { //WKB
                    $geometry = \geoPHP::load($arrResult[$geolocation], false);
                    $geometry = json_decode($geometry->out('json'), true);
                } else {
                    print_r('I want it that way');
                }
                if ($objConfig->linkurl && !$objConfig->popup) {
                    $link = $objConfig->linkurl;
                    $link = str_replace('[id]', $result->id, $link);
                    $matches = [];
                    if (preg_match('/\[[a-z]+\]/', $link, $matches)) {
                        foreach ($matches as $key => $value) {
                            $replacedValue = str_replace('[', '', $value);
                            $replacedValue = str_replace(']', '', $replacedValue);
                            if ($arrResult[$replacedValue]) {
                                $replacedValue = $arrResult[$replacedValue];
                            }
                            $matches[$key] = $replacedValue;
                        }
                        $link = preg_replace(['/\[[a-z]+\]/'], $matches, $link);
                    }
                    $link = Utils::replaceInsertTags($link ?: '', $lang);
                    if (substr($link, 0, 1) == '(' && substr($link, -1, 1) == ')') {
                        $link = substr($link, 1);
                        $link = substr($link, 0, -1);
                    }
                } else {
                    $link = $objLayer->loc_linkurl;
                }

                //ToDo check content
                $event = false;
                if ($objLayer->cluster_popup == 1) {
                    for ($i = 0; $i < count($arrReturnData); $i++) {
                        set_time_limit(60);
                        if ($arrReturnData[$i]['data']['geometry']['coordinates'] == $coordinates) {
                            if (substr($arrReturnData[$i]['data']['properties']['popup']['content'], 0, 3) != '<ul') {
                                $arrReturnData[$i]['data']['properties']['popup']['content'] = '<ul><li>' . $arrReturnData[$i]['data']['properties']['popup']['content'] . '</li>';
                            }
                            if (substr($arrReturnData[$i]['data']['properties']['popup']['content'], -4) == 'ul>') {
                                $arrReturnData[$i]['data']['properties']['popup']['content'] = str_replace('</ul>', '', $arrReturnData[$i]['data']['properties']['popup']['content']);
                            }
                            $arrReturnData[$i]['data']['properties']['popup']['content'] .= $popupContent . '</li></ul>';

                            if ($arrReturnData[$i]['data']['properties']['tooltip']) {
                                $arrReturnData[$i]['data']['properties']['tooltip'] .= ', ' . Utils::replaceInsertTags($tooltip ?: '', $lang);
                            } else {
                                $arrReturnData[$i]['data']['properties']['tooltip'] .= Utils::replaceInsertTags($tooltip ?: '', $lang);
                            }
                            $event = true;
                        }
                    }
                }

                //set event or content (tl_news) directlink
                if ($objLayer->tab_directlink && !$objLayer->loc_linkurl) {
                    $protocol = $_SERVER['PROTOCOL'] = isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) ? 'https' : 'http';
                    $host = $_SERVER['HTTP_HOST'];
                    $url = $protocol . '://' . $host;
                    if ($sourceTable == 'tl_content') {
                        if ($arrResult['pid']) {
                            if ($arrResult['ptable'] == 'tl_news') {
                                $link = $url . '/{{news_url::' . $arrResult['pid'] . '}}';
                            } elseif ($arrResult['ptable'] == 'tl_article') {
                                $link = $url . '/{{article_url::' . $arrResult['pid'] . '}}';
                            }
                        }
                    } elseif ($sourceTable == 'tl_event') {
                        if ($arrResult['id']) {
                            $link = $url . '/{{event_url::' . $arrResult['id'] . '}}';
                        }
                    }
                }

                if (!$event) {
                    if ($sourceTable == 'tl_content') {
                        $popupContent = Controller::getContentElement($arrResult['id']) ? Utils::replaceInsertTags(Controller::getContentElement($arrResult['id']) ?: '', $lang) : $popupContent;
                        $popupContent = str_replace('TL_FILES_URL', '', $popupContent);
                    }

                    if ($tooltipField) {
                        $ttfArr = unserialize($tooltip);
                        if (is_array($ttfArr)) {
                            $tooltip = $ttfArr['value'];
                        }
                    }
                    if ($objConfig->popupSwitch === 'expert') {
                        // process expert popup
                        $lcdApi = new LayerContentDataApi();
                        $popup = $lcdApi->getPopup($objConfig, $arrResult);
                    } elseif ($objConfig->popupSwitch !== 'off') {
                        $popup = [
                            'async' => false,
                            'content' => $popupContent,
                            'routing_link' => $objLayer->routing_to,
                        ];
                    } else {
                        $popup = false;
                    }

                    $arrReturnDataSet = [
                        'id' => $arrResult['id'],
                        'type' => 'GeoJSON',
                        'format' => 'GeoJSON',
                        'origType' => 'table',
                        'locationStyle' => $locstyle,
                        'cluster_fillcolor' => $objLayer->cluster_fillcolor,
                        'cluster_fontcolor' => $objLayer->cluster_fontcolor,
                        'cluster_zoom' => $objLayer->cluster_zoom,
                        'cluster_popup' => $objLayer->cluster_popup,
                        'hover_location' => $objLayer->hover_location,
                        'hover_style' => $objLayer->hover_style,
                        'data' => $arrGeoJson = [
                            'type' => 'Feature',
                            'geometry' => $geometry,
                            'properties' => [
                                'projection' => $customProj ?: 'EPSG:4326',
                                'projCode' => $projCode ?: '',
                                'popup' => $popup,
                                'tooltip' => Utils::replaceInsertTags($tooltip ?: '', $lang),
                                'tooltip_length' => $objLayer->tooltip_length,
                                'label' => Utils::replaceInsertTags($label ?: '', $lang),
                                'loc_linkurl' => Utils::replaceInsertTags($link ?: '', $lang),
                                'zoom_onclick' => $objLayer->loc_onclick_zoomto,
                            ],
                        ],
                        'settings' => [
                            'loadAsync' => false,
                            'refresh' => false,
                            'crossOrigine' => false,
                            'boundingBox' => false,
                            'cluster' => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                        ],
                    ];

                    $arrReturnData[] = $arrReturnDataSet;
                }
            }
        }

        return $arrReturnData;
    }

    private function getUrl($objLayer)
    {
        $strUrl = '';
        if ($objLayer->data_url) {
            $strUrl = $objLayer->data_url;
        }
        if ($objLayer->data_file) {
            if (\Validator::isUuid($objLayer->data_file)) {
                // add ressource link
                $objFile = \FilesModel::findByUuid($objLayer->data_file);
                if ($objFile !== null) {
                    $strUrl = $objFile->path;
                }
            }
        }

        return $strUrl;
    }

    private function createC4gForumResult($objLayer, $secondFetch)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        // ToDo: evtl. in con4gis_forum auslagern
        $arrReturn = [];
        /*$arrReturn['type'] =  'c4gforum';
        $arrReturn['entries'] = array();*/
        $layers = C4gMapsModel::findAll();
        $layerNames = [];
        while ($layers->next()) {
            $layerNames[] = $layers->name;
        }
        $arrBoards = deserialize($objLayer->forums, true);
        $objBoardPosts = \Database::getInstance()->prepare(
            'SELECT tl_c4g_forum_post.*,
            tl_c4g_forum_thread.name as threadName,
            tl_c4g_forum.map_tooltip as tooltipSource
                FROM tl_c4g_forum_post
                LEFT JOIN tl_c4g_forum_thread ON tl_c4g_forum_thread.id = tl_c4g_forum_post.pid
                LEFT JOIN tl_c4g_forum ON tl_c4g_forum.id = forum_id
                    WHERE forum_id IN(' . implode(',', $arrBoards) . ')'
        )->execute();

        if ($objBoardPosts->numRows) {
            while ($objBoardPosts->next()) {
                // skip layers, when an explicit layer is requested, since the skipped layers have been reassigned already
                if ($secondFetch && in_array($objBoardPosts->threadName, $layerNames)) {
                    continue;
                }
                // check tooltip
                switch ($objBoardPosts->tooltipSource) {
                    case 'SUBJ':
                        $mapTooltip = $objBoardPosts->subject;

                        break;
                    case 'LINK':
                        $mapTooltip = $objBoardPosts->linkname;

                        break;
                    case 'CUST':
                        $mapTooltip = $objBoardPosts->loc_tooltip;

                        break;
                    case 'OFF': // fallthrough
                    default:
                        // no tootltip
                        $mapTooltip = '';

                        break;
                }

                $objAsLayer = (object) [
                    'location_type' => 'single',
                    'loc_geox' => $objBoardPosts->loc_geox,
                    'loc_geoy' => $objBoardPosts->loc_geoy,
                    'id' => $objBoardPosts->id,
                    'tooltip' => $mapTooltip,
                ];

                $arrReturn[] = [
                    'id' => 'tl_c4g_forum_post_' . $objBoardPosts->id,
                    'type' => 'GeoJSON',
                    'threadName' => $stringClass::decodeEntities($objBoardPosts->threadName),
                    'format' => 'GeoJSON',
                    'origType' => 'c4gforum:single',
                    'locationStyle' => $objBoardPosts->locstyle,
                    'data' => $this->createGeoJsonResult($objAsLayer, 'tl_c4g_forum_post'),
                ];
            }
        }

        return $arrReturn;
    }

    protected function createGeoJsonResult($objLayer, $strPopupTable = '', $lang = 'de')
    {
        $arrGeoJson = [];

        $popup_async = true;

        //ToDo check why we need the second param
        $popup_content = $strPopupTable . ':' . $objLayer->id . ':' . '';
        if (($objLayer->popupType == 'text') && !$objLayer->popup_info && $objLayer->locstyle) {
            $locstyle = C4gMapLocstylesModel::findByPk($objLayer->locstyle);
            if ($locstyle->popup_info) {
                $popup_content = Utils::replaceInsertTags($locstyle->popup_info ?: '', $lang);
                $popup_async = false;
            } else {
                $popup_content = '';
                $popup_async = false;
            }
        } elseif (!$objLayer->popup_async && $objLayer->popup_info) {
            $popup_async = false;
            $popup_content = Utils::replaceInsertTags($objLayer->popup_info ?: '', $lang);
        }

        switch ($objLayer->location_type) {
            case 'single':

                $arrGeoJson = [
                    'type' => 'Feature',
                    'geometry' => [
                        'type' => 'Point',
                        'coordinates' => [
                            floatval($objLayer->loc_geox),
                            floatval($objLayer->loc_geoy),
                        ],
                    ],
                    'properties' => [
                        'projection' => 'EPSG:4326',
                        'popup' => [
                            'async' => $popup_async,
                            'content' => $popup_content,
                            'routing_link' => $objLayer->routing_to,
                            'showPopupOnActive' => $objLayer->showPopupOnActive,
                        ],
                        'tooltip' => Utils::replaceInsertTags($objLayer->tooltip ?: '', $lang),
                        'tooltip_length' => $objLayer->tooltip_length,
                        'label' => Utils::replaceInsertTags($objLayer->loc_label ?: '', $lang),
                        'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                        'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
                        'hover_location' => $objLayer->hover_location,
                        'hover_style' => $objLayer->hover_style,
                    ],
                ];

                break;
            case 'geojson':

                // check if there is a file to load the content from
                if ($objLayer->data_file) {
                    $objFile = \FilesModel::findByUuid($objLayer->data_file);
                    $objLayer->data_file = $objFile ? (TL_ROOT . '/' . $objFile->path) : false;
                    $data = file_exists($objLayer->data_file) ? file_get_contents($objLayer->data_file) : false;
                } elseif ($objLayer->data_url) {
                    $REQUEST = new \Request();
                    if ($_SERVER['HTTP_REFERER']) {
                        $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
                    }
                    if ($_SERVER['HTTP_USER_AGENT']) {
                        $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
                    }
                    $REQUEST->send($objLayer->data_url);

                    $data = $REQUEST->response;
                }

                // use data_content if other method failed
                $data = $data ?: $objLayer->data_content;

                // check projection
                switch ($objLayer->data_projection) {
                    case 'MERC':
                        $projection = 'EPSG:3857';

                        break;

                    case 'WGS84':
                    default:
                        $projection = 'EPSG:4326';

                        break;
                }

                $arrGeoJson = [];
                if ($data && (strpos($data, 'Feature') !== false)) {
                    $arrGeoJson = json_decode($data, true);
                    $arrGeoJson['properties'] = [
                        'popup' => [
                            'async' => $popup_async,
                            'content' => $popup_content,
                            'routing_link' => $objLayer->routing_to,
                        ],
                        'projection' => $projection,
                        'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                        'tooltip' => Utils::replaceInsertTags($objLayer->tooltip ?: '', $lang),
                        'tooltip_length' => $objLayer->tooltip_length,
                        'label' => Utils::replaceInsertTags($objLayer->loc_label ?: '', $lang),
                    ];
                } elseif ($data) {
                    // OL3 needs a feature or feature-collection
                    $arrGeoJson = [
                        'type' => 'Feature',
                        'geometry' => json_decode($data),
                        'properties' => [
                            'popup' => [
                                'async' => $popup_async,
                                'content' => $popup_content,
                                'routing_link' => $objLayer->routing_to,
                            ],
                            'projection' => $projection,
                            'tooltip' => $objLayer->tooltip,
                            'label' => $objLayer->loc_label,
                            'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                            'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
                            'hover_location' => $objLayer->hover_location,
                            'hover_style' => $objLayer->hover_style,
                        ],
                    ];
                }

                break;
        }

        return $arrGeoJson;
    }

    private function createLayerFromLink($layer)
    {
        //$layer is the link to another layer
        // the id of the other layer is stored under $layer->link_id
        if (!$this->resolvedLinks[$layer->link_id]) {
            // link has not been resolved yet
            $linkedLayer = C4gMapsModel::findById($layer->link_id);
            $arrReturnData = $this->getLayerData($linkedLayer->id);
            if (!$arrReturnData['published']) {
                return false;
            }
            $this->resolvedLinks[$layer->link_id] = $arrReturnData;
        } else {
            $arrReturnData = $this->resolvedLinks[$layer->link_id];
        }

        return $arrReturnData;
    }

    /**
     * Creates the layer data for a given layer of the location_type folder.
     * @param $objLayer
     * @param bool $key
     * @param bool $folder
     * @param int $count
     * @param string $lang
     * @return array|bool
     */
    public function getFolderData($objLayer, $key = false, $folder = false, $count = 0, $lang = 'de')
    {
        if (!$folder) {
            $folder = $this->getFolder($objLayer);
        }
        if (!$key) {
            $key = $objLayer->id;
        }
        $folderPath = realpath(TL_ROOT . '/' . $folder);
        $countFiles = 2050;

        if (is_dir($folderPath)) {
            $dict = scandir($folderPath);
            unset($dict[array_search('.', $dict)], $dict[array_search('..', $dict)]);

            foreach ($dict as $value) {
//                $value = utf8_encode($value);
                $path = realpath(TL_ROOT . '/' . $folder . '/' . $value);
                if (is_dir($path)) {
                    $fileFolder = pathinfo($path);
                    $arrSubFolder = $this->getFolderContent($objLayer, $fileFolder, $key, $count);
                    $count += 1;
                    $data = $this->getFolderData($objLayer, $arrSubFolder['id'], $folder . '/' . $value, $count, $lang);
                    if ($data) {
                        $arrSubFolder['childsCount'] = count($data);
                        $arrSubFolder['childs'] = $data;
                        $arrData[] = $arrSubFolder;
                    }
                } elseif (is_file($path)) {
                    $fileData = pathinfo($path);
                    $arrFile = $this->getFileContent($objLayer, $folder, $fileData, $key, $countFiles, $lang);
                    $countFiles += 2;
                    if ($arrFile) {
                        $arrData[] = $arrFile;
                    }
                }
            }

            return $arrData;
        }

        return false;
    }

    /**
     * Parses meta information from a directory.
     * @param $objLayer
     * @param $folderInfo
     * @param $key
     * @param $count
     * @return array
     */
    private function getFolderContent($objLayer, $folderInfo, $key, $count)
    {
        $month = ['01' => 'Januar', '02', 'Frebruar', '03' => 'März', '04' => 'April', '05' => 'Mai', '06' => 'Juni', '07' => 'Juli', '08' => 'August', '09' => 'Sebtember', '10' => 'Oktober', '11' => 'November', '12' => 'Dezember'];

        $folder = [
            'id' => strval($objLayer->id . $count),
            'pid' => $key,
            'name' => utf8_encode($folderInfo['filename']),
            'hide' => $objLayer->published,
            'display' => true,
            'type' => $objLayer->location_type,
            'hasChilds' => true,
            'childsCount' => '',
            'childs' => [],
        ];

        return $folder;
    }

    /**
     * Parses gpx contents of a given file for a given layer.
     * @param $objLayer
     * @param $folder
     * @param $fileInfo
     * @param $key
     * @param $count
     * @return array|bool
     */
    private function getFileContent($objLayer, $folder, $fileInfo, $key, $count, $lang)
    {
        switch ($fileInfo['extension']) {
            case 'gpx':
                $child = [
                    'id' => strval($key . $count),
                    'pid' => $key,
                    'name' => utf8_encode($fileInfo['filename']),
                    'hide' => $objLayer->published,
                    'display' => true,
                    'type' => $fileInfo['extension'],
                    'content' => [],
                    'cssClass' => $objLayer->cssClass,
                    'childs' => [],
                ];

                $childLayerList = [
                    'id' => strval($key . $count),
                    'type' => 'urlData',
                    'format' => 'GPX',
                    'origType' => 'gpx',
                    'locationStyle' => $objLayer->locstyle,
                    'cluster_fillcolor' => $objLayer->cluster_fillcolor,
                    'cluster_fontcolor' => $objLayer->cluster_fontcolor,
                    'cluster_zoom' => $objLayer->cluster_zoom,
                    'cluster_popup' => $objLayer->cluster_popup,
                    'loc_linkurl' => Utils::replaceInsertTags($objLayer->loc_linkurl ?: '', $lang),
                    'hover_location' => $objLayer->hover_location,
                    'hover_style' => $objLayer->hover_style,
                    'data' => [
                        'popup' => [
                            'content' => utf8_encode($fileInfo['filename']),//"tl_c4g_maps" . ":" . $objLayer->id . ":",
                            'async' => false,
                        ],
                        'tooltip' => $objLayer->tooltip,
                        'tooltip_length' => $objLayer->tooltip_length,
                        'label' => $objLayer->loc_label,
                        'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                        'url' => utf8_encode($folder) . '/' . utf8_encode($fileInfo['basename']),
                    ],
                    'settings' => [
                        'loadAsync' => false,
                        'refresh' => false,
                        'crossOrigine' => false,
                        'boundingBox' => false,
                        'cluster' => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                    ],
                ];
                $child['content'][] = $childLayerList;
                //        $childs[] = $child;
                return $child;
            case 'xml':
                return false;
            case 'geojson':
                return false;
            default:
                return false;
        }
    }

    /**
     * Returns the directory path for the given layer.
     * @param $objLayer
     * @return string
     */
    private function getFolder($objLayer)
    {
        $strFolder = '';
        if ($objLayer->data_folder) {
            if (\Validator::isUuid($objLayer->data_folder)) {
                // add ressource folder
                $objFolder = \FilesModel::findByUuid($objLayer->data_folder);
                if ($objFolder !== null) {
                    $strFolder = $objFolder->path;
                }
            }
        }

        return $strFolder;
    }
}
