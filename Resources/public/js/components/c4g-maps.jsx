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
// import {Permalink} from "../c4g-maps-control-permalink";
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
import {BaselayerSwitcher} from "./c4g-baselayerswitcher.jsx";
import {Infopage} from "./c4g-infopage.jsx";
import {Measuretools} from "./c4g-measuretools.jsx";
import {Permalink} from "./c4g-permalink.jsx";

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
    super(props);
    //---
    let mapData = props.mapData;
    this.state = {
      objLayers: [],
      arrLayerStates: [],
      openComponent: null,
      objTabLayers: [],
      arrTabLayerStates: []
    };
    this.setObjLayers = this.setObjLayers.bind(this);
    this.setLayerStates = this.setLayerStates.bind(this);
    this.setTabStates = this.setTabStates.bind(this);
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
    window.c4gMapsHooks.map_center_changed.push(function (center) {
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
    window.c4gMapsHooks.hook_map_zoom.push(function (proxy) {
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
          this.reactContainer.className += " c4g-external c4g-sideboard c4g-starboard-container ol-unselectable";
        }
      } else {
        this.reactContainer = document.createElement('div');
        this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";
        this.$overlaycontainer_stopevent.append(this.reactContainer);
      }
      if (mapData.starboard.open) {
        this.reactContainer.style.right = "0";
        this.reactContainer.className += " c4g-open";
      } else {
        this.reactContainer.style.right = "-100%";
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
          this.baselayerContainer.className += " c4g-sideboard c4g-external c4g-baselayer-container ol-unselectable";
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

    // feature filter
    if (mapData.filterDiv) {
      mapData.filterDiv = mapData.filterDiv[0] === "." || mapData.filterDiv[0] === "#" ? mapData.filterDiv : "." + mapData.filterDiv;
      this.filterContainer = document.createElement('div');
      this.components.filter = ReactDOM.render(React.createElement(FeatureFilter, {
        target: document.querySelector(mapData.filterDiv),// + mapData.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER),
        mapController: this,
        direction: "top",
        className: "c4g-feature-filter"
      }), this.filterContainer);
      $(mapData.filterDiv).append(this.filterContainer);
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
          this.infoPageContainer.className += " c4g-sideboard c4g-external c4g-infopage-container ol-unselectable c4g-close";
        }
      } else {
        this.infoPageContainer = document.createElement('div');
        this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";
        this.$overlaycontainer_stopevent.append(this.infoPageContainer);
      }
    }

    // measuretools container
    if (mapData.measuretools.enable) {
      if (mapData.measuretools.div) {
        this.measuretoolsContainer = document.querySelector("." + mapData.measuretools.div);
        if (!this.measuretoolsContainer) {
          this.measuretoolsContainer = document.createElement('div');
          this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable c4g-close";
          this.$overlaycontainer_stopevent.append(this.measuretoolsContainer);
        } else {
          this.measuretoolsContainer.className += " c4g-external c4g-sideboard c4g-measuretools-container ol-unselectable c4g-close";
        }
      } else {
        this.measuretoolsContainer = document.createElement('div');
        this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable c4g-close";
        this.$overlaycontainer_stopevent.append(this.measuretoolsContainer);
      }
    }

    // permalink container
    if (mapData.permalink.enable) {
      this.permalinkContainer = document.createElement('div');
      this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";
      this.$overlaycontainer_stopevent.append(this.permalinkContainer);
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

      if (domMapDiv && mapData.themeData['fontsize']) {
        domMapDiv.style.setProperty('--button-fontsize-pixel', mapData.themeData['fontsize'] + 'px');
      }
    }
    if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
      utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
        mapController: this,
        Container: this.mapsControls.controlContainerTopLeft
      });
    }
    const scope = this;
    this.map.on("change:size", function() {
      scope.setState({});
      domMapDiv.style.setProperty('--map-height', scope.map.getSize()[1] + "px");
    });
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
    const mapData = this.data;
    let target = document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left');
    let components = [
      {name: "layerswitcher", sort: mapData.layerswitcher.enable},
      {name: "geosearch", sort: mapData.geosearch.enable},
      {name: "legend", sort: mapData.legend},
      {name: "baselayerswitcher", sort: mapData.baselayerswitcher.enable},
      {name: "measuretools", sort: mapData.measuretools.enable},
      {name: "permalink", sort: mapData.permalink.enable}
    ];
    let sbPortal = "";
    if (mapData.layerswitcher.enable) {
      sbPortal = ReactDOM.createPortal(
          <StarboardPanel ref={(node) => {
            this.components.starboard = node;
          }} target={target}
                          mapController={this} objLayers={this.state.objLayers} tabLayers={this.state.objTabLayers} tabStates={this.state.arrTabLayerStates}
                          layerStates={this.state.arrLayerStates} parentCallback={this.setLayerStates} tabCallback={this.setTabStates}
                          direction={"right"} open={(this.props.mapData.initial_open_comp === "starboard")} external={this.reactContainer.className.indexOf("c4g-external") !== -1}
          />,
          this.reactContainer
      );
    }
    let searchPortal = "";
    if (mapData.geosearch.enable) {
      let geoSearchOptions = this.createGeosearchOptions();
      geoSearchOptions.ref = (node) => {
        this.components.geosearch = node;
      };
      searchPortal = ReactDOM.createPortal(
        React.createElement(GeoSearch, geoSearchOptions),
        this.searchContainer
      );
    }
    let infoPortal = "";
    if (mapData.legend.enable) {
      infoPortal = ReactDOM.createPortal(
        <Infopage ref={(node) => {this.components.infopage = node;}} target={target} external={this.infoPageContainer.className.indexOf("c4g-external") !== -1}
                  infoContent={mapData.infopage} mapController={this} open={mapData.initial_open_comp === "legend"}/>,
        this.infoPageContainer
      );
    }

    let blsPortal = "";
    if (mapData.baselayerswitcher.enable) {
      blsPortal = ReactDOM.createPortal(
          <BaselayerSwitcher ref={(node) => {
            this.components.baselayerSwitcher = node;
          }} target={target} open={mapData.initial_open_comp === "baselayers"} external={this.baselayerContainer.className.indexOf("c4g-external") !== -1}
                             mapController={this} baselayerController={this.proxy.baselayerController}/>,
          this.baselayerContainer
      );
    }
    let measurePortal = "";
    if (mapData.measuretools.enable) {
      measurePortal = ReactDOM.createPortal(
        <Measuretools ref={(node) => {this.components.measuretools = node;}} target={target} external={this.measuretoolsContainer.className.indexOf("c4g-external") !== -1}
          mapController={this} open={mapData.initial_open_comp === "measuretools"}/>,
        this.measuretoolsContainer
      );
    }
    let permaPortal = "";
    if (mapData.permalink.enable) {
      permaPortal = ReactDOM.createPortal(
        <Permalink ref={(node) => {this.components.permalink = node;}} mapController={this} target={target}
                   external={this.permalinkContainer.className.indexOf("c4g-external") !== -1}/>,
        this.permalinkContainer
      );
    }
    let result = [];
    components.sort(function(a, b) {
      return (a.sort > b.sort) ? 1 : -1;
    });
    for (let i = 0; i < components.length; i++) {
      switch (components[i].name) {
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
        case "legend":
          result.push(infoPortal);
          break;
        case "permalink":
          result.push(permaPortal);
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
            currentComp.setState({open: false});
          }
        }
      }
      if (scope.data.caching) {
        utils.storeValue('panel', component.constructor.name);
      }
    });
  }

  componentDidMount() {
    if (this.data.caching) {
      let storedPanel = utils.getValue('panel');
      if (storedPanel) {
        for (let key in this.components) {
          if (this.components.hasOwnProperty(key)) {
            if (this.components[key] && this.components[key].constructor.name === storedPanel) {
              this.components[key].setState({
                open: true
              });
              storedPanel = this.components[key];
            }
          }
        }
        this.setOpenComponent(storedPanel);
      }
    }
  }

  createGeosearchOptions() {
    const mapData = this.data;
    // geosearch
    let geosearchOptions = {};
    if ((mapData.geosearch && mapData.geosearch.enable)) {

      if (!this.searchContainer) {
        if (mapData.geosearch.div) {
          this.searchContainer = document.querySelector("." + mapData.geosearch.div);
          if (!this.searchContainer) {
            this.searchContainer = document.createElement('div');
            this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
            this.searchContainer.className += mapData.geosearch.collapsed ? "c4g-close" : "c4g-open";
            this.$overlaycontainer_stopevent.append(this.searchContainer);
          }
        } else {
          this.searchContainer = document.createElement('div');
          this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
          this.searchContainer.className += mapData.geosearch.collapsed ? "c4g-close" : "c4g-open";
        }
        if (!mapData.geosearch.div) {
          this.$overlaycontainer_stopevent.append(this.searchContainer);
        }
      }
      geosearchOptions = {
        mapController: this,
        target: document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left'),
        extDiv: mapData.geosearch.div || false,
        collapsible: true,
        collapsed: mapData.initial_open_comp !== "search",
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
        placeholder: mapData.geosearch.placeholder,
        external: this.searchContainer.className.indexOf("c4g-external") !== -1
      };
    }
    return geosearchOptions;
  }
}