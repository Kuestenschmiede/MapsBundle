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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWluc3RydWN0aW9ucy1jb250YWluZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUE7Ozs7O0VBRVgsMkJBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTtJQUNqQiwwQkFBTUEsS0FBTjtJQURpQixnR0FpQkwsWUFBWTtNQUN4QixJQUFJLEtBQUtBLEtBQUwsQ0FBV0MsZUFBWCxJQUE4QixLQUFLRCxLQUFMLENBQVdDLGVBQVgsQ0FBMkJDLFdBQTNCLEVBQWxDLEVBQTRFO1FBQzFFLEtBQUtGLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEJDLEtBQTVCO1FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsV0FBM0IsR0FBeUMsQ0FBekMsQ0FBZDtRQUNBLElBQUlJLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxXQUFSLEdBQXNCQyxjQUF0QixFQUFsQjtRQUNBLElBQUlDLFdBQVcsR0FBRyxLQUFLVCxLQUFMLENBQVdVLE9BQTdCOztRQUNBLElBQUlELFdBQUosRUFBaUI7VUFDZixJQUFJRSxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixHQUFsQixDQUFuQjtVQUNBRCxZQUFZLENBQUMsQ0FBRCxDQUFaLEdBQWtCRSxVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FBNUI7VUFDQUEsWUFBWSxDQUFDLENBQUQsQ0FBWixHQUFrQkUsVUFBVSxDQUFDRixZQUFZLENBQUMsQ0FBRCxDQUFiLENBQTVCO1VBQ0EsSUFBSUcsUUFBUSxHQUFHLElBQUFDLGdCQUFBLEVBQVdKLFlBQVgsQ0FBZjtVQUNBLElBQUlLLGtCQUFrQixHQUFHLElBQUlDLFdBQUosQ0FBWTtZQUNuQ0MsUUFBUSxFQUFFLElBQUlDLFdBQUosQ0FBVUwsUUFBVjtVQUR5QixDQUFaLENBQXpCO1VBR0EsS0FBS2QsS0FBTCxDQUFXRyxnQkFBWCxDQUE0QmlCLFVBQTVCLENBQXVDSixrQkFBdkM7VUFDQSxLQUFLaEIsS0FBTCxDQUFXcUIsT0FBWCxDQUFtQkMsYUFBbkIsQ0FBaUNDLEdBQWpDLENBQXFDQyxPQUFyQyxHQUErQ0MsU0FBL0MsQ0FBeURYLFFBQXpEO1FBQ0QsQ0FWRCxNQVdLLElBQUlSLFdBQVcsS0FBSyxLQUFLTixLQUFMLENBQVcwQixTQUFYLElBQXdCLEtBQUsxQixLQUFMLENBQVcwQixTQUFYLEtBQXlCLENBQXRELENBQVgsSUFBdUUsS0FBSzFCLEtBQUwsQ0FBVzJCLE9BQXRGLEVBQStGO1VBQ2xHLElBQUlDLElBQUo7O1VBQ0EsSUFBSSxLQUFLNUIsS0FBTCxDQUFXMEIsU0FBWCxLQUF5QixLQUFLMUIsS0FBTCxDQUFXMkIsT0FBeEMsRUFBaUQ7WUFDL0NDLElBQUksR0FBRyxJQUFJVCxXQUFKLENBQVViLFdBQVcsQ0FBQyxLQUFLTixLQUFMLENBQVcwQixTQUFaLENBQXJCLENBQVA7VUFDRCxDQUZELE1BR0s7WUFDSCxJQUFJRyxjQUFjLEdBQUd2QixXQUFXLENBQUN3QixLQUFaLENBQWtCLEtBQUs5QixLQUFMLENBQVcwQixTQUE3QixFQUF3QyxLQUFLMUIsS0FBTCxDQUFXMkIsT0FBbkQsQ0FBckI7WUFDQUMsSUFBSSxHQUFHLElBQUlHLGdCQUFKLENBQWVGLGNBQWYsQ0FBUDtVQUNEOztVQUNELElBQUliLG1CQUFrQixHQUFHLElBQUlDLFdBQUosQ0FBWTtZQUNuQ0MsUUFBUSxFQUFFVTtVQUR5QixDQUFaLENBQXpCOztVQUdBWixtQkFBa0IsQ0FBQ2dCLFFBQW5CLENBQ0ksSUFBSUMsWUFBSixDQUFVO1lBQ1JDLE1BQU0sRUFBRSxJQUFJQyxhQUFKLENBQVc7Y0FDakJDLEtBQUssRUFBRSxvQkFEVTtjQUVqQkMsS0FBSyxFQUFFO1lBRlUsQ0FBWDtVQURBLENBQVYsQ0FESixFQVprRyxDQW9CbEc7OztVQUNBLEtBQUtyQyxLQUFMLENBQVdHLGdCQUFYLENBQTRCaUIsVUFBNUIsQ0FBdUNKLG1CQUF2QztVQUNBLElBQUlxQixLQUFLLEdBQUdDLE1BQU0sQ0FBQyw2QkFBRCxDQUFOLENBQXNDQyxHQUF0QyxDQUEwQyxPQUExQyxDQUFaOztVQUNBLElBQUlGLEtBQUosRUFBVztZQUNUQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ3pCLEtBQU4sQ0FBWSxHQUFaLENBQVI7WUFDQXlCLEtBQUssR0FBR0csS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsSUFBdUJBLEtBQUssQ0FBQyxDQUFELENBQTVCLEdBQWtDQSxLQUExQztZQUNBQSxLQUFLLEdBQUdLLFFBQVEsQ0FBQ0wsS0FBRCxDQUFSLEdBQW1CLEVBQTNCO1VBQ0QsQ0FKRCxNQUtLO1lBQ0hBLEtBQUssR0FBRyxFQUFSO1VBQ0Q7O1VBQ0QsSUFBSU0sT0FBTyxHQUFHRCxRQUFRLENBQUMsS0FBSzFDLEtBQUwsQ0FBV3NCLGFBQVgsQ0FBeUJzQixJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NGLE9BQXpDLENBQVIsSUFBNkQsRUFBM0U7VUFDQSxLQUFLM0MsS0FBTCxDQUFXc0IsYUFBWCxDQUF5QkMsR0FBekIsQ0FBNkJDLE9BQTdCLEdBQXVDc0IsR0FBdkMsQ0FBMkNsQixJQUEzQyxFQUFpRDtZQUMvQ21CLE9BQU8sRUFBRSxDQUFDLEVBQUQsRUFBSVYsS0FBSixFQUFVLEVBQVYsRUFBYSxFQUFiLENBRHNDO1lBRS9DVyxRQUFRLEVBQUUsR0FGcUM7WUFHL0NMLE9BQU8sRUFBRUE7VUFIc0MsQ0FBakQ7UUFLRDtNQUNGO0lBQ0YsQ0F6RWtCO0lBQUEsK0ZBMkVOLFlBQVk7TUFDdkIsSUFBSSxLQUFLM0MsS0FBTCxDQUFXQyxlQUFYLElBQThCLEtBQUtELEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsV0FBM0IsRUFBbEMsRUFBNEU7UUFDMUUsSUFBSUcsT0FBTyxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsV0FBM0IsR0FBeUMsQ0FBekMsQ0FBZDs7UUFDQSxJQUFJRyxPQUFKLEVBQWE7VUFDWCxLQUFLTCxLQUFMLENBQVdHLGdCQUFYLENBQTRCQyxLQUE1QjtVQUNBLElBQUlLLFdBQVcsR0FBRyxLQUFLVCxLQUFMLENBQVdVLE9BQTdCOztVQUNBLElBQUlELFdBQUosRUFBaUI7WUFDZixJQUFJRSxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixHQUFsQixDQUFuQjtZQUNBRCxZQUFZLENBQUMsQ0FBRCxDQUFaLEdBQWtCRSxVQUFVLENBQUNGLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FBNUI7WUFDQUEsWUFBWSxDQUFDLENBQUQsQ0FBWixHQUFrQkUsVUFBVSxDQUFDRixZQUFZLENBQUMsQ0FBRCxDQUFiLENBQTVCO1lBQ0EsSUFBSUcsUUFBUSxHQUFHLElBQUFDLGdCQUFBLEVBQVdKLFlBQVgsQ0FBZjtZQUNBLElBQUlLLGtCQUFrQixHQUFHLElBQUlDLFdBQUosQ0FBWTtjQUNuQ0MsUUFBUSxFQUFFLElBQUlDLFdBQUosQ0FBVUwsUUFBVjtZQUR5QixDQUFaLENBQXpCO1lBR0EsS0FBS2QsS0FBTCxDQUFXRyxnQkFBWCxDQUE0QmlCLFVBQTVCLENBQXVDSixrQkFBdkM7VUFDRCxDQVRELE1BU08sSUFBSSxDQUFDLEtBQUtoQixLQUFMLENBQVcwQixTQUFYLElBQXdCLEtBQUsxQixLQUFMLENBQVcwQixTQUFYLEtBQXlCLENBQWxELEtBQXdELEtBQUsxQixLQUFMLENBQVcyQixPQUF2RSxFQUFnRjtZQUNyRixJQUFJckIsV0FBVyxHQUFHRCxPQUFPLENBQUNFLFdBQVIsR0FBc0JDLGNBQXRCLEVBQWxCOztZQUNBLElBQUlGLFdBQUosRUFBaUI7Y0FDZixJQUFJdUIsY0FBYyxHQUFHdkIsV0FBVyxDQUFDd0IsS0FBWixDQUFrQixLQUFLOUIsS0FBTCxDQUFXMEIsU0FBN0IsRUFBd0MsS0FBSzFCLEtBQUwsQ0FBVzJCLE9BQW5ELENBQXJCOztjQUNBLElBQUlYLG9CQUFKOztjQUNBLElBQUlhLGNBQWMsQ0FBQ29CLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7Z0JBQy9CakMsb0JBQWtCLEdBQUcsSUFBSUMsV0FBSixDQUFZO2tCQUMvQkMsUUFBUSxFQUFFLElBQUlDLFdBQUosQ0FBVVUsY0FBVjtnQkFEcUIsQ0FBWixDQUFyQjtjQUdELENBSkQsTUFLSztnQkFDSGIsb0JBQWtCLEdBQUcsSUFBSUMsV0FBSixDQUFZO2tCQUMvQkMsUUFBUSxFQUFFLElBQUlhLGdCQUFKLENBQWVGLGNBQWY7Z0JBRHFCLENBQVosQ0FBckI7Y0FHRDs7Y0FDRGIsb0JBQWtCLENBQUNnQixRQUFuQixDQUNJLElBQUlDLFlBQUosQ0FBVTtnQkFDUkMsTUFBTSxFQUFFLElBQUlDLGFBQUosQ0FBVztrQkFDakJDLEtBQUssRUFBRSxvQkFEVTtrQkFFakJDLEtBQUssRUFBRTtnQkFGVSxDQUFYO2NBREEsQ0FBVixDQURKOztjQVFBLEtBQUtyQyxLQUFMLENBQVdHLGdCQUFYLENBQTRCaUIsVUFBNUIsQ0FBdUNKLG9CQUF2QztZQUNEO1VBQ0Y7UUFDRjtNQUNGO0lBQ0YsQ0F0SGtCO0lBQUEsOEZBd0hQLFlBQVk7TUFDdEIsS0FBS2hCLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEJDLEtBQTVCO0lBQ0QsQ0ExSGtCO0lBRWpCLE1BQUs4QyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLGdEQUFsQjtJQUNBLE1BQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsZ0RBQW5CO0lBQ0EsTUFBS0UsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVGLElBQWYsZ0RBQWpCO0lBSmlCO0VBS2xCOzs7O1dBRUQsa0JBQVM7TUFDUCxvQkFDRTtRQUFLLFNBQVMsRUFBRSx3QkFBaEI7UUFBMEMsU0FBUyxFQUFFLEtBQUtDLFdBQTFEO1FBQXVFLFlBQVksRUFBRSxLQUFLQyxTQUExRjtRQUFxRyxZQUFZLEVBQUUsS0FBS0gsVUFBeEg7UUFBb0ksR0FBRyxFQUFFLEtBQUtsRCxLQUFMLENBQVdzRDtNQUFwSixnQkFDRTtRQUFLLFNBQVMsRUFBRTtNQUFoQixnQkFBZ0Q7UUFBSyxHQUFHLEVBQUUsS0FBS0Msa0JBQUwsQ0FBd0IsS0FBS3ZELEtBQUwsQ0FBV3dELE9BQW5DLENBQVY7UUFBdUQsR0FBRyxFQUFDO01BQTNELEVBQWhELENBREYsZUFFRTtRQUFLLFNBQVMsRUFBRTtNQUFoQixHQUFnRCxLQUFLeEQsS0FBTCxDQUFXeUQsU0FBM0QsQ0FGRixlQUdFO1FBQUssU0FBUyxFQUFFO01BQWhCLEdBQW9ELElBQUFDLHlDQUFBLEVBQWdCLEtBQUsxRCxLQUFMLENBQVcyRCxTQUFYLEdBQXVCLElBQXZDLENBQXBELENBSEYsQ0FERjtJQU9EOzs7V0E2R0QsNEJBQW1CQyxPQUFuQixFQUE0QjtNQUMxQixJQUFJQyxZQUFZLEdBQUcsS0FBSzdELEtBQUwsQ0FBV3NCLGFBQVgsQ0FBeUJzQixJQUF6QixDQUE4QmtCLG9CQUFqRDs7TUFDQSxRQUFRRCxZQUFSO1FBQ0UsS0FBSyxHQUFMO1FBQ0EsS0FBSyxHQUFMO1VBQ0UsT0FBTyxLQUFLRSwwQkFBTCxDQUFnQ0gsT0FBaEMsQ0FBUDs7UUFDRixLQUFLLEdBQUw7VUFDRSxPQUFPLEtBQUtJLDZCQUFMLENBQW1DSixPQUFuQyxDQUFQOztRQUNGLEtBQUssR0FBTDtVQUNFLE9BQU8sS0FBS0sscUJBQUwsQ0FBMkJMLE9BQTNCLENBQVA7TUFQSjtJQVNEO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLG9DQUEyQkEsT0FBM0IsRUFBb0M7TUFDbEMsSUFBSU0sS0FBSjs7TUFDQSxRQUFRTixPQUFSO1FBQ0UsS0FBSyxDQUFMO1VBQ0VNLEtBQUssR0FBRyxhQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxVQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxVQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxVQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxZQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxZQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxZQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxjQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxjQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxrQkFBUjtVQUNBOztRQUNGLEtBQUssRUFBTDtVQUNFQSxLQUFLLEdBQUcsZ0JBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGlCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxZQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxZQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxnQkFBUjtVQUNBOztRQUNGLEtBQUssRUFBTDtVQUNFQSxLQUFLLEdBQUcsZUFBUjtVQUNBOztRQUNGLEtBQUssRUFBTDtVQUNFQSxLQUFLLEdBQUcsaUJBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGNBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGtCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxpQkFBUjtVQUNBOztRQUNGLEtBQUssRUFBTDtVQUNFQSxLQUFLLEdBQUcsa0JBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGlCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxjQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxrQkFBUjtVQUNBOztRQUNGLEtBQUssRUFBTDtVQUNFQSxLQUFLLEdBQUcsaUJBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGNBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGlCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxpQkFBUjtVQUNBOztRQUNGO1VBQ0VBLEtBQUssR0FBRyxhQUFSO1VBQ0E7TUF2Rko7O01BMEZBLE9BQU8sNENBQTRDQSxLQUFuRDtJQUNEOzs7V0FFRCx1Q0FBOEJOLE9BQTlCLEVBQXVDO01BQ3JDLElBQUlNLEtBQUo7O01BQ0EsUUFBUU4sT0FBUjtRQUNFLEtBQUssQ0FBTDtVQUNFTSxLQUFLLEdBQUcsY0FBUjtVQUNBOztRQUNGLEtBQUssQ0FBQyxDQUFOO1VBQ0VBLEtBQUssR0FBRyxlQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxnQkFBUjtVQUNBOztRQUNGLEtBQUssQ0FBQyxDQUFOO1VBQ0VBLEtBQUssR0FBRyxlQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxnQkFBUjtVQUNBOztRQUNGLEtBQUssQ0FBQyxDQUFOO1VBQ0VBLEtBQUssR0FBRyxnQkFBUjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxLQUFLLEdBQUcsaUJBQVI7VUFDQTs7UUFDRixLQUFLLENBQUMsQ0FBTjtVQUNFQSxLQUFLLEdBQUcsaUJBQVI7VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsS0FBSyxHQUFHLGtCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxpQkFBUjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxLQUFLLEdBQUcsWUFBUjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxLQUFLLEdBQUcsWUFBUjtVQUNBOztRQUNGLEtBQUssQ0FBQyxFQUFOO1VBQ0VBLEtBQUssR0FBRyxZQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxVQUFSO1VBQ0E7TUExQ0o7O01BNENBLE9BQU8sNENBQTRDQSxLQUFuRDtJQUNEOzs7V0FFRCwrQkFBc0JOLE9BQXRCLEVBQStCO01BQzdCLElBQUlNLEtBQUo7O01BQ0EsUUFBUU4sT0FBUjtRQUNFLEtBQUssQ0FBTDtVQUNFTSxLQUFLLEdBQUcsZUFBUjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxLQUFLLEdBQUcsZ0JBQVI7VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsS0FBSyxHQUFHLGdCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxpQkFBUjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxLQUFLLEdBQUcsaUJBQVI7VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsS0FBSyxHQUFHLGtCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxjQUFSO1VBQ0E7O1FBQ0YsS0FBSyxDQUFMO1VBQ0VBLEtBQUssR0FBRyxpQkFBUjtVQUNBOztRQUNGLEtBQUssQ0FBTDtVQUNFQSxLQUFLLEdBQUcsaUJBQVI7VUFDQTs7UUFDRixLQUFLLENBQUw7VUFDRUEsS0FBSyxHQUFHLFlBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLFlBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLFVBQVI7VUFDQTs7UUFDRixLQUFLLEVBQUw7VUFDRUEsS0FBSyxHQUFHLGlCQUFSO1VBQ0E7O1FBQ0YsS0FBSyxFQUFMO1VBQ0VBLEtBQUssR0FBRyxrQkFBUjtVQUNBO01BMUNKOztNQTZDQSxPQUFPLDRDQUE0Q0EsS0FBbkQ7SUFDRDs7O0VBaFZvQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkM7Ozs7O0VBRW5CLHFDQUFZcEUsS0FBWixFQUFtQjtJQUFBO0lBQUEseUJBQ1hBLEtBRFc7RUFFbEI7Ozs7V0FFRCxrQkFBUztNQUFBOztNQUNQLElBQUlxRSxZQUFZLEdBQUcsRUFBbkI7TUFDQSxJQUFJQyxJQUFJLEdBQUcsRUFBWDtNQUNBLElBQUlDLFFBQVEsR0FBRyxFQUFmO01BQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7O01BRUEsSUFBSSxLQUFLeEUsS0FBTCxDQUFXeUUsa0JBQVgsSUFBaUMsS0FBS3pFLEtBQUwsQ0FBV3lFLGtCQUFYLENBQThCSixZQUFuRSxFQUFpRjtRQUMvRUEsWUFBWSxHQUFHLEtBQUtyRSxLQUFMLENBQVd5RSxrQkFBWCxDQUE4QkosWUFBN0M7TUFDRDs7TUFFRCxJQUFJQSxZQUFZLENBQUNwQixNQUFiLEtBQXdCLENBQTVCLEVBQStCO1FBQzdCLE9BQVEsRUFBUjtNQUNELENBRkQsTUFFTztRQUNMO1FBQ0Esb0JBQ0U7VUFBSyxTQUFTLEVBQUUsS0FBS2pELEtBQUwsQ0FBVzBFO1FBQTNCLEdBQ0csS0FBSzFFLEtBQUwsQ0FBVzJFLE1BRGQsRUFFRyxLQUFLM0UsS0FBTCxDQUFXNEUsUUFGZCxFQUdHUCxZQUFZLENBQUM5QyxHQUFiLENBQWlCLFVBQUNzRCxJQUFELEVBQU9DLEtBQVAsRUFBaUI7VUFDakMsb0JBQU8sZ0NBQUMsdUNBQUQ7WUFBbUIsT0FBTyxFQUFFRCxJQUFJLENBQUNFLElBQWpDO1lBQXVDLFNBQVMsRUFBRUYsSUFBSSxDQUFDRyxXQUF2RDtZQUFvRSxTQUFTLEVBQUVILElBQUksQ0FBQzVCLE1BQXBGO1lBQTRGLEdBQUcsRUFBRTZCLEtBQWpHO1lBQXdHLEVBQUUsRUFBRUEsS0FBNUc7WUFBbUgsYUFBYSxFQUFFLEtBQUksQ0FBQzlFLEtBQUwsQ0FBV3NCLGFBQTdJO1lBQTRKLFNBQVMsRUFBRXVELElBQUksQ0FBQ0ksaUJBQTVLO1lBQStMLE9BQU8sRUFBRUosSUFBSSxDQUFDSyxlQUE3TTtZQUE4TixlQUFlLEVBQUUsS0FBSSxDQUFDbEYsS0FBTCxDQUFXQyxlQUExUDtZQUEyUSxnQkFBZ0IsRUFBRSxLQUFJLENBQUNELEtBQUwsQ0FBV0c7VUFBeFMsRUFBUDtRQUNELENBRkEsQ0FISCxDQURGO01BU0Q7SUFDRjs7O0VBOUJzRGdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtY29udGFpbmVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2V9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZywgUG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Zyb21Mb25MYXR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge1N0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVySW5zdHJ1Y3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZm5JdGVtT3ZlciA9IHRoaXMuZm5JdGVtT3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm5JdGVtQ2xpY2sgPSB0aGlzLmZuSXRlbUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mbkl0ZW1PdXQgPSB0aGlzLmZuSXRlbU91dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25cIn0gb25Nb3VzZVVwPXt0aGlzLmZuSXRlbUNsaWNrfSBvbk1vdXNlTGVhdmU9e3RoaXMuZm5JdGVtT3V0fSBvbk1vdXNlRW50ZXI9e3RoaXMuZm5JdGVtT3Zlcn0ga2V5PXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pbWFnZVwifT48aW1nIHNyYz17dGhpcy5nZXRJbnN0cnVjdGlvbkljb24odGhpcy5wcm9wcy5pbWdQYXRoKX0gYWx0PVwiXCIvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLXRleHRcIn0+e3RoaXMucHJvcHMuaW5zdHJUZXh0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uLWRpc3RhbmNlXCJ9Pnt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5pbnN0ckRpc3QgKiAxMDAwKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgZm5JdGVtQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlICYmIHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB2YXIgY29vcmRMb25MYXQgPSB0aGlzLnByb3BzLmRhdGFQb3M7XG4gICAgICBpZiAoY29vcmRMb25MYXQpIHtcbiAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIobmV3Q29vcmQpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY29vcmRpbmF0ZXMgJiYgKHRoaXMucHJvcHMuZGF0YVN0YXJ0IHx8IHRoaXMucHJvcHMuZGF0YVN0YXJ0ID09PSAwKSAmJiB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgbGV0IGdlb207XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFTdGFydCA9PT0gdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgICAgZ2VvbSA9IG5ldyBQb2ludChjb29yZGluYXRlc1t0aGlzLnByb3BzLmRhdGFTdGFydF0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuc2xpY2UodGhpcy5wcm9wcy5kYXRhU3RhcnQsIHRoaXMucHJvcHMuZGF0YUVuZCk7XG4gICAgICAgICAgZ2VvbSA9IG5ldyBMaW5lU3RyaW5nKG5ld0Nvb3JkaW5hdGVzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBnZW9tXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50SGludEZlYXR1cmUuc2V0U3R5bGUoXG4gICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICAvLyBsZXQgY3VycmVudFpvb20gPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIGxldCB3aWR0aCA9IGpRdWVyeShcIi5jNGctcm91dGVyLWNvbnRhaW5lci1yaWdodFwiKS5jc3MoJ3dpZHRoJyk7XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgIHdpZHRoID0gd2lkdGguc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIHdpZHRoID0gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aFswXSA6IHdpZHRoO1xuICAgICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgIDUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdpZHRoID0gNTA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1heFpvb20gPSBwYXJzZUludCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQubWF4Wm9vbSkgfHwgMjI7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdChnZW9tLCB7XG4gICAgICAgICAgcGFkZGluZzogWzUwLHdpZHRoLDUwLDUwXSxcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgIG1heFpvb206IG1heFpvb21cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZuSXRlbU92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlICYmIHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkpIHtcbiAgICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICBsZXQgY29vcmRMb25MYXQgPSB0aGlzLnByb3BzLmRhdGFQb3M7XG4gICAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICAgIGxldCBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgICBsZXQgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgfSBlbHNlIGlmICgodGhpcy5wcm9wcy5kYXRhU3RhcnQgfHwgdGhpcy5wcm9wcy5kYXRhU3RhcnQgPT09IDApICYmIHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGlmIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuc2xpY2UodGhpcy5wcm9wcy5kYXRhU3RhcnQsIHRoaXMucHJvcHMuZGF0YUVuZCk7XG4gICAgICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlO1xuICAgICAgICAgICAgaWYgKG5ld0Nvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgTGluZVN0cmluZyhuZXdDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50SGludEZlYXR1cmUuc2V0U3R5bGUoXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZuSXRlbU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgfTtcblxuICBnZXRJbnN0cnVjdGlvbkljb24oaW50VHlwZSkge1xuICAgIGxldCByb3V0ZXJFbmdpbmUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbjtcbiAgICBzd2l0Y2ggKHJvdXRlckVuZ2luZSkge1xuICAgICAgY2FzZSAnNSc6XG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEoaW50VHlwZSk7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIoaW50VHlwZSk7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFuIGludGVnZXIgbnVtYmVyIGludG8gdGhlIGNvcnJlY3QgaW5zdHJ1Y3Rpb24gaWNvbiAoR3JhcGhob3BwZXIgaWNvbnMpLlxuICAgKiBAcGFyYW0gaW50VHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjI6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIzOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjQ6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI1OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbWFnZSA9IFwiZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG4gIGdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0yOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTc6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC05ODpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk5OlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25PUlMoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZXJJbnN0cnVjdGlvbn0gZnJvbSBcIi4vYzRnLXJvdXRlci1pbnN0cnVjdGlvbi5qc3hcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlLCB0b0h1bWFuVGltZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGluc3RydWN0aW9ucyA9IFtdO1xuICAgIGxldCB0aW1lID0gXCJcIjtcbiAgICBsZXQgZGlzdGFuY2UgPSBcIlwiO1xuICAgIGxldCBwcm9maWxlID0gXCJcIjtcblxuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucyAmJiB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnMpIHtcbiAgICAgIGluc3RydWN0aW9ucyA9IHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zLmluc3RydWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoaW5zdHJ1Y3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5zdHJ1Y3Rpb25zIHByZXNlbnQsIGNvbnRhaW5lciBvcGVuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zd2l0Y2hlcn1cbiAgICAgICAgICB7aW5zdHJ1Y3Rpb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Um91dGVySW5zdHJ1Y3Rpb24gaW1nUGF0aD17aXRlbS50eXBlfSBpbnN0clRleHQ9e2l0ZW0uaW5zdHJ1Y3Rpb259IGluc3RyRGlzdD17aXRlbS5sZW5ndGh9IGtleT17aW5kZXh9IGlkPXtpbmRleH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBkYXRhU3RhcnQ9e2l0ZW0uYmVnaW5fc2hhcGVfaW5kZXh9IGRhdGFFbmQ9e2l0ZW0uZW5kX3NoYXBlX2luZGV4fSByb3V0ZXJXYXlTb3VyY2U9e3RoaXMucHJvcHMucm91dGVyV2F5U291cmNlfSByb3V0ZXJIaW50U291cmNlPXt0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2V9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSb3V0ZXJJbnN0cnVjdGlvbiIsInByb3BzIiwicm91dGVyV2F5U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJyb3V0ZXJIaW50U291cmNlIiwiY2xlYXIiLCJmZWF0dXJlIiwiY29vcmRpbmF0ZXMiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiY29vcmRMb25MYXQiLCJkYXRhUG9zIiwic3RyaW5nbG9ubGF0Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3Q29vcmQiLCJmcm9tTG9uTGF0IiwiY3VycmVudEhpbnRGZWF0dXJlIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJhZGRGZWF0dXJlIiwib3B0aW9ucyIsIm1hcENvbnRyb2xsZXIiLCJtYXAiLCJnZXRWaWV3Iiwic2V0Q2VudGVyIiwiZGF0YVN0YXJ0IiwiZGF0YUVuZCIsImdlb20iLCJuZXdDb29yZGluYXRlcyIsInNsaWNlIiwiTGluZVN0cmluZyIsInNldFN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwialF1ZXJ5IiwiY3NzIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJtYXhab29tIiwiZGF0YSIsInN0YXJib2FyZCIsImZpdCIsInBhZGRpbmciLCJkdXJhdGlvbiIsImxlbmd0aCIsImZuSXRlbU92ZXIiLCJiaW5kIiwiZm5JdGVtQ2xpY2siLCJmbkl0ZW1PdXQiLCJpZCIsImdldEluc3RydWN0aW9uSWNvbiIsImltZ1BhdGgiLCJpbnN0clRleHQiLCJ0b0h1bWFuRGlzdGFuY2UiLCJpbnN0ckRpc3QiLCJpbnRUeXBlIiwicm91dGVyRW5naW5lIiwicm91dGVyX2FwaV9zZWxlY3Rpb24iLCJnZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYSIsImdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTIiwiaW1hZ2UiLCJDb21wb25lbnQiLCJSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJ0aW1lIiwiZGlzdGFuY2UiLCJwcm9maWxlIiwicm91dGVySW5zdHJ1Y3Rpb25zIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic3dpdGNoZXIiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwiaW5zdHJ1Y3Rpb24iLCJiZWdpbl9zaGFwZV9pbmRleCIsImVuZF9zaGFwZV9pbmRleCJdLCJzb3VyY2VSb290IjoiIn0=