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

namespace con4gis\MapsBundle\Classes\Caches;


use con4gis\CoreBundle\Resources\contao\classes\C4GAutomator;

class C4GMapsAutomator extends C4GAutomator
{
    /**
     * Purge the con4gis cache for the layerService.
     */
    public static function purgeLayerApiCache()
    {

        C4GLayerApiCache::getInstance()->clearCache();
        // Add a log entry
    }

    /**
     * Purge the con4gis cache for the baselayerService.
     */
    public static function purgeBaselayerApiCache()
    {
        C4GBaselayerApiCache::getInstance()->clearCache();
        // Add a log entry
    }

    /**
     * Purge the con4gis cache for the locationstyleService.
     */
    public static function purgeLocationstyleApiCache()
    {
        C4GLocationstyleApiCache::getInstance()->clearCache();
        // Add a log entry
    }
}