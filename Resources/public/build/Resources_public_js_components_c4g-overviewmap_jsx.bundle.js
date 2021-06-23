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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJ2aWV3bWFwLmpzeCJdLCJuYW1lcyI6WyJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk92ZXJ2aWV3TWFwIiwicHJvcHMiLCJlbGVtZW50IiwidHJpZ2dlciIsInRyaWdnZXJJY29uIiwic2NvcGUiLCJzdGF0ZSIsIm9wZW4iLCJjb2xsYXBzZWQiLCJsYXllcnMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJiaW5kIiwiY2xvc2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPVkVSVklFV01BUCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJDTE9TRSIsIk9QRU4iLCJ0aXRsZSIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJhcHBlbmRDaGlsZCIsIklDT04iLCJqUXVlcnkiLCJjbGljayIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiYmFzZUxheWVySWRzIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJvdmVydmlld01hcCIsIm1hcCIsImFkZENvbnRyb2wiLCJvdm1UYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib3ZtIiwiT3ZNYXAiLCJjb2xsYXBzaWJsZSIsInJvdGF0ZVdpdGhWaWV3Iiwic2V0TWFwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaGFzQ2xhc3MiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsZW5ndGgiLCJjcmVhdGVPdmVydmlld01hcCIsImxheWVyR3JvdXAiLCJMYXllckdyb3VwIiwiZ2V0T3ZlcnZpZXdNYXAiLCJzZXRMYXllckdyb3VwIiwibGF5ZXIiLCJpZCIsImluY2x1ZGVzIiwicHVzaCIsImFyckxheWVycyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNQckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ0xyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDTHJFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQsc0JBQXNCLG1CQUFPLENBQUMsc0ZBQXNCOztBQUVwRCxpQ0FBaUMsbUJBQU8sQ0FBQyw0R0FBaUM7O0FBRTFFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJFOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0sbUtBQU47QUFBQSxDQUFYLENB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V0FBZixDQUFqQjtBQUNBLGVBQUtnQyxHQUFMLENBQVNtQixjQUFULEdBQTBCQyxhQUExQixDQUF3Q0gsVUFBeEM7QUFDRDtBQUVGO0FBQ0Y7OztXQUVELGtCQUFTSSxLQUFULEVBQWdCQyxFQUFoQixFQUFvQjtBQUNsQixVQUFJLENBQUMsS0FBSzlCLFlBQUwsQ0FBa0IrQixRQUFsQixDQUEyQkQsRUFBM0IsQ0FBTCxFQUFxQztBQUNuQyxhQUFLOUIsWUFBTCxDQUFrQmdDLElBQWxCLENBQXVCRixFQUF2QjtBQUNBLFlBQUlHLFNBQVMsdUNBQU8sS0FBSzVELEtBQUwsQ0FBV0csTUFBbEIsQ0FBYjtBQUNBeUQsaUJBQVMsQ0FBQ0QsSUFBVixDQUFlSCxLQUFmO0FBQ0EsYUFBS2IsUUFBTCxDQUFjO0FBQUN4QyxnQkFBTSxFQUFFeUQ7QUFBVCxTQUFkO0FBQ0Q7QUFDRjs7O0VBdElzQ0MsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1vdmVydmlld21hcF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2wsIE92ZXJ2aWV3TWFwIGFzIE92TWFwfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBMYXllckdyb3VwIGZyb20gXCJvbC9sYXllci9Hcm91cFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJ2aWV3TWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBlbGVtZW50LFxuICAgICAgdHJpZ2dlcixcbiAgICAgIHRyaWdnZXJJY29uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiAhcHJvcHMuY29sbGFwc2VkLFxuICAgICAgbGF5ZXJzOiB0aGlzLnByb3BzLmxheWVyc1xuICAgIH07XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuT1ZFUlZJRVdNQVAgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG4gICAgaWYgKHByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuT1BFTjtcbiAgICB9XG4gICAgLy8gcHJvcHMudGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyaWdnZXIudGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9PVkVSVklFV01BUDtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRyaWdnZXIpO1xuXG4gICAgdHJpZ2dlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdHJpZ2dlckljb24uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLklDT047XG4gICAgdHJpZ2dlci5hcHBlbmRDaGlsZCh0cmlnZ2VySWNvbik7XG5cbiAgICBqUXVlcnkodHJpZ2dlcikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0XG4gICAgfSk7XG4gICAgdGhpcy5iYXNlTGF5ZXJJZHMgPSBbXTtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm92ZXJ2aWV3TWFwID0gY29udHJvbDtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcIm92ZXJ2aWV3LW1hcC13cmFwcGVyXCJ9PlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1vdmVyd2lldi1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLW92ZXJ2aWV3LWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5PVkVSVklFV01BUH0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8ZGl2IGlkPXtcIm92ZXJ2aWV3LW1hcC10YXJnZXRcIn0gY2xhc3NOYW1lPXtcImM0Zy1vdmVydmlldy1jb250ZW50XCJ9PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIGNyZWF0ZU92ZXJ2aWV3TWFwKCkge1xuICAgIGxldCBvdm1UYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJ2aWV3LW1hcC10YXJnZXRcIik7XG4gICAgdGhpcy5vdm0gPSBuZXcgT3ZNYXAoe1xuICAgICAgY29sbGFwc2VkOiB0aGlzLnByb3BzLmNvbGxhcHNlZCB8fCB0cnVlLFxuICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgcm90YXRlV2l0aFZpZXc6IHRydWUsXG4gICAgICBjbGFzc05hbWU6ICdvbC1vdmVydmlld21hcCBvbC1jdXN0b20tb3ZlcnZpZXdtYXAnLFxuICAgICAgdGFyZ2V0OiBvdm1UYXJnZXQsXG4gICAgICBsYXllcnM6IHRoaXMuc3RhdGUubGF5ZXJzXG4gICAgfSk7XG4gICAgdGhpcy5vdm0uc2V0TWFwKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXApO1xuICB9XG5cbiAgcmVtb3ZlRnJvbU1hcCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0T3ZlcnZpZXdNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZtO1xuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIGlmIChqUXVlcnkodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuT1BFTikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuICYmIHByZXZTdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm92bVRhcmdldCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMub3ZtVGFyZ2V0KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5sYXllcnMubGVuZ3RoICE9PSB0aGlzLnN0YXRlLmxheWVycy5sZW5ndGgpIHtcbiAgICAgIGlmICghdGhpcy5vdm0pIHtcbiAgICAgICAgdGhpcy5jcmVhdGVPdmVydmlld01hcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxheWVyR3JvdXAgPSBuZXcgTGF5ZXJHcm91cCh7bGF5ZXJzOiB0aGlzLnN0YXRlLmxheWVyc30pO1xuICAgICAgICB0aGlzLm92bS5nZXRPdmVydmlld01hcCgpLnNldExheWVyR3JvdXAobGF5ZXJHcm91cCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBhZGRMYXllcihsYXllciwgaWQpIHtcbiAgICBpZiAoIXRoaXMuYmFzZUxheWVySWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5iYXNlTGF5ZXJJZHMucHVzaChpZCk7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gWy4uLnRoaXMuc3RhdGUubGF5ZXJzXTtcbiAgICAgIGFyckxheWVycy5wdXNoKGxheWVyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyczogYXJyTGF5ZXJzfSlcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9