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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLFNBQUEsR0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFhYUUsa0JBQWtCLEdBQUFDLDBCQUFBO0VBRTdCLFNBQUFELG1CQUFZRSxLQUFLLEVBQUU7SUFBQSxJQUFBQyxnQkFBQSxtQkFBQUgsa0JBQUE7SUFDakIsSUFBSSxDQUFDSSxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csT0FBTyxDQUFDRCxhQUFhO0lBQ2hELElBQUksQ0FBQ0UsT0FBTyxHQUFHSixLQUFLLENBQUNHLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDRyxJQUFJO0lBQy9DLElBQUksQ0FBQ0MsYUFBYSxHQUFHQyxRQUFRLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNFLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxRQUFRO0lBQ3ZDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDbEI7RUFBQyxXQUFBQyxhQUFBLGFBQUFiLGtCQUFBO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLFFBQVFBLENBQUEsRUFBcUI7TUFBQSxJQUFwQkMsV0FBVyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO01BQ3pCLElBQUksQ0FBQ04sTUFBTSxDQUFDUyxJQUFJLENBQUMsSUFBSUMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUNwQyxJQUFJTCxXQUFXLEVBQUU7UUFDZixJQUFJLENBQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUNBLE1BQU0sQ0FBQ08sTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDSSxVQUFVLENBQUNOLFdBQVcsQ0FBQztNQUM1RDtNQUNBLElBQUksSUFBSSxDQUFDWCxPQUFPLENBQUNrQixPQUFPLEVBQUU7UUFDeEJDLG1CQUFLLENBQUNDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO01BQ3BDO0lBQ0YsQ0FBQyxDQUFDO0VBQUE7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBQ0YsU0FBQVksUUFBUUEsQ0FBQ1YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNuQixJQUFJLENBQUNBLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUlDLGtCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDdEM7TUFDQSxJQUFJLENBQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1csVUFBVSxDQUFDTixXQUFXLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0VBQUE7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBQ0YsU0FBQWEsV0FBV0EsQ0FBQSxFQUFHO01BQ1osSUFBSSxJQUFJLENBQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNpQixLQUFLLElBQUksSUFBSSxDQUFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDaUIsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1FBQzNFLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ3lCLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ2lCLEtBQUssQ0FBQztNQUN0RCxDQUFDLE1BQ0ksSUFBSSxJQUFJLENBQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNxQixjQUFjLEVBQUU7UUFDeEQsSUFBSSxDQUFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDcUIsY0FBYyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDO01BQzNDO0lBQ0Y7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0gsSUFBQUMsR0FBQSxHQUFBckMsbUJBQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFELG1CQUFBO0FBQ0EsSUFBQXNDLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQXZDLG1CQUFBO0FBQ0EsSUFBQXdDLGtCQUFBLEdBQUF4QyxtQkFBQTtBQUNBLElBQUF5QyxLQUFBLEdBQUFDLHVCQUFBLENBQUExQyxtQkFBQTtBQUNBLElBQUEyQyxLQUFBLEdBQUEzQyxtQkFBQTtBQUE4QixTQUFBNEMseUJBQUFDLENBQUEsNkJBQUFDLE9BQUEsbUJBQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLENBQUEsV0FBQUEsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsS0FBQUYsQ0FBQTtBQUFBLFNBQUFILHdCQUFBRyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLFFBQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsSUFDakI3QixRQUFRLEdBQUFyQixnQkFBQTtFQUNqQixTQUFBcUIsU0FBWXdDLGVBQWUsRUFBRTtJQUFBLElBQUEzRCxnQkFBQSxtQkFBQW1CLFFBQUE7SUFDekIsSUFBTXlDLEtBQUssR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0QsZUFBZSxHQUFHQSxlQUFlO0lBQ3RDLElBQUlFLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2hERixZQUFZLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxHQUFHTCxlQUFlLENBQUN4RCxPQUFPLENBQUM4RCxLQUFLLENBQUM7SUFDN0VKLFlBQVksQ0FBQ0ssU0FBUyxHQUFHLDhCQUE4QjtJQUV2RCxJQUFJQyxpQkFBaUIsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3hESSxpQkFBaUIsQ0FBQ0QsU0FBUyxHQUFHLDBCQUEwQjtJQUV4REUsTUFBTSxDQUFDRCxpQkFBaUIsQ0FBQyxDQUFDRSxLQUFLLENBQUMsVUFBVUMsS0FBSyxFQUFFO01BQzdDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCWixlQUFlLENBQUMxRCxhQUFhLENBQUMyQixHQUFHLENBQUNDLGFBQWEsQ0FBQytCLEtBQUssQ0FBQ2xDLEtBQUssQ0FBQztJQUNoRSxDQUFDLENBQUM7SUFFRixJQUFJOEMsWUFBWSxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDaERTLFlBQVksQ0FBQ04sU0FBUyxHQUFHLG1CQUFtQjtJQUU1Q0wsWUFBWSxDQUFDWSxXQUFXLENBQUNOLGlCQUFpQixDQUFDO0lBQzNDTixZQUFZLENBQUNZLFdBQVcsQ0FBQ0QsWUFBWSxDQUFDO0lBQ3RDLElBQUksQ0FBQ0UsWUFBWSxHQUFHRixZQUFZO0lBQ2hDLElBQUliLGVBQWUsQ0FBQ3RELGFBQWEsS0FBSyxDQUFDLElBQUlzRCxlQUFlLENBQUN0RCxhQUFhLEtBQUssQ0FBQyxFQUFFO01BQzVFLElBQUlzRSxPQUFPLEdBQUdoQixlQUFlLENBQUN0RCxhQUFhLEtBQUssQ0FBQztNQUNqRCxJQUFJLENBQUNxQixLQUFLLEdBQUcsSUFBSWtELFdBQU8sQ0FBQztRQUNyQkMsT0FBTyxFQUFFaEIsWUFBWTtRQUNyQmlCLFdBQVcsRUFBRSxlQUFlO1FBQUM7UUFDN0JDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUFFO1FBQ25CQyxXQUFXLEVBQUUsS0FBSztRQUNsQkwsT0FBTyxFQUFFQSxPQUFPO1FBQ2hCTSxnQkFBZ0IsRUFBRTtVQUNkQyxRQUFRLEVBQUU7UUFDZCxDQUFDO1FBQ0RDLGFBQWEsRUFBRTtNQUNuQixDQUFDLENBQUM7TUFDRnhCLGVBQWUsQ0FBQzFELGFBQWEsQ0FBQzJCLEdBQUcsQ0FBQ3dELFVBQVUsQ0FBQyxJQUFJLENBQUMxRCxLQUFLLENBQUM7SUFDNUQsQ0FBQyxNQUFNLElBQUlpQyxlQUFlLENBQUN0RCxhQUFhLEtBQUssQ0FBQyxFQUFFO01BQzVDK0QsTUFBTSxDQUFDUCxZQUFZLENBQUMsQ0FBQ3dCLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztNQUN6RCxJQUFJQyxNQUFNLEdBQUczQixlQUFlLENBQUMxRCxhQUFhLENBQUMyQixHQUFHLENBQUMyRCxPQUFPLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQztNQUNwRSxJQUFJLENBQUM5RCxLQUFLLEdBQUcsSUFBSWtELFdBQU8sQ0FBQztRQUNyQmEsUUFBUSxFQUFFSCxNQUFNO1FBQ2hCUixXQUFXLEVBQUUsZUFBZTtRQUM1QkQsT0FBTyxFQUFFaEIsWUFBWTtRQUNyQmtCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQkosT0FBTyxFQUFFO01BQ2IsQ0FBQyxDQUFDO01BQ0ZoQixlQUFlLENBQUMxRCxhQUFhLENBQUMyQixHQUFHLENBQUN3RCxVQUFVLENBQUMsSUFBSSxDQUFDMUQsS0FBSyxDQUFDO0lBQzVELENBQUMsTUFDSSxJQUFJaUMsZUFBZSxDQUFDdEQsYUFBYSxLQUFLLENBQUMsRUFBRTtNQUMxQyxJQUFJcUYsWUFBWSxHQUFHO1FBQ2ZDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLGNBQWMsRUFBRSxLQUFLO1FBQUM7UUFDdEJDLFNBQVMsRUFBRWxDLGVBQWUsQ0FBQzFELGFBQWEsQ0FBQzZGLG1CQUFtQjtRQUM1REMsV0FBVyxFQUFFcEMsZUFBZSxDQUFDMUQsYUFBYSxDQUFDK0YsbUJBQW1CLENBQUMsQ0FBQztRQUNoRTdGLE9BQU8sRUFBRXdELGVBQWUsQ0FBQ3hELE9BQU87UUFDaENGLGFBQWEsRUFBRTBELGVBQWUsQ0FBQzFEO01BQ25DLENBQUM7TUFFRCxJQUFJLElBQUksQ0FBQ2dHLGNBQWMsRUFBRTtRQUNyQkMsb0JBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsSUFBSSxDQUFDRixjQUFjLENBQUM7UUFDcEQsT0FBT3RDLGVBQWUsQ0FBQzFELGFBQWEsQ0FBQ21HLFVBQVUsQ0FBQzFFLEtBQUs7UUFDckQsSUFBSSxDQUFDaUMsZUFBZSxDQUFDcEQsUUFBUSxFQUFFO1VBQzNCLElBQUksQ0FBQzBGLGNBQWMsQ0FBQ0ksVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDTCxjQUFjLENBQUM7UUFDbkU7TUFDSjtNQUNBUCxZQUFZLENBQUNuRixRQUFRLEdBQUdvRCxlQUFlLENBQUNwRCxRQUFRO01BQ2hELElBQUksQ0FBQzBGLGNBQWMsR0FBR3RDLGVBQWUsQ0FBQ3BELFFBQVEsR0FBR3VELFFBQVEsQ0FBQ3lDLGFBQWEsQ0FBQyxHQUFHLEdBQUc1QyxlQUFlLENBQUN4RCxPQUFPLENBQUNLLFFBQVEsQ0FBQyxHQUFHc0QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQy9JLElBQUksQ0FBQyxJQUFJLENBQUNrQyxjQUFjLEVBQUU7UUFDdEIsSUFBSSxDQUFDQSxjQUFjLEdBQUduQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbkQyQixZQUFZLENBQUNuRixRQUFRLEdBQUcsS0FBSztNQUNqQztNQUNBLElBQUksQ0FBQ3VCLGNBQWMsR0FBR29FLG9CQUFRLENBQUNNLE1BQU0sY0FBQ3BFLEtBQUssQ0FBQzJCLGFBQWEsQ0FBQzBDLGlDQUFjLEVBQUVmLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQ08sY0FBYyxDQUFDO01BQzdHLElBQUksQ0FBQ1AsWUFBWSxDQUFDbkYsUUFBUSxFQUFFO1FBQ3hCb0QsZUFBZSxDQUFDMUQsYUFBYSxDQUFDeUcsMkJBQTJCLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNWLGNBQWMsQ0FBQztRQUNyRnRDLGVBQWUsQ0FBQzFELGFBQWEsQ0FBQzZGLG1CQUFtQixDQUFDLElBQUksQ0FBQ2MsWUFBWSxDQUFDO01BQ3hFO01BQ0EsSUFBSSxDQUFDQSxZQUFZLEdBQUcsSUFBSSxDQUFDOUUsY0FBYztNQUN2QztNQUNBNkIsZUFBZSxDQUFDMUQsYUFBYSxDQUFDbUcsVUFBVSxDQUFDMUUsS0FBSyxHQUFHLElBQUksQ0FBQ0ksY0FBYztJQUN4RTtFQUNKO0VBQUMsV0FBQXBCLGFBQUEsYUFBQVMsUUFBQTtJQUFBUixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBUSxVQUFVQSxDQUFFTixXQUFXLEVBQUU7TUFDckIsSUFBSStGLE9BQU8sR0FBRy9GLFdBQVcsQ0FBQytGLE9BQU87TUFDakMsSUFBSUMsS0FBSyxHQUFHaEcsV0FBVyxDQUFDZ0csS0FBSztNQUM3QixJQUFJcEMsWUFBWTtNQUNoQixJQUFJcUMsUUFBUTtNQUNaLElBQUlGLE9BQU8sQ0FBQzlELEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN6QixJQUFJaUUsUUFBUSxHQUFHSCxPQUFPLENBQUM5RCxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3RDLEtBQUssSUFBSVUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdUQsUUFBUSxDQUFDaEcsTUFBTSxFQUFFeUMsQ0FBQyxFQUFFLEVBQUU7VUFDdENpQixZQUFZLElBQUlwRCxtQkFBSyxDQUFDMkYsc0JBQXNCLENBQUNuRyxXQUFXLENBQUNZLEtBQUssQ0FBQ3dGLE9BQU8sRUFBRUYsUUFBUSxDQUFDdkQsQ0FBQyxDQUFDLEVBQUVxRCxLQUFLLEVBQUUsSUFBSSxDQUFDbkQsZUFBZSxDQUFDMUQsYUFBYSxDQUFDRyxJQUFJLENBQUMrRyxJQUFJLENBQUM7UUFDN0k7TUFDSixDQUFDLE1BQU07UUFDSHpDLFlBQVksR0FBR3BELG1CQUFLLENBQUMyRixzQkFBc0IsQ0FBQ25HLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDd0YsT0FBTyxFQUFFTCxPQUFPLEVBQUVDLEtBQUssRUFBRSxJQUFJLENBQUNuRCxlQUFlLENBQUMxRCxhQUFhLENBQUNHLElBQUksQ0FBQytHLElBQUksQ0FBQztNQUN4STtNQUNBSixRQUFRLEdBQUdqRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDeEMsSUFBSSxJQUFJLENBQUNKLGVBQWUsQ0FBQ3RELGFBQWEsR0FBRyxDQUFDLEVBQUU7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQ3FCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUMsRUFBRTtVQUFFO1VBQ3hCLElBQUksQ0FBQ2dDLGVBQWUsQ0FBQzFELGFBQWEsQ0FBQzJCLEdBQUcsQ0FBQ3dELFVBQVUsQ0FBQyxJQUFJLENBQUMxRCxLQUFLLENBQUM7UUFDakU7UUFDQXFGLFFBQVEsQ0FBQ0ssU0FBUyxHQUFHMUMsWUFBWTtRQUNqQyxJQUFJLENBQUNBLFlBQVksQ0FBQzBDLFNBQVMsR0FBRyxFQUFFO1FBQ2hDLElBQUksQ0FBQzFDLFlBQVksQ0FBQ0QsV0FBVyxDQUFDc0MsUUFBUSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDcEQsZUFBZSxDQUFDdEQsYUFBYSxHQUFHLENBQUMsRUFBRTtVQUN4QyxJQUFJd0csT0FBTyxDQUFDUSxXQUFXLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUlDLFFBQVEsR0FBR1QsT0FBTyxDQUFDUSxXQUFXLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUNFLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDO1VBQzlCLENBQUMsTUFBTTtZQUNIO1VBQUE7UUFFUixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMzRCxlQUFlLENBQUN0RCxhQUFhLElBQUksQ0FBQyxFQUFFO1VBQ2hELElBQUlpRixNQUFNLEdBQUcsSUFBSSxDQUFDM0IsZUFBZSxDQUFDMUQsYUFBYSxDQUFDMkIsR0FBRyxDQUFDMkQsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7VUFDekUsSUFBSThCLFNBQVEsR0FBRyxJQUFJRSxXQUFLLENBQUNsQyxNQUFNLENBQUM7VUFDaEMsSUFBSSxDQUFDaUMsV0FBVyxDQUFDakMsTUFBTSxDQUFDO1FBQzVCO01BQ0osQ0FBQyxNQUNJO1FBQ0QsSUFBSSxJQUFJLENBQUN4RCxjQUFjLEVBQUU7VUFDckIsSUFBSWlFLFdBQVcsR0FBRyxJQUFJLENBQUNwQyxlQUFlLENBQUMxRCxhQUFhLENBQUMrRixtQkFBbUIsQ0FBQyxDQUFDO1VBQzFFLElBQUksQ0FBQyxJQUFJLENBQUNsRSxjQUFjLENBQUMyRixLQUFLLENBQUM5QixJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDN0QsY0FBYyxDQUFDNkQsSUFBSSxDQUFDSSxXQUFXLENBQUM7VUFDekM7VUFFQSxJQUFJLENBQUNqRSxjQUFjLENBQUNWLFVBQVUsQ0FBQ3NELFlBQVksQ0FBQztRQUNoRDtNQUNKO01BQ0EsSUFBSWdELE1BQU0sQ0FBQ0MsWUFBWSxLQUFLMUcsU0FBUyxJQUFJLElBQUEyRyxRQUFBLGFBQU9GLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDRSxpQkFBaUIsTUFBSyxRQUFRLEVBQUU7UUFDaEd2RyxtQkFBSyxDQUFDd0csaUJBQWlCLENBQUNKLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDRSxpQkFBaUIsRUFBRTtVQUMzRG5HLEtBQUssRUFBRVosV0FBVztVQUNsQm9HLE9BQU8sRUFBRXhDLFlBQVk7VUFDckJ6RSxhQUFhLEVBQUUsSUFBSSxDQUFDMEQsZUFBZSxDQUFDMUQsYUFBYTtVQUNqRDhILElBQUksRUFBRSxJQUFJLENBQUNqRyxjQUFjLElBQUksSUFBSTtVQUNqQ2tHLEdBQUcsRUFBRWpCO1FBQ1QsQ0FBQyxDQUFDO01BQ047SUFDSjtFQUFDO0lBQUFwRyxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBMkcsV0FBV0EsQ0FBRUQsUUFBUSxFQUFFO01BQ25CLElBQUkxRixHQUFHLEdBQUcsSUFBSSxDQUFDK0IsZUFBZSxDQUFDMUQsYUFBYSxDQUFDMkIsR0FBRztNQUNoRCxJQUFJaUQsT0FBTyxHQUFHLElBQUksQ0FBQ25ELEtBQUssQ0FBQ3VHLFVBQVUsQ0FBQyxDQUFDO01BQ3JDLElBQUlDLFdBQVcsR0FBRyxJQUFJO01BQ3RCLElBQUlaLFFBQVEsSUFBSUEsUUFBUSxDQUFDYSxPQUFPLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtRQUM1Q0QsV0FBVyxHQUFHWixRQUFRLENBQUNjLGNBQWMsQ0FBQyxDQUFDO01BQzNDLENBQUMsTUFDSSxJQUFJZCxRQUFRLEVBQUU7UUFDZixJQUFJZSxNQUFNLEdBQUdmLFFBQVEsQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDSixXQUFXLEdBQUcsQ0FBQyxDQUFDRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFFO01BQzdFLENBQUMsTUFBTTtRQUNISCxXQUFXLEdBQUd0RyxHQUFHLENBQUMyRCxPQUFPLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQztNQUMzQztNQUNBLElBQUlGLE1BQU0sR0FBRzFELEdBQUcsQ0FBQzJELE9BQU8sQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDO01BQ3RDLElBQUlWLFdBQVcsR0FBRyxFQUFFO01BQ3BCLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7TUFDbEIsSUFBSU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJNEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdCcEQsV0FBVyxJQUFJLFFBQVE7TUFDM0IsQ0FBQyxNQUNJO1FBQ0RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ2RELFdBQVcsSUFBSSxLQUFLO01BQ3hCO01BQ0EsSUFBSVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJNEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdCbkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmRCxXQUFXLElBQUksT0FBTztNQUMxQixDQUFDLE1BQ0k7UUFDREMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7UUFDZkQsV0FBVyxJQUFJLFFBQVE7TUFDM0I7TUFDQVYsTUFBTSxDQUFDUyxPQUFPLENBQUMsQ0FBQzBELFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FDdkNBLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUM3QkEsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQy9CQSxXQUFXLENBQUMsbUJBQW1CLENBQUM7TUFDckNuRSxNQUFNLENBQUNTLE9BQU8sQ0FBQyxDQUFDUSxRQUFRLENBQUMsT0FBTyxHQUFHUCxXQUFXLENBQUM7TUFDL0MsSUFBSSxDQUFDcEQsS0FBSyxDQUFDOEcsY0FBYyxDQUFDMUQsV0FBVyxDQUFDO01BQ3RDLElBQUksQ0FBQ3BELEtBQUssQ0FBQytHLFNBQVMsQ0FBQzFELE1BQU0sQ0FBQztNQUM1QixJQUFJLENBQUNyRCxLQUFLLENBQUM2RixXQUFXLENBQUNXLFdBQVcsQ0FBQztJQUV2QztFQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tMLElBQUFRLE1BQUEsR0FBQXJHLHVCQUFBLENBQUExQyxtQkFBQTtBQUNBLElBQUFnSixZQUFBLEdBQUFoSixtQkFBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUQsbUJBQUE7QUFBeUMsU0FBQTRDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSCx3QkFBQUcsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBb0csT0FBQSxDQUFBcEcsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFHLEdBQUEsQ0FBQU4sQ0FBQSxVQUFBRyxDQUFBLENBQUFJLEdBQUEsQ0FBQVAsQ0FBQSxPQUFBUSxDQUFBLEtBQUFDLFNBQUEsVUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLGNBQUEsSUFBQUQsTUFBQSxDQUFBRSx3QkFBQSxXQUFBQyxDQUFBLElBQUFkLENBQUEsb0JBQUFjLENBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEsU0FBQUcsQ0FBQSxHQUFBUCxDQUFBLEdBQUFDLE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQWIsQ0FBQSxFQUFBYyxDQUFBLFVBQUFHLENBQUEsS0FBQUEsQ0FBQSxDQUFBVixHQUFBLElBQUFVLENBQUEsQ0FBQUMsR0FBQSxJQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUosQ0FBQSxFQUFBTSxDQUFBLEVBQUFHLENBQUEsSUFBQVQsQ0FBQSxDQUFBTSxDQUFBLElBQUFkLENBQUEsQ0FBQWMsQ0FBQSxZQUFBTixDQUFBLGNBQUFSLENBQUEsRUFBQUcsQ0FBQSxJQUFBQSxDQUFBLENBQUFlLEdBQUEsQ0FBQWxCLENBQUEsRUFBQVEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQTZGLFdBQUFsRyxDQUFBLEVBQUFtRyxDQUFBLEVBQUF0RyxDQUFBLFdBQUFzRyxDQUFBLE9BQUFDLGdCQUFBLGFBQUFELENBQUEsT0FBQUUsMkJBQUEsYUFBQXJHLENBQUEsRUFBQXNHLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUF0RyxDQUFBLFlBQUF1RyxnQkFBQSxhQUFBcEcsQ0FBQSxFQUFBeUcsV0FBQSxJQUFBTixDQUFBLENBQUFPLEtBQUEsQ0FBQTFHLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF5RywwQkFBQSxjQUFBdEcsQ0FBQSxJQUFBMkcsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWhHLElBQUEsQ0FBQTBGLE9BQUEsQ0FBQUMsU0FBQSxDQUFBRyxPQUFBLGlDQUFBM0csQ0FBQSxhQUFBc0cseUJBQUEsWUFBQUEsMEJBQUEsYUFBQXRHLENBQUEsVUFaekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTThHLFFBQVEsZ0JBQUdySCxpQkFBSyxDQUFDc0gsSUFBSSxDQUFDO0VBQUEsT0FBTSxtT0FBNEI7QUFBQSxFQUFDO0FBQUMsSUFFbkRqRCxjQUFjLEdBQUEzRyxzQkFBQSwwQkFBQTZKLFVBQUE7RUFFekIsU0FBQWxELGVBQVltRCxLQUFLLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBQTdKLGdCQUFBLG1CQUFBeUcsY0FBQTtJQUNqQm9ELEtBQUEsR0FBQWhCLFVBQUEsT0FBQXBDLGNBQUEsR0FBTW1ELEtBQUs7SUFFWEMsS0FBQSxDQUFLcEMsS0FBSyxHQUFHO01BQ1hQLE9BQU8sRUFBRSxFQUFFO01BQ1h2QixJQUFJLEVBQUVpRSxLQUFLLENBQUNqRSxJQUFJO01BQ2hCbUUsV0FBVyxFQUFFLEtBQUs7TUFDbEIvRCxXQUFXLEVBQUU2RCxLQUFLLENBQUM3RCxXQUFXO01BQzlCZ0UsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNESCxLQUFLLENBQUMvRCxTQUFTLENBQUFnRSxLQUFLLENBQUM7SUFDckJBLEtBQUEsQ0FBS0csWUFBWSxHQUFHLEVBQUU7SUFDdEJILEtBQUEsQ0FBS0ksUUFBUSxHQUFHLElBQUFDLHdCQUFXLEVBQUNMLEtBQUEsQ0FBS0QsS0FBSyxDQUFDekosT0FBTyxDQUFDO0lBQy9DMEosS0FBQSxDQUFLOUgsS0FBSyxHQUFHOEgsS0FBQSxDQUFLOUgsS0FBSyxDQUFDb0ksSUFBSSxDQUFBTixLQUFLLENBQUM7SUFDbENBLEtBQUEsQ0FBS08sYUFBYSxHQUFHUCxLQUFBLENBQUtPLGFBQWEsQ0FBQ0QsSUFBSSxDQUFBTixLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBRXJEO0VBQUMsSUFBQVEsVUFBQSxhQUFBNUQsY0FBQSxFQUFBa0QsVUFBQTtFQUFBLFdBQUFqSixhQUFBLGFBQUErRixjQUFBO0lBQUE5RixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNEYsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQThELE1BQUE7TUFDUCxJQUFJQyxjQUFjLEdBQUcsRUFBRTtNQUN2QixJQUFJQyxXQUFXLEdBQUcsRUFBRTtNQUNwQixJQUFJdEcsU0FBUyxHQUFHLElBQUksQ0FBQzBGLEtBQUssQ0FBQ3JKLFFBQVEsR0FBRyxzQkFBc0IsR0FBRyxvQ0FBb0M7TUFFbkcsSUFBSSxJQUFJLENBQUNrSCxLQUFLLENBQUM5QixJQUFJLEVBQUU7UUFDbkJ6QixTQUFTLElBQUksV0FBVztNQUMxQixDQUFDLE1BQU07UUFDTEEsU0FBUyxJQUFJLFdBQVc7TUFDMUI7TUFDQSxJQUFJLElBQUksQ0FBQzBGLEtBQUssQ0FBQ2hFLGNBQWMsRUFBRTtRQUM3QjFCLFNBQVMsSUFBSSxtQkFBbUI7TUFDbEMsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxJQUFJLENBQUN1RCxLQUFLLENBQUNxQyxXQUFXLEVBQUU7VUFDMUI1RixTQUFTLElBQUksbUJBQW1CO1FBQ2xDLENBQUMsTUFBTTtVQUNMQSxTQUFTLElBQUkscUJBQXFCO1FBQ3BDO01BQ0Y7TUFDQSxJQUFJdUcsV0FBVyxHQUFHLGtCQUFrQjtNQUNwQyxJQUFJQyxVQUFVLGdCQUFHaEMsTUFBQSxZQUFBM0UsYUFBQSxZQUFLLENBQUM7TUFDdkIsSUFBSSxJQUFJLENBQUMwRCxLQUFLLENBQUNzQyxRQUFRLEVBQUU7UUFDdkJVLFdBQVcsSUFBSSxjQUFjO1FBQzdCQyxVQUFVLGdCQUFHaEMsTUFBQSxZQUFBM0UsYUFBQSxNQUFNMEQsS0FBSyxDQUFDc0MsUUFBUTtVQUFDWSxNQUFNLEVBQUUsSUFBSSxDQUFDbEQsS0FBSyxDQUFDa0Q7UUFBTyxDQUFDLENBQUM7TUFDaEU7TUFDQSxJQUFJLElBQUksQ0FBQ2xELEtBQUssQ0FBQ1AsT0FBTyxFQUFFO1FBQ3RCLG9CQUNJd0IsTUFBQSxZQUFBM0UsYUFBQTtVQUFLRyxTQUFTLEVBQUVBO1FBQVUsZ0JBQ3hCd0UsTUFBQSxZQUFBM0UsYUFBQTtVQUFLRyxTQUFTLEVBQUU7UUFBb0IsZ0JBQ2xDd0UsTUFBQSxZQUFBM0UsYUFBQSxDQUFDMkUsTUFBQSxDQUFBa0MsUUFBUTtVQUFDQyxRQUFRLGVBQUVuQyxNQUFBLFlBQUEzRSxhQUFBLGNBQUssWUFBZTtRQUFFLGdCQUN4QzJFLE1BQUEsWUFBQTNFLGFBQUEsQ0FBQzBGLFFBQVE7VUFBQ3FCLFlBQVksRUFBRUwsV0FBWTtVQUFDQSxXQUFXLEVBQUUsMkJBQTRCO1VBQUNNLE1BQU0sRUFBRSxJQUFJLENBQUNuQixLQUFLLENBQUN6SixPQUFPLENBQUM2SyxhQUFhLElBQUksRUFBRztVQUNwSEMsYUFBYSxFQUFFLG9CQUFxQjtVQUFDQyxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBQSxFQUFRO1lBQUNaLE1BQUksQ0FBQ3ZJLEtBQUssQ0FBQyxJQUFJLENBQUM7VUFBQSxDQUFFO1VBQUNvSixhQUFhLEVBQUUsSUFBSSxDQUFDbEIsUUFBUSxDQUFDbUIsS0FBTTtVQUM5R2IsY0FBYyxFQUFFLEVBQUc7VUFBQ0MsV0FBVyxFQUFFO1FBQUcsR0FDM0NFLFVBQ08sQ0FDRixDQUFDLGVBQ1hoQyxNQUFBLFlBQUEzRSxhQUFBO1VBQUtHLFNBQVMsRUFBRSxtQkFBb0I7VUFBQ21ILHVCQUF1QixFQUFFO1lBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUM3RCxLQUFLLENBQUNQO1VBQU87UUFBRSxDQUFDLENBRXpGLENBQ0YsQ0FBQztNQUVaLENBQUMsTUFDSTtRQUNILE9BQU8sSUFBSTtNQUNiO0lBQ0Y7RUFBQztJQUFBdkcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJLLGFBQWFBLENBQUN4QixRQUFRLEVBQUVZLE1BQU0sRUFBRTtNQUM5QixJQUFJLENBQUNhLFFBQVEsQ0FBQztRQUNaYixNQUFNLEVBQUVBLE1BQU07UUFDZFosUUFBUSxFQUFFQTtNQUNaLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXBKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFRLFVBQVVBLENBQUM4RixPQUFPLEVBQUU7TUFDbEIsSUFBSSxDQUFDc0UsUUFBUSxDQUFDO1FBQUN0RSxPQUFPLEVBQUVBO01BQU8sQ0FBQyxDQUFDO0lBQ25DO0VBQUM7SUFBQXZHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErRSxJQUFJQSxDQUFDSSxXQUFXLEVBQUU7TUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQzZELEtBQUssQ0FBQ3JKLFFBQVEsRUFBRTtRQUN4QixJQUFJLENBQUNxSixLQUFLLENBQUMvRCxTQUFTLENBQUMsQ0FBQztNQUN4QjtNQUNBLElBQUksQ0FBQzJGLFFBQVEsQ0FBQztRQUNaN0YsSUFBSSxFQUFFLElBQUk7UUFDVkksV0FBVyxFQUFFQTtNQUNmLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXBGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtQixLQUFLQSxDQUFBLEVBQWtCO01BQUEsSUFBakIwSixRQUFPLEdBQUExSyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxLQUFLO01BQ25CLElBQUksSUFBSSxDQUFDNkksS0FBSyxDQUFDekosT0FBTyxDQUFDa0IsT0FBTyxFQUFFO1FBQzlCQyxtQkFBSyxDQUFDQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztNQUNwQztNQUNBLElBQUlrSyxRQUFPLElBQUksSUFBSSxDQUFDaEUsS0FBSyxDQUFDMUIsV0FBVyxFQUFFO1FBQ3JDLEtBQUssSUFBSXRDLENBQUMsSUFBSSxJQUFJLENBQUNnRSxLQUFLLENBQUMxQixXQUFXLEVBQUU7VUFDcEMsSUFBSSxJQUFJLENBQUMwQixLQUFLLENBQUMxQixXQUFXLENBQUN4QyxjQUFjLENBQUNFLENBQUMsQ0FBQyxFQUFFO1lBQzVDLElBQUlzRSxJQUFJLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUMxQixXQUFXLENBQUN0QyxDQUFDLENBQUM7WUFDcENzRSxJQUFJLENBQUN5RCxRQUFRLENBQUM7Y0FBQzdGLElBQUksRUFBRTtZQUFJLENBQUMsQ0FBQztVQUM3QjtRQUNGO01BQ0Y7TUFDQSxJQUFJK0YsUUFBUSxHQUFHO1FBQ2IvRixJQUFJLEVBQUUsS0FBSztRQUNYdUIsT0FBTyxFQUFFLElBQUksQ0FBQzBDLEtBQUssQ0FBQ3JKLFFBQVEsR0FBRyxFQUFFLEdBQUUsSUFBSSxDQUFDa0gsS0FBSyxDQUFDUDtNQUNoRCxDQUFDO01BQ0QsSUFBSSxDQUFDc0UsUUFBUSxDQUFDRSxRQUFRLENBQUM7SUFDekI7RUFBQztJQUFBL0ssR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXdKLGFBQWFBLENBQUEsRUFBRztNQUNkLElBQUksQ0FBQ29CLFFBQVEsQ0FBQztRQUFDMUIsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDckMsS0FBSyxDQUFDcUM7TUFBVyxDQUFDLENBQUM7SUFDdkQ7RUFBQztJQUFBbkosR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQStLLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJRCxTQUFTLENBQUNsRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM4QixLQUFLLENBQUM5QixJQUFJLElBQUksSUFBSSxDQUFDaUUsS0FBSyxDQUFDekosT0FBTyxDQUFDa0IsT0FBTyxFQUFFO1FBQ3BFQyxtQkFBSyxDQUFDQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztNQUNwQztJQUNGO0VBQUM7QUFBQSxFQWxIaUN3SyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXBvcHVwLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQge0M0Z1BvcHVwfSBmcm9tICcuL2M0Zy1wb3B1cCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJ1xuXG5leHBvcnQgY2xhc3MgQzRnUG9wdXBDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihwcm94eSkge1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLm1hcERhdGEgPSBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICB0aGlzLnBvcHVwSGFuZGxpbmcgPSBwYXJzZUludCh0aGlzLm1hcERhdGEucG9wdXBIYW5kbGluZywgMTApO1xuICAgIHRoaXMuZXh0ZXJuYWwgPSAhIXRoaXMubWFwRGF0YS5wb3B1cERpdjtcbiAgICB0aGlzLnBvcHVwcyA9IFtdO1xuICB9XG5cbiAgYWRkUG9wdXAocG9wdXBDb25maWcgPSBudWxsKSB7XG4gICAgdGhpcy5wb3B1cHMucHVzaChuZXcgQzRnUG9wdXAodGhpcykpO1xuICAgIGlmIChwb3B1cENvbmZpZykge1xuICAgICAgdGhpcy5wb3B1cHNbdGhpcy5wb3B1cHMubGVuZ3RoIC0xXS5zZXRDb250ZW50KHBvcHVwQ29uZmlnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFwRGF0YS5jYWNoaW5nKSB7XG4gICAgICB1dGlscy5zdG9yZVZhbHVlKCdwb3B1cEluZm9zJywgXCJcIik7XG4gICAgfVxuICB9IC8vIGVuZCBvZiBcImFkZFBvcFVwKClcIlxuICBzZXRQb3B1cChwb3B1cENvbmZpZykge1xuICAgIGlmICghdGhpcy5wb3B1cHNbMF0pIHtcbiAgICAgIHRoaXMucG9wdXBzLnB1c2gobmV3IEM0Z1BvcHVwKHRoaXMpKTtcbiAgICB9XG4gICAgdGhpcy5wb3B1cHNbMF0uc2V0Q29udGVudChwb3B1cENvbmZpZyk7XG4gIH0gLy8gZW5kIG9mIFwic2V0UG9wdXAoKVwiXG4gIHJlbW92ZVBvcHVwKCkge1xuICAgIGlmICh0aGlzLnBvcHVwc1swXSAmJiB0aGlzLnBvcHVwc1swXS5wb3B1cCAmJiB0aGlzLnBvcHVwc1swXS5wb3B1cC5nZXRNYXAoKSkge1xuICAgICAgdGhpcy5tYXBEYXRhLm1hcC5yZW1vdmVPdmVybGF5KHRoaXMucG9wdXBzWzBdLnBvcHVwKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wb3B1cHNbMF0gJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXBDb21wb25lbnQpIHtcbiAgICAgIHRoaXMucG9wdXBzWzBdLnBvcHVwQ29tcG9uZW50LmNsb3NlKHRydWUpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7T3ZlcmxheX0gZnJvbSAnb2wnO1xuaW1wb3J0IHt1dGlsc30gZnJvbSAnLi9jNGctbWFwcy11dGlscyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UG9wdXBDb250YWluZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvYzRnLXBvcHVwLWNvbnRhaW5lclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuZXhwb3J0IGNsYXNzIEM0Z1BvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cENvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvcHVwQ29udHJvbGxlciA9IHBvcHVwQ29udHJvbGxlcjtcbiAgICAgICAgbGV0IHBvcFVwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BVcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjNGdfcG9wdXBfJyArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLm1hcElkKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtd3JhcHBlciBjNGctYWN0aXZlJztcblxuICAgICAgICBsZXQgcG9wVXBDbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcG9wVXBDbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gJ2M0Zy1wb3B1cC1jbG9zZSBjNGctaWNvbic7XG5cbiAgICAgICAgalF1ZXJ5KHBvcFVwQ2xvc2VFbGVtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlT3ZlcmxheShzY29wZS5wb3B1cCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBDb250ZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY29udGVudCc7XG5cbiAgICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ2xvc2VFbGVtZW50KTtcbiAgICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ29udGVudCk7XG4gICAgICAgIHRoaXMucG9wdXBDb250ZW50ID0gcG9wVXBDb250ZW50O1xuICAgICAgICBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDEgfHwgcG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDApIHtcbiAgICAgICAgICAgIGxldCBhdXRvUGFuID0gcG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDE7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHBvcFVwRWxlbWVudCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbmluZzogJ2NlbnRlci1jZW50ZXInLC8vJ2JvdHRvbS1sZWZ0JyxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFstNTAsIDUwXSwgLy8tNTAsIDBcbiAgICAgICAgICAgICAgICBpbnNlcnRGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogYXV0b1BhbixcbiAgICAgICAgICAgICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dG9QYW5NYXJnaW46IDIwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuYWRkT3ZlcmxheSh0aGlzLnBvcHVwKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3B1cENvbnRyb2xsZXIucG9wdXBIYW5kbGluZyA9PT0gMikge1xuICAgICAgICAgICAgalF1ZXJ5KHBvcFVwRWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy1wb3B1cC13cmFwcGVyLW5vbm9zZScpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdjZW50ZXItY2VudGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHdheXNFeHRlbmRlZDogZmFsc2UsLy90aGlzLm1hcERhdGEub3BlbkRpcmVjdGx5LFxuICAgICAgICAgICAgICAgIGhpZGVPdGhlcjogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21wczogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuZ2V0QWN0aXZlQ29tcG9uZW50cygpLFxuICAgICAgICAgICAgICAgIG1hcERhdGE6IHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLFxuICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI6IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wb3B1cENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmNvbXBvbmVudHMucG9wdXA7XG4gICAgICAgICAgICAgICAgaWYgKCFwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IHBvcHVwQ29udHJvbGxlci5leHRlcm5hbDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcG9wdXBDb250cm9sbGVyLm1hcERhdGEucG9wdXBEaXYpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBPcHRpb25zLmV4dGVybmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDb250YWluZXIsIHBvcHVwT3B0aW9ucyksIHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cE9wdGlvbnMuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQuYXBwZW5kKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcy5jdXJyZW50UG9wdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9wdXAgPSB0aGlzLnBvcHVwQ29tcG9uZW50O1xuICAgICAgICAgICAgLy8gY2xvc2Ugb3BlbiBzaWRlYm9hcmRzXG4gICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRDb250ZW50IChwb3B1cENvbmZpZykge1xuICAgICAgICBsZXQgZmVhdHVyZSA9IHBvcHVwQ29uZmlnLmZlYXR1cmU7XG4gICAgICAgIGxldCBsYXllciA9IHBvcHVwQ29uZmlnLmxheWVyO1xuICAgICAgICBsZXQgcG9wdXBDb250ZW50O1xuICAgICAgICBsZXQgZGl2UG9wdXA7XG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSkge1xuICAgICAgICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250ZW50ICs9IHV0aWxzLnJlcGxhY2VBbGxQbGFjZWhvbGRlcnMocG9wdXBDb25maWcucG9wdXAuY29udGVudCwgZmVhdHVyZXNbaV0sIGxheWVyLCB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmRhdGEubGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3B1cENvbnRlbnQgPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmUsIGxheWVyLCB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmRhdGEubGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZGl2UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucG9wdXAuZ2V0TWFwKCkpIHsgLy9wb3B1cCBub3QgYWxyZWFkeSBpbiB0aGUgbWFwXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuYWRkT3ZlcmxheSh0aGlzLnBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdlBvcHVwLmlubmVySFRNTCA9IHBvcHVwQ29udGVudDtcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2UG9wdXApO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPCAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVG9ETyBsb2FkIGZlYXR1cmUgY29vcmRpbmF0ZXMgZm9yIGdlb21ldHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBQb2ludChjZW50ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvbXBzID0gdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5nZXRBY3RpdmVDb21wb25lbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29tcG9uZW50LnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKGFjdGl2ZUNvbXBzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29tcG9uZW50LnNldENvbnRlbnQocG9wdXBDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCwge1xuICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cENvbmZpZyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBwb3B1cENvbnRlbnQsXG4gICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBjb21wOiB0aGlzLnBvcHVwQ29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgICAgICAgICAgZGl2OiBkaXZQb3B1cFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UG9zaXRpb24gKGdlb21ldHJ5KSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcDtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvcHVwLmdldEVsZW1lbnQoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdlb21ldHJ5KSB7XG4gICAgICAgICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMixdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjZW50ZXIgPSBtYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgcG9zaXRpb25pbmcgPSBcIlwiO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gWzAsMF07XG4gICAgICAgIGlmIChjZW50ZXJbMV0gPj0gY29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwiYm90dG9tXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMV0gPSAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nICs9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbnRlclswXSA+PSBjb29yZGluYXRlc1swXSkge1xuICAgICAgICAgICAgb2Zmc2V0WzBdID0gLTUwO1xuICAgICAgICAgICAgcG9zaXRpb25pbmcgKz0gXCItbGVmdFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXRbMF0gPSAxMDA7XG4gICAgICAgICAgICBwb3NpdGlvbmluZyArPSBcIi1yaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtbGVmdFwiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwibm9zZS10b3AtcmlnaHRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLWxlZnRcIilcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcIm5vc2UtYm90dG9tLXJpZ2h0XCIpO1xuICAgICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoXCJub3NlLVwiICsgcG9zaXRpb25pbmcpXG4gICAgICAgIHRoaXMucG9wdXAuc2V0UG9zaXRpb25pbmcocG9zaXRpb25pbmcpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldE9mZnNldChvZmZzZXQpO1xuICAgICAgICB0aGlzLnBvcHVwLnNldFBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuLy4uL2M0Zy1tYXBzLXV0aWxzJ1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBjbGFzcyBQb3B1cENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4sXG4gICAgICBkZXRhaWxzT3BlbjogZmFsc2UsXG4gICAgICBhY3RpdmVDb21wczogcHJvcHMuYWN0aXZlQ29tcHMsXG4gICAgICBjb25zdHN0cjogZmFsc2VcbiAgICB9O1xuICAgIHByb3BzLmhpZGVPdGhlcih0aGlzKTtcbiAgICB0aGlzLnJvdXRlQnV0dG9ucyA9IFwiXCI7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwRGF0YSk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZURldGFpbHMgPSB0aGlzLnRvZ2dsZURldGFpbHMuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkZXRhaWxCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGRldGFpbEJ0bkNiID0gXCJcIjtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiYzRnLXBvcHVwLWNvbnRhaW5lciBcIiA6IFwiYzRnLXNpZGVib2FyZCBjNGctcG9wdXAtY29udGFpbmVyIFwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLW9wZW4gXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5hbHdheXNFeHRlbmRlZCkge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0YWlsc09wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLW9wZW5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1jbG9zZWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhlYWRlckNsYXNzID0gXCJjNGctcG9wdXAtaGVhZGVyXCI7XG4gICAgbGV0IGFkZEJ1dHRvbnMgPSA8ZGl2Lz47XG4gICAgaWYgKHRoaXMuc3RhdGUuY29uc3RzdHIpIHtcbiAgICAgIGhlYWRlckNsYXNzICs9IFwiIGM0Zy1yb3V0aW5nXCI7XG4gICAgICBhZGRCdXR0b25zID0gPHRoaXMuc3RhdGUuY29uc3RzdHIgY29uZmlnPXt0aGlzLnN0YXRlLmNvbmZpZ30vPjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC13cmFwcGVyXCJ9PlxuICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17aGVhZGVyQ2xhc3N9IGhlYWRlckNsYXNzPXtcImM0Zy1wb3B1cC1oZWFkZXItaGVhZGxpbmVcIn0gaGVhZGVyPXt0aGlzLnByb3BzLm1hcERhdGEucG9wdXBIZWFkbGluZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXsoKSA9PiB7dGhpcy5jbG9zZSh0cnVlKX19IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ3VhZ2UuQ0xPU0V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0+XG4gICAgICAgICAgICAgICAgICB7YWRkQnV0dG9uc31cbiAgICAgICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcG9wdXAtY29udGVudFwifSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5zdGF0ZS5jb250ZW50fX0vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0QWRkQnV0dG9ucyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogY29udGVudH0pO1xuICB9XG5cbiAgb3BlbihhY3RpdmVDb21wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5leHRlcm5hbCkge1xuICAgICAgdGhpcy5wcm9wcy5oaWRlT3RoZXIoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYWN0aXZlQ29tcHM6IGFjdGl2ZUNvbXBzXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZShib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gICAgaWYgKGJvb2xlYW4gJiYgdGhpcy5zdGF0ZS5hY3RpdmVDb21wcykge1xuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGNvbXAgPSB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBzW2ldO1xuICAgICAgICAgIGNvbXAuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuZXh0ZXJuYWwgPyBcIlwiOiB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgdG9nZ2xlRGV0YWlscygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzT3BlbjogIXRoaXMuc3RhdGUuZGV0YWlsc09wZW59KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5wcm9wcy5tYXBEYXRhLmNhY2hpbmcpIHtcbiAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BvcHVwSW5mb3MnLCBcIlwiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfYzRnUG9wdXAiLCJyZXF1aXJlIiwiX2M0Z01hcHNVdGlscyIsIkM0Z1BvcHVwQ29udHJvbGxlciIsImV4cG9ydHMiLCJwcm94eSIsIl9jbGFzc0NhbGxDaGVjazIiLCJtYXBDb250cm9sbGVyIiwib3B0aW9ucyIsIm1hcERhdGEiLCJkYXRhIiwicG9wdXBIYW5kbGluZyIsInBhcnNlSW50IiwiZXh0ZXJuYWwiLCJwb3B1cERpdiIsInBvcHVwcyIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImFkZFBvcHVwIiwicG9wdXBDb25maWciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQzRnUG9wdXAiLCJzZXRDb250ZW50IiwiY2FjaGluZyIsInV0aWxzIiwic3RvcmVWYWx1ZSIsInNldFBvcHVwIiwicmVtb3ZlUG9wdXAiLCJwb3B1cCIsImdldE1hcCIsIm1hcCIsInJlbW92ZU92ZXJsYXkiLCJwb3B1cENvbXBvbmVudCIsImNsb3NlIiwiX29sIiwiX3JlYWN0RG9tIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jNGdQb3B1cENvbnRhaW5lciIsIlJlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfZ2VvbSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZjMiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJwb3B1cENvbnRyb2xsZXIiLCJzY29wZSIsInBvcFVwRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm1hcElkIiwiY2xhc3NOYW1lIiwicG9wVXBDbG9zZUVsZW1lbnQiLCJqUXVlcnkiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3BVcENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBvcHVwQ29udGVudCIsImF1dG9QYW4iLCJPdmVybGF5IiwiZWxlbWVudCIsInBvc2l0aW9uaW5nIiwib2Zmc2V0IiwiaW5zZXJ0Rmlyc3QiLCJhdXRvUGFuQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJhdXRvUGFuTWFyZ2luIiwiYWRkT3ZlcmxheSIsImFkZENsYXNzIiwiY2VudGVyIiwiZ2V0VmlldyIsImdldENlbnRlciIsInBvc2l0aW9uIiwicG9wdXBPcHRpb25zIiwib3BlbiIsImFsd2F5c0V4dGVuZGVkIiwiaGlkZU90aGVyIiwiaGlkZU90aGVyQ29tcG9uZW50cyIsImFjdGl2ZUNvbXBzIiwiZ2V0QWN0aXZlQ29tcG9uZW50cyIsInBvcHVwQ29udGFpbmVyIiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiY29tcG9uZW50cyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJQb3B1cENvbnRhaW5lciIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsImFwcGVuZCIsImN1cnJlbnRQb3B1cCIsImZlYXR1cmUiLCJsYXllciIsImRpdlBvcHVwIiwiZmVhdHVyZXMiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwiY29udGVudCIsImxhbmciLCJpbm5lckhUTUwiLCJnZXRHZW9tZXRyeSIsImdlb21ldHJ5Iiwic2V0UG9zaXRpb24iLCJQb2ludCIsInN0YXRlIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiX3R5cGVvZjIiLCJwcm94eV9hcHBlbmRQb3B1cCIsImNhbGxIb29rRnVuY3Rpb25zIiwiY29tcCIsImRpdiIsImdldEVsZW1lbnQiLCJjb29yZGluYXRlcyIsImdldFR5cGUiLCJnZXRDb29yZGluYXRlcyIsImV4dGVudCIsImdldEV4dGVudCIsInJlbW92ZUNsYXNzIiwic2V0UG9zaXRpb25pbmciLCJzZXRPZmZzZXQiLCJfcmVhY3QiLCJfYzRnTWFwc0kxOG4iLCJfdHlwZW9mIiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJUaXRsZWJhciIsImxhenkiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsImRldGFpbHNPcGVuIiwiY29uc3RzdHIiLCJyb3V0ZUJ1dHRvbnMiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiYmluZCIsInRvZ2dsZURldGFpbHMiLCJfaW5oZXJpdHMyIiwiX3RoaXMyIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImhlYWRlckNsYXNzIiwiYWRkQnV0dG9ucyIsImNvbmZpZyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXIiLCJwb3B1cEhlYWRsaW5lIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInNldEFkZEJ1dHRvbnMiLCJzZXRTdGF0ZSIsImJvb2xlYW4iLCJuZXdTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==