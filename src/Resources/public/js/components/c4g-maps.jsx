/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import {MapProxy} from "../c4g-maps-proxy";
import {cssConstants} from "../c4g-maps-constant";
import {Spinner} from "../c4g-maps-misc-spinner";
import {MapHover} from "../c4g-maps-misc-maphover";
import {Group as LayerGroup} from 'ol/layer';
import Control from 'ol/control/Control';
import {utils} from "../c4g-maps-utils";
import {MapsControls} from "../c4g-maps-controls";
import {getLanguage} from "../c4g-maps-i18n";
import {Geolocation, Kinetic, Map, View} from "ol";
import {fromLonLat, transform, transformExtent} from "ol/proj";
import {
  defaults as interactionDefaults,
  DoubleClickZoom,
  DragPan,
  DragRotateAndZoom,
  DragZoom,
  KeyboardPan,
  KeyboardZoom,
  MouseWheelZoom,
  PinchRotate,
  PinchZoom
} from "ol/interaction";
import {defaults as controlDefaults} from "ol/control";
import {Group} from "ol/layer";
import {Point} from "ol/geom";
import Feature from "ol/Feature";
import {Vector} from "ol/layer";
import {boundingExtent, containsCoordinate, getBottomLeft, getBottomRight, getTopLeft, getTopRight} from "ol/extent";
import {shiftKeyOnly} from "ol/events/condition";
import ReactDOM from "react-dom";
import React, {Component, Suspense} from "react";
const GeoSearch = React.lazy(() => import('./c4g-geosearch.jsx'));
// import GeoSearch from "./c4g-geosearch.jsx";
const FeatureFilter = React.lazy(() => import('./c4g-feature-filter.jsx'));
const BaselayerSwitcher = React.lazy(() => import('./c4g-baselayerswitcher.jsx'));
const StarboardPanel = React.lazy(() => import('./c4g-starboard-panel.jsx'));
const StarboardScope = React.lazy(() => import('./c4g-starboard-scope.jsx'));
const Infopage = React.lazy(() => import('./c4g-infopage.jsx'));
const Measuretools = React.lazy(() => import('./c4g-measuretools.jsx'));
const Permalink = React.lazy(() => import('./c4g-permalink.jsx'));
const Zoom = React.lazy(() => import('./c4g-zoom.jsx'));
const ZoomExtent = React.lazy(() => import('./c4g-zoom-extent.jsx'));
const ZoomHome = React.lazy(() => import('./c4g-zoom-home.jsx'));
const ZoomPosition = React.lazy(() => import('./c4g-zoom-position.jsx'));
const Grid = React.lazy(() => import('./c4g-grid.jsx'));
const Rotate = React.lazy(() => import('./c4g-rotate.jsx'));
const Fullscreen = React.lazy(() => import('./c4g-fullscreen.jsx'));
const Print = React.lazy(() => import('./c4g-print.jsx'));
const OverviewMap = React.lazy(() => import('./c4g-overviewmap.jsx'));
//const RouterView = React.lazy(() => import("./c4g-router-view.jsx"));
const EditorComponent = React.lazy(() => import("./c4g-editor-component.jsx"));
import TileLayer from "ol/layer/Tile";
import {routingConstantsEnglish} from "./../routing-constant-i18n-en";
import {routingConstantsGerman} from "./../routing-constant-i18n-de";
import {UserPosition} from "./../c4g-user-position";

import {RouterView} from "./c4g-router-view.jsx";
// import {EditorComponent} from "./c4g-editor-component.jsx";

let langRouteConstants = {};
const containerAddresses = {
  arrFromPositions: [],
  arrFromNames: [],
  arrToPositions: [],
  arrToNames: [],
  arrOverPositions: {},
  arrOverNames: {},
};

let langConstants = {};

