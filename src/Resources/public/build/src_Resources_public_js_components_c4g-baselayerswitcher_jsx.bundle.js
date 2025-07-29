"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-baselayerswitcher_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-baselayerswitcher.jsx":
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-baselayerswitcher.jsx ***!
  \**********************************************************************/
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
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./src/Resources/public/js/components/c4g-overlay-controls.jsx");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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
var BaselayerSwitcher = exports["default"] = /*#__PURE__*/function (_Component) {
  function BaselayerSwitcher(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, BaselayerSwitcher);
    _this = _callSuper(this, BaselayerSwitcher, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_BASELAYER;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_BASELAYER;
    }
    element.className = "c4g-baselayer-control ol-unselectable ol-control ";
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
      return element.name === "baselayerswitcher";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.baselayerSwitcher = control;
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    var baselayerLoaded = false;
    if (props.mapController.proxy.baselayerLoaded) {
      baselayerLoaded = true;
    } else {
      props.mapController.proxy.hook_baselayer_loaded = props.mapController.proxy.hook_baselayer_loaded || [];
      props.mapController.proxy.hook_baselayer_loaded.push(function () {
        scope.setState({
          baselayerLoaded: true,
          currentBaselayer: props.mapController.state.activeBaselayerId
        });
      });
    }
    // state variables (every property that has influence on this component)
    _this.state = {
      open: props.open || false,
      className: props.className || "c4g-baselayerswitcher-panel",
      control: control,
      baselayerLoaded: baselayerLoaded,
      currentBaselayer: 0,
      baselayerFilter: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(BaselayerSwitcher, _Component);
  return (0, _createClass2["default"])(BaselayerSwitcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getFilteredBaselayerIds",
    value: function getFilteredBaselayerIds() {
      var arrBaselayers = this.props.baselayerController.arrBaselayers;
      var ids = this.props.baselayerController.baselayerIds;
      var returnIds = [];
      if (this.state.baselayerFilter === "") {
        returnIds = ids;
      } else {
        for (var i = 0; i < ids.length; i++) {
          var baselayer = arrBaselayers[ids[i]];
          if (baselayer.name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
            returnIds.push(ids[i]);
          } else {
            // check if an overlay matches
            var overlays = baselayer.overlayController.arrOverlays;
            var overlayKeys = Object.keys(overlays);
            if (overlayKeys.length > 0) {
              for (var j = 0; j < overlayKeys.length; j++) {
                if (overlays[overlayKeys[j]].name.toLowerCase().indexOf(this.state.baselayerFilter.toLowerCase()) !== -1) {
                  returnIds.push(ids[i]);
                  break;
                }
              }
            }
          }
        }
      }
      return returnIds;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var arrBaselayers = this.props.baselayerController.arrBaselayers;
      var baseLayerIds = this.getFilteredBaselayerIds();
      var filter = '';
      if (this.props.mapController.data.baselayerswitcher.filter) {
        filter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-baselayer-filter without-button"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "c4g-baselayer-filter-field",
          type: "text",
          placeholder: "\uF002",
          onInput: function onInput() {
            _this2.filterBaselayers(_this2.value);
          }
        }));
      }
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-baselayer-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-baselayer-container").removeClass("c4g-open").addClass("c4g-close");
      }
      var scope = this;
      var headline = this.props.mapController.data.baselayerswitcher.label ? this.props.mapController.data.baselayerswitcher.label : "Basiskarten";
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-baselayer-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-baselayer-header",
        headerClass: "c4g-baselayer-headline",
        header: headline,
        closeBtnClass: "c4g-baselayer-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), filter, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-baselayertree-content"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, baseLayerIds.map(function (element, index) {
        var baselayer = arrBaselayers[element];
        var currentCls = scope.state.currentBaselayer === element ? "c4g-active" : "c4g-inactive";
        var preview = "";
        if (baselayer.preview_image) {
          preview = /*#__PURE__*/_react["default"].createElement("img", {
            className: "c4g-baselayer-preview",
            src: baselayer.preview_image,
            alt: ""
          });
        }
        var overlays = "";
        if (baselayer.overlayController.arrOverlays.length > 0 && scope.state.currentBaselayer === element) {
          overlays = /*#__PURE__*/_react["default"].createElement(_c4gOverlayControls.OverlayControls, {
            overlayController: baselayer.overlayController
          });
        }
        var nameNode = baselayer.name;
        if (preview) {
          nameNode = /*#__PURE__*/_react["default"].createElement("span", null, baselayer.name);
        }
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index,
          className: preview ? "with-image" : "without-image"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          onMouseUp: function onMouseUp(event) {
            event.preventDefault();
            event.stopPropagation();
            scope.entryClick(element);
          },
          className: currentCls
        }, nameNode, preview), overlays);
      }))));
    }
  }, {
    key: "filterBaselayers",
    value: function filterBaselayers(fieldValue) {
      var filterValue = jQuery(".c4g-baselayer-filter-field").val();
      this.setState({
        baselayerFilter: filterValue
      });
    }
  }, {
    key: "entryClick",
    value: function entryClick(id) {
      this.props.baselayerController.showBaseLayer(id);
      this.props.changeActiveLayers(id);
      this.setState({
        currentBaselayer: id
      });
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
        if (panelVal === "BaselayerSwitcher" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "BaselayerSwitcher" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "BaselayerSwitcher");
        }
      }
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-overlay-controls.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-overlay-controls.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OverlayControls = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
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
var OverlayControls = exports.OverlayControls = /*#__PURE__*/function (_Component) {
  function OverlayControls(props) {
    (0, _classCallCheck2["default"])(this, OverlayControls);
    return _callSuper(this, OverlayControls, [props]);
  }
  (0, _inherits2["default"])(OverlayControls, _Component);
  return (0, _createClass2["default"])(OverlayControls, [{
    key: "render",
    value: function render() {
      var scope = this;
      var overlays = this.props.overlayController.arrOverlays;
      var callback = function callback(idx) {
        var value = jQuery("#c4g-overlay-toggle_" + idx).val();
        scope.props.overlayController.arrOverlays[idx].changeOpacity(value);
      };
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "c4g-overlays"
      }, overlays.map(function (element, index) {
        var entry = /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("span", null, element.name), /*#__PURE__*/_react["default"].createElement("input", {
          id: "c4g-overlay-toggle_" + index,
          className: "c4g-overlay-toggle",
          type: "range",
          onInput: function onInput() {
            return callback(index);
          },
          min: 0,
          max: 100,
          step: 10,
          defaultValue: element.opacity
        })));
        return entry;
      }));
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctYmFzZWxheWVyc3dpdGNoZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFFQSxJQUFBRSxZQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsbUJBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxhQUFBLEdBQUFKLG1CQUFBO0FBQXdDLFNBQUFELHdCQUFBTSxDQUFBLEVBQUFDLENBQUEsNkJBQUFDLE9BQUEsTUFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBUix1QkFBQSxZQUFBQSx3QkFBQU0sQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxPQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLFFBQUFHLENBQUEsQ0FBQUssR0FBQSxDQUFBWCxDQUFBLFVBQUFNLENBQUEsQ0FBQU0sR0FBQSxDQUFBWixDQUFBLEdBQUFNLENBQUEsQ0FBQU8sR0FBQSxDQUFBYixDQUFBLEVBQUFRLENBQUEsY0FBQU0sRUFBQSxJQUFBZCxDQUFBLGdCQUFBYyxFQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsSUFBQUQsQ0FBQSxHQUFBVyxNQUFBLENBQUFDLGNBQUEsS0FBQUQsTUFBQSxDQUFBRSx3QkFBQSxDQUFBbkIsQ0FBQSxFQUFBYyxF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O1VBQUNYLFNBQVMsRUFBRSxvQkFBcUI7VUFBQ3FELElBQUksRUFBQyxPQUFPO1VBQUNFLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBUTRDLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQztVQUFBLENBQUM7VUFDaEg0RixHQUFHLEVBQUUsQ0FBRTtVQUFDQyxHQUFHLEVBQUUsR0FBSTtVQUFDQyxJQUFJLEVBQUUsRUFBRztVQUFDQyxZQUFZLEVBQUV6SCxPQUFPLENBQUMwSDtRQUFRLENBQUMsQ0FDakUsQ0FDRCxDQUFDO1FBQ0wsT0FBT0wsS0FBSztNQUNkLENBQUMsQ0FDQyxDQUFDO0lBRVQ7RUFBQztBQUFBLEVBNUJrQ0osZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJsYXktY29udHJvbHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtPdmVybGF5Q29udHJvbHN9IGZyb20gXCIuL2M0Zy1vdmVybGF5LWNvbnRyb2xzLmpzeFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VsYXllclN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9CQVNFTEFZRVI7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfQkFTRUxBWUVSO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctYmFzZWxheWVyLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJiYXNlbGF5ZXJzd2l0Y2hlclwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmJhc2VsYXllclN3aXRjaGVyID0gY29udHJvbDtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIGxldCBiYXNlbGF5ZXJMb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5iYXNlbGF5ZXJMb2FkZWQpIHtcbiAgICAgIGJhc2VsYXllckxvYWRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgfHwgW107XG4gICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZC5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBzY29wZS5zZXRTdGF0ZSh7YmFzZWxheWVyTG9hZGVkOiB0cnVlLCBjdXJyZW50QmFzZWxheWVyOiBwcm9wcy5tYXBDb250cm9sbGVyLnN0YXRlLmFjdGl2ZUJhc2VsYXllcklkfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1iYXNlbGF5ZXJzd2l0Y2hlci1wYW5lbFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGJhc2VsYXllckxvYWRlZDogYmFzZWxheWVyTG9hZGVkLFxuICAgICAgY3VycmVudEJhc2VsYXllcjogMCxcbiAgICAgIGJhc2VsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgaWRzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmJhc2VsYXllcklkcztcbiAgICBsZXQgcmV0dXJuSWRzID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuYmFzZWxheWVyRmlsdGVyID09PSBcIlwiKSB7XG4gICAgICByZXR1cm5JZHMgPSBpZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiYXNlbGF5ZXIgPSBhcnJCYXNlbGF5ZXJzW2lkc1tpXV07XG4gICAgICAgIGlmIChiYXNlbGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuSWRzLnB1c2goaWRzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiBhbiBvdmVybGF5IG1hdGNoZXNcbiAgICAgICAgICBsZXQgb3ZlcmxheXMgPSBiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXM7XG4gICAgICAgICAgbGV0IG92ZXJsYXlLZXlzID0gT2JqZWN0LmtleXMob3ZlcmxheXMpO1xuICAgICAgICAgIGlmIChvdmVybGF5S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG92ZXJsYXlLZXlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChvdmVybGF5c1tvdmVybGF5S2V5c1tqXV0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuSWRzLnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuSWRzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhcnJCYXNlbGF5ZXJzID0gdGhpcy5wcm9wcy5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnM7XG4gICAgbGV0IGJhc2VMYXllcklkcyA9IHRoaXMuZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMoKTtcbiAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1maWx0ZXIgd2l0aG91dC1idXR0b25cIn0+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9XG4gICAgICAgICAgICAgICBvbklucHV0PXsoKSA9PiB7dGhpcy5maWx0ZXJCYXNlbGF5ZXJzKHRoaXMudmFsdWUpfX0vPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoZWFkbGluZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmJhc2VsYXllcnN3aXRjaGVyLmxhYmVsID8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgOiBcIkJhc2lza2FydGVuXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXItd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRsaW5lfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1iYXNlbGF5ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfS8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIHtmaWx0ZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1iYXNlbGF5ZXJ0cmVlLWNvbnRlbnRcIn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2Jhc2VMYXllcklkcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbZWxlbWVudF07XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50Q2xzID0gc2NvcGUuc3RhdGUuY3VycmVudEJhc2VsYXllciA9PT0gZWxlbWVudCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIjtcbiAgICAgICAgICAgICAgbGV0IHByZXZpZXcgPSBcIlwiO1xuICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyLnByZXZpZXdfaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3ID0gPGltZyBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci1wcmV2aWV3XCJ9IHNyYz17YmFzZWxheWVyLnByZXZpZXdfaW1hZ2V9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgb3ZlcmxheXMgPSBcIlwiO1xuICAgICAgICAgICAgICBpZiAoYmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzLmxlbmd0aCA+IDAgJiYgc2NvcGUuc3RhdGUuY3VycmVudEJhc2VsYXllciA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlzID0gPE92ZXJsYXlDb250cm9scyBvdmVybGF5Q29udHJvbGxlcj17YmFzZWxheWVyLm92ZXJsYXlDb250cm9sbGVyfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBuYW1lTm9kZSA9IGJhc2VsYXllci5uYW1lO1xuICAgICAgICAgICAgICBpZiAocHJldmlldykge1xuICAgICAgICAgICAgICAgIG5hbWVOb2RlID0gPHNwYW4+e2Jhc2VsYXllci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3ByZXZpZXcgPyBcIndpdGgtaW1hZ2VcIiA6IFwid2l0aG91dC1pbWFnZVwifT5cbiAgICAgICAgICAgICAgICA8YSBvbk1vdXNlVXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZW50cnlDbGljayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNsYXNzTmFtZT17Y3VycmVudENsc30+e25hbWVOb2RlfVxuICAgICAgICAgICAgICAgIHtwcmV2aWV3fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7b3ZlcmxheXN9XG4gICAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZmlsdGVyQmFzZWxheWVycyhmaWVsZFZhbHVlKSB7XG4gICAgbGV0IGZpbHRlclZhbHVlID0galF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItZmlsdGVyLWZpZWxkXCIpLnZhbCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2VsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGVudHJ5Q2xpY2soaWQpIHtcbiAgICB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuc2hvd0Jhc2VMYXllcihpZCk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VBY3RpdmVMYXllcnMoaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRCYXNlbGF5ZXI6IGlkfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSBcIkJhc2VsYXllclN3aXRjaGVyXCIgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFuZWxWYWwgIT09IFwiQmFzZWxheWVyU3dpdGNoZXJcIiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIkJhc2VsYXllclN3aXRjaGVyXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udHJvbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG92ZXJsYXlzID0gdGhpcy5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgbGV0IHZhbHVlID0galF1ZXJ5KFwiI2M0Zy1vdmVybGF5LXRvZ2dsZV9cIiArIGlkeCkudmFsKCk7XG4gICAgICBzY29wZS5wcm9wcy5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tpZHhdLmNoYW5nZU9wYWNpdHkodmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXlzXCJ9PlxuICAgICAgICB7b3ZlcmxheXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGVudHJ5ID0gPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxzcGFuPntlbGVtZW50Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQgPXtcImM0Zy1vdmVybGF5LXRvZ2dsZV9cIisgaW5kZXh9IGNsYXNzTmFtZT17XCJjNGctb3ZlcmxheS10b2dnbGVcIn0gdHlwZT1cInJhbmdlXCIgb25JbnB1dD17KCkgPT4gY2FsbGJhY2soaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgbWluPXswfSBtYXg9ezEwMH0gc3RlcD17MTB9IGRlZmF1bHRWYWx1ZT17ZWxlbWVudC5vcGFjaXR5fS8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT47XG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNJMThuIiwiX2M0Z092ZXJsYXlDb250cm9scyIsIl9jNGdNYXBzVXRpbHMiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIkJhc2VsYXllclN3aXRjaGVyIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJDVFJMX0JBU0VMQVlFUiIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiYmFzZWxheWVyU3dpdGNoZXIiLCJiaW5kIiwiYmFzZWxheWVyTG9hZGVkIiwicHJveHkiLCJob29rX2Jhc2VsYXllcl9sb2FkZWQiLCJwdXNoIiwic2V0U3RhdGUiLCJjdXJyZW50QmFzZWxheWVyIiwiYWN0aXZlQmFzZWxheWVySWQiLCJiYXNlbGF5ZXJGaWx0ZXIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRGaWx0ZXJlZEJhc2VsYXllcklkcyIsImFyckJhc2VsYXllcnMiLCJiYXNlbGF5ZXJDb250cm9sbGVyIiwiaWRzIiwiYmFzZWxheWVySWRzIiwicmV0dXJuSWRzIiwibGVuZ3RoIiwiYmFzZWxheWVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib3ZlcmxheXMiLCJvdmVybGF5Q29udHJvbGxlciIsImFyck92ZXJsYXlzIiwib3ZlcmxheUtleXMiLCJrZXlzIiwiaiIsInJlbmRlciIsIl90aGlzMiIsImJhc2VMYXllcklkcyIsImZpbHRlciIsImJhc2VsYXllcnN3aXRjaGVyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25JbnB1dCIsImZpbHRlckJhc2VsYXllcnMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGVhZGxpbmUiLCJsYWJlbCIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwibWFwIiwiY3VycmVudENscyIsInByZXZpZXciLCJwcmV2aWV3X2ltYWdlIiwic3JjIiwiYWx0IiwiT3ZlcmxheUNvbnRyb2xzIiwibmFtZU5vZGUiLCJvbk1vdXNlVXAiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImVudHJ5Q2xpY2siLCJmaWVsZFZhbHVlIiwiZmlsdGVyVmFsdWUiLCJ2YWwiLCJpZCIsInNob3dCYXNlTGF5ZXIiLCJjaGFuZ2VBY3RpdmVMYXllcnMiLCJzZXRPcGVuQ29tcG9uZW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsIkNvbXBvbmVudCIsImNhbGxiYWNrIiwiaWR4IiwiY2hhbmdlT3BhY2l0eSIsImVudHJ5IiwibWluIiwibWF4Iiwic3RlcCIsImRlZmF1bHRWYWx1ZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9