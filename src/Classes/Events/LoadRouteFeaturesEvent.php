<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Classes\Events;

use Symfony\Contracts\EventDispatcher\Event;

class LoadRouteFeaturesEvent extends Event
{
    const NAME = 'load.route.features';

    private $profileId = 0;

    private $layerId = 0;

    private $detour = 0;

    private $points = [];

    private $features = [];

    private $type = "";

    private $bbox = '';

    /**
     * @return int
     */
    public function getProfileId()
    {
        return $this->profileId;
    }

    /**
     * @param int $profileId
     */
    public function setProfileId($profileId)
    {
        $this->profileId = $profileId;
    }

    /**
     * @return int
     */
    public function getLayerId()
    {
        return $this->layerId;
    }

    /**
     * @param int $layerId
     */
    public function setLayerId($layerId)
    {
        $this->layerId = $layerId;
    }

    /**
     * @return int
     */
    public function getDetour()
    {
        return $this->detour;
    }

    /**
     * @param int $detour
     */
    public function setDetour($detour)
    {
        $this->detour = $detour;
    }

    /**
     * @return array
     */
    public function getPoints()
    {
        return $this->points;
    }

    /**
     * @param array $points
     */
    public function setPoints($points)
    {
        $this->points = $points;
    }

    /**
     * @return array
     */
    public function getFeatures()
    {
        return $this->features;
    }

    /**
     * @param array $features
     */
    public function setFeatures($features)
    {
        $this->features = $features;
    }

    /**
     * @return string
     */
    public function getBbox()
    {
        return $this->bbox;
    }

    /**
     * @param string $bbox
     */
    public function setBbox($bbox)
    {
        $this->bbox = $bbox;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType(string $type): void
    {
        $this->type = $type;
    }

}
