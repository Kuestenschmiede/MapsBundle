"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-controls_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-horizontal-panel.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-horizontal-panel.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HorizontalPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HorizontalPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(HorizontalPanel, _Component);

  var _super = _createSuper(HorizontalPanel);

  function HorizontalPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HorizontalPanel);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

    var element = document.createElement('div');
    var button = document.createElement('button');

    if (props.title) {
      button.title = props.title;
    }

    element.className = (props.className || "c4g-horizontal-panel") + "-button-" + (props.direction || "top") + " ol-control " + "ol-unselectable";
    element.appendChild(button);
    button.title = props.title;
    _this.clickControl = _this.clickControl.bind((0, _assertThisInitialized2["default"])(_this));
    jQuery(button).on('click', _this.clickControl);
    var mapController = props.mapController;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
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

  (0, _createClass2["default"])(HorizontalPanel, [{
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

      return /*#__PURE__*/_react["default"].createElement("div", {
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
      this.setState({
        open: true
      });
      this.slideOutCollidingElements();
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
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
        }); // this.state.control.element.style.top = "100px";
      } else {
        var _elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);

        _elements.forEach(function (element) {
          element.style.bottom = "100px";
        });

        _elements = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);

        _elements.forEach(function (element) {
          element.style.bottom = "100px";
        }); // let topValue = this.props.mapController.map.getSize()[1] - 100;
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
        }); // this.state.control.element.style.top = "0px";
      } else {
        var _elements2 = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);

        _elements2.forEach(function (element) {
          element.style.bottom = "0px";
        });

        _elements2 = document.querySelectorAll('.' + _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' .' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE);

        _elements2.forEach(function (element) {
          element.style.bottom = "0px";
        }); // this.state.control.element.style.top = this.props.mapController.map.getSize()[1] + "px";
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

exports.HorizontalPanel = HorizontalPanel;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-address-field.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-address-field.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterAddressField = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "./src/Resources/public/js/components/c4g-autocomplete-input.jsx");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterAddressField = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterAddressField, _Component);

  var _super = _createSuper(RouterAddressField);

  function RouterAddressField(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterAddressField);
    _this = _super.call(this, props);
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(_this.props.router.props.mapController.data);
    _this.getPosition = _this.getPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeContent = _this.removeContent.bind((0, _assertThisInitialized2["default"])(_this));

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

  (0, _createClass2["default"])(RouterAddressField, [{
    key: "render",
    value: function render() {
      var positionButton = null;

      if (this.props.withPosition) {
        positionButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-position",
          onMouseUp: this.getPosition,
          title: this.languageConstants.ROUTE_POSITION
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: this.props.name
      }, this.props.label), /*#__PURE__*/_react["default"].createElement(_c4gAutocompleteInput.AutocompleteInput, {
        type: "search",
        className: this.props["class"],
        name: this.props.name,
        cssId: this.props.cssId,
        objFunctions: this.props.objFunctions,
        objSettings: this.props.objSettings,
        popup: this.props.popup,
        containerAddresses: this.props.containerAddresses,
        router: this.props.router,
        value: this.props.value,
        index: this.props.index
      }), positionButton, /*#__PURE__*/_react["default"].createElement("button", {
        className: "c4g-router-input-clear",
        onMouseUp: this.removeContent,
        title: this.languageConstants.REMOVE_ADDRESS
      }));
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

exports.RouterAddressField = RouterAddressField;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-address-input.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-address-input.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterAddressInput = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterAddressField = __webpack_require__(/*! ./c4g-router-address-field.jsx */ "./src/Resources/public/js/components/c4g-router-address-field.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx");

var _c4gRouterLayerSelection = __webpack_require__(/*! ./c4g-router-layer-selection.jsx */ "./src/Resources/public/js/components/c4g-router-layer-selection.jsx");

var _c4gRouterDetourSlider = __webpack_require__(/*! ./c4g-router-detour-slider.jsx */ "./src/Resources/public/js/components/c4g-router-detour-slider.jsx");

var _routingConstantI18nDe = __webpack_require__(/*! ../routing-constant-i18n-de */ "./src/Resources/public/js/routing-constant-i18n-de.js");

var _routingConstantI18nEn = __webpack_require__(/*! ../routing-constant-i18n-en */ "./src/Resources/public/js/routing-constant-i18n-en.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterAddressInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterAddressInput, _Component);

  var _super = _createSuper(RouterAddressInput);

  function RouterAddressInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterAddressInput);
    _this = _super.call(this, props);

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

  (0, _createClass2["default"])(RouterAddressInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var input = null;
      var scope = this;
      var overForm = "";

      if (this.props.enableOverPoints && this.props.mode === "route") {
        overForm = Object.keys(this.props.overSettings.overPoints).map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
            className: "c4g-router-input-over-" + item,
            name: "overPoint-" + item,
            label: _this2.langConstants.ROUTER_Label_Interim,
            cssId: "routingOver-" + item,
            objFunctions: _this2.props.overSettings.objFunctions,
            objSettings: _this2.props.objSettings,
            containerAddresses: _this2.props.containerAddresses,
            value: _this2.props.overSettings.overAddresses[item],
            router: _this2.props.router,
            key: item,
            index: item,
            clearInput: function clearInput() {
              _this2.props.overSettings.objFunctions[item].deleteFunction();
            }
          });
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
        swapButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-switch",
          onMouseUp: swapFunction
        });
      }

      var overButton = "";

      if (this.props.enableOverPoints && this.props.mode === "route") {
        overButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-over",
          onMouseUp: this.props.overSettings.overFunction
        });
      }

      var idx = this.props.overSettings.overPoints.length + 1;
      input = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
        className: "c4g-router-input-from" + fromClsAddition,
        name: "routingFrom",
        label: this.langConstants.ROUTER_FROM,
        key: idx,
        cssId: "routingFrom",
        objFunctions: this.props.objFunctions.fromFunctions,
        objSettings: this.props.objSettings,
        clearInput: this.props.resetFunctions.from,
        containerAddresses: this.props.containerAddresses,
        withPosition: this.props.withPosition,
        value: this.props.fromAddress,
        router: this.props.router
      }), overForm, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
        className: "c4g-router-input-to" + toClsAddition,
        name: "routingTo",
        label: this.langConstants.ROUTER_TO,
        key: idx + 1,
        cssId: "routingTo",
        objFunctions: this.props.objFunctions.toFunctions,
        objSettings: this.props.objSettings,
        clearInput: this.props.resetFunctions.to,
        containerAddresses: this.props.containerAddresses,
        withPosition: this.props.withPosition,
        value: this.props.toAddress,
        router: this.props.router
      }), /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
        className: "c4g-router-input-area" + areaClsAddition,
        name: "areaFrom",
        label: this.langConstants.ROUTER_CENTER,
        key: idx + 2,
        cssId: "areaInput",
        objFunctions: this.props.objFunctions.areaFunctions,
        objSettings: this.props.objSettings,
        clearInput: this.props.resetFunctions.area,
        containerAddresses: this.props.containerAddresses,
        withPosition: this.props.withPosition,
        value: this.props.areaAddress,
        router: this.props.router
      }));
      var details = "";
      var featureSearchControls = "";

      if (this.props.router.props.mapController.data.showFeatures && this.props.layers) {
        featureSearchControls = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_c4gRouterLayerSelection.RouterLayerSelection, {
          layers: this.props.layers,
          router: this.props.router,
          activeLayerValue: this.props.router.state.mode === "route" ? this.props.router.state.layerValueRoute : this.props.router.state.layerValueArea
        }), /*#__PURE__*/_react["default"].createElement(_c4gRouterDetourSlider.RouterDetourSlider, {
          min: this.props.sliderOptions.min,
          max: this.props.sliderOptions.max,
          value: this.props.sliderOptions.value,
          router: this.props.sliderOptions.router
        }));
      }

      if (this.props.mode === "route") {
        details = /*#__PURE__*/_react["default"].createElement("div", {
          className: "buttonbar"
        }, overButton, swapButton, featureSearchControls);
      } else if (this.props.mode === "area") {
        details = /*#__PURE__*/_react["default"].createElement("div", {
          className: "buttonbar"
        }, featureSearchControls);
      }

      var startButton = null;

      if (this.props.router.props.mapController.data.routeStartButton) {
        startButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-route-search-start",
          onMouseUp: this.props.router.recalculateRoute
        }, this.langConstants.START_ROUTE);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, input, startButton, details);
    }
  }]);
  return RouterAddressInput;
}(_react.Component);

