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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctbWVhc3VyZXRvb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7RUFFWCx5QkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBRUEsTUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLGdEQUExQjtJQUhpQjtFQUlsQjs7OztXQUVELGtCQUFTO01BQ1AsSUFBTUMsS0FBSyxHQUFHLElBQWQ7TUFDQSxvQkFDRSwwREFDRSwwREFDRTtRQUFPLE9BQU8sRUFBRSxvQkFBb0IsS0FBS0gsS0FBTCxDQUFXSTtNQUEvQyxZQURGLGVBRUU7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixJQUFJLEVBQUUsb0JBQW9CLEtBQUtKLEtBQUwsQ0FBV0ksR0FBeEQ7UUFBNkQsWUFBWSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ssS0FBdEY7UUFDUSxPQUFPLEVBQUUsS0FBS0o7TUFEdEIsRUFGRixDQURGLEVBTUdLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtQLEtBQUwsQ0FBV1EsY0FBdkIsRUFBdUNDLEdBQXZDLENBQTJDLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO1FBQ25FLElBQUlDLEdBQUcsR0FBR1QsS0FBSyxDQUFDSCxLQUFOLENBQVlRLGNBQVosQ0FBMkJFLE9BQTNCLENBQVY7UUFDQSxJQUFJRyxPQUFPLEdBQUcsR0FBZDs7UUFDQSxRQUFRSCxPQUFSO1VBQ0UsS0FBSyxNQUFMO1VBQ0EsS0FBSyxRQUFMO1lBQ0VHLE9BQU8sR0FBR1YsS0FBSyxDQUFDVyxpQkFBTixDQUF3QkYsR0FBRyxDQUFDRyxLQUE1QixDQUFWO1lBQ0E7O1VBQ0YsS0FBSyxNQUFMO1lBQ0VGLE9BQU8sR0FBR1YsS0FBSyxDQUFDYSw2QkFBTixDQUFvQ0os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QUFXLEdBQUd5SixLQUFLLENBQUMzSCxTQUFOLEdBQWtCNEgsV0FBbEIsRUFBbEI7O1FBQ0EsSUFBSTFKLFdBQUosRUFBaUI7VUFDZixLQUFLLElBQUkySixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHM0osV0FBVyxDQUFDRSxNQUFoQyxFQUF3Q3lKLENBQUMsRUFBekMsRUFBNkM7WUFDM0MsSUFBSTFMLE9BQU8sR0FBRytCLFdBQVcsQ0FBQzJKLENBQUQsQ0FBekI7WUFDQTFMLE9BQU8sQ0FBQzJGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCaUcsSUFBdkI7VUFDRDtRQUNGO01BQ0Y7SUFDRjs7O0VBcE91Q3BMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIE1lYXN1cmVkRmVhdHVyZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbCA9IHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9Pk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17XCJtZWFzdXJlRWxlbWVudF9cIiArIHRoaXMucHJvcHMuaWR4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubWVhc3VyZWRWYWx1ZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBvYmogPSBzY29wZS5wcm9wcy5tZWFzdXJlZFZhbHVlc1tlbGVtZW50XTtcbiAgICAgICAgICBsZXQgaHJWYWx1ZSA9IDAuMDtcbiAgICAgICAgICBzd2l0Y2ggKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgICBjYXNlIFwicmFkaXVzXCI6XG4gICAgICAgICAgICAgIGhyVmFsdWUgPSBzY29wZS5jb252ZXJ0TWV0ZXJzVG9LbShvYmoudmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhcmVhXCI6XG4gICAgICAgICAgICAgIGhyVmFsdWUgPSBzY29wZS5jb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShvYmoudmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICg8cCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxzdHJvbmc+e29iai5kZXNjcmlwdGlvbn08L3N0cm9uZz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZS12YWx1ZS1cIiArIHNjb3BlLnByb3BzLmlkeH0+e2hyVmFsdWV9PC9zcGFuPlxuICAgICAgICAgIDwvcD4pXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZUZlYXR1cmVMYWJlbCgpIHtcbiAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMuZmVhdHVyZTtcbiAgICBmZWF0dXJlLmxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm1lYXN1cmVFbGVtZW50XycgKyB0aGlzLnByb3BzLmlkeCArICdcIl0nKS52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgZmVhdHVyZS5pZCk7XG4gIH1cblxuICBjb252ZXJ0TWV0ZXJzVG9LbShkaXN0YW5jZSkge1xuICAgIGxldCBrbVZhbHVlID0gZGlzdGFuY2UgLyAxMDAwO1xuICAgIGlmIChrbVZhbHVlID4gMCkge1xuICAgICAgcmV0dXJuIGttVmFsdWUgKyBcIiBrbVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGlzdGFuY2UgKyBcIiBtXCI7XG4gICAgfVxuICB9XG5cbiAgY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20oYXJlYSkge1xuICAgIGxldCBrbVZhbHVlID0gYXJlYSAvIDEwMDAwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttwrJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyZWEgKyBcIiBtwrJcIjtcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtEcmF3fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtUb29sdGlwUG9wVXB9IGZyb20gXCIuLi9jNGctbWFwcy1taXNjLXRvb2x0aXBwb3B1cFwiO1xuaW1wb3J0IHtNZWFzdXJlZEZlYXR1cmV9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtZmVhdHVyZS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIE1lYXN1cmV0b29sc1ZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmhlYWRsaW5lcyA9IHtcbiAgICAgIFwic2VsZWN0XCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OLFxuICAgICAgXCJjaXJjbGVcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCxcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gICAgdGhpcy51cGRhdGVGdW5jdGlvbnMgPSB0aGlzLmNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMoKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT308L3A+XG4gICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICA8c3ViPnt0aGlzLnByb3BzLmxhbmcuTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTH08L3N1Yj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1lYXN1cmUgdmlld1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtY29udGVudFwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRlbnRIZWFkbGluZVwifT57dGhpcy5oZWFkbGluZXNbdGhpcy5wcm9wcy5tb2RlXX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmZlYXR1cmVzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdCA9IHNjb3BlLnByb3BzLmZlYXR1cmVzW2VsZW1lbnRdO1xuICAgICAgICAgICAgICAgIHJldHVybiAoPE1lYXN1cmVkRmVhdHVyZSBrZXk9e2luZGV4fSBpZHg9e2luZGV4fSBsYWJlbD17ZmVhdC5sYWJlbH0gZmVhdHVyZT17ZmVhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZWRWYWx1ZXM9e2ZlYXQubWVhc3VyZWRWYWx1ZXN9IG1vZGlmeUZlYXR1cmU9e3Njb3BlLm1vZGlmeUZlYXR1cmV9Lz4pO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3QgYWN0aXZlXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIG1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgaWQpIHtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSB0aGlzLnByb3BzLmZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJGZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgYXJyRmVhdHVyZXNbaV0ub2xGZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgZmVhdHVyZS5sYWJlbCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWVhc3VyZUZlYXR1cmUoYXJyRmVhdHVyZXNbaV0ub2xGZWF0dXJlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5pbml0RnVuY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIikge1xuICAgICAgaWYgKCFwcmV2UHJvcHMuYWN0aXZlICYmIHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmFjdGl2YXRlRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlICYmICF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXBIb3Zlci5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIgfHwgIXRoaXMucHJvcHMubWVhc3VyZVRvb2xzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXBIb3Zlci5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLmZlYXR1cmVJZEN0ciA9IHRoaXMucHJvcHMuZmVhdHVyZUlkO1xuICB9XG5cbiAgY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpIHtcbiAgICBsZXQgc291cmNlLCBmZWF0dXJlcywgb2xUeXBlLCBpbnRlcmFjdGlvbjtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZlYXR1cmVJZENvdW50LFxuICAgICAgICBhY3RpdmVTa2V0Y2gsXG4gICAgICAgIGFjdGl2ZVRvb2x0aXAsXG4gICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlLFxuICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZSxcbiAgICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5LFxuICAgICAgICBnZXRMZW5ndGhPZk1lYXN1cmUsXG4gICAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlO1xuXG4gICAgICBmZWF0dXJlSWRDb3VudCA9IHNjb3BlLmZlYXR1cmVJZEN0cjtcblxuICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZyZWVoYW5kJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUZyZWVoYW5kTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVDaXJjbGVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAncG9seWdvbicpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVQb2x5Z29uTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUxpbmVMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH1cblxuICAgICAgZmVhdHVyZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xuICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoc2NvcGUucHJvcHMubW9kZSkge1xuICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiTGluZVN0cmluZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicG9seWdvblwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiUG9seWdvblwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJDaXJjbGVcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImZyZWVoYW5kXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGludGVyYWN0aW9uID0gbmV3IERyYXcoe1xuICAgICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICB0eXBlOiBvbFR5cGUsXG4gICAgICAgIGZyZWVoYW5kOiBzY29wZS5wcm9wcy5tb2RlID09PSAnZnJlZWhhbmQnLFxuICAgICAgICAvLyBAVE9ETzogdXNlIGN1c3RvbSBzdHlsZT8gKEJFLW9wdGlvbilcbiAgICAgICAgLy8gc3R5bGU6IHVzZSBkZWZhdWx0IHN0eWxlXG4gICAgICB9KTtcblxuICAgICAgYWRkTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgaW5wdXRFbGVtZW50LFxuICAgICAgICAgIHN0ckxhYmVsLFxuICAgICAgICAgIHN0clR5cGUsXG4gICAgICAgICAgbWVhc3VyZUFyZWEsXG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyxcbiAgICAgICAgICBtZWFzdXJlTGluZTtcblxuICAgICAgICBpZiAoIWZlYXR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBmZWF0dXJlLXR5cGVcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdMaW5lU3RyaW5nJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuTElORTtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ1BvbHlnb24nKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlBFUklNRVRFUjtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5QT0xZR09OO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gdHJ1ZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnQ2lyY2xlJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5SQURJVVM7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuQ0lSQ0xFO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gdHJ1ZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gdHJ1ZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vZnJlZWhhbmQgaXMgTGluZVN0cmluZyB0b29cbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuTEVOR1RIO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkZSRUVIQU5EO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZlYXR1cmUuc2V0KCdsaXN0RWxlbWVudFZhbHVlTmFtZScsIGlucHV0RWxlbWVudCk7XG4gICAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUlkJywgZmVhdHVyZUlkQ291bnQpO1xuICAgICAgICBsZXQgbWVhc3VyZWRGZWF0dXJlID0ge307XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5pZCA9IGZlYXR1cmVJZENvdW50O1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUubGFiZWwgPSBzdHJUeXBlICsgXCIgXCIgKyBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ2ZlYXR1cmVMYWJlbCcsIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCk7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlcyA9IHt9O1xuICAgICAgICBpZiAobWVhc3VyZUxpbmUpIHtcbiAgICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkzDpG5nZTogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lYXN1cmVSYWRpdXMpIHtcbiAgICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZUFyZWEpIHtcbiAgICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZsw6RjaGVuaW5oYWx0OiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtZWFzdXJlZEZlYXR1cmUub2xGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgc2NvcGUucHJvcHMuYWRkRmVhdHVyZShtZWFzdXJlZEZlYXR1cmUpO1xuICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaWQtY291bnRlclxuICAgICAgICBzY29wZS5wcm9wcy5pbmNyRmVhdElkKCk7XG4gICAgICAgIC8vIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwiYWRkTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGZlYXR1cmVUb29sdGlwLFxuICAgICAgICAgIG5ld0NvbnRlbnQsXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgYXJlYSxcbiAgICAgICAgICByYWRpdXM7XG5cbiAgICAgICAgZmVhdHVyZVRvb2x0aXAgPSBmZWF0dXJlLmdldCgndG9vbHRpcCcpO1xuICAgICAgICBuYW1lID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVMYWJlbCcpO1xuICAgICAgICBsZW5ndGggPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoLnJhd1ZhbHVlKTtcbiAgICAgICAgZmVhdHVyZVRvb2x0aXAuc2V0Q29udGVudChcIjxzdHJvbmc+XCIgKyBuYW1lICsgXCI8L3N0cm9uZz5cIiArIFwiPGJyPlwiICsgbGVuZ3RoLmh0bWxWYWx1ZSk7XG4gICAgICAgIGxldCBmZWF0dXJlSWQgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUlkJyk7XG4gICAgICAgIGxldCBuZXdGZWF0dXJlID0ge307XG4gICAgICAgIG5ld0ZlYXR1cmUubGFiZWwgPSBuYW1lO1xuICAgICAgICBuZXdGZWF0dXJlLmlkID0gZmVhdHVyZUlkO1xuICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIG5ld0ZlYXR1cmUub2xGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgaWYgKGxlbmd0aCAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdjaXJjbGUnXG4gICAgICAgICAgJiYgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpICE9PSAncG9seWdvbicpIHtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzLmxpbmUgPSB7fTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10uZGVzY3JpcHRpb24gPSBcIkzDpG5nZTogXCI7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddLnZhbHVlID0gbGVuZ3RoLnJhd1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICByYWRpdXMgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJhZGl1czogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10udmFsdWUgPSByYWRpdXMucmF3VmFsdWU7XG4gICAgICAgICAgZmVhdHVyZVRvb2x0aXAuc2V0Q29udGVudChcIjxzdHJvbmc+XCIgKyBuYW1lICsgXCI8L3N0cm9uZz5cIiArIFwiPGJyPlwiXG4gICAgICAgICAgICArIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddLmRlc2NyaXB0aW9uICsgcmFkaXVzLmh0bWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ3BvbHlnb24nXG4gICAgICAgICAgfHwgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIGFyZWEgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXS52YWx1ZSA9IGFyZWEucmF3VmFsdWU7XG4gICAgICAgICAgZmVhdHVyZVRvb2x0aXAuc2V0Q29udGVudChcIjxzdHJvbmc+XCIgKyBuYW1lICsgXCI8L3N0cm9uZz5cIiArIFwiPGJyPlwiXG4gICAgICAgICAgICArIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXS5kZXNjcmlwdGlvbiArIGFyZWEuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBmZWF0dXJlLnNldCgndG9vbHRpcCcsIGZlYXR1cmVUb29sdGlwKTtcbiAgICAgICAgc2NvcGUucHJvcHMubW9kaWZ5RmVhdHVyZShuZXdGZWF0dXJlLCBuZXdGZWF0dXJlLmlkKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcInVwZGF0ZU1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICBzY29wZS51cGRhdGVNZWFzdXJlRmVhdHVyZSA9IHVwZGF0ZU1lYXN1cmVGZWF0dXJlO1xuXG4gICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJlbW92ZUZlYXR1cmUoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVJZCcpKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcInJlbW92ZU1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICAvL1N0YXJ0IFdvcmthcm91bmRcbiAgICAgIGdldFZhbHVlT2ZHZW9tZXRyeSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBsZW5nID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgdHJ1ZSk7XG4gICAgICAgIC8vIGZlYXR1cmUuc2V0KCdtZWFzdXJlZExlbmd0aCcsIGxlbmd0aCk7XG4gICAgICAgIHZhciB2YWwgPSBsZW5nLmh0bWxWYWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlbnVtYiA9IHZhbC5tYXRjaCgvXFxkL2cpO1xuICAgICAgICB2YWx1ZW51bWIgPSB2YWx1ZW51bWIuam9pbihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlbnVtYjtcbiAgICAgIH07XG5cbiAgICAgIGdldExlbmd0aE9mTWVhc3VyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9ICcwLjAwIG0nO1xuICAgICAgICB2YXIgbGVuZ3RobnVtYiA9IGxlbmd0aC5tYXRjaCgvXFxkL2cpO1xuICAgICAgICBsZW5ndGhudW1iID0gbGVuZ3RobnVtYi5qb2luKFwiXCIpO1xuICAgICAgICBsZW5ndGhudW1iID0gKzg7XG4gICAgICAgIHJldHVybiBsZW5ndGhudW1iO1xuICAgICAgfTsvLyBFbmQgV29ya2Fyb3VuZFxuXG4gICAgICBpbnRlcmFjdGlvbi5vbignZHJhd3N0YXJ0JyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgYWN0aXZlU2tldGNoID0gZXZlbnQuZmVhdHVyZTtcbiAgICAgICAgICAvLyBjcmVhdGUgdG9vbHRpcFxuICAgICAgICAgIGFjdGl2ZVRvb2x0aXAgPSBuZXcgVG9vbHRpcFBvcFVwKHtcbiAgICAgICAgICAgIG1hcDogc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogZXZlbnQuY29vcmRpbmF0ZSxcbiAgICAgICAgICAgIG9mZnNldDogWzIsIC0yXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICBjbG9zZWFibGU6IHRydWUsXG4gICAgICAgICAgICBjbG9zZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vV29ya2Fyb3VuZCwgZm9yIHNtYWxsIG9yIHplcm8gdmFsdWVzIG9mIEZyZWVoYW5kXG4gICAgICAgICAgICAgIHZhciB2YWwgPSBnZXRWYWx1ZU9mR2VvbWV0cnkoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIHZhciBsZW5nID0gZ2V0TGVuZ3RoT2ZNZWFzdXJlKCk7XG4gICAgICAgICAgICAgIGlmICh2YWwgIT09IGxlbmcgJiYgdmFsID4gbGVuZykge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzRmVhdHVyZSAoZXZlbnQuZmVhdHVyZSkpIHtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgndG9vbHRpcCcsIGFjdGl2ZVRvb2x0aXApO1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ2dlb21ldHJ5VHlwZScsIHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5vbigncG9pbnRlcm1vdmUnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAuc2V0UG9zaXRpb24oZXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IG51bGw7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAgIGFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVhdHVyZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRW5hYmxlIGludGVyYWN0aW9uXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3BvaW50Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5maW5pc2hEcmF3aW5nKCk7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAvLyAwX29cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gbWFwXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7TWVhc3VyZXRvb2xzVmlld30gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJldG9vbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX01FQVNVUkVUT09MUztcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLW1lYXN1cmV0b29scy1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm1lYXN1cmV0b29scyA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5hZGRNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZSA9IHRoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkID0gdGhpcy5pbmNyZW1lbnRGZWF0dXJlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGVzID0gW1wic2VsZWN0XCIsIFwibGluZVwiLCBcInBvbHlnb25cIiwgXCJjaXJjbGVcIiwgXCJmcmVlaGFuZFwiXTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgbWVhc3VyZWRGZWF0dXJlczogW10sXG4gICAgICBmZWF0dXJlSWRDdHI6IDBcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYXJyVG9vbHRpcHMgPSB7XG4gICAgICBcInNlbGVjdFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU30gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgICAge3RoaXMubW9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmUtXCIgKyBlbGVtZW50ICsgXCIgXCIgKyAoZWxlbWVudCA9PT0gc2NvcGUuc3RhdGUuY3VycmVudE1vZGUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IGVsZW1lbnR9KX0gdGl0bGU9e2FyclRvb2x0aXBzW2VsZW1lbnRdfS8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJzZWxlY3RcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwic2VsZWN0XCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJsaW5lXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImxpbmVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcInBvbHlnb25cIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwicG9seWdvblwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wiY2lyY2xlXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImNpcmNsZVwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wiZnJlZWhhbmRcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwiZnJlZWhhbmRcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGluY3JlbWVudEZlYXR1cmVJZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlSWRDdHI6IHRoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyICsgMX0pO1xuICB9XG5cbiAgYWRkTWVhc3VyZWRGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgbW9kaWZ5TWVhc3VyZWRGZWF0dXJlKG5ld0ZlYXR1cmUsIGlkKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZmVhdHVyZXNbaV0gPSBuZXdGZWF0dXJlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgcmVtb3ZlTWVhc3VyZWRGZWF0dXJlKGlkKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmZWF0dXJlc1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgZmVhdHVyZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHNldEN1cnJlbnRNb2RlKG5ld01vZGUpIHtcbiAgICBpZiAodGhpcy5tb2Rlcy5pbmNsdWRlcyhuZXdNb2RlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IG5ld01vZGV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHNwZWNpZmllZCBtb2RlIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVkIHdoZW4gdGhlIHBhbmVsIHdpbGwgYmUgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICogW2luaXQgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtib29sZWFufSAgUmV0dXJucyB8dHJ1ZXwgb24gc3VjY2Vzc1xuICAgKi9cbiAgaW5pdCgpIHtcbiAgICAvLyBBZGQgbWVhc3VyZSBsYXllcnNcbiAgICB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZVBvbHlnb25MYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuXG4gICAgdGhpcy5tZWFzdXJlTGF5ZXJHcm91cCA9IG5ldyBHcm91cCh7XG4gICAgICBsYXllcnM6IG5ldyBDb2xsZWN0aW9uKFtcbiAgICAgICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlQ2lyY2xlTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZVBvbHlnb25MYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlTGluZUxheWVyLFxuICAgICAgXSksXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcblxuICAgIC8vIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZW5kIG9mIFwiaW5pdCgpXCJcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIC8vIG1lYXN1cmV0b29scyB3ZXJlIGNsb3NlZFxuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwcygpO1xuICAgICAgdGhpcy5yZW1vdmVkT25jZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghcHJldlN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGlmICh0aGlzLnJlbW92ZWRPbmNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFkZFRvb2x0aXBzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIk1lYXN1cmVkRmVhdHVyZSIsInByb3BzIiwiY2hhbmdlRmVhdHVyZUxhYmVsIiwiYmluZCIsInNjb3BlIiwiaWR4IiwibGFiZWwiLCJPYmplY3QiLCJrZXlzIiwibWVhc3VyZWRWYWx1ZXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJvYmoiLCJoclZhbHVlIiwiY29udmVydE1ldGVyc1RvS20iLCJ2YWx1ZSIsImNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kaWZ5RmVhdHVyZSIsImlkIiwiZGlzdGFuY2UiLCJrbVZhbHVlIiwiYXJlYSIsIkNvbXBvbmVudCIsIk1lYXN1cmV0b29sc1ZpZXciLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsIm9mZnNldCIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwiaGFzRmVhdHVyZSIsInNldFBvc2l0aW9uIiwiY2xlYXIiLCJhZGRJbnRlcmFjdGlvbiIsImZpbmlzaERyYXdpbmciLCJpZ25vcmUiLCJyZW1vdmVJbnRlcmFjdGlvbiIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiTWVhc3VyZXRvb2xzIiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJjbGFzc05hbWUiLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiaGlkZGVuIiwibWVhc3VyZXRvb2xzQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWVhc3VyZXRvb2xzIiwiYWRkQ29udHJvbCIsImFkZE1lYXN1cmVkRmVhdHVyZSIsIm1vZGlmeU1lYXN1cmVkRmVhdHVyZSIsInJlbW92ZU1lYXN1cmVkRmVhdHVyZSIsImluY3JlbWVudEZlYXR1cmVJZCIsIm1vZGVzIiwiY3VycmVudE1vZGUiLCJtZWFzdXJlZEZlYXR1cmVzIiwiaW5pdCIsImFyclRvb2x0aXBzIiwiTUVBU1VSRVRPT0xTIiwiQ0xPU0UiLCJzZXRTdGF0ZSIsInB1c2giLCJzcGxpY2UiLCJuZXdNb2RlIiwiY29uc29sZSIsIndhcm4iLCJzZXRPcGVuQ29tcG9uZW50IiwiVmVjdG9yIiwiVmVjdG9yU291cmNlIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsInZpc2libGUiLCJhZGRMYXllciIsInJlbW92ZUxheWVyIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVkT25jZSIsImUiLCJhZGRUb29sdGlwcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzQXJyYXkiLCJsYXllciIsImdldEZlYXR1cmVzIiwiaiIsImhpZGUiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==