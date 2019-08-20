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

import {MapProxy} from "./c4g-maps-proxy";
import {cssConstants} from "./c4g-maps-constant";
import {Spinner} from "./c4g-maps-misc-spinner";
import {MapHover} from "./c4g-maps-misc-maphover";
import {utils} from "./c4g-maps-utils";
import {Measuretools} from "./c4g-maps-control-portside-measuretools";
import {Print} from "./c4g-maps-control-print";
import {Grid} from "./c4g-maps-control-grid";
import {Zoomlevel} from "./c4g-maps-control-zoomlevel";
import {OverviewMap} from "./c4g-maps-control-overviewmap";
import {GeoSearch} from "./c4g-maps-control-geosearch";
import {Permalink} from "./c4g-maps-control-permalink";
import {Starboard} from "./c4g-maps-control-starboard";
import {Account} from "./c4g-maps-control-portside-account";
import {GeoPicker} from "./c4g-maps-interaction-geopicker";
import {Home} from "./c4g-maps-control-home";
import {Position} from "./c4g-maps-control-position";
import {Infopage} from "./c4g-maps-control-portside-infopage";
import {getLanguage} from "./c4g-maps-i18n";
import {View} from "ol";
import {transform} from "ol/proj";
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
import {StarboardPanel} from "./components/c4g-starboard-panel";
import ReactDOM from "react-dom";
import React from "react";

let langConstants = {};

