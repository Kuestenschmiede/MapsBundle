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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-misc-maphover.js");
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

/***/ "./Resources/public/js/c4g-maps-misc-maphover.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-maphover.js ***!
  \*******************************************************/
/*! exports provided: MapHover */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapHover", function() { return MapHover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_misc_tooltippopup__ = __webpack_require__(/*! ./c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};



(function ($, c4g) {
    'use strict';

    /**
     * @TODO
     * [MapHover description]
     *
     * @constructor
     *
     * @param {Object=} opt_options Control options.
     */

    c4g.maps.misc.MapHover = function (options) {

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
        this.hoverTooltip = new __WEBPACK_IMPORTED_MODULE_0__c4g_maps_misc_tooltippopup__["TooltipPopUp"]({
            map: this.map,
            offset: [10, 10],
            horizontal: true,
            closeable: false
        });
        this.hoverTooltip.hide();

        if (this.options.activate) {
            this.activate();
        }
    };

    // Add methods to MapHover
    c4g.maps.misc.MapHover.prototype = $.extend(c4g.maps.misc.MapHover.prototype, {

        /**
         * @TODO: [activate description]
         *
         * @return  {[type]}  [description]
         */
        activate: function activate() {
            if (!this.listenerKey) {
                this.listenerKey = this.map.on('pointermove', this.getHoverFunction(), this);
                //this.map.on('pointermove', this.changeFeatureStyles(), this);
            }
        }, // end of "activate()"


        /**
         * @TODO: [deactivate description]
         *
         * @return  {[type]}  [description]
         */
        deactivate: function deactivate() {
            if (this.listenerKey) {
                ol.Observable.unByKey(this.listenerKey);
                this.listenerKey = false;
            }
        }, // end of "deactivate()"


        /**
         * @TODO: [isActive description]
         *
         * @return  {[type]}  [description]
         */
        isActive: function isActive() {
            if (this.listenerKey) {
                return true;
            }
            return false;
        }, // end of "getState()"


        /**
         * @TODO: [getHoverFunction description]
         *
         * @return  {[type]}  [description]
         */
        getHoverFunction: function getHoverFunction() {

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
                        c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
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

                // set hover tooltips
                tooltipContent = false;
                if (!clustered && hovered.feature && typeof hovered.feature.get === 'function' && (hovered.feature.get('tooltip') || hovered.feature.get('graphicTitle'))) {
                    tooltipContent = hovered.feature.get('tooltip');
                    if (!tooltipContent) {
                        tooltipContent = hovered.feature.get('graphicTitle');
                    } else if ((typeof tooltipContent === 'undefined' ? 'undefined' : _typeof(tooltipContent)) === 'object' && tooltipContent.element && tooltipContent.element.childNodes[1]) {
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
                            var singleTooltip = c4g.maps.utils.replaceAllPlaceholders(tooltipHelper, features[i], hovered.layer);
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
                    tooltipContent = c4g.maps.utils.decodeGeoJsonProperty(tooltipContent);

                    // replace placeholders if possible
                    if (hovered.feature.get('features')) {}
                    tooltipContent = c4g.maps.utils.replaceAllPlaceholders(tooltipContent, hovered.feature, hovered.layer);

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

                    c4g.maps.popup.popup.setPosition(coord);

                    if (popupInfos.content) {
                        c4g.maps.popup.$content.html('');
                        c4g.maps.popup.$popup.addClass(c4g.maps.constant.css.ACTIVE).addClass(c4g.maps.constant.css.LOADING);
                        c4g.maps.popup.spinner.show();

                        if (popupInfos.async === false) {
                            var objPopup = {};
                            objPopup.popup = popupInfos;
                            objPopup.feature = hovered.feature;
                            objPopup.layer = hovered.layer;
                            // Call the popup hook for plugin specific popup content
                            if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                                c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
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
                                    if (c4g.maps.hook !== undefined && _typeof(c4g.maps.hook.proxy_fillPopup) === 'object') {
                                        c4g.maps.utils.callHookFunctions(c4g.maps.hook.proxy_fillPopup, objPopup);
                                    }

                                    proxy.setPopup(objPopup, proxy);
                                }
                            });
                        }
                    } else {
                        c4g.maps.popup.$popup.removeClass(c4g.maps.constant.css.ACTIVE);
                    }
                }
            };
        }, // end of "getHoverFunction()"

        changeFeatureStyles: function changeFeatureStyles() {
            //TODO: change style of features which are hovered and have the option to change style on hover enabled
        }

    }); // End of "add methods to TooltipPopUp"
})(jQuery, this.c4g);

var MapHover = this.c4g.maps.misc.MapHover;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-tooltippopup.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-tooltippopup.js ***!
  \***********************************************************/
/*! exports provided: TooltipPopUp */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPopUp", function() { return TooltipPopUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};



