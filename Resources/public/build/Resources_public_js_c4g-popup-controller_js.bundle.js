(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_c4g-popup-controller_js"],{

/***/ "./Resources/public/js/c4g-popup-controller.js":
/*!*****************************************************!*\
  !*** ./Resources/public/js/c4g-popup-controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gPopupController = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gPopupContainer = __webpack_require__(/*! ./components/c4g-popup-container.jsx */ "./Resources/public/js/components/c4g-popup-container.jsx");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gPopupController = /*#__PURE__*/function () {
  function C4gPopupController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gPopupController);
    this.mapController = proxy.options.mapController;
    this.mapData = proxy.options.mapController.data;
    this.popupHandling = parseInt(this.mapData.popupHandling, 10);
    this.external = !!this.mapData.popupDiv;
    this.currentPopup = null;
    this.containerOpen = false;
  }

  (0, _createClass2["default"])(C4gPopupController, [{
    key: "addPopUp",
    value: function addPopUp(popupContent) {
      var popUpElement, popUpCloseElement, popUpContent, popup;
      var popupOptions = {
        open: this.containerOpen,
        alwaysExtended: false,
        //this.mapData.openDirectly,
        hideOther: this.mapController.hideOtherBottomComponents,
        mapData: this.mapData,
        mapController: this.mapController
      };

      if (window.c4gMapsPopup && window.c4gMapsPopup.popup) {
        this.mapController.map.removeOverlay(window.c4gMapsPopup.popup);
      }

      if (this.popupHandling === 3) {
        if (this.popupContainer) {
          _reactDom["default"].unmountComponentAtNode(this.popupContainer);

          delete this.mapController.components.popup;

          if (!this.external) {
            this.popupContainer.parentNode.removeChild(this.popupContainer);
          }
        }

        popupOptions.external = this.external;
        this.popupContainer = this.external ? document.querySelector("." + this.mapData.popupDiv) : document.createElement('div');
        this.popupComponent = _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_c4gPopupContainer.PopupContainer, popupOptions), this.popupContainer);

        if (!this.external) {
          this.mapController.$overlaycontainer_stopevent.append(this.popupContainer);
        }

        this.currentPopup = this.popupComponent; // close open sideboards

        if (!this.external) {
          this.mapController.hideOtherComponents(this.currentPopup);
        }

        this.mapController.components.popup = this.popupComponent;
        window.c4gMapsPopup = {};
        window.c4gMapsPopup.popup = this;
      } else {
        popUpElement = document.createElement('div');
        popUpElement.setAttribute('id', 'c4g_popup_' + this.mapData.mapId);
        popUpElement.className = 'c4g-popup-wrapper';
        popUpCloseElement = document.createElement('button');
        popUpCloseElement.className = "c4g-popup-close c4g-icon";
        popUpContent = document.createElement('div');
        popUpContent.className = "c4g-popup-content";
        popUpElement.appendChild(popUpCloseElement);
        popUpElement.appendChild(popUpContent);
        jQuery(popUpCloseElement).click(function (event) {
          event.preventDefault();
          window.c4gMapsPopup.$popup ? window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE) : false;
        });

        if (this.popupHandling === 1 || this.popupHandling === 0) {
          var autoPan = this.popupHandling === 1;

          if (autoPan) {// let mapSelector = "#" + this.options.mapController.data.mapDiv + " > div > canvas";
            // let mapElement = document.querySelector(mapSelector);
            // let maxHeightPopup = mapElement.offsetHeight - 50;
            // $(popUpElement).css("max-height", maxHeightPopup);
          }

          popup = new _ol.Overlay({
            element: popUpElement,
            positioning: 'bottom-left',
            offset: [-50, 0],
            autoPan: autoPan,
            autoPanAnimation: {
              duration: 250
            },
            autoPanMargin: 20
          });
        } else if (this.popupHandling === 2) {
          $(popUpElement).addClass('c4g-popup-wrapper-nonose');
          popup = new _ol.Overlay({
            element: popUpElement,
            positioning: 'center-center',
            offset: [-50, 0],
            autoPan: false
          });
        }

        if (window.c4gMapsPopup && window.c4gMapsPopup.popup && window.c4gMapsPopup.popup.currentPopup) {
          this.mapController.map.removeOverlay(window.c4gMapsPopup.popup.currentPopup);
        }

        window.c4gMapsPopup = {};
        window.c4gMapsPopup.popup = this; // attach a spinner to the popup

        window.c4gMapsPopup.spinner = new _c4gMapsMiscSpinner.Spinner({
          target: popUpElement
        });

        if (popup) {
          this.mapController.map.addOverlay(popup);
          this.currentPopup = popup;
        }

        window.c4gMapsPopup.$popup = jQuery(this.getElement());
        window.c4gMapsPopup.$content = jQuery('.c4g-popup-content', window.c4gMapsPopup.$popup);
      }
    } // end of "addPopUp()"

  }, {
    key: "setPopup",
    value: function setPopup(popupConfig) {
      var feature,
          layer,
          popupContent,
          self = this;
      feature = popupConfig.feature;
      layer = popupConfig.layer;

      if (feature.get('features')) {
        var features = feature.get('features');

        for (var i = 0; i < features.length; i++) {
          popupContent += _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, features[i], layer, this.mapController.data.lang);
        }
      } else {
        popupContent = _c4gMapsUtils.utils.replaceAllPlaceholders(popupConfig.popup.content, feature, layer, this.mapController.data.lang);
      }

      if (this.popupHandling !== 3) {
        if (parseInt(this.mapData.popupHandling, 10) !== 2) {
          var autoPan = parseInt(this.mapData.popupHandling, 10) === 1;

          if (autoPan) {
            var mapSelector = "#" + this.mapController.data.mapDiv + " canvas";
            var mapElement = document.querySelector(mapSelector);
            var maxHeightPopup = mapElement.offsetHeight - 50;
            $(window.c4gMapsPopup.popup.element).css("max-height", maxHeightPopup);
          }
        }

        if (popupContent.trim()) {
          window.c4gMapsPopup.$content ? window.c4gMapsPopup.$content.html(popupContent) : false;

          if (feature.getGeometry() && feature.getGeometry().getType() === 'Point') {
            if (self.mapData.popupHandling && self.mapData.popupHandling !== '2') {
              window.c4gMapsPopup.popup.setPosition(feature.getGeometry().getCoordinates());
            } else {
              window.c4gMapsPopup.popup.setPosition(self.mapController.map.getView().getCenter());
            }
          } else if (feature.getGeometry() && feature.getGeometry().getType() === 'Polygon') {
            var extent = feature.getGeometry().getExtent();
            var center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
            window.c4gMapsPopup.popup.setPosition(center);
          }
        } else {
          // hide popup if there is no valid content left
          window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
        }

        window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.LOADING);
        window.c4gMapsPopup.spinner.hide();
      } else {
        var routeButtons = 0;

        if (feature.get('popup')) {
          routeButtons = parseInt(feature.get('popup').routing_link, 10);
        } else if (layer.get('popup')) {
          routeButtons = parseInt(layer.get('popup').routing_link, 10);
        }

        this.currentPopup.setState({
          content: popupContent,
          open: true
        });
      }

      if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_appendPopup) === 'object') {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup, {
          popup: popupConfig,
          content: popupContent,
          mapController: this.mapController,
          comp: this.popupComponent || null
        });
      }
    } // end of "setPopup()"

  }, {
    key: "close",
    value: function close() {
      if (this.popupHandling < 3) {
        this.currentPopup.close();
      } else {
        if (this.currentPopup) {
          this.currentPopup.setState({
            open: false
          });
        }
      }
    }
    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "show",
    value: function show() {
      if (this.popupHandling < 3) {
        this.currentPopup.show();
      } else {
        console.log("show");
      }
    }
    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this.popupHandling < 3) {
        this.currentPopup.hide();
      }
    }
    /**
     * @TODO
     * [getContent description]
     *
     */

  }, {
    key: "getContent",
    value: function getContent() {
      if (this.popupHandling < 3) {
        return this.currentPopup.getContent();
      }
    }
    /**
     * @TODO
     * [getPosition description]
     *
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      if (this.popupHandling < 3) {
        return this.currentPopup.getPosition();
      }
    }
    /**
     * @TODO
     * [setContent description]
     *
     * @param  {[type]}  content  [description]
     */

  }, {
    key: "setContent",
    value: function setContent(content) {
      if (this.popupHandling < 3) {
        this.currentPopup.setContent(content);
      } else {
        this.currentPopup.setContent(content);
      }
    }
    /**
     * @TODO
     * [setPosition description]
     *
     * @param  {[type]}  coordinates  [description]
     */

  }, {
    key: "setPosition",
    value: function setPosition(coordinates) {
      if (this.popupHandling < 3) {
        this.currentPopup.setPosition(coordinates);
      } else {
        this.containerOpen = true;
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (this.popupHandling < 3) {
        return this.currentPopup.getElement();
      }
    }
  }]);
  return C4gPopupController;
}();

