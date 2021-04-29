(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./Resources/public/js/components/c4g-measuretools-feature.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools-feature.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasuredFeature = undefined;

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MeasuredFeature = exports.MeasuredFeature = function (_Component) {
  (0, _inherits3.default)(MeasuredFeature, _Component);

  function MeasuredFeature(props) {
    (0, _classCallCheck3.default)(this, MeasuredFeature);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MeasuredFeature.__proto__ || (0, _getPrototypeOf2.default)(MeasuredFeature)).call(this, props));

    _this.changeFeatureLabel = _this.changeFeatureLabel.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MeasuredFeature, [{
    key: "render",
    value: function render() {
      var scope = this;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "label",
            { htmlFor: "measureElement_" + this.props.idx },
            "Name: "
          ),
          _react2.default.createElement("input", { type: "text", name: "measureElement_" + this.props.idx, defaultValue: this.props.label,
            onInput: this.changeFeatureLabel })
        ),
        (0, _keys2.default)(this.props.measuredValues).map(function (element, index) {
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
          return _react2.default.createElement(
            "p",
            { key: index },
            _react2.default.createElement(
              "strong",
              null,
              obj.description
            ),
            _react2.default.createElement(
              "span",
              { className: "c4g-measure-value-" + scope.props.idx },
              hrValue
            )
          );
        })
      );
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
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	Küstenschmiede GmbH Software & Design
                      * @link              https://www.con4gis.org
                      *
                      */

/***/ }),

