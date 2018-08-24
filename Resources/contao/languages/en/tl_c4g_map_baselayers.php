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
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['name']           		= array('Name', 'Please enter the name of the base layer.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['display_name']   		= array('Name in "Starboard"', 'Default: content of field "Name".');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['sort']   		  		= array('Sort', 'Enter a number here to define a user defined order for the base layers in the layer switcher control.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider']       		= array('Provider', 'Select the provider of the base layer.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style']      		= array('OSM style', 'Please select from the given OpenStreetMap styles. Please take attention to the terms of use, given by the provider.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url1'] 		= array('OSM URL 1', 'Please provide the 1st URL for the OpenStreetMap-Style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url2'] 		= array('OSM URL 2', 'Please provide the 2nd URL for the OpenStreetMap-Style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url3'] 		= array('OSM URL 3', 'Please provide the 3rd URL for the OpenStreetMap-Style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url4'] 		= array('OSM URL 4', 'Please provide the 4th URL for the OpenStreetMap-Style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_keyname']    		= array('OSM Keyname', 'Please enter the internal OSM Keyname (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapbox_type']   		= array('Mapbox API', 'Please choose the mapbox api type.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['klokan_type']   		= array('Klokan API', 'Please choose the Klokan api type.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['here_type']   			= array('HERE', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['thunderforest_type']      = array('Thunderforest', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_style']     		= array('Bing Maps style', 'Please select from the given Bing Maps styles.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_key']       		= array('Bing Application Key', 'Enter your Bing Application Key here. You get it from http://bingmapsportal.com/.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['google_style']   		= array('Google Maps style', 'Please select from the given Google Maps styles.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['attribution']    		= array('Custom attribution', 'Enter a custom attribution here if needed (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['minzoomlevel']   		= array('Custom minimum zoomlevel', 'Enter a custom minimum zoomlevel here if needed (0 means minimum zoomlevel of the map as default)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['maxzoomlevel']   		= array('Custom maximum zoomlevel', 'Enter a custom maximum zoomlevel here if needed (19 means maximum zoomlevel of the map as default)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protect_baselayer'] 	= array('Protect this base layer', 'Make this base layer only visible to selected groups.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['hide_in_be']       	= array('Protect API Key', 'Prevents the delivery of the API Key to the frontend. Requests to load baselayers are loaded over the own server (May slow loading of baselayer).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['permitted_groups'] 	= array('Permitted groups', 'The groups for which the base layer is visible.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['style_url']           = array('Custom style-url','Please enter your custom style-url for the server');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['url'] 	        	= array('URL', 'Please provide the URL.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['api_key']       		= array('Access Token / API Key', 'Please insert key for your user account.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['app_id']       		= array('Style ID / Key', 'Please insert key for your application.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium']              = array('Activate cesium', 'If cesium enabled on map profile you can activate the globe for this map.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['layerGroup']              = array('Group of baselayers', 'Group of baselayers as a single one. The sorting of the layers in frontend and backend is the same.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['published']               = array('Veröffentlicht','Basiskarte veröffentlichen?');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_url'] = array('URL', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_layers'] = array('Layer', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_version'] = array('Version', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_format'] = array('Format', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_transparent'] = array('Transparent', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_srs'] = array('', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_gutter'] = array('Gutter', '');

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['baselayers']    = 'Baselayers';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['minZoom']       = 'Minimal zoomlevel';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['maxZoom']       = 'Maximal zoomlevel';
/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm']    	= 'OpenStreetMap';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox']    	= 'Mapbox';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here']       = 'HERE';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'] = 'Thunderforest';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google'] 	= 'Google Maps';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing']   	= 'Bing Maps';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms']        = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan']    	= 'Klokan';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_owm']        = 'OpenWeatherMap';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_group']      = 'Group of baselayers';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'] 			= 'Mapnik';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_osma']   			= 'Osmarender';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_cycle']  			= 'Cyclemap (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german'] 			= 'German Style (openstreetmap.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german_transport']	= 'German Transport Map (memomaps.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_transport']  		= 'Transport Map (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_landscape']  		= 'Landscape Map (opencyclemap.org)';
//$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapquestopen'] 		= 'MapQuest Open (mapquest.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_toner'] 				= 'Toner (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_tonerlines'] 		= 'Toner, only lines (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_tonerlabels'] 		= 'Toner, only labels (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_terrain'] 		    = 'Terrain (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_watercolor'] 		= 'Watercolor (maps.stamen.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_custom'] 			= 'Custom';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox']             = 'Mapbox Studio Style or style url (mapbox.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic']     = 'Mapbox Studio Classic, Editor or map ID (mapbox.com)';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_openmaptiles'] = 'OpenMapTiles (www.openmaptiles.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_basic']  = 'Basic (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_bright'] = 'OSM Bright (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_darkmatter']  = 'Dark Matter (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_positron']  = 'Positron (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_voyager']  = 'Voyager (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_streets']  = 'Streets (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_topo']  = 'Topo (www.tilehosting.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_hybrid']  = 'Satellite Hybrid (www.tilehosting.com)';

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


$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_streets']   = 'Street';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_hybrid']    = 'Hybrid';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_satellite'] = 'Satellite';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_terrain']   = 'Terrain';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_road']        = 'Road';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_hybrid']      = 'Hybrid';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing_aerial']      = 'Aerial';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['new']        = array('New base layer', 'Create a new base layer');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['edit']       = array('Edit base layer', 'Edit base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['copy']       = array('Duplicate base layer', 'Duplicate base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cut']        = array('Move base layer', 'Move base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['delete']     = array('Delete base layer', 'Delete base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['show']       = array('Details', 'Show details of base layer ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['overlays']   = array('Overlay layers', 'Maintain overlay layers of base layer ID %s');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['general_legend']			= 'General';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protection_legend']	    = 'Access protection';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium_legend']           = 'Cesium settings';