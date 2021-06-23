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
          stylePicture = /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
            styleData: this.props.styleData,
            styleId: this.props.layer.locstyle,
            tooltip: this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE + this.props.layer.name + this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,
            clickEvent: this.layerZoomTo
          });
        } else {
          stylePicture = /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
            styleData: this.props.styleData,
            styleId: this.props.layer.locstyle,
            tooltip: this.props.layer.name
          });
        }
      } else if (this.props.layer.addZoomTo && !this.props.mapController.data.starboard.invertZoomActivate) {
        spanZoom = /*#__PURE__*/_react["default"].createElement("span", {
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
        linkText = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
          title: this.props.layer.name,
          className: "c4g-starboard-text",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerZoomTo(event);
          }
        }, this.props.layer.name));
        linkSwitch = /*#__PURE__*/_react["default"].createElement("a", {
          className: cssClass + " c4g-starboard-checkbox-icon",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        });
      } else {
        linkText = /*#__PURE__*/_react["default"].createElement("a", {
          title: this.props.layer.name,
          className: cssClass,
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        }, this.props.layer.name);
      }

      if (objChilds && objChilds.length) {
        var span = /*#__PURE__*/_react["default"].createElement("span", {
          className: _c4gMapsConstant.cssConstants.ICON,
          onMouseUp: function onMouseUp(event) {
            return _this3.spanClick(event);
          }
        });

        return /*#__PURE__*/_react["default"].createElement("li", {
          className: openClose + " c4g-starboard-list-element"
        }, span, stylePicture, spanZoom, linkText, linkSwitch, /*#__PURE__*/_react["default"].createElement("ul", null, objChilds.map(function (item, id) {
          if (_this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, _this3.props.layerStates.childStates[id])) {
            return /*#__PURE__*/_react["default"].createElement(C4gStarboardLayerElement, {
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

        return /*#__PURE__*/_react["default"].createElement("li", {
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
        filter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-starboard-layertree-filter without-button"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "c4g-starboard-layertree-filter-field",
          type: "text",
          onInput: this.setLayerFilter,
          placeholder: "\uF002"
        }));
      }

      var headline = "";

      if (this.props.mapController.data.starboard.button) {
        headline = /*#__PURE__*/_react["default"].createElement("a", {
          className: "c4g-starboard-headline-link " + (this.buttonEnabled ? "c4g-active" : "c4g-inactive"),
          onMouseUp: this.toggleAllLayers
        }, this.props.headline || this.props.lang.LAYERSWITCHER_TOGGLE_ALL);
      } else {
        headline = /*#__PURE__*/_react["default"].createElement("div", {
          className: "contentHeadline"
        }, this.props.headline);
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headline, filter, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-content-layertree"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE
      }, /*#__PURE__*/_react["default"].createElement("ul", null, layers.map(function (item, id) {
        if (_this2.filterFunc(_this2.state.layerFilter, item, states[id])) {
          return /*#__PURE__*/_react["default"].createElement(_c4gStarboardLayerElement.C4gStarboardLayerElement, {
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

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
});

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
        var regularButton = /*#__PURE__*/_react["default"].createElement("button", {
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
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            title: element[0].name,
            className: "c4g-starboard-view-trigger-tab-" + index,
            onMouseUp: function onMouseUp() {
              scope.setActiveTab(index + 1);
            }
          });
        }));
        buttonSwitcher = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-starboard-switcher"
        }, buttons);
      }

      var tabs = "";

      if (this.props.tabLayers.length > 0) {
        tabs = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.tabLayers.map(function (element, index) {
          return /*#__PURE__*/_react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
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

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-starboard-header",
        headerClass: _c4gMapsConstant.cssConstants.STARBOARD_HEADLINE,
        header: mapData.starboard.label || this.langConstants.STARBOARD,
        closeBtnClass: _c4gMapsConstant.cssConstants.STARBOARD_CLOSE,
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), buttonSwitcher, /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_CONTAINER
      }, /*#__PURE__*/_react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
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

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-style.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-style.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gStarboardStyle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var C4gStarboardStyle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(C4gStarboardStyle, _Component);

  var _super = _createSuper(C4gStarboardStyle);

  function C4gStarboardStyle(props) {
    (0, _classCallCheck2["default"])(this, C4gStarboardStyle);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(C4gStarboardStyle, [{
    key: "render",
    value: function render() {
      var _this = this;

      // Create label for interaction-trigger
      var styleTriggerLabel = null;
      var locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
      var styleData = locstyle.locStyleArr;
      var stylor = locstyle.style && locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") ? locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") : null;
      var styl0r = Array.isArray(stylor) ? stylor[0] : stylor;
      var styleType = styleData ? styleData.styletype : "default";
      var tooltip = this.props.tooltip || "";

      if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
        var styleIcon = null;
        var iconSrc;

        if (styleData.icon_src && styleData.icon_src.indexOf('.') !== -1 || styleData.svgSrc && styleData.svgSrc.indexOf('.') !== -1) {
          if (styleType === "cust_icon" || styleType === "photo") {
            iconSrc = styleData.icon_src;
          } else {
            iconSrc = styleData.svgSrc;
          }

          styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
            src: iconSrc,
            style: {
              height: 25,
              width: 25
            }
          });
        } else if (styl0r) {
          var styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage() : null;

          if (styleImage && styleImage.getSrc()) {
            styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
              src: styleImage.getSrc(),
              style: {
                height: 25,
                width: 25
              }
            });
          } else {
            return null;
          }
        }

        if (this.props.clickEvent) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          }, styleIcon);
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip
          }, styleIcon);
        }
      } else {
        var cssClass;

        switch (styleType) {
          // 'point', 'square', 'star', 'x', 'cross', 'triangle'
          case "point":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_POINT;
            break;

          case "square":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_SQUARE;
            break;

          case "star":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_STAR;
            break;

          case "x":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_X;
            break;

          case "cross":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_CROSS;
            break;

          case "triangle":
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;
            break;

          default:
            cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE;
            break;
        }

        var color, bordercolor;

        if (styl0r && styl0r.getFill() && styl0r.getStroke()) {
          color = styl0r.getFill().getColor();
          bordercolor = styl0r.getStroke().getColor();
        } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
          color = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
          bordercolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]);
        }

        var styleElements = {
          "--var-color": color,
          "--var-bordercolor": bordercolor
        };

        if (this.props.clickEvent) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          });
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: tooltip
          });
        }
      }

      return styleTriggerLabel;
    }
  }]);
  return C4gStarboardStyle;
}(_react.Component);

