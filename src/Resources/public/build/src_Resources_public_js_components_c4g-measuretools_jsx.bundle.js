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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeasuredFeature = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MeasuredFeature, _Component);

  var _super = _createSuper(MeasuredFeature);

  function MeasuredFeature(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MeasuredFeature);
    _this = _super.call(this, props);
    _this.changeFeatureLabel = _this.changeFeatureLabel.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MeasuredFeature, [{
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
  return MeasuredFeature;
}(_react.Component);

exports.MeasuredFeature = MeasuredFeature;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./src/Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "./src/Resources/public/js/components/c4g-measuretools-feature.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeasuretoolsView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MeasuretoolsView, _Component);

  var _super = _createSuper(MeasuretoolsView);

  function MeasuretoolsView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MeasuretoolsView);
    _this = _super.call(this, props);
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
    _this.modifyFeature = _this.modifyFeature.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MeasuretoolsView, [{
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
            freehand: scope.props.mode === 'freehand' // @TODO: use custom style? (BE-option)
            // style: use default style

          });

          addMeasureFeature = function addMeasureFeature(feature) {
            var inputElement, strLabel, strType, measureArea, measureRadius, measureLine;

            if (!feature) {
              return false;
            } // check feature-type


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
            } // feature.set('listElementValueName', inputElement);


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
            scope.props.addFeature(measuredFeature); // increase the id-counter

            scope.props.incrFeatId(); // scope.update();
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
            var leng = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true); // feature.set('measuredLength', length);


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
            activeSketch = event.feature; // create tooltip

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
          features.clear(); // Enable interaction

          scope.props.mapController.map.addInteraction(interaction);
        },
        deactivateFunction: function deactivateFunction() {
          if (scope.props.mode.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {// 0_o
            }
          } // Remove from map


          scope.props.mapController.map.removeInteraction(interaction);
        }
      };
    }
  }]);
  return MeasuretoolsView;
}(_react.Component);

