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
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name']                  = array('Name',
                                                                            'Enter a name for the map profile.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_editor_default']    = array('Is this the standard profile for backend editor?',
                                                                            'If checked, it will used for the backend editor (structur element: geoJson)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'] = array('Is this the standard profile for backend geopicker?',
                                                                            'If checked, it will used for the backend geopicker (structur elements, events, ...).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme']                 = array('Theme',
                                                                            'Select your own theme.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers']            = array('Base layers',
                                                                            'Check the baselayers you wish to see in the Starboard. Default: all');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles']             = array('Location styles',
                                                                            'Check the location styles available for map structure items using this profile. Default: all');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel']            = array('Zoom panel',
                                                                            'Adds a panel with buttons to zoom in and zoom out');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button']     = array('Addition button in zoom panel',
                                                                            'Display a additional button in the zoom panel. Clicks jumps to selected position.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider']     = array('Zoom panel with slider',
                                                                            'Zoom panel with slider.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav']             = array('Mouse navigation',
                                                                            'Adds the ability to zoom and pan using the mouse.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel']       = array('Mouse wheel zooming',
                                                                            'Adds the function to zoom in and zoom out using the mouse wheel.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = array('Doubleclick zooming',
                                                                            'Adds the function to zoom in using a doubleclick.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox']     = array('Zoombox with [Shift + Click]',
                                                                            'Ability to drag a box to zoom with the mouse while pressing the SHIFT key.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode']    = array('Rotate map with [Alt + Click]',
                                                                            'Ability to rotate (and zoom) the map with the mouse while pressing the ALT key.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic']     = array('Kinetic scrolling after panning with mouse',
                                                                            'Scrolling continues slowly after release of mouse button, until it finally stops.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav']             = array('Touch navigation',
                                                                            'Allow touchnavigation on the map. (Requires a touch-screen)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav']          = array('Keyboard navigation',
                                                                            'Navigate on map with the keyboard (arrow keys to pan, zoom with "+" and "-" keys).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['nav_history']           = array('Navigation history',
                                                                            'Creates "next" and "previous" buttons, similar to those of internet browsers.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap']           = array('Overview map',
                                                                            'Adds a button in the lower right corner of the map, which when pressed shows an overwiew map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geobookmarks']          = array('Geo bookmarks (beta)',
                                                                            'So you can store position/zoom bookmarks in your browser');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline']             = array('Scale line',
                                                                            'Shows a line which demonstrates the scale of the map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition']         = array('Mouse coordinates',
                                                                            'Shows the GEO coordinates of the current mouse position.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink']             = array('Permalink',
                                                                            'Displays a link representing the current map state, which may be bookmarked or sent via E-Mail for example.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param']   = array('Use GET-parameter for permalink-values',
                                                                            'If you want to use a GET-parameter for the permalink instead of the URL-hash you can name it here.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel']             = array('Show zoomlevel',
                                                                            'Displays the current zoomlevel.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen']            = array('Fullscreen control',
                                                                            'Shows a button which switches the browser into fullscreen (HTML5). Caution: this is not supported by every browser!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['print']                 = array('Export map',
                                                                            'Enables a button to export the map as PNG.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard']             = array('Enable Starboard',
                                                                            'Activate starboard to allow to change the base layers and overlays.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open']        = array('Open starboard',
                                                                            'Initially opens the starboard.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label']       = array('Starboard titel',
                                                                            '');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div']         = array('DIV for Starboard',
                                                                            'Enter the ID of an existing DIV element if you want to put the Starboard somewhere else on your page.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter']      = array('Activate starboard filter',
                                                                            'Toggle search field for starboard content.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button']      = array('Activate Button for Starboard',
                                                                            'Creates a Button in order to show and hide all elements in the starboard with one click.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all']           = array('Cluster over all layers',
                                                                            'Clusters all layers. Overwrites options of the structures');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance']      = array('Cluster distance',
                                                                            'Cluster distance (default 20px)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor']     = array('Fill color',
                                                                            'Select the fill color of the cluster bubble.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor']     = array('Font color',
                                                                            'Select the font color of the cluster bubble.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom']          = array('Maximal zoom',
                                                                            'Select the maximal zoomlevel. The cluster is splitted on click afterwards ');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['async_content']         = array('Load location asynchronous',
                                                                            'Simple locations are loaded asynchronous in order to enhance initial performance.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher']     = array('Show Baselayer-Switcher',
                                                                            'Show Baselayer-Switcher to allow to change the base layers.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label']   = array('Description of base layers in the starboard',
                                                                                'Default: "Base layer"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher']         = array('Show Layer-Switcher',
                                                                            'Show Layer-Switcher to allow to change the base layers.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label']   = array('Description of layers in the starboard',
                                                                            'Default "Overlays"');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool']           = array('Measure tools',
                                                                            'Shows a button which activates tools for measuring distances/areas.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule']             = array('Graticule',
                                                                            'Shows a button, which activates a graticule that visualizes the latitude and longitude on the map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor']                = array('Show editor on the map',
                                                                            'Shows a button, which activates an Editor for drawing locations, lines and areas on the map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['libsource']             = array('OpenLayers Library',
                                                                            'Choose where to take the OpenLayers JavaScript library from.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['imagepath']             = array('Userdefined OpenLayers image path (optional)',
                                                                            'Only when using default theme: set path to own OpenLayers /img/ directory in case you want to use userdefined icons. NOTE: This setting is NOT changing icons from OpenLayers /themes/default/img/ directory, which you can exchange using CSS!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow']        = array('Open links in new window',
                                                                            'Do not open links in the same window, but display linked pages in a new window.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on']          = array('Open links on',
                                                                            'Select on which mouse action a link should be opened, if a link is specified.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups']          = array('Popups on mouse hover',
                                                                            'Show popup when mouse pointer rests on location.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay']     = array('Mouse hover popups stay open',
                                                                            'Popups that have been opened on mouse hover are not closed when the mouse pointer leaves the location.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupAutoPan']          = array('Autopan to popup', '');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution']           = array('Attribution',
                                                                            'Shows the attribution. Deactivate only when you are sure it is allowed.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = array('Show initially collapsed',
                                                                            'Collapse the attribution by default. Otherwise the Attribution will be visible when entering the page, but is still collapsible.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = array('Show con4gis-logo',
                                                                            'Shows the con4gis-logo on the map. You can turn it off, but we would appreciate it if you\'d mention "con4gis" at a different location on your page.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution']       = array('DIV attribution',
                                                                            'Enter the ID of an existing DIV element if you want to put the attributon outside the map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution']       = array('Additional attribution',
                                                                            'This text is added to the generated attribution. Deactivate only when you are sure it is allowed.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch']             = array('Activate search (search field / router)',
                                                                            'Activates searchengine for searching places and coordinates.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']      = ['Parameters for the search',
                                                                      'Enter keys and parameters in order to limit the search (<a href=https://wiki.openstreetmap.org/wiki/Nominatim>documentation</a>)'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine']      = array('Searchengine',
                                                                            'ATTENTION! Please take note to restrictions that may apply by the usage policy of the choosen provider. If you have choosen to use a custom URL, remember to add an attribution of that provider, if it\'s not your own server.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show']        = array('Show search area',
                                                                            'Shows the search button and input field on map.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url']            = array('Custom searchengine-URL',
                                                                                            'The URL wich leads to the searchengine.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution']    = array('Custom searchengine-attribution',
                                                                                            'IMPORTANT! The copyrighttext of the searchengines provider.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key']         = array('Key for search-engine',
                                                                            'If the selected search engine requires a key for the use of their service you can enter it here.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results']     =array('Search with a list of results',
                                                                           'Shows the results as a list');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div']         = array('DIV for search',
                                                                            'Enter the ID of an existing DIV element if you want to put the search field somewhere else on your page.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto']      = array('Zoomlevel',
                                                                            'Zoomlevel to set after searching, e.g. 16');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds']  = array('Zoom to bounds',
                                                                            'Zoom to the bounds of an area if provided by the search service (Nominatim).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate']     = array('Enable animation',
                                                                            'Fly to found location.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult']  = array('Mark found location',
                                                                            'Highlights the found location for a short time.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup']       = array('Open popup',
                                                                            'Opens the popup for a feature at the location of the search (Works best with polygons).');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = array('Show attribution of search service',
                                                                            'Adds an attribution of the search service (Nominatim).  Deactivate only when you are sure it is allowed.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_collapsed']   = array('Collapsed searchfield',
                                                                            'Collapsed the searchfield by default.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker']             = array('Show geopicker (frontend)',
                                                                            'Adds a geopicker in the frontend, similar to the backend wizard to pick coordinates. Can be used together with INPUT fields in custom forms.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx']      = array('Form field for GEO latitude',
                                                                            'The ID of an INPUT field, where the latitude of the chosen place is stored.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy']      = array('Form field for GEO longitude',
                                                                            'The ID of an INPUT field, where the longitude of the chosen place is stored.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv']   = array('DIV for geopicker',
                                                                            'Enter the ID of an existing DIV element where you want to put the geopicking fields into. May be defined e.g. in an HTML form field.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = array('Show attribution of geocoding service',
                                                                            'Adds an attribution of the search service (Nominatim).  Deactivate only when you are sure it is allowed.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled']    = array('Disable geopicker',
                                                                            'Just show position with disabled geopicker.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous']   = array('Make geopicker anonymous',
                                                                            'With the geopicker anonymisation you can not identify the exact position.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div']            = array('DIV for map',
                                                                            'Enter the ID of an existing DIV element if you want to put the map somewhere else on your page.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url']          = array('URL of Overpass-API (<a href="http://overpass-api.de/" target="_blank">Website of the default API-Server provider</a>)',
                                                                            'Default: http://overpass-api.de/api/interpreter');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router']                = array('Activate routing (Please check the <a href="https://github.com/DennisOSRM/Project-OSRM/wiki/Api-usage-policy" target="_blank">terms of use</a> for default API!)',
                                                                            'Adds an additional button to activate routing functionality.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url']   = array('Alternative URL of ORS- or OSRM-API',
                                                                            'Default: http://router.project-osrm.org/viaroute or https://api.openrouteservice.org/directions?');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_key']        = array('API-Key',
                                                                            'Enter your API-key here. You can generate the key <a href="https://openrouteservice.org/sign-up/" target="_blank">here</a>.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles']       = array('Router-profiles',
                                                                            'Enter the profiles for OpenRouteService');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution']    = array('Override OSRM attribution',
                                                                            'Only override the attribution if you use another API-server, or put the attribution somewhere prominent else on your page!');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_point']   = array('Location styles for POIs',
                                                                            'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_line']    = array('Location styles for lines',
                                                                            'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_polygon'] = array('Location styles for polygons',
                                                                            'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_circle']  = array('Location styles for circles',
                                                                            'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_freehand'] = array('Location styles for freehand drawing',
                                                                            'Choose location styles that can be used in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_vars']           = array('Additional fields',
                                                                            'Fields available for POIs, lines and polygons can be addressed using ${key} in popup, label and tooltip.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_show_items']     = array('Show other map structure items while editing',
                                                                            'Check this if you don\' want to hide other map structure items in the editor.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_helpurl']        = array('Help page URL',
                                                                            'If you enter an URL here, a help link is displayed inside the editor, which opens the given URL.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit']      = array('Limit for optimization of large checkbox-lists',
                                                                            'Defines how much entries must be there after the checkbox-lists will be converted to chosenfields. (0 = do not convert)');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = array('Selection of API-version',
                                                                            'Old OSRM-API only works with own servers');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = array('Locstyle for start-location');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = array('Locstyle for goal-location');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = array('Locstyle for on-the-fly hints');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = array('Locstyle for interim-locations', );
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = array('Alternative routes','Do you want to allow alternative routes?');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = array('Use cesium', 'With cesium you can transform the 2D map in a globe.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always']  = array('Use cesium always', 'Do you want to use cesium for every basemap? If not you can activate single maps in the basemap settings.');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'] = array('Remember button states', 'With this switch you can cache button states.');

