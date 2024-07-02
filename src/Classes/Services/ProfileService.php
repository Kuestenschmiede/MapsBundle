<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Services;

use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Classes\Events\LoadProfileEvent;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

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
        $this->eventDispatcher->dispatch($event, $event::NAME);

        $profileId = $event->getProfileId();
        if (!$profileId) {
            $settings = C4gSettingsModel::findSettings();
            if ($settings->defaultprofile) {
                return $settings->defaultprofile;
            }
        }

        return $event->getProfileId();
    }
}
