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

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['name'] 			= array('Name', 'Please enter the name of the overlay layer.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider'] 		= array('Provider', 'Select the provider of the overlay layer.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url1'] 			= array('URL 1', 'Please provide the 1st URL for the tiles using format "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url2'] 			= array('URL 2', 'Please provide the 2nd URL for the tiles using format "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url3'] 			= array('URL 3', 'Please provide the 3rd URL for the tiles using format "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url4'] 			= array('URL 4', 'Please provide the 4th URL for the tiles using format "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['attribution'] 	= array('Custom attribution', 'Enter a custom attribution here if needed (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_key']    	= array('API Key, AppID', 'Please insert key for your user account.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['app_id']     	= array('Key', 'Please insert key for your application.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_port']      = array('Port', 'Please insert the api port.');

$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom'] = 'Custom';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms']    = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm']    = 'OpenWeatherMap';

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openseamap']  					= 'OpenSeaMap - Seamarks';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_data']  			= 'OpenWeatherMap - Weather';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_stations']  		= 'OpenWeatherMap - Stations';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_clouds']  			= 'OpenWeatherMap - Clouds';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_cloudsForecasts']  = 'OpenWeatherMap - Clouds forecasts';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_precipitation']  	= 'OpenWeatherMap - Precipitation';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_precipitationForecasts']  = 'OpenWeatherMap - Precipitation forecasts';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_rain']    			= 'OpenWeatherMap - Rain';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_wind']    			= 'OpenWeatherMap - Wind';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_pressure']  		= 'OpenWeatherMap - Pressure';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_temp']  			= 'OpenWeatherMap - Temp';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_snow']  			= 'OpenWeatherMap - Schnee';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_radar']  			= 'OpenWeatherMap - Radar';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['custom']     						= 'User defined';


/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['new']        = array('New overlay layer', 'Create a new overlay layer');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['edit']       = array('Edit overlay layer', 'Edit overlay layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['copy']       = array('Duplicate overlay layer', 'Duplicate overlay layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['delete']     = array('Delete overlay layer', 'Delete overlay layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show']       = array('Details', 'Show details of overlay layer ID %s');
