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

class LoadLayerContentDataEvent extends Event
{
    const NAME = 'maps.layercontent.load';

    private $layerData = [];
    private $layerId = 0;
    private $extent = [];

    /**
     * @return array
     */
    public function getLayerData(): array
    {
        return $this->layerData;
    }

    /**
     * @param array $layerData
     */
    public function setLayerData(array $layerData)
    {
        $this->layerData = $layerData;
    }

    /**
     * @return int
     */
    public function getLayerId(): int|string
    {
        return $this->layerId;
    }

    /**
     * @param int $layerId
     */
    public function setLayerId(int|string $layerId): void
    {
        $this->layerId = $layerId;
    }

    /**
     * @return array
     */
    public function getExtent(): array
    {
        return $this->extent;
    }

    /**
     * @param array $extent
     */
    public function setExtent(array $extent): void
    {
        $this->extent = $extent;
    }
}
