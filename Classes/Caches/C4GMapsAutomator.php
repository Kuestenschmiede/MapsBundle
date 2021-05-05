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

namespace con4gis\MapsBundle\Classes\Caches;

use con4gis\CoreBundle\Classes\C4GAutomator;
use con4gis\CoreBundle\Resources\contao\models\C4gLogModel;
use Contao\System;

class C4GMapsAutomator extends C4GAutomator
{
    /**
     * Purge the con4gis cache for the layerService.
     */
    public function purgeLayerApiCache()
    {
        C4GLayerApiCache::getInstance(System::getContainer())->clearCache();
        C4gLogModel::addLogEntry('maps', 'cleared layer api cache');
    }

    /**
     * Purge the con4gis cache for the baselayerService.
     */
    public function purgeBaselayerApiCache()
    {
        C4GBaselayerApiCache::getInstance(System::getContainer())->clearCache();
        C4gLogModel::addLogEntry('maps', 'cleared baselayer api cache');
    }

    /**
     * Purge the con4gis cache for the locationstyleService.
     */
    public function purgeLocationstyleApiCache()
    {
        C4GLocationstyleApiCache::getInstance(System::getContainer())->clearCache();
        C4gLogModel::addLogEntry('maps', 'cleared locationstyle api cache');
    }

    /**
     * Purge the con4gis map caches.
     */
    public function purgeMapApiCache()
    {
        $this->purgeLayerApiCache();
        $this->purgeBaselayerApiCache();
        $this->purgeLocationstyleApiCache();
    }
}
