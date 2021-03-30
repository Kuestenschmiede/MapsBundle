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

/**
 * Fields
 */

/** Allgemeine Daten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['name'] = ['Name', 'Enter a name for the map profile.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['theme'] = ['Layout', 'Select your own theme.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['external_elements'] = ['External elements', 'Choose which elements should be displayed outside of the map.'];

/** Basiskarten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayers'] = ['Base layers', 'Check the baselayers you wish to see in the Starboard. Default: all. The sorting can be adjusted via the baselayer module (list).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_filter'] = ['Enable basemap filter', 'Displays a search filter for the basemaps above the tree.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['default_baselayer'] = ['Default Base Layer', 'Select the base layer to be pre-selected when the map is loaded.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_label'] = ['Header Base Maps', 'Default: "Base Maps"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayerswitcher_filter'] = ['Enables baselayer filter', 'Shows a filter field above the baselayerswitcher.'];

/** Lokationsstile */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyles'] = ['Location styles', 'Check the location styles available for map structure items using this profile. Default: all'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['label_color'] = ['Label Color', 'Select the default color for labels. Can be overriden by the settings in the location style.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_locstyles_zoom'] = ['Scaling locations during zoom', 'Set this checkbox if the locations (with icons) should be scaled accordingly when zooming the zoom level.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_src_zoom'] = ['Initial zoom', 'Specify the zoom level at which the locations should have their normal size.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_scale_factor'] = ['Scaling factor', 'Specify a scaling factor (between 0 and 1) by which the locations should be scaled up or down when zooming.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_min_scale'] = ['Minimum scaling', 'Specify a scaling that should not be undercut (locations are not scaled smaller than this value).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['resize_max_scale'] = ['Maximum scaling', 'Specify a scaling that should not be exceeded (locations are not scaled larger than this value).'];

