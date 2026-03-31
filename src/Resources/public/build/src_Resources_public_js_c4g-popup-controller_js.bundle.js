"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_c4g-popup-controller_js"],{

/***/ "./src/Resources/public/js/c4g-popup-controller.js"
/*!*********************************************************!*\
  !*** ./src/Resources/public/js/c4g-popup-controller.js ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
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
  }, {
    key: "hasPopup",
    value: function hasPopup() {
      var _this = this;
      var mapOverlays = this.mapData.map.getOverlays();
      var popupActive = false;
      mapOverlays.forEach(function (element, index) {
        for (var i = 0; i < _this.popups.length; i++) {
          if (element === _this.popups[i].popup) {
            popupActive = true;
          }
        }
      });
      return popupActive;
    }
  }]);
}();

/***/ },

/***/ "./src/Resources/public/js/c4g-popup.js"
/*!**********************************************!*\
  !*** ./src/Resources/public/js/c4g-popup.js ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
      var objPopup;
      if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_appendPopup) === 'object') {
        objPopup = {
          popup: popupConfig,
          content: popupContent,
          mapController: this.popupController.mapController,
          comp: this.popupComponent || null,
          div: divPopup,
          callback: null
        };
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, objPopup);
        if (popupContent !== objPopup.content) {}
        popupContent = objPopup.content;
      }
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
            var geometry = feature.getGeometry();
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
          if (divPopup.children.length > 0) {
            var contentNode = document.createElement('div');
            contentNode.innerHTML = popupContent;
            divPopup.appendChild(contentNode);
            this.popupComponent.setContent(divPopup.innerHTML);
            if (objPopup && objPopup.callback && typeof objPopup.callback === "function") {
              objPopup.callback();
            }
          } else {
            this.popupComponent.setContent(popupContent, popupConfig);
          }
        }
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-popup-container.jsx"
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-popup-container.jsx ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
    value: function setContent(content, popupConfig) {
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQUFBLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLElBWWFFLGtCQUFrQixHQUFBQywwQkFBQTtFQUU3QixTQUFBRCxtQkFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFILGtCQUFBO0lBQ2pCLElBQUksQ0FBQ0ksYUFBYSxHQUFHRixLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsYUFBYTtJQUNoRCxJQUFJLENBQUNFLE9BQU8sR0FBR0osS0FBSyxDQUFDRyxPQUFPLENBQUNELGFBQWEsQ0FBQ0csSUFBSTtJQUMvQyxJQUFJLENBQUNDLGFBQWEsR0FBR0MsUUFBUSxDQUFDLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxhQUFhLEVBQUUsRUFBRSxDQUFDO0lBQzdELElBQUksQ0FBQ0UsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssUUFBUTtJQUN2QyxJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0VBQ2xCO0VBQUMsV0FBQUMsYUFBQSxhQUFBYixrQkFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxRQUFRQSxDQUFBLEVBQXFCO01BQUEsSUFBcEJDLFdBQVcsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSTtNQUN6QixJQUFJLENBQUNOLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUlDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDcEMsSUFBSUwsV0FBVyxFQUFFO1FBQ2YsSUFBSSxDQUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDQSxNQUFNLENBQUNPLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQ0ksVUFBVSxDQUFDTixXQUFXLENBQUM7TUFDNUQ7TUFDQSxJQUFJLElBQUksQ0FBQ1gsT0FBTyxDQUFDa0IsT0FBTyxFQUFFO1FBQ3hCQyxtQkFBSyxDQUFDQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztNQUNwQztJQUNGLENBQUMsQ0FBQztFQUFBO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFZLFFBQVFBLENBQUNWLFdBQVcsRUFBRTtNQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbkIsSUFBSSxDQUFDQSxNQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3RDO01BQ0EsSUFBSSxDQUFDVixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNXLFVBQVUsQ0FBQ04sV0FBVyxDQUFDO0lBQ3hDLENBQUMsQ0FBQztFQUFBO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFhLFdBQVdBLENBQUEsRUFBRztNQUNaLElBQUksSUFBSSxDQUFDaEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDaUIsS0FBSyxJQUFJLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ2lCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsRUFBRTtRQUMzRSxJQUFJLENBQUN4QixPQUFPLENBQUN5QixHQUFHLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNpQixLQUFLLENBQUM7TUFDdEQsQ0FBQyxNQUNJLElBQUksSUFBSSxDQUFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDcUIsY0FBYyxFQUFFO1FBQ3hELElBQUksQ0FBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3FCLGNBQWMsQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQztNQUMzQztJQUNGO0VBQUM7SUFBQXBCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFvQixRQUFRQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxLQUFBO01BQ1QsSUFBTUMsV0FBVyxHQUFHLElBQUksQ0FBQy9CLE9BQU8sQ0FBQ3lCLEdBQUcsQ0FBQ08sV0FBVyxDQUFDLENBQUM7TUFDbEQsSUFBSUMsV0FBVyxHQUFHLEtBQUs7TUFDdkJGLFdBQVcsQ0FBQ0csT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1FBQ3RDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUCxLQUFJLENBQUN4QixNQUFNLENBQUNPLE1BQU0sRUFBRXdCLENBQUMsRUFBRSxFQUFFO1VBQzNDLElBQUlGLE9BQU8sS0FBS0wsS0FBSSxDQUFDeEIsTUFBTSxDQUFDK0IsQ0FBQyxDQUFDLENBQUNkLEtBQUssRUFBRTtZQUNwQ1UsV0FBVyxHQUFHLElBQUk7VUFDcEI7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUVGLE9BQU9BLFdBQVc7SUFDcEI7RUFBQztBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVESCxJQUFBSyxHQUFBLEdBQUE5QyxtQkFBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBK0MsU0FBQSxHQUFBQyxzQkFBQSxDQUFBaEQsbUJBQUE7QUFDQSxJQUFBaUQsa0JBQUEsR0FBQWpELG1CQUFBO0FBQ0EsSUFBQWtELEtBQUEsR0FBQUMsdUJBQUEsQ0FBQW5ELG1CQUFBO0FBQ0EsSUFBQW9ELEtBQUEsR0FBQXBELG1CQUFBO0FBQThCLFNBQUFtRCx3QkFBQUUsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUosdUJBQUEsWUFBQUEsd0JBQUFFLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBZCxDQUFBLEVBQUFlLENBQUEsS0FBQUMsU0FBQSxtQkFBQVIsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVMsUUFBQSxDQUFBVCxDQUFBLDBCQUFBQSxDQUFBLFNBQUFPLENBQUEsTUFBQUQsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVYsQ0FBQSxVQUFBTSxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxHQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxFQUFBTyxDQUFBLGNBQUFNLEVBQUEsSUFBQWIsQ0FBQSxnQkFBQWEsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWYsQ0FBQSxFQUFBYSxFQUFBLE9BQUFyQixDQUFBLElBQUFjLENBQUEsR0FBQVUsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWxCLENBQUEsRUFBQWEsRUFBQSxPQUFBckIsQ0FBQSxDQUFBbUIsR0FBQSxJQUFBbkIsQ0FBQSxDQUFBb0IsR0FBQSxJQUFBTixDQUFBLENBQUFDLENBQUEsRUFBQU0sRUFBQSxFQUFBckIsQ0FBQSxJQUFBZSxDQUFBLENBQUFNLEVBQUEsSUFBQWIsQ0FBQSxDQUFBYSxFQUFBLFdBQUFOLENBQUEsS0FBQVAsQ0FBQSxFQUFBQyxDQUFBO0FBQUEsSUFFakI5QixRQUFRLEdBQUFyQixnQkFBQTtFQUVqQixTQUFBcUIsU0FBWWdELGVBQWUsRUFBRTtJQUFBLElBQUFuRSxnQkFBQSxtQkFBQW1CLFFBQUE7SUFDekIsSUFBTWlELEtBQUssR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0QsZUFBZSxHQUFHQSxlQUFlO0lBQ3RDLElBQUlFLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hERixZQUFZLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxHQUFHTCxlQUFlLENBQUNoRSxPQUFPLENBQUNzRSxLQUFLLENBQUM7SUFDN0VKLFlBQVksQ0FBQ0ssU0FBUyxHQUFHLDhCQUE4QjtJQUV2RCxJQUFJQyxpQkFBaUIsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3hESSxpQkFBaUIsQ0FBQ0QsU0FBUyxHQUFHLDBCQUEwQjtJQUV4REUsTUFBTSxDQUFDRCxpQkFBaUIsQ0FBQyxDQUFDRSxLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO01BQzdDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCWixlQUFlLENBQUNsRSxhQUFhLENBQUMyQixHQUFHLENBQUNDLGFBQWEsQ0FBQ3VDLEtBQUssQ0FBQzFDLEtBQUssQ0FBQztJQUNoRSxDQUFDLENBQUM7SUFFRixJQUFJc0QsWUFBWSxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDaERTLFlBQVksQ0FBQ04sU0FBUyxHQUFHLG1CQUFtQjtJQUU1Q0wsWUFBWSxDQUFDWSxXQUFXLENBQUNOLGlCQUFpQixDQUFDO0lBQzNDTixZQUFZLENBQUNZLFdBQVcsQ0FBQ0QsWUFBWSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0UsWUFBWSxHQUFHRixZQUFZO0lBQ2hDLElBQUliLGVBQWUsQ0FBQzlELGFBQWEsS0FBSyxDQUFDLElBQUk4RCxlQUFlLENBQUM5RCxhQUFhLEtBQUssQ0FBQyxFQUFFO01BQzVFLElBQUk4RSxPQUFPLEdBQUdoQixlQUFlLENBQUM5RCxhQUFhLEtBQUssQ0FBQztNQUNqRCxJQUFJLENBQUNxQixLQUFLLEdBQUcsSUFBSTBELFdBQU8sQ0FBQztRQUNyQjlDLE9BQU8sRUFBRStCLFlBQVk7UUFDckJnQixXQUFXLEVBQUUsZUFBZTtRQUFDO1FBQzdCQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFBRTtRQUNuQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJKLE9BQU8sRUFBRUEsT0FBTztRQUNoQkssZ0JBQWdCLEVBQUU7VUFDZEMsUUFBUSxFQUFFO1FBQ2QsQ0FBQztRQUNEQyxhQUFhLEVBQUU7TUFDbkIsQ0FBQyxDQUFDO01BQ0Z2QixlQUFlLENBQUNsRSxhQUFhLENBQUMyQixHQUFHLENBQUMrRCxVQUFVLENBQUMsSUFBSSxDQUFDakUsS0FBSyxDQUFDO0lBQzVELENBQUMsTUFBTSxJQUFJeUMsZUFBZSxDQUFDOUQsYUFBYSxLQUFLLENBQUMsRUFBRTtNQUM1Q3VFLE1BQU0sQ0FBQ1AsWUFBWSxDQUFDLENBQUN1QixRQUFRLENBQUMsMEJBQTBCLENBQUM7TUFDekQsSUFBSUMsTUFBTSxHQUFHMUIsZUFBZSxDQUFDbEUsYUFBYSxDQUFDMkIsR0FBRyxDQUFDa0UsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7TUFDcEUsSUFBSSxDQUFDckUsS0FBSyxHQUFHLElBQUkwRCxXQUFPLENBQUM7UUFDckJZLFFBQVEsRUFBRUgsTUFBTTtRQUNoQlIsV0FBVyxFQUFFLGVBQWU7UUFDNUIvQyxPQUFPLEVBQUUrQixZQUFZO1FBQ3JCaUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCSCxPQUFPLEVBQUU7TUFDYixDQUFDLENBQUM7TUFDRmhCLGVBQWUsQ0FBQ2xFLGFBQWEsQ0FBQzJCLEdBQUcsQ0FBQytELFVBQVUsQ0FBQyxJQUFJLENBQUNqRSxLQUFLLENBQUM7SUFDNUQsQ0FBQyxNQUNJLElBQUl5QyxlQUFlLENBQUM5RCxhQUFhLEtBQUssQ0FBQyxFQUFFO01BQzFDLElBQUk0RixZQUFZLEdBQUc7UUFDZkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsY0FBYyxFQUFFLEtBQUs7UUFBQztRQUN0QkMsU0FBUyxFQUFFakMsZUFBZSxDQUFDbEUsYUFBYSxDQUFDb0csbUJBQW1CO1FBQzVEQyxXQUFXLEVBQUVuQyxlQUFlLENBQUNsRSxhQUFhLENBQUNzRyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hFcEcsT0FBTyxFQUFFZ0UsZUFBZSxDQUFDaEUsT0FBTztRQUNoQ0YsYUFBYSxFQUFFa0UsZUFBZSxDQUFDbEU7TUFDbkMsQ0FBQztNQUVELElBQUksSUFBSSxDQUFDdUcsY0FBYyxFQUFFO1FBQ3JCQyxvQkFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUNGLGNBQWMsQ0FBQztRQUNwRCxPQUFPckMsZUFBZSxDQUFDbEUsYUFBYSxDQUFDMEcsVUFBVSxDQUFDakYsS0FBSztRQUNyRCxJQUFJLENBQUN5QyxlQUFlLENBQUM1RCxRQUFRLEVBQUU7VUFDM0IsSUFBSSxDQUFDaUcsY0FBYyxDQUFDSSxVQUFVLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNMLGNBQWMsQ0FBQztRQUNuRTtNQUNKO01BQ0FQLFlBQVksQ0FBQzFGLFFBQVEsR0FBRzRELGVBQWUsQ0FBQzVELFFBQVE7TUFDaEQsSUFBSSxDQUFDaUcsY0FBYyxHQUFHckMsZUFBZSxDQUFDNUQsUUFBUSxHQUFHK0QsUUFBUSxDQUFDd0MsYUFBYSxDQUFDLEdBQUcsR0FBRzNDLGVBQWUsQ0FBQ2hFLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDLEdBQUc4RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0ksSUFBSSxDQUFDLElBQUksQ0FBQ2lDLGNBQWMsRUFBRTtRQUN0QixJQUFJLENBQUNBLGNBQWMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNuRDBCLFlBQVksQ0FBQzFGLFFBQVEsR0FBRyxLQUFLO01BQ2pDO01BQ0EsSUFBSSxDQUFDdUIsY0FBYyxHQUFHMkUsb0JBQVEsQ0FBQ00sTUFBTSxjQUFDbEUsS0FBSyxDQUFDMEIsYUFBYSxDQUFDeUMsaUNBQWMsRUFBRWYsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDTyxjQUFjLENBQUM7TUFDN0csSUFBSSxDQUFDUCxZQUFZLENBQUMxRixRQUFRLEVBQUU7UUFDeEI0RCxlQUFlLENBQUNsRSxhQUFhLENBQUNnSCwyQkFBMkIsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ1YsY0FBYyxDQUFDO1FBQ3JGckMsZUFBZSxDQUFDbEUsYUFBYSxDQUFDb0csbUJBQW1CLENBQUMsSUFBSSxDQUFDYyxZQUFZLENBQUM7TUFDeEU7TUFDQSxJQUFJLENBQUNBLFlBQVksR0FBRyxJQUFJLENBQUNyRixjQUFjO01BQ3ZDO01BQ0FxQyxlQUFlLENBQUNsRSxhQUFhLENBQUMwRyxVQUFVLENBQUNqRixLQUFLLEdBQUcsSUFBSSxDQUFDSSxjQUFjO0lBQ3hFO0VBQ0o7RUFBQyxXQUFBcEIsYUFBQSxhQUFBUyxRQUFBO0lBQUFSLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFRLFVBQVVBLENBQUVOLFdBQVcsRUFBRTtNQUNyQixJQUFJc0csT0FBTyxHQUFHdEcsV0FBVyxDQUFDc0csT0FBTztNQUNqQyxJQUFJQyxLQUFLLEdBQUd2RyxXQUFXLENBQUN1RyxLQUFLO01BQzdCLElBQUluQyxZQUFZO01BQ2hCLElBQUlvQyxRQUFRO01BRVosSUFBSUYsT0FBTyxDQUFDekQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3pCLElBQUk0RCxRQUFRLEdBQUdILE9BQU8sQ0FBQ3pELEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDdEMsS0FBSyxJQUFJbkIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0UsUUFBUSxDQUFDdkcsTUFBTSxFQUFFd0IsQ0FBQyxFQUFFLEVBQUU7VUFDdEMwQyxZQUFZLElBQUk1RCxtQkFBSyxDQUFDa0csc0JBQXNCLENBQUMxRyxXQUFXLENBQUNZLEtBQUssQ0FBQytGLE9BQU8sRUFBRUYsUUFBUSxDQUFDL0UsQ0FBQyxDQUFDLEVBQUU2RSxLQUFLLEVBQUUsSUFBSSxDQUFDbEQsZUFBZSxDQUFDbEUsYUFBYSxDQUFDRyxJQUFJLENBQUNzSCxJQUFJLENBQUM7UUFDN0k7TUFDSixDQUFDLE1BQU07UUFDSHhDLFlBQVksR0FBRzVELG1CQUFLLENBQUNrRyxzQkFBc0IsQ0FBQzFHLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDK0YsT0FBTyxFQUFFTCxPQUFPLEVBQUVDLEtBQUssRUFBRSxJQUFJLENBQUNsRCxlQUFlLENBQUNsRSxhQUFhLENBQUNHLElBQUksQ0FBQ3NILElBQUksQ0FBQztNQUN4STtNQUdBSixRQUFRLEdBQUdoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDeEMsSUFBSW9ELFFBQVE7TUFDWixJQUFJQyxNQUFNLENBQUNDLFlBQVksS0FBSzVHLFNBQVMsSUFBSSxJQUFBNkcsUUFBQSxhQUFPRixNQUFNLENBQUNDLFlBQVksQ0FBQ0UsaUJBQWlCLE1BQUssUUFBUSxFQUFFO1FBQ2hHSixRQUFRLEdBQUc7VUFDUGpHLEtBQUssRUFBRVosV0FBVztVQUNsQjJHLE9BQU8sRUFBRXZDLFlBQVk7VUFDckJqRixhQUFhLEVBQUUsSUFBSSxDQUFDa0UsZUFBZSxDQUFDbEUsYUFBYTtVQUNqRCtILElBQUksRUFBRSxJQUFJLENBQUNsRyxjQUFjLElBQUksSUFBSTtVQUNqQ21HLEdBQUcsRUFBRVgsUUFBUTtVQUNiWSxRQUFRLEVBQUU7UUFDZCxDQUFDO1FBQ0Q1RyxtQkFBSyxDQUFDNkcsaUJBQWlCLENBQUNQLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDRSxpQkFBaUIsRUFBRUosUUFBUSxDQUFDO1FBQ3hFLElBQUl6QyxZQUFZLEtBQUt5QyxRQUFRLENBQUNGLE9BQU8sRUFBRSxDQUV2QztRQUNBdkMsWUFBWSxHQUFHeUMsUUFBUSxDQUFDRixPQUFPO01BQ25DO01BRUEsSUFBSSxJQUFJLENBQUN0RCxlQUFlLENBQUM5RCxhQUFhLEdBQUcsQ0FBQyxFQUFFO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUNxQixLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7VUFBRTtVQUN4QixJQUFJLENBQUN3QyxlQUFlLENBQUNsRSxhQUFhLENBQUMyQixHQUFHLENBQUMrRCxVQUFVLENBQUMsSUFBSSxDQUFDakUsS0FBSyxDQUFDO1FBQ2pFO1FBRUE0RixRQUFRLENBQUNjLFNBQVMsR0FBR2xELFlBQVk7UUFDakMsSUFBSSxDQUFDQSxZQUFZLENBQUNrRCxTQUFTLEdBQUcsRUFBRTtRQUNoQyxJQUFJLENBQUNsRCxZQUFZLENBQUNELFdBQVcsQ0FBQ3FDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQ25ELGVBQWUsQ0FBQzlELGFBQWEsR0FBRyxDQUFDLEVBQUU7VUFDeEMsSUFBSStHLE9BQU8sQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFDLEVBQUU7WUFDdkIsSUFBSUMsUUFBUSxHQUFHbEIsT0FBTyxDQUFDaUIsV0FBVyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDRSxXQUFXLENBQUNELFFBQVEsQ0FBQztVQUM5QixDQUFDLE1BQU07WUFDSDtVQUFBO1FBRVIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDbkUsZUFBZSxDQUFDOUQsYUFBYSxJQUFJLENBQUMsRUFBRTtVQUNoRCxJQUFJd0YsTUFBTSxHQUFHLElBQUksQ0FBQzFCLGVBQWUsQ0FBQ2xFLGFBQWEsQ0FBQzJCLEdBQUcsQ0FBQ2tFLE9BQU8sQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1VBQ3pFLElBQUl1QyxTQUFRLEdBQUcsSUFBSUUsV0FBSyxDQUFDM0MsTUFBTSxDQUFDO1VBQ2hDLElBQUksQ0FBQzBDLFdBQVcsQ0FBQzFDLE1BQU0sQ0FBQztRQUM1QjtNQUNKLENBQUMsTUFBTTtRQUNILElBQUksSUFBSSxDQUFDL0QsY0FBYyxFQUFFO1VBQ3JCLElBQUl3RSxXQUFXLEdBQUcsSUFBSSxDQUFDbkMsZUFBZSxDQUFDbEUsYUFBYSxDQUFDc0csbUJBQW1CLENBQUMsQ0FBQztVQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDekUsY0FBYyxDQUFDMkcsS0FBSyxDQUFDdkMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQ3BFLGNBQWMsQ0FBQ29FLElBQUksQ0FBQ0ksV0FBVyxDQUFDO1VBQ3pDO1VBQ0EsSUFBSWdCLFFBQVEsQ0FBQ29CLFFBQVEsQ0FBQzFILE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUIsSUFBSTJILFdBQVcsR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUMvQ29FLFdBQVcsQ0FBQ1AsU0FBUyxHQUFHbEQsWUFBWTtZQUNwQ29DLFFBQVEsQ0FBQ3JDLFdBQVcsQ0FBQzBELFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUM3RyxjQUFjLENBQUNWLFVBQVUsQ0FBQ2tHLFFBQVEsQ0FBQ2MsU0FBUyxDQUFDO1lBQ2xELElBQUlULFFBQVEsSUFBSUEsUUFBUSxDQUFDTyxRQUFRLElBQUksT0FBT1AsUUFBUSxDQUFDTyxRQUFRLEtBQUssVUFBVSxFQUFFO2NBQzFFUCxRQUFRLENBQUNPLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCO1VBQ0osQ0FBQyxNQUFNO1lBQ0gsSUFBSSxDQUFDcEcsY0FBYyxDQUFDVixVQUFVLENBQUM4RCxZQUFZLEVBQUVwRSxXQUFXLENBQUM7VUFDN0Q7UUFDSjtNQUNKO0lBRUo7RUFBQztJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBMkgsV0FBV0EsQ0FBRUQsUUFBUSxFQUFFO01BQ25CLElBQUkxRyxHQUFHLEdBQUcsSUFBSSxDQUFDdUMsZUFBZSxDQUFDbEUsYUFBYSxDQUFDMkIsR0FBRztNQUNoRCxJQUFJVSxPQUFPLEdBQUcsSUFBSSxDQUFDWixLQUFLLENBQUNrSCxVQUFVLENBQUMsQ0FBQztNQUNyQyxJQUFJQyxXQUFXLEdBQUcsSUFBSTtNQUN0QixJQUFJUCxRQUFRLElBQUlBLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUU7UUFDNUNELFdBQVcsR0FBR1AsUUFBUSxDQUFDUyxjQUFjLENBQUMsQ0FBQztNQUMzQyxDQUFDLE1BQ0ksSUFBSVQsUUFBUSxFQUFFO1FBQ2YsSUFBSVUsTUFBTSxHQUFHVixRQUFRLENBQUNXLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDSixXQUFXLEdBQUcsQ0FBQyxDQUFDRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFFO01BQzdFLENBQUMsTUFBTTtRQUNISCxXQUFXLEdBQUdqSCxHQUFHLENBQUNrRSxPQUFPLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQztNQUMzQztNQUNBLElBQUlGLE1BQU0sR0FBR2pFLEdBQUcsQ0FBQ2tFLE9BQU8sQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDO01BQ3RDLElBQUlWLFdBQVcsR0FBRyxFQUFFO01BQ3BCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7TUFDbEIsSUFBSU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJZ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdCeEQsV0FBVyxJQUFJLFFBQVE7TUFDM0IsQ0FBQyxNQUNJO1FBQ0RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ2RELFdBQVcsSUFBSSxLQUFLO01BQ3hCO01BQ0EsSUFBSVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJZ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdCdkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmRCxXQUFXLElBQUksT0FBTztNQUMxQixDQUFDLE1BQ0k7UUFDREMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFDZkQsV0FBVyxJQUFJLFFBQVE7TUFDM0I7TUFDQVQsTUFBTSxDQUFDdEMsT0FBTyxDQUFDLENBQUM0RyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQ3ZDQSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FDN0JBLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUMvQkEsV0FBVyxDQUFDLG1CQUFtQixDQUFDO01BQ3JDdEUsTUFBTSxDQUFDdEMsT0FBTyxDQUFDLENBQUNzRCxRQUFRLENBQUMsT0FBTyxHQUFHUCxXQUFXLENBQUM7TUFDL0MsSUFBSSxDQUFDM0QsS0FBSyxDQUFDeUgsY0FBYyxDQUFDOUQsV0FBVyxDQUFDO01BQ3RDLElBQUksQ0FBQzNELEtBQUssQ0FBQzBILFNBQVMsQ0FBQzlELE1BQU0sQ0FBQztNQUM1QixJQUFJLENBQUM1RCxLQUFLLENBQUM2RyxXQUFXLENBQUNNLFdBQVcsQ0FBQztJQUV2QztFQUFDO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUwsSUFBQVEsTUFBQSxHQUFBdkcsdUJBQUEsQ0FBQW5ELG1CQUFBO0FBQ0EsSUFBQTJKLFlBQUEsR0FBQTNKLG1CQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRCxtQkFBQTtBQUF5QyxTQUFBbUQsd0JBQUFFLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFKLHVCQUFBLFlBQUFBLHdCQUFBRSxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQWQsQ0FBQSxFQUFBZSxDQUFBLEtBQUFDLFNBQUEsbUJBQUFSLENBQUEsaUJBQUFBLENBQUEsZ0JBQUF1RyxPQUFBLENBQUF2RyxDQUFBLDBCQUFBQSxDQUFBLFNBQUFPLENBQUEsTUFBQUQsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVYsQ0FBQSxVQUFBTSxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxHQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxFQUFBTyxDQUFBLGNBQUFNLEVBQUEsSUFBQWIsQ0FBQSxnQkFBQWEsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWYsQ0FBQSxFQUFBYSxFQUFBLE9BQUFyQixDQUFBLElBQUFjLENBQUEsR0FBQVUsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWxCLENBQUEsRUFBQWEsRUFBQSxPQUFBckIsQ0FBQSxDQUFBbUIsR0FBQSxJQUFBbkIsQ0FBQSxDQUFBb0IsR0FBQSxJQUFBTixDQUFBLENBQUFDLENBQUEsRUFBQU0sRUFBQSxFQUFBckIsQ0FBQSxJQUFBZSxDQUFBLENBQUFNLEVBQUEsSUFBQWIsQ0FBQSxDQUFBYSxFQUFBLFdBQUFOLENBQUEsS0FBQVAsQ0FBQSxFQUFBQyxDQUFBO0FBQUEsU0FBQXVHLFdBQUF2RyxDQUFBLEVBQUFLLENBQUEsRUFBQU4sQ0FBQSxXQUFBTSxDQUFBLE9BQUFtRyxnQkFBQSxhQUFBbkcsQ0FBQSxPQUFBb0csMkJBQUEsYUFBQXpHLENBQUEsRUFBQTBHLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBdkcsQ0FBQSxFQUFBTixDQUFBLFlBQUF5RyxnQkFBQSxhQUFBeEcsQ0FBQSxFQUFBNkcsV0FBQSxJQUFBeEcsQ0FBQSxDQUFBeUcsS0FBQSxDQUFBOUcsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQTJHLDBCQUFBLGNBQUExRyxDQUFBLElBQUErRyxPQUFBLENBQUFDLFNBQUEsQ0FBQUMsT0FBQSxDQUFBbkcsSUFBQSxDQUFBNkYsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUEvRyxDQUFBLGFBQUEwRyx5QkFBQSxZQUFBQSwwQkFBQSxhQUFBMUcsQ0FBQSxVQVp6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNa0gsUUFBUSxnQkFBR3RILGlCQUFLLENBQUN1SCxJQUFJLENBQUM7RUFBQSxPQUFNLG1PQUE0QjtBQUFBLEVBQUM7QUFBQyxJQUVuRHBELGNBQWMsR0FBQWxILHNCQUFBLDBCQUFBdUssVUFBQTtFQUV6QixTQUFBckQsZUFBWXNELEtBQUssRUFBRTtJQUFBLElBQUFySSxLQUFBO0lBQUEsSUFBQWpDLGdCQUFBLG1CQUFBZ0gsY0FBQTtJQUNqQi9FLEtBQUEsR0FBQXVILFVBQUEsT0FBQXhDLGNBQUEsR0FBTXNELEtBQUs7SUFFWHJJLEtBQUEsQ0FBS3dHLEtBQUssR0FBRztNQUNYaEIsT0FBTyxFQUFFLEVBQUU7TUFDWHZCLElBQUksRUFBRW9FLEtBQUssQ0FBQ3BFLElBQUk7TUFDaEJxRSxXQUFXLEVBQUUsS0FBSztNQUNsQmpFLFdBQVcsRUFBRWdFLEtBQUssQ0FBQ2hFLFdBQVc7TUFDOUJrRSxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0RGLEtBQUssQ0FBQ2xFLFNBQVMsQ0FBQW5FLEtBQUssQ0FBQztJQUNyQkEsS0FBQSxDQUFLd0ksWUFBWSxHQUFHLEVBQUU7SUFDdEJ4SSxLQUFBLENBQUt5SSxRQUFRLEdBQUcsSUFBQUMsd0JBQVcsRUFBQzFJLEtBQUEsQ0FBS3FJLEtBQUssQ0FBQ25LLE9BQU8sQ0FBQztJQUMvQzhCLEtBQUEsQ0FBS0YsS0FBSyxHQUFHRSxLQUFBLENBQUtGLEtBQUssQ0FBQzZJLElBQUksQ0FBQTNJLEtBQUssQ0FBQztJQUNsQ0EsS0FBQSxDQUFLNEksYUFBYSxHQUFHNUksS0FBQSxDQUFLNEksYUFBYSxDQUFDRCxJQUFJLENBQUEzSSxLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBRXJEO0VBQUMsSUFBQTZJLFVBQUEsYUFBQTlELGNBQUEsRUFBQXFELFVBQUE7RUFBQSxXQUFBM0osYUFBQSxhQUFBc0csY0FBQTtJQUFBckcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1HLE1BQU1BLENBQUEsRUFBRztNQUFBLElBQUFnRSxNQUFBO01BQ1AsSUFBSUMsY0FBYyxHQUFHLEVBQUU7TUFDdkIsSUFBSUMsV0FBVyxHQUFHLEVBQUU7TUFDcEIsSUFBSXZHLFNBQVMsR0FBRyxJQUFJLENBQUM0RixLQUFLLENBQUMvSixRQUFRLEdBQUcsc0JBQXNCLEdBQUcsb0NBQW9DO01BRW5HLElBQUksSUFBSSxDQUFDa0ksS0FBSyxDQUFDdkMsSUFBSSxFQUFFO1FBQ25CeEIsU0FBUyxJQUFJLFdBQVc7TUFDMUIsQ0FBQyxNQUFNO1FBQ0xBLFNBQVMsSUFBSSxXQUFXO01BQzFCO01BQ0EsSUFBSSxJQUFJLENBQUM0RixLQUFLLENBQUNuRSxjQUFjLEVBQUU7UUFDN0J6QixTQUFTLElBQUksbUJBQW1CO01BQ2xDLENBQUMsTUFBTTtRQUNMLElBQUksSUFBSSxDQUFDK0QsS0FBSyxDQUFDOEIsV0FBVyxFQUFFO1VBQzFCN0YsU0FBUyxJQUFJLG1CQUFtQjtRQUNsQyxDQUFDLE1BQU07VUFDTEEsU0FBUyxJQUFJLHFCQUFxQjtRQUNwQztNQUNGO01BQ0EsSUFBSXdHLFdBQVcsR0FBRyxrQkFBa0I7TUFDcEMsSUFBSUMsVUFBVSxnQkFBRzlCLE1BQUEsWUFBQTlFLGFBQUEsWUFBSyxDQUFDO01BQ3ZCLElBQUksSUFBSSxDQUFDa0UsS0FBSyxDQUFDK0IsUUFBUSxFQUFFO1FBQ3ZCVSxXQUFXLElBQUksY0FBYztRQUM3QkMsVUFBVSxnQkFBRzlCLE1BQUEsWUFBQTlFLGFBQUEsTUFBTWtFLEtBQUssQ0FBQytCLFFBQVE7VUFBQ1ksTUFBTSxFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQzJDO1FBQU8sQ0FBQyxDQUFDO01BQ2hFO01BRUEsSUFBSSxJQUFJLENBQUMzQyxLQUFLLENBQUNoQixPQUFPLEVBQUU7UUFDdEIsb0JBQ0k0QixNQUFBLFlBQUE5RSxhQUFBO1VBQUtHLFNBQVMsRUFBRUE7UUFBVSxnQkFDeEIyRSxNQUFBLFlBQUE5RSxhQUFBO1VBQUtHLFNBQVMsRUFBRTtRQUFvQixnQkFDbEMyRSxNQUFBLFlBQUE5RSxhQUFBLENBQUM4RSxNQUFBLENBQUFnQyxRQUFRO1VBQUNDLFFBQVEsZUFBRWpDLE1BQUEsWUFBQTlFLGFBQUEsY0FBSyxZQUFlO1FBQUUsZ0JBQ3hDOEUsTUFBQSxZQUFBOUUsYUFBQSxDQUFDNEYsUUFBUTtVQUFDb0IsWUFBWSxFQUFFTCxXQUFZO1VBQUNBLFdBQVcsRUFBRSwyQkFBNEI7VUFBQ00sTUFBTSxFQUFFLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ25LLE9BQU8sQ0FBQ3NMLGFBQWEsSUFBSSxFQUFHO1VBQ3BIQyxhQUFhLEVBQUUsb0JBQXFCO1VBQUNDLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFBLEVBQVE7WUFBQ1osTUFBSSxDQUFDaEosS0FBSyxDQUFDLElBQUksQ0FBQztVQUFBLENBQUU7VUFBQzZKLGFBQWEsRUFBRSxJQUFJLENBQUNsQixRQUFRLENBQUNtQixLQUFNO1VBQzlHYixjQUFjLEVBQUUsRUFBRztVQUFDQyxXQUFXLEVBQUU7UUFBRyxHQUMzQ0UsVUFDTyxDQUNGLENBQUMsZUFDWDlCLE1BQUEsWUFBQTlFLGFBQUE7VUFBS0csU0FBUyxFQUFFLG1CQUFvQjtVQUFDb0gsdUJBQXVCLEVBQUU7WUFBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQ3RELEtBQUssQ0FBQ2hCO1VBQU87UUFBRSxDQUFDLENBQ3pGLENBQ0YsQ0FBQztNQUVaLENBQUMsTUFDSTtRQUNILE9BQU8sSUFBSTtNQUNiO0lBQ0Y7RUFBQztJQUFBOUcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW9MLGFBQWFBLENBQUN4QixRQUFRLEVBQUVZLE1BQU0sRUFBRTtNQUM5QixJQUFJLENBQUNhLFFBQVEsQ0FBQztRQUNaYixNQUFNLEVBQUVBLE1BQU07UUFDZFosUUFBUSxFQUFFQTtNQUNaLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTdKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFRLFVBQVVBLENBQUNxRyxPQUFPLEVBQUUzRyxXQUFXLEVBQUU7TUFDL0IsSUFBSSxDQUFDbUwsUUFBUSxDQUFDO1FBQUN4RSxPQUFPLEVBQUVBO01BQU8sQ0FBQyxDQUFDO0lBQ25DO0VBQUM7SUFBQTlHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzRixJQUFJQSxDQUFDSSxXQUFXLEVBQUU7TUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQ2dFLEtBQUssQ0FBQy9KLFFBQVEsRUFBRTtRQUN4QixJQUFJLENBQUMrSixLQUFLLENBQUNsRSxTQUFTLENBQUMsQ0FBQztNQUN4QjtNQUNBLElBQUksQ0FBQzZGLFFBQVEsQ0FBQztRQUNaL0YsSUFBSSxFQUFFLElBQUk7UUFDVkksV0FBVyxFQUFFQTtNQUNmLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTNGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtQixLQUFLQSxDQUFBLEVBQWtCO01BQUEsSUFBakJtSyxRQUFPLEdBQUFuTCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxLQUFLO01BQ25CLElBQUksSUFBSSxDQUFDdUosS0FBSyxDQUFDbkssT0FBTyxDQUFDa0IsT0FBTyxFQUFFO1FBQzlCQyxtQkFBSyxDQUFDQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztNQUNwQztNQUNBLElBQUkySyxRQUFPLElBQUksSUFBSSxDQUFDekQsS0FBSyxDQUFDbkMsV0FBVyxFQUFFO1FBQ3JDLEtBQUssSUFBSTlELENBQUMsSUFBSSxJQUFJLENBQUNpRyxLQUFLLENBQUNuQyxXQUFXLEVBQUU7VUFDcEMsSUFBSSxJQUFJLENBQUNtQyxLQUFLLENBQUNuQyxXQUFXLENBQUN4QyxjQUFjLENBQUN0QixDQUFDLENBQUMsRUFBRTtZQUM1QyxJQUFJd0YsSUFBSSxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDbkMsV0FBVyxDQUFDOUQsQ0FBQyxDQUFDO1lBQ3BDd0YsSUFBSSxDQUFDaUUsUUFBUSxDQUFDO2NBQUMvRixJQUFJLEVBQUU7WUFBSSxDQUFDLENBQUM7VUFDN0I7UUFDRjtNQUNGO01BQ0EsSUFBSWlHLFFBQVEsR0FBRztRQUNiakcsSUFBSSxFQUFFLEtBQUs7UUFDWHVCLE9BQU8sRUFBRSxJQUFJLENBQUM2QyxLQUFLLENBQUMvSixRQUFRLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQ2tJLEtBQUssQ0FBQ2hCO01BQ2hELENBQUM7TUFDRCxJQUFJLENBQUN3RSxRQUFRLENBQUNFLFFBQVEsQ0FBQztJQUN6QjtFQUFDO0lBQUF4TCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUssYUFBYUEsQ0FBQSxFQUFHO01BQ2QsSUFBSSxDQUFDb0IsUUFBUSxDQUFDO1FBQUMxQixXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM5QixLQUFLLENBQUM4QjtNQUFXLENBQUMsQ0FBQztJQUN2RDtFQUFDO0lBQUE1SixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBd0wsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO01BQ2pELElBQUlELFNBQVMsQ0FBQ3BHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ3VDLEtBQUssQ0FBQ3ZDLElBQUksSUFBSSxJQUFJLENBQUNvRSxLQUFLLENBQUNuSyxPQUFPLENBQUNrQixPQUFPLEVBQUU7UUFDcEVDLG1CQUFLLENBQUNDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO01BQ3BDO0lBQ0Y7RUFBQztBQUFBLEVBbEhpQ2lMLGdCQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXBvcHVwLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1wb3B1cC5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI2LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQge0M0Z1BvcHVwfSBmcm9tICcuL2M0Zy1wb3B1cCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJ1xuXG5leHBvcnQgY2xhc3MgQzRnUG9wdXBDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihwcm94eSkge1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLm1hcERhdGEgPSBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICB0aGlzLnBvcHVwSGFuZGxpbmcgPSBwYXJzZUludCh0aGlzLm1hcERhdGEucG9wdXBIYW5kbGluZywgMTApO1xuICAgIHRoaXMuZXh0ZXJuYWwgPSAhIXRoaXMubWFwRGF0YS5wb3B1cERpdjtcbiAgICB0aGlzLnBvcHVwcyA9IFtdO1xuICB9XG5cbiAgYWRkUG9wdXAocG9wdXBDb25maWcgPSBudWxsKSB7XG4gICAgdGhpcy5wb3B1cHMucHVzaChuZXcgQzRnUG9wdXAodGhpcykpO1xuICAgIGlmIChwb3B1cENvbmZpZykge1xuICAgICAgdGhpcy5wb3B1cHNbdGhpcy5wb3B1cHMubGVuZ3RoIC0xXS5zZXRDb250ZW50KHBvcHVwQ29uZmlnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFwRGF0YS5jYWNoaW5nKSB7XG4gICAgICB1dGlscy5zdG9yZVZhbHVlKCdwb3B1cEluZm9zJywgXCJcIik7XG4gICAgfVxuICB9IC8vIGVuZCBvZiBcImFkZFBvcFVwKClcIlxuXG4gIHNldFBvcHVwKHBvcHVwQ29uZmlnKSB7XG4gICAgaWYgKCF0aGlzLnBvcHVwc1swXSkge1xuICAgICAgdGhpcy5wb3B1cHMucHVzaChuZXcgQzRnUG9wdXAodGhpcykpO1xuICAgIH1cbiAgICB0aGlzLnBvcHVwc1swXS5zZXRDb250ZW50KHBvcHVwQ29uZmlnKTtcbiAgfSAvLyBlbmQgb2YgXCJzZXRQb3B1cCgpXCJcblxuICByZW1vdmVQb3B1cCgpIHtcbiAgICBpZiAodGhpcy5wb3B1cHNbMF0gJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAgJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAuZ2V0TWFwKCkpIHtcbiAgICAgIHRoaXMubWFwRGF0YS5tYXAucmVtb3ZlT3ZlcmxheSh0aGlzLnBvcHVwc1swXS5wb3B1cCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucG9wdXBzWzBdICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnBvcHVwc1swXS5wb3B1cENvbXBvbmVudC5jbG9zZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBoYXNQb3B1cCgpIHtcbiAgICBjb25zdCBtYXBPdmVybGF5cyA9IHRoaXMubWFwRGF0YS5tYXAuZ2V0T3ZlcmxheXMoKTtcbiAgICBsZXQgcG9wdXBBY3RpdmUgPSBmYWxzZTtcbiAgICBtYXBPdmVybGF5cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5wb3B1cHNbaV0ucG9wdXApIHtcbiAgICAgICAgICBwb3B1cEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwb3B1cEFjdGl2ZTtcbiAgfVxufSIsImltcG9ydCB7T3ZlcmxheX0gZnJvbSAnb2wnO1xuaW1wb3J0IHt1dGlsc30gZnJvbSAnLi9jNGctbWFwcy11dGlscyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UG9wdXBDb250YWluZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvYzRnLXBvcHVwLWNvbnRhaW5lclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuXG5leHBvcnQgY2xhc3MgQzRnUG9wdXAge1xuXG4gICAgY29uc3RydWN0b3IocG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIgPSBwb3B1cENvbnRyb2xsZXI7XG4gICAgICAgIGxldCBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYzRnX3BvcHVwXycgKyBwb3B1cENvbnRyb2xsZXIubWFwRGF0YS5tYXBJZCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLXdyYXBwZXIgYzRnLWFjdGl2ZSc7XG5cbiAgICAgICAgbGV0IHBvcFVwQ2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY2xvc2UgYzRnLWljb24nO1xuXG4gICAgICAgIGpRdWVyeShwb3BVcENsb3NlRWxlbWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZU92ZXJsYXkoc2NvcGUucG9wdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQ29udGVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLWNvbnRlbnQnO1xuXG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENsb3NlRWxlbWVudCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xuICAgICAgICB0aGlzLnBvcHVwQ29udGVudCA9IHBvcFVwQ29udGVudDtcbiAgICAgICAgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxIHx8IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgYXV0b1BhbiA9IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdjZW50ZXItY2VudGVyJywvLydib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCA1MF0sIC8vLTUwLCAwXG4gICAgICAgICAgICAgICAgaW5zZXJ0Rmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QYW46IGF1dG9QYW4sXG4gICAgICAgICAgICAgICAgYXV0b1BhbkFuaW1hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuTWFyZ2luOiAyMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDIpIHtcbiAgICAgICAgICAgIGpRdWVyeShwb3BVcEVsZW1lbnQpLmFkZENsYXNzKCdjNGctcG9wdXAtd3JhcHBlci1ub25vc2UnKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2VudGVyLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgICAgICAgIG9mZnNldDogWy01MCwgMF0sXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5hZGRPdmVybGF5KHRoaXMucG9wdXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgcG9wdXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgYWx3YXlzRXh0ZW5kZWQ6IGZhbHNlLC8vdGhpcy5tYXBEYXRhLm9wZW5EaXJlY3RseSxcbiAgICAgICAgICAgICAgICBoaWRlT3RoZXI6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29tcHM6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmdldEFjdGl2ZUNvbXBvbmVudHMoKSxcbiAgICAgICAgICAgICAgICBtYXBEYXRhOiBwb3B1cENvbnRyb2xsZXIubWFwRGF0YSxcbiAgICAgICAgICAgICAgICBtYXBDb250cm9sbGVyOiBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwO1xuICAgICAgICAgICAgICAgIGlmICghcG9wdXBDb250cm9sbGVyLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cE9wdGlvbnMuZXh0ZXJuYWwgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWw7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gcG9wdXBDb250cm9sbGVyLmV4dGVybmFsID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLnBvcHVwRGl2KSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwQ29udGFpbmVyLCBwb3B1cE9wdGlvbnMpLCB0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmICghcG9wdXBPcHRpb25zLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LmFwcGVuZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMuY3VycmVudFBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgICAgIC8vIGNsb3NlIG9wZW4gc2lkZWJvYXJkc1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuY29tcG9uZW50cy5wb3B1cCA9IHRoaXMucG9wdXBDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb250ZW50IChwb3B1cENvbmZpZykge1xuICAgICAgICBsZXQgZmVhdHVyZSA9IHBvcHVwQ29uZmlnLmZlYXR1cmU7XG4gICAgICAgIGxldCBsYXllciA9IHBvcHVwQ29uZmlnLmxheWVyO1xuICAgICAgICBsZXQgcG9wdXBDb250ZW50O1xuICAgICAgICBsZXQgZGl2UG9wdXA7XG5cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKSB7XG4gICAgICAgICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRlbnQgKz0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlc1tpXSwgbGF5ZXIsIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVwQ29udGVudCA9IHV0aWxzLnJlcGxhY2VBbGxQbGFjZWhvbGRlcnMocG9wdXBDb25maWcucG9wdXAuY29udGVudCwgZmVhdHVyZSwgbGF5ZXIsIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZGl2UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IG9ialBvcHVwXG4gICAgICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvYmpQb3B1cCA9IHtcbiAgICAgICAgICAgICAgICBwb3B1cDogcG9wdXBDb25maWcsXG4gICAgICAgICAgICAgICAgY29udGVudDogcG9wdXBDb250ZW50LFxuICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI6IHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIsXG4gICAgICAgICAgICAgICAgY29tcDogdGhpcy5wb3B1cENvbXBvbmVudCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGRpdjogZGl2UG9wdXAsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICBpZiAocG9wdXBDb250ZW50ICE9PSBvYmpQb3B1cC5jb250ZW50KSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwQ29udGVudCA9IG9ialBvcHVwLmNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3B1cENvbnRyb2xsZXIucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cC5nZXRNYXAoKSkgeyAvL3BvcHVwIG5vdCBhbHJlYWR5IGluIHRoZSBtYXBcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5hZGRPdmVybGF5KHRoaXMucG9wdXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXZQb3B1cC5pbm5lckhUTUwgPSBwb3B1cENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMikge1xuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL1RvRE8gbG9hZCBmZWF0dXJlIGNvb3JkaW5hdGVzIGZvciBnZW9tZXRyeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cENvbnRyb2xsZXIucG9wdXBIYW5kbGluZyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgUG9pbnQoY2VudGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGNlbnRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3B1cENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVDb21wcyA9IHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZ2V0QWN0aXZlQ29tcG9uZW50cygpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wb3B1cENvbXBvbmVudC5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb21wb25lbnQub3BlbihhY3RpdmVDb21wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXZQb3B1cC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50Tm9kZS5pbm5lckhUTUwgPSBwb3B1cENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpdlBvcHVwLmFwcGVuZENoaWxkKGNvbnRlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5zZXRDb250ZW50KGRpdlBvcHVwLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpQb3B1cCAmJiBvYmpQb3B1cC5jYWxsYmFjayAmJiB0eXBlb2Ygb2JqUG9wdXAuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9wdXAuY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb21wb25lbnQuc2V0Q29udGVudChwb3B1cENvbnRlbnQsIHBvcHVwQ29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFBvc2l0aW9uIChnZW9tZXRyeSkge1xuICAgICAgICBsZXQgbWFwID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXA7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5wb3B1cC5nZXRFbGVtZW50KCk7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IG51bGw7XG4gICAgICAgIGlmIChnZW9tZXRyeSAmJiBnZW9tZXRyeS5nZXRUeXBlKCkgPT09ICdQb2ludCcpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnZW9tZXRyeSkge1xuICAgICAgICAgICAgbGV0IGV4dGVudCA9IGdlb21ldHJ5LmdldEV4dGVudCgpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbKGV4dGVudFswXSArIGV4dGVudFsyXSkgLyAyLCAoZXh0ZW50WzFdICsgZXh0ZW50WzNdKSAvIDIsXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gbWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2VudGVyID0gbWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IG9mZnNldCA9IFswLDBdO1xuICAgICAgICBpZiAoY2VudGVyWzFdID49IGNvb3JkaW5hdGVzWzFdKSB7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcImJvdHRvbVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0WzFdID0gMTA7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcInRvcFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZW50ZXJbMF0gPj0gY29vcmRpbmF0ZXNbMF0pIHtcbiAgICAgICAgICAgIG9mZnNldFswXSA9IC01MDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiLWxlZnRcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0WzBdID0gMTAwO1xuICAgICAgICAgICAgcG9zaXRpb25pbmcgKz0gXCItcmlnaHRcIlxuICAgICAgICB9XG4gICAgICAgIGpRdWVyeShlbGVtZW50KS5yZW1vdmVDbGFzcyhcIm5vc2UtdG9wLWxlZnRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtdG9wLXJpZ2h0XCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJub3NlLWJvdHRvbS1sZWZ0XCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJub3NlLWJvdHRvbS1yaWdodFwiKTtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKFwibm9zZS1cIiArIHBvc2l0aW9uaW5nKVxuICAgICAgICB0aGlzLnBvcHVwLnNldFBvc2l0aW9uaW5nKHBvc2l0aW9uaW5nKTtcbiAgICAgICAgdGhpcy5wb3B1cC5zZXRPZmZzZXQob2Zmc2V0KTtcbiAgICAgICAgdGhpcy5wb3B1cC5zZXRQb3NpdGlvbihjb29yZGluYXRlcyk7XG5cbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuLy4uL2M0Zy1tYXBzLXV0aWxzJ1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4sXG4gICAgICBkZXRhaWxzT3BlbjogZmFsc2UsXG4gICAgICBhY3RpdmVDb21wczogcHJvcHMuYWN0aXZlQ29tcHMsXG4gICAgICBjb25zdHN0cjogZmFsc2VcbiAgICB9O1xuICAgIHByb3BzLmhpZGVPdGhlcih0aGlzKTtcbiAgICB0aGlzLnJvdXRlQnV0dG9ucyA9IFwiXCI7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwRGF0YSk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZURldGFpbHMgPSB0aGlzLnRvZ2dsZURldGFpbHMuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiYzRnLXBvcHVwLWNvbnRhaW5lciBcIiA6IFwiYzRnLXNpZGVib2FyZCBjNGctcG9wdXAtY29udGFpbmVyIFwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLW9wZW4gXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hbHdheXNFeHRlbmRlZCkge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlsc09wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1jbG9zZWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhlYWRlckNsYXNzID0gXCJjNGctcG9wdXAtaGVhZGVyXCI7XG4gICAgbGV0IGFkZEJ1dHRvbnMgPSA8ZGl2Lz47XG4gICAgaWYgKHRoaXMuc3RhdGUuY29uc3RzdHIpIHtcbiAgICAgIGhlYWRlckNsYXNzICs9IFwiIGM0Zy1yb3V0aW5nXCI7XG4gICAgICBhZGRCdXR0b25zID0gPHRoaXMuc3RhdGUuY29uc3RzdHIgY29uZmlnPXt0aGlzLnN0YXRlLmNvbmZpZ30vPjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0+XG4gICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtoZWFkZXJDbGFzc30gaGVhZGVyQ2xhc3M9e1wiYzRnLXBvcHVwLWhlYWRlci1oZWFkbGluZVwifSBoZWFkZXI9e3RoaXMucHJvcHMubWFwRGF0YS5wb3B1cEhlYWRsaW5lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9eygpID0+IHt0aGlzLmNsb3NlKHRydWUpfX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5ndWFnZS5DTE9TRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiXCJ9IGRldGFpbEJ0bkNiPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgIHthZGRCdXR0b25zfVxuICAgICAgICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmNvbnRlbnR9fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0QWRkQnV0dG9ucyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50LCBwb3B1cENvbmZpZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IGNvbnRlbnR9KTtcbiAgfVxuXG4gIG9wZW4oYWN0aXZlQ29tcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU90aGVyKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFjdGl2ZUNvbXBzOiBhY3RpdmVDb21wc1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwRGF0YS5jYWNoaW5nKSB7XG4gICAgICB1dGlscy5zdG9yZVZhbHVlKCdwb3B1cEluZm9zJywgXCJcIik7XG4gICAgfVxuICAgIGlmIChib29sZWFuICYmIHRoaXMuc3RhdGUuYWN0aXZlQ29tcHMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hY3RpdmVDb21wcykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVDb21wcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBjb21wID0gdGhpcy5zdGF0ZS5hY3RpdmVDb21wc1tpXTtcbiAgICAgICAgICBjb21wLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBjb250ZW50OiB0aGlzLnByb3BzLmV4dGVybmFsID8gXCJcIjogdGhpcy5zdGF0ZS5jb250ZW50XG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsc09wZW46ICF0aGlzLnN0YXRlLmRldGFpbHNPcGVufSk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMucHJvcHMubWFwRGF0YS5jYWNoaW5nKSB7XG4gICAgICB1dGlscy5zdG9yZVZhbHVlKCdwb3B1cEluZm9zJywgXCJcIik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiX2M0Z1BvcHVwIiwicmVxdWlyZSIsIl9jNGdNYXBzVXRpbHMiLCJDNGdQb3B1cENvbnRyb2xsZXIiLCJleHBvcnRzIiwicHJveHkiLCJfY2xhc3NDYWxsQ2hlY2syIiwibWFwQ29udHJvbGxlciIsIm9wdGlvbnMiLCJtYXBEYXRhIiwiZGF0YSIsInBvcHVwSGFuZGxpbmciLCJwYXJzZUludCIsImV4dGVybmFsIiwicG9wdXBEaXYiLCJwb3B1cHMiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJhZGRQb3B1cCIsInBvcHVwQ29uZmlnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicHVzaCIsIkM0Z1BvcHVwIiwic2V0Q29udGVudCIsImNhY2hpbmciLCJ1dGlscyIsInN0b3JlVmFsdWUiLCJzZXRQb3B1cCIsInJlbW92ZVBvcHVwIiwicG9wdXAiLCJnZXRNYXAiLCJtYXAiLCJyZW1vdmVPdmVybGF5IiwicG9wdXBDb21wb25lbnQiLCJjbG9zZSIsImhhc1BvcHVwIiwiX3RoaXMiLCJtYXBPdmVybGF5cyIsImdldE92ZXJsYXlzIiwicG9wdXBBY3RpdmUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiaSIsIl9vbCIsIl9yZWFjdERvbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYzRnUG9wdXBDb250YWluZXIiLCJSZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX2dlb20iLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInBvcHVwQ29udHJvbGxlciIsInNjb3BlIiwicG9wVXBFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibWFwSWQiLCJjbGFzc05hbWUiLCJwb3BVcENsb3NlRWxlbWVudCIsImpRdWVyeSIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvcFVwQ29udGVudCIsImFwcGVuZENoaWxkIiwicG9wdXBDb250ZW50IiwiYXV0b1BhbiIsIk92ZXJsYXkiLCJwb3NpdGlvbmluZyIsIm9mZnNldCIsImluc2VydEZpcnN0IiwiYXV0b1BhbkFuaW1hdGlvbiIsImR1cmF0aW9uIiwiYXV0b1Bhbk1hcmdpbiIsImFkZE92ZXJsYXkiLCJhZGRDbGFzcyIsImNlbnRlciIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJwb3NpdGlvbiIsInBvcHVwT3B0aW9ucyIsIm9wZW4iLCJhbHdheXNFeHRlbmRlZCIsImhpZGVPdGhlciIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJhY3RpdmVDb21wcyIsImdldEFjdGl2ZUNvbXBvbmVudHMiLCJwb3B1cENvbnRhaW5lciIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImNvbXBvbmVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyIiwiUG9wdXBDb250YWluZXIiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhcHBlbmQiLCJjdXJyZW50UG9wdXAiLCJmZWF0dXJlIiwibGF5ZXIiLCJkaXZQb3B1cCIsImZlYXR1cmVzIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsImNvbnRlbnQiLCJsYW5nIiwib2JqUG9wdXAiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJfdHlwZW9mMiIsInByb3h5X2FwcGVuZFBvcHVwIiwiY29tcCIsImRpdiIsImNhbGxiYWNrIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRHZW9tZXRyeSIsImdlb21ldHJ5Iiwic2V0UG9zaXRpb24iLCJQb2ludCIsInN0YXRlIiwiY2hpbGRyZW4iLCJjb250ZW50Tm9kZSIsImdldEVsZW1lbnQiLCJjb29yZGluYXRlcyIsImdldFR5cGUiLCJnZXRDb29yZGluYXRlcyIsImV4dGVudCIsImdldEV4dGVudCIsInJlbW92ZUNsYXNzIiwic2V0UG9zaXRpb25pbmciLCJzZXRPZmZzZXQiLCJfcmVhY3QiLCJfYzRnTWFwc0kxOG4iLCJfdHlwZW9mIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpdGxlYmFyIiwibGF6eSIsIl9Db21wb25lbnQiLCJwcm9wcyIsImRldGFpbHNPcGVuIiwiY29uc3RzdHIiLCJyb3V0ZUJ1dHRvbnMiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiYmluZCIsInRvZ2dsZURldGFpbHMiLCJfaW5oZXJpdHMyIiwiX3RoaXMyIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImhlYWRlckNsYXNzIiwiYWRkQnV0dG9ucyIsImNvbmZpZyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXIiLCJwb3B1cEhlYWRsaW5lIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInNldEFkZEJ1dHRvbnMiLCJzZXRTdGF0ZSIsImJvb2xlYW4iLCJuZXdTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiQ29tcG9uZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=