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
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['name'] 			= array('Nimi', 'Anna yläkerroksen nimi.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider'] 		= array('Tarjoaja', 'Valitse yläkerroksen tarjoaja.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url1'] 			= array('URL 1', 'Anna ensimmäisen URL laattoja varten käyttäen muotoa "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url2'] 			= array('URL 2', 'Anna toinen URL laattoja varten käyttäen muotoa "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url3'] 			= array('URL 3', 'Anna kolmas URL laattoja varten käyttäen muotoa "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url4'] 			= array('URL 4', 'Anna neljäs URL laattoja varten käyttäen muotoa "http://path.to/overlaytiles/${z}/${x}/${y}.ext".');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['attribution'] 	= array('Custom nimeäminen', 'Anna custom nimeäminen tänne jos tarvitsee (valinnainen).');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_key']    	= array('API Key, AppID', 'Aseta avain käyttäjätilillesi.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['app_id']     	= array('Key', 'Aseta avain hakemukseesi.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_port']      = array('Port', 'Please insert the api port.');

$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom'] = 'Custom';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms']    = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm']    = 'OpenWeatherMap';

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openseamap']  					= 'OpenSeaMap - Merimerkit';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_data']  			= 'OpenWeatherMap - Sää';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_stations']  		= 'OpenWeatherMap - Asemat';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_clouds']  			= 'OpenWeatherMap - Pilvet';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_cloudsForecasts']  = 'OpenWeatherMap - Pilvien ennusteet';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_precipitation']  	= 'OpenWeatherMap - Sademäärä';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_precipitationForecasts']  = 'OpenWeatherMap - Sademäärän ennusteet';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_rain']    			= 'OpenWeatherMap - Sade';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_wind']    			= 'OpenWeatherMap - Tuuli';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_pressure']  		= 'OpenWeatherMap - Paine';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_temp']  			= 'OpenWeatherMap - Lämpötila';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_snow']  			= 'OpenWeatherMap - Lumi';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_radar']  			= 'OpenWeatherMap - Tutka';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['custom']     						= 'User defined';


/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['new']        = array('Uusi päällyskerros', 'Luo uusi päällyskerros');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['edit']       = array('Muokkaa päällyskerrosta', 'Muokkaa päällyskerroksen ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['copy']       = array('Monista päällyskerros', 'Monista päällyskerros ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['delete']     = array('Poista päällyskerros', 'Poista päällyskerros ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show']       = array('Yksityiskohdat', 'Näytä päällyskerroksen yksityiskohdat ID %s');
