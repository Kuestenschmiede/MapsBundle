(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-view_jsx"],{

/***/ "../CoreBundle/Resources/public/js/AlertHandler.js":
/*!*********************************************************!*\
  !*** ../CoreBundle/Resources/public/js/AlertHandler.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertHandler": () => (/* binding */ AlertHandler)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * con4gis - the gis-kit
 *
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */



/**
 * The "cssClass" parameter in the functions can either be a string or an object. If it's a string, it will be applied
 * as class for the popup. If an object is passed, the classes can be set more precise. The following properties are
 * possible in the object:
 * cssClass: {
 *   container: 'container-class',
 *   popup: 'popup-class',
 *   header: 'header-class',
 *   title: 'title-class',
 *   closeButton: 'close-button-class',
 *   icon: 'icon-class',
 *   image: 'image-class',
 *   content: 'content-class',
 *   input: 'input-class',
 *   actions: 'actions-class',
 *   confirmButton: 'confirm-button-class',
 *   cancelButton: 'cancel-button-class',
 *   footer: 'footer-class'
 * }
 */
class AlertHandler {

  showErrorDialog(title, content, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      type: "error",
      customClass: cssClass ? cssClass : ''
    });
  }

  showInfoDialog(title, content, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      type: "info",
      customClass: cssClass ? cssClass : ''
    });;
  }

  showInfoActionDialog(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      type: "info",
      customClass: cssClass ? cssClass : ''
    }).then (
        function () {
          confirmCallback();
        }
    );
  }

  showInfoActionDialog2(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: content,
      type: "info",
      showLoaderOnConfirm: true,
      customClass: cssClass ? cssClass : '',
      preConfirm: (data) => {
        confirmCallback();
      }});
  }


  showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      dangerMode: true,
      customClass: cssClass ? cssClass : ''
    }).then((willDelete) => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }
  showConfirmDialogHTML(title, html, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      html: html,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      dangerMode: true,
      customClass: cssClass ? cssClass : ''
    }).then((willDelete) => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }

  showPreConfirmDialog(title, text, preConfirmCallback, confirmText, cancelText, cssClass, showLoading) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      showLoaderOnConfirm: showLoading ? showLoading : true,
      preConfirm: function () {
        return new Promise (function (data) {
          preConfirmCallback();
        })
      },
      allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().isLoading(),
      dangerMode: true,
      customClass: cssClass ? cssClass : ''
    });
  }

  showLoadingDialog(title, text, preConfirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      text: text,
      showCancelButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      showLoaderOnConfirm: true,
      onBeforeOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().clickConfirm();
      },
      customClass: cssClass ? cssClass : '',
      preConfirm: () => {
        return new Promise (function (data) {
          preConfirmCallback();
        })
      }
    });
  }

  async showSelectDialog(title, objOptions, confirmText, cancelText, cssClass) {
    const {value: selectedValue} = await sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: title,
      input: 'select',
      inputOptions: objOptions,
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      customClass: cssClass ? cssClass : ''
    });
    return selectedValue;
  }
}


/***/ }),

/***/ "./Resources/public/js/c4g-routing-permalink.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-routing-permalink.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RoutingPermalink = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RoutingPermalink = /*#__PURE__*/function () {
  function RoutingPermalink(router) {
    (0, _classCallCheck2["default"])(this, RoutingPermalink);
    (0, _defineProperty2["default"])(this, "_router", void 0);
    this._router = router;
    this.linkFragments = {};
    this.rawFragments = {};
  }

  (0, _createClass2["default"])(RoutingPermalink, [{
    key: "router",
    get: function get() {
      return this._router;
    },
    set: function set(value) {
      this._router = value;
    }
    /**
     * Sets one key of this.linkFragments to the given value.
     * @param key
     * @param value
     */

  }, {
    key: "updateLinkFragments",
    value: function updateLinkFragments(key, value) {
      if (!this.linkFragments) {
        this.linkFragments = {};
      }

      this.linkFragments[key] = value;
      this.updateUrl();
    }
    /**
     * Checks the current values in this.linkFragments and updates the browser URL.
     */

  }, {
    key: "updateUrl",
    value: function updateUrl() {
      var url = "?mapsParams=";
      var fragments = this.linkFragments;

      if (fragments.mode && fragments.mode === "area") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.addressArea ? "a:" + fragments.addressArea[0] + "," + fragments.addressArea[1] + "/" : "";
        url += fragments.detourArea ? "d:" + fragments.detourArea + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";
        var completeUrl = window.location.pathname + url;
        history.pushState({}, null, completeUrl);
      } else if (fragments.mode && fragments.mode === "route") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.fromAddress ? "af:" + fragments.fromAddress[0] + "," + fragments.fromAddress[1] + "/" : "";
        url += fragments.toAddress ? "at:" + fragments.toAddress[0] + "," + fragments.toAddress[1] + "/" : "";
        url += fragments.detourRoute ? "d:" + fragments.detourRoute + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";

        var _completeUrl = window.location.pathname + url;

        history.pushState({}, null, _completeUrl);
      }
    }
    /**
     * Checks if there are GET params loaded into the mapData and triggers the search accordingly.
     * The first param is expected to be either "route" or "area" to indicate the type of search.
     * After that, the next param (or the next two, in case of "route") should be an address string.
     * The following parameters are detour/searchtype/forceStart.
     */

  }, {
    key: "handleInitialParams",
    value: function () {
      var _handleInitialParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var scope, arrParams, objParams, routerLayers, desiredButton, key, obj, innerKey, singleEntry, cmpValue;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.rawFragments = this.router.props.mapController.data.initialParams;
                scope = this;

                if (!this.rawFragments) {
                  _context.next = 30;
                  break;
                }

                _context.next = 5;
                return this.checkForOldParams();

              case 5:
                arrParams = this.rawFragments.split("/").map(function (pair) {
                  return pair.split(":");
                });
                objParams = {};
                arrParams.forEach(function (_ref) {
                  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                      key = _ref2[0],
                      value = _ref2[1];

                  return objParams[key] = value;
                });
                routerLayers = this.router.props.mapController.data.routerLayers;
                desiredButton = "";
                _context.t0 = _regenerator["default"].keys(routerLayers);

              case 11:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 28;
                  break;
                }

                key = _context.t1.value;

                if (!routerLayers.hasOwnProperty(key)) {
                  _context.next = 26;
                  break;
                }

                obj = routerLayers[key];
                _context.t2 = _regenerator["default"].keys(obj);

              case 16:
                if ((_context.t3 = _context.t2()).done) {
                  _context.next = 26;
                  break;
                }

                innerKey = _context.t3.value;

                if (!obj.hasOwnProperty(innerKey)) {
                  _context.next = 24;
                  break;
                }

                singleEntry = obj[innerKey];
                cmpValue = objParams.s;

                if (!(singleEntry.mapLabel === cmpValue)) {
                  _context.next = 24;
                  break;
                }

                desiredButton = innerKey;
                return _context.abrupt("break", 28);

              case 24:
                _context.next = 16;
                break;

              case 26:
                _context.next = 11;
                break;

              case 28:
                // iterate buttons later on when the UI is built
                this.desiredButtonRouting = desiredButton;

                if (objParams.m === "area") {
                  this.handleInitialAreaSearch(objParams);
                } else if (objParams.m === "route") {
                  this.handleInitialRouteSearch(objParams);
                }

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleInitialParams() {
        return _handleInitialParams.apply(this, arguments);
      }

      return handleInitialParams;
    }()
    /**
     * Checks the URL for the deprecated URL structure and converts it to the current structure.
     */

  }, {
    key: "checkForOldParams",
    value: function () {
      var _checkForOldParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var strParams, params, arrFragments, fromCoords, toCoords, coords;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                strParams = "";
                params = this.router.props.mapController.data.initialParams;

                if (!(params.indexOf("m:") !== -1)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                arrFragments = params.split("/");
                strParams += "m:" + arrFragments[0] + "/";

                if (!(arrFragments[0] === "route")) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 9;
                return this.router.performGeoSearch(arrFragments[1]);

              case 9:
                fromCoords = _context2.sent;
                _context2.next = 12;
                return this.router.performGeoSearch(arrFragments[2]);

              case 12:
                toCoords = _context2.sent;
                strParams += "af:" + fromCoords.join() + "/";
                strParams += "at:" + toCoords.join() + "/";
                strParams += "d:" + arrFragments[3] + "/";
                strParams += "s:" + arrFragments[4] + "/";
                strParams += "f:" + arrFragments[5] + "/";
                _context2.next = 27;
                break;

              case 20:
                _context2.next = 22;
                return this.router.performGeoSearch(arrFragments[1]);

              case 22:
                coords = _context2.sent;
                strParams += "a:" + coords.join() + "/";
                strParams += "d:" + arrFragments[2] + "/";
                strParams += "s:" + arrFragments[3] + "/";
                strParams += "f:" + arrFragments[4] + "/";

              case 27:
                this.rawFragments = strParams;

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkForOldParams() {
        return _checkForOldParams.apply(this, arguments);
      }

      return checkForOldParams;
    }()
  }, {
    key: "handleInitialAreaSearch",
    value: function handleInitialAreaSearch(objParams) {
      this.router.setState({
        mode: "area"
      });
      var center = objParams.a;

      if (center) {
        center = center.split(",");
      }

      var detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;

      if (detour || detour > 1) {
        this.updateLinkFragments("detour", detour); // jQuery(this.toggleDetourArea).val(detour);
        // jQuery(this.toggleDetourArea).trigger('input');
      }

      if (center && center.length === 2) {
        this.updateLinkFragments("addressArea", center);
        this.router.setAreaPoint(center);
      }

      if (searchtype) {
        this.updateLinkFragments("searchType", searchtype);
      }

      if (forceStart) {
        this.updateLinkFragments("forceStart", forceStart);
      } // activate area view


      jQuery(".c4g-portside-viewtriggerbar .c4g-area-search").click();
    }
  }, {
    key: "handleInitialRouteSearch",
    value: function handleInitialRouteSearch(objParams) {
      this.router.setState({
        mode: "route"
      });
      var fromAddress = objParams.af ? objParams.af.split(",").map(function (elem) {
        return parseFloat(elem);
      }) : null;
      var toAddress = objParams.at ? objParams.at.split(",").map(function (elem) {
        return parseFloat(elem);
      }) : null;
      var detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;

      if (detour) {
        jQuery(this.router.toggleDetourRoute).val(detour);
        jQuery(this.router.toggleDetourRoute).trigger('input');
        this.updateLinkFragments("detour", objParams.d);
      }

      if (fromAddress) {
        this.updateLinkFragments("fromAddress", fromAddress);
      }

      if (toAddress) {
        this.updateLinkFragments("toAddress", toAddress);
      }

      if (searchtype) {
        this.updateLinkFragments("searchType", objParams.s);
      }

      if (forceStart) {
        this.updateLinkFragments("forceStart", objParams.f);
      }

      if (fromAddress && toAddress) {
        this.router.setRouteFrom(fromAddress[0], fromAddress[1]);
        this.router.setRouteTo(toAddress[0], toAddress[1]);
      } // activate router view


      jQuery(".c4g-portside-viewtriggerbar .c4g-route-search").click();
    }
  }]);
  return RoutingPermalink;
}();

exports.RoutingPermalink = RoutingPermalink;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-view.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-view.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterView = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _routingConstants = __webpack_require__(/*! ./../routing-constants */ "./Resources/public/js/routing-constants.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _AlertHandler = __webpack_require__(/*! ./../../../../../CoreBundle/Resources/public/js/AlertHandler */ "../CoreBundle/Resources/public/js/AlertHandler.js");

var _c4gRoutingPermalink = __webpack_require__(/*! ./../c4g-routing-permalink */ "./Resources/public/js/c4g-routing-permalink.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// import {RouterControls} from "./c4g-router-controls.jsx";
//import {RouterResultContainer} from "./c4g-router-result-container.jsx";
var RouterResultContainer = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-result-container_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-result-container.jsx */ "./Resources/public/js/components/c4g-router-result-container.jsx"));
});

//import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx"
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
}); // import {RouterProfileSelection} from "./c4g-router-profile-selection.jsx";


//import {RouterPopupButtons} from "./c4g-router-popup-buttons.jsx";
var RouterPopupButtons = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("Resources_public_js_components_c4g-autocomplete-input_jsx"), __webpack_require__.e("Resources_public_js_components_c4g-router-popup-buttons_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-popup-buttons.jsx */ "./Resources/public/js/components/c4g-router-popup-buttons.jsx"));
});

var RouterControls = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("Resources_public_js_components_c4g-autocomplete-input_jsx"), __webpack_require__.e("Resources_public_js_components_c4g-router-controls_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-controls.jsx */ "./Resources/public/js/components/c4g-router-controls.jsx"));
}); // const RouterResultContainer = React.lazy(() => import('./c4g-router-result-container.jsx'));


var RouterProfileSelection = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-profile-selection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-profile-selection.jsx */ "./Resources/public/js/components/c4g-router-profile-selection.jsx"));
}); // const RouterPopupButtons = React.lazy(() => import('./c4g-router-popup-buttons.jsx'))


var osmtogeojson = __webpack_require__(/*! osmtogeojson */ "./node_modules/osmtogeojson/index.js");
/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */


