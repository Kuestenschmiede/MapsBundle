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

}
