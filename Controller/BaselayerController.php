<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.09.18
 * Time: 15:07
 */

namespace con4gis\MapsBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GBaselayerApiCache;
use con4gis\MapsBundle\Classes\Services\BaseLayerService;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerApi;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerTileApi;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BaselayerController extends BaseController
{
    /**
     * BaselayerController constructor.
     */
    public function __construct()
    {
        $this->cacheInstance = C4GBaselayerApiCache::getInstance();
    }

    public function baseLayerAction(Request $request, $profileId)
    {
        $response = new JsonResponse();

        $this->checkForCacheSettings('baseLayerService');

        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }

        if (!self::$outputFromCache) {
            $baseLayerService = $this->get('con4gis.baselayer_service');
            $this->responseData = $baseLayerService->generate($profileId);
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
}