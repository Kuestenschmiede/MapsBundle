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

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gPopupController = /*#__PURE__*/function () {
  function C4gPopupController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gPopupController);
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
    this.popupHandling = parseInt(this.mapData.popupHandling, 10);
    this.external = !!this.mapData.popupDiv;
    this.popups = [];
  }

  (0, _createClass2["default"])(C4gPopupController, [{
    key: "addPopup",
    value: function addPopup() {
      var popupConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.popups.push(new _c4gPopup.C4gPopup(this));

      if (popupConfig) {
        this.popups[this.popups.length - 1].setContent(popupConfig);
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
      }
    }
  }]);
  return C4gPopupController;
}();

exports.C4gPopupController = C4gPopupController;

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var C4gPopup = /*#__PURE__*/function () {
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
        positioning: 'bottom-left',
        offset: [-50, 0],
        insertFirst: false,
        autoPan: autoPan,
        autoPanAnimation: {
          duration: 250
        },
        autoPanMargin: 20
      });
      popupController.mapController.map.addOverlay(this.popup);
    } else if (popupController.popupHandling === 2) {
      $(popUpElement).addClass('c4g-popup-wrapper-nonose');
      var center = popupController.mapController.map.getView().getCenter();
      this.popup = new _ol.Overlay({
        position: center,
        element: popUpElement,
        positioning: 'center-center',
        offset: [-50, 0],
        autoPan: false
      });
      popupController.mapController.map.addOverlay(this.popup);
    } else if (popupController.popupHandling === 3) {
      var popupOptions = {
        open: true,
        alwaysExtended: false,
        //this.mapData.openDirectly,
        hideOther: popupController.mapController.hideOtherBottomComponents,
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

      this.popupComponent = _reactDom["default"].render( /*#__PURE__*/React.createElement(_c4gPopupContainer.PopupContainer, popupOptions), this.popupContainer);

      if (!popupOptions.external) {
        popupController.mapController.$overlaycontainer_stopevent.append(this.popupContainer);
        popupController.mapController.hideOtherComponents(this.currentPopup);
      }

      this.currentPopup = this.popupComponent; // close open sideboards

      popupController.mapController.components.popup = this.popupComponent;
    }
  }

  (0, _createClass2["default"])(C4gPopup, [{
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
        }
      } else {
        if (this.popupComponent) {
          this.popupComponent.open();
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
      if (geometry.getType() === 'Point') {
        this.popup.setPosition(geometry.getCoordinates());
      } else {
        var extent = geometry.getExtent();
        var center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
        this.popup.setPosition(center);
      }
    }
  }]);
  return C4gPopup;
}();

exports.C4gPopup = C4gPopup;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var PopupContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(PopupContainer, _Component);

  var _super = _createSuper(PopupContainer);

  function PopupContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PopupContainer);
    _this = _super.call(this, props);
    _this.state = {
      content: "",
      open: props.open,
      detailsOpen: false,
      conststr: false
    };
    props.hideOther((0, _assertThisInitialized2["default"])(_this));
    _this.routeButtons = "";
    _this.language = (0, _c4gMapsI18n.getLanguage)(_this.props.mapData);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleDetails = _this.toggleDetails.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PopupContainer, [{
    key: "render",
    value: function render() {
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
          closeBtnCb: this.close,
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
    value: function open() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "close",
    value: function close() {
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
  }]);
  return PopupContainer;
}(_react.Component);

