(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./Resources/public/js/components/c4g-rotate.jsx":
/*!*******************************************************!*\
  !*** ./Resources/public/js/components/c4g-rotate.jsx ***!
  \*******************************************************/
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

var Rotate = function (_Component) {
  (0, _inherits3.default)(Rotate, _Component);

  function Rotate(props) {
    (0, _classCallCheck3.default)(this, Rotate);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    var _this = (0, _possibleConstructorReturn3.default)(this, (Rotate.__proto__ || (0, _getPrototypeOf2.default)(Rotate)).call(this, props));

    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);

    var control = new _control.Rotate({
      label: ' ',
      labelActive: ' ',
      tipLabel: langConstants.CTRL_RESET_ROTATION,
      target: _this.props.target
    });

    var mapController = props.mapController;
    mapController.mapsControls.controls.rotate = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass3.default)(Rotate, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Rotate;
}(_react.Component);

exports.default = Rotate;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdGF0ZS5qc3giXSwibmFtZXMiOlsiUm90YXRlIiwicHJvcHMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjb250cm9sIiwiT2xSb3RhdGUiLCJsYWJlbCIsImxhYmVsQWN0aXZlIiwidGlwTGFiZWwiLCJDVFJMX1JFU0VUX1JPVEFUSU9OIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJyb3RhdGUiLCJtYXAiLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBaEJBOzs7Ozs7Ozs7Ozs7O0lBa0JxQkEsTTs7O0FBRW5CLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBR2pCO0FBSGlCLHNJQUNYQSxLQURXOztBQUlqQixRQUFJQyxnQkFBZ0IsOEJBQVlELE1BQU1FLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCOztBQUVBLFFBQUlDLFVBQVUsSUFBSUMsZUFBSixDQUFhO0FBQ3pCQyxhQUFPLEdBRGtCO0FBRXpCQyxtQkFBYSxHQUZZO0FBR3pCQyxnQkFBVVAsY0FBY1EsbUJBSEM7QUFJekJDLGNBQVEsTUFBS1YsS0FBTCxDQUFXVTtBQUpNLEtBQWIsQ0FBZDs7QUFPQSxRQUFJUixnQkFBZ0JGLE1BQU1FLGFBQTFCO0FBQ0FBLGtCQUFjUyxZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsTUFBcEMsR0FBNkNULE9BQTdDO0FBQ0FGLGtCQUFjWSxHQUFkLENBQWtCQyxVQUFsQixDQUE2QlgsT0FBN0I7QUFmaUI7QUFnQmxCOzs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7OztFQXRCaUNZLGdCOztrQkFBZmpCLE0iLCJmaWxlIjoiMTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdGF0ZSBhcyBPbFJvdGF0ZX0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgT2xSb3RhdGUoe1xuICAgICAgbGFiZWw6ICcgJyxcbiAgICAgIGxhYmVsQWN0aXZlOiAnICcsXG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX1JFU0VUX1JPVEFUSU9OLFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnJvdGF0ZSA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==