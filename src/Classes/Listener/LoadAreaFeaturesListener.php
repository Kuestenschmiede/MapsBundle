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

namespace con4gis\MapsBundle\Classes\Listener;

use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use con4gis\MapsBundle\Classes\Events\LoadAreaFeaturesEvent;
use con4gis\MapsBundle\Classes\LatLng;
use con4gis\MapsBundle\Classes\Services\AreaService;
use con4gis\MapsBundle\Entity\RoutingConfiguration;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Contao\Database;
use Symfony\Component\HttpClient\HttpClient;

class LoadAreaFeaturesListener
{
    private $areaService;

    /**
     * LoadAreaFeaturesListener constructor.
     * @param $areaService
     */
    public function __construct(AreaService $areaService)
    {
        $this->areaService = $areaService;
    }

    public function onLoadAreaFeaturesGetFeatures(
        LoadAreaFeaturesEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $profileId = $event->getProfileId();
        $location = $event->getLocation();
        $distance = $event->getDistance();
        $layerId = $event->getLayerId();
        $profile = $event->getProfile();
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $profileId);
        $coords = explode(',', $location);
        $point = new LatLng($coords[0], $coords[1]);
        $bounds = $point->getLatLngBounds($point, $distance);

        $objLayer = C4gMapsModel::findById($layerId);
        $routerConfigRepo = \System::getContainer()->get('doctrine.orm.default_entity_manager')
            ->getRepository(RoutingConfiguration::class);
        $routerConfig = $routerConfigRepo->findOneBy(['id' => $objMapsProfile->routerConfig]);
        if ($routerConfig instanceof RoutingConfiguration) {
            $type = $routerConfig->getRouterApiSelection();
            if ($objLayer->location_type == 'table') {
                $objConfig = C4gMapTablesModel::findByPk($objLayer->tab_source);
                $sourceTable = $objConfig->tableSource;
                $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
                $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
                if ($objConfig->geox && $objConfig->geoy) {
                    $sqlLoc = ' WHERE ' . $objConfig->geox . ' BETWEEN ' . $bounds['left']->getLng() . ' AND ' . $bounds['right']->getLng() . ' AND ' . $objConfig->geoy . ' BETWEEN ' . $bounds['lower']->getLat() . ' AND ' . $bounds['upper']->getLat();
                    $sqlSelect = $sourceTable . '.' . $objConfig->geox . ' AS geox,' . $sourceTable . '.' . $objConfig->geoy . ' AS geoy';
                } elseif ($objConfig->geolocation) {
                    $sqlLoc = ' WHERE SUBSTRING_INDEX(' . $objConfig->geolocation . ", ',', -1) BETWEEN " . $bounds['left']->getLng() . ' AND ' . $bounds['right']->getLng() . ' AND SUBSTRING_INDEX(' . $objConfig->geolocation . ",',',1) BETWEEN " . $bounds['lower']->getLat() . ' AND ' . $bounds['upper']->getLat();
                    $sqlSelect = 'SUBSTRING_INDEX(' . $objConfig->geolocation . ", ',', -1) AS geox, SUBSTRING_INDEX(" . $objConfig->geolocation . ",',',1) AS geoy";
                }

                //@ToDo ¯\_(ツ)_/¯

                $sqlSelect = $objConfig->locstyle ? $sqlSelect . ', ' . $sourceTable . '.' . $objConfig->locstyle . ' AS locstyle' : $sqlSelect;
                $sqlSelect = $objConfig->label ? $sqlSelect . ', ' . $sourceTable . '.' . $objConfig->label . ' AS label' : $sqlSelect;
                $sqlSelect = $objConfig->tooltip ? $sqlSelect . ', ' . $sourceTable . '.' . $objConfig->tooltip . ' AS tooltip' : $sqlSelect;
                $sqlWhere = $objConfig->sqlwhere ? $objConfig->sqlwhere : '';
                $sqlAnd = $sqlWhere ? ' AND ' : '';
                $strQuery = 'SELECT ' . $sourceTable . '.id,' . $sqlSelect . ' FROM ' . $sourceTable . $onClause . $sqlLoc . $sqlAnd . $sqlWhere . $andbewhereclause ;
                $pointFeatures = Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
                $responseFeatures = [];
                $locations = [];
                $locations[] = [$point->getLng(), $point->getLat()];
                foreach ($pointFeatures as $pointFeature) {
                    $pTemp = new LatLng($pointFeature['geoy'], $pointFeature['geox']);
                    if ($pTemp->getDistance($point) < $distance) {
                        $responseFeatures[] = $pointFeature;
                        $locations[] = [$pTemp->getLng(), $pTemp->getLat()];
                    }
                }

                $performMatrix = $this->areaService->performMatrix($objMapsProfile, $profile, $locations);
                if ($performMatrix) {
                    $requestData = \GuzzleHttp\json_decode($performMatrix, true);
                    $type = $requestData['responseType'] ?: $type;
                } else {
                    $requestData = [];
                }

//                $finalResponseFeatures = [];
//                for($i = 1; $i < count($requestData['distances'][0]); $i++) {
//                    if ($routerConfig->getRouterApiSelection() == "1") {
//                        if($requestData['distances'][0][$i] < $distance){
//                            $finalResponseFeatures[] = $responseFeatures[$i-1];
//                        }
//                    }
//                    else if ($routerConfig->getRouterApiSelection() == "2") {
//                        if($requestData['distances'][0][$i] < $distance){
//                            $finalResponseFeatures[] = $responseFeatures[$i-1];
//                        }
//                    }
//                    else if ($routerConfig->getRouterApiSelection() == "3") {
//                        if($requestData['distances'][0][$i] < floatval($distance)*1000){
//                            $finalResponseFeatures[] = $responseFeatures[$i-1];
//                        }
//                    }
//                }

                $event->setReturnData([$requestData, $responseFeatures, $type, 'notOverpass']);
            } elseif ($objLayer->location_type == 'overpass') {
                $url = $objMapsProfile->overpass_url ? $objMapsProfile->overpass_url : 'http://overpass-api.de/api/interpreter';
                $query = $objLayer->ovp_request;
                $strBBox = strrpos($query, '(bbox)') ? '<bbox-query s="' . $bounds['lower']->getLat() . '" n="' . $bounds['upper']->getLat() . '" w="' . $bounds['left']->getLng() . '" e="' . $bounds['lower']->getLng() . '"/>'
                    : $bounds['lower']->getLat() . ',' . $bounds['left']->getLng() . ',' . $bounds['upper']->getLat() . ',' . $bounds['right']->getLng();
                $strSearch = strrpos($query, '(bbox)') ? '(bbox)' : '{{bbox}}';
                $query = str_replace($strSearch, $strBBox, $query);
                $client = HttpClient::create();
                $headers = [];
                if ($_SERVER['HTTP_REFERER']) {
                    $headers['Referer'] = $_SERVER['HTTP_REFERER'];
                }
                if ($_SERVER['HTTP_USER_AGENT']) {
                    $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
                }
                if (!strpos($query, 'json')) {
                    $event->setReturnData([]);

                    return null;
                }
                $request = $client->request('GET', $url, [
                    'headers'   => $headers,
                    'body'     => $query
                ]);
                //ToDo check response
                $response = $request->getContent();
                if ($response) {
                    $requestData = \GuzzleHttp\json_decode($response, true);
                    $locations = [];
                    $locations[] = [floatval($point->getLng()), floatval($point->getLat())];
                    foreach ($requestData['elements'] as $element) {
                        if ($element['tags']) {
                            if ($element['type'] === 'node') {
                                $locations[] = [floatval($element['lon']),floatval($element['lat'])];
                            } elseif ($element['type'] === 'way') {
                                $centerLon = 0;
                                $centerLat = 0;
                                $counter = 0;
                                foreach ($element['nodes'] as $nodeId) {
                                    $node = $requestData['elements'][array_search($nodeId, array_Column($requestData['elements'], 'id'))];
                                    $centerLat += floatval($node['lat']);
                                    $centerLon += floatval($node['lon']);
                                    $counter++;
                                }
                                $locations[] = [$centerLon / $counter, $centerLat / $counter];
                            } elseif ($element['type'] === 'relation') {
                                $centerLon = 0;
                                $centerLat = 0;
                                $counter = 0;
                                foreach ($element['members'] as $memberId) {
                                    $member = $requestData['elements'][array_search($memberId['ref'], array_Column($requestData['elements'], 'id'))];
                                    if ($member['type'] === 'node') {
                                        $centerLon += floatval($element['lon']);
                                        $centerLat += floatval($element['lat']);
                                    } elseif ($member['type'] === 'way') {
                                        $centerWayLon = 0;
                                        $centerWayLat = 0;
                                        $counterWay = 0;
                                        foreach ($member['nodes'] as $nodeId) {
                                            $node = $requestData['elements'][array_search($nodeId, array_Column($requestData['elements'], 'id'))];
                                            $centerWayLat += floatval($node['lat']);
                                            $centerWayLon += floatval($node['lon']);
                                            $counterWay++;
                                        }
                                        $centerLon += $centerWayLon / $counterWay;
                                        $centerLat += $centerWayLat / $counterWay;
                                    }
                                    $counter++;
                                }
                                $locations[] = [$centerLon / $counter, $centerLat / $counter];
                            }
                        }
                    }
                    //ToDo check performMatrix result
                    $matrixResponse = \GuzzleHttp\json_decode($this->areaService->performMatrix($objMapsProfile, $profile, $locations), true);
                    $features = $requestData;
                    $features['elements'] = [];
                    $type = $matrixResponse['responseType'] ? $matrixResponse['responseType'] : $routerConfig->getRouterApiSelection();
                    switch ($type) {
                        case 1:
                        case 3:
                            for ($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
                                if ($matrixResponse['distances'][0][$i] < $distance * 1000) {
                                    $requestData['elements'][$i - 1]['distance'] = $matrixResponse['distances'][0][$i];
                                    $features['elements'][] = $requestData['elements'][$i - 1];
                                }
                            }

                            break;
                        case 2:
                            for ($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
                                if ($matrixResponse['distances'][0][$i] < $distance) {
                                    $requestData['elements'][$i - 1]['distance'] = $matrixResponse['distances'][0][$i];
                                    $features['elements'][] = $requestData['elements'][$i - 1];
                                }
                            }

                            break;

//                            for($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
//                                if ($matrixResponse['distances'][0][$i] < $distance * 1000) {
//                                    $requestData['elements'][$i-1]['distance'] = $matrixResponse['distances'][0][$i];
//                                    $features['elements'][] = $requestData['elements'][$i-1];
//                                }
//                            }
                            break;
                        case 4:
                            for ($i = 1; $i < count($matrixResponse['sources_to_targets'][0]); $i++) {
                                if ($matrixResponse['sources_to_targets'][0][$i]['distance'] < $distance) {
                                    $requestData['elements'][$i - 1]['distance'] = $matrixResponse['sources_to_targets'][0][$i]['distance'];
                                    $features['elements'][] = $requestData['elements'][$i - 1];
                                    if ($requestData['elements'][$i - 1]['type'] === 'way') {
                                        foreach ($requestData['elements'][$i - 1]['nodes'] as $nodeId) {
                                            $node = $requestData['elements'][array_search($nodeId, array_Column($requestData['elements'], 'id'))];
                                            $features['elements'][] = $node;
                                        }
                                    } elseif ($requestData['elements'][$i - 1]['type'] === 'relation') {
                                        foreach ($requestData['elements'][$i - 1]['members'] as $memberId) {
                                            $member = $requestData['elements'][array_search($memberId['ref'], array_Column($requestData['elements'], 'id'))];
                                            $features['elements'][] = $member;
                                            if ($member['type'] === 'way') {
                                                foreach ($member['nodes'] as $nodeId) {
                                                    $node = $requestData['elements'][array_search($nodeId, array_Column($requestData['elements'], 'id'))];
                                                    $features['elements'][] = $node;
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            break;
                    }
                    $event->setReturnData(\GuzzleHttp\json_encode([$features,'overpass']));
                } else {
                    $event->setReturnData([]);
                }
            }
        }
    }
}
