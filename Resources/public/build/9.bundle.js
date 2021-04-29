(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./Resources/public/js/components/c4g-fullscreen.jsx":
/*!***********************************************************!*\
  !*** ./Resources/public/js/components/c4g-fullscreen.jsx ***!
  \***********************************************************/
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

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

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

var Fullscreen = function (_Component) {
  (0, _inherits3.default)(Fullscreen, _Component);

  function Fullscreen(props) {
    (0, _classCallCheck3.default)(this, Fullscreen);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    var _this = (0, _possibleConstructorReturn3.default)(this, (Fullscreen.__proto__ || (0, _getPrototypeOf2.default)(Fullscreen)).call(this, props));

    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);

    var control = new _control.FullScreen({
      label: ' ',
      labelActive: ' ',
      tipLabel: langConstants.CTRL_FULLSCREEN,
      target: _this.props.target
    });

    var mapController = props.mapController;
    mapController.mapsControls.controls.fullscreen = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass3.default)(Fullscreen, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Fullscreen;
}(_react.Component);

exports.default = Fullscreen;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZ1bGxzY3JlZW4uanN4Il0sIm5hbWVzIjpbIkZ1bGxzY3JlZW4iLCJwcm9wcyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImNvbnRyb2wiLCJGdWxsU2NyZWVuIiwibGFiZWwiLCJsYWJlbEFjdGl2ZSIsInRpcExhYmVsIiwiQ1RSTF9GVUxMU0NSRUVOIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJmdWxsc2NyZWVuIiwibWFwIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWhCQTs7Ozs7Ozs7Ozs7OztJQWtCcUJBLFU7OztBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUdqQjtBQUhpQiw4SUFDWEEsS0FEVzs7QUFJakIsUUFBSUMsZ0JBQWdCLDhCQUFZRCxNQUFNRSxhQUFOLENBQW9CQyxJQUFoQyxDQUFwQjs7QUFFQSxRQUFJQyxVQUFVLElBQUlDLG1CQUFKLENBQWU7QUFDM0JDLGFBQU8sR0FEb0I7QUFFM0JDLG1CQUFhLEdBRmM7QUFHM0JDLGdCQUFVUCxjQUFjUSxlQUhHO0FBSTNCQyxjQUFRLE1BQUtWLEtBQUwsQ0FBV1U7QUFKUSxLQUFmLENBQWQ7O0FBT0EsUUFBSVIsZ0JBQWdCRixNQUFNRSxhQUExQjtBQUNBQSxrQkFBY1MsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFVBQXBDLEdBQWlEVCxPQUFqRDtBQUNBRixrQkFBY1ksR0FBZCxDQUFrQkMsVUFBbEIsQ0FBNkJYLE9BQTdCO0FBZmlCO0FBZ0JsQjs7Ozs2QkFFUTtBQUNQLGFBQU8sSUFBUDtBQUNEOzs7RUFyQnFDWSxnQjs7a0JBQW5CakIsVSIsImZpbGUiOiI5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGdWxsU2NyZWVufSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsc2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGxldCBjb250cm9sID0gbmV3IEZ1bGxTY3JlZW4oe1xuICAgICAgbGFiZWw6ICcgJyxcbiAgICAgIGxhYmVsQWN0aXZlOiAnICcsXG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX0ZVTExTQ1JFRU4sXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZnVsbHNjcmVlbiA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==