(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-controls_jsx"],{

/***/ "./Resources/public/js/components/c4g-horizontal-panel.jsx":
/*!*****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-horizontal-panel.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

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

/***/ "./Resources/public/js/components/c4g-router-address-field.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-address-field.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "./Resources/public/js/components/c4g-autocomplete-input.jsx");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

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
        autoComplete: "off",
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

/***/ "./Resources/public/js/components/c4g-router-address-input.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-address-input.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gRouterAddressField = __webpack_require__(/*! ./c4g-router-address-field.jsx */ "./Resources/public/js/components/c4g-router-address-field.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "./Resources/public/js/components/c4g-router-profile-selection.jsx");

var _c4gRouterLayerSelection = __webpack_require__(/*! ./c4g-router-layer-selection.jsx */ "./Resources/public/js/components/c4g-router-layer-selection.jsx");

var _c4gRouterDetourSlider = __webpack_require__(/*! ./c4g-router-detour-slider.jsx */ "./Resources/public/js/components/c4g-router-detour-slider.jsx");

var _routingConstantI18nDe = __webpack_require__(/*! ../routing-constant-i18n-de */ "./Resources/public/js/routing-constant-i18n-de.js");

var _routingConstantI18nEn = __webpack_require__(/*! ../routing-constant-i18n-en */ "./Resources/public/js/routing-constant-i18n-en.js");

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

/***/ "./Resources/public/js/components/c4g-router-controls.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-controls.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gHorizontalPanel = __webpack_require__(/*! ./c4g-horizontal-panel.jsx */ "./Resources/public/js/components/c4g-horizontal-panel.jsx");

