<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.09.18
 * Time: 15:06
 */

namespace con4gis\MapsBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentDataApi;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class LayerController extends BaseController
{
    /**
     * LayerController constructor.
     */
    public function __construct()
    {
        $this->cacheInstance = C4GLayerApiCache::getInstance();
    }

    public function layerAction(Request $request, $mapId)
    {
        $response = new JsonResponse();
        $this->initialize(false);

        $this->checkForCacheSettings('layerService');

        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }

        if (!self::$outputFromCache) {
            // TODO use Dependency Injection
            $layerService = $this->get('con4gis.layer_service');
            $this->responseData = $layerService->generate($mapId);
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
}