/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK']   = 'Single mouseclick';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL']   = 'Mouse doubleclick';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Default-Theme';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['0'] = 'Off';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['1'] = 'Rotate map';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['2'] = 'Rotate and zoom map';

//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['0'] = 'Off';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['1'] = 'with World-Icon (to 0 coordinate and min zoom)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['2'] = 'with Home-Icon (to configured map zoom)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['3'] = 'with Position-Icon (to browser/device position)';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['4'] = 'with Favorite-Icon (select one of your favorite positions)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim by Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim by MapQuest (<a href="http://developer.mapquest.com/web/products/open/nominatim" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Custom';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis mapservices (<a href="https://con4gis.org/kartendienste.html" target="_blank">usage policy</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['0'] = 'OpenSourceRoutingMachine (API 4.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['1'] = 'OpenSourceRoutingMachine (API 5.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['2'] = 'OpenRouteService (API 5.x)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['keys']       = ['Key','e.g.:countrycodes'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['params']     = ['Parameter', 'e.g.: en'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['0'] = 'Car';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['1'] = 'Heavy Vehicle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['2'] = 'Bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['3'] = 'Roadbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['4'] = 'Bicycle (safe)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['5'] = 'Moutainbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['6'] = 'Touring bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['7'] = 'Electric Bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['8'] = 'Pedestrian';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['9'] = 'Hiker';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['10']= 'Wheelchair';
/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new']        = array('New map profile', 'Create new map profile');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit']       = array('Edit map profile', 'Edit map profile ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy']       = array('Duplicate map profile', 'Duplicate map profile ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete']     = array('Delete map profile', 'Delete map profile ID %s');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show']       = array('Details', 'Show details of map profile ID %s');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend']        = 'General';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend']      = 'Base layers';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend']       = 'Location styles';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend']     = 'Map navigation';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend']      = 'Starboard settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend']    = 'Map information';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['expert_legend']         = 'Expert settings';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['misc_legend']           = 'Miscellaneous';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend']      = 'Search & Router';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_legend']      = 'Geopicker';
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_legend']         = 'Router (OSRM)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_legend']         = 'Editor settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['backend_legend']        = 'Backend settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend']         = 'Cesium settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['info_legend']           = 'Information page';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend']          = 'Click settings';


/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Editor label';
