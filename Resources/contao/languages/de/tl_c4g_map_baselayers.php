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
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['name']           			= array('Name', 'Bitte geben Sie den Namen der Basiskarte an.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['display_name']   			= array('Name im Starboard', 'Falls abweichend vom Feld "Name".');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['sort']   		   			= array('Sortierung', 'Geben Sie einen Wert für die aufsteigende Sortierung ein, falls Sie die definierten Basiskarten im Starboard in einer selbstdefinierten Reihenfolge anzeigen möchten.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider']       			= array('Anbieter', 'Bitte wählen Sie den Anbieter der Basiskarte aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style']      			= array('OSM Kartenstil', 'Bitte wählen Sie den Kartenstil von OpenStreetMap aus. Beachten Sie bitte die geltenden Nutzungsbedingungen, der Anbieter.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url1'] 			= array('URL 1', 'Bitte geben Sie die 1. URL des Kartenstils ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url2'] 			= array('URL 2', 'Bitte geben Sie die 2. URL des Kartenstils ein (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url3'] 			= array('URL 3', 'Bitte geben Sie die 3. URL des Kartenstils ein (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url4'] 			= array('URL 4', 'Bitte geben Sie die 4. URL des Kartenstils ein (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['extend']                  = array('extend', 'Zusätzliche extend Informationen (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_zoomlevels']  	= array('Zoom-Stufen', 'Bitte geben Sie die Anzahl der verfügbaren Zoom-Stufen des Kartenstils an (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_keyname']    			= array('Keyname', 'Bitte geben Sie den internen Keyname an (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapbox_type']   			= array('Mapbox API', 'Bitte wählen Sie die Mapbox API Version aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['klokan_type']   			= array('Klokan API', 'Bitte wählen Sie die Klokan API Version aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['here_type']   			= array('HERE', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['thunderforest_type']      = array('Thunderforest', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_style']     			= array('Bing Maps Kartenstil', 'Bitte wählen Sie den Kartenstil von Bing Maps aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_key']       			= array('Bing Applikationsschlüssel (Key)', 'Bitte geben Sie hier ihren Bing Applikationsschlüssel (Key) ein. Falls Sie noch keinen besitzen, dann generieren Sie ihn sich auf http://bingmapsportal.com/.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['google_style']   			= array('Google Maps Kartenstil', 'Bitte wählen Sie den Kartenstil von Google Maps aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['attribution']    			= array('Benutzerdefinierte Attribution', 'Hier können Sie, wenn sinnvoll, ein vom Standardwert abweichenden Copyright-Text eingeben (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['minzoomlevel']   			= array('Benutzerdefinierte minimale Zoomstufe', 'Hier können Sie eine vom Standardwert abweichende minimate Zoomstufe eingeben. 0=Standard');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['maxzoomlevel']   			= array('Benutzerdefinierte maximale Zoomstufe', 'Hier können Sie eine vom Standardwert abweichende maximale Zoomstufe eingeben. 19=Standard');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protect_baselayer'] 		= array('Diese Basiskarte schützen', 'Macht diese Basiskarte nur für ausgewählte Gruppen sichtbar.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['hide_in_be']       		= array('API-Key schützen', 'API-Keys werden nicht ans Frontend ausgeliefert und die Anfrage zur Basiskarte wird über den eigenen Server geleitet (Kann das Laden des Layers verlangsamen).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['permitted_groups'] 		= array('Berechtigte Gruppen', 'Die Gruppen, für die diese Basiskarte sichtbar ist.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['url'] 	        		= array('URL', 'Geben Sie die Serveradresse ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['api_key']       			= array('Access Token / API Key', 'Bitte geben Sie hier den Schlüssel zu Ihrem Nutzerkonto an.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['app_id']       			= array('Style ID / Anwendungsschlüssel', 'Bitte geben Sie hier den Identifikationsschlüssel für Ihre Voreinstellungen an (z.B. bei Mapbox kontoname/style).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium']                  = array('Cesium einschalten', 'Wenn im Kartenrofil Cesium aktiviert ist, kann über diesen Schalter eine einzelne Basikarte als Globus dargestellt werden.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['layerGroup']              = array('Gruppe von Basiskarten', 'Gruppe von Basiskarten. Die Reihenfolge im Backend entspricht der im Frontend. Die Basiskarten werden nur zwischen den anzugebenden Zoomleveln angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['published']               = array('Veröffentlicht','Basiskarte veröffentlichen?');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_url'] = array('URL', 'Geben Sie eine erreichbare URL an.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_layers'] = array('Layer', 'Welche Layer sollen dargestellt werden?');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_version'] = array('Version', 'z.B. 1.1.1');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_format'] = array('Format', 'z.B. image/png');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_transparent'] = array('Transparenz', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_srs'] = array('', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_gutter'] = array('Gutter', '');

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['baselayers']    = 'Basiskarten';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['minZoom']       = 'Minimale Zoomstufe';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['maxZoom']       = 'Maximale Zoomstufe';
/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm']    = 'OpenStreetMap (verschiedene Anbieter)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here']   = 'HERE';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox'] = 'Mapbox';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'] = 'Thunderforest';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google'] = 'Google Maps';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing']   = 'Bing Maps';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan'] = 'Klokan';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms']    = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_owm']    = 'OpenWeatherMap';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_group']  = 'Gruppe von Layern';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_custom'] = 'Benutzerdefiniert';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'] 			= 'Mapnik';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_osma']   			= 'Osmarender';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_cycle']  			= 'Fahrradkarte (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german'] 			= 'Deutschland Stil (openstreetmap.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german_transport']  	= 'ÖPNV Karte (memomaps.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_transport']  		= 'ÖPNV Karte (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_landscape']  		= 'Geländekarte (opencyclemap.org)';
//$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapquestopen']  		= 'MapQuest Open (mapquest.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_toner'] 				= 'Schwarz-Weiß (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_tonerlines'] 		= 'Schwarz-Weiß, nur Linien (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_tonerlabels'] 		= 'Schwarz-Weiß, nur Beschriftung (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_terrain'] 		    = 'Gelände (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_watercolor'] 		= 'Wasserfarben (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_custom'] 			= 'Benutzerdefiniert';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox']             = 'Mapbox Studio Style bzw. style url (mapbox.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic']     = 'Mapbox Studio Classic, Editor bzw. map ID (mapbox.com)';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_openmaptiles'] = 'OpenMapTiles (www.openmaptiles.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_basic']  = 'Basic (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_bright'] = 'OSM Bright (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_darkmatter']  = 'Dark Matter (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_positron']  = 'Positron (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_voyager']  = 'Voyager (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_streets']  = 'Streets (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_topo']  = 'Topo (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_hybrid']  = 'Satellite Hybrid (www.tilehosting.com)';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['style_url'] = array('Manuelle Style-Url','Bitte geben Sie hier die Style_url für den eigenen Server ein');

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_normal']        = 'Normal (here.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_transit']       = 'Transit (here.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_pedestrian']    = 'Pedestrian (here.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_terrain']       = 'Terrain (here.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_satellite']     = 'Satellite (here.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here_hybrid']        = 'Hybrid (here.com)';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_opencyclemap'] = "OpenCycleMap (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_transport'] = "Transport (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_landscape'] = "Landscape (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_outdoors'] = "Outdoors (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_transport_dark'] = "Transport Dark (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_spinal_map'] = "Spinal Map (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_pioneer'] = "Pioneer (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_mobile_atlas'] = "Mobile Atlas (thunderforest.com)";
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest_neighbourhood'] = "Neighbourhood (thunderforest.com)";

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_streets']   = 'Straßenkarte';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_hybrid']    = 'Hybridkarte';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_satellite'] = 'Satellitenkarte';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_terrain']   = 'Geländekarte';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_road']        = 'Straßenkarte';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_hybrid']      = 'Hybridkarte';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_aerial']      = 'Luftbild';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['new']        = array('Neue Basiskarte', 'Eine neue Basiskarte erstellen');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['edit']       = array('Basiskarte bearbeiten', 'Basiskarte ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['copy']       = array('Basiskarte duplizieren', 'Basiskarte ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cut']        = array('Basiskarte verschieben', 'Basiskarte ID %s verschieben');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['delete']     = array('Basiskarte löschen', 'Basiskarte ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['show']       = array('Details', 'Die Details der Basiskarte ID %s anzeigen');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['overlays']   = array('Overlaykarten', 'Overlaykarten der Basiskarte ID %s verwalten');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['general_legend']		= 'Allgemeine Daten';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protection_legend']	= 'Zugriffsschutz';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium_legend']       = 'Cesium Einstellungen';
