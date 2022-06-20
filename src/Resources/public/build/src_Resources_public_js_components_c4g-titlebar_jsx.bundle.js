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

exports["default"] = Titlebar;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctdGl0bGViYXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7OztJQUVxQkE7Ozs7O0VBRW5CLGtCQUFZQyxLQUFaLEVBQW1CO0lBQUE7SUFBQSx5QkFDWEEsS0FEVztFQUVsQjs7OztXQUVELGtCQUFTO01BQUE7O01BQ1AsSUFBSUMsWUFBWSxHQUFHLEVBQW5COztNQUNBLElBQUksS0FBS0QsS0FBTCxDQUFXRSxjQUFYLElBQTZCLEtBQUtGLEtBQUwsQ0FBV0csV0FBNUMsRUFBeUQ7UUFDdkRGLFlBQVksZ0JBQUc7VUFBUSxTQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxjQUE5QjtVQUE4QyxTQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXRztRQUFwRSxFQUFmO01BQ0Q7O01BQ0QsSUFBSUMsV0FBVyxHQUFHLEVBQWxCOztNQUNBLElBQUksS0FBS0osS0FBTCxDQUFXSyxhQUFYLElBQTRCLEtBQUtMLEtBQUwsQ0FBV00sVUFBM0MsRUFBdUQ7UUFDckRGLFdBQVcsZ0JBQUc7VUFBUSxTQUFTLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxhQUE5QjtVQUE2QyxTQUFTLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxVQUFuRTtVQUErRSxLQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXTztRQUFqRyxFQUFkO01BQ0Q7O01BQ0QsSUFBSUMsY0FBYyxHQUFHLEVBQXJCOztNQUNBLElBQUksS0FBS1IsS0FBTCxDQUFXUyxhQUFmLEVBQThCO1FBQzVCLElBQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07VUFDbkI7VUFDQUMsTUFBTSxDQUFDLEtBQUksQ0FBQ1gsS0FBTCxDQUFXUyxhQUFaLENBQU4sQ0FBaUNHLFdBQWpDLENBQTZDLFVBQTdDLEVBQXlEQyxRQUF6RCxDQUFrRSxXQUFsRTtRQUNELENBSEQ7O1FBSUFMLGNBQWMsZ0JBQUc7VUFBUSxTQUFTLEVBQUUsb0JBQW5CO1VBQXlDLFNBQVMsRUFBRTtZQUFBLE9BQUtFLFFBQVEsRUFBYjtVQUFBO1FBQXBELEVBQWpCO01BQ0Q7O01BQ0Qsb0JBQ0U7UUFBSyxTQUFTLEVBQUUsS0FBS1YsS0FBTCxDQUFXYztNQUEzQixnQkFDRTtRQUFNLFNBQVMsRUFBRSxLQUFLZCxLQUFMLENBQVdlO01BQTVCLEdBQTBDLEtBQUtmLEtBQUwsQ0FBV2dCLE1BQXJELENBREYsRUFFR1IsY0FGSCxFQUdHSixXQUhILEVBSUdILFlBSkgsRUFLRyxLQUFLRCxLQUFMLENBQVdpQixRQUxkLENBREY7SUFTRDs7O0VBaENtQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctdGl0bGViYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZWJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZGV0YWlsQnRuQ2xhc3MgJiYgdGhpcy5wcm9wcy5kZXRhaWxCdG5DYikge1xuICAgICAgZGV0YWlsQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGV0YWlsQnRuQ2xhc3N9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5kZXRhaWxCdG5DYn0+PC9idXR0b24+O1xuICAgIH1cbiAgICBsZXQgY2xvc2VCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlQnRuQ2xhc3MgJiYgdGhpcy5wcm9wcy5jbG9zZUJ0bkNiKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsb3NlQnRuQ2xhc3N9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5jbG9zZUJ0bkNifSB0aXRsZT17dGhpcy5wcm9wcy5jbG9zZUJ0blRpdGxlfT48L2J1dHRvbj47XG4gICAgfVxuICAgIGxldCBtaW5pbWl6ZUJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZUNvbnRhaW5lcikge1xuICAgICAgbGV0IG1pbmltaXplID0gKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCgpO1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5oaWRlQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfTtcbiAgICAgIG1pbmltaXplQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9eydjNGctc2lkZWJvYXJkLWhpZGUnfSBvbk1vdXNlVXA9eygpPT4gbWluaW1pemUoKX0vPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMud3JhcHBlckNsYXNzfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhlYWRlckNsYXNzfT57dGhpcy5wcm9wcy5oZWFkZXJ9PC9zcGFuPlxuICAgICAgICB7bWluaW1pemVCdXR0b259XG4gICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAge2RldGFpbEJ1dHRvbn1cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXSwibmFtZXMiOlsiVGl0bGViYXIiLCJwcm9wcyIsImRldGFpbEJ1dHRvbiIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIm1pbmltaXplQnV0dG9uIiwiaGlkZUNvbnRhaW5lciIsIm1pbmltaXplIiwialF1ZXJ5IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIndyYXBwZXJDbGFzcyIsImhlYWRlckNsYXNzIiwiaGVhZGVyIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9