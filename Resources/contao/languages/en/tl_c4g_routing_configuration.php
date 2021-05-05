<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/** Routing und Umkreissuche  */
$GLOBALS['TL_LANG'][$strName]['router_api_selection'] = ['Routing Server Technology','Choose Server Technology'];
$GLOBALS['TL_LANG'][$strName]['name'] = ['Name','Name of the routing configuration.'];
$GLOBALS['TL_LANG'][$strName]['router_api_key'] = ['API-Key', 'Enter your ORS- or Graphhopper-API-Key. You can generate the key <a href="https://openrouteservice.org/sign-up/" target="_blank" rel="noopener">here (OpenRouteService)</a> or <a href="https://graphhopper.com/dashboard/#/register" target="_blank"> here (Graphhopper)</a>. Pay attention to the terms of use.'];
$GLOBALS['TL_LANG'][$strName]['router_viaroute_url'] = ['Alternative URL (mandatory for OSRM-API 4)', 'Enter the URL of a ORS or OSRM Server, for example if you want to use your own. By default, either http://router.project-osrm.org/ , https://api.openrouteservice.org/ or https://graphhopper.com/api/1/route? is used. Pay attention to the providers\' copyright information.'];
$GLOBALS['TL_LANG'][$strName]['routerHeadline'] = ['Headline Router', 'Default: Router'];
$GLOBALS['TL_LANG'][$strName]['router_attribution'] = ['Override Router Copyright', 'Overrides the default attriubution. Recommended only if you are using an alternative API-Server, or if you have placed it in another, clearly visible, spot on your website!'];
$GLOBALS['TL_LANG'][$strName]['router_from_locstyle'] = ['Location Style for Starting Point', 'Choose a location style for the starting point.'];
$GLOBALS['TL_LANG'][$strName]['router_to_locstyle'] = ['Location Style for Target Point', 'Choose a location style for the target point.'];
$GLOBALS['TL_LANG'][$strName]['router_point_locstyle'] = ['Location Style for on-the-fly hints', 'Choose a location style for the on-the-fly hints.'];
$GLOBALS['TL_LANG'][$strName]['router_interim_locstyle'] = ['Location Style for interim targets', 'Choose a location style for interim targets.'];
$GLOBALS['TL_LANG'][$strName]['router_profiles'] = ['Router Profile', 'Determines the OpenRouteService or Graphhopper profiles.'];
$GLOBALS['TL_LANG'][$strName]['router_profiles_initial'] = ['Open router-profile', 'Open router-selection initial.'];
$GLOBALS['TL_LANG'][$strName]['routerLayers'] = ['Layer for routes', 'Enter the layers to show on the route or in a perimeter (default: Overpass & Table).'];
$GLOBALS['TL_LANG'][$strName]['routerLayer']['layers'] = ['Layer','Layer to be evaluated for the router or area search.'];
$GLOBALS['TL_LANG'][$strName]['routerLayer']['key'] = ['Key','Key for the evaluation.'];
$GLOBALS['TL_LANG'][$strName]['routerLayer']['value'] = ['Button Text','The text for the corresponding button.'];
$GLOBALS['TL_LANG'][$strName]['routerLayer']['label'] = ['Label','Label for the map elements.'];
$GLOBALS['TL_LANG'][$strName]['routerLayer']['mapLabel'] = ['Label Field','Fieldname for the label generation.'];

$GLOBALS['TL_LANG'][$strName]['customProfiles'] = ['Eigene Routingprofile', 'Own Routing Profiles'];
$GLOBALS['TL_LANG'][$strName]['customProfile']['profileKey'] = ['Key for the profile','Key for the profile when addressing the API.'];
$GLOBALS['TL_LANG'][$strName]['customProfile']['showName'] = ['Display name','Name of the profile for display in the frontend.'];
$GLOBALS['TL_LANG'][$strName]['customProfile']['fontAwesome'] = ['Fontawesome Unicode','Fontawesome Unicode for the display in the frontend.'];

