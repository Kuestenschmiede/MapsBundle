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

$GLOBALS['TL_LANG']['tl_c4g_settings']['c4g_maps_legend'] = "Map settings (con4gis/maps)";
$GLOBALS['TL_LANG']['tl_c4g_settings']['caching'] = ["Activate caching", "Activate caching for con4gis-services. Usability depends on the special case and may need testing."];

$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultprofile'] = ["Default profile", "Select a map profile to be used as the default profile. The profile will be loaded if no other profile has been set. For example for the Geopicker."];
$GLOBALS['TL_LANG']['tl_c4g_settings']['beGeopickerProfile'] = ['Backend geopicker profile', 'If checked, this profile is used as backend geopicker (structure elements, events, ...). If you often set locations in your application, then you should take some time for the Geopicker profile. For example to integrate the map search and the full screen mode.'];
$GLOBALS['TL_LANG']['tl_c4g_settings']['editorprofile'] = ['Backend editor profile', 'Select a map profile that is used for the backend editor.'];

$GLOBALS['TL_LANG']['tl_c4g_settings']['defaultData'] = ["Generate default data", "Choose wether you want to generate default data"];

$GLOBALS['TL_LANG']['tl_c4g_settings']['editProfiles'] = ['Edit profiles'];

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