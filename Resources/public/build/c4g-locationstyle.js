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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-locationstyle.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbG9jYXRpb25zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJuYW1lcyI6WyJDNGdMb2NhdGlvblN0eWxlIiwibG9jU3R5bGVBcnIiLCJjb250cm9sbGVyIiwiaWQiLCJzdHlsZSIsImdldFN0eWxlRnVuY3Rpb24iLCJlZGl0b3IiLCJnZXRTdHlsZUVkaXRvckNvbmZpZyIsIm5hbWUiLCJ0b29sdGlwIiwibGFiZWwiLCJtaW56b29tIiwibWF4em9vbSIsImZuU3R5bGVGdW5jdGlvbiIsInN0eWxlRGF0YSIsInNlbGYiLCJzdHlsZUZ1bmN0aW9uIiwiaW1hZ2VTdHlsZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwidGV4dFN0eWxlIiwidGV4dFN0eWxlT3V0bGluZSIsImJhY2tncm91bmRGaWxsIiwiYmFja2dyb3VuZFN0cm9rZSIsIm9sIiwiU3Ryb2tlIiwiY29sb3IiLCJ1dGlscyIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsInN0cm9rZWNvbG9yIiwic3Ryb2tlb3BhY2l0eSIsIndpZHRoIiwicGFyc2VJbnQiLCJzdHJva2V3aWR0aCIsInZhbHVlIiwiRmlsbCIsImZpbGxjb2xvciIsImZpbGxvcGFjaXR5Iiwic3R5bGV0eXBlIiwiUmVndWxhclNoYXBlIiwiZmlsbCIsInN0cm9rZSIsInBvaW50cyIsInJhZGl1cyIsImFuZ2xlIiwiTWF0aCIsIlBJIiwicmFkaXVzMSIsInJhZGl1czIiLCJmbG9vciIsInJvdGF0aW9uIiwiaWNvbl9zcmMiLCJJY29uIiwib3BhY2l0eSIsInBhcnNlRmxvYXQiLCJpY29uX29wYWNpdHkiLCJzcmMiLCJzaXplIiwiaWNvbl9zaXplIiwic2NhbGUiLCJpY29uX3NjYWxlIiwic3ZnU3JjIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsImNsZWFyUmVjdCIsImZpbGxSZWN0IiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsInRyYW5zbGF0ZSIsImltZyIsIkltYWdlIiwiekluZGV4Iiwib25sb2FkIiwiZHJhd0ltYWdlIiwiaW1nU2l6ZSIsIlBob3RvIiwia2luZCIsInBob3RvS2luZCIsImNyb3AiLCJzaGFkb3ciLCJDaXJjbGUiLCJmZWF0dXJlIiwicHJvamVjdGlvbiIsImdldElkIiwic3R5bGVzQXJyYXkiLCJhcnJvd1NpemUiLCJhcnJvd1NpemVVbml0Iiwic2VnbWVudExlbmd0aCIsImFycm93c19taW56b29tIiwic3RhcnRfcGl4ZWwiLCJlbmRfcGl4ZWwiLCJGZWF0dXJlIiwiZ2V0IiwiZGVmYXVsdENvbG9yIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJkZWZhdWx0X2xhYmVsX2NvbG9yIiwibGFiZWxfb3V0bF9jb2xvciIsImxhYmVsX291dGxfd2lkdGgiLCJ1bml0IiwibGFiZWxfb3V0bF9ib3giLCJsYWJlbF9vZmZzZXQiLCJUZXh0IiwidGV4dCIsImZvbnQiLCJmb250X3dlaWdodCIsImZvbnRfc3R5bGUiLCJmb250X3NpemUiLCJmb250X2ZhbWlseSIsIm9mZnNldFgiLCJvZmZzZXRZIiwidGV4dEFsaWduIiwibGFiZWxfYWxpZ25faG9yIiwidGV4dEJhc2VsaW5lIiwibGFiZWxfYWxpZ25fdmVyIiwiZm9udF9jb2xvciIsImZvbnRfb3BhY2l0eSIsInB1c2giLCJTdHlsZSIsImltYWdlIiwibGluZV9hcnJvd3MiLCJnZXRHZW9tZXRyeSIsImdlb20iLCJQb2ludCIsImZvckVhY2hTZWdtZW50IiwibGluZV9hcnJvd3NfcmFkaXVzIiwic3RhcnQiLCJlbmQiLCJsaW5lX2Fycm93c19taW56b29tIiwibWFwIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsInNxcnQiLCJwb3ciLCJnZXRWaWV3IiwiZ2V0Wm9vbSIsImdlb21ldHJ5Iiwicm90YXRlV2l0aFZpZXciLCJhdGFuMiIsImxpbmVfYXJyb3dzX2JhY2siLCJlZGl0b3JDb25maWciLCJjb2xsZWN0IiwiZWRpdG9yX2NvbGxlY3QiLCJ1bmRlZmluZWQiLCJpY29uU3JjIiwiZWRpdG9yX2ljb24iLCJ2YXJzIiwiZWRpdG9yX3ZhcnMiLCJzb3J0IiwiZWRpdG9yX3NvcnQiLCJjNGciLCJtYXBzIiwiY29uc3RhbnQiLCIkIiwiY3NzIiwiZXh0ZW5kIiwiT1BFTiIsIkNMT1NFIiwiQ0xPU0VBQkxFIiwiRU5BQkxFRCIsIkRJU0FCTEVEIiwiSElERSIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIlJFRlJFU0giLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQURESVRJT05BTFBBTkVMIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJOT05FIiwialF1ZXJ5IiwiY3NzQ29uc3RhbnRzIiwiY29udHJvbCIsIlpvb21sZXZlbCIsIm9wdGlvbnMiLCJlbGVtZW50IiwidXBkYXRlWm9vbWxldmVsIiwibWFwVmlldyIsImNvbnNvbGUiLCJ3YXJuIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkSFRNTCIsImlubmVySFRNTCIsIm9uIiwiQ29udHJvbCIsImNhbGwiLCJ0YXJnZXQiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRVbmlxdWVJZCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlR2VvSnNvblByb3BlcnR5IiwiaW5wdXQiLCJvdXRwdXQiLCJyZXBsYWNlIiwiZGVjb2RlR2VvSnNvblByb3BlcnR5Iiwic2V0VXJsUGFyYW0iLCJwYXJhbSIsIm9wdF9nZXRLZXkiLCJvcHRfZXhlY3V0ZSIsImxpbmsiLCJzZWFyY2hQYXJhbSIsInBhcmFtUmVwbGFjZWQiLCJpIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImhhc2giLCJzZWFyY2giLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwia2V5Iiwib2Zmc2V0Iiwib3JpZ2luU3RyaW5nIiwiZ2V0VXJsUGFyYW0iLCJyZWdFeCIsInN1YnN0cmluZyIsIlJlZ0V4cCIsImV4ZWMiLCJkZWx0YUVuY29kZSIsImFycklucHV0IiwiYXJyT3V0cHV0IiwibGVuZ3RoIiwiYSIsImIiLCJkZWx0YURlY29kZSIsImlzTmFOIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJhcnJIb29rRnVuY3Rpb25zIiwicGFyYW1ldGVycyIsImoiLCJoZXgiLCJvcHRfb3BhY2l0eSIsIm9wdF9hcnJheSIsImJpZ2ludCIsInIiLCJnIiwicmVkdWNlU3R5bGUiLCJzdHlsZUlkIiwicmVkdWNlZFN0eWxlIiwibG9jYXRpb25TdHlsZXMiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwic2V0V2lkdGgiLCJtZWFzdXJlR2VvbWV0cnkiLCJvcHRfZm9yY2VMaW5lTWVhc3VyZSIsIm9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlIiwic3BoZXJlIiwiY29vcmRpbmF0ZXMiLCJjb29yZDEiLCJjb29yZDIiLCJyZXN1bHQiLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImdldENvb3JkaW5hdGVzIiwicHJvaiIsInRyYW5zZm9ybSIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsInRvRml4ZWQiLCJodG1sVmFsdWUiLCJhYnMiLCJnZXRBcmVhIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwiZWRnZUNvb3JkaW5hdGUiLCJnZXRFeHRlbnRGb3JHZW9tZXRyaWVzIiwiYXJyR2VvbWV0cmllcyIsImV4dGVudFNvdXJjZSIsInNvdXJjZSIsIlZlY3RvciIsImFkZEZlYXR1cmVzIiwiZ2V0RXh0ZW50IiwiRXh0ZW50IiwiZml0VG9FeHRlbnRzIiwiZXh0ZW50cyIsIm9wdF9wYWRkaW5nIiwib3B0X2FuaW1hdGlvbkR1cmF0aW9uIiwidmlldyIsInBhZGRpbmciLCJleHRlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImZpdFRvRXh0ZW50Iiwib3B0X21pblpvb20iLCJvcHRfbWF4Wm9vbSIsIm9wdF9taW5SZXNvbHV0aW9uIiwiZml0T3B0aW9ucyIsIm1pblJlc29sdXRpb24iLCJtaW5ab29tIiwibWF4Wm9vbSIsImFuaW1hdGUiLCJEYXRlIiwiZHVyYXRpb24iLCJyZXNvbHV0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsImZpdCIsImdldFNpemUiLCJlIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsInN0cklucHV0Iiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwibGF5ZXIiLCJmdW5jdGlvbk5hbWUiLCJ3aW5kb3ciLCJnZXRTdHlsZSIsInR5cGUiLCJldktleSIsImVkaXRvclZhcnMiLCJhdHRyIiwib2JqZWN0VG9BcnJheSIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJnZXRWZWN0b3JMYXllciIsImZuU3R5bGUiLCJnZXRDdXJyZW50U3ViZG9tYWluIiwiaHJlZiIsInJlZHJhd01hcFZpZXciLCJtYXBEYXRhIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJzY2FsZWxpbmUiLCJyZW1vdmVDb250cm9sIiwiY29udHJvbHMiLCJTY2FsZUxpbmUiLCJhZGRDb250cm9sIiwiYXBwZW5kIiwiem9vbWxldmVsIiwibW91c2Vwb3NpdGlvbiIsIk1vdXNlUG9zaXRpb24iLCJjb29yZGluYXRlRm9ybWF0IiwiY29vcmRpbmF0ZSIsInRvU3RyaW5nSERNUyIsImdldFZhbHVlIiwibG9jYWxTdG9yYWdlIiwic3RvcmVWYWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7O0FBRU8sSUFBTUEsZ0JBQWI7QUFDSSw4QkFBWUMsV0FBWixFQUF5QkMsVUFBekIsRUFBb0M7QUFBQTs7QUFDaEMsYUFBS0MsRUFBTCxHQUFpQkYsWUFBWSxJQUFaLENBQWpCO0FBQ0EsYUFBS0csS0FBTCxHQUFpQixLQUFLQyxnQkFBTCxDQUFzQkosV0FBdEIs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bEIsQ0FBNkI1WCxjQUFjMFgsUUFBZCxDQUF1QkksU0FBcEQ7QUFDRDs7QUFFRCxVQUFJZCxRQUFRZSxhQUFaLEVBQTJCO0FBQ3pCL1gsc0JBQWNtQyxHQUFkLENBQWtCc1YsYUFBbEIsQ0FBZ0N6WCxjQUFjMFgsUUFBZCxDQUF1QkssYUFBdkQ7QUFDQS9YLHNCQUFjMFgsUUFBZCxDQUF1QkssYUFBdkIsR0FBdUMsSUFBSXpjLEdBQUcyUixPQUFILENBQVcrSyxhQUFmLENBQTZCO0FBQ2xFNVksc0JBQVksV0FEc0Q7QUFFbEU2WSw0QkFBa0IzYyxHQUFHNGMsVUFBSCxDQUFjQyxZQUZrQztBQUdsRXBLLGtCQUFRd0osNkJBSDBEO0FBSWxFN0oseUJBQWU7QUFKbUQsU0FBN0IsQ0FBdkM7QUFNQTFOLHNCQUFjbUMsR0FBZCxDQUFrQnlWLFVBQWxCLENBQTZCNVgsY0FBYzBYLFFBQWQsQ0FBdUJLLGFBQXBEO0FBQ0Q7QUFDRixLQWgzQnVDO0FBaTNCeENLLGNBQVUsa0JBQVVySSxHQUFWLEVBQWU7QUFDckIsYUFBT3NJLGFBQWF0SSxHQUFiLEtBQXFCLEVBQTVCO0FBQ0gsS0FuM0J1QztBQW8zQnhDdUksZ0JBQVksb0JBQVV2SSxHQUFWLEVBQWUvVCxLQUFmLEVBQXNCO0FBQ2hDcWMsbUJBQWF0SSxHQUFiLElBQW9CL1QsS0FBcEIsQ0FEZ0MsQ0FDTDtBQUM1QjtBQXQzQnVDLEdBQXpCLENBQWpCO0FBeTNCRCxDQS8zQkEsRUErM0JDK1EsTUEvM0JELEVBKzNCUyxLQUFLeEosR0EvM0JkLENBQUQ7O0FBaTRCTyxJQUFJOUgsUUFBUSxLQUFLOEgsR0FBTCxDQUFTQyxJQUFULENBQWMvSCxLQUExQixDIiwiZmlsZSI6ImM0Zy1sb2NhdGlvbnN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1sb2NhdGlvbnN0eWxlLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNjRiYjAyZGM1YzNlOTBiZDk3IiwiaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z0xvY2F0aW9uU3R5bGV7XG4gICAgY29uc3RydWN0b3IobG9jU3R5bGVBcnIsIGNvbnRyb2xsZXIpe1xuICAgICAgICB0aGlzLmlkICAgICAgICA9IGxvY1N0eWxlQXJyWydpZCddO1xuICAgICAgICB0aGlzLnN0eWxlICAgICA9IHRoaXMuZ2V0U3R5bGVGdW5jdGlvbihsb2NTdHlsZUFycik7XG4gICAgICAgIHRoaXMuZWRpdG9yICAgID0gdGhpcy5nZXRTdHlsZUVkaXRvckNvbmZpZyhsb2NTdHlsZUFycik7XG4gICAgICAgIHRoaXMubmFtZSAgICAgID0gbG9jU3R5bGVBcnJbJ25hbWUnXTtcbiAgICAgICAgdGhpcy50b29sdGlwICAgPSBsb2NTdHlsZUFyclsndG9vbHRpcCddO1xuICAgICAgICB0aGlzLmxhYmVsICAgICA9IGxvY1N0eWxlQXJyWydsYWJlbCddO1xuICAgICAgICB0aGlzLm1pbnpvb20gICA9IGxvY1N0eWxlQXJyWydtaW56b29tJ107XG4gICAgICAgIHRoaXMubWF4em9vbSAgID0gbG9jU3R5bGVBcnJbJ21heHpvb20nXTtcbiAgICAgICAgdGhpcy5mblN0eWxlRnVuY3Rpb24gPSBsb2NTdHlsZUFyclsnc3R5bGVfZnVuY3Rpb25fanMnXTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyPSBjb250cm9sbGVyO1xuICAgICAgICB0aGlzLmxvY1N0eWxlQXJyID0gbG9jU3R5bGVBcnI7XG4gICAgfVxuXG4gICAgZ2V0U3R5bGVGdW5jdGlvbihzdHlsZURhdGEpIHtcbiAgICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgICBzdHlsZUZ1bmN0aW9uLFxuICAgICAgICAgICAgaW1hZ2VTdHlsZSxcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgZmlsbFN0eWxlLFxuICAgICAgICAgICAgdGV4dFN0eWxlLFxuICAgICAgICAgICAgdGV4dFN0eWxlT3V0bGluZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRGaWxsLFxuICAgICAgICAgICAgYmFja2dyb3VuZFN0cm9rZTtcblxuICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBnZW5lcmFsXG4gICAgICAgIHN0cm9rZVN0eWxlID0gbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICBjb2xvcjogdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvciwgc3R5bGVEYXRhLnN0cm9rZW9wYWNpdHkpLFxuICAgICAgICAgICAgd2lkdGg6IHBhcnNlSW50KHN0eWxlRGF0YS5zdHJva2V3aWR0aC52YWx1ZSwgMTApXG4gICAgICAgIH0pO1xuICAgICAgICBmaWxsU3R5bGUgPSBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICBjb2xvcjogdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3IsIHN0eWxlRGF0YS5maWxsb3BhY2l0eSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW1hZ2VcbiAgICAgICAgc3dpdGNoIChzdHlsZURhdGEuc3R5bGV0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDQsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCAxMCxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IE1hdGguUEkgLyA0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdGFyJzpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMTogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCAxMCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMjogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSA/IE1hdGguZmxvb3Ioc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSAqIDAuNSkgOiA0LFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDUsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiA0LFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgMTAsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiBNYXRoLlBJIC8gNFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3Jvc3MnOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDQsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCAxMCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMjogMCxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlJlZ3VsYXJTaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAzLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgMTAsXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBNYXRoLlBJIC8gNCxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29sX2ljb24nOiAvLyBmYWxsdGhyb3VnaFxuICAgICAgICAgICAgY2FzZSAnY3VzdF9pY29uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlRGF0YS5pY29uX3NyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5JY29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBwYXJzZUZsb2F0KHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUsIDEwKSAvIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHN0eWxlRGF0YS5pY29uX3NyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBbcGFyc2VJbnQoc3R5bGVEYXRhLmljb25fc2l6ZVswXSwgMTApLCBwYXJzZUludChzdHlsZURhdGEuaWNvbl9zaXplWzFdLCAxMCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBwYXJzZUZsb2F0KHN0eWxlRGF0YS5pY29uX3NjYWxlLCAxMCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2N1c3RfaWNvbl9zdmcnOlxuICAgICAgICAgICAgICAgICAgICBpZihzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5pY29uX3NjYWxlICYmIHN0eWxlRGF0YS5pY29uX3NpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gKHN0eWxlRGF0YS5pY29uX3NpemVbMF0qc3R5bGVEYXRhLmljb25fc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IChzdHlsZURhdGEuaWNvbl9zaXplWzFdKnN0eWxlRGF0YS5pY29uX3NjYWxlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0cm9rZXdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEuc3Ryb2tld2lkdGggJiYgc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tld2lkdGggPSBzdHlsZURhdGEuc3Ryb2tld2lkdGgudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggID0gd2lkdGgrKDIqc3Ryb2tld2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCsoMipzdHJva2V3aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEuZmlsbGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yLCBzdHlsZURhdGEuZmlsbG9wYWNpdHkudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Ryb2tld2lkdGggJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvciwgc3R5bGVEYXRhLnN0cm9rZW9wYWNpdHkudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBzdHlsZURhdGEuc3Ryb2tld2lkdGgudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUgJiYgKHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUgPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGN0eC5nbG9iYWxBbHBoYSA9IChzdHlsZURhdGEuaWNvbl9vcGFjaXR5LnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuekluZGV4ID0gMTAwOyAvL1Rlc3RcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBzdHJva2V3aWR0aCwgc3Ryb2tld2lkdGgsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLkljb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogY2FudmFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1NpemU6IFtjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRdLyosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogKHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUgLyAxMDApKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bob3RvJyA6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5QaG90byh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IHN0eWxlRGF0YS5waG90b0tpbmQsXG4gICAgICAgICAgICAgICAgICAgIGNyb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHBhcnNlRmxvYXQoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSwgMTApIC8gMTAwLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHBhcnNlRmxvYXQoc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSwxMCksXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBzdHlsZURhdGEuaWNvbl9zcmNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BvaW50JzpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCA3XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWlsZCBmdW5jdGlvblxuICAgICAgICBzdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24gKGZlYXR1cmUsIHByb2plY3Rpb24sIGdldElkKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVzQXJyYXksXG4gICAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgICAgYXJyb3dTaXplLFxuICAgICAgICAgICAgICAgIGFycm93U2l6ZVVuaXQsXG4gICAgICAgICAgICAgICAgc2VnbWVudExlbmd0aCxcbiAgICAgICAgICAgICAgICBhcnJvd3NfbWluem9vbSxcbiAgICAgICAgICAgICAgICBzdGFydF9waXhlbCxcbiAgICAgICAgICAgICAgICBlbmRfcGl4ZWw7XG5cbiAgICAgICAgICAgIGlmIChnZXRJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZURhdGEuaWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYSBmZWF0dXJlLnN0eWxlRnVuY3Rpb25cbiAgICAgICAgICAgIGlmICghKGZlYXR1cmUgaW5zdGFuY2VvZiBvbC5GZWF0dXJlKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb24gPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIGZlYXR1cmUgPSB0aGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHlsZXNBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoZmVhdHVyZSAmJiB0eXBlb2YgZmVhdHVyZS5nZXQgPT09ICdmdW5jdGlvbicgJiYgZmVhdHVyZS5nZXQoJ2xhYmVsJykpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGZlYXR1cmUuZ2V0KCdsYWJlbCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsZURhdGEubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHN0eWxlRGF0YS5sYWJlbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkZWZhdWx0Q29sb3IgPSBzZWxmLmNvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmRlZmF1bHRfbGFiZWxfY29sb3I7XG4gICAgICAgICAgICAvLyBsYWJlbFxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlRGF0YS5sYWJlbF9vdXRsX2NvbG9yICYmIHN0eWxlRGF0YS5sYWJlbF9vdXRsX3dpZHRoLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZU91dGxpbmUgPSBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmxhYmVsX291dGxfY29sb3IgfHwgZGVmYXVsdENvbG9yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBhcnNlSW50KHN0eWxlRGF0YS5sYWJlbF9vdXRsX3dpZHRoLnZhbHVlLCAxMClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHN0eWxlRGF0YS5sYWJlbF9vdXRsX2JveCA9PT0gXCIxXCIpe1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRGaWxsID0gbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEubGFiZWxfb3V0bF9jb2xvciB8fCBkZWZhdWx0Q29sb3IsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3R5bGVEYXRhLmxhYmVsX29mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGEubGFiZWxfb2Zmc2V0ID0gWzAsIDAsIFwicHhcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHN0eWxlRGF0YS5sYWJlbF9vdXRsX2JveCA9PT0gXCIxXCIpe1xuICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlID0gbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgZm9udDogKHN0eWxlRGF0YS5mb250X3dlaWdodCB8fCAnbm9ybWFsJykgKyAnICcgKyAoc3R5bGVEYXRhLmZvbnRfc3R5bGUgfHwgJ25vcm1hbCcpICsgJyAnICsgKHN0eWxlRGF0YS5mb250X3NpemUgfHwgJzEzJykgKyAncHggJyArIChzdHlsZURhdGEuZm9udF9mYW1pbHkgfHwgJ3NhbnMtc2VyaWYnKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NhbGU6IHBhcnNlSW50KHN0eWxlRGF0YS5mb250X3NpemUgfHwgMCwgMTApIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogcGFyc2VJbnQoc3R5bGVEYXRhLmxhYmVsX29mZnNldFswXSB8fCAwLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IHBhcnNlSW50KHN0eWxlRGF0YS5sYWJlbF9vZmZzZXRbMV0gfHwgMCwgMTApLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHN0eWxlRGF0YS5sYWJlbF9hbGlnbl9ob3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHRCYXNlbGluZTogc3R5bGVEYXRhLmxhYmVsX2FsaWduX3ZlcixcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZvbnRfY29sb3IgfHwgZGVmYXVsdENvbG9yLCBzdHlsZURhdGEuZm9udF9vcGFjaXR5KVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEZpbGw6IGJhY2tncm91bmRGaWxsLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU3Ryb2tlOiB0ZXh0U3R5bGVPdXRsaW5lXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHRleHRTdHlsZSA9IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IChzdHlsZURhdGEuZm9udF93ZWlnaHQgfHwgJ25vcm1hbCcpICsgJyAnICsgKHN0eWxlRGF0YS5mb250X3N0eWxlIHx8ICdub3JtYWwnKSArICcgJyArIChzdHlsZURhdGEuZm9udF9zaXplIHx8ICcxMycpICsgJ3B4ICcgKyAoc3R5bGVEYXRhLmZvbnRfZmFtaWx5IHx8ICdzYW5zLXNlcmlmJyksXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjYWxlOiBwYXJzZUludChzdHlsZURhdGEuZm9udF9zaXplIHx8IDAsIDEwKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IHBhcnNlSW50KHN0eWxlRGF0YS5sYWJlbF9vZmZzZXRbMF0gfHwgMCwgMTApLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiBwYXJzZUludChzdHlsZURhdGEubGFiZWxfb2Zmc2V0WzFdIHx8IDAsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBzdHlsZURhdGEubGFiZWxfYWxpZ25faG9yLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QmFzZWxpbmU6IHN0eWxlRGF0YS5sYWJlbF9hbGlnbl92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5mb250X2NvbG9yIHx8IGRlZmF1bHRDb2xvciwgc3R5bGVEYXRhLmZvbnRfb3BhY2l0eSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogdGV4dFN0eWxlT3V0bGluZVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBzdHlsZS1vYmplY3RcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcyBjaGVjayBiZWNhdXNlIHRleHRTdHlsZSBpcyBhIHZhciBhY2Nlc3NpYmxlIGZyb20gY2xvc3VyZSBhbmQgd2lsbCBiZSBzZXQgZXZlbiBpZiBubyBsYWJlbCBpcyBzZXRcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0FycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBhZGQgbGluZS1hcnJvd3NcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdHlsZURhdGEubGluZV9hcnJvd3NcbiAgICAgICAgICAgICAgICAmJiBmZWF0dXJlXG4gICAgICAgICAgICAgICAgJiYgKHR5cGVvZiBmZWF0dXJlLmdldEdlb21ldHJ5ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICYmICEoZmVhdHVyZS5nZXRHZW9tZXRyeSgpIGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2ludClcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmZvckVhY2hTZWdtZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBhcnJvd1NpemUgPSAoc3R5bGVEYXRhLmxpbmVfYXJyb3dzX3JhZGl1cykgPyAocGFyc2VJbnQoc3R5bGVEYXRhLmxpbmVfYXJyb3dzX3JhZGl1cy52YWx1ZSwgMTApICogMikgOiAwO1xuICAgICAgICAgICAgICAgIGFycm93U2l6ZVVuaXQgPSBhcnJvd1NpemUgKyBzdHlsZURhdGEubGluZV9hcnJvd3NfcmFkaXVzLnVuaXQ7XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmZvckVhY2hTZWdtZW50KGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbWluem9vbSBpcyAwICh1bmxpbWl0ZWQpLCBoaWRlIGFycm93cyBpZiB0aGV5IGFyZSBiaWdnZXIgdGhhbiB0aGUgc2VnbWVudFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3NfbWluem9vbSA9IHBhcnNlSW50KHN0eWxlRGF0YS5saW5lX2Fycm93c19taW56b29tLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3BpeGVsID0gc2VsZi5jb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUoc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBlbmRfcGl4ZWwgPSBzZWxmLmNvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZShlbmQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBldWNsaWQtZGlzdGFuY2UgYmV0d2VlbiBzdGFydCBhbmQgZW5kXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRMZW5ndGggPSBNYXRoLnNxcnQoTWF0aC5wb3coZW5kX3BpeGVsWzFdIC0gc3RhcnRfcGl4ZWxbMV0sIDIpICsgTWF0aC5wb3coZW5kX3BpeGVsWzBdIC0gc3RhcnRfcGl4ZWxbMF0sIDIpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXJyb3dzX21pbnpvb20gPCAwICYmIGFycm93U2l6ZSArIHBhcnNlSW50KHN0eWxlRGF0YS5zdHJva2V3aWR0aC52YWx1ZSwgMTApIDwgc2VnbWVudExlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IChhcnJvd3NfbWluem9vbSA+PSAwICYmIHNlbGYuY29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpID49IGFycm93c19taW56b29tKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvcndhcmQgYXJyb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNBcnJheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChlbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuGQs1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogYXJyb3dTaXplVW5pdCArIFwiIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRZOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVdpdGhWaWV3OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IC1NYXRoLmF0YW4yKChlbmRbMV0gLSBzdGFydFsxXSksIChlbmRbMF0gLSBzdGFydFswXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrd2FyZCBhcnJvd3MgKGlmIHdhbnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZURhdGEubGluZV9hcnJvd3NfYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc0FycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQoc3RhcnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi4ZCzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogYXJyb3dTaXplVW5pdCArIFwiIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVXaXRoVmlldzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbjogLU1hdGguYXRhbjIoKHN0YXJ0WzFdIC0gZW5kWzFdKSwgKHN0YXJ0WzBdIC0gZW5kWzBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdHlsZXNBcnJheTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc3R5bGVGdW5jdGlvbjtcbiAgICB9IC8vIGVuZCBvZiBcImdldFN0eWxlRnVuY3Rpb24oKVwiXG5cblxuICAgIGdldFN0eWxlRWRpdG9yQ29uZmlnKHN0eWxlRGF0YSkge1xuICAgICAgICB2YXIgZWRpdG9yQ29uZmlnO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlZGl0b3ItY29uZmlnXG4gICAgICAgIGVkaXRvckNvbmZpZyA9IHt9O1xuICAgICAgICBlZGl0b3JDb25maWcuY29sbGVjdCA9IHN0eWxlRGF0YS5lZGl0b3JfY29sbGVjdCB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGVkaXRvckNvbmZpZy5pY29uU3JjID0gc3R5bGVEYXRhLmVkaXRvcl9pY29uIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgZWRpdG9yQ29uZmlnLnZhcnMgPSBzdHlsZURhdGEuZWRpdG9yX3ZhcnMgfHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGVkaXRvckNvbmZpZy5zb3J0ID0gc3R5bGVEYXRhLmVkaXRvcl9zb3J0IHx8IGZhbHNlO1xuICAgICAgICBpZiAoZWRpdG9yQ29uZmlnLnNvcnQpIHtcbiAgICAgICAgICAgIGVkaXRvckNvbmZpZy5zb3J0ID0gcGFyc2VJbnQoZWRpdG9yQ29uZmlnLnNvcnQsIDEwKSB8fCBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlZGl0b3JDb25maWc7XG4gICAgfS8vIGVuZCBvZiBcImdldFN0eWxlRWRpdG9yQ29uZmlnKClcIlxuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWxvY2F0aW9uc3R5bGUuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1pvb21sZXZlbH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWxcIlxuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIGM0Zy1NYXBzIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAqL1xuICBjNGcubWFwcy51dGlscyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLnV0aWxzLCB7XG4gICAgLyoqXG4gICAgICogIENvbnZlcnRzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG8gdXBwZXJjYXNlLCBsZWF2aW5nIHRoZSByZW1haW5pbmcgc3RyaW5nIHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqICBAcGFyYW0gICAge3N0cmluZ30gICAgdGhlIHN0cmluZyB0byBjYXBpdGFsaXplXG4gICAgICpcbiAgICAgKiAgQHJldHVybiAgIHtzdHJpbmd9ICAgIHRoZSBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkLlxuICAgICAqXG4gICAgICogVGhlIGlkIGlzIDkgY2hhcmFjdGVycyBsb25nIGFuZCBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgVGhlIGdlbmVyYXRlZCBpZC5cbiAgICAgKi9cbiAgICBnZXRVbmlxdWVJZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgICAgIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gICAgICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIG5vdCBicmVhayB0aGUgQ29kZS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFwgLT4gXFxcXDtcbiAgICAgKiAgIFwiIC0+ICcnO1xuICAgICAqICAgw4QgLT4gJkF1bWw7XG4gICAgICogICDDpCAtPiAmYXVtbDtcbiAgICAgKiAgIMOWIC0+ICZPdW1sO1xuICAgICAqICAgw7YgLT4gJm91bWw7XG4gICAgICogICDDnCAtPiAmVXVtbDtcbiAgICAgKiAgIMO8IC0+ICZ1dW1sO1xuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBlbmNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFwvZywgJ1xcXFxcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXFwiL2csICdcXCdcXCcnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OEL2csICcmQXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OkL2csICcmYXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OWL2csICcmT3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O2L2csICcmb3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OcL2csICcmVXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O8L2csICcmdXVtbDsnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBlbmNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgYmUgZGlzcGxheWVkIGNvcnJlY3RseS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFxcXCAgICAgLT4gXFw7XG4gICAgICogICAnJyAgICAgLT4gXCI7XG4gICAgICogICAmQXVtbDsgLT4gw4RcbiAgICAgKiAgICZhdW1sOyAtPiDDpFxuICAgICAqICAgJk91bWw7IC0+IMOWXG4gICAgICogICAmb3VtbDsgLT4gw7ZcbiAgICAgKiAgICZVdW1sOyAtPiDDnFxuICAgICAqICAgJnV1bWw7IC0+IMO8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFxcXFxcL2csICdcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXCdcXCcvZywgJ1xcXCInXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZBdW1sOy9nLCAnw4QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZhdW1sOy9nLCAnw6QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZPdW1sOy9nLCAnw5YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZvdW1sOy9nLCAnw7YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZVdW1sOy9nLCAnw5w7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mdXVtbDsvZywgJ8O8J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZGVjb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciByZXBsYWNlIGFuIFVSTC1wYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBgcGFyYW1gLFxuICAgICAqIHdpbGwgYmUgYXBwbGllZCBhcyBcImhhc2gtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHMjcGFyYW1cbiAgICAgKiBOb3RlLCB0aGF0IGFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiB3aGVyZWFzIGV4aXN0aW5nIFwiR0VULXBhcmFtZXRlcnNcIiBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBzZXQsIGl0IHdpbGwgYmUgYXBwbGllZCBhcyBcIkdFVC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcz9vcHRfZ2V0S2V5PXBhcmFtXG4gICAgICogSWYgdGhlIGtleSBkZXNjcmliZWQgYnkgYG9wdF9nZXRLZXlgIGlzIGFscmVhZHkgZXhpc3RpbmcsIGl0cyB2YWx1ZSB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGtleS12YWx1ZS1wYWlyIHdpbGwgYmUgYXBwZW5kZWQgYXBwcm9wcmlhdGx5LlxuICAgICAqIEFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9leGVjdXRlYCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG5ldyBsaW5rIGFzIGBzdHJpbmdgLFxuICAgICAqIG90aGVyd2lzZSB0aGUgXCJocmVmL2xvY2F0aW9uXCIgd2lsbCBiZSBjaGFuZ2VkIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLCB3aGljaCBjYW4gY2F1c2UgYSBwYWdlcmVsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgcGFyYW0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbnxzdHJpbmd9ICBvcHRfZ2V0S2V5ICAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICBvcHRfZXhlY3V0ZSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBzZXRVcmxQYXJhbTogZnVuY3Rpb24gKHBhcmFtLCBvcHRfZ2V0S2V5LCBvcHRfZXhlY3V0ZSkge1xuICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgc2VhcmNoUGFyYW0sXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsaW5rID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICAvLyB1c2UgaGFzaC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gbG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgR0VULXBhcmFtZXRlclxuICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGFscmVhZHkgc2VhcmNoLXBhcmFtZXRlcnNcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgb3B0X2dldEtleSA9IG9wdF9nZXRLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAvLyByZXBsYWNlIHBhcmFtZXRlciBpZiBhbHJlYWR5IGV4aXN0ZW50XG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcbiAgICAgICAgICAgICAgLyhbXj1cXD9cXCZdKyk9KFteJl0rKS9naSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG9wdF9nZXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBhcHBlbmQgYXMgbmV3IHBhcmFtZXRlclxuICAgICAgICAgIGlmICghcGFyYW1SZXBsYWNlZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW0gKz0gJyYnICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG9ubHkgc2VhcmNoLXBhcmFtZXRlciBpbiB0aGUgVVJMXG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSAnPycgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uc2VhcmNoID0gc2VhcmNoUGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBzZWFyY2hQYXJhbSArIGxvY2F0aW9uLmhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0sIC8vIGVuZCBvZiBzZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIG9yIGhhc2ggVVJMLXBhcmFtZXRlciBhcyBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGhhc2gtcGFyYW1ldGVyIG9mIHRoZSBVUkwgaXMgcmV0dXJuZWQsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgc2VhcmNoIGZvciBhIEdFVC1wYXJhbWV0ZXIgYW5kIHJldHVybiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciBpcyBub3QgZXhpc3RlbnQsIG9yIGVtcHR5LCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8c3RyaW5nfSAgb3B0X2dldEtleSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvdW5kIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKG9wdF9nZXRLZXkpIHtcbiAgICAgIHZhciBwYXJhbSxcbiAgICAgICAgICByZWdFeDtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIHBhcmFtID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIHBhcmFtID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnRXggPSBuZXcgUmVnRXhwKCdbXFw/XFwmXScgKyBvcHRfZ2V0S2V5ICsgJz0oW14mXSspJywgJ2knKTtcbiAgICAgICAgICBwYXJhbSA9IHJlZ0V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSwgLy8gZW5kIG9mIGdldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIERlbHRhLWVuY29kZSBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYXJyYXkgd2lsbCBiZSBzb3J0ZWQgKGxvd2VzdCB0byBoaWdoZXN0KVxuICAgICAqIGJlZm9yZSBlbmNvZGluZy5cbiAgICAgKlxuICAgICAqIFNvIGFmdGVyIHRoZSBlbmNvZGluZyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAqIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGhlIHNldCBhbmQgZWFjaCBmb2xsb3dpbmcgbnVtYmVyIGp1c3RcbiAgICAgKiByZXByZXNlbnRzIHRoZSBvZmZzZXQgdG8gaXRzIHByZXZpb3VzIG5laWdoYm9yLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBtb3N0bHkgZWZmaWNpZW50IGZvciBoaWdoIG51bWJlcnMsIHRoYXQgYXJlIFwiY2xvc2UgdG8gZWFjaCBvdGhlclwiLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiAgIFsxMzM3LCAxMSwgMTAxLCAxMjMsIDk2LCA2OSwgNDIsIDQyXVxuICAgICAqICAgd2lsbCBiZSBzb3J0ZWRcbiAgICAgKiAgIFsxMSwgNDIsIDQyLCA2OSwgOTYsIDEwMSwgMTIzLCAxMzM3XVxuICAgICAqICAgYW5kIGVuY29kZWQgdG9cbiAgICAgKiAgIFsxMSwgMzEsIDAsIDI3LCAyNywgNSwgMjIsIDEyMTRdXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YUVuY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKGFycklucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGFycklucHV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSk7XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gYXJySW5wdXRbMF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gYXJySW5wdXRbaV0gLSBhcnJJbnB1dFtpIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFFbmNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgZGVsdGEtZW5jb2RlZCBhcnJheS5cbiAgICAgKiBTZWUgYGRlbHRhRW5jb2RlYCBmdW5jdGlvbiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRGVjb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gcGFyc2VJbnQoYXJySW5wdXRbMF0sIDEwKTtcbiAgICAgIGlmIChpc05hTihhcnJJbnB1dFswXSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IHBhcnNlSW50KGFycklucHV0W2ldLCAxMCkgKyBhcnJPdXRwdXRbaSAtIDFdO1xuICAgICAgICBpZiAoaXNOYU4oYXJyT3V0cHV0W2ldKSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRGVjb2RlKClcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBjYWxsIGZ1bmN0aW9ucyBpbiBgYXJySG9va0Z1bmN0aW9uc2Agd2l0aCBnaXZlbiBgcGFyYW1ldGVyc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8ZnVuY3Rpb24+fSAgIGFyckhvb2tGdW5jdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7bWl4ZWR9ICAgICAgICAgICAgIHBhcmFtZXRlcnMgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjYWxsSG9va0Z1bmN0aW9uczogZnVuY3Rpb24gKGFyckhvb2tGdW5jdGlvbnMsIHBhcmFtZXRlcnMpIHtcbiAgICAgIHZhciBqO1xuXG4gICAgICBpZiAoYXJySG9va0Z1bmN0aW9ucyAmJiBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyckhvb2tGdW5jdGlvbnNbal0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyckhvb2tGdW5jdGlvbnNbal0ocGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiY2FsbEhvb2tGdW5jdGlvbnMoKVwiXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgaGV4LWZvcm1hdGVkIGNvbG9yIHZhbHVlIGludG8gcmdiYSgpLWZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgaGV4ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIG9wdF9vcGFjaXR5ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5OiBmdW5jdGlvbiAoaGV4LCBvcHRfb3BhY2l0eSwgb3B0X2FycmF5KSB7XG5cbiAgICAgIHZhciBiaWdpbnQsIHIsIGcsIGIsIGE7XG5cbiAgICAgIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgIG9wdF9vcGFjaXR5LnZhbHVlID0gcGFyc2VJbnQob3B0X29wYWNpdHkudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgdHlwZW9mIG9wdF9vcGFjaXR5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdF9vcGFjaXR5ID09PSAnb2JqZWN0JyAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gb3B0X29wYWNpdHkudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICBiID0gYmlnaW50ICYgMjU1O1xuICAgICAgYSA9IG9wdF9vcGFjaXR5ID8gKG9wdF9vcGFjaXR5IC8gMTAwKSA6IDE7XG4gICAgICBpZihvcHRfYXJyYXkpe1xuICAgICAgICByZXR1cm4gW3IsZyxiLGFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgYSBkZWZpbmVkIHN0eWxlLCB0byBhIHNpbXBsZXIgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSByZWR1Y2VkIHN0eWxlIGlzIHRoZSBmaXJzdCBzdHlsZSBvZiB0aGUgZGVmaW5lZCBzdHlsZXNldCxcbiAgICAgKiB3aXRoIGEgMXB4IHRoaWNrIHN0cm9rZSBhbmQgYSBjaXJjbGUgd2l0aCBhIDVweCByYWRpdXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYWRkaXRpb25hbCBnZW9tZXRyaWVzIHdpdGggYSBtYWluLWdlb21ldHJ5LFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGRlZmluZSBhIHdob2xlIG5ldyBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ8c3RyaW5nfSAgICAgICAgICAgc3R5bGVJZCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG9sLnN0eWxlLlN0eWxlPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVkdWNlU3R5bGU6IGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICB2YXIgc3R5bGUsXG4gICAgICAgICAgcmVkdWNlZFN0eWxlLFxuICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2VTdHlsZTtcblxuICAgICAgaWYgKCFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXSB8fCAhYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IGM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKClbMF07XG5cbiAgICAgIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgICBzdHJva2VTdHlsZS5zZXRXaWR0aCgxKTtcblxuICAgICAgcmVkdWNlZFN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdGV4dDogc3R5bGUuZ2V0VGV4dCgpLFxuICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3JlZHVjZWRTdHlsZV07XG4gICAgfSwgLy8gZW5kIG9mIFwicmVkdWNlU3R5bGVcIlxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZ2l2ZW4gZ2VvbWV0cnkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2VvbWV0cnkgaXMgYSBgTGluZVN0cmluZ2AgdGhlIGZ1bmN0aW9uIHdpbGwgbWVhc3VyZSBpdHMgbGVuZ3RoLFxuICAgICAqIGlzIGl0IGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSB0aGUgYWNyZWFnZSxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYDBgLlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIGBvcHRfZm9yY2VMaW5lTWVhc3VyZWAgcGFyYW1ldGVyIGlzIGB0cnVlYFxuICAgICAqIGFuZCB0aGUgZ2VvbWV0cnkgaXMgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIGl0cyBwZXJpbWV0ZXIgaW5zdGVhZFxuICAgICAqIG9mIGl0cyBhY3JlYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLmdlb20uTGluZVN0cmluZ3xvbC5nZW9tLlBvbHlnb259ICAgZ2VvbWV0cnkgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICBvcHRfZm9yY2VMaW5lTWVhc3VyZSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PHN0cmluZz58bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtZWFzdXJlR2VvbWV0cnk6IGZ1bmN0aW9uIChnZW9tZXRyeSwgb3B0X2ZvcmNlTGluZU1lYXN1cmUsIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgc3BoZXJlLFxuICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIGNvb3JkMSxcbiAgICAgICAgICBjb29yZDIsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL3NwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nIHx8IChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbiAmJiBvcHRfZm9yY2VMaW5lTWVhc3VyZSkpIHtcblxuICAgICAgICBjb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgY29vcmQxID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgY29vcmQyID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaSArIDFdLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIHZhbHVlICs9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShjb29yZDEsIGNvb3JkMiwgNjM3ODEzNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAvL2dlb21ldHJ5ID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovKGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpO1xuICAgICAgICAvL2Nvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0TGluZWFyUmluZygwKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKG9sLnNwaGVyZS5nZXRBcmVhKGdlb21ldHJ5KSk7XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUgJiYgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YWx1ZSA9IE1hdGguUEkgKiBNYXRoLnNxcnQodmFsdWUpO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnJhd1ZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKCh2YWx1ZSAqIDEwMCkgLyAxMDApIC8gMTAwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBleHRlbnQgZm9yIGFuIGFycmF5IG9mIGdlb21ldHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG9sLmdlb20uc2ltcGxlR2VvbWV0cnk+fSAgYXJyR2VvbWV0cmllcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge29sLkV4dGVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzOiBmdW5jdGlvbiAoYXJyR2VvbWV0cmllcykge1xuICAgICAgdmFyIGV4dGVudFNvdXJjZTtcblxuICAgICAgaWYgKCFhcnJHZW9tZXRyaWVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR2VvbWV0cmllcyBtaXNzaW5nIGZvciBleHRlbnQgY2FsY3VsYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBleHRlbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgZXh0ZW50U291cmNlLmFkZEZlYXR1cmVzKGFyckdlb21ldHJpZXMpO1xuXG4gICAgICByZXR1cm4gZXh0ZW50U291cmNlLmdldEV4dGVudCgpIHx8IG9sLkV4dGVudChbMCwgMCwgMCwgMF0pO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzKClcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYXJyYXkgb2YgYGV4dGVudHNgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgIGV4dGVudHMgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50czogZnVuY3Rpb24gKGV4dGVudHMsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBpZiAoIWV4dGVudHMgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vZXh0ZW50ID0gb2wuZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgICAgIGZvciAoa2V5IGluIGV4dGVudHMpIHtcbiAgICAgICAgaWYgKGV4dGVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnQgPSBleHRlbnRzW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sLmV4dGVudC5leHRlbmQoZXh0ZW50LCBleHRlbnRzW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0VG9FeHRlbnQoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCA1LCAwLCAwLCAyKTtcblxuXG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50c1xuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBgZXh0ZW50YC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5FeHRlbnR9ICBleHRlbnQgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2FycmF5fSAgICAgIG9wdF9wYWRkaW5nICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9tYXhab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluUmVzb2x1dGlvbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudDogZnVuY3Rpb24gKGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uLCBvcHRfbWluWm9vbSwgb3B0X21heFpvb20sIG9wdF9taW5SZXNvbHV0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGZpdE9wdGlvbnM7XG5cbiAgICAgIGlmICghZXh0ZW50IHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBmaXRPcHRpb25zID0ge1xuICAgICAgICAncGFkZGluZyc6IG9wdF9wYWRkaW5nIHx8IFsyNSwgMjUsIDI1LCAyNV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRfbWluUmVzb2x1dGlvbiAmJiBvcHRfbWluUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5SZXNvbHV0aW9uID0gb3B0X21pblJlc29sdXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWluWm9vbSAmJiBvcHRfbWluWm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluWm9vbSA9IG9wdF9taW5ab29tO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21heFpvb20gJiYgb3B0X21heFpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1heFpvb20gPSBvcHRfbWF4Wm9vbTtcbiAgICAgIH1cblxuICAgICAgLy8gYW5pbWF0ZSB0aGUgXCJmaXR0aW5nXCIgd2hlbiBhIGR1cmF0aW9uIGlzIGdpdmVuIGFuZCBpdHMgZ3JlYXRlciB0aGFuIDBcbiAgICAgIGlmIChvcHRfYW5pbWF0aW9uRHVyYXRpb24gJiYgb3B0X2FuaW1hdGlvbkR1cmF0aW9uID4gMCkge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gbWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHNvdXJjZTogdmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSwge3BhZGRpbmc6IFsyNSwgMjUsIDI1LCAyNV19KTtcbiAgICAgICAgLy92aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCkpO1xuICAgICAgICAvL3ZpZXcuc2V0Wm9vbSh2aWV3LmdldFpvb20oKS0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnQoKVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcnVuIGFsbCBwbGFjZWhvbGRlciBmdW5jdGlvbnMgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIHN0cklucHV0ICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgICAgICAgICAgICAgIGZlYXR1cmUgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllciB8IHVuZGVmaW5lZH0gIG9wdF9sYXllciAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUFsbFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpcnN0IHR3byBwYXJhbWV0ZXJzIGFzIHRoZXkgd2lsbCBiZSB1c2VkIGJ5IGFsbCBwbGFjZWhvbGRlci1mdW5jdGlvbnNcbiAgICAgIC8vIC0+IGZvciBwZXJmb3JtYW5jZVxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7Rk5mdW5jdGlvbk5hbWV9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYHdpbmRvdy5mdW5jdGlvbk5hbWUoZmVhdHVyZSwgc3R5bGUpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICogU3R5bGUgd2lsbCBiZSB0YWtlbiBlaXRoZXIgZnJvbSB0aGUgZmVhdHVyZSwgb3IgdGhlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllcn0gIGxheWVyICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBsYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCAhbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHtGTihbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZnVuY3Rpb25OYW1lLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmdW5jdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHN0eWxlXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldFN0eWxlKCkgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYXllci5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2Z1bmN0aW9uTmFtZV0oZmVhdHVyZSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzLCBpbiBgc3RySW5wdXRgLCBmb3IgdmFyaWFibGVzIHNldCBieSB0aGUgZ2VvRWRpdG9yLlxuICAgICAqIFZhbGlkIHBsYWNlaG9sZGVycyBhcmU6IChba2V5XSByZXByZXNlbnRzIHRoZSBzdHJpbmduYW1lIG9mIHRoZSB2YXJpYWJsZXMga2V5KVxuICAgICAqICAgYCR7RUxba2V5XX1gICAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWTFtrZXldfWAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlLCBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgKiAgIGAke0VWW2tleV19YCAgID0+ICBWYWx1ZSBvZiB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWVltrZXldfWAgID0+ICBTYW1lIGFzIGAke0VWW2tleV19YFxuICAgICAqXG4gICAgICogSWYgbm8gYXBwcm9wcmlhdGUgdmFsdWUgY2FuIGJlIGZvdW5kIGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogaXQgd2lsbCBzaW1wbHkgYmUgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhFVj9bTFZdKShbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgZXZLZXksIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGhhcyBlZGl0b3JWYXJzXG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKSkge1xuICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBlZGl0b3JWYXIgd2l0aCBrZXkgPT0gZXZLZXlcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVkaXRvclZhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yVmFyc1tpXS5rZXkgPT09IGV2S2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0eXBlIGlzICdFVkwnIGRpc3BsYXkgbGFiZWwgb25seSBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRUwnIHx8ICh0eXBlID09PSAnRVZMJyAmJiBlZGl0b3JWYXJzW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7YXR0cn1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgZmVhdHVyZS5nZXQoYXR0cilgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgYXR0ciwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldChhdHRyKSB8fCAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoKVxuXG4gICAgb2JqZWN0VG9BcnJheTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmplY3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwgLy8gZW5kIG9mIG9iamVjdFRvQXJyYXkoKVxuXG4gICAgZ2V0VmVjdG9yTGF5ZXIoc291cmNlLCBzdHlsZSkge1xuICAgICAgICB2YXIgZm5TdHlsZTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3R5bGUgaXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm5TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBzdHlsZTogZm5TdHlsZVxuICAgICAgICB9KTtcbiAgICB9LC8vIGVuZCBvZiBcImdldFZlY3RvckxheWVyKClcIlxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHN1YmRvbWFpbiBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgaG9zdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgKn1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3ViZG9tYWluKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICByZWRyYXdNYXBWaWV3OiBmdW5jdGlvbiAobWFwQ29udHJvbGxlcikge1xuICAgICAgdmFyIG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICBtYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgbWFwQ29udHJvbGxlci5sZWZ0U2xpZGVFbGVtZW50cy5wdXNoKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgICAgaWYgKG1hcERhdGEuc2NhbGVsaW5lKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSA9IG5ldyBvbC5jb250cm9sLlNjYWxlTGluZSh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuXG4gICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IFpvb21sZXZlbCh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8ICcnO1xuICAgIH0sXG4gICAgc3RvcmVWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7IC8vIG9ubHkgc3RyaW5nc1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIHV0aWxzID0gdGhpcy5jNGcubWFwcy51dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==