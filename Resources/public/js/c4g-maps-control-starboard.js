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

import {Sideboard} from "./c4g-maps-control-sideboard";
import {utils} from "./c4g-maps-utils";
import {Baselayerswitcher} from "./c4g-maps-control-starboardplugin-baselayerswitcher";
import {Layerswitcher} from "./c4g-maps-control-starboardplugin-layerswitcher";
import {Customtab} from "./c4g-maps-control-starboardplugin-customtab";
'use strict';
export class Starboard extends Sideboard {


  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   * @param   {object}              opt_options  *optional* misc configuration options
   */
  constructor(opt_options) {
    //call Sideboard (parent) constructor
    super(opt_options);
    this.options = jQuery.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'starboard',
      direction: 'right',
      filter: false
    }, opt_options);

    //window.c4gMapsHooks.starboard_loadPlugins = [];

    //set headline, since the definition above does not work for headline
    if (!this.options.headline || this.options.headline.length === 0) {
      //this.options.headline = c4g.maps.constant.i18n.STARBOARD;
    }

    this.hook_layerswitcher_loaded = this.hook_layerswitcher_loaded || [];
  };

  /**
   * Creates the basic html-elements for the starboard
   *
   * @return  {boolean}  'true' on success
   */
  init() {

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
    fnRender = function () {
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
        let objLayers = self.options.mapController.proxy.layerController.arrLayers;
        if (objLayers) {
          for (let id in objLayers) {
            if (objLayers.hasOwnProperty(id)) {
              if (objLayers[id].display) {
                displayLayerswitcher = true;
              }
            }
          }
        }
      }
      // - load "Layerswitcher"
      if (self.options.layerSwitcherCreate && renderLayertree && displayLayerswitcher) {
        self.plugins.layerswitcher = new Layerswitcher(self);
      }

      // call hook to load additional starboard tabs (layers)
      utils.callHookFunctions(self.hook_layerswitcher_loaded);


      // - check & load other Starboard-plugins (via hook)
      // called functions have to add themselves to this.plugins
      if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.starboard_loadPlugins === 'object') {
        utils.callHookFunctions(window.c4gMapsHooks.starboard_loadPlugins, self);
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
        self.plugins.baselayerswitcher = new Baselayerswitcher(self);
        self.plugins.baselayerswitcher.activate();
      }
      if (self.plugins.layerswitcher) {
        self.plugins.layerswitcher.activate();
      }
    }; // end of "fnRender()"


    if (!this.options.mapController.proxy.layers_loaded) {
      this.spinner.show();
      window.c4gMapsHooks.proxy_layer_loaded.push(function (layerIds) {
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

}