<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\MapsBundle\Resources\contao\modules\api;

use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use Contao\StringUtil;

/**
 * Class LayerApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LayerApi extends \Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    protected $arrLayers = array();
    protected $arrConfig = array();
    protected $arrReassignedLayer = array();

    public function generate($intParentId)
    {

        $this->import('FrontendUser', 'User');

        $arrLayers = $this->getLayerList($intParentId);

        if(sizeof($this->arrReassignedLayer) > 0)
        {
            foreach ($arrLayers as $index=>$layer)
            {
                $strLayerName =  \Contao\Controller::replaceInsertTags($layer['name']);
                if (array_key_exists($strLayerName, $this->arrReassignedLayer))
                {
                    foreach ($this->arrReassignedLayer[$strLayerName] as $reassignedLayer)
                    {
                        if (is_array($arrLayers[$index]['content'])) {
                            $arrLayers[$index]['content'][] = $reassignedLayer;
                        } else {
                            $arrLayers[$index]['content'] = array($reassignedLayer);

                        }
                    }
                }

                if ($layer['hasChilds'])
                {
                    foreach ($layer['childs'] as $childIndex=>$childLayer)
                    {
                        $strChildLayerName =  \Contao\Controller::replaceInsertTags($childLayer['name']);
                        if (array_key_exists($strChildLayerName, $this->arrReassignedLayer))
                        {
                            foreach ($this->arrReassignedLayer[$strChildLayerName] as $reassignedLayer)
                            {
                                if (is_array($arrLayers[$index]['childs'][$childIndex]['content'])) {
                                    $arrLayers[$index]['childs'][$childIndex]['content'][] = $reassignedLayer;
                                } else {
                                    $arrLayers[$index]['childs'][$childIndex]['content'] = array($reassignedLayer);
                                }
                            }
                        }
                    }
                }
            }
        }

        $this->arrConfig['countAll'] = sizeof($arrLayers);
        $return = array(
            'config' => $this->arrConfig,
            'layer' => $arrLayers,
            'foreignLayers' => $this->checkAndFetchMissingLinkedLayers($arrLayers)
        );
        foreach($return['layer'] as $key => $layer)
        {
            $objLayer = C4gMapsModel::findByPk($layer['id']);
            if ($objLayer->poim_reassign_layer)
            {
                $return['layer'][$key] = $this->forceChildsInContent($layer);
            }
        }
        $return['layer'] = $this->checkAndReassignFrontendLayers($return['layer']);



        $this->Database->prepare("DELETE FROM tl_c4g_map_layer_content")->execute();
        foreach($return['layer'] as $key => $layer){
            $return['layer'][$key] = $this->saveLayerContent($layer);
        }


        return $return;
    }
    protected function saveLayerContent($layer)
    {
        if($layer['childs']){
            foreach($layer['childs'] as $key => $child)
            {
                $layer['childs'][$key] = $this->saveLayerContent($child);
            }
        }
        if($layer['async_content'] == 1) {
            if ($layer['content']) {
                foreach ($layer['content'] as $key => $content) {
                    if (!$content['data'] || !$content['data']['geometry'] || !$content['data']['geometry']['coordinates'] || count($content['data']['geometry']['coordinates']) != 2) continue;
                    $set['pid'] = $layer['id'];
                    $set['type'] = $content['type'];
                    $set['format'] = $content['format'];
                    $set['origType'] = $content['origType'];
                    $set['locStyle'] = $content['locationStyle'];
                    $set['datatype'] = $content['data']['type'];
                    $set['geotype'] = $content['data']['geometry']['type'];
                    $set['geox'] = $content['data']['geometry']['coordinates'][0];
                    $set['geoy'] = $content['data']['geometry']['coordinates'][1];
                    $set['projection'] = $content['data']['properties']['projection'];
                    $set['popup_content'] = $content['data']['properties']['popup']['content'];
                    $set['popup_routing_link'] = $content['data']['properties']['popup']['routing_link'];
                    $set['popup_async'] = $content['data']['properties']['popup']['async'];
                    $set['tooltip'] = $content['data']['properties']['tooltip'];
                    $set['tooltip_length'] = $content['data']['properties']['tooltip_length'];
                    $set['label'] = $content['data']['properties']['label'];
                    $set['loc_linkurl'] = $content['data']['properties']['loc_linkurl'];
                    $set['hover_location'] = $content['data']['properties']['hover_location'];
                    $set['hover_style'] = $content['data']['properties']['hover_style'];
                    $set['cluster_fillcolor'] = $content['cluster_fillcolor'];
                    $set['cluster_distance'] = $content['cluster_distance'];
                    $set['cluster_fontcolor'] = $content['cluster_fontcolor'];
                    $set['cluster_zoom'] = $content['cluster_zoom'];
                    $set['cluster_popup'] = $content['cluster_popup'];
                    if($content['settings']['cluster']){
                        $layer['cluster'] = $content['settings']['cluster'];
                    }
                    $this->Database->prepare("INSERT INTO tl_c4g_map_layer_content %s")->set($set)->execute();
                    unset($layer['content'][$key]);
                }
            }
        }

        return $layer;
    }
    protected function forceChildsInContent($layer)
    {
        $arrChilds =[];
        foreach($layer['childs'] as $key => $child)
        {
            if($child['childs'] && $child['childs'][0]['content'] && $child['childs'][0]['content'] != []) {
                $arrContent = [];
                foreach ($child['childs'] as $children) {
                    $arrContent[] = $children['content'][0];
                }
                $child['content'] = $arrContent;
                unset($child['childs']);
                unset($child['childsCount']);
                $child['hasChilds'] = false;
                $arrChilds[] = $child;
            }
            else {
                $child['childs'] = $this->forceChildsInContent($layer['childs'][0]);
            }
        }
        $layer['childs'] = $arrChilds;
        return $layer;
    }

    protected function checkAndFetchMissingLinkedLayers($layers)
    {
        $missingLayers = array();

        $layerIdList = array();
        $this->setLayerIdList($layers, $layerIdList);

        foreach ($layerIdList as $id => $exists) {
            if (!$exists) {
                $fetchedLayer = C4gMapsModel::findById($id);

                if (!$fetchedLayer) {
                    continue;
                }
                // do not return protected layers, to users without permission
                if ($fetchedLayer->protect_element) {
                    if (FE_USER_LOGGED_IN && !empty($fetchedLayer->permitted_groups)) {
                        if (sizeof(array_intersect($this->User->groups, deserialize($fetchedLayer->permitted_groups))) <= 0) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }
                if ($layerData = $this->parseLayer($fetchedLayer)) {

                    if ($childLayerList = $this->getLayerList($layerData['id'], true)) {
                        $layerData['hasChilds'] = true;
                        $layerData['childsCount'] = sizeof($childLayerList);
                        $layerData['childs'] = $childLayerList;
                    }

                    // HOOK: add custom logic
                    if (isset($GLOBALS['TL_HOOKS']['c4gAddLocationsParent']) && is_array($GLOBALS['TL_HOOKS']['c4gAddLocationsParent']))
                    {
                        foreach ($GLOBALS['TL_HOOKS']['c4gAddLocationsParent'] as $callback)
                        {
                            $str_class = $callback[0];
                            $str_function = $callback[1];
                            if ($str_class && $str_function) {
                                $this->import($str_class);
                                $arrData = $this->$str_class->$str_function($layerData['pid'], $layerData, $this);
                                if ($arrData && is_array($arrData) && sizeof($arrData)>0)
                                {
                                    $layerData = $arrData;
                                }
                            }
                        }
                    }
                    unset($layerData['raw']);
                    $missingLayers[$layerData['id']] = $layerData;
                }
            }
        }

        return $missingLayers;
    }

    protected function setLayerIdList($layers, &$idList)
    {
        foreach ($layers as $layer) {
            $idList[$layer['id']] = true;
            if ($layer['link_id'] && !array_key_exists($layer['link_id'], $idList)) {
                $idList[$layer['link_id']] = false;
            }
            if ($layer['hasChilds']) {
                $this->setLayerIdList($layer['childs'], $idList);
            }
        }
    }

    /**
     * Returns the layer structure for the map.
     *
     * @param int $id
     */
    protected function getLayerList($intId, $blnIsSubLayer = false)
    {
        $arrLayer = array();
        $arrLinkData = array();

        if (!$blnIsSubLayer) {
            // Find the requested map
            $objMap = C4gMapsModel::findById($intId);

            // Only return map entries
            if ($objMap == null || !$objMap->is_map) {
                HttpResultHelper::NotFound();
            }
        }

        // Get all layers on the map
        $objLayers = C4gMapsModel::findPublishedByPid($intId);

        if ($objMap) {
            // append map itself as structure element
            if ($objMap->location_type != "none") {
                $mapLayer = $this->parseLayer($objMap);
                unset($mapLayer['raw']);
                $arrLayer[] = $mapLayer;
            }
        }

        if ($objLayers != null) {
            while ($objLayers->next()) {
                // workaround for incorrect model function
                if (!$objLayers->published) {
                    continue;
                }

                // do not return protected layers, to users without permission
                if ($objLayers->protect_element) {
                    if (FE_USER_LOGGED_IN && !empty($objLayers->permitted_groups)) {
                        if (sizeof(array_intersect($this->User->groups, deserialize($objLayers->permitted_groups))) <= 0) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }

                //if ($objLayers->forum_reassign_layer)

                if ($arrGetLayerData = $this->parseLayer($objLayers)) {
                    $arrLayerData = $arrGetLayerData;//$this->parseLayer($objLayers);
                    $arrLayerData['cssClass'] = $objLayers->cssClass;

                    if ($childLayerList = $this->getLayerList($arrLayerData['id'], true)) {
                        $arrLayerData['hasChilds'] = true;
                        $arrLayerData['childsCount'] = sizeof($childLayerList);
                        $arrLayerData['childs'] = $childLayerList;
                    } else if ($objLayers->location_type == 'link') {
                        // link handling
                        if ($childLayerList = $this->getLayerList($arrLayerData['link_id'], true)) {
                            // duplicate children for the link
                            foreach($childLayerList as $key=>$child)
                            {
                                // generate new unique ids
                                $childId = $childLayerList[$key]['id'];
                                $childLayerList[$key]['link_id'] = $childId;
                                $childLayerList[$key]['id'] = uniqid();
                                $childLayerList[$key]['pid'] = $arrLayerData['id'];
                                $childLayerList[$key]['childs'] = $this->getLinkedChilds($childLayerList[$key]);
                                if ($childLayerList[$key]['childs'] && sizeof($childLayerList[$key]['childs']) > 0) {
                                    $childLayerList[$key]['hasChilds'] = true;
                                    $childLayerList[$key]['childCount'] = sizeof($childLayerList[$key]['childs']);
                                    foreach($childLayerList[$key]['childs'] as $index=>$item)
                                    {
                                        $childLayerList[$key]['childs'][$index]['hide'] = $objLayers->data_hidelayer;
                                    }
                                }
                            }
                            $arrLayerData['hasChilds'] = true;
                            $arrLayerData['childsCount'] = sizeof($childLayerList);
                            $arrLayerData['childs'] = $childLayerList;
                        }
                    } else if ($objLayers->location_type == 'folder') {
                        $folder = $this->getFolder($objLayers);
                        $noneFolder = false;
                        if ($folder != '') {
                            if ($noneFolder) {
                                $objLayerContentApi = new LayerContentApi();
                                $dict = $objLayerContentApi->getFolderDataPublic($objLayers, 1);
                                foreach ($dict as $child) {
                                    $arrLayer[] = $child;
                                }
                                continue;
                            } else {
                                $objLayerContentApi = new LayerContentApi();
                                $dict = $objLayerContentApi->getFolderDataPublic($objLayers);

                                $arrLayerData['hasChilds'] = true;
                                $arrLayerData['childsCount'] = count($dict);
                                $arrLayerData['childs'] = $dict;

                                unset($arrLayerData['raw']);
                                $arrLayer[] = $arrLayerData;
                                continue;
                            }
                        }
                    }
                    $arrLayerData['childs'] = $this->setChildHide($arrLayerData['childs'], $objLayers);

                    // HOOK: add custom logic
                    if (isset($GLOBALS['TL_HOOKS']['c4gAddLocationsParent']) && is_array($GLOBALS['TL_HOOKS']['c4gAddLocationsParent']))
                    {
                        foreach ($GLOBALS['TL_HOOKS']['c4gAddLocationsParent'] as $callback)
                        {
                            $str_class = $callback[0];
                            $str_function = $callback[1];
                            if ($str_class && $str_function) {
                                $this->import($str_class);
                                $arrData = $this->$str_class->$str_function($arrLayerData['pid'], $arrLayerData, $this);
                                if ($arrData && is_array($arrData) && sizeof($arrData)>0)
                                {
                                    $arrLayerData = $arrData;
                                }
                            }
                        }
                    }
                    unset($arrLayerData['raw']);
                    $arrLayer[] = $arrLayerData;
                }
            }
//            $arrLayer = $this->checkAndReassignFrontendLayers($arrLayer);
        }
        return $arrLayer;
    }

    private function checkAndReassignFrontendLayers(&$arrLayers) {
        foreach($arrLayers as $index => $layer) {
            if ($layer['type'] == "poim") {
                $objLayer = C4gMapsModel::findByPk($layer['id']);
                if ($objLayer->poim_reassign_layer) {
                    foreach($layer['childs'] as $grpKey=> $poiGroup) {
                        $overpassLayers = &$this->searchOverpassLayerByName($poiGroup['name'], $arrLayers);
                        if (count($overpassLayers) > 0) {
                            foreach($overpassLayers as &$overpassLayer) {
                                $overpassLayer['childs'] = array();
                                $overpassLayer['childsCount'] = 0;
                                $poiGroup['pid'] = $overpassLayer['id'];
                                $overpassLayer['childs'][] = $poiGroup;
                                $overpassLayer['hasChilds'] = true;
                            }
                            unset ($layer['childs'][$grpKey]);
                            $layer['childsCount']--;
//                            return $overpassLayers;
                        }
                    }
                    $arrLayers[$index]['display'] = false;
                }
            }
        }
        return $arrLayers;
    }

    private function &searchOverpassLayerByName($name, &$layers) {
        $return = array();
        foreach($layers as $key => &$layer) {
            if ($layer['name'] == $name && $layer['type'] == 'overpass') {
                $return[] = &$layer;
            }
            if ($layer['hasChilds']) {
                $recursiveResult = &$this->searchOverpassLayerByName($name, $layer['childs']);
                if ($recursiveResult) {
                    foreach($recursiveResult as &$r) {
                        $return[] = &$r;
                    }
                }
            }
        }
        return $return;
    }

    /**
     * Private function to set the hide property of childs correctly.
     * @param $childList
     * @param $parentLayer
     * @return array
     */
    private function setChildHide($childList, $parentLayer)
    {
        $newChildList = array();
        if ($childList && $parentLayer) {
            foreach($childList as $index=>$child)
            {
                if ($parentLayer->data_hidelayer) {
                    $child['hide'] = $parentLayer->data_hidelayer;
                    if ($child['hasChilds']) {
                        $child['childs'] = $this->setChildHide($child['childs'], $parentLayer);
                    }
                }
                $newChildList[$index] = $child;
            }
        }
        return $newChildList;
    }


    /**
     * Summary of parseLayer
     *
     * @param mixed $objLayer
     * @return array
     */
    protected function parseLayer($objLayer)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrLayerData = array();
        $arrLayerData['id'] = $objLayer->id;
        $arrLayerData['pid'] = $objLayer->pid;
        $arrLayerData['name'] =  \Contao\Controller::replaceInsertTags($stringClass::decodeEntities($objLayer->name));
        $arrLayerData['zoom_locations'] = $objLayer->zoom_locations;
        $arrLayerData['async_content'] = $objLayer->async_content;

        // check parent hide status
        $parentLayer = C4gMapsModel::findById($objLayer->pid);
        if (!$parentLayer->is_map && $parentLayer->data_hidelayer) {
            $arrLayerData['hide'] = $parentLayer->data_hidelayer;
        } else {
            $arrLayerData['hide'] = $objLayer->data_hidelayer;
        }

        if ($objLayer->loc_minzoom>0 || $objLayer->loc_maxzoom>0)
        {
            $arrLayerData['zoom'] = array(
                'min' => $objLayer->loc_minzoom,
                'max' => $objLayer->loc_maxzoom,
                'onclick_to' => $objLayer->loc_onclick_zoomto
            );
        }

        if ($objLayer->data_layername)
        {
            $arrLayerData['name'] = \Contao\Controller::replaceInsertTags($stringClass::decodeEntities($objLayer->data_layername));
            $arrLayerData['display'] = true;
            $arrLayerData['hide_child'] = $objLayer->hide_child;
        }
        else
        {
            $arrLayerData['display'] = false;
        }

        // hide when element is rendered in starboard tab
        if ($objLayer->hide_when_in_tab) {
            $arrLayerData['hide_when_in_tab'] = true;
        }

        $arrLayerData['type'] = $objLayer->location_type;
        if ($objLayer->location_type === 'link') {
            $arrLayerData['link_id'] = $objLayer->link_id;
            $linkedLayer = C4gMapsModel::findByPk($objLayer->link_id);
            // check if linked element is overpass request and assign correct content values
            if ($linkedLayer->location_type == "overpass") {
                $arrLayerData['content'] = $this->getContentForType($linkedLayer);
            } else {
                $arrLayerData['content'] = $this->getContentForType($objLayer);
                $arrLayerData['hide'] = $objLayer->data_hidelayer;
            }
            // set zooms of links
            if ($linkedLayer->loc_minzoom>0 || $linkedLayer->loc_maxzoom>0)
            {
                $arrLayerData['zoom'] = array(
                    'min' => $linkedLayer->loc_minzoom,
                    'max' => $linkedLayer->loc_maxzoom,
                    'onclick_to' => $linkedLayer->loc_onclick_zoomto
                );
            }
        } else {
            $arrLayerData['content'] = $this->getContentForType($objLayer);
        }
        if ($objLayer->location_type === 'startab') {
            $arrLayerData['awesomeicon'] = $objLayer->awesomeicon;
        }
        $arrLayerData['raw'] = $objLayer;

        return $arrLayerData;
    }

    /**
     * @param $objLayer
     * @return array|bool
     */
    protected function getContentForType($objLayer)
    {
        $objLayerContentApi = new LayerContentApi();
        switch ($objLayer->location_type)
        {
            // TODO: make Hook instead and let con4gis-Forum handle this?
            case "c4gForum":
                if ($objLayer->forum_reassign_layer && $objLayer->forum_reassign_layer=="THREAD") {
                    $arrReassignedRawLayer = $objLayerContentApi->getLayerDataPublic($objLayer->id);

                    //loop over all forum layers
                    foreach ($arrReassignedRawLayer as $index=>$reassignedLayer)
                    {
                        $found = false;
                        $strReassignName = $reassignedLayer['threadName'];
                        $layer = $this->arrReassignedLayer[$strReassignName];
                        if ($layer && is_array($layer)) {
                            $this->arrReassignedLayer[$strReassignName][] = $reassignedLayer;
                            $found = true;
                        } else if (!$layer) {
                            // lookup in child elements if the layer is there
                            foreach ($this->arrReassignedLayer as $index_child=>$reassignedLayer_child)
                            {
                                $layer_child = $reassignedLayer_child[$strReassignName];
                                if ($layer_child && is_array($layer_child)) {
                                    // found layer
                                    $reassignedLayer_child[$strReassignName][] = $reassignedLayer;
                                    $found = true;
                                    break;
                                }
                            }
                        }

                        if (!$found) {
                            //since the layer was not found, insert it at first level
                            $this->arrReassignedLayer[$strReassignName] = array();
                            $this->arrReassignedLayer[$strReassignName][] = $reassignedLayer;
                        }
                    }

                    return false;
                } else {
                    return $objLayerContentApi->getLayerDataPublic($objLayer->id);
                }
            // same function call, so fallthrough
            case "link":
            case "overpass":
            case "gpx":
            case "kml":
            case "osm":
            case "table":
            case "single":
                return $objLayerContentApi->getLayerDataPublic($objLayer->id);
//            case "folder":
//                return $objLayerContentApi->getFolderDataPublic($objLayer);
            default:
                if (!$objLayer->data_hidelayer) {
                    return $objLayerContentApi->getLayerDataPublic($objLayer->id);
                }
                return false;
        }
    }

    private function getLinkedChilds($layer)
    {
        $childs = array();
        $dbValues = C4gMapsModel::findPublishedByPid($layer['link_id']);
        if ($dbValues) {
            while($dbValues->next()) {
                $child = array();
                $child['link_id'] = $dbValues->id;
                $child['name'] = \Contao\Controller::replaceInsertTags($dbValues->name);
                $child['id'] = uniqid();
                $child['pid'] = $layer['id'];
                $child['display'] = $layer['display'];
                $child['content'] = $this->getContentForType($dbValues);
                $child['type'] = "link";
                $child['childs'] = $this->getLinkedChilds($child);
                if ($child['childs'] && sizeof($child['childs']) > 0) {
                    $child['hasChilds'] = true;
                    $child['childCount'] = sizeof($child['childs']);
                }
                $childs[] = $child;
            }
            return $childs;
        } else {
            return array();
        }
    }

    private function getFolder($objLayer)
    {
        $strUrl = "";
        if ($objLayer->data_folder)
        {
            if (\Validator::isUuid($objLayer->data_folder))
            {
                // add ressource folder
                $objFolder = \FilesModel::findByUuid($objLayer->data_folder);
                if ($objFolder !== null)
                {
                    $strUrl = $objFolder->path;
                }
            }
        }
        return $strUrl;
    }


}
