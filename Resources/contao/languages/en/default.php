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
 * Miscellaneous
 */
$GLOBALS['TL_LANG']['CTE']['c4g_maps'] 					= array('Map (con4gis)','Integration of a map with con4gis-Maps.');

$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events']['name'] 	= 'Events';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events']['parent'] 	= 'Calendar';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events_with_tags']['name'] = 'Events with tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_calendar_events_with_tags']['parent'] = 'Calendar with tags';
$GLOBALS['TL_LANG']['c4g_maps']['sourcetable']['tl_member']['name'] 	= 'Members';

$GLOBALS['TL_LANG']['c4g_maps']['geox_invalid'] 		= 'Value between -180.0 and 180.0 expected!';
$GLOBALS['TL_LANG']['c4g_maps']['geoy_invalid'] 		= 'Value between -90.0 and 90.0 expected!';

$GLOBALS['TL_LANG']['c4g_maps']['geopicker'] 			= 'Pick coordinates of location';
$GLOBALS['TL_LANG']['c4g_maps']['geoeditor'] 	= 'Design geometries';
$GLOBALS['TL_LANG']['c4g_maps']['transfer'] 			= 'Transfer';
$GLOBALS['TL_LANG']['c4g_maps']['search'] 				= 'Search address';

$GLOBALS['TL_LANG']['c4g_maps']['update_db'] 			= 'Update database';
$GLOBALS['TL_LANG']['c4g_maps']['update_db_success'] 	= 'Database successfully updated!';
$GLOBALS['TL_LANG']['c4g_maps']['db_status'] 			= 'State of the con4gis-Maps database';
$GLOBALS['TL_LANG']['c4g_maps']['db_uptodate'] 			= 'Database is up to date!';
$GLOBALS['TL_LANG']['c4g_maps']['db_update_necessary'] 	= 'Database must be updated for use with con4gis-Maps Version >= 2.0!';

/**
 * Labels
 */
$GLOBALS['TL_LANG']['c4g_maps']['labels']['baseLayer'] 			= 'Base layer';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['overlays'] 			= 'Overlays';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['search_address'] 	= 'Search address';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['no_geo_results'] 	= 'No matches found for given search';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['error_geocoding'] 	= '!! Geocoding failed due to technical problems !!';
$GLOBALS['TL_LANG']['c4g_maps']['labels']['geocoding_progress'] = 'Searching for addresses in progress...';


$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActSelect'] 		= 'Action: Select';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActMove'] 			= 'Action: Move';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActChange'] 		= 'Action: Change';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gActAdd'] 			= 'Action: Add';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObjectSelected'] 	= '{0} selected';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObjectsSelected'] 	= '{0} objects selected';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gObject'] 			= 'Object: {0}';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleOk'] 			= 'Ok (Enter)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleCancel'] 		= 'Cancel (ESC)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleUndo'] 		= 'Undo (CTRL+Z)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleRedo'] 		= 'Redo (CTRL+Y)';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleSelect'] 		= 'Select mode';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleModify'] 		= 'Change';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gTitleDelete'] 		= 'Delete';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gArrowsBack'] 		= 'Arrows in both directions';
$GLOBALS['TL_LANG']['c4g_maps']['editor_labels']['c4gHelp'] 			= 'Help';

$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtN'] 				= "north";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtE'] 				= "east";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtS'] 				= "south";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtW'] 				= "west";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtNE'] 			= "northeast";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSE'] 			= "southeast";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSW'] 			= "southwest";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtNW'] 			= "northwest";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_0'] 	= "Unknown instruction[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_1'] 	= "Continue[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_2'] 	= "Turn slight right[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_3'] 	= "Turn right[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_4'] 	= "Turn sharp right[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_5'] 	= "U-Turn[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_6'] 	= "Turn sharp left[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_7'] 	= "Turn left[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_8'] 	= "Turn slight left[ onto <b>%s</b>]";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_10'] 	= "Head <b>%d</b>[ onto <b>%s</b>]";
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
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDIRECTION_15'] 	= "You have reached your destination";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtFROM'] 			= "Start";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtTO'] 			= "End";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtFIND_ROUTE'] 	= "Find route";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtLOC_ROUTE_TO'] 	= "Route to";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtROUTEDESC'] 		= "Route description";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtROUTENAME'] 		= "Route";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtDISTANCE'] 		= "Distance";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtTIME'] 			= "Time";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtREV_GEOCODING'] 	= "Searching address...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_REV_GEOCODING'] 	= "Error searching address (Reverse Geocoding)";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtSEARCHING'] 		= "Searching address...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_SEARCHING'] 		= "Error searching address";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtCALC_ROUTE'] 	= "Calculating route...";
$GLOBALS['TL_LANG']['c4g_maps']['router_labels']['c4gRtERROR_CALC_ROUTE'] 		= "Error while calculating route";
