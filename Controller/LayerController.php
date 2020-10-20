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
namespace con4gis\MapsBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\MapsBundle\Classes\Events\LoadLayersEvent;
use con4gis\MapsBundle\Classes\Services\LayerContentService;
use con4gis\MapsBundle\Classes\Services\LayerService;
use con4gis\MapsBundle\Classes\Utils;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentDataApi;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LayerController extends BaseController
{
    /**
     * @var ContainerInterface
     */
    protected $container = null;
    
    /**
     * LayerController constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        
        $this->cacheInstance = C4GLayerApiCache::getInstance($container);
    }
    
    /**
     * @Route("/con4gis/layerService/{mapId}/{lang}", name="layer_service", methods={"GET"})
     * @param Request $request
     * @param $mapId
     * @param $lang
     * @return JsonResponse
     */
    public function layerAction(Request $request, $mapId, $lang)
    {
        $this->initializeContao();
        $GLOBALS['TL_LANGUAGE'] = $lang;
        $response = new JsonResponse();
        $this->initialize(false);
        $this->checkForCacheSettings('layerService');
        
        if (self::$useCache) {
            $this->checkAndStoreCachedData($request);
        }
        
        if (!self::$outputFromCache) {
            /* @var LayerService $layerService */
            $layerService = $this->get('con4gis.layer_service');
            $this->responseData = $layerService->generate($mapId, $lang);
            $modifiedData = $this->responseData;
            // dispatch event for custom layer content
            foreach ($modifiedData['layer'] as $key => $layer) {
                $modifiedData['layer'][$key] = $this->addCustomLogic($layer, $lang);
            }
            $this->responseData = $modifiedData;
            if (self::$useCache) {
                $this->storeDataInCache($request);
            }
        }
        
        $response->setData($this->responseData);
        
        return $response;
    }
    
    private function addCustomLogic($arrLayerData, $lang)
    {
        if ($arrLayerData['hasChilds']) {
            foreach ($arrLayerData['childs'] as $childIdx => $child) {
                $arrLayerData['childs'][$childIdx] = $this->addCustomLogic($child);
            }
        } else {
            if (!in_array($arrLayerData['type'], Utils::getLocationTypes())) {
                // custom location type
                $event = new LoadLayersEvent();
                $event->setLayerData($arrLayerData);
                $event->setAdditionalData(["language" => $lang]);
                $this->eventDispatcher->dispatch($event::NAME, $event);
                $arrLayerData = $event->getLayerData();
            }
        }
        return $arrLayerData;
    }

    public function layerContentAction(Request $request, $layerId)
    {
        $response = new JsonResponse();
        /* @var LayerContentService $layerContentService */
        $layerContentService = $this->get('con4gis.layer_content_service');
        $this->responseData = $layerContentService->getLayerData($layerId);
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