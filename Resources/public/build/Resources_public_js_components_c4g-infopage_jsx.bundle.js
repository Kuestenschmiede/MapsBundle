(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-infopage_jsx"],{

/***/ "./Resources/public/js/components/c4g-infopage.jsx":
/*!*********************************************************!*\
  !*** ./Resources/public/js/components/c4g-infopage.jsx ***!
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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Infopage = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Infopage, _Component);

  var _super = _createSuper(Infopage);

  function Infopage(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Infopage);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

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
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    mapController.mapsControls.controls.infoPage = control;
    mapController.map.addControl(control);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      open: props.open || false,
      control: control
    };
    return _this;
  }

  (0, _createClass2["default"])(Infopage, [{
    key: "render",
    value: function render() {
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close");
      }

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
        className: "c4g-infopage-wrapper"
      }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-infopage-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
>>>>>>> Several version preps
        wrapperClass: "c4g-infopage-header",
        headerClass: "c4g-infopage-headline",
        header: this.langConstants.INFOPAGE,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement("div", {
=======
      }), /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
        className: "c4g-infopage-content",
        dangerouslySetInnerHTML: {
          __html: this.props.infoContent
        }
      }));
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
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
<<<<<<< refs/remotes/origin/main
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1pbmZvcGFnZS5qc3giXSwibmFtZXMiOlsiSW5mb3BhZ2UiLCJwcm9wcyIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9JTkZPQVJFQSIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaW5mb1BhZ2UiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJJTkZPUEFHRSIsIkNMT1NFIiwiX19odG1sIiwiaW5mb0NvbnRlbnQiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdG9yZVZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBTUMsS0FBSyxpREFBWCxDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFR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QUFFO0FBQUNDLGdCQUFNLEVBQUUsS0FBS2pDLEtBQUwsQ0FBV2tDO0FBQXBCO0FBQWpFLFFBSkYsQ0FERjtBQVNEOzs7V0FFRCxnQkFBTztBQUNMLFdBQUtDLFFBQUwsQ0FBYztBQUFDdkIsWUFBSSxFQUFFO0FBQVAsT0FBZDtBQUNBLFdBQUtaLEtBQUwsQ0FBV08sYUFBWCxDQUF5QjZCLGdCQUF6QixDQUEwQyxJQUExQztBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFdBQUtELFFBQUwsQ0FBYztBQUFDdkIsWUFBSSxFQUFFO0FBQVAsT0FBZDtBQUNEOzs7V0FFRCw0QkFBbUJ5QixTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQ2pELFVBQUksS0FBS3ZDLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBekIsQ0FBOEJnQyxPQUE5QixJQUF5QyxDQUFDLEtBQUt0QixLQUFMLENBQVdOLElBQXpELEVBQStEO0FBQzdELFlBQUk2QixRQUFRLEdBQUdDLG9CQUFNQyxRQUFOLENBQWUsT0FBZixDQUFmOztBQUNBLFlBQUlGLFFBQVEsS0FBSyxLQUFLRyxXQUFMLENBQWlCQyxJQUFsQyxFQUF3QztBQUN0Q0gsOEJBQU1JLFVBQU4sQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUI7QUFDRDtBQUNGO0FBQ0Y7OztFQTVFbUNDLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctaW5mb3BhZ2VfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvcGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfSU5GT0FSRUE7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1pbmZvcGFnZS1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmluZm9QYWdlID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjb250cm9sOiBjb250cm9sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctaW5mb3BhZ2Utd3JhcHBlclwifT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctaW5mb3BhZ2UtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1pbmZvcGFnZS1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuSU5GT1BBR0V9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1pbmZvcGFnZS1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLmluZm9Db250ZW50fX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1pbmZvcGFnZS5qc3giXSwibmFtZXMiOlsiSW5mb3BhZ2UiLCJwcm9wcyIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRpdGxlIiwiQ1RSTF9JTkZPQVJFQSIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaW5mb1BhZ2UiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJJTkZPUEFHRSIsIkNMT1NFIiwiX19odG1sIiwiaW5mb0NvbnRlbnQiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdG9yZVZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBTUMsS0FBSyxpREFBWCxDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFR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LEVBQUU7QUFBQ0MsZ0JBQU0sRUFBRSxLQUFLakMsS0FBTCxDQUFXa0M7QUFBcEI7QUFBakUsUUFKRixDQURGO0FBU0Q7OztXQUVELGdCQUFPO0FBQ0wsV0FBS0MsUUFBTCxDQUFjO0FBQUN2QixZQUFJLEVBQUU7QUFBUCxPQUFkO0FBQ0EsV0FBS1osS0FBTCxDQUFXTyxhQUFYLENBQXlCNkIsZ0JBQXpCLENBQTBDLElBQTFDO0FBQ0Q7OztXQUVELGlCQUFRO0FBQ04sV0FBS0QsUUFBTCxDQUFjO0FBQUN2QixZQUFJLEVBQUU7QUFBUCxPQUFkO0FBQ0Q7OztXQUVELDRCQUFtQnlCLFNBQW5CLEVBQThCQyxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbUQ7QUFDakQsVUFBSSxLQUFLdkMsS0FBTCxDQUFXTyxhQUFYLENBQXlCQyxJQUF6QixDQUE4QmdDLE9BQTlCLElBQXlDLENBQUMsS0FBS3RCLEtBQUwsQ0FBV04sSUFBekQsRUFBK0Q7QUFDN0QsWUFBSTZCLFFBQVEsR0FBR0Msb0JBQU1DLFFBQU4sQ0FBZSxPQUFmLENBQWY7O0FBQ0EsWUFBSUYsUUFBUSxLQUFLLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWxDLEVBQXdDO0FBQ3RDSCw4QkFBTUksVUFBTixDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQUNEO0FBQ0Y7QUFDRjs7O0VBNUVtQ0MsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1pbmZvcGFnZV9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXIuanN4XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9wYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9JTkZPQVJFQTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWluZm9wYWdlLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaW5mb1BhZ2UgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1pbmZvcGFnZS1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1pbmZvcGFnZS1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1pbmZvcGFnZS13cmFwcGVyXCJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1pbmZvcGFnZS1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWluZm9wYWdlLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5JTkZPUEFHRX0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWluZm9wYWdlLWNvbnRlbnRcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuaW5mb0NvbnRlbnR9fT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> Several version preps
