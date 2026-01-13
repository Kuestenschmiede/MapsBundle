"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-instructions-container_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-router-instruction.jsx"
/*!***********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-instruction.jsx ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterInstruction = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterInstruction = exports.RouterInstruction = /*#__PURE__*/function (_Component) {
  function RouterInstruction(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterInstruction);
    _this = _callSuper(this, RouterInstruction, [props]);
    (0, _defineProperty2["default"])(_this, "fnItemClick", function () {
      if (this.props.routerWaySource && this.props.routerWaySource.getFeatures()) {
        this.props.routerHintSource.clear();
        var feature = this.props.routerWaySource.getFeatures()[0];
        var coordinates = feature.getGeometry().getCoordinates();
        var coordLonLat = this.props.dataPos;
        if (coordLonLat) {
          var stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          var newCoord = (0, _proj.fromLonLat)(stringlonlat);
          var currentHintFeature = new _ol.Feature({
            geometry: new _geom.Point(newCoord)
          });
          this.props.routerHintSource.addFeature(currentHintFeature);
          this.props.options.mapController.map.getView().setCenter(newCoord);
        } else if (coordinates && (this.props.dataStart || this.props.dataStart === 0) && this.props.dataEnd) {
          var geom;
          if (this.props.dataStart === this.props.dataEnd) {
            geom = new _geom.Point(coordinates[this.props.dataStart]);
          } else {
            var newCoordinates = coordinates.slice(this.props.dataStart, this.props.dataEnd);
            geom = new _geom.LineString(newCoordinates);
          }
          var _currentHintFeature = new _ol.Feature({
            geometry: geom
          });
          _currentHintFeature.setStyle(new _style.Style({
            stroke: new _style.Stroke({
              color: 'rgba(255, 0, 0, 1)',
              width: 20
            })
          }));
          // let currentZoom = this.props.mapController.map.getView().getZoom();
          this.props.routerHintSource.addFeature(_currentHintFeature);
          var width = jQuery(".c4g-router-container-right").css('width');
          if (width) {
            width = width.split(".");
            width = Array.isArray(width) ? width[0] : width;
            width = parseInt(width) + 50;
          } else {
            width = 50;
          }
          var maxZoom = parseInt(this.props.mapController.data.starboard.maxZoom) || 22;
          this.props.mapController.map.getView().fit(geom, {
            padding: [50, width, 50, 50],
            duration: 500,
            maxZoom: maxZoom
          });
        }
      }
    });
    (0, _defineProperty2["default"])(_this, "fnItemOver", function () {
      if (this.props.routerWaySource && this.props.routerWaySource.getFeatures()) {
        var feature = this.props.routerWaySource.getFeatures()[0];
        if (feature) {
          this.props.routerHintSource.clear();
          var coordLonLat = this.props.dataPos;
          if (coordLonLat) {
            var stringlonlat = coordLonLat.split(",");
            stringlonlat[0] = parseFloat(stringlonlat[0]);
            stringlonlat[1] = parseFloat(stringlonlat[1]);
            var newCoord = (0, _proj.fromLonLat)(stringlonlat);
            var currentHintFeature = new _ol.Feature({
              geometry: new _geom.Point(newCoord)
            });
            this.props.routerHintSource.addFeature(currentHintFeature);
          } else if ((this.props.dataStart || this.props.dataStart === 0) && this.props.dataEnd) {
            var coordinates = feature.getGeometry().getCoordinates();
            if (coordinates) {
              var newCoordinates = coordinates.slice(this.props.dataStart, this.props.dataEnd);
              var _currentHintFeature2;
              if (newCoordinates.length === 1) {
                _currentHintFeature2 = new _ol.Feature({
                  geometry: new _geom.Point(newCoordinates)
                });
              } else {
                _currentHintFeature2 = new _ol.Feature({
                  geometry: new _geom.LineString(newCoordinates)
                });
              }
              _currentHintFeature2.setStyle(new _style.Style({
                stroke: new _style.Stroke({
                  color: 'rgba(255, 0, 0, 1)',
                  width: 15
                })
              }));
              this.props.routerHintSource.addFeature(_currentHintFeature2);
            }
          }
        }
      }
    });
    (0, _defineProperty2["default"])(_this, "fnItemOut", function () {
      this.props.routerHintSource.clear();
    });
    _this.fnItemOver = _this.fnItemOver.bind(_this);
    _this.fnItemClick = _this.fnItemClick.bind(_this);
    _this.fnItemOut = _this.fnItemOut.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(RouterInstruction, _Component);
  return (0, _createClass2["default"])(RouterInstruction, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction",
        onMouseUp: this.fnItemClick,
        onMouseLeave: this.fnItemOut,
        onMouseEnter: this.fnItemOver,
        key: this.props.id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-image"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.getInstructionIcon(this.props.imgPath),
        alt: ""
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-text"
      }, this.props.instrText), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-distance"
      }, (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.instrDist * 1000)));
    }
  }, {
    key: "getInstructionIcon",
    value: function getInstructionIcon(intType) {
      var routerEngine = this.props.mapController.data.router_api_selection;
      switch (routerEngine) {
        case '6':
        case '5':
        case '4':
          return this.getInstructionIconValhalla(intType);
        case '3':
          return this.getInstructionIconGraphhopper(intType);
        case '2':
          return this.getInstructionIconORS(intType);
      }
    }

    /**
     * Translates an integer number into the correct instruction icon (Graphhopper icons).
     * @param intType
     * @returns {string}
     */
  }, {
    key: "getInstructionIconValhalla",
    value: function getInstructionIconValhalla(intType) {
      var image;
      switch (intType) {
        case 0:
          image = "default.png";
          break;
        case 1:
          image = "head.png";
          break;
        case 2:
          image = "head.png";
          break;
        case 3:
          image = "head.png";
          break;
        case 4:
          image = "target.png";
          break;
        case 5:
          image = "target.png";
          break;
        case 6:
          image = "target.png";
          break;
        case 7:
          image = "continue.png";
          break;
        case 8:
          image = "continue.png";
          break;
        case 9:
          image = "slight-right.png";
          break;
        case 10:
          image = "turn-right.png";
          break;
        case 11:
          image = "sharp-right.png";
          break;
        case 12:
          image = "u-turn.png";
          break;
        case 13:
          image = "u-turn.png";
          break;
        case 14:
          image = "sharp-left.png";
          break;
        case 15:
          image = "turn-left.png";
          break;
        case 16:
          image = "slight-left.png";
          break;
        case 17:
          image = "continue.png";
          break;
        case 18:
          image = "slight-right.png";
          break;
        case 19:
          image = "slight-left.png";
          break;
        case 20:
          image = "slight-right.png";
          break;
        case 21:
          image = "slight-left.png";
          break;
        case 22:
          image = "continue.png";
          break;
        case 23:
          image = "slight-right.png";
          break;
        case 24:
          image = "slight-left.png";
          break;
        case 25:
          image = "continue.png";
          break;
        case 26:
          image = "round-about.png";
          break;
        case 27:
          image = "round-about.png";
          break;
        default:
          image = "default.png";
          break;
      }
      return "bundles/con4gismaps/vendor/osrm/images/" + image;
    }
  }, {
    key: "getInstructionIconGraphhopper",
    value: function getInstructionIconGraphhopper(intType) {
      var image;
      switch (intType) {
        case 0:
          image = "continue.png";
          break;
        case -2:
          image = "turn-left.png";
          break;
        case 2:
          image = "turn-right.png";
          break;
        case -1:
          image = "turn-left.png";
          break;
        case 1:
          image = "turn-right.png";
          break;
        case -3:
          image = "sharp-left.png";
          break;
        case 3:
          image = "sharp-right.png";
          break;
        case -7:
          image = "slight-left.png";
          break;
        case 7:
          image = "slight-right.png";
          break;
        case 6:
          image = "round-about.png";
          break;
        case 4:
          image = "target.png";
          break;
        case 5:
          image = "target.png";
          break;
        case -98:
          image = "u-turn.png";
          break;
        case 99:
          image = "head.png";
          break;
      }
      return "bundles/con4gismaps/vendor/osrm/images/" + image;
    }
  }, {
    key: "getInstructionIconORS",
    value: function getInstructionIconORS(intType) {
      var image;
      switch (intType) {
        case 0:
          image = "turn-left.png";
          break;
        case 1:
          image = "turn-right.png";
          break;
        case 2:
          image = "sharp-left.png";
          break;
        case 3:
          image = "sharp-right.png";
          break;
        case 4:
          image = "slight-left.png";
          break;
        case 5:
          image = "slight-right.png";
          break;
        case 6:
          image = "continue.png";
          break;
        case 7:
          image = "round-about.png";
          break;
        case 8:
          image = "round-about.png";
          break;
        case 9:
          image = "u-turn.png";
          break;
        case 10:
          image = "target.png";
          break;
        case 11:
          image = "head.png";
          break;
        case 12:
          image = "slight-left.png";
          break;
        case 13:
          image = "slight-right.png";
          break;
      }
      return "bundles/con4gismaps/vendor/osrm/images/" + image;
    }
  }]);
}(_react.Component);

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-instructions-container.jsx"
/*!**********************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-instructions-container.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "./src/Resources/public/js/components/c4g-router-instruction.jsx");
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterInstructionsContainer = exports["default"] = /*#__PURE__*/function (_Component) {
  function RouterInstructionsContainer(props) {
    (0, _classCallCheck2["default"])(this, RouterInstructionsContainer);
    return _callSuper(this, RouterInstructionsContainer, [props]);
  }
  (0, _inherits2["default"])(RouterInstructionsContainer, _Component);
  return (0, _createClass2["default"])(RouterInstructionsContainer, [{
    key: "render",
    value: function render() {
      var _this = this;
      var instructions = [];
      var time = "";
      var distance = "";
      var profile = "";
      if (this.props.routerInstructions && this.props.routerInstructions.instructions) {
        instructions = this.props.routerInstructions.instructions;
      }
      if (instructions.length === 0) {
        return "";
      } else {
        // instructions present, container open
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className
        }, this.props.header, this.props.switcher, instructions.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterInstruction.RouterInstruction, {
            imgPath: item.type,
            instrText: item.instruction,
            instrDist: item.length,
            key: index,
            id: index,
            mapController: _this.props.mapController,
            dataStart: item.begin_shape_index,
            dataEnd: item.end_shape_index,
            routerWaySource: _this.props.routerWaySource,
            routerHintSource: _this.props.routerHintSource
          });
        }));
      }
    }
  }]);
}(_react.Component);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyx5QkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLEdBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxLQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLE1BQUEsR0FBQUwsbUJBQUE7QUFBdUMsU0FBQUQsd0JBQUFPLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFULHVCQUFBLFlBQUFBLHdCQUFBTyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxL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LElBQUksQ0FBQ0ksaUJBQWtCO1lBQUNsRSxPQUFPLEVBQUU4RCxJQUFJLENBQUNLLGVBQWdCO1lBQUM3RixlQUFlLEVBQUVILEtBQUksQ0FBQ0QsS0FBSyxDQUFDSSxlQUFnQjtZQUFDRSxnQkFBZ0IsRUFBRUwsS0FBSSxDQUFDRCxLQUFLLENBQUNNO1VBQWlCLENBQUMsQ0FBQztRQUNwVSxDQUFDLENBQ0UsQ0FBQztNQUVWO0lBQ0Y7RUFBQztBQUFBLEVBOUJzRDRFLGdCQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0xpbmVTdHJpbmcsIFBvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtmcm9tTG9uTGF0fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckluc3RydWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZuSXRlbU92ZXIgPSB0aGlzLmZuSXRlbU92ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZuSXRlbUNsaWNrID0gdGhpcy5mbkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm5JdGVtT3V0ID0gdGhpcy5mbkl0ZW1PdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uXCJ9IG9uTW91c2VVcD17dGhpcy5mbkl0ZW1DbGlja30gb25Nb3VzZUxlYXZlPXt0aGlzLmZuSXRlbU91dH0gb25Nb3VzZUVudGVyPXt0aGlzLmZuSXRlbU92ZXJ9IGtleT17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taW1hZ2VcIn0+PGltZyBzcmM9e3RoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uKHRoaXMucHJvcHMuaW1nUGF0aCl9IGFsdD1cIlwiLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10ZXh0XCJ9Pnt0aGlzLnByb3BzLmluc3RyVGV4dH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1kaXN0YW5jZVwifT57dG9IdW1hbkRpc3RhbmNlKHRoaXMucHJvcHMuaW5zdHJEaXN0ICogMTAwMCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGZuSXRlbUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZSAmJiB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgdmFyIGNvb3JkTG9uTGF0ID0gdGhpcy5wcm9wcy5kYXRhUG9zO1xuICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgIGxldCBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICBsZXQgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNvb3JkaW5hdGVzICYmICh0aGlzLnByb3BzLmRhdGFTdGFydCB8fCB0aGlzLnByb3BzLmRhdGFTdGFydCA9PT0gMCkgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgIGxldCBnZW9tO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhU3RhcnQgPT09IHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICAgIGdlb20gPSBuZXcgUG9pbnQoY29vcmRpbmF0ZXNbdGhpcy5wcm9wcy5kYXRhU3RhcnRdKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCBuZXdDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLnNsaWNlKHRoaXMucHJvcHMuZGF0YVN0YXJ0LCB0aGlzLnByb3BzLmRhdGFFbmQpO1xuICAgICAgICAgIGdlb20gPSBuZXcgTGluZVN0cmluZyhuZXdDb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogZ2VvbVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRab29tID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICBsZXQgd2lkdGggPSBqUXVlcnkoXCIuYzRnLXJvdXRlci1jb250YWluZXItcmlnaHRcIikuY3NzKCd3aWR0aCcpO1xuICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICB3aWR0aCA9IHdpZHRoLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICB3aWR0aCA9IEFycmF5LmlzQXJyYXkod2lkdGgpID8gd2lkdGhbMF0gOiB3aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKSArICA1MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IDUwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtYXhab29tID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLm1heFpvb20pIHx8IDIyO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5maXQoZ2VvbSwge1xuICAgICAgICAgIHBhZGRpbmc6IFs1MCx3aWR0aCw1MCw1MF0sXG4gICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICBtYXhab29tOiBtYXhab29tXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmbkl0ZW1PdmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZSAmJiB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpKSB7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgbGV0IGNvb3JkTG9uTGF0ID0gdGhpcy5wcm9wcy5kYXRhUG9zO1xuICAgICAgICBpZiAoY29vcmRMb25MYXQpIHtcbiAgICAgICAgICBsZXQgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgICAgbGV0IG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRoaXMucHJvcHMuZGF0YVN0YXJ0IHx8IHRoaXMucHJvcHMuZGF0YVN0YXJ0ID09PSAwKSAmJiB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGxldCBuZXdDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLnNsaWNlKHRoaXMucHJvcHMuZGF0YVN0YXJ0LCB0aGlzLnByb3BzLmRhdGFFbmQpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZTtcbiAgICAgICAgICAgIGlmIChuZXdDb29yZGluYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IExpbmVTdHJpbmcobmV3Q29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmbkl0ZW1PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gIH07XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uKGludFR5cGUpIHtcbiAgICBsZXQgcm91dGVyRW5naW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb247XG4gICAgc3dpdGNoIChyb3V0ZXJFbmdpbmUpIHtcbiAgICAgIGNhc2UgJzYnOlxuICAgICAgY2FzZSAnNSc6XG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEoaW50VHlwZSk7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIoaW50VHlwZSk7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFuIGludGVnZXIgbnVtYmVyIGludG8gdGhlIGNvcnJlY3QgaW5zdHJ1Y3Rpb24gaWNvbiAoR3JhcGhob3BwZXIgaWNvbnMpLlxuICAgKiBAcGFyYW0gaW50VHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjI6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIzOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjQ6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI1OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbWFnZSA9IFwiZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG4gIGdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0yOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTc6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC05ODpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk5OlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25PUlMoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckluc3RydWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLWluc3RydWN0aW9uLmpzeFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2UsIHRvSHVtYW5UaW1lfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gW107XG4gICAgbGV0IHRpbWUgPSBcIlwiO1xuICAgIGxldCBkaXN0YW5jZSA9IFwiXCI7XG4gICAgbGV0IHByb2ZpbGUgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zICYmIHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zLmluc3RydWN0aW9ucykge1xuICAgICAgaW5zdHJ1Y3Rpb25zID0gdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChpbnN0cnVjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnN0cnVjdGlvbnMgcHJlc2VudCwgY29udGFpbmVyIG9wZW5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnN3aXRjaGVyfVxuICAgICAgICAgIHtpbnN0cnVjdGlvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJJbnN0cnVjdGlvbiBpbWdQYXRoPXtpdGVtLnR5cGV9IGluc3RyVGV4dD17aXRlbS5pbnN0cnVjdGlvbn0gaW5zdHJEaXN0PXtpdGVtLmxlbmd0aH0ga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGRhdGFTdGFydD17aXRlbS5iZWdpbl9zaGFwZV9pbmRleH0gZGF0YUVuZD17aXRlbS5lbmRfc2hhcGVfaW5kZXh9IHJvdXRlcldheVNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2V9IHJvdXRlckhpbnRTb3VyY2U9e3RoaXMucHJvcHMucm91dGVySGludFNvdXJjZX0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jNGdSb3V0ZXJUaW1lQ29udmVyc2lvbnMiLCJfb2wiLCJfZ2VvbSIsIl9wcm9qIiwiX3N0eWxlIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiUm91dGVySW5zdHJ1Y3Rpb24iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2RlZmluZVByb3BlcnR5MiIsInJvdXRlcldheVNvdXJjZSIsImdldEZlYXR1cmVzIiwicm91dGVySGludFNvdXJjZSIsImNsZWFyIiwiZmVhdHVyZSIsImNvb3JkaW5hdGVzIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImNvb3JkTG9uTGF0IiwiZGF0YVBvcyIsInN0cmluZ2xvbmxhdCIsInNwbGl0IiwicGFyc2VGbG9hdCIsIm5ld0Nvb3JkIiwiZnJvbUxvbkxhdCIsImN1cnJlbnRIaW50RmVhdHVyZSIsIkZlYXR1cmUiLCJnZW9tZXRyeSIsIlBvaW50IiwiYWRkRmVhdHVyZSIsIm9wdGlvbnMiLCJtYXBDb250cm9sbGVyIiwibWFwIiwiZ2V0VmlldyIsInNldENlbnRlciIsImRhdGFTdGFydCIsImRhdGFFbmQiLCJnZW9tIiwibmV3Q29vcmRpbmF0ZXMiLCJzbGljZSIsIkxpbmVTdHJpbmciLCJzZXRTdHlsZSIsIlN0eWxlIiwic3Ryb2tlIiwiU3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsImpRdWVyeSIsImNzcyIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwibWF4Wm9vbSIsImRhdGEiLCJzdGFyYm9hcmQiLCJmaXQiLCJwYWRkaW5nIiwiZHVyYXRpb24iLCJsZW5ndGgiLCJmbkl0ZW1PdmVyIiwiYmluZCIsImZuSXRlbUNsaWNrIiwiZm5JdGVtT3V0IiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiLCJvbk1vdXNlRW50ZXIiLCJpZCIsInNyYyIsImdldEluc3RydWN0aW9uSWNvbiIsImltZ1BhdGgiLCJhbHQiLCJpbnN0clRleHQiLCJ0b0h1bWFuRGlzdGFuY2UiLCJpbnN0ckRpc3QiLCJpbnRUeXBlIiwicm91dGVyRW5naW5lIiwicm91dGVyX2FwaV9zZWxlY3Rpb24iLCJnZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYSIsImdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTIiwiaW1hZ2UiLCJDb21wb25lbnQiLCJfYzRnUm91dGVySW5zdHJ1Y3Rpb24iLCJSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJ0aW1lIiwiZGlzdGFuY2UiLCJwcm9maWxlIiwicm91dGVySW5zdHJ1Y3Rpb25zIiwiaGVhZGVyIiwic3dpdGNoZXIiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwiaW5zdHJ1Y3Rpb24iLCJiZWdpbl9zaGFwZV9pbmRleCIsImVuZF9zaGFwZV9pbmRleCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9