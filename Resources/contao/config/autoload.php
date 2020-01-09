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

/**
 * Register the namespaces
 */
ClassLoader::addNamespaces(array
(
	'\con4gis\MapsBundle',
));


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
));


/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
	'c4g_geoeditor' => '/con4gis/MapsBundle/Resources/contao/templates/backend',
	'c4g_geopicker' => '/con4gis/MapsBundle/Resources/contao/templates/backend',
	'c4g_maps'      => '/con4gis/MapsBundle/Resources/contao/templates',
	'popup_default' => '/con4gis/MapsBundle/Resources/contao/templates/popup',
));
