(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../CoreBundle/Resources/public/js/AlertHandler.js":
/*!*********************************************************!*\
  !*** ../CoreBundle/Resources/public/js/AlertHandler.js ***!
  \*********************************************************/
/*! exports provided: AlertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertHandler", function() { return AlertHandler; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
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
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: content,
      type: "error",
      customClass: cssClass ? cssClass : ''
    });
  }

  showInfoDialog(title, content, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: content,
      type: "info",
      customClass: cssClass ? cssClass : ''
    });;
  }

  showInfoActionDialog(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: content,
      type: "info",
      customClass: cssClass ? cssClass : ''
    }).then(function () {
      confirmCallback();
    });
  }

  showInfoActionDialog2(title, content, confirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: content,
      type: "info",
      showLoaderOnConfirm: true,
      customClass: cssClass ? cssClass : '',
      preConfirm: data => {
        confirmCallback();
      } });
  }

  showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: text,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      dangerMode: true,
      customClass: cssClass ? cssClass : ''
    }).then(willDelete => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }
  showConfirmDialogHTML(title, html, confirmCallback, cancelCallback, confirmText, cancelText, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      html: html,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      dangerMode: true,
      customClass: cssClass ? cssClass : ''
    }).then(willDelete => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }

  showPreConfirmDialog(title, text, preConfirmCallback, confirmText, cancelText, cssClass, showLoading) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: text,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      showLoaderOnConfirm: showLoading ? showLoading : true,
      preConfirm: function () {
        return new Promise(function (data) {
          preConfirmCallback();
        });
      },
      allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading(),
      dangerMode: true,
      customClass: cssClass ? cssClass : ''
    });
  }

  showLoadingDialog(title, text, preConfirmCallback, cssClass) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: text,
      showCancelButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      showLoaderOnConfirm: true,
      onBeforeOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.clickConfirm();
      },
      customClass: cssClass ? cssClass : '',
      preConfirm: () => {
        return new Promise(function (data) {
          preConfirmCallback();
        });
      }
    });
  }

  async showSelectDialog(title, objOptions, confirmText, cancelText, cssClass) {
    const { value: selectedValue } = await sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
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

/***/ "../RoutingBundle/Resources/public/js/c4g-router-time-conversions.js":
/*!***************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/c4g-router-time-conversions.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHumanDistance = toHumanDistance;
exports.toHumanTime = toHumanTime;
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters  The distance to convert.
 * @returns {string}
 */
function toHumanDistance(distanceInMeters) {

  var distance, humanDistance;

  distance = parseInt(distanceInMeters, 10);
  distance = distance / 1000;

  if (distance >= 100) {
    humanDistance = distance.toFixed(0) + " " + 'km';
  } else if (distance >= 10) {
    humanDistance = distance.toFixed(1) + " " + 'km';
  } else if (distance >= 0.1) {
    humanDistance = distance.toFixed(2) + " " + 'km';
  } else {
    humanDistance = (distance * 1000).toFixed(0) + " " + 'm';
  }

  return humanDistance;
}

/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */
function toHumanTime(timeInSeconds) {

  var seconds, minutes, hours, humanTime;

  seconds = parseInt(timeInSeconds, 10);
  minutes = parseInt(seconds / 60, 10);
  seconds = seconds % 60;

  hours = parseInt(minutes / 60, 10);
  minutes = minutes % 60;

  if (hours === 0 && minutes === 0) {
    humanTime = seconds + " " + 's';
  } else if (hours === 0) {
    humanTime = minutes + " " + 'min';
  } else {
    humanTime = hours + " " + 'h' + " " + minutes + " " + 'min';
  }

  return humanTime;
}

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/c4g-routing-permalink.js":
/*!*********************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/c4g-routing-permalink.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

var RoutingPermalink = exports.RoutingPermalink = function () {
  function RoutingPermalink(router) {
    _classCallCheck(this, RoutingPermalink);

    this._router = router;
    this.linkFragments = {};
    this.rawFragments = {};
  }

  _createClass(RoutingPermalink, [{
    key: "updateLinkFragments",


    /**
     * Sets one key of this.linkFragments to the given value.
     * @param key
     * @param value
     */
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
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var scope, arrParams, objParams, routerLayers, desiredButton, key, obj, innerKey, singleEntry, cmpValue;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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

                arrParams.forEach(function (_ref2) {
                  var _ref3 = _slicedToArray(_ref2, 2),
                      key = _ref3[0],
                      value = _ref3[1];

                  return objParams[key] = value;
                });
                routerLayers = this.router.props.mapController.data.routerLayers;
                desiredButton = "";
                _context.t0 = regeneratorRuntime.keys(routerLayers);

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
                _context.t2 = regeneratorRuntime.keys(obj);

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
        return _ref.apply(this, arguments);
      }

      return handleInitialParams;
    }()

    /**
     * Checks the URL for the deprecated URL structure and converts it to the current structure.
     */

  }, {
    key: "checkForOldParams",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var strParams, params, arrFragments, fromCoords, toCoords, coords;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
        return _ref4.apply(this, arguments);
      }

      return checkForOldParams;
    }()
  }, {
    key: "handleInitialAreaSearch",
    value: function handleInitialAreaSearch(objParams) {
      this.router.setState({ mode: "area" });
      var center = objParams.a;
      if (center) {
        center = center.split(",");
      }
      var detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;
      if (detour || detour > 1) {
        this.updateLinkFragments("detour", detour);
        // jQuery(this.toggleDetourArea).val(detour);
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
      }
      // activate area view
      jQuery(".c4g-portside-viewtriggerbar .c4g-area-search").click();
    }
  }, {
    key: "handleInitialRouteSearch",
    value: function handleInitialRouteSearch(objParams) {
      this.router.setState({ mode: "route" });

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
      }
      // activate router view
      jQuery(".c4g-portside-viewtriggerbar .c4g-route-search").click();
    }
  }, {
    key: "router",
    get: function get() {
      return this._router;
    },
    set: function set(value) {
      this._router = value;
    }
  }]);

  return RoutingPermalink;
}();

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-autocomplete-input.jsx":
/*!**********************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-autocomplete-input.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutocompleteInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AutocompleteInput = exports.AutocompleteInput = function (_Component) {
  _inherits(AutocompleteInput, _Component);

  function AutocompleteInput(props) {
    _classCallCheck(this, AutocompleteInput);

    var _this = _possibleConstructorReturn(this, (AutocompleteInput.__proto__ || Object.getPrototypeOf(AutocompleteInput)).call(this, props));

    _this.listenerRegistered = false;
    return _this;
  }

  _createClass(AutocompleteInput, [{
    key: "render",
    value: function render() {
      var scope = this;
      var submitFunction = function submitFunction() {
        var field = $("#" + scope.props.cssId);
        field.trigger('change');
        var performSearchCallback = void 0;
        if (scope.props.cssId.indexOf("area") !== -1) {
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performArea();
          };
        } else {
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performViaRoute();
          };
        }

        var value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
        scope.props.router.performSearch(field, value, performSearchCallback);
      };

      var enterListener = function enterListener(event, opt_this) {
        if (event.keyCode === 13) {
          submitFunction();
        } else {
          if ($(event.currentTarget).val().length === 0 && !event.keyCode) {
            //deleted
            if (typeof scope.props.objFunctions.deleteFunction === "function") {
              scope.props.objFunctions.deleteFunction(event.currentTarget, event.currentTarget.id);
            } else {
              // over points
              scope.props.objFunctions[scope.props.index].deleteFunction(event.currentTarget, event.currentTarget.id);
            }
          } else {
            scope.counter = Math.floor(Date.now());
            setTimeout(function () {
              if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
                delete scope.counter;
                if (!scope.props.objSettings.proxyUrl || !scope.props.objSettings.keyAutocomplete) {
                  var value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
                  var field = $("#" + scope.props.cssId);
                  scope.props.router.performSearch(field, value);
                } else {
                  scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
                }
              }
            }, 500);
          }
        }
      };

      return _react2.default.createElement("input", { id: this.props.cssId, type: "search", defaultValue: this.props.value, onKeyDown: enterListener,
        autoComplete: "off" });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var scope = this;
      var arrNames = void 0;
      if (this.props.cssId.indexOf("From") !== -1) {
        arrNames = this.props.containerAddresses.arrFromNames;
      } else if (this.props.cssId.indexOf("To") !== -1) {
        arrNames = this.props.containerAddresses.arrToNames;
      } else if (this.props.cssId.indexOf("Over") !== -1) {
        arrNames = this.props.containerAddresses.arrOverNames[this.props.index];
      } else if (this.props.cssId.indexOf("area") !== -1) {
        arrNames = this.props.containerAddresses.arrAreaNames;
      }

      var inputField = jQuery('#' + this.props.cssId);
      inputField.autocomplete({
        source: arrNames
      });

      // only register listener once
      if (!this.listenerRegistered) {
        inputField.on('autocompleteselect', function (event, ui) {
          if (scope.props.index) {
            scope.props.objFunctions[scope.props.index].selectListener(event, ui);
          } else {
            scope.props.objFunctions.selectListener(event, ui);
          }
        });
        this.listenerRegistered = true;
      }
    }
  }, {
    key: "setCenter",
    value: function setCenter(center) {
      this.objSettings.center = center;
    }
  }, {
    key: "autocompleteAddress",
    value: function autocompleteAddress(input, cssClass) {
      var scope = this;
      var settings = scope.props.objSettings;
      var center = void 0;
      if (settings.center) {
        if (typeof settings.center === "function") {
          var objCenter = settings.center();
          center = objCenter[0] + "," + objCenter[1];
        } else {
          center = settings.center[0] + "," + settings.center[1];
        }
      } else if (settings.bBox) {
        center = (parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2 + "," + (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2;
      }
      var url = void 0;
      if (center) {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input + "&center=" + center;
      } else {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input;
      }
      if (settings.geosearchParams) {
        for (var param in settings.geosearchParams) {
          if (settings.geosearchParams.hasOwnProperty(param)) {
            url += "&" + param + "=" + settings.geosearchParams[param];
          }
        }
      }
      $.ajax({ url: url }).done(function (data) {
        var center = void 0;
        if (settings.center) {
          center = settings.center;
        } else if (settings.bBox) {
          center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
        }
        if (data.length > 0) {

          if (data[0] && data[0].display_name && center) {
            // $(cssId).val(data[0].display_name);
            var arrAddresses = [];
            for (var i in data) {
              if (data.hasOwnProperty(i)) {
                if (settings.bBox && settings.bBox[0]) {
                  if (scope.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                    var distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                    var element = {
                      'dist': distance,
                      'pos': [data[i].lat, data[i].lon],
                      'name': data[i].display_name
                    };
                    arrAddresses.push(element);
                  }
                }
              }
            }
            arrAddresses.sort(function (a, b) {
              return a.dist - b.dist;
            });

            for (var _i in arrAddresses) {
              if (arrAddresses.hasOwnProperty(_i)) {
                if (cssClass.indexOf('from') !== -1) {
                  // do not add twice
                  if (!scope.props.containerAddresses.arrFromNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrFromNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrFromPositions.push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('to') !== -1) {
                  if (!scope.props.containerAddresses.arrToNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrToNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrToPositions.push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('over') !== -1) {
                  if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrOverNames[scope.props.index].push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrOverPositions[scope.props.index].push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('area') !== -1) {
                  if (!scope.props.containerAddresses.arrAreaNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrAreaNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrAreaPositions.push(arrAddresses[_i].pos);
                  }
                } else {
                  console.log("This is weird ¯\\_(ツ)_/¯");
                }
              }
            }
            // trigger keydown event to show autocomplete options
            var _event = jQuery.Event("keydown", { keyCode: 8 });
            $(cssClass).trigger(_event);
          }
          for (var _i2 in data) {
            if (data.hasOwnProperty(_i2)) {
              if (cssClass.indexOf('From') !== -1) {
                // do not add twice
                if (!scope.props.containerAddresses.arrFromNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrFromNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrFromPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('To') !== -1) {
                if (!scope.props.containerAddresses.arrToNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrToNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrToPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('Over') !== -1) {
                if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrOverNames[scope.props.index].push(data[_i2].display_name);
                  scope.props.containerAddresses.arrOverPositions[scope.props.index].push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('area') !== -1) {
                if (!scope.props.containerAddresses.arrAreaNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrAreaNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrAreaPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else {
                console.log("This is weird ¯\\_(ツ)_/¯");
              }
            }
          }
          scope.props.router.setState({
            containerAddresses: scope.props.containerAddresses
          });

          // trigger keydown event to show autocomplete options
          var event = jQuery.Event("keydown", { keyCode: 8 });
          $(cssClass).trigger(event);
        }
      });
    }
  }, {
    key: "isInBoundingBox",
    value: function isInBoundingBox(longitude, latitude, bbox) {
      if (typeof longitude === "string") {
        longitude = parseFloat(longitude);
      }
      if (typeof latitude === "string") {
        latitude = parseFloat(latitude);
      }
      if (bbox[0] < longitude && longitude < bbox[2] && bbox[1] < latitude && latitude < bbox[3]) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return AutocompleteInput;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-popup-buttons.jsx":
/*!************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-popup-buttons.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RouterPopupButtons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-autocomplete-input.jsx");

var _geom = __webpack_require__(/*! ol/geom */ "../RoutingBundle/node_modules/ol/geom.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../RoutingBundle/Resources/public/js/routing-constant-i18n.js");

var _proj = __webpack_require__(/*! ol/proj */ "../RoutingBundle/node_modules/ol/proj.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var RouterPopupButtons = exports.RouterPopupButtons = function (_Component) {
    _inherits(RouterPopupButtons, _Component);

    function RouterPopupButtons(props) {
        _classCallCheck(this, RouterPopupButtons);

        return _possibleConstructorReturn(this, (RouterPopupButtons.__proto__ || Object.getPrototypeOf(RouterPopupButtons)).call(this, props));
    }

    _createClass(RouterPopupButtons, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var routeFrom = function routeFrom() {
                _this2.props.config.router.openControls(true);
                _this2.props.config.router.setMode("route");
                // from address
                var fromCoords = (0, _proj.toLonLat)(_this2.props.config.feature.getGeometry().getCoordinates(), "EPSG:3857");
                _this2.props.config.router.setRouteFrom(fromCoords[0], fromCoords[1]);
            };
            var routeTo = function routeTo() {
                _this2.props.config.router.openControls(true);
                _this2.props.config.router.setMode("route");
                // to address
                var toCoords = (0, _proj.toLonLat)(_this2.props.config.feature.getGeometry().getCoordinates(), "EPSG:3857");
                _this2.props.config.router.setRouteTo(toCoords[0], toCoords[1]);
            };
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("button", { className: "c4g-icon c4g-popup-route-from", title: this.props.config.router.languageConstants.POPUP_ROUTE_FROM, onMouseUp: function onMouseUp() {
                        routeFrom();
                    } }),
                _react2.default.createElement("button", { className: "c4g-icon c4g-popup-route-to", title: this.props.config.router.languageConstants.POPUP_ROUTE_TO, onMouseUp: function onMouseUp() {
                        routeTo();
                    } })
            );
        }
    }]);

    return RouterPopupButtons;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-result-container.jsx":
/*!***************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-result-container.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterResultContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _GPX = __webpack_require__(/*! ol/format/GPX */ "../RoutingBundle/node_modules/ol/format/GPX.js");

var _GPX2 = _interopRequireDefault(_GPX);

