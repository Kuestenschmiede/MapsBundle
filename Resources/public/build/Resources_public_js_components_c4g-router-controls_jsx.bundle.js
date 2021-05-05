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

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        positionButton = _react["default"].createElement("button", {
=======
        positionButton = /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          className: "c4g-router-position",
          onMouseUp: this.getPosition,
          title: this.languageConstants.ROUTE_POSITION
        });
      }

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
        className: this.props.className
      }, _react["default"].createElement("label", {
        htmlFor: this.props.name
      }, this.props.label), _react["default"].createElement(_c4gAutocompleteInput.AutocompleteInput, {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: this.props.name
      }, this.props.label), /*#__PURE__*/_react["default"].createElement(_c4gAutocompleteInput.AutocompleteInput, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
      }), positionButton, _react["default"].createElement("button", {
=======
      }), positionButton, /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
          return _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
=======
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        swapButton = _react["default"].createElement("button", {
=======
        swapButton = /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          className: "c4g-router-switch",
          onMouseUp: swapFunction
        });
      }

      var overButton = "";

      if (this.props.enableOverPoints && this.props.mode === "route") {
<<<<<<< refs/remotes/origin/main
        overButton = _react["default"].createElement("button", {
=======
        overButton = /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          className: "c4g-router-over",
          onMouseUp: this.props.overSettings.overFunction
        });
      }

      var idx = this.props.overSettings.overPoints.length + 1;
<<<<<<< refs/remotes/origin/main
      input = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
=======
      input = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
      }), overForm, _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
=======
      }), overForm, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
