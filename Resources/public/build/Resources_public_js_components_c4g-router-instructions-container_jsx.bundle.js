(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-instructions-container_jsx"],{

/***/ "./Resources/public/js/components/c4g-router-instruction.jsx":
/*!*******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-instruction.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterInstruction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./Resources/public/js/c4g-router-time-conversions.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterInstruction = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterInstruction, _Component);

  var _super = _createSuper(RouterInstruction);

  function RouterInstruction(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterInstruction);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fnItemClick", function () {
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
        } else if (coordinates && this.props.dataStart && this.props.dataEnd) {
          var geom = new _geom.LineString(coordinates.slice(this.props.dataStart, this.props.dataEnd));

          var _currentHintFeature = new _ol.Feature({
            geometry: geom
          });

          _currentHintFeature.setStyle(new _style.Style({
            stroke: new _style.Stroke({
              color: 'rgba(255, 0, 0, 1)',
              width: 20
            })
          }));

          var currentZoom = this.props.mapController.map.getView().getZoom();
          this.props.routerHintSource.addFeature(_currentHintFeature);
          this.props.mapController.map.getView().fit(geom);
          var afterZoom = this.props.mapController.map.getView().getZoom();
          var endZoom = Math.round((currentZoom + afterZoom) / 2);
          endZoom = endZoom > afterZoom ? afterZoom : endZoom;
          this.props.mapController.map.getView().setZoom(endZoom);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fnItemOver", function () {
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
          } else if (this.props.dataStart && this.props.dataEnd) {
            var coordinates = feature.getGeometry().getCoordinates();

            if (coordinates) {
              var _currentHintFeature2 = new _ol.Feature({
                geometry: new _geom.LineString(coordinates.slice(this.props.dataStart, this.props.dataEnd))
              });

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fnItemOut", function () {
      this.props.routerHintSource.clear();
    });
    _this.fnItemOver = _this.fnItemOver.bind((0, _assertThisInitialized2["default"])(_this));
    _this.fnItemClick = _this.fnItemClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.fnItemOut = _this.fnItemOut.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(RouterInstruction, [{
    key: "render",
    value: function render() {
<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
        className: "c4g-router-instruction",
        onMouseUp: this.fnItemClick,
        onMouseLeave: this.fnItemOut,
        onMouseEnter: this.fnItemOver,
        key: this.props.id
<<<<<<< refs/remotes/origin/main
      }, _react["default"].createElement("div", {
        className: "c4g-router-instruction-image"
      }, _react["default"].createElement("img", {
        src: this.getInstructionIcon(this.props.imgPath),
        alt: ""
      })), _react["default"].createElement("div", {
        className: "c4g-router-instruction-text"
      }, this.props.instrText), _react["default"].createElement("div", {
=======
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-image"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.getInstructionIcon(this.props.imgPath),
        alt: ""
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-instruction-text"
      }, this.props.instrText), /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
        className: "c4g-router-instruction-distance"
      }, (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.instrDist * 1000)));
    }
  }, {
    key: "getInstructionIcon",
    value: function getInstructionIcon(intType) {
      var routerEngine = this.props.mapController.data.router_api_selection;

      switch (routerEngine) {
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
  return RouterInstruction;
}(_react.Component);

exports.RouterInstruction = RouterInstruction;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-instructions-container.jsx":
/*!******************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-instructions-container.jsx ***!
  \******************************************************************************/
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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "./Resources/public/js/components/c4g-router-instruction.jsx");

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./Resources/public/js/c4g-router-time-conversions.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterInstructionsContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterInstructionsContainer, _Component);

  var _super = _createSuper(RouterInstructionsContainer);

  function RouterInstructionsContainer(props) {
    (0, _classCallCheck2["default"])(this, RouterInstructionsContainer);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(RouterInstructionsContainer, [{
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
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("div", {
          className: this.props.className
        }, this.props.header, this.props.switcher, instructions.map(function (item, index) {
          return _react["default"].createElement(_c4gRouterInstruction.RouterInstruction, {
=======
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className
        }, this.props.header, this.props.switcher, instructions.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterInstruction.RouterInstruction, {
>>>>>>> Several version preps
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
  return RouterInstructionsContainer;
}(_react.Component);

exports.default = RouterInstructionsContainer;

/***/ })

}]);
<<<<<<< refs/remotes/origin/main
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtY29udGFpbmVyLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXJJbnN0cnVjdGlvbiIsInByb3BzIiwicm91dGVyV2F5U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJyb3V0ZXJIaW50U291cmNlIiwiY2xlYXIiLCJmZWF0dXJlIiwiY29vcmRpbmF0ZXMiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiY29vcmRMb25MYXQiLCJkYXRhUG9zIiwic3RyaW5nbG9ubGF0Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3Q29vcmQiLCJjdXJyZW50SGludEZlYXR1cmUiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsImFkZEZlYXR1cmUiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImdldFZpZXciLCJzZXRDZW50ZXIiLCJkYXRhU3RhcnQiLCJkYXRhRW5kIiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJzbGljZSIsInNldFN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwiY3VycmVudFpvb20iLCJnZXRab29tIiwiZml0IiwiYWZ0ZXJab29tIiwiZW5kWm9vbSIsIk1hdGgiLCJyb3VuZCIsInNldFpvb20iLCJmbkl0ZW1PdmVyIiwiYmluZCIsImZuSXRlbUNsaWNrIiwiZm5JdGVtT3V0IiwiaWQiLCJnZXRJbnN0cnVjdGlvbkljb24iLCJpbWdQYXRoIiwiaW5zdHJUZXh0IiwiaW5zdHJEaXN0IiwiaW50VHlwZSIsInJvdXRlckVuZ2luZSIsImRhdGEiLCJyb3V0ZXJfYXBpX3NlbGVjdGlvbiIsImdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIiLCJnZXRJbnN0cnVjdGlvbkljb25PUlMiLCJpbWFnZSIsIkNvbXBvbmVudCIsIlJvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lciIsImluc3RydWN0aW9ucyIsInRpbWUiLCJkaXN0YW5jZSIsInByb2ZpbGUiLCJyb3V0ZXJJbnN0cnVjdGlvbnMiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzd2l0Y2hlciIsIml0ZW0iLCJpbmRleCIsInR5cGUiLCJpbnN0cnVjdGlvbiIsImJlZ2luX3NoYXBlX2luZGV4IiwiZW5kX3NoYXBlX2luZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsaUI7Ozs7O0FBRVgsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQURpQixvR0FpQkwsWUFBWTtBQUN4QixVQUFJLEtBQUtBLEtBQUwsQ0FBV0MsZUFBWCxJQUE4QixLQUFLRCxLQUFMLENBQVdDLGVBQVgsQ0FBMkJDLFdBQTNCLEVBQWxDLEVBQTRFO0FBQzFFLGFBQUtGLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEJDLEtBQTVCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsV0FBM0IsR0FBeUMsQ0FBekMsQ0FBZDtBQUNBLFlBQUlJLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxXQUFSLEdBQXNCQyxjQUF0QixFQUFsQjtBQUNBLFlBQUlDLFdBQVcsR0FBRyxLQUFLVCxLQUFMLENBQVdVLE9BQTdCOztBQUNBLFlBQUlELFdBQUosRUFBaUI7QUFDZixjQUFJRSxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixHQUFsQixDQUFuQjtBQUNBRCxzQkFBWSxDQUFDLENBQUQsQ0FBWixHQUFrQkUsVUFBVSxDQUFDRixZQUFZ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b0UscUJBQVMsRUFBRUgsSUFBSSxDQUFDSixNQUFwRjtBQUE0RixlQUFHLEVBQUVLLEtBQWpHO0FBQXdHLGNBQUUsRUFBRUEsS0FBNUc7QUFBbUgseUJBQWEsRUFBRSxLQUFJLENBQUN6RSxLQUFMLENBQVdxQixhQUE3STtBQUE0SixxQkFBUyxFQUFFbUQsSUFBSSxDQUFDSSxpQkFBNUs7QUFBK0wsbUJBQU8sRUFBRUosSUFBSSxDQUFDSyxlQUE3TTtBQUE4TiwyQkFBZSxFQUFFLEtBQUksQ0FBQzdFLEtBQUwsQ0FBV0MsZUFBMVA7QUFBMlEsNEJBQWdCLEVBQUUsS0FBSSxDQUFDRCxLQUFMLENBQVdHO0FBQXhTLFlBQVA7QUFDRCxTQUZBLENBSEgsQ0FERjtBQVNEO0FBQ0Y7OztFQTlCc0QwRCxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtY29udGFpbmVyX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2V9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZywgUG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Zyb21Mb25MYXR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge1N0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVySW5zdHJ1Y3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZm5JdGVtT3ZlciA9IHRoaXMuZm5JdGVtT3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm5JdGVtQ2xpY2sgPSB0aGlzLmZuSXRlbUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mbkl0ZW1PdXQgPSB0aGlzLmZuSXRlbU91dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25cIn0gb25Nb3VzZVVwPXt0aGlzLmZuSXRlbUNsaWNrfSBvbk1vdXNlTGVhdmU9e3RoaXMuZm5JdGVtT3V0fSBvbk1vdXNlRW50ZXI9e3RoaXMuZm5JdGVtT3Zlcn0ga2V5PXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pbWFnZVwifT48aW1nIHNyYz17dGhpcy5nZXRJbnN0cnVjdGlvbkljb24odGhpcy5wcm9wcy5pbWdQYXRoKX0gYWx0PVwiXCIvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLXRleHRcIn0+e3RoaXMucHJvcHMuaW5zdHJUZXh0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLWRpc3RhbmNlXCJ9Pnt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5pbnN0ckRpc3QgKiAxMDAwKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgZm5JdGVtQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlICYmIHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB2YXIgY29vcmRMb25MYXQgPSB0aGlzLnByb3BzLmRhdGFQb3M7XG4gICAgICBpZiAoY29vcmRMb25MYXQpIHtcbiAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIobmV3Q29vcmQpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY29vcmRpbmF0ZXMgJiYgdGhpcy5wcm9wcy5kYXRhU3RhcnQgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgIGxldCBnZW9tID0gbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMuc2xpY2UodGhpcy5wcm9wcy5kYXRhU3RhcnQsIHRoaXMucHJvcHMuZGF0YUVuZCkpO1xuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBnZW9tXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50SGludEZlYXR1cmUuc2V0U3R5bGUoXG4gICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBsZXQgY3VycmVudFpvb20gPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdChnZW9tKTtcbiAgICAgICAgbGV0IGFmdGVyWm9vbSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgbGV0IGVuZFpvb20gPSBNYXRoLnJvdW5kKChjdXJyZW50Wm9vbSArIGFmdGVyWm9vbSkvMik7XG4gICAgICAgIGVuZFpvb20gPSAoZW5kWm9vbSA+IGFmdGVyWm9vbSkgPyBhZnRlclpvb20gOiBlbmRab29tO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRab29tKGVuZFpvb20pO1xuXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZuSXRlbU92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlICYmIHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkpIHtcbiAgICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICBsZXQgY29vcmRMb25MYXQgPSB0aGlzLnByb3BzLmRhdGFQb3M7XG4gICAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICAgIGxldCBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgICBsZXQgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRhdGFTdGFydCAmJiB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgTGluZVN0cmluZyhjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmbkl0ZW1PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gIH07XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uKGludFR5cGUpIHtcbiAgICBsZXQgcm91dGVyRW5naW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb247XG4gICAgc3dpdGNoIChyb3V0ZXJFbmdpbmUpIHtcbiAgICAgIGNhc2UgJzUnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbk9SUyhpbnRUeXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbiBpbnRlZ2VyIG51bWJlciBpbnRvIHRoZSBjb3JyZWN0IGluc3RydWN0aW9uIGljb24gKEdyYXBoaG9wcGVyIGljb25zKS5cbiAgICogQHBhcmFtIGludFR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTc6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjE6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIyOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNTpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjY6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI3OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlcihpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0zOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC03OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtOTg6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVySW5zdHJ1Y3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24uanN4XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZSwgdG9IdW1hblRpbWV9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcbiAgICBsZXQgdGltZSA9IFwiXCI7XG4gICAgbGV0IGRpc3RhbmNlID0gXCJcIjtcbiAgICBsZXQgcHJvZmlsZSA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMgPSB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGluc3RydWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluc3RydWN0aW9ucyBwcmVzZW50LCBjb250YWluZXIgb3BlblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgICAge2luc3RydWN0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckluc3RydWN0aW9uIGltZ1BhdGg9e2l0ZW0udHlwZX0gaW5zdHJUZXh0PXtpdGVtLmluc3RydWN0aW9ufSBpbnN0ckRpc3Q9e2l0ZW0ubGVuZ3RofSBrZXk9e2luZGV4fSBpZD17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZGF0YVN0YXJ0PXtpdGVtLmJlZ2luX3NoYXBlX2luZGV4fSBkYXRhRW5kPXtpdGVtLmVuZF9zaGFwZV9pbmRleH0gcm91dGVyV2F5U291cmNlPXt0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZX0gcm91dGVySGludFNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtY29udGFpbmVyLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXJJbnN0cnVjdGlvbiIsInByb3BzIiwicm91dGVyV2F5U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJyb3V0ZXJIaW50U291cmNlIiwiY2xlYXIiLCJmZWF0dXJlIiwiY29vcmRpbmF0ZXMiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiY29vcmRMb25MYXQiLCJkYXRhUG9zIiwic3RyaW5nbG9ubGF0Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3Q29vcmQiLCJjdXJyZW50SGludEZlYXR1cmUiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsImFkZEZlYXR1cmUiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImdldFZpZXciLCJzZXRDZW50ZXIiLCJkYXRhU3RhcnQiLCJkYXRhRW5kIiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJzbGljZSIsInNldFN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwiY3VycmVudFpvb20iLCJnZXRab29tIiwiZml0IiwiYWZ0ZXJab29tIiwiZW5kWm9vbSIsIk1hdGgiLCJyb3VuZCIsInNldFpvb20iLCJmbkl0ZW1PdmVyIiwiYmluZCIsImZuSXRlbUNsaWNrIiwiZm5JdGVtT3V0IiwiaWQiLCJnZXRJbnN0cnVjdGlvbkljb24iLCJpbWdQYXRoIiwiaW5zdHJUZXh0IiwiaW5zdHJEaXN0IiwiaW50VHlwZSIsInJvdXRlckVuZ2luZSIsImRhdGEiLCJyb3V0ZXJfYXBpX3NlbGVjdGlvbiIsImdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIiLCJnZXRJbnN0cnVjdGlvbkljb25PUlMiLCJpbWFnZSIsIkNvbXBvbmVudCIsIlJvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lciIsImluc3RydWN0aW9ucyIsInRpbWUiLCJkaXN0YW5jZSIsInByb2ZpbGUiLCJyb3V0ZXJJbnN0cnVjdGlvbnMiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzd2l0Y2hlciIsIml0ZW0iLCJpbmRleCIsInR5cGUiLCJpbnN0cnVjdGlvbiIsImJlZ2luX3NoYXBlX2luZGV4IiwiZW5kX3NoYXBlX2luZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsaUI7Ozs7O0FBRVgsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQURpQixvR0FpQkwsWUFBWTtBQUN4QixVQUFJLEtBQUtBLEtBQUwsQ0FBV0MsZUFBWCxJQUE4QixLQUFLRCxLQUFMLENBQVdDLGVBQVgsQ0FBMkJDLFdBQTNCLEVBQWxDLEVBQTRFO0FBQzFFLGFBQUtGLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEJDLEtBQTVCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsV0FBM0IsR0FBeUMsQ0FBekMsQ0FBZDtBQUNBLFlBQUlJLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxXQUFSLEdBQXNCQyxjQUF0QixFQUFsQjtBQUNBLFlBQUlDLFdBQVcsR0FBRyxLQUFLVCxLQUFMLENBQVdVLE9BQTdCOztBQUNBLFlBQUlELFdBQUosRUFBaUI7QUFDZixjQUFJRSxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixHQUFsQixDQUFuQjtBQUNBRCxzQkFBWSxDQUFDLENBQUQsQ0FBWixHQUFrQkUsVUFBVSxDQUFDRixZQUFZ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O0FBQW9FLHFCQUFTLEVBQUVILElBQUksQ0FBQ0osTUFBcEY7QUFBNEYsZUFBRyxFQUFFSyxLQUFqRztBQUF3RyxjQUFFLEVBQUVBLEtBQTVHO0FBQW1ILHlCQUFhLEVBQUUsS0FBSSxDQUFDekUsS0FBTCxDQUFXcUIsYUFBN0k7QUFBNEoscUJBQVMsRUFBRW1ELElBQUksQ0FBQ0ksaUJBQTVLO0FBQStMLG1CQUFPLEVBQUVKLElBQUksQ0FBQ0ssZUFBN007QUFBOE4sMkJBQWUsRUFBRSxLQUFJLENBQUM3RSxLQUFMLENBQVdDLGVBQTFQO0FBQTJRLDRCQUFnQixFQUFFLEtBQUksQ0FBQ0QsS0FBTCxDQUFXRztBQUF4UyxZQUFQO0FBQ0QsU0FGQSxDQUhILENBREY7QUFTRDtBQUNGOzs7RUE5QnNEMEQsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lcl9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0xpbmVTdHJpbmcsIFBvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtmcm9tTG9uTGF0fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckluc3RydWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZuSXRlbU92ZXIgPSB0aGlzLmZuSXRlbU92ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZuSXRlbUNsaWNrID0gdGhpcy5mbkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm5JdGVtT3V0ID0gdGhpcy5mbkl0ZW1PdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uXCJ9IG9uTW91c2VVcD17dGhpcy5mbkl0ZW1DbGlja30gb25Nb3VzZUxlYXZlPXt0aGlzLmZuSXRlbU91dH0gb25Nb3VzZUVudGVyPXt0aGlzLmZuSXRlbU92ZXJ9IGtleT17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taW1hZ2VcIn0+PGltZyBzcmM9e3RoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uKHRoaXMucHJvcHMuaW1nUGF0aCl9IGFsdD1cIlwiLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10ZXh0XCJ9Pnt0aGlzLnByb3BzLmluc3RyVGV4dH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1kaXN0YW5jZVwifT57dG9IdW1hbkRpc3RhbmNlKHRoaXMucHJvcHMuaW5zdHJEaXN0ICogMTAwMCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGZuSXRlbUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZSAmJiB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgdmFyIGNvb3JkTG9uTGF0ID0gdGhpcy5wcm9wcy5kYXRhUG9zO1xuICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgIGxldCBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICBsZXQgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNvb3JkaW5hdGVzICYmIHRoaXMucHJvcHMuZGF0YVN0YXJ0ICYmIHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICBsZXQgZ2VvbSA9IG5ldyBMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLnNsaWNlKHRoaXMucHJvcHMuZGF0YVN0YXJ0LCB0aGlzLnByb3BzLmRhdGFFbmQpKTtcbiAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogZ2VvbVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGN1cnJlbnRab29tID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5maXQoZ2VvbSk7XG4gICAgICAgIGxldCBhZnRlclpvb20gPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgICAgIGxldCBlbmRab29tID0gTWF0aC5yb3VuZCgoY3VycmVudFpvb20gKyBhZnRlclpvb20pLzIpO1xuICAgICAgICBlbmRab29tID0gKGVuZFpvb20gPiBhZnRlclpvb20pID8gYWZ0ZXJab29tIDogZW5kWm9vbTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Wm9vbShlbmRab29tKTtcblxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmbkl0ZW1PdmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZSAmJiB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpKSB7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgbGV0IGNvb3JkTG9uTGF0ID0gdGhpcy5wcm9wcy5kYXRhUG9zO1xuICAgICAgICBpZiAoY29vcmRMb25MYXQpIHtcbiAgICAgICAgICBsZXQgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgICAgbGV0IG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kYXRhU3RhcnQgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMuc2xpY2UodGhpcy5wcm9wcy5kYXRhU3RhcnQsIHRoaXMucHJvcHMuZGF0YUVuZCkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICB9O1xuXG4gIGdldEluc3RydWN0aW9uSWNvbihpbnRUeXBlKSB7XG4gICAgbGV0IHJvdXRlckVuZ2luZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uO1xuICAgIHN3aXRjaCAocm91dGVyRW5naW5lKSB7XG4gICAgICBjYXNlICc1JzpcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYShpbnRUeXBlKTtcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlcihpbnRUeXBlKTtcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0cnVjdGlvbkljb25PUlMoaW50VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYW4gaW50ZWdlciBudW1iZXIgaW50byB0aGUgY29ycmVjdCBpbnN0cnVjdGlvbiBpY29uIChHcmFwaGhvcHBlciBpY29ucykuXG4gICAqIEBwYXJhbSBpbnRUeXBlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYShpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwiZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE1OlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE3OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxODpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE5OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIxOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMjpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjM6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjU6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI2OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNzpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGltYWdlID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTI6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtNzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTk4OlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTk6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG4gIGdldEluc3RydWN0aW9uSWNvbk9SUyhpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckluc3RydWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLWluc3RydWN0aW9uLmpzeFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2UsIHRvSHVtYW5UaW1lfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gW107XG4gICAgbGV0IHRpbWUgPSBcIlwiO1xuICAgIGxldCBkaXN0YW5jZSA9IFwiXCI7XG4gICAgbGV0IHByb2ZpbGUgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zICYmIHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zLmluc3RydWN0aW9ucykge1xuICAgICAgaW5zdHJ1Y3Rpb25zID0gdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChpbnN0cnVjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnN0cnVjdGlvbnMgcHJlc2VudCwgY29udGFpbmVyIG9wZW5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnN3aXRjaGVyfVxuICAgICAgICAgIHtpbnN0cnVjdGlvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJJbnN0cnVjdGlvbiBpbWdQYXRoPXtpdGVtLnR5cGV9IGluc3RyVGV4dD17aXRlbS5pbnN0cnVjdGlvbn0gaW5zdHJEaXN0PXtpdGVtLmxlbmd0aH0ga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGRhdGFTdGFydD17aXRlbS5iZWdpbl9zaGFwZV9pbmRleH0gZGF0YUVuZD17aXRlbS5lbmRfc2hhcGVfaW5kZXh9IHJvdXRlcldheVNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2V9IHJvdXRlckhpbnRTb3VyY2U9e3RoaXMucHJvcHMucm91dGVySGludFNvdXJjZX0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> Several version preps
