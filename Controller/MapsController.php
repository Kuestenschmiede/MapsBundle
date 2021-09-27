<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Events\LoadInfoWindowEvent;
use con4gis\MapsBundle\Classes\GeoPicker;
use con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi;
use con4gis\MapsBundle\Resources\contao\modules\api\SearchApi;
use con4gis\MapsBundle\Resources\contao\modules\api\ReverseSearchApi;
use Contao\CoreBundle\Framework\ContaoFramework;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MapsController extends BaseController
{
    protected $cacheInstance;
    
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
    
    protected function initialize($withEntityManager = true)
    {
        parent::initialize(false);
    }

    public function infoWindowAction(Request $request, $popupString)
    {
        $this->initialize(false);
        $response = new JsonResponse();
        if (strpos($popupString, ":") === false) {
            $response->setStatusCode(400);
            return $response;
        } else {
            $infoWindowApi = new InfoWindowApi();
            $returnData = $infoWindowApi->generate($popupString);

            $event = new LoadInfoWindowEvent();
            $event->setPopupString($popupString);
            $event->setPopup($returnData);
            $this->eventDispatcher->dispatch($event, $event::NAME);
            $returnData = $event->getPopup();
            $response->setData($returnData);
            return $response;
        }
    }

    public function searchAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $searchApi = new SearchApi();
        $returnData = $searchApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function reverseSearchAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $reverseSearchApi = new ReverseSearchApi();
        $returnData = $reverseSearchApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function geopickerAction(Request $request)
    {
        $geopicker = new GeoPicker();
        $strResponse = $geopicker->generate();
        $response = new Response($strResponse['data'], 200, array('Content-Type: Document'));
        return $response;
    }
}