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
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['name']           			= array('Name', 'Bitte geben Sie den Namen der Basiskarte an.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['display_name']   			= array('Name im Frontend', 'Falls abweichend vom Feld "Name".');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['sort']   		   			= array('Sortierung', 'Geben Sie einen Wert für die aufsteigende Sortierung ein, falls Sie die definierten Basiskarten im Frontend in einer selbstdefinierten Reihenfolge anzeigen möchten.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider']       			= array('Anbieter', 'Bitte wählen Sie den Anbieter der Basiskarte aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style']      			= array('OSM Kartenstil', 'Bitte wählen Sie den Kartenstil von OpenStreetMap aus. Beachten Sie bitte die geltenden Nutzungsbedingungen der Anbieter.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['stadiaMaps_style']  	    = array('Stadia Maps Kartenstil', 'Bitte wählen Sie den Kartenstil von Stadia Maps aus. Beachten Sie bitte die geltenden Nutzungsbedingungen von Stadia Maps.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url1'] 			= array('URL 1', 'Bitte geben Sie die 1. URL des Kartenstils ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url2'] 			= array('URL 2', 'Bitte geben Sie die 2. URL des Kartenstils ein (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url3'] 			= array('URL 3', 'Bitte geben Sie die 3. URL des Kartenstils ein (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_url4'] 			= array('URL 4', 'Bitte geben Sie die 4. URL des Kartenstils ein (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['con4gisIo'] 			    = array('con4gis Basiskarten', 'Bitte wählen Sie die den Kartenstil von con4gis (API-Key erforderlich).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['extend']                  = array('extend', 'Zusätzliche extend Informationen (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_style_zoomlevels']  	= array('Zoom-Stufen', 'Bitte geben Sie die Anzahl der verfügbaren Zoom-Stufen des Kartenstils an (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['osm_keyname']    			= array('Keyname', 'Bitte geben Sie den internen Keyname an (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapbox_type']   			= array('Mapbox API', 'Bitte wählen Sie die Mapbox API Version aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['mapz_type']   			= array('mapz.com', 'Bitte wählen Sie die Mapz-Basiskarte aus');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['klokan_type']   			= array('Klokan API', 'Bitte wählen Sie die Klokan API Version aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['here_type']   			= array('HERE', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['thunderforest_type']      = array('Thunderforest', 'Bitte wählen Sie den Kartenstil aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_style']     			= array('Bing Maps Kartenstil', 'Bitte wählen Sie den Kartenstil von Bing Maps aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['bing_key']       			= array('Bing Applikationsschlüssel (Key)', 'Bitte geben Sie hier Ihren Bing Applikationsschlüssel (Key) ein. Falls Sie noch keinen besitzen, dann generieren Sie ihn sich auf https://www.bingmapsportal.com/.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['google_style']   			= array('Google Maps Kartenstil', 'Bitte wählen Sie den Kartenstil von Google Maps aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['image_src']   			= ['Bild auswählen', 'Bitte wählen Sie das Bild aus, was Sie als Basiskarte anzeigen wollen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['geoimage_json']           = ['JSON zur Georeferenzierung', 'Bitte geben Sie hier ein <a href="https://www.json.org/" target="_blank" rel="noopener">JSON</a> zur Georeferenzierung ein. Sie können dieses durch <a href="http://viglino.github.io/Map-georeferencer/" target="_blank" rel="noopener">dieses Tool</a> generieren lassen oder manuell die Paramater "imageCenter", "imageRotate" und "imageScale" eintragen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['attribution']    			= array('Benutzerdefinierte Attribution', 'Hier können Sie, wenn sinnvoll, einen vom Standardwert abweichenden Copyright-Text eingeben (optional).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['minzoomlevel']   			= array('Minimale Zoomstufe', 'Hier können Sie eine vom Standardwert abweichende minimate Zoomstufe eingeben. 0=Standard');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['maxzoomlevel']   			= array('Maximale Zoomstufe', 'Hier können Sie eine vom Standardwert abweichende maximale Zoomstufe eingeben. 19=Standard');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['preview_image']   		= array('Vorschaubild', 'Hier können Sie ein Vorschaubild auswählen, welches im Frontend in der Basiskartenauswahl zu dieser Basiskarte angezeigt wird.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['protect_baselayer'] 		= array('Diese Basiskarte schützen', 'Macht diese Basiskarte nur für ausgewählte Gruppen sichtbar.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['hide_in_be']       		= array('API-Key schützen', 'API-Keys werden nicht ans Frontend ausgeliefert und die Anfrage zur Basiskarte wird über den eigenen Server geleitet (Kann das Laden des Layers verlangsamen).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['permitted_groups'] 		= array('Berechtigte Gruppen', 'Die Gruppen, für die diese Basiskarte sichtbar ist.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['url'] 	        		= array('URL', 'Geben Sie die Serveradresse ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['api_key']       			= array('Access Token / API Key', 'Bitte geben Sie hier den Schlüssel zu Ihrem Nutzerkonto an.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['app_id']       			= array('Style ID / Anwendungsschlüssel', 'Bitte geben Sie hier den Identifikationsschlüssel für Ihre Voreinstellungen an (z.B. bei Mapbox kontoname/style).');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['cesium']                  = array('Cesium einschalten', 'Die Darstellung als Globus erfolgt nur dann, wenn Sie im entsprechenden „Kartenprofil“ ebenfalls „Cesium einschalten“ aktivieren.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['layerGroup']              = array('Gruppe von Basiskarten', 'Gruppe von Basiskarten. Die Reihenfolge im Backend entspricht der im Frontend. Die Basiskarten werden nur zwischen den anzugebenden Zoomleveln angezeigt.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['published']               = array('Veröffentlicht','Basiskarte veröffentlichen?');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_url']                 = array('URL', 'Geben Sie eine erreichbare URL an.');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_layers']       = array('Layer', 'Welche Layer sollen dargestellt werden?');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_version']      = array('Version', 'z.B. 1.1.1');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_format']       = array('Format', 'z.B. image/png');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_transparent']  = array('Transparenz', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_params_srs']          = array('', '');
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['wms_gutter']              = array('Gutter', '');

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['consentId']               = ['Consent Tool (optional)', 'Bitte geben Sie hier den Namen Ihres <a href="https://heyklaro.com/" target="_blank" rel="noopener">Klaro-Services</a> oder die Consent-Id Ihres <a href="https://www.contao.solutions/de/loesungen/contao-consent.html" target="_blank" rel="noopener">Contao-Consent</a> an, um das Laden ohne Consent zu verhindern.'];

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['baselayers']    = 'Basiskarten';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['minZoom']       = 'Minimale Zoomstufe';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['baselayerGroup']['maxZoom']       = 'Maximale Zoomstufe';
/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm']    = 'OpenStreetMap (<a href="https://operations.osmfoundation.org/policies/tiles" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_stadiaMaps'] = 'Stadia Maps (<a href="https://stadiamaps.com" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_here']   = 'HERE (<a href="https://developer.here.com" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox'] = 'Mapbox Studio Style bzw. style url (<a href="https://www.mapbox.com" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapz'] = 'Mapz (<a href="https://www.mapz.com" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_thunderforest'] = 'Thunderforest (<a href="https://www.thunderforest.com/maps" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_bing']   = 'Bing Maps (<a href="https://www.bingmapsportal.com" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_otm']    = 'OpenTopoMap (<a href="https://https://opentopomap.org/about" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan'] = 'Klokan Maptiler / OpenMapTiles (<a href="https://www.maptiler.com" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_wms']    = 'WMS';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_con4gisIo']    = 'con4gis Support (<a href="https://con4gis.org/support" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_owm']    = 'OpenWeatherMap (<a href="https://openweathermap.org/api" rel="noopener" target="_blank">Nutzungsbestimmungen</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_group']  = 'Gruppe von Layern';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_geoimage']  = 'Georeferenziertes Bild';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_geotiff']  = 'GeoTIFF';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_custom'] = 'Benutzerdefiniert';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_mapnik'] 			= 'Mapnik';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_osma']   			= 'Osmarender';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_cycle']  			= 'Fahrradkarte (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german'] 			= 'Deutschland Stil (openstreetmap.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_german_transport']  	= 'ÖPNV Karte (memomaps.de)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_transport']  		= 'ÖPNV Karte (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_landscape']  		= 'Geländekarte (opencyclemap.org)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_osm_custom'] 			= 'Benutzerdefiniert';

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

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_studio']             = 'Mapbox Studio Style bzw. style url';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_mapbox_classic']     = 'Mapbox Studio Classic, Editor bzw. map ID';

$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_openmaptiles'] = 'OpenMapTiles (www.openmaptiles.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_basic']  = 'Basic (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_bright'] = 'OSM Bright (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_darkmatter']  = 'Dark Matter (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_positron']  = 'Positron (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_voyager']  = 'Voyager (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_streets']  = 'Streets (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_topo']  = 'Topo (cloud.maptiler.com)';
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['provider_klokan_tilehosting_hybrid']  = 'Satellite Hybrid (cloud.maptiler.com)';

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

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_baselayers']['infotext'] = 'Die Basiskarte ist die unterste Kartenschicht (das Kartenbild). '.
    'Über verschiedene Kartenanbieter oder über eigene Kartenserver können Sie Raster- oder Vektorkarten laden. Gleiches gilt für Overlays. '.
    'Overlays sind Kartenstücke, teiltransparente Karten oder feste Karteninformationen, die als aufliegende Schicht fester Bestandteil der Karte ist. '.
    'Overlays lassen sich über den linken Button in der Basiskartenauflistung für jede Karte hinzubringen. '.
    'Mehr auf <a href="https://docs.con4gis.org/basiskarten-con4gis-maps" title="con4gis Docs Basiskarten" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';