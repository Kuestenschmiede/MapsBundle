<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
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
     * @Route("/con4gis/filterService/{layerId}", name="filter_service", methods={"GET"})
     * @param Request $request
     * @param $layerId
     * @return JsonResponse
     */
    public function filterAction(Request $request, $layerId)
    {
        $this->initializeContao();
        $GLOBALS['TL_LANGUAGE'] = "de";
        $this->initialize(false);
        $filters = $this->filterService->createFilters();
        $event = new LoadFeatureFiltersEvent();
        $event->setLayerId($layerId);
        $event->setFilters($filters);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $filters = $event->getFilters();
        $filters = \GuzzleHttp\json_encode($filters);
        return new JsonResponse($filters);
    }
}