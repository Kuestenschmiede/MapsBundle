"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-titlebar_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-titlebar.jsx"
/*!*************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-titlebar.jsx ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctdGl0bGViYXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUF1QyxTQUFBRCx3QkFBQUUsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUosdUJBQUEsWUFBQUEsd0JBQUFFLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFBQUwsQ0FBQSxDQUFBTSxHQUFBLElBQUFQLENBQUEsQ0FBQUUsQ0FBQSxFQUFBTSxFQUFBLEVBQUFQLENBQUEsSUFBQUMsQ0FBQSxDQUFBTSxFQUFBLElBQUFkLENB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WixLQUFLLENBQUMwQjtNQUFZLEdBQUUsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMkIsTUFBYSxDQUFDLEVBQ2xFUixjQUFjLEVBQ2RMLFdBQVcsRUFDWE4sWUFBWSxFQUNaLElBQUksQ0FBQ1IsS0FBSyxDQUFDNEIsUUFDVCxDQUFDO0lBRVY7RUFBQztBQUFBLEVBaENtQ0MsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXRhaWxCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmRldGFpbEJ0bkNsYXNzICYmIHRoaXMucHJvcHMuZGV0YWlsQnRuQ2IpIHtcbiAgICAgIGRldGFpbEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmRldGFpbEJ0bkNsYXNzfSBvbk1vdXNlVXA9e3RoaXMucHJvcHMuZGV0YWlsQnRuQ2J9PjwvYnV0dG9uPjtcbiAgICB9XG4gICAgbGV0IGNsb3NlQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZUJ0bkNsYXNzICYmIHRoaXMucHJvcHMuY2xvc2VCdG5DYikge1xuICAgICAgY2xvc2VCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbG9zZUJ0bkNsYXNzfSBvbk1vdXNlVXA9e3RoaXMucHJvcHMuY2xvc2VCdG5DYn0gdGl0bGU9e3RoaXMucHJvcHMuY2xvc2VCdG5UaXRsZX0+PC9idXR0b24+O1xuICAgIH1cbiAgICBsZXQgbWluaW1pemVCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmhpZGVDb250YWluZXIpIHtcbiAgICAgIGxldCBtaW5pbWl6ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQoKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMuaGlkZUNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIH07XG4gICAgICBtaW5pbWl6ZUJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXsnYzRnLXNpZGVib2FyZC1oaWRlJ30gb25Nb3VzZVVwPXsoKT0+IG1pbmltaXplKCl9Lz5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndyYXBwZXJDbGFzc30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5oZWFkZXJDbGFzc30+e3RoaXMucHJvcHMuaGVhZGVyfTwvc3Bhbj5cbiAgICAgICAge21pbmltaXplQnV0dG9ufVxuICAgICAgICB7Y2xvc2VCdXR0b259XG4gICAgICAgIHtkZXRhaWxCdXR0b259XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpdGxlYmFyIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMiLCJkZXRhaWxCdXR0b24iLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uTW91c2VVcCIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJ0aXRsZSIsImNsb3NlQnRuVGl0bGUiLCJtaW5pbWl6ZUJ1dHRvbiIsImhpZGVDb250YWluZXIiLCJtaW5pbWl6ZSIsImpRdWVyeSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=