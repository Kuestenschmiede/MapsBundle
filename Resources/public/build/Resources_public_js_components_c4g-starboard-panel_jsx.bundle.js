(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-starboard-panel_jsx"],{

/***/ "./Resources/public/js/components/c4g-starboard-layer-element.jsx":
/*!************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-layer-element.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gStarboardLayerElement = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var olExtent = _interopRequireWildcard(__webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style */ "./Resources/public/js/components/c4g-starboard-style.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var C4gStarboardLayerElement = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(C4gStarboardLayerElement, _Component);

  var _super = _createSuper(C4gStarboardLayerElement);

  function C4gStarboardLayerElement(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, C4gStarboardLayerElement);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.layerClick = _this.layerClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.layerZoomTo = _this.layerZoomTo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.spanClick = _this.spanClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.changeCollapseState = _this.changeCollapseState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.parentCallback = _this.parentCallback.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(C4gStarboardLayerElement, [{
    key: "showLayer",
    value: function showLayer() {
      var showElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scope = this;
      var features = false;
      var vectorLayer = false;

      if (showElements) {
        if (Array.isArray(showElements)) {
          features = showElements;
        } else if (showElements instanceof _layer.Vector) {
          vectorLayer = showElements;
        }
      } else {
        features = features || scope.props.layer.features;
        vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
      }

      features = features || scope.props.layer.features;
      var layerController = scope.props.mapController.proxy.layerController;

      if (features && features.length > 0) {
        layerController.show(scope.props.layer.loader, features, scope.props.id);
      } else if (vectorLayer) {
        layerController.show(scope.props.layer.loader, vectorLayer, scope.props.id);
      } else {
        layerController.show(false, false, scope.props.id);
      }

      scope.props.mapController.setLayerStateWithId(scope.props.id, true);
    }
  }, {
    key: "hideLayer",
    value: function hideLayer() {
      var hideElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scope = this;
      var features = false;
      var vectorLayer = false;

      if (hideElements) {
        if (Array.isArray(hideElements)) {
          features = hideElements;
        } else if (hideElements instanceof _layer.Vector) {
          vectorLayer = hideElements;
        }
      } else {
        features = features || scope.props.layer.features;
        vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
      }

      var layerController = scope.props.mapController.proxy.layerController;

      if (features && features.length > 0) {
        layerController.hide(scope.props.layer.loader, features, scope.props.id);
      } else if (vectorLayer) {
        layerController.hide(scope.props.layer.loader, vectorLayer, scope.props.id);
      } else {
        layerController.hide(false, false, scope.props.id);
      }

      scope.props.mapController.setLayerStateWithId(scope.props.id, false);
    }
  }, {
    key: "changeChildState",
    value: function changeChildState(child, childState, active) {
      if (active) {
        this.showLayer(child.features || child.vectorLayer);
      } else {
        this.hideLayer(child.features || child.vectorLayer);
      }

      if (child.childs && child.childs.length > 0) {
        for (var childId in child.childs) {
          if (child.childs.hasOwnProperty(childId)) {
            var currentChildState = childState.childStates[childId].active;

            if (currentChildState !== active) {
              childState.childStates[childId] = this.changeChildState(child.childs[childId], childState.childStates[childId], active);
            }
          }
        }
      }

      this.props.mapController.setLayerStateWithId(childState.id, active);
      childState.active = active;
      return childState;
    }
  }, {
    key: "parentCallback",
    value: function parentCallback(key, newChildState) {
      var newState = this.props.layerStates;
      newState.childStates[key] = newChildState;

      if (newState.active != newChildState.active) {
        // newState.active = newChildState.active;
        if (newChildState.active) {
          this.showLayer();
        } else {
          this.hideLayer();
        }
      }

      this.props.parentCallback(this.props.keyId, newState);
    }
  }, {
    key: "layerClick",
    value: function layerClick(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();

      if (this.props.layerStates.greyed) {
        return false;
      }

      if (!this.props.layerStates.active) {
        this.showLayer();
      } else {
        this.hideLayer();
      }

      var newState = this.props.layerStates;

      if (this.props.layer.childs && this.props.layer.childs.length > 0) {
        var layerChilds = this.props.layer.childs;

        for (var childId in layerChilds) {
          if (layerChilds.hasOwnProperty(childId)) {
            var currentChildState = newState.childStates[childId].active;

            if (currentChildState !== newState.active) {
              newState.childStates[childId] = this.changeChildState(layerChilds[childId], newState.childStates[childId], newState.active);
            }
          }
        }
      } // this.props.parentCallback(this.props.keyId, newState)

    }
  }, {
    key: "layerZoomTo",
    value: function layerZoomTo(e) {
      var _this2 = this;

      if (!this.props.layerStates.active) {
        this.layerClick(e);
      }

      this.props.mapController.proxy.layerController.zoomTo(this.props.layer);
      this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer, "markLocstyle", true);
      window.setTimeout(function () {
        _this2.props.mapController.proxy.layerController.setChildFeatureFlag(_this2.props.layer, "markLocstyle", false);
      }, 3000);
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {
      this.props.layerStates.childStates[id] = state;
      this.props.changeCollapseState(this.props.keyId, this.props.layerStates);
    }
  }, {
    key: "spanClick",
    value: function spanClick(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      this.props.layerStates.collapsed = !this.props.layerStates.collapsed;
      this.props.changeCollapseState(this.props.keyId, this.props.layerStates);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var scope = this;
      var stylePicture = null;
      var spanZoom = null;

      if (this.props.mapController.data.starboard.showLocstyles === "1" && this.props.layer.locstyle && this.props.styleData && this.props.styleData.arrLocStyles && this.props.styleData.arrLocStyles[this.props.layer.locstyle]) {
        if (this.props.layer.addZoomTo) {
          stylePicture = _react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
            styleData: this.props.styleData,
            styleId: this.props.layer.locstyle,
            tooltip: this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE + this.props.layer.name + this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,
            clickEvent: this.layerZoomTo
          });
        } else {
          stylePicture = _react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
            styleData: this.props.styleData,
            styleId: this.props.layer.locstyle,
            tooltip: this.props.layer.name
          });
        }
      } else if (this.props.layer.addZoomTo && !this.props.mapController.data.starboard.invertZoomActivate) {
        spanZoom = _react["default"].createElement("span", {
          className: "c4g-geojson-button",
          title: this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE + this.props.layer.name + this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,
          onMouseUp: function onMouseUp(event) {
            return _this3.layerZoomTo(event);
          }
        });
      }

      var cssClass = this.props.layerStates.active ? _c4gMapsConstant.cssConstants.ACTIVE : _c4gMapsConstant.cssConstants.INACTIVE;

      if (this.props.layerStates.greyed) {
        cssClass += " " + _c4gMapsConstant.cssConstants.DISABLED;
      }

      var openClose = this.props.layerStates.collapsed ? _c4gMapsConstant.cssConstants.CLOSE : _c4gMapsConstant.cssConstants.OPEN;
      var objChilds = this.props.layer.childs;
      var linkText;
      var linkSwitch;

      if (this.props.mapController.data.starboard.invertZoomActivate && this.props.layer.addZoomTo) {
        linkText = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("a", {
          title: this.props.layer.name,
          className: "c4g-starboard-text",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerZoomTo(event);
          }
        }, this.props.layer.name));
        linkSwitch = _react["default"].createElement("a", {
          className: cssClass + " c4g-starboard-checkbox-icon",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        });
      } else {
        linkText = _react["default"].createElement("a", {
          title: this.props.layer.name,
          className: cssClass,
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        }, this.props.layer.name);
      }

      if (objChilds && objChilds.length) {
        var span = _react["default"].createElement("span", {
          className: _c4gMapsConstant.cssConstants.ICON,
          onMouseUp: function onMouseUp(event) {
            return _this3.spanClick(event);
          }
        });

        return _react["default"].createElement("li", {
          className: openClose + " c4g-starboard-list-element"
        }, span, stylePicture, spanZoom, linkText, linkSwitch, _react["default"].createElement("ul", null, objChilds.map(function (item, id) {
          if (_this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, _this3.props.layerStates.childStates[id])) {
            return _react["default"].createElement(C4gStarboardLayerElement, {
              key: id,
              keyId: id,
              id: item.id,
              mapController: _this3.props.mapController,
              parentCallback: _this3.parentCallback,
              strFilter: _this3.props.strFilter,
              filterFunc: _this3.props.filterFunc,
              changeCollapseState: _this3.changeCollapseState,
              lang: _this3.props.lang,
              byPassChilds: _this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, false, false),
              layerStates: _this3.props.layerStates.childStates[id],
              layer: item,
              styleData: _this3.props.styleData,
              fnResize: _this3.props.fnResize
            });
          }
        })));
      } else {
        var _spanZoom = null;
        var layerClick = this.layerClick;

        if (this.props.layer.zoomTo) {
          layerClick = this.layerZoomTo;
          cssClass = "c4g-geojson-button";
        }

        return _react["default"].createElement("li", {
          className: openClose + " c4g-starboard-list-element"
        }, stylePicture, _spanZoom, linkText, linkSwitch);
      }
    }
  }]);
  return C4gStarboardLayerElement;
}(_react.Component);