exports.RouterAddressInput = RouterAddressInput;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-controls.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-controls.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gHorizontalPanel = __webpack_require__(/*! ./c4g-horizontal-panel.jsx */ "./src/Resources/public/js/components/c4g-horizontal-panel.jsx");

var _c4gRouterAddressInput = __webpack_require__(/*! ./c4g-router-address-input.jsx */ "./src/Resources/public/js/components/c4g-router-address-input.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterControls = /*#__PURE__*/function (_HorizontalPanel) {
  (0, _inherits2["default"])(RouterControls, _HorizontalPanel);

  var _super = _createSuper(RouterControls);

  function RouterControls(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterControls);
    _this = _super.call(this, props);
    _this.state.router = _this.props.router;
    _this.state.showForm = true;
    _this.setRouteMode = _this.setRouteMode.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setAreaMode = _this.setAreaMode.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.langConstants = (0, _routingConstantI18n.getLanguage)(props.mapController.data);

    if (props.mapController.data.router_div) {
      document.querySelector(".c4g-router-panel-button-top").className += " c4g-external";
    }

    return _this;
  }

  (0, _createClass2["default"])(RouterControls, [{
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
      var className = "c4g-router-content" + (this.props.open ? " c4g-open " : " c4g-close ") + this.props.mode; // propagate open state down to child components

      var open = this.props.open;
      var modeSwitcher = "";

      if (this.props.router.props.mapController.data.areaSearch && !this.props.router.props.mapController.data.areaSearchOnly) {
        modeSwitcher = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-mode-switch"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-route",
          className: this.props.mode === "route" ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setRouteMode,
          title: this.langConstants.ROUTER_FIND_ROUTE
        }, "Route"), /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-area",
          className: this.props.mode === "area" ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setAreaMode,
          title: this.langConstants.AREA_NAME
        }, "Area"));
      }

      if (this.state.showForm) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, modeSwitcher, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressInput.RouterAddressInput, {
          className: "c4g-router-input-content",
          router: this.props.router,
          withPosition: true,
          switchTargets: this.props.switchTargets,
          objFunctions: this.props.objFunctions,
          objSettings: this.props.objSettings,
          currentProfile: this.props.currentProfile,
          enableOverPoints: this.props.enableOverPoints,
          containerAddresses: this.props.containerAddresses,
          mode: this.props.mode,
          open: open,
          layers: this.props.layers,
          resetFunctions: this.props.resetFunctions,
          fromAddress: this.props.fromAddress,
          toAddress: this.props.toAddress,
          areaAddress: this.props.areaAddress,
          sliderOptions: this.props.sliderOptions,
          profiles: this.props.profiles,
          overSettings: this.props.overSettings
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
          wrapperClass: "c4g-router-header",
          header: headline,
          headerClass: "c4g-router-headline",
          detailBtnClass: "c4g-router-extended-options",
          detailBtnCb: this.toggleDetails,
          closeBtnClass: "c4g-router-close",
          closeBtnCb: this.close
        }), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-hide-form-button",
          onMouseUp: function onMouseUp() {
            _this2.setState({
              showForm: !_this2.state.showForm
            });
          }
        }));
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {// jQuery(this.state.control.element).css("top", 0 + "px");
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
      } // jQuery(this.state.control.element).css("top", topValue + "px");

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

