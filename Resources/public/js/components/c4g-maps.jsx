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

import {MapProxy} from "../c4g-maps-proxy";
import {cssConstants} from "../c4g-maps-constant";
import {Spinner} from "../c4g-maps-misc-spinner";
import {MapHover} from "../c4g-maps-misc-maphover";
import {utils} from "../c4g-maps-utils";
import {GeoSearch} from "./c4g-geosearch.jsx";
import {Permalink} from "../c4g-maps-control-permalink";
import {MapsControls} from "../c4g-maps-controls";
import {getLanguage} from "../c4g-maps-i18n";
import {View} from "ol";
import {transform, transformExtent} from "ol/proj";
import {Geolocation} from "ol";
import {defaults as interactionDefaults} from "ol/interaction";
import {defaults as controlDefaults} from "ol/control";
import {Map} from "ol";
import {Group} from "ol/layer";
import {Point} from "ol/geom";
import {getTopRight, getTopLeft, getBottomLeft, getBottomRight, boundingExtent} from "ol/extent";
import {Kinetic} from "ol";
import {DragRotate} from "ol/interaction";
import {DragPan} from "ol/interaction";
import {DragRotateAndZoom} from "ol/interaction";
import {DragZoom} from "ol/interaction";
import {MouseWheelZoom} from "ol/interaction";
import {DoubleClickZoom} from "ol/interaction";
import {shiftKeyOnly} from "ol/events/condition";
import {PinchRotate} from "ol/interaction";
import {PinchZoom} from "ol/interaction";
import {KeyboardZoom} from "ol/interaction";
import {KeyboardPan} from "ol/interaction";
import {Zoom} from "ol/control";
import {ZoomSlider} from "ol/control";
import {ZoomToExtent} from "ol/control";
import {FullScreen} from "ol/control";
import {Rotate} from "ol/control";
import {ScaleLine} from "ol/control";
import {MousePosition} from "ol/control";
import {Attribution} from "ol/control";
import {toStringHDMS} from "ol/coordinate";
import {get} from "ol/proj";
import ol_control_GeoBookmark from "ol-ext/control/GeoBookmark"
import {StarboardPanel} from "./c4g-starboard-panel.jsx";
import ReactDOM from "react-dom";
import React, {Component} from "react";
import {FeatureFilter} from "./c4g-feature-filter.jsx";

let langConstants = {};

'use strict';
export class MapController extends Component {

  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  constructor(props) {
    super(props)
    //---
    let mapData = props.mapData;
    this.state = {
      objLayers: [],
      arrLayerStates: [],
      openComponent: null
    };
    this.setObjLayers = this.setObjLayers.bind(this);
    this.setLayerStates = this.setLayerStates.bind(this);
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
    if (mapData.calc_extent === 'LOCATIONS') {
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
    // PHPStorm marks this as error, but it is none
    // This is needed for preventing an error with the OSM-Overpass API
    // which occurs when MooTools is loaded
    if (window.MooTools && Browser.Document) {
      Document = Browser.Document;
    }
    this.proxy = new MapProxy({mapController: this});
    this.components = this.components || {};
    this.hideOtherComponents = this.hideOtherComponents.bind(this);
    this.hideOtherBottomComponents = this.hideOtherBottomComponents.bind(this);

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

    // add view observer to update permalink on center change, if a permalink exists
    // use other permalink variable to avoid interference with the actual permalink mechanism
    window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
    window.c4gMapsHooks.map_center_changed.push(function(center) {
      let currentPermalink = utils.getUrlParam(mapData.permalink.get_parameter);
      if (currentPermalink) {
        currentPermalink = currentPermalink.split('/');
        if (currentPermalink.length >= 3) {
          center = transform(center, "EPSG:3857", "EPSG:4326");
          currentPermalink[0] = center[0];
          currentPermalink[1] = center[1];
          utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true)
        }
      }
    });

    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(function(proxy) {
      let currentPermalink = utils.getUrlParam(mapData.permalink.get_parameter);
      if (currentPermalink) {
        currentPermalink = currentPermalink.split('/');
        if (currentPermalink.length >= 3) {
          currentPermalink[2] = parseInt(view.getZoom(), 10) || currentPermalink[2];
          utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true)
        }
      }
    });

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
      if ((utils.getValue('lon')) && (utils.getValue('lat'))) {
        mapData.center.lon = utils.getValue('lon');
        mapData.center.lat = utils.getValue('lat');
      }

