"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-instructions-container_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-router-instruction.jsx":
/*!***********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-instruction.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-instructions-container.jsx":
/*!**********************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-instructions-container.jsx ***!
  \**********************************************************************************/
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
var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "./src/Resources/public/js/components/c4g-router-instruction.jsx");
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyx5QkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLEdBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxLQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLE1BQUEsR0FBQUwsbUJBQUE7QUFBdUMsU0FBQU0seUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFSLHdCQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FB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Q3RCLFNBQVMsRUFBRW9CLElBQUksQ0FBQ0csV0FBWTtZQUFDckIsU0FBUyxFQUFFa0IsSUFBSSxDQUFDeEMsTUFBTztZQUFDTyxHQUFHLEVBQUVrQyxLQUFNO1lBQUMxQixFQUFFLEVBQUUwQixLQUFNO1lBQUNwRSxhQUFhLEVBQUV4QixLQUFJLENBQUNELEtBQUssQ0FBQ3lCLGFBQWM7WUFBQ0ksU0FBUyxFQUFFK0QsSUFBSSxDQUFDSSxpQkFBa0I7WUFBQ2xFLE9BQU8sRUFBRThELElBQUksQ0FBQ0ssZUFBZ0I7WUFBQzdGLGVBQWUsRUFBRUgsS0FBSSxDQUFDRCxLQUFLLENBQUNJLGVBQWdCO1lBQUNFLGdCQUFnQixFQUFFTCxLQUFJLENBQUNELEtBQUssQ0FBQ007VUFBaUIsQ0FBQyxDQUFDO1FBQ3BVLENBQUMsQ0FDRSxDQUFDO01BRVY7SUFDRjtFQUFDO0FBQUEsRUE5QnNENEUsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtMaW5lU3RyaW5nLCBQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7ZnJvbUxvbkxhdH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7U3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mbkl0ZW1PdmVyID0gdGhpcy5mbkl0ZW1PdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mbkl0ZW1DbGljayA9IHRoaXMuZm5JdGVtQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmZuSXRlbU91dCA9IHRoaXMuZm5JdGVtT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvblwifSBvbk1vdXNlVXA9e3RoaXMuZm5JdGVtQ2xpY2t9IG9uTW91c2VMZWF2ZT17dGhpcy5mbkl0ZW1PdXR9IG9uTW91c2VFbnRlcj17dGhpcy5mbkl0ZW1PdmVyfSBrZXk9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLWltYWdlXCJ9PjxpbWcgc3JjPXt0aGlzLmdldEluc3RydWN0aW9uSWNvbih0aGlzLnByb3BzLmltZ1BhdGgpfSBhbHQ9XCJcIi8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tdGV4dFwifT57dGhpcy5wcm9wcy5pbnN0clRleHR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tZGlzdGFuY2VcIn0+e3RvSHVtYW5EaXN0YW5jZSh0aGlzLnByb3BzLmluc3RyRGlzdCAqIDEwMDApfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBmbkl0ZW1DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHZhciBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICBsZXQgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDb29yZCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjb29yZGluYXRlcyAmJiAodGhpcy5wcm9wcy5kYXRhU3RhcnQgfHwgdGhpcy5wcm9wcy5kYXRhU3RhcnQgPT09IDApICYmIHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICBsZXQgZ2VvbTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVN0YXJ0ID09PSB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgICBnZW9tID0gbmV3IFBvaW50KGNvb3JkaW5hdGVzW3RoaXMucHJvcHMuZGF0YVN0YXJ0XSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKTtcbiAgICAgICAgICBnZW9tID0gbmV3IExpbmVTdHJpbmcobmV3Q29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGdlb21cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIC8vIGxldCBjdXJyZW50Wm9vbSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgbGV0IHdpZHRoID0galF1ZXJ5KFwiLmM0Zy1yb3V0ZXItY29udGFpbmVyLXJpZ2h0XCIpLmNzcygnd2lkdGgnKTtcbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgd2lkdGggPSB3aWR0aC5zcGxpdChcIi5cIik7XG4gICAgICAgICAgd2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdIDogd2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyAgNTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSA1MDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF4Wm9vbSA9IHBhcnNlSW50KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5tYXhab29tKSB8fCAyMjtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGdlb20sIHtcbiAgICAgICAgICBwYWRkaW5nOiBbNTAsd2lkdGgsNTAsNTBdLFxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgbWF4Wm9vbTogbWF4Wm9vbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgIGxldCBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLnByb3BzLmRhdGFTdGFydCB8fCB0aGlzLnByb3BzLmRhdGFTdGFydCA9PT0gMCkgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmU7XG4gICAgICAgICAgICBpZiAobmV3Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBMaW5lU3RyaW5nKG5ld0Nvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICB9O1xuXG4gIGdldEluc3RydWN0aW9uSWNvbihpbnRUeXBlKSB7XG4gICAgbGV0IHJvdXRlckVuZ2luZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uO1xuICAgIHN3aXRjaCAocm91dGVyRW5naW5lKSB7XG4gICAgICBjYXNlICc2JzpcbiAgICAgIGNhc2UgJzUnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbk9SUyhpbnRUeXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbiBpbnRlZ2VyIG51bWJlciBpbnRvIHRoZSBjb3JyZWN0IGluc3RydWN0aW9uIGljb24gKEdyYXBoaG9wcGVyIGljb25zKS5cbiAgICogQHBhcmFtIGludFR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTc6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjE6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIyOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNTpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjY6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI3OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlcihpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0zOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC03OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtOTg6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVySW5zdHJ1Y3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24uanN4XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZSwgdG9IdW1hblRpbWV9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcbiAgICBsZXQgdGltZSA9IFwiXCI7XG4gICAgbGV0IGRpc3RhbmNlID0gXCJcIjtcbiAgICBsZXQgcHJvZmlsZSA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMgPSB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGluc3RydWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluc3RydWN0aW9ucyBwcmVzZW50LCBjb250YWluZXIgb3BlblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgICAge2luc3RydWN0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckluc3RydWN0aW9uIGltZ1BhdGg9e2l0ZW0udHlwZX0gaW5zdHJUZXh0PXtpdGVtLmluc3RydWN0aW9ufSBpbnN0ckRpc3Q9e2l0ZW0ubGVuZ3RofSBrZXk9e2luZGV4fSBpZD17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZGF0YVN0YXJ0PXtpdGVtLmJlZ2luX3NoYXBlX2luZGV4fSBkYXRhRW5kPXtpdGVtLmVuZF9zaGFwZV9pbmRleH0gcm91dGVyV2F5U291cmNlPXt0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZX0gcm91dGVySGludFNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z1JvdXRlclRpbWVDb252ZXJzaW9ucyIsIl9vbCIsIl9nZW9tIiwiX3Byb2oiLCJfc3R5bGUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlJvdXRlckluc3RydWN0aW9uIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJyb3V0ZXJXYXlTb3VyY2UiLCJnZXRGZWF0dXJlcyIsInJvdXRlckhpbnRTb3VyY2UiLCJjbGVhciIsImZlYXR1cmUiLCJjb29yZGluYXRlcyIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJjb29yZExvbkxhdCIsImRhdGFQb3MiLCJzdHJpbmdsb25sYXQiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJuZXdDb29yZCIsImZyb21Mb25MYXQiLCJjdXJyZW50SGludEZlYXR1cmUiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsImFkZEZlYXR1cmUiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImdldFZpZXciLCJzZXRDZW50ZXIiLCJkYXRhU3RhcnQiLCJkYXRhRW5kIiwiZ2VvbSIsIm5ld0Nvb3JkaW5hdGVzIiwic2xpY2UiLCJMaW5lU3RyaW5nIiwic2V0U3R5bGUiLCJTdHlsZSIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJqUXVlcnkiLCJjc3MiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsIm1heFpvb20iLCJkYXRhIiwic3RhcmJvYXJkIiwiZml0IiwicGFkZGluZyIsImR1cmF0aW9uIiwibGVuZ3RoIiwiZm5JdGVtT3ZlciIsImJpbmQiLCJmbkl0ZW1DbGljayIsImZuSXRlbU91dCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZUVudGVyIiwiaWQiLCJzcmMiLCJnZXRJbnN0cnVjdGlvbkljb24iLCJpbWdQYXRoIiwiYWx0IiwiaW5zdHJUZXh0IiwidG9IdW1hbkRpc3RhbmNlIiwiaW5zdHJEaXN0IiwiaW50VHlwZSIsInJvdXRlckVuZ2luZSIsInJvdXRlcl9hcGlfc2VsZWN0aW9uIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEiLCJnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlciIsImdldEluc3RydWN0aW9uSWNvbk9SUyIsImltYWdlIiwiQ29tcG9uZW50IiwiX2M0Z1JvdXRlckluc3RydWN0aW9uIiwiUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIiwiaW5zdHJ1Y3Rpb25zIiwidGltZSIsImRpc3RhbmNlIiwicHJvZmlsZSIsInJvdXRlckluc3RydWN0aW9ucyIsImhlYWRlciIsInN3aXRjaGVyIiwiaXRlbSIsImluZGV4IiwidHlwZSIsImluc3RydWN0aW9uIiwiYmVnaW5fc2hhcGVfaW5kZXgiLCJlbmRfc2hhcGVfaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9