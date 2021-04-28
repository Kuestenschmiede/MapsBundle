(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

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
}(_react.Component);

exports.default = Measuretools;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIk9iamVjdCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsInZhbHVlIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiTWVhc3VyZXRvb2xzIiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJjbGFzc05hbWUiLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiaGlkZGVuIiwibWVhc3VyZXRvb2xzQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWVhc3VyZXRvb2xzIiwiYWRkQ29udHJvbCIsImFkZE1lYXN1cmVkRmVhdHVyZSIsIm1vZGlmeU1lYXN1cmVkRmVhdHVyZSIsInJlbW92ZU1lYXN1cmVkRmVhdHVyZSIsImluY3JlbWVudEZlYXR1cmVJZCIsIm1vZGVzIiwiY3VycmVudE1vZGUiLCJtZWFzdXJlZEZlYXR1cmVzIiwiaW5pdCIsImFyclRvb2x0aXBzIiwiTUVBU1VSRVRPT0xTIiwiQ0xPU0UiLCJzZXRTdGF0ZSIsInB1c2giLCJzcGxpY2UiLCJuZXdNb2RlIiwiY29uc29sZSIsIndhcm4iLCJzZXRPcGVuQ29tcG9uZW50IiwiVmVjdG9yIiwiVmVjdG9yU291cmNlIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsInZpc2libGUiLCJhZGRMYXllciIsInJlbW92ZUxheWVyIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVkT25jZSIsImUiLCJhZGRUb29sdGlwcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzQXJyYXkiLCJsYXllciIsImdldEZlYXR1cmVzIiwiaiIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7K2VBWkE7Ozs7Ozs7Ozs7Ozs7O0lBY2FBLGUsV0FBQUEsZTs7O0FBRVgsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDWEEsS0FEVzs7QUFHakIsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLE9BQTFCO0FBSGlCO0FBSWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsUUFBUSxJQUFkO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFTLG9CQUFvQixLQUFLSCxLQUFMLENBQVdJLEdBQS9DO0FBQUE7QUFBQSxXQURGO0FBRUUsbURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU0sb0JBQW9CLEtBQUtKLEtBQUwsQ0FBV0ksR0FBeEQsRUFBNkQsY0FBYyxLQUFLSixLQUFMLENBQVdLLEtBQXRGO0FBQ1EscUJBQVMsS0FBS0osa0JBRHRCO0FBRkYsU0FERjtBQU1HSyxlQUFPQyxJQUFQLENBQVksS0FBS1AsS0FBTCxDQUFXUSxjQUF2QixFQUF1Q0MsR0FBdkMsQ0FBMkMsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDbkUsY0FBSUMsTUFBTVQsTUFBTUgsS0FBTixDQUFZUSxjQUFaLENBQTJCRSxPQUEzQixDQUFWO0FBQ0EsY0FBSUcsVUFBVSxHQUFkO0FBQ0Esa0JBQVFILE9BQVI7QUFDRSxpQkFBSyxNQUFMO0FB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ZUFBSyxJQUFJc0osSUFBSSxDQUFiLEVBQWdCQSxJQUFJdEosWUFBWUUsTUFBaEMsRUFBd0NvSixHQUF4QyxFQUE2QztBQUMzQyxnQkFBSXBMLFVBQVU4QixZQUFZc0osQ0FBWixDQUFkO0FBQ0FwTCxvQkFBUTBGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCMkYsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O2tDQUVhO0FBQ1osVUFBSUwsWUFBWSxLQUFLZixpQkFBTCxDQUF1QmdCLGNBQXZCLEVBQWhCO0FBQ0EsV0FBSyxJQUFJbEosSUFBSSxDQUFiLEVBQWdCQSxJQUFJaUosVUFBVWhKLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJbUosUUFBUUYsVUFBVWpKLENBQVYsQ0FBWjtBQUNBLFlBQUlELGNBQWNvSixNQUFNdEgsU0FBTixHQUFrQnVILFdBQWxCLEVBQWxCO0FBQ0EsWUFBSXJKLFdBQUosRUFBaUI7QUFDZixlQUFLLElBQUlzSixJQUFJLENBQWIsRUFBZ0JBLElBQUl0SixZQUFZRSxNQUFoQyxFQUF3Q29KLEdBQXhDLEVBQTZDO0FBQzNDLGdCQUFJcEwsVUFBVThCLFlBQVlzSixDQUFaLENBQWQ7QUFDQXBMLG9CQUFRMEYsR0FBUixDQUFZLFNBQVosRUFBdUI0RixJQUF2QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7O0VBbE91QzlLLGdCOztrQkFBckIrRyxZIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ3Rvb2x0aXAnLCBhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdnZW9tZXRyeVR5cGUnLCBzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAub24oJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBudWxsO1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gMF9vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG1hcFxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhci5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge01lYXN1cmV0b29sc1ZpZXd9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3hcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZXRvb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9NRUFTVVJFVE9PTFM7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5tZWFzdXJldG9vbHMgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICB7dGhpcy5tb2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZS1cIiArIGVsZW1lbnQgKyBcIiBcIiArIChlbGVtZW50ID09PSBzY29wZS5zdGF0ZS5jdXJyZW50TW9kZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnNldFN0YXRlKHtjdXJyZW50TW9kZTogZWxlbWVudH0pfSB0aXRsZT17YXJyVG9vbHRpcHNbZWxlbWVudF19Lz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcInNlbGVjdFwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJzZWxlY3RcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImxpbmVcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwibGluZVwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wicG9seWdvblwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJwb2x5Z29uXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJjaXJjbGVcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwiY2lyY2xlXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJmcmVlaGFuZFwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJmcmVlaGFuZFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaW5jcmVtZW50RmVhdHVyZUlkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVJZEN0cjogdGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHIgKyAxfSk7XG4gIH1cblxuICBhZGRNZWFzdXJlZEZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBtb2RpZnlNZWFzdXJlZEZlYXR1cmUobmV3RmVhdHVyZSwgaWQpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBmZWF0dXJlc1tpXSA9IG5ld0ZlYXR1cmU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICByZW1vdmVNZWFzdXJlZEZlYXR1cmUoaWQpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBmZWF0dXJlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgc2V0Q3VycmVudE1vZGUobmV3TW9kZSkge1xuICAgIGlmICh0aGlzLm1vZGVzLmluY2x1ZGVzKG5ld01vZGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW9kZTogbmV3TW9kZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgc3BlY2lmaWVkIG1vZGUgaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZWQgd2hlbiB0aGUgcGFuZWwgd2lsbCBiZSBvcGVuZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKiBbaW5pdCBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHJldHVybiAge2Jvb2xlYW59ICBSZXR1cm5zIHx0cnVlfCBvbiBzdWNjZXNzXG4gICAqL1xuICBpbml0KCkge1xuICAgIC8vIEFkZCBtZWFzdXJlIGxheWVyc1xuICAgIHRoaXMubWVhc3VyZUxpbmVMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG5cbiAgICB0aGlzLm1lYXN1cmVMYXllckdyb3VwID0gbmV3IEdyb3VwKHtcbiAgICAgIGxheWVyczogbmV3IENvbGxlY3Rpb24oW1xuICAgICAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIsXG4gICAgICBdKSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuXG4gICAgLy8gdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBlbmQgb2YgXCJpbml0KClcIlxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgLy8gbWVhc3VyZXRvb2xzIHdlcmUgY2xvc2VkXG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICB0aGlzLnJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICB0aGlzLnJlbW92ZWRPbmNlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFwcmV2U3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgaWYgKHRoaXMucmVtb3ZlZE9uY2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkVG9vbHRpcHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9