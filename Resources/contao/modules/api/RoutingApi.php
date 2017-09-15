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
        $strRoutingUrl = "http://router.project-osrm.org/";
        if ($intProfileId > 0)
        {
            $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);

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
        return $REQUEST->response;
    }
}
