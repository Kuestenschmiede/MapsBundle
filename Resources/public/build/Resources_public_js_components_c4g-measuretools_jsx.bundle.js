(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-measuretools_jsx"],{

/***/ "./Resources/public/js/components/c4g-measuretools-feature.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools-feature.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

/***/ "./Resources/public/js/components/c4g-measuretools-view.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools-view.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "./Resources/public/js/components/c4g-measuretools-feature.jsx");

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
              horizontal: true,
              closeable: true,
              closeFunction: function closeFunction() {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();

                if (val !== leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  source.removeFeature(event.feature);
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

/***/ "./Resources/public/js/components/c4g-measuretools.jsx":
/*!*************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "./Resources/public/js/components/c4g-measuretools-view.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
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

exports.default = Measuretools;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtZmVhdHVyZS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIk9iamVjdCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsInZhbHVlIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJNZWFzdXJldG9vbHMiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwidGl0bGUiLCJDVFJMX01FQVNVUkVUT09MUyIsImNsYXNzTmFtZSIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJoaWRkZW4iLCJtZWFzdXJldG9vbHNDb250YWluZXIiLCJpbmNsdWRlcyIsImNsb3NlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJtZWFzdXJldG9vbHMiLCJhZGRDb250cm9sIiwiYWRkTWVhc3VyZWRGZWF0dXJlIiwibW9kaWZ5TWVhc3VyZWRGZWF0dXJlIiwicmVtb3ZlTWVhc3VyZWRGZWF0dXJlIiwiaW5jcmVtZW50RmVhdHVyZUlkIiwibW9kZXMiLCJjdXJyZW50TW9kZSIsIm1lYXN1cmVkRmVhdHVyZXMiLCJpbml0IiwiYXJyVG9vbHRpcHMiLCJNRUFTVVJFVE9PTFMiLCJDTE9TRSIsInNldFN0YXRlIiwicHVzaCIsInNwbGljZSIsIm5ld01vZGUiLCJjb25zb2xlIiwid2FybiIsInNldE9wZW5Db21wb25lbnQiLCJWZWN0b3IiLCJWZWN0b3JTb3VyY2UiLCJtZWFzdXJlTGF5ZXJHcm91cCIsIkdyb3VwIiwibGF5ZXJzIiwidmlzaWJsZSIsImFkZExheWVyIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZWRPbmNlIiwiZSIsImFkZFRvb2x0aXBzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnNBcnJheSIsImxheWVyIiwiZ2V0RmVhdHVyZXMiLCJqIiwiaGlkZSIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7SUFFYUEsZTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLGdEQUExQjtBQUhpQjtBQUlsQjs7OztXQUVELGtCQUFTO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSwwQkFDRSwwREFDRSwwREFDRTtBQUFPLGVBQU8sRUFBRSxvQkFBb0IsS0FBS0gsS0FBTCxDQUFXSTtBQUEvQyxrQkFERixlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFFLG9CQUFvQixLQUFLSixLQUFMLENBQVdJLEdBQXhEO0FBQTZELG9CQUFZLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxLQUF0RjtBQUNRLGVBQU8sRUFBRSxLQUFLSjtBQUR0QixRQUZGLENBREYsRUFNR0ssTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS1AsS0FBTCxDQUFXUSxjQUF2QixFQUF1Q0MsR0FBdkMsQ0FBMkMsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDbkUsWUFBSUMsR0FBRyxHQUFHVCxLQUFLLENBQUNILEtBQU4sQ0FBWVEsY0FBWixDQUEyQkUsT0FBM0Is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SUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O1dBRUQsdUJBQWM7QUFDWixVQUFJTCxTQUFTLEdBQUcsS0FBS2YsaUJBQUwsQ0FBdUJnQixjQUF2QixFQUFoQjs7QUFDQSxXQUFLLElBQUlySixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0osU0FBUyxDQUFDbkosTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsWUFBSXNKLEtBQUssR0FBR0YsU0FBUyxDQUFDcEosQ0FBRCxDQUFyQjtBQUNBLFlBQUlELFdBQVcsR0FBR3VKLEtBQUssQ0FBQ3pILFNBQU4sR0FBa0IwSCxXQUFsQixFQUFsQjs7QUFDQSxZQUFJeEosV0FBSixFQUFpQjtBQUNmLGVBQUssSUFBSXlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd6SixXQUFXLENBQUNFLE1BQWhDLEVBQXdDdUosQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxnQkFBSXZMLE9BQU8sR0FBRzhCLFdBQVcsQ0FBQ3lKLENBQUQsQ0FBekI7QUFDQXZMLG1CQUFPLENBQUMwRixHQUFSLENBQVksU0FBWixFQUF1QitGLElBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7OztFQXBPdUNqTCxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLW1lYXN1cmV0b29sc19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ3Rvb2x0aXAnLCBhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdnZW9tZXRyeVR5cGUnLCBzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAub24oJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBudWxsO1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gMF9vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG1hcFxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge01lYXN1cmV0b29sc1ZpZXd9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3hcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZXRvb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9NRUFTVVJFVE9PTFM7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5tZWFzdXJldG9vbHMgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkbGluZVwifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLVwiICsgZWxlbWVudCArIFwiIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9IHRpdGxlPXthcnJUb29sdGlwc1tlbGVtZW50XX0vPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wic2VsZWN0XCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInNlbGVjdFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wibGluZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJsaW5lXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJwb2x5Z29uXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInBvbHlnb25cIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImNpcmNsZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJjaXJjbGVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImZyZWVoYW5kXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImZyZWVoYW5kXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpbmNyZW1lbnRGZWF0dXJlSWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZUlkQ3RyOiB0aGlzLnN0YXRlLmZlYXR1cmVJZEN0ciArIDF9KTtcbiAgfVxuXG4gIGFkZE1lYXN1cmVkRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIG1vZGlmeU1lYXN1cmVkRmVhdHVyZShuZXdGZWF0dXJlLCBpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzW2ldID0gbmV3RmVhdHVyZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHJlbW92ZU1lYXN1cmVkRmVhdHVyZShpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBzZXRDdXJyZW50TW9kZShuZXdNb2RlKSB7XG4gICAgaWYgKHRoaXMubW9kZXMuaW5jbHVkZXMobmV3TW9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBuZXdNb2RlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzcGVjaWZpZWQgbW9kZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gQWRkIG1lYXN1cmUgbGF5ZXJzXG4gICAgdGhpcy5tZWFzdXJlTGluZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcblxuICAgIHRoaXMubWVhc3VyZUxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllcixcbiAgICAgIF0pLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAvLyB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAvLyBtZWFzdXJldG9vbHMgd2VyZSBjbG9zZWRcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlZE9uY2UgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAodGhpcy5yZW1vdmVkT25jZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hZGRUb29sdGlwcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=