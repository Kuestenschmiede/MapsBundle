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

/**
 * Fields
 */

use Contao\StringUtil;

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['name']           		= array('Name', 'Please enter the name of the base layer.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['display_name']   		= array('Name in "Starboard"', 'Default: content of field "Name".');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['sort']   		  		= array('Sort', 'Enter a number here to define a user defined order for the base layers in the layer switcher control.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider']       		= array('Provider', 'Select the provider of the base layer.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style']      		= array('OSM style', 'Please select from the given OpenStreetMap styles. Please take attention to the terms of use, given by the provider.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['stadiaMaps_style']  	= array('Stadia maps style', 'Please select from the given SStedia Maps styles. Please take attention to the terms of use, given by Stedia Maps.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url1'] 		= array('URL 1', 'Please provide the 1st URL for the Style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url2'] 		= array('URL 2', 'Please provide the 2nd URL for the Style (optional)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url3'] 		= array('URL 3', 'Please provide the 3rd URL for the Style (optional)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url4'] 		= array('URL 4', 'Please provide the 4th URL for the Style (optional)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['con4gisIo'] 			= array('con4gis basemaps', 'Please choose your layer from con4gis Support (API key required)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['extend']              = array('extend', 'Additional extend informations (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_zoomlevels']  	= array('Zoom steps', 'Please enter the zoom step count (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_keyname']    		= array('Keyname', 'Please enter the internal Keyname (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapbox_type']   		= array('Mapbox API', 'Please choose the mapbox api type.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapz_type']   			= array('mapz.com', 'Please choose the mapz-baselayer');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['klokan_type']   		= array('Klokan API', 'Please choose the Klokan api type.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['here_type']   			= array('HERE', 'Please choose the map style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['thunderforest_type']      = array('Thunderforest', 'Please choose the map style.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_style']     		= array('Bing Maps style', 'Please select from the given Bing Maps styles.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_key']       		= array('Bing Application Key', 'Enter your Bing Application Key here. You get it from http://bingmapsportal.com/.');

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['image_src']   			= ['Choose picture', 'Please choose the picture to be displayed as a baselayer.'];
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['geoimage_json']           = ['JSON to georeference. Please enter a <a href="https://www.json.org/" rel="noopener" target="_blank">JSON</a> to locate the picture. You may use <a href="http://viglino.github.io/Map-georeferencer/">this tool</a> or you set the parameters "imageCenter", "imageRotate" und "imageScale" on your own.'];
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['google_style']   		= array('Google Maps style', 'Please select from the given Google Maps styles.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['attribution']    		= array('Custom attribution', 'Enter a custom attribution here if needed (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_overlays']['infopage']              = ['Info page (legend)', 'The info page can be filled here. The information comes from the profile, from the base map and from the overlay.'];
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['minzoomlevel']   		= array('Minimum zoomlevel', 'Enter a custom minimum zoomlevel here if needed (0 means minimum zoomlevel of the map as default)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['maxzoomlevel']   		= array('Maximum zoomlevel', 'Enter a custom maximum zoomlevel here if needed (19 means maximum zoomlevel of the map as default)');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['preview_image']   		= array('Preview image', 'Select a preview image that will be displayed in the baselayer switcher below this baselayer.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protect_baselayer'] 	= array('Protect this base layer', 'Make this base layer only visible to selected groups.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['hide_in_be']       	= array('Protect API Key', 'Prevents the delivery of the API Key to the frontend. Requests to load baselayers are loaded over the own server (May slow loading of baselayer).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['permitted_groups'] 	= array('Permitted groups', 'The groups for which the base layer is visible.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['style_url']           = array('Custom style-url','Please enter your custom style-url for the server');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['url'] 	        	= array('URL', 'Please provide the URL.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['api_key']       		= array('Access Token / API Key', 'Please insert key for your user account.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['app_id']       		= array('Style ID / Key', 'Please insert key for your application.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium']              = array('Activate cesium', 'The display as a globe only takes place if you also activate "Enable Cesium" in the corresponding "Map profile".');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['layerGroup']          = array('Group of baselayers', 'Group of baselayers as a single one. The sorting of the layers in frontend and backend is the same.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['published']           = array('Published','Publish base map?');
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

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['consentId']               = ['Consent Tool (optional)', 'Please enter the name of your <a href="https://heyklaro.com/" target="_blank" rel="noopener">Klaro</a> service or the consent-id of your <a href="https://www.contao.solutions/de/loesungen/contao-consent.html" target="_blank" rel="noopener">Contao-Consent</a>, to prevent loading without consent.'];

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm']    = 'OpenStreetMap (<a href="https://operations.osmfoundation.org/policies/tiles" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_otm']    = 'OpenTopoMap (<a href="https://https://opentopomap.org/about" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps'] = 'Stadia Maps (<a href="http://stadiamaps.com" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here']   = 'HERE (<a href="https://developer.here.com" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox'] = 'Mapbox (<a href="https://www.mapbox.com" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz']   = 'Mapz (<a href="https://www.mapz.com" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'] = 'Thunderforest (<a href="https://www.thunderforest.com/maps" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing']   = 'Bing Maps (<a href="https://www.bingmapsportal.com" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan'] = 'Klokan Maptiler / OpenMapTiles (<a href="https://www.maptiler.com" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms']    = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_con4gisIo']    = 'con4gis support (<a href="https://con4gis.org/support" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_owm']    = 'OpenWeatherMap (<a href="https://openweathermap.org/api" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_group']  = 'Groups of layers';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_geoimage']  = 'Georeferenced image';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_geotiff']  = 'GeoTIFF';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_custom'] = 'Custom';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'] 			= 'Mapnik';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_osma']   			= 'Osmarender';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_cycle']  			= 'Cyclemap (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german'] 			= 'German Style (openstreetmap.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german_transport']  	= 'Transport Map (memomaps.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_transport']  		= 'Transport Map (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_landscape']  		= 'Landscape Map (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_custom'] 			= 'Custom';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_studio']             = 'Mapbox Studio Style or style url';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic']     = 'Mapbox Studio Classic, Editor or map ID';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_smooth']      = 'Smooth';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_dark']        = 'Dark';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_satellite']   = 'Satellite';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_outdoors']    = 'Outdoors';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_toner']       = 'Toner';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_terrain']     = 'Terrain';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_watercolor']  = 'Watercolor';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps_osmBright']   = 'OSM Bright';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_softcolor_transport']   = 'Softcolor Transport';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_multicolor_blind']      = 'Multicolor Blind';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_shades_of_gray_blind']  = 'Shades of Gray Blind';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_highlander']            = 'Highlander';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_multicolor_base']       = 'Multicolor Base';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_multicolor_poi']        = 'Multicolor Poi';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz_shades_of_gray']        = 'Shades of Gray';

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

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_streets']   = 'Road map';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_hybrid']    = 'Hybrid map';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_satellite'] = 'Satellite map';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_google_terrain']   = 'Terrain map';

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

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['infotext'] = 'The base map is the lowest map layer (the map image). '.
    'You can load raster or vector maps via different map providers or via your own map servers. The same applies to overlays. '.
    'Overlays are pieces of map, partially transparent maps or fixed map information that is an integral part of the map as an overlying layer. '.
    'Overlays can be added for each map using the left button in the base map list. '.
    'More on <a href="https://docs.con4gis.org/baselayers-con4gis-maps" title="con4gis docs base maps" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';
