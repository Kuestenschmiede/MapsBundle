<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 15.09.17
 * Time: 11:38
 */

namespace con4gis\MapsBundle\Controller;

use con4gis\MapsBundle\Resources\contao\classes\GeoEditor;
use con4gis\MapsBundle\Resources\contao\classes\GeoPicker;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerApi;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerTileApi;
use con4gis\MapsBundle\Resources\contao\modules\api\EditorApi;
use con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentDataApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LocationStyleApi;
use con4gis\MapsBundle\Resources\contao\modules\api\NominatimApi;
use con4gis\MapsBundle\Resources\contao\modules\api\ReverseNominatimApi;
use con4gis\MapsBundle\Resources\contao\modules\api\RoutingApi;
use Contao\Database;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;

class MapsController extends Controller
{

    private static $useCache = false;

    private static $outputFromCache = false;

    private $responseData = "";

    private function getCacheRequest(Request $request) {
        return $request->getRequestUri();
    }

    private function getCacheFragments(Request $request) {

        return ['request' => $request->query->all()];
    }

    private function checkForCacheSettings($configParam) {

        $this->container->get('contao.framework')->initialize();
        $cacheSettings = Database::getInstance()->execute("SELECT * FROM tl_c4g_settings LIMIT 1")->fetchAllAssoc();
        $cacheSettings = $cacheSettings[0]['caching'];
        self::$useCache = (is_array(deserialize($cacheSettings)) && in_array($configParam, deserialize($cacheSettings)));

    }

    private function checkAndStoreCachedData(Request $request) {
        if (($returnData = C4GApiCache::getCacheData($this->getCacheRequest($request), $this->getCacheFragments($request)))  !== false)
        {
            self::$outputFromCache = true;
            $this->responseData = $returnData;
        }
    }

    private function storeDataInCache(Request $request) {
        C4GApiCache::putCacheData($this->getCacheRequest($request), $this->getCacheFragments($request), $this->responseData);
    }

    public function baseLayerAction(Request $request, $profileId)
    {
        $response = new JsonResponse();
        $baseLayerApi = new BaseLayerApi();

        $this->checkForCacheSettings('baseLayerService');

        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }

        if (!self::$outputFromCache) {
            $this->responseData = $baseLayerApi->generate($profileId);
            if (self::$useCache) {
                $this->storeDataInCache($request);
            }
        }

        $response->setData($this->responseData);
        return $response;
    }
    public function baseLayerTileAction(Request $request, $baseLayerId, $z, $x, $y)
    {
        $baseLayerTileApi = new BaseLayerTileApi();

//        if (!self::$outputFromCache) {
            $this->responseData = $baseLayerTileApi->generate($baseLayerId, $z, $x, $y);
            //$this->storeDataInCache($request);
//        }

        $response = new Response($this->responseData);
        $response->headers->set('Content-Type', 'application/png');
        return $response;
    }

    public function layerAction(Request $request, $mapId)
    {
        $response = new JsonResponse();
        $layerApi = new LayerApi();

        $this->checkForCacheSettings('layerService');

        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }

        if (!self::$outputFromCache) {
            $this->responseData = $layerApi->generate($mapId);
            if (self::$useCache) {
                $this->storeDataInCache($request);
            }
        }

        $response->setData($this->responseData);
        return $response;
    }

    public function layerContentAction(Request $request, $layerId)
    {
        $response = new JsonResponse();
        $layerApi = new LayerContentApi();
        $this->responseData = $layerApi->generate($layerId);
        $response->setData($this->responseData);
        return $response;
    }
    public function layerContentDataAction(Request $request, $layerId, $extent)
    {
        $response = new JsonResponse();
        $layerDataApi = new LayerContentDataApi();
        $this->responseData = $layerDataApi->generate($layerId,$extent);
        $response->setData($this->responseData);
        return $response;
    }

    public function editorAction(Request $request, $profileId)
    {
        $response = new JsonResponse();
        $editorApi = new EditorApi();
        $returnData = $editorApi->generate($profileId);
        $response->setData($returnData);
        return $response;

    }
    public function beEditorAction(Request $request)
    {
        $geopicker = new GeoEditor();
        $strResponse = $geopicker->run();
        $response = new Response($strResponse['data'], 200, array('Content-Type: Document'));
        return $response;
    }

    public function infoWindowAction(Request $request, $popupString)
    {
        $response = new JsonResponse();
        if (strpos($popupString, ":") === false) {
            $response->setStatusCode(400);
            return $response;
        } else {
            $infoWindowApi = new InfoWindowApi();
            $returnData = $infoWindowApi->generate($popupString);
            $response->setData($returnData);
            return $response;
        }
    }

    public function locationStyleAction(Request $request)
    {
        $response = new JsonResponse();
        $locStyleApi = new LocationStyleApi();
        $arrIds = $request->query->get('ids');
        if ($arrIds) {

            $this->checkForCacheSettings('locationStyleService');

            if (self::$useCache) {
                $this->checkAndStoreCachedData($request);
            }

            if (!self::$outputFromCache) {
                $this->responseData = $locStyleApi->generate($arrIds);
                if (self::$useCache) {
                    $this->storeDataInCache($request);
                }
            }

            $response->setData($this->responseData);
            return $response;
        } else {
            $response->setStatusCode(400);
            return $response;
        }
    }

    public function nominatimAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $nominatimApi = new NominatimApi();
        $returnData = $nominatimApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function reverseNominatimAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $reverseNominatimApi = new ReverseNominatimApi();
        $returnData = $reverseNominatimApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function routingAction(Request $request, $profileId, $locations)
    {
        $response = new Response();
        $routingApi = new RoutingApi();
        $locations = explode('/', $locations);
        $returnData = $routingApi->generate($profileId, $locations);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function oldRoutingAction(Request $request, $profileId)
    {
        $response = new Response();
        $routingApi = new RoutingApi();
        $returnData = $routingApi->generate($profileId, array());
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function geopickerAction(Request $request)
    {
        $geopicker = new GeoPicker();
        $strResponse = $geopicker->generate();
        $response = new Response($strResponse['data'], 200, array('Content-Type: Document'));
        return $response;
    }
}