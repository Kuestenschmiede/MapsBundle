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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var AutocompleteInput = exports.AutocompleteInput = /*#__PURE__*/function (_Component) {
  function AutocompleteInput(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AutocompleteInput);
    _this = _callSuper(this, AutocompleteInput, [props]);
    _this.listenerRegistered = false;
    _this.state = {
      arrAddresses: []
    };
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(AutocompleteInput, _Component);
  return (0, _createClass2["default"])(AutocompleteInput, [{
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
        var _loop = function _loop() {
          if (_this2.state.arrAddresses.hasOwnProperty(i)) {
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
          }
        };
        for (var i in this.state.arrAddresses) {
          _loop();
        }
        listAutocomplete = /*#__PURE__*/_react["default"].createElement("ul", {
          className: "c4g-autocomplete"
        }, listAdresses);
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'c4g-autocomplete-wrapper',
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
        var _this3 = this;
        var center;
        if (settings.center) {
          center = settings.center;
        } else if (settings.bBox) {
          center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
        }
        if (data.length > 0) {
          var arrAddresses = [];
          if (settings.bBox && settings.bBox[0] && data[0] && data[0].display_name && center) {
            var _loop2 = function _loop2() {
              if (data.hasOwnProperty(i)) {
                if (_this3.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
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
                }
              }
            };
            // $(cssId).val(data[0].display_name);
            for (var i in data) {
              _loop2();
            }
            arrAddresses.sort(function (a, b) {
              return a.dist - b.dist;
            });
          } else if (data[0] && data[0].display_name) {
            var _loop3 = function _loop3() {
              if (data.hasOwnProperty(_i)) {
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
              }
            };
            for (var _i in data) {
              _loop3();
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
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var HorizontalPanel = exports.HorizontalPanel = /*#__PURE__*/function (_Component) {
  function HorizontalPanel(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, HorizontalPanel);
    _this = _callSuper(this, HorizontalPanel, [props]);
    var scope = _this;
    // create control to toggle the panel
    _this.element = document.createElement('div');
    var button = document.createElement('button');
    if (props.title) {
      button.title = props.title;
    }
    _this.element.className = (props.className || "c4g-horizontal-panel") + "-button-" + (props.direction || "top") + " ol-control " + "ol-unselectable";
    _this.element.appendChild(button);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = props.title;
      button.appendChild(span);
    } else {
      button.title = props.title;
    }
    _this.clickControl = _this.clickControl.bind(_this);
    jQuery(button).on('click', _this.clickControl);
    var mapController = props.mapController;
    var control = new _control.Control({
      element: _this.element,
      target: props.target
    });
    _this.control = control;
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
  (0, _inherits2["default"])(HorizontalPanel, _Component);
  return (0, _createClass2["default"])(HorizontalPanel, [{
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
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "./src/Resources/public/js/components/c4g-autocomplete-input.jsx");
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterAddressField = exports.RouterAddressField = /*#__PURE__*/function (_Component) {
  function RouterAddressField(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterAddressField);
    _this = _callSuper(this, RouterAddressField, [props]);
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(_this.props.router.props.mapController.data);
    _this.getPosition = _this.getPosition.bind(_this);
    _this.removeContent = _this.removeContent.bind(_this);
    if (props.router.mapData.initialPosition && (props.name === "routingFrom" || props.name === "areaInput")) {
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
  (0, _inherits2["default"])(RouterAddressField, _Component);
  return (0, _createClass2["default"])(RouterAddressField, [{
    key: "render",
    value: function render() {
      var positionButton = null;
      if (this.props.withPosition) {
        positionButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn-primary c4g-router-position",
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
        className: "btn-primary c4g-router-input-clear",
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
      if (this.props.name === "areaInput") {
        this.props.router.setAreaPoint(coords.longitude, coords.latitude);
      }
      this.props.router.recalculateRoute();
    }
  }]);
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gRouterAddressField = __webpack_require__(/*! ./c4g-router-address-field.jsx */ "./src/Resources/public/js/components/c4g-router-address-field.jsx");
var _c4gRouterProfileSelection = __webpack_require__(/*! ./c4g-router-profile-selection.jsx */ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx");
var _c4gRouterLayerSelection = __webpack_require__(/*! ./c4g-router-layer-selection.jsx */ "./src/Resources/public/js/components/c4g-router-layer-selection.jsx");
var _c4gRouterDetourSlider = __webpack_require__(/*! ./c4g-router-detour-slider.jsx */ "./src/Resources/public/js/components/c4g-router-detour-slider.jsx");
var _routingConstantI18nDe = __webpack_require__(/*! ../routing-constant-i18n-de */ "./src/Resources/public/js/routing-constant-i18n-de.js");
var _routingConstantI18nEn = __webpack_require__(/*! ../routing-constant-i18n-en */ "./src/Resources/public/js/routing-constant-i18n-en.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterAddressInput = exports.RouterAddressInput = /*#__PURE__*/function (_Component) {
  function RouterAddressInput(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterAddressInput);
    _this = _callSuper(this, RouterAddressInput, [props]);
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
  (0, _inherits2["default"])(RouterAddressInput, _Component);
  return (0, _createClass2["default"])(RouterAddressInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var input = null;
      var scope = this;
      var overForm = "";
      if (this.props.enableOverPoints && this.props.mode === "route") {
        overForm = Object.keys(this.props.overSettings.overPoints).map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_c4gRouterAddressField.RouterAddressField, {
            className: "btn-primary c4g-router-input-over c4g-router-input-over-" + item,
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
        name: "areaInput",
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
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gHorizontalPanel = __webpack_require__(/*! ./c4g-horizontal-panel.jsx */ "./src/Resources/public/js/components/c4g-horizontal-panel.jsx");
var _c4gRouterAddressInput = __webpack_require__(/*! ./c4g-router-address-input.jsx */ "./src/Resources/public/js/components/c4g-router-address-input.jsx");
var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx");
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterProfileSelection = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-profile-selection.jsx */ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx"));
});
var RouterControls = exports["default"] = /*#__PURE__*/function (_HorizontalPanel) {
  function RouterControls(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterControls);
    _this = _callSuper(this, RouterControls, [props]);
    _this.state.router = _this.props.router;
    _this.state.showForm = true;
    _this.setRouteMode = _this.setRouteMode.bind(_this);
    _this.setAreaMode = _this.setAreaMode.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.langConstants = (0, _routingConstantI18n.getLanguage)(props.mapController.data);
    var index = props.mapController.arrComponents.findIndex(function (element) {
      return element.name === "router";
    });
    props.mapController.arrComponents[index].control = _this.control;
    if (props.mapController.data.router_div && _this.element && _this.element.className) {
      _this.element.className += " c4g-external";
    }
    return _this;
  }
  (0, _inherits2["default"])(RouterControls, _HorizontalPanel);
  return (0, _createClass2["default"])(RouterControls, [{
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
}(_c4gHorizontalPanel.HorizontalPanel);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _routingConstants = __webpack_require__(/*! ../routing-constants */ "./src/Resources/public/js/routing-constants.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterDetourSlider = exports.RouterDetourSlider = /*#__PURE__*/function (_Component) {
  function RouterDetourSlider(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterDetourSlider);
    _this = _callSuper(this, RouterDetourSlider, [props]);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.updated = false;
    return _this;
  }
  (0, _inherits2["default"])(RouterDetourSlider, _Component);
  return (0, _createClass2["default"])(RouterDetourSlider, [{
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
      var detourElement = null;
      if (!this.props.router.props.mapController.data.detourElement) {
        detourElement = /*#__PURE__*/_react["default"].createElement("div", {
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
      } else {
        var arrOptions = scope.props.router.state.mode === "route" ? this.props.router.props.mapController.data.arrDetourOptionsRoute : this.props.router.props.mapController.data.arrDetourOptionsArea;
        var options = arrOptions.map(function (elem) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: elem,
            value: elem
          }, elem, " km");
        });
        detourElement = /*#__PURE__*/_react["default"].createElement("select", {
          className: "c4g-detour-selection",
          onChange: this.handleChange,
          value: this.props.value
        }, options);
      }
      return detourElement;
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
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;
      var value = event.target.value;
      if (this.props.router.state.mode === "route") {
        this.props.router.setState({
          detourRoute: value
        }, this.props.router.recalculateRoute);
      } else {
        this.props.router.setState({
          detourArea: value
        }, function () {
          _this2.props.router.performArea(_this2.props.router.state.areaValue);
        });
      }
    }
  }]);
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterLayerSelection = exports.RouterLayerSelection = /*#__PURE__*/function (_Component) {
  function RouterLayerSelection(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterLayerSelection);
    _this = _callSuper(this, RouterLayerSelection, [props]);
    _this.setLayer = _this.setLayer.bind(_this);
    _this.setLayerValue = _this.setLayerValue.bind(_this);
    _this.setLayerOrValue = _this.setLayerOrValue.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(RouterLayerSelection, _Component);
  return (0, _createClass2["default"])(RouterLayerSelection, [{
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
    key: "setLayerOrValue",
    value: function setLayerOrValue(event) {
      var value = JSON.parse(event.target.value);
      var currentLayer = this.props.router.state.mode === "route" ? this.props.router.state.layerRoute : this.props.router.state.layerArea;
      if (parseInt(value.id) !== parseInt(currentLayer)) {
        this.props.router.setLayer(parseInt(value.id, 10));
      }
      this.props.router.setLayerValue(value.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var defaultLayer = 0;
      var arrLayers = scope.props.router.objLayers;
      var layerValueSelection = "";
      if (!this.props.router.props.mapController.data.layerChanger) {
        if (this.props.router.state.mode === "route") {
          defaultLayer = this.props.router.state.layerRoute;
        } else if (this.props.router.state.mode === "area") {
          defaultLayer = this.props.router.state.layerArea;
        }
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
            value: defaultLayer
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
      } else {
        if (this.props.router.state.mode === "route") {
          defaultLayer = JSON.stringify({
            id: this.props.router.state.layerRoute,
            name: this.props.router.state.layerValueRoute
          });
        } else if (this.props.router.state.mode === "area") {
          defaultLayer = JSON.stringify({
            id: this.props.router.state.layerArea,
            name: this.props.router.state.layerValueArea
          });
        }
        var options = [];
        if (Object.keys(this.props.layers).length > 1) {
          options = Object.keys(this.props.layers).map(function (id) {
            var layer = arrLayers[id].layerData;
            if (Object.keys(_this2.props.layers[id]).length > 1) {
              return /*#__PURE__*/_react["default"].createElement("optgroup", {
                key: id,
                style: {
                  color: "var(--main-color)"
                },
                label: layer.name
              }, Object.keys(_this2.props.layers[id]).map(function (name) {
                var option = _this2.props.layers[id][name];
                return /*#__PURE__*/_react["default"].createElement("option", {
                  key: name,
                  style: {
                    color: "var(--main-color)"
                  },
                  value: JSON.stringify({
                    id: id,
                    name: name
                  })
                }, name);
              }));
            } else {
              return Object.keys(_this2.props.layers[id]).map(function (name) {
                var option = _this2.props.layers[id][name];
                return /*#__PURE__*/_react["default"].createElement("option", {
                  key: name,
                  style: {
                    color: "var(--main-color)"
                  },
                  value: JSON.stringify({
                    id: id,
                    name: name
                  })
                }, name);
              });
            }
          });
        } else {
          options = Object.keys(this.props.layers).map(function (id) {
            var layer = arrLayers[id].layerData;
            return Object.keys(_this2.props.layers[id]).map(function (name) {
              var option = _this2.props.layers[id][name];
              return /*#__PURE__*/_react["default"].createElement("option", {
                key: name,
                style: {
                  color: "var(--main-color)"
                },
                value: JSON.stringify({
                  id: id,
                  name: name
                })
              }, name);
            });
          });
        }
        return /*#__PURE__*/_react["default"].createElement("select", {
          className: "c4g-router-layer-selection",
          onChange: this.setLayerOrValue,
          value: defaultLayer
        }, options);
      }
    }
  }]);
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./src/Resources/public/js/routing-constant-i18n.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RouterProfileSelection = exports["default"] = /*#__PURE__*/function (_Component) {
  function RouterProfileSelection(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterProfileSelection);
    _this = _callSuper(this, RouterProfileSelection, [props]);
    _this.setProfile = _this.setProfile.bind(_this);
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
  (0, _inherits2["default"])(RouterProfileSelection, _Component);
  return (0, _createClass2["default"])(RouterProfileSelection, [{
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
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWNvbnRyb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFELG1CQUFBO0FBQThCLFNBQUFFLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBSix3QkFBQUksQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxDQUFBLFNBQUFHLENBQUEsR0FBQVAsQ0FBQSxHQUFBQyxNQUFBLENBQUFFLHdCQUFBLENBQUFiLENBQUEsRUFBQWMsQ0FBQSxVQUFBRyxDQUFBLEtBQUFBLENBQUEsQ0FBQVYsR0FBQSxJQUFBVSxDQUFBLENBQUFDLEdBQUEsSUFBQVAsTUFBQSxDQUFB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QzFJLElBQUksQ0FBQ3JLLEVBQUUsQ0FBQztZQUFFLENBQUMsQ0FBQztVQUMzRixDQUFDLENBQ0UsQ0FBQztRQUVWLENBQUMsTUFBTTtVQUNMLG9CQUFRdEYsTUFBQSxZQUFBbUgsYUFBQTtZQUFLQyxTQUFTLEVBQUM7VUFBNEIsZ0JBQ2pEcEgsTUFBQSxZQUFBbUgsYUFBQTtZQUFRRSxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBQTtjQUFBLE9BQVFwRCxNQUFJLENBQUNGLFFBQVEsQ0FBQztnQkFBQ21WLFNBQVMsRUFBRTtjQUFJLENBQUMsQ0FBQztZQUFBLENBQUM7WUFBQzlSLFNBQVMsRUFBRSxxQkFBcUIsR0FBRyxJQUFJLENBQUNpUixrQkFBa0IsQ0FBQyxJQUFJLENBQUM5VixLQUFLLENBQUNxUixjQUFjLENBQUMsR0FBRyxhQUFjO1lBQ3pKeFEsR0FBRyxFQUFFLElBQUksQ0FBQ2IsS0FBSyxDQUFDcVIsY0FBZTtZQUFDekosS0FBSyxFQUFFLElBQUksQ0FBQ21PLFdBQVcsQ0FBQyxJQUFJLENBQUNELGtCQUFrQixDQUFDLElBQUksQ0FBQzlWLEtBQUssQ0FBQ3FSLGNBQWMsQ0FBQztVQUFFLENBQUMsQ0FDbEgsQ0FBQztRQUNSO01BRUY7SUFDRjtFQUFDO0lBQUF4USxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ1csb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBSSxDQUFDdFYsUUFBUSxDQUFDO1FBQUNtVixTQUFTLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFDbEM7RUFBQztBQUFBLEVBL0VpRHBQLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWhvcml6b250YWwtcGFuZWwuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItYWRkcmVzcy1maWVsZC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWlucHV0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJSZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGVydCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgIGZpZWxkLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgbGV0IHBlcmZvcm1TZWFyY2hDYWxsYmFjaztcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKFwiYXJlYVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiYXJlYVZhbHVlXCI7XG4gICAgICAgICAgICAgICAgcGVyZm9ybVNlYXJjaENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChzY29wZS5wcm9wcy5jc3NJZC5pbmRleE9mKCdGcm9tJykgIT09IC0xKSA/IFwiZnJvbVZhbHVlXCIgOiBcInRvVmFsdWVcIjtcbiAgICAgICAgICAgICAgICBwZXJmb3JtU2VhcmNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtVmlhUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIHBlcmZvcm1TZWFyY2hDYWxsYmFjayk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGVudGVyTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdF90aGlzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS5sZW5ndGggPT09IDAgJiYgIWV2ZW50LmtleUNvZGUpIHsgLy9kZWxldGVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2NvcGUucHJvcHMub2JqRnVuY3Rpb25zLmRlbGV0ZUZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9ucy5kZWxldGVGdW5jdGlvbihldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXIgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnNbc2NvcGUucHJvcHMuaW5kZXhdLmRlbGV0ZUZ1bmN0aW9uKGV2ZW50LmN1cnJlbnRUYXJnZXQsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY291bnRlciA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDQwMCA8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGUuY291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZihcImFyZWFcIikgIT09IC0xKSA/IFwiYXJlYVZhbHVlXCIgOiAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZignRnJvbScpICE9PSAtMSkgPyBcImZyb21WYWx1ZVwiIDogXCJ0b1ZhbHVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm9ialNldHRpbmdzLnByb3h5VXJsIHx8ICFzY29wZS5wcm9wcy5vYmpTZXR0aW5ncy5rZXlBdXRvY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1TZWFyY2goZmllbGQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVNlYXJjaChmaWVsZCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuYXV0b2NvbXBsZXRlQWRkcmVzcygkKFwiI1wiICsgc2NvcGUucHJvcHMuY3NzSWQpLnZhbCgpLCBcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgbGlzdEF1dG9jb21wbGV0ZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckFkZHJlc3NlcyAmJiB0aGlzLnN0YXRlLmFyckFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGlzdEFkcmVzc2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtQWRkcmVzcyA9IHRoaXMuc3RhdGUuYXJyQWRkcmVzc2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpY2tFdmVudCA9IChzZWxmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjXCIgKyBzZWxmLnByb3BzLmNzc0lkKS52YWwoZWxlbUFkZHJlc3MubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoW2VsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIkZyb21cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5zZXRSb3V0ZUZyb20oZWxlbUFkZHJlc3MucG9zWzFdLCBlbGVtQWRkcmVzcy5wb3NbMF0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnByb3BzLmNzc0lkLmluY2x1ZGVzKFwiVG9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5zZXRSb3V0ZVRvKGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIk92ZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnJvdXRlci5hZGRPdmVyUG9pbnQoZWxlbUFkZHJlc3MucG9zWzFdLCBlbGVtQWRkcmVzcy5wb3NbMF0sIHNlbGYucHJvcHMuaW5kZXgsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYucHJvcHMuY3NzSWQuaW5jbHVkZXMoXCJhcmVhXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3NlczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gPGxpIGtleT17aX0gY2xhc3NOYW1lPXtcImM0Zy1hdXRvY29tcGxldGUtaXRlbVwifSBvbk1vdXNlVXA9eyhldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50KHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICB9KX0+e2VsZW1BZGRyZXNzLm5hbWV9PC9saT47XG4gICAgICAgICAgICAgICAgICAgIGxpc3RBZHJlc3Nlcy5wdXNoKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0QXV0b2NvbXBsZXRlID0gPHVsIGNsYXNzTmFtZT17XCJjNGctYXV0b2NvbXBsZXRlXCJ9PntsaXN0QWRyZXNzZXN9PC91bD5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjNGctYXV0b2NvbXBsZXRlLXdyYXBwZXInfSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPXt0aGlzLnByb3BzLmNzc0lkfSB0eXBlPVwic2VhcmNoXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbktleURvd249e2VudGVyTGlzdGVuZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICB7bGlzdEF1dG9jb21wbGV0ZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNldENlbnRlcihjZW50ZXIpIHtcbiAgICAgICAgdGhpcy5vYmpTZXR0aW5ncy5jZW50ZXIgPSBjZW50ZXI7XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlQWRkcmVzcyhpbnB1dCwgY3NzQ2xhc3MpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHNjb3BlLnByb3BzLm9ialNldHRpbmdzO1xuICAgICAgICBsZXQgY2VudGVyO1xuICAgICAgICBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmNlbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iakNlbnRlciA9IHNldHRpbmdzLmNlbnRlcigpO1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IG9iakNlbnRlclswXSArIFwiLFwiICsgb2JqQ2VudGVyWzFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXJbMF0gKyBcIixcIiArIHNldHRpbmdzLmNlbnRlclsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5ncy5iQm94KSB7XG4gICAgICAgICAgICBjZW50ZXIgPSAocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiArIFwiLFwiICsgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYgKGNlbnRlcikge1xuICAgICAgICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0ICsgXCImY2VudGVyPVwiICsgY2VudGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gc2V0dGluZ3MucHJveHlVcmwgKyBcImF1dG9jb21wbGV0ZS5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgc2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlICsgXCImcT1cIiArIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBhcmFtIGluIHNldHRpbmdzLmdlb3NlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSBcIiZcIiArIHBhcmFtICsgXCI9XCIgKyBzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MucmVzdWx0Q291bnQpIHtcbiAgICAgICAgICAgIHVybCArPSBcIiZsaW1pdD1cIiArIHNldHRpbmdzLnJlc3VsdENvdW50O1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyO1xuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IHNldHRpbmdzLmNlbnRlcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYkJveCkge1xuICAgICAgICAgICAgICAgIGNlbnRlciA9IFsocGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsyXSkpIC8gMiwgKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbM10pKSAvIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJBZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuYkJveCAmJiBzZXR0aW5ncy5iQm94WzBdICYmIGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUgJiYgY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0luQm91bmRpbmdCb3goZGF0YVtpXS5sb24sIGRhdGFbaV0ubGF0LCBzZXR0aW5ncy5iQm94KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGNlbnRlclswXSAtIGRhdGFbaV0ubG9uKSAqIChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKyAoY2VudGVyWzFdIC0gZGF0YVtpXS5sYXQpICogKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3QnOiBkaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3MnOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogZGF0YVtpXS5kaXNwbGF5X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBhcnJBZGRyZXNzZXMuZmluZEluZGV4KChmaW5kRWxlbWVudCkgPT4gZmluZEVsZW1lbnQubmFtZSA9PT0gZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyckFkZHJlc3Nlcy5zb3J0KChhLCBiKSA9PiBhLmRpc3QgLSBiLmRpc3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb3MnOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBkYXRhW2ldLmRpc3BsYXlfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvdW5kSW5kZXggPSBhcnJBZGRyZXNzZXMuZmluZEluZGV4KChmaW5kRWxlbWVudCkgPT4gZmluZEVsZW1lbnQubmFtZSA9PT0gZWxlbWVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IGFyckFkZHJlc3Nlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0luQm91bmRpbmdCb3gobG9uZ2l0dWRlLCBsYXRpdHVkZSwgYmJveCkge1xuICAgICAgICBpZiAodHlwZW9mIGxvbmdpdHVkZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChsb25naXR1ZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGF0aXR1ZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGxhdGl0dWRlID0gcGFyc2VGbG9hdChsYXRpdHVkZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJib3hbMF0gPCBsb25naXR1ZGUgJiZcbiAgICAgICAgICAgIGxvbmdpdHVkZSA8IGJib3hbMl0gJiZcbiAgICAgICAgICAgIGJib3hbMV0gPCBsYXRpdHVkZSAmJlxuICAgICAgICAgICAgbGF0aXR1ZGUgPCBiYm94WzNdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gKHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIpICsgXCItYnV0dG9uLVwiICsgKHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiKSArIFwiIG9sLWNvbnRyb2wgXCIgKyBcIm9sLXVuc2VsZWN0YWJsZVwiO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHByb3BzLnRpdGxlO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmNsaWNrQ29udHJvbCA9IHRoaXMuY2xpY2tDb250cm9sLmJpbmQodGhpcyk7XG4gICAgalF1ZXJ5KGJ1dHRvbikub24oJ2NsaWNrJywgdGhpcy5jbGlja0NvbnRyb2wpO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiB0aGlzLmVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcyAoKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY29wZS5zdGF0ZS5jaGlsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgdG9wVmFsdWUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSAtIDEwMDtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuc3R5bGUudG9wID0gdG9wVmFsdWUgKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIEhUTUwgY29udGVudCB0byB0aGUgcGFuZWwuXG4gICAqIEBwYXJhbSBjb250ZW50ICAgTXVzdCBiZSBhIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuc3RhdGUuY2hpbGRzLnB1c2goY29udGVudCk7XG4gIH1cblxuXG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBdXRvY29tcGxldGVJbnB1dH0gZnJvbSBcIi4vYzRnLWF1dG9jb21wbGV0ZS1pbnB1dC5qc3hcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmltcG9ydCB7dHJhbnNmb3JtfSBmcm9tIFwib2wvcHJvalwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyQWRkcmVzc0ZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGFuZ3VhZ2VDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNvbnRlbnQgPSB0aGlzLnJlbW92ZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgICBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbFBvc2l0aW9uICYmIChwcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIgfHwgcHJvcHMubmFtZSA9PT0gXCJhcmVhSW5wdXRcIikpIHtcbiAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucm91dGVyLm1hcERhdGEuaW5pdGlhbERlc3RpbmF0aW9uICYmIHByb3BzLm5hbWUgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgIGxldCBzZXRUb0NlbnRlciA9IChkYXRhKT0+IHtcbiAgICAgICAgbGV0IGNlbnRlciA9IHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZ2V0Q2VudGVyKCk7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMgPSB7fTtcbiAgICAgICAgY29vcmRpbmF0ZXMuY29vcmRzLmxvbmdpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzBdO1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubGF0aXR1ZGUgPSB0cmFuc2Zvcm0oY2VudGVyLCBcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKVsxXTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQucHVzaChzZXRUb0NlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwb3NpdGlvbkJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMud2l0aFBvc2l0aW9uKSB7XG4gICAgICBwb3NpdGlvbkJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgYzRnLXJvdXRlci1wb3NpdGlvblwiIG9uTW91c2VVcD17dGhpcy5nZXRQb3NpdGlvbn0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9VVEVfUE9TSVRJT059Lz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5uYW1lfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICB7cG9zaXRpb25CdXR0b259XG4gICAgICAgIDxBdXRvY29tcGxldGVJbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD17dGhpcy5wcm9wcy5jc3NJZH0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IHBvcHVwPXt0aGlzLnByb3BzLnBvcHVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IGluZGV4PXt0aGlzLnByb3BzLmluZGV4fS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0bi1wcmltYXJ5IGM0Zy1yb3V0ZXItaW5wdXQtY2xlYXJcIn0gb25Nb3VzZVVwPXt0aGlzLnJlbW92ZUNvbnRlbnR9IHRpdGxlPXt0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLlJFTU9WRV9BRERSRVNTfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlQ29udGVudChldmVudCkge1xuICAgIGpRdWVyeShcIiNcIiArIHRoaXMucHJvcHMuY3NzSWQpLnZhbCgnJyk7XG4gICAgdGhpcy5wcm9wcy5jbGVhcklucHV0KGV2ZW50KTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaGFuZGxlTmV3UG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICBzY29wZS5oYW5kbGVQb3NpdGlvbihwb3MpO1xuICAgIH07XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVOZXdQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnZW9sb2NhdGlvbiBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIENvbnNpZGVyIHVwZGF0aW5nIGl0IG9yIHN3aXRjaGluZyB0byBhIG5ld2VyIGJyb3dzZXIuXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyB0aGUgaW5wdXQgY29vcmRpbmF0ZXMgYW5kIGV4ZWN1dGVzIHRoZSByZXZlcnNlIHNlYXJjaC4gT24gc3VjY2VzcywgdGhlIHJlc3VsdCBsb2NhdGlvbiBpcyBpbnNlcnRlZCBpbiB0aGVcbiAgICogZ2l2ZW4gaW5wdXQgZmllbGQgYW5kIHRoZSBnaXZlbiBwcm9wZXJ0eSBvZiB0aGlzLlxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcbiAgICovXG4gIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGNvb3JkcyA9IGNvb3JkaW5hdGVzLmNvb3JkcztcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcInJvdXRpbmdGcm9tXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlRnJvbShjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwib3ZlclZhbHVlXCIpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ1RvXCIpIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFJvdXRlVG8oY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJhcmVhSW5wdXRcIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0QXJlYVBvaW50KGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXJBZGRyZXNzRmllbGQgfSBmcm9tIFwiLi9jNGctcm91dGVyLWFkZHJlc3MtZmllbGQuanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1wcm9maWxlLXNlbGVjdGlvbi5qc3hcIjtcbmltcG9ydCB7IFJvdXRlckxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJEZXRvdXJTbGlkZXIgfSBmcm9tIFwiLi9jNGctcm91dGVyLWRldG91ci1zbGlkZXIuanN4XCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuLi9yb3V0aW5nLWNvbnN0YW50LWkxOG4tZW5cIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckFkZHJlc3NJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoIXByb3BzLnJvdXRlcikge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIHJvdXRpbmcgY29tcG9uZW50IG5lZWRzIGEgcm91dGVyLCBpdCB3b24ndCB3b3JrIGNvcnJlY3RseSBzaW5jZSBub25lIHdhcyBwYXNzZWQuLi5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvdXRlcjogcHJvcHMucm91dGVyLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IHJvdXRpbmdDb25zdGFudHNHZXJtYW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmYWxsYmFja1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBsZXQgb3ZlckZvcm0gPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuXG5cbiAgICAgIG92ZXJGb3JtID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vdmVyU2V0dGluZ3Mub3ZlclBvaW50cykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImJ0bi1wcmltYXJ5IGM0Zy1yb3V0ZXItaW5wdXQtb3ZlciBjNGctcm91dGVyLWlucHV0LW92ZXItXCIgKyBpdGVtfSBuYW1lPXtcIm92ZXJQb2ludC1cIiArIGl0ZW19IGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0xhYmVsX0ludGVyaW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9e1wicm91dGluZ092ZXItXCIgKyBpdGVtfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gdmFsdWU9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJBZGRyZXNzZXNbaXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0ga2V5PXtpdGVtfSBpbmRleD17aXRlbX0gY2xlYXJJbnB1dD17KCkgPT4ge3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm9iakZ1bmN0aW9uc1tpdGVtXS5kZWxldGVGdW5jdGlvbigpO319Lz5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGZyb21DbHNBZGRpdGlvbiA9IFwiXCI7XG4gICAgbGV0IHRvQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCBhcmVhQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgYXJlYUNsc0FkZGl0aW9uID0gXCIgaW52aXNpYmxlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgICAgdG9DbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUucHJvcHMub3ZlclNldHRpbmdzLnN3YXBQb2ludHMoKTtcbiAgICAgIGNvbnN0IHRtcEZyb20gPSBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKCk7XG4gICAgICBqUXVlcnkoXCIjcm91dGluZ0Zyb21cIikudmFsKGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKCkpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdUb1wiKS52YWwodG1wRnJvbSk7XG4gICAgfTtcbiAgICBsZXQgc3dhcEJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuc3dpdGNoVGFyZ2V0cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgc3dhcEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1zd2l0Y2hcIiBvbk1vdXNlVXA9e3N3YXBGdW5jdGlvbn0gLz47XG4gICAgfVxuICAgIGxldCBvdmVyQnV0dG9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzICYmIHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBvdmVyQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJjNGctcm91dGVyLW92ZXJcIiBvbk1vdXNlVXA9e3RoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJGdW5jdGlvbn0gLz47XG4gICAgfVxuXG4gICAgbGV0IGlkeCA9IHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMubGVuZ3RoICsgMTtcblxuICAgIGlucHV0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1mcm9tXCIgKyBmcm9tQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nRnJvbVwiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX0ZST019IGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdGcm9tXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5mcm9tRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5mcm9tQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAge292ZXJGb3JtfVxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC10b1wiICsgdG9DbHNBZGRpdGlvbn0gbmFtZT1cInJvdXRpbmdUb1wiIGxhYmVsPXt0aGlzLmxhbmdDb25zdGFudHMuUk9VVEVSX1RPfSBrZXk9e2lkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwicm91dGluZ1RvXCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy50b0Z1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLnRvQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgICAgPFJvdXRlckFkZHJlc3NGaWVsZCBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1pbnB1dC1hcmVhXCIgKyBhcmVhQ2xzQWRkaXRpb259IG5hbWU9XCJhcmVhSW5wdXRcIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9DRU5URVJ9IGtleT17aWR4ICsgMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJhcmVhSW5wdXRcIiBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zLmFyZWFGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLmFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHdpdGhQb3NpdGlvbj17dGhpcy5wcm9wcy53aXRoUG9zaXRpb259IHZhbHVlPXt0aGlzLnByb3BzLmFyZWFBZGRyZXNzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfS8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD47XG5cbiAgICBsZXQgZGV0YWlscyA9IFwiXCI7XG4gICAgbGV0IGZlYXR1cmVTZWFyY2hDb250cm9scyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zaG93RmVhdHVyZXMgJiYgdGhpcy5wcm9wcy5sYXllcnMpIHtcbiAgICAgIGZlYXR1cmVTZWFyY2hDb250cm9scyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFJvdXRlckxheWVyU2VsZWN0aW9uIGxheWVycz17dGhpcy5wcm9wcy5sYXllcnN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGFjdGl2ZUxheWVyVmFsdWU9e3RoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgIDxSb3V0ZXJEZXRvdXJTbGlkZXIgbWluPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWlufSBtYXg9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5tYXh9IHZhbHVlPXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMudmFsdWV9IHJvdXRlcj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnJvdXRlcn0vPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICBkZXRhaWxzID0gPGRpdiBjbGFzc05hbWU9XCJidXR0b25iYXJcIj5cbiAgICAgICAge292ZXJCdXR0b259XG4gICAgICAgIHtzd2FwQnV0dG9ufVxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtmZWF0dXJlU2VhcmNoQ29udHJvbHN9XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIGxldCBzdGFydEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZVN0YXJ0QnV0dG9uKSB7XG4gICAgICBzdGFydEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZS1zZWFyY2gtc3RhcnRcIn0gb25Nb3VzZVVwPXt0aGlzLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlfT57dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJUX1JPVVRFfTwvYnV0dG9uPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHtzdGFydEJ1dHRvbn1cbiAgICAgICAgey8qe2RldGFpbEJ1dHRvbn0qL31cbiAgICAgICAge2RldGFpbHN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiXG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmNvbnN0IFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCcpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyQ29udHJvbHMgZXh0ZW5kcyBIb3Jpem9udGFsUGFuZWwge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZS5yb3V0ZXIgPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICB0aGlzLnN0YXRlLnNob3dGb3JtID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0Um91dGVNb2RlID0gdGhpcy5zZXRSb3V0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEFyZWFNb2RlID0gdGhpcy5zZXRBcmVhTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBpbmRleCA9IHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwicm91dGVyXCIpO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYgJiYgdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0Um91dGVNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcInJvdXRlXCIpO1xuICB9XG5cbiAgc2V0QXJlYU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwiYXJlYVwiKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiYzRnLXJvdXRlci1jb250ZW50XCIgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW4gXCIgOiBcIiBjNGctY2xvc2UgXCIpICsgdGhpcy5wcm9wcy5tb2RlO1xuICAgIC8vIHByb3BhZ2F0ZSBvcGVuIHN0YXRlIGRvd24gdG8gY2hpbGQgY29tcG9uZW50c1xuICAgIGxldCBvcGVuID0gdGhpcy5wcm9wcy5vcGVuO1xuICAgIGxldCBtb2RlU3dpdGNoZXIgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Zvcm0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLi5cIjwvZGl2Pn0+XG4gICAgICAgICAgICA8Um91dGVyUHJvZmlsZVNlbGVjdGlvbiBwcm9maWxlcz17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUucHJvZmlsZXN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5jdXJyZW50UHJvZmlsZX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPFJvdXRlckFkZHJlc3NJbnB1dCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWlucHV0LWNvbnRlbnRcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB3aXRoUG9zaXRpb249e3RydWV9IHN3aXRjaFRhcmdldHM9e3RoaXMucHJvcHMuc3dpdGNoVGFyZ2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjdXJyZW50UHJvZmlsZT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gZW5hYmxlT3ZlclBvaW50cz17dGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gbW9kZT17dGhpcy5wcm9wcy5tb2RlfSBvcGVuPXtvcGVufSBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByZXNldEZ1bmN0aW9ucz17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSB0b0FkZHJlc3M9e3RoaXMucHJvcHMudG9BZGRyZXNzfSBhcmVhQWRkcmVzcz17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gc2xpZGVyT3B0aW9ucz17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9IG92ZXJTZXR0aW5ncz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3N9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGVyXCJ9IGhlYWRlcj17aGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1leHRlbmRlZC1vcHRpb25zXCJ9IGRldGFpbEJ0bkNiPXt0aGlzLnRvZ2dsZURldGFpbHN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1oaWRlLWZvcm0tYnV0dG9uXCJ9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgMCArIFwicHhcIik7XG4gIH1cblxuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW5cIiA6IFwiIGM0Zy1jbG9zZVwiKTtcbiAgICBsZXQgdG9wVmFsdWUgPSAwO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdG9wVmFsdWUgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCB0b3BWYWx1ZSArIFwicHhcIik7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3Blbih0cnVlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4oZmFsc2UpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbChldnQpIHtcbiAgICBsZXQgaGlkZGVuID0gdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLm9wZW4pe1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7cm91dGluZ0NvbnN0YW50c30gZnJvbSBcIi4uL3JvdXRpbmctY29uc3RhbnRzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJEZXRvdXJTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGVsZW1lbnQub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICBsZXQgcmFuZ2UgPSBjb250cm9sLmF0dHIoJ21heCcpIC0gY29udHJvbC5hdHRyKCdtaW4nKTtcbiAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICBsZXQgb3V0cHV0ID0gY29udHJvbC5uZXh0KCdvdXRwdXQnKTtcbiAgICAgIG91dHB1dFxuICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAudGV4dChjb250cm9sLnZhbCgpICsgXCIga21cIik7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGVsZW1lbnQudmFsKCl9LCBzY29wZS5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGVsZW1lbnQudmFsKCl9LCAoKSA9PiB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LnRyaWdnZXIoJ2lucHV0Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBkZXRvdXJFbGVtZW50ID0gbnVsbFxuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmRldG91ckVsZW1lbnQpIHtcbiAgICAgIGRldG91ckVsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLWRldG91ci1yYW5nZVwifT5cbiAgICAgICAgPHA+e3JvdXRpbmdDb25zdGFudHMuUk9VVEVfREVUT1VSfTwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEV9XG4gICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IHN0ZXA9ezAuNX0vPlxuICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT17cm91dGluZ0NvbnN0YW50cy5PVVRQVVRfREVUT1VSfT57dGhpcy5wcm9wcy52YWx1ZSArIFwiIGttXCJ9PC9vdXRwdXQ+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGFyck9wdGlvbnMgPSBzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiPyB0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJyRGV0b3VyT3B0aW9uc1JvdXRlIDogdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFyckRldG91ck9wdGlvbnNBcmVhO1xuICAgICAgbGV0IG9wdGlvbnMgPSBhcnJPcHRpb25zLm1hcCgoZWxlbSkgPT4ge1xuICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2VsZW19IHZhbHVlPXtlbGVtfT57ZWxlbX0ga208L29wdGlvbj5cbiAgICAgIH0pO1xuICAgICAgZGV0b3VyRWxlbWVudCA9IDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLWRldG91ci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfT57b3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PjtcbiAgICB9XG4gICAgcmV0dXJuIGRldG91ckVsZW1lbnQ7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgcm91dGluZ0NvbnN0YW50cy5ST1VURV9UT0dHTEUpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAoIXRoaXMudXBkYXRlZCkge1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRyb2wgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgICBsZXQgcG9zID0gKChjb250cm9sLnZhbCgpIC0gY29udHJvbC5hdHRyKCdtaW4nKSkgLyByYW5nZSkgKiAxMDA7XG4gICAgICAgIGxldCBwb3NPZmZzZXQgPSBNYXRoLnJvdW5kKDUwICogcG9zIC8gMTAwKSAtICgyNSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgICBvdXRwdXRcbiAgICAgICAgICAuY3NzKCdsZWZ0JywgJ2NhbGMoJyArIHBvcyArICclIC0gJyArIHBvc09mZnNldCArICdweCknKVxuICAgICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudXNlUGVybWFsaW5rKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcm1hbGluay51cGRhdGVMaW5rRnJhZ21lbnRzKFwiZGV0b3VyXCIsIGNvbnRyb2wudmFsKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91ckFyZWE6IGpRdWVyeShlbGVtZW50KS52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtQXJlYShzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoZWxlbWVudCkudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0U3RhdGUoe2RldG91clJvdXRlOiB2YWx1ZX0sIHRoaXMucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogdmFsdWV9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgUm91dGVyTGF5ZXJTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXRMYXllciA9IHRoaXMuc2V0TGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyVmFsdWUgPSB0aGlzLnNldExheWVyVmFsdWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExheWVyT3JWYWx1ZSA9IHRoaXMuc2V0TGF5ZXJPclZhbHVlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRMYXllcihldmVudCkge1xuICAgIGxldCBsYXllciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllcihwYXJzZUludChsYXllciwgMTApKTtcbiAgfVxuXG4gIHNldExheWVyVmFsdWUoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgc2V0TGF5ZXJPclZhbHVlIChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgY3VycmVudExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZSA6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYTtcbiAgICBpZiAocGFyc2VJbnQodmFsdWUuaWQpICE9PSBwYXJzZUludChjdXJyZW50TGF5ZXIpKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRMYXllcihwYXJzZUludCh2YWx1ZS5pZCwgMTApKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXJWYWx1ZSh2YWx1ZS5uYW1lKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGRlZmF1bHRMYXllciA9IDA7XG5cbiAgICBjb25zdCBhcnJMYXllcnMgPSBzY29wZS5wcm9wcy5yb3V0ZXIub2JqTGF5ZXJzO1xuICAgIGxldCBsYXllclZhbHVlU2VsZWN0aW9uID0gXCJcIjtcbiAgICBpZiAoIXRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllckNoYW5nZXIpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJBcmVhO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5sZW5ndGggPiAxKSkge1xuICAgICAgICBsYXllclZhbHVlU2VsZWN0aW9uID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1sYXllci12YWx1ZS1zZWxlY3Rpb25cIn0+XG4gICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZUxheWVyVmFsdWUgPT09IG5hbWUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5zZXRMYXllclZhbHVlfSBrZXk9e3RoaXMucHJvcHMubGF5ZXJzW2RlZmF1bHRMYXllcl1bbmFtZV0ubWFwTGFiZWx9IHZhbHVlPXtuYW1lfSB0aXRsZT17bmFtZX0+e25hbWV9PC9idXR0b24+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJzICYmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWxheWVyLXNlbGVjdGlvblwiIG9uQ2hhbmdlPXt0aGlzLnNldExheWVyfSB2YWx1ZT17ZGVmYXVsdExheWVyfT5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpZF0ubGF5ZXJEYXRhO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkfSB2YWx1ZT17aWR9PntsYXllci5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAge2xheWVyVmFsdWVTZWxlY3Rpb259XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+e2xheWVyVmFsdWVTZWxlY3Rpb259PC9SZWFjdC5GcmFnbWVudD4pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gSlNPTi5zdHJpbmdpZnkoe2lkOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclJvdXRlLCBuYW1lOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGV9KVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcImFyZWFcIikge1xuICAgICAgICBkZWZhdWx0TGF5ZXIgPSBKU09OLnN0cmluZ2lmeSh7aWQ6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYSwgbmFtZTogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZUFyZWF9KVxuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubGVuZ3RoID4gMSkge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaWRdLmxheWVyRGF0YTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbaWRdKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gPG9wdGdyb3VwIGtleT17aWR9IHN0eWxlPXt7Y29sb3I6IFwidmFyKC0tbWFpbi1jb2xvcilcIn19IGxhYmVsPXtsYXllci5uYW1lfT5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2lkXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMucHJvcHMubGF5ZXJzW2lkXVtuYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e25hbWV9IHN0eWxlPXt7Y29sb3I6IFwidmFyKC0tbWFpbi1jb2xvcilcIn19IHZhbHVlPXtKU09OLnN0cmluZ2lmeSh7aWQ6IGlkLCBuYW1lOiBuYW1lfSl9PntuYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvb3B0Z3JvdXA+O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tpZF0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5wcm9wcy5sYXllcnNbaWRdW25hbWVdO1xuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e25hbWV9IHN0eWxlPXt7Y29sb3I6IFwidmFyKC0tbWFpbi1jb2xvcilcIn19IHZhbHVlPXtKU09OLnN0cmluZ2lmeSh7aWQ6IGlkLCBuYW1lOiBuYW1lfSl9PntuYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2lkXS5sYXllckRhdGE7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2lkXSkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5wcm9wcy5sYXllcnNbaWRdW25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtuYW1lfSBzdHlsZT17e2NvbG9yOiBcInZhcigtLW1haW4tY29sb3IpXCJ9fSB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoe2lkOiBpZCwgbmFtZTogbmFtZX0pfT57bmFtZX08L29wdGlvbj5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRMYXllck9yVmFsdWV9IHZhbHVlPXtkZWZhdWx0TGF5ZXJ9PlxuICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSwgMTApID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2VvbSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQXV0b2NvbXBsZXRlSW5wdXQiLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwibGlzdGVuZXJSZWdpc3RlcmVkIiwic3RhdGUiLCJhcnJBZGRyZXNzZXMiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIl90aGlzMiIsInNjb3BlIiwic3VibWl0RnVuY3Rpb24iLCJmaWVsZCIsIiQiLCJjc3NJZCIsInRyaWdnZXIiLCJwZXJmb3JtU2VhcmNoQ2FsbGJhY2siLCJpbmRleE9mIiwicm91dGVyIiwicGVyZm9ybUFyZWEiLCJwZXJmb3JtVmlhUm91dGUiLCJwZXJmb3JtU2VhcmNoIiwiZW50ZXJMaXN0ZW5lciIsIm9wdF90aGlzIiwia2V5Q29kZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWwiLCJsZW5ndGgiLCJvYmpGdW5jdGlvbnMiLCJkZWxldGVGdW5jdGlvbiIsImlkIiwiaW5kZXgiLCJjb3VudGVyIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJvYmpTZXR0aW5ncyIsInByb3h5VXJsIiwia2V5QXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQWRkcmVzcyIsImxpc3RBdXRvY29tcGxldGUiLCJsaXN0QWRyZXNzZXMiLCJfbG9vcCIsImVsZW1BZGRyZXNzIiwiY2xpY2tFdmVudCIsInNlbGYiLCJqUXVlcnkiLCJuYW1lIiwicG9pbnQiLCJQb2ludCIsInBvcyIsImluY2x1ZGVzIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsImFkZE92ZXJQb2ludCIsInNldEFyZWFQb2ludCIsImxpc3RJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uTW91c2VVcCIsInB1c2giLCJyZWYiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwib25LZXlEb3duIiwiYXV0b0NvbXBsZXRlIiwic2V0Q2VudGVyIiwiY2VudGVyIiwiaW5wdXQiLCJjc3NDbGFzcyIsInNldHRpbmdzIiwib2JqQ2VudGVyIiwiYkJveCIsInBhcnNlRmxvYXQiLCJ1cmwiLCJnZW9zZWFyY2hQYXJhbXMiLCJwYXJhbSIsInJlc3VsdENvdW50IiwiYWpheCIsImRvbmUiLCJkYXRhIiwiX3RoaXMzIiwiZGlzcGxheV9uYW1lIiwiX2xvb3AyIiwiaXNJbkJvdW5kaW5nQm94IiwibG9uIiwibGF0IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZWxlbWVudCIsImZvdW5kSW5kZXgiLCJmaW5kSW5kZXgiLCJmaW5kRWxlbWVudCIsInNvcnQiLCJiIiwiZGlzdCIsIl9sb29wMyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiYmJveCIsIkNvbXBvbmVudCIsIl9jb250cm9sIiwiX2M0Z01hcHNDb25zdGFudCIsIkhvcml6b250YWxQYW5lbCIsImJ1dHRvbiIsInRpdGxlIiwiZGlyZWN0aW9uIiwiYXBwZW5kQ2hpbGQiLCJtYXBDb250cm9sbGVyIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJjbGlja0NvbnRyb2wiLCJvbiIsImNvbnRyb2wiLCJDb250cm9sIiwib3BlbiIsImNoaWxkcyIsImNyZWF0ZUNoaWxkcyIsImRpdiIsImZvckVhY2giLCJjbG9zZSIsInNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjc3NDb25zdGFudHMiLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIk9MX1VOU0VMRUNUQUJMRSIsInN0eWxlIiwidG9wIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsImJvdHRvbSIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiYWRkQ29udGVudCIsImNvbnRlbnQiLCJfYzRnQXV0b2NvbXBsZXRlSW5wdXQiLCJfcm91dGluZ0NvbnN0YW50STE4biIsIl9wcm9qIiwiUm91dGVyQWRkcmVzc0ZpZWxkIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsImdldFBvc2l0aW9uIiwicmVtb3ZlQ29udGVudCIsIm1hcERhdGEiLCJpbml0aWFsUG9zaXRpb24iLCJpbml0aWFsRGVzdGluYXRpb24iLCJzZXRUb0NlbnRlciIsIm1hcCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJjb29yZGluYXRlcyIsImNvb3JkcyIsInRyYW5zZm9ybSIsImhhbmRsZVBvc2l0aW9uIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicG9zaXRpb25CdXR0b24iLCJ3aXRoUG9zaXRpb24iLCJST1VURV9QT1NJVElPTiIsImh0bWxGb3IiLCJsYWJlbCIsInBvcHVwIiwiY29udGFpbmVyQWRkcmVzc2VzIiwiUkVNT1ZFX0FERFJFU1MiLCJjbGVhcklucHV0IiwiaGFuZGxlTmV3UG9zaXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwicmVjYWxjdWxhdGVSb3V0ZSIsIl9jNGdSb3V0ZXJBZGRyZXNzRmllbGQiLCJfYzRnUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsIl9jNGdSb3V0ZXJMYXllclNlbGVjdGlvbiIsIl9jNGdSb3V0ZXJEZXRvdXJTbGlkZXIiLCJfcm91dGluZ0NvbnN0YW50STE4bkRlIiwiX3JvdXRpbmdDb25zdGFudEkxOG5FbiIsIlJvdXRlckFkZHJlc3NJbnB1dCIsImxhbmciLCJsYW5nQ29uc3RhbnRzIiwicm91dGluZ0NvbnN0YW50c0dlcm1hbiIsInJvdXRpbmdDb25zdGFudHNFbmdsaXNoIiwib3ZlckZvcm0iLCJlbmFibGVPdmVyUG9pbnRzIiwibW9kZSIsImtleXMiLCJvdmVyU2V0dGluZ3MiLCJvdmVyUG9pbnRzIiwiaXRlbSIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwib3ZlckFkZHJlc3NlcyIsImZyb21DbHNBZGRpdGlvbiIsInRvQ2xzQWRkaXRpb24iLCJhcmVhQ2xzQWRkaXRpb24iLCJzd2FwRnVuY3Rpb24iLCJzd2FwUG9pbnRzIiwidG1wRnJvbSIsInN3YXBCdXR0b24iLCJzd2l0Y2hUYXJnZXRzIiwib3ZlckJ1dHRvbiIsIm92ZXJGdW5jdGlvbiIsImlkeCIsIkZyYWdtZW50IiwiUk9VVEVSX0ZST00iLCJmcm9tRnVuY3Rpb25zIiwicmVzZXRGdW5jdGlvbnMiLCJmcm9tIiwiZnJvbUFkZHJlc3MiLCJST1VURVJfVE8iLCJ0b0Z1bmN0aW9ucyIsInRvIiwidG9BZGRyZXNzIiwiUk9VVEVSX0NFTlRFUiIsImFyZWFGdW5jdGlvbnMiLCJhcmVhIiwiYXJlYUFkZHJlc3MiLCJkZXRhaWxzIiwiZmVhdHVyZVNlYXJjaENvbnRyb2xzIiwic2hvd0ZlYXR1cmVzIiwibGF5ZXJzIiwiUm91dGVyTGF5ZXJTZWxlY3Rpb24iLCJhY3RpdmVMYXllclZhbHVlIiwibGF5ZXJWYWx1ZVJvdXRlIiwibGF5ZXJWYWx1ZUFyZWEiLCJSb3V0ZXJEZXRvdXJTbGlkZXIiLCJtaW4iLCJzbGlkZXJPcHRpb25zIiwibWF4Iiwic3RhcnRCdXR0b24iLCJyb3V0ZVN0YXJ0QnV0dG9uIiwiU1RBUlRfUk9VVEUiLCJfYzRnSG9yaXpvbnRhbFBhbmVsIiwiX2M0Z1JvdXRlckFkZHJlc3NJbnB1dCIsIl9jNGdUaXRsZWJhciIsIlJvdXRlclByb2ZpbGVTZWxlY3Rpb24iLCJsYXp5IiwiUm91dGVyQ29udHJvbHMiLCJfSG9yaXpvbnRhbFBhbmVsIiwic2hvd0Zvcm0iLCJzZXRSb3V0ZU1vZGUiLCJzZXRBcmVhTW9kZSIsImFyckNvbXBvbmVudHMiLCJyb3V0ZXJfZGl2Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0TW9kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwibW9kZVN3aXRjaGVyIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsInByb2ZpbGVzIiwiY3VycmVudFByb2ZpbGUiLCJUaXRsZWJhciIsIndyYXBwZXJDbGFzcyIsImhlYWRlciIsImhlYWRsaW5lIiwiaGVhZGVyQ2xhc3MiLCJkZXRhaWxCdG5DbGFzcyIsImRldGFpbEJ0bkNiIiwidG9nZ2xlRGV0YWlscyIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwidG9wVmFsdWUiLCJjb250YWluZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0SGVpZ2h0Iiwic2V0T3BlbiIsInJvdXRlckNvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJldnQiLCJoaWRkZW4iLCJfcm91dGluZ0NvbnN0YW50cyIsIl9jNGdNYXBzVXRpbHMiLCJoYW5kbGVDaGFuZ2UiLCJ1cGRhdGVkIiwicm91dGluZ0NvbnN0YW50cyIsIlJPVVRFX1RPR0dMRSIsInJhbmdlIiwiYXR0ciIsInBvc09mZnNldCIsInJvdW5kIiwib3V0cHV0IiwibmV4dCIsImNzcyIsInRleHQiLCJ1c2VQZXJtYWxpbmsiLCJwZXJtYWxpbmsiLCJ1cGRhdGVMaW5rRnJhZ21lbnRzIiwiZGV0b3VyUm91dGUiLCJkZXRvdXJBcmVhIiwiYXJlYVZhbHVlIiwiZGV0b3VyRWxlbWVudCIsIlJPVVRFX0RFVE9VUiIsInN0ZXAiLCJPVVRQVVRfREVUT1VSIiwiYXJyT3B0aW9ucyIsImFyckRldG91ck9wdGlvbnNSb3V0ZSIsImFyckRldG91ck9wdGlvbnNBcmVhIiwib3B0aW9ucyIsImVsZW0iLCJvbkNoYW5nZSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRMYXllciIsInNldExheWVyVmFsdWUiLCJzZXRMYXllck9yVmFsdWUiLCJsYXllciIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiY3VycmVudExheWVyIiwibGF5ZXJSb3V0ZSIsImxheWVyQXJlYSIsImRlZmF1bHRMYXllciIsImFyckxheWVycyIsIm9iakxheWVycyIsImxheWVyVmFsdWVTZWxlY3Rpb24iLCJsYXllckNoYW5nZXIiLCJtYXBMYWJlbCIsImxheWVyRGF0YSIsInN0cmluZ2lmeSIsImNvbG9yIiwib3B0aW9uIiwic2V0UHJvZmlsZSIsInByb2ZpbGVUcmFuc2xhdGlvbiIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInNob3dQb3B1cCIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSIsInNob3dQcm9maWxlU2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==