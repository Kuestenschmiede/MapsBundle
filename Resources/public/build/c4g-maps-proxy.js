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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-proxy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-baselayer-controller.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/c4g-baselayer-controller.js ***!
  \*********************************************************/
/*! exports provided: C4gBaselayerController */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gBaselayerController", function() { return C4gBaselayerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_baselayer__ = __webpack_require__(/*! ./c4g-baselayer */ "./Resources/public/js/c4g-baselayer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__ = __webpack_require__(/*! ./c4g-maps-config */ "./Resources/public/js/c4g-maps-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var C4gBaselayerController = function () {
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

                    uid = baselayer.id || __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].getUniqueId();
                    this.baselayerIds.push(uid);
                    if (!this.arrBaselayers[uid]) {
                        this.arrBaselayers[uid] = new __WEBPACK_IMPORTED_MODULE_0__c4g_baselayer__["C4gBaselayer"](baselayer, this);
                    }

                    // @TODO: check initial baselayer-handling
                    if (this.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.baselayer, 10)) {
                        this.showBaseLayer(uid);
                    }

                    if (this.arrBaselayers[uid].hasOverlays) {
                        for (j = 0; j < this.arrBaselayers[uid].overlays.length; j++) {
                            if (!this.arrBaselayers[uid].overlayController.arrOverlays[this.arrBaselayers[uid].overlays[j].id]) {
                                this.arrBaselayers[uid].overlayController.arrOverlays[this.arrBaselayers[uid].overlays[j].id] = new C4gOverlay(this.arrBaselayers[uid].overlays[j], this.mapController);
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

            __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_baselayer_loaded, this.baselayerIds);
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
                sourceConfigs.osm = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__["config"].osm;
                sourceConfigs.stamen = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__["config"].stamen;
                //mapQuestSourceConfigs = c4g.maps.config.mapquest;
                sourceConfigs.mapbox = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__["config"].mapbox;
                sourceConfigs.klokan = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__["config"].klokan;
                sourceConfigs.here = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__["config"].here;
                sourceConfigs.thunderforest = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_config__["config"].thunderforest;

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
                            baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id] = new C4gOverlay(baseLayerConfig.overlays[i], this.mapController);
                            baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id].layer = baseLayerConfig.overlayController.showOverlayLayer(baseLayerConfig.overlays[i].id);
                        }
                    }
                }
                // if (baseLayerConfig.hasOverlays) {
                //
                //     for (i = 0; i < baseLayerConfig.overlays.length; i += 1) {
                //         if(!c4g.maps.overlays){
                //             c4g.maps.overlays = [];
                //         }
                //         c4g.maps.overlays[baseLayerConfig.overlays[i].id] = baseLayerConfig.overlays[i];
                //         if(this.mapController.data.baselayer && parseInt(baseLayerConfig.id, 10) === parseInt(this.proxy.activeBaselayerId, 10)) {
                //             self.mapController.map.addLayer(self.showOverlayLayer(baseLayerConfig.overlays[i].id));
                //         }
                //     }
                //
                // }

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
                            var controlContainerTopLeft = document.createElement('div');
                            controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
                            this.mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

                            var controlContainerBottomLeft = document.createElement('div');
                            controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
                            $(controlContainerTopLeft).after(controlContainerBottomLeft);
                            this.mapController.leftSlideElements.push(controlContainerBottomLeft);

                            var controlContainerBottomLeftSub = document.createElement('div');
                            controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_4__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;

                            var newView = new ol.View({
                                center: center,
                                projection: view.getProjection(),
                                zoom: zoom,
                                minZoom: parseInt(baseLayerConfig.minZoom, 10) || 0,
                                maxZoom: parseInt(baseLayerConfig.maxZoom, 10) || 19,
                                rotation: view.getRotation(),
                                resolution: view.getResolution()
                            });

                            this.mapController.map.setView(newView);
                            __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].redrawMapView(this.mapController);

                            // if (mapData.scaleline) {
                            //   this.mapController.map.removeControl(this.mapController.controls.scaleline);
                            //   this.mapController.controls.scaleline = new ol.control.ScaleLine({
                            //     mapView: this.mapController.map.getView(),
                            //     target: controlContainerBottomLeft,
                            //     undefinedHTML: 'N/A'
                            //   });
                            //   this.mapController.map.addControl(this.mapController.controls.scaleline);
                            // }
                            //
                            // $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
                            //
                            // if (mapData.zoomlevel) {
                            //   this.mapController.map.removeControl(this.mapController.controls.zoomlevel);
                            //   this.mapController.controls.zoomlevel = new c4g.maps.control.Zoomlevel({
                            //     mapView: this.mapController.map.getView(),
                            //     target: controlContainerBottomLeftSub,
                            //     undefinedHTML: 'N/A'
                            //   });
                            //   this.mapController.map.addControl(this.mapController.controls.zoomlevel);
                            // }
                            //
                            // if (mapData.mouseposition) {
                            //   this.mapController.map.removeControl(this.mapController.controls.mouseposition);
                            //   this.mapController.controls.mouseposition = new ol.control.MousePosition({
                            //     projection: 'EPSG:4326',
                            //     coordinateFormat: ol.coordinate.toStringHDMS,
                            //     target: controlContainerBottomLeftSub,
                            //     undefinedHTML: 'N/A'
                            //   });
                            //   this.mapController.map.addControl(this.mapController.controls.mouseposition);
                            // }
                        }
                    }
                }
            }

            if (typeof baseLayerConfig !== "undefined") {
                this.proxy.activeBaselayerId = baseLayerConfig.id;

                __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_baselayer_visibility, baseLayerConfig);

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
                            __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].redrawMapView(this.mapController);
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
/*! exports provided: C4gBaselayer */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gBaselayer", function() { return C4gBaselayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_overlay_controller__ = __webpack_require__(/*! ./c4g-overlay-controller */ "./Resources/public/js/c4g-overlay-controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var C4gBaselayer = function C4gBaselayer(baselayerArr, controller) {
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
    this.overlayController = new __WEBPACK_IMPORTED_MODULE_0__c4g_overlay_controller__["C4gOverlayController"](this);
    this.layer = false;
    this.controller = controller;
};

/***/ }),

/***/ "./Resources/public/js/c4g-layer-controller.js":
/*!*****************************************************!*\
  !*** ./Resources/public/js/c4g-layer-controller.js ***!
  \*****************************************************/
/*! exports provided: C4gLayerController */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLayerController", function() { return C4gLayerController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_layer__ = __webpack_require__(/*! ./c4g-layer */ "./Resources/public/js/c4g-layer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var c4g = this.c4g;

var C4gLayerController = function () {
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
        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(self.proxy.hook_layer_loaded, self.proxy.layerIds);
        // utils.callHookFunctions(c4g.maps.hook.proxy_layer_loaded, {layerIds: self.proxy.layerIds, proxy: self.proxy});
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
          c4g.maps.starboardTabs = c4g.maps.starboardTabs || {};
          starboard = self.proxy.options.mapController.controls.starboard;
          starboard.hook_layerswitcher_loaded.push(function () {
            c4g.maps.starboardTabs[layerid] = new c4g.maps.control.starboardplugin.Customtab(starboard, {
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
            layer = new __WEBPACK_IMPORTED_MODULE_0__c4g_layer__["C4gLayer"](layers[i]); //layers[i];
          }

          linkItems = false;
          //console.log(layer);
          if (_typeof(layer.content) === "object") {
            layer.content = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].objectToArray(layer.content);
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
                    child = new __WEBPACK_IMPORTED_MODULE_0__c4g_layer__["C4gLayer"](childArr); //layers[i];
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

            uid = layer.id || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getUniqueId();
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

                  fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity('4975A8', {
                    unit: '%',
                    value: 70
                  });

                  if (contentData.cluster_fillcolor) {
                    fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                      unit: '%',
                      value: 70
                    });
                  }
                  fontcolor = '#FFFFFF';
                  if (contentData.cluster_fontcolor) {
                    fontcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fontcolor, {
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
                  strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
                  url = requestData.url;

                  if (requestData.params) {
                    url += '?data=' + encodeURIComponent(requestData.params.replace(/\(bbox\)/g, strBoundingBox));
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
                    var j, format, centerPoint, rFeatures, osmNodes, osmNds, nodeIdx, ndIdx, infoNodes, newTag, ref, lineExtent;

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
                            centerPoint = rFeatures[j].getGeometry().getInteriorPoint().getCoordinates();
                            rFeatures[j].setGeometry(new ol.geom.Point(centerPoint));
                          } else if (rFeatures[j].getGeometry().getType() === "LineString") {
                            // @TODO: prüfen ob dies korrekter mittelpunkt ist
                            lineExtent = rFeatures[j].getGeometry().getExtent();
                            centerPoint = ol.extent.getCenter(lineExtent);
                            rFeatures[j].setGeometry(new ol.geom.Point(centerPoint));
                          }
                        }
                        if (rFeatures[j].get('c4g_osm_ref')) {
                          // if (requestContentData.settings.showAdditionalGeometries) {
                          if (requestContentData.settings.additionalStyle) {
                            // @TODO: load and attach style
                          } else {
                            rFeatures[j].setStyle(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].reduceStyle(requestContentData.locationStyle));
                          }
                          // } else {
                          //   continue;
                          // }
                        }
                      }
                      try {
                        requestVectorSource.addFeatures(rFeatures);
                      } catch (e) {
                        console.warn('Could not add features to source. The "forceNodes"-option should be used.');
                      }
                    }
                    //self.combineLayers(self);
                  }); // end of AJAX
                },
                strategy: ol.loadingstrategy.bbox
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

              clusterSource = new ol.source.Cluster({
                distance: 40,
                //threshold: 2, //minimum element count
                source: vectorSource,
                zoom: contentData.cluster_zoom
              });
              //console.log(clusterSource);
              this.styleForCluster = styleForCluster;

              //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

              vectorLayer = new ol.layer.AnimatedCluster({ name: 'Cluster',
                source: clusterSource,
                // Use a style function for cluster symbolisation
                style: styleForCluster
              });
            } else {
              vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null);
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
                __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].fitToExtents(self.fittingExtends, self.mapController.map);
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
                vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, contentData && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null);
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

                  vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(clusterSource, vectorStyle);
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

              fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity('4975A8', {
                unit: '%',
                value: 70
              });

              if (contentData.cluster_fillcolor) {
                fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                  unit: '%',
                  value: 70
                });
              }
              if (feature.get('features')[0].get('cluster_fillcolor')) {
                fillcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fillcolor'), {
                  unit: '%',
                  value: 70
                });
              }
              fontcolor = '#FFFFFF';
              if (feature.get('features')[0].get('cluster_fontcolor')) {
                fontcolor = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fontcolor'), {
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
                contentFeature.set('cluster_zoom', layer.cluster.zoom);
                contentFeature.set('cluster_popup', layer.cluster.popup);
                contentFeature.set('cluster_fillcolor', layer.cluster.fillcolor);
                contentFeature.set('cluster_fontcolor', layer.cluster.fontcolor);
                contentFeature.set('loc_linkurl', layer.loc_linkurl);
                contentFeature.set('hover_location', layer.hover_location);
                contentFeature.set('hover_style', layer.hover_style);
                var popup = contentData['popup'] ? contentData['popup'] : Object.assign({}, layer.popup);
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
        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
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
      __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
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
                c4g.maps.popup.$content.html('');
                c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
                c4g.maps.popup.spinner.show();
                var popupInfos = layer.vectorLayer.getLayers().getArray()[0].popup;
                var features = layer.vectorLayer.getLayers().getArray()[0].getSource().getFeatures();
                var coord = features['0'].getGeometry().getCoordinates();
                if (popupInfos.async === false) {
                  var objPopup = {};
                  objPopup.popup = popupInfos;
                  objPopup.feature = features['0'];
                  objPopup.layer = layer.vectorLayer.getLayers().getArray()[0];
                  // Call the popup hook for plugin specific popup content
                  if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                    __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
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
                      if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                        __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
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
      __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
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

                  fVectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(fVectorSource, vectorStyle);

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
                  vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, vectorStyle);
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
                vectorLayer = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].getVectorLayer(vectorSource, vectorStyle);

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
        c4g.maps.popup.$content.html('');
        c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
        c4g.maps.popup.spinner.show();
        var popupInfos = layerGroup.getLayers().getArray()[0].popup;
        var layer = layerGroup.getLayers().getArray()[0];
        var coord = features['0'].getGeometry().getCoordinates();
        if (popupInfos.async === false) {
          var objPopup = {};
          objPopup.popup = popupInfos;
          objPopup.feature = features['0'];
          objPopup.layer = layer;
          // Call the popup hook for plugin specific popup content
          if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
            __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
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
              if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                __WEBPACK_IMPORTED_MODULE_1__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
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
/*! exports provided: C4gLayer */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLayer", function() { return C4gLayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLayer = function C4gLayer(layerArr) {
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
/*! exports provided: C4gLocationStyleController */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLocationStyleController", function() { return C4gLocationStyleController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_locationstyle__ = __webpack_require__(/*! ./c4g-locationstyle */ "./Resources/public/js/c4g-locationstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var C4gLocationStyleController = function () {
    function C4gLocationStyleController(proxy) {
        _classCallCheck(this, C4gLocationStyleController);

        this.proxy = proxy;
        this.mapController = proxy.options.mapController;
        this.arrLocStyles = [];
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
                            self.arrLocStyles[styleData.id] = new __WEBPACK_IMPORTED_MODULE_0__c4g_locationstyle__["C4gLocationStyle"](styleData, self);
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
                    if (!$(self.proxy.options.mapController.spinner.element).hasClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["cssConstants"].HIDE)) {
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
/*! exports provided: C4gLocationStyle */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gLocationStyle", function() { return C4gLocationStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var C4gLocationStyle = function () {
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
                color: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity),
                width: parseInt(styleData.strokewidth.value, 10)
            });
            fillStyle = new ol.style.Fill({
                color: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity)
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
                        imageStyle = new ol.style.Icon({
                            opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
                            src: styleData.icon_src,
                            size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)],
                            scale: parseFloat(styleData.icon_scale, 10)
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
                            ctx.fillStyle = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                        }

                        if (strokewidth && styleData.strokecolor) {
                            ctx.strokeStyle = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
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
                            color: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                                unit: '%',
                                value: 100
                            }),
                            width: parseInt(styleData.label_outl_width.value, 10)
                        });
                        if (styleData.label_outl_box === "1") {
                            backgroundFill = new ol.style.Fill({
                                color: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
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
                                color: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.font_color || defaultColor, styleData.font_opacity)
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
                                color: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(styleData.font_color || defaultColor, styleData.font_opacity)
                            }),
                            stroke: textStyleOutline
                        });
                    }
                }

                // create style-object
                // we need this check because textStyle is a var accessible from closure and will be set even if no label is set
                if (label) {
                    stylesArray.push(new ol.style.Style({
                        image: imageStyle,
                        text: textStyle,
                        stroke: strokeStyle,
                        fill: fillStyle
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
/*! exports provided: config */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.config = this.c4g.maps.config || {};

(function ($, c4g) {
  'use strict';

  /**
   * osmSourceDefinitions
   */

  c4g.maps.config.osm = $.extend(c4g.maps.config.osm, {

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
      url: 'http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png'
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

    TransportMap: {
      attributions: 'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous',
      url: 'http://{a-c}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png'
    },

    NONE: '' // last line
  }); // end of "osmSourceDefinitions" ---

  /**
   * stamenSourceDefinitions
   */
  c4g.maps.config.stamen = $.extend(c4g.maps.config.stamen, {

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
  });

  /**
   * mapquestSourceDefinitions
   */
  c4g.maps.config.mapquest = $.extend(c4g.maps.config.mapquest, {

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
  });

  /**
   * mapboxSourceDefinitions
   */
  c4g.maps.config.mapbox = {

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
  };

  /**
   * klokanSourceDefinitions
   */
  //ToDo not ready
  c4g.maps.config.klokan = {

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
  };

  /**
   * hereSourceDefinitions
   */
  c4g.maps.config.here = {

    HERE: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" href="https://developer.here.com">HERE</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }

  };

  /**
   * thunderforestSourceDefinitions
   */
  c4g.maps.config.thunderforest = {

    Thunderforest: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' + ol.source.OSM.ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous'
    }

  };
})(jQuery, this.c4g);

var config = this.c4g.maps.config;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************/
/*! exports provided: langConstants */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langConstants", function() { return langConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * Language constants (en)
   */

  c4g.maps.constant.i18n = $.extend(c4g.maps.constant.i18n, {

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
    CTRL_RESET_ROTATION: 'Rotation (touch, alt+mouse) zurücksetzen',
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

    ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
    ROUTER_FROM_LABEL: 'Start',
    ROUTER_OVER_LABEL: 'Zwischenziel',
    ROUTER_TO_LABEL: 'Ziel',
    ROUTER_CLEAR_TITLE: 'Löschen',
    ROUTER_CLEAR_HTML: '',
    ROUTER_Label_Interim: 'Zwischenziel',

    ROUTER_SWITCH: 'Wechsel von Start und Ziel',
    ROUTER_OVER: 'Zwischenziel hinzufügen',
    ROUTER_PRINT: 'Routenbeschreibung drucken',

    ROUTER_VIEW_LABEL_ROUTE: 'Route:',
    ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
    ROUTER_VIEW_LABEL_TIME: 'Zeit:',
    ROUTER_VIEW_LABEL_PROFILE: 'Profil:',

    ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
    ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',

    ROUTER: 'Router',
    ROUTER_N: 'Norden',
    ROUTER_E: 'Ost',
    ROUTER_S: 'Süden',
    ROUTER_W: 'Westen',
    ROUTER_NE: 'Nordost',
    ROUTER_SE: 'Südost',
    ROUTER_SW: 'Südwest',
    ROUTER_NW: 'Nordwest',
    ROUTER_DIRECTION_0: 'Unbekannte Anweisung[ auf <b>%s</b>]',
    ROUTER_DIRECTION_1: 'Geradeaus weiterfahren[ auf <b>%s</b>]',
    ROUTER_DIRECTION_2: 'Leicht rechts abbiegen [auf <b>%s</b>]',
    ROUTER_DIRECTION_3: 'Rechts abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_4: 'Scharf rechts abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_5: 'Wenden[ auf <b>%s</b>]',
    ROUTER_DIRECTION_6: 'Scharf links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_7: 'Links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_8: 'Leicht links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_10: 'Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]',
    'ROUTER_DIRECTION_11-1': 'In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-2': 'In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-3': 'In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-4': 'In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-5': 'In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-6': 'In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-7': 'In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-8': 'In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-9': 'In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-x': 'In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen',
    ROUTER_DIRECTION_15: 'Sie haben Ihr Ziel erreicht',

    'ROUTER_5.X_TYPE_0': ' %m fahren[ auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_1': ' %m dem Straßenverlauf folgen[ als <b>%s</b>]',
    'ROUTER_5.X_TYPE_2': ' Fahren Sie[ auf <b>%s</b>] los',
    'ROUTER_5.X_TYPE_3': ' Das Ziel befindet sich <b>%m</b>',
    'ROUTER_5.X_TYPE_4': ' Weiterfahren[ auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_5': ' %m [auf <b>%s</b> ]auffahren',
    'ROUTER_5.X_TYPE_6': ' %m [auf <b>%s</b> ]abfahren',
    'ROUTER_5.X_TYPE_7': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_8': ' %m abbiegen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_9': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_10': ' %m fahren um auf der Straße zu bleiben',
    'ROUTER_5.X_TYPE_11': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_12': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_13': ' %m fahren [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_14': ' abbiegen[ auf <b>%s</b>]',

    'ROUTER_5.X_MOD_0': 'Uturn',
    'ROUTER_5.X_MOD_1': 'Scharf rechts',
    'ROUTER_5.X_MOD_2': 'Rechts',
    'ROUTER_5.X_MOD_3': 'Leicht rechts',
    'ROUTER_5.X_MOD_4': 'Geradeaus',
    'ROUTER_5.X_MOD_5': 'Leicht links',
    'ROUTER_5.X_MOD_6': 'Links',
    'ROUTER_5.X_MOD_7': 'Scharf links',
    'ROUTER_5.X_MOD_8': 'in der Nähe',

    ROUTER_FROM: 'Start',
    ROUTER_TO: 'Ziel',
    ROUTER_FIND_ROUTE: 'Route finden',
    ROUTER_LOC_ROUTE_TO: 'Route hierhin',
    ROUTER_ROUTEDESC: 'Routenbeschreibung',
    ROUTER_ROUTENAME: 'Route',
    ROUTER_DISTANCE: 'Distanz',
    ROUTER_TIME: 'Zeit',
    ROUTER_REV_GEOCODING: 'Ermittle Adresse...',
    ROUTER_ERROR_REV_GEOCODING: 'Fehler beim Ermitteln der Adresse',
    ROUTER_SEARCHING: 'Suche Adresse...',
    ROUTER_ERROR_SEARCHING: 'Fehler beim Suchen der Adresse',
    ROUTER_CALC_ROUTE: 'Berechne Route...',
    ROUTER_ERROR_CALC_ROUTE: 'Fehler beim Berechnen der Route',

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
  }); // end of "language constants" ---
})(jQuery, this.c4g);

var langConstants = this.c4g.maps.constant.i18n;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************/
/*! exports provided: cssConstants */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssConstants", function() { return cssConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * CSS constants
   */

  c4g.maps.constant.css = $.extend(c4g.maps.constant.css, {

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

    ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
    ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
    ROUTER_INPUT_FROM: 'c4g-router-input-from',
    ROUTER_INPUT_TO: 'c4g-router-input-to',
    ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
    ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
    ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
    ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
    ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',

    ROUTER_SWITCH: 'c4g-router-switch',
    ROUTER_OVER: 'c4g-router-over',
    ROUTER_PRINT: 'c4g-router-print',

    ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
    ROUTER_PROFILE_HGV: 'c4g-router-profile-hgv',
    ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
    ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
    ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',

    ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
    ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
    ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
    ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',

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
  }); // end of "css constants" ---
})(jQuery, this.c4g);

var cssConstants = this.c4g.maps.constant.css;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************/
/*! exports provided: Zoomlevel */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoomlevel", function() { return Zoomlevel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};



(function ($, c4g) {
  'use strict';

  /**
   * Displays the current zoomlevel on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Zoomlevel = function (options) {

    var self, element, updateZoomlevel;

    self = this;

    if (!options || !options.mapView) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = $.extend({
      className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = options.mapView.getZoom();

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(options.mapView.getZoom());
    };

    options.mapView.on('change:resolution', updateZoomlevel);
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.Zoomlevel, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Zoomlevel.prototype = $.extend(c4g.maps.control.Zoomlevel.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var Zoomlevel = this.c4g.maps.control.Zoomlevel;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************/
/*! exports provided: Spinner */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};



(function ($, c4g) {
  'use strict';

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */

  c4g.maps.misc.Spinner = function (opt_options) {

    var options, target, spinnerSpan;

    options = opt_options || {};

    // default options
    options = $.extend({
      className: '',
      target: '.' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].SPINNER + options.className + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE;
    $(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;
  };

  // Add methods to spinner
  c4g.maps.misc.Spinner.prototype = $.extend(c4g.maps.misc.Spinner.prototype, {

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */
    show: function show() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE)) {
        $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    },

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */
    hide: function hide() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          $(this.element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }

  }); // End of "add methods to spinner"
})(jQuery, this.c4g);

var Spinner = this.c4g.maps.misc.Spinner;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-proxy.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-proxy.js ***!
  \***********************************************/
/*! exports provided: MapProxy */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapProxy", function() { return MapProxy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_baselayer_controller__ = __webpack_require__(/*! ./c4g-baselayer-controller */ "./Resources/public/js/c4g-baselayer-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_layer_controller__ = __webpack_require__(/*! ./c4g-layer-controller */ "./Resources/public/js/c4g-layer-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_locationstyle_controller__ = __webpack_require__(/*! ./c4g-locationstyle-controller */ "./Resources/public/js/c4g-locationstyle-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__ = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 'namespace'
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.hook = this.c4g.maps.hook || {};

'use strict';









var c4g = this.c4g;
var MapProxy = function () {
  function MapProxy(options) {
    _classCallCheck(this, MapProxy);

    var mapData;

    this.options = jQuery.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    c4g.maps.editorStyles = c4g.maps.editorStyles || {};

    //c4g.maps.hook.proxy_fillPopup = [];

    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];

    // add global hook for accessibility when there is no proxy reference
    c4g.maps.hook.proxy_layer_loaded = c4g.maps.hook.proxy_layer_loaded || [];

    this.baselayerIds = [];
    this.activeBaselayerId = undefined;
    this.layerIds = [];
    this.activeLayerIds = {};

    this.requestFunctions = {};
    this.request = {};

    this.baselayers_loaded = false;
    this.layers_loaded = false;

    mapData = this.options.mapController.data;

    this.mapId = mapData.id;

    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent;
    //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;
    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;

    // this.initialize();
  }

  _createClass(MapProxy, [{
    key: "initialize",
    value: function initialize() {
      var self, map;

      self = this;
      map = this.options.mapController.map;

      this.baselayerController = new __WEBPACK_IMPORTED_MODULE_0__c4g_baselayer_controller__["C4gBaselayerController"](this);
      this.baselayerController.loadBaseLayers();
      this.layerController = new __WEBPACK_IMPORTED_MODULE_1__c4g_layer_controller__["C4gLayerController"](this);
      this.layerController.loadLayers();
      this.locationStyleController = new __WEBPACK_IMPORTED_MODULE_2__c4g_locationstyle_controller__["C4gLocationStyleController"](this);
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
          __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(self.hook_map_zoom);

          if (self.options.mapController.data.caching && map.getView().getZoom()) {
            __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].storeValue('zoom', map.getView().getZoom());
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
        __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.hook_map_zoom, self);

        if (self.options.mapController.data.caching && map.getView().getZoom()) {
          __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].storeValue('zoom', map.getView().getZoom());
        }
      }); // end of "zoom-observer"

      map.getView().on('change:center', function (evt) {
        if (self.options.mapController.data.caching) {
          var coordinate = ol.proj.toLonLat(map.getView().getCenter());
          if (coordinate) {
            __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].storeValue('lon', coordinate[0]);
            __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].storeValue('lat', coordinate[1]);
          }
        }
        c4g.maps.hook.map_center_changed = c4g.maps.hook.map_center_changed || [];
        __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.map_center_changed, map.getView().getCenter());
      }); // end of "center-observer"

      // click-observer
      //
      map.on('click', function (clickEvent) {

        var feature, fFeatures, layer, popupInfos, currentZoom, minZoom, newCenter, geometry, coord, setPopup, styleFunc, styleCluster, objPopup;

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
            var result = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(self.hook_map_click, clickEvent);
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

            c4g.maps.popup.popup.setPosition(coord);
            if (popupInfos.content) {
              c4g.maps.popup.$content.html('');
              c4g.maps.popup.$popup.addClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ACTIVE).addClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].LOADING);
              c4g.maps.popup.spinner.show();

              if (popupInfos.async === false || popupInfos.async == '0') {
                objPopup = {};
                objPopup.popup = popupInfos;
                objPopup.feature = feature;
                objPopup.layer = layer;
                // Call the popup hook for plugin specific popup content
                if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                  __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
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
                  if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                    __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                  }

                  self.setPopup(objPopup);
                });
              }
            } else {
              c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ACTIVE);
            }
          } else {
            c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ACTIVE);
          }

          // hooks
          __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.hook_map_click, clickEvent);
        }
      }); // end of "click-observer"


      // this.options.mapController.map.getLayers().on('change:length', function(event) {
      //     ;
      // });

    } // end of "initial"*

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

      popupContent = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].replaceAllPlaceholders(popupConfig.popup.content, feature, layer);
      // @TODO: check for route-option & display "route-to"
      // NOTE: does not work async this way
      if (this.options.mapController.controls.router && popupConfig.popup.routing_link) {
        router = this.options.mapController.controls.router;

        routingHandler = function routingHandler(event) {
          if (self.options.mapController.activePortside !== router) {
            router.open();
          }

          router.setInput($(event.currentTarget).hasClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].POPUP_ROUTE_FROM), feature.getGeometry().getCoordinates());
        }; // end of "routingHandler()"

        routeButtonWrapper = document.createElement('div');
        routeButtonWrapper.className = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].POPUP_ROUTE_WRAPPER;

        routeFromButton = document.createElement('button');
        routeFromButton.className = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].POPUP_ROUTE_FROM;
        jQuery(routeFromButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeFromButton);

        routeFromButtonSpan = document.createElement('span');
        routeFromButtonSpan.innerHTML = __WEBPACK_IMPORTED_MODULE_6__c4g_maps_constant_i18n_de__["langConstants"].POPUP_ROUTE_FROM;
        routeFromButton.appendChild(routeFromButtonSpan);

        routeToButton = document.createElement('button');
        routeToButton.className = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);

        routeToButtonSpan = document.createElement('span');
        routeToButtonSpan.innerHTML = __WEBPACK_IMPORTED_MODULE_6__c4g_maps_constant_i18n_de__["langConstants"].POPUP_ROUTE_TO;
        routeToButton.appendChild(routeToButtonSpan);
      }

      if (popupContent.trim() || router) {
        c4g.maps.popup.$content.html(popupContent);
        if (router) {
          c4g.maps.popup.$content.append(routeButtonWrapper);
        }
        if (feature.getGeometry() && feature.getGeometry() instanceof ol.geom.Point) {
          c4g.maps.popup.popup.setPosition(feature.getGeometry().getCoordinates());
        }
      } else {
        // hide popup if there is no valid content left
        c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ACTIVE);
      }

      c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].LOADING);
      c4g.maps.popup.spinner.hide();
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
        c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["cssConstants"].ACTIVE);
      });

      popup = new ol.Overlay({
        element: popUpElement,
        positioning: 'bottom-left',
        offset: [-50, 0] /*,
                         autoPan: true,
                         autoPanAnimation: {
                         duration: 250
                         },
                         autoPanMargin: 20*/
      });

      c4g.maps.popup = {};
      c4g.maps.popup.popup = popup;
      // attach a spinner to the popup
      c4g.maps.popup.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["Spinner"]({ target: popUpElement });

      this.options.mapController.map.addOverlay(popup);

      c4g.maps.popup.$popup = jQuery(c4g.maps.popup.popup.getElement());
      c4g.maps.popup.$content = jQuery('.c4g-popup-content', c4g.maps.popup.$popup);
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

                var fillcolor = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity('4975A8', {
                  unit: '%',
                  value: 70
                });

                if (contentData.cluster_fillcolor) {
                  fillcolor = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["utils"].getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
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
/*! exports provided: utils */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};




(function ($, c4g) {
  'use strict';

  /**
   * c4g-Maps utility functions
   */

  c4g.maps.utils = $.extend(c4g.maps.utils, {
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
     * Reduce a defined style, to a simpler version.
     *
     * The reduced style is the first style of the defined styleset,
     * with a 1px thick stroke and a circle with a 5px radius.
     *
     * This can be used to display additional geometries with a main-geometry,
     * without having to define a whole new style.
     *
     * @param   {number|string}           styleId  [description]
     *
     * @return  {array<ol.style.Style>}            [description]
     */
    reduceStyle: function reduceStyle(styleId) {
      var style, reducedStyle, fillStyle, strokeStyle;

      if (!c4g.maps.locationStyles[styleId] || !c4g.maps.locationStyles[styleId].style) {
        return [];
      }

      style = c4g.maps.locationStyles[styleId].style()[0];

      fillStyle = style.getFill();
      strokeStyle = style.getStroke();
      strokeStyle.setWidth(1);

      reducedStyle = new ol.style.Style({
        image: new ol.style.Circle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: 5
        }),
        // text: style.getText(),
        stroke: strokeStyle,
        fill: fillStyle
      });

      return [reducedStyle];
    }, // end of "reduceStyle"

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
          //rotation: Math.PI
        });
        // map.beforeRender(
        //     ol.animation.pan({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       source: view.getCenter()
        //     }),
        //     ol.animation.zoom({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       resolution: view.getResolution()
        //     })
        // );
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
        if (typeof window[functionName] === 'function') {
          // search style
          if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
            style = feature.getStyle();
          } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
            style = layer.getStyle();
          } else {
            return '';
          }
          return window[functionName](feature, style);
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


    redrawMapView: function redrawMapView(mapController) {
      var mapData = mapController.data;
      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
      mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
      $(controlContainerTopLeft).after(controlContainerBottomLeft);
      mapController.leftSlideElements.push(controlContainerBottomLeft);

      var controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;

      if (mapData.scaleline) {
        mapController.map.removeControl(mapController.controls.scaleline);
        mapController.controls.scaleline = new ol.control.ScaleLine({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeft,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.scaleline);
      }

      $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);

      if (mapData.zoomlevel) {
        mapController.map.removeControl(mapController.controls.zoomlevel);
        mapController.controls.zoomlevel = new __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__["Zoomlevel"]({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.zoomlevel);
      }

      if (mapData.mouseposition) {
        mapController.map.removeControl(mapController.controls.mouseposition);
        mapController.controls.mouseposition = new ol.control.MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: ol.coordinate.toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.mouseposition);
      }
    },
    getValue: function getValue(key) {
      return localStorage[key] || '';
    },
    storeValue: function storeValue(key, value) {
      localStorage[key] = value; // only strings
    }
  });
})(jQuery, this.c4g);

var utils = this.c4g.maps.utils;

/***/ }),

/***/ "./Resources/public/js/c4g-overlay-controller.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-overlay-controller.js ***!
  \*******************************************************/
