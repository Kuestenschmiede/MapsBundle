<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.08.18
 * Time: 16:47
 */

namespace con4gis\MapsBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadMapResourcesEvent extends Event
{
    const NAME = "maps.resources.load";
}