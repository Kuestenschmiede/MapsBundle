// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   * @param   {object}              opt_options  *optional* misc configuration options
   */
  c4g.maps.control.Starboard = function (opt_options) {

    this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'starboard',
      direction: 'right',
      filter: false
    }, opt_options);

    //c4g.maps.hook.starboard_loadPlugins = [];

    //set headline, since the definition above does not work for headline
    if (!this.options.headline || this.options.headline.length === 0) {
      //this.options.headline = c4g.maps.constant.i18n.STARBOARD;
    }

    this.hook_layerswitcher_loaded = this.hook_layerswitcher_loaded || [];

    //call Sideboard (parent) constructor
    c4g.maps.control.Sideboard.call(this, this.options);
  };
  ol.inherits(c4g.maps.control.Starboard, c4g.maps.control.Sideboard);

  // Add methods
  c4g.maps.control.Starboard.prototype = $.extend(c4g.maps.control.Starboard.prototype, {

    /**
     * Creates the basic html-elements for the starboard
     *
     * @return  {boolean}  'true' on success
     */
    init: function () {

      var plugin,
          renderLayertree,
          key,
          layer,
          self,
          fnRender,
          displayLayerswitcher = false;

      if (this.initialized) {
        return true;
      }

      self = this;

      // Load Starboard plugins
      this.plugins = {};

      // creates and renders the starboard plugins
      fnRender = function() {
        // loop through layers and check if there is any normal layertree to render
        for (key in self.options.mapController.proxy.layerController.arrLayers) {
          if (self.options.mapController.proxy.layerController.arrLayers.hasOwnProperty(key)) {
            layer = self.options.mapController.proxy.layerController.arrLayers[key];
            if (!layer.renderSpecial) {
              renderLayertree = true;
              break;
            }
          }
        }

        if (renderLayertree) {
          // do not display layerswitcher if there is nothing to switch
          if (self.options.mapController.proxy.layerController.arrLayers) {
            for(let id in self.options.mapController.proxy.layerController.arrLayers) {
              if (self.options.mapController.proxy.layerController.arrLayers[id].display) {
                displayLayerswitcher = true;
              }
            }
          }
        }

        // - load "Layerswitcher"
        if (self.options.layerSwitcherCreate && renderLayertree && displayLayerswitcher) {
          self.plugins.layerswitcher = new c4g.maps.control.starboardplugin.Layerswitcher(self);
        }

        // call hook to load additional starboard tabs (layers)
        c4g.maps.utils.callHookFunctions(self.hook_layerswitcher_loaded);


        // - check & load other Starboard-plugins (via hook)
        // called functions have to add themselves to this.plugins
        if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.starboard_loadPlugins === 'object') {
          c4g.maps.utils.callHookFunctions(c4g.maps.hook.starboard_loadPlugins, self);
          // - activate new plugins if they are not activated already
          for (plugin in self.plugins) {
            // Check if plugin is a real plugin and not a property of the object prototype
            if (self.plugins.hasOwnProperty(plugin)) {
              self.plugins[plugin].activate();
            }
          }
        }

        // - load "Baselayerswitcher"
        if (self.options.baselayerSwitcherCreate) {
          self.plugins.baselayerswitcher = new c4g.maps.control.starboardplugin.Baselayerswitcher(self);
          self.plugins.baselayerswitcher.activate();
        }
        if (self.plugins.layerswitcher) {
          self.plugins.layerswitcher.activate();
        }
      }; // end of "fnRender()"


      if (!this.options.mapController.proxy.layers_loaded) {
        this.spinner.show();
        this.options.mapController.proxy.hook_layer_loaded.push(function(layerIds) {
          self.spinner.hide();
          fnRender();
        });
      } else {
        // layers are already loaded
        fnRender();
      }

      this.initialized = true;




      return true;
    } // end of "init"

  }); // End of add methods
}(jQuery, this.c4g));