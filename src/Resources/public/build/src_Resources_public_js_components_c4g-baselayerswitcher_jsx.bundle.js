"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-baselayerswitcher_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-baselayerswitcher.jsx"
/*!**********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-baselayerswitcher.jsx ***!
  \**********************************************************************/
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
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _c4gOverlayControls = __webpack_require__(/*! ./c4g-overlay-controls.jsx */ "./src/Resources/public/js/components/c4g-overlay-controls.jsx");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-overlay-controls.jsx"
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-overlay-controls.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctYmFzZWxheWVyc3dpdGNoZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsbUJBQUE7QUFFQSxJQUFBRSxZQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsbUJBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxhQUFBLEdBQUFKLG1CQUFBO0FBQXdDLFNBQUFELHdCQUFBTSxDQUFBLEVBQUFDLENBQUEsNkJBQUFDLE9BQUEsTUFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBUix1QkFBQSxZQUFBQSx3QkFBQU0sQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxPQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLFFBQUFHLENBQUEsQ0FBQUssR0FBQSxDQUFBWCxDQUFBLFVBQUFNLENBQUEsQ0FBQU0sR0FBQSxDQUFBWixDQUFBLEdBQUFNLENBQUEsQ0FBQU8sR0FBQSxDQUFBYixDQUFBLEVBQUFRLENBQUEsY0FBQU0sRUFBQSxJQUFBZCxDQUFBLGdCQUFBYyxFQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsSUFBQUQsQ0FBQSxHQUFBVyxNQUFBLENBQUFDLGNBQUEsS0FBQUQsTUFBQSxDQUFBRSx3QkFBQSxDQUFBbkIsQ0FBQSxFQUFBYyxF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O1VBQUNYLFNBQVMsRUFBRSxvQkFBcUI7VUFBQ3FELElBQUksRUFBQyxPQUFPO1VBQUNFLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBUTRDLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQztVQUFBLENBQUM7VUFDaEg0RixHQUFHLEVBQUUsQ0FBRTtVQUFDQyxHQUFHLEVBQUUsR0FBSTtVQUFDQyxJQUFJLEVBQUUsRUFBRztVQUFDQyxZQUFZLEVBQUV6SCxPQUFPLENBQUMwSDtRQUFRLENBQUMsQ0FDakUsQ0FDRCxDQUFDO1FBQ0wsT0FBT0wsS0FBSztNQUNkLENBQUMsQ0FDQyxDQUFDO0lBRVQ7RUFBQztBQUFBLEVBNUJrQ0osZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1iYXNlbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW92ZXJsYXktY29udHJvbHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge092ZXJsYXlDb250cm9sc30gZnJvbSBcIi4vYzRnLW92ZXJsYXktY29udHJvbHMuanN4XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZWxheWVyU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0JBU0VMQVlFUjtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9CQVNFTEFZRVI7XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1iYXNlbGF5ZXItY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImJhc2VsYXllcnN3aXRjaGVyXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuYmFzZWxheWVyU3dpdGNoZXIgPSBjb250cm9sO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgbGV0IGJhc2VsYXllckxvYWRlZCA9IGZhbHNlO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmJhc2VsYXllckxvYWRlZCkge1xuICAgICAgYmFzZWxheWVyTG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lmhvb2tfYmFzZWxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaG9va19iYXNlbGF5ZXJfbG9hZGVkLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtiYXNlbGF5ZXJMb2FkZWQ6IHRydWUsIGN1cnJlbnRCYXNlbGF5ZXI6IHByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYWN0aXZlQmFzZWxheWVySWR9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWJhc2VsYXllcnN3aXRjaGVyLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYmFzZWxheWVyTG9hZGVkOiBiYXNlbGF5ZXJMb2FkZWQsXG4gICAgICBjdXJyZW50QmFzZWxheWVyOiAwLFxuICAgICAgYmFzZWxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBnZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpIHtcbiAgICBsZXQgYXJyQmFzZWxheWVycyA9IHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzO1xuICAgIGxldCBpZHMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYmFzZWxheWVySWRzO1xuICAgIGxldCByZXR1cm5JZHMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNlbGF5ZXJGaWx0ZXIgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybklkcyA9IGlkcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJhc2VsYXllciA9IGFyckJhc2VsYXllcnNbaWRzW2ldXTtcbiAgICAgICAgaWYgKGJhc2VsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIGFuIG92ZXJsYXkgbWF0Y2hlc1xuICAgICAgICAgIGxldCBvdmVybGF5cyA9IGJhc2VsYXllci5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cztcbiAgICAgICAgICBsZXQgb3ZlcmxheUtleXMgPSBPYmplY3Qua2V5cyhvdmVybGF5cyk7XG4gICAgICAgICAgaWYgKG92ZXJsYXlLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3ZlcmxheUtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKG92ZXJsYXlzW292ZXJsYXlLZXlzW2pdXS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnN0YXRlLmJhc2VsYXllckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5JZHMucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JZHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFyckJhc2VsYXllcnMgPSB0aGlzLnByb3BzLmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVycztcbiAgICBsZXQgYmFzZUxheWVySWRzID0gdGhpcy5nZXRGaWx0ZXJlZEJhc2VsYXllcklkcygpO1xuICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn1cbiAgICAgICAgICAgICAgIG9uSW5wdXQ9eygpID0+IHt0aGlzLmZpbHRlckJhc2VsYXllcnModGhpcy52YWx1ZSl9fS8+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1iYXNlbGF5ZXItY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctYmFzZWxheWVyLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYmFzZWxheWVyc3dpdGNoZXIubGFiZWwgPyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5iYXNlbGF5ZXJzd2l0Y2hlci5sYWJlbCA6IFwiQmFzaXNrYXJ0ZW5cIjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctYmFzZWxheWVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGxpbmV9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLWJhc2VsYXllci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2ZpbHRlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJhc2VsYXllcnRyZWUtY29udGVudFwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7YmFzZUxheWVySWRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICBsZXQgYmFzZWxheWVyID0gYXJyQmFzZWxheWVyc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDbHMgPSBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50ID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgICAgICAgICBsZXQgcHJldmlldyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIucHJldmlld19pbWFnZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXcgPSA8aW1nIGNsYXNzTmFtZT17XCJjNGctYmFzZWxheWVyLXByZXZpZXdcIn0gc3JjPXtiYXNlbGF5ZXIucHJldmlld19pbWFnZX0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBvdmVybGF5cyA9IFwiXCI7XG4gICAgICAgICAgICAgIGlmIChiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMubGVuZ3RoID4gMCAmJiBzY29wZS5zdGF0ZS5jdXJyZW50QmFzZWxheWVyID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheXMgPSA8T3ZlcmxheUNvbnRyb2xzIG92ZXJsYXlDb250cm9sbGVyPXtiYXNlbGF5ZXIub3ZlcmxheUNvbnRyb2xsZXJ9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IG5hbWVOb2RlID0gYmFzZWxheWVyLm5hbWU7XG4gICAgICAgICAgICAgIGlmIChwcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgbmFtZU5vZGUgPSA8c3Bhbj57YmFzZWxheWVyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17cHJldmlldyA/IFwid2l0aC1pbWFnZVwiIDogXCJ3aXRob3V0LWltYWdlXCJ9PlxuICAgICAgICAgICAgICAgIDxhIG9uTW91c2VVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5lbnRyeUNsaWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2xhc3NOYW1lPXtjdXJyZW50Q2xzfT57bmFtZU5vZGV9XG4gICAgICAgICAgICAgICAge3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHtvdmVybGF5c31cbiAgICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBmaWx0ZXJCYXNlbGF5ZXJzKGZpZWxkVmFsdWUpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLWJhc2VsYXllci1maWx0ZXItZmllbGRcIikudmFsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YmFzZWxheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZW50cnlDbGljayhpZCkge1xuICAgIHRoaXMucHJvcHMuYmFzZWxheWVyQ29udHJvbGxlci5zaG93QmFzZUxheWVyKGlkKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUFjdGl2ZUxheWVycyhpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudEJhc2VsYXllcjogaWR9KTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiQmFzZWxheWVyU3dpdGNoZXJcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJCYXNlbGF5ZXJTd2l0Y2hlclwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiQmFzZWxheWVyU3dpdGNoZXJcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBvdmVybGF5cyA9IHRoaXMucHJvcHMub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXM7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGpRdWVyeShcIiNjNGctb3ZlcmxheS10b2dnbGVfXCIgKyBpZHgpLnZhbCgpO1xuICAgICAgc2NvcGUucHJvcHMub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbaWR4XS5jaGFuZ2VPcGFjaXR5KHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1vdmVybGF5c1wifT5cbiAgICAgICAge292ZXJsYXlzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBlbnRyeSA9IDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8c3Bhbj57ZWxlbWVudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGlkID17XCJjNGctb3ZlcmxheS10b2dnbGVfXCIrIGluZGV4fSBjbGFzc05hbWU9e1wiYzRnLW92ZXJsYXktdG9nZ2xlXCJ9IHR5cGU9XCJyYW5nZVwiIG9uSW5wdXQ9eygpID0+IGNhbGxiYWNrKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgIG1pbj17MH0gbWF4PXsxMDB9IHN0ZXA9ezEwfSBkZWZhdWx0VmFsdWU9e2VsZW1lbnQub3BhY2l0eX0vPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+O1xuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzSTE4biIsIl9jNGdPdmVybGF5Q29udHJvbHMiLCJfYzRnTWFwc1V0aWxzIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJCYXNlbGF5ZXJTd2l0Y2hlciIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9CQVNFTEFZRVIiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwialF1ZXJ5Iiwib24iLCJldmVudCIsInN0YXRlIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImJhc2VsYXllclN3aXRjaGVyIiwiYmluZCIsImJhc2VsYXllckxvYWRlZCIsInByb3h5IiwiaG9va19iYXNlbGF5ZXJfbG9hZGVkIiwicHVzaCIsInNldFN0YXRlIiwiY3VycmVudEJhc2VsYXllciIsImFjdGl2ZUJhc2VsYXllcklkIiwiYmFzZWxheWVyRmlsdGVyIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0RmlsdGVyZWRCYXNlbGF5ZXJJZHMiLCJhcnJCYXNlbGF5ZXJzIiwiYmFzZWxheWVyQ29udHJvbGxlciIsImlkcyIsImJhc2VsYXllcklkcyIsInJldHVybklkcyIsImxlbmd0aCIsImJhc2VsYXllciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm92ZXJsYXlzIiwib3ZlcmxheUNvbnRyb2xsZXIiLCJhcnJPdmVybGF5cyIsIm92ZXJsYXlLZXlzIiwia2V5cyIsImoiLCJyZW5kZXIiLCJfdGhpczIiLCJiYXNlTGF5ZXJJZHMiLCJmaWx0ZXIiLCJiYXNlbGF5ZXJzd2l0Y2hlciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJmaWx0ZXJCYXNlbGF5ZXJzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhlYWRsaW5lIiwibGFiZWwiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsIm1hcCIsImN1cnJlbnRDbHMiLCJwcmV2aWV3IiwicHJldmlld19pbWFnZSIsInNyYyIsImFsdCIsIk92ZXJsYXlDb250cm9scyIsIm5hbWVOb2RlIiwib25Nb3VzZVVwIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlbnRyeUNsaWNrIiwiZmllbGRWYWx1ZSIsImZpbHRlclZhbHVlIiwidmFsIiwiaWQiLCJzaG93QmFzZUxheWVyIiwiY2hhbmdlQWN0aXZlTGF5ZXJzIiwic2V0T3BlbkNvbXBvbmVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJDb21wb25lbnQiLCJjYWxsYmFjayIsImlkeCIsImNoYW5nZU9wYWNpdHkiLCJlbnRyeSIsIm1pbiIsIm1heCIsInN0ZXAiLCJkZWZhdWx0VmFsdWUiLCJvcGFjaXR5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=