exports.MeasuretoolsView = MeasuretoolsView;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "./src/Resources/public/js/components/c4g-measuretools-view.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var Measuretools = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Measuretools, _Component);

  var _super = _createSuper(Measuretools);

  function Measuretools(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Measuretools);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_MEASURETOOLS;
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
    mapController.mapsControls.controls.measuretools = control;
    mapController.map.addControl(control);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addMeasuredFeature = _this.addMeasuredFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.modifyMeasuredFeature = _this.modifyMeasuredFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeMeasuredFeature = _this.removeMeasuredFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.incrementFeatureId = _this.incrementFeatureId.bind((0, _assertThisInitialized2["default"])(_this));
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

  (0, _createClass2["default"])(Measuretools, [{
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
      this.props.mapController.map.addLayer(this.measureLayerGroup); // this.spinner.hide();

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

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
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
  return Measuretools;
}(_react.Component);

exports["default"] = Measuretools;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctbWVhc3VyZXRvb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLGdEQUExQjtBQUhpQjtBQUlsQjs7OztXQUVELGtCQUFTO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSwwQkFDRSwwREFDRSwwREFDRTtBQUFPLGVBQU8sRUFBRSxvQkFBb0IsS0FBS0gsS0FBTCxDQUFXSTtBQUEvQyxrQkFERixlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFFLG9CQUFvQixLQUFLSixLQUFMLENBQVdJLEdBQXhEO0FBQTZELG9CQUFZLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxLQUF0RjtBQUNRLGVBQU8sRUFBRSxLQUFLSjtBQUR0QixRQUZGLENBREYsRUFNR0ssTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS1AsS0FBTCxDQUFXUSxjQUF2QixFQUF1Q0MsR0FBdkMsQ0FBMkMsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDbkUsWUFBSUMsR0FBRyxHQUFHVCxLQUFLLENBQUNILEtBQU4sQ0FBWVEsY0FBWixDQUEyQkUsT0FBM0IsQ0FBVjtBQUNBLFlBQUlHLE9BQU8sR0FBRyxHQUFkOztBQUNBLGdCQUFRSCxPQUFSO0FBQ0UsZUFBSyxNQUFMO0FBQ0EsZUFBSyxRQUFMO0FBQ0VHLFlBQUFBLE9BQU8sR0FBR1YsS0FBSyxDQUFDVyxpQkFBTixDQUF3QkYsR0FBRyxDQUFDRyxLQUE1QixDQUFWO0FBQ0E7O0FBQ0YsZUFBSyxNQUFMO0FBQ0VGLFlBQUFBLE9BQU8sR0FBR1YsS0FBSyxDQUFD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SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0osU0FBUyxDQUFDckosTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsWUFBSXdKLEtBQUssR0FBR0YsU0FBUyxDQUFDdEosQ0FBRCxDQUFyQjtBQUNBLFlBQUlELFdBQVcsR0FBR3lKLEtBQUssQ0FBQzNILFNBQU4sR0FBa0I0SCxXQUFsQixFQUFsQjs7QUFDQSxZQUFJMUosV0FBSixFQUFpQjtBQUNmLGVBQUssSUFBSTJKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUczSixXQUFXLENBQUNFLE1BQWhDLEVBQXdDeUosQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxnQkFBSXpMLE9BQU8sR0FBRzhCLFdBQVcsQ0FBQzJKLENBQUQsQ0FBekI7QUFDQXpMLFlBQUFBLE9BQU8sQ0FBQzBGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCaUcsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O0VBcE91Q25MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIE1lYXN1cmVkRmVhdHVyZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbCA9IHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9Pk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17XCJtZWFzdXJlRWxlbWVudF9cIiArIHRoaXMucHJvcHMuaWR4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubWVhc3VyZWRWYWx1ZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBvYmogPSBzY29wZS5wcm9wcy5tZWFzdXJlZFZhbHVlc1tlbGVtZW50XTtcbiAgICAgICAgICBsZXQgaHJWYWx1ZSA9IDAuMDtcbiAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgICBjYXNlIFwicmFkaXVzXCI6XG4gICAgICAgICAgICAgIGhyVmFsdWUgPSBzY29wZS5jb252ZXJ0TWV0ZXJzVG9LbShvYmoudmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhcmVhXCI6XG4gICAgICAgICAgICAgIGhyVmFsdWUgPSBzY29wZS5jb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShvYmoudmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICg8cCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxzdHJvbmc+e29iai5kZXNjcmlwdGlvbn08L3N0cm9uZz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZS12YWx1ZS1cIiArIHNjb3BlLnByb3BzLmlkeH0+e2hyVmFsdWV9PC9zcGFuPlxuICAgICAgICAgIDwvcD4pXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZUZlYXR1cmVMYWJlbCgpIHtcbiAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMuZmVhdHVyZTtcbiAgICBmZWF0dXJlLmxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm1lYXN1cmVFbGVtZW50XycgKyB0aGlzLnByb3BzLmlkeCArICdcIl0nKS52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgZmVhdHVyZS5pZCk7XG4gIH1cblxuICBjb252ZXJ0TWV0ZXJzVG9LbShkaXN0YW5jZSkge1xuICAgIGxldCBrbVZhbHVlID0gZGlzdGFuY2UgLyAxMDAwO1xuICAgIGlmIChrbVZhbHVlID4gMCkge1xuICAgICAgcmV0dXJuIGttVmFsdWUgKyBcIiBrbVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGlzdGFuY2UgKyBcIiBtXCI7XG4gICAgfVxuICB9XG5cbiAgY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20oYXJlYSkge1xuICAgIGxldCBrbVZhbHVlID0gYXJlYSAvIDEwMDAwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttwrJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyZWEgKyBcIiBtwrJcIjtcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtEcmF3fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtUb29sdGlwUG9wVXB9IGZyb20gXCIuLi9jNGctbWFwcy1taXNjLXRvb2x0aXBwb3B1cFwiO1xuaW1wb3J0IHtNZWFzdXJlZEZlYXR1cmV9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtZmVhdHVyZS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIE1lYXN1cmV0b29sc1ZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmhlYWRsaW5lcyA9IHtcbiAgICAgIFwic2VsZWN0XCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OLFxuICAgICAgXCJjaXJjbGVcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCxcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gICAgdGhpcy51cGRhdGVGdW5jdGlvbnMgPSB0aGlzLmNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMoKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT308L3A+XG4gICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICA8c3ViPnt0aGlzLnByb3BzLmxhbmcuTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTH08L3N1Yj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1lYXN1cmUgdmlld1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtY29udGVudFwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRlbnRIZWFkbGluZVwifT57dGhpcy5oZWFkbGluZXNbdGhpcy5wcm9wcy5tb2RlXX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZlYXR1cmVzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdCA9IHNjb3BlLnByb3BzLmZlYXR1cmVzW2VsZW1lbnRdO1xuICAgICAgICAgICAgICAgIHJldHVybiAoPE1lYXN1cmVkRmVhdHVyZSBrZXk9e2luZGV4fSBpZHg9e2luZGV4fSBsYWJlbD17ZmVhdC5sYWJlbH0gZmVhdHVyZT17ZmVhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZWRWYWx1ZXM9e2ZlYXQubWVhc3VyZWRWYWx1ZXN9IG1vZGlmeUZlYXR1cmU9e3Njb3BlLm1vZGlmeUZlYXR1cmV9Lz4pO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3QgYWN0aXZlXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIG1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgaWQpIHtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSB0aGlzLnByb3BzLmZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJGZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgYXJyRmVhdHVyZXNbaV0ub2xGZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgZmVhdHVyZS5sYWJlbCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWVhc3VyZUZlYXR1cmUoYXJyRmVhdHVyZXNbaV0ub2xGZWF0dXJlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5pbml0RnVuY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIikge1xuICAgICAgaWYgKCFwcmV2UHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmFjdGl2YXRlRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXBIb3Zlci5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIgfHwgIXRoaXMucHJvcHMubWVhc3VyZVRvb2xzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXBIb3Zlci5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLmZlYXR1cmVJZEN0ciA9IHRoaXMucHJvcHMuZmVhdHVyZUlkO1xuICB9XG5cbiAgY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpIHtcbiAgICBsZXQgc291cmNlLCBmZWF0dXJlcywgb2xUeXBlLCBpbnRlcmFjdGlvbjtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZlYXR1cmVJZENvdW50LFxuICAgICAgICBhY3RpdmVTa2V0Y2gsXG4gICAgICAgIGFjdGl2ZVRvb2x0aXAsXG4gICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlLFxuICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZSxcbiAgICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5LFxuICAgICAgICBnZXRMZW5ndGhPZk1lYXN1cmUsXG4gICAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlO1xuXG4gICAgICBmZWF0dXJlSWRDb3VudCA9IHNjb3BlLmZlYXR1cmVJZEN0cjtcblxuICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZyZWVoYW5kJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUZyZWVoYW5kTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVDaXJjbGVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAncG9seWdvbicpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUxpbmVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH1cblxuICAgICAgZmVhdHVyZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xuICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoc2NvcGUucHJvcHMubW9kZSkge1xuICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiTGluZVN0cmluZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicG9seWdvblwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiUG9seWdvblwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJDaXJjbGVcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImZyZWVoYW5kXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGludGVyYWN0aW9uID0gbmV3IERyYXcoe1xuICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICB0eXBlOiBvbFR5cGUsXG4gICAgICAgIGZyZWVoYW5kOiBzY29wZS5wcm9wcy5tb2RlID09PSAnZnJlZWhhbmQnLFxuICAgICAgICAvLyBAVE9ETzogdXNlIGN1c3RvbSBzdHlsZT8gKEJFLW9wdGlvbilcbiAgICAgICAgLy8gc3R5bGU6IHVzZSBkZWZhdWx0IHN0eWxlXG4gICAgICB9KTtcblxuICAgICAgYWRkTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgaW5wdXRFbGVtZW50LFxuICAgICAgICAgIHN0ckxhYmVsLFxuICAgICAgICAgIHN0clR5cGUsXG4gICAgICAgICAgbWVhc3VyZUFyZWEsXG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyxcbiAgICAgICAgICBtZWFzdXJlTGluZTtcblxuICAgICAgICBpZiAoIWZlYXR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBmZWF0dXJlLXR5cGVcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdMaW5lU3RyaW5nJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuTElORTtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ1BvbHlnb24nKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlBFUklNRVRFUjtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5QT0xZR09OO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gdHJ1ZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnQ2lyY2xlJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5SQURJVVM7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuQ0lSQ0xFO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gdHJ1ZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gdHJ1ZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vZnJlZWhhbmQgaXMgTGluZVN0cmluZyB0b29cbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuTEVOR1RIO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkZSRUVIQU5EO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZlYXR1cmUuc2V0KCdsaXN0RWxlbWVudFZhbHVlTmFtZScsIGlucHV0RWxlbWVudCk7XG4gICAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUlkJywgZmVhdHVyZUlkQ291bnQpO1xuICAgICAgICBsZXQgbWVhc3VyZWRGZWF0dXJlID0ge307XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5pZCA9IGZlYXR1cmVJZENvdW50O1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUubGFiZWwgPSBzdHJUeXBlICsgXCIgXCIgKyBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ2ZlYXR1cmVMYWJlbCcsIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCk7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlcyA9IHt9O1xuICAgICAgICBpZiAobWVhc3VyZUxpbmUpIHtcbiAgICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkzDpG5nZTogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lYXN1cmVSYWRpdXMpIHtcbiAgICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZUFyZWEpIHtcbiAgICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZsw6RjaGVuaW5oYWx0OiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtZWFzdXJlZEZlYXR1cmUub2xGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgc2NvcGUucHJvcHMuYWRkRmVhdHVyZShtZWFzdXJlZEZlYXR1cmUpO1xuICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaWQtY291bnRlclxuICAgICAgICBzY29wZS5wcm9wcy5pbmNyRmVhdElkKCk7XG4gICAgICAgIC8vIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwiYWRkTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGZlYXR1cmVUb29sdGlwLFxuICAgICAgICAgIG5ld0NvbnRlbnQsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgYXJlYSxcbiAgICAgICAgICByYWRpdXM7XG5cbiAgICAgICAgZmVhdHVyZVRvb2x0aXAgPSBmZWF0dXJlLmdldCgndG9vbHRpcCcpO1xuICAgICAgICBuYW1lID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVMYWJlbCcpO1xuICAgICAgICBsZW5ndGggPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoLnJhd1ZhbHVlKTtcbiAgICAgICAgZmVhdHVyZVRvb2x0aXAuc2V0Q29udGVudChcIjxzdHJvbmc+XCIgKyBuYW1lICsgXCI8L3N0cm9uZz5cIiArIFwiPGJyPlwiICsgbGVuZ3RoLmh0bWxWYWx1ZSk7XG4gICAgICAgIGxldCBmZWF0dXJlSWQgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUlkJyk7XG4gICAgICAgIGxldCBuZXdGZWF0dXJlID0ge307XG4gICAgICAgIG5ld0ZlYXR1cmUubGFiZWwgPSBuYW1lO1xuICAgICAgICBuZXdGZWF0dXJlLmlkID0gZmVhdHVyZUlkO1xuICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIG5ld0ZlYXR1cmUub2xGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgaWYgKGxlbmd0aCAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdjaXJjbGUnXG4gICAgICAgICAgJiYgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpICE9PSAncG9seWdvbicpIHtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzLmxpbmUgPSB7fTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10uZGVzY3JpcHRpb24gPSBcIkzDpG5nZTogXCI7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddLnZhbHVlID0gbGVuZ3RoLnJhd1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICByYWRpdXMgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJhZGl1czogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10udmFsdWUgPSByYWRpdXMucmF3VmFsdWU7XG4gICAgICAgICAgZmVhdHVyZVRvb2x0aXAuc2V0Q29udGVudChcIjxzdHJvbmc+XCIgKyBuYW1lICsgXCI8L3N0cm9uZz5cIiArIFwiPGJyPlwiXG4gICAgICAgICAgICArIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddLmRlc2NyaXB0aW9uICsgcmFkaXVzLmh0bWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ3BvbHlnb24nXG4gICAgICAgICAgfHwgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIGFyZWEgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXS52YWx1ZSA9IGFyZWEucmF3VmFsdWU7XG4gICAgICAgICAgZmVhdHVyZVRvb2x0aXAuc2V0Q29udGVudChcIjxzdHJvbmc+XCIgKyBuYW1lICsgXCI8L3N0cm9uZz5cIiArIFwiPGJyPlwiXG4gICAgICAgICAgICArIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXS5kZXNjcmlwdGlvbiArIGFyZWEuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlLnNldCgndG9vbHRpcCcsIGZlYXR1cmVUb29sdGlwKTtcbiAgICAgICAgc2NvcGUucHJvcHMubW9kaWZ5RmVhdHVyZShuZXdGZWF0dXJlLCBuZXdGZWF0dXJlLmlkKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcInVwZGF0ZU1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICBzY29wZS51cGRhdGVNZWFzdXJlRmVhdHVyZSA9IHVwZGF0ZU1lYXN1cmVGZWF0dXJlO1xuXG4gICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJlbW92ZUZlYXR1cmUoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVJZCcpKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcInJlbW92ZU1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICAvL1N0YXJ0IFdvcmthcm91bmRcbiAgICAgIGdldFZhbHVlT2ZHZW9tZXRyeSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBsZW5nID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgdHJ1ZSk7XG4gICAgICAgIC8vIGZlYXR1cmUuc2V0KCdtZWFzdXJlZExlbmd0aCcsIGxlbmd0aCk7XG4gICAgICAgIHZhciB2YWwgPSBsZW5nLmh0bWxWYWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlbnVtYiA9IHZhbC5tYXRjaCgvXFxkL2cpO1xuICAgICAgICB2YWx1ZW51bWIgPSB2YWx1ZW51bWIuam9pbihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlbnVtYjtcbiAgICAgIH07XG5cbiAgICAgIGdldExlbmd0aE9mTWVhc3VyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9ICcwLjAwIG0nO1xuICAgICAgICB2YXIgbGVuZ3RobnVtYiA9IGxlbmd0aC5tYXRjaCgvXFxkL2cpO1xuICAgICAgICBsZW5ndGhudW1iID0gbGVuZ3RobnVtYi5qb2luKFwiXCIpO1xuICAgICAgICBsZW5ndGhudW1iID0gKzg7XG4gICAgICAgIHJldHVybiBsZW5ndGhudW1iO1xuICAgICAgfTsvLyBFbmQgV29ya2Fyb3VuZFxuXG4gICAgICBpbnRlcmFjdGlvbi5vbignZHJhd3N0YXJ0JyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgYWN0aXZlU2tldGNoID0gZXZlbnQuZmVhdHVyZTtcbiAgICAgICAgICAvLyBjcmVhdGUgdG9vbHRpcFxuICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBuZXcgVG9vbHRpcFBvcFVwKHtcbiAgICAgICAgICAgIG1hcDogc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogZXZlbnQuY29vcmRpbmF0ZSxcbiAgICAgICAgICAgIG9mZnNldDogWzIsIC0yXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICBjbG9zZWFibGU6IHRydWUsXG4gICAgICAgICAgICBjbG9zZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vV29ya2Fyb3VuZCwgZm9yIHNtYWxsIG9yIHplcm8gdmFsdWVzIG9mIEZyZWVoYW5kXG4gICAgICAgICAgICAgIHZhciB2YWwgPSBnZXRWYWx1ZU9mR2VvbWV0cnkoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIHZhciBsZW5nID0gZ2V0TGVuZ3RoT2ZNZWFzdXJlKCk7XG4gICAgICAgICAgICAgIGlmICh2YWwgIT09IGxlbmcgJiYgdmFsID4gbGVuZykge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzRmVhdHVyZSAoZXZlbnQuZmVhdHVyZSkpIHtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgndG9vbHRpcCcsIGFjdGl2ZVRvb2x0aXApO1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ2dlb21ldHJ5VHlwZScsIHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5vbigncG9pbnRlcm1vdmUnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAuc2V0UG9zaXRpb24oZXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IG51bGw7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAgIGFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVhdHVyZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRW5hYmxlIGludGVyYWN0aW9uXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3BvaW50Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5maW5pc2hEcmF3aW5nKCk7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAvLyAwX29cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gbWFwXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7TWVhc3VyZXRvb2xzVmlld30gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJldG9vbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX01FQVNVUkVUT09MUztcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLW1lYXN1cmV0b29scy1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm1lYXN1cmV0b29scyA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5hZGRNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZSA9IHRoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkID0gdGhpcy5pbmNyZW1lbnRGZWF0dXJlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGVzID0gW1wic2VsZWN0XCIsIFwibGluZVwiLCBcInBvbHlnb25cIiwgXCJjaXJjbGVcIiwgXCJmcmVlaGFuZFwiXTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgbWVhc3VyZWRGZWF0dXJlczogW10sXG4gICAgICBmZWF0dXJlSWRDdHI6IDBcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYXJyVG9vbHRpcHMgPSB7XG4gICAgICBcInNlbGVjdFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU30gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgICAge3RoaXMubW9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmUtXCIgKyBlbGVtZW50ICsgXCIgXCIgKyAoZWxlbWVudCA9PT0gc2NvcGUuc3RhdGUuY3VycmVudE1vZGUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IGVsZW1lbnR9KX0gdGl0bGU9e2FyclRvb2x0aXBzW2VsZW1lbnRdfS8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJzZWxlY3RcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwic2VsZWN0XCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJsaW5lXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImxpbmVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcInBvbHlnb25cIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwicG9seWdvblwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wiY2lyY2xlXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImNpcmNsZVwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wiZnJlZWhhbmRcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwiZnJlZWhhbmRcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGluY3JlbWVudEZlYXR1cmVJZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlSWRDdHI6IHRoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyICsgMX0pO1xuICB9XG5cbiAgYWRkTWVhc3VyZWRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgbW9kaWZ5TWVhc3VyZWRGZWF0dXJlKG5ld0ZlYXR1cmUsIGlkKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZmVhdHVyZXNbaV0gPSBuZXdGZWF0dXJlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgcmVtb3ZlTWVhc3VyZWRGZWF0dXJlKGlkKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZmVhdHVyZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHNldEN1cnJlbnRNb2RlKG5ld01vZGUpIHtcbiAgICBpZiAodGhpcy5tb2Rlcy5pbmNsdWRlcyhuZXdNb2RlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IG5ld01vZGV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHNwZWNpZmllZCBtb2RlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVkIHdoZW4gdGhlIHBhbmVsIHdpbGwgYmUgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICogW2luaXQgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtib29sZWFufSAgUmV0dXJucyB8dHJ1ZXwgb24gc3VjY2Vzc1xuICAgKi9cbiAgaW5pdCgpIHtcbiAgICAvLyBBZGQgbWVhc3VyZSBsYXllcnNcbiAgICB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZVBvbHlnb25MYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuXG4gICAgdGhpcy5tZWFzdXJlTGF5ZXJHcm91cCA9IG5ldyBHcm91cCh7XG4gICAgICBsYXllcnM6IG5ldyBDb2xsZWN0aW9uKFtcbiAgICAgICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZVBvbHlnb25MYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlTGluZUxheWVyLFxuICAgICAgXSksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcblxuICAgIC8vIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZW5kIG9mIFwiaW5pdCgpXCJcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIC8vIG1lYXN1cmV0b29scyB3ZXJlIGNsb3NlZFxuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwcygpO1xuICAgICAgdGhpcy5yZW1vdmVkT25jZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghcHJldlN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGlmICh0aGlzLnJlbW92ZWRPbmNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFkZFRvb2x0aXBzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIk1lYXN1cmVkRmVhdHVyZSIsInByb3BzIiwiY2hhbmdlRmVhdHVyZUxhYmVsIiwiYmluZCIsInNjb3BlIiwiaWR4IiwibGFiZWwiLCJPYmplY3QiLCJrZXlzIiwibWVhc3VyZWRWYWx1ZXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJvYmoiLCJoclZhbHVlIiwiY29udmVydE1ldGVyc1RvS20iLCJ2YWx1ZSIsImNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kaWZ5RmVhdHVyZSIsImlkIiwiZGlzdGFuY2UiLCJrbVZhbHVlIiwiYXJlYSIsIkNvbXBvbmVudCIsIk1lYXN1cmV0b29sc1ZpZXciLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJoZWFkbGluZXMiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiZmVhdHVyZUlkQ3RyIiwiZmVhdHVyZUlkIiwidXBkYXRlRnVuY3Rpb25zIiwiY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucyIsImFjdGl2ZSIsIm1vZGUiLCJsYW5nIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiZmVhdHVyZXMiLCJmZWF0IiwiYXJyRmVhdHVyZXMiLCJpIiwibGVuZ3RoIiwib2xGZWF0dXJlIiwic2V0IiwidXBkYXRlTWVhc3VyZUZlYXR1cmUiLCJpbml0RnVuY3Rpb24iLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFjdGl2YXRlRnVuY3Rpb24iLCJkZWFjdGl2YXRlRnVuY3Rpb24iLCJtYXBIb3ZlciIsImRlYWN0aXZhdGUiLCJtZWFzdXJlVG9vbHMiLCJzdGF0ZSIsIm9wZW4iLCJhY3RpdmF0ZSIsInNvdXJjZSIsIm9sVHlwZSIsImludGVyYWN0aW9uIiwiZmVhdHVyZUlkQ291bnQiLCJhY3RpdmVTa2V0Y2giLCJhY3RpdmVUb29sdGlwIiwiYWRkTWVhc3VyZUZlYXR1cmUiLCJnZXRWYWx1ZU9mR2VvbWV0cnkiLCJnZXRMZW5ndGhPZk1lYXN1cmUiLCJyZW1vdmVNZWFzdXJlRmVhdHVyZSIsInRvTG93ZXJDYXNlIiwibWVhc3VyZUZyZWVoYW5kTGF5ZXIiLCJnZXRTb3VyY2UiLCJtZWFzdXJlQ2lyY2xlTGF5ZXIiLCJtZWFzdXJlUG9seWdvbkxheWVyIiwibWVhc3VyZUxpbmVMYXllciIsIkNvbGxlY3Rpb24iLCJEcmF3IiwidHlwZSIsImZyZWVoYW5kIiwiaW5wdXRFbGVtZW50Iiwic3RyTGFiZWwiLCJzdHJUeXBlIiwibWVhc3VyZUFyZWEiLCJtZWFzdXJlUmFkaXVzIiwibWVhc3VyZUxpbmUiLCJnZXRHZW9tZXRyeSIsImdldFR5cGUiLCJMRU5HVEgiLCJMSU5FIiwiUEVSSU1FVEVSIiwiUE9MWUdPTiIsIlJBRElVUyIsIkNJUkNMRSIsIkZSRUVIQU5EIiwibWVhc3VyZWRGZWF0dXJlIiwiYWRkRmVhdHVyZSIsImluY3JGZWF0SWQiLCJmZWF0dXJlVG9vbHRpcCIsIm5ld0NvbnRlbnQiLCJuYW1lIiwicmFkaXVzIiwiZ2V0IiwidXRpbHMiLCJtZWFzdXJlR2VvbWV0cnkiLCJyYXdWYWx1ZSIsInNldENvbnRlbnQiLCJodG1sVmFsdWUiLCJuZXdGZWF0dXJlIiwibGluZSIsInJlbW92ZUZlYXR1cmUiLCJsZW5nIiwidmFsIiwidmFsdWVudW1iIiwibWF0Y2giLCJqb2luIiwibGVuZ3RobnVtYiIsIm9uIiwiZXZlbnQiLCJUb29sdGlwUG9wVXAiLCJwb3NpdGlvbiIsImNvb3JkaW5hdGUiLCJvZmZzZXQiLCJob3Jpem9udGFsIiwiY2xvc2VhYmxlIiwiY2xvc2VGdW5jdGlvbiIsImhhc0ZlYXR1cmUiLCJzZXRQb3NpdGlvbiIsImNsZWFyIiwiYWRkSW50ZXJhY3Rpb24iLCJmaW5pc2hEcmF3aW5nIiwiaWdub3JlIiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk1lYXN1cmV0b29scyIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiY2xhc3NOYW1lIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsImhpZGRlbiIsIm1lYXN1cmV0b29sc0NvbnRhaW5lciIsImluY2x1ZGVzIiwiY2xvc2UiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsIm1lYXN1cmV0b29scyIsImFkZENvbnRyb2wiLCJhZGRNZWFzdXJlZEZlYXR1cmUiLCJtb2RpZnlNZWFzdXJlZEZlYXR1cmUiLCJyZW1vdmVNZWFzdXJlZEZlYXR1cmUiLCJpbmNyZW1lbnRGZWF0dXJlSWQiLCJtb2RlcyIsImN1cnJlbnRNb2RlIiwibWVhc3VyZWRGZWF0dXJlcyIsImluaXQiLCJhcnJUb29sdGlwcyIsIk1FQVNVUkVUT09MUyIsIkNMT1NFIiwic2V0U3RhdGUiLCJwdXNoIiwic3BsaWNlIiwibmV3TW9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2V0T3BlbkNvbXBvbmVudCIsIlZlY3RvciIsIlZlY3RvclNvdXJjZSIsIm1lYXN1cmVMYXllckdyb3VwIiwiR3JvdXAiLCJsYXllcnMiLCJ2aXNpYmxlIiwiYWRkTGF5ZXIiLCJyZW1vdmVMYXllciIsInJlbW92ZVRvb2x0aXBzIiwicmVtb3ZlZE9uY2UiLCJlIiwiYWRkVG9vbHRpcHMiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsImFyckxheWVycyIsImdldExheWVyc0FycmF5IiwibGF5ZXIiLCJnZXRGZWF0dXJlcyIsImoiLCJoaWRlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=