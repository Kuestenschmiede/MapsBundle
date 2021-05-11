(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-address-field.jsx":
/*!************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-address-field.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterAddressField = undefined;

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

var RouterAddressField = exports.RouterAddressField = function (_Component) {
  _inherits(RouterAddressField, _Component);

  function RouterAddressField(props) {
    _classCallCheck(this, RouterAddressField);

    var _this = _possibleConstructorReturn(this, (RouterAddressField.__proto__ || Object.getPrototypeOf(RouterAddressField)).call(this, props));

    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(_this.props.router.props.mapController.data);

    _this.getPosition = _this.getPosition.bind(_this);
    _this.removeContent = _this.removeContent.bind(_this);
    if (props.router.mapData.initialPosition && (props.name === "routingFrom" || props.name === "areaFrom")) {
      _this.getPosition();
    } else if (props.router.mapData.initialDestination && props.name === "routingTo") {
      var setToCenter = function setToCenter(data) {
        var center = props.router.props.mapController.map.getView().getCenter();
        var coordinates = {};
        coordinates.coords = {};
        coordinates.coords.longitude = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326")[0];
        coordinates.coords.latitude = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326")[1];
        _this.handlePosition(coordinates);
      };
      window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
      window.c4gMapsHooks.layer_loaded.push(setToCenter);
    }
    return _this;
  }

  _createClass(RouterAddressField, [{
    key: "render",
    value: function render() {
      var positionButton = null;
      if (this.props.withPosition) {
        positionButton = _react2.default.createElement("button", { className: "c4g-router-position", onMouseUp: this.getPosition, title: this.languageConstants.ROUTE_POSITION });
      }
      return _react2.default.createElement(
        "div",
        { className: this.props.className },
        _react2.default.createElement(
          "label",
          { htmlFor: this.props.name },
          this.props.label
        ),
        _react2.default.createElement(_c4gAutocompleteInput.AutocompleteInput, { type: "search", className: this.props.class, name: this.props.name,
          cssId: this.props.cssId, objFunctions: this.props.objFunctions, objSettings: this.props.objSettings, popup: this.props.popup,
          containerAddresses: this.props.containerAddresses, autoComplete: "off", router: this.props.router, value: this.props.value, index: this.props.index }),
        positionButton,
        _react2.default.createElement("button", { className: "c4g-router-input-clear", onMouseUp: this.removeContent, title: this.languageConstants.REMOVE_ADDRESS })
      );
    }
  }, {
    key: "removeContent",
    value: function removeContent(event) {
      jQuery("#" + this.props.cssId).val('');
      this.props.clearInput(event);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var scope = this;
      var handleNewPosition = function handleNewPosition(pos) {
        scope.handlePosition(pos);
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleNewPosition);
      } else {
        console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
      }
    }

    /**
     * Takes the input coordinates and executes the reverse search. On success, the result location is inserted in the
     * given input field and the given property of this.
     * @param coordinates
     */

  }, {
    key: "handlePosition",
    value: function handlePosition(coordinates) {
      var coords = coordinates.coords;
      if (this.props.name === "routingFrom") {
        this.props.router.setRouteFrom(coords.longitude, coords.latitude);
      } else if (this.props.name === "overValue") {} else if (this.props.name === "routingTo") {
        this.props.router.setRouteTo(coords.longitude, coords.latitude);
      }
      if (this.props.name === "areaFrom") {
        this.props.router.setAreaPoint(coords.longitude, coords.latitude);
      }
      this.props.router.recalculateRoute();
    }
  }]);

  return RouterAddressField;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-address-input.jsx":
/*!************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-address-input.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterAddressInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gRouterAddressField = __webpack_require__(/*! ./c4g-router-address-field.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-address-field.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-profile-selection.jsx");

var _c4gRouterLayerSelection = __webpack_require__(/*! ./c4g-router-layer-selection.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-layer-selection.jsx");

var _c4gRouterDetourSlider = __webpack_require__(/*! ./c4g-router-detour-slider.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-detour-slider.jsx");

var _routingConstantI18nDe = __webpack_require__(/*! ../routing-constant-i18n-de */ "../RoutingBundle/Resources/public/js/routing-constant-i18n-de.js");

var _routingConstantI18nEn = __webpack_require__(/*! ../routing-constant-i18n-en */ "../RoutingBundle/Resources/public/js/routing-constant-i18n-en.js");

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

