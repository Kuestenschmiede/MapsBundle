"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-measuretools_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-measuretools-feature.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-measuretools-feature.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MeasuredFeature = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
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
var MeasuredFeature = exports.MeasuredFeature = /*#__PURE__*/function (_Component) {
  function MeasuredFeature(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MeasuredFeature);
    _this = _callSuper(this, MeasuredFeature, [props]);
    _this.changeFeatureLabel = _this.changeFeatureLabel.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MeasuredFeature, _Component);
  return (0, _createClass2["default"])(MeasuredFeature, [{
    key: "render",
    value: function render() {
      var scope = this;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "measureElement_" + this.props.idx
      }, "Name: "), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "measureElement_" + this.props.idx,
        defaultValue: this.props.label,
        onInput: this.changeFeatureLabel
      })), Object.keys(this.props.measuredValues).map(function (element, index) {
        var obj = scope.props.measuredValues[element];
        var hrValue = 0.0;
        switch (element) {
          case "line":
          case "radius":
            hrValue = scope.convertMetersToKm(obj.value);
            break;
          case "area":
            hrValue = scope.convertSquareMetersToSquareKm(obj.value);
            break;
        }
        return /*#__PURE__*/_react["default"].createElement("p", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("strong", null, obj.description), /*#__PURE__*/_react["default"].createElement("span", {
          className: "c4g-measure-value-" + scope.props.idx
        }, hrValue));
      }));
    }
  }, {
    key: "changeFeatureLabel",
    value: function changeFeatureLabel() {
      var feature = this.props.feature;
      feature.label = document.querySelector('input[name="measureElement_' + this.props.idx + '"]').value;
      this.props.modifyFeature(feature, feature.id);
    }
  }, {
    key: "convertMetersToKm",
    value: function convertMetersToKm(distance) {
      var kmValue = distance / 1000;
      if (kmValue > 0) {
        return kmValue + " km";
      } else {
        return distance + " m";
      }
    }
  }, {
    key: "convertSquareMetersToSquareKm",
    value: function convertSquareMetersToSquareKm(area) {
      var kmValue = area / 1000000;
      if (kmValue > 0) {
        return kmValue + " km²";
      } else {
        return area + " m²";
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-measuretools-view.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-measuretools-view.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MeasuretoolsView = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./src/Resources/public/js/c4g-maps-misc-tooltippopup.js");
var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "./src/Resources/public/js/components/c4g-measuretools-feature.jsx");
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
var MeasuretoolsView = exports.MeasuretoolsView = /*#__PURE__*/function (_Component) {
  function MeasuretoolsView(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MeasuretoolsView);
    _this = _callSuper(this, MeasuretoolsView, [props]);
    var langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);
    _this.headlines = {
      "select": langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
      "line": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
      "polygon": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
      "circle": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
      "freehand": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
    };
    _this.featureIdCtr = _this.props.featureId;
    _this.updateFunctions = _this.createMeasureFunctions();
    _this.modifyFeature = _this.modifyFeature.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MeasuretoolsView, _Component);
  return (0, _createClass2["default"])(MeasuretoolsView, [{
    key: "render",
    value: function render() {
      var scope = this;
      if (this.props.active) {
        if (this.props.mode === "select") {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.lang.MEASURETOOLS_INFO), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("sub", null, this.props.lang.MEASURETOOLS_INFO_ADDITIONAL));
        } else {
          // measure view
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "contentHeadline"
          }, this.headlines[this.props.mode]), /*#__PURE__*/_react["default"].createElement("div", null, Object.keys(this.props.features).map(function (element, index) {
            var feat = scope.props.features[element];
            return /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsFeature.MeasuredFeature, {
              key: index,
              idx: index,
              label: feat.label,
              feature: feat,
              measuredValues: feat.measuredValues,
              modifyFeature: scope.modifyFeature
            });
          })));
        }
      } else {
        // not active
        return null;
      }
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(feature, id) {
      var arrFeatures = this.props.features;
      for (var i = 0; i < arrFeatures.length; i++) {
        if (arrFeatures[i].id === id) {
          arrFeatures[i].olFeature.set('featureLabel', feature.label);
          this.updateMeasureFeature(arrFeatures[i].olFeature);
          break;
        }
      }
      this.props.modifyFeature(feature, id);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mode !== "select") {
        this.updateFunctions.initFunction();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mode !== "select") {
        if (!prevProps.active && this.props.active) {
          this.updateFunctions.activateFunction();
        }
        if (prevProps.active && !this.props.active) {
          this.updateFunctions.deactivateFunction();
        }
        this.props.mapController.mapHover.deactivate();
      }
      if (this.props.mode === "select" || !this.props.measureTools.state.open) {
        this.props.mapController.mapHover.activate();
      }
      this.featureIdCtr = this.props.featureId;
    }
  }, {
    key: "createMeasureFunctions",
    value: function createMeasureFunctions() {
      var source, features, olType, interaction;
      var scope = this;
      return {
        initFunction: function initFunction() {
          var featureIdCount, activeSketch, activeTooltip, addMeasureFeature, updateMeasureFeature, getValueOfGeometry, getLengthOfMeasure, removeMeasureFeature;
          featureIdCount = scope.featureIdCtr;
          if (scope.props.mode.toLowerCase() === 'freehand') {
            source = scope.props.measureTools.measureFreehandLayer.getSource();
          } else if (scope.props.mode.toLowerCase() === 'circle') {
            source = scope.props.measureTools.measureCircleLayer.getSource();
          } else if (scope.props.mode.toLowerCase() === 'polygon') {
            source = scope.props.measureTools.measurePolygonLayer.getSource();
          } else {
            source = scope.props.measureTools.measureLineLayer.getSource();
          }
          features = new _ol.Collection();
          if (scope.props.mode.toLowerCase() === "select") {
            return;
          }
          switch (scope.props.mode) {
            case "line":
              olType = "LineString";
              break;
            case "polygon":
              olType = "Polygon";
              break;
            case "circle":
              olType = "Circle";
              break;
            case "freehand":
              olType = "LineString";
              break;
          }
          interaction = new _interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: scope.props.mode === 'freehand'
            // @TODO: use custom style? (BE-option)
            // style: use default style
          });
          addMeasureFeature = function addMeasureFeature(feature) {
            var inputElement, strLabel, strType, measureArea, measureRadius, measureLine;
            if (!feature) {
              return false;
            }

            // check feature-type
            if (feature.getGeometry().getType() === 'LineString') {
              strLabel = scope.props.lang.LENGTH;
              strType = scope.props.lang.LINE;
              measureArea = false;
              measureRadius = false;
              measureLine = true;
            } else if (feature.getGeometry().getType() === 'Polygon') {
              strLabel = scope.props.lang.PERIMETER;
              strType = scope.props.lang.POLYGON;
              measureArea = true;
              measureRadius = false;
              measureLine = false;
            } else if (feature.getGeometry().getType() === 'Circle') {
              strLabel = scope.props.lang.RADIUS;
              strType = scope.props.lang.CIRCLE;
              measureArea = true;
              measureRadius = true;
              measureLine = false;
            } else {
              //freehand is LineString too
              strLabel = scope.props.lang.LENGTH;
              strType = scope.props.lang.FREEHAND;
              measureArea = false;
              measureRadius = false;
              measureLine = true;
            }

            // feature.set('listElementValueName', inputElement);
            featureIdCount = scope.featureIdCtr;
            feature.set('featureId', featureIdCount);
            var measuredFeature = {};
            measuredFeature.id = featureIdCount;
            measuredFeature.label = strType + " " + featureIdCount;
            feature.set('featureLabel', measuredFeature.label);
            measuredFeature.measuredValues = {};
            if (measureLine) {
              measuredFeature.measuredValues['line'] = {
                description: "Länge: ",
                value: 0
              };
            }
            if (measureRadius) {
              measuredFeature.measuredValues['radius'] = {
                description: "Radius: ",
                value: 0
              };
            }
            if (measureArea) {
              measuredFeature.measuredValues['area'] = {
                description: "Flächeninhalt: ",
                value: 0
              };
            }
            measuredFeature.olFeature = feature;
            scope.props.addFeature(measuredFeature);
            // increase the id-counter
            scope.props.incrFeatId();
            // scope.update();
          }; // end of "addMeasureFeature()"

          updateMeasureFeature = function updateMeasureFeature(feature) {
            var featureTooltip, newContent, name, length, area, radius;
            featureTooltip = feature.get('tooltip');
            name = feature.get('featureLabel');
            length = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            feature.set('measuredLength', length.rawValue);
            featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + length.htmlValue);
            var featureId = feature.get('featureId');
            var newFeature = {};
            newFeature.label = name;
            newFeature.id = featureId;
            newFeature.measuredValues = {};
            newFeature.olFeature = feature;
            if (length && feature.get('geometryType') !== 'circle' && feature.get('geometryType') !== 'polygon') {
              newFeature.measuredValues.line = {};
              newFeature.measuredValues['line'].description = "Länge: ";
              newFeature.measuredValues['line'].value = length.rawValue;
            }
            if (feature.get('geometryType') === 'circle') {
              radius = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry());
              newFeature.measuredValues['radius'] = {
                description: "Radius: ",
                value: 0
              };
              newFeature.measuredValues['radius'].value = radius.rawValue;
              featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + newFeature.measuredValues['radius'].description + radius.htmlValue);
            }
            if (feature.get('geometryType') === 'polygon' || feature.get('geometryType') === 'circle') {
              area = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), false, true);
              newFeature.measuredValues['area'] = {
                description: "Flächeninhalt: ",
                value: 0
              };
              newFeature.measuredValues['area'].value = area.rawValue;
              featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + newFeature.measuredValues['area'].description + area.htmlValue);
            }
            feature.set('tooltip', featureTooltip);
            scope.props.modifyFeature(newFeature, newFeature.id);
          }; // end of "updateMeasureFeature()"

          scope.updateMeasureFeature = updateMeasureFeature;
          removeMeasureFeature = function removeMeasureFeature(feature) {
            scope.props.removeFeature(feature.get('featureId'));
          }; // end of "removeMeasureFeature()"

          //Start Workaround
          getValueOfGeometry = function getValueOfGeometry(feature) {
            var leng = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            // feature.set('measuredLength', length);
            var val = leng.htmlValue;
            var valuenumb = val.match(/\d/g);
            valuenumb = valuenumb.join("");
            return valuenumb;
          };
          getLengthOfMeasure = function getLengthOfMeasure() {
            var length = '0.00 m';
            var lengthnumb = length.match(/\d/g);
            lengthnumb = lengthnumb.join("");
            lengthnumb = +8;
            return lengthnumb;
          }; // End Workaround

          interaction.on('drawstart', function (event) {
            activeSketch = event.feature;
            // create tooltip
            activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
              map: scope.props.mapController.map,
              position: event.coordinate,
              offset: [2, -2],
              horizontal: true,
              closeable: true,
              closeFunction: function closeFunction() {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();
                if (val !== leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  if (source.hasFeature(event.feature)) {
                    source.removeFeature(event.feature);
                  }
                } else {
                  removeMeasureFeature(event.feature);
                }
              }
            });
            activeSketch.set('tooltip', activeTooltip);
            activeSketch.set('geometryType', scope.props.mode.toLowerCase());
            addMeasureFeature(activeSketch);
          }, scope);
          scope.props.mapController.map.on('pointermove', function (event) {
            if (activeSketch && activeTooltip) {
              activeTooltip.setPosition(event.coordinate);
              updateMeasureFeature(activeSketch);
            }
          }, scope);
          interaction.on('drawend', function (event) {
            if (activeSketch && activeTooltip) {
              updateMeasureFeature(activeSketch);
              activeSketch = null;
              activeTooltip = null;
            }
          }, scope);
          return true;
        },
        activateFunction: function activateFunction() {
          features.clear();
          // Enable interaction
          scope.props.mapController.map.addInteraction(interaction);
        },
        deactivateFunction: function deactivateFunction() {
          if (scope.props.mode.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {
              // 0_o
            }
          }
          // Remove from map
          scope.props.mapController.map.removeInteraction(interaction);
        }
      };
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-measuretools.jsx":
/*!*****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-measuretools.jsx ***!
  \*****************************************************************/
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
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "./src/Resources/public/js/components/c4g-measuretools-view.jsx");
var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
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
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var Measuretools = exports["default"] = /*#__PURE__*/function (_Component) {
  function Measuretools(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Measuretools);
    _this = _callSuper(this, Measuretools, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_MEASURETOOLS;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_MEASURETOOLS;
    }
    element.className = "c4g-measuretools-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      var hidden = scope.props.mapController.measuretoolsContainer.className.includes('c4g-close');
      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        } else {
          jQuery(scope.props.mapController.measuretoolsContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "measuretools";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.measuretools = control;
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.addMeasuredFeature = _this.addMeasuredFeature.bind(_this);
    _this.modifyMeasuredFeature = _this.modifyMeasuredFeature.bind(_this);
    _this.removeMeasuredFeature = _this.removeMeasuredFeature.bind(_this);
    _this.incrementFeatureId = _this.incrementFeatureId.bind(_this);
    _this.modes = ["select", "line", "polygon", "circle", "freehand"];
    _this.state = {
      open: props.open || false,
      currentMode: "select",
      control: control,
      measuredFeatures: [],
      featureIdCtr: 0
    };
    _this.init();
    return _this;
  }
  (0, _inherits2["default"])(Measuretools, _Component);
  return (0, _createClass2["default"])(Measuretools, [{
    key: "render",
    value: function render() {
      var scope = this;
      var arrTooltips = {
        "select": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
        "line": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
        "polygon": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
        "circle": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
        "freehand": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-measuretools-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-measuretools-header",
        headerClass: "c4g-measuretools-headline",
        hideContainer: ".c4g-measuretools-container",
        header: this.langConstants.MEASURETOOLS,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-measuretools-mode-switcher"
      }, this.modes.map(function (element, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          className: "c4g-measure-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            return scope.setState({
              currentMode: element
            });
          },
          title: arrTooltips[element]
        });
      })), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "select",
        measureTools: this,
        active: this.state.currentMode === "select" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "line",
        measureTools: this,
        active: this.state.currentMode === "line" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "polygon",
        measureTools: this,
        active: this.state.currentMode === "polygon" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "circle",
        measureTools: this,
        active: this.state.currentMode === "circle" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
        mode: "freehand",
        measureTools: this,
        active: this.state.currentMode === "freehand" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }));
    }
  }, {
    key: "incrementFeatureId",
    value: function incrementFeatureId() {
      this.setState({
        featureIdCtr: this.state.featureIdCtr + 1
      });
    }
  }, {
    key: "addMeasuredFeature",
    value: function addMeasuredFeature(feature) {
      var features = this.state.measuredFeatures;
      features.push(feature);
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "modifyMeasuredFeature",
    value: function modifyMeasuredFeature(newFeature, id) {
      var features = this.state.measuredFeatures;
      for (var i = 0; i < features.length; i++) {
        if (features[i].id === id) {
          features[i] = newFeature;
        }
      }
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "removeMeasuredFeature",
    value: function removeMeasuredFeature(id) {
      var features = this.state.measuredFeatures;
      for (var i = 0; i < features.length; i++) {
        if (features[i].id === id) {
          features.splice(i, 1);
          break;
        }
      }
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "setCurrentMode",
    value: function setCurrentMode(newMode) {
      if (this.modes.includes(newMode)) {
        this.setState({
          currentMode: newMode
        });
      } else {
        console.warn("The specified mode is not available");
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }

    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
  }, {
    key: "init",
    value: function init() {
      // Add measure layers
      this.measureLineLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measurePolygonLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureCircleLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureFreehandLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.measureFreehandLayer, this.measureCircleLayer, this.measurePolygonLayer, this.measureLineLayer]),
        visible: true
      });
      this.props.mapController.map.addLayer(this.measureLayerGroup);

      // this.spinner.hide();
      return true;
    } // end of "init()"
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open && !this.state.open) {
        // measuretools were closed
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close");
        this.props.mapController.map.removeLayer(this.measureLayerGroup);
        this.removeTooltips();
        this.removedOnce = true;
      } else if (!prevState.open && this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close");
        if (this.removedOnce) {
          try {
            this.props.mapController.map.addLayer(this.measureLayerGroup);
          } catch (e) {
            console.warn(e);
          }
        }
        this.addTooltips();
      }
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "Measuretools" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "Measuretools" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "Measuretools");
        }
      }
    }
  }, {
    key: "removeTooltips",
    value: function removeTooltips() {
      var arrLayers = this.measureLayerGroup.getLayersArray();
      for (var i = 0; i < arrLayers.length; i++) {
        var layer = arrLayers[i];
        var arrFeatures = layer.getSource().getFeatures();
        if (arrFeatures) {
          for (var j = 0; j < arrFeatures.length; j++) {
            var feature = arrFeatures[j];
            feature.get('tooltip').hide();
          }
        }
      }
    }
  }, {
    key: "addTooltips",
    value: function addTooltips() {
      var arrLayers = this.measureLayerGroup.getLayersArray();
      for (var i = 0; i < arrLayers.length; i++) {
        var layer = arrLayers[i];
        var arrFeatures = layer.getSource().getFeatures();
        if (arrFeatures) {
          for (var j = 0; j < arrFeatures.length; j++) {
            var feature = arrFeatures[j];
            feature.get('tooltip').show();
          }
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctbWVhc3VyZXRvb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUQsd0JBQUFFLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFKLHVCQUFBLFlBQUFBLHdCQUFBRSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFBQU0sRUFBQSxFQUFBUCxDQUFBLElBQUFDLENBQUEsQ0FBQU0sRUFBQSxJQUFBZCxDQUFBLENBQUFjLEVBQUEsV0FBQU4sQ0FBQSxLQUFBUixDQUFBLEVBQUFDLENBQUE7QUFBQSxTQUFBbUIsV0FBQW5CLENBQUEsRUFBQUssQ0FBQSxFQUFBTixDQUFBLFdBQUFNLENBQUEsT0FBQWUsZ0JBQUEsYUFBQWYsQ0FBQSxPQUFBZ0IsMkJBQUEsYUFBQXJCLENBQUEsRUFBQXNCLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBbkIsQ0FBQSxFQUFBTixDQUFBLFlBQUFxQixnQkFBQSxhQUFBcEIsQ0FBQSxFQUFBeUIsV0FBQSxJQUFBcEIsQ0FBQSxDQUFBcUIsS0FBQSxDQUFBMUIsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUF0QixDQUFBLElBQUEyQixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBM0IsQ0FBQSxhQUFBc0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXRCLENBQUEsVUFUdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFXYThCLGVBQWUsR0FBQUMsdUJBQUEsMEJBQUFDLFVBQUE7RUFFMUIsU0FBQUYsZ0JBQVlHLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUwsZUFBQTtJQUNqQkksS0FBQSxHQUFBZixVQUFBLE9BQUFXLGVBQUEsR0FBTUcsS0FBSztJQUVYQyxLQUFBLENBQUtFLGtCQUFrQixHQUFHRixLQUFBLENBQUtFLGtCQUFrQixDQUFDQyxJQUFJLENBQUFILEtBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDL0Q7RUFBQyxJQUFBSSxVQUFBLGFBQUFSLGVBQUEsRUFBQUUsVUFBQTtFQUFBLFdBQUFPLGFBQUEsYUFBQVQsZUFBQTtJQUFBVSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFNQyxLQUFLLEdBQUcsSUFBSTtNQUNsQixvQkFDRS9DLE1BQUEsWUFBQWdELGFBQUEsMkJBQ0VoRCxNQUFBLFlBQUFnRCxhQUFBLDJCQUNFaEQsTUFBQSxZQUFBZ0QsYUFBQTtRQUFPQyxPQUFPLEVBQUUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDWixLQUFLLENBQUNhO01BQUksR0FBQyxRQUFhLENBQUMsZUFDbEVsRCxNQUFBLFlBQUFnRCxhQUFBO1FBQU9HLElBQUksRUFBQyxNQUFNO1FBQUNDLElBQUksRUFBRSxpQkFBaUIsR0FBRyxJQUFJLENBQUNmLEtBQUssQ0FBQ2EsR0FBSTtRQUFDRyxZQUFZLEVBQUUsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsS0FBTTtRQUNwRkMsT0FBTyxFQUFFLElBQUksQ0FBQ2Y7TUFBbUIsQ0FBQyxDQUN2QyxDQUFDLEVBQ0xwQixNQUFNLENBQUNvQyxJQUFJLENBQUMsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsY0FBYyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxVQUFTQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtRQUNuRSxJQUFJQyxHQUFHLEdBQUdkLEtBQUssQ0FBQ1YsS0FBSyxDQUFDb0IsY0FBYyxDQUFDRSxPQUFPLENBQUM7UUFDN0MsSUFBSUcsT0FBTyxHQUFHLEdBQUc7UUFDakIsUUFBUUgsT0FBTztVQUNiLEtBQUssTUFBTTtVQUNYLEtBQUssUUFBUTtZQUNYRyxPQUFPLEdBQUdmLEtBQUssQ0FBQ2dCLGlCQUFpQixDQUFDRixHQUFHLENBQUNoQixLQUFLLENBQUM7WUFDNUM7VUFDRixLQUFLLE1BQU07WUFDVGlCLE9BQU8sR0FBR2YsS0FBSyxDQUFDaUIsNkJBQTZCLENBQUNILEdBQUcsQ0FBQ2hCLEtBQUssQ0FBQztZQUN4RDtRQUNKO1FBQ0Esb0JBQVE3QyxNQUFBLFlBQUFnRCxhQUFBO1VBQUdKLEdBQUcsRUFBRWdCO1FBQU0sZ0JBQ3BCNUQsTUFBQSxZQUFBZ0QsYUFBQSxpQkFBU2EsR0FBRyxDQUFDSSxXQUFvQixDQUFDLGVBQ2xDakUsTUFBQSxZQUFBZ0QsYUFBQTtVQUFNa0IsU0FBUyxFQUFFLG9CQUFvQixHQUFHbkIsS0FBSyxDQUFDVixLQUFLLENBQUNhO1FBQUksR0FBRVksT0FBYyxDQUN2RSxDQUFDO01BQ04sQ0FBQyxDQUNFLENBQUM7SUFFVjtFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxrQkFBa0JBLENBQUEsRUFBRztNQUNuQixJQUFJMkIsT0FBTyxHQUFHLElBQUksQ0FBQzlCLEtBQUssQ0FBQzhCLE9BQU87TUFDaENBLE9BQU8sQ0FBQ2IsS0FBSyxHQUFHYyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUNoQyxLQUFLLENBQUNhLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQ0wsS0FBSztNQUNuRyxJQUFJLENBQUNSLEtBQUssQ0FBQ2lDLGFBQWEsQ0FBQ0gsT0FBTyxFQUFFQSxPQUFPLENBQUNJLEVBQUUsQ0FBQztJQUMvQztFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBa0IsaUJBQWlCQSxDQUFDUyxRQUFRLEVBQUU7TUFDMUIsSUFBSUMsT0FBTyxHQUFHRCxRQUFRLEdBQUcsSUFBSTtNQUM3QixJQUFJQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsT0FBT0EsT0FBTyxHQUFHLEtBQUs7TUFDeEIsQ0FBQyxNQUFNO1FBQ0wsT0FBT0QsUUFBUSxHQUFHLElBQUk7TUFDeEI7SUFDRjtFQUFDO0lBQUE1QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUIsNkJBQTZCQSxDQUFDVSxJQUFJLEVBQUU7TUFDbEMsSUFBSUQsT0FBTyxHQUFHQyxJQUFJLEdBQUcsT0FBTztNQUM1QixJQUFJRCxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsT0FBT0EsT0FBTyxHQUFHLE1BQU07TUFDekIsQ0FBQyxNQUFNO1FBQ0wsT0FBT0MsSUFBSSxHQUFHLEtBQUs7TUFDckI7SUFDRjtFQUFDO0FBQUEsRUE1RGtDQyxnQkFBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y5QyxJQUFBM0UsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUEwRSxZQUFBLEdBQUExRSxtQkFBQTtBQUNBLElBQUEyRSxHQUFBLEdBQUEzRSxtQkFBQTtBQUNBLElBQUE0RSxZQUFBLEdBQUE1RSxtQkFBQTtBQUNBLElBQUE2RSxhQUFBLEdBQUE3RSxtQkFBQTtBQUNBLElBQUE4RSx3QkFBQSxHQUFBOUUsbUJBQUE7QUFDQSxJQUFBK0UsdUJBQUEsR0FBQS9FLG1CQUFBO0FBQStELFNBQUFELHdCQUFBRSxDQUFBLEVBQUFDLENBQUEsNkJBQUFDLE9BQUEsTUFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBSix1QkFBQSxZQUFBQSx3QkFBQUUsQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxPQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLFFBQUFHLENBQUEsQ0FBQUssR0FBQSxDQUFBWCxDQUFBLFVBQUFNLENBQUEsQ0FBQU0sR0FBQSxDQUFBWixDQUFBLEdBQUFNLENBQUEsQ0FBQU8sR0FBQSxDQUFBYixDQUFBLEVBQUFRLENBQUEsY0FBQU0sRUFBQSxJQUFBZCxDQUFBLGdCQUFBYyxFQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsSUFBQUQsQ0FBQSxHQUFBVyxNQUFBLENBQUFDLGNBQUEsS0FBQUQsTUFBQSxDQUFBRSx3QkFBQSxDQUFBbkIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsQ0FBQUssR0FBQSxJQUFBTCxDQUFBLENBQUFNLEdBQUEsSUFBQVAsQ0FBQSxDQUFBRSxDQUFBLEVBQUFNLEVBQUEsRUFBQVAsQ0FBQSxJQUFBQyxDQUFBLENBQUFNLEVBQUEsSUFBQWQsQ0FBQSxDQUFBYyxFQUFBLFdBQUFOLENBQUEsS0FBQVIsQ0FBQSxFQUFBQyxDQUFBO0FBQUEsU0FBQW1CLFdBQUFuQixDQUFBLEVBQUFLLENBQUEsRUFBQU4sQ0FBQSxXQUFBTSxDQUFBLE9BQUFlLGdCQUFBLGFBQUFmLENBQUEsT0FBQWdCLDJCQUFBLGFBQUFyQixDQUFBLEVBQUFzQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQW5CLENBQUEsRUFBQU4sQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQXBCLENBQUEsRUFBQXlCLFdBQUEsSUFBQXBCLENBQUEsQ0FBQXFCLEtBQUEsQ0FBQTFCLENBQUEsRUFBQUQsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBdEIsQ0FBQSxJQUFBMkIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQTNCLENBQUEsYUFBQXNCLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUF0QixDQUFBLFVBZi9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBaUJhOEUsZ0JBQWdCLEdBQUEvQyx3QkFBQSwwQkFBQUMsVUFBQTtFQUUzQixTQUFBOEMsaUJBQVk3QyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUEyQyxnQkFBQTtJQUNqQjVDLEtBQUEsR0FBQWYsVUFBQSxPQUFBMkQsZ0JBQUEsR0FBTTdDLEtBQUs7SUFFWCxJQUFJOEMsYUFBYSxHQUFHLElBQUFDLHdCQUFXLEVBQUM5QyxLQUFBLENBQUtELEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDO0lBRTlEaEQsS0FBQSxDQUFLaUQsU0FBUyxHQUFHO01BQ2YsUUFBUSxFQUFFSixhQUFhLENBQUNLLGdDQUFnQztNQUN4RCxNQUFNLEVBQUVMLGFBQWEsQ0FBQ00seUNBQXlDO01BQy9ELFNBQVMsRUFBRU4sYUFBYSxDQUFDTyxzQ0FBc0M7TUFDL0QsUUFBUSxFQUFFUCxhQUFhLENBQUNRLHFDQUFxQztNQUM3RCxVQUFVLEVBQUVSLGFBQWEsQ0FBQ1M7SUFDNUIsQ0FBQztJQUNEdEQsS0FBQSxDQUFLdUQsWUFBWSxHQUFHdkQsS0FBQSxDQUFLRCxLQUFLLENBQUN5RCxTQUFTO0lBQ3hDeEQsS0FBQSxDQUFLeUQsZUFBZSxHQUFHekQsS0FBQSxDQUFLMEQsc0JBQXNCLENBQUMsQ0FBQztJQUNwRDFELEtBQUEsQ0FBS2dDLGFBQWEsR0FBR2hDLEtBQUEsQ0FBS2dDLGFBQWEsQ0FBQzdCLElBQUksQ0FBQUgsS0FBSyxDQUFDO0lBQUMsT0FBQUEsS0FBQTtFQUNyRDtFQUFDLElBQUFJLFVBQUEsYUFBQXdDLGdCQUFBLEVBQUE5QyxVQUFBO0VBQUEsV0FBQU8sYUFBQSxhQUFBdUMsZ0JBQUE7SUFBQXRDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQUksSUFBSSxDQUFDVixLQUFLLENBQUM0RCxNQUFNLEVBQUU7UUFDckIsSUFBSSxJQUFJLENBQUM1RCxLQUFLLENBQUM2RCxJQUFJLEtBQUssUUFBUSxFQUFFO1VBQ2hDLG9CQUNFbEcsTUFBQSxZQUFBZ0QsYUFBQTtZQUFLa0IsU0FBUyxFQUFFO1VBQTJCLGdCQUN6Q2xFLE1BQUEsWUFBQWdELGFBQUEsWUFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQzhELElBQUksQ0FBQ0MsaUJBQXFCLENBQUMsZUFDMUNwRyxNQUFBLFlBQUFnRCxhQUFBLFdBQUksQ0FBQyxlQUFBaEQsTUFBQSxZQUFBZ0QsYUFBQSxXQUFJLENBQUMsZUFDVmhELE1BQUEsWUFBQWdELGFBQUEsY0FBTSxJQUFJLENBQUNYLEtBQUssQ0FBQzhELElBQUksQ0FBQ0UsNEJBQWtDLENBQ3JELENBQUM7UUFFVixDQUFDLE1BQU07VUFDTDtVQUNBLG9CQUNFckcsTUFBQSxZQUFBZ0QsYUFBQTtZQUFLa0IsU0FBUyxFQUFFO1VBQTJCLGdCQUN6Q2xFLE1BQUEsWUFBQWdELGFBQUE7WUFBS2tCLFNBQVMsRUFBRTtVQUFrQixHQUFFLElBQUksQ0FBQ3FCLFNBQVMsQ0FBQyxJQUFJLENBQUNsRCxLQUFLLENBQUM2RCxJQUFJLENBQU8sQ0FBQyxlQUMxRWxHLE1BQUEsWUFBQWdELGFBQUEsY0FDRzVCLE1BQU0sQ0FBQ29DLElBQUksQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNpRSxRQUFRLENBQUMsQ0FBQzVDLEdBQUcsQ0FBQyxVQUFTQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtZQUM3RCxJQUFJMkMsSUFBSSxHQUFHeEQsS0FBSyxDQUFDVixLQUFLLENBQUNpRSxRQUFRLENBQUMzQyxPQUFPLENBQUM7WUFDeEMsb0JBQVEzRCxNQUFBLFlBQUFnRCxhQUFBLENBQUNpQyx1QkFBQSxDQUFBL0MsZUFBZTtjQUFDVSxHQUFHLEVBQUVnQixLQUFNO2NBQUNWLEdBQUcsRUFBRVUsS0FBTTtjQUFDTixLQUFLLEVBQUVpRCxJQUFJLENBQUNqRCxLQUFNO2NBQUNhLE9BQU8sRUFBRW9DLElBQUs7Y0FDekQ5QyxjQUFjLEVBQUU4QyxJQUFJLENBQUM5QyxjQUFlO2NBQUNhLGFBQWEsRUFBRXZCLEtBQUssQ0FBQ3VCO1lBQWMsQ0FBQyxDQUFDO1VBQ3JHLENBQUMsQ0FDRSxDQUNGLENBQUM7UUFFVjtNQUNGLENBQUMsTUFBTTtRQUNMO1FBQ0EsT0FBTyxJQUFJO01BQ2I7SUFFRjtFQUFDO0lBQUExQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeUIsYUFBYUEsQ0FBQ0gsT0FBTyxFQUFFSSxFQUFFLEVBQUU7TUFDekIsSUFBSWlDLFdBQVcsR0FBRyxJQUFJLENBQUNuRSxLQUFLLENBQUNpRSxRQUFRO01BQ3JDLEtBQUssSUFBSTVGLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzhGLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFL0YsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsSUFBSThGLFdBQVcsQ0FBQzlGLENBQUMsQ0FBQyxDQUFDNkQsRUFBRSxLQUFLQSxFQUFFLEVBQUU7VUFDNUJpQyxXQUFXLENBQUM5RixDQUFDLENBQUMsQ0FBQ2dHLFNBQVMsQ0FBQzFGLEdBQUcsQ0FBQyxjQUFjLEVBQUVtRCxPQUFPLENBQUNiLEtBQUssQ0FBQztVQUMzRCxJQUFJLENBQUNxRCxvQkFBb0IsQ0FBQ0gsV0FBVyxDQUFDOUYsQ0FBQyxDQUFDLENBQUNnRyxTQUFTLENBQUM7VUFDbkQ7UUFDRjtNQUNGO01BQ0EsSUFBSSxDQUFDckUsS0FBSyxDQUFDaUMsYUFBYSxDQUFDSCxPQUFPLEVBQUVJLEVBQUUsQ0FBQztJQUN2QztFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0QsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEIsSUFBSSxJQUFJLENBQUN2RSxLQUFLLENBQUM2RCxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ2hDLElBQUksQ0FBQ0gsZUFBZSxDQUFDYyxZQUFZLENBQUMsQ0FBQztNQUNyQztJQUNGO0VBQUM7SUFBQWpFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpRSxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7TUFDakQsSUFBSSxJQUFJLENBQUM1RSxLQUFLLENBQUM2RCxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ2hDLElBQUksQ0FBQ2EsU0FBUyxDQUFDZCxNQUFNLElBQUksSUFBSSxDQUFDNUQsS0FBSyxDQUFDNEQsTUFBTSxFQUFFO1VBQzFDLElBQUksQ0FBQ0YsZUFBZSxDQUFDbUIsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QztRQUNBLElBQUlILFNBQVMsQ0FBQ2QsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDNUQsS0FBSyxDQUFDNEQsTUFBTSxFQUFFO1VBQzFDLElBQUksQ0FBQ0YsZUFBZSxDQUFDb0Isa0JBQWtCLENBQUMsQ0FBQztRQUMzQztRQUNBLElBQUksQ0FBQzlFLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQytCLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7TUFDaEQ7TUFDQSxJQUFJLElBQUksQ0FBQ2hGLEtBQUssQ0FBQzZELElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUM3RCxLQUFLLENBQUNpRixZQUFZLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ3ZFLElBQUksQ0FBQ25GLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQytCLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDLENBQUM7TUFDOUM7TUFDQSxJQUFJLENBQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDeEQsS0FBSyxDQUFDeUQsU0FBUztJQUMxQztFQUFDO0lBQUFsRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbUQsc0JBQXNCQSxDQUFBLEVBQUc7TUFDdkIsSUFBSTBCLE1BQU0sRUFBRXBCLFFBQVEsRUFBRXFCLE1BQU0sRUFBRUMsV0FBVztNQUN6QyxJQUFNN0UsS0FBSyxHQUFHLElBQUk7TUFDbEIsT0FBTztRQUNMOEQsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQUEsRUFBYztVQUMxQixJQUFJZ0IsY0FBYyxFQUNoQkMsWUFBWSxFQUNaQyxhQUFhLEVBQ2JDLGlCQUFpQixFQUNqQnJCLG9CQUFvQixFQUNwQnNCLGtCQUFrQixFQUNsQkMsa0JBQWtCLEVBQ2xCQyxvQkFBb0I7VUFFdEJOLGNBQWMsR0FBRzlFLEtBQUssQ0FBQzhDLFlBQVk7VUFFbkMsSUFBSTlDLEtBQUssQ0FBQ1YsS0FBSyxDQUFDNkQsSUFBSSxDQUFDa0MsV0FBVyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakRWLE1BQU0sR0FBRzNFLEtBQUssQ0FBQ1YsS0FBSyxDQUFDaUYsWUFBWSxDQUFDZSxvQkFBb0IsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7VUFDcEUsQ0FBQyxNQUFNLElBQUl2RixLQUFLLENBQUNWLEtBQUssQ0FBQzZELElBQUksQ0FBQ2tDLFdBQVcsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3REVixNQUFNLEdBQUczRSxLQUFLLENBQUNWLEtBQUssQ0FBQ2lGLFlBQVksQ0FBQ2lCLGtCQUFrQixDQUFDRCxTQUFTLENBQUMsQ0FBQztVQUNsRSxDQUFDLE1BQU0sSUFBSXZGLEtBQUssQ0FBQ1YsS0FBSyxDQUFDNkQsSUFBSSxDQUFDa0MsV0FBVyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDdkRWLE1BQU0sR0FBRzNFLEtBQUssQ0FBQ1YsS0FBSyxDQUFDaUYsWUFBWSxDQUFDa0IsbUJBQW1CLENBQUNGLFNBQVMsQ0FBQyxDQUFDO1VBQ25FLENBQUMsTUFBTTtZQUNMWixNQUFNLEdBQUczRSxLQUFLLENBQUNWLEtBQUssQ0FBQ2lGLFlBQVksQ0FBQ21CLGdCQUFnQixDQUFDSCxTQUFTLENBQUMsQ0FBQztVQUNoRTtVQUVBaEMsUUFBUSxHQUFHLElBQUlvQyxjQUFVLENBQUMsQ0FBQztVQUMzQixJQUFJM0YsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJLENBQUNrQyxXQUFXLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMvQztVQUNGO1VBRUEsUUFBUXJGLEtBQUssQ0FBQ1YsS0FBSyxDQUFDNkQsSUFBSTtZQUN0QixLQUFLLE1BQU07Y0FDVHlCLE1BQU0sR0FBRyxZQUFZO2NBQ3JCO1lBQ0YsS0FBSyxTQUFTO2NBQ1pBLE1BQU0sR0FBRyxTQUFTO2NBQ2xCO1lBQ0YsS0FBSyxRQUFRO2NBQ1hBLE1BQU0sR0FBRyxRQUFRO2NBQ2pCO1lBQ0YsS0FBSyxVQUFVO2NBQ2JBLE1BQU0sR0FBRyxZQUFZO2NBQ3JCO1VBQ0o7VUFFQUMsV0FBVyxHQUFHLElBQUllLGlCQUFJLENBQUM7WUFDckJyQyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJvQixNQUFNLEVBQUVBLE1BQU07WUFDZHZFLElBQUksRUFBRXdFLE1BQU07WUFDWmlCLFFBQVEsRUFBRTdGLEtBQUssQ0FBQ1YsS0FBSyxDQUFDNkQsSUFBSSxLQUFLO1lBQy9CO1lBQ0E7VUFDRixDQUFDLENBQUM7VUFFRjhCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQWE3RCxPQUFPLEVBQUU7WUFDckMsSUFBSTBFLFlBQVksRUFDZEMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxXQUFXO1lBRWIsSUFBSSxDQUFDL0UsT0FBTyxFQUFFO2NBQ1osT0FBTyxLQUFLO1lBQ2Q7O1lBRUE7WUFDQSxJQUFJQSxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxLQUFLLFlBQVksRUFBRTtjQUNwRE4sUUFBUSxHQUFHL0YsS0FBSyxDQUFDVixLQUFLLENBQUM4RCxJQUFJLENBQUNrRCxNQUFNO2NBQ2xDTixPQUFPLEdBQUdoRyxLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ21ELElBQUk7Y0FDL0JOLFdBQVcsR0FBRyxLQUFLO2NBQ25CQyxhQUFhLEdBQUcsS0FBSztjQUNyQkMsV0FBVyxHQUFHLElBQUk7WUFDcEIsQ0FBQyxNQUFNLElBQUkvRSxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtjQUN4RE4sUUFBUSxHQUFHL0YsS0FBSyxDQUFDVixLQUFLLENBQUM4RCxJQUFJLENBQUNvRCxTQUFTO2NBQ3JDUixPQUFPLEdBQUdoRyxLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ3FELE9BQU87Y0FDbENSLFdBQVcsR0FBRyxJQUFJO2NBQ2xCQyxhQUFhLEdBQUcsS0FBSztjQUNyQkMsV0FBVyxHQUFHLEtBQUs7WUFDckIsQ0FBQyxNQUFNLElBQUkvRSxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtjQUN2RE4sUUFBUSxHQUFHL0YsS0FBSyxDQUFDVixLQUFLLENBQUM4RCxJQUFJLENBQUNzRCxNQUFNO2NBQ2xDVixPQUFPLEdBQUdoRyxLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ3VELE1BQU07Y0FDakNWLFdBQVcsR0FBRyxJQUFJO2NBQ2xCQyxhQUFhLEdBQUcsSUFBSTtjQUNwQkMsV0FBVyxHQUFHLEtBQUs7WUFDckIsQ0FBQyxNQUFNO2NBQ0w7Y0FDQUosUUFBUSxHQUFHL0YsS0FBSyxDQUFDVixLQUFLLENBQUM4RCxJQUFJLENBQUNrRCxNQUFNO2NBQ2xDTixPQUFPLEdBQUdoRyxLQUFLLENBQUNWLEtBQUssQ0FBQzhELElBQUksQ0FBQ3dELFFBQVE7Y0FDbkNYLFdBQVcsR0FBRyxLQUFLO2NBQ25CQyxhQUFhLEdBQUcsS0FBSztjQUNyQkMsV0FBVyxHQUFHLElBQUk7WUFDcEI7O1lBRUE7WUFDQXJCLGNBQWMsR0FBRzlFLEtBQUssQ0FBQzhDLFlBQVk7WUFDbkMxQixPQUFPLENBQUNuRCxHQUFHLENBQUMsV0FBVyxFQUFFNkcsY0FBYyxDQUFDO1lBQ3hDLElBQUkrQixlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCQSxlQUFlLENBQUNyRixFQUFFLEdBQUdzRCxjQUFjO1lBQ25DK0IsZUFBZSxDQUFDdEcsS0FBSyxHQUFHeUYsT0FBTyxHQUFHLEdBQUcsR0FBR2xCLGNBQWM7WUFDdEQxRCxPQUFPLENBQUNuRCxHQUFHLENBQUMsY0FBYyxFQUFFNEksZUFBZSxDQUFDdEcsS0FBSyxDQUFDO1lBQ2xEc0csZUFBZSxDQUFDbkcsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJeUYsV0FBVyxFQUFFO2NBQ2ZVLGVBQWUsQ0FBQ25HLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRztnQkFDdkNRLFdBQVcsRUFBRSxTQUFTO2dCQUN0QnBCLEtBQUssRUFBRTtjQUNULENBQUM7WUFDSDtZQUNBLElBQUlvRyxhQUFhLEVBQUU7Y0FDakJXLGVBQWUsQ0FBQ25HLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDekNRLFdBQVcsRUFBRSxVQUFVO2dCQUN2QnBCLEtBQUssRUFBRTtjQUNULENBQUM7WUFDSDtZQUNBLElBQUltRyxXQUFXLEVBQUU7Y0FDZlksZUFBZSxDQUFDbkcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2dCQUN2Q1EsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUJwQixLQUFLLEVBQUU7Y0FDVCxDQUFDO1lBQ0g7WUFDQStHLGVBQWUsQ0FBQ2xELFNBQVMsR0FBR3ZDLE9BQU87WUFDbkNwQixLQUFLLENBQUNWLEtBQUssQ0FBQ3dILFVBQVUsQ0FBQ0QsZUFBZSxDQUFDO1lBQ3ZDO1lBQ0E3RyxLQUFLLENBQUNWLEtBQUssQ0FBQ3lILFVBQVUsQ0FBQyxDQUFDO1lBQ3hCO1VBQ0YsQ0FBQyxDQUFDLENBQUM7O1VBRUhuRCxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFheEMsT0FBTyxFQUFFO1lBQ3hDLElBQUk0RixjQUFjLEVBQ2hCQyxVQUFVLEVBQ1Y1RyxJQUFJLEVBQ0pxRCxNQUFNLEVBQ04vQixJQUFJLEVBQ0p1RixNQUFNO1lBRVJGLGNBQWMsR0FBRzVGLE9BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDdkNxQyxJQUFJLEdBQUdlLE9BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDbEMwRixNQUFNLEdBQUd5RCxtQkFBSyxDQUFDQyxlQUFlLENBQUNoRyxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUMzRGhGLE9BQU8sQ0FBQ25ELEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRXlGLE1BQU0sQ0FBQzJELFFBQVEsQ0FBQztZQUM5Q0wsY0FBYyxDQUFDTSxVQUFVLENBQUMsVUFBVSxHQUFHakgsSUFBSSxHQUFHLFdBQVcsR0FBRyxNQUFNLEdBQUdxRCxNQUFNLENBQUM2RCxTQUFTLENBQUM7WUFDdEYsSUFBSXhFLFNBQVMsR0FBRzNCLE9BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDeEMsSUFBSXdKLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkJBLFVBQVUsQ0FBQ2pILEtBQUssR0FBR0YsSUFBSTtZQUN2Qm1ILFVBQVUsQ0FBQ2hHLEVBQUUsR0FBR3VCLFNBQVM7WUFDekJ5RSxVQUFVLENBQUM5RyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQzlCOEcsVUFBVSxDQUFDN0QsU0FBUyxHQUFHdkMsT0FBTztZQUM5QixJQUFJc0MsTUFBTSxJQUFJdEMsT0FBTyxDQUFDcEQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFFBQVEsSUFDakRvRCxPQUFPLENBQUNwRCxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxFQUFFO2NBQzlDd0osVUFBVSxDQUFDOUcsY0FBYyxDQUFDK0csSUFBSSxHQUFHLENBQUMsQ0FBQztjQUNuQ0QsVUFBVSxDQUFDOUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxXQUFXLEdBQUcsU0FBUztjQUN6RHNHLFVBQVUsQ0FBQzlHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1osS0FBSyxHQUFHNEQsTUFBTSxDQUFDMkQsUUFBUTtZQUMzRDtZQUVBLElBQUlqRyxPQUFPLENBQUNwRCxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxFQUFFO2NBQzVDa0osTUFBTSxHQUFHQyxtQkFBSyxDQUFDQyxlQUFlLENBQUNoRyxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxDQUFDO2NBQ3JEb0IsVUFBVSxDQUFDOUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUNwQ1EsV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCcEIsS0FBSyxFQUFFO2NBQ1QsQ0FBQztjQUNEMEgsVUFBVSxDQUFDOUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDWixLQUFLLEdBQUdvSCxNQUFNLENBQUNHLFFBQVE7Y0FDM0RMLGNBQWMsQ0FBQ00sVUFBVSxDQUFDLFVBQVUsR0FBR2pILElBQUksR0FBRyxXQUFXLEdBQUcsTUFBTSxHQUM5RG1ILFVBQVUsQ0FBQzlHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ1EsV0FBVyxHQUFHZ0csTUFBTSxDQUFDSyxTQUFTLENBQUM7WUFDekU7WUFDQSxJQUFJbkcsT0FBTyxDQUFDcEQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsSUFDeENvRCxPQUFPLENBQUNwRCxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxFQUFFO2NBQzdDMkQsSUFBSSxHQUFHd0YsbUJBQUssQ0FBQ0MsZUFBZSxDQUFDaEcsT0FBTyxDQUFDZ0YsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2NBQ2hFb0IsVUFBVSxDQUFDOUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHO2dCQUNsQ1EsV0FBVyxFQUFFLGlCQUFpQjtnQkFDOUJwQixLQUFLLEVBQUU7Y0FDVCxDQUFDO2NBQ0QwSCxVQUFVLENBQUM5RyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNaLEtBQUssR0FBRzZCLElBQUksQ0FBQzBGLFFBQVE7Y0FDdkRMLGNBQWMsQ0FBQ00sVUFBVSxDQUFDLFVBQVUsR0FBR2pILElBQUksR0FBRyxXQUFXLEdBQUcsTUFBTSxHQUM5RG1ILFVBQVUsQ0FBQzlHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1EsV0FBVyxHQUFHUyxJQUFJLENBQUM0RixTQUFTLENBQUM7WUFDckU7WUFDQW5HLE9BQU8sQ0FBQ25ELEdBQUcsQ0FBQyxTQUFTLEVBQUUrSSxjQUFjLENBQUM7WUFDdENoSCxLQUFLLENBQUNWLEtBQUssQ0FBQ2lDLGFBQWEsQ0FBQ2lHLFVBQVUsRUFBRUEsVUFBVSxDQUFDaEcsRUFBRSxDQUFDO1VBQ3RELENBQUMsQ0FBQyxDQUFDOztVQUVIeEIsS0FBSyxDQUFDNEQsb0JBQW9CLEdBQUdBLG9CQUFvQjtVQUVqRHdCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQWFoRSxPQUFPLEVBQUU7WUFDeENwQixLQUFLLENBQUNWLEtBQUssQ0FBQ29JLGFBQWEsQ0FBQ3RHLE9BQU8sQ0FBQ3BELEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztVQUNyRCxDQUFDLENBQUMsQ0FBQzs7VUFFSDtVQUNBa0gsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBYTlELE9BQU8sRUFBRTtZQUN0QyxJQUFJdUcsSUFBSSxHQUFHUixtQkFBSyxDQUFDQyxlQUFlLENBQUNoRyxPQUFPLENBQUNnRixXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUM3RDtZQUNBLElBQUl3QixHQUFHLEdBQUdELElBQUksQ0FBQ0osU0FBUztZQUN4QixJQUFJTSxTQUFTLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNoQ0QsU0FBUyxHQUFHQSxTQUFTLENBQUNFLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDOUIsT0FBT0YsU0FBUztVQUNsQixDQUFDO1VBRUQxQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQWU7WUFDL0IsSUFBSXpCLE1BQU0sR0FBRyxRQUFRO1lBQ3JCLElBQUlzRSxVQUFVLEdBQUd0RSxNQUFNLENBQUNvRSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BDRSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNmLE9BQU9BLFVBQVU7VUFDbkIsQ0FBQyxDQUFDOztVQUVGbkQsV0FBVyxDQUFDb0QsRUFBRSxDQUFDLFdBQVcsRUFDeEIsVUFBVUMsS0FBSyxFQUFFO1lBQ2ZuRCxZQUFZLEdBQUdtRCxLQUFLLENBQUM5RyxPQUFPO1lBQzVCO1lBQ0E0RCxhQUFhLEdBQUcsSUFBSW1ELHFDQUFZLENBQUM7Y0FDL0J4SCxHQUFHLEVBQUVYLEtBQUssQ0FBQ1YsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDM0IsR0FBRztjQUNsQ3lILFFBQVEsRUFBRUYsS0FBSyxDQUFDRyxVQUFVO2NBQzFCQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDZkMsVUFBVSxFQUFFLElBQUk7Y0FDaEJDLFNBQVMsRUFBRSxJQUFJO2NBQ2ZDLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBLEVBQWM7Z0JBQ3pCO2dCQUNBLElBQUliLEdBQUcsR0FBRzFDLGtCQUFrQixDQUFDZ0QsS0FBSyxDQUFDOUcsT0FBTyxDQUFDO2dCQUMzQyxJQUFJdUcsSUFBSSxHQUFHeEMsa0JBQWtCLENBQUMsQ0FBQztnQkFDL0IsSUFBSXlDLEdBQUcsS0FBS0QsSUFBSSxJQUFJQyxHQUFHLEdBQUdELElBQUksRUFBRTtrQkFDOUJ2QyxvQkFBb0IsQ0FBQzhDLEtBQUssQ0FBQzlHLE9BQU8sQ0FBQztrQkFDbkMsSUFBSXVELE1BQU0sQ0FBQytELFVBQVUsQ0FBRVIsS0FBSyxDQUFDOUcsT0FBTyxDQUFDLEVBQUU7b0JBQ3JDdUQsTUFBTSxDQUFDK0MsYUFBYSxDQUFDUSxLQUFLLENBQUM5RyxPQUFPLENBQUM7a0JBQ3JDO2dCQUNGLENBQUMsTUFDSTtrQkFDSGdFLG9CQUFvQixDQUFDOEMsS0FBSyxDQUFDOUcsT0FBTyxDQUFDO2dCQUNyQztjQUNGO1lBQ0YsQ0FBQyxDQUFDO1lBRUYyRCxZQUFZLENBQUM5RyxHQUFHLENBQUMsU0FBUyxFQUFFK0csYUFBYSxDQUFDO1lBQzFDRCxZQUFZLENBQUM5RyxHQUFHLENBQUMsY0FBYyxFQUFFK0IsS0FBSyxDQUFDVixLQUFLLENBQUM2RCxJQUFJLENBQUNrQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hFSixpQkFBaUIsQ0FBQ0YsWUFBWSxDQUFDO1VBQ2pDLENBQUMsRUFBRS9FLEtBQUssQ0FBQztVQUVYQSxLQUFLLENBQUNWLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQzNCLEdBQUcsQ0FBQ3NILEVBQUUsQ0FBQyxhQUFhLEVBQzVDLFVBQVVDLEtBQUssRUFBRTtZQUNmLElBQUluRCxZQUFZLElBQUlDLGFBQWEsRUFBRTtjQUNqQ0EsYUFBYSxDQUFDMkQsV0FBVyxDQUFDVCxLQUFLLENBQUNHLFVBQVUsQ0FBQztjQUMzQ3pFLG9CQUFvQixDQUFDbUIsWUFBWSxDQUFDO1lBQ3BDO1VBQ0YsQ0FBQyxFQUFFL0UsS0FBSyxDQUFDO1VBRVg2RSxXQUFXLENBQUNvRCxFQUFFLENBQUMsU0FBUyxFQUN0QixVQUFVQyxLQUFLLEVBQUU7WUFDZixJQUFJbkQsWUFBWSxJQUFJQyxhQUFhLEVBQUU7Y0FDakNwQixvQkFBb0IsQ0FBQ21CLFlBQVksQ0FBQztjQUNsQ0EsWUFBWSxHQUFHLElBQUk7Y0FDbkJDLGFBQWEsR0FBRyxJQUFJO1lBQ3RCO1VBQ0YsQ0FBQyxFQUFFaEYsS0FBSyxDQUFDO1VBRVgsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUNDbUUsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBQSxFQUFjO1VBQzVCWixRQUFRLENBQUNxRixLQUFLLENBQUMsQ0FBQztVQUNoQjtVQUNBNUksS0FBSyxDQUFDVixLQUFLLENBQUNnRCxhQUFhLENBQUMzQixHQUFHLENBQUNrSSxjQUFjLENBQUNoRSxXQUFXLENBQUM7UUFDM0QsQ0FBQztRQUNEVCxrQkFBa0IsRUFBRSxTQUFwQkEsa0JBQWtCQSxDQUFBLEVBQWM7VUFDOUIsSUFBSXBFLEtBQUssQ0FBQ1YsS0FBSyxDQUFDNkQsSUFBSSxDQUFDa0MsV0FBVyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUU7WUFDOUMsSUFBSTtjQUNGUixXQUFXLENBQUNpRSxhQUFhLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsT0FBT0MsTUFBTSxFQUFFO2NBQ2Y7WUFBQTtVQUVKO1VBQ0E7VUFDQS9JLEtBQUssQ0FBQ1YsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDM0IsR0FBRyxDQUFDcUksaUJBQWlCLENBQUNuRSxXQUFXLENBQUM7UUFDOUQ7TUFDRixDQUFDO0lBQ0g7RUFBQztBQUFBLEVBcFdtQ2pELGdCQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUC9DLElBQUEzRSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBRUEsSUFBQTBFLFlBQUEsR0FBQTFFLG1CQUFBO0FBQ0EsSUFBQThMLFFBQUEsR0FBQTlMLG1CQUFBO0FBQ0EsSUFBQStMLG9CQUFBLEdBQUEvTCxtQkFBQTtBQUNBLElBQUFnTSxNQUFBLEdBQUFoTSxtQkFBQTtBQUNBLElBQUFpTSxPQUFBLEdBQUFqTSxtQkFBQTtBQUNBLElBQUEyRSxHQUFBLEdBQUEzRSxtQkFBQTtBQUNBLElBQUE2RSxhQUFBLEdBQUE3RSxtQkFBQTtBQUF3QyxTQUFBRCx3QkFBQUUsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUosdUJBQUEsWUFBQUEsd0JBQUFFLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFBQUwsQ0FBQSxDQUFBTSxHQUFBLElBQUFQLENBQUEsQ0FBQUUsQ0FBQSxFQUFBTSxFQUFBLEVBQUFQLENBQUEsSUFBQUMsQ0FBQSxDQUFBTSxFQUFBLElBQUFkLENBQUEsQ0FBQWMsRUFBQSxXQUFBTixDQUFBLEtBQUFSLENBQUEsRUFBQUMsQ0FBQTtBQUFBLFNBQUFtQixXQUFBbkIsQ0FBQSxFQUFBSyxDQUFBLEVBQUFOLENBQUEsV0FBQU0sQ0FBQSxPQUFBZSxnQkFBQSxhQUFBZixDQUFBLE9BQUFnQiwyQkFBQSxhQUFBckIsQ0FBQSxFQUFBc0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFuQixDQUFBLEVBQUFOLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFwQixDQUFBLEVBQUF5QixXQUFBLElBQUFwQixDQUFBLENBQUFxQixLQUFBLENBQUExQixDQUFBLEVBQUFELENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXRCLENBQUEsSUFBQTJCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUEzQixDQUFBLGFBQUFzQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBdEIsQ0FBQSxVQWxCeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTWdNLFFBQVEsZ0JBQUdDLGlCQUFLLENBQUNDLElBQUksQ0FBQztFQUFBLE9BQU0sdUtBQTRCO0FBQUEsRUFBQztBQUFDLElBUzNDQyxZQUFZLEdBQUFwSyxrQkFBQSwwQkFBQUMsVUFBQTtFQUUvQixTQUFBbUssYUFBWWxLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQWdLLFlBQUE7SUFDakJqSyxLQUFBLEdBQUFmLFVBQUEsT0FBQWdMLFlBQUEsR0FBTWxLLEtBQUs7SUFFWCxJQUFNVSxLQUFLLEdBQUFULEtBQU87SUFDbEI7SUFDQSxJQUFJcUIsT0FBTyxHQUFHUyxRQUFRLENBQUNwQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDLElBQUl3SixNQUFNLEdBQUdwSSxRQUFRLENBQUNwQixhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDVixLQUFBLENBQUs2QyxhQUFhLEdBQUcsSUFBQUMsd0JBQVcsRUFBQy9DLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDO0lBQzFELElBQUlqRCxLQUFLLENBQUNnRCxhQUFhLENBQUNDLElBQUksQ0FBQ21ILFNBQVMsSUFBSXBLLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDbUgsU0FBUyxDQUFDQyxhQUFhLEVBQUU7TUFDMUYsSUFBSUMsSUFBSSxHQUFHdkksUUFBUSxDQUFDcEIsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUN6QzJKLElBQUksQ0FBQ0MsU0FBUyxHQUFHdEssS0FBQSxDQUFLNkMsYUFBYSxDQUFDMEgsaUJBQWlCO01BQ3JETCxNQUFNLENBQUNNLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBQzFCLENBQUMsTUFDSTtNQUNISCxNQUFNLENBQUNPLEtBQUssR0FBR3pLLEtBQUEsQ0FBSzZDLGFBQWEsQ0FBQzBILGlCQUFpQjtJQUNyRDtJQUNBbEosT0FBTyxDQUFDTyxTQUFTLEdBQUcsc0RBQXNEO0lBQzFFLElBQUk3QixLQUFLLENBQUNtRixJQUFJLEVBQUU7TUFDZDdELE9BQU8sQ0FBQ08sU0FBUyxJQUFJLFVBQVU7SUFDakMsQ0FBQyxNQUFNO01BQ0xQLE9BQU8sQ0FBQ08sU0FBUyxJQUFJLFdBQVc7SUFDbEM7SUFDQSxJQUFJN0IsS0FBSyxDQUFDMkssUUFBUSxFQUFFO01BQ2xCckosT0FBTyxDQUFDTyxTQUFTLElBQUksZUFBZTtJQUN0QztJQUNBUCxPQUFPLENBQUNtSixXQUFXLENBQUNOLE1BQU0sQ0FBQztJQUMzQlMsTUFBTSxDQUFDdEosT0FBTyxDQUFDLENBQUNxSCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtNQUMzQyxJQUFJaUMsTUFBTSxHQUFHbkssS0FBSyxDQUFDVixLQUFLLENBQUNnRCxhQUFhLENBQUM4SCxxQkFBcUIsQ0FBQ2pKLFNBQVMsQ0FBQ2tKLFFBQVEsQ0FBQyxXQUFXLENBQUM7TUFDNUYsSUFBSXJLLEtBQUssQ0FBQ3dFLEtBQUssQ0FBQ0MsSUFBSSxFQUFFO1FBQ3BCLElBQUksQ0FBQzBGLE1BQU0sRUFBRTtVQUNYbkssS0FBSyxDQUFDc0ssS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDLE1BQ0k7VUFDSEosTUFBTSxDQUFDbEssS0FBSyxDQUFDVixLQUFLLENBQUNnRCxhQUFhLENBQUM4SCxxQkFBcUIsQ0FBQyxDQUFDRyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdkc7TUFDRixDQUFDLE1BQU07UUFDTHhLLEtBQUssQ0FBQ3lFLElBQUksQ0FBQyxDQUFDO01BQ2Q7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJbkMsYUFBYSxHQUFHaEQsS0FBSyxDQUFDZ0QsYUFBYTtJQUN2QyxJQUFJbUksT0FBTyxHQUFHLElBQUlDLGdCQUFPLENBQUM7TUFBQzlKLE9BQU8sRUFBRUEsT0FBTztNQUFFK0osTUFBTSxFQUFFckwsS0FBSyxDQUFDcUw7SUFBTSxDQUFDLENBQUM7SUFDbkUsSUFBSTlKLEtBQUssR0FBR3lCLGFBQWEsQ0FBQ3NJLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDLFVBQUFqSyxPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDUCxJQUFJLEtBQUssY0FBYztJQUFBLEVBQUM7SUFDN0ZpQyxhQUFhLENBQUNzSSxhQUFhLENBQUMvSixLQUFLLENBQUMsQ0FBQzRKLE9BQU8sR0FBR0EsT0FBTztJQUNwRG5JLGFBQWEsQ0FBQ3dJLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxZQUFZLEdBQUdQLE9BQU87SUFDMURsTCxLQUFBLENBQUsrSyxLQUFLLEdBQUcvSyxLQUFBLENBQUsrSyxLQUFLLENBQUM1SyxJQUFJLENBQUFILEtBQUssQ0FBQztJQUNsQ0EsS0FBQSxDQUFLa0YsSUFBSSxHQUFHbEYsS0FBQSxDQUFLa0YsSUFBSSxDQUFDL0UsSUFBSSxDQUFBSCxLQUFLLENBQUM7SUFDaENBLEtBQUEsQ0FBSzBMLGtCQUFrQixHQUFHMUwsS0FBQSxDQUFLMEwsa0JBQWtCLENBQUN2TCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUM1REEsS0FBQSxDQUFLMkwscUJBQXFCLEdBQUczTCxLQUFBLENBQUsyTCxxQkFBcUIsQ0FBQ3hMLElBQUksQ0FBQUgsS0FBSyxDQUFDO0lBQ2xFQSxLQUFBLENBQUs0TCxxQkFBcUIsR0FBRzVMLEtBQUEsQ0FBSzRMLHFCQUFxQixDQUFDekwsSUFBSSxDQUFBSCxLQUFLLENBQUM7SUFDbEVBLEtBQUEsQ0FBSzZMLGtCQUFrQixHQUFHN0wsS0FBQSxDQUFLNkwsa0JBQWtCLENBQUMxTCxJQUFJLENBQUFILEtBQUssQ0FBQztJQUM1REEsS0FBQSxDQUFLOEwsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUVoRTlMLEtBQUEsQ0FBS2lGLEtBQUssR0FBRztNQUNYQyxJQUFJLEVBQUVuRixLQUFLLENBQUNtRixJQUFJLElBQUksS0FBSztNQUN6QjZHLFdBQVcsRUFBRSxRQUFRO01BQ3JCYixPQUFPLEVBQUVBLE9BQU87TUFDaEJjLGdCQUFnQixFQUFFLEVBQUU7TUFDcEJ6SSxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNEdkQsS0FBQSxDQUFLaU0sSUFBSSxDQUFDLENBQUM7SUFBQyxPQUFBak0sS0FBQTtFQUNkO0VBQUMsSUFBQUksVUFBQSxhQUFBNkosWUFBQSxFQUFBbkssVUFBQTtFQUFBLFdBQUFPLGFBQUEsYUFBQTRKLFlBQUE7SUFBQTNKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQUl5TCxXQUFXLEdBQUc7UUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQ3JKLGFBQWEsQ0FBQ0ssZ0NBQWdDO1FBQzdELE1BQU0sRUFBRSxJQUFJLENBQUNMLGFBQWEsQ0FBQ00seUNBQXlDO1FBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUNOLGFBQWEsQ0FBQ08sc0NBQXNDO1FBQ3BFLFFBQVEsRUFBRSxJQUFJLENBQUNQLGFBQWEsQ0FBQ1EscUNBQXFDO1FBQ2xFLFVBQVUsRUFBRSxJQUFJLENBQUNSLGFBQWEsQ0FBQ1M7TUFDakMsQ0FBQztNQUVELG9CQUNFNUYsTUFBQSxZQUFBZ0QsYUFBQTtRQUFLa0IsU0FBUyxFQUFFO01BQTJCLGdCQUN6Q2xFLE1BQUEsWUFBQWdELGFBQUEsQ0FBQ2hELE1BQUEsQ0FBQXlPLFFBQVE7UUFBQ0MsUUFBUSxlQUFFMU8sTUFBQSxZQUFBZ0QsYUFBQSxjQUFLLFlBQWU7TUFBRSxnQkFDeENoRCxNQUFBLFlBQUFnRCxhQUFBLENBQUNvSixRQUFRO1FBQUN1QyxZQUFZLEVBQUUseUJBQTBCO1FBQUNDLFdBQVcsRUFBRSwyQkFBNEI7UUFBQ0MsYUFBYSxFQUFFLDZCQUE4QjtRQUNoSUMsTUFBTSxFQUFFLElBQUksQ0FBQzNKLGFBQWEsQ0FBQzRKLFlBQWE7UUFBQ0MsYUFBYSxFQUFFLG9CQUFxQjtRQUFDQyxVQUFVLEVBQUUsSUFBSSxDQUFDNUIsS0FBTTtRQUFDNkIsYUFBYSxFQUFFLElBQUksQ0FBQy9KLGFBQWEsQ0FBQ2dLO01BQU0sQ0FDOUksQ0FDRixDQUFDLGVBQ1huUCxNQUFBLFlBQUFnRCxhQUFBO1FBQUtrQixTQUFTLEVBQUU7TUFBaUMsR0FDOUMsSUFBSSxDQUFDa0ssS0FBSyxDQUFDMUssR0FBRyxDQUFDLFVBQVNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1FBQ3ZDLG9CQUFPNUQsTUFBQSxZQUFBZ0QsYUFBQTtVQUFRSixHQUFHLEVBQUVnQixLQUFNO1VBQUNNLFNBQVMsRUFBRSxjQUFjLEdBQUdQLE9BQU8sR0FBRyxHQUFHLElBQUlBLE9BQU8sS0FBS1osS0FBSyxDQUFDd0UsS0FBSyxDQUFDOEcsV0FBVyxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUU7VUFDOUhlLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBO1lBQUEsT0FBUXJNLEtBQUssQ0FBQ3NNLFFBQVEsQ0FBQztjQUFDaEIsV0FBVyxFQUFFMUs7WUFBTyxDQUFDLENBQUM7VUFBQSxDQUFDO1VBQUNvSixLQUFLLEVBQUV5QixXQUFXLENBQUM3SyxPQUFPO1FBQUUsQ0FBQyxDQUFDO01BQ3hHLENBQUMsQ0FDRSxDQUFDLGVBQ04zRCxNQUFBLFlBQUFnRCxhQUFBLENBQUNpSixvQkFBQSxDQUFBL0csZ0JBQWdCO1FBQUNnQixJQUFJLEVBQUUsUUFBUztRQUFDb0IsWUFBWSxFQUFFLElBQUs7UUFBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUNzQixLQUFLLENBQUM4RyxXQUFXLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQzlHLEtBQUssQ0FBQ0MsSUFBSztRQUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQ3lCLEtBQUssQ0FBQzFCLFlBQWE7UUFDdklNLElBQUksRUFBRSxJQUFJLENBQUNoQixhQUFjO1FBQUMwRSxVQUFVLEVBQUUsSUFBSSxDQUFDbUUsa0JBQW1CO1FBQUMxSCxRQUFRLEVBQUUsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWlCO1FBQUN4RSxVQUFVLEVBQUUsSUFBSSxDQUFDcUUsa0JBQW1CO1FBQzFJN0osYUFBYSxFQUFFLElBQUksQ0FBQzJKLHFCQUFzQjtRQUFDNUksYUFBYSxFQUFFLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2dELGFBQWM7UUFBQ29GLGFBQWEsRUFBRSxJQUFJLENBQUN5RDtNQUFzQixDQUFDLENBQUMsZUFDbEpsTyxNQUFBLFlBQUFnRCxhQUFBLENBQUNpSixvQkFBQSxDQUFBL0csZ0JBQWdCO1FBQUNnQixJQUFJLEVBQUUsTUFBTztRQUFDb0IsWUFBWSxFQUFFLElBQUs7UUFBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUNzQixLQUFLLENBQUM4RyxXQUFXLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQzlHLEtBQUssQ0FBQ0MsSUFBSztRQUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQ3lCLEtBQUssQ0FBQzFCLFlBQWE7UUFDbklNLElBQUksRUFBRSxJQUFJLENBQUNoQixhQUFjO1FBQUMwRSxVQUFVLEVBQUUsSUFBSSxDQUFDbUUsa0JBQW1CO1FBQUMxSCxRQUFRLEVBQUUsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWlCO1FBQUN4RSxVQUFVLEVBQUUsSUFBSSxDQUFDcUUsa0JBQW1CO1FBQzFJN0osYUFBYSxFQUFFLElBQUksQ0FBQzJKLHFCQUFzQjtRQUFDNUksYUFBYSxFQUFFLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2dELGFBQWM7UUFBQ29GLGFBQWEsRUFBRSxJQUFJLENBQUN5RDtNQUFzQixDQUFDLENBQUMsZUFDbEpsTyxNQUFBLFlBQUFnRCxhQUFBLENBQUNpSixvQkFBQSxDQUFBL0csZ0JBQWdCO1FBQUNnQixJQUFJLEVBQUUsU0FBVTtRQUFDb0IsWUFBWSxFQUFFLElBQUs7UUFBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUNzQixLQUFLLENBQUM4RyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQzlHLEtBQUssQ0FBQ0MsSUFBSztRQUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQ3lCLEtBQUssQ0FBQzFCLFlBQWE7UUFDeklNLElBQUksRUFBRSxJQUFJLENBQUNoQixhQUFjO1FBQUMwRSxVQUFVLEVBQUUsSUFBSSxDQUFDbUUsa0JBQW1CO1FBQUMxSCxRQUFRLEVBQUUsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWlCO1FBQUN4RSxVQUFVLEVBQUUsSUFBSSxDQUFDcUUsa0JBQW1CO1FBQzFJN0osYUFBYSxFQUFFLElBQUksQ0FBQzJKLHFCQUFzQjtRQUFDNUksYUFBYSxFQUFFLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2dELGFBQWM7UUFBQ29GLGFBQWEsRUFBRSxJQUFJLENBQUN5RDtNQUFzQixDQUFDLENBQUMsZUFDbEpsTyxNQUFBLFlBQUFnRCxhQUFBLENBQUNpSixvQkFBQSxDQUFBL0csZ0JBQWdCO1FBQUNnQixJQUFJLEVBQUUsUUFBUztRQUFDb0IsWUFBWSxFQUFFLElBQUs7UUFBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUNzQixLQUFLLENBQUM4RyxXQUFXLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQzlHLEtBQUssQ0FBQ0MsSUFBSztRQUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQ3lCLEtBQUssQ0FBQzFCLFlBQWE7UUFDdklNLElBQUksRUFBRSxJQUFJLENBQUNoQixhQUFjO1FBQUMwRSxVQUFVLEVBQUUsSUFBSSxDQUFDbUUsa0JBQW1CO1FBQUMxSCxRQUFRLEVBQUUsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWlCO1FBQUN4RSxVQUFVLEVBQUUsSUFBSSxDQUFDcUUsa0JBQW1CO1FBQzFJN0osYUFBYSxFQUFFLElBQUksQ0FBQzJKLHFCQUFzQjtRQUFDNUksYUFBYSxFQUFFLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2dELGFBQWM7UUFBQ29GLGFBQWEsRUFBRSxJQUFJLENBQUN5RDtNQUFzQixDQUFDLENBQUMsZUFDbEpsTyxNQUFBLFlBQUFnRCxhQUFBLENBQUNpSixvQkFBQSxDQUFBL0csZ0JBQWdCO1FBQUNnQixJQUFJLEVBQUUsVUFBVztRQUFDb0IsWUFBWSxFQUFFLElBQUs7UUFBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUNzQixLQUFLLENBQUM4RyxXQUFXLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQzlHLEtBQUssQ0FBQ0MsSUFBSztRQUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQ3lCLEtBQUssQ0FBQzFCLFlBQWE7UUFDM0lNLElBQUksRUFBRSxJQUFJLENBQUNoQixhQUFjO1FBQUMwRSxVQUFVLEVBQUUsSUFBSSxDQUFDbUUsa0JBQW1CO1FBQUMxSCxRQUFRLEVBQUUsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWlCO1FBQUN4RSxVQUFVLEVBQUUsSUFBSSxDQUFDcUUsa0JBQW1CO1FBQzFJN0osYUFBYSxFQUFFLElBQUksQ0FBQzJKLHFCQUFzQjtRQUFDNUksYUFBYSxFQUFFLElBQUksQ0FBQ2hELEtBQUssQ0FBQ2dELGFBQWM7UUFBQ29GLGFBQWEsRUFBRSxJQUFJLENBQUN5RDtNQUFzQixDQUFDLENBQzlJLENBQUM7SUFFVjtFQUFDO0lBQUF0TCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBc0wsa0JBQWtCQSxDQUFBLEVBQUc7TUFDbkIsSUFBSSxDQUFDa0IsUUFBUSxDQUFDO1FBQUN4SixZQUFZLEVBQUUsSUFBSSxDQUFDMEIsS0FBSyxDQUFDMUIsWUFBWSxHQUFHO01BQUMsQ0FBQyxDQUFDO0lBQzVEO0VBQUM7SUFBQWpELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtTCxrQkFBa0JBLENBQUM3SixPQUFPLEVBQUU7TUFDMUIsSUFBSW1DLFFBQVEsR0FBRyxJQUFJLENBQUNpQixLQUFLLENBQUMrRyxnQkFBZ0I7TUFDMUNoSSxRQUFRLENBQUNnSixJQUFJLENBQUNuTCxPQUFPLENBQUM7TUFDdEIsSUFBSSxDQUFDa0wsUUFBUSxDQUFDO1FBQUNmLGdCQUFnQixFQUFFaEk7TUFBUSxDQUFDLENBQUM7SUFDN0M7RUFBQztJQUFBMUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9MLHFCQUFxQkEsQ0FBQzFELFVBQVUsRUFBRWhHLEVBQUUsRUFBRTtNQUNwQyxJQUFJK0IsUUFBUSxHQUFHLElBQUksQ0FBQ2lCLEtBQUssQ0FBQytHLGdCQUFnQjtNQUMxQyxLQUFLLElBQUk1TixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0RixRQUFRLENBQUNHLE1BQU0sRUFBRS9GLENBQUMsRUFBRSxFQUFFO1FBQ3hDLElBQUk0RixRQUFRLENBQUM1RixDQUFDLENBQUMsQ0FBQzZELEVBQUUsS0FBS0EsRUFBRSxFQUFFO1VBQ3pCK0IsUUFBUSxDQUFDNUYsQ0FBQyxDQUFDLEdBQUc2SixVQUFVO1FBQzFCO01BQ0Y7TUFDQSxJQUFJLENBQUM4RSxRQUFRLENBQUM7UUFBQ2YsZ0JBQWdCLEVBQUVoSTtNQUFRLENBQUMsQ0FBQztJQUM3QztFQUFDO0lBQUExRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcUwscUJBQXFCQSxDQUFDM0osRUFBRSxFQUFFO01BQ3hCLElBQUkrQixRQUFRLEdBQUcsSUFBSSxDQUFDaUIsS0FBSyxDQUFDK0csZ0JBQWdCO01BQzFDLEtBQUssSUFBSTVOLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzRGLFFBQVEsQ0FBQ0csTUFBTSxFQUFFL0YsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSTRGLFFBQVEsQ0FBQzVGLENBQUMsQ0FBQyxDQUFDNkQsRUFBRSxLQUFLQSxFQUFFLEVBQUU7VUFDekIrQixRQUFRLENBQUNpSixNQUFNLENBQUM3TyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ3JCO1FBQ0Y7TUFDRjtNQUNBLElBQUksQ0FBQzJPLFFBQVEsQ0FBQztRQUFDZixnQkFBZ0IsRUFBRWhJO01BQVEsQ0FBQyxDQUFDO0lBQzdDO0VBQUM7SUFBQTFELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEyTSxjQUFjQSxDQUFDQyxPQUFPLEVBQUU7TUFDdEIsSUFBSSxJQUFJLENBQUNyQixLQUFLLENBQUNoQixRQUFRLENBQUNxQyxPQUFPLENBQUMsRUFBRTtRQUNoQyxJQUFJLENBQUNKLFFBQVEsQ0FBQztVQUFDaEIsV0FBVyxFQUFFb0I7UUFBTyxDQUFDLENBQUM7TUFDdkMsQ0FBQyxNQUFNO1FBQ0xDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO01BQ3JEO0lBQ0Y7RUFBQztJQUFBL00sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJFLElBQUlBLENBQUEsRUFBRztNQUNMLElBQUksQ0FBQzZILFFBQVEsQ0FBQztRQUFDN0gsSUFBSSxFQUFFO01BQUksQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQ25GLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ3VLLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUNqRDtFQUFDO0lBQUFoTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0ssS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDZ0MsUUFBUSxDQUFDO1FBQUM3SCxJQUFJLEVBQUU7TUFBSyxDQUFDLENBQUM7SUFDOUI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEU7SUFBQTVFLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUEwTCxJQUFJQSxDQUFBLEVBQUc7TUFDTDtNQUNBLElBQUksQ0FBQzlGLGdCQUFnQixHQUFHLElBQUlvSCxhQUFNLENBQUM7UUFBQ25JLE1BQU0sRUFBRSxJQUFJb0ksY0FBWSxDQUFDO01BQUMsQ0FBQyxDQUFDO01BQ2hFLElBQUksQ0FBQ3RILG1CQUFtQixHQUFHLElBQUlxSCxhQUFNLENBQUM7UUFBQ25JLE1BQU0sRUFBRSxJQUFJb0ksY0FBWSxDQUFDO01BQUMsQ0FBQyxDQUFDO01BQ25FLElBQUksQ0FBQ3ZILGtCQUFrQixHQUFHLElBQUlzSCxhQUFNLENBQUM7UUFBQ25JLE1BQU0sRUFBRSxJQUFJb0ksY0FBWSxDQUFDO01BQUMsQ0FBQyxDQUFDO01BQ2xFLElBQUksQ0FBQ3pILG9CQUFvQixHQUFHLElBQUl3SCxhQUFNLENBQUM7UUFBQ25JLE1BQU0sRUFBRSxJQUFJb0ksY0FBWSxDQUFDO01BQUMsQ0FBQyxDQUFDO01BRXBFLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSUMsWUFBSyxDQUFDO1FBQ2pDQyxNQUFNLEVBQUUsSUFBSXZILGNBQVUsQ0FBQyxDQUNyQixJQUFJLENBQUNMLG9CQUFvQixFQUN6QixJQUFJLENBQUNFLGtCQUFrQixFQUN2QixJQUFJLENBQUNDLG1CQUFtQixFQUN4QixJQUFJLENBQUNDLGdCQUFnQixDQUN0QixDQUFDO1FBQ0Z5SCxPQUFPLEVBQUU7TUFDWCxDQUFDLENBQUM7TUFDRixJQUFJLENBQUM3TixLQUFLLENBQUNnRCxhQUFhLENBQUMzQixHQUFHLENBQUN5TSxRQUFRLENBQUMsSUFBSSxDQUFDSixpQkFBaUIsQ0FBQzs7TUFFN0Q7TUFDQSxPQUFPLElBQUk7SUFDYixDQUFDLENBQUM7RUFBQTtJQUFBbk4sR0FBQTtJQUFBQyxLQUFBLEVBRUYsU0FBQWlFLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJRCxTQUFTLENBQUNRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDdEM7UUFDQXlGLE1BQU0sQ0FBQyxJQUFJLENBQUMxRixLQUFLLENBQUNpRyxPQUFPLENBQUM3SixPQUFPLENBQUMsQ0FBQzJKLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNoRk4sTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUNLLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNuRixJQUFJLENBQUNsTCxLQUFLLENBQUNnRCxhQUFhLENBQUMzQixHQUFHLENBQUMwTSxXQUFXLENBQUMsSUFBSSxDQUFDTCxpQkFBaUIsQ0FBQztRQUNoRSxJQUFJLENBQUNNLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUk7TUFDekIsQ0FBQyxNQUFNLElBQUksQ0FBQ3RKLFNBQVMsQ0FBQ1EsSUFBSSxJQUFJLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDN0N5RixNQUFNLENBQUMsSUFBSSxDQUFDMUYsS0FBSyxDQUFDaUcsT0FBTyxDQUFDN0osT0FBTyxDQUFDLENBQUM0SixRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNELFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDaEZMLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDTSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNELFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDbkYsSUFBSSxJQUFJLENBQUNnRCxXQUFXLEVBQUU7VUFDcEIsSUFBSTtZQUNGLElBQUksQ0FBQ2pPLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQzNCLEdBQUcsQ0FBQ3lNLFFBQVEsQ0FBQyxJQUFJLENBQUNKLGlCQUFpQixDQUFDO1VBQy9ELENBQUMsQ0FBQyxPQUFNNVAsQ0FBQyxFQUFFO1lBQ1R1UCxPQUFPLENBQUNDLElBQUksQ0FBQ3hQLENBQUMsQ0FBQztVQUNqQjtRQUNGO1FBQ0EsSUFBSSxDQUFDb1EsV0FBVyxDQUFDLENBQUM7TUFDcEI7TUFDQSxJQUFJLElBQUksQ0FBQ2xPLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDa0wsT0FBTyxFQUFFO1FBQ3pDLElBQUlDLFFBQVEsR0FBR3ZHLG1CQUFLLENBQUN3RyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUlELFFBQVEsS0FBSyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUNsSixLQUFLLENBQUNDLElBQUksRUFBRTtVQUNuRDBDLG1CQUFLLENBQUN5RyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUMvQixDQUFDLE1BQ0ksSUFBSUYsUUFBUSxLQUFLLGNBQWMsSUFBSSxJQUFJLENBQUNsSixLQUFLLENBQUNDLElBQUksRUFBRTtVQUN2RDBDLG1CQUFLLENBQUN5RyxVQUFVLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQztRQUMzQztNQUNGO0lBQ0Y7RUFBQztJQUFBL04sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdOLGNBQWNBLENBQUEsRUFBRztNQUNmLElBQUlPLFNBQVMsR0FBRyxJQUFJLENBQUNiLGlCQUFpQixDQUFDYyxjQUFjLENBQUMsQ0FBQztNQUN2RCxLQUFLLElBQUluUSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrUSxTQUFTLENBQUNuSyxNQUFNLEVBQUUvRixDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJb1EsS0FBSyxHQUFHRixTQUFTLENBQUNsUSxDQUFDLENBQUM7UUFDeEIsSUFBSThGLFdBQVcsR0FBR3NLLEtBQUssQ0FBQ3hJLFNBQVMsQ0FBQyxDQUFDLENBQUN5SSxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJdkssV0FBVyxFQUFFO1VBQ2YsS0FBSyxJQUFJd0ssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeEssV0FBVyxDQUFDQyxNQUFNLEVBQUV1SyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJN00sT0FBTyxHQUFHcUMsV0FBVyxDQUFDd0ssQ0FBQyxDQUFDO1lBQzVCN00sT0FBTyxDQUFDcEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDa1EsSUFBSSxDQUFDLENBQUM7VUFDL0I7UUFDRjtNQUNGO0lBQ0Y7RUFBQztJQUFBck8sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBOLFdBQVdBLENBQUEsRUFBRztNQUNaLElBQUlLLFNBQVMsR0FBRyxJQUFJLENBQUNiLGlCQUFpQixDQUFDYyxjQUFjLENBQUMsQ0FBQztNQUN2RCxLQUFLLElBQUluUSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrUSxTQUFTLENBQUNuSyxNQUFNLEVBQUUvRixDQUFDLEVBQUUsRUFBRTtRQUN6QyxJQUFJb1EsS0FBSyxHQUFHRixTQUFTLENBQUNsUSxDQUFDLENBQUM7UUFDeEIsSUFBSThGLFdBQVcsR0FBR3NLLEtBQUssQ0FBQ3hJLFNBQVMsQ0FBQyxDQUFDLENBQUN5SSxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJdkssV0FBVyxFQUFFO1VBQ2YsS0FBSyxJQUFJd0ssQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeEssV0FBVyxDQUFDQyxNQUFNLEVBQUV1SyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJN00sT0FBTyxHQUFHcUMsV0FBVyxDQUFDd0ssQ0FBQyxDQUFDO1lBQzVCN00sT0FBTyxDQUFDcEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDbVEsSUFBSSxDQUFDLENBQUM7VUFDL0I7UUFDRjtNQUNGO0lBQ0Y7RUFBQztBQUFBLEVBL091Q3ZNLGdCQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLWZlYXR1cmUuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgb2Zmc2V0OiBbMiwgLTJdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNGZWF0dXJlIChldmVudC5mZWF0dXJlKSkge1xuICAgICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCd0b29sdGlwJywgYWN0aXZlVG9vbHRpcCk7XG4gICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgnZ2VvbWV0cnlUeXBlJywgc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICBhZGRNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLm9uKCdwb2ludGVybW92ZScsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcC5zZXRQb3NpdGlvbihldmVudC5jb29yZGluYXRlKTtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3ZW5kJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgICAgYWN0aXZlU2tldGNoID0gbnVsbDtcbiAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgICAgYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBmZWF0dXJlcy5jbGVhcigpO1xuICAgICAgICAvLyBFbmFibGUgaW50ZXJhY3Rpb25cbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIGRlYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpICE9PSAncG9pbnQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uLmZpbmlzaERyYXdpbmcoKTtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgIC8vIDBfb1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBtYXBcbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtNZWFzdXJldG9vbHNWaWV3fSBmcm9tIFwiLi9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4XCI7XG5pbXBvcnQge0dyb3VwLCBWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtWZWN0b3IgYXMgVmVjdG9yU291cmNlfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmV0b29scyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfTUVBU1VSRVRPT0xTO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX01FQVNVUkVUT09MUztcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcIm1lYXN1cmV0b29sc1wiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm1lYXN1cmV0b29scyA9IGNvbnRyb2w7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkbGluZVwifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLVwiICsgZWxlbWVudCArIFwiIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9IHRpdGxlPXthcnJUb29sdGlwc1tlbGVtZW50XX0vPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wic2VsZWN0XCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInNlbGVjdFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wibGluZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJsaW5lXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJwb2x5Z29uXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInBvbHlnb25cIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImNpcmNsZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJjaXJjbGVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImZyZWVoYW5kXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImZyZWVoYW5kXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpbmNyZW1lbnRGZWF0dXJlSWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZUlkQ3RyOiB0aGlzLnN0YXRlLmZlYXR1cmVJZEN0ciArIDF9KTtcbiAgfVxuXG4gIGFkZE1lYXN1cmVkRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIG1vZGlmeU1lYXN1cmVkRmVhdHVyZShuZXdGZWF0dXJlLCBpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzW2ldID0gbmV3RmVhdHVyZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHJlbW92ZU1lYXN1cmVkRmVhdHVyZShpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBzZXRDdXJyZW50TW9kZShuZXdNb2RlKSB7XG4gICAgaWYgKHRoaXMubW9kZXMuaW5jbHVkZXMobmV3TW9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBuZXdNb2RlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzcGVjaWZpZWQgbW9kZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gQWRkIG1lYXN1cmUgbGF5ZXJzXG4gICAgdGhpcy5tZWFzdXJlTGluZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcblxuICAgIHRoaXMubWVhc3VyZUxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllcixcbiAgICAgIF0pLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAvLyB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAvLyBtZWFzdXJldG9vbHMgd2VyZSBjbG9zZWRcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlZE9uY2UgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAodGhpcy5yZW1vdmVkT25jZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hZGRUb29sdGlwcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiTWVhc3VyZXRvb2xzXCIgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFuZWxWYWwgIT09IFwiTWVhc3VyZXRvb2xzXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJNZWFzdXJldG9vbHNcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIk1lYXN1cmVkRmVhdHVyZSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsInNjb3BlIiwiY3JlYXRlRWxlbWVudCIsImh0bWxGb3IiLCJpZHgiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsImxhYmVsIiwib25JbnB1dCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsImNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttIiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWUiLCJmZWF0dXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kaWZ5RmVhdHVyZSIsImlkIiwiZGlzdGFuY2UiLCJrbVZhbHVlIiwiYXJlYSIsIkNvbXBvbmVudCIsIl9jNGdNYXBzSTE4biIsIl9vbCIsIl9pbnRlcmFjdGlvbiIsIl9jNGdNYXBzVXRpbHMiLCJfYzRnTWFwc01pc2NUb29sdGlwcG9wdXAiLCJfYzRnTWVhc3VyZXRvb2xzRmVhdHVyZSIsIk1lYXN1cmV0b29sc1ZpZXciLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImxlbmd0aCIsIm9sRmVhdHVyZSIsInVwZGF0ZU1lYXN1cmVGZWF0dXJlIiwiY29tcG9uZW50RGlkTW91bnQiLCJpbml0RnVuY3Rpb24iLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFjdGl2YXRlRnVuY3Rpb24iLCJkZWFjdGl2YXRlRnVuY3Rpb24iLCJtYXBIb3ZlciIsImRlYWN0aXZhdGUiLCJtZWFzdXJlVG9vbHMiLCJzdGF0ZSIsIm9wZW4iLCJhY3RpdmF0ZSIsInNvdXJjZSIsIm9sVHlwZSIsImludGVyYWN0aW9uIiwiZmVhdHVyZUlkQ291bnQiLCJhY3RpdmVTa2V0Y2giLCJhY3RpdmVUb29sdGlwIiwiYWRkTWVhc3VyZUZlYXR1cmUiLCJnZXRWYWx1ZU9mR2VvbWV0cnkiLCJnZXRMZW5ndGhPZk1lYXN1cmUiLCJyZW1vdmVNZWFzdXJlRmVhdHVyZSIsInRvTG93ZXJDYXNlIiwibWVhc3VyZUZyZWVoYW5kTGF5ZXIiLCJnZXRTb3VyY2UiLCJtZWFzdXJlQ2lyY2xlTGF5ZXIiLCJtZWFzdXJlUG9seWdvbkxheWVyIiwibWVhc3VyZUxpbmVMYXllciIsIkNvbGxlY3Rpb24iLCJEcmF3IiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsInJhZGl1cyIsInV0aWxzIiwibWVhc3VyZUdlb21ldHJ5IiwicmF3VmFsdWUiLCJzZXRDb250ZW50IiwiaHRtbFZhbHVlIiwibmV3RmVhdHVyZSIsImxpbmUiLCJyZW1vdmVGZWF0dXJlIiwibGVuZyIsInZhbCIsInZhbHVlbnVtYiIsIm1hdGNoIiwiam9pbiIsImxlbmd0aG51bWIiLCJvbiIsImV2ZW50IiwiVG9vbHRpcFBvcFVwIiwicG9zaXRpb24iLCJjb29yZGluYXRlIiwib2Zmc2V0IiwiaG9yaXpvbnRhbCIsImNsb3NlYWJsZSIsImNsb3NlRnVuY3Rpb24iLCJoYXNGZWF0dXJlIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiX2NvbnRyb2wiLCJfYzRnTWVhc3VyZXRvb2xzVmlldyIsIl9sYXllciIsIl9zb3VyY2UiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk1lYXN1cmV0b29scyIsImJ1dHRvbiIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiZXh0ZXJuYWwiLCJqUXVlcnkiLCJoaWRkZW4iLCJtZWFzdXJldG9vbHNDb250YWluZXIiLCJpbmNsdWRlcyIsImNsb3NlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWVhc3VyZXRvb2xzIiwiYWRkTWVhc3VyZWRGZWF0dXJlIiwibW9kaWZ5TWVhc3VyZWRGZWF0dXJlIiwicmVtb3ZlTWVhc3VyZWRGZWF0dXJlIiwiaW5jcmVtZW50RmVhdHVyZUlkIiwibW9kZXMiLCJjdXJyZW50TW9kZSIsIm1lYXN1cmVkRmVhdHVyZXMiLCJpbml0IiwiYXJyVG9vbHRpcHMiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoaWRlQ29udGFpbmVyIiwiaGVhZGVyIiwiTUVBU1VSRVRPT0xTIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJvbk1vdXNlVXAiLCJzZXRTdGF0ZSIsInB1c2giLCJzcGxpY2UiLCJzZXRDdXJyZW50TW9kZSIsIm5ld01vZGUiLCJjb25zb2xlIiwid2FybiIsInNldE9wZW5Db21wb25lbnQiLCJWZWN0b3IiLCJWZWN0b3JTb3VyY2UiLCJtZWFzdXJlTGF5ZXJHcm91cCIsIkdyb3VwIiwibGF5ZXJzIiwidmlzaWJsZSIsImFkZExheWVyIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZWRPbmNlIiwiYWRkVG9vbHRpcHMiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnNBcnJheSIsImxheWVyIiwiZ2V0RmVhdHVyZXMiLCJqIiwiaGlkZSIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9