=======
      }), /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        featureSearchControls = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_c4gRouterLayerSelection.RouterLayerSelection, {
          layers: this.props.layers,
          router: this.props.router,
          activeLayerValue: this.props.router.state.mode === "route" ? this.props.router.state.layerValueRoute : this.props.router.state.layerValueArea
        }), _react["default"].createElement(_c4gRouterDetourSlider.RouterDetourSlider, {
=======
        featureSearchControls = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_c4gRouterLayerSelection.RouterLayerSelection, {
          layers: this.props.layers,
          router: this.props.router,
          activeLayerValue: this.props.router.state.mode === "route" ? this.props.router.state.layerValueRoute : this.props.router.state.layerValueArea
        }), /*#__PURE__*/_react["default"].createElement(_c4gRouterDetourSlider.RouterDetourSlider, {
>>>>>>> Several version preps
          min: this.props.sliderOptions.min,
          max: this.props.sliderOptions.max,
          value: this.props.sliderOptions.value,
          router: this.props.sliderOptions.router
        }));
      }

      if (this.props.mode === "route") {
<<<<<<< refs/remotes/origin/main
        details = _react["default"].createElement("div", {
          className: "buttonbar"
        }, overButton, swapButton, featureSearchControls);
      } else if (this.props.mode === "area") {
        details = _react["default"].createElement("div", {
=======
        details = /*#__PURE__*/_react["default"].createElement("div", {
          className: "buttonbar"
        }, overButton, swapButton, featureSearchControls);
      } else if (this.props.mode === "area") {
        details = /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
          className: "buttonbar"
        }, featureSearchControls);
      }

      var startButton = null;

      if (this.props.router.props.mapController.data.routeStartButton) {
<<<<<<< refs/remotes/origin/main
        startButton = _react["default"].createElement("button", {
=======
        startButton = /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          className: "c4g-route-search-start",
          onMouseUp: this.props.router.recalculateRoute
        }, this.langConstants.START_ROUTE);
      }

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        modeSwitcher = _react["default"].createElement("div", {
          className: "c4g-router-mode-switch"
        }, _react["default"].createElement("button", {
=======
        modeSwitcher = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-mode-switch"
        }, /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          id: "c4g-router-button-route",
          className: this.props.mode === "route" ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setRouteMode,
          title: this.langConstants.ROUTER_FIND_ROUTE
<<<<<<< refs/remotes/origin/main
        }, "Route"), _react["default"].createElement("button", {
=======
        }, "Route"), /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          id: "c4g-router-button-area",
          className: this.props.mode === "area" ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setAreaMode,
          title: this.langConstants.AREA_NAME
        }, "Area"));
      }

      if (this.state.showForm) {
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("div", {
          className: className
        }, modeSwitcher, _react["default"].createElement(_c4gRouterAddressInput.RouterAddressInput, {
=======
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, modeSwitcher, /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressInput.RouterAddressInput, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("div", {
          className: className
        }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
=======
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
>>>>>>> Several version preps
          wrapperClass: "c4g-router-header",
          header: headline,
          headerClass: "c4g-router-headline",
          detailBtnClass: "c4g-router-extended-options",
          detailBtnCb: this.toggleDetails,
          closeBtnClass: "c4g-router-close",
          closeBtnCb: this.close
<<<<<<< refs/remotes/origin/main
        }), _react["default"].createElement("button", {
=======
        }), /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Umweg"), _react["default"].createElement("input", {
=======
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "Umweg"), /*#__PURE__*/_react["default"].createElement("input", {
>>>>>>> Several version preps
        type: "range",
        className: _routingConstants.routingConstants.ROUTE_TOGGLE,
        min: this.props.min,
        max: this.props.max,
        defaultValue: this.props.value,
        step: 0.5
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement("output", {
=======
      }), /*#__PURE__*/_react["default"].createElement("output", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        layerValueSelection = _react["default"].createElement("div", {
          className: "c4g-router-layer-value-selection"
        }, Object.keys(this.props.layers[defaultLayer]).map(function (name) {
          return _react["default"].createElement("button", {
=======
        layerValueSelection = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-layer-value-selection"
        }, Object.keys(this.props.layers[defaultLayer]).map(function (name) {
          return /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
            className: _this2.props.activeLayerValue === name ? "c4g-active" : "c4g-inactive",
            onMouseUp: _this2.setLayerValue,
            key: _this2.props.layers[defaultLayer][name].mapLabel,
            value: name,
            title: name
          }, name);
        }));
      }

      if (this.props.layers && Object.keys(this.props.layers).length > 1) {
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("select", {
=======
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("select", {
>>>>>>> Several version preps
          className: "c4g-router-layer-selection",
          onChange: this.setLayer,
          defaultValue: defaultLayer
        }, Object.keys(this.props.layers).map(function (id) {
          var layer = arrLayers[id].layerData;
<<<<<<< refs/remotes/origin/main
          return _react["default"].createElement("option", {
=======
          return /*#__PURE__*/_react["default"].createElement("option", {
>>>>>>> Several version preps
            key: id,
            value: id
          }, layer.name);
        })), layerValueSelection);
      } else {
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement(_react["default"].Fragment, null, layerValueSelection);
=======
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, layerValueSelection);
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, _react["default"].createElement("button", {
=======
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
          key: this.props.currentProfile,
          title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
        }));
      } else {
        if (this.state.showPopup) {
<<<<<<< refs/remotes/origin/main
          return _react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, _react["default"].createElement("button", {
=======
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
<<<<<<< refs/remotes/origin/main
            return _react["default"].createElement("button", {
=======
            return /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === _this2.props.currentProfile ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
<<<<<<< refs/remotes/origin/main
          return _react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, _react["default"].createElement("button", {
=======
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtaW5wdXQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiSG9yaXpvbnRhbFBhbmVsIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xpY2tDb250cm9sIiwiYmluZCIsImpRdWVyeSIsIm9uIiwibWFwQ29udHJvbGxlciIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwIiwiYWRkQ29udHJvbCIsInN0YXRlIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNldFN0YXRlIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNzc0NvbnN0YW50cyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiT0xfVU5TRUxFQ1RBQkxFIiwic3R5bGUiLCJ0b3AiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiYm90dG9tIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJjb250ZW50IiwicHVzaCIsIkNvbXBvbmVudCIsIlJvdXRlckFkZHJlc3NGaWVsZCIsImxhbmd1YWdlQ29uc3RhbnRzIiwicm91dGVyIiwiZGF0YSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJuYW1lIiwiaW5pdGlhbERlc3RpbmF0aW9uIiwic2V0VG9DZW50ZXIiLCJjZW50ZXIiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiY29vcmRpbmF0ZXMiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImxhYmVsIiwiY3NzSWQiLCJvYmpGdW5jdGlvbnMiLCJvYmpTZXR0aW5ncyIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwidmFsdWUiLCJpbmRleCIsIlJFTU9WRV9BRERSRVNTIiwiZXZlbnQiLCJ2YWwiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJwb3MiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsInNldEFyZWFQb2ludCIsInJlY2FsY3VsYXRlUm91dGUiLCJSb3V0ZXJBZGRyZXNzSW5wdXQiLCJsYW5nIiwibGFuZ0NvbnN0YW50cyIsInJvdXRpbmdDb25zdGFudHNHZXJtYW4iLCJyb3V0aW5nQ29uc3RhbnRzRW5nbGlzaCIsImlucHV0Iiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsIk9iamVjdCIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImRlbGV0ZUZ1bmN0aW9uIiwiZnJvbUNsc0FkZGl0aW9uIiwidG9DbHNBZGRpdGlvbiIsImFyZWFDbHNBZGRpdGlvbiIsInN3YXBGdW5jdGlvbiIsInN3YXBQb2ludHMiLCJ0bXBGcm9tIiwic3dhcEJ1dHRvbiIsInN3aXRjaFRhcmdldHMiLCJvdmVyQnV0dG9uIiwib3ZlckZ1bmN0aW9uIiwiaWR4IiwibGVuZ3RoIiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJzbGlkZXJPcHRpb25zIiwibWluIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJSb3V0ZXJDb250cm9scyIsInNob3dGb3JtIiwic2V0Um91dGVNb2RlIiwic2V0QXJlYU1vZGUiLCJyb3V0ZXJfZGl2IiwicXVlcnlTZWxlY3RvciIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1vZGVTd2l0Y2hlciIsImFyZWFTZWFyY2giLCJhcmVhU2VhcmNoT25seSIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiQVJFQV9OQU1FIiwiY3VycmVudFByb2ZpbGUiLCJwcm9maWxlcyIsImhlYWRsaW5lIiwidG9nZ2xlRGV0YWlscyIsInRvcFZhbHVlIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsInNldE9wZW4iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZ0IiwiaGlkZGVuIiwiaW5jbHVkZXMiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsIk1hdGgiLCJyb3VuZCIsIm91dHB1dCIsIm5leHQiLCJjc3MiLCJ0ZXh0IiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwidXBkYXRlTGlua0ZyYWdtZW50cyIsImRldG91clJvdXRlIiwiZGV0b3VyQXJlYSIsInBlcmZvcm1BcmVhIiwiYXJlYVZhbHVlIiwidHJpZ2dlciIsIk9VVFBVVF9ERVRPVVIiLCJSb3V0ZXJMYXllclNlbGVjdGlvbiIsInNldExheWVyIiwic2V0TGF5ZXJWYWx1ZSIsImxheWVyIiwicGFyc2VJbnQiLCJkZWZhdWx0TGF5ZXIiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwiYXJyTGF5ZXJzIiwib2JqTGF5ZXJzIiwibGF5ZXJWYWx1ZVNlbGVjdGlvbiIsImFjdGl2ZUxheWVyVmFsdWUiLCJtYXBMYWJlbCIsImlkIiwibGF5ZXJEYXRhIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInNldFByb2ZpbGUiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJwcm9maWxlTGFuZyIsIkNBUiIsIlRSVUNLIiwiQklLRSIsIlJPQURCSUtFIiwiTU9VTlRBSU5CSUtFIiwiRUxFQ1RSSUNCSUtFIiwiV0FMSyIsIldBTkRFUiIsIldIRUVMIiwiU0NPT1QiLCJNT1RPUkJJS0UiLCJzaG93UG9wdXAiLCJyb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsZTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixXQUFPLENBQUNJLFNBQVIsR0FBb0IsQ0FBQ04sS0FBSyxDQUFDTSxTQUFOLElBQW1CLHNCQUFwQixJQUE4QyxVQUE5QyxJQUE0RE4sS0FBSyxDQUFDTyxTQUFOLElBQW1CLEtBQS9FLElBQXdGLGNBQXhGLEdBQXlHLGlCQUE3SDtBQUNBTCxXQUFPLENBQUNNLFdBQVIsQ0FBb0JILE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ0ksS0FBUCxHQUFlVCxLQUFLLENBQUNTLEtBQXJCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixnREFBcEI7QUFDQUMsVUFBTSxDQUFDUCxNQUFELENBQU4sQ0FBZVEsRUFBZixDQUFrQixPQUFsQixFQUEyQixNQUFLSCxZQUFoQztBQUNBLFFBQUlJLGFBQWEsR0FBR2QsS0FBSyxDQUFDYyxhQUExQjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO0FBQUNkLGFBQU8sRUFBRUEsT0FBVjtBQUFtQmUsWUFBTSxFQUFFakIsS0FBSyxDQUFDaUI7QUFBakMsS0FBWixDQUFkO0FBQ0FILGlCQUFhLENBQUNJLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCSixPQUE3QjtBQUNBLFVBQUtLLEtBQUwsR0FB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QUFzRCxhQUF0RCxHQUFzRSxlQUFsSSxDQURuQjtBQUVRLGlCQUFHLEVBQUV6RCxJQUFJLENBQUMyRyxFQUZsQjtBQUVzQixtQkFBSyxFQUFFLE1BQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFJLENBQUNELGtCQUFMLENBQXdCL0csSUFBSSxDQUFDMkcsRUFBN0IsQ0FBakI7QUFGN0IsY0FBUDtBQUdELFdBSkEsQ0FGSCxDQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsaUJBQVE7QUFBSyxxQkFBUyxFQUFDO0FBQWYsYUFDTjtBQUFRLHFCQUFTLEVBQUU7QUFBQSxxQkFBTSxNQUFJLENBQUN6TCxRQUFMLENBQWM7QUFBQzBNLHlCQUFTLEVBQUU7QUFBWixlQUFkLENBQU47QUFBQSxhQUFuQjtBQUEyRCxxQkFBUyxFQUFFLHdCQUF3QixLQUFLYixrQkFBTCxDQUF3QixLQUFLeE4sS0FBTCxDQUFXa0ssY0FBbkMsQ0FBeEIsR0FBNkUsYUFBbko7QUFDUSxlQUFHLEVBQUUsS0FBS2xLLEtBQUwsQ0FBV2tLLGNBRHhCO0FBQ3dDLGlCQUFLLEVBQUUsS0FBS3VELFdBQUwsQ0FBaUIsS0FBS0Qsa0JBQUwsQ0FBd0IsS0FBS3hOLEtBQUwsQ0FBV2tLLGNBQW5DLENBQWpCO0FBRC9DLFlBRE0sQ0FBUjtBQUlEO0FBRUY7QUFDRjs7O1dBRUQsZ0NBQXVCO0FBQ3JCLFdBQUt2SSxRQUFMLENBQWM7QUFBQzBNLGlCQUFTLEVBQUU7QUFBWixPQUFkO0FBQ0Q7OztFQWxGaUQxTCxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXJvdXRlci1jb250cm9sc19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctaG9yaXpvbnRhbC1wYW5lbFwiKSArIFwiLWJ1dHRvbi1cIiArIChwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIikgKyBcIiBvbC1jb250cm9sIFwiICsgXCJvbC11bnNlbGVjdGFibGVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIGpRdWVyeShidXR0b24pLm9uKCdjbGljaycsIHRoaXMuY2xpY2tDb250cm9sKTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hpbGRzICgpIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjb3BlLnN0YXRlLmNoaWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMTAwcHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjEwMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIGxldCB0b3BWYWx1ZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdIC0gMTAwO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5zdHlsZS50b3AgPSB0b3BWYWx1ZSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpLnJlbW92ZUNsYXNzKFwicGFuZWwtc2xpZGVkLWluXCIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpWzFdICsgXCJweFwiO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1vdXRcIilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gSFRNTCBjb250ZW50IHRvIHRoZSBwYW5lbC5cbiAgICogQHBhcmFtIGNvbnRlbnQgICBNdXN0IGJlIGEgSFRNTCBlbGVtZW50LlxuICAgKi9cbiAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5jaGlsZHMucHVzaChjb250ZW50KTtcbiAgfVxuXG5cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tIFwiLi9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ29udGVudCA9IHRoaXMucmVtb3ZlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsUG9zaXRpb24gJiYgKHByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIiB8fCBwcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpKSB7XG4gICAgICB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJvdXRlci5tYXBEYXRhLmluaXRpYWxEZXN0aW5hdGlvbiAmJiBwcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICBsZXQgc2V0VG9DZW50ZXIgPSAoZGF0YSk9PiB7XG4gICAgICAgIGxldCBjZW50ZXIgPSBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldENlbnRlcigpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sb25naXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVswXTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMV07XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goc2V0VG9DZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zaXRpb25CdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLndpdGhQb3NpdGlvbikge1xuICAgICAgcG9zaXRpb25CdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcG9zaXRpb25cIiBvbk1vdXNlVXA9e3RoaXMuZ2V0UG9zaXRpb259IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPVVRFX1BPU0lUSU9OfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubmFtZX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3N9IG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXt0aGlzLnByb3BzLmNzc0lkfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gcG9wdXA9e3RoaXMucHJvcHMucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBhdXRvQ29tcGxldGU9XCJvZmZcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9Lz5cbiAgICAgICAge3Bvc2l0aW9uQnV0dG9ufVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWNsZWFyXCJ9IG9uTW91c2VVcD17dGhpcy5yZW1vdmVDb250ZW50fSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5SRU1PVkVfQUREUkVTU30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRlbnQoZXZlbnQpIHtcbiAgICBqUXVlcnkoXCIjXCIgKyB0aGlzLnByb3BzLmNzc0lkKS52YWwoJycpO1xuICAgIHRoaXMucHJvcHMuY2xlYXJJbnB1dChldmVudCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGhhbmRsZU5ld1Bvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgc2NvcGUuaGFuZGxlUG9zaXRpb24ocG9zKTtcbiAgICB9O1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlTmV3UG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGlucHV0IGNvb3JkaW5hdGVzIGFuZCBleGVjdXRlcyB0aGUgcmV2ZXJzZSBzZWFyY2guIE9uIHN1Y2Nlc3MsIHRoZSByZXN1bHQgbG9jYXRpb24gaXMgaW5zZXJ0ZWQgaW4gdGhlXG4gICAqIGdpdmVuIGlucHV0IGZpZWxkIGFuZCB0aGUgZ2l2ZW4gcHJvcGVydHkgb2YgdGhpcy5cbiAgICogQHBhcmFtIGNvb3JkaW5hdGVzXG4gICAqL1xuICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nRnJvbVwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcIm92ZXJWYWx1ZVwiKSB7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwiYXJlYUZyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXJBZGRyZXNzRmllbGQgfSBmcm9tIFwiLi9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJEZXRvdXJTbGlkZXIgfSBmcm9tIFwiLi9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoIXByb3BzLnJvdXRlcikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJvdXRpbmcgY29tcG9uZW50IG5lZWRzIGEgcm91dGVyLCBpdCB3b24ndCB3b3JrIGNvcnJlY3RseSBzaW5jZSBub25lIHdhcyBwYXNzZWQuLi5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvdXRlcjogcHJvcHMucm91dGVyLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBsZXQgb3ZlckZvcm0gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJGb3JtID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtb3Zlci1cIiArIGl0ZW19IG5hbWU9e1wib3ZlclBvaW50LVwiICsgaXRlbX0gbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfTGFiZWxfSW50ZXJpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17XCJyb3V0aW5nT3Zlci1cIiArIGl0ZW19IG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB2YWx1ZT17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckFkZHJlc3Nlc1tpdGVtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBrZXk9e2l0ZW19IGluZGV4PXtpdGVtfSBjbGVhcklucHV0PXsoKSA9PiB7dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub2JqRnVuY3Rpb25zW2l0ZW1dLmRlbGV0ZUZ1bmN0aW9uKCk7fX0vPlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgZnJvbUNsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBsZXQgdG9DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IGFyZWFDbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBhcmVhQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJvbUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgICB0b0Nsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5wcm9wcy5vdmVyU2V0dGluZ3Muc3dhcFBvaW50cygpO1xuICAgICAgY29uc3QgdG1wRnJvbSA9IGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoKTtcbiAgICAgIGpRdWVyeShcIiNyb3V0aW5nRnJvbVwiKS52YWwoalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwoKSk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ1RvXCIpLnZhbCh0bXBGcm9tKTtcbiAgICB9O1xuICAgIGxldCBzd2FwQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBzd2FwQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXN3aXRjaFwiIG9uTW91c2VVcD17c3dhcEZ1bmN0aW9ufSAvPjtcbiAgICB9XG4gICAgbGV0IG92ZXJCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIG92ZXJCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItb3ZlclwiIG9uTW91c2VVcD17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlckZ1bmN0aW9ufSAvPjtcbiAgICB9XG5cbiAgICBsZXQgaWR4ID0gdGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cy5sZW5ndGggKyAxO1xuXG4gICAgaW5wdXQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWZyb21cIiArIGZyb21DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTX0ga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ0Zyb21cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmZyb21GdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICB7b3ZlckZvcm19XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LXRvXCIgKyB0b0Nsc0FkZGl0aW9ufSBuYW1lPVwicm91dGluZ1RvXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfVE99IGtleT17aWR4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJyb3V0aW5nVG9cIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLnRvRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMudG9BZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgICA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LWFyZWFcIiArIGFyZWFDbHNBZGRpdGlvbn0gbmFtZT1cImFyZWFGcm9tXCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfQ0VOVEVSfSBrZXk9e2lkeCArIDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwiYXJlYUlucHV0XCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5hcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgbGV0IGRldGFpbHMgPSBcIlwiO1xuICAgIGxldCBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzICYmIHRoaXMucHJvcHMubGF5ZXJzKSB7XG4gICAgICBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxSb3V0ZXJMYXllclNlbGVjdGlvbiBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhY3RpdmVMYXllclZhbHVlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICA8Um91dGVyRGV0b3VyU2xpZGVyIG1pbj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1pbn0gbWF4PXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWF4fSB2YWx1ZT17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnZhbHVlfSByb3V0ZXI9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5yb3V0ZXJ9Lz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtvdmVyQnV0dG9ufVxuICAgICAgICB7c3dhcEJ1dHRvbn1cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBsZXQgc3RhcnRCdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVTdGFydEJ1dHRvbikge1xuICAgICAgc3RhcnRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGUtc2VhcmNoLXN0YXJ0XCJ9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZX0+e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSVF9ST1VURX08L2J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7c3RhcnRCdXR0b259XG4gICAgICAgIHsvKntkZXRhaWxCdXR0b259Ki99XG4gICAgICAgIHtkZXRhaWxzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0hvcml6b250YWxQYW5lbH0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWhvcml6b250YWwtcGFuZWwuanN4XCI7XG5pbXBvcnQge1JvdXRlckFkZHJlc3NJbnB1dH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWlucHV0LmpzeFwiXG5pbXBvcnQge1JvdXRlclByb2ZpbGVTZWxlY3Rpb259IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCJcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy10aXRsZWJhci5qc3hcIlxuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckNvbnRyb2xzIGV4dGVuZHMgSG9yaXpvbnRhbFBhbmVsIHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUucm91dGVyID0gdGhpcy5wcm9wcy5yb3V0ZXI7XG4gICAgdGhpcy5zdGF0ZS5zaG93Rm9ybSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFJvdXRlTW9kZSA9IHRoaXMuc2V0Um91dGVNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRBcmVhTW9kZSA9IHRoaXMuc2V0QXJlYU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Rpdikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXBhbmVsLWJ1dHRvbi10b3BcIikuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgfVxuXG4gIHNldFJvdXRlTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJyb3V0ZVwiKTtcbiAgfVxuXG4gIHNldEFyZWFNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcImFyZWFcIik7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjbGFzc05hbWUgPSBcImM0Zy1yb3V0ZXItY29udGVudFwiICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuIFwiIDogXCIgYzRnLWNsb3NlIFwiKSArIHRoaXMucHJvcHMubW9kZTtcbiAgICAvLyBwcm9wYWdhdGUgb3BlbiBzdGF0ZSBkb3duIHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICBsZXQgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcbiAgICBsZXQgbW9kZVN3aXRjaGVyID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyZWFTZWFyY2ggJiYgIXRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoT25seSkge1xuICAgICAgbW9kZVN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW1vZGUtc3dpdGNoXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1yb3V0ZVwiIGNsYXNzTmFtZT17KHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnNldFJvdXRlTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfRklORF9ST1VURX0+Um91dGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImM0Zy1yb3V0ZXItYnV0dG9uLWFyZWFcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnNldEFyZWFNb2RlfSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkFSRUFfTkFNRX0+QXJlYTwvYnV0dG9uPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dGb3JtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7bW9kZVN3aXRjaGVyfVxuICAgICAgICAgIDxSb3V0ZXJBZGRyZXNzSW5wdXQgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1pbnB1dC1jb250ZW50XCIgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gd2l0aFBvc2l0aW9uPXt0cnVlfSBzd2l0Y2hUYXJnZXRzPXt0aGlzLnByb3BzLnN3aXRjaFRhcmdldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY3VycmVudFByb2ZpbGU9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IGVuYWJsZU92ZXJQb2ludHM9e3RoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IG1vZGU9e3RoaXMucHJvcHMubW9kZX0gb3Blbj17b3Blbn0gbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc30gcmVzZXRGdW5jdGlvbnM9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWRkcmVzcz17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gdG9BZGRyZXNzPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gYXJlYUFkZHJlc3M9e3RoaXMucHJvcHMuYXJlYUFkZHJlc3N9IHNsaWRlck9wdGlvbnM9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzPXt0aGlzLnByb3BzLnByb2ZpbGVzfSBvdmVyU2V0dGluZ3M9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRlclwifSBoZWFkZXI9e2hlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctcm91dGVyLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItZXh0ZW5kZWQtb3B0aW9uc1wifSBkZXRhaWxCdG5DYj17dGhpcy50b2dnbGVEZXRhaWxzfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1yb3V0ZXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0vPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaGlkZS1mb3JtLWJ1dHRvblwifSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLnNldFN0YXRlKHtzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm19KX19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICB9XG5cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuY3NzKFwidG9wXCIsIDAgKyBcInB4XCIpO1xuICB9XG5cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBvdmVycmlkZSBwYXJlbnQgbWV0aG9kXG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lICsgKHRoaXMucHJvcHMub3BlbiA/IFwiIGM0Zy1vcGVuXCIgOiBcIiBjNGctY2xvc2VcIik7XG4gICAgbGV0IHRvcFZhbHVlID0gMDtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIHRvcFZhbHVlID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgdG9wVmFsdWUgKyBcInB4XCIpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4odHJ1ZSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKGZhbHNlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICBjbGlja0NvbnRyb2woZXZ0KSB7XG4gICAgbGV0IGhpZGRlbiA9IHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5vcGVuKXtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHN9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50c1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJEZXRvdXJTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShcIi5cIiArIHJvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFKTtcbiAgICBlbGVtZW50Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb250cm9sID0galF1ZXJ5KHRoaXMpO1xuICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICBsZXQgcG9zT2Zmc2V0ID0gTWF0aC5yb3VuZCg1MCAqIHBvcyAvIDEwMCkgLSAoMjUpO1xuICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICBvdXRwdXRcbiAgICAgICAgLmNzcygnbGVmdCcsICdjYWxjKCcgKyBwb3MgKyAnJSAtICcgKyBwb3NPZmZzZXQgKyAncHgpJylcbiAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBjb250cm9sLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiBlbGVtZW50LnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiBlbGVtZW50LnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5VbXdlZzwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEV9XG4gICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IHN0ZXA9ezAuNX0vPlxuICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5PVVRQVVRfREVUT1VSfT57dGhpcy5wcm9wcy52YWx1ZSArIFwiIGttXCJ9PC9vdXRwdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHJvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLnVwZGF0ZWQpIHtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb250cm9sID0galF1ZXJ5KHRoaXMpO1xuICAgICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgICBsZXQgcG9zT2Zmc2V0ID0gTWF0aC5yb3VuZCg1MCAqIHBvcyAvIDEwMCkgLSAoMjUpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgICAgb3V0cHV0XG4gICAgICAgICAgLmNzcygnbGVmdCcsICdjYWxjKCcgKyBwb3MgKyAnJSAtICcgKyBwb3NPZmZzZXQgKyAncHgpJylcbiAgICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBjb250cm9sLnZhbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiBqUXVlcnkoZWxlbWVudCkudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiBqUXVlcnkoZWxlbWVudCkudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLnRyaWdnZXIoJ2lucHV0Jyk7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJMYXllclNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldExheWVyID0gdGhpcy5zZXRMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TGF5ZXJWYWx1ZSA9IHRoaXMuc2V0TGF5ZXJWYWx1ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0TGF5ZXIoZXZlbnQpIHtcbiAgICBsZXQgbGF5ZXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXIocGFyc2VJbnQobGF5ZXIsIDEwKSk7XG4gIH1cblxuICBzZXRMYXllclZhbHVlKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZGVmYXVsdExheWVyID0gMDtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBkZWZhdWx0TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclJvdXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYTtcbiAgICB9XG4gICAgY29uc3QgYXJyTGF5ZXJzID0gc2NvcGUucHJvcHMucm91dGVyLm9iakxheWVycztcbiAgICBsZXQgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5sZW5ndGggPiAxKSkge1xuICAgICAgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItbGF5ZXItdmFsdWUtc2VsZWN0aW9uXCJ9PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyVmFsdWUgPT09IG5hbWUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5zZXRMYXllclZhbHVlfSBrZXk9e3RoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl1bbmFtZV0ubWFwTGFiZWx9IHZhbHVlPXtuYW1lfSB0aXRsZT17bmFtZX0+e25hbWV9PC9idXR0b24+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLmxlbmd0aCA+IDEpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWxheWVyLXNlbGVjdGlvblwiIG9uQ2hhbmdlPXt0aGlzLnNldExheWVyfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRMYXllcn0+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2lkXS5sYXllckRhdGE7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e2lkfT57bGF5ZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtsYXllclZhbHVlU2VsZWN0aW9ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+e2xheWVyVmFsdWVTZWxlY3Rpb259PC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICA8L2Rpdj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyIGM0Zy1wb3B1cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pfS8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9maWxlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFByb2ZpbGUoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbltpdGVtLmlkXSArIChwYXJzZUludChpdGVtLmlkLCAxMCkgPT09IHRoaXMucHJvcHMuY3VycmVudFByb2ZpbGUgPyBcIiBjNGctYWN0aXZlXCIgOiBcIiBjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHNob3dQcm9maWxlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtaW5wdXQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3giXSwibmFtZXMiOlsiSG9yaXpvbnRhbFBhbmVsIiwicHJvcHMiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwiY2xpY2tDb250cm9sIiwiYmluZCIsImpRdWVyeSIsIm9uIiwibWFwQ29udHJvbGxlciIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwIiwiYWRkQ29udHJvbCIsInN0YXRlIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNldFN0YXRlIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNzc0NvbnN0YW50cyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiT0xfVU5TRUxFQ1RBQkxFIiwic3R5bGUiLCJ0b3AiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiYm90dG9tIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJjb250ZW50IiwicHVzaCIsIkNvbXBvbmVudCIsIlJvdXRlckFkZHJlc3NGaWVsZCIsImxhbmd1YWdlQ29uc3RhbnRzIiwicm91dGVyIiwiZGF0YSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJuYW1lIiwiaW5pdGlhbERlc3RpbmF0aW9uIiwic2V0VG9DZW50ZXIiLCJjZW50ZXIiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiY29vcmRpbmF0ZXMiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImxhYmVsIiwiY3NzSWQiLCJvYmpGdW5jdGlvbnMiLCJvYmpTZXR0aW5ncyIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwidmFsdWUiLCJpbmRleCIsIlJFTU9WRV9BRERSRVNTIiwiZXZlbnQiLCJ2YWwiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJwb3MiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsInNldEFyZWFQb2ludCIsInJlY2FsY3VsYXRlUm91dGUiLCJSb3V0ZXJBZGRyZXNzSW5wdXQiLCJsYW5nIiwibGFuZ0NvbnN0YW50cyIsInJvdXRpbmdDb25zdGFudHNHZXJtYW4iLCJyb3V0aW5nQ29uc3RhbnRzRW5nbGlzaCIsImlucHV0Iiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsIk9iamVjdCIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImRlbGV0ZUZ1bmN0aW9uIiwiZnJvbUNsc0FkZGl0aW9uIiwidG9DbHNBZGRpdGlvbiIsImFyZWFDbHNBZGRpdGlvbiIsInN3YXBGdW5jdGlvbiIsInN3YXBQb2ludHMiLCJ0bXBGcm9tIiwic3dhcEJ1dHRvbiIsInN3aXRjaFRhcmdldHMiLCJvdmVyQnV0dG9uIiwib3ZlckZ1bmN0aW9uIiwiaWR4IiwibGVuZ3RoIiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJzbGlkZXJPcHRpb25zIiwibWluIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJSb3V0ZXJDb250cm9scyIsInNob3dGb3JtIiwic2V0Um91dGVNb2RlIiwic2V0QXJlYU1vZGUiLCJyb3V0ZXJfZGl2IiwicXVlcnlTZWxlY3RvciIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1vZGVTd2l0Y2hlciIsImFyZWFTZWFyY2giLCJhcmVhU2VhcmNoT25seSIsIlJPVVRFUl9GSU5EX1JPVVRFIiwiQVJFQV9OQU1FIiwiY3VycmVudFByb2ZpbGUiLCJwcm9maWxlcyIsImhlYWRsaW5lIiwidG9nZ2xlRGV0YWlscyIsInRvcFZhbHVlIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9mZnNldEhlaWdodCIsInNldE9wZW4iLCJyb3V0ZXJDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZ0IiwiaGlkZGVuIiwiaW5jbHVkZXMiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsIk1hdGgiLCJyb3VuZCIsIm91dHB1dCIsIm5leHQiLCJjc3MiLCJ0ZXh0IiwidXNlUGVybWFsaW5rIiwicGVybWFsaW5rIiwidXBkYXRlTGlua0ZyYWdtZW50cyIsImRldG91clJvdXRlIiwiZGV0b3VyQXJlYSIsInBlcmZvcm1BcmVhIiwiYXJlYVZhbHVlIiwidHJpZ2dlciIsIk9VVFBVVF9ERVRPVVIiLCJSb3V0ZXJMYXllclNlbGVjdGlvbiIsInNldExheWVyIiwic2V0TGF5ZXJWYWx1ZSIsImxheWVyIiwicGFyc2VJbnQiLCJkZWZhdWx0TGF5ZXIiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwiYXJyTGF5ZXJzIiwib2JqTGF5ZXJzIiwibGF5ZXJWYWx1ZVNlbGVjdGlvbiIsImFjdGl2ZUxheWVyVmFsdWUiLCJtYXBMYWJlbCIsImlkIiwibGF5ZXJEYXRhIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsInNldFByb2ZpbGUiLCJwcm9maWxlVHJhbnNsYXRpb24iLCJwcm9maWxlTGFuZyIsIkNBUiIsIlRSVUNLIiwiQklLRSIsIlJPQURCSUtFIiwiTU9VTlRBSU5CSUtFIiwiRUxFQ1RSSUNCSUtFIiwiV0FMSyIsIldBTkRFUiIsIldIRUVMIiwiU0NPT1QiLCJNT1RPUkJJS0UiLCJzaG93UG9wdXAiLCJyb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsZTs7Ozs7QUFFWCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixXQUFPLENBQUNJLFNBQVIsR0FBb0IsQ0FBQ04sS0FBSyxDQUFDTSxTQUFOLElBQW1CLHNCQUFwQixJQUE4QyxVQUE5QyxJQUE0RE4sS0FBSyxDQUFDTyxTQUFOLElBQW1CLEtBQS9FLElBQXdGLGNBQXhGLEdBQXlHLGlCQUE3SDtBQUNBTCxXQUFPLENBQUNNLFdBQVIsQ0FBb0JILE1BQXBCO0FBQ0FBLFVBQU0sQ0FBQ0ksS0FBUCxHQUFlVCxLQUFLLENBQUNTLEtBQXJCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixnREFBcEI7QUFDQUMsVUFBTSxDQUFDUCxNQUFELENBQU4sQ0FBZVEsRUFBZixDQUFrQixPQUFsQixFQUEyQixNQUFLSCxZQUFoQztBQUNBLFFBQUlJLGFBQWEsR0FBR2QsS0FBSyxDQUFDYyxhQUExQjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO0FBQUNkLGFBQU8sRUFBRUEsT0FBVjtBQUFtQmUsWUFBTSxFQUFFakIsS0FBSyxDQUFDaUI7QUFBakMsS0FBWixDQUFkO0FBQ0FILGlCQUFhLENBQUNJLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCSixPQUE3QjtBQUNBLFVBQUtLLEtBQUwsR0FB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LENBQUNwTixLQUFMLENBQVdrSyxjQUFyQyxHQUFzRCxhQUF0RCxHQUFzRSxlQUFsSSxDQURuQjtBQUVRLGlCQUFHLEVBQUV6RCxJQUFJLENBQUMyRyxFQUZsQjtBQUVzQixtQkFBSyxFQUFFLE1BQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFJLENBQUNELGtCQUFMLENBQXdCL0csSUFBSSxDQUFDMkcsRUFBN0IsQ0FBakI7QUFGN0IsY0FBUDtBQUdELFdBSkEsQ0FGSCxDQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsOEJBQVE7QUFBSyxxQkFBUyxFQUFDO0FBQWYsMEJBQ047QUFBUSxxQkFBUyxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDekwsUUFBTCxDQUFjO0FBQUMwTSx5QkFBUyxFQUFFO0FBQVosZUFBZCxDQUFOO0FBQUEsYUFBbkI7QUFBMkQscUJBQVMsRUFBRSx3QkFBd0IsS0FBS2Isa0JBQUwsQ0FBd0IsS0FBS3hOLEtBQUwsQ0FBV2tLLGNBQW5DLENBQXhCLEdBQTZFLGFBQW5KO0FBQ1EsZUFBRyxFQUFFLEtBQUtsSyxLQUFMLENBQVdrSyxjQUR4QjtBQUN3QyxpQkFBSyxFQUFFLEtBQUt1RCxXQUFMLENBQWlCLEtBQUtELGtCQUFMLENBQXdCLEtBQUt4TixLQUFMLENBQVdrSyxjQUFuQyxDQUFqQjtBQUQvQyxZQURNLENBQVI7QUFJRDtBQUVGO0FBQ0Y7OztXQUVELGdDQUF1QjtBQUNyQixXQUFLdkksUUFBTCxDQUFjO0FBQUMwTSxpQkFBUyxFQUFFO0FBQVosT0FBZDtBQUNEOzs7RUFsRmlEMUwsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItY29udHJvbHNfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAocHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLWhvcml6b250YWwtcGFuZWxcIikgKyBcIi1idXR0b24tXCIgKyAocHJvcHMuZGlyZWN0aW9uIHx8IFwidG9wXCIpICsgXCIgb2wtY29udHJvbCBcIiArIFwib2wtdW5zZWxlY3RhYmxlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIHRoaXMuY2xpY2tDb250cm9sID0gdGhpcy5jbGlja0NvbnRyb2wuYmluZCh0aGlzKTtcbiAgICBqUXVlcnkoYnV0dG9uKS5vbignY2xpY2snLCB0aGlzLmNsaWNrQ29udHJvbCk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcyAoKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY29wZS5zdGF0ZS5jaGlsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgdG9wVmFsdWUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSAtIDEwMDtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuc3R5bGUudG9wID0gdG9wVmFsdWUgKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIEhUTUwgY29udGVudCB0byB0aGUgcGFuZWwuXG4gICAqIEBwYXJhbSBjb250ZW50ICAgTXVzdCBiZSBhIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuc3RhdGUuY2hpbGRzLnB1c2goY29udGVudCk7XG4gIH1cblxuXG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdXRvY29tcGxldGVJbnB1dH0gZnJvbSBcIi4vYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3hcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyQWRkcmVzc0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNvbnRlbnQgPSB0aGlzLnJlbW92ZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgICBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbFBvc2l0aW9uICYmIChwcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIgfHwgcHJvcHMubmFtZSA9PT0gXCJhcmVhRnJvbVwiKSkge1xuICAgICAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsRGVzdGluYXRpb24gJiYgcHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgbGV0IHNldFRvQ2VudGVyID0gKGRhdGEpPT4ge1xuICAgICAgICBsZXQgY2VudGVyID0gcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3JkcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMF07XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sYXRpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzFdO1xuICAgICAgICB0aGlzLmhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkID0gd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgfHwgW107XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKHNldFRvQ2VudGVyKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBvc2l0aW9uQnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy53aXRoUG9zaXRpb24pIHtcbiAgICAgIHBvc2l0aW9uQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXBvc2l0aW9uXCIgb25Nb3VzZVVwPXt0aGlzLmdldFBvc2l0aW9ufSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURV9QT1NJVElPTn0vPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17dGhpcy5wcm9wcy5jc3NJZH0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IHBvcHVwPXt0aGlzLnByb3BzLnBvcHVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gYXV0b0NvbXBsZXRlPVwib2ZmXCIgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IGluZGV4PXt0aGlzLnByb3BzLmluZGV4fS8+XG4gICAgICAgIHtwb3NpdGlvbkJ1dHRvbn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1jbGVhclwifSBvbk1vdXNlVXA9e3RoaXMucmVtb3ZlQ29udGVudH0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUkVNT1ZFX0FERFJFU1N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW1vdmVDb250ZW50KGV2ZW50KSB7XG4gICAgalF1ZXJ5KFwiI1wiICsgdGhpcy5wcm9wcy5jc3NJZCkudmFsKCcnKTtcbiAgICB0aGlzLnByb3BzLmNsZWFySW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoYW5kbGVOZXdQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHNjb3BlLmhhbmRsZVBvc2l0aW9uKHBvcyk7XG4gICAgfTtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZU5ld1Bvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBpbnB1dCBjb29yZGluYXRlcyBhbmQgZXhlY3V0ZXMgdGhlIHJldmVyc2Ugc2VhcmNoLiBPbiBzdWNjZXNzLCB0aGUgcmVzdWx0IGxvY2F0aW9uIGlzIGluc2VydGVkIGluIHRoZVxuICAgKiBnaXZlbiBpbnB1dCBmaWVsZCBhbmQgdGhlIGdpdmVuIHByb3BlcnR5IG9mIHRoaXMuXG4gICAqIEBwYXJhbSBjb29yZGluYXRlc1xuICAgKi9cbiAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVGcm9tKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJvdmVyVmFsdWVcIikge1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVUbyhjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcImFyZWFGcm9tXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldEFyZWFQb2ludChjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyQWRkcmVzc0ZpZWxkIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJMYXllclNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyRGV0b3VyU2xpZGVyIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1kZXRvdXItc2xpZGVyLmpzeFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWVuXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKCFwcm9wcy5yb3V0ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSByb3V0aW5nIGNvbXBvbmVudCBuZWVkcyBhIHJvdXRlciwgaXQgd29uJ3Qgd29yayBjb3JyZWN0bHkgc2luY2Ugbm9uZSB3YXMgcGFzc2VkLi4uXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb3V0ZXI6IHByb3BzLnJvdXRlcixcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzR2VybWFuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2tcbiAgICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gcm91dGluZ0NvbnN0YW50c0VuZ2xpc2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnB1dCA9IG51bGw7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IG92ZXJGb3JtID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyRm9ybSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWlucHV0LW92ZXItXCIgKyBpdGVtfSBuYW1lPXtcIm92ZXJQb2ludC1cIiArIGl0ZW19IGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0xhYmVsX0ludGVyaW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9e1wicm91dGluZ092ZXItXCIgKyBpdGVtfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gdmFsdWU9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0ga2V5PXtpdGVtfSBpbmRleD17aXRlbX0gY2xlYXJJbnB1dD17KCkgPT4ge3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc1tpdGVtXS5kZWxldGVGdW5jdGlvbigpO319Lz5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGZyb21DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IHRvQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCBhcmVhQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgYXJlYUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgICAgdG9DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUucHJvcHMub3ZlclNldHRpbmdzLnN3YXBQb2ludHMoKTtcbiAgICAgIGNvbnN0IHRtcEZyb20gPSBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKCk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwodG1wRnJvbSk7XG4gICAgfTtcbiAgICBsZXQgc3dhcEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuc3dpdGNoVGFyZ2V0cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgc3dhcEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1zd2l0Y2hcIiBvbk1vdXNlVXA9e3N3YXBGdW5jdGlvbn0gLz47XG4gICAgfVxuICAgIGxldCBvdmVyQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW92ZXJcIiBvbk1vdXNlVXA9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJGdW5jdGlvbn0gLz47XG4gICAgfVxuXG4gICAgbGV0IGlkeCA9IHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMubGVuZ3RoICsgMTtcblxuICAgIGlucHV0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1mcm9tXCIgKyBmcm9tQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZST019IGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdGcm9tXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5mcm9tRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAge292ZXJGb3JtfVxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC10b1wiICsgdG9DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdUb1wiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX1RPfSBrZXk9e2lkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ1RvXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy50b0Z1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1hcmVhXCIgKyBhcmVhQ2xzQWRkaXRpb259IG5hbWU9XCJhcmVhRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0NFTlRFUn0ga2V5PXtpZHggKyAyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cImFyZWFJbnB1dFwiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMuYXJlYUZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMuYXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMuYXJlYUFkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PjtcblxuICAgIGxldCBkZXRhaWxzID0gXCJcIjtcbiAgICBsZXQgZmVhdHVyZVNlYXJjaENvbnRyb2xzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnNob3dGZWF0dXJlcyAmJiB0aGlzLnByb3BzLmxheWVycykge1xuICAgICAgZmVhdHVyZVNlYXJjaENvbnRyb2xzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8Um91dGVyTGF5ZXJTZWxlY3Rpb24gbGF5ZXJzPXt0aGlzLnByb3BzLmxheWVyc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gYWN0aXZlTGF5ZXJWYWx1ZT17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgPFJvdXRlckRldG91clNsaWRlciBtaW49e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5taW59IG1heD17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1heH0gdmFsdWU9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy52YWx1ZX0gcm91dGVyPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMucm91dGVyfS8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7b3ZlckJ1dHRvbn1cbiAgICAgICAge3N3YXBCdXR0b259XG4gICAgICAgIHtmZWF0dXJlU2VhcmNoQ29udHJvbHN9XG4gICAgICA8L2Rpdj47XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBkZXRhaWxzID0gPGRpdiBjbGFzc05hbWU9XCJidXR0b25iYXJcIj5cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlU3RhcnRCdXR0b24pIHtcbiAgICAgIHN0YXJ0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlLXNlYXJjaC1zdGFydFwifSBvbk1vdXNlVXA9e3RoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGV9Pnt0aGlzLmxhbmdDb25zdGFudHMuU1RBUlRfUk9VVEV9PC9idXR0b24+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAge3N0YXJ0QnV0dG9ufVxuICAgICAgICB7Lyp7ZGV0YWlsQnV0dG9ufSovfVxuICAgICAgICB7ZGV0YWlsc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtSb3V0ZXJQcm9maWxlU2VsZWN0aW9ufSBmcm9tIFwiLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeFwiXG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctdGl0bGViYXIuanN4XCJcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJDb250cm9scyBleHRlbmRzIEhvcml6b250YWxQYW5lbCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlLnJvdXRlciA9IHRoaXMucHJvcHMucm91dGVyO1xuICAgIHRoaXMuc3RhdGUuc2hvd0Zvcm0gPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRSb3V0ZU1vZGUgPSB0aGlzLnNldFJvdXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0QXJlYU1vZGUgPSB0aGlzLnNldEFyZWFNb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1wYW5lbC1idXR0b24tdG9wXCIpLmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gIH1cblxuICBzZXRSb3V0ZU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwicm91dGVcIik7XG4gIH1cblxuICBzZXRBcmVhTW9kZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldE1vZGUoXCJhcmVhXCIpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY2xhc3NOYW1lID0gXCJjNGctcm91dGVyLWNvbnRlbnRcIiArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlbiBcIiA6IFwiIGM0Zy1jbG9zZSBcIikgKyB0aGlzLnByb3BzLm1vZGU7XG4gICAgLy8gcHJvcGFnYXRlIG9wZW4gc3RhdGUgZG93biB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgbGV0IG9wZW4gPSB0aGlzLnByb3BzLm9wZW47XG4gICAgbGV0IG1vZGVTd2l0Y2hlciA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcmVhU2VhcmNoICYmICF0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJlYVNlYXJjaE9ubHkpIHtcbiAgICAgIG1vZGVTd2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1tb2RlLXN3aXRjaFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYzRnLXJvdXRlci1idXR0b24tcm91dGVcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRSb3V0ZU1vZGV9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZJTkRfUk9VVEV9PlJvdXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjNGctcm91dGVyLWJ1dHRvbi1hcmVhXCIgY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIiA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy5zZXRBcmVhTW9kZX0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5BUkVBX05BTUV9PkFyZWE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93Rm9ybSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge21vZGVTd2l0Y2hlcn1cbiAgICAgICAgICA8Um91dGVyQWRkcmVzc0lucHV0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItaW5wdXQtY29udGVudFwiIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IHdpdGhQb3NpdGlvbj17dHJ1ZX0gc3dpdGNoVGFyZ2V0cz17dGhpcy5wcm9wcy5zd2l0Y2hUYXJnZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSBlbmFibGVPdmVyUG9pbnRzPXt0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSBtb2RlPXt0aGlzLnByb3BzLm1vZGV9IG9wZW49e29wZW59IGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJlc2V0RnVuY3Rpb25zPXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M9e3RoaXMucHJvcHMuZnJvbUFkZHJlc3N9IHRvQWRkcmVzcz17dGhpcy5wcm9wcy50b0FkZHJlc3N9IGFyZWFBZGRyZXNzPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSBzbGlkZXJPcHRpb25zPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlcz17dGhpcy5wcm9wcy5wcm9maWxlc30gb3ZlclNldHRpbmdzPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5nc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLXJvdXRlci1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17XCJjNGctcm91dGVyLWV4dGVuZGVkLW9wdGlvbnNcIn0gZGV0YWlsQnRuQ2I9e3RoaXMudG9nZ2xlRGV0YWlsc30gY2xvc2VCdG5DbGFzcz17XCJjNGctcm91dGVyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9Lz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWhpZGUtZm9ybS1idXR0b25cIn0gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c2hvd0Zvcm06ICF0aGlzLnN0YXRlLnNob3dGb3JtfSl9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCAwICsgXCJweFwiKTtcbiAgfVxuXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8gb3ZlcnJpZGUgcGFyZW50IG1ldGhvZFxuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSArICh0aGlzLnByb3BzLm9wZW4gPyBcIiBjNGctb3BlblwiIDogXCIgYzRnLWNsb3NlXCIpO1xuICAgIGxldCB0b3BWYWx1ZSA9IDA7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICB0b3BWYWx1ZSA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuY3NzKFwidG9wXCIsIHRvcFZhbHVlICsgXCJweFwiKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcGVuKHRydWUpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3BlbihmYWxzZSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgY2xpY2tDb250cm9sKGV2dCkge1xuICAgIGxldCBoaWRkZW4gPSB0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSBpZiAoIXRoaXMucHJvcHMub3Blbil7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzfSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudHNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyRGV0b3VyU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgZWxlbWVudC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgb3V0cHV0XG4gICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogZWxlbWVudC52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogZWxlbWVudC52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VW13ZWc8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBjbGFzc05hbWU9e3JvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFfVxuICAgICAgICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn0gbWF4PXt0aGlzLnByb3BzLm1heH0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBzdGVwPXswLjV9Lz5cbiAgICAgICAgPG91dHB1dCBjbGFzc05hbWU9e3JvdXRpbmdDb25zdGFudHMuT1VUUFVUX0RFVE9VUn0+e3RoaXMucHJvcHMudmFsdWUgKyBcIiBrbVwifTwvb3V0cHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy51cGRhdGVkKSB7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICAgIG91dHB1dFxuICAgICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS50cmlnZ2VyKCdpbnB1dCcpO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyTGF5ZXJTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRMYXllciA9IHRoaXMuc2V0TGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyVmFsdWUgPSB0aGlzLnNldExheWVyVmFsdWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldExheWVyKGV2ZW50KSB7XG4gICAgbGV0IGxheWVyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyKHBhcnNlSW50KGxheWVyLCAxMCkpO1xuICB9XG5cbiAgc2V0TGF5ZXJWYWx1ZShldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllclZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGRlZmF1bHRMYXllciA9IDA7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICBkZWZhdWx0TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllckFyZWE7XG4gICAgfVxuICAgIGNvbnN0IGFyckxheWVycyA9IHNjb3BlLnByb3BzLnJvdXRlci5vYmpMYXllcnM7XG4gICAgbGV0IGxheWVyVmFsdWVTZWxlY3Rpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubGVuZ3RoID4gMSkpIHtcbiAgICAgIGxheWVyVmFsdWVTZWxlY3Rpb24gPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWxheWVyLXZhbHVlLXNlbGVjdGlvblwifT5cbiAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllclZhbHVlID09PSBuYW1lID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwifSBvbk1vdXNlVXA9e3RoaXMuc2V0TGF5ZXJWYWx1ZX0ga2V5PXt0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdW25hbWVdLm1hcExhYmVsfSB2YWx1ZT17bmFtZX0gdGl0bGU9e25hbWV9PntuYW1lfTwvYnV0dG9uPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5sYXllcnMgJiYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5sZW5ndGggPiAxKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRMYXllcn0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0TGF5ZXJ9PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpZF0ubGF5ZXJEYXRhO1xuXG4gICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR9IHZhbHVlPXtpZH0+e2xheWVyLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICB7bGF5ZXJWYWx1ZVNlbGVjdGlvbn1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PntsYXllclZhbHVlU2VsZWN0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9maWxlID0gdGhpcy5zZXRQcm9maWxlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbiA9IHtcbiAgICAgIDA6IFwiY2FyXCIsXG4gICAgICAxOiBcImhndlwiLFxuICAgICAgMjogXCJiaWtlXCIsXG4gICAgICAzOiBcInJvYWRiaWtlXCIsXG4gICAgICA0OiBcImJpa2VcIixcbiAgICAgIDU6IFwibW91bnRhaW5iaWtlXCIsXG4gICAgICA2OiBcImJpa2VcIixcbiAgICAgIDc6IFwiZWxlY3RyaWNiaWtlXCIsXG4gICAgICA4OiBcImZvb3RcIixcbiAgICAgIDk6IFwid2FuZGVyXCIsXG4gICAgICAxMDogXCJ3aGVlbGNoYWlyXCIsXG4gICAgICAxMTogXCJoZ3ZcIixcbiAgICAgIDEyOiBcInNjb290ZXJcIixcbiAgICAgIDEzOiBcIm1vdG9yYmlrZVwiXG4gICAgfTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMucHJvZmlsZUxhbmcgPSB7XG4gICAgICBcImNhclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkNBUixcbiAgICAgIFwiaGd2XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuVFJVQ0ssXG4gICAgICBcImJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5CSUtFLFxuICAgICAgXCJyb2FkYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJPQURCSUtFLFxuICAgICAgXCJtb3VudGFpbmJpa2VcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5NT1VOVEFJTkJJS0UsXG4gICAgICBcImVsZWN0cmljYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkVMRUNUUklDQklLRSxcbiAgICAgIFwiZm9vdFwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTEssXG4gICAgICBcIndhbmRlclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldBTkRFUixcbiAgICAgIFwid2hlZWxjaGFpclwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLldIRUVMLFxuICAgICAgXCJzY29vdGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuU0NPT1QsXG4gICAgICBcIm1vdG9yYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVE9SQklLRVxuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiAhIXByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsXG4gICAgfVxuICB9XG5cbiAgc2V0UHJvZmlsZShwcm9maWxlKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0UHJvZmlsZShwYXJzZUludChwcm9maWxlLmlkLCAxMCkpO1xuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIubWFwRGF0YS5yb3V0ZXJfcHJvZmlsZXNfaW5pdGlhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGV9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdXX0vPlxuICAgICAgPC9kaXY+KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlciBjNGctcG9wdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KX0vPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucHJvZmlsZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRQcm9maWxlKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1wcm9maWxlLVwiICsgdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF0gKyAocGFyc2VJbnQoaXRlbS5pZCwgMTApID09PSB0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> Several version preps
