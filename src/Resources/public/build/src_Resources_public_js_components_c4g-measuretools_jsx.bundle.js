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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctbWVhc3VyZXRvb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFBdUMsU0FBQUMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVB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O01BQ0Y7SUFDRjtFQUFDO0lBQUFyTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBME4sV0FBV0EsQ0FBQSxFQUFHO01BQ1osSUFBSUssU0FBUyxHQUFHLElBQUksQ0FBQ2IsaUJBQWlCLENBQUNjLGNBQWMsQ0FBQyxDQUFDO01BQ3ZELEtBQUssSUFBSXpQLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3dQLFNBQVMsQ0FBQ25LLE1BQU0sRUFBRXJGLENBQUMsRUFBRSxFQUFFO1FBQ3pDLElBQUkwUCxLQUFLLEdBQUdGLFNBQVMsQ0FBQ3hQLENBQUMsQ0FBQztRQUN4QixJQUFJb0YsV0FBVyxHQUFHc0ssS0FBSyxDQUFDeEksU0FBUyxDQUFDLENBQUMsQ0FBQ3lJLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUl2SyxXQUFXLEVBQUU7VUFDZixLQUFLLElBQUl3SyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd4SyxXQUFXLENBQUNDLE1BQU0sRUFBRXVLLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUk3TSxPQUFPLEdBQUdxQyxXQUFXLENBQUN3SyxDQUFDLENBQUM7WUFDNUI3TSxPQUFPLENBQUN6RCxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUN3USxJQUFJLENBQUMsQ0FBQztVQUMvQjtRQUNGO01BQ0Y7SUFDRjtFQUFDO0FBQUEsRUEvT3VDdk0sZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLWZlYXR1cmUuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgb2Zmc2V0OiBbMiwgLTJdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNGZWF0dXJlIChldmVudC5mZWF0dXJlKSkge1xuICAgICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCd0b29sdGlwJywgYWN0aXZlVG9vbHRpcCk7XG4gICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgnZ2VvbWV0cnlUeXBlJywgc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICBhZGRNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLm9uKCdwb2ludGVybW92ZScsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcC5zZXRQb3NpdGlvbihldmVudC5jb29yZGluYXRlKTtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3ZW5kJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgICAgYWN0aXZlU2tldGNoID0gbnVsbDtcbiAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgICAgYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBmZWF0dXJlcy5jbGVhcigpO1xuICAgICAgICAvLyBFbmFibGUgaW50ZXJhY3Rpb25cbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIGRlYWN0aXZhdGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpICE9PSAncG9pbnQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uLmZpbmlzaERyYXdpbmcoKTtcbiAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgIC8vIDBfb1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBtYXBcbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtNZWFzdXJldG9vbHNWaWV3fSBmcm9tIFwiLi9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4XCI7XG5pbXBvcnQge0dyb3VwLCBWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtWZWN0b3IgYXMgVmVjdG9yU291cmNlfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYXN1cmV0b29scyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfTUVBU1VSRVRPT0xTO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX01FQVNVUkVUT09MUztcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcIm1lYXN1cmV0b29sc1wiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm1lYXN1cmV0b29scyA9IGNvbnRyb2w7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkbGluZVwifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLVwiICsgZWxlbWVudCArIFwiIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9IHRpdGxlPXthcnJUb29sdGlwc1tlbGVtZW50XX0vPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wic2VsZWN0XCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInNlbGVjdFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wibGluZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJsaW5lXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJwb2x5Z29uXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInBvbHlnb25cIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImNpcmNsZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJjaXJjbGVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImZyZWVoYW5kXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImZyZWVoYW5kXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpbmNyZW1lbnRGZWF0dXJlSWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZUlkQ3RyOiB0aGlzLnN0YXRlLmZlYXR1cmVJZEN0ciArIDF9KTtcbiAgfVxuXG4gIGFkZE1lYXN1cmVkRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIG1vZGlmeU1lYXN1cmVkRmVhdHVyZShuZXdGZWF0dXJlLCBpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzW2ldID0gbmV3RmVhdHVyZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHJlbW92ZU1lYXN1cmVkRmVhdHVyZShpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBzZXRDdXJyZW50TW9kZShuZXdNb2RlKSB7XG4gICAgaWYgKHRoaXMubW9kZXMuaW5jbHVkZXMobmV3TW9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBuZXdNb2RlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzcGVjaWZpZWQgbW9kZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gQWRkIG1lYXN1cmUgbGF5ZXJzXG4gICAgdGhpcy5tZWFzdXJlTGluZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcblxuICAgIHRoaXMubWVhc3VyZUxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllcixcbiAgICAgIF0pLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAvLyB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAvLyBtZWFzdXJldG9vbHMgd2VyZSBjbG9zZWRcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlZE9uY2UgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAodGhpcy5yZW1vdmVkT25jZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hZGRUb29sdGlwcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiTWVhc3VyZXRvb2xzXCIgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFuZWxWYWwgIT09IFwiTWVhc3VyZXRvb2xzXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJNZWFzdXJldG9vbHNcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiTWVhc3VyZWRGZWF0dXJlIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImNoYW5nZUZlYXR1cmVMYWJlbCIsImJpbmQiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwic2NvcGUiLCJjcmVhdGVFbGVtZW50IiwiaHRtbEZvciIsImlkeCIsInR5cGUiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwibGFiZWwiLCJvbklucHV0Iiwia2V5cyIsIm1lYXN1cmVkVmFsdWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4Iiwib2JqIiwiaHJWYWx1ZSIsImNvbnZlcnRNZXRlcnNUb0ttIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZSIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiX2M0Z01hcHNJMThuIiwiX29sIiwiX2ludGVyYWN0aW9uIiwiX2M0Z01hcHNVdGlscyIsIl9jNGdNYXBzTWlzY1Rvb2x0aXBwb3B1cCIsIl9jNGdNZWFzdXJldG9vbHNGZWF0dXJlIiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiaGVhZGxpbmVzIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsImZlYXR1cmVJZEN0ciIsImZlYXR1cmVJZCIsInVwZGF0ZUZ1bmN0aW9ucyIsImNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMiLCJhY3RpdmUiLCJtb2RlIiwibGFuZyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsImZlYXR1cmVzIiwiZmVhdCIsImFyckZlYXR1cmVzIiwibGVuZ3RoIiwib2xGZWF0dXJlIiwidXBkYXRlTWVhc3VyZUZlYXR1cmUiLCJjb21wb25lbnREaWRNb3VudCIsImluaXRGdW5jdGlvbiIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJmcmVlaGFuZCIsImlucHV0RWxlbWVudCIsInN0ckxhYmVsIiwic3RyVHlwZSIsIm1lYXN1cmVBcmVhIiwibWVhc3VyZVJhZGl1cyIsIm1lYXN1cmVMaW5lIiwiZ2V0R2VvbWV0cnkiLCJnZXRUeXBlIiwiTEVOR1RIIiwiTElORSIsIlBFUklNRVRFUiIsIlBPTFlHT04iLCJSQURJVVMiLCJDSVJDTEUiLCJGUkVFSEFORCIsIm1lYXN1cmVkRmVhdHVyZSIsImFkZEZlYXR1cmUiLCJpbmNyRmVhdElkIiwiZmVhdHVyZVRvb2x0aXAiLCJuZXdDb250ZW50IiwicmFkaXVzIiwidXRpbHMiLCJtZWFzdXJlR2VvbWV0cnkiLCJyYXdWYWx1ZSIsInNldENvbnRlbnQiLCJodG1sVmFsdWUiLCJuZXdGZWF0dXJlIiwibGluZSIsInJlbW92ZUZlYXR1cmUiLCJsZW5nIiwidmFsIiwidmFsdWVudW1iIiwibWF0Y2giLCJqb2luIiwibGVuZ3RobnVtYiIsIm9uIiwiZXZlbnQiLCJUb29sdGlwUG9wVXAiLCJwb3NpdGlvbiIsImNvb3JkaW5hdGUiLCJvZmZzZXQiLCJob3Jpem9udGFsIiwiY2xvc2VhYmxlIiwiY2xvc2VGdW5jdGlvbiIsImhhc0ZlYXR1cmUiLCJzZXRQb3NpdGlvbiIsImNsZWFyIiwiYWRkSW50ZXJhY3Rpb24iLCJmaW5pc2hEcmF3aW5nIiwiaWdub3JlIiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJfY29udHJvbCIsIl9jNGdNZWFzdXJldG9vbHNWaWV3IiwiX2xheWVyIiwiX3NvdXJjZSIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiTWVhc3VyZXRvb2xzIiwiYnV0dG9uIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX01FQVNVUkVUT09MUyIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJleHRlcm5hbCIsImpRdWVyeSIsImhpZGRlbiIsIm1lYXN1cmV0b29sc0NvbnRhaW5lciIsImluY2x1ZGVzIiwiY2xvc2UiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJtZWFzdXJldG9vbHMiLCJhZGRNZWFzdXJlZEZlYXR1cmUiLCJtb2RpZnlNZWFzdXJlZEZlYXR1cmUiLCJyZW1vdmVNZWFzdXJlZEZlYXR1cmUiLCJpbmNyZW1lbnRGZWF0dXJlSWQiLCJtb2RlcyIsImN1cnJlbnRNb2RlIiwibWVhc3VyZWRGZWF0dXJlcyIsImluaXQiLCJhcnJUb29sdGlwcyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhpZGVDb250YWluZXIiLCJoZWFkZXIiLCJNRUFTVVJFVE9PTFMiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsIm9uTW91c2VVcCIsInNldFN0YXRlIiwicHVzaCIsInNwbGljZSIsInNldEN1cnJlbnRNb2RlIiwibmV3TW9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2V0T3BlbkNvbXBvbmVudCIsIlZlY3RvciIsIlZlY3RvclNvdXJjZSIsIm1lYXN1cmVMYXllckdyb3VwIiwiR3JvdXAiLCJsYXllcnMiLCJ2aXNpYmxlIiwiYWRkTGF5ZXIiLCJyZW1vdmVMYXllciIsInJlbW92ZVRvb2x0aXBzIiwicmVtb3ZlZE9uY2UiLCJhZGRUb29sdGlwcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsImFyckxheWVycyIsImdldExheWVyc0FycmF5IiwibGF5ZXIiLCJnZXRGZWF0dXJlcyIsImoiLCJoaWRlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=