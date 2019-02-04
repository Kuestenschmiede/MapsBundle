/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-baselayer-controller.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/c4g-baselayer-controller.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C4gBaselayerController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gBaselayer = __webpack_require__(/*! ./c4g-baselayer */ "./Resources/public/js/c4g-baselayer.js");

var _c4gOverlay = __webpack_require__(/*! ./c4g-overlay */ "./Resources/public/js/c4g-overlay.js");

var _c4gMapsConfig = __webpack_require__(/*! ./c4g-maps-config */ "./Resources/public/js/c4g-maps-config.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gBaselayerController = exports.C4gBaselayerController = function () {
  function C4gBaselayerController(proxy) {
    _classCallCheck(this, C4gBaselayerController);

    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrBaselayers = {};
    this.baselayerIds = [];
  }

  _createClass(C4gBaselayerController, [{
    key: "loadBaseLayers",
    value: function loadBaseLayers() {
      var self;

      self = this;

      jQuery.ajax(this.proxy.api_baselayer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"
      }).done(function (data) {
        if (data.baselayer) {
          self.addBaseLayers(data.baselayer);
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_baselayer_loaded);
        }
        return true;
      }).fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the baselayers. Do you have configured a default profile with baselayers?');
        self.mapController.spinner.hide();
        return false;
      }).always(function () {
        //self.mapController.spinner.hide();
      });
    } // end of "loadBaseLayers()"

  }, {
    key: "addBaseLayers",
    value: function addBaseLayers(baselayers) {
      var baselayer, uid, i, j;

      // sort baselayer (for internal list)
      baselayers.sort(function (a, b) {
        if (!a.sort && !b.sort || parseInt(a.sort, 10) === parseInt(b.sort, 10)) {
          if (!a.name || !b.name) {
            return !b.name ? -1 : 1;
          }
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        }
        if (!a.sort || !b.sort) {
          return !b.sort ? -1 : 1;
        }
        return parseInt(a.sort, 10) > parseInt(b.sort, 10) ? 1 : -1;
      });

      // build baselayer-list
      if (baselayers.length > 0) {
        for (i = 0; i < baselayers.length; i += 1) {

          baselayer = baselayers[i];

          uid = baselayer.id || _c4gMapsUtils.utils.getUniqueId();
          this.baselayerIds.push(uid);
          if (!this.arrBaselayers[uid]) {
            this.arrBaselayers[uid] = new _c4gBaselayer.C4gBaselayer(baselayer, this);
          }

          // @TODO: check initial baselayer-handling
          if (this.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.baselayer, 10)) {
            this.showBaseLayer(uid);
          }

          if (this.arrBaselayers[uid].hasOverlays) {
            for (j = 0; j < this.arrBaselayers[uid].overlays.length; j++) {
              if (!this.arrBaselayers[uid].overlayController.arrOverlays[this.arrBaselayers[uid].overlays[j].id]) {
                this.arrBaselayers[uid].overlayController.arrOverlays[this.arrBaselayers[uid].overlays[j].id] = new _c4gOverlay.C4gOverlay(this.arrBaselayers[uid].overlays[j], this.mapController);
                this.arrBaselayers[uid].overlayController.arrOverlays[this.arrBaselayers[uid].overlays[j].id].layer = this.arrBaselayers[uid].overlayController.showOverlayLayer(this.arrBaselayers[uid].overlays[j].id);
              }
            }
          }
        }
      }

      if (!this.activeBaselayerId) {
        // no baselayer was activated
        if (baselayers.length > 0 && baselayers[0].id) {
          // take first baselayer if possible
          uid = baselayers[0].id;
        } else {
          // otherwise build default baselayer
          uid = 0;
          this.baselayerIds.push(uid);
          if (!this.arrBaselayers[uid]) {
            this.arrBaselayers[uid] = {
              id: 0,
              name: 'c4g_default',
              provider: 'osm',
              style: 'Mapnik'
            };
          }
        }
        this.showBaseLayer(uid);
      }
      this.proxy.baselayers_loaded = true;

      _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_baselayer_loaded, this.baselayerIds);
    } // end of "addBaseLayers()"

  }, {
    key: "createBaseLayer",
    value: function createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs) {
      var newBaselayer;
      layerOptions = layerOptions || {};
      switch (baseLayerConfig.provider) {
        case 'custom':
          // custom
          var noUrl = true;
          if (baseLayerConfig.url) {
            if (baseLayerConfig.url.indexOf('https') !== -1) {
              layerOptions.crossOrigin = 'anonymous';
            }
            layerOptions.url = baseLayerConfig.url;
            noUrl = false;
          } else if (baseLayerConfig.urls) {
            layerOptions.urls = baseLayerConfig.urls;
            noUrl = false;
          }
          if (!noUrl) {
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ(layerOptions),
              extent: baseLayerConfig.extend
            });
          } else {
            console.warn('custom url(s) missing -> switch to default');
          }
        case 'osm':
          if (sourceConfigs.osm[baseLayerConfig.style]) {
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.OSM($.extend(sourceConfigs.osm[baseLayerConfig.style], layerOptions))
            });
          } else if (sourceConfigs.stamen[baseLayerConfig.style]) {
            // Stamen
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.Stamen($.extend(sourceConfigs.stamen[baseLayerConfig.style], layerOptions))
            });
            // } else if (mapQuestSourceConfigs[baseLayerConfig.style]) {
            //   // mapQuest
            //   newBaselayer = new ol.layer.Tile({
            //     source: new ol.source.MapQuest(mapQuestSourceConfigs[baseLayerConfig.style])
            //   });
          } else if (baseLayerConfig.style === 'osm_custom') {
            // custom
            var _noUrl = true;
            if (baseLayerConfig.url) {
              layerOptions.url = baseLayerConfig.url;
              _noUrl = false;
            } else if (baseLayerConfig.urls) {
              layerOptions.urls = baseLayerConfig.urls;
              _noUrl = false;
            }
            if (!_noUrl) {
              newBaselayer = new ol.layer.Tile({
                source: new ol.source.XYZ(layerOptions)
              });
            } else {
              console.warn('custom url(s) missing -> switch to default');
            }
          } else {
            console.warn('unsupported osm-style -> switch to default');
          }
          break;
        case 'mapbox':
          if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.mapbox_type) {

            if (baseLayerConfig.mapbox_type === 'Mapbox') {
              layerOptions.url = baseLayerConfig.url + baseLayerConfig.app_id + '/tiles/{z}/{x}/{y}?access_token=' + baseLayerConfig.api_key;
              newBaselayer = new ol.layer.Tile({
                source: new ol.source.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions))
              });
            } else {
              layerOptions.url = baseLayerConfig.url_classic + baseLayerConfig.app_id + '/{z}/{x}/{y}.png?access_token=' + baseLayerConfig.api_key;

              newBaselayer = new ol.layer.Tile({
                source: new ol.source.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions))
              });
            }
          } else if (baseLayerConfig.hide_in_be) {
            layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ($.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions))
            });
          } else {
            console.warn('wrong mapbox configuration!');
          }
          break;
        case 'klokan':
          if (baseLayerConfig.api_key && baseLayerConfig.klokan_type) {

            if (baseLayerConfig.klokan_type === 'OpenMapTiles') {
              layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf';
              newBaselayer = new ol.layer.VectorTile({
                source: new ol.source.VectorTile(jQuery.extend(sourceConfigs.klokan[baseLayerConfig.klokan_type], layerOptions))
              });

              //ToDo style url
              fetch(baseLayerConfig.url + '/styles/' + baseLayerConfig.style + '/style.json').then(function (response) {
                response.json().then(function (glStyle) {
                  olms.applyStyle(newBaselayer, glStyle, 'openmaptiles');
                });
              });
            } else {
              layerOptions.url = baseLayerConfig.url + '/data/v3/{z}/{x}/{y}.pbf?key=' + baseLayerConfig.api_key;
              newBaselayer = new ol.layer.VectorTile({
                source: new ol.source.VectorTile(jQuery.extend(sourceConfigs.klokan[baseLayerConfig.klokan_type], layerOptions))
              });

              fetch(baseLayerConfig.url + '/styles/' + baseLayerConfig.style + '/style.json?key=' + baseLayerConfig.api_key).then(function (response) {
                response.json().then(function (glStyle) {
                  olms.applyStyle(newBaselayer, glStyle, 'openmaptiles');
                });
              });
            }
          } else {
            console.warn('wrong klokan configuration!');
          }
          break;
        case 'here':
          if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.here_type) {

            if (baseLayerConfig.style == 'normal') {
              layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
            } else if (baseLayerConfig.style == 'transit') {
              layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
            } else if (baseLayerConfig.style == 'pedestrian') {
              layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
            } else if (baseLayerConfig.style == 'terrain') {
              layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
            } else if (baseLayerConfig.style == 'satellite') {
              layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
            } else if (baseLayerConfig.style == 'hybrid') {
              layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
            }

            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ($.extend(sourceConfigs.here[baseLayerConfig.here_type], layerOptions))
            });
          } else if (baseLayerConfig.hide_in_be) {
            layerOptions.url = layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ($.extend(sourceConfigs.mapbox[baseLayerConfig.here_type], layerOptions))
            });
          } else {
            console.warn('wrong HERE configuration!');
          }
          break;
        case 'thunder':
          if (baseLayerConfig.api_key && baseLayerConfig.thunderforest_type) {

            if (baseLayerConfig.style) {
              layerOptions.url = "https://tile.thunderforest.com/" + baseLayerConfig.style + "/{z}/{x}/{y}.png?apikey=" + baseLayerConfig.api_key;
            }

            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ(jQuery.extend(sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type], layerOptions))
            });
          } else if (baseLayerConfig.hide_in_be) {
            layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.thunderforest_type], layerOptions))
            });
          } else {
            console.warn('wrong Thunderforest configuration!');
          }
          break;
        case 'google':
          //@todo
          console.warn('google-maps are currently unsupported');
          break;
        case 'bing':
          if (baseLayerConfig.api_key && baseLayerConfig.style) {
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.BingMaps({
                culture: navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage,
                key: baseLayerConfig.api_key,
                imagerySet: baseLayerConfig.style
              })
            });
          } else {
            console.warn('wrong bing-key or invalid imagery-set!');
          }
          break;
        case 'wms':
          if (baseLayerConfig.url.indexOf('https') !== -1) {
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.TileWMS({
                url: baseLayerConfig.url,
                params: {
                  LAYERS: baseLayerConfig.params.layers,
                  VERSION: baseLayerConfig.params.version,
                  //FORMAT: baseLayerConfig.params.format,
                  TRANSPARENT: baseLayerConfig.params.transparent
                },
                gutter: baseLayerConfig.gutter,
                attributions: baseLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION,
                crossOrigin: 'anonymous'
              })
              //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
            });
          } else {
            newBaselayer = new ol.layer.Tile({
              source: new ol.source.TileWMS({
                url: baseLayerConfig.url,
                params: {
                  LAYERS: baseLayerConfig.params.layers,
                  VERSION: baseLayerConfig.params.version,
                  //FORMAT: baseLayerConfig.params.format,
                  TRANSPARENT: baseLayerConfig.params.transparent
                },
                gutter: baseLayerConfig.gutter,
                attributions: baseLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
              })
              //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
            });
          }

          break;
        case 'owm':
          newBaselayer = new ol.layer.Tile({
            source: new ol.source.XYZ({
              url: baseLayerConfig.url + baseLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + baseLayerConfig.api_key,
              attributions: baseLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
            })
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
          break;
        case 'group':
          var baseLayerGroup = [];
          for (var index in baseLayerConfig['layerGroup']) {
            if (baseLayerConfig['layerGroup'].hasOwnProperty(index)) {

              var element = this.createBaseLayer(null, baseLayerConfig['layerGroup'][index], sourceConfigs);
              var maxZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['minZoom']);
              var minZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['maxZoom']);
              element.setMinResolution(minZoom);
              element.setMaxResolution(maxZoom);
              baseLayerGroup.push(element);
            }
          }
          newBaselayer = new ol.layer.Group({
            layers: baseLayerGroup
          });
          break;

        default:
          console.warn('unsupported provider');
          break;
      }
      return newBaselayer;
    }
  }, {
    key: "showBaseLayer",
    value: function showBaseLayer(baseLayerUid) {

      var self = this,
          layers = void 0,
          baselayer = void 0,
          addBaselayer = void 0,
          baseLayers = void 0,
          sourceConfigs = [],
          newBaselayer = void 0,
          layerOptions = void 0,
          i = void 0,
          view = void 0;

      var baseLayerConfig = this.arrBaselayers[baseLayerUid];

      if (typeof baseLayerConfig !== "undefined" && !baseLayerConfig.layer) {
        // create layer
        sourceConfigs.osm = _c4gMapsConfig.config.osm;
        sourceConfigs.stamen = _c4gMapsConfig.config.stamen;
        //mapQuestSourceConfigs = c4g.maps.config.mapquest;
        sourceConfigs.mapbox = _c4gMapsConfig.config.mapbox;
        sourceConfigs.klokan = _c4gMapsConfig.config.klokan;
        sourceConfigs.here = _c4gMapsConfig.config.here;
        sourceConfigs.thunderforest = _c4gMapsConfig.config.thunderforest;

        //newBaselayer = new ol.layer.Tile({
        //  source: new ol.source.OSM()
        //});

        layerOptions = {};

        if (baseLayerConfig.attribution) {
          if (layerOptions.attributions) {
            layerOptions.attributions = layerOptions.attributions + ' ' + baseLayerConfig.attribution;
          } else {
            layerOptions.attributions = ol.source.OSM.ATTRIBUTION + ' ' + baseLayerConfig.attribution;
          }
        } else if (!layerOptions.attributions) {
          switch (baseLayerConfig.provider) {
            case 'osm':
              if (sourceConfigs.stamen[baseLayerConfig.style]) {
                layerOptions.attributions = sourceConfigs.stamen[baseLayerConfig.style].attributions;
                /*
                              } else if (mapQuestSourceConfigs[baseLayerConfig.style]) {
                                layerOptions.attributions = mapQuestSourceConfigs[baseLayerConfig.style].attributions;
                */
              } else if (sourceConfigs.osm[baseLayerConfig.style]) {
                layerOptions.attributions = sourceConfigs.osm[baseLayerConfig.style].attributions;
              } else {
                layerOptions.attributions = ol.source.OSM.ATTRIBUTION;
              }
              break;
            case 'mapbox':
              layerOptions.attributions = sourceConfigs.mapbox[baseLayerConfig.mapbox_type].attributions;
              break;
            case 'klokan':
              layerOptions.attributions = sourceConfigs.klokan[baseLayerConfig.klokan_type].attributions;
              break;
            case 'here':
              layerOptions.attributions = sourceConfigs.here[baseLayerConfig.here_type].attributions;
              break;
            case 'thunder':
              layerOptions.attributions = sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type].attributions;
              break;
            default:
              layerOptions.attributions = ol.source.OSM.ATTRIBUTION;
              break;
          }
        }

        //ToDo helper class for attributions

        //additional attribution
        if (this.mapController.data && this.mapController.data.attribution && this.mapController.data.attribution.additional) {
          if (layerOptions.attributions) {
            var additionalAttribution = this.mapController.data.attribution.additional;

            exists = false;
            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i] == additionalAttribution) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions = layerOptions.attributions + ' ' + additionalAttribution;
            }
          } else {
            layerOptions.attributions = this.mapController.data.attribution.additional;
          }
        }

        //ToDo type class for geosearch_engine
        //geosearch attribution
        var geosearch_attribution = '';
        if (this.mapController.data.geosearch) {
          var geosearch_engine = this.mapController.data.geosearch.geosearch_engine;

          if (this.mapController.data && this.mapController.data.attribution) {

            switch (geosearch_engine) {
              case '4':
                geosearch_attribution = ''; //con4gis mapservices
                break;
              case '3':
                if (this.mapController.data.geosearch.custom_attribution) {
                  geosearch_attribution = this.mapController.data.geosearch.custom_attribution;
                }
                break;
              case '2':
                geosearch_attribution = 'Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" alt="" />';
                break;
              case '1':
              default:
                geosearch_attribution = 'Nominatim Search Courtesy of <a href="http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy" target="_blank">OpenStreetMap</a>';
                break;
            }

            var geosearchAttribution = geosearch_attribution;

            var exists = false;
            if (!layerOptions.attributions) {
              layerOptions.attributions = [];
            }
            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i] == geosearchAttribution) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions = layerOptions.attributions + ' ' + geosearchAttribution;
            } else {
              layerOptions.attributions = geosearchAttribution;
            }
          }
        }

        if (baseLayerConfig.sorting) {
          layerOptions.sort = baseLayerConfig.sorting;
        }
        if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) {
          layerOptions.minZoom = baseLayerConfig.minZoom;
        }
        if (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
          layerOptions.maxZoom = baseLayerConfig.maxZoom;
        }

        newBaselayer = this.createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs);
        if (baseLayerConfig.hasOverlays) {
          for (i = 0; i < baseLayerConfig.overlays.length; i++) {
            if (!baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id]) {
              baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id] = new _c4gOverlay.C4gOverlay(baseLayerConfig.overlays[i], this.mapController);
              baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id].layer = baseLayerConfig.overlayController.showOverlayLayer(baseLayerConfig.overlays[i].id);
            }
          }
        }

        this.arrBaselayers[baseLayerUid].layer = newBaselayer;
      }

      layers = this.mapController.map.getLayers();

      // secure
      if (layers.item(0).get('checkSum') === "baseMapsLayer") {
        baseLayers = layers.item(0).getLayers();

        if (typeof this.arrBaselayers[baseLayerUid] !== "undefined") {
          baselayer = this.arrBaselayers[baseLayerUid].layer;

          if (baselayer) {
            addBaselayer = true;
            baseLayers.forEach(function (element, index, array) {
              if (element && element === baselayer) {
                element.setVisible(true);
                addBaselayer = false;
              } else if (element) {
                element.setVisible(false);
              } else {
                addBaselayer = false;
              }
            }, this);

            if (addBaselayer) {
              baseLayers.push(baselayer);
            }
          }

          view = this.mapController.map.getView();
          var zoom = view.getZoom();
          var center = view.getCenter();
          if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0 || baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
            if (baseLayerConfig.minZoom && view.getZoom() < baseLayerConfig.minZoom) {
              view.setZoom(baseLayerConfig.minZoom);
            } else if (baseLayerConfig.maxZoom && view.getZoom() > baseLayerConfig.maxZoom) {
              view.setZoom(baseLayerConfig.maxZoom);
            }

            var mapData = this.mapController.data;
            if (mapData.zoomlevel || mapData.mouseposition) {
              view.setMinZoom(parseInt(baseLayerConfig.minZoom, 10) || 0);
              view.setMaxZoom(parseInt(baseLayerConfig.maxZoom, 10) || 19);
              this.mapController.map.setView(view);
            }
          }
        }
      }

      if (typeof baseLayerConfig !== "undefined") {
        this.proxy.activeBaselayerId = baseLayerConfig.id;

        _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_baselayer_visibility, baseLayerConfig);

        /**
         * Cesium integration
         */
        if (typeof baseLayerConfig !== "undefined") {
          var mapData = this.mapController.data;
          if (mapData.cesium && mapData.cesium.enable && (mapData.cesium.always || baseLayerConfig.cesium)) {
            if (!this.ol3d) {
              this.ol3d = new olcs.OLCesium({
                map: this.mapController.map,
                createSynchronizers: false /*,
                                           time() {
                                           const val = timeElt.value;
                                           if (ol3d.getCesiumScene().globe.enableLighting && val) {
                                           const d = new Date();
                                           d.setUTCHours(val);
                                           return Cesium.JulianDate.fromDate(d);
                                           }
                                           return Cesium.JulianDate.now();
                                           }*/ });
            }
            /*const scene = ol3d.getCesiumScene();
            const terrainProvider = new Cesium.CesiumTerrainProvider({
                url: '//assets.agi.com/stk-terrain/world',
                requestVertexNormals: true
            });
            scene.terrainProvider = terrainProvider;*/
            this.ol3d.setEnabled(true);
            /*window['toggleTime'] = function() {
                scene.globe.enableLighting = !scene.globe.enableLighting;
                if (timeElt.style.display == 'none') {
                    timeElt.style.display = 'inline-block';
                } else {
                    timeElt.style.display = 'none';
                }
            };*/
          } else {
            if (this.ol3d && this.ol3d.getEnabled()) {
              this.ol3d.setEnabled(false);
              _c4gMapsUtils.utils.redrawMapView(this.mapController);
            }
          }
        }
      }
    } // end of "showBaseLayer()"

  }]);

  return C4gBaselayerController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-baselayer.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-baselayer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.C4gBaselayer = undefined;

var _c4gOverlayController = __webpack_require__(/*! ./c4g-overlay-controller */ "./Resources/public/js/c4g-overlay-controller.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gBaselayer = exports.C4gBaselayer = function C4gBaselayer(baselayerArr, controller) {
    _classCallCheck(this, C4gBaselayer);

    this.id = baselayerArr['id'];
    this.pid = baselayerArr['pid'];
    this.name = baselayerArr['name'];
    this.display_name = baselayerArr['display_name'];
    this.provider = baselayerArr['provider'];
    this.osm_style = baselayerArr['osm_style'];
    this.osm_style_url1 = baselayerArr['osm_style_url1'];
    this.osm_style_url2 = baselayerArr['osm_style_url2'];
    this.osm_style_url3 = baselayerArr['osm_style_url3'];
    this.osm_style_url4 = baselayerArr['osm_style_url4'];
    this.osm_keyname = baselayerArr['osm_keyname'];
    this.mapbox_type = baselayerArr['mapbox_type'];
    this.bing_style = baselayerArr['bing_style'];
    this.style = baselayerArr['style'];
    this.attribution = baselayerArr['attribution'];
    this.params = baselayerArr['params'];
    this.wms_gutter = baselayerArr['wms_gutter'];
    this.minZoom = baselayerArr['minZoom'];
    this.maxZoom = baselayerArr['maxZoom'];
    this.protect_baselayer = baselayerArr['protect_baselayer'];
    this.permitted_groups = baselayerArr['permitted_groups'];
    this.api_key = baselayerArr['apiKey'] ? baselayerArr['apiKey'] : baselayerArr['api_key'];
    this.app_id = baselayerArr['app_id'];
    this.thunderforest_type = baselayerArr['thunderforest_type'];
    this.here_type = baselayerArr['here_type'];
    this.cesium = baselayerArr['cesium'];
    this.hide_in_be = baselayerArr['hide_in_be'];
    this.url = baselayerArr['url'];
    this.urls = baselayerArr['urls'];
    this.klokan_type = baselayerArr['klokan_type'];
    this.style_url = baselayerArr['style_url'];
    this.hasOverlays = baselayerArr['hasOverlays'];
    this.overlays = baselayerArr['overlays'];
    if (baselayerArr['layerGroup']) {
        var layerGroup = [];
        for (var index in baselayerArr['layerGroup']) {
            if (baselayerArr['layerGroup'].hasOwnProperty(index)) {
                layerGroup[index] = new C4gBaselayer(baselayerArr['layerGroup'][index]['entry']);
                layerGroup[index]['minZoom'] = baselayerArr['layerGroup'][index]['minZoom'];
                layerGroup[index]['maxZoom'] = baselayerArr['layerGroup'][index]['maxZoom'];
            }
        }
        this.layerGroup = layerGroup;
    }
    this.overlayController = new _c4gOverlayController.C4gOverlayController(this);
    this.layer = false;
    this.controller = controller;
};

/***/ }),

/***/ "./Resources/public/js/c4g-layer-controller.js":
/*!*****************************************************!*\
  !*** ./Resources/public/js/c4g-layer-controller.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C4gLayerController = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gLayer = __webpack_require__(/*! ./c4g-layer */ "./Resources/public/js/c4g-layer.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsControlStarboardpluginCustomtab = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-customtab */ "./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLayerController = exports.C4gLayerController = function () {
  function C4gLayerController(proxy) {
    _classCallCheck(this, C4gLayerController);

    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrLayers = {};
    this.layerRequests = {};
  }

  _createClass(C4gLayerController, [{
    key: "loadLayers",
    value: function loadLayers() {
      var self = this;
      if (this.mapId === 0) {
        return false;
      }

      //jQuery.ajax("maps/layerService",{//this.proxy.api_layer_url,{
      jQuery.ajax(this.proxy.api_layer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"

      }).done(function (data) {
        self.addLayers(data.layer, data.foreignLayers);
        self.proxy.layers_loaded = true;
        _c4gMapsUtils.utils.callHookFunctions(self.proxy.hook_layer_loaded, self.proxy.layerIds);
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_layer_loaded, { layerIds: self.proxy.layerIds, proxy: self.proxy });
        self.proxy.checkLocationStyles({
          done: function done() {
            self.drawLayerInitial();
          }
        });
        return true;
      }).fail(function () {
        // @TODO: error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the layers...');
        return false;
      }).always(function () {
        // this.proxy.starboard.spinner.hide();
      });
    } // end of "loadLayer()"

  }, {
    key: "addLayers",
    value: function addLayers(layers, foreignLayers) {
      var i, j, k, p, isVisible, layer, storedItem, linkItems, uid, currentZoom, fnHandleAndAppendLayerChilds, endlessLoopId, parentId, parentIds, permalinkedLayers, child, _fnHandleChilds, key, starboard, fnAddToHook;

      var self = this;
      isVisible = false;

      permalinkedLayers = this.mapController.data.layers || [];

      fnHandleAndAppendLayerChilds = function fnHandleAndAppendLayerChilds(objItem) {
        var toggle, entryWrapper;

        if (objItem.hasChilds) {
          objItem.visibleChilds = self.addLayers(objItem.childs, foreignLayers);
        }
      }; // end of "fnHandleAndAppendLayerChilds()"

      // wrapper function to avoid closure accessibility
      fnAddToHook = function fnAddToHook(layer) {
        var layername, layerid, layericon;

        if (layer.childs && layer.childs.length > 0) {
          layername = layer.name;
          layerid = layer.tabId;
          layericon = layer.awesomeicon;
          starboard = self.proxy.options.mapController.controls.starboard;
          if (!starboard) {
            self.proxy.options.mapController.initializeStarboard();
            starboard = self.proxy.options.mapController.controls.starboard;
          }
          starboard.hook_layerswitcher_loaded.push(function () {
            starboard.starboardTabs = starboard.starboardTabs || {};
            starboard.starboardTabs[layerid] = new _c4gMapsControlStarboardpluginCustomtab.Customtab(starboard, {
              name: layername,
              tabId: layerid,
              awesomeicon: layericon
            });
          });
        }
      };

      if (layers && layers.length > 0) {
        for (i = 0; i < layers.length; i += 1) {
          if (this.arrLayers[layers[i].id]) {
            layer = this.arrLayers[layers[i].id];
          } else {
            layer = new _c4gLayer.C4gLayer(layers[i]); //layers[i];
          }

          linkItems = false;
          //console.log(layer);
          if (_typeof(layer.content) === "object") {
            layer.content = _c4gMapsUtils.utils.objectToArray(layer.content);
          }

          // endless-loop prevention
          //
          parentId = layer.pid;
          parentIds = {};
          // build parent-ids chain
          while (self.arrLayers[parentId]) {
            if (parentIds[parentId]) {
              console.warn('Caught endless-loop (ID: ' + layer.id + ')');
              break;
            }
            parentIds[parentId] = true;
            parentId = this.arrLayers[parentId].pid;
          }

          if (layer.content && layer.content[0] && layer.content[0].cssClass) {
            layer.cssClass = layer.content[0].cssClass;
          }

          if (!parentIds[parentId]) {

            // prepare layer data if they are a new starboard tab
            if (layer.type === "startab") {
              layer.editable = true;
              layer.renderSpecial = true;
              layer.tabId = layer.id;
              if (!layer.layername) {
                layer.display = true;
              }
              // iterate childs and tell them to not load in layerswitcher
              _fnHandleChilds = function fnHandleChilds(fLayer) {
                for (var count = 0; count < fLayer.childs.length; count++) {
                  var childArr = fLayer.childs[count];
                  childArr.editable = true;
                  childArr.tabId = fLayer.tabId;
                  childArr.renderSpecial = true;
                  if (self.arrLayers[childArr.id]) {
                    child = self.arrLayers[childArr.id];
                  } else {
                    child = new _c4gLayer.C4gLayer(childArr); //layers[i];
                  }
                  // set renderSpecial to remove it from normal layerswitcher
                  self.arrLayers[child.id] = child;
                  fLayer.childs[count] = child;
                  if (child.hasChilds) {
                    // recursive call
                    _fnHandleChilds(child);
                  }
                }
              }; // end of fnHandleChilds

              if (layer.hasChilds) {
                _fnHandleChilds(layer);
              }
              fnAddToHook(layer);
            }

            uid = layer.id || _c4gMapsUtils.utils.getUniqueId();
            this.arrLayers[uid] = layer;
            if (this.proxy.checkLayerIsActiveForZoom(layer.id)) {
              layer.isInactive = false;
            } else {
              layer.isInactive = true;
            }

            this.proxy.layerIds.push(layer.id);

            if (layer.display) {
              isVisible = true;
              fnHandleAndAppendLayerChilds(layer);
            } else if (layer.pid && this.arrLayers[layer.pid]) {
              // set hide when layers are not displayed in the starboard
              layer.hide = this.arrLayers[layer.pid].hide;
            }

            var visible = false;
            if (permalinkedLayers.length > 0) {
              for (p = 0; p < permalinkedLayers.length; p += 1) {
                if (permalinkedLayers[p] == layer.id) {
                  visible = true;
                  break;
                }
              }
            }

            if (layer.hide !== "1" || visible) {
              this.proxy.activeLayerIds[layer.id] = 'invisible';
            }
          }
        } // end of for-loop

        // wrapperElement.appendChild(wrapper);
      }

      return isVisible;
    } // end of "addLayers()"

  }, {
    key: "loadLayerContent",
    value: function loadLayerContent(itemUid) {

      var self = this,
          i,
          layers,
          features,
          featureProjection,
          dataProjection,
          layerGroup,
          contentData,
          requestData,
          requestContentData,
          requestVectorSource,
          vectorLayer,
          vectorSource,
          vectorStyle,
          clusterSource,
          styleForCluster,
          refreshInterval,
          refreshAjaxVars,
          fnAttachDataToLayer;

      refreshAjaxVars = {};

      fnAttachDataToLayer = function fnAttachDataToLayer(layer, data) {
        data.properties = data.properties || {};

        layer.popup = data.popup || data.properties.popup || false;
        layer.tooltip = data.tooltip || data.properties.tooltip || false;
        layer.tooltip_length = data.tooltip_length || data.properties.tooltip_length || false;
        layer.label = data.label || data.properties.label || false;
        layer.zoom_onclick = data.zoom_onclick || data.properties.zoom_onclick || false;
      };

      if (this.arrLayers[itemUid].content) {
        layers = [];

        var contentFeatures = [];
        for (i = 0; i < this.arrLayers[itemUid].content.length; i += 1) {
          contentData = this.arrLayers[itemUid].content[i];
          styleForCluster = function styleForCluster(feature, resolution) {

            var size, style, fFeatures, iconOffset, radius, k, fillcolor, fontcolor;

            if (contentData && contentData.locationStyle && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle]) {
              style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(feature, resolution);

              if (!style) {
                style = [];
                self.fittingExtends[itemUid] = vectorSource.getExtent();
              }

              if (feature !== undefined && feature !== null && feature.self !== window) {
                if (feature.get('features')) {
                  fFeatures = feature.get('features');
                } else {
                  fFeatures = [];
                  fFeatures[0] = feature;
                }
                size = fFeatures.length;
                if (size > 1) {
                  if (fFeatures[0].getStyle() && size < 1000) {
                    // limit for performance
                    style[0] = fFeatures[0].getStyle()[0];
                    for (k = 0; k < fFeatures.length; k += 1) {
                      if (!fFeatures[k].getStyle()) {
                        style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                        break;
                      }
                    }
                  } else {
                    style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                  }
                  if (!style) {
                    style = [];
                  }

                  // calculate bubble-offset
                  iconOffset = [0, 0];
                  if (style[0]) {
                    if (_typeof(style[0].getImage()) && style[0].getImage().getRadius && typeof style[0].getImage().getRadius === "function") {
                      radius = parseInt(style[0].getImage().getRadius(), 10);
                      if (radius) {
                        iconOffset = [0, radius];
                      }
                    } else if (style[0].getImage() && style[0].getImage().getAnchor && typeof style[0].getImage().getAnchor === "function") {
                      iconOffset = style[0].getImage().getAnchor() || [0, 0];
                    }
                  }

                  fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity('4975A8', {
                    unit: '%',
                    value: 70
                  });

                  if (contentData.cluster_fillcolor) {
                    fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                      unit: '%',
                      value: 70
                    });
                  }
                  fontcolor = '#FFFFFF';
                  if (contentData.cluster_fontcolor) {
                    fontcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(contentData.cluster_fontcolor, {
                      unit: '%',
                      value: 100
                    });
                  }

                  style.push(new ol.style.Style({
                    text: new ol.style.Text({
                      text: "●",
                      font: "60px sans-serif",
                      offsetX: -1 * iconOffset[0],
                      offsetY: -1 * iconOffset[1],
                      fill: new ol.style.Fill({
                        color: fillcolor
                      })
                    })
                  }));
                  style.push(new ol.style.Style({
                    text: new ol.style.Text({
                      text: size.toString(),
                      offsetX: -1 * iconOffset[0],
                      offsetY: -1 * iconOffset[1] + 3,
                      fill: new ol.style.Fill({
                        color: fontcolor
                      })
                    })
                  }));
                } else if (size === 1 && fFeatures[0].getStyle()) {
                  return fFeatures[0].getStyle();
                }
              }
            }
            return style;
          }; // end of styleForCluster()

          if (contentData && contentData.type === "urlData") {

            requestData = {};
            requestData.url = contentData.data.url;
            if (contentData.data.params) {
              requestData.params = decodeURIComponent(contentData.data.params);
            }

            if (contentData.settings.boundingBox) {
              requestContentData = contentData;
              requestVectorSource = new ol.source.Vector({
                loader: function loader(extent, resolution, projection) {
                  var boundingArray, strBoundingBox, url;
                  boundingArray = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
                  //different cases for Overpass_QL and XML query format
                  if (requestData.params && requestData.params.substr(0, 1).trim() === "<") {
                    strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
                  } else {
                    strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
                  }

                  url = requestData.url;

                  if (requestData.params) {
                    var bboxTag = requestData.params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g;
                    url += '?data=' + encodeURIComponent(requestData.params.replace(bboxTag, strBoundingBox));
                  }

                  if (self.layerRequests === undefined) {
                    self.layerRequests = {};
                  }
                  if (self.layerRequests['layerRequest' + itemUid] !== undefined) {
                    self.layerRequests['layerRequest' + itemUid].abort();
                  }

                  self.layerRequests['layerRequest' + itemUid] = jQuery.ajax({
                    url: url
                  }).done(function (response) {
                    var j, format, feature, rFeatures, osmNodes, osmNds, nodeIdx, ndIdx, infoNodes, newTag, ref;

                    delete self.layerRequests['layerRequest' + itemUid];

                    // preprocessing the osm_xml to find relation-nodes with information
                    if (response && response.children && response.children[0]) {
                      // 1) find nodes with data
                      osmNodes = response.children[0].getElementsByTagName('node');
                      if (osmNodes) {
                        infoNodes = {};
                        for (nodeIdx in osmNodes) {
                          if (osmNodes.hasOwnProperty(nodeIdx) && osmNodes[nodeIdx] && osmNodes[nodeIdx].children && osmNodes[nodeIdx].children.length > 0) {
                            infoNodes[osmNodes[nodeIdx].getAttribute('id')] = osmNodes[nodeIdx];
                            // infoNodes[osmNodes[nodeIdx].getAttribute('id')] = nodeIdx;
                          }
                        }
                      }

                      // 2) check and handle relations
                      osmNds = response.children[0].getElementsByTagName('nd');
                      if (osmNds) {
                        for (ndIdx in osmNds) {
                          if (ndIdx) {
                            if (osmNds.hasOwnProperty(ndIdx) && osmNds[ndIdx]) {
                              try {

                                ref = osmNds[ndIdx].getAttribute('ref');
                                if (infoNodes && ref && infoNodes[ref]) {
                                  if (requestContentData && requestContentData.settings) {
                                    if (requestContentData.settings.showAdditionalGeometries) {
                                      // mark as additional information
                                      if (response) {
                                        newTag = response.createElement('tag');
                                        if (newTag && osmNds[ndIdx].parentElement && osmNds[ndIdx].parentElement.getAttribute('id')) {
                                          newTag.setAttribute('k', 'c4g_osm_ref');
                                          newTag.setAttribute('v', osmNds[ndIdx].parentElement.getAttribute('id'));
                                          infoNodes[ref].appendChild(newTag);
                                        }
                                      }
                                    } else {
                                      // remove additional information
                                      infoNodes[ref].innerHTML = '';
                                    }
                                  }
                                }
                              } catch (e) {
                                console.warn('Could not check and handle relations.');
                              }
                            }
                          }
                        }
                      }
                      // import osm_xml
                      format = new ol.format.OSMXML();
                      if (format && response) {
                        try {
                          rFeatures = format.readFeatures(response, { featureProjection: projection });
                        } catch (e) {
                          console.warn('Can not read feature.');
                          //console.log(e.stack);
                        }
                      }

                      // postprocessing features
                      if (rFeatures && rFeatures.length > 0) {
                        for (j = 0; j < rFeatures.length; j += 1) {

                          if (rFeatures[j].getGeometry().getType() === "Point") {
                            rFeatures[j].set('osm_type', 'node');
                          } else {
                            rFeatures[j].set('osm_type', 'way');
                          }
                          rFeatures[j].set('c4g_type', 'osm');
                          rFeatures[j].set('cluster_zoom', contentData.cluster_zoom);
                          rFeatures[j].set('cluster_popup', contentData.cluster_popup);
                          rFeatures[j].set('loc_linkurl', contentData.loc_linkurl);
                          rFeatures[j].set('hover_location', contentData.hover_location);
                          rFeatures[j].set('hover_style', contentData.hover_style);
                          rFeatures[j].set('zoom_onclick', contentData.data.zoom_onclick);
                          rFeatures[j].set('label', contentData.data.label);

                          if (requestContentData.settings.forceNodes) {
                            // convert tracks and areas to points
                            if (rFeatures[j].getGeometry().getType() === "Polygon") {
                              var centerPoint = rFeatures[j].getGeometry().getInteriorPoint().getCoordinates();
                              rFeatures[j].setGeometry(new ol.geom.Point([centerPoint[0], centerPoint[1]]));
                            } else if (rFeatures[j].getGeometry().getType() === "LineString") {
                              // @TODO: prüfen ob dies korrekter Mittelpunkt ist
                              var lineExtent = rFeatures[j].getGeometry().getExtent();
                              var _centerPoint = ol.extent.getCenter(lineExtent);
                              rFeatures[j].setGeometry(new ol.geom.Point(_centerPoint));
                            }
                          }
                        }
                      }
                    } else if (response && response.elements) {
                      rFeatures = [];
                      for (var elementId = 0; elementId < response.elements.length; elementId++) {
                        var element = response.elements[elementId];
                        if (element.type === "node" && !element.tags) {
                          continue;
                        }
                        var tempFeature = self.featureFromOverpass(element, response.elements, contentData, requestContentData.settings.forceNodes);
                        if (tempFeature) {
                          rFeatures.push(tempFeature);
                        }
                      }
                    }
                    try {
                      requestVectorSource.addFeatures(rFeatures);
                    } catch (e) {
                      console.warn('Could not add features to source. The "forceNodes"-option should be used.');
                    }
                    //self.combineLayers(self);
                  }); // end of AJAX
                },
                strategy: ol.loadingstrategy.bbox,
                projection: 'EPSG:3857'
              });

              vectorSource = requestVectorSource;
            } else {

              if (typeof ol.format[contentData.format] === "function") {

                //StaticVector
                vectorSource = new ol.source.Vector({
                  format: new ol.format[contentData.format](),
                  url: requestData.url,
                  projection: 'EPSG:3857',
                  strategy: ol.loadingstrategy.all
                });

                if (contentData.settings && contentData.settings.refresh === true) {
                  if (self.layerRequests === undefined) {
                    self.layerRequests = {};
                  }

                  refreshInterval = typeof contentData.settings.interval === 'number' ? contentData.settings.interval : 10000;
                  /* do it with better ajax-handling
                   self.layerRequests['layerRequest' + itemUid] = window.setInterval(function () {
                   vectorSource.clear();
                   }, refreshInterval);
                   */

                  // Anfang Einschub neue AJAX-Layer
                  refreshAjaxVars.blnHasPositionIds = false;
                  refreshAjaxVars.arrPositionIds = [];
                  refreshAjaxVars.objFeatures = {};

                  vectorSource.set('refreshInterval', refreshInterval);

                  vectorSource.set('refreshFunction', function () {

                    if (!vectorSource.get('hasIds')) {
                      vectorSource.forEachFeature(function (feature) {
                        if (feature.get('positionId')) {
                          refreshAjaxVars.blnHasPositionIds = true;
                          refreshAjaxVars.arrPositionIds.push(feature.get('positionId'));
                          refreshAjaxVars.objFeatures[feature.get('positionId')] = feature;
                        }
                      });
                      if (refreshAjaxVars.blnHasPositionIds) {
                        vectorSource.set('hasIds', true);
                      }
                    }

                    jQuery.ajax({
                      url: requestData.url,
                      done: function done(data) {

                        if (data.renewableResponse) {
                          // update of stations
                          jQuery.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type === "Feature") {
                              var feature = new ol.format[contentData.format]().readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              var layer = self.arrLayers[featureData.properties.id];
                              var popupContent = featureData.properties.popup;
                              layer.vectorLayer.getLayers().forEach(function (element, index, array) {
                                if (!self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId]) {
                                  self.proxy.locationStyleController.loadLocationStyles([featureData.properties.styleId], { done: function done() {
                                      element.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                    } });
                                } else {
                                  element.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                }
                                element.getSource().forEachFeature(function (nestedFeature) {
                                  nestedFeature.set('popup', popupContent);
                                });
                              });
                              layer.content[0].locationStyle = featureData.properties.styleId;

                              if (!self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId]) {
                                self.proxy.locationStyleController.loadLocationStyles([featureData.properties.styleId], { done: function done() {
                                    feature.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                  } });
                              } else {
                                feature.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                              }

                              if (self.proxy.activeLayerIds[layer.id]) {
                                self.hideLayer(layer.id);
                                self.showLayer(layer.id);
                              }
                              // vectorSource.addFeature(feature);
                            }
                          });
                        }

                        if (data.features) {

                          refreshAjaxVars.arrNewPositionIds = [];
                          refreshAjaxVars.objNewFeatures = {};

                          jQuery.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type == "Feature") {
                              refreshAjaxVars.feature = new ol.format[contentData.format]().readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              refreshAjaxVars.feature.set('cluster_zoom', contentData.cluster_zoom);
                              refreshAjaxVars.feature.set('loc_linkurl', contentData.loc_linkurl);
                              refreshAjaxVars.feature.set('hover_location', contentData.hover_location);
                              refreshAjaxVars.feature.set('hover_style', contentData.hover_style);
                              if (refreshAjaxVars.feature.get('positionId')) {
                                refreshAjaxVars.arrNewPositionIds.push(refreshAjaxVars.feature.get('positionId'));
                                refreshAjaxVars.objNewFeatures[refreshAjaxVars.feature.get('positionId')] = refreshAjaxVars.feature;
                              }
                            }
                          });

                          jQuery.each(refreshAjaxVars.arrPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrNewPositionIds.indexOf(positionId) == -1) {
                              // positions id in neuer antwort nicht mehr enthalten -> lösche feature
                              if (typeof refreshAjaxVars.objFeatures[positionId] !== "undefined") {
                                vectorSource.removeFeature(refreshAjaxVars.objFeatures[positionId]);
                                delete refreshAjaxVars.arrPositionIds[index];
                              }
                            }
                          });

                          jQuery.each(refreshAjaxVars.arrNewPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrPositionIds.indexOf(positionId) == -1) {
                              // positions id ist noch nicht vorhanden -> neues feature
                              refreshAjaxVars.arrPositionIds.push(positionId);
                              refreshAjaxVars.objFeatures[positionId] = refreshAjaxVars.objNewFeatures[positionId];
                              vectorSource.addFeature(refreshAjaxVars.objNewFeatures[positionId]);
                            }
                          });
                        }
                      }
                    });
                  });

                  self.proxy.requestFunctions['request_' + itemUid] = {
                    'function': vectorSource.get('refreshFunction'),
                    'interval': refreshInterval
                  };

                  // Ende Einschub neue AJAX-Layer
                }
              } else {
                console.warn('Format type ' + contentData.format + ' in ol.format not found.');
              }
            }

            if (contentData.settings.cluster) {

              window.clusterSource = new ol.source.Cluster({
                distance: 40,
                //threshold: 2, //minimum element count
                source: vectorSource,
                zoom: contentData.cluster_zoom
              });
              //console.log(clusterSource);
              this.styleForCluster = styleForCluster;

              //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

              vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
                source: window.clusterSource,
                // Use a style function for cluster symbolisation
                style: styleForCluster
              });
            } else {
              if (self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].fnStyleFunction) {

                vectorStyle = Function("feature", "data", "map", self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].fnStyleFunction);
                vectorLayer = _c4gMapsUtils.utils.getVectorLayer(vectorSource, vectorStyle);
              } else {
                vectorLayer = _c4gMapsUtils.utils.getVectorLayer(vectorSource, self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null);
              }
            }

            /* Fit to extend */
            if (contentData.settings && contentData.settings.fitToExtend) {

              self.fittingExtends = self.fittingExtends || {};

              vectorSource.on('change', function () {

                // check currently stored id's
                for (i in self.fittingExtends) {
                  if (self.fittingExtends.hasOwnProperty(i)) {
                    if (typeof self.proxy.activeLayerIds[i] === "undefined" || self.proxy.activeLayerIds[0] == "invisible") {
                      delete self.fittingExtends[i];
                    }
                  }
                }

                self.fittingExtends[itemUid] = vectorSource.getExtent(); //vectorSource.getFeatures();
                _c4gMapsUtils.utils.fitToExtents(self.fittingExtends, self.mapController.map);
              });
            }
            // end of fit to extend

            fnAttachDataToLayer(vectorLayer, contentData.data);
            layers.push(vectorLayer);
          } else if (this.arrLayers[itemUid].type === "table" || this.arrLayers[itemUid].type === "link") {
            var layerContent = this.arrLayers[itemUid].content;
            contentData = layerContent[0];
            if (contentData && contentData.data.properties && contentData.data.properties.projection) {
              dataProjection = contentData.data.properties.projection;
              featureProjection = this.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            // force all nodes into one layer


            var contentFeature = new ol.format[layerContent[i].format]({}).readFeatures(layerContent[i].data, {
              featureProjection: featureProjection,
              dataProjection: dataProjection
            })[0];
            contentFeature.set('cluster_zoom', contentData.cluster_zoom);
            contentFeature.set('cluster_popup', contentData.cluster_popup);
            contentFeature.set('loc_linkurl', contentData.loc_linkurl);
            contentFeature.set('hover_location', contentData.hover_location);
            contentFeature.set('hover_style', contentData.hover_style);
            contentFeature.set('popup', layerContent[i].data.properties.popup);
            contentFeature.set('zoom_onclick', contentData.zoom_onclick);
            contentFeatures.push(contentFeature);

            if (i + 1 === this.arrLayers[itemUid].content.length) {
              vectorSource = new ol.source.Vector({
                features: contentFeatures,
                projection: 'EPSG:3857',
                format: new ol.format.GeoJSON()

              });
              if (contentData && contentData.settings && contentData.settings.cluster) {
                clusterSource = new ol.source.Cluster({
                  distance: 40,
                  zoom: contentData.cluster_zoom,

                  //threshold: 2, //minimum element count
                  source: vectorSource
                });
                //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

                vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
                  source: clusterSource,
                  // Use a style function for cluster symbolisation
                  style: styleForCluster
                });
              } else {
                vectorLayer = _c4gMapsUtils.utils.getVectorLayer(vectorSource, contentData && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null);
              }
              layers.push(vectorLayer);
            }
            //return;
          } else {
            if (this.arrLayers[itemUid].content.length > 1) {
              //TODO: refactoren und kürzen!
              // we have overpass request with reassigned forum layers
              // forum layers can not be drawn via the normal drawLayer, because they do not have a Uid
              if (contentData && typeof ol.format[contentData.format] === "function") {
                if (contentData.data.properties && contentData.data.properties.projection) {
                  dataProjection = contentData.data.properties.projection;
                  featureProjection = this.mapController.map.getView().getProjection();
                } else {
                  dataProjection = undefined;
                }

                features = new ol.format[contentData.format]({}).readFeatures(contentData.data, {
                  featureProjection: featureProjection,
                  dataProjection: dataProjection
                });

                var missingStyles = [];
                var unstyledFeatures = [];
                for (var j = 0; j < features.length; j += 1) {
                  if (features[j].get('styleId')) {
                    if (self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style) {
                      features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style);
                    } else {
                      missingStyles.push(features[j].get('styleId'));
                      unstyledFeatures.push(features[j]);
                    }
                  }
                }

                vectorStyle = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style;

                if (missingStyles.length > 0) {
                  //TODO there are unstyled features because some styles were not loaded
                } else {
                  vectorSource = new ol.source.Vector({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });
                  clusterSource = new ol.source.Cluster({
                    distance: 40,
                    zoom: contentData.cluster_zoom,

                    //threshold: 2, //minimum element count
                    source: vectorSource
                  });

                  vectorLayer = _c4gMapsUtils.utils.getVectorLayer(clusterSource, vectorStyle);
                  if (contentData.data && contentData.data.properties) {
                    if (contentData.data.properties.popup) {
                      vectorLayer.popup = contentData.data.properties.popup;
                    }
                    if (contentData.data.properties.tooltip) {
                      vectorLayer.tooltip = contentData.data.properties.tooltip;
                    }
                    if (contentData.data.properties.label) {
                      vectorLayer.label = contentData.data.properties.label;
                    }
                    if (contentData.data.properties.onclick_zoom) {
                      vectorLayer.onclick_zoom = contentData.data.properties.onclick_zoom;
                    }
                  }
                  layers.push(vectorLayer);
                }
              } else {
                if (contentData) {
                  console.warn('Format type ' + contentData.format + ' in ol.format not found.');
                } else {
                  //no contentData, maybe a link
                }
              }
            } else {
              // normal, not overpass layer
              self.drawLayer(itemUid);
              return;
            }
          }
        }
        // add vector layer group
        layerGroup = new ol.layer.Group({
          layers: layers
        });
        this.arrLayers[itemUid].vectorLayer = layerGroup;
        self.mapController.map.addLayer(layerGroup);
        //self.combine(self);
      } else if (this.arrLayers[itemUid].async_content == 1) {
        styleForCluster = function styleForCluster(feature, resolution) {
          var styleId, style, iconOffset, radius, fillcolor, fontcolor;
          if (feature && feature.get('features')) {
            if (styleId = feature.get('features')[0].get('locationStyle')) {
              if (self.proxy.locationStyleController.arrLocStyles[styleId] && self.proxy.locationStyleController.arrLocStyles[styleId].style) {
                style = self.proxy.locationStyleController.arrLocStyles[styleId].style(feature.get('features')[0], resolution);
              }
            }
            if (!style) {
              style = [];
            }
            if (feature.get('features').length > 1) {
              // calculate bubble-offset
              iconOffset = [0, 0];
              if (style[0]) {
                if (typeof style[0].getImage().getRadius === "function") {
                  radius = parseInt(style[0].getImage().getRadius(), 10);
                  if (radius) {
                    iconOffset = [0, radius];
                  }
                } else if (typeof style[0].getImage().getAnchor === "function") {
                  iconOffset = style[0].getImage().getAnchor() || [0, 0];
                }
              }

              fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity('4975A8', {
                unit: '%',
                value: 70
              });

              if (contentData.cluster_fillcolor) {
                fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                  unit: '%',
                  value: 70
                });
              }
              if (feature.get('features')[0].get('cluster_fillcolor')) {
                fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fillcolor'), {
                  unit: '%',
                  value: 70
                });
              }
              fontcolor = '#FFFFFF';
              if (feature.get('features')[0].get('cluster_fontcolor')) {
                fontcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fontcolor'), {
                  unit: '%',
                  value: 100
                });
              }

              style.push(new ol.style.Style({
                text: new ol.style.Text({
                  text: "●",
                  font: "60px sans-serif",
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1],
                  fill: new ol.style.Fill({
                    color: fillcolor
                  })
                })
              }));
              style.push(new ol.style.Style({
                text: new ol.style.Text({
                  text: feature.get('features').length.toString(),
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1] + 3,
                  fill: new ol.style.Fill({
                    color: fontcolor
                  })
                })
              }));
            }
          }

          if (style) {
            return style;
          }
        };
        requestVectorSource = new ol.source.Vector({
          loader: function loader(extent, resolution, projection) {
            var boundingArray, strBoundingBox, url;
            self.mapController.spinner.show();
            boundingArray = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            strBoundingBox = boundingArray[0] + ',' + boundingArray[1] + ';' + boundingArray[2] + ',' + boundingArray[3];
            if (self.layerRequests === undefined) {
              self.layerRequests = {};
            }
            if (self.layerRequests['layerDataRequest' + itemUid] !== undefined) {
              self.layerRequests['layerDataRequest' + itemUid].abort();
            }
            if (!self.proxy.locationStyleController.arrLocStyles[self.arrLayers[itemUid].locstyle]) {
              self.proxy.locationStyleController.loadLocationStyles([self.arrLayers[itemUid].locstyle], { done: function done() {} });
            }

            self.layerRequests['layerDataRequest' + itemUid] = jQuery.ajax({
              url: self.proxy.api_layercontentdata_url + '/' + self.arrLayers[itemUid].id + '/' + strBoundingBox
            }).done(function (data) {
              if (data.length > 0 && !contentFeatures) {
                contentFeatures = [];
              }
              var layer = self.arrLayers[itemUid];
              loopData: for (var _i = 0; _i < data.length; _i++) {
                contentData = data[_i];
                for (var _j = 0; _j < contentFeatures.length; _j++) {
                  if (contentData.id === contentFeatures[_j].id) continue loopData;
                }
                var resultCoordinate = ol.proj.transform([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857');
                var point = new ol.geom.Point(resultCoordinate);
                contentFeature = new ol.Feature(point);
                contentFeature.setId(contentData.id);
                if (layer.cluster) {
                  contentFeature.set('cluster_zoom', layer.cluster.zoom);
                  contentFeature.set('cluster_popup', layer.cluster.popup);
                  contentFeature.set('cluster_fillcolor', layer.cluster.fillcolor);
                  contentFeature.set('cluster_fontcolor', layer.cluster.fontcolor);
                }

                contentFeature.set('loc_linkurl', layer.loc_linkurl);
                contentFeature.set('hover_location', layer.hover_location);
                contentFeature.set('hover_style', layer.hover_style);
                var popup = contentData['popup'] ? contentData['popup'] : $.extend({}, layer.popup);
                if (popup && popup.content && popup.content.search && popup.content.search('itemId')) {
                  popup.content = popup.content.replace('itemId', contentData['id']);
                }
                if (contentData['label']) {
                  contentFeature.set('label', contentData['label']);
                }
                if (contentData['tooltip']) {
                  contentFeature.set('tooltip', contentData['tooltip']);
                }
                contentFeature.set('popup', popup);
                contentFeature.set('zoom_onclick', layer.zoom_onclick);
                contentFeature.set('tid', contentData['id']);
                var locstyle = contentData['locstyle'] || layer.locstyle;
                contentFeature.set('locationStyle', locstyle);
                if (locstyle && self.proxy.locationStyleController.arrLocStyles[locstyle] && self.proxy.locationStyleController.arrLocStyles[locstyle].style) {
                  contentFeature.setStyle(self.proxy.locationStyleController.arrLocStyles[locstyle].style);
                  contentFeatures.push(contentFeature);
                } else {
                  if (!unstyledFeatures) {
                    unstyledFeatures = [];
                  }
                  if (!missingStyles) {
                    missingStyles = [];
                  }
                  contentFeature.set('styleId', locstyle);
                  unstyledFeatures.push(contentFeature);
                  missingStyles[locstyle] = locstyle;
                }
              }
              if (missingStyles) {
                self.proxy.locationStyleController.loadLocationStyles(missingStyles, { done: function done() {
                    for (i = 0; i < unstyledFeatures.length; i++) {
                      var styleId = unstyledFeatures[i].get('styleId');
                      unstyledFeatures[i].setStyle(self.proxy.locationStyleController.arrLocStyles[styleId].style);
                      requestVectorSource.addFeature(unstyledFeatures[i]);
                    }
                    missingStyles = undefined;
                  } });
              }

              if (data.length > 0) {
                requestVectorSource.addFeatures(contentFeatures);
              }
            }).always(function () {
              self.mapController.spinner.hide();
            });
          },
          strategy: ol.loadingstrategy.bbox
        });

        if (this.arrLayers[itemUid].cluster) {
          var layer = self.arrLayers[itemUid];
          var map = self.mapController.map;
          var currentZoom = map.getView().getZoom();
          var clusterDistance = this.arrLayers[itemUid].cluster.distance || 20;
          if (currentZoom >= layer.cluster.zoom) {
            clusterDistance = 0;
          }

          clusterSource = new ol.source.Cluster({
            distance: clusterDistance,
            //threshold: 2, //minimum element count
            source: requestVectorSource
          });
          vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
            source: clusterSource,
            // Use a style function for cluster symbolisation
            style: styleForCluster
          });
        } else {
          vectorLayer = new ol.layer.Vector({
            name: 'Layer',
            source: requestVectorSource
          });
        }
        layers = layers || [];
        layers.push(vectorLayer);
        layerGroup = new ol.layer.Group({
          layers: layers
        });
        this.arrLayers[itemUid].vectorLayer = layerGroup;
        self.mapController.map.addLayer(layerGroup);
      } else {
        self.mapController.spinner.show();
        jQuery.ajax({
          dataType: self.mapController.data.jsonp ? "jsonp" : "json",
          url: self.proxy.api_layercontent_url + '/' + self.arrLayers[itemUid].id
        }).done(function (data) {
          var j = void 0,
              newLocationStyles = void 0;

          if (data.length > 0) {
            newLocationStyles = [];

            for (j = 0; j < data.length; j += 1) {

              self.arrLayers[itemUid].content = self.arrLayers[itemUid].content || [];

              self.arrLayers[itemUid].content.push(data[j]);
              newLocationStyles.push(data[j].locationStyle);
            }

            self.proxy.checkLocationStyles({
              done: function done() {
                // @TODO: check this!
                self.loadLayerContent(itemUid);
              }
            });
          }
        }).always(function () {
          self.mapController.spinner.hide();
        });
      }
    } // end of "loadLayerContent()"

  }, {
    key: "featureFromOverpass",
    value: function featureFromOverpass(element, elements, contentData, forceNodes) {
      var _this = this;

      var feature = null;
      if (element.type == "node") {
        if (element.tags) {
          var point = new ol.geom.Point([element.lon, element.lat]).transform('EPSG:4326', 'EPSG:3857');
          feature = new ol.Feature({
            geometry: point
          });
          feature.setId(element.id);
          feature.set('osm_type', 'node');
        }
      } else if (element.type == "way") {
        if (element.tags) {
          feature = new ol.Feature(this.geomFromWay(element, elements, forceNodes));
        } else {
          var geom = this.geomFromWay(element, elements, forceNodes);
          feature = new ol.Feature(geom);
        }
      } else if (element.type === "relation") {
        var multiPolygon = null;
        var multiLineString = null;
        var arrCoords = null;
        var _point = null;

        var _loop = function _loop(i) {
          if (element.members[i].role === "outer") {
            //@ToDo add handling for outer border
            return "continue";
          }
          var member = elements.find(function (objMemb) {
            return objMemb.id === element.members[i].ref;
          });
          if (member) {
            var _geom = void 0;
            if (member.type === 'node') {
              _geom = new ol.geom.Point([member.lon, member.lat]).transform('EPSG:4326', 'EPSG:3857');
            } else {
              _geom = _this.geomFromWay(member, elements, true);
            }
            if (_geom instanceof ol.geom.Point) {
              if (!arrCoords) {
                arrCoords = [];
              }
              arrCoords.push(_geom.getCoordinates());
            } else if (_geom instanceof ol.geom.Polygon) {
              if (multiPolygon) {
                multiPolygon.appendPolygon(_geom);
              } else {
                multiPolygon = new ol.geom.MultiPolygon(_geom.getCoordinates());
              }
            } else if (_geom instanceof ol.geom.LineString) {
              if (multiLineString) {
                multiLineString.appendLineString(_geom);
              } else {
                multiLineString = new ol.geom.LineString(_geom.getCoordinates());
              }
            }
          }
        };

        for (var i = 0; i < element.members.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
        }
        if (arrCoords) {
          var extent = ol.extent.boundingExtent(arrCoords);
          _point = new ol.geom.Point(ol.extent.getCenter(extent));
        }
        if (_point || multiPolygon || multiLineString) {
          feature = new ol.Feature(_point ? _point : multiLineString ? multiLineString : multiPolygon);
        }
      }
      if (feature) {
        feature.set('c4g_type', 'osm');
        feature.set('cluster_zoom', contentData.cluster_zoom || '');
        feature.set('cluster_popup', contentData.cluster_popup || '');
        feature.set('loc_linkurl', contentData.loc_linkurl || '');
        feature.set('hover_location', contentData.hover_location || '');
        feature.set('hover_style', contentData.hover_style || '');
        feature.set('tid', element.id);
        if (contentData.data) {
          feature.set('zoom_onclick', contentData.data.zoom_onclick || '');
          feature.set('label', contentData.data.label || '');
        }

        for (var tags in element.tags) {
          feature.set(tags, element.tags[tags]);
        }
        return feature;
      }
    }
  }, {
    key: "geomFromWay",
    value: function geomFromWay(element, elements, forceNodes) {
      var arrCoords = [];

      var _loop2 = function _loop2(i) {
        var node = elements.find(function (objNode) {
          return objNode.id === element.nodes[i];
        });
        if (node) {
          arrCoords.push(ol.proj.transform([node.lon, node.lat], 'EPSG:4326', 'EPSG:3857'));
        }
      };

      for (var i = 0; i < element.nodes.length; i++) {
        _loop2(i);
      }
      if (arrCoords && arrCoords[0] && arrCoords[0][0] == arrCoords[arrCoords.length - 1][0] && arrCoords[0][1] == arrCoords[arrCoords.length - 1][1]) {
        //polygon
        delete arrCoords[arrCoords.length - 1];
        arrCoords.length = arrCoords.length - 1;
        var polygon = new ol.geom.Polygon([arrCoords]);
        // polygon.transform('EPSG:4326','EPSG:3857');
        if (forceNodes) {
          // convert tracks and areas to points
          var tempPoint = polygon.getInteriorPoint();
          var tempCoords = tempPoint.getCoordinates();
          return new ol.geom.Point([tempCoords[0], tempCoords[1]]);
        } else {
          return polygon;
        }
      } else {
        //linestring
        var lineString = new ol.geom.LineString(arrCoords);
        if (forceNodes) {
          if (arrCoords.length > 0) {
            var lineExtent = ol.extent.boundingExtent(arrCoords);
            var lineCenter = ol.extent.getCenter(lineExtent);
            return new ol.geom.Point([lineCenter[0], lineCenter[1]]);
          }
        } else {
          return lineString;
        }
      }
    }
  }, {
    key: "hideLayer",
    value: function hideLayer(layerUid, keepLayer) {

      var layer, i, j;

      layer = this.arrLayers[layerUid];
      if (!layer) {
        //console.warn('Cannot hide unknown layer (' + layerUid + ')');
        return false;
      }

      // check if layer is listed as "active"
      // otherwise there is nothing to remove or change
      if (this.proxy.activeLayerIds[layerUid]) {
        // remove layer from map (if it was visible before)
        if (this.proxy.activeLayerIds[layerUid] === 'visible' && layer.vectorLayer) {
          // [info]: do not use "layer.vectorLayer.setVisible(false);"
          //         see "showLayer()" for more information
          this.mapController.map.removeLayer(layer.vectorLayer);
        }
        // only mark as "invisible" if "keepLayer" is "true"
        // this is needed for the zoom-bounds
        if (keepLayer) {
          this.proxy.activeLayerIds[layerUid] = 'invisible';
        } else {
          delete this.proxy.activeLayerIds[layerUid];
        }
      }

      // childs needed to be checked independent from its parents state


      //ToDo loading problem
      if (layer && layer.hasChilds) {
        for (i = 0; i < layer.childs.length; i += 1) {
          this.hideLayer(layer.childs[i].id);
        }
      }
      if (layer.isInactive) {
        _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
        return;
      }
      layer.isInactive = true;

      if (this.layerRequests && typeof this.layerRequests['layer_request_' + layerUid] !== "undefined") {
        if (typeof this.layerRequests['layer_request_' + layerUid] == "number") {
          try {
            window.clearInterval(this.layerRequests['layer_request_' + layerUid]);
            delete this.layerRequests['layer_request_' + layerUid];
          } catch (e) {}
        }
      }
      //this.combineLayers(this);
      this.mapController.map.getView().setCenter([this.mapController.map.getView().getCenter()[0] + 0.001, this.mapController.map.getView().getCenter()[1]]);
      // hooks
      _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
    } // end of "hideLayer()"

  }, {
    key: "hideChildLayer",
    value: function hideChildLayer(layerUid, childUid) {
      var layer = this.arrLayers[layerUid];
      childUid = childUid.replace(layerUid, '');
      var childLayer = layer.vectorLayer.getLayers().getArray()[childUid];
      childLayer.set('visible', false);
    }
  }, {
    key: "showChildLayer",
    value: function showChildLayer(layerUid, childUid) {
      var layer = this.arrLayers[layerUid];
      childUid = childUid.replace(layerUid, '');
      var childLayer = layer.vectorLayer.getLayers().getArray()[childUid];
      childLayer.set('visible', true);
    }
  }, {
    key: "showLayer",
    value: function showLayer(layerUid) {
      var layer, mapLayers, addLayer, i, j, activeForZoom;

      activeForZoom = this.proxy.checkLayerIsActiveForZoom(layerUid);
      layer = this.arrLayers[layerUid];

      if (activeForZoom) {
        if (this.proxy.activeLayerIds[layerUid] !== 'visible') {
          //if (layer.link_id) {
          //  this.proxy.activeLayerIds[layer.link_id] = 'visible';
          //} else
          if (layer && layer.vectorLayer) {
            // [info]: do not use: "layer.vectorLayer.setVisible(true);"
            //         Always add and remove Layers, so that the last
            //         clicked layer is always ontop of the others.

            // check if layer is really not already on the map
            // to prevent adding the same layer multiple times
            addLayer = true;
            mapLayers = this.mapController.map.getLayers();
            mapLayers.forEach(function (element, index, array) {
              if (element === layer.vectorLayer) {
                addLayer = false;
              }
            });
            if (addLayer) {
              if (layer.vectorLayer.getLayers().getArray()[0] && layer.vectorLayer.getLayers().getArray()[0].popup && layer.vectorLayer.getLayers().getArray()[0].popup.showPopupOnActive) {

                this.proxy.currentPopup.$content.html('');
                this.proxy.currentPopup.$popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
                this.proxy.currentPopup.spinner.show();
                var popupInfos = layer.vectorLayer.getLayers().getArray()[0].popup;
                var features = layer.vectorLayer.getLayers().getArray()[0].getSource().getFeatures();
                var coord = features['0'].getGeometry().getCoordinates();
                if (popupInfos.async === false) {
                  var objPopup = {};
                  objPopup.popup = popupInfos;
                  objPopup.feature = features['0'];
                  objPopup.layer = layer.vectorLayer.getLayers().getArray()[0];
                  // Call the popup hook for plugin specific popup content
                  if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                  }
                  this.proxy.setPopup(objPopup);
                } else {
                  var self = this;
                  jQuery.ajax({
                    dataType: "json",
                    url: self.api_infowindow_url + '/' + popupInfos.content,
                    done: function done(data) {
                      var popupInfo = {
                        async: popupInfos.async,
                        content: data.content,
                        popup: popupInfos.popup,
                        routing_link: popupInfos.routing_link
                      };

                      var objPopup = {};
                      objPopup.popup = popupInfo;
                      objPopup.feature = features['0'];
                      objPopup.layer = layer;

                      // Call the popup hook for plugin specific popup content
                      if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                      }

                      self.proxy.setPopup(objPopup);
                    }
                  });
                }
              }
              this.mapController.map.addLayer(layer.vectorLayer);
            }
          } else {
            this.loadLayerContent(layerUid);
          }
          this.proxy.activeLayerIds[layerUid] = 'visible';
        } else {
          //if (layer.link_id) {
          //  this.proxy.activeLayerIds[layer.link_id] = 'invisible';
          //} else {
          //this.proxy.activeLayerIds[layerUid] = 'invisible';
          //}
        }
      }

      if (layer && layer.hasChilds && activeForZoom) {
        for (i = 0; i < layer.childs.length; i += 1) {
          this.showLayer(layer.childs[i].id);
        }
      }

      if (layer && activeForZoom) {
        layer.isInactive = false;
      }

      if (typeof this.proxy.requestFunctions['request_' + layerUid] !== "undefined") {

        if (this.layerRequests && typeof this.layerRequests['layer_request_' + layerUid] === "undefined") {
          this.layerRequests['layer_request_' + layerUid] = window.setInterval(this.proxy.requestFunctions['request_' + layerUid].function, this.proxy.requestFunctions['request_' + layerUid].interval);
        }
      }
      //this.combineLayers(this);
      // hooks
      _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
    } // end of "showLayer()"

  }, {
    key: "drawLayer",
    value: function drawLayer(itemUid) {

      var self, element, elementContent, layers, i, j, missingStyles, unstyledFeatures, features, dataProjection, featureProjection, vectorSource, vectorLayer, vectorStyle, layerGroup;

      self = this;
      element = this.arrLayers[itemUid];

      // if (!element.hide) {

      layers = [];
      if (element.content && element.content.length > 0) {
        for (i = 0; i < element.content.length; i += 1) {

          elementContent = element.content[i];
          if (!elementContent) {
            continue;
          }
          if (typeof ol.format[elementContent.format] === "function") {

            // if (element.content[i].origType === 'single') {
            //   featureProjection = this.mapController.map.getView().getProjection();
            // } else {
            //   featureProjection = undefined;
            // }
            if (elementContent.data.properties && elementContent.data.properties.projection) {
              dataProjection = elementContent.data.properties.projection;
              featureProjection = this.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            if (elementContent.format === "OSMXML") {
              continue;
            }
            if (elementContent.data.geometry && elementContent.data.geometry.type === "Circle") {
              // draw circle geometries
              features = [];
              var feature = new ol.Feature(new ol.geom.Circle(ol.proj.fromLonLat(elementContent.data.geometry.center), parseFloat(elementContent.data.geometry.radius)));
              feature.set('styleId', elementContent.locationStyle);
              features.push(feature);
            } else {
              // remaining geometries
              features = new ol.format[elementContent.format]({}).readFeatures(elementContent.data, {
                featureProjection: featureProjection,
                dataProjection: dataProjection
              });
            }

            missingStyles = [];
            unstyledFeatures = [];
            for (j = 0; j < features.length; j += 1) {
              // features[j].setId(utils.getUniqueId());
              // features[j].set('projection', this.mapController.map.getView().getProjection());
              // features[j].set('projection', "EPSG:4326");
              features[j].set('hover_location', elementContent.hover_location);
              features[j].set('hover_style', elementContent.hover_style);
              if (features[j].get('styleId')) {
                if (self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style) {
                  features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style);
                } else {
                  missingStyles.push(features[j].get('styleId'));
                  unstyledFeatures.push(features[j]);
                }
              } else if (elementContent.locationStyle) {
                // feature has no property styleId, but elementContent has locationstyle
                if (self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style) {
                  //features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style);
                } else {
                  missingStyles.push(elementContent.locationStyle);
                  unstyledFeatures.push(features[j]);
                  features[j].set('styleId', elementContent.locationStyle);
                }
              }
            }

            vectorStyle = self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style;
            if (self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].fnStyleFunction) {

              vectorStyle = Function("feature", "data", "map", self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].fnStyleFunction);
            }
            if (missingStyles.length > 0) {
              this.proxy.locationStyleController.loadLocationStyles(missingStyles, {
                done: function done() {
                  var f, fLayerGroup, fLayers, fVectorLayer, fVectorSource;
                  for (f = 0; f < unstyledFeatures.length; f += 1) {
                    if (self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')]) {
                      unstyledFeatures[f].setStyle(self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')].style);
                    }
                  }

                  fVectorSource = new ol.source.Vector({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });

                  fVectorLayer = _c4gMapsUtils.utils.getVectorLayer(fVectorSource, vectorStyle);

                  // layers.push(vectorLayer);
                  if (self.arrLayers[itemUid].fVectorLayer) {
                    fLayerGroup = self.arrLayers[itemUid].vectorLayer;
                    fLayers = fLayerGroup.getLayers();

                    if (elementContent.data && elementContent.data.properties) {
                      if (elementContent.data.properties.popup) {
                        fVectorLayer.popup = elementContent.data.properties.popup;
                      }
                      if (elementContent.data.properties.tooltip) {
                        fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                      }
                      if (elementContent.data.properties.label) {
                        fVectorLayer.label = elementContent.data.properties.label;
                      }
                      if (elementContent.data.properties.zoom_onclick) {
                        fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                      }
                    }

                    fLayers.push(fVectorLayer);
                    fLayerGroup.setLayers(fLayers);
                  } else {
                    if (elementContent.data && elementContent.data.properties) {
                      if (elementContent.data.properties.popup) {
                        fVectorLayer.popup = elementContent.data.properties.popup;
                      }
                      if (elementContent.data.properties.tooltip) {
                        fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                      }
                      if (elementContent.data.properties.label) {
                        fVectorLayer.label = elementContent.data.properties.label;
                      }
                      if (elementContent.data.properties.zoom_onclick) {
                        fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                      }
                    }
                    fLayerGroup = new ol.layer.Group({
                      layers: [fVectorLayer]
                    });
                    self.arrLayers[itemUid].vectorLayer = fLayerGroup;
                    self.mapController.map.addLayer(fLayerGroup);
                  }
                }
              });
            } else {
              if (element.split_geojson) {
                for (var _i2 = 0; _i2 < features.length; _i2++) {
                  vectorSource = new ol.source.Vector({
                    projection: 'EPSG:3857',
                    format: new ol.format.GeoJSON()
                  });
                  vectorSource.addFeature(features[_i2]);
                  vectorLayer = _c4gMapsUtils.utils.getVectorLayer(vectorSource, vectorStyle);
                  for (var _j2 = 0; _j2 < element.geojson_attributes.split(',').length; _j2++) {
                    vectorLayer.set(element.geojson_attributes.split(',')[_j2], features[_i2].get(element.geojson_attributes.split(',')[_j2]));
                  }
                  layers.push(vectorLayer);
                  if (elementContent.data.properties.popup) {
                    vectorLayer.popup = elementContent.data.properties.popup;
                  }
                  if (elementContent.data.properties.tooltip) {
                    vectorLayer.tooltip = elementContent.data.properties.tooltip;
                  }
                  if (elementContent.data.properties.label) {
                    vectorLayer.label = elementContent.data.properties.label;
                  }
                  if (elementContent.data.properties.zoom_onclick) {
                    vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                  }
                }
              } else {
                vectorSource = new ol.source.Vector({
                  features: features,
                  projection: 'EPSG:3857',
                  format: new ol.format.GeoJSON()
                });
                vectorLayer = _c4gMapsUtils.utils.getVectorLayer(vectorSource, vectorStyle);

                if (elementContent.data && elementContent.data.properties) {
                  if (elementContent.data.properties.popup) {
                    vectorLayer.popup = elementContent.data.properties.popup;
                  }
                  if (elementContent.data.properties.tooltip) {
                    vectorLayer.tooltip = elementContent.data.properties.tooltip;
                  }
                  if (elementContent.data.properties.label) {
                    vectorLayer.label = elementContent.data.properties.label;
                  }
                  if (elementContent.data.properties.zoom_onclick) {
                    vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                  }
                }

                layers.push(vectorLayer);
              }
            }
          } else {
            console.warn('Format type ' + elementContent.format + ' in ol.format not found.');
          }
        }
      }

      layerGroup = new ol.layer.Group({
        layers: layers
      });

      this.arrLayers[itemUid].vectorLayer = layerGroup;
      this.mapController.map.addLayer(layerGroup);
      if (layerGroup.getLayers().getArray()[0] && layerGroup.getLayers().getArray()[0].popup && layerGroup.getLayers().getArray()[0].popup.showPopupOnActive) {
        this.proxy.currentPopup.$content.html('');
        this.proxy.currentPopup.$popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
        this.proxy.currentPopup.spinner.show();
        var popupInfos = layerGroup.getLayers().getArray()[0].popup;
        var layer = layerGroup.getLayers().getArray()[0];
        var coord = features['0'].getGeometry().getCoordinates();
        if (popupInfos.async === false) {
          var objPopup = {};
          objPopup.popup = popupInfos;
          objPopup.feature = features['0'];
          objPopup.layer = layer;
          // Call the popup hook for plugin specific popup content
          if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
            _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
          }
          self.proxy.setPopup(objPopup);
        } else {
          jQuery.ajax({
            dataType: "json",
            url: self.api_infowindow_url + '/' + popupInfos.content,
            done: function done(data) {
              var popupInfo = {
                async: popupInfos.async,
                content: data.content,
                popup: popupInfos.popup,
                routing_link: popupInfos.routing_link
              };

              var objPopup = {};
              objPopup.popup = popupInfo;
              objPopup.feature = features['0'];
              objPopup.layer = layer;

              // Call the popup hook for plugin specific popup content
              if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
              }

              self.proxy.setPopup(objPopup);
            }
          });
        }
      }

      //hooks
      // }
    } // end of "drawLayer()"

  }, {
    key: "drawLayerInitial",
    value: function drawLayerInitial() {
      var layerId, layer;

      for (layerId in this.proxy.activeLayerIds) {
        if (this.proxy.activeLayerIds.hasOwnProperty(layerId)) {
          this.showLayer(layerId);
        }
      }
      for (var l in this.arrLayers) {
        if (this.arrLayers.hasOwnProperty(l)) {
          layer = this.arrLayers[l];
          if (layer.hide === "1") {
            this.hideLayer(layer.id);
          }
        }
      }
    } // end of "drawLayerInitial()"

  }]);

  return C4gLayerController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-layer.js":
/*!******************************************!*\
  !*** ./Resources/public/js/c4g-layer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLayer = exports.C4gLayer = function C4gLayer(layerArr) {
  _classCallCheck(this, C4gLayer);

  this.id = layerArr['id'];
  this.pid = layerArr['pid'];
  this.async_content = layerArr['async_content'];
  this.content = layerArr['content'];
  this.cssClass = layerArr['cssClass'];
  this.hide = layerArr['hide'];
  this.hide_child = layerArr['hide_child'];
  this.type = layerArr['type'];
  this.cluster = layerArr['cluster'];
  this.zoom = layerArr['zoom'];
  this.zoom_locations = layerArr['zoom_locations'];
  this.display = layerArr['display'];
  this.hasChilds = layerArr['hasChilds'];
  this.childs = layerArr['childs'];
  this.childsCount = layerArr['childsCount'];
  this.renderSpecial = layerArr['renderSpecial'];
  this.editable = true;
  this.type = layerArr['type'];
  this.locstyle = layerArr['locstyle'];
  this.name = layerArr['name'];
  this.tabId = layerArr['tabId'];
  this.split_geojson = layerArr['split_geojson'];
  this.geojson_attributes = layerArr['geojson_attributes'];
  this.geojson_zoom = layerArr['geojson_zoom'];
  this.layername = layerArr['layername'];
  this.visibleChilds = false;
  this.vectorLayer = null;
  this.hideWhenInTab = layerArr['hide_when_in_tab'];
  this.noFilter = layerArr['noFilter'];

  if (layerArr.projectId) {
    this.projectId = layerArr.projectId;
  }
  if (layerArr.popup) {
    this.popup = layerArr.popup;
  }
  this.awesomeicon = layerArr['awesomeicon'];
};

/***/ }),

/***/ "./Resources/public/js/c4g-locationstyle-controller.js":
/*!*************************************************************!*\
  !*** ./Resources/public/js/c4g-locationstyle-controller.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.C4gLocationStyleController = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gLocationstyle = __webpack_require__(/*! ./c4g-locationstyle */ "./Resources/public/js/c4g-locationstyle.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLocationStyleController = exports.C4gLocationStyleController = function () {
    function C4gLocationStyleController(proxy) {
        _classCallCheck(this, C4gLocationStyleController);

        this.proxy = proxy;
        this.mapController = proxy.options.mapController;
        this.arrLocStyles = {};
    }

    _createClass(C4gLocationStyleController, [{
        key: "loadLocationStyles",
        value: function loadLocationStyles(arrIds, opt_options) {
            var options = void 0,
                complete = {},
                success = {},
                self = this,
                count = 1,
                makeAjax = void 0;

            if (opt_options && (typeof opt_options === "undefined" ? "undefined" : _typeof(opt_options)) === "object") {
                options = opt_options;
            } else {
                options = {};
            }

            // this.proxy.options.mapController.spinner.show();

            makeAjax = function makeAjax(styleIds, index) {
                if (index) {
                    complete[index] = false;
                    success[index] = false;
                }
                // get locationstyles over API
                jQuery.ajax({
                    dataType: self.proxy.options.mapController.data.jsonp ? "jsonp" : "json",
                    url: self.proxy.api_locstyle_url,
                    data: {
                        ids: styleIds
                    }
                }).done(function (data) {
                    var i = void 0,
                        styleData = void 0,
                        successful = true;

                    if (data.length > 0) {
                        for (i = 0; i < data.length; i += 1) {
                            styleData = data[i];
                            self.arrLocStyles[styleData.id] = new _c4gLocationstyle.C4gLocationStyle(styleData, self);
                        }
                    }
                    if (index) {
                        success[index] = true;
                        for (var key in success) {
                            if (success.hasOwnProperty(key)) {
                                if (!success[key]) {
                                    successful = false;
                                    break;
                                }
                            }
                        }
                    }
                    if (options.done && typeof options.done === "function" && (index ? successful : true)) {
                        options.done();
                    }
                }).always(function (jXhr, strStatus) {
                    var completed = true;

                    if (index) {
                        complete[index] = true;
                        for (var key in complete) {
                            if (complete.hasOwnProperty(key)) {
                                if (!complete[key]) {
                                    completed = false;
                                    break;
                                }
                            }
                        }
                    }
                    if (options.always && typeof options.always === "function" && (index ? completed : true)) {
                        options.always();
                    }
                    if (!$(self.proxy.options.mapController.spinner.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
                        self.proxy.options.mapController.spinner.hide();
                    }
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    console.warn(errorThrown);
                });
            };

            // split arrIds if it's too long
            if (arrIds.length > 100) {
                var n = 100;
                while (arrIds.length > 0) {
                    makeAjax(arrIds.splice(0, n), count);
                    count++;
                }
            } else {
                makeAjax(arrIds);
            }
            //});
        } // end of "loadLocationStyles()"

    }]);

    return C4gLocationStyleController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-locationstyle.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-locationstyle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.C4gLocationStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLocationStyle = exports.C4gLocationStyle = function () {
    function C4gLocationStyle(locStyleArr, controller) {
        _classCallCheck(this, C4gLocationStyle);

        this.id = locStyleArr['id'];
        this.style = this.getStyleFunction(locStyleArr);
        this.editor = this.getStyleEditorConfig(locStyleArr);
        this.name = locStyleArr['name'];
        this.tooltip = locStyleArr['tooltip'];
        this.label = locStyleArr['label'];
        this.minzoom = locStyleArr['minzoom'];
        this.maxzoom = locStyleArr['maxzoom'];
        this.fnStyleFunction = locStyleArr['style_function_js'];
        this.controller = controller;
        this.locStyleArr = locStyleArr;
    }

    _createClass(C4gLocationStyle, [{
        key: 'getStyleFunction',
        value: function getStyleFunction(styleData) {
            var self, styleFunction, imageStyle, strokeStyle, fillStyle, textStyle, textStyleOutline, backgroundFill, backgroundStroke;

            self = this;

            // general
            strokeStyle = new ol.style.Stroke({
                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity),
                width: parseInt(styleData.strokewidth.value, 10)
            });
            fillStyle = new ol.style.Fill({
                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity)
            });

            // image
            switch (styleData.styletype) {
                case 'square':
                    imageStyle = new ol.style.RegularShape({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        points: 4,
                        radius: styleData.radius.value || 10,
                        angle: Math.PI / 4
                    });
                    break;
                case 'star':
                    imageStyle = new ol.style.RegularShape({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        radius1: styleData.radius.value || 10,
                        radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
                        points: 5,
                        angle: 0
                    });
                    break;
                case 'x':
                    imageStyle = new ol.style.RegularShape({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        points: 4,
                        radius: styleData.radius.value || 10,
                        radius2: 0,
                        angle: Math.PI / 4
                    });
                    break;
                case 'cross':
                    imageStyle = new ol.style.RegularShape({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        points: 4,
                        radius: styleData.radius.value || 10,
                        radius2: 0,
                        angle: 0
                    });
                    break;
                case 'triangle':
                    imageStyle = new ol.style.RegularShape({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        points: 3,
                        radius: styleData.radius.value || 10,
                        rotation: Math.PI / 4,
                        angle: 0
                    });
                    break;
                case 'ol_icon': // fallthrough
                case 'cust_icon':
                    if (styleData.icon_src) {
                        var anchorX = 1 / (parseInt(styleData.icon_size[0]) / (parseInt(styleData.icon_offset[0]) * -1));
                        var anchorY = 1 / (parseInt(styleData.icon_size[1]) / (parseInt(styleData.icon_offset[1]) * -1));
                        imageStyle = new ol.style.Icon({
                            anchor: [anchorX, anchorY],
                            opacity: parseFloat(styleData.icon_opacity.value) / 100,
                            src: styleData.icon_src,
                            scale: parseFloat(styleData.icon_scale),
                            size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)]
                        });
                    }
                    break;
                case 'cust_icon_svg':
                    if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext("2d");
                        var width = styleData.icon_size[0] * styleData.icon_scale;
                        var height = styleData.icon_size[1] * styleData.icon_scale;

                        var strokewidth = 0;
                        if (styleData.strokewidth && styleData.strokewidth.value) {
                            strokewidth = styleData.strokewidth.value;
                        }
                        canvas.width = width + 2 * strokewidth;
                        canvas.height = height + 2 * strokewidth;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                        if (styleData.fillcolor) {
                            ctx.fillStyle = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                        }

                        if (strokewidth && styleData.strokecolor) {
                            ctx.strokeStyle = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
                            ctx.lineWidth = styleData.strokewidth.value;
                            ctx.strokeRect(0, 0, canvas.width, canvas.height);
                            ctx.translate(0.5, 0.5);
                        }

                        // if (styleData.icon_opacity.value && (styleData.icon_opacity.value > 0)) {
                        //     ctx.globalAlpha = (styleData.icon_opacity.value / 100);
                        // }

                        var img = new Image();
                        img.src = styleData.svgSrc;
                        img.zIndex = 100; //Test

                        img.onload = function () {
                            ctx.drawImage(img, strokewidth, strokewidth, width, height);
                        };

                        imageStyle = new ol.style.Icon({
                            img: canvas,
                            imgSize: [canvas.width, canvas.height] /*,
                                                                   opacity: (styleData.icon_opacity.value / 100)*/
                        });
                    }

                    break;
                case 'photo':
                    imageStyle = new ol.style.Photo({
                        kind: styleData.photoKind,
                        crop: true,
                        opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                        radius: parseFloat(styleData.radius.value, 10),
                        shadow: true,
                        stroke: strokeStyle,
                        src: styleData.icon_src
                    });
                    break;
                case 'point':
                    imageStyle = new ol.style.Circle({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        radius: styleData.radius.value || 7
                    });
                    break;
                default:
                    imageStyle = new ol.style.Circle({
                        fill: fillStyle,
                        stroke: strokeStyle,
                        radius: styleData.radius.value || 7
                    });
            }

            // build function
            styleFunction = function styleFunction(feature, projection, getId) {
                var stylesArray, label, arrowSize, arrowSizeUnit, segmentLength, arrows_minzoom, start_pixel, end_pixel;

                if (getId) {
                    return styleData.id;
                }

                // check if this is a feature.styleFunction
                if (!(feature instanceof ol.Feature)) {
                    projection = feature;
                    feature = this;
                }

                stylesArray = [];

                if (feature && typeof feature.get === 'function' && feature.get('label')) {
                    label = feature.get('label');
                } else if (styleData.label) {
                    label = styleData.label;
                } else {
                    label = false;
                }
                var defaultColor = self.controller.mapController.data.default_label_color;
                // label
                if (label) {
                    if (styleData.label_outl_color && styleData.label_outl_width.value) {
                        textStyleOutline = new ol.style.Stroke({
                            color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                                unit: '%',
                                value: 100
                            }),
                            width: parseInt(styleData.label_outl_width.value, 10)
                        });
                        if (styleData.label_outl_box === "1") {
                            backgroundFill = new ol.style.Fill({
                                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                                    unit: '%',
                                    value: 100
                                })
                            });
                        }
                    }
                    if (!styleData.label_offset) {
                        styleData.label_offset = [0, 0, "px"];
                    }
                    if (styleData.label_outl_box === "1") {
                        textStyle = new ol.style.Text({
                            text: label,
                            font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + (styleData.font_size || '13') + 'px ' + (styleData.font_family || 'sans-serif'),
                            // scale: parseInt(styleData.font_size || 0, 10) || undefined,
                            offsetX: parseInt(styleData.label_offset[0] || 0, 10),
                            offsetY: parseInt(styleData.label_offset[1] || 0, 10),
                            textAlign: styleData.label_align_hor,
                            textBaseline: styleData.label_align_ver,
                            fill: new ol.style.Fill({
                                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.font_color || defaultColor, styleData.font_opacity)
                            }),
                            backgroundFill: backgroundFill,
                            backgroundStroke: textStyleOutline
                        });
                    } else {
                        textStyle = new ol.style.Text({
                            text: label,
                            font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + (styleData.font_size || '13') + 'px ' + (styleData.font_family || 'sans-serif'),
                            // scale: parseInt(styleData.font_size || 0, 10) || undefined,
                            offsetX: parseInt(styleData.label_offset[0] || 0, 10),
                            offsetY: parseInt(styleData.label_offset[1] || 0, 10),
                            textAlign: styleData.label_align_hor,
                            textBaseline: styleData.label_align_ver,
                            fill: new ol.style.Fill({
                                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.font_color || defaultColor, styleData.font_opacity)
                            }),
                            stroke: textStyleOutline
                        });
                    }
                }

                // create style-object
                // we need this check because textStyle is a var accessible from closure and will be set even if no label is set
                if (label) {
                    var zIndex = void 0;
                    if (feature && feature.get && typeof feature.get === "function" && feature.get('zIndex')) {
                        zIndex = feature.get('zIndex');
                    }
                    stylesArray.push(new ol.style.Style({
                        image: imageStyle,
                        text: textStyle,
                        stroke: strokeStyle,
                        fill: fillStyle,
                        zIndex: zIndex
                    }));
                } else {
                    stylesArray.push(new ol.style.Style({
                        image: imageStyle,
                        stroke: strokeStyle,
                        fill: fillStyle
                    }));
                }

                // add line-arrows
                if (styleData.line_arrows && feature && typeof feature.getGeometry === 'function' && !(feature.getGeometry() instanceof ol.geom.Point) && typeof feature.getGeometry().forEachSegment === 'function') {
                    arrowSize = styleData.line_arrows_radius ? parseInt(styleData.line_arrows_radius.value, 10) * 2 : 0;
                    arrowSizeUnit = arrowSize + styleData.line_arrows_radius.unit;
                    feature.getGeometry().forEachSegment(function (start, end) {
                        //if minzoom is 0 (unlimited), hide arrows if they are bigger than the segment
                        arrows_minzoom = parseInt(styleData.line_arrows_minzoom, 10);
                        start_pixel = self.controller.mapController.map.getPixelFromCoordinate(start);
                        end_pixel = self.controller.mapController.map.getPixelFromCoordinate(end);
                        // euclid-distance between start and end
                        segmentLength = Math.sqrt(Math.pow(end_pixel[1] - start_pixel[1], 2) + Math.pow(end_pixel[0] - start_pixel[0], 2));

                        if (arrows_minzoom < 0 && arrowSize + parseInt(styleData.strokewidth.value, 10) < segmentLength || arrows_minzoom >= 0 && self.controller.mapController.map.getView().getZoom() >= arrows_minzoom) {
                            // forward arrows
                            stylesArray.push(new ol.style.Style({
                                geometry: new ol.geom.Point(end),
                                text: new ol.style.Text({
                                    text: "ᐳ",
                                    font: arrowSizeUnit + " sans-serif",
                                    offsetX: 0,
                                    offsetY: 1,
                                    fill: fillStyle,
                                    stroke: strokeStyle,
                                    textAlign: 'right',
                                    rotateWithView: true,
                                    rotation: -Math.atan2(end[1] - start[1], end[0] - start[0])
                                })
                            }));
                            // backward arrows (if wanted)
                            if (styleData.line_arrows_back) {
                                stylesArray.push(new ol.style.Style({
                                    geometry: new ol.geom.Point(start),
                                    text: new ol.style.Text({
                                        text: "ᐳ",
                                        font: arrowSizeUnit + " sans-serif",
                                        offsetX: 0,
                                        offsetY: -1,
                                        fill: fillStyle,
                                        stroke: strokeStyle,
                                        textAlign: 'right',
                                        rotateWithView: true,
                                        rotation: -Math.atan2(start[1] - end[1], start[0] - end[0])
                                    })
                                }));
                            }
                        }
                    });
                }

                return stylesArray;
            };

            return styleFunction;
        } // end of "getStyleFunction()"


    }, {
        key: 'getStyleEditorConfig',
        value: function getStyleEditorConfig(styleData) {
            var editorConfig;

            // create editor-config
            editorConfig = {};
            editorConfig.collect = styleData.editor_collect || undefined;
            editorConfig.iconSrc = styleData.editor_icon || undefined;
            editorConfig.vars = styleData.editor_vars || undefined;

            editorConfig.sort = styleData.editor_sort || false;
            if (editorConfig.sort) {
                editorConfig.sort = parseInt(editorConfig.sort, 10) || false;
            }

            return editorConfig;
        } // end of "getStyleEditorConfig()"

    }]);

    return C4gLocationStyle;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-config.js":
/*!************************************************!*\
  !*** ./Resources/public/js/c4g-maps-config.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  osm: {

    CycleMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    },

    German: {
      attributions: 'Style by <a target="_blank" href="http://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
    },

    GermanTransport: {
      attributions: 'Style by <a target="_blank" href="http://www.memomaps.de">Memomaps</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      url: 'https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png'
    },

    LandscapeMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png'
    },

    Mapnik: {
      attributions: ol.source.OSM.ATTRIBUTION,
      crossOrigin: 'anonymous'
    },

    NONE: '' // last line
  },

  stamen: {
    Toner: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },

    TonerLabels: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner-labels',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },

    TonerLines: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'toner-lines',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },

    Terrain: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'terrain',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },

    Watercolor: {
      attributions: ol.source.OSM.ATTRIBUTION,
      layer: 'watercolor',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },

    NONE: ''
  },

  mapquest: {

    MapQuestOpen: {
      layer: 'osm'
    },

    MapQuestHyb: {
      layer: 'hyb'
    },

    MapQuestSat: {
      layer: 'sat'
    },

    NONE: ''
  },

  mapbox: {

    Mapbox: {
      tileSize: [512, 512],
      attributions: '© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },

    MapboxClassic: {
      attributions: '© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },

  klokan: {

    OpenMapTiles: {
      format: new ol.format.MVT(),
      tileGrid: ol.tilegrid.createXYZ({ tileSize: 512, maxZoom: 22 }), //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" href="https://openmaptiles.org/">OpenMapTiles</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },

    TileHosting: {
      format: new ol.format.MVT(),
      tileGrid: ol.tilegrid.createXYZ({ tileSize: 512, maxZoom: 22 }), //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" href="https://tilehosting.com/">TileHosting</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },

  here: {

    HERE: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" href="https://developer.here.com">HERE</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }

  },

  thunderforest: {

    Thunderforest: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous'
    }

  }
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Language constants (en)
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var langConstantsGerman = exports.langConstantsGerman = {

  LANG: 'de',

  NAME: 'Name',
  HIDE: 'Zuklappen',
  CLOSE: 'Schließen',
  POINT: 'POI',
  FREEHAND: 'Freihand',
  LINE: 'Linie',
  POLYGON: 'Fläche',
  CIRCLE: 'Radius',
  PERIMETER: 'Umfang',
  LENGTH: 'Länge',
  SURFACEAREA: 'Flächeninhalt',
  RADIUS: 'Radius',
  REFRESH: 'Aktualisieren',
  COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',

  CTRL_ZOOM_IN: 'Vergrößern',
  CTRL_ZOOM_OUT: 'Verkleinern',
  CTRL_ZOOM_EXT: 'Maximal verkleinern',
  CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
  CTRL_ZOOM_POS: 'Zum aktuellen Standort',
  CTRL_ZOOM_SLIDER: 'Zoom Slider',
  CTRL_RESET_ROTATION: 'Rotation (touch, ctrl+shift+mouse) zurücksetzen',
  CTRL_PORTSIDE: 'Portside ein-/ausblenden',
  CTRL_ROUTER: 'Router ein-/ausblenden',
  CTRL_EDITOR: 'Editor ein-/ausblenden',
  CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
  CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
  CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
  CTRL_ACCOUNT: 'Account ein-/ausblenden',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
  CTRL_START_SEARCH: 'Suche starten',
  CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
  CTRL_GEOBOOKMARKS: 'Favoriten verwalten',
  CTRL_SIDEBOARD: 'Sideboard ein-/ausblenden',
  CTRL_STARBOARD: 'Starboard ein-/ausblenden',
  CTRL_ATTRIBUTION: 'Attribution anzeigen',
  CTRL_GRID: 'Gitter ein-/ausblenden',
  CTRL_PERMALINK: 'Permalink generieren',
  CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
  CTRL_PRINT: 'Karte exportieren',

  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
  EDITOR_FEATURE_APPLY: 'Editieren beenden',
  EDITOR_FEATURE_DELETE: 'Element löschen',
  EDITOR_FEATURE_MODIFY: 'Element editieren / verschieben',
  EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
  EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Kartenelemente',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihandwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',

  POPUP_ROUTE_FROM: 'Route von hier',
  POPUP_ROUTE_TO: 'Route hierhin',

  STARBOARD: 'Starboard',
  STARBOARD_BASELAYER: 'Basiskarten',
  STARBOARD_LAYER: 'Ebenen',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',

  SIDEBOARD: 'Sideboard',

  MEASURETOOLS: 'Messwerkzeuge',
  MEASURETOOLS_INFO: 'Wählen Sie weiter unten einen Messtyp aus und starten Sie die Messung durch das Klicken auf der Karte.',
  MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',

  GEOBOOKMARKS_PLACEHOLDER: 'Neue Bezeichnung',

  INFOPAGE: 'Informationen',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',

  SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',

  NONE: '' // last line
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-en.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-en.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Language constants (en)
 */
var langConstantsEnglish = exports.langConstantsEnglish = {

  LANG: 'en',

  NAME: 'Name',
  HIDE: 'Hide',
  CLOSE: 'Close',
  POINT: 'POI',
  FREEHAND: 'freehand',
  LINE: 'Line',
  POLYGON: 'Area',
  CIRCLE: 'Radius',
  PERIMETER: 'Perimeter',
  LENGTH: 'Length',
  SURFACEAREA: 'Surface area',
  RADIUS: 'Radius',
  REFRESH: 'Refresh',
  COPY_TO_CLIPBOARD: 'Copy to clipboard',

  CTRL_ZOOM_IN: 'Zoom in',
  CTRL_ZOOM_OUT: 'Zoom out',
  CTRL_ZOOM_EXT: 'Fit to extent',
  CTRL_ZOOM_HOME: 'jump to initial position',
  CTRL_ZOOM_POS: 'jump to browser/device position',
  CTRL_ZOOM_SLIDER: 'Zoom slider',
  CTRL_RESET_ROTATION: 'Reset rotation (touch, ctrl+shift+mouse)',
  CTRL_PORTSIDE: 'Toggle portside',
  CTRL_EDITOR: 'Toggle editor',
  CTRL_MEASURETOOLS: 'Toggle measuretools',
  CTRL_INFOPAGE: 'Toggle infopage',
  CTRL_ADDITIONALPANEL: 'Toggle panel',
  CTRL_ACCOUNT: 'Toggle account',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Toggle geosearch',
  CTRL_START_SEARCH: 'start search',
  CTRL_OVERVIEWMAP: 'Toggle overviewmap',
  CTRL_GEOBOOKMARKS: 'Manage favorites',
  CTRL_SIDEBOARD: 'Toggle sideboard',
  CTRL_STARBOARD: 'Toggle starboard',
  CTRL_ATTRIBUTION: 'Show attribution',
  CTRL_GRID: 'Toggle grid',
  CTRL_PERMALINK: 'Generate Permalink',
  CTRL_FULLSCREEN: 'Toggle fullscreen-mode',
  CTRL_PRINT: 'Export map',

  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Measure while drawing',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freehand draw',
  EDITOR_FEATURE_APPLY: 'End modification',
  EDITOR_FEATURE_DELETE: 'Delete feature',
  EDITOR_FEATURE_MODIFY: 'Modify feature',
  EDITOR_SELECT_INFO: 'Click an element on the map to select it.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[ctrl] + [click] for multiselect <br>[shift] for boxselect',
  EDITOR_VIEW_TRIGGER_SELECT: 'Select-mode',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Add POIs',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Draw freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Add tracks',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Add areas',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Add circles',

  STARBOARD: 'Starboard',
  STARBOARD_BASELAYER: 'Baselayer',
  STARBOARD_LAYER: 'Layer',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Layerswitcher',

  POPUP_ROUTE_FROM: 'Route from here',
  POPUP_ROUTE_TO: 'Route to here',

  MEASURETOOLS: 'Measuretools',
  MEASURETOOLS_INFO: 'Select a measuretype below and start measuring by clicking on the map.',
  MEASURETOOLS_INFO_ADDITIONAL: '(To stop a measurement, double-click on the map.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Select-mode',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Measure tracks',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Measure areas',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Measure radius',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Measure freehand',

  GEOBOOKMARKS_PLACEHOLDER: 'Enter new caption',

  INFOPAGE: 'Infopage',
  INFOPAGE_VIEW_TRIGGER: 'Show informations',

  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Show panel',

  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Show account',

  SEARCH_NOT_FOUND: 'Location not found. Sorry... :(',

  NONE: '' // last line
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cssConstants = exports.cssConstants = {

  OPEN: 'c4g-open',
  CLOSE: 'c4g-close',
  CLOSEABLE: 'c4g-closeable',
  ENABLED: 'c4g-enabled',
  DISABLED: 'c4g-disabled',
  HIDE: 'c4g-hide',
  ICON: 'c4g-icon',
  CONTROL: 'c4g-control',
  COPY: 'c4g-copy',
  REFRESH: 'c4g-refresh',
  ACTIVE: 'c4g-active',
  INACTIVE: 'c4g-inactive',
  LOADING: 'c4g-loading',
  ANIMATION_SPIN: 'c4g-animation-spin',
  LARGE: 'c4g-large',
  SMALL: 'c4g-small',
  HORIZONTAL: 'c4g-horizontal',
  VERTICAL: 'c4g-vertical',

  ATTRIBUTION_LOGO: 'c4g-attribution-logo',
  CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
  CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
  CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
  CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
  CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
  EDITOR_DRAW_CONTENT_POINT: 'c4g-draw-content-point',
  EDITOR_DRAW_CONTENT_FREEHAND: 'c4g-draw-content-freehand',
  EDITOR_DRAW_CONTENT_LINESTRING: 'c4g-draw-content-line',
  EDITOR_DRAW_CONTENT_POLYGON: 'c4g-draw-content-polygon',
  EDITOR_DRAW_CONTENT_CIRCLE: 'c4g-draw-content-circle',
  EDITOR_DRAW_CONTENT_PROJECT: 'c4g-draw-content-project',
  EDITOR_DRAW_TRIGGER: 'c4g-draw-trigger',
  EDITOR_CONTENT_SELECT: 'c4g-content-select',
  EDITOR_DRAW_OPTIONS: 'c4g-editor-draw-options',
  EDITOR_FEATURE_APPLY: 'c4g-editor-feature-apply',
  EDITOR_FEATURE_DELETE: 'c4g-editor-feature-delete',
  EDITOR_FEATURE_MODIFY: 'c4g-editor-feature-modify',
  EDITOR_VIEW_TRIGGER_SELECT: 'c4g-editor-view-trigger-select',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'c4g-editor-view-trigger-draw-point',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-editor-view-trigger-draw-freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-editor-view-trigger-draw-line',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-editor-view-trigger-draw-polygon',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-editor-view-trigger-draw-circle',
  GEOSEARCH: 'c4g-geosearch',
  GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
  GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
  GEOSEARCH_START: 'c4g-geosearch-start',
  GRATICULE: 'c4g-graticule',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
  PRINT: 'c4g-print',
  INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
  INFOPAGE: 'c4g-infopage',
  ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
  ADDITIONALPANEL: 'c4g-additionalpanel',
  ACCOUNT_VIEW_TRIGGER: 'c4g-account-view-trigger',
  ACCOUNT: 'c4g-account',
  OVERVIEWMAP: 'c4g-overviewmap',
  OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
  GEOBOOKMARKS: 'c4g-geobookmarks',
  PERMALINK: 'c4g-permalink',
  PERMALINK_POPUP: 'c4g-permalink-popup',
  POPUP_CLOSE: 'c4g-popup-close',
  POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
  POPUP_ROUTE_FROM: 'c4g-popup-route-from',
  POPUP_ROUTE_TO: 'c4g-popup-route-to',
  PORTSIDE: 'c4g-portside',
  PORTSIDE_CONTAINER: 'c4g-portside-container',
  PORTSIDE_CONTROL: 'c4g-portside-control',
  PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
  PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
  PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
  PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
  PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
  PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
  PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
  PORTSIDE_HEADLINE: 'c4g-portside-headline',
  PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
  PORTSIDE_BUTTON: 'c4g-portside-button',
  PORTSIDE_HIDE: 'c4g-portside-hide',
  PORTSIDE_CLOSE: 'c4g-portside-close',
  SPINNER: 'c4g-spinner',
  STARBOARD: 'c4g-starboard',
  STARBOARD_CONTAINER: 'c4g-starboard-container',
  STARBOARD_CONTROL: 'c4g-starboard-control',
  STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
  STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
  STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
  STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
  STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
  STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
  STARBOARD_HEADLINE: 'c4g-starboard-headline',
  STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
  STARBOARD_BUTTON: 'c4g-starboard-button',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
  STARBOARD_CLOSE: 'c4g-starboard-close',
  STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
  STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
  STARBOARD_LAYERTREE: 'c4g-layertree',
  STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
  TOOLTIP_POPUP: 'c4g-tooltip-popup',
  ZOOM_LEVEL: 'c4g-zoom-level',

  OL_CONTROL: 'ol-control',
  OL_UNSELECTABLE: 'ol-unselectable',

  OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
  OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
  OL_VIEWPORT: 'ol-viewport',
  OL_ZOOM: 'ol-zoom',
  OL_ZOOM_IN: 'ol-zoom-in',
  OL_ZOOM_EXT: 'ol-zoom-extent',
  OL_ZOOM_HOME: 'ol-zoom-home',
  OL_ZOOM_POS: 'ol-zoom-position',
  OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
  OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
  OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
  OL_ZOOM_SLIDER: 'ol-zoom-slider',
  OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',

  NONE: '' // last line
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-geosearch.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-geosearch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoSearch = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var GeoSearch = exports.GeoSearch = function (_ol$control$Control) {
  _inherits(GeoSearch, _ol$control$Control);

  /**
   * @TODO description
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  function GeoSearch(opt_options) {
    _classCallCheck(this, GeoSearch);

    var _this = _possibleConstructorReturn(this, (GeoSearch.__proto__ || Object.getPrototypeOf(GeoSearch)).call(this, opt_options));

    var self, options, element, button, searchWrapper, searchInput, searchButton, resultTrigger, resultWrapper;

    self = _this;
    // this.element = element;
    // this.searchWrapper = searchWrapper;
    // this.resultWrapper = resultWrapper;

    options = opt_options || {};

    // default options
    options = $.extend({
      mapController: undefined,
      className: _c4gMapsConstant.cssConstants.GEOSEARCH,
      extDiv: false,
      collapsible: true,
      collapsed: true,
      tipLabel: _c4gMapsI18n.langConstants.CTRL_GEOSEARCH,
      label: '>>',
      collapsedLabel: '(?)',
      attribution: true,
      // customAttribution: '',
      // engineUrl: false,
      searchZoom: 12,
      zoomBounds: false,
      results: false,
      quicksearch: true,
      animate: true,
      markResult: true,
      popup: true,
      caching: 0,
      autopick: false
    }, options);

    // prepare search-configuration
    //
    _this.config = {};
    // searchEngineUrl
    // if (typeof options.engineUrl === 'string') {
    //   // if it is a string, then it is (hopefully) a URL, that we can use directly
    //   // @TODO add a URL-check
    //   this.config.url = options.engineUrl;
    // } else {
    //   // if it is none of the above, then use the default URL
    //   this.config.url = 'https://nominatim.openstreetmap.org/search';
    // }
    _this.config.url = options.mapController.data.api.geosearch + "/" + options.mapController.data.profile;
    // zoomlevel when centering the found location
    _this.config.zoomlevel = options.searchZoom;
    // zoom to bounds instead of zoomlevel when centering the found location
    _this.config.zoombounds = options.zoomBounds;
    // quicksearch-option (instantly jump to the first found location)
    _this.config.quicksearch = options.quicksearch;
    // animation (animate flight to targeted location)
    _this.config.animate = options.animate;
    // highlight the result location
    _this.config.markResult = options.markResult;
    _this.config.popup = options.popup;

    _this.config.autopick = options.autopick;
    _this.config.mapController = options.mapController;
    _this.config.results = options.results;

    _this.config.collapsed = options.collapsed;

    _this.config.caching = options.caching;

    // @TODO
    // Attribution

    // check extDiv
    if (options.extDiv && document.getElementById(options.extDiv)) {
      options.extDiv = document.getElementById(options.extDiv);
    } else {
      options.extDiv = false;
    }

    // controlwrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;

    if ((options.collapsed && !options.extDiv) & !(_this.config.caching && _c4gMapsUtils.utils.getValue('geosearch') == '1')) {
      $(element).addClass(_c4gMapsConstant.cssConstants.CLOSE);
    } else {
      $(element).addClass(_c4gMapsConstant.cssConstants.OPEN);
    }

    if (options.collapsible && !options.extDiv) {
      // button
      button = document.createElement('button');
      button.className = _c4gMapsConstant.cssConstants.GEOSEARCH_TRIGGER;
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      $(button).click(function () {
        try {
          this.blur();
        } catch (ignore) {}
        self.toggle();
      });
    } else if (options.extDiv) {
      options.target = options.extDiv;
    }

    // wrapper div
    _this.searchWrapper = document.createElement('div');
    _this.searchWrapper.className = _c4gMapsConstant.cssConstants.GEOSEARCH_WRAPPER;

    // search-field
    searchInput = document.createElement('input');
    searchInput.type = 'text';
    _this.searchWrapper.appendChild(searchInput);

    // search-button
    searchButton = document.createElement('button');
    searchButton.className = _c4gMapsConstant.cssConstants.GEOSEARCH_START;
    searchButton.title = _c4gMapsI18n.langConstants.CTRL_START_SEARCH;
    _this.searchWrapper.appendChild(searchButton);

    $(searchButton).click(function () {
      try {
        this.blur();
      } catch (ignore) {}
      if (searchInput.value) {
        self.findLocation(searchInput.value);
      }
    });

    $(searchInput).keypress(function (e) {
      if (e.which === 13) {
        if (searchInput.value) {

          self.findLocation(searchInput.value);

          if (document.getElementById("resultcontainer")) {
            document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
          }
          if (self.config.results) {

            var searchResultContainer = document.createElement('ul');
            searchResultContainer.setAttribute("id", "resultcontainer");
            if (self.results) {
              for (var i = 0; i < self.results.length; i++) {
                var searchResult = document.createElement('li');
                var searchResultButton = document.createElement('button');
                searchResultButton.setAttribute("id", i);
                searchResultButton.setAttribute('class', 'searchResultButton');
                searchResultButton.addEventListener('click', function () {
                  self.zoomTo(this.getAttribute("id"));
                });

                searchResultButton.setAttribute("name", self.results[i].display_name);
                searchResultButton.innerHTML = self.results[i].display_name;
                searchResult.appendChild(searchResultButton);
                searchResultContainer.appendChild(searchResult);
              }
              if (searchWrapper) {
                searchWrapper.appendChild(searchResultContainer);
              }
            }
          }
        }
        return false;
      }
    });

    element.appendChild(_this.searchWrapper);

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });

    return _this;
  }

  /**
   * @TODO
   *
   * @return  {[type]}  [description]
   */


  _createClass(GeoSearch, [{
    key: "open",
    value: function open() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
        $(this.element).addClass(_c4gMapsConstant.cssConstants.OPEN).removeClass(_c4gMapsConstant.cssConstants.CLOSE).find('input')[0].focus();
        if (this.config.caching) {
          _c4gMapsUtils.utils.storeValue('geosearch', '1');
        }
      }
    }

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "close",
    value: function close() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
        $(this.element).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
        // this.closeResults();
        if (document.getElementById("resultcontainer")) {
          document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
        }
        if (this.config.caching) {
          _c4gMapsUtils.utils.storeValue('geosearch', '0');
        }
      }
    }

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    }

    // /**
    //  * @TODO
    //  *
    //  * @return  {[type]}  [description]
    //  */
    // openResults: function () {
    //   if ($(this.resultWrapper).hasClass(cssConstants.CLOSE)) {
    //     $(this.resultWrapper).addClass(cssConstants.OPEN)
    //       .removeClass(cssConstants.CLOSE);
    //   }
    // },

    // /**
    //  * @TODO
    //  *
    //  * @return  {[type]}  [description]
    //  */
    // closeResults: function () {
    //   if ($(this.resultWrapper).hasClass(cssConstants.OPEN)) {
    //     $(this.resultWrapper).addClass(cssConstants.CLOSE)
    //       .removeClass(cssConstants.OPEN);
    //   }
    // },

    // /**
    //  * @TODO
    //  *
    //  * @return  {[type]}  [description]
    //  */
    // toggleResults: function () {
    //   if ($(this.resultWrapper).hasClass(cssConstants.CLOSE)) {
    //     this.openResults();
    //   } else {
    //     this.closeResults();
    //   }
    // },

    /**
     * @TODO
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "clearResults",
    value: function clearResults() {
      this.resultWrapper.innerHTML = '';
    }

    /**
     * @TODO
     *
     * @param   {[type]}  location  [description]
     *
     * @return  {[type]}            [description]
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(index) {
      var self, map, animate, markResult, result, resultCoordinate, flyTo, completeSearch, animationDuration, zoomType;

      flyTo = function flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, animate) {
        var duration = 2000;
        var zoom = zoomlevel;
        var parts = 2;
        var called = false;
        var extent;

        function callback(complete) {
          --parts;
          if (called) {
            return;
          }
          if (parts === 0 || !complete) {
            called = true;

            if (zoombounds && boundingbox) {
              // translate osm-extent to ol3-extent

              var osmExtent = [];
              osmExtent.push(parseFloat(boundingbox[2]));
              osmExtent.push(parseFloat(boundingbox[0]));
              osmExtent.push(parseFloat(boundingbox[3]));
              osmExtent.push(parseFloat(boundingbox[1]));

              extent = ol.proj.transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857');
              window.setTimeout(function () {
                mapView.fit(extent, map.getSize(), {
                  minZoom: mapView.get('minZoom') || 2,
                  maxZoom: zoom || mapView.get('maxZoom') || 18,
                  duration: duration / 2,
                  easing: ol.easing.easeOut
                });
              }, duration);
            }

            completeSearch(markResult, animate);
          }
        }

        map.getView().animate({
          center: location,
          duration: duration
        }, callback);
        map.getView().animate({
          zoom: zoom - 1,
          duration: duration / 2
        }, {
          zoom: zoom,
          duration: duration / 2
        }, callback);
      };

      completeSearch = function completeSearch(markResult, animate) {
        var addMarker, markerSource, animateMarker;

        markerSource = new ol.source.Vector();
        map.addLayer(new ol.layer.Vector({
          style: new ol.style.Style(),
          source: markerSource
        }));

        addMarker = function addMarker() {
          markerSource.addFeature(new ol.Feature(new ol.geom.Point(resultCoordinate)));
        };

        animateMarker = function animateMarker(feature) {
          var animationStep, start, duration, listenerKey;

          start = new Date().getTime();
          duration = 3000;

          animationStep = function animationStep(event) {
            var vectorContext, frameState, elapsed, elapsedRatio, radius, opacity, marker, flashGeom;

            vectorContext = event.vectorContext;
            frameState = event.frameState;
            flashGeom = feature.getGeometry().clone();
            elapsed = frameState.time - start;
            elapsedRatio = elapsed / duration;
            radius = ol.easing.linear(1 - elapsedRatio) * 100;
            if (radius < 0) {
              radius = 0;
            }
            opacity = ol.easing.linear(elapsedRatio);

            marker = new ol.style.Style({
              image: new ol.style.Circle({
                radius: radius,
                snapToPixel: false,
                stroke: new ol.style.Stroke({
                  color: 'rgba(200, 0, 0, ' + opacity + ')',
                  width: 3,
                  opacity: opacity
                })
              })
            });

            vectorContext.setStyle(marker);
            vectorContext.drawGeometry(flashGeom, null);

            if (elapsed > duration) {
              markerSource.clear();
              ol.Observable.unByKey(listenerKey);
              return;
            }
            // continue postcompose animation
            frameState.animate = true;
          }; // end of "animationStep"

          listenerKey = map.on('postcompose', animationStep);
        }; // end of "animateMarker"

        markerSource.on('addfeature', function (event) {
          animateMarker(event.feature);
        });

        if (animate) {
          if (zoomType === 'zoom') {
            window.setTimeout(addMarker, animationDuration / 2);
          } else {
            window.setTimeout(addMarker, animationDuration);
          }
        } else {
          addMarker();
        }
      };

      self = this;
      map = this.getMap();

      result = self.results[index];
      resultCoordinate = ol.proj.transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

      if (animate) {
        var resolution = mapView.getResolution();
        var viewExtent = mapView.calculateExtent(map.getSize());
        if (ol.extent.containsCoordinate(viewExtent, resultCoordinate)) {
          zoomType = 'zoom';
        } else {
          if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
            var coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
            var difContext = ol.extent.getWidth(viewExtent);
          } else {
            coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
            difContext = ol.extent.getHeight(viewExtent);
          }
          if (coordDif > 0) {
            resolution *= coordDif / difContext;
          }
          zoomType = 'bounce';
        }

        flyTo(map, resultCoordinate, self.config.zoomlevel, self.config.zoombounds, result.boundingbox, this.config.markResult, this.config.animate);
      } else {
        completeSearch(this.config.markResult, this.config.animate);
        map.getView().setCenter(resultCoordinate);
        if (self.config.zoomlevel >= 0) {
          map.getView().setZoom(self.config.zoomlevel);
        }
      }
    }
  }, {
    key: "findLocation",
    value: function findLocation(location, opt_options) {
      var self, map, animate, animationDuration, markResult;

      self = this;
      map = this.getMap();

      // show spinner
      this.config.mapController.spinner.show();

      animate = this.config.animate;
      animationDuration = 2000;
      markResult = this.config.markResult;

      if ((typeof opt_options === "undefined" ? "undefined" : _typeof(opt_options)) === 'object') {
        if (opt_options.animate !== undefined) {
          animate = opt_options.animate;
        }
        if (opt_options.markResult !== undefined) {
          markResult = opt_options.markResult;
        }
      }

      // @TODO
      // check bounds
      //   are there restriction-bounds on the map?
      //   -> else use extent-bounds

      // @TODO
      // highlight found area/location


      if (this.config.quicksearch) {

        // AJAX -> @nominatim
        $.ajax({
          crossDomain: true,
          dataType: "json",
          url: this.config.url,
          data: {
            format: "json",
            q: location
          }
        }).done(function (results) {

          var mapView, currentCoordinate, resultCoordinate, coordDif, difContext, viewExtent, result, osmExtent, resolution, zoomType, flyTo, completeSearch;

          mapView = map.getView();

          flyTo = function flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, animate) {
            var duration = 2000;
            var zoom = zoomlevel;
            var parts = 2;
            var called = false;
            var extent;

            function callback(complete) {
              --parts;
              if (called) {
                return;
              }
              if (parts === 0 || !complete) {
                called = true;

                if (zoombounds && boundingbox) {
                  // translate osm-extent to ol3-extent

                  osmExtent = [];
                  osmExtent.push(parseFloat(boundingbox[2]));
                  osmExtent.push(parseFloat(boundingbox[0]));
                  osmExtent.push(parseFloat(boundingbox[3]));
                  osmExtent.push(parseFloat(boundingbox[1]));

                  extent = ol.proj.transformExtent(osmExtent, 'EPSG:4326', 'EPSG:3857');

                  window.setTimeout(function () {
                    var viewFit = mapView.fit(extent, map.getSize(), {
                      minZoom: mapView.get('minZoom') || 2,
                      maxZoom: zoom || mapView.get('maxZoom') || 18,
                      duration: duration / 2,
                      easing: ol.easing.easeOut
                    });
                  }, duration);
                }

                completeSearch(markResult, animate);
              }
            }

            map.getView().animate({
              center: location,
              duration: duration
            }, callback);

            map.getView().animate({
              zoom: zoom - 1,
              duration: duration / 2
            }, {
              zoom: zoom,
              duration: duration / 2
            }, callback);
          };

          completeSearch = function completeSearch(markResult, animate) {
            // result marker & animation
            if (markResult) {
              var addMarker, markerSource, animateMarker;

              markerSource = new ol.source.Vector();
              map.addLayer(new ol.layer.Vector({
                style: new ol.style.Style(),
                source: markerSource
              }));

              addMarker = function addMarker() {
                markerSource.addFeature(new ol.Feature(new ol.geom.Point(resultCoordinate)));
              };

              animateMarker = function animateMarker(feature) {
                var animationStep, start, duration, listenerKey;

                start = new Date().getTime();
                duration = 3000;

                animationStep = function animationStep(event) {
                  var vectorContext, frameState, elapsed, elapsedRatio, radius, opacity, marker, flashGeom;

                  vectorContext = event.vectorContext;
                  frameState = event.frameState;
                  flashGeom = feature.getGeometry().clone();
                  elapsed = frameState.time - start;
                  elapsedRatio = elapsed / duration;
                  radius = ol.easing.linear(1 - elapsedRatio) * 100;
                  if (radius < 0) {
                    radius = 0;
                  }
                  opacity = ol.easing.linear(elapsedRatio);

                  var marker = new ol.style.Style({
                    image: new ol.style.Circle({
                      radius: radius,
                      snapToPixel: false,
                      stroke: new ol.style.Stroke({
                        color: 'rgba(200, 0, 0, ' + opacity + ')',
                        width: 3,
                        opacity: opacity
                      })
                    })
                  });

                  vectorContext.setStyle(marker);
                  vectorContext.drawGeometry(flashGeom, null);

                  if (elapsed > duration) {
                    markerSource.clear();
                    ol.Observable.unByKey(listenerKey);
                    return;
                  }
                  // continue postcompose animation
                  frameState.animate = true;
                }; // end of "animationStep"

                listenerKey = map.on('postcompose', animationStep);
              }; // end of "animateMarker"

              markerSource.on('addfeature', function (event) {
                animateMarker(event.feature);
              });

              if (animate) {
                if (zoomType === 'zoom') {
                  window.setTimeout(addMarker, animationDuration / 2);
                } else {
                  window.setTimeout(addMarker, animationDuration);
                }
              } else {
                addMarker();
              }
            } // end of result marker & animation handling
          };

          if (results[0]) {
            result = results[0];
            self.results = results;
            currentCoordinate = mapView.getCenter();
            resultCoordinate = ol.proj.transform([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

            if (animate) {
              flyTo(map, resultCoordinate, self.config.zoomlevel, self.config.zoombounds, result.boundingbox, markResult, animate);
            } else {
              completeSearch(self.config.markResult, self.config.animate);
              mapView.setCenter(resultCoordinate);
              if (self.config.zoomlevel >= 0) {
                map.getView().setZoom(self.config.zoomlevel);
              }
            }

            var pixel = map.getPixelFromCoordinate(resultCoordinate);
            var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
              return feature;
            });
            var layer = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
              return layer;
            });
            if (self.config.popup) {
              var popupInfos = {};
              if (feature && feature.get('popup')) {
                // single POI
                popupInfos = feature.get('popup');
              } else if (layer && layer.popup) {
                popupInfos = layer.popup;
              } else {
                feature = false;
              }
              if (feature) {
                var geometry = feature.getGeometry();
                if (geometry instanceof ol.geom.Point) {
                  var coord = geometry.getCoordinates();
                } else {
                  var coord = resultCoordinate;
                }

                window.c4gMapsPopup.popup.setPosition(coord);
                if (popupInfos.content) {
                  window.c4gMapsPopup.$content.html('');
                  window.c4gMapsPopup.popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
                  window.c4gMapsPopup.spinner.show();

                  if (popupInfos.async === false || popupInfos.async == '0') {
                    var objPopup = {};
                    objPopup.popup = popupInfos;
                    objPopup.feature = feature;
                    objPopup.layer = layer;
                    // Call the popup hook for plugin specific popup content
                    if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                    }
                    self.config.mapController.proxy.setPopup(objPopup);
                  } else {
                    $.ajax({
                      dataType: "json",
                      url: self.api_infowindow_url + '/' + popupInfos.content,
                      done: function done(data) {
                        var popupInfo = {
                          async: popupInfos.async,
                          content: data.content,
                          popup: popupInfos.popup,
                          routing_link: popupInfos.routing_link
                        };

                        objPopup = {};
                        objPopup.popup = popupInfo;
                        objPopup.feature = feature;
                        objPopup.layer = layer;

                        // Call the popup hook for plugin specific popup content
                        if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                        }

                        self.setPopup(objPopup);
                      }
                    });
                  }
                } else {
                  window.c4gMapsPopup.popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
                }
              } else if (window && window.c4gMapsPopup && window.c4gMapsPopup.popup) {
                $(window.c4gMapsPopup.popup).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
              }
            }

            if (self.config.autopick && self.config.mapController.geopicker && typeof self.config.mapController.geopicker.pick === 'function') {
              self.config.mapController.geopicker.pick(resultCoordinate);
            }
          } else {
            alert(_c4gMapsI18n.langConstants.SEARCH_NOT_FOUND);
          }
          // self.resultWrapper.innerHTML = '@ console';

          if (document.getElementById("resultcontainer")) {
            document.getElementById("resultcontainer").parentNode.removeChild(document.getElementById("resultcontainer"));
          }
          if (self.config.results) {

            var searchResultContainer = document.createElement('ul');
            searchResultContainer.setAttribute("id", "resultcontainer");
            if (self.results) {
              for (var i = 0; i < self.results.length; i++) {
                var searchResult = document.createElement('li');
                var searchResultButton = document.createElement('button');
                searchResultButton.setAttribute("id", i);
                searchResultButton.setAttribute('class', 'searchResultButton');
                searchResultButton.addEventListener('click', function () {
                  self.zoomTo(this.getAttribute("id"));
                });

                searchResultButton.setAttribute("name", self.results[i].display_name);
                searchResultButton.innerHTML = self.results[i].display_name;
                searchResult.appendChild(searchResultButton);
                searchResultContainer.appendChild(searchResult);
              }
              self.searchWrapper.appendChild(searchResultContainer);
            }
          }
        })

        // AJAX-failure
        //
        .fail(function () {
          // @TODO
          // self.resultWrapper.innerHTML = 'ohoh!';
        })

        // AJAX-always
        //
        .always(function () {
          self.config.mapController.spinner.hide();
        });
      } else {
        // @TODO
      }
    }
  }]);

  return GeoSearch;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-grid.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-grid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = undefined;

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Grid = exports.Grid = function (_ol$control$Control) {
  _inherits(Grid, _ol$control$Control);

  /**
   * Control to toggle a grid on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  function Grid(opt_options) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, opt_options));

    var self = _this;
    var options = opt_options || {};

    var element, button;

    var objGrid = new ol.Graticule({
      /*
      strokeStyle: new ol.style.Stroke({
          width: 2,
          lineDash: [0.5, 4]
      }),*/
      showLabels: true
    });

    // default options
    options = $.extend({
      className: _c4gMapsConstant.cssConstants.GRATICULE,
      switchable: true,
      tipLabel: _c4gMapsI18n.langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]'
    }, options);

    // @TODO move functions to prototype?
    //
    // function to enable the grid
    var enable = function enable() {
      objGrid.setMap(self.getMap());
      $(element).addClass(_c4gMapsConstant.cssConstants.ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '1');
      // }
    };

    // function to disable the grid
    var disable = function disable() {
      objGrid.setMap(null);
      $(element).removeClass(_c4gMapsConstant.cssConstants.ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '0');
      // }
    };

    // function to toggle the grid
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (objGrid.getMap()) {
        disable();
      } else {
        enable();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });
    return _this;
  }

  return Grid;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-home.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-home.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Home = exports.Home = function (_ol$control$Control) {
  _inherits(Home, _ol$control$Control);

  /**
   * Control to toggle the intial map position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  function Home(opt_options) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, opt_options));

    var self = _this;
    var options = opt_options || {};

    var element, button;

    // default options
    options = $.extend({
      className: _c4gMapsConstant.cssConstants.OL_ZOOM_HOME,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      var _ret;

      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      view.setCenter(ol.proj.transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'));
      view.setZoom(parseInt(mapData.center.zoom, 10));
      view.setRotation(parseFloat(mapData.center.rotation));

      // check userposition
      var geoLocation;
      if (mapData.geolocation) {
        geoLocation = new ol.Geolocation({
          tracking: true,
          projection: view.getProjection()
        });

        geoLocation.on('change', function (evt) {
          view.setCenter(geoLocation.getPosition());
          if (mapData.geolocation_zoom) {
            view.setZoom(parseInt(mapData.geolocation_zoom, 10));
          }
          geoLocation.setTracking(false);
        });
      }

      options.mapController.map.setView(view);
      // utils.redrawMapView(options.mapController);
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' button';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });
    ol.inherits(Home, ol.control.Control);
    return _this;
  }

  return Home;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-overviewmap.js":
/*!*************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-overviewmap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverviewMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var OverviewMap = exports.OverviewMap = function () {

  /**
   * Displays a overviewmap on the map.
   *   This class wraps the ovm a bit differently than
   *   the standard ol-overviemap, to allow proper css-transitions.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  function OverviewMap(options) {
    _classCallCheck(this, OverviewMap);

    var element, trigger, triggerIcon, ovm;

    // default options
    this.options = $.extend({
      collapsed: true,
      tipLabel: _c4gMapsI18n.langConstants.CTRL_OVERVIEWMAP,
      layers: [new ol.layer.Tile({ source: new ol.source.OSM() })]
    }, options);
    this.mapController = options.mapController;

    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OVERVIEWMAP + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;
    if (options.collapsed) {
      element.className += ' ' + _c4gMapsConstant.cssConstants.CLOSE;
    } else {
      element.className += ' ' + _c4gMapsConstant.cssConstants.OPEN;
    }
    options.target.appendChild(element);

    trigger = document.createElement('button');
    trigger.title = options.tipLabel;
    element.appendChild(trigger);

    triggerIcon = document.createElement('span');
    triggerIcon.className = _c4gMapsConstant.cssConstants.ICON;
    trigger.appendChild(triggerIcon);

    $(trigger).click(function () {
      if ($(element).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
        $(element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      } else {
        $(element).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      }
      try {
        this.blur();
      } catch (ignore) {}
    });

    this.ovm = new ol.control.OverviewMap({
      target: element,
      layers: options.layers,
      collapsed: options.collapsed || true
    });
    this.element = element;
  }

  _createClass(OverviewMap, [{
    key: "removeFromMap",
    value: function removeFromMap() {
      this.element.parentNode.removeChild(this.element);
    }
  }, {
    key: "getOverviewMap",
    value: function getOverviewMap() {
      return this.ovm;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return OverviewMap;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-permalink.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-permalink.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Permalink = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Permalink = exports.Permalink = function (_ol$control$Control) {
  _inherits(Permalink, _ol$control$Control);

  /**
   * Control to generate a permalink to the current Map state.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              options  control options.
   */
  function Permalink(options) {
    _classCallCheck(this, Permalink);

    var _this = _possibleConstructorReturn(this, (Permalink.__proto__ || Object.getPrototypeOf(Permalink)).call(this, options));

    var self, button, copyButton, refreshButton;

    _this.config = options || {};
    self = _this;

    // default options
    _this.config = $.extend({
      className: _c4gMapsConstant.cssConstants.PERMALINK,
      // mapController: undefined,
      tipLabel: _c4gMapsI18n.langConstants.CTRL_PERMALINK,
      getParameter: false,
      label: 'P',
      target: undefined
    }, _this.config);

    if (!_this.config.mapController) {
      var _ret;

      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    // wrapper div
    _this.element = document.createElement('div');
    _this.element.className = _this.config.className + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;

    // button
    button = document.createElement('button');
    button.title = _this.config.tipLabel;
    _this.element.appendChild(button);

    // set onClick to the toggle-function
    // button.addEventListener('click', this.toggle, false);
    // button.addEventListener('touchstart', this.toggle, false);
    $(button).click(function () {
      try {
        this.blur();
      } catch (ignore) {}
      self.toggle();
    });

    // popup
    // will be attached when opened the first time
    // to make sure its really the last element in the container
    _this.popupAttached = false;
    _this.popup = document.createElement('div');
    _this.popup.className = _c4gMapsConstant.cssConstants.CONTROL + ' ' + _c4gMapsConstant.cssConstants.PERMALINK_POPUP + ' ' + _c4gMapsConstant.cssConstants.CLOSE;

    // textfield
    _this.textfield = document.createElement('input');
    _this.textfield.type = 'text';
    _this.popup.appendChild(_this.textfield);

    // copy button
    copyButton = document.createElement('button');
    copyButton.className = _c4gMapsConstant.cssConstants.COPY + ' ' + _c4gMapsConstant.cssConstants.ICON;
    copyButton.title = _c4gMapsI18n.langConstants.COPY_TO_CLIPBOARD;
    copyButton.setAttribute('data-clipboard-target', '.' + _c4gMapsConstant.cssConstants.PERMALINK_POPUP + ' > input[type="text"]');
    _this.popup.appendChild(copyButton);
    new Clipboard(copyButton);

    // refresh button
    refreshButton = document.createElement('button');
    refreshButton.className = _c4gMapsConstant.cssConstants.REFRESH + ' ' + _c4gMapsConstant.cssConstants.ICON;
    refreshButton.title = _c4gMapsI18n.langConstants.REFRESH;
    $(refreshButton).click(function () {
      self.generateLinkFromCurrentState({ target: self.textfield });
    });
    _this.popup.appendChild(refreshButton);

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: _this.element,
      target: _this.config.target
    });
    return _this;
  }

  _createClass(Permalink, [{
    key: "open",
    value: function open() {
      if (!this.popupAttached) {
        $(this.popup).slideDown(1);
        this.config.target.appendChild(this.popup);
        this.popupAttached = true;
      }
      $(this.popup).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      $(this.element).addClass(_c4gMapsConstant.cssConstants.OPEN);
      this.generateLinkFromCurrentState({ target: this.textfield });
    }
  }, {
    key: "close",
    value: function close() {
      $(this.popup).removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
      $(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if ($(this.popup).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "generateLinkFromCurrentState",
    value: function generateLinkFromCurrentState(opt_options) {
      var options, proxy, mapView, parameters, link, center, baseLayerIdx, layerIdx, layers;

      options = opt_options || {};
      if (!options.paramCount || !(options.paramCount === 6 || options.paramCount === 2 || options.paramCount === 1)) {
        options.paramCount = 6;
      }

      parameters = [];
      mapView = this.config.mapController.map.getView();
      proxy = this.config.mapController.proxy;

      center = mapView.getCenter();
      center = ol.proj.transform([center[0], center[1]], 'EPSG:3857', 'EPSG:4326');

      parameters.push(+center[0].toFixed(5));
      parameters.push(+center[1].toFixed(5));
      parameters.push(mapView.getZoom());
      parameters.push(+mapView.getRotation().toFixed(2));

      // find active baselayer
      if (proxy.activeBaselayerId) {
        parameters.push(proxy.activeBaselayerId);
      } else {
        parameters.push(0);
      }

      // find active layers
      layers = [];
      for (layerIdx in proxy.activeLayerIds) {
        if (proxy.activeLayerIds.hasOwnProperty(layerIdx)) {
          layers.push(parseInt(layerIdx, 10));
        }
      }
      // delta-decode if there are more than one layer
      if (layers.length > 1) {
        layers = _c4gMapsUtils.utils.deltaEncode(layers);
        layers = layers.join(':');
      } else {
        layers = layers[0] || '0';
      }
      parameters.push(layers);
      parameters = parameters.join('/');

      // build link
      link = _c4gMapsUtils.utils.setUrlParam(parameters, this.config.getParameter);

      if (options.target) {
        options.target.value = link;
      } else {
        return link;
      }
    } // end of generateLinkFromCurrentState

  }, {
    key: "generateLink",
    value: function generateLink(parameters) {
      if (!parameters || !(parameters.length === 6 || parameters.length === 2 || parameters.length === 1)) {
        return false;
      }

      // build and return link
      return _c4gMapsUtils.utils.setUrlParam(parameters.join('/'), this.config.getParameter);
    } // end of generateLink


  }]);

  return Permalink;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-portside-account.js":
/*!******************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-account.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Account = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsControlSideboard = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Account = exports.Account = function (_Sideboard) {
  _inherits(Account, _Sideboard);

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */
  function Account(opt_options) {
    _classCallCheck(this, Account);

    // extend options
    var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, opt_options));

    _this.options = $.extend({
      className: _c4gMapsConstant.cssConstants.ACCOUNT,
      name: 'account',
      headline: _c4gMapsI18n.langConstants.ACCOUNT,
      create: true,
      mapController: undefined,
      direction: 'left'
    }, opt_options);

    if (!_this.options.mapController) {
      var _ret;

      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    _this.mainSection = document.createElement('div');

    // call parent constructor
    _c4gMapsControlSideboard.Sideboard.call(_this, _this.options);
    return _this;
  }

  _createClass(Account, [{
    key: "init",


    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    value: function init() {
      var self = this;

      this.spinner.show();

      this.viewAccount = this.addAccountView();
      this.viewAccount.activate();

      var proxy = self.options.mapController.proxy;
      var map = self.options.mapController.map;

      this.mainSectionAccount = document.createElement('p');
      this.mainSectionAccount.innerHTML = self.options.mapController.data.account;
      this.mainSection.appendChild(this.mainSectionAccount);
      this.contentContainer.setElement(this.mainSection);

      this.spinner.hide();
      return true;
    } // end of "init()"


  }, {
    key: "addAccountView",
    value: function addAccountView() {
      var accountView;

      accountView = this.addView({
        name: 'account',
        triggerConfig: {
          tipLabel: _c4gMapsI18n.langConstants.ACCOUNT_VIEW_TRIGGER,
          className: _c4gMapsConstant.cssConstants.ACCOUNT_VIEW_TRIGGER,
          withHeadline: false
        },
        sectionElements: [{ section: this.contentContainer, element: this.mainSection }, { section: this.topToolbar, element: this.viewTriggerBar }]
      });

      return accountView;
    } // end of "addAccountView()"

  }, {
    key: "addAccount",
    value: function addAccount(options) {
      var self, TRIGGER_ACCOUNT, viewAccount, source, interaction, features;

      self = this;

      //TRIGGER_ACCOUNT = 'ACCOUNT_VIEW_TRIGGER_' + options.type.toUpperCase();

      viewAccount = self.addAccount({
        name: 'Account',
        triggerConfig: {
          tipLabel: 'Account', //langConstants[TRIGGER_DRAW],
          className: 'c4g_account_trigger', //cssConstants[TRIGGER_DRAW]
          withHeadline: false
        },
        sectionElements: [{ section: self.topToolbar, element: self.viewTriggerBar }],
        initFunction: function initFunction() {

          // Show loading animation
          self.spinner.show();

          // printFunction = function (event) {
          //   var infoButton,
          //       featureGeometry,
          //       translateInteraction,
          //       modifyInteraction,
          //       modifyButton,
          //       applyButton;
          //
          //
          //     infoButton = event.target;
          //
          //   // add apply button
          //   applyButton = document.createElement('button');
          //   applyButton.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_APPLY;
          //   applyButton.title = langConstants.EDITOR_FEATURE_APPLY;
          //   applyButton.setAttribute('feat_id', i);
          //
          // }; // end of "modifyFeatureFunction()"

          features = new ol.Collection();

          self.spinner.hide();
          return true;
        },
        activateFunction: function activateFunction() {},
        deactivateFunction: function deactivateFunction() {}
      });

      return viewAccount;
    } // end of "addAccount()"

  }]);

  return Account;
}(_c4gMapsControlSideboard.Sideboard);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-portside-infopage.js":
/*!*******************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-infopage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Infopage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsControlSideboard = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Infopage = exports.Infopage = function (_Sideboard) {
  _inherits(Infopage, _Sideboard);

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */
  function Infopage(opt_options) {
    _classCallCheck(this, Infopage);

    // extend options
    var _this = _possibleConstructorReturn(this, (Infopage.__proto__ || Object.getPrototypeOf(Infopage)).call(this, opt_options));

    _this.options = $.extend({
      className: _c4gMapsConstant.cssConstants.INFOPAGE,
      name: 'infopage',
      headline: _c4gMapsI18n.langConstants.INFOPAGE,
      create: true,
      mapController: undefined,
      direction: 'left'
    }, opt_options);

    if (!_this.options.mapController) {
      var _ret;

      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    _this.mainSection = document.createElement('div');

    // call parent constructor
    _c4gMapsControlSideboard.Sideboard.call(_this, _this.options);
    return _this;
  }

  /**
   * Executed when the panel will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */


  _createClass(Infopage, [{
    key: "init",
    value: function init() {
      //var infoButton;
      var self = this;

      this.spinner.show();

      this.viewInfopage = this.addInfoView();
      this.viewInfopage.activate();

      var proxy = self.options.mapController.proxy;
      var map = self.options.mapController.map;

      this.mainSectionInfo = document.createElement('p');
      this.mainSectionInfo.innerHTML = self.options.mapController.data.infopage;
      this.mainSection.appendChild(this.mainSectionInfo);
      this.contentContainer.setElement(this.mainSection);

      this.spinner.hide();
      return true;
    } // end of "init()"


  }, {
    key: "addInfoView",
    value: function addInfoView() {
      var infoView;

      infoView = this.addView({
        name: 'info',
        triggerConfig: {
          tipLabel: _c4gMapsI18n.langConstants.INFOPAGE_VIEW_TRIGGER,
          className: _c4gMapsConstant.cssConstants.INFOPAGE_VIEW_TRIGGER,
          withHeadline: false
        },
        sectionElements: [{ section: this.contentContainer, element: this.mainSection }, { section: this.topToolbar, element: this.viewTriggerBar }]
      });

      return infoView;
    } // end of "addInfoView()"

  }, {
    key: "addInfopage",
    value: function addInfopage(options) {
      var self, TRIGGER_INFOPAGE, viewInfopage, source, interaction, features;

      self = this;

      //TRIGGER_INFOPAGE = 'INFOPAGE_VIEW_TRIGGER_' + options.type.toUpperCase();

      viewInfopage = self.addInfopage({
        name: 'Infopage',
        triggerConfig: {
          tipLabel: 'Infopage', //langConstants[TRIGGER_DRAW],
          className: 'c4g_infopage_trigger', //cssConstants[TRIGGER_DRAW]
          withHeadline: false
        },
        sectionElements: [{ section: self.topToolbar, element: self.viewTriggerBar }],
        initFunction: function initFunction() {

          // Show loading animation
          self.spinner.show();

          // printFunction = function (event) {
          //   var infoButton,
          //       featureGeometry,
          //       translateInteraction,
          //       modifyInteraction,
          //       modifyButton,
          //       applyButton;
          //
          //
          //     infoButton = event.target;
          //
          //   // add apply button
          //   applyButton = document.createElement('button');
          //   applyButton.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_APPLY;
          //   applyButton.title = langConstants.EDITOR_FEATURE_APPLY;
          //   applyButton.setAttribute('feat_id', i);
          //
          // }; // end of "modifyFeatureFunction()"

          features = new ol.Collection();

          self.spinner.hide();
          return true;
        },
        activateFunction: function activateFunction() {},
        deactivateFunction: function deactivateFunction() {}
      });

      return viewInfopage;
    } // end of "addInfopage()"

  }]);

  return Infopage;
}(_c4gMapsControlSideboard.Sideboard);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-portside-measuretools.js":
/*!***********************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-portside-measuretools.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Measuretools = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsControlSideboard = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ./c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Measuretools = exports.Measuretools = function (_Sideboard) {
  _inherits(Measuretools, _Sideboard);

  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */
  function Measuretools(opt_options) {
    _classCallCheck(this, Measuretools);

    // extend options
    var _this = _possibleConstructorReturn(this, (Measuretools.__proto__ || Object.getPrototypeOf(Measuretools)).call(this, opt_options));

    _this.options = $.extend({
      name: 'measure',
      headline: _c4gMapsI18n.langConstants.MEASURETOOLS,
      create: true,
      mapController: undefined,
      direction: 'left',
      firstElement: true
    }, opt_options);

    _this.mainSection = document.createElement('div');
    // call parent constructor
    _c4gMapsControlSideboard.Sideboard.call(_this, _this.options);
    return _this;
  }

  /**
   * Methods
   */

  /**
   * Executed when the panel will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */


  _createClass(Measuretools, [{
    key: "init",
    value: function init() {

      this.spinner.show();

      // Add measure layers
      this.measureLineLayer = new ol.layer.Vector({ source: new ol.source.Vector() });
      this.measurePolygonLayer = new ol.layer.Vector({ source: new ol.source.Vector() });
      this.measureCircleLayer = new ol.layer.Vector({ source: new ol.source.Vector() });
      this.measureFreehandLayer = new ol.layer.Vector({ source: new ol.source.Vector() });

      this.measureLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([this.measureFreehandLayer, this.measureCircleLayer, this.measurePolygonLayer, this.measureLineLayer]),
        visible: true
      });
      this.options.mapController.map.addLayer(this.measureLayerGroup);

      // Add and activate measure-Views
      this.viewMeasureSelect = this.addSelectView();
      this.viewMeasureSelect.activate();
      this.viewMeasureLine = this.addMeasureView({ type: 'LineString' });
      this.viewMeasureArea = this.addMeasureView({ type: 'Polygon' });
      this.viewMeasureRadius = this.addMeasureView({ type: 'Circle' });
      this.viewMeasureFreehand = this.addMeasureView({ type: 'Freehand' });

      // set content-section
      this.mainSectionInfo = document.createElement('p');
      this.mainSectionInfo.innerHTML = _c4gMapsI18n.langConstants.MEASURETOOLS_INFO;
      this.mainSectionInfo.innerHTML += '<br><br><sub>' + _c4gMapsI18n.langConstants.MEASURETOOLS_INFO_ADDITIONAL + '<sub>';
      this.mainSection.appendChild(this.mainSectionInfo);
      this.contentContainer.appendChild(this.mainSection);

      this.spinner.hide();
      return true;
    } // end of "init()"

    /**
     * Executed before panel will be closed
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "preCloseFunction",
    value: function preCloseFunction() {
      var lineFeatures, polygonFeatures, circleFeatures, freehandFeatures, i;

      if (this.measureLayerGroup.getVisible()) {
        this.measureLayerGroup.setVisible(false);

        // hide line-feature tooltips
        lineFeatures = this.measureLineLayer.getSource().getFeatures();
        for (i = 0; i < lineFeatures.length; i += 1) {
          lineFeatures[i].get('tooltip').hide();
        }
        // hide polygon-feature tooltips
        polygonFeatures = this.measurePolygonLayer.getSource().getFeatures();
        for (i = 0; i < polygonFeatures.length; i += 1) {
          polygonFeatures[i].get('tooltip').hide();
        }
        // hide circle-feature tooltips
        circleFeatures = this.measureCircleLayer.getSource().getFeatures();
        for (i = 0; i < circleFeatures.length; i += 1) {
          circleFeatures[i].get('tooltip').hide();
        }
        // hide freehand-feature tooltips
        freehandFeatures = this.measureFreehandLayer.getSource().getFeatures();
        for (i = 0; i < freehandFeatures.length; i += 1) {
          freehandFeatures[i].get('tooltip').hide();
        }
      }
    } // end of "preCloseFunction()"

    /**
     * Executed before panel will be opened
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "preOpenFunction",
    value: function preOpenFunction() {
      var lineFeatures, polygonFeatures, circleFeatures, freehandFeatures, i;

      if (!this.measureLayerGroup.getVisible()) {
        this.measureLayerGroup.setVisible(true);

        // show line-feature tooltips
        lineFeatures = this.measureLineLayer.getSource().getFeatures();
        for (i = 0; i < lineFeatures.length; i += 1) {
          lineFeatures[i].get('tooltip').show();
        }
        // show polygon-feature tooltips
        polygonFeatures = this.measurePolygonLayer.getSource().getFeatures();
        for (i = 0; i < polygonFeatures.length; i += 1) {
          polygonFeatures[i].get('tooltip').show();
        }
        // show circle-feature tooltips
        circleFeatures = this.measureCircleLayer.getSource().getFeatures();
        for (i = 0; i < circleFeatures.length; i += 1) {
          circleFeatures[i].get('tooltip').show();
        }
        // show freehand-feature tooltips
        freehandFeatures = this.measureFreehandLayer.getSource().getFeatures();
        for (i = 0; i < freehandFeatures.length; i += 1) {
          freehandFeatures[i].get('tooltip').show();
        }
      }
    } // end of "preOpenFunction()"

    /**
     * @TODO: [addSelectView description]
     */

  }, {
    key: "addSelectView",
    value: function addSelectView() {
      var selectView;

      selectView = this.addView({
        name: 'select',
        triggerConfig: {
          tipLabel: _c4gMapsI18n.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
          className: _c4gMapsConstant.cssConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
          withHeadline: true
        },
        sectionElements: [{ section: this.contentContainer, element: this.mainSection }, { section: this.topToolbar, element: this.viewTriggerBar }]
      });

      return selectView;
    } // end of "addSelectView()"

    /**
     * @TODO: [addMeasureView description]
     *
     * @param  {[type]}  options  [description]
     */

  }, {
    key: "addMeasureView",
    value: function addMeasureView(options) {
      var self, TRIGGER_DRAW, measureView, source, interaction, features, olType;

      self = this;

      options = $.extend({
        type: 'LineString'
      }, options);

      TRIGGER_DRAW = 'MEASURETOOLS_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();

      measureView = self.addView({
        name: 'draw:' + options.type.toLowerCase(),
        triggerConfig: {
          tipLabel: _c4gMapsI18n.langConstants[TRIGGER_DRAW],
          className: _c4gMapsConstant.cssConstants[TRIGGER_DRAW],
          withHeadline: true
        },
        sectionElements: [{ section: self.topToolbar, element: self.viewTriggerBar }],
        initFunction: function initFunction() {
          var featureIdCount, activeSketch, activeTooltip, addMeasureFeature, updateMeasureFeature, getValueOfGeometry, getLengthOfMeasure, removeMeasureFeature;

          // Show loading animation
          self.spinner.show();

          featureIdCount = 1;

          if (options.type.toLowerCase() === 'freehand') {
            source = self.measureFreehandLayer.getSource();
          } else if (options.type.toLowerCase() === 'circle') {
            source = self.measureCircleLayer.getSource();
          } else if (options.type.toLowerCase() === 'polygon') {
            source = self.measurePolygonLayer.getSource();
          } else {
            source = self.measureLineLayer.getSource();
          }

          features = new ol.Collection();

          olType = options.type;
          if (olType == 'Freehand') {
            olType = 'LineString';
          }
          interaction = new ol.interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: options.type == 'Freehand'
            // @TODO: use custom style? (BE-option)
            // style: use default style
          });

          addMeasureFeature = function addMeasureFeature(feature) {
            var listElement, headlineElement, labelElement, inputElement, paragraphElement, strongElement, spanElement, strLabel, strType, measureArea, measureRadius;

            if (!feature instanceof ol.Feature) {
              return false;
            }

            // check if the infomessage needs to be removed
            if (self.mainSection.childElementCount === 1 && self.mainSection.children[0] === self.mainSectionInfo) {
              self.mainSection.removeChild(self.mainSectionInfo);
            }

            // check feature-type
            if (feature.getGeometry() instanceof ol.geom.LineString) {
              strLabel = _c4gMapsI18n.langConstants.LENGTH;
              strType = _c4gMapsI18n.langConstants.LINE;
              measureArea = false;
              measureRadius = false;
            } else if (feature.getGeometry() instanceof ol.geom.Polygon) {
              strLabel = _c4gMapsI18n.langConstants.PERIMETER;
              strType = _c4gMapsI18n.langConstants.POLYGON;
              measureArea = true;
              measureRadius = false;
            } else if (feature.getGeometry() instanceof ol.geom.Circle) {
              strLabel = _c4gMapsI18n.langConstants.RADIUS;
              strType = _c4gMapsI18n.langConstants.CIRCLE;
              measureArea = true;
              measureRadius = true;
            } else {
              //freehand ist LineString too
              strLabel = _c4gMapsI18n.langConstants.LENGTH;
              strType = _c4gMapsI18n.langConstants.FREEHAND;
              measureArea = false;
              measureRadius = false;
            }

            // create list element
            listElement = document.createElement('div');

            // create and append headline
            headlineElement = document.createElement('div');
            headlineElement.className = 'c4g_maps_portside_measure_element';
            if (self.options.firstElement) {
              headlineElement.className = 'c4g_maps_portside_measure_element c4g_maps_portside_measure_element_first';
              self.options.firstElement = false;
            }
            listElement.appendChild(headlineElement);

            // create and append label for name-inputfield
            labelElement = document.createElement('label');
            labelElement.setAttribute('for', 'measureElement_' + featureIdCount);
            labelElement.innerHTML = _c4gMapsI18n.langConstants.NAME + ': ';
            headlineElement.appendChild(labelElement);

            // create and append name-inputfield
            inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.name = 'measureElement_' + featureIdCount;
            inputElement.value = strType + ' ' + featureIdCount;
            // attach-change-handler
            $(inputElement).change(function (event) {
              updateMeasureFeature(feature);
            });
            headlineElement.appendChild(inputElement);
            feature.set('listElementValueName', inputElement);

            // create and append paragraphs
            paragraphElement = document.createElement('p');
            paragraphElement.className = 'c4g_maps_portside_measure_paragraph';
            strongElement = document.createElement('strong');
            strongElement.innerHTML = strLabel + ': ';
            paragraphElement.appendChild(strongElement);
            spanElement = document.createElement('span');
            spanElement.innerHTML = '...';
            paragraphElement.appendChild(spanElement);
            listElement.appendChild(paragraphElement);
            feature.set('listElementValueLine', spanElement);

            if (measureArea) {
              paragraphElement = document.createElement('p');
              paragraphElement.className = 'c4g_maps_portside_measure_paragraph_surfacearea';
              strongElement = document.createElement('strong');
              strongElement.innerHTML = _c4gMapsI18n.langConstants.SURFACEAREA + ': ';
              paragraphElement.appendChild(strongElement);
              spanElement = document.createElement('span');
              spanElement.innerHTML = '...';
              paragraphElement.appendChild(spanElement);
              listElement.appendChild(paragraphElement);
              feature.set('listElementValueArea', spanElement);
            }

            if (measureRadius) {
              // paragraphElement = document.createElement('p');
              // paragraphElement.className = 'c4g_maps_portside_measure_paragraph_surfacearea';
              // strongElement = document.createElement('strong');
              // strongElement.innerHTML = langConstants.SURFACEAREA + ': ';
              // paragraphElement.appendChild(strongElement);
              // spanElement = document.createElement('span');
              // spanElement.innerHTML = '...';
              // paragraphElement.appendChild(spanElement);
              // listElement.appendChild(paragraphElement);
              feature.set('listElementValueRadius', spanElement);
            }

            // increase the id-counter
            featureIdCount += 1;

            // append element to the list
            self.mainSection.appendChild(listElement);
            // attach element to the feature
            feature.set('listElement', listElement);

            self.update();
          }; // end of "addMeasureFeature()"

          updateMeasureFeature = function updateMeasureFeature(feature) {
            var featureTooltip, newContent, name, length, area, radius;

            featureTooltip = feature.get('tooltip');
            name = feature.get('listElementValueName').value;
            length = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            newContent = '<strong>' + name + '</strong><br>';

            feature.set('measuredLength', length);
            feature.get('listElementValueLine').innerHTML = length.htmlValue;
            if (feature.get('geometryType') === 'circle') {
              radius = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry());
              feature.set('measuredRadius', radius);
              feature.get('listElementValueRadius').innerHTML = radius.htmlValue;
              newContent += radius.htmlValue;

              area = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), false, true);
              feature.set('measuredArea', area);
              feature.get('listElementValueArea').innerHTML = area.htmlValue;
              // newContent += area.htmlValue;
            } else if (feature.get('geometryType') === 'polygon') {
              area = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry());
              feature.set('measuredArea', area);
              feature.get('listElementValueArea').innerHTML = area.htmlValue;
              newContent += area.htmlValue;
            } else {
              newContent += length.htmlValue;
            }
            featureTooltip.setContent(newContent);
          }; // end of "updateMeasureFeature()"

          removeMeasureFeature = function removeMeasureFeature(feature) {
            self.mainSection.removeChild(feature.get('listElement'));

            // last element? -> add infomessage
            if (self.mainSection.childElementCount < 1) {
              self.mainSection.appendChild(self.mainSectionInfo);
              self.update();
            }
          }; // end of "removeMeasureFeature()"

          //Start Workaround
          getValueOfGeometry = function getValueOfGeometry(feature) {
            var leng = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            // feature.set('measuredLength', length);
            var val = leng.htmlValue;
            var valuenumb = val.match(/\d/g);
            valuenumb = valuenumb.join("");
            return valuenumb;
          };

          getLengthOfMeasure = function getLengthOfMeasure() {
            var length = '0.00 m';
            var lengthnumb = length.match(/\d/g);
            lengthnumb = lengthnumb.join("");
            lengthnumb = +8;
            return lengthnumb;
          }; // End Workaround

          interaction.on('drawstart', function (event) {
            activeSketch = event.feature;
            // create tooltip
            activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
              map: self.options.mapController.map,
              position: event.coordinate,
              horizontal: true,
              closeable: true,
              closeFunction: function closeFunction() {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();
                if (val != leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  source.removeFeature(event.feature);
                } else {
                  removeMeasureFeature(event.feature);
                }
              }
            });

            activeSketch.set('tooltip', activeTooltip);
            activeSketch.set('geometryType', options.type.toLowerCase());
            addMeasureFeature(activeSketch);
          }, self);

          self.options.mapController.map.on('pointermove', function (event) {
            if (activeSketch && activeTooltip) {
              activeTooltip.setPosition(event.coordinate);
              updateMeasureFeature(activeSketch);
            }
          }, self);

          interaction.on('drawend', function (event) {
            if (activeSketch && activeTooltip) {
              updateMeasureFeature(activeSketch);
              activeSketch = null;
              activeTooltip = null;
            }
          }, self);

          self.spinner.hide();
          return true;
        },
        activateFunction: function activateFunction() {

          // disable mapHover
          self.options.mapController.mapHover.deactivate();

          features.clear();

          // Enable interaction
          self.options.mapController.map.addInteraction(interaction);
        },
        deactivateFunction: function deactivateFunction() {

          // reactivate mapHover
          self.options.mapController.mapHover.activate();

          if (options.type.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {
              // 0_o
            }
          }

          // Remove from map
          self.options.mapController.map.removeInteraction(interaction);
        }
      });

      return measureView;
    } // end of "addMeasureView()"

  }]);

  return Measuretools;
}(_c4gMapsControlSideboard.Sideboard);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-position.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-position.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position = undefined;

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Position = exports.Position = function (_ol$control$Control) {
  _inherits(Position, _ol$control$Control);

  /**
   * Control to toggle the browser/device position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  function Position(opt_options) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, opt_options));

    var self = _this;
    var options = opt_options || {};

    var element, button;

    // default options
    options = $.extend({
      className: _c4gMapsConstant.cssConstants.OL_ZOOM_POS,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      var _ret;

      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var enable = function enable() {
      $(element).addClass(_c4gMapsConstant.cssConstants.ENABLED);
    };

    var disable = function disable() {
      $(element).removeClass(_c4gMapsConstant.cssConstants.ENABLED);
    };

    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();

      var geoLocation = new ol.Geolocation({
        tracking: true,
        projection: view.getProjection()
      });

      geoLocation.on('change', function (evt) {
        view.setCenter(geoLocation.getPosition());
        // if (mapData.geolocation_zoom) {
        //    view.setZoom(mapData.geolocation_zoom);
        // } else {
        view.setZoom(18);
        //}
        geoLocation.setTracking(false);
        options.mapController.map.setView(view);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' button';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });
    ol.inherits(Position, ol.control.Control);
    return _this;
  }

  return Position;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-print.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-print.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Print = undefined;

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Print = exports.Print = function (_ol$control$Control) {
  _inherits(Print, _ol$control$Control);

  /**
   * Control to toggle the browser/desvice position on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  function Print(opt_options) {
    _classCallCheck(this, Print);

    var _this = _possibleConstructorReturn(this, (Print.__proto__ || Object.getPrototypeOf(Print)).call(this, opt_options));

    var self = _this;
    var options = opt_options || {};

    var element, button;

    // default options
    options = $.extend({
      className: _c4gMapsConstant.cssConstants.PRINT,
      switchable: true,
      enabled: true,
      mapController: undefined
    }, options);

    if (!options.mapController) {
      var _ret;

      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    var view = options.mapController.map.getView();
    var mapData = options.mapController.data;

    var toggle = function toggle(event) {
      event.stopPropagation();
      var canvas = document.getElementsByClassName("ol-unselectable")[0];

      canvas.toBlob(function (blob) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'map.png';
        a.click();
        window.URL.revokeObjectURL(url);
      });
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' c4g-portside-control ol-control';

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      button.className = _c4gMapsConstant.cssConstants.PRINT;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });
    return _this;
  }

  return Print;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-sideboard.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-sideboard.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sideboard = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";
/**
 * Base class for sideboard structures. Provides standard configurations which are equal for each sideboard element.
 */

var Sideboard = exports.Sideboard = function (_ol$control$Control) {
  _inherits(Sideboard, _ol$control$Control);

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              options  misc configuration options
   *
   */
  function Sideboard(options) {
    _classCallCheck(this, Sideboard);

    var _this = _possibleConstructorReturn(this, (Sideboard.__proto__ || Object.getPrototypeOf(Sideboard)).call(this, options));

    _this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'sideboard',
      direction: 'right'
    }, options);

    //active Identifier (which side is this element on?)
    //cssname needed to set the css class correctly
    switch (_this.options.direction) {
      case 'left':
        _this.identifier = 'Portside';
        _this.cssname = 'portside';
        break;
      case 'right':
        _this.identifier = 'Starboard';
        _this.cssname = 'starboard';
        break;
    }
    //this.cssname = this.identifier.charAt(0).toLowerCase() + this.identifier.slice(1);
    _this.initialized = false;
    _this.options.tipLabel = _this.options.tipLabel || _this.options.headline || _c4gMapsI18n.langConstants.CTRL_SIDEBOARD;
    _this.container = document.createElement('div');
    _this.element = document.createElement('div');
    _this.button = undefined;
    _this.spinner = undefined;
    // mainstructure elements
    _this.wrapper = undefined;
    _this.titleBar = undefined;
    _this.headline = undefined;
    _this.topToolbar = undefined;
    _this.contentContainer = undefined;
    _this.bottomToolbar = undefined;
    _this.statusBar = undefined;

    _this.sections = [];
    _this.viewTriggerBar = undefined;
    _this.views = [];
    _this.activeView = undefined;
    _this.pausedView = undefined;

    if (_this.options.create && _this.options.mapController) {
      _this.create();
    }

    // inheritance-stuff
    // ol.control.Control.call(this, {
    //   element: element,
    //   target: options.target
    // });
    return _this;
  }

  _createClass(Sideboard, [{
    key: "create",


    /**
     * Creates the basic html-elements for the sideboard
     *
     * @return  {boolean}  'true' on success
     */
    value: function create() {
      var self, initClass, titleButtonBar, closeButton, capitalizedName, hideButton, caching;

      caching = this.options.caching;
      capitalizedName = _c4gMapsUtils.utils.capitalizeFirstLetter(this.options.name);
      self = this;

      // Do not hide when it is initialized open, or in an external div
      if (this.options.extDiv) {
        initClass = ' ' + _c4gMapsConstant.cssConstants.OPEN;
        // if (caching) {
        //     utils.storeValue(this.options.name, '1');
        // }
      } else {
        initClass = ' ' + _c4gMapsConstant.cssConstants.CLOSE;
        // if (caching) {
        //     utils.storeValue(this.options.name, '0');
        // }
        this.options.mapController["active" + this.identifier] = this.options.mapController["active" + this.identifier] || false;

        this.button = document.createElement('button');
        $(this.button).on('click', function (event) {
          event.stopPropagation();
          // loose focus, otherwise it looks messy
          try {
            this.blur();
          } catch (e) {
            // [note] "this.blur()" does not work in IE-fullscreen-mode
            console.warn(e.name + ': ' + e.message);
          }
          if (capitalizedName == "Router" || capitalizedName == "Measure" || capitalizedName == "Editor") {
            self.toggle(true);
          } else {
            self.toggle();
          }
        });
        this.button.title = this.options.tipLabel;
        this.element.appendChild(this.button);
      }

      // Set attributes
      $(this.container).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-container' + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + initClass);
      $(this.element).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-control' + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + initClass);

      // Set initial dimensions
      if (this.options.direction === 'right') {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      } else {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      }

      // Place container
      if (this.options.extDiv) {
        document.getElementById(this.options.extDiv).appendChild(this.container);
        //     this.options.mapController["active" + this.identifier] = this;
      } else {
        if (this.options.direction === 'left') {
          $('#' + this.options.mapController.map.getTarget() + ' > div > div.' + _c4gMapsConstant.cssConstants.OL_OVERLAYCONTAINER_SE).append(this.container);
        } else {
          this.options.mapController.$overlaycontainer_stopevent.append(this.container);
        }
      }

      // Build content-area
      //
      // Wrapper
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'c4g-' + this.cssname + '-wrapper';
      this.container.appendChild(this.wrapper);
      // Titlebar
      this.titleBar = document.createElement('div');
      this.titleBar.className = 'c4g-' + this.cssname + '-titlebar';
      this.wrapper.appendChild(this.titleBar);

      // Triggerbar
      this.viewTriggerBar = document.createElement('div');
      this.viewTriggerBar.className = 'c4g-' + this.cssname + '-viewtriggerbar';

      // Top-Toolbar
      this.topToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-top-toolbar',
        target: this.wrapper
      });

      // Content-Container
      this.contentContainer = this.addSection({
        className: 'c4g-' + this.cssname + '-content-container',
        target: this.wrapper
      });

      // add content headline
      this.contentHeadline = document.createElement('div');
      this.contentHeadline.className = 'contentHeadline';
      this.contentHeadline.innerHTML = '';
      this.contentContainer.appendChild(this.contentHeadline);

      // Bottom-Toolbar
      this.bottomToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-bottom-toolbar c4g-close',
        target: this.wrapper
      });

      // Statusbar
      this.statusBar = document.createElement('div');
      this.statusBar.className = 'c4g-' + this.cssname + '-statusbar c4g-close';
      this.wrapper.appendChild(this.statusBar);

      // Add spinner
      this.spinner = new _c4gMapsMiscSpinner.Spinner({
        target: this.contentContainer,
        className: _c4gMapsConstant.cssConstants.LARGE
      });

      // Fill titlebar
      //
      // Headline
      this.headline = document.createElement('span');
      this.headline.className = 'c4g-' + this.cssname + '-headline';
      this.headline.innerHTML = this.options.headline;
      this.titleBar.appendChild(this.headline);
      // Buttonbar
      titleButtonBar = document.createElement('div');
      titleButtonBar.className = _c4gMapsConstant.cssConstants.CONTROL + ' ' + 'c4g-' + this.cssname + '-buttonbar';
      this.titleBar.appendChild(titleButtonBar);

      if (this.options.direction === 'left') {
        // Hidebutton
        hideButton = document.createElement('button');
        hideButton.className = _c4gMapsConstant.cssConstants.PORTSIDE_HIDE;
        hideButton.title = _c4gMapsI18n.langConstants.HIDE;
        $(hideButton).click(function (event) {
          event.preventDefault();
          self.close(true);
          return false;
        });
        titleButtonBar.appendChild(hideButton);
      }

      // Closebutton
      closeButton = document.createElement('button');
      closeButton.className = 'c4g-' + this.cssname + '-close';
      closeButton.title = _c4gMapsI18n.langConstants.CLOSE;
      $(closeButton).click(function (event) {
        event.preventDefault();
        self.close();
        return false;
      });
      titleButtonBar.appendChild(closeButton);

      //Add spinner for left sided sideboard elements
      this.spinner = new _c4gMapsMiscSpinner.Spinner({
        target: this.contentContainer,
        className: _c4gMapsConstant.cssConstants.LARGE
      });

      // Handle external DIV and default state
      // catch touch events and stop their propagation
      // otherwise touch-scrolling will be stopped by ol3
      $(this.container).on('touchstart touchmove touchend', function (event) {
        event.stopPropagation();
      });

      // Bind the update method to the map-resize event
      this.options.mapController.map.on('change:size', this.update, this);

      // Show open if desired
      if (this.options.defaultOpen || this.options.caching && _c4gMapsUtils.utils.getValue(this.options.name) == '1') {
        this.open();
      }

      return true;
    } // end of "create"

    /**
     *   Update the sideboards html-elements
     *   resizes the content-container
     *   and the top-toolbar
     *
     * @param  {event-object}  opt_event  *optional*  Just needed by the ol-bind-method,
     *                                                but not used in the function
     */

  }, {
    key: "update",
    value: function update(opt_event) {

      var self, contentContainerOuterHeight, containerOffsetWidth;

      self = this;

      /*
      if (this.options && this.options.name) {
          capitalizedName = utils.capitalizeFirstLetter(this.options.name);
      }*/

      contentContainerOuterHeight = $(this.wrapper).height() - ($(this.titleBar).outerHeight(true) + $(this.statusBar).outerHeight(true));
      if (this.options && this.options.direction && this.options.direction != "undefined" && this.options.direction === 'left') {
        if (this !== this.options.mapController["active" + this.identifier]) {
          containerOffsetWidth = 0;
        }
      }

      // Top-Toolbar
      if (this.topToolbar) {
        if (this.topToolbar.innerHTML) {
          // this.topToolbar.style.display = 'block';
          this.topToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.topToolbar).outerHeight(true);
        } else {
          this.topToolbar.style.display = 'none';
        }
      }

      // Bottom-toolbar
      if (this.bottomToolbar) {
        if (this.bottomToolbar.innerHTML) {
          // this.bottomToolbar.style.display = 'block';
          this.bottomToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.bottomToolbar).outerHeight(true);
        } else {
          this.bottomToolbar.style.display = 'none';
        }
      }

      // Content-container
      $(this.contentContainer).outerHeight(contentContainerOuterHeight);

      // Correct width
      if (this.options) {
        if (this.options.mapController["active" + this.identifier] === this) {
          //this.container.style.width = 'auto';
          containerOffsetWidth = this.container.offsetWidth;
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });

          //only move the toggle button on starboard elements
          if (this.options.direction === 'right') {
            $(this.element).css(this.options.direction, containerOffsetWidth);
          }
        }
      }
    } // end of "update"

    /**
     * Opens this sideboard element
     *
     * @param   {object}    *optional* options to be passed to the initialize-function if it exists
     * @return  {boolean}  'true' an success
     */

  }, {
    key: "open",
    value: function open(opt_options) {
      var containerOffsetWidth, self;

      self = this;

      // Call initialize-functions, if existent
      if (!this.initialized) {
        if (typeof this.init === 'function') {
          this.initialized = this.init(opt_options);
        } else {
          this.initialized = true;
        }
      }

      // call preOpenFunctions
      if (typeof this.preOpenFunction === 'function') {
        this.preOpenFunction();
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier]) {
          if (this.options.mapController["active" + this.identifier] === this) {
            return false;
          }
          //close other active sideboard on this side
          this.options.mapController["active" + this.identifier].close(true, true);
        } else {
          // slide other elements when no other sideboard was active on this side
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });
        }

        $(this.container).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN).css(this.options.direction, 0);
        if (this.options.direction === 'left') {
          $(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        } else {
          $(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN).css(this.options.direction, containerOffsetWidth);
        }

        // set this as active Sideboard
        this.options.mapController["active" + this.identifier] = this;

        // check if a view needs to be reactivated
        if (this.activeView) {
          this.activeView.activate();
        }

        if ($(this.statusBar).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
          $(this.statusBar).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        }

        if ($(this.bottomToolbar).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
          $(this.bottomToolbar).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        }

        // show container to fix resizing issue
        $(this.container).css('visibility', 'visible');

        this.update();
        if (this.options.caching) {
          _c4gMapsUtils.utils.storeValue(this.options.name, '1');
        }

        // call postOpenFunctions
        if (typeof this.postOpenFunction === 'function') {
          this.postOpenFunction();
        }

        return true;
      }
      return false;
    } // end of "open"

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.options.mapController["active" + this.identifier] && this.options.mapController["active" + this.identifier] === this;
    }

    /**
     * Closes this sideboard element
     *
     * @param   {boolean}  opt_hide               *optional* Choose if this function should trigger |preHideFunction|
     *                                            instead of |preCloseFunction|. Default is |false|.
     * @param   {boolean}  opt_openOtherSideboard  *optional* Indicates if another sideboard element will be opened instead.
     *                                            Default is |false|.
     *
     * @return  {boolean}                         |true| on success.
     */

  }, {
    key: "close",
    value: function close(opt_hide, opt_openOtherSideboard) {
      var containerOffsetWidth, direction;

      direction = this.options.direction;

      if (opt_hide) {
        if (typeof this.preHideFunction === 'function') {
          this.preHideFunction();
        }
      } else {
        if (typeof this.preCloseFunction === 'function') {
          this.preCloseFunction();
        }
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier] !== this) {
          console.warn('This ' + this.options.name + '-element (' + this.options.name + ') is already closed.');
          return false;
        }
        $(this.container).removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE).css(direction, -containerOffsetWidth);
        $(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE).css(direction, 0);

        if (!opt_openOtherSideboard) {
          // slide other elements
          this.options.mapController[direction + "SlideElements"].forEach(function (element) {
            $(element).css(direction, 0);
          });
        }

        // hide container to fix resizing issue
        $(this.container).css('visibility', 'hidden');

        // check if a view needs to be deactivated
        if (this.activeView) {
          this.activeView.deactivate(true);
        }

        // Remove active Sideboardentry
        this.options.mapController["active" + this.identifier] = false;

        if (this.options.caching) {
          _c4gMapsUtils.utils.storeValue(this.options.name, '0');
        }
        return true;
      }
      return false;
    } // end of "close"

    /**
     * Toggle this sideboard element
     *
     * @return  {boolean}  Returns |true| on success.
     */

  }, {
    key: "toggle",
    value: function toggle(opt_hide) {
      if (this.options.mapController["active" + this.identifier] === this) {
        return this.close(opt_hide);
      }
      return this.open();
    } // end of "toggle"

    /**
     * Creates a button which characteristics are defined by the options parameter
     * These options include e.g. the target container where the button will be appended and the click action of the button
     *
     * @param   {object}  opt_options  The button configuration
     *
     * @return  {[type]}           [description]
     */

  }, {
    key: "makeButton",
    value: function makeButton(opt_options) {

      var options, button;

      options = $.extend({
        label: undefined,
        tipLabel: undefined,
        className: '',
        target: undefined,
        clickAction: undefined
      }, opt_options);

      if (options.className) {
        options.className = ' ' + options.className;
      }

      button = document.createElement('button');
      button.className = 'c4g-' + this.options.name + '-button' + options.className;
      if (options.id) {
        button.id = options.id;
      }

      if (typeof options.tipLabel === 'string') {
        button.title = options.tipLabel;
      }

      if (typeof options.label === 'string') {
        button.innerHTML = options.label;
      } else if (_typeof(options.label) === 'object') {
        button.appendChild(options.label);
      }

      if (typeof options.clickAction === 'function') {
        $(button).click(function () {
          try {
            this.blur();
          } catch (e) {
            console.warn(e.message);
          }
          options.clickAction();
        });
      }

      if (options.target) {
        $(options.target).append(button);
      }

      return button;
    } // end of "makeButton"

    /**
     * @TODO
     * [addSection description]
     *
     * @param  {[type]}  opt_options  [description]
     */

  }, {
    key: "addSection",
    value: function addSection(opt_options) {

      var options, section, element;

      options = $.extend({
        type: 'div',
        className: '',
        target: undefined
      }, opt_options);

      // try to create the new section
      try {
        section = document.createElement(options.type);
      } catch (e) {
        console.warn('Cannot create section. "' + options.type + ' is not a valid HTML-node.');
        return false;
      }

      section.className = options.className;

      // try to append the section to the given target
      if (options.target) {
        try {
          options.target.appendChild(section);
        } catch (e) {
          console.warn(e.message);
        }
      }

      section.getElement = function () {
        return element || false;
      };

      section.setElement = function (newElement) {
        if (newElement && (typeof newElement === "undefined" ? "undefined" : _typeof(newElement)) === 'object') {
          if (!(element && element === newElement)) {
            if (element) {
              this.removeChild(element);
            }
            this.appendChild(newElement);
            element = newElement;
          }
        }
      };

      // add to sections-array
      this.sections.push(section);
      return section;
    } // end of "addSection"

    /**
     * @TODO
     * [addView description]
     *
     * @param  {[type]}  options  [description]
     */

  }, {
    key: "addView",
    value: function addView(options, opt_viewScope) {

      var self, viewScope, additionalTriggerClass, trigger, view;

      self = this;
      viewScope = opt_viewScope || this;

      options = $.extend({
        // name: undefined,
        triggerConfig: undefined, // @TODO doku format: {opt_target: [string|htmlObject], opt_className: [string], opt_tipLabel: [string]}
        sectionElements: [], // @TODO doku format: [{section: [sectionObject], element: [elementObject]}]
        initFunction: undefined,
        activateFunction: undefined,
        deactivateFunction: undefined
      }, options);

      if (typeof options.name !== 'string') {
        console.warn('Cannot add a view without a name (of type "string").');
        return false;
      }

      view = {};

      view.initialized = false;
      view.paused = false;

      view.activate = function (opt_openSideboard) {
        var i;

        if (options.triggerConfig.withHeadline) {
          self.contentHeadline.innerHTML = options.triggerConfig.tipLabel;
        }

        // open Sideboard if closed
        if (opt_openSideboard && !self.isOpen()) {
          self.open();
        }

        // Deactivate current activeView, if existent
        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView !== view) {
          viewScope.activeView.deactivate();
        }
        viewScope.activeView = view;

        // Handle sub-views
        if (view.activeView) {
          view.activeView.activate();
        }

        // Call initialize-functions, if existent
        if (!view.initialized) {
          if (typeof options.initFunction === 'function') {
            view.initialized = options.initFunction();
          } else {
            view.initialized = true;
          }
        }

        // Display elements in given sections
        if (options.sectionElements && options.sectionElements.length > 0) {
          for (i = 0; i < options.sectionElements.length; i += 1) {
            options.sectionElements[i].section.setElement(options.sectionElements[i].element);
          }
        }

        // Change trigger-state, if existent
        if (trigger) {
          $(trigger).addClass('c4g-active');
        }

        // Call activate function, if existent
        if (typeof options.activateFunction === 'function') {
          if (!options.activateFunction(view.paused)) {
            return false;
          }
        }

        view.paused = false;
        self.update();
        return true;
      };

      view.deactivate = function (opt_pause) {

        view.paused = opt_pause || false;

        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView === view) {
          if (trigger && !view.paused) {
            $(trigger).removeClass('c4g-active');
          }

          // Handle sub-views
          if (view.activeView) {
            view.activeView.deactivate(view.paused);
          }

          // Call deactivate function, if existent
          if (typeof options.deactivateFunction === 'function') {
            return options.deactivateFunction(view.paused);
          }
        }

        return true;
      };

      if (_typeof(options.triggerConfig) === 'object') {
        options.triggerConfig = $.extend({
          target: this.viewTriggerBar,
          tipLabel: options.name
        }, options.triggerConfig);

        options.triggerConfig.clickAction = view.activate;
        if (options.triggerConfig.className) {
          additionalTriggerClass = ' ' + options.triggerConfig.className;
        } else {
          additionalTriggerClass = '';
        }
        options.triggerConfig.className = _c4gMapsConstant.cssConstants.ICON + additionalTriggerClass;
        trigger = this.makeButton(options.triggerConfig);
      }

      this.views.push(view);
      return view;
    } // end of "addView"

  }]);

  return Sideboard;
}(ol.control.Control); // end of "add methods"

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboard.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboard.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Starboard = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsControlSideboard = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "./Resources/public/js/c4g-maps-control-sideboard.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsControlStarboardpluginBaselayerswitcher = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-baselayerswitcher */ "./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js");

var _c4gMapsControlStarboardpluginLayerswitcher = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-layerswitcher */ "./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js");

var _c4gMapsControlStarboardpluginCustomtab = __webpack_require__(/*! ./c4g-maps-control-starboardplugin-customtab */ "./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Starboard = exports.Starboard = function (_Sideboard) {
  _inherits(Starboard, _Sideboard);

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   * @param   {object}              opt_options  *optional* misc configuration options
   */
  function Starboard(opt_options) {
    _classCallCheck(this, Starboard);

    var _this = _possibleConstructorReturn(this, (Starboard.__proto__ || Object.getPrototypeOf(Starboard)).call(this, opt_options));
    //call Sideboard (parent) constructor


    _this.options = $.extend({
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
    if (!_this.options.headline || _this.options.headline.length === 0) {
      //this.options.headline = c4g.maps.constant.i18n.STARBOARD;
    }

    _this.hook_layerswitcher_loaded = _this.hook_layerswitcher_loaded || [];
    return _this;
  }

  _createClass(Starboard, [{
    key: "init",


    /**
     * Creates the basic html-elements for the starboard
     *
     * @return  {boolean}  'true' on success
     */
    value: function init() {

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
      fnRender = function fnRender() {
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
            for (var id in self.options.mapController.proxy.layerController.arrLayers) {
              if (self.options.mapController.proxy.layerController.arrLayers[id].display) {
                displayLayerswitcher = true;
              }
            }
          }
        }

        // - load "Layerswitcher"
        if (self.options.layerSwitcherCreate && renderLayertree && displayLayerswitcher) {
          self.plugins.layerswitcher = new _c4gMapsControlStarboardpluginLayerswitcher.Layerswitcher(self);
        }

        // call hook to load additional starboard tabs (layers)
        _c4gMapsUtils.utils.callHookFunctions(self.hook_layerswitcher_loaded);

        // - check & load other Starboard-plugins (via hook)
        // called functions have to add themselves to this.plugins
        if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.starboard_loadPlugins) === 'object') {
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.starboard_loadPlugins, self);
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
          self.plugins.baselayerswitcher = new _c4gMapsControlStarboardpluginBaselayerswitcher.Baselayerswitcher(self);
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

  }]);

  return Starboard;
}(_c4gMapsControlSideboard.Sideboard);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js":
/*!***********************************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Baselayerswitcher = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Baselayerswitcher = exports.Baselayerswitcher = function () {

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              starboard
   */
  function Baselayerswitcher(starboard) {
    _classCallCheck(this, Baselayerswitcher);

    if (!starboard) {
      console.warn('Cannot initialize Baselayerswitcher without a starboard.');
      return false;
    }

    this.initialized = false;
    this.baselayers = {};

    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;

    this.create();
    this.loadContent();
  }

  /**
   * @TODO: [create description]
   *
   * @return  {[type]}  [description]
   */


  _createClass(Baselayerswitcher, [{
    key: "create",
    value: function create() {
      var self, contentWrapper, contentHeadline, contentInfo;

      self = this;

      contentWrapper = document.createElement('div');

      contentHeadline = document.createElement('div');
      contentHeadline.innerHTML = this.starboard.options.baselayerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER;
      contentHeadline.className = 'contentHeadline';
      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_BASELAYERSWITCHER;
      contentInfo = document.createElement('p');
      this.contentDiv.appendChild(contentInfo);
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: 'layerswitcher',
        triggerConfig: {
          tipLabel: this.starboard.options.baselayerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER,
          className: _c4gMapsConstant.cssConstants.STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER,
          withHeadline: false
        },
        sectionElements: [{ section: self.starboard.contentContainer, element: contentWrapper }, { section: self.starboard.topToolbar, element: self.starboard.viewTriggerBar }]
      });
    }

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "activate",
    value: function activate() {
      this.view.activate();
    }

    /**
     * @TODO: [setContent description]
     *
     * @param  {[type]}  newContent  [description]
     */

  }, {
    key: "setContent",
    value: function setContent(newContent) {
      if (newContent) {
        if (typeof newContent === "string") {
          this.contentDiv.innerHTML = newContent;
        } else {
          try {
            if (this.contentDiv.firstChild) {
              this.contentDiv.replaceChild(newContent, this.contentDiv.firstChild);
            } else {
              this.contentDiv.appendChild(newContent);
            }
          } catch (e) {
            // @TODO
            console.warn(e.message);
            // return false;
          }
        }
      }
      return this.contentDiv.innerHTML;
    }
  }, {
    key: "loadContent",
    value: function loadContent() {
      var self, fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function fnDrawContent(baselayerIds) {
        self.baseLayerControl = document.createElement('div');
        $(self.baseLayerControl).addClass(_c4gMapsConstant.cssConstants.STARBOARD_BASELAYERTREE);
        self.setContent(self.baseLayerControl);

        self.addItems(baselayerIds, self.baseLayerControl);

        self.initialized = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      if (this.proxy.baselayers_loaded) {
        fnDrawContent(this.proxy.baselayerController.baselayerIds);
      } else {
        this.proxy.hook_baselayer_loaded.push(fnDrawContent);
      }
    } // end of "loadContent()"

    /**
     * @TODO: [drawContent description]
     *
     * @param   {[type]}  contentData  [description]
     */

  }, {
    key: "drawContent",
    value: function drawContent(contentData) {}
    // PASS
    // end of "drawContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */

  }, {
    key: "addItems",
    value: function addItems(itemData, wrapperElement, options) {
      var i, j, self, wrapper, item, uid, listItem, childList, childItem, childEntry, toggle, entry, $entry, filter, handleEntryClick, handleChangeBaselayerVisibility;

      self = this;

      if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
        options = {
          parseAsList: true
        };
      }

      handleEntryClick = function handleEntryClick(event) {
        event.preventDefault();

        var itemUid, siblings, baselayerItem;
        siblings = $(this).parent().siblings();
        for (var i = 0; i < siblings.length; i++) {
          if (siblings[i] && $(siblings[i]).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
            if (self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId] && self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].hasOverlays) {
              for (var _j in self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays) {
                if (self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays.hasOwnProperty(_j)) self.proxy.options.mapController.map.removeLayer(self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays[_j].layer);
              }
            }
            $(siblings[i]).removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
          }
        }
        itemUid = $(this).data('uid');

        if (self.starboard.options.caching) {
          _c4gMapsUtils.utils.storeValue('baselayer', itemUid);
        }

        if ($(this).parent().hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
          $(this).parent().removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        } else {
          $(this).parent().removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
        }

        if (self.proxy.options.mapController.rightSlideElements) {
          self.proxy.options.mapController.rightSlideElements.forEach(function (element) {
            $(element).css('right', self.starboard.container.offsetWidth);
          });
        }
        $(self.starboard.element).css('right', self.starboard.container.offsetWidth);

        if (self.proxy.activeBaselayerId !== itemUid) {
          self.proxy.baselayerController.showBaseLayer(itemUid);
          if (self.proxy.baselayerController.arrBaselayers[itemUid].hasOverlays) {
            for (var _j2 in self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays) {
              if (self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays.hasOwnProperty(_j2)) {
                self.proxy.options.mapController.map.addLayer(self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays[_j2].layer);
              }
            }
          }
          $(this).addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE);

          // if(this.nextSibling){
          //     var children = this.nextSibling.childNodes;
          //     for(i = 0; i < children.length; i++){
          //         $(children[i].firstChild).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
          //     }
          // }
          window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.baselayer_changed, itemUid);
        }
      }; // end of "handleEntryClick()"

      handleChangeBaselayerVisibility = function handleChangeBaselayerVisibility(baselayerConfig) {
        var id;

        for (id in self.baselayers) {
          if (self.baselayers.hasOwnProperty(id)) {
            if (id === baselayerConfig.id) {
              self.baselayers[id].$entry.addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE);
            } else {
              self.baselayers[id].$entry.addClass(_c4gMapsConstant.cssConstants.INACTIVE).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            }
          }
        }
      };

      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');

      if (itemData.length > 0) {

        for (i = 0; i < itemData.length; i += 1) {

          uid = itemData[i];
          this.baselayers[uid] = {};

          listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
          this.baselayers[uid].entryWrapper = listItem;
          entry = document.createElement('a');
          entry.setAttribute('href', '#');
          entry.appendChild(document.createTextNode(self.proxy.baselayerController.arrBaselayers[uid].name));
          $(entry).data('id', uid);
          if (self.proxy.baselayerController.arrBaselayers[uid].hasOverlays) {

            childList = document.createElement('ul');
            options.parseAsList ? document.createElement('ul') : document.createElement('div');
            for (j = 0; j < self.proxy.baselayerController.arrBaselayers[uid].overlays.length; j++) {
              childItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
              childEntry = document.createElement('a');
              if (self.proxy.activeBaselayerId == uid) {
                $(childEntry).addClass(_c4gMapsConstant.cssConstants.ACTIVE);
                var overlayId = self.proxy.baselayerController.arrBaselayers[uid].overlays[j].id;
                self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[overlayId].changeOpacity(self.proxy.baselayerController.arrBaselayers[uid].overlays[j].opacity);
              } else {
                $(childEntry).addClass(_c4gMapsConstant.cssConstants.INACTIVE);
              }

              childEntry.appendChild(document.createTextNode(self.proxy.baselayerController.arrBaselayers[uid].overlays[j].name));
              $(childEntry).data('id', self.proxy.baselayerController.arrBaselayers[uid].overlays[j].id);
              $(childEntry).data('pid', uid);
              toggle = document.createElement('input');
              toggle.className = 'c4g-overlay-toggle';
              toggle.setAttribute('type', 'range');
              toggle.setAttribute('min', 0);
              toggle.setAttribute('max', 100);
              toggle.setAttribute('value', self.proxy.baselayerController.arrBaselayers[uid].overlays[j].opacity);
              toggle.setAttribute('steps', 10);
              $(toggle).on('input', function (event) {
                self.proxy.baselayerController.arrBaselayers[$(this).parent().data('pid')].overlayController.arrOverlays[$(this).parent().data('id')].changeOpacity(this.value);
              });

              childEntry.appendChild(toggle);
              childItem.appendChild(childEntry);
              childList.appendChild(childItem);
            }
          }
          listItem.appendChild(entry);
          if (childList) {
            listItem.appendChild(childList);
            childList = undefined;
          }

          $entry = $(entry);
          this.baselayers[uid].$entry = $entry;

          if (this.starboard.options.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(self.starboard.options.mapController.data.default_baselayer, 10)) {
            $entry.addClass(_c4gMapsConstant.cssConstants.ACTIVE);
            $(listItem).addClass(_c4gMapsConstant.cssConstants.OPEN);
            if (self.proxy.baselayerController.arrBaselayers[uid].hasOverlays) {
              for (var _j3 in self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays) {
                if (self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays.hasOwnProperty(_j3)) {
                  self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[_j3].changeOpacity(self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[_j3].opacity);
                }
              }
            }
          } else {
            $entry.addClass(_c4gMapsConstant.cssConstants.INACTIVE);
            $(listItem).addClass(_c4gMapsConstant.cssConstants.CLOSE);
          }

          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

          wrapper.appendChild(listItem);
        }
        // Starboard Filter
        if (this.starboard.options.filter) {
          var dv = document.createElement('div');
          dv.className = "c4g-starboard-filter c4g-content-select";
          var filter = document.createElement('input');
          filter.type = 'text';
          filter.placeholder = ""; //Font Awesome
          var i = document.createElement('i');
          i.className = 'fas fa-filter';
          i.setAttribute("aria-hidden", "true");
          dv.appendChild(filter);
          dv.appendChild(i);
          filter.onkeyup = function () {
            function filter_ulli(element, showSubtree) {

              // do not apply filter for short search terms

              showSubtree = showSubtree || false; // used while traversing down the tree

              /**
               * Returns an array (modified: first element) of the given elements. Only finds children of the given parent element, but
               * no further descendants like getElementsByTagName does.
               */
              function getChildrenByTagName(element, tagName) {
                var found = [];
                for (var i = 0; i < element.children.length; i++) {
                  if (element.children[i].tagName.toUpperCase() == tagName.toUpperCase()) {
                    found.push(element.children[i]);
                  }
                }
                if (found.length > 0) {
                  return found[0]; // !!!
                } else {
                  return false;
                }
              }

              var matchFlagUl = false;
              var subtreeMatches = false;
              // for each LI do
              if (element.children) {
                for (var i = 0; i < element.children.length; i++) {
                  element.children[i].style.display = "block";

                  var isMatch = false;

                  // search current LI for filter term
                  if (element.children[i].getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(filter.value.toUpperCase()) >= 0) {
                    // it's a match
                    isMatch = true;
                  }

                  // recurse if a subtree (UL) exists in current LI (max 1 expected)
                  var ul = getChildrenByTagName(element.children[i], "ul");

                  if (ul) {
                    // recursion
                    var hasSubtree = true;
                    subtreeMatches = filter_ulli(ul, showSubtree || isMatch);
                  } else {
                    var hasSubtree = false;
                  }

                  if (isMatch || subtreeMatches || showSubtree) {
                    matchFlagUl = true; // used while traversing up the tree again
                    // set current LI visible and open
                    element.children[i].style.display = "";

                    if (filter.value.length > 2) {
                      element.children[i].classList.remove("c4g-close");
                      element.children[i].classList.add("c4g-open");
                    }

                    element.children[i].classList.remove("c4g-starboard-filter-match"); // always remove
                    if (isMatch && filter.value.length > 0) {
                      element.children[i].classList.add("c4g-starboard-filter-match");
                    }
                    ;
                  } else {
                    // set current LI invisible
                    element.children[i].style.display = "none";
                    element.children[i].classList.remove("c4g-open");
                    element.children[i].classList.add("c4g-close");
                    element.children[i].classList.remove("c4g-starboard-filter-match");
                  }
                }

                if (matchFlagUl) {
                  return true;
                } else {
                  return false;
                }
              }
            }

            // do not react immediately but allow for some keystrokes
            setTimeout(function () {
              // two or zero letters are required
              if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-baselayertree > ul:nth-child(2)'));
            }, 350);
          };

          wrapperElement.appendChild(dv);
        }

        this.proxy.hook_baselayer_visibility.push(handleChangeBaselayerVisibility);
      }
      wrapperElement.appendChild(wrapper);
    } // end of "addItems()"

  }]);

  return Baselayerswitcher;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js":
/*!***************************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboardplugin-customtab.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customtab = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

"use strict";

var Customtab = exports.Customtab = function () {

  /**
   *
   * @param starboard
   * @param plugin
   * @param projectConf
   * @returns {boolean}
   * @constructor
   */
  function Customtab(starboard, projectConf) {
    _classCallCheck(this, Customtab);

    if (!starboard) {
      console.warn('Cannot initialize Project-tab without a starboard.');
      return false;
    }
    projectConf = $.extend({
      tabId: null,
      name: "Customtab",
      awesomeicon: ''
    }, projectConf);

    if (!projectConf.tabId) {
      console.warn('Cannot initialize Project-tab without an id.');
      return false;
    }

    this.initialized = false;
    //this.plugin = plugin || false;
    this.contentLoaded = false;
    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;
    this.map = this.proxy.options.mapController.map;
    this.layers = {};
    this.tabId = projectConf.tabId;
    this.name = projectConf.name;
    this.awesomeicon = projectConf.awesomeicon.replace('&#92;', "\\");
    starboard.plugins["customTab" + this.tabId] = this;
    this.create();
  }

  /**
   * @TODO: [create description]
   *
   * @return  {[type]}  [description]
   */


  _createClass(Customtab, [{
    key: "create",
    value: function create() {
      var self, contentWrapper, contentHeadline, contentHeadlineLink, selector, layerSwitcherTitle;

      self = this;
      contentWrapper = document.createElement('div');
      contentHeadline = document.createElement('div');
      contentHeadline.className = 'contentHeadline';

      layerSwitcherTitle = this.starboard.options.layerSwitcherTitle;

      if (self.name) {
        layerSwitcherTitle = self.name;
      }

      if (!this.starboard.options.button) {
        contentHeadline.innerHTML = layerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
      } else {
        $(contentHeadline).addClass("c4g-starboard-headline");
        contentHeadlineLink = document.createElement('a');
        contentHeadlineLink.onclick = function () {
          if ($(this).hasClass("c4g-active") !== false) {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.hideLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-active");
            $(this).addClass("c4g-inactive");
          } else {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.showLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-inactive");
            $(this).addClass("c4g-active");
          }
        };
        $(contentHeadlineLink).addClass("c4g-inactive c4g-starboard-headline-link");
        contentHeadlineLink.innerHTML = layerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
        contentHeadlineLink.innerHTML = contentHeadlineLink.innerHTML + ' ';
        contentHeadline.appendChild(contentHeadlineLink);
      }

      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = 'c4g_starboardplugin_content';
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: self.name,
        triggerConfig: {
          tipLabel: self.name,
          className: 'c4g-starboard-view-trigger-starboardplugin-' + self.tabId,
          withHeadline: false
        },
        sectionElements: [{ section: self.starboard.contentContainer, element: contentWrapper }, { section: self.starboard.topToolbar, element: self.starboard.viewTriggerBar }]
      });
      if (this.awesomeicon.substring(0, 1) === "\\") {
        this.awesomeicon = this.awesomeicon.substring(1, this.awesomeicon.length);
      }
      selector = 'button.c4g-starboard-view-trigger-starboardplugin-' + self.tabId;
      //ToDo möglicherweise standard icon ?
      if (this.awesomeicon.length > 0) {
        var styleEl = document.createElement('style'),
            styleSheet;

        // Append style element to head
        document.head.appendChild(styleEl);

        // Grab style sheet
        styleSheet = styleEl.sheet;
        // catch firefox, because FF does not know "addRule"
        if (styleSheet.addRule && typeof document.styleSheets[0].addRule === 'function') {
          styleSheet.addRule(selector + ':before', 'content: "\\' + this.awesomeicon + '";');
        } else {
          styleSheet.insertRule(selector + ':before { content: "\\' + this.awesomeicon + '";}', 0);
        }
      }
      this.activate();
    }

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "activate",
    value: function activate() {
      this.view.activate();
      if (!this.contentLoaded) {
        this.loadContent();
      }
    }

    /**
     * @TODO: [setContent description]
     *
     * @param  {Node}  newContent  [description]
     */

  }, {
    key: "setContent",
    value: function setContent(newContent) {
      if (newContent) {
        if (typeof newContent === "string") {
          this.contentDiv.innerHTML = newContent;
        } else {
          try {
            if (this.contentDiv.firstChild) {
              this.contentDiv.replaceChild(newContent, this.contentDiv.firstChild);
            } else {
              this.contentDiv.appendChild(newContent);
            }
          } catch (e) {
            // @TODO
            console.warn(e.message);
            // return false;
          }
        }
      }
      return this.contentDiv.innerHTML;
    }

    /**
     * @TODO: [loadContent description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "loadContent",
    value: function loadContent() {
      var self, fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function fnDrawContent(layerIds) {
        self.treeControl = document.createElement('div');
        $(self.treeControl).addClass(_c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE);
        self.setContent(self.treeControl);
        self.addItems(layerIds, self.treeControl, { parseAsList: true });
        self.initialized = true;
        self.contentLoaded = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      fnDrawContent(this.proxy.layerIds);
    } // end of "loadContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */

  }, {
    key: "addItems",
    value: function addItems(itemData, wrapperElement, options) {
      var i, wrapper, item, layer, uid, listItem, entry, $entry, handleEntryClick, self, pWrapper, toggle, childWrapper;

      options = options || {};
      options = $.extend({
        parseAsList: true
      }, options);

      self = this;

      handleEntryClick = function handleEntryClick(event) {
        var itemUid;

        event.preventDefault();
        // "this" is the event sending entry
        itemUid = $(this).data('uid');
        if (self.proxy.activeLayerIds[itemUid]) {
          // hide layer
          $(this).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
          $(this).addClass(_c4gMapsConstant.cssConstants.INACTIVE);
          self.hideLayer(itemUid);
        } else {
          // show layer
          $(this).removeClass(_c4gMapsConstant.cssConstants.INACTIVE);
          $(this).addClass(_c4gMapsConstant.cssConstants.ACTIVE);
          self.showLayer(itemUid);
        }
      };

      // register hook to switch childs of layers as well
      this.proxy.hook_layer_visibility.push(function (layerId) {
        var j, changedLayer;

        changedLayer = self.layers[layerId];
        if (changedLayer && changedLayer.$entries) {
          for (j = 0; j < changedLayer.$entries.length; j += 1) {
            if (self.proxy.activeLayerIds[layerId]) {
              changedLayer.$entries[j].addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE);
            } else {
              changedLayer.$entries[j].addClass(_c4gMapsConstant.cssConstants.INACTIVE).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            }
          }
        }
      }); // end of hook

      // add hook function for changed zoom
      //   needed to change the entry-classes
      this.proxy.hook_map_zoom.push(function () {
        var j, id, layer;

        for (id in self.layers) {
          if (self.layers.hasOwnProperty(id)) {
            layer = self.layers[id];
            if (layer && layer.$entries) {
              for (j = 0; j < layer.$entries.length; j += 1) {
                if (self.proxy.checkLayerIsActiveForZoom(id)) {
                  layer.$entries[j].removeClass(_c4gMapsConstant.cssConstants.DISABLED);
                } else {
                  layer.$entries[j].addClass(_c4gMapsConstant.cssConstants.DISABLED);
                }
              }
            }
          }
        }
      }); // end of hook

      // build the layer tree
      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
      if (itemData && itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {
          uid = itemData[i];
          //layer = this.plugin.customTabs[this.tabId].drawnFeatures[uid];
          layer = this.proxy.layerController.arrLayers[uid];
          // skip layer if it doesn't belong to this tab
          if (!(layer.renderSpecial == true && layer.tabId == this.tabId)) {
            continue;
          }
          // do not render the startab layer itself as parent level
          if (layer.type === "startab") {
            continue;
          }
          // check if layer wants to be displayed in starboard tab
          if (layer.hideWhenInTab === true) {
            continue;
          }
          if (layer.hide === "1") {
            if (this.proxy.activeLayerIds[layer.id]) {
              // this.hideLayer(layer.id);
            }
          }
          // check if the layer should be displayed
          if (!layer.display) {
            continue;
          }
          item = {};
          this.layers[uid] = item;
          listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
          item.entryWrappers = item.entryWrappers || [];
          item.entryWrappers.push(listItem);
          entry = document.createElement('a');
          entry.setAttribute('href', '#');
          entry.appendChild(document.createTextNode(layer.layername || layer.name));
          listItem.appendChild(entry);
          $entry = $(entry);
          item.$entries = item.$entries || [];
          item.$entries.push($entry);
          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

          // prepare insertion of childs
          if (layer.visibleChilds) {
            toggle = document.createElement('span');
            $(listItem).addClass(_c4gMapsConstant.cssConstants.CLOSE);
            $(toggle).addClass(_c4gMapsConstant.cssConstants.ICON);
            $(toggle).click(function () {
              if ($(this).parent().hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
                $(this).parent().removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
              } else {
                $(this).parent().removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
              }
              if (self.proxy.options.mapController.rightSlideElements) {
                self.proxy.options.mapController.rightSlideElements.forEach(function (element) {
                  $(element).css('right', self.starboard.container.offsetWidth);
                });
              }
              $(self.starboard.element).css('right', self.starboard.container.offsetWidth);
            });
            $(toggle).insertBefore($entry);
            childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
            item.childWrappers = item.childWrappers || [];
            item.childWrappers.push(childWrapper);
            listItem.appendChild(childWrapper);
          }

          if (this.proxy.activeLayerIds[uid]) {
            $entry.addClass(_c4gMapsConstant.cssConstants.ACTIVE);
          } else {
            $entry.addClass(_c4gMapsConstant.cssConstants.INACTIVE);
          }
          if (this.layers[layer.pid]) {
            // is child-element
            pWrapper = this.layers[layer.pid].childWrappers;
            if (pWrapper) {
              pWrapper[pWrapper.length - 1].appendChild(listItem);
            }
          } else {
            wrapper.appendChild(listItem);
          }
        } // end of for-loop
        // Starboard Filter
        if (this.starboard.options.filter) {
          var dv = document.createElement('div');
          dv.className = "c4g-starboard-filter c4g-content-select";
          var filter = document.createElement('input');
          filter.type = 'text';
          filter.placeholder = ""; //Font Awesome
          var i = document.createElement('i');
          i.className = 'fas fa-filter';
          i.setAttribute("aria-hidden", "true");
          dv.appendChild(filter);
          dv.appendChild(i);
          filter.onkeyup = function () {
            function filter_ulli(element, showSubtree) {

              // do not apply filter for short search terms

              showSubtree = showSubtree || false; // used while traversing down the tree

              /**
               * Returns an array (modified: first element) of the given elements. Only finds children of the given parent element, but
               * no further descendants like getElementsByTagName does.
               */
              function getChildrenByTagName(element, tagName) {
                var found = [];
                for (var i = 0; i < element.children.length; i++) {
                  if (element.children[i].tagName.toUpperCase() == tagName.toUpperCase()) {
                    found.push(element.children[i]);
                  }
                }
                if (found.length > 0) {
                  return found[0]; // !!!
                } else {
                  return false;
                }
              }

              var matchFlagUl = false;
              var subtreeMatches = false;
              // for each LI do
              for (var i = 0; i < element.children.length; i++) {
                element.children[i].style.display = "block";

                var isMatch = false;

                // search current LI for filter term
                if (element.children[i].getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(filter.value.toUpperCase()) >= 0) {
                  // it's a match
                  isMatch = true;
                }

                // recurse if a subtree (UL) exists in current LI (max 1 expected)
                var ul = getChildrenByTagName(element.children[i], "ul");

                if (ul) {
                  // recursion
                  var hasSubtree = true;
                  subtreeMatches = filter_ulli(ul, showSubtree || isMatch);
                } else {
                  var hasSubtree = false;
                }

                if (isMatch || subtreeMatches || showSubtree) {
                  matchFlagUl = true; // used while traversing up the tree again
                  // set current LI visible and open
                  element.children[i].style.display = "";

                  if (filter.value.length > 2) {
                    element.children[i].classList.remove("c4g-close");
                    element.children[i].classList.add("c4g-open");
                  }

                  element.children[i].classList.remove("c4g-starboard-filter-match"); // always remove
                  if (isMatch && filter.value.length > 0) {
                    element.children[i].classList.add("c4g-starboard-filter-match");
                  }
                } else {
                  // set current LI invisible
                  element.children[i].style.display = "none";
                  element.children[i].classList.remove("c4g-open");
                  element.children[i].classList.add("c4g-close");
                  element.children[i].classList.remove("c4g-starboard-filter-match");
                }
              }

              if (matchFlagUl) {
                return true;
              } else {
                return false;
              }
            }

            // do not react immediately but allow for some keystrokes
            setTimeout(function () {
              // two or zero letters are required
              if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-layertree > ul:nth-child(2)'));
            }, 350);
          };

          wrapperElement.appendChild(dv);
        }
        wrapperElement.appendChild(wrapper);
      }
    } // end of "addItems()"

  }, {
    key: "showLayer",
    value: function showLayer(itemUid) {
      if (this.proxy.activeLayerIds[itemUid]) {
        return true;
      } else {
        this.proxy.layerController.showLayer(itemUid);
      }
    } // end of "showLayer()"


  }, {
    key: "hideLayer",
    value: function hideLayer(itemUid) {
      if (!this.proxy.activeLayerIds[itemUid]) {
        return true;
      } else {
        this.proxy.layerController.hideLayer(itemUid);
      }
    } // end of "hideLayer()"

  }]);

  return Customtab;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js":
/*!*******************************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboardplugin-layerswitcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layerswitcher = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Layerswitcher = exports.Layerswitcher = function () {

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              starboard
   */
  function Layerswitcher(starboard) {
    _classCallCheck(this, Layerswitcher);

    if (!starboard) {
      console.warn('Cannot initialize Layerswitcher without a starboard.');
      return false;
    }

    this.initialized = false;
    this.layers = {};

    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;
    this.create();
    this.loadContent();
  }

  _createClass(Layerswitcher, [{
    key: "create",
    value: function create() {
      var self, contentWrapper, contentHeadline, contentHeadlineLink, contentInfo, layerSwitcherTitle;

      layerSwitcherTitle = this.starboard.options.layerSwitcherTitle;

      self = this;

      contentWrapper = document.createElement('div');
      contentHeadline = document.createElement('div');
      contentHeadline.className = 'contentHeadline';

      if (!this.starboard.options.button) {
        contentHeadline.innerHTML = layerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
      } else {
        $(contentHeadline).addClass("c4g-starboard-headline");
        contentHeadlineLink = document.createElement('a');
        contentHeadlineLink.onclick = function () {
          if ($(this).hasClass("c4g-active") !== false) {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.hideLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-active");
            $(this).addClass("c4g-inactive");
          } else {
            for (var i = 0; i < self.proxy.layerIds.length; i++) {
              self.proxy.layerController.showLayer(self.proxy.layerIds[i]);
            }
            $(this).removeClass("c4g-inactive");
            $(this).addClass("c4g-active");
          }
        };
        $(contentHeadlineLink).addClass("c4g-inactive c4g-starboard-headline-link");
        contentHeadlineLink.innerHTML = layerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER;
        contentHeadlineLink.innerHTML = contentHeadlineLink.innerHTML + ' ';
        contentHeadline.appendChild(contentHeadlineLink);
      }

      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_LAYERSWITCHER;
      contentInfo = document.createElement('p');
      this.contentDiv.appendChild(contentInfo);
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: 'layerswitcher',
        triggerConfig: {
          tipLabel: layerSwitcherTitle || _c4gMapsI18n.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,
          className: _c4gMapsConstant.cssConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,
          withHeadline: false
        },
        sectionElements: [{ section: self.starboard.contentContainer, element: contentWrapper }, { section: self.starboard.topToolbar, element: self.starboard.viewTriggerBar }]
      });
    }

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "activate",
    value: function activate() {
      this.view.activate();
    } // end of "activate()"

    /**
     * @TODO: [setContent description]
     *
     * @param  {[type]}  newContent  [description]
     */

  }, {
    key: "setContent",
    value: function setContent(newContent) {
      if (newContent) {
        if (typeof newContent === "string") {
          this.contentDiv.innerHTML = newContent;
        } else {
          try {
            if (this.contentDiv.firstChild) {
              this.contentDiv.replaceChild(newContent, this.contentDiv.firstChild);
            } else {
              this.contentDiv.appendChild(newContent);
            }
          } catch (e) {
            // @TODO
            console.warn(e.message);
            // return false;
          }
        }
      }
      return this.contentDiv.innerHTML;
    } // end of "setContent()"

    /**
     * @TODO: [loadContent description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "loadContent",
    value: function loadContent() {
      var self, fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function fnDrawContent(layerIds) {
        self.treeControl = document.createElement('div');
        $(self.treeControl).addClass(_c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE);
        self.setContent(self.treeControl);

        self.addItems(layerIds, self.treeControl);

        self.initialized = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      if (this.proxy.layers_loaded) {
        fnDrawContent(this.proxy.layerIds);
      } else {
        this.proxy.hook_layer_loaded.push(fnDrawContent);
      }
    } // end of "loadContent()"

    /**
     * @TODO: [drawContent description]
     */

  }, {
    key: "drawContent",
    value: function drawContent(contentData) {}
    // PASS
    // end of "drawContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */

  }, {
    key: "addItems",
    value: function addItems(itemData, wrapperElement, options) {
      var i, self, filter, wrapper, childWrapper, pWrapper, item, layer, uid, listItem, entry, $entry, toggle, fnHandleEntryClick, fnChildEntryClick, fnChildEntryShow, zoomToExtent, layerClass;

      self = this;

      options = options || {};
      options = $.extend({
        parseAsList: true
      }, options);

      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');

      // create handler for entry-clicks
      fnHandleEntryClick = function fnHandleEntryClick(event) {
        var itemUid, layerItem;

        event.preventDefault();

        itemUid = $(this).data('uid');
        layerItem = self.proxy.layerController.arrLayers[itemUid];

        if (self.proxy.activeLayerIds[itemUid]) {
          // hide layer
          self.proxy.layerController.hideLayer(itemUid);
          if (parseInt(layer.pid, 10) == 0) {
            // hide all childs, because clicked layer is the map itself
            for (var id in self.proxy.activeLayerIds) {
              if (self.proxy.activeLayerIds.hasOwnProperty(id)) {
                self.proxy.layerController.hideLayer(id);
              }
            }
          }
        } else {
          // show layer
          self.proxy.layerController.showLayer(itemUid);
          //zooom to extent
          zoomToExtent(itemUid);
        }
        if (self.handleSelectedChilds(this)) {
          self.updateParentLayers(this, itemUid, layerItem);
        }

        // c4g.maps.layers[itemUid] = layerItem;
      }; // end of "fnHandleEntryClick()"
      fnChildEntryClick = function fnChildEntryClick(event) {
        event.preventDefault();
        var itemUid = $(this).data('uid');
        var parent = $(this).parent().parent().parent();
        var childs = $(parent).children();
        var parentUid = $(childs[1]).data('uid');
        if ($(this).hasClass(_c4gMapsConstant.cssConstants.ACTIVE)) {
          self.proxy.layerController.hideChildLayer(parentUid, itemUid);
          $(this).removeClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.INACTIVE);
        } else if ($(this).hasClass(_c4gMapsConstant.cssConstants.INACTIVE)) {
          self.proxy.layerController.showChildLayer(parentUid, itemUid);
          $(this).removeClass(_c4gMapsConstant.cssConstants.INACTIVE).addClass(_c4gMapsConstant.cssConstants.ACTIVE);
        }
      };
      fnChildEntryShow = function fnChildEntryShow(event) {
        event.preventDefault();
        var parent = this.parentElement;
        var uid = $(parent.firstChild).data('uid');
        parent = $(this).parent().parent().parent();
        var childs = $(parent).children();
        var parentUid = $(childs[1]).data('uid');
        uid = uid.replace(parentUid, '');
        var layer = self.proxy.layerController.arrLayers[parentUid].vectorLayer;
        if (layer) {
          var singleLayer = layer.getLayers().getArray()[uid];
          var feature = singleLayer.getSource().getFeatures()[0];
          self.proxy.options.mapController.map.getView().fit(feature.getGeometry());
        }
      };

      zoomToExtent = function zoomToExtent(itemUid) {
        //function to zoom to the extent of a map structure and its children
        var layerItem,
            vectorArray,
            layerGroup,
            coords,
            geometry,
            featureList,
            featureArray,
            coordinates = [],
            extent,
            center,
            key;
        layerItem = self.proxy.layerController.arrLayers[itemUid];
        if (layerItem && layerItem.zoom_locations === "1") {
          if (layerItem.hasChilds) {
            for (key in layerItem.childs) {
              if (layerItem.childs.hasOwnProperty(key)) {
                layer = layerItem.childs[key];
                if (layer.type == "overpass") {
                  continue;
                }
                vectorArray = layer.content;
                if (vectorArray === undefined) {
                  // catch case of linked layers
                  continue;
                }
                if ((typeof vectorArray === "undefined" ? "undefined" : _typeof(vectorArray)) === "object") {
                  vectorArray = _c4gMapsUtils.utils.objectToArray(vectorArray);
                }
                layerGroup = layer.vectorLayer;
                if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                  vectorArray.forEach(function (vectorLayer) {
                    if (vectorLayer && vectorLayer.data && vectorLayer.data.geometry && vectorLayer.data.geometry.coordinates) {
                      if (vectorLayer.data.geometry.type === "Point") {
                        coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]), parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                        geometry = new ol.geom.Point(coords);
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
                      if (ol.extent.getTopRight(feature.getSource().getExtent())['0'] != "Infinity" && ol.extent.getTopRight(feature.getSource().getExtent())['0'] != "-Infinity") {

                        coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                        coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                        coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                        coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                      }
                    }
                  });
                }
              }
            }
          }

          if (layerItem.type !== "overpass" && layerItem.vectorLayer) {
            vectorArray = layer.content;
            if (vectorArray !== undefined) {
              // catch case of linked layers
              if ((typeof vectorArray === "undefined" ? "undefined" : _typeof(vectorArray)) === "object") {
                vectorArray = _c4gMapsUtils.utils.objectToArray(vectorArray);
              }
              layerGroup = layer.vectorLayer;
              if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                vectorArray.forEach(function (vectorLayer) {
                  if (vectorLayer && vectorLayer.data && vectorLayer.data.geometry && vectorLayer.data.geometry.coordinates) {
                    if (vectorLayer.data.geometry.type === "Point") {
                      coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]), parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                      geometry = new ol.geom.Point(coords);
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
                  if (layer.type !== "overpass") {
                    if (layer.type === "kml") {
                      var source = feature.getSource();
                      //var sourceFeatures = source.getFeatures();
                      source.getExtent().forEach(function (coordinate) {
                        coordinates.push(coordinate);
                      });
                    } else {
                      coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                      coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                      coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                      coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                    }
                  }
                });
              }
            }
          }

          extent = ol.extent.boundingExtent(coordinates);
          if (extent[0] === Infinity || extent[0] === -Infinity) {
            return;
          }
          self.proxy.options.mapController.map.getView().fit(extent, self.proxy.options.mapController.map.getSize());
          center = self.proxy.options.mapController.map.getView().getCenter();
          if (isNaN(center[0])) {
            self.proxy.options.mapController.map.getView().setCenter([50, 10]);
            self.proxy.options.mapController.map.getView().setZoom(mapData.minZoom || 10);
          }
        }
      }; //end of zoom to extent
      // add hook function for changed layer-visibility
      //   needed to change the entry-classes
      this.proxy.hook_layer_visibility.push(function (layerId) {
        var j, changedLayer;

        changedLayer = self.layers[layerId];
        if (changedLayer && changedLayer.$entries) {
          for (j = 0; j < changedLayer.$entries.length; j += 1) {
            if (self.proxy.activeLayerIds[layerId]) {
              changedLayer.$entries[j].addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE);
            } else {
              changedLayer.$entries[j].addClass(_c4gMapsConstant.cssConstants.INACTIVE).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            }
            self.handleSelectedChilds(changedLayer.$entries[j]);
          }
        }
      });

      // add hook function for changed zoom
      //   needed to change the entry-classes
      this.proxy.hook_map_zoom.push(function () {
        var j, id, layer;

        for (id in self.layers) {
          if (self.layers.hasOwnProperty(id)) {
            layer = self.layers[id];
            if (layer && layer.$entries) {
              for (j = 0; j < layer.$entries.length; j += 1) {
                if (self.proxy.checkLayerIsActiveForZoom(id)) {
                  layer.$entries[j].removeClass(_c4gMapsConstant.cssConstants.DISABLED);
                } else {
                  layer.$entries[j].addClass(_c4gMapsConstant.cssConstants.DISABLED);
                }
              }
            }
          }
        }
      }); // end of hook

      if (itemData && itemData.length > 0) {
        for (i = 0; i < itemData.length; i += 1) {
          uid = itemData[i];
          layer = self.proxy.layerController.arrLayers[uid];
          item = {};
          this.layers[uid] = item;
          // renderSpecial is set when a layer is rendered in its own tab
          if (layer.renderSpecial) {
            continue;
          }

          if (layer && layer.display) {
            listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
            $(listItem).data('noFilter', layer['noFilter']);
            item.entryWrappers = item.entryWrappers || [];
            item.entryWrappers.push(listItem);

            entry = document.createElement('a');
            entry.setAttribute('href', '#');
            entry.appendChild(document.createTextNode(layer.name));
            listItem.appendChild(entry);

            $entry = $(entry);
            item.$entries = item.$entries || [];
            item.$entries.push($entry);

            if (!this.proxy.checkLayerIsActiveForZoom(uid)) {
              $entry.addClass(_c4gMapsConstant.cssConstants.DISABLED);
            }

            $entry.data('uid', uid);
            $entry.click(fnHandleEntryClick);

            if (layer.visibleChilds || layer.split_geojson) {
              toggle = document.createElement('span');

              if (layer.hide_child !== '1') {
                $(listItem).addClass(_c4gMapsConstant.cssConstants.CLOSE);
                $(toggle).addClass(_c4gMapsConstant.cssConstants.ICON);
              }
              $(toggle).click(function () {
                if ($(this).parent().hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
                  $(this).parent().removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
                } else {
                  $(this).parent().removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
                }
                if (self.proxy.options.mapController.rightSlideElements) {
                  self.proxy.options.mapController.rightSlideElements.forEach(function (element) {
                    $(element).css('right', self.starboard.container.offsetWidth);
                  });
                }
                $(self.starboard.element).css('right', self.starboard.container.offsetWidth);
              });
              $(toggle).insertBefore($entry);
              childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
              item.childWrappers = item.childWrappers || [];
              item.childWrappers.push(childWrapper);
              if (layer.hide_child !== '1') {
                listItem.appendChild(childWrapper);
              }
              if (layer.split_geojson && layer.content[0]) {
                var data = layer.content[0].data;
                if (data && data.features) {
                  for (var _i = 0; _i < data.features.length; _i++) {
                    var feature = data.features[_i];
                    var childListItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
                    var childItem = {};
                    childItem.entryWrappers = childItem.entryWrappers || [];
                    childItem.entryWrappers.push(childListItem);
                    var childEntry = document.createElement('a');
                    childEntry.setAttribute('href', '#');
                    childEntry.appendChild(document.createTextNode(feature.properties[layer.geojson_attributes.split(',')[0]]));
                    childListItem.appendChild(childEntry);
                    var childUid = uid + "" + _i;
                    var $childEntry = $(childEntry);
                    childItem.$entries = item.$entries || [];
                    childItem.$entries.push($entry);
                    childWrapper.appendChild(childListItem);
                    $childEntry.data('uid', childUid);
                    if (layer.geojson_zoom) {
                      $childEntry.click(fnChildEntryShow);
                      $childEntry.addClass('c4g-geojson-button');
                    } else {
                      $childEntry.click(fnChildEntryClick);
                      if (this.proxy.activeLayerIds[uid]) {
                        $childEntry.addClass(_c4gMapsConstant.cssConstants.ACTIVE);
                      } else {
                        $childEntry.addClass(_c4gMapsConstant.cssConstants.INACTIVE);
                      }
                    }

                    if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.addChilds) === 'object') {
                      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.addChilds);
                    }

                    if (window.c4gMapsHooks.starboard_layer_activate && window.c4gMapsHooks.starboard_layer_activate.length > 0) {
                      var paramObj = { 'feature': feature, 'parentItem': childListItem, 'entry': $childEntry };
                      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.starboard_layer_activate, paramObj);
                    }
                  }
                }
              }
            }

            if (this.proxy.activeLayerIds[uid]) {
              $entry.addClass(_c4gMapsConstant.cssConstants.ACTIVE);
            } else {
              $entry.addClass(_c4gMapsConstant.cssConstants.INACTIVE);
            }

            // [info]:  In order for this to work,
            //          the parent layers need to be
            //          listed before their childs
            if (this.layers[layer.pid]) {
              // is child-element
              pWrapper = this.layers[layer.pid].childWrappers;
              pWrapper[pWrapper.length - 1].appendChild(listItem);
            } else if (parseInt(layer.pid, 10) == 0) {
              // layer is map itself with a layer
              toggle = document.createElement('span');
              if (layer.hide_child !== '1') {
                $(listItem).addClass(_c4gMapsConstant.cssConstants.CLOSE);
              }
              $(toggle).addClass(_c4gMapsConstant.cssConstants.ICON);
              $(toggle).click(function () {
                if ($(this).parent().hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
                  $(this).parent().removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
                } else {
                  $(this).parent().removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE);
                }
              });
              $(toggle).insertBefore($entry);
              childWrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');
              item.childWrappers = item.childWrappers || [];
              item.childWrappers.push(childWrapper);
              listItem.appendChild(childWrapper);
              wrapper.appendChild(listItem);
            } else {
              // is not a child-element (pid == mapId)
              wrapper.appendChild(listItem);
            }

            if (layer.id) {
              var idstr = layer.id.toString();
              layerClass = encodeURIComponent(idstr.toLowerCase()).replace(/%[0-9A-F]{2}/gi, '');
              $(listItem).addClass('c4g_starboard_item_' + layerClass);
            }

            if (layer.cssClass) {
              $(listItem).addClass(layer.cssClass);
            }

            // call hook "layerswitcher_forEachItem"
            if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.layerswitcher_forEachItem) === "object") {
              _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.layerswitcher_forEachItem, { that: this, item: item, entry: $entry });
            }
          }
        } // end of for-loop

        // Starboard Filter
        if (this.starboard.options.filter) {
          var dv = document.createElement('div');
          dv.className = "c4g-starboard-filter c4g-content-select";
          var filter = document.createElement('input');
          filter.type = 'text';
          filter.placeholder = ""; //Font Awesome
          var i = document.createElement('i');
          i.className = 'fas fa-filter';
          i.setAttribute("aria-hidden", "true");
          dv.appendChild(filter);
          dv.appendChild(i);
          filter.onkeyup = function () {
            function filter_ulli(element, showSubtree) {

              // do not apply filter for short search terms

              showSubtree = showSubtree || false; // used while traversing down the tree

              /**
               * Returns an array (modified: first element) of the given elements. Only finds children of the given parent element, but
               * no further descendants like getElementsByTagName does.
               */
              function getChildrenByTagName(element, tagName) {
                var found = [];
                for (var i = 0; i < element.children.length; i++) {
                  if (element.children[i].tagName.toUpperCase() == tagName.toUpperCase()) {
                    found.push(element.children[i]);
                  }
                }
                if (found.length > 0) {
                  return found[0]; // !!!
                } else {
                  return false;
                }
              }

              var matchFlagUl = false;
              var subtreeMatches = false;
              // for each LI do
              for (var i = 0; i < element.children.length; i++) {
                element.children[i].style.display = "block";

                var isMatch = false;

                // search current LI for filter term
                if (element.children[i].getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(filter.value.toUpperCase()) >= 0 || $(element.children[i]).data('noFilter')) {
                  // it's a match
                  isMatch = true;
                }

                // recurse if a subtree (UL) exists in current LI (max 1 expected)
                var ul = getChildrenByTagName(element.children[i], "ul");

                if (ul) {
                  // recursion
                  var hasSubtree = true;
                  subtreeMatches = filter_ulli(ul, showSubtree || isMatch);
                } else {
                  var hasSubtree = false;
                }

                if (isMatch || subtreeMatches || showSubtree) {
                  matchFlagUl = true; // used while traversing up the tree again
                  // set current LI visible and open
                  element.children[i].style.display = "";

                  if (filter.value.length > 2) {
                    element.children[i].classList.remove("c4g-close");
                    element.children[i].classList.add("c4g-open");
                  }

                  element.children[i].classList.remove("c4g-starboard-filter-match"); // always remove
                  if (isMatch && filter.value.length > 0) {
                    element.children[i].classList.add("c4g-starboard-filter-match");
                  }
                  ;
                } else {
                  // set current LI invisible
                  element.children[i].style.display = "none";
                  element.children[i].classList.remove("c4g-open");
                  element.children[i].classList.add("c4g-close");
                  element.children[i].classList.remove("c4g-starboard-filter-match");
                }
              }

              if (matchFlagUl) {
                return true;
              } else {
                return false;
              }
            }

            // do not react immediately but allow for some keystrokes
            setTimeout(function () {
              // two or zero letters are required
              if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-layertree > ul:nth-child(2)'));
            }, 350);
          };

          wrapperElement.appendChild(dv);
        }
        wrapperElement.appendChild(wrapper);
      }
    }

    // end of "addItems()"
    /**
     * Function which checks for a given layer id, if any of the childs are currently selected.
     * @param layerUid
     * @returns {boolean}
     */

  }, {
    key: "checkChildSelections",
    value: function checkChildSelections(layerUid) {
      var layer, childActive, self;
      self = this;
      childActive = 0;
      layer = self.proxy.layerController.arrLayers[layerUid];
      if (layer && layer.childs && layer.childs.length > 0) {
        // layer has childs
        layer.childs.forEach(function (child) {
          if (self.proxy.activeLayerIds[child.id]) {
            childActive = childActive + 1;
          } else {
            // check if any childs of childs are active
            childActive = childActive + self.checkChildSelections(child.uid);
          }
        });
      }
      return childActive;
    } // end of "checkChildSelections()"

    /**
     * Function for coloring the layerswitcher entries, if there are any sublayers selected
     * @param entry
     */

  }, {
    key: "handleSelectedChilds",
    value: function handleSelectedChilds(entry) {
      if (this.checkChildSelections($(entry).data('uid')) >= 1) {
        $(entry).css('font-weight', 'bold');
      } else {
        $(entry).css('font-weight', 'normal');
      }
      this.starboard.update();
      return true;
    }
  }, {
    key: "updateParentLayers",
    value: function updateParentLayers(entry, layerUid, clickedLayer) {
      var layer, parentEntry, parentLayer;

      layer = this.proxy.layerController.arrLayers[layerUid];
      if (layer.pid != this.starboard.options.mapController.data.mapId) {
        // the layer has parents
        // by this we can access only the single span where the parent entry is in
        parentLayer = this.proxy.layerController.arrLayers[layer.pid];
        if (parentLayer) {
          parentEntry = entry.parentNode.parentNode.parentNode.getElementsByTagName('a')[0];
          if (parentEntry) {
            if (this.proxy.activeLayerIds[clickedLayer.id]) {
              $(parentEntry).css('font-weight', 'bold');
            } else {
              if (this.checkChildSelections($(parentEntry).data('uid')) >= 1) {
                $(parentEntry).css('font-weight', 'bold');
              } else {
                $(parentEntry).css('font-weight', 'normal');
                //$(parentEntry).addClass(cssConstants.INACTIVE);
              }
            }
            this.updateParentLayers(parentEntry, parentLayer.id, parentLayer);
          }
        }
      } else {
        return false;
      }
    }
  }]);

  return Layerswitcher;
}(); // end of "add methods"

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zoomlevel = undefined;

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Zoomlevel = exports.Zoomlevel = function (_ol$control$Control) {
  _inherits(Zoomlevel, _ol$control$Control);

  function Zoomlevel(options) {
    _classCallCheck(this, Zoomlevel);

    var _this = _possibleConstructorReturn(this, (Zoomlevel.__proto__ || Object.getPrototypeOf(Zoomlevel)).call(this, options));

    var self, element, updateZoomlevel;

    self = _this;

    if (!options || !options.mapController) {
      var _ret;

      console.warn('Zoomlevel control needs to know the map.');
      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    // default options
    options = $.extend({
      className: _c4gMapsConstant.cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    var mapView = options.mapController.map.getView();

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = mapView.getZoom();

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function () {
      updateZoomlevel();
    });

    _this.view = mapView;

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });
    return _this;
  }

  return Zoomlevel;
}(ol.control.Control);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-i18n.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-maps-i18n.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.langConstants = undefined;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "./Resources/public/js/c4g-maps-constant-i18n-en.js");

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
var language = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    language = _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData.lang === "en") {
    language = _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    language = _c4gMapsConstantI18nEn.langConstantsEnglish;
  }
} else {
  language = _c4gMapsConstantI18nEn.langConstantsEnglish;
}

var langConstants = exports.langConstants = language;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-interaction-geopicker.js":
/*!***************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-interaction-geopicker.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeoPicker = exports.GeoPicker = function (_ol$interaction$Inter) {
  _inherits(GeoPicker, _ol$interaction$Inter);

  /**
   *
   * @param options
   * @returns {boolean}
   * @constructor
   */
  function GeoPicker(options) {
    _classCallCheck(this, GeoPicker);

    var mapData, mapContainer, lat, lon, latIdx, lonIdx, latRnd, lonRnd;

    var _this = _possibleConstructorReturn(this, (GeoPicker.__proto__ || Object.getPrototypeOf(GeoPicker)).call(this, { handleEvent: options.handleEvent }));

    _this.options = options || {};

    if (!_this.options.mapContainer || !_this.options.mapContainer.data) {
      var _ret;

      console.warn('The GeoPicker needs a "mapContainer" in order to work.');
      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    mapData = _this.options.mapContainer.data;
    mapContainer = _this.options.mapContainer;
    // configurate geopicker
    _this.$fieldGeoX = $(mapData.geopicker.input_geo_x);
    _this.$fieldGeoY = $(mapData.geopicker.input_geo_y);

    _this.opticLayerSource = new ol.source.Vector({});
    _this.opticLayerVector = new ol.layer.Vector({
      source: _this.opticLayerSource,
      style: _this.geoPickerStyleFunction
    });
    _this.opticLayerFeature = null;

    if (_this.$fieldGeoX.val() && _this.$fieldGeoY.val()) {
      lat = _this.$fieldGeoY.val();
      lon = _this.$fieldGeoX.val();

      if (mapData.geopicker.anonymous) {
        _this.$fieldGeoY.remove();
        _this.$fieldGeoX.remove();

        latIdx = lat.indexOf('.');
        lonIdx = lon.indexOf('.');
        lat = lat.replace(/\D/g, "");
        lon = lon.replace(/\D/g, "");
        latRnd = Math.round(Math.random() * (99999999999 - 1) + 1);
        lonRnd = Math.round(Math.random() * (99999999999 - 1) + 1);
        if (latRnd > 49999999999) {
          lat = parseInt(lat) - latRnd;
        } else {
          lat = parseInt(lat) + latRnd;
        }
        if (lonRnd < 50000000000) {
          lon = parseInt(lon) - lonRnd;
        } else {
          lon = parseInt(lon) + lonRnd;
        }
        lat = lat + "";
        lon = lon + "";
        lat = lat.substr(0, latIdx) + '.' + lat.substr(latIdx, lat.length - latIdx);
        lon = lon.substr(0, lonIdx) + '.' + lon.substr(lonIdx, lon.length - lonIdx);
      }

      _this.opticLayerFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([parseFloat(lon), parseFloat(lat)])),
        pickerColor: [0, 180, 100, 1],
        anonymous: mapData.geopicker.anonymous
      });

      _this.opticLayerSource.addFeature(_this.opticLayerFeature);

      mapContainer.map.getView().fit(_this.opticLayerSource.getExtent(), mapContainer.map.getSize());
      // set zoom so we can see some tiles without error
      mapContainer.map.getView().setZoom(15);
    } else if (mapData.geoLocation && typeof mapData.geoLocation.setTracking === 'function') {
      mapData.geoLocation.setTracking(true);
    }
    mapContainer.map.addLayer(_this.opticLayerVector);

    //TODO wenn geopicker.clickDisabled (oder so) gesetzt ist, this.options.handleEvent = function(){}
    return _this;
  }

  _createClass(GeoPicker, [{
    key: 'geoPickerStyleFunction',
    value: function geoPickerStyleFunction(feature, projection, getId) {
      var color, white, result;

      if (getId) {
        return -1;
      }

      white = [255, 255, 255, 1];
      if (feature && typeof feature.get === 'function' && feature.get('pickerColor')) {
        color = feature.get('pickerColor');
      } else {
        color = [200, 0, 0, 0.7];
      }

      result = [];
      if (feature && typeof feature.get === 'function' && !feature.get('anonymous')) {
        result.push(new ol.style.Style({
          image: new ol.style.Circle({
            radius: 2,
            fill: new ol.style.Fill({
              color: color
            }),
            stroke: new ol.style.Stroke({
              color: white,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
        result.push(new ol.style.Style({
          image: new ol.style.Circle({
            radius: 20,
            stroke: new ol.style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
        result.push(new ol.style.Style({
          image: new ol.style.Circle({
            radius: 20,
            stroke: new ol.style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
        result.push(new ol.style.Style({
          image: new ol.style.Circle({
            radius: 40,
            stroke: new ol.style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
        result.push(new ol.style.Style({
          image: new ol.style.Circle({
            radius: 40,
            stroke: new ol.style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      }

      result.push(new ol.style.Style({
        image: new ol.style.Circle({
          radius: 60,
          stroke: new ol.style.Stroke({
            color: white,
            width: 4
          })
        }),
        zIndex: Infinity
      }));

      result.push(new ol.style.Style({
        image: new ol.style.Circle({
          radius: 60,
          stroke: new ol.style.Stroke({
            color: color,
            width: 2
          })
        }),
        zIndex: Infinity
      }));

      return result;
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(mapBrowserEvent) {
      if (mapBrowserEvent.type === "singleclick") {
        if (!this.options.disableClickEvent && !this.options.mapContainer.data.geopicker.disabled) {
          return !this.pick(mapBrowserEvent.coordinate);
        }
      }

      return true;
    }
  }, {
    key: 'pick',
    value: function pick(coordinate) {
      var arrLatLon;

      arrLatLon = ol.proj.toLonLat(coordinate);

      this.opticLayerFeature = new ol.Feature({
        geometry: new ol.geom.Point(coordinate)
      });

      this.opticLayerSource.clear();
      this.opticLayerSource.addFeature(this.opticLayerFeature);

      this.$fieldGeoX.val(arrLatLon[0]);
      this.$fieldGeoY.val(arrLatLon[1]);
      this.$fieldGeoX.change();
      this.$fieldGeoY.change();

      return true;
    }
  }]);

  return GeoPicker;
}(ol.interaction.Interaction);

/***/ }),

/***/ "./Resources/public/js/c4g-maps-main.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-maps-main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _c4gMaps = __webpack_require__(/*! ./c4g-maps */ "./Resources/public/js/c4g-maps.js");

jQuery(document).ready(function () {
  if (typeof mapData !== "undefined") {
    window.initMaps(mapData);
  }
});

window.initMaps = function (mapData) {
  var mapController = new _c4gMaps.MapController(mapData);
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-maphover.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-maphover.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapHover = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ./c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var MapHover = exports.MapHover = function () {

  /**
   * @TODO
   * [MapHover description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function MapHover(options) {
    _classCallCheck(this, MapHover);

    this.options = options || {};

    // default options
    this.options = $.extend({
      // mapController: undefined,
      activate: true
    }, this.options);

    if (!this.options.mapController) {
      console.warn('MapHover needs a mapController');
      return false;
    }

    // set needed vars
    this.listenerKey = false;
    this.map = this.options.mapController.map;
    this.lastFeatureStyle = null;
    this.lastHoveredFeature = null;

    // create tooltip
    this.hoverTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
      map: this.map,
      offset: [10, 10],
      horizontal: true,
      closeable: false
    });
    this.hoverTooltip.hide();

    if (this.options.activate) {
      this.activate();
    }
  }

  /**
   * @TODO: [activate description]
   *
   * @return  {[type]}  [description]
   */


  _createClass(MapHover, [{
    key: "activate",
    value: function activate() {
      if (!this.listenerKey) {
        this.listenerKey = this.map.on('pointermove', this.getHoverFunction(), this);
        //this.map.on('pointermove', this.changeFeatureStyles(), this);
      }
    } // end of "activate()"


    /**
     * @TODO: [deactivate description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.listenerKey) {
        ol.Observable.unByKey(this.listenerKey);
        this.listenerKey = false;
      }
    } // end of "deactivate()"


    /**
     * @TODO: [isActive description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "isActive",
    value: function isActive() {
      if (this.listenerKey) {
        return true;
      }
      return false;
    } // end of "getState()"


    /**
     * @TODO: [getHoverFunction description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "getHoverFunction",
    value: function getHoverFunction() {

      var self = this;

      return function (event) {

        var hovered,
            clustered,
            tooltipContent,
            tooltipHelper,
            features,
            tooltipLength,
            resolution,
            canvas,
            mapData = self.options.mapController.data,
            proxy = self.options.mapController.proxy;

        clustered = false;
        hovered = self.map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
          return {
            feature: feature,
            layer: layer
          };
        });
        resolution = self.map.getView().getResolution();

        if (!hovered) {
          self.hoverTooltip.hide();
          canvas = document.querySelector("canvas");
          $(canvas).css('cursor', 'default');
          if (mapData.hover_popups === '1' && mapData.hover_popups_stay != '1') {
            window.c4gMapsPopup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
          }

          if (self.lastHoveredFeature && self.lastFeatureStyle) {
            self.lastHoveredFeature.setStyle(self.lastFeatureStyle);
            self.lastHoveredFeature = null;
          }
          return false;
        }

        canvas = document.querySelector("canvas");
        $(canvas).css('cursor', 'pointer');

        if (hovered.feature && typeof hovered.feature.get === 'function' && hovered.feature.get('features')) {
          if (hovered.feature.get('features')[1]) {
            clustered = true;
          } else {
            hovered.feature = hovered.feature.get('features')[0];
          }
        }
        if (hovered.feature.getGeometry() && hovered.feature.getGeometry() instanceof ol.geom.LineString) {
          return false;
        }
        if (hovered.feature.get("hover_location") || self.lastHoveredFeature && self.lastHoveredFeature.get("hover_location")) {
          if (self.lastHoveredFeature && hovered.feature === self.lastHoveredFeature) {
            return false;
          }

          //set back styles when the features are not hovered anymore
          if (self.lastFeatureStyle) {
            if (self.lastHoveredFeature) {
              if (hovered.feature !== self.lastHoveredFeature) {
                if (self.lastFeatureStyle) {
                  self.lastHoveredFeature.setStyle(self.lastFeatureStyle);
                  //console.log("Changed back feature style");
                } else if (self.lastLayerStyle) {
                  self.lastHoveredFeature.setStyle(self.lastLayerStyle);
                  //console.log("Changed back layer-feature style");
                }
              }
            }
          }

          if (hovered.feature && _typeof(hovered.feature.getStyleFunction) && typeof hovered.feature.getStyleFunction === 'function' && typeof hovered.feature.getStyleFunction() === 'function') {
            self.lastHoveredFeature = hovered.feature;

            self.lastLayerStyle = hovered.layer.getStyle();
            self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
            //TODO get onhover style from db (vllt schon in proxy drin?)
            if (hovered.feature.get('hover_style') && proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
              if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
                hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
              } else {
                hovered.feature.setStyle(proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature));
              }
            }
          } else if (hovered.layer && _typeof(hovered.layer.getStyleFunction) && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function') {

            if (hovered.feature) {
              self.lastHoveredFeature = hovered.feature;
            } else {
              self.lastHoveredFeature = hovered.layer.getSource().getFeatures()[0];
              self.lastHoveredFeature = self.lastHoveredFeature.get('features')[0];
            }

            self.lastLayerStyle = hovered.layer.getStyle();
            self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
            if (hovered.feature.get('hover_style')) {
              if (!proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
                var arrIds = [];
                arrIds.push(hovered.feature.get("hover_style"));
                proxy.locationStyleController.loadLocationStyles(arrIds);
                self.lastHoveredFeature = null;
                return null;
              }
              if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
                hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
              } else {
                hovered.feature.setStyle(proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature));
              }
            }
          }
        }

        if (hovered && hovered.feature && hovered.feature.get('styleUrl')) {
          //if this property is set, we have a feature that has none of our styles => no tooltip
          return false;
        }
        // catch the case the layer is a baselayer (vector tiles)
        if (hovered && hovered.layer && hovered.layer.type === "VECTOR_TILE") {
          return false;
        }

        // set hover tooltips
        tooltipContent = false;
        if (!clustered && hovered.feature && typeof hovered.feature.get === 'function' && (hovered.feature.get('tooltip') || hovered.feature.get('graphicTitle'))) {
          tooltipContent = hovered.feature.get('tooltip');
          if (!tooltipContent) {
            tooltipContent = hovered.feature.get('graphicTitle');
          } else if ((typeof tooltipContent === "undefined" ? "undefined" : _typeof(tooltipContent)) === 'object' && tooltipContent.element && tooltipContent.element.childNodes[1]) {
            tooltipContent = tooltipContent.element.childNodes[1].innerHTML;
          }
          // @TODO: Check & fix
        } else if (hovered.feature && _typeof(hovered.feature.getStyleFunction) && typeof hovered.feature.getStyleFunction === 'function' && typeof hovered.feature.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.feature.getStyleFunction()(resolution)] && proxy.locationStyleController.arrLocStyles[hovered.feature.getStyleFunction()(resolution)].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.feature.getStyleFunction()(resolution)].tooltip;
          // @TODO: Check
        } else if (hovered.layer && _typeof(hovered.layer.getStyleFunction) && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()] && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip;
        } else if (hovered.layer && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)] && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip;
        } else if (hovered.layer && hovered.layer.tooltip) {
          tooltipContent = hovered.layer.tooltip;
        }
        if (clustered && hovered.feature.get('features')) {
          features = hovered.feature.get('features');
          if (features[0].get('tooltip') && features[0].get('tooltip_length')) {
            tooltipContent = features[0].get('tooltip');
            tooltipLength = parseInt(features[0].get('tooltip_length'));
            for (var i = 1; i < features.length; i++) {
              if (features[i].get('tooltip') && features[i].get('tooltip') != '') {
                tooltipContent = tooltipContent + ', ' + features[i].get('tooltip');
              }
            }
            if (tooltipContent.length > tooltipLength + 3) {
              if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
                tooltipContent = tooltipContent + '...';
              }
            }
          } else if (hovered.layer.tooltip && hovered.layer.tooltip_length) {
            tooltipHelper = tooltipContent;
            tooltipContent = '';
            tooltipLength = parseInt(hovered.layer.tooltip_length);
            for (i = 0; i < features.length; i++) {
              var singleTooltip = _c4gMapsUtils.utils.replaceAllPlaceholders(tooltipHelper, features[i], hovered.layer);
              if (singleTooltip != '') {
                if (tooltipContent == '') tooltipContent = singleTooltip;else tooltipContent = tooltipContent + ', ' + singleTooltip;
              }
            }
            if (tooltipContent.length > tooltipLength + 3) {
              if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
                tooltipContent = tooltipContent + '...';
              }
            }
          }
        }

        if (tooltipContent) {
          tooltipContent = _c4gMapsUtils.utils.decodeGeoJsonProperty(tooltipContent);

          // replace placeholders if possible
          if (hovered.feature.get('features')) {}
          tooltipContent = _c4gMapsUtils.utils.replaceAllPlaceholders(tooltipContent, hovered.feature, hovered.layer);

          if (tooltipContent.trim()) {
            // popup config
            self.hoverTooltip.setPosition(event.coordinate);
            self.hoverTooltip.setContent(tooltipContent);
            self.hoverTooltip.show();
          } else {
            self.hoverTooltip.hide();
          }
        } else {
          self.hoverTooltip.hide();
        }
        if (mapData.hover_popups === '1' && !clustered && hovered.feature) {
          var popupInfos = {};

          if (hovered.feature.get('popup')) {
            popupInfos = hovered.feature.get('popup');
          } else if (hovered.feature.get('loc_linkurl')) {
            return;
          } else if (hovered.layer && hovered.layer.popup) {
            popupInfos = hovered.layer.popup;
          } else {
            return;
          }
          var coord = hovered.feature.getGeometry().getCoordinates();
          if (!coord || coord && coord[0] && coord[0].length) {
            var extent = hovered.feature.getGeometry().getExtent();
            coord = self.map.getCoordinateFromPixel(event.pixel);
            coord = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
          }

          window.c4gMapsPopup.popup.setPosition(coord);

          if (popupInfos.content) {
            window.c4gMapsPopup.$content.html('');
            window.c4gMapsPopup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
            window.c4gMapsPopup.spinner.show();

            if (popupInfos.async === false) {
              var objPopup = {};
              objPopup.popup = popupInfos;
              objPopup.feature = hovered.feature;
              objPopup.layer = hovered.layer;
              // Call the popup hook for plugin specific popup content
              if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
              }
              proxy.setPopup(objPopup, proxy);
            } else {
              $.ajax({
                dataType: "json",
                url: proxy.api_infowindow_url + '/' + popupInfos.content,
                done: function done(data) {
                  var popupInfo = {
                    async: popupInfos.async,
                    content: data.content,
                    popup: popupInfos.popup,
                    routing_link: popupInfos.routing_link
                  };

                  var objPopup = {};
                  objPopup.popup = popupInfo;
                  objPopup.feature = hovered.feature;
                  objPopup.layer = hovered.layer;

                  // Call the popup hook for plugin specific popup content
                  if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                  }

                  proxy.setPopup(objPopup, proxy);
                }
              });
            }
          } else {
            window.c4gMapsPopup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
          }
        }
      };
    } // end of "getHoverFunction()"

  }, {
    key: "changeFeatureStyles",
    value: function changeFeatureStyles() {
      //TODO: change style of features which are hovered and have the option to change style on hover enabled
    }
  }]);

  return MapHover;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Spinner = exports.Spinner = function () {

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function Spinner(opt_options) {
    _classCallCheck(this, Spinner);

    var options, target, spinnerSpan;

    options = opt_options || {};

    // default options
    options = $.extend({
      className: '',
      target: '.' + _c4gMapsConstant.cssConstants.OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.SPINNER + options.className + ' ' + _c4gMapsConstant.cssConstants.HIDE;
    $(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;
  }

  _createClass(Spinner, [{
    key: 'show',
    value: function show() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        $(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          $(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }
  }]);

  return Spinner;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-tooltippopup.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-tooltippopup.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipPopUp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var TooltipPopUp = exports.TooltipPopUp = function () {

  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function TooltipPopUp(opt_options) {
    _classCallCheck(this, TooltipPopUp);

    var self, addClassName, closeButton;

    self = this;
    this.options = opt_options || {};

    // default options
    this.options = $.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options);

    // prepare additional classes
    addClassName = '';
    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }
    if (this.options.horizontal) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.HORIZONTAL;
    }
    if (this.options.closeable) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_CLOSE;
      this.element.appendChild(closeButton);

      $(closeButton).click(function () {
        self.close();
      });
    }

    this.contentContainer = document.createElement('div');
    this.element.appendChild(this.contentContainer);

    this.overlay = new ol.Overlay({
      element: this.element,
      insertFirst: false,
      offset: this.options.offset,
      positioning: 'bottom-left'
    });

    if (this.options.map) {
      this.options.map.addOverlay(this.overlay);
    }

    if (this.options.position) {
      this.overlay.setPosition(this.options.position);
    }
  }

  _createClass(TooltipPopUp, [{
    key: 'close',
    value: function close() {
      if (typeof this.options.closeFunction === 'function') {
        this.options.closeFunction();
      }

      if (this.options.map) {
        this.options.map.removeOverlay(this.overlay);
      }
    }

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: 'show',
    value: function show() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        $(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (!$(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        $(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }

    /**
     * @TODO
     * [getContent description]
     *
     */

  }, {
    key: 'getContent',
    value: function getContent() {
      return this.contentContainer.innerHTML;
    }

    /**
     * @TODO
     * [getPosition description]
     *
     */

  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.overlay.getPosition();
    }

    /**
     * @TODO
     * [setContent description]
     *
     * @param  {[type]}  content  [description]
     */

  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.contentContainer.innerHTML = content;
    }

    /**
     * @TODO
     * [setPosition description]
     *
     * @param  {[type]}  coordinates  [description]
     */

  }, {
    key: 'setPosition',
    value: function setPosition(coordinates) {
      this.overlay.setPosition(coordinates);
    }
  }]);

  return TooltipPopUp;
}(); // End of "add methods to TooltipPopUp"

/***/ }),

/***/ "./Resources/public/js/c4g-maps-popup-info-de.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-popup-info-de.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.isMobile = isMobile;
exports.fnHeader = fnHeader;
exports.fnFooter = fnFooter;
exports.fnGetTranslate_Type = fnGetTranslate_Type;
exports.fnArztInfo = fnArztInfo;
exports.fnKraftwerkInfo = fnKraftwerkInfo;
exports.fnWertstoffinfo = fnWertstoffinfo;
exports.fnAdditionalBuildingInfos = fnAdditionalBuildingInfos;
exports.fnSicherheitAdditional = fnSicherheitAdditional;
exports.fnWreckInfo = fnWreckInfo;
exports.fnKlosterAdditional = fnKlosterAdditional;
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
    return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
    );
}function translate(b) {
    var a = trim(b);return "yes" == a || "Yes" == a ? "Ja" : "no" == a ? "Nein" : "No" == a ? "nein" : "limited" == a ? "Eingeschr\xE4nkt" : "designated" == a ? "Ja" : "wood" == a ? "Holz" : "metal" == a ? "Metall" : "concrete" == a ? "Beton" : "plastic" == a ? "Plastik" : "stone" == a ? "Stein" : "steel" == a ? "Stahl" : "brick" == a ? "Ziegel" : "reinforced_concrete" == a ? "Stahlbeton" : "masonry" == a ? "Mauerwerk" : b;
}
var fnStandardInfoPopup = exports.fnStandardInfoPopup = function fnStandardInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e;if ("function" === typeof a) {
        var f = a.call(b)[0].getImage();if (f) try {
            e = f.getSrc();
        } catch (g) {
            e = "";
        }
    } else {
        f = a.getImage();try {
            e = f.getSrc();
        } catch (h) {
            e = "";
        }
    }d += fnHeader(c, e);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = exports.fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e = !1,
        f;f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;"hotel" == c.tourism && (e = !0);"guest_house" == c.tourism && (e = !0);"chalet" == c.tourism && (e = !0);"hostel" == c.tourism && (e = !0);"alpine_hut" == c.tourism && (e = !0);if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;if ("museum" == c.tourism || "museum" == c.amenity) e = !0;"cinema" == c.amenity && (e = !0);"theatre" == c.amenity && (e = !0);if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;"playground" == c.leisure && (e = !0);c.aerialway && (e = !0);if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;"station" == c.railway && (e = !0);"swimming" == c.sport && (e = !0);"swimming_pool" == c.leisure && (e = !0);"swimming_pool" == c.amenity && (e = !0);"waterpark" == c.leisure && (e = !0);c.water_park && (e = !0);"sports_centre" == c.leisure && (e = !0);switch (e) {case !1:
            d += fnHeader(c, f);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());break;case !0:
            d += fnHeader(c, f);}return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
    var c = "",
        d = "32px";a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
        if (b.name) var e = b.name;b["piste:name"] && (e = b["piste:name"]);b["xmas:name"] && (e = b["xmas:name"]);b["xmas:location"] && (e = b["xmas:location"]);c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
    } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');c += fnGetTranslate_Type(b);return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
    var c = "",
        d = !1;b["addr:housename"] && (c += "Geb\xE4udename: " + b["addr:housename"] + "<br/>", d = !0);b["addr:floor"] ? (c += "Etage: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "Etage: " + b["addr:level"] + "<br/>", d = !0);b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);b["addr:postcode"] && (c += b["addr:postcode"] + " ");b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
        var e = b.sqkm.length % 3,
            f = 0 < e ? b.sqkm.substring(0, e) : "";for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
            f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
        }c += "Fl\xE4che: " + f + " Km\xB2<br/>";
    } else c += "Fl\xE4che " + b.sqkm + "<br/>";b["contact:phone"] && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('Telefon: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);b.phone && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('Telefon: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);b["contact:fax"] ? (c += "Telefax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "Telefax: " + b.fax + "<br/>", d = !0);b["contact:email"] ? (c += 'E-Mail-Adresse: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'E-Mail-Adresse: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);d && (c += "<br/>");if (b.opening_hours) {
        d = b.opening_hours;for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), d = d.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"'), d = d.replace("off", "ausgenommen"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }if (b["xmas:opening_hours"]) {
        d = b["xmas:opening_hours"];for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Link zu Wikipedia</a><br/>');b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Link zu Wikimedia</a><br/>');b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Webcam: <a href="' + d + '" target="_blank">Link zur Webcam</a><br/>');b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');d = "";b.internet_access && (d += "Internetzugriff: " + translate(b.internet_access) + "<br/>");b["internet_access:fee"] && (d += "Internet Geb\xFChr: " + translate(b["internet_access:fee"]) + "<br/>");b["wifi_access:operator"] && (d += "wifi Betreiber: " + b["wifi_access:operator"] + "<br/>");b["wifi_access:technology"] && (d += "wifi Technologie: " + b["wifi_access:technology"] + "<br/>");b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");"" != d && (c += 'Internetzugang vorhanden<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");b.wheelchair && (c += "rollstuhlgeeignet: " + translate(b.wheelchair) + "<br/>");b["wheelchair:description"] && (c += "Beschreibung: " + b["wheelchair:description"] + "<br/>");b["wheelchair:entrance_width"] && (c += "Breite des Eingangs in CM: " + b["wheelchair:entrance_width"] + "<br/>");b["wheelchair:step_height"] && (c += "H\xF6he der Stufe am Eingang in CM: " + b["wheelchair:step_height"] + "<br/>");b["wheelchair:rooms"] && (c += "Anzahl rollstuhlgerechter R\xE4ume: " + b["wheelchair:rooms"] + "<br/>");b["wheelchair:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["cent:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["ramp:wheelchair"] && (c += "Rampe f\xFCr Rollstuhlfahrer: " + b["ramp:wheelchair"] + "<br/>");b["capacity:disabled"] && (c += "Behindertenparkpl\xE4tze: " + translate(b["capacity:disabled"]) + "<br/>");b["toilets:wheelchair"] && (c += "Behinderdengerechte Toilette: " + translate(b["toilets:wheelchair"]) + "<br/>");b.centralkey && (c += "Zentralschl\xFCssel: " + b.centralkey + "<br/>");b.note && (c += b.note + "<br/>");b.description && (c += b.description + "<br/>");b.operator && (c += "Betreiber: " + b.operator + "<br/>");b.ref && (c += "Referenz: " + b.ref + "<br/>");"yes" == b.lit && (c += "Dieses Objekt ist beleuchtet.<br/>");b.shop && (d = "", b.brand && (d += "Markenzeichen: " + b.brand + "<br/>"), b.sells && (d += "Verkaufs: " + b.sells + "<br/>"), b.origin && (d += "Herkunftsl\xE4nder: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "Gro\xDFh\xE4ndler: Ja<br/>"), "" != d && (c += 'Weitere Angaben zum Shop: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">Link zur OpenStreetMap</a><br/>'));return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
    var a = "";if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "Arzt<br/>";if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "Krankenhaus mit Notaufnahme<br/>" : a + "Krankenhaus<br/>";"dentist" == b.amenity && (a += "Zahnarzt<br/>");if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "Apotheke<br/>";if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "Physiotherapeut<br/>";
    if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "Ergotherapeut<br/>";if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "Psychotherapeut<br/>";"alternative" == b.healthcare && (a += "Alternativ- und Komplement\xE4rmediziner<br/>");"midwife" == b.healthcare && (a += "Hebamme<br/>");if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "Logop\xE4de<br/>";
    "yes" == b["health_speciality:music_therapy"] && (a += "Musiktherapeut<br/>");"veterinary" == b.amenity && (a += "Tierarzt<br/>");"fire_station" == b.amenity && (a += "Feuerwehrhaus<br/>");"fire_extinguisher" == b.emergency && (a += "Feuerl\xF6scher<br/>");"aed" == b.emergency && (a += "Mobiler Defibrilator<br/>");"defibrillator" == b.emergency && (a += "Mobiler Defibrilator<br/>");"phone" == b.emergency && (a += "Notrufs\xE4ule<br/>");"police" == b.amenity && (a += "Polizeiwache<br/>");"ambulance_station" == b.emergency && (a += "Rettungswache<br/>");
    "technical" == b.emergency_service && (a += "Technisches Hilfswerk<br/>");"water" == b.emergency_service && (a += "Wasserrettungsstation<br/>");"baywatch" == b.waterway && (a += "Wasserwacht<br/>");"air" == b.emergency_service && (a += "Rettungshubschrauber<br/>");"emergency_access_point" == b.highway && (a += "Notfallpunkt<br/>");if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "Rettungsbootstation<br/>";"life_ring" == b.emergency && (a += "Rettungsring<br/>");"siren" == b.emergency && (a += "Sirene<br/>");"life_ring" == b.amenity && (a += "Rettungsring<br/>");"rescue_station" == b.amenity && (a += "Rettungsstation<br/>");"fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "Unterflurhydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "\xDCberflurhydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "Wandhydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "Saugstelle<br/>"));"suction_point" == b.emergency && (a += "Saugstelle<br/>");"fire_water_pond" == b.emergency && (a += "L\xF6schteich<br/>");"mountain" == b.emergency_service && (a += "Bergrettungsstation<br/>");"water_tank" == b.emergency && (a += "L\xF6schwassertank<br/>");"container" == b.recycling_type && (a += "Recycling Container<br/>");"recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "Absaugstation<br/>" : "recycling" == b.amenity && (a += "Wertstoffhof<br/>");"yes" == b["diet:pescetarian"] ? a += "pescetarische Gerichte vorhanden<br/>" : "only" == b["diet:pescetarian"] && (a += "nur pescetarische Gerichte<br/>");"yes" == b["diet:vegetarian"] ? a += "vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "nur vegetarische Gerichte<br/>");"yes" == b["diet:lacto_vegetarian"] ? a += "lacto-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "nur lacto-vegetarische Gerichte<br/>");"yes" == b["diet:ovo_vegetarian"] ? a += "ovo-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "nur ovo-vegetarische Gerichte<br/>");"yes" == b["diet:vegan"] ? a += "vegane Gerichte vorhanden<br/>" : "only" == b["diet:vegan"] && (a += "nur vegane Gerichte<br/>");"yes" == b["diet:fruitarian"] ? a += "frutarische Gerichte vorhanden<br/>" : "only" == b["diet:fruitarian"] && (a += "nur frutarische Gerichte<br/>");"yes" == b["diet:raw"] ? a += "rohk\xF6stliche Gerichte vorhanden<br/>" : "only" == b["diet:raw"] && (a += "nur rohk\xF6stliche Gerichte<br/>");"yes" == b["diet:gluten_free"] ? a += "glutenfreie Gerichte vorhanden<br/>" : "only" == b["diet:gluten_free"] && (a += "nur glutenfreie Gerichte<br/>");"yes" == b["diet:dairy_free"] ? a += "milchfreie Gerichte vorhanden<br/>" : "only" == b["diet:dairy_free"] && (a += "nur milchfreie Gerichte<br/>");"yes" == b["diet:lactose_free"] ? a += "laktosefreie Gerichte vorhanden<br/>" : "only" == b["diet:lactose_free"] && (a += "nur laktosefreie Gerichte<br/>");"yes" == b["diet:halal"] ? a += "Hal\u0101l Gerichte vorhanden<br/>" : "only" == b["diet:halal"] && (a += "nur Hal\u0101l Gerichte<br/>");"yes" == b["diet:kosher"] ? a += "koschere Gerichte vorhanden<br/>" : "only" == b["diet:kosher"] && (a += "nur koschere Gerichte<br/>");"pub" == b.amenity && (a += "Gastst\xE4tte<br/>");"bar" == b.amenity && (a += "Bar<br/>");"yes" == b.frozen_yogurt && (a += "Frozen Yogurt im Angebot<br/>");"yes" == b.slush_ice && (a += "Slush Ice im Angebot<br/>");"yes" == b.cake && (a += "Kuchenteilchen, Geb\xE4ck etc. im Angebot<br/>");"yes" == b.coffee && (a += "Kaffeegetr\xE4nke im Angebot<br/>");"yes" == b.drinks && (a += "Getr\xE4nke im Angebot<br/>");"biergarten" == b.amenity && (a += "Biergarten<br/>");"restaurant" == b.amenity && (a += "Restaurant<br/>");"fast_food" == b.amenity && (a += "Fast Food Restaurant<br/>");if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "Caf\xE9, Bistro<br/>";if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "Eiscafe<br/>";"alpine_hut" == b.tourism && (a += "Bergh\xFCtte<br/>");"aquarium" == b.tourism && (a += "Aquarium<br/>");"apartment" == b.tourism && (a += "Ferienwohnung<br/>");"attraction" == b.tourism && (a += "Sehensw\xFCrdigkeit<br/>");"artwork" == b.tourism && (a += "Skulptur<br/>");"camp_site" == b.tourism && (a += "Campingplatz<br/>");"caravan_site" == b.tourism && (a += "Wohnmobilstellplatz<br/>");
    "chalet" == b.tourism && (a += "Ferienwohnung /-haus<br/>");"gallery" == b.tourism && (a += "Kunstgalerie<br/>");"guest_house" == b.tourism && (a += "Pension, Gasthaus, Bed & Breakfast<br/>");"hostel" == b.tourism && (a += "Jugendherberge, Hostel<br/>");"hotel" == b.tourism && (a += "Hotel<br/>");"motel" == b.tourism && (a += "Motel<br/>");"museum" == b.tourism && (a += "Museum<br/>");"picnic_site" == b.tourism && (a += "Rast- und Picknickplatz<br/>");"theme_park" == b.tourism && (a += "Freizeit- oder Themenpark<br/>");"viewpoint" == b.tourism && (a += "Aussichtspunkt<br/>");
    "wilderness_hut" == b.tourism && (a += "Schutzh\xFCtte<br/>");"wine_cellar" == b.tourism && (a += "Weinkeller<br/>");"zoo" == b.tourism && (a += "Zoo / Tierpark<br/>", "enclosure" == b.zoo && (a += "mit Wildgehege<br/>"), "petting_zoo" == b.zoo && (a += "mit Streichelzoo<br/>"), "falconry" == b.zoo && (a += "mit Falknerei<br/>"));"trail_riding_station" == b.tourism && (a += "Wanderreitstation<br/>");"fishing" == b.club && (a += "Angelverein<br/>");"sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");"amateur_radio" == b.club && (a += "Amateurfunker<br/>");
    "art" == b.club && (a += "Kunstverein<br/>");"astronomy" == b.club && (a += "Astronomieverein<br/>");"automobile" == b.club && (a += "Automobilverein<br/>");"board_games" == b.club && (a += "Brettspielverein<br/>");"card_games" == b.club && (a += "Kartenspielverein<br/>");"charity" == b.club && (a += "Charity-Verein<br/>");"chess" == b.club && (a += "Schachverein<br/>");"cinema" == b.club && (a += "Kinoverein<br/>");"cooking" == b.club && (a += "Kochverein<br/>");"culture" == b.club && (a += "Kulturverein<br/>");"doityourself" == b.club && (a += "doityourself-Verein<br/>");
    "equestrian" == b.club && (a += "Reitverein<br/>");"ethnic" == b.club && (a += "Ethnischer Verein<br/>");"fan" == b.club && (a += "Fanverein<br/>");"freemasonry" == b.club && (a += "Freimaurer-Verein<br/>");"game" == b.club && (a += "Spieleverein<br/>");"history" == b.club && (a += "Historischer-Verein / Verein f\xFCr Geschichte<br/>");"hunting" == b.club && (a += "Jagdverein<br/>");"linux" == b.club && (a += "Linux-Verein<br/>");"motorcycle" == b.club && (a += "Motorradverein<br/>");"music" == b.club && (a += "Musikverein<br/>");"nature" == b.club && (a += "Naturverein<br/>");
    "nudism" == b.club && (a += "Nudisten-Verein / FKK-Verein<br/>");"photography" == b.club && (a += "Fotografieverein<br/>");"politics" == b.club && (a += "Verein f\xFCr Politik<br/>");"relegion" == b.club && (a += "Politischer-Verein<br/>");"scout" == b.club && (a += "Pfadfinderin/Pfadfinder<br/>");"smoke" == b.club && (a += "Raucherverein<br/>");"sport" == b.club && (a += "Sportverein<br/>");"theatre" == b.club && (a += "Theaterverein<br/>");"veterans" == b.club && (a += "Veteranen<br/>");"amusement_arcade" == b.leisure && (a += "Spielhalle<br/>");"beach_resort" == b.leisure && (a += "Standbad<br/>");"bird_hide" == b.leisure && (a += "Vogelbeobachtungspunkt<br/>");"common" == b.leisure && (a += "\xD6ffentliche Gr\xFCnfl\xE4chen<br/>");"club" == b.leisure && (a += "Club/Verein<br/>");"dance" == b.leisure && (a += "Tanzen<br/>");"dog_park" == b.leisure && (a += "Hundepark<br/>");"firepit" == b.leisure && (a += "Feuerstelle<br/>");"fishing" == b.leisure && (a += "Angelstelle<br/>");"garden" == b.leisure && (a += "Garten<br/>");"golf_course" == b.leisure && (a += "Golfplatz<br/>");"hackerspace" == b.leisure && (a += "Ort f\xFCr Hackertreffen<br/>");
    "horse_riding" == b.leisure && (a += "Reitstall / Reiterhof<br/>");"ice_rink" == b.leisure && (a += "Eislaufbahn<br/>");"nature_reserve" == b.leisure && (a += "Naturschutzgebiet (NSG)<br/>");"park" == b.leisure && (a += "Gr\xFCnanlage<br/>");"miniature_golf" == b.leisure && (a += "Minigolf<br/>");"pitch" == b.leisure && (a += "Spielfeld<br/>");"pitch" == b.leisure && "yes" == b.building && (a += "Sporthalle<br/>");"playground" == b.leisure && "yes" == b.building ? a += "Spielscheune<br/>" : "playground" == b.leisure && (a += "Spielplatz<br/>");"social_club" == b.leisure && (a += "Treffpunkt f\xFCr Freizeitgruppen<br/>");"spa" == b.leisure && (a += "Heilbad / Spa<br/>");"sports_centre" == b.leisure && (a += "Sportzentrum<br/>");"climbing_adventure" == b.sport && (a += "Seilgarten<br/>");"stadium" == b.leisure && (a += "Stadion<br/>");"swimming_pool" == b.leisure && (a += "Schwimmbecken<br/>");"track" == b.leisure && (a += "Rennbahn<br/>");"water_park" == b.leisure && (a += "Wasserpark<br/>");"wildlife_hide" == b.leisure && (a += "Wildbeobachtungspunkt<br/>");"adult_gaming_centre" == b.leisure && (a += "Spielothek<br/>");
    "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "Bowlingcenter<br/>");"bowling_alley" == b.leisure && "9pin" == b.sport && (a += "Kegelbahn<br/>");if ("karting" == b.sport || "motor" == b.sport) a += "Kart-/Motorsport<br/>";if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";if (b["piste:type"]) switch (b["piste:type"]) {case "skitour":
            a += "Piste f\xFCr Skitouren<br/>";break;case "downhill":
            a += "Skiabfahrt<br/>";break;case "sled":
            a += "Rodelberg / Rodelstrecke<br/>";break;case "nordic":
            a += "Langlauf Piste<br/>";break;case "hike":
            a += "Schneeschuh- und Winterwanderweg<br/>";break;case "snow_park":
            a += "Snow-Park<br/>";}if (b.sport) switch (b.sport) {case "surfing":
            a += "Surfen<br/>";break;case "kitesurfing":
            a += "Kitesurfen<br/>";break;case "water_ski":
            a += "Wasserski<br/>";}if (b.aerialway) switch (b.aerialway) {case "cable_bar":
            a += "Lift mit Gondeln<br/>";break;case "gondola":
            a += "Lift mit Gondeln<br/>";break;case "chair_lift":
            a += "Sessellift<br/>";break;case "mixed_lift":
            a += "Lift mit Sesseln und Gondeln<br/>";break;case "drag_lift":
            a += "Skilift<br/>";
            break;case "t-bar":
            a += "T-Lift<br/>";break;case "t-bar":
            a += "T-Lift (einseitig)<br/>";break;case "platter":
            a += "Lift mit Sitzscheibe<br/>";break;case "rope_tow":
            a += "B\xFCgellift<br/>";break;case "magic_carpet":
            a += "Bef\xF6rderungsband<br/>";break;default:
            a += "unbekannt";}"mosque" == b.building && (a += "Moschee<br/>");"synagogue" == b.building && (a += "Synagoge<br/>");"apartments" == b.building && (a += "Wohnung<br/>");"farm" == b.building && (a += "Farm<br/>");"hotel" == b.building && (a += "Hotel<br/>");"house" == b.building && (a += "Haus<br/>");"detached" == b.building && (a += "Freistehend<br/>");"residential" == b.building && (a += "Residenz<br/>");if ("domitory" == b.building || "residential plus" == b.building) a += "Wohnheim<br/>";"terrace" == b.building && (a += "Terrasse<br/>");"houseboat" == b.building && (a += "Hausboot<br/>");"bungalow" == b.building && (a += "Bungalow<br/>");"static_caravan" == b.building && (a += "Stehender Wohnwagen<br/>");"commercial" == b.building && (a += "Kommerziell<br/>");"retail" == b.building && (a += "Verkauf<br/>");"warehouse" == b.building && (a += "Lagerhaus<br/>");"bakehouse" == b.building && (a += "Backstube<br/>");"temple" == b.building && (a += "Tempel<br/>");"shrine" == b.building && (a += "Schrein<br/>");"civic" == b.building && (a += "B\xFCrgerlich<br/>");"stadium" == b.building && (a += "Stadium<br/>");"train_station" == b.building && (a += "Bahnhof<br/>");"university" == b.building && (a += "Universit\xE4t<br/>");"public" == b.building && (a += "\xD6ffentliches Geb\xE4ude<br/>");"bridge" == b.building && (a += "Br\xFCcke<br/>");"bunker" == b.building && (a += "Bunker<br/>");"cabin" == b.building && (a += "H\xFCtte<br/>");"conservatory" == b.building && (a += "Wintergarten<br/>");"construction" == b.building && (a += "Im Bau<br/>");"garage" == b.building && (a += "Garage<br/>");"garages" == b.building && (a += "Garagen<br/>");"greenhouse" == b.building && (a += "Gew\xE4chshaus<br/>");"hangar" == b.building && (a += "Hangar<br/>");"hut" == b.building && (a += "H\xFCtte<br/>");"pavillion" == b.building && (a += "Pavillion<br/>");"roof" == b.building && (a += "\xDCberdacht<br/>");"shed" == b.building && (a += "Gartenh\xE4uschen<br/>");
    "transformer_tower" == b.building && (a += "Transformator Turm<br/>");"service" == b.building && (a += "Service-Stelle<br/>");"kiosk" == b.building && (a += "Kiosk<br/>");"carport" == b.building && (a += "Carport<br/>");"ruins" == b.building && (a += "Ruinen<br/>");"gambling" == b.amenity && (a += "Spielhalle<br/>");"library" == b.amenity && (a += "B\xFCcherei<br/>");"fountain" == b.amenity && (a += "Brunnen<br/>");"attraction" == b.amenity && (a += "Sehensw\xFCrdigkeit<br/>");if ("social_centre" == b.amenity || "club" == b.amenity) a += "Verein / Club<br/>";
    "townhall" == b.amenity && (a += "Rathaus / B\xFCrgerhaus<br/>");"bench" == b.amenity && (a += "Parkbank<br/>");if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "Friedhof<br/>";"post_box" == b.amenity && (a += "Briefkasten<br/>");"post_office" == b.amenity && (a += "Postamt<br/>");"telephone" == b.amenity && (a += "Telefon<br/>");"atm" == b.amenity && (a += "Geldautomat<br/>");"bank" == b.amenity && (a += "Bankfiliale<br/>");"toilets" == b.amenity && "yes" == b.diaper ? a += "\xD6ffentliche Toilette mit Wickeltisch<br/>" : "toilets" == b.amenity && (a += "\xD6ffentliche Toilette<br/>");"school" == b.amenity && "1" == b["isced:level"] ? a += "Grundschule<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "Sekundarstufe I<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "Sekundarstufe II<br/>" : "school" == b.amenity && (a += "Schule<br/>");"kindergarten" == b.amenity && (a += "Kindergarten<br/>");"internet_cafe" == b.amenity && (a += "Internetcaf\xE9<br/>");"daycare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");"childcare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");
    "university" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"college" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"shelter" == b.amenity && (a += "Unterstand<br/>");"bbq" == b.amenity && (a += "Grillplatz<br/>");"nightclub" == b.amenity && (a += "Diskothek / Nachtklub<br/>");"bicycle_parking" == b.amenity && (a += "Fahrradparkplatz<br/>");"bicycle_rental" == b.amenity && (a += "Fahrradverleih<br/>");"boat_sharing" == b.amenity && (a += "Bootsverleih<br/>");"car_sharing" == b.amenity && (a += "Car-Sharing<br/>");"cinema" == b.amenity && (a += "Kino<br/>");"swimming_pool" == b.amenity && (a += "Schwimmbad<br/>");if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "Botschaft<br/>";"embassy" == b.amenity && "consulate" == b.diplomatic && (a += "Konsulate<br/>");"embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "Generalkonsulate<br/>");"embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "Honorarkonsulate<br/>");"embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "St\xE4ndige Vertretung<br/>");"embassy" == b.amenity && "delegation" == b.diplomatic && (a += "Delegation<br/>");"embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "Hochkommissariat<br/>");"Barfusspfad" == b.amenity && (a += "Barfu\xDFpfad<br/>");"casino" == b.amenity && (a += "Casino<br/>");"spa" == b.amenity && (a += "Heilbad / Spa<br/>");"stables" == b.amenity && (a += "Reitstall / Reiterhof<br/>");"watering_place" == b.amenity && (a += "Wasserstelle / Tr\xE4nke<br/>");"yes" == b.watering_place && (a += "Wasserstelle / Tr\xE4nke<br/>");"water_point" == b.amenity && (a += "gro\xDFe Trinkwasserstelle<br/>");
    "taxi" == b.amenity && (a += "Taxi<br/>");"car_wash" == b.amenity && (a += "Autowaschanlage<br/>");"brothel" == b.amenity && (a += "Bordell, Freudenhaus<br/>");"stripclub" == b.amenity && (a += "Stripclub<br/>");"swingerclub" == b.amenity && (a += "Swingerclub<br/>");"planetarium" == b.amenity && (a += "Planetarium<br/>");"courthouse" == b.amenity && (a += "Gericht<br/>");"crematorium" == b.amenity && (a += "Krematorium<br/>");if ("crypt" == b.amenity || "crypt" == b.building) a += "Krypta<br/>";"hunting_stand" == b.amenity && (a += "Hochsitz<br/>");"photo_booth" == b.amenity && (a += "Fotoautomat<br/>");"prison" == b.amenity && (a += "Gef\xE4ngnis<br/>");"ranger_station" == b.amenity && (a += "National Park Ranger Station<br/>");"register_office" == b.amenity && (a += "Standesamt<br/>");"marketplace" == b.amenity && (a += "Marktplatz / Wochenmarkt<br/>");"solarium" == b.amenity && (a += "Solarium<br/>");"sauna" == b.amenity && (a += "Sauna<br/>");"shower" == b.amenity && (a += "\xF6ffentliche Dusche<br/>");if ("waste_disposal" == b.amenity && (a += "M\xFCllentsorgung auf \xF6ffentlichen Pl\xE4tzen<br/>", b.waste)) switch (a += "Art: ", b.waste) {case "trash":
            a += "Allgemeiner M\xFCll<br/>";break;case "oil":
            a += "Oil<br/>";break;case "drugs":
            a += "Pharmazeutisch<br/>";break;case "organic":
            a += "Kompost<br/>";break;case "plastic":
            a += "Plastik<br/>";break;case "rubble":
            a += "Schutt<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;default:
            a += "Allgemeiner M\xFCll<br/>";}if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "Hunde-Code M\xFCllcontainer<br/>";if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "Pfadfinderheim<br/>";"ferry_terminal" == b.amenity && (a += "F\xE4hrhafen<br/>");"bureau_de_change" == b.amenity && (a += "Geldwechselstube<br/>");"youth_club" == b.amenity && (a += "Jugendzentrum<br/>");"festival_grounds" == b.amenity && (a += "Festivalgel\xE4nde<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Offene Feuerstelle<br/>";if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Eintrittskartenautomat<br/>";break;case "animal_feed":
            a += "Tierfutterautomat<br/>";
            break;case "bicycle_tube":
            a += "Fahrradschlauchautomat<br/>";break;case "books":
            a += "B\xFCcherautomat<br/>";break;case "candles":
            a += "Kerzenautomat<br/>";break;case "cigarettes":
            a += "Zigarettenautomat<br/>";break;case "chemist":
            a += "Apotheken/Drogerie Automat<br/>";break;case "condoms":
            a += "Kondomautomat<br/>";break;case "drinks":
            a += "Getr\xE4nkeautomat<br/>";break;case "electronics":
            a += "Automat f\xFCr Elektro-Zubeh\xF6r<br/>";break;case "elongated_coin":
            a += "M\xFCnzpr\xE4gungsautomat<br/>";break;
        case "excrement_bags":
            a += "Hundet\xFCtenspender<br/>";break;case "feminine_hygiene":
            a += "Automat f\xFCr Damenhygieneprodukte<br/>";break;case "first_aid":
            a += "Erste-Hilfe-Automat<br/>";break;case "fishing_tackle":
            a += "Automat f\xFCr Angelzubeh\xF6r<br/>";break;case "fishing_bait":
            a += "Angelk\xF6derautomat<br/>";break;case "flowers":
            a += "Blumenautomat<br/>";break;case "food":
            a += "Lebensmittel-Automat<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfelautomat<br/>";break;case "ice_cream":
            a += "Automat f\xFCr Speiseeis<br/>";
            break;case "ink_cartridges":
            a += "Druckerpatronen Automat<br/>";break;case "laundry_detergent":
            a += "Waschmittelautomat<br/>";break;case "public_transport_tickets":
            a += "Fahrkartenautomat<br/>";break;case "newspaper":
            a += "Zeitungsautomat<br/>";break;case "parcel_pickup":
            a += "Packstation<br/>";break;case "parcel_mail_in":
            a += "Paketstation<br/>";break;case "parking_tickets":
            a += "Parkscheinautomat<br/>";break;case "photos":
            a += "Fotoautomat<br/>";break;case "sex_toys":
            a += "Automat f\xFCr Sexspielzeug<br/>";break;
        case "SIM_cards":
            a += "Automat f\xFCr SIM Karten<br/>";break;case "stamps":
            a += "Briefmarkenautomat<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeitenautomat<br/>";break;case "syringes":
            a += "Spritzenautomat<br/>";break;case "toll":
            a += "Maut-Automat<br/>";break;case "toys":
            a += "Spielzeugautomat<br/>";break;case "umbrellas":
            a += "Regenschirmautomat<br/>";break;default:
            a += "Verkaufsautomat<br/>";} else a += "Verkaufsautomat<br/>";"arts_centre" == b.amenity && (a += "Kulturzentrum<br/>");"artwork" == b.amenity && (a += "Kunstwerk / Kunstobjekt<br/>");
    "museum" == b.amenity && (a += "Museum<br/>");"theatre" == b.amenity && (a += "Theater<br/>");"cathedral" == b.building && (a += "Kathedrale<br/>");"church" == b.building && (a += "Kirche<br/>");"chapel" == b.building && (a += "Kapelle<br/>");"place_of_worship" == b.amenity && (a += "Kirche / Kultst\xE4tte<br/>");"village" == b.abandoned && (a += "Verlassene Stadt<br/>");"theme_park" == b["abandoned:tourism"] && (a += "Verlassener Vergn\xFCgungspark<br/>");"prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "KZ Gedenkst\xE4tte<br/>");"yes" == b.abandoned && "bunker" == b.military && (a += "Verlassene Bunkeranlage<br/>");"yes" == b.abandoned && "barracks" == b.military && (a += "Verlassene Milit\xE4rbaracken<br/>");"yes" == b.abandoned && "airfield" == b.military && (a += "Verlassene Milit\xE4rflugplatz<br/>");"monastery" == b.historic && (a += "Historisches Kloster<br/>");"monastery" == b.amenity && (a += "Kloster<br/>");"monastery" == b.building && (a += "Kloster<br/>");"manor" == b.historic && (a += "Gutshaus / Herrenhaus<br/>");"boundary_stone" == b.historic && (a += "Historischer Grenzstein<br/>");"milestone" == b.historic && (a += "Historischer Meilenstein<br/>");"monument" == b.historic && (a += "Monument<br/>");"palace" == b.historic && (a += "Palast<br/>");"mine" == b.historic && (a += "Verlassene Mine<br/>");"ruins" == b.historic && (a += "Ruine<br/>");"harbour" == b.historic_usage && (a += "historischer Hafen<br/>");"rune_stone" == b.historic && (a += "Runenstein<br/>");"battlefield" == b.historic && (a += "Schlachtfeld<br/>");"blacksmith" == b.historic && (a += "Historische Schmiede<br/>");
    if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "Schrein / Bildstock<br/>";"city_gate" == b.historic && (a += "Stadttor<br/>");"wayside_cross" == b.historic && (a += "Wegkreuz<br/>");"monument" == b.amenity && (a += "Denkmal<br/>");"memorial" == b.historic && (a += "Denkmal<br/>");"optical_telegraph" == b.historic && (a += "Optischer Telegraph<br/>");if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {case "defensive":
            a += "Burg<br/>";break;case "palace":
            a += "Palast<br/>";break;case "stately":
            a += "Schloss<br/>";
            break;case "manor":
            a += "Herrenhaus<br/>";break;case "fortress":
            a += "Festung<br/>";break;case "castrum":
            a += "R\xF6misches Milit\xE4rlager<br/>";break;case "shiro":
            a += "Shiro<br/>";break;case "kremlin":
            a += "Kreml<br/>";break;default:
            a += "Schloss / Burg<br/>";} else a += "Schloss / Burg<br/>";"archaeological_site" == b.historic && (a += "Arch\xE4ologische Fundst\xE4tte<br/>");if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "rock-cut":
            a += "Felsgrab<br/>";break;
        case "hypogeum":
            a += "Hypog\xE4um<br/>";break;case "war_grave":
            a += "Soldatenfriedhof<br/>";break;case "mausoleum":
            a += "Mausoleum<br/>";break;case "columbarium":
            a += "Kolumbarium<br/>";break;case "crypt":
            a += "Krypta<br/>";break;case "pyramid":
            a += "Pyramide<br/>";break;case "sarcophagus":
            a += "Sarkophag<br/>";break;case "vault":
            a += "Gruft<br/>";break;case "tombstone":
            a += "Grabstein<br/>";break;default:
            a += "Historische Grabst\xE4tte<br/>";} else a += "Historische Grabst\xE4tte<br/>";"accountant" == b.office && (a += "Buchhalter / Wirtschaftpr\xFCfer<br/>");"administrative" == b.office && (a += "Kreis- bzw. Gemeindebeh\xF6rde<br/>");"architect" == b.office && (a += "Architekturb\xFCro<br/>");"association" == b.office && (a += "Verein, Vereinigung bzw. Interessengemeinschaft<br/>");"physician" == b.office && (a += "Arzt<br/>");"camping" == b.office && (a += "Rezeption Campingplatz oder B\xFCro Freizeitpark<br/>");"company" == b.office && (a += "Sitz einer privaten Firma<br/>");"educational_institution" == b.office && (a += "Bildungseinrichtung<br/>");
    "employment_agency" == b.office && (a += "Job-Center / Arbeitsvermittlung<br/>");"estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"forestry" == b.office && (a += "Forstamt<br/>");"foundation" == b.office && (a += "Gesch\xE4ftsstelle einer Stiftung<br/>");"government" == b.office && (a += "Beh\xF6rde / Regierungseinrichtung<br/>");"guide" == b.office && (a += "B\xFCro f\xFCr Touristenf\xFChrungen<br/>");"insurance" == b.office && (a += "Versicherungsb\xFCro<br/>");"it" == b.office && (a += "IT-Unternehmen<br/>");
    "lawyer" == b.office && (a += "Rechtsanwaltskanzlei<br/>");"newspaper" == b.office && (a += "Zeitungsredaktion<br/>");"ngo" == b.office && (a += "B\xFCro einer Nichtregierungsorganisation<br/>");"notary" == b.office && (a += "Notar<br/>");"political_party" == b.office && (a += "B\xFCro einer politischen Partei<br/>");"quango" == b.office && (a += "B\xFCro einer halbstaatlichen Organisation<br/>");"realtor" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"real_estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
    "register" == b.office && (a += "Standesamt<br/>");"religion" == b.office && (a += "B\xFCro einer religi\xF6sen Instanz<br/>");"research" == b.office && (a += "Forschungsunternehmen oder -institut<br/>");"tax" == b.office && (a += "Finanzamt<br/>");"telecommunication" == b.office && (a += "Telekommunikationsfirma<br/>");"travel_agent" == b.office && (a += "Sitz eines Reiseunternehmens<br/>");"water_utility" == b.office && (a += "Wasserwirtschaftsamt<br/>");"therapist" == b.office && (a += "Therapeut<br/>");"city" == b.place && (a += "Gro\xDFstadt<br/>");
    "town" == b.place && (a += "Stadt/Kleinstadt<br/>");"village" == b.place && (a += "Dorf<br/>");"continent" == b.place && (a += "Kontinent<br/>");"ocean" == b.place && (a += "Ozean</br>");"track" == b.highway && (a += "Forst-, Wald und Feldweg<br/>");"raceway" == b.highway && (a += "Motorsportbahn<br/>");"designated" == b.bicycle && (a += "Radweg<br/>");"path" == b.highway && (a += "Fu\xDFweg<br/>");"parking" == b.amenity && (a += "Parkplatz<br/>");"services" == b.highway && (a += "Rastst\xE4tte<br/>");"rest_area" == b.highway && (a += "Rastplatz<br/>");"turning_circle" == b.highway && (a += "Wendeplatz/Wendehammer<br/>");"service" == b.highway && (a += "Zufahrtsstra\xDFe / Erschlie\xDFungsweg<br/>");"motorway" == b.highway && (a += "Autobahn<br/>");"motorway_junction" == b.highway && (a += "Autobahnauffahrt<br/>");"bridleway" == b.highway && (a += "Reitweg<br/>");"yes" == b.oneway && (a += "Einbahnstra\xDFe<br/>");"yes" == b.park_ride && (a += "Park and Ride<br/>");"unknown" == b.park_ride && (a += "Park and Ride<br/>");"bus" == b.park_ride && (a += "Park and Ride<br/>");"tram" == b.park_ride && (a += "Park and Ride<br/>");
    "bus_stop" == b.highway && (a += "Bushaltestelle<br/>");"pedestrian" == b.highway && (a += "Fu\xDFg\xE4ngerzone<br/>");"street_lamp" == b.highway && (a += "Strassenlaterne<br/>");"traffic_signals" == b.highway && (a += "Ampel<br/>");"traffic_signals" == b.crossing && (a += "Fu\xDFg\xE4ngerampel<br/>");"speed_camera" == b.highway && (a += "Blitzer<br/>");"yes" == b.traffic_calming && (ret += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
    "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");"cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");
    "buoy_cardinal" == b["seamark:type"] && (a += "Kardinalstonne<br/>");"buoy_lateral" == b["seamark:type"] && (a += "Lateraltonne<br/>");"buoy_isolated_danger" == b["seamark:type"] && (a += "Gefahrentonne<br/>");"perch" == b["seamark:beacon_lateral:shape"] && (a += "Pricke<br/>");"fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "Schiffstankstelle<br/>" : "fuel" == b.amenity && (a += "Tankstelle<br/>");if ("charging_station" == b.amenity) {
        var a = a + "Ladestation / Stromtankstelle<br/>",
            c = b.voltage;if (b.car) {
            switch (b.car) {case "yes":
                    a += "F\xFCr Autos: Ja";break;case "no":
                    a += "F\xFCr Autos: Nein";break;default:
                    a += "F\xFCr Autos: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr Autos: Unbekannt<br/>";if (b.bicycle) {
            switch (b.bicycle) {case "yes":
                    a += "F\xFCr E-Bike: Ja";break;case "no":
                    a += "F\xFCr E-Bike: Nein";break;default:
                    a += "F\xFCr E-Bike: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr E-Bike: Unbekannt<br/>";"no" == b["socket:schuko"] && (a += "Stecker Schuko: Nein<br/>");"yes" == b["socket:schuko"] && (a += "Stecker Schuko: Ja<br/>");"no" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Nein<br/>");"yes" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Ja<br/>");"no" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Nein<br/>");"yes" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Ja<br/>");"no" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Nein<br/>");"yes" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Ja<br/>");"no" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Nein<br/>");"yes" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Ja<br/>");
        "no" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Nein<br/>");"yes" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Ja<br/>");"no" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Nein<br/>");"yes" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Ja<br/>");"no" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Nein<br/>");"yes" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Ja<br/>");"no" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Nein<br/>");"yes" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Ja<br/>");"Nein" == b["socket:nema_14_50"] && (a += "Stecker Nema 14  50: Nein<br/>");"yes" == b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: Ja<br/>");"nein" == b["socket:bs1363"] && (a += "Stecker BS 1363: Nein<br/>");"yes" == b["socket:bs1363"] && (a += "Stecker BS 1363: Ja<br/>");"no" == b["socket:type1"] && (a += "Stecker Typ 1:Nein<br/>");"yes" == b["socket:type1"] && (a += "Stecker Typ 1: Ja<br/>");"no" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Nein<br/>");"yes" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Ja<br/>");"Nein" == b["socket:type2"] && (a += "Stecker Typ 2: Nein<br/>");"yes" == b["socket:type2"] && (a += "Stecker Typ 2: Ja<br/>");"no" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Nein<br/>");"yes" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Ja<br/>");"no" == b["socket:type3"] && (a += "Stecker Typ: Nein<br/>");"yes" == b["socket:type3"] && (a += "Stecker Typ 3: Ja<br/>");"no" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Nein<br/>");"yes" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Ja<br/>");
        "no" == b["socket:magne_charge"] && (a += "Stecker Magne : Nein<br/>");"yes" == b["socket:magne_charge"] && (a += "Stecker Magne : Ja<br/>");"no" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"yes" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"no" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Nein<br/>");"yes" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Ja<br/>");"no" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Nein<br/>");
        "yes" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Ja<br/>");b["socket:schuko"] && (a += "Stecker Schuko: " + b["socket:schuko"] + "<br/>");b["socket:cee_blue"] && (a += "Stecker CEE Blau: " + b["socket:cee_blue"] + "<br/>");b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: " + b["socket:cee_red_16a"] + "<br/>");b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: " + b["socket:cee_red_32a"] + "<br/>");b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: " + b["socket:cee_red_64a"] + "<br/>");b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: " + b["socket:cee_red_125a"] + "<br/>");b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: " + b["socket:nema_5_15"] + "<br/>");b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: " + b["socket:nema_5_20"] + "<br/>");b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: " + b["socket:nema_14_30"] + "<br/>");b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: " + b["socket:nema_14_50"] + "<br/>");b["socket:bs1363"] && (a += "Stecker BS 1363: " + b["socket:bs1363"] + "<br/>");b["socket:type1"] && (a += "Stecker Typ 1: " + b["socket:type1"] + "<br/>");b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: " + b["socket:schuko"] + "<br/>");b["socket:type2"] && (a += "Stecker Typ 2: " + b["socket:type2"] + "<br/>");b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: " + b["socket:type2_combo"] + "<br/>");b["socket:type3"] && (a += "Stecker Typ 3: " + b["socket:type3"] + "<br/>");b["socket:chademo"] && (a += "Stecker CHAdeMO: " + b["socket:chademo"] + "<br/>");b["socket:magne_charge"] && (a += "Stecker Magne : " + b["socket:magne_charge"] + "<br/>");b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: " + b["socket:tesla_standard"] + "<br/>");b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: " + b["socket:tesla_supercharge"] + "<br/>");b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: " + b["socket:tesla_roadster"] + "<br/>");a += "<br/>";b.voltage && (a += "Volt: " + c + "<br/>");
    }"yes" == b.tunnel && (a += "Tunnel<br/>");if (b.bridge) switch (a += "Br\xFCcken-Typ: ", b.bridge) {case "swing":
            a += "Drehbr\xFCcke";break;case "aqueduct":
            a += "Historische Wasserpipeline";break;
        case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "boardwalk":
            a += "Bohlenweg";break;case "cantilever":
            a += "Auslegerbr\xFCcke";break;case "covered":
            a += "gedeckte Br\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "humpback":
            a += "Drehbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "low_water_crossing":
            a += "Irische Br\xFCcke";break;case "moveable":
            a += "Bewegliche Br\xFCcken";break;case "pontoon":
            a += "Schwimmbr\xFCcke";break;case "suspension":
            a += "H\xE4ngebr\xFCcke";
            break;case "trestle":
            a += "Trestle-Br\xFCcke";break;case "viaduct":
            a += "Viadukt";}if (b["bridge:movable"]) switch (b["bridge:movable"]) {case "swing":
            a += "Drehbr\xFCcke";break;case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "submersible":
            a += "Senkbr\xFCcke";break;case "transporter":
            a += "Schwebef\xE4hre";break;case "retractable":
            a += "Schubbr\xFCcke";}if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "Seniorenheim / Pflegeheim<br/>";"social_facility" == b.amenity && (a += "Allg. soziale Einrichtung<br/>");if (b.social_facility) {
        "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Seniorenheim<br/>");"assisted_living" == b.social_facility && (a += "Betreutes Wohnen<br/>");"outreach" == b.social_facility && (a += "Beratungsstelle<br/>");"workshop" == b.social_facility && (a += "soziale Werkstatt<br/>");if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "Ambulanter Pflegedienst<br/>";
        "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Tages- u. Kurzzeitpflege<br/>");"shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "Notunterkunft<br/>");"food_bank" == b.social_facility && (a += "Lebensmittelhilfe<br/>");"hospice" == b.social_facility && (a += "Hospiz<br/>");
    }b.brewery && (a += "Ausgeschenkte Biersorten: " + b.brewery + "<br/>");"alcohol" == b.shop && (a += "Spirituosenladen<br/>");"bakery" == b.shop && (a += "B\xE4ckerei<br/>");"beverages" == b.shop && (a += "Getr\xE4nkehandel<br/>");
    "butcher" == b.shop && (a += "Fleischerei<br/>");"cheese" == b.shop && (a += "K\xE4sefachgesch\xE4ft<br/>");"chocolate" == b.shop && (a += "Schokoladenfachgesch\xE4ft<br/>");"coffee" == b.shop && (a += "Kaffeefachgesch\xE4ft<br/>");"confectionery" == b.shop && (a += "S\xFC\xDFwarenladen<br/>");"convenience" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"deli" == b.shop && (a += "Feinkostladen<br/>");"dairy" == b.shop && (a += "Milchladen<br/>");"farm" == b.shop && (a += "Hofladen<br/>");"greengrocer" == b.shop && (a += "Gem\xFCseh\xE4ndler<br/>");
    "grocery" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"organic" == b.shop && (a += "Bio-Laden, Reformhaus<br/>");"pasta" == b.shop && (a += "Pastagesch\xE4ft<br/>");"seafood" == b.shop && (a += "Fischfachgesch\xE4ft<br/>");"tea" == b.shop && (a += "Teefachgesch\xE4ft<br/>");"wine" == b.shop && (a += "Weinhandlung<br/>");"department_store" == b.shop && (a += "Kaufhaus<br/>");"general" == b.shop && (a += "Gemischtwarenhandlung<br/>");"kiosk" == b.shop && (a += "Kiosk<br/>");"mall" == b.shop && (a += "Einkaufszentrum<br/>");"supermarket" == b.shop && (a += "Supermarkt<br/>");"baby_goods" == b.shop && (a += "Babyfachmarkt<br/>");"bag" == b.shop && (a += "Taschen und Koffer<br/>");"boutique" == b.shop && (a += "Boutique<br/>");"clothes" == b.shop && (a += "Bekleidung<br/>");"fabric" == b.shop && (a += "Textilgesch\xE4ft<br/>");"fashion" == b.shop && (a += "Fashion<br/>");"jewelry" == b.shop && (a += "Juwelier<br/>");"leather" == b.shop && (a += "Lederwaren<br/>");"shoes" == b.shop && (a += "Schuhfachgesch\xE4ft<br/>");"variety_store" == b.shop && (a += "Ein-Euro-Laden<br/>");"chemist" == b.shop && (a += "Drogerie<br/>");
    "cosmetics" == b.shop && (a += "Kosmetikfachgesch\xE4ft<br/>");"drugstore" == b.shop && (a += "Drogerie oder Apotheke (veraltet)<br/>");"perfumery" == b.shop && (a += "Parf\xFCmerie<br/>");"erotic" == b.shop && (a += "Erotikhandel<br/>");"hairdresser" == b.shop && (a += "Friseur<br/>");"hearing_aids" == b.shop && (a += "H\xF6rger\xE4te<br/>");"herbalist" == b.shop && (a += "Kr\xE4uterhandel<br/>");"massage" == b.shop && (a += "Massagesalon<br/>");"medical_supply" == b.shop && (a += "Sanit\xE4tshaus<br/>");"optician" == b.shop && (a += "Optiker<br/>");
    "tattoo" == b.shop && (a += "T\xE4towierer<br/>");"bathroom_furnishing" == b.shop && (a += "Badm\xF6bel und -accessoires<br/>");"doityourself" == b.shop && (a += "Baumarkt/Baustoffhandel<br/>");"energy" == b.shop && (a += "Energiehandel<br/>");"florist" == b.shop && (a += "Blumengesch\xE4ft<br/>");"furnace" == b.shop && (a += "Ofenfachgesch\xE4ft<br/>");"garden_centre" == b.shop && (a += "Gartencenter<br/>");"gas" == b.shop && (a += "Fachgesch\xE4ft f\xFCr technische Gase<br/>");"glaziery" == b.shop && (a += "Glaserei<br/>");"hardware" == b.shop && (a += "Eisenwaren<br/>");"houseware" == b.shop && (a += "Haushaltswaren und Inneneinrichtung<br/>");"locksmith" == b.shop && (a += "Schl\xFCsseldienst<br/>");"paint" == b.shop && (a += "Farbenfachgesch\xE4ft<br/>");"trade" == b.shop && (a += "Baustoffhandel<br/>");"antiques" == b.shop && (a += "Antiquit\xE4ten<br/>");"bed" == b.shop && (a += "Betten- und Matratzengesch\xE4ft<br/>");"candles" == b.shop && (a += "Kerzengesch\xE4ft<br/>");"carpet" == b.shop && (a += "Teppichfachhandel<br/>");"curtain" == b.shop && (a += "Gardinenfachgesch\xE4ft<br/>");
    "furniture" == b.shop && (a += "M\xF6bel- und Einrichtungshaus<br/>");"interior_decoration" == b.shop && (a += "Innendekoration / Raumausstattung<br/>");"kitchen" == b.shop && (a += "K\xFCchen<br/>");"window_blind" == b.shop && (a += "Jalousien und Roll\xE4den<br/>");"computer" == b.shop && (a += "Computer-Fachh\xE4ndler<br/>");"electronics" == b.shop && (a += "Elektronikmarkt<br/>");"hifi" == b.shop && (a += "Hifi-Fachh\xE4ndler<br/>");"mobile_phone" == b.shop && (a += "Handy-Shop<br/>");"radiotechnics" == b.shop && (a += "Radio- und Fernsehtechnik<br/>");
    "vacuum_cleaner" == b.shop && (a += "Staubsaugerfachgesch\xE4ft<br/>");"bicycle" == b.shop && (a += "Fahrradfachgesch\xE4ft<br/>");"car" == b.shop && (a += "Autohaus<br/>");"car_repair" == b.shop && (a += "Autowerkstatt<br/>");"car_parts" == b.shop && (a += "Autoteilefachgesch\xE4ft<br/>");if ("dive" == b.shop || "scuba_diving" == b.shop) a += "Tauchausr\xFCstung<br/>";"fishing" == b.shop && (a += "Angelfachgesch\xE4ft<br/>");"free_flying" == b.shop && (a += "Fallschirmausr\xFCstung<br/>");"hunting" == b.shop && (a += "Jagdausr\xFCstung<br/>");
    "motorcycle" == b.shop && (a += "Motorradgesch\xE4ft<br/>");"outdoor" == b.shop && (a += "Trekking-/Outdoorladen<br/>");"sports" == b.shop && (a += "Sportgesch\xE4ft<br/>");"tyres" == b.shop && (a += "Reifenfachhandel<br/>");"water_sports" == b.shop && (a += "Wassersportbedarf<br/>");"art" == b.shop && (a += "Kunstladen<br/>");"craft" == b.shop && (a += "Kunsthandwerk<br/>");"frame" == b.shop && (a += "Bilderrahmengesch\xE4ft<br/>");"music" == b.shop && (a += "Musikgesch\xE4ft<br/>");"music_instrument" == b.shop && (a += "Musikhaus<br/>");"photo" == b.shop && (a += "Fotofachgesch\xE4ft<br/>");"video" == b.shop && (a += "Videothek<br/>");"video_games" == b.shop && (a += "Videospiele<br/>");"anime" == b.shop && (a += "Anime<br/>");"books" == b.shop && (a += "Buchhandlung<br/>");"gift" == b.shop && (a += "Andenken, Reisemitbringsel, Souveniershop<br/>");"newsagent" == b.shop && (a += "Zeitungsh\xE4ndler<br/>");"stationery" == b.shop && (a += "Schreibwaren<br/>");"ticket" == b.shop && (a += "Ticketshop<br/>");"copyshop" == b.shop && (a += "Kopierladen<br/>");"funeral_directors" == b.shop && (a += "Bestattungsunternehmen<br/>");
    "laundry" == b.shop && (a += "Waschsalon / W\xE4scherei<br/>");"dry_cleaning" == b.shop && (a += "chemische Reinigung<br/>");"money_lender" == b.shop && (a += "Geldverleiher<br/>");"pawnbroker" == b.shop && (a += "Pfandhaus / Pfandleiher<br/>");"pet" == b.shop && (a += "Zoo- und Tierhandlung<br/>");"pyrotechnics" == b.shop && (a += "Feuerwerk<br/>");"religion" == b.shop && (a += "Religi\xF6se Artikel<br/>");"beauty" == b.shop && (a += "Sch\xF6nheitssalon<br/>");"solarium" == b.shop && (a += "Solarium<br/>");"tobacco" == b.shop && (a += "Tabakwaren<br/>");
    "toys" == b.shop && (a += "Spielwaren<br/>");"travel_agency" == b.shop && (a += "Reiseb\xFCro<br/>");"market_hall" == b.shop && (a += "Markthalle<br/>");"vacant" == b.shop && (a += "leerstehendes Ladenlokal<br/>");"weapons" == b.shop && (a += "Waffenladen<br/>");"lottery" == b.gambling && (a += "Lottoannahmestelle<br/>");"fish" == b.pet && (a += "Aquaristik<br/>");"agriucultural_engines" == b.craft && (a += "Landmaschinenbau<br/>");"basket_maker" == b.craft && (a += "Korbmacher<br/>");"beekeeper" == b.craft && (a += "Imker<br/>");"blacksmith" == b.craft && (a += "Schmied<br/>");"brewery" == b.craft && (a += "Brauerei<br/>");"yes" == b.microbrewery && (a += "Hausbrauerei<br/>");"boatbuilder" == b.craft && (a += "Bootsbauer<br/>");"bookbinder" == b.craft && (a += "Buchbinder<br/>");"builder" == b.craft && (a += "Hausbau<br/>");"carpenter" == b.craft && (a += "Tischler/Schreiner, Zimmermann<br/>");"carpet_layer" == b.craft && (a += "Teppichleger<br/>");"caterer" == b.craft && (a += "Catering<br/>");"clockmaker" == b.craft && (a += "Uhrmacher<br/>");"confectionery" == b.craft && (a += "Konditorei<br/>");"dressmaker" == b.craft && (a += "Schneider<br/>");"electrician" == b.craft && (a += "Elektriker<br/>");"gardener" == b.craft && (a += "Garten- und Landschaftsbauer<br/>");"glaziery" == b.craft && (a += "Glaserei<br/>");"handicraft" == b.craft && (a += "Handwerkskunst<br/>");"hvac" == b.craft && (a += "K\xE4lteanlagenbauer f\xFCr L\xFCftungs-, Heizungs- und Klimatechnik<br/>");"insulation" == b.craft && (a += "W\xE4rmed\xE4mmung von Geb\xE4uden<br/>");"jeweller" == b.craft && (a += "Juwelier, Gold-/Silber-Schmied<br/>");"key_cutter" == b.craft && (a += "Schl\xFCsselmacher<br/>");"locksmith" == b.craft && (a += "Schl\xFCsseldienst<br/>");"metal_construction" == b.craft && (a += "Metallbauer<br/>");"optician" == b.craft && (a += "Optiker<br/>");"painter" == b.craft && (a += "Maler<br/>");"parquet_layer" == b.craft && (a += "Parkettverleger<br/>");"photographer" == b.craft && (a += "Fotograf<br/>");"photographic_laboratory" == b.craft && (a += "Fotolabor<br/>");"plasterer" == b.craft && (a += "Gipser, Verputzer, Stuckateur<br/>");"plumber" == b.craft && (a += "Anlagenmechaniker Sanit\xE4r-, Heizungs- und Klimatechnik.<br/>");
    "pottery" == b.craft && (a += "T\xF6pferei<br/>");"rigger" == b.craft && (a += "Riggemacher (Takelage f\xFCr Segelschiffe)<br/>");"roofer" == b.craft && (a += "Dachdecker<br/>");"saddler" == b.craft && (a += "Sattler<br/>");"sailmaker" == b.craft && (a += "Segelmacher<br/>");"sawmill" == b.craft && (a += "Holzverarbeitungsbetrieb<br/>");"scaffolder" == b.craft && (a += "Ger\xFCstbauer<br/>");"sculptor" == b.craft && (a += "Bildhauer<br/>");"shoemaker" == b.craft && (a += "Schuhmacher<br/>");"stand_builder" == b.craft && (a += "Messe- / Standbauer<br/>");
    "stonemason" == b.craft && (a += "Steinmetz<br/>");"sun_protection" == b.craft && (a += "Rolladen- und Jalousiebauer<br/>");"sweep" == b.craft && (a += "Schornsteinfeger<br/>");"tailor" == b.craft && (a += "Schneider<br/>");"tiler" == b.craft && (a += "Fliesen-, Platten- und Mosaikleger<br/>");"tinsmith" == b.craft && (a += "Spengler, Klempner<br/>");"upholsterer" == b.craft && (a += "Polsterer<br/>");"watchmaker" == b.craft && (a += "Uhrmacher<br/>");"window_construction" == b.craft && (a += "Fensterbauer<br/>");"machines" == b.rental && (a += "Maschinenverleih<br/>");
    "car_rental" == b.amenity && (a += "Autoverleih<br/>");"allotments" == b.landuse && (a += "Schrebergarten<br/>");"basin" == b.landuse && (a += "Regenwasserr\xFCckhaltebecken<br/>");"brownfield" == b.landuse && (a += "Vorher bebautes Land<br/>");"commercial" == b.landuse && (a += "Industriegebiet<br/>");"construction" == b.landuse && (a += "Baugebiet<br/>");"farmland" == b.landuse && (a += "Ackerfl\xE4che<br/>");"farmyard" == b.landuse && (a += "landwirtschaftlicher Betrieb<br/>");"forest" == b.landuse && (a += "Forst<br/>");"garages" == b.landuse && (a += "Garagenkomplex<br/>");"grass" == b.landuse && (a += "Rasenfl\xE4chen<br/>");"greenfield" == b.landuse && (a += "Bauerwartungsland<br/>");"greenhouse_horticulture" == b.landuse && (a += "Gew\xE4chshaus-Fl\xE4che<br/>");"industrial" == b.landuse && (a += "Gewerbe-/Industriegebiet<br/>");"landfill" == b.landuse && (a += "M\xFClldeponie<br/>");"meadow" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"orchard" == b.landuse && (a += "Obstplantage<br/>");"plant_nursery" == b.landuse && (a += "Baumschule<br/>");"quarry" == b.landuse && (a += "Sand- und Kiesgrube<br/>");"railway" == b.landuse && (a += "Gebiet f\xFCr Eisenbahnnutzung<br/>");"recreation_ground" == b.landuse && (a += "Erholungsgebiet<br/>");"reservoir" == b.landuse && (a += "Wasserreservoir<br/>");"residential" == b.landuse && (a += "Wohngebiet<br/>");"retail" == b.landuse && (a += "Einkaufszentrum<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"village_green" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"vineyard" == b.landuse && (a += "Weinberg<br/>");"pond" == b.landuse && (a += "kleiner Teich<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"animal_keeping" == b.landuse && (a += "Weide, Paddock f\xFCr Tierhaltung<br/>");"yes" == b.entrance && (a += "Eingang zum Geb\xE4ude<br/>");"main" == b.entrance && (a += "Haupteingang<br/>");"service" == b.entrance && (a += "Hinterausgang f\xFCr Angestellte oder Zulieferer<br/>");"exit" == b.entrance && (a += "Ausgang des Geb\xE4udes<br/>");"emergency" == b.entrance && (a += "Notausgang<br/>");"bay" == b.natural && (a += "Bucht<br/>");"beach" == b.natural && (a += "Strand<br/>");"wood" == b.natural && (a += "nat\xFCrlicher Wald<br/>");
    "glacier" == b.natural && (a += "Gletscher<br/>");"cave_entrance" == b.natural && (a += "H\xF6hle<br/>");"spring" == b.natural && (a += "nat\xFCrliche Quelle<br/>");"waterfall" == b.natural && (a += "Wasserfall<br/>");"scrub" == b.natural && (a += "unkultiviertes Buschland<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"wetland" == b.natural && (a += "Feuchtgebiet<br/>");"tree" == b.natural && (a += "Baum");"peak" == b.natural && "yes" == b["summit:cross"] && (a += "Gipfelkreuz<br/>");"tree_row" == b.natural && (a += "Baumreihe / Allee<br/>");
    "heath" == b.natural && (a += "Heide<br/>");"moor" == b.natural && (a += "Hochmoor<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"fell" == b.natural && (a += "Grasland oberhalb der Baumgrenze<br/>");"bare_rock" == b.natural && (a += "Nackter Fels<br/>");"scree" == b.natural && (a += "Schutt (Hangschutt)<br/>");"volcano" == b.natural && (a += "Vulkan<br/>");"valley" == b.natural && (a += "Tal<br/>");"stone" == b.natural && (a += "Findling<br/>");"sea" == b.natural && (a += "Meer<br/>");"national_park" == b.boundary && (a += "Nationalpark<br/>");
    "protected_area" == b.boundary && (a += "Schutzgebiet<br/>");"yes" == b.mountain_pass && (a += "Gebirgspass<br/>");"waterfall" == b.waterway && (a += "Wasserfall<br/>");"canal" == b.waterway && (a += "Kanal<br/>");"canal" == b.water && (a += "Kanal<br/>");"river" == b.waterway && (a += "Fluss<br/>");"river" == b.water && (a += "Fluss<br/>");"riverbank" == b.waterway && (a += "Fluss<br/>");"ditch" == b.waterway && (a += "Entw\xE4sserungsgraben<br/>");"stream" == b.waterway && (a += "Bach<br/>");"ferry" == b.route && (a += "F\xE4hrverbindung<br/>");"turning_point" == b.waterway && (a += "Wendestelle<br/>");if ("lake" == b.water || "water" == b.natural) a += "See<br/>";"cove" == b.water && (a += "kleine Bucht<br/>");"lagoon" == b.water && (a += "Lagune<br/>");"pond" == b.water && (a += "Teich<br/>");"reservoir" == b.water && (a += "Wasserreservoir<br/>");"oxbow" == b.water && (a += "Altwassersee<br/>");"lock" == b.water && (a += "Schleusenkammer<br/>");"moat" == b.water && (a += "Burggraben<br/>");"wastewater" == b.water && (a += "Kl\xE4ranlage<br/>");"guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "Gastliegeplatz<br/>" : "pier" == b.man_made && (a += "Anlegestelle<br/>");"boatyard" == b.waterway && (a += "Schiffswerft<br/>");"mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "Dalben<br/>");"foot" == b.route && (a += "Wanderweg<br/>");"hiking" == b.route && (a += "Wanderweg<br/>");if ("yes" == b.hiking && "information" == b.tourism) a += "Wegweiser<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {case "board":
            a += "Informationstafel<br/>";break;case "map":
            a += "Informationstafel mit Karte<br/>";break;case "office":
            a += "Touristeninformation<br/>";break;case "terminal":
            a += "Informationsterminal<br/>";break;case "audioguide":
            a += "Audioguide<br/>";break;case "guidepost":
            a += "Wegweiser<br/>";break;case "tactile_map":
            a += "Blindenkarte 2D<br/>";break;case "tactile_model":
            a += "Blindenkarte 3D<br/>";break;case "route_marker":
            a += "Wegerkennungsmarker<br/>";break;default:
            a += "Informationstafel<br/>";} else a += "Informationstafel<br/>";"bicycle" == b.route && (a += "Radwanderweg<br/>");
    "mtb" == b.route && (a += "Mountainbikeroute<br/>");"horse" == b.route && (a += "Reitwanderweg<br/>");"coastline" == b.natural && (a += "K\xFCstenlinie<br/>");"cliff" == b.natural && (a += "Klippe<br/>");"dam" == b.waterway && (a += "Staudamm<br/>");"weir" == b.waterway && (a += "Wehr<br/>");"lock_gate" == b.waterway && (a += "Schleusentor<br/>");"yes" == b.lock && (a += "Schleuse<br/>");"sluice_gate" == b.waterway && (a += "Siel<br/>");"pumping_station" == b.man_made && (a += "Sch\xF6pfwerk<br/>");"groyne" == b.man_made && (a += "Buhne<br/>");"dyke" == b.man_made && (a += "Deich<br/>");"levee" == b.man_made && (a += "Deich<br/>");"watermill" == b.man_made && (a += "Wasserm\xFChle<br/>");"airfield" == b.military && (a += "Milit\xE4rflugplatz<br/>");"naval_base" == b.military && (a += "Marinest\xFCtzpunkt<br/>");"range" == b.military && (a += "Waffen\xFCbungsplatz<br/>");"military" == b.landuse && (a += "milit\xE4risch genutztes Gebiet<br/>");"training_area" == b.military && (a += "Truppen\xFCbungsplatz<br/>");"exclusion_zone" == b.military && (a += "milit\xE4risch genutztes Gebiet<br/>");"danger_area" == b.military && (a += "milit\xE4rische Gefahrenzone<br/>");"barracks" == b.military && (a += "Kaserne<br/>");"nuclear_explosion_site" == b.military && (a += "Atomwaffentestgel\xE4nde<br/>");"yes" == b.construction ? a += "Baustelle<br/>" : "construction" == b.highway && (a += "Baustelle<br/>");"petroleum_well" == b.man_made && (a += "Erd\xF6lpumpe<br/>");"storage_tank" == b.man_made && (a += "Speichertank<br/>");"wastewater_plant" == b.man_made && (a += "Kl\xE4ranlage<br/>");"silo" == b.man_made && (a += "Silo<br/>");"water_tower" == b.man_made && (a += "Wasserturm<br/>");"windmill" == b.man_made && (a += "Windm\xFChle<br/>");"monitoring_station" == b.man_made && (a += "Messstation");"crane" == b.man_made && (a += "Kran");"lighthouse" == b.man_made && (a += "Leuchtturm");"beacon" == b.man_made && (a += "Leuchtfeuer");"breakwater" == b.man_made && (a += "Wellenbrecher");"lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "Strassenlaterne<br/>");"lantern" == b.light_source && (a += "Strassenlaterne<br/>");"floodlight" == b.light_source && (a += "Flutlicht<br/>");"signal_lamp" == b.light_source && (a += "Signallicht<br/>");"aviation" == b.light_source && (a += "Befeuerung<br/>");"warning" == b.light_source && (a += "Warnlicht<br/>");if (b.light_source && b["light:method"]) switch (a += "Licht Art: ", b["light:method"]) {case "gas":
            a += "Gas";break;case "electric":
            a += "Elektrisch";break;case "incandescent":
            a += "strahlend";break;case "halogen":
            a += "Halogen";break;case "discharge":
            a += "Entladungslicht";break;case "metal-halide":
            a += "Halogen-Metalldampflampe";break;case "neon":
            a += "Neon";break;case "sodium":
            a += "Natriumdampflampe";
            break;case "high_pressure_sodium":
            a += "Hochdruck Natriumdampflampe";break;case "low_pressure_sodium":
            a += "Niedrigdruck Natriumdampflampe";break;case "fluorescent":
            a += "Fluoreszenzlampe";break;case "mercury":
            a += "Quecksilberlampe";break;case "LED":
            a += "LED";break;case "laser":
            a += "Laser";break;case "arc":
            a += "Lichtbogen";break;default:
            a += "Unbekannt";}"drinking_water" == b.amenity && (a += "Trinkwasser<br/>");"yes" == b.drinking_water && (a += "Trinkwasser<br/>");"works" == b.man_made ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.building ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.landuse ? a += "Industriegebiet<br/>" : "industrial" == b.abutters ? a += "Industriegebiet<br/>" : "commercial" == b.abutters && (a += "Gewerbegebiet<br/>");if (b["generator:source"]) switch (a += "Anlagen-Typ: ", b["generator:source"]) {case "biomass":
            a += "Biogasanlage";break;case "biofuel":
            a += "Biogasanlage";break;case "biogas":
            a += "Biogasanlage";break;case "coal":
            a += "Kohlekraftwerk";break;case "oil":
            a += "\xD6lraffinerie";break;case "waste":
            a += "M\xFCllverbrennungsanlage";
            break;case "wind":
            a += "Windkraftwerk";break;case "solar":
            a += "Solarkraftwerk";break;case "hydro":
            a += "Wasserkraftwerk";break;case "tidal":
            a += "Gezeitenkraftwerk";break;case "wave":
            a += "Wellenkraftwerk";break;case "geothermal":
            a += "Geothermie";break;case "osmotic":
            a += "Osmosekraftwerk";break;case "nuclear":
            a += "Atomkraftwerk";break;default:
            a += "unbekannt<br/>";}"photovoltaic" == b.power_source && (a += "Solarkraftwerk");"line" == b.power && (a += "Hochspannungs-\xDCbertragungsleitung<br/>");"cable" == b.power && (a += "Untergrundkabel<br/>");
    "cable_distribution_cabinet" == b.power && (a += "Kabelverteilerschrank<br/>");"plant" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"sub_station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"compensator" == b.power && (a += "Kompensator<br/>");"converter" == b.power && (a += "Konverter<br/>");"generator" == b.power && (a += "Generator<br/>");"heliostat" == b.power && (a += "Heliostat<br/>");"insulator" == b.power && (a += "Isulator<br/>");"busbar" == b.line && (a += "Sammelschiene<br/>");
    "bay" == b.line && (a += "Verbindung Schaltung und Sammelschiene<br/>");"minor_line" == b.power && (a += "Nebenlinie<br/>");"pole" == b.power && (a += "Pfahl<br/>");"portal" == b.power && (a += "H-f\xF6rmiger Mast<br/>");"catenary_mast" == b.power && (a += "Fahrleitungsmast<br/>");"substation" == b.power && (a += "Umspannwerk<br/>");"switch" == b.power && (a += "Lastschalter<br/>");"terminal" == b.power && (a += "Terminal / Anschluss<br/>");"tower" == b.power && (a += "Hochspannungsleitungs<br/>");"transformer" == b.power && (a += "Nebenlinie<br/>");if (b.barrier) switch (b.barrier) {case "bollard":
            a += "Poller, Pfosten<br/>";break;case "cycle_barrier":
            a += "Umlaufsperre, Dr\xE4ngelgitter<br/>";break;case "gate":
            a += "Tor, Schranke<br/>";break;case "chain":
            a += "Kette<br/>";break;case "lift_gate":
            a += "Schlagbaum<br/>";break;case "wall":
            a += "L\xE4rmschutzwand<br/>";break;case "toll_booth":
            a += "Mautstelle<br/>";break;case "fence":
            switch (b.fence_type) {case "barbed_wire":
                    a += "Stacheldrahtzaun<br/>";break;case "wood":
                    a += "Holzzaun<br/>";break;case "chain_link":
                    a += "Maschendrahtzaun<br/>";break;case "electric":
                    a += "Weidezaun<br/>";break;case "railing":
                    a += "Gel\xE4nder<br/>";break;case "wire":
                    a += "einfacher Drahtzaun<br/>";break;case "metal":
                    a += "Metallzaun<br/>";break;case "pole":
                    a += "Holzpf\xE4hle<br/>";break;default:
                    a += "Zaun<br/>";}break;case "block":
            a += "Block<br/>";break;case "ditch":
            a += "Graben<br/>";break;case "border_control":
            a += "Grenzkontrolle<br/>";break;case "hedge":
            a += "Hecke<br/>";break;case "retaining_wall":
            a += "St\xFCtzmauer<br/>";break;case "cattle_grid":
            a += "Weiderost<br/>";break;case "horse_stile":
            a += "Zaun\xFCbertritt<br/>";break;default:
            a += "unbekannt<br/>";}"noise_barrier" == b.wall && (a += "L\xE4rmschutzwand<br/>");"retaining_wall" == b.designation && (a += "L\xE4rmschutzwand<br/>");"noise_barrier" == b.designation && (a += "L\xE4rmschutzwand<br/>");"surveillance" == b.man_made && (a += "\xDCberwachter Bereich<br/>");if (b.aeroway) switch (a += "Flughafen: ", b.aeroway) {case "aerodrome":
            a += "Flugplatz";break;case "apron":
            a += "Vorfeld";break;case "gate":
            a += "gate";break;case "helipad":
            a += "Hubschrauberlandeplatz";break;
        case "hangar":
            a += "Hangar";break;case "runway":
            a += "Start-/Landebahn";break;case "taxiway":
            a += "Rollweg";break;case "terminal":
            a += "Flughafengeb\xE4ude";break;default:
            a += "unbekannt<br/>";}"halt" == b.railway && (a += "Bahn-Haltepunkt<br/>");"crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"level_crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"station" == b.railway && (a += "Bahnhof<br/>");"bus_station" == b.amenity && (a += "Busbahnhof<br/>");"bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "Busbahnhof<br/>");"rail" == b.railway && (a += "Bahnlinie<br/>", "contact_line" == b.electrified && (a += "elektrifizierte Bahntrasse mit Oberleitung<br/>"));"tram" == b.railway && (a += "Stra\xDFenbahnlinie<br/>");if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "Slipanlage<br/>";if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {case "ferry":
            a += "F\xE4hrhafen<br/>";break;case "container":
            a += "Containerhafen<br/>";
            break;case "marina":
            "marina" != b.leisure && (a += "Jachthafen<br/>");break;case "navel_base":
            a += "Marine-Hafen<br/>";break;case "tanker":
            a += "Hafen f\xFCr \xD6ltanker<br/>";break;case "passenger":
            a += "Personenschifffahrt<br/>";break;case "bulk":
            a += "Sch\xFCttgut-Hafen<br/>";break;default:
            a += "Hafen<br/>";} else a += "Hafen<br/>";"marina" == b.leisure && (a += "Jachthafen<br/>");"wreck" == b.historic && (a += "Wrack<br/>");"animal_shelter" == b.amenity && (a += "Tierheim<br/>");"shelter" == b.animal && (a += "Tierheim<br/>");"horse_walker" == b.animal && (a += "Pferdelauftrainer<br/>");"yes" == b.animal_shelter && (a += "Tierheim<br/>");"dog" == b.animal_shelter && (a += "Tierheim<br/>");"cat" == b.animal_shelter && (a += "Tierheim<br/>");"animal_boarding" == b.amenity && (a += "Tierpension<br/>");"yes" == b.animal_boarding && (a += "Tierpension<br/>");"dog" == b.animal_boarding && (a += "Tierpension<br/>");"horse" == b.animal_boarding && (a += "Tierpension<br/>");"cat" == b.animal_boarding && (a += "Tierpension<br/>");"dog;cat" == b.animal_boarding && (a += "Tierpension<br/>");"cat;dog" == b.animal_boarding && (a += "Tierpension<br/>");if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "Tiertraining<br/>";"swimming" == b.animal && (a += "Badestelle f\xFCr Hunde<br/>");if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "F\xFCtterungsstelle<br/>";if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "Wildf\xFCtterung<br/>";if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "Futterraufe<br/>";
    "manger" == b.amenity && (a += "Krippe<br/>");"birdhouse" == b.man_made && (a += "Vogelhaus<br/>");"stork" == b.birds_nest && (a += "Storchennest<br/>");"nest_box" == b.amenity && (a += "Nistkasten<br/>");"wellness" == b.animal && (a += "Hundesalon<br/>");"cemetery" == b.animal && (a += "Kleintierfriedhof<br/>");if ("stable" == b.building || "stable" == b["building:use"]) a += "Pferdestall<br/>";"cowshed" == b.building && (a += "Kuhstall<br/>");"sty" == b.building && (a += "Schweinestall<br/>");"barn" == b.building && (a += "Scheune / landwirtsch. Lagerhalle<br/>");
    "farm_auxiliary" == b.building && (a += "landwirtschaftl. Nebengeb\xE4ude<br/>");if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "Flusskilometer<br/>";"milestone" == b.highway && (a += "Strassenkilometer<br/>");"market" == b["xmas:feature"] && (a += "Weihnachtsmarkt<br/>");"tree" == b["xmas:feature"] && (a += "Weihnachtsbaumverkauf<br/>");"event" == b["xmas:feature"] && (a += "Weihnachtsevent<br/>");"pyramid" == b["xmas:feature"] && (a += "Weihnachtspyramide<br/>");return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = exports.fnContent = function fnContent(b) {
    var a;a = "" + fnContentGeneralInformations(b);a += fnContentHealthcare(b);a += fnContentAerodrome(b);a += fnContentCuisine(b);a += fnContentShipping(b);a += fnContentHydrants(b);a += fnContentSports(b);a += fnContentStreetsTraffic(b);a += fnContentInformationCity(b);a += fnContentEmergency(b);a += fnContentStorage(b);a += fnContentAmenity(b);a += fnContentTourism(b);a += fnContentRoute(b);a += fnContentPetrol(b);a += fnContentBarriers(b);a += fnContentLanduse(b);a += fnContentNatural(b);a += fnKlosterAdditional(b);a += fnSicherheitAdditional(b);a += fnAdditionalBuildingInfos(b);a += fnKraftwerkInfo(b);a += fnMessstation(b);a += fnWertstoffinfo(b);(a += fnContentProtectedArea(b)) && (a = "<br/>" + a);return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = exports.fnContentAerodrome = function fnContentAerodrome(b) {
    var a = "";b.aerodrome && ("international" == b.aerodrome && (a += "Flughafentype: internationaler Flugplatz<br/>"), "regional" == b.aerodrome && (a += "Flughafentype: regionaler Flugplatz<br/>"), "gliding" == b.aerodrome && (a += "Flughafentype: Segelflugplatz<br/>"), "private" == b.aerodrome && (a += "Flughafentype: Privatflugplatz<br/>"));b.iata && (a += "IATA-Code: " + b.iata + "<br/>");b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");return a;
},
    fnContentNatural = exports.fnContentNatural = function fnContentNatural(b) {
    var a = "";if (b.forest || b.wood) {
        if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "Laubwald<br/>";if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "Nadelwald<br/>";if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "Mischwald<br/>";"leafless" == b.leaf_type && (a += "Blattlose Vegetation<br/>");"evergreen" == b.wood && (a += "immergr\xFCn<br/>");
        "palm" == b.wood && (a += "Palmen<br/>");"nipa_palm" == b.wood && (a += "Nipapalmen<br/>");"eucalypt" == b.wood && (a += "Eukalypten<br/>");if ("filao" == b.wood || "casuarina" == b.wood) a += "Kasuarinengew\xE4chse<br/>";
    }if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "Laubbaum<br/>" : a + "Nadelbaum<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "durch Gr\xF6\xDFe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum.<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "alter, unter besonderem Schutz stehender Baum.<br/>";"manger" == b["feeding:type"] && (a += "Futterbeh\xE4lter: Futterraufe<br/>");"automated" == b["feeding:type"] && (a += "Automat<br/>");if (b["feeding:for"]) switch (b["feeding:for"]) {case "sheep":
            a += "Tier: Schaaf<br/>";break;case "horse":
            a += "Tier: Pferd<br/>";break;case "cow":
            a += "Tier: Kuh<br/>";break;case "rabbit":
            a += "Tier: Kaninchen<br/>";break;case "bunny":
            a += "Tier: Hase<br/>";break;case "cat":
            a += "Tier: Katze </br>";break;case "swan":
            a += "Tier: Schwan </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";break;case "donkey":
            a += "Tier: Esel </br>";break;case "squirrel":
            a += "Tier: Eichh\xF6rnchen </br>";break;case "pig":
            a += "Tier: Schwein </br>";break;case "deer":
            a += "Tier: Reh </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";
            break;case "monkey":
            a += "Tier: Affe </br>";break;case "camel":
            a += "Tier: Kamel </br>";break;case "goat":
            a += "Tier: Ziege </br>";break;case "hamster":
            a += "Tier: Hamster </br>";break;case "alpaca":
            a += "Tier: Alpaka </br>";break;default:
            a += "Tiere: nicht bekannt<br/>";}if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {case "hay":
            a += "F\xFCttern mit: Heu</br>";break;case "grain":
            a += "F\xFCttern mit: Getreide</br>";break;case "corn":
            a += "F\xFCttern mit: Korn</*br>";break;default:
            a += "F\xFCttern mit: nicht bekannt</br>";}"volcano" == b.natural && "active" == b.status && (a += "Aktiver Vulkan<br/>");"volcano" == b.natural && "dormant" == b.status && (a += "Ruhender Vulkan<br/>");"volcano" == b.natural && "extinct" == b.status && (a += "Erloschener Vulkan<br/>");"volcano" == b.natural && "stratovolcano" == b.type && (a += "Vulkantyp:Schichtvulkan<br/>");"volcano" == b.natural && "shield" == b.type && (a += "Vulkantyp:Schildvulkan<br/>");"volcano" == b.natural && "scoria" == b.type && (a += "Vulkantyp:Schlacken- und Aschenkegel<br/>");return a;
},
    fnContentProtectedArea = exports.fnContentProtectedArea = function fnContentProtectedArea(b) {
    var a = "",
        c = "";"protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "Beschreibung: Strenges Naturreservat, Wildnisgebiet<br/>"), "2" == c && (a = "Beschreibung: Nationalpark<br/>"), "3" == c && (a = "Beschreibung: Naturmonument<br/>"), "4" == c && (a = "Beschreibung: Biotop/Artenschutzgebiet mit Management<br/>"), "5" == c && (a = "Beschreibung: Gesch\xFCtzte Landschaft/Gesch\xFCtztes marines Gebiet<br/>"), "6" == c && (a = "Beschreibung: Ressourcenschutzgebiet mit Management<br/>"), "7" == c && (a = "Beschreibung: Lokal gesch\xFCtzte Bereiche<br/>"), "97" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene<br/>"), "98" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen<br/>"), "99" == c && (a = "andere <br/>"), "21" == c && (a = "Beschreibung: Gemeindebefinden (heilige Orte, assoziatice Orte)<br/>"), "22" == c && (a = "Beschreibung: Kulturelle Werte (Kulturg\xFCter, historisches Erbe, Denkmalschutz)<br/>"), "23" == c && (a = "Beschreibung: Schutz zu Gundsten der Wirtschaft<br/>"), "24" == c && (a = "Beschreibung: Politische Schutzgebiete<br/>"), "25" == c && (a = "Beschreibung: Milit\xE4rische Schutzgebiete<br/>"), "26" == c && (a = "Beschreibung: Historische Schutzgebiete<br/>"), "29" == c && (a = "Beschreibung: Weitere gesellschaftliche Schutzgebiete<br/>"), "11" == c && (a = "Beschreibung: Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)<br/>"), "12" == c && (a = "Beschreibung: Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)<br/>"), "13" == c && (a = "Beschreibung: Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)<br/>"), "14" == c && (a = "Beschreibung: Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)<br/>"), "15" == c && (a = "Beschreibung: \"Standortausstattung\": Retentionsraum (gesetzlich gesch\xFCtztes \xDCberschwemmungsgebiet) <br/>"), "16" == c && (a = "Beschreibung: Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)<br/>"), "19" == c && (a = "Beschreibung: Weitere nationale Gebiete<br/>"));
    return a;
},
    fnContentLanduse = exports.fnContentLanduse = function fnContentLanduse(b) {
    var a = "";"quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");"open_stable" == b["animal_keeping:type"] && (a += "Offenstall<br/>");"field_shelter" == b["animal_keeping:type"] && (a += "Weide mit Unterstand<br/>");"paddock" == b["animal_keeping:type"] && (a += "Paddock<br/>");b.animal_keeping && (a += "Tiere: Perde<br/>");return a;
},
    fnMessstation = exports.fnMessstation = function fnMessstation(b) {
    var a = "";"yes" == b["monitoring:water_level"] && (a += "Pegelstand<br/>");"yes" == b["monitoring:seismic_activity"] && (a += "seismische Aktivit\xE4ten<br/>");"yes" == b["monitoring:tide_gauge"] && (a += "Tidestand<br/>");"yes" == b["monitoring:weather"] && (a += "Wetterdaten<br/>");"yes" == b["monitoring:air_quality"] && (a += "Luftqualit\xE4t<br/>");return a;
},
    fnContentRoute = exports.fnContentRoute = function fnContentRoute(b) {
    var a = "";b.route && ("yes" == b.roundtrip && (a += "Rundweg<br/>"), b.length && (a += "L\xE4nge/Distanz: " + b.length + "<br/>"), b.distance && (a += "L\xE4nge/Distanz: " + b.distance + "<br/>"), b.symbol && (a += "Symbol: " + b.symbol + "<br/>"));return a;
},
    fnContentPetrol = exports.fnContentPetrol = function fnContentPetrol(b) {
    var a = "";"fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "Biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "Ethanol<br/>"), "yes" == b["fuel:e10"] && (a += "E10<br/>"), "yes" == b["fuel:lpg"] && (a += "Autogas<br/>"), "yes" == b["fuel:cng"] && (a += "Erdgas<br/>"), "diesel" == b.fuel && (a += "Diesel<br/>"), "lpg" == b.fuel && (a += "Autogas<br/>"), "yes" == b["fuel:octane_95"] && (a += "Super Bleifrei<br/>"), "yes" == b["fuel:octane_98"] && (a += "Super Plus<br/>"), "yes" == b["fuel:octane_100"] && (a += "V-Power Racing<br/>"), "yes" == b["fuel:octane_102"] && (a += "Ultimate<br/>"), "yes" == b["fuel:diesel"] && (a += "Diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "Ladestation / Stromtankstelle<br/>"));return a;
},
    fnContentHistoric = exports.fnContentHistoric = function fnContentHistoric(b) {
    var a = "";if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {case "megalith":
            a += "Megalith<br/>";break;case "bigstone":
            a += "Findling<br/>";break;case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "fortification":
            a += "historischer Graben / Wall<br/>";break;default:
            a += "unbekannt<br/>";}return a;
},
    fnContentBarriers = exports.fnContentBarriers = function fnContentBarriers(b, a) {
    var c = "";if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "Material: " + translate(b.material) + "<br/>");return c;
},
    fnContentTourism = exports.fnContentTourism = function fnContentTourism(b) {
    var a = "";if ("camp_site" == b.tourism) {
        "yes" == b.dog && (a += "Hunde erlaubt<br/>");"no" == b.dog && (a += "Hunde nicht erlaubt<br/>");b.stars && (a += b.stars + "Sterne<br/>");b.caravans && (a += "Wohnmobilstellpl\xE4tze<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Feuerstellen vorhanden<br/>";"yes" == b.washing_machine && (a += "Waschmaschinen<br/>");"yes" == b.dryer && (a += "Trockner<br/>");"yes" == b.group_only && (a += "Nutzung nur durch Gruppen<br/>");"reception" == b.camp_site && (a += "Reception vorhanden<br/>");
    }"information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "Topografische Karte</br>"), "street" == b.map_type && (a += "Stra\xDFenkarte</br>"), "scheme" == b.map_type && (a += "Schematische Karte</br>"), "toposcope" == b.map_type && (a += "Schematische Karte</br>"));"information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "Karte einer Anlage</br>"), "city" == b.map_size && (a += "Stadtplan</br>"), "region" == b.map_size && (a += "Karte der Region</br>"));"geology" == b.board_type && (a += "Geologische Informationen<br/>");"history" == b.board_type && (a += "Historische Informationen<br/>");"nature" == b.board_type && (a += "Informationen \xFCber Natur<br/>");"notice" == b.board_type && (a += "Allgemeine Information<br/>");"plants" == b.board_type && (a += "Informationen \xFCber Pflanzen<br/>");"wildlife" == b.board_type && (a += "Informationen \xFCber Wild<br/>");return a;
},
    fnContentAmenity = exports.fnContentAmenity = function fnContentAmenity(b) {
    var a = "";"boat_sharing" == b.amenity && (a += b.boattype + "<br/>");"embassy" == b.amenity && (a += b.country + "<br/>");if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Tickets<br/>";break;case "animal_feed":
            a += "Tierfutter<br/>";break;case "books":
            a += "B\xFCcher<br/>";break;case "candles":
            a += "Kerzen<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;case "condoms":
            a += "Kondome<br/>";break;case "drinks":
            a += "Getr\xE4nke<br/>";break;case "first_aid":
            a += "Erste Hilfe Artikel<br/>";break;
        case "fishing_tackle":
            a += "Angelequipment<br/>";break;case "flowers":
            a += "Blumen<br/>";break;case "ice_cream":
            a += "Eis<br/>";break;case "laundry_detergent":
            a += "Waschmittel<br/>";break;case "newspapers":
            a += "Zeitung<br/>";break;case "SIM_cards":
            a += "SIM-Karten<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeiten<br/>";break;case "parcel_pickup":
            a += "Paketstation<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfel<br/>";break;case "public_transport_tickets":
            a += "Tickets f\xFCr \xF6ffentliche Verkehrsmittel<br/>";
            break;case "parking_ticket":
            a += "Parkticket<br/>";break;case "sex_toys":
            a += "Sexspielzeug<br/>";break;case "stamps":
            a += "Briefmarken<br/>";break;case "toll":
            a += "Mauttickets<br/>";break;case "umbrellas":
            a += "Regenschirme<br/>";break;default:
            a += "Inhalt unbekannt<br/>";}"post_box" == b.amenity && (b.collection_times && (a += "Leerungszeiten: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "Vom Auto aus erreichbar. <br/>"));return a;
},
    fnContentStorage = exports.fnContentStorage = function fnContentStorage(b) {
    var a = "";if ("storage_tank" == b.man_made) {
        if (b.content) {
            var c = b.content;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }if (b.contents) {
            c = b.contents;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;
                case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }
    }b.storage && ("gas" == b.storage && (a += "Inhalt: Gas<br/>"), "oil" == b.storage && (a += "Inhalt: \xD6l<br/>"));return a;
},
    fnContentInformationCity = exports.fnContentInformationCity = function fnContentInformationCity(b) {
    var a = "";b["name:de"] && (a += "deutscher Name: " + b["name:de"] + "<br/>");if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
        var c = b.population.length % 3,
            d = 0 < c ? b.population.substring(0, c) : "";for (i = 0; i < Math.floor(b.population.length / 3); i++) {
            d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
        }a += "Einwohnerzahl: " + d + "<br/>";
    } else a += "Einwohnerzahl " + b.population + "<br/>";1E4 >= b.population && (a += "Einwohnerzahl: " + b.population + "<br/>");return a;
},
    fnContentEmergency = exports.fnContentEmergency = function fnContentEmergency(b) {
    var a = "";b.lifeboat && ("inshore" == b.lifeboat ? a += "Einsatzgebiet: Inshore (Binnen)<br/>" : "offshore" == b.lifeboat && (a += "Einsatzgebiet: Offshore (Buten)<br/>"));b["lifeboat:class"] && (a += "Bootstyp: " + b["lifeboat:class"] + "<br/>");if (b["siren:type"]) {
        var c = b["siren:type"];switch (c) {case "mechanical":
                c = "mechanisch";break;case "electronic":
                c = "elektronisch";break;case "pneumatic":
                c = "pneumatisch";break;case "electromechanic":
                c = "elektromechanisch";}a += "Typ: " + c + "<br/>";
    }if (b["siren:purpose"]) {
        c = b["siren:purpose"];switch (c) {case "air_raid":
                c = "Luftschutz";break;case "tornado":
                c = "Tornado";break;case "storm":
                c = "Sturm";break;case "civil_defense":
                c = "Bev\xF6lkerungsschutz";break;case "fire":
                c = "Feuer";}a += "Nutzung: " + c + "<br/>";
    }b["siren:model"] && (a += "Model: " + b["siren:model"] + "<br/>");b["siren:range"] && (a += "H\xF6rweite: " + b["siren:range"] + "<br/>");return a;
},
    fnContentCuisine = exports.fnContentCuisine = function fnContentCuisine(b) {
    var a = "";if (b.cuisine) {
        var c = "",
            a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "Spezialit\xE4ten: " : a + "K\xFCche: ";"arabic" == b.cuisine && (c += "arabisch<br/>");"italian" == b.cuisine && (c += " italienisch<br/>");"international" == b.cuisine && (c += " international<br/>");"regional" == b.cuisine && (c += " regional<br/>");"chinese" == b.cuisine && (c += " chinesisch<br/>");"greek" == b.cuisine && (c += " griechisch<br/>");"african" == b.cuisine && (c += " afrikanisch<br/>");"german" == b.cuisine && (c += " deutsch<br/>");"mexican" == b.cuisine && (c += " mexikanisch<br/>");"french" == b.cuisine && (c += " franz\xF6sisch<br/>");"indian" == b.cuisine && (c += " indisch<br/>");"iranian" == b.cuisine && (c += " iranisch<br/>");"lebanese" == b.cuisine && (c += " libanesisch<br/>");"thai" == b.cuisine && (c += " thail\xE4ndisch<br/>");"balkan" == b.cuisine && (c += " balkan<br/>");"turkish" == b.cuisine && (c += " t\xFCrkisch<br/>");"bavarian" == b.cuisine && (c += " bayrisch<br/>");"czech" == b.cuisine && (c += " tschechisch<br/>");"portuguese" == b.cuisine && (c += " portugiesisch<br/>");"spanish" == b.cuisine && (c += " spanisch<br/>");"japanese" == b.cuisine && (c += " japanisch<br/>");"fish" == b.cuisine && (c += " Fisch<br/>");"brazilian" == b.cuisine && (c += " brasilianisch<br/>");"asian" == b.cuisine && (c += " asiatisch<br/>");"mediterranean" == b.cuisine && (c += " mediterran<br/>");"seafood" == b.cuisine && (c += " Meeresfr\xFCchte<br/>");"ice_cream" == b.cuisine && (c += " Eiscrem<br/>");"burger" == b.cuisine && (c += " Fast Food<br/>");"frozen_yogurt" == b.cuisine && (c += " Frozen Yogurt<br/>");"" == c && (c = b.cuisine + "<br/>");a += c;
    }return a;
},
    fnContentShipping = exports.fnContentShipping = function fnContentShipping(b) {
    var a = "";b.harbour = "yes";"yes" == b["access:tide"] && (a += "Zufahrtsbeschr\xE4nkung durch Tide</br>");"yes" == b["access:swell"] && (a += "Zufahrtsbeschr\xE4nkung durch Schwell</br>");"yes" == b["access:ice"] && (a += "Zufahrtsbeschr\xE4nkung durch Eis</br>");b.vhf_channel && (a += "UKW-Kanal: " + b.vhf_channel + "</br>");b.mmsi && (a += "MMSI-Nummer: " + b.mmsi + "</br>");b["harbour:information"] && (a += "Information :" + b["harbour:information"] + "</br>");"yes" == b.motorboat && (a += "Fahren mit Motor erlaubt</br>");"no" == b.motorboat && (a += "Fahren mit Motor nicht erlaubt</br>");b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");"yes" == b.intermittent && (a += "Fluss zeitweise ausgetrocknet</br>");"yes" == b.tidal && (a += "Gezeiten beeinflussen die Str\xF6mung</br>");b.draft && (a += "Fahrwassertiefe: " + b.draft + " m</br>");if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "Funktionsweise: Handbetrieb, Slipwagen<br/>"), "car" == b.operating && (a += "Funktionsweise: mit Auto, Bootsanh\xE4nger<br/>"), "cable_winch" == b.operating && (a += "Funktionsweise: Seilwinde<br/>"), "travellift" == b.operating && (a += "Funktionsweise: Travellift<br/>"), "crane" == b.man_made && (a += "mit Kran<br/>", b["crane:maxload"] && (a += "Maximale Last: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "Maximaler Tiefgang: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "Maximale Bootsl\xE4nge: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "Mit Fahrzeug erreichbar<br/>");a += fnWreckInfo(b);if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) {
        var c = b.duration;"" != c && "undefined" != c && null != c && (a += "Fahrtzeit in Std. : " + c + "<br/>");"yes" == b.motorcar && (a += "Autos erlaubt <br/>");"no" == b.motorcar && (a += "Autos nicht erlaubt <br/>");"no" == b.motor_vehicle && (a += "Fahrzeuge nicht erlaubt <br/>");"yes" == b.motor_vehicle && (a += "Fahrzeuge erlaubt <br/>");"yes" == b.vehicle && (a += "Fahrzeuge erlaubt <br/>");"no" == b.vehicle && (a += "Keine Fahrzeuge<br/>");"no" == b.bicycle && (a += "Keine Fahrr\xE4der<br/>");"no" == b.bicycle && (a += "Fahrr\xE4der erlaubt<br/>");"yes" == b.hgv && (a += "LKW erlaubt <br/>");"no" == b.hgv && (a += "LKW nicht erlaubt <br/>");"yes" == b.foot && (a += "Fussg\xE4nger erlaubt <br/>");"no" == b.foot && (a += "Fussg\xE4nger nicht erlaubt <br/>");"yes" == b.bicycle && (a += "Fahrradfahrer erlaubt <br/>");"no" == b.bicycle && (a += "Fahrradfahrer nicht erlaubt <br/>");"yes" == b["ferry:cable"] && (a += "Seilf\xE4hre<br/>");
    }if (b["seamark:light:1:colour"]) {
        c = b["seamark:light:1:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "Periode: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "H\xF6he: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "Reichweite: " + b["seamark:light:1:range"] + " sm<br/>"));if (b["seamark:light:colour"]) {
        c = b["seamark:light:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "H\xF6he: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "Reichweite: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "Periode: " + b["seamark:light:period"] + "<br/>"));return a;
},
    fnContentHydrants = exports.fnContentHydrants = function fnContentHydrants(b) {
    var a = "";if ("fire_hydrant" == b.emergency) {
        var c = b["fire_hydrant:count"];"undefined" != c && null != c && "" != c && (a += "Anzahl: " + c + "<br/>");c = b["fire_hydrant:diameter"];
        "undefined" != c && null != c && "" != c && (a += "Rohrdurchmesser: " + c + " mm<br/>");c = b["fire_hydrant:pressure"];"undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Druck in bar / Saugleitung: Saugleitung<br/>" : a + ("Druck in bar / Saugleitung: " + c + "<br/>"));c = b["fire_hydrant:position"];"undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Fahrbahn<br/>" : "parking_lot" == c ? a += "Position: Parkbucht<br/>" : "sidewalk" == c ? a += "Position: B\xFCrgersteig<br/>" : "green" == c && (a += "Position: Wiese<br/>"));c = b.water_volume;
        "undefined" != c && null != c && "" != c && (a += "Volumen: " + c + "<br/>");c = b["fire_hydrant:awwa_class"];"undefined" != c && null != c && "" != c ? a += "AWWA Klasse: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Durchfluss: " + c + "<br/>"));c = b.water_source;"undefined" != c && null != c && "" != c && "main" != c && (a += "Wasserquelle: " + c + "<br/>");c = b["couplings:type"];"undefined" != c && null != c && "" != c && (a += "Kopplungstyp: " + c + "<br/>");c = b["couplings:diameter"];"undefined" != c && null != c && "" != c && (a += "Kopplungsdurchmesser: " + c + "<br/>");c = b["pillar:type"];"dry_barrel" === c && (a += "Typ \xDCberflurhydrant: " + c + "<br/>");"fire_hydrant" === b["disused:emergency"] && (a += "Aktuell unbrauchbar.");"" == a && (a = "Keine Details vorhanden.");
    }return a;
},
    fnContentStreetsTraffic = exports.fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
    var a = "";"yes" == b["red_turn:right"] && (a += "Ampel mit Gr\xFCnpfeil<br/>");"no" == b["red_turn:right"] && (a += "Ampel ohne Gr\xFCnpfeil<br/>");b.bridge && (b.height && (a += "H\xF6he \xFCber dem Grund: " + b.height + " m<br/>"), b.length && (a += "L\xE4nge der Br\xFCcke: " + b.length + " m<br/>"), b.bridge_ref && (a += "Bauwerksnummer: " + b.bridge_ref + "<br/>"), b.start_date && (a += "Baujahr: " + b.start_date + "</br>;"), b.maxweight && (a += "Tragf\xE4higkeit: " + b.maxweight + " t</br>"));b.highway && "yes" == b.toll && (a += "Mautpflichtige Stra\xDFe<br/>");"yes" == b["toll:hgv"] && (a += "Mautpflichtige Stra\xDFe f\xFCr LKWs<br/>");if (b.surface) {
        var c = b.surface,
            a = a + "Oberfl\xE4che: ";switch (c) {case "grass":
                a += "Gras<br/>";break;case "paved":
                a += "versiegelt<br/>";break;case "asphalt":
                a += "Asphalt<br/>";
                break;case "cobblestone":
                a += "Naturstein unbehauen<br/>";break;case "sett":
                a += "behauenes Steinpflaster<br/>";break;case "concrete":
                a += "Beton<br/>";break;case "unpaved":
                a += "ohne Stra\xDFenbelag<br/>";break;case "paving_stones":
                a += "Pflastersteine<br/>";break;case "compacted":
                a += "verdichtete Deckschicht aus Natursteinmaterial<br/>";break;case "dirt":
                a += "unbefestigt<br/>";break;case "fine_gravel":
                a += "Splitt/Kies<br/>";break;case "grass_paver":
                a += "Rasengittersteine<br/>";break;case "gravel":
                a += "Schotter<br/>";
                break;case "earth":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "ground":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "metal":
                a += "Metall<br/>";break;case "mud":
                a += "Matsch, Morast<br/>";break;case "sand":
                a += "Sand<br/>";break;case "wood":
                a += "Holz<br/>";break;case "tartan":
                a += "Tartan- oder Kunststoffbelag<br/>";break;case "artificial_turf":
                a += "Kunstrasen<br/>";break;case "clay":
                a += "Ascheplatz<br/>";break;default:
                a += "unbekannt<br/>";}
    }"grade1" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)<br/>");
    "grade2" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)<br/>");"grade3" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enth\xE4lt (z. B. Feinschotter-, Sand- oder Erdweg)<br/>");"grade4" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, haupts\xE4chlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)<br/>");"grade5" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, Oberfl\xE4che besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gel\xE4nde unterscheidbar<br/>");"yes" == b.motorcycle && (a += "<br/>mit dem Auto befahrbar.<br/>");"no" == b.motorcycle && (a += "<br/>keine motorisierten Fahrzeuge zugelassen.<br/>");"excellent" == b.trail_visibility && (a += "Wegerkennbarkeit: Gut ausgewiesener Weg<br/>");"good" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden<br/>");
    "intermediate" == b.trail_visibility && (a += "Wegerkennbarkeit: Weg nicht durchgegend sichbar<br/>");"bad" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen<br/>");"horrible" == b.trail_visibility && (a += "Wegerkennbarkeit: Oft kein Weg vorhanden<br/>");"no" == b.trail_visibility && (a += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen<br/>");"hiking" == b.sac_scale && (a += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)</br>");"mountain_hiking" == b.sac_scale && (a += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)</br>");
    "demanding_mountain_hiking" == b.sac_scale && (a += "Weg: Heikle Stellen k\xF6nnen mit Seilen oder Ketten gesichert sein. Leitern sind m\xF6glich. Eventuell sind die H\xE4nde f\xFCrs Gleichgewicht n\xF6tig. (Schwierigskeitstyp: 3)</br>");"alphine_hiking" == b.sac_scale && (a += "Weg: Wegspur kaum vorhanden. An gewissen Stellen ben\xF6tigt man die H\xE4nde zum weiterkommen (Schwierigskeitstyp: 4)</br>");"demanding_alphine_hiking" == b.sac_scale && (a += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)</br>");
    "difficult_alpine_hiking" == b.sac_scale && (a += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6</br>");b["mtb:name"] && (a += "Fahrradstrecke :" + b["mtb:name"] + "</br>");"0" == b["mtb:scale"] && (a += "Mountainbikestrecke: Keine besondere Schwierigkeiten.</br>Wegbeschaffenheit: fester und griffiger Untergrund.</br>Hindernisse: Keine Hindernisse</br>Gef\xE4lle: Leicht bis m\xE4\xDFig</br>Kurven: weit</br>Fahrtechnik: keine besonderes fahrtechnisches K\xF6nnen n\xF6tig</br>");
    "1" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt flache Wurzeln und kleinere Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: loserer Untergrund m\xF6glich, kleine Wurzeln und Steine</br>Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionssch\xE4den</br>Gef\xE4lle: bis zu 40%</br>Kurven: eng</br>Fahrtechnik: Fahrtechnische Grundkentnisse n\xF6tig. Hindernisse k\xF6nnen \xFCberrollt werden</br>");"2" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt gr\xF6\xDFere Wurzeln und Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: Untergrund meist nicht verfestigt, gr\xF6\xDFere Wurzeln und Steine</br>Hindernisse:  flache Abs\xE4tze und Treppen</br>Gef\xE4lle: bis zu 70%</br>Kurven: leichte Spitzkehren</br>Fahrtechnik: Fortgeschrittene Fahrtechnik n\xF6tig.</br>");"3" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen gr\xF6\xDFeren Felsbrocken und/oder Wurzelpassagen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  hohe Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven: enge Spitzkehren</br>Fahrtechnik: Sehr gute Bike-Beherrschung n\xF6tig.</br>");
    "4" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit gro\xDFen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen h\xE4ufig loses Ger\xF6ll und extreme Steilrampen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren</br>Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken n\xF6tig.</br>");
    "5" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gel\xE4nde mit Gegenanstiegen, Ger\xF6llfeldern und Erdrutschen, \xF6senartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Abs\xE4tzen und Hindernissen wie umgefallenen B\xE4umen</br>Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Ger\xF6ll / der Weg ist eher ein Wandersteig</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren mit Hindernissen</br>Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken n\xF6tig.</br>");
    "6" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst f\xFCr Profis und Trial-Fahrer nicht passierbar</br>Wegbeschaffenheit:  Gro\xDFteils nur noch kletterbar</br>Hindernisse: Abs\xE4tze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide H\xE4nde braucht.</br>Gef\xE4lle: 100% oder mehr</br>Kurven: - </br>Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr</br>");"10" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links.</br>");
    "30" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h</br>");"50" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"70" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"80" == b.maxspeed && (a += "Maximale Geschwindigkeit von 80 Km/h darf nicht \xFCberschritten werden.</br>");"100" == b.maxspeed && (a += "Maximale Geschwindigkeit von 100 Km/h darf nicht \xFCberschritten werden.</br>");
    "no" == b.overtaking && (a += "\xDCberholverbot, Fahrzeuge d\xFCrfen nicht \xFCberholen !</br>");"yes" == b.noexit && (a += "Die Stra\xDFe endet hier, es handelt sich um eine Sackgasse</br>");"yes" == b.oneway && (a += "Es handelt sich hier um eine Einbahnstra\xDFe, sie d\xFCrfen diese Stra\xDFe nur in eine Richtung befahren</br>");"designated" == b.priority_road && (a += "Es handelt sich hierbei um eine Vorfahrtsstra\xDFe, derjenige, der sich auf dieser befindet, hat gegen\xFCber anderen Fahrzeugen die Vorfahrt!</br>");
    "end" == b.priority_road && (a += "Die Vorfahrtsstra\xDFe endet hier und die Regelung wird aufgehoben</br>");"emergency_bay" == b.highway && (a += "Hier befindet sich eine Bucht die nur in Notf\xE4llen zur Benuzung zur Verf\xFCgung steht</br>");"yes" == b.traffic_calming && (a += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");"choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");
    "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");if ("parking" == b.amenity && ("yes" == b.fee && (a += "kostenpflichtig<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
        var d = "unbekannt";"yes" != c && (d = c);a += "Frauenparkpl\xE4tze (Anzahl: " + d + ") <br/>";
    }b.park_ride && ("bus" == b.park_ride && (a += "Busanbindung<br/>"), "tram" == b.park_ride && (a += "Bahnanbindung<br/>"), "unknown" == b.park_ride && (a += "Verkehrsmittel unbekannt<br/>"));b["railway:position"] && (a += "Streckenkilometer<br/>Position: " + b["railway:position"] + "<br/>");b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");return a;
},
    fnContentSports = exports.fnContentSports = function fnContentSports(b) {
    var a = "";"9pin" == b.sport && (a += "M\xF6gliche Sportart: Kegeln<br/>");
    "10pin" == b.sport && (a += "M\xF6gliche Sportart: Bowling<br/>");"american_football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"aikido" == b.sport && (a += "M\xF6gliche Sportart: Aikido<br/>");"archery" == b.sport && (a += "M\xF6gliche Sportart: Bogenschie\xDFen<br/>");"athletics" == b.sport && (a += "M\xF6gliche Sportart: Leichtathletik<br/>");"australian_football" == b.sport && (a += "M\xF6gliche Sportart: Australian Football<br/>");"base" == b.sport && (a += "M\xF6gliche Sportart: Objektspringen<br/>");
    "badminton" == b.sport && (a += "M\xF6gliche Sportart: Badminton<br/>");"baseball" == b.sport && (a += "M\xF6gliche Sportart: Baseball<br/>");"basketball" == b.sport && (a += "M\xF6gliche Sportart: Basketball<br/>");"beachvolleyball" == b.sport && (a += "M\xF6gliche Sportart: Beachvolleyball<br/>");"bmx" == b.sport && (a += "M\xF6gliche Sportart: BMX<br/>");"boules" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"boule" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"bowls" == b.sport && (a += "M\xF6gliche Sportart: Bowls<br/>");
    "boxing" == b.sport && (a += "M\xF6gliche Sportart: Boxen<br/>");"canadian_football" == b.sport && (a += "M\xF6gliche Sportart: Canadian Football<br/>");"canoe" == b.sport && (a += "M\xF6gliche Sportart: Paddeln<br/>");"chess" == b.sport && (a += "M\xF6gliche Sportart: Schach<br/>");"cliff_diving" == b.sport && (a += "M\xF6gliche Sportart: Klippenspringen<br/>");"climbing" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"climbing_adventure" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"cricket" == b.sport && (a += "M\xF6gliche Sportart: Cricket<br/>");"cricket_nets" == b.sport && (a += "M\xF6gliche Sportart: Cricket Netz<br/>");"croquet" == b.sport && (a += "M\xF6gliche Sportart: Croquet<br/>");"curling" == b.sport && (a += "M\xF6gliche Sportart: Curling<br/>");"cycling" == b.sport && (a += "M\xF6gliche Sportart: Radrennen, Radsport<br/>");"dog_racing" == b.sport && (a += "M\xF6gliche Sportart: Hunderennen<br/>");if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";"fencing" == b.sport && (a += "M\xF6gliche Sportart: Fechten<br/>");
    "equestrian" == b.sport && (a += "M\xF6gliche Sportart: Reiten<br/>");"football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"free_flying" == b.sport && (a += "M\xF6gliche Sportart: Freeflying<br/>");"gaelic_games" == b.sport && (a += "M\xF6gliche Sportart: Gaelic games<br/>");"golf" == b.sport && (a += "M\xF6gliche Sportart: Golf<br/>");"gymnastics" == b.sport && (a += "M\xF6gliche Sportart: Gymnastik<br/>");"hockey" == b.sport && (a += "M\xF6gliche Sportart: Hockey<br/>");"horseshoes" == b.sport && (a += "M\xF6gliche Sportart: Hufeisenwerfen<br/>");"horse_racing" == b.sport && (a += "M\xF6gliche Sportart: Pferderennen<br/>");"ice_stock" == b.sport && (a += "M\xF6gliche Sportart: Eisstockschie\xDFen<br/>");"judo" == b.sport && (a += "M\xF6gliche Sportart: Judo<br/>");"karting" == b.sport && (a += "M\xF6gliche Sportart: Kartfahren<br/>");"kitesurfing" == b.sport && (a += "M\xF6gliche Sportart: Kitesurfing<br/>");"korfball" == b.sport && (a += "M\xF6gliche Sportart: Korfball<br/>");"motor" == b.sport && (a += "M\xF6gliche Sportart: Motorsport<br/>");
    "multi" == b.sport && (a += "M\xF6gliche Sportart: Mehrfachsport<br/>");"obstacle_course" == b.sport && (a += "M\xF6gliche Sportart: Hindernislauf<br/>");"orienteering" == b.sport && (a += "M\xF6gliche Sportart: Orientierungslauf<br/>");"paddle_tennis" == b.sport && (a += "M\xF6gliche Sportart: Paddle-Tennis<br/>");"paragliding" == b.sport && (a += "M\xF6gliche Sportart: Gleitschirmfliegen<br/>");"Pelota" == b.sport && (a += "M\xF6gliche Sportart: Pelota<br/>");"rasquet" == b.sport && (a += "M\xF6gliche Sportart: Racquetball<br/>");
    "rowing" == b.sport && (a += "M\xF6gliche Sportart: Rudern<br/>");"rugby_league" == b.sport && (a += "M\xF6gliche Sportart: Rugby League<br/>");"rugby_union" == b.sport && (a += "M\xF6gliche Sportart: Rugby Union<br/>");"running" == b.sport && (a += "M\xF6gliche Sportart: Laufsport<br/>");"scuba_diving" == b.sport && (a += "M\xF6gliche Sportart: Sporttauchen<br/>");"shooting" == b.sport && (a += "M\xF6gliche Sportart: Sportschie\xDFen<br/>");"skating" == b.sport && (a += "M\xF6gliche Sportart: Eislaufsport<br/>");"skateboard" == b.sport && (a += "M\xF6gliche Sportart: Skateboard<br/>");"skiing" == b.sport && (a += "M\xF6gliche Sportart: Skifahren<br/>");"soccer" == b.sport && (a += "M\xF6gliche Sportart: Fu\xDFball<br/>");"surfing" == b.sport && (a += "M\xF6gliche Sportart: Surfen<br/>");"swimming" == b.sport && (a += "M\xF6gliche Sportart: Schwimmen<br/>");"table_tennis" == b.sport && (a += "M\xF6gliche Sportart: Tischtennis<br/>");"taekwondo" == b.sport && (a += "M\xF6gliche Sportart: Taekwondo<br/>");"team_handball" == b.sport && (a += "M\xF6gliche Sportart: Handball<br/>");
    "tennis" == b.sport && (a += "M\xF6gliche Sportart: Tennis<br/>");"toboggan" == b.sport && (a += "M\xF6gliche Sportart: Rodeln<br/>");"volleyball" == b.sport && (a += "M\xF6gliche Sportart: Volleyball<br/>");"water_ski" == b.sport && (a += "M\xF6gliche Sportart: Wasserski<br/>");"weightlifting" == b.sport && (a += "M\xF6gliche Sportart: Gewichtheben<br/>");"wrestling" == b.sport && (a += "M\xF6gliche Sportart: Ringen<br/>");return a;
};
function fnArztInfo(b) {
    var a = "",
        c = "",
        d = b["healthcare:speciality"];"" != d && ("general" == d && (c += "Allgemeinmedizin<br/>"), "allergology" == d && (c += "Allergologie<br/>"), "anaesthetics" == d && (c += "An\xE4sthesiologie<br/>"), "biochemistry" == d && (c += "Medizinische und chemische Labordiagnostik<br/>"), "biological_haematology" == d && (c += "Biologische H\xE4matologie<br/>"), "biology" == d && (c += "Medizinische Biologie<br/>"), "cardiology" == d && (c += "Kardiologie<br/>"), "cardiac_surgery" == d && (c += "Kardiovaskularchirurgie<br/>"), "child_psychiatry" == d && (c += "Kinder- u. Jugendpsychatrie<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie<br/>"), "dermatology" == d && (c += "Hautkrankheiten<br/>"), "dermatovenereology" == d && (c += "Haut- und Geschlechtskrankheiten<br/>"), "diagnostic_radiology" == d && (c += "Diagnostische Radiologie<br/>"), "emergency" == d && (c += "Unfall- und Notfallmedizin<br/>"), "endocrinology" == d && (c += "Endokrinologie<br/>"), "gastroenterological_surgery" == d && (c += "Gastroenterologische Chirurgie<br/>"), "gastroenterology" == d && (c += "Gastroenterologie<br/>"), "geriatrics" == d && (c += "Geriatrie<br/>"), "gynaecology" == d && (c += "Geburtshilfe und Frauenheilkunde<br/>"), "haematology" == d && (c += "Allgemeine H\xE4matologie<br/>"), "hepatology" == d && (c += "Hepatologie<br/>"), "immunology" == d && (c += "Immunologie<br/>"), "infectious_diseases" == d && (c += "Ansteckende Krankheiten<br/>"), "intensive" == d && (c += "Intensivmedizin<br/>"), "internal" == d && (c += "Allgemeine (innere) Medizin<br/>"), "maxillofacial_surgery" == d && (c += "Mund-Kiefer-Gesichtschirurgie<br/>"), "nephrology" == d && (c += "Nierenkrankheiten<br/>"), "neurology" == d && (c += "Neurologie<br/>"), "neurophysiology" == d && (c += "Klinische Neurophysiologie<br/>"), "neuropsychiatry" == d && (c += "Neuropsychiatrie(Neurologie und Psychiatrie)<br/>"), "neurosurgery" == d && (c += "Neurochirurgie<br/>"), "nuclear" == d && (c += "Nuklearmedizin<br/>"), "occupational" == d && (c += "Arbeitsmedizin <br/>"), "oncology" == d && (c += "Onkologie<br/>"), "ophthalmology" == d && (c += "Augenheilkunde<br/>"), "orthopaedics" == d && (c += "Orthop\xE4die<br/>"), "otolaryngology" == d && (c += "Hals-Nasen-Ohren-Heilkunde<br/>"), "paediatric_surgery" == d && (c += "Kinderchirurgie<br/>"), "paediatrics" == d && (c += "Kinderheilkunde<br/>"), "palliative" == d && (c += "Palliativmedizin<br/>"), "physiatry" == d && (c += "Physikalischeund Rehabilitative Medizin<br/>"), "plastic_surgery" == d && (c += "Plastische Chirurgie<br/>"), "proctology" == d && (c += "Proktologie<br/>"), "psychiatry" == d && (c += "Psychiatrie<br/>"), "pulmonology" == d && (c += "Lungen- und Bronchialheilkunde<br/>"), "radiology" == d && (c += "Radiologie<br/>"), "radiotherapy" == d && (c += "Strahlentherapie<br/>"), "rheumatology" == d && (c += "Rheumatologie<br/>"), "stomatology" == d && (c += "Stomatologie<br/>"), "surgery" == d && (c += "Chirurgie<br/>"), "surgical_oncology" == d && (c += "Krebschirurgie<br/>"), "thoracic_surgery" == d && (c += "Thoraxchirurgie<br/>"), "transplant" == d && (c += "Transplantationsmedizin<br/>"), "trauma" == d && (c += "Unfallchirurgie<br/>"), "tropical" == d && (c += "Tropenmedizin<br/>"), "urology" == d && (c += "Urologie<br/>"), "vascular_surgery" == d && (c += "Gef\xE4\xDFchirurgie<br/>"), "venereology" == d && (c += "Geschlechtskrankheiten<br/>"), "acupuncture" == d && (c += "Akupunktur<br/>"), "naturopathy" == d && (c += "Naturheilkunde<br/>"), "chiropractic" == d && (c += "Chiropraktik <br/>"), "homeopathy" == d && (c += "Hom\xF6opathie<br/>"), "osteopathy" == d && (c += "Osteopathie<br/>"));"" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "Notfallmedizin<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "An\xE4sthesie<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "Dermatologie<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "Hals, Nasen, Ohren (HNO)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "Arbeitsnmedizin<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "innere Medizin<br/>"), "yes" == b["health_specialty:neurology"] && (c += "Neurologie<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "Augenheilkunde<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "Palliativmedizin<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "Psychatrie<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "Gyn\xE4kologie<br/>"), "yes" == b["health_specialty:urology"] && (c += "Urologie<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "Schmerzmedizin<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "Umweltmedizin<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "Intensivmedizin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "Kinder- u. Jugendmedizin<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "Physikalische und Rehabilitative Medizin<br/>"), "yes" == b["health_specialty:radiology"] && (c += "Radiologie<br/>"), "yes" == b["health_specialty:general"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "Ergotherapie<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "Pneumologie<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "Akupunktur<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "Orthop\xE4die<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "Chiropraktik<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "Sportmedizin<br/>"));"" != c && (a = a + "Fachgebiete: " + ('<div class="c4g_open_text">' + c + "</div>"));return a;
}
function fnKraftwerkInfo(b) {
    var a = "";if (b["generator:method"]) {
        a += "Erzeugungsart: ";switch (b["generator:method"]) {case "combustion":
                a += "Verbrennung";break;case "thermal":
                a += "thermische Nutzung (z.B. Solarthermie)";break;case "pumping":
                a += "durch Pumpen (z.B. die Nutzung von Geothermie)";break;case "photovoltaic":
                a += "Photovoltaik";break;case "gasification":
                a += "Vergasung, danach Verbrennung";break;case "anaerobic_digestion":
                a += "Erzeugung von Biogas durch Verg\xE4rung";break;case "pyrolysis":
                a += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
                break;case "fission":
                a += "Kernspaltung";break;case "fusion":
                a += "Kernfusion";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }if (b.power_source) {
        a += "Erzeugungsart: ";switch (b.power_source) {case "photovoltaic":
                a += "Photovoltaik";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }b["generator:output:electricity"] && (a += "elekt. Energieerzeugung: " + b["generator:output:electricity"] + "<br/>");b["generator:output:heat"] && (a += "therm. Energieerzeugung: " + b["generator:output:heat"] + "<br/>");b["generator:output:cold"] && (a += "therm. Energieerzeugung: " + b["generator:output:cold"] + "<br/>");b["generator:output"] && (a += "Nennleistung: " + b["generator:output"] + "<br/>");b["generator:output:hot_air"] && (a += "Art des Transportmediums: " + b["generator:output:hot_air"] + "<br/>");b["generator:output:cold_water"] && (a += "Art des Transportmediums: " + b["generator:output:cold_water"] + "<br/>");b["generator:output:cold_air"] && (a += "Art des Transportmediums: " + b["generator:output:cold_air"] + "<br/>");b["generator:output:compressed_air"] && (a += "Art des Transportmediums: " + b["generator:output:compressed_air"] + "<br/>");b["generator:output:steam"] && (a += "Art des Transportmediums: " + b["generator:output:steam"] + "<br/>");b["generator:output:vacuum"] && (a += "Art des Transportmediums: " + b["generator:output:vacuum"] + "<br/>");b["generator:output:battery_charging"] && (a += "Art des Transportmediums: " + b["generator:output:battery_charging"] + "<br/>");"PWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-1" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-2" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-3" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-4" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-5" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-6" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"PHWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"GCR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"FBR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1500" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"VVER" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CANDU" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CPR-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"EPR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"tokamak" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"stellarator" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"ICF" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"cold-fusion" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Horizontal-Achsen Windenergieanlage<br/>");"wind_turbine" == b["generator:method"] && "vertical_turbine" == b["generator:type"] && (a += "Generatortyp: Vertikalrotor<br/>");"francis_turbine" == b["generator:type"] && (a += "Generatortyp: Francis-Turbine<br/>");"kaplan_turbine" == b["generator:type"] && (a += "Generatortyp: Kaplan-Turbine<br/>");"pelton_turbine" == b["generator:type"] && (a += "Generatortyp: Pelton-Turbine<br/>");"stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit horizontaler Achse<br/>");"stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit vertikaler Achse<br/>");"steam_turbine" == b["generator:type"] && (a += "Generatortyp: Dampfturbine<br/>");"heat_pump" == b["generator:type"] && (a += "Generatortyp: W\xE4rmepumpe<br/>");"solar_thermal_collector" == b["generator:type"] && (a += "Generatortyp: Sonnenkollektor<br/>");"solar_photovoltaic_panel" == b["generator:type"] && (a += "Generatortyp: Photovoltaic-System<br/>");"steam_generator" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"gas_turbine" == b["generator:type"] && (a += "Generatortyp: Gasturbine<br/>");"combined_cycle" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"reciprocating_engine" == b["generator:type"] && (a += "Generatortyp: Verbrennungsmotor/Blockheizkraftwerk<br/>");return a;
}
function fnWertstoffinfo(b) {
    var a = "";if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "Altglascontainer</br>"), "yes" == b["recycling:shoes"] && (a += "Schuhentsorgung</br>"), "yes" == b["recycling:cooking_oil"] && (a += "Speise-\xD6l-Entsorgung</br>"), "yes" == b["recycling:paper"] && (a += "Papierentsorgung</br>"), "yes" == b["recycling:engine_oil"] && (a += "\xD6l-Entsorgung (Maschinen-, Alt-und Motor\xF6l)</br>"), "yes" == b["recycling:clothes"] && (a += "Altkleidercontainer</br>"), "yes" == b["recycling:car_batteries"] && (a += "Auto-Batterien-Entsorgung</br>"), "yes" == b["recycling:cans"] && (a += "Blechdosenentsorgung</br>"), "yes" == b["recycling:scrap_metal"] && (a += "Altmetallentsorgung</br>"), "yes" == b["recycling:plastic"] && (a += "Plastikentsorgung</br>"), "yes" == b["recycling:batterries"] && (a += "Batterieentsorgung</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "Plastikflaschenentsorgung</br>"), "yes" == b["recycling:green_waste"] && (a += "Gr\xFCnabf\xE4lle</br>"), "yes" == b["recycling:hardcore"] && (a += "Bauschutt und Stra\xDFenmaterial Entsorgung</br>");return a;
}
var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
    var a = "";b.width && (a += "Breite: " + b.width + " m<br/>");b.height && (a += "H\xF6he: " + b.height + " m<br/>");b.maxwidth && (a += "Maximalbreite: " + b.maxwidth + " m<br/>");b.maxheight && (a += "Maximalh\xF6he: " + b.maxheight + " m<br/>");b.maxweight && (a += "Maximalgewicht: " + b.maxweight + " t<br/>");b.maxspeed && (a += "H\xF6chstgeschwindigkeit: " + b.maxspeed + " km/h<br/>");b.min_age && (a += "Mindestalter: " + b.min_age + "<br/>");b.max_age && (a += "Maximalalter: " + b.max_age + "<br/>");"yes" == b.nudism && (a += "Freik\xF6rperkultur<br/>");"yes" == b.ruins && (a += "Ruine<br/>");b.ele && (a += "H\xF6he \xFCber NN: " + b.ele + " m<br/>");b["xmas:day_date"] && (a += "Dauer von - bis: " + b["xmas:day_date"] + "<br/>");b["rotor:diameter"] && (a += "Rotordurchmesser: " + b["rotor:diameter"] + " m<br/>");b["xmas:note"] && (a += "Hinweis: " + b["xmas:note"] + "<br/>");"port" == b["seamark:beacon_lateral:category"] && (a += "Backbord<br/>");"starboard" == b["seamark:beacon_lateral:category"] && (a += "Steuerbord<br/>");"yes" == b["service:bicycle:retail"] && (a += "Fahrradverkauf<br/>");"yes" == b["service:bicycle:repair"] && (a += "Fahrradreparatur<br/>");"yes" == b["service:bicycle:rental"] && (a += "Fahrradverleih<br/>");"yes" == b["service:bicycle:pump"] && (a += "Benutzung einer Luftpumpe m\xF6glich<br/>");"yes" == b["service:bicycle:diy"] && (a += "Benutzung von Werkzeug m\xF6glich<br/>");"yes" == b["service:bicycle:cleaning"] && (a += "Fahrr\xE4der werden gewaschen<br/>");"yes" == b["service:bicycle:second_hand"] && (a += "Verkauf von gebrauchten Fahrr\xE4dern<br/>");"yes" == b["service:bicycle:charging"] && (a += "Elektro-Fahrr\xE4der k\xF6nnen geladen werden<br/>");"yes" == b.cafe && (a += "Kleine Caf\xE9-Ecke<br/>");"yes" == b.breakfast && (a += "Besonderes Fr\xFChst\xFCcksangebot<br/>");"yes" == b.snack && (a += "Back-Snacks warm oder kalt<br/>");"yes" == b.indoor_seating && (a += "Sitzm\xF6glichkeiten im Innenbereich<br/>");"yes" == b.outdoor_seating && (a += "Sitzm\xF6glichkeiten im Au\xDFenbereich<br/>");"yes" == b.self_service && (a += "Selbstbedienungsb\xE4ckerei<br/>");"yes" == b.bakehouse && (a += "Backstube<br/>");"yes" == b.pastry_shop && (a += "Geb\xE4ck aus der Konditorei<br/>");"yes" == b.fair_trade && (a += "einige Fair-Trade-Produkte im Sortiment<br/>");"only" == b.fair_trade && (a += "fast ausschlie\xDFlich Fair-Trade-Produkte im Sortiment<br/>");"no" == b.fair_trade && (a += "keine Fair-Trade-Produkte im Sortiment<br/>");return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
    var a = "";if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");"yes" == b.dispensing && (a += "Apotheke mit Rezepteinl\xF6sung<br/>");"abused" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen die Misshandlung erlitten haben<br/>");"child" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Kinder<br/>");"disabled" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit k\xF6rperlicher oder geistiger Behinderung<br/>");"diseased" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Erkrankte Menschen<br/>");"drug_addicted" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Drogens\xFCchtige<br/>");"homeless" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Obdachlose<br/>");"juvenile" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Jugendliche und Teenager<br/>");"mental_health" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit psychischen Problemen<br/>");"migrant" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit Migrationshintergrund<br/>");"orphan" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Waisen<br/>");"senior" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Senioren<br/>");"underprivileged" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arme oder benachteiligte Menschen<br/>");"unemployed" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arbeitslose<br/>");"victim" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Opfer eines Verbrechens<br/>");
    return a;
};
function fnAdditionalBuildingInfos(b) {
    var a = "";b["building:color"] && (a += "Geb\xE4udenfarbe: " + b["building:color"] + "</br>");b["building:height"] && (a += "Geb\xE4udenh\xF6he: " + b["building:height"] + " m</br>");b["building:level"] && (a += "Etage: " + b["building:level"] + "</br>");b["building:part"] && (a += "Geb\xE4udeteile: " + b["building:part"] + "</br>");b["roof:color"] && (a += "Dachfarbe: " + b["roof:colour"] + "</br>");b["roof:shape"] && (a += "Dachform: " + b["roof:shape"] + "</br>");b["roof:height"] && (a += "Dachh\xF6he: " + b["roof:height"] + " m</br>");b["roof:material"] && (a += "Dachmaterial: " + b["roof:material"] + " </br>");b["roof:orientation"] && (a += "Dachausrichtung: " + b["roof:orientation"] + " </br>");b["roof:direction"] && (a += "Dachausrichtung: " + b["roof:direction"] + " </br>");b["building:type"] && (a += "Geb\xE4udentyp: " + b["building:type"] + "</br>");return a;
}
function fnSicherheitAdditional(b) {
    var a = "";"surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "Innenbereich wird \xFCberwacht"), "outdoor" == b.surveillance && (a += "Au\xDFenbereich wird \xFCberwacht"), "public" == b.surveillance && (a += "\xD6ffentliche \xDCberwachung"), "camera" == b["surveillance:type"] && (a += "\xDCberwachungstyp: Kamera"), "guard" == b["surveillance:type"] && (a += "\xDCberwachungstyp: W\xE4chter"), "ALPR" == b["surveillance:type"] && (a += "\xDCberwachungstyp: ALPR"), "town" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Ort"), "parking" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Parkplatz"), "traffic" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Verkehr"), "shop" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Shops"), "bank" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Bank"), "building" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Geb\xE4ude"));return a;
}
function fnWreckInfo(b) {
    var a = "";"wreck" == b.historic && (b["wreck:date_sunk"] && (a += "Gesunken am: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "Tiefe: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "Freiraum: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "Anerkannt seit: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "Gewicht: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "L\xE4nge: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "Breite: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "Ladung: Holz<br/>" : "coal" == b["wreck:cargo"] ? a + "Ladung: Kohle<br/>" : a + ("Ladung: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Ja<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Nein<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Ja<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Nein<br/>"), "yes" == b.access && (a += "Zutritt m\xF6glich<br/>"), "no" == b.access && (a += "Zutritt nicht m\xF6glich<br/>"), "permit_required" == b.access && (a += "Zutritt nur mit Genehmigung<br/>"));return a;
}
function fnKlosterAdditional(b) {
    var a = "";if (b["monastery:type"]) switch (b["monastery:type"]) {case "monastery":
            a += "Typ: Kl\xF6sterliche Gemeinschaft (monastery)<br/>";break;case "convent":
            a += "Typ: Bettelm\xF6nch Gemeinschaft (convent)<br/>";break;case "canonry":
            a += "Typ: Kanonikat (canonry)<br/>";break;case "commandry":
            a += "Typ: Milit\xE4r gef\xFChrt (commandry)<br/>";break;case "hermitage":
            a += "Typ: Einsiedelei (hermitage)<br/>";break;default:
            a += "Typ: unbekannt<br/>";}b["community:gender"] && ("male" == b["community:gender"] && (a += "Geschlecht: M\xE4nnergemeinschaft<br/>"), "female" == b["community:gender"] && (a += "Geschlecht: Frauengemeinschaft<br/>"));b.religious_rank && ("abbey" == b.religious_rank ? a += "Religi\xF6ser Rang: Abtei<br/>" : "abbey" == b.religious_rank && (a += "Religi\xF6ser Rang: Erzabtei<br/>"));"yes" == b.shrine && (a += "Besonderheit: Heiligengrab / Reliquienschrein<br/>");"yes" == b.sanctuary && (a += "Besonderheit: Heiligtum / Altarraum (Sanktuar)<br/>");if (b.religion) switch (b.religion) {case "animist":
            a += "Religion: animistisch<br/><br/>";break;case "bahai":
            a += "Religion: bahai<br/>";break;case "buddhist":
            a += "Religion: buddhistisch<br/>";break;case "christian":
            a += "Religion: christlich<br/>";break;case "hindu":
            a += "Religion: hinduistisch<br/>";break;case "IglesiaNiCristo":
            a += "Religion: IglesiaNiCristo<br/>";break;case "jain":
            a += "Religion: jain<br/>";break;case "jewish":
            a += "Religion: j\xFCdisch<br/>";break;case "multifaith":
            a += "Religion: pluralistisch<br/>";break;case "muslim":
            a += "Religion: muslimisch<br/>";
            type += "Moschee<br/>";break;case "pagan":
            a += "Religion: heidnisch<br/>";break;case "pastafarian":
            a += "Religion: pastafarisch<br/>";break;case "scientologist":
            a += "Religion: scientologisch<br/>";break;case "shinto":
            a += "Religion: schintoistisch<br/>";break;case "sikh":
            a += "Religion: sikh<br/>";break;case "spiritualist":
            a += "Religion: spiritistisch<br/>";break;case "taoist":
            a += "Religion: taoistisch<br/>";break;case "unitarian":
            a += "Religion: unitarian<br/>";break;case "yazidi":
            a += "Religion: yazidi<br/>";break;
        case "zoroastrian":
            a += "Religion: zoroastrisch<br/>";break;default:
            a += "Religion: unbekannt<br/>";}if (b.denomination) switch (b.denomination) {case "anglican":
            a += "Konfession: Anglikanische Gemeinschaft<br/><br/>";break;case "baptist":
            a += "Konfession: Baptisten<br/>";break;case "catholic":
            a += "Konfession: Katholische Kirche, ohne genauere Spezifizierung<br/>";break;case "roman_catholic":
            a += "Konfession: R\xF6misch-Katholische Kirche<br/>";break;case "old_catholic":
            a += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)<br/>";
            break;case "greek_catholic":
            a += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung f\xFCr die mit Rom unierten Ostkirchen des byzantinischen Ritus<br/>";break;case "evangelical":
            a += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche<br/>";break;case "jehovahs_witness":
            a += "Konfession: Zeugen Jehovas<br/>";break;case "lutheran":
            a += "Konfession: Lutheraner, evangelisch-lutherisch<br/>";
            break;case "mennonite":
            a += "Konfession: Mennoniten<br/>";break;case "messianic_jewish":
            a += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe.<br/>";break;case "methodist":
            a += "Konfession: Methodist Church (engl. Methodism)<br/>";break;case "mormon":
            a += "Konfession: Mormonen<br/>";break;case "new_apostolic":
            a += "Konfession: Neuapostolische Kirche<br/>";break;case "orthodox":
            a += "Konfession: Orthodox, ohne genauere Spezifizierung<br/>";break;case "greek_orthodox":
            a += "Konfession: Griechisch-Orthodox<br/>";
            break;case "coptic_orthodox":
            a += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche \xC4gyptens.<br/>";break;case "pentecostal":
            a += "Konfession: Pfingstbewegung<br/>";break;case "presbyterian":
            a += "Konfession: Presbyterianische Kirchen<br/>";break;case "protestant":
            a += "Konfession: Evangelische Kirchen<br/>";break;case "quaker":
            a += "Konfession: Qu\xE4ker<br/>";break;case "reformed":
            a += "Konfession: Evangelisch-reformierte<br/>";break;case "russian_orthodox":
            a += "Konfession: Russisch-Orthodox<br/>";
            break;case "seventh_day_adventist":
            a += "Konfession: Siebenten-Tags-Adventisten<br/>";break;case "christian_community":
            a += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbst\xE4ndige Kultusgemeinschaft versteht.<br/>";break;case "adventist":
            a += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten.<br/>";break;case "alliance":
            a += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity.<br/>";
            break;case "assemblies_of_god":
            a += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination.<br/>";break;case "apostolic":
            a += "Konfession: Apostolische Kirche<br/>";break;case "armenian_apostolic":
            a += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche.<br/>";break;case "assyrian":
            a += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und v\xF6llig eigenst\xE4ndige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon.<br/>";
            break;case "christ_scientist":
            a += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor.<br/>";break;case "church_of_scotland":
            a += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch \u201Ethe Kirk\u201C genannt.<br/>";break;case "czechoslovak_hussite":
            a += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der R\xF6misch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei<br/>";
            break;case "dutch_reformed":
            a += "Konfession: Niederl\xE4ndisch-reformierte Kirche, (einschlie\xDFlich NGK und \xE4hnliche Kirchen in S\xFCdafrika)<br/>";break;case "exclusive_brethren":
            a += "Konfession: Exclusive Brethren<br/>";break;case "foursquare":
            a += "Konfession: International Church of the Foursquare Gospel<br/>";break;case "kimbanguist":
            a += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabh\xE4ngige, christliche Kirche.<br/>";break;case "living_waters_church":
            a += "Konfession: Living Waters Christian Church<br/>";
            break;case "mariavite":
            a += "Konfession: Mariavitismus<br/>";break;case "maronite":
            a += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den r\xF6mischen Papst als Oberhaupt anerkennt.<br/>";break;case "moravian":
            a += "Konfession: Herrnhuter Br\xFCdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Br\xFCder-Unit\xE4t, engl. Moravian Church) ist eine aus der b\xF6hmischen Reformation herkommende \xFCberkonfessionell-christliche Glaubensbewegung.<br/>";
            break;case "nazarene":
            a += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition.<br/>";break;case "nondenominational":
            a += "Konfession: Nondenominational Christianity<br/>";break;case "old_believers":
            a += "Konfession: Altorthodoxe, (h\xE4ufiger Altgl\xE4ubige) ist eine Sammelbezeichnung f\xFCr religi\xF6se Str\xF6mungen und Gruppen innerhalb der russisch-orthodoxen Tradition.<br/>";break;case "polish_catholic":
            a += "Konfession: Polnisch-Katholische Kirche<br/>";
            break;case "salvation_army":
            a += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgepr\xE4gter sozialer T\xE4tigkeit.<br/>";break;case "santo_daime":
            a += "Konfession: Santo Daime, ist einer synkretistischen religi\xF6se Bewegung aus Brasilien.<br/>";break;case "serbian_orthodox":
            a += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen.<br/>";break;case "spiritism":
            a += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec<br/>";
            break;case "united":
            a += "Konfession: United Church of Canada, ist die zweitgr\xF6\xDFte Kirche in Kanada.<br/>";break;case "united_church_of_christ":
            a += "Konfession: United Church of Christ, ist eine Kirche in den USA.<br/>";break;case "united_free_church_of_scotland":
            a += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland.<br/>";break;case "united_methodist":
            a += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition.<br/>";
            break;case "united_reformed":
            a += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Gro\xDFbritannien.<br/>";break;case "uniting":
            a += "Konfession: Uniting Church in Australia (UCA) ist die drittgr\xF6\xDFte christliche Denomination in Australien.<br/>";break;case "church_of_sweden":
            a += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens.<br/>";break;case "mission_covenant_church_of_sweden":
            a += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden.<br/>";break;case "alternative":
            a += "Konfession: alternative<br/>";break;case "ashkenazi":
            a += "Konfession: ashkenazi<br/>";break;case "buchari":
            a += "Konfession: buchari<br/>";break;case "conservative":
            a += "Konfession: conservative<br/>";break;case "egalitarian":
            a += "Konfession: egalitarian<br/>";break;case "hasidic":
            a += "Konfession: hasidic<br/>";break;case "humanistic":
            a += "Konfession: humanistic<br/>";break;case "kabbalah":
            a += "Konfession: kabbalah<br/>";break;case "kabbalistic":
            a += "Konfession: kabbalistic<br/>";break;case "karaite":
            a += "Konfession: karaite<br/>";break;case "liberal":
            a += "Konfession: liberal<br/>";break;case "lubavitch":
            a += "Konfession: lubavitch<br/>";break;case "lubavitch_messianic":
            a += "Konfession: lubavitch_messianic<br/>";break;case "mizrachi_baghdadi":
            a += "Konfession: mizrachi_baghdadi<br/>";break;case "mizrachi_chida":
            a += "Konfession: mizrachi_chida<br/>";break;case "mizrachi_jerusalemite":
            a += "Konfession: mizrachi_jerusalemite<br/>";
            break;case "mizrachi_livorno":
            a += "Konfession: mizrachi_livorno<br/>";break;case "mizrachi_moroccan":
            a += "Konfession: mizrachi_moroccan<br/>";break;case "modern_orthodox":
            a += "Konfession: modern_orthodox<br/>";break;case "neo_orthodox":
            a += "Konfession: neo_orthodox<br/>";break;case "nondenominational":
            a += "Konfession: nondenominational<br/>";break;case "orthodox":
            a += "Konfession: orthodox<br/>";break;case "orthodox_ashkenaz":
            a += "Konfession: orthodox_ashkenaz<br/>";break;case "orthodox_sefard":
            a += "Konfession: orthodox_sefard<br/>";
            break;case "progressive":
            a += "Konfession: progressive<br/>";break;case "reconstructionist":
            a += "Konfession: reconstructionist<br/>";break;case "reform":
            a += "Konfession: reform<br/>";break;case "renewal":
            a += "Konfession: renewal<br/>";break;case "samaritan":
            a += "Konfession: samaritan<br/>";break;case "sefardi":
            a += "Konfession: sefardi<br/>";break;case "sefardi_amsterdam":
            a += "Konfession: sefardi_amsterdam<br/>";break;case "sefardi_london":
            a += "Konfession: sefardi_london<br/>";break;case "traditional":
            a += "Konfession: traditional<br/>";
            break;case "ultra_orthodox":
            a += "Konfession: ultra_orthodox<br/>";break;case "unaffiliated":
            a += "Konfession: unaffiliated<br/>";break;case "yemenite":
            a += "Konfession: yemenite<br/>";break;case "yemenite_baladi":
            a += "Konfession: yemenite_baladi<br/>";break;case "yemenite_shami":
            a += "Konfession: yemenite_shami<br/>";break;case "ahmadiya":
            a += "Konfession: ahmadiya<br/>";break;case "alaouite":
            a += "Konfession: alaouite<br/>";break;case "druze":
            a += "Konfession: druze<br/>";break;case "ibadi":
            a += "Konfession: ibadi<br/>";
            break;case "ismaili":
            a += "Konfession: ismaili<br/>";break;case "shia":
            a += "Konfession: shia<br/>";break;case "sunni":
            a += "Konfession: sunni<br/>";break;case "nichiren":
            a += "Konfession: nichiren<br/>";break;case "jodo_shinshu":
            a += "Konfession: jodo_shinshu<br/>";break;case "jodo_shu":
            a += "Konfession: jodo_shu<br/>";break;case "vajrayana":
            a += "Konfession: vajrayana<br/>";break;case "shingon_shu":
            a += "Konfession: shingon_shu<br/>";break;case "zen":
            a += "Konfession: zen<br/>";break;case "thai_mahanikaya":
            a += "Konfession: thai_mahanikaya<br/>";
            break;case "thai_thammayut":
            a += "Konfession: thai_thammayut<br/>";break;case "asatru":
            a += "Konfession: asatru<br/>";break;case "celtic":
            a += "Konfession: celtic<br/>";break;case "greco-roman":
            a += "Konfession: greco-roman<br/>";break;case "wicca":
            a += "Konfession: wicca<br/>";break;case "irani":
            a += "Konfession: irani<br/>";break;case "parsi":
            a += "Konfession: parsi<br/>";break;default:
            a += "unbekannt<br/>";}if (b.community) switch (b.community) {case "AA":
            a += "Ordensgemeinschaft (AA): Augustinians of the Assumption <br/>";
            break;case "BSCM":
            a += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";break;case "CBMV":
            a += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";break;case "CO":
            a += "Ordensgemeinschaft (CO): Oratorians<br/>";break;case "CMC":
            a += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix<br/>";break;case "CRSP":
            a += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";break;case "CSJ":
            a += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph<br/>";
            break;case "CSSP":
            a += "Ordensgemeinschaft (CSSP): Congr\xE9gation du Saint-Esprit<br/>";break;case "CSSR":
            a += "Ordensgemeinschaft (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";break;case "FCJM":
            a += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";break;case "FMGB":
            a += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";break;case "FMH":
            a += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
            break;case "FMM":
            a += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie<br/>";break;case "FSC":
            a += "Ordensgemeinschaft (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";break;case "MCCI":
            a += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";break;case "MSFS":
            a += "Ordensgemeinschaft (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";break;case "OCart":
            a += "Ordensgemeinschaft (OCart): Order of the Carthusians<br/>";break;case "OCC":
            a += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
            break;case "OCD":
            a += "Ordensgemeinschaft (OCD): Ordre des Carmes d\xE9chaux<br/>";break;case "OCSO":
            a += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)<br/>";break;case "OFM":
            a += "Ordensgemeinschaft (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";break;case "OFMCap":
            a += "Ordensgemeinschaft (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";break;case "OFMConv":
            a += "Ordensgemeinschaft (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";break;case "OFS":
            a += "Ordensgemeinschaft (OFS): Franciscans secular Third Order<br/>";break;case "OMI":
            a += "Ordensgemeinschaft (OMI): Oblats de Marie<br/>";break;case "OP":
            a += "Ordensgemeinschaft (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";break;case "OPraem":
            a += "Ordensgemeinschaft (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";break;case "OSB":
            a += "Ordensgemeinschaft (OSB): Order of Saint Benedict<br/>";break;case "OSC":
            a += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
            break;case "OSSS":
            a += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte<br/>";break;case "OVM":
            a += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";break;case "PSDP":
            a += "Ordensgemeinschaft (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";break;case "PFJ":
            a += "Ordensgemeinschaft (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";break;case "SDB":
            a += "Ordensgemeinschaft (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";break;case "SJ":
            a += "Ordensgemeinschaft (SJ): Compagnie de J\xE9sus<br/>";break;case "SOC":
            a += "Ordensgemeinschaft (SOC): Order of Cistercians<br/>";break;case "SSCC":
            a += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";break;case "SSF":
            a += "Ordensgemeinschaft (SSF): Society of St Francis<br/>";break;case "SSJE":
            a += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist<br/>";break;case "SSpS":
            a += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern<br/>";break;case "TOR":
            a += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco<br/>";break;default:
            a += "unbekannt<br/>";}return a;
}var fnTestInfoPopup = function fnTestInfoPopup(b) {
    b = b.getProperties();var a = "",
        c;for (c in b) {
        a = a + c + "=" + b[c] + "<br/>";
    }return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-popup-info-en.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-popup-info-en.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.isMobile = isMobile;
exports.fnHeader = fnHeader;
exports.fnFooter = fnFooter;
exports.fnGetTranslate_Type = fnGetTranslate_Type;
exports.fnArztInfo = fnArztInfo;
exports.fnKraftwerkInfo = fnKraftwerkInfo;
exports.fnWertstoffinfo = fnWertstoffinfo;
exports.fnAdditionalBuildingInfos = fnAdditionalBuildingInfos;
exports.fnSicherheitAdditional = fnSicherheitAdditional;
exports.fnWreckInfo = fnWreckInfo;
exports.fnKlosterAdditional = fnKlosterAdditional;
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
    return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
    );
}function translate(b) {
    var a = trim(b);return "yes" == a || "Yes" == a ? "yes" : "no" == a || "No" == a ? "no" : "limited" == a ? "limited" : "designated" == a ? "designated" : "wood" == a ? "wood" : "metal" == a ? "metal" : "concrete" == a ? "concrete" : "plastic" == a ? "plastic" : "stone" == a ? "stone" : "steel" == a ? "steel" : "brick" == a ? "brick" : "reinforced_concrete" == a ? "reinforced_concrete" : "masonry" == a ? "masonry" : b;
}
var fnStandardInfoPopup = exports.fnStandardInfoPopup = function fnStandardInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e;if ("function" === typeof a) {
        var f = a.call(b)[0].getImage();if (f) try {
            e = f.getSrc();
        } catch (g) {
            e = "";
        }
    } else {
        f = a.getImage();try {
            e = f.getSrc();
        } catch (h) {
            e = "";
        }
    }d += fnHeader(c, e);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = exports.fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e = !1,
        f;f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;"hotel" == c.tourism && (e = !0);"guest_house" == c.tourism && (e = !0);"chalet" == c.tourism && (e = !0);"hostel" == c.tourism && (e = !0);"alpine_hut" == c.tourism && (e = !0);if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;if ("museum" == c.tourism || "museum" == c.amenity) e = !0;"cinema" == c.amenity && (e = !0);"theatre" == c.amenity && (e = !0);if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;"playground" == c.leisure && (e = !0);c.aerialway && (e = !0);if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;"station" == c.railway && (e = !0);"swimming" == c.sport && (e = !0);"swimming_pool" == c.leisure && (e = !0);"swimming_pool" == c.amenity && (e = !0);"waterpark" == c.leisure && (e = !0);c.water_park && (e = !0);"sports_centre" == c.leisure && (e = !0);switch (e) {case !1:
            d += fnHeader(c, f);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());break;case !0:
            d += fnHeader(c, f);}return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
    var c = "",
        d = "32px";a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
        if (b.name) var e = b.name;b["piste:name"] && (e = b["piste:name"]);b["xmas:name"] && (e = b["xmas:name"]);b["xmas:location"] && (e = b["xmas:location"]);c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
    } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');c += fnGetTranslate_Type(b);return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
    var c = "",
        d = !1;b["addr:housename"] && (c += "housename: " + b["addr:housename"] + "<br/>", d = !0);b["addr:floor"] ? (c += "floor: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "level: " + b["addr:level"] + "<br/>", d = !0);b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);b["addr:postcode"] && (c += b["addr:postcode"] + " ");b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
        var e = b.sqkm.length % 3,
            f = 0 < e ? b.sqkm.substring(0, e) : "";for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
            f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
        }c += "area: " + f + " Km\xB2<br/>";
    } else c += "area " + b.sqkm + "<br/>";b["contact:phone"] && (c = isMobile() ? c + ('phone: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('phone: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);b.phone && (c = isMobile() ? c + ('phone: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('phone: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);b["contact:fax"] ? (c += "fax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "fax: " + b.fax + "<br/>", d = !0);b["contact:email"] ? (c += 'email: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'email: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);d && (c += "<br/>");if (b.opening_hours) {
        d = b.opening_hours;for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
    }if (b["xmas:opening_hours"]) {
        d = b["xmas:opening_hours"];for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
    }b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');
    b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Wikipedia link</a><br/>');b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Wikimedia link</a><br/>');b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'webcam: <a href="' + d + '" target="_blank">webcam link</a><br/>');b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');d = "";b.internet_access && (d += "internet access: " + translate(b.internet_access) + "<br/>");b["internet_access:fee"] && (d += "fee: " + translate(b["internet_access:fee"]) + "<br/>");b["wifi_access:operator"] && (d += "wifi operator: " + b["wifi_access:operator"] + "<br/>");b["wifi_access:technology"] && (d += "wifi technology: " + b["wifi_access:technology"] + "<br/>");b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");"" != d && (c += 'internet access available<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");b.wheelchair && (c += "wheelchair: " + translate(b.wheelchair) + "<br/>");b["wheelchair:description"] && (c += "description: " + b["wheelchair:description"] + "<br/>");b["wheelchair:entrance_width"] && (c += "entrance width (cm): " + b["wheelchair:entrance_width"] + "<br/>");b["wheelchair:step_height"] && (c += "step height (cm): " + b["wheelchair:step_height"] + "<br/>");b["wheelchair:rooms"] && (c += "rooms: " + b["wheelchair:rooms"] + "<br/>");
    b["wheelchair:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");b["cent:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");b["ramp:wheelchair"] && (c += "ramp: " + b["ramp:wheelchair"] + "<br/>");b["capacity:disabled"] && (c += "capacity parking: " + translate(b["capacity:disabled"]) + "<br/>");b["toilets:wheelchair"] && (c += "toilets: " + translate(b["toilets:wheelchair"]) + "<br/>");b.centralkey && (c += "centralkey: " + b.centralkey + "<br/>");b.note && (c += b.note + "<br/>");b.description && (c += b.description + "<br/>");
    b.operator && (c += "operator: " + b.operator + "<br/>");b.ref && (c += "reference: " + b.ref + "<br/>");"yes" == b.lit && (c += "This object is illuimanted.<br/>");b.shop && (d = "", b.brand && (d += "brand: " + b.brand + "<br/>"), b.sells && (d += "sells: " + b.sells + "<br/>"), b.origin && (d += "source market: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "distributor: yes<br/>"), "" != d && (c += 'further particulars: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">OpenStreetMap link</a><br/>'));return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
    var a = "";if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "doctor<br/>";if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "hospital with emergency facilities<br/>" : a + "hospital<br/>";"dentist" == b.amenity && (a += "dentist<br/>");if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "pharmacy<br/>";if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "physiotherapist<br/>";
    if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "occupational_therapist<br/>";if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "psychotherapist<br/>";"alternative" == b.healthcare && (a += "alternative<br/>");"midwife" == b.healthcare && (a += "midwife<br/>");if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "speech_therapist<br/>";"yes" == b["health_speciality:music_therapy"] && (a += "music_therapy<br/>");"veterinary" == b.amenity && (a += "veterinary<br/>");"fire_station" == b.amenity && (a += "fire station<br/>");"fire_extinguisher" == b.emergency && (a += "fire extinguisher<br/>");"aed" == b.emergency && (a += "aed<br/>");"defibrillator" == b.emergency && (a += "defibrillator<br/>");"phone" == b.emergency && (a += "call box<br/>");"police" == b.amenity && (a += "police<br/>");"ambulance_station" == b.emergency && (a += "ambulance station<br/>");"technical" == b.emergency_service && (a += "technical<br/>");"water" == b.emergency_service && (a += "water<br/>");"baywatch" == b.waterway && (a += "baywatch<br/>");"air" == b.emergency_service && (a += "rescue helicopter<br/>");"emergency_access_point" == b.highway && (a += "emergency access point<br/>");if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "lifeboat station<br/>";"life_ring" == b.emergency && (a += "life ring<br/>");"siren" == b.emergency && (a += "siren<br/>");"life_ring" == b.amenity && (a += "life ring<br/>");"rescue_station" == b.amenity && (a += "rescue station<br/>");"fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "underground hydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "pillar hydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "wall hydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "suction point<br/>"));"suction_point" == b.emergency && (a += "suction point<br/>");"fire_water_pond" == b.emergency && (a += "fire protection pond<br/>");"mountain" == b.emergency_service && (a += "mountain rescue service<br/>");"water_tank" == b.emergency && (a += "fire water tank<br/>");"container" == b.recycling_type && (a += "Recycling container<br/>");"recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "suction station<br/>" : "recycling" == b.amenity && (a += " buyback centre<br/>");"yes" == b["diet:pescetarian"] ? a += "pescetarian available<br/>" : "only" == b["diet:pescetarian"] && (a += "just pescetarian<br/>");"yes" == b["diet:vegetarian"] ? a += "vegetarian vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "just vegetarian<br/>");"yes" == b["diet:lacto_vegetarian"] ? a += "lacto_vegetarian available<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "just lacto vegetarian<br/>");"yes" == b["diet:ovo_vegetarian"] ? a += "ovo vegetarian available<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "just ovo_vegetarian<br/>");"yes" == b["diet:vegan"] ? a += "vegan available<br/>" : "only" == b["diet:vegan"] && (a += "just vegan<br/>");"yes" == b["diet:fruitarian"] ? a += "fruitarian available<br/>" : "only" == b["diet:fruitarian"] && (a += "hust fruitarian<br/>");"yes" == b["diet:raw"] ? a += "raw availaibe<br/>" : "only" == b["diet:raw"] && (a += "just raw<br/>");
    "yes" == b["diet:gluten_free"] ? a += "gluten free available<br/>" : "only" == b["diet:gluten_free"] && (a += "just gluten free<br/>");"yes" == b["diet:dairy_free"] ? a += "dairy free available<br/>" : "only" == b["diet:dairy_free"] && (a += "just dairy free<br/>");"yes" == b["diet:lactose_free"] ? a += "lactose free available<br/>" : "only" == b["diet:lactose_free"] && (a += "just lactose free<br/>");"yes" == b["diet:halal"] ? a += "halal available<br/>" : "only" == b["diet:halal"] && (a += "just halal<br/>");"yes" == b["diet:kosher"] ? a += "kosher available<br/>" : "only" == b["diet:kosher"] && (a += "just kosher<br/>");"pub" == b.amenity && (a += "pub<br/>");"bar" == b.amenity && (a += "bar<br/>");"yes" == b.frozen_yogurt && (a += "frozen yogurt<br/>");"yes" == b.slush_ice && (a += "slush ice<br/>");"yes" == b.cake && (a += "cake<br/>");"yes" == b.coffee && (a += "coffee<br/>");"yes" == b.drinks && (a += "drinks<br/>");"biergarten" == b.amenity && (a += "biergarten<br/>");"restaurant" == b.amenity && (a += "restaurant<br/>");"fast_food" == b.amenity && (a += "fast food<br/>");if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "cafe<br/>";if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "ice cream<br/>";"alpine_hut" == b.tourism && (a += "alpine hut<br/>");"aquarium" == b.tourism && (a += "aquarium<br/>");"apartment" == b.tourism && (a += "apartment<br/>");"attraction" == b.tourism && (a += "attraction<br/>");"artwork" == b.tourism && (a += "artwork<br/>");"camp_site" == b.tourism && (a += "camp site<br/>");"caravan_site" == b.tourism && (a += "caravan site<br/>");"chalet" == b.tourism && (a += "chalet<br/>");"gallery" == b.tourism && (a += "gallery<br/>");"guest_house" == b.tourism && (a += "guest house<br/>");"hostel" == b.tourism && (a += "hostel<br/>");"hotel" == b.tourism && (a += "hotel<br/>");"motel" == b.tourism && (a += "motel<br/>");"museum" == b.tourism && (a += "museum<br/>");"picnic_site" == b.tourism && (a += "picnic site<br/>");"theme_park" == b.tourism && (a += "theme park<br/>");"viewpoint" == b.tourism && (a += "viewpoint<br/>");"wilderness_hut" == b.tourism && (a += "wilderness_hut<br/>");"wine_cellar" == b.tourism && (a += "wine cellar<br/>");"zoo" == b.tourism && (a += "zoo<br/>", "enclosure" == b.zoo && (a += "enclosure<br/>"), "petting_zoo" == b.zoo && (a += "petting zoo<br/>"), "falconry" == b.zoo && (a += "falconry<br/>"));"trail_riding_station" == b.tourism && (a += "trail riding station<br/>");"fishing" == b.club && (a += "fishing club<br/>");"sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");"amateur_radio" == b.club && (a += "amateur radio club<br/>");"art" == b.club && (a += "art club<br/>");"astronomy" == b.club && (a += "astronomy club<br/>");"automobile" == b.club && (a += "automobile club<br/>");
    "board_games" == b.club && (a += "board games club<br/>");"card_games" == b.club && (a += "card games club<br/>");"charity" == b.club && (a += "charity club<br/>");"chess" == b.club && (a += "chess club<br/>");"cinema" == b.club && (a += "cinema club<br/>");"cooking" == b.club && (a += "cooking club<br/>");"culture" == b.club && (a += "culture club<br/>");"doityourself" == b.club && (a += "doityourself club<br/>");"equestrian" == b.club && (a += "equestrian club<br/>");"ethnic" == b.club && (a += "ethnic club<br/>");"fan" == b.club && (a += "fan club<br/>");"freemasonry" == b.club && (a += "freemasonry club<br/>");"game" == b.club && (a += "game club<br/>");"history" == b.club && (a += "history club<br/>");"hunting" == b.club && (a += "hunting club<br/>");"linux" == b.club && (a += "linux club<br/>");"motorcycle" == b.club && (a += "motorcycle club<br/>");"music" == b.club && (a += "music club<br/>");"nature" == b.club && (a += "nature club<br/>");"nudism" == b.club && (a += "nudism club<br/>");"photography" == b.club && (a += "photography club<br/>");"politics" == b.club && (a += "politics club<br/>");"religion" == b.club && (a += "religion club<br/>");
    "scout" == b.club && (a += "scout club<br/>");"smoke" == b.club && (a += "smoke club<br/>");"sport" == b.club && (a += "sport club<br/>");"theatre" == b.club && (a += "theatre club<br/>");"veterans" == b.club && (a += "veterans club<br/>");"amusement_arcade" == b.leisure && (a += "penny arcade / gambling hall<br/>");"beach_resort" == b.leisure && (a += "beach resort<br/>");"bird_hide" == b.leisure && (a += "bird hide<br/>");"common" == b.leisure && (a += "common<br/>");"club" == b.leisure && (a += "club<br/>");"dance" == b.leisure && (a += "dance<br/>");"dog_park" == b.leisure && (a += "dog_park<br/>");"firepit" == b.leisure && (a += "firepit<br/>");"fishing" == b.leisure && (a += "fishing<br/>");"garden" == b.leisure && (a += "garden<br/>");"golf_course" == b.leisure && (a += "golf course<br/>");"hackerspace" == b.leisure && (a += "hackerspace<br/>");"horse_riding" == b.leisure && (a += "horse riding<br/>");"ice_rink" == b.leisure && (a += "ice rink<br/>");"nature_reserve" == b.leisure && (a += "nature reserve<br/>");"park" == b.leisure && (a += "park<br/>");"miniature_golf" == b.leisure && (a += "miniature golf<br/>");"pitch" == b.leisure && (a += "pitch<br/>");"pitch" == b.leisure && "yes" == b.building && (a += "gym<br/>");"playground" == b.leisure && "yes" == b.building ? a += "playground<br/>" : "playground" == b.leisure && (a += "playground<br/>");"social_club" == b.leisure && (a += "social club<br/>");"spa" == b.leisure && (a += "spa<br/>");"sports_centre" == b.leisure && (a += "sports centre<br/>");"climbing_adventure" == b.sport && (a += "climbing adventure<br/>");"stadium" == b.leisure && (a += "stadium<br/>");"swimming_pool" == b.leisure && (a += "swimming pool<br/>");"track" == b.leisure && (a += "track<br/>");"water_park" == b.leisure && (a += "water park<br/>");"wildlife_hide" == b.leisure && (a += "wildlife hide<br/>");"adult_gaming_centre" == b.leisure && (a += "adult gaming_centre<br/>");"bowling_alley" == b.leisure && "10pin" == b.sport && (a += "10pin bowling_alley<br/>");"bowling_alley" == b.leisure && "9pin" == b.sport && (a += "9pin bowling_alley<br/>");if ("karting" == b.sport || "motor" == b.sport) a += "karting<br/>";if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";if (b["piste:type"]) switch (b["piste:type"]) {case "skitour":
            a += "skitour<br/>";break;case "downhill":
            a += "downhill<br/>";break;case "sled":
            a += "sled<br/>";break;case "nordic":
            a += "nordic<br/>";break;case "hike":
            a += "hike<br/>";break;case "snow_park":
            a += "snow park<br/>";}if (b.sport) switch (b.sport) {case "surfing":
            a += "surfing<br/>";break;case "kitesurfing":
            a += "kitesurfing<br/>";break;case "water_ski":
            a += "water ski<br/>";}if (b.aerialway) switch (b.aerialway) {case "cable_bar":
            a += "cable bar<br/>";break;case "gondola":
            a += "gondola<br/>";break;case "chair_lift":
            a += "chair lift<br/>";
            break;case "mixed_lift":
            a += "mixed lift<br/>";break;case "drag_lift":
            a += "drag lift<br/>";break;case "t-bar":
            a += "t-bar<br/>";break;case "t-bar":
            a += "t-bar<br/>";break;case "platter":
            a += "platter<br/>";break;case "rope_tow":
            a += "rope tow<br/>";break;case "magic_carpet":
            a += "magic carpet<br/>";break;default:
            a += "unknown";}"mosque" == b.building && (a += "mosque<br/>");"synagogue" == b.building && (a += "synagogue<br/>");"temple" == b.building && (a += "temple<br/>");"apartments" == b.building && (a += "apartments<br/>");"farm" == b.building && (a += "farm<br/>");"hotel" == b.building && (a += "hotel<br/>");"house" == b.building && (a += "house<br/>");"detached" == b.building && (a += "detached<br/>");"residential" == b.building && (a += "residential<br/>");if ("domitory" == b.building || "residential plus" == b.building) a += "domitory<br/>";"terrace" == b.building && (a += "terrace<br/>");"houseboat" == b.building && (a += "houseboat<br/>");"bungalow" == b.building && (a += "bungalow<br/>");"static_caravan" == b.building && (a += "static caravan<br/>");"commercial" == b.building && (a += "commercial<br/>");
    "retail" == b.building && (a += "retail<br/>");"warehouse" == b.building && (a += "warehouse<br/>");"bakehouse" == b.building && (a += "bakehouse<br/>");"shrine" == b.building && (a += "shrine<br/>");"civic" == b.building && (a += "civic<br/>");"stadium" == b.building && (a += "stadium<br/>");"train_station" == b.building && (a += "train station<br/>");"university" == b.building && (a += "university<br/>");"public" == b.building && (a += "public<br/>");"bridge" == b.building && (a += "bridge<br/>");"bunker" == b.building && (a += "bunker<br/>");"cabin" == b.building && (a += "cabin<br/>");"conservatory" == b.building && (a += "conservatory<br/>");"construction" == b.building && (a += "construction<br/>");"garage" == b.building && (a += "garage<br/>");"garages" == b.building && (a += "garages<br/>");"greenhouse" == b.building && (a += "greenhouse<br/>");"hangar" == b.building && (a += "hangar<br/>");"hut" == b.building && (a += "hut<br/>");"pavillion" == b.building && (a += "pavillion<br/>");"roof" == b.building && (a += "roof<br/>");"shed" == b.building && (a += "shed<br/>");"transformer_tower" == b.building && (a += "transformer tower<br/>");
    "service" == b.building && (a += "service<br/>");"kiosk" == b.building && (a += "kiosk<br/>");"carport" == b.building && (a += "carport<br/>");"ruins" == b.building && (a += "ruins<br/>");"gambling" == b.amenity && (a += "penny arcade<br/>");"library" == b.amenity && (a += "library<br/>");"fountain" == b.amenity && (a += "fountain<br/>");"attraction" == b.amenity && (a += "attraction<br/>");if ("social_centre" == b.amenity || "club" == b.amenity) a += "social centre<br/>";"townhall" == b.amenity && (a += "townhall<br/>");"bench" == b.amenity && (a += "bench<br/>");
    if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "grave yard<br/>";"post_box" == b.amenity && (a += "post box<br/>");"post_office" == b.amenity && (a += "post office<br/>");"telephone" == b.amenity && (a += "telephone<br/>");"atm" == b.amenity && (a += "atm<br/>");"bank" == b.amenity && (a += "bank<br/>");"toilets" == b.amenity && "yes" == b.diaper ? a += "toilets with diaper changing table<br/>" : "toilets" == b.amenity && (a += "toilets<br/>");"school" == b.amenity && "1" == b["isced:level"] ? a += "primary school<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "secondary school<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "secondary schools<br/>" : "school" == b.amenity && (a += "school<br/>");"kindergarten" == b.amenity && (a += "kindergarten<br/>");"internet_cafe" == b.amenity && (a += "internet cafe<br/>");"daycare" == b.amenity && (a += "daycare<br/>");"childcare" == b.amenity && (a += "childcare<br/>");"university" == b.amenity && (a += "university<br/>");"college" == b.amenity && (a += "college<br/>");"shelter" == b.amenity && (a += "shelter<br/>");"bbq" == b.amenity && (a += "bbq<br/>");"nightclub" == b.amenity && (a += "nightclub<br/>");"bicycle_parking" == b.amenity && (a += "bicycle parking<br/>");"bicycle_rental" == b.amenity && (a += "bicycle rental<br/>");"boat_sharing" == b.amenity && (a += "boat sharing<br/>");"car_sharing" == b.amenity && (a += "car sharing<br/>");"cinema" == b.amenity && (a += "cinema<br/>");"swimming_pool" == b.amenity && (a += "swimming pool<br/>");if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "embassy<br/>";"embassy" == b.amenity && "consulate" == b.diplomatic && (a += "consulate<br/>");"embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "consulate general<br/>");"embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "honorary consulate<br/>");"embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "permanent mission<br/>");"embassy" == b.amenity && "delegation" == b.diplomatic && (a += "delegation<br/>");"embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "high commission<br/>");"Barfusspfad" == b.amenity && (a += "barefoodpath<br/>");"casino" == b.amenity && (a += "casino<br/>");"spa" == b.amenity && (a += "spa<br/>");"stables" == b.amenity && (a += "stables<br/>");"watering_place" == b.amenity && (a += "watering place<br/>");"yes" == b.watering_place && (a += "watering place<br/>");"water_point" == b.amenity && (a += "water point<br/>");"taxi" == b.amenity && (a += "taxi<br/>");"car_wash" == b.amenity && (a += "car wash<br/>");"brothel" == b.amenity && (a += "brothel<br/>");"stripclub" == b.amenity && (a += "stripclub<br/>");"swingerclub" == b.amenity && (a += "swingerclub<br/>");"planetarium" == b.amenity && (a += "planetarium<br/>");"courthouse" == b.amenity && (a += "court house<br/>");"crematorium" == b.amenity && (a += "crematorium<br/>");if ("crypt" == b.amenity || "crypt" == b.building) a += "crypt<br/>";"hunting_stand" == b.amenity && (a += "hunting stand<br/>");"photo_booth" == b.amenity && (a += "photo booth<br/>");"prison" == b.amenity && (a += "prison<br/>");"ranger_station" == b.amenity && (a += "ranger station<br/>");"register_office" == b.amenity && (a += "register office<br/>");"marketplace" == b.amenity && (a += "marketplace<br/>");"solarium" == b.amenity && (a += "solarium<br/>");"sauna" == b.amenity && (a += "sauna<br/>");"shower" == b.amenity && (a += "shower<br/>");if ("waste_disposal" == b.amenity && (a += "waste disposal<br/>", b.waste)) switch (a += "Typ: ", b.waste) {case "trash":
            a += "General<br/>";break;case "oil":
            a += "Oil<br/>";break;case "drugs":
            a += "Pharmaceutical<br/>";break;case "organic":
            a += "Organic<br/>";break;case "plastic":
            a += "Plastic<br/>";break;case "rubble":
            a += "Rubble<br/>";break;case "cigarettes":
            a += "Cigarettes<br/>";break;default:
            a += "General<br/>";}if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "dog waste station<br/>";if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "scout camp<br/>";"ferry_terminal" == b.amenity && (a += "ferry terminal<br/>");"bureau_de_change" == b.amenity && (a += "bureau de change<br/>");"youth_club" == b.amenity && (a += "youth club<br/>");"festival_grounds" == b.amenity && (a += "festival grounds<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "fireplace<br/>";if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "vending machine admission tickets<br/>";
            break;case "animal_feed":
            a += "vending machine animal feed<br/>";break;case "bicycle_tube":
            a += "vending machine bicycle tube<br/>";break;case "books":
            a += "vending machine books<br/>";break;case "candles":
            a += "vending machine candles<br/>";break;case "cigarettes":
            a += "vending machine cigarettes<br/>";break;case "chemist":
            a += "vending machine chemist<br/>";break;case "condoms":
            a += "vending machine condoms<br/>";break;case "drinks":
            a += "vending machine drinks<br/>";break;case "electronics":
            a += "vending machine electronics<br/>";
            break;case "elongated_coin":
            a += "vending machine elongated_coin<br/>";break;case "excrement_bags":
            a += "vending machine excrement_bags<br/>";break;case "feminine_hygiene":
            a += "vending machine feminine_hygiene<br/>";break;case "first_aid":
            a += "vending machine first_aid<br/>";break;case "fishing_tackle":
            a += "vending machine fishing tackle<br/>";break;case "fishing_bait":
            a += "vending machine fishing bait<br/>";break;case "flowers":
            a += "vending machine flowers<br/>";break;case "food":
            a += "vending machine food<br/>";
            break;case "ice_cubes":
            a += "vending machine ice cubes<br/>";break;case "ice_cream":
            a += "vending machine ice cream<br/>";break;case "ink_cartridges":
            a += "vending machine ink cartridges<br/>";break;case "laundry_detergent":
            a += "vending machine laundry detergent<br/>";break;case "public_transport_tickets":
            a += "vending machine public transport tickets<br/>";break;case "newspaper":
            a += "vending machine newspaper<br/>";break;case "parcel_pickup":
            a += "vending machine parcel pickup<br/>";break;case "parcel_mail_in":
            a += "Packege station<br/>";break;case "parking_tickets":
            a += "vending machine parking tickets<br/>";break;case "photos":
            a += "vending machine photos<br/>";break;case "sex_toys":
            a += "vending machine sex_toys<br/>";break;case "SIM_cards":
            a += "vending machine SIM_cards<br/>";break;case "stamps":
            a += "vending machine stamps<br/>";break;case "sweets":
            a += "vending machine sweets<br/>";break;case "syringes":
            a += "vending machine syringes<br/>";break;case "toll":
            a += "vending machine toll<br/>";break;case "toys":
            a += "vending machine toys<br/>";
            break;case "umbrellas":
            a += "vending machine umbrellas<br/>";break;default:
            a += "vending machine<br/>";} else a += "vending machine<br/>";"arts_centre" == b.amenity && (a += "arts centre<br/>");"artwork" == b.amenity && (a += "artwork<br/>");"museum" == b.amenity && (a += "museum<br/>");"theatre" == b.amenity && (a += "theatre<br/>");"cathedral" == b.building && (a += "cathedral<br/>");"church" == b.building && (a += "church<br/>");"chapel" == b.building && (a += "chapel<br/>");"place_of_worship" == b.amenity && (a += "place of worship<br/>");"village" == b.abandoned && (a += "abandoned village<br/>");"theme_park" == b["abandoned:tourism"] && (a += "abandoned theme park<br/>");"prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "abandoned concentration camp<br/>");"yes" == b.abandoned && "bunker" == b.military && (a += "abandoned bunker<br/>");"yes" == b.abandoned && "barracks" == b.military && (a += "abandoned barracks<br/>");"yes" == b.abandoned && "airfield" == b.military && (a += "abandoned airfield<br/>");"monastery" == b.historic && (a += "historic monastery<br/>");
    "monastery" == b.amenity && (a += "monastery<br/>");"monastery" == b.building && (a += "monastery<br/>");"manor" == b.historic && (a += "historic manor<br/>");"boundary_stone" == b.historic && (a += "historic boundary stone<br/>");"milestone" == b.historic && (a += "historic milestone<br/>");"monument" == b.historic && (a += "monument<br/>");"palace" == b.historic && (a += "historic palace<br/>");"mine" == b.historic && (a += "historic mine<br/>");"ruins" == b.historic && (a += "ruins<br/>");"harbour" == b.historic_usage && (a += "historic harbour<br/>");
    "rune stone" == b.historic && (a += "rune stone<br/>");"battlefield" == b.historic && (a += "historic battlefield<br/>");"blacksmith" == b.historic && (a += "historic blacksmith<br/>");if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "shrine<br/>";"city_gate" == b.historic && (a += "historic city gate<br/>");"wayside_cross" == b.historic && (a += "historic wayside cross<br/>");"monument" == b.amenity && (a += "monument<br/>");"memorial" == b.historic && (a += "memorial<br/>");"optical_telegraph" == b.historic && (a += "historic optical telegraph<br/>");
    if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {case "defensive":
            a += "defensive castle<br/>";break;case "palace":
            a += "palace<br/>";break;case "stately":
            a += "stately castle<br/>";break;case "manor":
            a += "manor<br/>";break;case "fortress":
            a += "fortress<br/>";break;case "castrum":
            a += "castrum<br/>";break;case "shiro":
            a += "shiro<br/>";break;case "kremlin":
            a += "kremlin<br/>";break;default:
            a += "castle<br/>";} else a += "castle<br/>";"archaeological_site" == b.historic && (a += "archaeological site<br/>");if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {case "tumulus":
            a += "tumulus<br/>";break;case "rock-cut":
            a += "rock<br/>";break;case "hypogeum":
            a += "hypogeum<br/>";break;case "war_grave":
            a += "war grave<br/>";break;case "mausoleum":
            a += "mausoleum<br/>";break;case "columbarium":
            a += "columbarium<br/>";break;case "crypt":
            a += "crypt<br/>";break;case "pyramid":
            a += "pyramid<br/>";break;case "sarcophagus":
            a += "sarcophagus<br/>";break;case "vault":
            a += "vault<br/>";break;case "tombstone":
            a += "tombstone<br/>";break;default:
            a += "historic tomb<br/>";} else a += "historic tomb<br/>";"accountant" == b.office && (a += "accountant<br/>");"administrative" == b.office && (a += "administrative<br/>");"architect" == b.office && (a += "architect<br/>");"association" == b.office && (a += "association<br/>");"physician" == b.office && (a += "physician<br/>");"camping" == b.office && (a += "camping office<br/>");"company" == b.office && (a += "company<br/>");"educational_institution" == b.office && (a += "educational institution<br/>");"employment_agency" == b.office && (a += "employment agency<br/>");"estate_agent" == b.office && (a += "estate agent<br/>");"forestry" == b.office && (a += "forestry<br/>");"foundation" == b.office && (a += "foundation<br/>");"government" == b.office && (a += "government<br/>");"guide" == b.office && (a += "guide office<br/>");"insurance" == b.office && (a += "insurance<br/>");"it" == b.office && (a += "it office<br/>");"lawyer" == b.office && (a += "lawyer<br/>");"newspaper" == b.office && (a += "newspaper<br/>");"ngo" == b.office && (a += "ngo office<br/>");"notary" == b.office && (a += "notary<br/>");"political_party" == b.office && (a += "political party<br/>");
    "quango" == b.office && (a += "quango office<br/>");"realtor" == b.office && (a += "realtor<br/>");"real_estate_agent" == b.office && (a += "real estate agent<br/>");"register" == b.office && (a += "register<br/>");"religion" == b.office && (a += "religious office<br/>");"research" == b.office && (a += "research office<br/>");"tax" == b.office && (a += "tax office<br/>");"telecommunication" == b.office && (a += "telecommunication office<br/>");"travel_agent" == b.office && (a += "travel agent<br/>");"water_utility" == b.office && (a += "water utility office<br/>");
    "therapist" == b.office && (a += "therapist<br/>");"city" == b.place && (a += "city<br/>");"town" == b.place && (a += "town<br/>");"village" == b.place && (a += "village<br/>");"continent" == b.place && (a += "continent<br/>");"ocean" == b.place && (a += "ocean</br>");"track" == b.highway && (a += "track<br/>");"raceway" == b.highway && (a += "raceway<br/>");"designated" == b.bicycle && (a += "cycle path<br/>");"path" == b.highway && (a += "food path<br/>");"parking" == b.amenity && (a += "parking<br/>");"services" == b.highway && (a += "services<br/>");"rest_area" == b.highway && (a += "rest area<br/>");"turning_circle" == b.highway && (a += "turning circle<br/>");"service" == b.highway && (a += "service road<br/>");"motorway" == b.highway && (a += "motorway<br/>");"motorway_junction" == b.highway && (a += "motorway junction<br/>");"bridleway" == b.highway && (a += "bridleway<br/>");"yes" == b.oneway && (a += "oneway<br/>");"yes" == b.park_ride && (a += "park and ride<br/>");"unknown" == b.park_ride && (a += "park and ride<br/>");"bus" == b.park_ride && (a += "park and ride<br/>");"tram" == b.park_ride && (a += "park and ride<br/>");
    "bus_stop" == b.highway && (a += "bus stop<br/>");"pedestrian" == b.highway && (a += "pedestrian<br/>");"street_lamp" == b.highway && (a += "street lamp<br/>");"traffic_signals" == b.highway && (a += "traffic signals<br/>");"traffic_signals" == b.crossing && (a += "traffic signals<br/>");"speed_camera" == b.highway && (a += "speed camera<br/>");"yes" == b.traffic_calming && (ret += "traffic calming</br>");"bump" == b.traffic_calming && (a += "bump</br>");"chicane" == b.traffic_calming && (a += "chicane</br>");"choker" == b.traffic_calming && (a += "choker</br>");
    "cushion" == b.traffic_calming && (a += "cushion</br>");"hump" == b.traffic_calming && (a += "hump</br>");"island" == b.traffic_calming && (a += "island</br>");"rumble_strip" == b.traffic_calming && (a += "rumble_strip</br>");"table" == b.traffic_calming && (a += "table</br>");"buoy_cardinal" == b["seamark:type"] && (a += "buoy cardinal<br/>");"buoy_lateral" == b["seamark:type"] && (a += "buoy lateral<br/>");"buoy_isolated_danger" == b["seamark:type"] && (a += "buoy isolated_danger<br/>");"perch" == b["seamark:beacon_lateral:shape"] && (a += "perch<br/>");
    "fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "fuel station<br/>" : "fuel" == b.amenity && (a += "fuel<br/>");if ("charging_station" == b.amenity) {
        var a = a + "charging station<br/>",
            c = b.voltage;if (b.car) {
            switch (b.car) {case "yes":
                    a += "Car: yes";break;case "no":
                    a += "Car: No";break;default:
                    a += "Cars: unkown";}a += "<br/>";
        } else a += "Cars: unkown<br/>";if (b.bicycle) {
            switch (b.bicycle) {case "yes":
                    a += "E-Bike: yes";break;case "no":
                    a += "E-Bike: no";break;default:
                    a += "E-Bike: unkown";}a += "<br/>";
        } else a += "E-Bike: unkown<br/>";b["socket:schuko"] && (a += "Schuko socket: " + b["socket:schuko"] + "<br/>");b["socket:cee_blue"] && (a += "Cee blue socket " + b["socket:cee_blue"] + "<br/>");b["socket:cee_red_16a"] && (a += "Cee red 16a socket " + b["socket:cee_red_16a"] + "<br/>");b["socket:cee_red_32a"] && (a += "Cee red 32a socket " + b["socket:cee_red_32a"] + "<br/>");b["socket:cee_red_64a"] && (a += "Cee red 64a socket " + b["socket:cee_red_64a"] + "<br/>");b["socket:cee_red_125a"] && (a += "Cee red 125a socket " + b["socket:cee_red_125a"] + "<br/>");
        b["socket:nema_5_15"] && (a += "Nema 5 15 socket " + b["socket:nema_5_15"] + "<br/>");b["socket:nema_5_20"] && (a += "Nema 5 20 socket " + b["socket:nema_5_20"] + "<br/>");b["socket:nema_14_30"] && (a += "Nema 14 30 socket " + b["socket:nema_14_30"] + "<br/>");b["socket:nema_14_50"] && (a += "Nema 14 50 socket " + b["socket:nema_14_50"] + "<br/>");b["socket:bs1363"] && (a += "Bs1363 socket " + b["socket:bs1363"] + "<br/>");b["socket:type1"] && (a += "Type 1 socket " + b["socket:type1"] + "<br/>");b["socket:type1_combo"] && (a += "Type 1 combo socket " + b["socket:schuko"] + "<br/>");b["socket:type2"] && (a += "Type 2 socket " + b["socket:type2"] + "<br/>");b["socket:type2_combo"] && (a += "Type 2 combo socket " + b["socket:type2_combo"] + "<br/>");b["socket:type3"] && (a += "Type 3 socket " + b["socket:type3"] + "<br/>");b["socket:chademo"] && (a += "Chademo socket " + b["socket:chademo"] + "<br/>");b["socket:magne_charge"] && (a += "Magne charge socket " + b["socket:magne_charge"] + "<br/>");b["socket:tesla_standard"] && (a += "Tesla standard socket " + b["socket:tesla_standard"] + "<br/>");b["socket:tesla_supercharge"] && (a += "Tesla supercharge: " + b["socket:tesla_supercharge"] + "<br/>");b["socket:tesla_roadster"] && (a += "Tesla_roadster socket " + b["socket:tesla_roadster"] + "<br/>");a += "<br/>";b.voltage && (a += "Volt: " + c + "<br/>");
    }"yes" == b.tunnel && (a += "tunnel<br/>");if (b.bridge) switch (a += "bridge: ", b.bridge) {case "swing":
            a += "swing";break;case "aqueduct":
            a += "aqueduct";break;case "bascule":
            a += "flap bridge";break;case "boardwalk":
            a += "boardwalk";break;case "cantilever":
            a += "cantilever";break;case "covered":
            a += "covered";break;case "drawbridge":
            a += "drawbridge";break;case "humpback":
            a += "humpback";break;case "lift":
            a += "lift";break;case "low_water_crossing":
            a += "low water crossing";break;case "moveable":
            a += "moveable";break;case "pontoon":
            a += "pontoon";break;case "suspension":
            a += "suspension";break;case "trestle":
            a += "trestle";break;case "viaduct":
            a += "viaduct";}if (b["bridge:movable"]) switch (b["bridge:movable"]) {case "swing":
            a += "swing";break;case "bascule":
            a += "bascule";break;case "drawbridge":
            a += "drawbridge";break;case "lift":
            a += "lift";break;case "submersible":
            a += "submersible";break;case "transporter":
            a += "transporter";break;case "retractable":
            a += "retractable";}if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "nursing home / retirement home<br/>";"social_facility" == b.amenity && (a += "social facility<br/>");if (b.social_facility) {
        "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior group home<br/>");"assisted_living" == b.social_facility && (a += "assisted living<br/>");"outreach" == b.social_facility && (a += "outreach<br/>");"workshop" == b.social_facility && (a += "workshop<br/>");if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "ambulatory care<br/>";"shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior shelter<br/>");"shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "abused shelter<br/>");"food_bank" == b.social_facility && (a += "food bank<br/>");"hospice" == b.social_facility && (a += "hospice<br/>");
    }b.brewery && (a += "brand of beer: " + b.brewery + "<br/>");"alcohol" == b.shop && (a += "alcohol shop<br/>");"bakery" == b.shop && (a += "bakery shop<br/>");"beverages" == b.shop && (a += "beverages shop<br/>");"butcher" == b.shop && (a += "butcher shop<br/>");"cheese" == b.shop && (a += "cheese shop<br/>");"chocolate" == b.shop && (a += "chocolate shop<br/>");"coffee" == b.shop && (a += "coffee shop<br/>");"confectionery" == b.shop && (a += "confectionery shop<br/>");"convenience" == b.shop && (a += "convenience shop<br/>");"deli" == b.shop && (a += "deli shop<br/>");"dairy" == b.shop && (a += "dairy shop<br/>");"farm" == b.shop && (a += "farm shop<br/>");
    "greengrocer" == b.shop && (a += "greengrocer shop<br/>");"grocery" == b.shop && (a += "grocery shop<br/>");"organic" == b.shop && (a += "organic shop<br/>");"pasta" == b.shop && (a += "pasta shop<br/>");"seafood" == b.shop && (a += "seafood shop<br/>");"tea" == b.shop && (a += "tea shop<br/>");"wine" == b.shop && (a += "wine shop<br/>");"department_store" == b.shop && (a += "department store<br/>");"general" == b.shop && (a += "general shop<br/>");"kiosk" == b.shop && (a += "kiosk<br/>");"mall" == b.shop && (a += "mall<br/>");"supermarket" == b.shop && (a += "supermarket<br/>");
    "baby_goods" == b.shop && (a += "baby goods shop<br/>");"bag" == b.shop && (a += "bag shop<br/>");"boutique" == b.shop && (a += "boutique<br/>");"clothes" == b.shop && (a += "clothes shop<br/>");"fabric" == b.shop && (a += "fabric shop<br/>");"fashion" == b.shop && (a += "fashion shop<br/>");"jewelry" == b.shop && (a += "jewelry shop<br/>");"leather" == b.shop && (a += "leather shop<br/>");"shoes" == b.shop && (a += "shoes shop<br/>");"variety_store" == b.shop && (a += "variety store<br/>");"chemist" == b.shop && (a += "chemist<br/>");"cosmetics" == b.shop && (a += "cosmetics shop<br/>");
    "drugstore" == b.shop && (a += "drugstore<br/>");"perfumery" == b.shop && (a += "perfumery<br/>");"erotic" == b.shop && (a += "erotic shop<br/>");"hairdresser" == b.shop && (a += "hairdresser<br/>");"hearing_aids" == b.shop && (a += "hearing aids<br/>");"herbalist" == b.shop && (a += "herbalist<br/>");"massage" == b.shop && (a += "massage<br/>");"medical_supply" == b.shop && (a += "medical supply shop<br/>");"optician" == b.shop && (a += "optician<br/>");"tattoo" == b.shop && (a += "tattoo<br/>");"bathroom_furnishing" == b.shop && (a += "bathroom furnishing<br/>");
    "doityourself" == b.shop && (a += "doityourself<br/>");"energy" == b.shop && (a += "energy<br/>");"florist" == b.shop && (a += "florist<br/>");"furnace" == b.shop && (a += "furnace shop<br/>");"garden_centre" == b.shop && (a += "garden centre<br/>");"gas" == b.shop && (a += "gas<br/>");"glaziery" == b.shop && (a += "glaziery<br/>");"hardware" == b.shop && (a += "hardware shop<br/>");"houseware" == b.shop && (a += "houseware shop<br/>");"locksmith" == b.shop && (a += "locksmith<br/>");"paint" == b.shop && (a += "paint shop<br/>");"trade" == b.shop && (a += "trade<br/>");
    "antiques" == b.shop && (a += "antiques shop<br/>");"bed" == b.shop && (a += "bed shop<br/>");"candles" == b.shop && (a += "candles shop<br/>");"carpet" == b.shop && (a += "carpet shop<br/>");"curtain" == b.shop && (a += "curtain shop<br/>");"furniture" == b.shop && (a += "furniture store<br/>");"interior_decoration" == b.shop && (a += "interior decoration company<br/>");"kitchen" == b.shop && (a += "kitchen shop<br/>");"window_blind" == b.shop && (a += "window blind shop<br/>");"computer" == b.shop && (a += "computer shop<br/>");"electronics" == b.shop && (a += "electronics shop<br/>");"hifi" == b.shop && (a += "hifi shop<br/>");"mobile_phone" == b.shop && (a += "mobile phone shop<br/>");"radiotechnics" == b.shop && (a += "radiotechnics shop<br/>");"vacuum_cleaner" == b.shop && (a += "vacuum cleaner shop<br/>");"bicycle" == b.shop && (a += "bicycle shop<br/>");"car" == b.shop && (a += "car shop<br/>");"car repair" == b.shop && (a += "car repair<br/>");"car_parts" == b.shop && (a += "car parts shop<br/>");if ("dive" == b.shop || "scuba_diving" == b.shop) a += "scuba diving shop<br/>";"fishing" == b.shop && (a += "fishing shop<br/>");
    "free_flying" == b.shop && (a += "free flying shop<br/>");"hunting" == b.shop && (a += "hunting shop<br/>");"motorcycle" == b.shop && (a += "motorcycle shop<br/>");"outdoor" == b.shop && (a += "outdoor shop<br/>");"sports" == b.shop && (a += "sports shop<br/>");"tyres" == b.shop && (a += "tyres<br/>");"water_sports" == b.shop && (a += "water sports shop<br/>");"art" == b.shop && (a += "art<br/>");"craft" == b.shop && (a += "craft<br/>");"frame" == b.shop && (a += "frame shop<br/>");"music" == b.shop && (a += "music shop<br/>");"music_instrument" == b.shop && (a += "music instruments shop<br/>");
    "photo" == b.shop && (a += "photo shop<br/>");"video" == b.shop && (a += "video<br/>");"video_games" == b.shop && (a += "video games<br/>");"anime" == b.shop && (a += "anime<br/>");"books" == b.shop && (a += "books shop<br/>");"gift" == b.shop && (a += "gift shop<br/>");"newsagent" == b.shop && (a += "newsagent<br/>");"stationery" == b.shop && (a += "stationery<br/>");"ticket" == b.shop && (a += "ticket shop<br/>");"copyshop" == b.shop && (a += "copyshop<br/>");"funeral_directors" == b.shop && (a += "funeral directors<br/>");"laundry" == b.shop && (a += "laundry<br/>");
    "dry_cleaning" == b.shop && (a += "dry cleaning<br/>");"money_lender" == b.shop && (a += "money lender<br/>");"pawnbroker" == b.shop && (a += "pawnbroker<br/>");"pet" == b.shop && (a += "pet shop<br/>");"pyrotechnics" == b.shop && (a += "pyrotechnics shop<br/>");"religion" == b.shop && (a += "religion<br/>");"beauty" == b.shop && (a += "beauty<br/>");"solarium" == b.shop && (a += "solarium<br/>");"tobacco" == b.shop && (a += "tobacco shop<br/>");"toys" == b.shop && (a += "toys shop<br/>");"travel_agency" == b.shop && (a += "travel agency<br/>");"market_hall" == b.shop && (a += "market hall<br/>");"vacant" == b.shop && (a += "vacant<br/>");"weapons" == b.shop && (a += "weapons shop<br/>");"lottery" == b.gambling && (a += "lottery<br/>");"fish" == b.pet && (a += "fishkeeping<br/>");"agriucultural_engines" == b.craft && (a += "agriucultural engines<br/>");"basket_maker" == b.craft && (a += "basket maker<br/>");"beekeeper" == b.craft && (a += "beekeeper<br/>");"blacksmith" == b.craft && (a += "blacksmith<br/>");"brewery" == b.craft && (a += "brewery<br/>");"yes" == b.microbrewery && (a += "micro-brewery<br/>");"boatbuilder" == b.craft && (a += "boatbuilder<br/>");"bookbinder" == b.craft && (a += "bookbinder<br/>");"builder" == b.craft && (a += "housebuilding<br/>");"carpenter" == b.craft && (a += "carpenter, woodworker, joiner<br/>");"carpet_layer" == b.craft && (a += "carpet layer<br/>");"caterer" == b.craft && (a += "caterer<br/>");"clockmaker" == b.craft && (a += "clockmaker<br/>");"confectionery" == b.craft && (a += "confectionery<br/>");"dressmaker" == b.craft && (a += "dressmaker<br/>");"electrician" == b.craft && (a += "electrician<br/>");"gardener" == b.craft && (a += "gardener, landscaper<br/>");
    "glaziery" == b.craft && (a += "glaziery<br/>");"handicraft" == b.craft && (a += "handicraft<br/>");"hvac" == b.craft && (a += "heating, ventilation and air-conditioning technology (HVAC)<br/>");"insulation" == b.craft && (a += "thermal insulation<br/>");"jeweller" == b.craft && (a += "jeweller, gold-/silversmiths<br/>");"key_cutter" == b.craft && (a += "key cutter<br/>");"locksmith" == b.craft && (a += "locksmith<br/>");"metal_construction" == b.craft && (a += "metalworker<br/>");"optician" == b.craft && (a += "optician<br/>");"painter" == b.craft && (a += "painter<br/>");"parquet_layer" == b.craft && (a += "parquet layer<br/>");"photographer" == b.craft && (a += "photographer<br/>");"photographic_laboratory" == b.craft && (a += "photographic laboratory<br/>");"plasterer" == b.craft && (a += "plasterer<br/>");"plumber" == b.craft && (a += "plumber<br/>");"pottery" == b.craft && (a += "pottery<br/>");"rigger" == b.craft && (a += "ship rigger<br/>");"roofer" == b.craft && (a += "roofer<br/>");"saddler" == b.craft && (a += "saddler<br/>");"sailmaker" == b.craft && (a += "sailmaker<br/>");"sawmill" == b.craft && (a += "sawmill<br/>");"scaffolder" == b.craft && (a += "scaffolder<br/>");"sculptor" == b.craft && (a += "sculptor<br/>");"shoemaker" == b.craft && (a += "shoemaker<br/>");"stand_builder" == b.craft && (a += "exhibition stand builder<br/>");"stonemason" == b.craft && (a += "stonemason<br/>");"sun_protection" == b.craft && (a += "constructor for sun protection, venetian blind, shutter<br/>");"sweep" == b.craft && (a += "chimney sweep<br/>");"tailor" == b.craft && (a += "tailor<br/>");"tiler" == b.craft && (a += "tiler<br/>");"tinsmith" == b.craft && (a += "tinsmith, metalworker<br/>");
    "upholsterer" == b.craft && (a += "upholsterer<br/>");"watchmaker" == b.craft && (a += "watchmaker<br/>");"window_construction" == b.craft && (a += "window constructor<br/>");"machines" == b.rental && (a += "rental park for machines<br/>");"car_rental" == b.amenity && (a += "car rental company<br/>");"allotments" == b.landuse && (a += "allotment garden<br/>");"basin" == b.landuse && (a += "holding reservoir<br/>");"brownfield" == b.landuse && (a += "brownfield<br/>");"commercial" == b.landuse && (a += "commercial area<br/>");"construction" == b.landuse && (a += "construction area<br/>");"farmland" == b.landuse && (a += "farmland<br/>");"farmyard" == b.landuse && (a += "farmyard<br/>");"forest" == b.landuse && (a += "forest<br/>");"garages" == b.landuse && (a += "garages<br/>");"grass" == b.landuse && (a += "grass<br/>");"greenfield" == b.landuse && (a += "greenfield<br/>");"greenhouse_horticulture" == b.landuse && (a += "greenhouse horticulture<br/>");"industrial" == b.landuse && (a += "industry area<br/>");"landfill" == b.landuse && (a += "landfill<br/>");"meadow" == b.landuse && (a += "meadow<br/>");"orchard" == b.landuse && (a += "orchard<br/>");"plant_nursery" == b.landuse && (a += "plant nursery<br/>");"quarry" == b.landuse && (a += "quarry<br/>");"railway" == b.landuse && (a += "railway<br/>");"recreation_ground" == b.landuse && (a += "recreation ground<br/>");"reservoir" == b.landuse && (a += "reservoir<br/>");"residential" == b.landuse && (a += "residential<br/>");"retail" == b.landuse && (a += "retrail<br/>");"salt_pond" == b.landuse && (a += "salt pond<br/>");"village_green" == b.landuse && (a += "village green<br/>");"vineyard" == b.landuse && (a += "vineyard<br/>");
    "pond" == b.landuse && (a += "pond<br/>");"salt_pond" == b.landuse && (a += "salt pond<br/>");"animal_keeping" == b.landuse && (a += "animal keeping<br/>");"yes" == b.entrance && (a += "entrance<br/>");"main" == b.entrance && (a += "main-entrance<br/>");"service" == b.entrance && (a += "rear exit for staffing and suppliers<br/>");"exit" == b.entrance && (a += "exit<br/>");"emergency" == b.entrance && (a += "emergency<br/>");"bay" == b.natural && (a += "bay<br/>");"beach" == b.natural && (a += "beach<br/>");"wood" == b.natural && (a += "wood<br/>");"glacier" == b.natural && (a += "glacier<br/>");"cave_entrance" == b.natural && (a += "cave entrance<br/>");"spring" == b.natural && (a += "spring<br/>");"waterfall" == b.natural && (a += "waterfall<br/>");"scrub" == b.natural && (a += "scrub<br/>");"grassland" == b.natural && (a += "grassland<br/>");"wetland" == b.natural && (a += "wetland<br/>");"tree" == b.natural && (a += "tree");"peak" == b.natural && "yes" == b["summit:cross"] && (a += "cross on the summit of a mountain<br/>");"tree_row" == b.natural && (a += "tree row, alley of trees<br/>");"heath" == b.natural && (a += "heath<br/>");
    "moor" == b.natural && (a += "moor<br/>");"grassland" == b.natural && (a += "grassland<br/>");"fell" == b.natural && (a += "grasland above the tree land<br/>");"bare_rock" == b.natural && (a += "bare rock<br/>");"scree" == b.natural && (a += "scree<br/>");"volcano" == b.natural && (a += "volcano<br/>");"valley" == b.natural && (a += "valley<br/>");"stone" == b.natural && (a += "stone<br/>");"sea" == b.natural && (a += "sea<br/>");"national_park" == b.boundary && (a += "national park<br/>");"protected_area" == b.boundary && (a += "protected area<br/>");"yes" == b.mountain_pass && (a += "mountain pass<br/>");"waterfall" == b.waterway && (a += "waterfall<br/>");"canal" == b.waterway && (a += "canal<br/>");"canal" == b.water && (a += "canal<br/>");"river" == b.waterway && (a += "river<br/>");"river" == b.water && (a += "river<br/>");"riverbank" == b.waterway && (a += "river<br/>");"ditch" == b.waterway && (a += "ditch<br/>");"stream" == b.waterway && (a += "stream<br/>");"ferry" == b.route && (a += "ferry<br/>");"turning_point" == b.waterway && (a += "turning point<br/>");if ("lake" == b.water || "water" == b.natural) a += "lake<br/>";"cove" == b.water && (a += "cove<br/>");"lagoon" == b.water && (a += "lagoon<br/>");"pond" == b.water && (a += "pond<br/>");"reservoir" == b.water && (a += "waterreservoir<br/>");"oxbow" == b.water && (a += "oxbow lake<br/>");"lock" == b.water && (a += "lock chamber<br/>");"moat" == b.water && (a += "castle moat<br/>");"wastewater" == b.water && (a += "wastewater treatment plant<br/>");"guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "gastrointestinal<br/>" : "pier" == b.man_made && (a += "pier<br/>");"boatyard" == b.waterway && (a += "boatyard<br/>");"mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "dolphin<br/>");"foot" == b.route && (a += "footpath<br/>");"hiking" == b.route && (a += "hiking trail<br/>");if ("yes" == b.hiking && "information" == b.tourism) a += "direction board<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {case "board":
            a += "direction board<br/>";break;case "map":
            a += "direction board with a map<br/>";break;case "office":
            a += "tourist information office<br/>";
            break;case "terminal":
            a += "tourist information terminal<br/>";break;case "audioguide":
            a += "audioguide<br/>";break;case "guidepost":
            a += "guidepost<br/>";break;case "tactile_map":
            a += "tactile map<br/>";break;case "tactile_model":
            a += "tactile model<br/>";break;case "route_marker":
            a += "route marker<br/>";break;default:
            a += "direction board<br/>";} else a += "direction board<br/>";"bicycle" == b.route && (a += "cycle track<br/>");"mtb" == b.route && (a += "mountain bike route<br/>");"horse" == b.route && (a += "bridleway<br/>");"coastline" == b.natural && (a += "coastline<br/>");"cliff" == b.natural && (a += "cliff<br/>");"dam" == b.waterway && (a += "dam<br/>");"weir" == b.waterway && (a += "weir<br/>");"lock_gate" == b.waterway && (a += "lock gate<br/>");"yes" == b.lock && (a += "lock<br/>");"sluice_gate" == b.waterway && (a += "sluice gate<br/>");"pumping_station" == b.man_made && (a += "pumping station<br/>");"groyne" == b.man_made && (a += "groyne<br/>");"dyke" == b.man_made && (a += "dyke<br/>");"levee" == b.man_made && (a += "levee<br/>");"watermill" == b.man_made && (a += "watermill<br/>");"airfield" == b.military && (a += "military airfield<br/>");"naval_base" == b.military && (a += "naval base<br/>");"range" == b.military && (a += "military range<br/>");"military" == b.landuse && (a += "military land use<br/>");"training_area" == b.military && (a += "military training area<br/>");"exclusion_zone" == b.military && (a += "military exclusion zone<br/>");"danger_area" == b.military && (a += "military danger area<br/>");"barracks" == b.military && (a += "barracks<br/>");"nuclear_explosion_site" == b.military && (a += "military nuclear explosion site<br/>");
    "yes" == b.construction ? a += "construction<br/>" : "construction" == b.highway && (a += "construction<br/>");"petroleum_well" == b.man_made && (a += "petroleum well<br/>");"storage_tank" == b.man_made && (a += "storage tank<br/>");"wastewater_plant" == b.man_made && (a += "wastewater plant<br/>");"silo" == b.man_made && (a += "silo<br/>");"water_tower" == b.man_made && (a += "water tower<br/>");"windmill" == b.man_made && (a += "windmill<br/>");"monitoring_station" == b.man_made && (a += "monitoring station");"crane" == b.man_made && (a += "crane");"lighthouse" == b.man_made && (a += "lighthouse");"beacon" == b.man_made && (a += "beacon");"breakwater" == b.man_made && (a += "breakwater");"lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "street lamp<br/>");"lantern" == b.light_source && (a += "street lamp");"floodlight" == b.light_source && (a += "floodlight<br/>");"signal_lamp" == b.light_source && (a += "signal lamp<br/>");"aviation" == b.light_source && (a += "aviation<br/>");"warning" == b.light_source && (a += "warning<br/>");if (b.light_source && b["light:method"]) switch (a += "Light Typ: ", b["light:method"]) {case "gas":
            a += "Gas";break;case "electric":
            a += "electric";break;case "incandescent":
            a += "incandescent";break;case "halogen":
            a += "halogen";break;case "discharge":
            a += "discharge";break;case "metal-halide":
            a += "metal-halide";break;case "neon":
            a += "neon";break;case "sodium":
            a += "Natriumdampflampe";break;case "high_pressure_sodium":
            a += "high pressure sodium";break;case "low_pressure_sodium":
            a += "low pressure sodium";break;case "fluorescent":
            a += "Fluorescent";break;case "mercury":
            a += "Mercury";break;case "LED":
            a += "LED";break;case "laser":
            a += "Laser";break;case "arc":
            a += "Arc";break;default:
            a += "Unkown";}"drinking_water" == b.amenity && (a += "drinking water<br/>");"yes" == b.drinking_water && (a += "drinking water<br/>");"works" == b.man_made ? a += "industrial building<br/>" : "industrial" == b.building ? a += "industrial building<br/>" : "industrial" == b.landuse ? a += "industrial area<br/>" : "industrial" == b.abutters ? a += "industrial area<br/>" : "commercial" == b.abutters && (a += "commercial<br/>");if (b["generator:source"]) switch (a += "installation: ", b["generator:source"]) {case "biomass":
            a += "biomass";break;case "biofuel":
            a += "biofuel";break;case "biogas":
            a += "biogas";break;case "coal":
            a += "coal";break;case "oil":
            a += "oil";break;case "waste":
            a += "waste";break;case "wind":
            a += "wind";break;case "solar":
            a += "solar";break;case "hydro":
            a += "hydro";break;case "tidal":
            a += "tidal";break;case "wave":
            a += "wave";break;case "geothermal":
            a += "geothermal";break;case "osmotic":
            a += "osmotic";break;case "nuclear":
            a += "nuclear";break;default:
            a += "unknown<br/>";}"photovoltaic" == b.power_source && (a += "photovoltaic");"line" == b.power && (a += "power line<br/>");"cable" == b.power && (a += "cable<br/>");"cable_distribution_cabinet" == b.power && (a += "cable distribution cabinet<br/>");"plant" == b.power && (a += "plant<br/>");"station" == b.power && (a += "station<br/>");"sub_station" == b.power && (a += "substation<br/>");"compensator" == b.power && (a += "compensator<br/>");"converter" == b.power && (a += "converter<br/>");"generator" == b.power && (a += "generator<br/>");"heliostat" == b.power && (a += "heliostat<br/>");"insulator" == b.power && (a += "insulator<br/>");"busbar" == b.line && (a += "busbar<br/>");"bay" == b.line && (a += "bay<br/>");"minor_line" == b.power && (a += "minor line<br/>");"pole" == b.power && (a += "pole<br/>");"portal" == b.power && (a += "portal<br/>");"catenary_mast" == b.power && (a += "catenary mast<br/>");"substation" == b.power && (a += "substation<br/>");"switch" == b.power && (a += "switch<br/>");"terminal" == b.power && (a += "terminal<br/>");"tower" == b.power && (a += "tower<br/>");"transformer" == b.power && (a += "transformer<br/>");if (b.barrier) switch (b.barrier) {case "bollard":
            a += "bollard<br/>";
            break;case "cycle_barrier":
            a += "cycle barrier<br/>";break;case "gate":
            a += "gate<br/>";break;case "chain":
            a += "chain<br/>";break;case "lift_gate":
            a += "lift gate<br/>";break;case "wall":
            a += "wall<br/>";break;case "toll_booth":
            a += "toll booth<br/>";break;case "fence":
            switch (b.fence_type) {case "barbed_wire":
                    a += "barbed wire<br/>";break;case "wood":
                    a += "wood<br/>";break;case "chain_link":
                    a += "chain link<br/>";break;case "electric":
                    a += "electric<br/>";break;case "railing":
                    a += "railing<br/>";break;case "wire":
                    a += "wire<br/>";
                    break;case "metal":
                    a += "metal<br/>";break;case "pole":
                    a += "pole<br/>";break;default:
                    a += "fence<br/>";}break;case "block":
            a += "block<br/>";break;case "ditch":
            a += "ditch<br/>";break;case "border_control":
            a += "border control<br/>";break;case "hedge":
            a += "hedge<br/>";break;case "retaining_wall":
            a += "retaining wall<br/>";break;case "cattle_grid":
            a += "cattle grid<br/>";break;case "horse_stile":
            a += "horse stile<br/>";break;default:
            a += "unknown<br/>";}"noise_barrier" == b.wall && (a += "noise barrier<br/>");"retaining_wall" == b.designation && (a += "noise barrier<br/>");"noise_barrier" == b.designation && (a += "noise barrier<br/>");"surveillance" == b.man_made && (a += "surveillance<br/>");if (b.aeroway) switch (a += "airport: ", b.aeroway) {case "aerodrome":
            a += "airport";break;case "apron":
            a += "apron";break;case "gate":
            a += "gate";break;case "helipad":
            a += "helipad";break;case "hangar":
            a += "hangar";break;case "runway":
            a += "runway";break;case "taxiway":
            a += "taxiway";break;case "terminal":
            a += "terminal";break;default:
            a += "unknown<br/>";}"stop" == b.railway && (a += "railway stop<br/>");"crossing" == b.railway && (a += "crossing<br/>");"level_crossing" == b.railway && (a += "lvel crossing<br/>");"station" == b.railway && (a += "station<br/>");"bus_station" == b.amenity && (a += "bus station<br/>");"bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "bus station<br/>");"rail" == b.railway && (a += "railway<br/>", "contact_line" == b.electrified && (a += "overhead contact line<br/>"));"tram" == b.railway && (a += "tram<br/>");if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "slipway<br/>";if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {case "ferry":
            a += "ferry<br/>";break;case "container":
            a += "container<br/>";break;case "marina":
            "marina" != b.leisure && (a += "marina<br/>");break;case "navel_base":
            a += "navel base<br/>";break;case "tanker":
            a += "tanker<br/>";break;case "passenger":
            a += "passenger<br/>";break;case "bulk":
            a += "bulk<br/>";break;default:
            a += "habour<br/>";} else a += "habour<br/>";
    "marina" == b.leisure && (a += "marina<br/>");"wreck" == b.historic && (a += "wreck<br/>");"animal_shelter" == b.amenity && (a += "animal shelter<br/>");"shelter" == b.animal && (a += "shelter<br/>");"horse_walker" == b.animal && (a += "horse walker<br/>");"yes" == b.animal_shelter && (a += "animal shelter<br/>");"dog" == b.animal_shelter && (a += "animal shelter<br/>");"cat" == b.animal_shelter && (a += "animal shelter<br/>");"animal_boarding" == b.amenity && (a += "animal boarding<br/>");"yes" == b.animal_boarding && (a += "animal boarding<br/>");"dog" == b.animal_boarding && (a += "animal boarding<br/>");"horse" == b.animal_boarding && (a += "animal boarding<br/>");"cat" == b.animal_boarding && (a += "animal boarding<br/>");"dog;cat" == b.animal_boarding && (a += "animal boarding<br/>");"cat;dog" == b.animal_boarding && (a += "animal boarding<br/>");if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "animal training<br/>";"swimming" == b.animal && (a += "swimming for dogs<br/>");if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "animal feeding<br/>";if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "wildlife feeding<br/>";if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "feeding rack<br/>";"manger" == b.amenity && (a += "manger<br/>");"birdhouse" == b.man_made && (a += "birdhouse<br/>");"stork" == b.birds_nest && (a += "storck<br/>");"nest_box" == b.amenity && (a += "nest box<br/>");"wellness" == b.animal && (a += "dog parlour<br/>");"cemetery" == b.animal && (a += "small animal cemetery<br/>");
    if ("stable" == b.building || "stable" == b["building:use"]) a += "stable<br/>";"cowshed" == b.building && (a += "cowshed<br/>");"sty" == b.building && (a += "sty<br/>");"barn" == b.building && (a += "barn<br/>");"farm_auxiliary" == b.building && (a += "farm auxiliary<br/>");if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "milestone of waterway distance<br/>";"milestone" == b.highway && (a += "milestone<br/>");"market" == b["xmas:feature"] && (a += "Christmas fair<br/>");"tree" == b["xmas:feature"] && (a += "sale of Chrismas trees<br/>");
    "event" == b["xmas:feature"] && (a += "Chrismas event<br/>");"pyramid" == b["xmas:feature"] && (a += "Chrismas pyramid<br/>");return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = exports.fnContent = function fnContent(b) {
    var a;a = "" + fnContentGeneralInformations(b);a += fnContentHealthcare(b);a += fnContentAerodrome(b);a += fnContentCuisine(b);a += fnContentShipping(b);a += fnContentHydrants(b);a += fnContentSports(b);a += fnContentStreetsTraffic(b);a += fnContentInformationCity(b);a += fnContentEmergency(b);a += fnContentStorage(b);a += fnContentAmenity(b);a += fnContentTourism(b);a += fnContentRoute(b);a += fnContentPetrol(b);a += fnContentBarriers(b);a += fnContentLanduse(b);a += fnContentNatural(b);a += fnKlosterAdditional(b);
    a += fnSicherheitAdditional(b);a += fnAdditionalBuildingInfos(b);a += fnKraftwerkInfo(b);a += fnMessstation(b);a += fnWertstoffinfo(b);(a += fnContentProtectedArea(b)) && (a = "<br/>" + a);return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = exports.fnContentAerodrome = function fnContentAerodrome(b) {
    var a = "";b.aerodrome && ("international" == b.aerodrome && (a += "type of airport: international<br/>"), "regional" == b.aerodrome && (a += "type of airport: regional<br/>"), "gliding" == b.aerodrome && (a += "type of airport: gliding<br/>"), "private" == b.aerodrome && (a += "type of airport: private<br/>"));b.iata && (a += "IATA-Code: " + b.iata + "<br/>");b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");return a;
},
    fnContentNatural = exports.fnContentNatural = function fnContentNatural(b) {
    var a = "";if (b.forest || b.wood) {
        if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "broadleaved<br/>";if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "needleleaved<br/>";if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "mixed<br/>";"leafless" == b.leaf_type && (a += "leafless<br/>");"evergreen" == b.wood && (a += "evergreen<br/>");"palm" == b.wood && (a += "palm<br/>");"nipa_palm" == b.wood && (a += "nipa palm<br/>");"eucalypt" == b.wood && (a += "eucalypt<br/>");if ("filao" == b.wood || "casuarina" == b.wood) a += "casuarina<br/>";
    }if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "broad-leaved<br/>" : a + "conifer<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "landmark<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "natural monument<br/>";"manger" == b["feeding:type"] && (a += "manger:rack for fodder<br/>");"automated" == b["feeding:type"] && (a += "automated<br/>");if (b["feeding:for"]) switch (b["feeding:for"]) {case "sheep":
            a += "animal: sheep<br/>";break;case "horse":
            a += "animal: horse<br/>";break;case "cow":
            a += "animal: cow<br/>";break;case "rabbit":
            a += "animal: rabbit<br/>";break;case "bunny":
            a += "animal: bunny<br/>";break;
        case "cat":
            a += "animal: cat </br>";break;case "swan":
            a += "animal: swan </br>";break;case "guinea pig":
            a += "animal: guinea pig </br>";break;case "donkey":
            a += "animal: donkey </br>";break;case "squirrel":
            a += "animal: squirrel </br>";break;case "pig":
            a += "animal: pig </br>";break;case "deer":
            a += "animal: deer </br>";break;case "guinea pig":
            a += "animal: guinea pig </br>";break;case "monkey":
            a += "animal: monkey </br>";break;case "camel":
            a += "animal: camel </br>";break;case "goat":
            a += "animal: goat </br>";break;case "hamster":
            a += "animal: hamster </br>";break;case "alpaca":
            a += "animal: alpaca </br>";break;default:
            a += "animal: unknown<br/>";}if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {case "hay":
            a += "feed with: hay</br>";break;case "grain":
            a += "feed with: grain</br>";break;case "corn":
            a += "feed with: corn</*br>";break;default:
            a += "feed with: unknown</br>";}"volcano" == b.natural && "active" == b.status && (a += "active volcano<br/>");"volcano" == b.natural && "dormant" == b.status && (a += "dormant volcano<br/>");"volcano" == b.natural && "extinct" == b.status && (a += "extinct volcano<br/>");"volcano" == b.natural && "stratovolcano" == b.type && (a += "type of volcanism:stratovolcano<br/>");"volcano" == b.natural && "shield" == b.type && (a += "type of volcanism:shield<br/>");"volcano" == b.natural && "scoria" == b.type && (a += "type of volcanism:scoria<br/>");return a;
},
    fnContentProtectedArea = exports.fnContentProtectedArea = function fnContentProtectedArea(b) {
    var a = "",
        c = "";"protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "description: Strict Nature Reserve, Wilderness Area<br/>"), "2" == c && (a = "description: National Park<br/>"), "3" == c && (a = "description: Natural Monument or Feature<br/>"), "4" == c && (a = "description: Habitat/Species Management Area<br/>"), "5" == c && (a = "description: Protected Landscape/ Seascape<br/>"), "6" == c && (a = "description: Protected area with sustainable use of natural resources<br/>"), "7" == c && (a = "description: nature-feature area<br/>"), "97" == c && (a = "description: protected by continental agreements<br/>"), "98" == c && (a = "description: protected by interstate- or international conventions<br/>"), "99" == c && (a = "other continental or international national protected areas <br/>"), "21" == c && (a = "description: Community life: religious, sacred areas, associative locations, recreation<br/>"), "22" == c && (a = "description: Cultural assets (cultural assets and - efforts, districts historical heritage, monument conservation)<br/>"), "23" == c && (a = "description: Protection in favor of economics<br/>"), "24" == c && (a = "description: Political protection<br/>"), "25" == c && (a = "description: Military areas (military refuges, test area)<br/>"), "26" == c && (a = "description: Historic: for colonial-stuff and protectorates.<br/>"), "29" == c && (a = "description: other social protected areas<br/>"), "11" == c && (a = "description: soil: crop yield, erosion protection, ...<br/>"), "12" == c && (a = "description: water: water protection area, fresh water, drinking water, springs, ...<br/>"), "13" == c && (a = 'description: climate and -air: gasper supply/cold air, ...for emission-, immission control in OSM existent, see "Low Emission Zone" (LEZ)<br/>'), "14" == c && (a = "description: species: no fishing, protected for fishery, protected for hunting, plants, ...<br/>"), "15" == c && (a = "description: location condition: floodwater retention area, protection forest, grazing land, ...<br/>"), "16" == c && (a = 'description: longtime hazard area: contamination, earth-moving area, "problem sites" ...<br/>'), "19" == c && (a = "description: other national resources protected areas<br/>"));return a;
},
    fnContentLanduse = exports.fnContentLanduse = function fnContentLanduse(b) {
    var a = "";"quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");"open_stable" == b["animal_keeping:type"] && (a += "open stable<br/>");"field_shelter" == b["animal_keeping:type"] && (a += "field shelter<br/>");"paddock" == b["animal_keeping:type"] && (a += "paddock<br/>");b.animal_keeping && (a += "animals: horses<br/>");return a;
},
    fnMessstation = exports.fnMessstation = function fnMessstation(b) {
    var a = "";"yes" == b["monitoring:water_level"] && (a += "water level<br/>");"yes" == b["monitoring:seismic_activity"] && (a += "seismic activity<br/>");"yes" == b["monitoring:tide_gauge"] && (a += "tide gauge<br/>");"yes" == b["monitoring:weather"] && (a += "weather<br/>");"yes" == b["monitoring:air_quality"] && (a += "air quality<br/>");return a;
},
    fnContentRoute = exports.fnContentRoute = function fnContentRoute(b) {
    var a = "";b.route && ("yes" == b.roundtrip && (a += "roundtrip<br/>"), b.length && (a += "length: " + b.length + "<br/>"), b.distance && (a += "distance: " + b.distance + "<br/>"), b.symbol && (a += "symbol: " + b.symbol + "<br/>"));return a;
},
    fnContentPetrol = exports.fnContentPetrol = function fnContentPetrol(b) {
    var a = "";"fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "e85<br/>"), "yes" == b["fuel:e10"] && (a += "e10<br/>"), "yes" == b["fuel:lpg"] && (a += "lpg<br/>"), "yes" == b["fuel:cng"] && (a += "cng<br/>"), "diesel" == b.fuel && (a += "diesel<br/>"), "lpg" == b.fuel && (a += "lpg<br/>"), "yes" == b["fuel:octane_95"] && (a += "octane 95<br/>"), "yes" == b["fuel:octane_98"] && (a += "octane 98<br/>"), "yes" == b["fuel:octane_100"] && (a += "octane 100<br/>"), "yes" == b["fuel:octane_102"] && (a += "octane 102<br/>"), "yes" == b["fuel:diesel"] && (a += "diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "charging station / loading station<br/>"));return a;
},
    fnContentHistoric = exports.fnContentHistoric = function fnContentHistoric(b) {
    var a = "";if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {case "megalith":
            a += "megalith<br/>";break;case "bigstone":
            a += "bigstone<br/>";break;case "tumulus":
            a += "tumulus<br/>";break;case "fortification":
            a += "fortification<br/>";break;default:
            a += "unknown<br/>";}return a;
},
    fnContentBarriers = exports.fnContentBarriers = function fnContentBarriers(b, a) {
    var c = "";if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "material: " + translate(b.material) + "<br/>");return c;
},
    fnContentTourism = exports.fnContentTourism = function fnContentTourism(b) {
    var a = "";if ("camp_site" == b.tourism) {
        "yes" == b.dog && (a += "dogs allowed<br/>");"no" == b.dog && (a += "dogs forbidden<br/>");b.stars && (a += b.stars + "stars<br/>");b.caravans && (a += "caravan sites<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Thers is an openfire. <br/>";"yes" == b.washing_machine && (a += "washing machine<br/>");"yes" == b.dryer && (a += "dryer<br/>");"yes" == b.group_only && (a += "use for groups only<br/>");"reception" == b.camp_site && (a += "reception available<br/>");
    }"information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "topo</br>"), "street" == b.map_type && (a += "street</br>"), "scheme" == b.map_type && (a += "scheme</br>"), "toposcope" == b.map_type && (a += "toposcope</br>"));"information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "map of site</br>"), "city" == b.map_size && (a += "city map</br>"), "region" == b.map_size && (a += "map of region</br>"));"geology" == b.board_type && (a += "geologic information<br/>");"history" == b.board_type && (a += "historic information<br/>");"nature" == b.board_type && (a += "information about nature<br/>");"notice" == b.board_type && (a += "general information<br/>");"plants" == b.board_type && (a += "information about plants<br/>");
    "wildlife" == b.board_type && (a += "information about wildlife<br/>");return a;
},
    fnContentAmenity = exports.fnContentAmenity = function fnContentAmenity(b) {
    var a = "";"boat_sharing" == b.amenity && (a += b.boattype + "<br/>");"embassy" == b.amenity && (a += b.country + "<br/>");if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "tickets<br/>";break;case "animal_feed":
            a += "animal feed<br/>";break;case "books":
            a += "books<br/>";break;case "candles":
            a += "candles<br/>";break;case "cigarettes":
            a += "cigarettes<br/>";break;case "condoms":
            a += "condoms<br/>";break;case "drinks":
            a += "drinks<br/>";break;case "first_aid":
            a += "first aid articles<br/>";break;case "fishing_tackle":
            a += "fishing tackle<br/>";break;case "flowers":
            a += "flowers<br/>";break;case "ice_cream":
            a += "ice cream<br/>";break;case "laundry_detergent":
            a += "laundry detergent<br/>";break;case "newspapers":
            a += "newspapers<br/>";break;case "SIM_cards":
            a += "sIM-cards<br/>";break;case "sweets":
            a += "sweets<br/>";break;case "parcel_pickup":
            a += "parcel pickup<br/>";break;case "ice_cubes":
            a += "ice cubes<br/>";break;case "public_transport_tickets":
            a += "public transport tickets<br/>";break;case "parking_ticket":
            a += "parking tickets<br/>";break;case "sex_toys":
            a += "sex toys<br/>";break;case "stamps":
            a += "stamps<br/>";break;case "toll":
            a += "toll<br/>";break;case "umbrellas":
            a += "umbrellas<br/>";break;default:
            a += "content unknown<br/>";}"post_box" == b.amenity && (b.collection_times && (a += "collection times: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "accessible by car. <br/>"));return a;
},
    fnContentStorage = exports.fnContentStorage = function fnContentStorage(b) {
    var a = "";if ("storage_tank" == b.man_made) {
        if (b.content) {
            var c = b.content;switch (c) {case "fuel":
                    c = "fuel";break;case "oil":
                    c = "oil";break;case "gas":
                    c = "gas";break;case "slurry":
                    c = "slurry";break;case "cement":
                    c = "cement";break;case "water":
                    c = "water";break;case "manure":
                    c = "manure";break;case "silage":
                    c = "silage";}a += "content: " + c + "<br/>";
        }if (b.contents) {
            c = b.contents;switch (c) {case "fuel":
                    c = "fuel";break;case "oil":
                    c = "oil";break;case "gas":
                    c = "gas";break;case "slurry":
                    c = "slurry";break;case "cement":
                    c = "cement";break;case "water":
                    c = "water";
                    break;case "manure":
                    c = "manure";break;case "silage":
                    c = "silage";}a += "content: " + c + "<br/>";
        }
    }b.storage && ("gas" == b.storage && (a += "content: gas<br/>"), "oil" == b.storage && (a += "content: oil<br/>"));return a;
},
    fnContentInformationCity = exports.fnContentInformationCity = function fnContentInformationCity(b) {
    var a = "";b["name:de"] && (a += "german name: " + b["name:de"] + "<br/>");if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
        var c = b.population.length % 3,
            d = 0 < c ? b.population.substring(0, c) : "";for (i = 0; i < Math.floor(b.population.length / 3); i++) {
            d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
        }a += "population: " + d + "<br/>";
    } else a += "population " + b.population + "<br/>";1E4 >= b.population && (a += "population: " + b.population + "<br/>");return a;
},
    fnContentEmergency = exports.fnContentEmergency = function fnContentEmergency(b) {
    var a = "";b.lifeboat && ("inshore" == b.lifeboat ? a += "application: inshore<br/>" : "offshore" == b.lifeboat && (a += "application: offshore<br/>"));b["lifeboat:class"] && (a += "type of boat: " + b["lifeboat:class"] + "<br/>");if (b["siren:type"]) {
        var c = b["siren:type"];
        switch (c) {case "mechanical":
                c = "mechanical";break;case "electronic":
                c = "electronic";break;case "pneumatic":
                c = "pneumatic";break;case "electromechanic":
                c = "electromechanic";}a += "Typ: " + c + "<br/>";
    }if (b["siren:purpose"]) {
        c = b["siren:purpose"];switch (c) {case "air_raid":
                c = "air raid";break;case "tornado":
                c = "tornado";break;case "storm":
                c = "storm";break;case "civil_defense":
                c = "civil defence";break;case "fire":
                c = "fire";}a += "use: " + c + "<br/>";
    }b["siren:model"] && (a += "model: " + b["siren:model"] + "<br/>");b["siren:range"] && (a += "range of siren: " + b["siren:range"] + "<br/>");return a;
},
    fnContentCuisine = exports.fnContentCuisine = function fnContentCuisine(b) {
    var a = "";if (b.cuisine) {
        var c = "",
            a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "specialties: " : a + "cuisine: ";"arabic" == b.cuisine && (c += "arabic<br/>");"italian" == b.cuisine && (c += " italian<br/>");"international" == b.cuisine && (c += " international<br/>");"regional" == b.cuisine && (c += " regional<br/>");"chinese" == b.cuisine && (c += " chinese<br/>");"greek" == b.cuisine && (c += " greek<br/>");"african" == b.cuisine && (c += " african<br/>");"german" == b.cuisine && (c += " german<br/>");"mexican" == b.cuisine && (c += " mexican<br/>");"french" == b.cuisine && (c += " french<br/>");"indian" == b.cuisine && (c += " indian<br/>");"iranian" == b.cuisine && (c += " iranian<br/>");"lebanese" == b.cuisine && (c += " lebanese<br/>");"thai" == b.cuisine && (c += " thai<br/>");"balkan" == b.cuisine && (c += " balkan<br/>");"turkish" == b.cuisine && (c += " turkish<br/>");"bavarian" == b.cuisine && (c += " bavarian<br/>");"czech" == b.cuisine && (c += " czech<br/>");"portuguese" == b.cuisine && (c += " portuguese<br/>");"spanish" == b.cuisine && (c += " spanish<br/>");"japanese" == b.cuisine && (c += " japanese<br/>");"fish" == b.cuisine && (c += " fish<br/>");"brazilian" == b.cuisine && (c += " brazilian<br/>");"asian" == b.cuisine && (c += " asian<br/>");"mediterranean" == b.cuisine && (c += "mediterranean<br/>");"seafood" == b.cuisine && (c += " seafood<br/>");"ice_cream" == b.cuisine && (c += " ice cream<br/>");"burger" == b.cuisine && (c += " burger<br/>");"frozen_yogurt" == b.cuisine && (c += " frozen yogurt<br/>");
        "" == c && (c = b.cuisine + "<br/>");a += c;
    }return a;
},
    fnContentShipping = exports.fnContentShipping = function fnContentShipping(b) {
    var a = "";b.harbour = "yes";"yes" == b["access:tide"] && (a += "Access restricted by tide</br>");"yes" == b["access:swell"] && (a += "access restricted by swell</br>");"yes" == b["access:ice"] && (a += "access restricted by ice</br>");b.vhf_channel && (a += "UKW-Channel: " + b.vhf_channel + "</br>");b.mmsi && (a += "MMSI-Number: " + b.mmsi + "</br>");b["harbour:information"] && (a += "information :" + b["harbour:information"] + "</br>");"yes" == b.motorboat && (a += "motorboat allowed</br>");
    "no" == b.motorboat && (a += "motorboat prohibited </br>");b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");"yes" == b.intermittent && (a += "river intermittent dried out</br>");"yes" == b.tidal && (a += "tidal influence the flow</br>");b.draft && (a += " driving depth of water: " + b.draft + " m</br>");if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "operating: by hand<br/>"), "car" == b.operating && (a += "operating: by car, boat trailer<br/>"), "cable_winch" == b.operating && (a += "operating: with cable winch<br/>"), "travellift" == b.operating && (a += "operating: by travellift<br/>"), "crane" == b.man_made && (a += "by crane<br/>", b["crane:maxload"] && (a += "maxload: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "maximum permissible draught: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "maximum permissible length of a ship: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "accessible by vehicle<br/>");a += fnWreckInfo(b);if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) fahrzeit = b.duration, "" != fahrzeit && "undefined" != fahrzeit && null != fahrzeit && (a += "duration in hours : " + fahrzeit + "<br/>"), "yes" == b.motorcar && (a += "motorcars allowed<br/>"), "no" == b.motorcar && (a += "motorcars prohibited<br/>"), "no" == b.motor_vehicle && (a += "motor vehicles prohibited<br/>"), "yes" == b.motor_vehicle && (a += "motor vehicles allowed<br/>"), "yes" == b.vehicle && (a += "vehicles allowed<br/>"), "no" == b.vehicle && (a += "no vehicles<br/>"), "no" == b.bicycle && (a += "no bicycles<br/>"), "no" == b.bicycle && (a += "bicycles allowed<br/>"), "yes" == b.hgv && (a += "hgv allowed<br/>"), "no" == b.hgv && (a += "hgv prohibited<br/>"), "yes" == b.foot && (a += "pedestrian allowed<br/>"), "no" == b.foot && (a += "pedestrian prohibited <br/>"), "yes" == b.bicycle && (a += "cyclist allowed <br/>"), "no" == b.bicycle && (a += "cyclist prohibited <br/>"), "yes" == b["ferry:cable"] && (a += "cable ferry<br/>");if (b["seamark:light:1:colour"]) {
        var c = b["seamark:light:1:colour"];switch (c) {case "white":
                c = "white";break;case "red":
                c = "red";break;case "green":
                c = "green";break;case "blue":
                c = "blue";break;case "yellow":
                c = "yellow";break;case "amber":
                c = "amber";}a += "colour of light: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "light character: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "period: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "height: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "range: " + b["seamark:light:1:range"] + " sm<br/>"));if (b["seamark:light:colour"]) {
        c = b["seamark:light:colour"];switch (c) {case "white":
                c = "white";
                break;case "red":
                c = "red";break;case "green":
                c = "green";break;case "blue":
                c = "blue";break;case "yellow":
                c = "yellow";break;case "amber":
                c = "amber";}a += "colour of light: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "light character: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "height: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "range: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "period: " + b["seamark:light:period"] + "<br/>"));return a;
},
    fnContentHydrants = exports.fnContentHydrants = function fnContentHydrants(b) {
    var a = "";if ("fire_hydrant" == b.emergency) {
        var c = b["fire_hydrant:count"];"undefined" != c && null != c && "" != c && (a += "Number: " + c + "<br/>");c = b["fire_hydrant:diameter"];"undefined" != c && null != c && "" != c && (a += "Pipe diameter: " + c + " mm<br/>");c = b["fire_hydrant:pressure"];"undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Pressure in bar / Suction: Suction<br/>" : a + ("Pressure in bar / Suction: " + c + "<br/>"));c = b["fire_hydrant:position"];"undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Lane<br/>" : "parking_lot" == c ? a += "Position: Parking Lot<br/>" : "sidewalk" == c ? a += "Position: Sidewalk<br/>" : "green" == c && (a += "Position: Green<br/>"));c = b.water_volume;"undefined" != c && null != c && "" != c && (a += "Volume: " + c + "<br/>");c = b["fire_hydrant:awwa_class"];"undefined" != c && null != c && "" != c ? a += "AWWA Class: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Flow rate: " + c + "<br/>"));c = b.water_source;"undefined" != c && null != c && "" != c && "main" != c && (a += "Water source: " + c + "<br/>");c = b["couplings:type"];"undefined" != c && null != c && "" != c && (a += "Couplings type: " + c + "<br/>");c = b["couplings:diameter"];"undefined" != c && null != c && "" != c && (a += "Couplings diameter: " + c + "<br/>");c = b["pillar:type"];"dry_barrel" === c && (a += "Pillar type: " + c + "<br/>");"fire_hydrant" === b["disused:emergency"] && (a += "Currently disused");"" == a && (a = "No details available.");
    }return a;
},
    fnContentStreetsTraffic = exports.fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
    var a = "";"yes" == b["red_turn:right"] && (a += "red turn: allowed to turn to the right<br/>");
    "no" == b["red_turn:right"] && (a += "red turn: prohibited to turn to the right<br/>");b.bridge && (b.height && (a += "height: " + b.height + " m<br/>"), b.length && (a += "length: " + b.length + " m<br/>"), b.bridge_ref && (a += "bridge ref: " + b.bridge_ref + "<br/>"), b.start_date && (a += "start date: " + b.start_date + "</br>;"), b.maxweight && (a += "maxweight: " + b.maxweight + " t</br>"));b.highway && "yes" == b.toll && (a += "toll highway<br/>");"yes" == b["toll:hgv"] && (a += "HGV toll<br/>");if (b.surface) {
        var c = b.surface,
            a = a + "surface: ";switch (c) {case "grass":
                a += "grass<br/>";break;case "paved":
                a += "paved<br/>";break;case "asphalt":
                a += "asphalt<br/>";break;case "cobblestone":
                a += "cobblestone<br/>";break;case "sett":
                a += "sett<br/>";break;case "concrete":
                a += "concrete<br/>";break;case "unpaved":
                a += "unpaved<br/>";break;case "paving_stones":
                a += "paving stones<br/>";break;case "compacted":
                a += "compacted<br/>";break;case "dirt":
                a += "dirt<br/>";break;case "fine_gravel":
                a += "fine gravel<br/>";break;case "grass_paver":
                a += "grass paver<br/>";break;case "gravel":
                a += "gravel<br/>";
                break;case "earth":
                a += "earth<br/>";break;case "ground":
                a += "ground<br/>";break;case "metal":
                a += "metal<br/>";break;case "mud":
                a += "mud<br/>";break;case "sand":
                a += "sand<br/>";break;case "wood":
                a += "wood<br/>";break;case "tartan":
                a += "tartan<br/>";break;case "artificial_turf":
                a += "artificial turf<br/>";break;case "clay":
                a += "clay<br/>";break;default:
                a += "unknown<br/>";}
    }"grade1" == b.tracktype && (a += "path surface: Solid. Usually a paved or heavily compacted hardcore surface.<br/>");"grade2" == b.tracktype && (a += "path surface: Mostly solid. Usually an unpaved track with surface of gravel mixed with a varying amount of sand, silt, and clay.<br/>");
    "grade3" == b.tracktype && (a += "path surface: Even mixture of hard and soft materials. Almost always an unpaved track.<br/>");"grade4" == b.tracktype && (a += "path surface: Mostly soft. Almost always an unpaved track prominently with soil/sand/grass, but with some hard materials, or compressed materials mixed in.<br/>");"grade5" == b.tracktype && (a += "path surface: Soft. Almost always an unpaved track lacking hard materials, uncompacted, with surface of soil/sand/grass.<br/>");"yes" == b.motorcycle && (a += "<br/>motorcyle allowed.<br/>");
    "no" == b.motorcycle && (a += "<br/>motorcycles prohibited.<br/>");"excellent" == b.trail_visibility && (a += "trail visibility: Unambiguous path or markers everywhere<br/>");"good" == b.trail_visibility && (a += "trail visibility: Next marker always visible, but sometimes has to be searched for.<br/>");"intermediate" == b.trail_visibility && (a += "trail visibility: Track mostly visible<br/>");"bad" == b.trail_visibility && (a += "trail visibility: Path sometimes invisible, route partly pathless<br/>");"horrible" == b.trail_visibility && (a += "trail visibility: Often pathless<br/>");"no" == b.trail_visibility && (a += "trail visibility: Mostly pathless<br/>");"hiking" == b.sac_scale && (a += "trail: Trail well cleared. (SAC Scale: T1 (yellow))</br>");"mountain_hiking" == b.sac_scale && (a += "trail: Trail with continuous line and balanced ascent (SAC Scale: T2 (red))</br>");"demanding_mountain_hiking" == b.sac_scale && (a += "trail: exposed sites may be secured with ropes or chains, possible need to use hands for balance (SAC Scale: T3 (red))</br>");"alphine_hiking" == b.sac_scale && (a += "trail: sometimes need for hand use to get ahead (SAC Scale: T4 (blue))</br>");"demanding_alphine_hiking" == b.sac_scale && (a += "trail: single plainly climbing up to second grade (SAC Scale: T5 (blue))</br>");"difficult_alpine_hiking" == b.sac_scale && (a += "trail: climbing up to second grade (SAC Scale: T6 (blue))</br>");b["mtb:name"] && (a += "cycleway :" + b["mtb:name"] + "</br>");"0" == b["mtb:scale"] && (a += "Mountainbikeroute: Very easy way - Gravel or packed earth. No particular difficulties. Mostly forest and meadow paths (highway=path). Sections with steps, rocks, or roots are not expected. Wide curves, easy to moderate slope. No special skills are needed to ride this. Easy to ride uphill.</br>Surface: solid and handy</br>Obstacles: no obstacles</br>Gradient: mild to moderate</br>Bends: wide</br>Driving skills: no special driving skills required</br>");
    "1" == b["mtb:scale"] && (a += "Mountainbikeroute: Smaller obstacles like roots and small stones. Erosion damage may increase difficulty. Soil may be loose in places. Tight turns, but no hairpin turns. Riding requires care and attention, but no special skill. Obstacles can be ridden over. Difficult to ride uphill.</br>Surface: loose surface possible, small roots and stones</br>Obstacles: small obstacles, water gutter, erosion damage</br>Gradient: < 40%</br>Bends: wide</br>Driving skills: basic driving skills required, obstacles can be passed over</br>");
    "2" == b["mtb:scale"] && (a += "Mountainbikeroute: Obstacles such as large rocks and stones. Soil is often loose.  Steps are expected. Wider hairpin turns, steepness of up to 70%. Requires some advanced riding skills. Only very skilled riders can go uphill on this.</br>Surface: surface usually not compacted, larger roots and stones.</br>Obstacles: plain steps and stairs</br>Gradient: < 70%</br>Bends: easy hairpins</br>Driving skills: advanced driving skills required</br>");"3" == b["mtb:scale"] && (a += "Mountainbikeroute: Many sections with large obstacles such as boulders and large roots. Many hairpin and off-balance turns. Slippery surface and talus sections may be found. The surface may be very slippery. Constant concentration and very good skills needed. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
    "4" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult, with sections having large boulders and roots. Frequent loose debris. Very steep sections with very tight hairpin turns and high steps that will cause the chainring to hit the ground. Some trials techniques will be necessary. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
    "5" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult with big boulder fields and debris, and landslides. Speed must be carried for counter-ascents. If at all only short passages are available for accelerating and braking. Fallen trees may make very steep passages even more difficult. Very few Mountainbikers can actually ride at this level. Most will have to push.</br>Surface: counter-ascents / rocks or slippery ground, loose scree / path is rather a Alpine hiking (>T4) path</br>Obstacles: drags, combinations of hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins with obstacles</br>Driving skills: excellent bike control with special trial skills required, moving the front and rear wheel is limited</br>");
    "6" == b["mtb:scale"] && (a += "Mountainbikeroute: Classify ways with 6 that are not rideable at all for a mtbiker. E.g. Chains or stemples (metal rungs) on a via ferrata or simply unsecured alpine pathes that are not even partly rideable for the very best mtbikers (using trial techniques). Steepness is often >45\xB0. If used for single points, then this highlights exceptionally difficult spots. Often spotting is impossible and falling may be lethal.</br>Surface: Path is rather a Alpine hiking (T5 or T6) path or bare rock without visible path.</br>Obstacles: Steps over 2m, rock faces,...</br>Gradient: >100%</br>Bends: no bends can be distinguished as such.</br>Driving skills: only the very best trial specialists or vertriders will try to ride these spots. Walking the place first to find a way to clear is needed.</br>");
    "10" == b.maxspeed && (a += 'traffic-calmed sector: maxspeed 10 Km/h and "right over left"</br>');"30" == b.maxspeed && (a += 'traffic-calmed sector: "right over left" and maxspeed 30 Km/h</br>');"50" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");"70" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");"80" == b.maxspeed && (a += "maxspeed 80 Km/h</br>");"100" == b.maxspeed && (a += "maxspeed  100 Km/h</br>");"no" == b.overtaking && (a += "No overtaking!</br>");"yes" == b.noexit && (a += "noexit</br>");"yes" == b.oneway && (a += "oneway</br>");"designated" == b.priority_road && (a += "priority road designated</br>");"end" == b.priority_road && (a += "priority road ends</br>");"emergency_bay" == b.highway && (a += "emergency bay</br>");"yes" == b.traffic_calming && (a += "traffic calming</br>");"bump" == b.traffic_calming && (a += "bump</br>");"chicane" == b.traffic_calming && (a += "chicane</br>");"choker" == b.traffic_calming && (a += "choker</br>");"cushion" == b.traffic_calming && (a += "cushion</br>");"hump" == b.traffic_calming && (a += "hump</br>");"island" == b.traffic_calming && (a += "island</br>");
    "rumble_strip" == b.traffic_calming && (a += "rumble strip</br>");"table" == b.traffic_calming && (a += "table</br>");if ("parking" == b.amenity && ("yes" == b.fee && (a += "fee required<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
        var d = "unkown";"yes" != c && (d = c);a += "ladies parking spaces (numbers: " + d + ") <br/>";
    }b.park_ride && ("bus" == b.park_ride && (a += "bus connection<br/>"), "tram" == b.park_ride && (a += "tram connection<br/>"), "unknown" == b.park_ride && (a += "park ride unkown<br/>"));b["railway:position"] && (a += "railway<br/>position: " + b["railway:position"] + "<br/>");b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");return a;
},
    fnContentSports = exports.fnContentSports = function fnContentSports(b) {
    var a = "";"9pin" == b.sport && (a += "possible sport : 9pin<br/>");"10pin" == b.sport && (a += "possible sport : 10pin<br/>");"american_football" == b.sport && (a += "possible sport : american football<br/>");"aikido" == b.sport && (a += "possible sport : aikido<br/>");"archery" == b.sport && (a += "possible sport : archery<br/>");"athletics" == b.sport && (a += "possible sport : athletics<br/>");"australian_football" == b.sport && (a += "possible sport : australian football<br/>");"base" == b.sport && (a += "possible sport : base<br/>");"badminton" == b.sport && (a += "possible sport : badminton<br/>");"baseball" == b.sport && (a += "possible sport : baseball<br/>");"basketball" == b.sport && (a += "possible sport : basketball<br/>");"beachvolleyball" == b.sport && (a += "possible sport : beachvolleyball<br/>");"bmx" == b.sport && (a += "possible sport : bmx<br/>");"boules" == b.sport && (a += "possible sport : boules<br/>");"boule" == b.sport && (a += "possible sport : boule<br/>");
    "bowls" == b.sport && (a += "possible sport : bowls<br/>");"boxing" == b.sport && (a += "possible sport : boxing<br/>");"canadian_football" == b.sport && (a += "possible sport : canadian football<br/>");"canoe" == b.sport && (a += "possible sport : canoe<br/>");"chess" == b.sport && (a += "possible sport : chess<br/>");"cliff_diving" == b.sport && (a += "possible sport : cliff diving<br/>");"climbing" == b.sport && (a += "possible sport : climbing<br/>");"climbing_adventure" == b.sport && (a += "possible sport : adventure climbing<br/>");"cricket" == b.sport && (a += "possible sport : cricket<br/>");"cricket_nets" == b.sport && (a += "possible sport : cricket nets<br/>");"croquet" == b.sport && (a += "possible sport : croquet<br/>");"curling" == b.sport && (a += "possible sport : curling<br/>");"cycling" == b.sport && (a += "possible sport : cycling<br/>");if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";"dog_racing" == b.sport && (a += "possible sport : dog racing<br/>");"fencing" == b.sport && (a += "possible sport : fencing<br/>");"equestrian" == b.sport && (a += "possible sport : equestrian<br/>");
    "football" == b.sport && (a += "possible sport: american football<br/>");"free_flying" == b.sport && (a += "possible sport: free flying<br/>");"gaelic_games" == b.sport && (a += "possible sport: gaelic games<br/>");"golf" == b.sport && (a += "possible sport: golf<br/>");"gymnastics" == b.sport && (a += "possible sport: gymnastik<br/>");"hockey" == b.sport && (a += "possible sport: hockey<br/>");"horseshoes" == b.sport && (a += "possible sport: horseshoes<br/>");"horse_racing" == b.sport && (a += "possible sport: horse racing<br/>");"ice_stock" == b.sport && (a += "possible sport: ice stock<br/>");"judo" == b.sport && (a += "possible sport: judo<br/>");"karting" == b.sport && (a += "possible sport: karting<br/>");"kitesurfing" == b.sport && (a += "possible sport: kitesurfing<br/>");"korfball" == b.sport && (a += "possible sport: korfball<br/>");"motor" == b.sport && (a += "possible sport: motor<br/>");"multi" == b.sport && (a += "possible sport: multi<br/>");"obstacle_course" == b.sport && (a += "possible sport: obstacle course<br/>");"orienteering" == b.sport && (a += "possible sport: orienteering<br/>");
    "paddle_tennis" == b.sport && (a += "possible sport: paddle-tennis<br/>");"paragliding" == b.sport && (a += "possible sport: paragliding<br/>");"Pelota" == b.sport && (a += "possible sport: Pelota<br/>");"rasquet" == b.sport && (a += "possible sport: racquet<br/>");"rowing" == b.sport && (a += "possible sport: rowing<br/>");"rugby_league" == b.sport && (a += "possible sport: rugby league<br/>");"rugby_union" == b.sport && (a += "possible sport: rugby union<br/>");"running" == b.sport && (a += "possible sport: running<br/>");"scuba_diving" == b.sport && (a += "possible sport: scuba diving<br/>");"shooting" == b.sport && (a += "possible sport: shooting<br/>");"skating" == b.sport && (a += "possible sport: skating<br/>");"skateboard" == b.sport && (a += "possible sport: skateboard<br/>");"skiing" == b.sport && (a += "possible sport: skiing<br/>");"soccer" == b.sport && (a += "possible sport: soccer<br/>");"surfing" == b.sport && (a += "possible sport: surfing<br/>");"swimming" == b.sport && (a += "possible sport: swimming<br/>");"table_tennis" == b.sport && (a += "possible sport: table tennis<br/>");
    "taekwondo" == b.sport && (a += "possible sport: taekwondo<br/>");"team_handball" == b.sport && (a += "possible sport: team handball<br/>");"tennis" == b.sport && (a += "possible sport: tennis<br/>");"toboggan" == b.sport && (a += "possible sport: toboggan<br/>");"volleyball" == b.sport && (a += "possible sport: volleyball<br/>");"water_ski" == b.sport && (a += "possible sport: water ski<br/>");"weightlifting" == b.sport && (a += "possible sport: weightlifting<br/>");"wrestling" == b.sport && (a += "possible sport: wrestling<br/>");return a;
};
function fnArztInfo(b) {
    var a = "",
        c = "",
        d = b["healthcare:speciality"];"" != d && ("general" == d && (c += "general<br/>"), "allergology" == d && (c += "allergology<br/>"), "anaesthetics" == d && (c += "anaesthetics<br/>"), "biochemistry" == d && (c += "biochemistry<br/>"), "biological_haematology" == d && (c += "biological haematology<br/>"), "biology" == d && (c += "biology<br/>"), "cardiology" == d && (c += "cardiology<br/>"), "cardiac_surgery" == d && (c += "cardiac surgery<br/>"), "child_psychiatry" == d && (c += "child psychiatry<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "dental-, oral-, maxillo- and facial-surgery<br/>"), "dermatology" == d && (c += "dermatology<br/>"), "dermatovenereology" == d && (c += "dermatovenereology<br/>"), "diagnostic_radiology" == d && (c += "diagnostic radiology<br/>"), "emergency" == d && (c += "emergency<br/>"), "endocrinology" == d && (c += "endocrinology<br/>"), "gastroenterological_surgery" == d && (c += "gastroenterological surgery<br/>"), "gastroenterology" == d && (c += "gastroenterology<br/>"), "geriatrics" == d && (c += "geriatrics<br/>"), "gynaecology" == d && (c += "gynaecology<br/>"), "haematology" == d && (c += "haematology<br/>"), "hepatology" == d && (c += "hepatology<br/>"), "immunology" == d && (c += "immunology<br/>"), "infectious_diseases" == d && (c += "infectious diseases<br/>"), "intensive" == d && (c += "intensive<br/>"), "internal" == d && (c += "internal<br/>"), "maxillofacial_surgery" == d && (c += "maxillofacial surgery<br/>"), "nephrology" == d && (c += "nephrology<br/>"), "neurology" == d && (c += "neurology<br/>"), "neurophysiology" == d && (c += "neurophysiology<br/>"), "neuropsychiatry" == d && (c += "neuropsychiatry<br/>"), "neurosurgery" == d && (c += "neurosurgery<br/>"), "nuclear" == d && (c += "nuclear<br/>"), "occupational" == d && (c += "occupational <br/>"), "oncology" == d && (c += "oncology<br/>"), "ophthalmology" == d && (c += "ophthalmology<br/>"), "orthopaedics" == d && (c += "orthopaedics<br/>"), "otolaryngology" == d && (c += "otolaryngology<br/>"), "paediatric_surgery" == d && (c += "paediatric surgery<br/>"), "paediatrics" == d && (c += "paediatrics<br/>"), "palliative" == d && (c += "palliative<br/>"), "physiatry" == d && (c += "physiatry<br/>"), "plastic_surgery" == d && (c += "plastic surgery<br/>"), "proctology" == d && (c += "proctology<br/>"), "psychiatry" == d && (c += "psychiatry<br/>"), "pulmonology" == d && (c += "pulmonology<br/>"), "radiology" == d && (c += "radiology<br/>"), "radiotherapy" == d && (c += "radiotherapy<br/>"), "rheumatology" == d && (c += "rheumatology<br/>"), "stomatology" == d && (c += "stomatology<br/>"), "surgery" == d && (c += "surgery<br/>"), "surgical_oncology" == d && (c += "surgical oncology<br/>"), "thoracic_surgery" == d && (c += "thoracic surgery<br/>"), "transplant" == d && (c += "transplant<br/>"), "trauma" == d && (c += "trauma<br/>"), "tropical" == d && (c += "tropical<br/>"), "urology" == d && (c += "urology<br/>"), "vascular_surgery" == d && (c += "vascular surgery<br/>"), "venereology" == d && (c += "venereology<br/>"), "acupuncture" == d && (c += "acupuncture<br/>"), "naturopathy" == d && (c += "naturopathy<br/>"), "chiropractic" == d && (c += "chiropractic <br/>"), "homeopathy" == d && (c += "homeopathy<br/>"), "osteopathy" == d && (c += "osteopathy<br/>"));"" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "family medicine<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "emergency medicine<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "anaesthesiology<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "dermatology<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "ear, nose, throat (ENT specialist)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "occupational medicine<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "internal medicine<br/>"), "yes" == b["health_specialty:neurology"] && (c += "neurology<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "ophthalmology<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "palliative medicine<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "psychiatry<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "gynaecology<br/>"), "yes" == b["health_specialty:urology"] && (c += "urology<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "pain medicine<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "environmental medicine<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "intensive care medicin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "paediatrics<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "physiatry<br/>"), "yes" == b["health_specialty:radiology"] && (c += "radiology<br/>"), "yes" == b["health_specialty:general"] && (c += "general<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "occupational therapy<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "pulmonology<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "acupuncture<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "orthopaedics<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "chiropractic<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "sports medicine<br/>"));"" != c && (a = a + "subjects: " + ('<div class="c4g_open_text">' + c + "</div>"));return a;
}
function fnKraftwerkInfo(b) {
    var a = "";if (b["generator:method"]) {
        a += "method of generation: ";switch (b["generator:method"]) {case "combustion":
                a += "combustion";break;case "thermal":
                a += "thermal";break;case "pumping":
                a += "pumping";break;case "photovoltaic":
                a += "photovoltaic";break;case "gasification":
                a += "gasification";break;case "anaerobic_digestion":
                a += "anaerobic digestion";break;case "pyrolysis":
                a += "pyrolysis";break;case "fission":
                a += "fission";break;case "fusion":
                a += "fusion";break;default:
                a += "unknown<br/>";}a += "<br/>";
    }if (b.power_source) {
        a += "power source: ";switch (b.power_source) {case "photovoltaic":
                a += "photovoltaic";break;default:
                a += "unknown<br/>";}a += "<br/>";
    }b["generator:output:electricity"] && (a += "electricity generation: " + b["generator:output:electricity"] + "<br/>");b["generator:output:heat"] && (a += "heat generation: " + b["generator:output:heat"] + "<br/>");b["generator:output:cold"] && (a += "cold generation: " + b["generator:output:cold"] + "<br/>");b["generator:output"] && (a += "output: " + b["generator:output"] + "<br/>");
    b["generator:output:hot_air"] && (a += "hot-air generation: " + b["generator:output:hot_air"] + "<br/>");b["generator:output:cold_water"] && (a += "cold water generation: " + b["generator:output:cold_water"] + "<br/>");b["generator:output:cold_air"] && (a += "cold air generation: " + b["generator:output:cold_air"] + "<br/>");b["generator:output:compressed_air"] && (a += "compressed air generation: " + b["generator:output:compressed_air"] + "<br/>");b["generator:output:steam"] && (a += "steam generation: " + b["generator:output:steam"] + "<br/>");b["generator:output:vacuum"] && (a += "vacuum generation: " + b["generator:output:vacuum"] + "<br/>");b["generator:output:battery_charging"] && (a += "battery charging: " + b["generator:output:battery_charging"] + "<br/>");"PWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-1" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-2" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-3" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-4" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-5" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-6" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"PHWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"GCR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"FBR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"RBMK-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"RBMK-1500" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"VVER" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"CANDU" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"CPR-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"EPR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
    "tokamak" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"stellarator" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"ICF" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"cold-fusion" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis wind turbine<br/>");"wind_turbine" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator method: vertical axis wind turbine<br/>");"francis_turbine" == b["generator:type"] && (a += "generator type: francis-turbine<br/>");"kaplan_turbine" == b["generator:type"] && (a += "generator type: kaplan-turbine<br/>");"pelton_turbine" == b["generator:type"] && (a += "generator type: pelton-turbine<br/>");"stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis sea current power station<br/>");"stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator type: vertical axis sea current power station<br/>");"steam_turbine" == b["generator:type"] && (a += "generator type: steam turbine<br/>");"heat_pump" == b["generator:type"] && (a += "generator type: heat pump<br/>");"solar_thermal_collector" == b["generator:type"] && (a += "generator type: solar thermal collector<br/>");"solar_photovoltaic_panel" == b["generator:type"] && (a += "generator type: solar photovoltaic panel<br/>");"steam_generator" == b["generator:type"] && (a += "generator type: steam generator<br/>");"gas_turbine" == b["generator:type"] && (a += "generator type: gas turbine<br/>");"combined_cycle" == b["generator:type"] && (a += "generator type: combined cycle<br/>");"reciprocating_engine" == b["generator:type"] && (a += "generator type: reciprocating engine<br/>");return a;
}
function fnWertstoffinfo(b) {
    var a = "";if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "glass container</br>"), "yes" == b["recycling:shoes"] && (a += "shoe container</br>"), "yes" == b["recycling:cooking_oil"] && (a += "recycling of cooking oil</br>"), "yes" == b["recycling:paper"] && (a += "recycling of paper</br>"), "yes" == b["recycling:engine_oil"] && (a += "recycling of engine oil</br>"), "yes" == b["recycling:clothes"] && (a += "recycling of clothes</br>"), "yes" == b["recycling:car_batteries"] && (a += "recycling of car batteries</br>"), "yes" == b["recycling:cans"] && (a += "recycling of cans</br>"), "yes" == b["recycling:scrap_metal"] && (a += "recycling of scrap metal</br>"), "yes" == b["recycling:plastic"] && (a += "recycling of plastic</br>"), "yes" == b["recycling:batterries"] && (a += "recycling of batterries</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "recycling of plastic bottles</br>"), "yes" == b["recycling:green_waste"] && (a += "recycling of green waste</br>"), "yes" == b["recycling:hardcore"] && (a += "recycling of hardcore</br>");return a;
}
var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
    var a = "";b.width && (a += "width: " + b.width + " m<br/>");b.height && (a += "height: " + b.height + " m<br/>");b.maxwidth && (a += "maxwidth: " + b.maxwidth + " m<br/>");b.maxheight && (a += "maxheight: " + b.maxheight + " m<br/>");b.maxweight && (a += "maxweight: " + b.maxweight + " t<br/>");b.maxspeed && (a += "maxspeed: " + b.maxspeed + " km/h<br/>");b.min_age && (a += "minimum age: " + b.min_age + "<br/>");b.max_age && (a += "maximum age: " + b.max_age + "<br/>");"yes" == b.nudism && (a += "nudism<br/>");"yes" == b.ruins && (a += "ruins<br/>");b.ele && (a += "height above sea level: " + b.ele + " m<br/>");b["xmas:day_date"] && (a += "period from - till: " + b["xmas:day_date"] + "<br/>");b["rotor:diameter"] && (a += "diameter of rotor: " + b["rotor:diameter"] + " m<br/>");b["xmas:note"] && (a += "information: " + b["xmas:note"] + "<br/>");"port" == b["seamark:beacon_lateral:category"] && (a += "port<br/>");"starboard" == b["seamark:beacon_lateral:category"] && (a += "starboard<br/>");"yes" == b["service:bicycle:retail"] && (a += "retail bicycles<br/>");"yes" == b["service:bicycle:repair"] && (a += "repair bicycles<br/>");"yes" == b["service:bicycle:rental"] && (a += "rental bicycles<br/>");"yes" == b["service:bicycle:pump"] && (a += "use of a pump is possible<br/>");"yes" == b["service:bicycle:diy"] && (a += "diy is possible<br/>");"yes" == b["service:bicycle:cleaning"] && (a += "cleaning bicycles<br/>");"yes" == b["service:bicycle:second_hand"] && (a += "sale of second hand bicycles<br/>");"yes" == b["service:bicycle:charging"] && (a += "charging electric bikes is possible<br/>");"yes" == b.cafe && (a += "cafe<br/>");"yes" == b.breakfast && (a += "breakfast<br/>");"yes" == b.snack && (a += "snack<br/>");"yes" == b.indoor_seating && (a += "indoor seating<br/>");"yes" == b.outdoor_seating && (a += "outdoor seating<br/>");"yes" == b.self_service && (a += "self service<br/>");"yes" == b.bakehouse && (a += "bakehouse<br/>");"yes" == b.pastry_shop && (a += "pastry shop<br/>");"yes" == b.fair_trade && (a += "fair trade<br/>");"only" == b.fair_trade && (a += "only fair trade<br/>");"no" == b.fair_trade && (a += "no fair trade<br/>");return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
    var a = "";if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");"yes" == b.dispensing && (a += "pharmacy with dispensing<br/>");"abused" == b["social_facility:for"] && (a += "social facility for: abused people<br/>");"child" == b["social_facility:for"] && (a += "social facility for: children<br/>");"disabled" == b["social_facility:for"] && (a += "social facility for: disabled people<br/>");
    "diseased" == b["social_facility:for"] && (a += "social facility for: diseased people<br/>");"drug_addicted" == b["social_facility:for"] && (a += "social facility for: drug addicted people<br/>");"homeless" == b["social_facility:for"] && (a += "social facility for: homeless<br/>");"juvenile" == b["social_facility:for"] && (a += "social facility for: juvenile and teenager<br/>");"mental_health" == b["social_facility:for"] && (a += "social facility for: people with mental health problems<br/>");"migrant" == b["social_facility:for"] && (a += "social facility for: migrants<br/>");"orphan" == b["social_facility:for"] && (a += "social facility for: orphans<br/>");"senior" == b["social_facility:for"] && (a += "social facility for: seniors<br/>");"underprivileged" == b["social_facility:for"] && (a += "social facility for: underprivileged people<br/>");"unemployed" == b["social_facility:for"] && (a += "social facility for: unemployed<br/>");"victim" == b["social_facility:for"] && (a += "social facility for: victims<br/>");return a;
};
function fnAdditionalBuildingInfos(b) {
    var a = "";b["building:color"] && (a += "building color: " + b["building:color"] + "</br>");b["building:height"] && (a += "building height: " + b["building:height"] + " m</br>");b["building:level"] && (a += "level: " + b["building:level"] + "</br>");b["building:part"] && (a += "building part: " + b["building:part"] + "</br>");b["roof:color"] && (a += "roof color: " + b["roof:colour"] + "</br>");b["roof:shape"] && (a += "roof shape: " + b["roof:shape"] + "</br>");b["roof:height"] && (a += "roof height: " + b["roof:height"] + " m</br>");b["roof:material"] && (a += "roof material: " + b["roof:material"] + " </br>");b["roof:orientation"] && (a += "roof orientation: " + b["roof:orientation"] + " </br>");b["roof:direction"] && (a += "roof direction: " + b["roof:direction"] + " </br>");b["building:type"] && (a += "building type: " + b["building:type"] + "</br>");return a;
}
function fnSicherheitAdditional(b) {
    var a = "";"surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "indoor surveillance"), "outdoor" == b.surveillance && (a += "outdoor surveillance"), "public" == b.surveillance && (a += "public surveillance"), "camera" == b["surveillance:type"] && (a += "type of surveillance: camera"), "guard" == b["surveillance:type"] && (a += "type of surveillance: guard"), "ALPR" == b["surveillance:type"] && (a += "type of surveillance: ALPR"), "town" == b["surveillance:zone"] && (a += "zone of surveillance: town"), "parking" == b["surveillance:zone"] && (a += "zone of surveillance: parking"), "traffic" == b["surveillance:zone"] && (a += "zone of surveillance: traffic"), "shop" == b["surveillance:zone"] && (a += "zone of surveillance: shop"), "bank" == b["surveillance:zone"] && (a += "zone of surveillance: bank"), "building" == b["surveillance:zone"] && (a += "zone of surveillance: building"));return a;
}
function fnWreckInfo(b) {
    var a = "";"wreck" == b.historic && (b["wreck:date_sunk"] && (a += "sunk: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "depth: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "clearance: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "commissioned: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "gross tonnage: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "length: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "width: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "cargo: timber<br/>" : "coal" == b["wreck:cargo"] ? a + "cargo: coal<br/>" : a + ("cargo: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: yes<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: no<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: yes<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: no<br/>"), "yes" == b.access && (a += "accessible<br/>"), "no" == b.access && (a += "no access possible<br/>"), "permit_required" == b.access && (a += "permit required for acces<br/>"));return a;
}
function fnKlosterAdditional(b) {
    var a = "";if (b["monastery:type"]) switch (b["monastery:type"]) {case "monastery":
            a += "type: monastery<br/>";break;case "convent":
            a += "type: convent<br/>";break;case "canonry":
            a += "type: canonry<br/>";break;case "commandry":
            a += "type: commandry<br/>";break;case "hermitage":
            a += "type: hermitage<br/>";break;default:
            a += "type: unknown<br/>";}b["community:gender"] && ("male" == b["community:gender"] && (a += "gender: male<br/>"), "female" == b["community:gender"] && (a += "gender: female<br/>"));
    b.religious_rank && ("abbey" == b.religious_rank ? a += "religious rank: abbey<br/>" : "abbey" == b.religious_rank && (a += "religious rank: abbey<br/>"));"yes" == b.shrine && (a += "feature: shrine<br/>");"yes" == b.sanctuary && (a += "feature: sanctuary<br/>");if (b.religion) switch (b.religion) {case "animist":
            a += "religion: animist<br/><br/>";break;case "bahai":
            a += "religion: bahai<br/>";break;case "buddhist":
            a += "religion: buddhist<br/>";break;case "christian":
            a += "religion: christian<br/>";break;case "hindu":
            a += "religion: hindu<br/>";
            break;case "IglesiaNiCristo":
            a += "religion: IglesiaNiCristo<br/>";break;case "jain":
            a += "religion: jain<br/>";break;case "jewish":
            a += "religion: jewish<br/>";break;case "multifaith":
            a += "religion: multifaith<br/>";break;case "muslim":
            a += "religion: muslim<br/>";type += "Mosque<br/>";break;case "pagan":
            a += "religion: pagan<br/>";break;case "pastafarian":
            a += "religion: pastafarian<br/>";break;case "scientologist":
            a += "religion: scientologist<br/>";break;case "shinto":
            a += "religion: shinto<br/>";break;case "sikh":
            a += "religion: sikh<br/>";break;case "spiritualist":
            a += "religion: spiritualist<br/>";break;case "taoist":
            a += "religion: taoist<br/>";break;case "unitarian":
            a += "religion: unitarian<br/>";break;case "yazidi":
            a += "religion: yazidi<br/>";break;case "zoroastrian":
            a += "eligion: zoroastrian<br/>";break;default:
            a += "religion: unknown<br/>";}if (b.denomination) switch (b.denomination) {case "anglican":
            a += "denomination: Anglican<br/><br/>";break;case "baptist":
            a += "denomination: Baptist<br/>";break;case "catholic":
            a += "denomination: Catholic<br/>";
            break;case "roman_catholic":
            a += "denomination: Roman Catholic<br/>";break;case "old_catholic":
            a += "denomination: Old Catholic<br/>";break;case "greek_catholic":
            a += "denomination: Greek Catholic<br/>";break;case "evangelical":
            a += "denomination: Evangelical";case "jehovahs_witness":
            a += "denomination: Jehovahs Witness<br/>";break;case "lutheran":
            a += "denomination: Lutheran<br/>";break;case "mennonite":
            a += "denomination: Mennonite<br/>";break;case "messianic_jewish":
            a += "denomination: Messianic Jewish<br/>";
            break;case "methodist":
            a += "denomination: Methodist<br/>";break;case "mormon":
            a += "denomination: Mormon<br/>";break;case "new_apostolic":
            a += "denomination: New Apostolic<br/>";break;case "orthodox":
            a += "denomination: Orthodox<br/>";break;case "greek_orthodox":
            a += "denomination: Greek Orthodox<br/>";break;case "coptic_orthodox":
            a += "denomination: coptic orthodox<br/>";break;case "pentecostal":
            a += "denomination: pentecostal<br/>";break;case "presbyterian":
            a += "denomination: Presbyterian<br/>";break;case "protestant":
            a += "denomination: Protestant<br/>";break;case "quaker":
            a += "denomination: Quaker<br/>";break;case "reformed":
            a += "denomination: Reformed<br/>";break;case "russian_orthodox":
            a += "denomination: Russian-Orthodox<br/>";break;case "seventh_day_adventist":
            a += "denomination: Seventh Day Adventist<br/>";break;case "christian_community":
            a += "denomination: Christian Community<br/>";break;case "adventist":
            a += "denomination: Adventist<br/>";break;case "alliance":
            a += "denomination: Alliance<br/>";break;case "assemblies_of_god":
            a += "denomination: Assemblies of God<br/>";break;case "apostolic":
            a += "denomination: Apostolic<br/>";break;case "armenian_apostolic":
            a += "denomination: Armenian Apostolic<br/>";break;case "assyrian":
            a += "denomination: Assyrian<br/>";break;case "christ_scientist":
            a += "denomination: Christ Scientist<br/>";break;case "church_of_scotland":
            a += "denomination: Church of Scotland<br/>";break;case "czechoslovak_hussite":
            a += "denomination: Czechoslovak Hussite<br/>";break;case "dutch_reformed":
            a += "denomination: Dutch Reformed<br/>";
            break;case "exclusive_brethren":
            a += "denomination: Exclusive Brethren<br/>";break;case "foursquare":
            a += "denomination: Foursquare<br/>";break;case "kimbanguist":
            a += "denomination: Kimbanguist<br/>";break;case "living_waters_church":
            a += "denomination: Living Waters Church<br/>";break;case "mariavite":
            a += "denomination: Mariavite<br/>";break;case "maronite":
            a += "denomination: Maronite<br/>";break;case "moravian":
            a += "denomination: Moravian<br/>";break;case "nazarene":
            a += "denomination: Nazarene<br/>";break;
        case "nondenominational":
            a += "denomination: Nondenominational<br/>";break;case "old_believers":
            a += "denomination: Old Believers<br/>";break;case "polish_catholic":
            a += "denomination: Polish-Catholic<br/>";break;case "salvation_army":
            a += "denomination: Salvation Army<br/>";break;case "santo_daime":
            a += "denomination: Santo Daime<br/>";break;case "serbian_orthodox":
            a += "denomination: Serbisch-Orthodox<br/>";break;case "spiritism":
            a += "denomination: Spiritism<br/>";break;case "united":
            a += "denomination: United<br/>";
            break;case "united_church_of_christ":
            a += "denomination: United Church of Christ<br/>";break;case "united_free_church_of_scotland":
            a += "denomination: United Free Church of Scotland<br/>";break;case "united_methodist":
            a += "denomination: United Methodist<br/>";break;case "united_reformed":
            a += "denomination: United Reformed<br/>";break;case "uniting":
            a += "denomination: Uniting<br/>";break;case "church_of_sweden":
            a += "denomination: Church of Sweden<br/>";break;case "mission_covenant_church_of_sweden":
            a += "denomination: Mission Covenant Church Of Sweden<br/>";
            break;case "alternative":
            a += "denomination: alternative<br/>";break;case "ashkenazi":
            a += "denomination: ashkenazi<br/>";break;case "buchari":
            a += "denomination: buchari<br/>";break;case "conservative":
            a += "denomination: conservative<br/>";break;case "egalitarian":
            a += "denomination: egalitarian<br/>";break;case "hasidic":
            a += "denomination: hasidic<br/>";break;case "humanistic":
            a += "denomination: humanistic<br/>";break;case "kabbalah":
            a += "denomination: kabbalah<br/>";break;case "kabbalistic":
            a += "denomination: kabbalistic<br/>";
            break;case "karaite":
            a += "denomination: karaite<br/>";break;case "liberal":
            a += "denomination: liberal<br/>";break;case "lubavitch":
            a += "denomination: lubavitch<br/>";break;case "lubavitch_messianic":
            a += "denomination: lubavitch messianic<br/>";break;case "mizrachi_baghdadi":
            a += "denomination: mizrachi baghdadi<br/>";break;case "mizrachi_chida":
            a += "denomination: mizrachi chida<br/>";break;case "mizrachi_jerusalemite":
            a += "denomination: mizrachi jerusalemite<br/>";break;case "mizrachi_livorno":
            a += "denomination: mizrachi livorno<br/>";
            break;case "mizrachi_moroccan":
            a += "denomination: mizrachi moroccan<br/>";break;case "modern_orthodox":
            a += "denomination: modern orthodox<br/>";break;case "neo_orthodox":
            a += "denomination: neo orthodox<br/>";break;case "nondenominational":
            a += "denomination: nondenominational<br/>";break;case "orthodox":
            a += "denomination: orthodox<br/>";break;case "orthodox_ashkenaz":
            a += "denomination: orthodox ashkenaz<br/>";break;case "orthodox_sefard":
            a += "denomination: orthodox sefard<br/>";break;case "progressive":
            a += "denomination: progressive<br/>";break;case "reconstructionist":
            a += "denomination: reconstructionist<br/>";break;case "reform":
            a += "denomination: reform<br/>";break;case "renewal":
            a += "denomination: renewal<br/>";break;case "samaritan":
            a += "denomination: samaritan<br/>";break;case "sefardi":
            a += "denomination: sefardi<br/>";break;case "sefardi_amsterdam":
            a += "denomination: sefardi amsterdam<br/>";break;case "sefardi_london":
            a += "denomination: sefardi london<br/>";break;case "traditional":
            a += "denomination: traditional<br/>";
            break;case "ultra_orthodox":
            a += "denomination: ultra orthodox<br/>";break;case "unaffiliated":
            a += "denomination: unaffiliated<br/>";break;case "yemenite":
            a += "denomination: yemenite<br/>";break;case "yemenite_baladi":
            a += "denomination: yemenite baladi<br/>";break;case "yemenite_shami":
            a += "denomination: yemenite shami<br/>";break;case "ahmadiya":
            a += "denomination: ahmadiya<br/>";break;case "alaouite":
            a += "denomination: alaouite<br/>";break;case "druze":
            a += "denomination: druze<br/>";break;case "ibadi":
            a += "denomination: ibadi<br/>";break;case "ismaili":
            a += "denomination: ismaili<br/>";break;case "shia":
            a += "denomination: shia<br/>";break;case "sunni":
            a += "denomination: sunni<br/>";break;case "nichiren":
            a += "denomination: nichiren<br/>";break;case "jodo_shinshu":
            a += "denomination: jodo shinshu<br/>";break;case "jodo_shu":
            a += "denomination: jodo shu<br/>";break;case "vajrayana":
            a += "denomination: vajrayana<br/>";break;case "shingon_shu":
            a += "denomination: shingon shu<br/>";break;case "zen":
            a += "denomination: zen<br/>";
            break;case "thai_mahanikaya":
            a += "denomination: thai mahanikaya<br/>";break;case "thai_thammayut":
            a += "denomination: thai thammayut<br/>";break;case "asatru":
            a += "denomination: asatru<br/>";break;case "celtic":
            a += "denomination: celtic<br/>";break;case "greco_roman":
            a += "denomination: greco roman<br/>";break;case "wicca":
            a += "denomination: wicca<br/>";break;case "irani":
            a += "denomination: irani<br/>";break;case "parsi":
            a += "denomination: parsi<br/>";break;default:
            a += "unknown<br/>";}if (b.community) switch (b.community) {case "AA":
            a += "community (AA): Augustinians of the Assumption <br/>";break;case "BSCM":
            a += "community (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";break;case "CBMV":
            a += "community (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";break;case "CO":
            a += "community (CO): Oratorians<br/>";break;case "CMC":
            a += "community (CMC): Congregation of the Mother Co-Redemptrix<br/>";break;case "CRSP":
            a += "community (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";break;case "CSJ":
            a += "community (CSJ): Carmel Saint-Joseph<br/>";
            break;case "CSSP":
            a += "community (CSSP): Congr\xE9gation du Saint-Esprit<br/>";break;case "CSSR":
            a += "community (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";break;case "FCJM":
            a += "community (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";break;case "FMGB":
            a += "community (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";break;case "FMH":
            a += "community(FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";break;case "FMM":
            a += "community (FMM): Franciscaines missionnaires de Marie<br/>";break;case "FSC":
            a += "community (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";break;case "MCCI":
            a += "community (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";break;case "MSFS":
            a += "community (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";break;case "OCart":
            a += "community (OCart): Order of the Carthusians<br/>";break;case "OCC":
            a += "community (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";break;case "OCD":
            a += "community (OCD): Ordre des Carmes d\xE9chaux<br/>";break;case "OCSO":
            a += "community (OCSO): Trappists (lat. Ordo Cisterciensis Strictioris Observantiae)<br/>";break;case "OFM":
            a += "community (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";break;case "OFMCap":
            a += "community (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";break;case "OFMConv":
            a += "community (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";break;case "OFS":
            a += "community (OFS): Franciscans secular Third Order<br/>";
            break;case "OMI":
            a += "community (OMI): Oblats de Marie<br/>";break;case "OP":
            a += "community (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";break;case "OPraem":
            a += "community (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";break;case "OSB":
            a += "community (OSB): Order of Saint Benedict<br/>";break;case "OSC":
            a += "community (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";break;case "OSSS":
            a += "community (OSSS): Ordre de Sainte-Brigitte<br/>";break;case "OVM":
            a += "community (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";
            break;case "PSDP":
            a += "community (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";break;case "PFJ":
            a += "community (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";break;case "SDB":
            a += "community (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";break;case "SJ":
            a += "community (SJ): Compagnie de J\xE9sus<br/>";break;case "SOC":
            a += "community (SOC): Order of Cistercians<br/>";break;case "SSCC":
            a += "community (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";
            break;case "SSF":
            a += "community (SSF): Society of St Francis<br/>";break;case "SSJE":
            a += "community (SSJE): Society of St John the Evangelist<br/>";break;case "SSpS":
            a += "community (SSpS): Steyler Missionsschwestern<br/>";break;case "TOR":
            a += "community (TOR): Terzo Ordine Regolare di San Francesco<br/>";break;default:
            a += "unknown<br/>";}return a;
}var fnTestInfoPopup = function fnTestInfoPopup(b) {
    b = b.getProperties();var a = "",
        c;for (c in b) {
        a = a + c + "=" + b[c] + "<br/>";
    }return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-proxy.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-proxy.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 'namespace'


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapProxy = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gBaselayerController = __webpack_require__(/*! ./c4g-baselayer-controller */ "./Resources/public/js/c4g-baselayer-controller.js");

var _c4gLayerController = __webpack_require__(/*! ./c4g-layer-controller */ "./Resources/public/js/c4g-layer-controller.js");

var _c4gLocationstyleController = __webpack_require__(/*! ./c4g-locationstyle-controller */ "./Resources/public/js/c4g-locationstyle-controller.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapProxy = exports.MapProxy = function () {
  function MapProxy(options) {
    _classCallCheck(this, MapProxy);

    var mapData;

    this.options = jQuery.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    // c4g.maps.editorStyles = c4g.maps.editorStyles || {};

    //window.c4gMapsHooks.proxy_fillPopup = [];

    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];

    // add global hook for accessibility when there is no proxy reference
    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];
    window.c4gMapsHooks.proxy_baselayer_loaded = window.c4gMapsHooks.proxy_baselayer_loaded || [];

    this.baselayerIds = [];
    this.activeBaselayerId = undefined;
    this.layerIds = [];
    this.activeLayerIds = {};

    this.requestFunctions = {};
    this.request = {};

    this.baselayers_loaded = false;
    this.layers_loaded = false;

    mapData = this.options.mapController.data;
    this.mapData = mapData;
    this.mapId = mapData.id;

    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent;
    //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;
    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;
    this.clickObserverActive = true;

    // this.initialize();
  }

  _createClass(MapProxy, [{
    key: "initialize",
    value: function initialize() {
      var self, map;

      self = this;
      map = this.options.mapController.map;

      this.baselayerController = new _c4gBaselayerController.C4gBaselayerController(this);
      this.baselayerController.loadBaseLayers();
      this.layerController = new _c4gLayerController.C4gLayerController(this);
      this.layerController.loadLayers();
      this.locationStyleController = new _c4gLocationstyleController.C4gLocationStyleController(this);
      this.addPopUp();

      //TODO check this, nearly the same as below
      map.on('change:view', function () {
        // zoom-observer
        //
        map.getView().on('change:resolution', function () {
          var layerId, layer;

          // check layer zoom-bounds
          // @TODO: Use "self.activeLayerIds = false" ?
          for (layerId in self.activeLayerIds) {
            if (self.activeLayerIds.hasOwnProperty(layerId)) {
              layer = self.layerController.arrLayers[layerId];
              if (self.checkLayerIsActiveForZoom(layerId)) {
                if (layer.isInactive) {
                  self.layerController.showLayer(layerId);
                }
              } else {
                self.layerController.hideLayer(layerId, true);
              }
            }
          }

          // hooks
          _c4gMapsUtils.utils.callHookFunctions(self.hook_map_zoom);

          if (self.options.mapController.data.caching && map.getView().getZoom()) {
            _c4gMapsUtils.utils.storeValue('zoom', map.getView().getZoom());
          }
        }); // end of "zoom-observer"
      }); // end of "zoom-observer"

      // zoom-observer
      //
      map.getView().on('change:resolution', function () {
        var layerId, layer;

        // check layer zoom-bounds
        // @TODO: Use "self.activeLayerIds = false" ?
        for (layerId in self.activeLayerIds) {
          if (self.activeLayerIds.hasOwnProperty(layerId)) {
            layer = self.layerController.arrLayers[layerId];
            if (self.checkLayerIsActiveForZoom(layerId)) {
              if (layer.isInactive) {
                self.layerController.showLayer(layerId);
              }
            } else {
              self.layerController.hideLayer(layerId, true);
            }
          }
        }

        // hooks
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_map_zoom, self);

        if (self.options.mapController.data.caching && map.getView().getZoom()) {
          _c4gMapsUtils.utils.storeValue('zoom', map.getView().getZoom());
        }
      }); // end of "zoom-observer"

      map.getView().on('change:center', function (evt) {
        if (self.options.mapController.data.caching) {
          var coordinate = ol.proj.toLonLat(map.getView().getCenter());
          if (coordinate) {
            _c4gMapsUtils.utils.storeValue('lon', coordinate[0]);
            _c4gMapsUtils.utils.storeValue('lat', coordinate[1]);
          }
        }
        window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.map_center_changed, map.getView().getCenter());
      }); // end of "center-observer"

      // click-observer
      //
      map.on('click', function (clickEvent) {

        var feature, fFeatures, layer, popupInfos, currentZoom, minZoom, newCenter, geometry, coord, setPopup, styleFunc, styleCluster, objPopup;

        if (!self.clickObserverActive) {
          return false;
        }

        //ToDo check new function call with ol 4.3
        feature = map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
          return feature;
        });

        layer = map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
          return layer;
        });

        if (layer && layer.getStyle()) {
          styleFunc = layer.getStyle();
          if (typeof styleFunc === "function" && styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0']) {
            styleCluster = styleFunc(feature, currentZoom)['0'].clone();
            if (styleCluster && styleCluster.getImage()) {
              styleCluster.getImage().setScale(styleCluster.getImage().getScale() * 0.7);
            }
          }
        }

        fFeatures = feature ? feature.get('features') : false;
        if (!(fFeatures && fFeatures.length === 1)) {
          // cluster multiple POI
          if (fFeatures) {
            if (fFeatures[0].get('cluster_popup') == 1) {
              map.getView().setCenter(clickEvent.coordinate);
              currentZoom = map.getView().getZoom();
              minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');
              if (currentZoom >= minZoom) {
                setPopup = [];
                setPopup.content = '';
                setPopup.async = false;
                for (var i = 0; i < fFeatures.length; i++) {
                  setPopup.content = setPopup.content.concat(fFeatures[i].get('popup').content);
                }
                feature = fFeatures[0].clone();
                feature.set('popup', setPopup);
              } else {
                map.getView().setZoom(currentZoom + 1);
              }
            } else {

              feature.setStyle(new ol.style.Style({
                image: new ol.style.Circle({
                  fill: new ol.style.Fill({
                    opacity: 0
                  }),
                  radius: 0
                })
              }));
              feature = false;

              // animation
              map.getView().animate({
                start: +new Date(),
                duration: 1000,
                resolution: map.getView().getResolution(),
                center: [0, 0]
                //rotation: Math.PI
              });

              currentZoom = map.getView().getZoom();
              newCenter = map.getCoordinateFromPixel(clickEvent.pixel);
              minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');

              //ToDo remove with structure element param
              if (currentZoom >= minZoom) {

                //if (currentZoom >= map.getView().getMaxZoom()) {
                //open the cluster after zooming
                var pix = map.getView().getResolution();
                var max = fFeatures.length;
                var r = pix * 12 * (0.5 + max / 4);
                for (var i = 0; i < max; i++) {
                  var a = 2 * Math.PI * i / max;
                  if (max == 2 || max == 4) a += Math.PI / 4;
                  var p = [newCenter[0] + r * Math.sin(a), newCenter[1] + r * Math.cos(a)];
                  var coordinate = ol.proj.toLonLat(p);
                  var f = [];
                  f.push(fFeatures[i]);
                  var cf = new ol.Feature({
                    geometry: new ol.geom.Point(p),
                    features: f,
                    style: fFeatures[i].get('style')
                  });
                  layer.getSource().addFeature(cf);
                  map.getView().setCenter(newCenter);
                }
              } else {
                currentZoom += 1;
              }

              map.getView().setCenter(newCenter);
              map.getView().setZoom(currentZoom);
            }
          }
        } else if (fFeatures && fFeatures.length === 1) {
          feature = fFeatures[0];
        }

        if (self.options.mapController.controls.editor && self.options.mapController.controls.editor.isOpen()) {
          // do not show popup when editor is open
          if (feature && feature.get('projectId')) {
            // but call click hooks
            var result = _c4gMapsUtils.utils.callHookFunctions(self.hook_map_click, clickEvent);
            return false;
          }
        }
        popupInfos = {};
        if (feature && feature.get('popup')) {
          // single POI
          popupInfos = feature.get('popup');
        } else if (layer && layer.popup) {
          popupInfos = layer.popup;
        } else {
          feature = false;
        }
        if (feature && feature.get('loc_linkurl')) {
          if (self.options.mapController.data.link_newwindow === '1') {
            window.open(feature.get('loc_linkurl'));
          } else {
            window.open(feature.get('loc_linkurl'), "_self");
          }
        } else {
          if (feature && feature.get('zoom_onclick') && feature.get('zoom_onclick') != 0) {
            map.getView().setZoom(feature.get('zoom_onclick'));
            map.getView().setCenter(feature.getGeometry().getCoordinates());
          } else if (layer && layer.zoom_onclick && layer.zoom_onclick != 0) {
            map.getView().setZoom(layer.zoom_onclick);
            map.getView().setCenter(clickEvent.coordinate);
          }

          if (feature) {
            geometry = feature.getGeometry();
            if (geometry instanceof ol.geom.Point) {
              coord = geometry.getCoordinates();
            } else {
              coord = clickEvent.coordinate;
            }
            window.c4gMapsPopup.popup.setPosition(coord);

            if (popupInfos.content) {
              window.c4gMapsPopup.$content.html('');
              window.c4gMapsPopup.$popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
              window.c4gMapsPopup.spinner.show();

              if (popupInfos.async === false || popupInfos.async == '0') {
                objPopup = {};
                objPopup.popup = popupInfos;
                objPopup.feature = feature;
                objPopup.layer = layer;
                // Call the popup hook for plugin specific popup content
                if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                  _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                }
                self.setPopup(objPopup);
              } else {
                jQuery.ajax({
                  dataType: "json",
                  url: self.api_infowindow_url + '/' + popupInfos.content
                }).done(function (data) {
                  var popupInfo = {
                    async: popupInfos.async,
                    content: data.content,
                    popup: popupInfos.popup,
                    routing_link: popupInfos.routing_link
                  };

                  objPopup = {};
                  objPopup.popup = popupInfo;
                  objPopup.feature = feature;
                  objPopup.layer = layer;

                  // Call the popup hook for plugin specific popup content
                  if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                  }

                  self.setPopup(objPopup);
                });
              }
            } else {
              window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            }
          } else {
            window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
          }

          // hooks
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_map_click, clickEvent);
        }
      }); // end of "click-observer"
    } // end of "initial"*

  }, {
    key: "activateClickObserver",
    value: function activateClickObserver() {
      this.clickObserverActive = true;
    }
  }, {
    key: "deactivateClickObserver",
    value: function deactivateClickObserver() {
      this.clickObserverActive = false;
    }
  }, {
    key: "combine",
    value: function combine(proxy) {
      var func = function func(event) {
        proxy.combineLayers(proxy);
        proxy.options.mapController.map.un('postrender', func);
      };
      proxy.options.mapController.map.on('postrender', func);
    }
  }, {
    key: "setPopup",
    value: function setPopup(popupConfig) {
      var feature,
          layer,
          popupContent,
          router,
          routeButtonWrapper,
          routeFromButton,
          routeFromButtonSpan,
          routeToButton,
          routeToButtonSpan,
          routingHandler,
          self = this;

      feature = popupConfig.feature;
      layer = popupConfig.layer;

      popupContent = _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer);
      // @TODO: check for route-option & display "route-to"
      // NOTE: does not work async this way
      if (this.options.mapController.controls.router && popupConfig.popup.routing_link) {
        router = this.options.mapController.controls.router;

        routingHandler = function routingHandler(event) {
          if (self.options.mapController.activePortside !== router) {
            router.open();
          }

          router.setInput($(event.currentTarget).hasClass(_c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM), feature.getGeometry().getCoordinates());
        }; // end of "routingHandler()"

        routeButtonWrapper = document.createElement('div');
        routeButtonWrapper.className = _c4gMapsConstant.cssConstants.POPUP_ROUTE_WRAPPER;

        routeFromButton = document.createElement('button');
        routeFromButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM;
        jQuery(routeFromButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeFromButton);

        routeFromButtonSpan = document.createElement('span');
        routeFromButtonSpan.innerHTML = _c4gMapsI18n.langConstants.POPUP_ROUTE_FROM;
        routeFromButton.appendChild(routeFromButtonSpan);

        routeToButton = document.createElement('button');
        routeToButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);

        routeToButtonSpan = document.createElement('span');
        routeToButtonSpan.innerHTML = _c4gMapsI18n.langConstants.POPUP_ROUTE_TO;
        routeToButton.appendChild(routeToButtonSpan);
      }

      if (popupContent.trim() || router) {
        window.c4gMapsPopup.$content.html(popupContent);
        if (router) {
          window.c4gMapsPopup.$content.append(routeButtonWrapper);
        }
        if (feature.getGeometry() && feature.getGeometry() instanceof ol.geom.Point) {
          window.c4gMapsPopup.popup.setPosition(feature.getGeometry().getCoordinates());
        }
      } else {
        // hide popup if there is no valid content left
        window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
      }

      window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.LOADING);
      window.c4gMapsPopup.spinner.hide();
    } // end of "setPopup()"


  }, {
    key: "addPopUp",
    value: function addPopUp() {

      var popUpElement = void 0,
          popUpCloseElement = void 0,
          popUpContent = void 0,
          popup = void 0;

      popUpElement = document.createElement('div');
      popUpElement.setAttribute('id', 'c4g_popup_' + this.options.mapController.data.mapId);
      popUpElement.className = 'c4g-popup-wrapper';

      popUpCloseElement = document.createElement('button');
      popUpCloseElement.className = "c4g-popup-close c4g-icon";

      popUpContent = document.createElement('div');
      popUpContent.className = "c4g-popup-content";

      popUpElement.appendChild(popUpCloseElement);
      popUpElement.appendChild(popUpContent);

      jQuery(popUpCloseElement).click(function (event) {
        event.preventDefault();
        window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
      });

      popup = new ol.Overlay({
        element: popUpElement,
        positioning: 'bottom-left',
        offset: [-50, 0],
        autoPan: this.mapData.popupAutoPan ? true : false,
        autoPanAnimation: {
          duration: 0
        },
        autoPanMargin: 100
      });

      window.c4gMapsPopup = {};
      window.c4gMapsPopup.popup = popup;
      // attach a spinner to the popup
      window.c4gMapsPopup.spinner = new _c4gMapsMiscSpinner.Spinner({ target: popUpElement });

      this.options.mapController.map.addOverlay(popup);

      window.c4gMapsPopup.$popup = jQuery(window.c4gMapsPopup.popup.getElement());
      window.c4gMapsPopup.$content = jQuery('.c4g-popup-content', window.c4gMapsPopup.$popup);
      this.currentPopup = window.c4gMapsPopup;
    } // end of "addPopUp()"


    /**
     * @TODO: [checkLocationStyles description]
     *
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */

  }, {
    key: "checkLocationStyles",
    value: function checkLocationStyles(opt_options) {

      var options,
          neededLayerStyles,
          getLayerStyles,
          self = this;

      if (opt_options && (typeof opt_options === "undefined" ? "undefined" : _typeof(opt_options)) === "object") {
        options = opt_options;
      } else {
        options = {};
      }

      this.locationStyleController.arrLocStyles = this.locationStyleController.arrLocStyles || {};

      neededLayerStyles = [];
      getLayerStyles = function getLayerStyles(layers) {
        var i, element, index;

        // ToDo: Rekursion integrieren (test mit forum)
        for (index in layers) {
          if (layers.hasOwnProperty(index)) {
            element = layers[index];

            if (element.content) {
              for (i = 0; i < element.content.length; i += 1) {

                if (element.content[i]) {
                  if (element.content[i].locationStyle && element.content[i].locationStyle !== "0" && neededLayerStyles.indexOf(element.content[i].locationStyle) === -1 && (!self.locationStyleController.arrLocStyles[element.content[i].locationStyle] || self.locationStyleController.arrLocStyles[element.content[i].locationStyle].style === undefined)) {
                    neededLayerStyles.push(element.content[i].locationStyle);
                  }
                }
              }
            }
          }
        }
      };

      getLayerStyles(this.layerController.arrLayers);

      if (neededLayerStyles.length > 0) {
        this.locationStyleController.loadLocationStyles(neededLayerStyles, options);
      } else {
        if (options.done && typeof options.done === "function") {
          options.done();
        }
      }
    } // end of "checkLocationStyles()"

  }, {
    key: "combineLayers",
    value: function combineLayers(proxy) {

      var i,
          j,
          k,
          layerId,
          layers,
          contentDataLayer,
          contentData,
          layer,
          layerGroups = [],
          source,
          style,
          features = [],
          styles = [],
          oneFeature,
          feature,
          vectorSource,
          clusterSource,
          vectorLayer;

      if (proxy.options.mapController.data.cluster_all === '1') {
        contentData = proxy.options.mapController.data;
        for (i in proxy.activeLayerIds) {
          //loop to get all layers
          layers = c4g.maps.layers[i];

          if (layers.type === "gpx") {
            continue;
          }

          if (layers && layers.vectorLayer) {
            if (layers.vectorLayer.getLayers() && layers.vectorLayer.getLayers().getArray()[0] && layers.vectorLayer.getLayers().getArray()[0].getSource() && layers.vectorLayer.getLayers().getArray()[0].getSource().getFeatures().length > 0) {
              proxy.options.mapController.map.removeLayer(layers.vectorLayer);
            }

            contentDataLayer = layers.content;
            layers.vectorLayer.getLayers().content = contentDataLayer;
            layerGroups.push(layers.vectorLayer.getLayers());
          }
        }
        for (k = 0; k < layerGroups.length; k++) {
          //loop to extract features from layers
          if (layerGroups[k].getArray().length > 0) {
            layer = layerGroups[k].getArray();
            source = layer["0"].getSource();
            style = layer["0"].getStyle();

            oneFeature = true;
            feature = source.getFeatures();
            for (j = 0; j < feature.length; j++) {
              //loop over all features from a source
              if (feature[j].get("features")) {
                for (i = 0; i < feature[j].get("features").length; i++) {
                  //loop for clustered features
                  if (layerGroups[k].content[j]) {
                    style = this.locationStyleController.arrLocStyles[layerGroups[k].content[j].locationStyle];
                  } else if (layerGroups[k].content[0]) {
                    style = this.locationStyleController.arrLocStyles[layerGroups[k].content[0].locationStyle];
                  }

                  feature[j].get("features")[i].setStyle(style.style);
                  if (!feature[j].get("features")[i].get('popup')) {
                    feature[j].get("features")[i].set('popup', layer['0'].popup);
                  }
                }
                features.push(feature[j].get("features"));

                oneFeature = false;
              }
            }
            if (oneFeature) {
              //single not clustered feature
              if (feature.length >= 1) {
                if (!feature['0'].get('popup')) {
                  feature['0'].set('popup', layer.popup);
                }
                features.push(feature);
              }
            }
          }
        }

        vectorSource = new ol.source.Vector({
          projection: 'EPSG:3857'

        });

        for (i = 0; i < features.length; i++) {
          vectorSource.addFeatures(features[i]);
        }

        clusterSource = new ol.source.Cluster({
          distance: 40,
          //threshold: 2, //minimum element count
          source: vectorSource
        });
        var styleForCluster = function styleForCluster(feature, resolution) {
          if (feature && feature.get('features') && feature.get('features')['0'].getStyle()) {
            style = feature.get('features')['0'].getStyle()(feature);
            if (feature !== undefined && feature !== null && feature.self !== window) {
              var fFeatures = feature.get('features');
              var size = fFeatures.length;
              if (size > 1) {
                if (!style) {
                  style = [];
                }

                // calculate bubble-offset
                var iconOffset = [0, 0];
                if (style[0]) {
                  if (typeof style[0].getImage().getRadius === "function") {
                    var radius = parseInt(style[0].getImage().getRadius(), 10);
                    if (radius) {
                      iconOffset = [0, radius];
                    }
                  } else if (typeof style[0].getImage().getAnchor === "function") {
                    iconOffset = style[0].getImage().getAnchor() || [0, 0];
                  }
                }

                var fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity('4975A8', {
                  unit: '%',
                  value: 70
                });

                if (contentData.cluster_fillcolor) {
                  fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                    unit: '%',
                    value: 70
                  });
                }
                var fontcolor = contentData.cluster_fontcolor ? '#' + contentData.cluster_fontcolor : '#FFFFFF';

                style.push(new ol.style.Style({
                  text: new ol.style.Text({
                    text: "●",
                    font: "60px sans-serif",
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1],
                    fill: new ol.style.Fill({
                      color: fillcolor
                    })
                  })
                }));
                style.push(new ol.style.Style({
                  text: new ol.style.Text({
                    text: size.toString(),
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1] + 3,
                    fill: new ol.style.Fill({
                      color: fontcolor
                    })
                  })
                }));
              }
            }
          } else {
            if (feature && feature.get('features') && feature.get('features')['0'].getStyle()) {
              return feature.get('features')['0'].getStyle()(feature);
            } else {
              return null;
            }
          }
          return style;
        };

        //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);

        vectorLayer = new ol.layer.Vector({
          name: 'Cluster',
          source: clusterSource,
          style: styleForCluster

        });

        var allLayers = proxy.options.mapController.map.getLayers().getArray();
        var missingLayer = true;
        for (i = 0; i < allLayers.length; i++) {

          if (allLayers[i].clusters) {
            allLayers[i] = vectorLayer;
            missingLayer = false;
          }
        }
        if (missingLayer) {
          proxy.options.mapController.map.addLayer(vectorLayer);
        }
      }
    } //end of combineLayers


  }, {
    key: "checkLayerIsActiveForZoom",
    value: function checkLayerIsActiveForZoom(layerId, opt_zoom) {
      var layer, zoom, layerContent, locstyle;

      if (!this.layerController.arrLayers[layerId]) {
        return false;
      }

      layer = this.layerController.arrLayers[layerId];

      if (opt_zoom) {
        zoom = opt_zoom;
      } else if (this.options.mapController.map.getView().getZoom() > -1) {
        zoom = this.options.mapController.map.getView().getZoom();
      } else {
        zoom = false;
      }
      if (layer.zoom === undefined) {
        if (layer.content && layer.content.length > 0) {
          for (var i = 0; i < layer.content.length; i++) {
            layerContent = layer.content[i];
            if (layerContent.locationStyle) {
              locstyle = this.locationStyleController.arrLocStyles[layerContent.locationStyle];
              // TODO check all locstyles and take the most constraining zoom value
              if (locstyle) {
                layer.zoom = {};
                if (locstyle.maxzoom) {
                  layer.zoom.max = locstyle.maxzoom;
                }
                if (locstyle.minzoom) {
                  layer.zoom.min = locstyle.minzoom;
                }
                if (layer.zoom.max || layer.zoom.min) {
                  break;
                }
              }
            }
          }
        }
      }
      if (typeof zoom === "number" && layer.zoom && (layer.zoom.min > zoom || layer.zoom.max > 0 && layer.zoom.max < zoom)) {
        return false;
      }

      return true;
    } // end of "checkLayerIsActive()"

  }]);

  return MapProxy;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-utils.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsControlZoomlevel = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");

var _c4gMapsPopupInfoDe = __webpack_require__(/*! ./c4g-maps-popup-info-de */ "./Resources/public/js/c4g-maps-popup-info-de.js");

var popupFunctionsDE = _interopRequireWildcard(_c4gMapsPopupInfoDe);

var _c4gMapsPopupInfoEn = __webpack_require__(/*! ./c4g-maps-popup-info-en */ "./Resources/public/js/c4g-maps-popup-info-en.js");

var popupFunctionsEN = _interopRequireWildcard(_c4gMapsPopupInfoEn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var popupFunctions = popupFunctionsDE;

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    popupFunctions = popupFunctionsDE;
  } else if (mapData.lang === "en") {
    popupFunctions = popupFunctionsEN;
  } else {
    // fallback
    popupFunctions = popupFunctionsEN;
  }
} else {
  popupFunctions = popupFunctionsEN;
}

var utils = exports.utils = {
  /**
   *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
   *
   *  @param    {string}    the string to capitalize
   *
   *  @return   {string}    the capitalized string
   */
  capitalizeFirstLetter: function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Generate an unique id.
   *
   * The id is 9 characters long and prefixed with an underscore.
   *
   * @return  {string}  The generated id.
   */
  getUniqueId: function getUniqueId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  /**
   * Encode input strings for GeoJSON-Objects properly,
   * so they will not break the Code.
   * Transforms:
   *   \ -> \\;
   *   " -> '';
   *   Ä -> &Auml;
   *   ä -> &auml;
   *   Ö -> &Ouml;
   *   ö -> &ouml;
   *   Ü -> &Uuml;
   *   ü -> &uuml;
   *
   * @param   {string}  input  [description]
   *
   * @return  {string}         [description]
   */
  encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
    var output;

    if (!input) {
      return '';
    }

    output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');

    return output;
  }, // end of encodeGeoJsonProperty()

  /**
   * Decode input strings for GeoJSON-Objects properly,
   * so they will be displayed correctly.
   * Transforms:
   *   \\     -> \;
   *   ''     -> ";
   *   &Auml; -> Ä
   *   &auml; -> ä
   *   &Ouml; -> Ö
   *   &ouml; -> ö
   *   &Uuml; -> Ü
   *   &uuml; -> ü
   *
   * @param   {string}  input  [description]
   *
   * @return  {string}         [description]
   */
  decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
    var output;

    if (!input) {
      return '';
    }
    if (typeof input !== "string") {
      input = input + "";
    }

    output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');

    return output;
  }, // end of decodeGeoJsonProperty()

  /**
   * Create or replace an URL-parameter.
   *
   * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
   * will be applied as "hash-parameter".
   * e.g.:
   *   https://myurl.de:port/path/to/maps#param
   * Note, that already existing "hash-parameters" will be overriden,
   * whereas existing "GET-parameters" stay untouched.
   *
   * If `opt_getKey` is set, it will be applied as "GET-parameter".
   * e.g.:
   *   https://myurl.de:port/path/to/maps?opt_getKey=param
   * If the key described by `opt_getKey` is already existing, its value will be overriden,
   * otherwise the key-value-pair will be appended appropriatly.
   * Already existing "hash-parameters" will stay untouched.
   *
   * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
   * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
   *
   * @param  {string}                    param        [description]
   * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
   * @param  {undefined|boolean}         opt_execute  Default: `undefined`
   */
  setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
    var link, searchParam, paramReplaced, i;

    if ((typeof param === "undefined" ? "undefined" : _typeof(param)) === undefined) {
      return false;
    }

    link = location.origin + location.pathname;

    if (!opt_getKey) {
      // use hash-parameter
      if (opt_execute) {
        location.hash = param;
        return true;
      }
      link += location.search + '#' + param;
    } else {
      // use GET-parameter
      if (location.search) {
        // there are already search-parameters
        paramReplaced = false;
        opt_getKey = opt_getKey.toLowerCase();
        // replace parameter if already existent
        searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
          if (key === opt_getKey) {
            paramReplaced = true;
            return key + '=' + param;
          }
          return match;
        });
        // otherwise append as new parameter
        if (!paramReplaced) {
          searchParam += '&' + opt_getKey + '=' + param;
        }
      } else {
        // this will be the only search-parameter in the URL
        searchParam = '?' + opt_getKey + '=' + param;
      }
      if (opt_execute) {
        location.search = searchParam;
        return true;
      }
      link += searchParam + location.hash;
    }

    return link;
  }, // end of setUrlParam()

  /**
   * Get search or hash URL-parameter as string.
   *
   * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
   * otherwise it will search for a GET-parameter and return its value.
   *
   * If a parameter is not existent, or empty, an empty string will be returned.
   *
   * @param   {undefined|string}  opt_getKey  Default: `undefined`
   *
   * @return  {string}                        The found parameter.
   */
  getUrlParam: function getUrlParam(opt_getKey) {
    var param, regEx;

    if (!opt_getKey) {
      param = location.hash.substring(1);
    } else {
      if (!location.search) {
        param = '';
      } else {
        regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
        param = regEx.exec(location.search);
        param = param ? param[1] : '';
      }
    }

    return param;
  }, // end of getUrlParam()

  /**
   * Delta-encode an array of numbers.
   * Note that the array will be sorted (lowest to highest)
   * before encoding.
   *
   * So after the encoding the first value of the output contains
   * the smallest number of the set and each following number just
   * represents the offset to its previous neighbor.
   *
   * This is mostly efficient for high numbers, that are "close to each other".
   *
   * Example:
   *   [1337, 11, 101, 123, 96, 69, 42, 42]
   *   will be sorted
   *   [11, 42, 42, 69, 96, 101, 123, 1337]
   *   and encoded to
   *   [11, 31, 0, 27, 27, 5, 22, 1214]
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaEncode: function deltaEncode(arrInput) {
    var arrOutput, i;

    if (!arrInput) {
      return [];
    }
    if (arrInput.length === 1) {
      return arrInput;
    }

    arrInput.sort(function (a, b) {
      return a - b;
    });

    arrOutput = [];
    arrOutput[0] = arrInput[0];
    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = arrInput[i] - arrInput[i - 1];
    }

    return arrOutput;
  }, // end of deltaEncode()

  /**
   * Decode a delta-encoded array.
   * See `deltaEncode` function for more detailed information.
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaDecode: function deltaDecode(arrInput) {
    var arrOutput, i;

    if (!arrInput) {
      return [];
    }

    arrOutput = [];
    arrOutput[0] = parseInt(arrInput[0], 10);
    if (isNaN(arrInput[0])) {
      return [];
    }
    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = parseInt(arrInput[i], 10) + arrOutput[i - 1];
      if (isNaN(arrOutput[i])) {
        return [];
      }
    }

    return arrOutput;
  }, // end of deltaDecode()

  /**
   * Check and call functions in `arrHookFunctions` with given `parameters`.
   *
   * @param   {array<function>}   arrHookFunctions  [description]
   * @param   {mixed}             parameters        [description]
   */
  callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
    var j;

    if (arrHookFunctions && arrHookFunctions.length > 0) {
      for (j = 0; j < arrHookFunctions.length; j += 1) {
        if (typeof arrHookFunctions[j] === 'function') {
          arrHookFunctions[j](parameters);
        }
      }
    }
  }, // end of "callHookFunctions()"

  /**
   * Convert a hex-formated color value into rgba()-format.
   *
   * @param   {string|number}  hex          [description]
   * @param   {string|number}  opt_opacity  [description]
   *
   * @return  {string}                      [description]
   */
  getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {

    var bigint, r, g, b, a;

    bigint = parseInt(hex, 16);
    if (opt_opacity && opt_opacity.value) {
      opt_opacity.value = parseInt(opt_opacity.value);
    }

    if (opt_opacity && typeof opt_opacity !== 'number') {
      if ((typeof opt_opacity === "undefined" ? "undefined" : _typeof(opt_opacity)) === 'object' && opt_opacity.value) {
        opt_opacity = opt_opacity.value;
      } else {
        opt_opacity = 100;
      }
    }

    r = bigint >> 16 & 255;
    g = bigint >> 8 & 255;
    b = bigint & 255;
    a = opt_opacity ? opt_opacity / 100 : 1;
    if (opt_array) {
      return [r, g, b, a];
    }

    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  },

  /**
   * Measure the dimensions of the given geometry.
   *
   * If the geometry is a `LineString` the function will measure its length,
   * is it a `Polygon` it will measure the acreage,
   * otherwise it will return `0`.
   *
   * If the optional `opt_forceLineMeasure` parameter is `true`
   * and the geometry is a `Polygon` it will measure its perimeter instead
   * of its acreage.
   *
   * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
   * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
   *
   * @return  {array<string>|number}                                       [description]
   */
  measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
    var value, sphere, coordinates, coord1, coord2, result, i;

    if (!geometry) {
      return false;
    }

    //sphere = new ol.Sphere(6378137);
    result = {};

    if (geometry instanceof ol.geom.LineString || geometry instanceof ol.geom.Polygon && opt_forceLineMeasure) {

      coordinates = geometry.getCoordinates();
      if (geometry instanceof ol.geom.Polygon) {
        coordinates = coordinates[0];
      }
      value = 0;
      for (i = 0; i < coordinates.length - 1; i += 1) {
        coord1 = ol.proj.transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
        coord2 = ol.proj.transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
        value += ol.sphere.getDistance(coord1, coord2, 6378137);
      }
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 1000) {
        result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else if (geometry instanceof ol.geom.Polygon) {
      //geometry = /** @type {ol.geom.Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
      //coordinates = geometry.getLinearRing(0).getCoordinates();
      value = Math.abs(ol.sphere.getArea(geometry));
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry instanceof ol.geom.Circle && opt_forceSurfaceMeasure) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

      value = Math.PI * Math.sqrt(value);

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry instanceof ol.geom.Circle) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (result.rawValue > 10000) {
        result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else {
      result = 0;
    }

    return result;
  },

  /**
   * Calculate extent for an array of geometries.
   *
   * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
   *
   * @return  {ol.Extent}                                      [description]
   */
  getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
    var extentSource;

    if (!arrGeometries) {
      console.warn('Geometries missing for extent calculation');
      return false;
    }

    extentSource = new ol.source.Vector();
    extentSource.addFeatures(arrGeometries);

    return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
  }, // end of getExtentForGeometries()

  /**
   * Fit view of `map` to a given array of `extents`.
   * Animated if `opt_animationDuration` is an integer > 0.
   *
   * @param   {object}     extents                 [description]
   * @param   {ol.Map}     map                    [description]
   * @param   {integer}    opt_animationDuration  [description]
   *
   * @return  {boolean}                           [description]
   */
  fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
    var view, padding, extent, key;

    if (!extents || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    }
    //extent = ol.extent.createEmpty();

    for (key in extents) {
      if (extents.hasOwnProperty(key)) {
        if (typeof extent === "undefined") {
          extent = extents[key];
        } else {
          ol.extent.extend(extent, extents[key]);
        }
      }
    }

    this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
  }, // end of fitToExtents

  /**
   * Fit view of `map` to a given `extent`.
   * Animated if `opt_animationDuration` is an integer > 0.
   *
   * @param   {ol.Extent}  extent                 [description]
   * @param   {ol.Map}     map                    [description]
   * @param   {array}      opt_padding            [description]
   * @param   {integer}    opt_animationDuration  [description]
   * @param   {integer}    opt_minZoom            [description]
   * @param   {integer}    opt_maxZoom            [description]
   * @param   {integer}    opt_minResolution      [description]
   *
   * @return  {boolean}                           [description]
   */
  fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
    var view, padding, fitOptions;

    if (!extent || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    }

    view = map.getView();

    fitOptions = {
      'padding': opt_padding || [25, 25, 25, 25]
    };

    if (opt_minResolution && opt_minResolution > 0) {
      fitOptions.minResolution = opt_minResolution;
    }

    if (opt_minZoom && opt_minZoom >= 0) {
      fitOptions.minZoom = opt_minZoom;
    }

    if (opt_maxZoom && opt_maxZoom >= 0) {
      fitOptions.maxZoom = opt_maxZoom;
    }

    // animate the "fitting" when a duration is given and its greater than 0
    if (opt_animationDuration && opt_animationDuration > 0) {
      view.animate({
        start: +new Date(),
        duration: opt_animationDuration,
        resolution: view.getResolution(),
        center: [0, 0]
      });
    }

    try {
      view.fit(extent, map.getSize(), { padding: [25, 25, 25, 25] });
      //view.fit(extent, map.getSize());
      //view.setZoom(view.getZoom()-1);
      return true;
    } catch (e) {
      return false;
    }
  }, // end of fitToExtent()

  /**
   * Convenience function to run all placeholder functions at once.
   *
   * @param   {string}                      strInput   [description]
   * @param   {ol.Feature}                  feature    [description]
   * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
   *
   * @return  {string}                                 [description]
   */
  replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer) {
    var strOutput;

    // only check the first two parameters as they will be used by all placeholder-functions
    // -> for performance
    if (!strInput || !feature) {
      return strInput;
    }

    strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
    strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
    strOutput = this.replaceAttributePlaceholders(strOutput, feature);

    return strOutput;
  }, // end of replaceAllPlaceholders()

  /**
   * Replace every occurance of `${FNfunctionName}`, in `strInput`,
   * with the result of `window.functionName(feature, style)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   * Style will be taken either from the feature, or the layer.
   *
   * @param   {string}          strInput  [description]
   * @param   {ol.Feature}      feature   [description]
   * @param   {ol.layer.Layer}  layer     [description]
   *
   * @return  {string}                    [description]
   */
  replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer) {
    var strOutput;

    if (!strInput || !feature || !layer) {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
      var style;

      // check if function exists
      if (typeof popupFunctions[functionName] === 'function') {
        // search style
        if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
          style = feature.getStyle();
        } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
          style = layer.getStyle();
        } else {
          return '';
        }
        return popupFunctions[functionName](feature, style);
      }
      return '';
    }); // end of replace()

    return strOutput;
  }, // end of replaceFunctionPlaceholders()

  /**
   * Replace placeholders, in `strInput`, for variables set by the geoEditor.
   * Valid placeholders are: ([key] represents the stringname of the variables key)
   *   `${EL[key]}`   =>  Label for the variable
   *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
   *   `${EV[key]}`   =>  Value of the variable
   *   `${EVV[key]}`  =>  Same as `${EV[key]}`
   *
   * If no appropriate value can be found for a placeholder
   * it will simply be removed (/replaced with '').
   *
   * @param   {string}      strInput  [description]
   * @param   {ol.Feature}  feature   [description]
   *
   * @return  {string}                [description]
   */
  replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
      var editorVars, i;

      // check if feature has editorVars
      if (feature.get('editorVars')) {
        editorVars = feature.get('editorVars');
        // search for editorVar with key == evKey
        for (i = 0; i < editorVars.length; i += 1) {
          if (editorVars[i].key === evKey) {
            // if type is 'EVL' display label only if a value is set too
            if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
              return editorVars[i].label;
            } else {
              return editorVars[i].value;
            }
          }
        }
      }
      return '';
    }); // end of replace()

    return strOutput;
  }, // end of replaceEditorVarsPlaceholders()

  /**
   * Replace every occurance of `${attr}`, in `strInput`,
   * with the result of `feature.get(attr)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   *
   * @param   {string}      strInput  [description]
   * @param   {ol.Feature}  feature   [description]
   *
   * @return  {string}                [description]
   */
  replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
      return feature.get(attr) || '';
    }); // end of replace()

    return strOutput;
  }, // end of replaceAttributePlaceholders()

  objectToArray: function objectToArray(object) {
    if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
      object = Object.keys(object).map(function (key) {
        return object[key];
      });
    }
    return object;
  }, // end of objectToArray()

  getVectorLayer: function getVectorLayer(source, style) {
    var fnStyle;

    // make sure that the style is a function
    if (typeof style === 'function') {
      fnStyle = style;
    } else if (style !== undefined) {
      fnStyle = function fnStyle() {
        return style;
      };
    }

    return new ol.layer.Vector({
      source: source,
      style: fnStyle
    });
  },
  // end of "getVectorLayer()"

  /**
   * Extracts the subdomain from the current request host and returns it.
   * @returns {string | *}
   */
  getCurrentSubdomain: function getCurrentSubdomain() {
    return window.location.href;
  },


  /**
   * Returns the current domain (without the subdomain)
   */
  getCurrentDomain: function getCurrentDomain() {
    var domain = window.location.hostname;
    var arrDomain = domain.split('.');
    if (arrDomain.length > 2) {
      // there is a subdomain
      return arrDomain[arrDomain.length - 2];
    } else {
      return arrDomain[0];
    }
  },


  getValue: function getValue(key) {
    return localStorage[key] || '';
  },
  storeValue: function storeValue(key, value) {
    localStorage[key] = value; // only strings
  }
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps.js":
/*!*****************************************!*\
  !*** ./Resources/public/js/c4g-maps.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapController = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//for jslint
/*jslint browser:true*/
/*jslint todo:true */
/*global window*/
/*global ol*/
/*global Browser*/
/*global Document:true */
/*global jQuery*/

var _c4gMapsProxy = __webpack_require__(/*! ./c4g-maps-proxy */ "./Resources/public/js/c4g-maps-proxy.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsMiscMaphover = __webpack_require__(/*! ./c4g-maps-misc-maphover */ "./Resources/public/js/c4g-maps-misc-maphover.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsControlPortsideMeasuretools = __webpack_require__(/*! ./c4g-maps-control-portside-measuretools */ "./Resources/public/js/c4g-maps-control-portside-measuretools.js");

var _c4gMapsControlPrint = __webpack_require__(/*! ./c4g-maps-control-print */ "./Resources/public/js/c4g-maps-control-print.js");

var _c4gMapsControlGrid = __webpack_require__(/*! ./c4g-maps-control-grid */ "./Resources/public/js/c4g-maps-control-grid.js");

var _c4gMapsControlZoomlevel = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");

var _c4gMapsControlOverviewmap = __webpack_require__(/*! ./c4g-maps-control-overviewmap */ "./Resources/public/js/c4g-maps-control-overviewmap.js");

var _c4gMapsControlGeosearch = __webpack_require__(/*! ./c4g-maps-control-geosearch */ "./Resources/public/js/c4g-maps-control-geosearch.js");

var _c4gMapsControlPermalink = __webpack_require__(/*! ./c4g-maps-control-permalink */ "./Resources/public/js/c4g-maps-control-permalink.js");

var _c4gMapsControlStarboard = __webpack_require__(/*! ./c4g-maps-control-starboard */ "./Resources/public/js/c4g-maps-control-starboard.js");

var _c4gMapsControlPortsideAccount = __webpack_require__(/*! ./c4g-maps-control-portside-account */ "./Resources/public/js/c4g-maps-control-portside-account.js");

var _c4gMapsInteractionGeopicker = __webpack_require__(/*! ./c4g-maps-interaction-geopicker */ "./Resources/public/js/c4g-maps-interaction-geopicker.js");

var _c4gMapsControlHome = __webpack_require__(/*! ./c4g-maps-control-home */ "./Resources/public/js/c4g-maps-control-home.js");

var _c4gMapsControlPosition = __webpack_require__(/*! ./c4g-maps-control-position */ "./Resources/public/js/c4g-maps-control-position.js");

var _c4gMapsControlPortsideInfopage = __webpack_require__(/*! ./c4g-maps-control-portside-infopage */ "./Resources/public/js/c4g-maps-control-portside-infopage.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var MapController = exports.MapController = function () {

  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  function MapController(mapData) {
    _classCallCheck(this, MapController);

    //---
    this.map = null;
    // this.controls = null;
    this.leftSlideElements = [];
    this.rightSlideElements = [];

    var self = this,
        permalink = false,
        minZoom,
        maxZoom,
        view,
        geoLocation,
        controls = [],
        interactions = [],
        _displayAllLocations,
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
    mapData = $.extend({
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
      mapData = $.extend({
        min_gap: 25
      }, mapData);
    }

    // center
    mapData.center = $.extend({
      lat: 52.22,
      lon: 9.43,
      rotation: 0,
      zoom: 6
    }, mapData.center);
    // attribution
    mapData.attribution = $.extend({
      enable: true,
      collapsed: false,
      collapsible: true
    }, mapData.attribution);
    // geosearch
    mapData.geosearch = $.extend({
      enable: false,
      div: false
    }, mapData.geosearch);
    // permalink
    mapData.permalink = $.extend({
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
    this.proxy = new _c4gMapsProxy.MapProxy({ mapController: this });

    // check permalink
    if (mapData.permalink.enable) {
      permalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);

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
            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;
          case 2:
            // baselayer and layers only
            permalink[0] = parseInt(permalink[0], 10);
            mapData.baselayer = !isNaN(permalink[0]) ? permalink[0] : mapData.baselayer;
            mapData.layers = permalink[1].split(':');
            // decode deltaEncoding
            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;
          case 1:
            // layers only
            mapData.layers = permalink[0].split(':');
            // decode deltaEncoding
            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
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
      if (_c4gMapsUtils.utils.getValue('lon') && _c4gMapsUtils.utils.getValue('lat')) {
        mapData.center.lon = _c4gMapsUtils.utils.getValue('lon');
        mapData.center.lat = _c4gMapsUtils.utils.getValue('lat');
      }

      if (_c4gMapsUtils.utils.getValue('zoom')) {
        mapData.center.zoom = _c4gMapsUtils.utils.getValue('zoom');
      }
    }

    view = new ol.View({
      // projection: ol.proj.get('EPSG:4326'),
      // center: [parseFloat(mapData.center_lon), parseFloat(mapData.center_lat)],
      // minResolution: undefined,
      // maxResolution: undefined,
      center: ol.proj.transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
      zoom: parseInt(mapData.center.zoom, 10),
      minZoom: parseInt(minZoom, 10),
      maxZoom: parseInt(maxZoom, 10),
      rotation: parseFloat(mapData.center.rotation)
    });

    // check userposition
    if (mapData.geolocation && !permalink) {
      geoLocation = new ol.Geolocation({
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
      controls = ol.control.defaults();
      interactions = ol.interaction.defaults();
    }

    // set default base layer when backend geopicker is enabled
    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      if (mapData.default_baselayer) {
        this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
        });
      } // end inner if
      this.map = new ol.Map({
        controls: controls,
        interactions: interactions,
        layers: [new ol.layer.Group({
          title: 'Base maps',
          layers: [],
          checkSum: 'baseMapsLayer'
        })],
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
            if (_c4gMapsUtils.utils.getValue('baselayer')) {
              mapData.default_baselayer = _c4gMapsUtils.utils.getValue('baselayer');
            }
          }

          self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
        });
      }
      this.map = new ol.Map({
        controls: controls,
        interactions: interactions,
        layers: [new ol.layer.Group({
          title: 'Base maps',
          layers: [],
          checkSum: 'baseMapsLayer'
        })],
        loadTilesWhileAnimating: true,
        target: mapData.mapDiv,
        view: view
      });
    }

    mapData.map = this.map;

    // set extent to make all locations visible if wanted
    if (mapData.calc_extent === "LOCATIONS") {
      _displayAllLocations = function displayAllLocations(layerIds) {
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
        delete this[this.indexOf(_displayAllLocations)];
        coordinates = [];
        // calculate resulting extent of all geometries
        for (key in layers) {
          if (layers.hasOwnProperty(key)) {
            layer = layers[key];
            if (layer.type == "overpass") {
              continue;
            }
            vectorArray = layer.content;
            if (vectorArray === undefined) {
              // catch case of linked layers
              continue;
            }
            if ((typeof vectorArray === "undefined" ? "undefined" : _typeof(vectorArray)) === "object") {
              vectorArray = _c4gMapsUtils.utils.objectToArray(vectorArray);
            }
            layerGroup = layer.vectorLayer;
            if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
              vectorArray.forEach(function (vectorLayer) {
                if (vectorLayer && vectorLayer.data && vectorLayer.data.geometry && vectorLayer.data.geometry.coordinates) {
                  if (vectorLayer.data.geometry.type === "Point") {
                    coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]), parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                    if (coords[0] == "Infinity" || coords[0] == "-Infinity") {
                      return;
                    }
                    geometry = new ol.geom.Point(coords);
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
                  coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                  coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                  coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                  coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                }
              });
            }
          }
        }
        extent = ol.extent.boundingExtent(coordinates);
        if (extent[0] == "Infinity" || extent[0] == "-Infinity") {
          return;
        }
        //TODO: catch case min_gap is already an array
        padding = [mapData.min_gap, mapData.min_gap, mapData.min_gap, mapData.min_gap];
        self.map.getView().fit(extent, self.map.getSize(), { padding: padding });
        center = self.map.getView().getCenter();
        if (isNaN(center[0])) {
          self.map.getView().setCenter([50, 10]);
          self.map.getView().setZoom(mapData.minZoom || 10);
        }
      };
      this.proxy.hook_layer_visibility.push(_displayAllLocations);
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
    this.$overlaycontainer_stopevent = $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_OVERLAYCONTAINER_SE);
    // add Spinner
    this.spinner = new _c4gMapsMiscSpinner.Spinner({ className: _c4gMapsConstant.cssConstants.LARGE });
    // add mapHover
    this.mapHover = new _c4gMapsMiscMaphover.MapHover({ mapController: this });

    // add interactions ===
    //

    // mouse navigation
    if (mapData.mouse_nav) {
      // drag pan and kinetic scrolling
      if (mapData.mouse_nav.drag_pan) {
        kinetic = mapData.mouse_nav.kinetic ? new ol.Kinetic(-0.005, 0.05, 100) : null;
        this.map.addInteraction(new ol.interaction.DragPan({ kinetic: kinetic }));
      }
      // mousewheel zoom
      if (mapData.mouse_nav.wheel_zoom) {
        this.map.addInteraction(new ol.interaction.MouseWheelZoom());
      }
      // doubleclick zoom
      if (mapData.mouse_nav.doubleclick_zoom) {
        this.map.addInteraction(new ol.interaction.DoubleClickZoom());
      }
      // box zoom
      if (mapData.mouse_nav.drag_zoom) {
        this.map.addInteraction(new ol.interaction.DragZoom({ condition: ol.events.condition.shiftKeyOnly }));
      }
      // drag rotate (& zoom)
      ol.events.condition.custom = function (mapBrowserEvent) {
        var browserEvent = mapBrowserEvent.originalEvent;
        return browserEvent.ctrlKey && browserEvent.shiftKey;
      };

      if (mapData.mouse_nav.drag_rotate_zoom) {
        this.map.addInteraction(new ol.interaction.DragRotateAndZoom({ condition: ol.events.condition.custom }));
      } else if (mapData.mouse_nav.drag_rotate) {
        this.map.addInteraction(new ol.interaction.DragRotate({ condition: ol.events.condition.custom }));
      }
    }
    // touch navigation
    if (mapData.touch_nav) {
      // rotate (pinch)
      if (mapData.touch_nav.rotate) {
        this.map.addInteraction(new ol.interaction.PinchRotate());
      }
      // zoom (pinch)
      if (mapData.touch_nav.zoom) {
        this.map.addInteraction(new ol.interaction.PinchZoom({ constrainResolution: true }));
      }
    }
    // keyboard navigation
    if (mapData.keyboard_nav) {
      // pan (arrow keys)
      if (mapData.keyboard_nav.pan) {
        this.map.addInteraction(new ol.interaction.KeyboardPan());
      }
      // zoom ("+" and "-" key)
      if (mapData.keyboard_nav.zoom) {
        this.map.addInteraction(new ol.interaction.KeyboardZoom());
      }
    }
    // ===

    // add control-containers ===
    //
    // top-left
    controlContainerTopLeft = document.createElement('div');
    controlContainerTopLeft.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    this.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
    // bottom-left
    controlContainerBottomLeft = document.createElement('div');
    controlContainerBottomLeft.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    $(controlContainerTopLeft).after(controlContainerBottomLeft);
    // element needs to be moved when Portside will be opened
    this.leftSlideElements.push(controlContainerBottomLeft);
    // top-right
    controlContainerTopRight = document.createElement('div');
    controlContainerTopRight.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    $(controlContainerBottomLeft).after(controlContainerTopRight);
    // element needs to be moved when Starboard will be opened
    this.rightSlideElements.push(controlContainerTopRight);
    // bottom-right
    controlContainerBottomRight = document.createElement('div');
    controlContainerBottomRight.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
    $(controlContainerTopRight).after(controlContainerBottomRight);
    // element needs to be moved when Starboard will be opened
    this.rightSlideElements.push(controlContainerBottomRight);
    // ===
    // add controls ===
    this.controls = {};
    //


    // account
    if (mapData.account && typeof _c4gMapsControlPortsideAccount.Account === 'function') {
      this.controls.account = new _c4gMapsControlPortsideAccount.Account({
        tipLabel: _c4gMapsI18n.langConstants.CTRL_ACCOUNT,
        target: controlContainerTopLeft,
        caching: mapData.caching,
        mapController: this
      });
      this.map.addControl(this.controls.account);
    }

    // zoom-controls
    if (mapData.zoom_panel || mapData.zoom_slider) {
      this.controls.zoom = new ol.control.Zoom({
        zoomInLabel: ' ',
        zoomOutLabel: ' ',
        zoomInTipLabel: _c4gMapsI18n.langConstants.CTRL_ZOOM_IN,
        zoomOutTipLabel: _c4gMapsI18n.langConstants.CTRL_ZOOM_OUT,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.zoom);

      if (mapData.zoom_slider) {
        this.controls.zoomslider = new ol.control.ZoomSlider({
          label: ' ',
          tipLabel: _c4gMapsI18n.langConstants.CTRL_ZOOM_SLIDER,
          target: controlContainerTopLeft
        });
        this.map.addControl(this.controls.zoomslider);
      }
    }
    if (mapData.zoom_extent & !mapData.zoom_slider) {
      this.controls.zoom_extent = new ol.control.ZoomToExtent({
        label: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_ZOOM_EXT,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.zoom_extent);
    }
    if (mapData.zoom_home & !mapData.zoom_slider) {
      this.controls.zoom_home = new _c4gMapsControlHome.Home({
        label: ' ',
        disableLabel: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_ZOOM_HOME,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.zoom_home);
    }

    if (mapData.zoom_position & !mapData.zoom_slider) {
      this.controls.zoom_position = new _c4gMapsControlPosition.Position({
        label: ' ',
        disableLabel: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_ZOOM_POS,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.zoom_position);
    }

    // combined zoom-controls
    if (mapData.zoom_slider) {
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM).addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_WITH_SLIDER).removeClass(_c4gMapsConstant.cssConstants.OL_ZOOM);
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_SLIDER + ' button').addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_SLIDER));
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_SLIDER + '.' + _c4gMapsConstant.cssConstants.OL_CONTROL).remove();
    }

    if (mapData.zoom_panel && mapData.zoom_extent) {
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM).addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_WITH_EXT).removeClass(_c4gMapsConstant.cssConstants.OL_ZOOM);
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_EXT + ' button').addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_EXT));
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_EXT + '.' + _c4gMapsConstant.cssConstants.OL_CONTROL).remove();
    }

    if (mapData.zoom_panel && mapData.zoom_home) {
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM).addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_WITH_HOME).removeClass(_c4gMapsConstant.cssConstants.OL_ZOOM);
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_HOME + ' button').addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_HOME));
      removeElement = controlContainerTopLeft.querySelector('.' + _c4gMapsConstant.cssConstants.OL_ZOOM_HOME + '.' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + '.button');
      if (removeElement) {
        try {
          removeElement.remove();
        } catch (err) {
          //ie 11 error
        }
      }
    }

    if (mapData.zoom_panel && mapData.zoom_position) {
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM).addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_WITH_POS).removeClass(_c4gMapsConstant.cssConstants.OL_ZOOM);
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_POS + ' button').addClass(_c4gMapsConstant.cssConstants.OL_ZOOM_POS));
      $('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_ZOOM_POS + '.' + _c4gMapsConstant.cssConstants.OL_CONTROL).remove();
      removeElement = controlContainerTopLeft.querySelector('.' + _c4gMapsConstant.cssConstants.OL_ZOOM_POS + '.' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + '.button');
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
      this.controls.fullscreen = new ol.control.FullScreen({
        label: ' ',
        labelActive: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_FULLSCREEN,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.fullscreen);
    }

    // editor
    // if (mapData.editor.enable && typeof Editor === 'function') {
    //   this.controls.editor = new Editor({
    //     tipLabel: langConstants.CTRL_EDITOR,
    //     type: mapData.editor.type || 'frontend',
    //     target: mapData.editor.target || controlContainerTopLeft,
    //     initOpen: mapData.editor.open || false,
    //     dataField: mapData.editor.data_field || false,
    //     caching: mapData.caching,
    //     mapController: this
    //   });
    //   this.map.addControl(this.controls.editor);
    // }
    // measuretools
    if (mapData.measuretools.enable && typeof _c4gMapsControlPortsideMeasuretools.Measuretools === 'function') {
      this.controls.measuretools = new _c4gMapsControlPortsideMeasuretools.Measuretools({
        tipLabel: _c4gMapsI18n.langConstants.CTRL_MEASURETOOLS,
        target: controlContainerTopLeft,
        caching: mapData.caching,
        mapController: this
      });
      this.map.addControl(this.controls.measuretools);
    }
    //
    if (mapData.print) {
      this.controls.print = new _c4gMapsControlPrint.Print({
        label: "",
        tipLabel: _c4gMapsI18n.langConstants.CTRL_PRINT,
        target: controlContainerTopLeft,
        mapController: this
      });
      this.map.addControl(this.controls.print);
    }

    // show graticule (grid)
    if (mapData.graticule) {
      this.controls.graticule = new _c4gMapsControlGrid.Grid({
        label: ' ',
        disableLabel: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_GRID,
        caching: mapData.caching,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.graticule);
    }
    // rotate-control
    //TODO: use something like "mapData.rotate"
    //   Check: mapData.mouse_nav (defined?)
    if (mapData.mouse_nav && (mapData.mouse_nav.drag_rotate || mapData.mouse_nav.drag_rotate && mapData.mouse_nav.drag_rotate_zoom)) {
      this.controls.rotate = new ol.control.Rotate({
        label: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_RESET_ROTATION,
        target: controlContainerTopLeft
      });
      this.map.addControl(this.controls.rotate);
    }
    // infopage
    if (mapData.infopage && typeof _c4gMapsControlPortsideInfopage.Infopage === 'function') {
      this.controls.infopage = new _c4gMapsControlPortsideInfopage.Infopage({
        tipLabel: _c4gMapsI18n.langConstants.CTRL_INFOPAGE,
        target: controlContainerTopLeft,
        caching: mapData.caching,
        mapController: this
      });
      this.map.addControl(this.controls.infopage);
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
      this.controls.scaleline = new ol.control.ScaleLine({
        target: controlContainerBottomLeft
      });
      this.map.addControl(this.controls.scaleline);
    }

    // zoom-level & mouse-position
    if (mapData.zoomlevel || mapData.mouseposition) {
      // wrapper for zoom-level and mouse-position
      controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL_SUB + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
      // display zoom-level
      if (mapData.zoomlevel) {
        this.controls.zoomlevel = new _c4gMapsControlZoomlevel.Zoomlevel({
          mapController: this,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        this.map.addControl(this.controls.zoomlevel);
      }
      // display mouse-position
      if (mapData.mouseposition) {
        this.controls.mouseposition = new ol.control.MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: ol.coordinate.toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        this.map.addControl(this.controls.mouseposition);
      }
    }

    // geosearch
    if (mapData.geosearch.enable) {
      this.controls.geosearch = new _c4gMapsControlGeosearch.GeoSearch({
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
    }

    // geobookmarks - not ready
    if (mapData.geobookmarks) {
      this.controls.geobookmarks = new ol.control.GeoBookmark({
        //target: controlContainerTopRight
        label: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_GEOBOOKMARKS,
        placeholder: _c4gMapsI18n.langConstants.GEOBOOKMARKS_PLACEHOLDER,
        namespace: 'c4g_geobookmarks' /*,
                                      className: cssConstants.GEOBOOKMARKS*/ //ToDo implement for own styling
      });
      this.map.addControl(this.controls.geobookmarks);
      this.rightSlideElements.push('.ol-bookmark');
    }

    // overview-map
    if (mapData.overviewmap) {
      var overviewMapOptions = { target: controlContainerTopRight, mapController: this, collapsed: true };
      var scope = this;
      var addOverviewMap = function addOverviewMap() {
        var activeBaselayer = scope.proxy.activeBaselayerId;
        scope.proxy.baselayerController.showBaseLayer(activeBaselayer);
        overviewMapOptions.layers = [scope.proxy.baselayerController.arrBaselayers[activeBaselayer].layer];
        if (scope.overviewMap) {
          // we are reloading the overview map, so keep the collapsed-property
          overviewMapOptions.collapsed = !scope.overviewMap.isOpen();
        }
        scope.overviewMap = new _c4gMapsControlOverviewmap.OverviewMap(overviewMapOptions);
        scope.controls.overviewmap = scope.overviewMap.getOverviewMap();
        scope.map.addControl(scope.controls.overviewmap);
      };
      if (this.proxy.baselayers_loaded) {
        addOverviewMap();
      } else {
        window.c4gMapsHooks.proxy_baselayer_loaded.push(addOverviewMap);
      }
      // add hook to synchronize overviewmap with baselayer
      window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
      window.c4gMapsHooks.baselayer_changed.push(function (baselayerId) {
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

    if (typeof _c4gMapsControlStarboard.Starboard === 'function' && enableStarboard && !this.controls.starboard) {
      this.initializeStarboard();
    }

    // backend-geopicker
    if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
      this.controls.geopicker = new _c4gMapsInteractionGeopicker.GeoPicker({
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
              var transformed = ol.proj.transform(numerized, ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
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
        logoLink.className = _c4gMapsConstant.cssConstants.ATTRIBUTION_LOGO;
        logoGraphic = document.createElement('img');
        logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
        logoLink.appendChild(logoGraphic);
        controlContainerBottomRight.appendChild(logoLink);
      }
      this.controls.attribution = new ol.control.Attribution({
        label: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_ATTRIBUTION,
        collapseLabel: ' ',
        target: controlContainerBottomRight,
        collapsible: true
      });
      this.controls.attribution.setCollapsed(mapData.attribution.collapsed === '1');
      this.map.addControl(this.controls.attribution);
    }

    // show permalink
    if (mapData.permalink.enable) {
      this.controls.permalink = new _c4gMapsControlPermalink.Permalink({
        label: ' ',
        tipLabel: _c4gMapsI18n.langConstants.CTRL_PERMALINK,
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
        var mainColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);
        var fontColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);
        var shadowColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);

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
      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
        mapController: this,
        Container: controlContainerTopLeft
      });
    }
  }

  _createClass(MapController, [{
    key: "initializeStarboard",
    value: function initializeStarboard() {
      var mapData = this.data;
      var starboard_label = void 0;
      if (mapData.starboard.label) {
        starboard_label = _c4gMapsI18n.langConstants.CTRL_STARBOARD.replace('Starboard', mapData.starboard.label).replace('starboard', mapData.starboard.label);
      }

      this.controls.starboard = new _c4gMapsControlStarboard.Starboard({
        create: mapData.starboard.enable || false,
        headline: mapData.starboard.label,
        tipLabel: starboard_label || false,
        caching: mapData.caching,
        mapController: this,
        extDiv: mapData.starboard.div,
        defaultOpen: mapData.starboard.open,
        filter: mapData.starboard.filter,
        button: mapData.starboard.button,
        baselayerSwitcherCreate: mapData.baselayerswitcher.enable,
        baselayerSwitcherTitle: mapData.baselayerswitcher.label,
        layerSwitcherCreate: mapData.layerswitcher.enable,
        layerSwitcherTitle: mapData.layerswitcher.label
      });
      this.map.addControl(this.controls.starboard);
    }
  }]);

  return MapController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-overlay-controller.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-overlay-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C4gOverlayController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gOverlay = __webpack_require__(/*! ./c4g-overlay */ "./Resources/public/js/c4g-overlay.js");

var _c4gMapsConfig = __webpack_require__(/*! ./c4g-maps-config */ "./Resources/public/js/c4g-maps-config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gOverlayController = exports.C4gOverlayController = function () {
  function C4gOverlayController(baselayer) {
    _classCallCheck(this, C4gOverlayController);

    this.baselayer = baselayer;
    this.arrOverlays = [];
  }

  _createClass(C4gOverlayController, [{
    key: "showOverlayLayer",
    value: function showOverlayLayer(overlayId) {
      var self = this,
          overlayLayerConfig,
          osmSourceConfigs = _c4gMapsConfig.config.osm,
          stamenSourceConfigs = _c4gMapsConfig.config.stamen,
          layerOptions,
          overlayLayer,
          noUrl;

      layerOptions = {};
      overlayLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
      });

      overlayLayerConfig = this.arrOverlays[overlayId];

      switch (overlayLayerConfig.provider) {
        case 'osm':
          if (osmSourceConfigs[overlayLayerConfig.style]) {
            overlayLayer = new ol.layer.Tile({
              source: new ol.source.OSM(jQuery.extend(osmSourceConfigs[overlayLayerConfig.style], layerOptions))
            });
          } else if (stamenSourceConfigs[overlayLayerConfig.style]) {
            // Stamen
            overlayLayer = new ol.layer.Tile({
              source: new ol.source.Stamen(jQuery.extend(stamenSourceConfigs[overlayLayerConfig.style], layerOptions))
            });
            // } else if (mapQuestSourceConfigs[overlayLayerConfig.style]) {
            //   // mapQuest
            //   overlayLayer = new ol.layer.Tile({
            //     source: new ol.source.MapQuest(mapQuestSourceConfigs[overlayLayerConfig.style])
            //   });
          } else if (overlayLayerConfig.style === 'osm_custom') {
            // custom
            noUrl = true;
            if (overlayLayerConfig.attribution) {
              layerOptions.attributions = overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION;
            }

            if (overlayLayerConfig.url) {
              layerOptions.url = overlayLayerConfig.url;
              noUrl = false;
            } else if (overlayLayerConfig.urls) {
              layerOptions.urls = overlayLayerConfig.urls;
              noUrl = false;
            }
            if (!noUrl) {
              overlayLayer = new ol.layer.Tile({
                source: new ol.source.XYZ(layerOptions)
              });
            } else {
              console.warn('custom url(s) missing -> switch to default');
            }
          } else {
            console.warn('unsupported osm-style -> switch to default');
          }
          break;
        case 'google':
          //@todo
          console.warn('google-maps are currently unsupported');
          break;
        case 'bing':
          if (baseLayerConfig.apiKey && overlayLayerConfig.style) {
            overlayLayer = new ol.layer.Tile({
              source: new ol.source.BingMaps({
                culture: navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage,
                key: overlayLayerConfig.apiKey,
                imagerySet: overlayLayerConfig.style
              })
            });
          } else {
            console.warn('wrong bing-key or invalid imagery-set!');
          }
          break;
        case 'wms':
          overlayLayer = new ol.layer.Tile({
            source: new ol.source.TileWMS({
              url: overlayLayerConfig.url,
              params: {
                LAYERS: overlayLayerConfig.params.layers,
                VERSION: overlayLayerConfig.params.version,
                //FORMAT: overlayLayerConfig.params.format,
                TRANSPARENT: overlayLayerConfig.params.transparent
              },
              gutter: overlayLayerConfig.gutter,
              attributions: overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
            })
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
          break;
        case 'owm':
          overlayLayer = new ol.layer.Tile({
            source: new ol.source.XYZ({
              url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
              attributions: overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
            })
            //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
          });
          break;
        default:
          console.warn('unsupported provider');
          break;
      }
      overlayLayer.setOpacity(parseInt(overlayLayerConfig.opacity) / 100);
      this.arrOverlays[overlayId].layer = overlayLayer;
      this.arrOverlays[overlayId].changeOpacity(this.arrOverlays[overlayId].opacity);
      return this.arrOverlays[overlayId].layer;
    }
  }]);

  return C4gOverlayController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-overlay.js":
/*!********************************************!*\
  !*** ./Resources/public/js/c4g-overlay.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gOverlay = exports.C4gOverlay = function () {
  function C4gOverlay(overlayArr, mapController) {
    _classCallCheck(this, C4gOverlay);

    this.id = overlayArr['id'];
    this.pid = overlayArr['pid'];
    this.name = overlayArr['name'];
    this.provider = overlayArr['provider'];
    this.style = overlayArr['style'];
    this.url = overlayArr['url'];
    this.urls = overlayArr['urls'];
    this.opacity = overlayArr['opacity'];
    this.attribution = overlayArr['attribution'];
    this.gutter = overlayArr['gutter'];
    this.params = overlayArr['params'];
    this.layer = false;
    this.overlayArr = overlayArr;
    this.mapController = mapController;
  }

  _createClass(C4gOverlay, [{
    key: 'changeOpacity',
    value: function changeOpacity(value) {
      var layer;

      layer = this.layer;
      if (layer) {
        this.mapController.map.removeLayer(layer);
        layer.setOpacity(value / 100);
        this.mapController.map.addLayer(layer);
      }
    }
  }]);

  return C4gOverlay;
}();

/***/ })

/******/ });
//# sourceMappingURL=c4g-maps.js.map