var RouterAddressInput = exports.RouterAddressInput = function (_Component) {
  _inherits(RouterAddressInput, _Component);

  function RouterAddressInput(props) {
    _classCallCheck(this, RouterAddressInput);

    var _this = _possibleConstructorReturn(this, (RouterAddressInput.__proto__ || Object.getPrototypeOf(RouterAddressInput)).call(this, props));

    if (!props.router) {
      console.warn("The routing component needs a router, it won't work correctly since none was passed...");
    }

    _this.state = {
      router: props.router
    };
    if (typeof props.router.props.mapController.data !== 'undefined') {
      if (props.router.props.mapController.data.lang === "de") {
        _this.langConstants = _routingConstantI18nDe.routingConstantsGerman;
      } else {
        // fallback
        _this.langConstants = _routingConstantI18nEn.routingConstantsEnglish;
      }
    }
    return _this;
  }

  _createClass(RouterAddressInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var input = null;
      var scope = this;

      var overForm = "";
      if (this.props.enableOverPoints && this.props.mode === "route") {
        overForm = Object.keys(this.props.overSettings.overPoints).map(function (item) {
          return _react2.default.createElement(_c4gRouterAddressField.RouterAddressField, { className: "c4g-router-input-over-" + item, name: "overPoint-" + item, label: _this2.langConstants.ROUTER_Label_Interim,
            cssId: "routingOver-" + item, objFunctions: _this2.props.overSettings.objFunctions, objSettings: _this2.props.objSettings,
            containerAddresses: _this2.props.containerAddresses, value: _this2.props.overSettings.overAddresses[item],
            router: _this2.props.router, key: item, index: item, clearInput: function clearInput() {
              _this2.props.overSettings.objFunctions[item].deleteFunction();
            } });
        });
      }

      var fromClsAddition = "";
      var toClsAddition = "";
      var areaClsAddition = "";
      if (this.props.mode === "route") {
        areaClsAddition = " invisible";
      } else {
        fromClsAddition = " invisible";
        toClsAddition = " invisible";
      }

      var swapFunction = function swapFunction() {
        scope.props.overSettings.swapPoints();
        var tmpFrom = jQuery("#routingFrom").val();
        jQuery("#routingFrom").val(jQuery("#routingTo").val());
        jQuery("#routingTo").val(tmpFrom);
      };
      var swapButton = "";
      if (this.props.switchTargets && this.props.mode === "route") {
        swapButton = _react2.default.createElement("button", { className: "c4g-router-switch", onMouseUp: swapFunction });
      }
      var overButton = "";
      if (this.props.enableOverPoints && this.props.mode === "route") {
        overButton = _react2.default.createElement("button", { className: "c4g-router-over", onMouseUp: this.props.overSettings.overFunction });
      }

      var idx = this.props.overSettings.overPoints.length + 1;

      input = _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_c4gRouterAddressField.RouterAddressField, { className: "c4g-router-input-from" + fromClsAddition, name: "routingFrom", label: this.langConstants.ROUTER_FROM, key: idx,
          cssId: "routingFrom", objFunctions: this.props.objFunctions.fromFunctions, objSettings: this.props.objSettings, clearInput: this.props.resetFunctions.from,
          containerAddresses: this.props.containerAddresses, withPosition: this.props.withPosition, value: this.props.fromAddress, router: this.props.router }),
        overForm,
        _react2.default.createElement(_c4gRouterAddressField.RouterAddressField, { className: "c4g-router-input-to" + toClsAddition, name: "routingTo", label: this.langConstants.ROUTER_TO, key: idx + 1,
          cssId: "routingTo", objFunctions: this.props.objFunctions.toFunctions, objSettings: this.props.objSettings, clearInput: this.props.resetFunctions.to,
          containerAddresses: this.props.containerAddresses, withPosition: this.props.withPosition, value: this.props.toAddress, router: this.props.router }),
        _react2.default.createElement(_c4gRouterAddressField.RouterAddressField, { className: "c4g-router-input-area" + areaClsAddition, name: "areaFrom", label: this.langConstants.ROUTER_CENTER, key: idx + 2,
          cssId: "areaInput", objFunctions: this.props.objFunctions.areaFunctions, objSettings: this.props.objSettings, clearInput: this.props.resetFunctions.area,
          containerAddresses: this.props.containerAddresses, withPosition: this.props.withPosition, value: this.props.areaAddress, router: this.props.router })
      );

      var details = "";
      var featureSearchControls = "";
      if (this.props.router.props.mapController.data.showFeatures && this.props.layers) {
        featureSearchControls = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_c4gRouterLayerSelection.RouterLayerSelection, { layers: this.props.layers, router: this.props.router, activeLayerValue: this.props.router.state.mode === "route" ? this.props.router.state.layerValueRoute : this.props.router.state.layerValueArea }),
          _react2.default.createElement(_c4gRouterDetourSlider.RouterDetourSlider, { min: this.props.sliderOptions.min, max: this.props.sliderOptions.max, value: this.props.sliderOptions.value, router: this.props.sliderOptions.router })
        );
      }
      if (this.props.mode === "route") {
        details = _react2.default.createElement(
          "div",
          { className: "buttonbar" },
          overButton,
          swapButton,
          featureSearchControls
        );
      } else if (this.props.mode === "area") {
        details = _react2.default.createElement(
          "div",
          { className: "buttonbar" },
          featureSearchControls
        );
      }
      var startButton = null;
      if (this.props.router.props.mapController.data.routeStartButton) {
        startButton = _react2.default.createElement(
          "button",
          { className: "c4g-route-search-start", onMouseUp: this.props.router.recalculateRoute },
          this.langConstants.START_ROUTE
        );
      }

      return _react2.default.createElement(
        "div",
        { className: this.props.className },
        input,
        startButton,
        details
      );
    }
  }]);

  return RouterAddressInput;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-controls.jsx":
/*!*******************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-controls.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gHorizontalPanel = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/components/c4g-horizontal-panel.jsx */ "./Resources/public/js/components/c4g-horizontal-panel.jsx");