$GLOBALS['TL_LANG'][$strName]['hideFeaturesWithoutLabel'] = ['Hide features without label','Check this to hide features that have no label.'];
$GLOBALS['TL_LANG'][$strName]['router_alternative'] = ['Alternative Routes', 'Should alternative routes be displayed?'];
$GLOBALS['TL_LANG'][$strName]['enableOverPoints'] = ['Interim Targets', 'Check this to enable the possibility to create interim targets.'];
$GLOBALS['TL_LANG'][$strName]['enableTargetSwitch'] = ['Swap Start and Target', 'Check this to enable swapping of start and target.'];
$GLOBALS['TL_LANG'][$strName]['routeStartButton'] = ['Button: "Start Search"', 'Choose if a button should be generated with which the search can be triggered manually.'];
$GLOBALS['TL_LANG'][$strName]['closeAfterSearch'] = ['Close Router after Search', 'If this is checked, the router will be closed automatically after the search has been initiated.'];
$GLOBALS['TL_LANG'][$strName]['showInstructions'] = ['Show Route Information', 'Check this top show information about the route.'];
$GLOBALS['TL_LANG'][$strName]['instructionLabel'] = ['Route information button caption', 'Enter a caption for the route information button.'];
$GLOBALS['TL_LANG'][$strName]['showFeatures'] = ['Show Result List', 'If this is checked, results will be shown in the router.'];
$GLOBALS['TL_LANG'][$strName]['areaSearch'] = ['Activate area search', 'If this is checked, area search will be activated.'];
$GLOBALS['TL_LANG'][$strName]['areaSearchOnly'] = ['Disable route search', 'If this is checked, the search along the route is deactivated.'];
$GLOBALS['TL_LANG'][$strName]['areaHeadline'] = ['Headline area search', 'Default: Area search'];
$GLOBALS['TL_LANG'][$strName]['areaHeadlineDefault'] = "Area search";
$GLOBALS['TL_LANG'][$strName]['featureLabel'] = ['Result list button caption', 'Enter a caption for the result list button.'];
$GLOBALS['TL_LANG'][$strName]['initialMode'] = ['Initial view', 'Choose the initial view in the router.'];
$GLOBALS['TL_LANG'][$strName]['initialPosition'] = ['Initial position', 'The start is set to the users position.'];
$GLOBALS['TL_LANG'][$strName]['initialDestination'] = ['Initial destination', 'The destination is set to the center of the map.'];
$GLOBALS['TL_LANG'][$strName]['initialResultMode'] = ['Initial result view', 'Choose the initial view in the router results (feature list or route instructions).'];
$GLOBALS['TL_LANG'][$strName]['minDetourArea'] = ['Minimum Radius Area Search (km)', 'The minimum radius to search.'];
$GLOBALS['TL_LANG'][$strName]['maxDetourArea'] = ['Maximum Radius Area Search (km)', 'The maximum radius to search.'];
$GLOBALS['TL_LANG'][$strName]['initialDetourArea'] = ['Initial Radius Area Search (km)', 'The initial radius to search.'];
$GLOBALS['TL_LANG'][$strName]['minDetourRoute'] = ['Minimum Detour along Route (km)', 'The minimum detour to be calculated.'];
$GLOBALS['TL_LANG'][$strName]['maxDetourRoute'] = ['Maximum Detour along Route (km)', 'The maximum detour to be calculated.'];
$GLOBALS['TL_LANG'][$strName]['initialDetourRoute'] = ['Initial Detour along Route (km)', 'The initial detour to be calculated.'];
$GLOBALS['TL_LANG'][$strName]['clickLocstyle'] = ['Location Style active element', 'Enter the location style for the active element.'];
$GLOBALS['TL_LANG'][$strName]['areaCenterLocstyle'] = ['Location Style Center (Area Search)', 'Choose the location style which will place a marker in the center of the search.'];
$GLOBALS['TL_LANG'][$strName]['priorityFeatures'] = ['Prioritized Features', 'The number of features with the lowest value to be displayed differently on the map.'];
$GLOBALS['TL_LANG'][$strName]['priorityLocstyle'] = ['Location Style prioritized features', 'Location Style for prioritized features.'];
$GLOBALS['TL_LANG'][$strName]['usePermalink'] = ['Generate router permalink', 'Check this to save the current search parameters in the URL.'];
$GLOBALS['TL_LANG'][$strName]['pirate'] = ['Arrrrr you a pirate?', 'Set language to pirate.'];


