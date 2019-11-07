<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

/**
 * Fields
 */

/** Allgemeine Daten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name'] = ['Name', 'Enter a name for the map profile.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme'] = ['Layout', 'Select your own theme.'];

/** Basiskarten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'] = ['Base layers', 'Check the baselayers you wish to see in the Starboard. Default: all'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer'] = ['Default Base Layer', 'Select the base layer to be pre-selected when the map is laoded.'];

/** Lokationsstile */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles'] = ['Location styles', 'Check the location styles available for map structure items using this profile. Default: all'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['label_color'] = ['Label Color', 'Select the default color for labels. Can be overriden by the settings in the location style.'];

/** Navigation */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel'] = ['Zoom Panel', 'Creates buttons to zoom in and out of the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_button'] = ['Additional Button in Zoom Panel', 'Display an additional button in the zoom panel. Clicking the button centers the map to the selected position.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoom_panel_slider'] = ['Zoom Panel Slider', 'Creates a slider instead of buttons to zoom in and out.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav'] = ['Navigation with Mouse', 'Activates the ability to zoom in and out and move the map with your mouse.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel'] = ['Mousewheel Zoom', 'If checked, the user can zoom in and out using the mouse wheel.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = ['Zoom with Double Click', 'If checked, the user can zoom in with a double click.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox'] = ['Zoombox with [Shift + Click]', 'Activates the ability to zoom in by selecting a rectangle by clicking the map while holding the shift key.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_dragmode'] = ['Rotate Map with [Ctrl + Shift + Click]', 'Activates the ability to rotate the map by clicking it while holding the shift and ctrl keys.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic'] = ['Kinetic Mouse Scrolling','If checked, scrolling with the mouse continues for a short period after the mouse button was let go (as opposed to stopping instantly.).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav'] = ['Touch Navigation', 'Enables touch screen navigation (requires touch screen device).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav'] = ['Keyboadr Navigation', 'Enables moving the map with the arrow keys and zooming in and out with the + and - keys, respectively.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['fullscreen'] = ['Full Screen Mode', 'Shows a button to switch to full screen mode.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['print'] = ['Map Export', 'Shows a button to export the map as an image file.'];

/** Kartenstruktur */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard'] = ['Enable Starboard','Enables the Starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher'] = ['Show Map Elements', 'If checked the map elements are shown in the starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label'] = ['Starboard Header Map Elements', 'Default: "Map Elements"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher'] = ['Show Base Maps', 'If checked, the base maps can be selected in the Starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'] = ['Starboard Header Map Elements', 'Default: "Base Maps"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open'] = ['Open Starboard Automatically', 'If checked, the starboard is open by default.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label'] = ['Starboard Header', 'General Starboard Header.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter'] = ['Enable Starboard Filter', 'Shows the Starboard Filter.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button'] = ['Activate Button for Starboard','Creates a Button in order to show and hide all elements in the starboard with one click.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_div'] = ['DIV for Starboard', 'Enter the ID of an existing DIV element if you want to put the Starboard somewhere else on your page.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all'] = ['Cluster über alle Layer', 'Erstellt ein Cluster über alle Layer. Überschreibt die Einstellungen im Strukturelement. Achtung! Diese Funktion ist nicht für alle Strukturelemente geeignet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance'] = ['Cluster distance', 'Cluster distance (default 20px)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor'] = ['Fill color', 'Select the fill color of the cluster bubble.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor'] = ['Font color', 'Select the font color of the cluster bubble.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom'] = ['Maximal zoom', 'Select the maximal zoomlevel. The cluster is splitted on click afterwards '];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_dist_spider'] = ['Cluster distance (seperated)','Select the distance between seperated points of a cluster.'];

