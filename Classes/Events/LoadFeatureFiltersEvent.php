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

use con4gis\MapsBundle\Classes\Filter\FeatureFilter;
use Symfony\Component\EventDispatcher\Event;

class LoadFeatureFiltersEvent extends Event
{
    const NAME = 'maps.filters.load';

    /**
     * The layerId for which filters should be generated.
     * @var int
     */
    private $profileId = 0;

    /**
     * @var FeatureFilter[]
     */
    private $filters = [];

    /**
     * @var addData[]
     */
    private $addData = [];

    /**
     * @return int
     */
    public function getProfileId(): int
    {
        return $this->profileId;
    }

    /**
     * @param int $profileId
     */
    public function setProfileId(int $profileId): void
    {
        $this->profileId = $profileId;
    }

    /**
     * @return array
     */
    public function getFilters(): array
    {
        return $this->filters;
    }

    /**
     * @param array $filters
     */
    public function setFilters(array $filters): void
    {
        $this->filters = $filters;
    }
    /**
     * @return array
     */
    public function getAddData(): array
    {
        return $this->addData;
    }

    /**
     * @param array $addData
     */
    public function setAddData(array $addData): void
    {
        $this->addData = $addData;
    }
}
