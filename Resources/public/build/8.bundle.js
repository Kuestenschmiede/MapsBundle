(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./Resources/public/js/components/c4g-infopage.jsx":
/*!*********************************************************!*\
  !*** ./Resources/public/js/components/c4g-infopage.jsx ***!
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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

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

var Infopage = function (_Component) {
  _inherits(Infopage, _Component);

  function Infopage(props) {
    _classCallCheck(this, Infopage);

    var _this = _possibleConstructorReturn(this, (Infopage.__proto__ || Object.getPrototypeOf(Infopage)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_INFOAREA;
    element.className = "c4g-infopage-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({ element: element, target: props.target });
    mapController.mapsControls.controls.infoPage = control;
    mapController.map.addControl(control);
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.state = {
      open: props.open || false,
      control: control
    };
    return _this;
  }

  _createClass(Infopage, [{
    key: "render",
    value: function render() {
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close");
      }

      return _react2.default.createElement(
        "div",
        { className: "c4g-infopage-wrapper" },
        _react2.default.createElement(_c4gTitlebar.Titlebar, { wrapperClass: "c4g-infopage-header", headerClass: "c4g-infopage-headline",
          header: this.langConstants.INFOPAGE, closeBtnClass: "c4g-titlebar-close", closeBtnCb: this.close, closeBtnTitle: this.langConstants.CLOSE }),
        _react2.default.createElement("div", { className: "c4g-infopage-content", dangerouslySetInnerHTML: { __html: this.props.infoContent } })
      );
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ open: true });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({ open: false });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }]);

  return Infopage;
}(_react.Component);

exports.default = Infopage;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWluZm9wYWdlLmpzeCJdLCJuYW1lcyI6WyJJbmZvcGFnZSIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGl0bGUiLCJDVFJMX0lORk9BUkVBIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJpbmZvUGFnZSIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIklORk9QQUdFIiwiQ0xPU0UiLCJfX2h0bWwiLCJpbmZvQ29udGVudCIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0b3JlVmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7OytlQWpCQTs7Ozs7Ozs7Ozs7OztJQW1CcUJBLFE7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUdqQixRQUFNQyxhQUFOO0FBQ0E7QUFDQSxRQUFJQyxVQUFVQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxTQUFTRixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxVQUFLRSxhQUFM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RUFBVTtBQUNqRCxVQUFJLEtBQUt2QyxLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCZ0MsT0FBOUIsSUFBeUMsQ0FBQyxLQUFLdEIsS0FBTCxDQUFXTixJQUF6RCxFQUErRDtBQUM3RCxZQUFJNkIsV0FBV0Msb0JBQU1DLFFBQU4sQ0FBZSxPQUFmLENBQWY7QUFDQSxZQUFJRixhQUFhLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWxDLEVBQXdDO0FBQ3RDSCw4QkFBTUksVUFBTixDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQUNEO0FBQ0Y7QUFDRjs7OztFQTVFbUNDLGdCOztrQkFBakJoRCxRIiwiZmlsZSI6IjguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXIuanN4XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9wYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9JTkZPQVJFQTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWluZm9wYWdlLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaW5mb1BhZ2UgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1pbmZvcGFnZS1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1pbmZvcGFnZS1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1pbmZvcGFnZS13cmFwcGVyXCJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1pbmZvcGFnZS1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWluZm9wYWdlLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5JTkZPUEFHRX0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWluZm9wYWdlLWNvbnRlbnRcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuaW5mb0NvbnRlbnR9fT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=