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


namespace con4gis\MapsBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadMapResourcesEvent extends Event
{
    const NAME = "maps.resources.load";

    private $mapData = [];

    /**
     * @return array
     */
    public function getMapData(): array
    {
        return $this->mapData;
    }

    /**
     * @param array $mapData
     */
    public function setMapData(array $mapData): void
    {
        $this->mapData = $mapData;
    }
}