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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeoSearchResults = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeoSearchResults, _Component);

  var _super = _createSuper(GeoSearchResults);

  function GeoSearchResults(props) {
    (0, _classCallCheck2["default"])(this, GeoSearchResults);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(GeoSearchResults, [{
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

        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          id: index,
          className: buttonClass,
          name: element,
          onMouseUp: function onMouseUp() {
            return scope.props.zoomFunc(index);
          }
        }, element));
      }));

      if (this.props.extDiv && document.querySelector("." + this.props.extDiv)) {
        var extDiv = document.querySelector("." + this.props.extDiv);
        return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
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
  return GeoSearchResults;
}(_react.Component);

exports["default"] = GeoSearchResults;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoLXJlc3VsdHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0VBQ25CLDBCQUFZQyxLQUFaLEVBQW1CO0lBQUE7SUFBQSx5QkFDWEEsS0FEVztFQUdsQjs7OztXQUVELGtCQUFTO01BQ1AsSUFBTUMsS0FBSyxHQUFHLElBQWQ7TUFDQSxJQUFJQyxlQUFlLEdBQUcsRUFBdEI7TUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7TUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7TUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7TUFDQSxJQUFJQyxhQUFhLEdBQUcsb0JBQXBCO01BQ0EsSUFBSUMsVUFBVSxHQUFHLEtBQUtQLEtBQUwsQ0FBV1EsT0FBNUI7TUFFQU4sZUFBZSxnQkFBRztRQUFJLEVBQUUsRUFBRTtNQUFSLEdBQ2YsS0FBS0YsS0FBTCxDQUFXUyxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtRQUMvQyxJQUFJQyxXQUFXLEdBQUcsb0JBQWxCOztRQUNBLElBQUlGLE9BQU8sS0FBS1YsS0FBSyxDQUFDRCxLQUFOLENBQVljLGFBQTVCLEVBQTJDO1VBQ3pDRCxXQUFXLElBQUksYUFBZjtRQUNEOztRQUNELG9CQUFRO1VBQUksR0FBRyxFQUFFRDtRQUFULGdCQUFnQjtVQUFRLEdBQUcsRUFBRUEsS0FBYjtVQUFvQixFQUFFLEVBQUVBLEtBQXhCO1VBQStCLFNBQVMsRUFBRUMsV0FBMUM7VUFBdUQsSUFBSSxFQUFFRixPQUE3RDtVQUFzRSxTQUFTLEVBQUU7WUFBQSxPQUFNVixLQUFLLENBQUNELEtBQU4sQ0FBWWUsUUFBWixDQUFxQkgsS0FBckIsQ0FBTjtVQUFBO1FBQWpGLEdBQXFIRCxPQUFySCxDQUFoQixDQUFSO01BQ0QsQ0FOQSxDQURlLENBQWxCOztNQVVBLElBQUksS0FBS1gsS0FBTCxDQUFXZ0IsTUFBWCxJQUFxQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU0sS0FBS2xCLEtBQUwsQ0FBV2dCLE1BQXhDLENBQXpCLEVBQTBFO1FBQ3hFLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU0sS0FBS2xCLEtBQUwsQ0FBV2dCLE1BQXhDLENBQWI7UUFDQSxvQkFBT0csb0JBQUEsQ0FBU0MsWUFBVCxlQUVIO1VBQUssU0FBUyxFQUFFLGdEQUFnRCxLQUFLcEIsS0FBTCxDQUFXcUIsU0FBM0QsR0FBdUU7UUFBdkYsZ0JBR0U7VUFBSyxTQUFTLEVBQUU7UUFBaEIsR0FDR25CLGVBREgsQ0FIRixDQUZHLEVBVUxjLE1BVkssQ0FBUDtNQVlELENBZEQsTUFjTztRQUNMLG9CQUNFO1VBQUssU0FBUyxFQUFFLG1DQUFtQyxLQUFLaEIsS0FBTCxDQUFXcUIsU0FBOUMsR0FBMEQ7UUFBMUUsZ0JBR0U7VUFBSyxTQUFTLEVBQUU7UUFBaEIsR0FDR25CLGVBREgsQ0FIRixDQURGO01BU0Q7SUFFRjs7O0VBbkQyQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb1NlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgcmVzdWx0Q29udGFpbmVyID0gXCJcIjtcbiAgICBsZXQgZmlyc3RSZXN1bHQgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xvc2VCdG5DbGFzcyA9IFwiYzRnLXRpdGxlYmFyLWNsb3NlXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2IgPSB0aGlzLnByb3BzLmNsb3NlQ2I7XG5cbiAgICByZXN1bHRDb250YWluZXIgPSA8dWwgaWQ9e1wicmVzdWx0Y29udGFpbmVyXCJ9PlxuICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzID0gXCJzZWFyY2hSZXN1bHRCdXR0b25cIjtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHNjb3BlLnByb3BzLmN1cnJlbnRSZXN1bHQpIHtcbiAgICAgICAgICBidXR0b25DbGFzcyArPSBcIiBjNGctYWN0aXZlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8bGkga2V5PXtpbmRleH0+PGJ1dHRvbiBrZXk9e2luZGV4fSBpZD17aW5kZXh9IGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9IG5hbWU9e2VsZW1lbnR9IG9uTW91c2VVcD17KCkgPT4gc2NvcGUucHJvcHMuem9vbUZ1bmMoaW5kZXgpfT57ZWxlbWVudH08L2J1dHRvbj48L2xpPilcbiAgICAgIH0pfVxuICAgIDwvdWw+O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZXh0RGl2ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLnByb3BzLmV4dERpdikpIHtcbiAgICAgIGxldCBleHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5wcm9wcy5leHREaXYpO1xuICAgICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1jb250ZW50IGM0Zy1leHRlcm5hbCBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgYzRnLWJlYWNoXCJ9PlxuICAgICAgICAgICAgey8qPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGVyIGM0Zy1iZWFjaC1oZWFkZXJcIn0gaGVhZGVyPXt0aGlzLnByb3BzLmhlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGxpbmUgYzRnLWJlYWNoLWhlYWRlci1oZWFkbGluZVwifSovfVxuICAgICAgICAgICAgey8qICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtkZXRhaWxCdG5DbGFzc30gZGV0YWlsQnRuQ2I9e2RldGFpbEJ0bkNifSBjbG9zZUJ0bkNsYXNzPXtjbG9zZUJ0bkNsYXNzfSBjbG9zZUJ0bkNiPXtjbG9zZUJ0bkNifS8+Ki99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmVhY2gtY29udGVudFwifT5cbiAgICAgICAgICAgICAge3Jlc3VsdENvbnRhaW5lcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgICBleHREaXZcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1jb250ZW50IFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgKyBcIiBjNGctYmVhY2hcIn0+XG4gICAgICAgICAgey8qPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGVyIGM0Zy1iZWFjaC1oZWFkZXJcIn0gaGVhZGVyPXt0aGlzLnByb3BzLmhlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtaGVhZGxpbmUgYzRnLWJlYWNoLWhlYWRlci1oZWFkbGluZVwifSovfVxuICAgICAgICAgIHsvKiAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17ZGV0YWlsQnRuQ2xhc3N9IGRldGFpbEJ0bkNiPXtkZXRhaWxCdG5DYn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0vPiovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iZWFjaC1jb250ZW50XCJ9PlxuICAgICAgICAgICAge3Jlc3VsdENvbnRhaW5lcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbn0iXSwibmFtZXMiOlsiR2VvU2VhcmNoUmVzdWx0cyIsInByb3BzIiwic2NvcGUiLCJyZXN1bHRDb250YWluZXIiLCJmaXJzdFJlc3VsdCIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQ2IiLCJyZXN1bHRzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYnV0dG9uQ2xhc3MiLCJjdXJyZW50UmVzdWx0Iiwiem9vbUZ1bmMiLCJleHREaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=