"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_c4g-popup-controller_js"],{

/***/ "./src/Resources/public/js/c4g-popup-controller.js":
/*!*********************************************************!*\
  !*** ./src/Resources/public/js/c4g-popup-controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gPopupController = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _c4gPopup = __webpack_require__(/*! ./c4g-popup */ "./src/Resources/public/js/c4g-popup.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gPopupController = exports.C4gPopupController = /*#__PURE__*/function () {
  function C4gPopupController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gPopupController);
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
    this.popupHandling = parseInt(this.mapData.popupHandling, 10);
    this.external = !!this.mapData.popupDiv;
    this.popups = [];
  }
  return (0, _createClass2["default"])(C4gPopupController, [{
    key: "addPopup",
    value: function addPopup() {
      var popupConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.popups.push(new _c4gPopup.C4gPopup(this));
      if (popupConfig) {
        this.popups[this.popups.length - 1].setContent(popupConfig);
      }
      if (this.mapData.caching) {
        _c4gMapsUtils.utils.storeValue('popupInfos', "");
      }
    } // end of "addPopUp()"
  }, {
    key: "setPopup",
    value: function setPopup(popupConfig) {
      if (!this.popups[0]) {
        this.popups.push(new _c4gPopup.C4gPopup(this));
      }
      this.popups[0].setContent(popupConfig);
    } // end of "setPopup()"
  }, {
    key: "removePopup",
    value: function removePopup() {
      if (this.popups[0] && this.popups[0].popup && this.popups[0].popup.getMap()) {
        this.mapData.map.removeOverlay(this.popups[0].popup);
      } else if (this.popups[0] && this.popups[0].popupComponent) {
        this.popups[0].popupComponent.close(true);
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/Resources/public/js/c4g-popup.js":
/*!**********************************************!*\
  !*** ./src/Resources/public/js/c4g-popup.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gPopup = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var _c4gPopupContainer = __webpack_require__(/*! ./components/c4g-popup-container */ "./src/Resources/public/js/components/c4g-popup-container.jsx");
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var C4gPopup = exports.C4gPopup = /*#__PURE__*/function () {
  function C4gPopup(popupController) {
    (0, _classCallCheck2["default"])(this, C4gPopup);
    var scope = this;
    this.popupController = popupController;
    var popUpElement = document.createElement('div');
    popUpElement.setAttribute('id', 'c4g_popup_' + popupController.mapData.mapId);
    popUpElement.className = 'c4g-popup-wrapper c4g-active';
    var popUpCloseElement = document.createElement('button');
    popUpCloseElement.className = 'c4g-popup-close c4g-icon';
    jQuery(popUpCloseElement).click(function (event) {
      event.preventDefault();
      popupController.mapController.map.removeOverlay(scope.popup);
    });
    var popUpContent = document.createElement('div');
    popUpContent.className = 'c4g-popup-content';
    popUpElement.appendChild(popUpCloseElement);
    popUpElement.appendChild(popUpContent);
    this.popupContent = popUpContent;
    if (popupController.popupHandling === 1 || popupController.popupHandling === 0) {
      var autoPan = popupController.popupHandling === 1;
      this.popup = new _ol.Overlay({
        element: popUpElement,
        positioning: 'center-center',
        //'bottom-left',
        offset: [0, 0],
        //-50, 0
        insertFirst: false,
        autoPan: autoPan,
        autoPanAnimation: {
          duration: 250
        },
        autoPanMargin: 200
      });
      popupController.mapController.map.addOverlay(this.popup);
    } else if (popupController.popupHandling === 2) {
      jQuery(popUpElement).addClass('c4g-popup-wrapper-nonose');
      var center = popupController.mapController.map.getView().getCenter();
      this.popup = new _ol.Overlay((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({
        position: center,
        positioning: 'center-center',
        element: popUpElement
      }, "positioning", 'center-center'), "offset", [-50, 0]), "autoPan", false));
      popupController.mapController.map.addOverlay(this.popup);
    } else if (popupController.popupHandling === 3) {
      var popupOptions = {
        open: true,
        alwaysExtended: false,
        //this.mapData.openDirectly,
        hideOther: popupController.mapController.hideOtherComponents,
        activeComps: popupController.mapController.getActiveComponents(),
        mapData: popupController.mapData,
        mapController: popupController.mapController
      };
      if (this.popupContainer) {
        _reactDom["default"].unmountComponentAtNode(this.popupContainer);
        delete popupController.mapController.components.popup;
        if (!popupController.external) {
          this.popupContainer.parentNode.removeChild(this.popupContainer);
        }
      }
      popupOptions.external = popupController.external;
      this.popupContainer = popupController.external ? document.querySelector("." + popupController.mapData.popupDiv) : document.createElement('div');
      if (!this.popupContainer) {
        this.popupContainer = document.createElement('div');
        popupOptions.external = false;
      }
      this.popupComponent = _reactDom["default"].render(/*#__PURE__*/React.createElement(_c4gPopupContainer.PopupContainer, popupOptions), this.popupContainer);
      if (!popupOptions.external) {
        popupController.mapController.$overlaycontainer_stopevent.append(this.popupContainer);
        popupController.mapController.hideOtherComponents(this.currentPopup);
      }
      this.currentPopup = this.popupComponent;
      // close open sideboards
      popupController.mapController.components.popup = this.popupComponent;
    }
  }
  return (0, _createClass2["default"])(C4gPopup, [{
    key: "setContent",
    value: function setContent(popupConfig) {
      var feature = popupConfig.feature;
      var layer = popupConfig.layer;
      var popupContent;
      var divPopup;
      if (feature.get('features')) {
        var features = feature.get('features');
        for (var i = 0; i < features.length; i++) {
          popupContent += _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.popupController.mapController.data.lang);
        }
      } else {
        popupContent = _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.popupController.mapController.data.lang);
      }
      divPopup = document.createElement('div');
      if (this.popupController.popupHandling < 3) {
        if (!this.popup.getMap()) {
          //popup not already in the map
          this.popupController.mapController.map.addOverlay(this.popup);
        }
        divPopup.innerHTML = popupContent;
        this.popupContent.innerHTML = '';
        this.popupContent.appendChild(divPopup);
        if (this.popupController.popupHandling < 2) {
          this.setPosition(feature.getGeometry());
        } else if (this.popupController.popupHandling == 2) {
          var center = this.popupController.mapController.map.getView().getCenter();
          this.setPosition(center);
        }
      } else {
        if (this.popupComponent) {
          var activeComps = this.popupController.mapController.getActiveComponents();
          if (!this.popupComponent.state.open) {
            this.popupComponent.open(activeComps);
          }
          this.popupComponent.setContent(popupContent);
        }
      }
      if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_appendPopup) === 'object') {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, {
          popup: popupConfig,
          content: popupContent,
          mapController: this.popupController.mapController,
          comp: this.popupComponent || null,
          div: divPopup
        });
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(geometry) {
      var map = this.popupController.mapController.map;
      var element = this.popup.getElement();
      var coordinates = null;
      if (geometry.getType() === 'Point') {
        coordinates = geometry.getCoordinates();
      } else {
        var extent = geometry.getExtent();
        coordinates = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
      }
      var center = map.getView().getCenter();
      var positioning = "";
      var offset = [0, 0];
      if (center[1] > coordinates[1]) {
        positioning += "bottom";
      } else {
        offset[1] = 10;
        positioning += "top";
      }
      if (center[0] > coordinates[0]) {
        offset[0] = -50;
        positioning += "-left";
      } else {
        offset[0] = 100;
        positioning += "-right";
      }
      jQuery(element).removeClass("nose-top-left").removeClass("nose-top-right").removeClass("nose-bottom-left").removeClass("nose-bottom-right");
      jQuery(element).addClass("nose-" + positioning);
      this.popup.setPositioning(positioning);
      this.popup.setOffset(offset);
      this.popup.setPosition(coordinates);
    }
  }]);
}();

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-popup-container.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-popup-container.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PopupContainer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var PopupContainer = exports.PopupContainer = /*#__PURE__*/function (_Component) {
  function PopupContainer(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, PopupContainer);
    _this = _callSuper(this, PopupContainer, [props]);
    _this.state = {
      content: "",
      open: props.open,
      detailsOpen: false,
      activeComps: props.activeComps,
      conststr: false
    };
    props.hideOther(_this);
    _this.routeButtons = "";
    _this.language = (0, _c4gMapsI18n.getLanguage)(_this.props.mapData);
    _this.close = _this.close.bind(_this);
    _this.toggleDetails = _this.toggleDetails.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(PopupContainer, _Component);
  return (0, _createClass2["default"])(PopupContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var detailBtnClass = "";
      var detailBtnCb = "";
      var className = this.props.external ? "c4g-popup-container " : "c4g-sideboard c4g-popup-container ";
      if (this.state.open) {
        className += "c4g-open ";
      } else {
        className += "c4g-close";
      }
      if (this.props.alwaysExtended) {
        className += " c4g-details-open";
      } else {
        if (this.state.detailsOpen) {
          className += " c4g-details-open";
        } else {
          className += " c4g-details-closed";
        }
      }
      var headerClass = "c4g-popup-header";
      var addButtons = /*#__PURE__*/_react["default"].createElement("div", null);
      if (this.state.conststr) {
        headerClass += " c4g-routing";
        addButtons = /*#__PURE__*/_react["default"].createElement(this.state.conststr, {
          config: this.state.config
        });
      }
      if (this.state.content) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-popup-wrapper"
        }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
        }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
          wrapperClass: headerClass,
          headerClass: "c4g-popup-header-headline",
          header: this.props.mapData.popupHeadline || "",
          closeBtnClass: "c4g-titlebar-close",
          closeBtnCb: function closeBtnCb() {
            _this2.close(true);
          },
          closeBtnTitle: this.language.CLOSE,
          detailBtnClass: "",
          detailBtnCb: ""
        }, addButtons)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-popup-content",
          dangerouslySetInnerHTML: {
            __html: this.state.content
          }
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "setAddButtons",
    value: function setAddButtons(conststr, config) {
      this.setState({
        config: config,
        conststr: conststr
      });
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.setState({
        content: content
      });
    }
  }, {
    key: "open",
    value: function open(activeComps) {
      if (!this.props.external) {
        this.props.hideOther();
      }
      this.setState({
        open: true,
        activeComps: activeComps
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _boolean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.props.mapData.caching) {
        _c4gMapsUtils.utils.storeValue('popupInfos', "");
      }
      if (_boolean && this.state.activeComps) {
        for (var i in this.state.activeComps) {
          if (this.state.activeComps.hasOwnProperty(i)) {
            var comp = this.state.activeComps[i];
            comp.setState({
              open: true
            });
          }
        }
      }
      var newState = {
        open: false,
        content: this.props.external ? "" : this.state.content
      };
      this.setState(newState);
    }
  }, {
    key: "toggleDetails",
    value: function toggleDetails() {
      this.setState({
        detailsOpen: !this.state.detailsOpen
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open && !this.state.open && this.props.mapData.caching) {
        _c4gMapsUtils.utils.storeValue('popupInfos', "");
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFhYUUsa0JBQWtCLEdBQUFDLDBCQUFBO0VBRTdCLFNBQUFELG1CQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUgsa0JBQUE7SUFDakIsSUFBSSxDQUFDSSxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csT0FBTyxDQUFDRCxhQUFhO0lBQ2hELElBQUksQ0FBQ0UsT0FBTyxHQUFHSixLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDRyxJQUFJO0lBQy9DLElBQUksQ0FBQ0MsYUFBYSxHQUFHQyxRQUFRLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNFLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxRQUFRO0lBQ3ZDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDbEI7RUFBQyxXQUFBQyxhQUFBLGFBQUFiLGtCQUFBO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLFFBQVFBLENBQUEsRUFBcUI7TUFBQSxJQUFwQkMsV0FBVyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO01BQ3pCLElBQUksQ0FBQ04sTUFBTSxDQUFDUyxJQUFJLENBQUMsSUFBSUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNwQyxJQUFJTCxXQUFXLEVBQUU7UUFDZixJQUFJLENBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUNBLE1BQU0sQ0FB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Zy1wb3B1cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXBvcHVwLWNvbnRhaW5lci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCB7QzRnUG9wdXB9IGZyb20gJy4vYzRnLXBvcHVwJztcbmltcG9ydCB7dXRpbHN9IGZyb20gJy4vYzRnLW1hcHMtdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cENvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByb3h5KSB7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMubWFwRGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIHRoaXMucG9wdXBIYW5kbGluZyA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCk7XG4gICAgdGhpcy5leHRlcm5hbCA9ICEhdGhpcy5tYXBEYXRhLnBvcHVwRGl2O1xuICAgIHRoaXMucG9wdXBzID0gW107XG4gIH1cblxuICBhZGRQb3B1cChwb3B1cENvbmZpZyA9IG51bGwpIHtcbiAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgaWYgKHBvcHVwQ29uZmlnKSB7XG4gICAgICB0aGlzLnBvcHVwc1t0aGlzLnBvcHVwcy5sZW5ndGggLTFdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gIH0gLy8gZW5kIG9mIFwiYWRkUG9wVXAoKVwiXG4gIHNldFBvcHVwKHBvcHVwQ29uZmlnKSB7XG4gICAgaWYgKCF0aGlzLnBvcHVwc1swXSkge1xuICAgICAgdGhpcy5wb3B1cHMucHVzaChuZXcgQzRnUG9wdXAodGhpcykpO1xuICAgIH1cbiAgICB0aGlzLnBvcHVwc1swXS5zZXRDb250ZW50KHBvcHVwQ29uZmlnKTtcbiAgfSAvLyBlbmQgb2YgXCJzZXRQb3B1cCgpXCJcbiAgcmVtb3ZlUG9wdXAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBzWzBdICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwLmdldE1hcCgpKSB7XG4gICAgICB0aGlzLm1hcERhdGEubWFwLnJlbW92ZU92ZXJsYXkodGhpcy5wb3B1cHNbMF0ucG9wdXApO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBvcHVwc1swXSAmJiB0aGlzLnBvcHVwc1swXS5wb3B1cENvbXBvbmVudCkge1xuICAgICAgdGhpcy5wb3B1cHNbMF0ucG9wdXBDb21wb25lbnQuY2xvc2UodHJ1ZSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtPdmVybGF5fSBmcm9tICdvbCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjbGFzcyBDNGdQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIgPSBwb3B1cENvbnRyb2xsZXI7XG4gICAgICAgIGxldCBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYzRnX3BvcHVwXycgKyBwb3B1cENvbnRyb2xsZXIubWFwRGF0YS5tYXBJZCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLXdyYXBwZXIgYzRnLWFjdGl2ZSc7XG5cbiAgICAgICAgbGV0IHBvcFVwQ2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY2xvc2UgYzRnLWljb24nO1xuXG4gICAgICAgIGpRdWVyeShwb3BVcENsb3NlRWxlbWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZU92ZXJsYXkoc2NvcGUucG9wdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQ29udGVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLWNvbnRlbnQnO1xuXG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENsb3NlRWxlbWVudCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xuICAgICAgICB0aGlzLnBvcHVwQ29udGVudCA9IHBvcFVwQ29udGVudDtcbiAgICAgICAgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxIHx8IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgYXV0b1BhbiA9IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdjZW50ZXItY2VudGVyJywvLydib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbMCwgMF0sIC8vLTUwLCAwXG4gICAgICAgICAgICAgICAgaW5zZXJ0Rmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QYW46IGF1dG9QYW4sXG4gICAgICAgICAgICAgICAgYXV0b1BhbkFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuTWFyZ2luOiAyMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDIpIHtcbiAgICAgICAgICAgIGpRdWVyeShwb3BVcEVsZW1lbnQpLmFkZENsYXNzKCdjNGctcG9wdXAtd3JhcHBlci1ub25vc2UnKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2VudGVyLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHdheXNFeHRlbmRlZDogZmFsc2UsLy90aGlzLm1hcERhdGEub3BlbkRpcmVjdGx5LFxuICAgICAgICAgICAgICAgIGhpZGVPdGhlcjogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21wczogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZ2V0QWN0aXZlQ29tcG9uZW50cygpLFxuICAgICAgICAgICAgICAgIG1hcERhdGE6IHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLFxuICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wb3B1cENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmNvbXBvbmVudHMucG9wdXA7XG4gICAgICAgICAgICAgICAgaWYgKCFwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IHBvcHVwQ29udHJvbGxlci5leHRlcm5hbDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcG9wdXBDb250cm9sbGVyLm1hcERhdGEucG9wdXBEaXYpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBPcHRpb25zLmV4dGVybmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDb250YWluZXIsIHBvcHVwT3B0aW9ucyksIHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cE9wdGlvbnMuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQuYXBwZW5kKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcy5jdXJyZW50UG9wdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9wdXAgPSB0aGlzLnBvcHVwQ29tcG9uZW50O1xuICAgICAgICAgICAgLy8gY2xvc2Ugb3BlbiBzaWRlYm9hcmRzXG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRDb250ZW50IChwb3B1cENvbmZpZykge1xuICAgICAgICBsZXQgZmVhdHVyZSA9IHBvcHVwQ29uZmlnLmZlYXR1cmU7XG4gICAgICAgIGxldCBsYXllciA9IHBvcHVwQ29uZmlnLmxheWVyO1xuICAgICAgICBsZXQgcG9wdXBDb250ZW50O1xuICAgICAgICBsZXQgZGl2UG9wdXA7XG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSkge1xuICAgICAgICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250ZW50ICs9IHV0aWxzLnJlcGxhY2VBbGxQbGFjZWhvbGRlcnMocG9wdXBDb25maWcucG9wdXAuY29udGVudCwgZmVhdHVyZXNbaV0sIGxheWVyLCB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmRhdGEubGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3B1cENvbnRlbnQgPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmUsIGxheWVyLCB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmRhdGEubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZGl2UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXAuZ2V0TWFwKCkpIHsgLy9wb3B1cCBub3QgYWxyZWFkeSBpbiB0aGUgbWFwXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuYWRkT3ZlcmxheSh0aGlzLnBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHBvcHVwQ29udGVudDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UG9wdXApO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPCAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvbXBzID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5nZXRBY3RpdmVDb21wb25lbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29tcG9uZW50LnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKGFjdGl2ZUNvbXBzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50LnNldENvbnRlbnQocG9wdXBDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCwge1xuICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cENvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBwb3B1cENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBjb21wOiB0aGlzLnBvcHVwQ29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgICAgICAgICAgZGl2OiBkaXZQb3B1cFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UG9zaXRpb24gKGdlb21ldHJ5KSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvcHVwLmdldEVsZW1lbnQoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgaWYgKGdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV4dGVudCA9IGdlb21ldHJ5LmdldEV4dGVudCgpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbKGV4dGVudFswXSArIGV4dGVudFsyXSkgLyAyLCAoZXh0ZW50WzFdICsgZXh0ZW50WzNdKSAvIDIsXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2VudGVyID0gbWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IG9mZnNldCA9IFswLDBdO1xuICAgICAgICBpZiAoY2VudGVyWzFdID4gY29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiYm90dG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMV0gPSAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbnRlclswXSA+IGNvb3JkaW5hdGVzWzBdKSB7XG4gICAgICAgICAgICBvZmZzZXRbMF0gPSAtNTA7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcIi1sZWZ0XCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldFswXSA9IDEwMDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiLXJpZ2h0XCJcbiAgICAgICAgfVxuICAgICAgICBqUXVlcnkoZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJub3NlLXRvcC1sZWZ0XCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJub3NlLXRvcC1yaWdodFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibm9zZS1ib3R0b20tbGVmdFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibm9zZS1ib3R0b20tcmlnaHRcIik7XG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhcIm5vc2UtXCIgKyBwb3NpdGlvbmluZylcbiAgICAgICAgdGhpcy5wb3B1cC5zZXRQb3NpdGlvbmluZyhwb3NpdGlvbmluZyk7XG4gICAgICAgIHRoaXMucG9wdXAuc2V0T2Zmc2V0KG9mZnNldCk7XG4gICAgICAgIHRoaXMucG9wdXAuc2V0UG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuXG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gJy4vLi4vYzRnLW1hcHMtdXRpbHMnXG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbixcbiAgICAgIGRldGFpbHNPcGVuOiBmYWxzZSxcbiAgICAgIGFjdGl2ZUNvbXBzOiBwcm9wcy5hY3RpdmVDb21wcyxcbiAgICAgIGNvbnN0c3RyOiBmYWxzZVxuICAgIH07XG4gICAgcHJvcHMuaGlkZU90aGVyKHRoaXMpO1xuICAgIHRoaXMucm91dGVCdXR0b25zID0gXCJcIjtcbiAgICB0aGlzLmxhbmd1YWdlID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBEYXRhKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRGV0YWlscyA9IHRoaXMudG9nZ2xlRGV0YWlscy5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2IgPSBcIlwiO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4dGVybmFsID8gXCJjNGctcG9wdXAtY29udGFpbmVyIFwiIDogXCJjNGctc2lkZWJvYXJkIGM0Zy1wb3B1cC1jb250YWluZXIgXCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCJjNGctb3BlbiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFsd2F5c0V4dGVuZGVkKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzT3Blbikge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLWNsb3NlZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGVhZGVyQ2xhc3MgPSBcImM0Zy1wb3B1cC1oZWFkZXJcIjtcbiAgICBsZXQgYWRkQnV0dG9ucyA9IDxkaXYvPjtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25zdHN0cikge1xuICAgICAgaGVhZGVyQ2xhc3MgKz0gXCIgYzRnLXJvdXRpbmdcIjtcbiAgICAgIGFkZEJ1dHRvbnMgPSA8dGhpcy5zdGF0ZS5jb25zdHN0ciBjb25maWc9e3RoaXMuc3RhdGUuY29uZmlnfS8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0+XG4gICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtoZWFkZXJDbGFzc30gaGVhZGVyQ2xhc3M9e1wiYzRnLXBvcHVwLWhlYWRlci1oZWFkbGluZVwifSBoZWFkZXI9e3RoaXMucHJvcHMubWFwRGF0YS5wb3B1cEhlYWRsaW5lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9eygpID0+IHt0aGlzLmNsb3NlKHRydWUpfX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5ndWFnZS5DTE9TRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiXCJ9IGRldGFpbEJ0bkNiPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgIHthZGRCdXR0b25zfVxuICAgICAgICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmNvbnRlbnR9fS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzZXRBZGRCdXR0b25zKGNvbnN0c3RyLCBjb25maWcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY29uc3RzdHI6IGNvbnN0c3RyXG4gICAgfSk7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb250ZW50OiBjb250ZW50fSk7XG4gIH1cblxuICBvcGVuKGFjdGl2ZUNvbXBzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVPdGhlcigpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBhY3RpdmVDb21wczogYWN0aXZlQ29tcHNcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcERhdGEuY2FjaGluZykge1xuICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncG9wdXBJbmZvcycsIFwiXCIpO1xuICAgIH1cbiAgICBpZiAoYm9vbGVhbiAmJiB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYWN0aXZlQ29tcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlQ29tcHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuc3RhdGUuYWN0aXZlQ29tcHNbaV07XG4gICAgICAgICAgY29tcC5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgY29udGVudDogdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiXCI6IHRoaXMuc3RhdGUuY29udGVudFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICB0b2dnbGVEZXRhaWxzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHNPcGVuOiAhdGhpcy5zdGF0ZS5kZXRhaWxzT3Blbn0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnByb3BzLm1hcERhdGEuY2FjaGluZykge1xuICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncG9wdXBJbmZvcycsIFwiXCIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9jNGdQb3B1cCIsInJlcXVpcmUiLCJfYzRnTWFwc1V0aWxzIiwiQzRnUG9wdXBDb250cm9sbGVyIiwiZXhwb3J0cyIsInByb3h5IiwiX2NsYXNzQ2FsbENoZWNrMiIsIm1hcENvbnRyb2xsZXIiLCJvcHRpb25zIiwibWFwRGF0YSIsImRhdGEiLCJwb3B1cEhhbmRsaW5nIiwicGFyc2VJbnQiLCJleHRlcm5hbCIsInBvcHVwRGl2IiwicG9wdXBzIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiYWRkUG9wdXAiLCJwb3B1cENvbmZpZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInB1c2giLCJDNGdQb3B1cCIsInNldENvbnRlbnQiLCJjYWNoaW5nIiwidXRpbHMiLCJzdG9yZVZhbHVlIiwic2V0UG9wdXAiLCJyZW1vdmVQb3B1cCIsInBvcHVwIiwiZ2V0TWFwIiwibWFwIiwicmVtb3ZlT3ZlcmxheSIsInBvcHVwQ29tcG9uZW50IiwiY2xvc2UiLCJfb2wiLCJfcmVhY3REb20iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2M0Z1BvcHVwQ29udGFpbmVyIiwiUmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZjMiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJwb3B1cENvbnRyb2xsZXIiLCJzY29wZSIsInBvcFVwRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm1hcElkIiwiY2xhc3NOYW1lIiwicG9wVXBDbG9zZUVsZW1lbnQiLCJqUXVlcnkiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3BVcENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBvcHVwQ29udGVudCIsImF1dG9QYW4iLCJPdmVybGF5IiwiZWxlbWVudCIsInBvc2l0aW9uaW5nIiwib2Zmc2V0IiwiaW5zZXJ0Rmlyc3QiLCJhdXRvUGFuQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJhdXRvUGFuTWFyZ2luIiwiYWRkT3ZlcmxheSIsImFkZENsYXNzIiwiY2VudGVyIiwiZ2V0VmlldyIsImdldENlbnRlciIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJwb3NpdGlvbiIsInBvcHVwT3B0aW9ucyIsIm9wZW4iLCJhbHdheXNFeHRlbmRlZCIsImhpZGVPdGhlciIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJhY3RpdmVDb21wcyIsImdldEFjdGl2ZUNvbXBvbmVudHMiLCJwb3B1cENvbnRhaW5lciIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImNvbXBvbmVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyIiwiUG9wdXBDb250YWluZXIiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhcHBlbmQiLCJjdXJyZW50UG9wdXAiLCJmZWF0dXJlIiwibGF5ZXIiLCJkaXZQb3B1cCIsImZlYXR1cmVzIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsImNvbnRlbnQiLCJsYW5nIiwiaW5uZXJIVE1MIiwic2V0UG9zaXRpb24iLCJnZXRHZW9tZXRyeSIsInN0YXRlIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiX3R5cGVvZjIiLCJwcm94eV9hcHBlbmRQb3B1cCIsImNhbGxIb29rRnVuY3Rpb25zIiwiY29tcCIsImRpdiIsImdlb21ldHJ5IiwiZ2V0RWxlbWVudCIsImNvb3JkaW5hdGVzIiwiZ2V0VHlwZSIsImdldENvb3JkaW5hdGVzIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwicmVtb3ZlQ2xhc3MiLCJzZXRQb3NpdGlvbmluZyIsInNldE9mZnNldCIsIl9yZWFjdCIsIl9jNGdNYXBzSTE4biIsIl90eXBlb2YiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpdGxlYmFyIiwibGF6eSIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiZGV0YWlsc09wZW4iLCJjb25zdHN0ciIsInJvdXRlQnV0dG9ucyIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJiaW5kIiwidG9nZ2xlRGV0YWlscyIsIl9pbmhlcml0czIiLCJfdGhpczIiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiaGVhZGVyQ2xhc3MiLCJhZGRCdXR0b25zIiwiY29uZmlnIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlciIsInBvcHVwSGVhZGxpbmUiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic2V0QWRkQnV0dG9ucyIsInNldFN0YXRlIiwiYm9vbGVhbiIsIm5ld1N0YXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9