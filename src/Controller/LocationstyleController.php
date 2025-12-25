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
        $query = $request->query;
        $arrIds = $query->all()['ids'];
        if ($arrIds) {

            $this->checkForCacheSettings('locationStyleService');

            if (self::$useCache) {
                $this->checkAndStoreCachedData($request);
            }

            if (!self::$outputFromCache) {
                try {
                    $this->responseData = $locStyleApi->generate($arrIds);
                } catch (\Throwable $e) {
                    if (class_exists(\Contao\System::class)) {
                        try {
                            \Contao\System::getContainer()->get('monolog.logger.contao')->error("LocationstyleController error during generation: " . $e->getMessage());
                        } catch (\Throwable $e2) {}
                    }
                    $this->responseData = [];
                }
                if (self::$useCache) {
                    $this->storeDataInCache($request);
                }
            }

            if (!is_array($this->responseData)) {
                $this->responseData = [];
            }
            
            try {
                $this->responseData = $this->cleanDataRecursive($this->responseData);
                // Last resort check if JsonResponse will fail
                $json = json_encode($this->responseData);
                if ($json === false) {
                    throw new \Exception(json_last_error_msg());
                }
                $response->setData($this->responseData);
            } catch (\Throwable $e) {
                if (class_exists(\Contao\System::class)) {
                    try {
                        \Contao\System::getContainer()->get('monolog.logger.contao')->error("LocationstyleController critical JSON error: " . $e->getMessage());
                    } catch (\Throwable $e2) {}
                }
                $response->setData([]);
            }
            
            return $response;
        } else {
            $response->setStatusCode(400);
            return $response;
        }
    }

    private function cleanDataRecursive(array $data): array
    {
        $clean = [];
        foreach ($data as $key => $value) {
            $cleanKey = $key;
            if (is_string($key) && !mb_check_encoding($key, 'UTF-8')) {
                $cleanKey = bin2hex($key);
            }

            if (is_array($value)) {
                $clean[$cleanKey] = $this->cleanDataRecursive($value);
            } elseif (is_string($value)) {
                if (!mb_check_encoding($value, 'UTF-8')) {
                    $clean[$cleanKey] = bin2hex($value);
                } else {
                    $clean[$cleanKey] = $value;
                }
            } elseif (is_object($value)) {
                if (method_exists($value, 'row')) {
                    $clean[$cleanKey] = $this->cleanDataRecursive($value->row());
                } else {
                    // objects are not allowed in JsonResponse data
                }
            } elseif (is_scalar($value) || $value === null) {
                $clean[$cleanKey] = $value;
            }
        }
        return $clean;
    }
}