<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

namespace con4gis\MapsBundle\Classes\Events;

use con4gis\MapsBundle\Classes\Filter\FeatureFilter;
use Symfony\Component\EventDispatcher\Event;

class LoadFeatureFiltersEvent extends Event
{
    const NAME = "maps.filters.load";
    
    /**
     * The layerId for which filters should be generated.
     * @var int
     */
    private $layerId = 0;
    
    /**
     * @var FeatureFilter[]
     */
    private $filters = [];
    
    /**
     * @return int
     */
    public function getLayerId(): int
    {
        return $this->layerId;
    }
    
    /**
     * @param int $layerId
     */
    public function setLayerId(int $layerId): void
    {
        $this->layerId = $layerId;
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
}