<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
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
use con4gis\MapsBundle\Resources\contao\classes\Utils;
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

    public function layerAction(Request $request, $mapId, $lang)
    {
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
            if (self::$useCache) {
                $this->storeDataInCache($request);
            }
        }
        
        // dispatch event for custom layer content
        $modifiedData = $this->responseData;
        foreach ($modifiedData['layer'] as $key => $layer) {
            $modifiedData['layer'][$key] = $this->addCustomLogic($layer);
        }
        
        $response->setData($modifiedData);
        
        return $response;
    }
    
    private function addCustomLogic($arrLayerData)
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