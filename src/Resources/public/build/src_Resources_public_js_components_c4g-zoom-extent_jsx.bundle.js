"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-zoom-extent_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-zoom-extent.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-zoom-extent.jsx ***!
  \****************************************************************/
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

var ZoomExtent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ZoomExtent, _Component);

  var _super = _createSuper(ZoomExtent);

  function ZoomExtent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ZoomExtent);
    _this = _super.call(this, props); // let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + '.' + cssConstants.OL_UNSELECTABLE);

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

  (0, _createClass2["default"])(ZoomExtent, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ZoomExtent;
}(_react.Component);

exports["default"] = ZoomExtent;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctem9vbS1leHRlbnRfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0VBRW5CLG9CQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU4sRUFEaUIsQ0FHakI7O0lBQ0EsSUFBSUMsYUFBYSxHQUFHLElBQUFDLHdCQUFBLEVBQVlGLEtBQUssQ0FBQ0csYUFBTixDQUFvQkMsSUFBaEMsQ0FBcEI7SUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBSUMscUJBQUosQ0FBaUI7TUFDN0JDLEtBQUssRUFBRSxHQURzQjtNQUU3QkMsUUFBUSxFQUFFUCxhQUFhLENBQUNRLGFBRks7TUFHN0JDLE1BQU0sRUFBRSxNQUFLVixLQUFMLENBQVdVO0lBSFUsQ0FBakIsQ0FBZDtJQU1BLElBQUlQLGFBQWEsR0FBR0gsS0FBSyxDQUFDRyxhQUExQjtJQUNBQSxhQUFhLENBQUNRLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxVQUFwQyxHQUFpRFIsT0FBakQ7SUFDQUYsYUFBYSxDQUFDVyxHQUFkLENBQWtCQyxVQUFsQixDQUE2QlYsT0FBN0I7SUFiaUI7RUFjbEI7Ozs7V0FFRCxrQkFBUztNQUNQLE9BQU8sSUFBUDtJQUNEOzs7RUFwQnFDVyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy16b29tLWV4dGVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1pvb21Ub0V4dGVudH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbUV4dGVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBsZXQgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBab29tVG9FeHRlbnQoe1xuICAgICAgbGFiZWw6ICcgJyxcbiAgICAgIHRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLkNUUkxfWk9PTV9FWFQsXG4gICAgICB0YXJnZXQ6IHRoaXMucHJvcHMudGFyZ2V0XG4gICAgfSk7XG5cbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuem9vbUV4dGVudCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIlpvb21FeHRlbnQiLCJwcm9wcyIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY29udHJvbCIsIlpvb21Ub0V4dGVudCIsImxhYmVsIiwidGlwTGFiZWwiLCJDVFJMX1pPT01fRVhUIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJ6b29tRXh0ZW50IiwibWFwIiwiYWRkQ29udHJvbCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=