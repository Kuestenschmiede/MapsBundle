Valid **mapData**-values:
=========================

*@optional*  
**addIdToDiv** *(boolean)*  
  >If set to `true` the *mapId* will be appended to *mapDiv*.  
  >***default***: `false`.

*@optional*  
**attribution** *(object)*  
  >Attribution settings
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >If set to `true` the attributions will be shown on the Map.  
  >  >***default***: `true`.
  >
  >*@optional*  
  >**collapsed** *(boolean)*  
  >  >If set to `true` the attributions will be initially collapsed.
  >  >***default***: `false`.
  >
  >*@optional*  
  >**cfg_logo** *(boolean)*  
  >  >If set to `true` the "con4gis" logo will be shown on the map.  
  >  >***default***: `true`.
  >  
  >*@optional*  
  >**div** *(string)*  
  >  >Enter the ID of an existing div, 
  >  >if the attributions should be displayed outside the map.
  >  
  >*@optional*  
  >**additional** *(string)*  
  >  >Extents existing attributions with a custom one.

*@optional*  
**calc_extend** *(string)*  
  >currently not used.

*@optional*  
**center** *(object)*  
  >Defines the initial view on the map.  
  >
  >*@optional*  
  >**lat** *(float)*  
  >  >The latitude where the view should center on the map.  
  >  >Needs to be a valid float between `-90.0` and `90.0`.  
  >  >***default***: `37.41`.
  >
  >*@optional*  
  >**lon** *(float)*  
  >  >The longitude where the view should center on the map.  
  >  >Needs to be a valid float between `-180.0` and `180.0`.  
  >  >***default***: `8.82`.
  >  
  >*@optional*  
  >**rotation** *(float|integer)*  
  >  >The initial rotation for the View on the Map.  
  >  >***default***: `0`.
  >
  >*@optional*  
  >**zoom** *(integer)*  
  >  >The initial zoom for the View on the Map.  
  >  >Needs to be an integer between `0`(far) and `20`(near).  
  >  >***default***: `4`.
 
*@optional*  
**editor** *(object)*  
  >Defines the initial view on the map.  
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >If set to `true` the editor-button will appear on the map.
  >  >***default***: `false`.
  >
  >*@optional*  
  >**type** *(string)*  
  >  >The type of the editor.
  >  >Can be either `frontend` or `backend`.  
  >  >***default***: `frontend`.
  >
  >*@optional*  
  >**open** *(boolean)*  
  >  >If set to `true` the editor will be opened automatically.
  >  >Note, that only one Portsideelement can be opened initially.  
  >  >***default***: `false`.
  >  
  >*@optional*  
  >**target** *(string)*  
  >  >When the editor should be displayed outside the map, 
  >  >you can define the target-container here.  
  >  >***default***: null.

*@optional*  
**fullscreen** *(boolean)*  
  >If set to `true` the fullscreen-button will appear on the Map.

*@optional*  
**geolocation** *(boolean)*  
  >
  
*@optional*  
**geolocation_zoom** *(integer)*  
  >

*@optional*  
**geosearch** *(object)*  
  >Geosearch settings.  
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >Enable geosearch.
  >  
  >*@optional*  
  >**engine** *(string)*  
  >  >The URL of the engine you want to use.
  >  
  >*@optional*  
  >**custom_attribution** *(string)*  
  >  >Replace default attribution with this string.
  >  
  >*@optional*  
  >**attribution** *(boolean)*  
  >  >When set to `false`, the attribution 
  >  >for the search will be hidden.
  >  
  >*@optional*  
  >**animate** *(boolean)*  
  >  >Animate the pan & zoom to result location.
  >  >Default is `false`.
  >  
  >*@optional*  
  >**markresult** *(boolean)*  
  >  >Shortly highlights the found location.
  >  >Default is `false`.
  >  
  >*@optional*  
  >**searchzoom** *(integer)*  
  >  >The zoomlevel the map should zoom to, 
  >  >when centering a found location.
  >  
  >*@optional*  
  >**zoombounds** *(boolean)*  
  >  >When set to `true`, the search will zoom to locationboundaries.
  >  
  >*@optional*  
  >**div** *(string)*  
  >  >Enter the ID of an existing div, 
  >  >if the Searchbar should be displayed outside the map.

*@optional*  
**graticule** *(boolean)*  
  >If set to `true` the graticule-button will appear on the Map,
  >which can toggle a grid layed on the map.

*@optional*  
**height** *(string)*  
  >Defines the height of the map and should be valid CSS.  
  >e.g.: `10px` or `auto`.

*@optional*  
**keyboard_nav** *(object)*  
  >A set of booleans to handle keyboard-navigation.  
  >
  >*@optional*  
  >**pan** *(boolean)*  
  >  >Enables Map-panning with the keyboards arrow-keys.
  >
  >*@optional*  
  >**zoom** *(boolean)*  
  >  >Enables Map-zooming with `+` and `-`.

