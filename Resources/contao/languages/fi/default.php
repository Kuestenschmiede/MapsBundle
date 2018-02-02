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
 * Miscellaneous
 */
$GLOBALS['TL_LANG']['CTE']['c4g_maps'] 					= array('Map (con4gis)','Kartan integraatio con4gis-Mapsilla.');

$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events']['name'] 	= 'Tapahtumat';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events']['parent'] 	= 'Kalenteri';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events_with_tags']['name'] = 'Events with tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events_with_tags']['parent'] = 'Calendar with tags';

$GLOBALS['TL_LANG']['c4g_maps']['geox_invalid'] 		= 'Arvo -180.0 ja 180.0 välillä odotettavissa!';
$GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid'] 		= 'Arvo -90.0 ja 90.0 odotettavissa!';

$GLOBALS['TL_LANG']['c4g_maps']['geopicker'] 			= 'Valitse sijainnin koordinaatit';
$GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] 	= 'Suunnittele geometrit';
$GLOBALS['TL_LANG']['c4g_maps']['transfer'] 			= 'Siirrä';
$GLOBALS['TL_LANG']['c4g_maps']['search'] 				= 'Etsi osoite';

$GLOBALS['TL_LANG']['c4g_maps']['update_db'] 			= 'Päivitä tietokanta';
$GLOBALS['TL_LANG']['c4g_maps']['update_db_success'] 	= 'Tietokanta päivitetty onnistuneesti!';
$GLOBALS['TL_LANG']['c4g_maps']['db_status'] 			= 'Con4gis-Maps tietokannan tila';
$GLOBALS['TL_LANG']['c4g_maps']['db_uptodate'] 			= 'Tietokanta on ajan tasalla!';
$GLOBALS['TL_LANG']['c4g_maps']['db_update_necessary'] 	= 'Tietokanta pitää päivittää käyttääksesi con4gis-Mapsn Versio >= 2.0:sta!';

/**
 * Labels
 */
$GLOBALS['TL_LANG']['c4g_maps']['labels']['baseLayer'] 			= 'Pohjakerros';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['overlays'] 			= 'Päällekkäiskerros';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['search_address'] 	= 'Etsi osoite';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['no_geo_results'] 	= 'Ei hakutuloksia annetuilla hakusanoilla';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['error_geocoding'] 	= '!! Geocoding epäonnistui teknisten ongelmien vuoksi !!';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['geocoding_progress'] = 'Osoitteen etsiminen käynnissä...';


$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActSelect'] 		= 'Toiminta: Valitse';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActMove'] 			= 'Toiminta: Liikuta';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActChange'] 		= 'Toiminta: Vaihda';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActAdd'] 			= 'Toiminta: Lisää';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObjectSelected'] 	= '{0} valittu';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObjectsSelected'] 	= '{0} objectia valittu';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObject'] 			= 'Object: {0}';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleOk'] 			= 'Ok (Enter)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleCancel'] 		= 'Peruuta (ESC)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleUndo'] 		= 'Undo (CTRL+Z)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleRedo'] 		= 'Redo (CTRL+Y)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleSelect'] 		= 'Select mode';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleModify'] 		= 'Vaihda';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleDelete'] 		= 'Poista';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gArrowsBack'] 		= 'Nuolet molemmissa suunnissa';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gHelp'] 			= 'Apua';

$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtN'] 				= "pohjoinen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtE'] 				= "itä";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtS'] 				= "etelä";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtW'] 				= "länsi";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtNE'] 			= "koilinen";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSE'] 			= "kaakko";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSW'] 			= "lounas";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtNW'] 			= "luode";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_0'] 	= "Tuntematon ohje[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_1'] 	= "Jatka[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_2'] 	= "Käänny hiukan oikealle[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_3'] 	= "Käänny oikealle[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_4'] 	= "Käänny terävästi oikealle[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_5'] 	= "U-Käännös[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_6'] 	= "Käänny terävästi vasemmalle[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_7'] 	= "Käänny vasemmalle[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_8'] 	= "Käänny hieman vasemmalle[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_10'] 	= "Suuntaa <b>%d</b>[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-1'] = "Enter roundabout and leave at first exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-2'] = "Enter roundabout and leave at second exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-3'] = "Enter roundabout and leave at third exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-4'] = "Enter roundabout and leave at fourth exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-5'] = "Enter roundabout and leave at fifth exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-6'] = "Enter roundabout and leave at sixth exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-7'] = "Enter roundabout and leave at seventh exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-8'] = "Enter roundabout and leave at eighth exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-9'] = "Enter roundabout and leave at nineth exit[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_11-x'] = "Enter roundabout and leave at one of the too many exits[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_15'] 	= "Olet saavuttanut päämääräsi";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtFROM'] 			= "Aloita";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtTO'] 			= "Päätä";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtFIND_ROUTE'] 	= "Etsi reitti";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtLOC_ROUTE_TO'] 	= "Reitti kohti";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtROUTEDESC'] 		= "Reitin kuvaus";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtROUTENAME'] 		= "Reitti";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDISTANCE'] 		= "Etäisyys";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtTIME'] 			= "Aika";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtREV_GEOCODING'] 	= "Etsitään osoitetta...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_REV_GEOCODING'] 	= "Virhe etsiessä osoitetta (Käänteinen Geocoding)";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSEARCHING'] 		= "Etsitään osoitetta...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_SEARCHING'] 		= "Virhe etsiessä osoitetta";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtCALC_ROUTE'] 	= "Lasketaan reittiä...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_CALC_ROUTE'] 		= "Virhe laskettaessa reittiä";
