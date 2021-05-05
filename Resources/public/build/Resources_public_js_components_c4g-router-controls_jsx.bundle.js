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

      return _react["default"].createElement("div", {
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
        positionButton = _react["default"].createElement("button", {
          className: "c4g-router-position",
          onMouseUp: this.getPosition,
          title: this.languageConstants.ROUTE_POSITION
        });
      }

      return _react["default"].createElement("div", {
        className: this.props.className
      }, _react["default"].createElement("label", {
        htmlFor: this.props.name
      }, this.props.label), _react["default"].createElement(_c4gAutocompleteInput.AutocompleteInput, {
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
      }), positionButton, _react["default"].createElement("button", {
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
          return _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
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
        swapButton = _react["default"].createElement("button", {
          className: "c4g-router-switch",
          onMouseUp: swapFunction
        });
      }

      var overButton = "";

      if (this.props.enableOverPoints && this.props.mode === "route") {
        overButton = _react["default"].createElement("button", {
          className: "c4g-router-over",
          onMouseUp: this.props.overSettings.overFunction
        });
      }

      var idx = this.props.overSettings.overPoints.length + 1;
      input = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
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
      }), overForm, _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
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
      }), _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
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
        featureSearchControls = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_c4gRouterLayerSelection.RouterLayerSelection, {
          layers: this.props.layers,
          router: this.props.router,
          activeLayerValue: this.props.router.state.mode === "route" ? this.props.router.state.layerValueRoute : this.props.router.state.layerValueArea
        }), _react["default"].createElement(_c4gRouterDetourSlider.RouterDetourSlider, {
          min: this.props.sliderOptions.min,
          max: this.props.sliderOptions.max,
          value: this.props.sliderOptions.value,
          router: this.props.sliderOptions.router
        }));
      }

      if (this.props.mode === "route") {
        details = _react["default"].createElement("div", {
          className: "buttonbar"
        }, overButton, swapButton, featureSearchControls);
      } else if (this.props.mode === "area") {
        details = _react["default"].createElement("div", {
          className: "buttonbar"
        }, featureSearchControls);
      }

      var startButton = null;

      if (this.props.router.props.mapController.data.routeStartButton) {
        startButton = _react["default"].createElement("button", {
          className: "c4g-route-search-start",
          onMouseUp: this.props.router.recalculateRoute
        }, this.langConstants.START_ROUTE);
      }

      return _react["default"].createElement("div", {
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

var _c4gHorizontalPanel = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/components/c4g-horizontal-panel.jsx */ "./Resources/public/js/components/c4g-horizontal-panel.jsx");

var _c4gRouterAddressInput = __webpack_require__(/*! ./c4g-router-address-input.jsx */ "./Resources/public/js/components/c4g-router-address-input.jsx");

var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "./Resources/public/js/components/c4g-router-profile-selection.jsx");

