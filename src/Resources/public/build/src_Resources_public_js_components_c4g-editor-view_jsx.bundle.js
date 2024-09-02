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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
      if (this.props.elements && this.props.elements.length > 1) {
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLXZpZXdfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLE1BQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxPQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsT0FBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEdBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sWUFBQSxHQUFBTixtQkFBQTtBQUVBLElBQUFPLGFBQUEsR0FBQVAsbUJBQUE7QUFDQSxJQUFBUSxrQkFBQSxHQUFBUixtQkFBQTtBQUNBLElBQUFTLG1CQUFBLEdBQUFULG1CQUFBO0FBQ0EsSUFBQVUsd0JBQUEsR0FBQVYsbUJBQUE7QUFBMkQsU0FBQVcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFiLHdCQUFBYSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQVcsV0FBQWhCLENBQUEsRUFBQWlCLENBQUEsRUFBQXBCLENBQUEsV0FBQW9CLENBQUEsT0FBQUMsZ0JBQUEsYUFBQUQsQ0FBQSxPQUFBRSwyQkFBQSxhQUFBbkIsQ0FBQSxFQUFBb0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQXBCLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFsQixDQUFBLEVBQUF1QixXQUFBLElBQUFOLENBQUEsQ0FBQU8sS0FBQSxDQUFBeEIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUFwQixDQUFBLElBQUF5QixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBekIsQ0FBQSxhQUFBb0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXBCLENBQUEsVUFwQjNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBc0JxQjRCLFVBQVUsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFFN0IsU0FBQUYsV0FBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxVQUFBO0lBQ2pCSSxLQUFBLEdBQUFoQixVQUFBLE9BQUFZLFVBQUEsR0FBTUcsS0FBSztJQUNYLElBQU1HLEtBQUssR0FBQUYsS0FBTztJQUNsQkEsS0FBQSxDQUFLRyxLQUFLLEdBQUc7TUFDWEMsUUFBUSxFQUFFLEtBQUs7TUFDZkMsZUFBZSxFQUFFLEtBQUs7TUFDdEJDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLGFBQWEsRUFBRVIsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdULEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFLEdBQUcsQ0FBQztNQUMzREMsV0FBVyxFQUFFWCxLQUFLLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR1QsS0FBSyxDQUFDUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNHLE9BQU8sR0FBRyxDQUFDO01BQzlEQyxVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQ0RaLEtBQUEsQ0FBS2EsV0FBVyxHQUFHLElBQUk7SUFDdkJiLEtBQUEsQ0FBS2MsVUFBVSxHQUFHZCxLQUFBLENBQUtjLFVBQVUsQ0FBQ0MsSUFBSSxDQUFBZixLQUFLLENBQUM7SUFDNUNBLEtBQUEsQ0FBS2dCLGdCQUFnQixHQUFHaEIsS0FBQSxDQUFLZ0IsZ0JBQWdCLENBQUNELElBQUksQ0FBQWYsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUMzRDtFQUFDLElBQUFpQixVQUFBLGFBQUFyQixVQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBb0IsYUFBQSxhQUFBdEIsVUFBQTtJQUFBdUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUMsTUFBQTtNQUNQLElBQU1wQixLQUFLLEdBQUcsSUFBSTtNQUNsQixJQUFJLElBQUksQ0FBQ0gsS0FBSyxDQUFDd0IsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUN4QixLQUFLLENBQUN5QixNQUFNLEVBQUU7UUFDckQsSUFBSSxDQUFDUixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLElBQUlTLFFBQVE7UUFDWixRQUFPLElBQUksQ0FBQzFCLEtBQUssQ0FBQ3dCLElBQUk7VUFDcEIsS0FBSyxPQUFPO1lBQ1ZFLFFBQVEsR0FBRyxJQUFJQyxXQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUN6QjtVQUNGLEtBQUssWUFBWTtZQUNmRCxRQUFRLEdBQUcsSUFBSUUsZ0JBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekM7VUFDRixLQUFLLFNBQVM7WUFDWkYsUUFBUSxHQUFHLElBQUlHLGFBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUM7UUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBSUMsV0FBTyxDQUFDTCxRQUFRLENBQUM7UUFDbkNJLE9BQU8sQ0FBQzlDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDb0IsS0FBSyxDQUFDTyxXQUFXLENBQUM7UUFDL0MsSUFBSSxDQUFDRyxXQUFXLEdBQUcsSUFBSWtCLGlCQUFJLENBQUM7VUFFMUI7VUFDQUMsTUFBTSxFQUFFLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ2tDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7VUFDMUNDLElBQUksRUFBRSxJQUFJLENBQUNwQyxLQUFLLENBQUN3QixJQUFJO1VBQ3JCYSxhQUFhLEVBQUUsQ0FBQztVQUNoQkMsS0FBSyxFQUFFLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ3VDLGFBQWEsQ0FBQ1QsT0FBTyxDQUFDO1VBQ3hDekIsUUFBUSxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQztRQUN2QixDQUFDLENBQUM7UUFFRixJQUFJLENBQUNTLFdBQVcsQ0FBQzBCLEVBQUUsQ0FBQyxTQUFTLEVBQzNCLFVBQUNDLEtBQUssRUFBSztVQUNUQSxLQUFLLENBQUNYLE9BQU8sQ0FBQzlDLEdBQUcsQ0FBQyxVQUFVLEVBQUV1QyxNQUFJLENBQUN2QixLQUFLLENBQUMwQyxRQUFRLENBQUM7VUFDbERELEtBQUssQ0FBQ1gsT0FBTyxDQUFDOUMsR0FBRyxDQUFDLFVBQVUsRUFBRXVDLE1BQUksQ0FBQ25CLEtBQUssQ0FBQ08sV0FBVyxDQUFDO1VBQ3JEOEIsS0FBSyxDQUFDWCxPQUFPLENBQUM5QyxHQUFHLENBQUMsV0FBVyxFQUFFdUMsTUFBSSxDQUFDbkIsS0FBSyxDQUFDSSxhQUFhLENBQUM7VUFDeEQsSUFBSW1DLE9BQU87VUFDWCxJQUFJcEIsTUFBSSxDQUFDdkIsS0FBSyxDQUFDd0IsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUFFO1lBQ2xDLElBQUlFLFNBQVEsR0FBR2UsS0FBSyxDQUFDWCxPQUFPLENBQUNjLFdBQVcsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1lBQ3RGLElBQUlDLE1BQU0sR0FBR3JCLFNBQVEsQ0FBQ3NCLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUlDLE1BQU0sR0FBR1IsS0FBSyxDQUFDWCxPQUFPLENBQUNjLFdBQVcsQ0FBQyxDQUFDLENBQUNNLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELElBQUlDLFVBQVUsR0FBR0MsbUJBQUssQ0FBQ0MsZUFBZSxDQUFDWixLQUFLLENBQUNYLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxRQUFRO1lBQzVFWCxPQUFPLEdBQUc7Y0FDUlAsSUFBSSxFQUFFLFNBQVM7Y0FDZlYsUUFBUSxFQUFFO2dCQUNSVSxJQUFJLEVBQUUsT0FBTztnQkFDYm1CLFdBQVcsRUFBRVI7Y0FDZixDQUFDO2NBQ0RTLFVBQVUsRUFBRTtnQkFDVmQsUUFBUSxFQUFFbkIsTUFBSSxDQUFDdkIsS0FBSyxDQUFDMEMsUUFBUTtnQkFDN0JlLFNBQVMsRUFBRWxDLE1BQUksQ0FBQ25CLEtBQUssQ0FBQ0ksYUFBYTtnQkFDbkNrRCxRQUFRLEVBQUVuQyxNQUFJLENBQUNuQixLQUFLLENBQUNPLFdBQVc7Z0JBQ2hDc0MsTUFBTSxFQUFFQSxNQUFNO2dCQUNkRSxVQUFVLEVBQUVBO2NBQ2Q7WUFDRixDQUFDO1VBQ0gsQ0FBQyxNQUFNO1lBQ0xSLE9BQU8sR0FBRyxJQUFJZ0IsZUFBTyxDQUFDLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUNuQixLQUFLLENBQUNYLE9BQU8sRUFBRTtjQUN4RCtCLGNBQWMsRUFBRSxXQUFXO2NBQzNCQyxpQkFBaUIsRUFBRTtZQUNyQixDQUFDLENBQUM7VUFDSjtVQUNBLElBQUlDLE1BQU0sR0FBRztZQUNYOUIsTUFBTSxFQUFFVixNQUFJLENBQUN2QixLQUFLLENBQUNrQyxXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDUSxPQUFPLEVBQUVBLE9BQU87WUFDaEJGLEtBQUssRUFBRUEsS0FBSztZQUNadUIsTUFBTSxFQUFFLElBQUlMLGVBQU8sQ0FBQztVQUN0QixDQUFDO1VBQ0RQLG1CQUFLLENBQUNhLGlCQUFpQixDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsZ0JBQWdCLEVBQUVMLE1BQU0sQ0FBQztVQUNyRXhDLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQ3FFLFVBQVUsQ0FBQzFCLE9BQU8sQ0FBQztVQUM5QnBCLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQ3NFLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLENBQ0YsQ0FBQzs7UUFFRDtRQUNBLElBQUksQ0FBQ3RFLEtBQUssQ0FBQ3VFLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDM0QsV0FBVyxDQUFDO01BRS9ELENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2QsS0FBSyxDQUFDd0IsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUN4QixLQUFLLENBQUN5QixNQUFNLEVBQUU7UUFDNUQsSUFBSSxDQUFDUixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0gsV0FBVyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDQSxXQUFXLENBQUM0RCxJQUFJLENBQUMsSUFBSUMsbUJBQU0sQ0FBQztVQUMvQkMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDNUUsS0FBSyxDQUFDa0MsV0FBVyxDQUFDO1VBQ2hDMkMsWUFBWSxFQUFFO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDL0QsV0FBVyxDQUFDNEQsSUFBSSxDQUFDLElBQUlJLG1CQUFNLENBQUM7VUFDL0J2RSxRQUFRLEVBQUUsSUFBSSxDQUFDSCxLQUFLLENBQUNFLGVBQWUsR0FBRyxJQUFJeUUsY0FBVSxDQUFDLENBQUMsSUFBSSxDQUFDM0UsS0FBSyxDQUFDRSxlQUFlLENBQUMsQ0FBQyxHQUFHLElBQUl5RSxjQUFVLENBQUMsQ0FBQyxJQUFJaEQsV0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3JIO1VBQ0FpRCxjQUFjLEVBQUU7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUNsRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMwQixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMxRSxDQUFDLEVBQUs7VUFDdEMsSUFBSWdFLE9BQU8sR0FBR2hFLENBQUMsQ0FBQ21ILFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDM0IxRCxNQUFJLENBQUMyRCxRQUFRLENBQUM7WUFBQzVFLGVBQWUsRUFBRXdCO1VBQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzBCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQzFFLENBQUMsRUFBSztVQUN6QyxJQUFJZ0UsT0FBTyxHQUFHaEUsQ0FBQyxDQUFDeUMsUUFBUSxDQUFDNEUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDdEMsSUFBSXhDLE9BQU87VUFDWCxJQUFJYixPQUFPLENBQUNjLFdBQVcsQ0FBQyxDQUFDLFlBQVl3QyxZQUFNLEVBQUU7WUFBRTtZQUM3QyxJQUFJMUQsVUFBUSxHQUFHSSxPQUFPLENBQUNjLFdBQVcsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1lBQ2hGLElBQUlDLE1BQU0sR0FBR3JCLFVBQVEsQ0FBQ3NCLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUlDLE1BQU0sR0FBR25CLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDLENBQUMsQ0FBQ00sU0FBUyxDQUFDLENBQUM7WUFDOUMsSUFBSUMsVUFBVSxHQUFHQyxtQkFBSyxDQUFDQyxlQUFlLENBQUN2QixPQUFPLENBQUNjLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsUUFBUTtZQUN0RVgsT0FBTyxHQUFHO2NBQ1JQLElBQUksRUFBRSxTQUFTO2NBQ2ZWLFFBQVEsRUFBRTtnQkFDUlUsSUFBSSxFQUFFLE9BQU87Z0JBQ2JtQixXQUFXLEVBQUVSO2NBQ2YsQ0FBQztjQUNEUyxVQUFVLEVBQUU7Z0JBQ1ZkLFFBQVEsRUFBRVosT0FBTyxDQUFDekQsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQkFDakNvRixTQUFTLEVBQUUzQixPQUFPLENBQUN6RCxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUNuQ3FGLFFBQVEsRUFBRTVCLE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxhQUFhLENBQUM7Z0JBQ3BDNEUsTUFBTSxFQUFFQSxNQUFNO2dCQUNkRSxVQUFVLEVBQUVBO2NBQ2Q7WUFDRixDQUFDO1VBQ0gsQ0FBQyxNQUFNO1lBQ0xSLE9BQU8sR0FBRyxJQUFJZ0IsZUFBTyxDQUFDLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUM5QixPQUFPLEVBQUU7Y0FDbEQrQixjQUFjLEVBQUUsV0FBVztjQUMzQkMsaUJBQWlCLEVBQUU7WUFDckIsQ0FBQyxDQUFDO1VBQ0o7VUFDQSxJQUFJQyxNQUFNLEdBQUc7WUFDWDlCLE1BQU0sRUFBRVYsTUFBSSxDQUFDdkIsS0FBSyxDQUFDa0MsV0FBVyxDQUFDQyxTQUFTLENBQUMsQ0FBQztZQUMxQ1EsT0FBTyxFQUFFQSxPQUFPO1lBQ2hCRixLQUFLLEVBQUUzRSxDQUFDO1lBQ1JrRyxNQUFNLEVBQUUsSUFBSUwsZUFBTyxDQUFDO1VBQ3RCLENBQUM7VUFDRFAsbUJBQUssQ0FBQ2EsaUJBQWlCLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDa0Isa0JBQWtCLEVBQUV0QixNQUFNLENBQUM7VUFDdkV4QyxNQUFJLENBQUN2QixLQUFLLENBQUNzRixhQUFhLENBQUMzQyxPQUFPLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDM0MsS0FBSyxDQUFDdUUsYUFBYSxDQUFDQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUMzRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDZCxLQUFLLENBQUN1RSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQzNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUVsRSxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNHLGdCQUFnQixDQUFDLENBQUM7TUFDekI7TUFDQSxJQUFJUixRQUFRLEdBQUcsSUFBSTtNQUNuQixJQUFJLElBQUksQ0FBQ1QsS0FBSyxDQUFDUyxRQUFRLElBQUksSUFBSSxDQUFDVCxLQUFLLENBQUNTLFFBQVEsQ0FBQzhFLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekQ5RSxRQUFRLEdBQUcsSUFBSSxDQUFDVCxLQUFLLENBQUNTLFFBQVEsQ0FBQytELEdBQUcsQ0FBQyxVQUFDZ0IsT0FBTyxFQUFLO1VBQzlDLElBQUlDLEtBQUssRUFBRUMsaUJBQWlCO1VBQzVCLElBQUloQyxRQUFRLEdBQUduQyxNQUFJLENBQUN2QixLQUFLLENBQUMyRixTQUFTLENBQUNDLFlBQVksQ0FBQ0osT0FBTyxDQUFDNUUsT0FBTyxDQUFDO1VBQ2pFLElBQUkrRSxTQUFTLEdBQUdqQyxRQUFRLENBQUNtQyxXQUFXO1VBQ3BDLElBQUlDLFNBQVMsR0FBR0gsU0FBUyxHQUFHQSxTQUFTLENBQUNJLFNBQVMsR0FBRyxTQUFTO1VBQzNELElBQUlKLFNBQVMsS0FBS0csU0FBUyxLQUFLLFdBQVcsSUFBSUEsU0FBUyxLQUFLLGVBQWUsSUFBSUEsU0FBUyxLQUFLLE9BQU8sQ0FBQyxFQUFFO1lBQ3RHSixpQkFBaUIsZ0JBQUcxSSxNQUFBLFlBQUFnSixhQUFBLENBQUN0SSxrQkFBQSxDQUFBdUksaUJBQWlCO2NBQUNDLE9BQU8sRUFBRVYsT0FBTyxDQUFDVyxJQUFLO2NBQUNSLFNBQVMsRUFBRXBFLE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQzJGLFNBQVU7Y0FBQy9FLE9BQU8sRUFBRTRFLE9BQU8sQ0FBQzVFO1lBQVEsQ0FBQyxDQUFDO1VBQzVILENBQUMsTUFBTTtZQUNMLElBQUl3RixNQUFNLEdBQUcxQyxRQUFRLENBQUNwQixLQUFLLElBQUlvQixRQUFRLENBQUNwQixLQUFLLENBQUMsSUFBSVAsV0FBTyxDQUFDO2NBQUNMLFFBQVEsRUFBRSxJQUFJQyxXQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRytCLFFBQVEsQ0FBQ3BCLEtBQUssQ0FBQyxJQUFJUCxXQUFPLENBQUM7Y0FBQ0wsUUFBUSxFQUFFLElBQUlDLFdBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFFLElBQUk7WUFDaEwsSUFBSTBFLFlBQVksR0FBR0MsS0FBSyxDQUFDQyxPQUFPLENBQUNILE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUVBLE1BQU07WUFDNUQsSUFBSUMsWUFBWSxJQUFJQSxZQUFZLENBQUNHLE9BQU8sQ0FBQyxDQUFDLElBQUlILFlBQVksQ0FBQ0ksU0FBUyxDQUFDLENBQUMsRUFBRTtjQUN0RWhCLEtBQUssR0FBR1ksWUFBWSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQztZQUMzQyxDQUFDLE1BQU0sSUFBSWYsU0FBUyxJQUFJQSxTQUFTLENBQUNnQixTQUFTLElBQUloQixTQUFTLENBQUNpQixXQUFXLEVBQUU7Y0FDcEVuQixLQUFLLEdBQUdyQyxtQkFBSyxDQUFDeUQsd0JBQXdCLENBQUNsQixTQUFTLENBQUNnQixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUVoQixTQUFTLENBQUNnQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEY7WUFFQWpCLGlCQUFpQixnQkFBRzFJLE1BQUEsWUFBQWdKLGFBQUE7Y0FBTWMsS0FBSyxFQUFFdEIsT0FBTyxDQUFDVyxJQUFLO2NBQUNZLFNBQVMsRUFBRSxxQkFBc0I7Y0FBQ3pFLEtBQUssRUFBRTtnQkFDdEYsaUJBQWlCLEVBQUdtRDtjQUN0QjtZQUFFLENBQUMsQ0FBQztVQUNOO1VBR0Esb0JBQVF6SSxNQUFBLFlBQUFnSixhQUFBO1lBQVE1RSxHQUFHLEVBQUVvRSxPQUFPLENBQUM5RSxFQUFHO1lBQUM0QixLQUFLLEVBQUU7Y0FBQzBFLE1BQU0sRUFBRSxNQUFNO2NBQUVDLEtBQUssRUFBRTtZQUFNLENBQUU7WUFDeERDLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQU87Y0FBQzNGLE1BQUksQ0FBQzJELFFBQVEsQ0FBQztnQkFBQzFFLGFBQWEsRUFBRWdGLE9BQU8sQ0FBQzlFLEVBQUU7Z0JBQUVDLFdBQVcsRUFBRTZFLE9BQU8sQ0FBQzVFO2NBQU8sQ0FBQyxDQUFDO1lBQUE7VUFBRSxHQUN4RzhFLGlCQUNLLENBQUM7UUFDWCxDQUFDLENBQUM7TUFHSjtNQUNBLElBQUl5QixZQUFZLEdBQUcsSUFBSTtNQUN2QixJQUFJLG1CQUFtQixDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDcEgsS0FBSyxDQUFDd0IsSUFBSSxDQUFDLEVBQUU7UUFDakQsSUFBSTZGLGFBQWEsR0FBRyxrQkFBa0I7UUFDdENBLGFBQWEsSUFBSSxJQUFJLENBQUNqSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxZQUFZLEdBQUcsY0FBYztRQUNwRThHLFlBQVksZ0JBQUluSyxNQUFBLFlBQUFnSixhQUFBO1VBQUdlLFNBQVMsRUFBRU0sYUFBYztVQUFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDOUcsS0FBSyxDQUFDc0gsSUFBSSxDQUFDQyxpQ0FBa0M7VUFBQ0wsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUEsRUFBUTtZQUFDM0YsTUFBSSxDQUFDaUcsY0FBYyxDQUFDLENBQUM7VUFBQTtRQUFFLEdBQUUsSUFBSSxDQUFDeEgsS0FBSyxDQUFDc0gsSUFBSSxDQUFDQyxpQ0FBcUMsQ0FBRTtNQUMzTTtNQUNBLElBQUlFLGlCQUFpQixHQUFHLEVBQUU7TUFDMUIsSUFBSSxJQUFJLENBQUNySCxLQUFLLENBQUNFLGVBQWUsSUFBSSxJQUFJLENBQUNOLEtBQUssQ0FBQ3dCLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDOUQyRixZQUFZLGdCQUFJbkssTUFBQSxZQUFBZ0osYUFBQTtVQUFLZSxTQUFTLEVBQUU7UUFBMkIsZ0JBQ3pEL0osTUFBQSxZQUFBZ0osYUFBQTtVQUFRYyxLQUFLLEVBQUUsSUFBSSxDQUFDOUcsS0FBSyxDQUFDc0gsSUFBSSxDQUFDSSxxQkFBc0I7VUFBQ1gsU0FBUyxFQUFFLDRCQUE0QixJQUFJLElBQUksQ0FBQzNHLEtBQUssQ0FBQ1MsVUFBVSxLQUFLLFFBQVEsR0FBRyxZQUFZLEdBQUUsY0FBYyxDQUFFO1VBQUNxRyxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBQSxFQUFRO1lBQUMzRixNQUFJLENBQUNvRyxtQkFBbUIsQ0FBQyxDQUFDO1VBQUE7UUFBRSxDQUFDLENBQ2pOLENBQUU7UUFDUCxLQUFLLElBQUk1SSxDQUFDLElBQUksSUFBSSxDQUFDaUIsS0FBSyxDQUFDNEgsVUFBVSxFQUFFO1VBQ25DLElBQUksSUFBSSxDQUFDNUgsS0FBSyxDQUFDNEgsVUFBVSxDQUFDL0ksY0FBYyxDQUFDRSxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJOEksU0FBUyxHQUFHLElBQUksQ0FBQzdILEtBQUssQ0FBQzRILFVBQVUsQ0FBQzdJLENBQUMsQ0FBQztZQUN4QyxJQUFJOEksU0FBUyxDQUFDQyxPQUFPLElBQUlELFNBQVMsQ0FBQ3pHLEdBQUcsRUFBRTtjQUN0QyxJQUFJQyxLQUFLLEdBQUcsSUFBSSxDQUFDakIsS0FBSyxDQUFDRSxlQUFlLENBQUNqQyxHQUFHLENBQUN3SixTQUFTLENBQUN6RyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNoQixLQUFLLENBQUNFLGVBQWUsQ0FBQ2pDLEdBQUcsQ0FBQ3dKLFNBQVMsQ0FBQ3pHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Y0FDOUdxRyxpQkFBaUIsQ0FBQy9DLElBQUksY0FDbEIxSCxNQUFBLFlBQUFnSixhQUFBO2dCQUFNZSxTQUFTLEVBQUUsdUJBQXdCO2dCQUFDM0YsR0FBRyxFQUFFckMsQ0FBRTtnQkFBQ2dKLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHdEYsS0FBSyxFQUFLO2tCQUFDQSxLQUFLLENBQUN1RixjQUFjLENBQUMsQ0FBQztnQkFBQTtjQUFFLGdCQUM5RmhMLE1BQUEsWUFBQWdKLGFBQUEsZ0JBQ0c2QixTQUFTLENBQUNDLE9BQU8sRUFBQyxHQUNuQixlQUFBOUssTUFBQSxZQUFBZ0osYUFBQTtnQkFBTzVELElBQUksRUFBQyxNQUFNO2dCQUFDZixLQUFLLEVBQUVBLEtBQU07Z0JBQUM4RSxJQUFJLEVBQUUwQixTQUFTLENBQUN6RyxHQUFJO2dCQUFDNkcsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUd4RixLQUFLLEVBQUc7a0JBQUNsQixNQUFJLENBQUMyRyxlQUFlLENBQUN6RixLQUFLLENBQUM7Z0JBQUE7Y0FBRSxDQUFDLENBQ25HLENBQ0gsQ0FDVixDQUFDO1lBQ0g7VUFDRjtRQUNGO01BRUY7TUFFQSxvQkFDRXpGLE1BQUEsWUFBQWdKLGFBQUEsQ0FBQ2hKLE1BQUEsV0FBSyxDQUFDbUwsUUFBUSxxQkFDYm5MLE1BQUEsWUFBQWdKLGFBQUEsY0FDR21CLFlBQVksZUFDYm5LLE1BQUEsWUFBQWdKLGFBQUE7UUFBS2UsU0FBUyxFQUFFO01BQStCLEdBQzVDdEcsUUFDRSxDQUNGLENBQUMsZUFDTnpELE1BQUEsWUFBQWdKLGFBQUE7UUFBS2UsU0FBUyxFQUFFO01BQWtCLEdBQy9CVSxpQkFDRSxDQUNTLENBQUM7SUFFckI7RUFBQztJQUFBckcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosZ0JBQWdCQSxDQUFBLEVBQUc7TUFDakIsSUFBSSxJQUFJLENBQUNILFdBQVcsRUFBRTtRQUFFO1FBQ3RCLElBQUl3RixLQUFLLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUN6RixXQUFXLENBQUMsRUFBRTtVQUNuQyxJQUFJLENBQUNkLEtBQUssQ0FBQ3VFLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDNEQsaUJBQWlCLENBQUMsSUFBSSxDQUFDdEgsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ25FLElBQUksQ0FBQ2QsS0FBSyxDQUFDdUUsYUFBYSxDQUFDQyxHQUFHLENBQUM0RCxpQkFBaUIsQ0FBQyxJQUFJLENBQUN0SCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQyxNQUNJO1VBQ0gsSUFBSSxDQUFDZCxLQUFLLENBQUN1RSxhQUFhLENBQUNDLEdBQUcsQ0FBQzRELGlCQUFpQixDQUFDLElBQUksQ0FBQ3RILFdBQVcsQ0FBQztRQUNsRTtNQUNGO0lBQ0Y7RUFBQztJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0csbUJBQW1CQSxDQUFBLEVBQUk7TUFDckIsSUFBSWhGLE9BQU8sR0FBRyxJQUFJZ0IsZUFBTyxDQUFDLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDeEQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7UUFDekV1RCxjQUFjLEVBQUUsV0FBVztRQUMzQkMsaUJBQWlCLEVBQUU7TUFDckIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDOUQsS0FBSyxDQUFDcUksYUFBYSxDQUFDMUYsT0FBTyxDQUFDO01BQ2pDLElBQUlWLE1BQU0sR0FBRyxJQUFJLENBQUNqQyxLQUFLLENBQUNrQyxXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUFDO01BQy9DRixNQUFNLENBQUNvRyxhQUFhLENBQUMsSUFBSSxDQUFDakksS0FBSyxDQUFDRSxlQUFlLENBQUM7TUFDaEQsSUFBSSxDQUFDNEUsUUFBUSxDQUFDO1FBQ1o1RSxlQUFlLEVBQUU7TUFDbkIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUgsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO01BQUEsSUFBQUMsTUFBQTtNQUNqRCxJQUFJLElBQUksQ0FBQzFJLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJOEgsU0FBUyxDQUFDL0csSUFBSSxLQUFLLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ3dCLElBQUksRUFBRTtRQUNoRSxJQUFJLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ0ksYUFBYSxLQUFLLENBQUMsRUFBRTtVQUNsQyxJQUFJLENBQUMwRSxRQUFRLENBQUM7WUFDWjFFLGFBQWEsRUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFO1lBQ3hDQyxXQUFXLEVBQUUsSUFBSSxDQUFDWCxLQUFLLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0c7VUFDdEMsQ0FBQyxDQUFDO1VBQ0Y7VUFDQTtRQUNGLENBQUMsTUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDWixLQUFLLENBQUNTLFFBQVEsQ0FBQ2tJLElBQUksQ0FBQyxVQUFBbkQsT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQzlFLEVBQUUsS0FBS2dJLE1BQUksQ0FBQ3RJLEtBQUssQ0FBQ0ksYUFBYTtRQUFBLEVBQUMsRUFBRTtVQUN0RixJQUFJLENBQUMwRSxRQUFRLENBQUM7WUFDWjFFLGFBQWEsRUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFO1lBQ3hDQyxXQUFXLEVBQUUsSUFBSSxDQUFDWCxLQUFLLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0c7VUFDdEMsQ0FBQyxDQUFDO1VBQ0Y7VUFDQTtRQUNGO01BQ0Y7SUFDRjtFQUFDO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1SCxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRTtNQUN2QixJQUFJLENBQUMzRCxRQUFRLENBQUM7UUFDWnJFLFVBQVUsRUFBRWdJO01BQ2QsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBekgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTZHLGVBQWVBLENBQUN6RixLQUFLLEVBQUU7TUFDckIsSUFBSXBCLEtBQUssR0FBR29CLEtBQUssQ0FBQ3FHLE1BQU0sQ0FBQ3pILEtBQUs7TUFDOUIsSUFBSThFLElBQUksR0FBRzFELEtBQUssQ0FBQ3FHLE1BQU0sQ0FBQzNDLElBQUk7TUFDNUIsSUFBSSxDQUFDL0YsS0FBSyxDQUFDRSxlQUFlLENBQUN0QixHQUFHLENBQUNtSCxJQUFJLEVBQUU5RSxLQUFLLENBQUM7TUFDM0MsSUFBSXNCLE9BQU8sR0FBRyxJQUFJZ0IsZUFBTyxDQUFDLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDeEQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7UUFDekV1RCxjQUFjLEVBQUUsV0FBVztRQUMzQkMsaUJBQWlCLEVBQUU7TUFDckIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDOUQsS0FBSyxDQUFDc0YsYUFBYSxDQUFDM0MsT0FBTyxDQUFDO01BQ2pDLElBQUksQ0FBQ3VDLFFBQVEsQ0FBQztRQUFDLGlCQUFpQixFQUFHLElBQUksQ0FBQzlFLEtBQUssQ0FBQ0U7TUFBZSxDQUFDLENBQUM7SUFDakU7RUFBQztJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUcsY0FBY0EsQ0FBQSxFQUFHO01BQ2YsSUFBSSxDQUFDdEMsUUFBUSxDQUFDO1FBQ1o3RSxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUNELEtBQUssQ0FBQ0M7TUFDeEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBZSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTixVQUFVQSxDQUFDMEIsS0FBSyxFQUFFO01BQ2hCLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQztRQUFDM0UsUUFBUSxFQUFFa0MsS0FBSyxDQUFDcUcsTUFBTSxDQUFDekg7TUFBSyxDQUFDLENBQUM7SUFDL0M7RUFBQztBQUFBLEVBN1NxQzBILGdCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JqRCxJQUFBL0wsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUE4TCxRQUFBLEdBQUFDLHNCQUFBLENBQUEvTCxtQkFBQTtBQUNBLElBQUFLLEtBQUEsR0FBQUwsbUJBQUE7QUFDQSxJQUFBZ00sZ0JBQUEsR0FBQWhNLG1CQUFBO0FBQ0EsSUFBQU8sYUFBQSxHQUFBUCxtQkFBQTtBQUF3QyxTQUFBVyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQWIsd0JBQUFhLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQWJ4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWdCYWdJLGlCQUFpQixHQUFBbkcseUJBQUEsMEJBQUFDLFVBQUE7RUFDMUIsU0FBQWtHLGtCQUFZakcsS0FBSyxFQUFFO0lBQUEsSUFBQUUsZ0JBQUEsbUJBQUErRixpQkFBQTtJQUFBLE9BQUFoSCxVQUFBLE9BQUFnSCxpQkFBQSxHQUNUakcsS0FBSztFQUNmO0VBQUMsSUFBQWtCLFVBQUEsYUFBQStFLGlCQUFBLEVBQUFsRyxVQUFBO0VBQUEsV0FBQW9CLGFBQUEsYUFBQThFLGlCQUFBO0lBQUE3RSxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBOEgsVUFBVUEsQ0FBRXJMLENBQUMsRUFBRTtNQUNYLElBQUlBLENBQUMsQ0FBQ3NMLEtBQUssS0FBSyxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDcEosS0FBSyxDQUFDcUosVUFBVSxDQUFDdkwsQ0FBQyxDQUFDO01BQzVCO0lBQ0o7RUFBQztJQUFBc0QsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQXJCLEtBQUE7TUFFTDtNQUNBLElBQUl5RixpQkFBaUIsR0FBRyxJQUFJO01BQzVCLElBQUloQyxRQUFRLEdBQUcsSUFBSSxDQUFDMUQsS0FBSyxDQUFDMkYsU0FBUyxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDNUYsS0FBSyxDQUFDWSxPQUFPLENBQUM7TUFDcEUsSUFBSStFLFNBQVMsR0FBR2pDLFFBQVEsQ0FBQ21DLFdBQVc7TUFDcEMsSUFBSU8sTUFBTSxHQUFHMUMsUUFBUSxDQUFDcEIsS0FBSyxJQUFJb0IsUUFBUSxDQUFDcEIsS0FBSyxDQUFDLElBQUlQLG1CQUFPLENBQUM7UUFBQ0wsUUFBUSxFQUFFLElBQUlDLFdBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztNQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHK0IsUUFBUSxDQUFDcEIsS0FBSyxDQUFDLElBQUlQLG1CQUFPLENBQUM7UUFBQ0wsUUFBUSxFQUFFLElBQUlDLFdBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQztNQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFFLElBQUk7TUFDaEwsSUFBSTJILE1BQU0sR0FBR2hELEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFFQSxNQUFNO01BQ3RELElBQUlOLFNBQVMsR0FBR0gsU0FBUyxHQUFHQSxTQUFTLENBQUNJLFNBQVMsR0FBRyxTQUFTO01BQzNELElBQUlHLE9BQU8sR0FBRyxJQUFJLENBQUNsRyxLQUFLLENBQUNrRyxPQUFPLElBQUksRUFBRTtNQUN0QyxJQUFJUCxTQUFTLEtBQUtHLFNBQVMsS0FBSyxXQUFXLElBQUlBLFNBQVMsS0FBSyxlQUFlLElBQUlBLFNBQVMsS0FBSyxPQUFPLENBQUMsRUFBRTtRQUNwRyxJQUFJeUQsU0FBUyxHQUFHLElBQUk7UUFDcEIsSUFBSUMsT0FBTztRQUNYLElBQUs3RCxTQUFTLENBQUM4RCxRQUFRLElBQUk5RCxTQUFTLENBQUM4RCxRQUFRLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBTS9ELFNBQVMsQ0FBQ2dFLE1BQU0sSUFBSWhFLFNBQVMsQ0FBQ2dFLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBRSxFQUFFO1VBQzlILElBQUk1RCxTQUFTLEtBQUssV0FBVyxJQUFJQSxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQ3BEMEQsT0FBTyxHQUFHN0QsU0FBUyxDQUFDOEQsUUFBUTtVQUNoQyxDQUFDLE1BQ0k7WUFDREQsT0FBTyxHQUFHN0QsU0FBUyxDQUFDZ0UsTUFBTTtVQUM5QjtVQUNBSixTQUFTLGdCQUFHdk0sTUFBQSxZQUFBZ0osYUFBQTtZQUFLNEQsR0FBRyxFQUFFSixPQUFRO1lBQUNsSCxLQUFLLEVBQUU7Y0FBQzBFLE1BQU0sRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRTtZQUFFO1VBQUUsQ0FBRSxDQUFDO1FBQ3JFLENBQUMsTUFBTSxJQUFJcUMsTUFBTSxFQUFFO1VBQ2YsSUFBSU8sVUFBVSxHQUFHUCxNQUFNLENBQUNRLFFBQVEsSUFBSSxPQUFPUixNQUFNLENBQUNRLFFBQVEsS0FBSyxVQUFVLElBQUlSLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDLENBQUMsR0FBR1IsTUFBTSxDQUFDUSxRQUFRLENBQUMsQ0FBQyxHQUFFLElBQUk7VUFDeEgsSUFBSUQsVUFBVSxJQUFJQSxVQUFVLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDbkNSLFNBQVMsZ0JBQUd2TSxNQUFBLFlBQUFnSixhQUFBO2NBQUs0RCxHQUFHLEVBQUVDLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDLENBQUU7Y0FBQ3pILEtBQUssRUFBRTtnQkFBQzBFLE1BQU0sRUFBRSxFQUFFO2dCQUFFQyxLQUFLLEVBQUU7Y0FBRTtZQUFFLENBQUMsQ0FBQztVQUNoRixDQUFDLE1BQ0k7WUFDRCxPQUFPLElBQUk7VUFDZjtRQUNKO1FBQ0EsSUFBSSxJQUFJLENBQUNqSCxLQUFLLENBQUNxSixVQUFVLEVBQUU7VUFDdkIzRCxpQkFBaUIsZ0JBQUcxSSxNQUFBLFlBQUFnSixhQUFBO1lBQU1nRSxRQUFRLEVBQUUsQ0FBRTtZQUFDakQsU0FBUyxFQUFFa0QsNkJBQVksQ0FBQ0Msa0JBQW1CO1lBQUNwRCxLQUFLLEVBQUVaLE9BQVE7WUFBQ2lFLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFHMUgsS0FBSztjQUFBLE9BQUt4QyxLQUFJLENBQUNrSixVQUFVLENBQUMxRyxLQUFLLENBQUM7WUFBQSxDQUFDO1lBQUN5RSxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBR3pFLEtBQUs7Y0FBQSxPQUFJeEMsS0FBSSxDQUFDRCxLQUFLLENBQUNxSixVQUFVLENBQUM1RyxLQUFLLENBQUM7WUFBQTtVQUFDLEdBQUU4RyxTQUFnQixDQUFDO1FBQzNOLENBQUMsTUFDSTtVQUNEN0QsaUJBQWlCLGdCQUFHMUksTUFBQSxZQUFBZ0osYUFBQTtZQUFNZSxTQUFTLEVBQUVrRCw2QkFBWSxDQUFDQyxrQkFBbUI7WUFBQ3BELEtBQUssRUFBRVo7VUFBUSxHQUFFcUQsU0FBZ0IsQ0FBQztRQUM1RztNQUNKLENBQUMsTUFBTTtRQUNILElBQUlhLFFBQVE7UUFDWixRQUFRdEUsU0FBUztVQUFJO1VBQ2pCLEtBQUssT0FBTztZQUNSc0UsUUFBUSxHQUFHSCw2QkFBWSxDQUFDSSx3QkFBd0I7WUFDaEQ7VUFDSixLQUFLLFFBQVE7WUFDVEQsUUFBUSxHQUFHSCw2QkFBWSxDQUFDSyx5QkFBeUI7WUFDakQ7VUFDSixLQUFLLE1BQU07WUFDUEYsUUFBUSxHQUFHSCw2QkFBWSxDQUFDTSx1QkFBdUI7WUFDL0M7VUFDSixLQUFLLEdBQUc7WUFDSkgsUUFBUSxHQUFHSCw2QkFBWSxDQUFDTyxvQkFBb0I7WUFDNUM7VUFDSixLQUFLLE9BQU87WUFDUkosUUFBUSxHQUFHSCw2QkFBWSxDQUFDUSx3QkFBd0I7WUFDaEQ7VUFDSixLQUFLLFVBQVU7WUFDWEwsUUFBUSxHQUFHSCw2QkFBWSxDQUFDUywyQkFBMkI7WUFDbkQ7VUFDSjtZQUNJTixRQUFRLEdBQUVILDZCQUFZLENBQUNDLGtCQUFrQjtZQUN6QztRQUNSO1FBQ0EsSUFBSXpFLEtBQUssRUFBRWtGLFdBQVc7UUFDdEIsSUFBSXJCLE1BQU0sSUFBSUEsTUFBTSxDQUFDOUMsT0FBTyxDQUFDLENBQUMsSUFBSThDLE1BQU0sQ0FBQzdDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7VUFDbERoQixLQUFLLEdBQUc2RCxNQUFNLENBQUM5QyxPQUFPLENBQUMsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQztVQUNuQ2lFLFdBQVcsR0FBR3JCLE1BQU0sQ0FBQzdDLFNBQVMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLENBQUMsTUFDSSxJQUFJZixTQUFTLElBQUlBLFNBQVMsQ0FBQ2dCLFNBQVMsSUFBSWhCLFNBQVMsQ0FBQ2lCLFdBQVcsRUFBRTtVQUNoRW5CLEtBQUssR0FBR3JDLG1CQUFLLENBQUN5RCx3QkFBd0IsQ0FBQ2xCLFNBQVMsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRWhCLFNBQVMsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN0RmdFLFdBQVcsR0FBR3ZILG1CQUFLLENBQUN5RCx3QkFBd0IsQ0FBQ2xCLFNBQVMsQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRWpCLFNBQVMsQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRztRQUNBLElBQUlnRSxhQUFhLEdBQUc7VUFDaEIsYUFBYSxFQUFHbkYsS0FBSztVQUNyQixtQkFBbUIsRUFBR2tGO1FBQzFCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQzNLLEtBQUssQ0FBQ3FKLFVBQVUsRUFBRTtVQUN2QjNELGlCQUFpQixnQkFBRzFJLE1BQUEsWUFBQWdKLGFBQUE7WUFBTWUsU0FBUyxFQUFFcUQsUUFBUztZQUFDOUgsS0FBSyxFQUFFc0ksYUFBYztZQUFDOUQsS0FBSyxFQUFFWixPQUFRO1lBQUNnQixTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBR3pFLEtBQUs7Y0FBQSxPQUFJeEMsS0FBSSxDQUFDRCxLQUFLLENBQUNxSixVQUFVLENBQUM1RyxLQUFLLENBQUM7WUFBQTtVQUFDLENBQUMsQ0FBQztRQUM3SSxDQUFDLE1BQ0k7VUFDRGlELGlCQUFpQixnQkFBRzFJLE1BQUEsWUFBQWdKLGFBQUE7WUFBTWUsU0FBUyxFQUFFcUQsUUFBUztZQUFDOUgsS0FBSyxFQUFFc0ksYUFBYztZQUFDOUQsS0FBSyxFQUFFWjtVQUFRLENBQUMsQ0FBQztRQUMxRjtNQUNKO01BQ0EsT0FBT1IsaUJBQWlCO0lBQzVCO0VBQUM7QUFBQSxFQTNGa0NxRCxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3Itdmlldy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnQsIExpbmVTdHJpbmcsIFBvbHlnb24sIENpcmNsZX0gZnJvbSAnb2wvZ2VvbSdcbmltcG9ydCB7RHJhdywgU2VsZWN0LCBNb2RpZnksIFNuYXB9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeFwiO1xuaW1wb3J0IHtDNGdQb3B1cENvbnRyb2xsZXJ9IGZyb20gXCIuLy4uL2M0Zy1wb3B1cC1jb250cm9sbGVyXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvclZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZnJlZWhhbmQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBmYWxzZSxcbiAgICAgIGZlYXR1cmVzOiBcIltdXCIsXG4gICAgICBhY3RpdmVFbGVtZW50OiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLmlkIDogMCxcbiAgICAgIGFjdGl2ZVN0eWxlOiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWQgOiAwLFxuICAgICAgc2VsZWN0TW9kZTogXCJtb2RpZnlcIlxuICAgIH07XG4gICAgdGhpcy5pbnRlcmFjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5jaGFuZ2VKU09OID0gdGhpcy5jaGFuZ2VKU09OLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEludGVyYWN0aW9uID0gdGhpcy5yZXNldEludGVyYWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgICAgbGV0IGdlb21ldHJ5O1xuICAgICAgc3dpdGNoKHRoaXMucHJvcHMubW9kZSkge1xuICAgICAgICBjYXNlIFwiUG9pbnRcIjpcbiAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBQb2ludCgwLDApO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6XG4gICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgTGluZVN0cmluZyhbWzAsMF0sIFsxLDFdXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQb2x5Z29uXCI6XG4gICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgUG9seWdvbihbWzAsMF0sIFsxLDFdXSlcbiAgICAgIH1cbiAgICAgIGxldCBmZWF0dXJlID0gbmV3IEZlYXR1cmUoZ2VvbWV0cnkpO1xuICAgICAgZmVhdHVyZS5zZXQoJ2xvY3N0eWxlJywgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSlcbiAgICAgIHRoaXMuaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG5cbiAgICAgICAgLy8gZmVhdHVyZXM6IHRoaXMucHJvcHMuZmVhdHVyZXMsXG4gICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5tb2RlLFxuICAgICAgICBzbmFwVG9sZXJhbmNlOiAxLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZUZ1bmN0aW9uKGZlYXR1cmUpLFxuICAgICAgICBmcmVlaGFuZDogdGhpcy5zdGF0ZS5mcmVlaGFuZFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnZWRpdG9ySWQnLCB0aGlzLnByb3BzLmVkaXRvcklkKTtcbiAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnbG9jc3R5bGUnLCB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlKTtcbiAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnZWxlbWVudElkJywgdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgICBsZXQgZ2VvanNvbjtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcIkNpcmNsZVwiKSB7IC8vdHVybiBDaXJjbGUgaW50byB2YWxpZCBHZW9KU09OXG4gICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKS50cmFuc2Zvcm0oXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFJhZGl1cygpO1xuICAgICAgICAgICAgbGV0IHJlYWxSYWRpdXMgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpKS5yYXdWYWx1ZTtcbiAgICAgICAgICAgIGdlb2pzb24gPSB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBlZGl0b3JJZDogdGhpcy5wcm9wcy5lZGl0b3JJZCxcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQ6IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgICBsb2NzdHlsZTogdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcbiAgICAgICAgICAgICAgICByZWFsUmFkaXVzOiByZWFsUmFkaXVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGV2ZW50LmZlYXR1cmUsIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIGdlb2pzb246IGdlb2pzb24sXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBmb3JtYXQ6IG5ldyBHZW9KU09OKClcbiAgICAgICAgICB9XG4gICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9kcmF3LCBwYXJhbXMpO1xuICAgICAgICAgIHRoaXMucHJvcHMuYWRkRmVhdHVyZShnZW9qc29uKVxuICAgICAgICAgIHRoaXMucHJvcHMuY291bnRFZGl0b3JJZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyBhZGQgaW50ZXJhY3Rpb24gdG8gbWFwXG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb24pO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMucmVzZXRJbnRlcmFjdGlvbigpO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IFtdO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbi5wdXNoKG5ldyBTZWxlY3Qoe1xuICAgICAgICBsYXllcnM6IFt0aGlzLnByb3BzLmVkaXRvckxheWVyXSxcbiAgICAgICAgaGl0VG9sZXJhbmNlOiAyMFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5pbnRlcmFjdGlvbi5wdXNoKG5ldyBNb2RpZnkoe1xuICAgICAgICBmZWF0dXJlczogdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUgPyBuZXcgQ29sbGVjdGlvbihbdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmVdKSA6IG5ldyBDb2xsZWN0aW9uKFtuZXcgRmVhdHVyZSgpXSksXG4gICAgICAgIC8vIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgcGl4ZWxUb2xlcmFuY2U6IDIwXG4gICAgICB9KSk7XG5cbiAgICAgIHRoaXMuaW50ZXJhY3Rpb25bMF0ub24oJ3NlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gZS5zZWxlY3RlZFswXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRGZWF0dXJlOiBmZWF0dXJlfSk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdGhpcy5pbnRlcmFjdGlvblsxXS5vbignbW9kaWZ5ZW5kJywgKGUpID0+IHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBlLmZlYXR1cmVzLmdldEFycmF5KClbMF07XG4gICAgICAgIGxldCBnZW9qc29uO1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpIGluc3RhbmNlb2YgQ2lyY2xlKSB7IC8vdHVybiBDaXJjbGUgaW50byB2YWxpZCBHZW9KU09OXG4gICAgICAgICAgbGV0IGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCkudHJhbnNmb3JtKFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpO1xuICAgICAgICAgIGxldCBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICBsZXQgcmFkaXVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFJhZGl1cygpO1xuICAgICAgICAgIGxldCByZWFsUmFkaXVzID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkucmF3VmFsdWU7XG4gICAgICAgICAgZ2VvanNvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgICBjb29yZGluYXRlczogY2VudGVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBlZGl0b3JJZDogZmVhdHVyZS5nZXQoJ2VkaXRvcklkJyksXG4gICAgICAgICAgICAgIGVsZW1lbnRJZDogZmVhdHVyZS5nZXQoJ2VsZW1lbnRJZCcpLFxuICAgICAgICAgICAgICBsb2NzdHlsZTogZmVhdHVyZS5nZXQoJ2FjdGl2ZVN0eWxlJyksXG4gICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICAgICAgICByZWFsUmFkaXVzOiByZWFsUmFkaXVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdChmZWF0dXJlLCB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICBzb3VyY2U6IHRoaXMucHJvcHMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCksXG4gICAgICAgICAgZ2VvanNvbjogZ2VvanNvbixcbiAgICAgICAgICBldmVudDogZSxcbiAgICAgICAgICBmb3JtYXQ6IG5ldyBHZW9KU09OKClcbiAgICAgICAgfTtcbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9tb2RpZnksIHBhcmFtcyk7XG4gICAgICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShnZW9qc29uKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uWzBdKTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvblsxXSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNldEludGVyYWN0aW9uKCk7XG4gICAgfVxuICAgIGxldCBlbGVtZW50cyA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZWxlbWVudHMgJiYgdGhpcy5wcm9wcy5lbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBlbGVtZW50cyA9IHRoaXMucHJvcHMuZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBjb2xvciwgc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1tlbGVtZW50LnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPEM0Z1N0YXJib2FyZFN0eWxlIHRvb2x0aXA9e2VsZW1lbnQubmFtZX0gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17ZWxlbWVudC5zdHlsZUlkfS8+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICAgIGxldCBmZWF0dXJlU3R5bGUgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgICBpZiAoZmVhdHVyZVN0eWxlICYmIGZlYXR1cmVTdHlsZS5nZXRGaWxsKCkgJiYgZmVhdHVyZVN0eWxlLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICBjb2xvciA9IGZlYXR1cmVTdHlsZS5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiB0aXRsZT17ZWxlbWVudC5uYW1lfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1sb2NzdHlsZVwifSBzdHlsZT17e1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIiA6IGNvbG9yXG4gICAgICAgICAgfX0vPjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuICg8YnV0dG9uIGtleT17ZWxlbWVudC5pZH0gc3R5bGU9e3toZWlnaHQ6IFwiMzJweFwiLCB3aWR0aDogXCIzMnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9Pnt0aGlzLnNldFN0YXRlKHthY3RpdmVFbGVtZW50OiBlbGVtZW50LmlkLCBhY3RpdmVTdHlsZTogZWxlbWVudC5zdHlsZUlkfSl9fT5cbiAgICAgICAgICB7c3R5bGVUcmlnZ2VyTGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPilcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgbGV0IGN1c3RvbUJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKFwiTGluZVN0cmluZ1BvbHlnb25cIi5pbmNsdWRlcyh0aGlzLnByb3BzLm1vZGUpKSB7XG4gICAgICBsZXQgZnJlZWhhbmRDbGFzcyA9IFwiYzRnLWVkaXRvci12aWV3IFwiO1xuICAgICAgZnJlZWhhbmRDbGFzcyArPSB0aGlzLnN0YXRlLmZyZWVoYW5kID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgY3VzdG9tQnV0dG9uID0gKDxhIGNsYXNzTmFtZT17ZnJlZWhhbmRDbGFzc30gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5FRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkR9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuY2hhbmdlRnJlZWhhbmQoKX19Pnt0aGlzLnByb3BzLmxhbmcuRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EfTwvYT4pO1xuICAgIH1cbiAgICBsZXQgYXJyRm9ybUVkaXRvclZhcnMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICBjdXN0b21CdXR0b24gPSAoPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICA8YnV0dG9uIHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuRURJVE9SX0ZFQVRVUkVfREVMRVRFfSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1mZWF0dXJlLWRlbGV0ZSBcIiArICh0aGlzLnN0YXRlLnNlbGVjdE1vZGUgPT09IFwicmVtb3ZlXCIgPyBcImM0Zy1hY3RpdmVcIjogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMucmVtb3ZlQWN0aXZlRmVhdHVyZSgpfX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5lZGl0b3JWYXJzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVkaXRvclZhcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgZWRpdG9yVmFyID0gdGhpcy5wcm9wcy5lZGl0b3JWYXJzW2ldO1xuICAgICAgICAgIGlmIChlZGl0b3JWYXIuY2FwdGlvbiAmJiBlZGl0b3JWYXIua2V5KSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5nZXQoZWRpdG9yVmFyLmtleSkgPyB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5nZXQoZWRpdG9yVmFyLmtleSkgOiBcIlwiO1xuICAgICAgICAgICAgYXJyRm9ybUVkaXRvclZhcnMucHVzaChcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12YXJzLWlucHV0XCJ9IGtleT17aX0gb25TdWJtaXQ9eyhldmVudCkgPT4ge2V2ZW50LnByZXZlbnREZWZhdWx0KCl9fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2VkaXRvclZhci5jYXB0aW9ufTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBuYW1lPXtlZGl0b3JWYXIua2V5fSBvbkNoYW5nZT17KGV2ZW50KT0+e3RoaXMuaGFuZGxlVmFyQ2hhbmdlKGV2ZW50KX19Lz5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2N1c3RvbUJ1dHRvbn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWVsZW1lbnQtc2VsZWN0aW9uXCJ9PlxuICAgICAgICAgICAge2VsZW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12YXJzXCJ9PlxuICAgICAgICAgIHthcnJGb3JtRWRpdG9yVmFyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlc2V0SW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb24pIHsgLy9vbmx5IG9uZSBkcmF3aW50ZXJhY3Rpb24gYXQgYSB0aW1lXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmludGVyYWN0aW9uKSkge1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWN0aXZlRmVhdHVyZSAoKSB7XG4gICAgbGV0IGdlb2pzb24gPSBuZXcgR2VvSlNPTigpLndyaXRlRmVhdHVyZU9iamVjdCh0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgZGF0YVByb2plY3Rpb246IFwiRVBTRzo0MzI2XCIsXG4gICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5yZW1vdmVGZWF0dXJlKGdlb2pzb24pO1xuICAgIGxldCBzb3VyY2UgPSB0aGlzLnByb3BzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpO1xuICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKHRoaXMuc3RhdGUuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRmVhdHVyZTogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVsZW1lbnRzWzBdICYmIHByZXZQcm9wcy5tb2RlICE9PSB0aGlzLnByb3BzLm1vZGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZFxuICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuZWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnN0YXRlLmFjdGl2ZUVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkXG4gICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUgPSB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTZWxlY3RNb2RlKHN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0TW9kZTogc3RyaW5nXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVWYXJDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZS5zZXQobmFtZSwgdmFsdWUpO1xuICAgIGxldCBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QodGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmUsIHtcbiAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICB9KVxuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShnZW9qc29uKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkRmVhdHVyZVwiIDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZlYXR1cmV9KTtcbiAgfVxuXG4gIGNoYW5nZUZyZWVoYW5kKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZnJlZWhhbmQ6ICF0aGlzLnN0YXRlLmZyZWVoYW5kXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUpTT04oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlczogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGVudGVyRXZlbnQgKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgbGV0IHRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXAgfHwgXCJcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5lbnRlckV2ZW50KGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkgeyAvLyAncG9pbnQnLCAnc3F1YXJlJywgJ3N0YXInLCAneCcsICdjcm9zcycsICd0cmlhbmdsZSdcbiAgICAgICAgICAgICAgICBjYXNlIFwicG9pbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNyb3NzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbG9yLCBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGlmIChzdHlsMHIgJiYgc3R5bDByLmdldEZpbGwoKSAmJiBzdHlsMHIuZ2V0U3Ryb2tlKCkpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHN0eWwwci5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHN0eWwwci5nZXRTdHJva2UoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVEYXRhICYmIHN0eWxlRGF0YS5maWxsY29sb3IgJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzBdLCBzdHlsZURhdGEuc3Ryb2tlY29sb3JbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3R5bGVFbGVtZW50cyA9IHtcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWNvbG9yXCIgOiBjb2xvcixcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWJvcmRlcmNvbG9yXCIgOiBib3JkZXJjb2xvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVRyaWdnZXJMYWJlbDtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2xheWVyIiwiX3NvdXJjZSIsIl9mb3JtYXQiLCJfb2wiLCJfZ2VvbSIsIl9pbnRlcmFjdGlvbiIsIl9jNGdNYXBzVXRpbHMiLCJfYzRnU3RhcmJvYXJkU3R5bGUiLCJfYzRnUG9wdXBDb250cm9sbGVyIiwiX2M0Z01hcHNNaXNjVG9vbHRpcHBvcHVwIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJFZGl0b3JWaWV3IiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwic3RhdGUiLCJmcmVlaGFuZCIsInNlbGVjdGVkRmVhdHVyZSIsImZlYXR1cmVzIiwiYWN0aXZlRWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJhY3RpdmVTdHlsZSIsInN0eWxlSWQiLCJzZWxlY3RNb2RlIiwiaW50ZXJhY3Rpb24iLCJjaGFuZ2VKU09OIiwiYmluZCIsInJlc2V0SW50ZXJhY3Rpb24iLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwibW9kZSIsImFjdGl2ZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJMaW5lU3RyaW5nIiwiUG9seWdvbiIsImZlYXR1cmUiLCJGZWF0dXJlIiwiRHJhdyIsInNvdXJjZSIsImVkaXRvckxheWVyIiwiZ2V0U291cmNlIiwidHlwZSIsInNuYXBUb2xlcmFuY2UiLCJzdHlsZSIsInN0eWxlRnVuY3Rpb24iLCJvbiIsImV2ZW50IiwiZWRpdG9ySWQiLCJnZW9qc29uIiwiZ2V0R2VvbWV0cnkiLCJjbG9uZSIsInRyYW5zZm9ybSIsImNlbnRlciIsImdldENlbnRlciIsInJhZGl1cyIsImdldFJhZGl1cyIsInJlYWxSYWRpdXMiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwiY29vcmRpbmF0ZXMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudElkIiwibG9jc3R5bGUiLCJHZW9KU09OIiwid3JpdGVGZWF0dXJlT2JqZWN0IiwiZGF0YVByb2plY3Rpb24iLCJmZWF0dXJlUHJvamVjdGlvbiIsInBhcmFtcyIsImZvcm1hdCIsImNhbGxIb29rRnVuY3Rpb25zIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiaG9va19lZGl0b3JfZHJhdyIsImFkZEZlYXR1cmUiLCJjb3VudEVkaXRvcklkIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImFkZEludGVyYWN0aW9uIiwicHVzaCIsIlNlbGVjdCIsImxheWVycyIsImhpdFRvbGVyYW5jZSIsIk1vZGlmeSIsIkNvbGxlY3Rpb24iLCJwaXhlbFRvbGVyYW5jZSIsInNlbGVjdGVkIiwic2V0U3RhdGUiLCJnZXRBcnJheSIsIkNpcmNsZSIsImhvb2tfZWRpdG9yX21vZGlmeSIsIm1vZGlmeUZlYXR1cmUiLCJsZW5ndGgiLCJlbGVtZW50IiwiY29sb3IiLCJzdHlsZVRyaWdnZXJMYWJlbCIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImxvY1N0eWxlQXJyIiwic3R5bGVUeXBlIiwic3R5bGV0eXBlIiwiY3JlYXRlRWxlbWVudCIsIkM0Z1N0YXJib2FyZFN0eWxlIiwidG9vbHRpcCIsIm5hbWUiLCJzdHlsb3IiLCJmZWF0dXJlU3R5bGUiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0Q29sb3IiLCJmaWxsY29sb3IiLCJzdHJva2Vjb2xvciIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbk1vdXNlVXAiLCJjdXN0b21CdXR0b24iLCJpbmNsdWRlcyIsImZyZWVoYW5kQ2xhc3MiLCJsYW5nIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiY2hhbmdlRnJlZWhhbmQiLCJhcnJGb3JtRWRpdG9yVmFycyIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsInJlbW92ZUFjdGl2ZUZlYXR1cmUiLCJlZGl0b3JWYXJzIiwiZWRpdG9yVmFyIiwiY2FwdGlvbiIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsImhhbmRsZVZhckNoYW5nZSIsIkZyYWdtZW50IiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJyZW1vdmVGZWF0dXJlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJfdGhpczMiLCJmaW5kIiwiY2hhbmdlU2VsZWN0TW9kZSIsInN0cmluZyIsInRhcmdldCIsIkNvbXBvbmVudCIsIl9GZWF0dXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJlbnRlckV2ZW50Iiwid2hpY2giLCJjbGlja0V2ZW50Iiwic3R5bDByIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwiaW5kZXhPZiIsInN2Z1NyYyIsInNyYyIsInN0eWxlSW1hZ2UiLCJnZXRJbWFnZSIsImdldFNyYyIsInRhYkluZGV4IiwiY3NzQ29uc3RhbnRzIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwib25LZXlQcmVzcyIsImNzc0NsYXNzIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJib3JkZXJjb2xvciIsInN0eWxlRWxlbWVudHMiXSwic291cmNlUm9vdCI6IiJ9