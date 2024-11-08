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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctdGl0bGViYXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcs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LFNBQVMsRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQ3lCO01BQWEsZ0JBQ3RDL0QsTUFBQSxZQUFBaUQsYUFBQTtRQUFNQyxTQUFTLEVBQUUsSUFBSSxDQUFDWixLQUFLLENBQUMwQjtNQUFZLEdBQUUsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMkIsTUFBYSxDQUFDLEVBQ2xFUixjQUFjLEVBQ2RMLFdBQVcsRUFDWE4sWUFBWSxFQUNaLElBQUksQ0FBQ1IsS0FBSyxDQUFDNEIsUUFDVCxDQUFDO0lBRVY7RUFBQztBQUFBLEVBaENtQ0MsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctdGl0bGViYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZWJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZGV0YWlsQnRuQ2xhc3MgJiYgdGhpcy5wcm9wcy5kZXRhaWxCdG5DYikge1xuICAgICAgZGV0YWlsQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGV0YWlsQnRuQ2xhc3N9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5kZXRhaWxCdG5DYn0+PC9idXR0b24+O1xuICAgIH1cbiAgICBsZXQgY2xvc2VCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlQnRuQ2xhc3MgJiYgdGhpcy5wcm9wcy5jbG9zZUJ0bkNiKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsb3NlQnRuQ2xhc3N9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5jbG9zZUJ0bkNifSB0aXRsZT17dGhpcy5wcm9wcy5jbG9zZUJ0blRpdGxlfT48L2J1dHRvbj47XG4gICAgfVxuICAgIGxldCBtaW5pbWl6ZUJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZUNvbnRhaW5lcikge1xuICAgICAgbGV0IG1pbmltaXplID0gKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCgpO1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5oaWRlQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfTtcbiAgICAgIG1pbmltaXplQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9eydjNGctc2lkZWJvYXJkLWhpZGUnfSBvbk1vdXNlVXA9eygpPT4gbWluaW1pemUoKX0vPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMud3JhcHBlckNsYXNzfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhlYWRlckNsYXNzfT57dGhpcy5wcm9wcy5oZWFkZXJ9PC9zcGFuPlxuICAgICAgICB7bWluaW1pemVCdXR0b259XG4gICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAge2RldGFpbEJ1dHRvbn1cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzIiwiZGV0YWlsQnV0dG9uIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbk1vdXNlVXAiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwidGl0bGUiLCJjbG9zZUJ0blRpdGxlIiwibWluaW1pemVCdXR0b24iLCJoaWRlQ29udGFpbmVyIiwibWluaW1pemUiLCJqUXVlcnkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=