var RouterView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterView, _Component);

  var _super = _createSuper(RouterView);

  function RouterView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterView);
    _this = _super.call(this, props);
    _this.setActiveId = _this.setActiveId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setOpen = _this.setOpen.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openControls = _this.openControls.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetFromPoint = _this.resetFromPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetToPoint = _this.resetToPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetAreaPoint = _this.resetAreaPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleResultDetails = _this.toggleResultDetails.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setResultInstr = _this.setResultInstr.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setResultFeat = _this.setResultFeat.bind((0, _assertThisInitialized2["default"])(_this));
    _this.recalculateRoute = _this.recalculateRoute.bind((0, _assertThisInitialized2["default"])(_this));
    var mapController = _this.props.mapController;
    var arrProfiles = [];
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(mapController.data);

    for (var key in mapController.data.router_profiles) {
      if (mapController.data.router_profiles.hasOwnProperty(key)) {
        arrProfiles.push({
          id: key,
          text: mapController.data.router_profiles[key]
        });
      }
    }

    var layerRoute = null;
    var layerArea = null;
    var layerValueRoute = null;
    var layerValueArea = null;

    if (mapController.data.showFeatures) {
      var routerLayers = mapController.data.routerLayers;

      for (var _key in routerLayers) {
        if (routerLayers.hasOwnProperty(_key)) {
          layerRoute = layerRoute || _key;
          layerValueRoute = Object.keys(routerLayers[layerRoute])[0] || layerValueRoute;
          layerArea = layerArea || _key;
          layerValueArea = Object.keys(routerLayers[layerArea])[0] || layerValueArea;
        }
      }
    }

    _this.state = {
      router: props.router,
      objSettings: {
        "proxyUrl": mapController && mapController.data ? mapController.data.proxyUrl : '',
        "keyAutocomplete": mapController && mapController.data ? mapController.data.autocomplete : '',
        "center": function center() {
          var center = mapController.map.getView().getCenter();
          center = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326");
          return center;
        },
        "geosearchParams": mapController.data.geosearch.params
      },
      activeId: null,
      openResults: false,
      containerAddresses: {
        arrFromPositions: [],
        arrFromNames: [],
        arrToPositions: [],
        arrToNames: [],
        arrAreaPositions: [],
        arrAreaNames: [],
        arrOverPositions: {},
        arrOverNames: {}
      },
      fromAddress: "",
      toAddress: "",
      areaAddress: "",
      layerRoute: layerRoute,
      layerArea: layerArea,
      layerValueRoute: layerValueRoute,
      layerValueArea: layerValueArea,
      detourRoute: props.detourRoute.initial,
      detourArea: props.detourArea.initial,
      featureList: {
        features: [],
        type: ""
      },
      mode: mapController.data.initialMode,
      overPtCtr: 0,
      overAddresses: [],
      featureSource: undefined,
      routerWaySource: undefined,
      routerHintSource: undefined,
      areaPoint: null,
      fromPoint: null,
      toPoint: null,
      overPoints: [],
      profiles: arrProfiles ? arrProfiles : [],
      currentProfile: 0,
      open: props.mapController.data.initial_open_comp === "routing" || false,
      //ToDO
      openSettings: props.mapController.data.initial_open_comp === "routing" || false,
      //ToDO
      routerInstructions: {},
      resultMode: props.mapController.data.initialResultMode || "instr"
    };
    _this.popupRouteButtonWrapper = ""; // this is needed because of the different popup handlings

    _this.swapPoints = _this.swapPoints.bind((0, _assertThisInitialized2["default"])(_this));

    if (mapController.data.usePermalink) {
      _this.permalink = new _c4gRoutingPermalink.RoutingPermalink((0, _assertThisInitialized2["default"])(_this));
    }

    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(RouterView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var scope = this;
      var mapData = this.props.mapController.data;
      var sources = {
        waySource: this.state.routerWaySource,
        hintSource: this.state.routerHintSource,
        featureSource: this.state.featureSource
      };
      var sliderOptions = {};

      if (this.state.mode === "route") {
        sliderOptions = {
          min: mapData.detourRoute.min,
          max: mapData.detourRoute.max,
          value: this.state.detourRoute,
          router: this
        };
      } else if (this.state.mode === "area") {
        sliderOptions = {
          min: mapData.detourArea.min,
          max: mapData.detourArea.max,
          value: this.state.detourArea,
          router: this
        };
      }

      var resetFunctions = {
        from: this.resetFromPoint,
        to: this.resetToPoint,
        area: this.resetAreaPoint
      };
      var overSettings = this.createOverSettings();
      var headline = "";

      if (this.state.mode === "route") {
        headline = this.props.mapController.data.routerHeadline || this.languageConstants.ROUTER_DEFAULT_HEADLINE_ROUTE;
      } else if (this.state.mode === "area") {
        headline = this.props.mapController.data.areaHeadline || this.languageConstants.ROUTER_DEFAULT_HEADLINE_AREA;
      }

      var instructions = this.state.routerInstructions.instructions;
      var resultSwitcher = "";
      var switcherButtons = [];

      if (this.state.featureList.features.length > 0 && (this.state.fromAddress && this.state.toAddress && this.state.mode === "route" || this.state.areaAddress && this.state.mode === "area")) {
        switcherButtons.push( /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-feature",
          className: this.state.resultMode === "feat" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultFeat,
          key: 1,
          title: "Ergebnisliste anzeigen"
        }));
      }

      if (instructions && instructions.length > 0 && this.state.mode === "route") {
        switcherButtons.push( /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-instructions",
          className: this.state.resultMode === "instr" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultInstr,
          key: 2,
          title: "Routenhinweise anzeigen"
        }));
      }

      if (switcherButtons.length > 0) {
        resultSwitcher = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-hide-form-button " + (this.state.openSettings ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.setState({
              openSettings: !_this2.state.openSettings
            });
          },
          title: this.languageConstants.ROUTER_SETTINGS
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-mode-switch"
        }, switcherButtons));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-router-header",
        header: headline,
        headerClass: "c4g-router-headline",
        detailBtnClass: "c4g-router-extended-options",
        hideContainer: ".c4g-router-container-right",
        detailBtnCb: this.toggleDetails,
        closeBtnClass: "c4g-router-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.languageConstants.CLOSE
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-switcher"
      }, /*#__PURE__*/_react["default"].createElement("div", null, resultSwitcher), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
      }, /*#__PURE__*/_react["default"].createElement(RouterProfileSelection, {
        profiles: this.state.profiles,
        router: this,
        currentProfile: this.state.currentProfile
      })))), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading\"")
      }, /*#__PURE__*/_react["default"].createElement(RouterControls, {
        router: this,
        open: this.state.open && this.state.openSettings,
        setOpen: this.openControls,
        profiles: this.state.profiles,
        className: "c4g-router-panel",
        objSettings: this.state.objSettings,
        objFunctions: this.objFunctions,
        overSettings: overSettings,
        enableOverPoints: this.props.mapController.data.enableOverPoints,
        sources: sources,
        layers: this.props.mapController.data.routerLayers,
        containerAddresses: this.state.containerAddresses,
        resetFunctions: resetFunctions,
        mapController: this.props.mapController,
        currentProfile: this.state.currentProfile,
        fromAddress: this.state.fromAddress,
        switchTargets: this.props.mapController.data.enableTargetSwitch,
        toAddress: this.state.toAddress,
        areaAddress: this.state.areaAddress,
        mode: this.state.mode,
        sliderOptions: sliderOptions,
        title: this.languageConstants.CTRL_ROUTER,
        target: this.props.target
      })), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading\"")
      }, /*#__PURE__*/_react["default"].createElement(RouterResultContainer, {
        visible: this.state.open,
        open: this.state.open && this.state.openResults,
        setOpen: this.setOpen,
        direction: "bottom",
        className: "c4g-router-result-container",
        mapController: this.props.mapController,
        mode: this.state.mode,
        setResultFeat: this.setResultFeat,
        routerInstructions: this.state.routerInstructions,
        featureList: this.state.featureList,
        routerWaySource: this.state.routerWaySource,
        detour: this.state.detourArea,
        layerRoute: this.state.layerRoute,
        layerValueRoute: this.state.layerValueRoute,
        layerArea: this.state.layerArea,
        resultMode: this.state.resultMode,
        router: this,
        layerValueArea: this.state.layerValueArea,
        routerHintSource: this.state.routerHintSource,
        featureSource: this.state.featureSource,
        profile: this.state.currentProfile,
        activeId: this.state.activeId,
        setActiveId: this.setActiveId,
        detailOpen: this.state.resultDetailOpen,
        toggleDetailOpen: this.toggleResultDetails,
        headline: "Router Ergebnisse",
        lang: this.languageConstants
      })));
    }
  }, {
    key: "setResultInstr",
    value: function setResultInstr(event) {
      event.stopPropagation();
      this.setState({
        resultMode: "instr",
        openResults: true
      });
    }
  }, {
    key: "setResultFeat",
    value: function setResultFeat(event) {
      event.stopPropagation();
      this.setState({
        resultMode: "feat",
        openResults: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.openControls(false);
      jQuery(this.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
    }
  }, {
    key: "getProfileById",
    value: function getProfileById(id) {
      for (var i = 0; i < this.state.profiles.length; i++) {
        if (parseInt(this.state.profiles[i].id, 10) === parseInt(id, 10)) {
          return this.state.profiles[i];
        }
      }

      return null;
    }
  }, {
    key: "toggleResultDetails",
    value: function toggleResultDetails() {
      if (this.state.resultDetailOpen) {
        this.setState({
          resultDetailOpen: false
        });
      } else {
        this.setState({
          resultDetailOpen: true
        });
      }
    }
  }, {
    key: "openControls",
    value: function openControls(open) {
      if (open) {
        this.props.mapController.setOpenComponent(this);
        this.setState({
          open: true,
          openSettings: true
        });
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
      } else {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mapController.data.usePermalink) {
        this.permalink.handleInitialParams();
      }

      if (this.props.mapController.data.router_div) {
        this.setState({
          open: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.usePermalink) {
        var fragments = this.permalink.linkFragments;

        if (this.state.fromPoint && fragments.fromAddress !== this.state.fromPoint.getCoordinates()) {
          this.permalink.updateLinkFragments("fromAddress", this.state.fromPoint.getCoordinates());
        }

        if (this.state.toPoint && fragments.toAddress !== this.state.toPoint.getCoordinates()) {
          this.permalink.updateLinkFragments("toAddress", this.state.toPoint.getCoordinates());
        }

        if (fragments.mode !== this.state.mode) {
          this.permalink.updateLinkFragments("mode", this.state.mode);
        }

        if (fragments.detourArea !== this.state.detourArea) {
          this.permalink.updateLinkFragments("detourArea", this.state.detourArea);
        }

        if (fragments.detourRoute !== this.state.detourRoute) {
          this.permalink.updateLinkFragments("detourRoute", this.state.detourRoute);
        }
      }

      if (prevState.open === true && this.state.open === false) {
        this.routerLayerGroup.setVisible(false);
        this.modWayInteraction.setActive(false);
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
      }

      if (this.state.open && !prevState.open) {
        this.props.mapController.hideOtherComponents(this);
        this.routerLayerGroup.setVisible(true);
        this.modWayInteraction.setActive(true);
        jQuery(this.props.mapController.routerContainer).addClass("c4g-open").removeClass("c4g-close");

        if (!this.state.openSettings && !this.state.openResults) {
          this.setState({
            openSettings: true
          });
        }
      }

      if (this.state.openSettings && !prevState.openSettings) {
        this.setState({
          openResults: false
        });
      }

      if (this.state.openResults && !prevState.openResults) {
        this.setState({
          openSettings: false
        });
      }

      if (!this.state.openResults && !this.state.openSettings && prevState.openSettings) {
        this.setState({
          openSettings: true
        });
      }

      if (!this.state.openSettings && !this.state.openResults && prevState.openResults) {
        this.setState({
          openResults: true
        });
      }

      if (this.state.mode === "route" && (!this.state.fromAddress || !this.state.toAddress) && this.state.openResults && prevState.mode === "area") {
        this.setState({
          openResults: false
        });
      }

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }, {
    key: "setProfile",
    value: function setProfile(profile) {
      this.setState({
        currentProfile: profile
      }, this.updateRouteLayersAndPoints);
    }
  }, {
    key: "setLayer",
    value: function setLayer(layer) {
      var routerLayers = this.props.mapController.data.routerLayers;
      var layerValues = routerLayers[layer];
      var newDefaultLayerValue = Object.keys(layerValues)[0];

      if (this.state.mode === "route") {
        this.setState({
          layerRoute: layer,
          layerValueRoute: newDefaultLayerValue
        }, this.recalculateRoute);
      } else {
        this.setState({
          layerArea: layer,
          layerValueArea: newDefaultLayerValue
        }, this.performArea);
      }
    }
  }, {
    key: "setLayerValue",
    value: function setLayerValue(layerValue) {
      var scope = this;

      if (this.state.mode === "route") {
        this.setState({
          layerValueRoute: layerValue
        }, function () {
          scope.showFeatures(scope.state.featureList.features, scope.state.featureList.type, "router", false);
        });
      } else if (this.state.mode === "area") {
        this.setState({
          layerValueArea: layerValue
        }, function () {
          scope.showFeatures(scope.state.featureList.features, scope.state.featureList.type, "area", false);
        });
      }
    }
  }, {
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({
        "activeId": activeId
      });
    }
  }, {
    key: "setOpen",
    value: function setOpen(bool) {
      this.setState({
        "openResults": bool
      });
    }
  }, {
    key: "setAreaPoint",
    value: function setAreaPoint(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("areaAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        areaPoint: point
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteFrom",
    value: function setRouteFrom(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("fromAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        fromPoint: point
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteTo",
    value: function setRouteTo(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("toAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        toPoint: point
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "addOverPoint",
    value: function addOverPoint(longitude, latitude, index) {
      var scope = this;
      this.performReverseSearch("overAddress", [longitude, latitude], index);
      var point = new _geom.Point([longitude, latitude]);
      var overPoints = this.state.overPoints;
      overPoints.splice(index, 1, point); // overPoints[index] = point;

      this.setState({
        overPoints: overPoints
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setMode",
    value: function setMode(mode) {
      var _this3 = this;

      if (this.state.mode !== mode) {
        var sources = {
          waySource: this.state.routerWaySource,
          hintSource: this.state.routerHintSource,
          featureSource: this.state.featureSource,
          locationSource: this.locationsSource
        };
        this.setState({
          mode: mode
        }, function () {
          for (var key in sources) {
            if (sources.hasOwnProperty(key) && sources[key]) {
              sources[key].clear();
            }
          }

          _this3.updateRouteLayersAndPoints();
        });
      }
    }
  }, {
    key: "swapPoints",
    value: function swapPoints() {
      var newFromPoint = this.state.toPoint;
      var newFromAddress = this.state.toAddress;
      var newToPoint = this.state.fromPoint;
      var newToAddress = this.state.fromAddress;
      var containerAddresses = this.state.containerAddresses;
      var tmpNames = containerAddresses.arrFromNames;
      var tmpPos = containerAddresses.arrFromPositions;
      containerAddresses.arrFromNames = containerAddresses.arrToNames;
      containerAddresses.arrFromPositions = containerAddresses.arrToPositions;
      containerAddresses.arrToNames = tmpNames;
      containerAddresses.arrToPositions = tmpPos;
      this.setState({
        fromPoint: newFromPoint,
        fromAddress: newFromAddress,
        toPoint: newToPoint,
        toAddress: newToAddress,
        containerAddresses: containerAddresses
      }, this.updateRouteLayersAndPoints);
    }
  }, {
    key: "createOverSettings",
    value: function createOverSettings() {
      var scope = this;
      var objSettings = {};
      objSettings.overAddresses = this.state.overAddresses;
      objSettings.overPoints = this.state.overPoints;
      objSettings.overPtCtr = this.state.overPtCtr; // increments the overPtCtr so the popup can render additional overFields

      objSettings.overFunction = function () {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverNames[scope.state.overPtCtr] = [];
        containerAddresses.arrOverPositions[scope.state.overPtCtr] = [];
        scope.setState({
          overPtCtr: scope.state.overPtCtr + 1,
          containerAddresses: containerAddresses
        });
      };

      objSettings.swapPoints = this.swapPoints;
      objSettings.objFunctions = {};

      for (var i = 0; i < this.state.overPtCtr; i++) {
        objSettings.objFunctions[i] = this.createAutocompleteFunctionsForOverField(i);

        if (!objSettings.overAddresses[i]) {
          objSettings.overAddresses[i] = "";
        }

        if (!objSettings.overPoints[i]) {
          objSettings.overPoints[i] = null;
        }
      }

      return objSettings;
    }
  }, {
    key: "createAutocompleteFunctionsForOverField",
    value: function createAutocompleteFunctionsForOverField(fieldId) {
      var scope = this; // set listener for the autocomplete from field

      var deleteOverListener = function deleteOverListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverPositions[fieldId] = [];
        containerAddresses.arrOverNames[fieldId] = [];
        var overPoints = scope.state.overPoints;
        overPoints.splice(fieldId, 1); // delete overPoints[fieldId];

        var overAddresses = scope.state.overAddresses;
        overAddresses.splice(fieldId, 1); // delete overAddresses[fieldId];

        scope.setState({
          overPoints: overPoints,
          containerAddresses: containerAddresses,
          overAddresses: overAddresses,
          overPtCtr: scope.state.overPtCtr - 1
        }, function () {
          scope.updateRouteLayersAndPoints();
        });
      };

      var selectOverListener = function selectOverListener(event, ui) {
        var overAddresses, overPoints, overValue;
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrOverNames[fieldId].findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrOverPositions[fieldId][index];
        overAddresses = scope.state.overAddresses;
        overAddresses[fieldId] = scope.state.containerAddresses.arrOverNames[fieldId][index];
        overValue = new _geom.Point([coord[1], coord[0]]);
        overPoints = scope.state.overPoints;
        overPoints[fieldId] = overValue;
        scope.setState({
          overPoints: overPoints,
          overAddresses: overAddresses
        }, function () {
          scope.updateRouteLayersAndPoints();
        });
      };

      var changeOverListener = function changeOverListener() {// self.fromValue = null;
      };

      return {
        "selectListener": selectOverListener,
        "deleteFunction": deleteOverListener,
        "changeListener": changeOverListener
      };
    }
  }, {
    key: "updateRouteLayersAndPoints",
    value: function updateRouteLayersAndPoints() {
      var _this4 = this;

      var scope = this;
      this.locationsSource.clear();
      this.areaSource.clear();

      if (this.state.mode === "route") {
        if (this.state.fromPoint) {
          var tmpFeature = new _ol.Feature({
            geometry: this.state.fromPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });

          if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
            tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
          } else {
            var doneFunction = function doneFunction() {
              tmpFeature.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_from_locstyle].style);
            };

            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_from_locstyle], {
              "done": doneFunction
            });
          }

          this.locationsSource.addFeature(tmpFeature);
        }

        if (this.state.toPoint) {
          var _tmpFeature = new _ol.Feature({
            geometry: this.state.toPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });

          if (this.props.mapController.data.router_to_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle]) {
            _tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].style);
          } else {
            var _doneFunction = function _doneFunction() {
              _tmpFeature.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_to_locstyle].style);
            };

            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_to_locstyle], {
              "done": _doneFunction
            });
          }

          this.locationsSource.addFeature(_tmpFeature);
        }

        if (!(this.state.fromPoint && this.state.toPoint)) {
          this.routerWaySource.clear();
        }

        if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
          for (var key in this.state.overPoints) {
            if (this.state.overPoints.hasOwnProperty(key) && this.state.overPoints[key] !== null) {
              var _tmpFeature2 = new _ol.Feature({
                geometry: this.state.overPoints[key].clone().transform('EPSG:4326', 'EPSG:3857')
              });

              if (this.props.mapController.data.router_interim_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle]) {
                _tmpFeature2.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].style);
              }

              this.locationsSource.addFeature(_tmpFeature2);
            }
          }
        }

        if (!this.props.mapController.data.routeStartButton) {
          this.recalculateRoute();
        }
      } else if (this.state.mode === "area") {
        if (this.state.areaPoint) {
          var _tmpFeature3 = new _ol.Feature({
            geometry: this.state.areaPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });

          if (this.props.mapController.data.router_point_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_point_locstyle]) {
            _tmpFeature3.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_point_locstyle].style);
          } else {
            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_point_locstyle], {
              done: function done() {
                _tmpFeature3.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[scope.props.mapController.data.router_point_locstyle].style);
              }
            });
          }

          this.areaSource.addFeature(_tmpFeature3);
        }

        this.performArea();
      }
    }
  }, {
    key: "resetFromPoint",
    value: function resetFromPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrFromPositions = [];
      containerAddresses.arrFromNames = [];
      this.setState({
        fromPoint: null,
        containerAddresses: containerAddresses,
        fromAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "resetToPoint",
    value: function resetToPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrToPositions = [];
      containerAddresses.arrToNames = [];
      this.setState({
        toPoint: null,
        containerAddresses: containerAddresses,
        toAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "resetAreaPoint",
    value: function resetAreaPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrAreaPositions = [];
      containerAddresses.arrAreaNames = [];
      this.setState({
        areaPoint: null,
        containerAddresses: containerAddresses,
        areaAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "createAutocompleteFunctions",
    value: function createAutocompleteFunctions() {
      var objFunctions = {};
      var scope = this; // set listener for the autocomplete from field

      var deleteFromListener = function deleteFromListener(event) {
        scope.resetFromPoint();
      };

      var selectFromListener = function selectFromListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrFromNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrFromPositions[index];
        var fromValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          fromPoint: fromValue,
          fromAddress: scope.state.containerAddresses.arrFromNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.recalculateRoute();
        });
      };

      var changeFromListener = function changeFromListener() {// self.fromValue = null;
      };

      objFunctions.fromFunctions = {
        "selectListener": selectFromListener,
        "deleteFunction": deleteFromListener,
        "changeListener": changeFromListener
      }; // set listener for the autocomplete to field

      var deleteToListener = function deleteToListener(event) {
        scope.resetToPoint();
      };

      var selectToListener = function selectToListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrToNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrToPositions[index];
        var toValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          toPoint: toValue,
          toAddress: scope.state.containerAddresses.arrToNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.recalculateRoute();
        });
      };

      var changeToListener = function changeToListener() {// self.fromValue = null;
      };

      objFunctions.toFunctions = {
        "selectListener": selectToListener,
        "deleteFunction": deleteToListener,
        "changeListener": changeToListener
      }; // set listener for the autocomplete to field

      var deleteAreaListener = function deleteAreaListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrAreaPositions = [];
        containerAddresses.arrAreaNames = [];
        scope.setState({
          areaPoint: null,
          containerAddresses: containerAddresses,
          areaAddress: ""
        }, function () {});
      };

      var selectAreaListener = function selectAreaListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrAreaNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrAreaPositions[index];
        var areaValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          areaPoint: areaValue,
          areaAddress: scope.state.containerAddresses.arrAreaNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.performArea();
        });
      };

      var changeAreaListener = function changeAreaListener() {// self.fromValue = null;
      };

      objFunctions.areaFunctions = {
        "selectListener": selectAreaListener,
        "deleteFunction": deleteAreaListener,
        "changeListener": changeAreaListener
      };
      return objFunctions;
    }
  }, {
    key: "addPopupHook",
    value: function addPopupHook() {
      var scope = this;

      var createPopupWrapper = function createPopupWrapper(objPopup) {
        var feature = objPopup.feature;
        var router = scope;

        var routingHandler = function routingHandler(event) {
          router.openControls(true);
          router.setMode("route");

          if (jQuery(event.currentTarget).hasClass(_c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM)) {
            // from address
            var fromCoords = (0, _proj.toLonLat)(feature.getGeometry().getCoordinates(), "EPSG:3857");
            router.setRouteFrom(fromCoords[0], fromCoords[1]);
          } else {
            // to address
            var toCoords = (0, _proj.toLonLat)(feature.getGeometry().getCoordinates(), "EPSG:3857");
            router.setRouteTo(toCoords[0], toCoords[1]);
          }
        }; // end of "routingHandler()"


        var routeButtonWrapper = document.createElement('div');
        routeButtonWrapper.className = _c4gMapsConstant.cssConstants.POPUP_ROUTE_WRAPPER;
        var routeFromButton = document.createElement('button');
        routeFromButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM;
        jQuery(routeFromButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeFromButton);
        var routeFromButtonSpan = document.createElement('span'); // routeFromButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_FROM;

        routeFromButton.appendChild(routeFromButtonSpan);
        var routeToButton = document.createElement('button');
        routeToButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);
        var routeToButtonSpan = document.createElement('span'); // routeToButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_TO;

        routeToButton.appendChild(routeToButtonSpan);
        return routeButtonWrapper;
      };

      window.c4gMapsHooks.proxy_appendPopup = window.c4gMapsHooks.proxy_appendPopup || [];
      window.c4gMapsHooks.proxy_appendPopup.push(function (params) {
        var mapController = params.mapController;
        var objPopup = params.popup;

        if (mapController.components.router && objPopup.popup.routing_link) {
          if (parseInt(mapController.data.popupHandling, 10) !== 3) {
            var routeButtonWrapper = createPopupWrapper(objPopup);
            window.c4gMapsPopup.$content.append(routeButtonWrapper);
          } else {
            var config = {
              feature: objPopup.feature,
              router: scope
            };
            params.comp.setAddButtons(RouterPopupButtons, config);
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      var styles = [this.props.mapController.data.router_from_locstyle, this.props.mapController.data.router_to_locstyle, this.props.mapController.data.router_point_locstyle, this.props.mapController.data.areaCenterLocstyle, this.props.mapController.data.clickLocstyle];

      if (this.props.mapController.data.priorityFeatures && this.props.mapController.data.priorityLocstyle) {
        styles.push(this.props.mapController.data.priorityLocstyle);
      } // check and load location styles via map-proxy


      this.props.mapController.proxy.locationStyleController.loadLocationStyles(styles);
      var mapData = this.props.mapController.data; // create router layer object

      this.objLayers = {};

      for (var key in mapData.routerLayers) {
        if (mapData.routerLayers.hasOwnProperty(key)) {
          this.objLayers[key] = mapData.routerLayers[key][Object.keys(mapData.routerLayers[key])[0]];
        }
      } // Add router layer(s)


      this.routingAltWaySource = new _source.Vector();
      this.routerWaySource = new _source.Vector();
      this.routerWayLayer = new _layer.Vector({
        source: this.routerWaySource,
        zIndex: 1,
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          })
        })]
      });
      this.routerAltWayLayer = new _layer.Vector({
        source: this.routingAltWaySource,
        zIndex: 0,
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(0, 51, 119, 0.4)',
            width: 4
          })
        })]
      });
      var selectInteraction = new _interaction.Select({
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]
      });
      selectInteraction.on('select', function (event) {
        var feature = event.selected[0];

        if (feature) {
          var geometry = feature.getGeometry();

          if (geometry && geometry.getType() === 'LineString') {
            self.showAltRoute(self.response, feature.getId());
          } else {
            if (feature) {
              self.clickFeatureEntryForFeature(feature);
            }
          }
        }
      });
      this.mapSelectInteraction = selectInteraction;
      this.modWayInteraction = new _interaction.Modify({
        source: this.routerWaySource,
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]
      });
      this.modWayInteraction.on('modifystart', function (event) {
        if (self.state.open !== true) {
          return;
        }

        self.modifyStartPoint = new _geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
      });
      this.modWayInteraction.on('modifyend', function (event) {
        if (self.state.open !== true) {
          return;
        }

        var overPoint = new _geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
        var minDistance = Infinity;
        var insertId;
        var arrKeys = Object.keys(self.state.overPoints);

        if (arrKeys.length > 0) {
          for (var id in self.state.overPoints) {
            if (self.state.overPoints.hasOwnProperty(id)) {
              var dist = self.calcDistance(self.modifyStartPoint.getCoordinates(), self.state.overPoints[id].getCoordinates());

              if (dist < minDistance) {
                minDistance = dist;
                insertId = id;
              }
            }
          }

          var distStart = self.calcDistance(self.state.fromPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
          var distEnd = self.calcDistance(self.state.toPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
          var distStartOld = self.calcDistance(self.state.fromPoint.getCoordinates(), self.state.overPoints[0].getCoordinates());
          var overEndIndex = arrKeys[arrKeys.length - 1];
          var distEndOld = self.calcDistance(self.state.toPoint.getCoordinates(), self.state.overPoints[overEndIndex].getCoordinates());

          if (distStart < distStartOld) {
            insertId = 0;
          } else if (distEnd < distEndOld) {
            insertId++;
          }
        } else {
          insertId = 0;
        }

        self.performReverseSearch("overAddress", overPoint.getCoordinates(), insertId);
        self.addOverPoint(overPoint.getCoordinates()[0], overPoint.getCoordinates()[1], insertId);
      });
      self.props.mapController.map.addInteraction(selectInteraction);

      if (this.props.mapController.data.enableOverPoints) {
        self.props.mapController.map.addInteraction(this.modWayInteraction);
      }

      selectInteraction.setActive(false);
      this.routerHintSource = new _source.Vector();
      this.routerHintLayer = new _layer.Vector({
        source: this.routerHintSource,
        style: function style(feature, resolution) {
          return !self.props.mapController.proxy || self.props.mapController.proxy.locationStyleController.arrLocStyles[self.props.mapController.data.router_point_locstyle].style(feature, resolution);
        }
      });
      this.mapData = this.props.mapController.data;
      this.locationsSource = new _source.Vector();
      this.locationsLayer = new _layer.Vector({
        source: this.locationsSource,
        zIndex: 2
      });
      this.areaSource = new _source.Vector();
      this.areaLayer = new _layer.Vector({
        source: this.areaSource,
        zIndex: 2
      });
      this.routerFeaturesSource = new _source.Vector();
      this.routerFeaturesLayer = new _layer.Vector({
        source: this.routerFeaturesSource,
        zIndex: 20 // declutter: true

      });
      this.routerLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.routerWayLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer, this.routerFeaturesLayer, this.locationsLayer, this.areaLayer]),
        visible: true
      });
      this.props.mapController.map.addLayer(this.routerLayerGroup); // this.viewRouter = this.addRouterInterface();

      if (this.props.mapController.data.initialMode === "route" || !this.viewArea) {// this.viewRouter.activate();
      } // id => array of instructions, for each route one entry


      this.routeInstructions = {}; // store some vars for ajax-requests

      var profileId = this.props.mapController.data.profile;
      this.geoSearchApi = this.props.mapController.data.api.geosearch + '/' + profileId;
      this.geoReverseSearchApi = this.props.mapController.data.api.geosearch_reverse + '/' + profileId;
      this.routingApi = this.props.mapController.data.api.routing + '/' + profileId;

      if (this.usePermalink) {
        this.permalinkHandler.handleInitialParams();
      }

      this.objFunctions = this.createAutocompleteFunctions();
      this.addPopupHook();
      this.addMapInputInteraction();
    }
    /**
     * Calculates the euclidean distance between two points.
     * @param point1
     * @param point2
     */

  }, {
    key: "calcDistance",
    value: function calcDistance(point1, point2) {
      var square1, square2;
      square1 = Math.pow(point1[0] - point2[0], 2);
      square2 = Math.pow(point1[1] - point2[1], 2);
      return Math.sqrt(square1 + square2);
    }
    /**
     * Displays the route instructions in the portside router.
     * @param routeResponse
     * @param routeNumber
     */

  }, {
    key: "showRouteInstructions",
    value: function showRouteInstructions(routeResponse, routeNumber, routerWaySource, routerHintSource) {
      var scope,
          routerInstruction,
          routerInstructionsHeader,
          routerInstructionsHtml,
          instr,
          strType,
          strMod,
          rowstyle,
          routeNumber = routeNumber || 0,
          i,
          j,
          route_name_0 = "",
          route_name_1 = "",
          total_distance = "",
          total_time = "";
      scope = this;

      if (!this.props.mapController.data.showInstructions) {
        return;
      }

      routerInstructionsHeader = document.createElement('div');
      routerInstructionsHeader.className = _routingConstants.routingConstants.ROUTER_INSTRUCTIONS_HEADER;

      if (routeResponse) {
        if (!(routeResponse.features && routeResponse.features.length > 0) || !this.props.mapController.data.showFeatures) {
          jQuery(".c4g-router-instructions-wrapper").css('display', 'block');
        }

        if (this.props.mapController.data.router_api_selection == '1' || routeResponse.routeType == '1') {
          //OSRM-API:5.x
          if (routeResponse.routes[routeNumber].legs[0].summary) {
            route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
            route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];

            if (routeResponse.routes[routeNumber].legs[1]) {
              route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
            }
          }

          total_distance = routeResponse.routes[routeNumber].distance;
          total_time = routeResponse.routes[routeNumber].duration;
        } else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {
          //OSRM-API:<5
          if (routeResponse.route_name) {
            route_name_0 = routeResponse.route_name[0];
            route_name_1 = routeResponse.route_name[1];
          }

          if (routeResponse.route_summary) {
            total_distance = routeResponse.route_summary.total_distance;
            total_time = routeResponse.route_summary.total_time;
          }
        } else if (this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '2') {
          //ORS-API
          total_time = routeResponse.routes[routeNumber].summary.duration;
          total_distance = routeResponse.routes[routeNumber].summary.distance;
          var instructions = [];
          var segments = routeResponse.routes[routeNumber].segments;

          for (var _i = 0; _i < segments.length; _i++) {
            var currentSegment = segments[_i];

            for (var _j = 0; _j < currentSegment.steps.length; _j++) {
              var currentStep = currentSegment.steps[_j];
              currentStep.length = currentStep.distance / 1000;
              instructions.push(currentStep);
            }
          }

          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: instructions
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        } else if (this.props.mapController.data.router_api_selection == '3' || routeResponse.routeType == '3') {
          //Graphhopper
          total_distance = routeResponse.paths[routeNumber].distance;
          total_time = routeResponse.paths[routeNumber].time / 1000;
          var _instructions = [];
          var _segments = routeResponse.paths[routeNumber].instructions;

          for (var _i2 = 0; _i2 < _segments.length; _i2++) {
            var currentInstruction = _segments[_i2];
            currentInstruction.length = currentInstruction.distance / 1000;
            currentInstruction.instruction = currentInstruction.text;
            currentInstruction.type = currentInstruction.sign;

            _instructions.push(currentInstruction);
          }

          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: _instructions
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        } else if (this.props.mapController.data.router_api_selection == '4' || routeResponse.routeType == '4') {
          //Valhalla
          total_distance = routeResponse.trip.summary.length * 1000;
          total_time = routeResponse.trip.summary.time;
          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: routeResponse.trip.legs[routeNumber].maneuvers
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        }

        if (route_name_0 && route_name_1) {
          routerInstructionsHeader.innerHTML = '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
        } else if (this.routeProfile && this.routeProfile.active && Array.isArray(this.routeProfile.active)) {
          routerInstructionsHeader.innerHTML = '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.props.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
        }

        routerInstruction = document.createElement('div');
        routerInstructionsHtml = '<table class="' + _routingConstants.routingConstants.ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';

        if (this.props.mapController.data.router_api_selection === '1' || routeResponse.routeType == '1') {//OSRM-API:5.x
        } else if (this.props.mapController.data.router_api_selection === '0' || routeResponse.routeType == '0') {//OSRM-API:<5
        } else if (this.props.mapController.data.router_api_selection === '2' || routeResponse.routeType == '2') {//OpenRouteService
        } else if (this.props.mapController.data.router_api_selection === '3' || routeResponse.routeType == '3') {// Graphhopper
        } else if (this.props.mapController.data.router_api_selection === '4' || routeResponse.routeType == '4') {// Valhalla
        }

        routerInstructionsHtml += '</table>';
        routerInstruction.innerHTML = routerInstructionsHtml;
        this.adjustInstructionMapInteraction();
      }
    }
    /**
     * Asynchronous implementation of the forward geosearch.
     */

  }, {
    key: "performGeoSearch",
    value: function () {
      var _performGeoSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(address) {
        var scope, url;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                scope = this;
                url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI(address);

                if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
                  url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI(address);
                }

                _context.next = 5;
                return fetch(url).then(function (response) {
                  if (response) {
                    return response.json().then(function (data) {
                      return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
                    }); // return [parseFloat(response[0].lon), parseFloat(response[0].lat)];
                  } else {
                    // show error hint
                    var alertHandler = new _AlertHandler.AlertHandler();
                    alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                  }
                })["catch"](function () {
                  var alertHandler = new _AlertHandler.AlertHandler();
                  alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function performGeoSearch(_x) {
        return _performGeoSearch.apply(this, arguments);
      }

      return performGeoSearch;
    }()
    /**
     * Searches the geo-coordinates for a given location.
     * @param $input        The input field containing the location.
     * @param value         The property in which the resulting coordinate should be stored.
     * @param opt_callback  Optional callback. Is executed after successful search.
     * @returns {string}
     */

  }, {
    key: "performSearch",
    value: function performSearch($input, value, opt_callback) {
      var map, bounds, viewbox, scope, url;
      scope = this;

      if ($input.val() === "") {
        delete scope[value];
        return "";
      }

      map = scope.props.mapController.map;
      bounds = map.getView().calculateExtent(map.getSize());
      bounds = (0, _proj.transformExtent)(bounds, map.getView().getProjection(), 'EPSG:4326');
      viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];
      url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;

      if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
        url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
      }

      if (this.mapData.geosearch.params) {
        for (var param in this.mapData.geosearch.params) {
          if (this.mapData.geosearch.params.hasOwnProperty(param)) {
            url += "&" + param + "=" + this.mapData.geosearch.params[param];
          }
        }
      }

      jQuery.ajax({
        'url': url
      }).done(function (response) {
        if (response.length > 0) {
          if (value === "overValue") {
            if (!scope.overValue) {
              scope.overValue = [];
            }

            var overPoint = new _geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
            var deleteButton = $input.next()[0]; // traverse the dom level until the delete button is found

            while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
              deleteButton = jQuery(deleteButton).next()[0];
            }

            deleteButton.id = overPoint['ol_uid'];
            scope.overValue.push(overPoint);
            scope.$buttonOver.prop("disabled", false);
          } else {
            var coords = [parseFloat(response[0].lon), parseFloat(response[0].lat)];
            var point = new _geom.Point(coords);

            if (value === "fromValue") {
              scope.setState({
                fromPoint: point,
                fromAddress: $input.val()
              }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } else if (value === "toValue") {
              scope.setState({
                toPoint: point,
                toAddress: $input.val()
              }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } // TODO wieder einbauen
            // switch(value) {
            //   case "fromValue":
            //     scope.updateLinkFragments("addressFrom", coords);
            //     break;
            //   case "toValue":
            //     scope.updateLinkFragments("addressTo", coords);
            //     break;
            //   case "areaValue":
            //     scope.updateLinkFragments("addressArea", coords);
            //     break;
            //   default:
            //     break;
            // }

          }
        } else {
          // show error hint
          var alertHandler = new _AlertHandler.AlertHandler();
          alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
        }

        if (opt_callback && typeof opt_callback === "function") {
          opt_callback();
        }
      }).fail(function () {
        var alertHandler = new _AlertHandler.AlertHandler();
        alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
      });
      return "";
    }
    /**
     * Converts a given coordinate into the corresponding location.
     * @param stateProp     The state property of this where the address should be stored.
     * @param value         The property that contains the coordinates.
     * @param opt_index     The index for the overAddress (over points only)
     */

  }, {
    key: "performReverseSearch",
    value: function performReverseSearch(stateProp, value, opt_index) {
      var self = this,
          url;
      url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];

      if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.reverseKey && this.mapData.geosearch.url) {
        url = this.mapData.geosearch.url + "reverse.php?key=" + this.mapData.geosearch.reverseKey + '&format=json&lat=' + value[1] + '&lon=' + value[0];
      }

      jQuery.ajax({
        'url': url
      }).done(function (response) {
        if (response) {
          var value = "";

          if (response.address) {
            if (response.address.road || response.address.path || response.address.pedestrian) {
              value += response.address.road || response.address.path || response.address.pedestrian;

              if (response.address.house_number) {
                value += " " + response.address.house_number;
              }
            }

            if (response.address.city || response.address.town) {
              value += value ? ", " : "";
              value += response.address.city || response.address.town;
            }
          }

          if (value === "") {
            value = response.display_name;
          } // TODO update router permalink


          switch (stateProp) {
            case "areaAddress":
              self.setState({
                areaAddress: value
              }, function () {
                if (jQuery("#areaFrom").val() === "") {
                  jQuery("#areaFrom").val(value);
                }
              }); // self.updateLinkFragments("addressArea", value);

              break;

            case "fromAddress":
              self.setState({
                fromAddress: value
              }, function () {
                if (jQuery("#routingFrom").val() === "") {
                  jQuery("#routingFrom").val(value);
                }
              }); // update address in link
              // self.updateLinkFragments("addressFrom", value);

              break;

            case "toAddress":
              self.setState({
                toAddress: value
              }, function () {
                if (jQuery("#routingTo").val() === "") {
                  jQuery("#routingTo").val(value);
                }
              }); // update address in link
              // self.updateLinkFragments("addressTo", value);

              break;

            case "overAddress":
              var overAddresses = self.state.overAddresses;
              overAddresses.splice(opt_index, 1, value);
              self.setState({
                overAddresses: overAddresses
              });
              break;
          }
        }
      });
    }
    /**
     * Executes an area search with the given point as center. If there are any, the features in the perimeter will be
     * drawn onto the map and displayed in the feature container.
     */

  }, {
    key: "performArea",
    value: function performArea() {
      var self = this;
      var fromPoint = this.state.areaPoint;

      if (!fromPoint) {
        return;
      }

      var fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      var profileId = this.props.mapController.data.profile;
      var url = 'con4gis/areaService/' + profileId + '/' + this.state.layerArea + '/' + this.state.detourArea + '/' + fromCoord;
      url += '?profile=' + this.state.currentProfile;

      if (self.areaAjax) {
        self.areaAjax.abort();
      } // this.spinner.show();


      self.areaAjax = jQuery.ajax({
        'url': url
      }).done(function (response) {
        self.response = response;

        if (response) {
          // const routerLayers = self.options.mapController.data.routerLayers;
          // const chosenOption = self.activeLayerValueArea;
          // this should be changed soon, as it totally messes up the logic of the structure
          var sortedFeatures = self.showFeatures(response[0], response[1], "area");
          self.setState({
            "featureList": {
              "features": sortedFeatures,
              "type": response[1]
            },
            "featureSource": self.routerFeaturesSource,
            "openResults": true
          });
        }
      });
    }
    /**
     * Executes a route search with the given from and to points. Displays features and feature entries on success. Uses
     * overpoints, if any are given.
     * @param fromPoint
     * @param toPoint
     * @param overPoint
     * @returns {string}
     */

  }, {
    key: "performViaRoute",
    value: function performViaRoute(fromPoint, toPoint, overPoint) {
      var url, scope, fromCoord, toCoord, overCoord;
      scope = this;

      if (this.state.featureSource) {
        this.state.featureSource.clear();
      } // this.areaSource.clear();


      this.mapSelectInteraction.getFeatures().clear();

      if (!fromPoint) {
        fromPoint = this.fromPoint;

        if (!fromPoint) {
          return;
        }
      }

      if (!toPoint) {
        if (!toPoint) {
          return;
        }

        toPoint = this.toPoint;
      }

      if (!overPoint) {
        if (this.overPoints) {
          overPoint = this.overPoints;
        }
      }

      fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];

      if (overPoint && Object.keys(overPoint).length > 0) {
        overCoord = [];

        for (var propt in overPoint) {
          if (overPoint.hasOwnProperty(propt) && overPoint[propt]) {
            overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
          }
        }
      }

      if (this.props.mapController.data.router_api_selection >= '1') {
        //OSRM-API:5.x or ORS- API
        var _profileId = this.props.mapController.data.profile;
        url = 'con4gis/routeService/' + this.props.mapController.data.lang + '/' + _profileId + '/' + this.state.layerRoute + '/' + this.state.detourRoute + '/' + fromCoord;

        if (overPoint) {
          for (var i = 0; i < overCoord.length; i++) {
            url += ';' + overCoord[i];
          }
        }

        url += ';' + toCoord; // if (this.state.currentProfile) {

        url += '?profile=' + this.state.currentProfile; // }

        if (scope.routeAjax) {
          scope.routeAjax.abort();
        }

        scope.routeAjax = jQuery.ajax({
          'url': url
        }).done(function (response) {
          scope.response = response;

          if (response) {
            if (response.error) {
              // let errorDiv = scope.showRouterError(scope.languageConstants[response.error]);
              var alertHandler = new _AlertHandler.AlertHandler();
              alertHandler.showInfoDialog(scope.props.langConstants[response.error]);
            } else {
              scope.showRouteLayer(response);
              scope.showRouteInstructions(response, 0, scope.routerWaySource, scope.routerHintSource);

              if (response.features && (response.features.elements || response.features.length > 0)) {
                var sortedFeatures = scope.showFeatures(response.features, response.type, "router");
                scope.setState({
                  "featureList": {
                    "features": sortedFeatures,
                    "type": response.type
                  },
                  "featureSource": scope.routerFeaturesSource,
                  "openResults": true
                });
              }
            }
          }
        }).always(function () {
          scope.routeAjax = undefined;

          if (scope.props.mapController.data.closeAfterSearch) {}
        });
        return '';
      } else {
        //OSRM-API:<5
        try {
          url = 'con4gis/routeService/' + profileId + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
          jQuery.ajax({
            'url': url
          }).done(function (response) {
            if (response) {
              scope.showRoute(response);
            }
          });
          return '';
        } catch (Exception) {
          console.log("Please use a more modern API-Version for the Routeservice");
        }
      }
    }
    /**
     * Checks the routing properties and triggers a new route search, when the mandatory parameters are set.
     */

  }, {
    key: "recalculateRoute",
    value: function recalculateRoute() {
      if (this.state.fromPoint && this.state.toPoint) {
        if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
          this.performViaRoute(this.state.fromPoint, this.state.toPoint, this.state.overPoints);
        } else {
          this.performViaRoute(this.state.fromPoint, this.state.toPoint);
        }
      }
    }
  }, {
    key: "getActiveLayer",
    value: function getActiveLayer(layerId) {
      return this.objLayers[layerId];
    }
    /**
     * Clears the current features from the map and displays the given new features. The features are sorted by the configured
     * property. The function takes the backend configuration according to prioritized features into account.
     * @param features
     * @param type
     * @param mode
     * @param noClear
     * @returns {*}
     */

  }, {
    key: "showFeatures",
    value: function showFeatures(features) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "table";
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "router";
      var noClear = arguments.length > 3 ? arguments[3] : undefined;
      var self = this;

      if (!noClear) {
        this.routerFeaturesSource.clear();
      } // interim clear of feature selection


      if (!features || features.length === 0) {
        return [];
      }

      var mapData = this.mapData;
      var layerId = this.state.mode === "route" ? this.state.layerRoute : this.state.layerArea;
      var activeLayer = this.state.mode === "route" ? this.state.layerValueRoute : this.state.layerValueArea;
      var layer = this.getActiveLayer(layerId).layerData;
      var unstyledFeatures = [];
      var contentFeatures = [];
      var missingStyles = [];
      var priceSortedFeatures = features.length ? features.slice() : features.elements.slice();
      var bestFeatures = [];
      this.bestFeatureIds = [];

      if (mapData.priorityFeatures && mapData.priorityLocstyle && features.length > 0) {
        // sort by selected value for the map label ascending
        priceSortedFeatures.sort(function (a, b) {
          return parseFloat(a[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) - parseFloat(b[mapData.routerLayers[layerId][activeLayer]['mapLabel']]);
        });
        var featureCount = parseInt(mapData.priorityFeatures, 10);
        var upperBound = featureCount > priceSortedFeatures.length ? priceSortedFeatures.length : featureCount;

        for (var i = 0; i < upperBound; i++) {
          bestFeatures[i] = priceSortedFeatures[i];
          this.bestFeatureIds.push(priceSortedFeatures[i]['id']);
        }
      }

      if (type === "petrols" && mode !== "area") {
        features = features.elements;
      }

      if (type !== "overpass") {
        featureLoop: for (var _i3 = 0; features && _i3 < features.length; _i3++) {
          if (!features[_i3].id) {
            continue;
          }

          var label = "";
          var feature = features[_i3];
          var resultCoordinate = void 0;
          var contentFeature = void 0;
          resultCoordinate = (0, _proj.transform)([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
          var point = new _geom.Point(resultCoordinate);
          contentFeature = new _ol.Feature(point);
          contentFeature.setId(feature.id);
          contentFeature.set('loc_linkurl', layer.loc_linkurl);
          contentFeature.set('locstyle', layer.locstyle);
          contentFeature.set('hover_location', layer.hover_location);
          contentFeature.set('hover_style', layer.hover_style);
          contentFeature.set('zoom_onclick', layer.zoom_onclick);
          contentFeature.set('tid', feature.id);

          if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
            label = feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
          } else if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature.tags && feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
            label = feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
          }

          var locstyle = feature['locstyle'] || layer.locstyle;

          if (mapData.priorityFeatures && mapData.priorityLocstyle) {
            if (bestFeatures.includes(feature)) {
              locstyle = mapData.priorityLocstyle;
            }
          }

          contentFeature.set('locationStyle', locstyle);
          contentFeature.set('zIndex', _i3);
          contentFeature.set('label', label);

          if (locstyle && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            contentFeature.setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);

            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                contentFeatures.push(contentFeature);
              }
            } else {
              contentFeatures.push(contentFeature);
            }
          } else {
            contentFeature.set('styleId', locstyle);

            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                unstyledFeatures.push(contentFeature);
                missingStyles[locstyle] = locstyle;
              }
            } else {
              unstyledFeatures.push(contentFeature);
              missingStyles[locstyle] = locstyle;
            }
          }

          for (var tag in feature.tags) {
            if (feature.tags.hasOwnProperty(tag)) {
              contentFeature.set(tag, feature.tags[tag]);
            }
          }
        }
      } else {
        var geojson;

        if (features.elements) {
          geojson = osmtogeojson(features);
          this.geoJsonFeatures = geojson;
        } else {
          geojson = this.geoJsonFeatures;
        }

        var mapProj = self.props.mapController.map.getView().getProjection();
        contentFeatures = new _format.GeoJSON().readFeatures(geojson, {
          dataProjection: 'EPSG:4326',
          featureProjection: mapProj
        });
        var labelKey = mapData.routerLayers[layerId][activeLayer]['mapLabel'];

        for (var id in contentFeatures) {
          if (contentFeatures.hasOwnProperty(id)) {
            contentFeatures[id].set('loc_linkurl', layer.loc_linkurl);
            contentFeatures[id].set('locstyle', layer.locstyle);
            contentFeatures[id].set('hover_location', layer.hover_location);
            contentFeatures[id].set('hover_style', layer.hover_style);
            contentFeatures[id].set('zoom_onclick', layer.zoom_onclick);
            contentFeatures[id].set('tid', parseInt(contentFeatures[id].get('id').split('/')[1]));
            contentFeatures[id].set('label', contentFeatures[id].get(labelKey));

            if (self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle]) {
              contentFeatures[id].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
            }
          }
        }
      }

      if (missingStyles && missingStyles.length > 0) {
        self.props.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {
          done: function done() {
            for (var _i4 = 0; _i4 < unstyledFeatures.length; _i4++) {
              var styleId = unstyledFeatures[_i4].get('styleId');

              unstyledFeatures[_i4].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);

              self.routerFeaturesSource.addFeature(unstyledFeatures[_i4]);
            }

            missingStyles = undefined;
          }
        });
      }

      if (contentFeatures && contentFeatures.length > 0) {
        this.routerFeaturesSource.addFeatures(contentFeatures);
      }

      return priceSortedFeatures;
    }
    /**
     * Displays the main route.
     * @param routeResponse
     */

  }, {
    key: "showRoute",
    value: function showRoute(routeResponse) {
      this.showRouteLayer(routeResponse, 0);
      this.showRouteInstructions(routeResponse, 0);
    }
    /**
     * Show an alternate route.
     * @param routeResponse
     * @param routeNumber
     */

  }, {
    key: "showAltRoute",
    value: function showAltRoute(routeResponse, routeNumber) {
      this.showRouteLayer(routeResponse, routeNumber);
      this.showRouteInstructions(routeResponse, routeNumber);
    }
    /**
     * Displays a route on the map.
     * @param routeResponse
     * @param routeNumber
     */

  }, {
    key: "showRouteLayer",
    value: function showRouteLayer(routeResponse, routeNumber) {
      var mapView,
          wayPolyline,
          routeFeatures,
          altRouteFeatures,
          rightPadding,
          leftPadding,
          routeNumber = routeNumber || 0;

      if (routeResponse) {
        this.routerWaySource.clear();
        this.routingAltWaySource.clear();
        mapView = this.props.mapController.map.getView();

        if (this.props.mapController.data.router_api_selection == '1' || this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '1' || routeResponse.routeType == '2') {
          //OSRM-API:5.x
          wayPolyline = new _format.Polyline(); // add route

          if (routeResponse.routes) {
            //check for alternative route
            if (routeResponse.routes[1]) {
              if (routeNumber === 1) {
                altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
                });
                altRouteFeatures[0].setId(0);
              } else {
                altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[1].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
                });
                altRouteFeatures[0].setId(1);
              }
            }

            routeFeatures = wayPolyline.readFeatures(routeResponse.routes[routeNumber].geometry, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            routeFeatures[0].setId(routeNumber);
          }
        } else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {
          //OSRM-API:<5
          wayPolyline = new _format.Polyline({
            'factor': this.props.mapController.data.router_viaroute_precision || 1e6
          }); // add route

          routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
        } else if (this.props.mapController.data.router_api_selection == '3') {
          wayPolyline = new _format.Polyline();

          if (routeResponse.paths && routeResponse.paths[1]) {
            //check for alternative route
            if (routeNumber == 1) {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[0].points, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(0);
            } else {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[1].points, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(1);
            }
          }

          routeFeatures = wayPolyline.readFeatures(routeResponse.paths[routeNumber].points, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
          routeFeatures[0].setId(routeNumber);
        } else if (this.props.mapController.data.router_api_selection == "4" || routeResponse.routeType == '4') {
          wayPolyline = new _format.Polyline({
            'factor': 1e6
          });

          if (routeResponse.trip && routeResponse.trip.legs && routeResponse.trip.legs[1]) {
            //check for alternative route
            if (routeNumber == 1) {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(0);
            } else {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(1);
            }
          }

          routeFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[routeNumber].shape, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
          routeFeatures[0].setId(routeNumber);
        }

        if (this.props.mapController.data.router_alternative == '1') {
          if (routeResponse.routes && routeResponse.routes.length > 1 && routeResponse.routes[1] || routeResponse.paths && routeResponse.paths.length > 1 && routeResponse.paths[1]) {
            this.routingAltWaySource.addFeatures(altRouteFeatures);
          }
        }

        if (routeFeatures) {
          this.routerWaySource.addFeatures(routeFeatures); // render view
          // so the route gets drawn before the animation starts

          this.props.mapController.map.renderSync(); // animation

          mapView.animate({
            start: +new Date(),
            duration: 2000,
            resolution: mapView.getResolution(),
            center: [0, 0] //rotation: Math.PI

          }); // calculate padding

          var width = jQuery(".c4g-starboard-container").css('width');

          if (width) {
            width = width.split(".");
            width = Array.isArray(width) ? width[0] : width;
            width = parseInt(width) + 50;
          } else {
            width = 50;
          } // center on route


          mapView.fit(routeFeatures[0].getGeometry(), {
            size: this.props.mapController.map.getSize(),
            padding: [50, width, 50, 50]
          });
        }
      }
    }
    /**
     * Creates an interaction for routing instructions. When hovering the instructions in the portside container, the
     * location of the instruction is highlighted on the route.
     * @param routerInstruction
     */

  }, {
    key: "adjustInstructionMapInteraction",
    value: function adjustInstructionMapInteraction(routerInstruction) {
      var self = this,
          fnItemClick,
          fnItemOver,
          fnItemOut;

      fnItemClick = function fnItemClick(element) {
        self.routerHintSource.clear();
        var feature = self.routerWaySource.getFeatures()[0];
        var coordinates = feature.getGeometry().getCoordinates();
        var coordLonLat = element.data('pos');

        if (coordLonLat) {
          var stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          var newCoord = (0, _proj.fromLonLat)(stringlonlat);
          var currentHintFeature = new _ol.Feature({
            geometry: new _geom.Point(newCoord)
          });
          self.routerHintSource.addFeature(currentHintFeature);
          self.options.mapController.map.getView().setCenter(newCoord);
        }

        if (coordinates) {
          var start = element.data('start');
          var end = element.data('end');

          if (start, end) {
            var geom = new _geom.LineString(coordinates.slice(start, end));
            var currentHintFeature = new _ol.Feature({
              geometry: geom
            });
            currentHintFeature.setStyle(new _style.Style({
              stroke: new _style.Stroke({
                color: 'rgba(255, 0, 0, 1)',
                width: 20
              })
            }));
            var currentZoom = self.options.mapController.map.getView().getZoom();
            self.routerHintSource.addFeature(currentHintFeature);
            self.options.mapController.map.getView().fit(geom);
            var afterZoom = self.options.mapController.map.getView().getZoom();
            var endZoom = Math.round((currentZoom + afterZoom) / 2);
            endZoom = endZoom > afterZoom ? afterZoom : endZoom;
            self.options.mapController.map.getView().setZoom(endZoom);
          }
        }
      };

      fnItemOver = function fnItemOver(element) {
        if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
          var feature = self.routerWaySource.getFeatures()[0];

          if (feature) {
            self.routerHintSource.clear();
            var currentHintFeature = new _ol.Feature({
              geometry: new _geom.Point(feature.getGeometry().getCoordinates()[element.data('pos')])
            });
            self.routerHintSource.addFeature(currentHintFeature);
          }
        }

        if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
          var feature = self.routerWaySource.getFeatures()[0];

          if (feature) {
            self.routerHintSource.clear();
            var coordLonLat = element.data('pos');

            if (coordLonLat) {
              var stringlonlat = coordLonLat.split(",");
              stringlonlat[0] = parseFloat(stringlonlat[0]);
              stringlonlat[1] = parseFloat(stringlonlat[1]);
              var newCoord = (0, _proj.fromLonLat)(stringlonlat);
              var currentHintFeature = new _ol.Feature({
                geometry: new _geom.Point(newCoord)
              });
              self.routerHintSource.addFeature(currentHintFeature);
            }

            feature = self.routerWaySource.getFeatures()[0];
            var coordinates = feature.getGeometry().getCoordinates();

            if (coordinates) {
              var start = element.data('start');
              var end = element.data('end');

              if (start, end) {
                var currentHintFeature = new _ol.Feature({
                  geometry: new _geom.LineString(coordinates.slice(start, end))
                });
                currentHintFeature.setStyle(new _style.Style({
                  stroke: new _style.Stroke({
                    color: 'rgba(255, 0, 0, 1)',
                    width: 15
                  })
                }));
                self.routerHintSource.addFeature(currentHintFeature);
              }
            }
          }
        }
      };

      fnItemOut = function fnItemOut() {
        self.routerHintSource.clear();
      };

      jQuery('[data-start]', routerInstruction).each(function (index, element) {
        var $element = jQuery(element);
        $element.click(function () {
          fnItemClick($element);
        });
        $element.on('mouseenter', function () {
          fnItemOver($element);
        });
        $element.on('mouseleave', function () {
          fnItemOut();
        });
      });
      jQuery('[data-pos]', routerInstruction).each(function (index, element) {
        var $element = jQuery(element);
        $element.click(function () {
          fnItemClick($element);
        });
        $element.on('mouseenter', function () {
          fnItemOver($element);
        });
        $element.on('mouseleave', function () {
          fnItemOut();
        });
      });
    }
    /**
     * Adds a click interaction for the router. Upon map click, the clicked points are converted to locations and the
     * route search is started, as long as all mandatory properties are set.
     */

  }, {
    key: "addMapInputInteraction",
    value: function addMapInputInteraction() {
      var self = this,
          coordinate;

      self.fnMapRouterInteraction = function (evt) {
        if (self.state.open !== true) {
          return;
        }

        var feature = self.props.mapController.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
          return feature;
        });

        if (feature && feature.getId()) {
          var activeId = feature.getId().search && feature.getId().search('/') ? parseFloat(feature.getId().substring(feature.getId().search('/') + 1)) : feature.getId();
          self.setState({
            activeId: activeId,
            openResults: true
          }, function () {
            // TODO behaves differently for route or area search
            if (document.querySelector(".c4g-route-feature-wrapper")) {
              var featureWrapper = document.querySelector(".c4g-route-feature-wrapper");
              var activeFeature = document.querySelector("li.route-features-list-element.c4g-active");

              if (featureWrapper && activeFeature) {
                featureWrapper.scrollTo(0, activeFeature.offsetTop);
              }
            }
          });
        } else {
          coordinate = (0, _proj.toLonLat)(evt.coordinate); // clear old features

          self.areaSource.clear();

          if (self.state.mode === "route") {
            // TODO router permalink wieder aktualisieren
            if (self.state.fromAddress === "") {
              self.setRouteFrom(coordinate[0], coordinate[1]); // self.updateLinkFragments("addressFrom", coordinate);

              self.recalculateRoute();
            } else if (self.state.toAddress === "") {
              self.setRouteTo(coordinate[0], coordinate[1]); // self.updateLinkFragments("addressTo", coordinate);

              self.recalculateRoute();
            } else if (self.state.overPtCtr > 0) {
              for (var i = 0; i < self.state.overPtCtr; i++) {
                if (!self.state.overPoints[i]) {
                  self.addOverPoint(coordinate[0], coordinate[1], i);
                  break;
                }
              }
            }
          } else if (self.state.mode === "area" && self.state.areaAddress === "") {
            self.setAreaPoint(coordinate[0], coordinate[1]);
          }
        }
      };

      this.props.mapController.map.on('click', self.fnMapRouterInteraction);
    }
  }]);
  return RouterView;
}(_react.Component);

