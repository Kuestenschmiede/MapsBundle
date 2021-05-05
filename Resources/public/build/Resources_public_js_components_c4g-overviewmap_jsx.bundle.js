(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-overviewmap_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./Resources/public/js/components/c4g-overviewmap.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-overviewmap.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _Group = _interopRequireDefault(__webpack_require__(/*! ol/layer/Group */ "./node_modules/ol/layer/Group.js"));

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar */ "./Resources/public/js/components/c4g-titlebar.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
      open: !props.collapsed,
      layers: _this.props.layers
    };
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.mapController = props.mapController;
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
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
      return _react["default"].createElement("div", {
        className: "overview-map-wrapper"
      }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-overwiev-header",
        headerClass: "c4g-overview-headline",
        header: this.langConstants.OVERVIEWMAP,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), _react["default"].createElement("div", {
        id: "overview-map-target",
        className: "c4g-overview-content"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
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
        layers: this.state.layers
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

      if (prevState.layers.length !== this.state.layers.length) {
        if (!this.ovm) {
          this.createOverviewMap();
        } else {
          var layerGroup = new _Group["default"]({
            layers: this.state.layers
          });
          this.ovm.getOverviewMap().setLayerGroup(layerGroup);
        }
      }
    }
  }, {
    key: "addLayer",
    value: function addLayer(layer, id) {
      if (!this.baseLayerIds.includes(id)) {
        this.baseLayerIds.push(id);
        var arrLayers = (0, _toConsumableArray2["default"])(this.state.layers);
        arrLayers.push(layer);
        this.setState({
          layers: arrLayers
        });
      }
    }
  }]);
  return OverviewMap;
}(_react.Component);

