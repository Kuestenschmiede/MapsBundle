<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

$GLOBALS['TL_LANG']['tl_c4g_settings']['disabledC4gMapObjects'] = ["Deactivated sources", "Select the sources you want to deactivate in the backend."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['c4g_maps_legend'] = "Maps (con4gis)";
$GLOBALS['TL_LANG']['tl_c4g_settings']['caching'] = ["Activate caching", "Activate caching for con4gis-services. Usability depends on the special case and may need testing."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultprofile'] = ["Default profile", "Choose the default map-profile"];
$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultData'] = ["Generate default data", "Choose wether you want to generate default data"];

/** References */
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['baseLayerService'] ='Baselayer';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['layerService'] ='Map structures';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['layerContentService'] ='Map data';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['editorService'] ='editor';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['locationStyleService'] ='Location styles';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['infoWindowService'] ='Popup data';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['nominatimService'] ='Search';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['caching']['reverseNominatimService'] ='Reverse search';
$GLOBALS['TL_LANG']['tl_c4g_settings']['references']['defaultData']['tables'] ='Data connections';