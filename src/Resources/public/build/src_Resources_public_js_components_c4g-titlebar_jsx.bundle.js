"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-titlebar_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-titlebar.jsx":
/*!*************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-titlebar.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var Titlebar = exports["default"] = /*#__PURE__*/function (_Component) {
  function Titlebar(props) {
    (0, _classCallCheck2["default"])(this, Titlebar);
    return _callSuper(this, Titlebar, [props]);
  }
  (0, _inherits2["default"])(Titlebar, _Component);
  return (0, _createClass2["default"])(Titlebar, [{
    key: "render",
    value: function render() {
      var _this = this;
      var detailButton = "";
      if (this.props.detailBtnClass && this.props.detailBtnCb) {
        detailButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.detailBtnClass,
          onMouseUp: this.props.detailBtnCb
        });
      }
      var closeButton = "";
      if (this.props.closeBtnClass && this.props.closeBtnCb) {
        closeButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.closeBtnClass,
          onMouseUp: this.props.closeBtnCb,
          title: this.props.closeBtnTitle
        });
      }
      var minimizeButton = "";
      if (this.props.hideContainer) {
        var minimize = function minimize() {
          // this.props.removeComponent();
          jQuery(_this.props.hideContainer).removeClass("c4g-open").addClass("c4g-close");
        };
        minimizeButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: 'c4g-sideboard-hide',
          onMouseUp: function onMouseUp() {
            return minimize();
          }
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.wrapperClass
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: this.props.headerClass
      }, this.props.header), minimizeButton, closeButton, detailButton, this.props.children);
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctdGl0bGViYXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBRCx3QkFBQUUsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUosdUJBQUEsWUFBQUEsd0JBQUFFLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFBQUwsQ0FBQSxDQUFBTSxHQUFBLElBQUFQLENBQUEsQ0FBQUUsQ0FBQSxFQUFBTSxFQUFBLEVBQUFQLENBQUEsSUFBQUMsQ0FBQSxDQUFBTSxFQUFBLElBQUFkLENB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WixLQUFLLENBQUMwQjtNQUFZLEdBQUUsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMkIsTUFBYSxDQUFDLEVBQ2xFUixjQUFjLEVBQ2RMLFdBQVcsRUFDWE4sWUFBWSxFQUNaLElBQUksQ0FBQ1IsS0FBSyxDQUFDNEIsUUFDVCxDQUFDO0lBRVY7RUFBQztBQUFBLEVBaENtQ0MsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZGV0YWlsQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5kZXRhaWxCdG5DbGFzcyAmJiB0aGlzLnByb3BzLmRldGFpbEJ0bkNiKSB7XG4gICAgICBkZXRhaWxCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5kZXRhaWxCdG5DbGFzc30gb25Nb3VzZVVwPXt0aGlzLnByb3BzLmRldGFpbEJ0bkNifT48L2J1dHRvbj47XG4gICAgfVxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VCdG5DbGFzcyAmJiB0aGlzLnByb3BzLmNsb3NlQnRuQ2IpIHtcbiAgICAgIGNsb3NlQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xvc2VCdG5DbGFzc30gb25Nb3VzZVVwPXt0aGlzLnByb3BzLmNsb3NlQnRuQ2J9IHRpdGxlPXt0aGlzLnByb3BzLmNsb3NlQnRuVGl0bGV9PjwvYnV0dG9uPjtcbiAgICB9XG4gICAgbGV0IG1pbmltaXplQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlQ29udGFpbmVyKSB7XG4gICAgICBsZXQgbWluaW1pemUgPSAoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMucHJvcHMucmVtb3ZlQ29tcG9uZW50KCk7XG4gICAgICAgIGpRdWVyeSh0aGlzLnByb3BzLmhpZGVDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICB9O1xuICAgICAgbWluaW1pemVCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17J2M0Zy1zaWRlYm9hcmQtaGlkZSd9IG9uTW91c2VVcD17KCk9PiBtaW5pbWl6ZSgpfS8+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy53cmFwcGVyQ2xhc3N9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaGVhZGVyQ2xhc3N9Pnt0aGlzLnByb3BzLmhlYWRlcn08L3NwYW4+XG4gICAgICAgIHttaW5pbWl6ZUJ1dHRvbn1cbiAgICAgICAge2Nsb3NlQnV0dG9ufVxuICAgICAgICB7ZGV0YWlsQnV0dG9ufVxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzIiwiZGV0YWlsQnV0dG9uIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbk1vdXNlVXAiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwidGl0bGUiLCJjbG9zZUJ0blRpdGxlIiwibWluaW1pemVCdXR0b24iLCJoaWRlQ29udGFpbmVyIiwibWluaW1pemUiLCJqUXVlcnkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=