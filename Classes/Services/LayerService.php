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

namespace con4gis\MapsBundle\Classes\Services;

use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\CoreBundle\Classes\HttpResultHelper;
use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\MapsBundle\Classes\Utils;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use Contao\FrontendUser;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LayerService
{
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;

    /**
     * @var LayerContentService
     */
    private $layerContentService = null;

    protected $arrLayers = [];

    protected $arrConfig = [];

    protected $arrReassignedLayer = [];

    /**
     * LayerService constructor.
     * @param EventDispatcherInterface $eventDispatcher
     * @param LayerContentService $layerContentService
     */
    public function __construct(EventDispatcherInterface $eventDispatcher, LayerContentService $layerContentService)
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->layerContentService = $layerContentService;
    }

    public function generate($intParentId, $lang)
    {
        $arrLayers = $this->getLayerList($intParentId, $lang);

        // reassign layers from forum or other sources
        // this realizes the assignment of forum posts into a layer with the same name, if any exists
        if (sizeof($this->arrReassignedLayer) > 0) {
            foreach ($arrLayers as $index => $layer) {
                $strLayerName = Utils::replaceInsertTags($layer['name'], $lang);
                if (array_key_exists($strLayerName, $this->arrReassignedLayer)) {
                    foreach ($this->arrReassignedLayer[$strLayerName] as $reassignedLayer) {
                        if (is_array($arrLayers[$index]['content'])) {
                            $arrLayers[$index]['content'][] = $reassignedLayer;
                        } else {
                            $arrLayers[$index]['content'] = [$reassignedLayer];
                        }
                    }
                }

                if ($layer['hasChilds']) {
                    foreach ($layer['childs'] as $childIndex => $childLayer) {
                        $strChildLayerName = Utils::replaceInsertTags($childLayer['name'], $lang);
                        if (array_key_exists($strChildLayerName, $this->arrReassignedLayer)) {
                            foreach ($this->arrReassignedLayer[$strChildLayerName] as $reassignedLayer) {
                                if (is_array($arrLayers[$index]['childs'][$childIndex]['content'])) {
                                    $arrLayers[$index]['childs'][$childIndex]['content'][] = $reassignedLayer;
                                } else {
                                    $arrLayers[$index]['childs'][$childIndex]['content'] = [$reassignedLayer];
                                }
                            }
                        }
                    }
                }
            }
        }

        $this->arrConfig['countAll'] = sizeof($arrLayers);
        $return = [
            'config' => $this->arrConfig,
            'layer' => $arrLayers,
        ];
        foreach ($return['layer'] as $key => $layer) {
            $objLayer = C4gMapsModel::findByPk($layer['id']);
            if ($objLayer->poim_reassign_layer) {
                $return['layer'][$key] = $this->forceChildsInContent($layer);
            }
        }
        $return['layer'] = $this->checkAndReassignFrontendLayers($return['layer']);

        return $return;
    }

    public function forceChildsInContent($layer)
    {
        $arrChilds = [];
        foreach ($layer['childs'] as $key => $child) {
            if ($child['childs'] && $child['childs'][0]['content'] && $child['childs'][0]['content'] != []) {
                $arrContent = [];
                foreach ($child['childs'] as $children) {
                    $arrContent[] = $children['content'][0];
                }
                $child['content'] = $arrContent;
                unset($child['childs'], $child['childsCount']);

                $child['hasChilds'] = false;
                $arrChilds[] = $child;
            } else {
                $child['childs'] = $this->forceChildsInContent($layer['childs'][0]);
            }
        }
        $layer['childs'] = $arrChilds;

        return $layer;
    }

    public function createGeoJSONFeature($objOptions, $locX = null, $locY = null, $geometry = null)
    {
        $geometry = $geometry ? $geometry : [
            'type' => 'Point',
            'coordinates' => [
                $locX,
                $locY,
            ],
        ];

        return [
            'type' => 'Feature',
            'properties' => $objOptions,
            'geometry' => $geometry,
        ];
    }

    public function getFeaturesFromLayerTree($layerTree)
    {
        $features = [];
        foreach ($layerTree as $layer) {
            $features = array_merge($features, $this->getFeaturesForLayer($layer));
        }

        return $features;
    }

    protected function getFeaturesForLayer($layer)
    {
        $features = [];
        foreach ($layer['content'] as $contentElement) {
            if ($contentElement['data'] && $contentElement['data']['type']) {
                if ($contentElement['data']['type'] === 'FeatureCollection') {
                    if ($contentElement['data']['properties'] && $contentElement['data']['properties']['projection']) {
                        foreach ($contentElement['data']['features'] as $feature) {
                            $feature['properties']['projection'] = $contentElement['data']['properties']['projection'];
                            $features[] = $feature;
                        }
                    } else {
                        foreach ($contentElement['data']['features'] as $feature) {
                            $features[] = $feature;
                        }
                    }
                } else {
                    $features[] = $contentElement['data'];
                }
            }
        }
        if ($layer['childs']) {
            foreach ($layer['childs'] as $child) {
                $features = array_merge($features, $this->getFeaturesForLayer($child));
            }
        }

        return $features;
    }

    /**
     * Returns the layer structure for the map.
     * @param $intId
     * @param bool $blnIsSubLayer
     * @return array
     */
    protected function getLayerList($intId, $lang, $blnIsSubLayer = false)
    {
        $arrLayer = [];

        if (!$blnIsSubLayer) {
            // Find the requested map
            $objMap = C4gMapsModel::findById($intId);

            // Only return map entries
            if ($objMap == null || !$objMap->location_type == 'map') {
                HttpResultHelper::NotFound();
            }
        }

        // Get all layers on the map
        $objLayers = C4gMapsModel::findPublishedByPid($intId);

        if ($objMap) {
            // append map itself as structure element
            if ($objMap->location_type != 'map') {
                $mapLayer = $this->parseLayer($objMap, $lang);
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
                    if (C4GUtils::checkFrontendUserLogin() && !empty($objLayers->permitted_groups)) {
                        $permittedGroups = deserialize($objLayers->permitted_groups);
                        $userGroups = FrontendUser::getInstance()->groups;
                        if (sizeof(array_intersect($userGroups, $permittedGroups)) <= 0) {
                            continue;
                        }
                    } else {
                        continue;
                    }
                }
                if ($arrGetLayerData = $this->parseLayer($objLayers, $lang)) {
                    $arrLayerData = $arrGetLayerData;//$this->parseLayer($objLayers);
                    $arrLayerData['cssClass'] = $objLayers->cssClass;

                    if ($childLayerList = $this->getLayerList($arrLayerData['id'], $lang, true)) {
                        $arrLayerData['hasChilds'] = true;
                        $arrLayerData['childsCount'] = sizeof($childLayerList);
                        $arrLayerData['childs'] = $childLayerList;
                    } elseif ($objLayers->location_type == 'folder') {
                        $folder = $this->getFolder($objLayers);
                        if ($folder != '') {
                            $dict = $this->layerContentService->getFolderDataPublic($objLayers);
                            $arrLayerData['hasChilds'] = true;
                            $arrLayerData['childsCount'] = count($dict);
                            $arrLayerData['childs'] = $dict;
                            unset($arrLayerData['raw']);
                            $arrLayer[] = $arrLayerData;

                            continue;
                        }
                    }
                    $arrLayerData['childs'] = $this->setChildHide($arrLayerData['childs'], $objLayers);
                    // only add if there is a result
                    if (is_array($arrLayerData) && count($arrLayerData) > 0) {
                        unset($arrLayerData['raw']);
                        $arrLayer[] = $arrLayerData;
                    }
                }
            }
        }

        return $arrLayer;
    }

    private function checkAndReassignFrontendLayers(&$arrLayers)
    {
        foreach ($arrLayers as $index => $layer) {
            if ($layer['type'] == 'poim') {
                $objLayer = C4gMapsModel::findByPk($layer['id']);
                if ($objLayer->poim_reassign_layer) {
                    foreach ($layer['childs'] as $grpKey => $poiGroup) {
                        $overpassLayers = &$this->searchOverpassLayerByName($poiGroup['name'], $arrLayers);
                        if (count($overpassLayers) > 0) {
                            foreach ($overpassLayers as &$overpassLayer) {
                                $overpassLayer['childs'] = [];
                                $overpassLayer['childsCount'] = 0;
                                $poiGroup['pid'] = $overpassLayer['id'];
                                $overpassLayer['childs'][] = $poiGroup;
                                $overpassLayer['hasChilds'] = true;
                            }
                            unset($layer['childs'][$grpKey]);
                            $layer['childsCount']--;
                        }
                    }
                    $arrLayers[$index]['display'] = false;
                }
            }
        }

        return $arrLayers;
    }

    private function &searchOverpassLayerByName($name, &$layers)
    {
        $return = [];
        foreach ($layers as $key => &$layer) {
            if ($layer['name'] == $name && $layer['type'] == 'overpass') {
                $return[] = &$layer;
            }
            if ($layer['hasChilds']) {
                $recursiveResult = &$this->searchOverpassLayerByName($name, $layer['childs']);
                if ($recursiveResult) {
                    foreach ($recursiveResult as &$r) {
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
        $newChildList = [];
        if ($childList && $parentLayer) {
            foreach ($childList as $index => $child) {
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
    public function parseLayer($objLayer, $lang)
    {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        $arrLayerData = [];
        $arrLayerData['id'] = $objLayer->id;
        $arrLayerData['pid'] = $objLayer->pid;
        $arrLayerData['name'] = Utils::replaceInsertTags($stringClass::decodeEntities($objLayer->name), $lang);
        $arrLayerData['zoom_locations'] = $objLayer->zoom_locations;
        $arrLayerData['async_content'] = $objLayer->async_content;
        if ($objLayer->location_type === 'overpass') {
            $arrLayerData['async_content'] = '1';
        }
        $arrLayerData['noFilter'] = $objLayer->exemptFromFilter;
        $arrLayerData['noRealFilter'] = $objLayer->exemptFromRealFilter === "1";
        $arrLayerData['routing_link'] = $objLayer->routing_to;
        $arrLayerData['locstyle'] = $objLayer->locstyle;
        $arrLayerData['initial_opened'] = $objLayer->initial_opened;
        $arrLayerData['zIndex'] = $objLayer->zIndex;

        if ($objLayer->cluster_locations) {
            $arrLayerData['cluster'] = [
                'distance' => $objLayer->cluster_distance ?: 20,
                'fillcolor' => $objLayer->cluster_fillcolor,
                'fontcolor' => $objLayer->cluster_fontcolor,
                'zoom' => $objLayer->cluster_zoom,
                'popup' => $objLayer->cluster_popup,
            ];
        }

        if ($objLayer->filterByBaseLayer && unserialize($objLayer->filterByBaseLayer)) {
            $arrLayerData['activeForBaselayers'] = unserialize($objLayer->filterByBaseLayer);
        } else {
            $arrLayerData['activeForBaselayers'] = 'all';
        }

        // check parent hide status
        $parentLayer = C4gMapsModel::findById($objLayer->pid);
        if (!$parentLayer->location_type == 'none' && $parentLayer->data_hidelayer) {
            $arrLayerData['hide'] = $parentLayer->data_hidelayer;
        } else {
            $arrLayerData['hide'] = $objLayer->data_hidelayer;
        }

        if ($objLayer->loc_minzoom > 0 || $objLayer->loc_maxzoom > 0) {
            $arrLayerData['zoom'] = [
                'min' => $objLayer->loc_minzoom > 0 ? $objLayer->loc_minzoom: '0',
                'max' => $objLayer->loc_maxzoom > 0 ? $objLayer->loc_maxzoom: '40',
                'onclick_to' => $objLayer->loc_onclick_zoomto,
            ];
        }

        if ($objLayer->data_layername) {
            $arrLayerData['name'] = Utils::replaceInsertTags($stringClass::decodeEntities($objLayer->data_layername), $lang);
            $arrLayerData['display'] = true;
            $arrLayerData['hide_child'] = $objLayer->hide_child;
        } else {
            $arrLayerData['display'] = false;
        }

        if ($objLayer->split_geojson) {
            $arrLayerData['split_geojson'] = $objLayer->split_geojson;
            $arrLayerData['geojson_attributes'] = $objLayer->geojson_attributes;
            $arrLayerData['geojson_zoom'] = $objLayer->geojson_zoom;
        }

        // hide when element is rendered in starboard tab
        if ($objLayer->hide_when_in_tab) {
            $arrLayerData['hide_when_in_tab'] = true;
        }
        if ($objLayer->hideInStarboard) {
            $arrLayerData['hideInStarboard'] = true;
        }

        $arrLayerData['excludeFromSingleLayer'] = false;
        if ($objLayer->excludeFromSingleLayer) {
            if (($objLayer->excludeFromSingleLayer === '1') || in_array($objLayer->location_type, ['table','gpx','kml','geojson','overpass','folder'])) {
                $arrLayerData['excludeFromSingleLayer'] = true;
            }
        }

        $arrLayerData['type'] = $objLayer->location_type;
        if ($objLayer->location_type === 'link') {
            $arrLayerData = $this->handleLayerLink($objLayer, $arrLayerData, $lang);
        } else {
            $arrLayerData['content'] = $this->getContentForType($objLayer, $lang);
        }

        if ($arrLayerData['activeForBaselayers'] === 'all' && $parentLayer) {
            if ($parentLayer->filterByBaseLayer) {
                $arrLayerData['activeForBaselayers'] = unserialize($parentLayer->filterByBaseLayer);
            } else {
                // check parents if they have a baselayer filter
                $layer = C4gMapsModel::findByPk($parentLayer->id);
                while ($layer->pid != 0) {
                    if ($layer->filterByBaseLayer) {
                        $arrLayerData['activeForBaselayers'] = unserialize($layer->filterByBaseLayer);

                        break;
                    }
                    $layer = C4gMapsModel::findByPk($layer->pid);
                }
                if ($layer->pid = 0) {
                    $arrLayerData['activeForBaselayers'] = 'all';
                }
            }
        }

        if ($objLayer->icon_src) {
            $objFile = \FilesModel::findByUuid($objLayer->icon_src);
            if ($objFile && $objFile->path) {
                $arrLayerData['icon_src'] = $objFile->path;
                $arrLayerData['content'] = [0 => true,
                    1 => true, ];
            }
        }

        if ($objLayer->location_type === 'startab') {
            $arrLayerData['awesomeicon'] = $objLayer->awesomeicon;
        }

        $arrLayerData['raw'] = $objLayer;

        return $arrLayerData;
    }

    private function handleLayerLink($objLayer, $arrLayerData, $lang)
    {
        $arrLayerData['link_id'] = $objLayer->link_id;
        $linkedLayer = C4gMapsModel::findByPk($objLayer->link_id);
        if (!$linkedLayer->published) {
            return $arrLayerData;
        }
        // check if linked element is overpass request and assign correct content values
        if (($linkedLayer->location_type !== 'none') && ($linkedLayer->location_type !== 'map')) {
            // TODO check with nested link structures
            $arrLayerData['content'] = $this->getContentForType($linkedLayer);
        } else {
            // check childs
            // TODO cache resolved link
            $arrLayerData = array_merge($arrLayerData, $this->getChildsForLinkedLayer($linkedLayer->id, $objLayer, $lang));
        }

        // set baselayer filter
        if ($linkedLayer->filterByBaseLayer) {
            $arrLayerData['activeForBaselayers'] = unserialize($linkedLayer->filterByBaseLayer);
        }

        // set zooms of links
        if ($linkedLayer->loc_minzoom > 0 || $linkedLayer->loc_maxzoom > 0) {
            $arrLayerData['zoom'] = [
                'min' => $linkedLayer->loc_minzoom > 0 ? $linkedLayer->loc_minzoom: '0',
                'max' => $linkedLayer->loc_maxzoom > 0 ? $linkedLayer->loc_maxzoom: '40',
                'onclick_to' => $linkedLayer->loc_onclick_zoomto,
            ];
        }

        return $arrLayerData;
    }

    /**
     * Returns the linked structure.
     * @param $layerId
     * @param $parentLayer
     * @return array
     */
    private function getChildsForLinkedLayer($layerId, $parentLayer, $lang)
    {
        $childLayers = C4gMapsModel::findPublishedByPid($layerId);
        $arrLayerData['childs'] = [];

        foreach ($childLayers as $childLayer) {
            if (($childLayer->location_type !== 'none') && ($childLayer->location_type !== 'map')) {
                // we reached the "bottom" of the tree leaf
                $childData = $this->parseLayer($childLayer, $lang);
                $childData['pid'] = $parentLayer->id;
                $arrLayerData['childs'][] = $childData;
                $arrLayerData['hide'] = $parentLayer->data_hidelayer;
            } else {
                $currentChildLayer = $this->parseLayer($childLayer, $lang);
                // set correct pid for the contentless element
                $currentChildLayer['pid'] = $parentLayer->id;
                // $childLayer is the acutal existing layer.
                $arrChildData = $this->getChildsForLinkedLayer($childLayer->id, (object) $currentChildLayer, $lang);
                $currentChildLayer['childs'] = $arrChildData['childs'];
                $currentChildLayer['content'] = [];
                $currentChildLayer['hasChilds'] = count($currentChildLayer['childs']) > 0;
                $currentChildLayer['childsCount'] = count($currentChildLayer['childs']);
                $arrLayerData['childs'][] = $currentChildLayer;
            }

            $arrLayerData['content'] = [];
            $arrLayerData['hasChilds'] = count($arrLayerData['childs']) > 0;
            $arrLayerData['childsCount'] = count($arrLayerData['childs']);
        }

        return $arrLayerData;
    }

    /**
     * @param $objLayer
     * @return array|bool
     */
    protected function getContentForType($objLayer, $lang = '')
    {
        try {
            switch ($objLayer->location_type) {
                case 'c4gForum':
                    return $this->getC4gForumData($objLayer);

                    break;
                case 'table':
                    if ($objLayer->async_content) {
                        return false;
                    }

                    return $this->layerContentService->getLayerData($objLayer->id);

                    break;
                // same function call, so fallthrough
                case 'link':
                case 'overpass':
                case 'gpx':
                case 'kml':
                case 'osm':
                case 'single':
                case 'geojson':
                    return $this->layerContentService->getLayerData($objLayer->id, false, $lang);

                    break;
                default:
                    if (!$objLayer->data_hidelayer) {
                        return $this->layerContentService->getLayerData($objLayer->id);
                    }

                    return false;

                    break;
            }
        } catch (\Exception $e) {
            C4gLogModel::addLogEntry('map', 'Error while loading the location type ' . $objLayer->location_type);

            return false;
        }
    }

    private function getC4gForumData($objLayer)
    {
        if ($objLayer->forum_reassign_layer && $objLayer->forum_reassign_layer == 'THREAD') {
            $arrReassignedRawLayer = $this->layerContentService->getLayerData($objLayer->id);

            //loop over all forum layers
            foreach ($arrReassignedRawLayer as $index => $reassignedLayer) {
                $found = false;
                $strReassignName = $reassignedLayer['threadName'];
                $layer = $this->arrReassignedLayer[$strReassignName];
                if ($layer && is_array($layer)) {
                    $this->arrReassignedLayer[$strReassignName][] = $reassignedLayer;
                    $found = true;
                } elseif (!$layer) {
                    // lookup in child elements if the layer is there
                    foreach ($this->arrReassignedLayer as $index_child => $reassignedLayer_child) {
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
                    $this->arrReassignedLayer[$strReassignName] = [];
                    $this->arrReassignedLayer[$strReassignName][] = $reassignedLayer;
                }
            }

            return false;
        }

        return $this->layerContentService->getLayerData($objLayer->id);
    }

    private function getFolder($objLayer)
    {
        $strUrl = '';

        if ($objLayer->data_folder) {
            if (\Validator::isUuid($objLayer->data_folder)) {
                // add ressource folder
                $objFolder = \FilesModel::findByUuid($objLayer->data_folder);
                if ($objFolder !== null) {
                    $strUrl = $objFolder->path;
                }
            }
        }

        return $strUrl;
    }
}
