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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-overlay-controller.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2NkYjI1MjYxODE0MjEwNjc4ZjIiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW92ZXJsYXkuanMiXSwibmFtZXMiOlsiQzRnT3ZlcmxheUNvbnRyb2xsZXIiLCJiYXNlbGF5ZXIiLCJhcnJPdmVybGF5cyIsIm92ZXJsYXlJZCIsInNlbGYiLCJvdmVybGF5TGF5ZXJDb25maWciLCJvc21Tb3VyY2VDb25maWdzIiwiYzRnIiwibWFwcyIsImNvbmZpZyIsIm9zbSIsInN0YW1lblNvdXJjZUNvbmZpZ3MiLCJzdGFtZW4iLCJsYXllck9wdGlvbnMiLCJvdmVybGF5TGF5ZXIiLCJub1VybCIsIm9sIiwibGF5ZXIiLCJUaWxlIiwic291cmNlIiwiT1NNIiwicHJvdmlkZXIiLCJzdHlsZSIsImpRdWVyeSIsImV4dGVuZCIsIlN0YW1lbiIsImF0dHJpYnV0aW9uIiwiYXR0cmlidXRpb25zIiwiQVRUUklCVVRJT04iLCJ1cmwiLCJ1cmxzIiwiWFlaIiwiY29uc29sZSIsIndhcm4iLCJiYXNlTGF5ZXJDb25maWciLCJhcGlLZXkiLCJCaW5nTWFwcyIsImN1bHR1cmUiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInVzZXJMYW5ndWFnZSIsImtleSIsImltYWdlcnlTZXQiLCJUaWxlV01TIiwicGFyYW1zIiwiTEFZRVJTIiwibGF5ZXJzIiwiVkVSU0lPTiIsInZlcnNpb24iLCJUUkFOU1BBUkVOVCIsInRyYW5zcGFyZW50IiwiZ3V0dGVyIiwiYXBwX2lkIiwiYXBpX2tleSIsInNldE9wYWNpdHkiLCJwYXJzZUludCIsIm9wYWNpdHkiLCJDNGdPdmVybGF5Iiwib3ZlcmxheUFyciIsIm1hcENvbnRyb2xsZXIiLCJpZCIsInBpZCIsIm5hbWUiLCJ2YWx1ZSIsIm1hcCIs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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW92ZXJsYXktY29udHJvbGxlci5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3Y2RiMjUyNjE4MTQyMTA2NzhmMiIsImltcG9ydCB7QzRnT3ZlcmxheX0gZnJvbSBcIi4vYzRnLW92ZXJsYXlcIlxuXG5leHBvcnQgY2xhc3MgQzRnT3ZlcmxheUNvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IoYmFzZWxheWVyKXtcbiAgICAgICAgdGhpcy5iYXNlbGF5ZXIgPSBiYXNlbGF5ZXI7XG4gICAgICAgIHRoaXMuYXJyT3ZlcmxheXMgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgc2hvd092ZXJsYXlMYXllcihvdmVybGF5SWQpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvdmVybGF5TGF5ZXJDb25maWcsXG4gICAgICAgICAgICBvc21Tb3VyY2VDb25maWdzID0gYzRnLm1hcHMuY29uZmlnLm9zbSxcbiAgICAgICAgICAgIHN0YW1lblNvdXJjZUNvbmZpZ3MgPSBjNGcubWFwcy5jb25maWcuc3RhbWVuLFxuICAgICAgICAgICAgbGF5ZXJPcHRpb25zLFxuICAgICAgICAgICAgb3ZlcmxheUxheWVyLFxuICAgICAgICAgICAgbm9Vcmw7XG5cbiAgICAgICAgbGF5ZXJPcHRpb25zID0ge307XG4gICAgICAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5PU00oKVxuICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGF5TGF5ZXJDb25maWcgPSB0aGlzLmFyck92ZXJsYXlzW292ZXJsYXlJZF07XG5cbiAgICAgICAgc3dpdGNoIChvdmVybGF5TGF5ZXJDb25maWcucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ29zbSc6XG4gICAgICAgICAgICAgICAgaWYgKG9zbVNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuT1NNKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9zbVNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YW1lblNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFtZW5cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlN0YW1lbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFtZW5Tb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAobWFwUXVlc3RTb3VyY2VDb25maWdzW292ZXJsYXlMYXllckNvbmZpZy5zdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyBtYXBRdWVzdFxuICAgICAgICAgICAgICAgICAgICAvLyAgIG92ZXJsYXlMYXllciA9IG5ldyBvbC5sYXllci5UaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5NYXBRdWVzdChtYXBRdWVzdFNvdXJjZUNvbmZpZ3Nbb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJsYXlMYXllckNvbmZpZy5zdHlsZSA9PT0gJ29zbV9jdXN0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbVxuICAgICAgICAgICAgICAgICAgICBub1VybCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGF5TGF5ZXJDb25maWcuYXR0cmlidXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy5hdHRyaWJ1dGlvbnMgPSBvdmVybGF5TGF5ZXJDb25maWcuYXR0cmlidXRpb24gKyAnICcgKyBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXlMYXllckNvbmZpZy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3B0aW9ucy51cmwgPSBvdmVybGF5TGF5ZXJDb25maWcudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9VcmwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVybGF5TGF5ZXJDb25maWcudXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zLnVybHMgPSBvdmVybGF5TGF5ZXJDb25maWcudXJscztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVXJsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub1VybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheUxheWVyID0gbmV3IG9sLmxheWVyLlRpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVoobGF5ZXJPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2N1c3RvbSB1cmwocykgbWlzc2luZyAtPiBzd2l0Y2ggdG8gZGVmYXVsdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bnN1cHBvcnRlZCBvc20tc3R5bGUgLT4gc3dpdGNoIHRvIGRlZmF1bHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnb29nbGUnOlxuICAgICAgICAgICAgICAgIC8vQHRvZG9cbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2dvb2dsZS1tYXBzIGFyZSBjdXJyZW50bHkgdW5zdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JpbmcnOlxuICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJDb25maWcuYXBpS2V5ICYmIG92ZXJsYXlMYXllckNvbmZpZy5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBvbC5zb3VyY2UuQmluZ01hcHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1bHR1cmU6IG5hdmlnYXRvci5sYW5ndWFnZXMgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG92ZXJsYXlMYXllckNvbmZpZy5hcGlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VyeVNldDogb3ZlcmxheUxheWVyQ29uZmlnLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIGJpbmcta2V5IG9yIGludmFsaWQgaW1hZ2VyeS1zZXQhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd21zJzpcbiAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5UaWxlV01TKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogb3ZlcmxheUxheWVyQ29uZmlnLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExBWUVSUzogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy5sYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkVSU0lPTjogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy52ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRk9STUFUOiBvdmVybGF5TGF5ZXJDb25maWcucGFyYW1zLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUUkFOU1BBUkVOVDogb3ZlcmxheUxheWVyQ29uZmlnLnBhcmFtcy50cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogb3ZlcmxheUxheWVyQ29uZmlnLmd1dHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogb3ZlcmxheUxheWVyQ29uZmlnLmF0dHJpYnV0aW9uICsgJyAnICsgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTlxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgLy9leHRlbnQ6IG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KFs1LjU5MzM0LCA1MC4wNTc4LCA5Ljc0MTU4LCA1Mi43OTk4XSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb3dtJzpcbiAgICAgICAgICAgICAgICBvdmVybGF5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVGlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbmV3IG9sLnNvdXJjZS5YWVooe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBvdmVybGF5TGF5ZXJDb25maWcudXJsICsgb3ZlcmxheUxheWVyQ29uZmlnLmFwcF9pZCArICcve3p9L3t4fS97eX0/aGFzaD0nICsgb3ZlcmxheUxheWVyQ29uZmlnLmFwaV9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IG92ZXJsYXlMYXllckNvbmZpZy5hdHRyaWJ1dGlvbiArICcgJyArIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT05cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZW50OiBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChbNS41OTMzNCwgNTAuMDU3OCwgOS43NDE1OCwgNTIuNzk5OF0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bnN1cHBvcnRlZCBwcm92aWRlcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJsYXlMYXllci5zZXRPcGFjaXR5KHBhcnNlSW50KG92ZXJsYXlMYXllckNvbmZpZy5vcGFjaXR5KS8xMDApO1xuICAgICAgICB0aGlzLmFyck92ZXJsYXlzW292ZXJsYXlJZF0ubGF5ZXIgPSBvdmVybGF5TGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLmFyck92ZXJsYXlzW292ZXJsYXlJZF0ubGF5ZXJcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctb3ZlcmxheS1jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEM0Z092ZXJsYXkge1xuXG4gICAgY29uc3RydWN0b3Iob3ZlcmxheUFyciwgbWFwQ29udHJvbGxlcil7XG4gICAgICAgIHRoaXMuaWQgICAgICAgICAgICA9IG92ZXJsYXlBcnJbJ2lkJ107XG4gICAgICAgIHRoaXMucGlkICAgICAgICAgICA9IG92ZXJsYXlBcnJbJ3BpZCddO1xuICAgICAgICB0aGlzLm5hbWUgICAgICAgICAgPSBvdmVybGF5QXJyWyduYW1lJ107XG4gICAgICAgIHRoaXMucHJvdmlkZXIgICAgICA9IG92ZXJsYXlBcnJbJ3Byb3ZpZGVyJ107XG4gICAgICAgIHRoaXMuc3R5bGUgICAgICAgICA9IG92ZXJsYXlBcnJbJ3N0eWxlJ107XG4gICAgICAgIHRoaXMudXJsICAgICAgICAgICA9IG92ZXJsYXlBcnJbJ3VybCddO1xuICAgICAgICB0aGlzLnVybHMgICAgICAgICAgPSBvdmVybGF5QXJyWyd1cmxzJ107XG4gICAgICAgIHRoaXMub3BhY2l0eSAgICAgICA9IG92ZXJsYXlBcnJbJ29wYWNpdHknXTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGlvbiAgID0gb3ZlcmxheUFyclsnYXR0cmlidXRpb24nXTtcbiAgICAgICAgdGhpcy5ndXR0ZXIgICAgICAgID0gb3ZlcmxheUFyclsnZ3V0dGVyJ107XG4gICAgICAgIHRoaXMucGFyYW1zICAgICAgICA9IG92ZXJsYXlBcnJbJ3BhcmFtcyddO1xuICAgICAgICB0aGlzLmxheWVyICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVybGF5QXJyICAgID0gb3ZlcmxheUFycjtcbiAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyICAgID0gbWFwQ29udHJvbGxlclxuICAgIH1cblxuICAgIFxuXG4gICAgY2hhbmdlT3BhY2l0eSh2YWx1ZSl7XG4gICAgICAgIHZhciBsYXllcjtcblxuICAgICAgICBsYXllciA9IHRoaXMubGF5ZXI7XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgICAgICAgICBsYXllci5zZXRPcGFjaXR5KHZhbHVlLzEwMCk7XG4gICAgICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1vdmVybGF5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==