/***/ "./Resources/public/js/components/c4g-measuretools-view.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools-view.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasuretoolsView = undefined;

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "./Resources/public/js/components/c4g-measuretools-feature.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MeasuretoolsView = exports.MeasuretoolsView = function (_Component) {
  (0, _inherits3.default)(MeasuretoolsView, _Component);

  function MeasuretoolsView(props) {
    (0, _classCallCheck3.default)(this, MeasuretoolsView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MeasuretoolsView.__proto__ || (0, _getPrototypeOf2.default)(MeasuretoolsView)).call(this, props));

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

  (0, _createClass3.default)(MeasuretoolsView, [{
    key: "render",
    value: function render() {
      var scope = this;
      if (this.props.active) {
        if (this.props.mode === "select") {
          return _react2.default.createElement(
            "div",
            { className: "c4g-measuretools-content" },
            _react2.default.createElement(
              "p",
              null,
              this.props.lang.MEASURETOOLS_INFO
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "sub",
              null,
              this.props.lang.MEASURETOOLS_INFO_ADDITIONAL
            )
          );
        } else {
          // measure view
          return _react2.default.createElement(
            "div",
            { className: "c4g-measuretools-content" },
            _react2.default.createElement(
              "div",
              { className: "contentHeadline" },
              this.headlines[this.props.mode]
            ),
            _react2.default.createElement(
              "div",
              null,
              (0, _keys2.default)(this.props.features).map(function (element, index) {
                var feat = scope.props.features[element];
                return _react2.default.createElement(_c4gMeasuretoolsFeature.MeasuredFeature, { key: index, idx: index, label: feat.label, feature: feat,
                  measuredValues: feat.measuredValues, modifyFeature: scope.modifyFeature });
              })
            )
          );
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
      var source = void 0,
          features = void 0,
          olType = void 0,
          interaction = void 0;
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
  return MeasuretoolsView;
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	Küstenschmiede GmbH Software & Design
                      * @link              https://www.con4gis.org
                      *
                      */

/***/ }),

/***/ "./Resources/public/js/components/c4g-measuretools.jsx":
/*!*************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "./Resources/public/js/components/c4g-measuretools-view.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Measuretools = function (_Component) {
  (0, _inherits3.default)(Measuretools, _Component);

  function Measuretools(props) {
    (0, _classCallCheck3.default)(this, Measuretools);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Measuretools.__proto__ || (0, _getPrototypeOf2.default)(Measuretools)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
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
    var control = new _control.Control({ element: element, target: props.target });
    mapController.mapsControls.controls.measuretools = control;
    mapController.map.addControl(control);
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

  (0, _createClass3.default)(Measuretools, [{
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

      return _react2.default.createElement(
        "div",
        { className: "c4g-measuretools-wrapper" },
        _react2.default.createElement(_c4gTitlebar.Titlebar, { wrapperClass: "c4g-measuretools-header", headerClass: "c4g-measuretools-headline", hideContainer: ".c4g-measuretools-container",
          header: this.langConstants.MEASURETOOLS, closeBtnClass: "c4g-titlebar-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE }),
        _react2.default.createElement(
          "div",
          { className: "c4g-measuretools-mode-switcher" },
          this.modes.map(function (element, index) {
            return _react2.default.createElement("button", { key: index, className: "c4g-measure-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
              onMouseUp: function onMouseUp() {
                return scope.setState({ currentMode: element });
              }, title: arrTooltips[element] });
          })
        ),
        _react2.default.createElement(_c4gMeasuretoolsView.MeasuretoolsView, { mode: "select", measureTools: this, active: this.state.currentMode === "select" && this.state.open, featureId: this.state.featureIdCtr,
          lang: this.langConstants, addFeature: this.addMeasuredFeature, features: this.state.measuredFeatures, incrFeatId: this.incrementFeatureId,
          modifyFeature: this.modifyMeasuredFeature, mapController: this.props.mapController, removeFeature: this.removeMeasuredFeature }),
        _react2.default.createElement(_c4gMeasuretoolsView.MeasuretoolsView, { mode: "line", measureTools: this, active: this.state.currentMode === "line" && this.state.open, featureId: this.state.featureIdCtr,
          lang: this.langConstants, addFeature: this.addMeasuredFeature, features: this.state.measuredFeatures, incrFeatId: this.incrementFeatureId,
          modifyFeature: this.modifyMeasuredFeature, mapController: this.props.mapController, removeFeature: this.removeMeasuredFeature }),
        _react2.default.createElement(_c4gMeasuretoolsView.MeasuretoolsView, { mode: "polygon", measureTools: this, active: this.state.currentMode === "polygon" && this.state.open, featureId: this.state.featureIdCtr,
          lang: this.langConstants, addFeature: this.addMeasuredFeature, features: this.state.measuredFeatures, incrFeatId: this.incrementFeatureId,
          modifyFeature: this.modifyMeasuredFeature, mapController: this.props.mapController, removeFeature: this.removeMeasuredFeature }),
        _react2.default.createElement(_c4gMeasuretoolsView.MeasuretoolsView, { mode: "circle", measureTools: this, active: this.state.currentMode === "circle" && this.state.open, featureId: this.state.featureIdCtr,
          lang: this.langConstants, addFeature: this.addMeasuredFeature, features: this.state.measuredFeatures, incrFeatId: this.incrementFeatureId,
          modifyFeature: this.modifyMeasuredFeature, mapController: this.props.mapController, removeFeature: this.removeMeasuredFeature }),
        _react2.default.createElement(_c4gMeasuretoolsView.MeasuretoolsView, { mode: "freehand", measureTools: this, active: this.state.currentMode === "freehand" && this.state.open, featureId: this.state.featureIdCtr,
          lang: this.langConstants, addFeature: this.addMeasuredFeature, features: this.state.measuredFeatures, incrFeatId: this.incrementFeatureId,
          modifyFeature: this.modifyMeasuredFeature, mapController: this.props.mapController, removeFeature: this.removeMeasuredFeature })
      );
    }
  }, {
    key: "incrementFeatureId",
    value: function incrementFeatureId() {
      this.setState({ featureIdCtr: this.state.featureIdCtr + 1 });
    }
  }, {
    key: "addMeasuredFeature",
    value: function addMeasuredFeature(feature) {
      var features = this.state.measuredFeatures;
      features.push(feature);
      this.setState({ measuredFeatures: features });
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
      this.setState({ measuredFeatures: features });
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
      this.setState({ measuredFeatures: features });
    }
  }, {
    key: "setCurrentMode",
    value: function setCurrentMode(newMode) {
      if (this.modes.includes(newMode)) {
        this.setState({ currentMode: newMode });
      } else {
        console.warn("The specified mode is not available");
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ open: true });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({ open: false });
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
      this.measureLineLayer = new _layer.Vector({ source: new _source.Vector() });
      this.measurePolygonLayer = new _layer.Vector({ source: new _source.Vector() });
      this.measureCircleLayer = new _layer.Vector({ source: new _source.Vector() });
      this.measureFreehandLayer = new _layer.Vector({ source: new _source.Vector() });

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
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	Küstenschmiede GmbH Software & Design
                      * @link              https://www.con4gis.org
                      *
                      */

exports.default = Measuretools;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIm1lYXN1cmVkVmFsdWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4Iiwib2JqIiwiaHJWYWx1ZSIsImNvbnZlcnRNZXRlcnNUb0ttIiwidmFsdWUiLCJjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbSIsImRlc2NyaXB0aW9uIiwiZmVhdHVyZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZGlmeUZlYXR1cmUiLCJpZCIsImRpc3RhbmNlIiwia21WYWx1ZSIsImFyZWEiLCJDb21wb25lbnQiLCJNZWFzdXJldG9vbHNWaWV3IiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiaGVhZGxpbmVzIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsImZlYXR1cmVJZEN0ciIsImZlYXR1cmVJZCIsInVwZGF0ZUZ1bmN0aW9ucyIsImNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMiLCJhY3RpdmUiLCJtb2RlIiwibGFuZyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsImZlYXR1cmVzIiwiZmVhdCIsImFyckZlYXR1cmVzIiwiaSIsImxlbmd0aCIsIm9sRmVhdHVyZSIsInNldCIsInVwZGF0ZU1lYXN1cmVGZWF0dXJlIiwiaW5pdEZ1bmN0aW9uIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJhY3RpdmF0ZUZ1bmN0aW9uIiwiZGVhY3RpdmF0ZUZ1bmN0aW9uIiwibWFwSG92ZXIiLCJkZWFjdGl2YXRlIiwibWVhc3VyZVRvb2xzIiwic3RhdGUiLCJvcGVuIiwiYWN0aXZhdGUiLCJzb3VyY2UiLCJvbFR5cGUiLCJpbnRlcmFjdGlvbiIsImZlYXR1cmVJZENvdW50IiwiYWN0aXZlU2tldGNoIiwiYWN0aXZlVG9vbHRpcCIsImFkZE1lYXN1cmVGZWF0dXJlIiwiZ2V0VmFsdWVPZkdlb21ldHJ5IiwiZ2V0TGVuZ3RoT2ZNZWFzdXJlIiwicmVtb3ZlTWVhc3VyZUZlYXR1cmUiLCJ0b0xvd2VyQ2FzZSIsIm1lYXN1cmVGcmVlaGFuZExheWVyIiwiZ2V0U291cmNlIiwibWVhc3VyZUNpcmNsZUxheWVyIiwibWVhc3VyZVBvbHlnb25MYXllciIsIm1lYXN1cmVMaW5lTGF5ZXIiLCJDb2xsZWN0aW9uIiwiRHJhdyIsInR5cGUiLCJmcmVlaGFuZCIsImlucHV0RWxlbWVudCIsInN0ckxhYmVsIiwic3RyVHlwZSIsIm1lYXN1cmVBcmVhIiwibWVhc3VyZVJhZGl1cyIsIm1lYXN1cmVMaW5lIiwiZ2V0R2VvbWV0cnkiLCJnZXRUeXBlIiwiTEVOR1RIIiwiTElORSIsIlBFUklNRVRFUiIsIlBPTFlHT04iLCJSQURJVVMiLCJDSVJDTEUiLCJGUkVFSEFORCIsIm1lYXN1cmVkRmVhdHVyZSIsImFkZEZlYXR1cmUiLCJpbmNyRmVhdElkIiwiZmVhdHVyZVRvb2x0aXAiLCJuZXdDb250ZW50IiwibmFtZSIsInJhZGl1cyIsImdldCIsInV0aWxzIiwibWVhc3VyZUdlb21ldHJ5IiwicmF3VmFsdWUiLCJzZXRDb250ZW50IiwiaHRtbFZhbHVlIiwibmV3RmVhdHVyZSIsImxpbmUiLCJyZW1vdmVGZWF0dXJlIiwibGVuZyIsInZhbCIsInZhbHVlbnVtYiIsIm1hdGNoIiwiam9pbiIsImxlbmd0aG51bWIiLCJvbiIsImV2ZW50IiwiVG9vbHRpcFBvcFVwIiwicG9zaXRpb24iLCJjb29yZGluYXRlIiwiaG9yaXpvbnRhbCIsImNsb3NlYWJsZSIsImNsb3NlRnVuY3Rpb24iLCJzZXRQb3NpdGlvbiIsImNsZWFyIiwiYWRkSW50ZXJhY3Rpb24iLCJmaW5pc2hEcmF3aW5nIiwiaWdub3JlIiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJNZWFzdXJldG9vbHMiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwidGl0bGUiLCJDVFJMX01FQVNVUkVUT09MUyIsImNsYXNzTmFtZSIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJoaWRkZW4iLCJtZWFzdXJldG9vbHNDb250YWluZXIiLCJpbmNsdWRlcyIsImNsb3NlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJtZWFzdXJldG9vbHMiLCJhZGRDb250cm9sIiwiYWRkTWVhc3VyZWRGZWF0dXJlIiwibW9kaWZ5TWVhc3VyZWRGZWF0dXJlIiwicmVtb3ZlTWVhc3VyZWRGZWF0dXJlIiwiaW5jcmVtZW50RmVhdHVyZUlkIiwibW9kZXMiLCJjdXJyZW50TW9kZSIsIm1lYXN1cmVkRmVhdHVyZXMiLCJpbml0IiwiYXJyVG9vbHRpcHMiLCJNRUFTVVJFVE9PTFMiLCJDTE9TRSIsInNldFN0YXRlIiwicHVzaCIsInNwbGljZSIsIm5ld01vZGUiLCJjb25zb2xlIiwid2FybiIsInNldE9wZW5Db21wb25lbnQiLCJWZWN0b3IiLCJWZWN0b3JTb3VyY2UiLCJtZWFzdXJlTGF5ZXJHcm91cCIsIkdyb3VwIiwibGF5ZXJzIiwidmlzaWJsZSIsImFkZExheWVyIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZWRPbmNlIiwiZSIsImFkZFRvb2x0aXBzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnNBcnJheSIsImxheWVyIiwiZ2V0RmVhdHVyZXMiLCJqIiwiaGlkZSIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7OztJQUVhQSxlLFdBQUFBLGU7OztBQUVYLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0pBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUhpQjtBQUlsQjs7Ozs2QkFFUTtBQUNQLFVBQU1DLFFBQVEsSUFBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU8sU0FBUyxvQkFBb0IsS0FBS0gsS0FBTCxDQUFXSSxHQUEvQztBQUFBO0FBQUEsV0FERjtBQUVFLG1EQUFPLE1BQUssTUFBWixFQUFtQixNQUFNLG9CQUFvQixLQUFLSixLQUFMLENBQVdJLEdBQXhELEVBQTZELGNBQWMsS0FBS0osS0FBTCxDQUFXSyxLQUF0RjtBQUNRLHFCQUFTLEtBQUtKLGtCQUR0QjtBQUZGLFNBREY7QUFNRyw0QkFBWSxLQUFLRCxLQUFMLENBQVdNLGNBQXZCLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUNuRSxjQUFJQyxNQUFNUCxNQUFNSCxLQUFOLENBQVlNLGNBQVosQ0FBMkJFLE9BQTNCLENBQVY7QUFDQSxjQUFJRyxVQUFVLEdBQWQ7QUFDQSxrQkFBUUgsT0FBUjtBQUNFLGlCQUFLLE1BQUw7QUFDQSxpQkFBSyxRQUFMO0FBQ0VHLHdCQUFVUixN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QUFiLEVBQWdCQSxJQUFJdEosWUFBWUUsTUFBaEMsRUFBd0NvSixHQUF4QyxFQUE2QztBQUMzQyxnQkFBSXBMLFVBQVU4QixZQUFZc0osQ0FBWixDQUFkO0FBQ0FwTCxvQkFBUTBGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCMkYsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O2tDQUVhO0FBQ1osVUFBSUwsWUFBWSxLQUFLZixpQkFBTCxDQUF1QmdCLGNBQXZCLEVBQWhCO0FBQ0EsV0FBSyxJQUFJbEosSUFBSSxDQUFiLEVBQWdCQSxJQUFJaUosVUFBVWhKLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJbUosUUFBUUYsVUFBVWpKLENBQVYsQ0FBWjtBQUNBLFlBQUlELGNBQWNvSixNQUFNdEgsU0FBTixHQUFrQnVILFdBQWxCLEVBQWxCO0FBQ0EsWUFBSXJKLFdBQUosRUFBaUI7QUFDZixlQUFLLElBQUlzSixJQUFJLENBQWIsRUFBZ0JBLElBQUl0SixZQUFZRSxNQUFoQyxFQUF3Q29KLEdBQXhDLEVBQTZDO0FBQzNDLGdCQUFJcEwsVUFBVThCLFlBQVlzSixDQUFaLENBQWQ7QUFDQXBMLG9CQUFRMEYsR0FBUixDQUFZLFNBQVosRUFBdUI0RixJQUF2QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7RUFsT3VDOUssZ0IsR0F2QjFDOzs7Ozs7Ozs7Ozs7O2tCQXVCcUIrRyxZIiwiZmlsZSI6IjQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ3Rvb2x0aXAnLCBhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdnZW9tZXRyeVR5cGUnLCBzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAub24oJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBudWxsO1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gMF9vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG1hcFxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhci5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge01lYXN1cmV0b29sc1ZpZXd9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3hcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZXRvb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9NRUFTVVJFVE9PTFM7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5tZWFzdXJldG9vbHMgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICB7dGhpcy5tb2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZS1cIiArIGVsZW1lbnQgKyBcIiBcIiArIChlbGVtZW50ID09PSBzY29wZS5zdGF0ZS5jdXJyZW50TW9kZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnNldFN0YXRlKHtjdXJyZW50TW9kZTogZWxlbWVudH0pfSB0aXRsZT17YXJyVG9vbHRpcHNbZWxlbWVudF19Lz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcInNlbGVjdFwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJzZWxlY3RcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImxpbmVcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwibGluZVwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wicG9seWdvblwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJwb2x5Z29uXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJjaXJjbGVcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwiY2lyY2xlXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJmcmVlaGFuZFwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJmcmVlaGFuZFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaW5jcmVtZW50RmVhdHVyZUlkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVJZEN0cjogdGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHIgKyAxfSk7XG4gIH1cblxuICBhZGRNZWFzdXJlZEZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBtb2RpZnlNZWFzdXJlZEZlYXR1cmUobmV3RmVhdHVyZSwgaWQpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBmZWF0dXJlc1tpXSA9IG5ld0ZlYXR1cmU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICByZW1vdmVNZWFzdXJlZEZlYXR1cmUoaWQpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBmZWF0dXJlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgc2V0Q3VycmVudE1vZGUobmV3TW9kZSkge1xuICAgIGlmICh0aGlzLm1vZGVzLmluY2x1ZGVzKG5ld01vZGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW9kZTogbmV3TW9kZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgc3BlY2lmaWVkIG1vZGUgaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZWQgd2hlbiB0aGUgcGFuZWwgd2lsbCBiZSBvcGVuZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKiBbaW5pdCBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHJldHVybiAge2Jvb2xlYW59ICBSZXR1cm5zIHx0cnVlfCBvbiBzdWNjZXNzXG4gICAqL1xuICBpbml0KCkge1xuICAgIC8vIEFkZCBtZWFzdXJlIGxheWVyc1xuICAgIHRoaXMubWVhc3VyZUxpbmVMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG5cbiAgICB0aGlzLm1lYXN1cmVMYXllckdyb3VwID0gbmV3IEdyb3VwKHtcbiAgICAgIGxheWVyczogbmV3IENvbGxlY3Rpb24oW1xuICAgICAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIsXG4gICAgICBdKSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuXG4gICAgLy8gdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBlbmQgb2YgXCJpbml0KClcIlxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgLy8gbWVhc3VyZXRvb2xzIHdlcmUgY2xvc2VkXG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICB0aGlzLnJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICB0aGlzLnJlbW92ZWRPbmNlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFwcmV2U3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgaWYgKHRoaXMucmVtb3ZlZE9uY2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkVG9vbHRpcHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9