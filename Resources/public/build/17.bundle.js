(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./Resources/public/js/components/c4g-zoom-extent.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-zoom-extent.jsx ***!
  \************************************************************/
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

var ZoomExtent = function (_Component) {
  (0, _inherits3.default)(ZoomExtent, _Component);

  function ZoomExtent(props) {
    (0, _classCallCheck3.default)(this, ZoomExtent);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    var _this = (0, _possibleConstructorReturn3.default)(this, (ZoomExtent.__proto__ || (0, _getPrototypeOf2.default)(ZoomExtent)).call(this, props));

    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var control = new _control.ZoomToExtent({
      label: ' ',
      tipLabel: langConstants.CTRL_ZOOM_EXT,
      target: _this.props.target
    });

    var mapController = props.mapController;
    mapController.mapsControls.controls.zoomExtent = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass3.default)(ZoomExtent, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ZoomExtent;
}(_react.Component);

exports.default = ZoomExtent;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20tZXh0ZW50LmpzeCJdLCJuYW1lcyI6WyJab29tRXh0ZW50IiwicHJvcHMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjb250cm9sIiwiWm9vbVRvRXh0ZW50IiwibGFiZWwiLCJ0aXBMYWJlbCIsIkNUUkxfWk9PTV9FWFQiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsInpvb21FeHRlbnQiLCJtYXAiLCJhZGRDb250cm9sIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBaEJBOzs7Ozs7Ozs7Ozs7O0lBa0JxQkEsVTs7O0FBRW5CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBR2pCO0FBSGlCLDhJQUNYQSxLQURXOztBQUlqQixRQUFJQyxnQkFBZ0IsOEJBQVlELE1BQU1FLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0EsUUFBSUMsVUFBVSxJQUFJQyxxQkFBSixDQUFpQjtBQUM3QkMsYUFBTyxHQURzQjtBQUU3QkMsZ0JBQVVOLGNBQWNPLGFBRks7QUFHN0JDLGNBQVEsTUFBS1QsS0FBTCxDQUFXUztBQUhVLEtBQWpCLENBQWQ7O0FBTUEsUUFBSVAsZ0JBQWdCRixNQUFNRSxhQUExQjtBQUNBQSxrQkFBY1EsWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLFVBQXBDLEdBQWlEUixPQUFqRDtBQUNBRixrQkFBY1csR0FBZCxDQUFrQkMsVUFBbEIsQ0FBNkJWLE9BQTdCO0FBYmlCO0FBY2xCOzs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7OztFQXBCcUNXLGdCOztrQkFBbkJoQixVIiwiZmlsZSI6IjE3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtab29tVG9FeHRlbnR9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21FeHRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gbGV0IGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgWm9vbVRvRXh0ZW50KHtcbiAgICAgIGxhYmVsOiAnICcsXG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fRVhULFxuICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnRhcmdldFxuICAgIH0pO1xuXG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLnpvb21FeHRlbnQgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=