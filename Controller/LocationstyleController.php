<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.09.18
 * Time: 15:07
 */

namespace con4gis\MapsBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GLocationstyleApiCache;
use con4gis\MapsBundle\Resources\contao\modules\api\LocationStyleApi;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class LocationstyleController extends BaseController
{
    /**
     * BaselayerController constructor.
     */
    public function __construct()
    {
        $this->cacheInstance = C4GLocationstyleApiCache::getInstance();
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
}