/** Karteninformationen */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution'] = ['Attribution', 'Shows the attribution. Deactivate only when you are sure it is allowed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = ['Show initially collapsed', 'Collapse the attribution by default. Otherwise the Attribution is visible when entering the page, but is still collapsible.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = ['Show con4gis-logo', 'Shows the con4gis-logo on the map. You can turn it off, but we would appreciate it if you\'d mention "con4gis" at a different location on your page.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution'] = ['DIV attribution', 'Enter the ID of an existing DIV element if you want to put the attributon outside the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overviewmap'] = ['Overview map', 'Adds a button in the lower right corner of the map, which when pressed shows an overwiew map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['graticule'] = ['Graticule', 'Shows a button, which activates a graticule that visualizes the latitude and longitude on the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline'] = ['Scale line', 'Shows a line which demonstrates the scale of the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition'] = ['Mouse coordinates', 'Shows the GEO coordinates of the current mouse position.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel'] = ['Show zoomlevel', 'Displays the current zoomlevel.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage'] = ['Info page (legend)', 'With content you will see the info button on map.'];

/** Kartenwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measuretool'] = ['Measure tools', 'Shows a button which activates tools for measuring distances/areas.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink'] = ['Permalink', 'Displays a link representing the current map state, which may be bookmarked or sent via E-Mail for example.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param'] = ['Use GET-parameter for permalink-values', 'If you want to use a GET-parameter for the permalink instead of the URL-hash you can name it here.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geobookmarks'] = ['Geo bookmarks (beta)', 'So you can store position/zoom bookmarks in your browser'];

/** Suchwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch'] = ['Activate search (search field)', 'Activates searchengine for searching places and coordinates.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_headline'] = ['Search headline', 'Specify a headline for the search or leave it empty, if no headline should be displayed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine'] = ['Searchengine', 'ATTENTION! Please take note to restrictions that may apply by the usage policy of the choosen provider. If you have choosen to use a custom URL, remember to add an attribution of that provider, if it\'s not your own server.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url'] = ['Custom searchengine-URL', 'The URL wich leads to the searchengine.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution'] = ['Custom searchengine-attribution', 'IMPORTANT! The copyrighttext of the searchengines provider.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key'] = ['Key for search-engine', 'If the selected search engine requires a key for the use of their service you can enter it here.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_show'] = ['Show search area', 'Shows the search button and input field on map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams'] = ['Parameters for the search', 'Enter keys and parameters in order to limit the search (<a href=https://wiki.openstreetmap.org/wiki/Nominatim>documentation</a>)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results'] = ['Search with a list of results', 'Shows the results as a list'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_count'] = ['Result count', 'Specify the maximum result count.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results_headline'] = ['Result list headline', 'Set a custom headline for the result list.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto'] = ['Zoomlevel', 'Zoomlevel to set after searching, e.g. 16'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds'] = ['Zoom to bounds', 'Zoom to the bounds of an area if provided by the search service (Nominatim).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate'] = ['Enable animation', 'Fly to found location.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult'] = ['Mark found location', 'Highlights the found location for a short time.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup'] = ['Open popup', 'Opens the popup for a feature at the location of the search (Works best with polygons).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = ['Show attribution of search service', 'Adds an attribution of the search service (Nominatim).  Deactivate only when you are sure it is allowed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_collapsed'] = ['Collapsed searchfield', 'Collapsed the searchfield by default.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_div'] = ['DIV for search', 'Enter the ID of an existing DIV element if you want to put the search field somewhere else on your page.'];

/** Editor */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor'] = ['Show editor on the map', 'Shows a button which activates an Editor for drawing locations, lines and areas on the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_point'] = ['Location styles for POIs', 'Choose location styles that can be used in the editor.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_line'] = ['Location styles for lines', 'Choose location styles that can be used in the editor.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_polygon'] = ['Location styles for polygons', 'Choose location styles that can be used in the editor.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_circle'] = ['Location styles for circles', 'Choose location styles that can be used in the editor.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_styles_freehand'] = ['Location styles for freehand drawing', 'Choose location styles that can be used in the editor.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_vars'] = ['Additional fields', 'Fields available for POIs, lines and polygons can be addressed using ${key} in popup, label and tooltip.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_show_items'] = ['Show other map structure items while editing', 'Check this if you do not want to hide other map structure items in the editor.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_helpurl'] = ['Help page URL', 'If you enter an URL here, a help link to the given URL is displayed inside the editor.'];

/** Geopicker (Position bestimmen) */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['is_backend_geopicker_default'] = ['Standard Profile for Backend Geopicker', 'If checked, this profile is used as backedn geopicker (structure elements, events, ...).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker'] = ['Show Geopicker (Frontend)', 'Adds a geopicker in the frontend, similar to the backend wizard to pick coordinates which can be used in forms.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx'] = ['Form field (Latitude)', 'The ID of an input field, where the latitude of the chosen location is stored.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy'] = ['Form field (Longitude)', 'The ID of an input field, where the longitude of the chosen location is stored.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv'] = ['Div element for Geopicker', 'If given, the latitude and longitude fields are placed within a div element with the given id. This can be useful to place them within a form.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = ['Show Geocoding Service Attribution', 'Adds the search service attribution (Nominatim).  Deactivate only if you are allowed to do so.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled'] = ['Disable Geopicker', 'If checked, the geopicker is disabled, but the location is still shown on the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous'] = ['Anonymous Geopicker', 'If checked, the exact position can no longer be identified, but is still within the given radius.'];

/** Cesium */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = ['Use Cesium', 'Transforms the 2D Map into a 3D globe.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always']  = ['Always use Cesium', 'Activates Cesium for all basemaps. (If you only want to do so for specific basemaps, you can do so in the basemap setting.)'];

/** Einstellungen zum Klick-Verhalten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow'] = ['Open Links in new Window', 'If checked, links attempt to open in a new window.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on'] = ['Open Links on', 'Select on which mouse action a link should be opened, if a link is specified.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups'] = ['Popups on Mouse Hover', 'Shows a popup if the mouse pointer rests on a location.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay'] = ['Mouse Hover Popups stay open', 'Popups that have been opened on mouse hover are not closed when the mouse pointer leaves the location.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandling'] = ['Popup handling', 'popup- or map position handling.'];

/** Sonstiges */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpassEngine'] = ['Overpass Server Technology', 'Choose your preferred Overpass Server Technology'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url'] = ['URL of Overpass-API'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div'] = ['Div element for Map', 'If given, the map is placed within a div element with the given id.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['account'] = ['Account Button', 'Select a frontend module to see the account button on map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'] = ['Remember Button States', 'If checked, button states are cached.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit'] = ['Convert large checkbox lists to Chosen Fields', 'If at least this many entries are in the list, it are converted to a chosen field. Select 0 to disable. this function.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filter_div'] = ['DIV for map filter', 'Set a CSS selector for a DIV element in which the map filter will be displayed.'];
/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK']   = 'Single mouseclick';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL']   = 'Double mouseclick';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Default-Theme';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['0'] = 'Off';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['1'] = 'Rotate map';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_mouse_nav_dragmode']['2'] = 'Rotate and zoom map';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['1'] = 'with World-Icon (to 0 coordinate and min zoom)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['2'] = 'with Home-Icon (to configured map zoom)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_zoom_panel_button']['3'] = 'with Position-Icon (to browser/device position)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim by Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim by MapQuest (<a href="http://developer.mapquest.com/web/products/open/nominatim" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Custom';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis.io mapservices (<a href="https://con4gis.io" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['5'] = 'Pelias (<a href="https://pelias.io/" target="_blank">usage policy</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['1'] = 'Custom overpass server';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['2'] = 'con4gis.io mapservices (<a href="https://con4gis.io" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['3'] = 'Public overpass server (<a href="http://overpass-api.de/" target="_blank">usage policy</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['keys']       = ['Key','e.g.:countrycodes'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['params']     = ['Parameter', 'e.g.: en'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['0'] = 'Classic handling (popup points to element position)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['1'] = 'Mapview changing (map moves to show popup)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['2'] = 'Centered popup (popup will be centered on map)';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new'] = ['New map profile', 'Create new map profile'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit'] = ['Edit map profile', 'Edit map profile ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy'] = ['Duplicate map profile', 'Duplicate map profile ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete'] = ['Delete map profile', 'Delete map profile ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show'] = ['Details', 'Show details of map profile ID %s'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend'] = 'General';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend'] = 'Base layers';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend'] = 'Location styles';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend'] = 'Navigation';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend'] = 'Starboard settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend'] = 'Map information';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['measure_legend'] = 'Measure tools';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend'] = 'Geosearch';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editor_legend'] = 'Map editor';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpassLegend'] = 'Overpass-API';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_legend'] = 'Geopicker';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend'] = 'Cesium (globe view)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend'] = 'Click settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['miscellaneous_legend'] = 'Miscellaneous';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Editor label';
