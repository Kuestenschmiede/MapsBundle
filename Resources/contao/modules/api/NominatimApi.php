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
use con4gis\CoreBundle\Resources\contao\classes\HttpResultHelper;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;

/**
 * Class NominatimApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class NominatimApi extends \Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */


    public function generate(array $arrInput)
    {
        // Only allow GET requests
        if (strtoupper($_SERVER['REQUEST_METHOD']) != 'GET') {
            HttpResultHelper::MethodNotAllowed();
        }

        // A profile id is required
        if (count($arrInput) < 1 && !is_numeric($arrInput[0])) {
            HttpResultHelper::BadRequest();
        }

        $intProfileId = intval($arrInput[0]);

        $arrParams = array();

        foreach ($_GET as $key=>$value) {

            if (\Input::get($key)) {
                $arrParams[$key] = \Input::get($key);
            }

        }

        return $this->getNominatimResponse($intProfileId, $arrParams);

    }

    /**
     * Returns the layer structure for the map.
     *
     * @param int $id
     */
    protected function getNominatimResponse($intProfileId=0, $arrParams)
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

        $strParams = "";

        switch ($intSearchEngine) {
            case '4':
                if (!empty($objMapsProfile->geosearch_key)) {
                    $strSearchUrl = 'http://'.$objMapsProfile->geosearch_key.'.search.mapservices.kartenkueste.de/search.php';
                } else {
                    //ToDo error handling
                }

                break;
            case '3':
                if (!$objMapsProfile->geosearch_customengine_url)
                {
                    $strSearchUrl = 'http://nominatim.openstreetmap.org/search';
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
                $strSearchUrl = 'http://nominatim.openstreetmap.org/search';
                break;
        }


        if (sizeof($arrParams) > 0)
        {
            foreach ($arrParams as $strKey=>$strValue)
            {
                if ((strpos($strSearchUrl,'api.opencagedata.com') !== false) && ($strKey=='format')){
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
