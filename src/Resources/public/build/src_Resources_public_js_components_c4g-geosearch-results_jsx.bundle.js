"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-geosearch-results_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-geosearch-results.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-geosearch-results.jsx ***!
  \**********************************************************************/
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
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
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
var GeoSearchResults = exports["default"] = /*#__PURE__*/function (_Component) {
  function GeoSearchResults(props) {
    (0, _classCallCheck2["default"])(this, GeoSearchResults);
    return _callSuper(this, GeoSearchResults, [props]);
  }
  (0, _inherits2["default"])(GeoSearchResults, _Component);
  return (0, _createClass2["default"])(GeoSearchResults, [{
    key: "render",
    value: function render() {
      var scope = this;
      var resultContainer = "";
      var firstResult = "";
      var detailBtnClass = "";
      var detailBtnCb = "";
      var closeBtnClass = "c4g-titlebar-close";
      var closeBtnCb = this.props.closeCb;
      resultContainer = /*#__PURE__*/_react["default"].createElement("ul", {
        id: "resultcontainer"
      }, this.props.results.map(function (element, index) {
        var buttonClass = "searchResultButton";
        if (element === scope.props.currentResult) {
          buttonClass += " c4g-active";
        }
        var func = element.href ? function () {
          window.open(element.href);
        } : function () {
          scope.props.zoomFunc(index);
        };
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          id: index,
          className: buttonClass,
          name: element.display_name,
          onMouseUp: function onMouseUp() {
            return func();
          }
        }, element.display_name));
      }));
      if (this.props.extDiv && document.querySelector("." + this.props.extDiv)) {
        var extDiv = document.querySelector("." + this.props.extDiv);
        return /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content c4g-external " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer)), extDiv);
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer));
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoLXJlc3VsdHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBaUMsU0FBQUQsd0JBQUFJLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFOLHVCQUFBLFlBQUFBLHdCQUFBSSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFB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QUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDLEVBQUU7UUFDeEUsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDO1FBQzVELG9CQUFPRyxvQkFBUSxDQUFDQyxZQUFZLGNBRXhCM0UsTUFBQSxZQUFBc0QsYUFBQTtVQUFLYSxTQUFTLEVBQUUsNkNBQTZDLEdBQUcsSUFBSSxDQUFDNUIsS0FBSyxDQUFDNEIsU0FBUyxHQUFHO1FBQWEsZ0JBR2xHbkUsTUFBQSxZQUFBc0QsYUFBQTtVQUFLYSxTQUFTLEVBQUU7UUFBb0IsR0FDakNwQixlQUNFLENBQ0YsQ0FBQyxFQUVSd0IsTUFDRixDQUFDO01BQ0gsQ0FBQyxNQUFNO1FBQ0wsb0JBQ0V2RSxNQUFBLFlBQUFzRCxhQUFBO1VBQUthLFNBQVMsRUFBRSxnQ0FBZ0MsR0FBRyxJQUFJLENBQUM1QixLQUFLLENBQUM0QixTQUFTLEdBQUc7UUFBYSxnQkFHckZuRSxNQUFBLFlBQUFzRCxhQUFBO1VBQUthLFNBQVMsRUFBRTtRQUFvQixHQUNqQ3BCLGVBQ0UsQ0FDRixDQUFDO01BRVY7SUFFRjtFQUFDO0FBQUEsRUF4RDJDNkIsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9TZWFyY2hSZXN1bHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdENvbnRhaW5lciA9IFwiXCI7XG4gICAgbGV0IGZpcnN0UmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2xhc3MgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DYiA9IFwiXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2xhc3MgPSBcImM0Zy10aXRsZWJhci1jbG9zZVwiO1xuICAgIGxldCBjbG9zZUJ0bkNiID0gdGhpcy5wcm9wcy5jbG9zZUNiO1xuXG4gICAgcmVzdWx0Q29udGFpbmVyID0gPHVsIGlkPXtcInJlc3VsdGNvbnRhaW5lclwifT5cbiAgICAgIHt0aGlzLnByb3BzLnJlc3VsdHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IFwic2VhcmNoUmVzdWx0QnV0dG9uXCI7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBzY29wZS5wcm9wcy5jdXJyZW50UmVzdWx0KSB7XG4gICAgICAgICAgYnV0dG9uQ2xhc3MgKz0gXCIgYzRnLWFjdGl2ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmdW5jID0gZWxlbWVudC5ocmVmID8gKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5vcGVuKGVsZW1lbnQuaHJlZilcbiAgICAgICAgfSA6ICgpID0+IHtcbiAgICAgICAgICBzY29wZS5wcm9wcy56b29tRnVuYyhpbmRleClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpbmRleH0+PGJ1dHRvbiBrZXk9e2luZGV4fSBpZD17aW5kZXh9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9IG5hbWU9e2VsZW1lbnQuZGlzcGxheV9uYW1lfSBvbk1vdXNlVXA9eygpID0+IGZ1bmMoKX0+e2VsZW1lbnQuZGlzcGxheV9uYW1lfTwvYnV0dG9uPjwvbGk+KVxuICAgICAgfSl9XG4gICAgPC91bD47XG5cbiAgICBpZiAodGhpcy5wcm9wcy5leHREaXYgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMucHJvcHMuZXh0RGl2KSkge1xuICAgICAgbGV0IGV4dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLnByb3BzLmV4dERpdik7XG4gICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQgYzRnLWV4dGVybmFsIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgKyBcIiBjNGctYmVhY2hcIn0+XG4gICAgICAgICAgICB7Lyo8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkZXIgYzRnLWJlYWNoLWhlYWRlclwifSBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkbGluZSBjNGctYmVhY2gtaGVhZGVyLWhlYWRsaW5lXCJ9Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e2RldGFpbEJ0bkNsYXNzfSBkZXRhaWxCdG5DYj17ZGV0YWlsQnRuQ2J9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9Lz4qL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iZWFjaC1jb250ZW50XCJ9PlxuICAgICAgICAgICAgICB7cmVzdWx0Q29udGFpbmVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgICAgIGV4dERpdlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArIFwiIGM0Zy1iZWFjaFwifT5cbiAgICAgICAgICB7Lyo8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkZXIgYzRnLWJlYWNoLWhlYWRlclwifSBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkbGluZSBjNGctYmVhY2gtaGVhZGVyLWhlYWRsaW5lXCJ9Ki99XG4gICAgICAgICAgey8qICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtkZXRhaWxCdG5DbGFzc30gZGV0YWlsQnRuQ2I9e2RldGFpbEJ0bkNifSBjbG9zZUJ0bkNsYXNzPXtjbG9zZUJ0bkNsYXNzfSBjbG9zZUJ0bkNiPXtjbG9zZUJ0bkNifS8+Ki99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJlYWNoLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICB7cmVzdWx0Q29udGFpbmVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfcmVhY3REb20iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiR2VvU2VhcmNoUmVzdWx0cyIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsInNjb3BlIiwicmVzdWx0Q29udGFpbmVyIiwiZmlyc3RSZXN1bHQiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUNiIiwiY3JlYXRlRWxlbWVudCIsImlkIiwicmVzdWx0cyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImJ1dHRvbkNsYXNzIiwiY3VycmVudFJlc3VsdCIsImZ1bmMiLCJocmVmIiwid2luZG93Iiwib3BlbiIsInpvb21GdW5jIiwiY2xhc3NOYW1lIiwibmFtZSIsImRpc3BsYXlfbmFtZSIsIm9uTW91c2VVcCIsImV4dERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==