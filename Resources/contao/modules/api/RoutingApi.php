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

/**
 * Class RoutingApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class RoutingApi extends \Frontend
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    public function generate($profileId, $locations)
    {
        $strParams = "";
        foreach ($_GET as $key=>$value) {
            if (\Input::get($key)) {
                if (strlen($strParams) > 0) {
                    $strParams .= "&";
                }
                if ($key == "loc_to" || $key == "loc_from") {
                    $strParams .= "loc=" . \Input::get($key);
                } else {
                    $strParams .= $key . "=" . \Input::get($key);
                }
            }
        }
       return $this->getRoutingResponse($locations, $strParams, $profileId);
    }

    /**
     * Returns the layer structure for the map.
     * @param $arrInput
     * @param $strParams
     * @param $intProfileId
     * @return string
     */
    protected function getRoutingResponse($arrInput, $strParams, $intProfileId)
    {
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);
        if($objMapsProfile->router_api_selection == '1' || $objMapsProfile->router_api_selection == '0'){
            $strRoutingUrl = "http://router.project-osrm.org/";
            if ($intProfileId > 0)
            {

                if ($objMapsProfile !== null)
                {
                    if ($objMapsProfile->router_viaroute_url)
                    {
                        $strRoutingUrl = $objMapsProfile->router_viaroute_url;
                        if(substr($strRoutingUrl,-1,1)!='/'){
                            $strRoutingUrl= $strRoutingUrl.'/';
                        }
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

            if ($objMapsProfile && $objMapsProfile->router_api_selection == '1') {
                $url = "";
                for ($i = 0; $i< sizeof($arrInput); $i++) {
                    $url = $url. explode(",",$arrInput[$i])[1].','.explode(",",$arrInput[$i])[0].';';
                }
                $url = substr($url,0,strlen($url)-1);
                $REQUEST->send($strRoutingUrl . 'route/v1/driving/'.$url.'?steps=true&overview=full&alternatives=true');
            } else {
                $REQUEST->send($strRoutingUrl . '?' . $strParams);
            }
            $response = $REQUEST->response;
        }
        else{
            $strRoutingUrl = "https://api.openrouteservice.org/directions?";
            $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);
            $apiKey = "api_key=".$objMapsProfile->router_api_key;
            $coordinates = "&coordinates=";
            for($i = 0; $i < sizeof($arrInput); $i++){
                $coordinates .=  explode(",",$arrInput[$i])[1].','.explode(",",$arrInput[$i])[0].'|';
            }
            $coordinates = substr($coordinates,0,strlen($coordinates)-1);
            $profile = "&profile=driving-car&format=json&language=de&geometry_format=encodedpolyline&maneuvers=true&preference=fastest";
            $url = $strRoutingUrl.$apiKey.$coordinates.$profile;
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($url);
            $response = $REQUEST->response;
            if($objMapsProfile->router_alternative == "1"){
                $REQUEST2 = new \Request();
                if ($_SERVER['HTTP_REFERER']) {
                    $REQUEST2->setHeader('Referer', $_SERVER['HTTP_REFERER']);
                }
                if ($_SERVER['HTTP_USER_AGENT']) {
                    $REQUEST2->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
                }
                $url = str_replace("preference=fastest","preference=shortest",$url);
                $REQUEST2->send($url);
                $response = \GuzzleHttp\json_decode($response, true);
                $response['routes'][1] = \GuzzleHttp\json_decode($REQUEST2->response, true)['routes'][0];
                $response = \GuzzleHttp\json_encode($response);
            }


        }

        return $response;
    }
}
