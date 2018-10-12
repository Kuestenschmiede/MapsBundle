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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-config.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmYzZWI2YWYxMjA5ZTQyODYzZTUiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25maWcuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbmZpZyIsIiQiLCJvc20iLCJleHRlbmQiLCJDeWNsZU1hcCIsImF0dHJpYnV0aW9ucyIsIm9sIiwic291cmNlIiwiT1NNIiwiQVRUUklCVVRJT04iLCJjcm9zc09yaWdpbiIsIm1pblpvb20iLCJtYXhab29tIiwidXJsIiwiR2VybWFuIiwiR2VybWFuVHJhbnNwb3J0IiwiTGFuZHNjYXBlTWFwIiwiTWFwbmlrIiwiVHJhbnNwb3J0TWFwIiwiTk9ORSIsInN0YW1lbiIsIlRvbmVyIiwibGF5ZXIiLCJUb25lckxhYmVscyIsIlRvbmVyTGluZXMiLCJUZXJyYWluIiwiV2F0ZXJjb2xvciIsIm1hcHF1ZXN0IiwiTWFwUXVlc3RPcGVuIiwiTWFwUXVlc3RIeWIiLCJNYXBRdWVzdFNhdCIsIm1hcGJveCIsIk1hcGJveCIsInRpbGVTaXplIiwiTWFwYm94Q2xhc3NpYyIsImtsb2thbiIsIk9wZW5NYXBUaWxlcyIsImZvcm1hdCIsIk1WVCIsInRpbGVHcmlkIiwidGlsZWdyaWQiLCJjcmVhdGVYWVoiLCJ0aWxlUGl4ZWxSYXRpbyIsIlRpbGVIb3N0aW5nIiwiaGVyZSIsIkhFUkUiLCJ0aHVuZGVyZm9yZXN0IiwiVGh1bmRlcmZvcmVzdCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNB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QTZFLEdBQTdFLEdBQ1ZDLEdBQUdDLE1BQUgsQ0FBVUMsR0FBVixDQUFjQyxXQUhoQjtBQUlGRSxlQUFTLENBSlA7QUFLRkMsZUFBUyxFQUxQO0FBTUZGLG1CQUFhO0FBTlg7O0FBRmEsR0FBdkI7O0FBYUE7OztBQUdBWixNQUFJQyxJQUFKLENBQVNDLE1BQVQsQ0FBZ0I4QyxhQUFoQixHQUFnQzs7QUFFNUJDLG1CQUFlO0FBQ1hkLGdCQUFVLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FEQztBQUVYNUIsb0JBQWMsMkZBQTJGLEdBQTNGLEdBQ1ZDLEdBQUdDLE1BQUgsQ0FBVUMsR0FBVixDQUFjQyxXQUhQO0FBSVhFLGVBQVMsQ0FKRTtBQUtYQyxlQUFTLEVBTEU7QUFNWEYsbUJBQWE7QUFORjs7QUFGYSxHQUFoQztBQWFILENBbk5BLEVBbU5Dc0MsTUFuTkQsRUFtTlMsS0FBS2xELEdBbk5kLENBQUQ7O0FBcU5PLElBQUlFLFNBQVMsS0FBS0YsR0FBTCxDQUFTQyxJQUFULENBQWNDLE1BQTNCLEMiLCJmaWxlIjoiYzRnLW1hcHMtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbmZpZy5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZjNlYjZhZjEyMDllNDI4NjNlNSIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uZmlnID0gdGhpcy5jNGcubWFwcy5jb25maWcgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogb3NtU291cmNlRGVmaW5pdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbmZpZy5vc20gPSAkLmV4dGVuZChjNGcubWFwcy5jb25maWcub3NtLCB7XG5cbiAgICBDeWNsZU1hcDoge1xuICAgICAgYXR0cmlidXRpb25zOiAnU3R5bGUgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cub3BlbmN5Y2xlbWFwLm9yZy9cIj5PcGVuQ3ljbGVNYXA8L2E+JyArICcgJyArXG4gICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICB1cmw6ICdodHRwczovL3thLWN9LnRpbGUub3BlbmN5Y2xlbWFwLm9yZy9jeWNsZS97en0ve3h9L3t5fS5wbmcnXG4gICAgfSxcblxuICAgIEdlcm1hbjoge1xuICAgICAgYXR0cmlidXRpb25zOiAnU3R5bGUgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5kZS9nZXJtYW5zdHlsZS5odG1sXCI+b3BlbnN0cmVldG1hcC5kZTwvYT4nICsgJyAnICtcbiAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOSxcbiAgICAgIHVybDogJ2h0dHBzOi8ve2EtY30udGlsZS5vcGVuc3RyZWV0bWFwLmRlL3RpbGVzL29zbWRlL3t6fS97eH0ve3l9LnBuZydcbiAgICB9LFxuXG4gICAgR2VybWFuVHJhbnNwb3J0OiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6ICdTdHlsZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5tZW1vbWFwcy5kZVwiPk1lbW9tYXBzPC9hPicgKyAnICcgK1xuICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE5LFxuICAgICAgdXJsOiAnaHR0cDovL3RpbGUubWVtb21hcHMuZGUvdGlsZWdlbi97en0ve3h9L3t5fS5wbmcnXG4gICAgfSxcblxuICAgIExhbmRzY2FwZU1hcDoge1xuICAgICAgYXR0cmlidXRpb25zOiAnU3R5bGUgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cub3BlbmN5Y2xlbWFwLm9yZy9cIj5PcGVuQ3ljbGVNYXA8L2E+JyArICcgJyArXG4gICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICB1cmw6ICdodHRwczovL3thLWN9LnRpbGUub3BlbmN5Y2xlbWFwLm9yZy9sYW5kc2NhcGUve3p9L3t4fS97eX0ucG5nJ1xuICAgIH0sXG5cbiAgICBNYXBuaWs6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgVHJhbnNwb3J0TWFwOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6ICdTdHlsZSBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5vcGVuY3ljbGVtYXAub3JnL1wiPk9wZW5DeWNsZU1hcDwvYT4nICsgJyAnICtvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDE5LFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgdXJsOiAnaHR0cDovL3thLWN9LnRpbGUyLm9wZW5jeWNsZW1hcC5vcmcvdHJhbnNwb3J0L3t6fS97eH0ve3l9LnBuZydcbiAgICB9LFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJvc21Tb3VyY2VEZWZpbml0aW9uc1wiIC0tLVxuXG4gIC8qKlxuICAgKiBzdGFtZW5Tb3VyY2VEZWZpbml0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMuY29uZmlnLnN0YW1lbiA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbmZpZy5zdGFtZW4sIHtcblxuICAgIFRvbmVyOiB7XG4gICAgICBhdHRyaWJ1dGlvbnM6IG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBsYXllcjogJ3RvbmVyJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOCxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgVG9uZXJMYWJlbHM6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGxheWVyOiAndG9uZXItbGFiZWxzJyxcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAxOCxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuXG4gICAgVG9uZXJMaW5lczoge1xuICAgICAgYXR0cmlidXRpb25zOiBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbGF5ZXI6ICd0b25lci1saW5lcycsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIFRlcnJhaW46IHtcbiAgICAgIGF0dHJpYnV0aW9uczogb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGxheWVyOiAndGVycmFpbicsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIFdhdGVyY29sb3I6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgIGxheWVyOiAnd2F0ZXJjb2xvcicsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTgsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIE5PTkU6ICcnXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBtYXBxdWVzdFNvdXJjZURlZmluaXRpb25zXG4gICAqL1xuICBjNGcubWFwcy5jb25maWcubWFwcXVlc3QgPSAkLmV4dGVuZChjNGcubWFwcy5jb25maWcubWFwcXVlc3QsIHtcblxuICAgIE1hcFF1ZXN0T3Blbjoge1xuICAgICAgbGF5ZXI6ICdvc20nXG4gICAgfSxcblxuICAgIE1hcFF1ZXN0SHliOiB7XG4gICAgICBsYXllcjogJ2h5YidcbiAgICB9LFxuXG4gICAgTWFwUXVlc3RTYXQ6IHtcbiAgICAgIGxheWVyOiAnc2F0J1xuICAgIH0sXG5cbiAgICBOT05FOiAnJ1xuICB9KTtcblxuICAvKipcbiAgICogbWFwYm94U291cmNlRGVmaW5pdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbmZpZy5tYXBib3ggPSB7XG5cbiAgICBNYXBib3g6IHtcbiAgICAgIHRpbGVTaXplOiBbNTEyLCA1MTJdLFxuICAgICAgYXR0cmlidXRpb25zOiAnwqkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYWJvdXQvbWFwcy9cIj5NYXBib3g8L2E+JyArICcgJyArXG4gICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjIsXG4gICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgfSxcblxuICAgIE1hcGJveENsYXNzaWM6IHtcbiAgICAgIGF0dHJpYnV0aW9uczogJ8KpIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2Fib3V0L21hcHMvXCI+TWFwYm94PC9hPicgKyAnICcgK1xuICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDIyLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH1cbiAgfTtcblxuICAgIC8qKlxuICAgICAqIGtsb2thblNvdXJjZURlZmluaXRpb25zXG4gICAgICovXG4gICAgLy9Ub0RvIG5vdCByZWFkeVxuICAgIGM0Zy5tYXBzLmNvbmZpZy5rbG9rYW4gPSB7XG5cbiAgICAgICAgT3Blbk1hcFRpbGVzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IG5ldyBvbC5mb3JtYXQuTVZUKCksXG4gICAgICAgICAgICB0aWxlR3JpZDogIG9sLnRpbGVncmlkLmNyZWF0ZVhZWih7dGlsZVNpemU6IDUxMiwgbWF4Wm9vbTogMjJ9KSwgLy9Ub0RvIG1heFpvb20gZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aWxlUGl4ZWxSYXRpbzogOCxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uczogJ8KpIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL29wZW5tYXB0aWxlcy5vcmcvXCI+T3Blbk1hcFRpbGVzPC9hPicgKyAnICcgK1xuICAgICAgICAgICAgb2wuc291cmNlLk9TTS5BVFRSSUJVVElPTixcbiAgICAgICAgICAgIG1pblpvb206IDAsXG4gICAgICAgICAgICBtYXhab29tOiAyMixcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJ1xuICAgICAgICB9LFxuXG4gICAgICAgIFRpbGVIb3N0aW5nOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IG5ldyBvbC5mb3JtYXQuTVZUKCksXG4gICAgICAgICAgICB0aWxlR3JpZDogIG9sLnRpbGVncmlkLmNyZWF0ZVhZWih7dGlsZVNpemU6IDUxMiwgbWF4Wm9vbTogMjJ9KSwgLy9Ub0RvIG1heFpvb20gZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aWxlUGl4ZWxSYXRpbzogOCxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uczogJ8KpIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3RpbGVob3N0aW5nLmNvbS9cIj5UaWxlSG9zdGluZzwvYT4nICsgJyAnICtcbiAgICAgICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICAgICAgICBtaW5ab29tOiAwLFxuICAgICAgICAgICAgbWF4Wm9vbTogMjIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogaGVyZVNvdXJjZURlZmluaXRpb25zXG4gICAgICovXG4gICAgYzRnLm1hcHMuY29uZmlnLmhlcmUgPSB7XG5cbiAgICAgICAgSEVSRToge1xuICAgICAgICAgICAgdGlsZVNpemU6IFs1MTIsIDUxMl0sXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbnM6ICdNYXAgVGlsZXMgwqkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLmhlcmUuY29tXCI+SEVSRTwvYT4nKyAnICcgK1xuICAgICAgICAgICAgICAgIG9sLnNvdXJjZS5PU00uQVRUUklCVVRJT04sXG4gICAgICAgICAgICBtaW5ab29tOiAwLFxuICAgICAgICAgICAgbWF4Wm9vbTogMjIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cycsXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aHVuZGVyZm9yZXN0U291cmNlRGVmaW5pdGlvbnNcbiAgICAgKi9cbiAgICBjNGcubWFwcy5jb25maWcudGh1bmRlcmZvcmVzdCA9IHtcblxuICAgICAgICBUaHVuZGVyZm9yZXN0OiB7XG4gICAgICAgICAgICB0aWxlU2l6ZTogWzUxMiwgNTEyXSxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uczogJ01hcCBUaWxlcyDCqSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cudGh1bmRlcmZvcmVzdC5jb20vXCI+VGh1bmRlcmZvcmVzdDwvYT4nICsgJyAnICtcbiAgICAgICAgICAgICAgICBvbC5zb3VyY2UuT1NNLkFUVFJJQlVUSU9OLFxuICAgICAgICAgICAgbWluWm9vbTogMCxcbiAgICAgICAgICAgIG1heFpvb206IDE5LFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgICAgICB9XG5cbiAgICB9O1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjb25maWcgPSB0aGlzLmM0Zy5tYXBzLmNvbmZpZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=