(function ($, c4g) {
  'use strict';

  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */

  c4g.maps.misc.TooltipPopUp = function (opt_options) {

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
      addClassName += ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HORIZONTAL;
    }
    if (this.options.closeable) {
      addClassName += ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].POPUP_CLOSE;
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
  };

  // Add methods to TooltipPopUp
  c4g.maps.misc.TooltipPopUp.prototype = $.extend(c4g.maps.misc.TooltipPopUp.prototype, {

    close: function close() {
      if (typeof this.options.closeFunction === 'function') {
        this.options.closeFunction();
      }

      if (this.options.map) {
        this.options.map.removeOverlay(this.overlay);
      }
    },

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */
    show: function show() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE)) {
        $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE);
      }
    },

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */
    hide: function hide() {
      if (!$(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE)) {
        $(this.element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].HIDE);
      }
    },

    /**
     * @TODO
     * [getContent description]
     *
     */
    getContent: function getContent() {
      return this.contentContainer.innerHTML;
    },

    /**
     * @TODO
     * [getPosition description]
     *
     */
    getPosition: function getPosition() {
      return this.overlay.getPosition();
    },

    /**
     * @TODO
     * [setContent description]
     *
     * @param  {[type]}  content  [description]
     */
    setContent: function setContent(content) {
      this.contentContainer.innerHTML = content;
    },

    /**
     * @TODO
     * [setPosition description]
     *
     * @param  {[type]}  coordinates  [description]
     */
    setPosition: function setPosition(coordinates) {
      this.overlay.setPosition(coordinates);
    }

  }); // End of "add methods to TooltipPopUp"
})(jQuery, this.c4g);

