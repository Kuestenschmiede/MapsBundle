<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Classes\Caches;

use con4gis\CoreBundle\Classes\C4GApiCache;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\DependencyInjection\ContainerInterface;

class C4GLayerApiCache extends C4GApiCache
{
    /**
     * @var C4GLayerApiCache
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
            $namespace = 'con4gis_layerService',
            $defaultLifetime = 0,
            $directory = $container->getParameter('kernel.cache_dir')
        );
    }
}
