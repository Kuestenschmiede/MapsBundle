<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Classes;

class LatLng
{
    protected $lat;
    protected $lng;
    protected $crs;
    const EARTH_RADIUS = 6378.137;
    const LAT_WIDTH = 111.3;

    public function __construct($lat = 0, $lng = 0, $crs = 'etrs89')
    {
        $this->lat = $lat;
        $this->lng = $lng;
        $this->crs = $crs;
    }

    public function getLng()
    {
        return $this->lng;
    }

    public function getLat()
    {
        return $this->lat;
    }

    public function setLng($lng)
    {
        $this->lng = $lng;
    }

    public function setLat($lat)
    {
        $this->lat = $lat;
    }

    public function getCrs()
    {
        return $this->crs;
    }

    public function setCrs($crs)
    {
        $this->crs = $crs;
    }
    public function getLatWidth()
    {
        return self::LAT_WIDTH;
    }
    public function getLngWidth($lat = 0)
    {
        return 2 * M_PI * self::EARTH_RADIUS * cos(deg2rad($lat)) / 360;
    }
    public function getDistance(LatLng $latLng)
    {
        $lat = ($this->getLat() + $latLng->getLat()) / 2 * 0.01745;
        $dy = self::LAT_WIDTH * ($this->getLat() - $latLng->getLat());
        $dx = self::LAT_WIDTH * cos($lat) * ($this->getLng() - $latLng->getLng());

        return sqrt(pow($dx, 2) + pow($dy, 2));
    }
    public function getEarthRadius()
    {
        return self::EARTH_RADIUS;
    }

    public function __toString()
    {
        return $this->lat . ',' . $this->lng;
    }

    public function toArray()
    {
        return ['lat' => $this->lat, 'lng' => $this->lng];
    }

    public static function fromString($string = '0,0')
    {
        if (!is_string($string)) {
            throw new \InvalidArgumentException(sprintf('Expecting string, %s given', gettype($string)));
        }
        if (strstr($string, ',') !== false) {
            $array = explode(',', $string);
        } else {
            $array = explode(' ', $string);
        }
        if (count($array) != 2) {
            throw new \InvalidArgumentException('$string is not a valid LatLng string. Valid formats: "lat,lng"|"lat lng"');
        }

        return new self((float) $array[0], (float) $array[1]);
    }
    public function getLatLngBounds(LatLng $latLng, $span = 0)
    {
        $lngWidth = $this->getLngWidth($latLng->getLat());
        $latWidth = self::LAT_WIDTH;

        return [
            'left' => new LatLng($latLng->getLat(), $latLng->getLng() - ($span / $lngWidth)),
            'upper' => new LatLng($latLng->getLat() + ($span / $latWidth), $latLng->getLng()),
            'right' => new LatLng($latLng->getLat(), $latLng->getLng() + ($span / $lngWidth)),
            'lower' => new LatLng($latLng->getLat() - ($span / $latWidth), $latLng->getLng()),
        ];
    }
}