var _c4gTitlebar = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

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
        modeSwitcher = _react["default"].createElement("div", {
          className: "c4g-router-mode-switch"
        }, _react["default"].createElement("button", {
          id: "c4g-router-button-route",
          className: this.props.mode === "route" ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setRouteMode,
          title: this.langConstants.ROUTER_FIND_ROUTE
        }, "Route"), _react["default"].createElement("button", {
          id: "c4g-router-button-area",
          className: this.props.mode === "area" ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setAreaMode,
          title: this.langConstants.AREA_NAME
        }, "Area"));
      }

      if (this.state.showForm) {
        return _react["default"].createElement("div", {
          className: className
        }, modeSwitcher, _react["default"].createElement(_c4gRouterAddressInput.RouterAddressInput, {
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
        return _react["default"].createElement("div", {
          className: className
        }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
          wrapperClass: "c4g-router-header",
          header: headline,
          headerClass: "c4g-router-headline",
          detailBtnClass: "c4g-router-extended-options",
          detailBtnCb: this.toggleDetails,
          closeBtnClass: "c4g-router-close",
          closeBtnCb: this.close
        }), _react["default"].createElement("button", {
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
      return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Umweg"), _react["default"].createElement("input", {
        type: "range",
        className: _routingConstants.routingConstants.ROUTE_TOGGLE,
        min: this.props.min,
        max: this.props.max,
        defaultValue: this.props.value,
        step: 0.5
      }), _react["default"].createElement("output", {
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
        layerValueSelection = _react["default"].createElement("div", {
          className: "c4g-router-layer-value-selection"
        }, Object.keys(this.props.layers[defaultLayer]).map(function (name) {
          return _react["default"].createElement("button", {
            className: _this2.props.activeLayerValue === name ? "c4g-active" : "c4g-inactive",
            onMouseUp: _this2.setLayerValue,
            key: _this2.props.layers[defaultLayer][name].mapLabel,
            value: name,
            title: name
          }, name);
        }));
      }

      if (this.props.layers && Object.keys(this.props.layers).length > 1) {
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("select", {
          className: "c4g-router-layer-selection",
          onChange: this.setLayer,
          defaultValue: defaultLayer
        }, Object.keys(this.props.layers).map(function (id) {
          var layer = arrLayers[id].layerData;
          return _react["default"].createElement("option", {
            key: id,
            value: id
          }, layer.name);
        })), layerValueSelection);
      } else {
        return _react["default"].createElement(_react["default"].Fragment, null, layerValueSelection);
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
        return _react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, _react["default"].createElement("button", {
          className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
          key: this.props.currentProfile,
          title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
        }));
      } else {
        if (this.state.showPopup) {
          return _react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, _react["default"].createElement("button", {
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
            return _react["default"].createElement("button", {
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === _this2.props.currentProfile ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
          return _react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, _react["default"].createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtaW5wdXQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiSG9yaXpvbnRhbFBhbmVsIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xpY2tDb250cm9sIiwiYmluZCIsImpRdWVyeSIsIm9uIiwibWFwQ29udHJvbGxlciIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwIiwiYWRkQ29udHJvbCIsInN0YXRlIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNldFN0YXRlIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNzc0NvbnN0YW50cyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiT0xfVU5TRUxFQ1RBQkxFIiwic3R5bGUiLCJ0b3AiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiYm90dG9tIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJjb250ZW50IiwicHVzaCIsIkNvbXBvbmVudCIsIlJvdXRlckFkZHJlc3NGaWVsZCIsImxhbmd1YWdlQ29uc3RhbnRzIiwicm91dGVyIiwiZGF0YSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJuYW1lIiwiaW5pdGlhbERlc3RpbmF0aW9uIiwic2V0VG9DZW50ZXIiLCJjZW50ZXIiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiY29vcmRpbmF0ZXMiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImxhYmVsIiwiY3NzSWQiLCJvYmpGdW5jdGlvbnMiLCJvYmpTZXR0aW5ncyIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwidmFsdWUiLCJpbmRleCIsIlJFTU9WRV9BRERSRVNTIiwiZXZlbnQiLCJ2YWwiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJwb3MiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsInNldEFyZWFQb2ludCIsInJlY2FsY3VsYXRlUm91dGUiLCJSb3V0ZXJBZGRyZXNzSW5wdXQiLCJsYW5nIiwibGFuZ0NvbnN0YW50cyIsInJvdXRpbmdDb25zdGFudHNHZXJtYW4iLCJyb3V0aW5nQ29uc3RhbnRzRW5nbGlzaCIsImlucHV0Iiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsIk9iamVjdCIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImRlbGV0ZUZ1bmN0aW9uIiwiZnJvbUNsc0FkZGl0aW9uIiwidG9DbHNBZGRpdGlvbiIsImFyZWFDbHNBZGRpdGlvbiIsInN3YXBGdW5jdGlvbiIsInN3YXBQb2ludHMiLCJ0bXBGcm9tIiwic3dhcEJ1dHRvbiIsInN3aXRjaFRhcmdldHMiLCJvdmVyQnV0dG9uIiwib3ZlckZ1bmN0aW9uIiwiaWR4IiwibGVuZ3RoIiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJzbGlkZXJPcHRpb25zIiwibWluIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJSb3V0ZXJDb250cm9scyIsInNob3dGb3JtIiwic2V0Um91dGVNb2RlIiwic2V0QXJlYU1vZGUiLCJyb3V0ZXJfZGl2IiwicXVlcnlTZWxlY3RvciIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1vZGVTd2l0Y2hlciIsImFyZWFTZWFyY2giLCJhcmVhU2VhcmNoT25seSIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiQVJFQV9OQU1FIiwiY3VycmVudFByb2ZpbGUiLCJwcm9maWxlcyIsImhlYWRsaW5lIiwidG9nZ2xlRGV0YWlscyIsInRvcFZhbHVlIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsInNldE9wZW4iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZ0IiwiaGlkZGVuIiwiaW5jbHVkZXMiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsIk1hdGgiLCJyb3VuZCIsIm91dHB1dCIsIm5leHQiLCJjc3MiLCJ0ZXh0IiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwidXBkYXRlTGlua0ZyYWdtZW50cyIsImRldG91clJvdXRlIiwiZGV0b3VyQXJlYSIsInBlcmZvcm1BcmVhIiwiYXJlYVZhbHVlIiwidHJpZ2dlciIsIk9VVFBVVF9ERVRPVVIiLCJSb3V0ZXJMYXllclNlbGVjdGlvbiIsInNldExheWVyIiwic2V0TGF5ZXJWYWx1ZSIsImxheWVyIiwicGFyc2VJbnQiLCJkZWZhdWx0TGF5ZXIiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwiYXJyTGF5ZXJzIiwib2JqTGF5ZXJzIiwibGF5ZXJWYWx1ZVNlbGVjdGlvbiIsImFjdGl2ZUxheWVyVmFsdWUiLCJtYXBMYWJlbCIsImlkIiwibGF5ZXJEYXRhIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInNldFByb2ZpbGUiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJwcm9maWxlTGFuZyIsIkNBUiIsIlRSVUNLIiwiQklLRSIsIlJPQURCSUtFIiwiTU9VTlRBSU5CSUtFIiwiRUxFQ1RSSUNCSUtFIiwiV0FMSyIsIldBTkRFUiIsIldIRUVMIiwiU0NPT1QiLCJNT1RPUkJJS0UiLCJzaG93UG9wdXAiLCJyb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsZTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixXQUFPLENBQUNJLFNBQVIsR0FBb0IsQ0FBQ04sS0FBSyxDQUFDTSxTQUFOLElBQW1CLHNCQUFwQixJQUE4QyxVQUE5QyxJQUE0RE4sS0FBSyxDQUFDTyxTQUFOLElBQW1CLEtBQS9FLElBQXdGLGNBQXhGLEdBQXlHLGlCQUE3SDtBQUNBTCxXQUFPLENBQUNNLFdBQVIsQ0FBb0JILE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ0ksS0FBUCxHQUFlVCxLQUFLLENBQUNTLEtBQXJCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixnREFBcEI7QUFDQUMsVUFBTSxDQUFDUCxNQUFELENBQU4sQ0FBZVEsRUFBZixDQUFrQixPQUFsQixFQUEyQixNQUFLSCxZQUFoQztBQUNBLFFBQUlJLGFBQWEsR0FBR2QsS0FBSyxDQUFDYyxhQUExQjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO0FBQUNkLGFBQU8sRUFBRUEsT0FBVjtBQUFtQmUsWUFBTSxFQUFFakIsS0FBSyxDQUFDaUI7QUFBakMsS0FBWixDQUFkO0FBQ0FILGlCQUFhLENBQUNJLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCSixPQUE3QjtBQUNBLFVBQUtLLEtBQUwsR0FB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QUFzRCxhQUF0RCxHQUFzRSxlQUFsSSxDQURuQjtBQUVRLGlCQUFHLEVBQUV6RCxJQUFJLENBQUMyRyxFQUZsQjtBQUVzQixtQkFBSyxFQUFFLE1BQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFJLENBQUNELGtCQUFMLENBQXdCL0csSUFBSSxDQUFDMkcsRUFBN0IsQ0FBakI7QUFGN0IsY0FBUDtBQUdELFdBSkEsQ0FGSCxDQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsaUJBQVE7QUFBSyxxQkFBUyxFQUFDO0FBQWYsYUFDTjtBQUFRLHFCQUFTLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUN6TCxRQUFMLENBQWM7QUFBQzBNLHlCQUFTLEVBQUU7QUFBWixlQUFkLENBQU47QUFBQSxhQUFuQjtBQUEyRCxxQkFBUyxFQUFFLHdCQUF3QixLQUFLYixrQkFBTCxDQUF3QixLQUFLeE4sS0FBTCxDQUFXa0ssY0FBbkMsQ0FBeEIsR0FBNkUsYUFBbko7QUFDUSxlQUFHLEVBQUUsS0FBS2xLLEtBQUwsQ0FBV2tLLGNBRHhCO0FBQ3dDLGlCQUFLLEVBQUUsS0FBS3VELFdBQUwsQ0FBaUIsS0FBS0Qsa0JBQUwsQ0FBd0IsS0FBS3hOLEtBQUwsQ0FBV2tLLGNBQW5DLENBQWpCO0FBRC9DLFlBRE0sQ0FBUjtBQUlEO0FBRUY7QUFDRjs7O1dBRUQsZ0NBQXVCO0FBQ3JCLFdBQUt2SSxRQUFMLENBQWM7QUFBQzBNLGlCQUFTLEVBQUU7QUFBWixPQUFkO0FBQ0Q7OztFQWxGaUQxTCxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXJvdXRlci1jb250cm9sc19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctaG9yaXpvbnRhbC1wYW5lbFwiKSArIFwiLWJ1dHRvbi1cIiArIChwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIikgKyBcIiBvbC1jb250cm9sIFwiICsgXCJvbC11bnNlbGVjdGFibGVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIGpRdWVyeShidXR0b24pLm9uKCdjbGljaycsIHRoaXMuY2xpY2tDb250cm9sKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRzICgpIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjb3BlLnN0YXRlLmNoaWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMTAwcHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIGxldCB0b3BWYWx1ZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdIC0gMTAwO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5zdHlsZS50b3AgPSB0b3BWYWx1ZSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpLnJlbW92ZUNsYXNzKFwicGFuZWwtc2xpZGVkLWluXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdICsgXCJweFwiO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1vdXRcIilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gSFRNTCBjb250ZW50IHRvIHRoZSBwYW5lbC5cbiAgICogQHBhcmFtIGNvbnRlbnQgICBNdXN0IGJlIGEgSFRNTCBlbGVtZW50LlxuICAgKi9cbiAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5jaGlsZHMucHVzaChjb250ZW50KTtcbiAgfVxuXG5cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tIFwiLi9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ29udGVudCA9IHRoaXMucmVtb3ZlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsUG9zaXRpb24gJiYgKHByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIiB8fCBwcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpKSB7XG4gICAgICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJvdXRlci5tYXBEYXRhLmluaXRpYWxEZXN0aW5hdGlvbiAmJiBwcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICBsZXQgc2V0VG9DZW50ZXIgPSAoZGF0YSk9PiB7XG4gICAgICAgIGxldCBjZW50ZXIgPSBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sb25naXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVswXTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMV07XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goc2V0VG9DZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zaXRpb25CdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLndpdGhQb3NpdGlvbikge1xuICAgICAgcG9zaXRpb25CdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcG9zaXRpb25cIiBvbk1vdXNlVXA9e3RoaXMuZ2V0UG9zaXRpb259IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFX1BPU0lUSU9OfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubmFtZX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3N9IG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXt0aGlzLnByb3BzLmNzc0lkfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gcG9wdXA9e3RoaXMucHJvcHMucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBhdXRvQ29tcGxldGU9XCJvZmZcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9Lz5cbiAgICAgICAge3Bvc2l0aW9uQnV0dG9ufVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWNsZWFyXCJ9IG9uTW91c2VVcD17dGhpcy5yZW1vdmVDb250ZW50fSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5SRU1PVkVfQUREUkVTU30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRlbnQoZXZlbnQpIHtcbiAgICBqUXVlcnkoXCIjXCIgKyB0aGlzLnByb3BzLmNzc0lkKS52YWwoJycpO1xuICAgIHRoaXMucHJvcHMuY2xlYXJJbnB1dChldmVudCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhhbmRsZU5ld1Bvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgc2NvcGUuaGFuZGxlUG9zaXRpb24ocG9zKTtcbiAgICB9O1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlTmV3UG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGlucHV0IGNvb3JkaW5hdGVzIGFuZCBleGVjdXRlcyB0aGUgcmV2ZXJzZSBzZWFyY2guIE9uIHN1Y2Nlc3MsIHRoZSByZXN1bHQgbG9jYXRpb24gaXMgaW5zZXJ0ZWQgaW4gdGhlXG4gICAqIGdpdmVuIGlucHV0IGZpZWxkIGFuZCB0aGUgZ2l2ZW4gcHJvcGVydHkgb2YgdGhpcy5cbiAgICogQHBhcmFtIGNvb3JkaW5hdGVzXG4gICAqL1xuICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nRnJvbVwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcIm92ZXJWYWx1ZVwiKSB7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwiYXJlYUZyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXJBZGRyZXNzRmllbGQgfSBmcm9tIFwiLi9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJEZXRvdXJTbGlkZXIgfSBmcm9tIFwiLi9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoIXByb3BzLnJvdXRlcikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJvdXRpbmcgY29tcG9uZW50IG5lZWRzIGEgcm91dGVyLCBpdCB3b24ndCB3b3JrIGNvcnJlY3RseSBzaW5jZSBub25lIHdhcyBwYXNzZWQuLi5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvdXRlcjogcHJvcHMucm91dGVyLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBsZXQgb3ZlckZvcm0gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJGb3JtID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtb3Zlci1cIiArIGl0ZW19IG5hbWU9e1wib3ZlclBvaW50LVwiICsgaXRlbX0gbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfTGFiZWxfSW50ZXJpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17XCJyb3V0aW5nT3Zlci1cIiArIGl0ZW19IG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB2YWx1ZT17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckFkZHJlc3Nlc1tpdGVtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBrZXk9e2l0ZW19IGluZGV4PXtpdGVtfSBjbGVhcklucHV0PXsoKSA9PiB7dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zW2l0ZW1dLmRlbGV0ZUZ1bmN0aW9uKCk7fX0vPlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgZnJvbUNsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBsZXQgdG9DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IGFyZWFDbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBhcmVhQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgICB0b0Nsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5wcm9wcy5vdmVyU2V0dGluZ3Muc3dhcFBvaW50cygpO1xuICAgICAgY29uc3QgdG1wRnJvbSA9IGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoKTtcbiAgICAgIGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwoKSk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ1RvXCIpLnZhbCh0bXBGcm9tKTtcbiAgICB9O1xuICAgIGxldCBzd2FwQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBzd2FwQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXN3aXRjaFwiIG9uTW91c2VVcD17c3dhcEZ1bmN0aW9ufSAvPjtcbiAgICB9XG4gICAgbGV0IG92ZXJCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItb3ZlclwiIG9uTW91c2VVcD17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckZ1bmN0aW9ufSAvPjtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gdGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cy5sZW5ndGggKyAxO1xuXG4gICAgaW5wdXQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWZyb21cIiArIGZyb21DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTX0ga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ0Zyb21cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmZyb21GdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICB7b3ZlckZvcm19XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LXRvXCIgKyB0b0Nsc0FkZGl0aW9ufSBuYW1lPVwicm91dGluZ1RvXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfVE99IGtleT17aWR4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJyb3V0aW5nVG9cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLnRvRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMudG9BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWFyZWFcIiArIGFyZWFDbHNBZGRpdGlvbn0gbmFtZT1cImFyZWFGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfQ0VOVEVSfSBrZXk9e2lkeCArIDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwiYXJlYUlucHV0XCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5hcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgbGV0IGRldGFpbHMgPSBcIlwiO1xuICAgIGxldCBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzICYmIHRoaXMucHJvcHMubGF5ZXJzKSB7XG4gICAgICBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxSb3V0ZXJMYXllclNlbGVjdGlvbiBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhY3RpdmVMYXllclZhbHVlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICA8Um91dGVyRGV0b3VyU2xpZGVyIG1pbj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1pbn0gbWF4PXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWF4fSB2YWx1ZT17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnZhbHVlfSByb3V0ZXI9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5yb3V0ZXJ9Lz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtvdmVyQnV0dG9ufVxuICAgICAgICB7c3dhcEJ1dHRvbn1cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBsZXQgc3RhcnRCdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVTdGFydEJ1dHRvbikge1xuICAgICAgc3RhcnRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGUtc2VhcmNoLXN0YXJ0XCJ9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZX0+e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSVF9ST1VURX08L2J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7c3RhcnRCdXR0b259XG4gICAgICAgIHsvKntkZXRhaWxCdXR0b259Ki99XG4gICAgICAgIHtkZXRhaWxzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0hvcml6b250YWxQYW5lbH0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWhvcml6b250YWwtcGFuZWwuanN4XCI7XG5pbXBvcnQge1JvdXRlckFkZHJlc3NJbnB1dH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWlucHV0LmpzeFwiXG5pbXBvcnQge1JvdXRlclByb2ZpbGVTZWxlY3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCJcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3hcIlxuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckNvbnRyb2xzIGV4dGVuZHMgSG9yaXpvbnRhbFBhbmVsIHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUucm91dGVyID0gdGhpcy5wcm9wcy5yb3V0ZXI7XG4gICAgdGhpcy5zdGF0ZS5zaG93Rm9ybSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFJvdXRlTW9kZSA9IHRoaXMuc2V0Um91dGVNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRBcmVhTW9kZSA9IHRoaXMuc2V0QXJlYU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Rpdikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXBhbmVsLWJ1dHRvbi10b3BcIikuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgfVxuXG4gIHNldFJvdXRlTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgfVxuXG4gIHNldEFyZWFNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcImFyZWFcIik7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjbGFzc05hbWUgPSBcImM0Zy1yb3V0ZXItY29udGVudFwiICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuIFwiIDogXCIgYzRnLWNsb3NlIFwiKSArIHRoaXMucHJvcHMubW9kZTtcbiAgICAvLyBwcm9wYWdhdGUgb3BlbiBzdGF0ZSBkb3duIHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICBsZXQgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcbiAgICBsZXQgbW9kZVN3aXRjaGVyID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyZWFTZWFyY2ggJiYgIXRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoT25seSkge1xuICAgICAgbW9kZVN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW1vZGUtc3dpdGNoXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1yb3V0ZVwiIGNsYXNzTmFtZT17KHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnNldFJvdXRlTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRklORF9ST1VURX0+Um91dGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImM0Zy1yb3V0ZXItYnV0dG9uLWFyZWFcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnNldEFyZWFNb2RlfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkFSRUFfTkFNRX0+QXJlYTwvYnV0dG9uPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dGb3JtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7bW9kZVN3aXRjaGVyfVxuICAgICAgICAgIDxSb3V0ZXJBZGRyZXNzSW5wdXQgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1pbnB1dC1jb250ZW50XCIgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gd2l0aFBvc2l0aW9uPXt0cnVlfSBzd2l0Y2hUYXJnZXRzPXt0aGlzLnByb3BzLnN3aXRjaFRhcmdldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY3VycmVudFByb2ZpbGU9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IGVuYWJsZU92ZXJQb2ludHM9e3RoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IG1vZGU9e3RoaXMucHJvcHMubW9kZX0gb3Blbj17b3Blbn0gbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc30gcmVzZXRGdW5jdGlvbnM9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWRkcmVzcz17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gdG9BZGRyZXNzPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gYXJlYUFkZHJlc3M9e3RoaXMucHJvcHMuYXJlYUFkZHJlc3N9IHNsaWRlck9wdGlvbnM9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzPXt0aGlzLnByb3BzLnByb2ZpbGVzfSBvdmVyU2V0dGluZ3M9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRlclwifSBoZWFkZXI9e2hlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItZXh0ZW5kZWQtb3B0aW9uc1wifSBkZXRhaWxCdG5DYj17dGhpcy50b2dnbGVEZXRhaWxzfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaGlkZS1mb3JtLWJ1dHRvblwifSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLnNldFN0YXRlKHtzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm19KX19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuY3NzKFwidG9wXCIsIDAgKyBcInB4XCIpO1xuICB9XG5cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBvdmVycmlkZSBwYXJlbnQgbWV0aG9kXG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuXCIgOiBcIiBjNGctY2xvc2VcIik7XG4gICAgbGV0IHRvcFZhbHVlID0gMDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIHRvcFZhbHVlID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgdG9wVmFsdWUgKyBcInB4XCIpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4odHJ1ZSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKGZhbHNlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICBjbGlja0NvbnRyb2woZXZ0KSB7XG4gICAgbGV0IGhpZGRlbiA9IHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5vcGVuKXtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHN9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50c1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJEZXRvdXJTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShcIi5cIiArIHJvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFKTtcbiAgICBlbGVtZW50Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb250cm9sID0galF1ZXJ5KHRoaXMpO1xuICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICBsZXQgcG9zT2Zmc2V0ID0gTWF0aC5yb3VuZCg1MCAqIHBvcyAvIDEwMCkgLSAoMjUpO1xuICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICBvdXRwdXRcbiAgICAgICAgLmNzcygnbGVmdCcsICdjYWxjKCcgKyBwb3MgKyAnJSAtICcgKyBwb3NPZmZzZXQgKyAncHgpJylcbiAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBjb250cm9sLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiBlbGVtZW50LnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiBlbGVtZW50LnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5VbXdlZzwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEV9XG4gICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IHN0ZXA9ezAuNX0vPlxuICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5PVVRQVVRfREVUT1VSfT57dGhpcy5wcm9wcy52YWx1ZSArIFwiIGttXCJ9PC9vdXRwdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHJvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLnVwZGF0ZWQpIHtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb250cm9sID0galF1ZXJ5KHRoaXMpO1xuICAgICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgICBsZXQgcG9zT2Zmc2V0ID0gTWF0aC5yb3VuZCg1MCAqIHBvcyAvIDEwMCkgLSAoMjUpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgICAgb3V0cHV0XG4gICAgICAgICAgLmNzcygnbGVmdCcsICdjYWxjKCcgKyBwb3MgKyAnJSAtICcgKyBwb3NPZmZzZXQgKyAncHgpJylcbiAgICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBjb250cm9sLnZhbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiBqUXVlcnkoZWxlbWVudCkudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiBqUXVlcnkoZWxlbWVudCkudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLnRyaWdnZXIoJ2lucHV0Jyk7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJMYXllclNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldExheWVyID0gdGhpcy5zZXRMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TGF5ZXJWYWx1ZSA9IHRoaXMuc2V0TGF5ZXJWYWx1ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0TGF5ZXIoZXZlbnQpIHtcbiAgICBsZXQgbGF5ZXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXIocGFyc2VJbnQobGF5ZXIsIDEwKSk7XG4gIH1cblxuICBzZXRMYXllclZhbHVlKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZGVmYXVsdExheWVyID0gMDtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBkZWZhdWx0TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclJvdXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYTtcbiAgICB9XG4gICAgY29uc3QgYXJyTGF5ZXJzID0gc2NvcGUucHJvcHMucm91dGVyLm9iakxheWVycztcbiAgICBsZXQgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5sZW5ndGggPiAxKSkge1xuICAgICAgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItbGF5ZXItdmFsdWUtc2VsZWN0aW9uXCJ9PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyVmFsdWUgPT09IG5hbWUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5zZXRMYXllclZhbHVlfSBrZXk9e3RoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl1bbmFtZV0ubWFwTGFiZWx9IHZhbHVlPXtuYW1lfSB0aXRsZT17bmFtZX0+e25hbWV9PC9idXR0b24+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLmxlbmd0aCA+IDEpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWxheWVyLXNlbGVjdGlvblwiIG9uQ2hhbmdlPXt0aGlzLnNldExheWVyfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRMYXllcn0+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2lkXS5sYXllckRhdGE7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e2lkfT57bGF5ZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtsYXllclZhbHVlU2VsZWN0aW9ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+e2xheWVyVmFsdWVTZWxlY3Rpb259PC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICA8L2Rpdj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyIGM0Zy1wb3B1cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pfS8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9maWxlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFByb2ZpbGUoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbltpdGVtLmlkXSArIChwYXJzZUludChpdGVtLmlkLCAxMCkgPT09IHRoaXMucHJvcHMuY3VycmVudFByb2ZpbGUgPyBcIiBjNGctYWN0aXZlXCIgOiBcIiBjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHNob3dQcm9maWxlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==