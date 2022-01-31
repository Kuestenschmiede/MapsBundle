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

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./src/Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gPopupContainer = __webpack_require__(/*! ./components/c4g-popup-container.jsx */ "./src/Resources/public/js/components/c4g-popup-container.jsx");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfYzRnLXBvcHVwLWNvbnRyb2xsZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFVYUE7QUFFWCw4QkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQ2pCLFNBQUtDLGFBQUwsR0FBcUJELEtBQUssQ0FBQ0UsT0FBTixDQUFjRCxhQUFuQztBQUNBLFNBQUtFLE9BQUwsR0FBZUgsS0FBSyxDQUFDRSxPQUFOLENBQWNELGFBQWQsQ0FBNEJHLElBQTNDO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDLEtBQUtILE9BQUwsQ0FBYUUsYUFBZCxFQUE2QixFQUE3QixDQUE3QjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsQ0FBQyxDQUFDLEtBQUtKLE9BQUwsQ0FBYUssUUFBL0I7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNEOzs7O1dBRUQsa0JBQVNDLFlBQVQsRUFBdUI7QUFFckIsVUFBSUMsWUFBSixFQUNFQyxpQkFERixFQUVFQyxZQUZGLEVBR0VDLEtBSEY7QUFLQSxVQUFJQyxZQUFZLEdBQUc7QUFDakJDLFFBQUFBLElBQUksRUFBRSxLQUFLUCxhQURNO0FBRWpCUSxRQUFBQSxjQUFjLEVBQUUsS0FGQztBQUVLO0FBQ3RCQyxRQUFBQSxTQUFTLEVBQUUsS0FBS2xCLGFBQUwsQ0FBbUJtQix5QkFIYjtBQUlqQmpCLFFBQUFBLE9BQU8sRUFBRSxLQUFLQSxPQUpHO0FBS2pCRixRQUFBQSxhQUFhLEVBQUUsS0FBS0E7QUFMSCxPQUFuQjs7QUFRQSxVQUFJb0IsTUFBTSxDQUFDQyxZQUFQLElBQXVCRCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JQLEtBQS9DLEVBQXNE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QUFjO0FBQUNyRixRQUFBQSxJQUFJLEVBQUU7QUFBUCxPQUFkO0FBQ0Q7OztXQUVELGlCQUFRO0FBQ04sVUFBSW9ILFFBQVEsR0FBRztBQUNicEgsUUFBQUEsSUFBSSxFQUFFLEtBRE87QUFFYjhELFFBQUFBLE9BQU8sRUFBRSxLQUFLdUMsS0FBTCxDQUFXL0csUUFBWCxHQUFzQixFQUF0QixHQUEwQixLQUFLZ0gsS0FBTCxDQUFXeEM7QUFGakMsT0FBZjtBQUlBLFdBQUt1QixRQUFMLENBQWMrQixRQUFkO0FBQ0Q7OztXQUVELHlCQUFnQjtBQUNkLFdBQUsvQixRQUFMLENBQWM7QUFBQ2tCLFFBQUFBLFdBQVcsRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFBMUIsT0FBZDtBQUNEOzs7RUF0RmlDYyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctcG9wdXAtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge092ZXJsYXl9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi9jNGctbWFwcy1taXNjLXNwaW5uZXJcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQb3B1cENvbnRhaW5lcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jNGctcG9wdXAtY29udGFpbmVyLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgQzRnUG9wdXBDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihwcm94eSkge1xuICAgIHRoaXMubWFwQ29udHJvbGxlciA9IHByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLm1hcERhdGEgPSBwcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICB0aGlzLnBvcHVwSGFuZGxpbmcgPSBwYXJzZUludCh0aGlzLm1hcERhdGEucG9wdXBIYW5kbGluZywgMTApO1xuICAgIHRoaXMuZXh0ZXJuYWwgPSAhIXRoaXMubWFwRGF0YS5wb3B1cERpdjtcbiAgICB0aGlzLmN1cnJlbnRQb3B1cCA9IG51bGw7XG4gICAgdGhpcy5jb250YWluZXJPcGVuID0gZmFsc2U7XG4gIH1cblxuICBhZGRQb3BVcChwb3B1cENvbnRlbnQpIHtcblxuICAgIGxldCBwb3BVcEVsZW1lbnQsXG4gICAgICBwb3BVcENsb3NlRWxlbWVudCxcbiAgICAgIHBvcFVwQ29udGVudCxcbiAgICAgIHBvcHVwO1xuXG4gICAgbGV0IHBvcHVwT3B0aW9ucyA9IHtcbiAgICAgIG9wZW46IHRoaXMuY29udGFpbmVyT3BlbixcbiAgICAgIGFsd2F5c0V4dGVuZGVkOiBmYWxzZSwvL3RoaXMubWFwRGF0YS5vcGVuRGlyZWN0bHksXG4gICAgICBoaWRlT3RoZXI6IHRoaXMubWFwQ29udHJvbGxlci5oaWRlT3RoZXJCb3R0b21Db21wb25lbnRzLFxuICAgICAgbWFwRGF0YTogdGhpcy5tYXBEYXRhLFxuICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5tYXBDb250cm9sbGVyXG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuYzRnTWFwc1BvcHVwICYmIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXApIHtcbiAgICAgIHRoaXMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlT3ZlcmxheSh3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nID09PSAzKSB7XG4gICAgICBpZiAodGhpcy5wb3B1cENvbnRhaW5lcikge1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXBDb250YWluZXIpO1xuICAgICAgICBkZWxldGUgdGhpcy5tYXBDb250cm9sbGVyLmNvbXBvbmVudHMucG9wdXA7XG4gICAgICAgIGlmICghdGhpcy5leHRlcm5hbCkge1xuICAgICAgICAgIHRoaXMucG9wdXBDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcG9wdXBPcHRpb25zLmV4dGVybmFsID0gdGhpcy5leHRlcm5hbDtcbiAgICAgIHRoaXMucG9wdXBDb250YWluZXIgPSB0aGlzLmV4dGVybmFsID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMubWFwRGF0YS5wb3B1cERpdikgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgdGhpcy5wb3B1cENvbXBvbmVudCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwQ29udGFpbmVyLCBwb3B1cE9wdGlvbnMpLCB0aGlzLnBvcHVwQ29udGFpbmVyKTtcbiAgICAgIGlmICghdGhpcy5leHRlcm5hbCkge1xuICAgICAgICAgdGhpcy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5hcHBlbmQodGhpcy5wb3B1cENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRQb3B1cCA9IHRoaXMucG9wdXBDb21wb25lbnQ7XG4gICAgICAvLyBjbG9zZSBvcGVuIHNpZGVib2FyZHNcbiAgICAgIGlmICghdGhpcy5leHRlcm5hbCkge1xuICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyh0aGlzLmN1cnJlbnRQb3B1cCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1hcENvbnRyb2xsZXIuY29tcG9uZW50cy5wb3B1cCA9IHRoaXMucG9wdXBDb21wb25lbnQ7XG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwID0ge307XG4gICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwID0gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wVXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwb3BVcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjNGdfcG9wdXBfJyArIHRoaXMubWFwRGF0YS5tYXBJZCk7XG4gICAgICBwb3BVcEVsZW1lbnQuY2xhc3NOYW1lID0gJ2M0Zy1wb3B1cC13cmFwcGVyJztcblxuICAgICAgcG9wVXBDbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHBvcFVwQ2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBvcHVwLWNsb3NlIGM0Zy1pY29uXCI7XG5cbiAgICAgIHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcG9wVXBDb250ZW50LmNsYXNzTmFtZSA9IFwiYzRnLXBvcHVwLWNvbnRlbnRcIjtcblxuICAgICAgcG9wVXBFbGVtZW50LmFwcGVuZENoaWxkKHBvcFVwQ2xvc2VFbGVtZW50KTtcbiAgICAgIHBvcFVwRWxlbWVudC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xuICAgICAgalF1ZXJ5KHBvcFVwQ2xvc2VFbGVtZW50KS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAgPyB3aW5kb3cuYzRnTWFwc1BvcHVwLiRwb3B1cC5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKSA6IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPT09IDEgfHwgdGhpcy5wb3B1cEhhbmRsaW5nID09PSAwKSB7XG4gICAgICAgIGxldCBhdXRvUGFuID0gdGhpcy5wb3B1cEhhbmRsaW5nID09PSAxO1xuICAgICAgICBpZiAoYXV0b1Bhbikge1xuICAgICAgICAgIC8vIGxldCBtYXBTZWxlY3RvciA9IFwiI1wiICsgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5tYXBEaXYgKyBcIiA+IGRpdiA+IGNhbnZhc1wiO1xuICAgICAgICAgIC8vIGxldCBtYXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXBTZWxlY3Rvcik7XG4gICAgICAgICAgLy8gbGV0IG1heEhlaWdodFBvcHVwID0gbWFwRWxlbWVudC5vZmZzZXRIZWlnaHQgLSA1MDtcbiAgICAgICAgICAvLyAkKHBvcFVwRWxlbWVudCkuY3NzKFwibWF4LWhlaWdodFwiLCBtYXhIZWlnaHRQb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXAgPSBuZXcgT3ZlcmxheSh7XG4gICAgICAgICAgZWxlbWVudDogcG9wVXBFbGVtZW50LFxuICAgICAgICAgIHBvc2l0aW9uaW5nOiAnYm90dG9tLWxlZnQnLFxuICAgICAgICAgIG9mZnNldDogWy01MCwgMF0sXG4gICAgICAgICAgYXV0b1BhbjogYXV0b1BhbixcbiAgICAgICAgICBhdXRvUGFuQW5pbWF0aW9uOiB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjUwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdXRvUGFuTWFyZ2luOiAyMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3B1cEhhbmRsaW5nID09PSAyKSB7XG4gICAgICAgICQocG9wVXBFbGVtZW50KS5hZGRDbGFzcygnYzRnLXBvcHVwLXdyYXBwZXItbm9ub3NlJyk7XG4gICAgICAgIHBvcHVwID0gbmV3IE92ZXJsYXkoe1xuICAgICAgICAgIGVsZW1lbnQ6IHBvcFVwRWxlbWVudCxcbiAgICAgICAgICBwb3NpdGlvbmluZzogJ2NlbnRlci1jZW50ZXInLFxuICAgICAgICAgIG9mZnNldDogWy01MCwgMF0sXG4gICAgICAgICAgYXV0b1BhbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jNGdNYXBzUG9wdXAgJiYgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cCAmJiB3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwLmN1cnJlbnRQb3B1cCkge1xuICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZU92ZXJsYXkod2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5jdXJyZW50UG9wdXApO1xuICAgICAgfVxuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cCA9IHt9O1xuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cCA9IHRoaXM7XG4gICAgICAvLyBhdHRhY2ggYSBzcGlubmVyIHRvIHRoZSBwb3B1cFxuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5zcGlubmVyID0gbmV3IFNwaW5uZXIoe3RhcmdldDogcG9wVXBFbGVtZW50fSk7XG5cbiAgICAgIGlmIChwb3B1cCkge1xuICAgICAgICB0aGlzLm1hcENvbnRyb2xsZXIubWFwLmFkZE92ZXJsYXkocG9wdXApO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3B1cCA9IHBvcHVwO1xuICAgICAgfVxuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAgPSBqUXVlcnkodGhpcy5nZXRFbGVtZW50KCkpO1xuICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC4kY29udGVudCA9IGpRdWVyeSgnLmM0Zy1wb3B1cC1jb250ZW50Jywgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXApO1xuICAgIH1cbiAgfSAvLyBlbmQgb2YgXCJhZGRQb3BVcCgpXCJcblxuICBzZXRQb3B1cChwb3B1cENvbmZpZykge1xuICAgIHZhciBmZWF0dXJlLFxuICAgICAgbGF5ZXIsXG4gICAgICBwb3B1cENvbnRlbnQsXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgIGZlYXR1cmUgPSBwb3B1cENvbmZpZy5mZWF0dXJlO1xuICAgIGxheWVyID0gcG9wdXBDb25maWcubGF5ZXI7XG5cbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3B1cENvbnRlbnQgKz0gdXRpbHMucmVwbGFjZUFsbFBsYWNlaG9sZGVycyhwb3B1cENvbmZpZy5wb3B1cC5jb250ZW50LCBmZWF0dXJlc1tpXSwgbGF5ZXIsIHRoaXMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3B1cENvbnRlbnQgPSB1dGlscy5yZXBsYWNlQWxsUGxhY2Vob2xkZXJzKHBvcHVwQ29uZmlnLnBvcHVwLmNvbnRlbnQsIGZlYXR1cmUsIGxheWVyLCB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nICE9PSAzKSB7XG4gICAgICBpZiAocGFyc2VJbnQodGhpcy5tYXBEYXRhLnBvcHVwSGFuZGxpbmcsIDEwKSAhPT0gMikge1xuICAgICAgICBsZXQgYXV0b1BhbiA9IHBhcnNlSW50KHRoaXMubWFwRGF0YS5wb3B1cEhhbmRsaW5nLCAxMCkgPT09IDE7XG4gICAgICAgIGlmIChhdXRvUGFuKSB7XG4gICAgICAgICAgbGV0IG1hcFNlbGVjdG9yID0gXCIjXCIgKyB0aGlzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXBEaXYgKyBcIiBjYW52YXNcIjtcbiAgICAgICAgICBsZXQgbWFwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWFwU2VsZWN0b3IpO1xuICAgICAgICAgIGxldCBtYXhIZWlnaHRQb3B1cCA9IG1hcEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gNTA7XG4gICAgICAgICAgJCh3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwLmVsZW1lbnQpLmNzcyhcIm1heC1oZWlnaHRcIiwgbWF4SGVpZ2h0UG9wdXApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3B1cENvbnRlbnQudHJpbSgpKSB7XG4gICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJGNvbnRlbnQgPyB3aW5kb3cuYzRnTWFwc1BvcHVwLiRjb250ZW50Lmh0bWwocG9wdXBDb250ZW50KSA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkgJiYgZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ1BvaW50Jykge1xuICAgICAgICAgIGlmIChzZWxmLm1hcERhdGEucG9wdXBIYW5kbGluZyAmJiBzZWxmLm1hcERhdGEucG9wdXBIYW5kbGluZyAhPT0gJzInKSB7XG4gICAgICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwLnNldFBvc2l0aW9uKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihzZWxmLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoZmVhdHVyZS5nZXRHZW9tZXRyeSgpICYmIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdQb2x5Z29uJykge1xuICAgICAgICAgIGxldCBleHRlbnQgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgbGV0IGNlbnRlciA9IFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMixdO1xuICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAuc2V0UG9zaXRpb24oY2VudGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaGlkZSBwb3B1cCBpZiB0aGVyZSBpcyBubyB2YWxpZCBjb250ZW50IGxlZnRcbiAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJHBvcHVwLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5MT0FESU5HKTtcbiAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuc3Bpbm5lci5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByb3V0ZUJ1dHRvbnMgPSAwO1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdwb3B1cCcpKSB7XG4gICAgICAgIHJvdXRlQnV0dG9ucyA9IHBhcnNlSW50KGZlYXR1cmUuZ2V0KCdwb3B1cCcpLnJvdXRpbmdfbGluaywgMTApO1xuICAgICAgfSBlbHNlIGlmIChsYXllci5nZXQoJ3BvcHVwJykpIHtcbiAgICAgICAgcm91dGVCdXR0b25zID0gcGFyc2VJbnQobGF5ZXIuZ2V0KCdwb3B1cCcpLnJvdXRpbmdfbGluaywgMTApO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50UG9wdXAuc2V0U3RhdGUoe2NvbnRlbnQ6IHBvcHVwQ29udGVudCwgb3BlbjogdHJ1ZX0pO1xuICAgIH1cbiAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwID09PSAnb2JqZWN0Jykge1xuICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9hcHBlbmRQb3B1cCwge1xuICAgICAgICBwb3B1cDogcG9wdXBDb25maWcsXG4gICAgICAgIGNvbnRlbnQ6IHBvcHVwQ29udGVudCxcbiAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5tYXBDb250cm9sbGVyLFxuICAgICAgICBjb21wOiB0aGlzLnBvcHVwQ29tcG9uZW50IHx8IG51bGxcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gIH0gLy8gZW5kIG9mIFwic2V0UG9wdXAoKVwiXG5cbiAgY2xvc2UgKCkge1xuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQb3B1cC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UG9wdXApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9wdXAuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBUT0RPXG4gICAqIFtzaG93IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2hvdyAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvcHVwLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKiBbaGlkZSBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGhpZGUgKCkge1xuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQb3B1cC5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBUT0RPXG4gICAqIFtnZXRDb250ZW50IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKi9cbiAgZ2V0Q29udGVudCAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQb3B1cC5nZXRDb250ZW50KCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW2dldFBvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKi9cbiAgZ2V0UG9zaXRpb24gKCkge1xuICAgIGlmICh0aGlzLnBvcHVwSGFuZGxpbmcgPCAzKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50UG9wdXAuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW3NldENvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvbnRlbnQgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNldENvbnRlbnQgKGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgdGhpcy5jdXJyZW50UG9wdXAuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50UG9wdXAuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW3NldFBvc2l0aW9uIGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBjb29yZGluYXRlcyAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgc2V0UG9zaXRpb24gKGNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMucG9wdXBIYW5kbGluZyA8IDMpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvcHVwLnNldFBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXJPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRFbGVtZW50ICgpIHtcbiAgICBpZiAodGhpcy5wb3B1cEhhbmRsaW5nIDwgMykge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBvcHVwLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcblxuZXhwb3J0IGNsYXNzIFBvcHVwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbixcbiAgICAgIGRldGFpbHNPcGVuOiBmYWxzZSxcbiAgICAgIGNvbnN0c3RyOiBmYWxzZVxuICAgIH07XG4gICAgcHJvcHMuaGlkZU90aGVyKHRoaXMpO1xuICAgIHRoaXMucm91dGVCdXR0b25zID0gXCJcIjtcbiAgICB0aGlzLmxhbmd1YWdlID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBEYXRhKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRGV0YWlscyA9IHRoaXMudG9nZ2xlRGV0YWlscy5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRldGFpbEJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2IgPSBcIlwiO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmV4dGVybmFsID8gXCJjNGctcG9wdXAtY29udGFpbmVyIFwiIDogXCJjNGctc2lkZWJvYXJkIGM0Zy1wb3B1cC1jb250YWluZXIgXCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCJjNGctb3BlbiBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmFsd2F5c0V4dGVuZGVkKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzT3Blbikge1xuICAgICAgICBjbGFzc05hbWUgKz0gXCIgYzRnLWRldGFpbHMtb3BlblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIGM0Zy1kZXRhaWxzLWNsb3NlZFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGVhZGVyQ2xhc3MgPSBcImM0Zy1wb3B1cC1oZWFkZXJcIjtcbiAgICBsZXQgYWRkQnV0dG9ucyA9IDxkaXYvPjtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25zdHN0cikge1xuICAgICAgaGVhZGVyQ2xhc3MgKz0gXCIgYzRnLXJvdXRpbmdcIjtcbiAgICAgIGFkZEJ1dHRvbnMgPSA8dGhpcy5zdGF0ZS5jb25zdHN0ciBjb25maWc9e3RoaXMuc3RhdGUuY29uZmlnfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC13cmFwcGVyXCJ9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e2hlYWRlckNsYXNzfSBoZWFkZXJDbGFzcz17XCJjNGctcG9wdXAtaGVhZGVyLWhlYWRsaW5lXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5tYXBEYXRhLnBvcHVwSGVhZGxpbmUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmd1YWdlLkNMT1NFfVxuICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0+XG4gICAgICAgICAgICAgIHthZGRCdXR0b25zfVxuICAgICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC1jb250ZW50XCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmNvbnRlbnR9fS8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc2V0QWRkQnV0dG9ucyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogY29udGVudH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuZXh0ZXJuYWwgPyBcIlwiOiB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgdG9nZ2xlRGV0YWlscygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzT3BlbjogIXRoaXMuc3RhdGUuZGV0YWlsc09wZW59KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkM0Z1BvcHVwQ29udHJvbGxlciIsInByb3h5IiwibWFwQ29udHJvbGxlciIsIm9wdGlvbnMiLCJtYXBEYXRhIiwiZGF0YSIsInBvcHVwSGFuZGxpbmciLCJwYXJzZUludCIsImV4dGVybmFsIiwicG9wdXBEaXYiLCJjdXJyZW50UG9wdXAiLCJjb250YWluZXJPcGVuIiwicG9wdXBDb250ZW50IiwicG9wVXBFbGVtZW50IiwicG9wVXBDbG9zZUVsZW1lbnQiLCJwb3BVcENvbnRlbnQiLCJwb3B1cCIsInBvcHVwT3B0aW9ucyIsIm9wZW4iLCJhbHdheXNFeHRlbmRlZCIsImhpZGVPdGhlciIsImhpZGVPdGhlckJvdHRvbUNvbXBvbmVudHMiLCJ3aW5kb3ciLCJjNGdNYXBzUG9wdXAiLCJtYXAiLCJyZW1vdmVPdmVybGF5IiwicG9wdXBDb250YWluZXIiLCJSZWFjdERPTSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJjb21wb25lbnRzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsInBvcHVwQ29tcG9uZW50IiwicmVuZGVyIiwiUmVhY3QiLCJQb3B1cENvbnRhaW5lciIsIiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudCIsImFwcGVuZCIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJzZXRBdHRyaWJ1dGUiLCJtYXBJZCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHBvcHVwIiwicmVtb3ZlQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJBQ1RJVkUiLCJhdXRvUGFuIiwiT3ZlcmxheSIsImVsZW1lbnQiLCJwb3NpdGlvbmluZyIsIm9mZnNldCIsImF1dG9QYW5BbmltYXRpb24iLCJkdXJhdGlvbiIsImF1dG9QYW5NYXJnaW4iLCIkIiwiYWRkQ2xhc3MiLCJzcGlubmVyIiwiU3Bpbm5lciIsInRhcmdldCIsImFkZE92ZXJsYXkiLCJnZXRFbGVtZW50IiwiJGNvbnRlbnQiLCJwb3B1cENvbmZpZyIsImZlYXR1cmUiLCJsYXllciIsInNlbGYiLCJnZXQiLCJmZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJ1dGlscyIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJjb250ZW50IiwibGFuZyIsIm1hcFNlbGVjdG9yIiwibWFwRGl2IiwibWFwRWxlbWVudCIsIm1heEhlaWdodFBvcHVwIiwib2Zmc2V0SGVpZ2h0IiwiY3NzIiwidHJpbSIsImh0bWwiLCJnZXRHZW9tZXRyeSIsImdldFR5cGUiLCJzZXRQb3NpdGlvbiIsImdldENvb3JkaW5hdGVzIiwiZ2V0VmlldyIsImdldENlbnRlciIsImV4dGVudCIsImdldEV4dGVudCIsImNlbnRlciIsIkxPQURJTkciLCJoaWRlIiwicm91dGVCdXR0b25zIiwicm91dGluZ19saW5rIiwic2V0U3RhdGUiLCJjNGdNYXBzSG9va3MiLCJ1bmRlZmluZWQiLCJwcm94eV9hcHBlbmRQb3B1cCIsImNhbGxIb29rRnVuY3Rpb25zIiwiY29tcCIsImNsb3NlIiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb250ZW50IiwiZ2V0UG9zaXRpb24iLCJzZXRDb250ZW50IiwiY29vcmRpbmF0ZXMiLCJUaXRsZWJhciIsImxhenkiLCJwcm9wcyIsInN0YXRlIiwiZGV0YWlsc09wZW4iLCJjb25zdHN0ciIsImxhbmd1YWdlIiwiYmluZCIsInRvZ2dsZURldGFpbHMiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwiaGVhZGVyQ2xhc3MiLCJhZGRCdXR0b25zIiwiY29uZmlnIiwicG9wdXBIZWFkbGluZSIsIkNMT1NFIiwiX19odG1sIiwibmV3U3RhdGUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9