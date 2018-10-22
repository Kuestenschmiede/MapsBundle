<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 22.10.18
 * Time: 15:02
 */

namespace con4gis\MapsBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadMapdataEvent extends Event
{
    const NAME = "maps.mapdata.load";

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