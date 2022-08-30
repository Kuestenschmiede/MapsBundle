"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-controls_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-autocomplete-input.jsx":
/*!***********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-autocomplete-input.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AutocompleteInput = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AutocompleteInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AutocompleteInput, _Component);

  var _super = _createSuper(AutocompleteInput);

  function AutocompleteInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AutocompleteInput);
    _this = _super.call(this, props);
    _this.listenerRegistered = false;
    _this.state = {
      arrAddresses: []
    };
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AutocompleteInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
    /**
     * Alert if clicked on outside of element
     */

  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          arrAddresses: []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var scope = this;

      var submitFunction = function submitFunction() {
        var field = $("#" + scope.props.cssId);
        field.trigger('change');
        var performSearchCallback;
        var value;

        if (scope.props.cssId.indexOf("area") !== -1) {
          value = "areaValue";

          performSearchCallback = function performSearchCallback() {
            scope.props.router.performArea();
          };
        } else {
          value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";

          performSearchCallback = function performSearchCallback() {
            scope.props.router.performViaRoute();
          };
        }

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
                var value = scope.props.cssId.indexOf("area") !== -1 ? "areaValue" : scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
                var field = $("#" + scope.props.cssId);

                if (!scope.props.objSettings.proxyUrl || !scope.props.objSettings.keyAutocomplete) {
                  scope.props.router.performSearch(field, value);
                } else {
                  scope.props.router.performSearch(field, value, false);
                  scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
                }
              }
            }, 500);
          }
        }
      };

      var listAutocomplete = null;

      if (this.state.arrAddresses && this.state.arrAddresses.length > 0) {
        var listAdresses = [];

        for (var i in this.state.arrAddresses) {
          if (this.state.arrAddresses.hasOwnProperty(i)) {
            (function () {
              var elemAddress = _this2.state.arrAddresses[i];

              var clickEvent = function clickEvent(self) {
                jQuery("#" + self.props.cssId).val(elemAddress.name);
                var point = new _geom.Point([elemAddress.pos[1], elemAddress.pos[0]]);

                if (self.props.cssId.includes("From")) {
                  self.props.router.setRouteFrom(elemAddress.pos[1], elemAddress.pos[0], true);
                } else if (self.props.cssId.includes("To")) {
                  self.props.router.setRouteTo(elemAddress.pos[1], elemAddress.pos[0], true);
                } else if (self.props.cssId.includes("Over")) {
                  self.props.router.addOverPoint(elemAddress.pos[1], elemAddress.pos[0], self.props.index, true);
                } else if (self.props.cssId.includes("area")) {
                  self.props.router.setAreaPoint(elemAddress.pos[1], elemAddress.pos[0], true);
                }

                self.setState({
                  arrAddresses: []
                });
              };

              var listItem = /*#__PURE__*/_react["default"].createElement("li", {
                key: i,
                className: "c4g-autocomplete-item",
                onMouseUp: function onMouseUp(event) {
                  clickEvent(scope);
                }
              }, elemAddress.name);

              listAdresses.push(listItem);
            })();
          }
        }

        listAutocomplete = /*#__PURE__*/_react["default"].createElement("ul", {
          className: "c4g-autocomplete"
        }, listAdresses);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.wrapperRef
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: this.props.cssId,
        type: "search",
        defaultValue: this.props.value,
        onKeyDown: enterListener,
        autoComplete: "off"
      }), listAutocomplete);
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
      var center;

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

      var url;

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

      if (settings.resultCount) {
        url += "&limit=" + settings.resultCount;
      }

      $.ajax({
        url: url
      }).done(function (data) {
        var center;

        if (settings.center) {
          center = settings.center;
        } else if (settings.bBox) {
          center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
        }

        if (data.length > 0) {
          var arrAddresses = [];

          if (settings.bBox && settings.bBox[0] && data[0] && data[0].display_name && center) {
            // $(cssId).val(data[0].display_name);
            for (var i in data) {
              if (data.hasOwnProperty(i)) {
                if (this.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                  (function () {
                    var distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                    var element = {
                      'dist': distance,
                      'pos': [data[i].lat, data[i].lon],
                      'name': data[i].display_name
                    };
                    var foundIndex = arrAddresses.findIndex(function (findElement) {
                      return findElement.name === element.name;
                    });

                    if (foundIndex === -1) {
                      arrAddresses.push(element);
                    }
                  })();
                }
              }
            }

            arrAddresses.sort(function (a, b) {
              return a.dist - b.dist;
            });
          } else if (data[0] && data[0].display_name) {
            for (var _i in data) {
              if (data.hasOwnProperty(_i)) {
                (function () {
                  var element = {
                    'pos': [data[_i].lat, data[_i].lon],
                    'name': data[_i].display_name
                  };
                  var foundIndex = arrAddresses.findIndex(function (findElement) {
                    return findElement.name === element.name;
                  });

                  if (foundIndex === -1) {
                    arrAddresses.push(element);
                  }
                })();
              }
            }
          }

          scope.setState({
            arrAddresses: arrAddresses
          });
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

exports.AutocompleteInput = AutocompleteInput;

/***/ }),

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
      }, this.props.label), positionButton, /*#__PURE__*/_react["default"].createElement(_c4gAutocompleteInput.AutocompleteInput, {
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
      }), /*#__PURE__*/_react["default"].createElement("button", {
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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterProfileSelection = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-profile-selection.jsx */ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx"));
});

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

      if (this.state.showForm) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterProfileSelection, {
          profiles: this.props.router.state.profiles,
          router: this.props.router,
          currentProfile: this.props.router.state.currentProfile
        })), /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressInput.RouterAddressInput, {
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
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-detour-range"
      }, /*#__PURE__*/_react["default"].createElement("p", null, _routingConstants.routingConstants.ROUTE_DETOUR), /*#__PURE__*/_react["default"].createElement("input", {
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
        return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWNvbnRyb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7RUFFVCwyQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2YsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxrQkFBTCxHQUEwQixLQUExQjtJQUNBLE1BQUtDLEtBQUwsR0FBYTtNQUNUQyxZQUFZLEVBQUU7SUFETCxDQUFiO0lBSUEsTUFBS0MsVUFBTCxnQkFBa0JDLGlCQUFBLENBQU1DLFNBQU4sRUFBbEI7SUFDQSxNQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsZ0RBQTFCO0lBUmU7RUFTbEI7Ozs7V0FFRCw2QkFBb0I7TUFDaEJDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS0gsa0JBQTVDO0lBQ0g7OztXQUVELGdDQUF1QjtNQUNuQkUsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLSixrQkFBL0M7SUFDSDtJQUVEO0FBQ0o7QUFDQTs7OztXQUNJLDRCQUFtQkssS0FBbkIsRUFBMEI7TUFDdEIsSUFBSSxLQUFLUixVQUFMLElBQW1CLENBQUMsS0FBS0EsVUFBTCxDQUFnQlMsT0FBaEIsQ0FBd0JDLFFBQXhCLENBQWlDRixLQUFLLENBQUNHLE1BQXZDLENBQXhCLEVBQXdFO1FBQ3BFLEtBQUtDLFFBQUwsQ0FBYztVQUNWYixZQUFZLEVBQUU7UUFESixDQUFkO01BR0g7SUFDSjs7O1dBRUQsa0JBQVM7TUFBQTs7TUFDTCxJQUFNYyxLQUFLLEdBQUcsSUFBZDs7TUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVk7UUFDL0IsSUFBSUMsS0FBSyxHQUFHQyxDQUFDLENBQUMsTUFBTUgsS0FBSyxDQUFDakIsS0FB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O1lBQ1EsR0FBRyxFQUFFLEtBQUsxTyxLQUFMLENBQVcwTyxjQUR4QjtZQUN3QyxLQUFLLEVBQUUsS0FBS2lELFdBQUwsQ0FBaUIsS0FBS0Qsa0JBQUwsQ0FBd0IsS0FBSzFSLEtBQUwsQ0FBVzBPLGNBQW5DLENBQWpCO1VBRC9DLEVBRE0sQ0FBUjtRQUlEO01BRUY7SUFDRjs7O1dBRUQsZ0NBQXVCO01BQ3JCLEtBQUsxTixRQUFMLENBQWM7UUFBQ3VSLFNBQVMsRUFBRTtNQUFaLENBQWQ7SUFDRDs7O0VBL0VpRG5NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWhvcml6b250YWwtcGFuZWwuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWlucHV0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJSZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGVydCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgIGZpZWxkLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgbGV0IHBlcmZvcm1TZWFyY2hDYWxsYmFjaztcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKFwiYXJlYVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiYXJlYVZhbHVlXCI7XG4gICAgICAgICAgICAgICAgcGVyZm9ybVNlYXJjaENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKCdGcm9tJykgIT09IC0xKSA/IFwiZnJvbVZhbHVlXCIgOiBcInRvVmFsdWVcIjtcbiAgICAgICAgICAgICAgICBwZXJmb3JtU2VhcmNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtVmlhUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIHBlcmZvcm1TZWFyY2hDYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGVudGVyTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdF90aGlzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS5sZW5ndGggPT09IDAgJiYgIWV2ZW50LmtleUNvZGUpIHsgLy9kZWxldGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2NvcGUucHJvcHMub2JqRnVuY3Rpb25zLmRlbGV0ZUZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9ucy5kZWxldGVGdW5jdGlvbihldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXIgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLmRlbGV0ZUZ1bmN0aW9uKGV2ZW50LmN1cnJlbnRUYXJnZXQsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY291bnRlciA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDQwMCA8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGUuY291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZihcImFyZWFcIikgIT09IC0xKSA/IFwiYXJlYVZhbHVlXCIgOiAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZignRnJvbScpICE9PSAtMSkgPyBcImZyb21WYWx1ZVwiIDogXCJ0b1ZhbHVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm9ialNldHRpbmdzLnByb3h5VXJsIHx8ICFzY29wZS5wcm9wcy5vYmpTZXR0aW5ncy5rZXlBdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1TZWFyY2goZmllbGQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlQWRkcmVzcygkKFwiI1wiICsgc2NvcGUucHJvcHMuY3NzSWQpLnZhbCgpLCBcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgbGlzdEF1dG9jb21wbGV0ZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckFkZHJlc3NlcyAmJiB0aGlzLnN0YXRlLmFyckFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEFkcmVzc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtQWRkcmVzcyA9IHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpY2tFdmVudCA9IChzZWxmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjXCIgKyBzZWxmLnByb3BzLmNzc0lkKS52YWwoZWxlbUFkZHJlc3MubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2VsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIkZyb21cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oZWxlbUFkZHJlc3MucG9zWzFdLCBlbGVtQWRkcmVzcy5wb3NbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnByb3BzLmNzc0lkLmluY2x1ZGVzKFwiVG9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIk92ZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5hZGRPdmVyUG9pbnQoZWxlbUFkZHJlc3MucG9zWzFdLCBlbGVtQWRkcmVzcy5wb3NbMF0sIHNlbGYucHJvcHMuaW5kZXgsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYucHJvcHMuY3NzSWQuaW5jbHVkZXMoXCJhcmVhXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3NlczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gPGxpIGtleT17aX0gY2xhc3NOYW1lPXtcImM0Zy1hdXRvY29tcGxldGUtaXRlbVwifSBvbk1vdXNlVXA9eyhldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50KHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICB9KX0+e2VsZW1BZGRyZXNzLm5hbWV9PC9saT47XG4gICAgICAgICAgICAgICAgICAgIGxpc3RBZHJlc3Nlcy5wdXNoKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0QXV0b2NvbXBsZXRlID0gPHVsIGNsYXNzTmFtZT17XCJjNGctYXV0b2NvbXBsZXRlXCJ9PntsaXN0QWRyZXNzZXN9PC91bD5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXt0aGlzLnByb3BzLmNzc0lkfSB0eXBlPVwic2VhcmNoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbktleURvd249e2VudGVyTGlzdGVuZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICB7bGlzdEF1dG9jb21wbGV0ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNldENlbnRlcihjZW50ZXIpIHtcbiAgICAgICAgdGhpcy5vYmpTZXR0aW5ncy5jZW50ZXIgPSBjZW50ZXI7XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlQWRkcmVzcyhpbnB1dCwgY3NzQ2xhc3MpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHNjb3BlLnByb3BzLm9ialNldHRpbmdzO1xuICAgICAgICBsZXQgY2VudGVyO1xuICAgICAgICBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmNlbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iakNlbnRlciA9IHNldHRpbmdzLmNlbnRlcigpO1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IG9iakNlbnRlclswXSArIFwiLFwiICsgb2JqQ2VudGVyWzFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXJbMF0gKyBcIixcIiArIHNldHRpbmdzLmNlbnRlclsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5ncy5iQm94KSB7XG4gICAgICAgICAgICBjZW50ZXIgPSAocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiArIFwiLFwiICsgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYgKGNlbnRlcikge1xuICAgICAgICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0ICsgXCImY2VudGVyPVwiICsgY2VudGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtIGluIHNldHRpbmdzLmdlb3NlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MucmVzdWx0Q291bnQpIHtcbiAgICAgICAgICAgIHVybCArPSBcIiZsaW1pdD1cIiArIHNldHRpbmdzLnJlc3VsdENvdW50O1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IHNldHRpbmdzLmNlbnRlcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYkJveCkge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IFsocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiwgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJBZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuYkJveCAmJiBzZXR0aW5ncy5iQm94WzBdICYmIGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUgJiYgY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0luQm91bmRpbmdCb3goZGF0YVtpXS5sb24sIGRhdGFbaV0ubGF0LCBzZXR0aW5ncy5iQm94KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGNlbnRlclswXSAtIGRhdGFbaV0ubG9uKSAqIChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKyAoY2VudGVyWzFdIC0gZGF0YVtpXS5sYXQpICogKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3QnOiBkaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3MnOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogZGF0YVtpXS5kaXNwbGF5X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBhcnJBZGRyZXNzZXMuZmluZEluZGV4KChmaW5kRWxlbWVudCkgPT4gZmluZEVsZW1lbnQubmFtZSA9PT0gZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5zb3J0KChhLCBiKSA9PiBhLmRpc3QgLSBiLmRpc3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3MnOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBkYXRhW2ldLmRpc3BsYXlfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBhcnJBZGRyZXNzZXMuZmluZEluZGV4KChmaW5kRWxlbWVudCkgPT4gZmluZEVsZW1lbnQubmFtZSA9PT0gZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IGFyckFkZHJlc3Nlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0luQm91bmRpbmdCb3gobG9uZ2l0dWRlLCBsYXRpdHVkZSwgYmJveCkge1xuICAgICAgICBpZiAodHlwZW9mIGxvbmdpdHVkZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChsb25naXR1ZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGF0aXR1ZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGxhdGl0dWRlID0gcGFyc2VGbG9hdChsYXRpdHVkZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJib3hbMF0gPCBsb25naXR1ZGUgJiZcbiAgICAgICAgICAgIGxvbmdpdHVkZSA8IGJib3hbMl0gJiZcbiAgICAgICAgICAgIGJib3hbMV0gPCBsYXRpdHVkZSAmJlxuICAgICAgICAgICAgbGF0aXR1ZGUgPCBiYm94WzNdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChwcm9wcy50aXRsZSkge1xuICAgICAgYnV0dG9uLnRpdGxlID0gcHJvcHMudGl0bGU7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIpICsgXCItYnV0dG9uLVwiICsgKHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiKSArIFwiIG9sLWNvbnRyb2wgXCIgKyBcIm9sLXVuc2VsZWN0YWJsZVwiO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24udGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgICB0aGlzLmNsaWNrQ29udHJvbCA9IHRoaXMuY2xpY2tDb250cm9sLmJpbmQodGhpcyk7XG4gICAgalF1ZXJ5KGJ1dHRvbikub24oJ2NsaWNrJywgdGhpcy5jbGlja0NvbnRyb2wpO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwidG9wXCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctaG9yaXpvbnRhbC1wYW5lbFwiLFxuICAgICAgY2hpbGRzOiBwcm9wcy5jaGlsZHMgfHwgW10sXG4gICAgICBjb250cm9sOiBjb250cm9sXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZHMgKCkge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2NvcGUuc3RhdGUuY2hpbGRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPjwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjbGlja0NvbnRyb2woKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgIHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMTAwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMTAwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMTAwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CUiArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMTAwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgLy8gbGV0IHRvcFZhbHVlID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRTaXplKClbMV0gLSAxMDA7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnN0eWxlLnRvcCA9IHRvcFZhbHVlICsgXCJweFwiO1xuICAgICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcInBhbmVsLXNsaWRlZC1vdXRcIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogVW5kb2VzIHRoZSBwcmV2aW91cyBidXR0b24gbW92ZW1lbnQuXG4gICAqL1xuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIikge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQuc3R5bGUudG9wID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRTaXplKClbMV0gKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLWluXCIpLnJlbW92ZUNsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBIVE1MIGNvbnRlbnQgdG8gdGhlIHBhbmVsLlxuICAgKiBAcGFyYW0gY29udGVudCAgIE11c3QgYmUgYSBIVE1MIGVsZW1lbnQuXG4gICAqL1xuICBhZGRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLnN0YXRlLmNoaWxkcy5wdXNoKGNvbnRlbnQpO1xuICB9XG5cblxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXV0b2NvbXBsZXRlSW5wdXR9IGZyb20gXCIuL2M0Zy1hdXRvY29tcGxldGUtaW5wdXQuanN4XCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vcm91dGluZy1jb25zdGFudC1pMThuXCI7XG5pbXBvcnQge3RyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDb250ZW50ID0gdGhpcy5yZW1vdmVDb250ZW50LmJpbmQodGhpcyk7XG4gICAgaWYgKHByb3BzLnJvdXRlci5tYXBEYXRhLmluaXRpYWxQb3NpdGlvbiAmJiAocHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nRnJvbVwiIHx8IHByb3BzLm5hbWUgPT09IFwiYXJlYUZyb21cIikpIHtcbiAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbERlc3RpbmF0aW9uICYmIHByb3BzLm5hbWUgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgIGxldCBzZXRUb0NlbnRlciA9IChkYXRhKT0+IHtcbiAgICAgICAgbGV0IGNlbnRlciA9IHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxvbmdpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzBdO1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubGF0aXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVsxXTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQucHVzaChzZXRUb0NlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwb3NpdGlvbkJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMud2l0aFBvc2l0aW9uKSB7XG4gICAgICBwb3NpdGlvbkJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wb3NpdGlvblwiIG9uTW91c2VVcD17dGhpcy5nZXRQb3NpdGlvbn0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVfUE9TSVRJT059Lz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5uYW1lfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICB7cG9zaXRpb25CdXR0b259XG4gICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17dGhpcy5wcm9wcy5jc3NJZH0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IHBvcHVwPXt0aGlzLnByb3BzLnBvcHVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IGluZGV4PXt0aGlzLnByb3BzLmluZGV4fS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtY2xlYXJcIn0gb25Nb3VzZVVwPXt0aGlzLnJlbW92ZUNvbnRlbnR9IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJFTU9WRV9BRERSRVNTfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlQ29udGVudChldmVudCkge1xuICAgIGpRdWVyeShcIiNcIiArIHRoaXMucHJvcHMuY3NzSWQpLnZhbCgnJyk7XG4gICAgdGhpcy5wcm9wcy5jbGVhcklucHV0KGV2ZW50KTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaGFuZGxlTmV3UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBzY29wZS5oYW5kbGVQb3NpdGlvbihwb3MpO1xuICAgIH07XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVOZXdQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnZW9sb2NhdGlvbiBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIENvbnNpZGVyIHVwZGF0aW5nIGl0IG9yIHN3aXRjaGluZyB0byBhIG5ld2VyIGJyb3dzZXIuXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyB0aGUgaW5wdXQgY29vcmRpbmF0ZXMgYW5kIGV4ZWN1dGVzIHRoZSByZXZlcnNlIHNlYXJjaC4gT24gc3VjY2VzcywgdGhlIHJlc3VsdCBsb2NhdGlvbiBpcyBpbnNlcnRlZCBpbiB0aGVcbiAgICogZ2l2ZW4gaW5wdXQgZmllbGQgYW5kIHRoZSBnaXZlbiBwcm9wZXJ0eSBvZiB0aGlzLlxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcbiAgICovXG4gIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGNvb3JkcyA9IGNvb3JkaW5hdGVzLmNvb3JkcztcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlRnJvbShjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwib3ZlclZhbHVlXCIpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlVG8oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJhcmVhRnJvbVwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRBcmVhUG9pbnQoY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlckFkZHJlc3NGaWVsZCB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3hcIjtcbmltcG9ydCB7IFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gfSBmcm9tIFwiLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyTGF5ZXJTZWxlY3Rpb24gfSBmcm9tIFwiLi9jNGctcm91dGVyLWxheWVyLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckRldG91clNsaWRlciB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItZGV0b3VyLXNsaWRlci5qc3hcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4uL3JvdXRpbmctY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4uL3JvdXRpbmctY29uc3RhbnQtaTE4bi1lblwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyQWRkcmVzc0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmICghcHJvcHMucm91dGVyKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgcm91dGluZyBjb21wb25lbnQgbmVlZHMgYSByb3V0ZXIsIGl0IHdvbid0IHdvcmsgY29ycmVjdGx5IHNpbmNlIG5vbmUgd2FzIHBhc3NlZC4uLlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcm91dGVyOiBwcm9wcy5yb3V0ZXIsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAocHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gcm91dGluZ0NvbnN0YW50c0dlcm1hbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZhbGxiYWNrXG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNFbmdsaXNoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaW5wdXQgPSBudWxsO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGxldCBvdmVyRm9ybSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgb3ZlckZvcm0gPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyUG9pbnRzKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1vdmVyLVwiICsgaXRlbX0gbmFtZT17XCJvdmVyUG9pbnQtXCIgKyBpdGVtfSBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9MYWJlbF9JbnRlcmltfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXtcInJvdXRpbmdPdmVyLVwiICsgaXRlbX0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vYmpGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHZhbHVlPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyQWRkcmVzc2VzW2l0ZW1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGtleT17aXRlbX0gaW5kZXg9e2l0ZW19IGNsZWFySW5wdXQ9eygpID0+IHt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vYmpGdW5jdGlvbnNbaXRlbV0uZGVsZXRlRnVuY3Rpb24oKTt9fS8+XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBmcm9tQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCB0b0Nsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBsZXQgYXJlYUNsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGFyZWFDbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICAgIHRvQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBzd2FwRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnByb3BzLm92ZXJTZXR0aW5ncy5zd2FwUG9pbnRzKCk7XG4gICAgICBjb25zdCB0bXBGcm9tID0galF1ZXJ5KFwiI3JvdXRpbmdGcm9tXCIpLnZhbCgpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdGcm9tXCIpLnZhbChqUXVlcnkoXCIjcm91dGluZ1RvXCIpLnZhbCgpKTtcbiAgICAgIGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKHRtcEZyb20pO1xuICAgIH07XG4gICAgbGV0IHN3YXBCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnN3aXRjaFRhcmdldHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIHN3YXBCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItc3dpdGNoXCIgb25Nb3VzZVVwPXtzd2FwRnVuY3Rpb259IC8+O1xuICAgIH1cbiAgICBsZXQgb3ZlckJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgb3ZlckJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1vdmVyXCIgb25Nb3VzZVVwPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyRnVuY3Rpb259IC8+O1xuICAgIH1cblxuICAgIGxldCBpZHggPSB0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyUG9pbnRzLmxlbmd0aCArIDE7XG5cbiAgICBpbnB1dCA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtZnJvbVwiICsgZnJvbUNsc0FkZGl0aW9ufSBuYW1lPVwicm91dGluZ0Zyb21cIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9GUk9NfSBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJyb3V0aW5nRnJvbVwiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMuZnJvbUZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMuZnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMuZnJvbUFkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICAgIHtvdmVyRm9ybX1cbiAgICAgIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtdG9cIiArIHRvQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nVG9cIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9UT30ga2V5PXtpZHggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdUb1wiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMudG9GdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy50b0FkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICAgIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtYXJlYVwiICsgYXJlYUNsc0FkZGl0aW9ufSBuYW1lPVwiYXJlYUZyb21cIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9DRU5URVJ9IGtleT17aWR4ICsgMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJhcmVhSW5wdXRcIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmFyZWFGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD47XG5cbiAgICBsZXQgZGV0YWlscyA9IFwiXCI7XG4gICAgbGV0IGZlYXR1cmVTZWFyY2hDb250cm9scyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93RmVhdHVyZXMgJiYgdGhpcy5wcm9wcy5sYXllcnMpIHtcbiAgICAgIGZlYXR1cmVTZWFyY2hDb250cm9scyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFJvdXRlckxheWVyU2VsZWN0aW9uIGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFjdGl2ZUxheWVyVmFsdWU9e3RoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgIDxSb3V0ZXJEZXRvdXJTbGlkZXIgbWluPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWlufSBtYXg9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5tYXh9IHZhbHVlPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMudmFsdWV9IHJvdXRlcj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnJvdXRlcn0vPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBkZXRhaWxzID0gPGRpdiBjbGFzc05hbWU9XCJidXR0b25iYXJcIj5cbiAgICAgICAge292ZXJCdXR0b259XG4gICAgICAgIHtzd2FwQnV0dG9ufVxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtmZWF0dXJlU2VhcmNoQ29udHJvbHN9XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIGxldCBzdGFydEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZVN0YXJ0QnV0dG9uKSB7XG4gICAgICBzdGFydEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZS1zZWFyY2gtc3RhcnRcIn0gb25Nb3VzZVVwPXt0aGlzLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlfT57dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJUX1JPVVRFfTwvYnV0dG9uPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHtzdGFydEJ1dHRvbn1cbiAgICAgICAgey8qe2RldGFpbEJ1dHRvbn0qL31cbiAgICAgICAge2RldGFpbHN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiXG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmNvbnN0IFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCcpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyQ29udHJvbHMgZXh0ZW5kcyBIb3Jpem9udGFsUGFuZWwge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZS5yb3V0ZXIgPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICB0aGlzLnN0YXRlLnNob3dGb3JtID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0Um91dGVNb2RlID0gdGhpcy5zZXRSb3V0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEFyZWFNb2RlID0gdGhpcy5zZXRBcmVhTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZGl2KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1yb3V0ZXItcGFuZWwtYnV0dG9uLXRvcFwiKS5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0Um91dGVNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcInJvdXRlXCIpO1xuICB9XG5cbiAgc2V0QXJlYU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwiYXJlYVwiKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiYzRnLXJvdXRlci1jb250ZW50XCIgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW4gXCIgOiBcIiBjNGctY2xvc2UgXCIpICsgdGhpcy5wcm9wcy5tb2RlO1xuICAgIC8vIHByb3BhZ2F0ZSBvcGVuIHN0YXRlIGRvd24gdG8gY2hpbGQgY29tcG9uZW50c1xuICAgIGxldCBvcGVuID0gdGhpcy5wcm9wcy5vcGVuO1xuICAgIGxldCBtb2RlU3dpdGNoZXIgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Zvcm0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLi5cIjwvZGl2Pn0+XG4gICAgICAgICAgICA8Um91dGVyUHJvZmlsZVNlbGVjdGlvbiBwcm9maWxlcz17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUucHJvZmlsZXN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5jdXJyZW50UHJvZmlsZX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPFJvdXRlckFkZHJlc3NJbnB1dCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWlucHV0LWNvbnRlbnRcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB3aXRoUG9zaXRpb249e3RydWV9IHN3aXRjaFRhcmdldHM9e3RoaXMucHJvcHMuc3dpdGNoVGFyZ2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjdXJyZW50UHJvZmlsZT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gZW5hYmxlT3ZlclBvaW50cz17dGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gbW9kZT17dGhpcy5wcm9wcy5tb2RlfSBvcGVuPXtvcGVufSBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByZXNldEZ1bmN0aW9ucz17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSB0b0FkZHJlc3M9e3RoaXMucHJvcHMudG9BZGRyZXNzfSBhcmVhQWRkcmVzcz17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gc2xpZGVyT3B0aW9ucz17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9IG92ZXJTZXR0aW5ncz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3N9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGVyXCJ9IGhlYWRlcj17aGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1leHRlbmRlZC1vcHRpb25zXCJ9IGRldGFpbEJ0bkNiPXt0aGlzLnRvZ2dsZURldGFpbHN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1oaWRlLWZvcm0tYnV0dG9uXCJ9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgMCArIFwicHhcIik7XG4gIH1cblxuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW5cIiA6IFwiIGM0Zy1jbG9zZVwiKTtcbiAgICBsZXQgdG9wVmFsdWUgPSAwO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdG9wVmFsdWUgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCB0b3BWYWx1ZSArIFwicHhcIik7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3Blbih0cnVlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4oZmFsc2UpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbChldnQpIHtcbiAgICBsZXQgaGlkZGVuID0gdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLm9wZW4pe1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c30gZnJvbSBcIi4uL3JvdXRpbmctY29uc3RhbnRzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJEZXRvdXJTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShcIi5cIiArIHJvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFKTtcbiAgICBlbGVtZW50Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb250cm9sID0galF1ZXJ5KHRoaXMpO1xuICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICBsZXQgcG9zT2Zmc2V0ID0gTWF0aC5yb3VuZCg1MCAqIHBvcyAvIDEwMCkgLSAoMjUpO1xuICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICBvdXRwdXRcbiAgICAgICAgLmNzcygnbGVmdCcsICdjYWxjKCcgKyBwb3MgKyAnJSAtICcgKyBwb3NPZmZzZXQgKyAncHgpJylcbiAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBjb250cm9sLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiBlbGVtZW50LnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiBlbGVtZW50LnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC50cmlnZ2VyKCdpbnB1dCcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWRldG91ci1yYW5nZVwifT5cbiAgICAgICAgPHA+e3JvdXRpbmdDb25zdGFudHMuUk9VVEVfREVUT1VSfTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEV9XG4gICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IHN0ZXA9ezAuNX0vPlxuICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5PVVRQVVRfREVUT1VSfT57dGhpcy5wcm9wcy52YWx1ZSArIFwiIGttXCJ9PC9vdXRwdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHJvdXRpbmdDb25zdGFudHMuUk9VVEVfVE9HR0xFKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLnVwZGF0ZWQpIHtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjb250cm9sID0galF1ZXJ5KHRoaXMpO1xuICAgICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgICBsZXQgcG9zT2Zmc2V0ID0gTWF0aC5yb3VuZCg1MCAqIHBvcyAvIDEwMCkgLSAoMjUpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgICAgb3V0cHV0XG4gICAgICAgICAgLmNzcygnbGVmdCcsICdjYWxjKCcgKyBwb3MgKyAnJSAtICcgKyBwb3NPZmZzZXQgKyAncHgpJylcbiAgICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJtYWxpbmsudXBkYXRlTGlua0ZyYWdtZW50cyhcImRldG91clwiLCBjb250cm9sLnZhbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiBqUXVlcnkoZWxlbWVudCkudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiBqUXVlcnkoZWxlbWVudCkudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLnRyaWdnZXIoJ2lucHV0Jyk7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJMYXllclNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldExheWVyID0gdGhpcy5zZXRMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TGF5ZXJWYWx1ZSA9IHRoaXMuc2V0TGF5ZXJWYWx1ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0TGF5ZXIoZXZlbnQpIHtcbiAgICBsZXQgbGF5ZXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXIocGFyc2VJbnQobGF5ZXIsIDEwKSk7XG4gIH1cblxuICBzZXRMYXllclZhbHVlKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZGVmYXVsdExheWVyID0gMDtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBkZWZhdWx0TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclJvdXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYTtcbiAgICB9XG4gICAgY29uc3QgYXJyTGF5ZXJzID0gc2NvcGUucHJvcHMucm91dGVyLm9iakxheWVycztcbiAgICBsZXQgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5sZW5ndGggPiAxKSkge1xuICAgICAgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItbGF5ZXItdmFsdWUtc2VsZWN0aW9uXCJ9PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyVmFsdWUgPT09IG5hbWUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5zZXRMYXllclZhbHVlfSBrZXk9e3RoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl1bbmFtZV0ubWFwTGFiZWx9IHZhbHVlPXtuYW1lfSB0aXRsZT17bmFtZX0+e25hbWV9PC9idXR0b24+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLmxlbmd0aCA+IDEpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWxheWVyLXNlbGVjdGlvblwiIG9uQ2hhbmdlPXt0aGlzLnNldExheWVyfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRMYXllcn0+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2lkXS5sYXllckRhdGE7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e2lkfT57bGF5ZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtsYXllclZhbHVlU2VsZWN0aW9ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+e2xheWVyVmFsdWVTZWxlY3Rpb259PC9SZWFjdC5GcmFnbWVudD4pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSwgMTApID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJBdXRvY29tcGxldGVJbnB1dCIsInByb3BzIiwibGlzdGVuZXJSZWdpc3RlcmVkIiwic3RhdGUiLCJhcnJBZGRyZXNzZXMiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJzY29wZSIsInN1Ym1pdEZ1bmN0aW9uIiwiZmllbGQiLCIkIiwiY3NzSWQiLCJ0cmlnZ2VyIiwicGVyZm9ybVNlYXJjaENhbGxiYWNrIiwidmFsdWUiLCJpbmRleE9mIiwicm91dGVyIiwicGVyZm9ybUFyZWEiLCJwZXJmb3JtVmlhUm91dGUiLCJwZXJmb3JtU2VhcmNoIiwiZW50ZXJMaXN0ZW5lciIsIm9wdF90aGlzIiwia2V5Q29kZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWwiLCJsZW5ndGgiLCJvYmpGdW5jdGlvbnMiLCJkZWxldGVGdW5jdGlvbiIsImlkIiwiaW5kZXgiLCJjb3VudGVyIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJvYmpTZXR0aW5ncyIsInByb3h5VXJsIiwia2V5QXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQWRkcmVzcyIsImxpc3RBdXRvY29tcGxldGUiLCJsaXN0QWRyZXNzZXMiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJlbGVtQWRkcmVzcyIsImNsaWNrRXZlbnQiLCJzZWxmIiwialF1ZXJ5IiwibmFtZSIsInBvaW50IiwiUG9pbnQiLCJwb3MiLCJpbmNsdWRlcyIsInNldFJvdXRlRnJvbSIsInNldFJvdXRlVG8iLCJhZGRPdmVyUG9pbnQiLCJzZXRBcmVhUG9pbnQiLCJsaXN0SXRlbSIsInB1c2giLCJjZW50ZXIiLCJpbnB1dCIsImNzc0NsYXNzIiwic2V0dGluZ3MiLCJvYmpDZW50ZXIiLCJiQm94IiwicGFyc2VGbG9hdCIsInVybCIsImdlb3NlYXJjaFBhcmFtcyIsInBhcmFtIiwicmVzdWx0Q291bnQiLCJhamF4IiwiZG9uZSIsImRhdGEiLCJkaXNwbGF5X25hbWUiLCJpc0luQm91bmRpbmdCb3giLCJsb24iLCJsYXQiLCJkaXN0YW5jZSIsInNxcnQiLCJlbGVtZW50IiwiZm91bmRJbmRleCIsImZpbmRJbmRleCIsImZpbmRFbGVtZW50Iiwic29ydCIsImEiLCJiIiwiZGlzdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiYmJveCIsIkNvbXBvbmVudCIsIkhvcml6b250YWxQYW5lbCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsImFwcGVuZENoaWxkIiwiY2xpY2tDb250cm9sIiwib24iLCJtYXBDb250cm9sbGVyIiwiY29udHJvbCIsIkNvbnRyb2wiLCJtYXAiLCJhZGRDb250cm9sIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjc3NDb25zdGFudHMiLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIk9MX1VOU0VMRUNUQUJMRSIsInN0eWxlIiwidG9wIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsImJvdHRvbSIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiY29udGVudCIsIlJvdXRlckFkZHJlc3NGaWVsZCIsImxhbmd1YWdlQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJnZXRQb3NpdGlvbiIsInJlbW92ZUNvbnRlbnQiLCJtYXBEYXRhIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbERlc3RpbmF0aW9uIiwic2V0VG9DZW50ZXIiLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwiY29vcmRpbmF0ZXMiLCJjb29yZHMiLCJ0cmFuc2Zvcm0iLCJoYW5kbGVQb3NpdGlvbiIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsImxheWVyX2xvYWRlZCIsInBvc2l0aW9uQnV0dG9uIiwid2l0aFBvc2l0aW9uIiwiUk9VVEVfUE9TSVRJT04iLCJsYWJlbCIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwiUkVNT1ZFX0FERFJFU1MiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwicmVjYWxjdWxhdGVSb3V0ZSIsIlJvdXRlckFkZHJlc3NJbnB1dCIsImxhbmciLCJsYW5nQ29uc3RhbnRzIiwicm91dGluZ0NvbnN0YW50c0dlcm1hbiIsInJvdXRpbmdDb25zdGFudHNFbmdsaXNoIiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsIk9iamVjdCIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImZyb21DbHNBZGRpdGlvbiIsInRvQ2xzQWRkaXRpb24iLCJhcmVhQ2xzQWRkaXRpb24iLCJzd2FwRnVuY3Rpb24iLCJzd2FwUG9pbnRzIiwidG1wRnJvbSIsInN3YXBCdXR0b24iLCJzd2l0Y2hUYXJnZXRzIiwib3ZlckJ1dHRvbiIsIm92ZXJGdW5jdGlvbiIsImlkeCIsIlJPVVRFUl9GUk9NIiwiZnJvbUZ1bmN0aW9ucyIsInJlc2V0RnVuY3Rpb25zIiwiZnJvbSIsImZyb21BZGRyZXNzIiwiUk9VVEVSX1RPIiwidG9GdW5jdGlvbnMiLCJ0byIsInRvQWRkcmVzcyIsIlJPVVRFUl9DRU5URVIiLCJhcmVhRnVuY3Rpb25zIiwiYXJlYSIsImFyZWFBZGRyZXNzIiwiZGV0YWlscyIsImZlYXR1cmVTZWFyY2hDb250cm9scyIsInNob3dGZWF0dXJlcyIsImxheWVycyIsImxheWVyVmFsdWVSb3V0ZSIsImxheWVyVmFsdWVBcmVhIiwic2xpZGVyT3B0aW9ucyIsIm1pbiIsIm1heCIsInN0YXJ0QnV0dG9uIiwicm91dGVTdGFydEJ1dHRvbiIsIlNUQVJUX1JPVVRFIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsImxhenkiLCJSb3V0ZXJDb250cm9scyIsInNob3dGb3JtIiwic2V0Um91dGVNb2RlIiwic2V0QXJlYU1vZGUiLCJyb3V0ZXJfZGl2IiwicXVlcnlTZWxlY3RvciIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsIm1vZGVTd2l0Y2hlciIsInByb2ZpbGVzIiwiY3VycmVudFByb2ZpbGUiLCJoZWFkbGluZSIsInRvZ2dsZURldGFpbHMiLCJ0b3BWYWx1ZSIsImNvbnRhaW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvZmZzZXRIZWlnaHQiLCJzZXRPcGVuIiwicm91dGVyQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImV2dCIsImhpZGRlbiIsIlJvdXRlckRldG91clNsaWRlciIsInVwZGF0ZWQiLCJyb3V0aW5nQ29uc3RhbnRzIiwiUk9VVEVfVE9HR0xFIiwicmFuZ2UiLCJhdHRyIiwicG9zT2Zmc2V0Iiwicm91bmQiLCJvdXRwdXQiLCJuZXh0IiwiY3NzIiwidGV4dCIsInVzZVBlcm1hbGluayIsInBlcm1hbGluayIsInVwZGF0ZUxpbmtGcmFnbWVudHMiLCJkZXRvdXJSb3V0ZSIsImRldG91ckFyZWEiLCJhcmVhVmFsdWUiLCJST1VURV9ERVRPVVIiLCJPVVRQVVRfREVUT1VSIiwiUm91dGVyTGF5ZXJTZWxlY3Rpb24iLCJzZXRMYXllciIsInNldExheWVyVmFsdWUiLCJsYXllciIsInBhcnNlSW50IiwiZGVmYXVsdExheWVyIiwibGF5ZXJSb3V0ZSIsImxheWVyQXJlYSIsImFyckxheWVycyIsIm9iakxheWVycyIsImxheWVyVmFsdWVTZWxlY3Rpb24iLCJhY3RpdmVMYXllclZhbHVlIiwibWFwTGFiZWwiLCJsYXllckRhdGEiLCJzZXRQcm9maWxlIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwicHJvZmlsZUxhbmciLCJDQVIiLCJUUlVDSyIsIkJJS0UiLCJST0FEQklLRSIsIk1PVU5UQUlOQklLRSIsIkVMRUNUUklDQklLRSIsIldBTEsiLCJXQU5ERVIiLCJXSEVFTCIsIlNDT09UIiwiTU9UT1JCSUtFIiwic2hvd1BvcHVwIiwicm91dGVyX3Byb2ZpbGVzX2luaXRpYWwiLCJwcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==