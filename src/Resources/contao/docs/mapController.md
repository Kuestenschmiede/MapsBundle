mapController
=============

The `mapController` is the main-object of *con4gis-Maps*.

It contains all the necessary data in order for *con4gis-Maps* to work properly.
It is instantiated in the "namespace" `c4g.maps` as `mapController_"mapId"`
(Where *mapId* is the ID of the used mapstructure, given by Contao, and ensures that multiple maps can be used on the same page).

>**Developer note:**
>If you need to implement an object that needs to be accessed outside its class, add it to the instantiated `mapController`, or `proxy` (depends on the kind of use it should fulfill).

&nbsp;

You can access the following objects through the `mapController`:

**proxy**
>An important core-object that handles the entire (base-)layer logic. It loads the needed data for (base-)layers via AJAX, creates them and handles dis-/enabling different (base-)layers.
>It contains a few hooks for other functions to be executed on specific conditions. To add a function as a hook, just `.push()` it to the appropriate array (e.g.: To add a function that should be executed when the proxy finished loading the layers, type something like: 
>`proxy.hook_layer_loaded.push(**myFunction**);` ).
>
>The proxy provides the following hooks:
>- `hook_baselayer_loaded:` Triggers after baselayers were loaded
>- `hook_baselayer_visibility`: Triggers after baselayer visibility has changed
>- `hook_layer_loaded`: Triggers after layers were loaded
>- `hook_layer_visibility`: Triggers after layer visibility has changed
>- `hook_map_click`: Triggers after clicking on the map
>- `hook_map_zoom`: Triggers after map-zoom was changed

**map** 
>The actual map-object (instance of `ol.Map`).

**data**
>The `mapData`-object that was used when instantiating the `mapController`.
>Look at `mapData-values.md` for more information.
>**Note** that the values it contains, may vary from the initial ones, since features like the *permalink* are able to modify them.

**activePortside**
>The active `Portside`-object ist placed here. If no `Portside`-element is active, this value is `false`.

**activeStarboard**
>The active `Starboard` ist placed here. If the `Starboard` is not active, this value is `false`.

**leftSlideElements**
>An array of all the *nodes* needed to be shifted right, when a `Portside`-container is opened. 

**rightSlideElements**
>An array of all the *nodes* needed to be shifted left, when the `Starboard` is opened. 

**spinner**
>The main `Spinner` that appears in the center of the `map`.
>It can be shown by calling its `.show()`-method and hidden by using `.hide()`.
>Both functions do not take any parameters, but ***note*** that `.show()` increments an internal counter and `.hide()`, which always decrements it, only hides the `Spinner` when the counter is `0` after doing so.


&nbsp;
---
<sub>&copy; by Küstenschmiede GmbH Software & Design</sub>