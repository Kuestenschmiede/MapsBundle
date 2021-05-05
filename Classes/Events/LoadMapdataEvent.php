<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Events;

use Symfony\Component\EventDispatcher\Event;

class LoadMapdataEvent extends Event
{
    const NAME = 'maps.mapdata.load';

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
    public function setMapData(array $mapData)
    {
        $this->mapData = $mapData;
    }
}
