(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-titlebar_jsx"],{

/***/ "./Resources/public/js/components/c4g-titlebar.jsx":
/*!*********************************************************!*\
  !*** ./Resources/public/js/components/c4g-titlebar.jsx ***!
  \*********************************************************/
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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Titlebar, _Component);

  var _super = _createSuper(Titlebar);

  function Titlebar(props) {
    (0, _classCallCheck2["default"])(this, Titlebar);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(Titlebar, [{
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
  return Titlebar;
}(_react.Component);

exports.default = Titlebar;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3giXSwibmFtZXMiOlsiVGl0bGViYXIiLCJwcm9wcyIsImRldGFpbEJ1dHRvbiIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIm1pbmltaXplQnV0dG9uIiwiaGlkZUNvbnRhaW5lciIsIm1pbmltaXplIiwialF1ZXJ5IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIndyYXBwZXJDbGFzcyIsImhlYWRlckNsYXNzIiwiaGVhZGVyIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUNQLFVBQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxVQUFJLEtBQUtELEtBQUwsQ0FBV0UsY0FBWCxJQUE2QixLQUFLRixLQUFMLENBQVdHLFdBQTVDLEVBQXlEO0FBQ3ZERixvQkFBWSxnQkFBRztBQUFRLG1CQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxjQUE5QjtBQUE4QyxtQkFBUyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0c7QUFBcEUsVUFBZjtBQUNEOztBQUNELFVBQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxVQUFJLEtBQUtKLEtBQUwsQ0FBV0ssYUFBWCxJQUE0QixLQUFLTCxLQUFMLENBQVdNLFVBQTNDLEVBQXVEO0FBQ3JERixtQkFBVyxnQkFBRztBQUFRLG1CQUFTLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxhQUE5QjtBQUE2QyxtQkFBUyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sVUFBbkU7QUFBK0UsZUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV087QUFBakcsVUFBZDtBQUNEOztBQUNELFVBQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxVQUFJLEtBQUtSLEtBQUwsQ0FBV1MsYUFBZixFQUE4QjtBQUM1QixZQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CO0FBQ0FDLGdCQUFNLENBQUMsS0FBSSxDQUFDWCxLQUFMLENBQVdTLGFBQVosQ0FBTixDQUFpQ0csV0FBakMsQ0FBNkMsVUFBN0MsRUFBeURDLFFBQXpELENBQWtFLFdBQWxFO0FBQ0QsU0FIRDs7QUFJQUwsc0JBQWMsZ0JBQUc7QUFBUSxtQkFBUyxFQUFFLG9CQUFuQjtBQUF5QyxtQkFBUyxFQUFFO0FBQUEsbUJBQUtFLFFBQVEsRUFBYjtBQUFBO0FBQXBELFVBQWpCO0FBQ0Q7O0FBQ0QsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFLEtBQUtWLEtBQUwsQ0FBV2M7QUFBM0Isc0JBQ0U7QUFBTSxpQkFBUyxFQUFFLEtBQUtkLEtBQUwsQ0FBV2U7QUFBNUIsU0FBMEMsS0FBS2YsS0FBTCxDQUFXZ0IsTUFBckQsQ0FERixFQUVHUixjQUZILEVBR0dKLFdBSEgsRUFJR0gsWUFKSCxFQUtHLEtBQUtELEtBQUwsQ0FBV2lCLFFBTGQsQ0FERjtBQVNEOzs7RUFoQ21DQyxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXRpdGxlYmFyX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXRhaWxCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmRldGFpbEJ0bkNsYXNzICYmIHRoaXMucHJvcHMuZGV0YWlsQnRuQ2IpIHtcbiAgICAgIGRldGFpbEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmRldGFpbEJ0bkNsYXNzfSBvbk1vdXNlVXA9e3RoaXMucHJvcHMuZGV0YWlsQnRuQ2J9PjwvYnV0dG9uPjtcbiAgICB9XG4gICAgbGV0IGNsb3NlQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZUJ0bkNsYXNzICYmIHRoaXMucHJvcHMuY2xvc2VCdG5DYikge1xuICAgICAgY2xvc2VCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbG9zZUJ0bkNsYXNzfSBvbk1vdXNlVXA9e3RoaXMucHJvcHMuY2xvc2VCdG5DYn0gdGl0bGU9e3RoaXMucHJvcHMuY2xvc2VCdG5UaXRsZX0+PC9idXR0b24+O1xuICAgIH1cbiAgICBsZXQgbWluaW1pemVCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmhpZGVDb250YWluZXIpIHtcbiAgICAgIGxldCBtaW5pbWl6ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDb21wb25lbnQoKTtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMuaGlkZUNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIH07XG4gICAgICBtaW5pbWl6ZUJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXsnYzRnLXNpZGVib2FyZC1oaWRlJ30gb25Nb3VzZVVwPXsoKT0+IG1pbmltaXplKCl9Lz5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndyYXBwZXJDbGFzc30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5oZWFkZXJDbGFzc30+e3RoaXMucHJvcHMuaGVhZGVyfTwvc3Bhbj5cbiAgICAgICAge21pbmltaXplQnV0dG9ufVxuICAgICAgICB7Y2xvc2VCdXR0b259XG4gICAgICAgIHtkZXRhaWxCdXR0b259XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==