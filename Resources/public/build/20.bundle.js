(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./Resources/public/js/components/c4g-zoom.jsx":
/*!*****************************************************!*\
  !*** ./Resources/public/js/components/c4g-zoom.jsx ***!
  \*****************************************************/
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
var Zoom = function (_Component) {
  (0, _inherits3.default)(Zoom, _Component);

  function Zoom(props) {
    (0, _classCallCheck3.default)(this, Zoom);

    // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);
    var _this = (0, _possibleConstructorReturn3.default)(this, (Zoom.__proto__ || (0, _getPrototypeOf2.default)(Zoom)).call(this, props));

    var langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    var control = new _control.Zoom({
      zoomInLabel: ' ',
      zoomOutLabel: ' ',
      zoomInTipLabel: langConstants.CTRL_ZOOM_IN,
      zoomOutTipLabel: langConstants.CTRL_ZOOM_OUT,
      target: _this.props.target
    });

    var mapController = props.mapController;
    mapController.mapsControls.controls.zoom = control;
    mapController.map.addControl(control);
    return _this;
  }

  (0, _createClass3.default)(Zoom, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Zoom;
}(_react.Component);

exports.default = Zoom;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20uanN4Il0sIm5hbWVzIjpbIlpvb20iLCJwcm9wcyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImNvbnRyb2wiLCJPbFpvb20iLCJ6b29tSW5MYWJlbCIsInpvb21PdXRMYWJlbCIsInpvb21JblRpcExhYmVsIiwiQ1RSTF9aT09NX0lOIiwiem9vbU91dFRpcExhYmVsIiwiQ1RSTF9aT09NX09VVCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiem9vbSIsIm1hcCIsImFkZENvbnRyb2wiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFmQTs7Ozs7Ozs7Ozs7O0lBaUJxQkEsSTs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBR2pCO0FBSGlCLGtJQUNYQSxLQURXOztBQUlqQixRQUFJQyxnQkFBZ0IsOEJBQVlELE1BQU1FLGFBQU4sQ0FBb0JDLElBQWhDLENBQXBCO0FBQ0EsUUFBSUMsVUFBVSxJQUFJQyxhQUFKLENBQVc7QUFDdkJDLG1CQUFhLEdBRFU7QUFFdkJDLG9CQUFjLEdBRlM7QUFHdkJDLHNCQUFnQlAsY0FBY1EsWUFIUDtBQUl2QkMsdUJBQWlCVCxjQUFjVSxhQUpSO0FBS3ZCQyxjQUFRLE1BQUtaLEtBQUwsQ0FBV1k7QUFMSSxLQUFYLENBQWQ7O0FBUUEsUUFBSVYsZ0JBQWdCRixNQUFNRSxhQUExQjtBQUNBQSxrQkFBY1csWUFBZCxDQUEyQkMsUUFBM0IsQ0FBb0NDLElBQXBDLEdBQTJDWCxPQUEzQztBQUNBRixrQkFBY2MsR0FBZCxDQUFrQkMsVUFBbEIsQ0FBNkJiLE9BQTdCO0FBZmlCO0FBZ0JsQjs7Ozs2QkFFUTtBQUNQLGFBQU8sSUFBUDtBQUNEOzs7RUFyQitCYyxnQjs7a0JBQWJuQixJIiwiZmlsZSI6IjIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Wm9vbSBhcyBPbFpvb219IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBjb250cm9sID0gbmV3IE9sWm9vbSh7XG4gICAgICB6b29tSW5MYWJlbDogJyAnLFxuICAgICAgem9vbU91dExhYmVsOiAnICcsXG4gICAgICB6b29tSW5UaXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSU4sXG4gICAgICB6b29tT3V0VGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX09VVCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy56b29tID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9