var _c4gRouterAddressInput = __webpack_require__(/*! ./c4g-router-address-input.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-address-input.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-profile-selection.jsx");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "../RoutingBundle/Resources/public/js/routing-constant-i18n.js");

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

// import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx"


var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

var RouterControls = function (_HorizontalPanel) {
  _inherits(RouterControls, _HorizontalPanel);

  function RouterControls(props) {
    _classCallCheck(this, RouterControls);

    var _this = _possibleConstructorReturn(this, (RouterControls.__proto__ || Object.getPrototypeOf(RouterControls)).call(this, props));

    _this.state.router = _this.props.router;
    _this.state.showForm = true;

    _this.setRouteMode = _this.setRouteMode.bind(_this);
    _this.setAreaMode = _this.setAreaMode.bind(_this);
    _this.close = _this.close.bind(_this);

    _this.langConstants = (0, _routingConstantI18n.getLanguage)(props.mapController.data);

    if (props.mapController.data.router_div) {
      document.querySelector(".c4g-router-panel-button-top").className += " c4g-external";
    }
    return _this;
  }

  _createClass(RouterControls, [{
    key: "setRouteMode",
    value: function setRouteMode(event) {
      event.stopPropagation();
      this.props.router.setMode("route");
    }
  }, {
    key: "setAreaMode",
    value: function setAreaMode(event) {
      event.stopPropagation();
      this.props.router.setMode("area");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.slideOutCollidingElements();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var scope = this;
      var className = "c4g-router-content" + (this.props.open ? " c4g-open " : " c4g-close ") + this.props.mode;
      // propagate open state down to child components
      var open = this.props.open;
      var modeSwitcher = "";
      if (this.props.router.props.mapController.data.areaSearch && !this.props.router.props.mapController.data.areaSearchOnly) {
        modeSwitcher = _react2.default.createElement(
          "div",
          { className: "c4g-router-mode-switch" },
          _react2.default.createElement(
            "button",
            { id: "c4g-router-button-route", className: this.props.mode === "route" ? "c4g-active" : "c4g-inactive", onMouseUp: this.setRouteMode, title: this.langConstants.ROUTER_FIND_ROUTE },
            "Route"
          ),
          _react2.default.createElement(
            "button",
            { id: "c4g-router-button-area", className: this.props.mode === "area" ? "c4g-active" : "c4g-inactive", onMouseUp: this.setAreaMode, title: this.langConstants.AREA_NAME },
            "Area"
          )
        );
      }

      if (this.state.showForm) {
        return _react2.default.createElement(
          "div",
          { className: className },
          modeSwitcher,
          _react2.default.createElement(_c4gRouterAddressInput.RouterAddressInput, { className: "c4g-router-input-content", router: this.props.router, withPosition: true, switchTargets: this.props.switchTargets,
            objFunctions: this.props.objFunctions, objSettings: this.props.objSettings, currentProfile: this.props.currentProfile, enableOverPoints: this.props.enableOverPoints,
            containerAddresses: this.props.containerAddresses, mode: this.props.mode, open: open, layers: this.props.layers, resetFunctions: this.props.resetFunctions,
            fromAddress: this.props.fromAddress, toAddress: this.props.toAddress, areaAddress: this.props.areaAddress, sliderOptions: this.props.sliderOptions,
            profiles: this.props.profiles, overSettings: this.props.overSettings })
        );
      } else {
        return _react2.default.createElement(
          "div",
          { className: className },
          _react2.default.createElement(
            _react.Suspense,
            { fallback: _react2.default.createElement(
                "div",
                null,
                "Loading..."
              ) },
            _react2.default.createElement(Titlebar, { wrapperClass: "c4g-router-header", header: headline, headerClass: "c4g-router-headline",
              detailBtnClass: "c4g-router-extended-options", detailBtnCb: this.toggleDetails, closeBtnClass: "c4g-router-close", closeBtnCb: this.close })
          ),
          _react2.default.createElement("button", { className: "c4g-router-hide-form-button", onMouseUp: function onMouseUp() {
              _this2.setState({ showForm: !_this2.state.showForm });
            } })
        );
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      // jQuery(this.state.control.element).css("top", 0 + "px");
    }
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      // override parent method
      var className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
      var topValue = 0;
      var container = document.getElementsByClassName(className)[0];
      if (container) {
        topValue = container.offsetHeight;
      }
      // jQuery(this.state.control.element).css("top", topValue + "px");
    }
  }, {
    key: "open",
    value: function open() {
      this.props.setOpen(true);
      this.slideOutCollidingElements();
      jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
    }
  }, {
    key: "close",
    value: function close() {
      this.props.setOpen(false);
      this.slideOutCollidingElements();
      jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
    }
  }, {
    key: "clickControl",
    value: function clickControl(evt) {
      var hidden = this.props.router.props.mapController.routerContainer.className.includes('c4g-close');
      if (this.props.open) {
        if (!hidden) {
          this.close();
        } else {
          jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
        }
      } else if (!this.props.open) {
        this.open();
      }
    }
  }]);

  return RouterControls;
}(_c4gHorizontalPanel.HorizontalPanel);

exports.default = RouterControls;

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-detour-slider.jsx":
/*!************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-detour-slider.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterDetourSlider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _routingConstants = __webpack_require__(/*! ../routing-constants */ "../RoutingBundle/Resources/public/js/routing-constants.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

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

var RouterDetourSlider = exports.RouterDetourSlider = function (_Component) {
  _inherits(RouterDetourSlider, _Component);

  function RouterDetourSlider(props) {
    _classCallCheck(this, RouterDetourSlider);

    var _this = _possibleConstructorReturn(this, (RouterDetourSlider.__proto__ || Object.getPrototypeOf(RouterDetourSlider)).call(this, props));

    _this.updated = false;
    return _this;
  }

  _createClass(RouterDetourSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scope = this;
      var element = jQuery("." + _routingConstants.routingConstants.ROUTE_TOGGLE);
      element.on('input', function () {
        var control = jQuery(this);
        var range = control.attr('max') - control.attr('min');
        var pos = (control.val() - control.attr('min')) / range * 100;
        var posOffset = Math.round(50 * pos / 100) - 25;
        var output = control.next('output');
        output.css('left', 'calc(' + pos + '% - ' + posOffset + 'px)').text(control.val() + " km");
        if (scope.props.router.props.mapController.data.usePermalink) {
          scope.props.router.permalink.updateLinkFragments("detour", control.val());
        }
      });
      element.on('change', function () {
        if (scope.props.router.state.mode === "route") {
          scope.props.router.setState({ detourRoute: element.val() }, scope.props.router.recalculateRoute);
        } else {
          scope.props.router.setState({ detourArea: element.val() }, function () {
            scope.props.router.performArea(scope.props.router.state.areaValue);
          });
        }
      });
      element.trigger('input');
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "p",
          null,
          "Umweg"
        ),
        _react2.default.createElement("input", { type: "range", className: _routingConstants.routingConstants.ROUTE_TOGGLE,
          min: this.props.min, max: this.props.max, defaultValue: this.props.value, step: 0.5 }),
        _react2.default.createElement(
          "output",
          { className: _routingConstants.routingConstants.OUTPUT_DETOUR },
          this.props.value + " km"
        )
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var element = document.querySelector("." + _routingConstants.routingConstants.ROUTE_TOGGLE);
      var scope = this;
      if (!this.updated) {
        jQuery(element).on('input', function () {
          var control = jQuery(this);
          var range = control.attr('max') - control.attr('min');
          var pos = (control.val() - control.attr('min')) / range * 100;
          var posOffset = Math.round(50 * pos / 100) - 25;
          var output = control.next('output');
          output.css('left', 'calc(' + pos + '% - ' + posOffset + 'px)').text(control.val() + " km");
          if (scope.props.router.props.mapController.data.usePermalink) {
            scope.props.router.permalink.updateLinkFragments("detour", control.val());
          }
        });
        jQuery(element).on('change', function () {
          if (scope.props.router.state.mode === "route") {
            scope.props.router.setState({ detourRoute: jQuery(element).val() }, scope.props.router.recalculateRoute);
          } else {
            scope.props.router.setState({ detourArea: jQuery(element).val() }, function () {
              scope.props.router.performArea(scope.props.router.state.areaValue);
            });
          }
        });
        jQuery(element).trigger('input');
        this.updated = true;
      }
    }
  }]);

  return RouterDetourSlider;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-layer-selection.jsx":
