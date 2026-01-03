<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Events;

use Symfony\Contracts\EventDispatcher\Event;

class LoadMapResourcesEvent extends Event
{
    const NAME = 'maps.resources.load';

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
