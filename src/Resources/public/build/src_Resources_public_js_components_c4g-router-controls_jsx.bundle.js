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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWNvbnRyb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjs7QUFDQSxRQUFJSixLQUFLLENBQUNNLEtBQVYsRUFBaUI7QUFDZkQsTUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWVOLEtBQUssQ0FBQ00sS0FBckI7QUFDRDs7QUFDREosSUFBQUEsT0FBTyxDQUFDSyxTQUFSLEdBQW9CLENBQUNQLEtBQUssQ0FBQ08sU0FBTixJQUFtQixzQkFBcEIsSUFBOEMsVUFBOUMsSUFBNERQLEtBQUssQ0FBQ1EsU0FBTixJQUFtQixLQUEvRSxJQUF3RixjQUF4RixHQUF5RyxpQkFBN0g7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxXQUFSLENBQW9CSixNQUFwQjtBQUNBQSxJQUFBQSxNQUFNLENBQUNDLEtBQVAsR0FBZU4sS0FBSyxDQUFDTSxLQUFyQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsZ0RBQXBCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ1AsTUFBRCxDQUFOLENBQWVRLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBS0gsWUFBaEM7QUFDQSxRQUFJSSxhQUFhLEdBQUdkLEtBQUssQ0FBQ2MsYUFBMUI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQUosQ0FBWTtBQUFD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LE1BQUksQ0FBQ3pMLFFBQUwsQ0FBYztBQUFDME0sZ0JBQUFBLFNBQVMsRUFBRTtBQUFaLGVBQWQsQ0FBTjtBQUFBLGFBQW5CO0FBQTJELHFCQUFTLEVBQUUsd0JBQXdCLEtBQUtiLGtCQUFMLENBQXdCLEtBQUt4TixLQUFMLENBQVdrSyxjQUFuQyxDQUF4QixHQUE2RSxhQUFuSjtBQUNRLGVBQUcsRUFBRSxLQUFLbEssS0FBTCxDQUFXa0ssY0FEeEI7QUFDd0MsaUJBQUssRUFBRSxLQUFLdUQsV0FBTCxDQUFpQixLQUFLRCxrQkFBTCxDQUF3QixLQUFLeE4sS0FBTCxDQUFXa0ssY0FBbkMsQ0FBakI7QUFEL0MsWUFETSxDQUFSO0FBSUQ7QUFFRjtBQUNGOzs7V0FFRCxnQ0FBdUI7QUFDckIsV0FBS3ZJLFFBQUwsQ0FBYztBQUFDME0sUUFBQUEsU0FBUyxFQUFFO0FBQVosT0FBZDtBQUNEOzs7RUFsRmlEMUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctaG9yaXpvbnRhbC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtaW5wdXQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItY29udHJvbHMuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZGV0b3VyLXNsaWRlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICBidXR0b24udGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAocHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIikgKyBcIi1idXR0b24tXCIgKyAocHJvcHMuZGlyZWN0aW9uIHx8IFwidG9wXCIpICsgXCIgb2wtY29udHJvbCBcIiArIFwib2wtdW5zZWxlY3RhYmxlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIHRoaXMuY2xpY2tDb250cm9sID0gdGhpcy5jbGlja0NvbnRyb2wuYmluZCh0aGlzKTtcbiAgICBqUXVlcnkoYnV0dG9uKS5vbignY2xpY2snLCB0aGlzLmNsaWNrQ29udHJvbCk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcyAoKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY29wZS5zdGF0ZS5jaGlsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgdG9wVmFsdWUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSAtIDEwMDtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuc3R5bGUudG9wID0gdG9wVmFsdWUgKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIEhUTUwgY29udGVudCB0byB0aGUgcGFuZWwuXG4gICAqIEBwYXJhbSBjb250ZW50ICAgTXVzdCBiZSBhIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuc3RhdGUuY2hpbGRzLnB1c2goY29udGVudCk7XG4gIH1cblxuXG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdXRvY29tcGxldGVJbnB1dH0gZnJvbSBcIi4vYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3hcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyQWRkcmVzc0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNvbnRlbnQgPSB0aGlzLnJlbW92ZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgICBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbFBvc2l0aW9uICYmIChwcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIgfHwgcHJvcHMubmFtZSA9PT0gXCJhcmVhRnJvbVwiKSkge1xuICAgICAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsRGVzdGluYXRpb24gJiYgcHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgbGV0IHNldFRvQ2VudGVyID0gKGRhdGEpPT4ge1xuICAgICAgICBsZXQgY2VudGVyID0gcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3JkcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMF07XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sYXRpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzFdO1xuICAgICAgICB0aGlzLmhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkID0gd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgfHwgW107XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKHNldFRvQ2VudGVyKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBvc2l0aW9uQnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy53aXRoUG9zaXRpb24pIHtcbiAgICAgIHBvc2l0aW9uQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXBvc2l0aW9uXCIgb25Nb3VzZVVwPXt0aGlzLmdldFBvc2l0aW9ufSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURV9QT1NJVElPTn0vPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17dGhpcy5wcm9wcy5jc3NJZH0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IHBvcHVwPXt0aGlzLnByb3BzLnBvcHVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IGluZGV4PXt0aGlzLnByb3BzLmluZGV4fS8+XG4gICAgICAgIHtwb3NpdGlvbkJ1dHRvbn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1jbGVhclwifSBvbk1vdXNlVXA9e3RoaXMucmVtb3ZlQ29udGVudH0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUkVNT1ZFX0FERFJFU1N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW1vdmVDb250ZW50KGV2ZW50KSB7XG4gICAgalF1ZXJ5KFwiI1wiICsgdGhpcy5wcm9wcy5jc3NJZCkudmFsKCcnKTtcbiAgICB0aGlzLnByb3BzLmNsZWFySW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoYW5kbGVOZXdQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHNjb3BlLmhhbmRsZVBvc2l0aW9uKHBvcyk7XG4gICAgfTtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZU5ld1Bvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBpbnB1dCBjb29yZGluYXRlcyBhbmQgZXhlY3V0ZXMgdGhlIHJldmVyc2Ugc2VhcmNoLiBPbiBzdWNjZXNzLCB0aGUgcmVzdWx0IGxvY2F0aW9uIGlzIGluc2VydGVkIGluIHRoZVxuICAgKiBnaXZlbiBpbnB1dCBmaWVsZCBhbmQgdGhlIGdpdmVuIHByb3BlcnR5IG9mIHRoaXMuXG4gICAqIEBwYXJhbSBjb29yZGluYXRlc1xuICAgKi9cbiAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVGcm9tKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJvdmVyVmFsdWVcIikge1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVUbyhjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldEFyZWFQb2ludChjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyQWRkcmVzc0ZpZWxkIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJMYXllclNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyRGV0b3VyU2xpZGVyIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1kZXRvdXItc2xpZGVyLmpzeFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWVuXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKCFwcm9wcy5yb3V0ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSByb3V0aW5nIGNvbXBvbmVudCBuZWVkcyBhIHJvdXRlciwgaXQgd29uJ3Qgd29yayBjb3JyZWN0bHkgc2luY2Ugbm9uZSB3YXMgcGFzc2VkLi4uXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb3V0ZXI6IHByb3BzLnJvdXRlcixcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzR2VybWFuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2tcbiAgICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gcm91dGluZ0NvbnN0YW50c0VuZ2xpc2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnB1dCA9IG51bGw7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IG92ZXJGb3JtID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyRm9ybSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LW92ZXItXCIgKyBpdGVtfSBuYW1lPXtcIm92ZXJQb2ludC1cIiArIGl0ZW19IGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0xhYmVsX0ludGVyaW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9e1wicm91dGluZ092ZXItXCIgKyBpdGVtfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gdmFsdWU9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0ga2V5PXtpdGVtfSBpbmRleD17aXRlbX0gY2xlYXJJbnB1dD17KCkgPT4ge3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc1tpdGVtXS5kZWxldGVGdW5jdGlvbigpO319Lz5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGZyb21DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IHRvQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCBhcmVhQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgYXJlYUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgICAgdG9DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUucHJvcHMub3ZlclNldHRpbmdzLnN3YXBQb2ludHMoKTtcbiAgICAgIGNvbnN0IHRtcEZyb20gPSBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKCk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwodG1wRnJvbSk7XG4gICAgfTtcbiAgICBsZXQgc3dhcEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuc3dpdGNoVGFyZ2V0cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgc3dhcEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1zd2l0Y2hcIiBvbk1vdXNlVXA9e3N3YXBGdW5jdGlvbn0gLz47XG4gICAgfVxuICAgIGxldCBvdmVyQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW92ZXJcIiBvbk1vdXNlVXA9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJGdW5jdGlvbn0gLz47XG4gICAgfVxuXG4gICAgbGV0IGlkeCA9IHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMubGVuZ3RoICsgMTtcblxuICAgIGlucHV0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1mcm9tXCIgKyBmcm9tQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZST019IGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdGcm9tXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5mcm9tRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAge292ZXJGb3JtfVxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC10b1wiICsgdG9DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdUb1wiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX1RPfSBrZXk9e2lkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ1RvXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy50b0Z1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1hcmVhXCIgKyBhcmVhQ2xzQWRkaXRpb259IG5hbWU9XCJhcmVhRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0NFTlRFUn0ga2V5PXtpZHggKyAyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cImFyZWFJbnB1dFwiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMuYXJlYUZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMuYXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMuYXJlYUFkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PjtcblxuICAgIGxldCBkZXRhaWxzID0gXCJcIjtcbiAgICBsZXQgZmVhdHVyZVNlYXJjaENvbnRyb2xzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnNob3dGZWF0dXJlcyAmJiB0aGlzLnByb3BzLmxheWVycykge1xuICAgICAgZmVhdHVyZVNlYXJjaENvbnRyb2xzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8Um91dGVyTGF5ZXJTZWxlY3Rpb24gbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYWN0aXZlTGF5ZXJWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgPFJvdXRlckRldG91clNsaWRlciBtaW49e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5taW59IG1heD17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1heH0gdmFsdWU9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy52YWx1ZX0gcm91dGVyPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMucm91dGVyfS8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7b3ZlckJ1dHRvbn1cbiAgICAgICAge3N3YXBCdXR0b259XG4gICAgICAgIHtmZWF0dXJlU2VhcmNoQ29udHJvbHN9XG4gICAgICA8L2Rpdj47XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBkZXRhaWxzID0gPGRpdiBjbGFzc05hbWU9XCJidXR0b25iYXJcIj5cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlU3RhcnRCdXR0b24pIHtcbiAgICAgIHN0YXJ0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlLXNlYXJjaC1zdGFydFwifSBvbk1vdXNlVXA9e3RoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGV9Pnt0aGlzLmxhbmdDb25zdGFudHMuU1RBUlRfUk9VVEV9PC9idXR0b24+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAge3N0YXJ0QnV0dG9ufVxuICAgICAgICB7Lyp7ZGV0YWlsQnV0dG9ufSovfVxuICAgICAgICB7ZGV0YWlsc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtSb3V0ZXJQcm9maWxlU2VsZWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeFwiXG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXIuanN4XCJcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJDb250cm9scyBleHRlbmRzIEhvcml6b250YWxQYW5lbCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlLnJvdXRlciA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHRoaXMuc3RhdGUuc2hvd0Zvcm0gPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRSb3V0ZU1vZGUgPSB0aGlzLnNldFJvdXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0QXJlYU1vZGUgPSB0aGlzLnNldEFyZWFNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1wYW5lbC1idXR0b24tdG9wXCIpLmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gIH1cblxuICBzZXRSb3V0ZU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwicm91dGVcIik7XG4gIH1cblxuICBzZXRBcmVhTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJhcmVhXCIpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJjNGctcm91dGVyLWNvbnRlbnRcIiArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlbiBcIiA6IFwiIGM0Zy1jbG9zZSBcIikgKyB0aGlzLnByb3BzLm1vZGU7XG4gICAgLy8gcHJvcGFnYXRlIG9wZW4gc3RhdGUgZG93biB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgbGV0IG9wZW4gPSB0aGlzLnByb3BzLm9wZW47XG4gICAgbGV0IG1vZGVTd2l0Y2hlciA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoICYmICF0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJlYVNlYXJjaE9ubHkpIHtcbiAgICAgIG1vZGVTd2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1tb2RlLXN3aXRjaFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYzRnLXJvdXRlci1idXR0b24tcm91dGVcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRSb3V0ZU1vZGV9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZJTkRfUk9VVEV9PlJvdXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1hcmVhXCIgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRBcmVhTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5BUkVBX05BTUV9PkFyZWE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93Rm9ybSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge21vZGVTd2l0Y2hlcn1cbiAgICAgICAgICA8Um91dGVyQWRkcmVzc0lucHV0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItaW5wdXQtY29udGVudFwiIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IHdpdGhQb3NpdGlvbj17dHJ1ZX0gc3dpdGNoVGFyZ2V0cz17dGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSBlbmFibGVPdmVyUG9pbnRzPXt0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBtb2RlPXt0aGlzLnByb3BzLm1vZGV9IG9wZW49e29wZW59IGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJlc2V0RnVuY3Rpb25zPXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M9e3RoaXMucHJvcHMuZnJvbUFkZHJlc3N9IHRvQWRkcmVzcz17dGhpcy5wcm9wcy50b0FkZHJlc3N9IGFyZWFBZGRyZXNzPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSBzbGlkZXJPcHRpb25zPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlcz17dGhpcy5wcm9wcy5wcm9maWxlc30gb3ZlclNldHRpbmdzPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5nc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17XCJjNGctcm91dGVyLWV4dGVuZGVkLW9wdGlvbnNcIn0gZGV0YWlsQnRuQ2I9e3RoaXMudG9nZ2xlRGV0YWlsc30gY2xvc2VCdG5DbGFzcz17XCJjNGctcm91dGVyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWhpZGUtZm9ybS1idXR0b25cIn0gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtfSl9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCAwICsgXCJweFwiKTtcbiAgfVxuXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8gb3ZlcnJpZGUgcGFyZW50IG1ldGhvZFxuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlblwiIDogXCIgYzRnLWNsb3NlXCIpO1xuICAgIGxldCB0b3BWYWx1ZSA9IDA7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICB0b3BWYWx1ZSA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuY3NzKFwidG9wXCIsIHRvcFZhbHVlICsgXCJweFwiKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKHRydWUpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3BlbihmYWxzZSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKGV2dCkge1xuICAgIGxldCBoaWRkZW4gPSB0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSBpZiAoIXRoaXMucHJvcHMub3Blbil7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzfSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudHNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckRldG91clNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGVsZW1lbnQub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgIG91dHB1dFxuICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGVsZW1lbnQudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGVsZW1lbnQudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnRyaWdnZXIoJ2lucHV0Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlVtd2VnPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3NOYW1lPXtyb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRX1cbiAgICAgICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59IG1heD17dGhpcy5wcm9wcy5tYXh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gc3RlcD17MC41fS8+XG4gICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPXtyb3V0aW5nQ29uc3RhbnRzLk9VVFBVVF9ERVRPVVJ9Pnt0aGlzLnByb3BzLnZhbHVlICsgXCIga21cIn08L291dHB1dD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAoIXRoaXMudXBkYXRlZCkge1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgICBvdXRwdXRcbiAgICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckxheWVyU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0TGF5ZXIgPSB0aGlzLnNldExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRMYXllclZhbHVlID0gdGhpcy5zZXRMYXllclZhbHVlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRMYXllcihldmVudCkge1xuICAgIGxldCBsYXllciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllcihwYXJzZUludChsYXllciwgMTApKTtcbiAgfVxuXG4gIHNldExheWVyVmFsdWUoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBkZWZhdWx0TGF5ZXIgPSAwO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyUm91dGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJBcmVhO1xuICAgIH1cbiAgICBjb25zdCBhcnJMYXllcnMgPSBzY29wZS5wcm9wcy5yb3V0ZXIub2JqTGF5ZXJzO1xuICAgIGxldCBsYXllclZhbHVlU2VsZWN0aW9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllcnMgJiYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLmxlbmd0aCA+IDEpKSB7XG4gICAgICBsYXllclZhbHVlU2VsZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1sYXllci12YWx1ZS1zZWxlY3Rpb25cIn0+XG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuYWN0aXZlTGF5ZXJWYWx1ZSA9PT0gbmFtZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIn0gb25Nb3VzZVVwPXt0aGlzLnNldExheWVyVmFsdWV9IGtleT17dGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXVtuYW1lXS5tYXBMYWJlbH0gdmFsdWU9e25hbWV9IHRpdGxlPXtuYW1lfT57bmFtZX08L2J1dHRvbj5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubGVuZ3RoID4gMSkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uXCIgb25DaGFuZ2U9e3RoaXMuc2V0TGF5ZXJ9IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdExheWVyfT5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubWFwKChpZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaWRdLmxheWVyRGF0YTtcblxuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkfSB2YWx1ZT17aWR9PntsYXllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAge2xheWVyVmFsdWVTZWxlY3Rpb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD57bGF5ZXJWYWx1ZVNlbGVjdGlvbn08L1JlYWN0LkZyYWdtZW50Pik7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvZmlsZSA9IHRoaXMuc2V0UHJvZmlsZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9maWxlVHJhbnNsYXRpb24gPSB7XG4gICAgICAwOiBcImNhclwiLFxuICAgICAgMTogXCJoZ3ZcIixcbiAgICAgIDI6IFwiYmlrZVwiLFxuICAgICAgMzogXCJyb2FkYmlrZVwiLFxuICAgICAgNDogXCJiaWtlXCIsXG4gICAgICA1OiBcIm1vdW50YWluYmlrZVwiLFxuICAgICAgNjogXCJiaWtlXCIsXG4gICAgICA3OiBcImVsZWN0cmljYmlrZVwiLFxuICAgICAgODogXCJmb290XCIsXG4gICAgICA5OiBcIndhbmRlclwiLFxuICAgICAgMTA6IFwid2hlZWxjaGFpclwiLFxuICAgICAgMTE6IFwiaGd2XCIsXG4gICAgICAxMjogXCJzY29vdGVyXCIsXG4gICAgICAxMzogXCJtb3RvcmJpa2VcIlxuICAgIH07XG5cbiAgICB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLnByb2ZpbGVMYW5nID0ge1xuICAgICAgXCJjYXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5DQVIsXG4gICAgICBcImhndlwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlRSVUNLLFxuICAgICAgXCJiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQklLRSxcbiAgICAgIFwicm9hZGJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST0FEQklLRSxcbiAgICAgIFwibW91bnRhaW5iaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9VTlRBSU5CSUtFLFxuICAgICAgXCJlbGVjdHJpY2Jpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5FTEVDVFJJQ0JJS0UsXG4gICAgICBcImZvb3RcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQUxLLFxuICAgICAgXCJ3YW5kZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XQU5ERVIsXG4gICAgICBcIndoZWVsY2hhaXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5XSEVFTCxcbiAgICAgIFwic2Nvb3RlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlNDT09ULFxuICAgICAgXCJtb3RvcmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1RPUkJJS0VcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogISFwcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbFxuICAgIH1cbiAgfVxuXG4gIHNldFByb2ZpbGUocHJvZmlsZSkge1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldFByb2ZpbGUocGFyc2VJbnQocHJvZmlsZS5pZCwgMTApKTtcbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV0gKyBcIiBjNGctYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgIDwvZGl2Pik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSwgMTApID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJIb3Jpem9udGFsUGFuZWwiLCJwcm9wcyIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwiYXBwZW5kQ2hpbGQiLCJjbGlja0NvbnRyb2wiLCJiaW5kIiwialF1ZXJ5Iiwib24iLCJtYXBDb250cm9sbGVyIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXAiLCJhZGRDb250cm9sIiwic3RhdGUiLCJvcGVuIiwiY2hpbGRzIiwiY3JlYXRlQ2hpbGRzIiwiZGl2IiwiZm9yRWFjaCIsImNsb3NlIiwic2V0U3RhdGUiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwic2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3NzQ29uc3RhbnRzIiwiQ09OVFJPTF9DT05UQUlORVJfVEwiLCJPTF9VTlNFTEVDVEFCTEUiLCJzdHlsZSIsInRvcCIsIkNPTlRST0xfQ09OVEFJTkVSX1RSIiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJib3R0b20iLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsImNvbnRlbnQiLCJwdXNoIiwiQ29tcG9uZW50IiwiUm91dGVyQWRkcmVzc0ZpZWxkIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJyb3V0ZXIiLCJkYXRhIiwiZ2V0UG9zaXRpb24iLCJyZW1vdmVDb250ZW50IiwibWFwRGF0YSIsImluaXRpYWxQb3NpdGlvbiIsIm5hbWUiLCJpbml0aWFsRGVzdGluYXRpb24iLCJzZXRUb0NlbnRlciIsImNlbnRlciIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJjb29yZGluYXRlcyIsImNvb3JkcyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiaGFuZGxlUG9zaXRpb24iLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJsYXllcl9sb2FkZWQiLCJwb3NpdGlvbkJ1dHRvbiIsIndpdGhQb3NpdGlvbiIsIlJPVVRFX1BPU0lUSU9OIiwibGFiZWwiLCJjc3NJZCIsIm9iakZ1bmN0aW9ucyIsIm9ialNldHRpbmdzIiwicG9wdXAiLCJjb250YWluZXJBZGRyZXNzZXMiLCJ2YWx1ZSIsImluZGV4IiwiUkVNT1ZFX0FERFJFU1MiLCJldmVudCIsInZhbCIsImNsZWFySW5wdXQiLCJoYW5kbGVOZXdQb3NpdGlvbiIsInBvcyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29uc29sZSIsIndhcm4iLCJzZXRSb3V0ZUZyb20iLCJzZXRSb3V0ZVRvIiwic2V0QXJlYVBvaW50IiwicmVjYWxjdWxhdGVSb3V0ZSIsIlJvdXRlckFkZHJlc3NJbnB1dCIsImxhbmciLCJsYW5nQ29uc3RhbnRzIiwicm91dGluZ0NvbnN0YW50c0dlcm1hbiIsInJvdXRpbmdDb25zdGFudHNFbmdsaXNoIiwiaW5wdXQiLCJvdmVyRm9ybSIsImVuYWJsZU92ZXJQb2ludHMiLCJtb2RlIiwiT2JqZWN0Iiwia2V5cyIsIm92ZXJTZXR0aW5ncyIsIm92ZXJQb2ludHMiLCJpdGVtIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJvdmVyQWRkcmVzc2VzIiwiZGVsZXRlRnVuY3Rpb24iLCJmcm9tQ2xzQWRkaXRpb24iLCJ0b0Nsc0FkZGl0aW9uIiwiYXJlYUNsc0FkZGl0aW9uIiwic3dhcEZ1bmN0aW9uIiwic3dhcFBvaW50cyIsInRtcEZyb20iLCJzd2FwQnV0dG9uIiwic3dpdGNoVGFyZ2V0cyIsIm92ZXJCdXR0b24iLCJvdmVyRnVuY3Rpb24iLCJpZHgiLCJsZW5ndGgiLCJST1VURVJfRlJPTSIsImZyb21GdW5jdGlvbnMiLCJyZXNldEZ1bmN0aW9ucyIsImZyb20iLCJmcm9tQWRkcmVzcyIsIlJPVVRFUl9UTyIsInRvRnVuY3Rpb25zIiwidG8iLCJ0b0FkZHJlc3MiLCJST1VURVJfQ0VOVEVSIiwiYXJlYUZ1bmN0aW9ucyIsImFyZWEiLCJhcmVhQWRkcmVzcyIsImRldGFpbHMiLCJmZWF0dXJlU2VhcmNoQ29udHJvbHMiLCJzaG93RmVhdHVyZXMiLCJsYXllcnMiLCJsYXllclZhbHVlUm91dGUiLCJsYXllclZhbHVlQXJlYSIsInNsaWRlck9wdGlvbnMiLCJtaW4iLCJtYXgiLCJzdGFydEJ1dHRvbiIsInJvdXRlU3RhcnRCdXR0b24iLCJTVEFSVF9ST1VURSIsIlJvdXRlckNvbnRyb2xzIiwic2hvd0Zvcm0iLCJzZXRSb3V0ZU1vZGUiLCJzZXRBcmVhTW9kZSIsInJvdXRlcl9kaXYiLCJxdWVyeVNlbGVjdG9yIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0TW9kZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwibW9kZVN3aXRjaGVyIiwiYXJlYVNlYXJjaCIsImFyZWFTZWFyY2hPbmx5IiwiUk9VVEVSX0ZJTkRfUk9VVEUiLCJBUkVBX05BTUUiLCJjdXJyZW50UHJvZmlsZSIsInByb2ZpbGVzIiwiaGVhZGxpbmUiLCJ0b2dnbGVEZXRhaWxzIiwidG9wVmFsdWUiLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0SGVpZ2h0Iiwic2V0T3BlbiIsInJvdXRlckNvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJldnQiLCJoaWRkZW4iLCJpbmNsdWRlcyIsIlJvdXRlckRldG91clNsaWRlciIsInVwZGF0ZWQiLCJyb3V0aW5nQ29uc3RhbnRzIiwiUk9VVEVfVE9HR0xFIiwicmFuZ2UiLCJhdHRyIiwicG9zT2Zmc2V0IiwiTWF0aCIsInJvdW5kIiwib3V0cHV0IiwibmV4dCIsImNzcyIsInRleHQiLCJ1c2VQZXJtYWxpbmsiLCJwZXJtYWxpbmsiLCJ1cGRhdGVMaW5rRnJhZ21lbnRzIiwiZGV0b3VyUm91dGUiLCJkZXRvdXJBcmVhIiwicGVyZm9ybUFyZWEiLCJhcmVhVmFsdWUiLCJ0cmlnZ2VyIiwiT1VUUFVUX0RFVE9VUiIsIlJvdXRlckxheWVyU2VsZWN0aW9uIiwic2V0TGF5ZXIiLCJzZXRMYXllclZhbHVlIiwibGF5ZXIiLCJwYXJzZUludCIsImRlZmF1bHRMYXllciIsImxheWVyUm91dGUiLCJsYXllckFyZWEiLCJhcnJMYXllcnMiLCJvYmpMYXllcnMiLCJsYXllclZhbHVlU2VsZWN0aW9uIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsIm1hcExhYmVsIiwiaWQiLCJsYXllckRhdGEiLCJSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIiwic2V0UHJvZmlsZSIsInByb2ZpbGVUcmFuc2xhdGlvbiIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInNob3dQb3B1cCIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=