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

namespace con4gis\MapsBundle\Classes\Services;


use con4gis\MapsBundle\Classes\Events\LoadFeatureFiltersEvent;
use con4gis\MapsBundle\Classes\Filter\FeatureFilter;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class FilterService
{
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;
    
    /**
     * @return FeatureFilter[]
     */
    public function createFilters()
    {
        $event = new LoadFeatureFiltersEvent();
        $this->eventDispatcher->dispatch($event);
        return $event->getFilters();
    }
}