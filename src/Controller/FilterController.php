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
use con4gis\MapsBundle\Classes\Events\LoadFeatureFiltersEvent;
use con4gis\MapsBundle\Classes\Events\LoadFeatureFiltersEventEvent;
use con4gis\MapsBundle\Classes\Services\FilterService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class FilterController extends BaseController
{
    /**
     * @var FilterService
     */
    private $filterService = null;
    
    /**
     * FilterController constructor.
     * @param FilterService $filterService
     */
    public function __construct(FilterService $filterService)
    {
        $this->filterService = $filterService;
    }

    /**
    * @Route(
    *     path="/con4gis/filterService/{profileId}/{lang}",
    *     name="filter_service",
    *     methods={"GET"}
    * )
    */
    #[Route(
        path: '/con4gis/filterService/{profileId}/{lang}',
        name: 'filter_service',
        methods: ['GET']
    )]
    public function filterAction(Request $request, $profileId, $lang)
    {
        $this->initializeContao();
        $GLOBALS['TL_LANGUAGE'] = $lang;
        $this->initialize(false);
        $filters = $this->filterService->createFilters($profileId) ?: [];
        $event = new LoadFeatureFiltersEvent();
        $event->setProfileId($profileId);
        $event->setFilters($filters);
        $event->setAddData(["language" => $lang]);
        $this->eventDispatcher->dispatch($event, $event::NAME);
        $filters = $event->getFilters();
        return new JsonResponse($filters);
    }
}