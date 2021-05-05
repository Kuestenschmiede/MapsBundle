<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\MapsBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Contao\GeoEditor;
use Contao\System;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EditorController extends BaseController
{
    /**
     * EditorController constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
    }

    protected function initialize($withEntityManager = true)
    {
        $container = System::getContainer();
        parent::initialize($withEntityManager);
    }

    public function beEditorAction(Request $request, $layerId)
    {
        $geoEditor = new GeoEditor($layerId);
        $strResponse = $geoEditor->run();
        if ($strResponse instanceof Response) {
            return $strResponse;
        } else {
            $response = new Response($strResponse['data'], 200, array('Content-Type: Document'));
            return $response;
        }
    }

}