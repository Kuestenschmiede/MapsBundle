(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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


var MeasuredFeature = exports.MeasuredFeature = function (_Component) {
  _inherits(MeasuredFeature, _Component);

  function MeasuredFeature(props) {
    _classCallCheck(this, MeasuredFeature);

    var _this = _possibleConstructorReturn(this, (MeasuredFeature.__proto__ || Object.getPrototypeOf(MeasuredFeature)).call(this, props));

    _this.changeFeatureLabel = _this.changeFeatureLabel.bind(_this);
    return _this;
  }

  _createClass(MeasuredFeature, [{
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
        Object.keys(this.props.measuredValues).map(function (element, index) {
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
}(_react.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "./Resources/public/js/components/c4g-measuretools-feature.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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


var MeasuretoolsView = exports.MeasuretoolsView = function (_Component) {
  _inherits(MeasuretoolsView, _Component);

  function MeasuretoolsView(props) {
    _classCallCheck(this, MeasuretoolsView);

    var _this = _possibleConstructorReturn(this, (MeasuretoolsView.__proto__ || Object.getPrototypeOf(MeasuretoolsView)).call(this, props));

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

  _createClass(MeasuretoolsView, [{
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
              Object.keys(this.props.features).map(function (element, index) {
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
}(_react.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "./Resources/public/js/components/c4g-measuretools-view.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

var Measuretools = function (_Component) {
  _inherits(Measuretools, _Component);

  function Measuretools(props) {
    _classCallCheck(this, Measuretools);

    var _this = _possibleConstructorReturn(this, (Measuretools.__proto__ || Object.getPrototypeOf(Measuretools)).call(this, props));

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

  _createClass(Measuretools, [{
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
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "Loading..."
            ) },
          _react2.default.createElement(Titlebar, { wrapperClass: "c4g-measuretools-header", headerClass: "c4g-measuretools-headline", hideContainer: ".c4g-measuretools-container",
            header: this.langConstants.MEASURETOOLS, closeBtnClass: "c4g-titlebar-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE })
        ),
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
}(_react.Component);

exports.default = Measuretools;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIk9iamVjdCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsInZhbHVlIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJNZWFzdXJldG9vbHMiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwidGl0bGUiLCJDVFJMX01FQVNVUkVUT09MUyIsImNsYXNzTmFtZSIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJoaWRkZW4iLCJtZWFzdXJldG9vbHNDb250YWluZXIiLCJpbmNsdWRlcyIsImNsb3NlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJtZWFzdXJldG9vbHMiLCJhZGRDb250cm9sIiwiYWRkTWVhc3VyZWRGZWF0dXJlIiwibW9kaWZ5TWVhc3VyZWRGZWF0dXJlIiwicmVtb3ZlTWVhc3VyZWRGZWF0dXJlIiwiaW5jcmVtZW50RmVhdHVyZUlkIiwibW9kZXMiLCJjdXJyZW50TW9kZSIsIm1lYXN1cmVkRmVhdHVyZXMiLCJpbml0IiwiYXJyVG9vbHRpcHMiLCJNRUFTVVJFVE9PTFMiLCJDTE9TRSIsInNldFN0YXRlIiwicHVzaCIsInNwbGljZSIsIm5ld01vZGUiLCJjb25zb2xlIiwid2FybiIsInNldE9wZW5Db21wb25lbnQiLCJWZWN0b3IiLCJWZWN0b3JTb3VyY2UiLCJtZWFzdXJlTGF5ZXJHcm91cCIsIkdyb3VwIiwibGF5ZXJzIiwidmlzaWJsZSIsImFkZExheWVyIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVUb29sdGlwcyIsInJlbW92ZWRPbmNlIiwiZSIsImFkZFRvb2x0aXBzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnNBcnJheSIsImxheWVyIiwiZ2V0RmVhdHVyZXMiLCJqIiwiaGlkZSIsInNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7OzsrZUFaQTs7Ozs7Ozs7Ozs7Ozs7SUFjYUEsZSxXQUFBQSxlOzs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNYQSxLQURXOztBQUdqQixVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFIaUI7QUFJbEI7Ozs7NkJBRVE7QUFDUCxVQUFNQyxRQUFRLElBQWQ7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFPLFNBQVMsb0JBQW9CLEtBQUtILEtBQUwsQ0FBV0ksR0FBL0M7QUFBQTtBQUFBLFdBREY7QUFFRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsTUFBTSxvQkFBb0IsS0FBS0osS0FBTCxDQUFXSSxHQUF4RCxFQUE2RCxjQUFjLEtBQUtKLEtBQUwsQ0FBV0ssS0FBdEY7QUFDUSxxQkFBUyxLQUFLSixrQkFEdEI7QUFGRixTQURGO0FBTUdLLGVBQU9DLElBQVAsQ0FBWSxLQUFLUCxLQUFMLENBQVdRLGNBQXZCLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUNuRSxjQUFJQyxNQUFNVCxNQUFNSCxLQUFOLENBQVlRLGNBQVosQ0FBMkJFLE9BQTNCLENBQVY7QUFDQSxjQUFJRyxVQUFVLEdBQWQ7QUFDQSxrQkFB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LFVBQVVuSixNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsWUFBSXNKLFFBQVFGLFVBQVVwSixDQUFWLENBQVo7QUFDQSxZQUFJRCxjQUFjdUosTUFBTXpILFNBQU4sR0FBa0IwSCxXQUFsQixFQUFsQjtBQUNBLFlBQUl4SixXQUFKLEVBQWlCO0FBQ2YsZUFBSyxJQUFJeUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJekosWUFBWUUsTUFBaEMsRUFBd0N1SixHQUF4QyxFQUE2QztBQUMzQyxnQkFBSXZMLFVBQVU4QixZQUFZeUosQ0FBWixDQUFkO0FBQ0F2TCxvQkFBUTBGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCOEYsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O2tDQUVhO0FBQ1osVUFBSUwsWUFBWSxLQUFLZixpQkFBTCxDQUF1QmdCLGNBQXZCLEVBQWhCO0FBQ0EsV0FBSyxJQUFJckosSUFBSSxDQUFiLEVBQWdCQSxJQUFJb0osVUFBVW5KLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJc0osUUFBUUYsVUFBVXBKLENBQVYsQ0FBWjtBQUNBLFlBQUlELGNBQWN1SixNQUFNekgsU0FBTixHQUFrQjBILFdBQWxCLEVBQWxCO0FBQ0EsWUFBSXhKLFdBQUosRUFBaUI7QUFDZixlQUFLLElBQUl5SixJQUFJLENBQWIsRUFBZ0JBLElBQUl6SixZQUFZRSxNQUFoQyxFQUF3Q3VKLEdBQXhDLEVBQTZDO0FBQzNDLGdCQUFJdkwsVUFBVThCLFlBQVl5SixDQUFaLENBQWQ7QUFDQXZMLG9CQUFRMEYsR0FBUixDQUFZLFNBQVosRUFBdUIrRixJQUF2QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7O0VBcE91Q2pMLGdCOztrQkFBckJrSCxZIiwiZmlsZSI6IjguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ3Rvb2x0aXAnLCBhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdnZW9tZXRyeVR5cGUnLCBzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAub24oJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBudWxsO1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gMF9vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG1hcFxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge01lYXN1cmV0b29sc1ZpZXd9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3hcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZXRvb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9NRUFTVVJFVE9PTFM7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5tZWFzdXJldG9vbHMgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW1lYXN1cmV0b29scy1oZWFkbGluZVwifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLVwiICsgZWxlbWVudCArIFwiIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9IHRpdGxlPXthcnJUb29sdGlwc1tlbGVtZW50XX0vPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wic2VsZWN0XCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInNlbGVjdFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wibGluZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJsaW5lXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJwb2x5Z29uXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInBvbHlnb25cIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImNpcmNsZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJjaXJjbGVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImZyZWVoYW5kXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImZyZWVoYW5kXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpbmNyZW1lbnRGZWF0dXJlSWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZUlkQ3RyOiB0aGlzLnN0YXRlLmZlYXR1cmVJZEN0ciArIDF9KTtcbiAgfVxuXG4gIGFkZE1lYXN1cmVkRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIG1vZGlmeU1lYXN1cmVkRmVhdHVyZShuZXdGZWF0dXJlLCBpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzW2ldID0gbmV3RmVhdHVyZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHJlbW92ZU1lYXN1cmVkRmVhdHVyZShpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBzZXRDdXJyZW50TW9kZShuZXdNb2RlKSB7XG4gICAgaWYgKHRoaXMubW9kZXMuaW5jbHVkZXMobmV3TW9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBuZXdNb2RlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzcGVjaWZpZWQgbW9kZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gQWRkIG1lYXN1cmUgbGF5ZXJzXG4gICAgdGhpcy5tZWFzdXJlTGluZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcblxuICAgIHRoaXMubWVhc3VyZUxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllcixcbiAgICAgIF0pLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAvLyB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAvLyBtZWFzdXJldG9vbHMgd2VyZSBjbG9zZWRcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlZE9uY2UgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAodGhpcy5yZW1vdmVkT25jZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hZGRUb29sdGlwcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=