<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
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
