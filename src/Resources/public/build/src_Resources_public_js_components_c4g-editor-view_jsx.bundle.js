"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-editor-view_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-editor-view.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-editor-view.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style.jsx */ "./src/Resources/public/js/components/c4g-starboard-style.jsx");
var _c4gPopupController = __webpack_require__(/*! ./../c4g-popup-controller */ "./src/Resources/public/js/c4g-popup-controller.js");
var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./src/Resources/public/js/c4g-maps-misc-tooltippopup.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var EditorView = exports["default"] = /*#__PURE__*/function (_Component) {
  function EditorView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, EditorView);
    _this = _callSuper(this, EditorView, [props]);
    var scope = _this;
    _this.state = {
      freehand: false,
      selectedFeature: false,
      features: "[]",
      activeElement: props.elements[0] ? props.elements[0].id : 0,
      activeStyle: props.elements[0] ? props.elements[0].styleId : 0,
      selectMode: "modify"
    };
    _this.interaction = null;
    _this.changeJSON = _this.changeJSON.bind(_this);
    _this.resetInteraction = _this.resetInteraction.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(EditorView, _Component);
  return (0, _createClass2["default"])(EditorView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      if (this.props.mode !== "select" && this.props.active) {
        this.resetInteraction();
        var geometry;
        switch (this.props.mode) {
          case "Point":
            geometry = new _geom.Point(0, 0);
            break;
          case "LineString":
            geometry = new _geom.LineString([[0, 0], [1, 1]]);
            break;
          case "Polygon":
            geometry = new _geom.Polygon([[0, 0], [1, 1]]);
        }
        var feature = new _ol.Feature(geometry);
        feature.set('locstyle', this.state.activeStyle);
        this.interaction = new _interaction.Draw({
          // features: this.props.features,
          source: this.props.editorLayer.getSource(),
          type: this.props.mode,
          snapTolerance: 1,
          style: this.props.styleFunction(feature),
          freehand: this.state.freehand
        });
        this.interaction.on('drawend', function (event) {
          event.feature.set('editorId', _this2.props.editorId);
          event.feature.set('locstyle', _this2.state.activeStyle);
          event.feature.set('elementId', _this2.state.activeElement);
          var geojson;
          if (_this2.props.mode === "Circle") {
            //turn Circle into valid GeoJSON
            var _geometry = event.feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");
            var center = _geometry.getCenter();
            var radius = event.feature.getGeometry().getRadius();
            var realRadius = _c4gMapsUtils.utils.measureGeometry(event.feature.getGeometry()).rawValue;
            geojson = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              properties: {
                editorId: _this2.props.editorId,
                elementId: _this2.state.activeElement,
                locstyle: _this2.state.activeStyle,
                radius: radius,
                realRadius: realRadius
              }
            };
          } else {
            geojson = new _format.GeoJSON().writeFeatureObject(event.feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }
          var params = {
            source: _this2.props.editorLayer.getSource(),
            geojson: geojson,
            event: event,
            format: new _format.GeoJSON()
          };
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_draw, params);
          _this2.props.addFeature(geojson);
          _this2.props.countEditorId();
        });

        // add interaction to map
        this.props.mapController.map.addInteraction(this.interaction);
      } else if (this.props.mode === "select" && this.props.active) {
        this.resetInteraction();
        this.interaction = [];
        this.interaction.push(new _interaction.Select({
          layers: [this.props.editorLayer],
          hitTolerance: 20
        }));
        this.interaction.push(new _interaction.Modify({
          features: this.state.selectedFeature ? new _ol.Collection([this.state.selectedFeature]) : new _ol.Collection([new _ol.Feature()]),
          // source: this.props.editorLayer.getSource(),
          pixelTolerance: 20
        }));
        this.interaction[0].on('select', function (e) {
          var feature = e.selected[0];
          _this2.setState({
            selectedFeature: feature
          });
        });
        this.interaction[1].on('modifyend', function (e) {
          var feature = e.features.getArray()[0];
          var geojson;
          if (feature.getGeometry() instanceof _geom.Circle) {
            //turn Circle into valid GeoJSON
            var _geometry2 = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");
            var center = _geometry2.getCenter();
            var radius = feature.getGeometry().getRadius();
            var realRadius = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry()).rawValue;
            geojson = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              properties: {
                editorId: feature.get('editorId'),
                elementId: feature.get('elementId'),
                locstyle: feature.get('activeStyle'),
                radius: radius,
                realRadius: realRadius
              }
            };
          } else {
            geojson = new _format.GeoJSON().writeFeatureObject(feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }
          var params = {
            source: _this2.props.editorLayer.getSource(),
            geojson: geojson,
            event: e,
            format: new _format.GeoJSON()
          };
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_modify, params);
          _this2.props.modifyFeature(geojson);
        });
        this.props.mapController.map.addInteraction(this.interaction[0]);
        this.props.mapController.map.addInteraction(this.interaction[1]);
      } else {
        this.resetInteraction();
      }
      var elements = null;
      if (this.props.elements && this.props.elements.length > 0) {
        elements = this.props.elements.map(function (element) {
          var color, styleTriggerLabel;
          var locstyle = _this2.props.styleData.arrLocStyles[element.styleId];
          var styleData = locstyle.locStyleArr;
          var styleType = styleData ? styleData.styletype : "default";
          if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
            styleTriggerLabel = /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
              tooltip: element.name,
              styleData: _this2.props.styleData,
              styleId: element.styleId
            });
          } else {
            var stylor = locstyle.style && locstyle.style(new _ol.Feature({
              geometry: new _geom.Point(0, 0)
            }), "EPSG:4326") ? locstyle.style(new _ol.Feature({
              geometry: new _geom.Point(0, 0)
            }), "EPSG:4326") : null;
            var featureStyle = Array.isArray(stylor) ? stylor[0] : stylor;
            if (featureStyle && featureStyle.getFill() && featureStyle.getStroke()) {
              color = featureStyle.getFill().getColor();
            } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
              color = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
            }
            styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
              title: element.name,
              className: "c4g-editor-locstyle",
              style: {
                "backgroundColor": color
              }
            });
          }
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: element.id,
            style: {
              height: "32px",
              width: "32px"
            },
            onMouseUp: function onMouseUp() {
              _this2.setState({
                activeElement: element.id,
                activeStyle: element.styleId
              });
            }
          }, styleTriggerLabel);
        });
      }
      var customButton = null;
      if ("LineStringPolygon".includes(this.props.mode)) {
        var freehandClass = "c4g-editor-view ";
        freehandClass += this.state.freehand ? "c4g-active" : "c4g-inactive";
        customButton = /*#__PURE__*/_react["default"].createElement("a", {
          className: freehandClass,
          title: this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND,
          onMouseUp: function onMouseUp() {
            _this2.changeFreehand();
          }
        }, this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND);
      }
      var arrFormEditorVars = [];
      if (this.state.selectedFeature && this.props.mode === "select") {
        customButton = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-editor-mode-switcher"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          title: this.props.lang.EDITOR_FEATURE_DELETE,
          className: "c4g-editor-feature-delete " + (this.state.selectMode === "remove" ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.removeActiveFeature();
          }
        }));
        for (var i in this.props.editorVars) {
          if (this.props.editorVars.hasOwnProperty(i)) {
            var editorVar = this.props.editorVars[i];
            if (editorVar.caption && editorVar.key) {
              var value = this.state.selectedFeature.get(editorVar.key) ? this.state.selectedFeature.get(editorVar.key) : "";
              arrFormEditorVars.push(/*#__PURE__*/_react["default"].createElement("form", {
                className: "c4g-editor-vars-input",
                key: i,
                onSubmit: function onSubmit(event) {
                  event.preventDefault();
                }
              }, /*#__PURE__*/_react["default"].createElement("label", null, editorVar.caption, ":", /*#__PURE__*/_react["default"].createElement("input", {
                type: "text",
                value: value,
                name: editorVar.key,
                onChange: function onChange(event) {
                  _this2.handleVarChange(event);
                }
              }))));
            }
          }
        }
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, customButton, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-element-selection"
      }, elements)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-vars"
      }, arrFormEditorVars));
    }
  }, {
    key: "resetInteraction",
    value: function resetInteraction() {
      if (this.interaction) {
        //only one drawinteraction at a time
        if (Array.isArray(this.interaction)) {
          this.props.mapController.map.removeInteraction(this.interaction[0]);
          this.props.mapController.map.removeInteraction(this.interaction[1]);
        } else {
          this.props.mapController.map.removeInteraction(this.interaction);
        }
      }
    }
  }, {
    key: "removeActiveFeature",
    value: function removeActiveFeature() {
      var geojson = new _format.GeoJSON().writeFeatureObject(this.state.selectedFeature, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      });
      this.props.removeFeature(geojson);
      var source = this.props.editorLayer.getSource();
      source.removeFeature(this.state.selectedFeature);
      this.setState({
        selectedFeature: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (this.props.elements[0] && prevProps.mode !== this.props.mode) {
        if (this.state.activeElement === 0) {
          this.setState({
            activeElement: this.props.elements[0].id,
            activeStyle: this.props.elements[0].styleId
          });
          //  this.state.activeElement = this.props.elements[0].id
          //  this.state.activeStyle = this.props.elements[0].styleId
        } else if (!this.props.elements.find(function (element) {
          return element.id === _this3.state.activeElement;
        })) {
          this.setState({
            activeElement: this.props.elements[0].id,
            activeStyle: this.props.elements[0].styleId
          });
          // this.state.activeElement = this.props.elements[0].id
          // this.state.activeStyle = this.props.elements[0].styleId
        }
      }
    }
  }, {
    key: "changeSelectMode",
    value: function changeSelectMode(string) {
      this.setState({
        selectMode: string
      });
    }
  }, {
    key: "handleVarChange",
    value: function handleVarChange(event) {
      var value = event.target.value;
      var name = event.target.name;
      this.state.selectedFeature.set(name, value);
      var geojson = new _format.GeoJSON().writeFeatureObject(this.state.selectedFeature, {
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      });
      this.props.modifyFeature(geojson);
      this.setState({
        "selectedFeature": this.state.selectedFeature
      });
    }
  }, {
    key: "changeFreehand",
    value: function changeFreehand() {
      this.setState({
        freehand: !this.state.freehand
      });
    }
  }, {
    key: "changeJSON",
    value: function changeJSON(event) {
      this.setState({
        features: event.target.value
      });
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-starboard-style.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-style.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gStarboardStyle = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gStarboardStyle = exports.C4gStarboardStyle = /*#__PURE__*/function (_Component) {
  function C4gStarboardStyle(props) {
    (0, _classCallCheck2["default"])(this, C4gStarboardStyle);
    return _callSuper(this, C4gStarboardStyle, [props]);
  }
  (0, _inherits2["default"])(C4gStarboardStyle, _Component);
  return (0, _createClass2["default"])(C4gStarboardStyle, [{
    key: "enterEvent",
    value: function enterEvent(e) {
      if (e.which === 13) {
        this.props.clickEvent(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      // Create label for interaction-trigger
      var styleTriggerLabel = null;
      var locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
      var styleData = locstyle.locStyleArr;
      var stylor = locstyle.style && locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") ? locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") : null;
      var styl0r = Array.isArray(stylor) ? stylor[0] : stylor;
      var styleType = styleData ? styleData.styletype : "default";
      var tooltip = this.props.tooltip || "";
      if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
        var styleIcon = null;
        var iconSrc;
        if (styleData.icon_src && styleData.icon_src.indexOf('.') !== -1 || styleData.svgSrc && styleData.svgSrc.indexOf('.') !== -1) {
          if (styleType === "cust_icon" || styleType === "photo") {
            iconSrc = styleData.icon_src;
          } else {
            iconSrc = styleData.svgSrc;
          }
          styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
            src: iconSrc,
            style: {
              height: 25,
              width: 25
            }
          });
        } else if (styl0r) {
          var styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage() : null;
          if (styleImage && styleImage.getSrc()) {
            styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
              src: styleImage.getSrc(),
              style: {
                height: 25,
                width: 25
              }
            });
          } else {
            return null;
          }
        }
        if (this.props.clickEvent) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            tabIndex: 1,
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip,
            onKeyPress: function onKeyPress(event) {
              return _this.enterEvent(event);
            },
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          }, styleIcon);
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip
          }, styleIcon);
        }
      } else {
        var cssClass;
        switch (styleType) {
          // 'point', 'square', 'star', 'x', 'cross', 'triangle'
          case "point":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_POINT;
            break;
          case "square":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_SQUARE;
            break;
          case "star":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_STAR;
            break;
          case "x":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_X;
            break;
          case "cross":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_CROSS;
            break;
          case "triangle":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;
            break;
          default:
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE;
            break;
        }
        var color, bordercolor;
        if (styl0r && styl0r.getFill() && styl0r.getStroke()) {
          color = styl0r.getFill().getColor();
          bordercolor = styl0r.getStroke().getColor();
        } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
          color = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
          bordercolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]);
        }
        var styleElements = {
          "--var-color": color,
          "--var-bordercolor": bordercolor
        };
        if (this.props.clickEvent) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          });
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: tooltip
          });
        }
      }
      return styleTriggerLabel;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLXZpZXdfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsT0FBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEdBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sWUFBQSxHQUFBTixtQkFBQTtBQUVBLElBQUFPLGFBQUEsR0FBQVAsbUJBQUE7QUFDQSxJQUFBUSxrQkFBQSxHQUFBUixtQkFBQTtBQUNBLElBQUFTLG1CQUFBLEdBQUFULG1CQUFBO0FBQ0EsSUFBQVUsd0JBQUEsR0FBQVYsbUJBQUE7QUFBMkQsU0FBQUQsd0JBQUFZLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFkLHVCQUFBLFlBQUFBLHdCQUFBWSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxj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QWM7WUFBQzlELEtBQUssRUFBRVosT0FBUTtZQUFDZ0IsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUd6RSxLQUFLO2NBQUEsT0FBSXhDLEtBQUksQ0FBQ0QsS0FBSyxDQUFDcUosVUFBVSxDQUFDNUcsS0FBSyxDQUFDO1lBQUE7VUFBQyxDQUFDLENBQUM7UUFDN0ksQ0FBQyxNQUNJO1VBQ0RpRCxpQkFBaUIsZ0JBQUd6SSxNQUFBLFlBQUErSSxhQUFBO1lBQU1lLFNBQVMsRUFBRXFELFFBQVM7WUFBQzlILEtBQUssRUFBRXNJLGFBQWM7WUFBQzlELEtBQUssRUFBRVo7VUFBUSxDQUFDLENBQUM7UUFDMUY7TUFDSjtNQUNBLE9BQU9SLGlCQUFpQjtJQUM1QjtFQUFDO0FBQUEsRUExRmtDcUQsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3Itdmlldy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnQsIExpbmVTdHJpbmcsIFBvbHlnb24sIENpcmNsZX0gZnJvbSAnb2wvZ2VvbSdcbmltcG9ydCB7RHJhdywgU2VsZWN0LCBNb2RpZnksIFNuYXB9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeFwiO1xuaW1wb3J0IHtDNGdQb3B1cENvbnRyb2xsZXJ9IGZyb20gXCIuLy4uL2M0Zy1wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvclZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZnJlZWhhbmQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBmYWxzZSxcbiAgICAgIGZlYXR1cmVzOiBcIltdXCIsXG4gICAgICBhY3RpdmVFbGVtZW50OiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLmlkIDogMCxcbiAgICAgIGFjdGl2ZVN0eWxlOiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWQgOiAwLFxuICAgICAgc2VsZWN0TW9kZTogXCJtb2RpZnlcIlxuICAgIH07XG4gICAgdGhpcy5pbnRlcmFjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jaGFuZ2VKU09OID0gdGhpcy5jaGFuZ2VKU09OLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEludGVyYWN0aW9uID0gdGhpcy5yZXNldEludGVyYWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgICAgbGV0IGdlb21ldHJ5O1xuICAgICAgc3dpdGNoKHRoaXMucHJvcHMubW9kZSkge1xuICAgICAgICBjYXNlIFwiUG9pbnRcIjpcbiAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBQb2ludCgwLDApO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6XG4gICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgTGluZVN0cmluZyhbWzAsMF0sIFsxLDFdXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQb2x5Z29uXCI6XG4gICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgUG9seWdvbihbWzAsMF0sIFsxLDFdXSlcbiAgICAgIH1cbiAgICAgIGxldCBmZWF0dXJlID0gbmV3IEZlYXR1cmUoZ2VvbWV0cnkpO1xuICAgICAgZmVhdHVyZS5zZXQoJ2xvY3N0eWxlJywgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSlcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG5cbiAgICAgICAgLy8gZmVhdHVyZXM6IHRoaXMucHJvcHMuZmVhdHVyZXMsXG4gICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5tb2RlLFxuICAgICAgICBzbmFwVG9sZXJhbmNlOiAxLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZUZ1bmN0aW9uKGZlYXR1cmUpLFxuICAgICAgICBmcmVlaGFuZDogdGhpcy5zdGF0ZS5mcmVlaGFuZFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnZWRpdG9ySWQnLCB0aGlzLnByb3BzLmVkaXRvcklkKTtcbiAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnbG9jc3R5bGUnLCB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlKTtcbiAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnZWxlbWVudElkJywgdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICBsZXQgZ2VvanNvbjtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcIkNpcmNsZVwiKSB7IC8vdHVybiBDaXJjbGUgaW50byB2YWxpZCBHZW9KU09OXG4gICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKS50cmFuc2Zvcm0oXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFJhZGl1cygpO1xuICAgICAgICAgICAgbGV0IHJlYWxSYWRpdXMgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpKS5yYXdWYWx1ZTtcbiAgICAgICAgICAgIGdlb2pzb24gPSB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBlZGl0b3JJZDogdGhpcy5wcm9wcy5lZGl0b3JJZCxcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICBsb2NzdHlsZTogdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgICByZWFsUmFkaXVzOiByZWFsUmFkaXVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGV2ZW50LmZlYXR1cmUsIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIGdlb2pzb246IGdlb2pzb24sXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBmb3JtYXQ6IG5ldyBHZW9KU09OKClcbiAgICAgICAgICB9XG4gICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9kcmF3LCBwYXJhbXMpO1xuICAgICAgICAgIHRoaXMucHJvcHMuYWRkRmVhdHVyZShnZW9qc29uKVxuICAgICAgICAgIHRoaXMucHJvcHMuY291bnRFZGl0b3JJZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyBhZGQgaW50ZXJhY3Rpb24gdG8gbWFwXG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IFtdO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbi5wdXNoKG5ldyBTZWxlY3Qoe1xuICAgICAgICBsYXllcnM6IFt0aGlzLnByb3BzLmVkaXRvckxheWVyXSxcbiAgICAgICAgaGl0VG9sZXJhbmNlOiAyMFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbi5wdXNoKG5ldyBNb2RpZnkoe1xuICAgICAgICBmZWF0dXJlczogdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUgPyBuZXcgQ29sbGVjdGlvbihbdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmVdKSA6IG5ldyBDb2xsZWN0aW9uKFtuZXcgRmVhdHVyZSgpXSksXG4gICAgICAgIC8vIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgcGl4ZWxUb2xlcmFuY2U6IDIwXG4gICAgICB9KSk7XG5cbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25bMF0ub24oJ3NlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gZS5zZWxlY3RlZFswXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRGZWF0dXJlOiBmZWF0dXJlfSk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5pbnRlcmFjdGlvblsxXS5vbignbW9kaWZ5ZW5kJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBlLmZlYXR1cmVzLmdldEFycmF5KClbMF07XG4gICAgICAgIGxldCBnZW9qc29uO1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpIGluc3RhbmNlb2YgQ2lyY2xlKSB7IC8vdHVybiBDaXJjbGUgaW50byB2YWxpZCBHZW9KU09OXG4gICAgICAgICAgbGV0IGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCkudHJhbnNmb3JtKFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpO1xuICAgICAgICAgIGxldCBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICBsZXQgcmFkaXVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFJhZGl1cygpO1xuICAgICAgICAgIGxldCByZWFsUmFkaXVzID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkucmF3VmFsdWU7XG4gICAgICAgICAgZ2VvanNvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBlZGl0b3JJZDogZmVhdHVyZS5nZXQoJ2VkaXRvcklkJyksXG4gICAgICAgICAgICAgIGVsZW1lbnRJZDogZmVhdHVyZS5nZXQoJ2VsZW1lbnRJZCcpLFxuICAgICAgICAgICAgICBsb2NzdHlsZTogZmVhdHVyZS5nZXQoJ2FjdGl2ZVN0eWxlJyksXG4gICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICAgICAgICByZWFsUmFkaXVzOiByZWFsUmFkaXVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdChmZWF0dXJlLCB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICBzb3VyY2U6IHRoaXMucHJvcHMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCksXG4gICAgICAgICAgZ2VvanNvbjogZ2VvanNvbixcbiAgICAgICAgICBldmVudDogZSxcbiAgICAgICAgICBmb3JtYXQ6IG5ldyBHZW9KU09OKClcbiAgICAgICAgfTtcbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9tb2RpZnksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShnZW9qc29uKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uWzBdKTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvblsxXSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgfVxuICAgIGxldCBlbGVtZW50cyA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZWxlbWVudHMgJiYgdGhpcy5wcm9wcy5lbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBlbGVtZW50cyA9IHRoaXMucHJvcHMuZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBjb2xvciwgc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1tlbGVtZW50LnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPEM0Z1N0YXJib2FyZFN0eWxlIHRvb2x0aXA9e2VsZW1lbnQubmFtZX0gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17ZWxlbWVudC5zdHlsZUlkfS8+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICAgIGxldCBmZWF0dXJlU3R5bGUgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgICBpZiAoZmVhdHVyZVN0eWxlICYmIGZlYXR1cmVTdHlsZS5nZXRGaWxsKCkgJiYgZmVhdHVyZVN0eWxlLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICBjb2xvciA9IGZlYXR1cmVTdHlsZS5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiB0aXRsZT17ZWxlbWVudC5uYW1lfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1sb2NzdHlsZVwifSBzdHlsZT17e1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIiA6IGNvbG9yXG4gICAgICAgICAgfX0vPjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuICg8YnV0dG9uIGtleT17ZWxlbWVudC5pZH0gc3R5bGU9e3toZWlnaHQ6IFwiMzJweFwiLCB3aWR0aDogXCIzMnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9Pnt0aGlzLnNldFN0YXRlKHthY3RpdmVFbGVtZW50OiBlbGVtZW50LmlkLCBhY3RpdmVTdHlsZTogZWxlbWVudC5zdHlsZUlkfSl9fT5cbiAgICAgICAgICB7c3R5bGVUcmlnZ2VyTGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPilcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgbGV0IGN1c3RvbUJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKFwiTGluZVN0cmluZ1BvbHlnb25cIi5pbmNsdWRlcyh0aGlzLnByb3BzLm1vZGUpKSB7XG4gICAgICBsZXQgZnJlZWhhbmRDbGFzcyA9IFwiYzRnLWVkaXRvci12aWV3IFwiO1xuICAgICAgZnJlZWhhbmRDbGFzcyArPSB0aGlzLnN0YXRlLmZyZWVoYW5kID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgY3VzdG9tQnV0dG9uID0gKDxhIGNsYXNzTmFtZT17ZnJlZWhhbmRDbGFzc30gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5FRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkR9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuY2hhbmdlRnJlZWhhbmQoKX19Pnt0aGlzLnByb3BzLmxhbmcuRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EfTwvYT4pO1xuICAgIH1cbiAgICBsZXQgYXJyRm9ybUVkaXRvclZhcnMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICBjdXN0b21CdXR0b24gPSAoPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuRURJVE9SX0ZFQVRVUkVfREVMRVRFfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1mZWF0dXJlLWRlbGV0ZSBcIiArICh0aGlzLnN0YXRlLnNlbGVjdE1vZGUgPT09IFwicmVtb3ZlXCIgPyBcImM0Zy1hY3RpdmVcIjogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMucmVtb3ZlQWN0aXZlRmVhdHVyZSgpfX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5lZGl0b3JWYXJzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVkaXRvclZhcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgZWRpdG9yVmFyID0gdGhpcy5wcm9wcy5lZGl0b3JWYXJzW2ldO1xuICAgICAgICAgIGlmIChlZGl0b3JWYXIuY2FwdGlvbiAmJiBlZGl0b3JWYXIua2V5KSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5nZXQoZWRpdG9yVmFyLmtleSkgPyB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5nZXQoZWRpdG9yVmFyLmtleSkgOiBcIlwiO1xuICAgICAgICAgICAgYXJyRm9ybUVkaXRvclZhcnMucHVzaChcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12YXJzLWlucHV0XCJ9IGtleT17aX0gb25TdWJtaXQ9eyhldmVudCkgPT4ge2V2ZW50LnByZXZlbnREZWZhdWx0KCl9fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2VkaXRvclZhci5jYXB0aW9ufTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBuYW1lPXtlZGl0b3JWYXIua2V5fSBvbkNoYW5nZT17KGV2ZW50KT0+e3RoaXMuaGFuZGxlVmFyQ2hhbmdlKGV2ZW50KX19Lz5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2N1c3RvbUJ1dHRvbn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWVsZW1lbnQtc2VsZWN0aW9uXCJ9PlxuICAgICAgICAgICAge2VsZW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12YXJzXCJ9PlxuICAgICAgICAgIHthcnJGb3JtRWRpdG9yVmFyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlc2V0SW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb24pIHsgLy9vbmx5IG9uZSBkcmF3aW50ZXJhY3Rpb24gYXQgYSB0aW1lXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmludGVyYWN0aW9uKSkge1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWN0aXZlRmVhdHVyZSAoKSB7XG4gICAgbGV0IGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdCh0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5yZW1vdmVGZWF0dXJlKGdlb2pzb24pO1xuICAgIGxldCBzb3VyY2UgPSB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpO1xuICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRmVhdHVyZTogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVsZW1lbnRzWzBdICYmIHByZXZQcm9wcy5tb2RlICE9PSB0aGlzLnByb3BzLm1vZGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZFxuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuZWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTZWxlY3RNb2RlKHN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0TW9kZTogc3RyaW5nXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVWYXJDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5zZXQobmFtZSwgdmFsdWUpO1xuICAgIGxldCBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUsIHtcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICB9KVxuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShnZW9qc29uKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkRmVhdHVyZVwiIDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmV9KTtcbiAgfVxuXG4gIGNoYW5nZUZyZWVoYW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZnJlZWhhbmQ6ICF0aGlzLnN0YXRlLmZyZWVoYW5kXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUpTT04oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlczogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGVudGVyRXZlbnQgKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgbGV0IHN0eWxlVHJpZ2dlckxhYmVsID0gbnVsbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICBsZXQgc3R5bDByID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGxldCB0b29sdGlwID0gdGhpcy5wcm9wcy50b29sdGlwIHx8IFwiXCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWNvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaWNvblNyYztcbiAgICAgICAgICAgIGlmICgoc3R5bGVEYXRhLmljb25fc3JjICYmIHN0eWxlRGF0YS5pY29uX3NyYy5pbmRleE9mKCcuJykgIT09IC0xKSB8fCAoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuc3ZnU3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLmljb25fc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtpY29uU3JjfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19IC8+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsMHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVJbWFnZSA9IHN0eWwwci5nZXRJbWFnZSAmJiB0eXBlb2Ygc3R5bDByLmdldEltYWdlID09PSBcImZ1bmN0aW9uXCIgJiYgc3R5bDByLmdldEltYWdlKCkgPyBzdHlsMHIuZ2V0SW1hZ2UoKTogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVJbWFnZSAmJiBzdHlsZUltYWdlLmdldFNyYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtzdHlsZUltYWdlLmdldFNyYygpfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIHRhYkluZGV4PXsxfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMuZW50ZXJFdmVudChldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHsgLy8gJ3BvaW50JywgJ3NxdWFyZScsICdzdGFyJywgJ3gnLCAnY3Jvc3MnLCAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1RBUjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1g7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb2xvciwgYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBpZiAoc3R5bDByICYmIHN0eWwwci5nZXRGaWxsKCkgJiYgc3R5bDByLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBzdHlsMHIuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSBzdHlsMHIuZ2V0U3Ryb2tlKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvclswXSwgc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0eWxlRWxlbWVudHMgPSB7XG4gICAgICAgICAgICAgICAgXCItLXZhci1jb2xvclwiIDogY29sb3IsXG4gICAgICAgICAgICAgICAgXCItLXZhci1ib3JkZXJjb2xvclwiIDogYm9yZGVyY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9sYXllciIsIl9zb3VyY2UiLCJfZm9ybWF0IiwiX29sIiwiX2dlb20iLCJfaW50ZXJhY3Rpb24iLCJfYzRnTWFwc1V0aWxzIiwiX2M0Z1N0YXJib2FyZFN0eWxlIiwiX2M0Z1BvcHVwQ29udHJvbGxlciIsIl9jNGdNYXBzTWlzY1Rvb2x0aXBwb3B1cCIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkVkaXRvclZpZXciLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJzdGF0ZSIsImZyZWVoYW5kIiwic2VsZWN0ZWRGZWF0dXJlIiwiZmVhdHVyZXMiLCJhY3RpdmVFbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsImFjdGl2ZVN0eWxlIiwic3R5bGVJZCIsInNlbGVjdE1vZGUiLCJpbnRlcmFjdGlvbiIsImNoYW5nZUpTT04iLCJiaW5kIiwicmVzZXRJbnRlcmFjdGlvbiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJtb2RlIiwiYWN0aXZlIiwiZ2VvbWV0cnkiLCJQb2ludCIsIkxpbmVTdHJpbmciLCJQb2x5Z29uIiwiZmVhdHVyZSIsIkZlYXR1cmUiLCJEcmF3Iiwic291cmNlIiwiZWRpdG9yTGF5ZXIiLCJnZXRTb3VyY2UiLCJ0eXBlIiwic25hcFRvbGVyYW5jZSIsInN0eWxlIiwic3R5bGVGdW5jdGlvbiIsIm9uIiwiZXZlbnQiLCJlZGl0b3JJZCIsImdlb2pzb24iLCJnZXRHZW9tZXRyeSIsImNsb25lIiwidHJhbnNmb3JtIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwicmFkaXVzIiwiZ2V0UmFkaXVzIiwicmVhbFJhZGl1cyIsInV0aWxzIiwibWVhc3VyZUdlb21ldHJ5IiwicmF3VmFsdWUiLCJjb29yZGluYXRlcyIsInByb3BlcnRpZXMiLCJlbGVtZW50SWQiLCJsb2NzdHlsZSIsIkdlb0pTT04iLCJ3cml0ZUZlYXR1cmVPYmplY3QiLCJkYXRhUHJvamVjdGlvbiIsImZlYXR1cmVQcm9qZWN0aW9uIiwicGFyYW1zIiwiZm9ybWF0IiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJob29rX2VkaXRvcl9kcmF3IiwiYWRkRmVhdHVyZSIsImNvdW50RWRpdG9ySWQiLCJtYXBDb250cm9sbGVyIiwibWFwIiwiYWRkSW50ZXJhY3Rpb24iLCJwdXNoIiwiU2VsZWN0IiwibGF5ZXJzIiwiaGl0VG9sZXJhbmNlIiwiTW9kaWZ5IiwiQ29sbGVjdGlvbiIsInBpeGVsVG9sZXJhbmNlIiwic2VsZWN0ZWQiLCJzZXRTdGF0ZSIsImdldEFycmF5IiwiQ2lyY2xlIiwiaG9va19lZGl0b3JfbW9kaWZ5IiwibW9kaWZ5RmVhdHVyZSIsImxlbmd0aCIsImVsZW1lbnQiLCJjb2xvciIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVEYXRhIiwiYXJyTG9jU3R5bGVzIiwibG9jU3R5bGVBcnIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJjcmVhdGVFbGVtZW50IiwiQzRnU3RhcmJvYXJkU3R5bGUiLCJ0b29sdGlwIiwibmFtZSIsInN0eWxvciIsImZlYXR1cmVTdHlsZSIsIkFycmF5IiwiaXNBcnJheSIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJnZXRDb2xvciIsImZpbGxjb2xvciIsInN0cm9rZWNvbG9yIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwidGl0bGUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uTW91c2VVcCIsImN1c3RvbUJ1dHRvbiIsImluY2x1ZGVzIiwiZnJlZWhhbmRDbGFzcyIsImxhbmciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJjaGFuZ2VGcmVlaGFuZCIsImFyckZvcm1FZGl0b3JWYXJzIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwicmVtb3ZlQWN0aXZlRmVhdHVyZSIsImVkaXRvclZhcnMiLCJlZGl0b3JWYXIiLCJjYXB0aW9uIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiaGFuZGxlVmFyQ2hhbmdlIiwiRnJhZ21lbnQiLCJyZW1vdmVJbnRlcmFjdGlvbiIsInJlbW92ZUZlYXR1cmUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIl90aGlzMyIsImZpbmQiLCJjaGFuZ2VTZWxlY3RNb2RlIiwic3RyaW5nIiwidGFyZ2V0IiwiQ29tcG9uZW50IiwiX0ZlYXR1cmUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2M0Z01hcHNDb25zdGFudCIsImVudGVyRXZlbnQiLCJ3aGljaCIsImNsaWNrRXZlbnQiLCJzdHlsMHIiLCJzdHlsZUljb24iLCJpY29uU3JjIiwiaWNvbl9zcmMiLCJpbmRleE9mIiwic3ZnU3JjIiwic3JjIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwidGFiSW5kZXgiLCJjc3NDb25zdGFudHMiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJvbktleVByZXNzIiwiY3NzQ2xhc3MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVIiLCJTVEFSQk9BUkRfTE9DU1RZTEVfWCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUyIsIlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRSIsImJvcmRlcmNvbG9yIiwic3R5bGVFbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=