exports.PopupContainer = PopupContainer;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFJYUE7RUFFWCw0QkFBWUMsS0FBWixFQUFtQjtJQUFBO0lBQ2pCLEtBQUtDLGFBQUwsR0FBcUJELEtBQUssQ0FBQ0UsT0FBTixDQUFjRCxhQUFuQztJQUNBLEtBQUtFLE9BQUwsR0FBZUgsS0FBSyxDQUFDRSxPQUFOLENBQWNELGFBQWQsQ0FBNEJHLElBQTNDO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDLEtBQUtILE9BQUwsQ0FBYUUsYUFBZCxFQUE2QixFQUE3QixDQUE3QjtJQUNBLEtBQUtFLFFBQUwsR0FBZ0IsQ0FBQyxDQUFDLEtBQUtKLE9BQUwsQ0FBYUssUUFBL0I7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtFQUNEOzs7O1dBRUQsb0JBQTZCO01BQUEsSUFBcEJDLFdBQW9CLHVFQUFOLElBQU07TUFDM0IsS0FBS0QsTUFBTCxDQUFZRSxJQUFaLENBQWlCLElBQUlDLGtCQUFKLENBQWEsSUFBYixDQUFqQjs7TUFDQSxJQUFJRixXQUFKLEVBQWlCO1FBQ2YsS0FBS0QsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWUksTUFBWixHQUFvQixDQUFoQyxFQUFtQ0MsVUFBbkMsQ0FBOENKLFdBQTlDO01BQ0Q7SUFDRixFQUFDOzs7O1dBQ0Ysa0JBQVNBLFdBQVQsRUFBc0I7TUFDcEIsSUFBSSxDQUFDLEtBQUtELE1BQUwsQ0FBWSxDQUFaLENBQUwsRUFBcUI7UUFDbkIsS0FBS0EsTUFBTCxDQUFZRSxJQUFaLENBQWlCLElBQUlDLGtCQUFKLENBQWEsSUFBYixDQUFqQjtNQUNEOztNQUNELEtBQUtILE1BQUwsQ0FBWSxDQUFaLEVBQWVLLFVBQWYsQ0FBMEJKLFdBQTFCO0lBQ0QsRUFBQzs7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LEVBQW9CO01BQ2xCLEtBQUtxQyxRQUFMLENBQWM7UUFBQ3JDLE9BQU8sRUFBRUE7TUFBVixDQUFkO0lBQ0Q7OztXQUVELGdCQUFPO01BQ0wsS0FBS3FDLFFBQUwsQ0FBYztRQUFDaEUsSUFBSSxFQUFFO01BQVAsQ0FBZDtJQUNEOzs7V0FFRCxpQkFBUTtNQUNOLElBQUlpRSxRQUFRLEdBQUc7UUFDYmpFLElBQUksRUFBRSxLQURPO1FBRWIyQixPQUFPLEVBQUUsS0FBS21CLEtBQUwsQ0FBVzNGLFFBQVgsR0FBc0IsRUFBdEIsR0FBMEIsS0FBSzRGLEtBQUwsQ0FBV3BCO01BRmpDLENBQWY7TUFJQSxLQUFLcUMsUUFBTCxDQUFjQyxRQUFkO0lBQ0Q7OztXQUVELHlCQUFnQjtNQUNkLEtBQUtELFFBQUwsQ0FBYztRQUFDaEIsV0FBVyxFQUFFLENBQUMsS0FBS0QsS0FBTCxDQUFXQztNQUExQixDQUFkO0lBQ0Q7OztFQTNGaUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXBvcHVwLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQge0M0Z1BvcHVwfSBmcm9tICcuL2M0Zy1wb3B1cCc7XG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cENvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByb3h5KSB7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMubWFwRGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIHRoaXMucG9wdXBIYW5kbGluZyA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCk7XG4gICAgdGhpcy5leHRlcm5hbCA9ICEhdGhpcy5tYXBEYXRhLnBvcHVwRGl2O1xuICAgIHRoaXMucG9wdXBzID0gW107XG4gIH1cblxuICBhZGRQb3B1cChwb3B1cENvbmZpZyA9IG51bGwpIHtcbiAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgaWYgKHBvcHVwQ29uZmlnKSB7XG4gICAgICB0aGlzLnBvcHVwc1t0aGlzLnBvcHVwcy5sZW5ndGggLTFdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJhZGRQb3BVcCgpXCJcbiAgc2V0UG9wdXAocG9wdXBDb25maWcpIHtcbiAgICBpZiAoIXRoaXMucG9wdXBzWzBdKSB7XG4gICAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgfVxuICAgIHRoaXMucG9wdXBzWzBdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICB9IC8vIGVuZCBvZiBcInNldFBvcHVwKClcIlxuICByZW1vdmVQb3B1cCgpIHtcbiAgICBpZiAodGhpcy5wb3B1cHNbMF0gJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAgJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAuZ2V0TWFwKCkpIHtcbiAgICAgIHRoaXMubWFwRGF0YS5tYXAucmVtb3ZlT3ZlcmxheSh0aGlzLnBvcHVwc1swXS5wb3B1cCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtPdmVybGF5fSBmcm9tICdvbCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjbGFzcyBDNGdQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIgPSBwb3B1cENvbnRyb2xsZXI7XG4gICAgICAgIGxldCBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYzRnX3BvcHVwXycgKyBwb3B1cENvbnRyb2xsZXIubWFwRGF0YS5tYXBJZCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLXdyYXBwZXIgYzRnLWFjdGl2ZSc7XG5cbiAgICAgICAgbGV0IHBvcFVwQ2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY2xvc2UgYzRnLWljb24nO1xuXG4gICAgICAgIGpRdWVyeShwb3BVcENsb3NlRWxlbWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZU92ZXJsYXkoc2NvcGUucG9wdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQ29udGVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLWNvbnRlbnQnO1xuXG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENsb3NlRWxlbWVudCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xuICAgICAgICB0aGlzLnBvcHVwQ29udGVudCA9IHBvcFVwQ29udGVudDtcbiAgICAgICAgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxIHx8IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgYXV0b1BhbiA9IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBpbnNlcnRGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogYXV0b1BhbixcbiAgICAgICAgICAgICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dG9QYW5NYXJnaW46IDIwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5hZGRPdmVybGF5KHRoaXMucG9wdXApO1xuICAgICAgICB9IGVsc2UgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAyKSB7XG4gICAgICAgICAgICAkKHBvcFVwRWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy1wb3B1cC13cmFwcGVyLW5vbm9zZScpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHdheXNFeHRlbmRlZDogZmFsc2UsLy90aGlzLm1hcERhdGEub3BlbkRpcmVjdGx5LFxuICAgICAgICAgICAgICAgIGhpZGVPdGhlcjogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQm90dG9tQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICBtYXBEYXRhOiBwb3B1cENvbnRyb2xsZXIubWFwRGF0YSxcbiAgICAgICAgICAgICAgICBtYXBDb250cm9sbGVyOiBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwO1xuICAgICAgICAgICAgICAgIGlmICghcG9wdXBDb250cm9sbGVyLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cE9wdGlvbnMuZXh0ZXJuYWwgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWw7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gcG9wdXBDb250cm9sbGVyLmV4dGVybmFsID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLnBvcHVwRGl2KSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwQ29udGFpbmVyLCBwb3B1cE9wdGlvbnMpLCB0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmICghcG9wdXBPcHRpb25zLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LmFwcGVuZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMuY3VycmVudFBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgICAgIC8vIGNsb3NlIG9wZW4gc2lkZWJvYXJkc1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuY29tcG9uZW50cy5wb3B1cCA9IHRoaXMucG9wdXBDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Q29udGVudCAocG9wdXBDb25maWcpIHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBwb3B1cENvbmZpZy5mZWF0dXJlO1xuICAgICAgICBsZXQgbGF5ZXIgPSBwb3B1cENvbmZpZy5sYXllcjtcbiAgICAgICAgbGV0IHBvcHVwQ29udGVudDtcbiAgICAgICAgbGV0IGRpdlBvcHVwO1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudCArPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmVzW2ldLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGRpdlBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwLmdldE1hcCgpKSB7IC8vcG9wdXAgbm90IGFscmVhZHkgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQb3B1cC5pbm5lckhUTUwgPSBwb3B1cENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZmVhdHVyZS5nZXRHZW9tZXRyeSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5zZXRDb250ZW50KHBvcHVwQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5jNGdNYXBzSG9va3MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAsIHtcbiAgICAgICAgICAgICAgICBwb3B1cDogcG9wdXBDb25maWcsXG4gICAgICAgICAgICAgICAgY29udGVudDogcG9wdXBDb250ZW50LFxuICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI6IHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIsXG4gICAgICAgICAgICAgICAgY29tcDogdGhpcy5wb3B1cENvbXBvbmVudCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGRpdjogZGl2UG9wdXBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFBvc2l0aW9uIChnZW9tZXRyeSkge1xuICAgICAgICBpZiAoZ2VvbWV0cnkuZ2V0VHlwZSgpID09PSAnUG9pbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLnNldFBvc2l0aW9uKGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGV4dGVudCA9IGdlb21ldHJ5LmdldEV4dGVudCgpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMixdO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5zZXRQb3NpdGlvbihjZW50ZXIpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuLFxuICAgICAgZGV0YWlsc09wZW46IGZhbHNlLFxuICAgICAgY29uc3RzdHI6IGZhbHNlXG4gICAgfTtcbiAgICBwcm9wcy5oaWRlT3RoZXIodGhpcyk7XG4gICAgdGhpcy5yb3V0ZUJ1dHRvbnMgPSBcIlwiO1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcERhdGEpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVEZXRhaWxzID0gdGhpcy50b2dnbGVEZXRhaWxzLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZGV0YWlsQnRuQ2xhc3MgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DYiA9IFwiXCI7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZXh0ZXJuYWwgPyBcImM0Zy1wb3B1cC1jb250YWluZXIgXCIgOiBcImM0Zy1zaWRlYm9hcmQgYzRnLXBvcHVwLWNvbnRhaW5lciBcIjtcblxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcImM0Zy1vcGVuIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWx3YXlzRXh0ZW5kZWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHNPcGVuKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1vcGVuXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtY2xvc2VkXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBoZWFkZXJDbGFzcyA9IFwiYzRnLXBvcHVwLWhlYWRlclwiO1xuICAgIGxldCBhZGRCdXR0b25zID0gPGRpdi8+O1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnN0c3RyKSB7XG4gICAgICBoZWFkZXJDbGFzcyArPSBcIiBjNGctcm91dGluZ1wiO1xuICAgICAgYWRkQnV0dG9ucyA9IDx0aGlzLnN0YXRlLmNvbnN0c3RyIGNvbmZpZz17dGhpcy5zdGF0ZS5jb25maWd9Lz47XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcG9wdXAtd3JhcHBlclwifT5cbiAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e2hlYWRlckNsYXNzfSBoZWFkZXJDbGFzcz17XCJjNGctcG9wdXAtaGVhZGVyLWhlYWRsaW5lXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5tYXBEYXRhLnBvcHVwSGVhZGxpbmUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5ndWFnZS5DTE9TRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiXCJ9IGRldGFpbEJ0bkNiPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgIHthZGRCdXR0b25zfVxuICAgICAgICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmNvbnRlbnR9fS8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzZXRBZGRCdXR0b25zKGNvbnN0c3RyLCBjb25maWcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY29uc3RzdHI6IGNvbnN0c3RyXG4gICAgfSk7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb250ZW50OiBjb250ZW50fSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgY29udGVudDogdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiXCI6IHRoaXMuc3RhdGUuY29udGVudFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICB0b2dnbGVEZXRhaWxzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHNPcGVuOiAhdGhpcy5zdGF0ZS5kZXRhaWxzT3Blbn0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQzRnUG9wdXBDb250cm9sbGVyIiwicHJveHkiLCJtYXBDb250cm9sbGVyIiwib3B0aW9ucyIsIm1hcERhdGEiLCJkYXRhIiwicG9wdXBIYW5kbGluZyIsInBhcnNlSW50IiwiZXh0ZXJuYWwiLCJwb3B1cERpdiIsInBvcHVwcyIsInBvcHVwQ29uZmlnIiwicHVzaCIsIkM0Z1BvcHVwIiwibGVuZ3RoIiwic2V0Q29udGVudCIsInBvcHVwIiwiZ2V0TWFwIiwibWFwIiwicmVtb3ZlT3ZlcmxheSIsInBvcHVwQ29udHJvbGxlciIsInNjb3BlIiwicG9wVXBFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwibWFwSWQiLCJjbGFzc05hbWUiLCJwb3BVcENsb3NlRWxlbWVudCIsImpRdWVyeSIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvcFVwQ29udGVudCIsImFwcGVuZENoaWxkIiwicG9wdXBDb250ZW50IiwiYXV0b1BhbiIsIk92ZXJsYXkiLCJlbGVtZW50IiwicG9zaXRpb25pbmciLCJvZmZzZXQiLCJpbnNlcnRGaXJzdCIsImF1dG9QYW5BbmltYXRpb24iLCJkdXJhdGlvbiIsImF1dG9QYW5NYXJnaW4iLCJhZGRPdmVybGF5IiwiJCIsImFkZENsYXNzIiwiY2VudGVyIiwiZ2V0VmlldyIsImdldENlbnRlciIsInBvc2l0aW9uIiwicG9wdXBPcHRpb25zIiwib3BlbiIsImFsd2F5c0V4dGVuZGVkIiwiaGlkZU90aGVyIiwiaGlkZU90aGVyQm90dG9tQ29tcG9uZW50cyIsInBvcHVwQ29udGFpbmVyIiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiY29tcG9uZW50cyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cENvbXBvbmVudCIsInJlbmRlciIsIlJlYWN0IiwiUG9wdXBDb250YWluZXIiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhcHBlbmQiLCJoaWRlT3RoZXJDb21wb25lbnRzIiwiY3VycmVudFBvcHVwIiwiZmVhdHVyZSIsImxheWVyIiwiZGl2UG9wdXAiLCJnZXQiLCJmZWF0dXJlcyIsImkiLCJ1dGlscyIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJjb250ZW50IiwibGFuZyIsImlubmVySFRNTCIsInNldFBvc2l0aW9uIiwiZ2V0R2VvbWV0cnkiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJ1bmRlZmluZWQiLCJwcm94eV9hcHBlbmRQb3B1cCIsImNhbGxIb29rRnVuY3Rpb25zIiwiY29tcCIsImRpdiIsImdlb21ldHJ5IiwiZ2V0VHlwZSIsImdldENvb3JkaW5hdGVzIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwiVGl0bGViYXIiLCJsYXp5IiwicHJvcHMiLCJzdGF0ZSIsImRldGFpbHNPcGVuIiwiY29uc3RzdHIiLCJyb3V0ZUJ1dHRvbnMiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY2xvc2UiLCJiaW5kIiwidG9nZ2xlRGV0YWlscyIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJoZWFkZXJDbGFzcyIsImFkZEJ1dHRvbnMiLCJjb25maWciLCJwb3B1cEhlYWRsaW5lIiwiQ0xPU0UiLCJfX2h0bWwiLCJzZXRTdGF0ZSIsIm5ld1N0YXRlIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==