'use strict';
export class MapController {

  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  constructor(mapData) {

    //---
    this.map = null;
    // this.controls = null;
    this.leftSlideElements = [];
    this.rightSlideElements = [];
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
      controlContainerTopLeft,
      controlContainerBottomLeft,
      controlContainerTopRight,
      controlContainerBottomRight,
      controlContainerBottomLeftSub,
      starboard_label,
      logoLink,
      logoGraphic,
      removeElement,
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
        }
        if (mapData.layers.length < 1) {
          mapData.layers = false;
          permalink = false;
        }
      } else {
        // just to make sure this var is really "false"
        permalink = false;
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
      if ((utils.getValue('lon')) && (utils.getValue('lat'))) {
        mapData.center.lon = utils.getValue('lon');
        mapData.center.lat = utils.getValue('lat');
      }

      if (utils.getValue('zoom')) {
        mapData.center.zoom = utils.getValue('zoom');
      }
    }

    view = new View({
      // projection: get('EPSG:4326'),
      // center: [parseFloat(mapData.center_lon), parseFloat(mapData.center_lat)],
      // minResolution: undefined,
      // maxResolution: undefined,
      center: transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
      zoom: parseInt(mapData.center.zoom, 10),
      minZoom: parseInt(minZoom, 10),
      maxZoom: parseInt(maxZoom, 10),
      rotation: parseFloat(mapData.center.rotation)
    });

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

    this.map.updateSize();
    this.proxy.initialize();
    // this.proxy.loadBaseLayers();
    // this.proxy.loadLayers();
    // ---

    // save overlaycontainer
    this.$overlaycontainer_stopevent = jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE);
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

    // add control-containers ===
    //
    // top-left
    controlContainerTopLeft = document.createElement('div');
    controlContainerTopLeft.className = cssConstants.CONTROL_CONTAINER_TL + ' ' + cssConstants.OL_UNSELECTABLE;
    this.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
    // bottom-left
    controlContainerBottomLeft = document.createElement('div');
    controlContainerBottomLeft.className = cssConstants.CONTROL_CONTAINER_BL + ' ' + cssConstants.OL_UNSELECTABLE;
    jQuery(controlContainerTopLeft).after(controlContainerBottomLeft);
    // element needs to be moved when Portside will be opened
    this.leftSlideElements.push(controlContainerBottomLeft);
    // top-right
    controlContainerTopRight = document.createElement('div');
    controlContainerTopRight.className = cssConstants.CONTROL_CONTAINER_TR + ' ' + cssConstants.OL_UNSELECTABLE;
    jQuery(controlContainerBottomLeft).after(controlContainerTopRight);
    // element needs to be moved when Starboard will be opened
    this.rightSlideElements.push(controlContainerTopRight);
    // bottom-right
    controlContainerBottomRight = document.createElement('div');
    controlContainerBottomRight.className = cssConstants.CONTROL_CONTAINER_BR + ' ' + cssConstants.OL_UNSELECTABLE;
    jQuery(controlContainerTopRight).after(controlContainerBottomRight);
    // element needs to be moved when Starboard will be opened
    this.rightSlideElements.push(controlContainerBottomRight);
    // ===
    // add controls ===
    this.controls = {};
    // add container for react components
    this.reactContainer = document.createElement('div');
    let routerProps = {
      target: document.querySelector('#' + mapData.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE),
      mapController: this,
      direction: "top",
      router: null,
      withPosition: false,
      objFunctions: {},
      objSettings: {},
      containerAddresses: {}
    };
    this.$overlaycontainer_stopevent.append(this.reactContainer);

    // account
    if (mapData.account && typeof Account === 'function') {
      this.controls.account = new Account({
        tipLabel: langConstants.CTRL_ACCOUNT,
        target: controlContainerTopLeft,
        caching: mapData.caching,
        mapController: this
      });
      this.map.addControl(this.controls.account);
      // open if opened before
      if ((mapData.caching && (utils.getValue(this.controls.account.options.name) === '1'))) {
        this.controls.account.open();
      }
    }

    // zoom-controls
    if (mapData.zoom_panel || mapData.zoom_slider) {
      this.controls.zoom = new Zoom({
        zoomInLabel: ' ',
        zoomOutLabel: ' ',
        zoomInTipLabel: langConstants.CTRL_ZOOM_IN,
        zoomOutTipLabel: langConstants.CTRL_ZOOM_OUT,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.zoom);

      if (mapData.zoom_slider) {
        this.controls.zoomslider = new ZoomSlider(
          {
            label: ' ',
            tipLabel: langConstants.CTRL_ZOOM_SLIDER,
            target: controlContainerTopLeft
          }
        );
        this.map.addControl(this.controls.zoomslider);
      }
    }
    if (mapData.zoom_extent && !mapData.zoom_slider) {
      this.controls.zoom_extent = new ZoomToExtent({
        label: ' ',
        tipLabel: langConstants.CTRL_ZOOM_EXT,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.zoom_extent);
    }
    if (mapData.zoom_home && !mapData.zoom_slider) {
      this.controls.zoom_home = new Home({
        label: ' ',
        disableLabel: ' ',
        tipLabel: langConstants.CTRL_ZOOM_HOME,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.zoom_home);
    }

    if (mapData.zoom_position && !mapData.zoom_slider) {
      this.controls.zoom_position = new Position({
        label: ' ',
        disableLabel: ' ',
        tipLabel: langConstants.CTRL_ZOOM_POS,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.zoom_position);
    }

    // combined zoom-controls
    if (mapData.zoom_slider) {
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_SLIDER).removeClass(cssConstants.OL_ZOOM);
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_SLIDER + ' button').addClass(cssConstants.OL_ZOOM_SLIDER));
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_SLIDER + '.' + cssConstants.OL_CONTROL).remove();
    }

    if (mapData.zoom_panel && mapData.zoom_extent) {
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_EXT).removeClass(cssConstants.OL_ZOOM);
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_EXT + ' button').addClass(cssConstants.OL_ZOOM_EXT));
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_EXT + '.' + cssConstants.OL_CONTROL).remove();
    }

    if (mapData.zoom_panel && mapData.zoom_home) {
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_HOME).removeClass(cssConstants.OL_ZOOM);
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_HOME + ' button').addClass(cssConstants.OL_ZOOM_HOME));
      removeElement = controlContainerTopLeft.querySelector('.' + cssConstants.OL_ZOOM_HOME + '.' + cssConstants.OL_UNSELECTABLE + '.button');
      if (removeElement) {
        try {
          removeElement.remove();
        } catch (err) {
          //ie 11 error
        }
      }
    }

    if (mapData.zoom_panel && mapData.zoom_position) {
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM).addClass(cssConstants.OL_ZOOM_WITH_POS).removeClass(cssConstants.OL_ZOOM);
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_IN).after(jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_POS + ' button').addClass(cssConstants.OL_ZOOM_POS));
      jQuery('#' + mapData.mapDiv + ' .' + cssConstants.OL_ZOOM_POS + '.' + cssConstants.OL_CONTROL).remove();
      removeElement = controlContainerTopLeft.querySelector('.' + cssConstants.OL_ZOOM_POS + '.' + cssConstants.OL_UNSELECTABLE + '.button');
      if (removeElement) {
        try {
          removeElement.remove();
        } catch (err) {
          //ie 11 error
        }
      }
    }

    // fullscreen
    if (mapData.fullscreen) {
      this.controls.fullscreen = new FullScreen({
        label: ' ',
        labelActive: ' ',
        tipLabel: langConstants.CTRL_FULLSCREEN,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.fullscreen);
    }

    // measuretools
    if (mapData.measuretools.enable && typeof Measuretools === 'function') {
      this.controls.measuretools = new Measuretools({
        tipLabel: langConstants.CTRL_MEASURETOOLS,
        target: controlContainerTopLeft,
        caching: mapData.caching,
        mapController: this
      });
      this.map.addControl(this.controls.measuretools);
      // open if opened before
      if ((mapData.caching && (utils.getValue(this.controls.measuretools.options.name) === '1'))) {
        this.controls.measuretools.open();
      }
    }
    //
    if (mapData.print) {
      this.controls.print = new Print({
        label: "",
        tipLabel: langConstants.CTRL_PRINT,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.print);
    }

    // show graticule (grid)
    if (mapData.graticule) {
      this.controls.graticule = new Grid({
        label: ' ',
        disableLabel: ' ',
        tipLabel: langConstants.CTRL_GRID,
        caching: mapData.caching,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.graticule);
    }
    // rotate-control
    //TODO: use something like "mapData.rotate"
    //   Check: mapData.mouse_nav (defined?)
    if (mapData.mouse_nav && (mapData.mouse_nav.drag_rotate || (mapData.mouse_nav.drag_rotate && mapData.mouse_nav.drag_rotate_zoom))) {
      this.controls.rotate = new Rotate({
        label: ' ',
        tipLabel: langConstants.CTRL_RESET_ROTATION,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.rotate);
    }
    // infopage
    if (mapData.infopage && typeof Infopage === 'function') {
      this.controls.infopage = new Infopage({
        tipLabel: langConstants.CTRL_INFOPAGE,
        target: controlContainerTopLeft,
        caching: mapData.caching,
        mapController: this
      });
      this.map.addControl(this.controls.infopage);
      // open if opened before
      if ((mapData.caching && (utils.getValue(this.controls.infopage.options.name) === '1'))) {
        this.controls.infopage.open();
      }
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


    // scaleline
    if (mapData.scaleline) {
      this.controls.scaleline = new ScaleLine({
        target: controlContainerBottomLeft
      });
      this.map.addControl(this.controls.scaleline);
    }

    // zoom-level & mouse-position
    if (mapData.zoomlevel || mapData.mouseposition) {
      // wrapper for zoom-level and mouse-position
      controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = cssConstants.CONTROL_CONTAINER_BL_SUB + ' ' + cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
      // display zoom-level
      if (mapData.zoomlevel) {
        this.controls.zoomlevel = new Zoomlevel({
          mapController: this,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        this.map.addControl(this.controls.zoomlevel);
      }
      // display mouse-position
      if (mapData.mouseposition) {
        this.controls.mouseposition = new MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        this.map.addControl(this.controls.mouseposition);
      }
    }

    // geosearch
    if ((mapData.geosearch.enable)) {
      this.controls.geosearch = new GeoSearch({
        mapController: this,
        target: controlContainerTopRight,
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
        results: mapData.geosearch.results
      });
      this.map.addControl(this.controls.geosearch);
      // open if opened before
      // if ((mapData.caching && (utils.getValue(this.controls.geosearch.options.name) === '1'))) {
      //   this.controls.geosearch.open();
      // }
    }

    // geobookmarks - not ready
    if (mapData.geobookmarks) {
      this.controls.geobookmarks = new ol_control_GeoBookmark({
        //target: controlContainerTopRight
        label: ' ',
        tipLabel: langConstants.CTRL_GEOBOOKMARKS,
        placeholder: langConstants.GEOBOOKMARKS_PLACEHOLDER,
        namespace: 'c4g_geobookmarks'/*,
                className: cssConstants.GEOBOOKMARKS*/ //ToDo implement for own styling
      });
      this.map.addControl(this.controls.geobookmarks);
      this.rightSlideElements.push('.ol-bookmark');

    }

    // overview-map
    if (mapData.overviewmap) {
      let overviewMapOptions = {target: controlContainerTopRight, mapController: this, collapsed: true};
      const scope = this;
      const addOverviewMap = function() {
        let activeBaselayer = scope.proxy.activeBaselayerId;
        scope.proxy.baselayerController.showBaseLayer(activeBaselayer);
        overviewMapOptions.layers = [scope.proxy.baselayerController.arrBaselayers[activeBaselayer].layer];
        if (scope.overviewMap) {
          // we are reloading the overview map, so keep the collapsed-property
          overviewMapOptions.collapsed = !scope.overviewMap.isOpen();
        }
        scope.overviewMap = new OverviewMap(overviewMapOptions);
        scope.controls.overviewmap = scope.overviewMap.getOverviewMap();
        scope.map.addControl(scope.controls.overviewmap);
      };
      if (this.proxy.baselayers_loaded) {
        addOverviewMap();
      } else {
        this.proxy.hook_baselayer_loaded.push(addOverviewMap);
      }
      // add hook to synchronize overviewmap with baselayer
      window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
      window.c4gMapsHooks.baselayer_changed.push(function(baselayerId) {
        scope.map.removeControl(scope.controls.overviewmap);
        scope.overviewMap.removeFromMap();
        addOverviewMap();
      });
    }

    // starboard
    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      enableStarboard = false;
    }

    // popup margin
    //this.leftSlideElements.push('.ol-overlay-container');
    //this.rightSlideElements.push('.ol-overlay-container');

    if (typeof Starboard === 'function' && enableStarboard && !this.controls.starboard) {
      // this.initializeStarboard();
    }

    // backend-geopicker
    if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
      this.controls.geopicker = new GeoPicker({
        mapContainer: this
      });
      this.map.addInteraction(this.controls.geopicker);
      if (mapData.geopicker.type === "frontend") {
        // substring is needed here for taking out the #
        if (mapData.geopicker.input_geo_x && mapData.geopicker.input_geo_x) {
          var geoxField = document.getElementById(mapData.geopicker.input_geo_x.substring(1));
          var geoyField = document.getElementById(mapData.geopicker.input_geo_y.substring(1));
          if (geoxField && geoyField) {
            var locGeox = geoxField.value;
            var locGeoy = geoyField.value;
            if (locGeox && locGeoy) {
              var numerized = [parseFloat(locGeox, 10), parseFloat(locGeoy, 10)];
              var transformed = transform(numerized, get('EPSG:4326'), get('EPSG:3857'));
              geoLocation = null;
              this.map.getView().setCenter(transformed);
            }
          }
        }
      }
    }

    // show attribution
    if (mapData.attribution.enable) {
      // @TODO: create own attribution-control
      if (mapData.attribution.cfg_logo) {
        logoLink = document.createElement('a');
        logoLink.href = 'https://con4gis.org';
        logoLink.title = 'built with con4gis';
        logoLink.target = '_blank';
        logoLink.className = cssConstants.ATTRIBUTION_LOGO;
        logoGraphic = document.createElement('img');
        logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
        logoLink.appendChild(logoGraphic);
        controlContainerBottomRight.appendChild(logoLink);
      }
      const attrOptions = {
        label: ' ',
        tipLabel: langConstants.CTRL_ATTRIBUTION,
        collapseLabel: ' ',
        target: mapData.attribution.div ? mapData.attribution.div : controlContainerBottomRight,
        collapsible: mapData.attribution.div ? false : true
      };
      if (mapData.attribution.div) {
        attrOptions["className"] = "ol-attribution ol-attribution-ext-div";
      }
      this.controls.attribution = new Attribution(attrOptions);
      this.controls.attribution.setCollapsed(mapData.attribution.div ? false : mapData.attribution.collapsed === '1');
      this.map.addControl(this.controls.attribution);
    }

    // show permalink
    if (mapData.permalink.enable) {
      this.controls.permalink = new Permalink({
        label: ' ',
        tipLabel: langConstants.CTRL_PERMALINK,
        mapController: this,
        getParameter: mapData.permalink.get_parameter,
        target: controlContainerBottomRight
      });
      this.map.addControl(this.controls.permalink);
    }

    //themeData
    if (mapData.themeData) {
      domMapDiv = document.getElementById(mapData.mapDiv);
      if (mapData.themeData['useglobal']) {
        domMapDiv = document.getElementById('wrapper');
      }
      ;

      if (mapData.themeData['maincolor']) {
        var mainColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);
        var fontColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);
        var shadowColor = utils.getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);

        if (domMapDiv && domMapDiv.style) {
          domMapDiv.style.setProperty('--main-color', mainColor);
          domMapDiv.style.setProperty('--font-color', fontColor);
          domMapDiv.style.setProperty('--shadow-color', shadowColor);
        }
      }

      if (domMapDiv && mapData.themeData['buttonradius']) {
        domMapDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius'] + '%');
        domMapDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius'] + 'px');
      }
    }
    if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
      utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
        mapController: this,
        Container: controlContainerTopLeft
      });
    }
  }

  initializeStarboard() {
    const mapData = this.data;
    let starboard_label;
    if (mapData.starboard.label) {
      starboard_label = langConstants.CTRL_STARBOARD.replace('Starboard', mapData.starboard.label).replace('starboard', mapData.starboard.label);
    }

    this.controls.starboard = new Starboard({
      create: mapData.starboard.enable || false,
      headline: mapData.starboard.label,
      tipLabel: starboard_label || false,
      caching: mapData.caching,
      mapController: this,
      extDiv: mapData.starboard.div,
      // defaultOpen: mapData.starboard.open,
      filter: mapData.starboard.filter,
      button: mapData.starboard.button,
      baselayerSwitcherCreate: mapData.baselayerswitcher.enable,
      baselayerSwitcherTitle: mapData.baselayerswitcher.label,
      layerSwitcherCreate: mapData.layerswitcher.enable,
      layerSwitcherTitle: mapData.layerswitcher.label
    });

     this.map.addControl(this.controls.starboard);

    // open if opened before
    if (mapData.starboard.open || (mapData.caching && (utils.getValue(this.controls.starboard.options.name) === '1'))) {
      this.controls.starboard.open();
    }
  }
}