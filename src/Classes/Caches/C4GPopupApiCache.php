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
namespace con4gis\MapsBundle\Classes\Caches;

use con4gis\CoreBundle\Classes\C4GApiCache;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Psr\Container\ContainerInterface;

class C4GPopupApiCache extends C4GApiCache
{
    /**
     * @var C4GPopupApiCache
     */
    protected static $instance = null;

    public static function getInstance($container)
    {
        if (!static::$instance) {
            static::$instance = new self($container);
        }

        return static::$instance;
    }

    /**
     * C4GLayerApiCache constructor.
     */
    protected function __construct(ContainerInterface $container)
    {
        $this->cacheInstance = new FilesystemAdapter(
            $namespace = 'con4gis_Popup',
            $defaultLifetime = 0,
            $directory = $container->getParameter('kernel.cache_dir')
        );
    }
}
