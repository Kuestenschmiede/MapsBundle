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

use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;

/**
 * Class ReverseNominatimApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class ReverseNominatimApi extends \Frontend
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

        $strParams = "";

        switch ($intSearchEngine) {
            case '4':
                if (!empty($objMapsProfile->geosearch_key)) {
                    $strSearchUrl = 'https://'.$objMapsProfile->geosearch_key.'.search.mapservices.kartenkueste.de/reverse.php';
                } else {
                    //ToDo error handling
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

        if (sizeof($arrParams) > 0)
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

        $REQUEST = new \Request();
        if ($_SERVER['HTTP_REFERER']) {
            $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
        }
        if ($_SERVER['HTTP_USER_AGENT']) {
            $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
        }
        $REQUEST->send($strSearchUrl . '?' . $strParams);

        return $REQUEST->response;
    }

}
