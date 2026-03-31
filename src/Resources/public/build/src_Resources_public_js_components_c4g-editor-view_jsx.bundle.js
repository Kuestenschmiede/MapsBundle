"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-editor-view_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-editor-view.jsx"
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-editor-view.jsx ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-starboard-style.jsx"
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-style.jsx ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLXZpZXdfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsT0FBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEdBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sWUFBQSxHQUFBTixtQkFBQTtBQUVBLElBQUFPLGFBQUEsR0FBQVAsbUJBQUE7QUFDQSxJQUFBUSxrQkFBQSxHQUFBUixtQkFBQTtBQUNBLElBQUFTLG1CQUFBLEdBQUFULG1CQUFBO0FBQ0EsSUFBQVUsd0JBQUEsR0FBQVYsbUJBQUE7QUFBMkQsU0FBQUQsd0JBQUFZLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFkLHVCQUFBLFlBQUFBLHdCQUFBWSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFBQU0sRUFBQSxFQUFBUCxDQUFBLElBQUFDLENBQUEsQ0FBQU0sRUFBQSxJQUFBZCxDQUFBLENBQUFjLEVBQUEsV0FBQU4sQ0FBQSxLQUFBUixDQUFBLEVBQUFDLENBQUE7QUFBQSxTQUFBbUIsV0FBQW5CLENBQUEsRUFBQUssQ0FBQSxFQUFBTixDQUFBLFdBQUFNLENBQUEsT0FBQWUsZ0JBQUEsYUFBQWYsQ0FBQSxPQUFBZ0IsMkJBQUEsYUFBQXJCLENBQUEsRUFBQXNCLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBbkIsQ0FBQSxFQUFBTixDQUFBLFlBQUFxQixnQkFBQSxhQUFBcEIsQ0FBQSxFQUFBeUIsV0FBQSxJQUFBcEIsQ0FBQSxDQUFBcUIsS0FBQSxDQUFBMUIsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUF0QixDQUFBLElBQUEyQixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBM0IsQ0FBQSxhQUFBc0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXRCLENBQUEsVUFwQjNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBc0JxQjhCLFVBQVUsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFFN0IsU0FBQUYsV0FBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxVQUFBO0lBQ2pCSSxLQUFBLEdBQUFmLFVBQUEsT0FBQVcsVUFBQSxHQUFNRyxLQUFLO0lBQ1gsSUFBTUcsS0FBSyxHQUFBRixLQUFPO0lBQ2xCQSxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNYQyxRQUFRLEVBQUUsS0FBSztNQUNmQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsUUFBUSxFQUFFLElBQUk7TUFDZEMsYUFBYSxFQUFFUixLQUFLLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR1QsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEVBQUUsR0FBRyxDQUFDO01BQzNEQyxXQUFXLEVBQUVYLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHVCxLQUFLLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csT0FBTyxHQUFHLENBQUM7TUFDOURDLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFDRFosS0FBQSxDQUFLYSxXQUFXLEdBQUcsSUFBSTtJQUN2QmIsS0FBQSxDQUFLYyxVQUFVLEdBQUdkLEtBQUEsQ0FBS2MsVUFBVSxDQUFDQyxJQUFJLENBQUFmLEtBQUssQ0FBQztJQUM1Q0EsS0FBQSxDQUFLZ0IsZ0JBQWdCLEdBQUdoQixLQUFBLENBQUtnQixnQkFBZ0IsQ0FBQ0QsSUFBSSxDQUFBZixLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBQzNEO0VBQUMsSUFBQWlCLFVBQUEsYUFBQXJCLFVBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUFvQixhQUFBLGFBQUF0QixVQUFBO0lBQUF1QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ1AsSUFBTXBCLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQUksSUFBSSxDQUFDSCxLQUFLLENBQUN3QixJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ3lCLE1BQU0sRUFBRTtRQUNyRCxJQUFJLENBQUNSLGdCQUFnQixDQUFDLENBQUM7UUFDdkIsSUFBSVMsUUFBUTtRQUNaLFFBQU8sSUFBSSxDQUFDMUIsS0FBSyxDQUFDd0IsSUFBSTtVQUNwQixLQUFLLE9BQU87WUFDVkUsUUFBUSxHQUFHLElBQUlDLFdBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ3pCO1VBQ0YsS0FBSyxZQUFZO1lBQ2ZELFFBQVEsR0FBRyxJQUFJRSxnQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QztVQUNGLEtBQUssU0FBUztZQUNaRixRQUFRLEdBQUcsSUFBSUcsYUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQztRQUNBLElBQUlDLE9BQU8sR0FBRyxJQUFJQyxXQUFPLENBQUNMLFFBQVEsQ0FBQztRQUNuQ0ksT0FBTyxDQUFDbkQsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUN5QixLQUFLLENBQUNPLFdBQVcsQ0FBQztRQUMvQyxJQUFJLENBQUNHLFdBQVcsR0FBRyxJQUFJa0IsaUJBQUksQ0FBQztVQUUxQjtVQUNBQyxNQUFNLEVBQUUsSUFBSSxDQUFDakMsS0FBSyxDQUFDa0MsV0FBVyxDQUFDQyxTQUFTLENBQUMsQ0FBQztVQUMxQ0MsSUFBSSxFQUFFLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ3dCLElBQUk7VUFDckJhLGFBQWEsRUFBRSxDQUFDO1VBQ2hCQyxLQUFLLEVBQUUsSUFBSSxDQUFDdEMsS0FBSyxDQUFDdUMsYUFBYSxDQUFDVCxPQUFPLENBQUM7VUFDeEN6QixRQUFRLEVBQUUsSUFBSSxDQUFDRCxLQUFLLENBQUNDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ1MsV0FBVyxDQUFDMEIsRUFBRSxDQUFDLFNBQVMsRUFDM0IsVUFBQ0MsS0FBSyxFQUFLO1VBQ1RBLEtBQUssQ0FBQ1gsT0FBTyxDQUFDbkQsR0FBRyxDQUFDLFVBQVUsRUFBRTRDLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQzBDLFFBQVEsQ0FBQztVQUNsREQsS0FBSyxDQUFDWCxPQUFPLENBQUNuRCxHQUFHLENBQUMsVUFBVSxFQUFFNEMsTUFBSSxDQUFDbkIsS0FBSyxDQUFDTyxXQUFXLENBQUM7VUFDckQ4QixLQUFLLENBQUNYLE9BQU8sQ0FBQ25ELEdBQUcsQ0FBQyxXQUFXLEVBQUU0QyxNQUFJLENBQUNuQixLQUFLLENBQUNJLGFBQWEsQ0FBQztVQUN4RCxJQUFJbUMsT0FBTztVQUNYLElBQUlwQixNQUFJLENBQUN2QixLQUFLLENBQUN3QixJQUFJLEtBQUssUUFBUSxFQUFFO1lBQUU7WUFDbEMsSUFBSUUsU0FBUSxHQUFHZSxLQUFLLENBQUNYLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDdEYsSUFBSUMsTUFBTSxHQUFHckIsU0FBUSxDQUFDc0IsU0FBUyxDQUFDLENBQUM7WUFDakMsSUFBSUMsTUFBTSxHQUFHUixLQUFLLENBQUNYLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsQ0FBQ00sU0FBUyxDQUFDLENBQUM7WUFDcEQsSUFBSUMsVUFBVSxHQUFHQyxtQkFBSyxDQUFDQyxlQUFlLENBQUNaLEtBQUssQ0FBQ1gsT0FBTyxDQUFDYyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNVLFFBQVE7WUFDNUVYLE9BQU8sR0FBRztjQUNSUCxJQUFJLEVBQUUsU0FBUztjQUNmVixRQUFRLEVBQUU7Z0JBQ1JVLElBQUksRUFBRSxPQUFPO2dCQUNibUIsV0FBVyxFQUFFUjtjQUNmLENBQUM7Y0FDRFMsVUFBVSxFQUFFO2dCQUNWZCxRQUFRLEVBQUVuQixNQUFJLENBQUN2QixLQUFLLENBQUMwQyxRQUFRO2dCQUM3QmUsU0FBUyxFQUFFbEMsTUFBSSxDQUFDbkIsS0FBSyxDQUFDSSxhQUFhO2dCQUNuQ2tELFFBQVEsRUFBRW5DLE1BQUksQ0FBQ25CLEtBQUssQ0FBQ08sV0FBVztnQkFDaENzQyxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RFLFVBQVUsRUFBRUE7Y0FDZDtZQUNGLENBQUM7VUFDSCxDQUFDLE1BQU07WUFDTFIsT0FBTyxHQUFHLElBQUlnQixlQUFPLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQ25CLEtBQUssQ0FBQ1gsT0FBTyxFQUFFO2NBQ3hEK0IsY0FBYyxFQUFFLFdBQVc7Y0FDM0JDLGlCQUFpQixFQUFFO1lBQ3JCLENBQUMsQ0FBQztVQUNKO1VBQ0EsSUFBSUMsTUFBTSxHQUFHO1lBQ1g5QixNQUFNLEVBQUVWLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQ2tDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7WUFDMUNRLE9BQU8sRUFBRUEsT0FBTztZQUNoQkYsS0FBSyxFQUFFQSxLQUFLO1lBQ1p1QixNQUFNLEVBQUUsSUFBSUwsZUFBTyxDQUFDO1VBQ3RCLENBQUM7VUFDRFAsbUJBQUssQ0FBQ2EsaUJBQWlCLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxnQkFBZ0IsRUFBRUwsTUFBTSxDQUFDO1VBQ3JFeEMsTUFBSSxDQUFDdkIsS0FBSyxDQUFDcUUsVUFBVSxDQUFDMUIsT0FBTyxDQUFDO1VBQzlCcEIsTUFBSSxDQUFDdkIsS0FBSyxDQUFDc0UsYUFBYSxDQUFDLENBQUM7UUFDNUIsQ0FDRixDQUFDOztRQUVEO1FBQ0EsSUFBSSxDQUFDdEUsS0FBSyxDQUFDdUUsYUFBYSxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUMzRCxXQUFXLENBQUM7TUFFL0QsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDZCxLQUFLLENBQUN3QixJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ3lCLE1BQU0sRUFBRTtRQUM1RCxJQUFJLENBQUNSLGdCQUFnQixDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDSCxXQUFXLEdBQUcsRUFBRTtRQUNyQixJQUFJLENBQUNBLFdBQVcsQ0FBQzRELElBQUksQ0FBQyxJQUFJQyxtQkFBTSxDQUFDO1VBQy9CQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM1RSxLQUFLLENBQUNrQyxXQUFXLENBQUM7VUFDaEMyQyxZQUFZLEVBQUU7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMvRCxXQUFXLENBQUM0RCxJQUFJLENBQUMsSUFBSUksbUJBQU0sQ0FBQztVQUMvQnZFLFFBQVEsRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0UsZUFBZSxHQUFHLElBQUl5RSxjQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMzRSxLQUFLLENBQUNFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsSUFBSXlFLGNBQVUsQ0FBQyxDQUFDLElBQUloRCxXQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDckg7VUFDQWlELGNBQWMsRUFBRTtRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQ2xFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQzFFLENBQUMsRUFBSztVQUN0QyxJQUFJZ0UsT0FBTyxHQUFHaEUsQ0FBQyxDQUFDbUgsUUFBUSxDQUFDLENBQUMsQ0FBQztVQUMzQjFELE1BQUksQ0FBQzJELFFBQVEsQ0FBQztZQUFDNUUsZUFBZSxFQUFFd0I7VUFBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDMEIsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDMUUsQ0FBQyxFQUFLO1VBQ3pDLElBQUlnRSxPQUFPLEdBQUdoRSxDQUFDLENBQUN5QyxRQUFRLENBQUM0RSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN0QyxJQUFJeEMsT0FBTztVQUNYLElBQUliLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsWUFBWXdDLFlBQU0sRUFBRTtZQUFFO1lBQzdDLElBQUkxRCxVQUFRLEdBQUdJLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDaEYsSUFBSUMsTUFBTSxHQUFHckIsVUFBUSxDQUFDc0IsU0FBUyxDQUFDLENBQUM7WUFDakMsSUFBSUMsTUFBTSxHQUFHbkIsT0FBTyxDQUFDYyxXQUFXLENBQUMsQ0FBQyxDQUFDTSxTQUFTLENBQUMsQ0FBQztZQUM5QyxJQUFJQyxVQUFVLEdBQUdDLG1CQUFLLENBQUNDLGVBQWUsQ0FBQ3ZCLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxRQUFRO1lBQ3RFWCxPQUFPLEdBQUc7Y0FDUlAsSUFBSSxFQUFFLFNBQVM7Y0FDZlYsUUFBUSxFQUFFO2dCQUNSVSxJQUFJLEVBQUUsT0FBTztnQkFDYm1CLFdBQVcsRUFBRVI7Y0FDZixDQUFDO2NBQ0RTLFVBQVUsRUFBRTtnQkFDVmQsUUFBUSxFQUFFWixPQUFPLENBQUNwRCxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNqQytFLFNBQVMsRUFBRTNCLE9BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ25DZ0YsUUFBUSxFQUFFNUIsT0FBTyxDQUFDcEQsR0FBRyxDQUFDLGFBQWEsQ0FBQztnQkFDcEN1RSxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RFLFVBQVUsRUFBRUE7Y0FDZDtZQUNGLENBQUM7VUFDSCxDQUFDLE1BQU07WUFDTFIsT0FBTyxHQUFHLElBQUlnQixlQUFPLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQzlCLE9BQU8sRUFBRTtjQUNsRCtCLGNBQWMsRUFBRSxXQUFXO2NBQzNCQyxpQkFBaUIsRUFBRTtZQUNyQixDQUFDLENBQUM7VUFDSjtVQUNBLElBQUlDLE1BQU0sR0FBRztZQUNYOUIsTUFBTSxFQUFFVixNQUFJLENBQUN2QixLQUFLLENBQUNrQyxXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDUSxPQUFPLEVBQUVBLE9BQU87WUFDaEJGLEtBQUssRUFBRTNFLENBQUM7WUFDUmtHLE1BQU0sRUFBRSxJQUFJTCxlQUFPLENBQUM7VUFDdEIsQ0FBQztVQUNEUCxtQkFBSyxDQUFDYSxpQkFBaUIsQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNrQixrQkFBa0IsRUFBRXRCLE1BQU0sQ0FBQztVQUN2RXhDLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQ3NGLGFBQWEsQ0FBQzNDLE9BQU8sQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMzQyxLQUFLLENBQUN1RSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQzNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUNkLEtBQUssQ0FBQ3VFLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDM0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BRWxFLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBQztNQUN6QjtNQUNBLElBQUlSLFFBQVEsR0FBRyxJQUFJO01BQ25CLElBQUksSUFBSSxDQUFDVCxLQUFLLENBQUNTLFFBQVEsSUFBSSxJQUFJLENBQUNULEtBQUssQ0FBQ1MsUUFBUSxDQUFDOEUsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6RDlFLFFBQVEsR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ1MsUUFBUSxDQUFDK0QsR0FBRyxDQUFDLFVBQUNnQixPQUFPLEVBQUs7VUFDOUMsSUFBSUMsS0FBSyxFQUFFQyxpQkFBaUI7VUFDNUIsSUFBSWhDLFFBQVEsR0FBR25DLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQzJGLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDSixPQUFPLENBQUM1RSxPQUFPLENBQUM7VUFDakUsSUFBSStFLFNBQVMsR0FBR2pDLFFBQVEsQ0FBQ21DLFdBQVc7VUFDcEMsSUFBSUMsU0FBUyxHQUFHSCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0ksU0FBUyxHQUFHLFNBQVM7VUFDM0QsSUFBSUosU0FBUyxLQUFLRyxTQUFTLEtBQUssV0FBVyxJQUFJQSxTQUFTLEtBQUssZUFBZSxJQUFJQSxTQUFTLEtBQUssT0FBTyxDQUFDLEVBQUU7WUFDdEdKLGlCQUFpQixnQkFBR3pJLE1BQUEsWUFBQStJLGFBQUEsQ0FBQ3JJLGtCQUFBLENBQUFzSSxpQkFBaUI7Y0FBQ0MsT0FBTyxFQUFFVixPQUFPLENBQUNXLElBQUs7Y0FBQ1IsU0FBUyxFQUFFcEUsTUFBSSxDQUFDdkIsS0FBSyxDQUFDMkYsU0FBVTtjQUFDL0UsT0FBTyxFQUFFNEUsT0FBTyxDQUFDNUU7WUFBUSxDQUFDLENBQUM7VUFDNUgsQ0FBQyxNQUFNO1lBQ0wsSUFBSXdGLE1BQU0sR0FBRzFDLFFBQVEsQ0FBQ3BCLEtBQUssSUFBSW9CLFFBQVEsQ0FBQ3BCLEtBQUssQ0FBQyxJQUFJUCxXQUFPLENBQUM7Y0FBQ0wsUUFBUSxFQUFFLElBQUlDLFdBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHK0IsUUFBUSxDQUFDcEIsS0FBSyxDQUFDLElBQUlQLFdBQU8sQ0FBQztjQUFDTCxRQUFRLEVBQUUsSUFBSUMsV0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUUsSUFBSTtZQUNoTCxJQUFJMEUsWUFBWSxHQUFHQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRUEsTUFBTTtZQUM1RCxJQUFJQyxZQUFZLElBQUlBLFlBQVksQ0FBQ0csT0FBTyxDQUFDLENBQUMsSUFBSUgsWUFBWSxDQUFDSSxTQUFTLENBQUMsQ0FBQyxFQUFFO2NBQ3RFaEIsS0FBSyxHQUFHWSxZQUFZLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLENBQUMsTUFBTSxJQUFJZixTQUFTLElBQUlBLFNBQVMsQ0FBQ2dCLFNBQVMsSUFBSWhCLFNBQVMsQ0FBQ2lCLFdBQVcsRUFBRTtjQUNwRW5CLEtBQUssR0FBR3JDLG1CQUFLLENBQUN5RCx3QkFBd0IsQ0FBQ2xCLFNBQVMsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRWhCLFNBQVMsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RjtZQUVBakIsaUJBQWlCLGdCQUFHekksTUFBQSxZQUFBK0ksYUFBQTtjQUFNYyxLQUFLLEVBQUV0QixPQUFPLENBQUNXLElBQUs7Y0FBQ1ksU0FBUyxFQUFFLHFCQUFzQjtjQUFDekUsS0FBSyxFQUFFO2dCQUN0RixpQkFBaUIsRUFBR21EO2NBQ3RCO1lBQUUsQ0FBQyxDQUFDO1VBQ047VUFHQSxvQkFBUXhJLE1BQUEsWUFBQStJLGFBQUE7WUFBUTVFLEdBQUcsRUFBRW9FLE9BQU8sQ0FBQzlFLEVBQUc7WUFBQzRCLEtBQUssRUFBRTtjQUFDMEUsTUFBTSxFQUFFLE1BQU07Y0FBRUMsS0FBSyxFQUFFO1lBQU0sQ0FBRTtZQUN4REMsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUEsRUFBTztjQUFDM0YsTUFBSSxDQUFDMkQsUUFBUSxDQUFDO2dCQUFDMUUsYUFBYSxFQUFFZ0YsT0FBTyxDQUFDOUUsRUFBRTtnQkFBRUMsV0FBVyxFQUFFNkUsT0FBTyxDQUFDNUU7Y0FBTyxDQUFDLENBQUM7WUFBQTtVQUFFLEdBQ3hHOEUsaUJBQ0ssQ0FBQztRQUNYLENBQUMsQ0FBQztNQUdKO01BQ0EsSUFBSXlCLFlBQVksR0FBRyxJQUFJO01BQ3ZCLElBQUksbUJBQW1CLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNwSCxLQUFLLENBQUN3QixJQUFJLENBQUMsRUFBRTtRQUNqRCxJQUFJNkYsYUFBYSxHQUFHLGtCQUFrQjtRQUN0Q0EsYUFBYSxJQUFJLElBQUksQ0FBQ2pILEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFlBQVksR0FBRyxjQUFjO1FBQ3BFOEcsWUFBWSxnQkFBSWxLLE1BQUEsWUFBQStJLGFBQUE7VUFBR2UsU0FBUyxFQUFFTSxhQUFjO1VBQUNQLEtBQUssRUFBRSxJQUFJLENBQUM5RyxLQUFLLENBQUNzSCxJQUFJLENBQUNDLGlDQUFrQztVQUFDTCxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBQSxFQUFRO1lBQUMzRixNQUFJLENBQUNpRyxjQUFjLENBQUMsQ0FBQztVQUFBO1FBQUUsR0FBRSxJQUFJLENBQUN4SCxLQUFLLENBQUNzSCxJQUFJLENBQUNDLGlDQUFxQyxDQUFFO01BQzNNO01BQ0EsSUFBSUUsaUJBQWlCLEdBQUcsRUFBRTtNQUMxQixJQUFJLElBQUksQ0FBQ3JILEtBQUssQ0FBQ0UsZUFBZSxJQUFJLElBQUksQ0FBQ04sS0FBSyxDQUFDd0IsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM5RDJGLFlBQVksZ0JBQUlsSyxNQUFBLFlBQUErSSxhQUFBO1VBQUtlLFNBQVMsRUFBRTtRQUEyQixnQkFDekQ5SixNQUFBLFlBQUErSSxhQUFBO1VBQVFjLEtBQUssRUFBRSxJQUFJLENBQUM5RyxLQUFLLENBQUNzSCxJQUFJLENBQUNJLHFCQUFzQjtVQUFDWCxTQUFTLEVBQUUsNEJBQTRCLElBQUksSUFBSSxDQUFDM0csS0FBSyxDQUFDUyxVQUFVLEtBQUssUUFBUSxHQUFHLFlBQVksR0FBRSxjQUFjLENBQUU7VUFBQ3FHLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQVE7WUFBQzNGLE1BQUksQ0FBQ29HLG1CQUFtQixDQUFDLENBQUM7VUFBQTtRQUFFLENBQUMsQ0FDak4sQ0FBRTtRQUNQLEtBQUssSUFBSXRKLENBQUMsSUFBSSxJQUFJLENBQUMyQixLQUFLLENBQUM0SCxVQUFVLEVBQUU7VUFDbkMsSUFBSSxJQUFJLENBQUM1SCxLQUFLLENBQUM0SCxVQUFVLENBQUMvSSxjQUFjLENBQUNSLENBQUMsQ0FBQyxFQUFFO1lBQzNDLElBQUl3SixTQUFTLEdBQUcsSUFBSSxDQUFDN0gsS0FBSyxDQUFDNEgsVUFBVSxDQUFDdkosQ0FBQyxDQUFDO1lBQ3hDLElBQUl3SixTQUFTLENBQUNDLE9BQU8sSUFBSUQsU0FBUyxDQUFDekcsR0FBRyxFQUFFO2NBQ3RDLElBQUlDLEtBQUssR0FBRyxJQUFJLENBQUNqQixLQUFLLENBQUNFLGVBQWUsQ0FBQzVCLEdBQUcsQ0FBQ21KLFNBQVMsQ0FBQ3pHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ0UsZUFBZSxDQUFDNUIsR0FBRyxDQUFDbUosU0FBUyxDQUFDekcsR0FBRyxDQUFDLEdBQUcsRUFBRTtjQUM5R3FHLGlCQUFpQixDQUFDL0MsSUFBSSxjQUNsQnpILE1BQUEsWUFBQStJLGFBQUE7Z0JBQU1lLFNBQVMsRUFBRSx1QkFBd0I7Z0JBQUMzRixHQUFHLEVBQUUvQyxDQUFFO2dCQUFDMEosUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUd0RixLQUFLLEVBQUs7a0JBQUNBLEtBQUssQ0FBQ3VGLGNBQWMsQ0FBQyxDQUFDO2dCQUFBO2NBQUUsZ0JBQzlGL0ssTUFBQSxZQUFBK0ksYUFBQSxnQkFDRzZCLFNBQVMsQ0FBQ0MsT0FBTyxFQUFDLEdBQ25CLGVBQUE3SyxNQUFBLFlBQUErSSxhQUFBO2dCQUFPNUQsSUFBSSxFQUFDLE1BQU07Z0JBQUNmLEtBQUssRUFBRUEsS0FBTTtnQkFBQzhFLElBQUksRUFBRTBCLFNBQVMsQ0FBQ3pHLEdBQUk7Z0JBQUM2RyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR3hGLEtBQUssRUFBRztrQkFBQ2xCLE1BQUksQ0FBQzJHLGVBQWUsQ0FBQ3pGLEtBQUssQ0FBQztnQkFBQTtjQUFFLENBQUMsQ0FDbkcsQ0FDSCxDQUNWLENBQUM7WUFDSDtVQUNGO1FBQ0Y7TUFFRjtNQUVBLG9CQUNFeEYsTUFBQSxZQUFBK0ksYUFBQSxDQUFDL0ksTUFBQSxXQUFLLENBQUNrTCxRQUFRLHFCQUNibEwsTUFBQSxZQUFBK0ksYUFBQSxjQUNHbUIsWUFBWSxlQUNibEssTUFBQSxZQUFBK0ksYUFBQTtRQUFLZSxTQUFTLEVBQUU7TUFBK0IsR0FDNUN0RyxRQUNFLENBQ0YsQ0FBQyxlQUNOeEQsTUFBQSxZQUFBK0ksYUFBQTtRQUFLZSxTQUFTLEVBQUU7TUFBa0IsR0FDL0JVLGlCQUNFLENBQ1MsQ0FBQztJQUVyQjtFQUFDO0lBQUFyRyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSixnQkFBZ0JBLENBQUEsRUFBRztNQUNqQixJQUFJLElBQUksQ0FBQ0gsV0FBVyxFQUFFO1FBQUU7UUFDdEIsSUFBSXdGLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ3pGLFdBQVcsQ0FBQyxFQUFFO1VBQ25DLElBQUksQ0FBQ2QsS0FBSyxDQUFDdUUsYUFBYSxDQUFDQyxHQUFHLENBQUM0RCxpQkFBaUIsQ0FBQyxJQUFJLENBQUN0SCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbkUsSUFBSSxDQUFDZCxLQUFLLENBQUN1RSxhQUFhLENBQUNDLEdBQUcsQ0FBQzRELGlCQUFpQixDQUFDLElBQUksQ0FBQ3RILFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDLE1BQ0k7VUFDSCxJQUFJLENBQUNkLEtBQUssQ0FBQ3VFLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDNEQsaUJBQWlCLENBQUMsSUFBSSxDQUFDdEgsV0FBVyxDQUFDO1FBQ2xFO01BQ0Y7SUFDRjtFQUFDO0lBQUFNLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzRyxtQkFBbUJBLENBQUEsRUFBSTtNQUNyQixJQUFJaEYsT0FBTyxHQUFHLElBQUlnQixlQUFPLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUN4RCxLQUFLLENBQUNFLGVBQWUsRUFBRTtRQUN6RXVELGNBQWMsRUFBRSxXQUFXO1FBQzNCQyxpQkFBaUIsRUFBRTtNQUNyQixDQUFDLENBQUM7TUFDRixJQUFJLENBQUM5RCxLQUFLLENBQUNxSSxhQUFhLENBQUMxRixPQUFPLENBQUM7TUFDakMsSUFBSVYsTUFBTSxHQUFHLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ2tDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7TUFDL0NGLE1BQU0sQ0FBQ29HLGFBQWEsQ0FBQyxJQUFJLENBQUNqSSxLQUFLLENBQUNFLGVBQWUsQ0FBQztNQUNoRCxJQUFJLENBQUM0RSxRQUFRLENBQUM7UUFDWjVFLGVBQWUsRUFBRTtNQUNuQixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpSCxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7TUFBQSxJQUFBQyxNQUFBO01BQ2pELElBQUksSUFBSSxDQUFDMUksS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk4SCxTQUFTLENBQUMvRyxJQUFJLEtBQUssSUFBSSxDQUFDeEIsS0FBSyxDQUFDd0IsSUFBSSxFQUFFO1FBQ2hFLElBQUksSUFBSSxDQUFDcEIsS0FBSyxDQUFDSSxhQUFhLEtBQUssQ0FBQyxFQUFFO1VBQ2xDLElBQUksQ0FBQzBFLFFBQVEsQ0FBQztZQUNaMUUsYUFBYSxFQUFFLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEVBQUU7WUFDeENDLFdBQVcsRUFBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRztVQUN0QyxDQUFDLENBQUM7VUFDRjtVQUNBO1FBQ0YsQ0FBQyxNQUNJLElBQUksQ0FBQyxJQUFJLENBQUNaLEtBQUssQ0FBQ1MsUUFBUSxDQUFDa0ksSUFBSSxDQUFDLFVBQUFuRCxPQUFPO1VBQUEsT0FBSUEsT0FBTyxDQUFDOUUsRUFBRSxLQUFLZ0ksTUFBSSxDQUFDdEksS0FBSyxDQUFDSSxhQUFhO1FBQUEsRUFBQyxFQUFFO1VBQ3RGLElBQUksQ0FBQzBFLFFBQVEsQ0FBQztZQUNaMUUsYUFBYSxFQUFFLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEVBQUU7WUFDeENDLFdBQVcsRUFBRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRztVQUN0QyxDQUFDLENBQUM7VUFDRjtVQUNBO1FBQ0Y7TUFDRjtJQUNGO0VBQUM7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXVILGdCQUFnQkEsQ0FBQ0MsTUFBTSxFQUFFO01BQ3ZCLElBQUksQ0FBQzNELFFBQVEsQ0FBQztRQUNackUsVUFBVSxFQUFFZ0k7TUFDZCxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUF6SCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkcsZUFBZUEsQ0FBQ3pGLEtBQUssRUFBRTtNQUNyQixJQUFJcEIsS0FBSyxHQUFHb0IsS0FBSyxDQUFDcUcsTUFBTSxDQUFDekgsS0FBSztNQUM5QixJQUFJOEUsSUFBSSxHQUFHMUQsS0FBSyxDQUFDcUcsTUFBTSxDQUFDM0MsSUFBSTtNQUM1QixJQUFJLENBQUMvRixLQUFLLENBQUNFLGVBQWUsQ0FBQzNCLEdBQUcsQ0FBQ3dILElBQUksRUFBRTlFLEtBQUssQ0FBQztNQUMzQyxJQUFJc0IsT0FBTyxHQUFHLElBQUlnQixlQUFPLENBQUMsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUN4RCxLQUFLLENBQUNFLGVBQWUsRUFBRTtRQUN6RXVELGNBQWMsRUFBRSxXQUFXO1FBQzNCQyxpQkFBaUIsRUFBRTtNQUNyQixDQUFDLENBQUM7TUFDRixJQUFJLENBQUM5RCxLQUFLLENBQUNzRixhQUFhLENBQUMzQyxPQUFPLENBQUM7TUFDakMsSUFBSSxDQUFDdUMsUUFBUSxDQUFDO1FBQUMsaUJBQWlCLEVBQUcsSUFBSSxDQUFDOUUsS0FBSyxDQUFDRTtNQUFlLENBQUMsQ0FBQztJQUNqRTtFQUFDO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtRyxjQUFjQSxDQUFBLEVBQUc7TUFDZixJQUFJLENBQUN0QyxRQUFRLENBQUM7UUFDWjdFLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQ0QsS0FBSyxDQUFDQztNQUN4QixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUFlLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFOLFVBQVVBLENBQUMwQixLQUFLLEVBQUU7TUFDaEIsSUFBSSxDQUFDeUMsUUFBUSxDQUFDO1FBQUMzRSxRQUFRLEVBQUVrQyxLQUFLLENBQUNxRyxNQUFNLENBQUN6SDtNQUFLLENBQUMsQ0FBQztJQUMvQztFQUFDO0FBQUEsRUE3U3FDMEgsZ0JBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiakQsSUFBQTlMLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBNkwsUUFBQSxHQUFBQyxzQkFBQSxDQUFBOUwsbUJBQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQStMLGdCQUFBLEdBQUEvTCxtQkFBQTtBQUNBLElBQUFPLGFBQUEsR0FBQVAsbUJBQUE7QUFBd0MsU0FBQUQsd0JBQUFZLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFkLHVCQUFBLFlBQUFBLHdCQUFBWSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFBQU0sRUFBQSxFQUFBUCxDQUFBLElBQUFDLENBQUEsQ0FBQU0sRUFBQSxJQUFBZCxDQUFBLENBQUFjLEVBQUEsV0FBQU4sQ0FBQSxLQUFBUixDQUFBLEVBQUFDLENBQUE7QUFBQSxTQUFBbUIsV0FBQW5CLENBQUEsRUFBQUssQ0FBQSxFQUFBTixDQUFBLFdBQUFNLENBQUEsT0FBQWUsZ0JBQUEsYUFBQWYsQ0FBQSxPQUFBZ0IsMkJBQUEsYUFBQXJCLENBQUEsRUFBQXNCLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBbkIsQ0FBQSxFQUFBTixDQUFBLFlBQUFxQixnQkFBQSxhQUFBcEIsQ0FBQSxFQUFBeUIsV0FBQSxJQUFBcEIsQ0FBQSxDQUFBcUIsS0FBQSxDQUFBMUIsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUF0QixDQUFBLElBQUEyQixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBM0IsQ0FBQSxhQUFBc0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXRCLENBQUEsVUFieEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFnQmFrSSxpQkFBaUIsR0FBQW5HLHlCQUFBLDBCQUFBQyxVQUFBO0VBQzFCLFNBQUFrRyxrQkFBWWpHLEtBQUssRUFBRTtJQUFBLElBQUFFLGdCQUFBLG1CQUFBK0YsaUJBQUE7SUFBQSxPQUFBL0csVUFBQSxPQUFBK0csaUJBQUEsR0FDVGpHLEtBQUs7RUFDZjtFQUFDLElBQUFrQixVQUFBLGFBQUErRSxpQkFBQSxFQUFBbEcsVUFBQTtFQUFBLFdBQUFvQixhQUFBLGFBQUE4RSxpQkFBQTtJQUFBN0UsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQThILFVBQVVBLENBQUVyTCxDQUFDLEVBQUU7TUFDWCxJQUFJQSxDQUFDLENBQUNzTCxLQUFLLEtBQUssRUFBRSxFQUFFO1FBQ2hCLElBQUksQ0FBQ3BKLEtBQUssQ0FBQ3FKLFVBQVUsQ0FBQ3ZMLENBQUMsQ0FBQztNQUM1QjtJQUNKO0VBQUM7SUFBQXNELEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUFBLElBQUFyQixLQUFBO01BQ0w7TUFDQSxJQUFJeUYsaUJBQWlCLEdBQUcsSUFBSTtNQUM1QixJQUFJaEMsUUFBUSxHQUFHLElBQUksQ0FBQzFELEtBQUssQ0FBQzJGLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQzVGLEtBQUssQ0FBQ1ksT0FBTyxDQUFDO01BQ3BFLElBQUkrRSxTQUFTLEdBQUdqQyxRQUFRLENBQUNtQyxXQUFXO01BQ3BDLElBQUlPLE1BQU0sR0FBRzFDLFFBQVEsQ0FBQ3BCLEtBQUssSUFBSW9CLFFBQVEsQ0FBQ3BCLEtBQUssQ0FBQyxJQUFJUCxtQkFBTyxDQUFDO1FBQUNMLFFBQVEsRUFBRSxJQUFJQyxXQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7TUFBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRytCLFFBQVEsQ0FBQ3BCLEtBQUssQ0FBQyxJQUFJUCxtQkFBTyxDQUFDO1FBQUNMLFFBQVEsRUFBRSxJQUFJQyxXQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7TUFBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRSxJQUFJO01BQ2hMLElBQUkySCxNQUFNLEdBQUdoRCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRUEsTUFBTTtNQUN0RCxJQUFJTixTQUFTLEdBQUdILFNBQVMsR0FBR0EsU0FBUyxDQUFDSSxTQUFTLEdBQUcsU0FBUztNQUMzRCxJQUFJRyxPQUFPLEdBQUcsSUFBSSxDQUFDbEcsS0FBSyxDQUFDa0csT0FBTyxJQUFJLEVBQUU7TUFDdEMsSUFBSVAsU0FBUyxLQUFLRyxTQUFTLEtBQUssV0FBVyxJQUFJQSxTQUFTLEtBQUssZUFBZSxJQUFJQSxTQUFTLEtBQUssT0FBTyxDQUFDLEVBQUU7UUFDcEcsSUFBSXlELFNBQVMsR0FBRyxJQUFJO1FBQ3BCLElBQUlDLE9BQU87UUFDWCxJQUFLN0QsU0FBUyxDQUFDOEQsUUFBUSxJQUFJOUQsU0FBUyxDQUFDOEQsUUFBUSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQU0vRCxTQUFTLENBQUNnRSxNQUFNLElBQUloRSxTQUFTLENBQUNnRSxNQUFNLENBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsRUFBRTtVQUM5SCxJQUFJNUQsU0FBUyxLQUFLLFdBQVcsSUFBSUEsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUNwRDBELE9BQU8sR0FBRzdELFNBQVMsQ0FBQzhELFFBQVE7VUFDaEMsQ0FBQyxNQUNJO1lBQ0RELE9BQU8sR0FBRzdELFNBQVMsQ0FBQ2dFLE1BQU07VUFDOUI7VUFDQUosU0FBUyxnQkFBR3RNLE1BQUEsWUFBQStJLGFBQUE7WUFBSzRELEdBQUcsRUFBRUosT0FBUTtZQUFDbEgsS0FBSyxFQUFFO2NBQUMwRSxNQUFNLEVBQUUsRUFBRTtjQUFFQyxLQUFLLEVBQUU7WUFBRTtVQUFFLENBQUUsQ0FBQztRQUNyRSxDQUFDLE1BQU0sSUFBSXFDLE1BQU0sRUFBRTtVQUNmLElBQUlPLFVBQVUsR0FBR1AsTUFBTSxDQUFDUSxRQUFRLElBQUksT0FBT1IsTUFBTSxDQUFDUSxRQUFRLEtBQUssVUFBVSxJQUFJUixNQUFNLENBQUNRLFFBQVEsQ0FBQyxDQUFDLEdBQUdSLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDLENBQUMsR0FBRSxJQUFJO1VBQ3hILElBQUlELFVBQVUsSUFBSUEsVUFBVSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ25DUixTQUFTLGdCQUFHdE0sTUFBQSxZQUFBK0ksYUFBQTtjQUFLNEQsR0FBRyxFQUFFQyxVQUFVLENBQUNFLE1BQU0sQ0FBQyxDQUFFO2NBQUN6SCxLQUFLLEVBQUU7Z0JBQUMwRSxNQUFNLEVBQUUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFO2NBQUU7WUFBRSxDQUFDLENBQUM7VUFDaEYsQ0FBQyxNQUNJO1lBQ0QsT0FBTyxJQUFJO1VBQ2Y7UUFDSjtRQUNBLElBQUksSUFBSSxDQUFDakgsS0FBSyxDQUFDcUosVUFBVSxFQUFFO1VBQ3ZCM0QsaUJBQWlCLGdCQUFHekksTUFBQSxZQUFBK0ksYUFBQTtZQUFNZ0UsUUFBUSxFQUFFLENBQUU7WUFBQ2pELFNBQVMsRUFBRWtELDZCQUFZLENBQUNDLGtCQUFtQjtZQUFDcEQsS0FBSyxFQUFFWixPQUFRO1lBQUNpRSxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBRzFILEtBQUs7Y0FBQSxPQUFLeEMsS0FBSSxDQUFDa0osVUFBVSxDQUFDMUcsS0FBSyxDQUFDO1lBQUEsQ0FBQztZQUFDeUUsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUd6RSxLQUFLO2NBQUEsT0FBSXhDLEtBQUksQ0FBQ0QsS0FBSyxDQUFDcUosVUFBVSxDQUFDNUcsS0FBSyxDQUFDO1lBQUE7VUFBQyxHQUFFOEcsU0FBZ0IsQ0FBQztRQUMzTixDQUFDLE1BQ0k7VUFDRDdELGlCQUFpQixnQkFBR3pJLE1BQUEsWUFBQStJLGFBQUE7WUFBTWUsU0FBUyxFQUFFa0QsNkJBQVksQ0FBQ0Msa0JBQW1CO1lBQUNwRCxLQUFLLEVBQUVaO1VBQVEsR0FBRXFELFNBQWdCLENBQUM7UUFDNUc7TUFDSixDQUFDLE1BQU07UUFDSCxJQUFJYSxRQUFRO1FBQ1osUUFBUXRFLFNBQVM7VUFBSTtVQUNqQixLQUFLLE9BQU87WUFDUnNFLFFBQVEsR0FBR0gsNkJBQVksQ0FBQ0ksd0JBQXdCO1lBQ2hEO1VBQ0osS0FBSyxRQUFRO1lBQ1RELFFBQVEsR0FBR0gsNkJBQVksQ0FBQ0sseUJBQXlCO1lBQ2pEO1VBQ0osS0FBSyxNQUFNO1lBQ1BGLFFBQVEsR0FBR0gsNkJBQVksQ0FBQ00sdUJBQXVCO1lBQy9DO1VBQ0osS0FBSyxHQUFHO1lBQ0pILFFBQVEsR0FBR0gsNkJBQVksQ0FBQ08sb0JBQW9CO1lBQzVDO1VBQ0osS0FBSyxPQUFPO1lBQ1JKLFFBQVEsR0FBR0gsNkJBQVksQ0FBQ1Esd0JBQXdCO1lBQ2hEO1VBQ0osS0FBSyxVQUFVO1lBQ1hMLFFBQVEsR0FBR0gsNkJBQVksQ0FBQ1MsMkJBQTJCO1lBQ25EO1VBQ0o7WUFDSU4sUUFBUSxHQUFFSCw2QkFBWSxDQUFDQyxrQkFBa0I7WUFDekM7UUFDUjtRQUNBLElBQUl6RSxLQUFLLEVBQUVrRixXQUFXO1FBQ3RCLElBQUlyQixNQUFNLElBQUlBLE1BQU0sQ0FBQzlDLE9BQU8sQ0FBQyxDQUFDLElBQUk4QyxNQUFNLENBQUM3QyxTQUFTLENBQUMsQ0FBQyxFQUFFO1VBQ2xEaEIsS0FBSyxHQUFHNkQsTUFBTSxDQUFDOUMsT0FBTyxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLENBQUM7VUFDbkNpRSxXQUFXLEdBQUdyQixNQUFNLENBQUM3QyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxDQUFDLE1BQ0ksSUFBSWYsU0FBUyxJQUFJQSxTQUFTLENBQUNnQixTQUFTLElBQUloQixTQUFTLENBQUNpQixXQUFXLEVBQUU7VUFDaEVuQixLQUFLLEdBQUdyQyxtQkFBSyxDQUFDeUQsd0JBQXdCLENBQUNsQixTQUFTLENBQUNnQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUVoQixTQUFTLENBQUNnQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDdEZnRSxXQUFXLEdBQUd2SCxtQkFBSyxDQUFDeUQsd0JBQXdCLENBQUNsQixTQUFTLENBQUNpQixXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUVqQixTQUFTLENBQUNpQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEc7UUFDQSxJQUFJZ0UsYUFBYSxHQUFHO1VBQ2hCLGFBQWEsRUFBR25GLEtBQUs7VUFDckIsbUJBQW1CLEVBQUdrRjtRQUMxQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMzSyxLQUFLLENBQUNxSixVQUFVLEVBQUU7VUFDdkIzRCxpQkFBaUIsZ0JBQUd6SSxNQUFBLFlBQUErSSxhQUFBO1lBQU1lLFNBQVMsRUFBRXFELFFBQVM7WUFBQzlILEtBQUssRUFBRXNJLGFBQWM7WUFBQzlELEtBQUssRUFBRVosT0FBUTtZQUFDZ0IsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUd6RSxLQUFLO2NBQUEsT0FBSXhDLEtBQUksQ0FBQ0QsS0FBSyxDQUFDcUosVUFBVSxDQUFDNUcsS0FBSyxDQUFDO1lBQUE7VUFBQyxDQUFDLENBQUM7UUFDN0ksQ0FBQyxNQUNJO1VBQ0RpRCxpQkFBaUIsZ0JBQUd6SSxNQUFBLFlBQUErSSxhQUFBO1lBQU1lLFNBQVMsRUFBRXFELFFBQVM7WUFBQzlILEtBQUssRUFBRXNJLGFBQWM7WUFBQzlELEtBQUssRUFBRVo7VUFBUSxDQUFDLENBQUM7UUFDMUY7TUFDSjtNQUNBLE9BQU9SLGlCQUFpQjtJQUM1QjtFQUFDO0FBQUEsRUExRmtDcUQsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3Itdmlldy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtHZW9KU09OfSBmcm9tIFwib2wvZm9ybWF0XCI7XG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtQb2ludCwgTGluZVN0cmluZywgUG9seWdvbiwgQ2lyY2xlfSBmcm9tICdvbC9nZW9tJ1xuaW1wb3J0IHtEcmF3LCBTZWxlY3QsIE1vZGlmeSwgU25hcH0gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4XCI7XG5pbXBvcnQge0M0Z1BvcHVwQ29udHJvbGxlcn0gZnJvbSBcIi4vLi4vYzRnLXBvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7VG9vbHRpcFBvcFVwfSBmcm9tIFwiLi4vYzRnLW1hcHMtbWlzYy10b29sdGlwcG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmcmVlaGFuZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZEZlYXR1cmU6IGZhbHNlLFxuICAgICAgZmVhdHVyZXM6IFwiW11cIixcbiAgICAgIGFjdGl2ZUVsZW1lbnQ6IHByb3BzLmVsZW1lbnRzWzBdID8gcHJvcHMuZWxlbWVudHNbMF0uaWQgOiAwLFxuICAgICAgYWN0aXZlU3R5bGU6IHByb3BzLmVsZW1lbnRzWzBdID8gcHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZCA6IDAsXG4gICAgICBzZWxlY3RNb2RlOiBcIm1vZGlmeVwiXG4gICAgfTtcbiAgICB0aGlzLmludGVyYWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmNoYW5nZUpTT04gPSB0aGlzLmNoYW5nZUpTT04uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24gPSB0aGlzLnJlc2V0SW50ZXJhY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIiAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICBsZXQgZ2VvbWV0cnk7XG4gICAgICBzd2l0Y2godGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJQb2ludFwiOlxuICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IFBvaW50KDAsMCk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBMaW5lU3RyaW5nKFtbMCwwXSwgWzEsMV1dKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBQb2x5Z29uKFtbMCwwXSwgWzEsMV1dKVxuICAgICAgfVxuICAgICAgbGV0IGZlYXR1cmUgPSBuZXcgRmVhdHVyZShnZW9tZXRyeSk7XG4gICAgICBmZWF0dXJlLnNldCgnbG9jc3R5bGUnLCB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlKVxuICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBEcmF3KHtcblxuICAgICAgICAvLyBmZWF0dXJlczogdGhpcy5wcm9wcy5mZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpLFxuICAgICAgICB0eXBlOiB0aGlzLnByb3BzLm1vZGUsXG4gICAgICAgIHNuYXBUb2xlcmFuY2U6IDEsXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlRnVuY3Rpb24oZmVhdHVyZSksXG4gICAgICAgIGZyZWVoYW5kOiB0aGlzLnN0YXRlLmZyZWVoYW5kXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsXG4gICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LmZlYXR1cmUuc2V0KCdlZGl0b3JJZCcsIHRoaXMucHJvcHMuZWRpdG9ySWQpO1xuICAgICAgICAgIGV2ZW50LmZlYXR1cmUuc2V0KCdsb2NzdHlsZScsIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUpO1xuICAgICAgICAgIGV2ZW50LmZlYXR1cmUuc2V0KCdlbGVtZW50SWQnLCB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgIGxldCBnZW9qc29uO1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiQ2lyY2xlXCIpIHsgLy90dXJuIENpcmNsZSBpbnRvIHZhbGlkIEdlb0pTT05cbiAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IGV2ZW50LmZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5jbG9uZSgpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgICBsZXQgcmVhbFJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkpLnJhd1ZhbHVlO1xuICAgICAgICAgICAgZ2VvanNvbiA9IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjZW50ZXJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGVkaXRvcklkOiB0aGlzLnByb3BzLmVkaXRvcklkLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIGxvY3N0eWxlOiB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlLFxuICAgICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICAgICAgICAgIHJlYWxSYWRpdXM6IHJlYWxSYWRpdXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QoZXZlbnQuZmVhdHVyZSwge1xuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgc291cmNlOiB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpLFxuICAgICAgICAgICAgZ2VvanNvbjogZ2VvanNvbixcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGZvcm1hdDogbmV3IEdlb0pTT04oKVxuICAgICAgICAgIH1cbiAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX2RyYXcsIHBhcmFtcyk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5hZGRGZWF0dXJlKGdlb2pzb24pXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb3VudEVkaXRvcklkKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIGFkZCBpbnRlcmFjdGlvbiB0byBtYXBcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uID0gW107XG4gICAgICB0aGlzLmludGVyYWN0aW9uLnB1c2gobmV3IFNlbGVjdCh7XG4gICAgICAgIGxheWVyczogW3RoaXMucHJvcHMuZWRpdG9yTGF5ZXJdLFxuICAgICAgICBoaXRUb2xlcmFuY2U6IDIwXG4gICAgICB9KSk7XG4gICAgICB0aGlzLmludGVyYWN0aW9uLnB1c2gobmV3IE1vZGlmeSh7XG4gICAgICAgIGZlYXR1cmVzOiB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSA/IG5ldyBDb2xsZWN0aW9uKFt0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZV0pIDogbmV3IENvbGxlY3Rpb24oW25ldyBGZWF0dXJlKCldKSxcbiAgICAgICAgLy8gc291cmNlOiB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpLFxuICAgICAgICBwaXhlbFRvbGVyYW5jZTogMjBcbiAgICAgIH0pKTtcblxuICAgICAgdGhpcy5pbnRlcmFjdGlvblswXS5vbignc2VsZWN0JywgKGUpID0+IHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBlLnNlbGVjdGVkWzBdO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEZlYXR1cmU6IGZlYXR1cmV9KTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmludGVyYWN0aW9uWzFdLm9uKCdtb2RpZnllbmQnLCAoZSkgPT4ge1xuICAgICAgICBsZXQgZmVhdHVyZSA9IGUuZmVhdHVyZXMuZ2V0QXJyYXkoKVswXTtcbiAgICAgICAgbGV0IGdlb2pzb247XG4gICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkgaW5zdGFuY2VvZiBDaXJjbGUpIHsgLy90dXJuIENpcmNsZSBpbnRvIHZhbGlkIEdlb0pTT05cbiAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKS50cmFuc2Zvcm0oXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG4gICAgICAgICAgbGV0IGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIGxldCByYWRpdXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgbGV0IHJlYWxSYWRpdXMgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpKS5yYXdWYWx1ZTtcbiAgICAgICAgICBnZW9qc29uID0ge1xuICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjZW50ZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGVkaXRvcklkOiBmZWF0dXJlLmdldCgnZWRpdG9ySWQnKSxcbiAgICAgICAgICAgICAgZWxlbWVudElkOiBmZWF0dXJlLmdldCgnZWxlbWVudElkJyksXG4gICAgICAgICAgICAgIGxvY3N0eWxlOiBmZWF0dXJlLmdldCgnYWN0aXZlU3R5bGUnKSxcbiAgICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXG4gICAgICAgICAgICAgIHJlYWxSYWRpdXM6IHJlYWxSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGZlYXR1cmUsIHtcbiAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgICBnZW9qc29uOiBnZW9qc29uLFxuICAgICAgICAgIGV2ZW50OiBlLFxuICAgICAgICAgIGZvcm1hdDogbmV3IEdlb0pTT04oKVxuICAgICAgICB9O1xuICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX21vZGlmeSwgcGFyYW1zKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGdlb2pzb24pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uWzFdKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2V0SW50ZXJhY3Rpb24oKTtcbiAgICB9XG4gICAgbGV0IGVsZW1lbnRzID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5lbGVtZW50cyAmJiB0aGlzLnByb3BzLmVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGVsZW1lbnRzID0gdGhpcy5wcm9wcy5lbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGNvbG9yLCBzdHlsZVRyaWdnZXJMYWJlbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW2VsZW1lbnQuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8QzRnU3RhcmJvYXJkU3R5bGUgdG9vbHRpcD17ZWxlbWVudC5uYW1lfSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXtlbGVtZW50LnN0eWxlSWR9Lz5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgICAgbGV0IGZlYXR1cmVTdHlsZSA9IEFycmF5LmlzQXJyYXkoc3R5bG9yKSA/IHN0eWxvclswXTogc3R5bG9yO1xuICAgICAgICAgIGlmIChmZWF0dXJlU3R5bGUgJiYgZmVhdHVyZVN0eWxlLmdldEZpbGwoKSAmJiBmZWF0dXJlU3R5bGUuZ2V0U3Ryb2tlKCkpIHtcbiAgICAgICAgICAgIGNvbG9yID0gZmVhdHVyZVN0eWxlLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bGVEYXRhICYmIHN0eWxlRGF0YS5maWxsY29sb3IgJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIHRpdGxlPXtlbGVtZW50Lm5hbWV9IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWxvY3N0eWxlXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiIDogY29sb3JcbiAgICAgICAgICB9fS8+O1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKDxidXR0b24ga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e2hlaWdodDogXCIzMnB4XCIsIHdpZHRoOiBcIjMycHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+e3RoaXMuc2V0U3RhdGUoe2FjdGl2ZUVsZW1lbnQ6IGVsZW1lbnQuaWQsIGFjdGl2ZVN0eWxlOiBlbGVtZW50LnN0eWxlSWR9KX19PlxuICAgICAgICAgIHtzdHlsZVRyaWdnZXJMYWJlbH1cbiAgICAgICAgPC9idXR0b24+KVxuICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBsZXQgY3VzdG9tQnV0dG9uID0gbnVsbDtcbiAgICBpZiAoXCJMaW5lU3RyaW5nUG9seWdvblwiLmluY2x1ZGVzKHRoaXMucHJvcHMubW9kZSkpIHtcbiAgICAgIGxldCBmcmVlaGFuZENsYXNzID0gXCJjNGctZWRpdG9yLXZpZXcgXCI7XG4gICAgICBmcmVlaGFuZENsYXNzICs9IHRoaXMuc3RhdGUuZnJlZWhhbmQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCI7XG4gICAgICBjdXN0b21CdXR0b24gPSAoPGEgY2xhc3NOYW1lPXtmcmVlaGFuZENsYXNzfSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORH0gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5jaGFuZ2VGcmVlaGFuZCgpfX0+e3RoaXMucHJvcHMubGFuZy5FRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkR9PC9hPik7XG4gICAgfVxuICAgIGxldCBhcnJGb3JtRWRpdG9yVmFycyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgIGN1c3RvbUJ1dHRvbiA9ICg8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgIDxidXR0b24gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5FRElUT1JfRkVBVFVSRV9ERUxFVEV9IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlIFwiICsgKHRoaXMuc3RhdGUuc2VsZWN0TW9kZSA9PT0gXCJyZW1vdmVcIiA/IFwiYzRnLWFjdGl2ZVwiOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5yZW1vdmVBY3RpdmVGZWF0dXJlKCl9fS8+XG4gICAgICA8L2Rpdj4pO1xuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmVkaXRvclZhcnMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWRpdG9yVmFycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBlZGl0b3JWYXIgPSB0aGlzLnByb3BzLmVkaXRvclZhcnNbaV07XG4gICAgICAgICAgaWYgKGVkaXRvclZhci5jYXB0aW9uICYmIGVkaXRvclZhci5rZXkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlLmdldChlZGl0b3JWYXIua2V5KSA/IHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlLmdldChlZGl0b3JWYXIua2V5KSA6IFwiXCI7XG4gICAgICAgICAgICBhcnJGb3JtRWRpdG9yVmFycy5wdXNoKFxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXZhcnMtaW5wdXRcIn0ga2V5PXtpfSBvblN1Ym1pdD17KGV2ZW50KSA9PiB7ZXZlbnQucHJldmVudERlZmF1bHQoKX19PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7ZWRpdG9yVmFyLmNhcHRpb259OlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dmFsdWV9IG5hbWU9e2VkaXRvclZhci5rZXl9IG9uQ2hhbmdlPXsoZXZlbnQpPT57dGhpcy5oYW5kbGVWYXJDaGFuZ2UoZXZlbnQpfX0vPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y3VzdG9tQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItZWxlbWVudC1zZWxlY3Rpb25cIn0+XG4gICAgICAgICAgICB7ZWxlbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXZhcnNcIn0+XG4gICAgICAgICAge2FyckZvcm1FZGl0b3JWYXJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgcmVzZXRJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbnRlcmFjdGlvbikgeyAvL29ubHkgb25lIGRyYXdpbnRlcmFjdGlvbiBhdCBhIHRpbWVcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuaW50ZXJhY3Rpb24pKSB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvblswXSk7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvblsxXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVBY3RpdmVGZWF0dXJlICgpIHtcbiAgICBsZXQgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlLCB7XG4gICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLnJlbW92ZUZlYXR1cmUoZ2VvanNvbik7XG4gICAgbGV0IHNvdXJjZSA9IHRoaXMucHJvcHMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgc291cmNlLnJlbW92ZUZlYXR1cmUodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZWxlbWVudHNbMF0gJiYgcHJldlByb3BzLm1vZGUgIT09IHRoaXMucHJvcHMubW9kZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50OiB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkLFxuICAgICAgICAgIGFjdGl2ZVN0eWxlOiB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWRcbiAgICAgICAgfSk7XG4gICAgICAgIC8vICB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkXG4gICAgICAgIC8vICB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlID0gdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5lbGVtZW50cy5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50OiB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkLFxuICAgICAgICAgIGFjdGl2ZVN0eWxlOiB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWRcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uaWRcbiAgICAgICAgLy8gdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVNlbGVjdE1vZGUoc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RNb2RlOiBzdHJpbmdcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVZhckNoYW5nZShldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgbGV0IGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdCh0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGdlb2pzb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1wic2VsZWN0ZWRGZWF0dXJlXCIgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZX0pO1xuICB9XG5cbiAgY2hhbmdlRnJlZWhhbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmcmVlaGFuZDogIXRoaXMuc3RhdGUuZnJlZWhhbmRcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlSlNPTihldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVzOiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBlbnRlckV2ZW50IChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGZvciBpbnRlcmFjdGlvbi10cmlnZ2VyXG4gICAgICAgIGxldCBzdHlsZVRyaWdnZXJMYWJlbCA9IG51bGw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsb3IgPSBsb2NzdHlsZS5zdHlsZSAmJiBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpID8gbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKTogbnVsbDtcbiAgICAgICAgbGV0IHN0eWwwciA9IEFycmF5LmlzQXJyYXkoc3R5bG9yKSA/IHN0eWxvclswXTogc3R5bG9yO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gc3R5bGVEYXRhID8gc3R5bGVEYXRhLnN0eWxldHlwZSA6IFwiZGVmYXVsdFwiO1xuICAgICAgICBsZXQgdG9vbHRpcCA9IHRoaXMucHJvcHMudG9vbHRpcCB8fCBcIlwiO1xuICAgICAgICBpZiAoc3R5bGVEYXRhICYmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZUljb24gPSBudWxsO1xuICAgICAgICAgICAgbGV0IGljb25TcmM7XG4gICAgICAgICAgICBpZiAoKHN0eWxlRGF0YS5pY29uX3NyYyAmJiBzdHlsZURhdGEuaWNvbl9zcmMuaW5kZXhPZignLicpICE9PSAtMSkgfHwgKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLnN2Z1NyYy5pbmRleE9mKCcuJykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5pY29uX3NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17aWNvblNyY30gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bDByKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlSW1hZ2UgPSBzdHlsMHIuZ2V0SW1hZ2UgJiYgdHlwZW9mIHN0eWwwci5nZXRJbWFnZSA9PT0gXCJmdW5jdGlvblwiICYmIHN0eWwwci5nZXRJbWFnZSgpID8gc3R5bDByLmdldEltYWdlKCk6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlSW1hZ2UgJiYgc3R5bGVJbWFnZS5nZXRTcmMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17c3R5bGVJbWFnZS5nZXRTcmMoKX0gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiB0YWJJbmRleD17MX0gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmVudGVyRXZlbnQoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlVHJpZ2dlckxhYmVsO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfbGF5ZXIiLCJfc291cmNlIiwiX2Zvcm1hdCIsIl9vbCIsIl9nZW9tIiwiX2ludGVyYWN0aW9uIiwiX2M0Z01hcHNVdGlscyIsIl9jNGdTdGFyYm9hcmRTdHlsZSIsIl9jNGdQb3B1cENvbnRyb2xsZXIiLCJfYzRnTWFwc01pc2NUb29sdGlwcG9wdXAiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJFZGl0b3JWaWV3IiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwic3RhdGUiLCJmcmVlaGFuZCIsInNlbGVjdGVkRmVhdHVyZSIsImZlYXR1cmVzIiwiYWN0aXZlRWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJhY3RpdmVTdHlsZSIsInN0eWxlSWQiLCJzZWxlY3RNb2RlIiwiaW50ZXJhY3Rpb24iLCJjaGFuZ2VKU09OIiwiYmluZCIsInJlc2V0SW50ZXJhY3Rpb24iLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwibW9kZSIsImFjdGl2ZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImZlYXR1cmUiLCJGZWF0dXJlIiwiRHJhdyIsInNvdXJjZSIsImVkaXRvckxheWVyIiwiZ2V0U291cmNlIiwidHlwZSIsInNuYXBUb2xlcmFuY2UiLCJzdHlsZSIsInN0eWxlRnVuY3Rpb24iLCJvbiIsImV2ZW50IiwiZWRpdG9ySWQiLCJnZW9qc29uIiwiZ2V0R2VvbWV0cnkiLCJjbG9uZSIsInRyYW5zZm9ybSIsImNlbnRlciIsImdldENlbnRlciIsInJhZGl1cyIsImdldFJhZGl1cyIsInJlYWxSYWRpdXMiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwiY29vcmRpbmF0ZXMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudElkIiwibG9jc3R5bGUiLCJHZW9KU09OIiwid3JpdGVGZWF0dXJlT2JqZWN0IiwiZGF0YVByb2plY3Rpb24iLCJmZWF0dXJlUHJvamVjdGlvbiIsInBhcmFtcyIsImZvcm1hdCIsImNhbGxIb29rRnVuY3Rpb25zIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiaG9va19lZGl0b3JfZHJhdyIsImFkZEZlYXR1cmUiLCJjb3VudEVkaXRvcklkIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImFkZEludGVyYWN0aW9uIiwicHVzaCIsIlNlbGVjdCIsImxheWVycyIsImhpdFRvbGVyYW5jZSIsIk1vZGlmeSIsIkNvbGxlY3Rpb24iLCJwaXhlbFRvbGVyYW5jZSIsInNlbGVjdGVkIiwic2V0U3RhdGUiLCJnZXRBcnJheSIsIkNpcmNsZSIsImhvb2tfZWRpdG9yX21vZGlmeSIsIm1vZGlmeUZlYXR1cmUiLCJsZW5ndGgiLCJlbGVtZW50IiwiY29sb3IiLCJzdHlsZVRyaWdnZXJMYWJlbCIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImxvY1N0eWxlQXJyIiwic3R5bGVUeXBlIiwic3R5bGV0eXBlIiwiY3JlYXRlRWxlbWVudCIsIkM0Z1N0YXJib2FyZFN0eWxlIiwidG9vbHRpcCIsIm5hbWUiLCJzdHlsb3IiLCJmZWF0dXJlU3R5bGUiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0Q29sb3IiLCJmaWxsY29sb3IiLCJzdHJva2Vjb2xvciIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbk1vdXNlVXAiLCJjdXN0b21CdXR0b24iLCJpbmNsdWRlcyIsImZyZWVoYW5kQ2xhc3MiLCJsYW5nIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiY2hhbmdlRnJlZWhhbmQiLCJhcnJGb3JtRWRpdG9yVmFycyIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsInJlbW92ZUFjdGl2ZUZlYXR1cmUiLCJlZGl0b3JWYXJzIiwiZWRpdG9yVmFyIiwiY2FwdGlvbiIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsImhhbmRsZVZhckNoYW5nZSIsIkZyYWdtZW50IiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJyZW1vdmVGZWF0dXJlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJfdGhpczMiLCJmaW5kIiwiY2hhbmdlU2VsZWN0TW9kZSIsInN0cmluZyIsInRhcmdldCIsIkNvbXBvbmVudCIsIl9GZWF0dXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJlbnRlckV2ZW50Iiwid2hpY2giLCJjbGlja0V2ZW50Iiwic3R5bDByIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwiaW5kZXhPZiIsInN2Z1NyYyIsInNyYyIsInN0eWxlSW1hZ2UiLCJnZXRJbWFnZSIsImdldFNyYyIsInRhYkluZGV4IiwiY3NzQ29uc3RhbnRzIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwib25LZXlQcmVzcyIsImNzc0NsYXNzIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJib3JkZXJjb2xvciIsInN0eWxlRWxlbWVudHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==