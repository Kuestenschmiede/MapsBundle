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
<<<<<<< refs/remotes/origin/main
          stylePicture = _react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
=======
          stylePicture = /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
>>>>>>> Several version preps
            styleData: this.props.styleData,
            styleId: this.props.layer.locstyle,
            tooltip: this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE + this.props.layer.name + this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,
            clickEvent: this.layerZoomTo
          });
        } else {
<<<<<<< refs/remotes/origin/main
          stylePicture = _react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
=======
          stylePicture = /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
>>>>>>> Several version preps
            styleData: this.props.styleData,
            styleId: this.props.layer.locstyle,
            tooltip: this.props.layer.name
          });
        }
      } else if (this.props.layer.addZoomTo && !this.props.mapController.data.starboard.invertZoomActivate) {
<<<<<<< refs/remotes/origin/main
        spanZoom = _react["default"].createElement("span", {
=======
        spanZoom = /*#__PURE__*/_react["default"].createElement("span", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        linkText = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("a", {
=======
        linkText = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
>>>>>>> Several version preps
          title: this.props.layer.name,
          className: "c4g-starboard-text",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerZoomTo(event);
          }
        }, this.props.layer.name));
<<<<<<< refs/remotes/origin/main
        linkSwitch = _react["default"].createElement("a", {
=======
        linkSwitch = /*#__PURE__*/_react["default"].createElement("a", {
>>>>>>> Several version preps
          className: cssClass + " c4g-starboard-checkbox-icon",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        });
      } else {
<<<<<<< refs/remotes/origin/main
        linkText = _react["default"].createElement("a", {
=======
        linkText = /*#__PURE__*/_react["default"].createElement("a", {
>>>>>>> Several version preps
          title: this.props.layer.name,
          className: cssClass,
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        }, this.props.layer.name);
      }

      if (objChilds && objChilds.length) {
<<<<<<< refs/remotes/origin/main
        var span = _react["default"].createElement("span", {
=======
        var span = /*#__PURE__*/_react["default"].createElement("span", {
>>>>>>> Several version preps
          className: _c4gMapsConstant.cssConstants.ICON,
          onMouseUp: function onMouseUp(event) {
            return _this3.spanClick(event);
          }
        });

<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("li", {
          className: openClose + " c4g-starboard-list-element"
        }, span, stylePicture, spanZoom, linkText, linkSwitch, _react["default"].createElement("ul", null, objChilds.map(function (item, id) {
          if (_this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, _this3.props.layerStates.childStates[id])) {
            return _react["default"].createElement(C4gStarboardLayerElement, {
=======
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: openClose + " c4g-starboard-list-element"
        }, span, stylePicture, spanZoom, linkText, linkSwitch, /*#__PURE__*/_react["default"].createElement("ul", null, objChilds.map(function (item, id) {
          if (_this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, _this3.props.layerStates.childStates[id])) {
            return /*#__PURE__*/_react["default"].createElement(C4gStarboardLayerElement, {
>>>>>>> Several version preps
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

<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("li", {
=======
        return /*#__PURE__*/_react["default"].createElement("li", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        filter = _react["default"].createElement("div", {
          className: "c4g-starboard-layertree-filter without-button"
        }, _react["default"].createElement("input", {
=======
        filter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-starboard-layertree-filter without-button"
        }, /*#__PURE__*/_react["default"].createElement("input", {
>>>>>>> Several version preps
          className: "c4g-starboard-layertree-filter-field",
          type: "text",
          onInput: this.setLayerFilter,
          placeholder: "\uF002"
        }));
      }

      var headline = "";

      if (this.props.mapController.data.starboard.button) {
<<<<<<< refs/remotes/origin/main
        headline = _react["default"].createElement("a", {
=======
        headline = /*#__PURE__*/_react["default"].createElement("a", {
>>>>>>> Several version preps
          className: "c4g-starboard-headline-link " + (this.buttonEnabled ? "c4g-active" : "c4g-inactive"),
          onMouseUp: this.toggleAllLayers
        }, this.props.headline || this.props.lang.LAYERSWITCHER_TOGGLE_ALL);
      } else {
<<<<<<< refs/remotes/origin/main
        headline = _react["default"].createElement("div", {
=======
        headline = /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
          className: "contentHeadline"
        }, this.props.headline);
      }

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement(_react["default"].Fragment, null, headline, filter, _react["default"].createElement("div", {
        className: "c4g-content-layertree"
      }, _react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE
      }, _react["default"].createElement("ul", null, layers.map(function (item, id) {
        if (_this2.filterFunc(_this2.state.layerFilter, item, states[id])) {
          return _react["default"].createElement(_c4gStarboardLayerElement.C4gStarboardLayerElement, {
=======
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, headline, filter, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-content-layertree"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE
      }, /*#__PURE__*/_react["default"].createElement("ul", null, layers.map(function (item, id) {
        if (_this2.filterFunc(_this2.state.layerFilter, item, states[id])) {
          return /*#__PURE__*/_react["default"].createElement(_c4gStarboardLayerElement.C4gStarboardLayerElement, {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
        var regularButton = _react["default"].createElement("button", {
=======
        var regularButton = /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
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
<<<<<<< refs/remotes/origin/main
          return _react["default"].createElement("button", {
=======
          return /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
            key: index,
            title: element[0].name,
            className: "c4g-starboard-view-trigger-tab-" + index,
            onMouseUp: function onMouseUp() {
              scope.setActiveTab(index + 1);
            }
          });
        }));
<<<<<<< refs/remotes/origin/main
        buttonSwitcher = _react["default"].createElement("div", {
=======
        buttonSwitcher = /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
          className: "c4g-starboard-switcher"
        }, buttons);
      }

      var tabs = "";

      if (this.props.tabLayers.length > 0) {
<<<<<<< refs/remotes/origin/main
        tabs = _react["default"].createElement(_react["default"].Fragment, null, this.props.tabLayers.map(function (element, index) {
          return _react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
=======
        tabs = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.tabLayers.map(function (element, index) {
          return /*#__PURE__*/_react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
>>>>>>> Several version preps
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

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER
      }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
>>>>>>> Several version preps
        wrapperClass: "c4g-starboard-header",
        headerClass: _c4gMapsConstant.cssConstants.STARBOARD_HEADLINE,
        header: mapData.starboard.label || this.langConstants.STARBOARD,
        closeBtnClass: _c4gMapsConstant.cssConstants.STARBOARD_CLOSE,
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
<<<<<<< refs/remotes/origin/main
      }), buttonSwitcher, _react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_CONTAINER
      }, _react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
=======
      }), buttonSwitcher, /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_CONTAINER
      }, /*#__PURE__*/_react["default"].createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, {
>>>>>>> Several version preps
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

<<<<<<< refs/remotes/origin/main
/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giXSwibmFtZXMiOlsiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImFkZFpvb21UbyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJzcGFuIiwiSUNPTiIsIm1hcCIsIml0ZW0iLCJieVBhc3NDaGlsZHMiLCJmaWx0ZXJGdW5jIiwic3RyRmlsdGVyIiwiZm5SZXNpemUiLCJDb21wb25lbnQiLCJTdGFyYm9hcmRMYXllcnN3aXRjaGVyIiwiaW5pdGlhbENvdW50ZXJPZmYiLCJpbml0aWFsQ291bnRlck9uIiwiaSIsImoiLCJnZXRJbml0aWFsU3RhdGVDaGlsZCIsIm5ld1N0YXRlcyIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiZWxlbWVudCIsInN0YXRlcyIsImxheWVycyIsIm9iakxheWVycyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJnZXRJbml0aWFsU3RhdGVzIiwiZmlsdGVyIiwibGF5ZXJzd2l0Y2hlciIsImhlYWRsaW5lIiwiYnV0dG9uIiwiTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsImNhbGxiYWNrRnVuY3Rpb24iLCJTdGFyYm9hcmRQYW5lbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxhbmdDb25zdGFudHMiLCJ0aXRsZSIsIkNUUkxfU1RBUkJPQVJEIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImFkZENvbnRyb2wiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImlkeCIsIm1hcERhdGEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInNldEFjdGl2ZVRhYiIsInB1c2giLCJpbmRleCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9IRUFETElORSIsImxhYmVsIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSx3Qjs7Ozs7QUFFWCxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWDtBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsZ0RBQWxCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixnREFBbkI7QUFDQSxVQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixnREFBakI7QUFDQSxVQUFLRyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkgsSUFBekIsZ0RBQTNCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixnREFBdEI7QUFSaUI7QUFTbEI7Ozs7V0FHRCxxQkFBK0I7QUFBQSxVQUFyQkssWUFBcUIsdUVBQU4sSUFBTTtBQUM3QixVQUFNUCxLQUFLLEdBQUcsSUFBZDtBQUNBLFVBQUlRLFFBQVEsR0FBRyxLQUFmO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLEtBQWxCOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDaEIsWUFBSUcsS0FBSyxDQUFDQyxPQUFOLENBQWNKLFlBQWQsQ0FBSixFQUFpQztBQUMvQkMsa0JBQVEsR0FBR0QsWUFBWDtBQUNELFNBRkQsTUFFTyxJQUFJQSxZQUFZLFlBQVlLLGFBQTVCLEVBQW9DO0FBQ3pDSCxxQkFBVyxHQUFHRixZQUFkO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTEMsZ0JBQVEsR0FBR0EsUUFBUSxJQUFJUixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkws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QXBFO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxvQ0FBMkI7QUFDekJuRCxZQUFNLENBQUMsMEJBQUQsQ0FBTixDQUFtQ2tELFFBQW5DLENBQTRDLFdBQTVDLEVBQXlEQyxXQUF6RCxDQUFxRSxVQUFyRTtBQUNEOzs7RUF6S3lDaEUsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1zdGFyYm9hcmQtcGFuZWxfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMubGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGF5ZXJab29tVG8gPSB0aGlzLmxheWVyWm9vbVRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcGFuQ2xpY2sgPSB0aGlzLnNwYW5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIHNob3dMYXllcihzaG93RWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNob3dFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBzaG93RWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKHNob3dFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IHNob3dFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKXtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCB0cnVlKVxuICB9XG5cbiAgaGlkZUxheWVyKGhpZGVFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlkZUVsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IGhpZGVFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoaGlkZUVsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmICh2ZWN0b3JMYXllcikge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIGZhbHNlKVxuICB9XG4gIGNoYW5nZUNoaWxkU3RhdGUgKGNoaWxkLCBjaGlsZFN0YXRlLCBhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRzICYmIGNoaWxkLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGNoaWxkLmNoaWxkcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUoY2hpbGQuY2hpbGRzW2NoaWxkSWRdLCBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBhY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChjaGlsZFN0YXRlLmlkLCBhY3RpdmUpXG4gICAgY2hpbGRTdGF0ZS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgcmV0dXJuIGNoaWxkU3RhdGU7XG4gIH1cbiAgcGFyZW50Q2FsbGJhY2sgKGtleSwgbmV3Q2hpbGRTdGF0ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNba2V5XSA9IG5ld0NoaWxkU3RhdGU7XG4gICAgaWYgKG5ld1N0YXRlLmFjdGl2ZSAhPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgLy8gbmV3U3RhdGUuYWN0aXZlID0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmU7XG4gICAgICBpZiAobmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGF5ZXJDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXJDaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyQ2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gbmV3U3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShsYXllckNoaWxkc1tjaGlsZElkXSwgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIG5ld1N0YXRlLmFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJab29tVG8oZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci56b29tVG8odGhpcy5wcm9wcy5sYXllcik7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICBsaW5rU3dpdGNoID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzcyArIFwiIGM0Zy1zdGFyYm9hcmQtY2hlY2tib3gtaWNvblwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PC9hPlxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGlua1RleHQgPSA8YSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBjbGFzc05hbWU9e2Nzc0NsYXNzfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+O1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5JQ09OfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5zcGFuQ2xpY2soZXZlbnQpfS8+O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICB7c3Bhbn1cbiAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge29iakNoaWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnByb3BzLnN0ckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMucHJvcHMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5wcm9wcy5ieVBhc3NDaGlsZHMgfHwgdGhpcy5wcm9wcy5maWx0ZXJGdW5jKHRoaXMucHJvcHMuc3RyRmlsdGVyLCBpdGVtLCBmYWxzZSwgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5SZXNpemU9e3RoaXMucHJvcHMuZm5SZXNpemV9Lz5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc3Bhblpvb20gPSBudWxsO1xuICAgICAgbGV0IGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2s7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJab29tVG87XG4gICAgICAgIGNzc0NsYXNzID0gXCJjNGctZ2VvanNvbi1idXR0b25cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0ICAgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB0b2dnbGVBbGxMYXllcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdCAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHQgICAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTdGFyYm9hcmRMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXJcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhclwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkLWhlYWRlclwifSBoZWFkZXJDbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9IRUFETElORX1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgIGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIHtidXR0b25Td2l0Y2hlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVJ9PlxuICAgICAgICAgIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSBtYXBDb250cm9sbGVyID17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17dGhpcy5wcm9wcy5vYmpMYXllcnN9IHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHBhcmVudENhbGxiYWNrPXt0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlc30gY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfSBvcGVuZnVuYz17dGhpcy5vcGVufSBoZWFkbGluZT17bWFwRGF0YS5sYXllcnN3aXRjaGVyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IGFjdGl2ZT17c2NvcGUuc3RhdGUuYWN0aXZlVGFiID09PSAwfS8+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KSB7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIC8vIHdlYmtpdCBoYWNrOlxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKFwiYnV0dG9uLmM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4ICsgXCI6YmVmb3JlIHtcXG5cIiArXG4gICAgICBcIiAgY29udGVudDogXFxcIlxcXFxcIiArIGljb25Db2RlICsgXCJcXFwiO1xcblwiICtcbiAgICAgIFwiICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcblwiICtcbiAgICAgIFwiICBmb250LXdlaWdodDogOTAwO1xcblwiICtcbiAgICAgIFwiICBmb250LXNpemU6IGluaGVyaXQ7XFxuXCIgK1xuICAgICAgXCJ9XCIpXG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0sICgpID0+IHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICB9XG5cbiAgcmVzaXplRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
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

        if (this.props.clickEvent && this.props.tooltip) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: this.props.tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          }, styleIcon);
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE
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

        if (this.props.clickEvent && this.props.tooltip) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: this.props.tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          });
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeCJdLCJuYW1lcyI6WyJDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQiLCJwcm9wcyIsInNjb3BlIiwibGF5ZXJDbGljayIsImJpbmQiLCJsYXllclpvb21UbyIsInNwYW5DbGljayIsImNoYW5nZUNvbGxhcHNlU3RhdGUiLCJwYXJlbnRDYWxsYmFjayIsInNob3dFbGVtZW50cyIsImZlYXR1cmVzIiwidmVjdG9yTGF5ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJWZWN0b3IiLCJsYXllciIsImxheWVyQ29udHJvbGxlciIsIm1hcENvbnRyb2xsZXIiLCJwcm94eSIsImxlbmd0aCIsInNob3ciLCJsb2FkZXIiLCJpZCIsInNldExheWVyU3RhdGVXaXRoSWQiLCJoaWRlRWxlbWVudHMiLCJoaWRlIiwiY2hpbGQiLCJjaGlsZFN0YXRlIiwiYWN0aXZlIiwic2hvd0xheWVyIiwiaGlkZUxheWVyIiwiY2hpbGRzIiwiY2hpbGRJZCIsImhhc093blByb3BlcnR5IiwiY3VycmVudENoaWxkU3RhdGUiLCJjaGlsZFN0YXRlcyIsImNoYW5nZUNoaWxkU3RhdGUiLCJrZXkiLCJuZXdDaGlsZFN0YXRlIiwibmV3U3RhdGUiLCJsYXllclN0YXRlcyIsImtleUlkIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZ3JleWVkIiwibGF5ZXJDaGlsZHMiLCJ6b29tVG8iLCJzZXRDaGlsZEZlYXR1cmVGbGFnIiwid2luZG93Iiwic2V0VGltZW91dCIsInN0YXRlIiwiY29sbGFwc2VkIiwic3R5bGVQaWN0dXJlIiwic3Bhblpvb20iLCJkYXRhIiwic3RhcmJvYXJkIiwic2hvd0xvY3N0eWxlcyIsImxvY3N0eWxlIiwic3R5bGVEYXRhIiwiYXJyTG9jU3R5bGVzIiwiYWRkWm9vbVRvIiwibGFuZyIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFIiwibmFtZSIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVIiLCJpbnZlcnRab29tQWN0aXZhdGUiLCJldmVudCIsImNzc0NsYXNzIiwiY3NzQ29uc3RhbnRzIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJESVNBQkxFRCIsIm9wZW5DbG9zZSIsIkNMT1NFIiwiT1BFTiIsIm9iakNoaWxkcyIsImxpbmtUZXh0IiwibGlua1N3aXRjaCIsInNwYW4iLCJJQ09OIiwibWFwIiwiaXRlbSIsImJ5UGFzc0NoaWxkcyIsImZpbHRlckZ1bmMiLCJzdHJGaWx0ZXIiLCJmblJlc2l6ZSIsIkNvbXBvbmVudCIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwibmV3U3RhdGVzIiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJpbml0aWFsaXplZCIsImxheWVyRmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJqUXVlcnkiLCJ2YWwiLCJzZXRTdGF0ZSIsImRpZ0RlZXBlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwidGFncyIsImZpbmQiLCJlbGVtZW50Iiwic3RhdGVzIiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImdldEluaXRpYWxTdGF0ZXMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiY2FsbGJhY2tGdW5jdGlvbiIsIlN0YXJib2FyZFBhbmVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibGFuZ0NvbnN0YW50cyIsInRpdGxlIiwiQ1RSTF9TVEFSQk9BUkQiLCJjbGFzc05hbWUiLCJvcGVuIiwiZXh0ZXJuYWwiLCJhcHBlbmRDaGlsZCIsIm9uIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaG9yaXpvbnRhbFBhbmVsIiwiYWRkQ29udHJvbCIsInNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMiLCJyZXNpemVGdW5jdGlvbiIsImNyZWF0ZVN0eWxpbmdGb3JJY29uIiwiZGlyZWN0aW9uIiwiYWN0aXZlVGFiIiwiaWR4IiwibWFwRGF0YSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJidXR0b25Td2l0Y2hlciIsImJ1dHRvbnMiLCJ0YWJMYXllcnMiLCJyZWd1bGFyQnV0dG9uIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwic2V0QWN0aXZlVGFiIiwicHVzaCIsImluZGV4IiwiaWNvbkNvZGUiLCJhd2Vzb21lSWNvbiIsInRhYnMiLCJ0YWJDYWxsYmFjayIsInRhYlN0YXRlcyIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwibGFiZWwiLCJTVEFSQk9BUkQiLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJzdHlsZSIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsInN0eWxlU2hlZXQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJzZXRPcGVuQ29tcG9uZW50Iiwic2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiQzRnU3RhcmJvYXJkU3R5bGUiLCJzdHlsZVRyaWdnZXJMYWJlbCIsInN0eWxlSWQiLCJsb2NTdHlsZUFyciIsInN0eWxvciIsIkZlYXR1cmUiLCJnZW9tZXRyeSIsIlBvaW50Iiwic3R5bDByIiwic3R5bGVUeXBlIiwic3R5bGV0eXBlIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwic3ZnU3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZUltYWdlIiwiZ2V0SW1hZ2UiLCJnZXRTcmMiLCJjbGlja0V2ZW50IiwidG9vbHRpcCIsIlNUQVJCT0FSRF9MT0NTVFlMRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkUiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1RBUiIsIlNUQVJCT0FSRF9MT0NTVFlMRV9YIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFIiwiY29sb3IiLCJib3JkZXJjb2xvciIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJnZXRDb2xvciIsImZpbGxjb2xvciIsInN0cm9rZWNvbG9yIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5Iiwic3R5bGVFbGVtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSx3Qjs7Ozs7QUFFWCxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWDtBQUVBLFVBQUtDLFVB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dHNfYzRnLXN0YXJib2FyZC1wYW5lbF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgc2hvd0xheWVyKHNob3dFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKHNob3dFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvd0VsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IHNob3dFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIHRydWUpXG4gIH1cblxuICBoaWRlTGF5ZXIoaGlkZUVsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUVsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWRlRWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChoaWRlRWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgZmFsc2UpXG4gIH1cbiAgY2hhbmdlQ2hpbGRTdGF0ZSAoY2hpbGQsIGNoaWxkU3RhdGUsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZHMgJiYgY2hpbGQuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gY2hpbGQuY2hpbGRzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShjaGlsZC5jaGlsZHNbY2hpbGRJZF0sIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKGNoaWxkU3RhdGUuaWQsIGFjdGl2ZSlcbiAgICBjaGlsZFN0YXRlLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgfVxuICBwYXJlbnRDYWxsYmFjayAoa2V5LCBuZXdDaGlsZFN0YXRlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1trZXldID0gbmV3Q2hpbGRTdGF0ZTtcbiAgICBpZiAobmV3U3RhdGUuYWN0aXZlICE9IG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAvLyBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzICYmIHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBsYXllckNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBsYXllckNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXJDaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBuZXdTdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGxheWVyQ2hpbGRzW2NoaWxkSWRdLCBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgbmV3U3RhdGUuYWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllclpvb21UbyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5sYXllckNsaWNrKGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnpvb21Ubyh0aGlzLnByb3BzLmxheWVyKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdID0gc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICB9XG4gIHNwYW5DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID0gIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0eWxlUGljdHVyZSA9IG51bGw7XG4gICAgbGV0IHNwYW5ab29tID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuc2hvd0xvY3N0eWxlcyA9PT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXMgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8pIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IGNsaWNrRXZlbnQ9e3RoaXMubGF5ZXJab29tVG99Lz47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0vPjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8gJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUpIHtcbiAgICAgIHNwYW5ab29tID0gPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1nZW9qc29uLWJ1dHRvblwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfS8+O1xuICAgIH1cbiAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSA/IGNzc0NvbnN0YW50cy5BQ1RJVkUgOiBjc3NDb25zdGFudHMuSU5BQ1RJVkU7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICBjc3NDbGFzcyArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ESVNBQkxFRDtcbiAgICB9XG4gICAgbGV0IG9wZW5DbG9zZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID8gY3NzQ29uc3RhbnRzLkNMT1NFIDogY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgbGV0IG9iakNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgIGxldCBsaW5rVGV4dDtcbiAgICBsZXQgbGlua1N3aXRjaDtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSAmJiB0aGlzLnByb3BzLmxheWVyLmFkZFpvb21Ubykge1xuICAgICAgbGlua1RleHQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxhIHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXRleHRcIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgIGxpbmtTd2l0Y2ggPSA8YSBjbGFzc05hbWU9e2Nzc0NsYXNzICsgXCIgYzRnLXN0YXJib2FyZC1jaGVja2JveC1pY29uXCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT48L2E+XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsaW5rVGV4dCA9IDxhIHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGNsYXNzTmFtZT17Y3NzQ2xhc3N9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT47XG4gICAgfVxuXG4gICAgaWYgKG9iakNoaWxkcyAmJiBvYmpDaGlsZHMubGVuZ3RoKSB7XG4gICAgICBsZXQgc3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG4gICAgICBsZXQgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljaztcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnpvb21Ubykge1xuICAgICAgICBsYXllckNsaWNrID0gdGhpcy5sYXllclpvb21UbztcbiAgICAgICAgY3NzQ2xhc3MgPSBcImM0Zy1nZW9qc29uLWJ1dHRvblwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB0b2dnbGVBbGxMYXllcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1N0YXJib2FyZExheWVyc3dpdGNoZXJ9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlclwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcmJvYXJkUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSQk9BUkQ7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1zdGFyYm9hcmQtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMgPSB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZUZ1bmN0aW9uID0gdGhpcy5yZXNpemVGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbiA9IHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24uYmluZCh0aGlzKTtcbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJyaWdodFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLXN0YXJib2FyZC1wYW5lbFwiLFxuICAgICAgY2hpbGRzOiBwcm9wcy5jaGlsZHMgfHwgW10sXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYWN0aXZlVGFiOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBzZXRBY3RpdmVUYWIoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiBpZHh9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBsZXQgYnV0dG9uU3dpdGNoZXIgPSBcIlwiO1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCByZWd1bGFyQnV0dG9uID0gPGJ1dHRvbiBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVJ9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyXCJ9IG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYigwKX19Lz47XG4gICAgICBidXR0b25zLnB1c2gocmVndWxhckJ1dHRvbik7XG4gICAgICBidXR0b25zLnB1c2godGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGljb25Db2RlID0gZWxlbWVudC5hd2Vzb21lSWNvbjtcbiAgICAgICAgICBzY29wZS5jcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpO1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IHRpdGxlPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYihpbmRleCArIDEpfX0vPjtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBidXR0b25Td2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtc3dpdGNoZXJcIn0+XG4gICAgICAgIHtidXR0b25zfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGxldCB0YWJzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGFicyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e2luZGV4fSBtYXBDb250cm9sbGVyPXtzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3Njb3BlLnByb3BzLnRhYkxheWVyc1tpbmRleF19IHBhcmVudENhbGxiYWNrPXtzY29wZS5wcm9wcy50YWJDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3Njb3BlLnByb3BzLnRhYlN0YXRlc30gb3BlbmZ1bmM9e3Njb3BlLm9wZW59IGhlYWRsaW5lPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Njb3BlLnN0YXRlLm9wZW59IGFjdGl2ZT17KGluZGV4ICsgMSkgPT09IHNjb3BlLnN0YXRlLmFjdGl2ZVRhYn0vPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0hFQURMSU5FfVxuICAgICAgICAgICAgICAgICAgaGVhZGVyPXttYXBEYXRhLnN0YXJib2FyZC5sYWJlbCB8fCB0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEfSBjbG9zZUJ0bkNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NMT1NFfSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfVxuICAgICAgICAgICAgICAgICAgY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAge2J1dHRvblN3aXRjaGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUn0+XG4gICAgICAgICAgPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IG1hcENvbnRyb2xsZXIgPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXt0aGlzLnByb3BzLm9iakxheWVyc30gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gcGFyZW50Q2FsbGJhY2s9e3RoaXMucHJvcHMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzfSBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9IG9wZW5mdW5jPXt0aGlzLm9wZW59IGhlYWRsaW5lPXttYXBEYXRhLmxheWVyc3dpdGNoZXIubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gYWN0aXZlPXtzY29wZS5zdGF0ZS5hY3RpdmVUYWIgPT09IDB9Lz5cbiAgICAgICAgICB7dGFic31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpIHtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgLy8gd2Via2l0IGhhY2s6XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoXCJidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXggKyBcIjpiZWZvcmUge1xcblwiICtcbiAgICAgIFwiICBjb250ZW50OiBcXFwiXFxcXFwiICsgaWNvbkNvZGUgKyBcIlxcXCI7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cIiArXG4gICAgICBcIn1cIilcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSwgKCkgPT4gdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSk7XG4gIH1cblxuICByZXNpemVGdW5jdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgbGV0IHN0eWxlVHJpZ2dlckxhYmVsID0gbnVsbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICBsZXQgc3R5bDByID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWNvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaWNvblNyYztcbiAgICAgICAgICAgIGlmICgoc3R5bGVEYXRhLmljb25fc3JjICYmIHN0eWxlRGF0YS5pY29uX3NyYy5pbmRleE9mKCcuJykgIT09IC0xKSB8fCAoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuc3ZnU3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLmljb25fc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtpY29uU3JjfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19IC8+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsMHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVJbWFnZSA9IHN0eWwwci5nZXRJbWFnZSAmJiB0eXBlb2Ygc3R5bDByLmdldEltYWdlID09PSBcImZ1bmN0aW9uXCIgJiYgc3R5bDByLmdldEltYWdlKCkgPyBzdHlsMHIuZ2V0SW1hZ2UoKTogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVJbWFnZSAmJiBzdHlsZUltYWdlLmdldFNyYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtzdHlsZUltYWdlLmdldFNyYygpfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQgJiYgdGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0aGlzLnByb3BzLnRvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkgeyAvLyAncG9pbnQnLCAnc3F1YXJlJywgJ3N0YXInLCAneCcsICdjcm9zcycsICd0cmlhbmdsZSdcbiAgICAgICAgICAgICAgICBjYXNlIFwicG9pbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNyb3NzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbG9yLCBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGlmIChzdHlsMHIgJiYgc3R5bDByLmdldEZpbGwoKSAmJiBzdHlsMHIuZ2V0U3Ryb2tlKCkpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHN0eWwwci5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHN0eWwwci5nZXRTdHJva2UoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVEYXRhICYmIHN0eWxlRGF0YS5maWxsY29sb3IgJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzBdLCBzdHlsZURhdGEuc3Ryb2tlY29sb3JbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3R5bGVFbGVtZW50cyA9IHtcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWNvbG9yXCIgOiBjb2xvcixcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWJvcmRlcmNvbG9yXCIgOiBib3JkZXJjb2xvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQgJiYgdGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlVHJpZ2dlckxhYmVsO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> Several version preps