exports["default"] = RouterControls;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-detour-slider.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-detour-slider.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterDetourSlider = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _routingConstants = __webpack_require__(/*! ../routing-constants */ "./src/Resources/public/js/routing-constants.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterDetourSlider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterDetourSlider, _Component);

  var _super = _createSuper(RouterDetourSlider);

  function RouterDetourSlider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterDetourSlider);
    _this = _super.call(this, props);
    _this.updated = false;
    return _this;
  }

  (0, _createClass2["default"])(RouterDetourSlider, [{
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
          scope.props.router.setState({
            detourRoute: element.val()
          }, scope.props.router.recalculateRoute);
        } else {
          scope.props.router.setState({
            detourArea: element.val()
          }, function () {
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
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Umweg"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "range",
        className: _routingConstants.routingConstants.ROUTE_TOGGLE,
        min: this.props.min,
        max: this.props.max,
        defaultValue: this.props.value,
        step: 0.5
      }), /*#__PURE__*/_react["default"].createElement("output", {
        className: _routingConstants.routingConstants.OUTPUT_DETOUR
      }, this.props.value + " km"));
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
            scope.props.router.setState({
              detourRoute: jQuery(element).val()
            }, scope.props.router.recalculateRoute);
          } else {
            scope.props.router.setState({
              detourArea: jQuery(element).val()
            }, function () {
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

exports.RouterDetourSlider = RouterDetourSlider;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-layer-selection.jsx":
/*!***************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-layer-selection.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterLayerSelection = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterLayerSelection = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterLayerSelection, _Component);

  var _super = _createSuper(RouterLayerSelection);

  function RouterLayerSelection(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterLayerSelection);
    _this = _super.call(this, props);
    _this.setLayer = _this.setLayer.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setLayerValue = _this.setLayerValue.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(RouterLayerSelection, [{
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
        layerValueSelection = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-layer-value-selection"
        }, Object.keys(this.props.layers[defaultLayer]).map(function (name) {
          return /*#__PURE__*/_react["default"].createElement("button", {
            className: _this2.props.activeLayerValue === name ? "c4g-active" : "c4g-inactive",
            onMouseUp: _this2.setLayerValue,
            key: _this2.props.layers[defaultLayer][name].mapLabel,
            value: name,
            title: name
          }, name);
        }));
      }

      if (this.props.layers && Object.keys(this.props.layers).length > 1) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("select", {
          className: "c4g-router-layer-selection",
          onChange: this.setLayer,
          defaultValue: defaultLayer
        }, Object.keys(this.props.layers).map(function (id) {
          var layer = arrLayers[id].layerData;
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: id,
            value: id
          }, layer.name);
        })), layerValueSelection);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, layerValueSelection);
      }
    }
  }]);
  return RouterLayerSelection;
}(_react.Component);

exports.RouterLayerSelection = RouterLayerSelection;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterProfileSelection = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterProfileSelection, _Component);

  var _super = _createSuper(RouterProfileSelection);

  function RouterProfileSelection(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterProfileSelection);
    _this = _super.call(this, props);
    _this.setProfile = _this.setProfile.bind((0, _assertThisInitialized2["default"])(_this));
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "roadbike",
      4: "bike",
      5: "mountainbike",
      6: "bike",
      7: "electricbike",
      8: "foot",
      9: "wander",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "motorbike"
    };
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(props.router.props.mapController.data);
    _this.profileLang = {
      "car": _this.languageConstants.CAR,
      "hgv": _this.languageConstants.TRUCK,
      "bike": _this.languageConstants.BIKE,
      "roadbike": _this.languageConstants.ROADBIKE,
      "mountainbike": _this.languageConstants.MOUNTAINBIKE,
      "electricbike": _this.languageConstants.ELECTRICBIKE,
      "foot": _this.languageConstants.WALK,
      "wander": _this.languageConstants.WANDER,
      "wheelchair": _this.languageConstants.WHEEL,
      "scooter": _this.languageConstants.SCOOT,
      "motorbike": _this.languageConstants.MOTORBIKE
    };
    _this.state = {
      showPopup: !!props.router.mapData.router_profiles_initial
    };
    return _this;
  }

  (0, _createClass2["default"])(RouterProfileSelection, [{
    key: "setProfile",
    value: function setProfile(profile) {
      this.props.router.setProfile(parseInt(profile.id, 10));

      if (!this.props.router.mapData.router_profiles_initial) {
        this.setState({
          showPopup: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.profiles.length === 1) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
          key: this.props.currentProfile,
          title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
        }));
      } else {
        if (this.state.showPopup) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
            return /*#__PURE__*/_react["default"].createElement("button", {
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === parseInt(_this2.props.currentProfile, 10) ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: true
              });
            },
            className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
            key: this.props.currentProfile,
            title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
          }));
        }
      }
    }
  }, {
    key: "showProfileSelection",
    value: function showProfileSelection() {
      this.setState({
        showPopup: true
      });
    }
  }]);
  return RouterProfileSelection;
}(_react.Component);

