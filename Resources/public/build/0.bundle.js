(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./Resources/public/js/components/c4g-titlebar.jsx":
/*!*********************************************************!*\
  !*** ./Resources/public/js/components/c4g-titlebar.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Titlebar = function (_Component) {
  _inherits(Titlebar, _Component);

  function Titlebar(props) {
    _classCallCheck(this, Titlebar);

    return _possibleConstructorReturn(this, (Titlebar.__proto__ || Object.getPrototypeOf(Titlebar)).call(this, props));
  }

  _createClass(Titlebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var detailButton = "";
      if (this.props.detailBtnClass && this.props.detailBtnCb) {
        detailButton = _react2.default.createElement("button", { className: this.props.detailBtnClass, onMouseUp: this.props.detailBtnCb });
      }
      var closeButton = "";
      if (this.props.closeBtnClass && this.props.closeBtnCb) {
        closeButton = _react2.default.createElement("button", { className: this.props.closeBtnClass, onMouseUp: this.props.closeBtnCb, title: this.props.closeBtnTitle });
      }
      var minimizeButton = "";
      if (this.props.hideContainer) {
        var minimize = function minimize() {
          // this.props.removeComponent();
          jQuery(_this2.props.hideContainer).removeClass("c4g-open").addClass("c4g-close");
        };
        minimizeButton = _react2.default.createElement("button", { className: 'c4g-sideboard-hide', onMouseUp: function onMouseUp() {
            return minimize();
          } });
      }
      return _react2.default.createElement(
        "div",
        { className: this.props.wrapperClass },
        _react2.default.createElement(
          "span",
          { className: this.props.headerClass },
          this.props.header
        ),
        minimizeButton,
        closeButton,
        detailButton,
        this.props.children
      );
    }
  }]);

  return Titlebar;
}(_react.Component);

exports.default = Titlebar;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXRpdGxlYmFyLmpzeCJdLCJuYW1lcyI6WyJUaXRsZWJhciIsInByb3BzIiwiZGV0YWlsQnV0dG9uIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwibWluaW1pemVCdXR0b24iLCJoaWRlQ29udGFpbmVyIiwibWluaW1pemUiLCJqUXVlcnkiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7K2VBYkE7Ozs7Ozs7Ozs7Ozs7SUFlcUJBLFE7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSUMsZUFBZSxFQUFuQjtBQUNBLFVBQUksS0FBS0QsS0FBTCxDQUFXRSxjQUFYLElBQTZCLEtBQUtGLEtBQUwsQ0FBV0csV0FBNUMsRUFBeUQ7QUFDdkRGLHVCQUFlLDBDQUFRLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxjQUE5QixFQUE4QyxXQUFXLEtBQUtGLEtBQUwsQ0FBV0csV0FBcEUsR0FBZjtBQUNEO0FBQ0QsVUFBSUMsY0FBYyxFQUFsQjtBQUNBLFVBQUksS0FBS0osS0FBTCxDQUFXSyxhQUFYLElBQTRCLEtBQUtMLEtBQUwsQ0FBV00sVUFBM0MsRUFBdUQ7QUFDckRGLHNCQUFjLDBDQUFRLFdBQVcsS0FBS0osS0FBTCxDQUFXSyxhQUE5QixFQUE2QyxXQUFXLEtBQUtMLEtBQUwsQ0FBV00sVUFBbkUsRUFBK0UsT0FBTyxLQUFLTixLQUFMLENBQVdPLGFBQWpHLEdBQWQ7QUFDRDtBQUNELFVBQUlDLGlCQUFpQixFQUFyQjtBQUNBLFVBQUksS0FBS1IsS0FBTCxDQUFXUyxhQUFmLEVBQThCO0FBQzVCLFlBQUlDLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CO0FBQ0FDLGlCQUFPLE9BQUtYLEtBQUwsQ0FBV1MsYUFBbEIsRUFBaUNHLFdBQWpDLENBQTZDLFVBQTdDLEVBQXlEQyxRQUF6RCxDQUFrRSxXQUFsRTtBQUNELFNBSEQ7QUFJQUwseUJBQWlCLDBDQUFRLFdBQVcsb0JBQW5CLEVBQXlDLFdBQVc7QUFBQSxtQkFBS0UsVUFBTDtBQUFBLFdBQXBELEdBQWpCO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsS0FBS1YsS0FBTCxDQUFXYyxZQUEzQjtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVcsS0FBS2QsS0FBTCxDQUFXZSxXQUE1QjtBQUEwQyxlQUFLZixLQUFMLENBQVdnQjtBQUFyRCxTQURGO0FBRUdSLHNCQUZIO0FBR0dKLG1CQUhIO0FBSUdILG9CQUpIO0FBS0csYUFBS0QsS0FBTCxDQUFXaUI7QUFMZCxPQURGO0FBU0Q7Ozs7RUFoQ21DQyxnQjs7a0JBQWpCbkIsUSIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZWJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZGV0YWlsQnRuQ2xhc3MgJiYgdGhpcy5wcm9wcy5kZXRhaWxCdG5DYikge1xuICAgICAgZGV0YWlsQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGV0YWlsQnRuQ2xhc3N9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5kZXRhaWxCdG5DYn0+PC9idXR0b24+O1xuICAgIH1cbiAgICBsZXQgY2xvc2VCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlQnRuQ2xhc3MgJiYgdGhpcy5wcm9wcy5jbG9zZUJ0bkNiKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsb3NlQnRuQ2xhc3N9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5jbG9zZUJ0bkNifSB0aXRsZT17dGhpcy5wcm9wcy5jbG9zZUJ0blRpdGxlfT48L2J1dHRvbj47XG4gICAgfVxuICAgIGxldCBtaW5pbWl6ZUJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZUNvbnRhaW5lcikge1xuICAgICAgbGV0IG1pbmltaXplID0gKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNvbXBvbmVudCgpO1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5oaWRlQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfTtcbiAgICAgIG1pbmltaXplQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9eydjNGctc2lkZWJvYXJkLWhpZGUnfSBvbk1vdXNlVXA9eygpPT4gbWluaW1pemUoKX0vPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMud3JhcHBlckNsYXNzfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmhlYWRlckNsYXNzfT57dGhpcy5wcm9wcy5oZWFkZXJ9PC9zcGFuPlxuICAgICAgICB7bWluaW1pemVCdXR0b259XG4gICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAge2RldGFpbEJ1dHRvbn1cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9