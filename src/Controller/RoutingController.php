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
use Contao\CoreBundle\Framework\ContaoFramework;
use Contao\System;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RoutingController extends BaseController
{
    /**
     * MapsController constructor.
     */
    public function __construct(
        ContainerInterface $container,
        ContaoFramework $framework
    ) {
        parent::__construct($container);
        $framework->initialize(true);
    }
    
    public function getAreaAction(Request $request, $profileId, $layerId, $distance, $center)
    {
        $response = new Response();
        if ($request->query->get('profile') !== null) {
            $profile = $request->query->get('profile');
        }
        $areaService = $this->get('con4gis.area_service');
        $response ->setContent($areaService->getResponse($profileId, $layerId, $distance, $center, $profile));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
        
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