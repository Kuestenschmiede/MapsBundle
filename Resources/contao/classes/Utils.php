<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
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

}