exports.C4gPopupController = C4gPopupController;

/***/ }),

/***/ "./Resources/public/js/components/c4g-popup-container.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-popup-container.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXIuanN4Il0sIm5hbWVzIjpbIkM0Z1BvcHVwQ29udHJvbGxlciIsInByb3h5IiwibWFwQ29udHJvbGxlciIsIm9wdGlvbnMiLCJtYXBEYXRhIiwiZGF0YSIsInBvcHVwSGFuZGxpbmciLCJwYXJzZUludCIsImV4dGVybmFsIiwicG9wdXBEaXYiLCJjdXJyZW50UG9wdXAiLCJjb250YWluZXJPcGVuIiwicG9wdXBDb250ZW50IiwicG9wVXBFbGVtZW50IiwicG9wVXBDbG9zZUVsZW1lbnQiLCJwb3BVcENvbnRlbnQiLCJwb3B1cCIsInBvcHVwT3B0aW9ucyIsIm9wZW4iLCJhbHdheXNFeHRlbmRlZCIsImhpZGVPdGhlciIsImhpZGVPdGhlckJvdHRvbUNvbXBvbmVudHMiLCJ3aW5kb3ciLCJjNGdNYXBzUG9wdXAiLCJtYXAiLCJyZW1vdmVPdmVybGF5IiwicG9wdXBDb250YWluZXIiLCJSZWFjdERPTSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJjb21wb25lbnRzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsInBvcHVwQ29tcG9uZW50IiwicmVuZGVyIiwiUmVhY3QiLCJQb3B1cENvbnRhaW5lciIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsImFwcGVuZCIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJzZXRBdHRyaWJ1dGUiLCJtYXBJZCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHBvcHVwIiwicmVtb3ZlQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJBQ1RJVkUiLCJhdXRvUGFuIiwiT3ZlcmxheSIsImVsZW1lbnQiLCJwb3NpdGlvbmluZyIsIm9mZnNldCIsImF1dG9QYW5BbmltYXRpb24iLCJkdXJhdGlvbiIsImF1dG9QYW5NYXJnaW4iLCIkIiwiYWRkQ2xhc3MiLCJzcGlubmVyIiwiU3Bpbm5lciIsInRhcmdldCIsImFkZE92ZXJsYXkiLCJnZXRFbGVtZW50IiwiJGNvbnRlbnQiLCJwb3B1cENvbmZpZyIsImZlYXR1cmUiLCJsYXllciIsInNlbGYiLCJnZXQiLCJmZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJ1dGlscyIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJjb250ZW50IiwibGFuZyIsIm1hcFNlbGVjdG9yIiwibWFwRGl2IiwibWFwRWxlbWVudCIsIm1heEhlaWdodFBvcHVwIiwib2Zmc2V0SGVpZ2h0IiwiY3NzIiwidHJpbSIsImh0bWwiLCJnZXRHZW9tZXRyeSIsImdldFR5cGUiLCJzZXRQb3NpdGlvbiIsImdldENvb3JkaW5hdGVzIiwiZ2V0VmlldyIsImdldENlbnRlciIsImV4dGVudCIsImdldEV4dGVudCIsImNlbnRlciIsIkxPQURJTkciLCJoaWRlIiwicm91dGVCdXR0b25zIiwicm91dGluZ19saW5rIiwic2V0U3RhdGUiLCJjNGdNYXBzSG9va3MiLCJ1bmRlZmluZWQiLCJwcm94eV9hcHBlbmRQb3B1cCIsImNhbGxIb29rRnVuY3Rpb25zIiwiY29tcCIsImNsb3NlIiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb250ZW50IiwiZ2V0UG9zaXRpb24iLCJzZXRDb250ZW50IiwiY29vcmRpbmF0ZXMiLCJUaXRsZWJhciIsImxhenkiLCJwcm9wcyIsInN0YXRlIiwiZGV0YWlsc09wZW4iLCJjb25zdHN0ciIsImxhbmd1YWdlIiwiYmluZCIsInRvZ2dsZURldGFpbHMiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiaGVhZGVyQ2xhc3MiLCJhZGRCdXR0b25zIiwiY29uZmlnIiwicG9wdXBIZWFk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QURoRTtBQUN1RSxxQkFBYSxFQUFFLEtBQUtjLFFBQUwsQ0FBY1MsS0FEcEc7QUFFVSxzQkFBYyxFQUFFLEVBRjFCO0FBRThCLG1CQUFXLEVBQUU7QUFGM0MsU0FHR0gsVUFISCxDQURGLENBREYsZUFRRTtBQUFLLGlCQUFTLEVBQUUsbUJBQWhCO0FBQXFDLCtCQUF1QixFQUFFO0FBQUNJLGdCQUFNLEVBQUUsS0FBS2IsS0FBTCxDQUFXeEM7QUFBcEI7QUFBOUQsUUFSRixDQURGLENBREY7QUFlRDs7O1dBRUQsdUJBQWMwQyxRQUFkLEVBQXdCUSxNQUF4QixFQUFnQztBQUM5QixXQUFLM0IsUUFBTCxDQUFjO0FBQ1oyQixjQUFNLEVBQUVBLE1BREk7QUFFWlIsZ0JBQVEsRUFBRUE7QUFGRSxPQUFkO0FBSUQ7OztXQUVELG9CQUFXMUMsT0FBWCxFQUFvQjtBQUNsQixXQUFLdUIsUUFBTCxDQUFjO0FBQUN2QixlQUFPLEVBQUVBO0FBQVYsT0FBZDtBQUNEOzs7V0FFRCxnQkFBTztBQUNMLFdBQUt1QixRQUFMLENBQWM7QUFBQ3JGLFlBQUksRUFBRTtBQUFQLE9BQWQ7QUFDRDs7O1dBRUQsaUJBQVE7QUFDTixVQUFJb0gsUUFBUSxHQUFHO0FBQ2JwSCxZQUFJLEVBQUUsS0FETztBQUViOEQsZUFBTyxFQUFFLEtBQUt1QyxLQUFMLENBQVcvRyxRQUFYLEdBQXNCLEVBQXRCLEdBQTBCLEtBQUtnSCxLQUFMLENBQVd4QztBQUZqQyxPQUFmO0FBSUEsV0FBS3VCLFFBQUwsQ0FBYytCLFFBQWQ7QUFDRDs7O1dBRUQseUJBQWdCO0FBQ2QsV0FBSy9CLFFBQUwsQ0FBYztBQUFDa0IsbUJBQVcsRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFBMUIsT0FBZDtBQUNEOzs7RUF0RmlDYyxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2M0Zy1wb3B1cC1jb250cm9sbGVyX2pzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7T3ZlcmxheX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lclwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1BvcHVwQ29udGFpbmVyfSBmcm9tIFwiLi9jb21wb25lbnRzL2M0Zy1wb3B1cC1jb250YWluZXIuanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdQb3B1cENvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByb3h5KSB7XG4gICAgdGhpcy5tYXBDb250cm9sbGVyID0gcHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMubWFwRGF0YSA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIHRoaXMucG9wdXBIYW5kbGluZyA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCk7XG4gICAgdGhpcy5leHRlcm5hbCA9ICEhdGhpcy5tYXBEYXRhLnBvcHVwRGl2O1xuICAgIHRoaXMuY3VycmVudFBvcHVwID0gbnVsbDtcbiAgICB0aGlzLmNvbnRhaW5lck9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGFkZFBvcFVwKHBvcHVwQ29udGVudCkge1xuXG4gICAgbGV0IHBvcFVwRWxlbWVudCxcbiAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LFxuICAgICAgcG9wVXBDb250ZW50LFxuICAgICAgcG9wdXA7XG5cbiAgICBsZXQgcG9wdXBPcHRpb25zID0ge1xuICAgICAgb3BlbjogdGhpcy5jb250YWluZXJPcGVuLFxuICAgICAgYWx3YXlzRXh0ZW5kZWQ6IGZhbHNlLC8vdGhpcy5tYXBEYXRhLm9wZW5EaXJlY3RseSxcbiAgICAgIGhpZGVPdGhlcjogdGhpcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckJvdHRvbUNvbXBvbmVudHMsXG4gICAgICBtYXBEYXRhOiB0aGlzLm1hcERhdGEsXG4gICAgICBtYXBDb250cm9sbGVyOiB0aGlzLm1hcENvbnRyb2xsZXJcbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5jNGdNYXBzUG9wdXAgJiYgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cCkge1xuICAgICAgdGhpcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVPdmVybGF5KHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPT09IDMpIHtcbiAgICAgIGlmICh0aGlzLnBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cENvbnRhaW5lcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1hcENvbnRyb2xsZXIuY29tcG9uZW50cy5wb3B1cDtcbiAgICAgICAgaWYgKCF0aGlzLmV4dGVybmFsKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwb3B1cE9wdGlvbnMuZXh0ZXJuYWwgPSB0aGlzLmV4dGVybmFsO1xuICAgICAgdGhpcy5wb3B1cENvbnRhaW5lciA9IHRoaXMuZXh0ZXJuYWwgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5tYXBEYXRhLnBvcHVwRGl2KSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aGlzLnBvcHVwQ29tcG9uZW50ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXBDb250YWluZXIsIHBvcHVwT3B0aW9ucyksIHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgaWYgKCF0aGlzLmV4dGVybmFsKSB7XG4gICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LmFwcGVuZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudFBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgIC8vIGNsb3NlIG9wZW4gc2lkZWJvYXJkc1xuICAgICAgaWYgKCF0aGlzLmV4dGVybmFsKSB7XG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMuY3VycmVudFBvcHVwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwQ29udHJvbGxlci5jb21wb25lbnRzLnBvcHVwID0gdGhpcy5wb3B1cENvbXBvbmVudDtcbiAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAgPSB7fTtcbiAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAgPSB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBvcFVwRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2M0Z19wb3B1cF8nICsgdGhpcy5tYXBEYXRhLm1hcElkKTtcbiAgICAgIHBvcFVwRWxlbWVudC5jbGFzc05hbWUgPSAnYzRnLXBvcHVwLXdyYXBwZXInO1xuXG4gICAgICBwb3BVcENsb3NlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcG9wVXBDbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctcG9wdXAtY2xvc2UgYzRnLWljb25cIjtcblxuICAgICAgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwb3BVcENvbnRlbnQuY2xhc3NOYW1lID0gXCJjNGctcG9wdXAtY29udGVudFwiO1xuXG4gICAgICBwb3BVcEVsZW1lbnQuYXBwZW5kQ2hpbGQocG9wVXBDbG9zZUVsZW1lbnQpO1xuICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ29udGVudCk7XG4gICAgICBqUXVlcnkocG9wVXBDbG9zZUVsZW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLiRwb3B1cCA/IHdpbmRvdy5jNGdNYXBzUG9wdXAuJHBvcHVwLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpIDogZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA9PT0gMSB8fCB0aGlzLnBvcHVwSGFuZGxpbmcgPT09IDApIHtcbiAgICAgICAgbGV0IGF1dG9QYW4gPSB0aGlzLnBvcHVwSGFuZGxpbmcgPT09IDE7XG4gICAgICAgIGlmIChhdXRvUGFuKSB7XG4gICAgICAgICAgLy8gbGV0IG1hcFNlbGVjdG9yID0gXCIjXCIgKyB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLm1hcERpdiArIFwiID4gZGl2ID4gY2FudmFzXCI7XG4gICAgICAgICAgLy8gbGV0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcFNlbGVjdG9yKTtcbiAgICAgICAgICAvLyBsZXQgbWF4SGVpZ2h0UG9wdXAgPSBtYXBFbGVtZW50Lm9mZnNldEhlaWdodCAtIDUwO1xuICAgICAgICAgIC8vICQocG9wVXBFbGVtZW50KS5jc3MoXCJtYXgtaGVpZ2h0XCIsIG1heEhlaWdodFBvcHVwKTtcbiAgICAgICAgfVxuICAgICAgICBwb3B1cCA9IG5ldyBPdmVybGF5KHtcbiAgICAgICAgICBlbGVtZW50OiBwb3BVcEVsZW1lbnQsXG4gICAgICAgICAgcG9zaXRpb25pbmc6ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICBhdXRvUGFuOiBhdXRvUGFuLFxuICAgICAgICAgIGF1dG9QYW5BbmltYXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF1dG9QYW5NYXJnaW46IDIwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPT09IDIpIHtcbiAgICAgICAgJChwb3BVcEVsZW1lbnQpLmFkZENsYXNzKCdjNGctcG9wdXAtd3JhcHBlci1ub25vc2UnKTtcbiAgICAgICAgcG9wdXAgPSBuZXcgT3ZlcmxheSh7XG4gICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgIHBvc2l0aW9uaW5nOiAnY2VudGVyLWNlbnRlcicsXG4gICAgICAgICAgb2Zmc2V0OiBbLTUwLCAwXSxcbiAgICAgICAgICBhdXRvUGFuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAod2luZG93LmM0Z01hcHNQb3B1cCAmJiB3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwICYmIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAuY3VycmVudFBvcHVwKSB7XG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlT3ZlcmxheSh3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwLmN1cnJlbnRQb3B1cCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwID0ge307XG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwID0gdGhpcztcbiAgICAgIC8vIGF0dGFjaCBhIHNwaW5uZXIgdG8gdGhlIHBvcHVwXG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLnNwaW5uZXIgPSBuZXcgU3Bpbm5lcih7dGFyZ2V0OiBwb3BVcEVsZW1lbnR9KTtcblxuICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAuYWRkT3ZlcmxheShwb3B1cCk7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcHVwID0gcG9wdXA7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLiRwb3B1cCA9IGpRdWVyeSh0aGlzLmdldEVsZW1lbnQoKSk7XG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLiRjb250ZW50ID0galF1ZXJ5KCcuYzRnLXBvcHVwLWNvbnRlbnQnLCB3aW5kb3cuYzRnTWFwc1BvcHVwLiRwb3B1cCk7XG4gICAgfVxuICB9IC8vIGVuZCBvZiBcImFkZFBvcFVwKClcIlxuXG4gIHNldFBvcHVwKHBvcHVwQ29uZmlnKSB7XG4gICAgdmFyIGZlYXR1cmUsXG4gICAgICBsYXllcixcbiAgICAgIHBvcHVwQ29udGVudCxcbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgZmVhdHVyZSA9IHBvcHVwQ29uZmlnLmZlYXR1cmU7XG4gICAgbGF5ZXIgPSBwb3B1cENvbmZpZy5sYXllcjtcblxuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSkge1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvcHVwQ29udGVudCArPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmVzW2ldLCBsYXllciwgdGhpcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwQ29udGVudCA9IHV0aWxzLnJlcGxhY2VBbGxQbGFjZWhvbGRlcnMocG9wdXBDb25maWcucG9wdXAuY29udGVudCwgZmVhdHVyZSwgbGF5ZXIsIHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgIT09IDMpIHtcbiAgICAgIGlmIChwYXJzZUludCh0aGlzLm1hcERhdGEucG9wdXBIYW5kbGluZywgMTApICE9PSAyKSB7XG4gICAgICAgIGxldCBhdXRvUGFuID0gcGFyc2VJbnQodGhpcy5tYXBEYXRhLnBvcHVwSGFuZGxpbmcsIDEwKSA9PT0gMTtcbiAgICAgICAgaWYgKGF1dG9QYW4pIHtcbiAgICAgICAgICBsZXQgbWFwU2VsZWN0b3IgPSBcIiNcIiArIHRoaXMubWFwQ29udHJvbGxlci5kYXRhLm1hcERpdiArIFwiIGNhbnZhc1wiO1xuICAgICAgICAgIGxldCBtYXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXBTZWxlY3Rvcik7XG4gICAgICAgICAgbGV0IG1heEhlaWdodFBvcHVwID0gbWFwRWxlbWVudC5vZmZzZXRIZWlnaHQgLSA1MDtcbiAgICAgICAgICAkKHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAuZWxlbWVudCkuY3NzKFwibWF4LWhlaWdodFwiLCBtYXhIZWlnaHRQb3B1cCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBvcHVwQ29udGVudC50cmltKCkpIHtcbiAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC4kY29udGVudCA/IHdpbmRvdy5jNGdNYXBzUG9wdXAuJGNvbnRlbnQuaHRtbChwb3B1cENvbnRlbnQpIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSAmJiBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9pbnQnKSB7XG4gICAgICAgICAgaWYgKHNlbGYubWFwRGF0YS5wb3B1cEhhbmRsaW5nICYmIHNlbGYubWFwRGF0YS5wb3B1cEhhbmRsaW5nICE9PSAnMicpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAuc2V0UG9zaXRpb24oZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwLnNldFBvc2l0aW9uKHNlbGYubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihmZWF0dXJlLmdldEdlb21ldHJ5KCkgJiYgZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ1BvbHlnb24nKSB7XG4gICAgICAgICAgbGV0IGV4dGVudCA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKTtcbiAgICAgICAgICBsZXQgY2VudGVyID0gWyhleHRlbnRbMF0gKyBleHRlbnRbMl0pIC8gMiwgKGV4dGVudFsxXSArIGV4dGVudFszXSkgLyAyLF07XG4gICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihjZW50ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoaWRlIHBvcHVwIGlmIHRoZXJlIGlzIG5vIHZhbGlkIGNvbnRlbnQgbGVmdFxuICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLiRwb3B1cC5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkxPQURJTkcpO1xuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5zcGlubmVyLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJvdXRlQnV0dG9ucyA9IDA7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ3BvcHVwJykpIHtcbiAgICAgICAgcm91dGVCdXR0b25zID0gcGFyc2VJbnQoZmVhdHVyZS5nZXQoJ3BvcHVwJykucm91dGluZ19saW5rLCAxMCk7XG4gICAgICB9IGVsc2UgaWYgKGxheWVyLmdldCgncG9wdXAnKSkge1xuICAgICAgICByb3V0ZUJ1dHRvbnMgPSBwYXJzZUludChsYXllci5nZXQoJ3BvcHVwJykucm91dGluZ19saW5rLCAxMCk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRQb3B1cC5zZXRTdGF0ZSh7Y29udGVudDogcG9wdXBDb250ZW50LCBvcGVuOiB0cnVlfSk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwLCB7XG4gICAgICAgIHBvcHVwOiBwb3B1cENvbmZpZyxcbiAgICAgICAgY29udGVudDogcG9wdXBDb250ZW50LFxuICAgICAgICBtYXBDb250cm9sbGVyOiB0aGlzLm1hcENvbnRyb2xsZXIsXG4gICAgICAgIGNvbXA6IHRoaXMucG9wdXBDb21wb25lbnQgfHwgbnVsbFxuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgfSAvLyBlbmQgb2YgXCJzZXRQb3B1cCgpXCJcblxuICBjbG9zZSAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvcHVwLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3B1cCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3B1cC5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW3Nob3cgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzaG93ICgpIHtcbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgdGhpcy5jdXJyZW50UG9wdXAuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBUT0RPXG4gICAqIFtoaWRlIGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgaGlkZSAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvcHVwLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW2dldENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqL1xuICBnZXRDb250ZW50ICgpIHtcbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBvcHVwLmdldENvbnRlbnQoKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbZ2V0UG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAqXG4gICAqL1xuICBnZXRQb3NpdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQb3B1cC5nZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbc2V0Q29udGVudCBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHBhcmFtICB7W3R5cGVdfSAgY29udGVudCAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2V0Q29udGVudCAoY29udGVudCkge1xuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQb3B1cC5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRQb3B1cC5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbc2V0UG9zaXRpb24gZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvb3JkaW5hdGVzICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBzZXRQb3NpdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgdGhpcy5jdXJyZW50UG9wdXAuc2V0UG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lck9wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldEVsZW1lbnQgKCkge1xuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50UG9wdXAuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuLFxuICAgICAgZGV0YWlsc09wZW46IGZhbHNlLFxuICAgICAgY29uc3RzdHI6IGZhbHNlXG4gICAgfTtcbiAgICBwcm9wcy5oaWRlT3RoZXIodGhpcyk7XG4gICAgdGhpcy5yb3V0ZUJ1dHRvbnMgPSBcIlwiO1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLm1hcERhdGEpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVEZXRhaWxzID0gdGhpcy50b2dnbGVEZXRhaWxzLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZGV0YWlsQnRuQ2xhc3MgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DYiA9IFwiXCI7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZXh0ZXJuYWwgPyBcImM0Zy1wb3B1cC1jb250YWluZXIgXCIgOiBcImM0Zy1zaWRlYm9hcmQgYzRnLXBvcHVwLWNvbnRhaW5lciBcIjtcblxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcImM0Zy1vcGVuIFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuYWx3YXlzRXh0ZW5kZWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHNPcGVuKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBjNGctZGV0YWlscy1vcGVuXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtY2xvc2VkXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBoZWFkZXJDbGFzcyA9IFwiYzRnLXBvcHVwLWhlYWRlclwiO1xuICAgIGxldCBhZGRCdXR0b25zID0gPGRpdi8+O1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnN0c3RyKSB7XG4gICAgICBoZWFkZXJDbGFzcyArPSBcIiBjNGctcm91dGluZ1wiO1xuICAgICAgYWRkQnV0dG9ucyA9IDx0aGlzLnN0YXRlLmNvbnN0c3RyIGNvbmZpZz17dGhpcy5zdGF0ZS5jb25maWd9Lz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17aGVhZGVyQ2xhc3N9IGhlYWRlckNsYXNzPXtcImM0Zy1wb3B1cC1oZWFkZXItaGVhZGxpbmVcIn0gaGVhZGVyPXt0aGlzLnByb3BzLm1hcERhdGEucG9wdXBIZWFkbGluZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ3VhZ2UuQ0xPU0V9XG4gICAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiXCJ9IGRldGFpbEJ0bkNiPXtcIlwifT5cbiAgICAgICAgICAgICAge2FkZEJ1dHRvbnN9XG4gICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLWNvbnRlbnRcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMuc3RhdGUuY29udGVudH19Lz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzZXRBZGRCdXR0b25zKGNvbnN0c3RyLCBjb25maWcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY29uc3RzdHI6IGNvbnN0c3RyXG4gICAgfSk7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb250ZW50OiBjb250ZW50fSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgY29udGVudDogdGhpcy5wcm9wcy5leHRlcm5hbCA/IFwiXCI6IHRoaXMuc3RhdGUuY29udGVudFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICB0b2dnbGVEZXRhaWxzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbHNPcGVuOiAhdGhpcy5zdGF0ZS5kZXRhaWxzT3Blbn0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9