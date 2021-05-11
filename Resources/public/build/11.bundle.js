(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-instruction.jsx":
/*!**********************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-instruction.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterInstruction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "../RoutingBundle/Resources/public/js/c4g-router-time-conversions.js");

var _ol = __webpack_require__(/*! ol */ "../RoutingBundle/node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "../RoutingBundle/node_modules/ol/geom.js");

var _proj = __webpack_require__(/*! ol/proj */ "../RoutingBundle/node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "../RoutingBundle/node_modules/ol/style.js");

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

var RouterInstruction = exports.RouterInstruction = function (_Component) {
  _inherits(RouterInstruction, _Component);

  function RouterInstruction(props) {
    _classCallCheck(this, RouterInstruction);

    var _this = _possibleConstructorReturn(this, (RouterInstruction.__proto__ || Object.getPrototypeOf(RouterInstruction)).call(this, props));

    _this.fnItemClick = function () {
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
    };

    _this.fnItemOver = function () {
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
    };

    _this.fnItemOut = function () {
      this.props.routerHintSource.clear();
    };

    _this.fnItemOver = _this.fnItemOver.bind(_this);
    _this.fnItemClick = _this.fnItemClick.bind(_this);
    _this.fnItemOut = _this.fnItemOut.bind(_this);
    return _this;
  }

  _createClass(RouterInstruction, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "c4g-router-instruction", onMouseUp: this.fnItemClick, onMouseLeave: this.fnItemOut, onMouseEnter: this.fnItemOver, key: this.props.id },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { src: this.getInstructionIcon(this.props.imgPath), alt: "" })
        ),
        _react2.default.createElement(
          "div",
          null,
          this.props.instrText
        ),
        _react2.default.createElement(
          "div",
          { className: "c4g-router-instruction-distance" },
          (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.instrDist * 1000)
        )
      );
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
      var image = void 0;
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
      var image = void 0;
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
      var image = void 0;
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

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-instructions-container.jsx":
/*!*********************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-instructions-container.jsx ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-instruction.jsx");

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "../RoutingBundle/Resources/public/js/c4g-router-time-conversions.js");

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

var RouterInstructionsContainer = function (_Component) {
  _inherits(RouterInstructionsContainer, _Component);

  function RouterInstructionsContainer(props) {
    _classCallCheck(this, RouterInstructionsContainer);

    return _possibleConstructorReturn(this, (RouterInstructionsContainer.__proto__ || Object.getPrototypeOf(RouterInstructionsContainer)).call(this, props));
  }

  _createClass(RouterInstructionsContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
        return _react2.default.createElement(
          "div",
          { className: this.props.className },
          this.props.header,
          this.props.switcher,
          instructions.map(function (item, index) {
            return _react2.default.createElement(_c4gRouterInstruction.RouterInstruction, { imgPath: item.type, instrText: item.instruction, instrDist: item.length, key: index, id: index, mapController: _this2.props.mapController, dataStart: item.begin_shape_index, dataEnd: item.end_shape_index, routerWaySource: _this2.props.routerWaySource, routerHintSource: _this2.props.routerHintSource });
          })
        );
      }
    }
  }]);

  return RouterInstructionsContainer;
}(_react.Component);

exports.default = RouterInstructionsContainer;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lci5qc3giXSwibmFtZXMiOlsiUm91dGVySW5zdHJ1Y3Rpb24iLCJwcm9wcyIsImZuSXRlbUNsaWNrIiwicm91dGVyV2F5U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJyb3V0ZXJIaW50U291cmNlIiwiY2xlYXIiLCJmZWF0dXJlIiwiY29vcmRpbmF0ZXMiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiY29vcmRMb25MYXQiLCJkYXRhUG9zIiwic3RyaW5nbG9ubGF0Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3Q29vcmQiLCJjdXJyZW50SGludEZlYXR1cmUiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsImFkZEZlYXR1cmUiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImdldFZpZXciLCJzZXRDZW50ZXIiLCJkYXRhU3RhcnQiLCJkYXRhRW5kIiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJzbGljZSIsInNldFN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwiY3VycmVudFpvb20iLCJnZXRab29tIiwiZml0IiwiYWZ0ZXJab29tIiwiZW5kWm9vbSIsIk1hdGgiLCJyb3VuZCIsInNldFpvb20iLCJmbkl0ZW1PdmVyIiwiZm5JdGVtT3V0IiwiYmluZCIsImlkIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uIiwiaW1nUGF0aCIsImluc3RyVGV4dCIsImluc3RyRGlzdCIsImludFR5cGUiLCJyb3V0ZXJFbmdpbmUiLCJkYXRhIiwicm91dGVyX2FwaV9zZWxlY3Rpb24iLCJnZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYSIsImdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTIiwiaW1hZ2UiLCJDb21wb25lbnQiLCJSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJ0aW1lIiwiZGlzdGFuY2UiLCJwcm9maWxlIiwicm91dGVySW5zdHJ1Y3Rpb25zIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic3dpdGNoZXIiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwiaW5zdHJ1Y3Rpb24iLCJiZWdpbl9zaGFwZV9pbmRleCIsImVuZF9zaGFwZV9pbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7OytlQWxCQTs7Ozs7Ozs7Ozs7OztJQW9CYUEsaUIsV0FBQUEsaUI7OztBQUVYLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1hBLEtBRFc7O0FBQUEsVUFpQm5CQyxXQWpCbUIsR0FpQkwsWUFBWTtBQUN4QixVQUFJLEtBQUtELEtBQUwsQ0FBV0UsZUFBWCxJQUE4QixLQUFLRixLQUFMLENBQVdFLGVBQVgsQ0FBMkJDLFdBQTNCLEVBQWxDLEVBQTRFO0FBQzFFLGFBQUtILEtBQUwsQ0FBV0ksZ0JBQVgsQ0FBNEJDLEtBQTVCO0FBQ0EsWUFBSUMsVUFBVSxLQUFLTixLQUFMLENBQVdFLGVBQVgsQ0FBMkJDLFdBQTNCLEdBQXlDLENBQXpDLENBQWQ7QUFDQSxZQUFJSSxjQUFjRCxRQUFRRSxXQUFSLEdBQXNCQyxjQUF0QixFQUFsQjtBQUNBLFlBQUlDLGNBQWMsS0FBS1YsS0FBTCxDQUFXVyxPQUE3QjtBQUNBLFlBQUlELFdBQUosRUFBaUI7QUFDZixjQUFJRSxlQUFlRixZQUFZRyxLQUFaLENBQWtCLEdBQWxCLENBQW5CO0FBQ0FELHVCQUFhLENBQWIsSUFBa0JFLFdBQVdGLGFBQWEsQ0FBYixDQUFYLENBQWxC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QUFLLENBQUw7QUFDRUEsa0JBQVEsWUFBUjtBQUNBO0FBQ0YsYUFBSyxDQUFMO0FBQ0VBLGtCQUFRLFlBQVI7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFQSxrQkFBUSxZQUFSO0FBQ0E7QUFDRixhQUFLLENBQUw7QUFDRUEsa0JBQVEsY0FBUjtBQUNBO0FBQ0YsYUFBSyxDQUFMO0FBQ0VBLGtCQUFRLGNBQVI7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFQSxrQkFBUSxrQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGdCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsaUJBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxZQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsWUFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGdCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsZUFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGlCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsY0FBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGtCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsaUJBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxrQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGlCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsY0FBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGtCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsaUJBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxjQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsaUJBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxpQkFBUjtBQUNBO0FBQ0Y7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QUFXLEtBQUtwRSxLQUFMLENBQVdxRSxTQUEzQjtBQUNHLGVBQUtyRSxLQUFMLENBQVdzRSxNQURkO0FBRUcsZUFBS3RFLEtBQUwsQ0FBV3VFLFFBRmQ7QUFHR1IsdUJBQWF4QyxHQUFiLENBQWlCLFVBQUNpRCxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDakMsbUJBQU8sOEJBQUMsdUNBQUQsSUFBbUIsU0FBU0QsS0FBS0UsSUFBakMsRUFBdUMsV0FBV0YsS0FBS0csV0FBdkQsRUFBb0UsV0FBV0gsS0FBS0osTUFBcEYsRUFBNEYsS0FBS0ssS0FBakcsRUFBd0csSUFBSUEsS0FBNUcsRUFBbUgsZUFBZSxPQUFLekUsS0FBTCxDQUFXc0IsYUFBN0ksRUFBNEosV0FBV2tELEtBQUtJLGlCQUE1SyxFQUErTCxTQUFTSixLQUFLSyxlQUE3TSxFQUE4TixpQkFBaUIsT0FBSzdFLEtBQUwsQ0FBV0UsZUFBMVAsRUFBMlEsa0JBQWtCLE9BQUtGLEtBQUwsQ0FBV0ksZ0JBQXhTLEdBQVA7QUFDRCxXQUZBO0FBSEgsU0FERjtBQVNEO0FBQ0Y7Ozs7RUE5QnNEeUQsZ0I7O2tCQUFwQ0MsMkIiLCJmaWxlIjoiMTEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0xpbmVTdHJpbmcsIFBvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtmcm9tTG9uTGF0fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckluc3RydWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZuSXRlbU92ZXIgPSB0aGlzLmZuSXRlbU92ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZuSXRlbUNsaWNrID0gdGhpcy5mbkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm5JdGVtT3V0ID0gdGhpcy5mbkl0ZW1PdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWluc3RydWN0aW9uXCJ9IG9uTW91c2VVcD17dGhpcy5mbkl0ZW1DbGlja30gb25Nb3VzZUxlYXZlPXt0aGlzLmZuSXRlbU91dH0gb25Nb3VzZUVudGVyPXt0aGlzLmZuSXRlbU92ZXJ9IGtleT17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIDxkaXY+PGltZyBzcmM9e3RoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uKHRoaXMucHJvcHMuaW1nUGF0aCl9IGFsdD1cIlwiLz48L2Rpdj5cbiAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5pbnN0clRleHR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1kaXN0YW5jZVwiPnt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5pbnN0ckRpc3QgKiAxMDAwKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgZm5JdGVtQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlICYmIHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB2YXIgY29vcmRMb25MYXQgPSB0aGlzLnByb3BzLmRhdGFQb3M7XG4gICAgICBpZiAoY29vcmRMb25MYXQpIHtcbiAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KG5ld0Nvb3JkKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIobmV3Q29vcmQpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY29vcmRpbmF0ZXMgJiYgdGhpcy5wcm9wcy5kYXRhU3RhcnQgJiYgdGhpcy5wcm9wcy5kYXRhRW5kKSB7XG4gICAgICAgIGxldCBnZW9tID0gbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMuc2xpY2UodGhpcy5wcm9wcy5kYXRhU3RhcnQsIHRoaXMucHJvcHMuZGF0YUVuZCkpO1xuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBnZW9tXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50SGludEZlYXR1cmUuc2V0U3R5bGUoXG4gICAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBsZXQgY3VycmVudFpvb20gPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdChnZW9tKTtcbiAgICAgICAgbGV0IGFmdGVyWm9vbSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgbGV0IGVuZFpvb20gPSBNYXRoLnJvdW5kKChjdXJyZW50Wm9vbSArIGFmdGVyWm9vbSkvMik7XG4gICAgICAgIGVuZFpvb20gPSAoZW5kWm9vbSA+IGFmdGVyWm9vbSkgPyBhZnRlclpvb20gOiBlbmRab29tO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRab29tKGVuZFpvb20pO1xuXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZuSXRlbU92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlICYmIHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkpIHtcbiAgICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICBsZXQgY29vcmRMb25MYXQgPSB0aGlzLnByb3BzLmRhdGFQb3M7XG4gICAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICAgIGxldCBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgICBsZXQgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRhdGFTdGFydCAmJiB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgTGluZVN0cmluZyhjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmbkl0ZW1PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gIH07XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uKGludFR5cGUpIHtcbiAgICBsZXQgcm91dGVyRW5naW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb247XG4gICAgc3dpdGNoIChyb3V0ZXJFbmdpbmUpIHtcbiAgICAgIGNhc2UgJzUnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpO1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpO1xuICAgICAgY2FzZSAnMic6XG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RydWN0aW9uSWNvbk9SUyhpbnRUeXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbiBpbnRlZ2VyIG51bWJlciBpbnRvIHRoZSBjb3JyZWN0IGluc3RydWN0aW9uIGljb24gKEdyYXBoaG9wcGVyIGljb25zKS5cbiAgICogQHBhcmFtIGludFR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEluc3RydWN0aW9uSWNvblZhbGhhbGxhKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJkZWZhdWx0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTc6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjE6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIyOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNTpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjY6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI3OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25HcmFwaGhvcHBlcihpbnRUeXBlKSB7XG4gICAgbGV0IGltYWdlO1xuICAgIHN3aXRjaCAoaW50VHlwZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0zOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC03OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtOTg6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OTpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDExOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVySW5zdHJ1Y3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24uanN4XCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZSwgdG9IdW1hblRpbWV9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcbiAgICBsZXQgdGltZSA9IFwiXCI7XG4gICAgbGV0IGRpc3RhbmNlID0gXCJcIjtcbiAgICBsZXQgcHJvZmlsZSA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMgPSB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGluc3RydWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluc3RydWN0aW9ucyBwcmVzZW50LCBjb250YWluZXIgb3BlblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgICAge2luc3RydWN0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckluc3RydWN0aW9uIGltZ1BhdGg9e2l0ZW0udHlwZX0gaW5zdHJUZXh0PXtpdGVtLmluc3RydWN0aW9ufSBpbnN0ckRpc3Q9e2l0ZW0ubGVuZ3RofSBrZXk9e2luZGV4fSBpZD17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZGF0YVN0YXJ0PXtpdGVtLmJlZ2luX3NoYXBlX2luZGV4fSBkYXRhRW5kPXtpdGVtLmVuZF9zaGFwZV9pbmRleH0gcm91dGVyV2F5U291cmNlPXt0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZX0gcm91dGVySGludFNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9