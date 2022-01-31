(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-overviewmap_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-overviewmap.jsx":
/*!****************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-overviewmap.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

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

exports["default"] = OverviewMap;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctb3ZlcnZpZXdtYXBfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1QixtQkFBTyxDQUFDLHdGQUF1Qjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyx5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7Ozs7QUNOaEc7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyx5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7Ozs7QUNKOUY7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyx5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7Ozs7QUNKaEcsd0JBQXdCLG1CQUFPLENBQUMsMEZBQXdCOztBQUV4RCxzQkFBc0IsbUJBQU8sQ0FBQyxzRkFBc0I7O0FBRXBELGlDQUFpQyxtQkFBTyxDQUFDLDRHQUFpQzs7QUFFMUUsd0JBQXdCLG1CQUFPLENBQUMsMEZBQXdCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhHOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0sdUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUVxQkM7Ozs7O0FBRW5CLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxRQUFJQyxPQUFKLEVBQ0VDLE9BREYsRUFFRUMsV0FGRjtBQUdBLFFBQU1DLEtBQUssaURBQVg7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLENBQUNOLEtBQUssQ0FBQ08sU0FERjtBQUVYQyxNQUFBQSxNQUFNLEVBQUUsTUFBS1IsS0FBTCxDQUFXUTtBQUZSLEtBQWI7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLDhCQUFZVCxL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RUFBZ0JDLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQUksQ0FBQyxLQUFLOUIsWUFBTCxDQUFrQitCLFFBQWxCLENBQTJCRCxFQUEzQixDQUFMLEVBQXFDO0FBQ25DLGFBQUs5QixZQUFMLENBQWtCZ0MsSUFBbEIsQ0FBdUJGLEVBQXZCO0FBQ0EsWUFBSUcsU0FBUyx1Q0FBTyxLQUFLNUQsS0FBTCxDQUFXRyxNQUFsQixDQUFiO0FBQ0F5RCxRQUFBQSxTQUFTLENBQUNELElBQVYsQ0FBZUgsS0FBZjtBQUNBLGFBQUtiLFFBQUwsQ0FBYztBQUFDeEMsVUFBQUEsTUFBTSxFQUFFeUQ7QUFBVCxTQUFkO0FBQ0Q7QUFDRjs7O0VBdElzQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1vdmVydmlld21hcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbCwgT3ZlcnZpZXdNYXAgYXMgT3ZNYXB9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IExheWVyR3JvdXAgZnJvbSBcIm9sL2xheWVyL0dyb3VwXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IGVsZW1lbnQsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdHJpZ2dlckljb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBsYXllcnM6IHRoaXMucHJvcHMubGF5ZXJzXG4gICAgfTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5PVkVSVklFV01BUCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTDtcbiAgICBpZiAocHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjc3NDb25zdGFudHMuQ0xPU0U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIH1cbiAgICAvLyBwcm9wcy50YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0cmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJpZ2dlci50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX09WRVJWSUVXTUFQO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodHJpZ2dlcik7XG5cbiAgICB0cmlnZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTjtcbiAgICB0cmlnZ2VyLmFwcGVuZENoaWxkKHRyaWdnZXJJY29uKTtcblxuICAgIGpRdWVyeSh0cmlnZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXRcbiAgICB9KTtcbiAgICB0aGlzLmJhc2VMYXllcklkcyA9IFtdO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMub3ZlcnZpZXdNYXAgPSBjb250cm9sO1xuICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3ZlcnZpZXctbWFwLXdyYXBwZXJcIn0+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLW92ZXJ3aWV2LWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctb3ZlcnZpZXctaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk9WRVJWSUVXTUFQfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDxkaXYgaWQ9e1wib3ZlcnZpZXctbWFwLXRhcmdldFwifSBjbGFzc05hbWU9e1wiYzRnLW92ZXJ2aWV3LWNvbnRlbnRcIn0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgY3JlYXRlT3ZlcnZpZXdNYXAoKSB7XG4gICAgbGV0IG92bVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcnZpZXctbWFwLXRhcmdldFwiKTtcbiAgICB0aGlzLm92bSA9IG5ldyBPdk1hcCh7XG4gICAgICBjb2xsYXBzZWQ6IHRoaXMucHJvcHMuY29sbGFwc2VkIHx8IHRydWUsXG4gICAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgICByb3RhdGVXaXRoVmlldzogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogJ29sLW92ZXJ2aWV3bWFwIG9sLWN1c3RvbS1vdmVydmlld21hcCcsXG4gICAgICB0YXJnZXQ6IG92bVRhcmdldCxcbiAgICAgIGxheWVyczogdGhpcy5zdGF0ZS5sYXllcnNcbiAgICB9KTtcbiAgICB0aGlzLm92bS5zZXRNYXAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCk7XG4gIH1cblxuICByZW1vdmVGcm9tTWFwKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXRPdmVydmlld01hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdm07XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgaWYgKGpRdWVyeSh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5PUEVOKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm9wZW4gJiYgcHJldlN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMub3ZtVGFyZ2V0KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5vdm1UYXJnZXQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgIH1cbiAgICBpZiAocHJldlN0YXRlLmxheWVycy5sZW5ndGggIT09IHRoaXMuc3RhdGUubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgaWYgKCF0aGlzLm92bSkge1xuICAgICAgICB0aGlzLmNyZWF0ZU92ZXJ2aWV3TWFwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGF5ZXJHcm91cCA9IG5ldyBMYXllckdyb3VwKHtsYXllcnM6IHRoaXMuc3RhdGUubGF5ZXJzfSk7XG4gICAgICAgIHRoaXMub3ZtLmdldE92ZXJ2aWV3TWFwKCkuc2V0TGF5ZXJHcm91cChsYXllckdyb3VwKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGFkZExheWVyKGxheWVyLCBpZCkge1xuICAgIGlmICghdGhpcy5iYXNlTGF5ZXJJZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLmJhc2VMYXllcklkcy5wdXNoKGlkKTtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBbLi4udGhpcy5zdGF0ZS5sYXllcnNdO1xuICAgICAgYXJyTGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGF5ZXJzOiBhcnJMYXllcnN9KVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIk92ZXJ2aWV3TWFwIiwicHJvcHMiLCJlbGVtZW50IiwidHJpZ2dlciIsInRyaWdnZXJJY29uIiwic2NvcGUiLCJzdGF0ZSIsIm9wZW4iLCJjb2xsYXBzZWQiLCJsYXllcnMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJiaW5kIiwiY2xvc2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjc3NDb25zdGFudHMiLCJPVkVSVklFV01BUCIsIk9MX1VOU0VMRUNUQUJMRSIsIk9MX0NPTlRST0wiLCJDTE9TRSIsIk9QRU4iLCJ0aXRsZSIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJhcHBlbmRDaGlsZCIsIklDT04iLCJqUXVlcnkiLCJjbGljayIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiYmFzZUxheWVySWRzIiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJvdmVydmlld01hcCIsIm1hcCIsImFkZENvbnRyb2wiLCJvdm1UYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwib3ZtIiwiT3ZNYXAiLCJjb2xsYXBzaWJsZSIsInJvdGF0ZVdpdGhWaWV3Iiwic2V0TWFwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaGFzQ2xhc3MiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsZW5ndGgiLCJjcmVhdGVPdmVydmlld01hcCIsImxheWVyR3JvdXAiLCJMYXllckdyb3VwIiwiZ2V0T3ZlcnZpZXdNYXAiLCJzZXRMYXllckdyb3VwIiwibGF5ZXIiLCJpZCIsImluY2x1ZGVzIiwicHVzaCIsImFyckxheWVycyIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=