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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-locationstyle-controller.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY2NGJiMDJkYzVjM2U5MGJkOTciLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbG9jYXRpb25zdHlsZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWxvY2F0aW9uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwibmFtZXMiOlsiQzRnTG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJwcm94eSIsIm1hcENvbnRyb2xsZXIiLCJvcHRpb25zIiwiYXJyTG9jU3R5bGVzIiwiYXJySWRzIiwib3B0X29wdGlvbnMiLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJzZWxmIiwiY291bnQiLCJtYWtlQWpheCIsInN0eWxlSWRzIiwiaW5kZXgiLCJqUXVlcnkiLCJhamF4IiwiZGF0YVR5cGUiLCJkYXRhIiwianNvbnAiLCJ1cmwiLCJhcGlfbG9jc3R5bGVfdXJsIiwiaWRzIiwiZG9uZSIsImkiLCJzdHlsZURhdGEiLCJzdWNjZXNzZnVsIiwibGVuZ3RoIiwiaWQiLCJDNGdMb2NhdGlvblN0eWxlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhbHdheXMiLCJqWGhyIiwic3RyU3RhdHVzIiwiY29tcGxldGVkIiwiJCIsInNwaW5uZXIiLCJlbGVtZW50IiwiaGFzQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJISURFIiwiaGlkZSIsImZhaWwiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImNvbnNvbGUiLCJ3YXJuIiwibiIsInNwbGljZSIsImxvY1N0eWxlQXJyIiwiY29udHJvbGxlciIsInN0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsImVkaXRvciIsImdldFN0eWxlRWRpdG9yQ29uZmlnIiwibmFtZSIsInRvb2x0aXAiLCJsYWJlbCIsIm1pbnpvb20iLCJtYXh6b29tIiwiZm5TdHlsZUZ1bmN0aW9uIiwic3R5bGVGdW5jdGlvbiIsImltYWdlU3R5bGUiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsInRleHRTdHlsZSIsInRleHRTdHlsZU91dGxpbmUiLCJiYWNrZ3JvdW5kRmlsbCIsImJhY2tncm91bmRTdHJva2UiLCJvbCIsIlN0cm9rZSIsImNvbG9yIiwidXRpbHMiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHJva2Vjb2xvciIsInN0cm9rZW9wYWNpdHkiLCJ3aWR0aCIsInBhcnNlSW50Iiwic3Ryb2tld2lkdGgiLCJ2YWx1ZSIsIkZpbGwiLCJmaWxsY29sb3IiLCJmaWxsb3BhY2l0eSIsInN0eWxldHlwZSIsIlJlZ3VsYXJTaGFwZSIsImZpbGwiLCJzdHJva2UiLCJwb2ludHMiLCJyYWRpdXMiLCJhbmdsZSIsIk1hdGgiLCJQSSIsInJhZGl1czEiLCJyYWRpdXMyIiwiZmxvb3IiLCJyb3RhdGlvbiIsImljb25fc3JjIiwiSWNvbiIsIm9wYWNpdHkiLCJwYXJzZUZsb2F0IiwiaWNvbl9vcGFjaXR5Iiwic3JjIiwic2l6ZSIsImljb25fc2l6ZSIsInNjYWxlIiwiaWNvbl9zY2FsZSIsInN2Z1NyYyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsImxpbmVXaWR0aCIsInN0cm9rZVJlY3QiLCJ0cmFuc2xhdGUiLCJpbWciLCJJbWFnZSIsInpJbmRleCIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImltZ1NpemUiLCJQaG90byIsImtpbmQiLCJwaG90b0tpbmQiLCJjcm9wIiwic2hhZG93IiwiQ2lyY2xlIiwiZmVhdHVyZSIsInByb2plY3Rpb24iLCJnZXRJZCIsInN0eWxlc0FycmF5IiwiYXJyb3dTaXplIiwiYXJyb3dTaXplVW5pdCIsInNlZ21lbnRMZW5ndGgiLCJhcnJvd3NfbWluem9vbSIsInN0YXJ0X3BpeGVsIiwiZW5kX3BpeGVsIiwiRmVhdHVyZSIsImdldCIsImRlZmF1bHRDb2xvciIsImRlZmF1bHRfbGFiZWxfY29sb3IiLCJsYWJlbF9vdXRsX2NvbG9yIiwibGFiZWxfb3V0bF93aWR0aCIsInVuaXQiLCJsYWJlbF9vdXRsX2JveCIsImxhYmVsX29mZnNldCIsIlRleHQiLCJ0ZXh0IiwiZm9udCIsImZvbnRfd2VpZ2h0IiwiZm9udF9zdHlsZSIsImZvbnRfc2l6ZSIsImZvbnRfZmFtaWx5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0ZXh0QWxpZ24iLCJsYWJlbF9hbGlnbl9ob3IiLCJ0ZXh0QmFzZWxpbmUiLCJsYWJlbF9hbGlnbl92ZXIiLCJmb250X2NvbG9yIiwiZm9udF9vcGFjaXR5IiwicHVzaCIsIlN0eWxlIiwiaW1hZ2UiLCJsaW5lX2Fycm93cyIsImdldEdlb21ldHJ5IiwiZ2VvbSIsIlBvaW50IiwiZm9yRWFjaFNlZ21lbnQiLCJsaW5lX2Fycm93c19yYWRpdXMiLCJzdGFydCIsImVuZCIsImxpbmVfYXJyb3dzX21pbnpvb20iLCJtYXAiLCJnZXRQaXhlbEZyb21Db29yZGluYXRlIiwic3FydCIsInBvdyIsImdldFZpZXciLCJnZXRab29tIiwiZ2VvbWV0cnkiLCJyb3RhdGVXaXRoVmlldyIsImF0YW4yIiwibGluZV9hcnJvd3NfYmFjayIsImVkaXRvckNvbmZpZyIsImNvbGxlY3QiLCJlZGl0b3JfY29sbGVjdCIsInVuZGVmaW5lZCIsImljb25TcmMiLCJlZGl0b3JfaWNvbiIsInZhcnMiLCJlZGl0b3JfdmFycyIsInNvcnQiLCJlZGl0b3Jfc29ydCIsImM0ZyIsIm1hcHMiLCJjb25zdGFudCIsImNzcyIsImV4dGVuZCIsIk9QRU4iLCJDTE9TRSIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIlJFRlJFU0giLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkxPQURJTkciLCJBTklNQVRJT05fU1BJTiIsIkxBUkdFIiwiU01BTEwiLCJIT1JJWk9OVEFMIiwiVkVSVElDQUwiLCJBVFRSSUJVVElPTl9MT0dPIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJFRElUT1JfRFJBV19DT05URU5UX1BPSU5UIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORyIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUIiwiRURJVE9SX0RSQVdfVFJJR0dFUiIsIkVESVRPUl9DT05URU5UX1NFTEVDVCIsIkVESVRPUl9EUkFXX09QVElPTlMiLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJHRU9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkdFT1NFQVJDSF9UUklHR0VSIiwiR0VPU0VBUkNIX1NUQVJUIiwiR1JBVElDVUxFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQURESVRJT05BTFBBTkVMIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJOT05FIiwiY29udHJvbCIsIlpvb21sZXZlbCIsInVwZGF0ZVpvb21sZXZlbCIsIm1hcFZpZXciLCJjbGFzc05hbWUiLCJ1bmRlZmluZWRIVE1MIiwiaW5uZXJIVE1MIiwib24iLCJDb250cm9sIiwiY2FsbCIsInRhcmdldCIsImluaGVyaXRzIiwicHJvdG90eXBlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImdldFVuaXF1ZUlkIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJlbmNvZGVHZW9Kc29uUHJvcGVydHkiLCJpbnB1dCIsIm91dHB1dCIsInJlcGxhY2UiLCJkZWNvZGVHZW9Kc29uUHJvcGVydHkiLCJzZXRVcmxQYXJhbSIsInBhcmFtIiwib3B0X2dldEtleSIsIm9wdF9leGVjdXRlIiwibGluayIsInNlYXJjaFBhcmFtIiwicGFyYW1SZXBsYWNlZCIsImxvY2F0aW9uIiwib3JpZ2luIiwicGF0aG5hbWUiLCJoYXNoIiwic2VhcmNoIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsIm9mZnNldCIsIm9yaWdpblN0cmluZyIsImdldFVybFBhcmFtIiwicmVnRXgiLCJzdWJzdHJpbmciLCJSZWdFeHAiLCJleGVjIiwiZGVsdGFFbmNvZGUiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsImEiLCJiIiwiZGVsdGFEZWNvZGUiLCJpc05hTiIsImNhbGxIb29rRnVuY3Rpb25zIiwiYXJySG9va0Z1bmN0aW9ucyIsInBhcmFtZXRlcnMiLCJqIiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInJlZHVjZWRTdHlsZSIsImxvY2F0aW9uU3R5bGVzIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsInNldFdpZHRoIiwibWVhc3VyZUdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkaW5hdGVzIiwiY29vcmQxIiwiY29vcmQyIiwicmVzdWx0IiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJnZXRDb29yZGluYXRlcyIsInByb2oiLCJ0cmFuc2Zvcm0iLCJnZXREaXN0YW5jZSIsInJhd1ZhbHVlIiwicm91bmQiLCJ0b0ZpeGVkIiwiaHRtbFZhbHVlIiwiYWJzIiwiZ2V0QXJlYSIsImNlbnRlciIsImdldENlbnRlciIsImdldFJhZGl1cyIsImVkZ2VDb29yZGluYXRlIiwiZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcyIsImFyckdlb21ldHJpZXMiLCJleHRlbnRTb3VyY2UiLCJzb3VyY2UiLCJWZWN0b3IiLCJhZGRGZWF0dXJlcyIsImdldEV4dGVudCIsIkV4dGVudCIsImZpdFRvRXh0ZW50cyIsImV4dGVudHMiLCJvcHRfcGFkZGluZyIsIm9wdF9hbmltYXRpb25EdXJhdGlvbiIsInZpZXciLCJwYWRkaW5nIiwiZXh0ZW50IiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwibWluUmVzb2x1dGlvbiIsIm1pblpvb20iLCJtYXhab29tIiwiYW5pbWF0ZSIsIkRhdGUiLCJkdXJhdGlvbiIsInJlc29sdXRpb24iLCJnZXRSZXNvbHV0aW9uIiwiZml0IiwiZ2V0U2l6ZSIsImUiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwic3RySW5wdXQiLCJvcHRfbGF5ZXIiLCJzdHJPdXRwdXQiLCJyZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMiLCJyZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyIsInJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMiLCJsYXllciIsImZ1bmN0aW9uTmFtZSIsIndpbmRvdyIsImdldFN0eWxlIiwidHlwZSIsImV2S2V5IiwiZWRpdG9yVmFycyIsImF0dHIiLCJvYmplY3RUb0FycmF5Iiwib2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImdldFZlY3RvckxheWVyIiwiZm5TdHlsZSIsImdldEN1cnJlbnRTdWJkb21haW4iLCJocmVmIiwicmVkcmF3TWFwVmlldyIsIm1hcERhdGEiLCJjb250cm9sQ29udGFpbmVyVG9wTGVmdCIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsInByZXBlbmQiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCIsImFmdGVyIiwibGVmdFNsaWRlRWxlbWVudHMiLCJjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiIsInNjYWxlbGluZSIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9scyIsIlNjYWxlTGluZSIsImFkZENvbnRyb2wiLCJhcHBlbmQiLCJ6b29tbGV2ZWwiLCJtb3VzZXBvc2l0aW9uIiwiTW91c2VQb3NpdGlvbiIsImNvb3JkaW5hdGVGb3JtYXQiLCJjb29yZGluYXRlIiwidG9TdHJpbmdIRE1TIiwiZ2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yZVZhbHVlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LEdBQWIsSUFBb0JtRCxLQUFwQixDQURnQyxDQUNMO0FBQzVCO0FBdDNCdUMsR0FBekIsQ0FBakI7QUF5M0JELENBLzNCQSxFQSszQkNsRSxNQS8zQkQsRUErM0JTLEtBQUt1TCxHQS8zQmQsQ0FBRDs7QUFpNEJPLElBQUk1SCxRQUFRLEtBQUs0SCxHQUFMLENBQVNDLElBQVQsQ0FBYzdILEtBQTFCLEMiLCJmaWxlIjoiYzRnLWxvY2F0aW9uc3R5bGUtY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbG9jYXRpb25zdHlsZS1jb250cm9sbGVyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmNjRiYjAyZGM1YzNlOTBiZDk3IiwiaW1wb3J0IHtDNGdMb2NhdGlvblN0eWxlfSBmcm9tIFwiLi9jNGctbG9jYXRpb25zdHlsZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdMb2NhdGlvblN0eWxlQ29udHJvbGxlcntcbiAgICBjb25zdHJ1Y3Rvcihwcm94eSl7XG4gICAgICAgIHRoaXMucHJveHkgPSBwcm94eTtcbiAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgICAgICB0aGlzLmFyckxvY1N0eWxlcyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWRMb2NhdGlvblN0eWxlcyhhcnJJZHMsIG9wdF9vcHRpb25zKSB7XG4gICAgICAgIGxldCBvcHRpb25zLFxuICAgICAgICAgICAgY29tcGxldGUgPSB7fSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB7fSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgY291bnQgPSAxLFxuICAgICAgICAgICAgbWFrZUFqYXg7XG5cbiAgICAgICAgaWYgKG9wdF9vcHRpb25zICYmIHR5cGVvZiBvcHRfb3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5zaG93KCk7XG5cbiAgICAgICAgbWFrZUFqYXggPSBmdW5jdGlvbihzdHlsZUlkcywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlW2luZGV4XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBnZXQgbG9jYXRpb25zdHlsZXMgb3ZlciBBUElcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5qc29ucCA/IFwianNvbnBcIiA6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIHVybDogc2VsZi5wcm94eS5hcGlfbG9jc3R5bGVfdXJsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaWRzOiBzdHlsZUlkc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFyckxvY1N0eWxlc1tzdHlsZURhdGEuaWRdID0gbmV3IEM0Z0xvY2F0aW9uU3R5bGUoc3R5bGVEYXRhLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1tpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRvbmUgJiYgdHlwZW9mIG9wdGlvbnMuZG9uZSA9PT0gXCJmdW5jdGlvblwiICYmIChpbmRleCA/IHN1Y2Nlc3NmdWwgOiB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24gKGpYaHIsIHN0clN0YXR1cykge1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlW2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5hbHdheXMgJiYgdHlwZW9mIG9wdGlvbnMuYWx3YXlzID09PSBcImZ1bmN0aW9uXCIgJiYgKGluZGV4ID8gY29tcGxldGVkIDogdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hbHdheXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEkKHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLnNwaW5uZXIuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc3BsaXQgYXJySWRzIGlmIGl0J3MgdG9vIGxvbmdcbiAgICAgICAgaWYgKGFycklkcy5sZW5ndGggPiAxMDApIHtcbiAgICAgICAgICAgIHZhciBuID0gMTAwO1xuICAgICAgICAgICAgd2hpbGUoYXJySWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtYWtlQWpheChhcnJJZHMuc3BsaWNlKDAsIG4pLCBjb3VudCk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1ha2VBamF4KGFycklkcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy99KTtcbiAgICB9IC8vIGVuZCBvZiBcImxvYWRMb2NhdGlvblN0eWxlcygpXCJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1sb2NhdGlvbnN0eWxlLWNvbnRyb2xsZXIuanMiLCJpbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQzRnTG9jYXRpb25TdHlsZXtcbiAgICBjb25zdHJ1Y3Rvcihsb2NTdHlsZUFyciwgY29udHJvbGxlcil7XG4gICAgICAgIHRoaXMuaWQgICAgICAgID0gbG9jU3R5bGVBcnJbJ2lkJ107XG4gICAgICAgIHRoaXMuc3R5bGUgICAgID0gdGhpcy5nZXRTdHlsZUZ1bmN0aW9uKGxvY1N0eWxlQXJyKTtcbiAgICAgICAgdGhpcy5lZGl0b3IgICAgPSB0aGlzLmdldFN0eWxlRWRpdG9yQ29uZmlnKGxvY1N0eWxlQXJyKTtcbiAgICAgICAgdGhpcy5uYW1lICAgICAgPSBsb2NTdHlsZUFyclsnbmFtZSddO1xuICAgICAgICB0aGlzLnRvb2x0aXAgICA9IGxvY1N0eWxlQXJyWyd0b29sdGlwJ107XG4gICAgICAgIHRoaXMubGFiZWwgICAgID0gbG9jU3R5bGVBcnJbJ2xhYmVsJ107XG4gICAgICAgIHRoaXMubWluem9vbSAgID0gbG9jU3R5bGVBcnJbJ21pbnpvb20nXTtcbiAgICAgICAgdGhpcy5tYXh6b29tICAgPSBsb2NTdHlsZUFyclsnbWF4em9vbSddO1xuICAgICAgICB0aGlzLmZuU3R5bGVGdW5jdGlvbiA9IGxvY1N0eWxlQXJyWydzdHlsZV9mdW5jdGlvbl9qcyddO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXI9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMubG9jU3R5bGVBcnIgPSBsb2NTdHlsZUFycjtcbiAgICB9XG5cbiAgICBnZXRTdHlsZUZ1bmN0aW9uKHN0eWxlRGF0YSkge1xuICAgICAgICB2YXIgc2VsZixcbiAgICAgICAgICAgIHN0eWxlRnVuY3Rpb24sXG4gICAgICAgICAgICBpbWFnZVN0eWxlLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICBmaWxsU3R5bGUsXG4gICAgICAgICAgICB0ZXh0U3R5bGUsXG4gICAgICAgICAgICB0ZXh0U3R5bGVPdXRsaW5lLFxuICAgICAgICAgICAgYmFja2dyb3VuZEZpbGwsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3Ryb2tlO1xuXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIGdlbmVyYWxcbiAgICAgICAgc3Ryb2tlU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yLCBzdHlsZURhdGEuc3Ryb2tlb3BhY2l0eSksXG4gICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlLCAxMClcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGxTdHlsZSA9IG5ldyBvbC5zdHlsZS5GaWxsKHtcbiAgICAgICAgICAgIGNvbG9yOiB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvciwgc3R5bGVEYXRhLmZpbGxvcGFjaXR5KVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbWFnZVxuICAgICAgICBzd2l0Y2ggKHN0eWxlRGF0YS5zdHlsZXR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogNCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDEwLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogTWF0aC5QSSAvIDRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMxOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDEwLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlID8gTWF0aC5mbG9vcihzdHlsZURhdGEucmFkaXVzLnZhbHVlICogMC41KSA6IDQsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogNSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDQsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCAxMCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMjogMCxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IE1hdGguUEkgLyA0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjcm9zcyc6XG4gICAgICAgICAgICAgICAgaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogNCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDEwLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyOiAwLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDMsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogc3R5bGVEYXRhLnJhZGl1cy52YWx1ZSB8fCAxMCxcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IE1hdGguUEkgLyA0LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2xfaWNvbic6IC8vIGZhbGx0aHJvdWdoXG4gICAgICAgICAgICBjYXNlICdjdXN0X2ljb24nOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVEYXRhLmljb25fc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLkljb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHBhcnNlRmxvYXQoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSwgMTApIC8gMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc3R5bGVEYXRhLmljb25fc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFtwYXJzZUludChzdHlsZURhdGEuaWNvbl9zaXplWzBdLCAxMCksIHBhcnNlSW50KHN0eWxlRGF0YS5pY29uX3NpemVbMV0sIDEwKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHBhcnNlRmxvYXQoc3R5bGVEYXRhLmljb25fc2NhbGUsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY3VzdF9pY29uX3N2Zyc6XG4gICAgICAgICAgICAgICAgICAgIGlmKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLmljb25fc2NhbGUgJiYgc3R5bGVEYXRhLmljb25fc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAoc3R5bGVEYXRhLmljb25fc2l6ZVswXSpzdHlsZURhdGEuaWNvbl9zY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gKHN0eWxlRGF0YS5pY29uX3NpemVbMV0qc3R5bGVEYXRhLmljb25fc2NhbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Ryb2tld2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlRGF0YS5zdHJva2V3aWR0aCAmJiBzdHlsZURhdGEuc3Ryb2tld2lkdGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2V3aWR0aCA9IHN0eWxlRGF0YS5zdHJva2V3aWR0aC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAgPSB3aWR0aCsoMipzdHJva2V3aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0KygyKnN0cm9rZXdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlRGF0YS5maWxsY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3IsIHN0eWxlRGF0YS5maWxsb3BhY2l0eS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJva2V3aWR0aCAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yLCBzdHlsZURhdGEuc3Ryb2tlb3BhY2l0eS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHN0eWxlRGF0YS5zdHJva2V3aWR0aC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSAmJiAoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY3R4Lmdsb2JhbEFscGhhID0gKHN0eWxlRGF0YS5pY29uX29wYWNpdHkudmFsdWUgLyAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy56SW5kZXggPSAxMDA7IC8vVGVzdFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHN0cm9rZXdpZHRoLCBzdHJva2V3aWR0aCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuSWNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBjYW52YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nU2l6ZTogW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0vKixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAoc3R5bGVEYXRhLmljb25fb3BhY2l0eS52YWx1ZSAvIDEwMCkqL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGhvdG8nIDpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlBob3RvKHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogc3R5bGVEYXRhLnBob3RvS2luZCxcbiAgICAgICAgICAgICAgICAgICAgY3JvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogcGFyc2VGbG9hdChzdHlsZURhdGEuaWNvbl9vcGFjaXR5LnZhbHVlLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogcGFyc2VGbG9hdChzdHlsZURhdGEucmFkaXVzLnZhbHVlLDEwKSxcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IHN0eWxlRGF0YS5pY29uX3NyY1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9pbnQnOlxuICAgICAgICAgICAgICAgIGltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlRGF0YS5yYWRpdXMudmFsdWUgfHwgN1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZURhdGEucmFkaXVzLnZhbHVlIHx8IDdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJ1aWxkIGZ1bmN0aW9uXG4gICAgICAgIHN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZmVhdHVyZSwgcHJvamVjdGlvbiwgZ2V0SWQpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXNBcnJheSxcbiAgICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgICBhcnJvd1NpemUsXG4gICAgICAgICAgICAgICAgYXJyb3dTaXplVW5pdCxcbiAgICAgICAgICAgICAgICBzZWdtZW50TGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFycm93c19taW56b29tLFxuICAgICAgICAgICAgICAgIHN0YXJ0X3BpeGVsLFxuICAgICAgICAgICAgICAgIGVuZF9waXhlbDtcblxuICAgICAgICAgICAgaWYgKGdldElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlRGF0YS5pZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBhIGZlYXR1cmUuc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgaWYgKCEoZmVhdHVyZSBpbnN0YW5jZW9mIG9sLkZlYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbiA9IGZlYXR1cmU7XG4gICAgICAgICAgICAgICAgZmVhdHVyZSA9IHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0eWxlc0FycmF5ID0gW107XG5cbiAgICAgICAgICAgIGlmIChmZWF0dXJlICYmIHR5cGVvZiBmZWF0dXJlLmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldCgnbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gZmVhdHVyZS5nZXQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlRGF0YS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gc3R5bGVEYXRhLmxhYmVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IHNlbGYuY29udHJvbGxlci5tYXBDb250cm9sbGVyLmRhdGEuZGVmYXVsdF9sYWJlbF9jb2xvcjtcbiAgICAgICAgICAgIC8vIGxhYmVsXG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVEYXRhLmxhYmVsX291dGxfY29sb3IgJiYgc3R5bGVEYXRhLmxhYmVsX291dGxfd2lkdGgudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlT3V0bGluZSA9IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEubGFiZWxfb3V0bF9jb2xvciB8fCBkZWZhdWx0Q29sb3IsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoc3R5bGVEYXRhLmxhYmVsX291dGxfd2lkdGgudmFsdWUsIDEwKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3R5bGVEYXRhLmxhYmVsX291dGxfYm94ID09PSBcIjFcIil7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEZpbGwgPSBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5sYWJlbF9vdXRsX2NvbG9yIHx8IGRlZmF1bHRDb2xvciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0OiAnJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzdHlsZURhdGEubGFiZWxfb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YS5sYWJlbF9vZmZzZXQgPSBbMCwgMCwgXCJweFwiXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoc3R5bGVEYXRhLmxhYmVsX291dGxfYm94ID09PSBcIjFcIil7XG4gICAgICAgICAgICAgICAgICB0ZXh0U3R5bGUgPSBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBmb250OiAoc3R5bGVEYXRhLmZvbnRfd2VpZ2h0IHx8ICdub3JtYWwnKSArICcgJyArIChzdHlsZURhdGEuZm9udF9zdHlsZSB8fCAnbm9ybWFsJykgKyAnICcgKyAoc3R5bGVEYXRhLmZvbnRfc2l6ZSB8fCAnMTMnKSArICdweCAnICsgKHN0eWxlRGF0YS5mb250X2ZhbWlseSB8fCAnc2Fucy1zZXJpZicpLFxuICAgICAgICAgICAgICAgICAgICAvLyBzY2FsZTogcGFyc2VJbnQoc3R5bGVEYXRhLmZvbnRfc2l6ZSB8fCAwLCAxMCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRYOiBwYXJzZUludChzdHlsZURhdGEubGFiZWxfb2Zmc2V0WzBdIHx8IDAsIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogcGFyc2VJbnQoc3R5bGVEYXRhLmxhYmVsX29mZnNldFsxXSB8fCAwLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogc3R5bGVEYXRhLmxhYmVsX2FsaWduX2hvcixcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiBzdHlsZURhdGEubGFiZWxfYWxpZ25fdmVyLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZm9udF9jb2xvciB8fCBkZWZhdWx0Q29sb3IsIHN0eWxlRGF0YS5mb250X29wYWNpdHkpXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmlsbDogYmFja2dyb3VuZEZpbGwsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTdHJva2U6IHRleHRTdHlsZU91dGxpbmVcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlID0gbmV3IG9sLnN0eWxlLlRleHQoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgZm9udDogKHN0eWxlRGF0YS5mb250X3dlaWdodCB8fCAnbm9ybWFsJykgKyAnICcgKyAoc3R5bGVEYXRhLmZvbnRfc3R5bGUgfHwgJ25vcm1hbCcpICsgJyAnICsgKHN0eWxlRGF0YS5mb250X3NpemUgfHwgJzEzJykgKyAncHggJyArIChzdHlsZURhdGEuZm9udF9mYW1pbHkgfHwgJ3NhbnMtc2VyaWYnKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NhbGU6IHBhcnNlSW50KHN0eWxlRGF0YS5mb250X3NpemUgfHwgMCwgMTApIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogcGFyc2VJbnQoc3R5bGVEYXRhLmxhYmVsX29mZnNldFswXSB8fCAwLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IHBhcnNlSW50KHN0eWxlRGF0YS5sYWJlbF9vZmZzZXRbMV0gfHwgMCwgMTApLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHN0eWxlRGF0YS5sYWJlbF9hbGlnbl9ob3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHRCYXNlbGluZTogc3R5bGVEYXRhLmxhYmVsX2FsaWduX3ZlcixcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZvbnRfY29sb3IgfHwgZGVmYXVsdENvbG9yLCBzdHlsZURhdGEuZm9udF9vcGFjaXR5KVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB0ZXh0U3R5bGVPdXRsaW5lXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY3JlYXRlIHN0eWxlLW9iamVjdFxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIGNoZWNrIGJlY2F1c2UgdGV4dFN0eWxlIGlzIGEgdmFyIGFjY2Vzc2libGUgZnJvbSBjbG9zdXJlIGFuZCB3aWxsIGJlIHNldCBldmVuIGlmIG5vIGxhYmVsIGlzIHNldFxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzQXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlc0FycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIGFkZCBsaW5lLWFycm93c1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHN0eWxlRGF0YS5saW5lX2Fycm93c1xuICAgICAgICAgICAgICAgICYmIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAmJiAodHlwZW9mIGZlYXR1cmUuZ2V0R2VvbWV0cnkgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgJiYgIShmZWF0dXJlLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvaW50KVxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZm9yRWFjaFNlZ21lbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGFycm93U2l6ZSA9IChzdHlsZURhdGEubGluZV9hcnJvd3NfcmFkaXVzKSA/IChwYXJzZUludChzdHlsZURhdGEubGluZV9hcnJvd3NfcmFkaXVzLnZhbHVlLCAxMCkgKiAyKSA6IDA7XG4gICAgICAgICAgICAgICAgYXJyb3dTaXplVW5pdCA9IGFycm93U2l6ZSArIHN0eWxlRGF0YS5saW5lX2Fycm93c19yYWRpdXMudW5pdDtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZm9yRWFjaFNlZ21lbnQoZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBtaW56b29tIGlzIDAgKHVubGltaXRlZCksIGhpZGUgYXJyb3dzIGlmIHRoZXkgYXJlIGJpZ2dlciB0aGFuIHRoZSBzZWdtZW50XG4gICAgICAgICAgICAgICAgICAgIGFycm93c19taW56b29tID0gcGFyc2VJbnQoc3R5bGVEYXRhLmxpbmVfYXJyb3dzX21pbnpvb20sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfcGl4ZWwgPSBzZWxmLmNvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZShzdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGVuZF9waXhlbCA9IHNlbGYuY29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRQaXhlbEZyb21Db29yZGluYXRlKGVuZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV1Y2xpZC1kaXN0YW5jZSBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmRcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudExlbmd0aCA9IE1hdGguc3FydChNYXRoLnBvdyhlbmRfcGl4ZWxbMV0gLSBzdGFydF9waXhlbFsxXSwgMikgKyBNYXRoLnBvdyhlbmRfcGl4ZWxbMF0gLSBzdGFydF9waXhlbFswXSwgMikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChhcnJvd3NfbWluem9vbSA8IDAgJiYgYXJyb3dTaXplICsgcGFyc2VJbnQoc3R5bGVEYXRhLnN0cm9rZXdpZHRoLnZhbHVlLCAxMCkgPCBzZWdtZW50TGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKGFycm93c19taW56b29tID49IDAgJiYgc2VsZi5jb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCkgPj0gYXJyb3dzX21pbnpvb20pXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yd2FyZCBhcnJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc0FycmF5LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbC5nZW9tLlBvaW50KGVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBvbC5zdHlsZS5UZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi4ZCzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBhcnJvd1NpemVVbml0ICsgXCIgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlV2l0aFZpZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvbjogLU1hdGguYXRhbjIoKGVuZFsxXSAtIHN0YXJ0WzFdKSwgKGVuZFswXSAtIHN0YXJ0WzBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2t3YXJkIGFycm93cyAoaWYgd2FudGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlRGF0YS5saW5lX2Fycm93c19iYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzQXJyYXkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChzdGFydCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgb2wuc3R5bGUuVGV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLhkLNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBhcnJvd1NpemVVbml0ICsgXCIgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVdpdGhWaWV3OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAtTWF0aC5hdGFuMigoc3RhcnRbMV0gLSBlbmRbMV0pLCAoc3RhcnRbMF0gLSBlbmRbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlc0FycmF5O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzdHlsZUZ1bmN0aW9uO1xuICAgIH0gLy8gZW5kIG9mIFwiZ2V0U3R5bGVGdW5jdGlvbigpXCJcblxuXG4gICAgZ2V0U3R5bGVFZGl0b3JDb25maWcoc3R5bGVEYXRhKSB7XG4gICAgICAgIHZhciBlZGl0b3JDb25maWc7XG5cbiAgICAgICAgLy8gY3JlYXRlIGVkaXRvci1jb25maWdcbiAgICAgICAgZWRpdG9yQ29uZmlnID0ge307XG4gICAgICAgIGVkaXRvckNvbmZpZy5jb2xsZWN0ID0gc3R5bGVEYXRhLmVkaXRvcl9jb2xsZWN0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgZWRpdG9yQ29uZmlnLmljb25TcmMgPSBzdHlsZURhdGEuZWRpdG9yX2ljb24gfHwgdW5kZWZpbmVkO1xuICAgICAgICBlZGl0b3JDb25maWcudmFycyA9IHN0eWxlRGF0YS5lZGl0b3JfdmFycyB8fCB1bmRlZmluZWQ7XG5cbiAgICAgICAgZWRpdG9yQ29uZmlnLnNvcnQgPSBzdHlsZURhdGEuZWRpdG9yX3NvcnQgfHwgZmFsc2U7XG4gICAgICAgIGlmIChlZGl0b3JDb25maWcuc29ydCkge1xuICAgICAgICAgICAgZWRpdG9yQ29uZmlnLnNvcnQgPSBwYXJzZUludChlZGl0b3JDb25maWcuc29ydCwgMTApIHx8IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVkaXRvckNvbmZpZztcbiAgICB9Ly8gZW5kIG9mIFwiZ2V0U3R5bGVFZGl0b3JDb25maWcoKVwiXG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbG9jYXRpb25zdHlsZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY3VycmVudCB6b29tbGV2ZWwgb24gdGhlIG1hcC5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzICB7b2wuY29udHJvbC5Db250cm9sfVxuICAgKlxuICAgKiBAcGFyYW0gICAge09iamVjdH0gICAgICAgICAgICAgIG9wdF9vcHRpb25zICAqb3B0aW9uYWwqIGNvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICB1cGRhdGVab29tbGV2ZWw7XG5cbiAgICBzZWxmID0gdGhpcztcblxuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5tYXBWaWV3KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1pvb21sZXZlbCBjb250cm9sIG5lZWRzIHRvIGtub3cgdGhlIG1hcC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuWk9PTV9MRVZFTCxcbiAgICAgIHVuZGVmaW5lZEhUTUw6ICcnXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMubWFwVmlldy5nZXRab29tKCk7XG5cbiAgICB1cGRhdGVab29tbGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhcnNlSW50KG9wdGlvbnMubWFwVmlldy5nZXRab29tKCkpO1xuICAgIH07XG5cbiAgICBvcHRpb25zLm1hcFZpZXcub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgdXBkYXRlWm9vbWxldmVsKTtcbiAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBvcHRpb25zLnRhcmdldFxuICAgIH0pO1xuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbC5wcm90b3R5cGUsIHtcblxuICAgIC8vIG5vdGhpbmcgdG8gYWRkIGhlcmVcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgWm9vbWxldmVsID0gdGhpcy5jNGcubWFwcy5jb250cm9sLlpvb21sZXZlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Wm9vbWxldmVsfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbFwiXG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogYzRnLU1hcHMgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLnV0aWxzID0gJC5leHRlbmQoYzRnLm1hcHMudXRpbHMsIHtcbiAgICAvKipcbiAgICAgKiAgQ29udmVydHMgdGhlIGZpcnN0IGxldHRlciBvZiBhIGdpdmVuIHN0cmluZyB0byB1cHBlcmNhc2UsIGxlYXZpbmcgdGhlIHJlbWFpbmluZyBzdHJpbmcgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogIEBwYXJhbSAgICB7c3RyaW5nfSAgICB0aGUgc3RyaW5nIHRvIGNhcGl0YWxpemVcbiAgICAgKlxuICAgICAqICBAcmV0dXJuICAge3N0cmluZ30gICAgdGhlIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcjogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiB1bmlxdWUgaWQuXG4gICAgICpcbiAgICAgKiBUaGUgaWQgaXMgOSBjaGFyYWN0ZXJzIGxvbmcgYW5kIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICBUaGUgZ2VuZXJhdGVkIGlkLlxuICAgICAqL1xuICAgIGdldFVuaXF1ZUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAgICAgLy8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcbiAgICAgIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICAgICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgbm90IGJyZWFrIHRoZSBDb2RlLlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXCAtPiBcXFxcO1xuICAgICAqICAgXCIgLT4gJyc7XG4gICAgICogICDDhCAtPiAmQXVtbDtcbiAgICAgKiAgIMOkIC0+ICZhdW1sO1xuICAgICAqICAgw5YgLT4gJk91bWw7XG4gICAgICogICDDtiAtPiAmb3VtbDtcbiAgICAgKiAgIMOcIC0+ICZVdW1sO1xuICAgICAqICAgw7wgLT4gJnV1bWw7XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGVuY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXC9nLCAnXFxcXFxcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcXCIvZywgJ1xcJ1xcJydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw4QvZywgJyZBdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw6QvZywgJyZhdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5YvZywgJyZPdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7YvZywgJyZvdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5wvZywgJyZVdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7wvZywgJyZ1dW1sOydcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGVuY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBiZSBkaXNwbGF5ZWQgY29ycmVjdGx5LlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXFxcICAgICAtPiBcXDtcbiAgICAgKiAgICcnICAgICAtPiBcIjtcbiAgICAgKiAgICZBdW1sOyAtPiDDhFxuICAgICAqICAgJmF1bWw7IC0+IMOkXG4gICAgICogICAmT3VtbDsgLT4gw5ZcbiAgICAgKiAgICZvdW1sOyAtPiDDtlxuICAgICAqICAgJlV1bWw7IC0+IMOcXG4gICAgICogICAmdXVtbDsgLT4gw7xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVjb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXFxcXFwvZywgJ1xcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcJ1xcJy9nLCAnXFxcIidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJkF1bWw7L2csICfDhCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJmF1bWw7L2csICfDpCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJk91bWw7L2csICfDlidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJm91bWw7L2csICfDtidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJlV1bWw7L2csICfDnDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZ1dW1sOy9nLCAnw7wnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBkZWNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yIHJlcGxhY2UgYW4gVVJMLXBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIGBwYXJhbWAsXG4gICAgICogd2lsbCBiZSBhcHBsaWVkIGFzIFwiaGFzaC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcyNwYXJhbVxuICAgICAqIE5vdGUsIHRoYXQgYWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIHdoZXJlYXMgZXhpc3RpbmcgXCJHRVQtcGFyYW1ldGVyc1wiIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIHNldCwgaXQgd2lsbCBiZSBhcHBsaWVkIGFzIFwiR0VULXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzP29wdF9nZXRLZXk9cGFyYW1cbiAgICAgKiBJZiB0aGUga2V5IGRlc2NyaWJlZCBieSBgb3B0X2dldEtleWAgaXMgYWxyZWFkeSBleGlzdGluZywgaXRzIHZhbHVlIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIG90aGVyd2lzZSB0aGUga2V5LXZhbHVlLXBhaXIgd2lsbCBiZSBhcHBlbmRlZCBhcHByb3ByaWF0bHkuXG4gICAgICogQWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2V4ZWN1dGVgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgbmV3IGxpbmsgYXMgYHN0cmluZ2AsXG4gICAgICogb3RoZXJ3aXNlIHRoZSBcImhyZWYvbG9jYXRpb25cIiB3aWxsIGJlIGNoYW5nZWQgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIsIHdoaWNoIGNhbiBjYXVzZSBhIHBhZ2VyZWxvYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBwYXJhbSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufHN0cmluZ30gIG9wdF9nZXRLZXkgICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgIG9wdF9leGVjdXRlICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqL1xuICAgIHNldFVybFBhcmFtOiBmdW5jdGlvbiAocGFyYW0sIG9wdF9nZXRLZXksIG9wdF9leGVjdXRlKSB7XG4gICAgICB2YXIgbGluayxcbiAgICAgICAgICBzZWFyY2hQYXJhbSxcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkLFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxpbmsgPSBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIC8vIHVzZSBoYXNoLXBhcmFtZXRlclxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gcGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBsb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBHRVQtcGFyYW1ldGVyXG4gICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYWxyZWFkeSBzZWFyY2gtcGFyYW1ldGVyc1xuICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICBvcHRfZ2V0S2V5ID0gb3B0X2dldEtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIC8vIHJlcGxhY2UgcGFyYW1ldGVyIGlmIGFscmVhZHkgZXhpc3RlbnRcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFxuICAgICAgICAgICAgICAvKFtePVxcP1xcJl0rKT0oW14mXSspL2dpLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gb3B0X2dldEtleSkge1xuICAgICAgICAgICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFwcGVuZCBhcyBuZXcgcGFyYW1ldGVyXG4gICAgICAgICAgaWYgKCFwYXJhbVJlcGxhY2VkKSB7XG4gICAgICAgICAgICBzZWFyY2hQYXJhbSArPSAnJicgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCBiZSB0aGUgb25seSBzZWFyY2gtcGFyYW1ldGVyIGluIHRoZSBVUkxcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9ICc/JyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5zZWFyY2ggPSBzZWFyY2hQYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IHNlYXJjaFBhcmFtICsgbG9jYXRpb24uaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSwgLy8gZW5kIG9mIHNldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIEdldCBzZWFyY2ggb3IgaGFzaCBVUkwtcGFyYW1ldGVyIGFzIHN0cmluZy5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgaGFzaC1wYXJhbWV0ZXIgb2YgdGhlIFVSTCBpcyByZXR1cm5lZCxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCBzZWFyY2ggZm9yIGEgR0VULXBhcmFtZXRlciBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIElmIGEgcGFyYW1ldGVyIGlzIG5vdCBleGlzdGVudCwgb3IgZW1wdHksIGFuIGVtcHR5IHN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxzdHJpbmd9ICBvcHRfZ2V0S2V5ICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm91bmQgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGdldFVybFBhcmFtOiBmdW5jdGlvbiAob3B0X2dldEtleSkge1xuICAgICAgdmFyIHBhcmFtLFxuICAgICAgICAgIHJlZ0V4O1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgcGFyYW0gPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgcGFyYW0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWdFeCA9IG5ldyBSZWdFeHAoJ1tcXD9cXCZdJyArIG9wdF9nZXRLZXkgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICAgIHBhcmFtID0gcmVnRXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogRGVsdGEtZW5jb2RlIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAgICogTm90ZSB0aGF0IHRoZSBhcnJheSB3aWxsIGJlIHNvcnRlZCAobG93ZXN0IHRvIGhpZ2hlc3QpXG4gICAgICogYmVmb3JlIGVuY29kaW5nLlxuICAgICAqXG4gICAgICogU28gYWZ0ZXIgdGhlIGVuY29kaW5nIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvbnRhaW5zXG4gICAgICogdGhlIHNtYWxsZXN0IG51bWJlciBvZiB0aGUgc2V0IGFuZCBlYWNoIGZvbGxvd2luZyBudW1iZXIganVzdFxuICAgICAqIHJlcHJlc2VudHMgdGhlIG9mZnNldCB0byBpdHMgcHJldmlvdXMgbmVpZ2hib3IuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG1vc3RseSBlZmZpY2llbnQgZm9yIGhpZ2ggbnVtYmVycywgdGhhdCBhcmUgXCJjbG9zZSB0byBlYWNoIG90aGVyXCIuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgWzEzMzcsIDExLCAxMDEsIDEyMywgOTYsIDY5LCA0MiwgNDJdXG4gICAgICogICB3aWxsIGJlIHNvcnRlZFxuICAgICAqICAgWzExLCA0MiwgNDIsIDY5LCA5NiwgMTAxLCAxMjMsIDEzMzddXG4gICAgICogICBhbmQgZW5jb2RlZCB0b1xuICAgICAqICAgWzExLCAzMSwgMCwgMjcsIDI3LCA1LCAyMiwgMTIxNF1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRW5jb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoYXJySW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBhcnJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgYXJySW5wdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICB9KTtcblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBhcnJJbnB1dFswXTtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBhcnJJbnB1dFtpXSAtIGFycklucHV0W2kgLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YUVuY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBkZWx0YS1lbmNvZGVkIGFycmF5LlxuICAgICAqIFNlZSBgZGVsdGFFbmNvZGVgIGZ1bmN0aW9uIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFEZWNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBwYXJzZUludChhcnJJbnB1dFswXSwgMTApO1xuICAgICAgaWYgKGlzTmFOKGFycklucHV0WzBdKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gcGFyc2VJbnQoYXJySW5wdXRbaV0sIDEwKSArIGFyck91dHB1dFtpIC0gMV07XG4gICAgICAgIGlmIChpc05hTihhcnJPdXRwdXRbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFEZWNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGNhbGwgZnVuY3Rpb25zIGluIGBhcnJIb29rRnVuY3Rpb25zYCB3aXRoIGdpdmVuIGBwYXJhbWV0ZXJzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxmdW5jdGlvbj59ICAgYXJySG9va0Z1bmN0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHttaXhlZH0gICAgICAgICAgICAgcGFyYW1ldGVycyAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNhbGxIb29rRnVuY3Rpb25zOiBmdW5jdGlvbiAoYXJySG9va0Z1bmN0aW9ucywgcGFyYW1ldGVycykge1xuICAgICAgdmFyIGo7XG5cbiAgICAgIGlmIChhcnJIb29rRnVuY3Rpb25zICYmIGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJySG9va0Z1bmN0aW9uc1tqXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJySG9va0Z1bmN0aW9uc1tqXShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJjYWxsSG9va0Z1bmN0aW9ucygpXCJcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBoZXgtZm9ybWF0ZWQgY29sb3IgdmFsdWUgaW50byByZ2JhKCktZm9ybWF0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBoZXggICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgb3B0X29wYWNpdHkgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHk6IGZ1bmN0aW9uIChoZXgsIG9wdF9vcGFjaXR5LCBvcHRfYXJyYXkpIHtcblxuICAgICAgdmFyIGJpZ2ludCwgciwgZywgYiwgYTtcblxuICAgICAgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgb3B0X29wYWNpdHkudmFsdWUgPSBwYXJzZUludChvcHRfb3BhY2l0eS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiB0eXBlb2Ygb3B0X29wYWNpdHkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0X29wYWNpdHkgPT09ICdvYmplY3QnICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSBvcHRfb3BhY2l0eS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgICBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICAgIGIgPSBiaWdpbnQgJiAyNTU7XG4gICAgICBhID0gb3B0X29wYWNpdHkgPyAob3B0X29wYWNpdHkgLyAxMDApIDogMTtcbiAgICAgIGlmKG9wdF9hcnJheSl7XG4gICAgICAgIHJldHVybiBbcixnLGIsYV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZHVjZSBhIGRlZmluZWQgc3R5bGUsIHRvIGEgc2ltcGxlciB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogVGhlIHJlZHVjZWQgc3R5bGUgaXMgdGhlIGZpcnN0IHN0eWxlIG9mIHRoZSBkZWZpbmVkIHN0eWxlc2V0LFxuICAgICAqIHdpdGggYSAxcHggdGhpY2sgc3Ryb2tlIGFuZCBhIGNpcmNsZSB3aXRoIGEgNXB4IHJhZGl1cy5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBhZGRpdGlvbmFsIGdlb21ldHJpZXMgd2l0aCBhIG1haW4tZ2VvbWV0cnksXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gZGVmaW5lIGEgd2hvbGUgbmV3IHN0eWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcnxzdHJpbmd9ICAgICAgICAgICBzdHlsZUlkICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8b2wuc3R5bGUuU3R5bGU+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZWR1Y2VTdHlsZTogZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHZhciBzdHlsZSxcbiAgICAgICAgICByZWR1Y2VkU3R5bGUsXG4gICAgICAgICAgZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZVN0eWxlO1xuXG4gICAgICBpZiAoIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdIHx8ICFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHN0eWxlID0gYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUoKVswXTtcblxuICAgICAgZmlsbFN0eWxlID0gc3R5bGUuZ2V0RmlsbCgpO1xuICAgICAgc3Ryb2tlU3R5bGUgPSBzdHlsZS5nZXRTdHJva2UoKTtcbiAgICAgIHN0cm9rZVN0eWxlLnNldFdpZHRoKDEpO1xuXG4gICAgICByZWR1Y2VkU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pLFxuICAgICAgICAvLyB0ZXh0OiBzdHlsZS5nZXRUZXh0KCksXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBbcmVkdWNlZFN0eWxlXTtcbiAgICB9LCAvLyBlbmQgb2YgXCJyZWR1Y2VTdHlsZVwiXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBnaXZlbiBnZW9tZXRyeS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBnZW9tZXRyeSBpcyBhIGBMaW5lU3RyaW5nYCB0aGUgZnVuY3Rpb24gd2lsbCBtZWFzdXJlIGl0cyBsZW5ndGgsXG4gICAgICogaXMgaXQgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIHRoZSBhY3JlYWdlLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiBgMGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgb3B0aW9uYWwgYG9wdF9mb3JjZUxpbmVNZWFzdXJlYCBwYXJhbWV0ZXIgaXMgYHRydWVgXG4gICAgICogYW5kIHRoZSBnZW9tZXRyeSBpcyBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgaXRzIHBlcmltZXRlciBpbnN0ZWFkXG4gICAgICogb2YgaXRzIGFjcmVhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuZ2VvbS5MaW5lU3RyaW5nfG9sLmdlb20uUG9seWdvbn0gICBnZW9tZXRyeSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgIG9wdF9mb3JjZUxpbmVNZWFzdXJlICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8c3RyaW5nPnxudW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1lYXN1cmVHZW9tZXRyeTogZnVuY3Rpb24gKGdlb21ldHJ5LCBvcHRfZm9yY2VMaW5lTWVhc3VyZSwgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICBzcGhlcmUsXG4gICAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgICAgY29vcmQxLFxuICAgICAgICAgIGNvb3JkMixcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vc3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcgfHwgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uICYmIG9wdF9mb3JjZUxpbmVNZWFzdXJlKSkge1xuXG4gICAgICAgIGNvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgICBjb29yZDEgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICBjb29yZDIgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpICsgMV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgdmFsdWUgKz0gb2wuc3BoZXJlLmdldERpc3RhbmNlKGNvb3JkMSwgY29vcmQyLCA2Mzc4MTM3KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgIC8vZ2VvbWV0cnkgPSAvKiogQHR5cGUge29sLmdlb20uUG9seWdvbn0gKi8oZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSk7XG4gICAgICAgIC8vY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRMaW5lYXJSaW5nKDApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnMob2wuc3BoZXJlLmdldEFyZWEoZ2VvbWV0cnkpKTtcbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSAmJiBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhbHVlID0gTWF0aC5QSSAqIE1hdGguc3FydCh2YWx1ZSk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChyZXN1bHQucmF3VmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQoKHZhbHVlICogMTAwKSAvIDEwMCkgLyAxMDAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV4dGVudCBmb3IgYW4gYXJyYXkgb2YgZ2VvbWV0cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheS48b2wuZ2VvbS5zaW1wbGVHZW9tZXRyeT59ICBhcnJHZW9tZXRyaWVzICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7b2wuRXh0ZW50fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEV4dGVudEZvckdlb21ldHJpZXM6IGZ1bmN0aW9uIChhcnJHZW9tZXRyaWVzKSB7XG4gICAgICB2YXIgZXh0ZW50U291cmNlO1xuXG4gICAgICBpZiAoIWFyckdlb21ldHJpZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHZW9tZXRyaWVzIG1pc3NpbmcgZm9yIGV4dGVudCBjYWxjdWxhdGlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGV4dGVudFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICBleHRlbnRTb3VyY2UuYWRkRmVhdHVyZXMoYXJyR2VvbWV0cmllcyk7XG5cbiAgICAgIHJldHVybiBleHRlbnRTb3VyY2UuZ2V0RXh0ZW50KCkgfHwgb2wuRXh0ZW50KFswLCAwLCAwLCAwXSk7XG4gICAgfSwgLy8gZW5kIG9mIGdldEV4dGVudEZvckdlb21ldHJpZXMoKVxuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBhcnJheSBvZiBgZXh0ZW50c2AuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgZXh0ZW50cyAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnRzOiBmdW5jdGlvbiAoZXh0ZW50cywgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICBrZXk7XG5cbiAgICAgIGlmICghZXh0ZW50cyB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9leHRlbnQgPSBvbC5leHRlbnQuY3JlYXRlRW1wdHkoKTtcblxuICAgICAgZm9yIChrZXkgaW4gZXh0ZW50cykge1xuICAgICAgICBpZiAoZXh0ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHRlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGV4dGVudCA9IGV4dGVudHNba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2wuZXh0ZW50LmV4dGVuZChleHRlbnQsIGV4dGVudHNba2V5XSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maXRUb0V4dGVudChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIDUsIDAsIDAsIDIpO1xuXG5cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnRzXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGBleHRlbnRgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLkV4dGVudH0gIGV4dGVudCAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7YXJyYXl9ICAgICAgb3B0X3BhZGRpbmcgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluWm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21heFpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5SZXNvbHV0aW9uICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50OiBmdW5jdGlvbiAoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24sIG9wdF9taW5ab29tLCBvcHRfbWF4Wm9vbSwgb3B0X21pblJlc29sdXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZml0T3B0aW9ucztcblxuICAgICAgaWYgKCFleHRlbnQgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGZpdE9wdGlvbnMgPSB7XG4gICAgICAgICdwYWRkaW5nJzogb3B0X3BhZGRpbmcgfHwgWzI1LCAyNSwgMjUsIDI1XVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdF9taW5SZXNvbHV0aW9uICYmIG9wdF9taW5SZXNvbHV0aW9uID4gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblJlc29sdXRpb24gPSBvcHRfbWluUmVzb2x1dGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9taW5ab29tICYmIG9wdF9taW5ab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5ab29tID0gb3B0X21pblpvb207XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWF4Wm9vbSAmJiBvcHRfbWF4Wm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWF4Wm9vbSA9IG9wdF9tYXhab29tO1xuICAgICAgfVxuXG4gICAgICAvLyBhbmltYXRlIHRoZSBcImZpdHRpbmdcIiB3aGVuIGEgZHVyYXRpb24gaXMgZ2l2ZW4gYW5kIGl0cyBncmVhdGVyIHRoYW4gMFxuICAgICAgaWYgKG9wdF9hbmltYXRpb25EdXJhdGlvbiAmJiBvcHRfYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgY2VudGVyOiBbMCwgMF1cbiAgICAgICAgICAvL3JvdGF0aW9uOiBNYXRoLlBJXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtYXAuYmVmb3JlUmVuZGVyKFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnBhbih7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgc291cmNlOiB2aWV3LmdldENlbnRlcigpXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi56b29tKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpLCB7cGFkZGluZzogWzI1LCAyNSwgMjUsIDI1XX0pO1xuICAgICAgICAvL3ZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSk7XG4gICAgICAgIC8vdmlldy5zZXRab29tKHZpZXcuZ2V0Wm9vbSgpLTEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudCgpXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBydW4gYWxsIHBsYWNlaG9sZGVyIGZ1bmN0aW9ucyBhdCBvbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgc3RySW5wdXQgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgICAgICAgICAgICAgZmVhdHVyZSAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyIHwgdW5kZWZpbmVkfSAgb3B0X2xheWVyICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQWxsUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgLy8gb25seSBjaGVjayB0aGUgZmlyc3QgdHdvIHBhcmFtZXRlcnMgYXMgdGhleSB3aWxsIGJlIHVzZWQgYnkgYWxsIHBsYWNlaG9sZGVyLWZ1bmN0aW9uc1xuICAgICAgLy8gLT4gZm9yIHBlcmZvcm1hbmNlXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcik7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUFsbFBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHtGTmZ1bmN0aW9uTmFtZX1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgd2luZG93LmZ1bmN0aW9uTmFtZShmZWF0dXJlLCBzdHlsZSlgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKiBTdHlsZSB3aWxsIGJlIHRha2VuIGVpdGhlciBmcm9tIHRoZSBmZWF0dXJlLCBvciB0aGUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyfSAgbGF5ZXIgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8ICFsYXllcikge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxce0ZOKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBmdW5jdGlvbk5hbWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZ1bmN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSAmJiB0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSgpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxheWVyLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGxheWVyLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbZnVuY3Rpb25OYW1lXShmZWF0dXJlLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMsIGluIGBzdHJJbnB1dGAsIGZvciB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBnZW9FZGl0b3IuXG4gICAgICogVmFsaWQgcGxhY2Vob2xkZXJzIGFyZTogKFtrZXldIHJlcHJlc2VudHMgdGhlIHN0cmluZ25hbWUgb2YgdGhlIHZhcmlhYmxlcyBrZXkpXG4gICAgICogICBgJHtFTFtrZXldfWAgICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZMW2tleV19YCAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGUsIGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAqICAgYCR7RVZba2V5XX1gICAgPT4gIFZhbHVlIG9mIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZWW2tleV19YCAgPT4gIFNhbWUgYXMgYCR7RVZba2V5XX1gXG4gICAgICpcbiAgICAgKiBJZiBubyBhcHByb3ByaWF0ZSB2YWx1ZSBjYW4gYmUgZm91bmQgZm9yIGEgcGxhY2Vob2xkZXJcbiAgICAgKiBpdCB3aWxsIHNpbXBseSBiZSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KEVWP1tMVl0pKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB0eXBlLCBldktleSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBlZGl0b3JWYXJzLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaGFzIGVkaXRvclZhcnNcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpKSB7XG4gICAgICAgICAgICAgIGVkaXRvclZhcnMgPSBmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpO1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggZm9yIGVkaXRvclZhciB3aXRoIGtleSA9PSBldktleVxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWRpdG9yVmFycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChlZGl0b3JWYXJzW2ldLmtleSA9PT0gZXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgJ0VWTCcgZGlzcGxheSBsYWJlbCBvbmx5IGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdFTCcgfHwgKHR5cGUgPT09ICdFVkwnICYmIGVkaXRvclZhcnNbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHthdHRyfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGBmZWF0dXJlLmdldChhdHRyKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBhdHRyLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0KGF0dHIpIHx8ICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycygpXG5cbiAgICBvYmplY3RUb0FycmF5OiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iamVjdCA9IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LCAvLyBlbmQgb2Ygb2JqZWN0VG9BcnJheSgpXG5cbiAgICBnZXRWZWN0b3JMYXllcihzb3VyY2UsIHN0eWxlKSB7XG4gICAgICAgIHZhciBmblN0eWxlO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzdHlsZSBpcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHN0eWxlOiBmblN0eWxlXG4gICAgICAgIH0pO1xuICAgIH0sLy8gZW5kIG9mIFwiZ2V0VmVjdG9yTGF5ZXIoKVwiXG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgc3ViZG9tYWluIGZyb20gdGhlIGN1cnJlbnQgcmVxdWVzdCBob3N0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCAqfVxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdWJkb21haW4oKSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIHJlZHJhd01hcFZpZXc6IGZ1bmN0aW9uIChtYXBDb250cm9sbGVyKSB7XG4gICAgICB2YXIgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lclRvcExlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgIG1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LnByZXBlbmQoY29udHJvbENvbnRhaW5lclRvcExlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAkKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KS5hZnRlcihjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG4gICAgICBtYXBDb250cm9sbGVyLmxlZnRTbGlkZUVsZW1lbnRzLnB1c2goY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgICBpZiAobWFwRGF0YS5zY2FsZWxpbmUpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lID0gbmV3IG9sLmNvbnRyb2wuU2NhbGVMaW5lKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCxcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICB9XG5cbiAgICAgICQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpLmFwcGVuZChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yik7XG5cbiAgICAgIGlmIChtYXBEYXRhLnpvb21sZXZlbCkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwgPSBuZXcgWm9vbWxldmVsKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXBEYXRhLm1vdXNlcG9zaXRpb24pIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24gPSBuZXcgb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uKHtcbiAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBjb29yZGluYXRlRm9ybWF0OiBvbC5jb29yZGluYXRlLnRvU3RyaW5nSERNUyxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgJyc7XG4gICAgfSxcbiAgICBzdG9yZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTsgLy8gb25seSBzdHJpbmdzXG4gICAgfVxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgdXRpbHMgPSB0aGlzLmM0Zy5tYXBzLnV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9