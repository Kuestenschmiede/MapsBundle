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
use con4gis\MapsBundle\Classes\Services\AreaService;
use Contao\CoreBundle\Framework\ContaoFramework;
use Contao\System;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RoutingController extends BaseController
{
    private AreaService $areaService;

    /**
     * MapsController constructor.
     */
    public function __construct(
        ContainerInterface $container,
        ContaoFramework $framework,
        AreaService $areaService
    ) {
        parent::__construct($container);
        $framework->initialize(true);
        $this->areaService = $areaService;
    }
    
    public function getAreaAction(Request $request, $profileId, $layerId, $distance, $center)
    {
        if ($request->query->get('profile') !== null) {
            $profile = $request->query->get('profile');
        }

        return new JsonResponse(
            $this->areaService
                ->getResponse($profileId, $layerId, $distance, $center, $profile)
        );
    }
    
    public function getRouteAction(Request $request, $language, $profileId, $layerId, $detour, $locations)
    {
        $response = new Response();
        if ($request->query->get('profile') !== null) {
            $profile = $request->query->get('profile');
        }
        $locations = explode(";",$locations);
        $routeService = System::getContainer()->get("con4gis.route_service");
        $response ->setContent($routeService->getResponse($profileId, $layerId, $locations, $detour, $profile, $language));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}