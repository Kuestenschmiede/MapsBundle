(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-popup-buttons_jsx"],{

/***/ "./Resources/public/js/components/c4g-router-popup-buttons.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-popup-buttons.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterPopupButtons = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "./Resources/public/js/components/c4g-autocomplete-input.jsx");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterPopupButtons = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterPopupButtons, _Component);

  var _super = _createSuper(RouterPopupButtons);

  function RouterPopupButtons(props) {
    (0, _classCallCheck2["default"])(this, RouterPopupButtons);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(RouterPopupButtons, [{
    key: "render",
    value: function render() {
      var _this = this;

      var routeFrom = function routeFrom() {
        _this.props.config.router.openControls(true);

        _this.props.config.router.setMode("route"); // from address


        var fromCoords = (0, _proj.toLonLat)(_this.props.config.feature.getGeometry().getCoordinates(), "EPSG:3857");

        _this.props.config.router.setRouteFrom(fromCoords[0], fromCoords[1]);
      };

      var routeTo = function routeTo() {
        _this.props.config.router.openControls(true);

        _this.props.config.router.setMode("route"); // to address


        var toCoords = (0, _proj.toLonLat)(_this.props.config.feature.getGeometry().getCoordinates(), "EPSG:3857");

        _this.props.config.router.setRouteTo(toCoords[0], toCoords[1]);
      };

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        className: "c4g-icon c4g-popup-route-from",
        title: this.props.config.router.languageConstants.POPUP_ROUTE_FROM,
        onMouseUp: function onMouseUp() {
          routeFrom();
        }
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "c4g-icon c4g-popup-route-to",
        title: this.props.config.router.languageConstants.POPUP_ROUTE_TO,
        onMouseUp: function onMouseUp() {
          routeTo();
        }
      }));
    }
  }]);
  return RouterPopupButtons;
}(_react.Component);

