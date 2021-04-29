(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Infopage = function (_Component) {
  (0, _inherits3.default)(Infopage, _Component);

  function Infopage(props) {
    (0, _classCallCheck3.default)(this, Infopage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Infopage.__proto__ || (0, _getPrototypeOf2.default)(Infopage)).call(this, props));

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

  (0, _createClass3.default)(Infopage, [{
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
}(_react.Component); /*
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

exports.default = Infopage;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWluZm9wYWdlLmpzeCJdLCJuYW1lcyI6WyJJbmZvcGFnZSIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGl0bGUiLCJDVFJMX0lORk9BUkVBIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJpbmZvUGFnZSIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIklORk9QQUdFIiwiQ0xPU0UiLCJfX2h0bWwiLCJpbmZvQ29udGVudCIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0b3JlVmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7SUFFcUJBLFE7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUdqQixRQUFNQyxhQUFOO0FBQ0E7QUFDQSxRQUFJQyxVQUFVQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxTQUFTRixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxVQUFLRSxhQUFMLEdBQXFC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QUNqRCxVQUFJLEtBQUt2QyxLQUFMLENBQVdPLGFBQVgsQ0FBeUJDLElBQXpCLENBQThCZ0MsT0FBOUIsSUFBeUMsQ0FBQyxLQUFLdEIsS0FBTCxDQUFXTixJQUF6RCxFQUErRDtBQUM3RCxZQUFJNkIsV0FBV0Msb0JBQU1DLFFBQU4sQ0FBZSxPQUFmLENBQWY7QUFDQSxZQUFJRixhQUFhLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWxDLEVBQXdDO0FBQ3RDSCw4QkFBTUksVUFBTixDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQUNEO0FBQ0Y7QUFDRjs7O0VBNUVtQ0MsZ0IsR0FuQnRDOzs7Ozs7Ozs7Ozs7O2tCQW1CcUJoRCxRIiwiZmlsZSI6IjExLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvcGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfSU5GT0FSRUE7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1pbmZvcGFnZS1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmluZm9QYWdlID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjb250cm9sOiBjb250cm9sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctaW5mb3BhZ2Utd3JhcHBlclwifT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctaW5mb3BhZ2UtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1pbmZvcGFnZS1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuSU5GT1BBR0V9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1pbmZvcGFnZS1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLmluZm9Db250ZW50fX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9