exports.C4gStarboardLayerElement = C4gStarboardLayerElement;

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-layerswitcher.jsx":
/*!************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-layerswitcher.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StarboardLayerswitcher = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerElement = __webpack_require__(/*! ./c4g-starboard-layer-element */ "./Resources/public/js/components/c4g-starboard-layer-element.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StarboardLayerswitcher = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StarboardLayerswitcher, _Component);

  var _super = _createSuper(StarboardLayerswitcher);

  function StarboardLayerswitcher(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StarboardLayerswitcher);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInitialStates", function () {
      _this.initialCounterOff = 0;
      _this.initialCounterOn = 0;

      for (var i in _this.props.layerStates) {
        if (_this.props.layerStates.hasOwnProperty(i)) {
          if (_this.props.layerStates[i].active) {
            _this.initialCounterOn++;
          } else {
            _this.initialCounterOff++;
          }

          if (_this.props.layerStates[i].childStates) {
            for (var j in _this.props.layerStates[i].childStates) {
              if (_this.props.layerStates[i].childStates.hasOwnProperty(j)) {
                _this.getInitialStateChild(_this.props.layerStates[i].childStates[j]);
              }
            }
          }
        }
      }

      return _this.initialCounterOn > _this.initialCounterOff;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "callbackFunction", function (key, newState) {
      var newStates = _this.props.layerStates;
      newStates[key] = newState;

      _this.props.parentCallback(newStates);
    });
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.setLayerFilter = _this.setLayerFilter.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleAllLayers = _this.toggleAllLayers.bind((0, _assertThisInitialized2["default"])(_this));
    _this.changeCollapseState = _this.changeCollapseState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      initialized: false,
      layerFilter: ""
    }; // this.buttonEnabled = this.getInitialStates();

    return _this;
  }

  (0, _createClass2["default"])(StarboardLayerswitcher, [{
    key: "getInitialStateChild",
    value: function getInitialStateChild(child) {
      if (child.active) {
        this.initialCounterOn++;
      } else {
        this.initialCounterOff++;
      }

      if (child.childStates) {
        for (var i in child.childStates) {
          if (child.childStates.hasOwnProperty(i)) {
            this.getInitialStateChild(child.childStates[i]);
          }
        }
      }
    }
  }, {
    key: "setLayerFilter",
    value: function setLayerFilter() {
      var filterValue = jQuery(".c4g-starboard-layertree-filter-field").val() || ""; //fallback

      this.setState({
        layerFilter: filterValue
      });
    }
  }, {
    key: "filterFunc",
    value: function filterFunc(strFilter, layer) {
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var digDeeper = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var show = false;

      if (layer && layer.name && (layer.name.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1 || layer.name.toUpperCase().indexOf(strFilter.toUpperCase()) !== -1)) {
        show = true;

        if (strFilter && state) {
          state.collapsed = false;
        }
      } else if (layer.tags && layer.tags.find(function (element) {
        return element.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1;
      })) {
        show = true;

        if (strFilter && state) {
          state.collapsed = false;
        }
      } else if (digDeeper) {
        for (var childId in layer.childs) {
          if (layer.childs.hasOwnProperty(childId) && !show) {
            show = this.filterFunc(strFilter, layer.childs[childId], state.childStates[childId]);

            if (strFilter && show && state) {
              state.collapsed = false;
            }
          }
        }
      }

      return show;
    }
  }, {
    key: "toggleAllLayers",
    value: function toggleAllLayers() {
      var scope = this;
      var states = this.props.layerStates;
      var layers = this.props.objLayers;

      function activateLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          if (!states[i].active) {
            scope.props.mapController.proxy.layerController.show(layers[i].loader, layers[i].features || layers[i].vectorLayer);
          }

          states[i].active = true;

          if (states[i].childStates && states[i].childStates.length > 0) {
            states[i].childStates = activateLayers(layers[i].childs, states[i].childStates);
          }
        }

        scope.buttonEnabled = true;
        return states;
      }

      function deactivateLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          if (states[i].active) {
            scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].features || layers[i].vectorLayer);
          }

          states[i].active = false;

          if (states[i].childStates && states[i].childStates.length > 0) {
            states[i].childStates = deactivateLayers(layers[i].childs, states[i].childStates);
          }
        }

        scope.buttonEnabled = false;
        return states;
      }

      if (!scope.buttonEnabled) {
        states = activateLayers(layers, states);
      } else {
        states = deactivateLayers(layers, states);
      }

      this.props.parentCallback(states);
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.layerStates && this.props.layerStates.length > 0 && !(this.initialCounterOff && this.initialCounterOn)) {
        this.buttonEnabled = this.getInitialStates();
      }

      var layers, states, filter;
      layers = this.props.objLayers;
      states = this.props.layerStates;

      if (!this.props.active) {
        return null;
      }

      filter = '';

      if (this.props.mapController.data.layerswitcher.filter) {
        filter = _react["default"].createElement("div", {
          className: "c4g-starboard-layertree-filter without-button"
        }, _react["default"].createElement("input", {
          className: "c4g-starboard-layertree-filter-field",
          type: "text",
          onInput: this.setLayerFilter,
          placeholder: "\uF002"
        }));
      }

      var headline = "";

      if (this.props.mapController.data.starboard.button) {
        headline = _react["default"].createElement("a", {
          className: "c4g-starboard-headline-link " + (this.buttonEnabled ? "c4g-active" : "c4g-inactive"),
          onMouseUp: this.toggleAllLayers
        }, this.props.headline || this.props.lang.LAYERSWITCHER_TOGGLE_ALL);
      } else {
        headline = _react["default"].createElement("div", {
          className: "contentHeadline"
        }, this.props.headline);
      }

      return _react["default"].createElement(_react["default"].Fragment, null, headline, filter, _react["default"].createElement("div", {
        className: "c4g-content-layertree"
      }, _react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE
      }, _react["default"].createElement("ul", null, layers.map(function (item, id) {
        if (_this2.filterFunc(_this2.state.layerFilter, item, states[id])) {
          return _react["default"].createElement(_c4gStarboardLayerElement.C4gStarboardLayerElement, {
            key: id,
            keyId: id,
            id: item.id,
            mapController: _this2.props.mapController,
            parentCallback: _this2.callbackFunction,
            layer: item,
            styleData: _this2.props.styleData,
            changeCollapseState: _this2.props.changeCollapseState,
            layerStates: states[id],
            lang: _this2.props.lang,
            byPassChilds: _this2.filterFunc(_this2.state.layerFilter, item, false, false),
            strFilter: _this2.state.layerFilter,
            filterFunc: _this2.filterFunc,
            fnResize: _this2.props.fnResize
          });
        }
      })))));
    }
  }]);
  return StarboardLayerswitcher;
}(_react.Component);

