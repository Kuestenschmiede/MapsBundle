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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoLXJlc3VsdHNfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0FBQ25CLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7QUFBQSw2QkFDWEEsS0FEVztBQUdsQjs7OztXQUVELGtCQUFTO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSxVQUFJQyxlQUFlLEdBQUcsRUFBdEI7QUFDQSxVQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxVQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFJQyxhQUFhLEdBQUcsb0JBQXBCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLEtBQUtQLEtBQUwsQ0FBV1EsT0FBNUI7QUFFQU4sTUFBQUEsZUFBZSxnQkFBRztBQUFJLFVBQUUsRUFBRTtBQUFSLFNBQ2YsS0FBS0YsS0FBTCxDQUFXUyxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUMvQyxZQUFJQyxXQUFXLEdBQUcsb0JBQWxCOztBQUNBLFlBQUlGLE9BQU8sS0FBS1YsS0FBSyxDQUFDRCxLQUFOLENBQVljLGFBQTVCLEVBQTJDO0FBQ3pDRCxVQUFBQSxXQUFXLElBQUksYUFBZjtBQUNEOztBQUNELDRCQUFRO0FBQUksYUFBRyxFQUFFRDtBQUFULHdCQUFnQjtBQUFRLGFBQUcsRUFBRUEsS0FBYjtBQUFvQixZQUFFLEVBQUVBLEtBQXhCO0FBQStCLG1CQUFTLEVBQUVDLFdBQTFDO0FBQXVELGNBQUksRUFBRUYsT0FBN0Q7QUFBc0UsbUJBQVMsRUFBRTtBQUFBLG1CQUFNVixLQUFLLENBQUNELEtBQU4sQ0FBWWUsUUFBWixDQUFxQkgsS0FBckIsQ0FBTjtBQUFBO0FBQWpGLFdBQXFIRCxPQUFySCxDQUFoQixDQUFSO0FBQ0QsT0FOQSxDQURlLENBQWxCOztBQVVBLFVBQUksS0FBS1gsS0FBTCxDQUFXZ0IsTUFBWCxJQUFxQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU0sS0FBS2xCLEtBQUwsQ0FBV2dCLE1BQXhDLENBQXpCLEVBQTBFO0FBQ3hFLFlBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU0sS0FBS2xCLEtBQUwsQ0FBV2dCLE1BQXhDLENBQWI7QUFDQSw0QkFBT0cscUJBQVNDLFlBQVQsZUFFSDtBQUFLLG1CQUFTLEVBQUUsZ0RBQWdELEtBQUtwQixLQUFMLENBQVdxQixTQUEzRCxHQUF1RTtBQUF2Rix3QkFHRTtBQUFLLG1CQUFTLEVBQUU7QUFBaEIsV0FDR25CLGVBREgsQ0FIRixDQUZHLEVBVUxjLE1BVkssQ0FBUDtBQVlELE9BZEQsTUFjTztBQUNMLDRCQUNFO0FBQUssbUJBQVMsRUFBRSxtQ0FBbUMsS0FBS2hCLEtBQUwsQ0FBV3FCLFNBQTlDLEdBQTBEO0FBQTFFLHdCQUdFO0FBQUssbUJBQVMsRUFBRTtBQUFoQixXQUNHbkIsZUFESCxDQUhGLENBREY7QUFTRDtBQUVGOzs7RUFuRDJDb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZ2Vvc2VhcmNoLXJlc3VsdHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCByZXN1bHRDb250YWluZXIgPSBcIlwiO1xuICAgIGxldCBmaXJzdFJlc3VsdCA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2IgPSBcIlwiO1xuICAgIGxldCBjbG9zZUJ0bkNsYXNzID0gXCJjNGctdGl0bGViYXItY2xvc2VcIjtcbiAgICBsZXQgY2xvc2VCdG5DYiA9IHRoaXMucHJvcHMuY2xvc2VDYjtcblxuICAgIHJlc3VsdENvbnRhaW5lciA9IDx1bCBpZD17XCJyZXN1bHRjb250YWluZXJcIn0+XG4gICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICBsZXQgYnV0dG9uQ2xhc3MgPSBcInNlYXJjaFJlc3VsdEJ1dHRvblwiO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gc2NvcGUucHJvcHMuY3VycmVudFJlc3VsdCkge1xuICAgICAgICAgIGJ1dHRvbkNsYXNzICs9IFwiIGM0Zy1hY3RpdmVcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fT48YnV0dG9uIGtleT17aW5kZXh9IGlkPXtpbmRleH0gY2xhc3NOYW1lPXtidXR0b25DbGFzc30gbmFtZT17ZWxlbWVudH0gb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5wcm9wcy56b29tRnVuYyhpbmRleCl9PntlbGVtZW50fTwvYnV0dG9uPjwvbGk+KVxuICAgICAgfSl9XG4gICAgPC91bD47XG5cbiAgICBpZiAodGhpcy5wcm9wcy5leHREaXYgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMucHJvcHMuZXh0RGl2KSkge1xuICAgICAgbGV0IGV4dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLnByb3BzLmV4dERpdik7XG4gICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQgYzRnLWV4dGVybmFsIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgKyBcIiBjNGctYmVhY2hcIn0+XG4gICAgICAgICAgICB7Lyo8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkZXIgYzRnLWJlYWNoLWhlYWRlclwifSBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkbGluZSBjNGctYmVhY2gtaGVhZGVyLWhlYWRsaW5lXCJ9Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e2RldGFpbEJ0bkNsYXNzfSBkZXRhaWxCdG5DYj17ZGV0YWlsQnRuQ2J9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9Lz4qL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iZWFjaC1jb250ZW50XCJ9PlxuICAgICAgICAgICAgICB7cmVzdWx0Q29udGFpbmVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgICAgIGV4dERpdlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArIFwiIGM0Zy1iZWFjaFwifT5cbiAgICAgICAgICB7Lyo8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkZXIgYzRnLWJlYWNoLWhlYWRlclwifSBoZWFkZXI9e3RoaXMucHJvcHMuaGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtcmVzdWx0cy1oZWFkbGluZSBjNGctYmVhY2gtaGVhZGVyLWhlYWRsaW5lXCJ9Ki99XG4gICAgICAgICAgey8qICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtkZXRhaWxCdG5DbGFzc30gZGV0YWlsQnRuQ2I9e2RldGFpbEJ0bkNifSBjbG9zZUJ0bkNsYXNzPXtjbG9zZUJ0bkNsYXNzfSBjbG9zZUJ0bkNiPXtjbG9zZUJ0bkNifS8+Ki99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJlYWNoLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICB7cmVzdWx0Q29udGFpbmVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxufSJdLCJuYW1lcyI6WyJHZW9TZWFyY2hSZXN1bHRzIiwicHJvcHMiLCJzY29wZSIsInJlc3VsdENvbnRhaW5lciIsImZpcnN0UmVzdWx0IiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VDYiIsInJlc3VsdHMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJidXR0b25DbGFzcyIsImN1cnJlbnRSZXN1bHQiLCJ6b29tRnVuYyIsImV4dERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==