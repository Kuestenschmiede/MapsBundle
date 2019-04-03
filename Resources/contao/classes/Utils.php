<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Resources\contao\classes;

/**
 * Class Utils
 * @package con4gis\MapsBundle\Resources\contao\classes
 */
class Utils
{
    private static $allLocstyles = false;

    /**
     * Validate a longitude coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateLon($value)
    {
        if (strpos($value, '{{') !== -1) {
            return true;
        }
        if (self::validateGeo($value)) {
            return (($value >= -180.0) && ($value <= 180.0));
        }
        return false;
    }

    /**
     * Validate a latitude coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateLat($value)
    {
        if (strpos($value, '{{') !== -1) {
          return true;
        }
        if (self::validateGeo($value)) {
            return (($value >= -90.0) && ($value <= 90.0));
        }
        return false;
    }

    /**
     * Validate a Geo Coordinate
     * @param  [type] $value [description]
     * @return [type]        [description]
     */
    public static function validateGeo($value)
    {
        if (!isset($value)) {
            return false;
        }
        $value = floatval($value);
        if ($value == 0) {
            return false;
        }
        return true;
    }
    
    /**
     * Returns an array of location types that are supported by maps per default.
     * @return array
     */
    public static function getLocationTypes()
    {
        return ['none','single','table','gpx','kml','geojson','osm','folder','overpass','link', 'startab'];
    }


    /**
     * returns communication key
     * @param $settings
     * @param $serviceId
     * @return bool
     */
    public static function getKey($settings, $service, $params="")
    {
        if ($settings && $settings->con4gisIoUrl && $settings->con4gisIoKey) {

            $hour = date("YmdH",time());

            $key = \Session::getInstance()->get('ciokey_'.$service);
            if ($key) {
                $ciokey = explode('_', $key);
                if ($ciokey[0] == $hour) {
                    return $ciokey[1];
                }
            }

            $keySearchUrl = rtrim($settings->con4gisIoUrl, "/") . "/";
            $keySearchUrl = $keySearchUrl . "getKey.php";
            if ($params && ($params[0] !== '&')) {
                $params = "&".$params;
            }
            $keySearchUrl .= "?key=" . $settings->con4gisIoKey ."&service=".$service.$params;

            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }

            $REQUEST->send($keySearchUrl);
            if ($REQUEST->response) {
                try {
                    $response = \GuzzleHttp\json_decode($REQUEST->response);
                } catch(\Exception $e) {
                    return false;
                }

                if ($response && $response->key) {
                    \Session::getInstance()->set('ciokey_'.$service, $hour.'_'.$response->key);
                    
                    return $response->key;
                }
            }
        }

        return false;
    }
}