      if (utils.getValue('zoom')) {
        mapData.center.zoom = utils.getValue('zoom');
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
        zoom: parseInt(mapData.center.zoom, 10),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    } else {
      view = new View({
        center: transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseInt(mapData.center.zoom, 10),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    }

    // check userposition
    if (mapData.geolocation && !permalink) {
      geoLocation = new Geolocation({
        //tracking: !mapData.geopicker,
        tracking: true,
        projection: view.getProjection()
      });
      geoLocation.on('change', function (evt) {
        if (geoLocation) {
          view.setCenter(geoLocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
          geoLocation.setTracking(false);
          if (self.map) {
            self.map.setView(view);
            if (self.$overlaycontainer_stopevent) {
              // utils.redrawMapView(self);
            }
          }
        }
      });
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
          self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
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

    mapData.map = this.map;

    // set extent to make all locations visible if wanted
    if (mapData.calc_extent === "LOCATIONS") {
      displayAllLocations = function (layerIds) {
        var layers = self.proxy.layerController.arrLayers,
          layer,
          geometry,
          coords,
          padding,
          coordinates,
          extent,
          featureList,
          featureArray,
          key,
          vectorArray,
          layerGroup,
          center;
        // delete function from hook array
        delete this[this.indexOf(displayAllLocations)];
        coordinates = [];
        // calculate resulting extent of all geometries
        for (key in layers) {
          if (layers.hasOwnProperty(key)) {
            layer = layers[key];
            if (layer.type == "overpass") {
              continue
            }
            vectorArray = layer.content;
            if (vectorArray === undefined) {
              // catch case of linked layers
              continue;
            }
            if (typeof vectorArray === "object") {
              vectorArray = utils.objectToArray(vectorArray);
            }
            layerGroup = layer.vectorLayer;
            if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
              vectorArray.forEach(function (vectorLayer) {
                if (vectorLayer &&
                  vectorLayer.data &&
                  vectorLayer.data.geometry &&
                  vectorLayer.data.geometry.coordinates) {
                  if (vectorLayer.data.geometry.type === "Point") {
                    coords = transform([parseFloat(vectorLayer.data.geometry.coordinates[0]),
                      parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                    if (coords[0] == "Infinity" || coords[0] == "-Infinity") {
                      return
                    }
                    geometry = new Point(coords);
                    coordinates.push(geometry.getCoordinates());
                  }
                }
              });
            }
            if (layerGroup) {
              // handle more complex geometries
              featureList = layerGroup.getLayers();
              featureArray = featureList.getArray();
              featureArray.forEach(function (feature) {
                if (layer.type === "kml") {
                  var source = feature.getSource();
                  //var sourceFeatures = source.getFeatures();
                  source.getExtent().forEach(function (coordinate) {
                    coordinates.push(coordinate);
                  });
                } else {
                  coordinates.push(getTopRight(feature.getSource().getExtent()));
                  coordinates.push(getTopLeft(feature.getSource().getExtent()));
                  coordinates.push(getBottomRight(feature.getSource().getExtent()));
                  coordinates.push(getBottomLeft(feature.getSource().getExtent()));
                }
              });
            }
          }
        }
        extent = boundingExtent(coordinates);
        if (extent[0] == "Infinity" || extent[0] == "-Infinity") {
          return
        }
        //TODO: catch case min_gap is already an array
        padding = [mapData.min_gap, mapData.min_gap, mapData.min_gap, mapData.min_gap];
        self.map.getView().fit(extent, {padding: padding});
        center = self.map.getView().getCenter();
        if (isNaN(center[0])) {
          self.map.getView().setCenter([50, 10]);
          self.map.getView().setZoom(mapData.minZoom || 10);
        }
      };
      this.proxy.hook_layer_visibility.push(displayAllLocations);
    }

    // set map-size and -margin
    domMapDiv = document.getElementById(mapData.mapDiv);

    if (domMapDiv && domMapDiv.style) {
      if (mapData.width) {
        domMapDiv.style.width = mapData.width;
      }
      if (mapData.height) {
        domMapDiv.style.height = mapData.height;
      }
      if (mapData.margin) {
        domMapDiv.style.margin = mapData.margin;
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
        this.map.addInteraction(new DragPan({kinetic: kinetic}));
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
      // drag rotate (& zoom)
      let customCondition = function (mapBrowserEvent) {
        var browserEvent = mapBrowserEvent.originalEvent;
        return (browserEvent.ctrlKey && browserEvent.shiftKey);
      };

      if (mapData.mouse_nav.drag_rotate_zoom) {
        this.map.addInteraction(new DragRotateAndZoom({condition: customCondition}));
      } else if (mapData.mouse_nav.drag_rotate) {
        this.map.addInteraction(new DragRotate({condition:customCondition}));
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
    if (mapData.starboard && mapData.starboard.enable) {
      this.reactContainer = document.createElement('div');
      this.reactContainer.className ="c4g-sideboard c4g-starboard-container ol-unselectable";
      if (mapData.starboard.open) {
        this.reactContainer.style.right = "0";
        this.reactContainer.className += " c4g-open";
      } else {
        this.reactContainer.style.right = "-100%";
        this.reactContainer.className += " c4g-close";
      }


      this.$overlaycontainer_stopevent.append(this.reactContainer);
    }
    // feature filter
    if (mapData.filterDiv && false) {
      this.filterContainer = document.createElement('div');
      this.components.filter = ReactDOM.render(React.createElement(FeatureFilter, {
        target: document.querySelector(mapData.filterDiv),// + mapData.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER),
        mapController: this,
        direction: "top",
        className: "c4g-feature-filter"
      }), this.filterContainer);
      $(mapData.filterDiv).append(this.filterContainer);
    }

    // @ToDo mapData.additionalPanel is always true, because it is set as an new object in the beginning. Therefore the second parameter of the boolean is requested, which throws an error
    // additionalPanel is furthermore not found anywhere in Maps and should be loaded over a hook

    // if (mapData.additionalPanel && typeof c4g.maps.control.additionalPanel === 'function') {
    //   this.controls.additionalPanel = new c4g.maps.control.additionalPanel({
    //     tipLabel: langConstants.CTRL_ADDITIONALPANEL,
    //     target: controlContainerTopLeft,
    //     caching: mapData.caching,
    //     mapController: this
    //   });
    //   this.map.addControl(this.controls.additionalPanel);
    // }



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
      domMapDiv = document.getElementById(mapData.mapDiv);
      if (mapData.themeData['useglobal']) {
        domMapDiv = document.getElementById('wrapper');
      }
      ;

      let mapWidth = "100%";
      let mapHeight = "100%";

      if (mapData.width) {
        mapWidth = mapData.width;
      }
      if (mapData.height) {
        mapHeight = mapData.height;
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

        if (domMapDiv && domMapDiv.style) {
          domMapDiv.style.setProperty('--main-color', mainColor);
          domMapDiv.style.setProperty('--font-color', fontColor);
          domMapDiv.style.setProperty('--pu-main-color', popupMainColor);
          domMapDiv.style.setProperty('--pu-font-color', popupFontColor);
          domMapDiv.style.setProperty('--shadow-color', shadowColor);
        }
      }

      if (domMapDiv && mapData.themeData['buttonradius']) {
        domMapDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius'] + '%');
        domMapDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius'] + 'px');
      }

      if (domMapDiv && mapData.themeData['buttonsize']) {
        domMapDiv.style.setProperty('--button-size-pixel', mapData.themeData['buttonsize'] + 'px');
      }
    }
    if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
      utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
        mapController: this,
        Container: this.mapsControls.controlContainerTopLeft
      });
    }
  }

  setLayersInitial(objLayers, arrLayers) {
    this.setState({
      objLayers: objLayers,
      arrLayerStates: arrLayers
    });
  }

  setObjLayers(objLayers) {
    this.setState({
      objLayers: objLayers
    });
  }

  setLayerStates(arrLayerStates) {
    this.setState({
      arrLayerStates: arrLayerStates
    });
  }

  hideOtherComponents(objComponent) {
    let components = this.components;
    for (let key in components) {
      if (components.hasOwnProperty(key)) {
        if (components[key] && (components[key] !== objComponent)) {
          components[key].setState({open:false});
        }
      }
    }
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

  render() {
    const mapData = this.props.mapData;
    let target = document.querySelector('#' + this.props.mapData.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE);
    let sbPortal = ReactDOM.createPortal(
      <StarboardPanel ref={(node) => {this.components.starboard = node;}} target={target}
                      mapController={this} objLayers={this.state.objLayers}
                      layerStates={this.state.arrLayerStates} parentCallback={this.setLayerStates}
                      direction={"right"} open={!!this.props.mapData.starboard.open}
      />,
      this.reactContainer
    );
    let searchPortal = "";
    if (mapData.geosearch && mapData.geosearch.enable) {
      let geoSearchOptions = this.createGeosearchOptions();
      geoSearchOptions.ref = (node) => {
        this.components.geosearch = node;
      };
      searchPortal = ReactDOM.createPortal(
        React.createElement(GeoSearch, geoSearchOptions),
        this.searchContainer
      );
    }

    return <React.Fragment>
      {sbPortal}
      {searchPortal}
    </React.Fragment>;
  }

  setOpenComponent(component) {
    this.setState({openComponent: component}, () => {
      for (let key in this.components) {
        if (this.components.hasOwnProperty(key)) {
          let currentComp = this.components[key];
          if (currentComp !== component) {
            currentComp.setState({open: false});
          }
        }
      }
    });
  }

  componentDidMount() {
    console.log(this.components);
  }

  createGeosearchOptions() {
    const mapData = this.data;
    // geosearch
    let geosearchOptions = {};
    if ((mapData.geosearch && mapData.geosearch.enable)) {
      geosearchOptions = {
        mapController: this,
        target: document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left'),
        extDiv: mapData.geosearch.div || false,
        collapsible: true,
        collapsed: mapData.geosearch.collapsed,
        label: ' ',
        collapsedLabel: '',
        // engineUrl: mapData.geosearch.engine,
        searchZoom: mapData.geosearch.searchzoom,
        zoomBounds: mapData.geosearch.zoombounds,
        quicksearch: true,
        animate: mapData.geosearch.animate,
        markResult: mapData.geosearch.markresult,
        popup: mapData.geosearch.popup,
        autopick: mapData.geopicker,
        caching: mapData.caching,
        results: mapData.geosearch.results,
        resultCount: mapData.geosearch.result_count,
        resultsHeadline: mapData.geosearch.results_headline,
        headline: mapData.geosearch.headline,
        resultStyle: mapData.geosearch.result_locstyle,
        placeholder: mapData.geosearch.placeholder
      };
      if (!this.searchContainer) {
        if (mapData.geosearch.div && mapData.geosearch.div_results) {
          this.searchContainer = document.querySelector("#" + mapData.geosearch.div);
          if (!this.searchContainer) {
            this.searchContainer = document.querySelector("." + mapData.geosearch.div);
          }
          this.searchResultsContainer = document.querySelector("#" + mapData.geosearch.div_results);
          if (!this.searchResultsContainer) {
            this.searchResultsContainer = document.querySelector("." + mapData.geosearch.div_results);
          }
          geosearchOptions.resultsDiv = this.searchResultsContainer;
        } else {
          this.searchContainer = document.createElement('div');
          this.searchContainer.className = "c4g-geosearch-container-right ";
          this.searchContainer.className += mapData.geosearch.collapsed ? "c4g-close" : "c4g-open";
        }
        // this.components.geosearch = ReactDOM.render(React.createElement(GeoSearch, geosearchOptions), this.searchContainer);
        if (!mapData.geosearch.div) {
          this.$overlaycontainer_stopevent.append(this.searchContainer);
        }
      }
      // open if opened before
      // if ((mapData.caching && (utils.getValue(this.controls.geosearch.options.name) === '1'))) {
      //   this.controls.geosearch.open();
      // }
    }
    return geosearchOptions;
  }
}