exports.default = OverviewMap;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJuYW1lcyI6WyJPdmVydmlld01hcCIsInByb3BzIiwiZWxlbWVudCIsInRyaWdnZXIiLCJ0cmlnZ2VySWNvbiIsInNjb3BlIiwic3RhdGUiLCJvcGVuIiwiY29sbGFwc2VkIiwibGF5ZXJzIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiYmluZCIsImNsb3NlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3NzQ29uc3RhbnRzIiwiT1ZFUlZJRVdNQVAiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9DT05UUk9MIiwiQ0xPU0UiLCJPUEVOIiwidGl0bGUiLCJDVFJMX09WRVJWSUVXTUFQIiwiYXBwZW5kQ2hpbGQiLCJJQ09OIiwialF1ZXJ5IiwiY2xpY2siLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImJhc2VMYXllcklkcyIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwib3ZlcnZpZXdNYXAiLCJtYXAiLCJhZGRDb250cm9sIiwib3ZtVGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIm92bSIsIk92TWFwIiwiY29sbGFwc2libGUiLCJyb3RhdGVXaXRoVmlldyIsInNldE1hcCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhhc0NsYXNzIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGVuZ3RoIiwiY3JlYXRlT3ZlcnZpZXdNYXAiLCJsYXllckdyb3VwIiwiTGF5ZXJHcm91cCIsImdldE92ZXJ2aWV3TWFwIiwic2V0TGF5ZXJHcm91cCIsImxheWVyIiwiaWQiLCJpbmNsdWRlcyIsInB1c2giLCJhcnJMYXllcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDUHJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNMckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ0xyRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhELHNCQUFzQixtQkFBTyxDQUFDLHNGQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyRTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7QUFFbkIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFFBQUlDLE9BQUosRUFDRUMs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SzlCLFlBQUwsQ0FBa0IrQixRQUFsQixDQUEyQkQsRUFBM0IsQ0FBTCxFQUFxQztBQUNuQyxhQUFLOUIsWUFBTCxDQUFrQmdDLElBQWxCLENBQXVCRixFQUF2QjtBQUNBLFlBQUlHLFNBQVMsdUNBQU8sS0FBSzVELEtBQUwsQ0FBV0csTUFBbEIsQ0FBYjtBQUNBeUQsaUJBQVMsQ0FBQ0QsSUFBVixDQUFlSCxLQUFmO0FBQ0EsYUFBS2IsUUFBTCxDQUFjO0FBQUN4QyxnQkFBTSxFQUFFeUQ7QUFBVCxTQUFkO0FBQ0Q7QUFDRjs7O0VBcElzQ0MsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1vdmVydmlld21hcF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbCwgT3ZlcnZpZXdNYXAgYXMgT3ZNYXB9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IExheWVyR3JvdXAgZnJvbSBcIm9sL2xheWVyL0dyb3VwXCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdHJpZ2dlckljb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBsYXllcnM6IHRoaXMucHJvcHMubGF5ZXJzXG4gICAgfTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PVkVSVklFV01BUCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICBpZiAocHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIH1cbiAgICAvLyBwcm9wcy50YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0cmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJpZ2dlci50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX09WRVJWSUVXTUFQO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJpZ2dlcik7XG5cbiAgICB0cmlnZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTjtcbiAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHRyaWdnZXJJY29uKTtcblxuICAgIGpRdWVyeSh0cmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICB0aGlzLmJhc2VMYXllcklkcyA9IFtdO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMub3ZlcnZpZXdNYXAgPSBjb250cm9sO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3ZlcnZpZXctbWFwLXdyYXBwZXJcIn0+XG4gICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1vdmVyd2lldi1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW92ZXJ2aWV3LWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuT1ZFUlZJRVdNQVB9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICA8L1RpdGxlYmFyPlxuICAgICAgPGRpdiBpZD17XCJvdmVydmlldy1tYXAtdGFyZ2V0XCJ9IGNsYXNzTmFtZT17XCJjNGctb3ZlcnZpZXctY29udGVudFwifT5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjcmVhdGVPdmVydmlld01hcCgpIHtcbiAgICBsZXQgb3ZtVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVydmlldy1tYXAtdGFyZ2V0XCIpO1xuICAgIHRoaXMub3ZtID0gbmV3IE92TWFwKHtcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5wcm9wcy5jb2xsYXBzZWQgfHwgdHJ1ZSxcbiAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgICAgIHJvdGF0ZVdpdGhWaWV3OiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiAnb2wtb3ZlcnZpZXdtYXAgb2wtY3VzdG9tLW92ZXJ2aWV3bWFwJyxcbiAgICAgIHRhcmdldDogb3ZtVGFyZ2V0LFxuICAgICAgbGF5ZXJzOiB0aGlzLnN0YXRlLmxheWVyc1xuICAgIH0pO1xuICAgIHRoaXMub3ZtLnNldE1hcCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwKTtcbiAgfVxuXG4gIHJlbW92ZUZyb21NYXAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldE92ZXJ2aWV3TWFwKCkge1xuICAgIHJldHVybiB0aGlzLm92bTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICBpZiAoalF1ZXJ5KHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUub3BlbiAmJiBwcmV2U3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUubGF5ZXJzLmxlbmd0aCAhPT0gdGhpcy5zdGF0ZS5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBpZiAoIXRoaXMub3ZtKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlT3ZlcnZpZXdNYXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllckdyb3VwID0gbmV3IExheWVyR3JvdXAoe2xheWVyczogdGhpcy5zdGF0ZS5sYXllcnN9KTtcbiAgICAgICAgdGhpcy5vdm0uZ2V0T3ZlcnZpZXdNYXAoKS5zZXRMYXllckdyb3VwKGxheWVyR3JvdXApO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgYWRkTGF5ZXIobGF5ZXIsIGlkKSB7XG4gICAgaWYgKCF0aGlzLmJhc2VMYXllcklkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuYmFzZUxheWVySWRzLnB1c2goaWQpO1xuICAgICAgbGV0IGFyckxheWVycyA9IFsuLi50aGlzLnN0YXRlLmxheWVyc107XG4gICAgICBhcnJMYXllcnMucHVzaChsYXllcik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsYXllcnM6IGFyckxheWVyc30pXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==