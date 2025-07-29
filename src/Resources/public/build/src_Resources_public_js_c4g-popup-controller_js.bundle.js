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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFhYUUsa0JBQWtCLEdBQUFDLDBCQUFBO0VBRTdCLFNBQUFELG1CQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUgsa0JBQUE7SUFDakIsSUFBSSxDQUFDSSxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csT0FBTyxDQUFDRCxhQUFhO0lBQ2hELElBQUksQ0FBQ0UsT0FBTyxHQUFHSixLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDRyxJQUFJO0lBQy9DLElBQUksQ0FBQ0MsYUFBYSxHQUFHQyxRQUFRLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNFLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxRQUFRO0lBQ3ZDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDbEI7RUFBQyxXQUFBQyxhQUFBLGFBQUFiLGtCQUFBO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLFFBQVFBLENBQUEsRUFBcUI7TUFBQSxJQUFwQkMsV0FBVyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO01BQ3pCLElBQUksQ0FBQ04sTUFBTSxDQUFDUyxJQUFJLENBQUMsSUFBSUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNwQyxJQUFJTCxXQUFXLEVBQUU7UUFDZixJQUFJLENBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUNBLE1BQU0sQ0FB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YmxHLElBQUksRUFBRSxLQUFLO1FBQ1h1QixPQUFPLEVBQUUsSUFBSSxDQUFDNkMsS0FBSyxDQUFDeEosUUFBUSxHQUFHLEVBQUUsR0FBRSxJQUFJLENBQUMySCxLQUFLLENBQUNoQjtNQUNoRCxDQUFDO01BQ0QsSUFBSSxDQUFDeUUsUUFBUSxDQUFDRSxRQUFRLENBQUM7SUFDekI7RUFBQztJQUFBbEwsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJKLGFBQWFBLENBQUEsRUFBRztNQUNkLElBQUksQ0FBQ29CLFFBQVEsQ0FBQztRQUFDMUIsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDK0I7TUFBVyxDQUFDLENBQUM7SUFDdkQ7RUFBQztJQUFBdEosR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQWtMLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJRCxTQUFTLENBQUNyRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUN1QyxLQUFLLENBQUN2QyxJQUFJLElBQUksSUFBSSxDQUFDb0UsS0FBSyxDQUFDNUosT0FBTyxDQUFDa0IsT0FBTyxFQUFFO1FBQ3BFQyxtQkFBSyxDQUFDQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztNQUNwQztJQUNGO0VBQUM7QUFBQSxFQXBIaUMySyxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1wb3B1cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXBvcHVwLWNvbnRhaW5lci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCB7QzRnUG9wdXB9IGZyb20gJy4vYzRnLXBvcHVwJztcbmltcG9ydCB7dXRpbHN9IGZyb20gJy4vYzRnLW1hcHMtdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cENvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByb3h5KSB7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMubWFwRGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIHRoaXMucG9wdXBIYW5kbGluZyA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCk7XG4gICAgdGhpcy5leHRlcm5hbCA9ICEhdGhpcy5tYXBEYXRhLnBvcHVwRGl2O1xuICAgIHRoaXMucG9wdXBzID0gW107XG4gIH1cblxuICBhZGRQb3B1cChwb3B1cENvbmZpZyA9IG51bGwpIHtcbiAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgaWYgKHBvcHVwQ29uZmlnKSB7XG4gICAgICB0aGlzLnBvcHVwc1t0aGlzLnBvcHVwcy5sZW5ndGggLTFdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gIH0gLy8gZW5kIG9mIFwiYWRkUG9wVXAoKVwiXG4gIHNldFBvcHVwKHBvcHVwQ29uZmlnKSB7XG4gICAgaWYgKCF0aGlzLnBvcHVwc1swXSkge1xuICAgICAgdGhpcy5wb3B1cHMucHVzaChuZXcgQzRnUG9wdXAodGhpcykpO1xuICAgIH1cbiAgICB0aGlzLnBvcHVwc1swXS5zZXRDb250ZW50KHBvcHVwQ29uZmlnKTtcbiAgfSAvLyBlbmQgb2YgXCJzZXRQb3B1cCgpXCJcbiAgcmVtb3ZlUG9wdXAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBzWzBdICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwICYmIHRoaXMucG9wdXBzWzBdLnBvcHVwLmdldE1hcCgpKSB7XG4gICAgICB0aGlzLm1hcERhdGEubWFwLnJlbW92ZU92ZXJsYXkodGhpcy5wb3B1cHNbMF0ucG9wdXApO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBvcHVwc1swXSAmJiB0aGlzLnBvcHVwc1swXS5wb3B1cENvbXBvbmVudCkge1xuICAgICAgdGhpcy5wb3B1cHNbMF0ucG9wdXBDb21wb25lbnQuY2xvc2UodHJ1ZSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtPdmVybGF5fSBmcm9tICdvbCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3B1cENvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvcHVwQ29udHJvbGxlciA9IHBvcHVwQ29udHJvbGxlcjtcbiAgICAgICAgbGV0IHBvcFVwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjNGdfcG9wdXBfJyArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLm1hcElkKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtd3JhcHBlciBjNGctYWN0aXZlJztcblxuICAgICAgICBsZXQgcG9wVXBDbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcG9wVXBDbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2M0Zy1wb3B1cC1jbG9zZSBjNGctaWNvbic7XG5cbiAgICAgICAgalF1ZXJ5KHBvcFVwQ2xvc2VFbGVtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlT3ZlcmxheShzY29wZS5wb3B1cCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBDb250ZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY29udGVudCc7XG5cbiAgICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ2xvc2VFbGVtZW50KTtcbiAgICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ29udGVudCk7XG4gICAgICAgIHRoaXMucG9wdXBDb250ZW50ID0gcG9wVXBDb250ZW50O1xuICAgICAgICBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDEgfHwgcG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxldCBhdXRvUGFuID0gcG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDE7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHBvcFVwRWxlbWVudCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmluZzogJ2NlbnRlci1jZW50ZXInLC8vJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFstNTAsIDUwXSwgLy8tNTAsIDBcbiAgICAgICAgICAgICAgICBpbnNlcnRGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogYXV0b1BhbixcbiAgICAgICAgICAgICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dG9QYW5NYXJnaW46IDIwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuYWRkT3ZlcmxheSh0aGlzLnBvcHVwKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3B1cENvbnRyb2xsZXIucG9wdXBIYW5kbGluZyA9PT0gMikge1xuICAgICAgICAgICAgalF1ZXJ5KHBvcFVwRWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy1wb3B1cC13cmFwcGVyLW5vbm9zZScpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdjZW50ZXItY2VudGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHdheXNFeHRlbmRlZDogZmFsc2UsLy90aGlzLm1hcERhdGEub3BlbkRpcmVjdGx5LFxuICAgICAgICAgICAgICAgIGhpZGVPdGhlcjogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21wczogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZ2V0QWN0aXZlQ29tcG9uZW50cygpLFxuICAgICAgICAgICAgICAgIG1hcERhdGE6IHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLFxuICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wb3B1cENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmNvbXBvbmVudHMucG9wdXA7XG4gICAgICAgICAgICAgICAgaWYgKCFwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IHBvcHVwQ29udHJvbGxlci5leHRlcm5hbDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcG9wdXBDb250cm9sbGVyLm1hcERhdGEucG9wdXBEaXYpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBPcHRpb25zLmV4dGVybmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDb250YWluZXIsIHBvcHVwT3B0aW9ucyksIHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cE9wdGlvbnMuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQuYXBwZW5kKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcy5jdXJyZW50UG9wdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9wdXAgPSB0aGlzLnBvcHVwQ29tcG9uZW50O1xuICAgICAgICAgICAgLy8gY2xvc2Ugb3BlbiBzaWRlYm9hcmRzXG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvbnRlbnQgKHBvcHVwQ29uZmlnKSB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gcG9wdXBDb25maWcuZmVhdHVyZTtcbiAgICAgICAgbGV0IGxheWVyID0gcG9wdXBDb25maWcubGF5ZXI7XG4gICAgICAgIGxldCBwb3B1cENvbnRlbnQ7XG4gICAgICAgIGxldCBkaXZQb3B1cDtcblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudCArPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmVzW2ldLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICB9XG5cblxuICAgICAgICBkaXZQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgb2JqUG9wdXBcbiAgICAgICAgaWYgKHdpbmRvdy5jNGdNYXBzSG9va3MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9ialBvcHVwID0ge1xuICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cENvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBwb3B1cENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBjb21wOiB0aGlzLnBvcHVwQ29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgICAgICAgICAgZGl2OiBkaXZQb3B1cCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAsIG9ialBvcHVwKTtcbiAgICAgICAgICAgIGlmIChwb3B1cENvbnRlbnQgIT09IG9ialBvcHVwLmNvbnRlbnQpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gb2JqUG9wdXAuY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwLmdldE1hcCgpKSB7IC8vcG9wdXAgbm90IGFscmVhZHkgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHBvcHVwQ29udGVudDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UG9wdXApO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPCAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVG9ETyBsb2FkIGZlYXR1cmUgY29vcmRpbmF0ZXMgZm9yIGdlb21ldHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQb2ludChjZW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvbXBzID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5nZXRBY3RpdmVDb21wb25lbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29tcG9uZW50LnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKGFjdGl2ZUNvbXBzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpdlBvcHVwLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnROb2RlLmlubmVySFRNTCA9IHBvcHVwQ29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZGl2UG9wdXAuYXBwZW5kQ2hpbGQoY29udGVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50LnNldENvbnRlbnQoZGl2UG9wdXAuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9ialBvcHVwICYmIG9ialBvcHVwLmNhbGxiYWNrICYmIHR5cGVvZiBvYmpQb3B1cC5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5jYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5zZXRDb250ZW50KHBvcHVwQ29udGVudCwgcG9wdXBDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24gKGdlb21ldHJ5KSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvcHVwLmdldEVsZW1lbnQoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdlb21ldHJ5KSB7XG4gICAgICAgICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMixdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjZW50ZXIgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgcG9zaXRpb25pbmcgPSBcIlwiO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gWzAsMF07XG4gICAgICAgIGlmIChjZW50ZXJbMV0gPj0gY29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiYm90dG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMV0gPSAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbnRlclswXSA+PSBjb29yZGluYXRlc1swXSkge1xuICAgICAgICAgICAgb2Zmc2V0WzBdID0gLTUwO1xuICAgICAgICAgICAgcG9zaXRpb25pbmcgKz0gXCItbGVmdFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMF0gPSAxMDA7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcIi1yaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtbGVmdFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtcmlnaHRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLWxlZnRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLXJpZ2h0XCIpO1xuICAgICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoXCJub3NlLVwiICsgcG9zaXRpb25pbmcpXG4gICAgICAgIHRoaXMucG9wdXAuc2V0UG9zaXRpb25pbmcocG9zaXRpb25pbmcpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldE9mZnNldChvZmZzZXQpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldFBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuLy4uL2M0Zy1tYXBzLXV0aWxzJ1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4sXG4gICAgICBkZXRhaWxzT3BlbjogZmFsc2UsXG4gICAgICBhY3RpdmVDb21wczogcHJvcHMuYWN0aXZlQ29tcHMsXG4gICAgICBjb25zdHN0cjogZmFsc2VcbiAgICB9O1xuICAgIHByb3BzLmhpZGVPdGhlcih0aGlzKTtcbiAgICB0aGlzLnJvdXRlQnV0dG9ucyA9IFwiXCI7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwRGF0YSk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZURldGFpbHMgPSB0aGlzLnRvZ2dsZURldGFpbHMuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiYzRnLXBvcHVwLWNvbnRhaW5lciBcIiA6IFwiYzRnLXNpZGVib2FyZCBjNGctcG9wdXAtY29udGFpbmVyIFwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLW9wZW4gXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hbHdheXNFeHRlbmRlZCkge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlsc09wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1jbG9zZWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhlYWRlckNsYXNzID0gXCJjNGctcG9wdXAtaGVhZGVyXCI7XG4gICAgbGV0IGFkZEJ1dHRvbnMgPSA8ZGl2Lz47XG4gICAgaWYgKHRoaXMuc3RhdGUuY29uc3RzdHIpIHtcbiAgICAgIGhlYWRlckNsYXNzICs9IFwiIGM0Zy1yb3V0aW5nXCI7XG4gICAgICBhZGRCdXR0b25zID0gPHRoaXMuc3RhdGUuY29uc3RzdHIgY29uZmlnPXt0aGlzLnN0YXRlLmNvbmZpZ30vPjtcbiAgICB9XG5cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC13cmFwcGVyXCJ9PlxuICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17aGVhZGVyQ2xhc3N9IGhlYWRlckNsYXNzPXtcImM0Zy1wb3B1cC1oZWFkZXItaGVhZGxpbmVcIn0gaGVhZGVyPXt0aGlzLnByb3BzLm1hcERhdGEucG9wdXBIZWFkbGluZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXsoKSA9PiB7dGhpcy5jbG9zZSh0cnVlKX19IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ3VhZ2UuQ0xPU0V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0+XG4gICAgICAgICAgICAgICAgICB7YWRkQnV0dG9uc31cbiAgICAgICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcG9wdXAtY29udGVudFwifSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5zdGF0ZS5jb250ZW50fX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNldEFkZEJ1dHRvbnMoY29uc3RzdHIsIGNvbmZpZykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICBjb25zdHN0cjogY29uc3RzdHJcbiAgICB9KTtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCwgcG9wdXBDb25maWcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb250ZW50OiBjb250ZW50fSk7XG4gIH1cblxuICBvcGVuKGFjdGl2ZUNvbXBzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICB0aGlzLnByb3BzLmhpZGVPdGhlcigpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBhY3RpdmVDb21wczogYWN0aXZlQ29tcHNcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcERhdGEuY2FjaGluZykge1xuICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncG9wdXBJbmZvcycsIFwiXCIpO1xuICAgIH1cbiAgICBpZiAoYm9vbGVhbiAmJiB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYWN0aXZlQ29tcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlQ29tcHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgY29tcCA9IHRoaXMuc3RhdGUuYWN0aXZlQ29tcHNbaV07XG4gICAgICAgICAgY29tcC5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgY29udGVudDogdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiXCI6IHRoaXMuc3RhdGUuY29udGVudFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICB0b2dnbGVEZXRhaWxzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHNPcGVuOiAhdGhpcy5zdGF0ZS5kZXRhaWxzT3Blbn0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnByb3BzLm1hcERhdGEuY2FjaGluZykge1xuICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncG9wdXBJbmZvcycsIFwiXCIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9jNGdQb3B1cCIsInJlcXVpcmUiLCJfYzRnTWFwc1V0aWxzIiwiQzRnUG9wdXBDb250cm9sbGVyIiwiZXhwb3J0cyIsInByb3h5IiwiX2NsYXNzQ2FsbENoZWNrMiIsIm1hcENvbnRyb2xsZXIiLCJvcHRpb25zIiwibWFwRGF0YSIsImRhdGEiLCJwb3B1cEhhbmRsaW5nIiwicGFyc2VJbnQiLCJleHRlcm5hbCIsInBvcHVwRGl2IiwicG9wdXBzIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiYWRkUG9wdXAiLCJwb3B1cENvbmZpZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInB1c2giLCJDNGdQb3B1cCIsInNldENvbnRlbnQiLCJjYWNoaW5nIiwidXRpbHMiLCJzdG9yZVZhbHVlIiwic2V0UG9wdXAiLCJyZW1vdmVQb3B1cCIsInBvcHVwIiwiZ2V0TWFwIiwibWFwIiwicmVtb3ZlT3ZlcmxheSIsInBvcHVwQ29tcG9uZW50IiwiY2xvc2UiLCJfb2wiLCJfcmVhY3REb20iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2M0Z1BvcHVwQ29udGFpbmVyIiwiUmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9nZW9tIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZjMiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicG9wdXBDb250cm9sbGVyIiwic2NvcGUiLCJwb3BVcEVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJtYXBJZCIsImNsYXNzTmFtZSIsInBvcFVwQ2xvc2VFbGVtZW50IiwialF1ZXJ5IiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9wVXBDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJwb3B1cENvbnRlbnQiLCJhdXRvUGFuIiwiT3ZlcmxheSIsImVsZW1lbnQiLCJwb3NpdGlvbmluZyIsIm9mZnNldCIsImluc2VydEZpcnN0IiwiYXV0b1BhbkFuaW1hdGlvbiIsImR1cmF0aW9uIiwiYXV0b1Bhbk1hcmdpbiIsImFkZE92ZXJsYXkiLCJhZGRDbGFzcyIsImNlbnRlciIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJwb3NpdGlvbiIsInBvcHVwT3B0aW9ucyIsIm9wZW4iLCJhbHdheXNFeHRlbmRlZCIsImhpZGVPdGhlciIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJhY3RpdmVDb21wcyIsImdldEFjdGl2ZUNvbXBvbmVudHMiLCJwb3B1cENvbnRhaW5lciIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImNvbXBvbmVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyIiwiUG9wdXBDb250YWluZXIiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhcHBlbmQiLCJjdXJyZW50UG9wdXAiLCJmZWF0dXJlIiwibGF5ZXIiLCJkaXZQb3B1cCIsImZlYXR1cmVzIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsImNvbnRlbnQiLCJsYW5nIiwib2JqUG9wdXAiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJfdHlwZW9mMiIsInByb3h5X2FwcGVuZFBvcHVwIiwiY29tcCIsImRpdiIsImNhbGxiYWNrIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJpbm5lckhUTUwiLCJnZXRHZW9tZXRyeSIsImdlb21ldHJ5Iiwic2V0UG9zaXRpb24iLCJQb2ludCIsInN0YXRlIiwiY2hpbGRyZW4iLCJjb250ZW50Tm9kZSIsImdldEVsZW1lbnQiLCJjb29yZGluYXRlcyIsImdldFR5cGUiLCJnZXRDb29yZGluYXRlcyIsImV4dGVudCIsImdldEV4dGVudCIsInJlbW92ZUNsYXNzIiwic2V0UG9zaXRpb25pbmciLCJzZXRPZmZzZXQiLCJfcmVhY3QiLCJfYzRnTWFwc0kxOG4iLCJfdHlwZW9mIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlRpdGxlYmFyIiwibGF6eSIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiZGV0YWlsc09wZW4iLCJjb25zdHN0ciIsInJvdXRlQnV0dG9ucyIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJiaW5kIiwidG9nZ2xlRGV0YWlscyIsIl9pbmhlcml0czIiLCJfdGhpczIiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiaGVhZGVyQ2xhc3MiLCJhZGRCdXR0b25zIiwiY29uZmlnIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlciIsInBvcHVwSGVhZGxpbmUiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic2V0QWRkQnV0dG9ucyIsInNldFN0YXRlIiwiYm9vbGVhbiIsIm5ld1N0YXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9