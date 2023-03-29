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
use con4gis\MapsBundle\Classes\Caches\C4GBaselayerApiCache;
use con4gis\MapsBundle\Classes\Services\BaseLayerService;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerApi;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerTileApi;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BaselayerController extends BaseController
{
    /**
     * @var ContainerInterface
     */
    protected $container = null;
    
    /**
     * BaselayerController constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        $this->cacheInstance = C4GBaselayerApiCache::getInstance($container);
    }

    public function baseLayerAction(Request $request, $profileId, $lang)
    {
        $this->initializeContao();
        $response = new JsonResponse();
        $this->checkForCacheSettings('baseLayerService');

        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }

        if (!self::$outputFromCache) {
            $baseLayerService = $this->container->get('con4gis.baselayer_service');
            $this->responseData = $baseLayerService->generate($profileId, $lang);
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
        $this->responseData = $baseLayerTileApi->generate($baseLayerId, $z, $x, $y);
        $response = new Response($this->responseData);
        $response->headers->set('Content-Type', 'application/png');
        
        return $response;
    }
}