var TooltipPopUp = this.c4g.maps.misc.TooltipPopUp;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTExMjUwMDE2ZTA1NzE0MzNjNGEiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLW1pc2MtbWFwaG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXRvb2x0aXBwb3B1cC5qcyJdLCJuYW1lcyI6WyJjNGciLCJtYXBzIiwiY29uc3RhbnQiLCIkIiwiY3NzIiwiZXh0ZW5kIiwiT1BFTiIsIkNMT1NFIiwiQ0xPU0VBQkxFIiwiRU5BQkxFRCIsIkRJU0FCTEVEIiwiSElERSIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIlJFRlJFU0giLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQURESVRJT05BTFBBTkVMIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJOT05FIiwialF1ZXJ5IiwiY3NzQ29uc3RhbnRzIiwibWlzYyIsIk1hcEhvdmVyIiwib3B0aW9ucyIsImFjdGl2YXRlIiwibWFwQ29udHJvbGxlciIsImNvbnNvbGUiLCJ3YXJuIiwibGlzdGVuZXJLZXkiLCJtYXAiLCJsYXN0RmVhdHVyZVN0eWxlIiwibGFzdEhvdmVyZWRGZWF0dXJlIiwiaG92ZXJUb29sdGlwIiwiVG9vbHRpcFBvcFVwIiwib2Zmc2V0IiwiaG9yaXpvbnRhbCIsImNsb3NlYWJsZSIsImhpZGUiLCJwcm90b3R5cGUiLCJvbiIsImdldEhvdmVyRnVuY3Rpb24iLCJkZWFjdGl2YXRlIiwib2wiLCJPYnNlcnZhYmxlIiwidW5CeUtleSIsImlzQWN0aXZlIiwic2VsZiIsImV2ZW50IiwiaG92ZXJlZCIsImNsdXN0ZXJlZCIsInRvb2x0aXBDb250ZW50IiwidG9vbHRpcEhlbHBlciIsImZlYXR1cmVzIiwidG9vbHRpcExlbmd0aCIsInJlc29sdXRpb24iLCJjYW52YXMiLCJtYXBEYXRhIiwiZGF0YSIsInByb3h5IiwiZm9yRWFjaEZlYXR1cmVBdFBpeGVsIiwicGl4ZWwiLCJmZWF0dXJlIiwibGF5ZXIiLCJnZXRWaWV3IiwiZ2V0UmVzb2x1dGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhvdmVyX3BvcHVwcyIsImhvdmVyX3BvcHVwc19zdGF5IiwicG9wdXAiLCIkcG9wdXAiLCJyZW1vdmVDbGFzcyIsInNldFN0eWxlIiwiZ2V0IiwiZ2V0R2VvbWV0cnkiLCJnZW9tIiwiTGluZVN0cmluZyIsImxhc3RMYXllclN0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsImdldFN0eWxlIiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJmblN0eWxlRnVuY3Rpb24iLCJGdW5jdGlvbiIsInN0eWxlIiwiZ2V0U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJhcnJJZHMiLCJwdXNoIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZWxlbWVudCIsImNoaWxkTm9kZXMiLCJpbm5lckhUTUwiLCJ0b29sdGlwIiwicGFyc2VJbnQiLCJpIiwibGVuZ3RoIiwic2xpY2UiLCJ0b29sdGlwX2xlbmd0aCIsInNpbmdsZVRvb2x0aXAiLCJ1dGlscyIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJkZWNvZGVHZW9Kc29uUHJvcGVydHkiLCJ0cmltIiwic2V0UG9zaXRpb24iLCJjb29yZGluYXRlIiwic2V0Q29udGVudCIsInNob3ciLCJwb3B1cEluZm9zIiwiY29vcmQiLCJnZXRDb29yZGluYXRlcyIsImV4dGVudCIsImdldEV4dGVudCIsImdldENvb3JkaW5hdGVGcm9tUGl4ZWwiLCJjb250ZW50IiwiJGNvbnRlbnQiLCJodG1sIiwiYWRkQ2xhc3MiLCJzcGlubmVyIiwiYXN5bmMiLCJvYmpQb3B1cCIsImhvb2siLCJ1bmRlZmluZWQiLCJwcm94eV9maWxsUG9wdXAiLCJjYWxsSG9va0Z1bmN0aW9ucyIsInNldFBvcHVwIiwiYWpheCIsImRhdGFUeXBlIiwidXJsIiwiYXBpX2luZm93aW5kb3dfdXJsIiwiZG9uZSIsInBvcHVwSW5mbyIsInJvdXRpbmdfbGluayIsImNoYW5nZUZlYXR1cmVTdHlsZXMiLCJvcHRfb3B0aW9ucyIsImFkZENsYXNzTmFtZSIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImNsb3NlIiwiY29udGVudENvbnRhaW5lciIsIm92ZXJsYXkiLCJPdmVybGF5IiwiaW5zZXJ0Rmlyc3QiLCJwb3NpdGlvbmluZyIsImFkZE92ZXJsYXkiLCJjbG9zZUZ1bmN0aW9uIiwicmVtb3ZlT3ZlcmxheSIsImhhc0NsYXNzIiwiZ2V0Q29udGVudCIsImdldFBvc2l0aW9uIiwiY29vcmRpbmF0ZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFp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LGFBQU8sS0FBS1QsT0FBTCxDQUFhUyxXQUFiLEVBQVA7QUFDRCxLQXBEbUY7O0FBc0RwRjs7Ozs7O0FBTUEvQyxnQkFBWSxvQkFBVVEsT0FBVixFQUFtQjtBQUM3QixXQUFLNkIsZ0JBQUwsQ0FBc0JuRCxTQUF0QixHQUFrQ3NCLE9BQWxDO0FBQ0QsS0E5RG1GOztBQWdFcEY7Ozs7OztBQU1BVixpQkFBYSxxQkFBVWtELFdBQVYsRUFBdUI7QUFDbEMsV0FBS1YsT0FBTCxDQUFheEMsV0FBYixDQUF5QmtELFdBQXpCO0FBQ0Q7O0FBeEVtRixHQUEvQyxDQUF2QyxDQTVFaUIsQ0FzSmI7QUFFTCxDQXhKQSxFQXdKQ3ZJLE1BeEpELEVBd0pTLEtBQUt4SixHQXhKZCxDQUFEOztBQTBKTyxJQUFJc0ssZUFBZSxLQUFLdEssR0FBTCxDQUFTQyxJQUFULENBQWN5SixJQUFkLENBQW1CWSxZQUF0QyxDIiwiZmlsZSI6ImM0Zy1tYXBzLW1pc2MtbWFwaG92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtbWlzYy1tYXBob3Zlci5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MTEyNTAwMTZlMDU3MTQzM2M0YSIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5taXNjID0gdGhpcy5jNGcubWFwcy5taXNjIHx8IHt9O1xuXG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4vYzRnLW1hcHMtbWlzYy10b29sdGlwcG9wdXBcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbTWFwSG92ZXIgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIENvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLm1pc2MuTWFwSG92ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIC8vIG1hcENvbnRyb2xsZXI6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2YXRlOiB0cnVlXG4gICAgfSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignTWFwSG92ZXIgbmVlZHMgYSBtYXBDb250cm9sbGVyJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gc2V0IG5lZWRlZCB2YXJzXG4gICAgdGhpcy5saXN0ZW5lcktleSA9IGZhbHNlO1xuICAgIHRoaXMubWFwID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwO1xuICAgIHRoaXMubGFzdEZlYXR1cmVTdHlsZSA9IG51bGw7XG4gICAgdGhpcy5sYXN0SG92ZXJlZEZlYXR1cmUgPSBudWxsO1xuXG4gICAgLy8gY3JlYXRlIHRvb2x0aXBcbiAgICB0aGlzLmhvdmVyVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIG9mZnNldDogWzEwLCAxMF0sXG4gICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgY2xvc2VhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuaG92ZXJUb29sdGlwLmhpZGUoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYWN0aXZhdGUpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gTWFwSG92ZXJcbiAgYzRnLm1hcHMubWlzYy5NYXBIb3Zlci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5taXNjLk1hcEhvdmVyLnByb3RvdHlwZSwge1xuXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2FjdGl2YXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyS2V5KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJLZXkgPSB0aGlzLm1hcC5vbigncG9pbnRlcm1vdmUnLCB0aGlzLmdldEhvdmVyRnVuY3Rpb24oKSwgdGhpcyk7XG4gICAgICAgIC8vdGhpcy5tYXAub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5jaGFuZ2VGZWF0dXJlU3R5bGVzKCksIHRoaXMpO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImFjdGl2YXRlKClcIlxuXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2RlYWN0aXZhdGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RlbmVyS2V5KSB7XG4gICAgICAgIG9sLk9ic2VydmFibGUudW5CeUtleSh0aGlzLmxpc3RlbmVyS2V5KTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcktleSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImRlYWN0aXZhdGUoKVwiXG5cblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbaXNBY3RpdmUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcktleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJnZXRTdGF0ZSgpXCJcblxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtnZXRIb3ZlckZ1bmN0aW9uIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRIb3ZlckZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIHZhciBob3ZlcmVkLFxuICAgICAgICAgICAgY2x1c3RlcmVkLFxuICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQsXG4gICAgICAgICAgICB0b29sdGlwSGVscGVyLFxuICAgICAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgICAgICB0b29sdGlwTGVuZ3RoLFxuICAgICAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIG1hcERhdGEgPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLFxuICAgICAgICAgICAgcHJveHkgPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eTtcblxuXG4gICAgICAgIGNsdXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICBob3ZlcmVkID0gc2VsZi5tYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKGV2ZW50LnBpeGVsLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZSxcbiAgICAgICAgICAgICAgICBsYXllcjogbGF5ZXJcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXNvbHV0aW9uID0gc2VsZi5tYXAuZ2V0VmlldygpLmdldFJlc29sdXRpb24oKTtcblxuICAgICAgICBpZiAoIWhvdmVyZWQpIHtcbiAgICAgICAgICBzZWxmLmhvdmVyVG9vbHRpcC5oaWRlKCk7XG4gICAgICAgICAgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbiAgICAgICAgICAkKGNhbnZhcykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgIGlmKG1hcERhdGEuaG92ZXJfcG9wdXBzID09PSAnMScgJiYgbWFwRGF0YS5ob3Zlcl9wb3B1cHNfc3RheSAhPSAnMScpe1xuICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAucmVtb3ZlQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYubGFzdEhvdmVyZWRGZWF0dXJlICYmIHNlbGYubGFzdEZlYXR1cmVTdHlsZSkge1xuICAgICAgICAgICAgIHNlbGYubGFzdEhvdmVyZWRGZWF0dXJlLnNldFN0eWxlKHNlbGYubGFzdEZlYXR1cmVTdHlsZSk7XG4gICAgICAgICAgICAgc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbiAgICAgICAgJChjYW52YXMpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcblxuICAgICAgICBpZiAoaG92ZXJlZC5mZWF0dXJlICYmIHR5cGVvZiBob3ZlcmVkLmZlYXR1cmUuZ2V0ID09PSAnZnVuY3Rpb24nICYmIGhvdmVyZWQuZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICBpZiAoaG92ZXJlZC5mZWF0dXJlLmdldCgnZmVhdHVyZXMnKVsxXSkge1xuICAgICAgICAgICAgY2x1c3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgaG92ZXJlZC5mZWF0dXJlID0gaG92ZXJlZC5mZWF0dXJlLmdldCgnZmVhdHVyZXMnKVswXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaG92ZXJlZC5mZWF0dXJlLmdldEdlb21ldHJ5KCkgJiYgaG92ZXJlZC5mZWF0dXJlLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGhvdmVyZWQuZmVhdHVyZS5nZXQoXCJob3Zlcl9sb2NhdGlvblwiKSB8fCAoc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUgJiYgc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUuZ2V0KFwiaG92ZXJfbG9jYXRpb25cIikpKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUgJiYgaG92ZXJlZC5mZWF0dXJlID09PSBzZWxmLmxhc3RIb3ZlcmVkRmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zZXQgYmFjayBzdHlsZXMgd2hlbiB0aGUgZmVhdHVyZXMgYXJlIG5vdCBob3ZlcmVkIGFueW1vcmVcbiAgICAgICAgICAgIGlmIChzZWxmLmxhc3RGZWF0dXJlU3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvdmVyZWQuZmVhdHVyZSAhPT0gc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmxhc3RGZWF0dXJlU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RIb3ZlcmVkRmVhdHVyZS5zZXRTdHlsZShzZWxmLmxhc3RGZWF0dXJlU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDaGFuZ2VkIGJhY2sgZmVhdHVyZSBzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5sYXN0TGF5ZXJTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdEhvdmVyZWRGZWF0dXJlLnNldFN0eWxlKHNlbGYubGFzdExheWVyU3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDaGFuZ2VkIGJhY2sgbGF5ZXItZmVhdHVyZSBzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoaG92ZXJlZC5mZWF0dXJlICYmIHR5cGVvZiBob3ZlcmVkLmZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBob3ZlcmVkLmZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBob3ZlcmVkLmZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbigpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUgPSBob3ZlcmVkLmZlYXR1cmU7XG5cbiAgICAgICAgICAgICAgICBzZWxmLmxhc3RMYXllclN0eWxlID0gaG92ZXJlZC5sYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGFzdEZlYXR1cmVTdHlsZSA9IHNlbGYubGFzdExheWVyU3R5bGUoc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIC8vVE9ETyBnZXQgb25ob3ZlciBzdHlsZSBmcm9tIGRiICh2bGx0IHNjaG9uIGluIHByb3h5IGRyaW4/KVxuICAgICAgICAgICAgICAgIGlmKGhvdmVyZWQuZmVhdHVyZS5nZXQoJ2hvdmVyX3N0eWxlJykgJiYgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2hvdmVyZWQuZmVhdHVyZS5nZXQoXCJob3Zlcl9zdHlsZVwiKV0pe1xuICAgICAgICAgICAgICAgICAgICBpZihwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbaG92ZXJlZC5mZWF0dXJlLmdldChcImhvdmVyX3N0eWxlXCIpXS5mblN0eWxlRnVuY3Rpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZC5mZWF0dXJlLnNldFN0eWxlKEZ1bmN0aW9uKFwiZmVhdHVyZVwiLFwiZGF0YVwiLFwibWFwXCIscHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2hvdmVyZWQuZmVhdHVyZS5nZXQoXCJob3Zlcl9zdHlsZVwiKV0uZm5TdHlsZUZ1bmN0aW9uKShob3ZlcmVkLmZlYXR1cmUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZC5mZWF0dXJlLnNldFN0eWxlKHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmZlYXR1cmUuZ2V0KFwiaG92ZXJfc3R5bGVcIildLnN0eWxlKGhvdmVyZWQuZmVhdHVyZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChob3ZlcmVkLmxheWVyICYmIHR5cGVvZiBob3ZlcmVkLmxheWVyLmdldFN0eWxlRnVuY3Rpb24gJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgaG92ZXJlZC5sYXllci5nZXRTdHlsZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGhvdmVyZWQubGF5ZXIuZ2V0U3R5bGVGdW5jdGlvbigpID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaG92ZXJlZC5mZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdEhvdmVyZWRGZWF0dXJlID0gaG92ZXJlZC5mZWF0dXJlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUgPSBob3ZlcmVkLmxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdEhvdmVyZWRGZWF0dXJlID0gc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYubGFzdExheWVyU3R5bGUgPSBob3ZlcmVkLmxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5sYXN0RmVhdHVyZVN0eWxlID0gc2VsZi5sYXN0TGF5ZXJTdHlsZShzZWxmLmxhc3RIb3ZlcmVkRmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYoaG92ZXJlZC5mZWF0dXJlLmdldCgnaG92ZXJfc3R5bGUnKSApe1xuICAgICAgICAgICAgICAgICAgICBpZighcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2hvdmVyZWQuZmVhdHVyZS5nZXQoXCJob3Zlcl9zdHlsZVwiKV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycklkcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJySWRzLnB1c2goaG92ZXJlZC5mZWF0dXJlLmdldChcImhvdmVyX3N0eWxlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhhcnJJZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0SG92ZXJlZEZlYXR1cmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYocHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2hvdmVyZWQuZmVhdHVyZS5nZXQoXCJob3Zlcl9zdHlsZVwiKV0uZm5TdHlsZUZ1bmN0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyZWQuZmVhdHVyZS5zZXRTdHlsZShGdW5jdGlvbihcImZlYXR1cmVcIixcImRhdGFcIixcIm1hcFwiLHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmZlYXR1cmUuZ2V0KFwiaG92ZXJfc3R5bGVcIildLmZuU3R5bGVGdW5jdGlvbikoaG92ZXJlZC5mZWF0dXJlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyZWQuZmVhdHVyZS5zZXRTdHlsZShwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbaG92ZXJlZC5mZWF0dXJlLmdldChcImhvdmVyX3N0eWxlXCIpXS5zdHlsZShob3ZlcmVkLmZlYXR1cmUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdmVyZWQgJiYgaG92ZXJlZC5mZWF0dXJlICYmIGhvdmVyZWQuZmVhdHVyZS5nZXQoJ3N0eWxlVXJsJykpIHtcbiAgICAgICAgICAvL2lmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCB3ZSBoYXZlIGEgZmVhdHVyZSB0aGF0IGhhcyBub25lIG9mIG91ciBzdHlsZXMgPT4gbm8gdG9vbHRpcFxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBob3ZlciB0b29sdGlwc1xuICAgICAgICB0b29sdGlwQ29udGVudCA9IGZhbHNlO1xuICAgICAgICBpZiAoIWNsdXN0ZXJlZCAmJiBob3ZlcmVkLmZlYXR1cmUgJiYgdHlwZW9mIGhvdmVyZWQuZmVhdHVyZS5nZXQgPT09ICdmdW5jdGlvbicgJiYgKGhvdmVyZWQuZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKSB8fCBob3ZlcmVkLmZlYXR1cmUuZ2V0KCdncmFwaGljVGl0bGUnKSkpIHtcbiAgICAgICAgICB0b29sdGlwQ29udGVudCA9IGhvdmVyZWQuZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKTtcbiAgICAgICAgICBpZiAoIXRvb2x0aXBDb250ZW50KSB7XG4gICAgICAgICAgICB0b29sdGlwQ29udGVudCA9IGhvdmVyZWQuZmVhdHVyZS5nZXQoJ2dyYXBoaWNUaXRsZScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRvb2x0aXBDb250ZW50ID09PSAnb2JqZWN0JyAmJiB0b29sdGlwQ29udGVudC5lbGVtZW50ICYmIHRvb2x0aXBDb250ZW50LmVsZW1lbnQuY2hpbGROb2Rlc1sxXSkge1xuICAgICAgICAgICAgdG9vbHRpcENvbnRlbnQgPSB0b29sdGlwQ29udGVudC5lbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBAVE9ETzogQ2hlY2sgJiBmaXhcbiAgICAgICAgfSBlbHNlIGlmIChob3ZlcmVkLmZlYXR1cmUgJiYgdHlwZW9mIGhvdmVyZWQuZmVhdHVyZS5nZXRTdHlsZUZ1bmN0aW9uICYmXG4gICAgICAgICAgICB0eXBlb2YgaG92ZXJlZC5mZWF0dXJlLmdldFN0eWxlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiBob3ZlcmVkLmZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbigpID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXMgJiZcbiAgICAgICAgICAgIHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbigpKHJlc29sdXRpb24pXSAmJlxuICAgICAgICAgICAgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2hvdmVyZWQuZmVhdHVyZS5nZXRTdHlsZUZ1bmN0aW9uKCkocmVzb2x1dGlvbildLnRvb2x0aXApIHtcbiAgICAgICAgICB0b29sdGlwQ29udGVudCA9IHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmZlYXR1cmUuZ2V0U3R5bGVGdW5jdGlvbigpKHJlc29sdXRpb24pXS50b29sdGlwO1xuICAgICAgICAgIC8vIEBUT0RPOiBDaGVja1xuICAgICAgICB9IGVsc2UgaWYgKGhvdmVyZWQubGF5ZXIgJiYgdHlwZW9mIGhvdmVyZWQubGF5ZXIuZ2V0U3R5bGVGdW5jdGlvbiAmJlxuICAgICAgICAgICAgdHlwZW9mIGhvdmVyZWQubGF5ZXIuZ2V0U3R5bGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGhvdmVyZWQubGF5ZXIuZ2V0U3R5bGVGdW5jdGlvbigpID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXMgJiZcbiAgICAgICAgICAgIHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmxheWVyLmdldFN0eWxlRnVuY3Rpb24oKSgpXSAmJlxuICAgICAgICAgICAgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2hvdmVyZWQubGF5ZXIuZ2V0U3R5bGVGdW5jdGlvbigpKCldLnRvb2x0aXApIHtcbiAgICAgICAgICB0b29sdGlwQ29udGVudCA9IHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmxheWVyLmdldFN0eWxlRnVuY3Rpb24oKSgpXS50b29sdGlwO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdmVyZWQubGF5ZXIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBob3ZlcmVkLmxheWVyLmdldFN0eWxlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIHR5cGVvZiBob3ZlcmVkLmxheWVyLmdldFN0eWxlRnVuY3Rpb24oKSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgcHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzICYmXG4gICAgICAgICAgICBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbaG92ZXJlZC5sYXllci5nZXRTdHlsZUZ1bmN0aW9uKCkobnVsbCwgbnVsbCwgMSldICYmXG4gICAgICAgICAgICBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbaG92ZXJlZC5sYXllci5nZXRTdHlsZUZ1bmN0aW9uKCkobnVsbCwgbnVsbCwgMSldLnRvb2x0aXApIHtcbiAgICAgICAgICB0b29sdGlwQ29udGVudCA9IHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tob3ZlcmVkLmxheWVyLmdldFN0eWxlRnVuY3Rpb24oKShudWxsLCBudWxsLCAxKV0udG9vbHRpcDtcbiAgICAgICAgfSBlbHNlIGlmIChob3ZlcmVkLmxheWVyICYmIGhvdmVyZWQubGF5ZXIudG9vbHRpcCkge1xuICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gaG92ZXJlZC5sYXllci50b29sdGlwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbHVzdGVyZWQgJiYgaG92ZXJlZC5mZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICAgICAgICBmZWF0dXJlcyA9IGhvdmVyZWQuZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgICAgICBpZihmZWF0dXJlc1swXS5nZXQoJ3Rvb2x0aXAnKSAmJiBmZWF0dXJlc1swXS5nZXQoJ3Rvb2x0aXBfbGVuZ3RoJykpe1xuICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gZmVhdHVyZXNbMF0uZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgICAgICAgICAgdG9vbHRpcExlbmd0aCA9IHBhcnNlSW50KGZlYXR1cmVzWzBdLmdldCgndG9vbHRpcF9sZW5ndGgnKSk7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTxmZWF0dXJlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGZlYXR1cmVzW2ldLmdldCgndG9vbHRpcCcpICYmIGZlYXR1cmVzW2ldLmdldCgndG9vbHRpcCcpICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gdG9vbHRpcENvbnRlbnQgKyAnLCAnICsgZmVhdHVyZXNbaV0uZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodG9vbHRpcENvbnRlbnQubGVuZ3RoID4gdG9vbHRpcExlbmd0aCArIDMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih0b29sdGlwQ29udGVudCA9IHRvb2x0aXBDb250ZW50LnNsaWNlKDAsIHRvb2x0aXBMZW5ndGgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gdG9vbHRpcENvbnRlbnQgKyAnLi4uJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihob3ZlcmVkLmxheWVyLnRvb2x0aXAgJiYgaG92ZXJlZC5sYXllci50b29sdGlwX2xlbmd0aCl7XG4gICAgICAgICAgICAgICAgdG9vbHRpcEhlbHBlciA9IHRvb2x0aXBDb250ZW50O1xuICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgdG9vbHRpcExlbmd0aCA9IHBhcnNlSW50KGhvdmVyZWQubGF5ZXIudG9vbHRpcF9sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGZvcihpID0gMDsgaTxmZWF0dXJlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaW5nbGVUb29sdGlwID0gYzRnLm1hcHMudXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyh0b29sdGlwSGVscGVyLCBmZWF0dXJlc1tpXSwgaG92ZXJlZC5sYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNpbmdsZVRvb2x0aXAgIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9vbHRpcENvbnRlbnQgPT0gJycpIHRvb2x0aXBDb250ZW50ID0gc2luZ2xlVG9vbHRpcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdG9vbHRpcENvbnRlbnQgPSB0b29sdGlwQ29udGVudCArICcsICcgKyBzaW5nbGVUb29sdGlwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRvb2x0aXBDb250ZW50Lmxlbmd0aCA+IHRvb2x0aXBMZW5ndGggKzMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih0b29sdGlwQ29udGVudCA9IHRvb2x0aXBDb250ZW50LnNsaWNlKDAsIHRvb2x0aXBMZW5ndGgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gdG9vbHRpcENvbnRlbnQgKyAnLi4uJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9vbHRpcENvbnRlbnQpIHtcbiAgICAgICAgICB0b29sdGlwQ29udGVudCA9IGM0Zy5tYXBzLnV0aWxzLmRlY29kZUdlb0pzb25Qcm9wZXJ0eSh0b29sdGlwQ29udGVudCk7XG5cbiAgICAgICAgICAvLyByZXBsYWNlIHBsYWNlaG9sZGVycyBpZiBwb3NzaWJsZVxuICAgICAgICAgICAgaWYoaG92ZXJlZC5mZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIHRvb2x0aXBDb250ZW50ID0gYzRnLm1hcHMudXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyh0b29sdGlwQ29udGVudCwgaG92ZXJlZC5mZWF0dXJlLCBob3ZlcmVkLmxheWVyKTtcblxuXG4gICAgICAgICAgaWYgKHRvb2x0aXBDb250ZW50LnRyaW0oKSkge1xuICAgICAgICAgICAgLy8gcG9wdXAgY29uZmlnXG4gICAgICAgICAgICBzZWxmLmhvdmVyVG9vbHRpcC5zZXRQb3NpdGlvbihldmVudC5jb29yZGluYXRlKTtcbiAgICAgICAgICAgIHNlbGYuaG92ZXJUb29sdGlwLnNldENvbnRlbnQodG9vbHRpcENvbnRlbnQpO1xuICAgICAgICAgICAgc2VsZi5ob3ZlclRvb2x0aXAuc2hvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmhvdmVyVG9vbHRpcC5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuaG92ZXJUb29sdGlwLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihtYXBEYXRhLmhvdmVyX3BvcHVwcyA9PT0gJzEnICYmICFjbHVzdGVyZWQgJiYgaG92ZXJlZC5mZWF0dXJlICl7XG4gICAgICAgICAgdmFyIHBvcHVwSW5mb3MgPSB7fTtcblxuICAgICAgICAgIGlmKGhvdmVyZWQuZmVhdHVyZS5nZXQoJ3BvcHVwJykpIHtcbiAgICAgICAgICAgIHBvcHVwSW5mb3MgPSBob3ZlcmVkLmZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGhvdmVyZWQuZmVhdHVyZS5nZXQoJ2xvY19saW5rdXJsJykpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoaG92ZXJlZC5sYXllciAmJiBob3ZlcmVkLmxheWVyLnBvcHVwKXtcbiAgICAgICAgICAgIHBvcHVwSW5mb3MgPSBob3ZlcmVkLmxheWVyLnBvcHVwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgY29vcmQgPSBob3ZlcmVkLmZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGlmKCFjb29yZCB8fChjb29yZCAmJiBjb29yZFswXSAmJiBjb29yZFswXS5sZW5ndGgpKXtcbiAgICAgICAgICAgICAgdmFyIGV4dGVudCA9IGhvdmVyZWQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpO1xuICAgICAgICAgICAgICBjb29yZCA9IHNlbGYubWFwLmdldENvb3JkaW5hdGVGcm9tUGl4ZWwoZXZlbnQucGl4ZWwpO1xuICAgICAgICAgICAgICBjb29yZCA9IFsoZXh0ZW50WzBdK2V4dGVudFsyXSkvMiwoZXh0ZW50WzFdK2V4dGVudFszXSkvMl07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICBjNGcubWFwcy5wb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihjb29yZCk7XG5cbiAgICAgICAgICAgIGlmIChwb3B1cEluZm9zLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kY29udGVudC5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSkuYWRkQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkxPQURJTkcpO1xuICAgICAgICAgICAgICAgIGM0Zy5tYXBzLnBvcHVwLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvcHVwSW5mb3MuYXN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mb3M7XG4gICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBob3ZlcmVkLmZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gaG92ZXJlZC5sYXllcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjNGcubWFwcy51dGlscy5jYWxsSG9va0Z1bmN0aW9ucyhjNGcubWFwcy5ob29rLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnNldFBvcHVwKG9ialBvcHVwLCBwcm94eSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcHJveHkuYXBpX2luZm93aW5kb3dfdXJsICsgJy8nICsgcG9wdXBJbmZvcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogcG9wdXBJbmZvcy5hc3luYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZ19saW5rOiBwb3B1cEluZm9zLnJvdXRpbmdfbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqUG9wdXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gaG92ZXJlZC5mZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gaG92ZXJlZC5sYXllcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGM0Zy5tYXBzLmhvb2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYzRnLm1hcHMuaG9vay5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM0Zy5tYXBzLnV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2sucHJveHlfZmlsbFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHkuc2V0UG9wdXAob2JqUG9wdXAsIHByb3h5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjNGcubWFwcy5wb3B1cC4kcG9wdXAucmVtb3ZlQ2xhc3MoYzRnLm1hcHMuY29uc3RhbnQuY3NzLkFDVElWRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cblxuXG4gICAgICB9O1xuICAgIH0sIC8vIGVuZCBvZiBcImdldEhvdmVyRnVuY3Rpb24oKVwiXG5cbiAgICBjaGFuZ2VGZWF0dXJlU3R5bGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvL1RPRE86IGNoYW5nZSBzdHlsZSBvZiBmZWF0dXJlcyB3aGljaCBhcmUgaG92ZXJlZCBhbmQgaGF2ZSB0aGUgb3B0aW9uIHRvIGNoYW5nZSBzdHlsZSBvbiBob3ZlciBlbmFibGVkXG4gICAgfVxuXG4gIH0pOyAvLyBFbmQgb2YgXCJhZGQgbWV0aG9kcyB0byBUb29sdGlwUG9wVXBcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBNYXBIb3ZlciA9IHRoaXMuYzRnLm1hcHMubWlzYy5NYXBIb3ZlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLW1pc2MtbWFwaG92ZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLm1pc2MgPSB0aGlzLmM0Zy5tYXBzLm1pc2MgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEBUT0RPXG4gICAqIFtUb29sdGlwUG9wVXAgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIENvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLm1pc2MuVG9vbHRpcFBvcFVwID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgYWRkQ2xhc3NOYW1lLFxuICAgICAgICBjbG9zZUJ1dHRvbjtcblxuICAgIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgLy8gY2xhc3NOYW1lOiAnJ1xuICAgICAgLy8gY2xvc2VGdW5jdGlvbjogbnVsbFxuICAgICAgLy8gbWFwOiBudWxsXG4gICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgIGNsb3NlYWJsZTogZmFsc2UsXG4gICAgICBvZmZzZXQ6IFsxLCAtMV0sXG4gICAgICBwb3NpdGlvbjogWzAsIDBdXG4gICAgfSwgdGhpcy5vcHRpb25zKTtcblxuICAgIC8vIHByZXBhcmUgYWRkaXRpb25hbCBjbGFzc2VzXG4gICAgYWRkQ2xhc3NOYW1lID0gJyc7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgIGFkZENsYXNzTmFtZSA9ICcgJyArIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgYWRkQ2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5IT1JJWk9OVEFMO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlYWJsZSkge1xuICAgICAgYWRkQ2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5DTE9TRUFCTEU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5UT09MVElQX1BPUFVQICsgYWRkQ2xhc3NOYW1lO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZWFibGUpIHtcbiAgICAgIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTiArICcgJyArIGNzc0NvbnN0YW50cy5QT1BVUF9DTE9TRTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgICQoY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBuZXcgb2wuT3ZlcmxheSh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBpbnNlcnRGaXJzdDogZmFsc2UsXG4gICAgICBvZmZzZXQ6IHRoaXMub3B0aW9ucy5vZmZzZXQsXG4gICAgICBwb3NpdGlvbmluZzogJ2JvdHRvbS1sZWZ0J1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYXApIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tYXAuYWRkT3ZlcmxheSh0aGlzLm92ZXJsYXkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMub3ZlcmxheS5zZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMucG9zaXRpb24pO1xuICAgIH1cbiAgfTtcblxuICAvLyBBZGQgbWV0aG9kcyB0byBUb29sdGlwUG9wVXBcbiAgYzRnLm1hcHMubWlzYy5Ub29sdGlwUG9wVXAucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMubWlzYy5Ub29sdGlwUG9wVXAucHJvdG90eXBlLCB7XG5cbiAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuY2xvc2VGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY2xvc2VGdW5jdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1hcCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwLnJlbW92ZU92ZXJsYXkodGhpcy5vdmVybGF5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbc2hvdyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5ISURFKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbaGlkZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEkKHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSElERSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICogW2dldENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50Q29udGFpbmVyLmlubmVySFRNTDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbZ2V0UG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5nZXRQb3NpdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtzZXRDb250ZW50IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgY29udGVudCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbc2V0UG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBjb29yZGluYXRlcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5zZXRQb3NpdGlvbihjb29yZGluYXRlcyk7XG4gICAgfVxuXG4gIH0pOyAvLyBFbmQgb2YgXCJhZGQgbWV0aG9kcyB0byBUb29sdGlwUG9wVXBcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBUb29sdGlwUG9wVXAgPSB0aGlzLmM0Zy5tYXBzLm1pc2MuVG9vbHRpcFBvcFVwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtbWlzYy10b29sdGlwcG9wdXAuanMiXSwic291cmNlUm9vdCI6IiJ9