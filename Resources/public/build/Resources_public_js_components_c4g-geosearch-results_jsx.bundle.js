(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-geosearch-results_jsx"],{

/***/ "./Resources/public/js/components/c4g-geosearch-results.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-geosearch-results.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

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

      if (this.props.resultsDiv) {
        return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content c4g-external " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer)), this.props.resultsDiv);
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

exports.default = GeoSearchResults;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3giXSwibmFtZXMiOlsiR2VvU2VhcmNoUmVzdWx0cyIsInByb3BzIiwic2NvcGUiLCJyZXN1bHRDb250YWluZXIiLCJmaXJzdFJlc3VsdCIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQ2IiLCJyZXN1bHRzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiYnV0dG9uQ2xhc3MiLCJjdXJyZW50UmVzdWx0Iiwiem9vbUZ1bmMiLCJyZXN1bHRzRGl2IiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7QUFDbkIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUFBLDZCQUNYQSxLQURXO0FBR2xCOzs7O1dBRUQsa0JBQVM7QUFDUCxVQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUNBLFVBQUlDLGVBQWUsR0FBRyxFQUF0QjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFVBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFVBQUlDLGFBQWEsR0FBRyxvQkFBcEI7QUFDQSxVQUFJQyxVQUFVLEdBQUcsS0FBS1AsS0FBTCxDQUFXUSxPQUE1QjtBQUVBTixxQkFBZSxnQkFBRztBQUFJLFVBQUUsRUFBRTtBQUFSLFNBQ2YsS0FBS0YsS0FBTCxDQUFXUyxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUMvQyxZQUFJQyxXQUFXLEdBQUcsb0JBQWxCOztBQUNBLFlBQUlGLE9BQU8sS0FBS1YsS0FBSyxDQUFDRCxLQUFOLENBQVljLGFBQTVCLEVBQTJDO0FBQ3pDRCxxQkFBVyxJQUFJLGFBQWY7QUFDRDs7QUFDRCw0QkFBUTtBQUFJLGFBQUcsRUFBRUQ7QUFBVCx3QkFBZ0I7QUFBUSxhQUFHLEVBQUVBLEtBQWI7QUFBb0IsWUFBRSxFQUFFQSxLQUF4QjtBQUErQixtQkFBUyxFQUFFQyxXQUExQztBQUF1RCxjQUFJLEVBQUVGLE9BQTdEO0FBQXNFLG1CQUFTLEVBQUU7QUFBQSxtQkFBTVYsS0FBSyxDQUFDRCxLQUFOLENBQVllLFFBQVosQ0FBcUJILEtBQXJCLENBQU47QUFBQTtBQUFqRixXQUFxSEQsT0FBckgsQ0FBaEIsQ0FBUjtBQUNELE9BTkEsQ0FEZSxDQUFsQjs7QUFVQSxVQUFJLEtBQUtYLEtBQUwsQ0FBV2dCLFVBQWYsRUFBMkI7QUFDekIsNEJBQU9DLHFCQUFTQyxZQUFULGVBRUg7QUFBSyxtQkFBUyxFQUFFLGdEQUFnRCxLQUFLbEIsS0FBTCxDQUFXbUIsU0FBM0QsR0FBdUU7QUFBdkYsd0JBR0U7QUFBSyxtQkFBUyxFQUFFO0FBQWhCLFdBQ0dqQixlQURILENBSEYsQ0FGRyxFQVVMLEtBQUtGLEtBQUwsQ0FBV2dCLFVBVk4sQ0FBUDtBQVlELE9BYkQsTUFhTztBQUNMLDRCQUNFO0FBQUssbUJBQVMsRUFBRSxtQ0FBbUMsS0FBS2hCLEtBQUwsQ0FBV21CLFNBQTlDLEdBQTBEO0FBQTFFLHdCQUdFO0FBQUssbUJBQVMsRUFBRTtBQUFoQixXQUNHakIsZUFESCxDQUhGLENBREY7QUFTRDtBQUVGOzs7RUFsRDJDa0IsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1nZW9zZWFyY2gtcmVzdWx0c19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9TZWFyY2hSZXN1bHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdENvbnRhaW5lciA9IFwiXCI7XG4gICAgbGV0IGZpcnN0UmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2xhc3MgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DYiA9IFwiXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2xhc3MgPSBcImM0Zy10aXRsZWJhci1jbG9zZVwiO1xuICAgIGxldCBjbG9zZUJ0bkNiID0gdGhpcy5wcm9wcy5jbG9zZUNiO1xuXG4gICAgcmVzdWx0Q29udGFpbmVyID0gPHVsIGlkPXtcInJlc3VsdGNvbnRhaW5lclwifT5cbiAgICAgIHt0aGlzLnByb3BzLnJlc3VsdHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IFwic2VhcmNoUmVzdWx0QnV0dG9uXCI7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBzY29wZS5wcm9wcy5jdXJyZW50UmVzdWx0KSB7XG4gICAgICAgICAgYnV0dG9uQ2xhc3MgKz0gXCIgYzRnLWFjdGl2ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxidXR0b24ga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfSBuYW1lPXtlbGVtZW50fSBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnByb3BzLnpvb21GdW5jKGluZGV4KX0+e2VsZW1lbnR9PC9idXR0b24+PC9saT4pXG4gICAgICB9KX1cbiAgICA8L3VsPjtcblxuICAgIGlmICh0aGlzLnByb3BzLnJlc3VsdHNEaXYpIHtcbiAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBjNGctZXh0ZXJuYWwgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArIFwiIGM0Zy1iZWFjaFwifT5cbiAgICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17ZGV0YWlsQnRuQ2xhc3N9IGRldGFpbEJ0bkNiPXtkZXRhaWxCdG5DYn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0vPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJlYWNoLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5wcm9wcy5yZXN1bHRzRGl2XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgYzRnLWJlYWNoXCJ9PlxuICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICB7LyogICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e2RldGFpbEJ0bkNsYXNzfSBkZXRhaWxCdG5DYj17ZGV0YWlsQnRuQ2J9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9Lz4qL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmVhY2gtY29udGVudFwifT5cbiAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==