var _c4gRouterTimeConversions = __webpack_require__(/*! ../c4g-router-time-conversions */ "../RoutingBundle/Resources/public/js/c4g-router-time-conversions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import {RouterInstructionsContainer} from "./c4g-router-instructions-container.jsx";
// import {RouterFeatureList} from "./c4g-router-feature-list.jsx";


var RouterInstructionsContainer = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.t.bind(null, /*! ./c4g-router-instructions-container.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-instructions-container.jsx", 7));
});
var RouterFeatureList = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.t.bind(null, /*! ./c4g-router-feature-list.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-feature-list.jsx", 7));
});

var RouterResultContainer = exports.RouterResultContainer = function (_Component) {
  _inherits(RouterResultContainer, _Component);

  function RouterResultContainer(props) {
    _classCallCheck(this, RouterResultContainer);

    var _this = _possibleConstructorReturn(this, (RouterResultContainer.__proto__ || Object.getPrototypeOf(RouterResultContainer)).call(this, props));

    _this.clickControl = _this.clickControl.bind(_this);
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
    window.c4gMapsHooks.hook_map_click = window.c4gMapsHooks.hook_map_click || [];
    var scrolltoElement = function scrolltoElement(clickEvent) {
      var feature = _this.props.mapController.map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
        return feature;
      });
      if (feature && feature.get('tid')) {
        var zoomToId = feature.get('tid');
        _this.props.setResultFeat(clickEvent);
        _this.props.setActiveId(zoomToId);
      }
    };
    window.c4gMapsHooks.hook_map_click.push(scrolltoElement);
    return _this;
  }

  _createClass(RouterResultContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var result = "";
      var time = "";
      var distance = "";
      var detour = "";
      var featureCount = "";
      if (this.props.routerInstructions && this.props.routerInstructions.instructions && this.props.mode === "route") {
        time = (0, _c4gRouterTimeConversions.toHumanTime)(this.props.routerInstructions.time);
        distance = (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.routerInstructions.distance);
      } else if (this.props.featureList && this.props.mode === "area") {
        detour = this.props.detour;
        featureCount = this.props.featureList.features.length;
      }

      var routerHeaderContent = "";
      var printFunction = function printFunction() {
        var querySelector = _this2.props.resultMode === "instr" ? '.c4g-route-instructions-wrapper' : '.c4g-route-feature-wrapper';
        var prtContent = document.querySelector(querySelector).cloneNode(true);
        if (_this2.props.resultMode === "instr") {
          var fromAddress = _this2.props.router.state.fromAddress;
          var divFromAddress = document.createElement('div');
          var labelFromAddress = document.createElement('label');
          labelFromAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emFromAddress = document.createElement('em');
          emFromAddress.innerHTML = fromAddress;
          divFromAddress.appendChild(labelFromAddress);
          divFromAddress.appendChild(emFromAddress);
          divFromAddress.appendChild(document.createElement('em'));

          var toAddress = _this2.props.router.state.toAddress;
          var divToAddress = document.createElement('div');
          var labelToAddress = document.createElement('label');
          labelToAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emToAddress = document.createElement('em');
          emToAddress.innerHTML = toAddress;
          divToAddress.appendChild(labelToAddress);
          divToAddress.appendChild(emToAddress);
          divToAddress.appendChild(document.createElement('em'));

          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divFromAddress);
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divToAddress);
        }

        prtContent.querySelector('.c4g-router-print').remove();
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      };
      if (time && distance && this.props.mode === "route") {

        routerHeaderContent = _react2.default.createElement(
          "div",
          { className: "c4g-router-instructions-header" },
          _react2.default.createElement(
            "div",
            { className: "c4g-router-route-time" },
            _react2.default.createElement(
              "label",
              null,
              this.props.lang.ROUTER_VIEW_LABEL_TIME
            ),
            _react2.default.createElement(
              "em",
              null,
              time
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "c4g-router-route-distance" },
            _react2.default.createElement(
              "label",
              null,
              this.props.lang.ROUTER_VIEW_LABEL_DISTANCE
            ),
            _react2.default.createElement(
              "em",
              null,
              distance
            )
          ),
          _react2.default.createElement("button", { className: "c4g-router-download", title: this.props.lang.ROUTER_DOWNLOAD, onMouseUp: function onMouseUp() {
              _this2.exportGpx();
            } }),
          _react2.default.createElement("button", { className: "c4g-router-print", title: this.props.lang.ROUTER_PRINT, onMouseUp: function onMouseUp() {
              printFunction();
            } })
        );
      } else if (detour && featureCount && this.props.mode === "area") {

        routerHeaderContent = _react2.default.createElement(
          "div",
          { className: "c4g-router-instructions-header" },
          _react2.default.createElement(
            "div",
            { className: "c4g-router-area-detour" },
            _react2.default.createElement(
              "label",
              null,
              this.props.lang.AREA_DETOUR,
              ":"
            ),
            _react2.default.createElement(
              "em",
              null,
              detour,
              " km"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "c4g-router-area-featurecount" },
            _react2.default.createElement(
              "label",
              null,
              this.props.lang.AREA_FEATURECOUNT,
              ":"
            ),
            _react2.default.createElement(
              "em",
              null,
              featureCount
            )
          ),
          _react2.default.createElement("button", { className: "c4g-router-print", onMouseUp: function onMouseUp() {
              printFunction();
            } })
        );
      }

      if (this.props.resultMode === "instr" && this.props.routerInstructions && this.props.mode === "route") {
        result = _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "\"loading..\""
            ) },
          _react2.default.createElement(RouterInstructionsContainer, { className: "c4g-route-instructions-wrapper", mapController: this.props.mapController,
            routerInstructions: this.props.routerInstructions, routerWaySource: this.props.routerWaySource,
            routerHintSource: this.props.routerHintSource, open: this.props.open, header: routerHeaderContent })
        );
      } else if (this.props.resultMode === "feat" || this.props.mode === "area" || !this.props.routerInstructions && this.props.featureList) {
        result = _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "\"loading..\""
            ) },
          _react2.default.createElement(RouterFeatureList, { className: "c4g-route-feature-wrapper", activeId: this.props.activeId, setActiveId: this.props.setActiveId,
            routeMode: this.props.mode, layerRoute: this.props.layerRoute, layerArea: this.props.layerArea,
            featureList: this.props.featureList, mapController: this.props.mapController, featureSource: this.props.featureSource,
            layerValueRoute: this.props.layerValueRoute, layerValueArea: this.props.layerValueArea, header: routerHeaderContent })
        );
      }
      if (this.props.open) {
        return _react2.default.createElement(
          "div",
          { className: this.props.className + (this.props.open ? " c4g-open" : " c4g-close") + (this.props.open ? " c4g-details-open" : "") },
          result
        );
      } else {
        return null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
      var container = document.getElementsByClassName(className)[0];
      var controlContainer = document.querySelector(".c4g-router-panel.c4g-open");
      if (controlContainer) {
        controlContainer = controlContainer[0];
      }
      var mapContainer = document.querySelector(".c4g_map")[0];
      var scope = this;
      if (container) {
        if (controlContainer) {
          if (container.offsetHeight + controlContainer.offsetHeight + 84 > mapContainer.offsetHeight) {
            container.style.height = mapContainer.offsetHeight - controlContainer.offsetHeight;
          }
        }
      }

      if (this.props.mode === "area" && this.props.resultMode !== "feat") {
        this.props.router.setState({ resultMode: "feat" });
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.props.setOpen(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.props.setOpen(false);
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.props.open) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "exportGpx",
    value: function exportGpx() {
      var source = this.props.router.routerWaySource;
      var format = new _GPX2.default();
      if (source && source.getFeatures && source.getFeatures()) {
        var strExport = format.writeFeatures(source.getFeatures(), {
          featureProjection: "EPSG:3857",
          dataProjection: "EPSG:4326",
          decimals: 3
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
        element.setAttribute('download', "route.gpx");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
        console.log(strExport);
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      // override parent method
    }
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      // override parent method
    }
  }]);

  return RouterResultContainer;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-view.jsx":
/*!***************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-view.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gRouterResultContainer = __webpack_require__(/*! ./c4g-router-result-container.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-result-container.jsx");

var _routingConstants = __webpack_require__(/*! ./../routing-constants */ "../RoutingBundle/Resources/public/js/routing-constants.js");

var _ol = __webpack_require__(/*! ol */ "../RoutingBundle/node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "../RoutingBundle/node_modules/ol/geom.js");

var _format = __webpack_require__(/*! ol/format */ "../RoutingBundle/node_modules/ol/format.js");

var _proj = __webpack_require__(/*! ol/proj */ "../RoutingBundle/node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "../RoutingBundle/node_modules/ol/style.js");

var _layer = __webpack_require__(/*! ol/layer */ "../RoutingBundle/node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "../RoutingBundle/node_modules/ol/source.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "../RoutingBundle/node_modules/ol/interaction.js");

var _AlertHandler = __webpack_require__(/*! ./../../../../../CoreBundle/Resources/public/js/AlertHandler */ "../CoreBundle/Resources/public/js/AlertHandler.js");

var _c4gRoutingPermalink = __webpack_require__(/*! ./../c4g-routing-permalink */ "../RoutingBundle/Resources/public/js/c4g-routing-permalink.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../RoutingBundle/Resources/public/js/routing-constant-i18n.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gRouterPopupButtons = __webpack_require__(/*! ./c4g-router-popup-buttons.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-popup-buttons.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import {RouterControls} from "./c4g-router-controls.jsx";

// import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx"
// import {RouterProfileSelection} from "./c4g-router-profile-selection.jsx";


var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

var RouterControls = _react2.default.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.t.bind(null, /*! ./c4g-router-controls.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-controls.jsx", 7));
});
// const RouterResultContainer = React.lazy(() => import('./c4g-router-result-container.jsx'));
var RouterProfileSelection = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ./c4g-router-profile-selection.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-profile-selection.jsx", 7));
});
// const RouterPopupButtons = React.lazy(() => import('./c4g-router-popup-buttons.jsx'))

var osmtogeojson = __webpack_require__(/*! osmtogeojson */ "../RoutingBundle/node_modules/osmtogeojson/index.js");

/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */

var RouterView = function (_Component) {
  _inherits(RouterView, _Component);

  function RouterView(props) {
    _classCallCheck(this, RouterView);

    var _this = _possibleConstructorReturn(this, (RouterView.__proto__ || Object.getPrototypeOf(RouterView)).call(this, props));

    _this.setActiveId = _this.setActiveId.bind(_this);
    _this.setOpen = _this.setOpen.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.openControls = _this.openControls.bind(_this);
    _this.resetFromPoint = _this.resetFromPoint.bind(_this);
    _this.resetToPoint = _this.resetToPoint.bind(_this);
    _this.resetAreaPoint = _this.resetAreaPoint.bind(_this);
    _this.toggleResultDetails = _this.toggleResultDetails.bind(_this);
    _this.setResultInstr = _this.setResultInstr.bind(_this);
    _this.setResultFeat = _this.setResultFeat.bind(_this);
    _this.recalculateRoute = _this.recalculateRoute.bind(_this);
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
        "proxyUrl": mapController.data.proxyUrl,
        "keyAutocomplete": mapController.data.autocomplete,
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
      open: props.mapController.data.initial_open_comp === "routing" || false, //ToDO
      openSettings: props.mapController.data.initial_open_comp === "routing" || false, //ToDO
      routerInstructions: {},
      resultMode: props.mapController.data.initialResultMode || "instr"
    };
    _this.popupRouteButtonWrapper = ""; // this is needed because of the different popup handlings
    _this.swapPoints = _this.swapPoints.bind(_this);
    if (mapController.data.usePermalink) {
      _this.permalink = new _c4gRoutingPermalink.RoutingPermalink(_this);
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

  _createClass(RouterView, [{
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
        switcherButtons.push(_react2.default.createElement("button", { id: "c4g-router-button-feature", className: this.state.resultMode === "feat" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultFeat, key: 1, title: "Ergebnisliste anzeigen" }));
      }
      if (instructions && instructions.length > 0 && this.state.mode === "route") {
        switcherButtons.push(_react2.default.createElement("button", { id: "c4g-router-button-instructions", className: this.state.resultMode === "instr" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultInstr, key: 2, title: "Routenhinweise anzeigen" }));
      }
      if (switcherButtons.length > 0) {
        resultSwitcher = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement("button", { className: "c4g-router-hide-form-button " + (this.state.openSettings ? "c4g-active" : "c4g-inactive"), onMouseUp: function onMouseUp() {
              _this2.setState({ openSettings: !_this2.state.openSettings });
            }, title: this.languageConstants.ROUTER_SETTINGS }),
          _react2.default.createElement(
            "div",
            { className: "c4g-router-mode-switch" },
            switcherButtons
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { className: "c4g-router-wrapper" },
        _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            _react.Suspense,
            { fallback: _react2.default.createElement(
                "div",
                null,
                "Loading..."
              ) },
            _react2.default.createElement(Titlebar, { wrapperClass: "c4g-router-header", header: headline, headerClass: "c4g-router-headline",
              detailBtnClass: "c4g-router-extended-options", hideContainer: ".c4g-router-container-right", detailBtnCb: this.toggleDetails, closeBtnClass: "c4g-router-close", closeBtnCb: this.close, closeBtnTitle: this.languageConstants.CLOSE })
          ),
          _react2.default.createElement(
            "div",
            { className: "c4g-router-switcher" },
            _react2.default.createElement(
              "div",
              null,
              resultSwitcher
            ),
            _react2.default.createElement(
              _react.Suspense,
              { fallback: _react2.default.createElement(
                  "div",
                  null,
                  "\"loading...\""
                ) },
              _react2.default.createElement(RouterProfileSelection, { profiles: this.state.profiles, router: this, currentProfile: this.state.currentProfile })
            )
          )
        ),
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "\"loading\""
            ) },
          _react2.default.createElement(RouterControls, { router: this, open: this.state.open && this.state.openSettings, setOpen: this.openControls, profiles: this.state.profiles, className: "c4g-router-panel",
            objSettings: this.state.objSettings, objFunctions: this.objFunctions, overSettings: overSettings, enableOverPoints: this.props.mapController.data.enableOverPoints,
            sources: sources, layers: this.props.mapController.data.routerLayers, containerAddresses: this.state.containerAddresses, resetFunctions: resetFunctions,
            mapController: this.props.mapController, currentProfile: this.state.currentProfile, fromAddress: this.state.fromAddress, switchTargets: this.props.mapController.data.enableTargetSwitch,
            toAddress: this.state.toAddress, areaAddress: this.state.areaAddress, mode: this.state.mode, sliderOptions: sliderOptions, title: this.languageConstants.CTRL_ROUTER, target: this.props.target
          })
        ),
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "\"loading\""
            ) },
          _react2.default.createElement(_c4gRouterResultContainer.RouterResultContainer, { visible: this.state.open, open: this.state.open && this.state.openResults, setOpen: this.setOpen, direction: "bottom", className: "c4g-router-result-container", mapController: this.props.mapController,
            mode: this.state.mode, setResultFeat: this.setResultFeat, routerInstructions: this.state.routerInstructions, featureList: this.state.featureList, routerWaySource: this.state.routerWaySource, detour: this.state.detourArea,
            layerRoute: this.state.layerRoute, layerValueRoute: this.state.layerValueRoute, layerArea: this.state.layerArea, resultMode: this.state.resultMode, router: this,
            layerValueArea: this.state.layerValueArea, routerHintSource: this.state.routerHintSource, featureSource: this.state.featureSource, profile: this.state.currentProfile,
            activeId: this.state.activeId, setActiveId: this.setActiveId, detailOpen: this.state.resultDetailOpen, toggleDetailOpen: this.toggleResultDetails, headline: "Router Ergebnisse", lang: this.languageConstants
          })
        )
      );
    }
  }, {
    key: "setResultInstr",
    value: function setResultInstr(event) {
      event.stopPropagation();
      this.setState({ resultMode: "instr", openResults: true });
    }
  }, {
    key: "setResultFeat",
    value: function setResultFeat(event) {
      event.stopPropagation();
      this.setState({ resultMode: "feat", openResults: true });
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
        this.setState({ resultDetailOpen: false });
      } else {
        this.setState({ resultDetailOpen: true });
      }
    }
  }, {
    key: "openControls",
    value: function openControls(open) {
      if (open) {
        this.props.mapController.setOpenComponent(this);
        this.setState({ open: true, openSettings: true });
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
      } else {
        this.setState({ open: false });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('instr', this.setResultInstr);
      document.removeEventListener('feat', this.setResultFeat);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mapController.data.usePermalink) {
        this.permalink.handleInitialParams();
      }
      if (this.props.mapController.data.router_div) {
        this.setState({ open: true });
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
          this.setState({ openSettings: true });
        }
      }
      if (this.state.openSettings && !prevState.openSettings) {
        this.setState({ openResults: false });
      }
      if (this.state.openResults && !prevState.openResults) {
        this.setState({ openSettings: false });
      }
      if (!this.state.openResults && !this.state.openSettings && prevState.openSettings) {
        this.setState({ openSettings: true });
      }
      if (!this.state.openSettings && !this.state.openResults && prevState.openResults) {
        this.setState({ openResults: true });
      }
      if (this.state.mode === "route" && (!this.state.fromAddress || !this.state.toAddress) && this.state.openResults && prevState.mode === "area") {
        this.setState({ openResults: false });
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
      this.setState({ currentProfile: profile }, this.updateRouteLayersAndPoints);
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
      this.setState({ "activeId": activeId });
    }
  }, {
    key: "setOpen",
    value: function setOpen(bool) {
      this.setState({ "openResults": bool });
    }
  }, {
    key: "setAreaPoint",
    value: function setAreaPoint(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("areaAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({ areaPoint: point }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteFrom",
    value: function setRouteFrom(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("fromAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({ fromPoint: point }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteTo",
    value: function setRouteTo(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("toAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({ toPoint: point }, function () {
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
      overPoints.splice(index, 1, point);

      // overPoints[index] = point;
      this.setState({ overPoints: overPoints }, function () {
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
        this.setState({ mode: mode }, function () {
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
      objSettings.overPtCtr = this.state.overPtCtr;
      // increments the overPtCtr so the popup can render additional overFields
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
      var scope = this;
      // set listener for the autocomplete from field
      var deleteOverListener = function deleteOverListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverPositions[fieldId] = [];
        containerAddresses.arrOverNames[fieldId] = [];
        var overPoints = scope.state.overPoints;
        overPoints.splice(fieldId, 1);
        // delete overPoints[fieldId];
        var overAddresses = scope.state.overAddresses;
        overAddresses.splice(fieldId, 1);
        // delete overAddresses[fieldId];
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
        var overAddresses = void 0,
            overPoints = void 0,
            overValue = void 0;
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

      var changeOverListener = function changeOverListener() {
        // self.fromValue = null;
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
            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_point_locstyle], { done: function done() {
                _tmpFeature3.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[scope.props.mapController.data.router_point_locstyle].style);
              } });
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
      var scope = this;
      // set listener for the autocomplete from field
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

      var changeFromListener = function changeFromListener() {
        // self.fromValue = null;
      };

      objFunctions.fromFunctions = {
        "selectListener": selectFromListener,
        "deleteFunction": deleteFromListener,
        "changeListener": changeFromListener
      };

      // set listener for the autocomplete to field
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

      var changeToListener = function changeToListener() {
        // self.fromValue = null;
      };

      objFunctions.toFunctions = {
        "selectListener": selectToListener,
        "deleteFunction": deleteToListener,
        "changeListener": changeToListener
      };

      // set listener for the autocomplete to field
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

      var changeAreaListener = function changeAreaListener() {
        // self.fromValue = null;
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

        var routeFromButtonSpan = document.createElement('span');
        // routeFromButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_FROM;
        routeFromButton.appendChild(routeFromButtonSpan);

        var routeToButton = document.createElement('button');
        routeToButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);

        var routeToButtonSpan = document.createElement('span');
        // routeToButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_TO;
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
            params.comp.setAddButtons(_c4gRouterPopupButtons.RouterPopupButtons, config);
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
      }
      // check and load location styles via map-proxy
      this.props.mapController.proxy.locationStyleController.loadLocationStyles(styles);
      var mapData = this.props.mapController.data;

      // create router layer object
      this.objLayers = {};
      for (var key in mapData.routerLayers) {
        if (mapData.routerLayers.hasOwnProperty(key)) {
          this.objLayers[key] = mapData.routerLayers[key][Object.keys(mapData.routerLayers[key])[0]];
        }
      }

      // Add router layer(s)
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
        var insertId = void 0;
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
        zIndex: 20
        // declutter: true
      });
      this.routerLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.routerWayLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer, this.routerFeaturesLayer, this.locationsLayer, this.areaLayer]),
        visible: true
      });

      this.props.mapController.map.addLayer(this.routerLayerGroup);
      // this.viewRouter = this.addRouterInterface();
      if (this.props.mapController.data.initialMode === "route" || !this.viewArea) {}
      // this.viewRouter.activate();


      // id => array of instructions, for each route one entry
      this.routeInstructions = {};

      // store some vars for ajax-requests
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
      var square1 = void 0,
          square2 = void 0;
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
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
        var scope, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
                    });
                    // return [parseFloat(response[0].lon), parseFloat(response[0].lat)];
                  } else {
                    // show error hint
                    var alertHandler = new _AlertHandler.AlertHandler();
                    alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                  }
                }).catch(function () {
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
        return _ref.apply(this, arguments);
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
            var deleteButton = $input.next()[0];
            // traverse the dom level until the delete button is found
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
              scope.setState({ fromPoint: point, fromAddress: $input.val() }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } else if (value === "toValue") {
              scope.setState({ toPoint: point, toAddress: $input.val() }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            }

            // TODO wieder einbauen
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
          }
          // TODO update router permalink
          switch (stateProp) {
            case "areaAddress":
              self.setState({ areaAddress: value }, function () {
                if (jQuery("#areaFrom").val() === "") {
                  jQuery("#areaFrom").val(value);
                }
              });
              // self.updateLinkFragments("addressArea", value);
              break;
            case "fromAddress":
              self.setState({ fromAddress: value }, function () {
                if (jQuery("#routingFrom").val() === "") {
                  jQuery("#routingFrom").val(value);
                }
              });
              // update address in link
              // self.updateLinkFragments("addressFrom", value);
              break;
            case "toAddress":
              self.setState({ toAddress: value }, function () {
                if (jQuery("#routingTo").val() === "") {
                  jQuery("#routingTo").val(value);
                }
              });
              // update address in link
              // self.updateLinkFragments("addressTo", value);
              break;
            case "overAddress":
              var overAddresses = self.state.overAddresses;
              overAddresses.splice(opt_index, 1, value);
              self.setState({ overAddresses: overAddresses });
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
      }

      // this.spinner.show();
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
      }
      // this.areaSource.clear();
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
        url += ';' + toCoord;
        // if (this.state.currentProfile) {
        url += '?profile=' + this.state.currentProfile;
        // }

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
      var noClear = arguments[3];

      var self = this;
      if (!noClear) {
        this.routerFeaturesSource.clear();
      }
      // interim clear of feature selection
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
        var geojson = void 0;

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
          wayPolyline = new _format.Polyline();

          // add route

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
          });

          // add route
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
          this.routerWaySource.addFeatures(routeFeatures);
          // render view
          // so the route gets drawn before the animation starts
          this.props.mapController.map.renderSync();

          // animation
          mapView.animate({
            start: +new Date(),
            duration: 2000,
            resolution: mapView.getResolution(),
            center: [0, 0]
            //rotation: Math.PI
          });

          // calculate padding

          var width = jQuery(".c4g-starboard-container").css('width');
          if (width) {
            width = width.split(".");
            width = Array.isArray(width) ? width[0] : width;
            width = parseInt(width) + 50;
          } else {
            width = 50;
          }
          // center on route
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
          coordinate = (0, _proj.toLonLat)(evt.coordinate);
          // clear old features
          self.areaSource.clear();
          if (self.state.mode === "route") {
            // TODO router permalink wieder aktualisieren
            if (self.state.fromAddress === "") {
              self.setRouteFrom(coordinate[0], coordinate[1]);
              // self.updateLinkFragments("addressFrom", coordinate);
              self.recalculateRoute();
            } else if (self.state.toAddress === "") {
              self.setRouteTo(coordinate[0], coordinate[1]);
              // self.updateLinkFragments("addressTo", coordinate);
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

exports.default = RouterView;

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/routing-constant-i18n-de.js":
/*!************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/routing-constant-i18n-de.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */


/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var routingConstantsGerman = exports.routingConstantsGerman = {
  CTRL_ROUTER: 'Router öffnen/schließen',
  ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_OVER_LABEL: 'Zwischenziel',
  ROUTER_TO_LABEL: 'Ziel',
  ROUTER_CLEAR_TITLE: 'Löschen',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Zwischenziel',

  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Umkreissuche',

  ROUTER_SWITCH: 'Wechsel von Start und Ziel',
  ROUTER_OVER: 'Zwischenziel hinzufügen',
  ROUTER_PRINT: 'Routenbeschreibung drucken',
  ROUTER_DOWNLOAD: 'Route als GPX herunterladen',

  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
  ROUTER_VIEW_LABEL_TIME: 'Zeit:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profil:',

  ROUTER_VIEW_ALERT_ERROR: 'Fehler',
  ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
  ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',
  ROUTER_ERROR_POLYLINE: 'Route konnte nicht berechnet werden.',

  POPUP_ROUTE_FROM: 'Route von hier',
  POPUP_ROUTE_TO: 'Route hierhin',

  ROUTER: 'Router',
  ROUTER_N: 'Norden',
  ROUTER_E: 'Ost',
  ROUTER_S: 'Süden',
  ROUTER_W: 'Westen',
  ROUTER_NE: 'Nordost',
  ROUTER_SE: 'Südost',
  ROUTER_SW: 'Südwest',
  ROUTER_NW: 'Nordwest',
  ROUTER_DIRECTION_0: 'Unbekannte Anweisung[ auf <b>%s</b>]',
  ROUTER_DIRECTION_1: 'Geradeaus weiterfahren[ auf <b>%s</b>]',
  ROUTER_DIRECTION_2: 'Leicht rechts abbiegen [auf <b>%s</b>]',
  ROUTER_DIRECTION_3: 'Rechts abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_4: 'Scharf rechts abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_5: 'Wenden[ auf <b>%s</b>]',
  ROUTER_DIRECTION_6: 'Scharf links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_7: 'Links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_8: 'Leicht links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_10: 'Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-2': 'In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-3': 'In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-4': 'In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-5': 'In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-6': 'In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-7': 'In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-8': 'In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-9': 'In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-x': 'In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen',
  ROUTER_DIRECTION_15: 'Sie haben Ihr Ziel erreicht',

  'ROUTER_5.X_TYPE_0': ' %m fahren[ auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' %m dem Straßenverlauf folgen[ als <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Fahren Sie[ auf <b>%s</b>] los',
  'ROUTER_5.X_TYPE_3': ' Das Ziel befindet sich <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Weiterfahren[ auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' %m [auf <b>%s</b> ]auffahren',
  'ROUTER_5.X_TYPE_6': ' %m [auf <b>%s</b> ]abfahren',
  'ROUTER_5.X_TYPE_7': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' %m abbiegen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' %m fahren um auf der Straße zu bleiben',
  'ROUTER_5.X_TYPE_11': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' %m fahren [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' abbiegen[ auf <b>%s</b>]',

  'ROUTER_5.X_MOD_0': 'Uturn',
  'ROUTER_5.X_MOD_1': 'Scharf rechts',
  'ROUTER_5.X_MOD_2': 'Rechts',
  'ROUTER_5.X_MOD_3': 'Leicht rechts',
  'ROUTER_5.X_MOD_4': 'Geradeaus',
  'ROUTER_5.X_MOD_5': 'Leicht links',
  'ROUTER_5.X_MOD_6': 'Links',
  'ROUTER_5.X_MOD_7': 'Scharf links',
  'ROUTER_5.X_MOD_8': 'in der Nähe',

  ROUTER_FROM: 'Start',
  ROUTER_TO: 'Ziel',
  ROUTER_CENTER: 'Zentrum',
  ROUTER_FIND_ROUTE: 'Route finden',
  ROUTER_LOC_ROUTE_TO: 'Route hierhin',
  ROUTER_ROUTEDESC: 'Routenbeschreibung',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distanz',
  ROUTER_TIME: 'Zeit',
  ROUTER_REV_GEOCODING: 'Ermittle Adresse...',
  ROUTER_ERROR_REV_GEOCODING: 'Fehler beim Ermitteln der Adresse',
  ROUTER_SEARCHING: 'Suche Adresse...',
  ROUTER_ERROR_SEARCHING: 'Fehler beim Suchen der Adresse',
  ROUTER_CALC_ROUTE: 'Berechne Route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fehler beim Berechnen der Route',
  ROUTER_SETTINGS: 'Routeneinstellungen',

  //new Router
  AREA_NAME: 'Umkreissuche',
  AREA_PROFILE: 'Profil',
  AREA_FEATURECOUNT: 'Gefundene Elemente',
  ROUTE_DETOUR: 'Umweg',
  AREA_DETOUR: 'Radius',
  INSTRUCTION_HEADLINE: 'Routenbeschreibung',
  FEATURES_HEADLINE: 'Lokationen',
  ROUTE_POSITION: 'Position ermitteln',
  START_ROUTE: 'Suche starten',
  REMOVE_ADDRESS: 'Adresse löschen',

  CAR: 'Auto',
  BIKE: 'Fahrrad',
  ROADBIKE: 'Rennrad',
  MOUNTAINBIKE: 'Mountainbike',
  ELECTRICBIKE: 'E-Bike',
  TRUCK: 'Lastkraftwagen',
  WALK: 'FußgängerIn',
  WANDER: 'WandererIn',
  WHEEL: 'Rollstuhl',
  SCOOT: 'Roller',
  MOTORBIKE: 'Motorrad',

  CLOSE: 'Schließen',

  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/routing-constant-i18n-en.js":
/*!************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/routing-constant-i18n-en.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */


/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var routingConstantsEnglish = exports.routingConstantsEnglish = {
  ROUTER_VIEW_ADDRESS_INPUT: 'Find route',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_TO_LABEL: 'End',
  ROUTER_CLEAR_TITLE: 'Delete',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Interim Goal',

  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Area search',

  ROUTER_SWITCH: 'Switch between Start and End',
  ROUTER_OVER: 'Add interim goal',
  ROUTER_PRINT: 'Print route description',
  ROUTER_DOWNLOAD: 'Download route as GPX',

  POPUP_ROUTE_FROM: 'Route from here',
  POPUP_ROUTE_TO: 'Route to here',

  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Distance:',
  ROUTER_VIEW_LABEL_TIME: 'Time:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profile',

  ROUTER_VIEW_ALERT_Error: 'Error',
  ROUTER_VIEW_ALERT_ADDRESS: 'Address not found.',
  ROUTER_VIEW_ALERT_GOCODING: 'No access to geocoding.',
  ROUTER_ERROR_POLYLINE: 'Could not calculate route.',

  ROUTER: 'Router',
  ROUTER_N: 'Head north',
  ROUTER_E: 'Head east',
  ROUTER_S: 'Head south',
  ROUTER_W: 'Head west',
  ROUTER_NE: 'Head northeast',
  ROUTER_SE: 'Head southeast',
  ROUTER_SW: 'Head southwest',
  ROUTER_NW: 'Head northwest',
  ROUTER_DIRECTION_0: 'unknown direction[ onto <b>%s</b>]',
  ROUTER_DIRECTION_1: 'straight ahead[ onto <b>%s</b>]',
  ROUTER_DIRECTION_2: 'slight right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_3: 'right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_4: 'sharp right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_5: 'turn[ onto <b>%s</b>]',
  ROUTER_DIRECTION_6: 'sharp turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_7: 'turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_8: 'light turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_10: 'drive in direction of <b>%d</b>[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'Take the first exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-2': 'Take the 2nd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-3': 'Take the 3rd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-4': 'Take the 4th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-5': 'Take the 5th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-6': 'Take the 6th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-7': 'Take the 7th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-8': 'Take the 8th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-9': 'Take the 9th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-x': 'Take one of the exits in the roundabout[ onto <b>%s</b>]',
  ROUTER_DIRECTION_15: 'Destination reached',

  'ROUTER_5.X_TYPE_0': ' Turn %m on[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' Follow the course of the road %m[ as <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Depart[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_3': ' Arrive <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Continue driving[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' Take the ramp %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_6': ' Take the ramp %m[ to exit on<b>%s</b>]',
  'ROUTER_5.X_TYPE_7': ' Take the %m site of the fork to[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Take the lane %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' Turn %m to stay on the road',
  'ROUTER_5.X_TYPE_11': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' Follow the road %m',

  'ROUTER_5.X_MOD_0': 'Uturn',
  'ROUTER_5.X_MOD_1': 'sharp right',
  'ROUTER_5.X_MOD_2': 'right',
  'ROUTER_5.X_MOD_3': 'slight right',
  'ROUTER_5.X_MOD_4': 'straight',
  'ROUTER_5.X_MOD_5': 'slight left',
  'ROUTER_5.X_MOD_6': 'left',
  'ROUTER_5.X_MOD_7': 'sharp left',
  'ROUTER_5.X_MOD_8': 'somehow',

  ROUTER_FROM: 'Start',
  ROUTER_TO: 'End',
  ROUTER_CENTER: 'Center',
  ROUTER_FIND_ROUTE: 'Find route',
  ROUTER_LOC_ROUTE_TO: 'Route to here',
  ROUTER_ROUTEDESC: 'Description',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distance',
  ROUTER_TIME: 'Time',
  ROUTER_REV_GEOCODING: 'Identified address...',
  ROUTER_ERROR_REV_GEOCODING: 'Fault! Can not identifiy address',
  ROUTER_SEARCHING: 'Search address...',
  ROUTER_ERROR_SEARCHING: 'Fault! Can not find address',
  ROUTER_CALC_ROUTE: 'Calc route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fault! Can not calc address',
  ROUTER_SETTINGS: 'Routing settings',
  CTRL_ROUTER: 'Toggle router',

  //new Router
  AREA_NAME: 'Search perimeter',
  AREA_PROFILE: 'Profile',
  AREA_FEATURECOUNT: 'Found features',
  ROUTE_DETOUR: 'Detour',
  AREA_DETOUR: 'Radius',
  INSTRUCTION_HEADLINE: 'Route Instructions',
  FEATURES_HEADLINE: 'Locations',
  ROUTE_POSITION: 'Get user position',
  START_ROUTE: 'Start search',

  CAR: 'Car',
  BIKE: 'Bike',
  ROADBIKE: 'Road bike',
  MOUNTAINBIKE: 'Mountain bike',
  ELECTRICBIKE: 'E-Bike',
  TRUCK: 'Truck',
  WALK: 'Pedestrian',
  WANDER: 'Wanderer',
  WHEEL: 'Wheelchair',
  SCOOT: 'Router',
  MOTORBIKE: 'Motorbike',

  CLOSE: 'Close',

  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/routing-constant-i18n.js":
/*!*********************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/routing-constant-i18n.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguage = getLanguage;

var _routingConstantI18nDe = __webpack_require__(/*! ./routing-constant-i18n-de */ "../RoutingBundle/Resources/public/js/routing-constant-i18n-de.js");

var _routingConstantI18nEn = __webpack_require__(/*! ./routing-constant-i18n-en */ "../RoutingBundle/Resources/public/js/routing-constant-i18n-en.js");

/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
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

/***/ "../RoutingBundle/Resources/public/js/routing-constants.js":
/*!*****************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/routing-constants.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */



/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var routingConstants = exports.routingConstants = {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vQ29yZUJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL0FsZXJ0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1yb3V0aW5nLXBlcm1hbGluay5qcyIsIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcG9wdXAtYnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0aW5nLWNvbnN0YW50LWkxOG4uanMiLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0aW5nLWNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJBbGVydEhhbmRsZXIiLCJzaG93RXJyb3JEaWFsb2ciLCJ0aXRsZSIsImNvbnRlbnQiLCJjc3NDbGFzcyIsIlN3YWwiLCJmaXJlIiwidGV4dCIsInR5cGUiLCJjdXN0b21DbGFzcyIsInNob3dJbmZvRGlhbG9nIiwic2hvd0luZm9BY3Rpb25EaWFsb2ciLCJjb25maXJtQ2FsbGJhY2siLCJ0aGVuIiwic2hvd0luZm9BY3Rpb25EaWFsb2cyIiwic2hvd0xvYWRlck9uQ29uZmlybSIsInByZUNvbmZpcm0iLCJkYXRhIiwic2hvd0NvbmZpcm1EaWFsb2ciLCJjYW5jZWxDYWxsYmFjayIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJkYW5nZXJNb2RlIiwid2lsbERlbGV0ZSIsInZhbHVlIiwic2hvd0NvbmZpcm1EaWFsb2dIVE1MIiwiaHRtbCIsInNob3dQcmVDb25maXJtRGlhbG9nIiwicHJlQ29uZmlybUNhbGxiYWNrIiwic2hvd0xvYWRpbmciLCJQcm9taXNlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJpc0xvYWRpbmciLCJzaG93TG9hZGluZ0RpYWxvZyIsImFsbG93RXNjYXBlS2V5Iiwib25CZWZvcmVPcGVuIiwiY2xpY2tDb25maXJtIiwic2hvd1NlbGVjdERpYWxvZyIsIm9iak9wdGlvbnMiLCJzZWxlY3RlZFZhbHVlIiwiaW5wdXQiLCJpbnB1dE9wdGlvbnMiLCJpbnB1dFBsYWNlaG9sZGVyIiwidG9IdW1hbkRpc3RhbmNlIiwidG9IdW1hblRpbWUiLCJkaXN0YW5jZUluTWV0ZXJzIiwiZGlzdGFuY2UiLCJodW1hbkRpc3RhbmNlIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwidGltZUluU2Vjb25kcyIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJodW1hblRpbWUiLCJSb3V0aW5nUGVybWFsaW5rIiwicm91dGVyIiwiX3JvdXRlciIsImxpbmtGcmFnbWVudHMiLCJyYXdGcmFnbWVudHMiLCJrZXkiLCJ1cGRhdGVVcmwiLCJ1cmwiLCJmcmFnbWVudHMiLCJtb2RlIiwiYWRkcmVzc0FyZWEiLCJkZXRvdXJBcmVhIiwic2VhcmNoVHlwZSIsImZvcmNlU3RhcnQiLCJjb21wbGV0ZVVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJkZXRvdXJSb3V0ZSIsInByb3BzIiwibWFwQ29udHJvbGxlciIsImluaXRpYWxQYXJhbXMiLCJzY29wZSIsImNoZWNrRm9yT2xkUGFyYW1zIiwiYXJyUGFyYW1zIiwic3BsaXQiLCJtYXAiLCJwYWlyIiwib2JqUGFyYW1zIiwiZm9yRWFjaCIsInJvdXRlckxheWVycyIsImRlc2lyZWRCdXR0b24iLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsImlubmVyS2V5Iiwic2luZ2xlRW50cnkiLCJjbXBWYWx1ZSIsInMiLCJtYXBMYWJlbCIsImRlc2lyZWRCdXR0b25Sb3V0aW5nIiwibSIsImhhbmRsZUluaXRpYWxBcmVhU2VhcmNoIiwiaGFuZGxlSW5pdGlhbFJvdXRlU2VhcmNoIiwic3RyUGFyYW1zIiwicGFyYW1zIiwiaW5kZXhPZiIsImFyckZyYWdtZW50cyIsInBlcmZvcm1HZW9TZWFyY2giLCJmcm9tQ29vcmRzIiwidG9Db29yZHMiLCJqb2luIiwiY29vcmRzIiwic2V0U3RhdGUiLCJjZW50ZXIiLCJhIiwiZGV0b3VyIiwiZCIsInNlYXJjaHR5cGUiLCJmIiwidXBkYXRlTGlua0ZyYWdtZW50cyIsImxlbmd0aCIsInNldEFyZWFQb2ludCIsImpRdWVyeSIsImNsaWNrIiwiYWYiLCJwYXJzZUZsb2F0IiwiZWxlbSIsImF0IiwidG9nZ2xlRGV0b3VyUm91dGUiLCJ2YWwiLCJ0cmlnZ2VyIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsIkF1dG9jb21wbGV0ZUlucHV0IiwibGlzdGVuZXJSZWdpc3RlcmVkIiwic3VibWl0RnVuY3Rpb24iLCJmaWVsZCIsIiQiLCJjc3NJZCIsInBlcmZvcm1TZWFyY2hDYWxsYmFjayIsInBlcmZvcm1BcmVhIiwicGVyZm9ybVZpYVJvdXRlIiwicGVyZm9ybVNlYXJjaCIsImVudGVyTGlzdGVuZXIiLCJldmVudCIsIm9wdF90aGlzIiwia2V5Q29kZSIsImN1cnJlbnRUYXJnZXQiLCJvYmpGdW5jdGlvbnMiLCJkZWxldGVGdW5jdGlvbiIsImlkIiwiaW5kZXgiLCJjb3VudGVyIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJvYmpTZXR0aW5ncyIsInByb3h5VXJsIiwia2V5QXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQWRkcmVzcyIsImFyck5hbWVzIiwiY29udGFpbmVyQWRkcmVzc2VzIiwiYXJyRnJvbU5hbWVzIiwiYXJyVG9OYW1lcyIsImFyck92ZXJOYW1lcyIsImFyckFyZWFOYW1lcyIsImlucHV0RmllbGQiLCJhdXRvY29tcGxldGUiLCJzb3VyY2UiLCJvbiIsInVpIiwic2VsZWN0TGlzdGVuZXIiLCJzZXR0aW5ncyIsIm9iakNlbnRlciIsImJCb3giLCJnZW9zZWFyY2hQYXJhbXMiLCJwYXJhbSIsImFqYXgiLCJkb25lIiwiZGlzcGxheV9uYW1lIiwiYXJyQWRkcmVzc2VzIiwiaSIsImlzSW5Cb3VuZGluZ0JveCIsImxvbiIsImxhdCIsInNxcnQiLCJlbGVtZW50IiwicHVzaCIsInNvcnQiLCJiIiwiZGlzdCIsImluY2x1ZGVzIiwibmFtZSIsImFyckZyb21Qb3NpdGlvbnMiLCJwb3MiLCJhcnJUb1Bvc2l0aW9ucyIsImFyck92ZXJQb3NpdGlvbnMiLCJhcnJBcmVhUG9zaXRpb25zIiwiY29uc29sZSIsImxvZyIsIkV2ZW50IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJiYm94IiwiQ29tcG9uZW50IiwiUm91dGVyUG9wdXBCdXR0b25zIiwicm91dGVGcm9tIiwiY29uZmlnIiwib3BlbkNvbnRyb2xzIiwic2V0TW9kZSIsImZlYXR1cmUiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwicm91dGVUbyIsImxhbmd1YWdlQ29uc3RhbnRzIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiUm91dGVySW5zdHJ1Y3Rpb25zQ29udGFpbmVyIiwiUmVhY3QiLCJsYXp5IiwiUm91dGVyRmVhdHVyZUxpc3QiLCJSb3V0ZXJSZXN1bHRDb250YWluZXIiLCJjbGlja0NvbnRyb2wiLCJiaW5kIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwiYzRnTWFwc0hvb2tzIiwiaG9va19tYXBfY2xpY2siLCJzY3JvbGx0b0VsZW1lbnQiLCJjbGlja0V2ZW50IiwiZm9yRWFjaEZlYXR1cmVBdFBpeGVsIiwicGl4ZWwiLCJsYXllciIsImdldCIsInpvb21Ub0lkIiwic2V0UmVzdWx0RmVhdCIsInNldEFjdGl2ZUlkIiwicmVzdWx0IiwidGltZSIsImZlYXR1cmVDb3VudCIsInJvdXRlckluc3RydWN0aW9ucyIsImluc3RydWN0aW9ucyIsImZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJyb3V0ZXJIZWFkZXJDb250ZW50IiwicHJpbnRGdW5jdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJyZXN1bHRNb2RlIiwicHJ0Q29udGVudCIsImRvY3VtZW50IiwiY2xvbmVOb2RlIiwic3RhdGUiLCJkaXZGcm9tQWRkcmVzcyIsImNyZWF0ZUVsZW1lbnQiLCJsYWJlbEZyb21BZGRyZXNzIiwiaW5uZXJIVE1MIiwibGFuZyIsIlJPVVRFUl9GUk9NIiwiZW1Gcm9tQWRkcmVzcyIsImFwcGVuZENoaWxkIiwiZGl2VG9BZGRyZXNzIiwibGFiZWxUb0FkZHJlc3MiLCJlbVRvQWRkcmVzcyIsInJlbW92ZSIsIldpblByaW50Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJmb2N1cyIsInByaW50IiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX0RPV05MT0FEIiwiZXhwb3J0R3B4IiwiUk9VVEVSX1BSSU5UIiwiQVJFQV9ERVRPVVIiLCJBUkVBX0ZFQVRVUkVDT1VOVCIsInJvdXRlcldheVNvdXJjZSIsInJvdXRlckhpbnRTb3VyY2UiLCJhY3RpdmVJZCIsImxheWVyUm91dGUiLCJsYXllckFyZWEiLCJmZWF0dXJlU291cmNlIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29udHJvbENvbnRhaW5lciIsIm1hcENvbnRhaW5lciIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiaGVpZ2h0Iiwic2V0T3BlbiIsImZvcm1hdCIsIkdQWCIsImdldEZlYXR1cmVzIiwic3RyRXhwb3J0Iiwid3JpdGVGZWF0dXJlcyIsImZlYXR1cmVQcm9qZWN0aW9uIiwiZGF0YVByb2plY3Rpb24iLCJkZWNpbWFscyIsInNldEF0dHJpYnV0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpc3BsYXkiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJUaXRsZWJhciIsIlJvdXRlckNvbnRyb2xzIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsIm9zbXRvZ2VvanNvbiIsInJlcXVpcmUiLCJSb3V0ZXJWaWV3IiwicmVzZXRGcm9tUG9pbnQiLCJyZXNldFRvUG9pbnQiLCJyZXNldEFyZWFQb2ludCIsInRvZ2dsZVJlc3VsdERldGFpbHMiLCJzZXRSZXN1bHRJbnN0ciIsInJlY2FsY3VsYXRlUm91dGUiLCJhcnJQcm9maWxlcyIsInJvdXRlcl9wcm9maWxlcyIsInNob3dGZWF0dXJlcyIsIk9iamVjdCIsImtleXMiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiZ2Vvc2VhcmNoIiwib3BlblJlc3VsdHMiLCJhcmVhQWRkcmVzcyIsImluaXRpYWwiLCJpbml0aWFsTW9kZSIsIm92ZXJQdEN0ciIsIm92ZXJBZGRyZXNzZXMiLCJ1bmRlZmluZWQiLCJhcmVhUG9pbnQiLCJmcm9tUG9pbnQiLCJ0b1BvaW50Iiwib3ZlclBvaW50cyIsInByb2ZpbGVzIiwiY3VycmVudFByb2ZpbGUiLCJpbml0aWFsX29wZW5fY29tcCIsIm9wZW5TZXR0aW5ncyIsImluaXRpYWxSZXN1bHRNb2RlIiwicG9wdXBSb3V0ZUJ1dHRvbldyYXBwZXIiLCJzd2FwUG9pbnRzIiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwiaW5pdCIsIm1hcERhdGEiLCJzb3VyY2VzIiwid2F5U291cmNlIiwiaGludFNvdXJjZSIsInNsaWRlck9wdGlvbnMiLCJtaW4iLCJtYXgiLCJyZXNldEZ1bmN0aW9ucyIsImZyb20iLCJ0byIsImFyZWEiLCJvdmVyU2V0dGluZ3MiLCJjcmVhdGVPdmVyU2V0dGluZ3MiLCJoZWFkbGluZSIsInJvdXRlckhlYWRsaW5lIiwiUk9VVEVSX0RFRkFVTFRfSEVBRExJTkVfUk9VVEUiLCJhcmVhSGVhZGxpbmUiLCJST1VURVJfREVGQVVMVF9IRUFETElORV9BUkVBIiwicmVzdWx0U3dpdGNoZXIiLCJzd2l0Y2hlckJ1dHRvbnMiLCJST1VURVJfU0VUVElOR1MiLCJ0b2dnbGVEZXRhaWxzIiwiQ0xPU0UiLCJlbmFibGVPdmVyUG9pbnRzIiwiZW5hYmxlVGFyZ2V0U3dpdGNoIiwiQ1RSTF9ST1VURVIiLCJ0YXJnZXQiLCJyZXN1bHREZXRhaWxPcGVuIiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGVyQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNldE9wZW5Db21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlSW5pdGlhbFBhcmFtcyIsInJvdXRlcl9kaXYiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJvdXRlckxheWVyR3JvdXAiLCJzZXRWaXNpYmxlIiwibW9kV2F5SW50ZXJhY3Rpb24iLCJzZXRBY3RpdmUiLCJoaWRlT3RoZXJDb21wb25lbnRzIiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsInByb2ZpbGUiLCJ1cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cyIsImxheWVyVmFsdWVzIiwibmV3RGVmYXVsdExheWVyVmFsdWUiLCJsYXllclZhbHVlIiwiYm9vbCIsInBlcmZvcm1SZXZlcnNlU2VhcmNoIiwicG9pbnQiLCJQb2ludCIsInNwbGljZSIsImxvY2F0aW9uU291cmNlIiwibG9jYXRpb25zU291cmNlIiwiY2xlYXIiLCJuZXdGcm9tUG9pbnQiLCJuZXdGcm9tQWRkcmVzcyIsIm5ld1RvUG9pbnQiLCJuZXdUb0FkZHJlc3MiLCJ0bXBOYW1lcyIsInRtcFBvcyIsIm92ZXJGdW5jdGlvbiIsImNyZWF0ZUF1dG9jb21wbGV0ZUZ1bmN0aW9uc0Zvck92ZXJGaWVsZCIsImZpZWxkSWQiLCJkZWxldGVPdmVyTGlzdGVuZXIiLCJzZWxlY3RPdmVyTGlzdGVuZXIiLCJvdmVyVmFsdWUiLCJpdGVtIiwiZmluZEluZGV4IiwiZGFuZ2VyIiwiY29vcmQiLCJjaGFuZ2VPdmVyTGlzdGVuZXIiLCJhcmVhU291cmNlIiwidG1wRmVhdHVyZSIsIkZlYXR1cmUiLCJnZW9tZXRyeSIsImNsb25lIiwidHJhbnNmb3JtIiwicm91dGVyX2Zyb21fbG9jc3R5bGUiLCJwcm94eSIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwic2V0U3R5bGUiLCJkb25lRnVuY3Rpb24iLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJhZGRGZWF0dXJlIiwicm91dGVyX3RvX2xvY3N0eWxlIiwicm91dGVyX2ludGVyaW1fbG9jc3R5bGUiLCJyb3V0ZVN0YXJ0QnV0dG9uIiwicm91dGVyX3BvaW50X2xvY3N0eWxlIiwiZGVsZXRlRnJvbUxpc3RlbmVyIiwic2VsZWN0RnJvbUxpc3RlbmVyIiwiZnJvbVZhbHVlIiwiY2hhbmdlRnJvbUxpc3RlbmVyIiwiZnJvbUZ1bmN0aW9ucyIsImRlbGV0ZVRvTGlzdGVuZXIiLCJzZWxlY3RUb0xpc3RlbmVyIiwidG9WYWx1ZSIsImNoYW5nZVRvTGlzdGVuZXIiLCJ0b0Z1bmN0aW9ucyIsImRlbGV0ZUFyZWFMaXN0ZW5lciIsInNlbGVjdEFyZWFMaXN0ZW5lciIsImFyZWFWYWx1ZSIsImNoYW5nZUFyZWFMaXN0ZW5lciIsImFyZWFGdW5jdGlvbnMiLCJjcmVhdGVQb3B1cFdyYXBwZXIiLCJvYmpQb3B1cCIsInJvdXRpbmdIYW5kbGVyIiwiaGFzQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJyb3V0ZUJ1dHRvbldyYXBwZXIiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwicm91dGVGcm9tQnV0dG9uIiwiSUNPTiIsInJvdXRlRnJvbUJ1dHRvblNwYW4iLCJyb3V0ZVRvQnV0dG9uIiwicm91dGVUb0J1dHRvblNwYW4iLCJwcm94eV9hcHBlbmRQb3B1cCIsInBvcHVwIiwiY29tcG9uZW50cyIsInJvdXRpbmdfbGluayIsInBvcHVwSGFuZGxpbmciLCJjNGdNYXBzUG9wdXAiLCIkY29udGVudCIsImFwcGVuZCIsImNvbXAiLCJzZXRBZGRCdXR0b25zIiwic2VsZiIsInN0eWxlcyIsImFyZWFDZW50ZXJMb2NzdHlsZSIsImNsaWNrTG9jc3R5bGUiLCJwcmlvcml0eUZlYXR1cmVzIiwicHJpb3JpdHlMb2NzdHlsZSIsIm9iakxheWVycyIsInJvdXRpbmdBbHRXYXlTb3VyY2UiLCJWZWN0b3JTb3VyY2UiLCJyb3V0ZXJXYXlMYXllciIsIlZlY3RvciIsInpJbmRleCIsIlN0eWxlIiwic3Ryb2tlIiwiU3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsInJvdXRlckFsdFdheUxheWVyIiwic2VsZWN0SW50ZXJhY3Rpb24iLCJTZWxlY3QiLCJzZWxlY3RlZCIsImdldFR5cGUiLCJzaG93QWx0Um91dGUiLCJyZXNwb25zZSIsImdldElkIiwiY2xpY2tGZWF0dXJlRW50cnlGb3JGZWF0dXJlIiwibWFwU2VsZWN0SW50ZXJhY3Rpb24iLCJNb2RpZnkiLCJtb2RpZnlTdGFydFBvaW50IiwibWFwQnJvd3NlckV2ZW50IiwiY29vcmRpbmF0ZSIsIm92ZXJQb2ludCIsIm1pbkRpc3RhbmNlIiwiSW5maW5pdHkiLCJpbnNlcnRJZCIsImFycktleXMiLCJjYWxjRGlzdGFuY2UiLCJkaXN0U3RhcnQiLCJkaXN0RW5kIiwiZGlzdFN0YXJ0T2xkIiwib3ZlckVuZEluZGV4IiwiZGlzdEVuZE9sZCIsImFkZE92ZXJQb2ludCIsImFkZEludGVyYWN0aW9uIiwicm91dGVySGludExheWVyIiwicmVzb2x1dGlvbiIsImxvY2F0aW9uc0xheWVyIiwiYXJlYUxheWVyIiwicm91dGVyRmVhdHVyZXNTb3VyY2UiLCJyb3V0ZXJGZWF0dXJlc0xheWVyIiwiR3JvdXAiLCJsYXllcnMiLCJDb2xsZWN0aW9uIiwidmlzaWJsZSIsImFkZExheWVyIiwidmlld0FyZWEiLCJyb3V0ZUluc3RydWN0aW9ucyIsInByb2ZpbGVJZCIsImdlb1NlYXJjaEFwaSIsImFwaSIsImdlb1JldmVyc2VTZWFyY2hBcGkiLCJnZW9zZWFyY2hfcmV2ZXJzZSIsInJvdXRpbmdBcGkiLCJyb3V0aW5nIiwicGVybWFsaW5rSGFuZGxlciIsImNyZWF0ZUF1dG9jb21wbGV0ZUZ1bmN0aW9ucyIsImFkZFBvcHVwSG9vayIsImFkZE1hcElucHV0SW50ZXJhY3Rpb24iLCJwb2ludDEiLCJwb2ludDIiLCJzcXVhcmUxIiwic3F1YXJlMiIsInBvdyIsInJvdXRlUmVzcG9uc2UiLCJyb3V0ZU51bWJlciIsInJvdXRlckluc3RydWN0aW9uIiwicm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyIiwicm91dGVySW5zdHJ1Y3Rpb25zSHRtbCIsImluc3RyIiwic3RyVHlwZSIsInN0ck1vZCIsInJvd3N0eWxlIiwiaiIsInJvdXRlX25hbWVfMCIsInJvdXRlX25hbWVfMSIsInRvdGFsX2Rpc3RhbmNlIiwidG90YWxfdGltZSIsInNob3dJbnN0cnVjdGlvbnMiLCJyb3V0aW5nQ29uc3RhbnRzIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJjc3MiLCJyb3V0ZXJfYXBpX3NlbGVjdGlvbiIsInJvdXRlVHlwZSIsInJvdXRlcyIsImxlZ3MiLCJzdW1tYXJ5IiwiZHVyYXRpb24iLCJyb3V0ZV9uYW1lIiwicm91dGVfc3VtbWFyeSIsInNlZ21lbnRzIiwiY3VycmVudFNlZ21lbnQiLCJzdGVwcyIsImN1cnJlbnRTdGVwIiwicGF0aHMiLCJjdXJyZW50SW5zdHJ1Y3Rpb24iLCJpbnN0cnVjdGlvbiIsInNpZ24iLCJ0cmlwIiwibWFuZXV2ZXJzIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEUiLCJyb3V0ZVByb2ZpbGUiLCJhY3RpdmUiLCJBcnJheSIsImlzQXJyYXkiLCJST1VURVJfVklFV19MQUJFTF9QUk9GSUxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRSIsImFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb24iLCJhZGRyZXNzIiwiZW5jb2RlVVJJIiwic2VhcmNoS2V5IiwiZmV0Y2giLCJqc29uIiwiYWxlcnRIYW5kbGVyIiwibGFuZ0NvbnN0YW50cyIsIlJPVVRFUl9WSUVXX0FMRVJUX0VSUk9SIiwiUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyIsImNhdGNoIiwiJGlucHV0Iiwib3B0X2NhbGxiYWNrIiwiYm91bmRzIiwidmlld2JveCIsImNhbGN1bGF0ZUV4dGVudCIsImdldFNpemUiLCJnZXRQcm9qZWN0aW9uIiwiZGVsZXRlQnV0dG9uIiwibmV4dCIsIiRidXR0b25PdmVyIiwicHJvcCIsImZhaWwiLCJzdGF0ZVByb3AiLCJvcHRfaW5kZXgiLCJyZXZlcnNlS2V5Iiwicm9hZCIsInBhdGgiLCJwZWRlc3RyaWFuIiwiaG91c2VfbnVtYmVyIiwiY2l0eSIsInRvd24iLCJmcm9tQ29vcmQiLCJhcmVhQWpheCIsImFib3J0Iiwic29ydGVkRmVhdHVyZXMiLCJ0b0Nvb3JkIiwib3ZlckNvb3JkIiwicHJvcHQiLCJyb3V0ZUFqYXgiLCJlcnJvciIsInNob3dSb3V0ZUxheWVyIiwic2hvd1JvdXRlSW5zdHJ1Y3Rpb25zIiwiZWxlbWVudHMiLCJhbHdheXMiLCJjbG9zZUFmdGVyU2VhcmNoIiwic2hvd1JvdXRlIiwiRXhjZXB0aW9uIiwibGF5ZXJJZCIsIm5vQ2xlYXIiLCJhY3RpdmVMYXllciIsImdldEFjdGl2ZUxheWVyIiwibGF5ZXJEYXRhIiwidW5zdHlsZWRGZWF0dXJlcyIsImNvbnRlbnRGZWF0dXJlcyIsIm1pc3NpbmdTdHlsZXMiLCJwcmljZVNvcnRlZEZlYXR1cmVzIiwic2xpY2UiLCJiZXN0RmVhdHVyZXMiLCJiZXN0RmVhdHVyZUlkcyIsInVwcGVyQm91bmQiLCJmZWF0dXJlTG9vcCIsImxhYmVsIiwicmVzdWx0Q29vcmRpbmF0ZSIsImNvbnRlbnRGZWF0dXJlIiwic2V0SWQiLCJzZXQiLCJsb2NfbGlua3VybCIsImxvY3N0eWxlIiwiaG92ZXJfbG9jYXRpb24iLCJob3Zlcl9zdHlsZSIsInpvb21fb25jbGljayIsInRhZ3MiLCJoaWRlRmVhdHVyZXNXaXRob3V0TGFiZWwiLCJ0YWciLCJnZW9qc29uIiwiZ2VvSnNvbkZlYXR1cmVzIiwibWFwUHJvaiIsIkdlb0pTT04iLCJyZWFkRmVhdHVyZXMiLCJsYWJlbEtleSIsInN0eWxlSWQiLCJhZGRGZWF0dXJlcyIsIm1hcFZpZXciLCJ3YXlQb2x5bGluZSIsInJvdXRlRmVhdHVyZXMiLCJhbHRSb3V0ZUZlYXR1cmVzIiwicmlnaHRQYWRkaW5nIiwibGVmdFBhZGRpbmciLCJQb2x5bGluZSIsInJvdXRlcl92aWFyb3V0ZV9wcmVjaXNpb24iLCJyb3V0ZV9nZW9tZXRyeSIsInBvaW50cyIsInNoYXBlIiwicm91dGVyX2FsdGVybmF0aXZlIiwicmVuZGVyU3luYyIsImFuaW1hdGUiLCJzdGFydCIsImdldFJlc29sdXRpb24iLCJmaXQiLCJzaXplIiwicGFkZGluZyIsImZuSXRlbUNsaWNrIiwiZm5JdGVtT3ZlciIsImZuSXRlbU91dCIsImNvb3JkaW5hdGVzIiwiY29vcmRMb25MYXQiLCJzdHJpbmdsb25sYXQiLCJuZXdDb29yZCIsImN1cnJlbnRIaW50RmVhdHVyZSIsIm9wdGlvbnMiLCJzZXRDZW50ZXIiLCJlbmQiLCJnZW9tIiwiTGluZVN0cmluZyIsImN1cnJlbnRab29tIiwiZ2V0Wm9vbSIsImFmdGVyWm9vbSIsImVuZFpvb20iLCJyb3VuZCIsInNldFpvb20iLCJlYWNoIiwiJGVsZW1lbnQiLCJmbk1hcFJvdXRlckludGVyYWN0aW9uIiwiZXZ0Iiwic2VhcmNoIiwic3Vic3RyaW5nIiwiZmVhdHVyZVdyYXBwZXIiLCJhY3RpdmVGZWF0dXJlIiwic2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJyb3V0aW5nQ29uc3RhbnRzR2VybWFuIiwiUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCIsIlJPVVRFUl9GUk9NX0xBQkVMIiwiUk9VVEVSX09WRVJfTEFCRUwiLCJST1VURVJfVE9fTEFCRUwiLCJST1VURVJfQ0xFQVJfVElUTEUiLCJST1VURVJfQ0xFQVJfSFRNTCIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwiUk9VVEVSX1NXSVRDSCIsIlJPVVRFUl9PVkVSIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVJfRVJST1JfUE9MWUxJTkUiLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX1RPIiwiUk9VVEVSX0NFTlRFUiIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiUk9VVEVSX0xPQ19ST1VURV9UTyIsIlJPVVRFUl9ST1VURURFU0MiLCJST1VURVJfUk9VVEVOQU1FIiwiUk9VVEVSX0RJU1RBTkNFIiwiUk9VVEVSX1RJTUUiLCJST1VURVJfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX1NFQVJDSElORyIsIlJPVVRFUl9FUlJPUl9TRUFSQ0hJTkciLCJST1VURVJfQ0FMQ19ST1VURSIsIlJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFIiwiQVJFQV9OQU1FIiwiQVJFQV9QUk9GSUxFIiwiUk9VVEVfREVUT1VSIiwiSU5TVFJVQ1RJT05fSEVBRExJTkUiLCJGRUFUVVJFU19IRUFETElORSIsIlJPVVRFX1BPU0lUSU9OIiwiU1RBUlRfUk9VVEUiLCJSRU1PVkVfQUREUkVTUyIsIkNBUiIsIkJJS0UiLCJST0FEQklLRSIsIk1PVU5UQUlOQklLRSIsIkVMRUNUUklDQklLRSIsIlRSVUNLIiwiV0FMSyIsIldBTkRFUiIsIldIRUVMIiwiU0NPT1QiLCJNT1RPUkJJS0UiLCJOT05FIiwicm91dGluZ0NvbnN0YW50c0VuZ2xpc2giLCJST1VURVJfVklFV19BTEVSVF9FcnJvciIsImdldExhbmd1YWdlIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfT1ZFUiIsIlJPVVRFUl9JTlBVVF9DTEVBUiIsIlJPVVRFUl9CVVRUT05CQVIiLCJST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUiIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX1RSVUNLIiwiUk9VVEVSX1BST0ZJTEVfQklLRSIsIlJPVVRFUl9QUk9GSUxFX0ZPT1QiLCJST1VURVJfUFJPRklMRV9XSEVFTENIQUlSIiwiUk9VVEVSX1BST0ZJTEVfU0NPT1RFUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTSIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFIiwiUk9VVEVfTEFZRVJfVkFMVUVTIiwiUk9VVEVfTEFZRVJTX1NFTEVDVCIsIlJPVVRFX1RPR0dMRSIsIk9VVFBVVF9ERVRPVVIiLCJST1VURV9TVEFSVF9CVVRUT04iLCJST1VURVJfU0VBUkNIIiwiUk9VVEVfRVJST1IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JPLE1BQU1BLFlBQU4sQ0FBbUI7O0FBRXhCQyxrQkFBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDeENDLHNEQUFJQSxDQUFDQyxJQUFMLENBQVU7QUFDUkosYUFBT0EsS0FEQztBQUVSSyxZQUFNSixPQUZFO0FBR1JLLFlBQU0sT0FIRTtBQUlSQyxtQkFBYUwsV0FBV0EsUUFBWCxHQUFzQjtBQUozQixLQUFWO0FBTUQ7O0FBRURNLGlCQUFlUixLQUFmLEVBQXNCQyxPQUF0QixFQUErQkMsUUFBL0IsRUFBeUM7QUFDdkNDLHNEQUFJQSxDQUFDQyxJQUFMLENBQVU7QUFDUkosYUFBT0EsS0FEQztBQUVSSyxZQUFNSixPQUZFO0FBR1JLLFlBQU0sTUFIRTtBQUlSQyxtQkFBYUwsV0FBV0EsUUFBWCxHQUFzQjtBQUozQixLQUFWLEVBS0c7QUFDSjs7QUFFRE8sdUJBQXFCVCxLQUFyQixFQUE0QkMsT0FBNUIsRUFBcUNTLGVBQXJDLEVBQXNEUixRQUF0RCxFQUFnRTtBQUM5REMsc0RBQUlBLENBQUNDLElBQUwsQ0FBVTtBQUNSSixhQUFPQSxLQURDO0FBRVJLLFlBQU1KLE9BRkU7QUFHUkssWUFBTSxNQUhFO0FBSVJDLG1CQUFhTCxXQUFXQSxRQUFYLEdBQXNCO0FBSjNCLEtBQVYsRUFLR1MsSUFMSCxD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QUU1QkMsMEJBQXdCLDRCQUZJO0FBRzVCQyxxQkFBbUIsdUJBSFM7QUFJNUJDLG1CQUFpQixxQkFKVztBQUs1QkMscUJBQW1CLHVCQUxTO0FBTTVCQyxzQkFBb0Isd0JBTlE7QUFPNUJDLG9CQUFrQixzQkFQVTtBQVE1QkMsOEJBQTRCLGdDQVJBO0FBUzVCQywrQkFBNkIsaUNBVEQ7QUFVNUIzTyw4QkFBNEIsZ0NBVkE7O0FBWTVCc0ssaUJBQWUsbUJBWmE7QUFhNUJDLGVBQWEsaUJBYmU7QUFjNUJqZCxnQkFBYyxrQkFkYzs7QUFnQjVCc2hCLHNCQUFvQix3QkFoQlE7QUFpQjVCQyx3QkFBc0Isd0JBakJNO0FBa0I1QkMsdUJBQXFCLHlCQWxCTztBQW1CNUJDLHVCQUFxQix5QkFuQk87QUFvQjVCQyw2QkFBMkIsK0JBcEJDO0FBcUI1QkMsMEJBQXdCLDRCQXJCSTs7QUF1QjVCdk4sNkJBQTJCLDhCQXZCQztBQXdCNUJ3Tiw0QkFBMEIsNkJBeEJFO0FBeUI1QkMsZ0NBQThCLGtDQXpCRjtBQTBCNUJDLGlDQUErQixtQ0ExQkg7QUEyQjVCQyxzQ0FBb0MsdUNBM0JSO0FBNEI1QkMsMkNBQXlDLDRDQTVCYjtBQTZCNUJDLDJDQUF5QyxrQ0E3QmI7QUE4QjVCQywrQ0FBNkMsc0NBOUJqQjs7QUFnQzVCQyxzQkFBc0IsMEJBaENNO0FBaUM1QkMsdUJBQXNCLDJCQWpDTTtBQWtDNUJDLGdCQUFzQixvQkFsQ007QUFtQzVCQyxpQkFBc0Isb0JBbkNNO0FBb0M1QkMsc0JBQXNCLHdCQXBDTTtBQXFDNUJDLGlCQUFzQixtQkFyQ007QUFzQzVCN0Msa0JBQXNCLHFCQXRDTTtBQXVDNUI4QyxlQUFzQixtQkF2Q007O0FBMkM1QmhDLFFBQU0sRUEzQ3NCLENBMkNuQjtBQTNDbUIsQ0FBdkIsQyxDQTRDSiw2QiIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY29uNGdpcyAtIHRoZSBnaXMta2l0XG4gKlxuICogQHBhY2thZ2UgICBjb240Z2lzXG4gKiBAYXV0aG9yICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICBHTlUvTEdQTCBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbGdwbC0zLjAuaHRtbFxuICogQGNvcHlyaWdodCBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnbiAyMDExIC0gMjAxOFxuICogQGxpbmsgICAgICBodHRwczovL3d3dy5rdWVzdGVuc2NobWllZGUuZGVcbiAqL1xuXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8qKlxuICogVGhlIFwiY3NzQ2xhc3NcIiBwYXJhbWV0ZXIgaW4gdGhlIGZ1bmN0aW9ucyBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdC4gSWYgaXQncyBhIHN0cmluZywgaXQgd2lsbCBiZSBhcHBsaWVkXG4gKiBhcyBjbGFzcyBmb3IgdGhlIHBvcHVwLiBJZiBhbiBvYmplY3QgaXMgcGFzc2VkLCB0aGUgY2xhc3NlcyBjYW4gYmUgc2V0IG1vcmUgcHJlY2lzZS4gVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZVxuICogcG9zc2libGUgaW4gdGhlIG9iamVjdDpcbiAqIGNzc0NsYXNzOiB7XG4gKiAgIGNvbnRhaW5lcjogJ2NvbnRhaW5lci1jbGFzcycsXG4gKiAgIHBvcHVwOiAncG9wdXAtY2xhc3MnLFxuICogICBoZWFkZXI6ICdoZWFkZXItY2xhc3MnLFxuICogICB0aXRsZTogJ3RpdGxlLWNsYXNzJyxcbiAqICAgY2xvc2VCdXR0b246ICdjbG9zZS1idXR0b24tY2xhc3MnLFxuICogICBpY29uOiAnaWNvbi1jbGFzcycsXG4gKiAgIGltYWdlOiAnaW1hZ2UtY2xhc3MnLFxuICogICBjb250ZW50OiAnY29udGVudC1jbGFzcycsXG4gKiAgIGlucHV0OiAnaW5wdXQtY2xhc3MnLFxuICogICBhY3Rpb25zOiAnYWN0aW9ucy1jbGFzcycsXG4gKiAgIGNvbmZpcm1CdXR0b246ICdjb25maXJtLWJ1dHRvbi1jbGFzcycsXG4gKiAgIGNhbmNlbEJ1dHRvbjogJ2NhbmNlbC1idXR0b24tY2xhc3MnLFxuICogICBmb290ZXI6ICdmb290ZXItY2xhc3MnXG4gKiB9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbGVydEhhbmRsZXIge1xuXG4gIHNob3dFcnJvckRpYWxvZyh0aXRsZSwgY29udGVudCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dJbmZvRGlhbG9nKHRpdGxlLCBjb250ZW50LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiBjb250ZW50LFxuICAgICAgdHlwZTogXCJpbmZvXCIsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSk7O1xuICB9XG5cbiAgc2hvd0luZm9BY3Rpb25EaWFsb2codGl0bGUsIGNvbnRlbnQsIGNvbmZpcm1DYWxsYmFjaywgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogY29udGVudCxcbiAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc2hvd0luZm9BY3Rpb25EaWFsb2cyKHRpdGxlLCBjb250ZW50LCBjb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvbnRlbnQsXG4gICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHRydWUsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnLFxuICAgICAgcHJlQ29uZmlybTogKGRhdGEpID0+IHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9fSk7XG4gIH1cblxuXG4gIHNob3dDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCA/IGNvbmZpcm1UZXh0IDogXCJDb25maXJtXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0ID8gY2FuY2VsVGV4dCA6IFwiQ2FuY2VsXCIsXG4gICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgICAgY3VzdG9tQ2xhc3M6IGNzc0NsYXNzID8gY3NzQ2xhc3MgOiAnJ1xuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzaG93Q29uZmlybURpYWxvZ0hUTUwodGl0bGUsIGh0bWwsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0LCBjc3NDbGFzcykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBodG1sOiBodG1sLFxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnXG4gICAgfSkudGhlbigod2lsbERlbGV0ZSkgPT4ge1xuICAgICAgaWYgKHdpbGxEZWxldGUudmFsdWUpIHtcbiAgICAgICAgY29uZmlybUNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZUNvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIHByZUNvbmZpcm1DYWxsYmFjaywgY29uZmlybVRleHQsIGNhbmNlbFRleHQsIGNzc0NsYXNzLCBzaG93TG9hZGluZykge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHNob3dMb2FkaW5nID8gc2hvd0xvYWRpbmcgOiB0cnVlLFxuICAgICAgcHJlQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6ICgpID0+ICFTd2FsLmlzTG9hZGluZygpLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dMb2FkaW5nRGlhbG9nKHRpdGxlLCB0ZXh0LCBwcmVDb25maXJtQ2FsbGJhY2ssIGNzc0NsYXNzKSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICAgIGFsbG93RXNjYXBlS2V5OiBmYWxzZSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IHRydWUsXG4gICAgICBvbkJlZm9yZU9wZW46ICgpID0+IHtcbiAgICAgICAgU3dhbC5jbGlja0NvbmZpcm0oKTtcbiAgICAgIH0sXG4gICAgICBjdXN0b21DbGFzczogY3NzQ2xhc3MgPyBjc3NDbGFzcyA6ICcnLFxuICAgICAgcHJlQ29uZmlybTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcHJlQ29uZmlybUNhbGxiYWNrKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzaG93U2VsZWN0RGlhbG9nKHRpdGxlLCBvYmpPcHRpb25zLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCwgY3NzQ2xhc3MpIHtcbiAgICBjb25zdCB7dmFsdWU6IHNlbGVjdGVkVmFsdWV9ID0gYXdhaXQgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGlucHV0OiAnc2VsZWN0JyxcbiAgICAgIGlucHV0T3B0aW9uczogb2JqT3B0aW9ucyxcbiAgICAgIGlucHV0UGxhY2Vob2xkZXI6ICdTZWxlY3QgYSBmcnVpdCcsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0LFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCxcbiAgICAgIGN1c3RvbUNsYXNzOiBjc3NDbGFzcyA/IGNzc0NsYXNzIDogJydcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbi8qKlxuICogQ29udmVydHMgYSBkaXN0YW5jZSBpbiBtZXRlcnMgdG8gYSBtb3JlIHJlYWRhYmxlIGZvcm1hdC5cbiAqIEBwYXJhbSBkaXN0YW5jZUluTWV0ZXJzICBUaGUgZGlzdGFuY2UgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0h1bWFuRGlzdGFuY2UoZGlzdGFuY2VJbk1ldGVycykge1xuXG4gIHZhciBkaXN0YW5jZSxcbiAgICBodW1hbkRpc3RhbmNlO1xuXG4gIGRpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2VJbk1ldGVycywgMTApO1xuICBkaXN0YW5jZSA9IGRpc3RhbmNlIC8gMTAwMDtcblxuICBpZiAoZGlzdGFuY2UgPj0gMTAwKSB7XG4gICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMCkgKyBcIiBcIiArICdrbSc7XG4gIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMTApIHtcbiAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgxKSArIFwiIFwiICsgJ2ttJztcbiAgfSBlbHNlIGlmIChkaXN0YW5jZSA+PSAwLjEpIHtcbiAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgyKSArIFwiIFwiICsgJ2ttJztcbiAgfSBlbHNlIHtcbiAgICBodW1hbkRpc3RhbmNlID0gKGRpc3RhbmNlICogMTAwMCkudG9GaXhlZCgwKSArIFwiIFwiICsgJ20nO1xuICB9XG5cbiAgcmV0dXJuIGh1bWFuRGlzdGFuY2U7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSB0aW1lIGluIHNlY29uZHMgdG8gYSBtb3JlIHJlYWRhYmxlIGZvcm1hdC5cbiAqIEBwYXJhbSB0aW1lSW5TZWNvbmRzICAgICBUaGUgdGltZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvSHVtYW5UaW1lKHRpbWVJblNlY29uZHMpIHtcblxuICB2YXIgc2Vjb25kcyxcbiAgICBtaW51dGVzLFxuICAgIGhvdXJzLFxuICAgIGh1bWFuVGltZTtcblxuICBzZWNvbmRzID0gcGFyc2VJbnQodGltZUluU2Vjb25kcywgMTApO1xuICBtaW51dGVzID0gcGFyc2VJbnQoc2Vjb25kcyAvIDYwLCAxMCk7XG4gIHNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgaG91cnMgPSBwYXJzZUludChtaW51dGVzIC8gNjAsIDEwKTtcbiAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICBpZiAoaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCkge1xuICAgIGh1bWFuVGltZSA9IHNlY29uZHMgKyBcIiBcIiArICdzJztcbiAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgIGh1bWFuVGltZSA9IG1pbnV0ZXMgKyBcIiBcIiArICdtaW4nO1xuICB9IGVsc2Uge1xuICAgIGh1bWFuVGltZSA9IGhvdXJzICsgXCIgXCIgKyAnaCcgKyBcIiBcIiArIG1pbnV0ZXMgKyBcIiBcIiArICdtaW4nO1xuICB9XG5cbiAgcmV0dXJuIGh1bWFuVGltZTtcbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuZXhwb3J0IGNsYXNzIFJvdXRpbmdQZXJtYWxpbmsge1xuXG4gIF9yb3V0ZXI7XG5cbiAgY29uc3RydWN0b3Iocm91dGVyKSB7XG4gICAgdGhpcy5fcm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubGlua0ZyYWdtZW50cyA9IHt9O1xuICAgIHRoaXMucmF3RnJhZ21lbnRzID0ge307XG4gIH1cblxuICBnZXQgcm91dGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXI7XG4gIH1cblxuICBzZXQgcm91dGVyKHZhbHVlKSB7XG4gICAgdGhpcy5fcm91dGVyID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBvbmUga2V5IG9mIHRoaXMubGlua0ZyYWdtZW50cyB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICB1cGRhdGVMaW5rRnJhZ21lbnRzKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIXRoaXMubGlua0ZyYWdtZW50cykge1xuICAgICAgdGhpcy5saW5rRnJhZ21lbnRzID0ge307XG4gICAgfVxuICAgIHRoaXMubGlua0ZyYWdtZW50c1trZXldID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVVcmwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIGN1cnJlbnQgdmFsdWVzIGluIHRoaXMubGlua0ZyYWdtZW50cyBhbmQgdXBkYXRlcyB0aGUgYnJvd3NlciBVUkwuXG4gICAqL1xuICB1cGRhdGVVcmwoKSB7XG4gICAgbGV0IHVybCA9IFwiP21hcHNQYXJhbXM9XCI7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gdGhpcy5saW5rRnJhZ21lbnRzO1xuICAgIGlmIChmcmFnbWVudHMubW9kZSAmJiBmcmFnbWVudHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIHVybCArPSBmcmFnbWVudHMubW9kZSA/IFwibTpcIiArIGZyYWdtZW50cy5tb2RlICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5hZGRyZXNzQXJlYSA/IFwiYTpcIiArIGZyYWdtZW50cy5hZGRyZXNzQXJlYVswXSArIFwiLFwiICsgZnJhZ21lbnRzLmFkZHJlc3NBcmVhWzFdICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5kZXRvdXJBcmVhID8gXCJkOlwiICsgZnJhZ21lbnRzLmRldG91ckFyZWEgKyBcIi9cIiA6IFwiXCI7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLnNlYXJjaFR5cGUgPyBcInM6XCIgKyBmcmFnbWVudHMuc2VhcmNoVHlwZSArIFwiL1wiIDogXCJcIjtcbiAgICAgIHVybCArPSBmcmFnbWVudHMuZm9yY2VTdGFydCA/IFwiZjpcIiArIGZyYWdtZW50cy5mb3JjZVN0YXJ0IDogXCJcIjtcbiAgICAgIGxldCBjb21wbGV0ZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHVybDtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBudWxsLCBjb21wbGV0ZVVybCk7XG4gICAgfSBlbHNlIGlmIChmcmFnbWVudHMubW9kZSAmJiBmcmFnbWVudHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLm1vZGUgPyBcIm06XCIgKyBmcmFnbWVudHMubW9kZSArIFwiL1wiIDogXCJcIjtcbiAgICAgIHVybCArPSBmcmFnbWVudHMuZnJvbUFkZHJlc3MgPyBcImFmOlwiICsgZnJhZ21lbnRzLmZyb21BZGRyZXNzWzBdICsgXCIsXCIgKyBmcmFnbWVudHMuZnJvbUFkZHJlc3NbMV0gKyBcIi9cIiA6IFwiXCI7XG4gICAgICB1cmwgKz0gZnJhZ21lbnRzLnRvQWRkcmVzcyA/IFwiYXQ6XCIgKyBmcmFnbWVudHMudG9BZGRyZXNzWzBdICsgXCIsXCIgKyBmcmFnbWVudHMudG9BZGRyZXNzWzFdICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5kZXRvdXJSb3V0ZSA/IFwiZDpcIiArIGZyYWdtZW50cy5kZXRvdXJSb3V0ZSArIFwiL1wiIDogXCJcIjtcbiAgICAgIHVybCArPSBmcmFnbWVudHMuc2VhcmNoVHlwZSA/IFwiczpcIiArIGZyYWdtZW50cy5zZWFyY2hUeXBlICsgXCIvXCIgOiBcIlwiO1xuICAgICAgdXJsICs9IGZyYWdtZW50cy5mb3JjZVN0YXJ0ID8gXCJmOlwiICsgZnJhZ21lbnRzLmZvcmNlU3RhcnQgOiBcIlwiO1xuICAgICAgbGV0IGNvbXBsZXRlVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgdXJsO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsIGNvbXBsZXRlVXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGFyZSBHRVQgcGFyYW1zIGxvYWRlZCBpbnRvIHRoZSBtYXBEYXRhIGFuZCB0cmlnZ2VycyB0aGUgc2VhcmNoIGFjY29yZGluZ2x5LlxuICAgKiBUaGUgZmlyc3QgcGFyYW0gaXMgZXhwZWN0ZWQgdG8gYmUgZWl0aGVyIFwicm91dGVcIiBvciBcImFyZWFcIiB0byBpbmRpY2F0ZSB0aGUgdHlwZSBvZiBzZWFyY2guXG4gICAqIEFmdGVyIHRoYXQsIHRoZSBuZXh0IHBhcmFtIChvciB0aGUgbmV4dCB0d28sIGluIGNhc2Ugb2YgXCJyb3V0ZVwiKSBzaG91bGQgYmUgYW4gYWRkcmVzcyBzdHJpbmcuXG4gICAqIFRoZSBmb2xsb3dpbmcgcGFyYW1ldGVycyBhcmUgZGV0b3VyL3NlYXJjaHR5cGUvZm9yY2VTdGFydC5cbiAgICovXG4gIGFzeW5jIGhhbmRsZUluaXRpYWxQYXJhbXMoKSB7XG4gICAgdGhpcy5yYXdGcmFnbWVudHMgPSB0aGlzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuaW5pdGlhbFBhcmFtcztcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMucmF3RnJhZ21lbnRzKSB7XG4gICAgICBhd2FpdCB0aGlzLmNoZWNrRm9yT2xkUGFyYW1zKCk7XG4gICAgICBjb25zdCBhcnJQYXJhbXMgPSB0aGlzLnJhd0ZyYWdtZW50cy5zcGxpdChcIi9cIikubWFwKHBhaXIgPT4gcGFpci5zcGxpdChcIjpcIikpO1xuICAgICAgY29uc3Qgb2JqUGFyYW1zID0ge307XG4gICAgICBhcnJQYXJhbXMuZm9yRWFjaCgoW2tleSx2YWx1ZV0pID0+IG9ialBhcmFtc1trZXldID0gdmFsdWUpO1xuICAgICAgbGV0IHJvdXRlckxheWVycyA9IHRoaXMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgICBsZXQgZGVzaXJlZEJ1dHRvbiA9IFwiXCI7XG4gICAgICBpdGVyYXRpb25MYWJlbDpcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHJvdXRlckxheWVycykge1xuICAgICAgICAgIGlmIChyb3V0ZXJMYXllcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHJvdXRlckxheWVyc1trZXldO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5uZXJLZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaW5uZXJLZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZUVudHJ5ID0gb2JqW2lubmVyS2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgY21wVmFsdWUgPSBvYmpQYXJhbXMucztcbiAgICAgICAgICAgICAgICBpZiAoc2luZ2xlRW50cnkubWFwTGFiZWwgPT09IGNtcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBkZXNpcmVkQnV0dG9uID0gaW5uZXJLZXk7XG4gICAgICAgICAgICAgICAgICBicmVhayBpdGVyYXRpb25MYWJlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIC8vIGl0ZXJhdGUgYnV0dG9ucyBsYXRlciBvbiB3aGVuIHRoZSBVSSBpcyBidWlsdFxuICAgICAgdGhpcy5kZXNpcmVkQnV0dG9uUm91dGluZyA9IGRlc2lyZWRCdXR0b247XG4gICAgICBpZiAob2JqUGFyYW1zLm0gPT09IFwiYXJlYVwiKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5pdGlhbEFyZWFTZWFyY2gob2JqUGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAob2JqUGFyYW1zLm0gPT09IFwicm91dGVcIikge1xuICAgICAgICB0aGlzLmhhbmRsZUluaXRpYWxSb3V0ZVNlYXJjaChvYmpQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIFVSTCBmb3IgdGhlIGRlcHJlY2F0ZWQgVVJMIHN0cnVjdHVyZSBhbmQgY29udmVydHMgaXQgdG8gdGhlIGN1cnJlbnQgc3RydWN0dXJlLlxuICAgKi9cbiAgYXN5bmMgY2hlY2tGb3JPbGRQYXJhbXMoKSB7XG4gICAgbGV0IHN0clBhcmFtcyA9IFwiXCI7XG4gICAgbGV0IHBhcmFtcyA9IHRoaXMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pbml0aWFsUGFyYW1zO1xuICAgIGlmIChwYXJhbXMuaW5kZXhPZihcIm06XCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYXJyRnJhZ21lbnRzID0gcGFyYW1zLnNwbGl0KFwiL1wiKTtcbiAgICBzdHJQYXJhbXMgKz0gXCJtOlwiICsgYXJyRnJhZ21lbnRzWzBdICsgXCIvXCI7XG4gICAgaWYgKGFyckZyYWdtZW50c1swXSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBsZXQgZnJvbUNvb3JkcyA9IGF3YWl0IHRoaXMucm91dGVyLnBlcmZvcm1HZW9TZWFyY2goYXJyRnJhZ21lbnRzWzFdKTtcbiAgICAgIGxldCB0b0Nvb3JkcyA9IGF3YWl0IHRoaXMucm91dGVyLnBlcmZvcm1HZW9TZWFyY2goYXJyRnJhZ21lbnRzWzJdKTtcbiAgICAgIHN0clBhcmFtcyArPSBcImFmOlwiICsgZnJvbUNvb3Jkcy5qb2luKCkgKyBcIi9cIjtcbiAgICAgIHN0clBhcmFtcyArPSBcImF0OlwiICsgdG9Db29yZHMuam9pbigpICsgXCIvXCI7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJkOlwiICsgYXJyRnJhZ21lbnRzWzNdICsgXCIvXCI7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJzOlwiICsgYXJyRnJhZ21lbnRzWzRdICsgXCIvXCI7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJmOlwiICsgYXJyRnJhZ21lbnRzWzVdICsgXCIvXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb29yZHMgPSBhd2FpdCB0aGlzLnJvdXRlci5wZXJmb3JtR2VvU2VhcmNoKGFyckZyYWdtZW50c1sxXSk7XG4gICAgICBzdHJQYXJhbXMgKz0gXCJhOlwiICsgY29vcmRzLmpvaW4oKSArIFwiL1wiO1xuICAgICAgc3RyUGFyYW1zICs9IFwiZDpcIiArIGFyckZyYWdtZW50c1syXSArIFwiL1wiO1xuICAgICAgc3RyUGFyYW1zICs9IFwiczpcIiArIGFyckZyYWdtZW50c1szXSArIFwiL1wiO1xuICAgICAgc3RyUGFyYW1zICs9IFwiZjpcIiArIGFyckZyYWdtZW50c1s0XSArIFwiL1wiO1xuICAgIH1cbiAgICB0aGlzLnJhd0ZyYWdtZW50cyA9IHN0clBhcmFtcztcbiAgfVxuXG4gIGhhbmRsZUluaXRpYWxBcmVhU2VhcmNoKG9ialBhcmFtcykge1xuICAgIHRoaXMucm91dGVyLnNldFN0YXRlKHttb2RlOiBcImFyZWFcIn0pO1xuICAgIGxldCBjZW50ZXIgPSBvYmpQYXJhbXMuYTtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICBjZW50ZXIgPSBjZW50ZXIuc3BsaXQoXCIsXCIpO1xuICAgIH1cbiAgICBsZXQgZGV0b3VyID0gb2JqUGFyYW1zLmQ7XG4gICAgbGV0IHNlYXJjaHR5cGUgPSBvYmpQYXJhbXMucztcbiAgICBsZXQgZm9yY2VTdGFydCA9IG9ialBhcmFtcy5mO1xuICAgIGlmIChkZXRvdXIgfHwgZGV0b3VyID4gMSkge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGRldG91cik7XG4gICAgICAvLyBqUXVlcnkodGhpcy50b2dnbGVEZXRvdXJBcmVhKS52YWwoZGV0b3VyKTtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnRvZ2dsZURldG91ckFyZWEpLnRyaWdnZXIoJ2lucHV0Jyk7XG4gICAgfVxuICAgIGlmIChjZW50ZXIgJiYgY2VudGVyLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc0FyZWFcIiwgY2VudGVyKTtcbiAgICAgIHRoaXMucm91dGVyLnNldEFyZWFQb2ludChjZW50ZXIpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNodHlwZSkge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwic2VhcmNoVHlwZVwiLCBzZWFyY2h0eXBlKTtcbiAgICB9XG4gICAgaWYgKGZvcmNlU3RhcnQpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlua0ZyYWdtZW50cyhcImZvcmNlU3RhcnRcIiwgZm9yY2VTdGFydCk7XG4gICAgfVxuICAgIC8vIGFjdGl2YXRlIGFyZWEgdmlld1xuICAgIGpRdWVyeShcIi5jNGctcG9ydHNpZGUtdmlld3RyaWdnZXJiYXIgLmM0Zy1hcmVhLXNlYXJjaFwiKS5jbGljaygpO1xuICB9XG5cbiAgaGFuZGxlSW5pdGlhbFJvdXRlU2VhcmNoKG9ialBhcmFtcykge1xuICAgIHRoaXMucm91dGVyLnNldFN0YXRlKHttb2RlOiBcInJvdXRlXCJ9KTtcblxuICAgIGxldCBmcm9tQWRkcmVzcyA9IG9ialBhcmFtcy5hZiA/IG9ialBhcmFtcy5hZi5zcGxpdChcIixcIikubWFwKGVsZW0gPT4gcGFyc2VGbG9hdChlbGVtKSkgOiBudWxsO1xuICAgIGxldCB0b0FkZHJlc3MgPSBvYmpQYXJhbXMuYXQgPyBvYmpQYXJhbXMuYXQuc3BsaXQoXCIsXCIpLm1hcChlbGVtID0+IHBhcnNlRmxvYXQoZWxlbSkpIDogbnVsbDtcbiAgICBsZXQgZGV0b3VyID0gb2JqUGFyYW1zLmQ7XG4gICAgbGV0IHNlYXJjaHR5cGUgPSBvYmpQYXJhbXMucztcbiAgICBsZXQgZm9yY2VTdGFydCA9IG9ialBhcmFtcy5mO1xuICAgIGlmIChkZXRvdXIpIHtcbiAgICAgIGpRdWVyeSh0aGlzLnJvdXRlci50b2dnbGVEZXRvdXJSb3V0ZSkudmFsKGRldG91cik7XG4gICAgICBqUXVlcnkodGhpcy5yb3V0ZXIudG9nZ2xlRGV0b3VyUm91dGUpLnRyaWdnZXIoJ2lucHV0Jyk7XG4gICAgICB0aGlzLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgb2JqUGFyYW1zLmQpO1xuICAgIH1cbiAgICBpZiAoZnJvbUFkZHJlc3MpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlua0ZyYWdtZW50cyhcImZyb21BZGRyZXNzXCIsIGZyb21BZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKHRvQWRkcmVzcykge1xuICAgICAgdGhpcy51cGRhdGVMaW5rRnJhZ21lbnRzKFwidG9BZGRyZXNzXCIsIHRvQWRkcmVzcyk7XG4gICAgfVxuICAgIGlmIChzZWFyY2h0eXBlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJzZWFyY2hUeXBlXCIsIG9ialBhcmFtcy5zKTtcbiAgICB9XG4gICAgaWYgKGZvcmNlU3RhcnQpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlua0ZyYWdtZW50cyhcImZvcmNlU3RhcnRcIiwgb2JqUGFyYW1zLmYpO1xuICAgIH1cbiAgICBpZiAoZnJvbUFkZHJlc3MgJiYgdG9BZGRyZXNzKSB7XG4gICAgICB0aGlzLnJvdXRlci5zZXRSb3V0ZUZyb20oZnJvbUFkZHJlc3NbMF0sIGZyb21BZGRyZXNzWzFdKTtcbiAgICAgIHRoaXMucm91dGVyLnNldFJvdXRlVG8odG9BZGRyZXNzWzBdLCB0b0FkZHJlc3NbMV0pO1xuICAgIH1cbiAgICAvLyBhY3RpdmF0ZSByb3V0ZXIgdmlld1xuICAgIGpRdWVyeShcIi5jNGctcG9ydHNpZGUtdmlld3RyaWdnZXJiYXIgLmM0Zy1yb3V0ZS1zZWFyY2hcIikuY2xpY2soKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxpc3RlbmVyUmVnaXN0ZXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBzdWJtaXRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBmaWVsZCA9ICQoXCIjXCIgKyBzY29wZS5wcm9wcy5jc3NJZCk7XG4gICAgICBmaWVsZC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIGxldCBwZXJmb3JtU2VhcmNoQ2FsbGJhY2s7XG4gICAgICBpZiAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZihcImFyZWFcIikgIT09IC0xKSB7XG4gICAgICAgIHBlcmZvcm1TZWFyY2hDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYSgpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVyZm9ybVNlYXJjaENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1WaWFSb3V0ZSgpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWUgPSAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZignRnJvbScpICE9PSAtMSkgPyBcImZyb21WYWx1ZVwiIDogXCJ0b1ZhbHVlXCI7XG4gICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIHBlcmZvcm1TZWFyY2hDYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGxldCBlbnRlckxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIG9wdF90aGlzKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgc3VibWl0RnVuY3Rpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLmxlbmd0aCA9PT0gMCAmJiAhZXZlbnQua2V5Q29kZSkgeyAvL2RlbGV0ZWRcbiAgICAgICAgICBpZiAodHlwZW9mIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9ucy5kZWxldGVGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnMuZGVsZXRlRnVuY3Rpb24oZXZlbnQuY3VycmVudFRhcmdldCwgZXZlbnQuY3VycmVudFRhcmdldC5pZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG92ZXIgcG9pbnRzXG4gICAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLmRlbGV0ZUZ1bmN0aW9uKGV2ZW50LmN1cnJlbnRUYXJnZXQsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5jb3VudGVyID0gTWF0aC5mbG9vcihEYXRlLm5vdygpKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDQwMCA8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlLmNvdW50ZXI7XG4gICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMub2JqU2V0dGluZ3MucHJveHlVcmwgfHwgIXNjb3BlLnByb3BzLm9ialNldHRpbmdzLmtleUF1dG9jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKCdGcm9tJykgIT09IC0xKSA/IFwiZnJvbVZhbHVlXCIgOiBcInRvVmFsdWVcIjtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSAkKFwiI1wiICsgc2NvcGUucHJvcHMuY3NzSWQpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtU2VhcmNoKGZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlQWRkcmVzcygkKFwiI1wiICsgc2NvcGUucHJvcHMuY3NzSWQpLnZhbCgpLCBcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IGlkPXt0aGlzLnByb3BzLmNzc0lkfSB0eXBlPVwic2VhcmNoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbktleURvd249e2VudGVyTGlzdGVuZXJ9XG4gICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYXJyTmFtZXM7XG4gICAgaWYgKHRoaXMucHJvcHMuY3NzSWQuaW5kZXhPZihcIkZyb21cIikgIT09IC0xKSB7XG4gICAgICBhcnJOYW1lcyA9IHRoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21OYW1lc1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jc3NJZC5pbmRleE9mKFwiVG9cIikgIT09IC0xKSB7XG4gICAgICBhcnJOYW1lcyA9IHRoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNzc0lkLmluZGV4T2YoXCJPdmVyXCIpICE9PSAtMSkge1xuICAgICAgYXJyTmFtZXMgPSB0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbdGhpcy5wcm9wcy5pbmRleF07XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNzc0lkLmluZGV4T2YoXCJhcmVhXCIpICE9PSAtMSkge1xuICAgICAgYXJyTmFtZXMgPSB0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhTmFtZXM7XG4gICAgfVxuXG4gICAgbGV0IGlucHV0RmllbGQgPSBqUXVlcnkoJyMnICsgdGhpcy5wcm9wcy5jc3NJZCk7XG4gICAgaW5wdXRGaWVsZC5hdXRvY29tcGxldGUoe1xuICAgICAgc291cmNlOiBhcnJOYW1lc1xuICAgIH0pO1xuXG4gICAgLy8gb25seSByZWdpc3RlciBsaXN0ZW5lciBvbmNlXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyUmVnaXN0ZXJlZCkge1xuICAgICAgaW5wdXRGaWVsZC5vbignYXV0b2NvbXBsZXRlc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMuaW5kZXgpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLnNlbGVjdExpc3RlbmVyKGV2ZW50LCB1aSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMub2JqRnVuY3Rpb25zLnNlbGVjdExpc3RlbmVyKGV2ZW50LCB1aSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ZW5lclJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldENlbnRlciAoY2VudGVyKSB7XG4gICAgdGhpcy5vYmpTZXR0aW5ncy5jZW50ZXIgPSBjZW50ZXI7XG4gIH1cblxuICBhdXRvY29tcGxldGVBZGRyZXNzKGlucHV0LCBjc3NDbGFzcykge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBzZXR0aW5ncyA9IHNjb3BlLnByb3BzLm9ialNldHRpbmdzO1xuICAgIGxldCBjZW50ZXI7XG4gICAgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5jZW50ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBsZXQgb2JqQ2VudGVyID0gc2V0dGluZ3MuY2VudGVyKCk7XG4gICAgICAgIGNlbnRlciA9IG9iakNlbnRlclswXSArIFwiLFwiICsgb2JqQ2VudGVyWzFdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNlbnRlciA9IHNldHRpbmdzLmNlbnRlclswXSArIFwiLFwiICsgc2V0dGluZ3MuY2VudGVyWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzZXR0aW5ncy5iQm94KSB7XG4gICAgICBjZW50ZXIgPSAocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiArIFwiLFwiICsgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDI7XG4gICAgfVxuICAgIGxldCB1cmw7XG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0ICtcIiZjZW50ZXI9XCIgKyBjZW50ZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0O1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3MuZ2Vvc2VhcmNoUGFyYW1zKSB7XG4gICAgICBmb3IgKGxldCBwYXJhbSBpbiBzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzLmdlb3NlYXJjaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICB1cmwgKz0gXCImXCIgKyBwYXJhbSArIFwiPVwiICsgc2V0dGluZ3MuZ2Vvc2VhcmNoUGFyYW1zW3BhcmFtXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICBsZXQgY2VudGVyO1xuICAgICAgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICBjZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXI7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzZXR0aW5ncy5iQm94KXtcbiAgICAgICAgY2VudGVyID0gWyhwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMF0pICsgcGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzJdKSkgLyAyLCAocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzFdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFszXSkpIC8gMl07XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUgICYmIGNlbnRlcikge1xuICAgICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgbGV0IGFyckFkZHJlc3NlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmJCb3ggJiYgc2V0dGluZ3MuYkJveFswXSkge1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5pc0luQm91bmRpbmdCb3goZGF0YVtpXS5sb24sIGRhdGFbaV0ubGF0LCBzZXR0aW5ncy5iQm94KSkge1xuICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKiAoY2VudGVyWzBdIC0gZGF0YVtpXS5sb24pICsgKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSAqIChjZW50ZXJbMV0gLSBkYXRhW2ldLmxhdCkpO1xuICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICdkaXN0JyA6IGRpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICAncG9zJyAgOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnIDogZGF0YVtpXS5kaXNwbGF5X25hbWVcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYXJyQWRkcmVzc2VzLnNvcnQoKGEsYikgPT4gYS5kaXN0IC1iLmRpc3QpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJBZGRyZXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChhcnJBZGRyZXNzZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgaWYgKGNzc0NsYXNzLmluZGV4T2YoJ2Zyb20nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIHR3aWNlXG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzLmluY2x1ZGVzKGFyckFkZHJlc3Nlc1tpXS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21OYW1lcy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJGcm9tUG9zaXRpb25zLnB1c2goYXJyQWRkcmVzc2VzW2ldLnBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNzc0NsYXNzLmluZGV4T2YoJ3RvJykgIT09IC0xKXtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb05hbWVzLmluY2x1ZGVzKGFyckFkZHJlc3Nlc1tpXS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMucHVzaChhcnJBZGRyZXNzZXNbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnMucHVzaChhcnJBZGRyZXNzZXNbaV0ucG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3NzQ2xhc3MuaW5kZXhPZignb3ZlcicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJOYW1lc1tzY29wZS5wcm9wcy5pbmRleF0uaW5jbHVkZXMoYXJyQWRkcmVzc2VzW2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyT3Zlck5hbWVzW3Njb3BlLnByb3BzLmluZGV4XS5wdXNoKGFyckFkZHJlc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyUG9zaXRpb25zW3Njb3BlLnByb3BzLmluZGV4XS5wdXNoKGFyckFkZHJlc3Nlc1tpXS5wb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjc3NDbGFzcy5pbmRleE9mKCdhcmVhJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyQXJlYU5hbWVzLmluY2x1ZGVzKGFyckFkZHJlc3Nlc1tpXS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lcy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zLnB1c2goYXJyQWRkcmVzc2VzW2ldLnBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3ZWlyZCDCr1xcXFxfKOODhClfL8KvXCIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gdHJpZ2dlciBrZXlkb3duIGV2ZW50IHRvIHNob3cgYXV0b2NvbXBsZXRlIG9wdGlvbnNcbiAgICAgICAgICBsZXQgZXZlbnQgPSBqUXVlcnkuRXZlbnQoXCJrZXlkb3duXCIsIHtrZXlDb2RlOiA4fSk7XG4gICAgICAgICAgJChjc3NDbGFzcykudHJpZ2dlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGlmIChjc3NDbGFzcy5pbmRleE9mKCdGcm9tJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgdHdpY2VcbiAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzLmluY2x1ZGVzKGRhdGFbaV0uZGlzcGxheV9uYW1lKSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJGcm9tTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3NzQ2xhc3MuaW5kZXhPZignVG8nKSAhPT0gLTEpe1xuICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb05hbWVzLmluY2x1ZGVzKGRhdGFbaV0uZGlzcGxheV9uYW1lKSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb05hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb1Bvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjc3NDbGFzcy5pbmRleE9mKCdPdmVyJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJOYW1lc1tzY29wZS5wcm9wcy5pbmRleF0uaW5jbHVkZXMoZGF0YVtpXS5kaXNwbGF5X25hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJOYW1lc1tzY29wZS5wcm9wcy5pbmRleF0ucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJQb3NpdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNzc0NsYXNzLmluZGV4T2YoJ2FyZWEnKSAhPT0gLTEpe1xuICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhTmFtZXMuaW5jbHVkZXMoZGF0YVtpXS5kaXNwbGF5X25hbWUpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lcy5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXMuYXJyQXJlYVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHdlaXJkIMKvXFxcXF8o44OEKV8vwq9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBzY29wZS5wcm9wcy5jb250YWluZXJBZGRyZXNzZXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBrZXlkb3duIGV2ZW50IHRvIHNob3cgYXV0b2NvbXBsZXRlIG9wdGlvbnNcbiAgICAgICAgbGV0IGV2ZW50ID0galF1ZXJ5LkV2ZW50KFwia2V5ZG93blwiLCB7a2V5Q29kZTogOH0pO1xuICAgICAgICAkKGNzc0NsYXNzKS50cmlnZ2VyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzSW5Cb3VuZGluZ0JveChsb25naXR1ZGUsIGxhdGl0dWRlLCBiYm94KSB7XG4gICAgaWYgKHR5cGVvZiBsb25naXR1ZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9uZ2l0dWRlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsYXRpdHVkZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KGxhdGl0dWRlKTtcbiAgICB9XG4gICAgaWYgKGJib3hbMF0gPCBsb25naXR1ZGUgJiZcbiAgICAgIGxvbmdpdHVkZSA8IGJib3hbMl0gJiZcbiAgICAgIGJib3hbMV0gPCBsYXRpdHVkZSAmJlxuICAgICAgbGF0aXR1ZGUgPCBiYm94WzNdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tIFwiLi9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHt0b0xvbkxhdH0gZnJvbSBcIm9sL3Byb2pcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlclBvcHVwQnV0dG9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcm91dGVGcm9tID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcucm91dGVyLm9wZW5Db250cm9scyh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnJvdXRlci5zZXRNb2RlKFwicm91dGVcIik7XG4gICAgICAgICAgICAvLyBmcm9tIGFkZHJlc3NcbiAgICAgICAgICAgIGxldCBmcm9tQ29vcmRzID0gdG9Mb25MYXQodGhpcy5wcm9wcy5jb25maWcuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCksIFwiRVBTRzozODU3XCIpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcucm91dGVyLnNldFJvdXRlRnJvbShmcm9tQ29vcmRzWzBdLCBmcm9tQ29vcmRzWzFdKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHJvdXRlVG8gPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5yb3V0ZXIub3BlbkNvbnRyb2xzKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcucm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgICAgICAgICAgIC8vIHRvIGFkZHJlc3NcbiAgICAgICAgICAgIGxldCB0b0Nvb3JkcyA9IHRvTG9uTGF0KHRoaXMucHJvcHMuY29uZmlnLmZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpLCBcIkVQU0c6Mzg1N1wiKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnJvdXRlci5zZXRSb3V0ZVRvKHRvQ29vcmRzWzBdLCB0b0Nvb3Jkc1sxXSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWljb24gYzRnLXBvcHVwLXJvdXRlLWZyb21cIn0gdGl0bGU9e3RoaXMucHJvcHMuY29uZmlnLnJvdXRlci5sYW5ndWFnZUNvbnN0YW50cy5QT1BVUF9ST1VURV9GUk9NfSBvbk1vdXNlVXA9eygpPT57cm91dGVGcm9tKCl9fS8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctaWNvbiBjNGctcG9wdXAtcm91dGUtdG9cIn0gdGl0bGU9e3RoaXMucHJvcHMuY29uZmlnLnJvdXRlci5sYW5ndWFnZUNvbnN0YW50cy5QT1BVUF9ST1VURV9UT30gb25Nb3VzZVVwPXsoKT0+e3JvdXRlVG8oKX19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHtSb3V0ZXJJbnN0cnVjdGlvbnNDb250YWluZXJ9IGZyb20gXCIuL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lci5qc3hcIjtcbi8vIGltcG9ydCB7Um91dGVyRmVhdHVyZUxpc3R9IGZyb20gXCIuL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeFwiO1xuaW1wb3J0IEdQWCBmcm9tIFwib2wvZm9ybWF0L0dQWFwiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2UsIHRvSHVtYW5UaW1lfSBmcm9tIFwiLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5cbmNvbnN0IFJvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lci5qc3gnKSk7XG5jb25zdCBSb3V0ZXJGZWF0dXJlTGlzdCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeCcpKTtcblxuZXhwb3J0IGNsYXNzIFJvdXRlclJlc3VsdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNsaWNrQ29udHJvbCA9IHRoaXMuY2xpY2tDb250cm9sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcm9maWxlVHJhbnNsYXRpb24gPSB7XG4gICAgICAwOiBcImNhclwiLFxuICAgICAgMTogXCJoZ3ZcIixcbiAgICAgIDI6IFwiYmlrZVwiLFxuICAgICAgMzogXCJiaWtlXCIsXG4gICAgICA0OiBcImJpa2VcIixcbiAgICAgIDU6IFwiYmlrZVwiLFxuICAgICAgNjogXCJiaWtlXCIsXG4gICAgICA3OiBcImJpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJmb290XCIsXG4gICAgICAxMDogXCJ3aGVlbGNoYWlyXCIsXG4gICAgICAxMTogXCJoZ3ZcIixcbiAgICAgIDEyOiBcInNjb290ZXJcIixcbiAgICAgIDEzOiBcInNjb290ZXJcIlxuICAgIH07XG4gICAgd2luZG93LmM0Z01hcHNIb29rcy5ob29rX21hcF9jbGljayA9IHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19tYXBfY2xpY2sgfHwgW107XG4gICAgbGV0IHNjcm9sbHRvRWxlbWVudCA9IChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBsZXQgZmVhdHVyZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKGNsaWNrRXZlbnQucGl4ZWwsXG4gICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ3RpZCcpKSB7XG4gICAgICAgIGxldCB6b29tVG9JZCA9IGZlYXR1cmUuZ2V0KCd0aWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRSZXN1bHRGZWF0KGNsaWNrRXZlbnQpO1xuICAgICAgICB0aGlzLnByb3BzLnNldEFjdGl2ZUlkKHpvb21Ub0lkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19tYXBfY2xpY2sucHVzaChzY3JvbGx0b0VsZW1lbnQpO1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgdGltZSA9IFwiXCI7XG4gICAgbGV0IGRpc3RhbmNlID0gXCJcIjtcbiAgICBsZXQgZGV0b3VyID0gXCJcIjtcbiAgICBsZXQgZmVhdHVyZUNvdW50ID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMuaW5zdHJ1Y3Rpb25zICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICB0aW1lID0gdG9IdW1hblRpbWUodGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMudGltZSk7XG4gICAgICBkaXN0YW5jZSA9IHRvSHVtYW5EaXN0YW5jZSh0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucy5kaXN0YW5jZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmZlYXR1cmVMaXN0ICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRldG91ciA9IHRoaXMucHJvcHMuZGV0b3VyO1xuICAgICAgZmVhdHVyZUNvdW50ID0gdGhpcy5wcm9wcy5mZWF0dXJlTGlzdC5mZWF0dXJlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgbGV0IHJvdXRlckhlYWRlckNvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBwcmludEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgbGV0IHF1ZXJ5U2VsZWN0b3IgPSB0aGlzLnByb3BzLnJlc3VsdE1vZGUgPT09IFwiaW5zdHJcIiA/ICcuYzRnLXJvdXRlLWluc3RydWN0aW9ucy13cmFwcGVyJyA6ICcuYzRnLXJvdXRlLWZlYXR1cmUtd3JhcHBlcic7XG4gICAgICBsZXQgcHJ0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3RvcikuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaWYgKHRoaXMucHJvcHMucmVzdWx0TW9kZSA9PT0gXCJpbnN0clwiKSB7XG4gICAgICAgIGxldCBmcm9tQWRkcmVzcyA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmZyb21BZGRyZXNzO1xuICAgICAgICBsZXQgZGl2RnJvbUFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGxhYmVsRnJvbUFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbEZyb21BZGRyZXNzLmlubmVySFRNTCA9IHRoaXMucHJvcHMubGFuZy5ST1VURVJfRlJPTSArIFwiOiBcIjtcbiAgICAgICAgbGV0IGVtRnJvbUFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICAgICAgICBlbUZyb21BZGRyZXNzLmlubmVySFRNTCA9IGZyb21BZGRyZXNzO1xuICAgICAgICBkaXZGcm9tQWRkcmVzcy5hcHBlbmRDaGlsZChsYWJlbEZyb21BZGRyZXNzKTtcbiAgICAgICAgZGl2RnJvbUFkZHJlc3MuYXBwZW5kQ2hpbGQoZW1Gcm9tQWRkcmVzcyk7XG4gICAgICAgIGRpdkZyb21BZGRyZXNzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJykpO1xuXG4gICAgICAgIGxldCB0b0FkZHJlc3MgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS50b0FkZHJlc3M7XG4gICAgICAgIGxldCBkaXZUb0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGxhYmVsVG9BZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxUb0FkZHJlc3MuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5sYW5nLlJPVVRFUl9GUk9NICsgXCI6IFwiO1xuICAgICAgICBsZXQgZW1Ub0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICAgICAgICBlbVRvQWRkcmVzcy5pbm5lckhUTUwgPSB0b0FkZHJlc3M7XG4gICAgICAgIGRpdlRvQWRkcmVzcy5hcHBlbmRDaGlsZChsYWJlbFRvQWRkcmVzcyk7XG4gICAgICAgIGRpdlRvQWRkcmVzcy5hcHBlbmRDaGlsZChlbVRvQWRkcmVzcyk7XG4gICAgICAgIGRpdlRvQWRkcmVzcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpKTtcblxuICAgICAgICBwcnRDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInKS5hcHBlbmRDaGlsZChkaXZGcm9tQWRkcmVzcyk7XG4gICAgICAgIHBydENvbnRlbnQucXVlcnlTZWxlY3RvcignLmM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicpLmFwcGVuZENoaWxkKGRpdlRvQWRkcmVzcyk7XG4gICAgICB9XG5cbiAgICAgIHBydENvbnRlbnQucXVlcnlTZWxlY3RvcignLmM0Zy1yb3V0ZXItcHJpbnQnKS5yZW1vdmUoKTtcbiAgICAgIGxldCBXaW5QcmludCA9IHdpbmRvdy5vcGVuKCcnLCAnJywgJ2xlZnQ9MCx0b3A9MCx3aWR0aD04MDAsaGVpZ2h0PTkwMCx0b29sYmFyPTAsc2Nyb2xsYmFycz0wLHN0YXR1cz0wJyk7XG4gICAgICBXaW5QcmludC5kb2N1bWVudC53cml0ZShwcnRDb250ZW50LmlubmVySFRNTCk7XG4gICAgICBXaW5QcmludC5kb2N1bWVudC5jbG9zZSgpO1xuICAgICAgV2luUHJpbnQuZm9jdXMoKTtcbiAgICAgIFdpblByaW50LnByaW50KCk7XG4gICAgICBXaW5QcmludC5jbG9zZSgpO1xuICAgIH07XG4gICAgaWYgKCh0aW1lICYmIGRpc3RhbmNlKSAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuXG4gICAgICByb3V0ZXJIZWFkZXJDb250ZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1yb3V0ZS10aW1lXCI+XG4gICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMubGFuZy5ST1VURVJfVklFV19MQUJFTF9USU1FfTwvbGFiZWw+XG4gICAgICAgICAgICA8ZW0+e3RpbWV9PC9lbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcm91dGUtZGlzdGFuY2VcIj5cbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5sYW5nLlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFfTwvbGFiZWw+XG4gICAgICAgICAgICA8ZW0+e2Rpc3RhbmNlfTwvZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1kb3dubG9hZFwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlJPVVRFUl9ET1dOTE9BRH0gb25Nb3VzZVVwPXsoKT0+e3RoaXMuZXhwb3J0R3B4KCl9fS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcmludFwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlJPVVRFUl9QUklOVH0gb25Nb3VzZVVwPXsoKT0+e3ByaW50RnVuY3Rpb24oKX19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKGRldG91ciAmJiBmZWF0dXJlQ291bnQpICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcblxuICAgICAgcm91dGVySGVhZGVyQ29udGVudCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItYXJlYS1kZXRvdXJcIj5cbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5sYW5nLkFSRUFfREVUT1VSfTo8L2xhYmVsPlxuICAgICAgICAgICAgPGVtPntkZXRvdXJ9IGttPC9lbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItYXJlYS1mZWF0dXJlY291bnRcIj5cbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5sYW5nLkFSRUFfRkVBVFVSRUNPVU5UfTo8L2xhYmVsPlxuICAgICAgICAgICAgPGVtPntmZWF0dXJlQ291bnR9PC9lbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByaW50XCJ9IG9uTW91c2VVcD17KCk9PntwcmludEZ1bmN0aW9uKCl9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cblxuICAgIGlmICgodGhpcy5wcm9wcy5yZXN1bHRNb2RlID09PSBcImluc3RyXCIgJiYgdGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpKSB7XG4gICAgICByZXN1bHQgPSA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+XCJsb2FkaW5nLi5cIjwvZGl2Pn0+XG4gICAgICAgICAgPFJvdXRlckluc3RydWN0aW9uc0NvbnRhaW5lciBjbGFzc05hbWU9e1wiYzRnLXJvdXRlLWluc3RydWN0aW9ucy13cmFwcGVyXCJ9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9ucz17dGhpcy5wcm9wcy5yb3V0ZXJJbnN0cnVjdGlvbnN9IHJvdXRlcldheVNvdXJjZT17dGhpcy5wcm9wcy5yb3V0ZXJXYXlTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJIaW50U291cmNlPXt0aGlzLnByb3BzLnJvdXRlckhpbnRTb3VyY2V9IG9wZW49e3RoaXMucHJvcHMub3Blbn0gaGVhZGVyPXtyb3V0ZXJIZWFkZXJDb250ZW50fS8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgfSBlbHNlIGlmICgoKHRoaXMucHJvcHMucmVzdWx0TW9kZSA9PT0gXCJmZWF0XCIgfHwgdGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIikgfHwgKCF0aGlzLnByb3BzLnJvdXRlckluc3RydWN0aW9ucyAmJiB0aGlzLnByb3BzLmZlYXR1cmVMaXN0KSkpIHtcbiAgICAgIHJlc3VsdCA9IDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLlwiPC9kaXY+fT5cbiAgICAgICAgICA8Um91dGVyRmVhdHVyZUxpc3QgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZS1mZWF0dXJlLXdyYXBwZXJcIn0gYWN0aXZlSWQ9e3RoaXMucHJvcHMuYWN0aXZlSWR9IHNldEFjdGl2ZUlkPXt0aGlzLnByb3BzLnNldEFjdGl2ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlTW9kZT17dGhpcy5wcm9wcy5tb2RlfSBsYXllclJvdXRlPXt0aGlzLnByb3BzLmxheWVyUm91dGV9IGxheWVyQXJlYT17dGhpcy5wcm9wcy5sYXllckFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e3RoaXMucHJvcHMuZmVhdHVyZUxpc3R9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZmVhdHVyZVNvdXJjZT17dGhpcy5wcm9wcy5mZWF0dXJlU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmFsdWVSb3V0ZT17dGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGV9IGxheWVyVmFsdWVBcmVhPXt0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhfSBoZWFkZXI9e3JvdXRlckhlYWRlckNvbnRlbnR9Lz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuXCIgOiBcIiBjNGctY2xvc2VcIilcbiAgICAgICAgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLWRldGFpbHMtb3BlblwiIDogXCJcIil9PlxuICAgICAgICAgIHtyZXN1bHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlblwiIDogXCIgYzRnLWNsb3NlXCIpO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgbGV0IGNvbnRyb2xDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1yb3V0ZXItcGFuZWwuYzRnLW9wZW5cIik7XG4gICAgaWYgKGNvbnRyb2xDb250YWluZXIpIHtcbiAgICAgIGNvbnRyb2xDb250YWluZXIgPSBjb250cm9sQ29udGFpbmVyWzBdO1xuICAgIH1cbiAgICBsZXQgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGdfbWFwXCIpWzBdO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBpZiAoY29udHJvbENvbnRhaW5lcikge1xuICAgICAgICBpZiAoY29udGFpbmVyLm9mZnNldEhlaWdodCArIGNvbnRyb2xDb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgODQgPiBtYXBDb250YWluZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IG1hcENvbnRhaW5lci5vZmZzZXRIZWlnaHQgLSBjb250cm9sQ29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiICYmIHRoaXMucHJvcHMucmVzdWx0TW9kZSAhPT0gXCJmZWF0XCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFN0YXRlKHtyZXN1bHRNb2RlOiBcImZlYXRcIn0pO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKHRydWUpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0R3B4KCkge1xuICAgIGxldCBzb3VyY2UgPSB0aGlzLnByb3BzLnJvdXRlci5yb3V0ZXJXYXlTb3VyY2U7XG4gICAgbGV0IGZvcm1hdCA9IG5ldyBHUFgoKTtcbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5nZXRGZWF0dXJlcyAmJiBzb3VyY2UuZ2V0RmVhdHVyZXMoKSkge1xuICAgICAgbGV0IHN0ckV4cG9ydCA9IGZvcm1hdC53cml0ZUZlYXR1cmVzKHNvdXJjZS5nZXRGZWF0dXJlcygpLCB7XG4gICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiLFxuICAgICAgICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbiAgICAgICAgZGVjaW1hbHM6IDNcbiAgICAgIH0pO1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsICdkYXRhOnRleHQveG1sO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJFeHBvcnQpKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIFwicm91dGUuZ3B4XCIpO1xuXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgICBlbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICBjb25zb2xlLmxvZyhzdHJFeHBvcnQpO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBvdmVycmlkZSBwYXJlbnQgbWV0aG9kXG4gIH1cblxuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQge1JvdXRlckNvbnRyb2xzfSBmcm9tIFwiLi9jNGctcm91dGVyLWNvbnRyb2xzLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJSZXN1bHRDb250YWluZXJ9IGZyb20gXCIuL2M0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lci5qc3hcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c30gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudHNcIjtcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtQb2x5bGluZX0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRvTG9uTGF0LCBmcm9tTG9uTGF0LCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge1N0eWxlLCBTdHJva2V9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtWZWN0b3IsIEdyb3VwfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZ30gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7TW9kaWZ5LCBTZWxlY3R9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHtHZW9KU09OfSBmcm9tIFwib2wvZm9ybWF0XCI7XG5pbXBvcnQge0FsZXJ0SGFuZGxlcn0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vQ29yZUJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL0FsZXJ0SGFuZGxlclwiO1xuaW1wb3J0IHtSb3V0aW5nUGVybWFsaW5rfSBmcm9tIFwiLi8uLi9jNGctcm91dGluZy1wZXJtYWxpbmtcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudFwiO1xuLy8gaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXRpdGxlYmFyLmpzeFwiXG4vLyBpbXBvcnQge1JvdXRlclByb2ZpbGVTZWxlY3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Um91dGVyUG9wdXBCdXR0b25zfSBmcm9tIFwiLi9jNGctcm91dGVyLXBvcHVwLWJ1dHRvbnMuanN4XCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3gnKSk7XG5cbmNvbnN0IFJvdXRlckNvbnRyb2xzID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vYzRnLXJvdXRlci1jb250cm9scy5qc3gnKSk7XG4vLyBjb25zdCBSb3V0ZXJSZXN1bHRDb250YWluZXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXIuanN4JykpO1xuY29uc3QgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KCcuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4JykpO1xuLy8gY29uc3QgUm91dGVyUG9wdXBCdXR0b25zID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoJy4vYzRnLXJvdXRlci1wb3B1cC1idXR0b25zLmpzeCcpKVxuXG5jb25zdCBvc210b2dlb2pzb24gPSByZXF1aXJlKCdvc210b2dlb2pzb24nKTtcblxuLyoqXG4gKiBNYWluIHJvdXRlciBjb21wb25lbnQuIEl0IGNvbnNpc3RzIG9mIHRoZSBSb3V0ZXJDb250cm9scyBhbmQgUm91dGVyUmVzdWx0Q29udGFpbmVyIGNvbXBvbmVudHMsIGFuZCBob2xkcyB0aGVcbiAqIGNvbm5lY3Rpb24gdG8gdGhlIHJvdXRlciBtb2RlbCwgd2hpY2ggaXMgcHJvcGFnYXRlZCBkb3duIHRvIHRoZSBhY3R1YWxseSBuZWVkaW5nIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlclZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlSWQgPSB0aGlzLnNldEFjdGl2ZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRPcGVuID0gdGhpcy5zZXRPcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5Db250cm9scyA9IHRoaXMub3BlbkNvbnRyb2xzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEZyb21Qb2ludCA9IHRoaXMucmVzZXRGcm9tUG9pbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0VG9Qb2ludCA9IHRoaXMucmVzZXRUb1BvaW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEFyZWFQb2ludCA9IHRoaXMucmVzZXRBcmVhUG9pbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZVJlc3VsdERldGFpbHMgPSB0aGlzLnRvZ2dsZVJlc3VsdERldGFpbHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFJlc3VsdEluc3RyID0gdGhpcy5zZXRSZXN1bHRJbnN0ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UmVzdWx0RmVhdCA9IHRoaXMuc2V0UmVzdWx0RmVhdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSA9IHRoaXMucmVjYWxjdWxhdGVSb3V0ZS5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGFyclByb2ZpbGVzID0gW107XG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKG1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgZm9yIChsZXQga2V5IGluIG1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpIHtcbiAgICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgYXJyUHJvZmlsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB0ZXh0OiBtYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBsYXllclJvdXRlID0gbnVsbDtcbiAgICBsZXQgbGF5ZXJBcmVhID0gbnVsbDtcbiAgICBsZXQgbGF5ZXJWYWx1ZVJvdXRlID0gbnVsbDtcbiAgICBsZXQgbGF5ZXJWYWx1ZUFyZWEgPSBudWxsO1xuICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzKSB7XG4gICAgICBjb25zdCByb3V0ZXJMYXllcnMgPSBtYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgICAgZm9yIChsZXQga2V5IGluIHJvdXRlckxheWVycykge1xuICAgICAgICBpZiAocm91dGVyTGF5ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsYXllclJvdXRlID0gbGF5ZXJSb3V0ZSB8fCBrZXk7XG4gICAgICAgICAgbGF5ZXJWYWx1ZVJvdXRlID0gT2JqZWN0LmtleXMocm91dGVyTGF5ZXJzW2xheWVyUm91dGVdKVswXSB8fCBsYXllclZhbHVlUm91dGU7XG4gICAgICAgICAgbGF5ZXJBcmVhID0gbGF5ZXJBcmVhIHx8IGtleTtcbiAgICAgICAgICBsYXllclZhbHVlQXJlYSA9IE9iamVjdC5rZXlzKHJvdXRlckxheWVyc1tsYXllckFyZWFdKVswXSB8fCBsYXllclZhbHVlQXJlYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb3V0ZXI6IHByb3BzLnJvdXRlcixcbiAgICAgIG9ialNldHRpbmdzOiB7XG4gICAgICAgIFwicHJveHlVcmxcIjogbWFwQ29udHJvbGxlci5kYXRhLnByb3h5VXJsLFxuICAgICAgICBcImtleUF1dG9jb21wbGV0ZVwiOiBtYXBDb250cm9sbGVyLmRhdGEuYXV0b2NvbXBsZXRlLFxuICAgICAgICBcImNlbnRlclwiIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCBjZW50ZXIgPSBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgY2VudGVyID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIixcIkVQU0c6NDMyNlwiKTtcbiAgICAgICAgICByZXR1cm4gY2VudGVyO1xuICAgICAgICB9LFxuICAgICAgICBcImdlb3NlYXJjaFBhcmFtc1wiOiBtYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnBhcmFtc1xuICAgICAgfSxcbiAgICAgIGFjdGl2ZUlkOiBudWxsLFxuICAgICAgb3BlblJlc3VsdHM6IGZhbHNlLFxuICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiB7XG4gICAgICAgIGFyckZyb21Qb3NpdGlvbnM6IFtdLFxuICAgICAgICBhcnJGcm9tTmFtZXM6IFtdLFxuICAgICAgICBhcnJUb1Bvc2l0aW9uczogW10sXG4gICAgICAgIGFyclRvTmFtZXM6IFtdLFxuICAgICAgICBhcnJBcmVhUG9zaXRpb25zOiBbXSxcbiAgICAgICAgYXJyQXJlYU5hbWVzOiBbXSxcbiAgICAgICAgYXJyT3ZlclBvc2l0aW9uczoge30sXG4gICAgICAgIGFyck92ZXJOYW1lczoge31cbiAgICAgIH0sXG4gICAgICBmcm9tQWRkcmVzczogXCJcIixcbiAgICAgIHRvQWRkcmVzczogXCJcIixcbiAgICAgIGFyZWFBZGRyZXNzOiBcIlwiLFxuICAgICAgbGF5ZXJSb3V0ZTogbGF5ZXJSb3V0ZSxcbiAgICAgIGxheWVyQXJlYTogbGF5ZXJBcmVhLFxuICAgICAgbGF5ZXJWYWx1ZVJvdXRlOiBsYXllclZhbHVlUm91dGUsXG4gICAgICBsYXllclZhbHVlQXJlYTogbGF5ZXJWYWx1ZUFyZWEsXG4gICAgICBkZXRvdXJSb3V0ZTogcHJvcHMuZGV0b3VyUm91dGUuaW5pdGlhbCxcbiAgICAgIGRldG91ckFyZWE6IHByb3BzLmRldG91ckFyZWEuaW5pdGlhbCxcbiAgICAgIGZlYXR1cmVMaXN0OiB7XG4gICAgICAgIGZlYXR1cmVzOiBbXSxcbiAgICAgICAgdHlwZTogXCJcIlxuICAgICAgfSxcbiAgICAgIG1vZGU6IG1hcENvbnRyb2xsZXIuZGF0YS5pbml0aWFsTW9kZSxcbiAgICAgIG92ZXJQdEN0cjogMCxcbiAgICAgIG92ZXJBZGRyZXNzZXM6IFtdLFxuICAgICAgZmVhdHVyZVNvdXJjZTogdW5kZWZpbmVkLFxuICAgICAgcm91dGVyV2F5U291cmNlOiB1bmRlZmluZWQsXG4gICAgICByb3V0ZXJIaW50U291cmNlOiB1bmRlZmluZWQsXG4gICAgICBhcmVhUG9pbnQ6IG51bGwsXG4gICAgICBmcm9tUG9pbnQ6IG51bGwsXG4gICAgICB0b1BvaW50OiBudWxsLFxuICAgICAgb3ZlclBvaW50czogW10sXG4gICAgICBwcm9maWxlczogYXJyUHJvZmlsZXMgPyBhcnJQcm9maWxlcyA6IFtdLFxuICAgICAgY3VycmVudFByb2ZpbGU6IDAsXG4gICAgICBvcGVuOiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmluaXRpYWxfb3Blbl9jb21wID09PSBcInJvdXRpbmdcIikgfHwgZmFsc2UsIC8vVG9ET1xuICAgICAgb3BlblNldHRpbmdzOiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmluaXRpYWxfb3Blbl9jb21wID09PSBcInJvdXRpbmdcIikgfHwgZmFsc2UsIC8vVG9ET1xuICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zOiB7fSxcbiAgICAgIHJlc3VsdE1vZGU6IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pbml0aWFsUmVzdWx0TW9kZSB8fCBcImluc3RyXCJcbiAgICB9O1xuICAgIHRoaXMucG9wdXBSb3V0ZUJ1dHRvbldyYXBwZXIgPSBcIlwiOyAvLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIG9mIHRoZSBkaWZmZXJlbnQgcG9wdXAgaGFuZGxpbmdzXG4gICAgdGhpcy5zd2FwUG9pbnRzID0gdGhpcy5zd2FwUG9pbnRzLmJpbmQodGhpcyk7XG4gICAgaWYgKG1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgIHRoaXMucGVybWFsaW5rID0gbmV3IFJvdXRpbmdQZXJtYWxpbmsodGhpcyk7XG4gICAgfVxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwiYmlrZVwiLFxuICAgICAgNDogXCJiaWtlXCIsXG4gICAgICA1OiBcImJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJiaWtlXCIsXG4gICAgICA4OiBcImZvb3RcIixcbiAgICAgIDk6IFwiZm9vdFwiLFxuICAgICAgMTA6IFwid2hlZWxjaGFpclwiLFxuICAgICAgMTE6IFwiaGd2XCIsXG4gICAgICAxMjogXCJzY29vdGVyXCIsXG4gICAgICAxMzogXCJzY29vdGVyXCJcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgc291cmNlcyA9IHtcbiAgICAgIHdheVNvdXJjZTogdGhpcy5zdGF0ZS5yb3V0ZXJXYXlTb3VyY2UsXG4gICAgICBoaW50U291cmNlOiB0aGlzLnN0YXRlLnJvdXRlckhpbnRTb3VyY2UsXG4gICAgICBmZWF0dXJlU291cmNlOiB0aGlzLnN0YXRlLmZlYXR1cmVTb3VyY2VcbiAgICB9O1xuICAgIGxldCBzbGlkZXJPcHRpb25zID0ge307XG4gICAgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBzbGlkZXJPcHRpb25zID0ge1xuICAgICAgICBtaW46IG1hcERhdGEuZGV0b3VyUm91dGUubWluLFxuICAgICAgICBtYXg6IG1hcERhdGEuZGV0b3VyUm91dGUubWF4LFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5kZXRvdXJSb3V0ZSxcbiAgICAgICAgcm91dGVyOiB0aGlzXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgc2xpZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgbWluOiBtYXBEYXRhLmRldG91ckFyZWEubWluLFxuICAgICAgICBtYXg6IG1hcERhdGEuZGV0b3VyQXJlYS5tYXgsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmRldG91ckFyZWEsXG4gICAgICAgIHJvdXRlcjogdGhpc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzZXRGdW5jdGlvbnMgPSB7XG4gICAgICBmcm9tOiB0aGlzLnJlc2V0RnJvbVBvaW50LFxuICAgICAgdG86IHRoaXMucmVzZXRUb1BvaW50LFxuICAgICAgYXJlYTogdGhpcy5yZXNldEFyZWFQb2ludFxuICAgIH07XG5cbiAgICBjb25zdCBvdmVyU2V0dGluZ3MgPSB0aGlzLmNyZWF0ZU92ZXJTZXR0aW5ncygpO1xuXG5cbiAgICBsZXQgaGVhZGxpbmUgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgaGVhZGxpbmUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJIZWFkbGluZSB8fCB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFUl9ERUZBVUxUX0hFQURMSU5FX1JPVVRFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgaGVhZGxpbmUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhSGVhZGxpbmUgfHwgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfREVGQVVMVF9IRUFETElORV9BUkVBO1xuICAgIH1cblxuICAgIGxldCBpbnN0cnVjdGlvbnMgPSB0aGlzLnN0YXRlLnJvdXRlckluc3RydWN0aW9ucy5pbnN0cnVjdGlvbnM7XG5cbiAgICBsZXQgcmVzdWx0U3dpdGNoZXIgPSBcIlwiO1xuICAgIGxldCBzd2l0Y2hlckJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGlzdC5mZWF0dXJlcy5sZW5ndGggPiAwXG4gICAgICAmJiAoKHRoaXMuc3RhdGUuZnJvbUFkZHJlc3MgJiYgdGhpcy5zdGF0ZS50b0FkZHJlc3MgJiYgdGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpXG4gICAgICAgIHx8IHRoaXMuc3RhdGUuYXJlYUFkZHJlc3MgJiYgdGhpcy5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikpIHtcbiAgICAgIHN3aXRjaGVyQnV0dG9ucy5wdXNoKDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1mZWF0dXJlXCIgY2xhc3NOYW1lPXsodGhpcy5zdGF0ZS5yZXN1bHRNb2RlID09PSBcImZlYXRcIiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzKSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLnNldFJlc3VsdEZlYXR9IGtleT17MX0gdGl0bGU9e1wiRXJnZWJuaXNsaXN0ZSBhbnplaWdlblwifSAvPik7XG4gICAgfVxuICAgIGlmIChpbnN0cnVjdGlvbnMgJiYgKGluc3RydWN0aW9ucy5sZW5ndGggPiAwKSAmJiB0aGlzLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgc3dpdGNoZXJCdXR0b25zLnB1c2goPGJ1dHRvbiBpZD1cImM0Zy1yb3V0ZXItYnV0dG9uLWluc3RydWN0aW9uc1wiIGNsYXNzTmFtZT17KHRoaXMuc3RhdGUucmVzdWx0TW9kZSA9PT0gXCJpbnN0clwiICYmIHRoaXMuc3RhdGUub3BlblJlc3VsdHMpID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuc2V0UmVzdWx0SW5zdHJ9IGtleT17Mn0gdGl0bGU9e1wiUm91dGVuaGlud2Vpc2UgYW56ZWlnZW5cIn0gLz4pO1xuICAgIH1cbiAgICBpZiAoc3dpdGNoZXJCdXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdFN3aXRjaGVyID0gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1oaWRlLWZvcm0tYnV0dG9uIFwiICsgKHRoaXMuc3RhdGUub3BlblNldHRpbmdzID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7b3BlblNldHRpbmdzOiAhdGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3N9KX19IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFUl9TRVRUSU5HU30vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1tb2RlLXN3aXRjaFwiPlxuICAgICAgICAgICAge3N3aXRjaGVyQnV0dG9uc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItd3JhcHBlclwifT5cbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItZXh0ZW5kZWQtb3B0aW9uc1wifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctcm91dGVyLWNvbnRhaW5lci1yaWdodFwifSBkZXRhaWxCdG5DYj17dGhpcy50b2dnbGVEZXRhaWxzfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1zd2l0Y2hlclwifT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtyZXN1bHRTd2l0Y2hlcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PlwibG9hZGluZy4uLlwiPC9kaXY+fT5cbiAgICAgICAgICAgICAgPFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gcHJvZmlsZXM9e3RoaXMuc3RhdGUucHJvZmlsZXN9IHJvdXRlcj17dGhpc30gY3VycmVudFByb2ZpbGU9e3RoaXMuc3RhdGUuY3VycmVudFByb2ZpbGV9Lz5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmdcIjwvZGl2Pn0+XG4gICAgICAgICAgPFJvdXRlckNvbnRyb2xzIHJvdXRlcj17dGhpc30gb3Blbj17dGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3BlblNldHRpbmdzfSBzZXRPcGVuPXt0aGlzLm9wZW5Db250cm9sc30gcHJvZmlsZXM9e3RoaXMuc3RhdGUucHJvZmlsZXN9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXBhbmVsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ialNldHRpbmdzPXt0aGlzLnN0YXRlLm9ialNldHRpbmdzfSBvYmpGdW5jdGlvbnM9e3RoaXMub2JqRnVuY3Rpb25zfSBvdmVyU2V0dGluZ3M9e292ZXJTZXR0aW5nc30gZW5hYmxlT3ZlclBvaW50cz17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZW5hYmxlT3ZlclBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlcz17c291cmNlc30gbGF5ZXJzPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnN9IGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXN9IHJlc2V0RnVuY3Rpb25zPXtyZXNldEZ1bmN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBjdXJyZW50UHJvZmlsZT17dGhpcy5zdGF0ZS5jdXJyZW50UHJvZmlsZX0gZnJvbUFkZHJlc3M9e3RoaXMuc3RhdGUuZnJvbUFkZHJlc3N9IHN3aXRjaFRhcmdldHM9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmVuYWJsZVRhcmdldFN3aXRjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9BZGRyZXNzPXt0aGlzLnN0YXRlLnRvQWRkcmVzc30gYXJlYUFkZHJlc3M9e3RoaXMuc3RhdGUuYXJlYUFkZHJlc3N9IG1vZGU9e3RoaXMuc3RhdGUubW9kZX0gc2xpZGVyT3B0aW9ucz17c2xpZGVyT3B0aW9uc30gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ1RSTF9ST1VURVJ9IHRhcmdldD17dGhpcy5wcm9wcy50YXJnZXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PlwibG9hZGluZ1wiPC9kaXY+fT5cbiAgICAgICAgICA8Um91dGVyUmVzdWx0Q29udGFpbmVyIHZpc2libGU9e3RoaXMuc3RhdGUub3Blbn0gb3Blbj17dGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3BlblJlc3VsdHN9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gZGlyZWN0aW9uPXtcImJvdHRvbVwifSBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1yZXN1bHQtY29udGFpbmVyXCJ9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e3RoaXMuc3RhdGUubW9kZX0gc2V0UmVzdWx0RmVhdD17dGhpcy5zZXRSZXN1bHRGZWF0fSByb3V0ZXJJbnN0cnVjdGlvbnM9e3RoaXMuc3RhdGUucm91dGVySW5zdHJ1Y3Rpb25zfSBmZWF0dXJlTGlzdD17dGhpcy5zdGF0ZS5mZWF0dXJlTGlzdH0gcm91dGVyV2F5U291cmNlPXt0aGlzLnN0YXRlLnJvdXRlcldheVNvdXJjZX0gZGV0b3VyPXt0aGlzLnN0YXRlLmRldG91ckFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclJvdXRlPXt0aGlzLnN0YXRlLmxheWVyUm91dGV9IGxheWVyVmFsdWVSb3V0ZT17dGhpcy5zdGF0ZS5sYXllclZhbHVlUm91dGV9IGxheWVyQXJlYT17dGhpcy5zdGF0ZS5sYXllckFyZWF9IHJlc3VsdE1vZGU9e3RoaXMuc3RhdGUucmVzdWx0TW9kZX0gcm91dGVyPXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWYWx1ZUFyZWE9e3RoaXMuc3RhdGUubGF5ZXJWYWx1ZUFyZWF9IHJvdXRlckhpbnRTb3VyY2U9e3RoaXMuc3RhdGUucm91dGVySGludFNvdXJjZX0gZmVhdHVyZVNvdXJjZT17dGhpcy5zdGF0ZS5mZWF0dXJlU291cmNlfSBwcm9maWxlPXt0aGlzLnN0YXRlLmN1cnJlbnRQcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSWQ9e3RoaXMuc3RhdGUuYWN0aXZlSWR9IHNldEFjdGl2ZUlkPXt0aGlzLnNldEFjdGl2ZUlkfSBkZXRhaWxPcGVuPXt0aGlzLnN0YXRlLnJlc3VsdERldGFpbE9wZW59IHRvZ2dsZURldGFpbE9wZW49e3RoaXMudG9nZ2xlUmVzdWx0RGV0YWlsc30gaGVhZGxpbmU9e1wiUm91dGVyIEVyZ2Vibmlzc2VcIn0gbGFuZz17dGhpcy5sYW5ndWFnZUNvbnN0YW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHNldFJlc3VsdEluc3RyKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0TW9kZTogXCJpbnN0clwiLCBvcGVuUmVzdWx0czogdHJ1ZX0pO1xuICB9XG5cbiAgc2V0UmVzdWx0RmVhdChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdE1vZGU6IFwiZmVhdFwiLCBvcGVuUmVzdWx0czogdHJ1ZX0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuQ29udHJvbHMoZmFsc2UpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZUJ5SWQoaWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucHJvZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXJzZUludCh0aGlzLnN0YXRlLnByb2ZpbGVzW2ldLmlkLCAxMCkgPT09IHBhcnNlSW50KGlkLCAxMCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucHJvZmlsZXNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdG9nZ2xlUmVzdWx0RGV0YWlscygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZXN1bHREZXRhaWxPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHREZXRhaWxPcGVuOiBmYWxzZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHREZXRhaWxPcGVuOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkNvbnRyb2xzKG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlLCBvcGVuU2V0dGluZ3M6IHRydWV9KTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2luc3RyJywgdGhpcy5zZXRSZXN1bHRJbnN0cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmVhdCcsIHRoaXMuc2V0UmVzdWx0RmVhdCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICB0aGlzLnBlcm1hbGluay5oYW5kbGVJbml0aWFsUGFyYW1zKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZGl2KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgIGxldCBmcmFnbWVudHMgPSB0aGlzLnBlcm1hbGluay5saW5rRnJhZ21lbnRzO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZnJvbVBvaW50ICYmIGZyYWdtZW50cy5mcm9tQWRkcmVzcyAhPT0gdGhpcy5zdGF0ZS5mcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSkge1xuICAgICAgICB0aGlzLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZnJvbUFkZHJlc3NcIiwgdGhpcy5zdGF0ZS5mcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS50b1BvaW50ICYmIGZyYWdtZW50cy50b0FkZHJlc3MgIT09IHRoaXMuc3RhdGUudG9Qb2ludC5nZXRDb29yZGluYXRlcygpKSB7XG4gICAgICAgIHRoaXMucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJ0b0FkZHJlc3NcIiwgdGhpcy5zdGF0ZS50b1BvaW50LmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGZyYWdtZW50cy5tb2RlICE9PSB0aGlzLnN0YXRlLm1vZGUpIHtcbiAgICAgICAgdGhpcy5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcIm1vZGVcIiwgdGhpcy5zdGF0ZS5tb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChmcmFnbWVudHMuZGV0b3VyQXJlYSAhPT0gdGhpcy5zdGF0ZS5kZXRvdXJBcmVhKSB7XG4gICAgICAgIHRoaXMucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJBcmVhXCIsIHRoaXMuc3RhdGUuZGV0b3VyQXJlYSk7XG4gICAgICB9XG4gICAgICBpZiAoZnJhZ21lbnRzLmRldG91clJvdXRlICE9PSB0aGlzLnN0YXRlLmRldG91clJvdXRlKSB7XG4gICAgICAgIHRoaXMucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJSb3V0ZVwiLCB0aGlzLnN0YXRlLmRldG91clJvdXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByZXZTdGF0ZS5vcGVuID09PSB0cnVlICYmIHRoaXMuc3RhdGUub3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucm91dGVyTGF5ZXJHcm91cC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHRoaXMubW9kV2F5SW50ZXJhY3Rpb24uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuICYmICFwcmV2U3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcyk7XG4gICAgICB0aGlzLnJvdXRlckxheWVyR3JvdXAuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIHRoaXMubW9kV2F5SW50ZXJhY3Rpb24uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlblNldHRpbmdzICYmICF0aGlzLnN0YXRlLm9wZW5SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5TZXR0aW5nczogdHJ1ZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgJiYgIXByZXZTdGF0ZS5vcGVuU2V0dGluZ3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhcHJldlN0YXRlLm9wZW5SZXN1bHRzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuU2V0dGluZ3M6IGZhbHNlfSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhdGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgJiYgcHJldlN0YXRlLm9wZW5TZXR0aW5ncykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlblNldHRpbmdzOiB0cnVlfSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuU2V0dGluZ3MgJiYgIXRoaXMuc3RhdGUub3BlblJlc3VsdHMgJiYgcHJldlN0YXRlLm9wZW5SZXN1bHRzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuUmVzdWx0czogdHJ1ZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgJiYgKCF0aGlzLnN0YXRlLmZyb21BZGRyZXNzIHx8ICF0aGlzLnN0YXRlLnRvQWRkcmVzcykgJiYgdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiBwcmV2U3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UHJvZmlsZTogcHJvZmlsZX0sIHRoaXMudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMpO1xuICB9XG5cbiAgc2V0TGF5ZXIobGF5ZXIpIHtcbiAgICBsZXQgcm91dGVyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgIGxldCBsYXllclZhbHVlcyA9IHJvdXRlckxheWVyc1tsYXllcl07XG4gICAgbGV0IG5ld0RlZmF1bHRMYXllclZhbHVlID0gT2JqZWN0LmtleXMobGF5ZXJWYWx1ZXMpWzBdO1xuICAgIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxheWVyUm91dGU6IGxheWVyLFxuICAgICAgICBsYXllclZhbHVlUm91dGU6IG5ld0RlZmF1bHRMYXllclZhbHVlXG4gICAgICB9LCB0aGlzLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF5ZXJBcmVhOiBsYXllcixcbiAgICAgICAgbGF5ZXJWYWx1ZUFyZWE6IG5ld0RlZmF1bHRMYXllclZhbHVlXG4gICAgICB9LCB0aGlzLnBlcmZvcm1BcmVhKTtcbiAgICB9XG4gIH1cblxuICBzZXRMYXllclZhbHVlKGxheWVyVmFsdWUpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF5ZXJWYWx1ZVJvdXRlOiBsYXllclZhbHVlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNjb3BlLnNob3dGZWF0dXJlcyhzY29wZS5zdGF0ZS5mZWF0dXJlTGlzdC5mZWF0dXJlcywgc2NvcGUuc3RhdGUuZmVhdHVyZUxpc3QudHlwZSwgXCJyb3V0ZXJcIiwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGF5ZXJWYWx1ZUFyZWE6IGxheWVyVmFsdWVcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2NvcGUuc2hvd0ZlYXR1cmVzKHNjb3BlLnN0YXRlLmZlYXR1cmVMaXN0LmZlYXR1cmVzLCBzY29wZS5zdGF0ZS5mZWF0dXJlTGlzdC50eXBlLCBcImFyZWFcIiwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlSWQoYWN0aXZlSWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcImFjdGl2ZUlkXCI6IGFjdGl2ZUlkfSk7XG4gIH07XG5cbiAgc2V0T3Blbihib29sKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XCJvcGVuUmVzdWx0c1wiOiBib29sfSk7XG4gIH07XG5cbiAgc2V0QXJlYVBvaW50KGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5wZXJmb3JtUmV2ZXJzZVNlYXJjaChcImFyZWFBZGRyZXNzXCIsIFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJlYVBvaW50OiBwb2ludH0sICgpID0+IHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCkpO1xuICB9XG5cbiAgc2V0Um91dGVGcm9tKGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5wZXJmb3JtUmV2ZXJzZVNlYXJjaChcImZyb21BZGRyZXNzXCIsIFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFtsb25naXR1ZGUsIGxhdGl0dWRlXSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbVBvaW50OiBwb2ludH0sICgpID0+IHtzY29wZS51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpO30pO1xuICB9XG5cbiAgc2V0Um91dGVUbyhsb25naXR1ZGUsIGxhdGl0dWRlKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2goXCJ0b0FkZHJlc3NcIiwgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKTtcbiAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKTtcbiAgICB0aGlzLnNldFN0YXRlKHt0b1BvaW50OiBwb2ludH0sICgpID0+IHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCkpO1xuICB9XG5cbiAgYWRkT3ZlclBvaW50KGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2goXCJvdmVyQWRkcmVzc1wiLCBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0sIGluZGV4KTtcbiAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKTtcbiAgICBjb25zdCBvdmVyUG9pbnRzID0gdGhpcy5zdGF0ZS5vdmVyUG9pbnRzO1xuICAgIG92ZXJQb2ludHMuc3BsaWNlKGluZGV4LDEscG9pbnQpO1xuXG4gICAgLy8gb3ZlclBvaW50c1tpbmRleF0gPSBwb2ludDtcbiAgICB0aGlzLnNldFN0YXRlKHtvdmVyUG9pbnRzOiBvdmVyUG9pbnRzfSwgKCkgPT4gc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlICE9PSBtb2RlKSB7XG4gICAgICBsZXQgc291cmNlcyA9IHtcbiAgICAgICAgd2F5U291cmNlOiB0aGlzLnN0YXRlLnJvdXRlcldheVNvdXJjZSxcbiAgICAgICAgaGludFNvdXJjZTogdGhpcy5zdGF0ZS5yb3V0ZXJIaW50U291cmNlLFxuICAgICAgICBmZWF0dXJlU291cmNlOiB0aGlzLnN0YXRlLmZlYXR1cmVTb3VyY2UsXG4gICAgICAgIGxvY2F0aW9uU291cmNlOiB0aGlzLmxvY2F0aW9uc1NvdXJjZVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGU6IG1vZGV9LCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2VzKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzb3VyY2VzW2tleV0pIHtcbiAgICAgICAgICAgIHNvdXJjZXNba2V5XS5jbGVhcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzd2FwUG9pbnRzKCkge1xuICAgIGNvbnN0IG5ld0Zyb21Qb2ludCA9IHRoaXMuc3RhdGUudG9Qb2ludDtcbiAgICBjb25zdCBuZXdGcm9tQWRkcmVzcyA9IHRoaXMuc3RhdGUudG9BZGRyZXNzO1xuICAgIGNvbnN0IG5ld1RvUG9pbnQgPSB0aGlzLnN0YXRlLmZyb21Qb2ludDtcbiAgICBjb25zdCBuZXdUb0FkZHJlc3MgPSB0aGlzLnN0YXRlLmZyb21BZGRyZXNzO1xuICAgIGNvbnN0IGNvbnRhaW5lckFkZHJlc3NlcyA9IHRoaXMuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgIGNvbnN0IHRtcE5hbWVzID0gY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21OYW1lcztcbiAgICBjb25zdCB0bXBQb3MgPSBjb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbVBvc2l0aW9ucztcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzID0gY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXM7XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21Qb3NpdGlvbnMgPSBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnM7XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMgPSB0bXBOYW1lcztcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnMgPSB0bXBQb3M7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmcm9tUG9pbnQ6IG5ld0Zyb21Qb2ludCxcbiAgICAgIGZyb21BZGRyZXNzOiBuZXdGcm9tQWRkcmVzcyxcbiAgICAgIHRvUG9pbnQ6IG5ld1RvUG9pbnQsXG4gICAgICB0b0FkZHJlc3M6IG5ld1RvQWRkcmVzcyxcbiAgICAgIGNvbnRhaW5lckFkZHJlc3NlczogY29udGFpbmVyQWRkcmVzc2VzXG4gICAgfSwgdGhpcy51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cyk7XG4gIH1cblxuICBjcmVhdGVPdmVyU2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBvYmpTZXR0aW5ncyA9IHt9O1xuICAgIG9ialNldHRpbmdzLm92ZXJBZGRyZXNzZXMgPSB0aGlzLnN0YXRlLm92ZXJBZGRyZXNzZXM7XG4gICAgb2JqU2V0dGluZ3Mub3ZlclBvaW50cyA9IHRoaXMuc3RhdGUub3ZlclBvaW50cztcbiAgICBvYmpTZXR0aW5ncy5vdmVyUHRDdHIgPSB0aGlzLnN0YXRlLm92ZXJQdEN0cjtcbiAgICAvLyBpbmNyZW1lbnRzIHRoZSBvdmVyUHRDdHIgc28gdGhlIHBvcHVwIGNhbiByZW5kZXIgYWRkaXRpb25hbCBvdmVyRmllbGRzXG4gICAgb2JqU2V0dGluZ3Mub3ZlckZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY29udGFpbmVyQWRkcmVzc2VzID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgICAgY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJOYW1lc1tzY29wZS5zdGF0ZS5vdmVyUHRDdHJdID0gW107XG4gICAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyT3ZlclBvc2l0aW9uc1tzY29wZS5zdGF0ZS5vdmVyUHRDdHJdID0gW107XG4gICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgIG92ZXJQdEN0cjogc2NvcGUuc3RhdGUub3ZlclB0Q3RyICsgMSxcbiAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBjb250YWluZXJBZGRyZXNzZXNcbiAgICAgIH0pO1xuICAgIH07XG4gICAgb2JqU2V0dGluZ3Muc3dhcFBvaW50cyA9IHRoaXMuc3dhcFBvaW50cztcbiAgICBvYmpTZXR0aW5ncy5vYmpGdW5jdGlvbnMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUub3ZlclB0Q3RyOyBpKyspIHtcbiAgICAgIG9ialNldHRpbmdzLm9iakZ1bmN0aW9uc1tpXSA9IHRoaXMuY3JlYXRlQXV0b2NvbXBsZXRlRnVuY3Rpb25zRm9yT3ZlckZpZWxkKGkpO1xuICAgICAgaWYgKCFvYmpTZXR0aW5ncy5vdmVyQWRkcmVzc2VzW2ldKSB7XG4gICAgICAgIG9ialNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaV0gPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKCFvYmpTZXR0aW5ncy5vdmVyUG9pbnRzW2ldKSB7XG4gICAgICAgIG9ialNldHRpbmdzLm92ZXJQb2ludHNbaV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqU2V0dGluZ3M7XG4gIH1cblxuICBjcmVhdGVBdXRvY29tcGxldGVGdW5jdGlvbnNGb3JPdmVyRmllbGQoZmllbGRJZCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBzZXQgbGlzdGVuZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgZnJvbSBmaWVsZFxuICAgIGNvbnN0IGRlbGV0ZU92ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgY29udGFpbmVyQWRkcmVzc2VzID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgICAgY29udGFpbmVyQWRkcmVzc2VzLmFyck92ZXJQb3NpdGlvbnNbZmllbGRJZF0gPSBbXTtcbiAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbZmllbGRJZF0gPSBbXTtcbiAgICAgIGxldCBvdmVyUG9pbnRzID0gc2NvcGUuc3RhdGUub3ZlclBvaW50cztcbiAgICAgIG92ZXJQb2ludHMuc3BsaWNlKGZpZWxkSWQsIDEpO1xuICAgICAgLy8gZGVsZXRlIG92ZXJQb2ludHNbZmllbGRJZF07XG4gICAgICBsZXQgb3ZlckFkZHJlc3NlcyA9IHNjb3BlLnN0YXRlLm92ZXJBZGRyZXNzZXM7XG4gICAgICBvdmVyQWRkcmVzc2VzLnNwbGljZShmaWVsZElkLCAxKTtcbiAgICAgIC8vIGRlbGV0ZSBvdmVyQWRkcmVzc2VzW2ZpZWxkSWRdO1xuICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICBvdmVyUG9pbnRzOiBvdmVyUG9pbnRzLFxuICAgICAgICBjb250YWluZXJBZGRyZXNzZXM6IGNvbnRhaW5lckFkZHJlc3NlcyxcbiAgICAgICAgb3ZlckFkZHJlc3Nlczogb3ZlckFkZHJlc3NlcyxcbiAgICAgICAgb3ZlclB0Q3RyOiBzY29wZS5zdGF0ZS5vdmVyUHRDdHIgLSAxXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0T3Zlckxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICBsZXQgb3ZlckFkZHJlc3Nlcywgb3ZlclBvaW50cywgb3ZlclZhbHVlO1xuICAgICAgbGV0IHZhbHVlID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgIGxldCBpbmRleCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbZmllbGRJZF0uZmluZEluZGV4KFxuICAgICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGxldCBjb29yZCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyUG9zaXRpb25zW2ZpZWxkSWRdW2luZGV4XTtcbiAgICAgIG92ZXJBZGRyZXNzZXMgPSBzY29wZS5zdGF0ZS5vdmVyQWRkcmVzc2VzO1xuICAgICAgb3ZlckFkZHJlc3Nlc1tmaWVsZElkXSA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJPdmVyTmFtZXNbZmllbGRJZF1baW5kZXhdO1xuICAgICAgb3ZlclZhbHVlID0gbmV3IFBvaW50KFtjb29yZFsxXSwgY29vcmRbMF1dKTtcbiAgICAgIG92ZXJQb2ludHMgPSBzY29wZS5zdGF0ZS5vdmVyUG9pbnRzO1xuICAgICAgb3ZlclBvaW50c1tmaWVsZElkXSA9IG92ZXJWYWx1ZTtcbiAgICAgIHNjb3BlLnNldFN0YXRlKHtcbiAgICAgICAgb3ZlclBvaW50czogb3ZlclBvaW50cyxcbiAgICAgICAgb3ZlckFkZHJlc3Nlczogb3ZlckFkZHJlc3Nlc1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzY29wZS51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZU92ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNlbGYuZnJvbVZhbHVlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFwic2VsZWN0TGlzdGVuZXJcIjogc2VsZWN0T3Zlckxpc3RlbmVyLFxuICAgICAgXCJkZWxldGVGdW5jdGlvblwiOiBkZWxldGVPdmVyTGlzdGVuZXIsXG4gICAgICBcImNoYW5nZUxpc3RlbmVyXCI6IGNoYW5nZU92ZXJMaXN0ZW5lclxuICAgIH07XG4gIH1cblxuICB1cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuY2xlYXIoKTtcbiAgICB0aGlzLmFyZWFTb3VyY2UuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmZyb21Qb2ludCkge1xuICAgICAgICBsZXQgdG1wRmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5zdGF0ZS5mcm9tUG9pbnQuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Zyb21fbG9jc3R5bGVdKSB7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IGRvbmVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0sIHtcbiAgICAgICAgICAgIFwiZG9uZVwiOiBkb25lRnVuY3Rpb25cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS50b1BvaW50KSB7XG4gICAgICAgIGxldCB0bXBGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLnN0YXRlLnRvUG9pbnQuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZV0pIHtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IGRvbmVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlXSwge1xuICAgICAgICAgICAgXCJkb25lXCI6IGRvbmVGdW5jdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuYWRkRmVhdHVyZSh0bXBGZWF0dXJlKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUuZnJvbVBvaW50ICYmIHRoaXMuc3RhdGUudG9Qb2ludCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLm92ZXJQb2ludHMgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vdmVyUG9pbnRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLm92ZXJQb2ludHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5vdmVyUG9pbnRzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5zdGF0ZS5vdmVyUG9pbnRzW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0bXBGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5zdGF0ZS5vdmVyUG9pbnRzW2tleV0uY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2ludGVyaW1fbG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfaW50ZXJpbV9sb2NzdHlsZV0pIHtcbiAgICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9pbnRlcmltX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZS5hZGRGZWF0dXJlKHRtcEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZVN0YXJ0QnV0dG9uKSB7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJlYVBvaW50KSB7XG4gICAgICAgIGxldCB0bXBGZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLnN0YXRlLmFyZWFQb2ludC5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXSkge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgICB9fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmZvcm1BcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGcm9tUG9pbnQoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjb250YWluZXJBZGRyZXNzZXMgPSBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXM7XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyckZyb21Qb3NpdGlvbnMgPSBbXTtcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzID0gW107XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmcm9tUG9pbnQ6IG51bGwsXG4gICAgICBjb250YWluZXJBZGRyZXNzZXM6IGNvbnRhaW5lckFkZHJlc3NlcyxcbiAgICAgIGZyb21BZGRyZXNzOiBcIlwiXG4gICAgfSwgKCkgPT4ge1xuICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0VG9Qb2ludCgpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGNvbnRhaW5lckFkZHJlc3NlcyA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3NlcztcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9Qb3NpdGlvbnMgPSBbXTtcbiAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyVG9OYW1lcyA9IFtdO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9Qb2ludDogbnVsbCxcbiAgICAgIGNvbnRhaW5lckFkZHJlc3NlczogY29udGFpbmVyQWRkcmVzc2VzLFxuICAgICAgdG9BZGRyZXNzOiBcIlwiXG4gICAgfSwgKCkgPT4ge1xuICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0QXJlYVBvaW50KCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY29udGFpbmVyQWRkcmVzc2VzID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzO1xuICAgIGNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zID0gW107XG4gICAgY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lcyA9IFtdO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXJlYVBvaW50OiBudWxsLFxuICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBjb250YWluZXJBZGRyZXNzZXMsXG4gICAgICBhcmVhQWRkcmVzczogXCJcIlxuICAgIH0sICgpID0+IHtcbiAgICAgIHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVBdXRvY29tcGxldGVGdW5jdGlvbnMoKSB7XG4gICAgbGV0IG9iakZ1bmN0aW9ucyA9IHt9O1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBzZXQgbGlzdGVuZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgZnJvbSBmaWVsZFxuICAgIGNvbnN0IGRlbGV0ZUZyb21MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzY29wZS5yZXNldEZyb21Qb2ludCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RGcm9tTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICBsZXQgaW5kZXggPSBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbU5hbWVzLmZpbmRJbmRleChcbiAgICAgICAgZGFuZ2VyID0+IGRhbmdlciA9PT0gdmFsdWVcbiAgICAgICk7XG4gICAgICBsZXQgY29vcmQgPSBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXMuYXJyRnJvbVBvc2l0aW9uc1tpbmRleF07XG4gICAgICBsZXQgZnJvbVZhbHVlID0gbmV3IFBvaW50KFtjb29yZFsxXSwgY29vcmRbMF1dKTtcblxuICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICBmcm9tUG9pbnQ6IGZyb21WYWx1ZSxcbiAgICAgICAgZnJvbUFkZHJlc3M6IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJGcm9tTmFtZXNbaW5kZXhdXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNjb3BlLnVwZGF0ZVJvdXRlTGF5ZXJzQW5kUG9pbnRzKCk7XG4gICAgICAgIHNjb3BlLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZUZyb21MaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNlbGYuZnJvbVZhbHVlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgb2JqRnVuY3Rpb25zLmZyb21GdW5jdGlvbnMgPSB7XG4gICAgICBcInNlbGVjdExpc3RlbmVyXCI6IHNlbGVjdEZyb21MaXN0ZW5lcixcbiAgICAgIFwiZGVsZXRlRnVuY3Rpb25cIjogZGVsZXRlRnJvbUxpc3RlbmVyLFxuICAgICAgXCJjaGFuZ2VMaXN0ZW5lclwiOiBjaGFuZ2VGcm9tTGlzdGVuZXJcbiAgICB9O1xuXG4gICAgLy8gc2V0IGxpc3RlbmVyIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRvIGZpZWxkXG4gICAgY29uc3QgZGVsZXRlVG9MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzY29wZS5yZXNldFRvUG9pbnQoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0VG9MaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgICBsZXQgdmFsdWUgPSB1aS5pdGVtLnZhbHVlO1xuICAgICAgbGV0IGluZGV4ID0gc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzLmFyclRvTmFtZXMuZmluZEluZGV4KFxuICAgICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGxldCBjb29yZCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJUb1Bvc2l0aW9uc1tpbmRleF07XG4gICAgICBsZXQgdG9WYWx1ZSA9IG5ldyBQb2ludChbY29vcmRbMV0sIGNvb3JkWzBdXSk7XG5cbiAgICAgIHNjb3BlLnNldFN0YXRlKHtcbiAgICAgICAgdG9Qb2ludDogdG9WYWx1ZSxcbiAgICAgICAgdG9BZGRyZXNzOiBzY29wZS5zdGF0ZS5jb250YWluZXJBZGRyZXNzZXMuYXJyVG9OYW1lc1tpbmRleF1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICAgICAgc2NvcGUucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZVRvTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzZWxmLmZyb21WYWx1ZSA9IG51bGw7XG4gICAgfTtcblxuICAgIG9iakZ1bmN0aW9ucy50b0Z1bmN0aW9ucyA9IHtcbiAgICAgIFwic2VsZWN0TGlzdGVuZXJcIjogc2VsZWN0VG9MaXN0ZW5lcixcbiAgICAgIFwiZGVsZXRlRnVuY3Rpb25cIjogZGVsZXRlVG9MaXN0ZW5lcixcbiAgICAgIFwiY2hhbmdlTGlzdGVuZXJcIjogY2hhbmdlVG9MaXN0ZW5lclxuICAgIH07XG5cbiAgICAvLyBzZXQgbGlzdGVuZXIgZm9yIHRoZSBhdXRvY29tcGxldGUgdG8gZmllbGRcbiAgICBjb25zdCBkZWxldGVBcmVhTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgbGV0IGNvbnRhaW5lckFkZHJlc3NlcyA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3NlcztcbiAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zID0gW107XG4gICAgICBjb250YWluZXJBZGRyZXNzZXMuYXJyQXJlYU5hbWVzID0gW107XG4gICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgIGFyZWFQb2ludDogbnVsbCxcbiAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzOiBjb250YWluZXJBZGRyZXNzZXMsXG4gICAgICAgIGFyZWFBZGRyZXNzOiBcIlwiXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RBcmVhTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgdWkpe1xuICAgICAgbGV0IHZhbHVlID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgIGxldCBpbmRleCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhTmFtZXMuZmluZEluZGV4KFxuICAgICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGxldCBjb29yZCA9IHNjb3BlLnN0YXRlLmNvbnRhaW5lckFkZHJlc3Nlcy5hcnJBcmVhUG9zaXRpb25zW2luZGV4XTtcbiAgICAgIGxldCBhcmVhVmFsdWUgPSBuZXcgUG9pbnQoW2Nvb3JkWzFdLCBjb29yZFswXV0pO1xuXG4gICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgIGFyZWFQb2ludDogYXJlYVZhbHVlLFxuICAgICAgICBhcmVhQWRkcmVzczogc2NvcGUuc3RhdGUuY29udGFpbmVyQWRkcmVzc2VzLmFyckFyZWFOYW1lc1tpbmRleF1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKTtcbiAgICAgICAgc2NvcGUucGVyZm9ybUFyZWEoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VBcmVhTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzZWxmLmZyb21WYWx1ZSA9IG51bGw7XG4gICAgfTtcblxuICAgIG9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zID0ge1xuICAgICAgXCJzZWxlY3RMaXN0ZW5lclwiOiBzZWxlY3RBcmVhTGlzdGVuZXIsXG4gICAgICBcImRlbGV0ZUZ1bmN0aW9uXCI6IGRlbGV0ZUFyZWFMaXN0ZW5lcixcbiAgICAgIFwiY2hhbmdlTGlzdGVuZXJcIjogY2hhbmdlQXJlYUxpc3RlbmVyXG4gICAgfTtcblxuICAgIHJldHVybiBvYmpGdW5jdGlvbnM7XG4gIH1cblxuICBhZGRQb3B1cEhvb2soKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IGNyZWF0ZVBvcHVwV3JhcHBlciA9IGZ1bmN0aW9uIChvYmpQb3B1cCkge1xuICAgICAgbGV0IGZlYXR1cmUgPSBvYmpQb3B1cC5mZWF0dXJlO1xuICAgICAgbGV0IHJvdXRlciA9IHNjb3BlO1xuXG4gICAgICBsZXQgcm91dGluZ0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcm91dGVyLm9wZW5Db250cm9scyh0cnVlKTtcbiAgICAgICAgcm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgICAgICAgaWYgKGpRdWVyeShldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuUE9QVVBfUk9VVEVfRlJPTSkpIHtcbiAgICAgICAgICAvLyBmcm9tIGFkZHJlc3NcbiAgICAgICAgICBsZXQgZnJvbUNvb3JkcyA9IHRvTG9uTGF0KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpLCBcIkVQU0c6Mzg1N1wiKTtcbiAgICAgICAgICByb3V0ZXIuc2V0Um91dGVGcm9tKGZyb21Db29yZHNbMF0sIGZyb21Db29yZHNbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRvIGFkZHJlc3NcbiAgICAgICAgICBsZXQgdG9Db29yZHMgPSB0b0xvbkxhdChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwgXCJFUFNHOjM4NTdcIik7XG4gICAgICAgICAgcm91dGVyLnNldFJvdXRlVG8odG9Db29yZHNbMF0sIHRvQ29vcmRzWzFdKTtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gZW5kIG9mIFwicm91dGluZ0hhbmRsZXIoKVwiXG5cbiAgICAgIGxldCByb3V0ZUJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdXRlQnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUE9QVVBfUk9VVEVfV1JBUFBFUjtcblxuICAgICAgbGV0IHJvdXRlRnJvbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcm91dGVGcm9tQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST007XG4gICAgICBqUXVlcnkocm91dGVGcm9tQnV0dG9uKS5jbGljayhyb3V0aW5nSGFuZGxlcik7XG4gICAgICByb3V0ZUJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVGcm9tQnV0dG9uKTtcblxuICAgICAgbGV0IHJvdXRlRnJvbUJ1dHRvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAvLyByb3V0ZUZyb21CdXR0b25TcGFuLmlubmVySFRNTCA9IHNjb3BlLmxhbmd1YWdlQ29uc3RhbnRzLlBPUFVQX1JPVVRFX0ZST007XG4gICAgICByb3V0ZUZyb21CdXR0b24uYXBwZW5kQ2hpbGQocm91dGVGcm9tQnV0dG9uU3Bhbik7XG5cbiAgICAgIGxldCByb3V0ZVRvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByb3V0ZVRvQnV0dG9uLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLlBPUFVQX1JPVVRFX1RPO1xuICAgICAgalF1ZXJ5KHJvdXRlVG9CdXR0b24pLmNsaWNrKHJvdXRpbmdIYW5kbGVyKTtcbiAgICAgIHJvdXRlQnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZVRvQnV0dG9uKTtcblxuICAgICAgbGV0IHJvdXRlVG9CdXR0b25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgLy8gcm91dGVUb0J1dHRvblNwYW4uaW5uZXJIVE1MID0gc2NvcGUubGFuZ3VhZ2VDb25zdGFudHMuUE9QVVBfUk9VVEVfVE87XG4gICAgICByb3V0ZVRvQnV0dG9uLmFwcGVuZENoaWxkKHJvdXRlVG9CdXR0b25TcGFuKTtcbiAgICAgIHJldHVybiByb3V0ZUJ1dHRvbldyYXBwZXI7XG4gICAgfTtcblxuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2FwcGVuZFBvcHVwIHx8IFtdO1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfYXBwZW5kUG9wdXAucHVzaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIGxldCBtYXBDb250cm9sbGVyID0gcGFyYW1zLm1hcENvbnRyb2xsZXI7XG4gICAgICBsZXQgb2JqUG9wdXAgPSBwYXJhbXMucG9wdXA7XG4gICAgICBpZiAobWFwQ29udHJvbGxlci5jb21wb25lbnRzLnJvdXRlclxuICAgICAgICAmJiBvYmpQb3B1cC5wb3B1cC5yb3V0aW5nX2xpbmtcbiAgICAgICkge1xuICAgICAgICBpZiAocGFyc2VJbnQobWFwQ29udHJvbGxlci5kYXRhLnBvcHVwSGFuZGxpbmcsIDEwKSAhPT0gMykge1xuICAgICAgICAgIGxldCByb3V0ZUJ1dHRvbldyYXBwZXIgPSBjcmVhdGVQb3B1cFdyYXBwZXIob2JqUG9wdXApO1xuICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJGNvbnRlbnQuYXBwZW5kKHJvdXRlQnV0dG9uV3JhcHBlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGZlYXR1cmU6IG9ialBvcHVwLmZlYXR1cmUsXG4gICAgICAgICAgICByb3V0ZXI6IHNjb3BlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBwYXJhbXMuY29tcC5zZXRBZGRCdXR0b25zKFJvdXRlclBvcHVwQnV0dG9ucywgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGxldCBzdHlsZXMgPSBbXG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyZWFDZW50ZXJMb2NzdHlsZSxcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNsaWNrTG9jc3R5bGVcbiAgICBdO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcmlvcml0eUZlYXR1cmVzICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGUpIHtcbiAgICAgIHN0eWxlcy5wdXNoKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGUpO1xuICAgIH1cbiAgICAvLyBjaGVjayBhbmQgbG9hZCBsb2NhdGlvbiBzdHlsZXMgdmlhIG1hcC1wcm94eVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoc3R5bGVzKTtcbiAgICBsZXQgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuXG4gICAgLy8gY3JlYXRlIHJvdXRlciBsYXllciBvYmplY3RcbiAgICB0aGlzLm9iakxheWVycyA9IHt9O1xuICAgIGZvciAobGV0IGtleSBpbiBtYXBEYXRhLnJvdXRlckxheWVycykge1xuICAgICAgaWYgKG1hcERhdGEucm91dGVyTGF5ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5vYmpMYXllcnNba2V5XSA9IG1hcERhdGEucm91dGVyTGF5ZXJzW2tleV1bT2JqZWN0LmtleXMobWFwRGF0YS5yb3V0ZXJMYXllcnNba2V5XSlbMF1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCByb3V0ZXIgbGF5ZXIocylcbiAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgdGhpcy5yb3V0ZXJXYXlTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgdGhpcy5yb3V0ZXJXYXlMYXllciA9IG5ldyBWZWN0b3Ioe1xuICAgICAgc291cmNlOiB0aGlzLnJvdXRlcldheVNvdXJjZSxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHN0eWxlOiBbXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpJyxcbiAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCA1MSwgMTE5LCAwLjkpJyxcbiAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlckFsdFdheUxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMucm91dGluZ0FsdFdheVNvdXJjZSxcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHN0eWxlOiBbXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpJyxcbiAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgwLCA1MSwgMTE5LCAwLjQpJyxcbiAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIGxldCBzZWxlY3RJbnRlcmFjdGlvbiA9IG5ldyBTZWxlY3Qoe1xuICAgICAgc3R5bGU6IFtcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgd2lkdGg6IDhcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG4gICAgc2VsZWN0SW50ZXJhY3Rpb24ub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGZlYXR1cmUgPSBldmVudC5zZWxlY3RlZFswXTtcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBnZW9tZXRyeSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5ICYmIChnZW9tZXRyeS5nZXRUeXBlKCkgPT09ICdMaW5lU3RyaW5nJykpIHtcbiAgICAgICAgICBzZWxmLnNob3dBbHRSb3V0ZShzZWxmLnJlc3BvbnNlLCBmZWF0dXJlLmdldElkKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICBzZWxmLmNsaWNrRmVhdHVyZUVudHJ5Rm9yRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubWFwU2VsZWN0SW50ZXJhY3Rpb24gPSBzZWxlY3RJbnRlcmFjdGlvbjtcbiAgICB0aGlzLm1vZFdheUludGVyYWN0aW9uID0gbmV3IE1vZGlmeSh7XG4gICAgICBzb3VyY2U6IHRoaXMucm91dGVyV2F5U291cmNlLFxuICAgICAgc3R5bGU6IFtcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgd2lkdGg6IDhcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSk7XG4gICAgdGhpcy5tb2RXYXlJbnRlcmFjdGlvbi5vbignbW9kaWZ5c3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzZWxmLnN0YXRlLm9wZW4gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi5tb2RpZnlTdGFydFBvaW50ID0gbmV3IFBvaW50KGV2ZW50Lm1hcEJyb3dzZXJFdmVudC5jb29yZGluYXRlKS50cmFuc2Zvcm0oXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG4gICAgfSk7XG4gICAgdGhpcy5tb2RXYXlJbnRlcmFjdGlvbi5vbignbW9kaWZ5ZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZS5vcGVuICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBvdmVyUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQubWFwQnJvd3NlckV2ZW50LmNvb3JkaW5hdGUpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgIGxldCBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgbGV0IGluc2VydElkO1xuICAgICAgY29uc3QgYXJyS2V5cyA9IE9iamVjdC5rZXlzKHNlbGYuc3RhdGUub3ZlclBvaW50cyk7XG4gICAgICBpZiAoYXJyS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvcihsZXQgaWQgaW4gc2VsZi5zdGF0ZS5vdmVyUG9pbnRzKSB7XG4gICAgICAgICAgaWYgKHNlbGYuc3RhdGUub3ZlclBvaW50cy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGxldCBkaXN0ID0gc2VsZi5jYWxjRGlzdGFuY2Uoc2VsZi5tb2RpZnlTdGFydFBvaW50LmdldENvb3JkaW5hdGVzKCksIHNlbGYuc3RhdGUub3ZlclBvaW50c1tpZF0uZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICBpZihkaXN0IDwgbWluRGlzdGFuY2Upe1xuICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3Q7XG4gICAgICAgICAgICAgIGluc2VydElkID0gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3RTdGFydCA9IHNlbGYuY2FsY0Rpc3RhbmNlKHNlbGYuc3RhdGUuZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKCksIHNlbGYubW9kaWZ5U3RhcnRQb2ludC5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgbGV0IGRpc3RFbmQgPSBzZWxmLmNhbGNEaXN0YW5jZShzZWxmLnN0YXRlLnRvUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSwgc2VsZi5tb2RpZnlTdGFydFBvaW50LmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICBsZXQgZGlzdFN0YXJ0T2xkID0gc2VsZi5jYWxjRGlzdGFuY2Uoc2VsZi5zdGF0ZS5mcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKSwgc2VsZi5zdGF0ZS5vdmVyUG9pbnRzWzBdLmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICBsZXQgb3ZlckVuZEluZGV4ID0gYXJyS2V5c1thcnJLZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgZGlzdEVuZE9sZCA9IHNlbGYuY2FsY0Rpc3RhbmNlKFxuICAgICAgICAgIHNlbGYuc3RhdGUudG9Qb2ludC5nZXRDb29yZGluYXRlcygpLFxuICAgICAgICAgIHNlbGYuc3RhdGUub3ZlclBvaW50c1tvdmVyRW5kSW5kZXhdLmdldENvb3JkaW5hdGVzKClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZGlzdFN0YXJ0IDwgZGlzdFN0YXJ0T2xkKSB7XG4gICAgICAgICAgaW5zZXJ0SWQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGRpc3RFbmQgPCBkaXN0RW5kT2xkKSB7XG4gICAgICAgICAgaW5zZXJ0SWQrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zZXJ0SWQgPSAwO1xuICAgICAgfVxuICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaChcIm92ZXJBZGRyZXNzXCIsIG92ZXJQb2ludC5nZXRDb29yZGluYXRlcygpLCBpbnNlcnRJZCk7XG4gICAgICBzZWxmLmFkZE92ZXJQb2ludChvdmVyUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVswXSwgb3ZlclBvaW50LmdldENvb3JkaW5hdGVzKClbMV0sIGluc2VydElkKTtcbiAgICB9KTtcblxuICAgIHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oc2VsZWN0SW50ZXJhY3Rpb24pO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5lbmFibGVPdmVyUG9pbnRzKSB7XG4gICAgICBzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMubW9kV2F5SW50ZXJhY3Rpb24pO1xuICAgIH1cblxuICAgIHNlbGVjdEludGVyYWN0aW9uLnNldEFjdGl2ZShmYWxzZSk7XG5cbiAgICB0aGlzLnJvdXRlckhpbnRTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgdGhpcy5yb3V0ZXJIaW50TGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogdGhpcy5yb3V0ZXJIaW50U291cmNlLFxuICAgICAgc3R5bGU6IGZ1bmN0aW9uIChmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgICAgIHJldHVybiAoIXNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eSkgfHwgc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tYXBEYXRhID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG5cbiAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZSA9IG5ldyBWZWN0b3JTb3VyY2UoKTtcbiAgICB0aGlzLmxvY2F0aW9uc0xheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMubG9jYXRpb25zU291cmNlLFxuICAgICAgekluZGV4OiAyXG4gICAgfSk7XG4gICAgdGhpcy5hcmVhU291cmNlID0gbmV3IFZlY3RvclNvdXJjZSgpO1xuICAgIHRoaXMuYXJlYUxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IHRoaXMuYXJlYVNvdXJjZSxcbiAgICAgIHpJbmRleDogMlxuICAgIH0pO1xuICAgIHRoaXMucm91dGVyRmVhdHVyZXNTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG5cbiAgICB0aGlzLnJvdXRlckZlYXR1cmVzTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZSxcbiAgICAgIHpJbmRleDogMjAsXG4gICAgICAvLyBkZWNsdXR0ZXI6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlckxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIsXG4gICAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIsXG4gICAgICAgIHRoaXMubG9jYXRpb25zTGF5ZXIsXG4gICAgICAgIHRoaXMucm91dGVySGludExheWVyLFxuICAgICAgICB0aGlzLnJvdXRlckZlYXR1cmVzTGF5ZXIsXG4gICAgICAgIHRoaXMubG9jYXRpb25zTGF5ZXIsXG4gICAgICAgIHRoaXMuYXJlYUxheWVyXG4gICAgICBdKSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5yb3V0ZXJMYXllckdyb3VwKTtcbiAgICAvLyB0aGlzLnZpZXdSb3V0ZXIgPSB0aGlzLmFkZFJvdXRlckludGVyZmFjZSgpO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pbml0aWFsTW9kZSA9PT0gXCJyb3V0ZVwiIHx8ICF0aGlzLnZpZXdBcmVhKSB7XG4gICAgICAvLyB0aGlzLnZpZXdSb3V0ZXIuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBpZCA9PiBhcnJheSBvZiBpbnN0cnVjdGlvbnMsIGZvciBlYWNoIHJvdXRlIG9uZSBlbnRyeVxuICAgIHRoaXMucm91dGVJbnN0cnVjdGlvbnMgPSB7fTtcblxuICAgIC8vIHN0b3JlIHNvbWUgdmFycyBmb3IgYWpheC1yZXF1ZXN0c1xuICAgIGxldCBwcm9maWxlSWQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuXG4gICAgdGhpcy5nZW9TZWFyY2hBcGkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgJy8nICsgcHJvZmlsZUlkO1xuICAgIHRoaXMuZ2VvUmV2ZXJzZVNlYXJjaEFwaSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2hfcmV2ZXJzZSArICcvJyArIHByb2ZpbGVJZDtcbiAgICB0aGlzLnJvdXRpbmdBcGkgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkucm91dGluZyArICcvJyArIHByb2ZpbGVJZDtcblxuICAgIGlmICh0aGlzLnVzZVBlcm1hbGluaykge1xuICAgICAgdGhpcy5wZXJtYWxpbmtIYW5kbGVyLmhhbmRsZUluaXRpYWxQYXJhbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9iakZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlQXV0b2NvbXBsZXRlRnVuY3Rpb25zKCk7XG4gICAgdGhpcy5hZGRQb3B1cEhvb2soKTtcbiAgICB0aGlzLmFkZE1hcElucHV0SW50ZXJhY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnQxXG4gICAqIEBwYXJhbSBwb2ludDJcbiAgICovXG4gIGNhbGNEaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xuICAgIGxldCBzcXVhcmUxLCBzcXVhcmUyO1xuICAgIHNxdWFyZTEgPSBNYXRoLnBvdyhwb2ludDFbMF0gLSBwb2ludDJbMF0sIDIpO1xuICAgIHNxdWFyZTIgPSBNYXRoLnBvdyhwb2ludDFbMV0gLSBwb2ludDJbMV0sIDIpO1xuICAgIHJldHVybiBNYXRoLnNxcnQoc3F1YXJlMSArIHNxdWFyZTIpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSByb3V0ZSBpbnN0cnVjdGlvbnMgaW4gdGhlIHBvcnRzaWRlIHJvdXRlci5cbiAgICogQHBhcmFtIHJvdXRlUmVzcG9uc2VcbiAgICogQHBhcmFtIHJvdXRlTnVtYmVyXG4gICAqL1xuICBzaG93Um91dGVJbnN0cnVjdGlvbnMocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIsIHJvdXRlcldheVNvdXJjZSwgcm91dGVySGludFNvdXJjZSkge1xuXG4gICAgdmFyIHNjb3BlLFxuICAgICAgcm91dGVySW5zdHJ1Y3Rpb24sXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIsXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sLFxuICAgICAgaW5zdHIsXG4gICAgICBzdHJUeXBlLFxuICAgICAgc3RyTW9kLFxuICAgICAgcm93c3R5bGUsXG4gICAgICByb3V0ZU51bWJlciA9IHJvdXRlTnVtYmVyIHx8IDAsXG4gICAgICBpLFxuICAgICAgaixcbiAgICAgIHJvdXRlX25hbWVfMCA9IFwiXCIsXG4gICAgICByb3V0ZV9uYW1lXzEgPSBcIlwiLFxuICAgICAgdG90YWxfZGlzdGFuY2UgPSBcIlwiLFxuICAgICAgdG90YWxfdGltZSA9IFwiXCI7XG5cbiAgICBzY29wZSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93SW5zdHJ1Y3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyLmNsYXNzTmFtZSA9IHJvdXRpbmdDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI7XG5cbiAgICBpZiAocm91dGVSZXNwb25zZSkge1xuICAgICAgaWYgKCEocm91dGVSZXNwb25zZS5mZWF0dXJlcyAmJiByb3V0ZVJlc3BvbnNlLmZlYXR1cmVzLmxlbmd0aCA+IDApIHx8ICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93RmVhdHVyZXMpIHtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXJcIikuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzEnIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcxJykgey8vT1NSTS1BUEk6NS54XG4gICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1swXS5zdW1tYXJ5KSB7XG4gICAgICAgICAgcm91dGVfbmFtZV8wID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeS5zcGxpdChcIixcIilbMF07XG4gICAgICAgICAgcm91dGVfbmFtZV8xID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeS5zcGxpdChcIixcIilbMV07XG4gICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzFdKSB7XG4gICAgICAgICAgICByb3V0ZV9uYW1lXzEgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1sxXS5zdW1tYXJ5LnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG90YWxfZGlzdGFuY2UgPSAocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmRpc3RhbmNlKTtcbiAgICAgICAgdG90YWxfdGltZSA9IChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uZHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzAnKSB7Ly9PU1JNLUFQSTo8NVxuICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lKSB7XG4gICAgICAgICAgcm91dGVfbmFtZV8wID0gcm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lWzBdO1xuICAgICAgICAgIHJvdXRlX25hbWVfMSA9IHJvdXRlUmVzcG9uc2Uucm91dGVfbmFtZVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkpIHtcbiAgICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IChyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkudG90YWxfZGlzdGFuY2UpO1xuICAgICAgICAgIHRvdGFsX3RpbWUgPSAocm91dGVSZXNwb25zZS5yb3V0ZV9zdW1tYXJ5LnRvdGFsX3RpbWUpO1xuICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzInKSB7Ly9PUlMtQVBJXG4gICAgICAgIHRvdGFsX3RpbWUgPSAocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnN1bW1hcnkuZHVyYXRpb24pO1xuICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc3VtbWFyeS5kaXN0YW5jZSk7XG4gICAgICAgIGxldCBpbnN0cnVjdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IHNlZ21lbnRzID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnNlZ21lbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50U2VnbWVudC5zdGVwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gY3VycmVudFNlZ21lbnQuc3RlcHNbal07XG4gICAgICAgICAgICBjdXJyZW50U3RlcC5sZW5ndGggPSBjdXJyZW50U3RlcC5kaXN0YW5jZSAvIDEwMDA7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMucHVzaChjdXJyZW50U3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVJbnN0cnVjdGlvbnNbcm91dGVOdW1iZXJdID0ge1xuICAgICAgICAgIHRpbWU6IHRvdGFsX3RpbWUsXG4gICAgICAgICAgZGlzdGFuY2U6IHRvdGFsX2Rpc3RhbmNlLFxuICAgICAgICAgIGluc3RydWN0aW9uczogaW5zdHJ1Y3Rpb25zXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uczogdGhpcy5yb3V0ZUluc3RydWN0aW9uc1tyb3V0ZU51bWJlcl0sXG4gICAgICAgICAgXCJyb3V0ZXJXYXlTb3VyY2VcIjogcm91dGVyV2F5U291cmNlLFxuICAgICAgICAgIFwicm91dGVySGludFNvdXJjZVwiOiByb3V0ZXJIaW50U291cmNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMycgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzMnKSB7IC8vR3JhcGhob3BwZXJcbiAgICAgICAgdG90YWxfZGlzdGFuY2UgPSByb3V0ZVJlc3BvbnNlLnBhdGhzW3JvdXRlTnVtYmVyXS5kaXN0YW5jZTtcbiAgICAgICAgdG90YWxfdGltZSA9IHJvdXRlUmVzcG9uc2UucGF0aHNbcm91dGVOdW1iZXJdLnRpbWUgLyAxMDAwIDtcblxuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gW107XG4gICAgICAgIGxldCBzZWdtZW50cyA9IHJvdXRlUmVzcG9uc2UucGF0aHNbcm91dGVOdW1iZXJdLmluc3RydWN0aW9ucztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjdXJyZW50SW5zdHJ1Y3Rpb24gPSBzZWdtZW50c1tpXTtcbiAgICAgICAgICBjdXJyZW50SW5zdHJ1Y3Rpb24ubGVuZ3RoID0gY3VycmVudEluc3RydWN0aW9uLmRpc3RhbmNlIC8gMTAwMDtcbiAgICAgICAgICBjdXJyZW50SW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb24gPSBjdXJyZW50SW5zdHJ1Y3Rpb24udGV4dDtcbiAgICAgICAgICBjdXJyZW50SW5zdHJ1Y3Rpb24udHlwZSA9IGN1cnJlbnRJbnN0cnVjdGlvbi5zaWduO1xuICAgICAgICAgIGluc3RydWN0aW9ucy5wdXNoKGN1cnJlbnRJbnN0cnVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZUluc3RydWN0aW9uc1tyb3V0ZU51bWJlcl0gPSB7XG4gICAgICAgICAgdGltZTogdG90YWxfdGltZSxcbiAgICAgICAgICBkaXN0YW5jZTogdG90YWxfZGlzdGFuY2UsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBpbnN0cnVjdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zOiB0aGlzLnJvdXRlSW5zdHJ1Y3Rpb25zW3JvdXRlTnVtYmVyXSxcbiAgICAgICAgICBcInJvdXRlcldheVNvdXJjZVwiOiByb3V0ZXJXYXlTb3VyY2UsXG4gICAgICAgICAgXCJyb3V0ZXJIaW50U291cmNlXCI6IHJvdXRlckhpbnRTb3VyY2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICc0JyB8fCByb3V0ZVJlc3BvbnNlLnJvdXRlVHlwZSA9PSAnNCcpIHsgLy9WYWxoYWxsYVxuICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IHJvdXRlUmVzcG9uc2UudHJpcC5zdW1tYXJ5Lmxlbmd0aCAqMTAwMDtcbiAgICAgICAgdG90YWxfdGltZSA9IHJvdXRlUmVzcG9uc2UudHJpcC5zdW1tYXJ5LnRpbWUgO1xuICAgICAgICB0aGlzLnJvdXRlSW5zdHJ1Y3Rpb25zW3JvdXRlTnVtYmVyXSA9IHtcbiAgICAgICAgICB0aW1lOiB0b3RhbF90aW1lLFxuICAgICAgICAgIGRpc3RhbmNlOiB0b3RhbF9kaXN0YW5jZSxcbiAgICAgICAgICBpbnN0cnVjdGlvbnM6IHJvdXRlUmVzcG9uc2UudHJpcC5sZWdzW3JvdXRlTnVtYmVyXS5tYW5ldXZlcnNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zOiB0aGlzLnJvdXRlSW5zdHJ1Y3Rpb25zW3JvdXRlTnVtYmVyXSxcbiAgICAgICAgICBcInJvdXRlcldheVNvdXJjZVwiOiByb3V0ZXJXYXlTb3VyY2UsXG4gICAgICAgICAgXCJyb3V0ZXJIaW50U291cmNlXCI6IHJvdXRlckhpbnRTb3VyY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3V0ZV9uYW1lXzAgJiYgcm91dGVfbmFtZV8xKSB7XG4gICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlci5pbm5lckhUTUwgPSAnPGxhYmVsPicgKyB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFICsgJzwvbGFiZWw+IDxlbT4nICsgcm91dGVfbmFtZV8wICsgJyAmIzg1OTQ7ICcgKyByb3V0ZV9uYW1lXzEgKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF9kaXN0YW5jZSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9USU1FICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfdGltZSArICc8L2VtPjxicj4nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlICYmIEFycmF5LmlzQXJyYXkodGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlKSkge1xuICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIuaW5uZXJIVE1MID0gJzxsYWJlbD4nICsgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9QUk9GSUxFICsgJzwvbGFiZWw+IDxlbT4nICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW3RoaXMucm91dGVQcm9maWxlLmFjdGl2ZV0gKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0UgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF9kaXN0YW5jZSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9USU1FICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfdGltZSArICc8L2VtPjxicj4nO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sID0gJzx0YWJsZSBjbGFzcz1cIicgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUgKyAnXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCI+JztcblxuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMScgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzEnKSB7Ly9PU1JNLUFQSTo1LnhcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzAnIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcwJykgey8vT1NSTS1BUEk6PDVcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzInIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcyJykgey8vT3BlblJvdXRlU2VydmljZVxuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09PSAnMycgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzMnKSB7IC8vIEdyYXBoaG9wcGVyXG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT09ICc0JyB8fCByb3V0ZVJlc3BvbnNlLnJvdXRlVHlwZSA9PSAnNCcpIHsgLy8gVmFsaGFsbGFcblxuICAgICAgfVxuXG5cbiAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvdGFibGU+JztcblxuICAgICAgcm91dGVySW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gcm91dGVySW5zdHJ1Y3Rpb25zSHRtbDtcblxuXG4gICAgICB0aGlzLmFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb24oKTtcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXMgaW1wbGVtZW50YXRpb24gb2YgdGhlIGZvcndhcmQgZ2Vvc2VhcmNoLlxuICAgKi9cbiAgYXN5bmMgcGVyZm9ybUdlb1NlYXJjaChhZGRyZXNzKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCB1cmwgPSBzY29wZS5nZW9TZWFyY2hBcGkgKyAnP2Zvcm1hdD1qc29uJmxpbWl0PTEmcT0nICsgZW5jb2RlVVJJKGFkZHJlc3MpO1xuICAgIGlmICh0aGlzLm1hcERhdGEgJiYgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaCAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnNlYXJjaEtleSAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnVybCkge1xuICAgICAgdXJsID0gdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC51cmwgKyBcInNlYXJjaC5waHA/a2V5PVwiICsgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgKyAnJmZvcm1hdD1qc29uJmxpbWl0PTEmcT0nICsgZW5jb2RlVVJJKGFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gW3BhcnNlRmxvYXQoZGF0YVswXS5sb24pLCBwYXJzZUZsb2F0KGRhdGFbMF0ubGF0KV07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZXR1cm4gW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNob3cgZXJyb3IgaGludFxuICAgICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgICBhbGVydEhhbmRsZXIuc2hvd0luZm9EaWFsb2coc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9FUlJPUiwgc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICAgIH1cblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBhbGVydEhhbmRsZXIgPSBuZXcgQWxlcnRIYW5kbGVyKCk7XG4gICAgICBhbGVydEhhbmRsZXIuc2hvd0luZm9EaWFsb2coc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9FUlJPUiwgc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyB0aGUgZ2VvLWNvb3JkaW5hdGVzIGZvciBhIGdpdmVuIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gJGlucHV0ICAgICAgICBUaGUgaW5wdXQgZmllbGQgY29udGFpbmluZyB0aGUgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSAgICAgICAgIFRoZSBwcm9wZXJ0eSBpbiB3aGljaCB0aGUgcmVzdWx0aW5nIGNvb3JkaW5hdGUgc2hvdWxkIGJlIHN0b3JlZC5cbiAgICogQHBhcmFtIG9wdF9jYWxsYmFjayAgT3B0aW9uYWwgY2FsbGJhY2suIElzIGV4ZWN1dGVkIGFmdGVyIHN1Y2Nlc3NmdWwgc2VhcmNoLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGVyZm9ybVNlYXJjaCgkaW5wdXQsIHZhbHVlLCBvcHRfY2FsbGJhY2spIHtcblxuICAgIHZhciBtYXAsXG4gICAgICBib3VuZHMsXG4gICAgICB2aWV3Ym94LFxuICAgICAgc2NvcGUsXG4gICAgICB1cmw7XG5cbiAgICBzY29wZSA9IHRoaXM7XG5cbiAgICBpZiAoJGlucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICBkZWxldGUgc2NvcGVbdmFsdWVdO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgbWFwID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXA7XG4gICAgYm91bmRzID0gbWFwLmdldFZpZXcoKS5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSk7XG4gICAgYm91bmRzID0gdHJhbnNmb3JtRXh0ZW50KGJvdW5kcywgbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCksICdFUFNHOjQzMjYnKTtcbiAgICB2aWV3Ym94ID0gJyZ2aWV3Ym94PScgKyBib3VuZHNbMF0gKyAnLCcgKyBib3VuZHNbMV0gKyAnLCcgKyBib3VuZHNbMl0gKyAnLCcgKyBib3VuZHNbM107XG4gICAgdXJsID0gc2NvcGUuZ2VvU2VhcmNoQXBpICsgJz9mb3JtYXQ9anNvbiZsaW1pdD0xJnE9JyArIGVuY29kZVVSSSgkaW5wdXQudmFsKCkpICsgdmlld2JveDtcbiAgICBpZiAodGhpcy5tYXBEYXRhICYmIHRoaXMubWFwRGF0YS5nZW9zZWFyY2ggJiYgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgJiYgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC51cmwpIHtcbiAgICAgIHVybCA9IHRoaXMubWFwRGF0YS5nZW9zZWFyY2gudXJsICsgXCJzZWFyY2gucGhwP2tleT1cIiArIHRoaXMubWFwRGF0YS5nZW9zZWFyY2guc2VhcmNoS2V5ICsgJyZmb3JtYXQ9anNvbiZsaW1pdD0xJnE9JyArIGVuY29kZVVSSSgkaW5wdXQudmFsKCkpICsgdmlld2JveDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5wYXJhbXMpIHtcbiAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMubWFwRGF0YS5nZW9zZWFyY2gucGFyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICB1cmwgKz0gXCImXCIgKyBwYXJhbSArIFwiPVwiICsgdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC5wYXJhbXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICd1cmwnOiB1cmxcbiAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwib3ZlclZhbHVlXCIpIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLm92ZXJWYWx1ZSkge1xuICAgICAgICAgICAgc2NvcGUub3ZlclZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBvdmVyUG9pbnQgPSBuZXcgUG9pbnQoW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXSk7XG4gICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9ICAkaW5wdXQubmV4dCgpWzBdO1xuICAgICAgICAgIC8vIHRyYXZlcnNlIHRoZSBkb20gbGV2ZWwgdW50aWwgdGhlIGRlbGV0ZSBidXR0b24gaXMgZm91bmRcbiAgICAgICAgICB3aGlsZSAoIWpRdWVyeShkZWxldGVCdXR0b24pLmhhc0NsYXNzKCdjNGctcm91dGVyLWlucHV0LWNsZWFyJykpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbiA9IGpRdWVyeShkZWxldGVCdXR0b24pLm5leHQoKVswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWxldGVCdXR0b24uaWQgPSBvdmVyUG9pbnRbJ29sX3VpZCddO1xuICAgICAgICAgIHNjb3BlLm92ZXJWYWx1ZS5wdXNoKG92ZXJQb2ludCk7XG4gICAgICAgICAgc2NvcGUuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgY29vcmRzID0gW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXTtcbiAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoY29vcmRzKTtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwiZnJvbVZhbHVlXCIpIHtcbiAgICAgICAgICAgIHNjb3BlLnNldFN0YXRlKHtmcm9tUG9pbnQ6IHBvaW50LCBmcm9tQWRkcmVzczogJGlucHV0LnZhbCgpfSwgKCkgPT4gc2NvcGUudXBkYXRlUm91dGVMYXllcnNBbmRQb2ludHMoKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ0b1ZhbHVlXCIpIHtcbiAgICAgICAgICAgIHNjb3BlLnNldFN0YXRlKHt0b1BvaW50OiBwb2ludCwgdG9BZGRyZXNzOiAkaW5wdXQudmFsKCl9LCAoKSA9PiBzY29wZS51cGRhdGVSb3V0ZUxheWVyc0FuZFBvaW50cygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUT0RPIHdpZWRlciBlaW5iYXVlblxuICAgICAgICAgIC8vIHN3aXRjaCh2YWx1ZSkge1xuICAgICAgICAgIC8vICAgY2FzZSBcImZyb21WYWx1ZVwiOlxuICAgICAgICAgIC8vICAgICBzY29wZS51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc0Zyb21cIiwgY29vcmRzKTtcbiAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gICBjYXNlIFwidG9WYWx1ZVwiOlxuICAgICAgICAgIC8vICAgICBzY29wZS51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc1RvXCIsIGNvb3Jkcyk7XG4gICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgIC8vICAgY2FzZSBcImFyZWFWYWx1ZVwiOlxuICAgICAgICAgIC8vICAgICBzY29wZS51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc0FyZWFcIiwgY29vcmRzKTtcbiAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gICBkZWZhdWx0OlxuICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNob3cgZXJyb3IgaGludFxuICAgICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgICBhbGVydEhhbmRsZXIuc2hvd0luZm9EaWFsb2coc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9FUlJPUiwgc2NvcGUucHJvcHMubGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9BRERSRVNTKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9jYWxsYmFjayAmJiB0eXBlb2Ygb3B0X2NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3B0X2NhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgYWxlcnRIYW5kbGVyLnNob3dJbmZvRGlhbG9nKHNjb3BlLnByb3BzLmxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUxFUlRfRVJST1IsIHNjb3BlLnByb3BzLmxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gXCJcIjtcblxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgZ2l2ZW4gY29vcmRpbmF0ZSBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0gc3RhdGVQcm9wICAgICBUaGUgc3RhdGUgcHJvcGVydHkgb2YgdGhpcyB3aGVyZSB0aGUgYWRkcmVzcyBzaG91bGQgYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0gdmFsdWUgICAgICAgICBUaGUgcHJvcGVydHkgdGhhdCBjb250YWlucyB0aGUgY29vcmRpbmF0ZXMuXG4gICAqIEBwYXJhbSBvcHRfaW5kZXggICAgIFRoZSBpbmRleCBmb3IgdGhlIG92ZXJBZGRyZXNzIChvdmVyIHBvaW50cyBvbmx5KVxuICAgKi9cbiAgcGVyZm9ybVJldmVyc2VTZWFyY2goc3RhdGVQcm9wLCB2YWx1ZSwgb3B0X2luZGV4KSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICB1cmw7XG5cbiAgICB1cmwgPSB0aGlzLmdlb1JldmVyc2VTZWFyY2hBcGkgKyAnP2Zvcm1hdD1qc29uJmxhdD0nICsgdmFsdWVbMV0gKyAnJmxvbj0nICsgdmFsdWVbMF07XG4gICAgaWYgKHRoaXMubWFwRGF0YSAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoICYmIHRoaXMubWFwRGF0YS5nZW9zZWFyY2gucmV2ZXJzZUtleSAmJiB0aGlzLm1hcERhdGEuZ2Vvc2VhcmNoLnVybCkge1xuICAgICAgdXJsID0gdGhpcy5tYXBEYXRhLmdlb3NlYXJjaC51cmwgKyBcInJldmVyc2UucGhwP2tleT1cIiArIHRoaXMubWFwRGF0YS5nZW9zZWFyY2gucmV2ZXJzZUtleSArICcmZm9ybWF0PWpzb24mbGF0PScgKyB2YWx1ZVsxXSArICcmbG9uPScgKyB2YWx1ZVswXTtcbiAgICB9XG5cbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICAndXJsJzogdXJsXG4gICAgfSlcbiAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLnJvYWQgfHwgcmVzcG9uc2UuYWRkcmVzcy5wYXRoIHx8IHJlc3BvbnNlLmFkZHJlc3MucGVkZXN0cmlhbikge1xuICAgICAgICAgICAgICB2YWx1ZSArPSByZXNwb25zZS5hZGRyZXNzLnJvYWQgfHwgcmVzcG9uc2UuYWRkcmVzcy5wYXRoIHx8IHJlc3BvbnNlLmFkZHJlc3MucGVkZXN0cmlhbjtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gXCIgXCIgKyByZXNwb25zZS5hZGRyZXNzLmhvdXNlX251bWJlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MuY2l0eSB8fCByZXNwb25zZS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgdmFsdWUgKz0gdmFsdWUgPyBcIiwgXCI6IFwiXCI7XG4gICAgICAgICAgICAgIHZhbHVlICs9IHJlc3BvbnNlLmFkZHJlc3MuY2l0eSB8fCByZXNwb25zZS5hZGRyZXNzLnRvd247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgdmFsdWUgPSByZXNwb25zZS5kaXNwbGF5X25hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFRPRE8gdXBkYXRlIHJvdXRlciBwZXJtYWxpbmtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlUHJvcCkge1xuICAgICAgICAgICAgY2FzZSBcImFyZWFBZGRyZXNzXCI6XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2FyZWFBZGRyZXNzOiB2YWx1ZX0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoXCIjYXJlYUZyb21cIikudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNhcmVhRnJvbVwiKS52YWwodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlua0ZyYWdtZW50cyhcImFkZHJlc3NBcmVhXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZnJvbUFkZHJlc3NcIjpcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7ZnJvbUFkZHJlc3M6IHZhbHVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdGcm9tXCIpLnZhbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgLy8gdXBkYXRlIGFkZHJlc3MgaW4gbGlua1xuICAgICAgICAgICAgICAvLyBzZWxmLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJhZGRyZXNzRnJvbVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvQWRkcmVzc1wiOlxuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt0b0FkZHJlc3M6IHZhbHVlfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvLyB1cGRhdGUgYWRkcmVzcyBpbiBsaW5rXG4gICAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlua0ZyYWdtZW50cyhcImFkZHJlc3NUb1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm92ZXJBZGRyZXNzXCI6XG4gICAgICAgICAgICAgIGNvbnN0IG92ZXJBZGRyZXNzZXMgPSBzZWxmLnN0YXRlLm92ZXJBZGRyZXNzZXM7XG4gICAgICAgICAgICAgIG92ZXJBZGRyZXNzZXMuc3BsaWNlKG9wdF9pbmRleCwgMSwgdmFsdWUpO1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtvdmVyQWRkcmVzc2VzOiBvdmVyQWRkcmVzc2VzfSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYW4gYXJlYSBzZWFyY2ggd2l0aCB0aGUgZ2l2ZW4gcG9pbnQgYXMgY2VudGVyLiBJZiB0aGVyZSBhcmUgYW55LCB0aGUgZmVhdHVyZXMgaW4gdGhlIHBlcmltZXRlciB3aWxsIGJlXG4gICAqIGRyYXduIG9udG8gdGhlIG1hcCBhbmQgZGlzcGxheWVkIGluIHRoZSBmZWF0dXJlIGNvbnRhaW5lci5cbiAgICovXG4gIHBlcmZvcm1BcmVhKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGZyb21Qb2ludCA9IHRoaXMuc3RhdGUuYXJlYVBvaW50O1xuXG4gICAgaWYgKCFmcm9tUG9pbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGZyb21Db29yZCA9IFtmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgIGxldCBwcm9maWxlSWQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgIGxldCB1cmwgPSAnY29uNGdpcy9hcmVhU2VydmljZS8nICsgcHJvZmlsZUlkICsgJy8nICsgdGhpcy5zdGF0ZS5sYXllckFyZWEgKyAnLycgKyB0aGlzLnN0YXRlLmRldG91ckFyZWEgKyAnLycgKyBmcm9tQ29vcmQ7XG4gICAgdXJsICs9ICc/cHJvZmlsZT0nICsgdGhpcy5zdGF0ZS5jdXJyZW50UHJvZmlsZTtcbiAgICBpZiAoc2VsZi5hcmVhQWpheCkge1xuICAgICAgc2VsZi5hcmVhQWpheC5hYm9ydCgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuc3Bpbm5lci5zaG93KCk7XG4gICAgc2VsZi5hcmVhQWpheCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICd1cmwnOiB1cmxcbiAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBzZWxmLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIC8vIGNvbnN0IHJvdXRlckxheWVycyA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgICAgICAgIC8vIGNvbnN0IGNob3Nlbk9wdGlvbiA9IHNlbGYuYWN0aXZlTGF5ZXJWYWx1ZUFyZWE7XG4gICAgICAgICAgLy8gdGhpcyBzaG91bGQgYmUgY2hhbmdlZCBzb29uLCBhcyBpdCB0b3RhbGx5IG1lc3NlcyB1cCB0aGUgbG9naWMgb2YgdGhlIHN0cnVjdHVyZVxuICAgICAgICAgIGxldCBzb3J0ZWRGZWF0dXJlcyA9IHNlbGYuc2hvd0ZlYXR1cmVzKHJlc3BvbnNlWzBdLCByZXNwb25zZVsxXSwgXCJhcmVhXCIpO1xuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgXCJmZWF0dXJlTGlzdFwiOiB7XG4gICAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogc29ydGVkRmVhdHVyZXMsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiByZXNwb25zZVsxXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmVhdHVyZVNvdXJjZVwiOiBzZWxmLnJvdXRlckZlYXR1cmVzU291cmNlLFxuICAgICAgICAgICAgXCJvcGVuUmVzdWx0c1wiOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIHJvdXRlIHNlYXJjaCB3aXRoIHRoZSBnaXZlbiBmcm9tIGFuZCB0byBwb2ludHMuIERpc3BsYXlzIGZlYXR1cmVzIGFuZCBmZWF0dXJlIGVudHJpZXMgb24gc3VjY2Vzcy4gVXNlc1xuICAgKiBvdmVycG9pbnRzLCBpZiBhbnkgYXJlIGdpdmVuLlxuICAgKiBAcGFyYW0gZnJvbVBvaW50XG4gICAqIEBwYXJhbSB0b1BvaW50XG4gICAqIEBwYXJhbSBvdmVyUG9pbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBlcmZvcm1WaWFSb3V0ZShmcm9tUG9pbnQsIHRvUG9pbnQsIG92ZXJQb2ludCkge1xuXG4gICAgdmFyIHVybCxcbiAgICAgIHNjb3BlLFxuICAgICAgZnJvbUNvb3JkLFxuICAgICAgdG9Db29yZCxcbiAgICAgIG92ZXJDb29yZDtcblxuICAgIHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlU291cmNlKSB7XG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVTb3VyY2UuY2xlYXIoKTtcbiAgICB9XG4gICAgLy8gdGhpcy5hcmVhU291cmNlLmNsZWFyKCk7XG4gICAgdGhpcy5tYXBTZWxlY3RJbnRlcmFjdGlvbi5nZXRGZWF0dXJlcygpLmNsZWFyKCk7XG4gICAgaWYgKCFmcm9tUG9pbnQpIHtcbiAgICAgIGZyb21Qb2ludCA9IHRoaXMuZnJvbVBvaW50O1xuICAgICAgaWYgKCFmcm9tUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRvUG9pbnQpIHtcbiAgICAgIGlmICghdG9Qb2ludCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0b1BvaW50ID0gdGhpcy50b1BvaW50O1xuICAgIH1cbiAgICBpZiAoIW92ZXJQb2ludCkge1xuICAgICAgaWYgKHRoaXMub3ZlclBvaW50cykge1xuICAgICAgICBvdmVyUG9pbnQgPSB0aGlzLm92ZXJQb2ludHM7XG4gICAgICB9XG4gICAgfVxuICAgIGZyb21Db29yZCA9IFtmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgIHRvQ29vcmQgPSBbdG9Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCB0b1BvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgIGlmIChvdmVyUG9pbnQgJiYgT2JqZWN0LmtleXMob3ZlclBvaW50KS5sZW5ndGggPiAwKSB7XG4gICAgICBvdmVyQ29vcmQgPSBbXTtcbiAgICAgIGZvciAodmFyIHByb3B0IGluIG92ZXJQb2ludCkge1xuICAgICAgICBpZiAob3ZlclBvaW50Lmhhc093blByb3BlcnR5KHByb3B0KSAmJiBvdmVyUG9pbnRbcHJvcHRdKSB7XG4gICAgICAgICAgb3ZlckNvb3JkLnB1c2goW292ZXJQb2ludFtwcm9wdF0uZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgb3ZlclBvaW50W3Byb3B0XS5nZXRDb29yZGluYXRlcygpWzBdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPj0gJzEnKSB7Ly9PU1JNLUFQSTo1Lnggb3IgT1JTLSBBUElcbiAgICAgIGxldCBwcm9maWxlSWQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuXG4gICAgICB1cmwgPSAnY29uNGdpcy9yb3V0ZVNlcnZpY2UvJyArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgKyAnLydcbiAgICAgICAgKyBwcm9maWxlSWQgKyAnLycgKyB0aGlzLnN0YXRlLmxheWVyUm91dGUgKyAnLydcbiAgICAgICAgKyB0aGlzLnN0YXRlLmRldG91clJvdXRlICsgJy8nICsgZnJvbUNvb3JkO1xuXG4gICAgICBpZiAob3ZlclBvaW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3ZlckNvb3JkLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIHVybCArPSAnOycgKyBvdmVyQ29vcmRbaV07XG4gICAgICB9XG4gICAgICB1cmwgKz0gJzsnICsgdG9Db29yZDtcbiAgICAgIC8vIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQcm9maWxlKSB7XG4gICAgICAgIHVybCArPSAnP3Byb2ZpbGU9JyArIHRoaXMuc3RhdGUuY3VycmVudFByb2ZpbGU7XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChzY29wZS5yb3V0ZUFqYXgpIHtcbiAgICAgICAgc2NvcGUucm91dGVBamF4LmFib3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLnJvdXRlQWpheCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICAgJ3VybCc6IHVybFxuICAgICAgfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2NvcGUucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAvLyBsZXQgZXJyb3JEaXYgPSBzY29wZS5zaG93Um91dGVyRXJyb3Ioc2NvcGUubGFuZ3VhZ2VDb25zdGFudHNbcmVzcG9uc2UuZXJyb3JdKTtcbiAgICAgICAgICAgICAgbGV0IGFsZXJ0SGFuZGxlciA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgYWxlcnRIYW5kbGVyLnNob3dJbmZvRGlhbG9nKHNjb3BlLnByb3BzLmxhbmdDb25zdGFudHNbcmVzcG9uc2UuZXJyb3JdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNjb3BlLnNob3dSb3V0ZUxheWVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgc2NvcGUuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJlc3BvbnNlLCAwLCBzY29wZS5yb3V0ZXJXYXlTb3VyY2UsIHNjb3BlLnJvdXRlckhpbnRTb3VyY2UpO1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZmVhdHVyZXMgJiYgKHJlc3BvbnNlLmZlYXR1cmVzLmVsZW1lbnRzIHx8IHJlc3BvbnNlLmZlYXR1cmVzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNvcnRlZEZlYXR1cmVzID0gc2NvcGUuc2hvd0ZlYXR1cmVzKHJlc3BvbnNlLmZlYXR1cmVzLCByZXNwb25zZS50eXBlLCBcInJvdXRlclwiKTtcbiAgICAgICAgICAgICAgICBzY29wZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBcImZlYXR1cmVMaXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVzXCI6ICAgc29ydGVkRmVhdHVyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHJlc3BvbnNlLnR5cGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImZlYXR1cmVTb3VyY2VcIjogc2NvcGUucm91dGVyRmVhdHVyZXNTb3VyY2UsXG4gICAgICAgICAgICAgICAgICBcIm9wZW5SZXN1bHRzXCI6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2NvcGUucm91dGVBamF4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2xvc2VBZnRlclNlYXJjaCkge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgfSBlbHNlIHsvL09TUk0tQVBJOjw1XG4gICAgICB0cnkge1xuICAgICAgICB1cmwgPSAnY29uNGdpcy9yb3V0ZVNlcnZpY2UvJyArIHByb2ZpbGVJZCArICc/b3V0cHV0PWpzb24maW5zdHJ1Y3Rpb25zPXRydWUmYWx0PWZhbHNlJmxvY19mcm9tPScgKyBmcm9tQ29vcmQgKyAnJmxvY190bz0nICsgdG9Db29yZDtcblxuICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgJ3VybCc6IHVybFxuICAgICAgICB9KVxuICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgc2NvcGUuc2hvd1JvdXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGNhdGNoIChFeGNlcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgdXNlIGEgbW9yZSBtb2Rlcm4gQVBJLVZlcnNpb24gZm9yIHRoZSBSb3V0ZXNlcnZpY2VcIilcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIHJvdXRpbmcgcHJvcGVydGllcyBhbmQgdHJpZ2dlcnMgYSBuZXcgcm91dGUgc2VhcmNoLCB3aGVuIHRoZSBtYW5kYXRvcnkgcGFyYW1ldGVycyBhcmUgc2V0LlxuICAgKi9cbiAgcmVjYWxjdWxhdGVSb3V0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mcm9tUG9pbnQgJiYgdGhpcy5zdGF0ZS50b1BvaW50KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vdmVyUG9pbnRzICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3ZlclBvaW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1WaWFSb3V0ZSh0aGlzLnN0YXRlLmZyb21Qb2ludCwgdGhpcy5zdGF0ZS50b1BvaW50LCB0aGlzLnN0YXRlLm92ZXJQb2ludHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtVmlhUm91dGUodGhpcy5zdGF0ZS5mcm9tUG9pbnQsIHRoaXMuc3RhdGUudG9Qb2ludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlTGF5ZXIobGF5ZXJJZCkge1xuICAgIHJldHVybiB0aGlzLm9iakxheWVyc1tsYXllcklkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgZmVhdHVyZXMgZnJvbSB0aGUgbWFwIGFuZCBkaXNwbGF5cyB0aGUgZ2l2ZW4gbmV3IGZlYXR1cmVzLiBUaGUgZmVhdHVyZXMgYXJlIHNvcnRlZCBieSB0aGUgY29uZmlndXJlZFxuICAgKiBwcm9wZXJ0eS4gVGhlIGZ1bmN0aW9uIHRha2VzIHRoZSBiYWNrZW5kIGNvbmZpZ3VyYXRpb24gYWNjb3JkaW5nIHRvIHByaW9yaXRpemVkIGZlYXR1cmVzIGludG8gYWNjb3VudC5cbiAgICogQHBhcmFtIGZlYXR1cmVzXG4gICAqIEBwYXJhbSB0eXBlXG4gICAqIEBwYXJhbSBtb2RlXG4gICAqIEBwYXJhbSBub0NsZWFyXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgc2hvd0ZlYXR1cmVzKGZlYXR1cmVzLCB0eXBlID0gXCJ0YWJsZVwiLCBtb2RlID0gXCJyb3V0ZXJcIiwgbm9DbGVhcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghbm9DbGVhcikge1xuICAgICAgdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5jbGVhcigpO1xuICAgIH1cbiAgICAvLyBpbnRlcmltIGNsZWFyIG9mIGZlYXR1cmUgc2VsZWN0aW9uXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMubWFwRGF0YTtcbiAgICBsZXQgbGF5ZXJJZCA9IHRoaXMuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5zdGF0ZS5sYXllclJvdXRlIDogdGhpcy5zdGF0ZS5sYXllckFyZWE7XG4gICAgbGV0IGFjdGl2ZUxheWVyID0gdGhpcy5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnN0YXRlLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMuc3RhdGUubGF5ZXJWYWx1ZUFyZWE7XG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEFjdGl2ZUxheWVyKGxheWVySWQpLmxheWVyRGF0YTtcbiAgICBjb25zdCB1bnN0eWxlZEZlYXR1cmVzID0gW107XG4gICAgbGV0IGNvbnRlbnRGZWF0dXJlcyA9IFtdO1xuICAgIGxldCBtaXNzaW5nU3R5bGVzID0gW107XG4gICAgY29uc3QgcHJpY2VTb3J0ZWRGZWF0dXJlcyA9IGZlYXR1cmVzLmxlbmd0aCA/IGZlYXR1cmVzLnNsaWNlKCkgOiBmZWF0dXJlcy5lbGVtZW50cy5zbGljZSgpO1xuICAgIGxldCBiZXN0RmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmJlc3RGZWF0dXJlSWRzID0gW107XG4gICAgaWYgKG1hcERhdGEucHJpb3JpdHlGZWF0dXJlcyAmJiBtYXBEYXRhLnByaW9yaXR5TG9jc3R5bGUgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gc29ydCBieSBzZWxlY3RlZCB2YWx1ZSBmb3IgdGhlIG1hcCBsYWJlbCBhc2NlbmRpbmdcbiAgICAgIHByaWNlU29ydGVkRmVhdHVyZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChhW21hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXV0pIC0gcGFyc2VGbG9hdChiW21hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXV0pO1xuICAgICAgfSk7XG4gICAgICBsZXQgZmVhdHVyZUNvdW50ID0gcGFyc2VJbnQobWFwRGF0YS5wcmlvcml0eUZlYXR1cmVzLCAxMCk7XG4gICAgICBsZXQgdXBwZXJCb3VuZCA9IGZlYXR1cmVDb3VudCA+IHByaWNlU29ydGVkRmVhdHVyZXMubGVuZ3RoID8gcHJpY2VTb3J0ZWRGZWF0dXJlcy5sZW5ndGggOiBmZWF0dXJlQ291bnQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwcGVyQm91bmQ7IGkrKykge1xuICAgICAgICBiZXN0RmVhdHVyZXNbaV0gPSBwcmljZVNvcnRlZEZlYXR1cmVzW2ldO1xuICAgICAgICB0aGlzLmJlc3RGZWF0dXJlSWRzLnB1c2gocHJpY2VTb3J0ZWRGZWF0dXJlc1tpXVsnaWQnXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBcInBldHJvbHNcIiAmJiBtb2RlICE9PSBcImFyZWFcIikge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5lbGVtZW50cztcbiAgICB9XG4gICAgaWYgKHR5cGUgIT09IFwib3ZlcnBhc3NcIikge1xuICAgICAgZmVhdHVyZUxvb3A6XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBmZWF0dXJlcyAmJiAoaSA8IGZlYXR1cmVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgIGlmICghZmVhdHVyZXNbaV0uaWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbGFiZWwgPSBcIlwiO1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgbGV0IHJlc3VsdENvb3JkaW5hdGU7XG4gICAgICAgICAgbGV0IGNvbnRlbnRGZWF0dXJlO1xuICAgICAgICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQoZmVhdHVyZVsnZ2VveCddKSwgcGFyc2VGbG9hdChmZWF0dXJlWydnZW95J10pXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcbiAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUgPSBuZXcgRmVhdHVyZShwb2ludCk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0SWQoZmVhdHVyZS5pZCk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsb2NfbGlua3VybCcsIGxheWVyLmxvY19saW5rdXJsKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2xvY3N0eWxlJywgbGF5ZXIubG9jc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnaG92ZXJfbG9jYXRpb24nLCBsYXllci5ob3Zlcl9sb2NhdGlvbik7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3pvb21fb25jbGljaycsIGxheWVyLnpvb21fb25jbGljayk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCd0aWQnLCBmZWF0dXJlLmlkKTtcblxuICAgICAgICAgIGlmIChtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVxuICAgICAgICAgICAgICAmJiBtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVthY3RpdmVMYXllcl1cbiAgICAgICAgICAgICAgJiYgbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXG4gICAgICAgICAgICAgICYmIGZlYXR1cmVbbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFiZWwgPSBmZWF0dXJlW21hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXV07XG4gICAgICAgICAgfSBlbHNlIGlmIChtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVxuICAgICAgICAgICAgICAmJiBtYXBEYXRhLnJvdXRlckxheWVyc1tsYXllcklkXVthY3RpdmVMYXllcl1cbiAgICAgICAgICAgICAgJiYgbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXG4gICAgICAgICAgICAgICYmIGZlYXR1cmUudGFnc1xuICAgICAgICAgICAgICAmJiBmZWF0dXJlLnRhZ3NbbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGFiZWwgPSBmZWF0dXJlLnRhZ3NbbWFwRGF0YS5yb3V0ZXJMYXllcnNbbGF5ZXJJZF1bYWN0aXZlTGF5ZXJdWydtYXBMYWJlbCddXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gZmVhdHVyZVsnbG9jc3R5bGUnXSB8fCBsYXllci5sb2NzdHlsZTtcbiAgICAgICAgICBpZiAobWFwRGF0YS5wcmlvcml0eUZlYXR1cmVzICYmIG1hcERhdGEucHJpb3JpdHlMb2NzdHlsZSkge1xuICAgICAgICAgICAgaWYgKGJlc3RGZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKSkge1xuICAgICAgICAgICAgICBsb2NzdHlsZSA9IG1hcERhdGEucHJpb3JpdHlMb2NzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsb2NhdGlvblN0eWxlJywgbG9jc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnekluZGV4JywgaSk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgICBpZiAobG9jc3R5bGUgJiYgc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpIHtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldFN0eWxlKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5oaWRlRmVhdHVyZXNXaXRob3V0TGFiZWwpIHtcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIGxhYmVsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEZlYXR1cmVzLnB1c2goY29udGVudEZlYXR1cmUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZW50RmVhdHVyZXMucHVzaChjb250ZW50RmVhdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnc3R5bGVJZCcsIGxvY3N0eWxlKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5oaWRlRmVhdHVyZXNXaXRob3V0TGFiZWwpIHtcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIGxhYmVsICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdW5zdHlsZWRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzW2xvY3N0eWxlXSA9IGxvY3N0eWxlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzLnB1c2goY29udGVudEZlYXR1cmUpO1xuICAgICAgICAgICAgICBtaXNzaW5nU3R5bGVzW2xvY3N0eWxlXSA9IGxvY3N0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCB0YWcgaW4gZmVhdHVyZS50YWdzKSB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS50YWdzLmhhc093blByb3BlcnR5KHRhZykpIHtcbiAgICAgICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KHRhZywgZmVhdHVyZS50YWdzW3RhZ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZ2VvanNvbjtcblxuICAgICAgaWYgKGZlYXR1cmVzLmVsZW1lbnRzKSB7XG4gICAgICAgIGdlb2pzb24gPSBvc210b2dlb2pzb24oZmVhdHVyZXMpO1xuICAgICAgICB0aGlzLmdlb0pzb25GZWF0dXJlcyA9IGdlb2pzb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW9qc29uID0gdGhpcy5nZW9Kc29uRmVhdHVyZXM7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXBQcm9qID0gc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgY29udGVudEZlYXR1cmVzID0gbmV3IEdlb0pTT04oKS5yZWFkRmVhdHVyZXMoZ2VvanNvbiwge1xuICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBQcm9qXG4gICAgICB9KTtcbiAgICAgIGxldCBsYWJlbEtleSA9IG1hcERhdGEucm91dGVyTGF5ZXJzW2xheWVySWRdW2FjdGl2ZUxheWVyXVsnbWFwTGFiZWwnXTtcbiAgICAgIGZvciAobGV0IGlkIGluIGNvbnRlbnRGZWF0dXJlcykge1xuICAgICAgICBpZiAoY29udGVudEZlYXR1cmVzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlc1tpZF0uc2V0KCdsb2NfbGlua3VybCcsIGxheWVyLmxvY19saW5rdXJsKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldCgnbG9jc3R5bGUnLCBsYXllci5sb2NzdHlsZSk7XG4gICAgICAgICAgY29udGVudEZlYXR1cmVzW2lkXS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgbGF5ZXIuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlc1tpZF0uc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldCgnem9vbV9vbmNsaWNrJywgbGF5ZXIuem9vbV9vbmNsaWNrKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldCgndGlkJywgcGFyc2VJbnQoY29udGVudEZlYXR1cmVzW2lkXS5nZXQoJ2lkJykuc3BsaXQoJy8nKVsxXSkpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlc1tpZF0uc2V0KCdsYWJlbCcsIGNvbnRlbnRGZWF0dXJlc1tpZF0uZ2V0KGxhYmVsS2V5KSk7XG4gICAgICAgICAgaWYgKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICAgICAgICBjb250ZW50RmVhdHVyZXNbaWRdLnNldFN0eWxlKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWlzc2luZ1N0eWxlcyAmJiBtaXNzaW5nU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMobWlzc2luZ1N0eWxlcywge1xuICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnN0eWxlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVJZCA9IHVuc3R5bGVkRmVhdHVyZXNbaV0uZ2V0KCdzdHlsZUlkJyk7XG4gICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzW2ldLnNldFN0eWxlKHNlbGYucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF0uc3R5bGUpO1xuICAgICAgICAgICAgc2VsZi5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5hZGRGZWF0dXJlKHVuc3R5bGVkRmVhdHVyZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtaXNzaW5nU3R5bGVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnRGZWF0dXJlcyAmJiBjb250ZW50RmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5hZGRGZWF0dXJlcyhjb250ZW50RmVhdHVyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcHJpY2VTb3J0ZWRGZWF0dXJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgbWFpbiByb3V0ZS5cbiAgICogQHBhcmFtIHJvdXRlUmVzcG9uc2VcbiAgICovXG4gIHNob3dSb3V0ZShyb3V0ZVJlc3BvbnNlKSB7XG5cbiAgICB0aGlzLnNob3dSb3V0ZUxheWVyKHJvdXRlUmVzcG9uc2UsIDApO1xuICAgIHRoaXMuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJvdXRlUmVzcG9uc2UsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYW4gYWx0ZXJuYXRlIHJvdXRlLlxuICAgKiBAcGFyYW0gcm91dGVSZXNwb25zZVxuICAgKiBAcGFyYW0gcm91dGVOdW1iZXJcbiAgICovXG4gIHNob3dBbHRSb3V0ZShyb3V0ZVJlc3BvbnNlLCByb3V0ZU51bWJlcikge1xuICAgIHRoaXMuc2hvd1JvdXRlTGF5ZXIocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIpO1xuICAgIHRoaXMuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJvdXRlUmVzcG9uc2UsIHJvdXRlTnVtYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIHJvdXRlIG9uIHRoZSBtYXAuXG4gICAqIEBwYXJhbSByb3V0ZVJlc3BvbnNlXG4gICAqIEBwYXJhbSByb3V0ZU51bWJlclxuICAgKi9cbiAgc2hvd1JvdXRlTGF5ZXIocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIpIHtcblxuICAgIHZhciBtYXBWaWV3LFxuICAgICAgd2F5UG9seWxpbmUsXG4gICAgICByb3V0ZUZlYXR1cmVzLFxuICAgICAgYWx0Um91dGVGZWF0dXJlcyxcbiAgICAgIHJpZ2h0UGFkZGluZyxcbiAgICAgIGxlZnRQYWRkaW5nLFxuICAgICAgcm91dGVOdW1iZXIgPSByb3V0ZU51bWJlciB8fCAwO1xuXG4gICAgaWYgKHJvdXRlUmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucm91dGVyV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIG1hcFZpZXcgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcxJyB8fCB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzEnIHx8IHJvdXRlUmVzcG9uc2Uucm91dGVUeXBlID09ICcyJykgey8vT1NSTS1BUEk6NS54XG4gICAgICAgIHdheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKCk7XG5cbiAgICAgICAgLy8gYWRkIHJvdXRlXG5cbiAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzICkgey8vY2hlY2sgZm9yIGFsdGVybmF0aXZlIHJvdXRlXG4gICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzWzFdKSB7XG4gICAgICAgICAgICBpZiAocm91dGVOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1swXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmdlb21ldHJ5LCB7XG4gICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByb3V0ZUZlYXR1cmVzWzBdLnNldElkKHJvdXRlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJyB8fCByb3V0ZVJlc3BvbnNlLnJvdXRlVHlwZSA9PSAnMCcpey8vT1NSTS1BUEk6PDVcbiAgICAgICAgd2F5UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoe1xuICAgICAgICAgICdmYWN0b3InOiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdmlhcm91dGVfcHJlY2lzaW9uIHx8IDFlNlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgcm91dGVcbiAgICAgICAgcm91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlX2dlb21ldHJ5LCB7XG4gICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICczJyl7XG4gICAgICAgIHdheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKCk7XG4gICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnBhdGhzICYmIHJvdXRlUmVzcG9uc2UucGF0aHNbMV0pIHsvL2NoZWNrIGZvciBhbHRlcm5hdGl2ZSByb3V0ZVxuICAgICAgICAgIGlmIChyb3V0ZU51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2UucGF0aHNbMF0ucG9pbnRzLCB7XG4gICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnBhdGhzWzFdLnBvaW50cywge1xuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzWzBdLnNldElkKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2UucGF0aHNbcm91dGVOdW1iZXJdLnBvaW50cywge1xuICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlRmVhdHVyZXNbMF0uc2V0SWQocm91dGVOdW1iZXIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gXCI0XCIgfHwgcm91dGVSZXNwb25zZS5yb3V0ZVR5cGUgPT0gJzQnKSB7XG4gICAgICAgIHdheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHtcbiAgICAgICAgICAnZmFjdG9yJzogMWU2XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm91dGVSZXNwb25zZS50cmlwICYmIHJvdXRlUmVzcG9uc2UudHJpcC5sZWdzICYmIHJvdXRlUmVzcG9uc2UudHJpcC5sZWdzWzFdKSB7Ly9jaGVjayBmb3IgYWx0ZXJuYXRpdmUgcm91dGVcbiAgICAgICAgICBpZiAocm91dGVOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnRyaXAubGVnc1sxXS5zaGFwZSwge1xuICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzWzBdLnNldElkKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS50cmlwLmxlZ3NbMV0uc2hhcGUsIHtcbiAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlc1swXS5zZXRJZCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnRyaXAubGVnc1tyb3V0ZU51bWJlcl0uc2hhcGUsIHtcbiAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZUZlYXR1cmVzWzBdLnNldElkKHJvdXRlTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYWx0ZXJuYXRpdmUgPT0gJzEnKSB7XG4gICAgICAgIGlmICgocm91dGVSZXNwb25zZS5yb3V0ZXMgJiYgKHJvdXRlUmVzcG9uc2Uucm91dGVzLmxlbmd0aCA+IDEpICYmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXSkpIHx8IChyb3V0ZVJlc3BvbnNlLnBhdGhzICYmIChyb3V0ZVJlc3BvbnNlLnBhdGhzLmxlbmd0aCA+IDEpICYmIChyb3V0ZVJlc3BvbnNlLnBhdGhzWzFdKSkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuYWRkRmVhdHVyZXMoYWx0Um91dGVGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyb3V0ZUZlYXR1cmVzKSB7XG4gICAgICAgIHRoaXMucm91dGVyV2F5U291cmNlLmFkZEZlYXR1cmVzKHJvdXRlRmVhdHVyZXMpO1xuICAgICAgICAvLyByZW5kZXIgdmlld1xuICAgICAgICAvLyBzbyB0aGUgcm91dGUgZ2V0cyBkcmF3biBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHNcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW5kZXJTeW5jKCk7XG5cbiAgICAgICAgLy8gYW5pbWF0aW9uXG4gICAgICAgIG1hcFZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIHJlc29sdXRpb246IG1hcFZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcGFkZGluZ1xuXG4gICAgICAgIGxldCB3aWR0aCA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5jc3MoJ3dpZHRoJyk7XG4gICAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICAgIHdpZHRoID0gd2lkdGguc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIHdpZHRoID0gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aFswXSA6IHdpZHRoO1xuICAgICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgIDUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdpZHRoID0gNTA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2VudGVyIG9uIHJvdXRlXG4gICAgICAgIG1hcFZpZXcuZml0KFxuICAgICAgICAgIHJvdXRlRmVhdHVyZXNbMF0uZ2V0R2VvbWV0cnkoKSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIHBhZGRpbmc6IFs1MCwgd2lkdGgsIDUwLCA1MF1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW50ZXJhY3Rpb24gZm9yIHJvdXRpbmcgaW5zdHJ1Y3Rpb25zLiBXaGVuIGhvdmVyaW5nIHRoZSBpbnN0cnVjdGlvbnMgaW4gdGhlIHBvcnRzaWRlIGNvbnRhaW5lciwgdGhlXG4gICAqIGxvY2F0aW9uIG9mIHRoZSBpbnN0cnVjdGlvbiBpcyBoaWdobGlnaHRlZCBvbiB0aGUgcm91dGUuXG4gICAqIEBwYXJhbSByb3V0ZXJJbnN0cnVjdGlvblxuICAgKi9cbiAgYWRqdXN0SW5zdHJ1Y3Rpb25NYXBJbnRlcmFjdGlvbihyb3V0ZXJJbnN0cnVjdGlvbikge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGZuSXRlbUNsaWNrLFxuICAgICAgZm5JdGVtT3ZlcixcbiAgICAgIGZuSXRlbU91dDtcblxuICAgIGZuSXRlbUNsaWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHNlbGYucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgbGV0IGZlYXR1cmUgPSBzZWxmLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB2YXIgY29vcmRMb25MYXQgPSBlbGVtZW50LmRhdGEoJ3BvcycpO1xuICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgIHZhciBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICB2YXIgbmV3Q29vcmQgPSBmcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucm91dGVySGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZGluYXRlcykge1xuICAgICAgICBsZXQgc3RhcnQgPSBlbGVtZW50LmRhdGEoJ3N0YXJ0Jyk7XG4gICAgICAgIGxldCBlbmQgPSBlbGVtZW50LmRhdGEoJ2VuZCcpO1xuICAgICAgICBpZiAoc3RhcnQsIGVuZCkge1xuICAgICAgICAgIGxldCBnZW9tID0gbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMuc2xpY2Uoc3RhcnQsIGVuZCkpO1xuICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICBnZW9tZXRyeTogZ2VvbVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnJlbnRIaW50RmVhdHVyZS5zZXRTdHlsZShcbiAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgY3VycmVudFpvb20gPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgICBzZWxmLnJvdXRlckhpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGdlb20pO1xuICAgICAgICAgIGxldCBhZnRlclpvb20gPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgICAgICBsZXQgZW5kWm9vbSA9IE1hdGgucm91bmQoKGN1cnJlbnRab29tICsgYWZ0ZXJab29tKS8yKTtcbiAgICAgICAgICBlbmRab29tID0gKGVuZFpvb20gPiBhZnRlclpvb20pID8gYWZ0ZXJab29tIDogZW5kWm9vbTtcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldFpvb20oZW5kWm9vbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoc2VsZi5yb3V0ZXJXYXlTb3VyY2UgJiYgc2VsZi5yb3V0ZXJXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJykge1xuICAgICAgICB2YXIgZmVhdHVyZSA9IHNlbGYucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKClbZWxlbWVudC5kYXRhKCdwb3MnKV0pXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGYucm91dGVyV2F5U291cmNlICYmIHNlbGYucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKCkgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA+PSAnMScpIHtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSBzZWxmLnJvdXRlcldheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgIHNlbGYucm91dGVySGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgIHZhciBjb29yZExvbkxhdCA9IGVsZW1lbnQuZGF0YSgncG9zJyk7XG4gICAgICAgICAgaWYgKGNvb3JkTG9uTGF0KSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzBdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMF0pO1xuICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgICAgdmFyIG5ld0Nvb3JkID0gZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBGZWF0dXJlKHtcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludChuZXdDb29yZClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdHVyZSA9IHNlbGYucm91dGVyV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgaWYgKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBlbGVtZW50LmRhdGEoJ3N0YXJ0Jyk7XG4gICAgICAgICAgICBsZXQgZW5kID0gZWxlbWVudC5kYXRhKCdlbmQnKTtcbiAgICAgICAgICAgIGlmIChzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY3VycmVudEhpbnRGZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAwLCAwLCAxKScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0ZXJIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH07XG5cbiAgICBmbkl0ZW1PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnJvdXRlckhpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICB9O1xuXG5cbiAgICBqUXVlcnkoJ1tkYXRhLXN0YXJ0XScsIHJvdXRlckluc3RydWN0aW9uKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuXG4gICAgICB2YXIgJGVsZW1lbnQgPSBqUXVlcnkoZWxlbWVudCk7XG5cbiAgICAgICRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtQ2xpY2soJGVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgICRlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbkl0ZW1PdmVyKCRlbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAkZWxlbWVudC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtT3V0KCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICAgIGpRdWVyeSgnW2RhdGEtcG9zXScsIHJvdXRlckluc3RydWN0aW9uKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuXG4gICAgICB2YXIgJGVsZW1lbnQgPSBqUXVlcnkoZWxlbWVudCk7XG5cbiAgICAgICRlbGVtZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtQ2xpY2soJGVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgICRlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbkl0ZW1PdmVyKCRlbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAkZWxlbWVudC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm5JdGVtT3V0KCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjbGljayBpbnRlcmFjdGlvbiBmb3IgdGhlIHJvdXRlci4gVXBvbiBtYXAgY2xpY2ssIHRoZSBjbGlja2VkIHBvaW50cyBhcmUgY29udmVydGVkIHRvIGxvY2F0aW9ucyBhbmQgdGhlXG4gICAqIHJvdXRlIHNlYXJjaCBpcyBzdGFydGVkLCBhcyBsb25nIGFzIGFsbCBtYW5kYXRvcnkgcHJvcGVydGllcyBhcmUgc2V0LlxuICAgKi9cbiAgYWRkTWFwSW5wdXRJbnRlcmFjdGlvbigpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGNvb3JkaW5hdGU7XG5cbiAgICBzZWxmLmZuTWFwUm91dGVySW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoc2VsZi5zdGF0ZS5vcGVuICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBmZWF0dXJlID0gc2VsZi5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5mb3JFYWNoRmVhdHVyZUF0UGl4ZWwoZXZ0LnBpeGVsLFxuICAgICAgICAgIGZ1bmN0aW9uIChmZWF0dXJlLCBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmU7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0SWQoKSkge1xuICAgICAgICBsZXQgYWN0aXZlSWQgPSBmZWF0dXJlLmdldElkKCkuc2VhcmNoICYmIGZlYXR1cmUuZ2V0SWQoKS5zZWFyY2goJy8nKSA/IHBhcnNlRmxvYXQoZmVhdHVyZS5nZXRJZCgpLnN1YnN0cmluZyhmZWF0dXJlLmdldElkKCkuc2VhcmNoKCcvJykgKyAxKSkgOiBmZWF0dXJlLmdldElkKCk7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYWN0aXZlSWQ6IGFjdGl2ZUlkLFxuICAgICAgICAgICAgb3BlblJlc3VsdHM6IHRydWVcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPIGJlaGF2ZXMgZGlmZmVyZW50bHkgZm9yIHJvdXRlIG9yIGFyZWEgc2VhcmNoXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGUtZmVhdHVyZS13cmFwcGVyXCIpKSB7XG4gICAgICAgICAgICAgIGxldCBmZWF0dXJlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlLWZlYXR1cmUtd3JhcHBlclwiKTtcbiAgICAgICAgICAgICAgbGV0IGFjdGl2ZUZlYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGkucm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50LmM0Zy1hY3RpdmVcIik7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlV3JhcHBlciAmJiBhY3RpdmVGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVdyYXBwZXIuc2Nyb2xsVG8oMCwgYWN0aXZlRmVhdHVyZS5vZmZzZXRUb3ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZGluYXRlID0gdG9Mb25MYXQoZXZ0LmNvb3JkaW5hdGUpO1xuICAgICAgICAvLyBjbGVhciBvbGQgZmVhdHVyZXNcbiAgICAgICAgc2VsZi5hcmVhU291cmNlLmNsZWFyKCk7XG4gICAgICAgIGlmIChzZWxmLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICAgIC8vIFRPRE8gcm91dGVyIHBlcm1hbGluayB3aWVkZXIgYWt0dWFsaXNpZXJlblxuICAgICAgICAgIGlmIChzZWxmLnN0YXRlLmZyb21BZGRyZXNzID09PSBcIlwiKSB7XG4gICAgICAgICAgICBzZWxmLnNldFJvdXRlRnJvbShjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgIC8vIHNlbGYudXBkYXRlTGlua0ZyYWdtZW50cyhcImFkZHJlc3NGcm9tXCIsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlLnRvQWRkcmVzcyA9PT0gXCJcIikge1xuICAgICAgICAgICAgc2VsZi5zZXRSb3V0ZVRvKGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgLy8gc2VsZi51cGRhdGVMaW5rRnJhZ21lbnRzKFwiYWRkcmVzc1RvXCIsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlLm92ZXJQdEN0ciA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5zdGF0ZS5vdmVyUHRDdHI7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoIXNlbGYuc3RhdGUub3ZlclBvaW50c1tpXSkge1xuICAgICAgICAgICAgICAgIHNlbGYuYWRkT3ZlclBvaW50KGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0sIGkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIgJiYgc2VsZi5zdGF0ZS5hcmVhQWRkcmVzcyA9PT0gXCJcIikge1xuICAgICAgICAgIHNlbGYuc2V0QXJlYVBvaW50KGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLm9uKCdjbGljaycsIHNlbGYuZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbik7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgdmFyIHJvdXRpbmdDb25zdGFudHNHZXJtYW4gPSB7XG4gIENUUkxfUk9VVEVSOiAnUm91dGVyIMO2ZmZuZW4vc2NobGllw59lbicsXG4gIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICBST1VURVJfRlJPTV9MQUJFTDogJ1N0YXJ0JyxcbiAgUk9VVEVSX09WRVJfTEFCRUw6ICdad2lzY2hlbnppZWwnLFxuICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgUk9VVEVSX0NMRUFSX1RJVExFOiAnTMO2c2NoZW4nLFxuICBST1VURVJfQ0xFQVJfSFRNTDogJycsXG4gIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICBST1VURVJfREVGQVVMVF9IRUFETElORV9ST1VURTogJ1JvdXRlcicsXG4gIFJPVVRFUl9ERUZBVUxUX0hFQURMSU5FX0FSRUE6ICdVbWtyZWlzc3VjaGUnLFxuXG4gIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgUk9VVEVSX09WRVI6J1p3aXNjaGVuemllbCBoaW56dWbDvGdlbicsXG4gIFJPVVRFUl9QUklOVDonUm91dGVuYmVzY2hyZWlidW5nIGRydWNrZW4nLFxuICBST1VURVJfRE9XTkxPQUQ6J1JvdXRlIGFscyBHUFggaGVydW50ZXJsYWRlbicsXG5cbiAgUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEU6ICdSb3V0ZTonLFxuICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgUk9VVEVSX1ZJRVdfTEFCRUxfVElNRTogJ1plaXQ6JyxcbiAgUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRTogJ1Byb2ZpbDonLFxuXG4gIFJPVVRFUl9WSUVXX0FMRVJUX0VSUk9SOiAnRmVobGVyJyxcbiAgUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4uJyxcbiAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuICBST1VURVJfRVJST1JfUE9MWUxJTkU6ICdSb3V0ZSBrb25udGUgbmljaHQgYmVyZWNobmV0IHdlcmRlbi4nLFxuXG4gIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gIFBPUFVQX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG5cbiAgUk9VVEVSOiAnUm91dGVyJyxcbiAgUk9VVEVSX046ICdOb3JkZW4nLFxuICBST1VURVJfRTogJ09zdCcsXG4gIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgUk9VVEVSX1c6ICdXZXN0ZW4nLFxuICBST1VURVJfTkU6ICdOb3Jkb3N0JyxcbiAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gIFJPVVRFUl9TVzogJ1PDvGR3ZXN0JyxcbiAgUk9VVEVSX05XOiAnTm9yZHdlc3QnLFxuICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICBST1VURVJfRElSRUNUSU9OXzE6ICdHZXJhZGVhdXMgd2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fMjogJ0xlaWNodCByZWNodHMgYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fNDogJ1NjaGFyZiByZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgUk9VVEVSX0RJUkVDVElPTl81OiAnV2VuZGVuWyBhdWYgPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICBST1VURVJfRElSRUNUSU9OXzc6ICdMaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICBST1VURVJfRElSRUNUSU9OXzg6ICdMZWljaHQgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICdST1VURVJfRElSRUNUSU9OXzExLTEnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlcnN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICdST1VURVJfRElSRUNUSU9OXzExLTInOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB6d2VpdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHZpZXJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICdST1VURVJfRElSRUNUSU9OXzExLTUnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBmw7xuZnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAnUk9VVEVSX0RJUkVDVElPTl8xMS03JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2llYnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGFjaHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICdST1VURVJfRElSRUNUSU9OXzExLXgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlaW5lciBkZXIgdmllbGVuIE3DtmdsaWNoa2VpdGVuWyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gIFJPVVRFUl9ESVJFQ1RJT05fMTU6ICdTaWUgaGFiZW4gSWhyIFppZWwgZXJyZWljaHQnLFxuXG4gICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICdST1VURVJfNS5YX1RZUEVfMSc6ICcgJW0gZGVtIFN0cmHDn2VudmVybGF1ZiBmb2xnZW5bIGFscyA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8yJzogJyBGYWhyZW4gU2llWyBhdWYgPGI+JXM8L2I+XSBsb3MnLFxuICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgJ1JPVVRFUl81LlhfVFlQRV80JzogJyBXZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV81JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYXVmZmFocmVuJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzcnOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV84JzogJyAlbSBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8xMCc6ICcgJW0gZmFocmVuIHVtIGF1ZiBkZXIgU3RyYcOfZSB6dSBibGVpYmVuJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8xMSc6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICdST1VURVJfNS5YX1RZUEVfMTMnOiAnICVtIGZhaHJlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzE0JzogJyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuXG4gICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAnUk9VVEVSXzUuWF9NT0RfMScgIDogJ1NjaGFyZiByZWNodHMnLFxuICAnUk9VVEVSXzUuWF9NT0RfMicgIDogJ1JlY2h0cycsXG4gICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICdST1VURVJfNS5YX01PRF80JyAgOiAnR2VyYWRlYXVzJyxcbiAgJ1JPVVRFUl81LlhfTU9EXzUnICA6ICdMZWljaHQgbGlua3MnLFxuICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgJ1JPVVRFUl81LlhfTU9EXzcnICA6ICdTY2hhcmYgbGlua3MnLFxuICAnUk9VVEVSXzUuWF9NT0RfOCcgIDogJ2luIGRlciBOw6RoZScsXG5cbiAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gIFJPVVRFUl9UTzogJ1ppZWwnLFxuICBST1VURVJfQ0VOVEVSOiAnWmVudHJ1bScsXG4gIFJPVVRFUl9GSU5EX1JPVVRFOiAnUm91dGUgZmluZGVuJyxcbiAgUk9VVEVSX0xPQ19ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgUk9VVEVSX1JPVVRFTkFNRTogJ1JvdXRlJyxcbiAgUk9VVEVSX0RJU1RBTkNFOiAnRGlzdGFueicsXG4gIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gIFJPVVRFUl9SRVZfR0VPQ09ESU5HOiAnRXJtaXR0bGUgQWRyZXNzZS4uLicsXG4gIFJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HOiAnRmVobGVyIGJlaW0gRXJtaXR0ZWxuIGRlciBBZHJlc3NlJyxcbiAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICBST1VURVJfRVJST1JfU0VBUkNISU5HOiAnRmVobGVyIGJlaW0gU3VjaGVuIGRlciBBZHJlc3NlJyxcbiAgUk9VVEVSX0NBTENfUk9VVEU6ICdCZXJlY2huZSBSb3V0ZS4uLicsXG4gIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG4gIFJPVVRFUl9TRVRUSU5HUzogJ1JvdXRlbmVpbnN0ZWxsdW5nZW4nLFxuXG4gIC8vbmV3IFJvdXRlclxuICBBUkVBX05BTUU6ICAgICAgICAgICAgJ1Vta3JlaXNzdWNoZScsXG4gIEFSRUFfUFJPRklMRTogICAgICAgICAnUHJvZmlsJyxcbiAgQVJFQV9GRUFUVVJFQ09VTlQ6ICAgICdHZWZ1bmRlbmUgRWxlbWVudGUnLFxuICBST1VURV9ERVRPVVI6ICAgICAgICAgJ1Vtd2VnJyxcbiAgQVJFQV9ERVRPVVI6ICAgICAgICAgICdSYWRpdXMnLFxuICBJTlNUUlVDVElPTl9IRUFETElORTogJ1JvdXRlbmJlc2NocmVpYnVuZycsXG4gIEZFQVRVUkVTX0hFQURMSU5FOiAgICAnTG9rYXRpb25lbicsXG4gIFJPVVRFX1BPU0lUSU9OOiAgICAgICAnUG9zaXRpb24gZXJtaXR0ZWxuJyxcbiAgU1RBUlRfUk9VVEU6ICAgICAgICAgICdTdWNoZSBzdGFydGVuJyxcbiAgUkVNT1ZFX0FERFJFU1M6ICAgICAgICdBZHJlc3NlIGzDtnNjaGVuJyxcblxuICBDQVI6ICAgICAgICAgICAgICAgICAgJ0F1dG8nLFxuICBCSUtFOiAgICAgICAgICAgICAgICAgJ0ZhaHJyYWQnLFxuICBST0FEQklLRTogICAgICAgICAgICAgJ1Jlbm5yYWQnLFxuICBNT1VOVEFJTkJJS0U6ICAgICAgICAgJ01vdW50YWluYmlrZScsXG4gIEVMRUNUUklDQklLRTogICAgICAgICAnRS1CaWtlJyxcbiAgVFJVQ0s6ICAgICAgICAgICAgICAgICdMYXN0a3JhZnR3YWdlbicsXG4gIFdBTEs6ICAgICAgICAgICAgICAgICAnRnXDn2fDpG5nZXJJbicsXG4gIFdBTkRFUjogICAgICAgICAgICAgICAnV2FuZGVyZXJJbicsXG4gIFdIRUVMOiAgICAgICAgICAgICAgICAnUm9sbHN0dWhsJyxcbiAgU0NPT1Q6ICAgICAgICAgICAgICAgICdSb2xsZXInLFxuICBNT1RPUkJJS0U6ICAgICAgICAgICAgJ01vdG9ycmFkJyxcblxuICBDTE9TRTogJ1NjaGxpZcOfZW4nLFxuXG4gIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgcm91dGluZ0NvbnN0YW50c0VuZ2xpc2ggPSB7XG4gIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdGaW5kIHJvdXRlJyxcbiAgUk9VVEVSX0ZST01fTEFCRUw6ICdTdGFydCcsXG4gIFJPVVRFUl9UT19MQUJFTDogJ0VuZCcsXG4gIFJPVVRFUl9DTEVBUl9USVRMRTogJ0RlbGV0ZScsXG4gIFJPVVRFUl9DTEVBUl9IVE1MOiAnJyxcbiAgUk9VVEVSX0xhYmVsX0ludGVyaW06ICdJbnRlcmltIEdvYWwnLFxuXG4gIFJPVVRFUl9ERUZBVUxUX0hFQURMSU5FX1JPVVRFOiAnUm91dGVyJyxcbiAgUk9VVEVSX0RFRkFVTFRfSEVBRExJTkVfQVJFQTogJ0FyZWEgc2VhcmNoJyxcblxuICBST1VURVJfU1dJVENIOidTd2l0Y2ggYmV0d2VlbiBTdGFydCBhbmQgRW5kJyxcbiAgUk9VVEVSX09WRVI6J0FkZCBpbnRlcmltIGdvYWwnLFxuICBST1VURVJfUFJJTlQ6J1ByaW50IHJvdXRlIGRlc2NyaXB0aW9uJyxcbiAgUk9VVEVSX0RPV05MT0FEOidEb3dubG9hZCByb3V0ZSBhcyBHUFgnLFxuXG4gIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSBmcm9tIGhlcmUnLFxuICBQT1BVUF9ST1VURV9UTzogJ1JvdXRlIHRvIGhlcmUnLFxuXG4gIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0U6ICdEaXN0YW5jZTonLFxuICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnVGltZTonLFxuICBST1VURVJfVklFV19MQUJFTF9QUk9GSUxFOidQcm9maWxlJyxcblxuICBST1VURVJfVklFV19BTEVSVF9FcnJvcjogJ0Vycm9yJyxcbiAgUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kLicsXG4gIFJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HOiAnTm8gYWNjZXNzIHRvIGdlb2NvZGluZy4nLFxuICBST1VURVJfRVJST1JfUE9MWUxJTkU6ICdDb3VsZCBub3QgY2FsY3VsYXRlIHJvdXRlLicsXG5cbiAgUk9VVEVSOiAnUm91dGVyJyxcbiAgUk9VVEVSX046ICdIZWFkIG5vcnRoJyxcbiAgUk9VVEVSX0U6ICdIZWFkIGVhc3QnLFxuICBST1VURVJfUzogJ0hlYWQgc291dGgnLFxuICBST1VURVJfVzogJ0hlYWQgd2VzdCcsXG4gIFJPVVRFUl9ORTogJ0hlYWQgbm9ydGhlYXN0JyxcbiAgUk9VVEVSX1NFOiAnSGVhZCBzb3V0aGVhc3QnLFxuICBST1VURVJfU1c6ICdIZWFkIHNvdXRod2VzdCcsXG4gIFJPVVRFUl9OVzogJ0hlYWQgbm9ydGh3ZXN0JyxcbiAgUk9VVEVSX0RJUkVDVElPTl8wOiAndW5rbm93biBkaXJlY3Rpb25bIG9udG8gPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fMTogJ3N0cmFpZ2h0IGFoZWFkWyBvbnRvIDxiPiVzPC9iPl0nLFxuICBST1VURVJfRElSRUNUSU9OXzI6ICdzbGlnaHQgcmlnaHRbIG9udG8gPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fMzogJ3JpZ2h0WyBvbnRvIDxiPiVzPC9iPl0nLFxuICBST1VURVJfRElSRUNUSU9OXzQ6ICdzaGFycCByaWdodFsgb250byA8Yj4lczwvYj5dJyxcbiAgUk9VVEVSX0RJUkVDVElPTl81OiAndHVyblsgb250byA8Yj4lczwvYj5dJyxcbiAgUk9VVEVSX0RJUkVDVElPTl82OiAnc2hhcnAgdHVybiBsZWZ0WyBvbnRvIDxiPiVzPC9iPl0nLFxuICBST1VURVJfRElSRUNUSU9OXzc6ICd0dXJuIGxlZnRbIG9udG8gPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fODogJ2xpZ2h0IHR1cm4gbGVmdFsgb250byA8Yj4lczwvYj5dJyxcbiAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ2RyaXZlIGluIGRpcmVjdGlvbiBvZiA8Yj4lZDwvYj5bIG9udG8gPGI+JXM8L2I+XScsXG4gICdST1VURVJfRElSRUNUSU9OXzExLTEnOiAnVGFrZSB0aGUgZmlyc3QgZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMic6ICdUYWtlIHRoZSAybmQgZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMyc6ICdUYWtlIHRoZSAzcmQgZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNCc6ICdUYWtlIHRoZSA0dGggZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNSc6ICdUYWtlIHRoZSA1dGggZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdUYWtlIHRoZSA2dGggZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNyc6ICdUYWtlIHRoZSA3dGggZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOCc6ICdUYWtlIHRoZSA4dGggZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdUYWtlIHRoZSA5dGggZXhpdCBpbiB0aGUgcm91bmRhYm91dFsgb250byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdUYWtlIG9uZSBvZiB0aGUgZXhpdHMgaW4gdGhlIHJvdW5kYWJvdXRbIG9udG8gPGI+JXM8L2I+XScsXG4gIFJPVVRFUl9ESVJFQ1RJT05fMTU6ICdEZXN0aW5hdGlvbiByZWFjaGVkJyxcblxuICAnUk9VVEVSXzUuWF9UWVBFXzAnOiAnIFR1cm4gJW0gb25bIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzEnOiAnIEZvbGxvdyB0aGUgY291cnNlIG9mIHRoZSByb2FkICVtWyBhcyA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8yJzogJyBEZXBhcnRbIG9uIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIEFycml2ZSA8Yj4lbTwvYj4nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIENvbnRpbnVlIGRyaXZpbmdbIG9uIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzUnOiAnIFRha2UgdGhlIHJhbXAgJW1bIG9uIDxiPiVzPC9iPl0nLFxuICAnUk9VVEVSXzUuWF9UWVBFXzYnOiAnIFRha2UgdGhlIHJhbXAgJW1bIHRvIGV4aXQgb248Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV83JzogJyBUYWtlIHRoZSAlbSBzaXRlIG9mIHRoZSBmb3JrIHRvWyA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV84JzogJyBUdXJuICVtWyBvbiA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV85JzogJyBUYWtlIHRoZSBsYW5lICVtWyBvbiA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8xMCc6ICcgVHVybiAlbSB0byBzdGF5IG9uIHRoZSByb2FkJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8xMSc6ICcgTGVhdmUgdGhlIHJvdW5kYWJvdXQgb24gdGhlICV6LiBleGl0WyB0byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8xMic6ICcgTGVhdmUgdGhlIHJvdW5kYWJvdXQgb24gdGhlICV6LiBleGl0WyB0byA8Yj4lczwvYj5dJyxcbiAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgVHVybiAlbVsgb24gPGI+JXM8L2I+XScsXG4gICdST1VURVJfNS5YX1RZUEVfMTQnOiAnIEZvbGxvdyB0aGUgcm9hZCAlbScsXG5cbiAgJ1JPVVRFUl81LlhfTU9EXzAnICA6ICdVdHVybicsXG4gICdST1VURVJfNS5YX01PRF8xJyAgOiAnc2hhcnAgcmlnaHQnLFxuICAnUk9VVEVSXzUuWF9NT0RfMicgIDogJ3JpZ2h0JyxcbiAgJ1JPVVRFUl81LlhfTU9EXzMnICA6ICdzbGlnaHQgcmlnaHQnLFxuICAnUk9VVEVSXzUuWF9NT0RfNCcgIDogJ3N0cmFpZ2h0JyxcbiAgJ1JPVVRFUl81LlhfTU9EXzUnICA6ICdzbGlnaHQgbGVmdCcsXG4gICdST1VURVJfNS5YX01PRF82JyAgOiAnbGVmdCcsXG4gICdST1VURVJfNS5YX01PRF83JyAgOiAnc2hhcnAgbGVmdCcsXG4gICdST1VURVJfNS5YX01PRF84JyAgOiAnc29tZWhvdycsXG5cbiAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gIFJPVVRFUl9UTzogJ0VuZCcsXG4gIFJPVVRFUl9DRU5URVI6ICdDZW50ZXInLFxuICBST1VURVJfRklORF9ST1VURTogJ0ZpbmQgcm91dGUnLFxuICBST1VURVJfTE9DX1JPVVRFX1RPOiAnUm91dGUgdG8gaGVyZScsXG4gIFJPVVRFUl9ST1VURURFU0M6ICdEZXNjcmlwdGlvbicsXG4gIFJPVVRFUl9ST1VURU5BTUU6ICdSb3V0ZScsXG4gIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbmNlJyxcbiAgUk9VVEVSX1RJTUU6ICdUaW1lJyxcbiAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdJZGVudGlmaWVkIGFkZHJlc3MuLi4nLFxuICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZhdWx0ISBDYW4gbm90IGlkZW50aWZpeSBhZGRyZXNzJyxcbiAgUk9VVEVSX1NFQVJDSElORzogJ1NlYXJjaCBhZGRyZXNzLi4uJyxcbiAgUk9VVEVSX0VSUk9SX1NFQVJDSElORzogJ0ZhdWx0ISBDYW4gbm90IGZpbmQgYWRkcmVzcycsXG4gIFJPVVRFUl9DQUxDX1JPVVRFOiAnQ2FsYyByb3V0ZS4uLicsXG4gIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmF1bHQhIENhbiBub3QgY2FsYyBhZGRyZXNzJyxcbiAgUk9VVEVSX1NFVFRJTkdTOiAnUm91dGluZyBzZXR0aW5ncycsXG4gIENUUkxfUk9VVEVSOiAnVG9nZ2xlIHJvdXRlcicsXG5cblxuICAvL25ldyBSb3V0ZXJcbiAgQVJFQV9OQU1FOiAgICAgICAgICAgICdTZWFyY2ggcGVyaW1ldGVyJyxcbiAgQVJFQV9QUk9GSUxFOiAgICAgICAgICdQcm9maWxlJyxcbiAgQVJFQV9GRUFUVVJFQ09VTlQ6ICAgICdGb3VuZCBmZWF0dXJlcycsXG4gIFJPVVRFX0RFVE9VUjogICAgICAgICAnRGV0b3VyJyxcbiAgQVJFQV9ERVRPVVI6ICAgICAgICAgICdSYWRpdXMnLFxuICBJTlNUUlVDVElPTl9IRUFETElORTogJ1JvdXRlIEluc3RydWN0aW9ucycsXG4gIEZFQVRVUkVTX0hFQURMSU5FOiAgICAnTG9jYXRpb25zJyxcbiAgUk9VVEVfUE9TSVRJT046ICAgICAgICdHZXQgdXNlciBwb3NpdGlvbicsXG4gIFNUQVJUX1JPVVRFOiAgICAgICAgICAnU3RhcnQgc2VhcmNoJyxcblxuICBDQVI6ICAgICAgICAgICAgICAgICAgJ0NhcicsXG4gIEJJS0U6ICAgICAgICAgICAgICAgICAnQmlrZScsXG4gIFJPQURCSUtFOiAgICAgICAgICAgICAnUm9hZCBiaWtlJyxcbiAgTU9VTlRBSU5CSUtFOiAgICAgICAgICdNb3VudGFpbiBiaWtlJyxcbiAgRUxFQ1RSSUNCSUtFOiAgICAgICAgICdFLUJpa2UnLFxuICBUUlVDSzogICAgICAgICAgICAgICAgJ1RydWNrJyxcbiAgV0FMSzogICAgICAgICAgICAgICAgICdQZWRlc3RyaWFuJyxcbiAgV0FOREVSOiAgICAgICAgICAgICAgICdXYW5kZXJlcicsXG4gIFdIRUVMOiAgICAgICAgICAgICAgICAnV2hlZWxjaGFpcicsXG4gIFNDT09UOiAgICAgICAgICAgICAgICAnUm91dGVyJyxcbiAgTU9UT1JCSUtFOiAgICAgICAgICAgICdNb3RvcmJpa2UnLFxuXG4gIENMT1NFOiAnQ2xvc2UnLFxuXG4gIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vcm91dGluZy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlKG1hcERhdGEpIHtcbiAgaWYgKHR5cGVvZiBtYXBEYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgIHN3aXRjaCAobWFwRGF0YS5sYW5nKSB7XG4gICAgICBjYXNlIFwiZGVcIjpcbiAgICAgICAgcmV0dXJuIHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICBjYXNlIFwiZW5cIjpcbiAgICAgICAgcmV0dXJuIHJvdXRpbmdDb25zdGFudHNFbmdsaXNoO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHJvdXRpbmdDb25zdGFudHNFbmdsaXNoO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0IHZhciByb3V0aW5nQ29uc3RhbnRzID0ge1xuICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gIFJPVVRFUl9QUk9GSUxFX1dSQVBQRVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlcicsXG4gIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gIFJPVVRFUl9JTlBVVF9PVkVSOiAnYzRnLXJvdXRlci1pbnB1dC1vdmVyJyxcbiAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gIFJPVVRFUl9CVVRUT05CQVI6ICdjNGctcm91dGVyLWJ1dHRvbmJhcicsXG4gIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtaGVhZGVyJyxcblxuICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gIFJPVVRFUl9QUklOVDogJ2M0Zy1yb3V0ZXItcHJpbnQnLFxuXG4gIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICBST1VURVJfUFJPRklMRV9UUlVDSzogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICBST1VURVJfUFJPRklMRV9GT09UOiAnYzRnLXJvdXRlci1wcm9maWxlLWZvb3QnLFxuICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuICBST1VURVJfUFJPRklMRV9TQ09PVEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXNjb290ZXInLFxuXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tb2RkJyxcbiAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24taWNvbicsXG4gIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgUk9VVEVfTEFZRVJfVkFMVUVTOiAgICdjNGctcm91dGluZy1sYXllci12YWx1ZXMnLFxuICBST1VURV9MQVlFUlNfU0VMRUNUOiAgJ2M0Zy1yb3V0aW5nLWxheWVycy1zZWxlY3QnLFxuICBST1VURV9UT0dHTEU6ICAgICAgICAgJ2M0Zy1yb3V0aW5nLXRvZ2dsZScsXG4gIE9VVFBVVF9ERVRPVVI6ICAgICAgICAnYzRnLXJvdXRpbmctb3V0cHV0JyxcbiAgUk9VVEVfU1RBUlRfQlVUVE9OOiAgICdjNGctcm91dGUtc2VhcmNoLXN0YXJ0JyxcbiAgUk9VVEVSX1NFQVJDSDogICAgICAgICdjNGctcm91dGVyLXNlYXJjaCcsXG4gIFJPVVRFX1BPU0lUSU9OOiAgICAgICAnYzRnLXJvdXRlci1wb3NpdGlvbicsXG4gIFJPVVRFX0VSUk9SOiAgICAgICAgICAnYzRnLXJvdXRpbmctZXJyb3InLFxuXG5cblxuICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiJdLCJzb3VyY2VSb290IjoiIn0=