exports.RouterView = RouterView;

/***/ }),

/***/ "./Resources/public/js/routing-constant-i18n.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/routing-constant-i18n.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLanguage = getLanguage;

var _routingConstantI18nDe = __webpack_require__(/*! ./routing-constant-i18n-de */ "./Resources/public/js/routing-constant-i18n-de.js");

var _routingConstantI18nEn = __webpack_require__(/*! ./routing-constant-i18n-en */ "./Resources/public/js/routing-constant-i18n-en.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
function getLanguage(mapData) {
  if (typeof mapData !== 'undefined') {
    switch (mapData.lang) {
      case "de":
        return _routingConstantI18nDe.routingConstantsGerman;

      case "en":
        return _routingConstantI18nEn.routingConstantsEnglish;

      default:
        return _routingConstantI18nEn.routingConstantsEnglish;
    }
  }
}

/***/ }),

/***/ "./Resources/public/js/routing-constants.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/routing-constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstants = void 0;
var routingConstants = {
  ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
  ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
  ROUTER_INPUT_FROM: 'c4g-router-input-from',
  ROUTER_INPUT_TO: 'c4g-router-input-to',
  ROUTER_INPUT_OVER: 'c4g-router-input-over',
  ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
  ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
  ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
  ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
  ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',
  ROUTER_SWITCH: 'c4g-router-switch',
  ROUTER_OVER: 'c4g-router-over',
  ROUTER_PRINT: 'c4g-router-print',
  ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
  ROUTER_PROFILE_TRUCK: 'c4g-router-profile-hgv',
  ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
  ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
  ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',
  ROUTER_PROFILE_SCOOTER: 'c4g-router-profile-scooter',
  ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
  ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
  ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
  ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',
  ROUTE_LAYER_VALUES: 'c4g-routing-layer-values',
  ROUTE_LAYERS_SELECT: 'c4g-routing-layers-select',
  ROUTE_TOGGLE: 'c4g-routing-toggle',
  OUTPUT_DETOUR: 'c4g-routing-output',
  ROUTE_START_BUTTON: 'c4g-route-search-start',
  ROUTER_SEARCH: 'c4g-router-search',
  ROUTE_POSITION: 'c4g-router-position',
  ROUTE_ERROR: 'c4g-routing-error',
  NONE: '' // last line

}; // end of "css constants" ---