exports.StarboardLayerswitcher = StarboardLayerswitcher;

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-panel.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-panel.jsx ***!
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

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerswitcher = __webpack_require__(/*! ./c4g-starboard-layerswitcher */ "./Resources/public/js/components/c4g-starboard-layerswitcher.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StarboardPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StarboardPanel, _Component);

  var _super = _createSuper(StarboardPanel);

  function StarboardPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StarboardPanel);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_STARBOARD;
    element.className = "c4g-starboard-control ol-unselectable ol-control ";

    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }

    if (props.external) {
      element.className += " c4g-external";
    }

    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.slideOutCollidingElements = _this.slideOutCollidingElements.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resizeFunction = _this.resizeFunction.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.createStylingForIcon = _this.createStylingForIcon.bind((0, _assertThisInitialized2["default"])(_this)); // state variables (every property that has influence on this component)

    _this.state = {
      // either "top" or "bottom"
      direction: props.direction || "right",
      open: props.open || false,
      className: props.className || "c4g-starboard-panel",
      childs: props.childs || [],
      control: control,
      activeTab: 0
    };
    return _this;
  }

  (0, _createClass2["default"])(StarboardPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "setActiveTab",
    value: function setActiveTab(idx) {
      this.setState({
        activeTab: idx
      });
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      var mapData = this.props.mapController.data;
      var className = this.state.className + "-" + this.state.direction;
      className += " " + (this.state.open ? "c4g-open" : "c4g-close");

      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      }

      var buttonSwitcher = "";
      var buttons = [];

      if (this.props.tabLayers.length > 0) {
        var regularButton = _react["default"].createElement("button", {
          key: this.props.tabLayers.length,
          title: this.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,
          className: "c4g-starboard-view-trigger-layerswitcher",
          onMouseUp: function onMouseUp() {
            scope.setActiveTab(0);
          }
        });

        buttons.push(regularButton);
        buttons.push(this.props.tabLayers.map(function (element, index) {
          var iconCode = element.awesomeIcon;
          scope.createStylingForIcon(iconCode, index);
          return _react["default"].createElement("button", {
            key: index,
            title: element[0].name,
            className: "c4g-starboard-view-trigger-tab-" + index,
            onMouseUp: function onMouseUp() {
              scope.setActiveTab(index + 1);
            }
          });
        }));
        buttonSwitcher = _react["default"].createElement("div", {
          className: "c4g-starboard-switcher"
        }, buttons);
      }

      var tabs = "";

      if (this.props.tabLayers.length > 0) {
        tabs = _react["default"].createElement(_react["default"].Fragment, null, this.props.tabLayers.map(function (element, index) {
          return _react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
            key: index,
            mapController: scope.props.mapController,
            objLayers: scope.props.tabLayers[index],
            parentCallback: scope.props.tabCallback,
            layerStates: scope.props.tabStates,
            openfunc: scope.open,
            headline: element[0].name,
            open: scope.state.open,
            active: index + 1 === scope.state.activeTab
          });
        }));
      }

      return _react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER
      }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-starboard-header",
        headerClass: _c4gMapsConstant.cssConstants.STARBOARD_HEADLINE,
        header: mapData.starboard.label || this.langConstants.STARBOARD,
        closeBtnClass: _c4gMapsConstant.cssConstants.STARBOARD_CLOSE,
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), buttonSwitcher, _react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_CONTAINER
      }, _react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
        key: this.props.tabLayers.length,
        mapController: this.props.mapController,
        lang: this.langConstants,
        objLayers: this.props.objLayers,
        styleData: this.props.styleData,
        parentCallback: this.props.parentCallback,
        layerStates: this.props.layerStates,
        changeCollapseState: this.props.changeCollapseState,
        openfunc: this.open,
        headline: mapData.layerswitcher.label,
        open: this.state.open,
        active: scope.state.activeTab === 0
      }), tabs));
    }
  }, {
    key: "createStylingForIcon",
    value: function createStylingForIcon(iconCode, index) {
      var style = document.createElement("style"); // webkit hack:

      style.appendChild(document.createTextNode(""));
      document.head.appendChild(style);
      var styleSheet = style.sheet;
      styleSheet.insertRule("button.c4g-starboard-view-trigger-tab-" + index + ":before {\n" + "  content: \"\\" + iconCode + "\";\n" + "  font-family: 'Font Awesome 5 Free';\n" + "  font-weight: 900;\n" + "  font-size: inherit;\n" + "}");
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.setState({
        open: true
      }, function () {
        return _this2.slideOutCollidingElements();
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      this.setState({
        open: false
      }, function () {
        return _this3.slideInCollidingElements();
      });
    }
  }, {
    key: "resizeFunction",
    value: function resizeFunction() {
      var scope = this;
      window.requestAnimationFrame(function () {
        scope.slideOutCollidingElements();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.open) {
        this.slideOutCollidingElements();
      } else {
        this.slideInCollidingElements();
      }

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
    /**
     * Moves the buttons that would collide with the panel.
     */

  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      jQuery(".c4g-starboard-container").addClass("c4g-open").removeClass("c4g-close");
    }
    /**
     * Undoes the previous button movement.
     */

  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      jQuery(".c4g-starboard-container").addClass("c4g-close").removeClass("c4g-open");
    }
  }]);
  return StarboardPanel;
}(_react.Component);

