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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

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
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-measuretools-header",
        headerClass: "c4g-measuretools-headline",
        hideContainer: ".c4g-measuretools-container",
        header: this.langConstants.MEASURETOOLS,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), /*#__PURE__*/_react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtZmVhdHVyZS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIk9iamVjdCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsInZhbHVlIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiTWVhc3VyZXRvb2xzIiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJjbGFzc05hbWUiLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiaGlkZGVuIiwibWVhc3VyZXRvb2xzQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWVhc3VyZXRvb2xzIiwiYWRkQ29udHJvbCIsImFkZE1lYXN1cmVkRmVhdHVyZSIsIm1vZGlmeU1lYXN1cmVkRmVhdHVyZSIsInJlbW92ZU1lYXN1cmVkRmVhdHVyZSIsImluY3JlbWVudEZlYXR1cmVJZCIsIm1vZGVzIiwiY3VycmVudE1vZGUiLCJtZWFzdXJlZEZlYXR1cmVzIiwiaW5pdCIsImFyclRvb2x0aXBzIiwiTUVBU1VSRVRPT0xTIiwiQ0xPU0UiLCJzZXRTdGF0ZSIsInB1c2giLCJzcGxpY2UiLCJuZXdNb2RlIiwiY29uc29sZSIsIndhcm4iLCJzZXRPcGVuQ29tcG9uZW50IiwiVmVjdG9yIiwiVmVjdG9yU291cmNlIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsInZpc2libGUiLCJhZGRMYXllciIsInJlbW92ZUxheWVyIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVkT25jZSIsImUiLCJhZGRUb29sdGlwcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzQXJyYXkiLCJsYXllciIsImdldEZlYXR1cmVzIiwiaiIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0lBRWFBLGU7Ozs7O0FBRVgsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixnREFBMUI7QUFIaUI7QUFJbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsMEJBQ0UsMERBQ0UsMERBQ0U7QUFBTyxlQUFPLEVBQUUsb0JBQW9CLEtBQUtILEtBQUwsQ0FBV0k7QUFBL0Msa0JBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBRSxvQkFBb0IsS0FBS0osS0FBTCxDQUFXSSxHQUF4RDtBQUE2RCxvQkFBWSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ssS0FBdEY7QUFDUSxlQUFPLEVBQUUsS0FBS0o7QUFEdEIsUUFGRixDQURGLEVBTUdLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtQLEtBQUwsQ0FBV1EsY0FBdkIsRUFBdUNDLEdBQXZDLENBQTJDLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ25FLFlBQUlDLEdBQUcsR0FBR1QsS0FBSyxDQUFDSCxLQUFOLENBQVlRLGNBQVosQ0FBMkJFLE9BQTNCLENBQVY7QUFDQSxZQUFJRyxPQUFPLEdBQUcs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LEdBQUdpSixTQUFTLENBQUNoSixNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxZQUFJbUosS0FBSyxHQUFHRixTQUFTLENBQUNqSixDQUFELENBQXJCO0FBQ0EsWUFBSUQsV0FBVyxHQUFHb0osS0FBSyxDQUFDdEgsU0FBTixHQUFrQnVILFdBQWxCLEVBQWxCOztBQUNBLFlBQUlySixXQUFKLEVBQWlCO0FBQ2YsZUFBSyxJQUFJc0osQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3RKLFdBQVcsQ0FBQ0UsTUFBaEMsRUFBd0NvSixDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLGdCQUFJcEwsT0FBTyxHQUFHOEIsV0FBVyxDQUFDc0osQ0FBRCxDQUF6QjtBQUNBcEwsbUJBQU8sQ0FBQzBGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCNEYsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O0VBbE91QzlLLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctbWVhc3VyZXRvb2xzX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBNZWFzdXJlZEZlYXR1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwgPSB0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJtZWFzdXJlRWxlbWVudF9cIiArIHRoaXMucHJvcHMuaWR4fT5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm1lYXN1cmVkVmFsdWVzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgb2JqID0gc2NvcGUucHJvcHMubWVhc3VyZWRWYWx1ZXNbZWxlbWVudF07XG4gICAgICAgICAgbGV0IGhyVmFsdWUgPSAwLjA7XG4gICAgICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgICAgY2FzZSBcInJhZGl1c1wiOlxuICAgICAgICAgICAgICBoclZhbHVlID0gc2NvcGUuY29udmVydE1ldGVyc1RvS20ob2JqLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYXJlYVwiOlxuICAgICAgICAgICAgICBoclZhbHVlID0gc2NvcGUuY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20ob2JqLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoPHAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8c3Ryb25nPntvYmouZGVzY3JpcHRpb259PC9zdHJvbmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmUtdmFsdWUtXCIgKyBzY29wZS5wcm9wcy5pZHh9PntoclZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+KVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VGZWF0dXJlTGFiZWwoKSB7XG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLmZlYXR1cmU7XG4gICAgZmVhdHVyZS5sYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJtZWFzdXJlRWxlbWVudF8nICsgdGhpcy5wcm9wcy5pZHggKyAnXCJdJykudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGZlYXR1cmUuaWQpO1xuICB9XG5cbiAgY29udmVydE1ldGVyc1RvS20oZGlzdGFuY2UpIHtcbiAgICBsZXQga21WYWx1ZSA9IGRpc3RhbmNlIC8gMTAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga21cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRpc3RhbmNlICsgXCIgbVwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKGFyZWEpIHtcbiAgICBsZXQga21WYWx1ZSA9IGFyZWEgLyAxMDAwMDAwO1xuICAgIGlmIChrbVZhbHVlID4gMCkge1xuICAgICAgcmV0dXJuIGttVmFsdWUgKyBcIiBrbcKyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcmVhICsgXCIgbcKyXCI7XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7VG9vbHRpcFBvcFVwfSBmcm9tIFwiLi4vYzRnLW1hcHMtbWlzYy10b29sdGlwcG9wdXBcIjtcbmltcG9ydCB7TWVhc3VyZWRGZWF0dXJlfSBmcm9tIFwiLi9jNGctbWVhc3VyZXRvb2xzLWZlYXR1cmUuanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBNZWFzdXJldG9vbHNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5oZWFkbGluZXMgPSB7XG4gICAgICBcInNlbGVjdFwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkcsXG4gICAgICBcInBvbHlnb25cIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQsXG4gICAgfTtcbiAgICB0aGlzLmZlYXR1cmVJZEN0ciA9IHRoaXMucHJvcHMuZmVhdHVyZUlkO1xuICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zID0gdGhpcy5jcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCk7XG4gICAgdGhpcy5tb2RpZnlGZWF0dXJlID0gdGhpcy5tb2RpZnlGZWF0dXJlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtY29udGVudFwifT5cbiAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmxhbmcuTUVBU1VSRVRPT0xTX0lORk99PC9wPlxuICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgPHN1Yj57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUx9PC9zdWI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtZWFzdXJlIHZpZXdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250ZW50SGVhZGxpbmVcIn0+e3RoaXMuaGVhZGxpbmVzW3RoaXMucHJvcHMubW9kZV19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5mZWF0dXJlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXQgPSBzY29wZS5wcm9wcy5mZWF0dXJlc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxNZWFzdXJlZEZlYXR1cmUga2V5PXtpbmRleH0gaWR4PXtpbmRleH0gbGFiZWw9e2ZlYXQubGFiZWx9IGZlYXR1cmU9e2ZlYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVkVmFsdWVzPXtmZWF0Lm1lYXN1cmVkVmFsdWVzfSBtb2RpZnlGZWF0dXJlPXtzY29wZS5tb2RpZnlGZWF0dXJlfS8+KTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm90IGFjdGl2ZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICBtb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKSB7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gdGhpcy5wcm9wcy5mZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyRmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGFyckZlYXR1cmVzW2ldLm9sRmVhdHVyZS5zZXQoJ2ZlYXR1cmVMYWJlbCcsIGZlYXR1cmUubGFiZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFyckZlYXR1cmVzW2ldLm9sRmVhdHVyZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgaWQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIikge1xuICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuaW5pdEZ1bmN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIGlmICghcHJldlByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5hY3RpdmF0ZUZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAocHJldlByb3BzLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuZGVhY3RpdmF0ZUZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiIHx8ICF0aGlzLnByb3BzLm1lYXN1cmVUb29scy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgfVxuXG4gIGNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMoKSB7XG4gICAgbGV0IHNvdXJjZSwgZmVhdHVyZXMsIG9sVHlwZSwgaW50ZXJhY3Rpb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBpbml0RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmZWF0dXJlSWRDb3VudCxcbiAgICAgICAgYWN0aXZlU2tldGNoLFxuICAgICAgICBhY3RpdmVUb29sdGlwLFxuICAgICAgICBhZGRNZWFzdXJlRmVhdHVyZSxcbiAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIGdldFZhbHVlT2ZHZW9tZXRyeSxcbiAgICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlLFxuICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZTtcblxuICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG5cbiAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdmcmVlaGFuZCcpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlQ2lyY2xlTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlUG9seWdvbkxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVMaW5lTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVzID0gbmV3IENvbGxlY3Rpb24oKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNjb3BlLnByb3BzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIlBvbHlnb25cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiQ2lyY2xlXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmcmVlaGFuZFwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiTGluZVN0cmluZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbnRlcmFjdGlvbiA9IG5ldyBEcmF3KHtcbiAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgdHlwZTogb2xUeXBlLFxuICAgICAgICBmcmVlaGFuZDogc2NvcGUucHJvcHMubW9kZSA9PT0gJ2ZyZWVoYW5kJyxcbiAgICAgICAgLy8gQFRPRE86IHVzZSBjdXN0b20gc3R5bGU/IChCRS1vcHRpb24pXG4gICAgICAgIC8vIHN0eWxlOiB1c2UgZGVmYXVsdCBzdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIGFkZE1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGlucHV0RWxlbWVudCxcbiAgICAgICAgICBzdHJMYWJlbCxcbiAgICAgICAgICBzdHJUeXBlLFxuICAgICAgICAgIG1lYXN1cmVBcmVhLFxuICAgICAgICAgIG1lYXN1cmVSYWRpdXMsXG4gICAgICAgICAgbWVhc3VyZUxpbmU7XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZmVhdHVyZS10eXBlXG4gICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnTGluZVN0cmluZycpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuTEVOR1RIO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkxJTkU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdQb2x5Z29uJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5QRVJJTUVURVI7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuUE9MWUdPTjtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0NpcmNsZScpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUkFESVVTO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkNJUkNMRTtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2ZyZWVoYW5kIGlzIExpbmVTdHJpbmcgdG9vXG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5GUkVFSEFORDtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmZWF0dXJlLnNldCgnbGlzdEVsZW1lbnRWYWx1ZU5hbWUnLCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICBmZWF0dXJlSWRDb3VudCA9IHNjb3BlLmZlYXR1cmVJZEN0cjtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ2ZlYXR1cmVJZCcsIGZlYXR1cmVJZENvdW50KTtcbiAgICAgICAgbGV0IG1lYXN1cmVkRmVhdHVyZSA9IHt9O1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUuaWQgPSBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmxhYmVsID0gc3RyVHlwZSArIFwiIFwiICsgZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBtZWFzdXJlZEZlYXR1cmUubGFiZWwpO1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKG1lYXN1cmVMaW5lKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMw6RuZ2U6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlUmFkaXVzKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJhZGl1czogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lYXN1cmVBcmVhKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm9sRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIHNjb3BlLnByb3BzLmFkZEZlYXR1cmUobWVhc3VyZWRGZWF0dXJlKTtcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGlkLWNvdW50ZXJcbiAgICAgICAgc2NvcGUucHJvcHMuaW5jckZlYXRJZCgpO1xuICAgICAgICAvLyBzY29wZS51cGRhdGUoKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcImFkZE1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBmZWF0dXJlVG9vbHRpcCxcbiAgICAgICAgICBuZXdDb250ZW50LFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIGFyZWEsXG4gICAgICAgICAgcmFkaXVzO1xuXG4gICAgICAgIGZlYXR1cmVUb29sdGlwID0gZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKTtcbiAgICAgICAgbmFtZSA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlTGFiZWwnKTtcbiAgICAgICAgbGVuZ3RoID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgdHJ1ZSk7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdtZWFzdXJlZExlbmd0aCcsIGxlbmd0aC5yYXdWYWx1ZSk7XG4gICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIiArIGxlbmd0aC5odG1sVmFsdWUpO1xuICAgICAgICBsZXQgZmVhdHVyZUlkID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVJZCcpO1xuICAgICAgICBsZXQgbmV3RmVhdHVyZSA9IHt9O1xuICAgICAgICBuZXdGZWF0dXJlLmxhYmVsID0gbmFtZTtcbiAgICAgICAgbmV3RmVhdHVyZS5pZCA9IGZlYXR1cmVJZDtcbiAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlcyA9IHt9O1xuICAgICAgICBuZXdGZWF0dXJlLm9sRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIGlmIChsZW5ndGggJiYgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpICE9PSAnY2lyY2xlJ1xuICAgICAgICAgICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlcy5saW5lID0ge307XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddLmRlc2NyaXB0aW9uID0gXCJMw6RuZ2U6IFwiO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS52YWx1ZSA9IGxlbmd0aC5yYXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgcmFkaXVzID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSk7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddLnZhbHVlID0gcmFkaXVzLnJhd1ZhbHVlO1xuICAgICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIlxuICAgICAgICAgICAgKyBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS5kZXNjcmlwdGlvbiArIHJhZGl1cy5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdwb2x5Z29uJ1xuICAgICAgICAgIHx8IGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICBhcmVhID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZsw6RjaGVuaW5oYWx0OiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10udmFsdWUgPSBhcmVhLnJhd1ZhbHVlO1xuICAgICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIlxuICAgICAgICAgICAgKyBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10uZGVzY3JpcHRpb24gKyBhcmVhLmh0bWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZS5zZXQoJ3Rvb2x0aXAnLCBmZWF0dXJlVG9vbHRpcCk7XG4gICAgICAgIHNjb3BlLnByb3BzLm1vZGlmeUZlYXR1cmUobmV3RmVhdHVyZSwgbmV3RmVhdHVyZS5pZCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgc2NvcGUudXBkYXRlTWVhc3VyZUZlYXR1cmUgPSB1cGRhdGVNZWFzdXJlRmVhdHVyZTtcblxuICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICBzY29wZS5wcm9wcy5yZW1vdmVGZWF0dXJlKGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKSk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJyZW1vdmVNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgLy9TdGFydCBXb3JrYXJvdW5kXG4gICAgICBnZXRWYWx1ZU9mR2VvbWV0cnkgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgbGVuZyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICAvLyBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgICB2YXIgdmFsID0gbGVuZy5odG1sVmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZW51bWIgPSB2YWwubWF0Y2goL1xcZC9nKTtcbiAgICAgICAgdmFsdWVudW1iID0gdmFsdWVudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIHJldHVybiB2YWx1ZW51bWI7XG4gICAgICB9O1xuXG4gICAgICBnZXRMZW5ndGhPZk1lYXN1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSAnMC4wMCBtJztcbiAgICAgICAgdmFyIGxlbmd0aG51bWIgPSBsZW5ndGgubWF0Y2goL1xcZC9nKTtcbiAgICAgICAgbGVuZ3RobnVtYiA9IGxlbmd0aG51bWIuam9pbihcIlwiKTtcbiAgICAgICAgbGVuZ3RobnVtYiA9ICs4O1xuICAgICAgICByZXR1cm4gbGVuZ3RobnVtYjtcbiAgICAgIH07Ly8gRW5kIFdvcmthcm91bmRcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdzdGFydCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IGV2ZW50LmZlYXR1cmU7XG4gICAgICAgICAgLy8gY3JlYXRlIHRvb2x0aXBcbiAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbmV3IFRvb2x0aXBQb3BVcCh7XG4gICAgICAgICAgICBtYXA6IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IGV2ZW50LmNvb3JkaW5hdGUsXG4gICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvL1dvcmthcm91bmQsIGZvciBzbWFsbCBvciB6ZXJvIHZhbHVlcyBvZiBGcmVlaGFuZFxuICAgICAgICAgICAgICB2YXIgdmFsID0gZ2V0VmFsdWVPZkdlb21ldHJ5KGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICB2YXIgbGVuZyA9IGdldExlbmd0aE9mTWVhc3VyZSgpO1xuICAgICAgICAgICAgICBpZiAodmFsICE9PSBsZW5nICYmIHZhbCA+IGxlbmcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgndG9vbHRpcCcsIGFjdGl2ZVRvb2x0aXApO1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ2dlb21ldHJ5VHlwZScsIHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5vbigncG9pbnRlcm1vdmUnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAuc2V0UG9zaXRpb24oZXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IG51bGw7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAgIGFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVhdHVyZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRW5hYmxlIGludGVyYWN0aW9uXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3BvaW50Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5maW5pc2hEcmF3aW5nKCk7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAvLyAwX29cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gbWFwXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7TWVhc3VyZXRvb2xzVmlld30gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJldG9vbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX01FQVNVUkVUT09MUztcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLW1lYXN1cmV0b29scy1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm1lYXN1cmV0b29scyA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5hZGRNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZSA9IHRoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkID0gdGhpcy5pbmNyZW1lbnRGZWF0dXJlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGVzID0gW1wic2VsZWN0XCIsIFwibGluZVwiLCBcInBvbHlnb25cIiwgXCJjaXJjbGVcIiwgXCJmcmVlaGFuZFwiXTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgbWVhc3VyZWRGZWF0dXJlczogW10sXG4gICAgICBmZWF0dXJlSWRDdHI6IDBcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYXJyVG9vbHRpcHMgPSB7XG4gICAgICBcInNlbGVjdFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy13cmFwcGVyXCJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1tZWFzdXJldG9vbHMtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1tZWFzdXJldG9vbHMtaGVhZGxpbmVcIn0gaGlkZUNvbnRhaW5lcj17XCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU30gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLVwiICsgZWxlbWVudCArIFwiIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9IHRpdGxlPXthcnJUb29sdGlwc1tlbGVtZW50XX0vPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wic2VsZWN0XCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInNlbGVjdFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wibGluZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJsaW5lXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJwb2x5Z29uXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInBvbHlnb25cIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImNpcmNsZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJjaXJjbGVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImZyZWVoYW5kXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImZyZWVoYW5kXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpbmNyZW1lbnRGZWF0dXJlSWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZUlkQ3RyOiB0aGlzLnN0YXRlLmZlYXR1cmVJZEN0ciArIDF9KTtcbiAgfVxuXG4gIGFkZE1lYXN1cmVkRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIG1vZGlmeU1lYXN1cmVkRmVhdHVyZShuZXdGZWF0dXJlLCBpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzW2ldID0gbmV3RmVhdHVyZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHJlbW92ZU1lYXN1cmVkRmVhdHVyZShpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBzZXRDdXJyZW50TW9kZShuZXdNb2RlKSB7XG4gICAgaWYgKHRoaXMubW9kZXMuaW5jbHVkZXMobmV3TW9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBuZXdNb2RlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzcGVjaWZpZWQgbW9kZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gQWRkIG1lYXN1cmUgbGF5ZXJzXG4gICAgdGhpcy5tZWFzdXJlTGluZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcblxuICAgIHRoaXMubWVhc3VyZUxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllcixcbiAgICAgIF0pLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAvLyB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAvLyBtZWFzdXJldG9vbHMgd2VyZSBjbG9zZWRcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlZE9uY2UgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAodGhpcy5yZW1vdmVkT25jZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hZGRUb29sdGlwcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=