exports.routingConstants = routingConstants;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4uL0NvcmVCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9BbGVydEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLXJvdXRpbmctcGVybWFsaW5rLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci12aWV3LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0aW5nLWNvbnN0YW50LWkxOG4uanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGluZy1jb25zdGFudHMuanMiXSwibmFtZXMiOlsiUm91dGluZ1Blcm1hbGluayIsInJvdXRlciIsIl9yb3V0ZXIiLCJsaW5rRnJhZ21lbnRzIiwicmF3RnJhZ21lbnRzIiwidmFsdWUiLCJrZXkiLCJ1cGRhdGVVcmwiLCJ1cmwiLCJmcmFnbWVudHMiLCJtb2RlIiwiYWRkcmVzc0FyZWEiLCJkZXRvdXJBcmVhIiwic2VhcmNoVHlwZSIsImZvcmNlU3RhcnQiLCJjb21wbGV0ZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJkZXRvdXJSb3V0ZSIsInByb3BzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJpbml0aWFsUGFyYW1zIiwic2NvcGUiLCJjaGVja0Zvck9sZFBhcmFtcyIsImFyclBhcmFtcyIsInNwbGl0IiwibWFwIiwicGFpciIsIm9ialBhcmFtcyIsImZvckVhY2giLCJyb3V0ZXJMYXllcnMiLCJkZXNpcmVkQnV0dG9uIiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJpbm5lcktleSIsInNpbmdsZUVudHJ5IiwiY21wVmFsdWUiLCJzIiwibWFwTGFiZWwiLCJkZXNpcmVkQnV0dG9uUm91dGluZyIsIm0iLCJoYW5kbGVJbml0aWFsQXJlYVNlYXJjaCIsImhhbmRsZUluaXRpYWxSb3V0ZVNlYXJjaCIsInN0clBhcmFtcyIsInBhcmFtcyIsImluZGV4T2YiLCJhcnJGcmFnbWVudHMiLCJwZXJmb3JtR2VvU2VhcmNoIiwiZnJvbUNvb3JkcyIsInRvQ29vcmRzIiwiam9pbiIsImNvb3JkcyIsInNldFN0YXRlIiwiY2VudGVyIiwiYSIsImRldG91ciIsImQiLCJzZWFyY2h0eXBlIiwiZiIsInVwZGF0ZUxpbmtGcmFnbWVudHMiLCJsZW5ndGgiLCJzZXRBcmVhUG9pbnQiLCJqUXVlcnkiLCJjbGljayIsImFmIiwiZWxlbSIsInBhcnNlRmxvYXQiLCJhdCIsInRvZ2dsZURldG91clJvdXRlIiwidmFsIiwidHJpZ2dlciIsInNldFJvdXRlRnJvbSIsInNldFJvdXRlVG8iLCJSb3V0ZXJSZXN1bHRDb250YWluZXIiLCJSZWFjdCIsImxhenkiLCJUaXRsZWJhciIsIlJvdXRlclBvcHVwQnV0dG9ucyIsIlJvdXRlckNvbnRyb2xzIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsIm9zbXRvZ2VvanNvbiIsInJlcXVpcmUiLCJSb3V0ZXJWaWV3Iiwic2V0QWN0aXZlSWQiLCJiaW5kIiwic2V0T3BlbiIsImNsb3NlIiwib3BlbkNvbnRyb2xzIiwicmVzZXRGcm9tUG9pbnQiLCJyZXNldFRvUG9pbnQiLCJyZXNldEFyZWFQb2ludCIsInRvZ2dsZVJlc3VsdERldGFpbHMiLCJzZXRSZXN1bHRJbnN0ciIsInNldFJlc3VsdEZlYXQiLCJyZWNhbGN1bGF0ZVJvdXRlIiwiYXJyUHJvZmlsZXMiLCJsYW5ndWFnZUNvbnN0YW50cyIsInJvdXRlcl9wcm9maWxlcyIsInB1c2giLCJpZCIsInRleHQiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJzaG93RmVhdHVyZXMiLCJPYmplY3QiLCJrZXlzIiwic3RhdGUiLCJvYmpTZXR0aW5ncyIsInByb3h5VXJsIiwiYXV0b2NvbXBsZXRlIiwiZ2V0VmlldyIsImdldENlbnRlciIsImdlb3NlYXJjaCIsImFjdGl2ZUlkIiwib3BlblJlc3VsdHMiLCJjb250YWluZXJBZGRyZXNzZXMiLCJhcnJGcm9tUG9zaXRpb25zIiwiYXJyRnJvbU5hbWVzIiwiYXJyVG9Qb3NpdGlvbnMiLCJhcnJUb05hbWVzIiwiYXJyQXJlYVBvc2l0aW9ucyIsImFyckFyZWFOYW1lcyIsImFyck92ZXJQb3NpdGlvbnMiLCJhcnJPdmVyTmFtZXMiLCJhcmVhQWRkcmVzcyIsImluaXRpYWwiLCJmZWF0dXJlTGlzdCIsImZlYXR1cmVzIiwidHlwZSIsImluaXRpYWxNb2RlIiwib3ZlclB0Q3RyIiwib3ZlckFkZHJlc3NlcyIsImZlYXR1cmVTb3VyY2UiLCJ1bmRlZmluZWQiLCJyb3V0ZXJXYXlTb3VyY2UiLCJyb3V0ZXJIaW50U291cmNlIiwiYXJlYVBvaW50IiwiZnJvbVBvaW50IiwidG9Qb2ludCIsIm92ZXJQb2ludHMiLCJwcm9maWxlcyIsImN1cnJlbnRQcm9maWxlIiwib3BlbiIsImluaXRpYWxfb3Blbl9jb21wIiwib3BlblNldHRpbmdzIiwicm91dGVySW5zdHJ1Y3Rpb25zIiwicmVzdWx0TW9kZSIsImluaXRpYWxSZXN1bHRNb2RlIiwicG9wdXBSb3V0ZUJ1dHRvbldyYXBwZXIiLCJzd2FwUG9pbnRzIiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwiaW5pdCIsIm1hcERhdGEiLCJzb3VyY2VzIiwid2F5U291cmNlIiwiaGludFNvdXJjZSIsInNsaWRlck9wdGlvbnMiLCJtaW4iLCJtYXgiLCJyZXNldEZ1bmN0aW9ucyIsImZyb20iLCJ0byIsImFyZWEiLCJvdmVyU2V0dGluZ3MiLCJjcmVhdGVPdmVyU2V0dGluZ3MiLCJoZWFkbGluZSIsInJvdXRlckhlYWRsaW5lIiwiUk9VVEVSX0RFRkFVTFRfSEVBRExJTkVfUk9VVEUiLCJhcmVhSGVhZGxpbmUiLCJST1VURVJfREVGQVVMVF9IRUFETElORV9BUkVBIiwiaW5zdHJ1Y3Rpb25zIiwicmVzdWx0U3dpdGNoZXIiLCJzd2l0Y2hlckJ1dHRvbnMiLCJST1VURVJfU0VUVElOR1MiLCJ0b2dnbGVEZXRhaWxzIiwiQ0xPU0UiLCJvYmpGdW5jdGlvbnMiLCJlbmFibGVPdmVyUG9pbnRzIiwiZW5hYmxlVGFyZ2V0U3dpdGNoIiwiQ1RSTF9ST1VURVIiLCJ0YXJnZXQiLCJyZXN1bHREZXRhaWxPcGVuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaSIsInBhcnNlSW50Iiwic2V0T3BlbkNvbXBvbmVudCIsImhhbmRsZUluaXRpYWxQYXJhbXMiLCJyb3V0ZXJfZGl2IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJnZXRDb29yZGluYXRlcyIsInJvdXRlckxheWVyR3JvdXAiLCJzZXRWaXNpYmxlIiwibW9kV2F5SW50ZXJhY3Rpb24iLCJzZXRBY3RpdmUiLCJoaWRlT3RoZXJDb21wb25lbnRzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0b3JlVmFsdWUiLCJwcm9maWxlIiwidXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMiLCJsYXllciIsImxheWVyVmFsdWVzIiwibmV3RGVmYXVsdExheWVyVmFsdWUiLCJwZXJmb3JtQXJlYSIsImxheWVyVmFsdWUiLCJib29sIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJwZXJmb3JtUmV2ZXJzZVNlYXJjaCIsInBvaW50IiwiUG9pbnQiLCJpbmRleCIsInNwbGljZSIsImxvY2F0aW9uU291cmNlIiwibG9jYXRpb25zU291cmNlIiwiY2xlYXIiLCJuZXdGcm9tUG9pbnQiLCJuZXdGcm9tQWRkcmVzcyIsIm5ld1RvUG9pbnQiLCJuZXdUb0FkZHJlc3MiLCJ0bXBOYW1lcyIsInRtcFBvcyIsIm92ZXJGdW5jdGlvbiIsImNyZWF0ZUF1dG9jb21wbGV0ZUZ1bmN0aW9uc0Zvck92ZXJGaWVsZCIsImZpZWxkSWQiLCJkZWxldGVPdmVyTGlzdGVuZXIiLCJzZWxlY3RPdmVyTGlzdGVuZXIiLCJ1aSIsIm92ZXJWYWx1ZSIsIml0ZW0iLCJmaW5kSW5kZXgiLCJkYW5nZXIiLCJjb29yZCIsImNoYW5nZU92ZXJMaXN0ZW5lciIsImFyZWFTb3VyY2UiLCJ0bXBGZWF0dXJlIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiY2xvbmUiLCJ0cmFuc2Zvcm0iLCJyb3V0ZXJfZnJvbV9sb2NzdHlsZSIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJzZXRTdHlsZSIsInN0eWxlIiwiZG9uZUZ1bmN0aW9uIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiYWRkRmVhdHVyZSIsInJvdXRlcl90b19sb2NzdHlsZSIsInJvdXRlcl9pbnRlcmltX2xvY3N0eWxlIiwicm91dGVTdGFydEJ1dHRvbiIsInJvdXRlcl9wb2ludF9sb2NzdHlsZSIsImRvbmUiLCJkZWxldGVGcm9tTGlzdGVuZXIiLCJzZWxlY3RGcm9tTGlzdGVuZXIiLCJmcm9tVmFsdWUiLCJjaGFuZ2VGcm9tTGlzdGVuZXIiLCJmcm9tRnVuY3Rpb25zIiwiZGVsZXRlVG9MaXN0ZW5lciIsInNlbGVjdFRvTGlzdGVuZXIiLCJ0b1ZhbHVlIiwiY2hhbmdlVG9MaXN0ZW5lciIsInRvRnVuY3Rpb25zIiwiZGVsZXRlQXJlYUxpc3RlbmVyIiwic2VsZWN0QXJlYUxpc3RlbmVyIiwiYXJlYVZhbHVlIiwiY2hhbmdlQXJlYUxpc3RlbmVyIiwiYXJlYUZ1bmN0aW9ucyIsImNyZWF0ZVBvcHVwV3JhcHBlciIsIm9ialBvcHVwIiwiZmVhdHVyZSIsInJvdXRpbmdIYW5kbGVyIiwic2V0TW9kZSIsImN1cnJlbnRUYXJnZXQiLCJoYXNDbGFzcyIsImNzc0NvbnN0YW50cyIsIlBPUFVQX1JPVVRFX0ZST00iLCJnZXRHZW9tZXRyeSIsInJvdXRlQnV0dG9uV3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlBPUFVQX1JPVVRFX1dSQVBQRVIiLCJyb3V0ZUZyb21CdXR0b24iLCJJQ09OIiwiYXBwZW5kQ2hpbGQiLCJyb3V0ZUZyb21CdXR0b25TcGFuIiwicm91dGVUb0J1dHRvbiIsIlBPUFVQX1JPVVRFX1RPIiwicm91dGVUb0J1dHRvblNwYW4iLCJjNGdNYXBzSG9va3MiLCJwcm94eV9hcHBlbmRQb3B1cCIsInBvcHVwIiwiY29tcG9uZW50cyIsInJvdXRpbmdfbGluayIsInBvcHVwSGFuZGxpbmciLCJjNGdNYXBzUG9wdXAiLCIkY29udGVudCIsImFwcGVuZCIsImNvbmZpZyIsImNvbXAiLCJzZXRBZGRCdXR0b25zIiwic2VsZiIsInN0eWxlcyIsImFyZWFDZW50ZXJMb2NzdHlsZSIsImNsaWNrTG9jc3R5bGUiLCJwcmlvcml0eUZlYXR1cmVzIiwicHJpb3JpdHlMb2NzdHlsZSIsIm9iakxheWVycyIsInJvdXRpbmdBbHRXYXlTb3VyY2UiLCJWZWN0b3JTb3VyY2UiLCJyb3V0ZXJXYXlMYXllciIsIlZlY3RvciIsInNvdXJjZSIsInpJbmRleCIsIlN0eWxlIiwic3Ryb2tlIiwiU3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsInJvdXRlckFsdFdheUxheWVyIiwic2VsZWN0SW50ZXJhY3Rpb24iLCJTZWxlY3QiLCJvbiIsInNlbGVjdGVkIiwiZ2V0VHlwZSIsInNob3dBbHRSb3V0ZSIsInJlc3BvbnNlIiwiZ2V0SWQiLCJjbGlja0ZlYXR1cmVFbnRyeUZvckZlYXR1cmUiLCJtYXBTZWxlY3RJbnRlcmFjdGlvbiIsIk1vZGlmeSIsIm1vZGlmeVN0YXJ0UG9pbnQiLCJtYXBCcm93c2VyRXZlbnQiLCJjb29yZGluYXRlIiwib3ZlclBvaW50IiwibWluRGlzdGFuY2UiLCJJbmZpbml0eSIsImluc2VydElkIiwiYXJyS2V5cyIsImRpc3QiLCJjYWxjRGlzdGFuY2UiLCJkaXN0U3RhcnQiLCJkaXN0RW5kIiwiZGlzdFN0YXJ0T2xkIiwib3ZlckVuZEluZGV4IiwiZGlzdEVuZE9sZCIsImFkZE92ZXJQb2ludCIsImFkZEludGVyYWN0aW9uIiwicm91dGVySGludExheWVyIiwicmVzb2x1dGlvbiIsImxvY2F0aW9uc0xheWVyIiwiYXJlYUxheWVyIiwicm91dGVyRmVhdHVyZXNTb3VyY2UiLCJyb3V0ZXJGZWF0dXJlc0xheWVyIiwiR3JvdXAiLCJsYXllcnMiLCJDb2xsZWN0aW9uIiwidmlzaWJsZSIsImFkZExheWVyIiwidmlld0FyZWEiLCJyb3V0ZUluc3RydWN0aW9ucyIsInByb2ZpbGVJZCIsImdlb1NlYXJjaEFwaSIsImFwaSIsImdlb1JldmVyc2VTZWFyY2hBcGkiLCJnZW9zZWFyY2hfcmV2ZXJzZSIsInJvdXRpbmdBcGkiLCJyb3V0aW5nIiwicGVybWFsaW5rSGFuZGxlciIsImNyZWF0ZUF1dG9jb21wbGV0ZUZ1bmN0aW9ucyIsImFkZFBvcHVwSG9vayIsImFkZE1hcElucHV0SW50ZXJhY3Rpb24iLCJwb2ludDEiLCJwb2ludDIiLCJzcXVhcmUxIiwic3F1YXJlMiIsIk1hdGgiLCJwb3ciLCJzcXJ0Iiwicm91dGVSZXNwb25zZSIsInJvdXRlTnVtYmVyIiwicm91dGVySW5zdHJ1Y3Rpb24iLCJyb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIiLCJyb3V0ZXJJbnN0cnVjdGlvbnNIdG1sIiwiaW5zdHIiLCJzdHJUeXBlIiwic3RyTW9kIiwicm93c3R5bGUiLCJqIiwicm91dGVfbmFtZV8wIiwicm91dGVfbmFtZV8xIiwidG90YWxfZGlzdGFuY2UiLCJ0b3RhbF90aW1lIiwic2hvd0luc3RydWN0aW9ucyIsInJvdXRpbmdDb25zdGFudHMiLCJST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUiIsImNzcyIsInJvdXRlcl9hcGlfc2VsZWN0aW9uIiwicm91dGVUeXBlIiwicm91dGVzIiwibGVncyIsInN1bW1hcnkiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwicm91dGVfbmFtZSIsInJvdXRlX3N1bW1hcnkiLCJzZWdtZW50cyIsImN1cnJlbnRTZWdtZW50Iiwic3RlcHMiLCJjdXJyZW50U3RlcCIsInRpbWUiLCJwYXRocyIsImN1cnJlbnRJbnN0cnVjdGlvbiIsImluc3RydWN0aW9uIiwic2lnbiIsInRyaXAiLCJtYW5ldXZlcnMiLCJpbm5lckhUTUwiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsInJvdXRlUHJvZmlsZSIsImFjdGl2ZSIsIkFycmF5IiwiaXNBcnJheSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiYWRqdXN0SW5zdHJ1Y3Rpb25NYXBJbnRlcmFjdGlvbiIsImFkZHJlc3MiLCJlbmNvZGVVUkkiLCJzZWFyY2hLZXkiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwibG9uIiwibGF0IiwiYWxlcnRIYW5kbGVyIiwiQWxlcnRIYW5kbGVyIiwic2hvd0luZm9EaWFsb2ciLCJsYW5nQ29uc3RhbnRzIiwiUk9VVEVSX1ZJRVdfQUxFUlRfRVJST1IiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiJGlucHV0Iiwib3B0X2NhbGxiYWNrIiwiYm91bmRzIiwidmlld2JveCIsImNhbGN1bGF0ZUV4dGVudCIsImdldFNpemUiLCJnZXRQcm9qZWN0aW9uIiwicGFyYW0iLCJhamF4IiwiZGVsZXRlQnV0dG9uIiwibmV4dCIsIiRidXR0b25PdmVyIiwicHJvcCIsImZhaWwiLCJzdGF0ZVByb3AiLCJvcHRfaW5kZXgiLCJyZXZlcnNlS2V5Iiwicm9hZCIsInBhdGgiLCJwZWRlc3RyaWFuIiwiaG91c2VfbnVtYmVyIiwiY2l0eSIsInRvd24iLCJkaXNwbGF5X25hbWUiLCJmcm9tQ29vcmQiLCJhcmVhQWpheCIsImFib3J0Iiwic29ydGVkRmVhdHVyZXMiLCJ0b0Nvb3JkIiwib3ZlckNvb3JkIiwiZ2V0RmVhdHVyZXMiLCJwcm9wdCIsImxhbmciLCJyb3V0ZUFqYXgiLCJlcnJvciIsInNob3dSb3V0ZUxheWVyIiwic2hvd1JvdXRlSW5zdHJ1Y3Rpb25zIiwiZWxlbWVudHMiLCJhbHdheXMiLCJjbG9zZUFmdGVyU2VhcmNoIiwic2hvd1JvdXRlIiwiRXhjZXB0aW9uIiwiY29uc29sZSIsImxvZyIsInBlcmZvcm1WaWFSb3V0ZSIsImxheWVySWQiLCJub0NsZWFyIiwiYWN0aXZlTGF5ZXIiLCJnZXRBY3RpdmVMYXllciIsImxheWVyRGF0YSIsInVuc3R5bGVkRmVhdHVyZXMiLCJjb250ZW50RmVhdHVyZXMiLCJtaXNzaW5nU3R5bGVzIiwicHJpY2VTb3J0ZWRGZWF0dXJlcyIsInNsaWNlIiwiYmVzdEZlYXR1cmVzIiwiYmVzdEZlYXR1cmVJZHMiLCJzb3J0IiwiYiIsImZlYXR1cmVDb3VudCIsInVwcGVyQm91bmQiLCJmZWF0dXJlTG9vcCIsImxhYmVsIiwicmVzdWx0Q29vcmRpbmF0ZSIsImNvbnRlbnRGZWF0dXJlIiwic2V0SWQiLCJzZXQiLCJsb2NfbGlua3VybCIsImxvY3N0eWxlIiwiaG92ZXJfbG9jYXRpb24iLCJob3Zlcl9zdHlsZSIsInpvb21fb25jbGljayIsInRhZ3MiLCJpbmNsdWRlcyIsImhpZGVGZWF0dXJlc1dpdGhvdXRMYWJlbCIsInRhZyIsImdlb2pzb24iLCJnZW9Kc29uRmVhdHVyZXMiLCJtYXBQcm9qIiwiR2VvSlNPTiIsInJlYWRGZWF0dXJlcyIsImRhdGFQcm9qZWN0aW9uIiwiZmVhdHVyZVByb2plY3Rpb24iLCJsYWJlbEtleSIsImdldCIsInN0eWxlSWQiLCJhZGRGZWF0dXJlcyIsIm1hcFZpZXciLCJ3YXlQb2x5bGluZSIsInJvdXRlRmVhdHVyZXMiLCJhbHRSb3V0ZUZlYXR1cmVzIiwicmlnaHRQYWRkaW5nIiwibGVmdFBhZGRpbmciLCJQb2x5bGluZSIsInJvdXRlcl92aWFyb3V0ZV9wcmVjaXNpb24iLCJyb3V0ZV9nZW9tZXRyeSIsInBvaW50cyIsInNoYXBlIiwicm91dGVyX2FsdGVybmF0aXZlIiwicmVuZGVyU3luYyIsImFuaW1hdGUiLCJzdGFydCIsIkRhdGUiLCJnZXRSZXNvbHV0aW9uIiwiZml0Iiwic2l6ZSIsInBhZGRpbmciLCJmbkl0ZW1DbGljayIsImZuSXRlbU92ZXIiLCJmbkl0ZW1PdXQiLCJlbGVtZW50IiwiY29vcmRpbmF0ZXMiLCJjb29yZExvbkxhdCIsInN0cmluZ2xvbmxhdCIsIm5ld0Nvb3JkIiwiY3VycmVudEhpbnRGZWF0dXJlIiwib3B0aW9ucyIsInNldENlbnRlciIsImVuZCIsImdlb20iLCJMaW5lU3RyaW5nIiwiY3VycmVudFpvb20iLCJnZXRab29tIiwiYWZ0ZXJab29tIiwiZW5kWm9vbSIsInJvdW5kIiwic2V0Wm9vbSIsImVhY2giLCIkZWxlbWVudCIsImZuTWFwUm91dGVySW50ZXJhY3Rpb24iLCJldnQiLCJmb3JFYWNoRmVhdHVyZUF0UGl4ZWwiLCJwaXhlbCIsInNlYXJjaCIsInN1YnN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJmZWF0dXJlV3JhcHBlciIsImFjdGl2ZUZlYXR1cmUiLCJzY3JvbGxUbyIsIm9mZnNldFRvcCIsIkNvbXBvbmVudCIsImdldExhbmd1YWdlIiwicm91dGluZ0NvbnN0YW50c0dlcm1hbiIsInJvdXRpbmdDb25zdGFudHNFbmdsaXNoIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfT1ZFUiIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9TV0lUQ0giLCJST1VURVJfT1ZFUiIsIlJPVVRFUl9QUklOVCIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX1RSVUNLIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX1BST0ZJTEVfU0NPT1RFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiUk9VVEVfTEFZRVJfVkFMVUVTIiwiUk9VVEVfTEFZRVJTX1NFTEVDVCIsIlJPVVRFX1RPR0dMRSIsIk9VVFBVVF9ERVRPVVIiLCJST1VURV9TVEFSVF9CVVRUT04iLCJST1VURVJfU0VBUkNIIiwiUk9VVEVfUE9TSVRJT04iLCJST1VURV9FUlJPUiIsIk5PTkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QXZCQztBQXdCNUJrTCwwQkFBd0IsRUFBRSw2QkF4QkU7QUF5QjVCQyw4QkFBNEIsRUFBRSxrQ0F6QkY7QUEwQjVCQywrQkFBNkIsRUFBRSxtQ0ExQkg7QUEyQjVCQyxvQ0FBa0MsRUFBRSx1Q0EzQlI7QUE0QjVCQyx5Q0FBdUMsRUFBRSw0Q0E1QmI7QUE2QjVCQyx5Q0FBdUMsRUFBRSxrQ0E3QmI7QUE4QjVCQyw2Q0FBMkMsRUFBRSxzQ0E5QmpCO0FBZ0M1QkMsb0JBQWtCLEVBQUksMEJBaENNO0FBaUM1QkMscUJBQW1CLEVBQUcsMkJBakNNO0FBa0M1QkMsY0FBWSxFQUFVLG9CQWxDTTtBQW1DNUJDLGVBQWEsRUFBUyxvQkFuQ007QUFvQzVCQyxvQkFBa0IsRUFBSSx3QkFwQ007QUFxQzVCQyxlQUFhLEVBQVMsbUJBckNNO0FBc0M1QkMsZ0JBQWMsRUFBUSxxQkF0Q007QUF1QzVCQyxhQUFXLEVBQVcsbUJBdkNNO0FBMkM1QkMsTUFBSSxFQUFFLEVBM0NzQixDQTJDbkI7O0FBM0NtQixDQUF2QixDLENBNENKIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLXZpZXdfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG4vKipcbiAqIGNvbjRnaXMgLSB0aGUgZ2lzLWtpdFxuICpcbiAqIEBwYWNrYWdlICAgY29uNGdpc1xuICogQGF1dGhvciAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgR05VL0xHUEwgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2xncGwtMy4wLmh0bWxcbiAqIEBjb3B5cmlnaHQgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ24gMjAxMSAtIDIwMThcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly93d3cua3Vlc3RlbnNjaG1pZWRlLmRlXG4gKi9cblxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vKipcbiAqIFRoZSBcImNzc0NsYXNzXCIgcGFyYW1ldGVyIGluIHRoZSBmdW5jdGlvbnMgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBvciBhbiBvYmplY3QuIElmIGl0J3MgYSBzdHJpbmcsIGl0IHdpbGwgYmUgYXBwbGllZFxuICogYXMgY2xhc3MgZm9yIHRoZSBwb3B1cC4gSWYgYW4gb2JqZWN0IGlzIHBhc3NlZCwgdGhlIGNsYXNzZXMgY2FuIGJlIHNldCBtb3JlIHByZWNpc2UuIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmVcbiAqIHBvc3NpYmxlIGluIHRoZSBvYmplY3Q6XG4gKiBjc3NDbGFzczoge1xuICogICBjb250YWluZXI6ICdjb250YWluZXItY2xhc3MnLFxuICogICBwb3B1cDogJ3BvcHVwLWNsYXNzJyxcbiAqICAgaGVhZGVyOiAnaGVhZGVyLWNsYXNzJyxcbiAqICAgdGl0bGU6ICd0aXRsZS1jbGFzcycsXG4gKiAgIGNsb3NlQnV0dG9uOiAnY2xvc2UtYnV0dG9uLWNsYXNzJyxcbiAqICAgaWNvbjogJ2ljb24tY2xhc3MnLFxuICogICBpbWFnZTogJ2ltYWdlLWNsYXNzJyxcbiAqICAgY29udGVudDogJ2NvbnRlbnQtY2xhc3MnLFxuICogICBpbnB1dDogJ2lucHV0LWNsYXNzJyxcbiAqICAgYWN0aW9uczogJ2FjdGlvbnMtY2xhc3MnLFxuICogICBjb25maXJtQnV0dG9uOiAnY29uZmlybS1idXR0b24tY2xhc3MnLFxuICogICBjYW5jZWxCdXR0b246ICdjYW5jZWwtYnV0dG9uLWNsYXNzJyxcbiAqICAgZm9vdGVyOiAnZm9vdGVyLWNsYXNzJ1xuICogfVxuICovXG5leHBvcnQgY2xhc3MgQWxlcnRIYW5kbGVyIHtcblxuICBzaG93RXJyb3JEaWFsb2codGl0bGUsIGNvbnRlbnQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93SW5mb0RpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pOztcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHNob3dJbmZvQWN0aW9uRGlhbG9nMih0aXRsZSwgY29udGVudCwgY29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfX0pO1xuICB9XG5cblxuICBzaG93Q29uZmlybURpYWxvZyh0aXRsZSwgdGV4dCwgY29uZmlybUNhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2hvd0NvbmZpcm1EaWFsb2dIVE1MKHRpdGxlLCBodG1sLCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQcmVDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcywgc2hvd0xvYWRpbmcpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiBzaG93TG9hZGluZyA/IHNob3dMb2FkaW5nIDogdHJ1ZSxcbiAgICAgIHByZUNvbmZpcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiAoKSA9PiAhU3dhbC5pc0xvYWRpbmcoKSxcbiAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gIH1cblxuICBzaG93TG9hZGluZ0RpYWxvZyh0aXRsZSwgdGV4dCwgcHJlQ29uZmlybUNhbGxiYWNrLCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgICBhbGxvd0VzY2FwZUtleTogZmFsc2UsXG4gICAgICBhbGxvd091dHNpZGVDbGljazogZmFsc2UsXG4gICAgICBzaG93TG9hZGVyT25Db25maXJtOiB0cnVlLFxuICAgICAgb25CZWZvcmVPcGVuOiAoKSA9PiB7XG4gICAgICAgIFN3YWwuY2xpY2tDb25maXJtKCk7XG4gICAgICB9LFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJyxcbiAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHByZUNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2hvd1NlbGVjdERpYWxvZyh0aXRsZSwgb2JqT3B0aW9ucywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzKSB7XG4gICAgY29uc3Qge3ZhbHVlOiBzZWxlY3RlZFZhbHVlfSA9IGF3YWl0IFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbnB1dDogJ3NlbGVjdCcsXG4gICAgICBpbnB1dE9wdGlvbnM6IG9iak9wdGlvbnMsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgZnJ1aXQnLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5leHBvcnQgY2xhc3MgUm91dGluZ1Blcm1hbGluayB7XG5cbiAgX3JvdXRlcjtcblxuICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcbiAgICB0aGlzLl9yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5saW5rRnJhZ21lbnRzID0ge307XG4gICAgdGhpcy5yYXdGcmFnbWVudHMgPSB7fTtcbiAgfVxuXG4gIGdldCByb3V0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlcjtcbiAgfVxuXG4gIHNldCByb3V0ZXIodmFsdWUpIHtcbiAgICB0aGlzLl9yb3V0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIG9uZSBrZXkgb2YgdGhpcy5saW5rRnJhZ21lbnRzIHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUxpbmtGcmFnbWVudHMoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghdGhpcy5saW5rRnJhZ21lbnRzKSB7XG4gICAgICB0aGlzLmxpbmtGcmFnbWVudHMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5saW5rRnJhZ21lbnRzW2tleV0gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVVybCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgY3VycmVudCB2YWx1ZXMgaW4gdGhpcy5saW5rRnJhZ21lbnRzIGFuZCB1cGRhdGVzIHRoZSBicm93c2VyIFVSTC5cbiAgICovXG4gIHVwZGF0ZVVybCgpIHtcbiAgICBsZXQgdXJsID0gXCI/bWFwc1BhcmFtcz1cIjtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB0aGlzLmxpbmtGcmFnbWVudHM7XG4gICAgaWYgKGZyYWdtZW50cy5tb2RlICYmIGZyYWdtZW50cy5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5tb2RlID8gXCJtOlwiICsgZnJhZ21lbnRzLm1vZGUgKyBcIi9cIiA6IFwiXCI7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLmFkZHJlc3NBcmVhID8gXCJhOlwiICsgZnJhZ21lbnRzLmFkZHJlc3NBcmVhWzBdICsgXCIsXCIgKyBmcmFnbWVudHMuYWRkcmVzc0FyZWFbMV0gKyBcIi9cIiA6IFwiXCI7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLmRldG91ckFyZWEgPyBcImQ6XCIgKyBmcmFnbWVudHMuZGV0b3VyQXJlYSArIFwiL1wiIDogXCJcIjtcbiAgICAgIHVybCArPSBmcmFnbWVudHMuc2VhcmNoVHlwZSA/IFwiczpcIiArIGZyYWdtZW50cy5zZWFyY2hUeXBlICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5mb3JjZVN0YXJ0ID8gXCJmOlwiICsgZnJhZ21lbnRzLmZvcmNlU3RhcnQgOiBcIlwiO1xuICAgICAgbGV0IGNvbXBsZXRlVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgdXJsO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsIGNvbXBsZXRlVXJsKTtcbiAgICB9IGVsc2UgaWYgKGZyYWdtZW50cy5tb2RlICYmIGZyYWdtZW50cy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIHVybCArPSBmcmFnbWVudHMubW9kZSA/IFwibTpcIiArIGZyYWdtZW50cy5tb2RlICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5mcm9tQWRkcmVzcyA/IFwiYWY6XCIgKyBmcmFnbWVudHMuZnJvbUFkZHJlc3NbMF0gKyBcIixcIiArIGZyYWdtZW50cy5mcm9tQWRkcmVzc1sxXSArIFwiL1wiIDogXCJcIjtcbiAgICAgIHVybCArPSBmcmFnbWVudHMudG9BZGRyZXNzID8gXCJhdDpcIiArIGZyYWdtZW50cy50b0FkZHJlc3NbMF0gKyBcIixcIiArIGZyYWdtZW50cy50b0FkZHJlc3NbMV0gKyBcIi9cIiA6IFwiXCI7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLmRldG91clJvdXRlID8gXCJkOlwiICsgZnJhZ21lbnRzLmRldG91clJvdXRlICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5zZWFyY2hUeXBlID8gXCJzOlwiICsgZnJhZ21lbnRzLnNlYXJjaFR5cGUgKyBcIi9cIiA6IFwiXCI7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLmZvcmNlU3RhcnQgPyBcImY6XCIgKyBmcmFnbWVudHMuZm9yY2VTdGFydCA6IFwiXCI7XG4gICAgICBsZXQgY29tcGxldGVVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB1cmw7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgbnVsbCwgY29tcGxldGVVcmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgYXJlIEdFVCBwYXJhbXMgbG9hZGVkIGludG8gdGhlIG1hcERhdGEgYW5kIHRyaWdnZXJzIHRoZSBzZWFyY2ggYWNjb3JkaW5nbHkuXG4gICAqIFRoZSBmaXJzdCBwYXJhbSBpcyBleHBlY3RlZCB0byBiZSBlaXRoZXIgXCJyb3V0ZVwiIG9yIFwiYXJlYVwiIHRvIGluZGljYXRlIHRoZSB0eXBlIG9mIHNlYXJjaC5cbiAgICogQWZ0ZXIgdGhhdCwgdGhlIG5leHQgcGFyYW0gKG9yIHRoZSBuZXh0IHR3bywgaW4gY2FzZSBvZiBcInJvdXRlXCIpIHNob3VsZCBiZSBhbiBhZGRyZXNzIHN0cmluZy5cbiAgICogVGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzIGFyZSBkZXRvdXIvc2VhcmNodHlwZS9mb3JjZVN0YXJ0LlxuICAgKi9cbiAgYXN5bmMgaGFuZGxlSW5pdGlhbFBhcmFtcygpIHtcbiAgICB0aGlzLnJhd0ZyYWdtZW50cyA9IHRoaXMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pbml0aWFsUGFyYW1zO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5yYXdGcmFnbWVudHMpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2hlY2tGb3JPbGRQYXJhbXMoKTtcbiAgICAgIGNvbnN0IGFyclBhcmFtcyA9IHRoaXMucmF3RnJhZ21lbnRzLnNwbGl0KFwiL1wiKS5tYXAocGFpciA9PiBwYWlyLnNwbGl0KFwiOlwiKSk7XG4gICAgICBjb25zdCBvYmpQYXJhbXMgPSB7fTtcbiAgICAgIGFyclBhcmFtcy5mb3JFYWNoKChba2V5LHZhbHVlXSkgPT4gb2JqUGFyYW1zW2tleV0gPSB2YWx1ZSk7XG4gICAgICBsZXQgcm91dGVyTGF5ZXJzID0gdGhpcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICAgIGxldCBkZXNpcmVkQnV0dG9uID0gXCJcIjtcbiAgICAgIGl0ZXJhdGlvbkxhYmVsOlxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcm91dGVyTGF5ZXJzKSB7XG4gICAgICAgICAgaWYgKHJvdXRlckxheWVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gcm91dGVyTGF5ZXJzW2tleV07XG4gICAgICAgICAgICBmb3IgKGxldCBpbm5lcktleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpbm5lcktleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xlRW50cnkgPSBvYmpbaW5uZXJLZXldO1xuICAgICAgICAgICAgICAgIGxldCBjbXBWYWx1ZSA9IG9ialBhcmFtcy5zO1xuICAgICAgICAgICAgICAgIGlmIChzaW5nbGVFbnRyeS5tYXBMYWJlbCA9PT0gY21wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGRlc2lyZWRCdXR0b24gPSBpbm5lcktleTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrIGl0ZXJhdGlvbkxhYmVsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgLy8gaXRlcmF0ZSBidXR0b25zIGxhdGVyIG9uIHdoZW4gdGhlIFVJIGlzIGJ1aWx0XG4gICAgICB0aGlzLmRlc2lyZWRCdXR0b25Sb3V0aW5nID0gZGVzaXJlZEJ1dHRvbjtcbiAgICAgIGlmIChvYmpQYXJhbXMubSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVJbml0aWFsQXJlYVNlYXJjaChvYmpQYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChvYmpQYXJhbXMubSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5pdGlhbFJvdXRlU2VhcmNoKG9ialBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgVVJMIGZvciB0aGUgZGVwcmVjYXRlZCBVUkwgc3RydWN0dXJlIGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgY3VycmVudCBzdHJ1Y3R1cmUuXG4gICAqL1xuICBhc3luYyBjaGVja0Zvck9sZFBhcmFtcygpIHtcbiAgICBsZXQgc3RyUGFyYW1zID0gXCJcIjtcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmluaXRpYWxQYXJhbXM7XG4gICAgaWYgKHBhcmFtcy5pbmRleE9mKFwibTpcIikgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhcnJGcmFnbWVudHMgPSBwYXJhbXMuc3BsaXQoXCIvXCIpO1xuICAgIHN0clBhcmFtcyArPSBcIm06XCIgKyBhcnJGcmFnbWVudHNbMF0gKyBcIi9cIjtcbiAgICBpZiAoYXJyRnJhZ21lbnRzWzBdID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGxldCBmcm9tQ29vcmRzID0gYXdhaXQgdGhpcy5yb3V0ZXIucGVyZm9ybUdlb1NlYXJjaChhcnJGcmFnbWVudHNbMV0pO1xuICAgICAgbGV0IHRvQ29vcmRzID0gYXdhaXQgdGhpcy5yb3V0ZXIucGVyZm9ybUdlb1NlYXJjaChhcnJGcmFnbWVudHNbMl0pO1xuICAgICAgc3RyUGFyYW1zICs9IFwiYWY6XCIgKyBmcm9tQ29vcmRzLmpvaW4oKSArIFwiL1wiO1xuICAgICAgc3RyUGFyYW1zICs9IFwiYXQ6XCIgKyB0b0Nvb3Jkcy5qb2luKCkgKyBcIi9cIjtcbiAgICAgIHN0clBhcmFtcyArPSBcImQ6XCIgKyBhcnJGcmFnbWVudHNbM10gKyBcIi9cIjtcbiAgICAgIHN0clBhcmFtcyArPSBcInM6XCIgKyBhcnJGcmFnbWVudHNbNF0gKyBcIi9cIjtcbiAgICAgIHN0clBhcmFtcyArPSBcImY6XCIgKyBhcnJGcmFnbWVudHNbNV0gKyBcIi9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvb3JkcyA9IGF3YWl0IHRoaXMucm91dGVyLnBlcmZvcm1HZW9TZWFyY2goYXJyRnJhZ21lbnRzWzFdKTtcbiAgICAgIHN0clBhcmFtcyArPSBcImE6XCIgKyBjb29yZHMuam9pbigpICsgXCIvXCI7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJkOlwiICsgYXJyRnJhZ21lbnRzWzJdICsgXCIvXCI7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJzOlwiICsgYXJyRnJhZ21lbnRzWzNdICsgXCIvXCI7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJmOlwiICsgYXJyRnJhZ21lbnRzWzRdICsgXCIvXCI7XG4gICAgfVxuICAgIHRoaXMucmF3RnJhZ21lbnRzID0gc3RyUGFyYW1zO1xuICB9XG5cbiAgaGFuZGxlSW5pdGlhbEFyZWFTZWFyY2gob2JqUGFyYW1zKSB7XG4gICAgdGhpcy5yb3V0ZXIuc2V0U3RhdGUoe21vZGU6IFwiYXJlYVwifSk7XG4gICAgbGV0IGNlbnRlciA9IG9ialBhcmFtcy5hO1xuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgIGNlbnRlciA9IGNlbnRlci5zcGxpdChcIixcIik7XG4gICAgfVxuICAgIGxldCBkZXRvdXIgPSBvYmpQYXJhbXMuZDtcbiAgICBsZXQgc2VhcmNodHlwZSA9IG9ialBhcmFtcy5zO1xuICAgIGxldCBmb3JjZVN0YXJ0ID0gb2JqUGFyYW1zLmY7XG4gICAgaWYgKGRldG91ciB8fCBkZXRvdXIgPiAxKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgZGV0b3VyKTtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnRvZ2dsZURldG91ckFyZWEpLnZhbChkZXRvdXIpO1xuICAgICAgLy8galF1ZXJ5KHRoaXMudG9nZ2xlRGV0b3VyQXJlYSkudHJpZ2dlcignaW5wdXQnKTtcbiAgICB9XG4gICAgaWYgKGNlbnRlciAmJiBjZW50ZXIubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJhZGRyZXNzQXJlYVwiLCBjZW50ZXIpO1xuICAgICAgdGhpcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNlbnRlcik7XG4gICAgfVxuICAgIGlmIChzZWFyY2h0eXBlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJzZWFyY2hUeXBlXCIsIHNlYXJjaHR5cGUpO1xuICAgIH1cbiAgICBpZiAoZm9yY2VTdGFydCkge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZm9yY2VTdGFydFwiLCBmb3JjZVN0YXJ0KTtcbiAgICB9XG4gICAgLy8gYWN0aXZhdGUgYXJlYSB2aWV3XG4gICAgalF1ZXJ5KFwiLmM0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhciAuYzRnLWFyZWEtc2VhcmNoXCIpLmNsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVJbml0aWFsUm91dGVTZWFyY2gob2JqUGFyYW1zKSB7XG4gICAgdGhpcy5yb3V0ZXIuc2V0U3RhdGUoe21vZGU6IFwicm91dGVcIn0pO1xuXG4gICAgbGV0IGZyb21BZGRyZXNzID0gb2JqUGFyYW1zLmFmID8gb2JqUGFyYW1zLmFmLnNwbGl0KFwiLFwiKS5tYXAoZWxlbSA9PiBwYXJzZUZsb2F0KGVsZW0pKSA6IG51bGw7XG4gICAgbGV0IHRvQWRkcmVzcyA9IG9ialBhcmFtcy5hdCA/IG9ialBhcmFtcy5hdC5zcGxpdChcIixcIikubWFwKGVsZW0gPT4gcGFyc2VGbG9hdChlbGVtKSkgOiBudWxsO1xuICAgIGxldCBkZXRvdXIgPSBvYmpQYXJhbXMuZDtcbiAgICBsZXQgc2VhcmNodHlwZSA9IG9ialBhcmFtcy5zO1xuICAgIGxldCBmb3JjZVN0YXJ0ID0gb2JqUGFyYW1zLmY7XG4gICAgaWYgKGRldG91cikge1xuICAgICAgalF1ZXJ5KHRoaXMucm91dGVyLnRvZ2dsZURldG91clJvdXRlKS52YWwoZGV0b3VyKTtcbiAgICAgIGpRdWVyeSh0aGlzLnJvdXRlci50b2dnbGVEZXRvdXJSb3V0ZSkudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgIHRoaXMudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBvYmpQYXJhbXMuZCk7XG4gICAgfVxuICAgIGlmIChmcm9tQWRkcmVzcykge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZnJvbUFkZHJlc3NcIiwgZnJvbUFkZHJlc3MpO1xuICAgIH1cbiAgICBpZiAodG9BZGRyZXNzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJ0b0FkZHJlc3NcIiwgdG9BZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaHR5cGUpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlua0ZyYWdtZW50cyhcInNlYXJjaFR5cGVcIiwgb2JqUGFyYW1zLnMpO1xuICAgIH1cbiAgICBpZiAoZm9yY2VTdGFydCkge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZm9yY2VTdGFydFwiLCBvYmpQYXJhbXMuZik7XG4gICAgfVxuICAgIGlmIChmcm9tQWRkcmVzcyAmJiB0b0FkZHJlc3MpIHtcbiAgICAgIHRoaXMucm91dGVyLnNldFJvdXRlRnJvbShmcm9tQWRkcmVzc1swXSwgZnJvbUFkZHJlc3NbMV0pO1xuICAgICAgdGhpcy5yb3V0ZXIuc2V0Um91dGVUbyh0b0FkZHJlc3NbMF0sIHRvQWRkcmVzc1sxXSk7XG4gICAgfVxuICAgIC8vIGFjdGl2YXRlIHJvdXRlciB2aWV3XG4gICAgalF1ZXJ5KFwiLmM0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhciAuYzRnLXJvdXRlLXNlYXJjaFwiKS5jbGljaygpO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFN1c3BlbnNlLCBsYXp5IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQge1JvdXRlckNvbnRyb2xzfSBmcm9tIFwiLi9jNGctcm91dGVyLWNvbnRyb2xzLmpzeFwiO1xuLy9pbXBvcnQge1JvdXRlclJlc3VsdENvbnRhaW5lcn0gZnJvbSBcIi4vYzRnLXJvdXRlci1yZXN1bHQtY29udGFpbmVyLmpzeFwiO1xuY29uc3QgUm91dGVyUmVzdWx0Q29udGFpbmVyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lci5qc3hcIikpO1xuXG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHN9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnRzXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7UG9seWxpbmV9IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7dHJhbnNmb3JtLCB0b0xvbkxhdCwgZnJvbUxvbkxhdCwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtTdHlsZSwgU3Ryb2tlfSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yLCBHcm91cH0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0xpbmVTdHJpbmd9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge01vZGlmeSwgU2VsZWN0fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtBbGVydEhhbmRsZXJ9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL0NvcmVCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9BbGVydEhhbmRsZXJcIjtcbmltcG9ydCB7Um91dGluZ1Blcm1hbGlua30gZnJvbSBcIi4vLi4vYzRnLXJvdXRpbmctcGVybWFsaW5rXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuLy9pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctdGl0bGViYXIuanN4XCJcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG4vLyBpbXBvcnQge1JvdXRlclByb2ZpbGVTZWxlY3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcbi8vaW1wb3J0IHtSb3V0ZXJQb3B1cEJ1dHRvbnN9IGZyb20gXCIuL2M0Zy1yb3V0ZXItcG9wdXAtYnV0dG9ucy5qc3hcIjtcbmNvbnN0IFJvdXRlclBvcHVwQnV0dG9ucyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctcm91dGVyLXBvcHVwLWJ1dHRvbnMuanN4XCIpKTtcblxuY29uc3QgUm91dGVyQ29udHJvbHMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLWNvbnRyb2xzLmpzeCcpKTtcbi8vIGNvbnN0IFJvdXRlclJlc3VsdENvbnRhaW5lciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2M0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lci5qc3gnKSk7XG5jb25zdCBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3gnKSk7XG4vLyBjb25zdCBSb3V0ZXJQb3B1cEJ1dHRvbnMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLXBvcHVwLWJ1dHRvbnMuanN4JykpXG5cbmNvbnN0IG9zbXRvZ2VvanNvbiA9IHJlcXVpcmUoJ29zbXRvZ2VvanNvbicpO1xuXG4vKipcbiAqIE1haW4gcm91dGVyIGNvbXBvbmVudC4gSXQgY29uc2lzdHMgb2YgdGhlIFJvdXRlckNvbnRyb2xzIGFuZCBSb3V0ZXJSZXN1bHRDb250YWluZXIgY29tcG9uZW50cywgYW5kIGhvbGRzIHRoZVxuICogY29ubmVjdGlvbiB0byB0aGUgcm91dGVyIG1vZGVsLCB3aGljaCBpcyBwcm9wYWdhdGVkIGRvd24gdG8gdGhlIGFjdHVhbGx5IG5lZWRpbmcgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJvdXRlclZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlSWQgPSB0aGlzLnNldEFjdGl2ZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRPcGVuID0gdGhpcy5zZXRPcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5Db250cm9scyA9IHRoaXMub3BlbkNvbnRyb2xzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEZyb21Qb2ludCA9IHRoaXMucmVzZXRGcm9tUG9pbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0VG9Qb2ludCA9IHRoaXMucmVzZXRUb1BvaW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEFyZWFQb2ludCA9IHRoaXMucmVzZXRBcmVhUG9pbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZVJlc3VsdERldGFpbHMgPSB0aGlzLnRvZ2dsZVJlc3VsdERldGFpbHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFJlc3VsdEluc3RyID0gdGhpcy5zZXRSZXN1bHRJbnN0ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UmVzdWx0RmVhdCA9IHRoaXMuc2V0UmVzdWx0RmVhdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSA9IHRoaXMucmVjYWxjdWxhdGVSb3V0ZS5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGFyclByb2ZpbGVzID0gW107XG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKG1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgZm9yIChsZXQga2V5IGluIG1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpIHtcbiAgICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgYXJyUHJvZmlsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB0ZXh0OiBtYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBsYXllclJvdXRlID0gbnVsbDtcbiAgICBsZXQgbGF5ZXJBcmVhID0gbnVsbDtcbiAgICBsZXQgbGF5ZXJWYWx1ZVJvdXRlID0gbnVsbDtcbiAgICBsZXQgbGF5ZXJWYWx1ZUFyZWEgPSBudWxsO1xuICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzKSB7XG4gICAgICBjb25zdCByb3V0ZXJMYXllcnMgPSBtYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgICAgZm9yIChsZXQga2V5IGluIHJvdXRlckxheWVycykge1xuICAgICAgICBpZiAocm91dGVyTGF5ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsYXllclJvdXRlID0gbGF5ZXJSb3V0ZSB8fCBrZXk7XG4gICAgICAgICAgbGF5ZXJWYWx1ZVJvdXRlID0gT2JqZWN0LmtleXMocm91dGVyTGF5ZXJzW2xheWVyUm91dGVdKVswXSB8fCBsYXllclZhbHVlUm91dGU7XG4gICAgICAgICAgbGF5ZXJBcmVhID0gbGF5ZXJBcmVhIHx8IGtleTtcbiAgICAgICAgICBsYXllclZhbHVlQXJlYSA9IE9iamVjdC5rZXlzKHJvdXRlckxheWVyc1tsYXllckFyZWFdKVswXSB8fCBsYXllclZhbHVlQXJlYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb3V0ZXI6IHByb3BzLnJvdXRlcixcbiAgICAgIG9ialNldHRpbmdzOiB7XG4gICAgICAgIFwicHJveHlVcmxcIjogbWFwQ29udHJvbGxlciAmJiBtYXBDb250cm9sbGVyLmRhdGEgPyBtYXBDb250cm9sbGVyLmRhdGEucHJveHlVcmwgOiAnJyxcbiAgICAgICAgXCJrZXlBdXRvY29tcGxldGVcIjogbWFwQ29udHJvbGxlciAmJiBtYXBDb250cm9sbGVyLmRhdGEgPyBtYXBDb250cm9sbGVyLmRhdGEuYXV0b2NvbXBsZXRlIDogJycsXG4gICAgICAgIFwiY2VudGVyXCIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IGNlbnRlciA9IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICBjZW50ZXIgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLFwiRVBTRzo0MzI2XCIpO1xuICAgICAgICAgIHJldHVybiBjZW50ZXI7XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2Vvc2VhcmNoUGFyYW1zXCI6IG1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gucGFyYW1zXG4gICAgICB9LFxuICAgICAgYWN0aXZlSWQ6IG51bGwsXG4gICAgICBvcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICBjb250YWluZXJBZGRyZXNzZXM6IHtcbiAgICAgICAgYXJyRnJvbVBvc2l0aW9uczogW10sXG4gICAgICAgIGFyckZyb21OYW1lczogW10sXG4gICAgICAgIGFyclRvUG9zaXRpb25zOiBbXSxcbiAgICAgICAgYXJyVG9OYW1lczogW10sXG4gICAgICAgIGFyckFyZWFQb3NpdGlvbnM6IFtdLFxuICAgICAgICBhcnJBcmVhTmFtZXM6IFtdLFxuICAgICAgICBhcnJPdmVyUG9zaXRpb25zOiB7fSxcbiAgICAgICAgYXJyT3Zlck5hbWVzOiB7fVxuICAgICAgfSxcbiAgICAgIGZyb21BZGRyZXNzOiBcIlwiLFxuICAgICAgdG9BZGRyZXNzOiBcIlwiLFxuICAgICAgYXJlYUFkZHJlc3M6IFwiXCIsXG4gICAgICBsYXllclJvdXRlOiBsYXllclJvdXRlLFxuICAgICAgbGF5ZXJBcmVhOiBsYXllckFyZWEsXG4gICAgICBsYXllclZhbHVlUm91dGU6IGxheWVyVmFsdWVSb3V0ZSxcbiAgICAgIGxheWVyVmFsdWVBcmVhOiBsYXllclZhbHVlQXJlYSxcbiAgICAgIGRldG91clJvdXRlOiBwcm9wcy5kZXRvdXJSb3V0ZS5pbml0aWFsLFxuICAgICAgZGV0b3VyQXJlYTogcHJvcHMuZGV0b3VyQXJlYS5pbml0aWFsLFxuICAgICAgZmVhdHVyZUxpc3Q6IHtcbiAgICAgICAgZmVhdHVyZXM6IFtdLFxuICAgICAgICB0eXBlOiBcIlwiXG4gICAgICB9LFxuICAgICAgbW9kZTogbWFwQ29udHJvbGxlci5kYXRhLmluaXRpYWxNb2RlLFxuICAgICAgb3ZlclB0Q3RyOiAwLFxuICAgICAgb3ZlckFkZHJlc3NlczogW10sXG4gICAgICBmZWF0dXJlU291cmNlOiB1bmRlZmluZWQsXG4gICAgICByb3V0ZXJXYXlTb3VyY2U6IHVuZGVmaW5lZCxcbiAgICAgIHJvdXRlckhpbnRTb3VyY2U6IHVuZGVmaW5lZCxcbiAgICAgIGFyZWFQb2ludDogbnVsbCxcbiAgICAgIGZyb21Qb2ludDogbnVsbCxcbiAgICAgIHRvUG9pbnQ6IG51bGwsXG4gICAgICBvdmVyUG9pbnRzOiBbXSxcbiAgICAgIHByb2ZpbGVzOiBhcnJQcm9maWxlcyA/IGFyclByb2ZpbGVzIDogW10sXG4gICAgICBjdXJyZW50UHJvZmlsZTogMCxcbiAgICAgIG9wZW46IChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuaW5pdGlhbF9vcGVuX2NvbXAgPT09IFwicm91dGluZ1wiKSB8fCBmYWxzZSwgLy9Ub0RPXG4gICAgICBvcGVuU2V0dGluZ3M6IChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuaW5pdGlhbF9vcGVuX2NvbXAgPT09IFwicm91dGluZ1wiKSB8fCBmYWxzZSwgLy9Ub0RPXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnM6IHt9LFxuICAgICAgcmVzdWx0TW9kZTogcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmluaXRpYWxSZXN1bHRNb2RlIHx8IFwiaW5zdHJcIlxuICAgIH07XG4gICAgdGhpcy5wb3B1cFJvdXRlQnV0dG9uV3JhcHBlciA9IFwiXCI7IC8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugb2YgdGhlIGRpZmZlcmVudCBwb3B1cCBoYW5kbGluZ3NcbiAgICB0aGlzLnN3YXBQb2ludHMgPSB0aGlzLnN3YXBQb2ludHMuYmluZCh0aGlzKTtcbiAgICBpZiAobWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgdGhpcy5wZXJtYWxpbmsgPSBuZXcgUm91dGluZ1Blcm1hbGluayh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5wcm9maWxlVHJhbnNsYXRpb24gPSB7XG4gICAgICAwOiBcImNhclwiLFxuICAgICAgMTogXCJoZ3ZcIixcbiAgICAgIDI6IFwiYmlrZVwiLFxuICAgICAgMzogXCJiaWtlXCIsXG4gICAgICA0OiBcImJpa2VcIixcbiAgICAgIDU6IFwiYmlrZVwiLFxuICAgICAgNjogXCJiaWtlXCIsXG4gICAgICA3OiBcImJpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJmb290XCIsXG4gICAgICAxMDogXCJ3aGVlbGNoYWlyXCIsXG4gICAgICAxMTogXCJoZ3ZcIixcbiAgICAgIDEyOiBcInNjb290ZXJcIixcbiAgICAgIDEzOiBcInNjb290ZXJcIlxuICAgIH07XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBzb3VyY2VzID0ge1xuICAgICAgd2F5U291cmNlOiB0aGlzLnN0YXRlLnJvdXRlcldheVNvdXJjZSxcbiAgICAgIGhpbnRTb3VyY2U6IHRoaXMuc3RhdGUucm91dGVySGludFNvdXJjZSxcbiAgICAgIGZlYXR1cmVTb3VyY2U6IHRoaXMuc3RhdGUuZmVhdHVyZVNvdXJjZVxuICAgIH07XG4gICAgbGV0IHNsaWRlck9wdGlvbnMgPSB7fTtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIHNsaWRlck9wdGlvbnMgPSB7XG4gICAgICAgIG1pbjogbWFwRGF0YS5kZXRvdXJSb3V0ZS5taW4sXG4gICAgICAgIG1heDogbWFwRGF0YS5kZXRvdXJSb3V0ZS5tYXgsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmRldG91clJvdXRlLFxuICAgICAgICByb3V0ZXI6IHRoaXNcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBzbGlkZXJPcHRpb25zID0ge1xuICAgICAgICBtaW46IG1hcERhdGEuZGV0b3VyQXJlYS5taW4sXG4gICAgICAgIG1heDogbWFwRGF0YS5kZXRvdXJBcmVhLm1heCxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuZGV0b3VyQXJlYSxcbiAgICAgICAgcm91dGVyOiB0aGlzXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXNldEZ1bmN0aW9ucyA9IHtcbiAgICAgIGZyb206IHRoaXMucmVzZXRGcm9tUG9pbnQsXG4gICAgICB0bzogdGhpcy5yZXNldFRvUG9pbnQsXG4gICAgICBhcmVhOiB0aGlzLnJlc2V0QXJlYVBvaW50XG4gICAgfTtcblxuICAgIGNvbnN0IG92ZXJTZXR0aW5ncyA9IHRoaXMuY3JlYXRlT3ZlclNldHRpbmdzKCk7XG5cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBoZWFkbGluZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckhlYWRsaW5lIHx8IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVSX0RFRkFVTFRfSEVBRExJTkVfUk9VVEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBoZWFkbGluZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyZWFIZWFkbGluZSB8fCB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFUl9ERUZBVUxUX0hFQURMSU5FX0FSRUE7XG4gICAgfVxuXG4gICAgbGV0IGluc3RydWN0aW9ucyA9IHRoaXMuc3RhdGUucm91dGVySW5zdHJ1Y3Rpb25zLmluc3RydWN0aW9ucztcblxuICAgIGxldCByZXN1bHRTd2l0Y2hlciA9IFwiXCI7XG4gICAgbGV0IHN3aXRjaGVyQnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMaXN0LmZlYXR1cmVzLmxlbmd0aCA+IDBcbiAgICAgICYmICgodGhpcy5zdGF0ZS5mcm9tQWRkcmVzcyAmJiB0aGlzLnN0YXRlLnRvQWRkcmVzcyAmJiB0aGlzLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIilcbiAgICAgICAgfHwgdGhpcy5zdGF0ZS5hcmVhQWRkcmVzcyAmJiB0aGlzLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSkge1xuICAgICAgc3dpdGNoZXJCdXR0b25zLnB1c2goPGJ1dHRvbiBpZD1cImM0Zy1yb3V0ZXItYnV0dG9uLWZlYXR1cmVcIiBjbGFzc05hbWU9eyh0aGlzLnN0YXRlLnJlc3VsdE1vZGUgPT09IFwiZmVhdFwiICYmIHRoaXMuc3RhdGUub3BlblJlc3VsdHMpID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuc2V0UmVzdWx0RmVhdH0ga2V5PXsxfSB0aXRsZT17XCJFcmdlYm5pc2xpc3RlIGFuemVpZ2VuXCJ9IC8+KTtcbiAgICB9XG4gICAgaWYgKGluc3RydWN0aW9ucyAmJiAoaW5zdHJ1Y3Rpb25zLmxlbmd0aCA+IDApICYmIHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBzd2l0Y2hlckJ1dHRvbnMucHVzaCg8YnV0dG9uIGlkPVwiYzRnLXJvdXRlci1idXR0b24taW5zdHJ1Y3Rpb25zXCIgY2xhc3NOYW1lPXsodGhpcy5zdGF0ZS5yZXN1bHRNb2RlID09PSBcImluc3RyXCIgJiYgdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cykgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5zZXRSZXN1bHRJbnN0cn0ga2V5PXsyfSB0aXRsZT17XCJSb3V0ZW5oaW53ZWlzZSBhbnplaWdlblwifSAvPik7XG4gICAgfVxuICAgIGlmIChzd2l0Y2hlckJ1dHRvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0U3dpdGNoZXIgPSAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWhpZGUtZm9ybS1idXR0b24gXCIgKyAodGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLnNldFN0YXRlKHtvcGVuU2V0dGluZ3M6ICF0aGlzLnN0YXRlLm9wZW5TZXR0aW5nc30pfX0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVSX1NFVFRJTkdTfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW1vZGUtc3dpdGNoXCI+XG4gICAgICAgICAgICB7c3dpdGNoZXJCdXR0b25zfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci13cmFwcGVyXCJ9PlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRlclwifSBoZWFkZXI9e2hlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItZXh0ZW5kZWQtb3B0aW9uc1wifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctcm91dGVyLWNvbnRhaW5lci1yaWdodFwifSBkZXRhaWxCdG5DYj17dGhpcy50b2dnbGVEZXRhaWxzfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItc3dpdGNoZXJcIn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7cmVzdWx0U3dpdGNoZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLi5cIjwvZGl2Pn0+XG4gICAgICAgICAgICAgIDxSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIHByb2ZpbGVzPXt0aGlzLnN0YXRlLnByb2ZpbGVzfSByb3V0ZXI9e3RoaXN9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnN0YXRlLmN1cnJlbnRQcm9maWxlfS8+XG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+XCJsb2FkaW5nXCI8L2Rpdj59PlxuICAgICAgICAgIDxSb3V0ZXJDb250cm9scyByb3V0ZXI9e3RoaXN9IG9wZW49e3RoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5TZXR0aW5nc30gc2V0T3Blbj17dGhpcy5vcGVuQ29udHJvbHN9IHByb2ZpbGVzPXt0aGlzLnN0YXRlLnByb2ZpbGVzfSBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wYW5lbFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpTZXR0aW5ncz17dGhpcy5zdGF0ZS5vYmpTZXR0aW5nc30gb2JqRnVuY3Rpb25zPXt0aGlzLm9iakZ1bmN0aW9uc30gb3ZlclNldHRpbmdzPXtvdmVyU2V0dGluZ3N9IGVuYWJsZU92ZXJQb2ludHM9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmVuYWJsZU92ZXJQb2ludHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM9e3NvdXJjZXN9IGxheWVycz17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzfSBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzfSByZXNldEZ1bmN0aW9ucz17cmVzZXRGdW5jdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gY3VycmVudFByb2ZpbGU9e3RoaXMuc3RhdGUuY3VycmVudFByb2ZpbGV9IGZyb21BZGRyZXNzPXt0aGlzLnN0YXRlLmZyb21BZGRyZXNzfSBzd2l0Y2hUYXJnZXRzPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5lbmFibGVUYXJnZXRTd2l0Y2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvQWRkcmVzcz17dGhpcy5zdGF0ZS50b0FkZHJlc3N9IGFyZWFBZGRyZXNzPXt0aGlzLnN0YXRlLmFyZWFBZGRyZXNzfSBtb2RlPXt0aGlzLnN0YXRlLm1vZGV9IHNsaWRlck9wdGlvbnM9e3NsaWRlck9wdGlvbnN9IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkNUUkxfUk9VVEVSfSB0YXJnZXQ9e3RoaXMucHJvcHMudGFyZ2V0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmdcIjwvZGl2Pn0+XG4gICAgICAgICAgPFJvdXRlclJlc3VsdENvbnRhaW5lciB2aXNpYmxlPXt0aGlzLnN0YXRlLm9wZW59IG9wZW49e3RoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzfSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGRpcmVjdGlvbj17XCJib3R0b21cIn0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lclwifSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXt0aGlzLnN0YXRlLm1vZGV9IHNldFJlc3VsdEZlYXQ9e3RoaXMuc2V0UmVzdWx0RmVhdH0gcm91dGVySW5zdHJ1Y3Rpb25zPXt0aGlzLnN0YXRlLnJvdXRlckluc3RydWN0aW9uc30gZmVhdHVyZUxpc3Q9e3RoaXMuc3RhdGUuZmVhdHVyZUxpc3R9IHJvdXRlcldheVNvdXJjZT17dGhpcy5zdGF0ZS5yb3V0ZXJXYXlTb3VyY2V9IGRldG91cj17dGhpcy5zdGF0ZS5kZXRvdXJBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJSb3V0ZT17dGhpcy5zdGF0ZS5sYXllclJvdXRlfSBsYXllclZhbHVlUm91dGU9e3RoaXMuc3RhdGUubGF5ZXJWYWx1ZVJvdXRlfSBsYXllckFyZWE9e3RoaXMuc3RhdGUubGF5ZXJBcmVhfSByZXN1bHRNb2RlPXt0aGlzLnN0YXRlLnJlc3VsdE1vZGV9IHJvdXRlcj17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmFsdWVBcmVhPXt0aGlzLnN0YXRlLmxheWVyVmFsdWVBcmVhfSByb3V0ZXJIaW50U291cmNlPXt0aGlzLnN0YXRlLnJvdXRlckhpbnRTb3VyY2V9IGZlYXR1cmVTb3VyY2U9e3RoaXMuc3RhdGUuZmVhdHVyZVNvdXJjZX0gcHJvZmlsZT17dGhpcy5zdGF0ZS5jdXJyZW50UHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUlkPXt0aGlzLnN0YXRlLmFjdGl2ZUlkfSBzZXRBY3RpdmVJZD17dGhpcy5zZXRBY3RpdmVJZH0gZGV0YWlsT3Blbj17dGhpcy5zdGF0ZS5yZXN1bHREZXRhaWxPcGVufSB0b2dnbGVEZXRhaWxPcGVuPXt0aGlzLnRvZ2dsZVJlc3VsdERldGFpbHN9IGhlYWRsaW5lPXtcIlJvdXRlciBFcmdlYm5pc3NlXCJ9IGxhbmc9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzZXRSZXN1bHRJbnN0cihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdE1vZGU6IFwiaW5zdHJcIiwgb3BlblJlc3VsdHM6IHRydWV9KTtcbiAgfVxuXG4gIHNldFJlc3VsdEZlYXQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHRNb2RlOiBcImZlYXRcIiwgb3BlblJlc3VsdHM6IHRydWV9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbkNvbnRyb2xzKGZhbHNlKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIGdldFByb2ZpbGVCeUlkKGlkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnByb2ZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGFyc2VJbnQodGhpcy5zdGF0ZS5wcm9maWxlc1tpXS5pZCwgMTApID09PSBwYXJzZUludChpZCwgMTApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnByb2ZpbGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvZ2dsZVJlc3VsdERldGFpbHMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVzdWx0RGV0YWlsT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0RGV0YWlsT3BlbjogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0RGV0YWlsT3BlbjogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Db250cm9scyhvcGVuKSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZSwgb3BlblNldHRpbmdzOiB0cnVlfSk7XG4gICAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICB0aGlzLnBlcm1hbGluay5oYW5kbGVJbml0aWFsUGFyYW1zKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZGl2KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgIGxldCBmcmFnbWVudHMgPSB0aGlzLnBlcm1hbGluay5saW5rRnJhZ21lbnRzO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZnJvbVBvaW50ICYmIGZyYWdtZW50cy5mcm9tQWRkcmVzcyAhPT0gdGhpcy5zdGF0ZS5mcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSkge1xuICAgICAgICB0aGlzLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZnJvbUFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5mcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS50b1BvaW50ICYmIGZyYWdtZW50cy50b0FkZHJlc3MgIT09IHRoaXMuc3RhdGUudG9Qb2ludC5nZXRDb29yZGluYXRlcygpKSB7XG4gICAgICAgIHRoaXMucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJ0b0FkZHJlc3NcIiwgdGhpcy5zdGF0ZS50b1BvaW50LmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGZyYWdtZW50cy5tb2RlICE9PSB0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgICAgdGhpcy5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcIm1vZGVcIiwgdGhpcy5zdGF0ZS5tb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChmcmFnbWVudHMuZGV0b3VyQXJlYSAhPT0gdGhpcy5zdGF0ZS5kZXRvdXJBcmVhKSB7XG4gICAgICAgIHRoaXMucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJBcmVhXCIsIHRoaXMuc3RhdGUuZGV0b3VyQXJlYSk7XG4gICAgICB9XG4gICAgICBpZiAoZnJhZ21lbnRzLmRldG91clJvdXRlICE9PSB0aGlzLnN0YXRlLmRldG91clJvdXRlKSB7XG4gICAgICAgIHRoaXMucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJSb3V0ZVwiLCB0aGlzLnN0YXRlLmRldG91clJvdXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuID09PSB0cnVlICYmIHRoaXMuc3RhdGUub3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucm91dGVyTGF5ZXJHcm91cC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHRoaXMubW9kV2F5SW50ZXJhY3Rpb24uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuICYmICFwcmV2U3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcyk7XG4gICAgICB0aGlzLnJvdXRlckxheWVyR3JvdXAuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIHRoaXMubW9kV2F5SW50ZXJhY3Rpb24uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlblNldHRpbmdzICYmICF0aGlzLnN0YXRlLm9wZW5SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5TZXR0aW5nczogdHJ1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgJiYgIXByZXZTdGF0ZS5vcGVuU2V0dGluZ3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhcHJldlN0YXRlLm9wZW5SZXN1bHRzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuU2V0dGluZ3M6IGZhbHNlfSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhdGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgJiYgcHJldlN0YXRlLm9wZW5TZXR0aW5ncykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlblNldHRpbmdzOiB0cnVlfSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgJiYgIXRoaXMuc3RhdGUub3BlblJlc3VsdHMgJiYgcHJldlN0YXRlLm9wZW5SZXN1bHRzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuUmVzdWx0czogdHJ1ZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgJiYgKCF0aGlzLnN0YXRlLmZyb21BZGRyZXNzIHx8ICF0aGlzLnN0YXRlLnRvQWRkcmVzcykgJiYgdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiBwcmV2U3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UHJvZmlsZTogcHJvZmlsZX0sIHRoaXMudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMpO1xuICB9XG5cbiAgc2V0TGF5ZXIobGF5ZXIpIHtcbiAgICBsZXQgcm91dGVyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgIGxldCBsYXllclZhbHVlcyA9IHJvdXRlckxheWVyc1tsYXllcl07XG4gICAgbGV0IG5ld0RlZmF1bHRMYXllclZhbHVlID0gT2JqZWN0LmtleXMobGF5ZXJWYWx1ZXMpWzBdO1xuICAgIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxheWVyUm91dGU6IGxheWVyLFxuICAgICAgICBsYXllclZhbHVlUm91dGU6IG5ld0RlZmF1bHRMYXllclZhbHVlXG4gICAgICB9LCB0aGlzLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF5ZXJBcmVhOiBsYXllcixcbiAgICAgICAgbGF5ZXJWYWx1ZUFyZWE6IG5ld0RlZmF1bHRMYXllclZhbHVlXG4gICAgICB9LCB0aGlzLnBlcmZvcm1BcmVhKTtcbiAgICB9XG4gIH1cblxuICBzZXRMYXllclZhbHVlKGxheWVyVmFsdWUpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF5ZXJWYWx1ZVJvdXRlOiBsYXllclZhbHVlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNjb3BlLnNob3dGZWF0dXJlcyhzY29wZS5zdGF0ZS5mZWF0dXJlTGlzdC5mZWF0dXJlcywgc2NvcGUuc3RhdGUuZmVhdHVyZUxpc3QudHlwZSwgXCJyb3V0ZXJcIiwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF5ZXJWYWx1ZUFyZWE6IGxheWVyVmFsdWVcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2NvcGUuc2hvd0ZlYXR1cmVzKHNjb3BlLnN0YXRlLmZlYXR1cmVMaXN0LmZlYXR1cmVzLCBzY29wZS5zdGF0ZS5mZWF0dXJlTGlzdC50eXBlLCBcImFyZWFcIiwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlSWQoYWN0aXZlSWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcImFjdGl2ZUlkXCI6IGFjdGl2ZUlkfSk7XG4gIH07XG5cbiAgc2V0T3Blbihib29sKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XCJvcGVuUmVzdWx0c1wiOiBib29sfSk7XG4gIH07XG5cbiAgc2V0QXJlYVBvaW50KGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5wZXJmb3JtUmV2ZXJzZVNlYXJjaChcImFyZWFBZGRyZXNzXCIsIFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJlYVBvaW50OiBwb2ludH0sICgpID0+IHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCkpO1xuICB9XG5cbiAgc2V0Um91dGVGcm9tKGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5wZXJmb3JtUmV2ZXJzZVNlYXJjaChcImZyb21BZGRyZXNzXCIsIFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbVBvaW50OiBwb2ludH0sICgpID0+IHtzY29wZS51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpO30pO1xuICB9XG5cbiAgc2V0Um91dGVUbyhsb25naXR1ZGUsIGxhdGl0dWRlKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2goXCJ0b0FkZHJlc3NcIiwgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKTtcbiAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKTtcbiAgICB0aGlzLnNldFN0YXRlKHt0b1BvaW50OiBwb2ludH0sICgpID0+IHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCkpO1xuICB9XG5cbiAgYWRkT3ZlclBvaW50KGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2goXCJvdmVyQWRkcmVzc1wiLCBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0sIGluZGV4KTtcbiAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKTtcbiAgICBjb25zdCBvdmVyUG9pbnRzID0gdGhpcy5zdGF0ZS5vdmVyUG9pbnRzO1xuICAgIG92ZXJQb2ludHMuc3BsaWNlKGluZGV4LDEscG9pbnQpO1xuXG4gICAgLy8gb3ZlclBvaW50c1tpbmRleF0gPSBwb2ludDtcbiAgICB0aGlzLnNldFN0YXRlKHtvdmVyUG9pbnRzOiBvdmVyUG9pbnRzfSwgKCkgPT4gc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlICE9PSBtb2RlKSB7XG4gICAgICBsZXQgc291cmNlcyA9IHtcbiAgICAgICAgd2F5U291cmNlOiB0aGlzLnN0YXRlLnJvdXRlcldheVNvdXJjZSxcbiAgICAgICAgaGludFNvdXJjZTogdGhpcy5zdGF0ZS5yb3V0ZXJIaW50U291cmNlLFxuICAgICAgICBmZWF0dXJlU291cmNlOiB0aGlzLnN0YXRlLmZlYXR1cmVTb3VyY2UsXG4gICAgICAgIGxvY2F0aW9uU291cmNlOiB0aGlzLmxvY2F0aW9uc1NvdXJjZVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGU6IG1vZGV9LCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2VzKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzb3VyY2VzW2tleV0pIHtcbiAgICAgICAgICAgIHNvdXJjZXNba2V5XS5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzd2FwUG9pbnRzKCkge1xuICAgIGNvbnN0IG5ld0Zyb21Qb2ludCA9IHRoaXMuc3RhdGUudG9Qb2ludDtcbiAgICBjb25zdCBuZXdGcm9tQWRkcmVzcyA9IHRoaXMuc3RhdGUudG9BZGRyZXNzO1xuICAgIGNvbnN0IG5ld1RvUG9pbnQgPSB0aGlzLnN0YXRlLmZyb21Qb2ludDtcbiAgICBjb25zdCBuZXdUb0FkZHJlc3MgPSB0aGlzLnN0YXRlLmZyb21BZGRyZXNzO1xuICAgIGNvbnN0IGNvbnRhaW5lckFkZHJlc3NlcyA9IHRoaXMuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgIGNvbnN0IHRtcE5hbWVzID0gY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21OYW1lcztcbiAgICBjb25zdCB0bXBQb3MgPSBjb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbVBvc2l0aW9ucztcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzID0gY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXM7XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21Qb3NpdGlvbnMgPSBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnM7XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMgPSB0bXBOYW1lcztcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnMgPSB0bXBQb3M7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmcm9tUG9pbnQ6IG5ld0Zyb21Qb2ludCxcbiAgICAgIGZyb21BZGRyZXNzOiBuZXdGcm9tQWRkcmVzcyxcbiAgICAgIHRvUG9pbnQ6IG5ld1RvUG9pbnQsXG4gICAgICB0b0FkZHJlc3M6IG5ld1RvQWRkcmVzcyxcbiAgICAgIGNvbnRhaW5lckFkZHJlc3NlczogY29udGFpbmVyQWRkcmVzc2VzXG4gICAgfSwgdGhpcy51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cyk7XG4gIH1cblxuICBjcmVhdGVPdmVyU2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBvYmpTZXR0aW5ncyA9IHt9O1xuICAgIG9ialNldHRpbmdzLm92ZXJBZGRyZXNzZXMgPSB0aGlzLnN0YXRlLm92ZXJBZGRyZXNzZXM7XG4gICAgb2JqU2V0dGluZ3Mub3ZlclBvaW50cyA9IHRoaXMuc3RhdGUub3ZlclBvaW50cztcbiAgICBvYmpTZXR0aW5ncy5vdmVyUHRDdHIgPSB0aGlzLnN0YXRlLm92ZXJQdEN0cjtcbiAgICAvLyBpbmNyZW1lbnRzIHRoZSBvdmVyUHRDdHIgc28gdGhlIHBvcHVwIGNhbiByZW5kZXIgYWRkaXRpb25hbCBvdmVyRmllbGRzXG4gICAgb2JqU2V0dGluZ3Mub3ZlckZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY29udGFpbmVyQWRkcmVzc2VzID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgICAgY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJOYW1lc1tzY29wZS5zdGF0ZS5vdmVyUHRDdHJdID0gW107XG4gICAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyT3ZlclBvc2l0aW9uc1tzY29wZS5zdGF0ZS5vdmVyUHRDdHJdID0gW107XG4gICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgIG92ZXJQdEN0cjogc2NvcGUuc3RhdGUub3ZlclB0Q3RyICsgMSxcbiAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBjb250YWluZXJBZGRyZXNzZXNcbiAgICAgIH0pO1xuICAgIH07XG4gICAgb2JqU2V0dGluZ3Muc3dhcFBvaW50cyA9IHRoaXMuc3dhcFBvaW50cztcbiAgICBvYmpTZXR0aW5ncy5vYmpGdW5jdGlvbnMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUub3ZlclB0Q3RyOyBpKyspIHtcbiAgICAgIG9ialNldHRpbmdzLm9iakZ1bmN0aW9uc1tpXSA9IHRoaXMuY3JlYXRlQXV0b2NvbXBsZXRlRnVuY3Rpb25zRm9yT3ZlckZpZWxkKGkpO1xuICAgICAgaWYgKCFvYmpTZXR0aW5ncy5vdmVyQWRkcmVzc2VzW2ldKSB7XG4gICAgICAgIG9ialNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaV0gPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKCFvYmpTZXR0aW5ncy5vdmVyUG9pbnRzW2ldKSB7XG4gICAgICAgIG9ialNldHRpbmdzLm92ZXJQb2ludHNbaV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqU2V0dGluZ3M7XG4gIH1cblxuICBjcmVhdGVBdXRvY29tcGxldGVGdW5jdGlvbnNGb3JPdmVyRmllbGQoZmllbGRJZCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBzZXQgbGlzdGVuZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgZnJvbSBmaWVsZFxuICAgIGNvbnN0IGRlbGV0ZU92ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgY29udGFpbmVyQWRkcmVzc2VzID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgICAgY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJQb3NpdGlvbnNbZmllbGRJZF0gPSBbXTtcbiAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbZmllbGRJZF0gPSBbXTtcbiAgICAgIGxldCBvdmVyUG9pbnRzID0gc2NvcGUuc3RhdGUub3ZlclBvaW50cztcbiAgICAgIG92ZXJQb2ludHMuc3BsaWNlKGZpZWxkSWQsIDEpO1xuICAgICAgLy8gZGVsZXRlIG92ZXJQb2ludHNbZmllbGRJZF07XG4gICAgICBsZXQgb3ZlckFkZHJlc3NlcyA9IHNjb3BlLnN0YXRlLm92ZXJBZGRyZXNzZXM7XG4gICAgICBvdmVyQWRkcmVzc2VzLnNwbGljZShmaWVsZElkLCAxKTtcbiAgICAgIC8vIGRlbGV0ZSBvdmVyQWRkcmVzc2VzW2ZpZWxkSWRdO1xuICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICBvdmVyUG9pbnRzOiBvdmVyUG9pbnRzLFxuICAgICAgICBjb250YWluZXJBZGRyZXNzZXM6IGNvbnRhaW5lckFkZHJlc3NlcyxcbiAgICAgICAgb3ZlckFkZHJlc3Nlczogb3ZlckFkZHJlc3NlcyxcbiAgICAgICAgb3ZlclB0Q3RyOiBzY29wZS5zdGF0ZS5vdmVyUHRDdHIgLSAxXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0T3Zlckxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICBsZXQgb3ZlckFkZHJlc3Nlcywgb3ZlclBvaW50cywgb3ZlclZhbHVlO1xuICAgICAgbGV0IHZhbHVlID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgIGxldCBpbmRleCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbZmllbGRJZF0uZmluZEluZGV4KFxuICAgICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGxldCBjb29yZCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyUG9zaXRpb25zW2ZpZWxkSWRdW2luZGV4XTtcbiAgICAgIG92ZXJBZGRyZXNzZXMgPSBzY29wZS5zdGF0ZS5vdmVyQWRkcmVzc2VzO1xuICAgICAgb3ZlckFkZHJlc3Nlc1tmaWVsZElkXSA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbZmllbGRJZF1baW5kZXhdO1xuICAgICAgb3ZlclZhbHVlID0gbmV3IFBvaW50KFtjb29yZFsxXSwgY29vcmRbMF1dKTtcbiAgICAgIG92ZXJQb2ludHMgPSBzY29wZS5zdGF0ZS5vdmVyUG9pbnRzO1xuICAgICAgb3ZlclBvaW50c1tmaWVsZElkXSA9IG92ZXJWYWx1ZTtcbiAgICAgIHNjb3BlLnNldFN0YXRlKHtcbiAgICAgICAgb3ZlclBvaW50czogb3ZlclBvaW50cyxcbiAgICAgICAgb3ZlckFkZHJlc3Nlczogb3ZlckFkZHJlc3Nlc1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzY29wZS51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZU92ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNlbGYuZnJvbVZhbHVlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFwic2VsZWN0TGlzdGVuZXJcIjogc2VsZWN0T3Zlckxpc3RlbmVyLFxuICAgICAgXCJkZWxldGVGdW5jdGlvblwiOiBkZWxldGVPdmVyTGlzdGVuZXIsXG4gICAgICBcImNoYW5nZUxpc3RlbmVyXCI6IGNoYW5nZU92ZXJMaXN0ZW5lclxuICAgIH07XG4gIH1cblxuICB1cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuY2xlYXIoKTtcbiAgICB0aGlzLmFyZWFTb3VyY2UuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmZyb21Qb2ludCkge1xuICAgICAgICBsZXQgdG1wRmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5zdGF0ZS5mcm9tUG9pbnQuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Zyb21fbG9jc3R5bGVdKSB7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IGRvbmVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0sIHtcbiAgICAgICAgICAgIFwiZG9uZVwiOiBkb25lRnVuY3Rpb25cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS50b1BvaW50KSB7XG4gICAgICAgIGxldCB0bXBGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLnN0YXRlLnRvUG9pbnQuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZV0pIHtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IGRvbmVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlXSwge1xuICAgICAgICAgICAgXCJkb25lXCI6IGRvbmVGdW5jdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuYWRkRmVhdHVyZSh0bXBGZWF0dXJlKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUuZnJvbVBvaW50ICYmIHRoaXMuc3RhdGUudG9Qb2ludCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLm92ZXJQb2ludHMgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vdmVyUG9pbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLm92ZXJQb2ludHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vdmVyUG9pbnRzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5zdGF0ZS5vdmVyUG9pbnRzW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0bXBGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5zdGF0ZS5vdmVyUG9pbnRzW2tleV0uY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2ludGVyaW1fbG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfaW50ZXJpbV9sb2NzdHlsZV0pIHtcbiAgICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9pbnRlcmltX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZS5hZGRGZWF0dXJlKHRtcEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZVN0YXJ0QnV0dG9uKSB7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJlYVBvaW50KSB7XG4gICAgICAgIGxldCB0bXBGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLnN0YXRlLmFyZWFQb2ludC5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXSkge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmZvcm1BcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGcm9tUG9pbnQoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjb250YWluZXJBZGRyZXNzZXMgPSBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXM7XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21Qb3NpdGlvbnMgPSBbXTtcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzID0gW107XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmcm9tUG9pbnQ6IG51bGwsXG4gICAgICBjb250YWluZXJBZGRyZXNzZXM6IGNvbnRhaW5lckFkZHJlc3NlcyxcbiAgICAgIGZyb21BZGRyZXNzOiBcIlwiXG4gICAgfSwgKCkgPT4ge1xuICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VG9Qb2ludCgpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGNvbnRhaW5lckFkZHJlc3NlcyA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3NlcztcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnMgPSBbXTtcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9OYW1lcyA9IFtdO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9Qb2ludDogbnVsbCxcbiAgICAgIGNvbnRhaW5lckFkZHJlc3NlczogY29udGFpbmVyQWRkcmVzc2VzLFxuICAgICAgdG9BZGRyZXNzOiBcIlwiXG4gICAgfSwgKCkgPT4ge1xuICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0QXJlYVBvaW50KCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY29udGFpbmVyQWRkcmVzc2VzID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgIGNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zID0gW107XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lcyA9IFtdO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXJlYVBvaW50OiBudWxsLFxuICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBjb250YWluZXJBZGRyZXNzZXMsXG4gICAgICBhcmVhQWRkcmVzczogXCJcIlxuICAgIH0sICgpID0+IHtcbiAgICAgIHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVBdXRvY29tcGxldGVGdW5jdGlvbnMoKSB7XG4gICAgbGV0IG9iakZ1bmN0aW9ucyA9IHt9O1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBzZXQgbGlzdGVuZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgZnJvbSBmaWVsZFxuICAgIGNvbnN0IGRlbGV0ZUZyb21MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzY29wZS5yZXNldEZyb21Qb2ludCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RGcm9tTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICBsZXQgaW5kZXggPSBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzLmZpbmRJbmRleChcbiAgICAgICAgZGFuZ2VyID0+IGRhbmdlciA9PT0gdmFsdWVcbiAgICAgICk7XG4gICAgICBsZXQgY29vcmQgPSBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbVBvc2l0aW9uc1tpbmRleF07XG4gICAgICBsZXQgZnJvbVZhbHVlID0gbmV3IFBvaW50KFtjb29yZFsxXSwgY29vcmRbMF1dKTtcblxuICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICBmcm9tUG9pbnQ6IGZyb21WYWx1ZSxcbiAgICAgICAgZnJvbUFkZHJlc3M6IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJGcm9tTmFtZXNbaW5kZXhdXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgICAgIHNjb3BlLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZUZyb21MaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNlbGYuZnJvbVZhbHVlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgb2JqRnVuY3Rpb25zLmZyb21GdW5jdGlvbnMgPSB7XG4gICAgICBcInNlbGVjdExpc3RlbmVyXCI6IHNlbGVjdEZyb21MaXN0ZW5lcixcbiAgICAgIFwiZGVsZXRlRnVuY3Rpb25cIjogZGVsZXRlRnJvbUxpc3RlbmVyLFxuICAgICAgXCJjaGFuZ2VMaXN0ZW5lclwiOiBjaGFuZ2VGcm9tTGlzdGVuZXJcbiAgICB9O1xuXG4gICAgLy8gc2V0IGxpc3RlbmVyIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRvIGZpZWxkXG4gICAgY29uc3QgZGVsZXRlVG9MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzY29wZS5yZXNldFRvUG9pbnQoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0VG9MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgICBsZXQgdmFsdWUgPSB1aS5pdGVtLnZhbHVlO1xuICAgICAgbGV0IGluZGV4ID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMuZmluZEluZGV4KFxuICAgICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGxldCBjb29yZCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb1Bvc2l0aW9uc1tpbmRleF07XG4gICAgICBsZXQgdG9WYWx1ZSA9IG5ldyBQb2ludChbY29vcmRbMV0sIGNvb3JkWzBdXSk7XG5cbiAgICAgIHNjb3BlLnNldFN0YXRlKHtcbiAgICAgICAgdG9Qb2ludDogdG9WYWx1ZSxcbiAgICAgICAgdG9BZGRyZXNzOiBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXMuYXJyVG9OYW1lc1tpbmRleF1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICAgICAgc2NvcGUucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZVRvTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzZWxmLmZyb21WYWx1ZSA9IG51bGw7XG4gICAgfTtcblxuICAgIG9iakZ1bmN0aW9ucy50b0Z1bmN0aW9ucyA9IHtcbiAgICAgIFwic2VsZWN0TGlzdGVuZXJcIjogc2VsZWN0VG9MaXN0ZW5lcixcbiAgICAgIFwiZGVsZXRlRnVuY3Rpb25cIjogZGVsZXRlVG9MaXN0ZW5lcixcbiAgICAgIFwiY2hhbmdlTGlzdGVuZXJcIjogY2hhbmdlVG9MaXN0ZW5lclxuICAgIH07XG5cbiAgICAvLyBzZXQgbGlzdGVuZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgdG8gZmllbGRcbiAgICBjb25zdCBkZWxldGVBcmVhTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgbGV0IGNvbnRhaW5lckFkZHJlc3NlcyA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3NlcztcbiAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zID0gW107XG4gICAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyQXJlYU5hbWVzID0gW107XG4gICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgIGFyZWFQb2ludDogbnVsbCxcbiAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBjb250YWluZXJBZGRyZXNzZXMsXG4gICAgICAgIGFyZWFBZGRyZXNzOiBcIlwiXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RBcmVhTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgdWkpe1xuICAgICAgbGV0IHZhbHVlID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgIGxldCBpbmRleCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhTmFtZXMuZmluZEluZGV4KFxuICAgICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGxldCBjb29yZCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zW2luZGV4XTtcbiAgICAgIGxldCBhcmVhVmFsdWUgPSBuZXcgUG9pbnQoW2Nvb3JkWzFdLCBjb29yZFswXV0pO1xuXG4gICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgIGFyZWFQb2ludDogYXJlYVZhbHVlLFxuICAgICAgICBhcmVhQWRkcmVzczogc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lc1tpbmRleF1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICAgICAgc2NvcGUucGVyZm9ybUFyZWEoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VBcmVhTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzZWxmLmZyb21WYWx1ZSA9IG51bGw7XG4gICAgfTtcblxuICAgIG9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zID0ge1xuICAgICAgXCJzZWxlY3RMaXN0ZW5lclwiOiBzZWxlY3RBcmVhTGlzdGVuZXIsXG4gICAgICBcImRlbGV0ZUZ1bmN0aW9uXCI6IGRlbGV0ZUFyZWFMaXN0ZW5lcixcbiAgICAgIFwiY2hhbmdlTGlzdGVuZXJcIjogY2hhbmdlQXJlYUxpc3RlbmVyXG4gICAgfTtcblxuICAgIHJldHVybiBvYmpGdW5jdGlvbnM7XG4gIH1cblxuICBhZGRQb3B1cEhvb2soKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IGNyZWF0ZVBvcHVwV3JhcHBlciA9IGZ1bmN0aW9uIChvYmpQb3B1cCkge1xuICAgICAgbGV0IGZlYXR1cmUgPSBvYmpQb3B1cC5mZWF0dXJlO1xuICAgICAgbGV0IHJvdXRlciA9IHNjb3BlO1xuXG4gICAgICBsZXQgcm91dGluZ0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcm91dGVyLm9wZW5Db250cm9scyh0cnVlKTtcbiAgICAgICAgcm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgICAgICAgaWYgKGpRdWVyeShldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuUE9QVVBfUk9VVEVfRlJPTSkpIHtcbiAgICAgICAgICAvLyBmcm9tIGFkZHJlc3NcbiAgICAgICAgICBsZXQgZnJvbUNvb3JkcyA9IHRvTG9uTGF0KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpLCBcIkVQU0c6Mzg1N1wiKTtcbiAgICAgICAgICByb3V0ZXIuc2V0Um91dGVGcm9tKGZyb21Db29yZHNbMF0sIGZyb21Db29yZHNbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRvIGFkZHJlc3NcbiAgICAgICAgICBsZXQgdG9Db29yZHMgPSB0b0xvbkxhdChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwgXCJFUFNHOjM4NTdcIik7XG4gICAgICAgICAgcm91dGVyLnNldFJvdXRlVG8odG9Db29yZHNbMF0sIHRvQ29vcmRzWzFdKTtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gZW5kIG9mIFwicm91dGluZ0hhbmRsZXIoKVwiXG5cbiAgICAgIGxldCByb3V0ZUJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdXRlQnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUE9QVVBfUk9VVEVfV1JBUFBFUjtcblxuICAgICAgbGV0IHJvdXRlRnJvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcm91dGVGcm9tQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST007XG4gICAgICBqUXVlcnkocm91dGVGcm9tQnV0dG9uKS5jbGljayhyb3V0aW5nSGFuZGxlcik7XG4gICAgICByb3V0ZUJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVGcm9tQnV0dG9uKTtcblxuICAgICAgbGV0IHJvdXRlRnJvbUJ1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAvLyByb3V0ZUZyb21CdXR0b25TcGFuLmlubmVySFRNTCA9IHNjb3BlLmxhbmd1YWdlQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST007XG4gICAgICByb3V0ZUZyb21CdXR0b24uYXBwZW5kQ2hpbGQocm91dGVGcm9tQnV0dG9uU3Bhbik7XG5cbiAgICAgIGxldCByb3V0ZVRvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByb3V0ZVRvQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX1RPO1xuICAgICAgalF1ZXJ5KHJvdXRlVG9CdXR0b24pLmNsaWNrKHJvdXRpbmdIYW5kbGVyKTtcbiAgICAgIHJvdXRlQnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZVRvQnV0dG9uKTtcblxuICAgICAgbGV0IHJvdXRlVG9CdXR0b25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgLy8gcm91dGVUb0J1dHRvblNwYW4uaW5uZXJIVE1MID0gc2NvcGUubGFuZ3VhZ2VDb25zdGFudHMuUE9QVVBfUk9VVEVfVE87XG4gICAgICByb3V0ZVRvQnV0dG9uLmFwcGVuZENoaWxkKHJvdXRlVG9CdXR0b25TcGFuKTtcbiAgICAgIHJldHVybiByb3V0ZUJ1dHRvbldyYXBwZXI7XG4gICAgfTtcblxuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwIHx8IFtdO1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAucHVzaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxldCBtYXBDb250cm9sbGVyID0gcGFyYW1zLm1hcENvbnRyb2xsZXI7XG4gICAgICBsZXQgb2JqUG9wdXAgPSBwYXJhbXMucG9wdXA7XG4gICAgICBpZiAobWFwQ29udHJvbGxlci5jb21wb25lbnRzLnJvdXRlclxuICAgICAgICAmJiBvYmpQb3B1cC5wb3B1cC5yb3V0aW5nX2xpbmtcbiAgICAgICkge1xuICAgICAgICBpZiAocGFyc2VJbnQobWFwQ29udHJvbGxlci5kYXRhLnBvcHVwSGFuZGxpbmcsIDEwKSAhPT0gMykge1xuICAgICAgICAgIGxldCByb3V0ZUJ1dHRvbldyYXBwZXIgPSBjcmVhdGVQb3B1cFdyYXBwZXIob2JqUG9wdXApO1xuICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJGNvbnRlbnQuYXBwZW5kKHJvdXRlQnV0dG9uV3JhcHBlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGZlYXR1cmU6IG9ialBvcHVwLmZlYXR1cmUsXG4gICAgICAgICAgICByb3V0ZXI6IHNjb3BlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBwYXJhbXMuY29tcC5zZXRBZGRCdXR0b25zKFJvdXRlclBvcHVwQnV0dG9ucywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGxldCBzdHlsZXMgPSBbXG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyZWFDZW50ZXJMb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNsaWNrTG9jc3R5bGVcbiAgICBdO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcmlvcml0eUZlYXR1cmVzICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGUpIHtcbiAgICAgIHN0eWxlcy5wdXNoKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGUpO1xuICAgIH1cbiAgICAvLyBjaGVjayBhbmQgbG9hZCBsb2NhdGlvbiBzdHlsZXMgdmlhIG1hcC1wcm94eVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoc3R5bGVzKTtcbiAgICBsZXQgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuXG4gICAgLy8gY3JlYXRlIHJvdXRlciBsYXllciBvYmplY3RcbiAgICB0aGlzLm9iakxheWVycyA9IHt9O1xuICAgIGZvciAobGV0IGtleSBpbiBtYXBEYXRhLnJvdXRlckxheWVycykge1xuICAgICAgaWYgKG1hcERhdGEucm91dGVyTGF5ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5vYmpMYXllcnNba2V5XSA9IG1hcERhdGEucm91dGVyTGF5ZXJzW2tleV1bT2JqZWN0LmtleXMobWFwRGF0YS5yb3V0ZXJMYXllcnNba2V5XSlbMF1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCByb3V0ZXIgbGF5ZXIocylcbiAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgdGhpcy5yb3V0ZXJXYXlTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgdGhpcy5yb3V0ZXJXYXlMYXllciA9IG5ldyBWZWN0b3Ioe1xuICAgICAgc291cmNlOiB0aGlzLnJvdXRlcldheVNvdXJjZSxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHN0eWxlOiBbXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpJyxcbiAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCA1MSwgMTE5LCAwLjkpJyxcbiAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlckFsdFdheUxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMucm91dGluZ0FsdFdheVNvdXJjZSxcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHN0eWxlOiBbXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpJyxcbiAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCA1MSwgMTE5LCAwLjQpJyxcbiAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIGxldCBzZWxlY3RJbnRlcmFjdGlvbiA9IG5ldyBTZWxlY3Qoe1xuICAgICAgc3R5bGU6IFtcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgd2lkdGg6IDhcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG4gICAgc2VsZWN0SW50ZXJhY3Rpb24ub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGZlYXR1cmUgPSBldmVudC5zZWxlY3RlZFswXTtcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBnZW9tZXRyeSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5ICYmIChnZW9tZXRyeS5nZXRUeXBlKCkgPT09ICdMaW5lU3RyaW5nJykpIHtcbiAgICAgICAgICBzZWxmLnNob3dBbHRSb3V0ZShzZWxmLnJlc3BvbnNlLCBmZWF0dXJlLmdldElkKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICBzZWxmLmNsaWNrRmVhdHVyZUVudHJ5Rm9yRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubWFwU2VsZWN0SW50ZXJhY3Rpb24gPSBzZWxlY3RJbnRlcmFjdGlvbjtcbiAgICB0aGlzLm1vZFdheUludGVyYWN0aW9uID0gbmV3IE1vZGlmeSh7XG4gICAgICBzb3VyY2U6IHRoaXMucm91dGVyV2F5U291cmNlLFxuICAgICAgc3R5bGU6IFtcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgd2lkdGg6IDhcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG4gICAgdGhpcy5tb2RXYXlJbnRlcmFjdGlvbi5vbignbW9kaWZ5c3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzZWxmLnN0YXRlLm9wZW4gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi5tb2RpZnlTdGFydFBvaW50ID0gbmV3IFBvaW50KGV2ZW50Lm1hcEJyb3dzZXJFdmVudC5jb29yZGluYXRlKS50cmFuc2Zvcm0oXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG4gICAgfSk7XG4gICAgdGhpcy5tb2RXYXlJbnRlcmFjdGlvbi5vbignbW9kaWZ5ZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZS5vcGVuICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBvdmVyUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQubWFwQnJvd3NlckV2ZW50LmNvb3JkaW5hdGUpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgIGxldCBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgbGV0IGluc2VydElkO1xuICAgICAgY29uc3QgYXJyS2V5cyA9IE9iamVjdC5rZXlzKHNlbGYuc3RhdGUub3ZlclBvaW50cyk7XG4gICAgICBpZiAoYXJyS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvcihsZXQgaWQgaW4gc2VsZi5zdGF0ZS5vdmVyUG9pbnRzKSB7XG4gICAgICAgICAgaWYgKHNlbGYuc3RhdGUub3ZlclBvaW50cy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGxldCBkaXN0ID0gc2VsZi5jYWxjRGlzdGFuY2Uoc2VsZi5tb2RpZnlTdGFydFBvaW50LmdldENvb3JkaW5hdGVzKCksIHNlbGYuc3RhdGUub3ZlclBvaW50c1tpZF0uZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICBpZihkaXN0IDwgbWluRGlzdGFuY2Upe1xuICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3Q7XG4gICAgICAgICAgICAgIGluc2VydElkID0gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3RTdGFydCA9IHNlbGYuY2FsY0Rpc3RhbmNlKHNlbGYuc3RhdGUuZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKCksIHNlbGYubW9kaWZ5U3RhcnRQb2ludC5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgbGV0IGRpc3RFbmQgPSBzZWxmLmNhbGNEaXN0YW5jZShzZWxmLnN0YXRlLnRvUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSwgc2VsZi5tb2RpZnlTdGFydFBvaW50LmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICBsZXQgZGlzdFN0YXJ0T2xkID0gc2VsZi5jYWxjRGlzdGFuY2Uoc2VsZi5zdGF0ZS5mcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSwgc2VsZi5zdGF0ZS5vdmVyUG9pbnRzWzBdLmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICBsZXQgb3ZlckVuZEluZGV4ID0gYXJyS2V5c1thcnJLZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgZGlzdEVuZE9sZCA9IHNlbGYuY2FsY0Rpc3RhbmNlKFxuICAgICAgICAgIHNlbGYuc3RhdGUudG9Qb2ludC5nZXRDb29yZGluYXRlcygpLFxuICAgICAgICAgIHNlbGYuc3RhdGUub3ZlclBvaW50c1tvdmVyRW5kSW5kZXhdLmdldENvb3JkaW5hdGVzKClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZGlzdFN0YXJ0IDwgZGlzdFN0YXJ0T2xkKSB7XG4gICAgICAgICAgaW5zZXJ0SWQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGRpc3RFbmQgPCBkaXN0RW5kT2xkKSB7XG4gICAgICAgICAgaW5zZXJ0SWQrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zZXJ0SWQgPSAwO1xuICAgICAgfVxuICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaChcIm92ZXJBZGRyZXNzXCIsIG92ZXJQb2ludC5nZXRDb29yZGluYXRlcygpLCBpbnNlcnRJZCk7XG4gICAgICBzZWxmLmFkZE92ZXJQb2ludChvdmVyUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVswXSwgb3ZlclBvaW50LmdldENvb3JkaW5hdGVzKClbMV0sIGluc2VydElkKTtcbiAgICB9KTtcblxuICAgIHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oc2VsZWN0SW50ZXJhY3Rpb24pO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5lbmFibGVPdmVyUG9pbnRzKSB7XG4gICAgICBzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMubW9kV2F5SW50ZXJhY3Rpb24pO1xuICAgIH1cblxuICAgIHNlbGVjdEludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG5cbiAgICB0aGlzLnJvdXRlckhpbnRTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgdGhpcy5yb3V0ZXJIaW50TGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogdGhpcy5yb3V0ZXJIaW50U291cmNlLFxuICAgICAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgICAgIHJldHVybiAoIXNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eSkgfHwgc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tYXBEYXRhID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG5cbiAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZSA9IG5ldyBWZWN0b3JTb3VyY2UoKTtcbiAgICB0aGlzLmxvY2F0aW9uc0xheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMubG9jYXRpb25zU291cmNlLFxuICAgICAgekluZGV4OiAyXG4gICAgfSk7XG4gICAgdGhpcy5hcmVhU291cmNlID0gbmV3IFZlY3RvclNvdXJjZSgpO1xuICAgIHRoaXMuYXJlYUxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMuYXJlYVNvdXJjZSxcbiAgICAgIHpJbmRleDogMlxuICAgIH0pO1xuICAgIHRoaXMucm91dGVyRmVhdHVyZXNTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG5cbiAgICB0aGlzLnJvdXRlckZlYXR1cmVzTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZSxcbiAgICAgIHpJbmRleDogMjAsXG4gICAgICAvLyBkZWNsdXR0ZXI6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlckxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIsXG4gICAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIsXG4gICAgICAgIHRoaXMubG9jYXRpb25zTGF5ZXIsXG4gICAgICAgIHRoaXMucm91dGVySGludExheWVyLFxuICAgICAgICB0aGlzLnJvdXRlckZlYXR1cmVzTGF5ZXIsXG4gICAgICAgIHRoaXMubG9jYXRpb25zTGF5ZXIsXG4gICAgICAgIHRoaXMuYXJlYUxheWVyXG4gICAgICBdKSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5yb3V0ZXJMYXllckdyb3VwKTtcbiAgICAvLyB0aGlzLnZpZXdSb3V0ZXIgPSB0aGlzLmFkZFJvdXRlckludGVyZmFjZSgpO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pbml0aWFsTW9kZSA9PT0gXCJyb3V0ZVwiIHx8ICF0aGlzLnZpZXdBcmVhKSB7XG4gICAgICAvLyB0aGlzLnZpZXdSb3V0ZXIuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBpZCA9PiBhcnJheSBvZiBpbnN0cnVjdGlvbnMsIGZvciBlYWNoIHJvdXRlIG9uZSBlbnRyeVxuICAgIHRoaXMucm91dGVJbnN0cnVjdGlvbnMgPSB7fTtcblxuICAgIC8vIHN0b3JlIHNvbWUgdmFycyBmb3IgYWpheC1yZXF1ZXN0c1xuICAgIGxldCBwcm9maWxlSWQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuXG4gICAgdGhpcy5nZW9TZWFyY2hBcGkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgJy8nICsgcHJvZmlsZUlkO1xuICAgIHRoaXMuZ2VvUmV2ZXJzZVNlYXJjaEFwaSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2hfcmV2ZXJzZSArICcvJyArIHByb2ZpbGVJZDtcbiAgICB0aGlzLnJvdXRpbmdBcGkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkucm91dGluZyArICcvJyArIHByb2ZpbGVJZDtcblxuICAgIGlmICh0aGlzLnVzZVBlcm1hbGluaykge1xuICAgICAgdGhpcy5wZXJtYWxpbmtIYW5kbGVyLmhhbmRsZUluaXRpYWxQYXJhbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9iakZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlQXV0b2NvbXBsZXRlRnVuY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRQb3B1cEhvb2soKTtcbiAgICB0aGlzLmFkZE1hcElucHV0SW50ZXJhY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnQxXG4gICAqIEBwYXJhbSBwb2ludDJcbiAgICovXG4gIGNhbGNEaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xuICAgIGxldCBzcXVhcmUxLCBzcXVhcmUyO1xuICAgIHNxdWFyZTEgPSBNYXRoLnBvdyhwb2ludDFbMF0gLSBwb2ludDJbMF0sIDIpO1xuICAgIHNxdWFyZTIgPSBNYXRoLnBvdyhwb2ludDFbMV0gLSBwb2ludDJbMV0sIDIpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoc3F1YXJlMSArIHNxdWFyZTIpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSByb3V0ZSBpbnN0cnVjdGlvbnMgaW4gdGhlIHBvcnRzaWRlIHJvdXRlci5cbiAgICogQHBhcmFtIHJvdXRlUmVzcG9uc2VcbiAgICogQHBhcmFtIHJvdXRlTnVtYmVyXG4gICAqL1xuICBzaG93Um91dGVJbnN0cnVjdGlvbnMocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIsIHJvdXRlcldheVNvdXJjZSwgcm91dGVySGludFNvdXJjZSkge1xuXG4gICAgdmFyIHNjb3BlLFxuICAgICAgcm91dGVySW5zdHJ1Y3Rpb24sXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIsXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sLFxuICAgICAgaW5zdHIsXG4gICAgICBzdHJUeXBlLFxuICAgICAgc3RyTW9kLFxuICAgICAgcm93c3R5bGUsXG4gICAgICByb3V0ZU51bWJlciA9IHJvdXRlTnVtYmVyIHx8IDAsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIHJvdXRlX25hbWVfMCA9IFwiXCIsXG4gICAgICByb3V0ZV9uYW1lXzEgPSBcIlwiLFxuICAgICAgdG90YWxfZGlzdGFuY2UgPSBcIlwiLFxuICAgICAgdG90YWxfdGltZSA9IFwiXCI7XG5cbiAgICBzY29wZSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93SW5zdHJ1Y3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyLmNsYXNzTmFtZSA9IHJvdXRpbmdDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI7XG5cbiAgICBpZiAocm91dGVSZXNwb25zZSkge1xuICAgICAgaWYgKCEocm91dGVSZXNwb25zZS5mZWF0dXJlcyAmJiByb3V0ZVJlc3BvbnNlLmZlYXR1cmVzLmxlbmd0aCA+IDApIHx8ICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93RmVhdHVyZXMpIHtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXJcIikuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzEnIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcxJykgey8vT1NSTS1BUEk6NS54XG4gICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1swXS5zdW1tYXJ5KSB7XG4gICAgICAgICAgcm91dGVfbmFtZV8wID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeS5zcGxpdChcIixcIilbMF07XG4gICAgICAgICAgcm91dGVfbmFtZV8xID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeS5zcGxpdChcIixcIilbMV07XG4gICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzFdKSB7XG4gICAgICAgICAgICByb3V0ZV9uYW1lXzEgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1sxXS5zdW1tYXJ5LnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG90YWxfZGlzdGFuY2UgPSAocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmRpc3RhbmNlKTtcbiAgICAgICAgdG90YWxfdGltZSA9IChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uZHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzAnKSB7Ly9PU1JNLUFQSTo8NVxuICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lKSB7XG4gICAgICAgICAgcm91dGVfbmFtZV8wID0gcm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lWzBdO1xuICAgICAgICAgIHJvdXRlX25hbWVfMSA9IHJvdXRlUmVzcG9uc2Uucm91dGVfbmFtZVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkpIHtcbiAgICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IChyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkudG90YWxfZGlzdGFuY2UpO1xuICAgICAgICAgIHRvdGFsX3RpbWUgPSAocm91dGVSZXNwb25zZS5yb3V0ZV9zdW1tYXJ5LnRvdGFsX3RpbWUpO1xuICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzInKSB7Ly9PUlMtQVBJXG4gICAgICAgIHRvdGFsX3RpbWUgPSAocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnN1bW1hcnkuZHVyYXRpb24pO1xuICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc3VtbWFyeS5kaXN0YW5jZSk7XG4gICAgICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnNlZ21lbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2VnbWVudC5zdGVwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gY3VycmVudFNlZ21lbnQuc3RlcHNbal07XG4gICAgICAgICAgICBjdXJyZW50U3RlcC5sZW5ndGggPSBjdXJyZW50U3RlcC5kaXN0YW5jZSAvIDEwMDA7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMucHVzaChjdXJyZW50U3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVJbnN0cnVjdGlvbnNbcm91dGVOdW1iZXJdID0ge1xuICAgICAgICAgIHRpbWU6IHRvdGFsX3RpbWUsXG4gICAgICAgICAgZGlzdGFuY2U6IHRvdGFsX2Rpc3RhbmNlLFxuICAgICAgICAgIGluc3RydWN0aW9uczogaW5zdHJ1Y3Rpb25zXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uczogdGhpcy5yb3V0ZUluc3RydWN0aW9uc1tyb3V0ZU51bWJlcl0sXG4gICAgICAgICAgXCJyb3V0ZXJXYXlTb3VyY2VcIjogcm91dGVyV2F5U291cmNlLFxuICAgICAgICAgIFwicm91dGVySGludFNvdXJjZVwiOiByb3V0ZXJIaW50U291cmNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMycgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzMnKSB7IC8vR3JhcGhob3BwZXJcbiAgICAgICAgdG90YWxfZGlzdGFuY2UgPSByb3V0ZVJlc3BvbnNlLnBhdGhzW3JvdXRlTnVtYmVyXS5kaXN0YW5jZTtcbiAgICAgICAgdG90YWxfdGltZSA9IHJvdXRlUmVzcG9uc2UucGF0aHNbcm91dGVOdW1iZXJdLnRpbWUgLyAxMDAwIDtcblxuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gW107XG4gICAgICAgIGxldCBzZWdtZW50cyA9IHJvdXRlUmVzcG9uc2UucGF0aHNbcm91dGVOdW1iZXJdLmluc3RydWN0aW9ucztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjdXJyZW50SW5zdHJ1Y3Rpb24gPSBzZWdtZW50c1tpXTtcbiAgICAgICAgICBjdXJyZW50SW5zdHJ1Y3Rpb24ubGVuZ3RoID0gY3VycmVudEluc3RydWN0aW9uLmRpc3RhbmNlIC8gMTAwMDtcbiAgICAgICAgICBjdXJyZW50SW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb24gPSBjdXJyZW50SW5zdHJ1Y3Rpb24udGV4dDtcbiAgICAgICAgICBjdXJyZW50SW5zdHJ1Y3Rpb24udHlwZSA9IGN1cnJlbnRJbnN0cnVjdGlvbi5zaWduO1xuICAgICAgICAgIGluc3RydWN0aW9ucy5wdXNoKGN1cnJlbnRJbnN0cnVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZUluc3RydWN0aW9uc1tyb3V0ZU51bWJlcl0gPSB7XG4gICAgICAgICAgdGltZTogdG90YWxfdGltZSxcbiAgICAgICAgICBkaXN0YW5jZTogdG90YWxfZGlzdGFuY2UsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBpbnN0cnVjdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zOiB0aGlzLnJvdXRlSW5zdHJ1Y3Rpb25zW3JvdXRlTnVtYmVyXSxcbiAgICAgICAgICBcInJvdXRlcldheVNvdXJjZVwiOiByb3V0ZXJXYXlTb3VyY2UsXG4gICAgICAgICAgXCJyb3V0ZXJIaW50U291cmNlXCI6IHJvdXRlckhpbnRTb3VyY2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICc0JyB8fCByb3V0ZVJlc3BvbnNlLnJvdXRlVHlwZSA9PSAnNCcpIHsgLy9WYWxoYWxsYVxuICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IHJvdXRlUmVzcG9uc2UudHJpcC5zdW1tYXJ5Lmxlbmd0aCAqMTAwMDtcbiAgICAgICAgdG90YWxfdGltZSA9IHJvdXRlUmVzcG9uc2UudHJpcC5zdW1tYXJ5LnRpbWUgO1xuICAgICAgICB0aGlzLnJvdXRlSW5zdHJ1Y3Rpb25zW3JvdXRlTnVtYmVyXSA9IHtcbiAgICAgICAgICB0aW1lOiB0b3RhbF90aW1lLFxuICAgICAgICAgIGRpc3RhbmNlOiB0b3RhbF9kaXN0YW5jZSxcbiAgICAgICAgICBpbnN0cnVjdGlvbnM6IHJvdXRlUmVzcG9uc2UudHJpcC5sZWdzW3JvdXRlTnVtYmVyXS5tYW5ldXZlcnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zOiB0aGlzLnJvdXRlSW5zdHJ1Y3Rpb25zW3JvdXRlTnVtYmVyXSxcbiAgICAgICAgICBcInJvdXRlcldheVNvdXJjZVwiOiByb3V0ZXJXYXlTb3VyY2UsXG4gICAgICAgICAgXCJyb3V0ZXJIaW50U291cmNlXCI6IHJvdXRlckhpbnRTb3VyY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3V0ZV9uYW1lXzAgJiYgcm91dGVfbmFtZV8xKSB7XG4gICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlci5pbm5lckhUTUwgPSAnPGxhYmVsPicgKyB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFICsgJzwvbGFiZWw+IDxlbT4nICsgcm91dGVfbmFtZV8wICsgJyAmIzg1OTQ7ICcgKyByb3V0ZV9uYW1lXzEgKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF9kaXN0YW5jZSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9USU1FICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfdGltZSArICc8L2VtPjxicj4nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlICYmIEFycmF5LmlzQXJyYXkodGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlKSkge1xuICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIuaW5uZXJIVE1MID0gJzxsYWJlbD4nICsgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9QUk9GSUxFICsgJzwvbGFiZWw+IDxlbT4nICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW3RoaXMucm91dGVQcm9maWxlLmFjdGl2ZV0gKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF9kaXN0YW5jZSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9USU1FICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfdGltZSArICc8L2VtPjxicj4nO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sID0gJzx0YWJsZSBjbGFzcz1cIicgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUgKyAnXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCI+JztcblxuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMScgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzEnKSB7Ly9PU1JNLUFQSTo1LnhcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzAnIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcwJykgey8vT1NSTS1BUEk6PDVcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzInIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcyJykgey8vT3BlblJvdXRlU2VydmljZVxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMycgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzMnKSB7IC8vIEdyYXBoaG9wcGVyXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT09ICc0JyB8fCByb3V0ZVJlc3BvbnNlLnJvdXRlVHlwZSA9PSAnNCcpIHsgLy8gVmFsaGFsbGFcblxuICAgICAgfVxuXG5cbiAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvdGFibGU+JztcblxuICAgICAgcm91dGVySW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gcm91dGVySW5zdHJ1Y3Rpb25zSHRtbDtcblxuXG4gICAgICB0aGlzLmFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb24oKTtcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXMgaW1wbGVtZW50YXRpb24gb2YgdGhlIGZvcndhcmQgZ2Vvc2VhcmNoLlxuICAgKi9cbiAgYXN5bmMgcGVyZm9ybUdlb1NlYXJjaChhZGRyZXNzKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCB1cmwgPSBzY29wZS5nZW9TZWFyY2hBcGkgKyAnP2Zvcm1hdD1qc29uJmxpbWl0PTEmcT0nICsgZW5jb2RlVVJJKGFkZHJlc3MpO1xuICAgIGlmICh0aGlzLm1hcERhdGEgJiYgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaCAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnNlYXJjaEtleSAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnVybCkge1xuICAgICAgdXJsID0gdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC51cmwgKyBcInNlYXJjaC5waHA/a2V5PVwiICsgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgKyAnJmZvcm1hdD1qc29uJmxpbWl0PTEmcT0nICsgZW5jb2RlVVJJKGFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gW3BhcnNlRmxvYXQoZGF0YVswXS5sb24pLCBwYXJzZUZsb2F0KGRhdGFbMF0ubGF0KV07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZXR1cm4gW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNob3cgZXJyb3IgaGludFxuICAgICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgICBhbGVydEhhbmRsZXIuc2hvd0luZm9EaWFsb2coc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9FUlJPUiwgc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBhbGVydEhhbmRsZXIgPSBuZXcgQWxlcnRIYW5kbGVyKCk7XG4gICAgICBhbGVydEhhbmRsZXIuc2hvd0luZm9EaWFsb2coc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9FUlJPUiwgc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyB0aGUgZ2VvLWNvb3JkaW5hdGVzIGZvciBhIGdpdmVuIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gJGlucHV0ICAgICAgICBUaGUgaW5wdXQgZmllbGQgY29udGFpbmluZyB0aGUgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSAgICAgICAgIFRoZSBwcm9wZXJ0eSBpbiB3aGljaCB0aGUgcmVzdWx0aW5nIGNvb3JkaW5hdGUgc2hvdWxkIGJlIHN0b3JlZC5cbiAgICogQHBhcmFtIG9wdF9jYWxsYmFjayAgT3B0aW9uYWwgY2FsbGJhY2suIElzIGV4ZWN1dGVkIGFmdGVyIHN1Y2Nlc3NmdWwgc2VhcmNoLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGVyZm9ybVNlYXJjaCgkaW5wdXQsIHZhbHVlLCBvcHRfY2FsbGJhY2spIHtcblxuICAgIHZhciBtYXAsXG4gICAgICBib3VuZHMsXG4gICAgICB2aWV3Ym94LFxuICAgICAgc2NvcGUsXG4gICAgICB1cmw7XG5cbiAgICBzY29wZSA9IHRoaXM7XG5cbiAgICBpZiAoJGlucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICBkZWxldGUgc2NvcGVbdmFsdWVdO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgbWFwID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXA7XG4gICAgYm91bmRzID0gbWFwLmdldFZpZXcoKS5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSk7XG4gICAgYm91bmRzID0gdHJhbnNmb3JtRXh0ZW50KGJvdW5kcywgbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCksICdFUFNHOjQzMjYnKTtcbiAgICB2aWV3Ym94ID0gJyZ2aWV3Ym94PScgKyBib3VuZHNbMF0gKyAnLCcgKyBib3VuZHNbMV0gKyAnLCcgKyBib3VuZHNbMl0gKyAnLCcgKyBib3VuZHNbM107XG4gICAgdXJsID0gc2NvcGUuZ2VvU2VhcmNoQXBpICsgJz9mb3JtYXQ9anNvbiZsaW1pdD0xJnE9JyArIGVuY29kZVVSSSgkaW5wdXQudmFsKCkpICsgdmlld2JveDtcbiAgICBpZiAodGhpcy5tYXBEYXRhICYmIHRoaXMubWFwRGF0YS5nZW9zZWFyY2ggJiYgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgJiYgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC51cmwpIHtcbiAgICAgIHVybCA9IHRoaXMubWFwRGF0YS5nZW9zZWFyY2gudXJsICsgXCJzZWFyY2gucGhwP2tleT1cIiArIHRoaXMubWFwRGF0YS5nZW9zZWFyY2guc2VhcmNoS2V5ICsgJyZmb3JtYXQ9anNvbiZsaW1pdD0xJnE9JyArIGVuY29kZVVSSSgkaW5wdXQudmFsKCkpICsgdmlld2JveDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5wYXJhbXMpIHtcbiAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMubWFwRGF0YS5nZW9zZWFyY2gucGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICB1cmwgKz0gXCImXCIgKyBwYXJhbSArIFwiPVwiICsgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5wYXJhbXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICd1cmwnOiB1cmxcbiAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwib3ZlclZhbHVlXCIpIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLm92ZXJWYWx1ZSkge1xuICAgICAgICAgICAgc2NvcGUub3ZlclZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBvdmVyUG9pbnQgPSBuZXcgUG9pbnQoW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXSk7XG4gICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9ICAkaW5wdXQubmV4dCgpWzBdO1xuICAgICAgICAgIC8vIHRyYXZlcnNlIHRoZSBkb20gbGV2ZWwgdW50aWwgdGhlIGRlbGV0ZSBidXR0b24gaXMgZm91bmRcbiAgICAgICAgICB3aGlsZSAoIWpRdWVyeShkZWxldGVCdXR0b24pLmhhc0NsYXNzKCdjNGctcm91dGVyLWlucHV0LWNsZWFyJykpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbiA9IGpRdWVyeShkZWxldGVCdXR0b24pLm5leHQoKVswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWxldGVCdXR0b24uaWQgPSBvdmVyUG9pbnRbJ29sX3VpZCddO1xuICAgICAgICAgIHNjb3BlLm92ZXJWYWx1ZS5wdXNoKG92ZXJQb2ludCk7XG4gICAgICAgICAgc2NvcGUuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgY29vcmRzID0gW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXTtcbiAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoY29vcmRzKTtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwiZnJvbVZhbHVlXCIpIHtcbiAgICAgICAgICAgIHNjb3BlLnNldFN0YXRlKHtmcm9tUG9pbnQ6IHBvaW50LCBmcm9tQWRkcmVzczogJGlucHV0LnZhbCgpfSwgKCkgPT4gc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ0b1ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHNjb3BlLnNldFN0YXRlKHt0b1BvaW50OiBwb2ludCwgdG9BZGRyZXNzOiAkaW5wdXQudmFsKCl9LCAoKSA9PiBzY29wZS51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUT0RPIHdpZWRlciBlaW5iYXVlblxuICAgICAgICAgIC8vIHN3aXRjaCh2YWx1ZSkge1xuICAgICAgICAgIC8vICAgY2FzZSBcImZyb21WYWx1ZVwiOlxuICAgICAgICAgIC8vICAgICBzY29wZS51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc0Zyb21cIiwgY29vcmRzKTtcbiAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gICBjYXNlIFwidG9WYWx1ZVwiOlxuICAgICAgICAgIC8vICAgICBzY29wZS51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc1RvXCIsIGNvb3Jkcyk7XG4gICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgIC8vICAgY2FzZSBcImFyZWFWYWx1ZVwiOlxuICAgICAgICAgIC8vICAgICBzY29wZS51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc0FyZWFcIiwgY29vcmRzKTtcbiAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gICBkZWZhdWx0OlxuICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNob3cgZXJyb3IgaGludFxuICAgICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgICBhbGVydEhhbmRsZXIuc2hvd0luZm9EaWFsb2coc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9FUlJPUiwgc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9jYWxsYmFjayAmJiB0eXBlb2Ygb3B0X2NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3B0X2NhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgYWxlcnRIYW5kbGVyLnNob3dJbmZvRGlhbG9nKHNjb3BlLnByb3BzLmxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUxFUlRfRVJST1IsIHNjb3BlLnByb3BzLmxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gXCJcIjtcblxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgZ2l2ZW4gY29vcmRpbmF0ZSBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gc3RhdGVQcm9wICAgICBUaGUgc3RhdGUgcHJvcGVydHkgb2YgdGhpcyB3aGVyZSB0aGUgYWRkcmVzcyBzaG91bGQgYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0gdmFsdWUgICAgICAgICBUaGUgcHJvcGVydHkgdGhhdCBjb250YWlucyB0aGUgY29vcmRpbmF0ZXMuXG4gICAqIEBwYXJhbSBvcHRfaW5kZXggICAgIFRoZSBpbmRleCBmb3IgdGhlIG92ZXJBZGRyZXNzIChvdmVyIHBvaW50cyBvbmx5KVxuICAgKi9cbiAgcGVyZm9ybVJldmVyc2VTZWFyY2goc3RhdGVQcm9wLCB2YWx1ZSwgb3B0X2luZGV4KSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICB1cmw7XG5cbiAgICB1cmwgPSB0aGlzLmdlb1JldmVyc2VTZWFyY2hBcGkgKyAnP2Zvcm1hdD1qc29uJmxhdD0nICsgdmFsdWVbMV0gKyAnJmxvbj0nICsgdmFsdWVbMF07XG4gICAgaWYgKHRoaXMubWFwRGF0YSAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoICYmIHRoaXMubWFwRGF0YS5nZW9zZWFyY2gucmV2ZXJzZUtleSAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnVybCkge1xuICAgICAgdXJsID0gdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC51cmwgKyBcInJldmVyc2UucGhwP2tleT1cIiArIHRoaXMubWFwRGF0YS5nZW9zZWFyY2gucmV2ZXJzZUtleSArICcmZm9ybWF0PWpzb24mbGF0PScgKyB2YWx1ZVsxXSArICcmbG9uPScgKyB2YWx1ZVswXTtcbiAgICB9XG5cbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICAndXJsJzogdXJsXG4gICAgfSlcbiAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLnJvYWQgfHwgcmVzcG9uc2UuYWRkcmVzcy5wYXRoIHx8IHJlc3BvbnNlLmFkZHJlc3MucGVkZXN0cmlhbikge1xuICAgICAgICAgICAgICB2YWx1ZSArPSByZXNwb25zZS5hZGRyZXNzLnJvYWQgfHwgcmVzcG9uc2UuYWRkcmVzcy5wYXRoIHx8IHJlc3BvbnNlLmFkZHJlc3MucGVkZXN0cmlhbjtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gXCIgXCIgKyByZXNwb25zZS5hZGRyZXNzLmhvdXNlX251bWJlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MuY2l0eSB8fCByZXNwb25zZS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgdmFsdWUgKz0gdmFsdWUgPyBcIiwgXCI6IFwiXCI7XG4gICAgICAgICAgICAgIHZhbHVlICs9IHJlc3BvbnNlLmFkZHJlc3MuY2l0eSB8fCByZXNwb25zZS5hZGRyZXNzLnRvd247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdmFsdWUgPSByZXNwb25zZS5kaXNwbGF5X25hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFRPRE8gdXBkYXRlIHJvdXRlciBwZXJtYWxpbmtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlUHJvcCkge1xuICAgICAgICAgICAgY2FzZSBcImFyZWFBZGRyZXNzXCI6XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2FyZWFBZGRyZXNzOiB2YWx1ZX0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoXCIjYXJlYUZyb21cIikudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNhcmVhRnJvbVwiKS52YWwodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlua0ZyYWdtZW50cyhcImFkZHJlc3NBcmVhXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZnJvbUFkZHJlc3NcIjpcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7ZnJvbUFkZHJlc3M6IHZhbHVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdGcm9tXCIpLnZhbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgLy8gdXBkYXRlIGFkZHJlc3MgaW4gbGlua1xuICAgICAgICAgICAgICAvLyBzZWxmLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJhZGRyZXNzRnJvbVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvQWRkcmVzc1wiOlxuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt0b0FkZHJlc3M6IHZhbHVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvLyB1cGRhdGUgYWRkcmVzcyBpbiBsaW5rXG4gICAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlua0ZyYWdtZW50cyhcImFkZHJlc3NUb1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm92ZXJBZGRyZXNzXCI6XG4gICAgICAgICAgICAgIGNvbnN0IG92ZXJBZGRyZXNzZXMgPSBzZWxmLnN0YXRlLm92ZXJBZGRyZXNzZXM7XG4gICAgICAgICAgICAgIG92ZXJBZGRyZXNzZXMuc3BsaWNlKG9wdF9pbmRleCwgMSwgdmFsdWUpO1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtvdmVyQWRkcmVzc2VzOiBvdmVyQWRkcmVzc2VzfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYW4gYXJlYSBzZWFyY2ggd2l0aCB0aGUgZ2l2ZW4gcG9pbnQgYXMgY2VudGVyLiBJZiB0aGVyZSBhcmUgYW55LCB0aGUgZmVhdHVyZXMgaW4gdGhlIHBlcmltZXRlciB3aWxsIGJlXG4gICAqIGRyYXduIG9udG8gdGhlIG1hcCBhbmQgZGlzcGxheWVkIGluIHRoZSBmZWF0dXJlIGNvbnRhaW5lci5cbiAgICovXG4gIHBlcmZvcm1BcmVhKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGZyb21Qb2ludCA9IHRoaXMuc3RhdGUuYXJlYVBvaW50O1xuXG4gICAgaWYgKCFmcm9tUG9pbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGZyb21Db29yZCA9IFtmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgIGxldCBwcm9maWxlSWQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgIGxldCB1cmwgPSAnY29uNGdpcy9hcmVhU2VydmljZS8nICsgcHJvZmlsZUlkICsgJy8nICsgdGhpcy5zdGF0ZS5sYXllckFyZWEgKyAnLycgKyB0aGlzLnN0YXRlLmRldG91ckFyZWEgKyAnLycgKyBmcm9tQ29vcmQ7XG4gICAgdXJsICs9ICc/cHJvZmlsZT0nICsgdGhpcy5zdGF0ZS5jdXJyZW50UHJvZmlsZTtcbiAgICBpZiAoc2VsZi5hcmVhQWpheCkge1xuICAgICAgc2VsZi5hcmVhQWpheC5hYm9ydCgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gICAgc2VsZi5hcmVhQWpheCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICd1cmwnOiB1cmxcbiAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBzZWxmLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIC8vIGNvbnN0IHJvdXRlckxheWVycyA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgICAgICAgIC8vIGNvbnN0IGNob3Nlbk9wdGlvbiA9IHNlbGYuYWN0aXZlTGF5ZXJWYWx1ZUFyZWE7XG4gICAgICAgICAgLy8gdGhpcyBzaG91bGQgYmUgY2hhbmdlZCBzb29uLCBhcyBpdCB0b3RhbGx5IG1lc3NlcyB1cCB0aGUgbG9naWMgb2YgdGhlIHN0cnVjdHVyZVxuICAgICAgICAgIGxldCBzb3J0ZWRGZWF0dXJlcyA9IHNlbGYuc2hvd0ZlYXR1cmVzKHJlc3BvbnNlWzBdLCByZXNwb25zZVsxXSwgXCJhcmVhXCIpO1xuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgXCJmZWF0dXJlTGlzdFwiOiB7XG4gICAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogc29ydGVkRmVhdHVyZXMsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiByZXNwb25zZVsxXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmVhdHVyZVNvdXJjZVwiOiBzZWxmLnJvdXRlckZlYXR1cmVzU291cmNlLFxuICAgICAgICAgICAgXCJvcGVuUmVzdWx0c1wiOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIHJvdXRlIHNlYXJjaCB3aXRoIHRoZSBnaXZlbiBmcm9tIGFuZCB0byBwb2ludHMuIERpc3BsYXlzIGZlYXR1cmVzIGFuZCBmZWF0dXJlIGVudHJpZXMgb24gc3VjY2Vzcy4gVXNlc1xuICAgKiBvdmVycG9pbnRzLCBpZiBhbnkgYXJlIGdpdmVuLlxuICAgKiBAcGFyYW0gZnJvbVBvaW50XG4gICAqIEBwYXJhbSB0b1BvaW50XG4gICAqIEBwYXJhbSBvdmVyUG9pbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBlcmZvcm1WaWFSb3V0ZShmcm9tUG9pbnQsIHRvUG9pbnQsIG92ZXJQb2ludCkge1xuXG4gICAgdmFyIHVybCxcbiAgICAgIHNjb3BlLFxuICAgICAgZnJvbUNvb3JkLFxuICAgICAgdG9Db29yZCxcbiAgICAgIG92ZXJDb29yZDtcblxuICAgIHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlU291cmNlKSB7XG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVTb3VyY2UuY2xlYXIoKTtcbiAgICB9XG4gICAgLy8gdGhpcy5hcmVhU291cmNlLmNsZWFyKCk7XG4gICAgdGhpcy5tYXBTZWxlY3RJbnRlcmFjdGlvbi5nZXRGZWF0dXJlcygpLmNsZWFyKCk7XG4gICAgaWYgKCFmcm9tUG9pbnQpIHtcbiAgICAgIGZyb21Qb2ludCA9IHRoaXMuZnJvbVBvaW50O1xuICAgICAgaWYgKCFmcm9tUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRvUG9pbnQpIHtcbiAgICAgIGlmICghdG9Qb2ludCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0b1BvaW50ID0gdGhpcy50b1BvaW50O1xuICAgIH1cbiAgICBpZiAoIW92ZXJQb2ludCkge1xuICAgICAgaWYgKHRoaXMub3ZlclBvaW50cykge1xuICAgICAgICBvdmVyUG9pbnQgPSB0aGlzLm92ZXJQb2ludHM7XG4gICAgICB9XG4gICAgfVxuICAgIGZyb21Db29yZCA9IFtmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgIHRvQ29vcmQgPSBbdG9Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCB0b1BvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgIGlmIChvdmVyUG9pbnQgJiYgT2JqZWN0LmtleXMob3ZlclBvaW50KS5sZW5ndGggPiAwKSB7XG4gICAgICBvdmVyQ29vcmQgPSBbXTtcbiAgICAgIGZvciAodmFyIHByb3B0IGluIG92ZXJQb2ludCkge1xuICAgICAgICBpZiAob3ZlclBvaW50Lmhhc093blByb3BlcnR5KHByb3B0KSAmJiBvdmVyUG9pbnRbcHJvcHRdKSB7XG4gICAgICAgICAgb3ZlckNvb3JkLnB1c2goW292ZXJQb2ludFtwcm9wdF0uZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgb3ZlclBvaW50W3Byb3B0XS5nZXRDb29yZGluYXRlcygpWzBdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPj0gJzEnKSB7Ly9PU1JNLUFQSTo1Lnggb3IgT1JTLSBBUElcbiAgICAgIGxldCBwcm9maWxlSWQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuXG4gICAgICB1cmwgPSAnY29uNGdpcy9yb3V0ZVNlcnZpY2UvJyArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgKyAnLydcbiAgICAgICAgKyBwcm9maWxlSWQgKyAnLycgKyB0aGlzLnN0YXRlLmxheWVyUm91dGUgKyAnLydcbiAgICAgICAgKyB0aGlzLnN0YXRlLmRldG91clJvdXRlICsgJy8nICsgZnJvbUNvb3JkO1xuXG4gICAgICBpZiAob3ZlclBvaW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3ZlckNvb3JkLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIHVybCArPSAnOycgKyBvdmVyQ29vcmRbaV07XG4gICAgICB9XG4gICAgICB1cmwgKz0gJzsnICsgdG9Db29yZDtcbiAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQcm9maWxlKSB7XG4gICAgICAgIHVybCArPSAnP3Byb2ZpbGU9JyArIHRoaXMuc3RhdGUuY3VycmVudFByb2ZpbGU7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChzY29wZS5yb3V0ZUFqYXgpIHtcbiAgICAgICAgc2NvcGUucm91dGVBamF4LmFib3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLnJvdXRlQWpheCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICAgJ3VybCc6IHVybFxuICAgICAgfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2NvcGUucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAvLyBsZXQgZXJyb3JEaXYgPSBzY29wZS5zaG93Um91dGVyRXJyb3Ioc2NvcGUubGFuZ3VhZ2VDb25zdGFudHNbcmVzcG9uc2UuZXJyb3JdKTtcbiAgICAgICAgICAgICAgbGV0IGFsZXJ0SGFuZGxlciA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgYWxlcnRIYW5kbGVyLnNob3dJbmZvRGlhbG9nKHNjb3BlLnByb3BzLmxhbmdDb25zdGFudHNbcmVzcG9uc2UuZXJyb3JdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNjb3BlLnNob3dSb3V0ZUxheWVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgc2NvcGUuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJlc3BvbnNlLCAwLCBzY29wZS5yb3V0ZXJXYXlTb3VyY2UsIHNjb3BlLnJvdXRlckhpbnRTb3VyY2UpO1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZmVhdHVyZXMgJiYgKHJlc3BvbnNlLmZlYXR1cmVzLmVsZW1lbnRzIHx8IHJlc3BvbnNlLmZlYXR1cmVzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEZlYXR1cmVzID0gc2NvcGUuc2hvd0ZlYXR1cmVzKHJlc3BvbnNlLmZlYXR1cmVzLCByZXNwb25zZS50eXBlLCBcInJvdXRlclwiKTtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBcImZlYXR1cmVMaXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVzXCI6ICAgc29ydGVkRmVhdHVyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHJlc3BvbnNlLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImZlYXR1cmVTb3VyY2VcIjogc2NvcGUucm91dGVyRmVhdHVyZXNTb3VyY2UsXG4gICAgICAgICAgICAgICAgICBcIm9wZW5SZXN1bHRzXCI6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2NvcGUucm91dGVBamF4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2xvc2VBZnRlclNlYXJjaCkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgfSBlbHNlIHsvL09TUk0tQVBJOjw1XG4gICAgICB0cnkge1xuICAgICAgICB1cmwgPSAnY29uNGdpcy9yb3V0ZVNlcnZpY2UvJyArIHByb2ZpbGVJZCArICc/b3V0cHV0PWpzb24maW5zdHJ1Y3Rpb25zPXRydWUmYWx0PWZhbHNlJmxvY19mcm9tPScgKyBmcm9tQ29vcmQgKyAnJmxvY190bz0nICsgdG9Db29yZDtcblxuICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgJ3VybCc6IHVybFxuICAgICAgICB9KVxuICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgc2NvcGUuc2hvd1JvdXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGNhdGNoIChFeGNlcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgdXNlIGEgbW9yZSBtb2Rlcm4gQVBJLVZlcnNpb24gZm9yIHRoZSBSb3V0ZXNlcnZpY2VcIilcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIHJvdXRpbmcgcHJvcGVydGllcyBhbmQgdHJpZ2dlcnMgYSBuZXcgcm91dGUgc2VhcmNoLCB3aGVuIHRoZSBtYW5kYXRvcnkgcGFyYW1ldGVycyBhcmUgc2V0LlxuICAgKi9cbiAgcmVjYWxjdWxhdGVSb3V0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mcm9tUG9pbnQgJiYgdGhpcy5zdGF0ZS50b1BvaW50KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vdmVyUG9pbnRzICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3ZlclBvaW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1WaWFSb3V0ZSh0aGlzLnN0YXRlLmZyb21Qb2ludCwgdGhpcy5zdGF0ZS50b1BvaW50LCB0aGlzLnN0YXRlLm92ZXJQb2ludHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtVmlhUm91dGUodGhpcy5zdGF0ZS5mcm9tUG9pbnQsIHRoaXMuc3RhdGUudG9Qb2ludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlTGF5ZXIobGF5ZXJJZCkge1xuICAgIHJldHVybiB0aGlzLm9iakxheWVyc1tsYXllcklkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgZmVhdHVyZXMgZnJvbSB0aGUgbWFwIGFuZCBkaXNwbGF5cyB0aGUgZ2l2ZW4gbmV3IGZlYXR1cmVzLiBUaGUgZmVhdHVyZXMgYXJlIHNvcnRlZCBieSB0aGUgY29uZmlndXJlZFxuICAgKiBwcm9wZXJ0eS4gVGhlIGZ1bmN0aW9uIHRha2VzIHRoZSBiYWNrZW5kIGNvbmZpZ3VyYXRpb24gYWNjb3JkaW5nIHRvIHByaW9yaXRpemVkIGZlYXR1cmVzIGludG8gYWNjb3VudC5cbiAgICogQHBhcmFtIGZlYXR1cmVzXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBtb2RlXG4gICAqIEBwYXJhbSBub0NsZWFyXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgc2hvd0ZlYXR1cmVzKGZlYXR1cmVzLCB0eXBlID0gXCJ0YWJsZVwiLCBtb2RlID0gXCJyb3V0ZXJcIiwgbm9DbGVhcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghbm9DbGVhcikge1xuICAgICAgdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5jbGVhcigpO1xuICAgIH1cbiAgICAvLyBpbnRlcmltIGNsZWFyIG9mIGZlYXR1cmUgc2VsZWN0aW9uXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMubWFwRGF0YTtcbiAgICBsZXQgbGF5ZXJJZCA9IHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5zdGF0ZS5sYXllclJvdXRlIDogdGhpcy5zdGF0ZS5sYXllckFyZWE7XG4gICAgbGV0IGFjdGl2ZUxheWVyID0gdGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnN0YXRlLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMuc3RhdGUubGF5ZXJWYWx1ZUFyZWE7XG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEFjdGl2ZUxheWVyKGxheWVySWQpLmxheWVyRGF0YTtcbiAgICBjb25zdCB1bnN0eWxlZEZlYXR1cmVzID0gW107XG4gICAgbGV0IGNvbnRlbnRGZWF0dXJlcyA9IFtdO1xuICAgIGxldCBtaXNzaW5nU3R5bGVzID0gW107XG4gICAgY29uc3QgcHJpY2VTb3J0ZWRGZWF0dXJlcyA9IGZlYXR1cmVzLmxlbmd0aCA/IGZlYXR1cmVzLnNsaWNlKCkgOiBmZWF0dXJlcy5lbGVtZW50cy5zbGljZSgpO1xuICAgIGxldCBiZXN0RmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmJlc3RGZWF0dXJlSWRzID0gW107XG4gICAgaWYgKG1hcERhdGEucHJpb3JpdHlGZWF0dXJlcyAmJiBtYXBEYXRhLnByaW9yaXR5TG9jc3R5bGUgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gc29ydCBieSBzZWxlY3RlZCB2YWx1ZSBmb3IgdGhlIG1hcCBsYWJlbCBhc2NlbmRpbmdcbiAgICAgIHByaWNlU29ydGVkRmVhdHVyZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChhW21hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXV0pIC0gcGFyc2VGbG9hdChiW21hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXV0pO1xuICAgICAgfSk7XG4gICAgICBsZXQgZmVhdHVyZUNvdW50ID0gcGFyc2VJbnQobWFwRGF0YS5wcmlvcml0eUZlYXR1cmVzLCAxMCk7XG4gICAgICBsZXQgdXBwZXJCb3VuZCA9IGZlYXR1cmVDb3VudCA+IHByaWNlU29ydGVkRmVhdHVyZXMubGVuZ3RoID8gcHJpY2VTb3J0ZWRGZWF0dXJlcy5sZW5ndGggOiBmZWF0dXJlQ291bnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwcGVyQm91bmQ7IGkrKykge1xuICAgICAgICBiZXN0RmVhdHVyZXNbaV0gPSBwcmljZVNvcnRlZEZlYXR1cmVzW2ldO1xuICAgICAgICB0aGlzLmJlc3RGZWF0dXJlSWRzLnB1c2gocHJpY2VTb3J0ZWRGZWF0dXJlc1tpXVsnaWQnXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInBldHJvbHNcIiAmJiBtb2RlICE9PSBcImFyZWFcIikge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5lbGVtZW50cztcbiAgICB9XG4gICAgaWYgKHR5cGUgIT09IFwib3ZlcnBhc3NcIikge1xuICAgICAgZmVhdHVyZUxvb3A6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBmZWF0dXJlcyAmJiAoaSA8IGZlYXR1cmVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgIGlmICghZmVhdHVyZXNbaV0uaWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbGFiZWwgPSBcIlwiO1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgbGV0IHJlc3VsdENvb3JkaW5hdGU7XG4gICAgICAgICAgbGV0IGNvbnRlbnRGZWF0dXJlO1xuICAgICAgICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQoZmVhdHVyZVsnZ2VveCddKSwgcGFyc2VGbG9hdChmZWF0dXJlWydnZW95J10pXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcbiAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUgPSBuZXcgRmVhdHVyZShwb2ludCk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0SWQoZmVhdHVyZS5pZCk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsb2NfbGlua3VybCcsIGxheWVyLmxvY19saW5rdXJsKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2xvY3N0eWxlJywgbGF5ZXIubG9jc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnaG92ZXJfbG9jYXRpb24nLCBsYXllci5ob3Zlcl9sb2NhdGlvbik7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3pvb21fb25jbGljaycsIGxheWVyLnpvb21fb25jbGljayk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCd0aWQnLCBmZWF0dXJlLmlkKTtcblxuICAgICAgICAgIGlmIChtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVxuICAgICAgICAgICAgICAmJiBtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVthY3RpdmVMYXllcl1cbiAgICAgICAgICAgICAgJiYgbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXG4gICAgICAgICAgICAgICYmIGZlYXR1cmVbbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFiZWwgPSBmZWF0dXJlW21hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXV07XG4gICAgICAgICAgfSBlbHNlIGlmIChtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVxuICAgICAgICAgICAgICAmJiBtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVthY3RpdmVMYXllcl1cbiAgICAgICAgICAgICAgJiYgbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXG4gICAgICAgICAgICAgICYmIGZlYXR1cmUudGFnc1xuICAgICAgICAgICAgICAmJiBmZWF0dXJlLnRhZ3NbbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFiZWwgPSBmZWF0dXJlLnRhZ3NbbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gZmVhdHVyZVsnbG9jc3R5bGUnXSB8fCBsYXllci5sb2NzdHlsZTtcbiAgICAgICAgICBpZiAobWFwRGF0YS5wcmlvcml0eUZlYXR1cmVzICYmIG1hcERhdGEucHJpb3JpdHlMb2NzdHlsZSkge1xuICAgICAgICAgICAgaWYgKGJlc3RGZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKSkge1xuICAgICAgICAgICAgICBsb2NzdHlsZSA9IG1hcERhdGEucHJpb3JpdHlMb2NzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsb2NhdGlvblN0eWxlJywgbG9jc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnekluZGV4JywgaSk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgICBpZiAobG9jc3R5bGUgJiYgc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpIHtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldFN0eWxlKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5oaWRlRmVhdHVyZXNXaXRob3V0TGFiZWwpIHtcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIGxhYmVsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmVzLnB1c2goY29udGVudEZlYXR1cmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZXMucHVzaChjb250ZW50RmVhdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnc3R5bGVJZCcsIGxvY3N0eWxlKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5oaWRlRmVhdHVyZXNXaXRob3V0TGFiZWwpIHtcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIGxhYmVsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdW5zdHlsZWRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzW2xvY3N0eWxlXSA9IGxvY3N0eWxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzLnB1c2goY29udGVudEZlYXR1cmUpO1xuICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzW2xvY3N0eWxlXSA9IGxvY3N0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCB0YWcgaW4gZmVhdHVyZS50YWdzKSB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS50YWdzLmhhc093blByb3BlcnR5KHRhZykpIHtcbiAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KHRhZywgZmVhdHVyZS50YWdzW3RhZ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZ2VvanNvbjtcblxuICAgICAgaWYgKGZlYXR1cmVzLmVsZW1lbnRzKSB7XG4gICAgICAgIGdlb2pzb24gPSBvc210b2dlb2pzb24oZmVhdHVyZXMpO1xuICAgICAgICB0aGlzLmdlb0pzb25GZWF0dXJlcyA9IGdlb2pzb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW9qc29uID0gdGhpcy5nZW9Kc29uRmVhdHVyZXM7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXBQcm9qID0gc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgY29udGVudEZlYXR1cmVzID0gbmV3IEdlb0pTT04oKS5yZWFkRmVhdHVyZXMoZ2VvanNvbiwge1xuICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBQcm9qXG4gICAgICB9KTtcbiAgICAgIGxldCBsYWJlbEtleSA9IG1hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXTtcbiAgICAgIGZvciAobGV0IGlkIGluIGNvbnRlbnRGZWF0dXJlcykge1xuICAgICAgICBpZiAoY29udGVudEZlYXR1cmVzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlc1tpZF0uc2V0KCdsb2NfbGlua3VybCcsIGxheWVyLmxvY19saW5rdXJsKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldCgnbG9jc3R5bGUnLCBsYXllci5sb2NzdHlsZSk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmVzW2lkXS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgbGF5ZXIuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlc1tpZF0uc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldCgnem9vbV9vbmNsaWNrJywgbGF5ZXIuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldCgndGlkJywgcGFyc2VJbnQoY29udGVudEZlYXR1cmVzW2lkXS5nZXQoJ2lkJykuc3BsaXQoJy8nKVsxXSkpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlc1tpZF0uc2V0KCdsYWJlbCcsIGNvbnRlbnRGZWF0dXJlc1tpZF0uZ2V0KGxhYmVsS2V5KSk7XG4gICAgICAgICAgaWYgKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldFN0eWxlKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWlzc2luZ1N0eWxlcyAmJiBtaXNzaW5nU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMobWlzc2luZ1N0eWxlcywge1xuICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnN0eWxlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVJZCA9IHVuc3R5bGVkRmVhdHVyZXNbaV0uZ2V0KCdzdHlsZUlkJyk7XG4gICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzW2ldLnNldFN0eWxlKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF0uc3R5bGUpO1xuICAgICAgICAgICAgc2VsZi5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5hZGRGZWF0dXJlKHVuc3R5bGVkRmVhdHVyZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtaXNzaW5nU3R5bGVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnRGZWF0dXJlcyAmJiBjb250ZW50RmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5hZGRGZWF0dXJlcyhjb250ZW50RmVhdHVyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJpY2VTb3J0ZWRGZWF0dXJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgbWFpbiByb3V0ZS5cbiAgICogQHBhcmFtIHJvdXRlUmVzcG9uc2VcbiAgICovXG4gIHNob3dSb3V0ZShyb3V0ZVJlc3BvbnNlKSB7XG5cbiAgICB0aGlzLnNob3dSb3V0ZUxheWVyKHJvdXRlUmVzcG9uc2UsIDApO1xuICAgIHRoaXMuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJvdXRlUmVzcG9uc2UsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYW4gYWx0ZXJuYXRlIHJvdXRlLlxuICAgKiBAcGFyYW0gcm91dGVSZXNwb25zZVxuICAgKiBAcGFyYW0gcm91dGVOdW1iZXJcbiAgICovXG4gIHNob3dBbHRSb3V0ZShyb3V0ZVJlc3BvbnNlLCByb3V0ZU51bWJlcikge1xuICAgIHRoaXMuc2hvd1JvdXRlTGF5ZXIocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIpO1xuICAgIHRoaXMuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJvdXRlUmVzcG9uc2UsIHJvdXRlTnVtYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAqIEBwYXJhbSByb3V0ZVJlc3BvbnNlXG4gICAqIEBwYXJhbSByb3V0ZU51bWJlclxuICAgKi9cbiAgc2hvd1JvdXRlTGF5ZXIocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIpIHtcblxuICAgIHZhciBtYXBWaWV3LFxuICAgICAgd2F5UG9seWxpbmUsXG4gICAgICByb3V0ZUZlYXR1cmVzLFxuICAgICAgYWx0Um91dGVGZWF0dXJlcyxcbiAgICAgIHJpZ2h0UGFkZGluZyxcbiAgICAgIGxlZnRQYWRkaW5nLFxuICAgICAgcm91dGVOdW1iZXIgPSByb3V0ZU51bWJlciB8fCAwO1xuXG4gICAgaWYgKHJvdXRlUmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucm91dGVyV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIG1hcFZpZXcgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcxJyB8fCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzEnIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcyJykgey8vT1NSTS1BUEk6NS54XG4gICAgICAgIHdheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKCk7XG5cbiAgICAgICAgLy8gYWRkIHJvdXRlXG5cbiAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzICkgey8vY2hlY2sgZm9yIGFsdGVybmF0aXZlIHJvdXRlXG4gICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzWzFdKSB7XG4gICAgICAgICAgICBpZiAocm91dGVOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1swXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmdlb21ldHJ5LCB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByb3V0ZUZlYXR1cmVzWzBdLnNldElkKHJvdXRlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJyB8fCByb3V0ZVJlc3BvbnNlLnJvdXRlVHlwZSA9PSAnMCcpey8vT1NSTS1BUEk6PDVcbiAgICAgICAgd2F5UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoe1xuICAgICAgICAgICdmYWN0b3InOiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdmlhcm91dGVfcHJlY2lzaW9uIHx8IDFlNlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgcm91dGVcbiAgICAgICAgcm91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlX2dlb21ldHJ5LCB7XG4gICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICczJyl7XG4gICAgICAgIHdheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKCk7XG4gICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnBhdGhzICYmIHJvdXRlUmVzcG9uc2UucGF0aHNbMV0pIHsvL2NoZWNrIGZvciBhbHRlcm5hdGl2ZSByb3V0ZVxuICAgICAgICAgIGlmIChyb3V0ZU51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2UucGF0aHNbMF0ucG9pbnRzLCB7XG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnBhdGhzWzFdLnBvaW50cywge1xuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzWzBdLnNldElkKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2UucGF0aHNbcm91dGVOdW1iZXJdLnBvaW50cywge1xuICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlRmVhdHVyZXNbMF0uc2V0SWQocm91dGVOdW1iZXIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gXCI0XCIgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzQnKSB7XG4gICAgICAgIHdheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHtcbiAgICAgICAgICAnZmFjdG9yJzogMWU2XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm91dGVSZXNwb25zZS50cmlwICYmIHJvdXRlUmVzcG9uc2UudHJpcC5sZWdzICYmIHJvdXRlUmVzcG9uc2UudHJpcC5sZWdzWzFdKSB7Ly9jaGVjayBmb3IgYWx0ZXJuYXRpdmUgcm91dGVcbiAgICAgICAgICBpZiAocm91dGVOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnRyaXAubGVnc1sxXS5zaGFwZSwge1xuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzWzBdLnNldElkKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS50cmlwLmxlZ3NbMV0uc2hhcGUsIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlc1swXS5zZXRJZCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnRyaXAubGVnc1tyb3V0ZU51bWJlcl0uc2hhcGUsIHtcbiAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZUZlYXR1cmVzWzBdLnNldElkKHJvdXRlTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYWx0ZXJuYXRpdmUgPT0gJzEnKSB7XG4gICAgICAgIGlmICgocm91dGVSZXNwb25zZS5yb3V0ZXMgJiYgKHJvdXRlUmVzcG9uc2Uucm91dGVzLmxlbmd0aCA+IDEpICYmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXSkpIHx8IChyb3V0ZVJlc3BvbnNlLnBhdGhzICYmIChyb3V0ZVJlc3BvbnNlLnBhdGhzLmxlbmd0aCA+IDEpICYmIChyb3V0ZVJlc3BvbnNlLnBhdGhzWzFdKSkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuYWRkRmVhdHVyZXMoYWx0Um91dGVGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyb3V0ZUZlYXR1cmVzKSB7XG4gICAgICAgIHRoaXMucm91dGVyV2F5U291cmNlLmFkZEZlYXR1cmVzKHJvdXRlRmVhdHVyZXMpO1xuICAgICAgICAvLyByZW5kZXIgdmlld1xuICAgICAgICAvLyBzbyB0aGUgcm91dGUgZ2V0cyBkcmF3biBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHNcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW5kZXJTeW5jKCk7XG5cbiAgICAgICAgLy8gYW5pbWF0aW9uXG4gICAgICAgIG1hcFZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIHJlc29sdXRpb246IG1hcFZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcGFkZGluZ1xuXG4gICAgICAgIGxldCB3aWR0aCA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5jc3MoJ3dpZHRoJyk7XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgIHdpZHRoID0gd2lkdGguc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIHdpZHRoID0gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aFswXSA6IHdpZHRoO1xuICAgICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgIDUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdpZHRoID0gNTA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2VudGVyIG9uIHJvdXRlXG4gICAgICAgIG1hcFZpZXcuZml0KFxuICAgICAgICAgIHJvdXRlRmVhdHVyZXNbMF0uZ2V0R2VvbWV0cnkoKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIHBhZGRpbmc6IFs1MCwgd2lkdGgsIDUwLCA1MF1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW50ZXJhY3Rpb24gZm9yIHJvdXRpbmcgaW5zdHJ1Y3Rpb25zLiBXaGVuIGhvdmVyaW5nIHRoZSBpbnN0cnVjdGlvbnMgaW4gdGhlIHBvcnRzaWRlIGNvbnRhaW5lciwgdGhlXG4gICAqIGxvY2F0aW9uIG9mIHRoZSBpbnN0cnVjdGlvbiBpcyBoaWdobGlnaHRlZCBvbiB0aGUgcm91dGUuXG4gICAqIEBwYXJhbSByb3V0ZXJJbnN0cnVjdGlvblxuICAgKi9cbiAgYWRqdXN0SW5zdHJ1Y3Rpb25NYXBJbnRlcmFjdGlvbihyb3V0ZXJJbnN0cnVjdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGZuSXRlbUNsaWNrLFxuICAgICAgZm5JdGVtT3ZlcixcbiAgICAgIGZuSXRlbU91dDtcblxuICAgIGZuSXRlbUNsaWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHNlbGYucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgbGV0IGZlYXR1cmUgPSBzZWxmLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB2YXIgY29vcmRMb25MYXQgPSBlbGVtZW50LmRhdGEoJ3BvcycpO1xuICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgIHZhciBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICB2YXIgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgc3RhcnQgPSBlbGVtZW50LmRhdGEoJ3N0YXJ0Jyk7XG4gICAgICAgIGxldCBlbmQgPSBlbGVtZW50LmRhdGEoJ2VuZCcpO1xuICAgICAgICBpZiAoc3RhcnQsIGVuZCkge1xuICAgICAgICAgIGxldCBnZW9tID0gbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMuc2xpY2Uoc3RhcnQsIGVuZCkpO1xuICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZ2VvbVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgY3VycmVudFpvb20gPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgICBzZWxmLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGdlb20pO1xuICAgICAgICAgIGxldCBhZnRlclpvb20gPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgICBsZXQgZW5kWm9vbSA9IE1hdGgucm91bmQoKGN1cnJlbnRab29tICsgYWZ0ZXJab29tKS8yKTtcbiAgICAgICAgICBlbmRab29tID0gKGVuZFpvb20gPiBhZnRlclpvb20pID8gYWZ0ZXJab29tIDogZW5kWm9vbTtcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldFpvb20oZW5kWm9vbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoc2VsZi5yb3V0ZXJXYXlTb3VyY2UgJiYgc2VsZi5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJykge1xuICAgICAgICB2YXIgZmVhdHVyZSA9IHNlbGYucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKClbZWxlbWVudC5kYXRhKCdwb3MnKV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGYucm91dGVyV2F5U291cmNlICYmIHNlbGYucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA+PSAnMScpIHtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSBzZWxmLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgIHNlbGYucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgIHZhciBjb29yZExvbkxhdCA9IGVsZW1lbnQuZGF0YSgncG9zJyk7XG4gICAgICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgICAgdmFyIG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdHVyZSA9IHNlbGYucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBlbGVtZW50LmRhdGEoJ3N0YXJ0Jyk7XG4gICAgICAgICAgICBsZXQgZW5kID0gZWxlbWVudC5kYXRhKCdlbmQnKTtcbiAgICAgICAgICAgIGlmIChzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH07XG5cbiAgICBmbkl0ZW1PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICB9O1xuXG5cbiAgICBqUXVlcnkoJ1tkYXRhLXN0YXJ0XScsIHJvdXRlckluc3RydWN0aW9uKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuXG4gICAgICB2YXIgJGVsZW1lbnQgPSBqUXVlcnkoZWxlbWVudCk7XG5cbiAgICAgICRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtQ2xpY2soJGVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgICRlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbkl0ZW1PdmVyKCRlbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAkZWxlbWVudC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtT3V0KCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICAgIGpRdWVyeSgnW2RhdGEtcG9zXScsIHJvdXRlckluc3RydWN0aW9uKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuXG4gICAgICB2YXIgJGVsZW1lbnQgPSBqUXVlcnkoZWxlbWVudCk7XG5cbiAgICAgICRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtQ2xpY2soJGVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgICRlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbkl0ZW1PdmVyKCRlbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAkZWxlbWVudC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtT3V0KCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjbGljayBpbnRlcmFjdGlvbiBmb3IgdGhlIHJvdXRlci4gVXBvbiBtYXAgY2xpY2ssIHRoZSBjbGlja2VkIHBvaW50cyBhcmUgY29udmVydGVkIHRvIGxvY2F0aW9ucyBhbmQgdGhlXG4gICAqIHJvdXRlIHNlYXJjaCBpcyBzdGFydGVkLCBhcyBsb25nIGFzIGFsbCBtYW5kYXRvcnkgcHJvcGVydGllcyBhcmUgc2V0LlxuICAgKi9cbiAgYWRkTWFwSW5wdXRJbnRlcmFjdGlvbigpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGNvb3JkaW5hdGU7XG5cbiAgICBzZWxmLmZuTWFwUm91dGVySW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZS5vcGVuICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBmZWF0dXJlID0gc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5mb3JFYWNoRmVhdHVyZUF0UGl4ZWwoZXZ0LnBpeGVsLFxuICAgICAgICAgIGZ1bmN0aW9uIChmZWF0dXJlLCBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmU7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0SWQoKSkge1xuICAgICAgICBsZXQgYWN0aXZlSWQgPSBmZWF0dXJlLmdldElkKCkuc2VhcmNoICYmIGZlYXR1cmUuZ2V0SWQoKS5zZWFyY2goJy8nKSA/IHBhcnNlRmxvYXQoZmVhdHVyZS5nZXRJZCgpLnN1YnN0cmluZyhmZWF0dXJlLmdldElkKCkuc2VhcmNoKCcvJykgKyAxKSkgOiBmZWF0dXJlLmdldElkKCk7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYWN0aXZlSWQ6IGFjdGl2ZUlkLFxuICAgICAgICAgICAgb3BlblJlc3VsdHM6IHRydWVcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPIGJlaGF2ZXMgZGlmZmVyZW50bHkgZm9yIHJvdXRlIG9yIGFyZWEgc2VhcmNoXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGUtZmVhdHVyZS13cmFwcGVyXCIpKSB7XG4gICAgICAgICAgICAgIGxldCBmZWF0dXJlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlLWZlYXR1cmUtd3JhcHBlclwiKTtcbiAgICAgICAgICAgICAgbGV0IGFjdGl2ZUZlYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGkucm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50LmM0Zy1hY3RpdmVcIik7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlV3JhcHBlciAmJiBhY3RpdmVGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVdyYXBwZXIuc2Nyb2xsVG8oMCwgYWN0aXZlRmVhdHVyZS5vZmZzZXRUb3ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZGluYXRlID0gdG9Mb25MYXQoZXZ0LmNvb3JkaW5hdGUpO1xuICAgICAgICAvLyBjbGVhciBvbGQgZmVhdHVyZXNcbiAgICAgICAgc2VsZi5hcmVhU291cmNlLmNsZWFyKCk7XG4gICAgICAgIGlmIChzZWxmLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICAgIC8vIFRPRE8gcm91dGVyIHBlcm1hbGluayB3aWVkZXIgYWt0dWFsaXNpZXJlblxuICAgICAgICAgIGlmIChzZWxmLnN0YXRlLmZyb21BZGRyZXNzID09PSBcIlwiKSB7XG4gICAgICAgICAgICBzZWxmLnNldFJvdXRlRnJvbShjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlua0ZyYWdtZW50cyhcImFkZHJlc3NGcm9tXCIsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlLnRvQWRkcmVzcyA9PT0gXCJcIikge1xuICAgICAgICAgICAgc2VsZi5zZXRSb3V0ZVRvKGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgLy8gc2VsZi51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc1RvXCIsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlLm92ZXJQdEN0ciA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5zdGF0ZS5vdmVyUHRDdHI7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoIXNlbGYuc3RhdGUub3ZlclBvaW50c1tpXSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWRkT3ZlclBvaW50KGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0sIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIgJiYgc2VsZi5zdGF0ZS5hcmVhQWRkcmVzcyA9PT0gXCJcIikge1xuICAgICAgICAgIHNlbGYuc2V0QXJlYVBvaW50KGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLm9uKCdjbGljaycsIHNlbGYuZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbik7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL3JvdXRpbmctY29uc3RhbnQtaTE4bi1lblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UobWFwRGF0YSkge1xuICBpZiAodHlwZW9mIG1hcERhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3dpdGNoIChtYXBEYXRhLmxhbmcpIHtcbiAgICAgIGNhc2UgXCJkZVwiOlxuICAgICAgICByZXR1cm4gcm91dGluZ0NvbnN0YW50c0dlcm1hbjtcbiAgICAgIGNhc2UgXCJlblwiOlxuICAgICAgICByZXR1cm4gcm91dGluZ0NvbnN0YW50c0VuZ2xpc2g7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcm91dGluZ0NvbnN0YW50c0VuZ2xpc2g7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCB2YXIgcm91dGluZ0NvbnN0YW50cyA9IHtcbiAgUk9VVEVSX0lOUFVUX1dSQVBQRVI6ICdjNGctcm91dGVyLWlucHV0LXdyYXBwZXInLFxuICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gIFJPVVRFUl9JTlBVVF9UTzogJ2M0Zy1yb3V0ZXItaW5wdXQtdG8nLFxuICBST1VURVJfSU5QVVRfT1ZFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtb3ZlcicsXG4gIFJPVVRFUl9JTlBVVF9DTEVBUjogJ2M0Zy1yb3V0ZXItaW5wdXQtY2xlYXInLFxuICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXInLFxuICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgUk9VVEVSX09WRVI6ICdjNGctcm91dGVyLW92ZXInLFxuICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgUk9VVEVSX1BST0ZJTEVfVFJVQ0s6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgUk9VVEVSX1BST0ZJTEVfQklLRTogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1iaWtlJyxcbiAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcbiAgUk9VVEVSX1BST0ZJTEVfU0NPT1RFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1zY29vdGVyJyxcblxuICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbScsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24nLFxuICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0U6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlzdGFuY2UnLFxuXG4gIFJPVVRFX0xBWUVSX1ZBTFVFUzogICAnYzRnLXJvdXRpbmctbGF5ZXItdmFsdWVzJyxcbiAgUk9VVEVfTEFZRVJTX1NFTEVDVDogICdjNGctcm91dGluZy1sYXllcnMtc2VsZWN0JyxcbiAgUk9VVEVfVE9HR0xFOiAgICAgICAgICdjNGctcm91dGluZy10b2dnbGUnLFxuICBPVVRQVVRfREVUT1VSOiAgICAgICAgJ2M0Zy1yb3V0aW5nLW91dHB1dCcsXG4gIFJPVVRFX1NUQVJUX0JVVFRPTjogICAnYzRnLXJvdXRlLXNlYXJjaC1zdGFydCcsXG4gIFJPVVRFUl9TRUFSQ0g6ICAgICAgICAnYzRnLXJvdXRlci1zZWFyY2gnLFxuICBST1VURV9QT1NJVElPTjogICAgICAgJ2M0Zy1yb3V0ZXItcG9zaXRpb24nLFxuICBST1VURV9FUlJPUjogICAgICAgICAgJ2M0Zy1yb3V0aW5nLWVycm9yJyxcblxuXG5cbiAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iXSwic291cmNlUm9vdCI6IiJ9