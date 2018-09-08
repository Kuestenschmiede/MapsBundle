<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 08.09.18
 * Time: 15:20
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