"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-zoom_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-zoom.jsx":
/*!*********************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-zoom.jsx ***!
  \*********************************************************/
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

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Zoom = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Zoom, _Component);

  var _super = _createSuper(Zoom);

  function Zoom(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Zoom);
    _this = _super.call(this, props); // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

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

  (0, _createClass2["default"])(Zoom, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Zoom;
}(_react.Component);

exports["default"] = Zoom;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbV9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQTs7Ozs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUdqQjs7QUFDQSxRQUFJQyxhQUFhLEdBQUcsOEJBQVlELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsYUFBSixDQUFXO0FBQ3ZCQyxNQUFBQSxXQUFXLEVBQUUsR0FEVTtBQUV2QkMsTUFBQUEsWUFBWSxFQUFFLEdBRlM7QUFHdkJDLE1BQUFBLGNBQWMsRUFBRVAsYUFBYSxDQUFDUSxZQUhQO0FBSXZCQyxNQUFBQSxlQUFlLEVBQUVULGFBQWEsQ0FBQ1UsYUFKUjtBQUt2QkMsTUFBQUEsTUFBTSxFQUFFLE1BQUtaLEtBQUwsQ0FBV1k7QUFMSSxLQUFYLENBQWQ7QUFRQSxRQUFJVixhQUFhLEdBQUdGLEtBQUssQ0FBQ0UsYUFBMUI7QUFDQUEsSUFBQUEsYUFBYSxDQUFDVyxZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsSUFBcEMsR0FBMkNYLE9BQTNDO0FBQ0FGLElBQUFBLGFBQWEsQ0FBQ2MsR0FBZCxDQUFrQkMsVUFBbEIsQ0FBNkJiLE9BQTdCO0FBZmlCO0FBZ0JsQjs7OztXQUVELGtCQUFTO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7OztFQXJCK0JjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXpvb20uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Wm9vbSBhcyBPbFpvb219IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIGxldCBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJy4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBjb250cm9sID0gbmV3IE9sWm9vbSh7XG4gICAgICB6b29tSW5MYWJlbDogJyAnLFxuICAgICAgem9vbU91dExhYmVsOiAnICcsXG4gICAgICB6b29tSW5UaXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX1pPT01fSU4sXG4gICAgICB6b29tT3V0VGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9aT09NX09VVCxcbiAgICAgIHRhcmdldDogdGhpcy5wcm9wcy50YXJnZXRcbiAgICB9KTtcblxuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy56b29tID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiWm9vbSIsInByb3BzIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY29udHJvbCIsIk9sWm9vbSIsInpvb21JbkxhYmVsIiwiem9vbU91dExhYmVsIiwiem9vbUluVGlwTGFiZWwiLCJDVFJMX1pPT01fSU4iLCJ6b29tT3V0VGlwTGFiZWwiLCJDVFJMX1pPT01fT1VUIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tIiwibWFwIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=