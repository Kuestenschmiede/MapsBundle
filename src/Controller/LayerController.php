<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\MapsBundle\Classes\Events\LoadLayerContentDataEvent;
use con4gis\MapsBundle\Classes\Events\LoadLayersEvent;
use con4gis\MapsBundle\Classes\Services\LayerContentService;
use con4gis\MapsBundle\Classes\Services\LayerContentDataService;
use con4gis\MapsBundle\Classes\Services\LayerService;
use con4gis\MapsBundle\Classes\Utils;
use Contao\CoreBundle\Framework\ContaoFramework;
use Psr\Container\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LayerController extends BaseController
{

    private $preventCaching = false;

    private $layerContentDataService;

    /**
     * LayerController constructor.
     */
    public function __construct(
        ContainerInterface $container,
        ContaoFramework $framework,
        LayerContentDataService $layerContentDataService
    ) {
        $this->cacheInstance = C4GLayerApiCache::getInstance($container);
        $framework->initialize();
        $this->layerContentDataService = $layerContentDataService;
    }

    #[Route(
        path: '/con4gis/layerService/{mapId}/{lang}',
        name: 'layer_service',
        methods: ['GET']
    )]
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

            $layerService = $this->container->get('con4gis.layer_service');
            $this->responseData = $layerService->generate($mapId, $lang);
            $modifiedData = $this->responseData;
            // dispatch event for custom layer content
            foreach ($modifiedData['layer'] as $key => $layer) {
                $modifiedData['layer'][$key] = $this->addCustomLogic($layer, $lang);
            }
            $this->responseData = $modifiedData;
            $this->responseData = $this->normalizeLayerData($this->responseData);
            if (self::$useCache && !$this->preventCaching) {
                $this->storeDataInCache($request);
            }
        }
        
        $response->setData($this->responseData);
        
        return $response;
    }
    
    private function addCustomLogic($arrLayerData, $lang)
    {
        if (isset($arrLayerData['hasChilds']) && $arrLayerData['hasChilds'] && isset($arrLayerData['childs'])) {
            foreach ($arrLayerData['childs'] as $childIdx => $child) {
                $arrLayerData['childs'][$childIdx] = $this->addCustomLogic($child, $lang);
            }
        } else {
            if (!in_array($arrLayerData['type'], Utils::getLocationTypes())) {
                // custom location type
                $event = new LoadLayersEvent();
                $event->setLayerData($arrLayerData);
                $event->setAdditionalData(["language" => $lang]);
                $this->eventDispatcher->dispatch($event, $event::NAME);
                $arrLayerData = $event->getLayerData();
                if ($event->isPreventCaching()) {
                    $this->preventCaching = $event->isPreventCaching();
                }
            }
        }
        return $arrLayerData;
    }

    /**
     * Normalizes layer data to prevent frontend errors.
     *
     * @param mixed $data
     * @return mixed
     */
    private function normalizeLayerData($data)
    {
        if (is_string($data)) {
            if (!mb_check_encoding($data, 'UTF-8')) {
                $data = mb_convert_encoding($data, 'UTF-8', 'UTF-8');
            }
            return $data;
        }

        if (is_array($data)) {
            foreach ($data as $key => $value) {
                if ($key === 'type' || $key === 'format') {
                    if ($value === 'urlData' && isset($data['format'])) {
                        $data[$key] = $data['format'];
                        $value = $data['format'];
                    } elseif (in_array($value, ['gutesElem', 'gutesPart', 'gutes', 'urlData'])) {
                        $data[$key] = 'GeoJSON';
                        $value = 'GeoJSON';
                    }
                }
                $data[$key] = $this->normalizeLayerData($value);
            }
        } elseif (is_object($data)) {
            foreach ($data as $key => $value) {
                if ($key === 'type' || $key === 'format') {
                    if ($value === 'urlData' && isset($data->format)) {
                        $data->$key = $data->format;
                        $value = $data->format;
                    } elseif (in_array($value, ['gutesElem', 'gutesPart', 'gutes', 'urlData'])) {
                        $data->$key = 'GeoJSON';
                        $value = 'GeoJSON';
                    }
                }
                $data->$key = $this->normalizeLayerData($value);
            }
        }

        return $data;
    }

    public function layerContentAction(Request $request, $layerId)
    {
        $response = new JsonResponse();
        /* @var LayerContentService $layerContentService */
        $layerContentService = $this->get('con4gis.layer_content_service');
        $this->responseData = $layerContentService->getLayerData($layerId);
        $this->responseData = $this->normalizeLayerData($this->responseData);
        $response->setData($this->responseData);
        
        return $response;
    }
    public function layerContentDataAction(Request $request, $layerId, $extent)
    {
        $response = new JsonResponse();
        $this->initializeContao();
        $this->initialize(false);

        //$layerDataService = new LayerContentDataService();
        $this->responseData = $this->layerContentDataService->generate($layerId,$extent);
        $event = new LoadLayerContentDataEvent();
        $event->setLayerData($this->responseData);
        $event->setLayerId($layerId);
        $arrExtent = [
            explode(",", explode(";", $extent)[0])[0],
            explode(",", explode(";", $extent)[1])[0],
            explode(",", explode(";", $extent)[0])[1],
            explode(",", explode(";", $extent)[1])[1]
        ];
        $event->setExtent($arrExtent);
        $this->eventDispatcher->dispatch($event, $event::NAME);
        $this->responseData = $event->getLayerData();
        $this->responseData = $this->normalizeLayerData($this->responseData);
        $response->setData($this->responseData);
        
        return $response;
    }
}