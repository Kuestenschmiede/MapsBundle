<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 02.07.18
 * Time: 15:18
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
    public function setLayerData(array $layerData): void
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
    public function setAdditionalData(array $additionalData): void
    {
        $this->additionalData = $additionalData;
    }
}