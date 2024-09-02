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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _Group = _interopRequireDefault(__webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js"));
var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js"));
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
    _this.layer = new _Tile["default"]();
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctb3ZlcnZpZXdtYXBfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxnQkFBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxNQUFBLEdBQUFDLHNCQUFBLENBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sS0FBQSxHQUFBRCxzQkFBQSxDQUFBTCxtQkFBQTtBQUFzQyxTQUFBTyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVQsd0JBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxLQUFBQSxDQUFBLENBQUFWLEdBQUEsSUFBQVUsQ0FBQSxDQUFBQyxHQUFBLElBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixDQUFBLEVBQUFNLENBQUEsRUFBQUcsQ0FBQSxJQUFBVCxDQUFBLENBQUFNLENBQUEsSUFBQWQsQ0FBQSxDQUFBYyxDQUFBLFlBQUFOLENBQUEsY0FBQVIsQ0FBQSxFQUFBRyxDQUFBLElBQUFBLENBQUEsQ0FBQWUsR0FBQSxDQUFBbEIsQ0FBQSxFQUFBUSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBVyxXQUFBaEIsQ0FBQSxFQUFBaUIsQ0FBQSxFQUFBcEIsQ0FBQSxXQUFBb0IsQ0FBQSxPQUFBQyxnQkFBQSxhQUFBRCxDQUFBLE9BQUFFLDJCQUFBLGFBQUFuQixDQUFBLEVBQUFvQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQUwsQ0FBQSxFQUFBcEIsQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQWxCLENBQUEsRUFBQXVCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUF4QixDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXBCLENBQUEsSUFBQXlCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUF6QixDQUFBLGFBQUFvQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBcEIsQ0FBQSxVQWZ0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQSxJQUFNNEIsUUFBUSxnQkFBR0MsaUJBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBQUEsT0FBTSx1S0FBNEI7QUFBQSxFQUFDO0FBQUMsSUFFM0NDLFdBQVcsR0FBQUMsa0JBQUEsMEJBQUFDLFVBQUE7RUFFOUIsU0FBQUYsWUFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxXQUFBO0lBQ2pCSSxLQUFBLEdBQUFuQixVQUFBLE9BQUFlLFdBQUEsR0FBTUcsS0FBSztJQUVYLElBQUlHLE9BQU8sRUFDVEMsT0FBTyxFQUNQQyxXQUFXO0lBQ2IsSUFBTUMsS0FBSyxHQUFBTCxLQUFPO0lBRWxCQSxLQUFBLENBQUtNLEtBQUssR0FBRztNQUNYQyxJQUFJLEVBQUUsQ0FBQ1IsS0FBSyxDQUFDUztJQUNmLENBQUM7SUFDRFIsS0FBQSxDQUFLUyxhQUFhLEdBQUcsSUFBQUMsd0JBQVcsRUFBQ1gsS0FBSyxDQUFDWSxhQUFhLENBQUNDLElBQUksQ0FBQztJQUMxRFosS0FBQSxDQUFLVyxhQUFhLEdBQUdaLEtBQUssQ0FBQ1ksYUFBYTtJQUN4Q1gsS0FBQSxDQUFLTyxJQUFJLEdBQUdQLEtBQUEsQ0FBS08sSUFBSSxDQUFDTSxJQUFJLENBQUFiLEtBQUssQ0FBQztJQUNoQ0EsS0FBQSxDQUFLYyxLQUFLLEdBQUdkLEtBQUEsQ0FBS2MsS0FBSyxDQUFDRCxJQUFJLENBQUFiLEtBQUssQ0FBQztJQUNsQ0EsS0FBQSxDQUFLZSxLQUFLLEdBQUcsSUFBSUMsZ0JBQVMsQ0FBQyxDQUFDO0lBQzVCZCxPQUFPLEdBQUdlLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN2Q2hCLE9BQU8sQ0FBQ2lCLFNBQVMsR0FBR0MsNkJBQVksQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsR0FBR0QsNkJBQVksQ0FBQ0UsZUFBZSxHQUFHLEdBQUcsR0FBR0YsNkJBQVksQ0FBQ0csVUFBVTtJQUNqSCxJQUFJeEIsS0FBSyxDQUFDUyxTQUFTLEVBQUU7TUFDbkJOLE9BQU8sQ0FBQ2lCLFNBQVMsSUFBSSxHQUFHLEdBQUdDLDZCQUFZLENBQUNJLEtBQUs7SUFDL0MsQ0FBQyxNQUFNO01BQ0x0QixPQUFPLENBQUNpQixTQUFTLElBQUksR0FBRyxHQUFHQyw2QkFBWSxDQUFDSyxJQUFJO0lBQzlDO0lBQ0E7O0lBRUF0QixPQUFPLEdBQUdjLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUMxQyxJQUFJbkIsS0FBSyxDQUFDWSxhQUFhLENBQUNDLElBQUksQ0FBQ2MsU0FBUyxJQUFJM0IsS0FBSyxDQUFDWSxhQUFhLENBQUNDLElBQUksQ0FBQ2MsU0FBUyxDQUFDQyxhQUFhLEVBQUU7TUFDMUYsSUFBSUMsSUFBSSxHQUFHWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDekNVLElBQUksQ0FBQ0MsU0FBUyxHQUFHN0IsS0FBQSxDQUFLUyxhQUFhLENBQUNxQixnQkFBZ0I7TUFDcEQzQixPQUFPLENBQUM0QixXQUFXLENBQUNILElBQUksQ0FBQztJQUMzQixDQUFDLE1BQ0k7TUFDSHpCLE9BQU8sQ0FBQzZCLEtBQUssR0FBR2hDLEtBQUEsQ0FBS1MsYUFBYSxDQUFDcUIsZ0JBQWdCO0lBQ3JEO0lBQ0E1QixPQUFPLENBQUM2QixXQUFXLENBQUM1QixPQUFPLENBQUM7O0lBRTVCO0lBQ0E7SUFDQTs7SUFFQThCLE1BQU0sQ0FBQzlCLE9BQU8sQ0FBQyxDQUFDK0IsS0FBSyxDQUFDLFlBQVk7TUFDaEMsSUFBSSxDQUFDN0IsS0FBSyxDQUFDQyxLQUFLLENBQUNDLElBQUksRUFBRTtRQUNyQkYsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQztNQUNkLENBQUMsTUFBTTtRQUNMRixLQUFLLENBQUNTLEtBQUssQ0FBQyxDQUFDO01BQ2Y7SUFDRixDQUFDLENBQUM7SUFFRmQsS0FBQSxDQUFLRSxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSWlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBTyxDQUFDO01BQ3hCbEMsT0FBTyxFQUFFQSxPQUFPO01BQ2hCbUMsTUFBTSxFQUFFdEMsS0FBSyxDQUFDc0M7SUFDaEIsQ0FBQyxDQUFDO0lBQ0ZyQyxLQUFBLENBQUtzQyxZQUFZLEdBQUcsRUFBRTtJQUN0QixJQUFJQyxLQUFLLEdBQUd2QyxLQUFBLENBQUtXLGFBQWEsQ0FBQzZCLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDLFVBQUF2QyxPQUFPO01BQUEsT0FBSUEsT0FBTyxDQUFDd0MsSUFBSSxLQUFLLFVBQVU7SUFBQSxFQUFDO0lBQzlGMUMsS0FBQSxDQUFLVyxhQUFhLENBQUM2QixhQUFhLENBQUNELEtBQUssQ0FBQyxDQUFDSixPQUFPLEdBQUdBLE9BQU87SUFDekRuQyxLQUFBLENBQUtXLGFBQWEsQ0FBQ2dDLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXLEdBQUdWLE9BQU87SUFBQyxPQUFBbkMsS0FBQTtFQUNqRTtFQUFDLElBQUE4QyxVQUFBLGFBQUFsRCxXQUFBLEVBQUFFLFVBQUE7RUFBQSxXQUFBaUQsYUFBQSxhQUFBbkQsV0FBQTtJQUFBb0QsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1Asb0JBQU9sRyxNQUFBLFlBQUFrRSxhQUFBO1FBQUtDLFNBQVMsRUFBRTtNQUF1QixnQkFDNUNuRSxNQUFBLFlBQUFrRSxhQUFBLENBQUNsRSxNQUFBLENBQUFtRyxRQUFRO1FBQUNDLFFBQVEsZUFBRXBHLE1BQUEsWUFBQWtFLGFBQUEsY0FBSyxZQUFlO01BQUUsZ0JBQ3hDbEUsTUFBQSxZQUFBa0UsYUFBQSxDQUFDekIsUUFBUTtRQUFDNEQsWUFBWSxFQUFFLHFCQUFzQjtRQUFDQyxXQUFXLEVBQUUsdUJBQXdCO1FBQzFFQyxNQUFNLEVBQUUsSUFBSSxDQUFDOUMsYUFBYSxDQUFDWSxXQUFZO1FBQUNtQyxhQUFhLEVBQUUsb0JBQXFCO1FBQUNDLFVBQVUsRUFBRSxJQUFJLENBQUMzQyxLQUFNO1FBQUM0QyxhQUFhLEVBQUUsSUFBSSxDQUFDakQsYUFBYSxDQUFDZTtNQUFNLENBQzdJLENBQ0YsQ0FBQyxlQUNYeEUsTUFBQSxZQUFBa0UsYUFBQTtRQUFLeUMsRUFBRSxFQUFFLHFCQUFzQjtRQUFDeEMsU0FBUyxFQUFFO01BQXVCLENBRTdELENBQ0YsQ0FBQztJQUNSO0VBQUM7SUFBQTZCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFXLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2xCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUMxQjtFQUFDO0lBQUFiLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFZLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2xCLElBQUlDLFNBQVMsR0FBRzdDLFFBQVEsQ0FBQzhDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztNQUM5RCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJQyxvQkFBSyxDQUFDO1FBQ25CekQsU0FBUyxFQUFFLElBQUksQ0FBQ1QsS0FBSyxDQUFDUyxTQUFTLElBQUksSUFBSTtRQUN2QzBELFdBQVcsRUFBRSxLQUFLO1FBQ2xCQyxjQUFjLEVBQUUsSUFBSTtRQUNwQmhELFNBQVMsRUFBRSxzQ0FBc0M7UUFDakRrQixNQUFNLEVBQUV5QixTQUFTO1FBQ2pCTSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUNyRCxLQUFLO01BQ3JCLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ2lELEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQ3RFLEtBQUssQ0FBQ1ksYUFBYSxDQUFDMkQsR0FBRyxDQUFDO0lBQy9DO0VBQUM7SUFBQXRCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzQixhQUFhQSxDQUFBLEVBQUc7TUFDZCxJQUFJLENBQUNyRSxPQUFPLENBQUNzRSxVQUFVLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUN2RSxPQUFPLENBQUM7SUFDbkQ7RUFBQztJQUFBOEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlCLGNBQWNBLENBQUEsRUFBRztNQUNmLE9BQU8sSUFBSSxDQUFDVixHQUFHO0lBQ2pCO0VBQUM7SUFBQWhCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwQixNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJMUMsTUFBTSxDQUFDLElBQUksQ0FBQy9CLE9BQU8sQ0FBQyxDQUFDMEUsUUFBUSxDQUFDeEQsNkJBQVksQ0FBQ0ssSUFBSSxDQUFDLEVBQUU7UUFDcEQsT0FBTyxJQUFJO01BQ2IsQ0FBQyxNQUFNO1FBQ0wsT0FBTyxLQUFLO01BQ2Q7SUFDRjtFQUFDO0lBQUF1QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMUMsSUFBSUEsQ0FBQSxFQUFHO01BQ0wsSUFBSSxDQUFDc0UsUUFBUSxDQUFDO1FBQUN0RSxJQUFJLEVBQUU7TUFBSSxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDUixLQUFLLENBQUNZLGFBQWEsQ0FBQ21FLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUNqRDtFQUFDO0lBQUE5QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbkMsS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDK0QsUUFBUSxDQUFDO1FBQUN0RSxJQUFJLEVBQUU7TUFBSyxDQUFDLENBQUM7SUFDOUI7RUFBQztJQUFBeUMsR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQThCLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDNUUsS0FBSyxDQUFDQyxJQUFJLElBQUkwRSxTQUFTLENBQUMxRSxJQUFJLEVBQUU7UUFDdEMwQixNQUFNLENBQUMsSUFBSSxDQUFDL0IsT0FBTyxDQUFDLENBQUNpRixRQUFRLENBQUMvRCw2QkFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBQzRELFdBQVcsQ0FBQ2hFLDZCQUFZLENBQUNLLElBQUksQ0FBQztRQUNoRlEsTUFBTSxDQUFDLElBQUksQ0FBQ2xDLEtBQUssQ0FBQytELFNBQVMsQ0FBQyxDQUFDcUIsUUFBUSxDQUFDL0QsNkJBQVksQ0FBQ0ksS0FBSyxDQUFDLENBQUM0RCxXQUFXLENBQUNoRSw2QkFBWSxDQUFDSyxJQUFJLENBQUM7TUFDMUYsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDbkIsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDMUIwQixNQUFNLENBQUMsSUFBSSxDQUFDL0IsT0FBTyxDQUFDLENBQUNrRixXQUFXLENBQUNoRSw2QkFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBQzJELFFBQVEsQ0FBQy9ELDZCQUFZLENBQUNLLElBQUksQ0FBQztRQUNoRlEsTUFBTSxDQUFDLElBQUksQ0FBQ2xDLEtBQUssQ0FBQytELFNBQVMsQ0FBQyxDQUFDc0IsV0FBVyxDQUFDaEUsNkJBQVksQ0FBQ0ksS0FBSyxDQUFDLENBQUMyRCxRQUFRLENBQUMvRCw2QkFBWSxDQUFDSyxJQUFJLENBQUM7TUFDMUY7TUFDQSxJQUFJdUQsU0FBUyxDQUFDSyxNQUFNLEtBQUssSUFBSSxDQUFDdEYsS0FBSyxDQUFDc0YsTUFBTSxFQUFFO1FBQzFDLElBQUksQ0FBQ3RFLEtBQUssQ0FBQ3VFLFNBQVMsQ0FBQyxJQUFJLENBQUN2RixLQUFLLENBQUNzRixNQUFNLENBQUM7TUFDekM7SUFDRjtFQUFDO0FBQUEsRUFoSXNDRSxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1vdmVydmlld21hcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sLCBPdmVydmlld01hcCBhcyBPdk1hcH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQgTGF5ZXJHcm91cCBmcm9tIFwib2wvbGF5ZXIvR3JvdXBcIjtcbmltcG9ydCBUaWxlTGF5ZXIgZnJvbSBcIm9sL2xheWVyL1RpbGVcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlld01hcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgZWxlbWVudCxcbiAgICAgIHRyaWdnZXIsXG4gICAgICB0cmlnZ2VySWNvbjtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogIXByb3BzLmNvbGxhcHNlZCxcbiAgICB9O1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGF5ZXIgPSBuZXcgVGlsZUxheWVyKCk7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLk9WRVJWSUVXTUFQICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MO1xuICAgIGlmIChwcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5DTE9TRTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgfVxuICAgIC8vIHByb3BzLnRhcmdldC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRyaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9PVkVSVklFV01BUDtcbiAgICAgIHRyaWdnZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdHJpZ2dlci50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX09WRVJWSUVXTUFQO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRyaWdnZXIpO1xuXG4gICAgLy8gdHJpZ2dlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gdHJpZ2dlckljb24uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLklDT047XG4gICAgLy8gdHJpZ2dlci5hcHBlbmRDaGlsZCh0cmlnZ2VySWNvbik7XG5cbiAgICBqUXVlcnkodHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgdGhpcy5iYXNlTGF5ZXJJZHMgPSBbXTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwib3ZlcnZpZXdcIik7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMub3ZlcnZpZXdNYXAgPSBjb250cm9sO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJvdmVydmlldy1tYXAtd3JhcHBlclwifT5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctb3ZlcndpZXYtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1vdmVydmlldy1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuT1ZFUlZJRVdNQVB9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgICAgPGRpdiBpZD17XCJvdmVydmlldy1tYXAtdGFyZ2V0XCJ9IGNsYXNzTmFtZT17XCJjNGctb3ZlcnZpZXctY29udGVudFwifT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jcmVhdGVPdmVydmlld01hcCgpO1xuICB9XG5cbiAgY3JlYXRlT3ZlcnZpZXdNYXAoKSB7XG4gICAgbGV0IG92bVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcnZpZXctbWFwLXRhcmdldFwiKTtcbiAgICB0aGlzLm92bSA9IG5ldyBPdk1hcCh7XG4gICAgICBjb2xsYXBzZWQ6IHRoaXMucHJvcHMuY29sbGFwc2VkIHx8IHRydWUsXG4gICAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgICByb3RhdGVXaXRoVmlldzogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogJ29sLW92ZXJ2aWV3bWFwIG9sLWN1c3RvbS1vdmVydmlld21hcCcsXG4gICAgICB0YXJnZXQ6IG92bVRhcmdldCxcbiAgICAgIGxheWVyczogW3RoaXMubGF5ZXJdXG4gICAgfSk7XG4gICAgdGhpcy5vdm0uc2V0TWFwKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXApO1xuICB9XG5cbiAgcmVtb3ZlRnJvbU1hcCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0T3ZlcnZpZXdNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZtO1xuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuT1BFTikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm9wZW4gJiYgcHJldlN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMub3ZtVGFyZ2V0KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH1cbiAgICBpZiAocHJldlByb3BzLnNvdXJjZSAhPT0gdGhpcy5wcm9wcy5zb3VyY2UpIHtcbiAgICAgIHRoaXMubGF5ZXIuc2V0U291cmNlKHRoaXMucHJvcHMuc291cmNlKTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbnRyb2wiLCJfYzRnTWFwc0NvbnN0YW50IiwiX2M0Z01hcHNJMThuIiwiX0dyb3VwIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9UaWxlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk92ZXJ2aWV3TWFwIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImVsZW1lbnQiLCJ0cmlnZ2VyIiwidHJpZ2dlckljb24iLCJzY29wZSIsInN0YXRlIiwib3BlbiIsImNvbGxhcHNlZCIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiYmluZCIsImNsb3NlIiwibGF5ZXIiLCJUaWxlTGF5ZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPVkVSVklFV01BUCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJDTE9TRSIsIk9QRU4iLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwialF1ZXJ5IiwiY2xpY2siLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImJhc2VMYXllcklkcyIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsIm92ZXJ2aWV3TWFwIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsImlkIiwiY29tcG9uZW50RGlkTW91bnQiLCJjcmVhdGVPdmVydmlld01hcCIsIm92bVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJvdm0iLCJPdk1hcCIsImNvbGxhcHNpYmxlIiwicm90YXRlV2l0aFZpZXciLCJsYXllcnMiLCJzZXRNYXAiLCJtYXAiLCJyZW1vdmVGcm9tTWFwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZ2V0T3ZlcnZpZXdNYXAiLCJpc09wZW4iLCJoYXNDbGFzcyIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNvdXJjZSIsInNldFNvdXJjZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=