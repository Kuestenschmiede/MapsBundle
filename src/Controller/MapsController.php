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
namespace con4gis\MapsBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Events\LoadInfoWindowEvent;
use con4gis\MapsBundle\Classes\Events\PerformSearchEvent;
use con4gis\MapsBundle\Classes\GeoPicker;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi;
use con4gis\MapsBundle\Resources\contao\modules\api\SearchApi;
use con4gis\MapsBundle\Resources\contao\modules\api\ReverseSearchApi;
use Contao\CoreBundle\Framework\ContaoFramework;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MapsController extends BaseController
{
    protected $cacheInstance;
    
    /**
     * MapsController constructor.
     */
    public function __construct(
        ContainerInterface $container,
        ContaoFramework $framework
    ) {
        parent::__construct($container);
        $framework->initialize(true);
    }
    
    protected function initialize($withEntityManager = true)
    {
        parent::initialize(false);
    }

    public function infoWindowAction(Request $request, $popupString)
    {
        $this->initialize(false);
        $response = new JsonResponse();
        if (strpos($popupString, ":") === false) {
            $response->setStatusCode(400);
            return $response;
        } else {
            $this->checkForCacheSettings('infoWindowService');
            if (self::$useCache) {
                $this->checkAndStoreCachedData($request);
            }
            if (!self::$outputFromCache) {
                $infoWindowApi = new InfoWindowApi();
                $this->responseData = $infoWindowApi->generate($popupString);

                $event = new LoadInfoWindowEvent();
                $event->setPopupString($popupString);
                $event->setPopup($this->responseData);
                $scope = $request->get("scope");
                if ($scope) {
                    $event->setScope($scope);
                }
                $this->eventDispatcher->dispatch($event, $event::NAME);
                $this->responseData = $event->getPopup();
                if (self::$useCache) {
                    $this->storeDataInCache($request);
                }
            }
            $response->setData($this->responseData);

            return $response;
        }
    }
    public function wfsAction(Request $request, $id, $extent) {
        $this->initialize();
        $wfsLayer = C4gMapsModel::findByPk($id);
        $url = str_ireplace('getcapabilities', 'getFeature',$wfsLayer->wfsCapabilities);
        $url .= "&outputFormat=application/json&VERSION=2.0.0&TYPENAMES=" . $wfsLayer->wfsLayers . "&BBOX=" .$extent;

        $client = HttpClient::create();
        $response = new JsonResponse();
        $data = $client->request(
            'GET',
            $url,
            [
                'headers' => [
                    'Referer'       => $_SERVER['HTTP_REFERER'],
                    'User-Agent'    =>     $_SERVER['HTTP_USER_AGENT'],
                    'Content-Type'  => "application/json"
                ]
            ]
        )->getContent();
        $response->setData(json_decode($data));
        return $response;
    }

    public function searchAction(Request $request, $profileId)
    {
        $this->initialize(false);
        $response = new Response();
        $getParams = $request->query->all();
        $event = new PerformSearchEvent();
        $event->setProfileId($profileId);
        $event->setArrParams($getParams);
        $searchApi = new SearchApi();
        $returnData = $searchApi->generate($profileId, $getParams);
        if (getType($returnData) === "string") {
            $returnData = json_decode($returnData, true);
        }
        $event->setResponse($returnData);
        $this->eventDispatcher->dispatch($event, $event::NAME);
        $returnData = json_encode($event->getResponse());
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function reverseSearchAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $reverseSearchApi = new ReverseSearchApi();
        $returnData = $reverseSearchApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function geopickerAction(Request $request)
    {
        $geopicker = new GeoPicker();
        $strResponse = $geopicker->generate();
        $response = new Response($strResponse, 200, array('Content-Type: Document'));
        return $response;

    }
}