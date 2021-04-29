(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./Resources/public/js/components/c4g-router-instruction.jsx":
/*!*******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-instruction.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterInstruction = undefined;

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

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./Resources/public/js/c4g-router-time-conversions.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
  (0, _inherits3.default)(RouterInstruction, _Component);

  function RouterInstruction(props) {
    (0, _classCallCheck3.default)(this, RouterInstruction);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RouterInstruction.__proto__ || (0, _getPrototypeOf2.default)(RouterInstruction)).call(this, props));

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

  (0, _createClass3.default)(RouterInstruction, [{
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

/***/ "./Resources/public/js/components/c4g-router-instructions-container.jsx":
/*!******************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-instructions-container.jsx ***!
  \******************************************************************************/
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

var _c4gRouterInstruction = __webpack_require__(/*! ./c4g-router-instruction.jsx */ "./Resources/public/js/components/c4g-router-instruction.jsx");

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./Resources/public/js/c4g-router-time-conversions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterInstructionsContainer = function (_Component) {
  (0, _inherits3.default)(RouterInstructionsContainer, _Component);

  function RouterInstructionsContainer(props) {
    (0, _classCallCheck3.default)(this, RouterInstructionsContainer);
    return (0, _possibleConstructorReturn3.default)(this, (RouterInstructionsContainer.__proto__ || (0, _getPrototypeOf2.default)(RouterInstructionsContainer)).call(this, props));
  }

  (0, _createClass3.default)(RouterInstructionsContainer, [{
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

exports.default = RouterInstructionsContainer;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1pbnN0cnVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lci5qc3giXSwibmFtZXMiOlsiUm91dGVySW5zdHJ1Y3Rpb24iLCJwcm9wcyIsImZuSXRlbUNsaWNrIiwicm91dGVyV2F5U291cmNlIiwiZ2V0RmVhdHVyZXMiLCJyb3V0ZXJIaW50U291cmNlIiwiY2xlYXIiLCJmZWF0dXJlIiwiY29vcmRpbmF0ZXMiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiY29vcmRMb25MYXQiLCJkYXRhUG9zIiwic3RyaW5nbG9ubGF0Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwibmV3Q29vcmQiLCJjdXJyZW50SGludEZlYXR1cmUiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsImFkZEZlYXR1cmUiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsIm1hcCIsImdldFZpZXciLCJzZXRDZW50ZXIiLCJkYXRhU3RhcnQiLCJkYXRhRW5kIiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJzbGljZSIsInNldFN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwiY3VycmVudFpvb20iLCJnZXRab29tIiwiZml0IiwiYWZ0ZXJab29tIiwiZW5kWm9vbSIsIk1hdGgiLCJyb3VuZCIsInNldFpvb20iLCJmbkl0ZW1PdmVyIiwiZm5JdGVtT3V0IiwiYmluZCIsImlkIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uIiwiaW1nUGF0aCIsImluc3RyVGV4dCIsImluc3RyRGlzdCIsImludFR5cGUiLCJyb3V0ZXJFbmdpbmUiLCJkYXRhIiwicm91dGVyX2FwaV9zZWxlY3Rpb24iLCJnZXRJbnN0cnVjdGlvbkljb25WYWxoYWxsYSIsImdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTIiwiaW1hZ2UiLCJDb21wb25lbnQiLCJSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXIiLCJpbnN0cnVjdGlvbnMiLCJ0aW1lIiwiZGlzdGFuY2UiLCJwcm9maWxlIiwicm91dGVySW5zdHJ1Y3Rpb25zIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwic3dpdGNoZXIiLCJpdGVtIiwiaW5kZXgiLCJ0eXBlIiwiaW5zdHJ1Y3Rpb24iLCJiZWdpbl9zaGFwZV9pbmRleCIsImVuZF9zaGFwZV9pbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFsQkE7Ozs7Ozs7Ozs7Ozs7SUFvQmFBLGlCLFdBQUFBLGlCOzs7QUFFWCw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRKQUNYQSxLQURXOztBQUFBLFVBaUJuQkMsV0FqQm1CLEdBaUJMLFlBQVk7QUFDeEIsVUFBSSxLQUFLRCxLQUFMLENBQVdFLGVBQVgsSUFBOEIsS0FBS0YsS0FBTCxDQUFXRSxlQUFYLENBQTJCQyxXQUEzQixFQUFsQyxFQUE0RTtBQUMxRSxhQUFLSCxLQUFMLENBQVdJLGdCQUFYLENBQTRCQyxLQUE1QjtBQUNBLFlBQUlDLFVBQVUsS0FBS04sS0FBTCxDQUFXRSxlQUFYLENBQTJCQyxXQUEzQixHQUF5QyxDQUF6QyxDQUFkO0FBQ0EsWUFBSUksY0FBY0QsUUFBUUUsV0FBUixHQUFzQkMsY0FBdEIsRUFBbEI7QUFDQSxZQUFJQyxjQUFjLEtBQUtWLEtBQUwsQ0FBV1csT0FBN0I7QUFDQSxZQUFJRCxXQUFKLEVBQWlCO0FBQ2YsY0FBSUUsZUFBZUYsWUFBWUcsS0FBWixDQUFrQixHQUFsQixDQUFuQjtBQUNBRCx1QkFBYSxDQUFiLElBQWtCRSxXQUFXRixhQUFhLENBQWIsQ0FBWCxDQUFsQjtBQUNBQSx1QkFBYSxDQUFi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QUFRLFlBQVI7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFQSxrQkFBUSxZQUFSO0FBQ0E7QUFDRixhQUFLLENBQUw7QUFDRUEsa0JBQVEsWUFBUjtBQUNBO0FBQ0YsYUFBSyxDQUFMO0FBQ0VBLGtCQUFRLGNBQVI7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFQSxrQkFBUSxjQUFSO0FBQ0E7QUFDRixhQUFLLENBQUw7QUFDRUEsa0JBQVEsa0JBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxnQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGlCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsWUFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLFlBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxnQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGVBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxpQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGNBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxrQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGlCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsa0JBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxpQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGNBQVI7QUFDQTtBQUNGLGFBQUssRUFBTDtBQUNFQSxrQkFBUSxrQkFBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGlCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsY0FBUjtBQUNBO0FBQ0YsYUFBSyxFQUFMO0FBQ0VBLGtCQUFRLGlCQUFSO0FBQ0E7QUFDRixhQUFLLEVBQUw7QUFDRUEsa0JBQVEsaUJBQVI7QUFDQTtBQUNGO0FBQ0VBLGtCQUFRLGFBQVI7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QUEzQjtBQUNHLGVBQUtyRSxLQUFMLENBQVdzRSxNQURkO0FBRUcsZUFBS3RFLEtBQUwsQ0FBV3VFLFFBRmQ7QUFHR1IsdUJBQWF4QyxHQUFiLENBQWlCLFVBQUNpRCxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDakMsbUJBQU8sOEJBQUMsdUNBQUQsSUFBbUIsU0FBU0QsS0FBS0UsSUFBakMsRUFBdUMsV0FBV0YsS0FBS0csV0FBdkQsRUFBb0UsV0FBV0gsS0FBS0osTUFBcEYsRUFBNEYsS0FBS0ssS0FBakcsRUFBd0csSUFBSUEsS0FBNUcsRUFBbUgsZUFBZSxPQUFLekUsS0FBTCxDQUFXc0IsYUFBN0ksRUFBNEosV0FBV2tELEtBQUtJLGlCQUE1SyxFQUErTCxTQUFTSixLQUFLSyxlQUE3TSxFQUE4TixpQkFBaUIsT0FBSzdFLEtBQUwsQ0FBV0UsZUFBMVAsRUFBMlEsa0JBQWtCLE9BQUtGLEtBQUwsQ0FBV0ksZ0JBQXhTLEdBQVA7QUFDRCxXQUZBO0FBSEgsU0FERjtBQVNEO0FBQ0Y7OztFQTlCc0R5RCxnQixHQWpCekQ7Ozs7Ozs7Ozs7Ozs7a0JBaUJxQkMsMkIiLCJmaWxlIjoiNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2V9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZywgUG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Zyb21Mb25MYXR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge1N0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVySW5zdHJ1Y3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZm5JdGVtT3ZlciA9IHRoaXMuZm5JdGVtT3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm5JdGVtQ2xpY2sgPSB0aGlzLmZuSXRlbUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mbkl0ZW1PdXQgPSB0aGlzLmZuSXRlbU91dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25cIn0gb25Nb3VzZVVwPXt0aGlzLmZuSXRlbUNsaWNrfSBvbk1vdXNlTGVhdmU9e3RoaXMuZm5JdGVtT3V0fSBvbk1vdXNlRW50ZXI9e3RoaXMuZm5JdGVtT3Zlcn0ga2V5PXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgPGRpdj48aW1nIHNyYz17dGhpcy5nZXRJbnN0cnVjdGlvbkljb24odGhpcy5wcm9wcy5pbWdQYXRoKX0gYWx0PVwiXCIvPjwvZGl2PlxuICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLmluc3RyVGV4dH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLWluc3RydWN0aW9uLWRpc3RhbmNlXCI+e3RvSHVtYW5EaXN0YW5jZSh0aGlzLnByb3BzLmluc3RyRGlzdCAqIDEwMDApfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBmbkl0ZW1DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHZhciBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgIGlmIChjb29yZExvbkxhdCkge1xuICAgICAgICBsZXQgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgbGV0IG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQobmV3Q29vcmQpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDb29yZCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjb29yZGluYXRlcyAmJiB0aGlzLnByb3BzLmRhdGFTdGFydCAmJiB0aGlzLnByb3BzLmRhdGFFbmQpIHtcbiAgICAgICAgbGV0IGdlb20gPSBuZXcgTGluZVN0cmluZyhjb29yZGluYXRlcy5zbGljZSh0aGlzLnByb3BzLmRhdGFTdGFydCwgdGhpcy5wcm9wcy5kYXRhRW5kKSk7XG4gICAgICAgIGxldCBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGdlb21cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIGxldCBjdXJyZW50Wm9vbSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGdlb20pO1xuICAgICAgICBsZXQgYWZ0ZXJab29tID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgICBsZXQgZW5kWm9vbSA9IE1hdGgucm91bmQoKGN1cnJlbnRab29tICsgYWZ0ZXJab29tKS8yKTtcbiAgICAgICAgZW5kWm9vbSA9IChlbmRab29tID4gYWZ0ZXJab29tKSA/IGFmdGVyWm9vbSA6IGVuZFpvb207XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldFpvb20oZW5kWm9vbSk7XG5cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UgJiYgdGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgIGxldCBjb29yZExvbkxhdCA9IHRoaXMucHJvcHMuZGF0YVBvcztcbiAgICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgICAgbGV0IHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgIGxldCBuZXdDb29yZCA9IGZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgICBsZXQgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGF0YVN0YXJ0ICYmIHRoaXMucHJvcHMuZGF0YUVuZCkge1xuICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgIGlmIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLnNsaWNlKHRoaXMucHJvcHMuZGF0YVN0YXJ0LCB0aGlzLnByb3BzLmRhdGFFbmQpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50SGludEZlYXR1cmUuc2V0U3R5bGUoXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDAsIDAsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZuSXRlbU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgfTtcblxuICBnZXRJbnN0cnVjdGlvbkljb24oaW50VHlwZSkge1xuICAgIGxldCByb3V0ZXJFbmdpbmUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbjtcbiAgICBzd2l0Y2ggKHJvdXRlckVuZ2luZSkge1xuICAgICAgY2FzZSAnNSc6XG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEoaW50VHlwZSk7XG4gICAgICBjYXNlICczJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uR3JhcGhob3BwZXIoaW50VHlwZSk7XG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKGludFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFuIGludGVnZXIgbnVtYmVyIGludG8gdGhlIGNvcnJlY3QgaW5zdHJ1Y3Rpb24gaWNvbiAoR3JhcGhob3BwZXIgaWNvbnMpLlxuICAgKiBAcGFyYW0gaW50VHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0SW5zdHJ1Y3Rpb25JY29uVmFsaGFsbGEoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcImRlZmF1bHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIGltYWdlID0gXCJ0YXJnZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA3OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxNzpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyMTpcbiAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjI6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDIzOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjQ6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI1OlxuICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNjpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjc6XG4gICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbWFnZSA9IFwiZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgfVxuXG4gIGdldEluc3RydWN0aW9uSWNvbkdyYXBoaG9wcGVyKGludFR5cGUpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgc3dpdGNoIChpbnRUeXBlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC0yOlxuICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTM6XG4gICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTc6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2OlxuICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC05ODpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk5OlxuICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbkljb25PUlMoaW50VHlwZSkge1xuICAgIGxldCBpbWFnZTtcbiAgICBzd2l0Y2ggKGludFR5cGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgODpcbiAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTE6XG4gICAgICAgIGltYWdlID0gXCJoZWFkLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTI6XG4gICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgICByZXR1cm4gXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZXJJbnN0cnVjdGlvbn0gZnJvbSBcIi4vYzRnLXJvdXRlci1pbnN0cnVjdGlvbi5qc3hcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlLCB0b0h1bWFuVGltZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGluc3RydWN0aW9ucyA9IFtdO1xuICAgIGxldCB0aW1lID0gXCJcIjtcbiAgICBsZXQgZGlzdGFuY2UgPSBcIlwiO1xuICAgIGxldCBwcm9maWxlID0gXCJcIjtcblxuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucyAmJiB0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnMpIHtcbiAgICAgIGluc3RydWN0aW9ucyA9IHRoaXMucHJvcHMucm91dGVySW5zdHJ1Y3Rpb25zLmluc3RydWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoaW5zdHJ1Y3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5zdHJ1Y3Rpb25zIHByZXNlbnQsIGNvbnRhaW5lciBvcGVuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zd2l0Y2hlcn1cbiAgICAgICAgICB7aW5zdHJ1Y3Rpb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Um91dGVySW5zdHJ1Y3Rpb24gaW1nUGF0aD17aXRlbS50eXBlfSBpbnN0clRleHQ9e2l0ZW0uaW5zdHJ1Y3Rpb259IGluc3RyRGlzdD17aXRlbS5sZW5ndGh9IGtleT17aW5kZXh9IGlkPXtpbmRleH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBkYXRhU3RhcnQ9e2l0ZW0uYmVnaW5fc2hhcGVfaW5kZXh9IGRhdGFFbmQ9e2l0ZW0uZW5kX3NoYXBlX2luZGV4fSByb3V0ZXJXYXlTb3VyY2U9e3RoaXMucHJvcHMucm91dGVyV2F5U291cmNlfSByb3V0ZXJIaW50U291cmNlPXt0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2V9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=