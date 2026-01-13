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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQUFBLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLElBWWFFLGtCQUFrQixHQUFBQywwQkFBQTtFQUU3QixTQUFBRCxtQkFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsZ0JBQUEsbUJBQUFILGtCQUFBO0lBQ2pCLElBQUksQ0FBQ0ksYUFBYSxHQUFHRixLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsYUFBYTtJQUNoRCxJQUFJLENBQUNFLE9BQU8sR0FBR0osS0FBSyxDQUFDRyxPQUFPLENBQUNELGFBQWEsQ0FBQ0csSUFBSTtJQUMvQyxJQUFJLENBQUNDLGFBQWEsR0FBR0MsUUFBUSxDQUFDLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxhQUFhLEVBQUUsRUFBRSxDQUFDO0lBQzdELElBQUksQ0FBQ0UsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssUUFBUTtJQUN2QyxJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0VBQ2xCO0VBQUMsV0FBQUMsYUFBQSxhQUFBYixrQkFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxRQUFRQSxDQUFBLEVBQXFCO01BQUEsSUFBcEJDLFdBQVcsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSTtNQUN6QixJQUFJLENBQUNOLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUlDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDcEMsSUFBSUwsV0FBVyxFQUFFO1FBQ2YsSUFBSSxDQUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDQSxNQUFNLENBQUNPLE1B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QUFJLEVBQUUsS0FBSztRQUNYdUIsT0FBTyxFQUFFLElBQUksQ0FBQzZDLEtBQUssQ0FBQ3hKLFFBQVEsR0FBRyxFQUFFLEdBQUUsSUFBSSxDQUFDMkgsS0FBSyxDQUFDaEI7TUFDaEQsQ0FBQztNQUNELElBQUksQ0FBQ3lFLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDO0lBQ3pCO0VBQUM7SUFBQWxMLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEySixhQUFhQSxDQUFBLEVBQUc7TUFDZCxJQUFJLENBQUNvQixRQUFRLENBQUM7UUFBQzFCLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQy9CLEtBQUssQ0FBQytCO01BQVcsQ0FBQyxDQUFDO0lBQ3ZEO0VBQUM7SUFBQXRKLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFrTCxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7TUFDakQsSUFBSUQsU0FBUyxDQUFDckcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDdUMsS0FBSyxDQUFDdkMsSUFBSSxJQUFJLElBQUksQ0FBQ29FLEtBQUssQ0FBQzVKLE9BQU8sQ0FBQ2tCLE9BQU8sRUFBRTtRQUNwRUMsbUJBQUssQ0FBQ0MsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7TUFDcEM7SUFDRjtFQUFDO0FBQUEsRUFwSGlDMkssZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXBvcHVwLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjYsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCB7QzRnUG9wdXB9IGZyb20gJy4vYzRnLXBvcHVwJztcbmltcG9ydCB7dXRpbHN9IGZyb20gJy4vYzRnLW1hcHMtdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cENvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByb3h5KSB7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMubWFwRGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIHRoaXMucG9wdXBIYW5kbGluZyA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCk7XG4gICAgdGhpcy5leHRlcm5hbCA9ICEhdGhpcy5tYXBEYXRhLnBvcHVwRGl2O1xuICAgIHRoaXMucG9wdXBzID0gW107XG4gIH1cblxuICBhZGRQb3B1cChwb3B1cENvbmZpZyA9IG51bGwpIHtcbiAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgaWYgKHBvcHVwQ29uZmlnKSB7XG4gICAgICB0aGlzLnBvcHVwc1t0aGlzLnBvcHVwcy5sZW5ndGggLTFdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gIH0gLy8gZW5kIG9mIFwiYWRkUG9wVXAoKVwiXG4gIHNldFBvcHVwKHBvcHVwQ29uZmlnKSB7XG4gICAgaWYgKCF0aGlzLnBvcHVwc1swXSkge1xuICAgICAgdGhpcy5wb3B1cHMucHVzaChuZXcgQzRnUG9wdXAodGhpcykpO1xuICAgIH1cbiAgICB0aGlzLnBvcHVwc1swXS5zZXRDb250ZW50KHBvcHVwQ29uZmlnKTtcbiAgfSAvLyBlbmQgb2YgXCJzZXRQb3B1cCgpXCJcbiAgcmVtb3ZlUG9wdXAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBzWzBdICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwLmdldE1hcCgpKSB7XG4gICAgICB0aGlzLm1hcERhdGEubWFwLnJlbW92ZU92ZXJsYXkodGhpcy5wb3B1cHNbMF0ucG9wdXApO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBvcHVwc1swXSAmJiB0aGlzLnBvcHVwc1swXS5wb3B1cENvbXBvbmVudCkge1xuICAgICAgdGhpcy5wb3B1cHNbMF0ucG9wdXBDb21wb25lbnQuY2xvc2UodHJ1ZSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtPdmVybGF5fSBmcm9tICdvbCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3B1cENvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvcHVwQ29udHJvbGxlciA9IHBvcHVwQ29udHJvbGxlcjtcbiAgICAgICAgbGV0IHBvcFVwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjNGdfcG9wdXBfJyArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLm1hcElkKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtd3JhcHBlciBjNGctYWN0aXZlJztcblxuICAgICAgICBsZXQgcG9wVXBDbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcG9wVXBDbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2M0Zy1wb3B1cC1jbG9zZSBjNGctaWNvbic7XG5cbiAgICAgICAgalF1ZXJ5KHBvcFVwQ2xvc2VFbGVtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlT3ZlcmxheShzY29wZS5wb3B1cCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBDb250ZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY29udGVudCc7XG5cbiAgICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ2xvc2VFbGVtZW50KTtcbiAgICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ29udGVudCk7XG4gICAgICAgIHRoaXMucG9wdXBDb250ZW50ID0gcG9wVXBDb250ZW50O1xuICAgICAgICBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDEgfHwgcG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxldCBhdXRvUGFuID0gcG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDE7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHBvcFVwRWxlbWVudCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmluZzogJ2NlbnRlci1jZW50ZXInLC8vJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFstNTAsIDUwXSwgLy8tNTAsIDBcbiAgICAgICAgICAgICAgICBpbnNlcnRGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogYXV0b1BhbixcbiAgICAgICAgICAgICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dG9QYW5NYXJnaW46IDIwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuYWRkT3ZlcmxheSh0aGlzLnBvcHVwKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3B1cENvbnRyb2xsZXIucG9wdXBIYW5kbGluZyA9PT0gMikge1xuICAgICAgICAgICAgalF1ZXJ5KHBvcFVwRWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy1wb3B1cC13cmFwcGVyLW5vbm9zZScpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdjZW50ZXItY2VudGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHdheXNFeHRlbmRlZDogZmFsc2UsLy90aGlzLm1hcERhdGEub3BlbkRpcmVjdGx5LFxuICAgICAgICAgICAgICAgIGhpZGVPdGhlcjogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21wczogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZ2V0QWN0aXZlQ29tcG9uZW50cygpLFxuICAgICAgICAgICAgICAgIG1hcERhdGE6IHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLFxuICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wb3B1cENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmNvbXBvbmVudHMucG9wdXA7XG4gICAgICAgICAgICAgICAgaWYgKCFwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IHBvcHVwQ29udHJvbGxlci5leHRlcm5hbDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcG9wdXBDb250cm9sbGVyLm1hcERhdGEucG9wdXBEaXYpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBPcHRpb25zLmV4dGVybmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDb250YWluZXIsIHBvcHVwT3B0aW9ucyksIHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cE9wdGlvbnMuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQuYXBwZW5kKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcy5jdXJyZW50UG9wdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9wdXAgPSB0aGlzLnBvcHVwQ29tcG9uZW50O1xuICAgICAgICAgICAgLy8gY2xvc2Ugb3BlbiBzaWRlYm9hcmRzXG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvbnRlbnQgKHBvcHVwQ29uZmlnKSB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gcG9wdXBDb25maWcuZmVhdHVyZTtcbiAgICAgICAgbGV0IGxheWVyID0gcG9wdXBDb25maWcubGF5ZXI7XG4gICAgICAgIGxldCBwb3B1cENvbnRlbnQ7XG4gICAgICAgIGxldCBkaXZQb3B1cDtcblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudCArPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmVzW2ldLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICB9XG5cblxuICAgICAgICBkaXZQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgb2JqUG9wdXBcbiAgICAgICAgaWYgKHdpbmRvdy5jNGdNYXBzSG9va3MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9ialBvcHVwID0ge1xuICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cENvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBwb3B1cENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBjb21wOiB0aGlzLnBvcHVwQ29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgICAgICAgICAgZGl2OiBkaXZQb3B1cCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAsIG9ialBvcHVwKTtcbiAgICAgICAgICAgIGlmIChwb3B1cENvbnRlbnQgIT09IG9ialBvcHVwLmNvbnRlbnQpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gb2JqUG9wdXAuY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwLmdldE1hcCgpKSB7IC8vcG9wdXAgbm90IGFscmVhZHkgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHBvcHVwQ29udGVudDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UG9wdXApO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPCAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVG9ETyBsb2FkIGZlYXR1cmUgY29vcmRpbmF0ZXMgZm9yIGdlb21ldHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQb2ludChjZW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvbXBzID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5nZXRBY3RpdmVDb21wb25lbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29tcG9uZW50LnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKGFjdGl2ZUNvbXBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpdlBvcHVwLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnROb2RlLmlubmVySFRNTCA9IHBvcHVwQ29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZGl2UG9wdXAuYXBwZW5kQ2hpbGQoY29udGVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50LnNldENvbnRlbnQoZGl2UG9wdXAuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ialBvcHVwICYmIG9ialBvcHVwLmNhbGxiYWNrICYmIHR5cGVvZiBvYmpQb3B1cC5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5jYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5zZXRDb250ZW50KHBvcHVwQ29udGVudCwgcG9wdXBDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24gKGdlb21ldHJ5KSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvcHVwLmdldEVsZW1lbnQoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdlb21ldHJ5KSB7XG4gICAgICAgICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMixdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjZW50ZXIgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgcG9zaXRpb25pbmcgPSBcIlwiO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gWzAsMF07XG4gICAgICAgIGlmIChjZW50ZXJbMV0gPj0gY29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiYm90dG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMV0gPSAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbnRlclswXSA+PSBjb29yZGluYXRlc1swXSkge1xuICAgICAgICAgICAgb2Zmc2V0WzBdID0gLTUwO1xuICAgICAgICAgICAgcG9zaXRpb25pbmcgKz0gXCItbGVmdFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMF0gPSAxMDA7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcIi1yaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtbGVmdFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtcmlnaHRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLWxlZnRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLXJpZ2h0XCIpO1xuICAgICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoXCJub3NlLVwiICsgcG9zaXRpb25pbmcpXG4gICAgICAgIHRoaXMucG9wdXAuc2V0UG9zaXRpb25pbmcocG9zaXRpb25pbmcpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldE9mZnNldChvZmZzZXQpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldFBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gJy4vLi4vYzRnLW1hcHMtdXRpbHMnXG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbixcbiAgICAgIGRldGFpbHNPcGVuOiBmYWxzZSxcbiAgICAgIGFjdGl2ZUNvbXBzOiBwcm9wcy5hY3RpdmVDb21wcyxcbiAgICAgIGNvbnN0c3RyOiBmYWxzZVxuICAgIH07XG4gICAgcHJvcHMuaGlkZU90aGVyKHRoaXMpO1xuICAgIHRoaXMucm91dGVCdXR0b25zID0gXCJcIjtcbiAgICB0aGlzLmxhbmd1YWdlID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBEYXRhKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRGV0YWlscyA9IHRoaXMudG9nZ2xlRGV0YWlscy5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2IgPSBcIlwiO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4dGVybmFsID8gXCJjNGctcG9wdXAtY29udGFpbmVyIFwiIDogXCJjNGctc2lkZWJvYXJkIGM0Zy1wb3B1cC1jb250YWluZXIgXCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCJjNGctb3BlbiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFsd2F5c0V4dGVuZGVkKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzT3Blbikge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLWNsb3NlZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGVhZGVyQ2xhc3MgPSBcImM0Zy1wb3B1cC1oZWFkZXJcIjtcbiAgICBsZXQgYWRkQnV0dG9ucyA9IDxkaXYvPjtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25zdHN0cikge1xuICAgICAgaGVhZGVyQ2xhc3MgKz0gXCIgYzRnLXJvdXRpbmdcIjtcbiAgICAgIGFkZEJ1dHRvbnMgPSA8dGhpcy5zdGF0ZS5jb25zdHN0ciBjb25maWc9e3RoaXMuc3RhdGUuY29uZmlnfS8+O1xuICAgIH1cblxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0+XG4gICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtoZWFkZXJDbGFzc30gaGVhZGVyQ2xhc3M9e1wiYzRnLXBvcHVwLWhlYWRlci1oZWFkbGluZVwifSBoZWFkZXI9e3RoaXMucHJvcHMubWFwRGF0YS5wb3B1cEhlYWRsaW5lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9eygpID0+IHt0aGlzLmNsb3NlKHRydWUpfX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5ndWFnZS5DTE9TRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiXCJ9IGRldGFpbEJ0bkNiPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgIHthZGRCdXR0b25zfVxuICAgICAgICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmNvbnRlbnR9fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0QWRkQnV0dG9ucyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50LCBwb3B1cENvbmZpZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IGNvbnRlbnR9KTtcbiAgfVxuXG4gIG9wZW4oYWN0aXZlQ29tcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlkZU90aGVyKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFjdGl2ZUNvbXBzOiBhY3RpdmVDb21wc1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwRGF0YS5jYWNoaW5nKSB7XG4gICAgICB1dGlscy5zdG9yZVZhbHVlKCdwb3B1cEluZm9zJywgXCJcIik7XG4gICAgfVxuICAgIGlmIChib29sZWFuICYmIHRoaXMuc3RhdGUuYWN0aXZlQ29tcHMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hY3RpdmVDb21wcykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVDb21wcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBjb21wID0gdGhpcy5zdGF0ZS5hY3RpdmVDb21wc1tpXTtcbiAgICAgICAgICBjb21wLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBjb250ZW50OiB0aGlzLnByb3BzLmV4dGVybmFsID8gXCJcIjogdGhpcy5zdGF0ZS5jb250ZW50XG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHRvZ2dsZURldGFpbHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsc09wZW46ICF0aGlzLnN0YXRlLmRldGFpbHNPcGVufSk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMucHJvcHMubWFwRGF0YS5jYWNoaW5nKSB7XG4gICAgICB1dGlscy5zdG9yZVZhbHVlKCdwb3B1cEluZm9zJywgXCJcIik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiX2M0Z1BvcHVwIiwicmVxdWlyZSIsIl9jNGdNYXBzVXRpbHMiLCJDNGdQb3B1cENvbnRyb2xsZXIiLCJleHBvcnRzIiwicHJveHkiLCJfY2xhc3NDYWxsQ2hlY2syIiwibWFwQ29udHJvbGxlciIsIm9wdGlvbnMiLCJtYXBEYXRhIiwiZGF0YSIsInBvcHVwSGFuZGxpbmciLCJwYXJzZUludCIsImV4dGVybmFsIiwicG9wdXBEaXYiLCJwb3B1cHMiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJhZGRQb3B1cCIsInBvcHVwQ29uZmlnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicHVzaCIsIkM0Z1BvcHVwIiwic2V0Q29udGVudCIsImNhY2hpbmciLCJ1dGlscyIsInN0b3JlVmFsdWUiLCJzZXRQb3B1cCIsInJlbW92ZVBvcHVwIiwicG9wdXAiLCJnZXRNYXAiLCJtYXAiLCJyZW1vdmVPdmVybGF5IiwicG9wdXBDb21wb25lbnQiLCJjbG9zZSIsIl9vbCIsIl9yZWFjdERvbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfYzRnUG9wdXBDb250YWluZXIiLCJSZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX2dlb20iLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mMyIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwb3B1cENvbnRyb2xsZXIiLCJzY29wZSIsInBvcFVwRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm1hcElkIiwiY2xhc3NOYW1lIiwicG9wVXBDbG9zZUVsZW1lbnQiLCJqUXVlcnkiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3BVcENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBvcHVwQ29udGVudCIsImF1dG9QYW4iLCJPdmVybGF5IiwiZWxlbWVudCIsInBvc2l0aW9uaW5nIiwib2Zmc2V0IiwiaW5zZXJ0Rmlyc3QiLCJhdXRvUGFuQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJhdXRvUGFuTWFyZ2luIiwiYWRkT3ZlcmxheSIsImFkZENsYXNzIiwiY2VudGVyIiwiZ2V0VmlldyIsImdldENlbnRlciIsInBvc2l0aW9uIiwicG9wdXBPcHRpb25zIiwib3BlbiIsImFsd2F5c0V4dGVuZGVkIiwiaGlkZU90aGVyIiwiaGlkZU90aGVyQ29tcG9uZW50cyIsImFjdGl2ZUNvbXBzIiwiZ2V0QWN0aXZlQ29tcG9uZW50cyIsInBvcHVwQ29udGFpbmVyIiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiY29tcG9uZW50cyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJQb3B1cENvbnRhaW5lciIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsImFwcGVuZCIsImN1cnJlbnRQb3B1cCIsImZlYXR1cmUiLCJsYXllciIsImRpdlBvcHVwIiwiZmVhdHVyZXMiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwiY29udGVudCIsImxhbmciLCJvYmpQb3B1cCIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsIl90eXBlb2YyIiwicHJveHlfYXBwZW5kUG9wdXAiLCJjb21wIiwiZGl2IiwiY2FsbGJhY2siLCJjYWxsSG9va0Z1bmN0aW9ucyIsImlubmVySFRNTCIsImdldEdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJzZXRQb3NpdGlvbiIsIlBvaW50Iiwic3RhdGUiLCJjaGlsZHJlbiIsImNvbnRlbnROb2RlIiwiZ2V0RWxlbWVudCIsImNvb3JkaW5hdGVzIiwiZ2V0VHlwZSIsImdldENvb3JkaW5hdGVzIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwicmVtb3ZlQ2xhc3MiLCJzZXRQb3NpdGlvbmluZyIsInNldE9mZnNldCIsIl9yZWFjdCIsIl9jNGdNYXBzSTE4biIsIl90eXBlb2YiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiVGl0bGViYXIiLCJsYXp5IiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJkZXRhaWxzT3BlbiIsImNvbnN0c3RyIiwicm91dGVCdXR0b25zIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsImJpbmQiLCJ0b2dnbGVEZXRhaWxzIiwiX2luaGVyaXRzMiIsIl90aGlzMiIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJoZWFkZXJDbGFzcyIsImFkZEJ1dHRvbnMiLCJjb25maWciLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyIiwicG9wdXBIZWFkbGluZSIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJzZXRBZGRCdXR0b25zIiwic2V0U3RhdGUiLCJib29sZWFuIiwibmV3U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIkNvbXBvbmVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9