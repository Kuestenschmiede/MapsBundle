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
To add a new hook to the software the function `c4g.maps.utils.callHookFunctions()` needs to be called at the point where the plugin should be triggered:
    `c4g.maps.utils.callHookFunctions(c4g.maps.hook."hook_name", {that: this, ["additional: parameter"]});`
Hooks should always be placed as array inside the `c4g.maps.hook` object and follow the following name convention: *callingObject_shortDescriptiveName*.
Additional parameters can be anything that may be needed by the plugin.

>**Note:**
>`The c4g.maps.hook` object can be `undefined`, if no hooks are registered. Therefore perform always a object validation before using it. 


Creating a plugin
-----------------
The plugin itself just needs to register a function to an existing hook and know which parameters it has to expect from it.
The namingconvention for plugins should be *c4g-maps-plugin-**pluginname**.js*.
The following is an example plugin, called by the *layerswitcher* for every listitem, changing the background of these items to "red":

    // system/modules/pluginModule/assets/js/c4g-maps-plugin-test.js
    // "namespace"
    this.c4g = this.c4g || {};
    this.c4g.maps = this.c4g.maps || {};
    this.c4g.maps.hook = this.c4g.maps.hook || {};
    this.c4g.maps.hook.layerswitcher_forEachItem = this.c4g.maps.hook.layerswitcher_forEachItem || [];

    (function ($, c4g) {
      'use strict';

    c4g.maps.hook.layerswitcher_forEachItem.push(
      function (objParam) {
        objParam.entry.css({background: 'red'});
      }
    );

    }(jQuery, this.c4g));


To load this plugin, the module containing it needs to provide some kind of loader-function, which adds the plugin-script to the `$GLOBALS['TL_JAVASCRIPT']`-array. This function could look like this:

    <?php
    // system/modules/pluginModule/classes/PluginLoader.php
    namespace c4g\Test;

    class PluginLoader
    {

        public function load()
        {
            $GLOBALS['TL_JAVASCRIPT']['c4g-maps-plugin-test'] = 'system/modules/con4gis_maps_plugin_test/assets/js/c4g-maps-plugin-test.js';
        }
    }


To register this function to the Contao-Hook, it must be appended to `$GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins']` in the `config.php` as an array containing the classname of the loader and the function that should be called. For example:

    // system/modules/pluginModule/config/config.php
    $GLOBALS['TL_HOOKS']['C4gMapsLoadPlugins'][] = array('c4g\Test\PluginLoader','load');


>**Note:**
>Make sure the module has the following entry in its `autoload.ini`, to make sure that it is loaded **after** *con4gis-maps3*:
>`requires[] = "con4gis_maps3"`



&nbsp;
---
<sub>&copy; by Küstenschmiede GmbH Software & Design</sub>