exports.C4gStarboardStyle = C4gStarboardStyle;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeCJdLCJuYW1lcyI6WyJDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQiLCJwcm9wcyIsInNjb3BlIiwibGF5ZXJDbGljayIsImJpbmQiLCJsYXllclpvb21UbyIsInNwYW5DbGljayIsImNoYW5nZUNvbGxhcHNlU3RhdGUiLCJwYXJlbnRDYWxsYmFjayIsInNob3dFbGVtZW50cyIsImZlYXR1cmVzIiwidmVjdG9yTGF5ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJWZWN0b3IiLCJsYXllciIsImxheWVyQ29udHJvbGxlciIsIm1hcENvbnRyb2xsZXIiLCJwcm94eSIsImxlbmd0aCIsInNob3ciLCJsb2FkZXIiLCJpZCIsInNldExheWVyU3RhdGVXaXRoSWQiLCJoaWRlRWxlbWVudHMiLCJoaWRlIiwiY2hpbGQiLCJjaGlsZFN0YXRlIiwiYWN0aXZlIiwic2hvd0xheWVyIiwiaGlkZUxheWVyIiwiY2hpbGRzIiwiY2hpbGRJZCIsImhhc093blByb3BlcnR5IiwiY3VycmVudENoaWxkU3RhdGUiLCJjaGlsZFN0YXRlcyIsImNoYW5nZUNoaWxkU3RhdGUiLCJrZXkiLCJuZXdDaGlsZFN0YXRlIiwibmV3U3RhdGUiLCJsYXllclN0YXRlcyIsImtleUlkIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZ3JleWVkIiwibGF5ZXJDaGlsZHMiLCJ6b29tVG8iLCJzZXRDaGlsZEZlYXR1cmVGbGFnIiwid2luZG93Iiwic2V0VGltZW91dCIsInN0YXRlIiwiY29sbGFwc2VkIiwic3R5bGVQaWN0dXJlIiwic3Bhblpvb20iLCJkYXRhIiwic3RhcmJvYXJkIiwic2hvd0xvY3N0eWxlcyIsImxvY3N0eWxlIiwic3R5bGVEYXRhIiwiYXJyTG9jU3R5bGVzIiwiYWRkWm9vbVRvIiwibGFuZyIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFIiwibmFtZSIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVIiLCJpbnZlcnRab29tQWN0aXZhdGUiLCJldmVudCIsImNzc0NsYXNzIiwiY3NzQ29uc3RhbnRzIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJESVNBQkxFRCIsIm9wZW5DbG9zZSIsIkNMT1NFIiwiT1BFTiIsIm9iakNoaWxkcyIsImxpbmtUZXh0IiwibGlua1N3aXRjaCIsInNwYW4iLCJJQ09OIiwibWFwIiwiaXRlbSIsImJ5UGFzc0NoaWxkcyIsImZpbHRlckZ1bmMiLCJzdHJGaWx0ZXIiLCJmblJlc2l6ZSIsIkNvbXBvbmVudCIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwibmV3U3RhdGVzIiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJpbml0aWFsaXplZCIsImxheWVyRmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJqUXVlcnkiLCJ2YWwiLCJzZXRTdGF0ZSIsImRpZ0RlZXBlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwidGFncyIsImZpbmQiLCJlbGVtZW50Iiwic3RhdGVzIiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImdldEluaXRpYWxTdGF0ZXMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiY2FsbGJhY2tGdW5jdGlvbiIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwidGl0bGUiLCJDVFJMX1NUQVJCT0FSRCIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwib24iLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJhZGRDb250cm9sIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInJlc2l6ZUZ1bmN0aW9uIiwiY3JlYXRlU3R5bGluZ0Zvckljb24iLCJkaXJlY3Rpb24iLCJhY3RpdmVUYWIiLCJpZHgiLCJtYXBEYXRhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJ1dHRvblN3aXRjaGVyIiwiYnV0dG9ucyIsInRhYkxheWVycyIsInJlZ3VsYXJCdXR0b24iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJzZXRBY3RpdmVUYWIiLCJwdXNoIiwiaW5kZXgiLCJpY29uQ29kZSIsImF3ZXNvbWVJY29uIiwidGFicyIsInRhYkNhbGxiYWNrIiwidGFiU3RhdGVzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJsYWJlbCIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsInN0eWxlIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwic3R5bGVTaGVldCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInNldE9wZW5Db21wb25lbnQiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJDNGdTdGFyYm9hcmRTdHlsZSIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVJZCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJ0b29sdGlwIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwic3ZnU3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZUltYWdlIiwiZ2V0SW1hZ2UiLCJnZXRTcmMiLCJjbGlja0V2ZW50IiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBLHdCOzs7OztBQUVYLG9DQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYO0FBRUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixnREFBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLGdEQUFuQjtBQUNBLFVBQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRixJQUFmLGdEQUFqQjtBQUNBLFVBQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCSCxJQUF6QixnREFBM0I7QUFDQSxVQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLGdEQUF0QjtBQVJpQjtBQVNsQjs7OztXQUdELHFCQUErQjtBQUFBLFVBQXJCSyxZQUFxQix1RUFBTixJQUFNO0FBQzdCLFVBQU1QLEtBQUssR0FBRyxJQUFkO0FBQ0EsVUFBSVEsUUFBUSxHQUFHLEtBQWY7QUFDQSxVQUFJQyxXQUFXLEdBQUcsS0FBbEI7O0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUNoQixZQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osWUFBZCxDQUFKLEVBQWlDO0FBQy9CQyxrQkFBUSxHQUFHRCxZQUFYO0FBQ0QsU0FGRCxNQUVPLElBQUlBLFlBQVksWUFBWUssYUFBNUIsRUFBb0M7QUFDekNILHFCQUFXLEdBQUdGLFlBQWQ7QUFDRDtBQUNGLE9BTkQsTUFNTztBQUNMQyxnQkFBUSxHQUFHQSxRQUFRLElBQUlSLEtBQUssQ0FBQ0QsS0FBTixDQUFZYyxLQUFaLENBQWtCTCxRQUF6QztBQUNBQyxtQkFBVyxHQUFHQSxXQUFXLElBQUlULEtBQUssQ0FBQ0QsS0FBTixDQUFZYyxLQUFaLENBQWtCSixXQUEvQztBQUNEOztBQUNERCxjQUFRLEdBQUdBLFFBQVEsSUFBSVIsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JMLFFBQXpDO0FBQ0EsVUFBSU0sZUFBZSxHQUFHZCxLQUFLLENBQUNELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJDLEtBQTFCLENBQWdDRixlQUF0RDs7QUFDQSxVQUFJTixRQUFRLElBQUlBLFFBQVEsQ0FBQ1MsTUFBVCxHQUFrQixDQUFsQyxFQUFxQztBQUNuQ0gsdUJBQWUsQ0FBQ0ksSUFBaEIsQ0FBcUJsQixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQk0sTUFBdkMsRUFBK0NYLFFBQS9DLEVBQXdEUixLQUFLLENBQUNELEtBQU4sQ0FBWXFCLEVBQXBFO0FBQ0QsT0FGRCxNQUVPLElBQUlYLFdBQUosRUFBZ0I7QUFDckJLLHVCQUFlLENBQUNJLElBQWhCLENBQXFCbEIsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JNLE1BQXZDLEVBQStDVixXQUEvQyxFQUE0RFQsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUF4RTtBQUNELE9BRk0sTUFHRjtBQUNITix1QkFBZSxDQUFDSSxJQUFoQixDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQ2xCLEtBQUssQ0FBQ0QsS0FBTixDQUFZcUIsRUFBL0M7QUFDRDs7QUFDRHBCLFdBQUssQ0FBQ0QsS0FBTixDQUFZZ0IsYUFBWixDQUEwQk0sbUJBQTFCLENBQThDckIsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUExRCxFQUE4RCxJQUE5RDtBQUNEOzs7V0FFRCxxQkFBK0I7QUFBQSxVQUFyQkUsWUFBcUIsdUVBQU4sSUFBTTtBQUM3QixVQUFNdEIsS0FBSyxHQUFHLElBQWQ7QUFDQSxVQUFJUSxRQUFRLEdBQUcsS0FBZjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxLQUFsQjs7QUFDQSxVQUFJYSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUlaLEtBQUssQ0FBQ0MsT0FBTixDQUFjVyxZQUFkLENBQUosRUFBaUM7QUFDL0JkLGtCQUFRLEdBQUdjLFlBQVg7QUFDRCxTQUZELE1BRU8sSUFBSUEsWUFBWSxZQUFZVixhQUE1QixFQUFvQztBQUN6Q0gscUJBQVcsR0FBR2EsWUFBZDtBQUNEO0FBQ0YsT0FORCxNQU1PO0FBQ0xkLGdCQUFRLEdBQUdBLFFBQVEsSUFBSVIsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JMLFFBQXpDO0FBQ0FDLG1CQUFXLEdBQUdBLFdBQVcsSUFBSVQsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JKLFdBQS9DO0FBQ0Q7O0FBQ0QsVUFBSUssZUFBZSxHQUFHZCxLQUFLLENBQUNELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJDLEtBQTFCLENBQWdDRixlQUF0RDs7QUFDQSxVQUFJTixRQUFRLElBQUlBLFFBQVEsQ0FBQ1MsTUFBVCxHQUFrQixDQUFsQyxFQUFxQztBQUNuQ0gsdUJBQWUsQ0FBQ1MsSUFBaEIsQ0FBcUJ2QixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQk0sTUFBdkMsRUFBK0NYLFFBQS9DLEVBQXlEUixLQUFLLENBQUNELEtBQU4sQ0FBWXFCLEVBQXJFO0FBQ0QsT0FGRCxNQUVPLElBQUlYLFdBQUosRUFBaUI7QUFDdEJLLHVCQUFlLENBQUNTLElBQWhCLENBQXFCdkIsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JNLE1BQXZDLEVBQStDVixXQUEvQyxFQUE0RFQsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUF4RTtBQUNELE9BRk0sTUFHRjtBQUNITix1QkFBZSxDQUFDUyxJQUFoQixDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQ3ZCLEtBQUssQ0FBQ0QsS0FBTixDQUFZcUIsRUFBL0M7QUFDRDs7QUFDRHBCLFdBQUssQ0FBQ0QsS0FBTixDQUFZZ0IsYUFBWixDQUEwQk0sbUJBQTFCLENBQThDckIsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUExRCxFQUE4RCxLQUE5RDtBQUNEOzs7V0FDRCwwQkFBa0JJLEtBQWxCLEVBQXlCQyxVQUF6QixFQUFxQ0MsTUFBckMsRUFBNkM7QUFDM0MsVUFBSUEsTUFBSixFQUFZO0FBQ1YsYUFBS0MsU0FBTCxDQUFlSCxLQUFLLENBQUNoQixRQUFOLElBQWtCZ0IsS0FBSyxDQUFDZixXQUF2QztBQUNELE9BRkQsTUFHSztBQUNILGFBQUttQixTQUFMLENBQWVKLEtBQUssQ0FBQ2hCLFFBQU4sSUFBa0JnQixLQUFLLENBQUNmLFdBQXZDO0FBQ0Q7O0FBQ0QsVUFBSWUsS0FBSyxDQUFDSyxNQUFOLElBQWdCTCxLQUFLLENBQUNLLE1BQU4sQ0FBYVosTUFBYixHQUFzQixDQUExQyxFQUE2QztBQUMzQyxhQUFLLElBQUlhLE9BQVQsSUFBb0JOLEtBQUssQ0FBQ0ssTUFBMUIsRUFBa0M7QUFDaEMsY0FBSUwsS0FBSyxDQUFDSyxNQUFOLENBQWFFLGNBQWIsQ0FBNEJELE9BQTVCLENBQUosRUFBMEM7QUFDeEMsZ0JBQUlFLGlCQUFpQixHQUFHUCxVQUFVLENBQUNRLFdBQVgsQ0FBdUJILE9BQXZCLEVBQWdDSixNQUF4RDs7QUFDQSxnQkFBSU0saUJBQWlCLEtBQUtOLE1BQTFCLEVBQWtDO0FBQ2hDRCx3QkFBVSxDQUFDUSxXQUFYLENBQXVCSCxPQUF2QixJQUFrQyxLQUFLSSxnQkFBTCxDQUFzQlYsS0FBSyxDQUFDSyxNQUFOLENBQWFDLE9BQWIsQ0FBdEIsRUFBNkNMLFVBQVUsQ0FBQ1EsV0FBWCxDQUF1QkgsT0FBdkIsQ0FBN0MsRUFBOEVKLE1BQTlFLENBQWxDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsV0FBSzNCLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJNLG1CQUF6QixDQUE2Q0ksVUFBVSxDQUFDTCxFQUF4RCxFQUE0RE0sTUFBNUQ7QUFDQUQsZ0JBQVUsQ0FBQ0MsTUFBWCxHQUFvQkEsTUFBcEI7QUFDQSxhQUFPRCxVQUFQO0FBQ0Q7OztXQUNELHdCQUFnQlUsR0FBaEIsRUFBcUJDLGFBQXJCLEVBQW9DO0FBQ2xDLFVBQUlDLFFBQVEsR0FBRyxLQUFLdEMsS0FBTCxDQUFXdUMsV0FBMUI7QUFDQUQsY0FBUSxDQUFDSixXQUFULENBQXFCRSxHQUFyQixJQUE0QkMsYUFBNUI7O0FBQ0EsVUFBSUMsUUFBUSxDQUFDWCxNQUFULElBQW1CVSxhQUFhLENBQUNWLE1BQXJDLEVBQTZDO0FBQzNDO0FBQ0EsWUFBSVUsYUFBYSxDQUFDVixNQUFsQixFQUEwQjtBQUN4QixlQUFLQyxTQUFMO0FBQ0QsU0FGRCxNQUdLO0FBQ0gsZUFBS0MsU0FBTDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBSzdCLEtBQUwsQ0FBV08sY0FBWCxDQUEwQixLQUFLUCxLQUFMLENBQVd3QyxLQUFyQyxFQUE0Q0YsUUFBNUM7QUFDRDs7O1dBQ0Qsb0JBQVdHLENBQVgsRUFBYztBQUNaQSxPQUFDLENBQUNDLGVBQUY7QUFDQUQsT0FBQyxDQUFDRSxXQUFGLENBQWNDLHdCQUFkOztBQUNBLFVBQUksS0FBSzVDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJNLE1BQTNCLEVBQW1DO0FBQ2pDLGVBQU8sS0FBUDtBQUNEOztBQUNELFVBQUksQ0FBQyxLQUFLN0MsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QlosTUFBNUIsRUFBb0M7QUFDbEMsYUFBS0MsU0FBTDtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtDLFNBQUw7QUFDRDs7QUFDRCxVQUFJUyxRQUFRLEdBQUcsS0FBS3RDLEtBQUwsQ0FBV3VDLFdBQTFCOztBQUNBLFVBQUksS0FBS3ZDLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmdCLE1BQWpCLElBQTJCLEtBQUs5QixLQUFMLENBQVdjLEtBQVgsQ0FBaUJnQixNQUFqQixDQUF3QlosTUFBeEIsR0FBaUMsQ0FBaEUsRUFBbUU7QUFDakUsWUFBSTRCLFdBQVcsR0FBRyxLQUFLOUMsS0FBTCxDQUFXYyxLQUFYLENBQWlCZ0IsTUFBbkM7O0FBQ0EsYUFBSyxJQUFJQyxPQUFULElBQW9CZSxXQUFwQixFQUFpQztBQUMvQixjQUFJQSxXQUFXLENBQUNkLGNBQVosQ0FBMkJELE9BQTNCLENBQUosRUFBeUM7QUFDdkMsZ0JBQUlFLGlCQUFpQixHQUFHSyxRQUFRLENBQUNKLFdBQVQsQ0FBcUJILE9BQXJCLEVBQThCSixNQUF0RDs7QUFDQSxnQkFBSU0saUJBQWlCLEtBQUtLLFFBQVEsQ0FBQ1gsTUFBbkMsRUFBMkM7QUFDekNXLHNCQUFRLENBQUNKLFdBQVQsQ0FBcUJILE9BQXJCLElBQWdDLEtBQUtJLGdCQUFMLENBQXNCVyxXQUFXLENBQUNmLE9BQUQsQ0FBakMsRUFBNENPLFFBQVEsQ0FBQ0osV0FBVCxDQUFxQkgsT0FBckIsQ0FBNUMsRUFBMkVPLFFBQVEsQ0FBQ1gsTUFBcEYsQ0FBaEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRixPQXZCVyxDQXdCWjs7QUFDRDs7O1dBQ0QscUJBQVljLENBQVosRUFBZTtBQUFBOztBQUNiLFVBQUksQ0FBQyxLQUFLekMsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QlosTUFBNUIsRUFBb0M7QUFDbEMsYUFBS3pCLFVBQUwsQ0FBZ0J1QyxDQUFoQjtBQUNEOztBQUNELFdBQUt6QyxLQUFMLENBQVdnQixhQUFYLENBQXlCQyxLQUF6QixDQUErQkYsZUFBL0IsQ0FBK0NnQyxNQUEvQyxDQUFzRCxLQUFLL0MsS0FBTCxDQUFXYyxLQUFqRTtBQUNBLFdBQUtkLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJDLEtBQXpCLENBQStCRixlQUEvQixDQUErQ2lDLG1CQUEvQyxDQUFtRSxLQUFLaEQsS0FBTCxDQUFXYyxLQUE5RSxFQUFxRixjQUFyRixFQUFxRyxJQUFyRztBQUNBbUMsWUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFDdEIsY0FBSSxDQUFDbEQsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QkMsS0FBekIsQ0FBK0JGLGVBQS9CLENBQStDaUMsbUJBQS9DLENBQW1FLE1BQUksQ0FBQ2hELEtBQUwsQ0FBV2MsS0FBOUUsRUFBcUYsY0FBckYsRUFBcUcsS0FBckc7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7V0FDRCw2QkFBb0JPLEVBQXBCLEVBQXdCOEIsS0FBeEIsRUFBK0I7QUFDN0IsV0FBS25ELEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJMLFdBQXZCLENBQW1DYixFQUFuQyxJQUF5QzhCLEtBQXpDO0FBQ0EsV0FBS25ELEtBQUwsQ0FBV00sbUJBQVgsQ0FBK0IsS0FBS04sS0FBTCxDQUFXd0MsS0FBMUMsRUFBaUQsS0FBS3hDLEtBQUwsQ0FBV3VDLFdBQTVEO0FBQ0Q7OztXQUNELG1CQUFVRSxDQUFWLEVBQWE7QUFDWEEsT0FBQyxDQUFDQyxlQUFGO0FBQ0FELE9BQUMsQ0FBQ0UsV0FBRixDQUFjQyx3QkFBZDtBQUNBLFdBQUs1QyxLQUFMLENBQVd1QyxXQUFYLENBQXVCYSxTQUF2QixHQUFtQyxDQUFDLEtBQUtwRCxLQUFMLENBQVd1QyxXQUFYLENBQXVCYSxTQUEzRDtBQUNBLFdBQUtwRCxLQUFMLENBQVdNLG1CQUFYLENBQStCLEtBQUtOLEtBQUwsQ0FBV3dDLEtBQTFDLEVBQWlELEtBQUt4QyxLQUFMLENBQVd1QyxXQUE1RDtBQUNEOzs7V0FDRCxrQkFBUztBQUFBOztBQUNQLFVBQU10QyxLQUFLLEdBQUcsSUFBZDtBQUNBLFVBQUlvRCxZQUFZLEdBQUcsSUFBbkI7QUFDQSxVQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFFQSxVQUFJLEtBQUt0RCxLQUFMLENBQVdnQixhQUFYLENBQXlCdUMsSUFBekIsQ0FBOEJDLFNBQTlCLENBQXdDQyxhQUF4QyxLQUEwRCxHQUExRCxJQUFpRSxLQUFLekQsS0FBTCxDQUFXYyxLQUFYLENBQWlCNEMsUUFBbEYsSUFBOEYsS0FBSzFELEtBQUwsQ0FBVzJELFNBQXpHLElBQXNILEtBQUszRCxLQUFMLENBQVcyRCxTQUFYLENBQXFCQyxZQUEzSSxJQUEySixLQUFLNUQsS0FBTCxDQUFXMkQsU0FBWCxDQUFxQkMsWUFBckIsQ0FBa0MsS0FBSzVELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQjRDLFFBQW5ELENBQS9KLEVBQTZOO0FBQzNOLFlBQUksS0FBSzFELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQitDLFNBQXJCLEVBQWdDO0FBQzlCUixzQkFBWSxnQkFBRyxnQ0FBQyxvQ0FBRDtBQUFtQixxQkFBUyxFQUFFLEtBQUtyRCxLQUFMLENBQVcyRCxTQUF6QztBQUFvRCxtQkFBTyxFQUFFLEtBQUszRCxLQUFMLENBQVdjLEtBQVgsQ0FBaUI0QyxRQUE5RTtBQUF3RixtQkFBTyxFQUFFLEtBQUsxRCxLQUFMLENBQVc4RCxJQUFYLENBQWdCQyw2QkFBaEIsR0FBOEMsS0FBSy9ELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmtELElBQS9ELEdBQW9FLEtBQUtoRSxLQUFMLENBQVc4RCxJQUFYLENBQWdCRyw0QkFBckw7QUFBbU4sc0JBQVUsRUFBRSxLQUFLN0Q7QUFBcE8sWUFBZjtBQUNELFNBRkQsTUFHSztBQUNIaUQsc0JBQVksZ0JBQUcsZ0NBQUMsb0NBQUQ7QUFBbUIscUJBQVMsRUFBRSxLQUFLckQsS0FBTCxDQUFXMkQsU0FBekM7QUFBb0QsbUJBQU8sRUFBRSxLQUFLM0QsS0FBTCxDQUFXYyxLQUFYLENBQWlCNEMsUUFBOUU7QUFBd0YsbUJBQU8sRUFBRSxLQUFLMUQsS0FBTCxDQUFXYyxLQUFYLENBQWlCa0Q7QUFBbEgsWUFBZjtBQUNEO0FBQ0YsT0FQRCxNQVFLLElBQUksS0FBS2hFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQitDLFNBQWpCLElBQThCLENBQUMsS0FBSzdELEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NVLGtCQUEzRSxFQUErRjtBQUNsR1osZ0JBQVEsZ0JBQUc7QUFBTSxtQkFBUyxFQUFFLG9CQUFqQjtBQUF1QyxlQUFLLEVBQUUsS0FBS3RELEtBQUwsQ0FBVzhELElBQVgsQ0FBZ0JDLDZCQUFoQixHQUE4QyxLQUFLL0QsS0FBTCxDQUFXYyxLQUFYLENBQWlCa0QsSUFBL0QsR0FBb0UsS0FBS2hFLEtBQUwsQ0FBVzhELElBQVgsQ0FBZ0JHLDRCQUFsSTtBQUFnSyxtQkFBUyxFQUFFLG1CQUFDRSxLQUFEO0FBQUEsbUJBQVcsTUFBSSxDQUFDL0QsV0FBTCxDQUFpQitELEtBQWpCLENBQVg7QUFBQTtBQUEzSyxVQUFYO0FBQ0Q7O0FBQ0QsVUFBSUMsUUFBUSxHQUFHLEtBQUtwRSxLQUFMLENBQVd1QyxXQUFYLENBQXVCWixNQUF2QixHQUFnQzBDLDhCQUFhQyxNQUE3QyxHQUFzREQsOEJBQWFFLFFBQWxGOztBQUNBLFVBQUksS0FBS3ZFLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJNLE1BQTNCLEVBQW1DO0FBQ2pDdUIsZ0JBQVEsSUFBSSxNQUFNQyw4QkFBYUcsUUFBL0I7QUFDRDs7QUFDRCxVQUFJQyxTQUFTLEdBQUcsS0FBS3pFLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJhLFNBQXZCLEdBQW1DaUIsOEJBQWFLLEtBQWhELEdBQXdETCw4QkFBYU0sSUFBckY7QUFDQSxVQUFJQyxTQUFTLEdBQUcsS0FBSzVFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmdCLE1BQWpDO0FBQ0EsVUFBSStDLFFBQUo7QUFDQSxVQUFJQyxVQUFKOztBQUNBLFVBQUksS0FBSzlFLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NVLGtCQUF4QyxJQUE4RCxLQUFLbEUsS0FBTCxDQUFXYyxLQUFYLENBQWlCK0MsU0FBbkYsRUFBOEY7QUFDNUZnQixnQkFBUSxnQkFBRyxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAscUJBQ1Q7QUFBRyxlQUFLLEVBQUUsS0FBSzdFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmtELElBQTNCO0FBQWlDLG1CQUFTLEVBQUUsb0JBQTVDO0FBQWtFLG1CQUFTLEVBQUUsbUJBQUNHLEtBQUQ7QUFBQSxtQkFBVyxNQUFJLENBQUMvRCxXQUFMLENBQWlCK0QsS0FBakIsQ0FBWDtBQUFBO0FBQTdFLFdBQWtILEtBQUtuRSxLQUFMLENBQVdjLEtBQVgsQ0FBaUJrRCxJQUFuSSxDQURTLENBQVg7QUFJQWMsa0JBQVUsZ0JBQUc7QUFBRyxtQkFBUyxFQUFFVixRQUFRLEdBQUcsOEJBQXpCO0FBQXlELG1CQUFTLEVBQUUsbUJBQUNELEtBQUQ7QUFBQSxtQkFBVyxNQUFJLENBQUNqRSxVQUFMLENBQWdCaUUsS0FBaEIsQ0FBWDtBQUFBO0FBQXBFLFVBQWI7QUFDQyxPQU5ILE1BT0s7QUFDSFUsZ0JBQVEsZ0JBQUc7QUFBRyxlQUFLLEVBQUUsS0FBSzdFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmtELElBQTNCO0FBQWlDLG1CQUFTLEVBQUVJLFFBQTVDO0FBQXNELG1CQUFTLEVBQUUsbUJBQUNELEtBQUQ7QUFBQSxtQkFBVyxNQUFJLENBQUNqRSxVQUFMLENBQWdCaUUsS0FBaEIsQ0FBWDtBQUFBO0FBQWpFLFdBQXFHLEtBQUtuRSxLQUFMLENBQVdjLEtBQVgsQ0FBaUJrRCxJQUF0SCxDQUFYO0FBQ0Q7O0FBRUQsVUFBSVksU0FBUyxJQUFJQSxTQUFTLENBQUMxRCxNQUEzQixFQUFtQztBQUNqQyxZQUFJNkQsSUFBSSxnQkFBRztBQUFNLG1CQUFTLEVBQUVWLDhCQUFhVyxJQUE5QjtBQUFvQyxtQkFBUyxFQUFFLG1CQUFDYixLQUFEO0FBQUEsbUJBQVcsTUFBSSxDQUFDOUQsU0FBTCxDQUFlOEQsS0FBZixDQUFYO0FBQUE7QUFBL0MsVUFBWDs7QUFFQSw0QkFDRTtBQUFJLG1CQUFTLEVBQUVNLFNBQVMsR0FBRztBQUEzQixXQUNHTSxJQURILEVBRUcxQixZQUZILEVBR0dDLFFBSEgsRUFJR3VCLFFBSkgsRUFLR0MsVUFMSCxlQU1FLDRDQUNHRixTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU83RCxFQUFQLEVBQWM7QUFDM0IsY0FBSSxNQUFJLENBQUNyQixLQUFMLENBQVdtRixZQUFYLElBQTJCLE1BQUksQ0FBQ25GLEtBQUwsQ0FBV29GLFVBQVgsQ0FBc0IsTUFBSSxDQUFDcEYsS0FBTCxDQUFXcUYsU0FBakMsRUFBNENILElBQTVDLEVBQWtELE1BQUksQ0FBQ2xGLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJMLFdBQXZCLENBQW1DYixFQUFuQyxDQUFsRCxDQUEvQixFQUEwSDtBQUN4SCxnQ0FBTyxnQ0FBQyx3QkFBRDtBQUEwQixpQkFBRyxFQUFFQSxFQUEvQjtBQUFtQyxtQkFBSyxFQUFFQSxFQUExQztBQUE4QyxnQkFBRSxFQUFFNkQsSUFBSSxDQUFDN0QsRUFBdkQ7QUFBMkQsMkJBQWEsRUFBRSxNQUFJLENBQUNyQixLQUFMLENBQVdnQixhQUFyRjtBQUNtQiw0QkFBYyxFQUFFLE1BQUksQ0FBQ1QsY0FEeEM7QUFFbUIsdUJBQVMsRUFBRSxNQUFJLENBQUNQLEtBQUwsQ0FBV3FGLFNBRnpDO0FBR21CLHdCQUFVLEVBQUUsTUFBSSxDQUFDckYsS0FBTCxDQUFXb0YsVUFIMUM7QUFJbUIsaUNBQW1CLEVBQUUsTUFBSSxDQUFDOUUsbUJBSjdDO0FBS21CLGtCQUFJLEVBQUUsTUFBSSxDQUFDTixLQUFMLENBQVc4RCxJQUxwQztBQU1tQiwwQkFBWSxFQUFFLE1BQUksQ0FBQzlELEtBQUwsQ0FBV21GLFlBQVgsSUFBMkIsTUFBSSxDQUFDbkYsS0FBTCxDQUFXb0YsVUFBWCxDQUFzQixNQUFJLENBQUNwRixLQUFMLENBQVdxRixTQUFqQyxFQUE0Q0gsSUFBNUMsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsQ0FONUQ7QUFPbUIseUJBQVcsRUFBRSxNQUFJLENBQUNsRixLQUFMLENBQVd1QyxXQUFYLENBQXVCTCxXQUF2QixDQUFtQ2IsRUFBbkMsQ0FQaEM7QUFRbUIsbUJBQUssRUFBRTZELElBUjFCO0FBU21CLHVCQUFTLEVBQUUsTUFBSSxDQUFDbEYsS0FBTCxDQUFXMkQsU0FUekM7QUFVbUIsc0JBQVEsRUFBRSxNQUFJLENBQUMzRCxLQUFMLENBQVdzRjtBQVZ4QyxjQUFQO0FBV0Q7QUFFRixTQWZBLENBREgsQ0FORixDQURGO0FBMkJELE9BOUJELE1BK0JLO0FBQ0gsWUFBSWhDLFNBQVEsR0FBRyxJQUFmO0FBQ0EsWUFBSXBELFVBQVUsR0FBRyxLQUFLQSxVQUF0Qjs7QUFDQSxZQUFJLEtBQUtGLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmlDLE1BQXJCLEVBQTZCO0FBQzNCN0Msb0JBQVUsR0FBRyxLQUFLRSxXQUFsQjtBQUNBZ0Usa0JBQVEsR0FBRyxvQkFBWDtBQUNEOztBQUNELDRCQUNJO0FBQUksbUJBQVMsRUFBRUssU0FBUyxHQUFHO0FBQTNCLFdBQ0dwQixZQURILEVBRUdDLFNBRkgsRUFHR3VCLFFBSEgsRUFJR0MsVUFKSCxDQURKO0FBUUQ7QUFDRjs7O0VBck8yQ1MsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjlDOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFDLHNCOzs7OztBQUVYLGtDQUFZeEYsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRGlCLHlHQWNBLFlBQU07QUFDdkIsWUFBS3lGLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsWUFBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFULElBQWMsTUFBSzNGLEtBQUwsQ0FBV3VDLFdBQXpCLEVBQXNDO0FBQ3BDLFlBQUksTUFBS3ZDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJQLGNBQXZCLENBQXNDMkQsQ0FBdEMsQ0FBSixFQUE4QztBQUM1QyxjQUFJLE1BQUszRixLQUFMLENBQVd1QyxXQUFYLENBQXVCb0QsQ0FBdkIsRUFBMEJoRSxNQUE5QixFQUFzQztBQUNwQyxrQkFBSytELGdCQUFMO0FBQ0QsV0FGRCxNQUdLO0FBQ0gsa0JBQUtELGlCQUFMO0FBQ0Q7O0FBQ0QsY0FBSSxNQUFLekYsS0FBTCxDQUFXdUMsV0FBWCxDQUF1Qm9ELENBQXZCLEVBQTBCekQsV0FBOUIsRUFBMkM7QUFDekMsaUJBQUssSUFBSTBELENBQVQsSUFBYyxNQUFLNUYsS0FBTCxDQUFXdUMsV0FBWCxDQUF1Qm9ELENBQXZCLEVBQTBCekQsV0FBeEMsRUFBcUQ7QUFDbkQsa0JBQUksTUFBS2xDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJvRCxDQUF2QixFQUEwQnpELFdBQTFCLENBQXNDRixjQUF0QyxDQUFxRDRELENBQXJELENBQUosRUFBNkQ7QUFDM0Qsc0JBQUtDLG9CQUFMLENBQTBCLE1BQUs3RixLQUFMLENBQVd1QyxXQUFYLENBQXVCb0QsQ0FBdkIsRUFBMEJ6RCxXQUExQixDQUFzQzBELENBQXRDLENBQTFCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRjs7QUFDRCxhQUFPLE1BQUtGLGdCQUFMLEdBQXdCLE1BQUtELGlCQUFwQztBQUNELEtBbkNrQjtBQUFBLHlHQW9EQSxVQUFDckQsR0FBRCxFQUFNRSxRQUFOLEVBQW1CO0FBQ3BDLFVBQUl3RCxTQUFTLEdBQUcsTUFBSzlGLEtBQUwsQ0FBV3VDLFdBQTNCO0FBQ0F1RCxlQUFTLENBQUMxRCxHQUFELENBQVQsR0FBaUJFLFFBQWpCOztBQUNBLFlBQUt0QyxLQUFMLENBQVdPLGNBQVgsQ0FBMEJ1RixTQUExQjtBQUNELEtBeERrQjtBQUVqQixRQUFNN0YsS0FBSyxpREFBWDtBQUVBLFVBQUs4RixjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0I1RixJQUFwQixnREFBdEI7QUFDQSxVQUFLNkYsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCN0YsSUFBckIsZ0RBQXZCO0FBQ0EsVUFBS0csbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUJILElBQXpCLGdEQUEzQjtBQUNBLFVBQUtnRCxLQUFMLEdBQWE7QUFDWDhDLGlCQUFXLEVBQUUsS0FERjtBQUVYQyxpQkFBVyxFQUFFO0FBRkYsS0FBYixDQVBpQixDQVdqQjs7QUFYaUI7QUFZbEI7Ozs7V0F3QkQsOEJBQXNCekUsS0FBdEIsRUFBNkI7QUFDM0IsVUFBSUEsS0FBSyxDQUFDRSxNQUFWLEVBQWtCO0FBQ2hCLGFBQUsrRCxnQkFBTDtBQUNELE9BRkQsTUFHSztBQUNILGFBQUtELGlCQUFMO0FBQ0Q7O0FBQ0QsVUFBSWhFLEtBQUssQ0FBQ1MsV0FBVixFQUF1QjtBQUNyQixhQUFLLElBQUl5RCxDQUFULElBQWNsRSxLQUFLLENBQUNTLFdBQXBCLEVBQWlDO0FBQy9CLGNBQUlULEtBQUssQ0FBQ1MsV0FBTixDQUFrQkYsY0FBbEIsQ0FBaUMyRCxDQUFqQyxDQUFKLEVBQXlDO0FBQ3ZDLGlCQUFLRSxvQkFBTCxDQUEwQnBFLEtBQUssQ0FBQ1MsV0FBTixDQUFrQnlELENBQWxCLENBQTFCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7OztXQVFELDBCQUFpQjtBQUNmLFVBQUlRLFdBQVcsR0FBR0MsTUFBTSxDQUFDLHVDQUFELENBQU4sQ0FBZ0RDLEdBQWhELE1BQXlELEVBQTNFLENBRGUsQ0FDZ0U7O0FBQy9FLFdBQUtDLFFBQUwsQ0FBYztBQUFDSixtQkFBVyxFQUFFQztBQUFkLE9BQWQ7QUFDRDs7O1dBRUQsb0JBQVdkLFNBQVgsRUFBc0J2RSxLQUF0QixFQUEyRDtBQUFBLFVBQTlCcUMsS0FBOEIsdUVBQXRCLEVBQXNCO0FBQUEsVUFBbEJvRCxTQUFrQix1RUFBTixJQUFNO0FBQ3pELFVBQUlwRixJQUFJLEdBQUcsS0FBWDs7QUFDQSxVQUFJTCxLQUFLLElBQUlBLEtBQUssQ0FBQ2tELElBQWYsS0FBd0JsRCxLQUFLLENBQUNrRCxJQUFOLENBQVd3QyxXQUFYLEdBQXlCQyxPQUF6QixDQUFpQ3BCLFNBQVMsQ0FBQ21CLFdBQVYsRUFBakMsTUFBOEQsQ0FBQyxDQUEvRCxJQUNyQjFGLEtBQUssQ0FBQ2tELElBQU4sQ0FBVzBDLFdBQVgsR0FBeUJELE9BQXpCLENBQWlDcEIsU0FBUyxDQUFDcUIsV0FBVixFQUFqQyxNQUE4RCxDQUFDLENBRGxFLENBQUosRUFDMEU7QUFDeEV2RixZQUFJLEdBQUcsSUFBUDs7QUFDQSxZQUFJa0UsU0FBUyxJQUFJbEMsS0FBakIsRUFBd0I7QUFDdEJBLGVBQUssQ0FBQ0MsU0FBTixHQUFrQixLQUFsQjtBQUNEO0FBQ0YsT0FORCxNQU1PLElBQUd0QyxLQUFLLENBQUM2RixJQUFOLElBQWM3RixLQUFLLENBQUM2RixJQUFOLENBQVdDLElBQVgsQ0FBZ0IsVUFBQ0MsT0FBRCxFQUFhO0FBQUMsZUFBT0EsT0FBTyxDQUFDTCxXQUFSLEdBQXNCQyxPQUF0QixDQUE4QnBCLFNBQVMsQ0FBQ21CLFdBQVYsRUFBOUIsTUFBMkQsQ0FBQyxDQUFuRTtBQUFxRSxPQUFuRyxDQUFqQixFQUFzSDtBQUMzSHJGLFlBQUksR0FBRyxJQUFQOztBQUNBLFlBQUlrRSxTQUFTLElBQUlsQyxLQUFqQixFQUF3QjtBQUN0QkEsZUFBSyxDQUFDQyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0Q7QUFDRixPQUxNLE1BS0EsSUFBSW1ELFNBQUosRUFBZTtBQUNwQixhQUFLLElBQUl4RSxPQUFULElBQW9CakIsS0FBSyxDQUFDZ0IsTUFBMUIsRUFBa0M7QUFDaEMsY0FBSWhCLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUUsY0FBYixDQUE0QkQsT0FBNUIsS0FBd0MsQ0FBQ1osSUFBN0MsRUFBbUQ7QUFDakRBLGdCQUFJLEdBQUcsS0FBS2lFLFVBQUwsQ0FBZ0JDLFNBQWhCLEVBQTJCdkUsS0FBSyxDQUFDZ0IsTUFBTixDQUFhQyxPQUFiLENBQTNCLEVBQWtEb0IsS0FBSyxDQUFDakIsV0FBTixDQUFrQkgsT0FBbEIsQ0FBbEQsQ0FBUDs7QUFDQSxnQkFBSXNELFNBQVMsSUFBSWxFLElBQWIsSUFBcUJnQyxLQUF6QixFQUFnQztBQUM5QkEsbUJBQUssQ0FBQ0MsU0FBTixHQUFrQixLQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNELGFBQU9qQyxJQUFQO0FBQ0Q7OztXQUVELDJCQUFrQjtBQUNoQixVQUFNbEIsS0FBSyxHQUFHLElBQWQ7QUFDQSxVQUFJNkcsTUFBTSxHQUFHLEtBQUs5RyxLQUFMLENBQVd1QyxXQUF4QjtBQUNBLFVBQUl3RSxNQUFNLEdBQUcsS0FBSy9HLEtBQUwsQ0FBV2dILFNBQXhCOztBQUNBLGVBQVNDLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDRCxNQUFoQyxFQUF3QztBQUN0QyxhQUFLLElBQUluQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbUIsTUFBTSxDQUFDNUYsTUFBM0IsRUFBbUN5RSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLGNBQUksQ0FBQ21CLE1BQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVaEUsTUFBZixFQUF1QjtBQUNyQjFCLGlCQUFLLENBQUNELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJDLEtBQTFCLENBQWdDRixlQUFoQyxDQUFnREksSUFBaEQsQ0FBcUQ0RixNQUFNLENBQUNwQixDQUFELENBQU4sQ0FBVXZFLE1BQS9ELEVBQXVFMkYsTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVVsRixRQUFWLElBQXNCc0csTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVVqRixXQUF2RztBQUNEOztBQUNEb0csZ0JBQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVaEUsTUFBVixHQUFtQixJQUFuQjs7QUFDQSxjQUFJbUYsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVV6RCxXQUFWLElBQXlCNEUsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVV6RCxXQUFWLENBQXNCaEIsTUFBdEIsR0FBK0IsQ0FBNUQsRUFBK0Q7QUFDN0Q0RixrQkFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVV6RCxXQUFWLEdBQXdCK0UsY0FBYyxDQUFDRixNQUFNLENBQUNwQixDQUFELENBQU4sQ0FBVTdELE1BQVgsRUFBbUJnRixNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVXpELFdBQTdCLENBQXRDO0FBQ0Q7QUFDRjs7QUFDRGpDLGFBQUssQ0FBQ2lILGFBQU4sR0FBc0IsSUFBdEI7QUFDQSxlQUFPSixNQUFQO0FBQ0Q7O0FBQ0QsZUFBU0ssZ0JBQVQsQ0FBMEJKLE1BQTFCLEVBQWtDRCxNQUFsQyxFQUEwQztBQUN4QyxhQUFLLElBQUluQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbUIsTUFBTSxDQUFDNUYsTUFBM0IsRUFBbUN5RSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLGNBQUltQixNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVWhFLE1BQWQsRUFBc0I7QUFDcEIxQixpQkFBSyxDQUFDRCxLQUFOLENBQVlnQixhQUFaLENBQTBCQyxLQUExQixDQUFnQ0YsZUFBaEMsQ0FBZ0RTLElBQWhELENBQXFEdUYsTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVV2RSxNQUEvRCxFQUF1RTJGLE1BQU0sQ0FBQ3BCLENBQUQsQ0FBTixDQUFVbEYsUUFBVixJQUFzQnNHLE1BQU0sQ0FBQ3BCLENBQUQsQ0FBTixDQUFVakYsV0FBdkc7QUFDRDs7QUFDRG9HLGdCQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVWhFLE1BQVYsR0FBbUIsS0FBbkI7O0FBQ0EsY0FBSW1GLE1BQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVekQsV0FBVixJQUF5QjRFLE1BQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVekQsV0FBVixDQUFzQmhCLE1BQXRCLEdBQStCLENBQTVELEVBQStEO0FBQzdENEYsa0JBQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVekQsV0FBVixHQUF3QmlGLGdCQUFnQixDQUFDSixNQUFNLENBQUNwQixDQUFELENBQU4sQ0FBVTdELE1BQVgsRUFBbUJnRixNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVXpELFdBQTdCLENBQXhDO0FBQ0Q7QUFDRjs7QUFDRGpDLGFBQUssQ0FBQ2lILGFBQU4sR0FBc0IsS0FBdEI7QUFDQSxlQUFPSixNQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDN0csS0FBSyxDQUFDaUgsYUFBWCxFQUEwQjtBQUN4QkosY0FBTSxHQUFHRyxjQUFjLENBQUNGLE1BQUQsRUFBU0QsTUFBVCxDQUF2QjtBQUNELE9BRkQsTUFFTztBQUNMQSxjQUFNLEdBQUdLLGdCQUFnQixDQUFDSixNQUFELEVBQVNELE1BQVQsQ0FBekI7QUFDRDs7QUFFRCxXQUFLOUcsS0FBTCxDQUFXTyxjQUFYLENBQTBCdUcsTUFBMUI7QUFDRDs7O1dBQ0QsNkJBQW9CekYsRUFBcEIsRUFBd0I4QixLQUF4QixFQUErQixDQUU5Qjs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFDUCxVQUFJLEtBQUtuRCxLQUFMLENBQVd1QyxXQUFYLElBQTBCLEtBQUt2QyxLQUFMLENBQVd1QyxXQUFYLENBQXVCckIsTUFBdkIsR0FBZ0MsQ0FBMUQsSUFBK0QsRUFBRSxLQUFLdUUsaUJBQUwsSUFBMEIsS0FBS0MsZ0JBQWpDLENBQW5FLEVBQXVIO0FBQ3JILGFBQUt3QixhQUFMLEdBQXFCLEtBQUtFLGdCQUFMLEVBQXJCO0FBQ0Q7O0FBRUQsVUFBSUwsTUFBSixFQUFZRCxNQUFaLEVBQW9CTyxNQUFwQjtBQUNBTixZQUFNLEdBQUcsS0FBSy9HLEtBQUwsQ0FBV2dILFNBQXBCO0FBQ0FGLFlBQU0sR0FBRyxLQUFLOUcsS0FBTCxDQUFXdUMsV0FBcEI7O0FBQ0EsVUFBSSxDQUFDLEtBQUt2QyxLQUFMLENBQVcyQixNQUFoQixFQUF3QjtBQUN0QixlQUFPLElBQVA7QUFDRDs7QUFFRDBGLFlBQU0sR0FBRyxFQUFUOztBQUNBLFVBQUksS0FBS3JILEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QitELGFBQTlCLENBQTRDRCxNQUFoRCxFQUF3RDtBQUN0REEsY0FBTSxnQkFBRztBQUFLLG1CQUFTLEVBQUU7QUFBaEIsd0JBQ0E7QUFBTyxtQkFBUyxFQUFFLHNDQUFsQjtBQUEwRCxjQUFJLEVBQUMsTUFBL0Q7QUFBc0UsaUJBQU8sRUFBRSxLQUFLdEIsY0FBcEY7QUFBb0cscUJBQVcsRUFBRTtBQUFqSCxVQURBLENBQVQ7QUFHRDs7QUFFRCxVQUFJd0IsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSSxLQUFLdkgsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QnVDLElBQXpCLENBQThCQyxTQUE5QixDQUF3Q2dFLE1BQTVDLEVBQW9EO0FBQ2xERCxnQkFBUSxnQkFBRztBQUFHLG1CQUFTLEVBQUUsa0NBQWtDLEtBQUtMLGFBQUwsR0FBcUIsWUFBckIsR0FBb0MsY0FBdEUsQ0FBZDtBQUFxRyxtQkFBUyxFQUFFLEtBQUtsQjtBQUFySCxXQUF1SSxLQUFLaEcsS0FBTCxDQUFXdUgsUUFBWCxJQUF1QixLQUFLdkgsS0FBTCxDQUFXOEQsSUFBWCxDQUFnQjJELHdCQUE5SyxDQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0xGLGdCQUFRLGdCQUFHO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWtDLEtBQUt2SCxLQUFMLENBQVd1SCxRQUE3QyxDQUFYO0FBQ0Q7O0FBRUQsMEJBQ0EsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0dBLFFBREgsRUFFR0YsTUFGSCxlQUdFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixzQkFDRTtBQUFLLGlCQUFTLEVBQUVoRCw4QkFBYXFEO0FBQTdCLHNCQUNFLDRDQUNHWCxNQUFNLENBQUM5QixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPN0QsRUFBUCxFQUFjO0FBQ3hCLFlBQUksTUFBSSxDQUFDK0QsVUFBTCxDQUFnQixNQUFJLENBQUNqQyxLQUFMLENBQVcrQyxXQUEzQixFQUF3Q2hCLElBQXhDLEVBQThDNEIsTUFBTSxDQUFDekYsRUFBRCxDQUFwRCxDQUFKLEVBQStEO0FBQzdELDhCQUFPLGdDQUFDLGtEQUFEO0FBQTBCLGVBQUcsRUFBRUEsRUFBL0I7QUFBbUMsaUJBQUssRUFBRUEsRUFBMUM7QUFBOEMsY0FBRSxFQUFFNkQsSUFBSSxDQUFDN0QsRUFBdkQ7QUFBMkQseUJBQWEsRUFBRSxNQUFJLENBQUNyQixLQUFMLENBQVdnQixhQUFyRjtBQUMwQiwwQkFBYyxFQUFFLE1BQUksQ0FBQzJHLGdCQUQvQztBQUUwQixpQkFBSyxFQUFFekMsSUFGakM7QUFHMEIscUJBQVMsRUFBRSxNQUFJLENBQUNsRixLQUFMLENBQVcyRCxTQUhoRDtBQUkwQiwrQkFBbUIsRUFBRSxNQUFJLENBQUMzRCxLQUFMLENBQVdNLG1CQUoxRDtBQUswQix1QkFBVyxFQUFFd0csTUFBTSxDQUFDekYsRUFBRCxDQUw3QztBQU0wQixnQkFBSSxFQUFFLE1BQUksQ0FBQ3JCLEtBQUwsQ0FBVzhELElBTjNDO0FBTzBCLHdCQUFZLEVBQUUsTUFBSSxDQUFDc0IsVUFBTCxDQUFnQixNQUFJLENBQUNqQyxLQUFMLENBQVcrQyxXQUEzQixFQUF3Q2hCLElBQXhDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBUHhDO0FBUTBCLHFCQUFTLEVBQUUsTUFBSSxDQUFDL0IsS0FBTCxDQUFXK0MsV0FSaEQ7QUFTMEIsc0JBQVUsRUFBRSxNQUFJLENBQUNkLFVBVDNDO0FBVTBCLG9CQUFRLEVBQUUsTUFBSSxDQUFDcEYsS0FBTCxDQUFXc0Y7QUFWL0MsWUFBUDtBQVdEO0FBQ0YsT0FkQSxDQURILENBREYsQ0FERixDQUhGLENBREE7QUEyQkQ7OztFQTFMeUNDLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNUM7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFEQSxJQUFNcUMsUUFBUSxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0sbUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUdxQkMsYzs7Ozs7QUFFbkIsMEJBQVkvSCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYLENBRmlCLENBR2pCOztBQUNBLFFBQUk0RyxPQUFPLEdBQUdtQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFFBQUlULE1BQU0sR0FBR1EsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLDhCQUFZbEksS0FBSyxDQUFDZ0IsYUFBTixDQUFvQnVDLElBQWhDLENBQXJCO0FBQ0FpRSxVQUFNLENBQUNXLEtBQVAsR0FBZSxNQUFLRCxhQUFMLENBQW1CRSxjQUFsQztBQUNBdkIsV0FBTyxDQUFDd0IsU0FBUixHQUFvQixtREFBcEI7O0FBQ0EsUUFBSXJJLEtBQUssQ0FBQ3NJLElBQVYsRUFBZ0I7QUFDZHpCLGFBQU8sQ0FBQ3dCLFNBQVIsSUFBcUIsVUFBckI7QUFDRCxLQUZELE1BRU87QUFDTHhCLGFBQU8sQ0FBQ3dCLFNBQVIsSUFBcUIsV0FBckI7QUFDRDs7QUFDRCxRQUFJckksS0FBSyxDQUFDdUksUUFBVixFQUFvQjtBQUNsQjFCLGFBQU8sQ0FBQ3dCLFNBQVIsSUFBcUIsZUFBckI7QUFDRDs7QUFDRHhCLFdBQU8sQ0FBQzJCLFdBQVIsQ0FBb0JoQixNQUFwQjtBQUNBcEIsVUFBTSxDQUFDUyxPQUFELENBQU4sQ0FBZ0I0QixFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFTdEUsS0FBVCxFQUFnQjtBQUMxQyxVQUFJbEUsS0FBSyxDQUFDa0QsS0FBTixDQUFZbUYsSUFBaEIsRUFBc0I7QUFDcEJySSxhQUFLLENBQUN5SSxLQUFOO0FBQ0QsT0FGRCxNQUVPO0FBQ0x6SSxhQUFLLENBQUNxSSxJQUFOO0FBQ0Q7QUFDRixLQU5EO0FBT0EsUUFBSXRILGFBQWEsR0FBR2hCLEtBQUssQ0FBQ2dCLGFBQTFCO0FBQ0EsUUFBSTJILE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO0FBQUMvQixhQUFPLEVBQUVBLE9BQVY7QUFBbUJnQyxZQUFNLEVBQUU3SSxLQUFLLENBQUM2STtBQUFqQyxLQUFaLENBQWQ7QUFDQTdILGlCQUFhLENBQUM4SCxZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsZUFBcEMsR0FBc0RMLE9BQXREO0FBQ0EzSCxpQkFBYSxDQUFDaUUsR0FBZCxDQUFrQmdFLFVBQWxCLENBQTZCTixPQUE3QjtBQUNBLFVBQUtMLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVuSSxJQUFWLGdEQUFaO0FBQ0EsVUFBSytJLHlCQUFMLEdBQWlDLE1BQUtBLHlCQUFMLENBQStCL0ksSUFBL0IsZ0RBQWpDO0FBQ0EsVUFBS2dKLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQmhKLElBQXBCLGdEQUF0QjtBQUNBLFVBQUt1SSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXdkksSUFBWCxnREFBYjtBQUNBLFVBQUtpSixvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQmpKLElBQTFCLGdEQUE1QixDQWpDaUIsQ0FrQ2pCOztBQUNBLFVBQUtnRCxLQUFMLEdBQWE7QUFDWDtBQUNBa0csZUFBUyxFQUFFckosS0FBSyxDQUFDcUosU0FBTixJQUFtQixPQUZuQjtBQUdYZixVQUFJLEVBQUV0SSxLQUFLLENBQUNzSSxJQUFOLElBQWMsS0FIVDtBQUlYRCxlQUFTLEVBQUVySSxLQUFLLENBQUNxSSxTQUFOLElBQW1CLHFCQUpuQjtBQUtYdkcsWUFBTSxFQUFFOUIsS0FBSyxDQUFDOEIsTUFBTixJQUFnQixFQUxiO0FBTVg2RyxhQUFPLEVBQUVBLE9BTkU7QUFPWFcsZUFBUyxFQUFFO0FBUEEsS0FBYjtBQW5DaUI7QUE0Q2xCOzs7O1dBRUQsNkJBQW9CLENBRW5COzs7V0FFRCxzQkFBYUMsR0FBYixFQUFrQjtBQUNoQixXQUFLakQsUUFBTCxDQUFjO0FBQUNnRCxpQkFBUyxFQUFFQztBQUFaLE9BQWQ7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxVQUFNdEosS0FBSyxHQUFHLElBQWQ7QUFDQSxVQUFNdUosT0FBTyxHQUFHLEtBQUt4SixLQUFMLENBQVdnQixhQUFYLENBQXlCdUMsSUFBekM7QUFDQSxVQUFJOEUsU0FBUyxHQUFHLEtBQUtsRixLQUFMLENBQVdrRixTQUFYLEdBQXVCLEdBQXZCLEdBQTZCLEtBQUtsRixLQUFMLENBQVdrRyxTQUF4RDtBQUNBaEIsZUFBUyxJQUFJLE9BQU8sS0FBS2xGLEtBQUwsQ0FBV21GLElBQVgsR0FBa0IsVUFBbEIsR0FBK0IsV0FBdEMsQ0FBYjs7QUFDQSxVQUFJLEtBQUtuRixLQUFMLENBQVdtRixJQUFmLEVBQXFCO0FBQ25CbEMsY0FBTSxDQUFDLEtBQUtqRCxLQUFMLENBQVd3RixPQUFYLENBQW1COUIsT0FBcEIsQ0FBTixDQUFtQzRDLFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtBQUNELE9BRkQsTUFFTztBQUNMdEQsY0FBTSxDQUFDLEtBQUtqRCxLQUFMLENBQVd3RixPQUFYLENBQW1COUIsT0FBcEIsQ0FBTixDQUFtQzZDLFdBQW5DLENBQStDLFVBQS9DLEVBQTJERCxRQUEzRCxDQUFvRSxXQUFwRTtBQUNEOztBQUNELFVBQUlFLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxFQUFkOztBQUNBLFVBQUksS0FBSzVKLEtBQUwsQ0FBVzZKLFNBQVgsQ0FBcUIzSSxNQUFyQixHQUE4QixDQUFsQyxFQUFxQztBQUNuQyxZQUFJNEksYUFBYSxnQkFBRztBQUFRLGFBQUcsRUFBRSxLQUFLOUosS0FBTCxDQUFXNkosU0FBWCxDQUFxQjNJLE1BQWxDO0FBQTBDLGVBQUssRUFBRSxLQUFLZ0gsYUFBTCxDQUFtQjZCLG9DQUFwRTtBQUEwRyxtQkFBUyxFQUFFLDBDQUFySDtBQUFpSyxtQkFBUyxFQUFFLHFCQUFNO0FBQUM5SixpQkFBSyxDQUFDK0osWUFBTixDQUFtQixDQUFuQjtBQUFzQjtBQUF6TSxVQUFwQjs7QUFDQUosZUFBTyxDQUFDSyxJQUFSLENBQWFILGFBQWI7QUFDQUYsZUFBTyxDQUFDSyxJQUFSLENBQWEsS0FBS2pLLEtBQUwsQ0FBVzZKLFNBQVgsQ0FBcUI1RSxHQUFyQixDQUF5QixVQUFTNEIsT0FBVCxFQUFrQnFELEtBQWxCLEVBQXlCO0FBQzNELGNBQUlDLFFBQVEsR0FBR3RELE9BQU8sQ0FBQ3VELFdBQXZCO0FBQ0FuSyxlQUFLLENBQUNtSixvQkFBTixDQUEyQmUsUUFBM0IsRUFBcUNELEtBQXJDO0FBQ0EsOEJBQU87QUFBUSxlQUFHLEVBQUVBLEtBQWI7QUFBb0IsaUJBQUssRUFBRXJELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVzdDLElBQXRDO0FBQ1EscUJBQVMsRUFBRSxvQ0FBb0NrRyxLQUR2RDtBQUVRLHFCQUFTLEVBQUUscUJBQU07QUFBQ2pLLG1CQUFLLENBQUMrSixZQUFOLENBQW1CRSxLQUFLLEdBQUcsQ0FBM0I7QUFBOEI7QUFGeEQsWUFBUDtBQUdELFNBTlUsQ0FBYjtBQVFBUCxzQkFBYyxnQkFBRztBQUFLLG1CQUFTLEVBQUU7QUFBaEIsV0FDZEMsT0FEYyxDQUFqQjtBQUdEOztBQUNELFVBQUlTLElBQUksR0FBRyxFQUFYOztBQUNBLFVBQUksS0FBS3JLLEtBQUwsQ0FBVzZKLFNBQVgsQ0FBcUIzSSxNQUFyQixHQUE4QixDQUFsQyxFQUFxQztBQUNuQ21KLFlBQUksZ0JBQUcsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0osS0FBS3JLLEtBQUwsQ0FBVzZKLFNBQVgsQ0FBcUI1RSxHQUFyQixDQUF5QixVQUFTNEIsT0FBVCxFQUFrQnFELEtBQWxCLEVBQXlCO0FBQ2pELDhCQUFPLGdDQUFDLGlEQUFEO0FBQXdCLGVBQUcsRUFBRUEsS0FBN0I7QUFBb0MseUJBQWEsRUFBRWpLLEtBQUssQ0FBQ0QsS0FBTixDQUFZZ0IsYUFBL0Q7QUFDd0IscUJBQVMsRUFBRWYsS0FBSyxDQUFDRCxLQUFOLENBQVk2SixTQUFaLENBQXNCSyxLQUF0QixDQURuQztBQUNpRSwwQkFBYyxFQUFFakssS0FBSyxDQUFDRCxLQUFOLENBQVlzSyxXQUQ3RjtBQUV3Qix1QkFBVyxFQUFFckssS0FBSyxDQUFDRCxLQUFOLENBQVl1SyxTQUZqRDtBQUU0RCxvQkFBUSxFQUFFdEssS0FBSyxDQUFDcUksSUFGNUU7QUFFa0Ysb0JBQVEsRUFBRXpCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVzdDLElBRnZHO0FBR3dCLGdCQUFJLEVBQUUvRCxLQUFLLENBQUNrRCxLQUFOLENBQVltRixJQUgxQztBQUdnRCxrQkFBTSxFQUFHNEIsS0FBSyxHQUFHLENBQVQsS0FBZ0JqSyxLQUFLLENBQUNrRCxLQUFOLENBQVltRztBQUhwRixZQUFQO0FBSUQsU0FMQSxDQURJLENBQVA7QUFRRDs7QUFDRCwwQkFDRTtBQUFLLGlCQUFTLEVBQUVqRiw4QkFBYW1HO0FBQTdCLHNCQUNFLGdDQUFDLGVBQUQ7QUFBVSxnQkFBUSxlQUFFO0FBQXBCLHNCQUNFLGdDQUFDLFFBQUQ7QUFBVSxvQkFBWSxFQUFFLHNCQUF4QjtBQUFnRCxtQkFBVyxFQUFFbkcsOEJBQWFvRyxrQkFBMUU7QUFDVSxjQUFNLEVBQUVqQixPQUFPLENBQUNoRyxTQUFSLENBQWtCa0gsS0FBbEIsSUFBMkIsS0FBS3hDLGFBQUwsQ0FBbUJ5QyxTQURoRTtBQUMyRSxxQkFBYSxFQUFFdEcsOEJBQWF1RyxlQUR2RztBQUN3SCxrQkFBVSxFQUFFLEtBQUtsQyxLQUR6STtBQUVVLHFCQUFhLEVBQUUsS0FBS1IsYUFBTCxDQUFtQnhEO0FBRjVDLFFBREYsQ0FERixFQU9HaUYsY0FQSCxlQVFFO0FBQUssaUJBQVMsRUFBRXRGLDhCQUFhd0c7QUFBN0Isc0JBQ0UsZ0NBQUMsaURBQUQ7QUFBd0IsV0FBRyxFQUFFLEtBQUs3SyxLQUFMLENBQVc2SixTQUFYLENBQXFCM0ksTUFBbEQ7QUFBMEQscUJBQWEsRUFBRyxLQUFLbEIsS0FBTCxDQUFXZ0IsYUFBckY7QUFBb0csWUFBSSxFQUFFLEtBQUtrSCxhQUEvRztBQUNzQixpQkFBUyxFQUFFLEtBQUtsSSxLQUFMLENBQVdnSCxTQUQ1QztBQUN1RCxpQkFBUyxFQUFFLEtBQUtoSCxLQUFMLENBQVcyRCxTQUQ3RTtBQUN3RixzQkFBYyxFQUFFLEtBQUszRCxLQUFMLENBQVdPLGNBRG5IO0FBRXNCLG1CQUFXLEVBQUUsS0FBS1AsS0FBTCxDQUFXdUMsV0FGOUM7QUFFMkQsMkJBQW1CLEVBQUUsS0FBS3ZDLEtBQUwsQ0FBV00sbUJBRjNGO0FBRWdILGdCQUFRLEVBQUUsS0FBS2dJLElBRi9IO0FBRXFJLGdCQUFRLEVBQUVrQixPQUFPLENBQUNsQyxhQUFSLENBQXNCb0QsS0FGcks7QUFHc0IsWUFBSSxFQUFFLEtBQUt2SCxLQUFMLENBQVdtRixJQUh2QztBQUc2QyxjQUFNLEVBQUVySSxLQUFLLENBQUNrRCxLQUFOLENBQVltRyxTQUFaLEtBQTBCO0FBSC9FLFFBREYsRUFLR2UsSUFMSCxDQVJGLENBREY7QUFrQkQ7OztXQUVELDhCQUFxQkYsUUFBckIsRUFBK0JELEtBQS9CLEVBQXNDO0FBQ3BDLFVBQUlZLEtBQUssR0FBRzlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFaLENBRG9DLENBRXBDOztBQUNBNkMsV0FBSyxDQUFDdEMsV0FBTixDQUFrQlIsUUFBUSxDQUFDK0MsY0FBVCxDQUF3QixFQUF4QixDQUFsQjtBQUNBL0MsY0FBUSxDQUFDZ0QsSUFBVCxDQUFjeEMsV0FBZCxDQUEwQnNDLEtBQTFCO0FBRUEsVUFBSUcsVUFBVSxHQUFHSCxLQUFLLENBQUNJLEtBQXZCO0FBQ0FELGdCQUFVLENBQUNFLFVBQVgsQ0FBc0IsMkNBQTJDakIsS0FBM0MsR0FBbUQsYUFBbkQsR0FDcEIsaUJBRG9CLEdBQ0FDLFFBREEsR0FDVyxPQURYLEdBRXBCLHlDQUZvQixHQUdwQix1QkFIb0IsR0FJcEIseUJBSm9CLEdBS3BCLEdBTEY7QUFNRDs7O1dBRUQsZ0JBQU87QUFBQTs7QUFDTCxXQUFLN0QsUUFBTCxDQUFjO0FBQUNnQyxZQUFJLEVBQUU7QUFBUCxPQUFkLEVBQTRCO0FBQUEsZUFBTSxNQUFJLENBQUNZLHlCQUFMLEVBQU47QUFBQSxPQUE1QjtBQUNBLFdBQUtsSixLQUFMLENBQVdnQixhQUFYLENBQXlCb0ssZ0JBQXpCLENBQTBDLElBQTFDO0FBQ0Q7OztXQUVELGlCQUFRO0FBQUE7O0FBQ04sV0FBSzlFLFFBQUwsQ0FBYztBQUFDZ0MsWUFBSSxFQUFFO0FBQVAsT0FBZCxFQUE2QjtBQUFBLGVBQU0sTUFBSSxDQUFDK0Msd0JBQUwsRUFBTjtBQUFBLE9BQTdCO0FBQ0Q7OztXQUVELDBCQUFpQjtBQUNmLFVBQU1wTCxLQUFLLEdBQUcsSUFBZDtBQUNBZ0QsWUFBTSxDQUFDcUkscUJBQVAsQ0FBNkIsWUFBVztBQUN0Q3JMLGFBQUssQ0FBQ2lKLHlCQUFOO0FBQ0QsT0FGRDtBQUdEOzs7V0FFRCw0QkFBbUJxQyxTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQ2pELFVBQUksS0FBS3RJLEtBQUwsQ0FBV21GLElBQWYsRUFBcUI7QUFDbkIsYUFBS1kseUJBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLbUMsd0JBQUw7QUFDRDs7QUFDRCxVQUFJLEtBQUtyTCxLQUFMLENBQVdnQixhQUFYLENBQXlCdUMsSUFBekIsQ0FBOEJtSSxPQUE5QixJQUF5QyxDQUFDLEtBQUt2SSxLQUFMLENBQVdtRixJQUF6RCxFQUErRDtBQUM3RCxZQUFJcUQsUUFBUSxHQUFHQyxvQkFBTUMsUUFBTixDQUFlLE9BQWYsQ0FBZjs7QUFDQSxZQUFJRixRQUFRLEtBQUssS0FBS0csV0FBTCxDQUFpQjlILElBQWxDLEVBQXdDO0FBQ3RDNEgsOEJBQU1HLFVBQU4sQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUI7QUFDRDtBQUNGO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxxQ0FBNEI7QUFDMUIzRixZQUFNLENBQUMsMEJBQUQsQ0FBTixDQUFtQ3FELFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0NBQTJCO0FBQ3pCdEQsWUFBTSxDQUFDLDBCQUFELENBQU4sQ0FBbUNxRCxRQUFuQyxDQUE0QyxXQUE1QyxFQUF5REMsV0FBekQsQ0FBcUUsVUFBckU7QUFDRDs7O0VBM0t5Q25FLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDVDOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR2F5RyxpQjs7Ozs7QUFDVCw2QkFBWWhNLEtBQVosRUFBbUI7QUFBQTtBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFFTDtBQUNBLFVBQUlpTSxpQkFBaUIsR0FBRyxJQUF4QjtBQUNBLFVBQUl2SSxRQUFRLEdBQUcsS0FBSzFELEtBQUwsQ0FBVzJELFNBQVgsQ0FBcUJDLFlBQXJCLENBQWtDLEtBQUs1RCxLQUFMLENBQVdrTSxPQUE3QyxDQUFmO0FBQ0EsVUFBSXZJLFNBQVMsR0FBR0QsUUFBUSxDQUFDeUksV0FBekI7QUFDQSxVQUFJQyxNQUFNLEdBQUcxSSxRQUFRLENBQUNvSCxLQUFULElBQWtCcEgsUUFBUSxDQUFDb0gsS0FBVCxDQUFlLElBQUl1QixtQkFBSixDQUFZO0FBQUNDLGdCQUFRLEVBQUUsSUFBSUMsV0FBSixDQUFVLENBQVYsRUFBWSxDQUFaO0FBQVgsT0FBWixDQUFmLEVBQXdELFdBQXhELENBQWxCLEdBQXlGN0ksUUFBUSxDQUFDb0gsS0FBVCxDQUFlLElBQUl1QixtQkFBSixDQUFZO0FBQUNDLGdCQUFRLEVBQUUsSUFBSUMsV0FBSixDQUFVLENBQVYsRUFBWSxDQUFaO0FBQVgsT0FBWixDQUFmLEVBQXdELFdBQXhELENBQXpGLEdBQStKLElBQTVLO0FBQ0EsVUFBSUMsTUFBTSxHQUFHN0wsS0FBSyxDQUFDQyxPQUFOLENBQWN3TCxNQUFkLElBQXdCQSxNQUFNLENBQUMsQ0FBRCxDQUE5QixHQUFtQ0EsTUFBaEQ7QUFDQSxVQUFJSyxTQUFTLEdBQUc5SSxTQUFTLEdBQUdBLFNBQVMsQ0FBQytJLFNBQWIsR0FBeUIsU0FBbEQ7QUFDQSxVQUFJQyxPQUFPLEdBQUcsS0FBSzNNLEtBQUwsQ0FBVzJNLE9BQVgsSUFBc0IsRUFBcEM7O0FBQ0EsVUFBSWhKLFNBQVMsS0FBSzhJLFNBQVMsS0FBSyxXQUFkLElBQTZCQSxTQUFTLEtBQUssZUFBM0MsSUFBOERBLFNBQVMsS0FBSyxPQUFqRixDQUFiLEVBQXdHO0FBQ3BHLFlBQUlHLFNBQVMsR0FBRyxJQUFoQjtBQUNBLFlBQUlDLE9BQUo7O0FBQ0EsWUFBS2xKLFNBQVMsQ0FBQ21KLFFBQVYsSUFBc0JuSixTQUFTLENBQUNtSixRQUFWLENBQW1CckcsT0FBbkIsQ0FBMkIsR0FBM0IsTUFBb0MsQ0FBQyxDQUE1RCxJQUFtRTlDLFNBQVMsQ0FBQ29KLE1BQVYsSUFBb0JwSixTQUFTLENBQUNvSixNQUFWLENBQWlCdEcsT0FBakIsQ0FBeUIsR0FBekIsTUFBa0MsQ0FBQyxDQUE5SCxFQUFrSTtBQUM5SCxjQUFJZ0csU0FBUyxLQUFLLFdBQWQsSUFBNkJBLFNBQVMsS0FBSyxPQUEvQyxFQUF3RDtBQUNwREksbUJBQU8sR0FBR2xKLFNBQVMsQ0FBQ21KLFFBQXBCO0FBQ0gsV0FGRCxNQUdLO0FBQ0RELG1CQUFPLEdBQUdsSixTQUFTLENBQUNvSixNQUFwQjtBQUNIOztBQUNESCxtQkFBUyxnQkFBRztBQUFLLGVBQUcsRUFBRUMsT0FBVjtBQUFtQixpQkFBSyxFQUFFO0FBQUNHLG9CQUFNLEVBQUUsRUFBVDtBQUFhQyxtQkFBSyxFQUFFO0FBQXBCO0FBQTFCLFlBQVo7QUFDSCxTQVJELE1BUU8sSUFBSVQsTUFBSixFQUFZO0FBQ2YsY0FBSVUsVUFBVSxHQUFHVixNQUFNLENBQUNXLFFBQVAsSUFBbUIsT0FBT1gsTUFBTSxDQUFDVyxRQUFkLEtBQTJCLFVBQTlDLElBQTREWCxNQUFNLENBQUNXLFFBQVAsRUFBNUQsR0FBZ0ZYLE1BQU0sQ0FBQ1csUUFBUCxFQUFoRixHQUFtRyxJQUFwSDs7QUFDQSxjQUFJRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0UsTUFBWCxFQUFsQixFQUF1QztBQUNuQ1IscUJBQVMsZ0JBQUc7QUFBSyxpQkFBRyxFQUFFTSxVQUFVLENBQUNFLE1BQVgsRUFBVjtBQUErQixtQkFBSyxFQUFFO0FBQUNKLHNCQUFNLEVBQUUsRUFBVDtBQUFhQyxxQkFBSyxFQUFFO0FBQXBCO0FBQXRDLGNBQVo7QUFDSCxXQUZELE1BR0s7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxZQUFJLEtBQUtqTixLQUFMLENBQVdxTixVQUFmLEVBQTJCO0FBQ3ZCcEIsMkJBQWlCLGdCQUFHO0FBQU0scUJBQVMsRUFBRTVILDhCQUFhaUosa0JBQTlCO0FBQWtELGlCQUFLLEVBQUVYLE9BQXpEO0FBQWtFLHFCQUFTLEVBQUUsbUJBQUN4SSxLQUFEO0FBQUEscUJBQVUsS0FBSSxDQUFDbkUsS0FBTCxDQUFXcU4sVUFBWCxDQUFzQmxKLEtBQXRCLENBQVY7QUFBQTtBQUE3RSxhQUFzSHlJLFNBQXRILENBQXBCO0FBQ0gsU0FGRCxNQUdLO0FBQ0RYLDJCQUFpQixnQkFBRztBQUFNLHFCQUFTLEVBQUU1SCw4QkFBYWlKLGtCQUE5QjtBQUFrRCxpQkFBSyxFQUFFWDtBQUF6RCxhQUFtRUMsU0FBbkUsQ0FBcEI7QUFDSDtBQUNKLE9BMUJELE1BMEJPO0FBQ0gsWUFBSXhJLFFBQUo7O0FBQ0EsZ0JBQVFxSSxTQUFSO0FBQXFCO0FBQ2pCLGVBQUssT0FBTDtBQUNJckksb0JBQVEsR0FBR0MsOEJBQWFrSix3QkFBeEI7QUFDQTs7QUFDSixlQUFLLFFBQUw7QUFDSW5KLG9CQUFRLEdBQUdDLDhCQUFhbUoseUJBQXhCO0FBQ0E7O0FBQ0osZUFBSyxNQUFMO0FBQ0lwSixvQkFBUSxHQUFHQyw4QkFBYW9KLHVCQUF4QjtBQUNBOztBQUNKLGVBQUssR0FBTDtBQUNJckosb0JBQVEsR0FBR0MsOEJBQWFxSixvQkFBeEI7QUFDQTs7QUFDSixlQUFLLE9BQUw7QUFDSXRKLG9CQUFRLEdBQUdDLDhCQUFhc0osd0JBQXhCO0FBQ0E7O0FBQ0osZUFBSyxVQUFMO0FBQ0l2SixvQkFBUSxHQUFHQyw4QkFBYXVKLDJCQUF4QjtBQUNBOztBQUNKO0FBQ0l4SixvQkFBUSxHQUFFQyw4QkFBYWlKLGtCQUF2QjtBQUNBO0FBckJSOztBQXVCQSxZQUFJTyxLQUFKLEVBQVdDLFdBQVg7O0FBQ0EsWUFBSXRCLE1BQU0sSUFBSUEsTUFBTSxDQUFDdUIsT0FBUCxFQUFWLElBQThCdkIsTUFBTSxDQUFDd0IsU0FBUCxFQUFsQyxFQUFzRDtBQUNsREgsZUFBSyxHQUFHckIsTUFBTSxDQUFDdUIsT0FBUCxHQUFpQkUsUUFBakIsRUFBUjtBQUNBSCxxQkFBVyxHQUFHdEIsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQkMsUUFBbkIsRUFBZDtBQUNILFNBSEQsTUFJSyxJQUFJdEssU0FBUyxJQUFJQSxTQUFTLENBQUN1SyxTQUF2QixJQUFvQ3ZLLFNBQVMsQ0FBQ3dLLFdBQWxELEVBQStEO0FBQ2hFTixlQUFLLEdBQUdqQyxvQkFBTXdDLHdCQUFOLENBQStCekssU0FBUyxDQUFDdUssU0FBVixDQUFvQixDQUFwQixDQUEvQixFQUF1RHZLLFNBQVMsQ0FBQ3VLLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBdkQsQ0FBUjtBQUNBSixxQkFBVyxHQUFHbEMsb0JBQU13Qyx3QkFBTixDQUErQnpLLFNBQVMsQ0FBQ3dLLFdBQVYsQ0FBc0IsQ0FBdEIsQ0FBL0IsRUFBeUR4SyxTQUFTLENBQUN3SyxXQUFWLENBQXNCLENBQXRCLENBQXpELENBQWQ7QUFDSDs7QUFDRCxZQUFJRSxhQUFhLEdBQUc7QUFDaEIseUJBQWdCUixLQURBO0FBRWhCLCtCQUFzQkM7QUFGTixTQUFwQjs7QUFJQSxZQUFJLEtBQUs5TixLQUFMLENBQVdxTixVQUFmLEVBQTJCO0FBQ3ZCcEIsMkJBQWlCLGdCQUFHO0FBQU0scUJBQVMsRUFBRTdILFFBQWpCO0FBQTJCLGlCQUFLLEVBQUVpSyxhQUFsQztBQUFpRCxpQkFBSyxFQUFFMUIsT0FBeEQ7QUFBaUUscUJBQVMsRUFBRSxtQkFBQ3hJLEtBQUQ7QUFBQSxxQkFBVSxLQUFJLENBQUNuRSxLQUFMLENBQVdxTixVQUFYLENBQXNCbEosS0FBdEIsQ0FBVjtBQUFBO0FBQTVFLFlBQXBCO0FBQ0gsU0FGRCxNQUdLO0FBQ0Q4SCwyQkFBaUIsZ0JBQUc7QUFBTSxxQkFBUyxFQUFFN0gsUUFBakI7QUFBMkIsaUJBQUssRUFBRWlLLGFBQWxDO0FBQWlELGlCQUFLLEVBQUUxQjtBQUF4RCxZQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBT1YsaUJBQVA7QUFDSDs7O0VBdkZrQzFHLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIG9sRXh0ZW50IGZyb20gXCJvbC9leHRlbnRcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRTdHlsZX0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1zdHlsZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuXG5leHBvcnQgY2xhc3MgQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLmxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmxheWVyWm9vbVRvID0gdGhpcy5sYXllclpvb21Uby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3BhbkNsaWNrID0gdGhpcy5zcGFuQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmVudENhbGxiYWNrID0gdGhpcy5wYXJlbnRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBzaG93TGF5ZXIoc2hvd0VsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoc2hvd0VsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzaG93RWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChzaG93RWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBzaG93RWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcyxzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmICh2ZWN0b3JMYXllcil7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGVMYXllcihoaWRlRWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChoaWRlRWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpZGVFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKGhpZGVFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IGhpZGVFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcywgc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCBmYWxzZSlcbiAgfVxuICBjaGFuZ2VDaGlsZFN0YXRlIChjaGlsZCwgY2hpbGRTdGF0ZSwgYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkcyAmJiBjaGlsZC5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBjaGlsZC5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGNoaWxkLmNoaWxkc1tjaGlsZElkXSwgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgYWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoY2hpbGRTdGF0ZS5pZCwgYWN0aXZlKVxuICAgIGNoaWxkU3RhdGUuYWN0aXZlID0gYWN0aXZlO1xuICAgIHJldHVybiBjaGlsZFN0YXRlO1xuICB9XG4gIHBhcmVudENhbGxiYWNrIChrZXksIG5ld0NoaWxkU3RhdGUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2tleV0gPSBuZXdDaGlsZFN0YXRlO1xuICAgIGlmIChuZXdTdGF0ZS5hY3RpdmUgIT0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIC8vIG5ld1N0YXRlLmFjdGl2ZSA9IG5ld0NoaWxkU3RhdGUuYWN0aXZlO1xuICAgICAgaWYgKG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllckNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICB9XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllci5jaGlsZHMgJiYgdGhpcy5wcm9wcy5sYXllci5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IG5ld1N0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyWm9vbVRvKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG4gICAgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0gPSBzdGF0ZTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gIH1cbiAgc3BhbkNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQgPSAhdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3R5bGVQaWN0dXJlID0gbnVsbDtcbiAgICBsZXQgc3Bhblpvb20gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5zaG93TG9jc3R5bGVzID09PSBcIjFcIiAmJiB0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlcyAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZV0pIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmFkZFpvb21Ubykge1xuICAgICAgICBzdHlsZVBpY3R1cmUgPSA8QzRnU3RhcmJvYXJkU3R5bGUgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17dGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUn0gY2xpY2tFdmVudD17dGhpcy5sYXllclpvb21Ub30vPjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHlsZVBpY3R1cmUgPSA8QzRnU3RhcmJvYXJkU3R5bGUgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17dGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy5sYXllci5uYW1lfS8+O1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLmxheWVyLmFkZFpvb21UbyAmJiAhdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSkge1xuICAgICAgc3Bhblpvb20gPSA8c3BhbiBjbGFzc05hbWU9e1wiYzRnLWdlb2pzb24tYnV0dG9uXCJ9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9Lz47XG4gICAgfVxuICAgIGxldCBjc3NDbGFzcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlID8gY3NzQ29uc3RhbnRzLkFDVElWRSA6IGNzc0NvbnN0YW50cy5JTkFDVElWRTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIGNzc0NsYXNzICs9IFwiIFwiICsgY3NzQ29uc3RhbnRzLkRJU0FCTEVEO1xuICAgIH1cbiAgICBsZXQgb3BlbkNsb3NlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQgPyBjc3NDb25zdGFudHMuQ0xPU0UgOiBjc3NDb25zdGFudHMuT1BFTjtcbiAgICBsZXQgb2JqQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgbGV0IGxpbmtUZXh0O1xuICAgIGxldCBsaW5rU3dpdGNoO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlICYmIHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvKSB7XG4gICAgICBsaW5rVGV4dCA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGEgdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdGV4dFwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9hPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgbGlua1N3aXRjaCA9IDxhIGNsYXNzTmFtZT17Y3NzQ2xhc3MgKyBcIiBjNGctc3RhcmJvYXJkLWNoZWNrYm94LWljb25cIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9PjwvYT5cbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxpbmtUZXh0ID0gPGEgdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gY2xhc3NOYW1lPXtjc3NDbGFzc30gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9hPjtcbiAgICB9XG5cbiAgICBpZiAob2JqQ2hpbGRzICYmIG9iakNoaWxkcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzcGFuID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuSUNPTn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMuc3BhbkNsaWNrKGV2ZW50KX0vPjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAge3NwYW59XG4gICAgICAgICAge3N0eWxlUGljdHVyZX1cbiAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgIHtsaW5rU3dpdGNofVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtvYmpDaGlsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5ieVBhc3NDaGlsZHMgfHwgdGhpcy5wcm9wcy5maWx0ZXJGdW5jKHRoaXMucHJvcHMuc3RyRmlsdGVyLCBpdGVtLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBrZXk9e2lkfSBrZXlJZD17aWR9IGlkPXtpdGVtLmlkfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5wcm9wcy5zdHJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLnByb3BzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHNwYW5ab29tID0gbnVsbDtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgICAge3N0eWxlUGljdHVyZX1cbiAgICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICAgIHtsaW5rU3dpdGNofVxuICAgICAgICAgIDwvbGk+XG4gICAgICApXG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRMYXllckVsZW1lbnR9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRMYXllckZpbHRlciA9IHRoaXMuc2V0TGF5ZXJGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFsbExheWVycyA9IHRoaXMudG9nZ2xlQWxsTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgIGxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgICAvLyB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0aWFsQ291bnRlck9mZiA9IDA7XG4gICAgdGhpcy5pbml0aWFsQ291bnRlck9uID0gMDtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcykge1xuICAgICAgICAgIGZvciAobGV0IGogaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZCh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzW2pdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbml0aWFsQ291bnRlck9uID4gdGhpcy5pbml0aWFsQ291bnRlck9mZjtcbiAgfVxuICBnZXRJbml0aWFsU3RhdGVDaGlsZCAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQuYWN0aXZlKSB7XG4gICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSBpbiBjaGlsZC5jaGlsZFN0YXRlcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKGNoaWxkLmNoaWxkU3RhdGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrRnVuY3Rpb24gPSAoa2V5LCBuZXdTdGF0ZSkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIG5ld1N0YXRlc1trZXldID0gbmV3U3RhdGU7XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhuZXdTdGF0ZXMpXG4gIH07XG5cbiAgc2V0TGF5ZXJGaWx0ZXIoKSB7XG4gICAgbGV0IGZpbHRlclZhbHVlID0galF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlci1maWVsZFwiKS52YWwoKSB8fCBcIlwiOyAvL2ZhbGxiYWNrXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGF5ZXJGaWx0ZXI6IGZpbHRlclZhbHVlfSk7XG4gIH1cblxuICBmaWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIsIHN0YXRlID0ge30sIGRpZ0RlZXBlciA9IHRydWUpIHtcbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGlmIChsYXllciAmJiBsYXllci5uYW1lICYmIChsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgICAgIHx8IGxheWVyLm5hbWUudG9VcHBlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b1VwcGVyQ2FzZSgpKSAhPT0gLTEpKSB7XG4gICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGxheWVyLnRhZ3MgJiYgbGF5ZXIudGFncy5maW5kKChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTF9KSl7XG4gICAgICBzaG93ID0gdHJ1ZVxuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpZ0RlZXBlcikge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBsYXllci5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSAmJiAhc2hvdykge1xuICAgICAgICAgIHNob3cgPSB0aGlzLmZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllci5jaGlsZHNbY2hpbGRJZF0sIHN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKTtcbiAgICAgICAgICBpZiAoc3RyRmlsdGVyICYmIHNob3cgJiYgc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hvdztcbiAgfVxuXG4gIHRvZ2dsZUFsbExheWVycygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93KGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGUobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cblxuICAgIGlmICghc2NvcGUuYnV0dG9uRW5hYmxlZCkge1xuICAgICAgc3RhdGVzID0gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHN0YXRlcyk7XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcyAmJiB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmxlbmd0aCA+IDAgJiYgISh0aGlzLmluaXRpYWxDb3VudGVyT2ZmICYmIHRoaXMuaW5pdGlhbENvdW50ZXJPbikpIHtcbiAgICAgIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICAgIH1cblxuICAgIGxldCBsYXllcnMsIHN0YXRlcywgZmlsdGVyO1xuICAgIGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZmlsdGVyID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXIgd2l0aG91dC1idXR0b25cIn0+XG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIG9uSW5wdXQ9e3RoaXMuc2V0TGF5ZXJGaWx0ZXJ9IHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn0vPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAgbGV0IGhlYWRsaW5lID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmJ1dHRvbikge1xuICAgICAgaGVhZGxpbmUgPSA8YSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1oZWFkbGluZS1saW5rIFwiICsgKHRoaXMuYnV0dG9uRW5hYmxlZCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy50b2dnbGVBbGxMYXllcnN9Pnt0aGlzLnByb3BzLmhlYWRsaW5lIHx8IHRoaXMucHJvcHMubGFuZy5MQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEx9PC9hPjtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGxpbmUgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRIZWFkbGluZVwiPnt0aGlzLnByb3BzLmhlYWRsaW5lfTwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtoZWFkbGluZX1cbiAgICAgIHtmaWx0ZXJ9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctY29udGVudC1sYXllcnRyZWVcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRX0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2xheWVycy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlckZ1bmModGhpcy5zdGF0ZS5sYXllckZpbHRlciwgaXRlbSwgc3RhdGVzW2lkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBrZXk9e2lkfSBrZXlJZD17aWR9IGlkPXtpdGVtLmlkfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMuY2FsbGJhY2tGdW5jdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLmZpbHRlckZ1bmModGhpcy5zdGF0ZS5sYXllckZpbHRlciwgaXRlbSxmYWxzZSwgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5zdGF0ZS5sYXllckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5SZXNpemU9e3RoaXMucHJvcHMuZm5SZXNpemV9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1N0YXJib2FyZExheWVyc3dpdGNoZXJ9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlclwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcmJvYXJkUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSQk9BUkQ7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1zdGFyYm9hcmQtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMgPSB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZUZ1bmN0aW9uID0gdGhpcy5yZXNpemVGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbiA9IHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24uYmluZCh0aGlzKTtcbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJyaWdodFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLXN0YXJib2FyZC1wYW5lbFwiLFxuICAgICAgY2hpbGRzOiBwcm9wcy5jaGlsZHMgfHwgW10sXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYWN0aXZlVGFiOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBzZXRBY3RpdmVUYWIoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiBpZHh9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBsZXQgYnV0dG9uU3dpdGNoZXIgPSBcIlwiO1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCByZWd1bGFyQnV0dG9uID0gPGJ1dHRvbiBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVJ9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyXCJ9IG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYigwKX19Lz47XG4gICAgICBidXR0b25zLnB1c2gocmVndWxhckJ1dHRvbik7XG4gICAgICBidXR0b25zLnB1c2godGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGljb25Db2RlID0gZWxlbWVudC5hd2Vzb21lSWNvbjtcbiAgICAgICAgICBzY29wZS5jcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpO1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IHRpdGxlPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYihpbmRleCArIDEpfX0vPjtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBidXR0b25Td2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtc3dpdGNoZXJcIn0+XG4gICAgICAgIHtidXR0b25zfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGxldCB0YWJzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGFicyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e2luZGV4fSBtYXBDb250cm9sbGVyPXtzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3Njb3BlLnByb3BzLnRhYkxheWVyc1tpbmRleF19IHBhcmVudENhbGxiYWNrPXtzY29wZS5wcm9wcy50YWJDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3Njb3BlLnByb3BzLnRhYlN0YXRlc30gb3BlbmZ1bmM9e3Njb3BlLm9wZW59IGhlYWRsaW5lPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Njb3BlLnN0YXRlLm9wZW59IGFjdGl2ZT17KGluZGV4ICsgMSkgPT09IHNjb3BlLnN0YXRlLmFjdGl2ZVRhYn0vPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkLWhlYWRlclwifSBoZWFkZXJDbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9IRUFETElORX1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXttYXBEYXRhLnN0YXJib2FyZC5sYWJlbCB8fCB0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEfSBjbG9zZUJ0bkNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NMT1NFfSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIHtidXR0b25Td2l0Y2hlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVJ9PlxuICAgICAgICAgIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSBtYXBDb250cm9sbGVyID17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17dGhpcy5wcm9wcy5vYmpMYXllcnN9IHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHBhcmVudENhbGxiYWNrPXt0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlc30gY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfSBvcGVuZnVuYz17dGhpcy5vcGVufSBoZWFkbGluZT17bWFwRGF0YS5sYXllcnN3aXRjaGVyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IGFjdGl2ZT17c2NvcGUuc3RhdGUuYWN0aXZlVGFiID09PSAwfS8+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KSB7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIC8vIHdlYmtpdCBoYWNrOlxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKFwiYnV0dG9uLmM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4ICsgXCI6YmVmb3JlIHtcXG5cIiArXG4gICAgICBcIiAgY29udGVudDogXFxcIlxcXFxcIiArIGljb25Db2RlICsgXCJcXFwiO1xcblwiICtcbiAgICAgIFwiICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcblwiICtcbiAgICAgIFwiICBmb250LXdlaWdodDogOTAwO1xcblwiICtcbiAgICAgIFwiICBmb250LXNpemU6IGluaGVyaXQ7XFxuXCIgK1xuICAgICAgXCJ9XCIpXG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0sICgpID0+IHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICB9XG5cbiAgcmVzaXplRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQzRnU3RhcmJvYXJkU3R5bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGZvciBpbnRlcmFjdGlvbi10cmlnZ2VyXG4gICAgICAgIGxldCBzdHlsZVRyaWdnZXJMYWJlbCA9IG51bGw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsb3IgPSBsb2NzdHlsZS5zdHlsZSAmJiBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpID8gbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKTogbnVsbDtcbiAgICAgICAgbGV0IHN0eWwwciA9IEFycmF5LmlzQXJyYXkoc3R5bG9yKSA/IHN0eWxvclswXTogc3R5bG9yO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gc3R5bGVEYXRhID8gc3R5bGVEYXRhLnN0eWxldHlwZSA6IFwiZGVmYXVsdFwiO1xuICAgICAgICBsZXQgdG9vbHRpcCA9IHRoaXMucHJvcHMudG9vbHRpcCB8fCBcIlwiO1xuICAgICAgICBpZiAoc3R5bGVEYXRhICYmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZUljb24gPSBudWxsO1xuICAgICAgICAgICAgbGV0IGljb25TcmM7XG4gICAgICAgICAgICBpZiAoKHN0eWxlRGF0YS5pY29uX3NyYyAmJiBzdHlsZURhdGEuaWNvbl9zcmMuaW5kZXhPZignLicpICE9PSAtMSkgfHwgKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLnN2Z1NyYy5pbmRleE9mKCcuJykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5pY29uX3NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17aWNvblNyY30gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bDByKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlSW1hZ2UgPSBzdHlsMHIuZ2V0SW1hZ2UgJiYgdHlwZW9mIHN0eWwwci5nZXRJbWFnZSA9PT0gXCJmdW5jdGlvblwiICYmIHN0eWwwci5nZXRJbWFnZSgpID8gc3R5bDByLmdldEltYWdlKCk6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlSW1hZ2UgJiYgc3R5bGVJbWFnZS5nZXRTcmMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17c3R5bGVJbWFnZS5nZXRTcmMoKX0gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlVHJpZ2dlckxhYmVsO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=