exports["default"] = RouterProfileSelection;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWNvbnRyb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7RUFFWCx5QkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsSUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7SUFDQSxJQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0lBQ0EsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjs7SUFDQSxJQUFJSixLQUFLLENBQUNNLEtBQVYsRUFBaUI7TUFDZkQsTUFBTSxDQUFDQyxLQUFQLEdBQWVOLEtBQUssQ0FBQ00sS0FBckI7SUFDRDs7SUFDREosT0FBTyxDQUFDSyxTQUFSLEdBQW9CLENBQUNQLEtBQUssQ0FBQ08sU0FBTixJQUFtQixzQkFBcEIsSUFBOEMsVUFBOUMsSUFBNERQLEtBQUssQ0FBQ1EsU0FBTixJQUFtQixLQUEvRSxJQUF3RixjQUF4RixHQUF5RyxpQkFBN0g7SUFDQU4sT0FBTyxDQUFDTyxXQUFSLENBQW9CSixNQUFwQjtJQUNBQSxNQUFNLENBQUNDLEtBQVAsR0FBZU4sS0FBSyxDQUFDTSxLQUFyQjtJQUNBLE1BQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsZ0RBQXBCO0lBQ0FDLE1BQU0sQ0FBQ1AsTUFBRCxDQUFOLENBQWVRLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBS0gsWUFBaEM7SUFDQSxJQUFJSSxhQUFhLEdBQUdkLEtBQUssQ0FBQ2MsYUFBMUI7SUFDQSxJQUFJQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQUosQ0FBWTtNQUFDZCxPQUFPLEVBQUVBLE9BQVY7TUFBbUJlLE1BQU0s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QUFDMkcsRUFBTixFQUFVLEVBQVYsQ0FBUixLQUEwQlQsUUFBUSxDQUFDLE1BQUksQ0FBQzdNLEtBQUwsQ0FBV29LLGNBQVosRUFBNEIsRUFBNUIsQ0FBbEMsR0FBb0UsYUFBcEUsR0FBb0YsZUFBaEosQ0FEbkI7Y0FFUSxHQUFHLEVBQUV6RCxJQUFJLENBQUMyRyxFQUZsQjtjQUVzQixLQUFLLEVBQUUsTUFBSSxDQUFDSyxXQUFMLENBQWlCLE1BQUksQ0FBQ0Qsa0JBQUwsQ0FBd0IvRyxJQUFJLENBQUMyRyxFQUE3QixDQUFqQjtZQUY3QixFQUFQO1VBR0QsQ0FKQSxDQUZILENBREY7UUFVRCxDQVhELE1BV087VUFDTCxvQkFBUTtZQUFLLFNBQVMsRUFBQztVQUFmLGdCQUNOO1lBQVEsU0FBUyxFQUFFO2NBQUEsT0FBTSxNQUFJLENBQUMzTCxRQUFMLENBQWM7Z0JBQUM0TSxTQUFTLEVBQUU7Y0FBWixDQUFkLENBQU47WUFBQSxDQUFuQjtZQUEyRCxTQUFTLEVBQUUsd0JBQXdCLEtBQUtiLGtCQUFMLENBQXdCLEtBQUsxTixLQUFMLENBQVdvSyxjQUFuQyxDQUF4QixHQUE2RSxhQUFuSjtZQUNRLEdBQUcsRUFBRSxLQUFLcEssS0FBTCxDQUFXb0ssY0FEeEI7WUFDd0MsS0FBSyxFQUFFLEtBQUt1RCxXQUFMLENBQWlCLEtBQUtELGtCQUFMLENBQXdCLEtBQUsxTixLQUFMLENBQVdvSyxjQUFuQyxDQUFqQjtVQUQvQyxFQURNLENBQVI7UUFJRDtNQUVGO0lBQ0Y7OztXQUVELGdDQUF1QjtNQUNyQixLQUFLekksUUFBTCxDQUFjO1FBQUM0TSxTQUFTLEVBQUU7TUFBWixDQUFkO0lBQ0Q7OztFQWxGaUQ1TCIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1kZXRvdXItc2xpZGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWxheWVyLXNlbGVjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctaG9yaXpvbnRhbC1wYW5lbFwiKSArIFwiLWJ1dHRvbi1cIiArIChwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIikgKyBcIiBvbC1jb250cm9sIFwiICsgXCJvbC11bnNlbGVjdGFibGVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIGpRdWVyeShidXR0b24pLm9uKCdjbGljaycsIHRoaXMuY2xpY2tDb250cm9sKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRzICgpIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjb3BlLnN0YXRlLmNoaWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMTAwcHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIGxldCB0b3BWYWx1ZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdIC0gMTAwO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5zdHlsZS50b3AgPSB0b3BWYWx1ZSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpLnJlbW92ZUNsYXNzKFwicGFuZWwtc2xpZGVkLWluXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdICsgXCJweFwiO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1vdXRcIilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gSFRNTCBjb250ZW50IHRvIHRoZSBwYW5lbC5cbiAgICogQHBhcmFtIGNvbnRlbnQgICBNdXN0IGJlIGEgSFRNTCBlbGVtZW50LlxuICAgKi9cbiAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5jaGlsZHMucHVzaChjb250ZW50KTtcbiAgfVxuXG5cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tIFwiLi9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ29udGVudCA9IHRoaXMucmVtb3ZlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsUG9zaXRpb24gJiYgKHByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIiB8fCBwcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpKSB7XG4gICAgICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJvdXRlci5tYXBEYXRhLmluaXRpYWxEZXN0aW5hdGlvbiAmJiBwcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICBsZXQgc2V0VG9DZW50ZXIgPSAoZGF0YSk9PiB7XG4gICAgICAgIGxldCBjZW50ZXIgPSBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sb25naXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVswXTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMV07XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goc2V0VG9DZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zaXRpb25CdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLndpdGhQb3NpdGlvbikge1xuICAgICAgcG9zaXRpb25CdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcG9zaXRpb25cIiBvbk1vdXNlVXA9e3RoaXMuZ2V0UG9zaXRpb259IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFX1BPU0lUSU9OfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubmFtZX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3N9IG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXt0aGlzLnByb3BzLmNzc0lkfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gcG9wdXA9e3RoaXMucHJvcHMucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9Lz5cbiAgICAgICAge3Bvc2l0aW9uQnV0dG9ufVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWNsZWFyXCJ9IG9uTW91c2VVcD17dGhpcy5yZW1vdmVDb250ZW50fSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5SRU1PVkVfQUREUkVTU30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRlbnQoZXZlbnQpIHtcbiAgICBqUXVlcnkoXCIjXCIgKyB0aGlzLnByb3BzLmNzc0lkKS52YWwoJycpO1xuICAgIHRoaXMucHJvcHMuY2xlYXJJbnB1dChldmVudCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhhbmRsZU5ld1Bvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgc2NvcGUuaGFuZGxlUG9zaXRpb24ocG9zKTtcbiAgICB9O1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlTmV3UG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGlucHV0IGNvb3JkaW5hdGVzIGFuZCBleGVjdXRlcyB0aGUgcmV2ZXJzZSBzZWFyY2guIE9uIHN1Y2Nlc3MsIHRoZSByZXN1bHQgbG9jYXRpb24gaXMgaW5zZXJ0ZWQgaW4gdGhlXG4gICAqIGdpdmVuIGlucHV0IGZpZWxkIGFuZCB0aGUgZ2l2ZW4gcHJvcGVydHkgb2YgdGhpcy5cbiAgICogQHBhcmFtIGNvb3JkaW5hdGVzXG4gICAqL1xuICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nRnJvbVwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcIm92ZXJWYWx1ZVwiKSB7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwiYXJlYUZyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXJBZGRyZXNzRmllbGQgfSBmcm9tIFwiLi9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJEZXRvdXJTbGlkZXIgfSBmcm9tIFwiLi9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoIXByb3BzLnJvdXRlcikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJvdXRpbmcgY29tcG9uZW50IG5lZWRzIGEgcm91dGVyLCBpdCB3b24ndCB3b3JrIGNvcnJlY3RseSBzaW5jZSBub25lIHdhcyBwYXNzZWQuLi5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvdXRlcjogcHJvcHMucm91dGVyLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBsZXQgb3ZlckZvcm0gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJGb3JtID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtb3Zlci1cIiArIGl0ZW19IG5hbWU9e1wib3ZlclBvaW50LVwiICsgaXRlbX0gbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfTGFiZWxfSW50ZXJpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17XCJyb3V0aW5nT3Zlci1cIiArIGl0ZW19IG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB2YWx1ZT17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckFkZHJlc3Nlc1tpdGVtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBrZXk9e2l0ZW19IGluZGV4PXtpdGVtfSBjbGVhcklucHV0PXsoKSA9PiB7dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zW2l0ZW1dLmRlbGV0ZUZ1bmN0aW9uKCk7fX0vPlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgZnJvbUNsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBsZXQgdG9DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IGFyZWFDbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBhcmVhQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgICB0b0Nsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5wcm9wcy5vdmVyU2V0dGluZ3Muc3dhcFBvaW50cygpO1xuICAgICAgY29uc3QgdG1wRnJvbSA9IGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoKTtcbiAgICAgIGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwoKSk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ1RvXCIpLnZhbCh0bXBGcm9tKTtcbiAgICB9O1xuICAgIGxldCBzd2FwQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBzd2FwQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXN3aXRjaFwiIG9uTW91c2VVcD17c3dhcEZ1bmN0aW9ufSAvPjtcbiAgICB9XG4gICAgbGV0IG92ZXJCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItb3ZlclwiIG9uTW91c2VVcD17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckZ1bmN0aW9ufSAvPjtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gdGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cy5sZW5ndGggKyAxO1xuXG4gICAgaW5wdXQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWZyb21cIiArIGZyb21DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTX0ga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ0Zyb21cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmZyb21GdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICB7b3ZlckZvcm19XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LXRvXCIgKyB0b0Nsc0FkZGl0aW9ufSBuYW1lPVwicm91dGluZ1RvXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfVE99IGtleT17aWR4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJyb3V0aW5nVG9cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLnRvRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMudG9BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWFyZWFcIiArIGFyZWFDbHNBZGRpdGlvbn0gbmFtZT1cImFyZWFGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfQ0VOVEVSfSBrZXk9e2lkeCArIDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwiYXJlYUlucHV0XCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5hcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgbGV0IGRldGFpbHMgPSBcIlwiO1xuICAgIGxldCBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzICYmIHRoaXMucHJvcHMubGF5ZXJzKSB7XG4gICAgICBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxSb3V0ZXJMYXllclNlbGVjdGlvbiBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhY3RpdmVMYXllclZhbHVlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICA8Um91dGVyRGV0b3VyU2xpZGVyIG1pbj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1pbn0gbWF4PXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWF4fSB2YWx1ZT17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnZhbHVlfSByb3V0ZXI9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5yb3V0ZXJ9Lz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtvdmVyQnV0dG9ufVxuICAgICAgICB7c3dhcEJ1dHRvbn1cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBsZXQgc3RhcnRCdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVTdGFydEJ1dHRvbikge1xuICAgICAgc3RhcnRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGUtc2VhcmNoLXN0YXJ0XCJ9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZX0+e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSVF9ST1VURX08L2J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7c3RhcnRCdXR0b259XG4gICAgICAgIHsvKntkZXRhaWxCdXR0b259Ki99XG4gICAgICAgIHtkZXRhaWxzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0hvcml6b250YWxQYW5lbH0gZnJvbSBcIi4vYzRnLWhvcml6b250YWwtcGFuZWwuanN4XCI7XG5pbXBvcnQge1JvdXRlckFkZHJlc3NJbnB1dH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWlucHV0LmpzeFwiXG5pbXBvcnQge1JvdXRlclByb2ZpbGVTZWxlY3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCJcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhci5qc3hcIlxuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckNvbnRyb2xzIGV4dGVuZHMgSG9yaXpvbnRhbFBhbmVsIHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUucm91dGVyID0gdGhpcy5wcm9wcy5yb3V0ZXI7XG4gICAgdGhpcy5zdGF0ZS5zaG93Rm9ybSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFJvdXRlTW9kZSA9IHRoaXMuc2V0Um91dGVNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRBcmVhTW9kZSA9IHRoaXMuc2V0QXJlYU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Rpdikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXBhbmVsLWJ1dHRvbi10b3BcIikuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgfVxuXG4gIHNldFJvdXRlTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgfVxuXG4gIHNldEFyZWFNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcImFyZWFcIik7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjbGFzc05hbWUgPSBcImM0Zy1yb3V0ZXItY29udGVudFwiICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuIFwiIDogXCIgYzRnLWNsb3NlIFwiKSArIHRoaXMucHJvcHMubW9kZTtcbiAgICAvLyBwcm9wYWdhdGUgb3BlbiBzdGF0ZSBkb3duIHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICBsZXQgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcbiAgICBsZXQgbW9kZVN3aXRjaGVyID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyZWFTZWFyY2ggJiYgIXRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoT25seSkge1xuICAgICAgbW9kZVN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW1vZGUtc3dpdGNoXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1yb3V0ZVwiIGNsYXNzTmFtZT17KHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnNldFJvdXRlTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRklORF9ST1VURX0+Um91dGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImM0Zy1yb3V0ZXItYnV0dG9uLWFyZWFcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnNldEFyZWFNb2RlfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkFSRUFfTkFNRX0+QXJlYTwvYnV0dG9uPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dGb3JtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7bW9kZVN3aXRjaGVyfVxuICAgICAgICAgIDxSb3V0ZXJBZGRyZXNzSW5wdXQgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1pbnB1dC1jb250ZW50XCIgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gd2l0aFBvc2l0aW9uPXt0cnVlfSBzd2l0Y2hUYXJnZXRzPXt0aGlzLnByb3BzLnN3aXRjaFRhcmdldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY3VycmVudFByb2ZpbGU9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IGVuYWJsZU92ZXJQb2ludHM9e3RoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IG1vZGU9e3RoaXMucHJvcHMubW9kZX0gb3Blbj17b3Blbn0gbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc30gcmVzZXRGdW5jdGlvbnM9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWRkcmVzcz17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gdG9BZGRyZXNzPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gYXJlYUFkZHJlc3M9e3RoaXMucHJvcHMuYXJlYUFkZHJlc3N9IHNsaWRlck9wdGlvbnM9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzPXt0aGlzLnByb3BzLnByb2ZpbGVzfSBvdmVyU2V0dGluZ3M9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRlclwifSBoZWFkZXI9e2hlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItZXh0ZW5kZWQtb3B0aW9uc1wifSBkZXRhaWxCdG5DYj17dGhpcy50b2dnbGVEZXRhaWxzfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaGlkZS1mb3JtLWJ1dHRvblwifSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLnNldFN0YXRlKHtzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm19KX19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuY3NzKFwidG9wXCIsIDAgKyBcInB4XCIpO1xuICB9XG5cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBvdmVycmlkZSBwYXJlbnQgbWV0aG9kXG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuXCIgOiBcIiBjNGctY2xvc2VcIik7XG4gICAgbGV0IHRvcFZhbHVlID0gMDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIHRvcFZhbHVlID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgdG9wVmFsdWUgKyBcInB4XCIpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4odHJ1ZSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKGZhbHNlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICBjbGlja0NvbnRyb2woZXZ0KSB7XG4gICAgbGV0IGhpZGRlbiA9IHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5vcGVuKXtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHN9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50c1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyRGV0b3VyU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgZWxlbWVudC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgb3V0cHV0XG4gICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogZWxlbWVudC52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogZWxlbWVudC52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VW13ZWc8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzc05hbWU9e3JvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFfVxuICAgICAgICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn0gbWF4PXt0aGlzLnByb3BzLm1heH0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBzdGVwPXswLjV9Lz5cbiAgICAgICAgPG91dHB1dCBjbGFzc05hbWU9e3JvdXRpbmdDb25zdGFudHMuT1VUUFVUX0RFVE9VUn0+e3RoaXMucHJvcHMudmFsdWUgKyBcIiBrbVwifTwvb3V0cHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy51cGRhdGVkKSB7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICAgIG91dHB1dFxuICAgICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS50cmlnZ2VyKCdpbnB1dCcpO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyTGF5ZXJTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRMYXllciA9IHRoaXMuc2V0TGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyVmFsdWUgPSB0aGlzLnNldExheWVyVmFsdWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldExheWVyKGV2ZW50KSB7XG4gICAgbGV0IGxheWVyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyKHBhcnNlSW50KGxheWVyLCAxMCkpO1xuICB9XG5cbiAgc2V0TGF5ZXJWYWx1ZShldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllclZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGRlZmF1bHRMYXllciA9IDA7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBkZWZhdWx0TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllckFyZWE7XG4gICAgfVxuICAgIGNvbnN0IGFyckxheWVycyA9IHNjb3BlLnByb3BzLnJvdXRlci5vYmpMYXllcnM7XG4gICAgbGV0IGxheWVyVmFsdWVTZWxlY3Rpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubGVuZ3RoID4gMSkpIHtcbiAgICAgIGxheWVyVmFsdWVTZWxlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWxheWVyLXZhbHVlLXNlbGVjdGlvblwifT5cbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllclZhbHVlID09PSBuYW1lID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwifSBvbk1vdXNlVXA9e3RoaXMuc2V0TGF5ZXJWYWx1ZX0ga2V5PXt0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdW25hbWVdLm1hcExhYmVsfSB2YWx1ZT17bmFtZX0gdGl0bGU9e25hbWV9PntuYW1lfTwvYnV0dG9uPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5sYXllcnMgJiYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5sZW5ndGggPiAxKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRMYXllcn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0TGF5ZXJ9PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpZF0ubGF5ZXJEYXRhO1xuXG4gICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR9IHZhbHVlPXtpZH0+e2xheWVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICB7bGF5ZXJWYWx1ZVNlbGVjdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PntsYXllclZhbHVlU2VsZWN0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9maWxlID0gdGhpcy5zZXRQcm9maWxlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbiA9IHtcbiAgICAgIDA6IFwiY2FyXCIsXG4gICAgICAxOiBcImhndlwiLFxuICAgICAgMjogXCJiaWtlXCIsXG4gICAgICAzOiBcInJvYWRiaWtlXCIsXG4gICAgICA0OiBcImJpa2VcIixcbiAgICAgIDU6IFwibW91bnRhaW5iaWtlXCIsXG4gICAgICA2OiBcImJpa2VcIixcbiAgICAgIDc6IFwiZWxlY3RyaWNiaWtlXCIsXG4gICAgICA4OiBcImZvb3RcIixcbiAgICAgIDk6IFwid2FuZGVyXCIsXG4gICAgICAxMDogXCJ3aGVlbGNoYWlyXCIsXG4gICAgICAxMTogXCJoZ3ZcIixcbiAgICAgIDEyOiBcInNjb290ZXJcIixcbiAgICAgIDEzOiBcIm1vdG9yYmlrZVwiXG4gICAgfTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMucHJvZmlsZUxhbmcgPSB7XG4gICAgICBcImNhclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkNBUixcbiAgICAgIFwiaGd2XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuVFJVQ0ssXG4gICAgICBcImJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5CSUtFLFxuICAgICAgXCJyb2FkYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPQURCSUtFLFxuICAgICAgXCJtb3VudGFpbmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1VOVEFJTkJJS0UsXG4gICAgICBcImVsZWN0cmljYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkVMRUNUUklDQklLRSxcbiAgICAgIFwiZm9vdFwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTEssXG4gICAgICBcIndhbmRlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTkRFUixcbiAgICAgIFwid2hlZWxjaGFpclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldIRUVMLFxuICAgICAgXCJzY29vdGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuU0NPT1QsXG4gICAgICBcIm1vdG9yYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVE9SQklLRVxuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiAhIXByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsXG4gICAgfVxuICB9XG5cbiAgc2V0UHJvZmlsZShwcm9maWxlKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0UHJvZmlsZShwYXJzZUludChwcm9maWxlLmlkLCAxMCkpO1xuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdXX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlciBjNGctcG9wdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KX0vPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucHJvZmlsZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRQcm9maWxlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF0gKyAocGFyc2VJbnQoaXRlbS5pZCwgMTApID09PSBwYXJzZUludCh0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlLCAxMCkgPyBcIiBjNGctYWN0aXZlXCIgOiBcIiBjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHNob3dQcm9maWxlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pO1xuICB9XG59Il0sIm5hbWVzIjpbIkhvcml6b250YWxQYW5lbCIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwidGl0bGUiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJhcHBlbmRDaGlsZCIsImNsaWNrQ29udHJvbCIsImJpbmQiLCJqUXVlcnkiLCJvbiIsIm1hcENvbnRyb2xsZXIiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcCIsImFkZENvbnRyb2wiLCJzdGF0ZSIsIm9wZW4iLCJjaGlsZHMiLCJjcmVhdGVDaGlsZHMiLCJkaXYiLCJmb3JFYWNoIiwiY2xvc2UiLCJzZXRTdGF0ZSIsInNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjc3NDb25zdGFudHMiLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIk9MX1VOU0VMRUNUQUJMRSIsInN0eWxlIiwidG9wIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsImJvdHRvbSIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiY29udGVudCIsInB1c2giLCJDb21wb25lbnQiLCJSb3V0ZXJBZGRyZXNzRmllbGQiLCJsYW5ndWFnZUNvbnN0YW50cyIsImdldExhbmd1YWdlIiwicm91dGVyIiwiZGF0YSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJuYW1lIiwiaW5pdGlhbERlc3RpbmF0aW9uIiwic2V0VG9DZW50ZXIiLCJjZW50ZXIiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiY29vcmRpbmF0ZXMiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJ0cmFuc2Zvcm0iLCJsYXRpdHVkZSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImxhYmVsIiwiY3NzSWQiLCJvYmpGdW5jdGlvbnMiLCJvYmpTZXR0aW5ncyIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwidmFsdWUiLCJpbmRleCIsIlJFTU9WRV9BRERSRVNTIiwiZXZlbnQiLCJ2YWwiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJwb3MiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsInNldEFyZWFQb2ludCIsInJlY2FsY3VsYXRlUm91dGUiLCJSb3V0ZXJBZGRyZXNzSW5wdXQiLCJsYW5nIiwibGFuZ0NvbnN0YW50cyIsInJvdXRpbmdDb25zdGFudHNHZXJtYW4iLCJyb3V0aW5nQ29uc3RhbnRzRW5nbGlzaCIsImlucHV0Iiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsIk9iamVjdCIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImRlbGV0ZUZ1bmN0aW9uIiwiZnJvbUNsc0FkZGl0aW9uIiwidG9DbHNBZGRpdGlvbiIsImFyZWFDbHNBZGRpdGlvbiIsInN3YXBGdW5jdGlvbiIsInN3YXBQb2ludHMiLCJ0bXBGcm9tIiwic3dhcEJ1dHRvbiIsInN3aXRjaFRhcmdldHMiLCJvdmVyQnV0dG9uIiwib3ZlckZ1bmN0aW9uIiwiaWR4IiwibGVuZ3RoIiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJzbGlkZXJPcHRpb25zIiwibWluIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJSb3V0ZXJDb250cm9scyIsInNob3dGb3JtIiwic2V0Um91dGVNb2RlIiwic2V0QXJlYU1vZGUiLCJyb3V0ZXJfZGl2IiwicXVlcnlTZWxlY3RvciIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1vZGVTd2l0Y2hlciIsImFyZWFTZWFyY2giLCJhcmVhU2VhcmNoT25seSIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiQVJFQV9OQU1FIiwiY3VycmVudFByb2ZpbGUiLCJwcm9maWxlcyIsImhlYWRsaW5lIiwidG9nZ2xlRGV0YWlscyIsInRvcFZhbHVlIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsInNldE9wZW4iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZ0IiwiaGlkZGVuIiwiaW5jbHVkZXMiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsIk1hdGgiLCJyb3VuZCIsIm91dHB1dCIsIm5leHQiLCJjc3MiLCJ0ZXh0IiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwidXBkYXRlTGlua0ZyYWdtZW50cyIsImRldG91clJvdXRlIiwiZGV0b3VyQXJlYSIsInBlcmZvcm1BcmVhIiwiYXJlYVZhbHVlIiwidHJpZ2dlciIsIk9VVFBVVF9ERVRPVVIiLCJSb3V0ZXJMYXllclNlbGVjdGlvbiIsInNldExheWVyIiwic2V0TGF5ZXJWYWx1ZSIsImxheWVyIiwicGFyc2VJbnQiLCJkZWZhdWx0TGF5ZXIiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwiYXJyTGF5ZXJzIiwib2JqTGF5ZXJzIiwibGF5ZXJWYWx1ZVNlbGVjdGlvbiIsImFjdGl2ZUxheWVyVmFsdWUiLCJtYXBMYWJlbCIsImlkIiwibGF5ZXJEYXRhIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInNldFByb2ZpbGUiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJwcm9maWxlTGFuZyIsIkNBUiIsIlRSVUNLIiwiQklLRSIsIlJPQURCSUtFIiwiTU9VTlRBSU5CSUtFIiwiRUxFQ1RSSUNCSUtFIiwiV0FMSyIsIldBTkRFUiIsIldIRUVMIiwiU0NPT1QiLCJNT1RPUkJJS0UiLCJzaG93UG9wdXAiLCJyb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCIsInByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9