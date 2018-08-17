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

class LoadLayersEvent extends Event
{
    const NAME = "maps.layers.load";

    private $layerData = [];

    private $additionalData = [];

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