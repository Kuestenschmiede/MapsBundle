"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-overviewmap_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-overviewmap.jsx"
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-overviewmap.jsx ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _Group = _interopRequireDefault(__webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js"));
var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js"));
var _OSM = _interopRequireDefault(__webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var OverviewMap = exports["default"] = /*#__PURE__*/function (_Component) {
  function OverviewMap(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, OverviewMap);
    _this = _callSuper(this, OverviewMap, [props]);
    var element, trigger, triggerIcon;
    var scope = _this;
    _this.state = {
      open: !props.collapsed
    };
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.mapController = props.mapController;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.layer = new _Tile["default"]({
      source: new _OSM["default"]()
    });
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OVERVIEWMAP + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;
    if (props.collapsed) {
      element.className += ' ' + _c4gMapsConstant.cssConstants.CLOSE;
    } else {
      element.className += ' ' + _c4gMapsConstant.cssConstants.OPEN;
    }
    // props.target.appendChild(element);

    trigger = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_OVERVIEWMAP;
      trigger.appendChild(span);
    } else {
      trigger.title = _this.langConstants.CTRL_OVERVIEWMAP;
    }
    element.appendChild(trigger);

    // triggerIcon = document.createElement('span');
    // triggerIcon.className = cssConstants.ICON;
    // trigger.appendChild(triggerIcon);

    jQuery(trigger).click(function () {
      if (!scope.state.open) {
        scope.open();
      } else {
        scope.close();
      }
    });
    _this.element = element;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    _this.baseLayerIds = [];
    var index = _this.mapController.arrComponents.findIndex(function (element) {
      return element.name === "overview";
    });
    _this.mapController.arrComponents[index].control = control;
    _this.mapController.mapsControls.controls.overviewMap = control;
    return _this;
  }
  (0, _inherits2["default"])(OverviewMap, _Component);
  return (0, _createClass2["default"])(OverviewMap, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "overview-map-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-overwiev-header",
        headerClass: "c4g-overview-headline",
        header: this.langConstants.OVERVIEWMAP,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        id: "overview-map-target",
        className: "c4g-overview-content"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createOverviewMap();
    }
  }, {
    key: "createOverviewMap",
    value: function createOverviewMap() {
      var ovmTarget = document.querySelector("#overview-map-target");
      this.ovm = new _control.OverviewMap({
        collapsed: this.props.collapsed || true,
        collapsible: false,
        rotateWithView: true,
        className: 'ol-overviewmap ol-custom-overviewmap',
        target: ovmTarget,
        layers: [this.layer]
      });
      this.ovm.setMap(this.props.mapController.map);
    }
  }, {
    key: "removeFromMap",
    value: function removeFromMap() {
      this.element.parentNode.removeChild(this.element);
    }
  }, {
    key: "getOverviewMap",
    value: function getOverviewMap() {
      return this.ovm;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
        return true;
      } else {
        return false;
      }
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
      if (!this.state.open && prevState.open) {
        jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
        jQuery(this.props.ovmTarget).addClass(_c4gMapsConstant.cssConstants.CLOSE).removeClass(_c4gMapsConstant.cssConstants.OPEN);
      } else if (this.state.open) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        jQuery(this.props.ovmTarget).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
      }
      if (prevProps.source !== this.props.source) {
        this.layer.setSource(this.props.source);
      }
    }
  }]);
}(_react.Component);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctb3ZlcnZpZXdtYXBfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxnQkFBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxNQUFBLEdBQUFDLHNCQUFBLENBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sS0FBQSxHQUFBRCxzQkFBQSxDQUFBTCxtQkFBQTtBQUNBLElBQUFPLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUwsbUJBQUE7QUFBZ0MsU0FBQUQsd0JBQUFTLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFYLHVCQUFBLFlBQUFBLHdCQUFBUyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEs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LENBQUMsSUFBSSxDQUFDcEMsS0FBSyxDQUFDaUUsU0FBUyxDQUFDLENBQUNzQixXQUFXLENBQUNoRSw2QkFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBQzJELFFBQVEsQ0FBQy9ELDZCQUFZLENBQUNLLElBQUksQ0FBQztNQUMxRjtNQUNBLElBQUl1RCxTQUFTLENBQUNqRSxNQUFNLEtBQUssSUFBSSxDQUFDbEIsS0FBSyxDQUFDa0IsTUFBTSxFQUFFO1FBQzFDLElBQUksQ0FBQ0YsS0FBSyxDQUFDd0UsU0FBUyxDQUFDLElBQUksQ0FBQ3hGLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQztNQUN6QztJQUNGO0VBQUM7QUFBQSxFQWhJc0N1RSxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbCwgT3ZlcnZpZXdNYXAgYXMgT3ZNYXB9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IExheWVyR3JvdXAgZnJvbSBcIm9sL2xheWVyL0dyb3VwXCI7XG5pbXBvcnQgVGlsZUxheWVyIGZyb20gXCJvbC9sYXllci9UaWxlXCI7XG5pbXBvcnQgT1NNIGZyb20gXCJvbC9zb3VyY2UvT1NNXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdHJpZ2dlckljb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgfTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxheWVyID0gbmV3IFRpbGVMYXllcih7IHNvdXJjZTogbmV3IE9TTSgpIH0pO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PVkVSVklFV01BUCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICBpZiAocHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIH1cbiAgICAvLyBwcm9wcy50YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0cmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfT1ZFUlZJRVdNQVA7XG4gICAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRyaWdnZXIudGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9PVkVSVklFV01BUDtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0cmlnZ2VyKTtcblxuICAgIC8vIHRyaWdnZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vIHRyaWdnZXJJY29uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OO1xuICAgIC8vIHRyaWdnZXIuYXBwZW5kQ2hpbGQodHJpZ2dlckljb24pO1xuXG4gICAgalF1ZXJ5KHRyaWdnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgIH0pO1xuICAgIHRoaXMuYmFzZUxheWVySWRzID0gW107XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcIm92ZXJ2aWV3XCIpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm92ZXJ2aWV3TWFwID0gY29udHJvbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3ZlcnZpZXctbWFwLXdyYXBwZXJcIn0+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW92ZXJ3aWV2LWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctb3ZlcnZpZXctaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk9WRVJWSUVXTUFQfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDxkaXYgaWQ9e1wib3ZlcnZpZXctbWFwLXRhcmdldFwifSBjbGFzc05hbWU9e1wiYzRnLW92ZXJ2aWV3LWNvbnRlbnRcIn0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY3JlYXRlT3ZlcnZpZXdNYXAoKTtcbiAgfVxuXG4gIGNyZWF0ZU92ZXJ2aWV3TWFwKCkge1xuICAgIGxldCBvdm1UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJ2aWV3LW1hcC10YXJnZXRcIik7XG4gICAgdGhpcy5vdm0gPSBuZXcgT3ZNYXAoe1xuICAgICAgY29sbGFwc2VkOiB0aGlzLnByb3BzLmNvbGxhcHNlZCB8fCB0cnVlLFxuICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgcm90YXRlV2l0aFZpZXc6IHRydWUsXG4gICAgICBjbGFzc05hbWU6ICdvbC1vdmVydmlld21hcCBvbC1jdXN0b20tb3ZlcnZpZXdtYXAnLFxuICAgICAgdGFyZ2V0OiBvdm1UYXJnZXQsXG4gICAgICBsYXllcnM6IFt0aGlzLmxheWVyXVxuICAgIH0pO1xuICAgIHRoaXMub3ZtLnNldE1hcCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21NYXAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldE92ZXJ2aWV3TWFwKCkge1xuICAgIHJldHVybiB0aGlzLm92bTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuICYmIHByZXZTdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMub3ZtVGFyZ2V0KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5zb3VyY2UgIT09IHRoaXMucHJvcHMuc291cmNlKSB7XG4gICAgICB0aGlzLmxheWVyLnNldFNvdXJjZSh0aGlzLnByb3BzLnNvdXJjZSk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdNYXBzSTE4biIsIl9Hcm91cCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfVGlsZSIsIl9PU00iLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk92ZXJ2aWV3TWFwIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImVsZW1lbnQiLCJ0cmlnZ2VyIiwidHJpZ2dlckljb24iLCJzY29wZSIsInN0YXRlIiwib3BlbiIsImNvbGxhcHNlZCIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiYmluZCIsImNsb3NlIiwibGF5ZXIiLCJUaWxlTGF5ZXIiLCJzb3VyY2UiLCJPU00iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPVkVSVklFV01BUCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJDTE9TRSIsIk9QRU4iLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwialF1ZXJ5IiwiY2xpY2siLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImJhc2VMYXllcklkcyIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsIm92ZXJ2aWV3TWFwIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsImlkIiwiY29tcG9uZW50RGlkTW91bnQiLCJjcmVhdGVPdmVydmlld01hcCIsIm92bVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJvdm0iLCJPdk1hcCIsImNvbGxhcHNpYmxlIiwicm90YXRlV2l0aFZpZXciLCJsYXllcnMiLCJzZXRNYXAiLCJtYXAiLCJyZW1vdmVGcm9tTWFwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZ2V0T3ZlcnZpZXdNYXAiLCJpc09wZW4iLCJoYXNDbGFzcyIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNldFNvdXJjZSIsIkNvbXBvbmVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9