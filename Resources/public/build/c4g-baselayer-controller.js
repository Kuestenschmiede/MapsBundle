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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-baselayer-controller.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uZmlnLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1vdmVybGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS5qcyJdLCJuYW1lcyI6WyJDNGdCYXNlbGF5ZXJDb250cm9sbGVyIiwicHJveHkiLCJtYXBDb250cm9sbGVyIiwib3B0aW9ucyIsImFyckJhc2VsYXllcnMiLCJiYXNlbGF5ZXJJZHMiLCJzZWxmIiwialF1ZXJ5IiwiYWpheCIsImFwaV9iYXNlbGF5ZXJfdXJsIiwiZGF0YVR5cGUiLCJkYXRhIiwianNvbnAiLCJkb25lIiwiYmFzZWxheWVyIiwiYWRkQmFzZUxheWVycyIsImZhaWwiLCJjb25zb2xlIiwid2FybiIsInNwaW5uZXIiLCJoaWRlIiwiYWx3YXlzIiwiYmFzZWxheWVycyIsInVpZCIsImkiLCJqIiwic29ydCIsImEiLCJiIiwicGFyc2VJbnQiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpZCIsInV0aWxzIiwiZ2V0VW5pcXVlSWQiLCJwdXNoIiwiQzRnQmFzZWxheWVyIiwic2hvd0Jhc2VMYXllciIsImhhc092ZXJsYXlzIiwib3ZlcmxheXMiLCJvdmVybGF5Q29udHJvbGxlciIsImFyck92ZXJsYXlzIiwiQzRnT3ZlcmxheSIsImxheWVyIiwic2hvd092ZXJsYXlMYXllciIsImFjdGl2ZUJhc2VsYXllcklkIiwicHJvdmlkZXIiLCJzdHlsZSIsImJhc2VsYXllcnNfbG9hZGVkIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJob29rX2Jhc2VsYXllcl9sb2FkZWQiLCJsYXllck9wdGlvbnMiLCJiYXNlTGF5ZXJDb25maWciLCJzb3VyY2VDb25maWdzIiwibmV3QmFzZWxheWVyIiwibm9VcmwiLCJ1cmwiLCJ1cmxzIiwib2wiLCJUaWxlIiwic291cmNlIiwiWFlaIiwiZXh0ZW50IiwiZXh0ZW5kIiwib3NtIiwiT1NNIiwiJCIsInN0YW1lbiIsIlN0YW1lbiIsImFwaV9rZXkiLCJhcHBfaWQiLCJtYXBib3hfdHlwZSIsIm1hcGJveCIsInVybF9jbGFzc2ljIiwiaGlkZV9pbl9iZSIsImtsb2thbl90eXBlIiwiVmVjdG9yVGlsZSIsImtsb2thbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdsU3R5bGUiLCJvbG1zIiwiYXBwbHlTdHlsZSIsImhlcmVfdHlwZSIsImhlcmUiLCJ0aHVuZGVyZm9yZXN0X3R5cGUiLCJ0aHVuZGVyZm9yZXN0IiwiQmluZ01hcHMiLCJjdWx0dXJlIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiLCJrZXkiLCJpbWFnZXJ5U2V0IiwiaW5kZXhPZiIsIlRpbGVXTVMiLCJwYXJhbXMiLCJMQVlFUlMiLCJsYXllcnMiLCJWRVJTSU9OIiwidmVyc2lvbiIsIlRSQU5TUEFSRU5UIiwidHJhbnNwYXJlbnQiLCJndXR0ZXIiLCJhdHRyaWJ1dGlvbnMiLCJhdHRyaWJ1dGlvbiIsIkFUVFJJQlVUSU9OIiwiY3Jvc3NPcmlnaW4iLCJiYXNlTGF5ZXJHcm91cCIsImluZGV4IiwiaGFzT3duUHJvcGVydHkiLCJlbGVtZW50IiwiY3JlYXRlQmFzZUxheWVyIiwibWF4Wm9vbSIsIm1hcCIsImdldFZpZXciLCJnZXRSZXNvbHV0aW9uRm9yWm9vbSIsIm1pblpvb20iLCJzZXRNaW5SZXNvbHV0aW9uIiwic2V0TWF4UmVzb2x1dGlvbiIsIkdyb3VwIiwiYmFzZUxheWVyVWlkIiwiYWRkQmFzZWxheWVyIiwiYmFzZUxheWVycyIsInZpZXciLCJjb25maWciLCJhZGRpdGlvbmFsIiwiYWRkaXRpb25hbEF0dHJpYnV0aW9uIiwiZXhpc3RzIiwiZ2Vvc2VhcmNoX2F0dHJpYnV0aW9uIiwiZ2Vvc2VhcmNoIiwiZ2Vvc2VhcmNoX2VuZ2luZSIsImN1c3RvbV9hdHRyaWJ1dGlvbiIsImdlb3NlYXJjaEF0dHJpYnV0aW9uIiwic29ydGluZyIsImdldExheWVycyIsIml0ZW0iLCJnZXQiLCJmb3JFYWNoIiwiYXJyYXkiLCJzZXRWaXNpYmxlIiwiem9vbSIsImdldFpvb20iLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJzZXRab29tIiwibWFwRGF0YSIsInpvb21sZXZlbCIsIm1vdXNlcG9zaXRpb24iLCJjb250cm9sQ29udGFpbmVyVG9wTGVmdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNzc0NvbnN0YW50cyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiT0xfVU5TRUxFQ1RBQkxFIiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwicHJlcGVuZCIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0IiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIiLCJuZXdWaWV3IiwiVmlldyIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uIiwicm90YXRpb24iLCJnZXRSb3RhdGlvbiIsInJlc29sdXRpb24iLCJnZXRSZXNvbHV0aW9uIiwic2V0VmlldyIsInJlZHJhd01hcFZpZXciLCJob29rX2Jhc2VsYXllcl92aXNpYmlsaXR5IiwiY2VzaXVtIiwiZW5hYmxlIiwib2wzZCIsIm9sY3MiLCJPTENlc2l1bSIsImNyZWF0ZVN5bmNocm9uaXplcnMiLCJzZXRFbmFibGVkIiwiZ2V0RW5hYmxlZCIsImJhc2VsYXllckFyciIsImNvbnRyb2xsZXIiLCJwaWQiLCJkaXNwbGF5X25hbWUiLCJvc21fc3R5bGUiLCJvc21fc3R5bGVfdXJsMSIsIm9zbV9zdHlsZV91cmwyIiwib3NtX3N0eWxlX3VybDMiLCJvc21fc3R5bGVfdXJsNCIsIm9zbV9rZXluYW1lIiwiYmluZ19zdHlsZSIsIndtc19ndXR0ZXIiLCJwcm90ZWN0X2Jhc2VsYXllciIsInBlcm1pdHRlZF9ncm91cHMiLCJzdHlsZV91cmwiLCJsYXllckdyb3VwIiwiQzRnT3ZlcmxheUNvbnRyb2xsZXIiLCJjNGciLCJtYXBzIiwiQ3ljbGVNYXAiLCJHZXJtYW4iLCJHZXJtYW5UcmFuc3BvcnQiLCJMYW5kc2NhcGVNYXAiLCJNYXBuaWsiLCJUcmFuc3BvcnRNYXAiLCJOT05FIiwiVG9uZXIiLCJUb25lckxhYmVscyIsIlRvbmVyTGluZXMiLCJUZXJyYWluIiwiV2F0ZXJjb2xvciIsIm1hcHF1ZXN0IiwiTWFwUXVlc3RPcGVuIiwiTWFwUXVlc3RIeWIiLCJNYXBRdWVzdFNhdCIsIk1hcGJveCIsInRpbGVTaXplIiwiTWFwYm94Q2xhc3NpYyIsIk9wZW5NYXBUaWxlcyIsImZvcm1hdCIsIk1WVCIsInRpbGVHcmlkIiwidGlsZWdyaWQiLCJjcmVhdGVYWVoiLCJ0aWxlUGl4ZWxSYXRpbyIsIlRpbGVIb3N0aW5nIiwiSEVSRSIsIlRodW5kZXJmb3Jlc3QiLCJjb25zdGFudCIsImkxOG4iLCJMQU5HIiwiTkFNRSIsIkhJREUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfRURJVE9SIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJDVFJMX0lORk9QQUdFIiwiQ1RSTF9BRERJVElPTkFMUEFORUwiLCJDVFJMX0FDQ09VTlQiLCJDVFJMX1pPT01MRVZFTCIsIkNUUkxfTU9VU0VDT09SRFMiLCJDVFJMX0dFT1NFQVJDSCIsIkNUUkxfU1RBUlRfU0VBUkNIIiwiQ1RSTF9PVkVSVklFV01BUCIsIkNUUkxfR0VPQk9PS01BUktTIiwiQ1RSTF9TSURFQk9BUkQiLCJDVFJMX1NUQVJCT0FSRCIsIkNUUkxfQVRUUklCVVRJT04iLCJDVFJMX0dSSUQiLCJDVFJMX1BFUk1BTElOSyIsIkNUUkxfRlVMTFNDUkVFTiIsIkNUUkxfUFJJTlQiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0JBU0VMQVlFUiIsIlNUQVJCT0FSRF9MQVlFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTSURFQk9BUkQiLCJST1VURVJfVklFV19BRERSRVNTX0lOUFVUIiwiUk9VVEVSX0ZST01fTEFCRUwiLCJST1VURVJfT1ZFUl9MQUJFTCIsIlJPVVRFUl9UT19MQUJFTCIsIlJPVVRFUl9DTEVBUl9USVRMRSIsIlJPVVRFUl9DTEVBUl9IVE1MIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX0ZST00iLCJST1VURVJfVE8iLCJST1VURVJfRklORF9ST1VURSIsIlJPVVRFUl9MT0NfUk9VVEVfVE8iLCJST1VURVJfUk9VVEVERVNDIiwiUk9VVEVSX1JPVVRFTkFNRSIsIlJPVVRFUl9ESVNUQU5DRSIsIlJPVVRFUl9USU1FIiwiUk9VVEVSX1JFVl9HRU9DT0RJTkciLCJST1VURVJfRVJST1JfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9TRUFSQ0hJTkciLCJST1VURVJfRVJST1JfU0VBUkNISU5HIiwiUk9VVEVSX0NBTENfUk9VVEUiLCJST1VURVJfRVJST1JfQ0FMQ19ST1VURSIsIk1FQVNVUkVUT09MUyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJHRU9CT09LTUFSS1NfUExBQ0VIT0xERVIiLCJJTkZPUEFHRSIsIkFERElUSU9OQUxQQU5FTCIsIkFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwibGFuZ0NvbnN0YW50cyIsImNzcyIsIk9QRU4iLCJDTE9TRUFCTEUiLCJFTkFCTEVEIiwiRElTQUJMRUQiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQiLCJFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEUiLCJFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1QiLCJFRElUT1JfRFJBV19UUklHR0VSIiwiRURJVE9SX0NPTlRFTlRfU0VMRUNUIiwiRURJVE9SX0RSQVdfT1BUSU9OUyIsIkdFT1NFQVJDSCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiR0VPU0VBUkNIX1RSSUdHRVIiLCJHRU9TRUFSQ0hfU1RBUlQiLCJHUkFUSUNVTEUiLCJQUklOVCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIk9WRVJWSUVXTUFQIiwiT1ZFUlZJRVdNQVBfV1JBUFBFUiIsIkdFT0JPT0tNQVJLUyIsIlBFUk1BTElOSyIsIlBFUk1BTElOS19QT1BVUCIsIlBPUFVQX0NMT1NFIiwiUE9QVVBfUk9VVEVfV1JBUFBFUiIsIlBPUlRTSURFIiwiUE9SVFNJREVfQ09OVEFJTkVSIiwiUE9SVFNJREVfQ09OVFJPTCIsIlBPUlRTSURFX1dSQVBQRVIiLCJQT1JUU0lERV9USVRMRUJBUiIsIlBPUlRTSURFX1RPUF9UT09MQkFSIiwiUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVIiLCJQT1JUU0lERV9CT1RUT01fVE9PTEJBUiIsIlBPUlRTSURFX1NUQVRVU0JBUiIsIlBPUlRTSURFX1ZJRVdUUklHR0VSQkFSIiwiUE9SVFNJREVfSEVBRExJTkUiLCJQT1JUU0lERV9CVVRUT05CQVIiLCJQT1JUU0lERV9CVVRUT04iLCJQT1JUU0lERV9ISURFIiwiUE9SVFNJREVfQ0xPU0UiLCJTUElOTkVSIiwiU1RBUkJPQVJEX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9DT05UUk9MIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfVElUTEVCQVIiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVIiLCJTVEFSQk9BUkRfU1RBVFVTQkFSIiwiU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiU1RBUkJPQVJEX0JVVFRPTkJBUiIsIlNUQVJCT0FSRF9CVVRUT04iLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJjb250cm9sIiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwibWFwVmlldyIsInVuZGVmaW5lZEhUTUwiLCJpbm5lckhUTUwiLCJvbiIsIkNvbnRyb2wiLCJjYWxsIiwidGFyZ2V0IiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlR2VvSnNvblByb3BlcnR5IiwiaW5wdXQiLCJvdXRwdXQiLCJyZXBsYWNlIiwiZGVjb2RlR2VvSnNvblByb3BlcnR5Iiwic2V0VXJsUGFyYW0iLCJwYXJhbSIsIm9wdF9nZXRLZXkiLCJvcHRfZXhlY3V0ZSIsImxpbmsiLCJzZWFyY2hQYXJhbSIsInBhcmFtUmVwbGFjZWQiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiaGFzaCIsInNlYXJjaCIsIm1hdGNoIiwidmFsdWUiLCJvZmZzZXQiLCJvcmlnaW5TdHJpbmciLCJnZXRVcmxQYXJhbSIsInJlZ0V4Iiwic3Vic3RyaW5nIiwiUmVnRXhwIiwiZXhlYyIsImRlbHRhRW5jb2RlIiwiYXJySW5wdXQiLCJhcnJPdXRwdXQiLCJkZWx0YURlY29kZSIsImlzTmFOIiwiYXJySG9va0Z1bmN0aW9ucyIsInBhcmFtZXRlcnMiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJoZXgiLCJvcHRfb3BhY2l0eSIsIm9wdF9hcnJheSIsImJpZ2ludCIsInIiLCJnIiwicmVkdWNlU3R5bGUiLCJzdHlsZUlkIiwicmVkdWNlZFN0eWxlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsb2NhdGlvblN0eWxlcyIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJzZXRXaWR0aCIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJmaWxsIiwic3Ryb2tlIiwicmFkaXVzIiwibWVhc3VyZUdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJvcHRfZm9yY2VMaW5lTWVhc3VyZSIsIm9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlIiwic3BoZXJlIiwiY29vcmRpbmF0ZXMiLCJjb29yZDEiLCJjb29yZDIiLCJyZXN1bHQiLCJnZW9tIiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJnZXRDb29yZGluYXRlcyIsInByb2oiLCJ0cmFuc2Zvcm0iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJ0b0ZpeGVkIiwiaHRtbFZhbHVlIiwiYWJzIiwiZ2V0QXJlYSIsImdldFJhZGl1cyIsImVkZ2VDb29yZGluYXRlIiwiUEkiLCJzcXJ0IiwiZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcyIsImFyckdlb21ldHJpZXMiLCJleHRlbnRTb3VyY2UiLCJWZWN0b3IiLCJhZGRGZWF0dXJlcyIsImdldEV4dGVudCIsIkV4dGVudCIsImZpdFRvRXh0ZW50cyIsImV4dGVudHMiLCJvcHRfcGFkZGluZyIsIm9wdF9hbmltYXRpb25EdXJhdGlvbiIsInBhZGRpbmciLCJmaXRUb0V4dGVudCIsIm9wdF9taW5ab29tIiwib3B0X21heFpvb20iLCJvcHRfbWluUmVzb2x1dGlvbiIsImZpdE9wdGlvbnMiLCJtaW5SZXNvbHV0aW9uIiwiYW5pbWF0ZSIsInN0YXJ0IiwiRGF0ZSIsImR1cmF0aW9uIiwiZml0IiwiZ2V0U2l6ZSIsImUiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwic3RySW5wdXQiLCJmZWF0dXJlIiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwiZnVuY3Rpb25OYW1lIiwid2luZG93IiwiZ2V0U3R5bGUiLCJ0eXBlIiwiZXZLZXkiLCJlZGl0b3JWYXJzIiwibGFiZWwiLCJhdHRyIiwib2JqZWN0VG9BcnJheSIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJnZXRWZWN0b3JMYXllciIsImZuU3R5bGUiLCJnZXRDdXJyZW50U3ViZG9tYWluIiwiaHJlZiIsInNjYWxlbGluZSIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9scyIsIlNjYWxlTGluZSIsImFkZENvbnRyb2wiLCJhcHBlbmQiLCJNb3VzZVBvc2l0aW9uIiwiY29vcmRpbmF0ZUZvcm1hdCIsImNvb3JkaW5hdGUiLCJ0b1N0cmluZ0hETVMiLCJnZXRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsInN0b3JlVmFsdWUiLCJvdmVybGF5SWQiLCJvdmVybGF5TGF5ZXJDb25maWciLCJvc21Tb3VyY2VDb25maWdzIiwic3RhbWVuU291cmNlQ29uZmlncyIsIm92ZXJsYXlMYXllciIsImFwaUtleSIsInNldE9wYWNpdHkiLCJvcGFjaXR5Iiwib3ZlcmxheUFyciIsInJlbW92ZUxheWVyIiwiYWRkTGF5ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FB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QUFuQixDQUF1QnVoQixXQUF2QixDQUFtQ2ptQixLQUFuQztBQUNBQSxzQkFBTThsQixVQUFOLENBQWlCbkksUUFBTSxHQUF2QjtBQUNBLHFCQUFLcmdCLGFBQUwsQ0FBbUJvSCxHQUFuQixDQUF1QndoQixRQUF2QixDQUFnQ2xtQixLQUFoQztBQUNIO0FBQ0o7QUE5Qkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImM0Zy1iYXNlbGF5ZXItY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLWNvbnRyb2xsZXIuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJpbXBvcnQge0M0Z0Jhc2VsYXllcn0gZnJvbSBcIi4vYzRnLWJhc2VsYXllclwiO1xuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbmZpZ1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdCYXNlbGF5ZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm94eSkge1xuICAgICAgICB0aGlzLnByb3h5ID0gcHJveHk7XG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5hcnJCYXNlbGF5ZXJzID0ge307XG4gICAgICAgIHRoaXMuYmFzZWxheWVySWRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZEJhc2VMYXllcnMoKSB7XG4gICAgICAgIHZhciBzZWxmO1xuXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGpRdWVyeS5hamF4KHRoaXMucHJveHkuYXBpX2Jhc2VsYXllcl91cmwse1xuICAgICAgICAgICAgZGF0YVR5cGU6IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmpzb25wID8gXCJqc29ucFwiIDogXCJqc29uXCJcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYmFzZWxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkQmFzZUxheWVycyhkYXRhLmJhc2VsYXllcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBAVE9ETyBlcnJvci1tZXNzYWdlc1xuICAgICAgICAgICAgICAgIC8vICAgMSkgVmlzaWJsZSBtZXNzYWdlIDQgdXNlcnMgKGkxOG4pXG4gICAgICAgICAgICAgICAgLy8gICAyKSBUZWNobmljYWwgY29uc29sZS53YXJuXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBlcnJvciBvY2N1cmVkIHdoaWxlIHRyeWluZyB0byBsb2FkIHRoZSBiYXNlbGF5ZXJzLiBEbyB5b3UgaGF2ZSBjb25maWd1cmVkIGEgZGVmYXVsdCBwcm9maWxlIHdpdGggYmFzZWxheWVycz8nKTtcbiAgICAgICAgICAgICAgICBzZWxmLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vc2VsZi5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9Ly8gZW5kIG9mIFwibG9hZEJhc2VMYXllcnMoKVwiXG5cbiAgICBhZGRCYXNlTGF5ZXJzKGJhc2VsYXllcnMpIHtcbiAgICAgICAgdmFyIGJhc2VsYXllcixcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIC8vIHNvcnQgYmFzZWxheWVyIChmb3IgaW50ZXJuYWwgbGlzdClcbiAgICAgICAgYmFzZWxheWVycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoKCFhLnNvcnQgJiYgIWIuc29ydCkgfHwgKHBhcnNlSW50KGEuc29ydCwgMTApID09PSBwYXJzZUludChiLnNvcnQsIDEwKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWEubmFtZSB8fCAhYi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoIWIubmFtZSkgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoYS5uYW1lLnRvTG93ZXJDYXNlKCkgPiBiLm5hbWUudG9Mb3dlckNhc2UoKSkgPyAxIDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWEuc29ydCB8fCAhYi5zb3J0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICghYi5zb3J0KSA/IC0xIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQoYS5zb3J0LCAxMCkgPiBwYXJzZUludChiLnNvcnQsIDEwKSkgPyAxIDogLTE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJ1aWxkIGJhc2VsYXllci1saXN0XG4gICAgICAgIGlmIChiYXNlbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBiYXNlbGF5ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cbiAgICAgICAgICAgICAgICBiYXNlbGF5ZXIgPSBiYXNlbGF5ZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgdWlkID0gYmFzZWxheWVyLmlkIHx8IHV0aWxzLmdldFVuaXF1ZUlkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlbGF5ZXJJZHMucHVzaCh1aWQpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0gPSBuZXcgQzRnQmFzZWxheWVyKGJhc2VsYXllciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQFRPRE86IGNoZWNrIGluaXRpYWwgYmFzZWxheWVyLWhhbmRsaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllciAmJiBwYXJzZUludCh1aWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyLCAxMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QmFzZUxheWVyKHVpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0uaGFzT3ZlcmxheXMpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqPCB0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5cy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbdGhpcy5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0uaWRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1t0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXS5pZF0gPSBuZXcgQzRnT3ZlcmxheSh0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXSwgdGhpcy5tYXBDb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1t0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5c1tqXS5pZF0ubGF5ZXIgPSB0aGlzLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5zaG93T3ZlcmxheUxheWVyKHRoaXMuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlzW2pdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVCYXNlbGF5ZXJJZCkge1xuICAgICAgICAgICAgLy8gbm8gYmFzZWxheWVyIHdhcyBhY3RpdmF0ZWRcbiAgICAgICAgICAgIGlmIChiYXNlbGF5ZXJzLmxlbmd0aCA+IDAgJiYgYmFzZWxheWVyc1swXS5pZCkge1xuICAgICAgICAgICAgICAgIC8vIHRha2UgZmlyc3QgYmFzZWxheWVyIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgdWlkID0gYmFzZWxheWVyc1swXS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGJ1aWxkIGRlZmF1bHQgYmFzZWxheWVyXG4gICAgICAgICAgICAgICAgdWlkID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VsYXllcklkcy5wdXNoKHVpZCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFyckJhc2VsYXllcnNbdWlkXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJhc2VsYXllcnNbdWlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2M0Z19kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiAnb3NtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnTWFwbmlrJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hvd0Jhc2VMYXllcih1aWQpO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm94eS5iYXNlbGF5ZXJzX2xvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnModGhpcy5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQsIHRoaXMuYmFzZWxheWVySWRzKTtcbiAgICB9IC8vIGVuZCBvZiBcImFkZEJhc2VMYXllcnMoKVwiXG4gICAgY3JlYXRlQmFzZUxheWVyKGxheWVyT3B0aW9ucywgYmFzZUxheWVyQ29uZmlnLCBzb3VyY2VDb25maWdzKXtcbiAgICAgICAgdmFyIG5ld0Jhc2VsYXllcjtcbiAgICAgICAgbGF5ZXJPcHRpb25zID0gbGF5ZXJPcHRpb25zIHx8IHt9O1xuICAgICAgICBzd2l0Y2ggKGJhc2VMYXllckNvbmZpZy5wcm92aWRlcikge1xuICAgICAgICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgICAgICAgLy8gY3VzdG9tXG4gICAgICAgICAgICAgIGxldCBub1VybCA9IHRydWU7XG4gICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcudXJsKSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGJhc2VMYXllckNvbmZpZy51cmw7XG4gICAgICAgICAgICAgICAgbm9VcmwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlTGF5ZXJDb25maWcudXJscykge1xuICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmxzID0gYmFzZUxheWVyQ29uZmlnLnVybHM7XG4gICAgICAgICAgICAgICAgbm9VcmwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIW5vVXJsKSB7XG4gICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWihsYXllck9wdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgZXh0ZW50OiBiYXNlTGF5ZXJDb25maWcuZXh0ZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjdXN0b20gdXJsKHMpIG1pc3NpbmcgLT4gc3dpdGNoIHRvIGRlZmF1bHQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnb3NtJzpcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlQ29uZmlncy5vc21bYmFzZUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuT1NNKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLm9zbVtiYXNlTGF5ZXJDb25maWcuc3R5bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlQ29uZmlncy5zdGFtZW5bYmFzZUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFtZW5cbiAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlN0YW1lbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQ29uZmlncy5zdGFtZW5bYmFzZUxheWVyQ29uZmlnLnN0eWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChtYXBRdWVzdFNvdXJjZUNvbmZpZ3NbYmFzZUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIG1hcFF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLk1hcFF1ZXN0KG1hcFF1ZXN0U291cmNlQ29uZmlnc1tiYXNlTGF5ZXJDb25maWcuc3R5bGVdKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlID09PSAnb3NtX2N1c3RvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1VybCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gYmFzZUxheWVyQ29uZmlnLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVXJsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZUxheWVyQ29uZmlnLnVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmxzID0gYmFzZUxheWVyQ29uZmlnLnVybHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBub1VybCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9VcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKGxheWVyT3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdjdXN0b20gdXJsKHMpIG1pc3NpbmcgLT4gc3dpdGNoIHRvIGRlZmF1bHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5zdXBwb3J0ZWQgb3NtLXN0eWxlIC0+IHN3aXRjaCB0byBkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWFwYm94JzpcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLmFwaV9rZXkgJiYgYmFzZUxheWVyQ29uZmlnLmFwcF9pZCAmJiBiYXNlTGF5ZXJDb25maWcubWFwYm94X3R5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLm1hcGJveF90eXBlID09PSAnTWFwYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGJhc2VMYXllckNvbmZpZy51cmwgKyBiYXNlTGF5ZXJDb25maWcuYXBwX2lkICsgJy90aWxlcy97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49JyArIGJhc2VMYXllckNvbmZpZy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoc291cmNlQ29uZmlncy5tYXBib3hbYmFzZUxheWVyQ29uZmlnLm1hcGJveF90eXBlXSwgbGF5ZXJPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGJhc2VMYXllckNvbmZpZy51cmxfY2xhc3NpYyArIGJhc2VMYXllckNvbmZpZy5hcHBfaWQgKyAnL3t6fS97eH0ve3l9LnBuZz9hY2Nlc3NfdG9rZW49JyArIGJhc2VMYXllckNvbmZpZy5hcGlfa2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWihqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLm1hcGJveFtiYXNlTGF5ZXJDb25maWcubWFwYm94X3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihiYXNlTGF5ZXJDb25maWcuaGlkZV9pbl9iZSl7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBcImNvbjRnaXMvYmFzZUxheWVyVGlsZVNlcnZpY2UvXCIgKyBiYXNlTGF5ZXJDb25maWcuaWQgKyBcIi97en0ve3h9L3t5fVwiO1xuICAgICAgICAgICAgICAgICAgICBuZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuWFlaKCQuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3MubWFwYm94W2Jhc2VMYXllckNvbmZpZy5tYXBib3hfdHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIG1hcGJveCBjb25maWd1cmF0aW9uIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2tsb2thbic6XG4gICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5hcGlfa2V5ICYmIGJhc2VMYXllckNvbmZpZy5rbG9rYW5fdHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcua2xva2FuX3R5cGUgPT09ICdPcGVuTWFwVGlsZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gYmFzZUxheWVyQ29uZmlnLnVybCArICd7en0ve3h9L3t5fS5wYmYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlZlY3RvclRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5WZWN0b3JUaWxlKGpRdWVyeS5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3Mua2xva2FuW2Jhc2VMYXllckNvbmZpZy5rbG9rYW5fdHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Ub0RvIHN0eWxlIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goYmFzZUxheWVyQ29uZmlnLnVybCArICcvc3R5bGVzLycrYmFzZUxheWVyQ29uZmlnLnN0eWxlKycvc3R5bGUuanNvbicpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihnbFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sbXMuYXBwbHlTdHlsZShuZXdCYXNlbGF5ZXIsIGdsU3R5bGUsICdvcGVubWFwdGlsZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IGJhc2VMYXllckNvbmZpZy51cmwgKyAnL2RhdGEvdjMve3p9L3t4fS97eX0ucGJmP2tleT0nK2Jhc2VMYXllckNvbmZpZy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlZlY3RvclRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5WZWN0b3JUaWxlKGpRdWVyeS5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3Mua2xva2FuW2Jhc2VMYXllckNvbmZpZy5rbG9rYW5fdHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goYmFzZUxheWVyQ29uZmlnLnVybCArICcvc3R5bGVzLycrYmFzZUxheWVyQ29uZmlnLnN0eWxlKycvc3R5bGUuanNvbj9rZXk9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGdsU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xtcy5hcHBseVN0eWxlKG5ld0Jhc2VsYXllciwgZ2xTdHlsZSwgJ29wZW5tYXB0aWxlcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIGtsb2thbiBjb25maWd1cmF0aW9uIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hlcmUnOlxuICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuYXBpX2tleSAmJiBiYXNlTGF5ZXJDb25maWcuYXBwX2lkICYmIGJhc2VMYXllckNvbmZpZy5oZXJlX3R5cGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlID09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gJ2h0dHBzOi8vezEtNH0uYmFzZS5tYXBzLmNpdC5hcGkuaGVyZS5jb20vbWFwdGlsZS8yLjEvbWFwdGlsZS9uZXdlc3Qvbm9ybWFsLmRheS97en0ve3h9L3t5fS8yNTYvcG5nJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz9hcHBfaWQ9JytiYXNlTGF5ZXJDb25maWcuYXBwX2lkKycmYXBwX2NvZGU9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuc3R5bGUgPT0gJ3RyYW5zaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gJ2h0dHBzOi8vezEtNH0uYmFzZS5tYXBzLmNpdC5hcGkuaGVyZS5jb20vbWFwdGlsZS8yLjEvbWFwdGlsZS9uZXdlc3Qvbm9ybWFsLmRheS50cmFuc2l0L3t6fS97eH0ve3l9LzI1Ni9wbmcnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnP2FwcF9pZD0nK2Jhc2VMYXllckNvbmZpZy5hcHBfaWQrJyZhcHBfY29kZT0nK2Jhc2VMYXllckNvbmZpZy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5zdHlsZSA9PSAncGVkZXN0cmlhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSAnaHR0cHM6Ly97MS00fS5iYXNlLm1hcHMuY2l0LmFwaS5oZXJlLmNvbS9tYXB0aWxlLzIuMS9tYXB0aWxlL25ld2VzdC9wZWRlc3RyaWFuLmRheS97en0ve3h9L3t5fS8yNTYvcG5nJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz9hcHBfaWQ9JytiYXNlTGF5ZXJDb25maWcuYXBwX2lkKycmYXBwX2NvZGU9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuc3R5bGUgPT0gJ3RlcnJhaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gJ2h0dHBzOi8vezEtNH0uYWVyaWFsLm1hcHMuY2l0LmFwaS5oZXJlLmNvbS9tYXB0aWxlLzIuMS9tYXB0aWxlL25ld2VzdC90ZXJyYWluLmRheS97en0ve3h9L3t5fS8yNTYvcG5nJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz9hcHBfaWQ9JytiYXNlTGF5ZXJDb25maWcuYXBwX2lkKycmYXBwX2NvZGU9JytiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuc3R5bGUgPT0gJ3NhdGVsbGl0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSAnaHR0cHM6Ly97MS00fS5hZXJpYWwubWFwcy5jaXQuYXBpLmhlcmUuY29tL21hcHRpbGUvMi4xL21hcHRpbGUvbmV3ZXN0L3NhdGVsbGl0ZS5kYXkve3p9L3t4fS97eX0vMjU2L3BuZycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc/YXBwX2lkPScrYmFzZUxheWVyQ29uZmlnLmFwcF9pZCsnJmFwcF9jb2RlPScrYmFzZUxheWVyQ29uZmlnLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLnN0eWxlID09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gJ2h0dHBzOi8vezEtNH0uYWVyaWFsLm1hcHMuY2l0LmFwaS5oZXJlLmNvbS9tYXB0aWxlLzIuMS9tYXB0aWxlL25ld2VzdC9oeWJyaWQuZGF5L3t6fS97eH0ve3l9LzI1Ni9wbmcnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnP2FwcF9pZD0nK2Jhc2VMYXllckNvbmZpZy5hcHBfaWQrJyZhcHBfY29kZT0nK2Jhc2VMYXllckNvbmZpZy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWigkLmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLmhlcmVbYmFzZUxheWVyQ29uZmlnLmhlcmVfdHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoYmFzZUxheWVyQ29uZmlnLmhpZGVfaW5fYmUpe1xuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gbGF5ZXJPcHRpb25zLnVybCA9IFwiY29uNGdpcy9iYXNlTGF5ZXJUaWxlU2VydmljZS9cIiArIGJhc2VMYXllckNvbmZpZy5pZCArIFwiL3t6fS97eH0ve3l9XCI7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooJC5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQ29uZmlncy5tYXBib3hbYmFzZUxheWVyQ29uZmlnLmhlcmVfdHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIEhFUkUgY29uZmlndXJhdGlvbiEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aHVuZGVyJzpcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLmFwaV9rZXkgJiYgYmFzZUxheWVyQ29uZmlnLnRodW5kZXJmb3Jlc3RfdHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBcImh0dHBzOi8vdGlsZS50aHVuZGVyZm9yZXN0LmNvbS9cIitiYXNlTGF5ZXJDb25maWcuc3R5bGUrXCIve3p9L3t4fS97eX0ucG5nP2FwaWtleT1cIitiYXNlTGF5ZXJDb25maWcuYXBpX2tleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooalF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VDb25maWdzLnRodW5kZXJmb3Jlc3RbYmFzZUxheWVyQ29uZmlnLnRodW5kZXJmb3Jlc3RfdHlwZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zKSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYmFzZUxheWVyQ29uZmlnLmhpZGVfaW5fYmUpe1xuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJsID0gXCJjb240Z2lzL2Jhc2VMYXllclRpbGVTZXJ2aWNlL1wiICsgYmFzZUxheWVyQ29uZmlnLmlkICsgXCIve3p9L3t4fS97eX1cIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWihqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3MubWFwYm94W2Jhc2VMYXllckNvbmZpZy50aHVuZGVyZm9yZXN0X3R5cGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBUaHVuZGVyZm9yZXN0IGNvbmZpZ3VyYXRpb24hJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ29vZ2xlJzpcbiAgICAgICAgICAgICAgICAvL0B0b2RvXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdnb29nbGUtbWFwcyBhcmUgY3VycmVudGx5IHVuc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdiaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUxheWVyQ29uZmlnLmFwaV9rZXkgJiYgYmFzZUxheWVyQ29uZmlnLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5CaW5nTWFwcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VsdHVyZTogbmF2aWdhdG9yLmxhbmd1YWdlcyA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYmFzZUxheWVyQ29uZmlnLmFwaV9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeVNldDogYmFzZUxheWVyQ29uZmlnLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIGJpbmcta2V5IG9yIGludmFsaWQgaW1hZ2VyeS1zZXQhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd21zJzpcbiAgICAgICAgICAgICAgICBpZihiYXNlTGF5ZXJDb25maWcudXJsLmluZGV4T2YoJ2h0dHBzJykgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlRpbGVXTVMoe1xuICAgICAgICAgICAgICAgICAgICAgIHVybDogYmFzZUxheWVyQ29uZmlnLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSUzogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy5sYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBWRVJTSU9OOiBiYXNlTGF5ZXJDb25maWcucGFyYW1zLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZPUk1BVDogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVDogYmFzZUxheWVyQ29uZmlnLnBhcmFtcy50cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyOiBiYXNlTGF5ZXJDb25maWcuZ3V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogYmFzZUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cydcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZW50OiBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChbNS41OTMzNCwgNTAuMDU3OCwgOS43NDE1OCwgNTIuNzk5OF0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuVGlsZVdNUyh7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiBiYXNlTGF5ZXJDb25maWcudXJsLFxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgTEFZRVJTOiBiYXNlTGF5ZXJDb25maWcucGFyYW1zLmxheWVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFZFUlNJT046IGJhc2VMYXllckNvbmZpZy5wYXJhbXMudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRk9STUFUOiBiYXNlTGF5ZXJDb25maWcucGFyYW1zLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRSQU5TUEFSRU5UOiBiYXNlTGF5ZXJDb25maWcucGFyYW1zLnRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI6IGJhc2VMYXllckNvbmZpZy5ndXR0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb25zOiBiYXNlTGF5ZXJDb25maWcuYXR0cmlidXRpb24gKyAnICcgKyBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgLy9leHRlbnQ6IG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KFs1LjU5MzM0LCA1MC4wNTc4LCA5Ljc0MTU4LCA1Mi43OTk4XSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvd20nOlxuICAgICAgICAgICAgICAgIG5ld0Jhc2VsYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWih7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGJhc2VMYXllckNvbmZpZy51cmwgKyBiYXNlTGF5ZXJDb25maWcuYXBwX2lkICsgJy97en0ve3h9L3t5fT9oYXNoPScgKyBiYXNlTGF5ZXJDb25maWcuYXBpX2tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogYmFzZUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTlxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgLy9leHRlbnQ6IG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KFs1LjU5MzM0LCA1MC4wNTc4LCA5Ljc0MTU4LCA1Mi43OTk4XSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgICAgICAgIGxldCBiYXNlTGF5ZXJHcm91cCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaW5kZXggaW4gYmFzZUxheWVyQ29uZmlnWydsYXllckdyb3VwJ10pe1xuICAgICAgICAgICAgICAgICAgaWYoYmFzZUxheWVyQ29uZmlnWydsYXllckdyb3VwJ10uaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmNyZWF0ZUJhc2VMYXllcihudWxsLCBiYXNlTGF5ZXJDb25maWdbJ2xheWVyR3JvdXAnXVtpbmRleF0sIHNvdXJjZUNvbmZpZ3MpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Wm9vbSA9IHRoaXMucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0UmVzb2x1dGlvbkZvclpvb20oYmFzZUxheWVyQ29uZmlnWydsYXllckdyb3VwJ11baW5kZXhdWydtaW5ab29tJ10pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWluWm9vbSA9IHRoaXMucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0UmVzb2x1dGlvbkZvclpvb20oYmFzZUxheWVyQ29uZmlnWydsYXllckdyb3VwJ11baW5kZXhdWydtYXhab29tJ10pO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldE1pblJlc29sdXRpb24obWluWm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0TWF4UmVzb2x1dGlvbihtYXhab29tKTtcbiAgICAgICAgICAgICAgICAgICAgYmFzZUxheWVyR3JvdXAucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBiYXNlTGF5ZXJHcm91cFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bnN1cHBvcnRlZCBwcm92aWRlcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdCYXNlbGF5ZXI7XG5cbiAgICB9XG4gICAgc2hvd0Jhc2VMYXllcihiYXNlTGF5ZXJVaWQpIHtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgICBiYXNlbGF5ZXIsXG4gICAgICAgICAgICBhZGRCYXNlbGF5ZXIsXG4gICAgICAgICAgICBiYXNlTGF5ZXJzLFxuICAgICAgICAgICAgc291cmNlQ29uZmlncyA9IFtdLFxuICAgICAgICAgICAgbmV3QmFzZWxheWVyLFxuICAgICAgICAgICAgbGF5ZXJPcHRpb25zLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHZpZXc7XG5cbiAgICAgICAgbGV0IGJhc2VMYXllckNvbmZpZyA9IHRoaXMuYXJyQmFzZWxheWVyc1tiYXNlTGF5ZXJVaWRdO1xuXG5cbiAgICAgICAgaWYgKCh0eXBlb2YgYmFzZUxheWVyQ29uZmlnICE9PSBcInVuZGVmaW5lZFwiKSAmJiAhYmFzZUxheWVyQ29uZmlnLmxheWVyKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgbGF5ZXJcbiAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3Mub3NtID0gY29uZmlnLm9zbTtcbiAgICAgICAgICAgIHNvdXJjZUNvbmZpZ3Muc3RhbWVuID0gY29uZmlnLnN0YW1lbjtcbiAgICAgICAgICAgIC8vbWFwUXVlc3RTb3VyY2VDb25maWdzID0gYzRnLm1hcHMuY29uZmlnLm1hcHF1ZXN0O1xuICAgICAgICAgICAgc291cmNlQ29uZmlncy5tYXBib3ggPSBjb25maWcubWFwYm94O1xuICAgICAgICAgICAgc291cmNlQ29uZmlncy5rbG9rYW4gPSBjb25maWcua2xva2FuO1xuICAgICAgICAgICAgc291cmNlQ29uZmlncy5oZXJlID0gY29uZmlnLmhlcmU7XG4gICAgICAgICAgICBzb3VyY2VDb25maWdzLnRodW5kZXJmb3Jlc3QgPSBjb25maWcudGh1bmRlcmZvcmVzdDtcblxuICAgICAgICAgICAgLy9uZXdCYXNlbGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAvLyAgc291cmNlOiBuZXcgb2wuc291cmNlLk9TTSgpXG4gICAgICAgICAgICAvL30pO1xuXG4gICAgICAgICAgICBsYXllck9wdGlvbnMgPSB7fTtcblxuICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5hdHRyaWJ1dGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChsYXllck9wdGlvbnMuYXR0cmlidXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zICsgJyAnICsgYmFzZUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OICsgJyAnICsgYmFzZUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGJhc2VMYXllckNvbmZpZy5wcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvc20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNvbmZpZ3Muc3RhbWVuW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gc291cmNlQ29uZmlncy5zdGFtZW5bYmFzZUxheWVyQ29uZmlnLnN0eWxlXS5hdHRyaWJ1dGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwUXVlc3RTb3VyY2VDb25maWdzW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IG1hcFF1ZXN0U291cmNlQ29uZmlnc1tiYXNlTGF5ZXJDb25maWcuc3R5bGVdLmF0dHJpYnV0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VDb25maWdzLm9zbVtiYXNlTGF5ZXJDb25maWcuc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IHNvdXJjZUNvbmZpZ3Mub3NtW2Jhc2VMYXllckNvbmZpZy5zdHlsZV0uYXR0cmlidXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtYXBib3gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IHNvdXJjZUNvbmZpZ3MubWFwYm94W2Jhc2VMYXllckNvbmZpZy5tYXBib3hfdHlwZV0uYXR0cmlidXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2tsb2thbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gc291cmNlQ29uZmlncy5rbG9rYW5bYmFzZUxheWVyQ29uZmlnLmtsb2thbl90eXBlXS5hdHRyaWJ1dGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaGVyZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gc291cmNlQ29uZmlncy5oZXJlW2Jhc2VMYXllckNvbmZpZy5oZXJlX3R5cGVdLmF0dHJpYnV0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aHVuZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBzb3VyY2VDb25maWdzLnRodW5kZXJmb3Jlc3RbYmFzZUxheWVyQ29uZmlnLnRodW5kZXJmb3Jlc3RfdHlwZV0uYXR0cmlidXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Ub0RvIGhlbHBlciBjbGFzcyBmb3IgYXR0cmlidXRpb25zXG5cbiAgICAgICAgICAgIC8vYWRkaXRpb25hbCBhdHRyaWJ1dGlvblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwQ29udHJvbGxlci5kYXRhICYmIHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmF0dHJpYnV0aW9uICYmIHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmF0dHJpYnV0aW9uLmFkZGl0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkaXRpb25hbEF0dHJpYnV0aW9uID0gdGhpcy5tYXBDb250cm9sbGVyLmRhdGEuYXR0cmlidXRpb24uYWRkaXRpb25hbDtcblxuICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllck9wdGlvbnMuYXR0cmlidXRpb25zW2ldID09IGFkZGl0aW9uYWxBdHRyaWJ1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgKyAnICcgKyBhZGRpdGlvbmFsQXR0cmlidXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zID0gdGhpcy5tYXBDb250cm9sbGVyLmRhdGEuYXR0cmlidXRpb24uYWRkaXRpb25hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVG9EbyB0eXBlIGNsYXNzIGZvciBnZW9zZWFyY2hfZW5naW5lXG4gICAgICAgICAgICAvL2dlb3NlYXJjaCBhdHRyaWJ1dGlvblxuICAgICAgICAgICAgdmFyIGdlb3NlYXJjaF9hdHRyaWJ1dGlvbiA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaCkge1xuICAgICAgICAgICAgICAgIHZhciBnZW9zZWFyY2hfZW5naW5lID0gdGhpcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLmdlb3NlYXJjaF9lbmdpbmU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBDb250cm9sbGVyLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLmRhdGEuYXR0cmlidXRpb24pIHtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGdlb3NlYXJjaF9lbmdpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb3NlYXJjaF9hdHRyaWJ1dGlvbiA9ICcnOyAvL2NvbjRnaXMgbWFwc2VydmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guY3VzdG9tX2F0dHJpYnV0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb3NlYXJjaF9hdHRyaWJ1dGlvbiA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5jdXN0b21fYXR0cmlidXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2Vvc2VhcmNoX2F0dHJpYnV0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vbWluYXRpbSBTZWFyY2ggQ291cnRlc3kgb2YgPGEgaHJlZj1cImh0dHA6Ly93d3cubWFwcXVlc3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPk1hcFF1ZXN0PC9hPiA8aW1nIHNyYz1cImh0dHA6Ly9kZXZlbG9wZXIubWFwcXVlc3QuY29tL2NvbnRlbnQvb3NtL21xX2xvZ28ucG5nXCIgYWx0PVwiXCIgLz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb3NlYXJjaF9hdHRyaWJ1dGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOb21pbmF0aW0gU2VhcmNoIENvdXJ0ZXN5IG9mIDxhIGhyZWY9XCJodHRwOi8vd2lraS5vcGVuc3RyZWV0bWFwLm9yZy93aWtpL05vbWluYXRpbV91c2FnZV9wb2xpY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5PcGVuU3RyZWV0TWFwPC9hPic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBnZW9zZWFyY2hBdHRyaWJ1dGlvbiA9IGdlb3NlYXJjaF9hdHRyaWJ1dGlvbjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsYXllck9wdGlvbnMuYXR0cmlidXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9uc1tpXSA9PSBnZW9zZWFyY2hBdHRyaWJ1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgKyAnICcgKyBnZW9zZWFyY2hBdHRyaWJ1dGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBnZW9zZWFyY2hBdHRyaWJ1dGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5zb3J0aW5nKSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnNvcnQgPSBiYXNlTGF5ZXJDb25maWcuc29ydGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcubWluWm9vbSAmJiBiYXNlTGF5ZXJDb25maWcubWluWm9vbSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLm1pblpvb20gPSBiYXNlTGF5ZXJDb25maWcubWluWm9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcubWF4Wm9vbSAmJiBiYXNlTGF5ZXJDb25maWcubWF4Wm9vbSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLm1heFpvb20gPSBiYXNlTGF5ZXJDb25maWcubWF4Wm9vbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3QmFzZWxheWVyID0gdGhpcy5jcmVhdGVCYXNlTGF5ZXIobGF5ZXJPcHRpb25zLCBiYXNlTGF5ZXJDb25maWcsIHNvdXJjZUNvbmZpZ3MpO1xuICAgICAgICAgICAgaWYoYmFzZUxheWVyQ29uZmlnLmhhc092ZXJsYXlzKXtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpPCBiYXNlTGF5ZXJDb25maWcub3ZlcmxheXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZighYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2Jhc2VMYXllckNvbmZpZy5vdmVybGF5c1tpXS5pZF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW2Jhc2VMYXllckNvbmZpZy5vdmVybGF5c1tpXS5pZF0gPSBuZXcgQzRnT3ZlcmxheShiYXNlTGF5ZXJDb25maWcub3ZlcmxheXNbaV0sdGhpcy5tYXBDb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VMYXllckNvbmZpZy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tiYXNlTGF5ZXJDb25maWcub3ZlcmxheXNbaV0uaWRdLmxheWVyID0gYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlDb250cm9sbGVyLnNob3dPdmVybGF5TGF5ZXIoYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIChiYXNlTGF5ZXJDb25maWcuaGFzT3ZlcmxheXMpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZm9yIChpID0gMDsgaSA8IGJhc2VMYXllckNvbmZpZy5vdmVybGF5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZighYzRnLm1hcHMub3ZlcmxheXMpe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYzRnLm1hcHMub3ZlcmxheXMgPSBbXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICBjNGcubWFwcy5vdmVybGF5c1tiYXNlTGF5ZXJDb25maWcub3ZlcmxheXNbaV0uaWRdID0gYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzW2ldO1xuICAgICAgICAgICAgLy8gICAgICAgICBpZih0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXIgJiYgcGFyc2VJbnQoYmFzZUxheWVyQ29uZmlnLmlkLCAxMCkgPT09IHBhcnNlSW50KHRoaXMucHJveHkuYWN0aXZlQmFzZWxheWVySWQsIDEwKSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZi5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihzZWxmLnNob3dPdmVybGF5TGF5ZXIoYmFzZUxheWVyQ29uZmlnLm92ZXJsYXlzW2ldLmlkKSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICB0aGlzLmFyckJhc2VsYXllcnNbYmFzZUxheWVyVWlkXS5sYXllciA9IG5ld0Jhc2VsYXllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVycyA9IHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCk7XG5cbiAgICAgICAgLy8gc2VjdXJlXG4gICAgICAgIGlmIChsYXllcnMuaXRlbSgwKS5nZXQoJ2NoZWNrU3VtJykgPT09IFwiYmFzZU1hcHNMYXllclwiKSB7XG4gICAgICAgICAgICBiYXNlTGF5ZXJzID0gbGF5ZXJzLml0ZW0oMCkuZ2V0TGF5ZXJzKCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5hcnJCYXNlbGF5ZXJzW2Jhc2VMYXllclVpZF0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBiYXNlbGF5ZXIgPSB0aGlzLmFyckJhc2VsYXllcnNbYmFzZUxheWVyVWlkXS5sYXllcjtcblxuICAgICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQmFzZWxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFzZUxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIChlbGVtZW50ID09PSBiYXNlbGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEJhc2VsYXllciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQmFzZWxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRCYXNlbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VMYXllcnMucHVzaChiYXNlbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmlldyA9IHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgICAgICAgICAgICAgIHZhciB6b29tID0gdmlldy5nZXRab29tKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNlbnRlciA9IHZpZXcuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKChiYXNlTGF5ZXJDb25maWcubWluWm9vbSAmJiBiYXNlTGF5ZXJDb25maWcubWluWm9vbSA+PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAoYmFzZUxheWVyQ29uZmlnLm1heFpvb20gJiYgYmFzZUxheWVyQ29uZmlnLm1heFpvb20gPj0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5taW5ab29tICYmICh2aWV3LmdldFpvb20oKSA8IGJhc2VMYXllckNvbmZpZy5taW5ab29tKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5zZXRab29tKGJhc2VMYXllckNvbmZpZy5taW5ab29tKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlTGF5ZXJDb25maWcubWF4Wm9vbSAmJiAodmlldy5nZXRab29tKCkgPiBiYXNlTGF5ZXJDb25maWcubWF4Wm9vbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuc2V0Wm9vbShiYXNlTGF5ZXJDb25maWcubWF4Wm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwRGF0YSA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwgfHwgbWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LnByZXBlbmQoY29udHJvbENvbnRhaW5lclRvcExlZnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KS5hZnRlcihjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubGVmdFNsaWRlRWxlbWVudHMucHVzaChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdWaWV3ID0gbmV3IG9sLlZpZXcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogY2VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246IHZpZXcuZ2V0UHJvamVjdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IHpvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluWm9vbTogcGFyc2VJbnQoYmFzZUxheWVyQ29uZmlnLm1pblpvb20sIDEwKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFpvb206IHBhcnNlSW50KGJhc2VMYXllckNvbmZpZy5tYXhab29tLCAxMCkgfHwgMTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IHZpZXcuZ2V0Um90YXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLnNldFZpZXcobmV3Vmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5yZWRyYXdNYXBWaWV3KHRoaXMubWFwQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChtYXBEYXRhLnNjYWxlbGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wodGhpcy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUgPSBuZXcgb2wuY29udHJvbC5TY2FsZUxpbmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcFZpZXc6IHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbCh0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChtYXBEYXRhLnpvb21sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wodGhpcy5tYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwgPSBuZXcgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcFZpZXc6IHRoaXMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbCh0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbCh0aGlzLm1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKHRoaXMubWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlTGF5ZXJDb25maWcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJveHkuYWN0aXZlQmFzZWxheWVySWQgPSBiYXNlTGF5ZXJDb25maWcuaWQ7XG5cbiAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHRoaXMucHJveHkuaG9va19iYXNlbGF5ZXJfdmlzaWJpbGl0eSwgYmFzZUxheWVyQ29uZmlnKTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDZXNpdW0gaW50ZWdyYXRpb25cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlTGF5ZXJDb25maWcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwRGF0YSA9IHRoaXMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChtYXBEYXRhLmNlc2l1bSAmJiBtYXBEYXRhLmNlc2l1bS5lbmFibGUgJiYgKG1hcERhdGEuY2VzaXVtLmFsd2F5cyB8fCBiYXNlTGF5ZXJDb25maWcuY2VzaXVtKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub2wzZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbDNkID0gbmV3IG9sY3MuT0xDZXNpdW0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogdGhpcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTeW5jaHJvbml6ZXJzOiBmYWxzZS8qLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRpbWVFbHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbDNkLmdldENlc2l1bVNjZW5lKCkuZ2xvYmUuZW5hYmxlTGlnaHRpbmcgJiYgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuc2V0VVRDSG91cnModmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDZXNpdW0uSnVsaWFuRGF0ZS5mcm9tRGF0ZShkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2VzaXVtLkp1bGlhbkRhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLypjb25zdCBzY2VuZSA9IG9sM2QuZ2V0Q2VzaXVtU2NlbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVycmFpblByb3ZpZGVyID0gbmV3IENlc2l1bS5DZXNpdW1UZXJyYWluUHJvdmlkZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLy9hc3NldHMuYWdpLmNvbS9zdGstdGVycmFpbi93b3JsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VmVydGV4Tm9ybWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUudGVycmFpblByb3ZpZGVyID0gdGVycmFpblByb3ZpZGVyOyovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2wzZC5zZXRFbmFibGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAvKndpbmRvd1sndG9nZ2xlVGltZSddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5nbG9iZS5lbmFibGVMaWdodGluZyA9ICFzY2VuZS5nbG9iZS5lbmFibGVMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lRWx0LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUVsdC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVFbHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTsqL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9sM2QgJiYgdGhpcy5vbDNkLmdldEVuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbDNkLnNldEVuYWJsZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMucmVkcmF3TWFwVmlldyh0aGlzLm1hcENvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAvLyBlbmQgb2YgXCJzaG93QmFzZUxheWVyKClcIlxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWJhc2VsYXllci1jb250cm9sbGVyLmpzIiwiaW1wb3J0IHtDNGdPdmVybGF5Q29udHJvbGxlcn0gZnJvbSBcIi4vYzRnLW92ZXJsYXktY29udHJvbGxlclwiXG5cbmV4cG9ydCBjbGFzcyBDNGdCYXNlbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoYmFzZWxheWVyQXJyLCBjb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMuaWQgPSBiYXNlbGF5ZXJBcnJbJ2lkJ107XG4gICAgICAgIHRoaXMucGlkID0gYmFzZWxheWVyQXJyWydwaWQnXTtcbiAgICAgICAgdGhpcy5uYW1lID0gYmFzZWxheWVyQXJyWyduYW1lJ107XG4gICAgICAgIHRoaXMuZGlzcGxheV9uYW1lID0gYmFzZWxheWVyQXJyWydkaXNwbGF5X25hbWUnXTtcbiAgICAgICAgdGhpcy5wcm92aWRlciA9IGJhc2VsYXllckFyclsncHJvdmlkZXInXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGUgPSBiYXNlbGF5ZXJBcnJbJ29zbV9zdHlsZSddO1xuICAgICAgICB0aGlzLm9zbV9zdHlsZV91cmwxID0gYmFzZWxheWVyQXJyWydvc21fc3R5bGVfdXJsMSddO1xuICAgICAgICB0aGlzLm9zbV9zdHlsZV91cmwyID0gYmFzZWxheWVyQXJyWydvc21fc3R5bGVfdXJsMiddO1xuICAgICAgICB0aGlzLm9zbV9zdHlsZV91cmwzID0gYmFzZWxheWVyQXJyWydvc21fc3R5bGVfdXJsMyddO1xuICAgICAgICB0aGlzLm9zbV9zdHlsZV91cmw0ID0gYmFzZWxheWVyQXJyWydvc21fc3R5bGVfdXJsNCddO1xuICAgICAgICB0aGlzLm9zbV9rZXluYW1lID0gYmFzZWxheWVyQXJyWydvc21fa2V5bmFtZSddO1xuICAgICAgICB0aGlzLm1hcGJveF90eXBlID0gYmFzZWxheWVyQXJyWydtYXBib3hfdHlwZSddO1xuICAgICAgICB0aGlzLmJpbmdfc3R5bGUgPSBiYXNlbGF5ZXJBcnJbJ2Jpbmdfc3R5bGUnXTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IGJhc2VsYXllckFyclsnc3R5bGUnXTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGlvbiA9IGJhc2VsYXllckFyclsnYXR0cmlidXRpb24nXTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBiYXNlbGF5ZXJBcnJbJ3BhcmFtcyddO1xuICAgICAgICB0aGlzLndtc19ndXR0ZXIgPSBiYXNlbGF5ZXJBcnJbJ3dtc19ndXR0ZXInXTtcbiAgICAgICAgdGhpcy5taW5ab29tID0gYmFzZWxheWVyQXJyWydtaW5ab29tJ107XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IGJhc2VsYXllckFyclsnbWF4Wm9vbSddO1xuICAgICAgICB0aGlzLnByb3RlY3RfYmFzZWxheWVyID0gYmFzZWxheWVyQXJyWydwcm90ZWN0X2Jhc2VsYXllciddO1xuICAgICAgICB0aGlzLnBlcm1pdHRlZF9ncm91cHMgPSBiYXNlbGF5ZXJBcnJbJ3Blcm1pdHRlZF9ncm91cHMnXTtcbiAgICAgICAgdGhpcy5hcGlfa2V5ID0gYmFzZWxheWVyQXJyWydhcGlLZXknXSA/IGJhc2VsYXllckFyclsnYXBpS2V5J10gOiBiYXNlbGF5ZXJBcnJbJ2FwaV9rZXknXTtcbiAgICAgICAgdGhpcy5hcHBfaWQgPSBiYXNlbGF5ZXJBcnJbJ2FwcF9pZCddO1xuICAgICAgICB0aGlzLnRodW5kZXJmb3Jlc3RfdHlwZSA9IGJhc2VsYXllckFyclsndGh1bmRlcmZvcmVzdF90eXBlJ107XG4gICAgICAgIHRoaXMuaGVyZV90eXBlID0gYmFzZWxheWVyQXJyWydoZXJlX3R5cGUnXTtcbiAgICAgICAgdGhpcy5jZXNpdW0gPSBiYXNlbGF5ZXJBcnJbJ2Nlc2l1bSddO1xuICAgICAgICB0aGlzLmhpZGVfaW5fYmUgPSBiYXNlbGF5ZXJBcnJbJ2hpZGVfaW5fYmUnXTtcbiAgICAgICAgdGhpcy51cmwgPSBiYXNlbGF5ZXJBcnJbJ3VybCddO1xuICAgICAgICB0aGlzLnVybHMgPSBiYXNlbGF5ZXJBcnJbJ3VybHMnXTtcbiAgICAgICAgdGhpcy5rbG9rYW5fdHlwZSA9IGJhc2VsYXllckFyclsna2xva2FuX3R5cGUnXTtcbiAgICAgICAgdGhpcy5zdHlsZV91cmwgPSBiYXNlbGF5ZXJBcnJbJ3N0eWxlX3VybCddO1xuICAgICAgICB0aGlzLmhhc092ZXJsYXlzID0gYmFzZWxheWVyQXJyWydoYXNPdmVybGF5cyddO1xuICAgICAgICB0aGlzLm92ZXJsYXlzID0gYmFzZWxheWVyQXJyWydvdmVybGF5cyddO1xuICAgICAgICBpZihiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXSl7XG4gICAgICAgICAgICBsZXQgbGF5ZXJHcm91cCA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpbmRleCBpbiBiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXSApe1xuICAgICAgICAgICAgICAgIGlmKGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddLmhhc093blByb3BlcnR5KGluZGV4KSl7XG4gICAgICAgICAgICAgICAgICBsYXllckdyb3VwW2luZGV4XSA9IG5ldyBDNGdCYXNlbGF5ZXIoYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ11baW5kZXhdWydlbnRyeSddKTtcbiAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXBbaW5kZXhdWydtaW5ab29tJ10gPSBiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXVtpbmRleF1bJ21pblpvb20nXTtcbiAgICAgICAgICAgICAgICAgIGxheWVyR3JvdXBbaW5kZXhdWydtYXhab29tJ10gPSBiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXVtpbmRleF1bJ21heFpvb20nXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxheWVyR3JvdXAgPSBsYXllckdyb3VwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3ZlcmxheUNvbnRyb2xsZXIgPSBuZXcgQzRnT3ZlcmxheUNvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlclxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1iYXNlbGF5ZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbmZpZyA9IHRoaXMuYzRnLm1hcHMuY29uZmlnIHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIG9zbVNvdXJjZURlZmluaXRpb25zXG4gICAqL1xuICBjNGcubWFwcy5jb25maWcub3NtID0gJC5leHRlbmQoYzRnLm1hcHMuY29uZmlnLm9zbSwge1xuXG4gICAgQ3ljbGVNYXA6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogJ1N0eWxlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5jeWNsZW1hcC5vcmcvXCI+T3BlbkN5Y2xlTWFwPC9hPicgKyAnICcgK1xuICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE5LFxuICAgICAgdXJsOiAnaHR0cHM6Ly97YS1jfS50aWxlLm9wZW5jeWNsZW1hcC5vcmcvY3ljbGUve3p9L3t4fS97eX0ucG5nJ1xuICAgIH0sXG5cbiAgICBHZXJtYW46IHtcbiAgICAgIGF0dHJpYnV0aW9uczogJ1N0eWxlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAuZGUvZ2VybWFuc3R5bGUuaHRtbFwiPm9wZW5zdHJlZXRtYXAuZGU8L2E+JyArICcgJyArXG4gICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICB1cmw6ICdodHRwczovL3thLWN9LnRpbGUub3BlbnN0cmVldG1hcC5kZS90aWxlcy9vc21kZS97en0ve3h9L3t5fS5wbmcnXG4gICAgfSxcblxuICAgIEdlcm1hblRyYW5zcG9ydDoge1xuICAgICAgYXR0cmlidXRpb25zOiAnU3R5bGUgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cubWVtb21hcHMuZGVcIj5NZW1vbWFwczwvYT4nICsgJyAnICtcbiAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOSxcbiAgICAgIHVybDogJ2h0dHA6Ly90aWxlLm1lbW9tYXBzLmRlL3RpbGVnZW4ve3p9L3t4fS97eX0ucG5nJ1xuICAgIH0sXG5cbiAgICBMYW5kc2NhcGVNYXA6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogJ1N0eWxlIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5jeWNsZW1hcC5vcmcvXCI+T3BlbkN5Y2xlTWFwPC9hPicgKyAnICcgK1xuICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE5LFxuICAgICAgdXJsOiAnaHR0cHM6Ly97YS1jfS50aWxlLm9wZW5jeWNsZW1hcC5vcmcvbGFuZHNjYXBlL3t6fS97eH0ve3l9LnBuZydcbiAgICB9LFxuXG4gICAgTWFwbmlrOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIFRyYW5zcG9ydE1hcDoge1xuICAgICAgYXR0cmlidXRpb25zOiAnU3R5bGUgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cub3BlbmN5Y2xlbWFwLm9yZy9cIj5PcGVuQ3ljbGVNYXA8L2E+JyArICcgJyArb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOSxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgIHVybDogJ2h0dHA6Ly97YS1jfS50aWxlMi5vcGVuY3ljbGVtYXAub3JnL3RyYW5zcG9ydC97en0ve3h9L3t5fS5wbmcnXG4gICAgfSxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwib3NtU291cmNlRGVmaW5pdGlvbnNcIiAtLS1cblxuICAvKipcbiAgICogc3RhbWVuU291cmNlRGVmaW5pdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbmZpZy5zdGFtZW4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25maWcuc3RhbWVuLCB7XG5cbiAgICBUb25lcjoge1xuICAgICAgYXR0cmlidXRpb25zOiBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbGF5ZXI6ICd0b25lcicsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIFRvbmVyTGFiZWxzOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBsYXllcjogJ3RvbmVyLWxhYmVscycsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIFRvbmVyTGluZXM6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGxheWVyOiAndG9uZXItbGluZXMnLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE4LFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBUZXJyYWluOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBsYXllcjogJ3RlcnJhaW4nLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE4LFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBXYXRlcmNvbG9yOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBsYXllcjogJ3dhdGVyY29sb3InLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE4LFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBOT05FOiAnJ1xuICB9KTtcblxuICAvKipcbiAgICogbWFwcXVlc3RTb3VyY2VEZWZpbml0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMuY29uZmlnLm1hcHF1ZXN0ID0gJC5leHRlbmQoYzRnLm1hcHMuY29uZmlnLm1hcHF1ZXN0LCB7XG5cbiAgICBNYXBRdWVzdE9wZW46IHtcbiAgICAgIGxheWVyOiAnb3NtJ1xuICAgIH0sXG5cbiAgICBNYXBRdWVzdEh5Yjoge1xuICAgICAgbGF5ZXI6ICdoeWInXG4gICAgfSxcblxuICAgIE1hcFF1ZXN0U2F0OiB7XG4gICAgICBsYXllcjogJ3NhdCdcbiAgICB9LFxuXG4gICAgTk9ORTogJydcbiAgfSk7XG5cbiAgLyoqXG4gICAqIG1hcGJveFNvdXJjZURlZmluaXRpb25zXG4gICAqL1xuICBjNGcubWFwcy5jb25maWcubWFwYm94ID0ge1xuXG4gICAgTWFwYm94OiB7XG4gICAgICB0aWxlU2l6ZTogWzUxMiwgNTEyXSxcbiAgICAgIGF0dHJpYnV0aW9uczogJ8KpIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2Fib3V0L21hcHMvXCI+TWFwYm94PC9hPicgKyAnICcgK1xuICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDIyLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG5cbiAgICBNYXBib3hDbGFzc2ljOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6ICfCqSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9hYm91dC9tYXBzL1wiPk1hcGJveDwvYT4nICsgJyAnICtcbiAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAyMixcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9XG4gIH07XG5cbiAgICAvKipcbiAgICAgKiBrbG9rYW5Tb3VyY2VEZWZpbml0aW9uc1xuICAgICAqL1xuICAgIC8vVG9EbyBub3QgcmVhZHlcbiAgICBjNGcubWFwcy5jb25maWcua2xva2FuID0ge1xuXG4gICAgICAgIE9wZW5NYXBUaWxlczoge1xuICAgICAgICAgICAgZm9ybWF0OiBuZXcgb2wuZm9ybWF0Lk1WVCgpLFxuICAgICAgICAgICAgdGlsZUdyaWQ6ICBvbC50aWxlZ3JpZC5jcmVhdGVYWVooe3RpbGVTaXplOiA1MTIsIG1heFpvb206IDIyfSksIC8vVG9EbyBtYXhab29tIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgdGlsZVBpeGVsUmF0aW86IDgsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbnM6ICfCqSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9vcGVubWFwdGlsZXMub3JnL1wiPk9wZW5NYXBUaWxlczwvYT4nICsgJyAnICtcbiAgICAgICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICAgICAgICBtaW5ab29tOiAwLFxuICAgICAgICAgICAgbWF4Wm9vbTogMjIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cydcbiAgICAgICAgfSxcblxuICAgICAgICBUaWxlSG9zdGluZzoge1xuICAgICAgICAgICAgZm9ybWF0OiBuZXcgb2wuZm9ybWF0Lk1WVCgpLFxuICAgICAgICAgICAgdGlsZUdyaWQ6ICBvbC50aWxlZ3JpZC5jcmVhdGVYWVooe3RpbGVTaXplOiA1MTIsIG1heFpvb206IDIyfSksIC8vVG9EbyBtYXhab29tIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgdGlsZVBpeGVsUmF0aW86IDgsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbnM6ICfCqSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90aWxlaG9zdGluZy5jb20vXCI+VGlsZUhvc3Rpbmc8L2E+JyArICcgJyArXG4gICAgICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgICAgICAgbWluWm9vbTogMCxcbiAgICAgICAgICAgIG1heFpvb206IDIyLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGhlcmVTb3VyY2VEZWZpbml0aW9uc1xuICAgICAqL1xuICAgIGM0Zy5tYXBzLmNvbmZpZy5oZXJlID0ge1xuXG4gICAgICAgIEhFUkU6IHtcbiAgICAgICAgICAgIHRpbGVTaXplOiBbNTEyLCA1MTJdLFxuICAgICAgICAgICAgYXR0cmlidXRpb25zOiAnTWFwIFRpbGVzIMKpIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5oZXJlLmNvbVwiPkhFUkU8L2E+JysgJyAnICtcbiAgICAgICAgICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgICAgICAgbWluWm9vbTogMCxcbiAgICAgICAgICAgIG1heFpvb206IDIyLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdGh1bmRlcmZvcmVzdFNvdXJjZURlZmluaXRpb25zXG4gICAgICovXG4gICAgYzRnLm1hcHMuY29uZmlnLnRodW5kZXJmb3Jlc3QgPSB7XG5cbiAgICAgICAgVGh1bmRlcmZvcmVzdDoge1xuICAgICAgICAgICAgdGlsZVNpemU6IFs1MTIsIDUxMl0sXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbnM6ICdNYXAgVGlsZXMgwqkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LnRodW5kZXJmb3Jlc3QuY29tL1wiPlRodW5kZXJmb3Jlc3Q8L2E+JyArICcgJyArXG4gICAgICAgICAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgICAgICAgIG1pblpvb206IDAsXG4gICAgICAgICAgICBtYXhab29tOiAxOSxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgICAgfVxuXG4gICAgfTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY29uZmlnID0gdGhpcy5jNGcubWFwcy5jb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25maWcuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBMYW5ndWFnZSBjb25zdGFudHMgKGVuKVxuICAgKi9cbiAgYzRnLm1hcHMuY29uc3RhbnQuaTE4biA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4sIHtcblxuICAgIExBTkc6ICdkZScsXG5cbiAgICBOQU1FOiAnTmFtZScsXG4gICAgSElERTogJ1p1a2xhcHBlbicsXG4gICAgQ0xPU0U6ICdTY2hsaWXDn2VuJyxcbiAgICBQT0lOVDogJ1BPSScsXG4gICAgRlJFRUhBTkQ6ICdGcmVpaGFuZCcsXG4gICAgTElORTogJ0xpbmllJyxcbiAgICBQT0xZR09OOiAnRmzDpGNoZScsXG4gICAgQ0lSQ0xFOiAnUmFkaXVzJyxcbiAgICBQRVJJTUVURVI6ICdVbWZhbmcnLFxuICAgIExFTkdUSDogJ0zDpG5nZScsXG4gICAgU1VSRkFDRUFSRUE6ICdGbMOkY2hlbmluaGFsdCcsXG4gICAgUkFESVVTOiAnUmFkaXVzJyxcbiAgICBSRUZSRVNIOiAnQWt0dWFsaXNpZXJlbicsXG4gICAgQ09QWV9UT19DTElQQk9BUkQ6ICdJbiBad2lzY2hlbmFibGFnZSBrb3BpZXJlbicsXG5cbiAgICBDVFJMX1pPT01fSU46ICdWZXJncsO2w59lcm4nLFxuICAgIENUUkxfWk9PTV9PVVQ6ICdWZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0VYVDogJ01heGltYWwgdmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9IT01FOiAnWnVyIHVyc3Byw7xuZ2xpY2hlbiBQb3NpdGlvbicsXG4gICAgQ1RSTF9aT09NX1BPUzogJ1p1bSBha3R1ZWxsZW4gU3RhbmRvcnQnLFxuICAgIENUUkxfWk9PTV9TTElERVI6ICdab29tIFNsaWRlcicsXG4gICAgQ1RSTF9SRVNFVF9ST1RBVElPTjogJ1JvdGF0aW9uICh0b3VjaCwgYWx0K21vdXNlKSB6dXLDvGNrc2V0emVuJyxcbiAgICBDVFJMX1BPUlRTSURFOiAnUG9ydHNpZGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1JPVVRFUjogJ1JvdXRlciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9NRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9JTkZPUEFHRTogJ0luZm9zZWl0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQURESVRJT05BTFBBTkVMOiAnUGFuZWwgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FDQ09VTlQ6ICdBY2NvdW50IGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9aT09NTEVWRUw6ICdab29tJyxcbiAgICBDVFJMX01PVVNFQ09PUkRTOiAnTG9uL0xhdCcsXG4gICAgQ1RSTF9HRU9TRUFSQ0g6ICdTdWNoZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUlRfU0VBUkNIOiAnU3VjaGUgc3RhcnRlbicsXG4gICAgQ1RSTF9PVkVSVklFV01BUDogJ8OcYmVyc2ljaHRza2FydGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0dFT0JPT0tNQVJLUzogJ0Zhdm9yaXRlbiB2ZXJ3YWx0ZW4nLFxuICAgIENUUkxfU0lERUJPQVJEOiAnU2lkZWJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSQk9BUkQ6ICdTdGFyYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FUVFJJQlVUSU9OOiAnQXR0cmlidXRpb24gYW56ZWlnZW4nLFxuICAgIENUUkxfR1JJRDogJ0dpdHRlciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUEVSTUFMSU5LOiAnUGVybWFsaW5rIGdlbmVyaWVyZW4nLFxuICAgIENUUkxfRlVMTFNDUkVFTjogJ1ZvbGxiaWxkbW9kdXMgZWluLS9hdXNzY2hhbHRlbicsXG4gICAgQ1RSTF9QUklOVDogJ0thcnRlIGV4cG9ydGllcmVuJyxcblxuICAgIEVESVRPUjogJ0VkaXRvcicsXG4gICAgRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkU6ICdNZXNzZW4gd8OkaHJlbmQgZGVzIFplaWNobmVucycsXG4gICAgRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnRWRpdGllcmVuIGJlZW5kZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ0VsZW1lbnQgbMO2c2NoZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ0VsZW1lbnQgZWRpdGllcmVuIC8gdmVyc2NoaWViZW4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GTzogJ1p1ciBBdXN3YWhsIGVpbiBFbGVtZW50IGF1ZiBkZXIgS2FydGUgYW5rbGlja2VuLicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUw6ICdbU3RyZ10gKyBbS2xpY2tdIGbDvHIgTWVocmZhY2hhdXN3YWhsIDxicj5bU2hpZnRdIGhhbHRlbiBmw7xyIEF1c3dhaGxib3gnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnS2FydGVuZWxlbWVudGUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kd2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVud2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnS3JlaXN3ZXJremV1Z2UnLFxuXG4gICAgUE9QVVBfUk9VVEVfRlJPTTogJ1JvdXRlIHZvbiBoaWVyJyxcbiAgICBQT1BVUF9ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuXG4gICAgU1RBUkJPQVJEOiAnU3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9MQVlFUjogJ0ViZW5lbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdLYXJ0ZW5lbGVtZW50ZScsXG5cbiAgICBTSURFQk9BUkQ6ICdTaWRlYm9hcmQnLFxuXG4gICAgUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVDogJ1JvdXRlIGZpbmRlbicsXG4gICAgUk9VVEVSX0ZST01fTEFCRUw6ICdTdGFydCcsXG4gICAgUk9VVEVSX09WRVJfTEFCRUw6ICdad2lzY2hlbnppZWwnLFxuICAgIFJPVVRFUl9UT19MQUJFTDogJ1ppZWwnLFxuICAgIFJPVVRFUl9DTEVBUl9USVRMRTogJ0zDtnNjaGVuJyxcbiAgICBST1VURVJfQ0xFQVJfSFRNTDogJycsXG4gICAgUk9VVEVSX0xhYmVsX0ludGVyaW06ICdad2lzY2hlbnppZWwnLFxuXG4gICAgUk9VVEVSX1NXSVRDSDonV2VjaHNlbCB2b24gU3RhcnQgdW5kIFppZWwnLFxuICAgIFJPVVRFUl9PVkVSOidad2lzY2hlbnppZWwgaGluenVmw7xnZW4nLFxuICAgIFJPVVRFUl9QUklOVDonUm91dGVuYmVzY2hyZWlidW5nIGRydWNrZW4nLFxuXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEU6ICdSb3V0ZTonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFOiAnRW50ZmVybnVuZzonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1RJTUU6ICdaZWl0OicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRTogJ1Byb2ZpbDonLFxuXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4uJyxcbiAgICBST1VURVJfVklFV19BTEVSVF9HT0NPRElORzogJ1p1Z3JpZmYgYXVmIEdlb2NvZGVyIGZlaGxnZXNjaGxhZ2VuLicsXG5cbiAgICBST1VURVI6ICdSb3V0ZXInLFxuICAgIFJPVVRFUl9OOiAnTm9yZGVuJyxcbiAgICBST1VURVJfRTogJ09zdCcsXG4gICAgUk9VVEVSX1M6ICdTw7xkZW4nLFxuICAgIFJPVVRFUl9XOiAnV2VzdGVuJyxcbiAgICBST1VURVJfTkU6ICdOb3Jkb3N0JyxcbiAgICBST1VURVJfU0U6ICdTw7xkb3N0JyxcbiAgICBST1VURVJfU1c6ICdTw7xkd2VzdCcsXG4gICAgUk9VVEVSX05XOiAnTm9yZHdlc3QnLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMDogJ1VuYmVrYW5udGUgQW53ZWlzdW5nWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xOiAnR2VyYWRlYXVzIHdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMjogJ0xlaWNodCByZWNodHMgYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzM6ICdSZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzQ6ICdTY2hhcmYgcmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl81OiAnV2VuZGVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl82OiAnU2NoYXJmIGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl83OiAnTGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzg6ICdMZWljaHQgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzEwOiAnRmFocmVuIFNpZSBSaWNodHVuZyA8Yj4lZDwvYj5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0xJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZXJzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTInOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB6d2VpdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTMnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBkcml0dGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTQnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB2aWVydGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTUnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBmw7xuZnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS02JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2VjaHN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNpZWJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGFjaHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS05JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgbmV1bnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS14JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZWluZXIgZGVyIHZpZWxlbiBNw7ZnbGljaGtlaXRlblsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTU6ICdTaWUgaGFiZW4gSWhyIFppZWwgZXJyZWljaHQnLFxuXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8wJzogJyAlbSBmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEnOiAnICVtIGRlbSBTdHJhw59lbnZlcmxhdWYgZm9sZ2VuWyBhbHMgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8yJzogJyBGYWhyZW4gU2llWyBhdWYgPGI+JXM8L2I+XSBsb3MnLFxuICAgICdST1VURVJfNS5YX1RZUEVfMyc6ICcgRGFzIFppZWwgYmVmaW5kZXQgc2ljaCA8Yj4lbTwvYj4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNCc6ICcgV2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV81JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYXVmZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzYnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hYmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV83JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV84JzogJyAlbSBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOSc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTAnOiAnICVtIGZhaHJlbiB1bSBhdWYgZGVyIFN0cmHDn2UgenUgYmxlaWJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMSc6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTInOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEzJzogJyAlbSBmYWhyZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzE0JzogJyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuXG4gICAgJ1JPVVRFUl81LlhfTU9EXzAnICA6ICdVdHVybicsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzEnICA6ICdTY2hhcmYgcmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMicgIDogJ1JlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzMnICA6ICdMZWljaHQgcmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNCcgIDogJ0dlcmFkZWF1cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzUnICA6ICdMZWljaHQgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF82JyAgOiAnTGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF83JyAgOiAnU2NoYXJmIGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfOCcgIDogJ2luIGRlciBOw6RoZScsXG5cbiAgICBST1VURVJfRlJPTTogJ1N0YXJ0JyxcbiAgICBST1VURVJfVE86ICdaaWVsJyxcbiAgICBST1VURVJfRklORF9ST1VURTogJ1JvdXRlIGZpbmRlbicsXG4gICAgUk9VVEVSX0xPQ19ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuICAgIFJPVVRFUl9ST1VURURFU0M6ICdSb3V0ZW5iZXNjaHJlaWJ1bmcnLFxuICAgIFJPVVRFUl9ST1VURU5BTUU6ICdSb3V0ZScsXG4gICAgUk9VVEVSX0RJU1RBTkNFOiAnRGlzdGFueicsXG4gICAgUk9VVEVSX1RJTUU6ICdaZWl0JyxcbiAgICBST1VURVJfUkVWX0dFT0NPRElORzogJ0VybWl0dGxlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HOiAnRmVobGVyIGJlaW0gRXJtaXR0ZWxuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfU0VBUkNISU5HOiAnU3VjaGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1NFQVJDSElORzogJ0ZlaGxlciBiZWltIFN1Y2hlbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX0NBTENfUk9VVEU6ICdCZXJlY2huZSBSb3V0ZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX0NBTENfUk9VVEU6ICdGZWhsZXIgYmVpbSBCZXJlY2huZW4gZGVyIFJvdXRlJyxcblxuICAgIE1FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UnLFxuICAgIE1FQVNVUkVUT09MU19JTkZPOiAnV8OkaGxlbiBTaWUgd2VpdGVyIHVudGVuIGVpbmVuIE1lc3N0eXAgYXVzIHVuZCBzdGFydGVuIFNpZSBkaWUgTWVzc3VuZyBkdXJjaCBkYXMgS2xpY2tlbiBhdWYgZGVyIEthcnRlLicsXG4gICAgTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTDogJyhFaW56ZWxuZSBNZXNzdW5nZW4ga8O2bm5lbiBtaXQgZWluZW0gRG9wcGVsa2xpY2sgYmVlbmRldCB3ZXJkZW4uKScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2VuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdSYWRpdXMgbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZCBtZXNzZW4nLFxuXG4gICAgR0VPQk9PS01BUktTX1BMQUNFSE9MREVSOiAnTmV1ZSBCZXplaWNobnVuZycsXG5cbiAgICBJTkZPUEFHRTogJ0luZm9ybWF0aW9uZW4nLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ1BhbmVsJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnUGFuZWwgYW56ZWlnZW4nLFxuICAgIEFDQ09VTlQ6ICdBY2NvdW50JyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ0FjY291bnQgYW56ZWlnZW4nLFxuXG4gICAgU0VBUkNIX05PVF9GT1VORDogJ0RpZSBMb2thdGlvbiBrb25udGUgbmljaHQgZ2VmdW5kZW4gd2VyZGVuLiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVpbmUgYW5kZXJlIEVpbmdhYmUuJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwibGFuZ3VhZ2UgY29uc3RhbnRzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGxhbmdDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmkxOG47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ1NTIGNvbnN0YW50c1xuICAgKi9cbiAgYzRnLm1hcHMuY29uc3RhbnQuY3NzID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuY3NzLCB7XG5cbiAgICBPUEVOOiAnYzRnLW9wZW4nLFxuICAgIENMT1NFOiAnYzRnLWNsb3NlJyxcbiAgICBDTE9TRUFCTEU6ICdjNGctY2xvc2VhYmxlJyxcbiAgICBFTkFCTEVEOiAnYzRnLWVuYWJsZWQnLFxuICAgIERJU0FCTEVEOiAnYzRnLWRpc2FibGVkJyxcbiAgICBISURFOiAnYzRnLWhpZGUnLFxuICAgIElDT046ICdjNGctaWNvbicsXG4gICAgQ09OVFJPTDogJ2M0Zy1jb250cm9sJyxcbiAgICBDT1BZOiAnYzRnLWNvcHknLFxuICAgIFJFRlJFU0g6ICdjNGctcmVmcmVzaCcsXG4gICAgQUNUSVZFOiAnYzRnLWFjdGl2ZScsXG4gICAgSU5BQ1RJVkU6ICdjNGctaW5hY3RpdmUnLFxuICAgIExPQURJTkc6ICdjNGctbG9hZGluZycsXG4gICAgQU5JTUFUSU9OX1NQSU46ICdjNGctYW5pbWF0aW9uLXNwaW4nLFxuICAgIExBUkdFOiAnYzRnLWxhcmdlJyxcbiAgICBTTUFMTDogJ2M0Zy1zbWFsbCcsXG4gICAgSE9SSVpPTlRBTDogJ2M0Zy1ob3Jpem9udGFsJyxcbiAgICBWRVJUSUNBTDogJ2M0Zy12ZXJ0aWNhbCcsXG5cbiAgICBBVFRSSUJVVElPTl9MT0dPOiAnYzRnLWF0dHJpYnV0aW9uLWxvZ28nLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RMOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1sZWZ0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UUjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtcmlnaHQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQtc3ViJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CUjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tcmlnaHQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQ6ICdjNGctZHJhdy1jb250ZW50LXBvaW50JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EOiAnYzRnLWRyYXctY29udGVudC1mcmVlaGFuZCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HOiAnYzRnLWRyYXctY29udGVudC1saW5lJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT046ICdjNGctZHJhdy1jb250ZW50LXBvbHlnb24nLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFOiAnYzRnLWRyYXctY29udGVudC1jaXJjbGUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcHJvamVjdCcsXG4gICAgRURJVE9SX0RSQVdfVFJJR0dFUjogJ2M0Zy1kcmF3LXRyaWdnZXInLFxuICAgIEVESVRPUl9DT05URU5UX1NFTEVDVDogJ2M0Zy1jb250ZW50LXNlbGVjdCcsXG4gICAgRURJVE9SX0RSQVdfT1BUSU9OUzogJ2M0Zy1lZGl0b3ItZHJhdy1vcHRpb25zJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1hcHBseScsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnYzRnLWVkaXRvci1mZWF0dXJlLWRlbGV0ZScsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnYzRnLWVkaXRvci1mZWF0dXJlLW1vZGlmeScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctcG9pbnQnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBHRU9TRUFSQ0g6ICdjNGctZ2Vvc2VhcmNoJyxcbiAgICBHRU9TRUFSQ0hfV1JBUFBFUjogJ2M0Zy1nZW9zZWFyY2gtd3JhcHBlcicsXG4gICAgR0VPU0VBUkNIX1RSSUdHRVI6ICdjNGctZ2Vvc2VhcmNoLXRyaWdnZXInLFxuICAgIEdFT1NFQVJDSF9TVEFSVDogJ2M0Zy1nZW9zZWFyY2gtc3RhcnQnLFxuICAgIEdSQVRJQ1VMRTogJ2M0Zy1ncmF0aWN1bGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgUFJJTlQ6J2M0Zy1wcmludCcsXG4gICAgSU5GT1BBR0VfVklFV19UUklHR0VSOiAnYzRnLWluZm9wYWdlLXZpZXctdHJpZ2dlcicsXG4gICAgSU5GT1BBR0U6ICdjNGctaW5mb3BhZ2UnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdjNGctYWRkaXRpb25hbHBhbmVsLXZpZXctdHJpZ2dlcicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnYzRnLWFkZGl0aW9uYWxwYW5lbCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdjNGctYWNjb3VudC12aWV3LXRyaWdnZXInLFxuICAgIEFDQ09VTlQ6ICdjNGctYWNjb3VudCcsXG4gICAgT1ZFUlZJRVdNQVA6ICdjNGctb3ZlcnZpZXdtYXAnLFxuICAgIE9WRVJWSUVXTUFQX1dSQVBQRVI6ICdjNGctb3ZlcnZpZXdtYXAtd3JhcHBlcicsXG4gICAgR0VPQk9PS01BUktTOiAnYzRnLWdlb2Jvb2ttYXJrcycsXG4gICAgUEVSTUFMSU5LOiAnYzRnLXBlcm1hbGluaycsXG4gICAgUEVSTUFMSU5LX1BPUFVQOiAnYzRnLXBlcm1hbGluay1wb3B1cCcsXG4gICAgUE9QVVBfQ0xPU0U6ICdjNGctcG9wdXAtY2xvc2UnLFxuICAgIFBPUFVQX1JPVVRFX1dSQVBQRVI6ICdjNGctcG9wdXAtcm91dGUtd3JhcHBlcicsXG4gICAgUE9QVVBfUk9VVEVfRlJPTTogJ2M0Zy1wb3B1cC1yb3V0ZS1mcm9tJyxcbiAgICBQT1BVUF9ST1VURV9UTzogJ2M0Zy1wb3B1cC1yb3V0ZS10bycsXG4gICAgUE9SVFNJREU6ICdjNGctcG9ydHNpZGUnLFxuICAgIFBPUlRTSURFX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0NPTlRST0w6ICdjNGctcG9ydHNpZGUtY29udHJvbCcsXG4gICAgUE9SVFNJREVfV1JBUFBFUjogJ2M0Zy1wb3J0c2lkZS13cmFwcGVyJyxcbiAgICBQT1JUU0lERV9USVRMRUJBUjogJ2M0Zy1wb3J0c2lkZS10aXRsZWJhcicsXG4gICAgUE9SVFNJREVfVE9QX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtdG9wLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9CT1RUT01fVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS1ib3R0b20tdG9vbGJhcicsXG4gICAgUE9SVFNJREVfU1RBVFVTQkFSOiAnYzRnLXBvcnRzaWRlLXN0YXR1c2JhcicsXG4gICAgUE9SVFNJREVfVklFV1RSSUdHRVJCQVI6ICdjNGctcG9ydHNpZGUtdmlld3RyaWdnZXJiYXInLFxuICAgIFBPUlRTSURFX0hFQURMSU5FOiAnYzRnLXBvcnRzaWRlLWhlYWRsaW5lJyxcbiAgICBQT1JUU0lERV9CVVRUT05CQVI6ICdjNGctcG9ydHNpZGUtYnV0dG9uYmFyJyxcbiAgICBQT1JUU0lERV9CVVRUT046ICdjNGctcG9ydHNpZGUtYnV0dG9uJyxcbiAgICBQT1JUU0lERV9ISURFOiAnYzRnLXBvcnRzaWRlLWhpZGUnLFxuICAgIFBPUlRTSURFX0NMT1NFOiAnYzRnLXBvcnRzaWRlLWNsb3NlJyxcbiAgICBTUElOTkVSOiAnYzRnLXNwaW5uZXInLFxuICAgIFNUQVJCT0FSRDogJ2M0Zy1zdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9DT05UQUlORVI6ICdjNGctc3RhcmJvYXJkLWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0NPTlRST0w6ICdjNGctc3RhcmJvYXJkLWNvbnRyb2wnLFxuICAgIFNUQVJCT0FSRF9XUkFQUEVSOiAnYzRnLXN0YXJib2FyZC13cmFwcGVyJyxcbiAgICBTVEFSQk9BUkRfVElUTEVCQVI6ICdjNGctc3RhcmJvYXJkLXRpdGxlYmFyJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctc3RhcmJvYXJkLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVI6ICdjNGctc3RhcmJvYXJkLWJvdHRvbS10b29sYmFyJyxcbiAgICBTVEFSQk9BUkRfU1RBVFVTQkFSOiAnYzRnLXN0YXJib2FyZC1zdGF0dXNiYXInLFxuICAgIFNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1zdGFyYm9hcmQtdmlld3RyaWdnZXJiYXInLFxuICAgIFNUQVJCT0FSRF9IRUFETElORTogJ2M0Zy1zdGFyYm9hcmQtaGVhZGxpbmUnLFxuICAgIFNUQVJCT0FSRF9CVVRUT05CQVI6ICdjNGctc3RhcmJvYXJkLWJ1dHRvbmJhcicsXG4gICAgU1RBUkJPQVJEX0JVVFRPTjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItYmFzZWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9DTE9TRTogJ2M0Zy1zdGFyYm9hcmQtY2xvc2UnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSOiAnYzRnLWNvbnRlbnQtYmFzZWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFOiAnYzRnLWJhc2VsYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9MQVlFUlRSRUU6ICdjNGctbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSOiAnYzRnLWNvbnRlbnQtbGF5ZXJzd2l0Y2hlcicsXG4gICAgVE9PTFRJUF9QT1BVUDogJ2M0Zy10b29sdGlwLXBvcHVwJyxcbiAgICBaT09NX0xFVkVMOiAnYzRnLXpvb20tbGV2ZWwnLFxuXG4gICAgUk9VVEVSX0lOUFVUX1dSQVBQRVI6ICdjNGctcm91dGVyLWlucHV0LXdyYXBwZXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX1dSQVBQRVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOUFVUX0ZST006ICdjNGctcm91dGVyLWlucHV0LWZyb20nLFxuICAgIFJPVVRFUl9JTlBVVF9UTzogJ2M0Zy1yb3V0ZXItaW5wdXQtdG8nLFxuICAgIFJPVVRFUl9JTlBVVF9DTEVBUjogJ2M0Zy1yb3V0ZXItaW5wdXQtY2xlYXInLFxuICAgIFJPVVRFUl9CVVRUT05CQVI6ICdjNGctcm91dGVyLWJ1dHRvbmJhcicsXG4gICAgUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVI6ICdjNGctcm91dGVyLWF0dHJpYnV0aW9uLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtaGVhZGVyJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6ICdjNGctcm91dGVyLXN3aXRjaCcsXG4gICAgUk9VVEVSX09WRVI6ICdjNGctcm91dGVyLW92ZXInLFxuICAgIFJPVVRFUl9QUklOVDogJ2M0Zy1yb3V0ZXItcHJpbnQnLFxuXG4gICAgUk9VVEVSX1BST0ZJTEVfQ0FSOiAnYzRnLXJvdXRlci1wcm9maWxlLWNhcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfSEdWOiAnYzRnLXJvdXRlci1wcm9maWxlLWhndicsXG4gICAgUk9VVEVSX1BST0ZJTEVfQklLRTogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1iaWtlJyxcbiAgICBST1VURVJfUFJPRklMRV9GT09UOiAnYzRnLXJvdXRlci1wcm9maWxlLWZvb3QnLFxuICAgIFJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd2hlZWxjaGFpcicsXG5cblxuXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tdGFibGUnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tb2RkJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tZXZlbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24taWNvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX3RleHQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0U6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlzdGFuY2UnLFxuXG4gICAgT0xfQ09OVFJPTDogJ29sLWNvbnRyb2wnLFxuICAgIE9MX1VOU0VMRUNUQUJMRTogJ29sLXVuc2VsZWN0YWJsZScsXG5cbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSOiAnb2wtb3ZlcmxheWNvbnRhaW5lcicsXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRTogJ29sLW92ZXJsYXljb250YWluZXItc3RvcGV2ZW50JyxcbiAgICBPTF9WSUVXUE9SVDogJ29sLXZpZXdwb3J0JyxcbiAgICBPTF9aT09NOiAnb2wtem9vbScsXG4gICAgT0xfWk9PTV9JTjogJ29sLXpvb20taW4nLFxuICAgIE9MX1pPT01fRVhUOiAnb2wtem9vbS1leHRlbnQnLFxuICAgIE9MX1pPT01fSE9NRTogJ29sLXpvb20taG9tZScsXG4gICAgT0xfWk9PTV9QT1M6ICdvbC16b29tLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1dJVEhfRVhUOiAnb2wtem9vbS13aXRoLWV4dGVudCcsXG4gICAgT0xfWk9PTV9XSVRIX0hPTUU6ICdvbC16b29tLXdpdGgtaG9tZScsXG4gICAgT0xfWk9PTV9XSVRIX1BPUzogJ29sLXpvb20td2l0aC1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9TTElERVI6ICdvbC16b29tLXNsaWRlcicsXG4gICAgT0xfWk9PTV9XSVRIX1NMSURFUjogJ29sLXpvb20td2l0aC1zbGlkZXInLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGNzc0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuY3NzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBjdXJyZW50IHpvb21sZXZlbCBvbiB0aGUgbWFwLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGV4dGVuZHMgIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqXG4gICAqIEBwYXJhbSAgICB7T2JqZWN0fSAgICAgICAgICAgICAgb3B0X29wdGlvbnMgICpvcHRpb25hbCogY29udHJvbCBvcHRpb25zLlxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIHNlbGYsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHVwZGF0ZVpvb21sZXZlbDtcblxuICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLm1hcFZpZXcpIHtcbiAgICAgIGNvbnNvbGUud2FybignWm9vbWxldmVsIGNvbnRyb2wgbmVlZHMgdG8ga25vdyB0aGUgbWFwLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5aT09NX0xFVkVMLFxuICAgICAgdW5kZWZpbmVkSFRNTDogJydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5tYXBWaWV3LmdldFpvb20oKTtcblxuICAgIHVwZGF0ZVpvb21sZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcGFyc2VJbnQob3B0aW9ucy5tYXBWaWV3LmdldFpvb20oKSk7XG4gICAgfTtcblxuICAgIG9wdGlvbnMubWFwVmlldy5vbignY2hhbmdlOnJlc29sdXRpb24nLCB1cGRhdGVab29tbGV2ZWwpO1xuICAgIG9sLmNvbnRyb2wuQ29udHJvbC5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IG9wdGlvbnMudGFyZ2V0XG4gICAgfSk7XG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsLCBvbC5jb250cm9sLkNvbnRyb2wpO1xuXG5cbiAgLypcbiAgICogQWRkIG1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsLnByb3RvdHlwZSwge1xuXG4gICAgLy8gbm90aGluZyB0byBhZGQgaGVyZVxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBab29tbGV2ZWwgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtab29tbGV2ZWx9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsXCJcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBjNGctTWFwcyB1dGlsaXR5IGZ1bmN0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMudXRpbHMgPSAkLmV4dGVuZChjNGcubWFwcy51dGlscywge1xuICAgIC8qKlxuICAgICAqICBDb252ZXJ0cyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgZ2l2ZW4gc3RyaW5nIHRvIHVwcGVyY2FzZSwgbGVhdmluZyB0aGUgcmVtYWluaW5nIHN0cmluZyB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiAgQHBhcmFtICAgIHtzdHJpbmd9ICAgIHRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZVxuICAgICAqXG4gICAgICogIEByZXR1cm4gICB7c3RyaW5nfSAgICB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIHVuaXF1ZSBpZC5cbiAgICAgKlxuICAgICAqIFRoZSBpZCBpcyA5IGNoYXJhY3RlcnMgbG9uZyBhbmQgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gIFRoZSBnZW5lcmF0ZWQgaWQuXG4gICAgICovXG4gICAgZ2V0VW5pcXVlSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gICAgICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAgICAgLy8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG4gICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBub3QgYnJlYWsgdGhlIENvZGUuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcIC0+IFxcXFw7XG4gICAgICogICBcIiAtPiAnJztcbiAgICAgKiAgIMOEIC0+ICZBdW1sO1xuICAgICAqICAgw6QgLT4gJmF1bWw7XG4gICAgICogICDDliAtPiAmT3VtbDtcbiAgICAgKiAgIMO2IC0+ICZvdW1sO1xuICAgICAqICAgw5wgLT4gJlV1bWw7XG4gICAgICogICDDvCAtPiAmdXVtbDtcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZW5jb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcL2csICdcXFxcXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFxcIi9nLCAnXFwnXFwnJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DhC9nLCAnJkF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DpC9nLCAnJmF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dli9nLCAnJk91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dti9nLCAnJm91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DnC9nLCAnJlV1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DvC9nLCAnJnV1bWw7J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZW5jb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIGJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcXFwgICAgIC0+IFxcO1xuICAgICAqICAgJycgICAgIC0+IFwiO1xuICAgICAqICAgJkF1bWw7IC0+IMOEXG4gICAgICogICAmYXVtbDsgLT4gw6RcbiAgICAgKiAgICZPdW1sOyAtPiDDllxuICAgICAqICAgJm91bWw7IC0+IMO2XG4gICAgICogICAmVXVtbDsgLT4gw5xcbiAgICAgKiAgICZ1dW1sOyAtPiDDvFxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcXFxcXC9nLCAnXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFwnXFwnL2csICdcXFwiJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mQXVtbDsvZywgJ8OEJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mYXVtbDsvZywgJ8OkJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mT3VtbDsvZywgJ8OWJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mb3VtbDsvZywgJ8O2J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mVXVtbDsvZywgJ8OcOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJnV1bWw7L2csICfDvCdcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGRlY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3IgcmVwbGFjZSBhbiBVUkwtcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAgdGhlIGdpdmVuIHBhcmFtZXRlciwgYHBhcmFtYCxcbiAgICAgKiB3aWxsIGJlIGFwcGxpZWQgYXMgXCJoYXNoLXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzI3BhcmFtXG4gICAgICogTm90ZSwgdGhhdCBhbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogd2hlcmVhcyBleGlzdGluZyBcIkdFVC1wYXJhbWV0ZXJzXCIgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgc2V0LCBpdCB3aWxsIGJlIGFwcGxpZWQgYXMgXCJHRVQtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHM/b3B0X2dldEtleT1wYXJhbVxuICAgICAqIElmIHRoZSBrZXkgZGVzY3JpYmVkIGJ5IGBvcHRfZ2V0S2V5YCBpcyBhbHJlYWR5IGV4aXN0aW5nLCBpdHMgdmFsdWUgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogb3RoZXJ3aXNlIHRoZSBrZXktdmFsdWUtcGFpciB3aWxsIGJlIGFwcGVuZGVkIGFwcHJvcHJpYXRseS5cbiAgICAgKiBBbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZXhlY3V0ZWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBuZXcgbGluayBhcyBgc3RyaW5nYCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIFwiaHJlZi9sb2NhdGlvblwiIHdpbGwgYmUgY2hhbmdlZCBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlciwgd2hpY2ggY2FuIGNhdXNlIGEgcGFnZXJlbG9hZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIHBhcmFtICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW58c3RyaW5nfSAgb3B0X2dldEtleSAgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgb3B0X2V4ZWN1dGUgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgc2V0VXJsUGFyYW06IGZ1bmN0aW9uIChwYXJhbSwgb3B0X2dldEtleSwgb3B0X2V4ZWN1dGUpIHtcbiAgICAgIHZhciBsaW5rLFxuICAgICAgICAgIHNlYXJjaFBhcmFtLFxuICAgICAgICAgIHBhcmFtUmVwbGFjZWQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGluayA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgLy8gdXNlIGhhc2gtcGFyYW1ldGVyXG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IGxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhcmFtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIEdFVC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIC8vIHRoZXJlIGFyZSBhbHJlYWR5IHNlYXJjaC1wYXJhbWV0ZXJzXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgIG9wdF9nZXRLZXkgPSBvcHRfZ2V0S2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgLy8gcmVwbGFjZSBwYXJhbWV0ZXIgaWYgYWxyZWFkeSBleGlzdGVudFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC8oW149XFw/XFwmXSspPShbXiZdKykvZ2ksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBvcHRfZ2V0S2V5KSB7XG4gICAgICAgICAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYXBwZW5kIGFzIG5ldyBwYXJhbWV0ZXJcbiAgICAgICAgICBpZiAoIXBhcmFtUmVwbGFjZWQpIHtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtICs9ICcmJyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBvbmx5IHNlYXJjaC1wYXJhbWV0ZXIgaW4gdGhlIFVSTFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gJz8nICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaCA9IHNlYXJjaFBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gc2VhcmNoUGFyYW0gKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluaztcbiAgICB9LCAvLyBlbmQgb2Ygc2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCBvciBoYXNoIFVSTC1wYXJhbWV0ZXIgYXMgc3RyaW5nLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBoYXNoLXBhcmFtZXRlciBvZiB0aGUgVVJMIGlzIHJldHVybmVkLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHNlYXJjaCBmb3IgYSBHRVQtcGFyYW1ldGVyIGFuZCByZXR1cm4gaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0ZW50LCBvciBlbXB0eSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfHN0cmluZ30gIG9wdF9nZXRLZXkgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb3VuZCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChvcHRfZ2V0S2V5KSB7XG4gICAgICB2YXIgcGFyYW0sXG4gICAgICAgICAgcmVnRXg7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICBwYXJhbSA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICBwYXJhbSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ0V4ID0gbmV3IFJlZ0V4cCgnW1xcP1xcJl0nICsgb3B0X2dldEtleSArICc9KFteJl0rKScsICdpJyk7XG4gICAgICAgICAgcGFyYW0gPSByZWdFeC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWx0YS1lbmNvZGUgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFycmF5IHdpbGwgYmUgc29ydGVkIChsb3dlc3QgdG8gaGlnaGVzdClcbiAgICAgKiBiZWZvcmUgZW5jb2RpbmcuXG4gICAgICpcbiAgICAgKiBTbyBhZnRlciB0aGUgZW5jb2RpbmcgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBvdXRwdXQgY29udGFpbnNcbiAgICAgKiB0aGUgc21hbGxlc3QgbnVtYmVyIG9mIHRoZSBzZXQgYW5kIGVhY2ggZm9sbG93aW5nIG51bWJlciBqdXN0XG4gICAgICogcmVwcmVzZW50cyB0aGUgb2Zmc2V0IHRvIGl0cyBwcmV2aW91cyBuZWlnaGJvci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbW9zdGx5IGVmZmljaWVudCBmb3IgaGlnaCBudW1iZXJzLCB0aGF0IGFyZSBcImNsb3NlIHRvIGVhY2ggb3RoZXJcIi5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICBbMTMzNywgMTEsIDEwMSwgMTIzLCA5NiwgNjksIDQyLCA0Ml1cbiAgICAgKiAgIHdpbGwgYmUgc29ydGVkXG4gICAgICogICBbMTEsIDQyLCA0MiwgNjksIDk2LCAxMDEsIDEyMywgMTMzN11cbiAgICAgKiAgIGFuZCBlbmNvZGVkIHRvXG4gICAgICogICBbMTEsIDMxLCAwLCAyNywgMjcsIDUsIDIyLCAxMjE0XVxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFFbmNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcnJJbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFycklucHV0O1xuICAgICAgfVxuXG4gICAgICBhcnJJbnB1dC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH0pO1xuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IGFycklucHV0WzBdO1xuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IGFycklucHV0W2ldIC0gYXJySW5wdXRbaSAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRW5jb2RlKClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIGRlbHRhLWVuY29kZWQgYXJyYXkuXG4gICAgICogU2VlIGBkZWx0YUVuY29kZWAgZnVuY3Rpb24gZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YURlY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IHBhcnNlSW50KGFycklucHV0WzBdLCAxMCk7XG4gICAgICBpZiAoaXNOYU4oYXJySW5wdXRbMF0pKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBwYXJzZUludChhcnJJbnB1dFtpXSwgMTApICsgYXJyT3V0cHV0W2kgLSAxXTtcbiAgICAgICAgaWYgKGlzTmFOKGFyck91dHB1dFtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YURlY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgY2FsbCBmdW5jdGlvbnMgaW4gYGFyckhvb2tGdW5jdGlvbnNgIHdpdGggZ2l2ZW4gYHBhcmFtZXRlcnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PGZ1bmN0aW9uPn0gICBhcnJIb29rRnVuY3Rpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge21peGVkfSAgICAgICAgICAgICBwYXJhbWV0ZXJzICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY2FsbEhvb2tGdW5jdGlvbnM6IGZ1bmN0aW9uIChhcnJIb29rRnVuY3Rpb25zLCBwYXJhbWV0ZXJzKSB7XG4gICAgICB2YXIgajtcblxuICAgICAgaWYgKGFyckhvb2tGdW5jdGlvbnMgJiYgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcnJIb29rRnVuY3Rpb25zW2pdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcnJIb29rRnVuY3Rpb25zW2pdKHBhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImNhbGxIb29rRnVuY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGhleC1mb3JtYXRlZCBjb2xvciB2YWx1ZSBpbnRvIHJnYmEoKS1mb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIGhleCAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBvcHRfb3BhY2l0eSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eTogZnVuY3Rpb24gKGhleCwgb3B0X29wYWNpdHksIG9wdF9hcnJheSkge1xuXG4gICAgICB2YXIgYmlnaW50LCByLCBnLCBiLCBhO1xuXG4gICAgICBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICBvcHRfb3BhY2l0eS52YWx1ZSA9IHBhcnNlSW50KG9wdF9vcGFjaXR5LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIHR5cGVvZiBvcHRfb3BhY2l0eSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRfb3BhY2l0eSA9PT0gJ29iamVjdCcgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IG9wdF9vcGFjaXR5LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHIgPSAoYmlnaW50ID4+IDE2KSAmIDI1NTtcbiAgICAgIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgYiA9IGJpZ2ludCAmIDI1NTtcbiAgICAgIGEgPSBvcHRfb3BhY2l0eSA/IChvcHRfb3BhY2l0eSAvIDEwMCkgOiAxO1xuICAgICAgaWYob3B0X2FycmF5KXtcbiAgICAgICAgcmV0dXJuIFtyLGcsYixhXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVkdWNlIGEgZGVmaW5lZCBzdHlsZSwgdG8gYSBzaW1wbGVyIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBUaGUgcmVkdWNlZCBzdHlsZSBpcyB0aGUgZmlyc3Qgc3R5bGUgb2YgdGhlIGRlZmluZWQgc3R5bGVzZXQsXG4gICAgICogd2l0aCBhIDFweCB0aGljayBzdHJva2UgYW5kIGEgY2lyY2xlIHdpdGggYSA1cHggcmFkaXVzLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGFkZGl0aW9uYWwgZ2VvbWV0cmllcyB3aXRoIGEgbWFpbi1nZW9tZXRyeSxcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSB3aG9sZSBuZXcgc3R5bGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfHN0cmluZ30gICAgICAgICAgIHN0eWxlSWQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxvbC5zdHlsZS5TdHlsZT59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlZHVjZVN0eWxlOiBmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgdmFyIHN0eWxlLFxuICAgICAgICAgIHJlZHVjZWRTdHlsZSxcbiAgICAgICAgICBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlU3R5bGU7XG5cbiAgICAgIGlmICghYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0gfHwgIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUgPSBjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSgpWzBdO1xuXG4gICAgICBmaWxsU3R5bGUgPSBzdHlsZS5nZXRGaWxsKCk7XG4gICAgICBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgICAgc3Ryb2tlU3R5bGUuc2V0V2lkdGgoMSk7XG5cbiAgICAgIHJlZHVjZWRTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHRleHQ6IHN0eWxlLmdldFRleHQoKSxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFtyZWR1Y2VkU3R5bGVdO1xuICAgIH0sIC8vIGVuZCBvZiBcInJlZHVjZVN0eWxlXCJcblxuICAgIC8qKlxuICAgICAqIE1lYXN1cmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdpdmVuIGdlb21ldHJ5LlxuICAgICAqXG4gICAgICogSWYgdGhlIGdlb21ldHJ5IGlzIGEgYExpbmVTdHJpbmdgIHRoZSBmdW5jdGlvbiB3aWxsIG1lYXN1cmUgaXRzIGxlbmd0aCxcbiAgICAgKiBpcyBpdCBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgdGhlIGFjcmVhZ2UsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIGAwYC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBvcHRpb25hbCBgb3B0X2ZvcmNlTGluZU1lYXN1cmVgIHBhcmFtZXRlciBpcyBgdHJ1ZWBcbiAgICAgKiBhbmQgdGhlIGdlb21ldHJ5IGlzIGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSBpdHMgcGVyaW1ldGVyIGluc3RlYWRcbiAgICAgKiBvZiBpdHMgYWNyZWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5nZW9tLkxpbmVTdHJpbmd8b2wuZ2VvbS5Qb2x5Z29ufSAgIGdlb21ldHJ5ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgICAgICAgICAgICAgb3B0X2ZvcmNlTGluZU1lYXN1cmUgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxzdHJpbmc+fG51bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbWVhc3VyZUdlb21ldHJ5OiBmdW5jdGlvbiAoZ2VvbWV0cnksIG9wdF9mb3JjZUxpbmVNZWFzdXJlLCBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgIHNwaGVyZSxcbiAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICBjb29yZDEsXG4gICAgICAgICAgY29vcmQyLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9zcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZyB8fCAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24gJiYgb3B0X2ZvcmNlTGluZU1lYXN1cmUpKSB7XG5cbiAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICAgIGNvb3JkMSA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2ldLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIGNvb3JkMiA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2kgKyAxXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICB2YWx1ZSArPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoY29vcmQxLCBjb29yZDIsIDYzNzgxMzcpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgLy9nZW9tZXRyeSA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyhnZW9tZXRyeS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpKTtcbiAgICAgICAgLy9jb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldExpbmVhclJpbmcoMCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhvbC5zcGhlcmUuZ2V0QXJlYShnZW9tZXRyeSkpO1xuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlICYmIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFsdWUgPSBNYXRoLlBJICogTWF0aC5zcXJ0KHZhbHVlKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH1cblxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yYXdWYWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCgodmFsdWUgKiAxMDApIC8gMTAwKSAvIDEwMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZXh0ZW50IGZvciBhbiBhcnJheSBvZiBnZW9tZXRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0FycmF5LjxvbC5nZW9tLnNpbXBsZUdlb21ldHJ5Pn0gIGFyckdlb21ldHJpZXMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtvbC5FeHRlbnR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllczogZnVuY3Rpb24gKGFyckdlb21ldHJpZXMpIHtcbiAgICAgIHZhciBleHRlbnRTb3VyY2U7XG5cbiAgICAgIGlmICghYXJyR2VvbWV0cmllcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dlb21ldHJpZXMgbWlzc2luZyBmb3IgZXh0ZW50IGNhbGN1bGF0aW9uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW50U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIGV4dGVudFNvdXJjZS5hZGRGZWF0dXJlcyhhcnJHZW9tZXRyaWVzKTtcblxuICAgICAgcmV0dXJuIGV4dGVudFNvdXJjZS5nZXRFeHRlbnQoKSB8fCBvbC5FeHRlbnQoWzAsIDAsIDAsIDBdKTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcygpXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGFycmF5IG9mIGBleHRlbnRzYC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICBleHRlbnRzICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudHM6IGZ1bmN0aW9uIChleHRlbnRzLCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgIGtleTtcblxuICAgICAgaWYgKCFleHRlbnRzIHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL2V4dGVudCA9IG9sLmV4dGVudC5jcmVhdGVFbXB0eSgpO1xuXG4gICAgICBmb3IgKGtleSBpbiBleHRlbnRzKSB7XG4gICAgICAgIGlmIChleHRlbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGV4dGVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW50ID0gZXh0ZW50c1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbC5leHRlbnQuZXh0ZW5kKGV4dGVudCwgZXh0ZW50c1trZXldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpdFRvRXh0ZW50KGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgNSwgMCwgMCwgMik7XG5cblxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudHNcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYGV4dGVudGAuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuRXh0ZW50fSAgZXh0ZW50ICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHthcnJheX0gICAgICBvcHRfcGFkZGluZyAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5ab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWF4Wm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblJlc29sdXRpb24gICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnQ6IGZ1bmN0aW9uIChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbiwgb3B0X21pblpvb20sIG9wdF9tYXhab29tLCBvcHRfbWluUmVzb2x1dGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBmaXRPcHRpb25zO1xuXG4gICAgICBpZiAoIWV4dGVudCB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2aWV3ID0gbWFwLmdldFZpZXcoKTtcblxuICAgICAgZml0T3B0aW9ucyA9IHtcbiAgICAgICAgJ3BhZGRpbmcnOiBvcHRfcGFkZGluZyB8fCBbMjUsIDI1LCAyNSwgMjVdXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0X21pblJlc29sdXRpb24gJiYgb3B0X21pblJlc29sdXRpb24gPiAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluUmVzb2x1dGlvbiA9IG9wdF9taW5SZXNvbHV0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21pblpvb20gJiYgb3B0X21pblpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblpvb20gPSBvcHRfbWluWm9vbTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9tYXhab29tICYmIG9wdF9tYXhab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5tYXhab29tID0gb3B0X21heFpvb207XG4gICAgICB9XG5cbiAgICAgIC8vIGFuaW1hdGUgdGhlIFwiZml0dGluZ1wiIHdoZW4gYSBkdXJhdGlvbiBpcyBnaXZlbiBhbmQgaXRzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICBpZiAob3B0X2FuaW1hdGlvbkR1cmF0aW9uICYmIG9wdF9hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICBjZW50ZXI6IFswLCAwXVxuICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1hcC5iZWZvcmVSZW5kZXIoXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24ucGFuKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICBzb3VyY2U6IHZpZXcuZ2V0Q2VudGVyKClcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnpvb20oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCksIHtwYWRkaW5nOiBbMjUsIDI1LCAyNSwgMjVdfSk7XG4gICAgICAgIC8vdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgICAgLy92aWV3LnNldFpvb20odmlldy5nZXRab29tKCktMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50KClcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJ1biBhbGwgcGxhY2Vob2xkZXIgZnVuY3Rpb25zIGF0IG9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBzdHJJbnB1dCAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICAgICAgICAgICAgICBmZWF0dXJlICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXIgfCB1bmRlZmluZWR9ICBvcHRfbGF5ZXIgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaXJzdCB0d28gcGFyYW1ldGVycyBhcyB0aGV5IHdpbGwgYmUgdXNlZCBieSBhbGwgcGxhY2Vob2xkZXItZnVuY3Rpb25zXG4gICAgICAvLyAtPiBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyhzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQWxsUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke0ZOZnVuY3Rpb25OYW1lfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGB3aW5kb3cuZnVuY3Rpb25OYW1lKGZlYXR1cmUsIHN0eWxlKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqIFN0eWxlIHdpbGwgYmUgdGFrZW4gZWl0aGVyIGZyb20gdGhlIGZlYXR1cmUsIG9yIHRoZSBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXJ9ICBsYXllciAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgIWxheWVyKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7Rk4oW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGZ1bmN0aW9uTmFtZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZnVuY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1tmdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBzdHlsZVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgZmVhdHVyZS5nZXRTdHlsZSgpICYmIHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlKCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGF5ZXIuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgbGF5ZXIuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tmdW5jdGlvbk5hbWVdKGZlYXR1cmUsIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHBsYWNlaG9sZGVycywgaW4gYHN0cklucHV0YCwgZm9yIHZhcmlhYmxlcyBzZXQgYnkgdGhlIGdlb0VkaXRvci5cbiAgICAgKiBWYWxpZCBwbGFjZWhvbGRlcnMgYXJlOiAoW2tleV0gcmVwcmVzZW50cyB0aGUgc3RyaW5nbmFtZSBvZiB0aGUgdmFyaWFibGVzIGtleSlcbiAgICAgKiAgIGAke0VMW2tleV19YCAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVkxba2V5XX1gICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZSwgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICogICBgJHtFVltrZXldfWAgICA9PiAgVmFsdWUgb2YgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVlZba2V5XX1gICA9PiAgU2FtZSBhcyBgJHtFVltrZXldfWBcbiAgICAgKlxuICAgICAqIElmIG5vIGFwcHJvcHJpYXRlIHZhbHVlIGNhbiBiZSBmb3VuZCBmb3IgYSBwbGFjZWhvbGRlclxuICAgICAqIGl0IHdpbGwgc2ltcGx5IGJlIHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoRVY/W0xWXSkoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIHR5cGUsIGV2S2V5LCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIGVkaXRvclZhcnMsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBoYXMgZWRpdG9yVmFyc1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJykpIHtcbiAgICAgICAgICAgICAgZWRpdG9yVmFycyA9IGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJyk7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBmb3IgZWRpdG9yVmFyIHdpdGgga2V5ID09IGV2S2V5XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlZGl0b3JWYXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvclZhcnNbaV0ua2V5ID09PSBldktleSkge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgdHlwZSBpcyAnRVZMJyBkaXNwbGF5IGxhYmVsIG9ubHkgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0VMJyB8fCAodHlwZSA9PT0gJ0VWTCcgJiYgZWRpdG9yVmFyc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke2F0dHJ9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYGZlYXR1cmUuZ2V0KGF0dHIpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGF0dHIsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5nZXQoYXR0cikgfHwgJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKClcblxuICAgIG9iamVjdFRvQXJyYXk6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sIC8vIGVuZCBvZiBvYmplY3RUb0FycmF5KClcblxuICAgIGdldFZlY3RvckxheWVyKHNvdXJjZSwgc3R5bGUpIHtcbiAgICAgICAgdmFyIGZuU3R5bGU7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHN0eWxlIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm5TdHlsZSA9IHN0eWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgc3R5bGU6IGZuU3R5bGVcbiAgICAgICAgfSk7XG4gICAgfSwvLyBlbmQgb2YgXCJnZXRWZWN0b3JMYXllcigpXCJcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBzdWJkb21haW4gZnJvbSB0aGUgY3VycmVudCByZXF1ZXN0IGhvc3QgYW5kIHJldHVybnMgaXQuXG4gICAgICogQHJldHVybnMge3N0cmluZyB8ICp9XG4gICAgICovXG4gICAgZ2V0Q3VycmVudFN1YmRvbWFpbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgcmVkcmF3TWFwVmlldzogZnVuY3Rpb24gKG1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHZhciBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyVG9wTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgbWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQucHJlcGVuZChjb250cm9sQ29udGFpbmVyVG9wTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgICQoY29udHJvbENvbnRhaW5lclRvcExlZnQpLmFmdGVyKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcbiAgICAgIG1hcENvbnRyb2xsZXIubGVmdFNsaWRlRWxlbWVudHMucHVzaChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAgIGlmIChtYXBEYXRhLnNjYWxlbGluZSkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUgPSBuZXcgb2wuY29udHJvbC5TY2FsZUxpbmUoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgIH1cblxuICAgICAgJChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCkuYXBwZW5kKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViKTtcblxuICAgICAgaWYgKG1hcERhdGEuem9vbWxldmVsKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCA9IG5ldyBab29tbGV2ZWwoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbiA9IG5ldyBvbC5jb250cm9sLk1vdXNlUG9zaXRpb24oe1xuICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGNvb3JkaW5hdGVGb3JtYXQ6IG9sLmNvb3JkaW5hdGUudG9TdHJpbmdIRE1TLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XSB8fCAnJztcbiAgICB9LFxuICAgIHN0b3JlVmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlOyAvLyBvbmx5IHN0cmluZ3NcbiAgICB9XG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciB1dGlscyA9IHRoaXMuYzRnLm1hcHMudXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyIsImltcG9ydCB7QzRnT3ZlcmxheX0gZnJvbSBcIi4vYzRnLW92ZXJsYXlcIlxuXG5leHBvcnQgY2xhc3MgQzRnT3ZlcmxheUNvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IoYmFzZWxheWVyKXtcbiAgICAgICAgdGhpcy5iYXNlbGF5ZXIgPSBiYXNlbGF5ZXI7XG4gICAgICAgIHRoaXMuYXJyT3ZlcmxheXMgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgc2hvd092ZXJsYXlMYXllcihvdmVybGF5SWQpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvdmVybGF5TGF5ZXJDb25maWcsXG4gICAgICAgICAgICBvc21Tb3VyY2VDb25maWdzID0gYzRnLm1hcHMuY29uZmlnLm9zbSxcbiAgICAgICAgICAgIHN0YW1lblNvdXJjZUNvbmZpZ3MgPSBjNGcubWFwcy5jb25maWcuc3RhbWVuLFxuICAgICAgICAgICAgbGF5ZXJPcHRpb25zLFxuICAgICAgICAgICAgb3ZlcmxheUxheWVyLFxuICAgICAgICAgICAgbm9Vcmw7XG5cbiAgICAgICAgbGF5ZXJPcHRpb25zID0ge307XG4gICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5PU00oKVxuICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGF5TGF5ZXJDb25maWcgPSB0aGlzLmFyck92ZXJsYXlzW292ZXJsYXlJZF07XG5cbiAgICAgICAgc3dpdGNoIChvdmVybGF5TGF5ZXJDb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ29zbSc6XG4gICAgICAgICAgICAgICAgaWYgKG9zbVNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuT1NNKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9zbVNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YW1lblNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFtZW5cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlN0YW1lbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFtZW5Tb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAobWFwUXVlc3RTb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyBtYXBRdWVzdFxuICAgICAgICAgICAgICAgICAgICAvLyAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5NYXBRdWVzdChtYXBRdWVzdFNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJsYXlMYXllckNvbmZpZy5zdHlsZSA9PT0gJ29zbV9jdXN0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbVxuICAgICAgICAgICAgICAgICAgICBub1VybCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGF5TGF5ZXJDb25maWcuYXR0cmlidXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBvdmVybGF5TGF5ZXJDb25maWcuYXR0cmlidXRpb24gKyAnICcgKyBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXlMYXllckNvbmZpZy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBvdmVybGF5TGF5ZXJDb25maWcudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9VcmwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVybGF5TGF5ZXJDb25maWcudXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybHMgPSBvdmVybGF5TGF5ZXJDb25maWcudXJscztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVXJsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub1VybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVoobGF5ZXJPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2N1c3RvbSB1cmwocykgbWlzc2luZyAtPiBzd2l0Y2ggdG8gZGVmYXVsdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bnN1cHBvcnRlZCBvc20tc3R5bGUgLT4gc3dpdGNoIHRvIGRlZmF1bHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnb29nbGUnOlxuICAgICAgICAgICAgICAgIC8vQHRvZG9cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dvb2dsZS1tYXBzIGFyZSBjdXJyZW50bHkgdW5zdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JpbmcnOlxuICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuYXBpS2V5ICYmIG92ZXJsYXlMYXllckNvbmZpZy5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuQmluZ01hcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1bHR1cmU6IG5hdmlnYXRvci5sYW5ndWFnZXMgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG92ZXJsYXlMYXllckNvbmZpZy5hcGlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeVNldDogb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIGJpbmcta2V5IG9yIGludmFsaWQgaW1hZ2VyeS1zZXQhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd21zJzpcbiAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5UaWxlV01TKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogb3ZlcmxheUxheWVyQ29uZmlnLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSUzogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy5sYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkVSU0lPTjogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRk9STUFUOiBvdmVybGF5TGF5ZXJDb25maWcucGFyYW1zLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVDogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy50cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogb3ZlcmxheUxheWVyQ29uZmlnLmd1dHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogb3ZlcmxheUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTlxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgLy9leHRlbnQ6IG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KFs1LjU5MzM0LCA1MC4wNTc4LCA5Ljc0MTU4LCA1Mi43OTk4XSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb3dtJzpcbiAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBvdmVybGF5TGF5ZXJDb25maWcudXJsICsgb3ZlcmxheUxheWVyQ29uZmlnLmFwcF9pZCArICcve3p9L3t4fS97eX0/aGFzaD0nICsgb3ZlcmxheUxheWVyQ29uZmlnLmFwaV9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IG92ZXJsYXlMYXllckNvbmZpZy5hdHRyaWJ1dGlvbiArICcgJyArIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT05cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZW50OiBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChbNS41OTMzNCwgNTAuMDU3OCwgOS43NDE1OCwgNTIuNzk5OF0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bnN1cHBvcnRlZCBwcm92aWRlcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJsYXlMYXllci5zZXRPcGFjaXR5KHBhcnNlSW50KG92ZXJsYXlMYXllckNvbmZpZy5vcGFjaXR5KS8xMDApO1xuICAgICAgICB0aGlzLmFyck92ZXJsYXlzW292ZXJsYXlJZF0ubGF5ZXIgPSBvdmVybGF5TGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmFyck92ZXJsYXlzW292ZXJsYXlJZF0ubGF5ZXJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS1jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEM0Z092ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Iob3ZlcmxheUFyciwgbWFwQ29udHJvbGxlcil7XG4gICAgICAgIHRoaXMuaWQgICAgICAgICAgICA9IG92ZXJsYXlBcnJbJ2lkJ107XG4gICAgICAgIHRoaXMucGlkICAgICAgICAgICA9IG92ZXJsYXlBcnJbJ3BpZCddO1xuICAgICAgICB0aGlzLm5hbWUgICAgICAgICAgPSBvdmVybGF5QXJyWyduYW1lJ107XG4gICAgICAgIHRoaXMucHJvdmlkZXIgICAgICA9IG92ZXJsYXlBcnJbJ3Byb3ZpZGVyJ107XG4gICAgICAgIHRoaXMuc3R5bGUgICAgICAgICA9IG92ZXJsYXlBcnJbJ3N0eWxlJ107XG4gICAgICAgIHRoaXMudXJsICAgICAgICAgICA9IG92ZXJsYXlBcnJbJ3VybCddO1xuICAgICAgICB0aGlzLnVybHMgICAgICAgICAgPSBvdmVybGF5QXJyWyd1cmxzJ107XG4gICAgICAgIHRoaXMub3BhY2l0eSAgICAgICA9IG92ZXJsYXlBcnJbJ29wYWNpdHknXTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGlvbiAgID0gb3ZlcmxheUFyclsnYXR0cmlidXRpb24nXTtcbiAgICAgICAgdGhpcy5ndXR0ZXIgICAgICAgID0gb3ZlcmxheUFyclsnZ3V0dGVyJ107XG4gICAgICAgIHRoaXMucGFyYW1zICAgICAgICA9IG92ZXJsYXlBcnJbJ3BhcmFtcyddO1xuICAgICAgICB0aGlzLmxheWVyICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5QXJyICAgID0gb3ZlcmxheUFycjtcbiAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyICAgID0gbWFwQ29udHJvbGxlclxuICAgIH1cblxuICAgIFxuXG4gICAgY2hhbmdlT3BhY2l0eSh2YWx1ZSl7XG4gICAgICAgIHZhciBsYXllcjtcblxuICAgICAgICBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgICAgICAgICBsYXllci5zZXRPcGFjaXR5KHZhbHVlLzEwMCk7XG4gICAgICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1vdmVybGF5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==