/*!**************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-layer-selection.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterLayerSelection = undefined;

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

var RouterLayerSelection = exports.RouterLayerSelection = function (_Component) {
  _inherits(RouterLayerSelection, _Component);

  function RouterLayerSelection(props) {
    _classCallCheck(this, RouterLayerSelection);

    var _this = _possibleConstructorReturn(this, (RouterLayerSelection.__proto__ || Object.getPrototypeOf(RouterLayerSelection)).call(this, props));

    _this.setLayer = _this.setLayer.bind(_this);
    _this.setLayerValue = _this.setLayerValue.bind(_this);
    return _this;
  }

  _createClass(RouterLayerSelection, [{
    key: "setLayer",
    value: function setLayer(event) {
      var layer = event.target.value;
      this.props.router.setLayer(parseInt(layer, 10));
    }
  }, {
    key: "setLayerValue",
    value: function setLayerValue(event) {
      var value = event.target.value;
      this.props.router.setLayerValue(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var scope = this;
      var defaultLayer = 0;
      if (this.props.router.state.mode === "route") {
        defaultLayer = this.props.router.state.layerRoute;
      } else if (this.props.router.state.mode === "area") {
        defaultLayer = this.props.router.state.layerArea;
      }
      var arrLayers = scope.props.router.objLayers;
      var layerValueSelection = "";
      if (this.props.layers && Object.keys(this.props.layers[defaultLayer]).length > 1) {
        layerValueSelection = _react2.default.createElement(
          "div",
          { className: "c4g-router-layer-value-selection" },
          Object.keys(this.props.layers[defaultLayer]).map(function (name) {
            return _react2.default.createElement(
              "button",
              { className: _this2.props.activeLayerValue === name ? "c4g-active" : "c4g-inactive", onMouseUp: _this2.setLayerValue, key: _this2.props.layers[defaultLayer][name].mapLabel, value: name, title: name },
              name
            );
          })
        );
      }

      if (this.props.layers && Object.keys(this.props.layers).length > 1) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            "select",
            { className: "c4g-router-layer-selection", onChange: this.setLayer, defaultValue: defaultLayer },
            Object.keys(this.props.layers).map(function (id) {
              var layer = arrLayers[id].layerData;

              return _react2.default.createElement(
                "option",
                { key: id, value: id },
                layer.name
              );
            })
          ),
          layerValueSelection
        );
      } else {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          layerValueSelection
        );
      }
    }
  }]);

  return RouterLayerSelection;
}(_react.Component);

/***/ }),

