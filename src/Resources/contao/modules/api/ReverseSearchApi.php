<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\modules\api;

use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\CoreBundle\Classes\HttpResultHelper;
use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use Contao\Frontend;
use Symfony\Component\HttpClient\HttpClient;


/**
 * Class ReverseNominatimApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class ReverseSearchApi extends Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    public function generate($intProfileId, $arrParams)
    {
        return $this->getReverseNominatimResponse($intProfileId, $arrParams);
    }


    /**
     * Returns the layer structure for the map.
     *
     * @param int $id
     */
    public function getReverseNominatimResponse($intProfileId=0, $arrParams)
    {
        // @TODO: currently uses configurated profile-search for reverse-search
        //        create BE-options to make this more configurable

        // $strSearchUrl = "http://open.mapquestapi.com/nominatim/v1/reverse";

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
                $strSearchUrl = 'https://api.stadiamaps.com/geocoding/v1/reverse?api_key=' . $objMapsProfile->geosearch_key;
                break;
            case '5':
                if (!empty($objMapsProfile->geosearch_key) && !$objMapsProfile->geosearch_customengine_url) {
                    $strSearchUrl = 'https://api.openrouteservice.org/geocode/reverse?api_key=' . $objMapsProfile->geosearch_key;
                }
                else if ($objMapsProfile->geosearch_customengine_url) {
                    $strSearchUrl = $objMapsProfile->geosearch_customengine_url . "v1/reverse?";
                }
                break;
            case '4':
                if (!empty($objMapsProfile->geosearch_key)) { //Deprecated
                    $strSearchUrl = 'https://'.$objMapsProfile->geosearch_key.'.search.mapservices.kartenkueste.de/reverse.php';
                }
                else if ($objSettings->con4gisIoUrl && $objSettings->con4gisIoKey) {
                    $strSearchUrl = rtrim($objSettings->con4gisIoUrl, "/") . "/" . "reverse.php";
                    $arrParams['key'] = $objSettings->con4gisIoKey;
                }
                else {
                    //TODO error handling
                }

                break;
            case '3':
                $arr_url = parse_url($objMapsProfile->geosearch_customengine_url);
                $url_path = $arr_url["path"];
                $url_query = $arr_url["query"];
                if (!$objMapsProfile->geosearch_customengine_url) {
                    $strSearchUrl = 'https://nominatim.openstreetmap.org/reverse';
                } else {
                    if (strpos($url_path, "search") !== false) {
                        $url_path = str_replace('search', 'reverse', $url_path);
                    } else if (strpos($url_path, "forward") !== false) {
                        $url_path = str_replace('forward', 'reverse', $url_path);
                    } else if (strpos($url_query, "search") !== false) {
                        $url_query = str_replace('search', 'reverse', $url_query);
                    } else if (strpos($url_query, "forward") !== false) {
                        $url_query = str_replace('forward', 'reverse', $url_query);
                    } else {
                        $url_path = '/reverse.php';
                    }

                    $arr_url["path"] = $url_path;
                    $arr_url["query"] = $url_query;

                    $strSearchUrl = C4GUtils::unparse_url($arr_url);

                }

                if (!empty($objMapsProfile->geosearch_key)) {
                    $strParams = "key=" . $objMapsProfile->geosearch_key;
                }

                break;
            case '2':
                $strSearchUrl = 'http://open.mapquestapi.com/nominatim/v1/reverse';

                if (!empty($objMapsProfile->geosearch_key)) {
                    $strParams = "key=" . $objMapsProfile->geosearch_key;
                }
                break;
            case '1':
            default:
                $strSearchUrl = 'https://nominatim.openstreetmap.org/reverse';
                break;
        }

        if (sizeof($arrParams) > 0 && $intSearchEngine < 5)
        {
            foreach ($arrParams as $strKey => $strValue)
            {
                if (strlen($strParams) > 0)
                {
                    $strParams .= "&";
                }
                $strParams .= $strKey . "=" . urlencode($strValue);
            }
        }
        else if (($intSearchEngine === "5") || ($intSearchEngine === "6")) {
            foreach ($arrParams as $strKey => $strValue) {

                if (substr($strSearchUrl, -1) != "?" && substr($strSearchUrl, -1) != "&") {
                    $strSearchUrl .= '&';
                }
                if ($strKey === "lat") {
                    $strSearchUrl .= "point.lat=" . urlencode($strValue);
                }
                if ($strKey ==='lon') {
                    $strSearchUrl .= "point.lon=" . urlencode($strValue);
                }
            }
            $strSearchUrl .= "&size=1";
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
        try {
            $response = $return->getContent();
//            $response = $return->getContent(false);
        } catch (\Exception $e) {
            C4gLogModel::addLogEntry("maps", "Fehler in ReverseSeachApi: " . $e->getMessage());
            return "";
        }
        if ($response) {
            $decoded = json_decode($response);
            if (is_array($decoded) && array_key_exists('features', $decoded)) {
                $arrResponse = $decoded['features'] ?? [];
            } elseif (is_object($decoded) && property_exists($decoded, 'features')) {
                $arrResponse = $decoded->features ?? [];
            } else {
                $arrResponse = [];
            }
            if (empty($arrResponse)) {
                return $response;
            }
            $elementResponse = $arrResponse[0];
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

            $response = \GuzzleHttp\json_encode($elementNominatim);
        }
        return $response;
    }

}