'use strict';
export default class MapController extends Component {

  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  constructor(props) {
    super(props);
    //---
    let mapData = props.mapData;

    this.state = {
      objLayers: [],
      arrLayerStates: [],
      openComponent: null,
      objTabLayers: [],
      styleData: {},
      arrTabLayerStates: [],
      activeBaselayerId: null
    };
    this.setObjLayers = this.setObjLayers.bind(this);
    this.setBaselayerId = this.setBaselayerId.bind(this);
    this.setLayerStates = this.setLayerStates.bind(this);
    this.changeActiveLayers = this.changeActiveLayers.bind(this);
    this.setTabStates = this.setTabStates.bind(this);
    this.setLocStyles = this.setLocStyles.bind(this);
    this.changeCollapseState = this.changeCollapseState.bind(this);
    this.map = null;

    langConstants = getLanguage(mapData);

    var self = this,
        permalink = false,
        minZoom,
        maxZoom,
        view,
        geoLocation,
        controls = [],
        interactions = [],
        displayAllLocations,
        domMapDiv,
        kinetic,
        starboard_label,
        enableStarboard = true;

    //--



    mapData = jQuery.extend({
      api: {},
      addIdToDiv: false,
      mapId: 1,
      mapDiv: 'c4g_map',
      center: {},
      calc_extent: 'CENTERZOOM',
      attribution: {},
      editor: {},
      measuretools: {},
      infopage: {},
      account: '',
      starboard: {},
      layerswitcher: {},
      baselayerswitcher: {},
      geosearch: {}
    }, mapData);
    if (mapData.calc_extent === 'LOCATIONS' || mapData.calc_extent === 'CENTERLOCS') {
      mapData = jQuery.extend({
        min_gap: 25
      }, mapData);
    }

    // center
    mapData.center = jQuery.extend({
      lat: 52.22,
      lon: 9.43,
      rotation: 0,
      zoom: 6
    }, mapData.center);
    // attribution
    mapData.attribution = jQuery.extend({
      enable: true,
      collapsed: false,
      collapsible: true
    }, mapData.attribution);
    // geosearch
    mapData.geosearch = jQuery.extend({
      enable: false,
      div: false
    }, mapData.geosearch);
    // permalink
    mapData.permalink = jQuery.extend({
      enable: false,
      get_parameter: false
    }, mapData.permalink);
    this.data = mapData;
    if (mapData.addIdToDiv) {
      mapData.mapDiv += '_' + mapData.mapId;
    }
    if (mapData.caching) {
      window.onbeforeunload = function(){
        let layers = self.getCurrentLayerStates(self.state.arrLayerStates);
        utils.storeValue('layers', layers);
        utils.storeValue('tstampc4g', Date.now());
      };
    }
    // PHPStorm marks this as error, but it is none
    // This is needed for preventing an error with the OSM-Overpass API
    // which occurs when MooTools is loaded
    if (window.MooTools && Browser.Document) {
      Document = Browser.Document;
    }
    // check permalink
    if (mapData.permalink.enable) {
      permalink = utils.getUrlParam(mapData.permalink.get_parameter);

      if (permalink) {
        permalink = permalink.split('/');
        switch (permalink.length) {
          case 6:
            permalink[0] = parseFloat(permalink[0]);
            mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
            permalink[1] = parseFloat(permalink[1]);
            mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
            permalink[2] = parseInt(permalink[2], 10);
            mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
            permalink[3] = parseFloat(permalink[3]);
            mapData.center.rotation = !isNaN(permalink[3]) ? permalink[3] : mapData.center.rotation;
            permalink[4] = parseInt(permalink[4], 10);
            mapData.baselayer = !isNaN(permalink[4]) ? permalink[4] : mapData.baselayer;
            mapData.layers = permalink[5].split(':');
            // decode deltaEncoding
            mapData.layers = utils.deltaDecode(mapData.layers);
            break;
          case 3:
            permalink[0] = parseFloat(permalink[0]);
            mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
            permalink[1] = parseFloat(permalink[1]);
            mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
            permalink[2] = parseInt(permalink[2], 10);
            mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
            // disable zooming to all locations
            mapData.calc_extent = "CENTERZOOM";
            break;
          case 2:
            // baselayer and layers only
            permalink[0] = parseInt(permalink[0], 10);
            mapData.baselayer = !isNaN(permalink[0]) ? permalink[0] : mapData.baselayer;
            mapData.layers = permalink[1].split(':');
            // decode deltaEncoding
            mapData.layers = utils.deltaDecode(mapData.layers);
            break;
          case 1:
            // layers only
            mapData.layers = permalink[0].split(':');
            // decode deltaEncoding
            mapData.layers = utils.deltaDecode(mapData.layers);
            break;
          default:
            // invalid count of permalink parameters
            permalink = false;
            mapData.layers = false;
        }
      } else {
        // just to make sure this var is really "false"
        permalink = false;
      }
    } else {
      permalink = utils.getUrlParam(mapData.permalink.get_parameter);
      if (permalink) {
        permalink = permalink.split('/');
        if (permalink.length === 3) {
          permalink[0] = parseFloat(permalink[0]);
          mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
          permalink[1] = parseFloat(permalink[1]);
          mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
          permalink[2] = parseInt(permalink[2], 10);
          mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
          // disable zooming to all locations
          mapData.calc_extent = "CENTERZOOM";
        } else if (permalink.length === 4) {
          permalink[0] = parseFloat(permalink[0]);
          mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
          permalink[1] = parseFloat(permalink[1]);
          mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
          permalink[2] = parseInt(permalink[2], 10);
          mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
          permalink[3] = parseInt(permalink[3], 10);
          mapData.default_baselayer = permalink[3];
          // disable zooming to all locations
          mapData.calc_extent = "CENTERZOOM";
        }
        permalink = false;
      }
    }
    this.proxy = new MapProxy({mapController: this});
    this.components = this.components || {};
    this.hideOtherComponents = this.hideOtherComponents.bind(this);
    this.hideOtherBottomComponents = this.hideOtherBottomComponents.bind(this);
    this.getActiveComponents = this.getActiveComponents.bind(this);

    // add view observer to update permalink on center change, if a permalink exists
    // use other permalink variable to avoid interference with the actual permalink mechanism
    window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
    let mapCenterChangeHandle = null;
    window.c4gMapsHooks.map_center_changed.push(function (center) {
      if (mapCenterChangeHandle) {
        window.clearTimeout(mapCenterChangeHandle);
      }
      mapCenterChangeHandle = window.setTimeout(() => {
        let currentPermalink = utils.getUrlParam(mapData.permalink.get_parameter);
        if (currentPermalink) {
          if (currentPermalink) {
            currentPermalink = currentPermalink.split('/');
            if (currentPermalink.length >= 3) {
              center = transform(center, "EPSG:3857", "EPSG:4326");
              currentPermalink[0] = center[0];
              currentPermalink[1] = center[1];
              utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true)
            }
          }
        }
      }, 100)
    });

    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    let mapZoomHandle = null;
    window.c4gMapsHooks.hook_map_zoom.push(function (proxy) {
      if (mapZoomHandle) {
        window.clearTimeout(mapZoomHandle);
      }
      mapZoomHandle = window.setTimeout(() => {
        let currentPermalink = utils.getUrlParam(mapData.permalink.get_parameter);
        if (currentPermalink) {
          if (currentPermalink) {
            currentPermalink = currentPermalink.split('/');
            if (currentPermalink.length >= 3) {
              currentPermalink[2] = parseInt(view.getZoom(), 10) || currentPermalink[2];
              utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true)
            }
          }
        }
      }, 100);

    });
    if (mapData.permalink.withoutGenerator) {
      let currentPermalink = utils.getUrlParam(mapData.permalink.get_parameter);
      if (!currentPermalink && mapData.center) {
        let permalink = [];
        permalink.push(mapData.center.lon);
        permalink.push(mapData.center.lat);
        permalink.push(mapData.center.zoom);
        utils.setUrlParam(permalink.join('/'), mapData.permalink.get_parameter, true);
      }
    }

    if (mapData.minZoom && mapData.minZoom > 0) {
      minZoom = mapData.minZoom;
    } else {
      minZoom = 0;
    }

    if (mapData.maxZoom && mapData.maxZoom > 0) {
      maxZoom = mapData.maxZoom;
    } else {
      maxZoom = 19;
    }

    if (mapData.caching) {
      if (utils.getValue('tstampc4g') && utils.getValue('tstampc4g') + 604800 > Date.now()) {
        if ((utils.getValue('lon')) && (utils.getValue('lat'))) {
          mapData.center.lon = utils.getValue('lon');
          mapData.center.lat = utils.getValue('lat');
        }
        if (utils.getValue('zoom')) {
          mapData.center.zoom = utils.getValue('zoom');
        }
        if (utils.getValue('layers')) {
          mapData.layers = utils.getValue('layers');
        }
      }
    }

    if (mapData.restr_bottomleft_lon
        && mapData.restr_bottomleft_lat
        && mapData.restr_topright_lon
        && mapData.restr_topright_lat
    ) {
      let extent = [
        parseFloat(mapData.restr_bottomleft_lon),
        parseFloat(mapData.restr_bottomleft_lat),
        parseFloat(mapData.restr_topright_lon),
        parseFloat(mapData.restr_topright_lat)
      ];
      extent = transformExtent(extent, "EPSG:4326", "EPSG:3857");
      view = new View({
        extent: extent,
        center: transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseFloat(mapData.center.zoom),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    } else {
      view = new View({
        center: transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseFloat(mapData.center.zoom),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    }
    this.geolocation = new Geolocation({
        tracking: false,
        projection: view.getProjection()
    });
    this.geolocation.on('change', (evt) => {
      for (let i in this.geolocation.arrFuncs) {
        if (this.geolocation.arrFuncs.hasOwnProperty(i)) {
          this.geolocation.arrFuncs[i](evt, i);
        }
      }
    });
    // check userposition
    if (mapData.geolocation && !permalink) {
      let funcLocation = function (evt) {
        var position =  this.getPosition();
        if (mapData.geolocation_extent && mapData.geolocation_extent[0]) {
          const bottomLeft = fromLonLat([mapData.geolocation_extent[0], mapData.geolocation_extent[1]]);
          const topRight = fromLonLat([mapData.geolocation_extent[2], mapData.geolocation_extent[3]]);
          const extent = boundingExtent([bottomLeft, topRight]);
          if (!position || !containsCoordinate(extent, position)) {
            return;
          }
        }
        if (position) {
          view.setCenter(position);
        }
        if (mapData.geolocation_zoom) {
          view.setZoom(parseInt(mapData.geolocation_zoom, 10));
        }
        if (self.map) {
          self.map.setView(view);
          if (self.$overlaycontainer_stopevent) {
            // utils.redrawMapView(self);
          }
        }
      };
      this.geolocation.once('change', funcLocation);
      if (this.geolocation.getTracking()) {
        this.geolocation.dispatchEvent('change');
      }
      // else {
      //   this.geolocation.setTracking(true);
      // }
    }

    // enable default Controls/Interactions if there is no profile
    // [note]: maybe change this in the future? -> "no default"-option?
    if (!mapData.profile) {
      controls = controlDefaults();
      interactions = interactionDefaults();
    }

    // set default base layer when backend geopicker is enabled
    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      if (mapData.default_baselayer) {
        this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          if (self.proxy.baselayerController.arrBaselayers.hasOwnProperty(mapData.default_baselayer)) {
            self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
          }
        });
      } // end inner if
      this.map = new Map({
        controls: controls,
        interactions: interactions,
        layers: [
          new Group({
            title: 'Base maps',
            layers: [],
            checkSum: 'baseMapsLayer'
          })
        ],
        loadTilesWhileAnimating: true,
        target: mapData.mapDiv,
        view: view
      });
    } else {
      // initialize Map
      //

      if (mapData.default_baselayer) {
        this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          if (mapData.baselayer && baselayerIds.indexOf(mapData.baselayer.toString()) > -1) {
            mapData.default_baselayer = mapData.baselayer;
          }

          if (mapData.caching) {
            if (utils.getValue('baselayer')) {
              mapData.default_baselayer = utils.getValue('baselayer');
            }
          }

          self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
        });
      }
      this.map = new Map({
        controls: controls,
        interactions: interactions,
        layers: [
          new Group({
            title: 'Base maps',
            layers: [],
            checkSum: 'baseMapsLayer'
          })
        ],
        loadTilesWhileAnimating: true,
        target: mapData.mapDiv,
        view: view
      });
    }
    if (window.c4gMapsHooks && window.c4gMapsHooks.changeInitialView) {
      utils.callHookFunctions(window.c4gMapsHooks.changeInitialView, {
        mapData: mapData,
        view: view
      });
    }
    mapData.map = this.map;

    // set map-size and -margin
    domMapDiv = document.getElementById(mapData.mapDiv);
    if (!domMapDiv) {
      domMapDiv = document.getElementById("#" + mapData.mapDiv);
      if (!domMapDiv) {
        domMapDiv = document.getElementById("." + mapData.mapDiv);
      }
    }

    if (domMapDiv && domMapDiv.style) {
      if (mapData.width) {
        if (mapData.margin) {
          let arrMargins = mapData.margin.split(" ");
          let rightMargin = 0;
          let leftMargin = 0;
          switch (arrMargins.length) {
            case 4:
              rightMargin = arrMargins[1];
              leftMargin = arrMargins[3];
              break;
            case 2:
              rightMargin = arrMargins[1];
              leftMargin = arrMargins[1];
              break;
            case 1:
              rightMargin = arrMargins[0];
              leftMargin = arrMargins[0];
              break;
          }
          // "==" is correct here since we want to check number and string
          if (leftMargin == 0) {
            leftMargin += "px";
          }
          if (rightMargin == 0) {
            rightMargin += "px";
          }
          domMapDiv.style.width = "calc(" + mapData.width +  " - " + leftMargin + " - " + rightMargin + ")";
        } else {
          domMapDiv.style.width = mapData.width;
        }
      }
      if (mapData.height) {
        domMapDiv.style.height = mapData.height;
      } else {
        if (mapData.geopicker && mapData.geopicker.type === "backend") {
          let fieldsetHeight = domMapDiv.parentElement.parentElement.offsetHeight;
          domMapDiv.style.height = 'calc(100vh - '+fieldsetHeight+'px)';
          domMapDiv.style.minHeight = '480px';
          domMapDiv.style.maxWidth = '100vw';
        } else {
          if (domMapDiv.parentElement && domMapDiv.parentElement.parentElement && !domMapDiv.parentElement.parentElement.offsetHeight) {
            domMapDiv.style.height = '100vh';
          } else if (domMapDiv.parentElement && domMapDiv.parentElement.parentElement) {
            let height = domMapDiv.parentElement.parentElement.offsetHeight;
            if (height < 320) {
              height = 320; //minimal default value if not set in map configuration
            }
            domMapDiv.style.height = height+'px';
          }
        }
      }
      if (mapData.margin) {
        domMapDiv.style.padding = mapData.margin;
      }
    } else {
      console.warn('can not get element by id mapData.mapDiv');
      return;
    }

    // save overlaycontainer
    this.$overlaycontainer_stopevent = jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE);
    this.map.updateSize();
    this.proxy.initialize();
    // this.proxy.loadBaseLayers();
    // this.proxy.loadLayers();
    // ---


    // add Spinner
    this.spinner = new Spinner({className: cssConstants.LARGE});
    // add mapHover
    this.mapHover = new MapHover({mapController: this});

    // add interactions ===
    //

    // mouse navigation
    if (mapData.mouse_nav) {
      // drag pan and kinetic scrolling
      if (mapData.mouse_nav.drag_pan) {
        kinetic = mapData.mouse_nav.kinetic ? new Kinetic(-0.005, 0.05, 100) : null;
        this.map.addInteraction(new DragPan({
          kinetic: kinetic,
          condition:(event) => {
            if (mapData.touch_nav.twoFingers) {
              const origEvent = event.originalEvent;
              if (origEvent.pointerType !== 'mouse') {
                if (event.activePointers && event.activePointers.length === 1) {
                  return false;
                }
              }
            }
            return true;
          }
        }));
      }
      // mousewheel zoom
      if (mapData.mouse_nav.wheel_zoom) {
        this.map.addInteraction(new MouseWheelZoom());
      }
      // doubleclick zoom
      if (mapData.mouse_nav.doubleclick_zoom) {
        this.map.addInteraction(new DoubleClickZoom());
      }
      // box zoom
      if (mapData.mouse_nav.drag_zoom) {
        this.map.addInteraction(new DragZoom({condition: shiftKeyOnly}));
      }
      // drag rotate & zoom
      if (mapData.rotate) {
        let customCondition = function (mapBrowserEvent) {
          var browserEvent = mapBrowserEvent.originalEvent;
          return (browserEvent.ctrlKey && browserEvent.shiftKey);
        };

        this.map.addInteraction(new DragRotateAndZoom({condition: customCondition}));
      }
    }
    // touch navigation
    if (mapData.touch_nav) {
      // rotate (pinch)
      if (mapData.touch_nav.rotate) {
        this.map.addInteraction(new PinchRotate());
      }
      // zoom (pinch)
      if (mapData.touch_nav.zoom) {
        this.map.addInteraction(new PinchZoom({constrainResolution: true}));
      }
    }
    // keyboard navigation
    if (mapData.keyboard_nav) {
      // pan (arrow keys)
      if (mapData.keyboard_nav.pan) {
        this.map.addInteraction(new KeyboardPan());
      }
      // zoom ("+" and "-" key)
      if (mapData.keyboard_nav.zoom) {
        this.map.addInteraction(new KeyboardZoom());
      }
    }

    // ===
    // add controls ===
    this.mapsControls = new MapsControls(this);
    this.mapsControls.init();

    // add container for react components
    if (mapData.layerswitcher.enable) {
      if (mapData.starboard.div) {
        this.reactContainer = document.querySelector("." + mapData.starboard.div);
        if (!this.reactContainer) {
          this.reactContainer = document.createElement('div');
          this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";
          this.$overlaycontainer_stopevent.append(this.reactContainer);
        } else {
          this.reactContainer.className += " c4g-external ol-unselectable";
        }
      } else {
        this.reactContainer = document.createElement('div');
        this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";
        this.$overlaycontainer_stopevent.append(this.reactContainer);
      }
      if (mapData.starboard.open) {
        this.reactContainer.className += " c4g-open";
      } else {
        this.reactContainer.className += " c4g-close";
      }
    }

    if (mapData.baselayerswitcher.enable) {
      if (mapData.baselayerswitcher.div) {
        this.baselayerContainer = document.querySelector("." + mapData.baselayerswitcher.div);
        if (!this.baselayerContainer) {
          this.baselayerContainer = document.createElement('div');
          this.baselayerContainer.className = "c4g-sideboard c4g-baselayer-container ol-unselectable";
          this.$overlaycontainer_stopevent.append(this.baselayerContainer);
        } else {
          this.baselayerContainer.className += " c4g-external c4g-baselayer-container ol-unselectable";
        }
      } else {
        this.baselayerContainer = document.createElement('div');
        this.baselayerContainer.className = "c4g-sideboard c4g-baselayer-container ol-unselectable";
        this.$overlaycontainer_stopevent.append(this.baselayerContainer);
      }
      if (mapData.starboard.open) {
        this.baselayerContainer.className += " c4g-open";
      } else {
        this.baselayerContainer.className += " c4g-close";
      }
    }
    if (mapData.starboardscope.enable) {
      if (mapData.starboardscope.div) {
        this.starboardscopeContainer = document.querySelector("." + mapData.starboardscope.div);
        if (!this.starboardscopeContainer) {
          this.starboardscopeContainer = document.createElement('div');
          this.starboardscopeContainer.className = "c4g-sideboard c4g-starboardscope-container ol-unselectable";
          this.$overlaycontainer_stopevent.append(this.starboardscopeContainer);
        } else {
          this.starboardscopeContainer.className += " c4g-external c4g-starboardscope-container ol-unselectable";
        }
      } else {
        this.starboardscopeContainer = document.createElement('div');
        this.starboardscopeContainer.className = "c4g-sideboard c4g-starboardscope-container ol-unselectable";
        this.$overlaycontainer_stopevent.append(this.starboardscopeContainer);
      }
      if (mapData.starboardscope.open) {
        this.starboardscopeContainer.className += " c4g-open";
      } else {
        this.starboardscopeContainer.className += " c4g-close";
      }
    }

    // feature filter
    if (mapData.filterDiv) {
      mapData.filterDiv = mapData.filterDiv[0] === "." || mapData.filterDiv[0] === "#" ? mapData.filterDiv : "." + mapData.filterDiv;
      this.filterContainerParent = document.querySelector(mapData.filterDiv);
      if (this.filterContainerParent) {
        this.filterContainerParent.className += ' c4g-external';
        this.filterContainer = document.createElement("div");
        ReactDOM.render(
            <Suspense fallback={<div>"loading..."</div>}>
              <FeatureFilter target={document.querySelector(mapData.filterDiv)} mapController={this} direction={"top"} className={"c4g-feature-filter"}/>
            </Suspense>, this.filterContainer);
        this.filterContainerParent.append(this.filterContainer);
      }
    }

    // infopage container
    if (mapData.legend.enable) {
      if (mapData.legend.div) {
        this.infoPageContainer = document.querySelector("." + mapData.legend.div);
        if (!this.infoPageContainer) {
          this.infoPageContainer = document.createElement('div');
          this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";
          this.$overlaycontainer_stopevent.append(this.infoPageContainer);
        } else {
          this.infoPageContainer.className += " c4g-external c4g-infopage-container ol-unselectable";
        }
      } else {
        this.infoPageContainer = document.createElement('div');
        this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";
        this.$overlaycontainer_stopevent.append(this.infoPageContainer);
      }
    }

    // measuretools container
    if (mapData.measuretools.enable) {
      let open = mapData.initial_open_comp === "measuretools" ? "c4g-open" : "c4g-close";
      if (mapData.measuretools.div) {
        this.measuretoolsContainer = document.querySelector("." + mapData.measuretools.div);
        if (!this.measuretoolsContainer) {
          this.measuretoolsContainer = document.createElement('div');
          this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable " + open;
          this.$overlaycontainer_stopevent.append(this.measuretoolsContainer);
        } else {
          this.measuretoolsContainer.className += " c4g-external c4g-measuretools-container ol-unselectable";
        }
      } else {
        this.measuretoolsContainer = document.createElement('div');
        this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable " + open;
        this.$overlaycontainer_stopevent.append(this.measuretoolsContainer);
      }
    }

    // permalink container
    if (mapData.permalink.enable) {
      if (mapData.permalink.div) {
        this.permalinkContainer = document.querySelector(".c4g-external-permalink-container");
        if (!this.permalinkContainer) {
          this.permalinkContainer = document.createElement('div');
          this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";
          this.$overlaycontainer_stopevent.append(this.permalinkContainer);
        } else {
          this.permalinkContainer.className += " c4g-external";
        }
      } else {
        this.permalinkContainer = document.createElement('div');
        this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";
        this.$overlaycontainer_stopevent.append(this.permalinkContainer);
      }
    }

    if (mapData.overviewmap) {
      this.overviewContainer = document.createElement("div");
      this.overviewContainer.className = "c4g-sideboard c4g-overviewmap-container c4g-close";
      this.$overlaycontainer_stopevent.append(this.overviewContainer);
    }

    // @ToDo mapData.additionalPanel is always true, because it is set as an new object in the beginning. Therefore the second parameter of the boolean is requested, which throws an error
    // additionalPanel is furthermore not found anywhere in Maps and should be loaded over a hook

    // starboard
    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      enableStarboard = false;
    }

    // popup margin
    //this.leftSlideElements.push('.ol-overlay-container');
    //this.rightSlideElements.push('.ol-overlay-container');

    // if (typeof Starboard === 'function' && enableStarboard && !this.controls.starboard) {
    //   // this.initializeStarboard();
    // }
    //themeData
    if (mapData.themeData) {
      let domThemeDiv = document.getElementById(mapData.mapDiv);
      if (mapData.themeData['useglobal']) {
        domThemeDiv = document.getElementById('wrapper') || document.documentElement;
      }
      domMapDiv = document.getElementById(mapData.mapDiv);

      let mapWidth = "100%";
      let mapHeight = "100%";

      if (mapData.width) {
        mapWidth = mapData.width;
      }
      if (mapData.height) {
        mapHeight = mapData.height;
      } else {
        let divHeight = domMapDiv && domMapDiv.offsetHeight ? domMapDiv.offsetHeight : false;
        if (!divHeight) {
          mapHeight = "100vh";
        } else {
          mapHeight = '100%';
        }
      }
      if (domMapDiv && domMapDiv.style) {
        domMapDiv.style.setProperty('--map-height', mapHeight);
        domMapDiv.style.setProperty('--map-width', mapWidth);
      }

      if (mapData.themeData['maincolor']) {
        var mainColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);
        var fontColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);
        var shadowColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);
        var popupMainColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['popupMaincolor'], mapData.themeData['popupMainopacity']);
        var popupFontColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['popupFontcolor'], mapData.themeData['popupFontopacity']);

        if (domThemeDiv && domThemeDiv.style) {
          domThemeDiv.style.setProperty('--main-color', mainColor);
          domThemeDiv.style.setProperty('--font-color', fontColor);
          domThemeDiv.style.setProperty('--pu-main-color', popupMainColor);
          domThemeDiv.style.setProperty('--pu-font-color', popupFontColor);
          domThemeDiv.style.setProperty('--shadow-color', shadowColor);
        }
      }

      if (domThemeDiv && mapData.themeData['buttonradius']) {
        domThemeDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius'] + '%');
        domThemeDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius'] + 'px');
      }

      if (domThemeDiv && mapData.themeData['buttonsize']) {
        domThemeDiv.style.setProperty('--button-size-pixel', mapData.themeData['buttonsize'] + 'px');
      }

      if (domThemeDiv && mapData.themeData['fontsize']) {
        domThemeDiv.style.setProperty('--button-fontsize-pixel', mapData.themeData['fontsize'] + 'px');
      }

      if (domThemeDiv && mapData.themeData['popupMaxWidth']) {
        domThemeDiv.style.setProperty('--popup-max-width', mapData.themeData['popupMaxWidth']);
      }
    }

    if (mapData.caching) {
      let strPopupInfos = utils.getValue('popupInfos');
      if (strPopupInfos && parseInt(mapData.popupHandling, 10)) {
        this.data.initial_open_comp = "";
        let popupInfos = JSON.parse (strPopupInfos);
        let feature = new Feature();
        feature.set('popup', popupInfos);
        let layer = new Vector();
        window.setTimeout(() => {
          this.proxy.handlePopup(feature, layer);
        }, 100)
      }
    }

    const scope = this;
    this.map.on("change:size", function() {
      scope.setState({});
      if (scope.map && scope.map.getSize() && domMapDiv && domMapDiv.style) {
        domMapDiv.style.setProperty('--map-height', scope.map.getSize()[1] + "px");
      }
    });
    if (mapData.userLocation) {
      let geolocation = new UserPosition(this);
    }

    if (window.c4gMapsHooks.addControls) {
      let arrResult = [];
      utils.callHookFunctions(window.c4gMapsHooks.addControls, arrResult);
      for (let i in arrResult) {
        if (arrResult.hasOwnProperty(i)) {
          this.map.addControl(new Control(arrResult[i]));
        }
      }
    }
  }

  setLayersInitial(objLayers, arrLayers) {
    this.setState({
      objLayers: objLayers,
      arrLayerStates: arrLayers
    });
  }
  setBaselayerId(id) {
    this.setState({
      activeBaselayerId: id
    });
  }

  setObjLayers(objLayers) {
    this.setState({
      objLayers: objLayers
    });
  }

  setLocStyles(styleData, callback = false) {
    if (callback) {
      this.setState({
        styleData: styleData
      }, callback());
    }
    else {
      this.setState({
        styleData: styleData
      });
    }
  }

  setLayerStates(arrLayerStates) {
    if (this._isMounted && arrLayerStates && arrLayerStates.length > 0) {
      let changed = false;
      if (arrLayerStates.length !== this.state.arrLayerStates.length) {
          changed = true;
      } else {
          for (let i in arrLayerStates) {
              if (arrLayerStates.hasOwnProperty(i)) {
                  if (arrLayerStates[i] !== this.state.arrLayerStates[i]) {
                      changed = true;
                      break;
                  }
              }
          }
      }
      if (changed) {
        this.setState({
          arrLayerStates: arrLayerStates
        });
      }
    }
  }
  getCurrentLayerStates (arrLayerStates) {
    let ids = [];
    for (let elemId in arrLayerStates) {
      if (arrLayerStates.hasOwnProperty(elemId)) {
        if (arrLayerStates[elemId].active) {
          ids.push(arrLayerStates[elemId].id);
        }
        if (arrLayerStates[elemId].childStates) {
          ids = ids.concat(this.getCurrentLayerStates(arrLayerStates[elemId].childStates));
        }
      }
    }
    return ids;
  }
  setLayerStateWithId (id, active) {
    let arrLayerStates = structuredClone(this.state.arrLayerStates);
    for (let i in arrLayerStates) {
      if (arrLayerStates.hasOwnProperty(i)) {
        arrLayerStates[i] = this.getLayerStateWithId(arrLayerStates[i], id, active);
      }
    }
    this.setState({
      arrLayerStates: arrLayerStates
    });
  }
  getLayerStateWithId (layerState, id, active) {
    if (layerState.id === id) {
      layerState.active = active;
    }
    for (let i in layerState.childStates) {
      if (layerState.childStates.hasOwnProperty(i)) {
        layerState.childStates[i] = this.getLayerStateWithId(layerState.childStates[i], id, active);
      }
    }
    return layerState;
  }

  changeActiveLayers (baseLayerId) {
    let newLayerState = this.state.arrLayerStates;
    for (let stateId in newLayerState) {
      if (newLayerState.hasOwnProperty(stateId)) {
        if (this.state.objLayers[stateId].activeForBaselayers !== "all") {
          let oldState = newLayerState[stateId].active;
          newLayerState[stateId].active = !!this.state.objLayers[stateId].activeForBaselayers.find((element) => element === baseLayerId);
          if (oldState !== newLayerState[stateId].active) {
            if (newLayerState[stateId].active) {
              this.proxy.layerController.show(this.state.objLayers[stateId].id, this.state.objLayers[stateId].features || this.state.objLayers[stateId].vectorLayer)
            }
            else {
              this.proxy.layerController.hide(this.state.objLayers[stateId].id, this.state.objLayers[stateId].features || this.state.objLayers[stateId].vectorLayer)
            }
          }
        }
        for (let childId in newLayerState[stateId].childStates) {
          if (newLayerState[stateId].childStates.hasOwnProperty(childId)) {
            newLayerState[stateId].childStates[childId] = this.changeActiveLayerChilds(newLayerState[stateId].childStates[childId], this.state.objLayers[stateId].childs[childId], baseLayerId);
          }
        }
      }
    }
    this.setState({
      arrLayerStates: newLayerState
    });
  }

  changeActiveLayerChilds (childState, child, baseLayerId) {
    if (child.activeForBaselayers && child.activeForBaselayers !== "all") {
      let oldState = childState.active;
      childState.active = !!child.activeForBaselayers.find((element) => element === baseLayerId);
      if (oldState !== childState.active) {
        if (childState.active) {
          this.proxy.layerController.show(child.id, child.features || child.vectorLayer)
        }
        else {
          this.proxy.layerController.hide(child.id, child.features || child.vectorLayer)
        }
      }
    }
    for (let stateId in childState.childStates) {
      if (childState.childStates.hasOwnProperty(stateId)) {
        childState.childStates[stateId] = this.changeActiveLayerChilds(childState.childStates[stateId], child.childs[stateId], baseLayerId);
      }
    }
    return childState;
  }

  setTabLayers(layers, states) {
    this.setState({
      objTabLayers: layers,
      arrTabLayerStates: states
    });
  }

  setTabStates(states) {
    this.setState({
      arrTabLayerStates: states
    });
  }

  hideOtherComponents(objComponent) {
    let components = this.components;
    for (let key in components) {
      if (components.hasOwnProperty(key)) {
        if (components[key] && (components[key] !== objComponent)) {
          if (components[key].close) {
            components[key].close();
          }
          else {
            components[key].setState({open:false});
          }
        }
      }
    }
  }
  changeCollapseState(id, state){
    let newState = [...this.state.arrLayerStates];
    newState[id] = state;
    this.setState({
      arrLayerStates: newState
    });
  }

  hideOtherBottomComponents(objComponent) {
    let components = this.components;
    for (let key in components) {
      if (components.hasOwnProperty(key)) {
        if (components[key] && (components[key] !== objComponent)) {
          components[key].setState({openResults: false});
        }
      }
    }
  }
  getActiveComponents() {
    let components = this.components;
    let activeComps = [];
    for (let key in components) {
      if (components.hasOwnProperty(key) && components[key] && components[key].state.open) {
        activeComps.push(components[key]);
      }
    }
    return activeComps;
  }

  render() {
    const scope = this;
    const mapData = this.data;
    if (!mapData || !mapData.mapDiv) {
      return null;
    }
    let target = document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left');
    if (!target || !this.$overlaycontainer_stopevent || !this.$overlaycontainer_stopevent.length) {
      return null;
    }
    this.arrComponents = this.arrComponents || [
      {name: "layerswitcher", sort: mapData.layerswitcher.enable},
      {name: "geosearch", sort: mapData.geosearch.enable},
      {name: "legend", sort: mapData.legend.enable},
      {name: "baselayerswitcher", sort: mapData.baselayerswitcher.enable},
      {name: "starboardscope", sort: mapData.starboardscope.enable},
      {name: "measuretools", sort: mapData.measuretools.enable},
      {name: "permalink", sort: mapData.permalink.enable},
      {name: "zoom", sort: mapData.zoom},
      {name: "zoomPosition", sort: mapData.zoomPosition},
      {name: "zoomHome", sort: mapData.zoomHome},
      {name: "zoomExtent", sort: mapData.zoomExtent},
      {name: "fullscreen", sort: mapData.fullscreen},
      {name: "print", sort: mapData.print},
      {name: "rotate", sort: mapData.rotate},
      {name: "graticule", sort: mapData.graticule},
      {name: "overview", sort: mapData.overviewmap},
      {name: "router", sort: mapData.router_enable},
      {name: "editor", sort: mapData.editor.enable}
    ];
    let sbPortal = "";
    let storedPanel = this.data.caching ? utils.getValue('panel') : "";
    if (storedPanel) {
      mapData.initial_open_comp = "";
    }
    if (mapData.layerswitcher.enable) {
      sbPortal = ReactDOM.createPortal(
          <Suspense fallback={<div>"Loading..."</div>}>
            <StarboardPanel ref={(node) => {
              this.components.starboard = node;
            }} target={target}
                            mapController={this} objLayers={this.state.objLayers} styleData={this.state.styleData} tabLayers={this.state.objTabLayers} tabStates={this.state.arrTabLayerStates}
                            layerStates={this.state.arrLayerStates} parentCallback={this.setLayerStates} tabCallback={this.setTabStates}
                            direction={"right"} open={((mapData.initial_open_comp === "starboard") || (storedPanel === "StarboardPanel"))} changeCollapseState={this.changeCollapseState} external={this.reactContainer.className.indexOf("c4g-external") !== -1}
            />
          </Suspense>,
          this.reactContainer
      );
    }
    let searchPortal = "";
    if (mapData.geosearch.enable) {
      let geoSearchOptions = this.createGeosearchOptions(target);
      geoSearchOptions.ref = (node) => {
        this.components.geosearch = node;
      };
      searchPortal = ReactDOM.createPortal(
          <Suspense fallback={<div>"Loading..."</div>}>
            <GeoSearch {...geoSearchOptions}/>
          </Suspense>,
        this.searchContainer
      );
    }
    let infoPortal = "";


    let baselayer = undefined;
    let overlay = undefined;
    if (this.proxy.baselayers_loaded) {
      baselayer = this.proxy.baselayerController.arrBaselayers[this.state.activeBaselayerId];
      if (baselayer && baselayer.hasOverlays) {
        overlay = baselayer.overlays[0];
      }
    }

    let infopage = mapData.infopage;
    if (infopage && baselayer && baselayer.infopage) {
      infopage = infopage + "<br/>" + baselayer.infopage;
    } else if (baselayer && baselayer.infopage) {
      infopage = baselayer.infopage;
    }
    if (infopage && overlay && overlay.infopage) {
      infopage = infopage + "<br/>" + overlay.infopage;
    } else if (overlay && overlay.infopage) {
      infopage = overlay.infopage;
    }

    if (infopage && mapData.legend.enable) {
      infoPortal = ReactDOM.createPortal(
        <Suspense fallback={<div>"Loading..."</div>}>
          <Infopage ref={(node) => {this.components.infopage = node;}} target={target} external={this.infoPageContainer.className.indexOf("c4g-external") !== -1}
                  infoContent={infopage} mapController={this} open={mapData.initial_open_comp === "legend" || storedPanel === "Infopage"}/>
        </Suspense>,
        this.infoPageContainer
      );
    }

    let blsPortal = "";
    if (mapData.baselayerswitcher.enable) {
      blsPortal = ReactDOM.createPortal(
          <Suspense fallback={<div>"Loading..."</div>}>
            <BaselayerSwitcher ref={(node) => {
              this.components.baselayerSwitcher = node;
            }} target={target} open={mapData.initial_open_comp === "baselayers" || storedPanel === "BaselayerSwitcher"} changeActiveLayers={this.changeActiveLayers} external={this.baselayerContainer.className.indexOf("c4g-external") !== -1}
                               mapController={this} baselayerController={this.proxy.baselayerController}/>
          </Suspense>,
          this.baselayerContainer
      );
    }
    let scpPortal = "";
    if (mapData.starboardscope.enable) {
      scpPortal = ReactDOM.createPortal(
          <Suspense fallback={<div>"Loading..."</div>}>
            <StarboardScope ref={(node) => {
              this.components.starboardScope = node;
            }} target={target} open={mapData.initial_open_comp === "starboardscope" || storedPanel === "StarboardScope"} mapController={this} />
          </Suspense>,
          this.starboardscopeContainer
      );
    }
    let measurePortal = "";
    if (mapData.measuretools.enable) {
      measurePortal = ReactDOM.createPortal(
        <Suspense fallback={<div>"Loading..."</div>}>
          <Measuretools ref={(node) => {
            this.components.measuretools = node;
          }} target={target} open={mapData.initial_open_comp === "measuretools" || storedPanel === "MeasureTools"} mapController={this} />
        </Suspense>,
        this.measuretoolsContainer
      );
    }
    let permaPortal = "";
    if (mapData.permalink.enable) {
      permaPortal = ReactDOM.createPortal(
        <Suspense fallback={<div>"loading..."</div>}>
          <Permalink ref={(node) => {this.components.permalink = node;}} saveIds={mapData.permalink.saveIds} mapController={this} target={target}
                     external={this.permalinkContainer.className.indexOf("c4g-external") !== -1}/>
        </Suspense>,
        this.permalinkContainer
      );
    }
    let overviewPortal = "";
    if (mapData.overviewmap) {
      let source;
      if (this.proxy.baselayers_loaded) {
        let layer = this.proxy.baselayerController.arrBaselayers[this.state.activeBaselayerId].layer;
        source = layer instanceof LayerGroup ? layer.getLayers().getArray()[0].getSource() : layer.getSource();
      }
      overviewPortal = ReactDOM.createPortal(
          <Suspense fallback={<div>Loading...</div>}>
            <OverviewMap ref={(node) => {this.components.overviewMap = node;}} mapController={this} target={target}
                         source={source} ovmTarget={this.overviewContainer} collapsed={true} key={23}/>
          </Suspense>,
          this.overviewContainer
      )
    }

    let result = [];
    this.arrComponents.sort(function(a, b) {
      return (a.sort > b.sort) ? 1 : -1;
    });
    this.arrComponents = this.arrComponents.filter(function(element) {
      return element.sort && element.sort > 0;
    });
    for (let i = 0; i < this.arrComponents.length; i++) {
      switch (this.arrComponents[i].name) {
        case "measuretools":
          result.push(measurePortal);
          break;
        case "baselayerswitcher":
          result.push(blsPortal);
          break;
        case "geosearch":
          result.push(searchPortal);
          break;
        case "layerswitcher":
          result.push(sbPortal);
          break;
        case "starboardscope":
          result.push(scpPortal);
          break;
        case "legend":
          result.push(infoPortal);
          break;
        case "permalink":
          result.push(permaPortal);
          break;
        case 'zoom':
          if (mapData.zoom) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <Zoom mapController={this} target={target} key={i}/>
                </Suspense>
            );
          }
          break;
        case 'zoomExtent':
          if (mapData.zoomExtent) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <ZoomExtent mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'zoomHome':
          if (mapData.zoomHome) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <ZoomHome mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'zoomPosition':
          if (mapData.zoomPosition) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <ZoomPosition mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'fullscreen':
          if (mapData.fullscreen) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <Fullscreen mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'print':
          if (mapData.print) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <Print mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'rotate':
          if (mapData.rotate) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <Rotate mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'graticule':
          if (mapData.graticule) {
            result.push(
                <Suspense key={i} fallback={<div>"loading...</div>}>
                  <Grid mapController={this} target={target} key={i}/>
                </Suspense>            );
          }
          break;
        case 'overview':
          if (mapData.overviewmap) {
            result.push(overviewPortal);
          }
          break;
        case 'router':
          // if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
          //   utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
          //     mapController: this,
          //     Container: this.mapsControls.controlContainerTopLeft,
          //     component: "router",
          //     arrComps: result
          //   });
          // }
          /**
           * test
           */
          // const params = {
          //   mapController: this,
          //   Container: this.mapsControls.controlContainerTopLeft,
          //   component: "router",
          //   arrComps: result
          // };
          if (this.data.router_enable) {
            if (typeof this.data !== 'undefined') {
              if (this.data.lang === "de") {
                langRouteConstants = routingConstantsGerman;
              } else if (this.data.lang === "en") {
                langRouteConstants = routingConstantsEnglish;
              } else {
                // fallback
                langRouteConstants = routingConstantsEnglish;
              }
            }

    let routerTarget = target;
    if (!routerTarget) {
        break;
    }
            let routerControlProps = {
              target: routerTarget,
              mapController: this,
              direction: "top",
              withPosition: false,
              detourRoute: this.data.detourRoute,
              detourArea: this.data.detourArea,
              containerAddresses: containerAddresses,
              langConstants: langRouteConstants,
              ref: (node) => {this.components.router = node;},
              key: 22,
              open: mapData.initial_open_comp === "routing" || storedPanel === "RouterView"
            };
            let openRouter = mapData.initial_open_comp === "routing"  || storedPanel === "RouterView";

            if (!this.routerContainer) {
              if (this.data.router_div) {
                this.routerContainer = document.querySelector("." + this.data.router_div);
                if (!this.routerContainer) {
                  this.routerContainer = document.createElement('div');
                  this.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
                  if (this.$overlaycontainer_stopevent && this.$overlaycontainer_stopevent.length) {
                    this.$overlaycontainer_stopevent.append(this.routerContainer);
                  } else {
                    jQuery(".ol-overlaycontainer-stopevent").append(this.routerContainer);
                  }
                } else {
                  this.routerContainer.className += " c4g-external";
                }
              } else {
                this.routerContainer = document.createElement('div');
                this.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
                if (this.$overlaycontainer_stopevent && this.$overlaycontainer_stopevent.length) {
                  this.$overlaycontainer_stopevent.append(this.routerContainer);
                } else {
                  jQuery(".ol-overlaycontainer-stopevent").append(this.routerContainer);
                }
              }
            }

            if (RouterView && routerControlProps) {
              let view = React.createElement(RouterView, routerControlProps);
              if (view && this && this.routerContainer) {
                let portal = ReactDOM.createPortal(view, this.routerContainer);
                if (portal) {
                  result.push(portal);
                }
              }
            }
          }
          /**
           * end test
           */
          break;
        case 'editor':
          if (mapData.feEditorProfile && mapData.feEditorProfile !== "0") {
            if (!this.editorContainer) {
              if (this.data.editor_div) {
                this.editorContainer = document.querySelector("." + this.data.editor_div);
                let openEditor = mapData.initial_open_comp === "editor"  || storedPanel === "EditorView";
                if (!this.editorContainer) {
                  this.editorContainer = document.createElement('div');
                  this.editorContainer.className = "c4g-sideboard c4g-editor-container-right " + (openEditor ? "c4g-open": "c4g-close");
                  if (this.$overlaycontainer_stopevent && this.$overlaycontainer_stopevent.length) {
                    this.$overlaycontainer_stopevent.append(this.editorContainer);
                  } else {
                    jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                  }
                } else {
                  this.editorContainer.className += " c4g-external";
                }
              } else {
                let openEditor = mapData.initial_open_comp === "editor"  || storedPanel === "EditorView";
                this.editorContainer = document.createElement('div');
                this.editorContainer.className = "c4g-sideboard c4g-editor-container-right " + (openEditor ? "c4g-open": "c4g-close");
                if (this.$overlaycontainer_stopevent && this.$overlaycontainer_stopevent.length) {
                  this.$overlaycontainer_stopevent.append(this.editorContainer);
                } else {
                  jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                }
              }
            }
            let targetElement = mapData.editor.target || target;
            if (!targetElement) {
                break;
            }
            let editorProps = {
              tipLabel: langConstants.CTRL_EDITOR,
              type: mapData.editor.type || 'frontend',
              inputField: mapData.editor.inputField || false,
              target: targetElement,
              initOpen: mapData.editor.open || false,
              config: mapData.editor.config || false,
              dataField: mapData.editor.data_field || false,
              caching: mapData.caching,
              ref: (node) => {this.components.editor = node;},
              mapController: this,
              open: mapData.initial_open_comp === "editor"  || storedPanel === "EditorView"
            };
            result.push(ReactDOM.createPortal(React.createElement(EditorComponent, editorProps), this.editorContainer));
          }
          else if (mapData.editor.type == "backend") {
            if (!this.editorContainer) {
              if (this.data.editor_div) {
                this.editorContainer = document.querySelector("." + this.data.editor_div);
                if (!this.editorContainer) {
                  this.editorContainer = document.createElement('div');
                  this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                  jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                } else {
                  this.editorContainer.className += " c4g-external";
                }
              } else {
                this.editorContainer = document.createElement('div');
                this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-open";
                jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
              }
            }
            let targetElementBackend = mapData.editor.target || target;
            if (!targetElementBackend) {
                break;
            }
            let editorProps = {
              tipLabel: langConstants.CTRL_EDITOR,
              type: mapData.editor.type || 'frontend',
              inputField: mapData.editor.inputField || "#c4gGeoEditorGeoData",
              target: targetElementBackend,
              initOpen: mapData.editor.open || false,
              config: mapData.editor.config || false,
              dataField: mapData.editor.data_field || false,
              caching: mapData.caching,
              mapController: this,
              open: true
            };
            result.push(ReactDOM.createPortal(React.createElement(EditorComponent, editorProps), this.editorContainer));
          }
          break;
      }
    }


    return <React.Fragment>
      {result}
    </React.Fragment>;
  }

  setOpenComponent(component) {
    const scope = this;
    this.setState({openComponent: component}, () => {
      for (let key in this.components) {
        if (this.components.hasOwnProperty(key)) {
          let currentComp = this.components[key];
          if (currentComp && (currentComp !== component)) {
            if (currentComp.close) {
              currentComp.close();
            }
            else {
              currentComp.setState({open:false});
            }
          }
        }
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let controls = this.map.getControls().getArray();
    for (let i in this.arrComponents) {
      if (this.arrComponents.hasOwnProperty(i)) {
        if (this.arrComponents[i].control) {
          const found = controls.find((elem) => {
            let element = elem.element;
            let control = this.arrComponents[i].control.element;
            return element.className == control.className;
          });
          if (!found) {
            this.map.addControl(this.arrComponents[i].control);
          }
        }
      }
    }

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  createGeosearchOptions(target) {
    const mapData = this.data;
    // geosearch
    let geosearchOptions = {};
    if ((mapData.geosearch && mapData.geosearch.enable)) {

      let geosearchTarget = target;
      if (!geosearchTarget) {
          return {};
      }
      if (!this.searchContainer) {
        if (mapData.geosearch.div) {
          this.searchContainer = document.querySelector("." + mapData.geosearch.div);
          this.searchContainer.className += " c4g-external";
          if (!this.searchContainer) {
            this.searchContainer = document.createElement('div');
            this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
            this.searchContainer.className += "c4g-close";
            this.$overlaycontainer_stopevent.append(this.searchContainer);
          }
        } else {
          this.searchContainer = document.createElement('div');
          this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
          this.searchContainer.className += "c4g-close";
        }
        if (!mapData.geosearch.div) {
          this.$overlaycontainer_stopevent.append(this.searchContainer);
        }
      }
      geosearchOptions = {
        mapController: this,
        target: geosearchTarget,
        extDiv: mapData.geosearch.div || false,
        extResultsDiv: mapData.geosearch.div_results || false,
        collapsible: true,
        collapsed: mapData.initial_open_comp !== "search",
        label: ' ',
        collapsedLabel: '',
        // engineUrl: mapData.geosearch.engine,
        searchZoom: mapData.geosearch.searchzoom,
        zoomBounds: mapData.geosearch.zoombounds,
        quicksearch: true,
        animate: mapData.geosearch.animate,
        animateDuration: mapData.geosearch.animate_duration,
        markResult: mapData.geosearch.markresult,
        resultDuration: mapData.geosearch.result_duration,
        popup: mapData.geosearch.popup,
        autopick: mapData.geopicker,
        caching: mapData.caching,
        results: mapData.geosearch.results,
        resultCount: mapData.geosearch.result_count,
        resultsHeadline: mapData.geosearch.results_headline,
        headline: mapData.geosearch.headline,
        resultStyle: mapData.geosearch.result_locstyle,
        placeholder: mapData.geosearch.placeholder,
        external: this.searchContainer.className.indexOf("c4g-external") !== -1
      };
    }
    return geosearchOptions;
  }
}