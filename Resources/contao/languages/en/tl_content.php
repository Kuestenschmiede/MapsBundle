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


/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_content']['c4g_map_id'] = array('Mapstructure', 'Choose a mapstructure to be displayed from available maps.');
// $GLOBALS['TL_LANG']['tl_content']['c4g_map_mapsize'] = array('Map size', 'Custom map size, overrides map size defined on map level.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_width'] = array('Map width', 'Custom map width, overrides map size defined on map level.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_height'] = array('Map height', 'Custom map height, overrides map size defined on map level.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_zoom'] = array('Zoomlevel', 'Custom zoomlevel, overrides zoomlevel defined on map level.');
$GLOBALS['TL_LANG']['tl_content']['c4g_map_default_mapservice'] = array('Default base layer', 'Choose from the available base layers, which are defined at the map profile of the chosen map. If none is defined, the profile basemap is taken by default.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_geox'] = array('GEO latitude', 'Enter the GEO X-coordinate (latitude, WGS-84) of the location.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_geoy'] = array('GEO longitude', 'Enter the GEO Y-coordinate (longitude, WGS-84) of the location.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_tooltip']  = array('Tooltip', 'Shows this text as tooltip.');
$GLOBALS['TL_LANG']['tl_content']['c4g_loc_label'] = array('Label', 'Enter a label, which is to be displayed near the location of the map.');
$GLOBALS['TL_LANG']['tl_content']['c4g_locstyle'] = array('Location style', 'Select a location style from the list, which is defined on map profile level. In case you don\'t define a style here it is taken from the map entry.');

/**
 * Legend
 */
$GLOBALS['TL_LANG']['tl_content']['c4g_maps_legend'] = 'Location (con4gis-Maps)';
$GLOBALS['TL_LANG']['tl_content']['c4g_map_legend'] = 'Mapconfiguration';
