"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-controls_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-autocomplete-input.jsx"
/*!***********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-autocomplete-input.jsx ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-horizontal-panel.jsx"
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-horizontal-panel.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-address-field.jsx"
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-address-field.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-address-input.jsx"
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-address-input.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-controls.jsx"
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-controls.jsx ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-detour-slider.jsx"
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-detour-slider.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-layer-selection.jsx"
/*!***************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-layer-selection.jsx ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-profile-selection.jsx"
/*!*****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWNvbnRyb2xzX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFELG1CQUFBO0FBQThCLFNBQUFELHdCQUFBRyxDQUFBLEVBQUFDLENBQUEsNkJBQUFDLE9BQUEsTUFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBTCx1QkFBQSxZQUFBQSx3QkFBQUcsQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxPQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLFFBQUFHLENBQUEsQ0FBQUssR0FBQSxDQUFBWCxDQUFBLFVBQUFNLENBQUEsQ0FBQU0sR0FBQSxDQUFBWixDQUFBLEdBQUFNLENBQUEsQ0FBQU8sR0FBQSxDQUFBYixDQUFBLEVBQUFRLENBQUEsY0FBQU0sRUFBQSxJQUFBZCxDQUFBLGdCQUFBYyxFQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsSUFBQUQsQ0FBQSxHQUFBVyxNQUFBLENBQUFDLGNBQUEsS0FBQUQsTUFBQSxDQUFBRSx3QkFBQSxDQUFBbkIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsQ0FBQUssR0FBQSxJQUFBTCxDQUFBLENBQUFNLEdBQUEsSUFBQVAsQ0FBQSxDQUFBRSxDQUFBLEVBQUFNLEVBQUEsRUFBQVAs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YnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctaG9yaXpvbnRhbC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWFkZHJlc3MtaW5wdXQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItY29udHJvbHMuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZGV0b3VyLXNsaWRlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb24uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmxpc3RlbmVyUmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYXJyQWRkcmVzc2VzOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53cmFwcGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxlcnQgaWYgY2xpY2tlZCBvbiBvdXRzaWRlIG9mIGVsZW1lbnRcbiAgICAgKi9cbiAgICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlclJlZiAmJiAhdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYXJyQWRkcmVzc2VzOiBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBzdWJtaXRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZCA9ICQoXCIjXCIgKyBzY29wZS5wcm9wcy5jc3NJZCk7XG4gICAgICAgICAgICBmaWVsZC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIGxldCBwZXJmb3JtU2VhcmNoQ2FsbGJhY2s7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICBpZiAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZihcImFyZWFcIikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcImFyZWFWYWx1ZVwiO1xuICAgICAgICAgICAgICAgIHBlcmZvcm1TZWFyY2hDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAoc2NvcGUucHJvcHMuY3NzSWQuaW5kZXhPZignRnJvbScpICE9PSAtMSkgPyBcImZyb21WYWx1ZVwiIDogXCJ0b1ZhbHVlXCI7XG4gICAgICAgICAgICAgICAgcGVyZm9ybVNlYXJjaENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybVZpYVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1TZWFyY2goZmllbGQsIHZhbHVlLCBwZXJmb3JtU2VhcmNoQ2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBlbnRlckxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBvcHRfdGhpcykge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkubGVuZ3RoID09PSAwICYmICFldmVudC5rZXlDb2RlKSB7IC8vZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNjb3BlLnByb3BzLm9iakZ1bmN0aW9ucy5kZWxldGVGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5wcm9wcy5vYmpGdW5jdGlvbnMuZGVsZXRlRnVuY3Rpb24oZXZlbnQuY3VycmVudFRhcmdldCwgZXZlbnQuY3VycmVudFRhcmdldC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdmVyIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMub2JqRnVuY3Rpb25zW3Njb3BlLnByb3BzLmluZGV4XS5kZWxldGVGdW5jdGlvbihldmVudC5jdXJyZW50VGFyZ2V0LCBldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvdW50ZXIgPSBNYXRoLmZsb29yKERhdGUubm93KCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5jb3VudGVyICYmIHNjb3BlLmNvdW50ZXIgKyA0MDAgPCBNYXRoLmZsb29yKERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlLmNvdW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKHNjb3BlLnByb3BzLmNzc0lkLmluZGV4T2YoXCJhcmVhXCIpICE9PSAtMSkgPyBcImFyZWFWYWx1ZVwiIDogKHNjb3BlLnByb3BzLmNzc0lkLmluZGV4T2YoJ0Zyb20nKSAhPT0gLTEpID8gXCJmcm9tVmFsdWVcIiA6IFwidG9WYWx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9ICQoXCIjXCIgKyBzY29wZS5wcm9wcy5jc3NJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5vYmpTZXR0aW5ncy5wcm94eVVybCB8fCAhc2NvcGUucHJvcHMub2JqU2V0dGluZ3Mua2V5QXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5wZXJmb3JtU2VhcmNoKGZpZWxkLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1TZWFyY2goZmllbGQsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmF1dG9jb21wbGV0ZUFkZHJlc3MoJChcIiNcIiArIHNjb3BlLnByb3BzLmNzc0lkKS52YWwoKSwgXCIjXCIgKyBzY29wZS5wcm9wcy5jc3NJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGxpc3RBdXRvY29tcGxldGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJBZGRyZXNzZXMgJiYgdGhpcy5zdGF0ZS5hcnJBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGxpc3RBZHJlc3NlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFyckFkZHJlc3Nlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckFkZHJlc3Nlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbUFkZHJlc3MgPSB0aGlzLnN0YXRlLmFyckFkZHJlc3Nlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnQgPSAoc2VsZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI1wiICsgc2VsZi5wcm9wcy5jc3NJZCkudmFsKGVsZW1BZGRyZXNzLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFtlbGVtQWRkcmVzcy5wb3NbMV0sIGVsZW1BZGRyZXNzLnBvc1swXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvcHMuY3NzSWQuaW5jbHVkZXMoXCJGcm9tXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5yb3V0ZXIuc2V0Um91dGVGcm9tKGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5wcm9wcy5jc3NJZC5pbmNsdWRlcyhcIlRvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5yb3V0ZXIuc2V0Um91dGVUbyhlbGVtQWRkcmVzcy5wb3NbMV0sIGVsZW1BZGRyZXNzLnBvc1swXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYucHJvcHMuY3NzSWQuaW5jbHVkZXMoXCJPdmVyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5yb3V0ZXIuYWRkT3ZlclBvaW50KGVsZW1BZGRyZXNzLnBvc1sxXSwgZWxlbUFkZHJlc3MucG9zWzBdLCBzZWxmLnByb3BzLmluZGV4LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnByb3BzLmNzc0lkLmluY2x1ZGVzKFwiYXJlYVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcHMucm91dGVyLnNldEFyZWFQb2ludChlbGVtQWRkcmVzcy5wb3NbMV0sIGVsZW1BZGRyZXNzLnBvc1swXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXM6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IDxsaSBrZXk9e2l9IGNsYXNzTmFtZT17XCJjNGctYXV0b2NvbXBsZXRlLWl0ZW1cIn0gb25Nb3VzZVVwPXsoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudChzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgfSl9PntlbGVtQWRkcmVzcy5uYW1lfTwvbGk+O1xuICAgICAgICAgICAgICAgICAgICBsaXN0QWRyZXNzZXMucHVzaChsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdEF1dG9jb21wbGV0ZSA9IDx1bCBjbGFzc05hbWU9e1wiYzRnLWF1dG9jb21wbGV0ZVwifT57bGlzdEFkcmVzc2VzfTwvdWw+XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYzRnLWF1dG9jb21wbGV0ZS13cmFwcGVyJ30gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD17dGhpcy5wcm9wcy5jc3NJZH0gdHlwZT1cInNlYXJjaFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25LZXlEb3duPXtlbnRlckxpc3RlbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIi8+XG4gICAgICAgICAgICAgICAge2xpc3RBdXRvY29tcGxldGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRDZW50ZXIoY2VudGVyKSB7XG4gICAgICAgIHRoaXMub2JqU2V0dGluZ3MuY2VudGVyID0gY2VudGVyO1xuICAgIH1cblxuICAgIGF1dG9jb21wbGV0ZUFkZHJlc3MoaW5wdXQsIGNzc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzY29wZS5wcm9wcy5vYmpTZXR0aW5ncztcbiAgICAgICAgbGV0IGNlbnRlcjtcbiAgICAgICAgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5jZW50ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGxldCBvYmpDZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXIoKTtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBvYmpDZW50ZXJbMF0gKyBcIixcIiArIG9iakNlbnRlclsxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VudGVyID0gc2V0dGluZ3MuY2VudGVyWzBdICsgXCIsXCIgKyBzZXR0aW5ncy5jZW50ZXJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MuYkJveCkge1xuICAgICAgICAgICAgY2VudGVyID0gKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFswXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMl0pKSAvIDIgKyBcIixcIiArIChwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMV0pICsgcGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzNdKSkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgICAgIHVybCA9IHNldHRpbmdzLnByb3h5VXJsICsgXCJhdXRvY29tcGxldGUucGhwP2Zvcm1hdD1qc29uJmtleT1cIiArIHNldHRpbmdzLmtleUF1dG9jb21wbGV0ZSArIFwiJnE9XCIgKyBpbnB1dCArIFwiJmNlbnRlcj1cIiArIGNlbnRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNldHRpbmdzLnByb3h5VXJsICsgXCJhdXRvY29tcGxldGUucGhwP2Zvcm1hdD1qc29uJmtleT1cIiArIHNldHRpbmdzLmtleUF1dG9jb21wbGV0ZSArIFwiJnE9XCIgKyBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MuZ2Vvc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbSBpbiBzZXR0aW5ncy5nZW9zZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MuZ2Vvc2VhcmNoUGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gXCImXCIgKyBwYXJhbSArIFwiPVwiICsgc2V0dGluZ3MuZ2Vvc2VhcmNoUGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnJlc3VsdENvdW50KSB7XG4gICAgICAgICAgICB1cmwgKz0gXCImbGltaXQ9XCIgKyBzZXR0aW5ncy5yZXN1bHRDb3VudDtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IGNlbnRlcjtcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5jZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBzZXR0aW5ncy5jZW50ZXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmdzLmJCb3gpIHtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSBbKHBhcnNlRmxvYXQoc2V0dGluZ3MuYkJveFswXSkgKyBwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMl0pKSAvIDIsIChwYXJzZUZsb2F0KHNldHRpbmdzLmJCb3hbMV0pICsgcGFyc2VGbG9hdChzZXR0aW5ncy5iQm94WzNdKSkgLyAyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyQWRkcmVzc2VzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmJCb3ggJiYgc2V0dGluZ3MuYkJveFswXSAmJiBkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lICYmIGNlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJbkJvdW5kaW5nQm94KGRhdGFbaV0ubG9uLCBkYXRhW2ldLmxhdCwgc2V0dGluZ3MuYkJveCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKiAoY2VudGVyWzBdIC0gZGF0YVtpXS5sb24pICsgKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSAqIChjZW50ZXJbMV0gLSBkYXRhW2ldLmxhdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXN0JzogZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9zJzogW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IGRhdGFbaV0uZGlzcGxheV9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZEluZGV4ID0gYXJyQWRkcmVzc2VzLmZpbmRJbmRleCgoZmluZEVsZW1lbnQpID0+IGZpbmRFbGVtZW50Lm5hbWUgPT09IGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMuc29ydCgoYSwgYikgPT4gYS5kaXN0IC0gYi5kaXN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9zJzogW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogZGF0YVtpXS5kaXNwbGF5X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZEluZGV4ID0gYXJyQWRkcmVzc2VzLmZpbmRJbmRleCgoZmluZEVsZW1lbnQpID0+IGZpbmRFbGVtZW50Lm5hbWUgPT09IGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyQWRkcmVzc2VzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjb3BlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYXJyQWRkcmVzc2VzOiBhcnJBZGRyZXNzZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNJbkJvdW5kaW5nQm94KGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGJib3gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb25naXR1ZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9uZ2l0dWRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxhdGl0dWRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBsYXRpdHVkZSA9IHBhcnNlRmxvYXQobGF0aXR1ZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiYm94WzBdIDwgbG9uZ2l0dWRlICYmXG4gICAgICAgICAgICBsb25naXR1ZGUgPCBiYm94WzJdICYmXG4gICAgICAgICAgICBiYm94WzFdIDwgbGF0aXR1ZGUgJiZcbiAgICAgICAgICAgIGxhdGl0dWRlIDwgYmJveFszXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gKHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIpICsgXCItYnV0dG9uLVwiICsgKHByb3BzLmRpcmVjdGlvbiB8fCBcInRvcFwiKSArIFwiIG9sLWNvbnRyb2wgXCIgKyBcIm9sLXVuc2VsZWN0YWJsZVwiO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHByb3BzLnRpdGxlO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmNsaWNrQ29udHJvbCA9IHRoaXMuY2xpY2tDb250cm9sLmJpbmQodGhpcyk7XG4gICAgalF1ZXJ5KGJ1dHRvbikub24oJ2NsaWNrJywgdGhpcy5jbGlja0NvbnRyb2wpO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiB0aGlzLmVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJ0b3BcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1ob3Jpem9udGFsLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2xcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcyAoKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY29wZS5zdGF0ZS5jaGlsZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09IFwidG9wXCIpIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjEwMHB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JSICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIxMDBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgdG9wVmFsdWUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSAtIDEwMDtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuc3R5bGUudG9wID0gdG9wVmFsdWUgKyBcInB4XCI7XG4gICAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwicGFuZWwtc2xpZGVkLW91dFwiKS5yZW1vdmVDbGFzcyhcInBhbmVsLXNsaWRlZC1pblwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSBcInRvcFwiKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVFIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgLicgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFKTtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQlIgKyAnIC4nICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSk7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKVsxXSArIFwicHhcIjtcbiAgICAgIC8vIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJwYW5lbC1zbGlkZWQtaW5cIikucmVtb3ZlQ2xhc3MoXCJwYW5lbC1zbGlkZWQtb3V0XCIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIEhUTUwgY29udGVudCB0byB0aGUgcGFuZWwuXG4gICAqIEBwYXJhbSBjb250ZW50ICAgTXVzdCBiZSBhIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuc3RhdGUuY2hpbGRzLnB1c2goY29udGVudCk7XG4gIH1cblxuXG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tIFwiLi9jNGctYXV0b2NvbXBsZXRlLWlucHV0LmpzeFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL3JvdXRpbmctY29uc3RhbnQtaTE4blwiO1xuaW1wb3J0IHt0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzRmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ29udGVudCA9IHRoaXMucmVtb3ZlQ29udGVudC5iaW5kKHRoaXMpO1xuICAgIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsUG9zaXRpb24gJiYgKHByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIiB8fCBwcm9wcy5uYW1lID09PSBcImFyZWFJbnB1dFwiKSkge1xuICAgICAgdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yb3V0ZXIubWFwRGF0YS5pbml0aWFsRGVzdGluYXRpb24gJiYgcHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgbGV0IHNldFRvQ2VudGVyID0gKGRhdGEpPT4ge1xuICAgICAgICBsZXQgY2VudGVyID0gcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3JkcyA9IHt9O1xuICAgICAgICBjb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlID0gdHJhbnNmb3JtKGNlbnRlciwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIilbMF07XG4gICAgICAgIGNvb3JkaW5hdGVzLmNvb3Jkcy5sYXRpdHVkZSA9IHRyYW5zZm9ybShjZW50ZXIsIFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpWzFdO1xuICAgICAgICB0aGlzLmhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkID0gd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgfHwgW107XG4gICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKHNldFRvQ2VudGVyKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBvc2l0aW9uQnV0dG9uID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy53aXRoUG9zaXRpb24pIHtcbiAgICAgIHBvc2l0aW9uQnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSBjNGctcm91dGVyLXBvc2l0aW9uXCIgb25Nb3VzZVVwPXt0aGlzLmdldFBvc2l0aW9ufSB0aXRsZT17dGhpcy5sYW5ndWFnZUNvbnN0YW50cy5ST1VURV9QT1NJVElPTn0vPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIHtwb3NpdGlvbkJ1dHRvbn1cbiAgICAgICAgPEF1dG9jb21wbGV0ZUlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3N9IG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXt0aGlzLnByb3BzLmNzc0lkfSBvYmpGdW5jdGlvbnM9e3RoaXMucHJvcHMub2JqRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gcG9wdXA9e3RoaXMucHJvcHMucG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gaW5kZXg9e3RoaXMucHJvcHMuaW5kZXh9Lz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuLXByaW1hcnkgYzRnLXJvdXRlci1pbnB1dC1jbGVhclwifSBvbk1vdXNlVXA9e3RoaXMucmVtb3ZlQ29udGVudH0gdGl0bGU9e3RoaXMubGFuZ3VhZ2VDb25zdGFudHMuUkVNT1ZFX0FERFJFU1N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW1vdmVDb250ZW50KGV2ZW50KSB7XG4gICAgalF1ZXJ5KFwiI1wiICsgdGhpcy5wcm9wcy5jc3NJZCkudmFsKCcnKTtcbiAgICB0aGlzLnByb3BzLmNsZWFySW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBoYW5kbGVOZXdQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHNjb3BlLmhhbmRsZVBvc2l0aW9uKHBvcyk7XG4gICAgfTtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZU5ld1Bvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBpbnB1dCBjb29yZGluYXRlcyBhbmQgZXhlY3V0ZXMgdGhlIHJldmVyc2Ugc2VhcmNoLiBPbiBzdWNjZXNzLCB0aGUgcmVzdWx0IGxvY2F0aW9uIGlzIGluc2VydGVkIGluIHRoZVxuICAgKiBnaXZlbiBpbnB1dCBmaWVsZCBhbmQgdGhlIGdpdmVuIHByb3BlcnR5IG9mIHRoaXMuXG4gICAqIEBwYXJhbSBjb29yZGluYXRlc1xuICAgKi9cbiAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgPT09IFwicm91dGluZ0Zyb21cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVGcm9tKGNvb3Jkcy5sb25naXR1ZGUsIGNvb3Jkcy5sYXRpdHVkZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJvdmVyVmFsdWVcIikge1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubmFtZSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVUbyhjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMubGF0aXR1ZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lID09PSBcImFyZWFJbnB1dFwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRBcmVhUG9pbnQoY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyQWRkcmVzc0ZpZWxkIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1hZGRyZXNzLWZpZWxkLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4XCI7XG5pbXBvcnQgeyBSb3V0ZXJMYXllclNlbGVjdGlvbiB9IGZyb20gXCIuL2M0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uLmpzeFwiO1xuaW1wb3J0IHsgUm91dGVyRGV0b3VyU2xpZGVyIH0gZnJvbSBcIi4vYzRnLXJvdXRlci1kZXRvdXItc2xpZGVyLmpzeFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3JvdXRpbmdDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudC1pMThuLWVuXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJBZGRyZXNzSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKCFwcm9wcy5yb3V0ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSByb3V0aW5nIGNvbXBvbmVudCBuZWVkcyBhIHJvdXRlciwgaXQgd29uJ3Qgd29yayBjb3JyZWN0bHkgc2luY2Ugbm9uZSB3YXMgcGFzc2VkLi4uXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb3V0ZXI6IHByb3BzLnJvdXRlcixcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChwcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSByb3V0aW5nQ29uc3RhbnRzR2VybWFuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmFsbGJhY2tcbiAgICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gcm91dGluZ0NvbnN0YW50c0VuZ2xpc2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpbnB1dCA9IG51bGw7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgbGV0IG92ZXJGb3JtID0gXCJcIjtcblxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZU92ZXJQb2ludHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcblxuXG4gICAgICBvdmVyRm9ybSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMub3ZlclNldHRpbmdzLm92ZXJQb2ludHMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Um91dGVyQWRkcmVzc0ZpZWxkIGNsYXNzTmFtZT17XCJidG4tcHJpbWFyeSBjNGctcm91dGVyLWlucHV0LW92ZXIgYzRnLXJvdXRlci1pbnB1dC1vdmVyLVwiICsgaXRlbX0gbmFtZT17XCJvdmVyUG9pbnQtXCIgKyBpdGVtfSBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9MYWJlbF9JbnRlcmltfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPXtcInJvdXRpbmdPdmVyLVwiICsgaXRlbX0gb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vYmpGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckFkZHJlc3Nlcz17dGhpcy5wcm9wcy5jb250YWluZXJBZGRyZXNzZXN9IHZhbHVlPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyQWRkcmVzc2VzW2l0ZW1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGtleT17aXRlbX0gaW5kZXg9e2l0ZW19IGNsZWFySW5wdXQ9eygpID0+IHt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vYmpGdW5jdGlvbnNbaXRlbV0uZGVsZXRlRnVuY3Rpb24oKTt9fS8+XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBmcm9tQ2xzQWRkaXRpb24gPSBcIlwiO1xuICAgIGxldCB0b0Nsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBsZXQgYXJlYUNsc0FkZGl0aW9uID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIGFyZWFDbHNBZGRpdGlvbiA9IFwiIGludmlzaWJsZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICAgIHRvQ2xzQWRkaXRpb24gPSBcIiBpbnZpc2libGVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBzd2FwRnVuY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnByb3BzLm92ZXJTZXR0aW5ncy5zd2FwUG9pbnRzKCk7XG4gICAgICBjb25zdCB0bXBGcm9tID0galF1ZXJ5KFwiI3JvdXRpbmdGcm9tXCIpLnZhbCgpO1xuICAgICAgalF1ZXJ5KFwiI3JvdXRpbmdGcm9tXCIpLnZhbChqUXVlcnkoXCIjcm91dGluZ1RvXCIpLnZhbCgpKTtcbiAgICAgIGpRdWVyeShcIiNyb3V0aW5nVG9cIikudmFsKHRtcEZyb20pO1xuICAgIH07XG4gICAgbGV0IHN3YXBCdXR0b24gPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnN3aXRjaFRhcmdldHMgJiYgdGhpcy5wcm9wcy5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgIHN3YXBCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItc3dpdGNoXCIgb25Nb3VzZVVwPXtzd2FwRnVuY3Rpb259IC8+O1xuICAgIH1cbiAgICBsZXQgb3ZlckJ1dHRvbiA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlT3ZlclBvaW50cyAmJiB0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgb3ZlckJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1vdmVyXCIgb25Nb3VzZVVwPXt0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyRnVuY3Rpb259IC8+O1xuICAgIH1cblxuICAgIGxldCBpZHggPSB0aGlzLnByb3BzLm92ZXJTZXR0aW5ncy5vdmVyUG9pbnRzLmxlbmd0aCArIDE7XG5cbiAgICBpbnB1dCA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtZnJvbVwiICsgZnJvbUNsc0FkZGl0aW9ufSBuYW1lPVwicm91dGluZ0Zyb21cIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9GUk9NfSBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzSWQ9XCJyb3V0aW5nRnJvbVwiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMuZnJvbUZ1bmN0aW9uc30gb2JqU2V0dGluZ3M9e3RoaXMucHJvcHMub2JqU2V0dGluZ3N9IGNsZWFySW5wdXQ9e3RoaXMucHJvcHMucmVzZXRGdW5jdGlvbnMuZnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gd2l0aFBvc2l0aW9uPXt0aGlzLnByb3BzLndpdGhQb3NpdGlvbn0gdmFsdWU9e3RoaXMucHJvcHMuZnJvbUFkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICAgIHtvdmVyRm9ybX1cbiAgICAgIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtdG9cIiArIHRvQ2xzQWRkaXRpb259IG5hbWU9XCJyb3V0aW5nVG9cIiBsYWJlbD17dGhpcy5sYW5nQ29uc3RhbnRzLlJPVVRFUl9UT30ga2V5PXtpZHggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NJZD1cInJvdXRpbmdUb1wiIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnMudG9GdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjbGVhcklucHV0PXt0aGlzLnByb3BzLnJlc2V0RnVuY3Rpb25zLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy50b0FkZHJlc3N9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9Lz5cbiAgICAgIDxSb3V0ZXJBZGRyZXNzRmllbGQgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItaW5wdXQtYXJlYVwiICsgYXJlYUNsc0FkZGl0aW9ufSBuYW1lPVwiYXJlYUlucHV0XCIgbGFiZWw9e3RoaXMubGFuZ0NvbnN0YW50cy5ST1VURVJfQ0VOVEVSfSBrZXk9e2lkeCArIDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0lkPVwiYXJlYUlucHV0XCIgb2JqRnVuY3Rpb25zPXt0aGlzLnByb3BzLm9iakZ1bmN0aW9ucy5hcmVhRnVuY3Rpb25zfSBvYmpTZXR0aW5ncz17dGhpcy5wcm9wcy5vYmpTZXR0aW5nc30gY2xlYXJJbnB1dD17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9ucy5hcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJBZGRyZXNzZXM9e3RoaXMucHJvcHMuY29udGFpbmVyQWRkcmVzc2VzfSB3aXRoUG9zaXRpb249e3RoaXMucHJvcHMud2l0aFBvc2l0aW9ufSB2YWx1ZT17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn0vPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuXG4gICAgbGV0IGRldGFpbHMgPSBcIlwiO1xuICAgIGxldCBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc2hvd0ZlYXR1cmVzICYmIHRoaXMucHJvcHMubGF5ZXJzKSB7XG4gICAgICBmZWF0dXJlU2VhcmNoQ29udHJvbHMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxSb3V0ZXJMYXllclNlbGVjdGlvbiBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSBhY3RpdmVMYXllclZhbHVlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICA8Um91dGVyRGV0b3VyU2xpZGVyIG1pbj17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLm1pbn0gbWF4PXt0aGlzLnByb3BzLnNsaWRlck9wdGlvbnMubWF4fSB2YWx1ZT17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zLnZhbHVlfSByb3V0ZXI9e3RoaXMucHJvcHMuc2xpZGVyT3B0aW9ucy5yb3V0ZXJ9Lz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgZGV0YWlscyA9IDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uYmFyXCI+XG4gICAgICAgIHtvdmVyQnV0dG9ufVxuICAgICAgICB7c3dhcEJ1dHRvbn1cbiAgICAgICAge2ZlYXR1cmVTZWFyY2hDb250cm9sc31cbiAgICAgIDwvZGl2PjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgIGRldGFpbHMgPSA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmJhclwiPlxuICAgICAgICB7ZmVhdHVyZVNlYXJjaENvbnRyb2xzfVxuICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBsZXQgc3RhcnRCdXR0b24gPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVTdGFydEJ1dHRvbikge1xuICAgICAgc3RhcnRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctcm91dGUtc2VhcmNoLXN0YXJ0XCJ9IG9uTW91c2VVcD17dGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZX0+e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSVF9ST1VURX08L2J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7c3RhcnRCdXR0b259XG4gICAgICAgIHsvKntkZXRhaWxCdXR0b259Ki99XG4gICAgICAgIHtkZXRhaWxzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIb3Jpem9udGFsUGFuZWx9IGZyb20gXCIuL2M0Zy1ob3Jpem9udGFsLXBhbmVsLmpzeFwiO1xuaW1wb3J0IHtSb3V0ZXJBZGRyZXNzSW5wdXR9IGZyb20gXCIuL2M0Zy1yb3V0ZXItYWRkcmVzcy1pbnB1dC5qc3hcIlxuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiXG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcbmNvbnN0IFJvdXRlclByb2ZpbGVTZWxlY3Rpb24gPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnLi9jNGctcm91dGVyLXByb2ZpbGUtc2VsZWN0aW9uLmpzeCcpKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyQ29udHJvbHMgZXh0ZW5kcyBIb3Jpem9udGFsUGFuZWwge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZS5yb3V0ZXIgPSB0aGlzLnByb3BzLnJvdXRlcjtcbiAgICB0aGlzLnN0YXRlLnNob3dGb3JtID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0Um91dGVNb2RlID0gdGhpcy5zZXRSb3V0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEFyZWFNb2RlID0gdGhpcy5zZXRBcmVhTW9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBpbmRleCA9IHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwicm91dGVyXCIpO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IHRoaXMuY29udHJvbDtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9kaXYgJiYgdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICB9XG5cbiAgc2V0Um91dGVNb2RlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TW9kZShcInJvdXRlXCIpO1xuICB9XG5cbiAgc2V0QXJlYU1vZGUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRNb2RlKFwiYXJlYVwiKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGNsYXNzTmFtZSA9IFwiYzRnLXJvdXRlci1jb250ZW50XCIgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW4gXCIgOiBcIiBjNGctY2xvc2UgXCIpICsgdGhpcy5wcm9wcy5tb2RlO1xuICAgIC8vIHByb3BhZ2F0ZSBvcGVuIHN0YXRlIGRvd24gdG8gY2hpbGQgY29tcG9uZW50c1xuICAgIGxldCBvcGVuID0gdGhpcy5wcm9wcy5vcGVuO1xuICAgIGxldCBtb2RlU3dpdGNoZXIgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0Zvcm0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5cImxvYWRpbmcuLi5cIjwvZGl2Pn0+XG4gICAgICAgICAgICA8Um91dGVyUHJvZmlsZVNlbGVjdGlvbiBwcm9maWxlcz17dGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUucHJvZmlsZXN9IHJvdXRlcj17dGhpcy5wcm9wcy5yb3V0ZXJ9IGN1cnJlbnRQcm9maWxlPXt0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5jdXJyZW50UHJvZmlsZX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgPFJvdXRlckFkZHJlc3NJbnB1dCBjbGFzc05hbWU9XCJjNGctcm91dGVyLWlucHV0LWNvbnRlbnRcIiByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfSB3aXRoUG9zaXRpb249e3RydWV9IHN3aXRjaFRhcmdldHM9e3RoaXMucHJvcHMuc3dpdGNoVGFyZ2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakZ1bmN0aW9ucz17dGhpcy5wcm9wcy5vYmpGdW5jdGlvbnN9IG9ialNldHRpbmdzPXt0aGlzLnByb3BzLm9ialNldHRpbmdzfSBjdXJyZW50UHJvZmlsZT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gZW5hYmxlT3ZlclBvaW50cz17dGhpcy5wcm9wcy5lbmFibGVPdmVyUG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQWRkcmVzc2VzPXt0aGlzLnByb3BzLmNvbnRhaW5lckFkZHJlc3Nlc30gbW9kZT17dGhpcy5wcm9wcy5tb2RlfSBvcGVuPXtvcGVufSBsYXllcnM9e3RoaXMucHJvcHMubGF5ZXJzfSByZXNldEZ1bmN0aW9ucz17dGhpcy5wcm9wcy5yZXNldEZ1bmN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzPXt0aGlzLnByb3BzLmZyb21BZGRyZXNzfSB0b0FkZHJlc3M9e3RoaXMucHJvcHMudG9BZGRyZXNzfSBhcmVhQWRkcmVzcz17dGhpcy5wcm9wcy5hcmVhQWRkcmVzc30gc2xpZGVyT3B0aW9ucz17dGhpcy5wcm9wcy5zbGlkZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM9e3RoaXMucHJvcHMucHJvZmlsZXN9IG92ZXJTZXR0aW5ncz17dGhpcy5wcm9wcy5vdmVyU2V0dGluZ3N9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGVyXCJ9IGhlYWRlcj17aGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1yb3V0ZXItaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1leHRlbmRlZC1vcHRpb25zXCJ9IGRldGFpbEJ0bkNiPXt0aGlzLnRvZ2dsZURldGFpbHN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXJvdXRlci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXJvdXRlci1oaWRlLWZvcm0tYnV0dG9uXCJ9IG9uTW91c2VVcD17KCkgPT4ge3RoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgLy8galF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5jc3MoXCJ0b3BcIiwgMCArIFwicHhcIik7XG4gIH1cblxuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIC8vIG92ZXJyaWRlIHBhcmVudCBtZXRob2RcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAodGhpcy5wcm9wcy5vcGVuID8gXCIgYzRnLW9wZW5cIiA6IFwiIGM0Zy1jbG9zZVwiKTtcbiAgICBsZXQgdG9wVmFsdWUgPSAwO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgdG9wVmFsdWUgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgICAvLyBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmNzcyhcInRvcFwiLCB0b3BWYWx1ZSArIFwicHhcIik7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMucHJvcHMuc2V0T3Blbih0cnVlKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLnNldE9wZW4oZmFsc2UpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLnJvdXRlckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIGNsaWNrQ29udHJvbChldnQpIHtcbiAgICBsZXQgaGlkZGVuID0gdGhpcy5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5yb3V0ZXJDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIucm91dGVyQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aGlzLnByb3BzLm9wZW4pe1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtyb3V0aW5nQ29uc3RhbnRzfSBmcm9tIFwiLi4vcm91dGluZy1jb25zdGFudHNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckRldG91clNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgZWxlbWVudC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgIGxldCByYW5nZSA9IGNvbnRyb2wuYXR0cignbWF4JykgLSBjb250cm9sLmF0dHIoJ21pbicpO1xuICAgICAgbGV0IHBvcyA9ICgoY29udHJvbC52YWwoKSAtIGNvbnRyb2wuYXR0cignbWluJykpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgIGxldCBvdXRwdXQgPSBjb250cm9sLm5leHQoJ291dHB1dCcpO1xuICAgICAgb3V0cHV0XG4gICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgIC50ZXh0KGNvbnRyb2wudmFsKCkgKyBcIiBrbVwiKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnVzZVBlcm1hbGluaykge1xuICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogZWxlbWVudC52YWwoKX0sIHNjb3BlLnByb3BzLnJvdXRlci5yZWNhbGN1bGF0ZVJvdXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogZWxlbWVudC52YWwoKX0sICgpID0+IHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEoc2NvcGUucHJvcHMucm91dGVyLnN0YXRlLmFyZWFWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQudHJpZ2dlcignaW5wdXQnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGRldG91ckVsZW1lbnQgPSBudWxsXG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZGV0b3VyRWxlbWVudCkge1xuICAgICAgZGV0b3VyRWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItZGV0b3VyLXJhbmdlXCJ9PlxuICAgICAgICA8cD57cm91dGluZ0NvbnN0YW50cy5ST1VURV9ERVRPVVJ9PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3NOYW1lPXtyb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRX1cbiAgICAgICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59IG1heD17dGhpcy5wcm9wcy5tYXh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gc3RlcD17MC41fS8+XG4gICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPXtyb3V0aW5nQ29uc3RhbnRzLk9VVFBVVF9ERVRPVVJ9Pnt0aGlzLnByb3BzLnZhbHVlICsgXCIga21cIn08L291dHB1dD5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgYXJyT3B0aW9ucyA9IHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5tb2RlID09PSBcInJvdXRlXCI/IHRoaXMucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcnJEZXRvdXJPcHRpb25zUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXJyRGV0b3VyT3B0aW9uc0FyZWE7XG4gICAgICBsZXQgb3B0aW9ucyA9IGFyck9wdGlvbnMubWFwKChlbGVtKSA9PiB7XG4gICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17ZWxlbX0gdmFsdWU9e2VsZW19PntlbGVtfSBrbTwvb3B0aW9uPlxuICAgICAgfSk7XG4gICAgICBkZXRvdXJFbGVtZW50ID0gPHNlbGVjdCBjbGFzc05hbWU9XCJjNGctZGV0b3VyLXNlbGVjdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9PntvcHRpb25zfVxuICAgICAgPC9zZWxlY3Q+O1xuICAgIH1cbiAgICByZXR1cm4gZGV0b3VyRWxlbWVudDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyByb3V0aW5nQ29uc3RhbnRzLlJPVVRFX1RPR0dMRSk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy51cGRhdGVkKSB7XG4gICAgICBqUXVlcnkoZWxlbWVudCkub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY29udHJvbCA9IGpRdWVyeSh0aGlzKTtcbiAgICAgICAgbGV0IHJhbmdlID0gY29udHJvbC5hdHRyKCdtYXgnKSAtIGNvbnRyb2wuYXR0cignbWluJyk7XG4gICAgICAgIGxldCBwb3MgPSAoKGNvbnRyb2wudmFsKCkgLSBjb250cm9sLmF0dHIoJ21pbicpKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgICAgbGV0IHBvc09mZnNldCA9IE1hdGgucm91bmQoNTAgKiBwb3MgLyAxMDApIC0gKDI1KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IGNvbnRyb2wubmV4dCgnb3V0cHV0Jyk7XG4gICAgICAgIG91dHB1dFxuICAgICAgICAgIC5jc3MoJ2xlZnQnLCAnY2FsYygnICsgcG9zICsgJyUgLSAnICsgcG9zT2Zmc2V0ICsgJ3B4KScpXG4gICAgICAgICAgLnRleHQoY29udHJvbC52YWwoKSArIFwiIGttXCIpO1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVyLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS51c2VQZXJtYWxpbmspIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5yb3V0ZXIucGVybWFsaW5rLnVwZGF0ZUxpbmtGcmFnbWVudHMoXCJkZXRvdXJcIiwgY29udHJvbC52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJSb3V0ZTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgc2NvcGUucHJvcHMucm91dGVyLnJlY2FsY3VsYXRlUm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjb3BlLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyQXJlYTogalF1ZXJ5KGVsZW1lbnQpLnZhbCgpfSwgKCkgPT4ge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMucm91dGVyLnBlcmZvcm1BcmVhKHNjb3BlLnByb3BzLnJvdXRlci5zdGF0ZS5hcmVhVmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGpRdWVyeShlbGVtZW50KS50cmlnZ2VyKCdpbnB1dCcpO1xuICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2hhbmdlIChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRTdGF0ZSh7ZGV0b3VyUm91dGU6IHZhbHVlfSwgdGhpcy5wcm9wcy5yb3V0ZXIucmVjYWxjdWxhdGVSb3V0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnNldFN0YXRlKHtkZXRvdXJBcmVhOiB2YWx1ZX0sICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucGVyZm9ybUFyZWEodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUuYXJlYVZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIFJvdXRlckxheWVyU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2V0TGF5ZXIgPSB0aGlzLnNldExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRMYXllclZhbHVlID0gdGhpcy5zZXRMYXllclZhbHVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRMYXllck9yVmFsdWUgPSB0aGlzLnNldExheWVyT3JWYWx1ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0TGF5ZXIoZXZlbnQpIHtcbiAgICBsZXQgbGF5ZXIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXIocGFyc2VJbnQobGF5ZXIsIDEwKSk7XG4gIH1cblxuICBzZXRMYXllclZhbHVlKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyVmFsdWUodmFsdWUpO1xuICB9XG4gIHNldExheWVyT3JWYWx1ZSAoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyUm91dGUgOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllckFyZWE7XG4gICAgaWYgKHBhcnNlSW50KHZhbHVlLmlkKSAhPT0gcGFyc2VJbnQoY3VycmVudExheWVyKSkge1xuICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0TGF5ZXIocGFyc2VJbnQodmFsdWUuaWQsIDEwKSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucm91dGVyLnNldExheWVyVmFsdWUodmFsdWUubmFtZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBkZWZhdWx0TGF5ZXIgPSAwO1xuXG4gICAgY29uc3QgYXJyTGF5ZXJzID0gc2NvcGUucHJvcHMucm91dGVyLm9iakxheWVycztcbiAgICBsZXQgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJDaGFuZ2VyKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyUm91dGU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucm91dGVyLnN0YXRlLm1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICAgIGRlZmF1bHRMYXllciA9IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyQXJlYTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbZGVmYXVsdExheWVyXSkubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgbGF5ZXJWYWx1ZVNlbGVjdGlvbiA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItbGF5ZXItdmFsdWUtc2VsZWN0aW9uXCJ9PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmVMYXllclZhbHVlID09PSBuYW1lID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwifSBvbk1vdXNlVXA9e3RoaXMuc2V0TGF5ZXJWYWx1ZX0ga2V5PXt0aGlzLnByb3BzLmxheWVyc1tkZWZhdWx0TGF5ZXJdW25hbWVdLm1hcExhYmVsfSB2YWx1ZT17bmFtZX0gdGl0bGU9e25hbWV9PntuYW1lfTwvYnV0dG9uPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVycyAmJiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLmxlbmd0aCA+IDEpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1sYXllci1zZWxlY3Rpb25cIiBvbkNoYW5nZT17dGhpcy5zZXRMYXllcn0gdmFsdWU9e2RlZmF1bHRMYXllcn0+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaWRdLmxheWVyRGF0YTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e2lkfT57bGF5ZXIubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIHtsYXllclZhbHVlU2VsZWN0aW9ufVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PntsYXllclZhbHVlU2VsZWN0aW9ufTwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIGRlZmF1bHRMYXllciA9IEpTT04uc3RyaW5naWZ5KHtpZDogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJSb3V0ZSwgbmFtZTogdGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubGF5ZXJWYWx1ZVJvdXRlfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yb3V0ZXIuc3RhdGUubW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgICAgZGVmYXVsdExheWVyID0gSlNPTi5zdHJpbmdpZnkoe2lkOiB0aGlzLnByb3BzLnJvdXRlci5zdGF0ZS5sYXllckFyZWEsIG5hbWU6IHRoaXMucHJvcHMucm91dGVyLnN0YXRlLmxheWVyVmFsdWVBcmVhfSlcbiAgICAgIH1cbiAgICAgIGxldCBvcHRpb25zID0gW107XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnMpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzKS5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2lkXS5sYXllckRhdGE7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMubGF5ZXJzW2lkXSkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRncm91cCBrZXk9e2lkfSBzdHlsZT17e2NvbG9yOiBcInZhcigtLW1haW4tY29sb3IpXCJ9fSBsYWJlbD17bGF5ZXIubmFtZX0+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tpZF0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLnByb3BzLmxheWVyc1tpZF1bbmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtuYW1lfSBzdHlsZT17e2NvbG9yOiBcInZhcigtLW1haW4tY29sb3IpXCJ9fSB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoe2lkOiBpZCwgbmFtZTogbmFtZX0pfT57bmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L29wdGdyb3VwPjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wcm9wcy5sYXllcnNbaWRdKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMucHJvcHMubGF5ZXJzW2lkXVtuYW1lXTtcbiAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtuYW1lfSBzdHlsZT17e2NvbG9yOiBcInZhcigtLW1haW4tY29sb3IpXCJ9fSB2YWx1ZT17SlNPTi5zdHJpbmdpZnkoe2lkOiBpZCwgbmFtZTogbmFtZX0pfT57bmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVycykubWFwKChpZCkgPT4ge1xuICAgICAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpZF0ubGF5ZXJEYXRhO1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmxheWVyc1tpZF0pLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMucHJvcHMubGF5ZXJzW2lkXVtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17bmFtZX0gc3R5bGU9e3tjb2xvcjogXCJ2YXIoLS1tYWluLWNvbG9yKVwifX0gdmFsdWU9e0pTT04uc3RyaW5naWZ5KHtpZDogaWQsIG5hbWU6IG5hbWV9KX0+e25hbWV9PC9vcHRpb24+XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItbGF5ZXItc2VsZWN0aW9uXCIgb25DaGFuZ2U9e3RoaXMuc2V0TGF5ZXJPclZhbHVlfSB2YWx1ZT17ZGVmYXVsdExheWVyfT5cbiAgICAgICAgICB7b3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXIgYzRnLXBvcHVwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSl9Lz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2ZpbGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBvbk1vdXNlVXA9eygpID0+IHRoaXMuc2V0UHJvZmlsZShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdICsgKHBhcnNlSW50KGl0ZW0uaWQsIDEwKSA9PT0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZSwgMTApID8gXCIgYzRnLWFjdGl2ZVwiIDogXCIgYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9IHRpdGxlPXt0aGlzLnByb2ZpbGVMYW5nW3RoaXMucHJvZmlsZVRyYW5zbGF0aW9uW2l0ZW0uaWRdXX0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiB0cnVlfSl9IGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXSArIFwiIGM0Zy1hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBzaG93UHJvZmlsZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2VvbSIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkF1dG9jb21wbGV0ZUlucHV0IiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImxpc3RlbmVyUmVnaXN0ZXJlZCIsInN0YXRlIiwiYXJyQWRkcmVzc2VzIiwid3JhcHBlclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiYmluZCIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnREaWRNb3VudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJfdGhpczIiLCJzY29wZSIsInN1Ym1pdEZ1bmN0aW9uIiwiZmllbGQiLCIkIiwiY3NzSWQiLCJ0cmlnZ2VyIiwicGVyZm9ybVNlYXJjaENhbGxiYWNrIiwiaW5kZXhPZiIsInJvdXRlciIsInBlcmZvcm1BcmVhIiwicGVyZm9ybVZpYVJvdXRlIiwicGVyZm9ybVNlYXJjaCIsImVudGVyTGlzdGVuZXIiLCJvcHRfdGhpcyIsImtleUNvZGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsIiwibGVuZ3RoIiwib2JqRnVuY3Rpb25zIiwiZGVsZXRlRnVuY3Rpb24iLCJpZCIsImluZGV4IiwiY291bnRlciIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0Iiwib2JqU2V0dGluZ3MiLCJwcm94eVVybCIsImtleUF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0ZUFkZHJlc3MiLCJsaXN0QXV0b2NvbXBsZXRlIiwibGlzdEFkcmVzc2VzIiwiX2xvb3AiLCJlbGVtQWRkcmVzcyIsImNsaWNrRXZlbnQiLCJzZWxmIiwialF1ZXJ5IiwibmFtZSIsInBvaW50IiwiUG9pbnQiLCJwb3MiLCJpbmNsdWRlcyIsInNldFJvdXRlRnJvbSIsInNldFJvdXRlVG8iLCJhZGRPdmVyUG9pbnQiLCJzZXRBcmVhUG9pbnQiLCJsaXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbk1vdXNlVXAiLCJwdXNoIiwicmVmIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIm9uS2V5RG93biIsImF1dG9Db21wbGV0ZSIsInNldENlbnRlciIsImNlbnRlciIsImlucHV0IiwiY3NzQ2xhc3MiLCJzZXR0aW5ncyIsIm9iakNlbnRlciIsImJCb3giLCJwYXJzZUZsb2F0IiwidXJsIiwiZ2Vvc2VhcmNoUGFyYW1zIiwicGFyYW0iLCJyZXN1bHRDb3VudCIsImFqYXgiLCJkb25lIiwiZGF0YSIsIl90aGlzMyIsImRpc3BsYXlfbmFtZSIsIl9sb29wMiIsImlzSW5Cb3VuZGluZ0JveCIsImxvbiIsImxhdCIsImRpc3RhbmNlIiwic3FydCIsImVsZW1lbnQiLCJmb3VuZEluZGV4IiwiZmluZEluZGV4IiwiZmluZEVsZW1lbnQiLCJzb3J0IiwiYSIsImIiLCJkaXN0IiwiX2xvb3AzIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJiYm94IiwiQ29tcG9uZW50IiwiX2NvbnRyb2wiLCJfYzRnTWFwc0NvbnN0YW50IiwiSG9yaXpvbnRhbFBhbmVsIiwiYnV0dG9uIiwidGl0bGUiLCJkaXJlY3Rpb24iLCJhcHBlbmRDaGlsZCIsIm1hcENvbnRyb2xsZXIiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsImNsaWNrQ29udHJvbCIsIm9uIiwiY29udHJvbCIsIkNvbnRyb2wiLCJvcGVuIiwiY2hpbGRzIiwiY3JlYXRlQ2hpbGRzIiwiZGl2IiwiZm9yRWFjaCIsImNsb3NlIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNzc0NvbnN0YW50cyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiT0xfVU5TRUxFQ1RBQkxFIiwic3R5bGUiLCJ0b3AiLCJDT05UUk9MX0NPTlRBSU5FUl9UUiIsIkNPTlRST0xfQ09OVEFJTkVSX0JMIiwiYm90dG9tIiwiQ09OVFJPTF9DT05UQUlORVJfQlIiLCJhZGRDb250ZW50IiwiY29udGVudCIsIl9jNGdBdXRvY29tcGxldGVJbnB1dCIsIl9yb3V0aW5nQ29uc3RhbnRJMThuIiwiX3Byb2oiLCJSb3V0ZXJBZGRyZXNzRmllbGQiLCJsYW5ndWFnZUNvbnN0YW50cyIsImdldExhbmd1YWdlIiwiZ2V0UG9zaXRpb24iLCJyZW1vdmVDb250ZW50IiwibWFwRGF0YSIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxEZXN0aW5hdGlvbiIsInNldFRvQ2VudGVyIiwibWFwIiwiZ2V0VmlldyIsImdldENlbnRlciIsImNvb3JkaW5hdGVzIiwiY29vcmRzIiwidHJhbnNmb3JtIiwiaGFuZGxlUG9zaXRpb24iLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJsYXllcl9sb2FkZWQiLCJwb3NpdGlvbkJ1dHRvbiIsIndpdGhQb3NpdGlvbiIsIlJPVVRFX1BPU0lUSU9OIiwiaHRtbEZvciIsImxhYmVsIiwicG9wdXAiLCJjb250YWluZXJBZGRyZXNzZXMiLCJSRU1PVkVfQUREUkVTUyIsImNsZWFySW5wdXQiLCJoYW5kbGVOZXdQb3NpdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29uc29sZSIsIndhcm4iLCJyZWNhbGN1bGF0ZVJvdXRlIiwiX2M0Z1JvdXRlckFkZHJlc3NGaWVsZCIsIl9jNGdSb3V0ZXJQcm9maWxlU2VsZWN0aW9uIiwiX2M0Z1JvdXRlckxheWVyU2VsZWN0aW9uIiwiX2M0Z1JvdXRlckRldG91clNsaWRlciIsIl9yb3V0aW5nQ29uc3RhbnRJMThuRGUiLCJfcm91dGluZ0NvbnN0YW50STE4bkVuIiwiUm91dGVyQWRkcmVzc0lucHV0IiwibGFuZyIsImxhbmdDb25zdGFudHMiLCJyb3V0aW5nQ29uc3RhbnRzR2VybWFuIiwicm91dGluZ0NvbnN0YW50c0VuZ2xpc2giLCJvdmVyRm9ybSIsImVuYWJsZU92ZXJQb2ludHMiLCJtb2RlIiwia2V5cyIsIm92ZXJTZXR0aW5ncyIsIm92ZXJQb2ludHMiLCJpdGVtIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJvdmVyQWRkcmVzc2VzIiwiZnJvbUNsc0FkZGl0aW9uIiwidG9DbHNBZGRpdGlvbiIsImFyZWFDbHNBZGRpdGlvbiIsInN3YXBGdW5jdGlvbiIsInN3YXBQb2ludHMiLCJ0bXBGcm9tIiwic3dhcEJ1dHRvbiIsInN3aXRjaFRhcmdldHMiLCJvdmVyQnV0dG9uIiwib3ZlckZ1bmN0aW9uIiwiaWR4IiwiRnJhZ21lbnQiLCJST1VURVJfRlJPTSIsImZyb21GdW5jdGlvbnMiLCJyZXNldEZ1bmN0aW9ucyIsImZyb20iLCJmcm9tQWRkcmVzcyIsIlJPVVRFUl9UTyIsInRvRnVuY3Rpb25zIiwidG8iLCJ0b0FkZHJlc3MiLCJST1VURVJfQ0VOVEVSIiwiYXJlYUZ1bmN0aW9ucyIsImFyZWEiLCJhcmVhQWRkcmVzcyIsImRldGFpbHMiLCJmZWF0dXJlU2VhcmNoQ29udHJvbHMiLCJzaG93RmVhdHVyZXMiLCJsYXllcnMiLCJSb3V0ZXJMYXllclNlbGVjdGlvbiIsImFjdGl2ZUxheWVyVmFsdWUiLCJsYXllclZhbHVlUm91dGUiLCJsYXllclZhbHVlQXJlYSIsIlJvdXRlckRldG91clNsaWRlciIsIm1pbiIsInNsaWRlck9wdGlvbnMiLCJtYXgiLCJzdGFydEJ1dHRvbiIsInJvdXRlU3RhcnRCdXR0b24iLCJTVEFSVF9ST1VURSIsIl9jNGdIb3Jpem9udGFsUGFuZWwiLCJfYzRnUm91dGVyQWRkcmVzc0lucHV0IiwiX2M0Z1RpdGxlYmFyIiwiUm91dGVyUHJvZmlsZVNlbGVjdGlvbiIsImxhenkiLCJSb3V0ZXJDb250cm9scyIsIl9Ib3Jpem9udGFsUGFuZWwiLCJzaG93Rm9ybSIsInNldFJvdXRlTW9kZSIsInNldEFyZWFNb2RlIiwiYXJyQ29tcG9uZW50cyIsInJvdXRlcl9kaXYiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRNb2RlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJtb2RlU3dpdGNoZXIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwicHJvZmlsZXMiLCJjdXJyZW50UHJvZmlsZSIsIlRpdGxlYmFyIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyIiwiaGVhZGxpbmUiLCJoZWFkZXJDbGFzcyIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJ0b2dnbGVEZXRhaWxzIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJ0b3BWYWx1ZSIsImNvbnRhaW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvZmZzZXRIZWlnaHQiLCJzZXRPcGVuIiwicm91dGVyQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImV2dCIsImhpZGRlbiIsIl9yb3V0aW5nQ29uc3RhbnRzIiwiX2M0Z01hcHNVdGlscyIsImhhbmRsZUNoYW5nZSIsInVwZGF0ZWQiLCJyb3V0aW5nQ29uc3RhbnRzIiwiUk9VVEVfVE9HR0xFIiwicmFuZ2UiLCJhdHRyIiwicG9zT2Zmc2V0Iiwicm91bmQiLCJvdXRwdXQiLCJuZXh0IiwiY3NzIiwidGV4dCIsInVzZVBlcm1hbGluayIsInBlcm1hbGluayIsInVwZGF0ZUxpbmtGcmFnbWVudHMiLCJkZXRvdXJSb3V0ZSIsImRldG91ckFyZWEiLCJhcmVhVmFsdWUiLCJkZXRvdXJFbGVtZW50IiwiUk9VVEVfREVUT1VSIiwic3RlcCIsIk9VVFBVVF9ERVRPVVIiLCJhcnJPcHRpb25zIiwiYXJyRGV0b3VyT3B0aW9uc1JvdXRlIiwiYXJyRGV0b3VyT3B0aW9uc0FyZWEiLCJvcHRpb25zIiwiZWxlbSIsIm9uQ2hhbmdlIiwicXVlcnlTZWxlY3RvciIsInNldExheWVyIiwic2V0TGF5ZXJWYWx1ZSIsInNldExheWVyT3JWYWx1ZSIsImxheWVyIiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJjdXJyZW50TGF5ZXIiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwiZGVmYXVsdExheWVyIiwiYXJyTGF5ZXJzIiwib2JqTGF5ZXJzIiwibGF5ZXJWYWx1ZVNlbGVjdGlvbiIsImxheWVyQ2hhbmdlciIsIm1hcExhYmVsIiwibGF5ZXJEYXRhIiwic3RyaW5naWZ5IiwiY29sb3IiLCJvcHRpb24iLCJzZXRQcm9maWxlIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwicHJvZmlsZUxhbmciLCJDQVIiLCJUUlVDSyIsIkJJS0UiLCJST0FEQklLRSIsIk1PVU5UQUlOQklLRSIsIkVMRUNUUklDQklLRSIsIldBTEsiLCJXQU5ERVIiLCJXSEVFTCIsIlNDT09UIiwiTU9UT1JCSUtFIiwic2hvd1BvcHVwIiwicm91dGVyX3Byb2ZpbGVzX2luaXRpYWwiLCJwcm9maWxlIiwic2hvd1Byb2ZpbGVTZWxlY3Rpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==