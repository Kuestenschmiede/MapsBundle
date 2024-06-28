<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
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
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['opacity']       = array('Initial opacity', 'Set the initial opacity, which can be modified in the starboard.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_key']    	= array('API Key, AppID', 'Please insert key for your user account.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['app_id']     	= array('Key', 'Please insert key for your application.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_port']      = array('Port', 'Please insert the api port.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['published']      = array('Published', 'Check this if you want to publish the overlay map.');

$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom']   = 'Custom';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms']      = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm']      = 'OpenWeatherMap';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_sea']      = 'OpenSeaMap (Seamarks)';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geoimage'] = 'Geolocated Picture';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geotiff']  = 'GeoTIFF';

$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['image_src']   		= ['Choose picture', 'Please choose the picture to be displayed as a baselayer.'];
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['geoimage_json']     = ['JSON to georeference. Please enter a <a href="https://www.json.org/" rel="noopener" target="_blank">JSON</a> to locate the picture. You may use <a href="http://viglino.github.io/Map-georeferencer/" target="_blank" rel="noopener" >this tool</a> or you set the parameters "imageCenter", "imageRotate" und "imageScale" on your own.'];
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
 *WMS
 **/
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_url']  			= array('URL', 'Please insert the Url.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_layers']  			= array('WMS Layer Url','Enter the Url of the Layers.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_version']  			= array('WMS Version','Enter the Version number.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_format']  			= array('WMS Format','Enter the params for the format.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_transparent']  			= array('transparent','click, if the transparency should be switched on.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_srs']  			= array('WMS Url', 'Enter the Url of WMS .');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_gutter']  			= array('WMS gutter','Enter the wms gutter.');
/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['new']        = array('New overlay layer', 'Create a new overlay layer');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['edit']       = array('Edit overlay layer', 'Edit overlay layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['copy']       = array('Duplicate overlay layer', 'Duplicate overlay layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['delete']     = array('Delete overlay layer', 'Delete overlay layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show']       = array('Details', 'Show details of overlay layer ID %s');
