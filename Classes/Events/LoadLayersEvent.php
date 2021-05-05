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

class LoadLayersEvent extends Event
{
    const NAME = 'maps.layers.load';

    private $layerData = [];

    private $additionalData = [];

    private $layerService = null;

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
     * @return array
     */
    public function getLayerService(): array
    {
        return $this->layerService;
    }

    /**
     * @param array $layerData
     */
    public function setLayerService(array $layerService)
    {
        $this->layerService = $layerService;
    }

    /**
     * @return array
     */
    public function getAdditionalData(): array
    {
        return $this->additionalData;
    }

    /**
     * @param array $additionalData
     */
    public function setAdditionalData(array $additionalData)
    {
        $this->additionalData = $additionalData;
    }
}