exports.RouterPopupButtons = RouterPopupButtons;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcG9wdXAtYnV0dG9ucy5qc3giXSwibmFtZXMiOlsiUm91dGVyUG9wdXBCdXR0b25zIiwicHJvcHMiLCJyb3V0ZUZyb20iLCJjb25maWciLCJyb3V0ZXIiLCJvcGVuQ29udHJvbHMiLCJzZXRNb2RlIiwiZnJvbUNvb3JkcyIsImZlYXR1cmUiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwic2V0Um91dGVGcm9tIiwicm91dGVUbyIsInRvQ29vcmRzIiwic2V0Um91dGVUbyIsImxhbmd1YWdlQ29uc3RhbnRzIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSxrQjs7Ozs7QUFFVCw4QkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUNMLFVBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDbEIsYUFBSSxDQUFDRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLE1BQWxCLENBQXlCQyxZQUF6QixDQUFzQyxJQUF0Qzs7QUFDQSxhQUFJLENBQUNKLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUJFLE9BQXpCLENBQWlDLE9BQWpDLEVBRmtCLENBR2xCOzs7QUFDQSxZQUFJQyxVQUFVLEdBQUcsb0JBQVMsS0FBSSxDQUFDTixLQUFMLENBQVdFLE1BQVgsQ0FBa0JLLE9BQWxCLENBQTBCQyxXQUExQixHQUF3Q0MsY0FBeEMsRUFBVCxFQUFtRSxXQUFuRSxDQUFqQjs7QUFDQSxhQUFJLENBQUNULEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUJPLFlBQXpCLENBQXNDSixVQUFVLENBQUMsQ0FBRCxDQUFoRCxFQUFxREEsVUFBVSxDQUFDLENBQUQsQ0FBL0Q7QUFDSCxPQU5EOztBQU9BLFVBQUlLLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDaEIsYUFBSSxDQUFDWCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLE1BQWxCLENBQXlCQyxZQUF6QixDQUFzQyxJQUF0Qzs7QUFDQSxhQUFJLENBQUNKLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsTUFBbEIsQ0FBeUJFLE9BQXpCLENBQWlDLE9BQWpDLEVBRmdCLENBR2hCOzs7QUFDQSxZQUFJTyxRQUFRLEdBQUcsb0JBQVMsS0FBSSxDQUFDWixLQUFMLENBQVdFLE1BQVgsQ0FBa0JLLE9BQWxCLENBQTBCQyxXQUExQixHQUF3Q0MsY0FBeEMsRUFBVCxFQUFtRSxXQUFuRSxDQUFmOztBQUNBLGFBQUksQ0FBQ1QsS0FBTCxDQUFXRSxNQUFYLENBQWtCQyxNQUFsQixDQUF5QlUsVUFBekIsQ0FBb0NELFFBQVEsQ0FBQyxDQUFELENBQTVDLEVBQWlEQSxRQUFRLENBQUMsQ0FBRCxDQUF6RDtBQUNILE9BTkQ7O0FBT0EsMEJBQU8sMERBQ0g7QUFBUSxpQkFBUyxFQUFFLCtCQUFuQjtBQUFvRCxhQUFLLEVBQUUsS0FBS1osS0FBTCxDQUFXRSxNQUFYLENBQWtCQyxNQUFsQixDQUF5QlcsaUJBQXpCLENBQTJDQyxnQkFBdEc7QUFBd0gsaUJBQVMsRUFBRSxxQkFBSTtBQUFDZCxtQkFBUztBQUFHO0FBQXBKLFFBREcsZUFFSDtBQUFRLGlCQUFTLEVBQUUsNkJBQW5CO0FBQWtELGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLE1BQWxCLENBQXlCVyxpQkFBekIsQ0FBMkNFLGNBQXBHO0FBQW9ILGlCQUFTLEVBQUUscUJBQUk7QUFBQ0wsaUJBQU87QUFBRztBQUE5SSxRQUZHLENBQVA7QUFJSDs7O0VBekJtQ00sZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItcG9wdXAtYnV0dG9uc19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXV0b2NvbXBsZXRlSW5wdXR9IGZyb20gXCIuL2M0Zy1hdXRvY29tcGxldGUtaW5wdXQuanN4XCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5pbXBvcnQge3RvTG9uTGF0fSBmcm9tIFwib2wvcHJvalwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyUG9wdXBCdXR0b25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCByb3V0ZUZyb20gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5yb3V0ZXIub3BlbkNvbnRyb2xzKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcucm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgICAgICAgICAgIC8vIGZyb20gYWRkcmVzc1xuICAgICAgICAgICAgbGV0IGZyb21Db29yZHMgPSB0b0xvbkxhdCh0aGlzLnByb3BzLmNvbmZpZy5mZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwgXCJFUFNHOjM4NTdcIik7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5yb3V0ZXIuc2V0Um91dGVGcm9tKGZyb21Db29yZHNbMF0sIGZyb21Db29yZHNbMV0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgcm91dGVUbyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnJvdXRlci5vcGVuQ29udHJvbHModHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5yb3V0ZXIuc2V0TW9kZShcInJvdXRlXCIpO1xuICAgICAgICAgICAgLy8gdG8gYWRkcmVzc1xuICAgICAgICAgICAgbGV0IHRvQ29vcmRzID0gdG9Mb25MYXQodGhpcy5wcm9wcy5jb25maWcuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCksIFwiRVBTRzozODU3XCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcucm91dGVyLnNldFJvdXRlVG8odG9Db29yZHNbMF0sIHRvQ29vcmRzWzFdKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctaWNvbiBjNGctcG9wdXAtcm91dGUtZnJvbVwifSB0aXRsZT17dGhpcy5wcm9wcy5jb25maWcucm91dGVyLmxhbmd1YWdlQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST019IG9uTW91c2VVcD17KCk9Pntyb3V0ZUZyb20oKX19Lz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1pY29uIGM0Zy1wb3B1cC1yb3V0ZS10b1wifSB0aXRsZT17dGhpcy5wcm9wcy5jb25maWcucm91dGVyLmxhbmd1YWdlQ29uc3RhbnRzLlBPUFVQX1JPVVRFX1RPfSBvbk1vdXNlVXA9eygpPT57cm91dGVUbygpfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==