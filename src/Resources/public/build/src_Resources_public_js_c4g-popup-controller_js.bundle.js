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

          if (!this.popupController.external) {
            this.popupController.mapController.hideOtherComponents(this.popupComponent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFJYUE7RUFFWCw0QkFBWUMsS0FBWixFQUFtQjtJQUFBO0lBQ2pCLEtBQUtDLGFBQUwsR0FBcUJELEtBQUssQ0FBQ0UsT0FBTixDQUFjRCxhQUFuQztJQUNBLEtBQUtFLE9BQUwsR0FBZUgsS0FBSyxDQUFDRSxPQUFOLENBQWNELGFBQWQsQ0FBNEJHLElBQTNDO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDLEtBQUtILE9BQUwsQ0FBYUUsYUFBZCxFQUE2QixFQUE3QixDQUE3QjtJQUNBLEtBQUtFLFFBQUwsR0FBZ0IsQ0FBQyxDQUFDLEtBQUtKLE9BQUwsQ0FBYUssUUFBL0I7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtFQUNEOzs7O1dBRUQsb0JBQTZCO01BQUEsSUFBcEJDLFdBQW9CLHVFQUFOLElBQU07TUFDM0IsS0FBS0QsTUFBTCxDQUFZRSxJQUFaLENBQWlCLElBQUlDLGtCQUFKLENBQWEsSUFBYixDQUFqQjs7TUFDQSxJQUFJRixXQUFKLEVBQWlCO1FBQ2YsS0FBS0QsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWUksTUFBWixHQUFvQixDQUFoQyxFQUFtQ0MsVUFBbkMsQ0FBOENKLFdBQTlDO01BQ0Q7SUFDRixFQUFDOzs7O1dBQ0Ysa0JBQVNBLFdBQVQsRUFBc0I7TUFDcEIsSUFBSSxDQUFDLEtBQUtELE1BQUwsQ0FBWSxDQUFaLENBQUwsRUFBcUI7UUFDbkIsS0FBS0EsTUFBTCxDQUFZRSxJQUFaLENBQWlCLElBQUlDLGtCQUFKLENBQWEsSUFBYixDQUFqQjtNQUNEOztNQUNELEtBQUtILE1BQUwsQ0FBWSxDQUFaLEVBQWVLLFVBQWYsQ0FBMEJKLFdBQTFCO0lBQ0QsRUFBQzs7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QWQsRUFBd0JXLE1BQXhCLEVBQWdDO01BQzlCLEtBQUtJLFFBQUwsQ0FBYztRQUNaSixNQUFNLEVBQUVBLE1BREk7UUFFWlgsUUFBUSxFQUFFQTtNQUZFLENBQWQ7SUFJRDs7O1dBRUQsb0JBQVd0QixPQUFYLEVBQW9CO01BQ2xCLEtBQUtxQyxRQUFMLENBQWM7UUFBQ3JDLE9BQU8sRUFBRUE7TUFBVixDQUFkO0lBQ0Q7OztXQUVELGdCQUFPO01BQ0wsS0FBS3FDLFFBQUwsQ0FBYztRQUFDaEUsSUFBSSxFQUFFO01BQVAsQ0FBZDtJQUNEOzs7V0FFRCxpQkFBUTtNQUNOLElBQUlpRSxRQUFRLEdBQUc7UUFDYmpFLElBQUksRUFBRSxLQURPO1FBRWIyQixPQUFPLEVBQUUsS0FBS21CLEtBQUwsQ0FBVzNGLFFBQVgsR0FBc0IsRUFBdEIsR0FBMEIsS0FBSzRGLEtBQUwsQ0FBV3BCO01BRmpDLENBQWY7TUFJQSxLQUFLcUMsUUFBTCxDQUFjQyxRQUFkO0lBQ0Q7OztXQUVELHlCQUFnQjtNQUNkLEtBQUtELFFBQUwsQ0FBYztRQUFDaEIsV0FBVyxFQUFFLENBQUMsS0FBS0QsS0FBTCxDQUFXQztNQUExQixDQUFkO0lBQ0Q7OztFQTNGaUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXBvcHVwLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQge0M0Z1BvcHVwfSBmcm9tICcuL2M0Zy1wb3B1cCc7XG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cENvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByb3h5KSB7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMubWFwRGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIHRoaXMucG9wdXBIYW5kbGluZyA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCk7XG4gICAgdGhpcy5leHRlcm5hbCA9ICEhdGhpcy5tYXBEYXRhLnBvcHVwRGl2O1xuICAgIHRoaXMucG9wdXBzID0gW107XG4gIH1cblxuICBhZGRQb3B1cChwb3B1cENvbmZpZyA9IG51bGwpIHtcbiAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgaWYgKHBvcHVwQ29uZmlnKSB7XG4gICAgICB0aGlzLnBvcHVwc1t0aGlzLnBvcHVwcy5sZW5ndGggLTFdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJhZGRQb3BVcCgpXCJcbiAgc2V0UG9wdXAocG9wdXBDb25maWcpIHtcbiAgICBpZiAoIXRoaXMucG9wdXBzWzBdKSB7XG4gICAgICB0aGlzLnBvcHVwcy5wdXNoKG5ldyBDNGdQb3B1cCh0aGlzKSk7XG4gICAgfVxuICAgIHRoaXMucG9wdXBzWzBdLnNldENvbnRlbnQocG9wdXBDb25maWcpO1xuICB9IC8vIGVuZCBvZiBcInNldFBvcHVwKClcIlxuICByZW1vdmVQb3B1cCgpIHtcbiAgICBpZiAodGhpcy5wb3B1cHNbMF0gJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAgJiYgdGhpcy5wb3B1cHNbMF0ucG9wdXAuZ2V0TWFwKCkpIHtcbiAgICAgIHRoaXMubWFwRGF0YS5tYXAucmVtb3ZlT3ZlcmxheSh0aGlzLnBvcHVwc1swXS5wb3B1cCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHtPdmVybGF5fSBmcm9tICdvbCc7XG5pbXBvcnQge3V0aWxzfSBmcm9tICcuL2M0Zy1tYXBzLXV0aWxzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjbGFzcyBDNGdQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBDb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3B1cENvbnRyb2xsZXIgPSBwb3B1cENvbnRyb2xsZXI7XG4gICAgICAgIGxldCBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wVXBFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYzRnX3BvcHVwXycgKyBwb3B1cENvbnRyb2xsZXIubWFwRGF0YS5tYXBJZCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLXdyYXBwZXIgYzRnLWFjdGl2ZSc7XG5cbiAgICAgICAgbGV0IHBvcFVwQ2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9ICdjNGctcG9wdXAtY2xvc2UgYzRnLWljb24nO1xuXG4gICAgICAgIGpRdWVyeShwb3BVcENsb3NlRWxlbWVudCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZU92ZXJsYXkoc2NvcGUucG9wdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcFVwQ29udGVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLWNvbnRlbnQnO1xuXG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENsb3NlRWxlbWVudCk7XG4gICAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xuICAgICAgICB0aGlzLnBvcHVwQ29udGVudCA9IHBvcFVwQ29udGVudDtcbiAgICAgICAgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxIHx8IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgYXV0b1BhbiA9IHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAxO1xuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25pbmc6ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBpbnNlcnRGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BhbjogYXV0b1BhbixcbiAgICAgICAgICAgICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dG9QYW5NYXJnaW46IDIwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5hZGRPdmVybGF5KHRoaXMucG9wdXApO1xuICAgICAgICB9IGVsc2UgaWYgKHBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nID09PSAyKSB7XG4gICAgICAgICAgICAkKHBvcFVwRWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy1wb3B1cC13cmFwcGVyLW5vbm9zZScpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9wdXBDb250cm9sbGVyLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHdheXNFeHRlbmRlZDogZmFsc2UsLy90aGlzLm1hcERhdGEub3BlbkRpcmVjdGx5LFxuICAgICAgICAgICAgICAgIGhpZGVPdGhlcjogcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQm90dG9tQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICBtYXBEYXRhOiBwb3B1cENvbnRyb2xsZXIubWFwRGF0YSxcbiAgICAgICAgICAgICAgICBtYXBDb250cm9sbGVyOiBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlclxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucG9wdXBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwO1xuICAgICAgICAgICAgICAgIGlmICghcG9wdXBDb250cm9sbGVyLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cE9wdGlvbnMuZXh0ZXJuYWwgPSBwb3B1cENvbnRyb2xsZXIuZXh0ZXJuYWw7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGFpbmVyID0gcG9wdXBDb250cm9sbGVyLmV4dGVybmFsID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHBvcHVwQ29udHJvbGxlci5tYXBEYXRhLnBvcHVwRGl2KSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwT3B0aW9ucy5leHRlcm5hbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwQ29udGFpbmVyLCBwb3B1cE9wdGlvbnMpLCB0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmICghcG9wdXBPcHRpb25zLmV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LmFwcGVuZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBwb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMuY3VycmVudFBvcHVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgICAgICAgIC8vIGNsb3NlIG9wZW4gc2lkZWJvYXJkc1xuICAgICAgICAgICAgcG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIuY29tcG9uZW50cy5wb3B1cCA9IHRoaXMucG9wdXBDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Q29udGVudCAocG9wdXBDb25maWcpIHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBwb3B1cENvbmZpZy5mZWF0dXJlO1xuICAgICAgICBsZXQgbGF5ZXIgPSBwb3B1cENvbmZpZy5sYXllcjtcbiAgICAgICAgbGV0IHBvcHVwQ29udGVudDtcbiAgICAgICAgbGV0IGRpdlBvcHVwO1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBvcHVwQ29udGVudCArPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmVzW2ldLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXBDb250ZW50ID0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlLCBsYXllciwgdGhpcy5wb3B1cENvbnRyb2xsZXIubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGRpdlBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwLmdldE1hcCgpKSB7IC8vcG9wdXAgbm90IGFscmVhZHkgaW4gdGhlIG1hcFxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb250cm9sbGVyLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkodGhpcy5wb3B1cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZQb3B1cC5pbm5lckhUTUwgPSBwb3B1cENvbnRlbnQ7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMucG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRpdlBvcHVwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29udHJvbGxlci5wb3B1cEhhbmRsaW5nIDwgMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZmVhdHVyZS5nZXRHZW9tZXRyeSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvbXBvbmVudC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBvcHVwQ29udHJvbGxlci5leHRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcy5wb3B1cENvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDb21wb25lbnQuc2V0Q29udGVudChwb3B1cENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwLCB7XG4gICAgICAgICAgICAgICAgcG9wdXA6IHBvcHVwQ29uZmlnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHBvcHVwQ29udGVudCxcbiAgICAgICAgICAgICAgICBtYXBDb250cm9sbGVyOiB0aGlzLnBvcHVwQ29udHJvbGxlci5tYXBDb250cm9sbGVyLFxuICAgICAgICAgICAgICAgIGNvbXA6IHRoaXMucG9wdXBDb21wb25lbnQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBkaXY6IGRpdlBvcHVwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRQb3NpdGlvbiAoZ2VvbWV0cnkpIHtcbiAgICAgICAgaWYgKGdlb21ldHJ5LmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5zZXRQb3NpdGlvbihnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5nZXRFeHRlbnQoKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSBbKGV4dGVudFswXSArIGV4dGVudFsyXSkgLyAyLCAoZXh0ZW50WzFdICsgZXh0ZW50WzNdKSAvIDIsXTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbixcbiAgICAgIGRldGFpbHNPcGVuOiBmYWxzZSxcbiAgICAgIGNvbnN0c3RyOiBmYWxzZVxuICAgIH07XG4gICAgcHJvcHMuaGlkZU90aGVyKHRoaXMpO1xuICAgIHRoaXMucm91dGVCdXR0b25zID0gXCJcIjtcbiAgICB0aGlzLmxhbmd1YWdlID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBEYXRhKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRGV0YWlscyA9IHRoaXMudG9nZ2xlRGV0YWlscy5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2IgPSBcIlwiO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4dGVybmFsID8gXCJjNGctcG9wdXAtY29udGFpbmVyIFwiIDogXCJjNGctc2lkZWJvYXJkIGM0Zy1wb3B1cC1jb250YWluZXIgXCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCJjNGctb3BlbiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFsd2F5c0V4dGVuZGVkKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzT3Blbikge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLWNsb3NlZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGVhZGVyQ2xhc3MgPSBcImM0Zy1wb3B1cC1oZWFkZXJcIjtcbiAgICBsZXQgYWRkQnV0dG9ucyA9IDxkaXYvPjtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25zdHN0cikge1xuICAgICAgaGVhZGVyQ2xhc3MgKz0gXCIgYzRnLXJvdXRpbmdcIjtcbiAgICAgIGFkZEJ1dHRvbnMgPSA8dGhpcy5zdGF0ZS5jb25zdHN0ciBjb25maWc9e3RoaXMuc3RhdGUuY29uZmlnfS8+O1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0+XG4gICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtoZWFkZXJDbGFzc30gaGVhZGVyQ2xhc3M9e1wiYzRnLXBvcHVwLWhlYWRlci1oZWFkbGluZVwifSBoZWFkZXI9e3RoaXMucHJvcHMubWFwRGF0YS5wb3B1cEhlYWRsaW5lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ3VhZ2UuQ0xPU0V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0+XG4gICAgICAgICAgICAgICAgICB7YWRkQnV0dG9uc31cbiAgICAgICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcG9wdXAtY29udGVudFwifSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5zdGF0ZS5jb250ZW50fX0vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0QWRkQnV0dG9ucyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogY29udGVudH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuZXh0ZXJuYWwgPyBcIlwiOiB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgdG9nZ2xlRGV0YWlscygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzT3BlbjogIXRoaXMuc3RhdGUuZGV0YWlsc09wZW59KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkM0Z1BvcHVwQ29udHJvbGxlciIsInByb3h5IiwibWFwQ29udHJvbGxlciIsIm9wdGlvbnMiLCJtYXBEYXRhIiwiZGF0YSIsInBvcHVwSGFuZGxpbmciLCJwYXJzZUludCIsImV4dGVybmFsIiwicG9wdXBEaXYiLCJwb3B1cHMiLCJwb3B1cENvbmZpZyIsInB1c2giLCJDNGdQb3B1cCIsImxlbmd0aCIsInNldENvbnRlbnQiLCJwb3B1cCIsImdldE1hcCIsIm1hcCIsInJlbW92ZU92ZXJsYXkiLCJwb3B1cENvbnRyb2xsZXIiLCJzY29wZSIsInBvcFVwRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm1hcElkIiwiY2xhc3NOYW1lIiwicG9wVXBDbG9zZUVsZW1lbnQiLCJqUXVlcnkiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3BVcENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBvcHVwQ29udGVudCIsImF1dG9QYW4iLCJPdmVybGF5IiwiZWxlbWVudCIsInBvc2l0aW9uaW5nIiwib2Zmc2V0IiwiaW5zZXJ0Rmlyc3QiLCJhdXRvUGFuQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJhdXRvUGFuTWFyZ2luIiwiYWRkT3ZlcmxheSIsIiQiLCJhZGRDbGFzcyIsImNlbnRlciIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJwb3NpdGlvbiIsInBvcHVwT3B0aW9ucyIsIm9wZW4iLCJhbHdheXNFeHRlbmRlZCIsImhpZGVPdGhlciIsImhpZGVPdGhlckJvdHRvbUNvbXBvbmVudHMiLCJwb3B1cENvbnRhaW5lciIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImNvbXBvbmVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwicG9wdXBDb21wb25lbnQiLCJyZW5kZXIiLCJSZWFjdCIsIlBvcHVwQ29udGFpbmVyIiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwiYXBwZW5kIiwiaGlkZU90aGVyQ29tcG9uZW50cyIsImN1cnJlbnRQb3B1cCIsImZlYXR1cmUiLCJsYXllciIsImRpdlBvcHVwIiwiZ2V0IiwiZmVhdHVyZXMiLCJpIiwidXRpbHMiLCJyZXBsYWNlQWxsUGxhY2Vob2xkZXJzIiwiY29udGVudCIsImxhbmciLCJpbm5lckhUTUwiLCJzZXRQb3NpdGlvbiIsImdldEdlb21ldHJ5Iiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwidW5kZWZpbmVkIiwicHJveHlfYXBwZW5kUG9wdXAiLCJjYWxsSG9va0Z1bmN0aW9ucyIsImNvbXAiLCJkaXYiLCJnZW9tZXRyeSIsImdldFR5cGUiLCJnZXRDb29yZGluYXRlcyIsImV4dGVudCIsImdldEV4dGVudCIsIlRpdGxlYmFyIiwibGF6eSIsInByb3BzIiwic3RhdGUiLCJkZXRhaWxzT3BlbiIsImNvbnN0c3RyIiwicm91dGVCdXR0b25zIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsImNsb3NlIiwiYmluZCIsInRvZ2dsZURldGFpbHMiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiaGVhZGVyQ2xhc3MiLCJhZGRCdXR0b25zIiwiY29uZmlnIiwicG9wdXBIZWFkbGluZSIsIkNMT1NFIiwiX19odG1sIiwic2V0U3RhdGUiLCJuZXdTdGF0ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=