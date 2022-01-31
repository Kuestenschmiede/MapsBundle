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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");

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
          })); // let currentZoom = this.props.mapController.map.getView().getZoom();


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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "./src/Resources/public/js/components/c4g-router-instruction.jsx");

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");

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
  return RouterInstructionsContainer;
}(_react.Component);

exports["default"] = RouterInstructionsContainer;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUE7Ozs7O0FBRVgsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQURpQixvR0FpQkwsWUFBWTtBQUN4QixVQUFJLEtBQUtBLEtBQUwsQ0FBV0MsZUFBWCxJQUE4QixLQUFLRCxLQUFMLENBQVdDLGVBQVgsQ0FBMkJDLFdBQTNCLEVBQWxDLEVBQTRFO0FBQzFFLGFBQUtGLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEJDLEtBQTVCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsV0FBM0IsR0FBeUMsQ0FBekMsQ0FBZDtBQUNBLFlBQUlJLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxXQUFSLEdBQXNCQyxjQUF0QixFQUFsQjtBQUNBLFlBQUlDLFdBQVcsR0FBRyxLQUFLVCxLQUFMLENBQVdVLE9BQTdCOztBQUNBLFlBQUlELFdBQUosRUFBaUI7QUFDZixjQUFJRSxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixHQUFsQixDQUFuQjtBQUNBRCxVQUFBQSxZQUFZLENBQUMsQ0FBRCxDQUFaLEdBQWtCRSxVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FBNUI7QUFDQUEsVUFBQUEsWUFBWSxDQUFDLENBQUQsQ0FBWixHQUFrQkUsVUFBVSxDQUFDRixZQUFZLENBQUMsQ0FBRCxDQUFiLENBQTVCO0FBQ0EsY0FBSUcsUUFBUSxHQUFHLHNCQUFXSCxZQUFYLENBQWY7QUFDQSxjQUFJSSxrQkFBa0IsR0FBRyxJQUFJQyxXQUFKLENBQVk7QUFDbkNDLFlBQUFBLFFB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Q2pDLDhCQUFPLGdDQUFDLHVDQUFEO0FBQW1CLG1CQUFPLEVBQUVELElBQUksQ0FBQ0UsSUFBakM7QUFBdUMscUJBQVMsRUFBRUYsSUFBSSxDQUFDRyxXQUF2RDtBQUFvRSxxQkFBUyxFQUFFSCxJQUFJLENBQUMzQixNQUFwRjtBQUE0RixlQUFHLEVBQUU0QixLQUFqRztBQUF3RyxjQUFFLEVBQUVBLEtBQTVHO0FBQW1ILHlCQUFhLEVBQUUsS0FBSSxDQUFDNUUsS0FBTCxDQUFXcUIsYUFBN0k7QUFBNEoscUJBQVMsRUFBRXNELElBQUksQ0FBQ0ksaUJBQTVLO0FBQStMLG1CQUFPLEVBQUVKLElBQUksQ0FBQ0ssZUFBN007QUFBOE4sMkJBQWUsRUFBRSxLQUFJLENBQUNoRixLQUFMLENBQVdDLGVBQTFQO0FBQTJRLDRCQUFnQixFQUFFLEtBQUksQ0FBQ0QsS0FBTCxDQUFXRztBQUF4UyxZQUFQO0FBQ0QsU0FGQSxDQUhILENBREY7QUFTRDtBQUNGOzs7RUE5QnNEOEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtMaW5lU3RyaW5nLCBQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7ZnJvbUxvbkxhdH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7U3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5mbkl0ZW1PdmVyID0gdGhpcy5mbkl0ZW1PdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mbkl0ZW1DbGljayA9IHRoaXMuZm5JdGVtQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmZuSXRlbU91dCA9IHRoaXMuZm5JdGVtT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvblwifSBvbk1vdXNlVXA9e3RoaXMuZm5JdGVtQ2xpY2t9IG9uTW91c2VMZWF2ZT17dGhpcy5mbkl0ZW1PdXR9IG9uTW91c2VFbnRlcj17dGhpcy5mbkl0ZW1PdmVyfSBrZXk9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLWltYWdlXCJ9PjxpbWcgc3JjPXt0aGlzLmdldEluc3RydWN0aW9uSWNvbih0aGlzLnByb3BzLmltZ1BhdGgpfSBhbHQ9XCJcIi8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tdGV4dFwifT57dGhpcy5wcm9wcy5pbnN0clRleHR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tZGlzdGFuY2VcIn0+e3RvSHVtYW5EaXN0YW5jZSh0aGlzLnByb3BzLmluc3RyRGlzdCAqIDEwMDApfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBmbkl0ZW1DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHZhciBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICBsZXQgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDb29yZCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjb29yZGluYXRlcyAmJiAodGhpcy5wcm9wcy5kYXRhU3RhcnQgfHwgdGhpcy5wcm9wcy5kYXRhU3RhcnQgPT09IDApICYmIHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICBsZXQgZ2VvbTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YVN0YXJ0ID09PSB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgICBnZW9tID0gbmV3IFBvaW50KGNvb3JkaW5hdGVzW3RoaXMucHJvcHMuZGF0YVN0YXJ0XSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKTtcbiAgICAgICAgICBnZW9tID0gbmV3IExpbmVTdHJpbmcobmV3Q29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGdlb21cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIC8vIGxldCBjdXJyZW50Wm9vbSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgbGV0IHdpZHRoID0galF1ZXJ5KFwiLmM0Zy1yb3V0ZXItY29udGFpbmVyLXJpZ2h0XCIpLmNzcygnd2lkdGgnKTtcbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgd2lkdGggPSB3aWR0aC5zcGxpdChcIi5cIik7XG4gICAgICAgICAgd2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdIDogd2lkdGg7XG4gICAgICAgICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyAgNTA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSA1MDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWF4Wm9vbSA9IHBhcnNlSW50KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5tYXhab29tKSB8fCAyMjtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGdlb20sIHtcbiAgICAgICAgICBwYWRkaW5nOiBbNTAsd2lkdGgsNTAsNTBdLFxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgbWF4Wm9vbTogbWF4Wm9vbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgIGxldCBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLnByb3BzLmRhdGFTdGFydCB8fCB0aGlzLnByb3BzLmRhdGFTdGFydCA9PT0gMCkgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmU7XG4gICAgICAgICAgICBpZiAobmV3Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBMaW5lU3RyaW5nKG5ld0Nvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICB9O1xuXG4gIGdldEluc3RydWN0aW9uSWNvbihpbnRUeXBlKSB7XG4gICAgbGV0IHJvdXRlckVuZ2luZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uO1xuICAgIHN3aXRjaCAocm91dGVyRW5naW5lKSB7XG4gICAgICBjYXNlICc1JzpcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYShpbnRUeXBlKTtcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlcihpbnRUeXBlKTtcbiAgICAgIGNhc2UgJzInOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0cnVjdGlvbkljb25PUlMoaW50VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYW4gaW50ZWdlciBudW1iZXIgaW50byB0aGUgY29ycmVjdCBpbnN0cnVjdGlvbiBpY29uIChHcmFwaGhvcHBlciBpY29ucykuXG4gICAqIEBwYXJhbSBpbnRUeXBlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYShpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwiZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE1OlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE3OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxODpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE5OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIxOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMjpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjM6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjU6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI2OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNzpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGltYWdlID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTI6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtNzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTk4OlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTk6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG4gIGdldEluc3RydWN0aW9uSWNvbk9SUyhpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckluc3RydWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLWluc3RydWN0aW9uLmpzeFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2UsIHRvSHVtYW5UaW1lfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gW107XG4gICAgbGV0IHRpbWUgPSBcIlwiO1xuICAgIGxldCBkaXN0YW5jZSA9IFwiXCI7XG4gICAgbGV0IHByb2ZpbGUgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zICYmIHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zLmluc3RydWN0aW9ucykge1xuICAgICAgaW5zdHJ1Y3Rpb25zID0gdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChpbnN0cnVjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbnN0cnVjdGlvbnMgcHJlc2VudCwgY29udGFpbmVyIG9wZW5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnN3aXRjaGVyfVxuICAgICAgICAgIHtpbnN0cnVjdGlvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJJbnN0cnVjdGlvbiBpbWdQYXRoPXtpdGVtLnR5cGV9IGluc3RyVGV4dD17aXRlbS5pbnN0cnVjdGlvbn0gaW5zdHJEaXN0PXtpdGVtLmxlbmd0aH0ga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGRhdGFTdGFydD17aXRlbS5iZWdpbl9zaGFwZV9pbmRleH0gZGF0YUVuZD17aXRlbS5lbmRfc2hhcGVfaW5kZXh9IHJvdXRlcldheVNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2V9IHJvdXRlckhpbnRTb3VyY2U9e3RoaXMucHJvcHMucm91dGVySGludFNvdXJjZX0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJvdXRlckluc3RydWN0aW9uIiwicHJvcHMiLCJyb3V0ZXJXYXlTb3VyY2UiLCJnZXRGZWF0dXJlcyIsInJvdXRlckhpbnRTb3VyY2UiLCJjbGVhciIsImZlYXR1cmUiLCJjb29yZGluYXRlcyIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJjb29yZExvbkxhdCIsImRhdGFQb3MiLCJzdHJpbmdsb25sYXQiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJuZXdDb29yZCIsImN1cnJlbnRIaW50RmVhdHVyZSIsIkZlYXR1cmUiLCJnZW9tZXRyeSIsIlBvaW50IiwiYWRkRmVhdHVyZSIsIm9wdGlvbnMiLCJtYXBDb250cm9sbGVyIiwibWFwIiwiZ2V0VmlldyIsInNldENlbnRlciIsImRhdGFTdGFydCIsImRhdGFFbmQiLCJnZW9tIiwibmV3Q29vcmRpbmF0ZXMiLCJzbGljZSIsIkxpbmVTdHJpbmciLCJzZXRTdHlsZSIsIlN0eWxlIiwic3Ryb2tlIiwiU3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsImpRdWVyeSIsImNzcyIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwibWF4Wm9vbSIsImRhdGEiLCJzdGFyYm9hcmQiLCJmaXQiLCJwYWRkaW5nIiwiZHVyYXRpb24iLCJsZW5ndGgiLCJmbkl0ZW1PdmVyIiwiYmluZCIsImZuSXRlbUNsaWNrIiwiZm5JdGVtT3V0IiwiaWQiLCJnZXRJbnN0cnVjdGlvbkljb24iLCJpbWdQYXRoIiwiaW5zdHJUZXh0IiwiaW5zdHJEaXN0IiwiaW50VHlwZSIsInJvdXRlckVuZ2luZSIsInJvdXRlcl9hcGlfc2VsZWN0aW9uIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEiLCJnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlciIsImdldEluc3RydWN0aW9uSWNvbk9SUyIsImltYWdlIiwiQ29tcG9uZW50IiwiUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIiwiaW5zdHJ1Y3Rpb25zIiwidGltZSIsImRpc3RhbmNlIiwicHJvZmlsZSIsInJvdXRlckluc3RydWN0aW9ucyIsImNsYXNzTmFtZSIsImhlYWRlciIsInN3aXRjaGVyIiwiaXRlbSIsImluZGV4IiwidHlwZSIsImluc3RydWN0aW9uIiwiYmVnaW5fc2hhcGVfaW5kZXgiLCJlbmRfc2hhcGVfaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9