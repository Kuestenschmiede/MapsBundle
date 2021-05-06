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
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-starboard-header",
        headerClass: _c4gMapsConstant.cssConstants.STARBOARD_HEADLINE,
        header: mapData.starboard.label || this.langConstants.STARBOARD,
        closeBtnClass: _c4gMapsConstant.cssConstants.STARBOARD_CLOSE,
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), buttonSwitcher, /*#__PURE__*/_react["default"].createElement("div", {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giXSwibmFtZXMiOlsiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImFkZFpvb21UbyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJzcGFuIiwiSUNPTiIsIm1hcCIsIml0ZW0iLCJieVBhc3NDaGlsZHMiLCJmaWx0ZXJGdW5jIiwic3RyRmlsdGVyIiwiZm5SZXNpemUiLCJDb21wb25lbnQiLCJTdGFyYm9hcmRMYXllcnN3aXRjaGVyIiwiaW5pdGlhbENvdW50ZXJPZmYiLCJpbml0aWFsQ291bnRlck9uIiwiaSIsImoiLCJnZXRJbml0aWFsU3RhdGVDaGlsZCIsIm5ld1N0YXRlcyIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiZWxlbWVudCIsInN0YXRlcyIsImxheWVycyIsIm9iakxheWVycyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJnZXRJbml0aWFsU3RhdGVzIiwiZmlsdGVyIiwibGF5ZXJzd2l0Y2hlciIsImhlYWRsaW5lIiwiYnV0dG9uIiwiTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsImNhbGxiYWNrRnVuY3Rpb24iLCJTdGFyYm9hcmRQYW5lbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxhbmdDb25zdGFudHMiLCJ0aXRsZSIsIkNUUkxfU1RBUkJPQVJEIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImFkZENvbnRyb2wiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImlkeCIsIm1hcERhdGEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInNldEFjdGl2ZVRhYiIsInB1c2giLCJpbmRleCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9IRUFETElORSIsImxhYmVsIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSx3Qjs7Ozs7QUFFWCxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWDtBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsZ0RBQWxCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixnREFBbkI7QUFDQSxVQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixnREFBakI7QUFDQSxVQUFLRyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkgsSUFBekIsZ0RBQTNCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixnREFBdEI7QUFSaUI7QUFTbEI7Ozs7V0FHRCxxQkFBK0I7QUFBQSxVQUFyQkssWUFBcUIsdUVBQU4sSUFBTTtBQUM3QixVQUFNUCxLQUFLLEdBQUcsSUFBZDtBQUNBLFVBQUlRLFFBQVEsR0FBRyxLQUFmO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLEtBQWxCOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDaEIsWUFBSUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFlBQWQsQ0FBSixFQUFpQztBQUMvQkMsa0JBQVEsR0FBR0QsWUFBWDtBQUNELFNBRkQsTUFFTyxJQUFJQSxZQUFZLFlBQVlLLGFBQTVCLEVBQW9DO0FBQ3pDSCxxQkFBVyxHQUFHRixZQUFkO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTEMsZ0JBQVEsR0FBR0EsUUFBUSxJQUFJUixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkws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QyxFQUF3REMsV0FBeEQsQ0FBb0UsV0FBcEU7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLG9DQUEyQjtBQUN6Qm5ELFlBQU0sQ0FBQywwQkFBRCxDQUFOLENBQW1Da0QsUUFBbkMsQ0FBNEMsV0FBNUMsRUFBeURDLFdBQXpELENBQXFFLFVBQXJFO0FBQ0Q7OztFQXpLeUNoRSxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLXN0YXJib2FyZC1wYW5lbF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgc2hvd0xheWVyKHNob3dFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKHNob3dFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvd0VsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IHNob3dFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIHRydWUpXG4gIH1cblxuICBoaWRlTGF5ZXIoaGlkZUVsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUVsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWRlRWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChoaWRlRWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgZmFsc2UpXG4gIH1cbiAgY2hhbmdlQ2hpbGRTdGF0ZSAoY2hpbGQsIGNoaWxkU3RhdGUsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZHMgJiYgY2hpbGQuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gY2hpbGQuY2hpbGRzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShjaGlsZC5jaGlsZHNbY2hpbGRJZF0sIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKGNoaWxkU3RhdGUuaWQsIGFjdGl2ZSlcbiAgICBjaGlsZFN0YXRlLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgfVxuICBwYXJlbnRDYWxsYmFjayAoa2V5LCBuZXdDaGlsZFN0YXRlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1trZXldID0gbmV3Q2hpbGRTdGF0ZTtcbiAgICBpZiAobmV3U3RhdGUuYWN0aXZlICE9IG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAvLyBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzICYmIHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBsYXllckNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBsYXllckNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXJDaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBuZXdTdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGxheWVyQ2hpbGRzW2NoaWxkSWRdLCBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgbmV3U3RhdGUuYWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllclpvb21UbyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5sYXllckNsaWNrKGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnpvb21Ubyh0aGlzLnByb3BzLmxheWVyKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdID0gc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICB9XG4gIHNwYW5DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID0gIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0eWxlUGljdHVyZSA9IG51bGw7XG4gICAgbGV0IHNwYW5ab29tID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuc2hvd0xvY3N0eWxlcyA9PT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXMgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8pIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IGNsaWNrRXZlbnQ9e3RoaXMubGF5ZXJab29tVG99Lz47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0vPjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8gJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUpIHtcbiAgICAgIHNwYW5ab29tID0gPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1nZW9qc29uLWJ1dHRvblwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfS8+O1xuICAgIH1cbiAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSA/IGNzc0NvbnN0YW50cy5BQ1RJVkUgOiBjc3NDb25zdGFudHMuSU5BQ1RJVkU7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICBjc3NDbGFzcyArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ESVNBQkxFRDtcbiAgICB9XG4gICAgbGV0IG9wZW5DbG9zZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID8gY3NzQ29uc3RhbnRzLkNMT1NFIDogY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgbGV0IG9iakNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgIGxldCBsaW5rVGV4dDtcbiAgICBsZXQgbGlua1N3aXRjaDtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSAmJiB0aGlzLnByb3BzLmxheWVyLmFkZFpvb21Ubykge1xuICAgICAgbGlua1RleHQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxhIHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXRleHRcIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgIGxpbmtTd2l0Y2ggPSA8YSBjbGFzc05hbWU9e2Nzc0NsYXNzICsgXCIgYzRnLXN0YXJib2FyZC1jaGVja2JveC1pY29uXCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT48L2E+XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsaW5rVGV4dCA9IDxhIHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGNsYXNzTmFtZT17Y3NzQ2xhc3N9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT47XG4gICAgfVxuXG4gICAgaWYgKG9iakNoaWxkcyAmJiBvYmpDaGlsZHMubGVuZ3RoKSB7XG4gICAgICBsZXQgc3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG4gICAgICBsZXQgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljaztcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnpvb21Ubykge1xuICAgICAgICBsYXllckNsaWNrID0gdGhpcy5sYXllclpvb21UbztcbiAgICAgICAgY3NzQ2xhc3MgPSBcImM0Zy1nZW9qc29uLWJ1dHRvblwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB0b2dnbGVBbGxMYXllcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1N0YXJib2FyZExheWVyc3dpdGNoZXJ9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlclwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcmJvYXJkUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSQk9BUkQ7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1zdGFyYm9hcmQtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMgPSB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZUZ1bmN0aW9uID0gdGhpcy5yZXNpemVGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbiA9IHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24uYmluZCh0aGlzKTtcbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJyaWdodFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLXN0YXJib2FyZC1wYW5lbFwiLFxuICAgICAgY2hpbGRzOiBwcm9wcy5jaGlsZHMgfHwgW10sXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYWN0aXZlVGFiOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBzZXRBY3RpdmVUYWIoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiBpZHh9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBsZXQgYnV0dG9uU3dpdGNoZXIgPSBcIlwiO1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCByZWd1bGFyQnV0dG9uID0gPGJ1dHRvbiBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVJ9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyXCJ9IG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYigwKX19Lz47XG4gICAgICBidXR0b25zLnB1c2gocmVndWxhckJ1dHRvbik7XG4gICAgICBidXR0b25zLnB1c2godGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGljb25Db2RlID0gZWxlbWVudC5hd2Vzb21lSWNvbjtcbiAgICAgICAgICBzY29wZS5jcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpO1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IHRpdGxlPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYihpbmRleCArIDEpfX0vPjtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBidXR0b25Td2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtc3dpdGNoZXJcIn0+XG4gICAgICAgIHtidXR0b25zfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGxldCB0YWJzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGFicyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e2luZGV4fSBtYXBDb250cm9sbGVyPXtzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3Njb3BlLnByb3BzLnRhYkxheWVyc1tpbmRleF19IHBhcmVudENhbGxiYWNrPXtzY29wZS5wcm9wcy50YWJDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3Njb3BlLnByb3BzLnRhYlN0YXRlc30gb3BlbmZ1bmM9e3Njb3BlLm9wZW59IGhlYWRsaW5lPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Njb3BlLnN0YXRlLm9wZW59IGFjdGl2ZT17KGluZGV4ICsgMSkgPT09IHNjb3BlLnN0YXRlLmFjdGl2ZVRhYn0vPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0hFQURMSU5FfVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXttYXBEYXRhLnN0YXJib2FyZC5sYWJlbCB8fCB0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEfSBjbG9zZUJ0bkNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NMT1NFfSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfVxuICAgICAgICAgICAgICAgICAgY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAge2J1dHRvblN3aXRjaGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUn0+XG4gICAgICAgICAgPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IG1hcENvbnRyb2xsZXIgPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXt0aGlzLnByb3BzLm9iakxheWVyc30gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gcGFyZW50Q2FsbGJhY2s9e3RoaXMucHJvcHMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzfSBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9IG9wZW5mdW5jPXt0aGlzLm9wZW59IGhlYWRsaW5lPXttYXBEYXRhLmxheWVyc3dpdGNoZXIubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gYWN0aXZlPXtzY29wZS5zdGF0ZS5hY3RpdmVUYWIgPT09IDB9Lz5cbiAgICAgICAgICB7dGFic31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpIHtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgLy8gd2Via2l0IGhhY2s6XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoXCJidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXggKyBcIjpiZWZvcmUge1xcblwiICtcbiAgICAgIFwiICBjb250ZW50OiBcXFwiXFxcXFwiICsgaWNvbkNvZGUgKyBcIlxcXCI7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cIiArXG4gICAgICBcIn1cIilcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSwgKCkgPT4gdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSk7XG4gIH1cblxuICByZXNpemVGdW5jdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9