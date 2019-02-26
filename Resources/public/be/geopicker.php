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

// Set the script name
define('TL_SCRIPT', 'bundles/con4gismaps/be/geopicker.php');

// Initialize the system
define('TL_MODE', 'BE');

$initialize = $_SERVER["DOCUMENT_ROOT"].'/system/initialize.php';
if (!file_exists($initialize)) {
    $initialize = '../../../../../system/initialize.php';
    if (!file_exists($initialize)) {
        $initialize = '../../../system/initialize.php';
    }
}

require_once($initialize);

// require($_SERVER['DOCUMENT_ROOT'] . '/con4gis/system/initialize.php'); // temp for symlink-support

// Run the controller
$controller = new \con4gis\MapsBundle\Resources\contao\classes\GeoPicker();
$controller->run();
