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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-baselayer.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTIyOTIxMDRiY2Y5M2VhMDY3NjAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW92ZXJsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1vdmVybGF5LmpzIl0sIm5hbWVzIjpbIkM0Z0Jhc2VsYXllciIsImJhc2VsYXllckFyciIsImNvbnRyb2xsZXIiLCJpZCIsInBpZCIsIm5hbWUiLCJkaXNwbGF5X25hbWUiLCJwcm92aWRlciIsIm9zbV9zdHlsZSIsIm9zbV9zdHlsZV91cmwxIiwib3NtX3N0eWxlX3VybDIiLCJvc21fc3R5bGVfdXJsMyIsIm9zbV9zdHlsZV91cmw0Iiwib3NtX2tleW5hbWUiLCJtYXBib3hfdHlwZSIsImJpbmdfc3R5bGUiLCJzdHlsZSIsImF0dHJpYnV0aW9uIiwicGFyYW1zIiwid21zX2d1dHRlciIsIm1pblpvb20iLCJtYXhab29tIiwicHJvdGVjdF9iYXNlbGF5ZXIiLCJwZXJtaXR0ZWRfZ3JvdXBzIiwiYXBpX2tleSIsImFwcF9pZCIsInRodW5kZXJmb3Jlc3RfdHlwZSIsImhlcmVfdHlwZSIsImNlc2l1bSIsImhpZGVfaW5fYmUiLCJ1cmwiLCJ1cmxzIiwia2xva2FuX3R5cGUiLCJzdHlsZV91cmwiLCJoYXNPdmVybGF5cyIsIm92ZXJsYXlzIiwibGF5ZXJHcm91cCIsImluZGV4IiwiaGFzT3duUHJvcGVydHkiLCJvdmVybGF5Q29udHJvbGxlciIsIkM0Z092ZXJsYXlDb250cm9sbGVyIiwibGF5ZXIiLCJiYXNlbGF5ZXIiLCJhcnJPdmVybGF5cyIsIm92ZXJsYXlJZCIsInNlbGYiLCJvdmVybGF5TGF5ZXJDb25maWciLCJvc21Tb3VyY2VDb25maWdzIiwiYzRnIiwibWFwcyIsImNvbmZpZyIsIm9zbSIsInN0YW1lblNvdXJjZUNvbmZpZ3MiLCJzdGFtZW4iLCJsYXllck9wdGlvbnMiLCJvdmVybGF5TGF5ZXIiLCJub1VybCIsIm9sIiwiVGlsZSIsInNvdXJjZSIsIk9TTSIsImpRdWVyeSIsImV4dGVuZCIsIlN0YW1lbiIsImF0dHJpYnV0aW9ucyIsIkFUVFJJQlVUSU9OIiwiWFlaIiwiY29uc29sZSIsIndhcm4iLCJiYXNlTGF5ZXJDb25maWciLCJhcGlLZXkiLCJCaW5nTWFwcyIsImN1bHR1cmUiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInVzZXJMYW5ndWFnZSIsImtleSIsImltYWdlcnlTZXQiLCJUaWxlV01TIiwiTEFZRVJTIiwibGF5ZXJzIiwiVkVSU0lPTiIsInZlcnNpb24iLCJUUkFOU1BBUkVOVCIsInRyYW5zcGFyZW50IiwiZ3V0dGVyIiwic2V0T3BhY2l0eSIsInBhcnNlSW50Iiwib3BhY2l0eSIsIkM0Z092ZXJsYXkiLCJvdmVybGF5QXJyIiwibWFwQ29udHJvbGxlciIsInZhbHVlIiwibWFwIiwicmVtb3ZlTGF5ZXIiLCJhZGRMYXllciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUVPLElBQU1BLFlBQWIsR0FDSSxzQkFBWUMsWUFBWixFQUEwQkMsVUFBMUIsRUFBc0M7QUFBQTs7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QUFMLEdBQXFCMkUsV0FBVyxPQUFYLENBQXJCO0FBQ0EsYUFBSzdELEdBQUwsR0FBcUI2RCxXQUFXLEtBQVgsQ0FBckI7QUFDQSxhQUFLNUQsSUFBTCxHQUFxQjRELFdBQVcsTUFBWCxDQUFyQjtBQUNBLGFBQUtGLE9BQUwsR0FBcUJFLFdBQVcsU0FBWCxDQUFyQjtBQUNBLGFBQUsxRSxXQUFMLEdBQXFCMEUsV0FBVyxhQUFYLENBQXJCO0FBQ0EsYUFBS0wsTUFBTCxHQUFxQkssV0FBVyxRQUFYLENBQXJCO0FBQ0EsYUFBS3pFLE1BQUwsR0FBcUJ5RSxXQUFXLFFBQVgsQ0FBckI7QUFDQSxhQUFLbEQsS0FBTCxHQUFxQixLQUFyQjtBQUNBLGFBQUtrRCxVQUFMLEdBQXFCQSxVQUFyQjtBQUNBLGFBQUtDLGFBQUwsR0FBd0JBLGFBQXhCO0FBQ0g7O0FBakJMO0FBQUE7QUFBQSxzQ0FxQmtCQyxLQXJCbEIsRUFxQndCO0FBQ2hCLGdCQUFJcEQsS0FBSjs7QUFFQUEsb0JBQVEsS0FBS0EsS0FBYjtBQUNBLGdCQUFJQSxLQUFKLEVBQVc7QUFDUCxxQkFBS21ELGFBQUwsQ0FBbUJFLEdBQW5CLENBQXVCQyxXQUF2QixDQUFtQ3RELEtBQW5DO0FBQ0FBLHNCQUFNOEMsVUFBTixDQUFpQk0sUUFBTSxHQUF2QjtBQUNBLHFCQUFLRCxhQUFMLENBQW1CRSxHQUFuQixDQUF1QkUsUUFBdkIsQ0FBZ0N2RCxLQUFoQztBQUNIO0FBQ0o7QUE5Qkw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImM0Zy1iYXNlbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWJhc2VsYXllci5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MjI5MjEwNGJjZjkzZWEwNjc2MCIsImltcG9ydCB7QzRnT3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gXCIuL2M0Zy1vdmVybGF5LWNvbnRyb2xsZXJcIlxuXG5leHBvcnQgY2xhc3MgQzRnQmFzZWxheWVye1xuICAgIGNvbnN0cnVjdG9yKGJhc2VsYXllckFyciwgY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLmlkID0gYmFzZWxheWVyQXJyWydpZCddO1xuICAgICAgICB0aGlzLnBpZCA9IGJhc2VsYXllckFyclsncGlkJ107XG4gICAgICAgIHRoaXMubmFtZSA9IGJhc2VsYXllckFyclsnbmFtZSddO1xuICAgICAgICB0aGlzLmRpc3BsYXlfbmFtZSA9IGJhc2VsYXllckFyclsnZGlzcGxheV9uYW1lJ107XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBiYXNlbGF5ZXJBcnJbJ3Byb3ZpZGVyJ107XG4gICAgICAgIHRoaXMub3NtX3N0eWxlID0gYmFzZWxheWVyQXJyWydvc21fc3R5bGUnXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsMSA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDEnXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsMiA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDInXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsMyA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDMnXTtcbiAgICAgICAgdGhpcy5vc21fc3R5bGVfdXJsNCA9IGJhc2VsYXllckFyclsnb3NtX3N0eWxlX3VybDQnXTtcbiAgICAgICAgdGhpcy5vc21fa2V5bmFtZSA9IGJhc2VsYXllckFyclsnb3NtX2tleW5hbWUnXTtcbiAgICAgICAgdGhpcy5tYXBib3hfdHlwZSA9IGJhc2VsYXllckFyclsnbWFwYm94X3R5cGUnXTtcbiAgICAgICAgdGhpcy5iaW5nX3N0eWxlID0gYmFzZWxheWVyQXJyWydiaW5nX3N0eWxlJ107XG4gICAgICAgIHRoaXMuc3R5bGUgPSBiYXNlbGF5ZXJBcnJbJ3N0eWxlJ107XG4gICAgICAgIHRoaXMuYXR0cmlidXRpb24gPSBiYXNlbGF5ZXJBcnJbJ2F0dHJpYnV0aW9uJ107XG4gICAgICAgIHRoaXMucGFyYW1zID0gYmFzZWxheWVyQXJyWydwYXJhbXMnXTtcbiAgICAgICAgdGhpcy53bXNfZ3V0dGVyID0gYmFzZWxheWVyQXJyWyd3bXNfZ3V0dGVyJ107XG4gICAgICAgIHRoaXMubWluWm9vbSA9IGJhc2VsYXllckFyclsnbWluWm9vbSddO1xuICAgICAgICB0aGlzLm1heFpvb20gPSBiYXNlbGF5ZXJBcnJbJ21heFpvb20nXTtcbiAgICAgICAgdGhpcy5wcm90ZWN0X2Jhc2VsYXllciA9IGJhc2VsYXllckFyclsncHJvdGVjdF9iYXNlbGF5ZXInXTtcbiAgICAgICAgdGhpcy5wZXJtaXR0ZWRfZ3JvdXBzID0gYmFzZWxheWVyQXJyWydwZXJtaXR0ZWRfZ3JvdXBzJ107XG4gICAgICAgIHRoaXMuYXBpX2tleSA9IGJhc2VsYXllckFyclsnYXBpS2V5J10gPyBiYXNlbGF5ZXJBcnJbJ2FwaUtleSddIDogYmFzZWxheWVyQXJyWydhcGlfa2V5J107XG4gICAgICAgIHRoaXMuYXBwX2lkID0gYmFzZWxheWVyQXJyWydhcHBfaWQnXTtcbiAgICAgICAgdGhpcy50aHVuZGVyZm9yZXN0X3R5cGUgPSBiYXNlbGF5ZXJBcnJbJ3RodW5kZXJmb3Jlc3RfdHlwZSddO1xuICAgICAgICB0aGlzLmhlcmVfdHlwZSA9IGJhc2VsYXllckFyclsnaGVyZV90eXBlJ107XG4gICAgICAgIHRoaXMuY2VzaXVtID0gYmFzZWxheWVyQXJyWydjZXNpdW0nXTtcbiAgICAgICAgdGhpcy5oaWRlX2luX2JlID0gYmFzZWxheWVyQXJyWydoaWRlX2luX2JlJ107XG4gICAgICAgIHRoaXMudXJsID0gYmFzZWxheWVyQXJyWyd1cmwnXTtcbiAgICAgICAgdGhpcy51cmxzID0gYmFzZWxheWVyQXJyWyd1cmxzJ107XG4gICAgICAgIHRoaXMua2xva2FuX3R5cGUgPSBiYXNlbGF5ZXJBcnJbJ2tsb2thbl90eXBlJ107XG4gICAgICAgIHRoaXMuc3R5bGVfdXJsID0gYmFzZWxheWVyQXJyWydzdHlsZV91cmwnXTtcbiAgICAgICAgdGhpcy5oYXNPdmVybGF5cyA9IGJhc2VsYXllckFyclsnaGFzT3ZlcmxheXMnXTtcbiAgICAgICAgdGhpcy5vdmVybGF5cyA9IGJhc2VsYXllckFyclsnb3ZlcmxheXMnXTtcbiAgICAgICAgaWYoYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ10pe1xuICAgICAgICAgICAgbGV0IGxheWVyR3JvdXAgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggaW4gYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ10gKXtcbiAgICAgICAgICAgICAgICBpZihiYXNlbGF5ZXJBcnJbJ2xheWVyR3JvdXAnXS5oYXNPd25Qcm9wZXJ0eShpbmRleCkpe1xuICAgICAgICAgICAgICAgICAgbGF5ZXJHcm91cFtpbmRleF0gPSBuZXcgQzRnQmFzZWxheWVyKGJhc2VsYXllckFyclsnbGF5ZXJHcm91cCddW2luZGV4XVsnZW50cnknXSk7XG4gICAgICAgICAgICAgICAgICBsYXllckdyb3VwW2luZGV4XVsnbWluWm9vbSddID0gYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ11baW5kZXhdWydtaW5ab29tJ107XG4gICAgICAgICAgICAgICAgICBsYXllckdyb3VwW2luZGV4XVsnbWF4Wm9vbSddID0gYmFzZWxheWVyQXJyWydsYXllckdyb3VwJ11baW5kZXhdWydtYXhab29tJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXllckdyb3VwID0gbGF5ZXJHcm91cDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm92ZXJsYXlDb250cm9sbGVyID0gbmV3IEM0Z092ZXJsYXlDb250cm9sbGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmxheWVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctYmFzZWxheWVyLmpzIiwiaW1wb3J0IHtDNGdPdmVybGF5fSBmcm9tIFwiLi9jNGctb3ZlcmxheVwiXG5cbmV4cG9ydCBjbGFzcyBDNGdPdmVybGF5Q29udHJvbGxlcntcbiAgICBjb25zdHJ1Y3RvcihiYXNlbGF5ZXIpe1xuICAgICAgICB0aGlzLmJhc2VsYXllciA9IGJhc2VsYXllcjtcbiAgICAgICAgdGhpcy5hcnJPdmVybGF5cyA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBzaG93T3ZlcmxheUxheWVyKG92ZXJsYXlJZCl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIG92ZXJsYXlMYXllckNvbmZpZyxcbiAgICAgICAgICAgIG9zbVNvdXJjZUNvbmZpZ3MgPSBjNGcubWFwcy5jb25maWcub3NtLFxuICAgICAgICAgICAgc3RhbWVuU291cmNlQ29uZmlncyA9IGM0Zy5tYXBzLmNvbmZpZy5zdGFtZW4sXG4gICAgICAgICAgICBsYXllck9wdGlvbnMsXG4gICAgICAgICAgICBvdmVybGF5TGF5ZXIsXG4gICAgICAgICAgICBub1VybDtcblxuICAgICAgICBsYXllck9wdGlvbnMgPSB7fTtcbiAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLk9TTSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJsYXlMYXllckNvbmZpZyA9IHRoaXMuYXJyT3ZlcmxheXNbb3ZlcmxheUlkXTtcblxuICAgICAgICBzd2l0Y2ggKG92ZXJsYXlMYXllckNvbmZpZy5wcm92aWRlcikge1xuICAgICAgICAgICAgY2FzZSAnb3NtJzpcbiAgICAgICAgICAgICAgICBpZiAob3NtU291cmNlQ29uZmlnc1tvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5PU00oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3NtU291cmNlQ29uZmlnc1tvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhbWVuU291cmNlQ29uZmlnc1tvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YW1lblxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuU3RhbWVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YW1lblNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChtYXBRdWVzdFNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIG1hcFF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLk1hcFF1ZXN0KG1hcFF1ZXN0U291cmNlQ29uZmlnc1tvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVdKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlID09PSAnb3NtX2N1c3RvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgIG5vVXJsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXlMYXllckNvbmZpZy5hdHRyaWJ1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLmF0dHJpYnV0aW9ucyA9IG92ZXJsYXlMYXllckNvbmZpZy5hdHRyaWJ1dGlvbiArICcgJyArIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT047XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxheUxheWVyQ29uZmlnLnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybCA9IG92ZXJsYXlMYXllckNvbmZpZy51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBub1VybCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJsYXlMYXllckNvbmZpZy51cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMudXJscyA9IG92ZXJsYXlMYXllckNvbmZpZy51cmxzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9VcmwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWihsYXllck9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignY3VzdG9tIHVybChzKSBtaXNzaW5nIC0+IHN3aXRjaCB0byBkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3Vuc3VwcG9ydGVkIG9zbS1zdHlsZSAtPiBzd2l0Y2ggdG8gZGVmYXVsdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dvb2dsZSc6XG4gICAgICAgICAgICAgICAgLy9AdG9kb1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZ29vZ2xlLW1hcHMgYXJlIGN1cnJlbnRseSB1bnN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGJhc2VMYXllckNvbmZpZy5hcGlLZXkgJiYgb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5CaW5nTWFwcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VsdHVyZTogbmF2aWdhdG9yLmxhbmd1YWdlcyA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogb3ZlcmxheUxheWVyQ29uZmlnLmFwaUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXJ5U2V0OiBvdmVybGF5TGF5ZXJDb25maWcuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignd3JvbmcgYmluZy1rZXkgb3IgaW52YWxpZCBpbWFnZXJ5LXNldCEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3bXMnOlxuICAgICAgICAgICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlRpbGVXTVMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBvdmVybGF5TGF5ZXJDb25maWcudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTEFZRVJTOiBvdmVybGF5TGF5ZXJDb25maWcucGFyYW1zLmxheWVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWRVJTSU9OOiBvdmVybGF5TGF5ZXJDb25maWcucGFyYW1zLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9GT1JNQVQ6IG92ZXJsYXlMYXllckNvbmZpZy5wYXJhbXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRSQU5TUEFSRU5UOiBvdmVybGF5TGF5ZXJDb25maWcucGFyYW1zLnRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3V0dGVyOiBvdmVybGF5TGF5ZXJDb25maWcuZ3V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb25zOiBvdmVybGF5TGF5ZXJDb25maWcuYXR0cmlidXRpb24gKyAnICcgKyBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAvL2V4dGVudDogb2wucHJvai50cmFuc2Zvcm1FeHRlbnQoWzUuNTkzMzQsIDUwLjA1NzgsIDkuNzQxNTgsIDUyLjc5OThdLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvd20nOlxuICAgICAgICAgICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlhZWih7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG92ZXJsYXlMYXllckNvbmZpZy51cmwgKyBvdmVybGF5TGF5ZXJDb25maWcuYXBwX2lkICsgJy97en0ve3h9L3t5fT9oYXNoPScgKyBvdmVybGF5TGF5ZXJDb25maWcuYXBpX2tleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogb3ZlcmxheUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTlxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgLy9leHRlbnQ6IG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KFs1LjU5MzM0LCA1MC4wNTc4LCA5Ljc0MTU4LCA1Mi43OTk4XSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3Vuc3VwcG9ydGVkIHByb3ZpZGVyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgb3ZlcmxheUxheWVyLnNldE9wYWNpdHkocGFyc2VJbnQob3ZlcmxheUxheWVyQ29uZmlnLm9wYWNpdHkpLzEwMCk7XG4gICAgICAgIHRoaXMuYXJyT3ZlcmxheXNbb3ZlcmxheUlkXS5sYXllciA9IG92ZXJsYXlMYXllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyT3ZlcmxheXNbb3ZlcmxheUlkXS5sYXllclxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1vdmVybGF5LWNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgQzRnT3ZlcmxheSB7XG5cbiAgICBjb25zdHJ1Y3RvcihvdmVybGF5QXJyLCBtYXBDb250cm9sbGVyKXtcbiAgICAgICAgdGhpcy5pZCAgICAgICAgICAgID0gb3ZlcmxheUFyclsnaWQnXTtcbiAgICAgICAgdGhpcy5waWQgICAgICAgICAgID0gb3ZlcmxheUFyclsncGlkJ107XG4gICAgICAgIHRoaXMubmFtZSAgICAgICAgICA9IG92ZXJsYXlBcnJbJ25hbWUnXTtcbiAgICAgICAgdGhpcy5wcm92aWRlciAgICAgID0gb3ZlcmxheUFyclsncHJvdmlkZXInXTtcbiAgICAgICAgdGhpcy5zdHlsZSAgICAgICAgID0gb3ZlcmxheUFyclsnc3R5bGUnXTtcbiAgICAgICAgdGhpcy51cmwgICAgICAgICAgID0gb3ZlcmxheUFyclsndXJsJ107XG4gICAgICAgIHRoaXMudXJscyAgICAgICAgICA9IG92ZXJsYXlBcnJbJ3VybHMnXTtcbiAgICAgICAgdGhpcy5vcGFjaXR5ICAgICAgID0gb3ZlcmxheUFyclsnb3BhY2l0eSddO1xuICAgICAgICB0aGlzLmF0dHJpYnV0aW9uICAgPSBvdmVybGF5QXJyWydhdHRyaWJ1dGlvbiddO1xuICAgICAgICB0aGlzLmd1dHRlciAgICAgICAgPSBvdmVybGF5QXJyWydndXR0ZXInXTtcbiAgICAgICAgdGhpcy5wYXJhbXMgICAgICAgID0gb3ZlcmxheUFyclsncGFyYW1zJ107XG4gICAgICAgIHRoaXMubGF5ZXIgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm92ZXJsYXlBcnIgICAgPSBvdmVybGF5QXJyO1xuICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIgICAgPSBtYXBDb250cm9sbGVyXG4gICAgfVxuXG4gICAgXG5cbiAgICBjaGFuZ2VPcGFjaXR5KHZhbHVlKXtcbiAgICAgICAgdmFyIGxheWVyO1xuXG4gICAgICAgIGxheWVyID0gdGhpcy5sYXllcjtcbiAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICAgICAgICAgIGxheWVyLnNldE9wYWNpdHkodmFsdWUvMTAwKTtcbiAgICAgICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW92ZXJsYXkuanMiXSwic291cmNlUm9vdCI6IiJ9