"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-infopage_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-infopage.jsx":
/*!*************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-infopage.jsx ***!
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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var Infopage = exports["default"] = /*#__PURE__*/function (_Component) {
  function Infopage(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Infopage);
    _this = _callSuper(this, Infopage, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_INFOAREA;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_INFOAREA;
    }
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
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "legend";
    });
    if (index && mapController.arrComponents[index]) {
      mapController.arrComponents[index].control = control;
      mapController.mapsControls.controls.infoPage = control;
    } else {
      mapController.map.addControl(control);
    }
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.state = {
      open: props.open || false,
      control: control
    };
    return _this;
  }
  (0, _inherits2["default"])(Infopage, _Component);
  return (0, _createClass2["default"])(Infopage, [{
    key: "render",
    value: function render() {
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close");
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-infopage-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-infopage-header",
        headerClass: "c4g-infopage-headline",
        header: this.langConstants.INFOPAGE,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
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
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "Infopage" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "Infopage" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "Infopage");
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctaW5mb3BhZ2VfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUVBLElBQUFDLFlBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxRQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsYUFBQSxHQUFBSCxtQkFBQTtBQUF3QyxTQUFBSSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQU4sd0JBQUFNLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFB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LENBQUMsTUFDSSxJQUFJSCxRQUFRLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQzFDLEtBQUssQ0FBQ0wsSUFBSSxFQUFFO1VBQ25EZ0QsbUJBQUssQ0FBQ0UsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkM7TUFDRjtJQUNGO0VBQUM7QUFBQSxFQWhHbUNDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWluZm9wYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb3BhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfSU5GT0FSRUE7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfSU5GT0FSRUE7XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1pbmZvcGFnZS1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGVnZW5kXCIpO1xuICAgIGlmIChpbmRleCAmJiBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdKSB7XG4gICAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaW5mb1BhZ2UgPSBjb250cm9sO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjb250cm9sOiBjb250cm9sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctaW5mb3BhZ2Utd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWluZm9wYWdlLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctaW5mb3BhZ2UtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuSU5GT1BBR0V9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWluZm9wYWdlLWNvbnRlbnRcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuaW5mb0NvbnRlbnR9fT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJJbmZvcGFnZVwiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIkluZm9wYWdlXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJJbmZvcGFnZVwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jNGdNYXBzSTE4biIsIl9jb250cm9sIiwiX2M0Z01hcHNVdGlscyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJJbmZvcGFnZSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9JTkZPQVJFQSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaW5mb1BhZ2UiLCJtYXAiLCJhZGRDb250cm9sIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlckNsYXNzIiwiaGVhZGVyIiwiSU5GT1BBR0UiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaW5mb0NvbnRlbnQiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==