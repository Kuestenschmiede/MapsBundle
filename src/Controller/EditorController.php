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
use con4gis\MapsBundle\Classes\Contao\GeoEditor;
use Contao\CoreBundle\Framework\ContaoFramework;
use Contao\System;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EditorController
{
    /**
     * EditorController constructor.
     */
    public function __construct(ContaoFramework $contaoFramework)
    {
        $contaoFramework->initialize();
    }

//    public function configEditorBackendAction(Request $request, $configId)
//    {
//        $this->initialize();
//        $response = new JsonResponse();
//        // return if cached data exists
//        if (!self::$outputFromCache) {
//            $configurationEvent = new EditorConfigurationEvent();
//            $configurationEvent->setConfigId($configId);
//            $this->eventDispatcher->dispatch($configurationEvent, $configurationEvent::NAME);
//            $formattedProjects = [];
//            $editorConfig = $configurationEvent->getEditorConfig();
//            $editorConfig['projects'] = $formattedProjects;
//            //$editorConfig['groups'] = $this->getGroupsForProjects($formattedProjects);
//            $this->responseData = $editorConfig;
//            $this->storeDataInCache($request);
//        } else {
//            // load from cache
//            $editorConfig = $this->responseData;
//            $editorConfig['fromcache'] = true;
//            $this->responseData = $editorConfig;
//        }
//        $response->setData($this->responseData);
//        return $response;
//    }
//
//    public function getIdAction(Request $request)
//    {
//        $this->initialize();
//        if (!$this->checkFeUser()) {
//            return new Response("No user logged in!", 403);
//        }
//        $data = $request->request->all();
//        if (!$data['id'] || !$data['key'] || !$data['ident']) {
//            return new Response("", 400);
//        } else {
//            $id = C4GBrickCommon::calcLayerID($data['id'], $data['key'], $data['ident']);
//            return new JsonResponse(['id' => $id]);
//        }
//    }

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