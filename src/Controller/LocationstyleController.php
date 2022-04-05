<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GLocationstyleApiCache;
use con4gis\MapsBundle\Resources\contao\modules\api\LocationStyleApi;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class LocationstyleController extends BaseController
{
    /**
     * BaselayerController constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        $this->cacheInstance = C4GLocationstyleApiCache::getInstance($container);
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