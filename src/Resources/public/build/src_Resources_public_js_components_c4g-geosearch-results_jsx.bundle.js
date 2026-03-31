"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-geosearch-results_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-geosearch-results.jsx"
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-geosearch-results.jsx ***!
  \**********************************************************************/
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
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoLXJlc3VsdHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFBaUMsU0FBQUQsd0JBQUFJLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFOLHVCQUFBLFlBQUFBLHdCQUFBSSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFB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QUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDLEVBQUU7UUFDeEUsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDO1FBQzVELG9CQUFPRyxvQkFBUSxDQUFDQyxZQUFZLGNBRXhCM0UsTUFBQSxZQUFBc0QsYUFBQTtVQUFLYSxTQUFTLEVBQUUsNkNBQTZDLEdBQUcsSUFBSSxDQUFDNUIsS0FBSyxDQUFDNEIsU0FBUyxHQUFHO1FBQWEsZ0JBR2xHbkUsTUFBQSxZQUFBc0QsYUFBQTtVQUFLYSxTQUFTLEVBQUU7UUFBb0IsR0FDakNwQixlQUNFLENBQ0YsQ0FBQyxFQUVSd0IsTUFDRixDQUFDO01BQ0gsQ0FBQyxNQUFNO1FBQ0wsb0JBQ0V2RSxNQUFBLFlBQUFzRCxhQUFBO1VBQUthLFNBQVMsRUFBRSxnQ0FBZ0MsR0FBRyxJQUFJLENBQUM1QixLQUFLLENBQUM0QixTQUFTLEdBQUc7UUFBYSxnQkFHckZuRSxNQUFBLFlBQUFzRCxhQUFBO1VBQUthLFNBQVMsRUFBRTtRQUFvQixHQUNqQ3BCLGVBQ0UsQ0FDRixDQUFDO01BRVY7SUFFRjtFQUFDO0FBQUEsRUF4RDJDNkIsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb1NlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgcmVzdWx0Q29udGFpbmVyID0gXCJcIjtcbiAgICBsZXQgZmlyc3RSZXN1bHQgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xvc2VCdG5DbGFzcyA9IFwiYzRnLXRpdGxlYmFyLWNsb3NlXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2IgPSB0aGlzLnByb3BzLmNsb3NlQ2I7XG5cbiAgICByZXN1bHRDb250YWluZXIgPSA8dWwgaWQ9e1wicmVzdWx0Y29udGFpbmVyXCJ9PlxuICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzID0gXCJzZWFyY2hSZXN1bHRCdXR0b25cIjtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHNjb3BlLnByb3BzLmN1cnJlbnRSZXN1bHQpIHtcbiAgICAgICAgICBidXR0b25DbGFzcyArPSBcIiBjNGctYWN0aXZlXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZ1bmMgPSBlbGVtZW50LmhyZWYgPyAoKSA9PiB7XG4gICAgICAgICAgd2luZG93Lm9wZW4oZWxlbWVudC5ocmVmKVxuICAgICAgICB9IDogKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnpvb21GdW5jKGluZGV4KVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fT48YnV0dG9uIGtleT17aW5kZXh9IGlkPXtpbmRleH0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gbmFtZT17ZWxlbWVudC5kaXNwbGF5X25hbWV9IG9uTW91c2VVcD17KCkgPT4gZnVuYygpfT57ZWxlbWVudC5kaXNwbGF5X25hbWV9PC9idXR0b24+PC9saT4pXG4gICAgICB9KX1cbiAgICA8L3VsPjtcblxuICAgIGlmICh0aGlzLnByb3BzLmV4dERpdiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5wcm9wcy5leHREaXYpKSB7XG4gICAgICBsZXQgZXh0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMucHJvcHMuZXh0RGl2KTtcbiAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBjNGctZXh0ZXJuYWwgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArIFwiIGM0Zy1iZWFjaFwifT5cbiAgICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17ZGV0YWlsQnRuQ2xhc3N9IGRldGFpbEJ0bkNiPXtkZXRhaWxCdG5DYn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0vPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJlYWNoLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgZXh0RGl2XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgYzRnLWJlYWNoXCJ9PlxuICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICB7LyogICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e2RldGFpbEJ0bkNsYXNzfSBkZXRhaWxCdG5DYj17ZGV0YWlsQnRuQ2J9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9Lz4qL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmVhY2gtY29udGVudFwifT5cbiAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9yZWFjdERvbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJHZW9TZWFyY2hSZXN1bHRzIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwic2NvcGUiLCJyZXN1bHRDb250YWluZXIiLCJmaXJzdFJlc3VsdCIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQ2IiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJyZXN1bHRzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYnV0dG9uQ2xhc3MiLCJjdXJyZW50UmVzdWx0IiwiZnVuYyIsImhyZWYiLCJ3aW5kb3ciLCJvcGVuIiwiem9vbUZ1bmMiLCJjbGFzc05hbWUiLCJuYW1lIiwiZGlzcGxheV9uYW1lIiwib25Nb3VzZVVwIiwiZXh0RGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJDb21wb25lbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==