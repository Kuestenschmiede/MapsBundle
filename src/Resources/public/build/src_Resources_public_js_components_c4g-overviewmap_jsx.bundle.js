"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-overviewmap_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-overviewmap.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-overviewmap.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _Group = _interopRequireDefault(__webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var OverviewMap = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(OverviewMap, _Component);

  var _super = _createSuper(OverviewMap);

  function OverviewMap(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, OverviewMap);
    _this = _super.call(this, props);
    var element, trigger, triggerIcon;
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.state = {
      open: !props.collapsed
    };
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.mapController = props.mapController;
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.layer = new _Tile["default"]();
    element = document.createElement('div');
    element.className = _c4gMapsConstant.cssConstants.OVERVIEWMAP + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL;

    if (props.collapsed) {
      element.className += ' ' + _c4gMapsConstant.cssConstants.CLOSE;
    } else {
      element.className += ' ' + _c4gMapsConstant.cssConstants.OPEN;
    } // props.target.appendChild(element);


    trigger = document.createElement('button');
    trigger.title = _this.langConstants.CTRL_OVERVIEWMAP;
    element.appendChild(trigger);
    triggerIcon = document.createElement('span');
    triggerIcon.className = _c4gMapsConstant.cssConstants.ICON;
    trigger.appendChild(triggerIcon);
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
    _this.mapController.mapsControls.controls.overviewMap = control;

    _this.mapController.map.addControl(control);

    return _this;
  }

  (0, _createClass2["default"])(OverviewMap, [{
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
  return OverviewMap;
}(_react.Component);

exports["default"] = OverviewMap;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctb3ZlcnZpZXdtYXBfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxnQkFBR0MsaUJBQUEsQ0FBTUMsSUFBTixDQUFXO0VBQUEsT0FBTSx1S0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBRXFCQzs7Ozs7RUFFbkIscUJBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTtJQUNqQiwwQkFBTUEsS0FBTjtJQUVBLElBQUlDLE9BQUosRUFDRUMsT0FERixFQUVFQyxXQUZGO0lBR0EsSUFBTUMsS0FBSyxpREFBWDtJQUVBLE1BQUtDLEtBQUwsR0FBYTtNQUNYQyxJQUFJLEVBQUUsQ0FBQ04sS0FBSyxDQUFDTztJQURGLENBQWI7SUFHQSxNQUFLQyxhQUFMLEdBQXFCLElBQUFDLHdCQUFBLEVBQVlULEtBQUssQ0FBQ1UsYUFBTixDQUFvQkMsSUFBaEMsQ0FBckI7SUFDQSxNQUFLRCxhQUFMLEdBQXFCVixLQUFLLENBQUNVLGFBQTNCO0lBQ0EsTUFBS0osSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVU0sSUFBVixnREFBWjtJQUNBLE1BQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdELElBQVgsZ0RBQWI7SUFDQSxNQUFLRSxLQUFMLEdBQWEsSUFBSUMsZ0JBQUosRUFBYjtJQUNBZCxPQUFPLEdBQUdlLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0lBQ0FoQixPQUFPLENBQUNpQixTQUFSLEdBQW9CQyw2QkFBQSxDQUFhQyxXQUFiLEdBQTJCLEdBQTNCLEdBQWlDRCw2QkFBQSxDQUFhRSxlQUE5QyxHQUFnRSxHQUFoRSxHQUFzRUYsNkJBQUEsQ0FBYUcsVUFBdkc7O0lBQ0EsSUFBSXRCLEtBQUssQ0FBQ08sU0FBVixFQUFxQjtN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QUFMLENBQVd5QyxTQUFaLENBQU4sQ0FBNkJpQixXQUE3QixDQUF5Q3ZDLDZCQUFBLENBQWFJLEtBQXRELEVBQTZEa0MsUUFBN0QsQ0FBc0V0Qyw2QkFBQSxDQUFhSyxJQUFuRjtNQUNEOztNQUNELElBQUk4QixTQUFTLENBQUNLLE1BQVYsS0FBcUIsS0FBSzNELEtBQUwsQ0FBVzJELE1BQXBDLEVBQTRDO1FBQzFDLEtBQUs3QyxLQUFMLENBQVc4QyxTQUFYLENBQXFCLEtBQUs1RCxLQUFMLENBQVcyRCxNQUFoQztNQUNEO0lBQ0Y7OztFQXhIc0NFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2wsIE92ZXJ2aWV3TWFwIGFzIE92TWFwfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBMYXllckdyb3VwIGZyb20gXCJvbC9sYXllci9Hcm91cFwiO1xuaW1wb3J0IFRpbGVMYXllciBmcm9tIFwib2wvbGF5ZXIvVGlsZVwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgdHJpZ2dlcixcbiAgICAgIHRyaWdnZXJJY29uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiAhcHJvcHMuY29sbGFwc2VkLFxuICAgIH07XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllciA9IG5ldyBUaWxlTGF5ZXIoKTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT1ZFUlZJRVdNQVAgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG4gICAgaWYgKHByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuT1BFTjtcbiAgICB9XG4gICAgLy8gcHJvcHMudGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyaWdnZXIudGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9PVkVSVklFV01BUDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRyaWdnZXIpO1xuXG4gICAgdHJpZ2dlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdHJpZ2dlckljb24uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLklDT047XG4gICAgdHJpZ2dlci5hcHBlbmRDaGlsZCh0cmlnZ2VySWNvbik7XG5cbiAgICBqUXVlcnkodHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgdGhpcy5iYXNlTGF5ZXJJZHMgPSBbXTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm92ZXJ2aWV3TWFwID0gY29udHJvbDtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcIm92ZXJ2aWV3LW1hcC13cmFwcGVyXCJ9PlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1vdmVyd2lldi1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW92ZXJ2aWV3LWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5PVkVSVklFV01BUH0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8ZGl2IGlkPXtcIm92ZXJ2aWV3LW1hcC10YXJnZXRcIn0gY2xhc3NOYW1lPXtcImM0Zy1vdmVydmlldy1jb250ZW50XCJ9PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNyZWF0ZU92ZXJ2aWV3TWFwKCk7XG4gIH1cblxuICBjcmVhdGVPdmVydmlld01hcCgpIHtcbiAgICBsZXQgb3ZtVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVydmlldy1tYXAtdGFyZ2V0XCIpO1xuICAgIHRoaXMub3ZtID0gbmV3IE92TWFwKHtcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5wcm9wcy5jb2xsYXBzZWQgfHwgdHJ1ZSxcbiAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgICAgIHJvdGF0ZVdpdGhWaWV3OiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiAnb2wtb3ZlcnZpZXdtYXAgb2wtY3VzdG9tLW92ZXJ2aWV3bWFwJyxcbiAgICAgIHRhcmdldDogb3ZtVGFyZ2V0LFxuICAgICAgbGF5ZXJzOiBbdGhpcy5sYXllcl1cbiAgICB9KTtcbiAgICB0aGlzLm92bS5zZXRNYXAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCk7XG4gIH1cblxuICByZW1vdmVGcm9tTWFwKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXRPdmVydmlld01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdm07XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5PUEVOKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUub3BlbiAmJiBwcmV2U3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfVxuICAgIGlmIChwcmV2UHJvcHMuc291cmNlICE9PSB0aGlzLnByb3BzLnNvdXJjZSkge1xuICAgICAgdGhpcy5sYXllci5zZXRTb3VyY2UodGhpcy5wcm9wcy5zb3VyY2UpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk92ZXJ2aWV3TWFwIiwicHJvcHMiLCJlbGVtZW50IiwidHJpZ2dlciIsInRyaWdnZXJJY29uIiwic2NvcGUiLCJzdGF0ZSIsIm9wZW4iLCJjb2xsYXBzZWQiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImJpbmQiLCJjbG9zZSIsImxheWVyIiwiVGlsZUxheWVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT1ZFUlZJRVdNQVAiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9DT05UUk9MIiwiQ0xPU0UiLCJPUEVOIiwidGl0bGUiLCJDVFJMX09WRVJWSUVXTUFQIiwiYXBwZW5kQ2hpbGQiLCJJQ09OIiwialF1ZXJ5IiwiY2xpY2siLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImJhc2VMYXllcklkcyIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwib3ZlcnZpZXdNYXAiLCJtYXAiLCJhZGRDb250cm9sIiwiY3JlYXRlT3ZlcnZpZXdNYXAiLCJvdm1UYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib3ZtIiwiT3ZNYXAiLCJjb2xsYXBzaWJsZSIsInJvdGF0ZVdpdGhWaWV3IiwibGF5ZXJzIiwic2V0TWFwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaGFzQ2xhc3MiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzb3VyY2UiLCJzZXRTb3VyY2UiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9