/***/ "./Resources/public/js/components/c4g-horizontal-panel.jsx":
/*!*****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-horizontal-panel.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalPanel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

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

var HorizontalPanel = exports.HorizontalPanel = function (_Component) {
  _inherits(HorizontalPanel, _Component);

  function HorizontalPanel(props) {
    _classCallCheck(this, HorizontalPanel);

    var _this = _possibleConstructorReturn(this, (HorizontalPanel.__proto__ || Object.getPrototypeOf(HorizontalPanel)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    if (props.title) {
      button.title = props.title;
    }
    element.className = (props.className || "c4g-horizontal-panel") + "-button-" + (props.direction || "top") + " ol-control " + "ol-unselectable";
    element.appendChild(button);
    button.title = props.title;
    _this.clickControl = _this.clickControl.bind(_this);
    jQuery(button).on('click', _this.clickControl);
    var mapController = props.mapController;
    var control = new _control.Control({ element: element, target: props.target });
    mapController.map.addControl(control);
    _this.state = {
      // either "top" or "bottom"
      direction: props.direction || "top",
      open: props.open || false,
      className: props.className || "c4g-horizontal-panel",
      childs: props.childs || [],
      control: control
    };
    return _this;
  }

  _createClass(HorizontalPanel, [{
    key: "render",
    value: function render() {
      var className = this.state.className + "-" + this.state.direction;
      className += " " + (this.state.open ? "c4g-open" : "c4g-close");
      var scope = this;

      function createChilds() {
        var div = document.createElement('div');
        scope.state.childs.forEach(function (element) {
          div.appendChild(element);
        });
        return div;
      }

      return _react2.default.createElement("div", {
        className: className
      });
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.state.open) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ open: true });
      this.slideOutCollidingElements();
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({ open: false });
      this.slideInCollidingElements();
    }

    /**
     * Moves the buttons that would collide with the panel.
     */

  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      var scope = this;
      if (this.state.direction === "top") {
        var elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "100px";
        });
        elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "100px";
        });
        // this.state.control.element.style.top = "100px";
      } else {
        var _elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements.forEach(function (element) {
          element.style.bottom = "100px";
        });
        _elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements.forEach(function (element) {
          element.style.bottom = "100px";
        });
        // let topValue = this.props.mapController.map.getSize()[1] - 100;
        // jQuery(this.state.control.element).style.top = topValue + "px";
        // jQuery(this.state.control.element).addClass("panel-slided-out").removeClass("panel-slided-in");
      }
    }

    /**
     * Undoes the previous button movement.
     */

  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      var scope = this;
      if (this.state.direction === "top") {
        var elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "0px";
        });
        elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        elements.forEach(function (element) {
          element.style.top = "0px";
        });
        // this.state.control.element.style.top = "0px";
      } else {
        var _elements2 = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements2.forEach(function (element) {
          element.style.bottom = "0px";
        });
        _elements2 = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);
        _elements2.forEach(function (element) {
          element.style.bottom = "0px";
        });
        // this.state.control.element.style.top = this.props.mapController.map.getSize()[1] + "px";
        // jQuery(this.state.control.element).addClass("panel-slided-in").removeClass("panel-slided-out")
      }
    }

    /**
     * Adds the given HTML content to the panel.
     * @param content   Must be a HTML element.
     */

  }, {
    key: "addContent",
    value: function addContent(content) {
      this.state.childs.push(content);
    }
  }]);

  return HorizontalPanel;
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWlucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZGV0b3VyLXNsaWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWhvcml6b250YWwtcGFuZWwuanN4Il0sIm5hbWVzIjpbIlJvdXRlckFkZHJlc3NGaWVsZCIsInByb3BzIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJyb3V0ZXIiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImdldFBvc2l0aW9uIiwiYmluZCIsInJlbW92ZUNvbnRlbnQiLCJtYXBEYXRhIiwiaW5pdGlhbFBvc2l0aW9uIiwibmFtZSIsImluaXRpYWxEZXN0aW5hdGlvbiIsInNldFRvQ2VudGVyIiwiY2VudGVyIiwibWFwIiwiZ2V0VmlldyIsImdldENlbnRlciIsImNvb3JkaW5hdGVzIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJoYW5kbGVQb3NpdGlvbiIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsImxheWVyX2xvYWRlZCIsInB1c2giLCJwb3NpdGlvbkJ1dHRvbiIsIndpdGhQb3NpdGlvbiIsIlJPVVRFX1BPU0lUSU9OIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjbGFzcyIsImNzc0lkIiwib2JqRnVuY3Rpb25zIiwib2JqU2V0dGluZ3MiLCJwb3B1cCIsImNvbnRhaW5lckFkZHJlc3NlcyIsInZhbHVlIiwiaW5kZXgiLCJSRU1PVkVfQUREUkVTUyIsImV2ZW50IiwialF1ZXJ5IiwidmFsIiwiY2xlYXJJbnB1dCIsInNjb3BlIiwiaGFuZGxlTmV3UG9zaXRpb24iLCJwb3MiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsInNldEFyZWFQb2ludCIsInJlY2FsY3VsYXRlUm91dGUiLCJDb21wb25lbnQiLCJSb3V0ZXJBZGRyZXNzSW5wdXQiLCJzdGF0ZSIsImxhbmciLCJsYW5nQ29uc3RhbnRzIiwicm91dGluZ0NvbnN0YW50c0dlcm1hbiIsInJvdXRpbmdDb25zdGFudHNFbmdsaXNoIiwiaW5wdXQiLCJvdmVyRm9ybSIsImVuYWJsZU92ZXJQb2ludHMiLCJtb2RlIiwiT2JqZWN0Iiwia2V5cyIsIm92ZXJTZXR0aW5ncyIsIm92ZXJQb2ludHMiLCJpdGVtIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJvdmVyQWRkcmVzc2VzIiwiZGVsZXRlRnVuY3Rpb24iLCJmcm9tQ2xzQWRkaXRpb24iLCJ0b0Nsc0FkZGl0aW9uIiwiYXJlYUNsc0FkZGl0aW9uIiwic3dhcEZ1bmN0aW9uIiwic3dhcFBvaW50cyIsInRtcEZyb20iLCJzd2FwQnV0dG9uIiwic3dpdGNoVGFyZ2V0cyIsIm92ZXJCdXR0b24iLCJvdmVyRnVuY3Rpb24iLCJpZHgiLCJsZW5ndGgiLCJST1VURVJfRlJPTSIsImZyb21GdW5jdGlvbnMiLCJyZXNldEZ1bmN0aW9ucyIsImZyb20iLCJmcm9tQWRkcmVzcyIsIlJPVVRFUl9UTyIsInRvRnVuY3Rpb25zIiwidG8iLCJ0b0FkZHJlc3MiLCJST1VURVJfQ0VOVEVSIiwiYXJlYUZ1bmN0aW9ucyIsImFyZWEiLCJhcmVhQWRkcmVzcyIsImRldGFpbHMiLCJmZWF0dXJlU2VhcmNoQ29udHJvbHMiLCJzaG93RmVhdHVyZXMiLCJsYXllcnMiLCJsYXllclZhbHVlUm91dGUiLCJsYXllclZhbHVlQXJlYSIsInNsaWRlck9wdGlvbnMiLCJtaW4iLCJtYXgiLCJzdGFydEJ1dHRvbiIsInJvdXRlU3RhcnRCdXR0b24iLCJTVEFSVF9ST1VURSIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiUm91dGVyQ29udHJvbHMiLCJzaG93Rm9ybSIsInNldFJvdXRlTW9kZSIsInNldEFyZWFNb2RlIiwiY2xvc2UiLCJyb3V0ZXJfZGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0TW9kZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90Iiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsIm9wZW4iLCJtb2RlU3dpdGNoZXIiLCJhcmVhU2VhcmNoIiwiYXJlYVNlYXJjaE9ubHkiLCJST1VURVJfRklORF9ST1VURSIsIkFSRUFfTkFNRSIsImN1cnJlbnRQcm9maWxlIiwicHJvZmlsZXMiLCJoZWFkbGluZSIsInRvZ2dsZURldGFpbHMiLCJzZXRTdGF0ZSIsInRvcFZhbHVlIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsInNldE9wZW4iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZ0IiwiaGlkZGVuIiwiaW5jbHVkZXMiLCJIb3Jpem9udGFsUGFuZWwiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJ1cGRhdGVkIiwiZWxlbWVudCIsInJvdXRpbmdDb25zdGFudHMiLCJST1VURV9UT0dHTEUiLCJvbiIsImNvbnRyb2wiLCJyYW5nZSIsImF0dHIiLCJwb3NPZmZzZXQiLCJNYXRoIiwicm91bmQiLCJvdXRwdXQiLCJuZXh0IiwiY3NzIiwidGV4dCIsInVzZVBlcm1hbGluayIsInBlcm1hbGluayIsInVwZGF0ZUxpbmtGcmFnbWVudHMiLCJkZXRvdXJSb3V0ZSIsImRldG91ckFyZWEiLCJwZXJmb3JtQXJlYSIsImFyZWFWYWx1ZSIsInRyaWdnZXIiLCJPVVRQVVRfREVUT1VSIiwiUm91dGVyTGF5ZXJTZWxlY3Rpb24iLCJzZXRMYXllciIsInNldExheWVyVmFsdWUiLCJsYXllciIsInRhcmdldCIsInBhcnNlSW50IiwiZGVmYXVsdExheWVyIiwibGF5ZXJSb3V0ZSIsImxheWVyQXJlYSIsImFyckxheWVycyIsIm9iakxheWVycyIsImxheWVyVmFsdWVTZWxlY3Rpb24iLCJhY3RpdmVMYXllclZhbHVlIiwibWFwTGFiZWwiLCJpZCIsImxheWVyRGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsImRpcmVjdGlvbiIsImFwcGVuZENoaWxkIiwiY2xpY2tDb250cm9sIiwiQ29udHJvbCIsImFkZENvbnRyb2wiLCJjaGlsZHMiLCJjcmVhdGVDaGlsZHMiLCJkaXYiLCJmb3JFYWNoIiwic2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3NzQ29uc3RhbnRzIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJPTF9VTlNFTEVDVEFCTEUiLCJzdHlsZSIsInRvcCIsIkNPTlRST0xfQ09OVEFJTkVSX1RSIiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJib3R0b20iLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OzsrZUFqQkE7Ozs7Ozs7Ozs7Ozs7SUFtQmFBLGtCLFdBQUFBLGtCOzs7QUFFWCw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNYQSxLQURXOztBQUdqQixVQUFLQyxpQkFBTCxHQUF5QixzQ0FBWSxNQUFLRCxLQUFM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bGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tIFwiLi9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ29udGVudCA9IHRoaXMucmVtb3ZlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsUG9zaXRpb24gJiYgKHByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIiB8fCBwcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpKSB7XG4gICAgICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJvdXRlci5tYXBEYXRhLmluaXRpYWxEZXN0aW5hdGlvbiAmJiBwcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICBsZXQgc2V0VG9DZW50ZXIgPSAoZGF0YSk9PiB7XG4gICAgICAgIGxldCBjZW50ZXIgPSBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sb25naXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVswXTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMV07XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goc2V0VG9DZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zaXRpb25CdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLndpdGhQb3NpdGlvbikge1xuICAgICAgcG9zaXRpb25CdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcG9zaXRpb25cIiBvbk1vdXNlVXA9e3RoaXMuZ2V0UG9zaXRpb259IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFX1BPU0lUSU9OfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubmFtZX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3N9IG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXt0aGlzLnByb3BzLmNzc0lkfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gcG9wdXA9e3RoaXMucHJvcHMucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBhdXRvQ29tcGxldGU9XCJvZmZcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9Lz5cbiAgICAgICAge3Bvc2l0aW9uQnV0dG9ufVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWNsZWFyXCJ9IG9uTW91c2VVcD17dGhpcy5yZW1vdmVDb250ZW50fSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5SRU1PVkVfQUREUkVTU30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRlbnQoZXZlbnQpIHtcbiAgICBqUXVlcnkoXCIjXCIgKyB0aGlzLnByb3BzLmNzc0lkKS52YWwoJycpO1xuICAgIHRoaXMucHJvcHMuY2xlYXJJbnB1dChldmVudCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhhbmRsZU5ld1Bvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgc2NvcGUuaGFuZGxlUG9zaXRpb24ocG9zKTtcbiAgICB9O1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlTmV3UG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGlucHV0IGNvb3JkaW5hdGVzIGFuZCBleGVjdXRlcyB0aGUgcmV2ZXJzZSBzZWFyY2guIE9uIHN1Y2Nlc3MsIHRoZSByZXN1bHQgbG9jYXRpb24gaXMgaW5zZXJ0ZWQgaW4gdGhlXG4gICAqIGdpdmVuIGlucHV0IGZpZWxkIGFuZCB0aGUgZ2l2ZW4gcHJvcGVydHkgb2YgdGhpcy5cbiAgICogQHBhcmFtIGNvb3JkaW5hdGVzXG4gICAqL1xuICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nRnJvbVwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcIm92ZXJWYWx1ZVwiKSB7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwiYXJlYUZyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXJBZGRyZXNzRmllbGQgfSBmcm9tIFwiLi9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJEZXRvdXJTbGlkZXIgfSBmcm9tIFwiLi9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoIXByb3BzLnJvdXRlcikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJvdXRpbmcgY29tcG9uZW50IG5lZWRzIGEgcm91dGVyLCBpdCB3b24ndCB3b3JrIGNvcnJlY3RseSBzaW5jZSBub25lIHdhcyBwYXNzZWQuLi5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvdXRlcjogcHJvcHMucm91dGVyLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBsZXQgb3ZlckZvcm0gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJGb3JtID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtb3Zlci1cIiArIGl0ZW19IG5hbWU9e1wib3ZlclBvaW50LVwiICsgaXRlbX0gbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfTGFiZWxfSW50ZXJpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17XCJyb3V0aW5nT3Zlci1cIiArIGl0ZW19IG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB2YWx1ZT17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckFkZHJlc3Nlc1tpdGVtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBrZXk9e2l0ZW19IGluZGV4PXtpdGVtfSBjbGVhcklucHV0PXsoKSA9PiB7dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zW2l0ZW1dLmRlbGV0ZUZ1bmN0aW9uKCk7fX0vPlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgZnJvbUNsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBsZXQgdG9DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IGFyZWFDbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBhcmVhQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgICB0b0Nsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5wcm9wcy5vdmVyU2V0dGluZ3Muc3dhcFBvaW50cygpO1xuICAgICAgY29uc3QgdG1wRnJvbSA9IGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoKTtcbiAgICAgIGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwoKSk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ1RvXCIpLnZhbCh0bXBGcm9tKTtcbiAgICB9O1xuICAgIGxldCBzd2FwQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBzd2FwQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXN3aXRjaFwiIG9uTW91c2VVcD17c3dhcEZ1bmN0aW9ufSAvPjtcbiAgICB9XG4gICAgbGV0IG92ZXJCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItb3ZlclwiIG9uTW91c2VVcD17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckZ1bmN0aW9ufSAvPjtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gdGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cy5sZW5ndGggKyAxO1xuXG4gICAgaW5wdXQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWZyb21cIiArIGZyb21DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTX0ga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ0Zyb21cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmZyb21GdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICB7b3ZlckZvcm19XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LXRvXCIgKyB0b0Nsc0FkZGl0aW9ufSBuYW1lPVwicm91dGluZ1RvXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfVE99IGtleT17aWR4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJyb3V0aW5nVG9cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLnRvRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMudG9BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWFyZWFcIiArIGFyZWFDbHNBZGRpdGlvbn0gbmFtZT1cImFyZWFGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfQ0VOVEVSfSBrZXk9e2lkeCArIDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwiYXJlYUlucHV0XCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5hcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgbGV0IGRldGFpbHMgPSBcIlwiO1xuICAgIGxldCBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzICYmIHRoaXMucHJvcHMubGF5ZXJzKSB7XG4gICAgICBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxSb3V0ZXJMYXllclNlbGVjdGlvbiBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhY3RpdmVMYXllclZhbHVlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICA8Um91dGVyRGV0b3VyU2xpZGVyIG1pbj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1pbn0gbWF4PXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWF4fSB2YWx1ZT17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnZhbHVlfSByb3V0ZXI9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5yb3V0ZXJ9Lz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtvdmVyQnV0dG9ufVxuICAgICAgICB7c3dhcEJ1dHRvbn1cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBsZXQgc3RhcnRCdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVTdGFydEJ1dHRvbikge1xuICAgICAgc3RhcnRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGUtc2VhcmNoLXN0YXJ0XCJ9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZX0+e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSVF9ST1VURX08L2J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7c3RhcnRCdXR0b259XG4gICAgICAgIHsvKntkZXRhaWxCdXR0b259Ki99XG4gICAgICAgIHtkZXRhaWxzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtSb3V0ZXJQcm9maWxlU2VsZWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeFwiXG4vLyBpbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctdGl0bGViYXIuanN4XCJcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctdGl0bGViYXIuanN4JykpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJDb250cm9scyBleHRlbmRzIEhvcml6b250YWxQYW5lbCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlLnJvdXRlciA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHRoaXMuc3RhdGUuc2hvd0Zvcm0gPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRSb3V0ZU1vZGUgPSB0aGlzLnNldFJvdXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0QXJlYU1vZGUgPSB0aGlzLnNldEFyZWFNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1wYW5lbC1idXR0b24tdG9wXCIpLmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gIH1cblxuICBzZXRSb3V0ZU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwicm91dGVcIik7XG4gIH1cblxuICBzZXRBcmVhTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJhcmVhXCIpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJjNGctcm91dGVyLWNvbnRlbnRcIiArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlbiBcIiA6IFwiIGM0Zy1jbG9zZSBcIikgKyB0aGlzLnByb3BzLm1vZGU7XG4gICAgLy8gcHJvcGFnYXRlIG9wZW4gc3RhdGUgZG93biB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgbGV0IG9wZW4gPSB0aGlzLnByb3BzLm9wZW47XG4gICAgbGV0IG1vZGVTd2l0Y2hlciA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoICYmICF0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJlYVNlYXJjaE9ubHkpIHtcbiAgICAgIG1vZGVTd2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1tb2RlLXN3aXRjaFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYzRnLXJvdXRlci1idXR0b24tcm91dGVcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRSb3V0ZU1vZGV9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZJTkRfUk9VVEV9PlJvdXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1hcmVhXCIgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRBcmVhTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5BUkVBX05BTUV9PkFyZWE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93Rm9ybSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge21vZGVTd2l0Y2hlcn1cbiAgICAgICAgICA8Um91dGVyQWRkcmVzc0lucHV0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItaW5wdXQtY29udGVudFwiIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IHdpdGhQb3NpdGlvbj17dHJ1ZX0gc3dpdGNoVGFyZ2V0cz17dGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSBlbmFibGVPdmVyUG9pbnRzPXt0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBtb2RlPXt0aGlzLnByb3BzLm1vZGV9IG9wZW49e29wZW59IGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJlc2V0RnVuY3Rpb25zPXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M9e3RoaXMucHJvcHMuZnJvbUFkZHJlc3N9IHRvQWRkcmVzcz17dGhpcy5wcm9wcy50b0FkZHJlc3N9IGFyZWFBZGRyZXNzPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSBzbGlkZXJPcHRpb25zPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlcz17dGhpcy5wcm9wcy5wcm9maWxlc30gb3ZlclNldHRpbmdzPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5nc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItZXh0ZW5kZWQtb3B0aW9uc1wifSBkZXRhaWxCdG5DYj17dGhpcy50b2dnbGVEZXRhaWxzfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1oaWRlLWZvcm0tYnV0dG9uXCJ9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgMCArIFwicHhcIik7XG4gIH1cblxuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW5cIiA6IFwiIGM0Zy1jbG9zZVwiKTtcbiAgICBsZXQgdG9wVmFsdWUgPSAwO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdG9wVmFsdWUgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCB0b3BWYWx1ZSArIFwicHhcIik7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3Blbih0cnVlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4oZmFsc2UpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbChldnQpIHtcbiAgICBsZXQgaGlkZGVuID0gdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLm9wZW4pe1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c30gZnJvbSBcIi4uL3JvdXRpbmctY29uc3RhbnRzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckRldG91clNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGVsZW1lbnQub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgIG91dHB1dFxuICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGVsZW1lbnQudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGVsZW1lbnQudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnRyaWdnZXIoJ2lucHV0Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlVtd2VnPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3NOYW1lPXtyb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRX1cbiAgICAgICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59IG1heD17dGhpcy5wcm9wcy5tYXh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gc3RlcD17MC41fS8+XG4gICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPXtyb3V0aW5nQ29uc3RhbnRzLk9VVFBVVF9ERVRPVVJ9Pnt0aGlzLnByb3BzLnZhbHVlICsgXCIga21cIn08L291dHB1dD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAoIXRoaXMudXBkYXRlZCkge1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgICBvdXRwdXRcbiAgICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckxheWVyU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0TGF5ZXIgPSB0aGlzLnNldExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRMYXllclZhbHVlID0gdGhpcy5zZXRMYXllclZhbHVlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRMYXllcihldmVudCkge1xuICAgIGxldCBsYXllciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllcihwYXJzZUludChsYXllciwgMTApKTtcbiAgfVxuXG4gIHNldExheWVyVmFsdWUoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBkZWZhdWx0TGF5ZXIgPSAwO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyUm91dGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJBcmVhO1xuICAgIH1cbiAgICBjb25zdCBhcnJMYXllcnMgPSBzY29wZS5wcm9wcy5yb3V0ZXIub2JqTGF5ZXJzO1xuICAgIGxldCBsYXllclZhbHVlU2VsZWN0aW9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllcnMgJiYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLmxlbmd0aCA+IDEpKSB7XG4gICAgICBsYXllclZhbHVlU2VsZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1sYXllci12YWx1ZS1zZWxlY3Rpb25cIn0+XG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYWN0aXZlTGF5ZXJWYWx1ZSA9PT0gbmFtZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIn0gb25Nb3VzZVVwPXt0aGlzLnNldExheWVyVmFsdWV9IGtleT17dGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXVtuYW1lXS5tYXBMYWJlbH0gdmFsdWU9e25hbWV9IHRpdGxlPXtuYW1lfT57bmFtZX08L2J1dHRvbj5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubGVuZ3RoID4gMSkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uXCIgb25DaGFuZ2U9e3RoaXMuc2V0TGF5ZXJ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdExheWVyfT5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubWFwKChpZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaWRdLmxheWVyRGF0YTtcblxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkfSB2YWx1ZT17aWR9PntsYXllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAge2xheWVyVmFsdWVTZWxlY3Rpb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD57bGF5ZXJWYWx1ZVNlbGVjdGlvbn08L1JlYWN0LkZyYWdtZW50Pik7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctaG9yaXpvbnRhbC1wYW5lbFwiKSArIFwiLWJ1dHRvbi1cIiArIChwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIikgKyBcIiBvbC1jb250cm9sIFwiICsgXCJvbC11bnNlbGVjdGFibGVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIGpRdWVyeShidXR0b24pLm9uKCdjbGljaycsIHRoaXMuY2xpY2tDb250cm9sKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRzICgpIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjb3BlLnN0YXRlLmNoaWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMTAwcHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIGxldCB0b3BWYWx1ZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdIC0gMTAwO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5zdHlsZS50b3AgPSB0b3BWYWx1ZSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpLnJlbW92ZUNsYXNzKFwicGFuZWwtc2xpZGVkLWluXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdICsgXCJweFwiO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1vdXRcIilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gSFRNTCBjb250ZW50IHRvIHRoZSBwYW5lbC5cbiAgICogQHBhcmFtIGNvbnRlbnQgICBNdXN0IGJlIGEgSFRNTCBlbGVtZW50LlxuICAgKi9cbiAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5jaGlsZHMucHVzaChjb250ZW50KTtcbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=