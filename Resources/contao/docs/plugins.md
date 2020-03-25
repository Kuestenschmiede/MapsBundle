Plugins
=======

*con4gis-Maps* provides a possibility to implement plugins from external modules. This document describes how to achieve the creation of such a plugin and how to add new "hooks" to *con4gis-Maps*.



General process
---------------
The server will use a Contao-hook called `C4gMapsLoadPlugins` to call a function of an external module that loads the external JS-plugin-files.
These plugins will be loaded before `c4g-maps.js` is executed, giving them the chance to register themself to a specific hook.
When the main code reaches one of this hooks it will call every function that is registered to it. The parameters passed to that function can vary from hook to hook.



Adding a new hook to *con4gis-Maps*
-----------------------------------
To add a new hook to the software the function `utils.callHookFunctions()` from `c4g-maps-utils.js` needs to be called at the point where the plugin should be triggered:
    `utils.callHookFunctions(window.c4gMapsHooks."hook_name", {that: this, ["additional: parameter"]});`
Hooks should always be placed as array inside the `window.c4gMapsHooks` object and follow the following name convention: *callingObject_shortDescriptiveName*.
Additional parameters can be anything that may be needed by the plugin.

>**Note:**
>The `window.c4gMapsHooks` object can be `undefined`, if no hooks are registered. Therefore perform always a object validation before using it. 


Creating a plugin
-----------------
The plugin itself just needs to register a function to an existing hook and know which parameters it has to expect from it.
The following is an example plugin, called by the *layerController* after loading the layers, adding a custom layer via JavaScript":
    
       <script>
        window.c4gMapsHooks = window.c4gMapsHooks || {};
       	window.c4gMapsHooks.hook_layer = [];
       	var hookFunction = function(data) {
       		data.config.countAll++;
       		data.layer.push({
       		  activeForBaselayers: 'all', /* only show with specific baselayers, default is all */
       		  content: [
       			  {
       				data: { /* valid GeoJSON*/
       					geometry: {
       						coordinates: [9.5, 52],
       						type: 'Point'
       					},
       					type: 'Feature',
       					properties: {
       						graphicTitle: "TestHook",
       						projection: "EPSG:4326",
       						popup: {
       						    async: false,
       						    content: '<ul><li class="name">TestHook</li><li class="type">Test</li><li class="description"><p>This is a test.</p></li></ul>'
       						},
       						tooltip: "TestHook"
       					}
       				},
       				type: "GeoJSON",
       				id: 9999, /* ids should be unique */
       				locationStyle: "1" /* insert matching locationStyleId */
       			  }
       		  ],
       		  childs: [
       		    /* include array childs in the same format */
       		  ],
       		  childsCount: 0,
       		  display: true, /* whether the layer should be displayed initialy */
       		  id: 9999, /* ids should be unique */
       		  name: "TestHook",
       		  noFilter: "", /* exempt from starboard-filter */
       		  noRealFilter: false, /*exempt from map-filter */
       		  type: "GeoJSON"
       		});
       	};
       	window.c4gMapsHooks.hook_layer.push(hookFunction);
       </script>
    


This example is suited to be used within the "Custom JavaScript code"-element in the page layout.
    



&nbsp;
---
<sub>&copy; by Küstenschmiede GmbH Software & Design</sub>