/*! exports provided: C4gOverlayController */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gOverlayController", function() { return C4gOverlayController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_overlay__ = __webpack_require__(/*! ./c4g-overlay */ "./Resources/public/js/c4g-overlay.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var C4gOverlayController = function () {
    function C4gOverlayController(baselayer) {
        _classCallCheck(this, C4gOverlayController);

        this.baselayer = baselayer;
        this.arrOverlays = [];
    }

    _createClass(C4gOverlayController, [{
        key: 'showOverlayLayer',
        value: function showOverlayLayer(overlayId) {
            var self = this,
                overlayLayerConfig,
                osmSourceConfigs = c4g.maps.config.osm,
                stamenSourceConfigs = c4g.maps.config.stamen,
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
/*! exports provided: C4gOverlay */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C4gOverlay", function() { return C4gOverlay; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gOverlay = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWxheWVyLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbG9jYXRpb25zdHlsZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWxvY2F0aW9uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXByb3h5LmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW92ZXJsYXkuanMiXSwibmFtZXMiOlsiQzRnQmFzZWxheWVyQ29udHJvbGxlciIsInByb3h5IiwibWFwQ29udHJvbGxlciIsIm9wdGlvbnMiLCJhcnJCYXNlbGF5ZXJzIiwiYmFzZWxheWVySWRzIiwic2VsZiIsImpRdWVyeSIsImFqYXgiLCJhcGlfYmFzZWxheWVyX3VybCIsImRhdGFUeXBlIiwiZGF0YSIsImpzb25wIiwiZG9uZSIsImJhc2VsYXllciIsImFkZEJhc2VMYXllcnMiLCJmYWlsIiwiY29uc29sZSIsIndhcm4iLCJzcGlubmVyIiwiaGlkZSIsImFsd2F5cyIsImJhc2VsYXllcnMiLCJ1aWQiLCJpIiwiaiIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50IiwibmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaWQiLCJ1dGlscyIsImdldFVuaXF1ZUlkIiwicHVzaCIsIkM0Z0Jhc2VsYXllciIsInNob3dCYXNlTGF5ZXIiLCJoYXNPdmVybGF5cyIsIm92ZXJsYXlzIiwib3ZlcmxheUNvbnRyb2xsZXIiLCJhcnJPdmVybGF5cyIsIkM0Z092ZXJsYXkiLCJsYXllciIsInNob3dPdmVybGF5TGF5ZXIiLCJhY3RpdmVCYXNlbGF5ZXJJZCIsInByb3ZpZGVyIiwic3R5bGUiLCJiYXNlbGF5ZXJzX2xvYWRlZCIsImNhbGxIb29rRnVuY3Rpb25zIiwiaG9va19iYXNlbGF5ZXJfbG9hZGVkIiwibGF5ZXJPcHRpb25zIiwiYmFzZUxheWVyQ29uZmlnIiwic291cmNlQ29uZmlncyIsIm5ld0Jhc2VsYXllciIsIm5vVXJsIiwidXJsIiwidXJscyIsIm9sIiwiVGlsZSIsInNvdXJjZSIsIlhZWiIsImV4dGVudCIsImV4dGVuZCIsIm9zbSIsIk9TTSIsIiQiLCJzdGFtZW4iLCJTdGFtZW4iLCJhcGlfa2V5IiwiYXBwX2lkIiwibWFwYm94X3R5cGUiLCJtYXBib3giLCJ1cmxfY2xhc3NpYyIsImhpZGVfaW5fYmUiLCJrbG9rYW5fdHlwZSIsIlZlY3RvclRpbGUiLCJrbG9rYW4iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJnbFN0eWxlIiwib2xtcyIsImFwcGx5U3R5bGUiLCJoZXJlX3R5cGUiLCJoZXJlIiwidGh1bmRlcmZvcmVzdF90eXBlIiwidGh1bmRlcmZvcmVzdCIsIkJpbmdNYXBzIiwiY3VsdHVyZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwidXNlckxhbmd1YWdlIiwia2V5IiwiaW1hZ2VyeVNldCIsImluZGV4T2YiLCJUaWxlV01TIiwicGFyYW1zIiwiTEFZRVJTIiwibGF5ZXJzIiwiVkVSU0lPTiIsInZlcnNpb24iLCJUUkFOU1BBUkVOVCIsInRyYW5zcGFyZW50IiwiZ3V0dGVyIiwiYXR0cmlidXRpb25zIiwiYXR0cmlidXRpb24iLCJBVFRSSUJVVElPTiIsImNyb3NzT3JpZ2luIiwiYmFzZUxheWVyR3JvdXAiLCJpbmRleCIsImhhc093blByb3BlcnR5IiwiZWxlbWVudCIsImNyZWF0ZUJhc2VMYXllciIsIm1heFpvb20iLCJtYXAiLCJnZXRWaWV3IiwiZ2V0UmVzb2x1dGlvbkZvclpvb20iLCJtaW5ab29tIiwic2V0TWluUmVzb2x1dGlvbiIsInNldE1heFJlc29sdXRpb24iLCJHcm91cCIsImJhc2VMYXllclVpZCIsImFkZEJhc2VsYXllciIsImJhc2VMYXllcnMiLCJ2aWV3IiwiY29uZmlnIiwiYWRkaXRpb25hbCIsImFkZGl0aW9uYWxBdHRyaWJ1dGlvbiIsImV4aXN0cyIsImdlb3NlYXJjaF9hdHRyaWJ1dGlvbiIsImdlb3NlYXJjaCIsImdlb3NlYXJjaF9lbmdpbmUiLCJjdXN0b21fYXR0cmlidXRpb24iLCJnZW9zZWFyY2hBdHRyaWJ1dGlvbiIsInNvcnRpbmciLCJnZXRMYXllcnMiLCJpdGVtIiwiZ2V0IiwiZm9yRWFjaCIsImFycmF5Iiwic2V0VmlzaWJsZSIsInpvb20iLCJnZXRab29tIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwic2V0Wm9vbSIsIm1hcERhdGEiLCJ6b29tbGV2ZWwiLCJtb3VzZXBvc2l0aW9uIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIk9MX1VOU0VMRUNUQUJMRSIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsInByZXBlbmQiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiYWZ0ZXIiLCJsZWZ0U2xpZGVFbGVtZW50cyIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwibmV3VmlldyIsIlZpZXciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsInJvdGF0aW9uIiwiZ2V0Um90YXRpb24iLCJyZXNvbHV0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsInNldFZpZXciLCJyZWRyYXdNYXBWaWV3IiwiaG9va19iYXNlbGF5ZXJfdmlzaWJpbGl0eSIsImNlc2l1bSIsImVuYWJsZSIsIm9sM2QiLCJvbGNzIiwiT0xDZXNpdW0iLCJjcmVhdGVTeW5jaHJvbml6ZXJzIiwic2V0RW5hYmxlZCIsImdldEVuYWJsZWQiLCJiYXNlbGF5ZXJBcnIiLCJjb250cm9sbGVyIiwicGlkIiwiZGlzcGxheV9uYW1lIiwib3NtX3N0eWxlIiwib3NtX3N0eWxlX3VybDEiLCJvc21fc3R5bGVfdXJsMiIsIm9zbV9zdHlsZV91cmwzIiwib3NtX3N0eWxlX3VybDQiLCJvc21fa2V5bmFtZSIsImJpbmdfc3R5bGUiLCJ3bXNfZ3V0dGVyIiwicHJvdGVjdF9iYXNlbGF5ZXIiLCJwZXJtaXR0ZWRfZ3JvdXBzIiwic3R5bGVfdXJsIiwibGF5ZXJHcm91cCIsIkM0Z092ZXJsYXlDb250cm9sbGVyIiwiYzRnIiwiQzRnTGF5ZXJDb250cm9sbGVyIiwiYXJyTGF5ZXJzIiwibGF5ZXJSZXF1ZXN0cyIsIm1hcElkIiwiYXBpX2xheWVyX3VybCIsImFkZExheWVycyIsImZvcmVpZ25MYXllcnMiLCJsYXllcnNfbG9hZGVkIiwiaG9va19sYXllcl9sb2FkZWQiLCJsYXllcklkcyIsImNoZWNrTG9jYXRpb25TdHlsZXMiLCJkcmF3TGF5ZXJJbml0aWFsIiwiayIsInAiLCJpc1Zpc2libGUiLCJzdG9yZWRJdGVtIiwibGlua0l0ZW1zIiwiY3VycmVudFpvb20iLCJmbkhhbmRsZUFuZEFwcGVuZExheWVyQ2hpbGRzIiwiZW5kbGVzc0xvb3BJZCIsInBhcmVudElkIiwicGFyZW50SWRzIiwicGVybWFsaW5rZWRMYXllcnMiLCJjaGlsZCIsImZuSGFuZGxlQ2hpbGRzIiwic3RhcmJvYXJkIiwiZm5BZGRUb0hvb2siLCJvYmpJdGVtIiwidG9nZ2xlIiwiZW50cnlXcmFwcGVyIiwiaGFzQ2hpbGRzIiwidmlzaWJsZUNoaWxkcyIsImNoaWxkcyIsImxheWVybmFtZSIsImxheWVyaWQiLCJsYXllcmljb24iLCJ0YWJJZCIsImF3ZXNvbWVpY29uIiwibWFwcyIsInN0YXJib2FyZFRhYnMiLCJjb250cm9scyIsImhvb2tfbGF5ZXJzd2l0Y2hlcl9sb2FkZWQiLCJjb250cm9sIiwic3RhcmJvYXJkcGx1Z2luIiwiQ3VzdG9tdGFiIiwiQzRnTGF5ZXIiLCJjb250ZW50Iiwib2JqZWN0VG9BcnJheSIsImNzc0NsYXNzIiwidHlwZSIsImVkaXRhYmxlIiwicmVuZGVyU3BlY2lhbCIsImRpc3BsYXkiLCJmTGF5ZXIiLCJjb3VudCIsImNoaWxkQXJyIiwiY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbSIsImlzSW5hY3RpdmUiLCJ2aXNpYmxlIiwiYWN0aXZlTGF5ZXJJZHMiLCJpdGVtVWlkIiwiZmVhdHVyZXMiLCJmZWF0dXJlUHJvamVjdGlvbiIsImRhdGFQcm9qZWN0aW9uIiwiY29udGVudERhdGEiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RDb250ZW50RGF0YSIsInJlcXVlc3RWZWN0b3JTb3VyY2UiLCJ2ZWN0b3JMYXllciIsInZlY3RvclNvdXJjZSIsInZlY3RvclN0eWxlIiwiY2x1c3RlclNvdXJjZSIsInN0eWxlRm9yQ2x1c3RlciIsInJlZnJlc2hJbnRlcnZhbCIsInJlZnJlc2hBamF4VmFycyIsImZuQXR0YWNoRGF0YVRvTGF5ZXIiLCJwcm9wZXJ0aWVzIiwicG9wdXAiLCJ0b29sdGlwIiwidG9vbHRpcF9sZW5ndGgiLCJsYWJlbCIsInpvb21fb25jbGljayIsImNvbnRlbnRGZWF0dXJlcyIsImZlYXR1cmUiLCJzaXplIiwiZkZlYXR1cmVzIiwiaWNvbk9mZnNldCIsInJhZGl1cyIsImZpbGxjb2xvciIsImZvbnRjb2xvciIsImxvY2F0aW9uU3R5bGUiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsImZpdHRpbmdFeHRlbmRzIiwiZ2V0RXh0ZW50IiwidW5kZWZpbmVkIiwid2luZG93IiwiZ2V0U3R5bGUiLCJnZXRJbWFnZSIsImdldFJhZGl1cyIsImdldEFuY2hvciIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsInVuaXQiLCJ2YWx1ZSIsImNsdXN0ZXJfZmlsbGNvbG9yIiwiY2x1c3Rlcl9mb250Y29sb3IiLCJTdHlsZSIsInRleHQiLCJUZXh0IiwiZm9udCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZmlsbCIsIkZpbGwiLCJjb2xvciIsInRvU3RyaW5nIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2V0dGluZ3MiLCJib3VuZGluZ0JveCIsIlZlY3RvciIsImxvYWRlciIsImJvdW5kaW5nQXJyYXkiLCJzdHJCb3VuZGluZ0JveCIsInByb2oiLCJ0cmFuc2Zvcm1FeHRlbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiYWJvcnQiLCJmb3JtYXQiLCJjZW50ZXJQb2ludCIsInJGZWF0dXJlcyIsIm9zbU5vZGVzIiwib3NtTmRzIiwibm9kZUlkeCIsIm5kSWR4IiwiaW5mb05vZGVzIiwibmV3VGFnIiwicmVmIiwibGluZUV4dGVudCIsImNoaWxkcmVuIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzaG93QWRkaXRpb25hbEdlb21ldHJpZXMiLCJwYXJlbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJlIiwiT1NNWE1MIiwicmVhZEZlYXR1cmVzIiwiZ2V0R2VvbWV0cnkiLCJnZXRUeXBlIiwic2V0IiwiY2x1c3Rlcl96b29tIiwiY2x1c3Rlcl9wb3B1cCIsImxvY19saW5rdXJsIiwiaG92ZXJfbG9jYXRpb24iLCJob3Zlcl9zdHlsZSIsImZvcmNlTm9kZXMiLCJnZXRJbnRlcmlvclBvaW50IiwiZ2V0Q29vcmRpbmF0ZXMiLCJzZXRHZW9tZXRyeSIsImdlb20iLCJQb2ludCIsImFkZGl0aW9uYWxTdHlsZSIsInNldFN0eWxlIiwicmVkdWNlU3R5bGUiLCJhZGRGZWF0dXJlcyIsInN0cmF0ZWd5IiwibG9hZGluZ3N0cmF0ZWd5IiwiYmJveCIsImFsbCIsInJlZnJlc2giLCJpbnRlcnZhbCIsImJsbkhhc1Bvc2l0aW9uSWRzIiwiYXJyUG9zaXRpb25JZHMiLCJvYmpGZWF0dXJlcyIsImZvckVhY2hGZWF0dXJlIiwicmVuZXdhYmxlUmVzcG9uc2UiLCJlYWNoIiwiZmVhdHVyZURhdGEiLCJyZWFkRmVhdHVyZSIsInBvcHVwQ29udGVudCIsInN0eWxlSWQiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJnZXRTb3VyY2UiLCJuZXN0ZWRGZWF0dXJlIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiYXJyTmV3UG9zaXRpb25JZHMiLCJvYmpOZXdGZWF0dXJlcyIsInBvc2l0aW9uSWQiLCJyZW1vdmVGZWF0dXJlIiwiYWRkRmVhdHVyZSIsInJlcXVlc3RGdW5jdGlvbnMiLCJjbHVzdGVyIiwiQ2x1c3RlciIsImRpc3RhbmNlIiwiQW5pbWF0ZWRDbHVzdGVyIiwiZ2V0VmVjdG9yTGF5ZXIiLCJmaXRUb0V4dGVuZCIsIm9uIiwiZml0VG9FeHRlbnRzIiwibGF5ZXJDb250ZW50IiwiY29udGVudEZlYXR1cmUiLCJHZW9KU09OIiwibWlzc2luZ1N0eWxlcyIsInVuc3R5bGVkRmVhdHVyZXMiLCJvbmNsaWNrX3pvb20iLCJkcmF3TGF5ZXIiLCJhZGRMYXllciIsImFzeW5jX2NvbnRlbnQiLCJzaG93IiwibG9jc3R5bGUiLCJhcGlfbGF5ZXJjb250ZW50ZGF0YV91cmwiLCJsb29wRGF0YSIsInJlc3VsdENvb3JkaW5hdGUiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwicG9pbnQiLCJGZWF0dXJlIiwic2V0SWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZWFyY2giLCJjbHVzdGVyRGlzdGFuY2UiLCJhcGlfbGF5ZXJjb250ZW50X3VybCIsIm5ld0xvY2F0aW9uU3R5bGVzIiwibG9hZExheWVyQ29udGVudCIsImxheWVyVWlkIiwia2VlcExheWVyIiwicmVtb3ZlTGF5ZXIiLCJob29rX2xheWVyX3Zpc2liaWxpdHkiLCJjbGVhckludGVydmFsIiwic2V0Q2VudGVyIiwiY2hpbGRVaWQiLCJjaGlsZExheWVyIiwiZ2V0QXJyYXkiLCJtYXBMYXllcnMiLCJhY3RpdmVGb3Jab29tIiwic2hvd1BvcHVwT25BY3RpdmUiLCIkY29udGVudCIsImh0bWwiLCIkcG9wdXAiLCJhZGRDbGFzcyIsImNvbnN0YW50IiwiY3NzIiwiQUNUSVZFIiwiTE9BRElORyIsInBvcHVwSW5mb3MiLCJnZXRGZWF0dXJlcyIsImNvb3JkIiwiYXN5bmMiLCJvYmpQb3B1cCIsImhvb2siLCJwcm94eV9maWxsUG9wdXAiLCJzZXRQb3B1cCIsImFwaV9pbmZvd2luZG93X3VybCIsInBvcHVwSW5mbyIsInJvdXRpbmdfbGluayIsInNldEludGVydmFsIiwiZnVuY3Rpb24iLCJlbGVtZW50Q29udGVudCIsImdlb21ldHJ5IiwiQ2lyY2xlIiwiZnJvbUxvbkxhdCIsImZuU3R5bGVGdW5jdGlvbiIsIkZ1bmN0aW9uIiwiZiIsImZMYXllckdyb3VwIiwiZkxheWVycyIsImZWZWN0b3JMYXllciIsImZWZWN0b3JTb3VyY2UiLCJzZXRMYXllcnMiLCJzcGxpdF9nZW9qc29uIiwiZ2VvanNvbl9hdHRyaWJ1dGVzIiwic3BsaXQiLCJsYXllcklkIiwibCIsImxheWVyQXJyIiwiaGlkZV9jaGlsZCIsInpvb21fbG9jYXRpb25zIiwiY2hpbGRzQ291bnQiLCJnZW9qc29uX3pvb20iLCJoaWRlV2hlbkluVGFiIiwicHJvamVjdElkIiwiQzRnTG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJJZHMiLCJvcHRfb3B0aW9ucyIsImNvbXBsZXRlIiwic3VjY2VzcyIsIm1ha2VBamF4Iiwic3R5bGVJZHMiLCJhcGlfbG9jc3R5bGVfdXJsIiwiaWRzIiwic3R5bGVEYXRhIiwic3VjY2Vzc2Z1bCIsIkM0Z0xvY2F0aW9uU3R5bGUiLCJqWGhyIiwic3RyU3RhdHVzIiwiY29tcGxldGVkIiwiaGFzQ2xhc3MiLCJISURFIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJuIiwic3BsaWNlIiwibG9jU3R5bGVBcnIiLCJnZXRTdHlsZUZ1bmN0aW9uIiwiZWRpdG9yIiwiZ2V0U3R5bGVFZGl0b3JDb25maWciLCJtaW56b29tIiwibWF4em9vbSIsInN0eWxlRnVuY3Rpb24iLCJpbWFnZVN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJ0ZXh0U3R5bGUiLCJ0ZXh0U3R5bGVPdXRsaW5lIiwiYmFja2dyb3VuZEZpbGwiLCJiYWNrZ3JvdW5kU3Ryb2tlIiwiU3Ryb2tlIiwic3Ryb2tlY29sb3IiLCJzdHJva2VvcGFjaXR5Iiwid2lkdGgiLCJzdHJva2V3aWR0aCIsImZpbGxvcGFjaXR5Iiwic3R5bGV0eXBlIiwiUmVndWxhclNoYXBlIiwic3Ryb2tlIiwicG9pbnRzIiwiYW5nbGUiLCJNYXRoIiwiUEkiLCJyYWRpdXMxIiwicmFkaXVzMiIsImZsb29yIiwiaWNvbl9zcmMiLCJJY29uIiwib3BhY2l0eSIsImljb25fb3BhY2l0eSIsInNyYyIsImljb25fc2l6ZSIsInNjYWxlIiwiaWNvbl9zY2FsZSIsInN2Z1NyYyIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJ0cmFuc2xhdGUiLCJpbWciLCJJbWFnZSIsInpJbmRleCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImltZ1NpemUiLCJQaG90byIsImtpbmQiLCJwaG90b0tpbmQiLCJjcm9wIiwic2hhZG93IiwiZ2V0SWQiLCJzdHlsZXNBcnJheSIsImFycm93U2l6ZSIsImFycm93U2l6ZVVuaXQiLCJzZWdtZW50TGVuZ3RoIiwiYXJyb3dzX21pbnpvb20iLCJzdGFydF9waXhlbCIsImVuZF9waXhlbCIsImRlZmF1bHRDb2xvciIsImRlZmF1bHRfbGFiZWxfY29sb3IiLCJsYWJlbF9vdXRsX2NvbG9yIiwibGFiZWxfb3V0bF93aWR0aCIsImxhYmVsX291dGxfYm94IiwibGFiZWxfb2Zmc2V0IiwiZm9udF93ZWlnaHQiLCJmb250X3N0eWxlIiwiZm9udF9zaXplIiwiZm9udF9mYW1pbHkiLCJ0ZXh0QWxpZ24iLCJsYWJlbF9hbGlnbl9ob3IiLCJ0ZXh0QmFzZWxpbmUiLCJsYWJlbF9hbGlnbl92ZXIiLCJmb250X2NvbG9yIiwiZm9udF9vcGFjaXR5IiwiaW1hZ2UiLCJsaW5lX2Fycm93cyIsImZvckVhY2hTZWdtZW50IiwibGluZV9hcnJvd3NfcmFkaXVzIiwic3RhcnQiLCJlbmQiLCJsaW5lX2Fycm93c19taW56b29tIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsInNxcnQiLCJwb3ciLCJyb3RhdGVXaXRoVmlldyIsImF0YW4yIiwibGluZV9hcnJvd3NfYmFjayIsImVkaXRvckNvbmZpZyIsImNvbGxlY3QiLCJlZGl0b3JfY29sbGVjdCIsImljb25TcmMiLCJlZGl0b3JfaWNvbiIsInZhcnMiLCJlZGl0b3JfdmFycyIsImVkaXRvcl9zb3J0IiwiQ3ljbGVNYXAiLCJHZXJtYW4iLCJHZXJtYW5UcmFuc3BvcnQiLCJMYW5kc2NhcGVNYXAiLCJNYXBuaWsiLCJUcmFuc3BvcnRNYXAiLCJOT05FIiwiVG9uZXIiLCJUb25lckxhYmVscyIsIlRvbmVyTGluZXMiLCJUZXJyYWluIiwiV2F0ZXJjb2xvciIsIm1hcHF1ZXN0IiwiTWFwUXVlc3RPcGVuIiwiTWFwUXVlc3RIeWIiLCJNYXBRdWVzdFNhdCIsIk1hcGJveCIsInRpbGVTaXplIiwiTWFwYm94Q2xhc3NpYyIsIk9wZW5NYXBUaWxlcyIsIk1WVCIsInRpbGVHcmlkIiwidGlsZWdyaWQiLCJjcmVhdGVYWVoiLCJ0aWxlUGl4ZWxSYXRpbyIsIlRpbGVIb3N0aW5nIiwiSEVSRSIsIlRodW5kZXJmb3Jlc3QiLCJpMThuIiwiTEFORyIsIk5BTUUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfRURJVE9SIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJDVFJMX0lORk9QQUdFIiwiQ1RSTF9BRERJVElPTkFMUEFORUwiLCJDVFJMX0FDQ09VTlQiLCJDVFJMX1pPT01MRVZFTCIsIkNUUkxfTU9VU0VDT09SRFMiLCJDVFJMX0dFT1NFQVJDSCIsIkNUUkxfU1RBUlRfU0VBUkNIIiwiQ1RSTF9PVkVSVklFV01BUCIsIkNUUkxfR0VPQk9PS01BUktTIiwiQ1RSTF9TSURFQk9BUkQiLCJDVFJMX1NUQVJCT0FSRCIsIkNUUkxfQVRUUklCVVRJT04iLCJDVFJMX0dSSUQiLCJDVFJMX1BFUk1BTElOSyIsIkNUUkxfRlVMTFNDUkVFTiIsIkNUUkxfUFJJTlQiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0JBU0VMQVlFUiIsIlNUQVJCT0FSRF9MQVlFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTSURFQk9BUkQiLCJST1VURVJfVklFV19BRERSRVNTX0lOUFVUIiwiUk9VVEVSX0ZST01fTEFCRUwiLCJST1VURVJfT1ZFUl9MQUJFTCIsIlJPVVRFUl9UT19MQUJFTCIsIlJPVVRFUl9DTEVBUl9USVRMRSIsIlJPVVRFUl9DTEVBUl9IVE1MIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX0ZST00iLCJST1VURVJfVE8iLCJST1VURVJfRklORF9ST1VURSIsIlJPVVRFUl9MT0NfUk9VVEVfVE8iLCJST1VURVJfUk9VVEVERVNDIiwiUk9VVEVSX1JPVVRFTkFNRSIsIlJPVVRFUl9ESVNUQU5DRSIsIlJPVVRFUl9USU1FIiwiUk9VVEVSX1JFVl9HRU9DT0RJTkciLCJST1VURVJfRVJST1JfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9TRUFSQ0hJTkciLCJST1VURVJfRVJST1JfU0VBUkNISU5HIiwiUk9VVEVSX0NBTENfUk9VVEUiLCJST1VURVJfRVJST1JfQ0FMQ19ST1VURSIsIk1FQVNVUkVUT09MUyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJHRU9CT09LTUFSS1NfUExBQ0VIT0xERVIiLCJJTkZPUEFHRSIsIkFERElUSU9OQUxQQU5FTCIsIkFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwibGFuZ0NvbnN0YW50cyIsIk9QRU4iLCJDTE9TRUFCTEUiLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJJTkFDVElWRSIsIkFOSU1BVElPTl9TUElOIiwiTEFSR0UiLCJTTUFMTCIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkFUVFJJQlVUSU9OX0xPR08iLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQiLCJFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkciLCJFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT04iLCJFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRSIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfRFJBV19PUFRJT05TIiwiR0VPU0VBUkNIIiwiR0VPU0VBUkNIX1dSQVBQRVIiLCJHRU9TRUFSQ0hfVFJJR0dFUiIsIkdFT1NFQVJDSF9TVEFSVCIsIkdSQVRJQ1VMRSIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUUiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUiIsIlRPT0xUSVBfUE9QVVAiLCJaT09NX0xFVkVMIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfQ0xFQVIiLCJST1VURVJfQlVUVE9OQkFSIiwiUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUiIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX0hHViIsIlJPVVRFUl9QUk9GSUxFX0JJS0UiLCJST1VURVJfUFJPRklMRV9GT09UIiwiUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU0iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU4iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSIsIk9MX0NPTlRST0wiLCJPTF9PVkVSTEFZQ09OVEFJTkVSIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRSIsIk9MX1ZJRVdQT1JUIiwiT0xfWk9PTSIsIk9MX1pPT01fSU4iLCJPTF9aT09NX0VYVCIsIk9MX1pPT01fSE9NRSIsIk9MX1pPT01fUE9TIiwiT0xfWk9PTV9XSVRIX0VYVCIsIk9MX1pPT01fV0lUSF9IT01FIiwiT0xfWk9PTV9XSVRIX1BPUyIsIk9MX1pPT01fU0xJREVSIiwiT0xfWk9PTV9XSVRIX1NMSURFUiIsIlpvb21sZXZlbCIsInVwZGF0ZVpvb21sZXZlbCIsIm1hcFZpZXciLCJ1bmRlZmluZWRIVE1MIiwiQ29udHJvbCIsImNhbGwiLCJ0YXJnZXQiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsIm1pc2MiLCJTcGlubmVyIiwic3Bpbm5lclNwYW4iLCJhcHBlbmQiLCJhZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIiLCJyZW1vdmVDbGFzcyIsIk1hcFByb3h5IiwiZWRpdG9yU3R5bGVzIiwiaG9va19tYXBfY2xpY2siLCJob29rX21hcF96b29tIiwicHJveHlfbGF5ZXJfbG9hZGVkIiwicmVxdWVzdCIsImFwaSIsInByb2ZpbGUiLCJsYXllcmNvbnRlbnQiLCJpbmZvd2luZG93IiwiYmFzZWxheWVyQ29udHJvbGxlciIsImxvYWRCYXNlTGF5ZXJzIiwibGF5ZXJDb250cm9sbGVyIiwibG9hZExheWVycyIsImFkZFBvcFVwIiwiY2FjaGluZyIsInN0b3JlVmFsdWUiLCJldnQiLCJjb29yZGluYXRlIiwidG9Mb25MYXQiLCJtYXBfY2VudGVyX2NoYW5nZWQiLCJjbGlja0V2ZW50IiwibmV3Q2VudGVyIiwic3R5bGVGdW5jIiwic3R5bGVDbHVzdGVyIiwiZm9yRWFjaEZlYXR1cmVBdFBpeGVsIiwicGl4ZWwiLCJjbG9uZSIsInNldFNjYWxlIiwiZ2V0U2NhbGUiLCJjbHVzdGVyX2FsbCIsImNvbmNhdCIsImFuaW1hdGUiLCJEYXRlIiwiZHVyYXRpb24iLCJnZXRDb29yZGluYXRlRnJvbVBpeGVsIiwicGl4IiwibWF4IiwiciIsInNpbiIsImNvcyIsImNmIiwiaXNPcGVuIiwicmVzdWx0IiwibGlua19uZXd3aW5kb3ciLCJvcGVuIiwic2V0UG9zaXRpb24iLCJmdW5jIiwiZXZlbnQiLCJjb21iaW5lTGF5ZXJzIiwidW4iLCJwb3B1cENvbmZpZyIsInJvdXRlciIsInJvdXRlQnV0dG9uV3JhcHBlciIsInJvdXRlRnJvbUJ1dHRvbiIsInJvdXRlRnJvbUJ1dHRvblNwYW4iLCJyb3V0ZVRvQnV0dG9uIiwicm91dGVUb0J1dHRvblNwYW4iLCJyb3V0aW5nSGFuZGxlciIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJhY3RpdmVQb3J0c2lkZSIsInNldElucHV0IiwiY3VycmVudFRhcmdldCIsImNsaWNrIiwidHJpbSIsInBvcFVwRWxlbWVudCIsInBvcFVwQ2xvc2VFbGVtZW50IiwicG9wVXBDb250ZW50IiwicHJldmVudERlZmF1bHQiLCJPdmVybGF5IiwicG9zaXRpb25pbmciLCJvZmZzZXQiLCJhZGRPdmVybGF5IiwiZ2V0RWxlbWVudCIsIm5lZWRlZExheWVyU3R5bGVzIiwiZ2V0TGF5ZXJTdHlsZXMiLCJjb250ZW50RGF0YUxheWVyIiwibGF5ZXJHcm91cHMiLCJzdHlsZXMiLCJvbmVGZWF0dXJlIiwiYWxsTGF5ZXJzIiwibWlzc2luZ0xheWVyIiwiY2x1c3RlcnMiLCJvcHRfem9vbSIsIm1pbiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyYW5kb20iLCJzdWJzdHIiLCJlbmNvZGVHZW9Kc29uUHJvcGVydHkiLCJpbnB1dCIsIm91dHB1dCIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImhhc2giLCJtYXRjaCIsIm9yaWdpblN0cmluZyIsImdldFVybFBhcmFtIiwicmVnRXgiLCJzdWJzdHJpbmciLCJSZWdFeHAiLCJleGVjIiwiZGVsdGFFbmNvZGUiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsImRlbHRhRGVjb2RlIiwiaXNOYU4iLCJhcnJIb29rRnVuY3Rpb25zIiwicGFyYW1ldGVycyIsImhleCIsIm9wdF9vcGFjaXR5Iiwib3B0X2FycmF5IiwiYmlnaW50IiwiZyIsInJlZHVjZWRTdHlsZSIsImxvY2F0aW9uU3R5bGVzIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsInNldFdpZHRoIiwibWVhc3VyZUdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkaW5hdGVzIiwiY29vcmQxIiwiY29vcmQyIiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJ0b0ZpeGVkIiwiaHRtbFZhbHVlIiwiYWJzIiwiZ2V0QXJlYSIsImVkZ2VDb29yZGluYXRlIiwiZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcyIsImFyckdlb21ldHJpZXMiLCJleHRlbnRTb3VyY2UiLCJFeHRlbnQiLCJleHRlbnRzIiwib3B0X3BhZGRpbmciLCJvcHRfYW5pbWF0aW9uRHVyYXRpb24iLCJwYWRkaW5nIiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwibWluUmVzb2x1dGlvbiIsImZpdCIsImdldFNpemUiLCJzdHJJbnB1dCIsIm9wdF9sYXllciIsInN0ck91dHB1dCIsInJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyIsInJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzIiwicmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyIsImZ1bmN0aW9uTmFtZSIsImV2S2V5IiwiZWRpdG9yVmFycyIsImF0dHIiLCJvYmplY3QiLCJrZXlzIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJocmVmIiwic2NhbGVsaW5lIiwicmVtb3ZlQ29udHJvbCIsIlNjYWxlTGluZSIsImFkZENvbnRyb2wiLCJNb3VzZVBvc2l0aW9uIiwiY29vcmRpbmF0ZUZvcm1hdCIsInRvU3RyaW5nSERNUyIsImdldFZhbHVlIiwibG9jYWxTdG9yYWdlIiwib3ZlcmxheUlkIiwib3ZlcmxheUxheWVyQ29uZmlnIiwib3NtU291cmNlQ29uZmlncyIsInN0YW1lblNvdXJjZUNvbmZpZ3MiLCJvdmVybGF5TGF5ZXIiLCJhcGlLZXkiLCJzZXRPcGFjaXR5Iiwib3ZlcmxheUFyciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztB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QXFCc2hDLFdBQVcsT0FBWCxDQUFyQjtBQUNBLGFBQUs3Z0MsR0FBTCxHQUFxQjZnQyxXQUFXLEtBQVgsQ0FBckI7QUFDQSxhQUFLNWdDLElBQUwsR0FBcUI0Z0MsV0FBVyxNQUFYLENBQXJCO0FBQ0EsYUFBS3JpQixPQUFMLEdBQXFCcWlCLFdBQVcsU0FBWCxDQUFyQjtBQUNBLGFBQUt6OUIsV0FBTCxHQUFxQnk5QixXQUFXLGFBQVgsQ0FBckI7QUFDQSxhQUFLMzlCLE1BQUwsR0FBcUIyOUIsV0FBVyxRQUFYLENBQXJCO0FBQ0EsYUFBS2wrQixNQUFMLEdBQXFCaytCLFdBQVcsUUFBWCxDQUFyQjtBQUNBLGFBQUsxaEMsS0FBTCxHQUFxQixLQUFyQjtBQUNBLGFBQUswaEMsVUFBTCxHQUFxQkEsVUFBckI7QUFDQSxhQUFLcGtDLGFBQUwsR0FBd0JBLGFBQXhCO0FBQ0g7O0FBakJMO0FBQUE7QUFBQSxzQ0FxQmtCa1QsS0FyQmxCLEVBcUJ3QjtBQUNoQixnQkFBSXhRLEtBQUo7O0FBRUFBLG9CQUFRLEtBQUtBLEtBQWI7QUFDQSxnQkFBSUEsS0FBSixFQUFXO0FBQ1AscUJBQUsxQyxhQUFMLENBQW1Cb0gsR0FBbkIsQ0FBdUI4VCxXQUF2QixDQUFtQ3hZLEtBQW5DO0FBQ0FBLHNCQUFNeWhDLFVBQU4sQ0FBaUJqeEIsUUFBTSxHQUF2QjtBQUNBLHFCQUFLbFQsYUFBTCxDQUFtQm9ILEdBQW5CLENBQXVCeVMsUUFBdkIsQ0FBZ0NuWCxLQUFoQztBQUNIO0FBQ0o7QUE5Qkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImM0Zy1tYXBzLXByb3h5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXByb3h5LmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNjRiYjAyZGM1YzNlOTBiZDk3IiwiaW1wb3J0IHtDNGdCYXNlbGF5ZXJ9IGZyb20gXCIuL2M0Zy1iYXNlbGF5ZXJcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi9jNGctbWFwcy1jb25maWdcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG5leHBvcnQgY2xhc3MgQzRnQmFzZWxheWVyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocHJveHkpIHtcbiAgICAgICAgdGhpcy5wcm94eSA9IHByb3h5O1xuICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIgPSBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuYXJyQmFzZWxheWVycyA9IHt9O1xuICAgICAgICB0aGlzLmJhc2VsYXllcklkcyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWRCYXNlTGF5ZXJzKCkge1xuICAgICAgICB2YXIgc2VsZjtcblxuICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICBqUXVlcnkuYWpheCh0aGlzLnByb3h5LmFwaV9iYXNlbGF5ZXJfdXJsLHtcbiAgICAgICAgICAgIGRhdGFUeXBlOiB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5qc29ucCA/IFwianNvbnBcIiA6IFwianNvblwiXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmJhc2VsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZEJhc2VMYXllcnMoZGF0YS5iYXNlbGF5ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gQFRPRE8gZXJyb3ItbWVzc2FnZXNcbiAgICAgICAgICAgICAgICAvLyAgIDEpIFZpc2libGUgbWVzc2FnZSA0IHVzZXJzIChpMThuKVxuICAgICAgICAgICAgICAgIC8vICAgMikgVGVjaG5pY2FsIGNvbnNvbGUud2FyblxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSB0cnlpbmcgdG8gbG9hZCB0aGUgYmFzZWxheWVycy4gRG8geW91IGhhdmUgY29uZmlndXJlZCBhIGRlZmF1bHQgcHJvZmlsZSB3aXRoIGJhc2VsYXllcnM/Jyk7XG4gICAgICAgICAgICAgICAgc2VsZi5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL3NlbGYubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfS8vIGVuZCBvZiBcImxvYWRCYXNlTGF5ZXJzKClcIlxuXG4gICAgYWRkQmFzZUxheWVycyhiYXNlbGF5ZXJzKSB7XG4gICAgICAgIHZhciBiYXNlbGF5ZXIsXG4gICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICAvLyBzb3J0IGJhc2VsYXllciAoZm9yIGludGVybmFsIGxpc3QpXG4gICAgICAgIGJhc2VsYXllcnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKCghYS5zb3J0ICYmICFiLnNvcnQpIHx8IChwYXJzZUludChhLnNvcnQsIDEwKSA9PT0gcGFyc2VJbnQoYi5zb3J0LCAxMCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhLm5hbWUgfHwgIWIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCFiLm5hbWUpID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKGEubmFtZS50b0xvd2VyQ2FzZSgpID4gYi5uYW1lLnRvTG93ZXJDYXNlKCkpID8gMSA6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhLnNvcnQgfHwgIWIuc29ydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIWIuc29ydCkgPyAtMSA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KGEuc29ydCwgMTApID4gcGFyc2VJbnQoYi5zb3J0LCAxMCkpID8gMSA6IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBidWlsZCBiYXNlbGF5ZXItbGlzdFxuICAgICAgICBpZiAoYmFzZWxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmFzZWxheWVycy5sZW5ndGg7IGkgKz0gMSkge1xuXG4gICAgICAgICAgICAgICAgYmFzZWxheWVyID0gYmFzZWxheWVyc1tpXTtcblxuICAgICAgICAgICAgICAgIHVpZCA9IGJhc2VsYXllci5pZCB8fCB1dGlscy5nZXRVbmlxdWVJZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZWxheWVySWRzLnB1c2godWlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXJyQmFzZWxheWVyc1t1aWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQmFzZWxheWVyc1t1aWRdID0gbmV3IEM0Z0Jhc2VsYXllcihiYXNlbGF5ZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEBUT0RPOiBjaGVjayBpbml0aWFsIGJhc2VsYXllci1oYW5kbGluZ1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXIgJiYgcGFyc2VJbnQodWlkLCAxMCkgPT09IHBhcnNlSW50KHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllciwgMTApKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Jhc2VMYXllcih1aWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJyQmFzZWxheWVyc1t1aWRdLmhhc092ZXJsYXlzKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgajwgdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW3RoaXMuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlzW2pdLmlkXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0uaWRdID0gbmV3IEM0Z092ZXJsYXkodGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0sIHRoaXMubWFwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0uaWRdLmxheWVyID0gdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuc2hvd092ZXJsYXlMYXllcih0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlQmFzZWxheWVySWQpIHtcbiAgICAgICAgICAgIC8vIG5vIGJhc2VsYXllciB3YXMgYWN0aXZhdGVkXG4gICAgICAgICAgICBpZiAoYmFzZWxheWVycy5sZW5ndGggPiAwICYmIGJhc2VsYXllcnNbMF0uaWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0YWtlIGZpcnN0IGJhc2VsYXllciBpZiBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIHVpZCA9IGJhc2VsYXllcnNbMF0uaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBidWlsZCBkZWZhdWx0IGJhc2VsYXllclxuICAgICAgICAgICAgICAgIHVpZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlbGF5ZXJJZHMucHVzaCh1aWQpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjNGdfZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogJ29zbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ01hcG5paydcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNob3dCYXNlTGF5ZXIodWlkKTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJveHkuYmFzZWxheWVyc19sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHRoaXMucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkLCB0aGlzLmJhc2VsYXllcklkcyk7XG4gICAgfSAvLyBlbmQgb2YgXCJhZGRCYXNlTGF5ZXJzKClcIlxuICAgIGNyZWF0ZUJhc2VMYXllcihsYXllck9wdGlvbnMsIGJhc2VMYXllckNvbmZpZywgc291cmNlQ29uZmlncyl7XG4gICAgICAgIHZhciBuZXdCYXNlbGF5ZXI7XG4gICAgICAgIGxheWVyT3B0aW9ucyA9IGxheWVyT3B0aW9ucyB8fCB7fTtcbiAgICAgICAgc3dpdGNoIChiYXNlTGF5ZXJDb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgICAgICAgIC8vIGN1c3RvbVxuICAgICAgICAgICAgICBsZXQgbm9VcmwgPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnVybCkge1xuICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBiYXNlTGF5ZXJDb25maWcudXJsO1xuICAgICAgICAgICAgICAgIG5vVXJsID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZUxheWVyQ29uZmlnLnVybHMpIHtcbiAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJscyA9IGJhc2VMYXllckNvbmZpZy51cmxzO1xuICAgICAgICAgICAgICAgIG5vVXJsID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFub1VybCkge1xuICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVoobGF5ZXJPcHRpb25zKSxcbiAgICAgICAgICAgICAgICAgIGV4dGVudDogYmFzZUxheWVyQ29uZmlnLmV4dGVuZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignY3VzdG9tIHVybChzKSBtaXNzaW5nIC0+IHN3aXRjaCB0byBkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ29zbSc6XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNvbmZpZ3Mub3NtW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLk9TTShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQ29uZmlncy5vc21bYmFzZUxheWVyQ29uZmlnLnN0eWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZUNvbmZpZ3Muc3RhbWVuW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhbWVuXG4gICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5TdGFtZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3Muc3RhbWVuW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAobWFwUXVlc3RTb3VyY2VDb25maWdzW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyBtYXBRdWVzdFxuICAgICAgICAgICAgICAgICAgICAvLyAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5NYXBRdWVzdChtYXBRdWVzdFNvdXJjZUNvbmZpZ3NbYmFzZUxheWVyQ29uZmlnLnN0eWxlXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2VMYXllckNvbmZpZy5zdHlsZSA9PT0gJ29zbV9jdXN0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbVxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9VcmwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGJhc2VMYXllckNvbmZpZy51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBub1VybCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2VMYXllckNvbmZpZy51cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJscyA9IGJhc2VMYXllckNvbmZpZy51cmxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9VcmwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWihsYXllck9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignY3VzdG9tIHVybChzKSBtaXNzaW5nIC0+IHN3aXRjaCB0byBkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3Vuc3VwcG9ydGVkIG9zbS1zdHlsZSAtPiBzd2l0Y2ggdG8gZGVmYXVsdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hcGJveCc6XG4gICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5hcGlfa2V5ICYmIGJhc2VMYXllckNvbmZpZy5hcHBfaWQgJiYgYmFzZUxheWVyQ29uZmlnLm1hcGJveF90eXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5tYXBib3hfdHlwZSA9PT0gJ01hcGJveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBiYXNlTGF5ZXJDb25maWcudXJsICsgYmFzZUxheWVyQ29uZmlnLmFwcF9pZCArICcvdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPScgKyBiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKHNvdXJjZUNvbmZpZ3MubWFwYm94W2Jhc2VMYXllckNvbmZpZy5tYXBib3hfdHlwZV0sIGxheWVyT3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBiYXNlTGF5ZXJDb25maWcudXJsX2NsYXNzaWMgKyBiYXNlTGF5ZXJDb25maWcuYXBwX2lkICsgJy97en0ve3h9L3t5fS5wbmc/YWNjZXNzX3Rva2VuPScgKyBiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooalF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQ29uZmlncy5tYXBib3hbYmFzZUxheWVyQ29uZmlnLm1hcGJveF90eXBlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYmFzZUxheWVyQ29uZmlnLmhpZGVfaW5fYmUpe1xuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gXCJjb240Z2lzL2Jhc2VMYXllclRpbGVTZXJ2aWNlL1wiICsgYmFzZUxheWVyQ29uZmlnLmlkICsgXCIve3p9L3t4fS97eX1cIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWigkLmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLm1hcGJveFtiYXNlTGF5ZXJDb25maWcubWFwYm94X3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBtYXBib3ggY29uZmlndXJhdGlvbiEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdrbG9rYW4nOlxuICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuYXBpX2tleSAmJiBiYXNlTGF5ZXJDb25maWcua2xva2FuX3R5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLmtsb2thbl90eXBlID09PSAnT3Blbk1hcFRpbGVzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGJhc2VMYXllckNvbmZpZy51cmwgKyAne3p9L3t4fS97eX0ucGJmJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3JUaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVmVjdG9yVGlsZShqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLmtsb2thbltiYXNlTGF5ZXJDb25maWcua2xva2FuX3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVG9EbyBzdHlsZSB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGJhc2VMYXllckNvbmZpZy51cmwgKyAnL3N0eWxlcy8nK2Jhc2VMYXllckNvbmZpZy5zdHlsZSsnL3N0eWxlLmpzb24nKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZ2xTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbG1zLmFwcGx5U3R5bGUobmV3QmFzZWxheWVyLCBnbFN0eWxlLCAnb3Blbm1hcHRpbGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBiYXNlTGF5ZXJDb25maWcudXJsICsgJy9kYXRhL3YzL3t6fS97eH0ve3l9LnBiZj9rZXk9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3JUaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVmVjdG9yVGlsZShqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLmtsb2thbltiYXNlTGF5ZXJDb25maWcua2xva2FuX3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGJhc2VMYXllckNvbmZpZy51cmwgKyAnL3N0eWxlcy8nK2Jhc2VMYXllckNvbmZpZy5zdHlsZSsnL3N0eWxlLmpzb24/a2V5PScrYmFzZUxheWVyQ29uZmlnLmFwaV9rZXkpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihnbFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sbXMuYXBwbHlTdHlsZShuZXdCYXNlbGF5ZXIsIGdsU3R5bGUsICdvcGVubWFwdGlsZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBrbG9rYW4gY29uZmlndXJhdGlvbiEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoZXJlJzpcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLmFwaV9rZXkgJiYgYmFzZUxheWVyQ29uZmlnLmFwcF9pZCAmJiBiYXNlTGF5ZXJDb25maWcuaGVyZV90eXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5zdHlsZSA9PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9ICdodHRwczovL3sxLTR9LmJhc2UubWFwcy5jaXQuYXBpLmhlcmUuY29tL21hcHRpbGUvMi4xL21hcHRpbGUvbmV3ZXN0L25vcm1hbC5kYXkve3p9L3t4fS97eX0vMjU2L3BuZycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc/YXBwX2lkPScrYmFzZUxheWVyQ29uZmlnLmFwcF9pZCsnJmFwcF9jb2RlPScrYmFzZUxheWVyQ29uZmlnLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlID09ICd0cmFuc2l0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9ICdodHRwczovL3sxLTR9LmJhc2UubWFwcy5jaXQuYXBpLmhlcmUuY29tL21hcHRpbGUvMi4xL21hcHRpbGUvbmV3ZXN0L25vcm1hbC5kYXkudHJhbnNpdC97en0ve3h9L3t5fS8yNTYvcG5nJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz9hcHBfaWQ9JytiYXNlTGF5ZXJDb25maWcuYXBwX2lkKycmYXBwX2NvZGU9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuc3R5bGUgPT0gJ3BlZGVzdHJpYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gJ2h0dHBzOi8vezEtNH0uYmFzZS5tYXBzLmNpdC5hcGkuaGVyZS5jb20vbWFwdGlsZS8yLjEvbWFwdGlsZS9uZXdlc3QvcGVkZXN0cmlhbi5kYXkve3p9L3t4fS97eX0vMjU2L3BuZycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc/YXBwX2lkPScrYmFzZUxheWVyQ29uZmlnLmFwcF9pZCsnJmFwcF9jb2RlPScrYmFzZUxheWVyQ29uZmlnLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlID09ICd0ZXJyYWluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9ICdodHRwczovL3sxLTR9LmFlcmlhbC5tYXBzLmNpdC5hcGkuaGVyZS5jb20vbWFwdGlsZS8yLjEvbWFwdGlsZS9uZXdlc3QvdGVycmFpbi5kYXkve3p9L3t4fS97eX0vMjU2L3BuZycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc/YXBwX2lkPScrYmFzZUxheWVyQ29uZmlnLmFwcF9pZCsnJmFwcF9jb2RlPScrYmFzZUxheWVyQ29uZmlnLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlID09ICdzYXRlbGxpdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gJ2h0dHBzOi8vezEtNH0uYWVyaWFsLm1hcHMuY2l0LmFwaS5oZXJlLmNvbS9tYXB0aWxlLzIuMS9tYXB0aWxlL25ld2VzdC9zYXRlbGxpdGUuZGF5L3t6fS97eH0ve3l9LzI1Ni9wbmcnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnP2FwcF9pZD0nK2Jhc2VMYXllckNvbmZpZy5hcHBfaWQrJyZhcHBfY29kZT0nK2Jhc2VMYXllckNvbmZpZy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5zdHlsZSA9PSAnaHlicmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9ICdodHRwczovL3sxLTR9LmFlcmlhbC5tYXBzLmNpdC5hcGkuaGVyZS5jb20vbWFwdGlsZS8yLjEvbWFwdGlsZS9uZXdlc3QvaHlicmlkLmRheS97en0ve3h9L3t5fS8yNTYvcG5nJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz9hcHBfaWQ9JytiYXNlTGF5ZXJDb25maWcuYXBwX2lkKycmYXBwX2NvZGU9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooJC5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQ29uZmlncy5oZXJlW2Jhc2VMYXllckNvbmZpZy5oZXJlX3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGJhc2VMYXllckNvbmZpZy5oaWRlX2luX2JlKXtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGxheWVyT3B0aW9ucy51cmwgPSBcImNvbjRnaXMvYmFzZUxheWVyVGlsZVNlcnZpY2UvXCIgKyBiYXNlTGF5ZXJDb25maWcuaWQgKyBcIi97en0ve3h9L3t5fVwiO1xuICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKCQuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3MubWFwYm94W2Jhc2VMYXllckNvbmZpZy5oZXJlX3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBIRVJFIGNvbmZpZ3VyYXRpb24hJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGh1bmRlcic6XG4gICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5hcGlfa2V5ICYmIGJhc2VMYXllckNvbmZpZy50aHVuZGVyZm9yZXN0X3R5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gXCJodHRwczovL3RpbGUudGh1bmRlcmZvcmVzdC5jb20vXCIrYmFzZUxheWVyQ29uZmlnLnN0eWxlK1wiL3t6fS97eH0ve3l9LnBuZz9hcGlrZXk9XCIrYmFzZUxheWVyQ29uZmlnLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKGpRdWVyeS5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQ29uZmlncy50aHVuZGVyZm9yZXN0W2Jhc2VMYXllckNvbmZpZy50aHVuZGVyZm9yZXN0X3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGJhc2VMYXllckNvbmZpZy5oaWRlX2luX2JlKXtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IFwiY29uNGdpcy9iYXNlTGF5ZXJUaWxlU2VydmljZS9cIiArIGJhc2VMYXllckNvbmZpZy5pZCArIFwiL3t6fS97eH0ve3l9XCI7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooalF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLm1hcGJveFtiYXNlTGF5ZXJDb25maWcudGh1bmRlcmZvcmVzdF90eXBlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignd3JvbmcgVGh1bmRlcmZvcmVzdCBjb25maWd1cmF0aW9uIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dvb2dsZSc6XG4gICAgICAgICAgICAgICAgLy9AdG9kb1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZ29vZ2xlLW1hcHMgYXJlIGN1cnJlbnRseSB1bnN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5hcGlfa2V5ICYmIGJhc2VMYXllckNvbmZpZy5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuQmluZ01hcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1bHR1cmU6IG5hdmlnYXRvci5sYW5ndWFnZXMgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGJhc2VMYXllckNvbmZpZy5hcGlfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnlTZXQ6IGJhc2VMYXllckNvbmZpZy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBiaW5nLWtleSBvciBpbnZhbGlkIGltYWdlcnktc2V0IScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dtcyc6XG4gICAgICAgICAgICAgICAgaWYoYmFzZUxheWVyQ29uZmlnLnVybC5pbmRleE9mKCdodHRwcycpICE9PSAtMSl7XG4gICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5UaWxlV01TKHtcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IGJhc2VMYXllckNvbmZpZy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMQVlFUlM6IGJhc2VMYXllckNvbmZpZy5wYXJhbXMubGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgVkVSU0lPTjogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9GT1JNQVQ6IGJhc2VMYXllckNvbmZpZy5wYXJhbXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgVFJBTlNQQVJFTlQ6IGJhc2VMYXllckNvbmZpZy5wYXJhbXMudHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogYmFzZUxheWVyQ29uZmlnLmd1dHRlcixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IGJhc2VMYXllckNvbmZpZy5hdHRyaWJ1dGlvbiArICcgJyArIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAvL2V4dGVudDogb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoWzUuNTkzMzQsIDUwLjA1NzgsIDkuNzQxNTgsIDUyLjc5OThdLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlRpbGVXTVMoe1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogYmFzZUxheWVyQ29uZmlnLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSUzogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy5sYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBWRVJTSU9OOiBiYXNlTGF5ZXJDb25maWcucGFyYW1zLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZPUk1BVDogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVDogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy50cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyOiBiYXNlTGF5ZXJDb25maWcuZ3V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogYmFzZUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZW50OiBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChbNS41OTMzNCwgNTAuMDU3OCwgOS43NDE1OCwgNTIuNzk5OF0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb3dtJzpcbiAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlTGF5ZXJDb25maWcudXJsICsgYmFzZUxheWVyQ29uZmlnLmFwcF9pZCArICcve3p9L3t4fS97eX0/aGFzaD0nICsgYmFzZUxheWVyQ29uZmlnLmFwaV9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IGJhc2VMYXllckNvbmZpZy5hdHRyaWJ1dGlvbiArICcgJyArIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT05cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZW50OiBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChbNS41OTMzNCwgNTAuMDU3OCwgOS43NDE1OCwgNTIuNzk5OF0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgICAgICAgICBsZXQgYmFzZUxheWVyR3JvdXAgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGluZGV4IGluIGJhc2VMYXllckNvbmZpZ1snbGF5ZXJHcm91cCddKXtcbiAgICAgICAgICAgICAgICAgIGlmKGJhc2VMYXllckNvbmZpZ1snbGF5ZXJHcm91cCddLmhhc093blByb3BlcnR5KGluZGV4KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5jcmVhdGVCYXNlTGF5ZXIobnVsbCwgYmFzZUxheWVyQ29uZmlnWydsYXllckdyb3VwJ11baW5kZXhdLCBzb3VyY2VDb25maWdzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heFpvb20gPSB0aGlzLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFJlc29sdXRpb25Gb3Jab29tKGJhc2VMYXllckNvbmZpZ1snbGF5ZXJHcm91cCddW2luZGV4XVsnbWluWm9vbSddKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pblpvb20gPSB0aGlzLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFJlc29sdXRpb25Gb3Jab29tKGJhc2VMYXllckNvbmZpZ1snbGF5ZXJHcm91cCddW2luZGV4XVsnbWF4Wm9vbSddKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRNaW5SZXNvbHV0aW9uKG1pblpvb20pO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldE1heFJlc29sdXRpb24obWF4Wm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VMYXllckdyb3VwLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5Hcm91cCh7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyczogYmFzZUxheWVyR3JvdXBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5zdXBwb3J0ZWQgcHJvdmlkZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QmFzZWxheWVyO1xuXG4gICAgfVxuICAgIHNob3dCYXNlTGF5ZXIoYmFzZUxheWVyVWlkKSB7XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgbGF5ZXJzLFxuICAgICAgICAgICAgYmFzZWxheWVyLFxuICAgICAgICAgICAgYWRkQmFzZWxheWVyLFxuICAgICAgICAgICAgYmFzZUxheWVycyxcbiAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3MgPSBbXSxcbiAgICAgICAgICAgIG5ld0Jhc2VsYXllcixcbiAgICAgICAgICAgIGxheWVyT3B0aW9ucyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICB2aWV3O1xuXG4gICAgICAgIGxldCBiYXNlTGF5ZXJDb25maWcgPSB0aGlzLmFyckJhc2VsYXllcnNbYmFzZUxheWVyVWlkXTtcblxuXG4gICAgICAgIGlmICgodHlwZW9mIGJhc2VMYXllckNvbmZpZyAhPT0gXCJ1bmRlZmluZWRcIikgJiYgIWJhc2VMYXllckNvbmZpZy5sYXllcikge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGxheWVyXG4gICAgICAgICAgICBzb3VyY2VDb25maWdzLm9zbSA9IGNvbmZpZy5vc207XG4gICAgICAgICAgICBzb3VyY2VDb25maWdzLnN0YW1lbiA9IGNvbmZpZy5zdGFtZW47XG4gICAgICAgICAgICAvL21hcFF1ZXN0U291cmNlQ29uZmlncyA9IGM0Zy5tYXBzLmNvbmZpZy5tYXBxdWVzdDtcbiAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3MubWFwYm94ID0gY29uZmlnLm1hcGJveDtcbiAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3Mua2xva2FuID0gY29uZmlnLmtsb2thbjtcbiAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3MuaGVyZSA9IGNvbmZpZy5oZXJlO1xuICAgICAgICAgICAgc291cmNlQ29uZmlncy50aHVuZGVyZm9yZXN0ID0gY29uZmlnLnRodW5kZXJmb3Jlc3Q7XG5cbiAgICAgICAgICAgIC8vbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgLy8gIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5PU00oKVxuICAgICAgICAgICAgLy99KTtcblxuICAgICAgICAgICAgbGF5ZXJPcHRpb25zID0ge307XG5cbiAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuYXR0cmlidXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyArICcgJyArIGJhc2VMYXllckNvbmZpZy5hdHRyaWJ1dGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTiArICcgJyArIGJhc2VMYXllckNvbmZpZy5hdHRyaWJ1dGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFsYXllck9wdGlvbnMuYXR0cmlidXRpb25zKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChiYXNlTGF5ZXJDb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3NtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VDb25maWdzLnN0YW1lbltiYXNlTGF5ZXJDb25maWcuc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IHNvdXJjZUNvbmZpZ3Muc3RhbWVuW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0uYXR0cmlidXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hcFF1ZXN0U291cmNlQ29uZmlnc1tiYXNlTGF5ZXJDb25maWcuc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBtYXBRdWVzdFNvdXJjZUNvbmZpZ3NbYmFzZUxheWVyQ29uZmlnLnN0eWxlXS5hdHRyaWJ1dGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlQ29uZmlncy5vc21bYmFzZUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBzb3VyY2VDb25maWdzLm9zbVtiYXNlTGF5ZXJDb25maWcuc3R5bGVdLmF0dHJpYnV0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT047XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWFwYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBzb3VyY2VDb25maWdzLm1hcGJveFtiYXNlTGF5ZXJDb25maWcubWFwYm94X3R5cGVdLmF0dHJpYnV0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdrbG9rYW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IHNvdXJjZUNvbmZpZ3Mua2xva2FuW2Jhc2VMYXllckNvbmZpZy5rbG9rYW5fdHlwZV0uYXR0cmlidXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlcmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IHNvdXJjZUNvbmZpZ3MuaGVyZVtiYXNlTGF5ZXJDb25maWcuaGVyZV90eXBlXS5hdHRyaWJ1dGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGh1bmRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gc291cmNlQ29uZmlncy50aHVuZGVyZm9yZXN0W2Jhc2VMYXllckNvbmZpZy50aHVuZGVyZm9yZXN0X3R5cGVdLmF0dHJpYnV0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT047XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVG9EbyBoZWxwZXIgY2xhc3MgZm9yIGF0dHJpYnV0aW9uc1xuXG4gICAgICAgICAgICAvL2FkZGl0aW9uYWwgYXR0cmlidXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcENvbnRyb2xsZXIuZGF0YSAmJiB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5hdHRyaWJ1dGlvbiAmJiB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5hdHRyaWJ1dGlvbi5hZGRpdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uYWxBdHRyaWJ1dGlvbiA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmF0dHJpYnV0aW9uLmFkZGl0aW9uYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9uc1tpXSA9PSBhZGRpdGlvbmFsQXR0cmlidXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zICsgJyAnICsgYWRkaXRpb25hbEF0dHJpYnV0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmF0dHJpYnV0aW9uLmFkZGl0aW9uYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1RvRG8gdHlwZSBjbGFzcyBmb3IgZ2Vvc2VhcmNoX2VuZ2luZVxuICAgICAgICAgICAgLy9nZW9zZWFyY2ggYXR0cmlidXRpb25cbiAgICAgICAgICAgIHZhciBnZW9zZWFyY2hfYXR0cmlidXRpb24gPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ2Vvc2VhcmNoX2VuZ2luZSA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5nZW9zZWFyY2hfZW5naW5lO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwQ29udHJvbGxlci5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmF0dHJpYnV0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChnZW9zZWFyY2hfZW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9zZWFyY2hfYXR0cmlidXRpb24gPSAnJzsgLy9jb240Z2lzIG1hcHNlcnZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLmN1c3RvbV9hdHRyaWJ1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9zZWFyY2hfYXR0cmlidXRpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guY3VzdG9tX2F0dHJpYnV0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb3NlYXJjaF9hdHRyaWJ1dGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOb21pbmF0aW0gU2VhcmNoIENvdXJ0ZXN5IG9mIDxhIGhyZWY9XCJodHRwOi8vd3d3Lm1hcHF1ZXN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NYXBRdWVzdDwvYT4gPGltZyBzcmM9XCJodHRwOi8vZGV2ZWxvcGVyLm1hcHF1ZXN0LmNvbS9jb250ZW50L29zbS9tcV9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9zZWFyY2hfYXR0cmlidXRpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm9taW5hdGltIFNlYXJjaCBDb3VydGVzeSBvZiA8YSBocmVmPVwiaHR0cDovL3dpa2kub3BlbnN0cmVldG1hcC5vcmcvd2lraS9Ob21pbmF0aW1fdXNhZ2VfcG9saWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+T3BlblN0cmVldE1hcDwvYT4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2Vvc2VhcmNoQXR0cmlidXRpb24gPSBnZW9zZWFyY2hfYXR0cmlidXRpb247XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnNbaV0gPT0gZ2Vvc2VhcmNoQXR0cmlidXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zICsgJyAnICsgZ2Vvc2VhcmNoQXR0cmlidXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gZ2Vvc2VhcmNoQXR0cmlidXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuc29ydGluZykge1xuICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5zb3J0ID0gYmFzZUxheWVyQ29uZmlnLnNvcnRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLm1pblpvb20gJiYgYmFzZUxheWVyQ29uZmlnLm1pblpvb20gPj0gMCkge1xuICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5taW5ab29tID0gYmFzZUxheWVyQ29uZmlnLm1pblpvb207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLm1heFpvb20gJiYgYmFzZUxheWVyQ29uZmlnLm1heFpvb20gPj0gMCkge1xuICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5tYXhab29tID0gYmFzZUxheWVyQ29uZmlnLm1heFpvb207XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IHRoaXMuY3JlYXRlQmFzZUxheWVyKGxheWVyT3B0aW9ucywgYmFzZUxheWVyQ29uZmlnLCBzb3VyY2VDb25maWdzKTtcbiAgICAgICAgICAgIGlmKGJhc2VMYXllckNvbmZpZy5oYXNPdmVybGF5cyl7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaTwgYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWJhc2VMYXllckNvbmZpZy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tiYXNlTGF5ZXJDb25maWcub3ZlcmxheXNbaV0uaWRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VMYXllckNvbmZpZy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tiYXNlTGF5ZXJDb25maWcub3ZlcmxheXNbaV0uaWRdID0gbmV3IEM0Z092ZXJsYXkoYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzW2ldLHRoaXMubWFwQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlTGF5ZXJDb25maWcub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzW2ldLmlkXS5sYXllciA9IGJhc2VMYXllckNvbmZpZy5vdmVybGF5Q29udHJvbGxlci5zaG93T3ZlcmxheUxheWVyKGJhc2VMYXllckNvbmZpZy5vdmVybGF5c1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoYmFzZUxheWVyQ29uZmlnLmhhc092ZXJsYXlzKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGZvciAoaSA9IDA7IGkgPCBiYXNlTGF5ZXJDb25maWcub3ZlcmxheXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYoIWM0Zy5tYXBzLm92ZXJsYXlzKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGM0Zy5tYXBzLm92ZXJsYXlzID0gW107XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgYzRnLm1hcHMub3ZlcmxheXNbYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzW2ldLmlkXSA9IGJhc2VMYXllckNvbmZpZy5vdmVybGF5c1tpXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyICYmIHBhcnNlSW50KGJhc2VMYXllckNvbmZpZy5pZCwgMTApID09PSBwYXJzZUludCh0aGlzLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkLCAxMCkpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGYubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIoc2VsZi5zaG93T3ZlcmxheUxheWVyKGJhc2VMYXllckNvbmZpZy5vdmVybGF5c1tpXS5pZCkpO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgdGhpcy5hcnJCYXNlbGF5ZXJzW2Jhc2VMYXllclVpZF0ubGF5ZXIgPSBuZXdCYXNlbGF5ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsYXllcnMgPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpO1xuXG4gICAgICAgIC8vIHNlY3VyZVxuICAgICAgICBpZiAobGF5ZXJzLml0ZW0oMCkuZ2V0KCdjaGVja1N1bScpID09PSBcImJhc2VNYXBzTGF5ZXJcIikge1xuICAgICAgICAgICAgYmFzZUxheWVycyA9IGxheWVycy5pdGVtKDApLmdldExheWVycygpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXJyQmFzZWxheWVyc1tiYXNlTGF5ZXJVaWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgYmFzZWxheWVyID0gdGhpcy5hcnJCYXNlbGF5ZXJzW2Jhc2VMYXllclVpZF0ubGF5ZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEJhc2VsYXllciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VMYXllcnMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiAoZWxlbWVudCA9PT0gYmFzZWxheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCYXNlbGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEJhc2VsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkQmFzZWxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlTGF5ZXJzLnB1c2goYmFzZWxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZpZXcgPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICAgICAgICAgICAgICB2YXIgem9vbSA9IHZpZXcuZ2V0Wm9vbSgpO1xuICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSB2aWV3LmdldENlbnRlcigpO1xuICAgICAgICAgICAgICAgIGlmICgoYmFzZUxheWVyQ29uZmlnLm1pblpvb20gJiYgYmFzZUxheWVyQ29uZmlnLm1pblpvb20gPj0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGJhc2VMYXllckNvbmZpZy5tYXhab29tICYmIGJhc2VMYXllckNvbmZpZy5tYXhab29tID49IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcubWluWm9vbSAmJiAodmlldy5nZXRab29tKCkgPCBiYXNlTGF5ZXJDb25maWcubWluWm9vbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuc2V0Wm9vbShiYXNlTGF5ZXJDb25maWcubWluWm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZUxheWVyQ29uZmlnLm1heFpvb20gJiYgKHZpZXcuZ2V0Wm9vbSgpID4gYmFzZUxheWVyQ29uZmlnLm1heFpvb20pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LnNldFpvb20oYmFzZUxheWVyQ29uZmlnLm1heFpvb20pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcERhdGEgPSB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcERhdGEuem9vbWxldmVsIHx8IG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sQ29udGFpbmVyVG9wTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLmxlZnRTbGlkZUVsZW1lbnRzLnB1c2goY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmlldyA9IG5ldyBvbC5WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGNlbnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiB2aWV3LmdldFByb2plY3Rpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblpvb206IHBhcnNlSW50KGJhc2VMYXllckNvbmZpZy5taW5ab29tLCAxMCkgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhab29tOiBwYXJzZUludChiYXNlTGF5ZXJDb25maWcubWF4Wm9vbSwgMTApIHx8IDE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiB2aWV3LmdldFJvdGF0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5zZXRWaWV3KG5ld1ZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVkcmF3TWFwVmlldyh0aGlzLm1hcENvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAobWFwRGF0YS5zY2FsZWxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKHRoaXMubWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lID0gbmV3IG9sLmNvbnRyb2wuU2NhbGVMaW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBWaWV3OiB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wodGhpcy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCkuYXBwZW5kKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKHRoaXMubWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBWaWV3OiB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wodGhpcy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wodGhpcy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbiA9IG5ldyBvbC5jb250cm9sLk1vdXNlUG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvb3JkaW5hdGVGb3JtYXQ6IG9sLmNvb3JkaW5hdGUudG9TdHJpbmdIRE1TLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbCh0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZUxheWVyQ29uZmlnICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkID0gYmFzZUxheWVyQ29uZmlnLmlkO1xuXG4gICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh0aGlzLnByb3h5Lmhvb2tfYmFzZWxheWVyX3Zpc2liaWxpdHksIGJhc2VMYXllckNvbmZpZyk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2VzaXVtIGludGVncmF0aW9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZUxheWVyQ29uZmlnICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcERhdGEgPSB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAobWFwRGF0YS5jZXNpdW0gJiYgbWFwRGF0YS5jZXNpdW0uZW5hYmxlICYmIChtYXBEYXRhLmNlc2l1bS5hbHdheXMgfHwgYmFzZUxheWVyQ29uZmlnLmNlc2l1bSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9sM2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2wzZCA9IG5ldyBvbGNzLk9MQ2VzaXVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHRoaXMubWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU3luY2hyb25pemVyczogZmFsc2UvKixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aW1lRWx0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2wzZC5nZXRDZXNpdW1TY2VuZSgpLmdsb2JlLmVuYWJsZUxpZ2h0aW5nICYmIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnNldFVUQ0hvdXJzKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2VzaXVtLkp1bGlhbkRhdGUuZnJvbURhdGUoZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENlc2l1bS5KdWxpYW5EYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qY29uc3Qgc2NlbmUgPSBvbDNkLmdldENlc2l1bVNjZW5lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlcnJhaW5Qcm92aWRlciA9IG5ldyBDZXNpdW0uQ2VzaXVtVGVycmFpblByb3ZpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy8vYXNzZXRzLmFnaS5jb20vc3RrLXRlcnJhaW4vd29ybGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFZlcnRleE5vcm1hbHM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnRlcnJhaW5Qcm92aWRlciA9IHRlcnJhaW5Qcm92aWRlcjsqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9sM2Quc2V0RW5hYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLyp3aW5kb3dbJ3RvZ2dsZVRpbWUnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZ2xvYmUuZW5hYmxlTGlnaHRpbmcgPSAhc2NlbmUuZ2xvYmUuZW5hYmxlTGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZUVsdC5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVFbHQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRWx0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07Ki9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbDNkICYmIHRoaXMub2wzZC5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2wzZC5zZXRFbmFibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnJlZHJhd01hcFZpZXcodGhpcy5tYXBDb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gLy8gZW5kIG9mIFwic2hvd0Jhc2VMYXllcigpXCJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1iYXNlbGF5ZXItY29udHJvbGxlci5qcyIsImltcG9ydCB7QzRnT3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gXCIuL2M0Zy1vdmVybGF5LWNvbnRyb2xsZXJcIlxuXG5leHBvcnQgY2xhc3MgQzRnQmFzZWxheWVye1xuICAgIGNvbnN0cnVjdG9yKGJhc2VsYXllckFyciwgY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLmlkID0gYmFzZWxheWVyQXJyWydpZCddO1xuICAgICAgICB0aGlzLnBpZCA9IGJhc2VsYXllckFyclsncGlkJ107XG4gICAgICAgIHRoaXMubmFtZSA9IGJhc2VsYXllckFyclsnbmFtZSddO1xuICAgICAgICB0aGlzLmRpc3BsYXlfbmFtZSA9IGJhc2VsYXllckFyclsnZGlzcGxheV9uYW1lJ107XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBiYXNlbGF5ZXJBcnJbJ3Byb3ZpZGVyJ107XG4gICAgICAgIHRoaXMub3NtX3N0eWxlID0gYmFzZWxheWVyQXJyWydvc21fc3R5bGUnXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsMSA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDEnXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsMiA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDInXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsMyA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDMnXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsNCA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDQnXTtcbiAgICAgICAgdGhpcy5vc21fa2V5bmFtZSA9IGJhc2VsYXllckFyclsnb3NtX2tleW5hbWUnXTtcbiAgICAgICAgdGhpcy5tYXBib3hfdHlwZSA9IGJhc2VsYXllckFyclsnbWFwYm94X3R5cGUnXTtcbiAgICAgICAgdGhpcy5iaW5nX3N0eWxlID0gYmFzZWxheWVyQXJyWydiaW5nX3N0eWxlJ107XG4gICAgICAgIHRoaXMuc3R5bGUgPSBiYXNlbGF5ZXJBcnJbJ3N0eWxlJ107XG4gICAgICAgIHRoaXMuYXR0cmlidXRpb24gPSBiYXNlbGF5ZXJBcnJbJ2F0dHJpYnV0aW9uJ107XG4gICAgICAgIHRoaXMucGFyYW1zID0gYmFzZWxheWVyQXJyWydwYXJhbXMnXTtcbiAgICAgICAgdGhpcy53bXNfZ3V0dGVyID0gYmFzZWxheWVyQXJyWyd3bXNfZ3V0dGVyJ107XG4gICAgICAgIHRoaXMubWluWm9vbSA9IGJhc2VsYXllckFyclsnbWluWm9vbSddO1xuICAgICAgICB0aGlzLm1heFpvb20gPSBiYXNlbGF5ZXJBcnJbJ21heFpvb20nXTtcbiAgICAgICAgdGhpcy5wcm90ZWN0X2Jhc2VsYXllciA9IGJhc2VsYXllckFyclsncHJvdGVjdF9iYXNlbGF5ZXInXTtcbiAgICAgICAgdGhpcy5wZXJtaXR0ZWRfZ3JvdXBzID0gYmFzZWxheWVyQXJyWydwZXJtaXR0ZWRfZ3JvdXBzJ107XG4gICAgICAgIHRoaXMuYXBpX2tleSA9IGJhc2VsYXllckFyclsnYXBpS2V5J10gPyBiYXNlbGF5ZXJBcnJbJ2FwaUtleSddIDogYmFzZWxheWVyQXJyWydhcGlfa2V5J107XG4gICAgICAgIHRoaXMuYXBwX2lkID0gYmFzZWxheWVyQXJyWydhcHBfaWQnXTtcbiAgICAgICAgdGhpcy50aHVuZGVyZm9yZXN0X3R5cGUgPSBiYXNlbGF5ZXJBcnJbJ3RodW5kZXJmb3Jlc3RfdHlwZSddO1xuICAgICAgICB0aGlzLmhlcmVfdHlwZSA9IGJhc2VsYXllckFyclsnaGVyZV90eXBlJ107XG4gICAgICAgIHRoaXMuY2VzaXVtID0gYmFzZWxheWVyQXJyWydjZXNpdW0nXTtcbiAgICAgICAgdGhpcy5oaWRlX2luX2JlID0gYmFzZWxheWVyQXJyWydoaWRlX2luX2JlJ107XG4gICAgICAgIHRoaXMudXJsID0gYmFzZWxheWVyQXJyWyd1cmwnXTtcbiAgICAgICAgdGhpcy51cmxzID0gYmFzZWxheWVyQXJyWyd1cmxzJ107XG4gICAgICAgIHRoaXMua2xva2FuX3R5cGUgPSBiYXNlbGF5ZXJBcnJbJ2tsb2thbl90eXBlJ107XG4gICAgICAgIHRoaXMuc3R5bGVfdXJsID0gYmFzZWxheWVyQXJyWydzdHlsZV91cmwnXTtcbiAgICAgICAgdGhpcy5oYXNPdmVybGF5cyA9IGJhc2VsYXllckFyclsnaGFzT3ZlcmxheXMnXTtcbiAgICAgICAgdGhpcy5vdmVybGF5cyA9IGJhc2VsYXllckFyclsnb3ZlcmxheXMnXTtcbiAgICAgICAgaWYoYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ10pe1xuICAgICAgICAgICAgbGV0IGxheWVyR3JvdXAgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggaW4gYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ10gKXtcbiAgICAgICAgICAgICAgICBpZihiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXS5oYXNPd25Qcm9wZXJ0eShpbmRleCkpe1xuICAgICAgICAgICAgICAgICAgbGF5ZXJHcm91cFtpbmRleF0gPSBuZXcgQzRnQmFzZWxheWVyKGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddW2luZGV4XVsnZW50cnknXSk7XG4gICAgICAgICAgICAgICAgICBsYXllckdyb3VwW2luZGV4XVsnbWluWm9vbSddID0gYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ11baW5kZXhdWydtaW5ab29tJ107XG4gICAgICAgICAgICAgICAgICBsYXllckdyb3VwW2luZGV4XVsnbWF4Wm9vbSddID0gYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ11baW5kZXhdWydtYXhab29tJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXllckdyb3VwID0gbGF5ZXJHcm91cDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm92ZXJsYXlDb250cm9sbGVyID0gbmV3IEM0Z092ZXJsYXlDb250cm9sbGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLmpzIiwiaW1wb3J0IHtDNGdMYXllcn0gZnJvbSBcIi4vYzRnLWxheWVyXCJcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCJcblxudmFyIGM0ZyA9IHRoaXMuYzRnO1xuXG5leHBvcnQgY2xhc3MgQzRnTGF5ZXJDb250cm9sbGVye1xuICBjb25zdHJ1Y3Rvcihwcm94eSl7XG4gICAgdGhpcy5wcm94eSA9IHByb3h5O1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLmFyckxheWVycyA9IHt9O1xuICAgIHRoaXMubGF5ZXJSZXF1ZXN0cyA9IHt9O1xuICB9XG4gIFxuICBsb2FkTGF5ZXJzICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHRoaXMubWFwSWQgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2pRdWVyeS5hamF4KFwibWFwcy9sYXllclNlcnZpY2VcIix7Ly90aGlzLnByb3h5LmFwaV9sYXllcl91cmwse1xuICAgIGpRdWVyeS5hamF4KHRoaXMucHJveHkuYXBpX2xheWVyX3VybCx7XG4gICAgICBkYXRhVHlwZTogdGhpcy5tYXBDb250cm9sbGVyLmRhdGEuanNvbnAgPyBcImpzb25wXCIgOiBcImpzb25cIlxuXG4gICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgc2VsZi5hZGRMYXllcnMoZGF0YS5sYXllciwgZGF0YS5mb3JlaWduTGF5ZXJzKTtcbiAgICAgIHNlbGYucHJveHkubGF5ZXJzX2xvYWRlZCA9IHRydWU7XG4gICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhzZWxmLnByb3h5Lmhvb2tfbGF5ZXJfbG9hZGVkLCBzZWxmLnByb3h5LmxheWVySWRzKTtcbiAgICAgIC8vIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2sucHJveHlfbGF5ZXJfbG9hZGVkLCB7bGF5ZXJJZHM6IHNlbGYucHJveHkubGF5ZXJJZHMsIHByb3h5OiBzZWxmLnByb3h5fSk7XG4gICAgICBzZWxmLnByb3h5LmNoZWNrTG9jYXRpb25TdHlsZXMoe1xuICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5kcmF3TGF5ZXJJbml0aWFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBAVE9ETzogZXJyb3ItbWVzc2FnZXNcbiAgICAgIC8vICAgMSkgVmlzaWJsZSBtZXNzYWdlIDQgdXNlcnMgKGkxOG4pXG4gICAgICAvLyAgIDIpIFRlY2huaWNhbCBjb25zb2xlLndhcm5cbiAgICAgIGNvbnNvbGUud2FybignQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSB0cnlpbmcgdG8gbG9hZCB0aGUgbGF5ZXJzLi4uJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHRoaXMucHJveHkuc3RhcmJvYXJkLnNwaW5uZXIuaGlkZSgpO1xuICAgIH0pO1xuICB9IC8vIGVuZCBvZiBcImxvYWRMYXllcigpXCJcbiAgYWRkTGF5ZXJzKGxheWVycywgZm9yZWlnbkxheWVycykge1xuICAgIHZhciBpLFxuICAgICAgaixcbiAgICAgIGssXG4gICAgICBwLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgbGF5ZXIsXG4gICAgICBzdG9yZWRJdGVtLFxuICAgICAgbGlua0l0ZW1zLFxuICAgICAgdWlkLFxuICAgICAgY3VycmVudFpvb20sXG4gICAgICBmbkhhbmRsZUFuZEFwcGVuZExheWVyQ2hpbGRzLFxuICAgICAgZW5kbGVzc0xvb3BJZCxcbiAgICAgIHBhcmVudElkLFxuICAgICAgcGFyZW50SWRzLFxuICAgICAgcGVybWFsaW5rZWRMYXllcnMsXG4gICAgICBjaGlsZCxcbiAgICAgIGZuSGFuZGxlQ2hpbGRzLFxuICAgICAga2V5LFxuICAgICAgc3RhcmJvYXJkLFxuICAgICAgZm5BZGRUb0hvb2s7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgICBwZXJtYWxpbmtlZExheWVycyA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmxheWVycyB8fCBbXTtcblxuICAgIGZuSGFuZGxlQW5kQXBwZW5kTGF5ZXJDaGlsZHMgPSBmdW5jdGlvbiAob2JqSXRlbSkge1xuICAgICAgdmFyIHRvZ2dsZSxcbiAgICAgICAgZW50cnlXcmFwcGVyO1xuXG4gICAgICBpZiAob2JqSXRlbS5oYXNDaGlsZHMpIHtcbiAgICAgICAgb2JqSXRlbS52aXNpYmxlQ2hpbGRzID0gc2VsZi5hZGRMYXllcnMob2JqSXRlbS5jaGlsZHMsIGZvcmVpZ25MYXllcnMpO1xuICAgICAgfVxuICAgIH07IC8vIGVuZCBvZiBcImZuSGFuZGxlQW5kQXBwZW5kTGF5ZXJDaGlsZHMoKVwiXG5cbiAgICAvLyB3cmFwcGVyIGZ1bmN0aW9uIHRvIGF2b2lkIGNsb3N1cmUgYWNjZXNzaWJpbGl0eVxuICAgIGZuQWRkVG9Ib29rID0gZnVuY3Rpb24obGF5ZXIpIHtcbiAgICAgIHZhciBsYXllcm5hbWUsIGxheWVyaWQsIGxheWVyaWNvbjtcblxuICAgICAgaWYgKGxheWVyLmNoaWxkcyAmJiBsYXllci5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBsYXllcm5hbWUgPSBsYXllci5uYW1lO1xuICAgICAgICBsYXllcmlkID0gbGF5ZXIudGFiSWQ7XG4gICAgICAgIGxheWVyaWNvbiA9IGxheWVyLmF3ZXNvbWVpY29uO1xuICAgICAgICBjNGcubWFwcy5zdGFyYm9hcmRUYWJzID0gYzRnLm1hcHMuc3RhcmJvYXJkVGFicyB8fCB7fTtcbiAgICAgICAgc3RhcmJvYXJkID0gc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMuc3RhcmJvYXJkO1xuICAgICAgICBzdGFyYm9hcmQuaG9va19sYXllcnN3aXRjaGVyX2xvYWRlZC5wdXNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgYzRnLm1hcHMuc3RhcmJvYXJkVGFic1tsYXllcmlkXSA9IG5ldyBjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5DdXN0b210YWIoc3RhcmJvYXJkLCB7XG4gICAgICAgICAgICBuYW1lOiBsYXllcm5hbWUsXG4gICAgICAgICAgICB0YWJJZDogbGF5ZXJpZCxcbiAgICAgICAgICAgIGF3ZXNvbWVpY29uOiBsYXllcmljb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChsYXllcnMgJiYgbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyTGF5ZXJzW2xheWVyc1tpXS5pZF0pIHtcbiAgICAgICAgICBsYXllciA9IHRoaXMuYXJyTGF5ZXJzW2xheWVyc1tpXS5pZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGF5ZXIgPSBuZXcgQzRnTGF5ZXIobGF5ZXJzW2ldKTsvL2xheWVyc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtJdGVtcyA9IGZhbHNlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGxheWVyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBsYXllci5jb250ZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgbGF5ZXIuY29udGVudCA9IHV0aWxzLm9iamVjdFRvQXJyYXkobGF5ZXIuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmRsZXNzLWxvb3AgcHJldmVudGlvblxuICAgICAgICAvL1xuICAgICAgICBwYXJlbnRJZCA9IGxheWVyLnBpZDtcbiAgICAgICAgcGFyZW50SWRzID0ge307XG4gICAgICAgIC8vIGJ1aWxkIHBhcmVudC1pZHMgY2hhaW5cbiAgICAgICAgd2hpbGUgKHNlbGYuYXJyTGF5ZXJzW3BhcmVudElkXSkge1xuICAgICAgICAgIGlmIChwYXJlbnRJZHNbcGFyZW50SWRdKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhdWdodCBlbmRsZXNzLWxvb3AgKElEOiAnICsgbGF5ZXIuaWQgKyAnKScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudElkc1twYXJlbnRJZF0gPSB0cnVlO1xuICAgICAgICAgIHBhcmVudElkID0gdGhpcy5hcnJMYXllcnNbcGFyZW50SWRdLnBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXllci5jb250ZW50ICYmIGxheWVyLmNvbnRlbnRbMF0gJiYgbGF5ZXIuY29udGVudFswXS5jc3NDbGFzcykge1xuICAgICAgICAgIGxheWVyLmNzc0NsYXNzID0gbGF5ZXIuY29udGVudFswXS5jc3NDbGFzcztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCFwYXJlbnRJZHNbcGFyZW50SWRdKSB7XG5cbiAgICAgICAgICAvLyBwcmVwYXJlIGxheWVyIGRhdGEgaWYgdGhleSBhcmUgYSBuZXcgc3RhcmJvYXJkIHRhYlxuICAgICAgICAgIGlmIChsYXllci50eXBlID09PSBcInN0YXJ0YWJcIikge1xuICAgICAgICAgICAgbGF5ZXIuZWRpdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbGF5ZXIucmVuZGVyU3BlY2lhbCA9IHRydWU7XG4gICAgICAgICAgICBsYXllci50YWJJZCA9IGxheWVyLmlkO1xuICAgICAgICAgICAgaWYgKCFsYXllci5sYXllcm5hbWUpIHtcbiAgICAgICAgICAgICAgbGF5ZXIuZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdGVyYXRlIGNoaWxkcyBhbmQgdGVsbCB0aGVtIHRvIG5vdCBsb2FkIGluIGxheWVyc3dpdGNoZXJcbiAgICAgICAgICAgIGZuSGFuZGxlQ2hpbGRzID0gZnVuY3Rpb24oZkxheWVyKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBmTGF5ZXIuY2hpbGRzLmxlbmd0aDsgY291bnQrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZEFyciA9IGZMYXllci5jaGlsZHNbY291bnRdO1xuICAgICAgICAgICAgICAgIGNoaWxkQXJyLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGlsZEFyci50YWJJZCA9IGZMYXllci50YWJJZDtcbiAgICAgICAgICAgICAgICBjaGlsZEFyci5yZW5kZXJTcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hcnJMYXllcnNbY2hpbGRBcnIuaWRdKSB7XG4gICAgICAgICAgICAgICAgICBjaGlsZCA9IHNlbGYuYXJyTGF5ZXJzW2NoaWxkQXJyLmlkXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY2hpbGQgPSBuZXcgQzRnTGF5ZXIoY2hpbGRBcnIpOy8vbGF5ZXJzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzZXQgcmVuZGVyU3BlY2lhbCB0byByZW1vdmUgaXQgZnJvbSBub3JtYWwgbGF5ZXJzd2l0Y2hlclxuICAgICAgICAgICAgICAgIHNlbGYuYXJyTGF5ZXJzW2NoaWxkLmlkXSA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIGZMYXllci5jaGlsZHNbY291bnRdID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmhhc0NoaWxkcykge1xuICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzaXZlIGNhbGxcbiAgICAgICAgICAgICAgICAgIGZuSGFuZGxlQ2hpbGRzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IC8vIGVuZCBvZiBmbkhhbmRsZUNoaWxkc1xuXG4gICAgICAgICAgICBpZiAobGF5ZXIuaGFzQ2hpbGRzKSB7XG4gICAgICAgICAgICAgIGZuSGFuZGxlQ2hpbGRzKGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZuQWRkVG9Ib29rKGxheWVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1aWQgPSBsYXllci5pZCB8fCB1dGlscy5nZXRVbmlxdWVJZCgpO1xuICAgICAgICAgIHRoaXMuYXJyTGF5ZXJzW3VpZF0gPSBsYXllcjtcbiAgICAgICAgICBpZih0aGlzLnByb3h5LmNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20obGF5ZXIuaWQpKXtcbiAgICAgICAgICAgIGxheWVyLmlzSW5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxheWVyLmlzSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucHJveHkubGF5ZXJJZHMucHVzaChsYXllci5pZCk7XG5cbiAgICAgICAgICBpZiAobGF5ZXIuZGlzcGxheSkge1xuICAgICAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZuSGFuZGxlQW5kQXBwZW5kTGF5ZXJDaGlsZHMobGF5ZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGF5ZXIucGlkICYmIHRoaXMuYXJyTGF5ZXJzW2xheWVyLnBpZF0pIHtcbiAgICAgICAgICAgIC8vIHNldCBoaWRlIHdoZW4gbGF5ZXJzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBzdGFyYm9hcmRcbiAgICAgICAgICAgIGxheWVyLmhpZGUgPSB0aGlzLmFyckxheWVyc1tsYXllci5waWRdLmhpZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocGVybWFsaW5rZWRMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IHBlcm1hbGlua2VkTGF5ZXJzLmxlbmd0aDsgcCArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChwZXJtYWxpbmtlZExheWVyc1twXSA9PSBsYXllci5pZCkge1xuICAgICAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKChsYXllci5oaWRlICE9PSBcIjFcIikgfHwgKHZpc2libGUpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5LmFjdGl2ZUxheWVySWRzW2xheWVyLmlkXSA9ICdpbnZpc2libGUnO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9IC8vIGVuZCBvZiBmb3ItbG9vcFxuXG4gICAgICAvLyB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWaXNpYmxlO1xuICB9IC8vIGVuZCBvZiBcImFkZExheWVycygpXCJcbiAgbG9hZExheWVyQ29udGVudChpdGVtVWlkKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBpLFxuICAgICAgbGF5ZXJzLFxuICAgICAgZmVhdHVyZXMsXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbixcbiAgICAgIGRhdGFQcm9qZWN0aW9uLFxuICAgICAgbGF5ZXJHcm91cCxcbiAgICAgIGNvbnRlbnREYXRhLFxuICAgICAgcmVxdWVzdERhdGEsXG4gICAgICByZXF1ZXN0Q29udGVudERhdGEsXG4gICAgICByZXF1ZXN0VmVjdG9yU291cmNlLFxuICAgICAgdmVjdG9yTGF5ZXIsXG4gICAgICB2ZWN0b3JTb3VyY2UsXG4gICAgICB2ZWN0b3JTdHlsZSxcbiAgICAgIGNsdXN0ZXJTb3VyY2UsXG4gICAgICBzdHlsZUZvckNsdXN0ZXIsXG4gICAgICByZWZyZXNoSW50ZXJ2YWwsXG4gICAgICByZWZyZXNoQWpheFZhcnMsXG4gICAgICBmbkF0dGFjaERhdGFUb0xheWVyO1xuXG4gICAgcmVmcmVzaEFqYXhWYXJzID0ge307XG5cbiAgICBmbkF0dGFjaERhdGFUb0xheWVyID0gZnVuY3Rpb24gKGxheWVyLCBkYXRhKSB7XG4gICAgICBkYXRhLnByb3BlcnRpZXMgPSBkYXRhLnByb3BlcnRpZXMgfHwge307XG5cbiAgICAgIGxheWVyLnBvcHVwID0gZGF0YS5wb3B1cCB8fCBkYXRhLnByb3BlcnRpZXMucG9wdXAgfHwgZmFsc2U7XG4gICAgICBsYXllci50b29sdGlwID0gZGF0YS50b29sdGlwIHx8IGRhdGEucHJvcGVydGllcy50b29sdGlwIHx8IGZhbHNlO1xuICAgICAgbGF5ZXIudG9vbHRpcF9sZW5ndGggPSBkYXRhLnRvb2x0aXBfbGVuZ3RoIHx8IGRhdGEucHJvcGVydGllcy50b29sdGlwX2xlbmd0aCB8fCBmYWxzZTtcbiAgICAgIGxheWVyLmxhYmVsID0gZGF0YS5sYWJlbCB8fCBkYXRhLnByb3BlcnRpZXMubGFiZWwgfHwgZmFsc2U7XG4gICAgICBsYXllci56b29tX29uY2xpY2sgPSBkYXRhLnpvb21fb25jbGljayB8fCBkYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrIHx8IGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5hcnJMYXllcnNbaXRlbVVpZF0uY29udGVudCkge1xuICAgICAgbGF5ZXJzID0gW107XG5cbiAgICAgICAgICB2YXIgY29udGVudEZlYXR1cmVzID0gW107XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNvbnRlbnQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb250ZW50RGF0YSA9IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNvbnRlbnRbaV07XG4gICAgICAgICAgc3R5bGVGb3JDbHVzdGVyID0gZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcblxuICAgICAgICAgICAgdmFyIHNpemUsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBmRmVhdHVyZXMsXG4gICAgICAgICAgICAgIGljb25PZmZzZXQsXG4gICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgayxcbiAgICAgICAgICAgICAgZmlsbGNvbG9yLFxuICAgICAgICAgICAgICBmb250Y29sb3I7XG5cbiAgICAgICAgICAgIGlmIChjb250ZW50RGF0YSAmJiBjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NvbnRlbnREYXRhLmxvY2F0aW9uU3R5bGVdKSB7XG4gICAgICAgICAgICAgIHN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0uc3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbik7XG5cbiAgICAgICAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gW107XG4gICAgICAgICAgICAgICAgc2VsZi5maXR0aW5nRXh0ZW5kc1tpdGVtVWlkXSA9IHZlY3RvclNvdXJjZS5nZXRFeHRlbnQoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlICE9PSB1bmRlZmluZWQgJiYgZmVhdHVyZSAhPT0gbnVsbCAmJiBmZWF0dXJlLnNlbGYgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGlmKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgICAgICAgICAgICAgIGZGZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgZkZlYXR1cmVzID0gW107XG4gICAgICAgICAgICAgICAgICBmRmVhdHVyZXNbMF0gPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaXplID0gZkZlYXR1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChmRmVhdHVyZXNbMF0uZ2V0U3R5bGUoKSAmJiBzaXplIDwgMTAwMCkgeyAvLyBsaW1pdCBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbMF0gPSBmRmVhdHVyZXNbMF0uZ2V0U3R5bGUoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGZGZWF0dXJlcy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghZkZlYXR1cmVzW2tdLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0uc3R5bGUoZkZlYXR1cmVzWzBdLCByZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlXS5zdHlsZShmRmVhdHVyZXNbMF0sIHJlc29sdXRpb24pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgYnViYmxlLW9mZnNldFxuICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IFswLCAwXTtcbiAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlWzBdLmdldEltYWdlKCkgJiYgc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMgJiYgdHlwZW9mIHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0UmFkaXVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSBwYXJzZUludChzdHlsZVswXS5nZXRJbWFnZSgpLmdldFJhZGl1cygpLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IFswLCByYWRpdXNdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsZVswXS5nZXRJbWFnZSgpICYmIHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yICYmIHR5cGVvZiBzdHlsZVswXS5nZXRJbWFnZSgpLmdldEFuY2hvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yKCkgfHwgWzAsIDBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSgnNDk3NUE4Jyx7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQ6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDcwXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhLmNsdXN0ZXJfZmlsbGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShjb250ZW50RGF0YS5jbHVzdGVyX2ZpbGxjb2xvcix7XG4gICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA3MFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGZvbnRjb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5jbHVzdGVyX2ZvbnRjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBmb250Y29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoY29udGVudERhdGEuY2x1c3Rlcl9mb250Y29sb3Ise1xuICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBzdHlsZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi4pePXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIjYwcHggc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEgKiBpY29uT2Zmc2V0WzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTEgKiBpY29uT2Zmc2V0WzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZmlsbGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgc3R5bGUucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzaXplLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAtMSAqIGljb25PZmZzZXRbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0gKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZm9udGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2l6ZSA9PT0gMSAmJiBmRmVhdHVyZXNbMF0uZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZGZWF0dXJlc1swXS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgfTsgLy8gZW5kIG9mIHN0eWxlRm9yQ2x1c3RlcigpXG5cbiAgICAgICAgICBpZiAoY29udGVudERhdGEgJiYgKGNvbnRlbnREYXRhLnR5cGUgPT09IFwidXJsRGF0YVwiKSkge1xuXG4gICAgICAgICAgICByZXF1ZXN0RGF0YSA9IHt9O1xuICAgICAgICAgICAgcmVxdWVzdERhdGEudXJsID0gY29udGVudERhdGEuZGF0YS51cmw7XG4gICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgcmVxdWVzdERhdGEucGFyYW1zID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvbnRlbnREYXRhLmRhdGEucGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhLnNldHRpbmdzLmJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RDb250ZW50RGF0YSA9IGNvbnRlbnREYXRhO1xuICAgICAgICAgICAgICByZXF1ZXN0VmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgIGxvYWRlcjogZnVuY3Rpb24gKGV4dGVudCwgcmVzb2x1dGlvbiwgcHJvamVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kaW5nQXJyYXksXG4gICAgICAgICAgICAgICAgICAgIHN0ckJvdW5kaW5nQm94LFxuICAgICAgICAgICAgICAgICAgICB1cmw7XG5cbiAgICAgICAgICAgICAgICAgIGJvdW5kaW5nQXJyYXkgPSBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChleHRlbnQsIHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICAgICAgICAgIHN0ckJvdW5kaW5nQm94ID0gJzxiYm94LXF1ZXJ5IHM9XCInICsgYm91bmRpbmdBcnJheVsxXSArICdcIiBuPVwiJyArIGJvdW5kaW5nQXJyYXlbM10gKyAnXCIgdz1cIicgKyBib3VuZGluZ0FycmF5WzBdICsgJ1wiIGU9XCInICsgYm91bmRpbmdBcnJheVsyXSArICdcIi8+JztcbiAgICAgICAgICAgICAgICAgIHVybCA9IHJlcXVlc3REYXRhLnVybDtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3REYXRhLnBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9kYXRhPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVxdWVzdERhdGEucGFyYW1zLnJlcGxhY2UoL1xcKGJib3hcXCkvZywgc3RyQm91bmRpbmdCb3gpKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubGF5ZXJSZXF1ZXN0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGF5ZXJSZXF1ZXN0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubGF5ZXJSZXF1ZXN0c1snbGF5ZXJSZXF1ZXN0JyArIGl0ZW1VaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllclJlcXVlc3QnICsgaXRlbVVpZF0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllclJlcXVlc3QnICsgaXRlbVVpZF0gPSBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaixcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgckZlYXR1cmVzLFxuICAgICAgICAgICAgICAgICAgICAgIG9zbU5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgIG9zbU5kcyxcbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWR4LFxuICAgICAgICAgICAgICAgICAgICAgIG5kSWR4LFxuICAgICAgICAgICAgICAgICAgICAgIGluZm9Ob2RlcyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgcmVmLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVFeHRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYubGF5ZXJSZXF1ZXN0c1snbGF5ZXJSZXF1ZXN0JyArIGl0ZW1VaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXByb2Nlc3NpbmcgdGhlIG9zbV94bWwgdG8gZmluZCByZWxhdGlvbi1ub2RlcyB3aXRoIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5jaGlsZHJlbiAmJiByZXNwb25zZS5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIDEpIGZpbmQgbm9kZXMgd2l0aCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgb3NtTm9kZXMgPSByZXNwb25zZS5jaGlsZHJlblswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbm9kZScpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvc21Ob2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb05vZGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG5vZGVJZHggaW4gb3NtTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9zbU5vZGVzLmhhc093blByb3BlcnR5KG5vZGVJZHgpICYmIG9zbU5vZGVzW25vZGVJZHhdICYmIG9zbU5vZGVzW25vZGVJZHhdLmNoaWxkcmVuICYmIG9zbU5vZGVzW25vZGVJZHhdLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvTm9kZXNbb3NtTm9kZXNbbm9kZUlkeF0uZ2V0QXR0cmlidXRlKCdpZCcpXSA9IG9zbU5vZGVzW25vZGVJZHhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluZm9Ob2Rlc1tvc21Ob2Rlc1tub2RlSWR4XS5nZXRBdHRyaWJ1dGUoJ2lkJyldID0gbm9kZUlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIC8vIDIpIGNoZWNrIGFuZCBoYW5kbGUgcmVsYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgb3NtTmRzID0gcmVzcG9uc2UuY2hpbGRyZW5bMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ25kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9zbU5kcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuZElkeCBpbiBvc21OZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5kSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9zbU5kcy5oYXNPd25Qcm9wZXJ0eShuZElkeCkgJiYgb3NtTmRzW25kSWR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSBvc21OZHNbbmRJZHhdLmdldEF0dHJpYnV0ZSgncmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvTm9kZXMgJiYgcmVmICYmIGluZm9Ob2Rlc1tyZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RDb250ZW50RGF0YSAmJiByZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3Muc2hvd0FkZGl0aW9uYWxHZW9tZXRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcgPSByZXNwb25zZS5jcmVhdGVFbGVtZW50KCd0YWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGFnICYmIG9zbU5kc1tuZElkeF0ucGFyZW50RWxlbWVudCAmJiBvc21OZHNbbmRJZHhdLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCdrJywgJ2M0Z19vc21fcmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCd2Jywgb3NtTmRzW25kSWR4XS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvTm9kZXNbcmVmXS5hcHBlbmRDaGlsZChuZXdUYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb05vZGVzW3JlZl0uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGNoZWNrIGFuZCBoYW5kbGUgcmVsYXRpb25zLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpbXBvcnQgb3NtX3htbFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSBuZXcgb2wuZm9ybWF0Lk9TTVhNTCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ICYmIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlcyA9IGZvcm1hdC5yZWFkRmVhdHVyZXMocmVzcG9uc2UsIHtmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbn0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FuIG5vdCByZWFkIGZlYXR1cmUuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc3Rwcm9jZXNzaW5nIGZlYXR1cmVzXG4gICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXMgJiYgckZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgckZlYXR1cmVzLmxlbmd0aDsgaiArPSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXNbal0uZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09IFwiUG9pbnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0KCdvc21fdHlwZScsICdub2RlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0KCdvc21fdHlwZScsICd3YXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2M0Z190eXBlJywgJ29zbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgckZlYXR1cmVzW2pdLnNldCgnY2x1c3Rlcl96b29tJywgY29udGVudERhdGEuY2x1c3Rlcl96b29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2NsdXN0ZXJfcG9wdXAnLCBjb250ZW50RGF0YS5jbHVzdGVyX3BvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2xvY19saW5rdXJsJywgY29udGVudERhdGEubG9jX2xpbmt1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgckZlYXR1cmVzW2pdLnNldCgnaG92ZXJfbG9jYXRpb24nLCBjb250ZW50RGF0YS5ob3Zlcl9sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0KCdob3Zlcl9zdHlsZScsIGNvbnRlbnREYXRhLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ3pvb21fb25jbGljaycsIGNvbnRlbnREYXRhLmRhdGEuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXQoJ2xhYmVsJywgY29udGVudERhdGEuZGF0YS5sYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3MuZm9yY2VOb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRyYWNrcyBhbmQgYXJlYXMgdG8gcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXNbal0uZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09IFwiUG9seWdvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9pbnQgPSByRmVhdHVyZXNbal0uZ2V0R2VvbWV0cnkoKS5nZXRJbnRlcmlvclBvaW50KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByRmVhdHVyZXNbal0uc2V0R2VvbWV0cnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgb2wuZ2VvbS5Qb2ludChjZW50ZXJQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJGZWF0dXJlc1tqXS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gXCJMaW5lU3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAVE9ETzogcHLDvGZlbiBvYiBkaWVzIGtvcnJla3RlciBtaXR0ZWxwdW5rdCBpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lRXh0ZW50ID0gckZlYXR1cmVzW2pdLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUG9pbnQgPSBvbC5leHRlbnQuZ2V0Q2VudGVyKGxpbmVFeHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXRHZW9tZXRyeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5nZW9tLlBvaW50KGNlbnRlclBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyRmVhdHVyZXNbal0uZ2V0KCdjNGdfb3NtX3JlZicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3Muc2hvd0FkZGl0aW9uYWxHZW9tZXRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Q29udGVudERhdGEuc2V0dGluZ3MuYWRkaXRpb25hbFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IGxvYWQgYW5kIGF0dGFjaCBzdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJGZWF0dXJlc1tqXS5zZXRTdHlsZSh1dGlscy5yZWR1Y2VTdHlsZShyZXF1ZXN0Q29udGVudERhdGEubG9jYXRpb25TdHlsZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RWZWN0b3JTb3VyY2UuYWRkRmVhdHVyZXMockZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBhZGQgZmVhdHVyZXMgdG8gc291cmNlLiBUaGUgXCJmb3JjZU5vZGVzXCItb3B0aW9uIHNob3VsZCBiZSB1c2VkLicpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3NlbGYuY29tYmluZUxheWVycyhzZWxmKTtcbiAgICAgICAgICAgICAgICAgIH0pOyAvLyBlbmQgb2YgQUpBWFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHJhdGVneTogb2wubG9hZGluZ3N0cmF0ZWd5LmJib3hcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdmVjdG9yU291cmNlID0gcmVxdWVzdFZlY3RvclNvdXJjZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbC5mb3JtYXRbY29udGVudERhdGEuZm9ybWF0XSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgICAgICAvL1N0YXRpY1ZlY3RvclxuICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IG9sLmZvcm1hdFtjb250ZW50RGF0YS5mb3JtYXRdKCksXG4gICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3REYXRhLnVybCxcbiAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjM4NTcnLFxuICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k6IG9sLmxvYWRpbmdzdHJhdGVneS5hbGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5zZXR0aW5ncyAmJiBjb250ZW50RGF0YS5zZXR0aW5ncy5yZWZyZXNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5sYXllclJlcXVlc3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzID0ge307XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJlZnJlc2hJbnRlcnZhbCA9ICh0eXBlb2YgY29udGVudERhdGEuc2V0dGluZ3MuaW50ZXJ2YWwgPT09ICdudW1iZXInKSA/IGNvbnRlbnREYXRhLnNldHRpbmdzLmludGVydmFsIDogMTAwMDA7XG4gICAgICAgICAgICAgICAgICAvKiBkbyBpdCB3aXRoIGJldHRlciBhamF4LWhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllclJlcXVlc3QnICsgaXRlbVVpZF0gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgIH0sIHJlZnJlc2hJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgLy8gQW5mYW5nIEVpbnNjaHViIG5ldWUgQUpBWC1MYXllclxuICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmJsbkhhc1Bvc2l0aW9uSWRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMuYXJyUG9zaXRpb25JZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5vYmpGZWF0dXJlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2Uuc2V0KCdyZWZyZXNoSW50ZXJ2YWwnLCByZWZyZXNoSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2Uuc2V0KCdyZWZyZXNoRnVuY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2ZWN0b3JTb3VyY2UuZ2V0KCdoYXNJZHMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5mb3JFYWNoRmVhdHVyZShmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdwb3NpdGlvbklkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmJsbkhhc1Bvc2l0aW9uSWRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmFyclBvc2l0aW9uSWRzLnB1c2goZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5vYmpGZWF0dXJlc1tmZWF0dXJlLmdldCgncG9zaXRpb25JZCcpXSA9IGZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hBamF4VmFycy5ibG5IYXNQb3NpdGlvbklkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yU291cmNlLnNldCgnaGFzSWRzJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdERhdGEudXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlbmV3YWJsZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBvZiBzdGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmZlYXR1cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGZlYXR1cmVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVEYXRhLnR5cGUgJiYgZmVhdHVyZURhdGEudHlwZSA9PT0gXCJGZWF0dXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gKG5ldyBvbC5mb3JtYXRbY29udGVudERhdGEuZm9ybWF0XSgpKS5yZWFkRmVhdHVyZShmZWF0dXJlRGF0YSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiAnRVBTRzozODU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSBzZWxmLmFyckxheWVyc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cENvbnRlbnQgPSBmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW2ZlYXR1cmVEYXRhLnByb3BlcnRpZXMuc3R5bGVJZF0sIHtkb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2ZlYXR1cmVEYXRhLnByb3BlcnRpZXMuc3R5bGVJZF0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0U291cmNlKCkuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24obmVzdGVkRmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZEZlYXR1cmUuc2V0KCdwb3B1cCcsIHBvcHVwQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jb250ZW50WzBdLmxvY2F0aW9uU3R5bGUgPSBmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZmVhdHVyZURhdGEucHJvcGVydGllcy5zdHlsZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbZmVhdHVyZURhdGEucHJvcGVydGllcy5zdHlsZUlkXSwge2RvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlRGF0YS5wcm9wZXJ0aWVzLnN0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2ZlYXR1cmVEYXRhLnByb3BlcnRpZXMuc3R5bGVJZF0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllci5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5oaWRlTGF5ZXIobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dMYXllcihsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZWN0b3JTb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5mZWF0dXJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5hcnJOZXdQb3NpdGlvbklkcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMub2JqTmV3RmVhdHVyZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmZlYXR1cmVzLCBmdW5jdGlvbiAoaW5kZXgsIGZlYXR1cmVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVEYXRhLnR5cGUgJiYgZmVhdHVyZURhdGEudHlwZSA9PSBcIkZlYXR1cmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmZlYXR1cmUgPSAobmV3IG9sLmZvcm1hdFtjb250ZW50RGF0YS5mb3JtYXRdKCkpLnJlYWRGZWF0dXJlKGZlYXR1cmVEYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246ICdFUFNHOjM4NTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5mZWF0dXJlLnNldCgnY2x1c3Rlcl96b29tJywgY29udGVudERhdGEuY2x1c3Rlcl96b29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5mZWF0dXJlLnNldCgnbG9jX2xpbmt1cmwnLCBjb250ZW50RGF0YS5sb2NfbGlua3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgY29udGVudERhdGEuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLmZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGNvbnRlbnREYXRhLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWpheFZhcnMuYXJyTmV3UG9zaXRpb25JZHMucHVzaChyZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5vYmpOZXdGZWF0dXJlc1tyZWZyZXNoQWpheFZhcnMuZmVhdHVyZS5nZXQoJ3Bvc2l0aW9uSWQnKV0gPSByZWZyZXNoQWpheFZhcnMuZmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlZnJlc2hBamF4VmFycy5hcnJQb3NpdGlvbklkcywgZnVuY3Rpb24gKGluZGV4LCBwb3NpdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hBamF4VmFycy5hcnJOZXdQb3NpdGlvbklkcy5pbmRleE9mKHBvc2l0aW9uSWQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbnMgaWQgaW4gbmV1ZXIgYW50d29ydCBuaWNodCBtZWhyIGVudGhhbHRlbiAtPiBsw7ZzY2hlIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmcmVzaEFqYXhWYXJzLm9iakZlYXR1cmVzW3Bvc2l0aW9uSWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5yZW1vdmVGZWF0dXJlKHJlZnJlc2hBamF4VmFycy5vYmpGZWF0dXJlc1twb3NpdGlvbklkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZShyZWZyZXNoQWpheFZhcnMuYXJyUG9zaXRpb25JZHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHJlZnJlc2hBamF4VmFycy5hcnJOZXdQb3NpdGlvbklkcywgZnVuY3Rpb24gKGluZGV4LCBwb3NpdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZnJlc2hBamF4VmFycy5hcnJQb3NpdGlvbklkcy5pbmRleE9mKHBvc2l0aW9uSWQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbnMgaWQgaXN0IG5vY2ggbmljaHQgdm9yaGFuZGVuIC0+IG5ldWVzIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBamF4VmFycy5hcnJQb3NpdGlvbklkcy5wdXNoKHBvc2l0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFqYXhWYXJzLm9iakZlYXR1cmVzW3Bvc2l0aW9uSWRdID0gcmVmcmVzaEFqYXhWYXJzLm9iak5ld0ZlYXR1cmVzW3Bvc2l0aW9uSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmUocmVmcmVzaEFqYXhWYXJzLm9iak5ld0ZlYXR1cmVzW3Bvc2l0aW9uSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LnJlcXVlc3RGdW5jdGlvbnNbJ3JlcXVlc3RfJyArIGl0ZW1VaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAnZnVuY3Rpb24nOiB2ZWN0b3JTb3VyY2UuZ2V0KCdyZWZyZXNoRnVuY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgJ2ludGVydmFsJzogcmVmcmVzaEludGVydmFsXG4gICAgICAgICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgICAgICAgIC8vIEVuZGUgRWluc2NodWIgbmV1ZSBBSkFYLUxheWVyXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Zvcm1hdCB0eXBlICcgKyBjb250ZW50RGF0YS5mb3JtYXQgKyAnIGluIG9sLmZvcm1hdCBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhLnNldHRpbmdzLmNsdXN0ZXIpIHtcblxuICAgICAgICAgICAgICBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAsXG4gICAgICAgICAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgICAgICAgICAgc291cmNlOiB2ZWN0b3JTb3VyY2UsXG4gICAgICAgICAgICAgICAgem9vbTogY29udGVudERhdGEuY2x1c3Rlcl96b29tXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNsdXN0ZXJTb3VyY2UpO1xuICAgICAgICAgICAgICB0aGlzLnN0eWxlRm9yQ2x1c3RlciA9IHN0eWxlRm9yQ2x1c3RlcjtcblxuICAgICAgICAgICAgICAvL3ZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIoY2x1c3RlclNvdXJjZSwgc3R5bGVGb3JDbHVzdGVyKTtcblxuICAgICAgICAgICAgICB2ZWN0b3JMYXllciA9IG5ldyBvbC5sYXllci5BbmltYXRlZENsdXN0ZXIoXG4gICAgICAgICAgICAgICAge1x0bmFtZTogJ0NsdXN0ZXInLFxuICAgICAgICAgICAgICAgICAgc291cmNlOiBjbHVzdGVyU291cmNlLFxuICAgICAgICAgICAgICAgICAgLy8gVXNlIGEgc3R5bGUgZnVuY3Rpb24gZm9yIGNsdXN0ZXIgc3ltYm9saXNhdGlvblxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlRm9yQ2x1c3RlclxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIodmVjdG9yU291cmNlLCBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlXSA/IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NvbnRlbnREYXRhLmxvY2F0aW9uU3R5bGVdLnN0eWxlIDogbnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIEZpdCB0byBleHRlbmQgKi9cbiAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5zZXR0aW5ncyAmJiBjb250ZW50RGF0YS5zZXR0aW5ncy5maXRUb0V4dGVuZCkge1xuXG4gICAgICAgICAgICAgIHNlbGYuZml0dGluZ0V4dGVuZHMgPSBzZWxmLmZpdHRpbmdFeHRlbmRzIHx8IHt9O1xuXG4gICAgICAgICAgICAgIHZlY3RvclNvdXJjZS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgY3VycmVudGx5IHN0b3JlZCBpZCdzXG4gICAgICAgICAgICAgICAgZm9yIChpIGluIHNlbGYuZml0dGluZ0V4dGVuZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmZpdHRpbmdFeHRlbmRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5wcm94eS5hY3RpdmVMYXllcklkc1tpXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBzZWxmLnByb3h5LmFjdGl2ZUxheWVySWRzWzBdID09IFwiaW52aXNpYmxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5maXR0aW5nRXh0ZW5kc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuZml0dGluZ0V4dGVuZHNbaXRlbVVpZF0gPSB2ZWN0b3JTb3VyY2UuZ2V0RXh0ZW50KCk7Ly92ZWN0b3JTb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICB1dGlscy5maXRUb0V4dGVudHMoc2VsZi5maXR0aW5nRXh0ZW5kcywgc2VsZi5tYXBDb250cm9sbGVyLm1hcCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbmQgb2YgZml0IHRvIGV4dGVuZFxuXG4gICAgICAgICAgICBmbkF0dGFjaERhdGFUb0xheWVyKHZlY3RvckxheWVyLCBjb250ZW50RGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGxheWVycy5wdXNoKHZlY3RvckxheWVyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLmFyckxheWVyc1tpdGVtVWlkXS50eXBlID09PSBcInRhYmxlXCIpIHx8ICh0aGlzLmFyckxheWVyc1tpdGVtVWlkXS50eXBlID09PSBcImxpbmtcIikpIHtcbiAgICAgICAgICAgIHZhciBsYXllckNvbnRlbnQgPSB0aGlzLmFyckxheWVyc1tpdGVtVWlkXS5jb250ZW50O1xuICAgICAgICAgICAgY29udGVudERhdGEgPSBsYXllckNvbnRlbnRbMF07XG4gICAgICAgICAgICBpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzICYmIGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uID0gY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnByb2plY3Rpb247XG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uID0gdGhpcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvcmNlIGFsbCBub2RlcyBpbnRvIG9uZSBsYXllclxuXG5cbiAgICAgICAgICAgIHZhciBjb250ZW50RmVhdHVyZSA9IG5ldyBvbC5mb3JtYXRbbGF5ZXJDb250ZW50W2ldLmZvcm1hdF0oe30pLnJlYWRGZWF0dXJlcyhsYXllckNvbnRlbnRbaV0uZGF0YSwge1xuICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogZmVhdHVyZVByb2plY3Rpb24sXG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBkYXRhUHJvamVjdGlvblxuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfem9vbScsIGNvbnRlbnREYXRhLmNsdXN0ZXJfem9vbSk7XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfcG9wdXAnLCBjb250ZW50RGF0YS5jbHVzdGVyX3BvcHVwKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbG9jX2xpbmt1cmwnLCBjb250ZW50RGF0YS5sb2NfbGlua3VybCk7XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgY29udGVudERhdGEuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGNvbnRlbnREYXRhLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgncG9wdXAnLCBsYXllckNvbnRlbnRbaV0uZGF0YS5wcm9wZXJ0aWVzLnBvcHVwKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnem9vbV9vbmNsaWNrJywgY29udGVudERhdGEuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcblxuXG4gICAgICAgICAgICBpZihpKzEgPT09IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNvbnRlbnQubGVuZ3RoKXtcbiAgICAgICAgICAgICAgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBjb250ZW50RmVhdHVyZXMsXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6Mzg1NycsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgb2wuZm9ybWF0Lkdlb0pTT04oKSxcblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLnNldHRpbmdzICYmIGNvbnRlbnREYXRhLnNldHRpbmdzLmNsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MCxcbiAgICAgICAgICAgICAgICAgIHpvb206IGNvbnRlbnREYXRhLmNsdXN0ZXJfem9vbSxcblxuICAgICAgICAgICAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgICAgICAgICAgICBzb3VyY2U6IHZlY3RvclNvdXJjZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdmVjdG9yTGF5ZXIgPSB1dGlscy5nZXRWZWN0b3JMYXllcihjbHVzdGVyU291cmNlLCBzdHlsZUZvckNsdXN0ZXIpO1xuXG4gICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIgPSBuZXcgb2wubGF5ZXIuQW5pbWF0ZWRDbHVzdGVyKFxuICAgICAgICAgICAgICAgICAge1x0bmFtZTogJ0NsdXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGNsdXN0ZXJTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBhIHN0eWxlIGZ1bmN0aW9uIGZvciBjbHVzdGVyIHN5bWJvbGlzYXRpb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlRm9yQ2x1c3RlclxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3JMYXllciA9IHV0aWxzLmdldFZlY3RvckxheWVyKHZlY3RvclNvdXJjZSwgY29udGVudERhdGEgJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0gPyBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjb250ZW50RGF0YS5sb2NhdGlvblN0eWxlXS5zdHlsZSA6IG51bGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxheWVycy5wdXNoKHZlY3RvckxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJMYXllcnNbaXRlbVVpZF0uY29udGVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIC8vVE9ETzogcmVmYWN0b3JlbiB1bmQga8O8cnplbiFcbiAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBvdmVycGFzcyByZXF1ZXN0IHdpdGggcmVhc3NpZ25lZCBmb3J1bSBsYXllcnNcbiAgICAgICAgICAgICAgLy8gZm9ydW0gbGF5ZXJzIGNhbiBub3QgYmUgZHJhd24gdmlhIHRoZSBub3JtYWwgZHJhd0xheWVyLCBiZWNhdXNlIHRoZXkgZG8gbm90IGhhdmUgYSBVaWRcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnREYXRhICYmICh0eXBlb2Ygb2wuZm9ybWF0W2NvbnRlbnREYXRhLmZvcm1hdF0gPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzICYmIGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbiA9IGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZlYXR1cmVzID0gKG5ldyBvbC5mb3JtYXRbY29udGVudERhdGEuZm9ybWF0XSh7fSkpLnJlYWRGZWF0dXJlcyhjb250ZW50RGF0YS5kYXRhLCB7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogZmVhdHVyZVByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogZGF0YVByb2plY3Rpb25cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nU3R5bGVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHVuc3R5bGVkRmVhdHVyZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZlYXR1cmVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2ZlYXR1cmVzW2pdLmdldCgnc3R5bGVJZCcpXSAmJiBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKV0uc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlc1tqXS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKV0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdTdHlsZXMucHVzaChmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdW5zdHlsZWRGZWF0dXJlcy5wdXNoKGZlYXR1cmVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZlY3RvclN0eWxlID0gc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0gJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY29udGVudERhdGEubG9jYXRpb25TdHlsZV0uc3R5bGU7XG5cbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1N0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAvL1RPRE8gdGhlcmUgYXJlIHVuc3R5bGVkIGZlYXR1cmVzIGJlY2F1c2Ugc29tZSBzdHlsZXMgd2VyZSBub3QgbG9hZGVkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzozODU3JyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgb2wuZm9ybWF0Lkdlb0pTT04oKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBjbHVzdGVyU291cmNlID0gbmV3IG9sLnNvdXJjZS5DbHVzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiBjb250ZW50RGF0YS5jbHVzdGVyX3pvb20sXG5cbiAgICAgICAgICAgICAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogdmVjdG9yU291cmNlXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIgPSB1dGlscy5nZXRWZWN0b3JMYXllcihjbHVzdGVyU291cmNlLCB2ZWN0b3JTdHlsZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YSAmJiBjb250ZW50RGF0YS5kYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnBvcHVwID0gY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIudG9vbHRpcCA9IGNvbnRlbnREYXRhLmRhdGEucHJvcGVydGllcy50b29sdGlwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmxhYmVsID0gY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudERhdGEuZGF0YS5wcm9wZXJ0aWVzLm9uY2xpY2tfem9vbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci5vbmNsaWNrX3pvb20gPSBjb250ZW50RGF0YS5kYXRhLnByb3BlcnRpZXMub25jbGlja196b29tO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxheWVycy5wdXNoKHZlY3RvckxheWVyKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdGb3JtYXQgdHlwZSAnICsgY29udGVudERhdGEuZm9ybWF0ICsgJyBpbiBvbC5mb3JtYXQgbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvL25vIGNvbnRlbnREYXRhLCBtYXliZSBhIGxpbmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG5vcm1hbCwgbm90IG92ZXJwYXNzIGxheWVyXG4gICAgICAgICAgICAgIHNlbGYuZHJhd0xheWVyKGl0ZW1VaWQpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG5cbiAgICAgIC8vIGFkZCB2ZWN0b3IgbGF5ZXIgZ3JvdXBcbiAgICAgIGxheWVyR3JvdXAgPSBuZXcgb2wubGF5ZXIuR3JvdXAoe1xuICAgICAgICBsYXllcnM6IGxheWVyc1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFyckxheWVyc1tpdGVtVWlkXS52ZWN0b3JMYXllciA9IGxheWVyR3JvdXA7XG4gICAgICBzZWxmLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKGxheWVyR3JvdXApO1xuICAgICAgLy9zZWxmLmNvbWJpbmUoc2VsZik7XG5cbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmFyckxheWVyc1tpdGVtVWlkXS5hc3luY19jb250ZW50ID09IDEpe1xuICAgICAgICAgIHN0eWxlRm9yQ2x1c3RlciA9IGZ1bmN0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24pe1xuICAgICAgICAgICAgICB2YXIgc3R5bGVJZCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCxcbiAgICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICAgIGZpbGxjb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRjb2xvcjtcbiAgICAgICAgICAgICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICAgICAgICAgICAgICBpZihzdHlsZUlkID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJylbMF0uZ2V0KCdsb2NhdGlvblN0eWxlJykpe1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS5zdHlsZShmZWF0dXJlLmdldCgnZmVhdHVyZXMnKVswXSxyZXNvbHV0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZighc3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gW107XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZihmZWF0dXJlLmdldCgnZmVhdHVyZXMnKS5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgYnViYmxlLW9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgIGljb25PZmZzZXQgPSBbMCwgMF07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzID0gcGFyc2VJbnQoc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMoKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25PZmZzZXQgPSBbMCwgcmFkaXVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRBbmNob3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yKCkgfHwgWzAsIDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KCc0OTc1QTgnLHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNzBcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbnRlbnREYXRhLmNsdXN0ZXJfZmlsbGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShjb250ZW50RGF0YS5jbHVzdGVyX2ZpbGxjb2xvcix7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdLmdldCgnY2x1c3Rlcl9maWxsY29sb3InKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShmZWF0dXJlLmdldCgnZmVhdHVyZXMnKVswXS5nZXQoJ2NsdXN0ZXJfZmlsbGNvbG9yJykse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDcwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBmb250Y29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJylbMF0uZ2V0KCdjbHVzdGVyX2ZvbnRjb2xvcicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdLmdldCgnY2x1c3Rlcl9mb250Y29sb3InKSx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLil49cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIjYwcHggc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xICogaWNvbk9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZmlsbGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpLmxlbmd0aC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xICogaWNvbk9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0gKyAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZvbnRjb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmKHN0eWxlKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVxdWVzdFZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICAgICAgICAgICAgbG9hZGVyOiBmdW5jdGlvbiAoZXh0ZW50LCByZXNvbHV0aW9uLCBwcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgYm91bmRpbmdBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICBzdHJCb3VuZGluZ0JveCxcbiAgICAgICAgICAgICAgICAgICAgICB1cmw7XG4gICAgICAgICAgICAgICAgICBzZWxmLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5zaG93KCk7XG4gICAgICAgICAgICAgICAgICBib3VuZGluZ0FycmF5ID0gb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCBwcm9qZWN0aW9uLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgICAgICAgICBzdHJCb3VuZGluZ0JveCA9IGJvdW5kaW5nQXJyYXlbMF0rJywnK2JvdW5kaW5nQXJyYXlbMV0rJzsnK2JvdW5kaW5nQXJyYXlbMl0rJywnK2JvdW5kaW5nQXJyYXlbM107XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5sYXllclJlcXVlc3RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxheWVyUmVxdWVzdHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmxheWVyUmVxdWVzdHNbJ2xheWVyRGF0YVJlcXVlc3QnICsgaXRlbVVpZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGF5ZXJSZXF1ZXN0c1snbGF5ZXJEYXRhUmVxdWVzdCcgKyBpdGVtVWlkXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYoIXNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3NlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLmxvY3N0eWxlXSl7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW3NlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLmxvY3N0eWxlXSwge2RvbmU6IGZ1bmN0aW9uKCkge319KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgc2VsZi5sYXllclJlcXVlc3RzWydsYXllckRhdGFSZXF1ZXN0JyArIGl0ZW1VaWRdID0galF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogc2VsZi5wcm94eS5hcGlfbGF5ZXJjb250ZW50ZGF0YV91cmwgKyAnLycgKyBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS5pZCArJy8nK3N0ckJvdW5kaW5nQm94LFxuICAgICAgICAgICAgICAgICAgfSkuZG9uZSggZnVuY3Rpb24gKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMCAmJiAhY29udGVudEZlYXR1cmVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXllciA9IHNlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdO1xuICAgICAgICAgICAgICAgICAgICAgIGxvb3BEYXRhOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RGF0YSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY29udGVudEZlYXR1cmVzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50RGF0YS5pZCA9PT0gY29udGVudEZlYXR1cmVzW2pdLmlkKSBjb250aW51ZSBsb29wRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDb29yZGluYXRlID0gb2wucHJvai50cmFuc2Zvcm0oW3BhcnNlRmxvYXQoY29udGVudERhdGFbJ2dlb3gnXSksIHBhcnNlRmxvYXQoY29udGVudERhdGFbJ2dlb3knXSldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgb2wuZ2VvbS5Qb2ludChyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUocG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0SWQoY29udGVudERhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX3pvb20nLCBsYXllci5jbHVzdGVyLnpvb20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX3BvcHVwJywgbGF5ZXIuY2x1c3Rlci5wb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfZmlsbGNvbG9yJywgbGF5ZXIuY2x1c3Rlci5maWxsY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX2ZvbnRjb2xvcicsIGxheWVyLmNsdXN0ZXIuZm9udGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbG9jX2xpbmt1cmwnLCBsYXllci5sb2NfbGlua3VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgbGF5ZXIuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3B1cCA9IGNvbnRlbnREYXRhWydwb3B1cCddID8gY29udGVudERhdGFbJ3BvcHVwJ10gOiBPYmplY3QuYXNzaWduKHt9LGxheWVyLnBvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvcHVwICYmIHBvcHVwLmNvbnRlbnQgJiYgcG9wdXAuY29udGVudC5zZWFyY2ggJiYgcG9wdXAuY29udGVudC5zZWFyY2goJ2l0ZW1JZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAuY29udGVudCA9IHBvcHVwLmNvbnRlbnQucmVwbGFjZSgnaXRlbUlkJyxjb250ZW50RGF0YVsnaWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb250ZW50RGF0YVsnbGFiZWwnXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbGFiZWwnLGNvbnRlbnREYXRhWydsYWJlbCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29udGVudERhdGFbJ3Rvb2x0aXAnXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCd0b29sdGlwJyxjb250ZW50RGF0YVsndG9vbHRpcCddKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdwb3B1cCcsIHBvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnem9vbV9vbmNsaWNrJywgbGF5ZXIuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgndGlkJywgY29udGVudERhdGFbJ2lkJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY3N0eWxlID0gY29udGVudERhdGFbJ2xvY3N0eWxlJ10gfHwgbGF5ZXIubG9jc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2xvY2F0aW9uU3R5bGUnLCBsb2NzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsb2NzdHlsZSAmJiBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXVuc3R5bGVkRmVhdHVyZXMpe3Vuc3R5bGVkRmVhdHVyZXMgPVtdO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighbWlzc2luZ1N0eWxlcyl7bWlzc2luZ1N0eWxlcyA9IFtdO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3N0eWxlSWQnLGxvY3N0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzLnB1c2goY29udGVudEZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdTdHlsZXNbbG9jc3R5bGVdID0gbG9jc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmKG1pc3NpbmdTdHlsZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhtaXNzaW5nU3R5bGVzLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGkgPSAwOyBpIDwgdW5zdHlsZWRGZWF0dXJlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZUlkID11bnN0eWxlZEZlYXR1cmVzW2ldLmdldCgnc3R5bGVJZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzW2ldLnNldFN0eWxlKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFZlY3RvclNvdXJjZS5hZGRGZWF0dXJlKHVuc3R5bGVkRmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RWZWN0b3JTb3VyY2UuYWRkRmVhdHVyZXMoY29udGVudEZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHJhdGVneTogb2wubG9hZGluZ3N0cmF0ZWd5LmJib3hcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmKHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNsdXN0ZXIpe1xuICAgICAgICAgICAgbGV0IGxheWVyID0gc2VsZi5hcnJMYXllcnNbaXRlbVVpZF07XG4gICAgICAgICAgICBsZXQgbWFwID0gc2VsZi5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Wm9vbSA9IG1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgICAgICAgbGV0IGNsdXN0ZXJEaXN0YW5jZSA9IHRoaXMuYXJyTGF5ZXJzW2l0ZW1VaWRdLmNsdXN0ZXIuZGlzdGFuY2UgfHwgMjA7XG4gICAgICAgICAgICBpZiAoY3VycmVudFpvb20gPj0gbGF5ZXIuY2x1c3Rlci56b29tKSB7XG4gICAgICAgICAgICAgIGNsdXN0ZXJEaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsdXN0ZXJTb3VyY2UgPSBuZXcgb2wuc291cmNlLkNsdXN0ZXIoe1xuICAgICAgICAgICAgICBkaXN0YW5jZTogY2x1c3RlckRpc3RhbmNlLFxuICAgICAgICAgICAgICAvL3RocmVzaG9sZDogMiwgLy9taW5pbXVtIGVsZW1lbnQgY291bnRcbiAgICAgICAgICAgICAgc291cmNlOiByZXF1ZXN0VmVjdG9yU291cmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIgPSBuZXcgb2wubGF5ZXIuQW5pbWF0ZWRDbHVzdGVyKFxuICAgICAgICAgICAgICAgICAge1x0bmFtZTogJ0NsdXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogY2x1c3RlclNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYSBzdHlsZSBmdW5jdGlvbiBmb3IgY2x1c3RlciBzeW1ib2xpc2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlRm9yQ2x1c3RlclxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHZlY3RvckxheWVyID0gbmV3IG9sLmxheWVyLlZlY3RvcihcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTGF5ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogcmVxdWVzdFZlY3RvclNvdXJjZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXllcnMgPSBsYXllcnMgfHwgW107XG4gICAgICAgICAgbGF5ZXJzLnB1c2godmVjdG9yTGF5ZXIpO1xuICAgICAgICBsYXllckdyb3VwID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgICAgIGxheWVyczogbGF5ZXJzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFyckxheWVyc1tpdGVtVWlkXS52ZWN0b3JMYXllciA9IGxheWVyR3JvdXA7XG4gICAgICAgIHNlbGYubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIobGF5ZXJHcm91cCk7XG5cblxuICAgICAgfVxuICAgICAgIGVsc2V7XG4gICAgICAgIHNlbGYubWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgIGRhdGFUeXBlOiBzZWxmLm1hcENvbnRyb2xsZXIuZGF0YS5qc29ucCA/IFwianNvbnBcIiA6IFwianNvblwiLFxuICAgICAgICAgIHVybDogc2VsZi5wcm94eS5hcGlfbGF5ZXJjb250ZW50X3VybCArICcvJyArIHNlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLmlkLFxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgbGV0IGosXG4gICAgICAgICAgICAgICAgbmV3TG9jYXRpb25TdHlsZXM7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdMb2NhdGlvblN0eWxlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqICs9IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS5jb250ZW50ID0gc2VsZi5hcnJMYXllcnNbaXRlbVVpZF0uY29udGVudCB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS5jb250ZW50LnB1c2goZGF0YVtqXSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xvY2F0aW9uU3R5bGVzLnB1c2goZGF0YVtqXS5sb2NhdGlvblN0eWxlKTtcbiAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5jaGVja0xvY2F0aW9uU3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQFRPRE86IGNoZWNrIHRoaXMhXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRMYXllckNvbnRlbnQoaXRlbVVpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuXG4gIH0gLy8gZW5kIG9mIFwibG9hZExheWVyQ29udGVudCgpXCJcblxuICBoaWRlTGF5ZXIobGF5ZXJVaWQsIGtlZXBMYXllcikge1xuXG4gICAgdmFyIGxheWVyLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgICBsYXllciA9IHRoaXMuYXJyTGF5ZXJzW2xheWVyVWlkXTtcbiAgICBpZiAoIWxheWVyKSB7XG4gICAgICAvL2NvbnNvbGUud2FybignQ2Fubm90IGhpZGUgdW5rbm93biBsYXllciAoJyArIGxheWVyVWlkICsgJyknKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBsYXllciBpcyBsaXN0ZWQgYXMgXCJhY3RpdmVcIlxuICAgIC8vIG90aGVyd2lzZSB0aGVyZSBpcyBub3RoaW5nIHRvIHJlbW92ZSBvciBjaGFuZ2VcbiAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllclVpZF0pIHtcbiAgICAgIC8vIHJlbW92ZSBsYXllciBmcm9tIG1hcCAoaWYgaXQgd2FzIHZpc2libGUgYmVmb3JlKVxuICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXJVaWRdID09PSAndmlzaWJsZScgJiYgbGF5ZXIudmVjdG9yTGF5ZXIpIHtcbiAgICAgICAgLy8gW2luZm9dOiBkbyBub3QgdXNlIFwibGF5ZXIudmVjdG9yTGF5ZXIuc2V0VmlzaWJsZShmYWxzZSk7XCJcbiAgICAgICAgLy8gICAgICAgICBzZWUgXCJzaG93TGF5ZXIoKVwiIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIudmVjdG9yTGF5ZXIpO1xuICAgICAgfVxuICAgICAgLy8gb25seSBtYXJrIGFzIFwiaW52aXNpYmxlXCIgaWYgXCJrZWVwTGF5ZXJcIiBpcyBcInRydWVcIlxuICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSB6b29tLWJvdW5kc1xuICAgICAgaWYgKGtlZXBMYXllcikge1xuICAgICAgICB0aGlzLnByb3h5LmFjdGl2ZUxheWVySWRzW2xheWVyVWlkXSA9ICdpbnZpc2libGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXJVaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoaWxkcyBuZWVkZWQgdG8gYmUgY2hlY2tlZCBpbmRlcGVuZGVudCBmcm9tIGl0cyBwYXJlbnRzIHN0YXRlXG5cblxuICAgIC8vVG9EbyBsb2FkaW5nIHByb2JsZW1cbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIuaGFzQ2hpbGRzKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKGxheWVyLmNoaWxkc1tpXS5pZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGxheWVyLmlzSW5hY3RpdmUpe1xuICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnModGhpcy5wcm94eS5ob29rX2xheWVyX3Zpc2liaWxpdHksIGxheWVyVWlkKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsYXllci5pc0luYWN0aXZlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxheWVyUmVxdWVzdHMgJiYgdHlwZW9mIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmxheWVyUmVxdWVzdHNbJ2xheWVyX3JlcXVlc3RfJyArIGxheWVyVWlkXSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvL3RoaXMuY29tYmluZUxheWVycyh0aGlzKTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIoW3RoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpWzBdKzAuMDAxLHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpWzFdXSk7XG4gICAgLy8gaG9va3NcbiAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh0aGlzLnByb3h5Lmhvb2tfbGF5ZXJfdmlzaWJpbGl0eSwgbGF5ZXJVaWQpO1xuICB9IC8vIGVuZCBvZiBcImhpZGVMYXllcigpXCJcbiAgaGlkZUNoaWxkTGF5ZXIobGF5ZXJVaWQsIGNoaWxkVWlkKXtcbiAgICBsZXQgbGF5ZXIgPSB0aGlzLmFyckxheWVyc1tsYXllclVpZF1cbiAgICBjaGlsZFVpZCA9IGNoaWxkVWlkLnJlcGxhY2UobGF5ZXJVaWQsJycpO1xuICAgIGxldCBjaGlsZExheWVyID0gbGF5ZXIudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVtjaGlsZFVpZF1cbiAgICBjaGlsZExheWVyLnNldCgndmlzaWJsZScsIGZhbHNlKTtcbiAgfVxuICBzaG93Q2hpbGRMYXllcihsYXllclVpZCwgY2hpbGRVaWQpe1xuICAgICAgbGV0IGxheWVyID0gdGhpcy5hcnJMYXllcnNbbGF5ZXJVaWRdXG4gICAgICBjaGlsZFVpZCA9IGNoaWxkVWlkLnJlcGxhY2UobGF5ZXJVaWQsJycpO1xuICAgICAgbGV0IGNoaWxkTGF5ZXIgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpW2NoaWxkVWlkXVxuICAgICAgY2hpbGRMYXllci5zZXQoJ3Zpc2libGUnLCB0cnVlKTtcbiAgfVxuXG4gIHNob3dMYXllcihsYXllclVpZCkge1xuICAgIHZhciBsYXllcixcbiAgICAgIG1hcExheWVycyxcbiAgICAgIGFkZExheWVyLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICBhY3RpdmVGb3Jab29tO1xuXG4gICAgYWN0aXZlRm9yWm9vbSA9IHRoaXMucHJveHkuY2hlY2tMYXllcklzQWN0aXZlRm9yWm9vbShsYXllclVpZCk7XG4gICAgbGF5ZXIgPSB0aGlzLmFyckxheWVyc1tsYXllclVpZF07XG5cbiAgICBpZiAoYWN0aXZlRm9yWm9vbSkge1xuICAgICAgaWYgKHRoaXMucHJveHkuYWN0aXZlTGF5ZXJJZHNbbGF5ZXJVaWRdICE9PSAndmlzaWJsZScpIHtcbiAgICAgICAgLy9pZiAobGF5ZXIubGlua19pZCkge1xuICAgICAgICAvLyAgdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllci5saW5rX2lkXSA9ICd2aXNpYmxlJztcbiAgICAgICAgLy99IGVsc2VcbiAgICAgICAgaWYgKGxheWVyICYmIGxheWVyLnZlY3RvckxheWVyKSB7XG4gICAgICAgICAgLy8gW2luZm9dOiBkbyBub3QgdXNlOiBcImxheWVyLnZlY3RvckxheWVyLnNldFZpc2libGUodHJ1ZSk7XCJcbiAgICAgICAgICAvLyAgICAgICAgIEFsd2F5cyBhZGQgYW5kIHJlbW92ZSBMYXllcnMsIHNvIHRoYXQgdGhlIGxhc3RcbiAgICAgICAgICAvLyAgICAgICAgIGNsaWNrZWQgbGF5ZXIgaXMgYWx3YXlzIG9udG9wIG9mIHRoZSBvdGhlcnMuXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBsYXllciBpcyByZWFsbHkgbm90IGFscmVhZHkgb24gdGhlIG1hcFxuICAgICAgICAgIC8vIHRvIHByZXZlbnQgYWRkaW5nIHRoZSBzYW1lIGxheWVyIG11bHRpcGxlIHRpbWVzXG4gICAgICAgICAgYWRkTGF5ZXIgPSB0cnVlO1xuICAgICAgICAgIG1hcExheWVycyA9IHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCk7XG4gICAgICAgICAgbWFwTGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IGxheWVyLnZlY3RvckxheWVyKSB7XG4gICAgICAgICAgICAgIGFkZExheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGFkZExheWVyKSB7XG4gICAgICAgICAgICBpZihsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdICYmIGxheWVyLnZlY3RvckxheWVyLmdldExheWVycygpLmdldEFycmF5KClbMF0ucG9wdXAgJiYgbGF5ZXIudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXS5wb3B1cC5zaG93UG9wdXBPbkFjdGl2ZSl7XG4gICAgICAgICAgICAgIGM0Zy5tYXBzLnBvcHVwLiRjb250ZW50Lmh0bWwoJycpO1xuICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSkuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkxPQURJTkcpO1xuICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC5zcGlubmVyLnNob3coKTtcbiAgICAgICAgICAgICAgdmFyIHBvcHVwSW5mb3MgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdLnBvcHVwO1xuICAgICAgICAgICAgICB2YXIgZmVhdHVyZXMgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgIHZhciBjb29yZCA9IGZlYXR1cmVzWycwJ10uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgICBpZiAocG9wdXBJbmZvcy5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mb3M7XG4gICAgICAgICAgICAgICAgb2JqUG9wdXAuZmVhdHVyZSA9IGZlYXR1cmVzWycwJ107XG4gICAgICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllci52ZWN0b3JMYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBzZWxmLmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwSW5mb3MuY29udGVudCxcbiAgICAgICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cEluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHBvcHVwSW5mb3MuYXN5bmMsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cEluZm9zLnBvcHVwLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmdfbGluazogcG9wdXBJbmZvcy5yb3V0aW5nX2xpbmtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm87XG4gICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlc1snMCddO1xuICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5sYXllciA9IGxheWVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihsYXllci52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9hZExheWVyQ29udGVudChsYXllclVpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllclVpZF0gPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9pZiAobGF5ZXIubGlua19pZCkge1xuICAgICAgICAvLyAgdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllci5saW5rX2lkXSA9ICdpbnZpc2libGUnO1xuICAgICAgICAvL30gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5wcm94eS5hY3RpdmVMYXllcklkc1tsYXllclVpZF0gPSAnaW52aXNpYmxlJztcbiAgICAgICAgLy99XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxheWVyICYmIGxheWVyLmhhc0NoaWxkcyAmJiBhY3RpdmVGb3Jab29tKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGF5ZXIuY2hpbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKGxheWVyLmNoaWxkc1tpXS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxheWVyICYmIGFjdGl2ZUZvclpvb20pIHtcbiAgICAgIGxheWVyLmlzSW5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJveHkucmVxdWVzdEZ1bmN0aW9uc1sncmVxdWVzdF8nICsgbGF5ZXJVaWRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgIGlmICh0aGlzLmxheWVyUmVxdWVzdHMgJiYgdHlwZW9mIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRoaXMubGF5ZXJSZXF1ZXN0c1snbGF5ZXJfcmVxdWVzdF8nICsgbGF5ZXJVaWRdID0gd2luZG93LnNldEludGVydmFsKHRoaXMucHJveHkucmVxdWVzdEZ1bmN0aW9uc1sncmVxdWVzdF8nICsgbGF5ZXJVaWRdLmZ1bmN0aW9uLCB0aGlzLnByb3h5LnJlcXVlc3RGdW5jdGlvbnNbJ3JlcXVlc3RfJyArIGxheWVyVWlkXS5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLy90aGlzLmNvbWJpbmVMYXllcnModGhpcyk7XG4gICAgLy8gaG9va3NcbiAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh0aGlzLnByb3h5Lmhvb2tfbGF5ZXJfdmlzaWJpbGl0eSwgbGF5ZXJVaWQpO1xuICB9IC8vIGVuZCBvZiBcInNob3dMYXllcigpXCJcblxuICBkcmF3TGF5ZXIoaXRlbVVpZCkge1xuXG4gICAgdmFyIHNlbGYsXG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudENvbnRlbnQsXG4gICAgICBsYXllcnMsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIG1pc3NpbmdTdHlsZXMsXG4gICAgICB1bnN0eWxlZEZlYXR1cmVzLFxuICAgICAgZmVhdHVyZXMsXG4gICAgICBkYXRhUHJvamVjdGlvbixcbiAgICAgIGZlYXR1cmVQcm9qZWN0aW9uLFxuICAgICAgdmVjdG9yU291cmNlLFxuICAgICAgdmVjdG9yTGF5ZXIsXG4gICAgICB2ZWN0b3JTdHlsZSxcbiAgICAgIGxheWVyR3JvdXA7XG5cbiAgICBzZWxmID0gdGhpcztcbiAgICBlbGVtZW50ID0gdGhpcy5hcnJMYXllcnNbaXRlbVVpZF07XG5cbiAgICAvLyBpZiAoIWVsZW1lbnQuaGlkZSkge1xuXG4gICAgbGF5ZXJzID0gW107XG4gICAgaWYgKGVsZW1lbnQuY29udGVudCAmJiBlbGVtZW50LmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnQuY29udGVudC5sZW5ndGg7IGkgKz0gMSkge1xuXG4gICAgICAgIGVsZW1lbnRDb250ZW50ID0gZWxlbWVudC5jb250ZW50W2ldO1xuICAgICAgICBpZiAoIWVsZW1lbnRDb250ZW50KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvbC5mb3JtYXRbZWxlbWVudENvbnRlbnQuZm9ybWF0XSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAvLyBpZiAoZWxlbWVudC5jb250ZW50W2ldLm9yaWdUeXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICAgIC8vICAgZmVhdHVyZVByb2plY3Rpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAvLyAgIGZlYXR1cmVQcm9qZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzICYmIGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uKSB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbiA9IGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wcm9qZWN0aW9uO1xuICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb24gPSB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5mb3JtYXQgPT09IFwiT1NNWE1MXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5nZW9tZXRyeSAmJiBlbGVtZW50Q29udGVudC5kYXRhLmdlb21ldHJ5LnR5cGUgPT09IFwiQ2lyY2xlXCIpIHtcbiAgICAgICAgICAgIC8vIGRyYXcgY2lyY2xlIGdlb21ldHJpZXNcbiAgICAgICAgICAgIGZlYXR1cmVzID0gW107XG4gICAgICAgICAgICBsZXQgZmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKFxuICAgICAgICAgICAgICBuZXcgb2wuZ2VvbS5DaXJjbGUoXG4gICAgICAgICAgICAgICAgb2wucHJvai5mcm9tTG9uTGF0KGVsZW1lbnRDb250ZW50LmRhdGEuZ2VvbWV0cnkuY2VudGVyKSxcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGVsZW1lbnRDb250ZW50LmRhdGEuZ2VvbWV0cnkucmFkaXVzKVxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIGZlYXR1cmUuc2V0KCdzdHlsZUlkJywgZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZSk7XG4gICAgICAgICAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1haW5pbmcgZ2VvbWV0cmllc1xuICAgICAgICAgICAgZmVhdHVyZXMgPSAobmV3IG9sLmZvcm1hdFtlbGVtZW50Q29udGVudC5mb3JtYXRdKHt9KSkucmVhZEZlYXR1cmVzKGVsZW1lbnRDb250ZW50LmRhdGEsIHtcbiAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IGZlYXR1cmVQcm9qZWN0aW9uLFxuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogZGF0YVByb2plY3Rpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1pc3NpbmdTdHlsZXMgPSBbXTtcbiAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzID0gW107XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IGZlYXR1cmVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAvLyBmZWF0dXJlc1tqXS5zZXRJZCh1dGlscy5nZXRVbmlxdWVJZCgpKTtcbiAgICAgICAgICAgIC8vIGZlYXR1cmVzW2pdLnNldCgncHJvamVjdGlvbicsIHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFByb2plY3Rpb24oKSk7XG4gICAgICAgICAgICAvLyBmZWF0dXJlc1tqXS5zZXQoJ3Byb2plY3Rpb24nLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgICAgICAgIGZlYXR1cmVzW2pdLnNldCgnaG92ZXJfbG9jYXRpb24nLCBlbGVtZW50Q29udGVudC5ob3Zlcl9sb2NhdGlvbik7XG4gICAgICAgICAgICBmZWF0dXJlc1tqXS5zZXQoJ2hvdmVyX3N0eWxlJywgZWxlbWVudENvbnRlbnQuaG92ZXJfc3R5bGUpO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVzW2pdLmdldCgnc3R5bGVJZCcpKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tmZWF0dXJlc1tqXS5nZXQoJ3N0eWxlSWQnKV0gJiYgc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJyldLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZXNbal0uc2V0U3R5bGUoc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJyldLnN0eWxlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzLnB1c2goZmVhdHVyZXNbal0uZ2V0KCdzdHlsZUlkJykpO1xuICAgICAgICAgICAgICAgIHVuc3R5bGVkRmVhdHVyZXMucHVzaChmZWF0dXJlc1tqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZSkge1xuICAgICAgICAgICAgICAvLyBmZWF0dXJlIGhhcyBubyBwcm9wZXJ0eSBzdHlsZUlkLCBidXQgZWxlbWVudENvbnRlbnQgaGFzIGxvY2F0aW9uc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgLy9mZWF0dXJlc1tqXS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tlbGVtZW50Q29udGVudC5sb2NhdGlvblN0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ1N0eWxlcy5wdXNoKGVsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGUpO1xuICAgICAgICAgICAgICAgIHVuc3R5bGVkRmVhdHVyZXMucHVzaChmZWF0dXJlc1tqXSk7XG4gICAgICAgICAgICAgICAgZmVhdHVyZXNbal0uc2V0KCdzdHlsZUlkJywgZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2ZWN0b3JTdHlsZSA9IHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdLnN0eWxlO1xuICAgICAgICAgIGlmKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdICYmIHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnRDb250ZW50LmxvY2F0aW9uU3R5bGVdLmZuU3R5bGVGdW5jdGlvbikge1xuXG4gICAgICAgICAgICB2ZWN0b3JTdHlsZSA9IEZ1bmN0aW9uKFwiZmVhdHVyZVwiLFwiZGF0YVwiLFwibWFwXCIsc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZWxlbWVudENvbnRlbnQubG9jYXRpb25TdHlsZV0uZm5TdHlsZUZ1bmN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1pc3NpbmdTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMobWlzc2luZ1N0eWxlcywge1xuICAgICAgICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYsXG4gICAgICAgICAgICAgICAgICBmTGF5ZXJHcm91cCxcbiAgICAgICAgICAgICAgICAgIGZMYXllcnMsXG4gICAgICAgICAgICAgICAgICBmVmVjdG9yTGF5ZXIsXG4gICAgICAgICAgICAgICAgICBmVmVjdG9yU291cmNlO1xuICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCB1bnN0eWxlZEZlYXR1cmVzLmxlbmd0aDsgZiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdW5zdHlsZWRGZWF0dXJlc1tmXS5nZXQoJ3N0eWxlSWQnKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zdHlsZWRGZWF0dXJlc1tmXS5zZXRTdHlsZShzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t1bnN0eWxlZEZlYXR1cmVzW2ZdLmdldCgnc3R5bGVJZCcpXS5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBmVmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzozODU3JyxcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIoZlZlY3RvclNvdXJjZSwgdmVjdG9yU3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBsYXllcnMucHVzaCh2ZWN0b3JMYXllcik7XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZi5hcnJMYXllcnNbaXRlbVVpZF0uZlZlY3RvckxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZkxheWVyR3JvdXAgPSBzZWxmLmFyckxheWVyc1tpdGVtVWlkXS52ZWN0b3JMYXllcjtcbiAgICAgICAgICAgICAgICAgICAgICBmTGF5ZXJzID0gZkxheWVyR3JvdXAuZ2V0TGF5ZXJzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YSAmJiBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnRvb2x0aXAgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmVmVjdG9yTGF5ZXIubGFiZWwgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy56b29tX29uY2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZWZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgZkxheWVycy5wdXNoKGZWZWN0b3JMYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgZkxheWVyR3JvdXAuc2V0TGF5ZXJzKGZMYXllcnMpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YSAmJiBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy5wb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlZlY3RvckxheWVyLnRvb2x0aXAgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmVmVjdG9yTGF5ZXIubGFiZWwgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy56b29tX29uY2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZWZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGZMYXllckdyb3VwID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBbZlZlY3RvckxheWVyXVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXJyTGF5ZXJzW2l0ZW1VaWRdLnZlY3RvckxheWVyID0gZkxheWVyR3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihmTGF5ZXJHcm91cCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuc3BsaXRfZ2VvanNvbikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6Mzg1NycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IG5ldyBvbC5mb3JtYXQuR2VvSlNPTigpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyID0gdXRpbHMuZ2V0VmVjdG9yTGF5ZXIodmVjdG9yU291cmNlLCB2ZWN0b3JTdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGo8IGVsZW1lbnQuZ2VvanNvbl9hdHRyaWJ1dGVzLnNwbGl0KCcsJykubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnNldChlbGVtZW50Lmdlb2pzb25fYXR0cmlidXRlcy5zcGxpdCgnLCcpW2pdLGZlYXR1cmVzW2ldLmdldChlbGVtZW50Lmdlb2pzb25fYXR0cmlidXRlcy5zcGxpdCgnLCcpW2pdKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXllcnMucHVzaCh2ZWN0b3JMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMucG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIudG9vbHRpcCA9IGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy50b29sdGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmxhYmVsID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB2ZWN0b3JTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3Rvcih7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6Mzg1NycsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IG9sLmZvcm1hdC5HZW9KU09OKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2ZWN0b3JMYXllciA9IHV0aWxzLmdldFZlY3RvckxheWVyKHZlY3RvclNvdXJjZSwgdmVjdG9yU3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDb250ZW50LmRhdGEgJiYgZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMucG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLnBvcHVwID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLnBvcHVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVjdG9yTGF5ZXIudG9vbHRpcCA9IGVsZW1lbnRDb250ZW50LmRhdGEucHJvcGVydGllcy50b29sdGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLmxhYmVsID0gZWxlbWVudENvbnRlbnQuZGF0YS5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWN0b3JMYXllci56b29tX29uY2xpY2sgPSBlbGVtZW50Q29udGVudC5kYXRhLnByb3BlcnRpZXMuem9vbV9vbmNsaWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGF5ZXJzLnB1c2godmVjdG9yTGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRm9ybWF0IHR5cGUgJyArIGVsZW1lbnRDb250ZW50LmZvcm1hdCArICcgaW4gb2wuZm9ybWF0IG5vdCBmb3VuZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGF5ZXJHcm91cCA9IG5ldyBvbC5sYXllci5Hcm91cCh7XG4gICAgICBsYXllcnM6IGxheWVyc1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJMYXllcnNbaXRlbVVpZF0udmVjdG9yTGF5ZXIgPSBsYXllckdyb3VwO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIobGF5ZXJHcm91cCk7XG4gICAgaWYobGF5ZXJHcm91cC5nZXRMYXllcnMoKS5nZXRBcnJheSgpWzBdICYmIGxheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXS5wb3B1cCAmJiBsYXllckdyb3VwLmdldExheWVycygpLmdldEFycmF5KClbMF0ucG9wdXAuc2hvd1BvcHVwT25BY3RpdmUpe1xuICAgICAgYzRnLm1hcHMucG9wdXAuJGNvbnRlbnQuaHRtbCgnJyk7XG4gICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSkuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkxPQURJTkcpO1xuICAgICAgYzRnLm1hcHMucG9wdXAuc3Bpbm5lci5zaG93KCk7XG4gICAgICB2YXIgcG9wdXBJbmZvcyA9IGxheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXS5wb3B1cDtcbiAgICAgIHZhciBsYXllciA9IGxheWVyR3JvdXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKVswXTtcbiAgICAgIHZhciBjb29yZCA9IGZlYXR1cmVzWycwJ10uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgaWYgKHBvcHVwSW5mb3MuYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBvYmpQb3B1cCA9IHt9O1xuICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mb3M7XG4gICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlc1snMCddO1xuICAgICAgICBvYmpQb3B1cC5sYXllciA9IGxheWVyO1xuICAgICAgICAvLyBDYWxsIHRoZSBwb3B1cCBob29rIGZvciBwbHVnaW4gc3BlY2lmaWMgcG9wdXAgY29udGVudFxuICAgICAgICBpZiAoYzRnLm1hcHMuaG9vayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucHJveHkuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB1cmw6IHNlbGYuYXBpX2luZm93aW5kb3dfdXJsICsgJy8nICsgcG9wdXBJbmZvcy5jb250ZW50LFxuICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgICBhc3luYzogcG9wdXBJbmZvcy5hc3luYyxcbiAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgICAgcm91dGluZ19saW5rOiBwb3B1cEluZm9zLnJvdXRpbmdfbGlua1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mbztcbiAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlc1snMCddO1xuICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllcjtcblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgIGlmIChjNGcubWFwcy5ob29rICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vaG9va3NcbiAgICAvLyB9XG4gIH0gLy8gZW5kIG9mIFwiZHJhd0xheWVyKClcIlxuXG4gIGRyYXdMYXllckluaXRpYWwoKSB7XG4gICAgdmFyIGxheWVySWQsXG4gICAgICBsYXllcjtcblxuICAgIGZvciAobGF5ZXJJZCBpbiB0aGlzLnByb3h5LmFjdGl2ZUxheWVySWRzKSB7XG4gICAgICBpZiAodGhpcy5wcm94eS5hY3RpdmVMYXllcklkcy5oYXNPd25Qcm9wZXJ0eShsYXllcklkKSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcihsYXllcklkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgbCBpbiB0aGlzLmFyckxheWVycykge1xuICAgICAgaWYgKHRoaXMuYXJyTGF5ZXJzLmhhc093blByb3BlcnR5KGwpKSB7XG4gICAgICAgIGxheWVyID0gdGhpcy5hcnJMYXllcnNbbF07XG4gICAgICAgIGlmIChsYXllci5oaWRlID09PSBcIjFcIikge1xuICAgICAgICAgIHRoaXMuaGlkZUxheWVyKGxheWVyLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJkcmF3TGF5ZXJJbml0aWFsKClcIlxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXItY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBDNGdMYXllcntcbiAgXG4gIGNvbnN0cnVjdG9yKGxheWVyQXJyKSB7XG4gICAgdGhpcy5pZCA9IGxheWVyQXJyWydpZCddO1xuICAgIHRoaXMucGlkID0gbGF5ZXJBcnJbJ3BpZCddO1xuICAgIHRoaXMuYXN5bmNfY29udGVudCA9IGxheWVyQXJyWydhc3luY19jb250ZW50J107XG4gICAgdGhpcy5jb250ZW50ID0gbGF5ZXJBcnJbJ2NvbnRlbnQnXTtcbiAgICB0aGlzLmNzc0NsYXNzID0gbGF5ZXJBcnJbJ2Nzc0NsYXNzJ107XG4gICAgdGhpcy5oaWRlID0gbGF5ZXJBcnJbJ2hpZGUnXTtcbiAgICB0aGlzLmhpZGVfY2hpbGQgPSBsYXllckFyclsnaGlkZV9jaGlsZCddO1xuICAgIHRoaXMudHlwZSA9IGxheWVyQXJyWyd0eXBlJ107XG4gICAgdGhpcy5jbHVzdGVyID0gbGF5ZXJBcnJbJ2NsdXN0ZXInXTtcbiAgICB0aGlzLnpvb20gPSBsYXllckFyclsnem9vbSddO1xuICAgIHRoaXMuem9vbV9sb2NhdGlvbnMgPSBsYXllckFyclsnem9vbV9sb2NhdGlvbnMnXTtcbiAgICB0aGlzLmRpc3BsYXkgPSBsYXllckFyclsnZGlzcGxheSddO1xuICAgIHRoaXMuaGFzQ2hpbGRzID0gbGF5ZXJBcnJbJ2hhc0NoaWxkcyddO1xuICAgIHRoaXMuY2hpbGRzID0gbGF5ZXJBcnJbJ2NoaWxkcyddO1xuICAgIHRoaXMuY2hpbGRzQ291bnQgPSBsYXllckFyclsnY2hpbGRzQ291bnQnXTtcbiAgICB0aGlzLnJlbmRlclNwZWNpYWwgPSBsYXllckFyclsncmVuZGVyU3BlY2lhbCddO1xuICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMudHlwZSA9IGxheWVyQXJyWyd0eXBlJ107XG4gICAgdGhpcy5sb2NzdHlsZSA9IGxheWVyQXJyWydsb2NzdHlsZSddO1xuICAgIHRoaXMubmFtZSA9IGxheWVyQXJyWyduYW1lJ107XG4gICAgdGhpcy50YWJJZCA9IGxheWVyQXJyWyd0YWJJZCddO1xuICAgIHRoaXMuc3BsaXRfZ2VvanNvbiA9IGxheWVyQXJyWydzcGxpdF9nZW9qc29uJ107XG4gICAgdGhpcy5nZW9qc29uX2F0dHJpYnV0ZXMgPSBsYXllckFyclsnZ2VvanNvbl9hdHRyaWJ1dGVzJ107XG4gICAgdGhpcy5nZW9qc29uX3pvb20gPSBsYXllckFyclsnZ2VvanNvbl96b29tJ107XG4gICAgdGhpcy5sYXllcm5hbWUgPSBsYXllckFyclsnbGF5ZXJuYW1lJ107XG4gICAgdGhpcy52aXNpYmxlQ2hpbGRzID0gZmFsc2U7XG4gICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgdGhpcy5oaWRlV2hlbkluVGFiID0gbGF5ZXJBcnJbJ2hpZGVfd2hlbl9pbl90YWInXTtcblxuICAgIGlmIChsYXllckFyci5wcm9qZWN0SWQpIHtcbiAgICAgIHRoaXMucHJvamVjdElkID0gbGF5ZXJBcnIucHJvamVjdElkO1xuICAgIH1cbiAgICBpZihsYXllckFyci5wb3B1cCl7XG4gICAgICB0aGlzLnBvcHVwID0gbGF5ZXJBcnIucG9wdXA7XG4gICAgfVxuICAgIHRoaXMuYXdlc29tZWljb24gPSBsYXllckFyclsnYXdlc29tZWljb24nXVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbGF5ZXIuanMiLCJpbXBvcnQge0M0Z0xvY2F0aW9uU3R5bGV9IGZyb20gXCIuL2M0Zy1sb2NhdGlvbnN0eWxlXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z0xvY2F0aW9uU3R5bGVDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yKHByb3h5KXtcbiAgICAgICAgdGhpcy5wcm94eSA9IHByb3h5O1xuICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIgPSBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuYXJyTG9jU3R5bGVzID0gW107XG4gICAgfVxuXG4gICAgbG9hZExvY2F0aW9uU3R5bGVzKGFycklkcywgb3B0X29wdGlvbnMpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IHt9LFxuICAgICAgICAgICAgc3VjY2VzcyA9IHt9LFxuICAgICAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudCA9IDEsXG4gICAgICAgICAgICBtYWtlQWpheDtcblxuICAgICAgICBpZiAob3B0X29wdGlvbnMgJiYgdHlwZW9mIG9wdF9vcHRpb25zID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0X29wdGlvbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcblxuICAgICAgICBtYWtlQWpheCA9IGZ1bmN0aW9uKHN0eWxlSWRzLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc1tpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGdldCBsb2NhdGlvbnN0eWxlcyBvdmVyIEFQSVxuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmpzb25wID8gXCJqc29ucFwiIDogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBzZWxmLnByb3h5LmFwaV9sb2NzdHlsZV91cmwsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpZHM6IHN0eWxlSWRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGxldCBpLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWwgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhID0gZGF0YVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXJyTG9jU3R5bGVzW3N0eWxlRGF0YS5pZF0gPSBuZXcgQzRnTG9jYXRpb25TdHlsZShzdHlsZURhdGEsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzW2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZG9uZSAmJiB0eXBlb2Ygb3B0aW9ucy5kb25lID09PSBcImZ1bmN0aW9uXCIgJiYgKGluZGV4ID8gc3VjY2Vzc2Z1bCA6IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoalhociwgc3RyU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcGxldGVba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFsd2F5cyAmJiB0eXBlb2Ygb3B0aW9ucy5hbHdheXMgPT09IFwiZnVuY3Rpb25cIiAmJiAoaW5kZXggPyBjb21wbGV0ZWQgOiB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFsd2F5cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISQoc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvclRocm93bik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzcGxpdCBhcnJJZHMgaWYgaXQncyB0b28gbG9uZ1xuICAgICAgICBpZiAoYXJySWRzLmxlbmd0aCA+IDEwMCkge1xuICAgICAgICAgICAgdmFyIG4gPSAxMDA7XG4gICAgICAgICAgICB3aGlsZShhcnJJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1ha2VBamF4KGFycklkcy5zcGxpY2UoMCwgbiksIGNvdW50KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFrZUFqYXgoYXJySWRzKTtcbiAgICAgICAgfVxuICAgICAgICAvL30pO1xuICAgIH0gLy8gZW5kIG9mIFwibG9hZExvY2F0aW9uU3R5bGVzKClcIlxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWxvY2F0aW9uc3R5bGUtY29udHJvbGxlci5qcyIsImltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdMb2NhdGlvblN0eWxle1xuICAgIGNvbnN0cnVjdG9yKGxvY1N0eWxlQXJyLCBjb250cm9sbGVyKXtcbiAgICAgICAgdGhpcy5pZCAgICAgICAgPSBsb2NTdHlsZUFyclsnaWQnXTtcbiAgICAgICAgdGhpcy5zdHlsZSAgICAgPSB0aGlzLmdldFN0eWxlRnVuY3Rpb24obG9jU3R5bGVBcnIpO1xuICAgICAgICB0aGlzLmVkaXRvciAgICA9IHRoaXMuZ2V0U3R5bGVFZGl0b3JDb25maWcobG9jU3R5bGVBcnIpO1xuICAgICAgICB0aGlzLm5hbWUgICAgICA9IGxvY1N0eWxlQXJyWyduYW1lJ107XG4gICAgICAgIHRoaXMudG9vbHRpcCAgID0gbG9jU3R5bGVBcnJbJ3Rvb2x0aXAnXTtcbiAgICAgICAgdGhpcy5sYWJlbCAgICAgPSBsb2NTdHlsZUFyclsnbGFiZWwnXTtcbiAgICAgICAgdGhpcy5taW56b29tICAgPSBsb2NTdHlsZUFyclsnbWluem9vbSddO1xuICAgICAgICB0aGlzLm1heHpvb20gICA9IGxvY1N0eWxlQXJyWydtYXh6b29tJ107XG4gICAgICAgIHRoaXMuZm5TdHlsZUZ1bmN0aW9uID0gbG9jU3R5bGVBcnJbJ3N0eWxlX2Z1bmN0aW9uX2pzJ107XG4gICAgICAgIHRoaXMuY29udHJvbGxlcj0gY29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5sb2NTdHlsZUFyciA9IGxvY1N0eWxlQXJyO1xuICAgIH1cblxuICAgIGdldFN0eWxlRnVuY3Rpb24oc3R5bGVEYXRhKSB7XG4gICAgICAgIHZhciBzZWxmLFxuICAgICAgICAgICAgc3R5bGVGdW5jdGlvbixcbiAgICAgICAgICAgIGltYWdlU3R5bGUsXG4gICAgICAgICAgICBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICAgIHRleHRTdHlsZSxcbiAgICAgICAgICAgIHRleHRTdHlsZU91dGxpbmUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbCxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHJva2U7XG5cbiAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gZ2VuZXJhbFxuICAgICAgICBzdHJva2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3IsIHN0eWxlRGF0YS5zdHJva2VvcGFjaXR5KSxcbiAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChzdHlsZURhdGEuc3Ryb2tld2lkdGgudmFsdWUsIDEwKVxuICAgICAgICB9KTtcbiAgICAgICAgZmlsbFN0eWxlID0gbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgY29sb3I6IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yLCBzdHlsZURhdGEuZmlsbG9wYWNpdHkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGltYWdlXG4gICAgICAgIHN3aXRjaCAoc3R5bGVEYXRhLnN0eWxldHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiA0LFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgMTAsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiBNYXRoLlBJIC8gNFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3Rhcic6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czE6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgMTAsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czI6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgPyBNYXRoLmZsb29yKHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgKiAwLjUpIDogNCxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiA1LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogNCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDEwLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyOiAwLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogTWF0aC5QSSAvIDRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nyb3NzJzpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiA0LFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgMTAsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogMyxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDEwLFxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbjogTWF0aC5QSSAvIDQsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvbF9pY29uJzogLy8gZmFsbHRocm91Z2hcbiAgICAgICAgICAgIGNhc2UgJ2N1c3RfaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEuaWNvbl9zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuSWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogcGFyc2VGbG9hdChzdHlsZURhdGEuaWNvbl9vcGFjaXR5LnZhbHVlLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBzdHlsZURhdGEuaWNvbl9zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogW3BhcnNlSW50KHN0eWxlRGF0YS5pY29uX3NpemVbMF0sIDEwKSwgcGFyc2VJbnQoc3R5bGVEYXRhLmljb25fc2l6ZVsxXSwgMTApXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogcGFyc2VGbG9hdChzdHlsZURhdGEuaWNvbl9zY2FsZSwgMTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjdXN0X2ljb25fc3ZnJzpcbiAgICAgICAgICAgICAgICAgICAgaWYoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuaWNvbl9zY2FsZSAmJiBzdHlsZURhdGEuaWNvbl9zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IChzdHlsZURhdGEuaWNvbl9zaXplWzBdKnN0eWxlRGF0YS5pY29uX3NjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAoc3R5bGVEYXRhLmljb25fc2l6ZVsxXSpzdHlsZURhdGEuaWNvbl9zY2FsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHJva2V3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVEYXRhLnN0cm9rZXdpZHRoICYmIHN0eWxlRGF0YS5zdHJva2V3aWR0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZXdpZHRoID0gc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoICA9IHdpZHRoKygyKnN0cm9rZXdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQrKDIqc3Ryb2tld2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVEYXRhLmZpbGxjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvciwgc3R5bGVEYXRhLmZpbGxvcGFjaXR5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZXdpZHRoICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3IsIHN0eWxlRGF0YS5zdHJva2VvcGFjaXR5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzdHlsZURhdGEuaWNvbl9vcGFjaXR5LnZhbHVlICYmIChzdHlsZURhdGEuaWNvbl9vcGFjaXR5LnZhbHVlID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjdHguZ2xvYmFsQWxwaGEgPSAoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSAvIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnpJbmRleCA9IDEwMDsgLy9UZXN0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgc3Ryb2tld2lkdGgsIHN0cm9rZXdpZHRoLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5JY29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc6IGNhbnZhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdTaXplOiBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XS8qLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IChzdHlsZURhdGEuaWNvbl9vcGFjaXR5LnZhbHVlIC8gMTAwKSovXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaG90bycgOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUGhvdG8oe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiBzdHlsZURhdGEucGhvdG9LaW5kLFxuICAgICAgICAgICAgICAgICAgICBjcm9wOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBwYXJzZUZsb2F0KHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUsIDEwKSAvIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBwYXJzZUZsb2F0KHN0eWxlRGF0YS5yYWRpdXMudmFsdWUsMTApLFxuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogc3R5bGVEYXRhLmljb25fc3JjXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb2ludCc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCA3XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgN1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnVpbGQgZnVuY3Rpb25cbiAgICAgICAgc3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChmZWF0dXJlLCBwcm9qZWN0aW9uLCBnZXRJZCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlc0FycmF5LFxuICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgIGFycm93U2l6ZSxcbiAgICAgICAgICAgICAgICBhcnJvd1NpemVVbml0LFxuICAgICAgICAgICAgICAgIHNlZ21lbnRMZW5ndGgsXG4gICAgICAgICAgICAgICAgYXJyb3dzX21pbnpvb20sXG4gICAgICAgICAgICAgICAgc3RhcnRfcGl4ZWwsXG4gICAgICAgICAgICAgICAgZW5kX3BpeGVsO1xuXG4gICAgICAgICAgICBpZiAoZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVEYXRhLmlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGlzIGEgZmVhdHVyZS5zdHlsZUZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAoIShmZWF0dXJlIGluc3RhbmNlb2Ygb2wuRmVhdHVyZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICBmZWF0dXJlID0gdGhpcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3R5bGVzQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGZlYXR1cmUgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0ID09PSAnZnVuY3Rpb24nICYmIGZlYXR1cmUuZ2V0KCdsYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBmZWF0dXJlLmdldCgnbGFiZWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bGVEYXRhLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBzdHlsZURhdGEubGFiZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGVmYXVsdENvbG9yID0gc2VsZi5jb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZGF0YS5kZWZhdWx0X2xhYmVsX2NvbG9yO1xuICAgICAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEubGFiZWxfb3V0bF9jb2xvciAmJiBzdHlsZURhdGEubGFiZWxfb3V0bF93aWR0aC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGVPdXRsaW5lID0gbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5sYWJlbF9vdXRsX2NvbG9yIHx8IGRlZmF1bHRDb2xvciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChzdHlsZURhdGEubGFiZWxfb3V0bF93aWR0aC52YWx1ZSwgMTApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZihzdHlsZURhdGEubGFiZWxfb3V0bF9ib3ggPT09IFwiMVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbCA9IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmxhYmVsX291dGxfY29sb3IgfHwgZGVmYXVsdENvbG9yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlRGF0YS5sYWJlbF9vZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhLmxhYmVsX29mZnNldCA9IFswLCAwLCBcInB4XCJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzdHlsZURhdGEubGFiZWxfb3V0bF9ib3ggPT09IFwiMVwiKXtcbiAgICAgICAgICAgICAgICAgIHRleHRTdHlsZSA9IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IChzdHlsZURhdGEuZm9udF93ZWlnaHQgfHwgJ25vcm1hbCcpICsgJyAnICsgKHN0eWxlRGF0YS5mb250X3N0eWxlIHx8ICdub3JtYWwnKSArICcgJyArIChzdHlsZURhdGEuZm9udF9zaXplIHx8ICcxMycpICsgJ3B4ICcgKyAoc3R5bGVEYXRhLmZvbnRfZmFtaWx5IHx8ICdzYW5zLXNlcmlmJyksXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjYWxlOiBwYXJzZUludChzdHlsZURhdGEuZm9udF9zaXplIHx8IDAsIDEwKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IHBhcnNlSW50KHN0eWxlRGF0YS5sYWJlbF9vZmZzZXRbMF0gfHwgMCwgMTApLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiBwYXJzZUludChzdHlsZURhdGEubGFiZWxfb2Zmc2V0WzFdIHx8IDAsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBzdHlsZURhdGEubGFiZWxfYWxpZ25faG9yLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QmFzZWxpbmU6IHN0eWxlRGF0YS5sYWJlbF9hbGlnbl92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5mb250X2NvbG9yIHx8IGRlZmF1bHRDb2xvciwgc3R5bGVEYXRhLmZvbnRfb3BhY2l0eSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRGaWxsOiBiYWNrZ3JvdW5kRmlsbCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFN0cm9rZTogdGV4dFN0eWxlT3V0bGluZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICB0ZXh0U3R5bGUgPSBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBmb250OiAoc3R5bGVEYXRhLmZvbnRfd2VpZ2h0IHx8ICdub3JtYWwnKSArICcgJyArIChzdHlsZURhdGEuZm9udF9zdHlsZSB8fCAnbm9ybWFsJykgKyAnICcgKyAoc3R5bGVEYXRhLmZvbnRfc2l6ZSB8fCAnMTMnKSArICdweCAnICsgKHN0eWxlRGF0YS5mb250X2ZhbWlseSB8fCAnc2Fucy1zZXJpZicpLFxuICAgICAgICAgICAgICAgICAgICAvLyBzY2FsZTogcGFyc2VJbnQoc3R5bGVEYXRhLmZvbnRfc2l6ZSB8fCAwLCAxMCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiBwYXJzZUludChzdHlsZURhdGEubGFiZWxfb2Zmc2V0WzBdIHx8IDAsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogcGFyc2VJbnQoc3R5bGVEYXRhLmxhYmVsX29mZnNldFsxXSB8fCAwLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogc3R5bGVEYXRhLmxhYmVsX2FsaWduX2hvcixcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiBzdHlsZURhdGEubGFiZWxfYWxpZ25fdmVyLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZm9udF9jb2xvciB8fCBkZWZhdWx0Q29sb3IsIHN0eWxlRGF0YS5mb250X29wYWNpdHkpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHRleHRTdHlsZU91dGxpbmVcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgc3R5bGUtb2JqZWN0XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgY2hlY2sgYmVjYXVzZSB0ZXh0U3R5bGUgaXMgYSB2YXIgYWNjZXNzaWJsZSBmcm9tIGNsb3N1cmUgYW5kIHdpbGwgYmUgc2V0IGV2ZW4gaWYgbm8gbGFiZWwgaXMgc2V0XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0U3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzQXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gYWRkIGxpbmUtYXJyb3dzXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3R5bGVEYXRhLmxpbmVfYXJyb3dzXG4gICAgICAgICAgICAgICAgJiYgZmVhdHVyZVxuICAgICAgICAgICAgICAgICYmICh0eXBlb2YgZmVhdHVyZS5nZXRHZW9tZXRyeSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAmJiAhKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIG9sLmdlb20uUG9pbnQpXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5mb3JFYWNoU2VnbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYXJyb3dTaXplID0gKHN0eWxlRGF0YS5saW5lX2Fycm93c19yYWRpdXMpID8gKHBhcnNlSW50KHN0eWxlRGF0YS5saW5lX2Fycm93c19yYWRpdXMudmFsdWUsIDEwKSAqIDIpIDogMDtcbiAgICAgICAgICAgICAgICBhcnJvd1NpemVVbml0ID0gYXJyb3dTaXplICsgc3R5bGVEYXRhLmxpbmVfYXJyb3dzX3JhZGl1cy51bml0O1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5mb3JFYWNoU2VnbWVudChmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIG1pbnpvb20gaXMgMCAodW5saW1pdGVkKSwgaGlkZSBhcnJvd3MgaWYgdGhleSBhcmUgYmlnZ2VyIHRoYW4gdGhlIHNlZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzX21pbnpvb20gPSBwYXJzZUludChzdHlsZURhdGEubGluZV9hcnJvd3NfbWluem9vbSwgMTApO1xuICAgICAgICAgICAgICAgICAgICBzdGFydF9waXhlbCA9IHNlbGYuY29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRQaXhlbEZyb21Db29yZGluYXRlKHN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgZW5kX3BpeGVsID0gc2VsZi5jb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUoZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXVjbGlkLWRpc3RhbmNlIGJldHdlZW4gc3RhcnQgYW5kIGVuZFxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50TGVuZ3RoID0gTWF0aC5zcXJ0KE1hdGgucG93KGVuZF9waXhlbFsxXSAtIHN0YXJ0X3BpeGVsWzFdLCAyKSArIE1hdGgucG93KGVuZF9waXhlbFswXSAtIHN0YXJ0X3BpeGVsWzBdLCAyKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFycm93c19taW56b29tIDwgMCAmJiBhcnJvd1NpemUgKyBwYXJzZUludChzdHlsZURhdGEuc3Ryb2tld2lkdGgudmFsdWUsIDEwKSA8IHNlZ21lbnRMZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoYXJyb3dzX21pbnpvb20gPj0gMCAmJiBzZWxmLmNvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKSA+PSBhcnJvd3NfbWluem9vbSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3J3YXJkIGFycm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzQXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQoZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLhkLNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IGFycm93U2l6ZVVuaXQgKyBcIiBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVXaXRoVmlldzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAtTWF0aC5hdGFuMigoZW5kWzFdIC0gc3RhcnRbMV0pLCAoZW5kWzBdIC0gc3RhcnRbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja3dhcmQgYXJyb3dzIChpZiB3YW50ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVEYXRhLmxpbmVfYXJyb3dzX2JhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbC5nZW9tLlBvaW50KHN0YXJ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuGQs1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IGFycm93U2l6ZVVuaXQgKyBcIiBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlV2l0aFZpZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IC1NYXRoLmF0YW4yKChzdGFydFsxXSAtIGVuZFsxXSksIChzdGFydFswXSAtIGVuZFswXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzQXJyYXk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlRnVuY3Rpb247XG4gICAgfSAvLyBlbmQgb2YgXCJnZXRTdHlsZUZ1bmN0aW9uKClcIlxuXG5cbiAgICBnZXRTdHlsZUVkaXRvckNvbmZpZyhzdHlsZURhdGEpIHtcbiAgICAgICAgdmFyIGVkaXRvckNvbmZpZztcblxuICAgICAgICAvLyBjcmVhdGUgZWRpdG9yLWNvbmZpZ1xuICAgICAgICBlZGl0b3JDb25maWcgPSB7fTtcbiAgICAgICAgZWRpdG9yQ29uZmlnLmNvbGxlY3QgPSBzdHlsZURhdGEuZWRpdG9yX2NvbGxlY3QgfHwgdW5kZWZpbmVkO1xuICAgICAgICBlZGl0b3JDb25maWcuaWNvblNyYyA9IHN0eWxlRGF0YS5lZGl0b3JfaWNvbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGVkaXRvckNvbmZpZy52YXJzID0gc3R5bGVEYXRhLmVkaXRvcl92YXJzIHx8IHVuZGVmaW5lZDtcblxuICAgICAgICBlZGl0b3JDb25maWcuc29ydCA9IHN0eWxlRGF0YS5lZGl0b3Jfc29ydCB8fCBmYWxzZTtcbiAgICAgICAgaWYgKGVkaXRvckNvbmZpZy5zb3J0KSB7XG4gICAgICAgICAgICBlZGl0b3JDb25maWcuc29ydCA9IHBhcnNlSW50KGVkaXRvckNvbmZpZy5zb3J0LCAxMCkgfHwgZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWRpdG9yQ29uZmlnO1xuICAgIH0vLyBlbmQgb2YgXCJnZXRTdHlsZUVkaXRvckNvbmZpZygpXCJcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1sb2NhdGlvbnN0eWxlLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25maWcgPSB0aGlzLmM0Zy5tYXBzLmNvbmZpZyB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBvc21Tb3VyY2VEZWZpbml0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMuY29uZmlnLm9zbSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbmZpZy5vc20sIHtcblxuICAgIEN5Y2xlTWFwOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6ICdTdHlsZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5vcGVuY3ljbGVtYXAub3JnL1wiPk9wZW5DeWNsZU1hcDwvYT4nICsgJyAnICtcbiAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOSxcbiAgICAgIHVybDogJ2h0dHBzOi8ve2EtY30udGlsZS5vcGVuY3ljbGVtYXAub3JnL2N5Y2xlL3t6fS97eH0ve3l9LnBuZydcbiAgICB9LFxuXG4gICAgR2VybWFuOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6ICdTdHlsZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLmRlL2dlcm1hbnN0eWxlLmh0bWxcIj5vcGVuc3RyZWV0bWFwLmRlPC9hPicgKyAnICcgK1xuICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE5LFxuICAgICAgdXJsOiAnaHR0cHM6Ly97YS1jfS50aWxlLm9wZW5zdHJlZXRtYXAuZGUvdGlsZXMvb3NtZGUve3p9L3t4fS97eX0ucG5nJ1xuICAgIH0sXG5cbiAgICBHZXJtYW5UcmFuc3BvcnQ6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogJ1N0eWxlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm1lbW9tYXBzLmRlXCI+TWVtb21hcHM8L2E+JyArICcgJyArXG4gICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICB1cmw6ICdodHRwOi8vdGlsZS5tZW1vbWFwcy5kZS90aWxlZ2VuL3t6fS97eH0ve3l9LnBuZydcbiAgICB9LFxuXG4gICAgTGFuZHNjYXBlTWFwOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6ICdTdHlsZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5vcGVuY3ljbGVtYXAub3JnL1wiPk9wZW5DeWNsZU1hcDwvYT4nICsgJyAnICtcbiAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOSxcbiAgICAgIHVybDogJ2h0dHBzOi8ve2EtY30udGlsZS5vcGVuY3ljbGVtYXAub3JnL2xhbmRzY2FwZS97en0ve3h9L3t5fS5wbmcnXG4gICAgfSxcblxuICAgIE1hcG5pazoge1xuICAgICAgYXR0cmlidXRpb25zOiBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBUcmFuc3BvcnRNYXA6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogJ1N0eWxlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5jeWNsZW1hcC5vcmcvXCI+T3BlbkN5Y2xlTWFwPC9hPicgKyAnICcgK29sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICB1cmw6ICdodHRwOi8ve2EtY30udGlsZTIub3BlbmN5Y2xlbWFwLm9yZy90cmFuc3BvcnQve3p9L3t4fS97eX0ucG5nJ1xuICAgIH0sXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcIm9zbVNvdXJjZURlZmluaXRpb25zXCIgLS0tXG5cbiAgLyoqXG4gICAqIHN0YW1lblNvdXJjZURlZmluaXRpb25zXG4gICAqL1xuICBjNGcubWFwcy5jb25maWcuc3RhbWVuID0gJC5leHRlbmQoYzRnLm1hcHMuY29uZmlnLnN0YW1lbiwge1xuXG4gICAgVG9uZXI6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGxheWVyOiAndG9uZXInLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE4LFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBUb25lckxhYmVsczoge1xuICAgICAgYXR0cmlidXRpb25zOiBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbGF5ZXI6ICd0b25lci1sYWJlbHMnLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE4LFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBUb25lckxpbmVzOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBsYXllcjogJ3RvbmVyLWxpbmVzJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOCxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgVGVycmFpbjoge1xuICAgICAgYXR0cmlidXRpb25zOiBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbGF5ZXI6ICd0ZXJyYWluJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOCxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgV2F0ZXJjb2xvcjoge1xuICAgICAgYXR0cmlidXRpb25zOiBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbGF5ZXI6ICd3YXRlcmNvbG9yJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOCxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgTk9ORTogJydcbiAgfSk7XG5cbiAgLyoqXG4gICAqIG1hcHF1ZXN0U291cmNlRGVmaW5pdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbmZpZy5tYXBxdWVzdCA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbmZpZy5tYXBxdWVzdCwge1xuXG4gICAgTWFwUXVlc3RPcGVuOiB7XG4gICAgICBsYXllcjogJ29zbSdcbiAgICB9LFxuXG4gICAgTWFwUXVlc3RIeWI6IHtcbiAgICAgIGxheWVyOiAnaHliJ1xuICAgIH0sXG5cbiAgICBNYXBRdWVzdFNhdDoge1xuICAgICAgbGF5ZXI6ICdzYXQnXG4gICAgfSxcblxuICAgIE5PTkU6ICcnXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBtYXBib3hTb3VyY2VEZWZpbml0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMuY29uZmlnLm1hcGJveCA9IHtcblxuICAgIE1hcGJveDoge1xuICAgICAgdGlsZVNpemU6IFs1MTIsIDUxMl0sXG4gICAgICBhdHRyaWJ1dGlvbnM6ICfCqSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9hYm91dC9tYXBzL1wiPk1hcGJveDwvYT4nICsgJyAnICtcbiAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAyMixcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgTWFwYm94Q2xhc3NpYzoge1xuICAgICAgYXR0cmlidXRpb25zOiAnwqkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYWJvdXQvbWFwcy9cIj5NYXBib3g8L2E+JyArICcgJyArXG4gICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjIsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfVxuICB9O1xuXG4gICAgLyoqXG4gICAgICoga2xva2FuU291cmNlRGVmaW5pdGlvbnNcbiAgICAgKi9cbiAgICAvL1RvRG8gbm90IHJlYWR5XG4gICAgYzRnLm1hcHMuY29uZmlnLmtsb2thbiA9IHtcblxuICAgICAgICBPcGVuTWFwVGlsZXM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogbmV3IG9sLmZvcm1hdC5NVlQoKSxcbiAgICAgICAgICAgIHRpbGVHcmlkOiAgb2wudGlsZWdyaWQuY3JlYXRlWFlaKHt0aWxlU2l6ZTogNTEyLCBtYXhab29tOiAyMn0pLCAvL1RvRG8gbWF4Wm9vbSBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIHRpbGVQaXhlbFJhdGlvOiA4LFxuICAgICAgICAgICAgYXR0cmlidXRpb25zOiAnwqkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vb3Blbm1hcHRpbGVzLm9yZy9cIj5PcGVuTWFwVGlsZXM8L2E+JyArICcgJyArXG4gICAgICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgICAgICAgbWluWm9vbTogMCxcbiAgICAgICAgICAgIG1heFpvb206IDIyLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgVGlsZUhvc3Rpbmc6IHtcbiAgICAgICAgICAgIGZvcm1hdDogbmV3IG9sLmZvcm1hdC5NVlQoKSxcbiAgICAgICAgICAgIHRpbGVHcmlkOiAgb2wudGlsZWdyaWQuY3JlYXRlWFlaKHt0aWxlU2l6ZTogNTEyLCBtYXhab29tOiAyMn0pLCAvL1RvRG8gbWF4Wm9vbSBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIHRpbGVQaXhlbFJhdGlvOiA4LFxuICAgICAgICAgICAgYXR0cmlidXRpb25zOiAnwqkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vdGlsZWhvc3RpbmcuY29tL1wiPlRpbGVIb3N0aW5nPC9hPicgKyAnICcgK1xuICAgICAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgICAgICAgIG1pblpvb206IDAsXG4gICAgICAgICAgICBtYXhab29tOiAyMixcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBoZXJlU291cmNlRGVmaW5pdGlvbnNcbiAgICAgKi9cbiAgICBjNGcubWFwcy5jb25maWcuaGVyZSA9IHtcblxuICAgICAgICBIRVJFOiB7XG4gICAgICAgICAgICB0aWxlU2l6ZTogWzUxMiwgNTEyXSxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uczogJ01hcCBUaWxlcyDCqSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIuaGVyZS5jb21cIj5IRVJFPC9hPicrICcgJyArXG4gICAgICAgICAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgICAgICAgIG1pblpvb206IDAsXG4gICAgICAgICAgICBtYXhab29tOiAyMixcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRodW5kZXJmb3Jlc3RTb3VyY2VEZWZpbml0aW9uc1xuICAgICAqL1xuICAgIGM0Zy5tYXBzLmNvbmZpZy50aHVuZGVyZm9yZXN0ID0ge1xuXG4gICAgICAgIFRodW5kZXJmb3Jlc3Q6IHtcbiAgICAgICAgICAgIHRpbGVTaXplOiBbNTEyLCA1MTJdLFxuICAgICAgICAgICAgYXR0cmlidXRpb25zOiAnTWFwIFRpbGVzIMKpIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy50aHVuZGVyZm9yZXN0LmNvbS9cIj5UaHVuZGVyZm9yZXN0PC9hPicgKyAnICcgK1xuICAgICAgICAgICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICAgICAgICBtaW5ab29tOiAwLFxuICAgICAgICAgICAgbWF4Wm9vbTogMTksXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICAgIH1cblxuICAgIH07XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGNvbmZpZyA9IHRoaXMuYzRnLm1hcHMuY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uZmlnLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY3VycmVudCB6b29tbGV2ZWwgb24gdGhlIG1hcC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICB1cGRhdGVab29tbGV2ZWw7XG5cbiAgICBzZWxmID0gdGhpcztcblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5tYXBWaWV3KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1pvb21sZXZlbCBjb250cm9sIG5lZWRzIHRvIGtub3cgdGhlIG1hcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuWk9PTV9MRVZFTCxcbiAgICAgIHVuZGVmaW5lZEhUTUw6ICcnXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMubWFwVmlldy5nZXRab29tKCk7XG5cbiAgICB1cGRhdGVab29tbGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhcnNlSW50KG9wdGlvbnMubWFwVmlldy5nZXRab29tKCkpO1xuICAgIH07XG5cbiAgICBvcHRpb25zLm1hcFZpZXcub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgdXBkYXRlWm9vbWxldmVsKTtcbiAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBvcHRpb25zLnRhcmdldFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUsIHtcblxuICAgIC8vIG5vdGhpbmcgdG8gYWRkIGhlcmVcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgWm9vbWxldmVsID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlpvb21sZXZlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5taXNjID0gdGhpcy5jNGcubWFwcy5taXNjIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbU3Bpbm5lciBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgQ29udHJvbCBvcHRpb25zLlxuICAgKi9cbiAgYzRnLm1hcHMubWlzYy5TcGlubmVyID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBzcGlubmVyU3BhbjtcblxuICAgIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgdGFyZ2V0OiAnLicgKyBjc3NDb25zdGFudHMuT0xfVklFV1BPUlRcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgb3B0aW9ucy5jbGFzc05hbWUgPSAnICcgKyBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlNQSU5ORVIgKyBvcHRpb25zLmNsYXNzTmFtZSArICcgJyArIGNzc0NvbnN0YW50cy5ISURFO1xuICAgICQob3B0aW9ucy50YXJnZXQpLmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgc3Bpbm5lclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bpbm5lclNwYW4uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLklDT04gKyAnICcgKyBjc3NDb25zdGFudHMuQU5JTUFUSU9OX1NQSU47XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHNwaW5uZXJTcGFuKTtcblxuICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyID0gMDtcblxuICB9O1xuXG4gIC8vIEFkZCBtZXRob2RzIHRvIHNwaW5uZXJcbiAgYzRnLm1hcHMubWlzYy5TcGlubmVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLm1pc2MuU3Bpbm5lci5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICogW3Nob3cgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSElERSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciArPSAxO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtoaWRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5ISURFKSkge1xuICAgICAgICAvL2NvbnNvbGUud2FybignU3Bpbm5lciBpcyBhbHJlYWR5IGhpZGRlbi4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciA9PT0gMCkge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSElERSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSxcblxuICB9KTsgLy8gRW5kIG9mIFwiYWRkIG1ldGhvZHMgdG8gc3Bpbm5lclwiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFNwaW5uZXIgPSB0aGlzLmM0Zy5tYXBzLm1pc2MuU3Bpbm5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lci5qcyIsIi8vICduYW1lc3BhY2UnXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmhvb2sgPSB0aGlzLmM0Zy5tYXBzLmhvb2sgfHwge307XG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtDNGdCYXNlbGF5ZXJDb250cm9sbGVyfSBmcm9tIFwiLi9jNGctYmFzZWxheWVyLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7QzRnTGF5ZXJDb250cm9sbGVyfSBmcm9tIFwiLi9jNGctbGF5ZXItY29udHJvbGxlclwiO1xuaW1wb3J0IHtDNGdMb2NhdGlvblN0eWxlQ29udHJvbGxlcn0gZnJvbSBcIi4vYzRnLWxvY2F0aW9uc3R5bGUtY29udHJvbGxlclwiO1xuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi9jNGctbWFwcy1taXNjLXNwaW5uZXJcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuXG52YXIgYzRnID0gdGhpcy5jNGc7XG5leHBvcnQgY2xhc3MgTWFwUHJveHkge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICB2YXIgbWFwRGF0YTtcblxuICAgIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe1xuICAgICAgbWFwQ29udHJvbGxlcjogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYzRnLm1hcHMuZWRpdG9yU3R5bGVzID0gYzRnLm1hcHMuZWRpdG9yU3R5bGVzIHx8IHt9O1xuXG4gICAgLy9jNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCA9IFtdO1xuXG4gICAgdGhpcy5ob29rX2Jhc2VsYXllcl9sb2FkZWQgPSBbXTtcbiAgICB0aGlzLmhvb2tfYmFzZWxheWVyX3Zpc2liaWxpdHkgPSBbXTtcbiAgICB0aGlzLmhvb2tfbGF5ZXJfbG9hZGVkID0gW107XG4gICAgdGhpcy5ob29rX2xheWVyX3Zpc2liaWxpdHkgPSBbXTtcbiAgICB0aGlzLmhvb2tfbWFwX2NsaWNrID0gW107XG4gICAgdGhpcy5ob29rX21hcF96b29tID0gW107XG5cbiAgICAvLyBhZGQgZ2xvYmFsIGhvb2sgZm9yIGFjY2Vzc2liaWxpdHkgd2hlbiB0aGVyZSBpcyBubyBwcm94eSByZWZlcmVuY2VcbiAgICBjNGcubWFwcy5ob29rLnByb3h5X2xheWVyX2xvYWRlZCA9IGM0Zy5tYXBzLmhvb2sucHJveHlfbGF5ZXJfbG9hZGVkIHx8IFtdO1xuXG4gICAgdGhpcy5iYXNlbGF5ZXJJZHMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZUJhc2VsYXllcklkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGF5ZXJJZHMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZUxheWVySWRzID0ge307XG5cbiAgICB0aGlzLnJlcXVlc3RGdW5jdGlvbnMgPSB7fTtcbiAgICB0aGlzLnJlcXVlc3QgPSB7fTtcblxuICAgIHRoaXMuYmFzZWxheWVyc19sb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheWVyc19sb2FkZWQgPSBmYWxzZTtcblxuICAgIG1hcERhdGEgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuXG4gICAgdGhpcy5tYXBJZCA9IG1hcERhdGEuaWQ7XG5cbiAgICB0aGlzLmFwaV9iYXNlbGF5ZXJfdXJsID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuYmFzZWxheWVyICsgJy8nICsgbWFwRGF0YS5wcm9maWxlO1xuICAgIHRoaXMuYXBpX2xheWVyX3VybCA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmxheWVyICsgJy8nICsgdGhpcy5tYXBJZDtcbiAgICB0aGlzLmFwaV9sYXllcmNvbnRlbnRfdXJsID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkubGF5ZXJjb250ZW50O1xuICAgIC8vdGhpcy5hcGlfbGF5ZXJjb250ZW50ZGF0YV91cmwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5sYXllcmNvbnRlbnRkYXRhO1xuICAgIHRoaXMuYXBpX2xheWVyY29udGVudGRhdGFfdXJsID0gXCJjb240Z2lzL2xheWVyQ29udGVudERhdGFTZXJ2aWNlXCI7XG4gICAgdGhpcy5hcGlfbG9jc3R5bGVfdXJsID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkubG9jc3R5bGU7XG4gICAgdGhpcy5hcGlfaW5mb3dpbmRvd191cmwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5pbmZvd2luZG93O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cblxuXG4gICAgLy8gdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBzZWxmLFxuICAgICAgbWFwO1xuXG4gICAgc2VsZiA9IHRoaXM7XG4gICAgbWFwID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwO1xuXG4gICAgdGhpcy5iYXNlbGF5ZXJDb250cm9sbGVyID0gbmV3IEM0Z0Jhc2VsYXllckNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5iYXNlbGF5ZXJDb250cm9sbGVyLmxvYWRCYXNlTGF5ZXJzKCk7XG4gICAgdGhpcy5sYXllckNvbnRyb2xsZXIgPSBuZXcgQzRnTGF5ZXJDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMubGF5ZXJDb250cm9sbGVyLmxvYWRMYXllcnMoKTtcbiAgICB0aGlzLmxvY2F0aW9uU3R5bGVDb250cm9sbGVyID0gbmV3IEM0Z0xvY2F0aW9uU3R5bGVDb250cm9sbGVyKHRoaXMpO1xuICAgIHRoaXMuYWRkUG9wVXAoKTtcblxuICAgIC8vVE9ETyBjaGVjayB0aGlzLCBuZWFybHkgdGhlIHNhbWUgYXMgYmVsb3dcbiAgICBtYXAub24oJ2NoYW5nZTp2aWV3JywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gem9vbS1vYnNlcnZlclxuICAgICAgLy9cbiAgICAgIG1hcC5nZXRWaWV3KCkub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGF5ZXJJZCxcbiAgICAgICAgICBsYXllcjtcblxuICAgICAgICAvLyBjaGVjayBsYXllciB6b29tLWJvdW5kc1xuICAgICAgICAvLyBAVE9ETzogVXNlIFwic2VsZi5hY3RpdmVMYXllcklkcyA9IGZhbHNlXCIgP1xuICAgICAgICBmb3IgKGxheWVySWQgaW4gc2VsZi5hY3RpdmVMYXllcklkcykge1xuICAgICAgICAgIGlmIChzZWxmLmFjdGl2ZUxheWVySWRzLmhhc093blByb3BlcnR5KGxheWVySWQpKSB7XG4gICAgICAgICAgICBsYXllciA9IHNlbGYubGF5ZXJDb250cm9sbGVyLmFyckxheWVyc1tsYXllcklkXTtcbiAgICAgICAgICAgIGlmIChzZWxmLmNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20obGF5ZXJJZCkpIHtcbiAgICAgICAgICAgICAgaWYgKGxheWVyLmlzSW5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxheWVyQ29udHJvbGxlci5zaG93TGF5ZXIobGF5ZXJJZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYubGF5ZXJDb250cm9sbGVyLmhpZGVMYXllcihsYXllcklkLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBob29rc1xuICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhzZWxmLmhvb2tfbWFwX3pvb20pO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgbWFwLmdldFZpZXcoKS5nZXRab29tKCkpIHtcbiAgICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3pvb20nLCBtYXAuZ2V0VmlldygpLmdldFpvb20oKSk7XG4gICAgICAgIH1cblxuXG4gICAgICB9KTsgLy8gZW5kIG9mIFwiem9vbS1vYnNlcnZlclwiXG4gICAgfSk7IC8vIGVuZCBvZiBcInpvb20tb2JzZXJ2ZXJcIlxuXG4gICAgLy8gem9vbS1vYnNlcnZlclxuICAgIC8vXG4gICAgbWFwLmdldFZpZXcoKS5vbignY2hhbmdlOnJlc29sdXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGF5ZXJJZCxcbiAgICAgICAgbGF5ZXI7XG5cblxuICAgICAgLy8gY2hlY2sgbGF5ZXIgem9vbS1ib3VuZHNcbiAgICAgIC8vIEBUT0RPOiBVc2UgXCJzZWxmLmFjdGl2ZUxheWVySWRzID0gZmFsc2VcIiA/XG4gICAgICBmb3IgKGxheWVySWQgaW4gc2VsZi5hY3RpdmVMYXllcklkcykge1xuICAgICAgICBpZiAoc2VsZi5hY3RpdmVMYXllcklkcy5oYXNPd25Qcm9wZXJ0eShsYXllcklkKSkge1xuICAgICAgICAgIGxheWVyID0gc2VsZi5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzW2xheWVySWRdO1xuICAgICAgICAgIGlmIChzZWxmLmNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20obGF5ZXJJZCkpIHtcbiAgICAgICAgICAgIGlmIChsYXllci5pc0luYWN0aXZlKSB7XG4gICAgICAgICAgICAgIHNlbGYubGF5ZXJDb250cm9sbGVyLnNob3dMYXllcihsYXllcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5sYXllckNvbnRyb2xsZXIuaGlkZUxheWVyKGxheWVySWQsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBob29rc1xuICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5ob29rX21hcF96b29tLHNlbGYpO1xuXG4gICAgICBpZiAoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmIG1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpKSB7XG4gICAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgnem9vbScsIG1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpKTtcbiAgICAgIH1cblxuICAgIH0pOyAvLyBlbmQgb2YgXCJ6b29tLW9ic2VydmVyXCJcblxuICAgIG1hcC5nZXRWaWV3KCkub24oJ2NoYW5nZTpjZW50ZXInLCBmdW5jdGlvbihldnQpe1xuICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICAgICAgICB2YXIgY29vcmRpbmF0ZSA9IG9sLnByb2oudG9Mb25MYXQobWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKSk7XG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2xvbicsIGNvb3JkaW5hdGVbMF0pO1xuICAgICAgICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2xhdCcsIGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGM0Zy5tYXBzLmhvb2subWFwX2NlbnRlcl9jaGFuZ2VkID0gYzRnLm1hcHMuaG9vay5tYXBfY2VudGVyX2NoYW5nZWQgfHwgW107XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2subWFwX2NlbnRlcl9jaGFuZ2VkLCBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpKTtcbiAgICB9KTsgLy8gZW5kIG9mIFwiY2VudGVyLW9ic2VydmVyXCJcblxuICAgIC8vIGNsaWNrLW9ic2VydmVyXG4gICAgLy9cbiAgICBtYXAub24oJ2NsaWNrJywgZnVuY3Rpb24gKGNsaWNrRXZlbnQpIHtcblxuICAgICAgdmFyIGZlYXR1cmUsXG4gICAgICAgIGZGZWF0dXJlcyxcbiAgICAgICAgbGF5ZXIsXG4gICAgICAgIHBvcHVwSW5mb3MsXG4gICAgICAgIGN1cnJlbnRab29tLFxuICAgICAgICBtaW5ab29tLFxuICAgICAgICBuZXdDZW50ZXIsXG4gICAgICAgIGdlb21ldHJ5LFxuICAgICAgICBjb29yZCxcbiAgICAgICAgc2V0UG9wdXAsXG4gICAgICAgIHN0eWxlRnVuYyxcbiAgICAgICAgc3R5bGVDbHVzdGVyLFxuICAgICAgICBvYmpQb3B1cDtcblxuICAgICAgLy9Ub0RvIGNoZWNrIG5ldyBmdW5jdGlvbiBjYWxsIHdpdGggb2wgNC4zXG4gICAgICBmZWF0dXJlID0gbWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChjbGlja0V2ZW50LnBpeGVsLFxuICAgICAgICBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxheWVyID0gbWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChjbGlja0V2ZW50LnBpeGVsLFxuICAgICAgICBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgICAgIH0pO1xuXG4gICAgICBpZihsYXllciAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgIHN0eWxlRnVuYyA9IGxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgIGlmKHR5cGVvZiBzdHlsZUZ1bmMgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsZUZ1bmMoZmVhdHVyZSwgY3VycmVudFpvb20pICYmIHN0eWxlRnVuYyhmZWF0dXJlLCBjdXJyZW50Wm9vbSlbJzAnXSl7XG4gICAgICAgICAgc3R5bGVDbHVzdGVyID0gc3R5bGVGdW5jKGZlYXR1cmUsIGN1cnJlbnRab29tKVsnMCddLmNsb25lKCk7XG4gICAgICAgICAgaWYgKHN0eWxlQ2x1c3RlciAmJiBzdHlsZUNsdXN0ZXIuZ2V0SW1hZ2UoKSkge1xuICAgICAgICAgICAgICBzdHlsZUNsdXN0ZXIuZ2V0SW1hZ2UoKS5zZXRTY2FsZShzdHlsZUNsdXN0ZXIuZ2V0SW1hZ2UoKS5nZXRTY2FsZSgpKjAuNyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZGZWF0dXJlcyA9IGZlYXR1cmUgPyBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSA6IGZhbHNlO1xuICAgICAgaWYgKCEoZkZlYXR1cmVzICYmIGZGZWF0dXJlcy5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgIC8vIGNsdXN0ZXIgbXVsdGlwbGUgUE9JXG4gICAgICAgIGlmIChmRmVhdHVyZXMpIHtcbiAgICAgICAgICBpZihmRmVhdHVyZXNbMF0uZ2V0KCdjbHVzdGVyX3BvcHVwJykgPT0gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldENlbnRlcihjbGlja0V2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgY3VycmVudFpvb20gPSBtYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgICAgIG1pblpvb20gPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmNsdXN0ZXJfYWxsID8gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5jbHVzdGVyX3pvb20gOiBmRmVhdHVyZXNbJzAnXS5nZXQoJ2NsdXN0ZXJfem9vbScpO1xuICAgICAgICAgICAgaWYoY3VycmVudFpvb20gPj0gbWluWm9vbSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2V0UG9wdXAgPVtdO1xuICAgICAgICAgICAgICBzZXRQb3B1cC5jb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgIHNldFBvcHVwLmFzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmRmVhdHVyZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHNldFBvcHVwLmNvbnRlbnQgPSBzZXRQb3B1cC5jb250ZW50LmNvbmNhdChmRmVhdHVyZXNbaV0uZ2V0KCdwb3B1cCcpLmNvbnRlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZlYXR1cmUgPSBmRmVhdHVyZXNbMF0uY2xvbmUoKTtcbiAgICAgICAgICAgICAgZmVhdHVyZS5zZXQoJ3BvcHVwJyxzZXRQb3B1cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbShjdXJyZW50Wm9vbSsxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcblxuXG4gICAgICAgICAgICBmZWF0dXJlLnNldFN0eWxlKG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBmZWF0dXJlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIGFuaW1hdGlvblxuICAgICAgICAgICAgbWFwLmdldFZpZXcoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbjogbWFwLmdldFZpZXcoKS5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50Wm9vbSA9IG1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgICAgICAgbmV3Q2VudGVyID0gbWFwLmdldENvb3JkaW5hdGVGcm9tUGl4ZWwoY2xpY2tFdmVudC5waXhlbCk7XG4gICAgICAgICAgICBtaW5ab29tID0gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5jbHVzdGVyX2FsbCA/IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuY2x1c3Rlcl96b29tIDogZkZlYXR1cmVzWycwJ10uZ2V0KCdjbHVzdGVyX3pvb20nKTtcblxuICAgICAgICAgICAgLy9Ub0RvIHJlbW92ZSB3aXRoIHN0cnVjdHVyZSBlbGVtZW50IHBhcmFtXG4gICAgICAgICAgICBpZiAoY3VycmVudFpvb20gPj0gbWluWm9vbSkge1xuXG4gICAgICAgICAgICAgIC8vaWYgKGN1cnJlbnRab29tID49IG1hcC5nZXRWaWV3KCkuZ2V0TWF4Wm9vbSgpKSB7XG4gICAgICAgICAgICAgIC8vb3BlbiB0aGUgY2x1c3RlciBhZnRlciB6b29taW5nXG4gICAgICAgICAgICAgIHZhciBwaXggPSBtYXAuZ2V0VmlldygpLmdldFJlc29sdXRpb24oKTtcbiAgICAgICAgICAgICAgdmFyIG1heCA9IGZGZWF0dXJlcy5sZW5ndGg7XG4gICAgICAgICAgICAgIHZhciByID0gcGl4ICogMTIgKiAoMC41ICsgbWF4IC8gNCk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IDIgKiBNYXRoLlBJICogaSAvIG1heDtcbiAgICAgICAgICAgICAgICBpZiAobWF4ID09IDIgfHwgbWF4ID09IDQpIGEgKz0gTWF0aC5QSSAvIDQ7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBbbmV3Q2VudGVyWzBdICsgciAqIE1hdGguc2luKGEpLCBuZXdDZW50ZXJbMV0gKyByICogTWF0aC5jb3MoYSldO1xuICAgICAgICAgICAgICAgIHZhciBjb29yZGluYXRlID0gb2wucHJvai50b0xvbkxhdChwKTtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IFtdO1xuICAgICAgICAgICAgICAgIGYucHVzaChmRmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBjZiA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChwKSxcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IGZGZWF0dXJlc1tpXS5nZXQoJ3N0eWxlJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsYXllci5nZXRTb3VyY2UoKS5hZGRGZWF0dXJlKGNmKTtcbiAgICAgICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDZW50ZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50Wm9vbSArPSAxO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0NlbnRlcik7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldFpvb20oY3VycmVudFpvb20pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoZkZlYXR1cmVzICYmIGZGZWF0dXJlcy5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgIGZlYXR1cmUgPSBmRmVhdHVyZXNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5jb250cm9scy5lZGl0b3IgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuY29udHJvbHMuZWRpdG9yLmlzT3BlbigpKSB7XG4gICAgICAgIC8vIGRvIG5vdCBzaG93IHBvcHVwIHdoZW4gZWRpdG9yIGlzIG9wZW5cbiAgICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ3Byb2plY3RJZCcpKSB7XG4gICAgICAgICAgICAvLyBidXQgY2FsbCBjbGljayBob29rc1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHNlbGYuaG9va19tYXBfY2xpY2ssIGNsaWNrRXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwb3B1cEluZm9zID0ge307XG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgncG9wdXAnKSkge1xuICAgICAgICAvLyBzaW5nbGUgUE9JXG4gICAgICAgIHBvcHVwSW5mb3MgPSBmZWF0dXJlLmdldCgncG9wdXAnKTtcbiAgICAgIH0gZWxzZSBpZiAobGF5ZXIgJiYgbGF5ZXIucG9wdXApIHtcbiAgICAgICAgcG9wdXBJbmZvcyA9IGxheWVyLnBvcHVwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmVhdHVyZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ2xvY19saW5rdXJsJykpIHtcbiAgICAgICAgaWYoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5saW5rX25ld3dpbmRvdz09PScxJykge1xuICAgICAgICAgIHdpbmRvdy5vcGVuKGZlYXR1cmUuZ2V0KCdsb2NfbGlua3VybCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHdpbmRvdy5vcGVuKGZlYXR1cmUuZ2V0KCdsb2NfbGlua3VybCcpLFwiX3NlbGZcIik7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ3pvb21fb25jbGljaycpICYmIGZlYXR1cmUuZ2V0KCd6b29tX29uY2xpY2snKSAhPSAwKXtcbiAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldFpvb20oZmVhdHVyZS5nZXQoJ3pvb21fb25jbGljaycpKTtcbiAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldENlbnRlcihmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihsYXllciAmJiBsYXllci56b29tX29uY2xpY2sgJiYgbGF5ZXIuem9vbV9vbmNsaWNrICE9IDApe1xuICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbShsYXllci56b29tX29uY2xpY2spO1xuICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKGNsaWNrRXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgIGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9pbnQpIHtcbiAgICAgICAgICAgIGNvb3JkID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmQgPSBjbGlja0V2ZW50LmNvb3JkaW5hdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYzRnLm1hcHMucG9wdXAucG9wdXAuc2V0UG9zaXRpb24oY29vcmQpO1xuICAgICAgICAgIGlmIChwb3B1cEluZm9zLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGM0Zy5tYXBzLnBvcHVwLiRjb250ZW50Lmh0bWwoJycpO1xuICAgICAgICAgICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5MT0FESU5HKTtcbiAgICAgICAgICAgIGM0Zy5tYXBzLnBvcHVwLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAocG9wdXBJbmZvcy5hc3luYyA9PT0gZmFsc2UgfHwgcG9wdXBJbmZvcy5hc3luYyA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm9zO1xuICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAsIG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWxmLnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBzZWxmLmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwSW5mb3MuY29udGVudFxuICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgYXN5bmM6IHBvcHVwSW5mb3MuYXN5bmMsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgICAgICAgIHJvdXRpbmdfbGluazogcG9wdXBJbmZvcy5yb3V0aW5nX2xpbmtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mbztcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5sYXllciA9IGxheWVyO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAoYzRnLm1hcHMuaG9vayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRQb3B1cChvYmpQb3B1cCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaG9va3NcbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMoYzRnLm1hcHMuaG9vay5ob29rX21hcF9jbGljaywgY2xpY2tFdmVudCk7XG4gICAgICB9XG4gICAgfSk7IC8vIGVuZCBvZiBcImNsaWNrLW9ic2VydmVyXCJcblxuXG4gICAgLy8gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLm9uKCdjaGFuZ2U6bGVuZ3RoJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyAgICAgO1xuICAgIC8vIH0pO1xuXG5cbiAgfSAvLyBlbmQgb2YgXCJpbml0aWFsXCIqXG4gIGNvbWJpbmUocHJveHkpe1xuICAgIHZhciBmdW5jID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHByb3h5LmNvbWJpbmVMYXllcnMocHJveHkpO1xuICAgICAgcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC51bigncG9zdHJlbmRlcicsZnVuYyk7XG4gICAgfTtcbiAgICBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLm9uKCdwb3N0cmVuZGVyJywgZnVuYylcbiAgfVxuXG4gIHNldFBvcHVwKHBvcHVwQ29uZmlnKSB7XG4gICAgdmFyIGZlYXR1cmUsXG4gICAgICBsYXllcixcbiAgICAgIHBvcHVwQ29udGVudCxcbiAgICAgIHJvdXRlcixcbiAgICAgIHJvdXRlQnV0dG9uV3JhcHBlcixcbiAgICAgIHJvdXRlRnJvbUJ1dHRvbixcbiAgICAgIHJvdXRlRnJvbUJ1dHRvblNwYW4sXG4gICAgICByb3V0ZVRvQnV0dG9uLFxuICAgICAgcm91dGVUb0J1dHRvblNwYW4sXG4gICAgICByb3V0aW5nSGFuZGxlcixcbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgZmVhdHVyZSA9IHBvcHVwQ29uZmlnLmZlYXR1cmU7XG4gICAgbGF5ZXIgPSBwb3B1cENvbmZpZy5sYXllcjtcblxuICAgIHBvcHVwQ29udGVudCA9IHV0aWxzLnJlcGxhY2VBbGxQbGFjZWhvbGRlcnMocG9wdXBDb25maWcucG9wdXAuY29udGVudCwgZmVhdHVyZSwgbGF5ZXIpO1xuICAgIC8vIEBUT0RPOiBjaGVjayBmb3Igcm91dGUtb3B0aW9uICYgZGlzcGxheSBcInJvdXRlLXRvXCJcbiAgICAvLyBOT1RFOiBkb2VzIG5vdCB3b3JrIGFzeW5jIHRoaXMgd2F5XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnJvdXRlciAmJiBwb3B1cENvbmZpZy5wb3B1cC5yb3V0aW5nX2xpbmspIHtcbiAgICAgIHJvdXRlciA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnJvdXRlcjtcblxuICAgICAgcm91dGluZ0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVBvcnRzaWRlICE9PSByb3V0ZXIpIHtcbiAgICAgICAgICByb3V0ZXIub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm91dGVyLnNldElucHV0KFxuICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST00pLFxuICAgICAgICAgIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpXG4gICAgICAgICk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJyb3V0aW5nSGFuZGxlcigpXCJcblxuICAgICAgcm91dGVCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3V0ZUJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX1dSQVBQRVI7XG5cbiAgICAgIHJvdXRlRnJvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcm91dGVGcm9tQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST007XG4gICAgICBqUXVlcnkocm91dGVGcm9tQnV0dG9uKS5jbGljayhyb3V0aW5nSGFuZGxlcik7XG4gICAgICByb3V0ZUJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVGcm9tQnV0dG9uKTtcblxuICAgICAgcm91dGVGcm9tQnV0dG9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHJvdXRlRnJvbUJ1dHRvblNwYW4uaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5QT1BVUF9ST1VURV9GUk9NO1xuICAgICAgcm91dGVGcm9tQnV0dG9uLmFwcGVuZENoaWxkKHJvdXRlRnJvbUJ1dHRvblNwYW4pO1xuXG4gICAgICByb3V0ZVRvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByb3V0ZVRvQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX1RPO1xuICAgICAgalF1ZXJ5KHJvdXRlVG9CdXR0b24pLmNsaWNrKHJvdXRpbmdIYW5kbGVyKTtcbiAgICAgIHJvdXRlQnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZVRvQnV0dG9uKTtcblxuICAgICAgcm91dGVUb0J1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICByb3V0ZVRvQnV0dG9uU3Bhbi5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlBPUFVQX1JPVVRFX1RPO1xuICAgICAgcm91dGVUb0J1dHRvbi5hcHBlbmRDaGlsZChyb3V0ZVRvQnV0dG9uU3Bhbik7XG4gICAgfVxuXG4gICAgaWYgKHBvcHVwQ29udGVudC50cmltKCkgfHwgcm91dGVyKSB7XG4gICAgICBjNGcubWFwcy5wb3B1cC4kY29udGVudC5odG1sKHBvcHVwQ29udGVudCk7XG4gICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgIGM0Zy5tYXBzLnBvcHVwLiRjb250ZW50LmFwcGVuZChyb3V0ZUJ1dHRvbldyYXBwZXIpO1xuICAgICAgfVxuICAgICAgaWYoZmVhdHVyZS5nZXRHZW9tZXRyeSgpICYmIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSBpbnN0YW5jZW9mIG9sLmdlb20uUG9pbnQpe1xuICAgICAgICBjNGcubWFwcy5wb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhpZGUgcG9wdXAgaWYgdGhlcmUgaXMgbm8gdmFsaWQgY29udGVudCBsZWZ0XG4gICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgfVxuXG4gICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5MT0FESU5HKTtcbiAgICBjNGcubWFwcy5wb3B1cC5zcGlubmVyLmhpZGUoKTtcbiAgfSAvLyBlbmQgb2YgXCJzZXRQb3B1cCgpXCJcblxuXG4gIGFkZFBvcFVwKCkge1xuXG4gICAgbGV0IHBvcFVwRWxlbWVudCxcbiAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LFxuICAgICAgcG9wVXBDb250ZW50LFxuICAgICAgcG9wdXA7XG5cblxuICAgIHBvcFVwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcFVwRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2M0Z19wb3B1cF8nICsgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5tYXBJZCk7XG4gICAgcG9wVXBFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtd3JhcHBlcic7XG5cbiAgICBwb3BVcENsb3NlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBvcHVwLWNsb3NlIGM0Zy1pY29uXCI7XG5cbiAgICBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BVcENvbnRlbnQuY2xhc3NOYW1lID0gXCJjNGctcG9wdXAtY29udGVudFwiO1xuXG4gICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ2xvc2VFbGVtZW50KTtcbiAgICBwb3BVcEVsZW1lbnQuYXBwZW5kQ2hpbGQocG9wVXBDb250ZW50KTtcblxuICAgIGpRdWVyeShwb3BVcENsb3NlRWxlbWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgIH0pO1xuXG4gICAgcG9wdXAgPSBuZXcgb2wuT3ZlcmxheSh7XG4gICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICBwb3NpdGlvbmluZzogJ2JvdHRvbS1sZWZ0JyxcbiAgICAgIG9mZnNldDogWy01MCwgMF0vKixcbiAgICAgICAgYXV0b1BhbjogdHJ1ZSxcbiAgICAgICAgYXV0b1BhbkFuaW1hdGlvbjoge1xuICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b1Bhbk1hcmdpbjogMjAqL1xuICAgIH0pO1xuXG4gICAgYzRnLm1hcHMucG9wdXAgPSB7fTtcbiAgICBjNGcubWFwcy5wb3B1cC5wb3B1cCA9IHBvcHVwO1xuICAgIC8vIGF0dGFjaCBhIHNwaW5uZXIgdG8gdGhlIHBvcHVwXG4gICAgYzRnLm1hcHMucG9wdXAuc3Bpbm5lciA9IG5ldyBTcGlubmVyKHt0YXJnZXQ6IHBvcFVwRWxlbWVudH0pO1xuXG4gICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkocG9wdXApO1xuXG4gICAgYzRnLm1hcHMucG9wdXAuJHBvcHVwID0galF1ZXJ5KGM0Zy5tYXBzLnBvcHVwLnBvcHVwLmdldEVsZW1lbnQoKSk7XG4gICAgYzRnLm1hcHMucG9wdXAuJGNvbnRlbnQgPSBqUXVlcnkoJy5jNGctcG9wdXAtY29udGVudCcsIGM0Zy5tYXBzLnBvcHVwLiRwb3B1cCk7XG5cbiAgfSAvLyBlbmQgb2YgXCJhZGRQb3BVcCgpXCJcblxuXG4gIC8qKlxuICAgKiBAVE9ETzogW2NoZWNrTG9jYXRpb25TdHlsZXMgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBwYXJhbSAgIHtbdHlwZV19ICBvcHRfb3B0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGNoZWNrTG9jYXRpb25TdHlsZXMob3B0X29wdGlvbnMpIHtcblxuICAgIHZhciBvcHRpb25zLFxuICAgICAgbmVlZGVkTGF5ZXJTdHlsZXMsXG4gICAgICBnZXRMYXllclN0eWxlcyxcbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKG9wdF9vcHRpb25zICYmIHR5cGVvZiBvcHRfb3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXM9IHRoaXMubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzIHx8IHt9O1xuXG4gICAgbmVlZGVkTGF5ZXJTdHlsZXMgPSBbXTtcbiAgICBnZXRMYXllclN0eWxlcyA9IGZ1bmN0aW9uIChsYXllcnMpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBpbmRleDtcblxuICAgICAgLy8gVG9EbzogUmVrdXJzaW9uIGludGVncmllcmVuICh0ZXN0IG1pdCBmb3J1bSlcbiAgICAgIGZvciAoaW5kZXggaW4gbGF5ZXJzKSB7XG4gICAgICAgIGlmIChsYXllcnMuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGxheWVyc1tpbmRleF07XG5cbiAgICAgICAgICBpZiAoZWxlbWVudC5jb250ZW50KSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudC5jb250ZW50Lmxlbmd0aDsgaSArPSAxKSB7XG5cbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29udGVudFtpXSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29udGVudFtpXS5sb2NhdGlvblN0eWxlXG4gICAgICAgICAgICAgICAgICAmJiBlbGVtZW50LmNvbnRlbnRbaV0ubG9jYXRpb25TdHlsZSAhPT0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICYmIG5lZWRlZExheWVyU3R5bGVzLmluZGV4T2YoZWxlbWVudC5jb250ZW50W2ldLmxvY2F0aW9uU3R5bGUpID09PSAtMVxuICAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAhc2VsZi5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbZWxlbWVudC5jb250ZW50W2ldLmxvY2F0aW9uU3R5bGVdXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGYubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2VsZW1lbnQuY29udGVudFtpXS5sb2NhdGlvblN0eWxlXS5zdHlsZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBuZWVkZWRMYXllclN0eWxlcy5wdXNoKGVsZW1lbnQuY29udGVudFtpXS5sb2NhdGlvblN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0TGF5ZXJTdHlsZXModGhpcy5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzKTtcblxuICAgIGlmIChuZWVkZWRMYXllclN0eWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhuZWVkZWRMYXllclN0eWxlcywgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmRvbmUgJiYgdHlwZW9mIG9wdGlvbnMuZG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG9wdGlvbnMuZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJjaGVja0xvY2F0aW9uU3R5bGVzKClcIlxuXG4gIGNvbWJpbmVMYXllcnMocHJveHkpe1xuXG4gICAgdmFyIGksXG4gICAgICBqLFxuICAgICAgayxcbiAgICAgIGxheWVySWQsXG4gICAgICBsYXllcnMsXG4gICAgICBjb250ZW50RGF0YUxheWVyLFxuICAgICAgY29udGVudERhdGEsXG4gICAgICBsYXllcixcbiAgICAgIGxheWVyR3JvdXBzID1bXSxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHN0eWxlLFxuICAgICAgZmVhdHVyZXM9W10sXG4gICAgICBzdHlsZXM9W10sXG4gICAgICBvbmVGZWF0dXJlLFxuICAgICAgZmVhdHVyZSxcbiAgICAgIHZlY3RvclNvdXJjZSxcbiAgICAgIGNsdXN0ZXJTb3VyY2UsXG4gICAgICB2ZWN0b3JMYXllcjtcblxuXG4gICAgaWYocHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuY2x1c3Rlcl9hbGwgPT09ICcxJyl7XG4gICAgICBjb250ZW50RGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgZm9yKCBpIGluIHByb3h5LmFjdGl2ZUxheWVySWRzKSB7Ly9sb29wIHRvIGdldCBhbGwgbGF5ZXJzXG4gICAgICAgIGxheWVycyA9IGM0Zy5tYXBzLmxheWVyc1tpXTtcblxuICAgICAgICBpZihsYXllcnMudHlwZSA9PT0gXCJncHhcIil7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxheWVycyAmJiBsYXllcnMudmVjdG9yTGF5ZXIgKXtcbiAgICAgICAgICBpZihsYXllcnMudmVjdG9yTGF5ZXIuZ2V0TGF5ZXJzKCkgJiYgbGF5ZXJzLnZlY3RvckxheWVyLmdldExheWVycygpLmdldEFycmF5KClbMF0gJiYgbGF5ZXJzLnZlY3RvckxheWVyLmdldExheWVycygpLmdldEFycmF5KClbMF0uZ2V0U291cmNlKCkgJiYgbGF5ZXJzLnZlY3RvckxheWVyLmdldExheWVycygpLmdldEFycmF5KClbMF0uZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIobGF5ZXJzLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZW50RGF0YUxheWVyID0gbGF5ZXJzLmNvbnRlbnQ7XG4gICAgICAgICAgbGF5ZXJzLnZlY3RvckxheWVyLmdldExheWVycygpLmNvbnRlbnQgPSBjb250ZW50RGF0YUxheWVyO1xuICAgICAgICAgIGxheWVyR3JvdXBzLnB1c2gobGF5ZXJzLnZlY3RvckxheWVyLmdldExheWVycygpKTtcblxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvcihrID0wOyBrPGxheWVyR3JvdXBzLmxlbmd0aDtrKyspey8vbG9vcCB0byBleHRyYWN0IGZlYXR1cmVzIGZyb20gbGF5ZXJzXG4gICAgICAgIGlmKGxheWVyR3JvdXBzW2tdLmdldEFycmF5KCkubGVuZ3RoPjApe1xuICAgICAgICAgIGxheWVyID0gbGF5ZXJHcm91cHNba10uZ2V0QXJyYXkoKTtcbiAgICAgICAgICBzb3VyY2UgPSBsYXllcltcIjBcIl0uZ2V0U291cmNlKCk7XG4gICAgICAgICAgc3R5bGUgPSBsYXllcltcIjBcIl0uZ2V0U3R5bGUoKTtcblxuICAgICAgICAgIG9uZUZlYXR1cmUgPSB0cnVlO1xuICAgICAgICAgIGZlYXR1cmUgPSBzb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICAgICAgICBmb3IoaiA9IDA7IGogPCBmZWF0dXJlLmxlbmd0aDsgaiArKyl7Ly9sb29wIG92ZXIgYWxsIGZlYXR1cmVzIGZyb20gYSBzb3VyY2VcbiAgICAgICAgICAgIGlmKGZlYXR1cmVbal0uZ2V0KFwiZmVhdHVyZXNcIikpe1xuICAgICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBmZWF0dXJlW2pdLmdldChcImZlYXR1cmVzXCIpLmxlbmd0aDsgaSsrKXsvL2xvb3AgZm9yIGNsdXN0ZXJlZCBmZWF0dXJlc1xuICAgICAgICAgICAgICAgIGlmKGxheWVyR3JvdXBzW2tdLmNvbnRlbnRbal0pe1xuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB0aGlzLmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsYXllckdyb3Vwc1trXS5jb250ZW50W2pdLmxvY2F0aW9uU3R5bGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGxheWVyR3JvdXBzW2tdLmNvbnRlbnRbMF0pe1xuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB0aGlzLmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsYXllckdyb3Vwc1trXS5jb250ZW50WzBdLmxvY2F0aW9uU3R5bGVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZlYXR1cmVbal0uZ2V0KFwiZmVhdHVyZXNcIilbaV0uc2V0U3R5bGUoc3R5bGUuc3R5bGUpO1xuICAgICAgICAgICAgICAgIGlmKCFmZWF0dXJlW2pdLmdldChcImZlYXR1cmVzXCIpW2ldLmdldCgncG9wdXAnKSl7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlW2pdLmdldChcImZlYXR1cmVzXCIpW2ldLnNldCgncG9wdXAnLGxheWVyWycwJ10ucG9wdXApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZVtqXS5nZXQoXCJmZWF0dXJlc1wiKSk7XG5cbiAgICAgICAgICAgICAgb25lRmVhdHVyZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKG9uZUZlYXR1cmUpey8vc2luZ2xlIG5vdCBjbHVzdGVyZWQgZmVhdHVyZVxuICAgICAgICAgICAgaWYoZmVhdHVyZS5sZW5ndGggPj0gMSl7XG4gICAgICAgICAgICAgIGlmKCFmZWF0dXJlWycwJ10uZ2V0KCdwb3B1cCcpKXtcbiAgICAgICAgICAgICAgICBmZWF0dXJlWycwJ10uc2V0KCdwb3B1cCcsbGF5ZXIucG9wdXApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmVjdG9yU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3Ioe1xuICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzozODU3J1xuXG4gICAgICB9KTtcblxuICAgICAgZm9yKGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgdmVjdG9yU291cmNlLmFkZEZlYXR1cmVzKGZlYXR1cmVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgY2x1c3RlclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuQ2x1c3Rlcih7XG4gICAgICAgIGRpc3RhbmNlOiA0MCxcbiAgICAgICAgLy90aHJlc2hvbGQ6IDIsIC8vbWluaW11bSBlbGVtZW50IGNvdW50XG4gICAgICAgIHNvdXJjZTogdmVjdG9yU291cmNlXG4gICAgICB9KTtcbiAgICAgIHZhciBzdHlsZUZvckNsdXN0ZXIgPSBmdW5jdGlvbihmZWF0dXJlLCByZXNvbHV0aW9uKXtcbiAgICAgICAgaWYoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSAmJiBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKVsnMCddLmdldFN0eWxlKCkpe1xuICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJylbJzAnXS5nZXRTdHlsZSgpKGZlYXR1cmUpO1xuICAgICAgICAgIGlmIChmZWF0dXJlICE9PSB1bmRlZmluZWQgJiYgZmVhdHVyZSAhPT0gbnVsbCAmJiBmZWF0dXJlLnNlbGYgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgdmFyIGZGZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgdmFyIHNpemUgPSBmRmVhdHVyZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHNpemUgPiAxKSB7XG4gICAgICAgICAgICAgIGlmICghc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGJ1YmJsZS1vZmZzZXRcbiAgICAgICAgICAgICAgdmFyIGljb25PZmZzZXQgPSBbMCwgMF07XG4gICAgICAgICAgICAgIGlmIChzdHlsZVswXSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVbMF0uZ2V0SW1hZ2UoKS5nZXRSYWRpdXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHBhcnNlSW50KHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0UmFkaXVzKCksIDEwKTtcbiAgICAgICAgICAgICAgICAgIGlmIChyYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbk9mZnNldCA9IFswLCByYWRpdXNdO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0eWxlWzBdLmdldEltYWdlKCkuZ2V0QW5jaG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgIGljb25PZmZzZXQgPSBzdHlsZVswXS5nZXRJbWFnZSgpLmdldEFuY2hvcigpIHx8IFswLCAwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgZmlsbGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KCc0OTc1QTgnLHtcbiAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IDcwXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChjb250ZW50RGF0YS5jbHVzdGVyX2ZpbGxjb2xvcikge1xuICAgICAgICAgICAgICAgIGZpbGxjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShjb250ZW50RGF0YS5jbHVzdGVyX2ZpbGxjb2xvcix7XG4gICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogNzBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgZm9udGNvbG9yID0gY29udGVudERhdGEuY2x1c3Rlcl9mb250Y29sb3IgPyAnIycgKyBjb250ZW50RGF0YS5jbHVzdGVyX2ZvbnRjb2xvciA6ICcjRkZGRkZGJztcblxuICAgICAgICAgICAgICBzdHlsZS5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi4pePXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiNjBweCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IC0xICogaWNvbk9mZnNldFswXSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTEgKiBpY29uT2Zmc2V0WzFdLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZpbGxjb2xvclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzdHlsZS5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHNpemUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogLTEgKiBpY29uT2Zmc2V0WzBdLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAtMSAqIGljb25PZmZzZXRbMV0gKyAzLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZvbnRjb2xvclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBpZihmZWF0dXJlICYmIGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpICYmIGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWycwJ10uZ2V0U3R5bGUoKSl7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJylbJzAnXS5nZXRTdHlsZSgpKGZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG5cbiAgICAgIC8vdmVjdG9yTGF5ZXIgPSBzZWxmLmdldFZlY3RvckxheWVyKGNsdXN0ZXJTb3VyY2UsIHN0eWxlRm9yQ2x1c3Rlcik7XG5cbiAgICAgIHZlY3RvckxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgIG5hbWU6ICdDbHVzdGVyJyxcbiAgICAgICAgc291cmNlOiBjbHVzdGVyU291cmNlLFxuICAgICAgICBzdHlsZTogc3R5bGVGb3JDbHVzdGVyXG5cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgYWxsTGF5ZXJzID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgdmFyIG1pc3NpbmdMYXllciA9IHRydWU7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBhbGxMYXllcnMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgIGlmKGFsbExheWVyc1tpXS5jbHVzdGVycykge1xuICAgICAgICAgIGFsbExheWVyc1tpXSA9IHZlY3RvckxheWVyO1xuICAgICAgICAgIG1pc3NpbmdMYXllciA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKG1pc3NpbmdMYXllcil7XG4gICAgICAgIHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodmVjdG9yTGF5ZXIpO1xuICAgICAgfVxuICAgIH1cblxuXG5cbiAgfS8vZW5kIG9mIGNvbWJpbmVMYXllcnNcblxuXG4gIGNoZWNrTGF5ZXJJc0FjdGl2ZUZvclpvb20obGF5ZXJJZCwgb3B0X3pvb20pIHtcbiAgICB2YXIgbGF5ZXIsXG4gICAgICB6b29tLFxuICAgICAgbGF5ZXJDb250ZW50LFxuICAgICAgbG9jc3R5bGU7XG5cbiAgICBpZiAoIXRoaXMubGF5ZXJDb250cm9sbGVyLmFyckxheWVyc1tsYXllcklkXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxheWVyID0gdGhpcy5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzW2xheWVySWRdO1xuXG4gICAgaWYgKG9wdF96b29tKSB7XG4gICAgICB6b29tID0gb3B0X3pvb207XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKSA+IC0xKSB7XG4gICAgICB6b29tID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHpvb20gPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxheWVyLnpvb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGxheWVyLmNvbnRlbnQgJiYgbGF5ZXIuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF5ZXIuY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxheWVyQ29udGVudCA9IGxheWVyLmNvbnRlbnRbaV07XG4gICAgICAgICAgaWYgKGxheWVyQ29udGVudC5sb2NhdGlvblN0eWxlKSB7XG4gICAgICAgICAgICBsb2NzdHlsZSA9IHRoaXMubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xheWVyQ29udGVudC5sb2NhdGlvblN0eWxlXTtcbiAgICAgICAgICAgIC8vIFRPRE8gY2hlY2sgYWxsIGxvY3N0eWxlcyBhbmQgdGFrZSB0aGUgbW9zdCBjb25zdHJhaW5pbmcgem9vbSB2YWx1ZVxuICAgICAgICAgICAgaWYgKGxvY3N0eWxlKSB7XG4gICAgICAgICAgICAgIGxheWVyLnpvb20gPSB7fTtcbiAgICAgICAgICAgICAgaWYgKGxvY3N0eWxlLm1heHpvb20pIHtcbiAgICAgICAgICAgICAgICBsYXllci56b29tLm1heCA9IGxvY3N0eWxlLm1heHpvb207XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGxvY3N0eWxlLm1pbnpvb20pIHtcbiAgICAgICAgICAgICAgICBsYXllci56b29tLm1pbiA9IGxvY3N0eWxlLm1pbnpvb207XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGxheWVyLnpvb20ubWF4IHx8IGxheWVyLnpvb20ubWluKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCh0eXBlb2Ygem9vbSA9PT0gXCJudW1iZXJcIikgJiYgbGF5ZXIuem9vbVxuICAgICAgJiYgKGxheWVyLnpvb20ubWluID4gem9vbSB8fCAobGF5ZXIuem9vbS5tYXggPiAwICYmIGxheWVyLnpvb20ubWF4IDwgem9vbSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZW5kIG9mIFwiY2hlY2tMYXllcklzQWN0aXZlKClcIlxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXByb3h5LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Wm9vbWxldmVsfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbFwiXG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogYzRnLU1hcHMgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLnV0aWxzID0gJC5leHRlbmQoYzRnLm1hcHMudXRpbHMsIHtcbiAgICAvKipcbiAgICAgKiAgQ29udmVydHMgdGhlIGZpcnN0IGxldHRlciBvZiBhIGdpdmVuIHN0cmluZyB0byB1cHBlcmNhc2UsIGxlYXZpbmcgdGhlIHJlbWFpbmluZyBzdHJpbmcgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogIEBwYXJhbSAgICB7c3RyaW5nfSAgICB0aGUgc3RyaW5nIHRvIGNhcGl0YWxpemVcbiAgICAgKlxuICAgICAqICBAcmV0dXJuICAge3N0cmluZ30gICAgdGhlIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcjogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiB1bmlxdWUgaWQuXG4gICAgICpcbiAgICAgKiBUaGUgaWQgaXMgOSBjaGFyYWN0ZXJzIGxvbmcgYW5kIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICBUaGUgZ2VuZXJhdGVkIGlkLlxuICAgICAqL1xuICAgIGdldFVuaXF1ZUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAgICAgLy8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcbiAgICAgIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICAgICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgbm90IGJyZWFrIHRoZSBDb2RlLlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXCAtPiBcXFxcO1xuICAgICAqICAgXCIgLT4gJyc7XG4gICAgICogICDDhCAtPiAmQXVtbDtcbiAgICAgKiAgIMOkIC0+ICZhdW1sO1xuICAgICAqICAgw5YgLT4gJk91bWw7XG4gICAgICogICDDtiAtPiAmb3VtbDtcbiAgICAgKiAgIMOcIC0+ICZVdW1sO1xuICAgICAqICAgw7wgLT4gJnV1bWw7XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGVuY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXC9nLCAnXFxcXFxcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcXCIvZywgJ1xcJ1xcJydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw4QvZywgJyZBdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw6QvZywgJyZhdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5YvZywgJyZPdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7YvZywgJyZvdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5wvZywgJyZVdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7wvZywgJyZ1dW1sOydcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGVuY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBiZSBkaXNwbGF5ZWQgY29ycmVjdGx5LlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXFxcICAgICAtPiBcXDtcbiAgICAgKiAgICcnICAgICAtPiBcIjtcbiAgICAgKiAgICZBdW1sOyAtPiDDhFxuICAgICAqICAgJmF1bWw7IC0+IMOkXG4gICAgICogICAmT3VtbDsgLT4gw5ZcbiAgICAgKiAgICZvdW1sOyAtPiDDtlxuICAgICAqICAgJlV1bWw7IC0+IMOcXG4gICAgICogICAmdXVtbDsgLT4gw7xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVjb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXFxcXFwvZywgJ1xcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcJ1xcJy9nLCAnXFxcIidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJkF1bWw7L2csICfDhCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJmF1bWw7L2csICfDpCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJk91bWw7L2csICfDlidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJm91bWw7L2csICfDtidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJlV1bWw7L2csICfDnDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZ1dW1sOy9nLCAnw7wnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBkZWNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yIHJlcGxhY2UgYW4gVVJMLXBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIGBwYXJhbWAsXG4gICAgICogd2lsbCBiZSBhcHBsaWVkIGFzIFwiaGFzaC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcyNwYXJhbVxuICAgICAqIE5vdGUsIHRoYXQgYWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIHdoZXJlYXMgZXhpc3RpbmcgXCJHRVQtcGFyYW1ldGVyc1wiIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIHNldCwgaXQgd2lsbCBiZSBhcHBsaWVkIGFzIFwiR0VULXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzP29wdF9nZXRLZXk9cGFyYW1cbiAgICAgKiBJZiB0aGUga2V5IGRlc2NyaWJlZCBieSBgb3B0X2dldEtleWAgaXMgYWxyZWFkeSBleGlzdGluZywgaXRzIHZhbHVlIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIG90aGVyd2lzZSB0aGUga2V5LXZhbHVlLXBhaXIgd2lsbCBiZSBhcHBlbmRlZCBhcHByb3ByaWF0bHkuXG4gICAgICogQWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2V4ZWN1dGVgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgbmV3IGxpbmsgYXMgYHN0cmluZ2AsXG4gICAgICogb3RoZXJ3aXNlIHRoZSBcImhyZWYvbG9jYXRpb25cIiB3aWxsIGJlIGNoYW5nZWQgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIsIHdoaWNoIGNhbiBjYXVzZSBhIHBhZ2VyZWxvYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBwYXJhbSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufHN0cmluZ30gIG9wdF9nZXRLZXkgICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgIG9wdF9leGVjdXRlICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqL1xuICAgIHNldFVybFBhcmFtOiBmdW5jdGlvbiAocGFyYW0sIG9wdF9nZXRLZXksIG9wdF9leGVjdXRlKSB7XG4gICAgICB2YXIgbGluayxcbiAgICAgICAgICBzZWFyY2hQYXJhbSxcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkLFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxpbmsgPSBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIC8vIHVzZSBoYXNoLXBhcmFtZXRlclxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gcGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBsb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBHRVQtcGFyYW1ldGVyXG4gICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYWxyZWFkeSBzZWFyY2gtcGFyYW1ldGVyc1xuICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICBvcHRfZ2V0S2V5ID0gb3B0X2dldEtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIC8vIHJlcGxhY2UgcGFyYW1ldGVyIGlmIGFscmVhZHkgZXhpc3RlbnRcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFxuICAgICAgICAgICAgICAvKFtePVxcP1xcJl0rKT0oW14mXSspL2dpLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gb3B0X2dldEtleSkge1xuICAgICAgICAgICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFwcGVuZCBhcyBuZXcgcGFyYW1ldGVyXG4gICAgICAgICAgaWYgKCFwYXJhbVJlcGxhY2VkKSB7XG4gICAgICAgICAgICBzZWFyY2hQYXJhbSArPSAnJicgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCBiZSB0aGUgb25seSBzZWFyY2gtcGFyYW1ldGVyIGluIHRoZSBVUkxcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9ICc/JyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5zZWFyY2ggPSBzZWFyY2hQYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IHNlYXJjaFBhcmFtICsgbG9jYXRpb24uaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSwgLy8gZW5kIG9mIHNldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIEdldCBzZWFyY2ggb3IgaGFzaCBVUkwtcGFyYW1ldGVyIGFzIHN0cmluZy5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgaGFzaC1wYXJhbWV0ZXIgb2YgdGhlIFVSTCBpcyByZXR1cm5lZCxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCBzZWFyY2ggZm9yIGEgR0VULXBhcmFtZXRlciBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIElmIGEgcGFyYW1ldGVyIGlzIG5vdCBleGlzdGVudCwgb3IgZW1wdHksIGFuIGVtcHR5IHN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxzdHJpbmd9ICBvcHRfZ2V0S2V5ICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm91bmQgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGdldFVybFBhcmFtOiBmdW5jdGlvbiAob3B0X2dldEtleSkge1xuICAgICAgdmFyIHBhcmFtLFxuICAgICAgICAgIHJlZ0V4O1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgcGFyYW0gPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgcGFyYW0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWdFeCA9IG5ldyBSZWdFeHAoJ1tcXD9cXCZdJyArIG9wdF9nZXRLZXkgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICAgIHBhcmFtID0gcmVnRXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogRGVsdGEtZW5jb2RlIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAgICogTm90ZSB0aGF0IHRoZSBhcnJheSB3aWxsIGJlIHNvcnRlZCAobG93ZXN0IHRvIGhpZ2hlc3QpXG4gICAgICogYmVmb3JlIGVuY29kaW5nLlxuICAgICAqXG4gICAgICogU28gYWZ0ZXIgdGhlIGVuY29kaW5nIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvbnRhaW5zXG4gICAgICogdGhlIHNtYWxsZXN0IG51bWJlciBvZiB0aGUgc2V0IGFuZCBlYWNoIGZvbGxvd2luZyBudW1iZXIganVzdFxuICAgICAqIHJlcHJlc2VudHMgdGhlIG9mZnNldCB0byBpdHMgcHJldmlvdXMgbmVpZ2hib3IuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG1vc3RseSBlZmZpY2llbnQgZm9yIGhpZ2ggbnVtYmVycywgdGhhdCBhcmUgXCJjbG9zZSB0byBlYWNoIG90aGVyXCIuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgWzEzMzcsIDExLCAxMDEsIDEyMywgOTYsIDY5LCA0MiwgNDJdXG4gICAgICogICB3aWxsIGJlIHNvcnRlZFxuICAgICAqICAgWzExLCA0MiwgNDIsIDY5LCA5NiwgMTAxLCAxMjMsIDEzMzddXG4gICAgICogICBhbmQgZW5jb2RlZCB0b1xuICAgICAqICAgWzExLCAzMSwgMCwgMjcsIDI3LCA1LCAyMiwgMTIxNF1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRW5jb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoYXJySW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBhcnJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgYXJySW5wdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICB9KTtcblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBhcnJJbnB1dFswXTtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBhcnJJbnB1dFtpXSAtIGFycklucHV0W2kgLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YUVuY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBkZWx0YS1lbmNvZGVkIGFycmF5LlxuICAgICAqIFNlZSBgZGVsdGFFbmNvZGVgIGZ1bmN0aW9uIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFEZWNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBwYXJzZUludChhcnJJbnB1dFswXSwgMTApO1xuICAgICAgaWYgKGlzTmFOKGFycklucHV0WzBdKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gcGFyc2VJbnQoYXJySW5wdXRbaV0sIDEwKSArIGFyck91dHB1dFtpIC0gMV07XG4gICAgICAgIGlmIChpc05hTihhcnJPdXRwdXRbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFEZWNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGNhbGwgZnVuY3Rpb25zIGluIGBhcnJIb29rRnVuY3Rpb25zYCB3aXRoIGdpdmVuIGBwYXJhbWV0ZXJzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxmdW5jdGlvbj59ICAgYXJySG9va0Z1bmN0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHttaXhlZH0gICAgICAgICAgICAgcGFyYW1ldGVycyAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNhbGxIb29rRnVuY3Rpb25zOiBmdW5jdGlvbiAoYXJySG9va0Z1bmN0aW9ucywgcGFyYW1ldGVycykge1xuICAgICAgdmFyIGo7XG5cbiAgICAgIGlmIChhcnJIb29rRnVuY3Rpb25zICYmIGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJySG9va0Z1bmN0aW9uc1tqXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJySG9va0Z1bmN0aW9uc1tqXShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJjYWxsSG9va0Z1bmN0aW9ucygpXCJcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBoZXgtZm9ybWF0ZWQgY29sb3IgdmFsdWUgaW50byByZ2JhKCktZm9ybWF0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBoZXggICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgb3B0X29wYWNpdHkgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHk6IGZ1bmN0aW9uIChoZXgsIG9wdF9vcGFjaXR5LCBvcHRfYXJyYXkpIHtcblxuICAgICAgdmFyIGJpZ2ludCwgciwgZywgYiwgYTtcblxuICAgICAgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgb3B0X29wYWNpdHkudmFsdWUgPSBwYXJzZUludChvcHRfb3BhY2l0eS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiB0eXBlb2Ygb3B0X29wYWNpdHkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0X29wYWNpdHkgPT09ICdvYmplY3QnICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSBvcHRfb3BhY2l0eS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgICBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICAgIGIgPSBiaWdpbnQgJiAyNTU7XG4gICAgICBhID0gb3B0X29wYWNpdHkgPyAob3B0X29wYWNpdHkgLyAxMDApIDogMTtcbiAgICAgIGlmKG9wdF9hcnJheSl7XG4gICAgICAgIHJldHVybiBbcixnLGIsYV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZHVjZSBhIGRlZmluZWQgc3R5bGUsIHRvIGEgc2ltcGxlciB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogVGhlIHJlZHVjZWQgc3R5bGUgaXMgdGhlIGZpcnN0IHN0eWxlIG9mIHRoZSBkZWZpbmVkIHN0eWxlc2V0LFxuICAgICAqIHdpdGggYSAxcHggdGhpY2sgc3Ryb2tlIGFuZCBhIGNpcmNsZSB3aXRoIGEgNXB4IHJhZGl1cy5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBhZGRpdGlvbmFsIGdlb21ldHJpZXMgd2l0aCBhIG1haW4tZ2VvbWV0cnksXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gZGVmaW5lIGEgd2hvbGUgbmV3IHN0eWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcnxzdHJpbmd9ICAgICAgICAgICBzdHlsZUlkICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8b2wuc3R5bGUuU3R5bGU+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZWR1Y2VTdHlsZTogZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHZhciBzdHlsZSxcbiAgICAgICAgICByZWR1Y2VkU3R5bGUsXG4gICAgICAgICAgZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZVN0eWxlO1xuXG4gICAgICBpZiAoIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdIHx8ICFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHN0eWxlID0gYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUoKVswXTtcblxuICAgICAgZmlsbFN0eWxlID0gc3R5bGUuZ2V0RmlsbCgpO1xuICAgICAgc3Ryb2tlU3R5bGUgPSBzdHlsZS5nZXRTdHJva2UoKTtcbiAgICAgIHN0cm9rZVN0eWxlLnNldFdpZHRoKDEpO1xuXG4gICAgICByZWR1Y2VkU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pLFxuICAgICAgICAvLyB0ZXh0OiBzdHlsZS5nZXRUZXh0KCksXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBbcmVkdWNlZFN0eWxlXTtcbiAgICB9LCAvLyBlbmQgb2YgXCJyZWR1Y2VTdHlsZVwiXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBnaXZlbiBnZW9tZXRyeS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBnZW9tZXRyeSBpcyBhIGBMaW5lU3RyaW5nYCB0aGUgZnVuY3Rpb24gd2lsbCBtZWFzdXJlIGl0cyBsZW5ndGgsXG4gICAgICogaXMgaXQgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIHRoZSBhY3JlYWdlLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiBgMGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgb3B0aW9uYWwgYG9wdF9mb3JjZUxpbmVNZWFzdXJlYCBwYXJhbWV0ZXIgaXMgYHRydWVgXG4gICAgICogYW5kIHRoZSBnZW9tZXRyeSBpcyBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgaXRzIHBlcmltZXRlciBpbnN0ZWFkXG4gICAgICogb2YgaXRzIGFjcmVhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuZ2VvbS5MaW5lU3RyaW5nfG9sLmdlb20uUG9seWdvbn0gICBnZW9tZXRyeSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgIG9wdF9mb3JjZUxpbmVNZWFzdXJlICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8c3RyaW5nPnxudW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1lYXN1cmVHZW9tZXRyeTogZnVuY3Rpb24gKGdlb21ldHJ5LCBvcHRfZm9yY2VMaW5lTWVhc3VyZSwgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICBzcGhlcmUsXG4gICAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgICAgY29vcmQxLFxuICAgICAgICAgIGNvb3JkMixcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vc3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcgfHwgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uICYmIG9wdF9mb3JjZUxpbmVNZWFzdXJlKSkge1xuXG4gICAgICAgIGNvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgICBjb29yZDEgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICBjb29yZDIgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpICsgMV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgdmFsdWUgKz0gb2wuc3BoZXJlLmdldERpc3RhbmNlKGNvb3JkMSwgY29vcmQyLCA2Mzc4MTM3KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgIC8vZ2VvbWV0cnkgPSAvKiogQHR5cGUge29sLmdlb20uUG9seWdvbn0gKi8oZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSk7XG4gICAgICAgIC8vY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRMaW5lYXJSaW5nKDApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnMob2wuc3BoZXJlLmdldEFyZWEoZ2VvbWV0cnkpKTtcbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSAmJiBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhbHVlID0gTWF0aC5QSSAqIE1hdGguc3FydCh2YWx1ZSk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChyZXN1bHQucmF3VmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQoKHZhbHVlICogMTAwKSAvIDEwMCkgLyAxMDAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV4dGVudCBmb3IgYW4gYXJyYXkgb2YgZ2VvbWV0cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheS48b2wuZ2VvbS5zaW1wbGVHZW9tZXRyeT59ICBhcnJHZW9tZXRyaWVzICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7b2wuRXh0ZW50fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEV4dGVudEZvckdlb21ldHJpZXM6IGZ1bmN0aW9uIChhcnJHZW9tZXRyaWVzKSB7XG4gICAgICB2YXIgZXh0ZW50U291cmNlO1xuXG4gICAgICBpZiAoIWFyckdlb21ldHJpZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHZW9tZXRyaWVzIG1pc3NpbmcgZm9yIGV4dGVudCBjYWxjdWxhdGlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGV4dGVudFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICBleHRlbnRTb3VyY2UuYWRkRmVhdHVyZXMoYXJyR2VvbWV0cmllcyk7XG5cbiAgICAgIHJldHVybiBleHRlbnRTb3VyY2UuZ2V0RXh0ZW50KCkgfHwgb2wuRXh0ZW50KFswLCAwLCAwLCAwXSk7XG4gICAgfSwgLy8gZW5kIG9mIGdldEV4dGVudEZvckdlb21ldHJpZXMoKVxuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBhcnJheSBvZiBgZXh0ZW50c2AuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgZXh0ZW50cyAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnRzOiBmdW5jdGlvbiAoZXh0ZW50cywgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICBrZXk7XG5cbiAgICAgIGlmICghZXh0ZW50cyB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9leHRlbnQgPSBvbC5leHRlbnQuY3JlYXRlRW1wdHkoKTtcblxuICAgICAgZm9yIChrZXkgaW4gZXh0ZW50cykge1xuICAgICAgICBpZiAoZXh0ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHRlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGV4dGVudCA9IGV4dGVudHNba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2wuZXh0ZW50LmV4dGVuZChleHRlbnQsIGV4dGVudHNba2V5XSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maXRUb0V4dGVudChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIDUsIDAsIDAsIDIpO1xuXG5cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnRzXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGBleHRlbnRgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLkV4dGVudH0gIGV4dGVudCAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7YXJyYXl9ICAgICAgb3B0X3BhZGRpbmcgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluWm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21heFpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5SZXNvbHV0aW9uICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50OiBmdW5jdGlvbiAoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24sIG9wdF9taW5ab29tLCBvcHRfbWF4Wm9vbSwgb3B0X21pblJlc29sdXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZml0T3B0aW9ucztcblxuICAgICAgaWYgKCFleHRlbnQgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGZpdE9wdGlvbnMgPSB7XG4gICAgICAgICdwYWRkaW5nJzogb3B0X3BhZGRpbmcgfHwgWzI1LCAyNSwgMjUsIDI1XVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdF9taW5SZXNvbHV0aW9uICYmIG9wdF9taW5SZXNvbHV0aW9uID4gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblJlc29sdXRpb24gPSBvcHRfbWluUmVzb2x1dGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9taW5ab29tICYmIG9wdF9taW5ab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5ab29tID0gb3B0X21pblpvb207XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWF4Wm9vbSAmJiBvcHRfbWF4Wm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWF4Wm9vbSA9IG9wdF9tYXhab29tO1xuICAgICAgfVxuXG4gICAgICAvLyBhbmltYXRlIHRoZSBcImZpdHRpbmdcIiB3aGVuIGEgZHVyYXRpb24gaXMgZ2l2ZW4gYW5kIGl0cyBncmVhdGVyIHRoYW4gMFxuICAgICAgaWYgKG9wdF9hbmltYXRpb25EdXJhdGlvbiAmJiBvcHRfYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgY2VudGVyOiBbMCwgMF1cbiAgICAgICAgICAvL3JvdGF0aW9uOiBNYXRoLlBJXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtYXAuYmVmb3JlUmVuZGVyKFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnBhbih7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgc291cmNlOiB2aWV3LmdldENlbnRlcigpXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi56b29tKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpLCB7cGFkZGluZzogWzI1LCAyNSwgMjUsIDI1XX0pO1xuICAgICAgICAvL3ZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSk7XG4gICAgICAgIC8vdmlldy5zZXRab29tKHZpZXcuZ2V0Wm9vbSgpLTEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudCgpXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBydW4gYWxsIHBsYWNlaG9sZGVyIGZ1bmN0aW9ucyBhdCBvbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgc3RySW5wdXQgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgICAgICAgICAgICAgZmVhdHVyZSAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyIHwgdW5kZWZpbmVkfSAgb3B0X2xheWVyICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQWxsUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgLy8gb25seSBjaGVjayB0aGUgZmlyc3QgdHdvIHBhcmFtZXRlcnMgYXMgdGhleSB3aWxsIGJlIHVzZWQgYnkgYWxsIHBsYWNlaG9sZGVyLWZ1bmN0aW9uc1xuICAgICAgLy8gLT4gZm9yIHBlcmZvcm1hbmNlXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcik7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUFsbFBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHtGTmZ1bmN0aW9uTmFtZX1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgd2luZG93LmZ1bmN0aW9uTmFtZShmZWF0dXJlLCBzdHlsZSlgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKiBTdHlsZSB3aWxsIGJlIHRha2VuIGVpdGhlciBmcm9tIHRoZSBmZWF0dXJlLCBvciB0aGUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyfSAgbGF5ZXIgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8ICFsYXllcikge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxce0ZOKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBmdW5jdGlvbk5hbWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZ1bmN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSAmJiB0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSgpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxheWVyLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGxheWVyLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbZnVuY3Rpb25OYW1lXShmZWF0dXJlLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMsIGluIGBzdHJJbnB1dGAsIGZvciB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBnZW9FZGl0b3IuXG4gICAgICogVmFsaWQgcGxhY2Vob2xkZXJzIGFyZTogKFtrZXldIHJlcHJlc2VudHMgdGhlIHN0cmluZ25hbWUgb2YgdGhlIHZhcmlhYmxlcyBrZXkpXG4gICAgICogICBgJHtFTFtrZXldfWAgICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZMW2tleV19YCAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGUsIGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAqICAgYCR7RVZba2V5XX1gICAgPT4gIFZhbHVlIG9mIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZWW2tleV19YCAgPT4gIFNhbWUgYXMgYCR7RVZba2V5XX1gXG4gICAgICpcbiAgICAgKiBJZiBubyBhcHByb3ByaWF0ZSB2YWx1ZSBjYW4gYmUgZm91bmQgZm9yIGEgcGxhY2Vob2xkZXJcbiAgICAgKiBpdCB3aWxsIHNpbXBseSBiZSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KEVWP1tMVl0pKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB0eXBlLCBldktleSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBlZGl0b3JWYXJzLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaGFzIGVkaXRvclZhcnNcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpKSB7XG4gICAgICAgICAgICAgIGVkaXRvclZhcnMgPSBmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpO1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggZm9yIGVkaXRvclZhciB3aXRoIGtleSA9PSBldktleVxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWRpdG9yVmFycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChlZGl0b3JWYXJzW2ldLmtleSA9PT0gZXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgJ0VWTCcgZGlzcGxheSBsYWJlbCBvbmx5IGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdFTCcgfHwgKHR5cGUgPT09ICdFVkwnICYmIGVkaXRvclZhcnNbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHthdHRyfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGBmZWF0dXJlLmdldChhdHRyKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBhdHRyLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0KGF0dHIpIHx8ICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycygpXG5cbiAgICBvYmplY3RUb0FycmF5OiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iamVjdCA9IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LCAvLyBlbmQgb2Ygb2JqZWN0VG9BcnJheSgpXG5cbiAgICBnZXRWZWN0b3JMYXllcihzb3VyY2UsIHN0eWxlKSB7XG4gICAgICAgIHZhciBmblN0eWxlO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzdHlsZSBpcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHN0eWxlOiBmblN0eWxlXG4gICAgICAgIH0pO1xuICAgIH0sLy8gZW5kIG9mIFwiZ2V0VmVjdG9yTGF5ZXIoKVwiXG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgc3ViZG9tYWluIGZyb20gdGhlIGN1cnJlbnQgcmVxdWVzdCBob3N0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCAqfVxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdWJkb21haW4oKSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIHJlZHJhd01hcFZpZXc6IGZ1bmN0aW9uIChtYXBDb250cm9sbGVyKSB7XG4gICAgICB2YXIgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lclRvcExlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgIG1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LnByZXBlbmQoY29udHJvbENvbnRhaW5lclRvcExlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAkKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KS5hZnRlcihjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG4gICAgICBtYXBDb250cm9sbGVyLmxlZnRTbGlkZUVsZW1lbnRzLnB1c2goY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgICBpZiAobWFwRGF0YS5zY2FsZWxpbmUpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lID0gbmV3IG9sLmNvbnRyb2wuU2NhbGVMaW5lKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCxcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICB9XG5cbiAgICAgICQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpLmFwcGVuZChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yik7XG5cbiAgICAgIGlmIChtYXBEYXRhLnpvb21sZXZlbCkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwgPSBuZXcgWm9vbWxldmVsKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXBEYXRhLm1vdXNlcG9zaXRpb24pIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24gPSBuZXcgb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uKHtcbiAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBjb29yZGluYXRlRm9ybWF0OiBvbC5jb29yZGluYXRlLnRvU3RyaW5nSERNUyxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgJyc7XG4gICAgfSxcbiAgICBzdG9yZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTsgLy8gb25seSBzdHJpbmdzXG4gICAgfVxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgdXRpbHMgPSB0aGlzLmM0Zy5tYXBzLnV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiLCJpbXBvcnQge0M0Z092ZXJsYXl9IGZyb20gXCIuL2M0Zy1vdmVybGF5XCJcblxuZXhwb3J0IGNsYXNzIEM0Z092ZXJsYXlDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yKGJhc2VsYXllcil7XG4gICAgICAgIHRoaXMuYmFzZWxheWVyID0gYmFzZWxheWVyO1xuICAgICAgICB0aGlzLmFyck92ZXJsYXlzID0gW107XG4gICAgfVxuICAgIFxuICAgIHNob3dPdmVybGF5TGF5ZXIob3ZlcmxheUlkKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgb3ZlcmxheUxheWVyQ29uZmlnLFxuICAgICAgICAgICAgb3NtU291cmNlQ29uZmlncyA9IGM0Zy5tYXBzLmNvbmZpZy5vc20sXG4gICAgICAgICAgICBzdGFtZW5Tb3VyY2VDb25maWdzID0gYzRnLm1hcHMuY29uZmlnLnN0YW1lbixcbiAgICAgICAgICAgIGxheWVyT3B0aW9ucyxcbiAgICAgICAgICAgIG92ZXJsYXlMYXllcixcbiAgICAgICAgICAgIG5vVXJsO1xuXG4gICAgICAgIGxheWVyT3B0aW9ucyA9IHt9O1xuICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuT1NNKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxheUxheWVyQ29uZmlnID0gdGhpcy5hcnJPdmVybGF5c1tvdmVybGF5SWRdO1xuXG4gICAgICAgIHN3aXRjaCAob3ZlcmxheUxheWVyQ29uZmlnLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICBjYXNlICdvc20nOlxuICAgICAgICAgICAgICAgIGlmIChvc21Tb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLk9TTShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvc21Tb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFtZW5Tb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhbWVuXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5TdGFtZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbWVuU291cmNlQ29uZmlnc1tvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKG1hcFF1ZXN0U291cmNlQ29uZmlnc1tvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgLy8gbWFwUXVlc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuTWFwUXVlc3QobWFwUXVlc3RTb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0pXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVybGF5TGF5ZXJDb25maWcuc3R5bGUgPT09ICdvc21fY3VzdG9tJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b21cbiAgICAgICAgICAgICAgICAgICAgbm9VcmwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxheUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gb3ZlcmxheUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGF5TGF5ZXJDb25maWcudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gb3ZlcmxheUxheWVyQ29uZmlnLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVXJsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcmxheUxheWVyQ29uZmlnLnVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmxzID0gb3ZlcmxheUxheWVyQ29uZmlnLnVybHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBub1VybCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9VcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKGxheWVyT3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjdXN0b20gdXJsKHMpIG1pc3NpbmcgLT4gc3dpdGNoIHRvIGRlZmF1bHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5zdXBwb3J0ZWQgb3NtLXN0eWxlIC0+IHN3aXRjaCB0byBkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ29vZ2xlJzpcbiAgICAgICAgICAgICAgICAvL0B0b2RvXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdnb29nbGUtbWFwcyBhcmUgY3VycmVudGx5IHVuc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdiaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLmFwaUtleSAmJiBvdmVybGF5TGF5ZXJDb25maWcuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLkJpbmdNYXBzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWx0dXJlOiBuYXZpZ2F0b3IubGFuZ3VhZ2VzID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBvdmVybGF5TGF5ZXJDb25maWcuYXBpS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcnlTZXQ6IG92ZXJsYXlMYXllckNvbmZpZy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBiaW5nLWtleSBvciBpbnZhbGlkIGltYWdlcnktc2V0IScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dtcyc6XG4gICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVGlsZVdNUyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG92ZXJsYXlMYXllckNvbmZpZy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMQVlFUlM6IG92ZXJsYXlMYXllckNvbmZpZy5wYXJhbXMubGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZFUlNJT046IG92ZXJsYXlMYXllckNvbmZpZy5wYXJhbXMudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ZPUk1BVDogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVFJBTlNQQVJFTlQ6IG92ZXJsYXlMYXllckNvbmZpZy5wYXJhbXMudHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI6IG92ZXJsYXlMYXllckNvbmZpZy5ndXR0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IG92ZXJsYXlMYXllckNvbmZpZy5hdHRyaWJ1dGlvbiArICcgJyArIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT05cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZW50OiBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChbNS41OTMzNCwgNTAuMDU3OCwgOS43NDE1OCwgNTIuNzk5OF0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ293bSc6XG4gICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogb3ZlcmxheUxheWVyQ29uZmlnLnVybCArIG92ZXJsYXlMYXllckNvbmZpZy5hcHBfaWQgKyAnL3t6fS97eH0ve3l9P2hhc2g9JyArIG92ZXJsYXlMYXllckNvbmZpZy5hcGlfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb25zOiBvdmVybGF5TGF5ZXJDb25maWcuYXR0cmlidXRpb24gKyAnICcgKyBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAvL2V4dGVudDogb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoWzUuNTkzMzQsIDUwLjA1NzgsIDkuNzQxNTgsIDUyLjc5OThdLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5zdXBwb3J0ZWQgcHJvdmlkZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvdmVybGF5TGF5ZXIuc2V0T3BhY2l0eShwYXJzZUludChvdmVybGF5TGF5ZXJDb25maWcub3BhY2l0eSkvMTAwKTtcbiAgICAgICAgdGhpcy5hcnJPdmVybGF5c1tvdmVybGF5SWRdLmxheWVyID0gb3ZlcmxheUxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJPdmVybGF5c1tvdmVybGF5SWRdLmxheWVyXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW92ZXJsYXktY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBDNGdPdmVybGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKG92ZXJsYXlBcnIsIG1hcENvbnRyb2xsZXIpe1xuICAgICAgICB0aGlzLmlkICAgICAgICAgICAgPSBvdmVybGF5QXJyWydpZCddO1xuICAgICAgICB0aGlzLnBpZCAgICAgICAgICAgPSBvdmVybGF5QXJyWydwaWQnXTtcbiAgICAgICAgdGhpcy5uYW1lICAgICAgICAgID0gb3ZlcmxheUFyclsnbmFtZSddO1xuICAgICAgICB0aGlzLnByb3ZpZGVyICAgICAgPSBvdmVybGF5QXJyWydwcm92aWRlciddO1xuICAgICAgICB0aGlzLnN0eWxlICAgICAgICAgPSBvdmVybGF5QXJyWydzdHlsZSddO1xuICAgICAgICB0aGlzLnVybCAgICAgICAgICAgPSBvdmVybGF5QXJyWyd1cmwnXTtcbiAgICAgICAgdGhpcy51cmxzICAgICAgICAgID0gb3ZlcmxheUFyclsndXJscyddO1xuICAgICAgICB0aGlzLm9wYWNpdHkgICAgICAgPSBvdmVybGF5QXJyWydvcGFjaXR5J107XG4gICAgICAgIHRoaXMuYXR0cmlidXRpb24gICA9IG92ZXJsYXlBcnJbJ2F0dHJpYnV0aW9uJ107XG4gICAgICAgIHRoaXMuZ3V0dGVyICAgICAgICA9IG92ZXJsYXlBcnJbJ2d1dHRlciddO1xuICAgICAgICB0aGlzLnBhcmFtcyAgICAgICAgPSBvdmVybGF5QXJyWydwYXJhbXMnXTtcbiAgICAgICAgdGhpcy5sYXllciAgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3ZlcmxheUFyciAgICA9IG92ZXJsYXlBcnI7XG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlciAgICA9IG1hcENvbnRyb2xsZXJcbiAgICB9XG5cbiAgICBcblxuICAgIGNoYW5nZU9wYWNpdHkodmFsdWUpe1xuICAgICAgICB2YXIgbGF5ZXI7XG5cbiAgICAgICAgbGF5ZXIgPSB0aGlzLmxheWVyO1xuICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgICAgICAgICAgbGF5ZXIuc2V0T3BhY2l0eSh2YWx1ZS8xMDApO1xuICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihsYXllcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS5qcyJdLCJzb3VyY2VSb290IjoiIn0=