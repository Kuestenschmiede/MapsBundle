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
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['name']           		= array('Nimi', 'Laita pohjakerroksen nimi.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['display_name']   		= array('Nimi "Starboard"', 'Oletus: kentän sisältö "Nimi".');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['sort']   		  		= array('Järjestä', 'Kirjoita numero tähän määrittääksesi käyttäjän määrittämä järjestys pohjakerroksia varten kerroksen vaihtaja ohjauksessa.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider']       		= array('Tarjoaja', 'Valitse pohjakerroksen tarjoaja.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style']      		= array('OSM tyyli', 'Valitse jokin annetuista OpenStreetMap tyyleistä. Huomioi tarjoajan käyttöehdot.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url1'] 		= array('OSM URL 1', 'Anna ensimmäinen URL OpenStreetMap-tyyliä varten.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url2'] 		= array('OSM URL 2', 'Anna toinen URL OpenStreetMap-tyyliä varten.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url3'] 		= array('OSM URL 3', 'Anna kolmas URL OpenStreetMap-tyyliä varten.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url4'] 		= array('OSM URL 4', 'Anna neljäs URL OpenStreetMap-tyyliä varten.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_keyname']    		= array('OSM näppäinnimi', 'Anna sisäinen OSM näppäinnimi (valinnainen).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapbox_type']   		= array('Mapbox API', 'Valitse mapboxin API tyyppi.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['here_type']   		= array('HERE', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['thunderforest_type']  = array('Thunderforest', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_style']     		= array('Bing Maps tyyli', 'Valitse jokin annetuista Bing Maps tyyleistä.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_key']       		= array('Bing sovellusavain', 'Kirjoita Bing sovellusavain tähän. Saat sen täältä: http://bingmapsportal.com/.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['google_style']   		= array('Google Maps tyyli', 'Anna jokin annetuista Google Maps tyyleistä.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['attribution']    		= array('Custom attribuutti', 'Laita custom atribuutti tänne jos tarvitsee (valinnainen).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['minzoomlevel']   		= array('Custom minimum zoomlevel', 'Enter a custom minimum zoomlevel here if needed (0 means minimum zoomlevel of the map as default)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['maxzoomlevel']   		= array('Kirjoita custom maksimi zoomlevel tähän jos tarvitsee (19 tarkoittaa kartan maksimi zoomleveliä)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protect_baselayer'] 	= array('Protect API Key', 'Prevents the delivery of the API Key to the frontend. Requests to load baselayers are loaded over the own server (May slow loading of baselayer).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['hide_in_be']       	= array('Protect this base layer', 'Make this base layer only visible to selected groups.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['permitted_groups'] 	= array('Sallitut ryhmät', 'Ryhmät joille pohjakerros on näkyvissä.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['api_key']       		= array('Pääsy Token / API Avain', 'Aseta avain käyttäjätilillesi.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['app_id']       		= array('Style ID / Avain', 'Lisää avain hakemukseesi.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium']              = array('Activate cesium', 'If cesium enabled on map profile you can activate the globe for this map.');

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_url'] = array('URL', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_layers'] = array('Kerros', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_version'] = array('Versio', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_format'] = array('Muoto', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_transparent'] = array('Läpinäkyvä', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_srs'] = array('', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_gutter'] = array('Gutter', '');


/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm']    	= 'OpenStreetMap';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here']       = 'HERE';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox']    	= 'Mapbox';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'] = 'Thunderforest';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google'] 	= 'Google Maps';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing']   	= 'Bing Maps';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms']        = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_owm']        = 'OpenWeatherMap';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'] 			= 'Mapnik';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_osma']   			= 'Osmarender';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_cycle']  			= 'Cyclemap (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german'] 			= 'Saksalainen tyyli (openstreetmap.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german_transport']	= 'Saksalainen Transport Map (memomaps.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_transport']  		= 'Transport Map (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_landscape']  		= 'Landscape Map (opencyclemap.org)';
//$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapquestopen'] 		= 'MapQuest Open (mapquest.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_toner'] 				= 'Toner (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_tonerlines'] 		= 'Toner, only lines (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_tonerlabels'] 		= 'Toner, only labels (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_terrain'] 		    = 'Terrain (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_watercolor'] 		= 'Vesiväri (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_custom'] 			= 'Custom';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox']             = 'Mapbox Studio Style tai style url (mapbox.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic']     = 'Mapbox Studio Classic, Editor tai map ID (mapbox.com)';

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



$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_streets']   = 'Katu';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_hybrid']    = 'Hybridi';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_satellite'] = 'Satelliitti';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_terrain']   = 'Maasto';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_road']        = 'Tie';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_hybrid']      = 'Hybridi';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_aerial']      = 'Antenni';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['new']        = array('Uusi pohjakerros', 'Luo uusi pohjakerros');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['edit']       = array('Muokkaa pohjakerrosta', 'Edit base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['copy']       = array('Monista pohjakerroksia', 'Monista pohjakerroksia ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cut']        = array('Move base layer', 'Move base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['delete']     = array('Poista pohjakerros', 'Poista pohjakerros ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['show']       = array('Yksityiskohdat', 'Näytä pohjakerroksen yksityiskohdat ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['overlays']   = array('Päällys kerrokset', 'Ylläpidä pohjakerroksen päällys kerroksia ID %s');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['general_legend']			= 'Yleinen';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protection_legend']	    = 'Pääsyn suojaus';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium_legend']           = 'Cesium settings';