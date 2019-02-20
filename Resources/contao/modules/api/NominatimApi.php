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
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;

/**
 * Class NominatimApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class NominatimApi extends \Frontend
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
        $objSettings = C4gMapSettingsModel::findOnly();

        $strParams = "";

        switch ($intSearchEngine) {
            case '4':
                if (!empty($objMapsProfile->geosearch_key)) { //Deprecated
                    $strSearchUrl = 'https://'.$objMapsProfile->geosearch_key.'.search.mapservices.kartenkueste.de/search.php';
                }
                else if ($objSettings->con4gisIoUrl && $objSettings->con4gisIoKey) {
                    $strSearchUrl = $objSettings->con4gisIoUrl . "search.php";
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
            foreach(unserialize($objMapsProfile->geosearchParams) as $geosearchParam){
                $arrParams = array_merge($arrParams, [$geosearchParam['keys'] => $geosearchParam['params']]);
            }
        }

        if (sizeof($arrParams) > 0)
        {
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