/**
 * References
 */
$GLOBALS['TL_LANG'][$strName]['references_router_modes']['area'] = "Area Search";
$GLOBALS['TL_LANG'][$strName]['references_router_modes']['route'] = "Route Search";

$GLOBALS['TL_LANG'][$strName]['references_router_result_modes']['feat'] = "Features";
$GLOBALS['TL_LANG'][$strName]['references_router_result_modes']['instr'] = "Instructions";

$GLOBALS['TL_LANG'][$strName]['references_router_api_selection']['0'] = 'OpenSourceRoutingMachine (API 4.x) (<a href="http://project-osrm.org" target="_blank" rel="noopener">usage policy</a>)';
$GLOBALS['TL_LANG'][$strName]['references_router_api_selection']['1'] = 'OpenSourceRoutingMachine (API 5.x) (<a href="http://project-osrm.org" target="_blank" rel="noopener">usage policy</a>)';
$GLOBALS['TL_LANG'][$strName]['references_router_api_selection']['2'] = 'OpenRouteService (<a href="https://openrouteservice.org" target="_blank" rel="noopener">usage policy</a>)';
$GLOBALS['TL_LANG'][$strName]['references_router_api_selection']['3'] = 'Graphhopper (<a href="https://www.graphhopper.com" target="_blank" rel="noopener">usage policy</a>)';
$GLOBALS['TL_LANG'][$strName]['references_router_api_selection']['4'] = 'Valhalla (<a href="http://valhalla.github.io/demos/routing" target="_blank" rel="noopener">usage policy</a>)';
$GLOBALS['TL_LANG'][$strName]['references_router_api_selection']['5'] = 'con4gis.io mapservices (<a href="https://con4gis.io" target="_blank" rel="noopener">usage policy</a>)';


$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['0'] = 'Car';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['1'] = 'Truck';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['2'] = 'Bicycle';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['3'] = 'Road Bike';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['4'] = 'Bicycle (secure)';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['5'] = 'Mountainbike';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['6'] = 'Trekking Bike';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['7'] = 'Electronic Bicycle';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['8'] = 'Pedestrian';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['9'] = 'Hiker';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['10']= 'Wheelchair';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['11']= 'Small Truck';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['12']= 'Scooter';
$GLOBALS['TL_LANG'][$strName]['references_router_profiles']['13']= 'Motorcycle';

/** legend */
$GLOBALS['TL_LANG'][$strName]['routing_legend']     = 'Routing and area search';
$GLOBALS['TL_LANG'][$strName]['general_legend']     = 'General settings';
$GLOBALS['TL_LANG'][$strName]['extended_legend']    = 'Advanced settings';
$GLOBALS['TL_LANG'][$strName]['search_legend']      = 'Routing and area search';

/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new']        = ['New configuration', 'Eine neue Routing-Konfiguration erstellen'];
$GLOBALS['TL_LANG'][$strName]['edit']       = ['Routing-Konfiguration bearbeiten', 'Routing-Konfiguration ID %s bearbeiten'];
$GLOBALS['TL_LANG'][$strName]['copy']       = ['Routing-Konfiguration duplizieren', 'Routing-Konfiguration ID %s duplizieren'];
$GLOBALS['TL_LANG'][$strName]['delete']     = ['Routing-Konfiguration löschen', 'Routing-Konfiguration ID %s löschen'];
$GLOBALS['TL_LANG'][$strName]['show']       = ['Details', 'Die Details des Routing-Konfiguration ID %s anzeigen'];

$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['editMaps'] = 'Edit map structure';