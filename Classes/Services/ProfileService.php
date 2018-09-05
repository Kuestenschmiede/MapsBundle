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


namespace con4gis\MapsBundle\Classes\Services;

use con4gis\MapsBundle\Classes\Events\LoadProfileEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class ProfileService
{
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;

    /**
     * ProfileService constructor.
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    public function getProfileId($profileId)
    {
        $event = new LoadProfileEvent();
        $event->setProfileId(intval($profileId));
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return $event->getProfileId();
    }

}