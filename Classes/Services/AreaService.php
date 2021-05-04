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

namespace con4gis\MapsBundle\Classes\Services;

use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\RoutingBundle\Classes\Event\LoadAreaFeaturesEvent;
use con4gis\RoutingBundle\Entity\RoutingConfiguration;
use Contao\System;

//include_once(System::getContainer()->getParameter('kernel.project_dir')."/vendor/phayes/geophp/geoPHP.inc");

class AreaService
{
    private $eventDispatcher;

    /**
     * AreaService constructor.
     * @param $eventDispatcher
     */
    public function __construct($eventDispatcher = null)
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    public function getResponse($profileId, $layerId, $distance, $location, $profile)
    {
        $event = new LoadAreaFeaturesEvent();
        $event->setProfileId($profileId);
        $event->setLayerId($layerId);
        $event->setDistance($distance);
        $event->setLocation($location);
        $event->setProfile($profile);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $eventResponse = $event->getReturnData();
        $matrixResponse = $eventResponse[0];
        if ($matrixResponse !== '[') {
            $requestData = $eventResponse[1];
            $requestData = $requestData['elements'] ?: $requestData;
            switch ($eventResponse[2]) {
                case 1:
                    for ($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
                        if ($matrixResponse['distances'][0][$i] < $distance * 1000) {
                            $requestData[$i - 1]['distance'] = $matrixResponse['distances'][0][$i];
                            $features[] = $requestData[$i - 1];
                        }
                    }

                    break;
                case 2:
                    for ($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
                        if ($matrixResponse['distances'][0][$i] < $distance) {
                            $requestData[$i - 1]['distance'] = $matrixResponse['distances'][0][$i];
                            $features[] = $requestData[$i - 1];
                        }
                    }

                    break;
                case 3:
                    for ($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
                        if ($matrixResponse['distances'][0][$i] < $distance * 1000) {
                            $requestData[$i - 1]['distance'] = $matrixResponse['distances'][0][$i];
                            $features[] = $requestData['elements'][$i - 1];
                        }
                    }

                    break;
                case 4:
                    for ($i = 0; $i < count($matrixResponse['sources_to_targets'][0]); $i++) {
                        if ($matrixResponse['sources_to_targets'][0][$i]['distance'] < $distance) {
                            $requestData[$i]['distance'] = $matrixResponse['sources_to_targets'][0][$i]['distance'];
                            $features[] = $requestData[$i];
                        }
                    }

                    break;

            }

            return json_encode([$features, $eventResponse[3]]);
        }

        return $eventResponse;
    }

    public function performMatrix($mapsProfile, $routingProfile, $locations, $opt_options = null)
    {
        $routerConfigRepo = System::getContainer()->get('doctrine.orm.default_entity_manager')
            ->getRepository(RoutingConfiguration::class);
        $routerConfig = $routerConfigRepo->findOneBy(['id' => $mapsProfile->routerConfig]);

        if ($routerConfig instanceof  RoutingConfiguration) {
            if ($routerConfig->getRouterApiSelection() == '1') {
                return $this->performMatrixOSRM($routerConfig, $locations);
            } elseif ($routerConfig->getRouterApiSelection() == '2') {
                return $this->performMatrixORS($routerConfig, $routingProfile, $locations, $opt_options);
            } elseif ($routerConfig->getRouterApiSelection() == '3') {
                return $this->performMatrixGraphhopper($routerConfig, $routingProfile, $locations, $opt_options);
            } elseif ($routerConfig->getRouterApiSelection() == '4') {
                return $this->performMatrixValhalla($routerConfig, $routingProfile, $locations, $opt_options);
            } elseif ($routerConfig->getRouterApiSelection() == '5') {
                return $this->performMatrixCon4gisIO($routerConfig, $routingProfile, $locations, $opt_options);
            }
        }
    }

