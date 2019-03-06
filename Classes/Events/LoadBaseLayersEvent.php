<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadBaseLayersEvent extends Event
{
    const NAME = "maps.baseLayers.load";

    private $baseLayerData = [];

    private $additionalData = [];

    /**
     * @return array
     */
    public function getBaseLayerData(): array
    {
        return $this->baseLayerData;
    }

    /**
     * @param array $baseLayerData
     */
    public function setBaseLayerData(array $baseLayerData)
    {
        $this->baseLayerData = $baseLayerData;
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