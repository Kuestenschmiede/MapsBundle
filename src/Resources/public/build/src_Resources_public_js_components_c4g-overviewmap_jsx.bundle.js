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
var _OSM = _interopRequireDefault(__webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctb3ZlcnZpZXdtYXBfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxnQkFBQSxHQUFBRixtQkFBQTtBQUNBLElBQUFHLFlBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxNQUFBLEdBQUFDLHNCQUFBLENBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sS0FBQSxHQUFBRCxzQkFBQSxDQUFBTCxtQkFBQTtBQUNBLElBQUFPLElBQUEsR0FBQUYsc0JBQUEsQ0FBQUwsbUJBQUE7QUFBZ0MsU0FBQUQsd0JBQUFTLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFYLHVCQUFBLFlBQUFBLHdCQUFBUyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFBQU0sRUFBQSxFQUFBUCxDQUFBLElBQUFDLENBQUEsQ0FBQU0sRUFBQSxJQUFBZCxDQUFBLENBQUFjLEVBQUEsV0FBQU4sQ0FBQSxLQUFBUixDQUFBLEVBQUFDLENBQUE7QUFBQSxTQUFBbUIsV0FBQW5CLENBQUEsRUFBQUssQ0FBQSxFQUFBTixDQUFBLFdBQUFNLENBQUEsT0FBQWUsZ0JBQUEsYUFBQWYsQ0FBQSxPQUFBZ0IsMkJBQUEsYUFBQXJCLENBQUEsRUFBQXNCLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBbkIsQ0FBQSxFQUFBTixDQUFBLFlBQUFxQixnQkFBQSxhQUFBcEIsQ0FBQSxFQUFBeUIsV0FBQSxJQUFBcEIsQ0FBQSxDQUFBcUIsS0FBQSxDQUFBMUIsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQXVCLDBCQUFBLGNBQUF0QixDQUFBLElBQUEyQixPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBZCxJQUFBLENBQUFRLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBM0IsQ0FBQSxhQUFBc0IseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXRCLENBQUEsVUFoQmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLElBQU04QixRQUFRLGdCQUFHQyxpQkFBSyxDQUFDQyxJQUFJLENBQUM7RUFBQSxPQUFNLHVLQUE0QjtBQUFBLEVBQUM7QUFBQyxJQUUzQ0MsV0FBVyxHQUFBQyxrQkFBQSwwQkFBQUMsVUFBQTtFQUU5QixTQUFBRixZQUFZRyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFMLFdBQUE7SUFDakJJLEtBQUEsR0FBQWxCLFVBQUEsT0FBQWMsV0FBQSxHQUFNRyxLQUFLO0lBRVgsSUFBSUcsT0FBTyxFQUNUQyxPQUFPLEVBQ1BDLFdBQVc7SUFDYixJQUFNQyxLQUFLLEdBQUFMLEtBQU87SUFFbEJBLEtBQUEsQ0FBS00sS0FBSyxHQUFHO01BQ1hDLElBQUksRUFBRSxDQUFDUixLQUFLLENBQUNTO0lBQ2YsQ0FBQztJQUNEUixLQUFBLENBQUtTLGFBQWEsR0FBRyxJQUFBQyx3QkFBVyxFQUFDWCxLQUFLLENBQUNZLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDO0lBQzFEWixLQUFBLENBQUtXLGFBQWEsR0FBR1osS0FBSyxDQUFDWSxhQUFhO0lBQ3hDWCxLQUFBLENBQUtPLElBQUksR0FBR1AsS0FBQSxDQUFLTyxJQUFJLENBQUNNLElBQUksQ0FBQWIsS0FBSyxDQUFDO0lBQ2hDQSxLQUFBLENBQUtjLEtBQUssR0FBR2QsS0FBQSxDQUFLYyxLQUFLLENBQUNELElBQUksQ0FBQWIsS0FBSyxDQUFDO0lBQ2xDQSxLQUFBLENBQUtlLEtBQUssR0FBRyxJQUFJQyxnQkFBUyxDQUFDO01BQUVDLE1BQU0sRUFBRSxJQUFJQyxlQUFHLENBQUM7SUFBRSxDQUFDLENBQUM7SUFDakRoQixPQUFPLEdBQUdpQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdkNsQixPQUFPLENBQUNtQixTQUFTLEdBQUdDLDZCQUFZLENBQUNDLFdBQVcsR0FBRyxHQUFHLEdBQUdELDZCQUFZLENBQUNFLGVBQWUsR0FBRyxHQUFHLEdBQUdGLDZCQUFZLENBQUNHLFVBQVU7SUFDakgsSUFBSTFCLEtBQUssQ0FBQ1MsU0FBUyxFQUFFO01BQ25CTixPQUFPLENBQUNtQixTQUFTLElBQUksR0FBRyxHQUFHQyw2QkFBWSxDQUFDSSxLQUFLO0lBQy9DLENBQUMsTUFBTTtNQUNMeEIsT0FBTyxDQUFDbUIsU0FBUyxJQUFJLEdBQUcsR0FBR0MsNkJBQVksQ0FBQ0ssSUFBSTtJQUM5QztJQUNBOztJQUVBeEIsT0FBTyxHQUFHZ0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzFDLElBQUlyQixLQUFLLENBQUNZLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDZ0IsU0FBUyxJQUFJN0IsS0FBSyxDQUFDWSxhQUFhLENBQUNDLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFO01BQzFGLElBQUlDLElBQUksR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ3pDVSxJQUFJLENBQUNDLFNBQVMsR0FBRy9CLEtBQUEsQ0FBS1MsYUFBYSxDQUFDdUIsZ0JBQWdCO01BQ3BEN0IsT0FBTyxDQUFDOEIsV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFDM0IsQ0FBQyxNQUNJO01BQ0gzQixPQUFPLENBQUMrQixLQUFLLEdBQUdsQyxLQUFBLENBQUtTLGFBQWEsQ0FBQ3VCLGdCQUFnQjtJQUNyRDtJQUNBOUIsT0FBTyxDQUFDK0IsV0FBVyxDQUFDOUIsT0FBTyxDQUFDOztJQUU1QjtJQUNBO0lBQ0E7O0lBRUFnQyxNQUFNLENBQUNoQyxPQUFPLENBQUMsQ0FBQ2lDLEtBQUssQ0FBQyxZQUFZO01BQ2hDLElBQUksQ0FBQy9CLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLEVBQUU7UUFDckJGLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFDZCxDQUFDLE1BQU07UUFDTEYsS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQztNQUNmO0lBQ0YsQ0FBQyxDQUFDO0lBRUZkLEtBQUEsQ0FBS0UsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUltQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQU8sQ0FBQztNQUN4QnBDLE9BQU8sRUFBRUEsT0FBTztNQUNoQnFDLE1BQU0sRUFBRXhDLEtBQUssQ0FBQ3dDO0lBQ2hCLENBQUMsQ0FBQztJQUNGdkMsS0FBQSxDQUFLd0MsWUFBWSxHQUFHLEVBQUU7SUFDdEIsSUFBSUMsS0FBSyxHQUFHekMsS0FBQSxDQUFLVyxhQUFhLENBQUMrQixhQUFhLENBQUNDLFNBQVMsQ0FBQyxVQUFBekMsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQzBDLElBQUksS0FBSyxVQUFVO0lBQUEsRUFBQztJQUM5RjVDLEtBQUEsQ0FBS1csYUFBYSxDQUFDK0IsYUFBYSxDQUFDRCxLQUFLLENBQUMsQ0FBQ0osT0FBTyxHQUFHQSxPQUFPO0lBQ3pEckMsS0FBQSxDQUFLVyxhQUFhLENBQUNrQyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsV0FBVyxHQUFHVixPQUFPO0lBQUMsT0FBQXJDLEtBQUE7RUFDakU7RUFBQyxJQUFBZ0QsVUFBQSxhQUFBcEQsV0FBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQW1ELGFBQUEsYUFBQXJELFdBQUE7SUFBQXNELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLG9CQUFPcEcsTUFBQSxZQUFBb0UsYUFBQTtRQUFLQyxTQUFTLEVBQUU7TUFBdUIsZ0JBQzVDckUsTUFBQSxZQUFBb0UsYUFBQSxDQUFDcEUsTUFBQSxDQUFBcUcsUUFBUTtRQUFDQyxRQUFRLGVBQUV0RyxNQUFBLFlBQUFvRSxhQUFBLGNBQUssWUFBZTtNQUFFLGdCQUN4Q3BFLE1BQUEsWUFBQW9FLGFBQUEsQ0FBQzNCLFFBQVE7UUFBQzhELFlBQVksRUFBRSxxQkFBc0I7UUFBQ0MsV0FBVyxFQUFFLHVCQUF3QjtRQUMxRUMsTUFBTSxFQUFFLElBQUksQ0FBQ2hELGFBQWEsQ0FBQ2MsV0FBWTtRQUFDbUMsYUFBYSxFQUFFLG9CQUFxQjtRQUFDQyxVQUFVLEVBQUUsSUFBSSxDQUFDN0MsS0FBTTtRQUFDOEMsYUFBYSxFQUFFLElBQUksQ0FBQ25ELGFBQWEsQ0FBQ2lCO01BQU0sQ0FDN0ksQ0FDRixDQUFDLGVBQ1gxRSxNQUFBLFlBQUFvRSxhQUFBO1FBQUt5QyxFQUFFLEVBQUUscUJBQXNCO1FBQUN4QyxTQUFTLEVBQUU7TUFBdUIsQ0FFN0QsQ0FDRixDQUFDO0lBQ1I7RUFBQztJQUFBNkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVcsaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCO0VBQUM7SUFBQWIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVksaUJBQWlCQSxDQUFBLEVBQUc7TUFDbEIsSUFBSUMsU0FBUyxHQUFHN0MsUUFBUSxDQUFDOEMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO01BQzlELElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUlDLG9CQUFLLENBQUM7UUFDbkIzRCxTQUFTLEVBQUUsSUFBSSxDQUFDVCxLQUFLLENBQUNTLFNBQVMsSUFBSSxJQUFJO1FBQ3ZDNEQsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLGNBQWMsRUFBRSxJQUFJO1FBQ3BCaEQsU0FBUyxFQUFFLHNDQUFzQztRQUNqRGtCLE1BQU0sRUFBRXlCLFNBQVM7UUFDakJNLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQ3ZELEtBQUs7TUFDckIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDbUQsR0FBRyxDQUFDSyxNQUFNLENBQUMsSUFBSSxDQUFDeEUsS0FBSyxDQUFDWSxhQUFhLENBQUM2RCxHQUFHLENBQUM7SUFDL0M7RUFBQztJQUFBdEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNCLGFBQWFBLENBQUEsRUFBRztNQUNkLElBQUksQ0FBQ3ZFLE9BQU8sQ0FBQ3dFLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3pFLE9BQU8sQ0FBQztJQUNuRDtFQUFDO0lBQUFnRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBeUIsY0FBY0EsQ0FBQSxFQUFHO01BQ2YsT0FBTyxJQUFJLENBQUNWLEdBQUc7SUFDakI7RUFBQztJQUFBaEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTBCLE1BQU1BLENBQUEsRUFBRztNQUNQLElBQUkxQyxNQUFNLENBQUMsSUFBSSxDQUFDakMsT0FBTyxDQUFDLENBQUM0RSxRQUFRLENBQUN4RCw2QkFBWSxDQUFDSyxJQUFJLENBQUMsRUFBRTtRQUNwRCxPQUFPLElBQUk7TUFDYixDQUFDLE1BQU07UUFDTCxPQUFPLEtBQUs7TUFDZDtJQUNGO0VBQUM7SUFBQXVCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE1QyxJQUFJQSxDQUFBLEVBQUc7TUFDTCxJQUFJLENBQUN3RSxRQUFRLENBQUM7UUFBQ3hFLElBQUksRUFBRTtNQUFJLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNSLEtBQUssQ0FBQ1ksYUFBYSxDQUFDcUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBQ2pEO0VBQUM7SUFBQTlCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFyQyxLQUFLQSxDQUFBLEVBQUc7TUFDTixJQUFJLENBQUNpRSxRQUFRLENBQUM7UUFBQ3hFLElBQUksRUFBRTtNQUFLLENBQUMsQ0FBQztJQUM5QjtFQUFDO0lBQUEyQyxHQUFBO0lBQUFDLEtBQUEsRUFHRCxTQUFBOEIsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO01BQ2pELElBQUksQ0FBQyxJQUFJLENBQUM5RSxLQUFLLENBQUNDLElBQUksSUFBSTRFLFNBQVMsQ0FBQzVFLElBQUksRUFBRTtRQUN0QzRCLE1BQU0sQ0FBQyxJQUFJLENBQUNqQyxPQUFPLENBQUMsQ0FBQ21GLFFBQVEsQ0FBQy9ELDZCQUFZLENBQUNJLEtBQUssQ0FBQyxDQUFDNEQsV0FBVyxDQUFDaEUsNkJBQVksQ0FBQ0ssSUFBSSxDQUFDO1FBQ2hGUSxNQUFNLENBQUMsSUFBSSxDQUFDcEMsS0FBSyxDQUFDaUUsU0FBUyxDQUFDLENBQUNxQixRQUFRLENBQUMvRCw2QkFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBQzRELFdBQVcsQ0FBQ2hFLDZCQUFZLENBQUNLLElBQUksQ0FBQztNQUMxRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNyQixLQUFLLENBQUNDLElBQUksRUFBRTtRQUMxQjRCLE1BQU0sQ0FBQyxJQUFJLENBQUNqQyxPQUFPLENBQUMsQ0FBQ29GLFdBQVcsQ0FBQ2hFLDZCQUFZLENBQUNJLEtBQUssQ0FBQyxDQUFDMkQsUUFBUSxDQUFDL0QsNkJBQVksQ0FBQ0ssSUFBSSxDQUFDO1FBQ2hGUSxNQUFNLENBQUMsSUFBSSxDQUFDcEMsS0FBSyxDQUFDaUUsU0FBUyxDQUFDLENBQUNzQixXQUFXLENBQUNoRSw2QkFBWSxDQUFDSSxLQUFLLENBQUMsQ0FBQzJELFFBQVEsQ0FBQy9ELDZCQUFZLENBQUNLLElBQUksQ0FBQztNQUMxRjtNQUNBLElBQUl1RCxTQUFTLENBQUNqRSxNQUFNLEtBQUssSUFBSSxDQUFDbEIsS0FBSyxDQUFDa0IsTUFBTSxFQUFFO1FBQzFDLElBQUksQ0FBQ0YsS0FBSyxDQUFDd0UsU0FBUyxDQUFDLElBQUksQ0FBQ3hGLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQztNQUN6QztJQUNGO0VBQUM7QUFBQSxFQWhJc0N1RSxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2wsIE92ZXJ2aWV3TWFwIGFzIE92TWFwfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBMYXllckdyb3VwIGZyb20gXCJvbC9sYXllci9Hcm91cFwiO1xuaW1wb3J0IFRpbGVMYXllciBmcm9tIFwib2wvbGF5ZXIvVGlsZVwiO1xuaW1wb3J0IE9TTSBmcm9tIFwib2wvc291cmNlL09TTVwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgdHJpZ2dlcixcbiAgICAgIHRyaWdnZXJJY29uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiAhcHJvcHMuY29sbGFwc2VkLFxuICAgIH07XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllciA9IG5ldyBUaWxlTGF5ZXIoeyBzb3VyY2U6IG5ldyBPU00oKSB9KTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT1ZFUlZJRVdNQVAgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG4gICAgaWYgKHByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuT1BFTjtcbiAgICB9XG4gICAgLy8gcHJvcHMudGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX09WRVJWSUVXTUFQO1xuICAgICAgdHJpZ2dlci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0cmlnZ2VyLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfT1ZFUlZJRVdNQVA7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJpZ2dlcik7XG5cbiAgICAvLyB0cmlnZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTjtcbiAgICAvLyB0cmlnZ2VyLmFwcGVuZENoaWxkKHRyaWdnZXJJY29uKTtcblxuICAgIGpRdWVyeSh0cmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICB0aGlzLmJhc2VMYXllcklkcyA9IFtdO1xuICAgIGxldCBpbmRleCA9IHRoaXMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJvdmVydmlld1wiKTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5vdmVydmlld01hcCA9IGNvbnRyb2w7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcIm92ZXJ2aWV3LW1hcC13cmFwcGVyXCJ9PlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1vdmVyd2lldi1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW92ZXJ2aWV3LWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5PVkVSVklFV01BUH0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8ZGl2IGlkPXtcIm92ZXJ2aWV3LW1hcC10YXJnZXRcIn0gY2xhc3NOYW1lPXtcImM0Zy1vdmVydmlldy1jb250ZW50XCJ9PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNyZWF0ZU92ZXJ2aWV3TWFwKCk7XG4gIH1cblxuICBjcmVhdGVPdmVydmlld01hcCgpIHtcbiAgICBsZXQgb3ZtVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVydmlldy1tYXAtdGFyZ2V0XCIpO1xuICAgIHRoaXMub3ZtID0gbmV3IE92TWFwKHtcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5wcm9wcy5jb2xsYXBzZWQgfHwgdHJ1ZSxcbiAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgICAgIHJvdGF0ZVdpdGhWaWV3OiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiAnb2wtb3ZlcnZpZXdtYXAgb2wtY3VzdG9tLW92ZXJ2aWV3bWFwJyxcbiAgICAgIHRhcmdldDogb3ZtVGFyZ2V0LFxuICAgICAgbGF5ZXJzOiBbdGhpcy5sYXllcl1cbiAgICB9KTtcbiAgICB0aGlzLm92bS5zZXRNYXAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCk7XG4gIH1cblxuICByZW1vdmVGcm9tTWFwKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXRPdmVydmlld01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdm07XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5PUEVOKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUub3BlbiAmJiBwcmV2U3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfVxuICAgIGlmIChwcmV2UHJvcHMuc291cmNlICE9PSB0aGlzLnByb3BzLnNvdXJjZSkge1xuICAgICAgdGhpcy5sYXllci5zZXRTb3VyY2UodGhpcy5wcm9wcy5zb3VyY2UpO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnTWFwc0kxOG4iLCJfR3JvdXAiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX1RpbGUiLCJfT1NNIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJPdmVydmlld01hcCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJlbGVtZW50IiwidHJpZ2dlciIsInRyaWdnZXJJY29uIiwic2NvcGUiLCJzdGF0ZSIsIm9wZW4iLCJjb2xsYXBzZWQiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImJpbmQiLCJjbG9zZSIsImxheWVyIiwiVGlsZUxheWVyIiwic291cmNlIiwiT1NNIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT1ZFUlZJRVdNQVAiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9DT05UUk9MIiwiQ0xPU0UiLCJPUEVOIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX09WRVJWSUVXTUFQIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImpRdWVyeSIsImNsaWNrIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJiYXNlTGF5ZXJJZHMiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJvdmVydmlld01hcCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJpZCIsImNvbXBvbmVudERpZE1vdW50IiwiY3JlYXRlT3ZlcnZpZXdNYXAiLCJvdm1UYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib3ZtIiwiT3ZNYXAiLCJjb2xsYXBzaWJsZSIsInJvdGF0ZVdpdGhWaWV3IiwibGF5ZXJzIiwic2V0TWFwIiwibWFwIiwicmVtb3ZlRnJvbU1hcCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImdldE92ZXJ2aWV3TWFwIiwiaXNPcGVuIiwiaGFzQ2xhc3MiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZXRTb3VyY2UiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9