    protected function performMatrixOSRM($routerConfig, $locations, $routingProfile = 'driving', $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $matrixUrl = $routerConfig->getRouterViaRouteUrl() ? $routerConfig->getRouterViaRouteUrl() : 'http://router.project-osrm.org/';
            $matrixUrl .= 'table/v1/' . $routingProfile . '/';
            foreach ($locations as $location) {
                $matrixUrl .= $location[0] . ',' . $location[1] . ';';
            };
            $matrixUrl = substr($matrixUrl, 0, strlen($matrixUrl) - 1);
            $matrixUrl .= '?sources=0&annotations=duration,distance';
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($matrixUrl);

            return $REQUEST->response;
        }
    }

    protected function performMatrixORS($routerConfig, $routingProfile, $locations, $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $valuesProfile = ['driving-car', 'driving-hgv', 'cycling-regular', 'cycling-road', 'cycling-safe', 'cycling-mountain', 'cycling-tour', 'cycling-electric', 'foot-walking', 'foot-hiking', 'wheelchair'];
            $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'driving-car';
            $matrixUrl = $routerConfig->getRouterViaRouteUrl() ? $routerConfig->getRouterViaRouteUrl() : 'https://api.openrouteservice.org/';
            $matrixUrl .= 'v2/matrix/' . $routingProfile;
            $matrixData = [
                'locations' => $locations,
                'sources' => [0],
                'metrics' => ['distance'],
                'units' => 'km',
            ];

            $REQUEST = new \Request();
            $REQUEST->setHeader('Authorization', $routerConfig->getRouterApiKey());
            $REQUEST->setHeader('Content-Type', 'application/json');

            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->method = 'POST';

            $result = [];
            if ($matrixData) {
                $encodedData = \GuzzleHttp\json_encode($matrixData);
                $REQUEST->send($matrixUrl, $encodedData);
                if ($REQUEST->response) {
                    $result = $REQUEST->response;
                }
            }

            return $result;
        }
    }

    protected function performMatrixGraphhopper($routerConfig, $routingProfile, $locations, $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $valuesProfile = [0 => 'car', 1 => 'truck', 2 => 'bike', 3 => 'racingbike', 5 => 'mtb', 8 => 'foot', 9 => 'hike', 11 => 'small_truck', 12 => 'scooter'];
            $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'car';
            $matrixUrl = $routerConfig->getRouterViaRouteUrl() ? $routerConfig->getRouterViaRouteUrl() : 'https://graphhopper.com/api/1/';
            $matrixUrl = $matrixUrl . 'matrix?key=' . $routerConfig->getRouterApiKey();
            $startlocation = [$locations[0]];
            array_splice($locations, 1, 1);
            $matrixData = [
                'elevation' => false,
                'vehicle' => $routingProfile,
                'from_points' => $startlocation,
                'to_points' => $locations,
                'out_arrays' => ['distances'],
            ];
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->setHeader('Content-Type', 'application/json');
            $REQUEST->method = 'POST';
            $result = [];
            if ($matrixData) {
                $encodedData = \GuzzleHttp\json_encode($matrixData);
                $REQUEST->send($matrixUrl, $encodedData);
                if ($REQUEST->response) {
                    $result = $REQUEST->response;
                }
            }

            return $result;
        }
    }
    protected function performMatrixCon4gisIO($routerConfig, $routingProfile, $locations, $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $objSettings = C4gMapSettingsModel::findOnly();
            $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 3, 5);
            if (!substr_count('ca-ES, cs-CZ, de-DE, en-US, es-ES, fr-FR	, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                $language = $GLOBALS['TL_LANGUAGE'];
                if (!substr_count('ca-ES, cs-CZ, de-DE, en-US,C, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                    $language = 'en-US';
                }
            }

            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->setHeader('Content-Type', 'application/x-www-form-urlencoded');
            $sendUrl = rtrim($objSettings->con4gisIoUrl, '/') . '/' . 'matrix.php?&language=' . $language . '&profile=auto&key=' . $objSettings->con4gisIoKey;
            $REQUEST->method = 'POST';

            $encLocs = 'locations=' . json_encode($locations);
            $REQUEST->send($sendUrl, $encLocs);
            $response = $REQUEST->response;

            return $response;
        }
    }
    protected function performMatrixValhalla($routerConfig, $routingProfile, $locations, $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $matrixUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : 'https://api.mapbox.com/valhalla/v1/';
            $matrixUrl .= 'sources_to_targets';
            $matrixUrl .= $routerConfig->getRouterApiKey() ? '?access_token=' . $routerConfig->getRouterApiKey() : '';

            $latLonLocations = [];
            foreach ($locations as $location) {
                $latLonLocations[] = [
                    'lon' => $location[0],
                    'lat' => $location[1],
                ];
            }

            $startlocation = [$latLonLocations[0]];
            array_splice($latLonLocations, 0, 1);
            $matrixData = [
                'sources' => $startlocation,
                'targets' => $latLonLocations,
                'costing' => 'auto',
            ];

            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->setHeader('Content-Type', 'application/json');
            $REQUEST->method = 'POST';
            $result = [];
            if ($matrixData) {
                $encodedData = \GuzzleHttp\json_encode($matrixData);
                $REQUEST->send($matrixUrl, $encodedData);
                if ($REQUEST->response) {
                    $result = $REQUEST->response;
                }
            }

            return $result;
        }
    }
}
