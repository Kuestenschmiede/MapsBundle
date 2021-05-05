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

namespace con4gis\MapsBundle\Classes\Listener;

use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Classes\Services\LayerService;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\modules\ExternalMapElement;
use con4gis\MapsBundle\Entity\RoutingConfiguration;
use Contao\System;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadMapDataListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * @var LayerService
     */
    private $layerService = null;

    /**
     * LoadMapDataListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager, LayerService $layerService)
    {
        $this->entityManager = $entityManager;
        $this->layerService = $layerService;
    }

    public function onloadMapDataAddRouterData(LoadMapdataEvent $event,
                                               $eventName,
                                               EventDispatcherInterface $eventDispatcher)
    {
        $mapData = $event->getMapData();
        System::loadLanguageFile('tl_c4g_routing_configuration');
        $profile = C4gMapProfilesModel::findById($mapData['profile']);
        $mapFunctions = unserialize($profile->mapFunctions);
        $buttons = array_flip($mapFunctions);
        $enabled = array_key_exists('routing', $buttons) ? $buttons['routing'] + 1 : 0;
        $externalComponents = unserialize($profile->external_elements);
        $externalClasses = ExternalMapElement::$arrClasses;
        if ($externalComponents && in_array('routing', $externalComponents)) {
            $mapData['router_div'] = $externalClasses['routing'];
        }
        if ($enabled) {
            $routerConfig = $this->entityManager->getRepository(RoutingConfiguration::class)
                ->findOneBy(['id' => $profile->routerConfig]);
            if ($routerConfig instanceof RoutingConfiguration) {
                $mapData['router_enable'] = $enabled;
                $mapData['router_viaroute_precision'] = $routerConfig->getRouterViarouteUrl() ? 1e5 : 1e6;
                $mapData['attribution']['router'] = $this->getRouterAttribution($routerConfig);
                $mapData['router_from_locstyle'] = $routerConfig->getRouterFromLocstyle();
                $mapData['router_to_locstyle'] = $routerConfig->getRouterToLocstyle();
                $mapData['router_point_locstyle'] = $routerConfig->getRouterPointLocstyle();
                $mapData['router_interim_locstyle'] = $routerConfig->getRouterInterimLocstyle();
                $mapData['router_api_selection'] = $routerConfig->getRouterApiSelection();
                $mapData['router_alternative'] = $routerConfig->getRouterAlternative();
                if ($routerConfig->getRouterProfiles()) {
                    $router_profiles = array_flip($routerConfig->getRouterProfiles());
                    foreach ($router_profiles as $key => $router_profile) {
                        $router_profiles[$key] = $GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['references_router_profiles'][$key];
                    }
                    $mapData['router_profiles'] = $router_profiles;
                }
                $mapData['router_profiles_initial'] = $routerConfig->getRouterProfilesInitial();
                if ($routerConfig->getCustomProfiles()) {
                    $mapData['customProfiles'] = $routerConfig->getCustomProfiles();
                }
                $routerLayers = $routerConfig->getRouterLayers();
                if ($routerLayers && $routerLayers[0] && $routerLayers[0]['key']) {
                    $returnLayers = [];
                    foreach ($routerLayers as $routerLayer) {
                        $routerLayer['key'] = str_replace(' ', '', $routerLayer['key']);
                        $routerLayer['label'] = str_replace(' ', '', $routerLayer['label']);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['keys'] = explode(',', $routerLayer['key']);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['labels'] = explode(',', $routerLayer['label']);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['mapLabel'] = $routerLayer['mapLabel'];
                        $layerId = $routerLayer['layers'];
                        $objLayer = C4gMapsModel::findByPk($layerId);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['layerData'] = $this->layerService->parseLayer($objLayer, $mapData['lang']);
                    }
                    $mapData['routerLayers'] = $returnLayers;
                }
                $mapData['clickLocstyle'] = $routerConfig->getClickLocstyle();
                $mapData['detourArea'] = [
                    'min' => $routerConfig->getMinDetourArea(),
                    'max' => $routerConfig->getMaxDetourArea(),
                    'initial' => $routerConfig->getInitialDetourArea(),
                ];
                $mapData['detourRoute'] = [
                    'min' => $routerConfig->getMinDetourRoute(),
                    'max' => $routerConfig->getMaxDetourRoute(),
                    'initial' => $routerConfig->getInitialDetourRoute(),
                ];
                $mapData['areaCenterLocstyle'] = $routerConfig->getAreaCenterLocstyle();
                $mapData['enableOverPoints'] = $routerConfig->getEnableOverPoints();
                $mapData['enableTargetSwitch'] = $routerConfig->getEnableTargetSwitch();
                $mapData['routerHeadline'] = $routerConfig->getRouterHeadline();
                $mapData['priorityFeatures'] = $routerConfig->getPriorityFeatures();
                $mapData['priorityLocstyle'] = $routerConfig->getPriorityLocstyle();
                $mapData['closeAfterSearch'] = $routerConfig->getCloseAfterSearch();
                $mapData['showFeatures'] = $routerConfig->getShowFeatures();
                $mapData['areaSearch'] = $routerConfig->getAreaSearch();
                $mapData['areaSearchOnly'] = $routerConfig->getAreaSearchOnly();
                $mapData['areaHeadline'] = $routerConfig->getAreaHeadline();
                $mapData['featureLabel'] = $routerConfig->getFeatureLabel();
                $mapData['showInstructions'] = $routerConfig->getShowInstructions();
                $mapData['instructionLabel'] = $routerConfig->getInstructionLabel();
                $mapData['initialMode'] = $routerConfig->getInitialMode();
                $mapData['initialResultMode'] = $routerConfig->getInitialResultMode();
                $mapData['routeStartButton'] = $routerConfig->getRouteStartButton();
                $mapData['initialPosition'] = $routerConfig->getInitialPosition();
                $mapData['initialDestination'] = $routerConfig->getInitialDestination();
                $mapData['usePermalink'] = $routerConfig->getUsePermalink();
                $mapData['hideFeaturesWithoutLabel'] = $routerConfig->getHideFeaturesWithoutLabel();
                $objSettings = C4gMapSettingsModel::findOnly();
                if ($objSettings->con4gisIoUrl && $objSettings->con4gisIoKey) {
                    if ($key = C4GUtils::getKey($objSettings, 7)) {
                        $mapData['proxyUrl'] = $objSettings->con4gisIoUrl;
                        $mapData['autocomplete'] = $key;
                    }
                }
            }
        }

        $event->setMapData($mapData);
    }

    protected function getRouterAttribution($routerConfig)
    {
        $apiSelection = $routerConfig->getRouterApiSelection();
        switch ($apiSelection) {
            case '0':
            case '1':
                $attributionRouting = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a> - OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';

                break;
            case '2':
                $attributionRouting = '<a target="_blank" href="https://openrouteservice.org/">openrouteservice</a> - ORS hosting by <a target="_blank" href="https://www.geog.uni-heidelberg.de/gis/heigit_en.html">HeiGIT</a>';

                break;
            case '3':
                $attributionRouting = 'Powered by <a href="https://www.graphhopper.com/">GraphHopper API</a>';

                break;
            case '4':
                $attributionRouting = '<a target="_blank" href="https://www.mapzen.com/blog/valhalla-intro/">Valhalla</a>';

                break;
            case '5':
                $objSettings = C4gMapSettingsModel::findOnly();
                $keyRouting = C4GUtils::getKey($objSettings, 1, '', false);
                $attributionRouting = $keyRouting->attribution;

                break;
        }
        if ($routerConfig->getRouterAttribution()) {
            $attributionRouting .= ' ' . $routerConfig->getRouterAttribution() . ' ';
        }

        return $attributionRouting ?: '';
    }
}
