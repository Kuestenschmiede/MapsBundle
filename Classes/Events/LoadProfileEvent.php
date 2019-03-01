<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */


namespace con4gis\MapsBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadProfileEvent extends Event
{
    const NAME = "maps.profile.load";

    private $profileId = -1;

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
    public function setProfileId(int $profileId)
    {
        $this->profileId = $profileId;
    }

}