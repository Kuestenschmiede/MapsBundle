<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\MapsBundle\Resources\contao\modules\api;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapLocstylesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use Contao\StringUtil;

if (!defined('TL_ROOT')) die('You cannot access this file directly!');

/**
 * Class LayerContentApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LayerContentApi extends \Controller
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */

    public function __construct()
    {
        $this->import('con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi');
    }

    public function generate($layerId)
    {
        return $this->getLayerData($layerId, true);
    }

    public function getLayerDataPublic($intId)
    {
        $arrLayerData = $this->getLayerData($intId);
        return $arrLayerData;
    }

    public function getFolderDataPublic($objLayer, $key=false, $folder=false, $count=0)
    {
        $arrLayerData = $this->getFolderData($objLayer, $key, $folder, $count);
        return $arrLayerData;
    }
    /**
     * Returns the layer data.
     *
     * @param int $id
     */
    protected function getLayerData($intId, $secondFetch = false)
    {
        // Find the requested layer
        $objLayer = C4gMapsModel::findById($intId);

        // TODO: Check force-nodes for more structure elements

        // TODO: Apply additional filter logic
        // Hidden layers or layers that only represent maps should not return.

        // Only return map entries
        if ($objLayer == null) {
            // \HttpResultHelper::NotFound();
            return array();
        }

        $objProfile = $objLayer->getRelated('profile');

        $arrReturnData = array();

        switch ($objLayer->location_type) {
            case "geojson":

                $arrReturnData[] = array
                (
                    "id" => $intId,
                    "type" => "GeoJSON",
                    "format" => "GeoJSON",
                    "origType" => "geojson",
                    "locationStyle" => $objLayer->locstyle,
                    "data" => $this->createGeoJsonResult($objLayer, 'tl_c4g_maps'),
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,

                );

                break;
            case "single":

                $arrReturnData[] = array
                (
                    "id" => $intId,
                    "type" => "GeoJSON",
                    "format" => "GeoJSON",
                    "origType" => "single",
                    "locationStyle" => $objLayer->locstyle,
                    "data" => $this->createGeoJsonResult($objLayer, 'tl_c4g_maps'),
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,
                );

                break;
            case "overpass":
                $this->InfoWindowApi = new InfoWindowApi();
                $arrReturnData[] = array
                (
                    "id" => $intId,
                    "type" => "urlData",
                    "format" => "OSMXML",
                    "origType" => "overpass",
                    "locationStyle" => $objLayer->locstyle,
                    "cluster_fillcolor" => $objLayer->cluster_fillcolor,
                    "cluster_fontcolor" => $objLayer->cluster_fontcolor,
                    "cluster_zoom" => $objLayer->cluster_zoom,
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,
                    "data" => array
                    (
                        "url" => $objProfile->overpass_url ? $objProfile->overpass_url : "http://overpass-api.de/api/interpreter",
                        "params" => rawurlencode($objLayer->ovp_request),
                        "popup" => $this->InfoWindowApi->getPopupConfiguration('tl_c4g_maps', $objLayer->id, $objLayer),/*array(
                            "content" => "tl_c4g_maps" . ":" . $objLayer->id
                        )*/
                        "tooltip" => $objLayer->tooltip,
                        "label" => $objLayer->loc_label,
                        "zoom_onclick" => $objLayer -> loc_onclick_zoomto
                    ),
                    "settings" => array
                    (
                        "loadAsync" => true,
                        "refresh" => false,
                        "crossOrigine" => false,
                        "boundingBox" => "(bbox)",
                        "cluster" => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                        "forceNodes" => $objLayer->data_forcenodes ? true : false,
                        "showAdditionalGeometries" => $objLayer->data_additionalgeometries
                    )
                );

                break;
            case "gpx":

                $arrReturnData[] = array
                (
                    "id" => $intId,
                    "type" => "urlData",
                    "format" => "GPX",
                    "origType" => "gpx",
                    "locationStyle" => $objLayer->locstyle,
                    "cluster_fillcolor" => $objLayer->cluster_fillcolor,
                    "cluster_fontcolor" => $objLayer->cluster_fontcolor,
                    "cluster_zoom" => $objLayer->cluster_zoom,
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,
                    "data" => array
                    (
                        "popup" => array(
                            "async" => $objLayer->popup_async
                        ),
                        "tooltip" => $objLayer->tooltip,
                        "label" => $objLayer->loc_label,
                        "zoom_onclick" => $objLayer -> loc_onclick_zoomto,
                        "url" => $this->getUrl($objLayer)
                    ),
                    "settings" => array
                    (
                        "loadAsync"     => true,
                        "refresh"       => false,
                        "crossOrigine"  => false,
                        "boundingBox"   => false,
                        "cluster"       => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                    )
                );
                if($arrReturnData["0"]["data"]["popup"]["async"] == 1){
                    $arrReturnData["0"]["data"]["popup"]['async'] = true;
                    $arrReturnData["0"]["data"]["popup"]['content'] = "tl_c4g_maps" . ":" . $objLayer->id;
                }
                else{
                    $arrReturnData["0"]["data"]["popup"]['async'] = false;
                    $arrReturnData["0"]["data"]["popup"]['content'] = $objLayer->popup_info;
                    $arrReturnData["0"]["data"]["popup"]['routing_link'] = $objLayer->routing_to;
                    $arrReturnData["0"]["data"]["popup"]['showPopupOnActive'] = $objLayer->showPopupOnActive;
                }


                break;
            case "kml":

                $arrReturnData[] = array
                (
                    "id" => $intId,
                    "type" => "urlData",
                    "format" => "KML",
                    "origType" => "kml",
                    "locationStyle" => $objLayer->locstyle,
                    "cluster_fillcolor" => $objLayer->cluster_fillcolor,
                    "cluster_fontcolor" => $objLayer->cluster_fontcolor,
                    "cluster_zoom" => $objLayer->cluster_zoom,
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,
                    "data" => array
                    (
                        "popup" => array(
                            "async" => $objLayer->popup_async
                        ),
                        "tooltip" => $objLayer->tooltip,
                        "label" => $objLayer->loc_label,
                        "zoom_onclick" => $objLayer -> loc_onclick_zoomto,
                        "url" => $this->getUrl($objLayer)
                    ),
                    "settings" => array
                    (
                        "loadAsync" => true,
                        "refresh" => false,
                        "crossOrigine" => false,
                        "boundingBox" => false,
                        "cluster" => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                    )
                );
                if($arrReturnData["0"]["data"]["popup"]["async"] == 1){
                    $arrReturnData["0"]["data"]["popup"]['async'] = true;
                    $arrReturnData["0"]["data"]["popup"]['content'] = "tl_c4g_maps" . ":" . $objLayer->id;
                }
                else{
                    $arrReturnData["0"]["data"]["popup"]['async'] = false;
                    $arrReturnData["0"]["data"]["popup"]['content'] = $objLayer->popup_info;
                    $arrReturnData["0"]["data"]["popup"]['routing_link'] = $objLayer->routing_to;
                    $arrReturnData["0"]["data"]["popup"]['showPopupOnActive'] = $objLayer->showPopupOnActive;
                }

                break;
            case "osm":

                $arrReturnData[] = array
                (
                    "id" => $intId,
                    "type" => "urlData",
                    "format" => "OSMXML",
                    "origType" => "osm",
                    "locationStyle" => $objLayer->locstyle,
                    "cluster_fillcolor" => $objLayer->cluster_fillcolor,
                    "cluster_fontcolor" => $objLayer->cluster_fontcolor,
                    "cluster_zoom" => $objLayer->cluster_zoom,
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,
                    "data" => array
                    (
                        "url" => $this->getUrl($objLayer),
                        "popup" => array(
                            "content" => "tl_c4g_maps" . ":" . $objLayer->id
                        ),
                        "tooltip" => $objLayer->tooltip,
                        "label" => $objLayer->loc_label,
                        'zoom_onclick' => $objLayer->loc_onclick_zoomto
                    ),
                    "settings" => array
                    (
                        "loadAsync" => true,
                        "refresh" => false,
                        "crossOrigine" => false,
                        "boundingBox" => false,
                        "cluster" => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,

                    )
                );

                break;
//            case "poim":
//                return $this->createC4gPoimResult($objLayer, $secondFetch);
//                break;
            case "c4gForum":
                return $this->createC4gForumResult($objLayer, $secondFetch);
                break;
            case "table":
                $sourceTable = $objLayer->tab_source;
                $pidOption = '';
                $whereClause = '';
                $qWhere = '';
                $qAnd = '';
                $addBeWhereClause = '';
                $and = '';

                $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
                $ptableArr = explode(',', $arrConfig['ptable']);
                $ptableFieldArr = explode(',', $arrConfig['ptable_field']);
                $ptableCompareFieldArr = explode(',', $arrConfig['ptable_compare_field']);
                $ptableBlobArr = explode(',', $arrConfig['ptable_blob']);

                //check parent values
                if ($arrConfig['ptable']) {

                    foreach ($ptableArr as $key=>$ptable) {
                        $qWhere .= " WHERE ";
                        if ($key == 0) {
                            $sourcePid = intval($objLayer->tab_pid);
                        } else {
                            $and = " AND ";
                            $fieldName = "tab_pid".intval($key);
                            $sourcePid = intval($objLayer->$fieldName);
                        }

                        $ptablefield = $ptableFieldArr[$key];
                        $ptableCompareField = $ptableCompareFieldArr[$key];

                        //if there is a compare Field instead of the id field (parent table) we have change the parent id
                        if ($sourcePid && $ptableCompareField && ($ptableCompareField != 'id')) {
                            $query = "SELECT * FROM `$ptable` WHERE id = $sourcePid";
                            $result = \Database::getInstance()->prepare($query)->limit(1)->execute();
                            $sourcePid = intval($result->$ptableCompareField);
                        }

                        if ($sourcePid) {
                            if ($arrConfig['ptable_field']) {
                                if ($ptableBlobArr[$key] == 1) {
                                    //ToDo filter after select
                                } else {
                                    $pidOption .= $and."$ptablefield = $sourcePid ";
                                }
                            } else {
                                $pidOption .= "`pid` = '$sourcePid'  ";
                            }
                        }

                    }
                }

                if ($arrConfig['sqlwhere']) {
                    $qWhere = " WHERE ";
                    if($arrConfig['ptable'] && $pidOption)
                    { $qAnd = " AND ";}
                    $whereClause = $arrConfig['sqlwhere'];
                }

                if($objLayer->tab_whereclause){
                    $an = " AND ";
                    if (!$qWhere){
                        $qWhere = " WHERE ";
                        $an = '';
                    }
                    $addBeWhereClause = $an.$objLayer->tab_whereclause;
                }

                if ($arrConfig['sourcetable']) {
                    $sourceTable = $arrConfig['sourcetable'];
                }

                $query = "SELECT * FROM `$sourceTable`". $qWhere . $pidOption . $qAnd . $whereClause . $addBeWhereClause;
                $result = \Database::getInstance()->prepare($query)->execute();

                $geox = $arrConfig['geox'];
                $geoy = $arrConfig['geoy'];
                $geoxField = $geox;
                $geoyField = $geoy;
                $geolocation = '';
                if (!$geox && !$geoy) {
                   $geolocation = $arrConfig['geolocation'];
                }
                $tooltipField = $arrConfig['tooltip'];
                $labelField = $arrConfig['label'];

                while($result->next())
                {
                    $locstyle = $result->c4g_locstyle;
                    if (!$locstyle) {
                        $locstyle = $objLayer->locstyle;
                    }

                    $show = 0;
                    $blobCount = 0;

                    //check blob fields
                    if ($arrConfig['ptable']) {
                        foreach ($ptableArr as $key=>$ptable) {
                            $ptableBlobArr = explode(',', $arrConfig['ptable_blob']);
                            if ($ptableBlobArr[$key] == 1) {
                                if ($key == 0) {
                                    $sourcePid = intval($objLayer->tab_pid);
                                } else {
                                    $fieldName = "tab_pid" . intval($key);
                                    $sourcePid = intval($objLayer->$fieldName);
                                }

                                if ($sourcePid) {
                                    $blobCount++;
                                }

                                $ptablefield = $ptableFieldArr[$key];
                                $ptableCompareField = $ptableCompareFieldArr[$key];
                                $blobfield = $result->$ptablefield;

                                if ($blobfield && $sourcePid && $ptableCompareField && ($ptableCompareField != 'id')) {
                                    $query2 = "SELECT * FROM `$ptable` WHERE id = $sourcePid";
                                    $result2 = \Database::getInstance()->prepare($query2)->limit(1)->execute();
                                    $sourcePid = intval($result2->$ptableCompareField);
                                }

                                if ($sourcePid && $blobfield) {
                                    $blobArr = unserialize($blobfield);
                                    if (in_array($sourcePid, $blobArr)) {
                                        $show++;
                                    }

                                }
                            }
                        }
                    }

                    $popupContent = '';
                    if (($show == $blobCount) && (($result->$geoxField && $result->$geoyField) || ($geolocation && $result->$geolocation)))
                    {
                        // replace popup stuff
                        if ($arrConfig['popup'])
                        {
                            $popupElements = explode(',', $arrConfig['popup']);
                            foreach($popupElements as $key=>$value)
                            {
                                if (substr($value, 0, 1) == '{' && substr($value, -1, 1) == '}') {
                                    // we have an inserttag
                                    $replacedValue = str_replace('[id]', $result->id, $value);
                                    $popupContent .= $this->replaceInsertTags($replacedValue) . ' ';
                                } else if (substr($value, 0, 1) == '[' && substr($value, -1, 1) == ']') {
                                    // no insert tag
                                    $replacedValue = str_replace('[', '', $value);
                                    $replacedValue = str_replace(']', '', $replacedValue);
                                    $elements = explode(':', $replacedValue);
                                    $column = $elements[0];
                                    $columnClass = 'c4g_maps_table_column_'.$column;
                                    $dataType = $elements[1];
                                    $additionalParam1 = $elements[2];
                                    $additionalParam2 = $elements[3];
                                    switch($dataType)
                                    {
                                        case 'date':
                                            $popupContent .= '<div class="'.$columnClass.'">'.date('d.m.y', $result->$column) . '</div>';
                                            break;
                                        case 'string':
                                            $columnText = $result->$column;
                                            $columnText = str_replace('[nbsp]', ' ', $columnText);
                                            $columnText = html_entity_decode(C4GUtils::secure_ugc($columnText));
                                            $popupContent .= '<div class="'.$columnClass.'">'.$columnText . '</div>';
                                            break;
                                        case 'pagelink':
                                            if (!$additionalParam1) {
                                                $additionalParam1 = 'details';
                                            }
                                            $aliasOrId = $result->$column;
                                            if (!$additionalParam2) {
                                                $link = $this->replaceInsertTags('{{link_url::'.$aliasOrId.'}}');
                                            } else {
                                                if ($column == 'subdomain') {
                                                    $link = 'https://'.$aliasOrId.'.'.$additionalParam2;
                                                } else {
                                                    $link = 'https://'.$additionalParam2;
                                                    $link = $link . '/' . $aliasOrId . '.html';
                                                }
                                            }

                                            $popupContent .= '<a class="'.$columnClass.'" href="'.$link.'">'.$additionalParam1.'</a>';
                                            break;
                                        case 'pagelink2':
                                            if (!$additionalParam1) {
                                                $additionalParam1 = 'details';
                                            }
                                            $aliasOrId = $result->$column;
                                            if (!$additionalParam2) {
                                                $link = $this->replaceInsertTags('{{link_url::'.$aliasOrId.'}}');
                                            } else {
                                                if ($column == 'subdomain') {
                                                    $link = 'https://'.$aliasOrId.'.'.$additionalParam2;
                                                } else {
                                                    $link = 'https://' . $additionalParam2;
                                                    $link = $link . '/' . $aliasOrId . '.html';
                                                }
                                            }

                                            $popupContent .= '<a class="'.$columnClass.'" href="'.$link.'" target="_blank">'.$additionalParam1.'</a>';
                                            break;
                                        case 'responsiveImage':
                                            $responsiveImage = false;
                                            if ($additionalParam1) {
                                                $responsiveImage = $additionalParam1;
                                            }
                                            $file = \FilesModel::findByUuid($result->$column);
                                            if ($file) {
                                                if (!$responsiveImage) {
                                                    $image = \Image::get($file->path,360,240);
                                                } else {
                                                    $image = \Image::get($file->path,'','',$responsiveImage);
                                                }
                                                if ($image) {
                                                    $popupContent .= '<img src="'.$image.'">';
                                                }
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                } else {
                                    // other stuff put in as text
                                    $popupContent .= $value . ' ';
                                }
                            }
                        }
                        if ($result->$geolocation) {
                            $geox = substr($result->$geolocation, strpos($result->$geolocation,',') + 1);
                            $geoy = substr($result->$geolocation, 0, strpos($result->$geolocation,','));
                            $coordinates = array(floatval($geox),floatval($geoy));
                        } else {
                            $coordinates = array(
                                floatval($result->$geoxField),
                                floatval($result->$geoyField));
                        }
                        if ($arrConfig['linkurl'] && !$arrConfig['popup']) {
                            $link = $arrConfig['linkurl'];
                            $link = str_replace('[id]', $result->id, $link);
                            $matches =[];
                            if (preg_match('/\[[a-z]+\]/', $link, $matches)) {
                                foreach ($matches as $key => $value) {
                                    $replacedValue = str_replace('[', '', $value);
                                    $replacedValue = str_replace(']', '', $replacedValue);
                                    if ($result->$replacedValue) {
                                        $replacedValue = $result->$replacedValue;
                                    }
                                    $matches[$key] = $replacedValue;
                                }
                                $link = preg_replace(['/\[[a-z]+\]/'], $matches, $link);
                            }
                            $link = $this->replaceInsertTags($link);
                            if (substr($link, 0, 1) == '(' && substr($link, -1, 1) == ')') {
                                $link = substr($link,1);
                                $link = substr($link,0,-1);
                            }
                        }
                        else{
                            $link = $this->replaceInsertTags($objLayer->loc_linkurl);
                        }


                        $arrReturnData[] = array
                        (
                            "id" => $result->id,
                            "type" => 'GeoJSON',
                            "format" => "GeoJSON",
                            "origType" => "table",
                            "locationStyle" => $locstyle,
                            "cluster_fillcolor" => $objLayer->cluster_fillcolor,
                            "cluster_fontcolor" => $objLayer->cluster_fontcolor,
                            "cluster_zoom" => $objLayer->cluster_zoom,
                            "loc_linkurl" => $link,
                            "hover_location" => $objLayer->hover_location,
                            "hover_style" => $objLayer->hover_style,
                            "data" => $arrGeoJson = array
                            (
                                'type' => 'Feature',
                                'geometry' => array(
                                    'type' => 'Point',
                                    'coordinates' => $coordinates,
                                ),
                                'properties' => array
                                (
                                    'projection' => 'EPSG:4326',
                                    'popup' => array(
                                        'async' => false,
                                        'content' =>  \Contao\Controller::replaceInsertTags($popupContent),
                                        'routing_link' => $objLayer->routing_to
                                    ),
                                    'tooltip' =>  \Contao\Controller::replaceInsertTags($result->$tooltipField),
                                    'label' =>  \Contao\Controller::replaceInsertTags($result->$labelField),
                                    'zoom_onclick' => $objLayer -> loc_onclick_zoomto
                                ),
                            ),
                            "settings" => array
                            (
                                "loadAsync" => false,
                                "refresh" => false,
                                "crossOrigine" => false,
                                "boundingBox" => false,
                                "cluster" => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                            )
                        );
                    }
                }
                break;
            case 'link':
                $linkContent = $this->createLayerFromLink($objLayer);
                return $linkContent ? $linkContent : array();
                break;
            default:
                return array();
        }
        if ($objLayer->enablePopup == '') {
            if (isset($arrReturnData[0]["data"]["popup"]) && is_array($arrReturnData[0]["data"]["popup"])) {
                foreach($arrReturnData[0]["data"]["popup"] as $key=>$value) {
                    unset($arrReturnData[0]["data"]["popup"][$key]);
                }
            } else if (isset($arrReturnData[0]['data']['properties']['popup']) && is_array($arrReturnData[0]['data']['properties']['popup'])) {
                foreach($arrReturnData[0]['data']['properties']['popup'] as $key=>$value) {
                    unset($arrReturnData[0]['data']['properties']['popup'][$key]);
                }
            }
        }

        return $arrReturnData;
    }

    private function getUrl($objLayer)
    {
        $strUrl = "";
        if ($objLayer->data_url)
        {
            $strUrl = $objLayer->data_url;
        }
        if ($objLayer->data_file)
        {
            if (\Validator::isUuid($objLayer->data_file))
            {
                // add ressource link
                $objFile = \FilesModel::findByUuid($objLayer->data_file);
                if ($objFile !== null)
                {
                    $strUrl = $objFile->path;
                }
            }
        }

        return $strUrl;
    }

//    private function createC4gPoimResult($objLayer, $secondFetch) {
//        $stringClass = $GLOBALS['con4gis']['stringClass'];
//        // ToDo: evtl. in con4gis_poimanager auslagern
//        $arrReturn = array();
//        /*$arrReturn['type'] =  'c4gforum';
//        $arrReturn['entries'] = array();*/
//        $layers = C4gMapsModel::findAll();
//        $layerNames = array();
//        while($layers->next()) {
//            $layerNames[] = $layers->name;
//        }
//
//        $arrBoards = deserialize($objLayer->forums, true);
//        $objBoardPosts = \Database::getInstance()->prepare(
//            "SELECT tl_c4g_forum_post.*,
//            tl_c4g_forum_thread.name as threadName,
//            tl_c4g_forum.map_tooltip as tooltipSource
//                FROM tl_c4g_forum_post
//                LEFT JOIN tl_c4g_forum_thread ON tl_c4g_forum_thread.id = tl_c4g_forum_post.pid
//                LEFT JOIN tl_c4g_forum ON tl_c4g_forum.id = forum_id
//                    WHERE forum_id IN(" . implode(',', $arrBoards) . ")"
//        )->execute();
//
//        if ($objBoardPosts->numRows)
//        {
//            while ($objBoardPosts->next())
//            {
//                // skip layers, when an explicit layer is requested, since the skipped layers have been reassigned already
//                if ($secondFetch && in_array($objBoardPosts->threadName, $layerNames)) {
//                    continue;
//                }
//                // check tooltip
//                switch ($objBoardPosts->tooltipSource) {
//                    case 'SUBJ':
//                        $mapTooltip = $objBoardPosts->subject;
//                        break;
//                    case 'LINK':
//                        $mapTooltip = $objBoardPosts->linkname;
//                        break;
//                    case 'CUST':
//                        $mapTooltip = $objBoardPosts->loc_tooltip;
//                        break;
//                    case 'OFF': // fallthrough
//                    default:
//                        // no tootltip
//                        $mapTooltip = '';
//                        break;
//                }
//
//                $objAsLayer = (object) array(
//                    'location_type' => 'single',
//                    'loc_geox' => $objBoardPosts->loc_geox,
//                    'loc_geoy' => $objBoardPosts->loc_geoy,
//                    'id' =>  $objBoardPosts->id,
//                    'tooltip' => $mapTooltip
//                );
//
//                $arrReturn[] = array(
//                    "id" => "tl_c4g_forum_post_" . $objBoardPosts->id,
//                    "type" => "GeoJSON",
//                    "threadName" => $stringClass::decodeEntities($objBoardPosts->threadName),
//                    "format" => "GeoJSON",
//                    "origType" => "c4gforum:single",
//                    "locationStyle" => $objBoardPosts->locstyle,
//                    "data" => $this->createGeoJsonResult($objAsLayer, 'tl_c4g_forum_post'),
//                );
//            }
//        }
//        return $arrReturn;
//    }

    private function createC4gForumResult($objLayer, $secondFetch) {
        $stringClass = $GLOBALS['con4gis']['stringClass'];
        // ToDo: evtl. in con4gis_forum auslagern
        $arrReturn = array();
        /*$arrReturn['type'] =  'c4gforum';
        $arrReturn['entries'] = array();*/
        $layers = C4gMapsModel::findAll();
        $layerNames = array();
        while($layers->next()) {
            $layerNames[] = $layers->name;
        }

        $arrBoards = deserialize($objLayer->forums, true);
        $objBoardPosts = \Database::getInstance()->prepare(
            "SELECT tl_c4g_forum_post.*,
            tl_c4g_forum_thread.name as threadName,
            tl_c4g_forum.map_tooltip as tooltipSource
                FROM tl_c4g_forum_post
                LEFT JOIN tl_c4g_forum_thread ON tl_c4g_forum_thread.id = tl_c4g_forum_post.pid
                LEFT JOIN tl_c4g_forum ON tl_c4g_forum.id = forum_id
                    WHERE forum_id IN(" . implode(',', $arrBoards) . ")"
        )->execute();

        if ($objBoardPosts->numRows)
        {
            while ($objBoardPosts->next())
            {
                // skip layers, when an explicit layer is requested, since the skipped layers have been reassigned already
                if ($secondFetch && in_array($objBoardPosts->threadName, $layerNames)) {
                    continue;
                }
                // check tooltip
                switch ($objBoardPosts->tooltipSource) {
                    case 'SUBJ':
                        $mapTooltip = $objBoardPosts->subject;
                        break;
                    case 'LINK':
                        $mapTooltip = $objBoardPosts->linkname;
                        break;
                    case 'CUST':
                        $mapTooltip = $objBoardPosts->loc_tooltip;
                        break;
                    case 'OFF': // fallthrough
                    default:
                        // no tootltip
                        $mapTooltip = '';
                        break;
                }

                $objAsLayer = (object) array(
                    'location_type' => 'single',
                    'loc_geox' => $objBoardPosts->loc_geox,
                    'loc_geoy' => $objBoardPosts->loc_geoy,
                    'id' =>  $objBoardPosts->id,
                    'tooltip' => $mapTooltip,
                );

                $arrReturn[] = array(
                    "id" => "tl_c4g_forum_post_" . $objBoardPosts->id,
                    "type" => "GeoJSON",
                    "threadName" => $stringClass::decodeEntities($objBoardPosts->threadName),
                    "format" => "GeoJSON",
                    "origType" => "c4gforum:single",
                    "locationStyle" => $objBoardPosts->locstyle,
                    "data" => $this->createGeoJsonResult($objAsLayer, 'tl_c4g_forum_post'),
                );
            }
        }
        return $arrReturn;
    }

    protected function createGeoJsonResult($objLayer, $strPopupTable = "")
    {
        $arrGeoJson = array();

        $popup_async = true;

        //ToDo check why we need the second param
        $popup_content = $strPopupTable . ":" . $objLayer->id . ":" . '';
        if ( ($objLayer->popupType == "text") && !$objLayer->popup_info && $objLayer->locstyle) {
            $locstyle = C4gMapLocstylesModel::findByPk($objLayer->locstyle);
            if ($locstyle->popup_info) {
                $popup_content = $locstyle->popup_info;
                $popup_async = false;
            } else {
                $popup_content = '';
                $popup_async = false;
            }
        }

        switch ($objLayer->location_type) {
            case "single":

                $arrGeoJson = array
                (
                    'type' => 'Feature',
                    'geometry' => array(
                        'type' => 'Point',
                        'coordinates' => array(
                            floatval($objLayer->loc_geox),
                            floatval($objLayer->loc_geoy)
                        ),
                    ),
                    'properties' => array
                    (
                        'projection' => 'EPSG:4326',
                        'popup' => array(
                            'async' => $popup_async,
                            'content' =>  \Contao\Controller::replaceInsertTags($popup_content),
                            'routing_link' => $objLayer->routing_to,
                            'showPopupOnActive'=> $objLayer->showPopupOnActive
                        ),
                        'tooltip' =>  \Contao\Controller::replaceInsertTags($objLayer->tooltip),
                        'label' =>  \Contao\Controller::replaceInsertTags($objLayer->loc_label),
                        'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                        'loc_linkurl' => $this->replaceInsertTags($objLayer->loc_linkurl),
                        "hover_location" => $objLayer->hover_location,
                        "hover_style" => $objLayer->hover_style,
                    )
                );

                break;
            case "geojson":

                // check if there is a file to load the content from
                if ($objLayer->data_file) {
                    $objFile = \FilesModel::findByUuid($objLayer->data_file);
                    $objLayer->data_file = $objFile ? (TL_ROOT . '/' . $objFile->path) : false;
                    $data = file_exists($objLayer->data_file) ? file_get_contents($objLayer->data_file) : false;
                }
                // @TODO: URL resource?

                // use data_content if other method failed
                $data = $data ?: $objLayer->data_content;

                // check projection
                switch ($objLayer->data_projection) {
                    case 'MERC':
                        $projection = 'EPSG:3857';
                        break;

                    case 'WGS84':
                    default:
                        $projection = 'EPSG:4326';
                        break;
                }

                if(strpos($data, "Feature") !== false) {
                    $arrGeoJson = json_decode($data, true);
                    $arrGeoJson['properties'] = array(
                        'popup' => array(
                            'async' => $popup_async,
                            'content' =>  \Contao\Controller::replaceInsertTags($popup_content),
                            'routing_link' => $objLayer->routing_to
                        ),
                        'projection' => $projection,
                        'label' => $objLayer->loc_label,
                        'zoom_onclick' => $objLayer -> loc_onclick_zoomto
                    );
                } else {
                    // OL3 needs a feature or feature-collection
                    $arrGeoJson = array
                    (
                        'type' => 'Feature',
                        'geometry' => json_decode($data),
                        'properties' => array
                        (
                            'popup' => array(
                                'async' => $popup_async,
                                'content' => $popup_content,
                                'routing_link' => $objLayer->routing_to
                            ),
                            'projection' => $projection,
                            'tooltip' => $objLayer->tooltip,
                            'label' => $objLayer->loc_label,
                            'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                            'loc_linkurl' => $this->replaceInsertTags($objLayer->loc_linkurl),
                            "hover_location" => $objLayer->hover_location,
                            "hover_style" => $objLayer->hover_style,
                        )
                    );
                }
                break;
        }

        return $arrGeoJson;

    }

    private function createLayerFromLink($layer)
    {
        //$layer is the link to another layer
        // the id of the other layer is stored under $layer->link_id
        $linkedLayer = C4gMapsModel::findById($layer->link_id);
        $arrReturnData = $this->getLayerData($linkedLayer->id);
        return $arrReturnData;

    }

    private function getFolderData($objLayer, $key=false, $folder=false, $count=0)
    {
        $tmp = 'test';
        if (!$folder) {
            $folder = $this->getFolder($objLayer);
        }
        if (!$key) {
            $key =$objLayer->id;
        }
        $folderPath = realpath(TL_ROOT.'/'.$folder);
        $countFiles = 2050;

        if (is_dir($folderPath)) {
            $dict = scandir($folderPath);
            unset($dict[array_search('.', $dict)]);
            unset($dict[array_search('..', $dict)]);
            foreach ($dict as $value) {
//                $value = utf8_encode($value);
                $path = realpath(TL_ROOT."/".$folder."/".$value);
                if (is_dir($path)) {
                    $fileFolder = pathinfo($path);
                    $arrSubFolder = $this->getFolderContent($objLayer, $fileFolder, $key, $count);
                    $count += 1;
                    $data = $this->getFolderData($objLayer,  $arrSubFolder['id'], $folder."/".$value, $count);
                    if ($data) {
                        $arrSubFolder['childsCount'] = count($data);
                        $arrSubFolder['childs'] = $data;
                        $arrData[] = $arrSubFolder;
                    }
                } elseif (is_file($path)) {
                    $fileData = pathinfo($path);
                    $arrFile = $this->getFileContent($objLayer, $folder, $fileData, $key, $countFiles);
                    $countFiles += 2;
                    if($arrFile) {
                        $arrData[] = $arrFile;
                    }
                }
            }
            return $arrData;
        } else {
            return false;
        }
    }

    private function getFolderContent($objLayer, $folderInfo, $key, $count)
    {
        $month = array('01' => 'Januar', '02', 'Frebruar', '03' => 'März', '04' => 'April', '05' => 'Mai', '06' => 'Juni', '07' => 'Juli', '08' => 'August', '09' => 'Sebtember', '10' => 'Oktober', '11' => 'November', '12' => 'Dezember');


        $folder = array(
            "id"           => strval($objLayer->id.$count),
            "pid"          => $key,
            "name"         => utf8_encode($folderInfo['filename']),
            "hide"         => $objLayer->published,
            "display"      => true,
            "type"         => $objLayer->location_type,
            "hasChilds"    => true,
            "childsCount"  => '',
            "childs"       => array()
        );
        return $folder;
    }

    private function getFileContent($objLayer, $folder, $fileInfo, $key, $count)
    {

        switch ($fileInfo['extension']) {
            case 'gpx':
                $child = array
                (
                    "id"        => strval($key.$count),
                    "pid"       => $key,
                    "name"      => utf8_encode($fileInfo['filename']),
                    "hide"      => $objLayer->published,
                    "display"   => true,
                    "type"      => $fileInfo['extension'],
                    "content" => array(),
                    "cssClass"  => $objLayer->cssClass,
                    "childs" => array()
                );

                $childLayerList = array
                (
                    "id" => strval($key.$count),
                    "type" => "urlData",
                    "format" => "GPX",
                    "origType" => "gpx",
                    "locationStyle" => $objLayer->locstyle,
                    "cluster_fillcolor" => $objLayer->cluster_fillcolor,
                    "cluster_fontcolor" => $objLayer->cluster_fontcolor,
                    "cluster_zoom" => $objLayer->cluster_zoom,
                    "loc_linkurl" => $this->replaceInsertTags($objLayer->loc_linkurl),
                    "hover_location" => $objLayer->hover_location,
                    "hover_style" => $objLayer->hover_style,
                    "data" => array
                    (
                        "popup" => array(
                            "content" => utf8_encode($fileInfo['filename']),//"tl_c4g_maps" . ":" . $objLayer->id . ":",
                            "async" => false
                        ),
                        "tooltip" => $objLayer->tooltip,
                        "label" => $objLayer->loc_label,
                        'zoom_onclick' => $objLayer -> loc_onclick_zoomto,
                        "url" => utf8_encode($folder)."/".utf8_encode($fileInfo['basename']),
                    ),
                    "settings" => array
                    (
                        "loadAsync"     => false,
                        "refresh"       => false,
                        "crossOrigine"  => false,
                        "boundingBox"   => false,
                        "cluster"       => $objLayer->cluster_locations ? ($objLayer->cluster_distance ? $objLayer->cluster_distance : 20) : false,
                    )
                );
                $child['content'][] = $childLayerList;
                //        $childs[] = $child;
                return $child;
            case 'xml':
                return false;
            case 'geojson':
                return false;
            default:
                return false;
        }


    }



    private function getFolder($objLayer)
    {
        $strFolder = "";
        if ($objLayer->data_folder)
        {
            if (\Validator::isUuid($objLayer->data_folder))
            {
                // add ressource folder
                $objFolder = \FilesModel::findByUuid($objLayer->data_folder);
                if ($objFolder !== null)
                {
                    $strFolder = $objFolder->path;
                }
            }
        }
        return $strFolder;
    }


}
