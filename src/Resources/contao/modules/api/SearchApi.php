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
namespace con4gis\MapsBundle\Resources\contao\modules\api;
use con4gis\CoreBundle\Classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use Contao\Frontend;
use Contao\System;
use Symfony\Component\HttpClient\HttpClient;

/**
 * Class NominatimApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class SearchApi extends Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  int $intProfileId Map profile id
     * @param  array $arrParams
     * @return mixed           JSON data
     */
    public function generate($intProfileId, $arrParams)
    {
        return $this->getSearchResponse($intProfileId, $arrParams);
    }

    /**
     * Returns the layer structure for the map.
     *
     * @param int $id
     */
    protected function getSearchResponse($intProfileId=0, $arrParams)
    {

        $intSearchEngine = 0;

        if ($intProfileId > 0)
        {
            $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);

            if ($objMapsProfile !== null)
            {
                if ($objMapsProfile->geosearch_engine)
                {
                    $intSearchEngine = $objMapsProfile->geosearch_engine;
                }
            }

        }
        $objSettings = C4gMapSettingsModel::findOnly();

        $strParams = "";

        switch ($intSearchEngine) {
            case '6':
                $strSearchUrl = "https://api.stadiamaps.com/geocoding/v1/search?api_key=".$objMapsProfile->geosearch_key;
                break;
            case '5':
                if ($objMapsProfile->geosearch_customengine_url) {
                    $strSearchUrl = $objMapsProfile->geosearch_customengine_url . "v1/search?";
                }
                break;
            case '4':
                if (!empty($objMapsProfile->geosearch_key)) { //Deprecated
                    $strSearchUrl = 'https://'.$objMapsProfile->geosearch_key.'.search.mapservices.kartenkueste.de/search.php';
                }
                else if ($objSettings->con4gisIoUrl && $objSettings->con4gisIoKey) {
                    $strSearchUrl = rtrim($objSettings->con4gisIoUrl, "/") . "/" . "search.php";
                    $arrParams['key'] = $objSettings->con4gisIoKey;
                }
                else {
                    //TODO error handling
                }

                break;
            case '3':
                if (!$objMapsProfile->geosearch_customengine_url)
                {
                    $strSearchUrl = 'https://nominatim.openstreetmap.org/search';
                }
                else
                {
                    $strSearchUrl = $objMapsProfile->geosearch_customengine_url;
                }

                if (!empty($objMapsProfile->geosearch_key)) {
                    $strParams = "key=" . $objMapsProfile->geosearch_key;
                }

                break;
            case '2':
                $strSearchUrl = 'http://open.mapquestapi.com/nominatim/v1/search.php';
                if (!empty($objMapsProfile->geosearch_key)) {
                    $strParams = "key=" . $objMapsProfile->geosearch_key;
                }
                break;
            case '1':
            default:
                $strSearchUrl = 'https://nominatim.openstreetmap.org/search';
                break;
        }
        if($objMapsProfile->geosearchParams){
            foreach(\Contao\StringUtil::deserialize($objMapsProfile->geosearchParams) as $geosearchParam){
                $arrParams = array_merge($arrParams, [$geosearchParam['keys'] => $geosearchParam['params']]);
            }
        }

        if (sizeof($arrParams) > 0)
        {
            if ($intSearchEngine < 5) {
                foreach ($arrParams as $strKey=>$strValue)
                {
                    if ($strKey && $strValue) {
                        if ((strpos($strSearchUrl,'api.opencagedata.com') !== false) && ($strKey=='format') && $strKey && $strValue){
                            if ( (strpos($strSearchUrl, 'json') !== true) &&
                                (strpos($strSearchUrl, 'geojson') !== true) &&
                                (strpos($strSearchUrl, 'xml') !== true) &&
                                (strpos($strSearchUrl, 'map') !== true) &&
                                (strpos($strSearchUrl, 'google-v3-json') !== true)) {
                                $strSearchUrl = addslashes($strSearchUrl).'json';
                                continue;
                            }
                        }

                        if (strlen($strParams) > 0)
                        {
                            $strParams .= "&";
                        }
                        $strParams .= $strKey . "=" . urlencode($strValue);
                    }
                }
            }
            if (($intSearchEngine == '5') || ($intSearchEngine == '6')) {
                if (substr($strSearchUrl, -1) != "?" && substr($strSearchUrl, -1) != "&") {
                    $strSearchUrl .= '&';
                }
                if ($arrParams['q']) {
                    $strSearchUrl .= "text=" . urlencode($arrParams['q']);
                }
                if ($arrParams['limit']) {
                    $strSearchUrl .= "&size=" . $arrParams['limit'];
                }
            }
        }
        $client = HttpClient::create();

        if ($intSearchEngine < 5) {
            $return = $client->request(
                'GET',
                $strSearchUrl . '?' . $strParams,
                [
                    'headers' => [
                        'Referer'       => $_SERVER['HTTP_REFERER'],
                        'User-Agent'    => $_SERVER['HTTP_USER_AGENT']
                    ]
                ]
            );
        }
        else if (($intSearchEngine == 5) || ($intSearchEngine == 6)) {
            $return = $client->request(
                'GET',
                $strSearchUrl,
                [
                    'headers' => [
                        'Referer'       => $_SERVER['HTTP_REFERER'],
                        'User-Agent'    => $_SERVER['HTTP_USER_AGENT']
                    ]
                ]
            );
        }
        $response = $return->getContent() ?: [];
        if ($response) {
            $decoded = json_decode($response, true);
            if (is_array($decoded) && array_key_exists('features', $decoded)) {
                $arrResponse = $decoded['features'] ?? [];
            } elseif (is_object($decoded) && property_exists($decoded, 'features')) {
                $arrResponse = $decoded->features ?? [];
            } else {
                return $response;
            }
            $arrNominatim = [];
            foreach ($arrResponse as $elementResponse) {
                if (is_object($elementResponse)) {
                    $name = $elementResponse->properties->name;
                    if ($elementResponse->properties->county && $elementResponse->properties->county != $name) {
                        $name .= ', ' . $elementResponse->properties->county;
                    }
                    if ($elementResponse->properties->region && $elementResponse->properties->county != $elementResponse->properties->region) {
                        $name .= ', ' . $elementResponse->properties->region;
                    }
                    if ($elementResponse->properties->country) {
                        $name .= ', ' . $elementResponse->properties->country;
                    }
                    $elementNominatim = [
                        "lon"           => $elementResponse->geometry->coordinates[0],
                        "lat"           => $elementResponse->geometry->coordinates[1],
                        "display_name"  => $name,
                        "bounding_box"  => [
                            $elementResponse->bbox[1],
                            $elementResponse->bbox[3],
                            $elementResponse->bbox[0],
                            $elementResponse->bbox[2],
                        ]
                    ];
                } else {
                    $name = $elementResponse['properties']['name'];
                    if ($elementResponse['properties']['county'] && $elementResponse['properties']['county'] != $name) {
                        $name .= ', ' . $elementResponse['properties']['county'];
                    }
                    if ($elementResponse['properties']['region'] && $elementResponse['properties']['county'] != $elementResponse['properties']['region']) {
                        $name .= ', ' . $elementResponse['properties']['region'];
                    }
                    if ($elementResponse['properties']['country']) {
                        $name .= ', ' . $elementResponse['properties']['country'];
                    }
                    $elementNominatim = [
                        "lon"           => $elementResponse['geometry']['coordinates'][0],
                        "lat"           => $elementResponse['geometry']['coordinates'][1],
                        "display_name"  => $name,
                        "bounding_box"  => [
                            $elementResponse['bbox'][1],
                            $elementResponse['bbox'][3],
                            $elementResponse['bbox'][0],
                            $elementResponse['bbox'][2],
                        ]
                    ];
                }

                $arrNominatim[] = $elementNominatim;
            }
            $response = $arrNominatim;
        }

        return $response;
    }
    public static function searchDatabase($strSearch, $arrColumns, $strTable, $database, $whereClause = "", $arrJoin = []) {
        $strSearch = self::updateSearchStringForNonExactSearch($strSearch);
        $sql = "SELECT $strTable.*, ";
        if ($whereClause) {
            $whereClause .= " AND (";
        }
        else {
            $whereClause = "(";
        }
        foreach($arrColumns as $column) {
            if (str_contains($column['name'], '.')) {
                $name = $column['name'];
                $position = strpos($name, ".");
                $name = substr_replace($name, "`", $position+1, 0);
                $name .= '`';
            }
            else {
                $name = $strTable . ".`". $column['name'] . "`";
            } ;
            $weight = $column['weight'];

            $likeParam = '';
            foreach($strSearch as $searchParam) {
                if ($likeParam) {
                    $likeParam .= " OR LOWER(".$name.") LIKE '".$searchParam."'";
                } else {
                    $likeParam = "LIKE '".$searchParam."'";
                }
            }

            $sql .= "IF (LOWER(".$name.") ".$likeParam.", ".$weight.", 0) +";
            $whereClause .= "LOWER(".$name.") ".$likeParam." OR ";
        }
        $strJoin = "";
        foreach ($arrJoin as $join) {
            $strJoin .= "LEFT JOIN " . $join['table']. " ON " . $join['columnLeft'] . "=" . $join['columnRight'] . " ";
        }
        $sql = rtrim($sql, "+");
        $whereClause = rtrim($whereClause, "OR ");
        $whereClause .= ")";
        $sql .= "AS weight FROM $strTable ";
        $sql .= $strJoin;
        $sql .= "WHERE " . $whereClause;
        $sql .= "ORDER BY weight DESC";
        $request = $database->prepare($sql);
        $response = $request->execute()->fetchAllAssoc();
        return $response;
    }
    private static function updateSearchStringForNonExactSearch($searchString)
    {
        $searchString = str_replace(array("."),'', $searchString);
        $arrTerms = explode(' ',
            str_replace(array("(", ")", "[", "]", "{", "}", ",", "-"),' ',$searchString));
        $result = "%";
        foreach ($arrTerms as $term) {
            $result .= strtolower($term) . "%";
        }

        $resultList[] = $result;

        //ToDo add every combinations
        if (count($arrTerms) > 1) {
            $result = "%";
            foreach (array_reverse($arrTerms) as $term) {
                $result .= strtolower($term) . "%";
            }

            $resultList[] = $result;
        }

        if (count($arrTerms) > 2) {
            $result = "%";
            $result .= strtolower($arrTerms[1]) . "%" . strtolower($arrTerms[2]) . "%" . strtolower($arrTerms[0]) . "%";
            $resultList[] = $result;

            $result = "%";
            $result .= strtolower($arrTerms[0]) . "%" . strtolower($arrTerms[2]) . "%" . strtolower($arrTerms[1]) . "%";
            $resultList[] = $result;
        }

        return $resultList;
    }
}
