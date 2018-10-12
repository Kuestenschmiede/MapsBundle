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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-utils.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnN0YW50IiwiJCIsImNzcyIsImV4dGVuZCIsIk9QRU4iLCJDTE9TRSIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIkhJREUiLCJJQ09OIiwiQ09OVFJPTCIsIkNPUFkiLCJSRUZSRVNIIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJMT0FESU5HIiwiQU5JTUFUSU9OX1NQSU4iLCJMQVJHRSIsIlNNQUxMIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiQVRUUklCVVRJT05fTE9HTyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsIkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQiLCJFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkciLCJFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT04iLCJFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRSIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfRFJBV19PUFRJT05TIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiR0VPU0VBUkNIIiwiR0VPU0VBUkNIX1dSQVBQRVIiLCJHRU9TRUFSQ0hfVFJJR0dFUiIsIkdFT1NFQVJDSF9TVEFSVCIsIkdSQVRJQ1VMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJQUklOVCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIklORk9QQUdFIiwiQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUiIsIkFERElUSU9OQUxQQU5FTCIsIkFDQ09VTlRfVklFV19UUklHR0VSIiwiQUNDT1VOVCIsIk9WRVJWSUVXTUFQIiwiT1ZFUlZJRVdNQVBfV1JBUFBFUiIsIkdFT0JPT0tNQVJLUyIsIlBFUk1BTElOSyIsIlBFUk1BTElOS19QT1BVUCIsIlBPUFVQX0NMT1NFIiwiUE9QVVBfUk9VVEVfV1JBUFBFUiIsIlBPUFVQX1JPVVRFX0ZST00iLCJQT1BVUF9ST1VURV9UTyIsIlBPUlRTSURFIiwiUE9SVFNJREVfQ09OVEFJTkVSIiwiUE9SVFNJREVfQ09OVFJPTCIsIlBPUlRTSURFX1dSQVBQRVIiLCJQT1JUU0lERV9USVRMRUJBUiIsIlBPUlRTSURFX1RPUF9UT09MQkFSIiwiUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVIiLCJQT1JUU0lERV9CT1RUT01fVE9PTEJBUiIsIlBPUlRTSURFX1NUQVRVU0JBUiIsIlBPUlRTSURFX1ZJRVdUUklHR0VSQkFSIiwiUE9SVFNJREVfSEVBRExJTkUiLCJQT1JUU0lERV9CVVRUT05CQVIiLCJQT1JUU0lERV9CVVRUT04iLCJQT1JUU0lERV9ISURFIiwiUE9SVFNJREVfQ0xPU0UiLCJTUElOTkVSIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9DT05UUk9MIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfVElUTEVCQVIiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVIiLCJTVEFSQk9BUkRfU1RBVFVTQkFSIiwiU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiU1RBUkJPQVJEX0JVVFRPTkJBUiIsIlNUQVJCT0FSRF9CVVRUT04iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRSIsIlNUQVJCT0FSRF9MQVlFUlRSRUUiLCJTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSIiwiVE9PTFRJUF9QT1BVUCIsIlpPT01fTEVWRUwiLCJST1VURVJfSU5QVVRfV1JBUFBFUiIsIlJPVVRFUl9QUk9GSUxFX1dSQVBQRVIiLCJST1VURVJfSU5QVVRfRlJPTSIsIlJPVVRFUl9JTlBVVF9UTyIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSIiwiUk9VVEVSX1NXSVRDSCIsIlJPVVRFUl9PVkVSIiwiUk9VVEVSX1BSSU5UIiwiUk9VVEVSX1BST0ZJTEVfQ0FSIiwiUk9VVEVSX1BST0ZJTEVfSEdWIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiT0xfQ09OVFJPTCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX09WRVJMQVlDT05UQUlORVIiLCJPTF9PVkVSTEFZQ09OVEFJTkVSX1NFIiwiT0xfVklFV1BPUlQiLCJPTF9aT09NIiwiT0xfWk9PTV9JTiIsIk9MX1pPT01fRVhUIiwiT0xfWk9PTV9IT01FIiwiT0xfWk9PTV9QT1MiLCJPTF9aT09NX1dJVEhfRVhUIiwiT0xfWk9PTV9XSVRIX0hPTUUiLCJPTF9aT09NX1dJVEhfUE9TIiwiT0xfWk9PTV9TTElERVIiLCJPTF9aT09NX1dJVEhfU0xJREVSIiwiTk9ORSIsImpRdWVyeSIsImNzc0NvbnN0YW50cyIsImNvbnRyb2wiLCJab29tbGV2ZWwiLCJvcHRpb25zIiwic2VsZiIsImVsZW1lbnQiLCJ1cGRhdGVab29tbGV2ZWwiLCJtYXBWaWV3IiwiY29uc29sZSIsIndhcm4iLCJjbGFzc05hbWUiLCJ1bmRlZmluZWRIVE1MIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZ2V0Wm9vbSIsInBhcnNlSW50Iiwib24iLCJvbCIsIkNvbnRyb2wiLCJjYWxsIiwidGFyZ2V0IiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJ1dGlscyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRVbmlxdWVJZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImVuY29kZUdlb0pzb25Qcm9wZXJ0eSIsImlucHV0Iiwib3V0cHV0IiwicmVwbGFjZSIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwiaSIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwib3JpZ2luIiwicGF0aG5hbWUiLCJoYXNoIiwic2VhcmNoIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImtleSIsInZhbHVlIiwib2Zmc2V0Iiwib3JpZ2luU3RyaW5nIiwiZ2V0VXJsUGFyYW0iLCJyZWdFeCIsInN1YnN0cmluZyIsIlJlZ0V4cCIsImV4ZWMiLCJkZWx0YUVuY29kZSIsImFycklucHV0IiwiYXJyT3V0cHV0IiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwiZGVsdGFEZWNvZGUiLCJpc05hTiIsImNhbGxIb29rRnVuY3Rpb25zIiwiYXJySG9va0Z1bmN0aW9ucyIsInBhcmFtZXRlcnMiLCJqIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInN0eWxlIiwicmVkdWNlZFN0eWxlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsb2NhdGlvblN0eWxlcyIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJzZXRXaWR0aCIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJmaWxsIiwic3Ryb2tlIiwicmFkaXVzIiwibWVhc3VyZUdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJvcHRfZm9yY2VMaW5lTWVhc3VyZSIsIm9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlIiwic3BoZXJlIiwiY29vcmRpbmF0ZXMiLCJjb29yZDEiLCJjb29yZDIiLCJyZXN1bHQiLCJnZW9tIiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJnZXRDb29yZGluYXRlcyIsInByb2oiLCJ0cmFuc2Zvcm0iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJ0b0ZpeGVkIiwiaHRtbFZhbHVlIiwiYWJzIiwiZ2V0QXJlYSIsImNlbnRlciIsImdldENlbnRlciIsImdldFJhZGl1cyIsImVkZ2VDb29yZGluYXRlIiwiUEkiLCJzcXJ0IiwiZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcyIsImFyckdlb21ldHJpZXMiLCJleHRlbnRTb3VyY2UiLCJzb3VyY2UiLCJWZWN0b3IiLCJhZGRGZWF0dXJlcyIsImdldEV4dGVudCIsIkV4dGVudCIsImZpdFRvRXh0ZW50cyIsImV4dGVudHMiLCJtYXAiLCJvcHRfcGFkZGluZyIsIm9wdF9hbmltYXRpb25EdXJhdGlvbiIsInZpZXciLCJwYWRkaW5nIiwiZXh0ZW50IiwiaGFzT3duUHJvcGVydHkiLCJmaXRUb0V4dGVudCIsIm9wdF9taW5ab29tIiwib3B0X21heFpvb20iLCJvcHRfbWluUmVzb2x1dGlvbiIsImZpdE9wdGlvbnMiLCJnZXRWaWV3IiwibWluUmVzb2x1dGlvbiIsIm1pblpvb20iLCJtYXhab29tIiwiYW5pbWF0ZSIsInN0YXJ0IiwiRGF0ZSIsImR1cmF0aW9uIiwicmVzb2x1dGlvbiIsImdldFJlc29sdXRpb24iLCJmaXQiLCJnZXRTaXplIiwiZSIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJzdHJJbnB1dCIsImZlYXR1cmUiLCJvcHRfbGF5ZXIiLCJzdHJPdXRwdXQiLCJyZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMiLCJyZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyIsInJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMiLCJsYXllciIsImZ1bmN0aW9uTmFtZSIsIndpbmRvdyIsImdldFN0eWxlIiwiZ2V0IiwidHlwZSIsImV2S2V5IiwiZWRpdG9yVmFycyIsImxhYmVsIiwiYXR0ciIsIm9iamVjdFRvQXJyYXkiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZ2V0VmVjdG9yTGF5ZXIiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsImhyZWYiLCJyZWRyYXdNYXBWaWV3IiwibWFwQ29udHJvbGxlciIsIm1hcERhdGEiLCJkYXRhIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwicHVzaCIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViIiwic2NhbGVsaW5lIiwicmVtb3ZlQ29udHJvbCIsImNvbnRyb2xzIiwiU2NhbGVMaW5lIiwiYWRkQ29udHJvbCIsImFwcGVuZCIsInpvb21sZXZlbCIsIm1vdXNlcG9zaXRpb24iLCJNb3VzZVBvc2l0aW9uIiwicHJvamVjdGlvbiIsImNvb3JkaW5hdGVGb3JtYXQiLCJjb29yZGluYXRlIiwidG9TdHJpbmdIRE1TIiwiZ2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yZVZhbHVlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztB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SixHQS8zQmQsQ0FBRDs7QUFpNEJPLElBQUlpTCxRQUFRLEtBQUtqTCxHQUFMLENBQVNDLElBQVQsQ0FBY2dMLEtBQTFCLEMiLCJmaWxlIjoiYzRnLW1hcHMtdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1pvb21sZXZlbH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWxcIlxuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIGM0Zy1NYXBzIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAqL1xuICBjNGcubWFwcy51dGlscyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLnV0aWxzLCB7XG4gICAgLyoqXG4gICAgICogIENvbnZlcnRzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG8gdXBwZXJjYXNlLCBsZWF2aW5nIHRoZSByZW1haW5pbmcgc3RyaW5nIHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqICBAcGFyYW0gICAge3N0cmluZ30gICAgdGhlIHN0cmluZyB0byBjYXBpdGFsaXplXG4gICAgICpcbiAgICAgKiAgQHJldHVybiAgIHtzdHJpbmd9ICAgIHRoZSBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkLlxuICAgICAqXG4gICAgICogVGhlIGlkIGlzIDkgY2hhcmFjdGVycyBsb25nIGFuZCBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgVGhlIGdlbmVyYXRlZCBpZC5cbiAgICAgKi9cbiAgICBnZXRVbmlxdWVJZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgICAgIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gICAgICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIG5vdCBicmVhayB0aGUgQ29kZS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFwgLT4gXFxcXDtcbiAgICAgKiAgIFwiIC0+ICcnO1xuICAgICAqICAgw4QgLT4gJkF1bWw7XG4gICAgICogICDDpCAtPiAmYXVtbDtcbiAgICAgKiAgIMOWIC0+ICZPdW1sO1xuICAgICAqICAgw7YgLT4gJm91bWw7XG4gICAgICogICDDnCAtPiAmVXVtbDtcbiAgICAgKiAgIMO8IC0+ICZ1dW1sO1xuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBlbmNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFwvZywgJ1xcXFxcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXFwiL2csICdcXCdcXCcnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OEL2csICcmQXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OkL2csICcmYXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OWL2csICcmT3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O2L2csICcmb3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OcL2csICcmVXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O8L2csICcmdXVtbDsnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBlbmNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgYmUgZGlzcGxheWVkIGNvcnJlY3RseS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFxcXCAgICAgLT4gXFw7XG4gICAgICogICAnJyAgICAgLT4gXCI7XG4gICAgICogICAmQXVtbDsgLT4gw4RcbiAgICAgKiAgICZhdW1sOyAtPiDDpFxuICAgICAqICAgJk91bWw7IC0+IMOWXG4gICAgICogICAmb3VtbDsgLT4gw7ZcbiAgICAgKiAgICZVdW1sOyAtPiDDnFxuICAgICAqICAgJnV1bWw7IC0+IMO8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFxcXFxcL2csICdcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXCdcXCcvZywgJ1xcXCInXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZBdW1sOy9nLCAnw4QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZhdW1sOy9nLCAnw6QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZPdW1sOy9nLCAnw5YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZvdW1sOy9nLCAnw7YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZVdW1sOy9nLCAnw5w7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mdXVtbDsvZywgJ8O8J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZGVjb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciByZXBsYWNlIGFuIFVSTC1wYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBgcGFyYW1gLFxuICAgICAqIHdpbGwgYmUgYXBwbGllZCBhcyBcImhhc2gtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHMjcGFyYW1cbiAgICAgKiBOb3RlLCB0aGF0IGFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiB3aGVyZWFzIGV4aXN0aW5nIFwiR0VULXBhcmFtZXRlcnNcIiBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBzZXQsIGl0IHdpbGwgYmUgYXBwbGllZCBhcyBcIkdFVC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcz9vcHRfZ2V0S2V5PXBhcmFtXG4gICAgICogSWYgdGhlIGtleSBkZXNjcmliZWQgYnkgYG9wdF9nZXRLZXlgIGlzIGFscmVhZHkgZXhpc3RpbmcsIGl0cyB2YWx1ZSB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGtleS12YWx1ZS1wYWlyIHdpbGwgYmUgYXBwZW5kZWQgYXBwcm9wcmlhdGx5LlxuICAgICAqIEFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9leGVjdXRlYCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG5ldyBsaW5rIGFzIGBzdHJpbmdgLFxuICAgICAqIG90aGVyd2lzZSB0aGUgXCJocmVmL2xvY2F0aW9uXCIgd2lsbCBiZSBjaGFuZ2VkIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLCB3aGljaCBjYW4gY2F1c2UgYSBwYWdlcmVsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgcGFyYW0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbnxzdHJpbmd9ICBvcHRfZ2V0S2V5ICAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICBvcHRfZXhlY3V0ZSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBzZXRVcmxQYXJhbTogZnVuY3Rpb24gKHBhcmFtLCBvcHRfZ2V0S2V5LCBvcHRfZXhlY3V0ZSkge1xuICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgc2VhcmNoUGFyYW0sXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsaW5rID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICAvLyB1c2UgaGFzaC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gbG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgR0VULXBhcmFtZXRlclxuICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGFscmVhZHkgc2VhcmNoLXBhcmFtZXRlcnNcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgb3B0X2dldEtleSA9IG9wdF9nZXRLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAvLyByZXBsYWNlIHBhcmFtZXRlciBpZiBhbHJlYWR5IGV4aXN0ZW50XG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcbiAgICAgICAgICAgICAgLyhbXj1cXD9cXCZdKyk9KFteJl0rKS9naSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG9wdF9nZXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBhcHBlbmQgYXMgbmV3IHBhcmFtZXRlclxuICAgICAgICAgIGlmICghcGFyYW1SZXBsYWNlZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW0gKz0gJyYnICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG9ubHkgc2VhcmNoLXBhcmFtZXRlciBpbiB0aGUgVVJMXG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSAnPycgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uc2VhcmNoID0gc2VhcmNoUGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBzZWFyY2hQYXJhbSArIGxvY2F0aW9uLmhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0sIC8vIGVuZCBvZiBzZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIG9yIGhhc2ggVVJMLXBhcmFtZXRlciBhcyBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGhhc2gtcGFyYW1ldGVyIG9mIHRoZSBVUkwgaXMgcmV0dXJuZWQsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgc2VhcmNoIGZvciBhIEdFVC1wYXJhbWV0ZXIgYW5kIHJldHVybiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciBpcyBub3QgZXhpc3RlbnQsIG9yIGVtcHR5LCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8c3RyaW5nfSAgb3B0X2dldEtleSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvdW5kIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKG9wdF9nZXRLZXkpIHtcbiAgICAgIHZhciBwYXJhbSxcbiAgICAgICAgICByZWdFeDtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIHBhcmFtID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIHBhcmFtID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnRXggPSBuZXcgUmVnRXhwKCdbXFw/XFwmXScgKyBvcHRfZ2V0S2V5ICsgJz0oW14mXSspJywgJ2knKTtcbiAgICAgICAgICBwYXJhbSA9IHJlZ0V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSwgLy8gZW5kIG9mIGdldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIERlbHRhLWVuY29kZSBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYXJyYXkgd2lsbCBiZSBzb3J0ZWQgKGxvd2VzdCB0byBoaWdoZXN0KVxuICAgICAqIGJlZm9yZSBlbmNvZGluZy5cbiAgICAgKlxuICAgICAqIFNvIGFmdGVyIHRoZSBlbmNvZGluZyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAqIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGhlIHNldCBhbmQgZWFjaCBmb2xsb3dpbmcgbnVtYmVyIGp1c3RcbiAgICAgKiByZXByZXNlbnRzIHRoZSBvZmZzZXQgdG8gaXRzIHByZXZpb3VzIG5laWdoYm9yLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBtb3N0bHkgZWZmaWNpZW50IGZvciBoaWdoIG51bWJlcnMsIHRoYXQgYXJlIFwiY2xvc2UgdG8gZWFjaCBvdGhlclwiLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiAgIFsxMzM3LCAxMSwgMTAxLCAxMjMsIDk2LCA2OSwgNDIsIDQyXVxuICAgICAqICAgd2lsbCBiZSBzb3J0ZWRcbiAgICAgKiAgIFsxMSwgNDIsIDQyLCA2OSwgOTYsIDEwMSwgMTIzLCAxMzM3XVxuICAgICAqICAgYW5kIGVuY29kZWQgdG9cbiAgICAgKiAgIFsxMSwgMzEsIDAsIDI3LCAyNywgNSwgMjIsIDEyMTRdXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YUVuY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKGFycklucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGFycklucHV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSk7XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gYXJySW5wdXRbMF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gYXJySW5wdXRbaV0gLSBhcnJJbnB1dFtpIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFFbmNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgZGVsdGEtZW5jb2RlZCBhcnJheS5cbiAgICAgKiBTZWUgYGRlbHRhRW5jb2RlYCBmdW5jdGlvbiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRGVjb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gcGFyc2VJbnQoYXJySW5wdXRbMF0sIDEwKTtcbiAgICAgIGlmIChpc05hTihhcnJJbnB1dFswXSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IHBhcnNlSW50KGFycklucHV0W2ldLCAxMCkgKyBhcnJPdXRwdXRbaSAtIDFdO1xuICAgICAgICBpZiAoaXNOYU4oYXJyT3V0cHV0W2ldKSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRGVjb2RlKClcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBjYWxsIGZ1bmN0aW9ucyBpbiBgYXJySG9va0Z1bmN0aW9uc2Agd2l0aCBnaXZlbiBgcGFyYW1ldGVyc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8ZnVuY3Rpb24+fSAgIGFyckhvb2tGdW5jdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7bWl4ZWR9ICAgICAgICAgICAgIHBhcmFtZXRlcnMgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjYWxsSG9va0Z1bmN0aW9uczogZnVuY3Rpb24gKGFyckhvb2tGdW5jdGlvbnMsIHBhcmFtZXRlcnMpIHtcbiAgICAgIHZhciBqO1xuXG4gICAgICBpZiAoYXJySG9va0Z1bmN0aW9ucyAmJiBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyckhvb2tGdW5jdGlvbnNbal0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyckhvb2tGdW5jdGlvbnNbal0ocGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiY2FsbEhvb2tGdW5jdGlvbnMoKVwiXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgaGV4LWZvcm1hdGVkIGNvbG9yIHZhbHVlIGludG8gcmdiYSgpLWZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgaGV4ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIG9wdF9vcGFjaXR5ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5OiBmdW5jdGlvbiAoaGV4LCBvcHRfb3BhY2l0eSwgb3B0X2FycmF5KSB7XG5cbiAgICAgIHZhciBiaWdpbnQsIHIsIGcsIGIsIGE7XG5cbiAgICAgIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgIG9wdF9vcGFjaXR5LnZhbHVlID0gcGFyc2VJbnQob3B0X29wYWNpdHkudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgdHlwZW9mIG9wdF9vcGFjaXR5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdF9vcGFjaXR5ID09PSAnb2JqZWN0JyAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gb3B0X29wYWNpdHkudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICBiID0gYmlnaW50ICYgMjU1O1xuICAgICAgYSA9IG9wdF9vcGFjaXR5ID8gKG9wdF9vcGFjaXR5IC8gMTAwKSA6IDE7XG4gICAgICBpZihvcHRfYXJyYXkpe1xuICAgICAgICByZXR1cm4gW3IsZyxiLGFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgYSBkZWZpbmVkIHN0eWxlLCB0byBhIHNpbXBsZXIgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSByZWR1Y2VkIHN0eWxlIGlzIHRoZSBmaXJzdCBzdHlsZSBvZiB0aGUgZGVmaW5lZCBzdHlsZXNldCxcbiAgICAgKiB3aXRoIGEgMXB4IHRoaWNrIHN0cm9rZSBhbmQgYSBjaXJjbGUgd2l0aCBhIDVweCByYWRpdXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYWRkaXRpb25hbCBnZW9tZXRyaWVzIHdpdGggYSBtYWluLWdlb21ldHJ5LFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGRlZmluZSBhIHdob2xlIG5ldyBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ8c3RyaW5nfSAgICAgICAgICAgc3R5bGVJZCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG9sLnN0eWxlLlN0eWxlPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVkdWNlU3R5bGU6IGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICB2YXIgc3R5bGUsXG4gICAgICAgICAgcmVkdWNlZFN0eWxlLFxuICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2VTdHlsZTtcblxuICAgICAgaWYgKCFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXSB8fCAhYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IGM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKClbMF07XG5cbiAgICAgIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgICBzdHJva2VTdHlsZS5zZXRXaWR0aCgxKTtcblxuICAgICAgcmVkdWNlZFN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdGV4dDogc3R5bGUuZ2V0VGV4dCgpLFxuICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3JlZHVjZWRTdHlsZV07XG4gICAgfSwgLy8gZW5kIG9mIFwicmVkdWNlU3R5bGVcIlxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZ2l2ZW4gZ2VvbWV0cnkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2VvbWV0cnkgaXMgYSBgTGluZVN0cmluZ2AgdGhlIGZ1bmN0aW9uIHdpbGwgbWVhc3VyZSBpdHMgbGVuZ3RoLFxuICAgICAqIGlzIGl0IGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSB0aGUgYWNyZWFnZSxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYDBgLlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIGBvcHRfZm9yY2VMaW5lTWVhc3VyZWAgcGFyYW1ldGVyIGlzIGB0cnVlYFxuICAgICAqIGFuZCB0aGUgZ2VvbWV0cnkgaXMgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIGl0cyBwZXJpbWV0ZXIgaW5zdGVhZFxuICAgICAqIG9mIGl0cyBhY3JlYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLmdlb20uTGluZVN0cmluZ3xvbC5nZW9tLlBvbHlnb259ICAgZ2VvbWV0cnkgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICBvcHRfZm9yY2VMaW5lTWVhc3VyZSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PHN0cmluZz58bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtZWFzdXJlR2VvbWV0cnk6IGZ1bmN0aW9uIChnZW9tZXRyeSwgb3B0X2ZvcmNlTGluZU1lYXN1cmUsIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgc3BoZXJlLFxuICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIGNvb3JkMSxcbiAgICAgICAgICBjb29yZDIsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL3NwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nIHx8IChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbiAmJiBvcHRfZm9yY2VMaW5lTWVhc3VyZSkpIHtcblxuICAgICAgICBjb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgY29vcmQxID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgY29vcmQyID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaSArIDFdLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIHZhbHVlICs9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShjb29yZDEsIGNvb3JkMiwgNjM3ODEzNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAvL2dlb21ldHJ5ID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovKGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpO1xuICAgICAgICAvL2Nvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0TGluZWFyUmluZygwKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKG9sLnNwaGVyZS5nZXRBcmVhKGdlb21ldHJ5KSk7XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUgJiYgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YWx1ZSA9IE1hdGguUEkgKiBNYXRoLnNxcnQodmFsdWUpO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnJhd1ZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKCh2YWx1ZSAqIDEwMCkgLyAxMDApIC8gMTAwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBleHRlbnQgZm9yIGFuIGFycmF5IG9mIGdlb21ldHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG9sLmdlb20uc2ltcGxlR2VvbWV0cnk+fSAgYXJyR2VvbWV0cmllcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge29sLkV4dGVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzOiBmdW5jdGlvbiAoYXJyR2VvbWV0cmllcykge1xuICAgICAgdmFyIGV4dGVudFNvdXJjZTtcblxuICAgICAgaWYgKCFhcnJHZW9tZXRyaWVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR2VvbWV0cmllcyBtaXNzaW5nIGZvciBleHRlbnQgY2FsY3VsYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBleHRlbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgZXh0ZW50U291cmNlLmFkZEZlYXR1cmVzKGFyckdlb21ldHJpZXMpO1xuXG4gICAgICByZXR1cm4gZXh0ZW50U291cmNlLmdldEV4dGVudCgpIHx8IG9sLkV4dGVudChbMCwgMCwgMCwgMF0pO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzKClcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYXJyYXkgb2YgYGV4dGVudHNgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgIGV4dGVudHMgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50czogZnVuY3Rpb24gKGV4dGVudHMsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBpZiAoIWV4dGVudHMgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vZXh0ZW50ID0gb2wuZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgICAgIGZvciAoa2V5IGluIGV4dGVudHMpIHtcbiAgICAgICAgaWYgKGV4dGVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnQgPSBleHRlbnRzW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sLmV4dGVudC5leHRlbmQoZXh0ZW50LCBleHRlbnRzW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0VG9FeHRlbnQoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCA1LCAwLCAwLCAyKTtcblxuXG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50c1xuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBgZXh0ZW50YC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5FeHRlbnR9ICBleHRlbnQgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2FycmF5fSAgICAgIG9wdF9wYWRkaW5nICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9tYXhab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluUmVzb2x1dGlvbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudDogZnVuY3Rpb24gKGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uLCBvcHRfbWluWm9vbSwgb3B0X21heFpvb20sIG9wdF9taW5SZXNvbHV0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGZpdE9wdGlvbnM7XG5cbiAgICAgIGlmICghZXh0ZW50IHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBmaXRPcHRpb25zID0ge1xuICAgICAgICAncGFkZGluZyc6IG9wdF9wYWRkaW5nIHx8IFsyNSwgMjUsIDI1LCAyNV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRfbWluUmVzb2x1dGlvbiAmJiBvcHRfbWluUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5SZXNvbHV0aW9uID0gb3B0X21pblJlc29sdXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWluWm9vbSAmJiBvcHRfbWluWm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluWm9vbSA9IG9wdF9taW5ab29tO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21heFpvb20gJiYgb3B0X21heFpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1heFpvb20gPSBvcHRfbWF4Wm9vbTtcbiAgICAgIH1cblxuICAgICAgLy8gYW5pbWF0ZSB0aGUgXCJmaXR0aW5nXCIgd2hlbiBhIGR1cmF0aW9uIGlzIGdpdmVuIGFuZCBpdHMgZ3JlYXRlciB0aGFuIDBcbiAgICAgIGlmIChvcHRfYW5pbWF0aW9uRHVyYXRpb24gJiYgb3B0X2FuaW1hdGlvbkR1cmF0aW9uID4gMCkge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gbWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHNvdXJjZTogdmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSwge3BhZGRpbmc6IFsyNSwgMjUsIDI1LCAyNV19KTtcbiAgICAgICAgLy92aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCkpO1xuICAgICAgICAvL3ZpZXcuc2V0Wm9vbSh2aWV3LmdldFpvb20oKS0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnQoKVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcnVuIGFsbCBwbGFjZWhvbGRlciBmdW5jdGlvbnMgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIHN0cklucHV0ICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgICAgICAgICAgICAgIGZlYXR1cmUgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllciB8IHVuZGVmaW5lZH0gIG9wdF9sYXllciAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUFsbFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpcnN0IHR3byBwYXJhbWV0ZXJzIGFzIHRoZXkgd2lsbCBiZSB1c2VkIGJ5IGFsbCBwbGFjZWhvbGRlci1mdW5jdGlvbnNcbiAgICAgIC8vIC0+IGZvciBwZXJmb3JtYW5jZVxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7Rk5mdW5jdGlvbk5hbWV9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYHdpbmRvdy5mdW5jdGlvbk5hbWUoZmVhdHVyZSwgc3R5bGUpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICogU3R5bGUgd2lsbCBiZSB0YWtlbiBlaXRoZXIgZnJvbSB0aGUgZmVhdHVyZSwgb3IgdGhlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllcn0gIGxheWVyICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBsYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCAhbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHtGTihbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZnVuY3Rpb25OYW1lLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmdW5jdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHN0eWxlXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldFN0eWxlKCkgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYXllci5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2Z1bmN0aW9uTmFtZV0oZmVhdHVyZSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzLCBpbiBgc3RySW5wdXRgLCBmb3IgdmFyaWFibGVzIHNldCBieSB0aGUgZ2VvRWRpdG9yLlxuICAgICAqIFZhbGlkIHBsYWNlaG9sZGVycyBhcmU6IChba2V5XSByZXByZXNlbnRzIHRoZSBzdHJpbmduYW1lIG9mIHRoZSB2YXJpYWJsZXMga2V5KVxuICAgICAqICAgYCR7RUxba2V5XX1gICAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWTFtrZXldfWAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlLCBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgKiAgIGAke0VWW2tleV19YCAgID0+ICBWYWx1ZSBvZiB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWVltrZXldfWAgID0+ICBTYW1lIGFzIGAke0VWW2tleV19YFxuICAgICAqXG4gICAgICogSWYgbm8gYXBwcm9wcmlhdGUgdmFsdWUgY2FuIGJlIGZvdW5kIGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogaXQgd2lsbCBzaW1wbHkgYmUgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhFVj9bTFZdKShbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgZXZLZXksIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGhhcyBlZGl0b3JWYXJzXG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKSkge1xuICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBlZGl0b3JWYXIgd2l0aCBrZXkgPT0gZXZLZXlcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVkaXRvclZhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yVmFyc1tpXS5rZXkgPT09IGV2S2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0eXBlIGlzICdFVkwnIGRpc3BsYXkgbGFiZWwgb25seSBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRUwnIHx8ICh0eXBlID09PSAnRVZMJyAmJiBlZGl0b3JWYXJzW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7YXR0cn1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgZmVhdHVyZS5nZXQoYXR0cilgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgYXR0ciwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldChhdHRyKSB8fCAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoKVxuXG4gICAgb2JqZWN0VG9BcnJheTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmplY3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwgLy8gZW5kIG9mIG9iamVjdFRvQXJyYXkoKVxuXG4gICAgZ2V0VmVjdG9yTGF5ZXIoc291cmNlLCBzdHlsZSkge1xuICAgICAgICB2YXIgZm5TdHlsZTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3R5bGUgaXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm5TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBzdHlsZTogZm5TdHlsZVxuICAgICAgICB9KTtcbiAgICB9LC8vIGVuZCBvZiBcImdldFZlY3RvckxheWVyKClcIlxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHN1YmRvbWFpbiBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgaG9zdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgKn1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3ViZG9tYWluKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICByZWRyYXdNYXBWaWV3OiBmdW5jdGlvbiAobWFwQ29udHJvbGxlcikge1xuICAgICAgdmFyIG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICBtYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgbWFwQ29udHJvbGxlci5sZWZ0U2xpZGVFbGVtZW50cy5wdXNoKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgICAgaWYgKG1hcERhdGEuc2NhbGVsaW5lKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSA9IG5ldyBvbC5jb250cm9sLlNjYWxlTGluZSh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuXG4gICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IFpvb21sZXZlbCh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8ICcnO1xuICAgIH0sXG4gICAgc3RvcmVWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7IC8vIG9ubHkgc3RyaW5nc1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIHV0aWxzID0gdGhpcy5jNGcubWFwcy51dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==