/** Navigation */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav'] = ['Navigation with Mouse', 'Activates the ability to zoom in and out and move the map with your mouse.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_wheel'] = ['Mousewheel Zoom', 'If checked, the user can zoom in and out using the mouse wheel.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_doubleclick_zoom'] = ['Zoom with Double Click', 'If checked, the user can zoom in with a double click.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_zoombox'] = ['Zoombox with [Shift + Click]', 'Activates the ability to zoom in by selecting a rectangle by clicking the map while holding the shift key.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouse_nav_kinetic'] = ['Kinetic Mouse Scrolling','If checked, scrolling with the mouse continues for a short period after the mouse button was let go (as opposed to stopping instantly.).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['touch_nav'] = ['Touch Navigation', 'Enables touch screen navigation (requires touch screen device).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['keyboard_nav'] = ['Keyboard Navigation', 'Enables moving the map with the arrow keys and zooming in and out with the + and - keys, respectively.'];

/** Kartenstruktur */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['layerswitcher_label'] = ['Starboard Header Map Elements', 'Default: "Map Elements"'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_open'] = ['Open Starboard Automatically', 'If checked, the starboard is open by default.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_label'] = ['Starboard Header', 'General Starboard Header.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_filter'] = ['Enable Starboard Filter', 'Shows the Starboard Filter.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_button'] = ['Activate Button for Starboard','Creates a Button in order to show and hide all elements in the starboard with one click.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_locstyles'] = ['Show location styles on the Starboard','If possible, the location styles of the map are displayed on the corresponding element in the starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboardInvertZoomActivate'] = ['Layertext zoombutton','Instead of deactivating and activating the layer, the view zooms to it.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['colorZoomMarker'] = ['Zoombutton color','When zooming on the locations, they are marked in the selected color.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxZoomStarboard'] = ['Maximum zoom', 'Maximum zoom for zooming on the location (1-22). '];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_all'] = ['Cluster über alle Layer', 'Erstellt ein Cluster über alle Layer. Überschreibt die Einstellungen im Strukturelement. Achtung! Diese Funktion ist nicht für alle Strukturelemente geeignet.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_distance'] = ['Cluster distance', 'Cluster distance (default 20px)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fillcolor'] = ['Fill color', 'Select the fill color of the cluster bubble.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_fontcolor'] = ['Font color', 'Select the font color of the cluster bubble.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_zoom'] = ['Maximal zoom', 'Select the maximal zoomlevel. The cluster is splitted on click afterwards '];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_dist_spider'] = ['Cluster distance (seperated)','Select the distance between seperated points of a cluster.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cluster_scale'] = ['Scale cluster elements','Choose wether you want to display clusters with more elements bigger.'];

/** Karteninformationen */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution'] = ['Attribution', 'Shows the attribution. Deactivate only when you are sure it is allowed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['always_show_attribution'] = ['Always show', 'The copyright text is always displayed and must not be closed (recommended).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['collapsed_attribution'] = ['Show initially collapsed', 'Collapse the attribution by default. Otherwise the Attribution is visible when entering the page, but is still collapsible.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['add_attribution'] = ['Additional copyright text', 'is added to the copyright text of the map service used.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cfg_logo_attribution']  = ['Show con4gis-logo', 'Shows the con4gis-logo on the map. You can turn it off, but we would appreciate it if you\'d mention "con4gis" at a different location on your page.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['div_attribution'] = ['DIV attribution', 'Enter the ID of an existing DIV element if you want to put the attributon outside the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['scaleline'] = ['Scale line', 'Shows a line which demonstrates the scale of the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mouseposition'] = ['Mouse coordinates', 'Shows the GEO coordinates of the current mouse position.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['zoomlevel'] = ['Show zoomlevel', 'Displays the current zoomlevel.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infopage'] = ['Info page (legend)', 'With content you will see the info button on map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp'] = ['Initially opened map control', 'Here you can select whether an element should be displayed initially open and if so, which one.'];

/** Kartenwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['permalink_get_param'] = ['Use GET-parameter for permalink-values', 'If you want to use a GET-parameter for the permalink instead of the URL-hash you can name it here.'];

/** Suchwerkzeuge */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch'] = ['Activate search (search field)', 'Activates searchengine for searching places and coordinates.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_headline'] = ['Search headline', 'Specify a headline for the search or leave it empty, if no headline should be displayed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_engine'] = ['Searchengine', 'ATTENTION! Please take note to restrictions that may apply by the usage policy of the choosen provider. If you have choosen to use a custom URL, remember to add an attribution of that provider, if it\'s not your own server.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_url'] = ['Custom searchengine-URL', 'The URL wich leads to the searchengine.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_customengine_attribution'] = ['Custom searchengine-attribution', 'IMPORTANT! The copyrighttext of the searchengines provider.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_key'] = ['Key for search-engine', 'If the selected search engine requires a key for the use of their service you can enter it here.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams'] = ['Parameters for the search', 'Enter keys and parameters in order to limit the search (<a href="https://wiki.openstreetmap.org/wiki/Nominatim" rel="noopener" target="_blank">documentation</a>)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results'] = ['Search with a list of results', 'Shows the results as a list'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_count'] = ['Result count', 'Specify the maximum result count.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_results_headline'] = ['Result list headline', 'Set a custom headline for the result list.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_locstyle'] = ['Location style result', 'Select a location style that should be used for marking the result on the map. If no style is selected, red concentric circles are used.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoomto'] = ['Zoomlevel', 'Zoomlevel to set after searching, e.g. 16'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_zoombounds'] = ['Zoom to bounds', 'Zoom to the bounds of an area if provided by the search service (Nominatim).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate'] = ['Enable animation', 'Fly to found location.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_markresult'] = ['Mark found location', 'Highlights the found location for a short time.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_popup'] = ['Open popup', 'Opens the popup for a feature at the location of the search (Works best with polygons).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_attribution'] = ['Show attribution of search service', 'Adds an attribution of the search service (Nominatim). Deactivate only when you are sure it is allowed.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_placeholder'] = ["Placeholder for input field", "Specify a placeholder that is displayed until an input is made."];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_animate_duration'] = ["Animation Duration", "Specify the time in milliseconds for the animation duration to the search result. Default: 2000"];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_result_duration'] = ["Result Duration", "Specify the time in milliseconds for highlighting the search result. Default: 3000"];

/** Geopicker (Position bestimmen) */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker'] = ['Show Geopicker (Frontend)', 'Adds a geopicker in the frontend, similar to the backend wizard to pick coordinates which can be used in forms.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldx'] = ['Form field (Latitude)', 'The ID of an input field, where the latitude of the chosen location is stored.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_fieldy'] = ['Form field (Longitude)', 'The ID of an input field, where the longitude of the chosen location is stored.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_searchdiv'] = ['Div element for Geopicker', 'If given, the latitude and longitude fields are placed within a div element with the given id. This can be useful to place them within a form.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_attribution'] = ['Show Geocoding Service Attribution', 'Adds the search service attribution (Nominatim).  Deactivate only if you are allowed to do so.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_disabled'] = ['Disable Geopicker', 'If checked, the geopicker is disabled, but the location is still shown on the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geopicker_anonymous'] = ['Anonymous Geopicker', 'If checked, the exact position can no longer be identified, but is still within the given radius.'];

/** Cesium */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium'] = ['Use Cesium', 'If the option Cesium (globe display) has been activated in the selected base map(s), these will be displayed as a globe.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_always']  = ['Always use Cesium', 'If the globe display of all base maps selected here in the map profile is desired, this option must be activated. No further specifications in the base maps are necessary.)'];

/** Einstellungen zum Klick-Verhalten */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientation'] = ['Tooltip-position', 'Position of the tooltip relative to the mouse.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_newwindow'] = ['Open Links in new Window', 'If checked, links attempt to open in a new window.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['link_open_on'] = ['Open Links on', 'Select on which mouse action a link should be opened, if a link is specified.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups'] = ['Popups on Mouse Hover', 'Shows a popup if the mouse pointer rests on a location.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hover_popups_stay'] = ['Mouse Hover Popups stay open', 'Popups that have been opened on mouse hover are not closed when the mouse pointer leaves the location.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandling'] = ['Popup handling', 'popup- or map position handling.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHeadline'] = ['Popup headline', 'Set a headline for the popup.'];

/** Experteneinstellungen */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpassEngine'] = ['Overpass Server Technology', 'Choose your preferred Overpass Server Technology'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['overpass_url'] = ['URL of Overpass-API'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['custom_div'] = ['Div element for Map', 'If given, the map is placed within a div element with the given id.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['caching'] = ['Remember Button States', 'If checked, button states are cached.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['be_optimize_checkboxes_limit'] = ['Convert large checkbox lists to Chosen Fields', 'If at least this many entries are in the list, it are converted to a chosen field. Select 0 to disable. this function.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filters'] = ['Filters', 'Choose your filters for the map'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filterHandling'] = ['Filter as multicheckbox', 'Display the filter as a multicheckbox (logical Or instead of And).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['filterResetButton'] = ['Button to reset filter', 'Shows a button, which resets all filters at once.'];
/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoom'] = ['Zooming controls','Create buttons for zooming in and out.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoomPosition'] = ['Zoom to position','Zooms to the current device position on safe sides.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoomHome'] = ['Zoom back (house)','Zooms back to the preset position on the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['zoomExtent'] = ['Zoom out (world)','Zooms back to the smallest possible zoom level.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['fullscreen'] = ['Fullscreen mode','Displays a button to switch to fullscreen browser mode.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['print'] = ['Map export','Shows a button that allows exporting the map as PNG. Please pay attention to the copyright notes of the map provider.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['graticule'] = ['Geographical network','Fades in a switch that displays a geographic grid that visualizes longitude and latitude using horizontal and vertical lines.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['layerswitcher'] = ['Map structure element selection (Starboard)','If you select this checkbox, the selection list of map structural elements is displayed in a separate tab on the Starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['baselayerswitcher'] = ['Base map selection','If you select this checkbox, the selection list of base maps is displayed in a separate tab on the starboard.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['geosearch'] = ['Map search','Represents button and search field in the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['legend'] = ['Legend','Here you can store your own information (e.g. as legend).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['rotate'] = ['Rotate map with [Ctrl + Shift + Click].','Activates the possibility to rotate (and zoom) the map using the Ctrl+Shift keys and the left mouse button. Also works with 2-finger touch.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['measure'] = ['Measure tools','Hides a button that can be used to activate tools for measuring distances and areas.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['overview'] = ['Overview map','Creates the possibility to display a small map of the surroundings via a button on the right side of the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['mapFunctions']['reference']['permalink'] = ['Permalink generator','Calculates a copyable link which represents the current map section of the map and which can be sent e.g. in e-mails.'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['CLICK']   = 'Single mouseclick';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['DBLCL']   = 'Double mouseclick';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references']['default_theme']   = 'con4gis Default-Layout';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['1'] = 'Nominatim by Openstreetmap (<a href="https://operations.osmfoundation.org/policies/nominatim/" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['2'] = 'Nominatim by MapQuest (<a href="http://developer.mapquest.com/web/products/open/nominatim" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['3'] = 'Custom';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['4'] = 'con4gis.io mapservices (<a href="https://con4gis.io" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_geosearch_engine']['5'] = 'Pelias (<a href="https://pelias.io/" rel="noopener" target="_blank">usage policy</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['1'] = 'Custom overpass server';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['2'] = 'con4gis.io mapservices (<a href="https://con4gis.io" rel="noopener" target="_blank">usage policy</a>)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['referencesOverpassEngine']['3'] = 'Public overpass server (<a href="http://overpass-api.de/" rel="noopener" target="_blank">usage policy</a>)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['keys']       = ['Key','e.g.:countrycodes'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearchParams']['params']     = ['Parameter', 'e.g.: en'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['0'] = 'Classic handling (popup points to element position)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['1'] = 'Mapview changing (map moves to show popup)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['2'] = 'Centered popup (popup will be centered on map)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['popupHandlingReferences']['3'] = 'Popup will be rendered into an own container at the bottom of the map (default)';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['0'] = 'Bottom left';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['1'] = 'Top left';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['2'] = 'Bottom right';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['tooltipOrientationReferences']['3'] = 'Top right';


$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs'][''] = 'none';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['starboard'] = 'Starboard';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['search'] = 'Geosearch';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['baselayers'] = 'Base map switcher';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['measuretools'] = 'Measure Tools';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initial_open_comp']['refs']['legend'] = 'Legend';

/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['new'] = ['New map profile', 'Create new map profile'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['edit'] = ['Edit map profile', 'Edit map profile ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['copy'] = ['Duplicate map profile', 'Duplicate map profile ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['delete'] = ['Delete map profile', 'Delete map profile ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['show'] = ['Details', 'Show details of map profile ID %s'];

/**
 * xlabel buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editBaselayers'] = ['Edit baselayers'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editLocstyles'] = ['Edit locstyles'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editThemes'] = ['Edit themes'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['general_legend'] = 'General';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['baselayer_legend'] = 'Base layers (base map switcher)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['locstyle_legend'] = 'Location styles';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['navigation_legend'] = 'Navigation';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['starboard_legend'] = 'Starboard (map content switcher)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['attribution_legend'] = 'Copyright informations (attributions)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['information_legend'] = 'Additional map informations';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['geosearch_legend'] = 'Geosearch';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['cesium_legend'] = 'Cesium (globe view)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_legend'] = 'Click settings';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['expert_legend'] = 'Expert settings';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Editor label';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['starboard'] = "Starboard";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['baselayer'] = "Baselayer switcher";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['permalink'] = "Permalink";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['search'] = "Search";
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['measuretools'] = "Measuretools";
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['legend'] = "Legend";
//$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['overviewmap'] = "Overview map";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['filter'] = "Mapfilter";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['element_type_refs']['popup'] = "Popup";


/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['infotext'] = 'The map profile allows you to design the map very individually. Here you choose the functions of the map and link the map layout and possible base maps. '.
    'Mehr auf <a href="https://docs.con4gis.org/profiles-con4gis-maps" title="con4gis Docs map profiles" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';
