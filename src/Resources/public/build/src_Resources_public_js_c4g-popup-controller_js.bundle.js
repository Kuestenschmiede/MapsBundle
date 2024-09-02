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
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var _c4gPopupContainer = __webpack_require__(/*! ./components/c4g-popup-container */ "./src/Resources/public/js/components/c4g-popup-container.jsx");
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
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
        offset: [-50, 50],
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
      this.popup = new _ol.Overlay({
        position: center,
        positioning: 'center-center',
        element: popUpElement,
        offset: [-50, 0],
        autoPan: false
      });
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
          if (feature.getGeometry()) {
            geometry = feature.getGeometry();
            this.setPosition(geometry);
          } else {
            //ToDO load feature coordinates for geometry
          }
        } else if (this.popupController.popupHandling == 2) {
          var center = this.popupController.mapController.map.getView().getCenter();
          var _geometry = new _geom.Point(center);
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
      if (geometry && geometry.getType() === 'Point') {
        coordinates = geometry.getCoordinates();
      } else if (geometry) {
        var extent = geometry.getExtent();
        coordinates = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
      } else {
        coordinates = map.getView().getCenter();
      }
      var center = map.getView().getCenter();
      var positioning = "";
      var offset = [0, 0];
      if (center[1] >= coordinates[1]) {
        positioning += "bottom";
      } else {
        offset[1] = 10;
        positioning += "top";
      }
      if (center[0] >= coordinates[0]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFhYUUsa0JBQWtCLEdBQUFDLDBCQUFBO0VBRTdCLFNBQUFELG1CQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUgsa0JBQUE7SUFDakIsSUFBSSxDQUFDSSxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csT0FBTyxDQUFDRCxhQUFhO0lBQ2hELElBQUksQ0FBQ0UsT0FBTyxHQUFHSixLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDRyxJQUFJO0lBQy9DLElBQUksQ0FBQ0MsYUFBYSxHQUFHQyxRQUFRLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNFLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxRQUFRO0lBQ3ZDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDbEI7RUFBQyxXQUFBQyxhQUFBLGFBQUFiLGtCQUFBO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLFFBQVFBLENBQUEsRUFBcUI7TUFBQSxJQUFwQkMsV0FBVyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO01BQ3pCLElBQUksQ0FBQ04sTUFBTSxDQUFDUyxJQUFJLENBQUMsSUFBSUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNwQyxJQUFJTCxXQUFXLEVBQUU7UUFDZixJQUFJLENBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUNBLE1BQU0sQ0FB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TUFDakQsSUFBSUQsU0FBUyxDQUFDbEcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDOEIsS0FBSyxDQUFDOUIsSUFBSSxJQUFJLElBQUksQ0FBQ2lFLEtBQUssQ0FBQ3pKLE9BQU8sQ0FBQ2tCLE9BQU8sRUFBRTtRQUNwRUMsbUJBQUssQ0FBQ0MsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7TUFDcEM7SUFDRjtFQUFDO0FBQUEsRUFsSGlDd0ssZ0JBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXBvcHVwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1wb3B1cC5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IHtDNGdQb3B1cH0gZnJvbSAnLi9jNGctcG9wdXAnO1xuaW1wb3J0IHt1dGlsc30gZnJvbSAnLi9jNGctbWFwcy11dGlscydcblxuZXhwb3J0IGNsYXNzIEM0Z1BvcHVwQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IocHJveHkpIHtcbiAgICB0aGlzLm1hcENvbnRyb2xsZXIgPSBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5tYXBEYXRhID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGE7XG4gICAgdGhpcy5wb3B1cEhhbmRsaW5nID0gcGFyc2VJbnQodGhpcy5tYXBEYXRhLnBvcHVwSGFuZGxpbmcsIDEwKTtcbiAgICB0aGlzLmV4dGVybmFsID0gISF0aGlzLm1hcERhdGEucG9wdXBEaXY7XG4gICAgdGhpcy5wb3B1cHMgPSBbXTtcbiAgfVxuXG4gIGFkZFBvcHVwKHBvcHVwQ29uZmlnID0gbnVsbCkge1xuICAgIHRoaXMucG9wdXBzLnB1c2gobmV3IEM0Z1BvcHVwKHRoaXMpKTtcbiAgICBpZiAocG9wdXBDb25maWcpIHtcbiAgICAgIHRoaXMucG9wdXBzW3RoaXMucG9wdXBzLmxlbmd0aCAtMV0uc2V0Q29udGVudChwb3B1cENvbmZpZyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcERhdGEuY2FjaGluZykge1xuICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncG9wdXBJbmZvcycsIFwiXCIpO1xuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJhZGRQb3BVcCgpXCJcbiAgc2V0UG9wdXAocG9wdXBDb25maWcpIHtcbiAgICBpZiAoIXRoaXMucG9wdXBzWzBdKSB7XG4gICAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgfVxuICAgIHRoaXMucG9wdXBzWzBdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICB9IC8vIGVuZCBvZiBcInNldFBvcHVwKClcIlxuICByZW1vdmVQb3B1cCgpIHtcbiAgICBpZiAodGhpcy5wb3B1cHNbMF0gJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAgJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAuZ2V0TWFwKCkpIHtcbiAgICAgIHRoaXMubWFwRGF0YS5tYXAucmVtb3ZlT3ZlcmxheSh0aGlzLnBvcHVwc1swXS5wb3B1cCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucG9wdXBzWzBdICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnBvcHVwc1swXS5wb3B1cENvbXBvbmVudC5jbG9zZSh0cnVlKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQge092ZXJsYXl9IGZyb20gJ29sJztcbmltcG9ydCB7dXRpbHN9IGZyb20gJy4vYzRnLW1hcHMtdXRpbHMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1BvcHVwQ29udGFpbmVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmV4cG9ydCBjbGFzcyBDNGdQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIgPSBwb3B1cENvbnRyb2xsZXI7XG4gICAgICAgIGxldCBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYzRnX3BvcHVwXycgKyBwb3B1cENvbnRyb2xsZXIubWFwRGF0YS5tYXBJZCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLXdyYXBwZXIgYzRnLWFjdGl2ZSc7XG5cbiAgICAgICAgbGV0IHBvcFVwQ2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY2xvc2UgYzRnLWljb24nO1xuXG4gICAgICAgIGpRdWVyeShwb3BVcENsb3NlRWxlbWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZU92ZXJsYXkoc2NvcGUucG9wdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQ29udGVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLWNvbnRlbnQnO1xuXG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENsb3NlRWxlbWVudCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xuICAgICAgICB0aGlzLnBvcHVwQ29udGVudCA9IHBvcFVwQ29udGVudDtcbiAgICAgICAgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxIHx8IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgYXV0b1BhbiA9IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdjZW50ZXItY2VudGVyJywvLydib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCA1MF0sIC8vLTUwLCAwXG4gICAgICAgICAgICAgICAgaW5zZXJ0Rmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QYW46IGF1dG9QYW4sXG4gICAgICAgICAgICAgICAgYXV0b1BhbkFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuTWFyZ2luOiAyMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDIpIHtcbiAgICAgICAgICAgIGpRdWVyeShwb3BVcEVsZW1lbnQpLmFkZENsYXNzKCdjNGctcG9wdXAtd3JhcHBlci1ub25vc2UnKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2VudGVyLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgICAgICAgIG9mZnNldDogWy01MCwgMF0sXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5hZGRPdmVybGF5KHRoaXMucG9wdXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgcG9wdXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgYWx3YXlzRXh0ZW5kZWQ6IGZhbHNlLC8vdGhpcy5tYXBEYXRhLm9wZW5EaXJlY3RseSxcbiAgICAgICAgICAgICAgICBoaWRlT3RoZXI6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29tcHM6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmdldEFjdGl2ZUNvbXBvbmVudHMoKSxcbiAgICAgICAgICAgICAgICBtYXBEYXRhOiBwb3B1cENvbnRyb2xsZXIubWFwRGF0YSxcbiAgICAgICAgICAgICAgICBtYXBDb250cm9sbGVyOiBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwO1xuICAgICAgICAgICAgICAgIGlmICghcG9wdXBDb250cm9sbGVyLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cE9wdGlvbnMuZXh0ZXJuYWwgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWw7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gcG9wdXBDb250cm9sbGVyLmV4dGVybmFsID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLnBvcHVwRGl2KSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwQ29udGFpbmVyLCBwb3B1cE9wdGlvbnMpLCB0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmICghcG9wdXBPcHRpb25zLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LmFwcGVuZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMuY3VycmVudFBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgICAgIC8vIGNsb3NlIG9wZW4gc2lkZWJvYXJkc1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuY29tcG9uZW50cy5wb3B1cCA9IHRoaXMucG9wdXBDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Q29udGVudCAocG9wdXBDb25maWcpIHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBwb3B1cENvbmZpZy5mZWF0dXJlO1xuICAgICAgICBsZXQgbGF5ZXIgPSBwb3B1cENvbmZpZy5sYXllcjtcbiAgICAgICAgbGV0IHBvcHVwQ29udGVudDtcbiAgICAgICAgbGV0IGRpdlBvcHVwO1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudCArPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmVzW2ldLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGRpdlBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwLmdldE1hcCgpKSB7IC8vcG9wdXAgbm90IGFscmVhZHkgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQb3B1cC5pbm5lckhUTUwgPSBwb3B1cENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMikge1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVG9ETyBsb2FkIGZlYXR1cmUgY29vcmRpbmF0ZXMgZm9yIGdlb21ldHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQb2ludChjZW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvbXBzID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5nZXRBY3RpdmVDb21wb25lbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29tcG9uZW50LnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKGFjdGl2ZUNvbXBzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50LnNldENvbnRlbnQocG9wdXBDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCwge1xuICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cENvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBwb3B1cENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBjb21wOiB0aGlzLnBvcHVwQ29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgICAgICAgICAgZGl2OiBkaXZQb3B1cFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UG9zaXRpb24gKGdlb21ldHJ5KSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvcHVwLmdldEVsZW1lbnQoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdlb21ldHJ5KSB7XG4gICAgICAgICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMixdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjZW50ZXIgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgcG9zaXRpb25pbmcgPSBcIlwiO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gWzAsMF07XG4gICAgICAgIGlmIChjZW50ZXJbMV0gPj0gY29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiYm90dG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMV0gPSAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbnRlclswXSA+PSBjb29yZGluYXRlc1swXSkge1xuICAgICAgICAgICAgb2Zmc2V0WzBdID0gLTUwO1xuICAgICAgICAgICAgcG9zaXRpb25pbmcgKz0gXCItbGVmdFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMF0gPSAxMDA7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcIi1yaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtbGVmdFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtcmlnaHRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLWxlZnRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLXJpZ2h0XCIpO1xuICAgICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoXCJub3NlLVwiICsgcG9zaXRpb25pbmcpXG4gICAgICAgIHRoaXMucG9wdXAuc2V0UG9zaXRpb25pbmcocG9zaXRpb25pbmcpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldE9mZnNldChvZmZzZXQpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldFBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuLy4uL2M0Zy1tYXBzLXV0aWxzJ1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4sXG4gICAgICBkZXRhaWxzT3BlbjogZmFsc2UsXG4gICAgICBhY3RpdmVDb21wczogcHJvcHMuYWN0aXZlQ29tcHMsXG4gICAgICBjb25zdHN0cjogZmFsc2VcbiAgICB9O1xuICAgIHByb3BzLmhpZGVPdGhlcih0aGlzKTtcbiAgICB0aGlzLnJvdXRlQnV0dG9ucyA9IFwiXCI7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwRGF0YSk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZURldGFpbHMgPSB0aGlzLnRvZ2dsZURldGFpbHMuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiYzRnLXBvcHVwLWNvbnRhaW5lciBcIiA6IFwiYzRnLXNpZGVib2FyZCBjNGctcG9wdXAtY29udGFpbmVyIFwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLW9wZW4gXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hbHdheXNFeHRlbmRlZCkge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlsc09wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1jbG9zZWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhlYWRlckNsYXNzID0gXCJjNGctcG9wdXAtaGVhZGVyXCI7XG4gICAgbGV0IGFkZEJ1dHRvbnMgPSA8ZGl2Lz47XG4gICAgaWYgKHRoaXMuc3RhdGUuY29uc3RzdHIpIHtcbiAgICAgIGhlYWRlckNsYXNzICs9IFwiIGM0Zy1yb3V0aW5nXCI7XG4gICAgICBhZGRCdXR0b25zID0gPHRoaXMuc3RhdGUuY29uc3RzdHIgY29uZmlnPXt0aGlzLnN0YXRlLmNvbmZpZ30vPjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC13cmFwcGVyXCJ9PlxuICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17aGVhZGVyQ2xhc3N9IGhlYWRlckNsYXNzPXtcImM0Zy1wb3B1cC1oZWFkZXItaGVhZGxpbmVcIn0gaGVhZGVyPXt0aGlzLnByb3BzLm1hcERhdGEucG9wdXBIZWFkbGluZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXsoKSA9PiB7dGhpcy5jbG9zZSh0cnVlKX19IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ3VhZ2UuQ0xPU0V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0+XG4gICAgICAgICAgICAgICAgICB7YWRkQnV0dG9uc31cbiAgICAgICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcG9wdXAtY29udGVudFwifSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5zdGF0ZS5jb250ZW50fX0vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0QWRkQnV0dG9ucyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogY29udGVudH0pO1xuICB9XG5cbiAgb3BlbihhY3RpdmVDb21wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5leHRlcm5hbCkge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlT3RoZXIoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYWN0aXZlQ29tcHM6IGFjdGl2ZUNvbXBzXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZShib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gICAgaWYgKGJvb2xlYW4gJiYgdGhpcy5zdGF0ZS5hY3RpdmVDb21wcykge1xuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzW2ldO1xuICAgICAgICAgIGNvbXAuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuZXh0ZXJuYWwgPyBcIlwiOiB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgdG9nZ2xlRGV0YWlscygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzT3BlbjogIXRoaXMuc3RhdGUuZGV0YWlsc09wZW59KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5wcm9wcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfYzRnUG9wdXAiLCJyZXF1aXJlIiwiX2M0Z01hcHNVdGlscyIsIkM0Z1BvcHVwQ29udHJvbGxlciIsImV4cG9ydHMiLCJwcm94eSIsIl9jbGFzc0NhbGxDaGVjazIiLCJtYXBDb250cm9sbGVyIiwib3B0aW9ucyIsIm1hcERhdGEiLCJkYXRhIiwicG9wdXBIYW5kbGluZyIsInBhcnNlSW50IiwiZXh0ZXJuYWwiLCJwb3B1cERpdiIsInBvcHVwcyIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImFkZFBvcHVwIiwicG9wdXBDb25maWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQzRnUG9wdXAiLCJzZXRDb250ZW50IiwiY2FjaGluZyIsInV0aWxzIiwic3RvcmVWYWx1ZSIsInNldFBvcHVwIiwicmVtb3ZlUG9wdXAiLCJwb3B1cCIsImdldE1hcCIsIm1hcCIsInJlbW92ZU92ZXJsYXkiLCJwb3B1cENvbXBvbmVudCIsImNsb3NlIiwiX29sIiwiX3JlYWN0RG9tIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jNGdQb3B1cENvbnRhaW5lciIsIlJlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfZ2VvbSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZjMiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJwb3B1cENvbnRyb2xsZXIiLCJzY29wZSIsInBvcFVwRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm1hcElkIiwiY2xhc3NOYW1lIiwicG9wVXBDbG9zZUVsZW1lbnQiLCJqUXVlcnkiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3BVcENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBvcHVwQ29udGVudCIsImF1dG9QYW4iLCJPdmVybGF5IiwiZWxlbWVudCIsInBvc2l0aW9uaW5nIiwib2Zmc2V0IiwiaW5zZXJ0Rmlyc3QiLCJhdXRvUGFuQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJhdXRvUGFuTWFyZ2luIiwiYWRkT3ZlcmxheSIsImFkZENsYXNzIiwiY2VudGVyIiwiZ2V0VmlldyIsImdldENlbnRlciIsInBvc2l0aW9uIiwicG9wdXBPcHRpb25zIiwib3BlbiIsImFsd2F5c0V4dGVuZGVkIiwiaGlkZU90aGVyIiwiaGlkZU90aGVyQ29tcG9uZW50cyIsImFjdGl2ZUNvbXBzIiwiZ2V0QWN0aXZlQ29tcG9uZW50cyIsInBvcHVwQ29udGFpbmVyIiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiY29tcG9uZW50cyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJQb3B1cENvbnRhaW5lciIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsImFwcGVuZCIsImN1cnJlbnRQb3B1cCIsImZlYXR1cmUiLCJsYXllciIsImRpdlBvcHVwIiwiZmVhdHVyZXMiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwiY29udGVudCIsImxhbmciLCJpbm5lckhUTUwiLCJnZXRHZW9tZXRyeSIsImdlb21ldHJ5Iiwic2V0UG9zaXRpb24iLCJQb2ludCIsInN0YXRlIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiX3R5cGVvZjIiLCJwcm94eV9hcHBlbmRQb3B1cCIsImNhbGxIb29rRnVuY3Rpb25zIiwiY29tcCIsImRpdiIsImdldEVsZW1lbnQiLCJjb29yZGluYXRlcyIsImdldFR5cGUiLCJnZXRDb29yZGluYXRlcyIsImV4dGVudCIsImdldEV4dGVudCIsInJlbW92ZUNsYXNzIiwic2V0UG9zaXRpb25pbmciLCJzZXRPZmZzZXQiLCJfcmVhY3QiLCJfYzRnTWFwc0kxOG4iLCJfdHlwZW9mIiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsImxhenkiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsImRldGFpbHNPcGVuIiwiY29uc3RzdHIiLCJyb3V0ZUJ1dHRvbnMiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiYmluZCIsInRvZ2dsZURldGFpbHMiLCJfaW5oZXJpdHMyIiwiX3RoaXMyIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImhlYWRlckNsYXNzIiwiYWRkQnV0dG9ucyIsImNvbmZpZyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXIiLCJwb3B1cEhlYWRsaW5lIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInNldEFkZEJ1dHRvbnMiLCJzZXRTdGF0ZSIsImJvb2xlYW4iLCJuZXdTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==