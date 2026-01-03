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

use con4gis\MapsBundle\Resources\contao\models\C4gMapBaselayersModel;

/**
 * Class BaseLayerApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class BaseLayerTileApi
{
    /**
     * Determines the request method and selects the appropriate data result.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */

    public function generate($intBaseLayerId, $z, $x, $y)
    {
        if(\Session::getInstance()->get('baseLayerId'.$intBaseLayerId))
        {
            $baseLayer = \Session::getInstance()->get('baseLayerId'.$intBaseLayerId);
        }
        else{
            $baseLayer = C4gMapBaselayersModel::findById($intBaseLayerId);
            \Session::getInstance()->set('baseLayerId'.$intBaseLayerId,$baseLayer->row());
            $baseLayer = $baseLayer->row();
        }
        switch($baseLayer['provider'])
        {
            case "mapbox":
                if($baseLayer['api_key'] && $baseLayer['app_id'] && $baseLayer['mapbox_type'])
                {
                    if($baseLayer['mapbox_type'] === 'Mapbox')
                    {
                        $url = 'https://api.mapbox.com/styles/v1/' . $baseLayer['app_id'] . '/tiles/'.$z.'/'.$x.'/'.$y.'?access_token=' . $baseLayer['api_key'];
                    }
                    else
                    {
                        $url = "https://api.tiles.mapbox.com/v4/". $baseLayer['app_id'] . '/tiles/'.$z.'/'.$x.'/'.$y.'?access_token=' . $baseLayer['api_key'];
                    }
                }
                else{
                    return "wrong Mapbox configuration";
                }
                break;
//            case "bing":
//                if($baseLayer->apiKey && $baseLayer->style)
//                {
//
//                }
//                break;
            case "here":
                if($baseLayer['api_key'] && $baseLayer['app_id'] && $baseLayer['here_type']){
                    if ($baseLayer['here_type'] == 'normal') {
                        $url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/'.$z.'/'.$x.'/'.$y.'/256/png' .
                            '?app_id='.$baseLayer['app_id'].'&app_code='.$baseLayer['api_key'];
                    }
                    if ($baseLayer['here_type'] == 'transit') {
                        $url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/'.$z.'/'.$x.'/'.$y.'/256/png' .
                            '?app_id='.$baseLayer['app_id'].'&app_code='.$baseLayer['api_key'];
                    }
                    if ($baseLayer['here_type'] == 'pedestrian') {
                        $url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/'.$z.'/'.$x.'/'.$y.'/256/png' .
                            '?app_id='.$baseLayer['app_id'].'&app_code='.$baseLayer['api_key'];
                    }
                    if ($baseLayer['here_type'] == 'terrain') {
                        $url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/'.$z.'/'.$x.'/'.$y.'/256/png' .
                            '?app_id='.$baseLayer['app_id'].'&app_code='.$baseLayer['api_key'];
                    }
                    if ($baseLayer['here_type'] == 'satellite') {
                        $url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/'.$z.'/'.$x.'/'.$y.'/256/png' .
                            '?app_id='.$baseLayer['app_id'].'&app_code='.$baseLayer['api_key'];
                    }
                    if ($baseLayer['here_type'] == 'hybrid') {
                        $url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/'.$z.'/'.$x.'/'.$y.'/256/png' .
                            '?app_id='.$baseLayer['app_id'].'&app_code='.$baseLayer['api_key'];
                    }
                }
                break;
            case "thunder":
                if($baseLayer['api_key'] && $baseLayer['thunderforest_type']){
                    $url = 'https://tile.thunderforest.com/' . $baseLayer['thunderforest_type'] . '/'.$z.'/'.$x.'/'.$y.'.png?apikey=' . $baseLayer['api_key'];
                }
                else
                {
                    return "wrong Thunderforest configuration";
                }
                break;

        }
        $REQUEST = new \Request();
        if ($_SERVER['HTTP_REFERER']) {
            $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
        }
        if ($_SERVER['HTTP_USER_AGENT']) {
            $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
        }
        if($url)
        {
            $REQUEST->send($url);
            return $REQUEST->response;
        }
        else{
            return "wrong baselayer configuration";
        }


    }

}
