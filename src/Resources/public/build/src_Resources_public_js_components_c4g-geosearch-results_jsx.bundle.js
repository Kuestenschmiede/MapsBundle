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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoLXJlc3VsdHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBaUMsU0FBQUcseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFMLHdCQUFBSyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLE9BQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJ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LENBQUNXLFlBQXFCLENBQUssQ0FBQztNQUMxSyxDQUFDLENBQ0MsQ0FBQztNQUVMLElBQUksSUFBSSxDQUFDOUIsS0FBSyxDQUFDZ0MsTUFBTSxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDLEVBQUU7UUFDeEUsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDO1FBQzVELG9CQUFPRyxvQkFBUSxDQUFDQyxZQUFZLGNBRXhCNUUsTUFBQSxZQUFBdUQsYUFBQTtVQUFLYSxTQUFTLEVBQUUsNkNBQTZDLEdBQUcsSUFBSSxDQUFDNUIsS0FBSyxDQUFDNEIsU0FBUyxHQUFHO1FBQWEsZ0JBR2xHcEUsTUFBQSxZQUFBdUQsYUFBQTtVQUFLYSxTQUFTLEVBQUU7UUFBb0IsR0FDakNwQixlQUNFLENBQ0YsQ0FBQyxFQUVSd0IsTUFDRixDQUFDO01BQ0gsQ0FBQyxNQUFNO1FBQ0wsb0JBQ0V4RSxNQUFBLFlBQUF1RCxhQUFBO1VBQUthLFNBQVMsRUFBRSxnQ0FBZ0MsR0FBRyxJQUFJLENBQUM1QixLQUFLLENBQUM0QixTQUFTLEdBQUc7UUFBYSxnQkFHckZwRSxNQUFBLFlBQUF1RCxhQUFBO1VBQUthLFNBQVMsRUFBRTtRQUFvQixHQUNqQ3BCLGVBQ0UsQ0FDRixDQUFDO01BRVY7SUFFRjtFQUFDO0FBQUEsRUF4RDJDNkIsZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZ2Vvc2VhcmNoLXJlc3VsdHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCByZXN1bHRDb250YWluZXIgPSBcIlwiO1xuICAgIGxldCBmaXJzdFJlc3VsdCA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2IgPSBcIlwiO1xuICAgIGxldCBjbG9zZUJ0bkNsYXNzID0gXCJjNGctdGl0bGViYXItY2xvc2VcIjtcbiAgICBsZXQgY2xvc2VCdG5DYiA9IHRoaXMucHJvcHMuY2xvc2VDYjtcblxuICAgIHJlc3VsdENvbnRhaW5lciA9IDx1bCBpZD17XCJyZXN1bHRjb250YWluZXJcIn0+XG4gICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICBsZXQgYnV0dG9uQ2xhc3MgPSBcInNlYXJjaFJlc3VsdEJ1dHRvblwiO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gc2NvcGUucHJvcHMuY3VycmVudFJlc3VsdCkge1xuICAgICAgICAgIGJ1dHRvbkNsYXNzICs9IFwiIGM0Zy1hY3RpdmVcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnVuYyA9IGVsZW1lbnQuaHJlZiA/ICgpID0+IHtcbiAgICAgICAgICB3aW5kb3cub3BlbihlbGVtZW50LmhyZWYpXG4gICAgICAgIH0gOiAoKSA9PiB7XG4gICAgICAgICAgc2NvcGUucHJvcHMuem9vbUZ1bmMoaW5kZXgpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxidXR0b24ga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfSBuYW1lPXtlbGVtZW50LmRpc3BsYXlfbmFtZX0gb25Nb3VzZVVwPXsoKSA9PiBmdW5jKCl9PntlbGVtZW50LmRpc3BsYXlfbmFtZX08L2J1dHRvbj48L2xpPilcbiAgICAgIH0pfVxuICAgIDwvdWw+O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZXh0RGl2ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLnByb3BzLmV4dERpdikpIHtcbiAgICAgIGxldCBleHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5wcm9wcy5leHREaXYpO1xuICAgICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1jb250ZW50IGM0Zy1leHRlcm5hbCBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgYzRnLWJlYWNoXCJ9PlxuICAgICAgICAgICAgey8qPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGVyIGM0Zy1iZWFjaC1oZWFkZXJcIn0gaGVhZGVyPXt0aGlzLnByb3BzLmhlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGxpbmUgYzRnLWJlYWNoLWhlYWRlci1oZWFkbGluZVwifSovfVxuICAgICAgICAgICAgey8qICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtkZXRhaWxCdG5DbGFzc30gZGV0YWlsQnRuQ2I9e2RldGFpbEJ0bkNifSBjbG9zZUJ0bkNsYXNzPXtjbG9zZUJ0bkNsYXNzfSBjbG9zZUJ0bkNiPXtjbG9zZUJ0bkNifS8+Ki99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmVhY2gtY29udGVudFwifT5cbiAgICAgICAgICAgICAge3Jlc3VsdENvbnRhaW5lcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgICBleHREaXZcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1jb250ZW50IFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgKyBcIiBjNGctYmVhY2hcIn0+XG4gICAgICAgICAgey8qPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGVyIGM0Zy1iZWFjaC1oZWFkZXJcIn0gaGVhZGVyPXt0aGlzLnByb3BzLmhlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGxpbmUgYzRnLWJlYWNoLWhlYWRlci1oZWFkbGluZVwifSovfVxuICAgICAgICAgIHsvKiAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17ZGV0YWlsQnRuQ2xhc3N9IGRldGFpbEJ0bkNiPXtkZXRhaWxCdG5DYn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0vPiovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iZWFjaC1jb250ZW50XCJ9PlxuICAgICAgICAgICAge3Jlc3VsdENvbnRhaW5lcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX3JlYWN0RG9tIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiR2VvU2VhcmNoUmVzdWx0cyIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsInNjb3BlIiwicmVzdWx0Q29udGFpbmVyIiwiZmlyc3RSZXN1bHQiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUNiIiwiY3JlYXRlRWxlbWVudCIsImlkIiwicmVzdWx0cyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImJ1dHRvbkNsYXNzIiwiY3VycmVudFJlc3VsdCIsImZ1bmMiLCJocmVmIiwid2luZG93Iiwib3BlbiIsInpvb21GdW5jIiwiY2xhc3NOYW1lIiwibmFtZSIsImRpc3BsYXlfbmFtZSIsIm9uTW91c2VVcCIsImV4dERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==