exports.default = StarboardPanel;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giXSwibmFtZXMiOlsiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImFkZFpvb21UbyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJzcGFuIiwiSUNPTiIsIm1hcCIsIml0ZW0iLCJieVBhc3NDaGlsZHMiLCJmaWx0ZXJGdW5jIiwic3RyRmlsdGVyIiwiZm5SZXNpemUiLCJDb21wb25lbnQiLCJTdGFyYm9hcmRMYXllcnN3aXRjaGVyIiwiaW5pdGlhbENvdW50ZXJPZmYiLCJpbml0aWFsQ291bnRlck9uIiwiaSIsImoiLCJnZXRJbml0aWFsU3RhdGVDaGlsZCIsIm5ld1N0YXRlcyIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiZWxlbWVudCIsInN0YXRlcyIsImxheWVycyIsIm9iakxheWVycyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJnZXRJbml0aWFsU3RhdGVzIiwiZmlsdGVyIiwibGF5ZXJzd2l0Y2hlciIsImhlYWRsaW5lIiwiYnV0dG9uIiwiTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsImNhbGxiYWNrRnVuY3Rpb24iLCJTdGFyYm9hcmRQYW5lbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxhbmdDb25zdGFudHMiLCJ0aXRsZSIsIkNUUkxfU1RBUkJPQVJEIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImFkZENvbnRyb2wiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImlkeCIsIm1hcERhdGEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInNldEFjdGl2ZVRhYiIsInB1c2giLCJpbmRleCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9IRUFETElORSIsImxhYmVsIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSx3Qjs7Ozs7QUFFWCxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWDtBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsZ0RBQWxCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixnREFBbkI7QUFDQSxVQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixnREFBakI7QUFDQSxVQUFLRyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkgsSUFBekIsZ0RBQTNCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixnREFBdEI7QUFSaUI7QUFTbEI7Ozs7V0FHRCxxQkFBK0I7QUFBQSxVQUFyQkssWUFBcUIsdUVBQU4sSUFBTTtBQUM3QixVQUFNUCxLQUFLLEdBQUcsSUFBZDtBQUNBLFVBQUlRLFFBQVEsR0FBRyxLQUFmO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLEtBQWxCOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDaEIsWUFBSUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFlBQWQsQ0FBSixFQUFpQztBQUMvQkMsa0JBQVEsR0FBR0QsWUFBWDtBQUNELFNBRkQsTUFFTyxJQUFJQSxZQUFZLFlBQVlLLGFBQTVCLEVBQW9DO0FBQ3pDSCxxQkFBVyxHQUFHRixZQUFkO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTEMsZ0JBQVEsR0FBR0EsUUFBUSxJQUFJUixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkws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QXBFO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxvQ0FBMkI7QUFDekJuRCxZQUFNLENBQUMsMEJBQUQsQ0FBTixDQUFtQ2tELFFBQW5DLENBQTRDLFdBQTVDLEVBQXlEQyxXQUF6RCxDQUFxRSxVQUFyRTtBQUNEOzs7RUF6S3lDaEUsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1zdGFyYm9hcmQtcGFuZWxfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMubGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGF5ZXJab29tVG8gPSB0aGlzLmxheWVyWm9vbVRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcGFuQ2xpY2sgPSB0aGlzLnNwYW5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIHNob3dMYXllcihzaG93RWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNob3dFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBzaG93RWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKHNob3dFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IHNob3dFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKXtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCB0cnVlKVxuICB9XG5cbiAgaGlkZUxheWVyKGhpZGVFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlkZUVsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IGhpZGVFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoaGlkZUVsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmICh2ZWN0b3JMYXllcikge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIGZhbHNlKVxuICB9XG4gIGNoYW5nZUNoaWxkU3RhdGUgKGNoaWxkLCBjaGlsZFN0YXRlLCBhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRzICYmIGNoaWxkLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGNoaWxkLmNoaWxkcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUoY2hpbGQuY2hpbGRzW2NoaWxkSWRdLCBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBhY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChjaGlsZFN0YXRlLmlkLCBhY3RpdmUpXG4gICAgY2hpbGRTdGF0ZS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgcmV0dXJuIGNoaWxkU3RhdGU7XG4gIH1cbiAgcGFyZW50Q2FsbGJhY2sgKGtleSwgbmV3Q2hpbGRTdGF0ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNba2V5XSA9IG5ld0NoaWxkU3RhdGU7XG4gICAgaWYgKG5ld1N0YXRlLmFjdGl2ZSAhPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgLy8gbmV3U3RhdGUuYWN0aXZlID0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmU7XG4gICAgICBpZiAobmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGF5ZXJDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXJDaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyQ2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gbmV3U3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShsYXllckNoaWxkc1tjaGlsZElkXSwgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIG5ld1N0YXRlLmFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJab29tVG8oZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci56b29tVG8odGhpcy5wcm9wcy5sYXllcik7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICBsaW5rU3dpdGNoID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzcyArIFwiIGM0Zy1zdGFyYm9hcmQtY2hlY2tib3gtaWNvblwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PC9hPlxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGlua1RleHQgPSA8YSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBjbGFzc05hbWU9e2Nzc0NsYXNzfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+O1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5JQ09OfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5zcGFuQ2xpY2soZXZlbnQpfS8+O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICB7c3Bhbn1cbiAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge29iakNoaWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnByb3BzLnN0ckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMucHJvcHMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5wcm9wcy5ieVBhc3NDaGlsZHMgfHwgdGhpcy5wcm9wcy5maWx0ZXJGdW5jKHRoaXMucHJvcHMuc3RyRmlsdGVyLCBpdGVtLCBmYWxzZSwgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5SZXNpemU9e3RoaXMucHJvcHMuZm5SZXNpemV9Lz5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc3Bhblpvb20gPSBudWxsO1xuICAgICAgbGV0IGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2s7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJab29tVG87XG4gICAgICAgIGNzc0NsYXNzID0gXCJjNGctZ2VvanNvbi1idXR0b25cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0ICAgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB0b2dnbGVBbGxMYXllcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdCAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHQgICAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTdGFyYm9hcmRMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXJcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhclwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkLWhlYWRlclwifSBoZWFkZXJDbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9IRUFETElORX1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgIGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIHtidXR0b25Td2l0Y2hlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVJ9PlxuICAgICAgICAgIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSBtYXBDb250cm9sbGVyID17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17dGhpcy5wcm9wcy5vYmpMYXllcnN9IHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHBhcmVudENhbGxiYWNrPXt0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlc30gY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfSBvcGVuZnVuYz17dGhpcy5vcGVufSBoZWFkbGluZT17bWFwRGF0YS5sYXllcnN3aXRjaGVyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IGFjdGl2ZT17c2NvcGUuc3RhdGUuYWN0aXZlVGFiID09PSAwfS8+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KSB7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIC8vIHdlYmtpdCBoYWNrOlxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKFwiYnV0dG9uLmM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4ICsgXCI6YmVmb3JlIHtcXG5cIiArXG4gICAgICBcIiAgY29udGVudDogXFxcIlxcXFxcIiArIGljb25Db2RlICsgXCJcXFwiO1xcblwiICtcbiAgICAgIFwiICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcblwiICtcbiAgICAgIFwiICBmb250LXdlaWdodDogOTAwO1xcblwiICtcbiAgICAgIFwiICBmb250LXNpemU6IGluaGVyaXQ7XFxuXCIgK1xuICAgICAgXCJ9XCIpXG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0sICgpID0+IHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICB9XG5cbiAgcmVzaXplRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==