*@optional*  
**mapDiv** *(string)*  
  >The `id` of the `<div>` where the map should be displayed.  
  >***default***: `c4g_Map`.

*@optional*  
**mapId** *(string)*  
  >The unique ID of the Map.  
  >***default***: `1`.

*@optional*  
**margin** *(string)*  
  >Defines the margin of the map and should be valid CSS.  
  >e.g.: `10px auto` or `10px 0 20px 0`.

*@optional*  
**mouse_nav** *(object)*  
  >A set of booleans to handle mouse-navigation.  
  >
  >*@optional*  
  >**doubleclick_zoom** *(boolean)*  
  >  >Enables Map-zooming with a doubleclick.
  >  
  >*@optional*  
  >**drag_pan** *(boolean)*  
  >  >Enables Map-panning with the mouse.
  >  
  >*@optional*  
  >**drag_rotate** *(boolean)*  
  >  >Enables Map-rotating with `Alt+LeftMouseButton`.
  >  
  >*@optional*  
  >**drag_rotate_zoom** *(boolean)*  
  >  >Enables Map-rotating and -zooming with `Alt+LeftMouseButton`.
  >  
  >*@optional*  
  >**drag_zoom** *(boolean)*  
  >  >Enables "box-zooming" with `Alt+LeftMouseButton`.
  >  
  >*@optional*  
  >**kinetic** *(boolean)*  
  >  >Enables "kinetic-scrolling" for *"drag-pan"*.
  >  
  >*@optional*  
  >**wheel_zoom** *(boolean)*  
  >  >Enables Map-zooming with the mousewheel.

*@optional*  
**mouseposition** *(boolean)*  
  >If set to `true` the mouseposition will be shown on the Map.

*@optional*  
**permalink** *(object)*  
  >Permalink settings.  
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >Shows the Permalink-button on the map.
  >  
  >*@optional*  
  >**get_parameter** *(string)*  
  >  >Name of the GET-parameter used for permalink-values in URL.
  >  >If left `undefined` the hash-parameter will be used instead.

*@optional*  
**permalink_param** *(string)*  
  >The GET-parameter containing the permalink-parameters.
  >If this parameter is `undefined` or `false` the hash-parameter
  >of the URL is assumed to carry the permalink parameters.

*@optional*  
**profile** *(integer)*  
  >currently not used.

*@optional*  
**scaleline** *(boolean)*  
  >If set to `true` a scaleline will be shown on the Map.

*@optional*  
**starboard** *(object)*  
  >Starboard settings.  
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >Shows the Starboard on the map.
  >  
  >*@optional*  
  >**label** *(boolean)*  
  >  >Overrides the defaults Starboard-title.
  >  
  >*@optional*  
  >**open** *(boolean)*  
  >  >Initially opens the Starboard.
  >  
  >*@optional*  
  >**div** *(string)*  
  >  >Enter the ID of an existing div, 
  >  >if the Starboard should be displayed outside the map.

*@optional*  
**baselayerswitcher** *(object)*  
  >Baselayerswitcher settings. 
  >They are only handled, if the Starboard is enabled  
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >Shows the Baselayerswitcher inside the Starboard.
  >  
  >*@optional*  
  >**label** *(string)*  
  >  >Overrides the defaults Baselayerswitcher-title.

*@optional*  
**layerswitcher** *(object)*  
  >Layerswitcher settings. 
  >They are only handled, if the Starboard is enabled  
  >
  >*@optional*  
  >**enable** *(boolean)*  
  >  >Shows the Layerswitcher inside the Starboard.
  >  
  >*@optional*  
  >**label** *(string)*  
  >  >Overrides the defaults Layerswitcher-title.

*@optional*  
**touch_nav** *(object)*  
  >A set of booleans to handle touch-navigation.  
  >
  >*@optional*  
  >**rotate** *(boolean)*  
  >  >Enables 'pinch-rotate'.
  >
  >*@optional*  
  >**zoom** *(boolean)*  
  >  >Enables 'pinch-zoom'.

*@optional*  
**width** *(string)*  
  >Defines the width of the map and should be valid CSS.  
  >e.g.: `10px` or `100%`.

*@optional*  
**zoom_extent** *(boolean)*  
  >If set to `true` the "extend to maxZoom"-Button will be shown on the Map.

*@optional*  
**zoom_panel** *(boolean)*  
  >If set to `true` the "Zoompanel" will be shown on the Map.

*@optional*  
**zoomlevel** *(boolean)*  
  >If set to `true` the zoomlevel will be shown on the Map.



&nbsp;
---
<sub>&copy; by Küstenschmiede GmbH Software & Design</sub>
