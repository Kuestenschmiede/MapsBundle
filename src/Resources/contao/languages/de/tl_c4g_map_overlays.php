<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['name'] 			= array('Name', 'Bitte geben Sie den Namen der Overlaykarte an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider'] 		= array('Anbieter', 'Bitte wählen Sie den Anbieter der Overlaykarte aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url1'] 			= array('URL 1', 'Bitte geben Sie die 1. URL der Kacheln der Overlaykarte im Format http://path.to/overlaytiles/${z}/${x}/${y}.ext" an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url2'] 			= array('URL 2', 'Bitte geben Sie die 2. URL der Kacheln der Overlaykarte im Format http://path.to/overlaytiles/${z}/${x}/${y}.ext" an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url3'] 			= array('URL 3', 'Bitte geben Sie die 3. URL der Kacheln der Overlaykarte im Format http://path.to/overlaytiles/${z}/${x}/${y}.ext" an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['url4'] 			= array('URL 4', 'Bitte geben Sie die 4. URL der Kacheln der Overlaykarte im Format http://path.to/overlaytiles/${z}/${x}/${y}.ext" an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['attribution']   = array('Benutzerdefinierte Attribution', 'Hier können Sie, wenn sinnvoll, eine von dem Standardwert abweichende Attribution eingeben (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['infopage']      = ['Infoseite (Legende)', 'Hier kann die Infoseite befüllt werden. Die Infos kommen aus dem Profil, aus der Basiskarte und aus dem Overlay.'];
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['opacity']       = array('Initiale Sichtbarkeit', 'Initiale Sichbarkeit des Overlays in Prozent. Im Frontend anpassbar.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_key'] 	    = array('Applikationsschlüssel (API Key, AppID)', 'Bitte geben Sie hier den Schlüssel zu Ihrem Nutzerkonto an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['app_id']  	    = array('Anwendungsschlüssel (Key)', 'Bitte geben Sie hier den Identifikationsschlüssel für Ihre Voreinstellungen an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['api_port']      = array('Port', 'Bitte geben Sie den Port des API Server an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['published']      = array('Veröffentlicht', 'Setzen Sie diese Checkbox, wenn Sie die Overlaykarte veröffentlichen wollen.');

$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_custom']   = 'Benutzerdefiniert';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_wms']      = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_owm']      = 'OpenWeatherMap (<a href="https://openweathermap.org/api" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_sea']      = 'OpenSeaMap Seezeichen  (<a href="https://openseamap.org" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geoimage'] = 'Georeferenziertes Bild';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['provider_geotiff'] = 'GeoTIFF';

$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['image_src']   		= ['Bild auswählen', 'Bitte wählen Sie das Bild aus, was Sie als Basiskarte anzeigen wollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['geoimage_json']     = ['JSON zur Georeferenzierung', 'Bitte geben Sie hier ein <a href="https://www.json.org/" target="_blank" rel="noopener">JSON</a> zur Georeferenzierung ein. Sie können dieses durch <a href="http://viglino.github.io/Map-georeferencer/">dieses Tool</a> generieren lassen oder manuell die Paramater "imageCenter", "imageRotate" und "imageScale" eintragen.'];


/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openseamap']  					= 'OpenSeaMap - Seezeichen';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_data']  			= 'OpenWeatherMap - Wetterdaten';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_stations']  		= 'OpenWeatherMap - Stationswerte';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_clouds']  			= 'OpenWeatherMap - Wolken';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_cloudsForecasts']  = 'OpenWeatherMap - Wolkenvorhersage';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_precipitation']  	= 'OpenWeatherMap - Atmosphärischer Niederschlag';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_precipitationForecasts']  = 'OpenWeatherMap - Niederschlagsvorhersage';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_rain']    			= 'OpenWeatherMap - Regen';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_wind']    			= 'OpenWeatherMap - Wind';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_pressure']  		= 'OpenWeatherMap - Luftdruck';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_temp']  			= 'OpenWeatherMap - Temperatur';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_snow']  			= 'OpenWeatherMap - Schnee';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['openweathermap_radar']  			= 'OpenWeatherMap - Radar';
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['references']['custom']     						= 'Benutzerdefiniert';
/**
 * wms
 */


$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_url'] = array('URL', 'Geben Sie eine erreichbare URL an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_layers'] = array('Layer', 'Welche Layer sollen dargestellt werden?');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_version'] = array('Version', 'z.B. 1.1.1');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_format'] = array('Format', 'z.B. image/png');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_transparent'] = array('Transparenz', '');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_params_srs']  			= array('WMS Url', 'Geben Sie die Url des WMS an.');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['wms_gutter']  			= array('WMS gutter','');

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['new']        = array('Neue Overlaykarte', 'Eine neue Overlaykarte erstellen');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['edit']       = array('Overlaykarte bearbeiten', 'Overlaykarte ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['copy']       = array('Overlaykarte duplizieren', 'Overlaykarte ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['delete']     = array('Overlaykarte löschen', 'Overlaykarte ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['show']       = array('Details', 'Die Details der Overlaykarte ID %s anzeigen');