var _c4gRouterAddressInput = __webpack_require__(/*! ./c4g-router-address-input.jsx */ "./Resources/public/js/components/c4g-router-address-input.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "./Resources/public/js/components/c4g-router-profile-selection.jsx");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

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

exports.default = RouterControls;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-detour-slider.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-detour-slider.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _routingConstants = __webpack_require__(/*! ../routing-constants */ "./Resources/public/js/routing-constants.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

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

/***/ "./Resources/public/js/components/c4g-router-layer-selection.jsx":
/*!***********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-layer-selection.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

/***/ "./Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

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
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === _this2.props.currentProfile ? " c4g-active" : " c4g-inactive"),
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

exports.default = RouterProfileSelection;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtaW5wdXQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiSG9yaXpvbnRhbFBhbmVsIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsImFwcGVuZENoaWxkIiwiY2xpY2tDb250cm9sIiwiYmluZCIsImpRdWVyeSIsIm9uIiwibWFwQ29udHJvbGxlciIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwIiwiYWRkQ29udHJvbCIsInN0YXRlIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNldFN0YXRlIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNzc0NvbnN0YW50cyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiT0xfVU5TRUxFQ1RBQkxFIiwic3R5bGUiLCJ0b3AiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiYm90dG9tIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJjb250ZW50IiwicHVzaCIsIkNvbXBvbmVudCIsIlJvdXRlckFkZHJlc3NGaWVsZCIsImxhbmd1YWdlQ29uc3RhbnRzIiwicm91dGVyIiwiZGF0YSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJuYW1lIiwiaW5pdGlhbERlc3RpbmF0aW9uIiwic2V0VG9DZW50ZXIiLCJjZW50ZXIiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiY29vcmRpbmF0ZXMiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImxhYmVsIiwiY3NzSWQiLCJvYmpGdW5jdGlvbnMiLCJvYmpTZXR0aW5ncyIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwidmFsdWUiLCJpbmRleCIsIlJFTU9WRV9BRERSRVNTIiwiZXZlbnQiLCJ2YWwiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJwb3MiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsInNldEFyZWFQb2ludCIsInJlY2FsY3VsYXRlUm91dGUiLCJSb3V0ZXJBZGRyZXNzSW5wdXQiLCJsYW5nIiwibGFuZ0NvbnN0YW50cyIsInJvdXRpbmdDb25zdGFudHNHZXJtYW4iLCJyb3V0aW5nQ29uc3RhbnRzRW5nbGlzaCIsImlucHV0Iiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsIk9iamVjdCIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImRlbGV0ZUZ1bmN0aW9uIiwiZnJvbUNsc0FkZGl0aW9uIiwidG9DbHNBZGRpdGlvbiIsImFyZWFDbHNBZGRpdGlvbiIsInN3YXBGdW5jdGlvbiIsInN3YXBQb2ludHMiLCJ0bXBGcm9tIiwic3dhcEJ1dHRvbiIsInN3aXRjaFRhcmdldHMiLCJvdmVyQnV0dG9uIiwib3ZlckZ1bmN0aW9uIiwiaWR4IiwibGVuZ3RoIiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJzbGlkZXJPcHRpb25zIiwibWluIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJSb3V0ZXJDb250cm9scyIsInNob3dGb3JtIiwic2V0Um91dGVNb2RlIiwic2V0QXJlYU1vZGUiLCJyb3V0ZXJfZGl2IiwicXVlcnlTZWxlY3RvciIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1vZGVTd2l0Y2hlciIsImFyZWFTZWFyY2giLCJhcmVhU2VhcmNoT25seSIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiQVJFQV9OQU1FIiwiY3VycmVudFByb2ZpbGUiLCJwcm9maWxlcyIsImhlYWRsaW5lIiwidG9nZ2xlRGV0YWlscyIsInRvcFZhbHVlIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsInNldE9wZW4iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZ0IiwiaGlkZGVuIiwiaW5jbHVkZXMiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsIk1hdGgiLCJyb3VuZCIsIm91dHB1dCIsIm5leHQiLCJjc3MiLCJ0ZXh0IiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwidXBkYXRlTGlua0ZyYWdtZW50cyIsImRldG91clJvdXRlIiwiZGV0b3VyQXJlYSIsInBlcmZvcm1BcmVhIiwiYXJlYVZhbHVlIiwidHJpZ2dlciIsIk9VVFBVVF9ERVRPVVIiLCJSb3V0ZXJMYXllclNlbGVjdGlvbiIsInNldExheWVyIiwic2V0TGF5ZXJWYWx1ZSIsImxheWVyIiwicGFyc2VJbnQiLCJkZWZhdWx0TGF5ZXIiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwiYXJyTGF5ZXJzIiwib2JqTGF5ZXJzIiwibGF5ZXJWYWx1ZVNlbGVjdGlvbiIsImFjdGl2ZUxheWVyVmFsdWUiLCJtYXBMYWJlbCIsImlkIiwibGF5ZXJEYXRhIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInNldFByb2ZpbGUiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJwcm9maWxlTGFuZyIsIkNBUiIsIlRSVUNLIiwiQklLRSIsIlJPQURCSUtFIiwiTU9VTlRBSU5CSUtFIiwiRUxFQ1RSSUNCSUtFIiwiV0FMSyIsIldBTkRFUiIsIldIRUVMIiwiU0NPT1QiLCJNT1RPUkJJS0UiLCJzaG93UG9wdXAiLCJyb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsZTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjs7QUFDQSxRQUFJSixLQUFLLENBQUNNLEtBQVYsRUFBaUI7QUFDZkQsWUFBTSxDQUFDQyxLQUFQLEdBQWVOLEtBQUssQ0FBQ00sS0FBckI7QUFDRDs7QUFDREosV0FBTyxDQUFDSyxTQUFSLEdBQW9CLENBQUNQLEtBQUssQ0FBQ08sU0FBTixJQUFtQixzQkFBcEIsSUFBOEMsVUFBOUMsSUFBNERQLEtBQUssQ0FBQ1EsU0FBTixJQUFtQixLQUEvRSxJQUF3RixjQUF4RixHQUF5RyxpQkFBN0g7QUFDQU4sV0FBTyxDQUFDTyxXQUFSLENBQW9CSixNQUFwQjtBQUNBQSxVQUFNLENBQUNDLEtBQVAsR0FBZU4sS0FBSyxDQUFDTSxLQUFyQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsZ0RBQXBCO0FBQ0FDLFVBQU0sQ0FBQ1AsTUFBRCxDQUFOLENBQWVRLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBS0gsWUFBaEM7QUFDQSxRQUFJSSxhQUFhLEdBQUdkLEtBQUssQ0FBQ2MsYUFBMUI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQUosQ0FBWTtBQUFDZCxhQUFPLEVBQUVBLE9BQVY7QUFBbUJlLFlBQU0sRUFBRWpCLEtBQUssQ0FBQ2lC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QUFJLENBQUMyRyxFQUE3QixDQUF4QixJQUE0RFQsUUFBUSxDQUFDbEcsSUFBSSxDQUFDMkcsRUFBTixFQUFVLEVBQVYsQ0FBUixLQUEwQixNQUFJLENBQUNwTixLQUFMLENBQVdrSyxjQUFyQyxHQUFzRCxhQUF0RCxHQUFzRSxlQUFsSSxDQURuQjtBQUVRLGlCQUFHLEVBQUV6RCxJQUFJLENBQUMyRyxFQUZsQjtBQUVzQixtQkFBSyxFQUFFLE1BQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFJLENBQUNELGtCQUFMLENBQXdCL0csSUFBSSxDQUFDMkcsRUFBN0IsQ0FBakI7QUFGN0IsY0FBUDtBQUdELFdBSkEsQ0FGSCxDQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsOEJBQVE7QUFBSyxxQkFBUyxFQUFDO0FBQWYsMEJBQ047QUFBUSxxQkFBUyxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDekwsUUFBTCxDQUFjO0FBQUMwTSx5QkFBUyxFQUFFO0FBQVosZUFBZCxDQUFOO0FBQUEsYUFBbkI7QUFBMkQscUJBQVMsRUFBRSx3QkFBd0IsS0FBS2Isa0JBQUwsQ0FBd0IsS0FBS3hOLEtBQUwsQ0FBV2tLLGNBQW5DLENBQXhCLEdBQTZFLGFBQW5KO0FBQ1EsZUFBRyxFQUFFLEtBQUtsSyxLQUFMLENBQVdrSyxjQUR4QjtBQUN3QyxpQkFBSyxFQUFFLEtBQUt1RCxXQUFMLENBQWlCLEtBQUtELGtCQUFMLENBQXdCLEtBQUt4TixLQUFMLENBQVdrSyxjQUFuQyxDQUFqQjtBQUQvQyxZQURNLENBQVI7QUFJRDtBQUVGO0FBQ0Y7OztXQUVELGdDQUF1QjtBQUNyQixXQUFLdkksUUFBTCxDQUFjO0FBQUMwTSxpQkFBUyxFQUFFO0FBQVosT0FBZDtBQUNEOzs7RUFsRmlEMUwsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItY29udHJvbHNfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICBidXR0b24udGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAocHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIikgKyBcIi1idXR0b24tXCIgKyAocHJvcHMuZGlyZWN0aW9uIHx8IFwidG9wXCIpICsgXCIgb2wtY29udHJvbCBcIiArIFwib2wtdW5zZWxlY3RhYmxlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIHRoaXMuY2xpY2tDb250cm9sID0gdGhpcy5jbGlja0NvbnRyb2wuYmluZCh0aGlzKTtcbiAgICBqUXVlcnkoYnV0dG9uKS5vbignY2xpY2snLCB0aGlzLmNsaWNrQ29udHJvbCk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcyAoKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY29wZS5zdGF0ZS5jaGlsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgdG9wVmFsdWUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSAtIDEwMDtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuc3R5bGUudG9wID0gdG9wVmFsdWUgKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIEhUTUwgY29udGVudCB0byB0aGUgcGFuZWwuXG4gICAqIEBwYXJhbSBjb250ZW50ICAgTXVzdCBiZSBhIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuc3RhdGUuY2hpbGRzLnB1c2goY29udGVudCk7XG4gIH1cblxuXG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdXRvY29tcGxldGVJbnB1dH0gZnJvbSBcIi4vYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3hcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyQWRkcmVzc0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNvbnRlbnQgPSB0aGlzLnJlbW92ZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgICBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbFBvc2l0aW9uICYmIChwcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIgfHwgcHJvcHMubmFtZSA9PT0gXCJhcmVhRnJvbVwiKSkge1xuICAgICAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsRGVzdGluYXRpb24gJiYgcHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgbGV0IHNldFRvQ2VudGVyID0gKGRhdGEpPT4ge1xuICAgICAgICBsZXQgY2VudGVyID0gcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3JkcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMF07XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sYXRpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzFdO1xuICAgICAgICB0aGlzLmhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkID0gd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgfHwgW107XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKHNldFRvQ2VudGVyKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBvc2l0aW9uQnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy53aXRoUG9zaXRpb24pIHtcbiAgICAgIHBvc2l0aW9uQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXBvc2l0aW9uXCIgb25Nb3VzZVVwPXt0aGlzLmdldFBvc2l0aW9ufSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURV9QT1NJVElPTn0vPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17dGhpcy5wcm9wcy5jc3NJZH0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IHBvcHVwPXt0aGlzLnByb3BzLnBvcHVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gYXV0b0NvbXBsZXRlPVwib2ZmXCIgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IGluZGV4PXt0aGlzLnByb3BzLmluZGV4fS8+XG4gICAgICAgIHtwb3NpdGlvbkJ1dHRvbn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1jbGVhclwifSBvbk1vdXNlVXA9e3RoaXMucmVtb3ZlQ29udGVudH0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUkVNT1ZFX0FERFJFU1N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW1vdmVDb250ZW50KGV2ZW50KSB7XG4gICAgalF1ZXJ5KFwiI1wiICsgdGhpcy5wcm9wcy5jc3NJZCkudmFsKCcnKTtcbiAgICB0aGlzLnByb3BzLmNsZWFySW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoYW5kbGVOZXdQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHNjb3BlLmhhbmRsZVBvc2l0aW9uKHBvcyk7XG4gICAgfTtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZU5ld1Bvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBpbnB1dCBjb29yZGluYXRlcyBhbmQgZXhlY3V0ZXMgdGhlIHJldmVyc2Ugc2VhcmNoLiBPbiBzdWNjZXNzLCB0aGUgcmVzdWx0IGxvY2F0aW9uIGlzIGluc2VydGVkIGluIHRoZVxuICAgKiBnaXZlbiBpbnB1dCBmaWVsZCBhbmQgdGhlIGdpdmVuIHByb3BlcnR5IG9mIHRoaXMuXG4gICAqIEBwYXJhbSBjb29yZGluYXRlc1xuICAgKi9cbiAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVGcm9tKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJvdmVyVmFsdWVcIikge1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVUbyhjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldEFyZWFQb2ludChjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyQWRkcmVzc0ZpZWxkIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJMYXllclNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyRGV0b3VyU2xpZGVyIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1kZXRvdXItc2xpZGVyLmpzeFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWVuXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKCFwcm9wcy5yb3V0ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSByb3V0aW5nIGNvbXBvbmVudCBuZWVkcyBhIHJvdXRlciwgaXQgd29uJ3Qgd29yayBjb3JyZWN0bHkgc2luY2Ugbm9uZSB3YXMgcGFzc2VkLi4uXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb3V0ZXI6IHByb3BzLnJvdXRlcixcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzR2VybWFuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2tcbiAgICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gcm91dGluZ0NvbnN0YW50c0VuZ2xpc2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnB1dCA9IG51bGw7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IG92ZXJGb3JtID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyRm9ybSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LW92ZXItXCIgKyBpdGVtfSBuYW1lPXtcIm92ZXJQb2ludC1cIiArIGl0ZW19IGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0xhYmVsX0ludGVyaW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9e1wicm91dGluZ092ZXItXCIgKyBpdGVtfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gdmFsdWU9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0ga2V5PXtpdGVtfSBpbmRleD17aXRlbX0gY2xlYXJJbnB1dD17KCkgPT4ge3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc1tpdGVtXS5kZWxldGVGdW5jdGlvbigpO319Lz5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGZyb21DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IHRvQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCBhcmVhQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgYXJlYUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgICAgdG9DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUucHJvcHMub3ZlclNldHRpbmdzLnN3YXBQb2ludHMoKTtcbiAgICAgIGNvbnN0IHRtcEZyb20gPSBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKCk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwodG1wRnJvbSk7XG4gICAgfTtcbiAgICBsZXQgc3dhcEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuc3dpdGNoVGFyZ2V0cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgc3dhcEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1zd2l0Y2hcIiBvbk1vdXNlVXA9e3N3YXBGdW5jdGlvbn0gLz47XG4gICAgfVxuICAgIGxldCBvdmVyQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW92ZXJcIiBvbk1vdXNlVXA9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJGdW5jdGlvbn0gLz47XG4gICAgfVxuXG4gICAgbGV0IGlkeCA9IHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMubGVuZ3RoICsgMTtcblxuICAgIGlucHV0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1mcm9tXCIgKyBmcm9tQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZST019IGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdGcm9tXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5mcm9tRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAge292ZXJGb3JtfVxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC10b1wiICsgdG9DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdUb1wiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX1RPfSBrZXk9e2lkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ1RvXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy50b0Z1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1hcmVhXCIgKyBhcmVhQ2xzQWRkaXRpb259IG5hbWU9XCJhcmVhRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0NFTlRFUn0ga2V5PXtpZHggKyAyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cImFyZWFJbnB1dFwiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMuYXJlYUZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMuYXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMuYXJlYUFkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PjtcblxuICAgIGxldCBkZXRhaWxzID0gXCJcIjtcbiAgICBsZXQgZmVhdHVyZVNlYXJjaENvbnRyb2xzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnNob3dGZWF0dXJlcyAmJiB0aGlzLnByb3BzLmxheWVycykge1xuICAgICAgZmVhdHVyZVNlYXJjaENvbnRyb2xzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8Um91dGVyTGF5ZXJTZWxlY3Rpb24gbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYWN0aXZlTGF5ZXJWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgPFJvdXRlckRldG91clNsaWRlciBtaW49e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5taW59IG1heD17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1heH0gdmFsdWU9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy52YWx1ZX0gcm91dGVyPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMucm91dGVyfS8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7b3ZlckJ1dHRvbn1cbiAgICAgICAge3N3YXBCdXR0b259XG4gICAgICAgIHtmZWF0dXJlU2VhcmNoQ29udHJvbHN9XG4gICAgICA8L2Rpdj47XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBkZXRhaWxzID0gPGRpdiBjbGFzc05hbWU9XCJidXR0b25iYXJcIj5cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlU3RhcnRCdXR0b24pIHtcbiAgICAgIHN0YXJ0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlLXNlYXJjaC1zdGFydFwifSBvbk1vdXNlVXA9e3RoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGV9Pnt0aGlzLmxhbmdDb25zdGFudHMuU1RBUlRfUk9VVEV9PC9idXR0b24+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAge3N0YXJ0QnV0dG9ufVxuICAgICAgICB7Lyp7ZGV0YWlsQnV0dG9ufSovfVxuICAgICAgICB7ZGV0YWlsc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtSb3V0ZXJQcm9maWxlU2VsZWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeFwiXG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXIuanN4XCJcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJDb250cm9scyBleHRlbmRzIEhvcml6b250YWxQYW5lbCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlLnJvdXRlciA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHRoaXMuc3RhdGUuc2hvd0Zvcm0gPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRSb3V0ZU1vZGUgPSB0aGlzLnNldFJvdXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0QXJlYU1vZGUgPSB0aGlzLnNldEFyZWFNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1wYW5lbC1idXR0b24tdG9wXCIpLmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gIH1cblxuICBzZXRSb3V0ZU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwicm91dGVcIik7XG4gIH1cblxuICBzZXRBcmVhTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJhcmVhXCIpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJjNGctcm91dGVyLWNvbnRlbnRcIiArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlbiBcIiA6IFwiIGM0Zy1jbG9zZSBcIikgKyB0aGlzLnByb3BzLm1vZGU7XG4gICAgLy8gcHJvcGFnYXRlIG9wZW4gc3RhdGUgZG93biB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgbGV0IG9wZW4gPSB0aGlzLnByb3BzLm9wZW47XG4gICAgbGV0IG1vZGVTd2l0Y2hlciA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoICYmICF0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJlYVNlYXJjaE9ubHkpIHtcbiAgICAgIG1vZGVTd2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1tb2RlLXN3aXRjaFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYzRnLXJvdXRlci1idXR0b24tcm91dGVcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRSb3V0ZU1vZGV9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZJTkRfUk9VVEV9PlJvdXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1hcmVhXCIgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRBcmVhTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5BUkVBX05BTUV9PkFyZWE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93Rm9ybSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge21vZGVTd2l0Y2hlcn1cbiAgICAgICAgICA8Um91dGVyQWRkcmVzc0lucHV0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItaW5wdXQtY29udGVudFwiIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IHdpdGhQb3NpdGlvbj17dHJ1ZX0gc3dpdGNoVGFyZ2V0cz17dGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSBlbmFibGVPdmVyUG9pbnRzPXt0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBtb2RlPXt0aGlzLnByb3BzLm1vZGV9IG9wZW49e29wZW59IGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJlc2V0RnVuY3Rpb25zPXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M9e3RoaXMucHJvcHMuZnJvbUFkZHJlc3N9IHRvQWRkcmVzcz17dGhpcy5wcm9wcy50b0FkZHJlc3N9IGFyZWFBZGRyZXNzPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSBzbGlkZXJPcHRpb25zPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlcz17dGhpcy5wcm9wcy5wcm9maWxlc30gb3ZlclNldHRpbmdzPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5nc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17XCJjNGctcm91dGVyLWV4dGVuZGVkLW9wdGlvbnNcIn0gZGV0YWlsQnRuQ2I9e3RoaXMudG9nZ2xlRGV0YWlsc30gY2xvc2VCdG5DbGFzcz17XCJjNGctcm91dGVyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWhpZGUtZm9ybS1idXR0b25cIn0gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtfSl9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCAwICsgXCJweFwiKTtcbiAgfVxuXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8gb3ZlcnJpZGUgcGFyZW50IG1ldGhvZFxuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlblwiIDogXCIgYzRnLWNsb3NlXCIpO1xuICAgIGxldCB0b3BWYWx1ZSA9IDA7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICB0b3BWYWx1ZSA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuY3NzKFwidG9wXCIsIHRvcFZhbHVlICsgXCJweFwiKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKHRydWUpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3BlbihmYWxzZSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKGV2dCkge1xuICAgIGxldCBoaWRkZW4gPSB0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSBpZiAoIXRoaXMucHJvcHMub3Blbil7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzfSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudHNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyRGV0b3VyU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgZWxlbWVudC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgb3V0cHV0XG4gICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogZWxlbWVudC52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogZWxlbWVudC52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VW13ZWc8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzc05hbWU9e3JvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFfVxuICAgICAgICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn0gbWF4PXt0aGlzLnByb3BzLm1heH0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBzdGVwPXswLjV9Lz5cbiAgICAgICAgPG91dHB1dCBjbGFzc05hbWU9e3JvdXRpbmdDb25zdGFudHMuT1VUUFVUX0RFVE9VUn0+e3RoaXMucHJvcHMudmFsdWUgKyBcIiBrbVwifTwvb3V0cHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy51cGRhdGVkKSB7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICAgIG91dHB1dFxuICAgICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS50cmlnZ2VyKCdpbnB1dCcpO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyTGF5ZXJTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRMYXllciA9IHRoaXMuc2V0TGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyVmFsdWUgPSB0aGlzLnNldExheWVyVmFsdWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldExheWVyKGV2ZW50KSB7XG4gICAgbGV0IGxheWVyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyKHBhcnNlSW50KGxheWVyLCAxMCkpO1xuICB9XG5cbiAgc2V0TGF5ZXJWYWx1ZShldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllclZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGRlZmF1bHRMYXllciA9IDA7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBkZWZhdWx0TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllckFyZWE7XG4gICAgfVxuICAgIGNvbnN0IGFyckxheWVycyA9IHNjb3BlLnByb3BzLnJvdXRlci5vYmpMYXllcnM7XG4gICAgbGV0IGxheWVyVmFsdWVTZWxlY3Rpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubGVuZ3RoID4gMSkpIHtcbiAgICAgIGxheWVyVmFsdWVTZWxlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWxheWVyLXZhbHVlLXNlbGVjdGlvblwifT5cbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllclZhbHVlID09PSBuYW1lID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwifSBvbk1vdXNlVXA9e3RoaXMuc2V0TGF5ZXJWYWx1ZX0ga2V5PXt0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdW25hbWVdLm1hcExhYmVsfSB2YWx1ZT17bmFtZX0gdGl0bGU9e25hbWV9PntuYW1lfTwvYnV0dG9uPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5sYXllcnMgJiYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5sZW5ndGggPiAxKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRMYXllcn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0TGF5ZXJ9PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpZF0ubGF5ZXJEYXRhO1xuXG4gICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR9IHZhbHVlPXtpZH0+e2xheWVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICB7bGF5ZXJWYWx1ZVNlbGVjdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PntsYXllclZhbHVlU2VsZWN0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9maWxlID0gdGhpcy5zZXRQcm9maWxlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbiA9IHtcbiAgICAgIDA6IFwiY2FyXCIsXG4gICAgICAxOiBcImhndlwiLFxuICAgICAgMjogXCJiaWtlXCIsXG4gICAgICAzOiBcInJvYWRiaWtlXCIsXG4gICAgICA0OiBcImJpa2VcIixcbiAgICAgIDU6IFwibW91bnRhaW5iaWtlXCIsXG4gICAgICA2OiBcImJpa2VcIixcbiAgICAgIDc6IFwiZWxlY3RyaWNiaWtlXCIsXG4gICAgICA4OiBcImZvb3RcIixcbiAgICAgIDk6IFwid2FuZGVyXCIsXG4gICAgICAxMDogXCJ3aGVlbGNoYWlyXCIsXG4gICAgICAxMTogXCJoZ3ZcIixcbiAgICAgIDEyOiBcInNjb290ZXJcIixcbiAgICAgIDEzOiBcIm1vdG9yYmlrZVwiXG4gICAgfTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMucHJvZmlsZUxhbmcgPSB7XG4gICAgICBcImNhclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkNBUixcbiAgICAgIFwiaGd2XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuVFJVQ0ssXG4gICAgICBcImJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5CSUtFLFxuICAgICAgXCJyb2FkYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPQURCSUtFLFxuICAgICAgXCJtb3VudGFpbmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1VOVEFJTkJJS0UsXG4gICAgICBcImVsZWN0cmljYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkVMRUNUUklDQklLRSxcbiAgICAgIFwiZm9vdFwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTEssXG4gICAgICBcIndhbmRlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTkRFUixcbiAgICAgIFwid2hlZWxjaGFpclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldIRUVMLFxuICAgICAgXCJzY29vdGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuU0NPT1QsXG4gICAgICBcIm1vdG9yYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVE9SQklLRVxuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiAhIXByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsXG4gICAgfVxuICB9XG5cbiAgc2V0UHJvZmlsZShwcm9maWxlKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0UHJvZmlsZShwYXJzZUludChwcm9maWxlLmlkLCAxMCkpO1xuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdXX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlciBjNGctcG9wdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KX0vPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucHJvZmlsZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRQcm9maWxlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF0gKyAocGFyc2VJbnQoaXRlbS5pZCwgMTApID09PSB0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=