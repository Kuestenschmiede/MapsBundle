"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-starboard-panel_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-starboard-layer-element.jsx":
/*!****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-layer-element.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gStarboardLayerElement = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var olExtent = _interopRequireWildcard(__webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style */ "./src/Resources/public/js/components/c4g-starboard-style.jsx");

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
    key: "layerEnter",
    value: function layerEnter(e) {
      if (e.which === 13) {
        this.layerClick(e);
      }
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

      if (this.props.layer.childs && this.props.layer.childs.length > 0 && !this.props.layer.ignoreChilds) {
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
    key: "layerZoomToEnter",
    value: function layerZoomToEnter(e) {
      if (e.which === 13) {
        this.layerZoomTo(e);
      }
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
        if (this.props.layer.zoomTo) {
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
      } else if (this.props.layer.zoomTo && !this.props.mapController.data.starboard.invertZoomActivate) {
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

      if (this.props.mapController.data.starboard.invertZoomActivate && this.props.layer.zoomTo) {
        linkText = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", (0, _defineProperty2["default"])({
          tabIndex: 1,
          title: this.props.layer.name,
          alt: this.props.lang.STARBOARD_ELEMENT_TRIGGER_1 + this.props.layer.name + this.props.lang.STARBOARD_ELEMENT_TRIGGER_2,
          className: "c4g-starboard-text",
          onKeyPress: function onKeyPress(event) {
            return _this3.layerEnter(event);
          },
          onMouseUp: function onMouseUp(event) {
            return _this3.layerZoomTo(event);
          }
        }, "onKeyPress", function onKeyPress(event) {
          return _this3.layerZoomToEnter(event);
        }), this.props.layer.name));
        linkSwitch = /*#__PURE__*/_react["default"].createElement("a", {
          className: cssClass + " c4g-starboard-checkbox-icon",
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        });
      } else {
        linkText = /*#__PURE__*/_react["default"].createElement("a", {
          tabIndex: 1,
          title: this.props.layer.name,
          alt: this.props.lang.STARBOARD_ELEMENT_TRIGGER_1 + this.props.layer.name + this.props.lang.STARBOARD_ELEMENT_TRIGGER_2,
          className: cssClass,
          onKeyPress: function onKeyPress(event) {
            return _this3.layerEnter(event);
          },
          onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          }
        }, this.props.layer.name);
      }

      if (objChilds && objChilds.length) {
        var span = /*#__PURE__*/_react["default"].createElement("span", {
          alt: this.props.lang.STARBOARD_ELEMENT_CHILDS,
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
        var layerClick = this.layerClick;

        if (this.props.layer.zoomTo) {
          layerClick = this.layerZoomTo;
          cssClass = "c4g-geojson-button";
          linkSwitch = null;
        }

        return /*#__PURE__*/_react["default"].createElement("li", {
          tabIndex: 1,
          className: openClose + " c4g-starboard-list-element"
        }, stylePicture, spanZoom, linkText, linkSwitch);
      }
    }
  }]);
  return C4gStarboardLayerElement;
}(_react.Component);

exports.C4gStarboardLayerElement = C4gStarboardLayerElement;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx":
/*!****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerElement = __webpack_require__(/*! ./c4g-starboard-layer-element */ "./src/Resources/public/js/components/c4g-starboard-layer-element.jsx");

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

/***/ "./src/Resources/public/js/components/c4g-starboard-panel.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-panel.jsx ***!
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

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerswitcher = __webpack_require__(/*! ./c4g-starboard-layerswitcher */ "./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
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

exports["default"] = StarboardPanel;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-starboard-style.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-style.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

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
    key: "enterEvent",
    value: function enterEvent(e) {
      if (e.which === 13) {
        this.props.clickEvent(e);
      }
    }
  }, {
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
            tabIndex: 1,
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: tooltip,
            onKeyPress: function onKeyPress(event) {
              return _this.enterEvent(event);
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBOzs7OztFQUVYLGtDQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFDQSxJQUFNQyxLQUFLLGlEQUFYO0lBRUEsTUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixnREFBbEI7SUFDQSxNQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLGdEQUFuQjtJQUNBLE1BQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRixJQUFmLGdEQUFqQjtJQUNBLE1BQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCSCxJQUF6QixnREFBM0I7SUFDQSxNQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLGdEQUF0QjtJQVJpQjtFQVNsQjs7OztXQUdELHFCQUErQjtNQUFBLElBQXJCSyxZQUFxQix1RUFBTixJQUFNO01BQzdCLElBQU1QLEtBQUssR0FBRyxJQUFkO01BQ0EsSUFBSVEsUUFBUSxHQUFHLEtBQWY7TUFDQSxJQUFJQyxXQUFXLEdBQUcsS0FBbEI7O01BQ0EsSUFBSUYsWUFBSixFQUFrQjtRQUNoQixJQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osWUFBZCxDQUFKLEVBQWlDO1VBQy9CQyxRQUFRLEdBQUdELFlBQVg7UUFDRCxDQUZELE1BRU8sSUFBSUEsWUFBWSxZQUFZSyxhQUE1QixFQUFvQztVQUN6Q0gsV0FBVyxHQUFHRixZQUFkO1FBQ0Q7TUFDRixDQU5ELE1BTU87UUFDTEMsUUFBUSxHQUFHQSxRQUFRLElBQUlSLEtBQUssQ0FBQ0QsS0FBTixDQUFZYyxLQUFaLENBQWtCTCxRQUF6QztRQUNBQyxXQUFXLEdBQUdBLFdBQVcsSUFBSVQsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JKLFdBQS9DO01BQ0Q7O01BQ0RELFFBQVEsR0FBR0EsUUFBUSxJQUFJUixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkwsUUFBekM7TUFDQSxJQUFJTSxlQUFlLEdBQUdkLEtBQUssQ0FBQ0QsS0FBTixDQUFZZ0IsYUFBWixDQUEwQkMsS0FBMUIsQ0FBZ0NGLGVBQXREOztNQUNBLElBQUlOLFFBQVEsSUFBSUEsUUFBUSxDQUFDUyxNQUFULEdBQWtCLENBQWxDLEVBQXFDO1FBQ25DSCxlQUFlLENBQUNJLElBQWhCLENBQXFCbEIsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JNLE1BQXZDLEVBQStDWCxRQUEvQyxFQUF3RFIsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUFwRTtNQUNELENBRkQsTUFFTyxJQUFJWCxXQUFKLEVBQWdCO1FBQ3JCSyxlQUFlLENBQUNJLElBQWhCLENBQXFCbEIsS0FBSyxDQUFDRCxLQUFOLENBQVljLEtBQVosQ0FBa0JNLE1BQXZDLEVBQStDVixXQUEvQyxFQUE0RFQsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUF4RTtNQUNELENBRk0sTUFHRjtRQUNITixlQUFlLENBQUNJLElBQWhCLENBQXFCLEtBQXJCLEVBQTRCLEtBQTVCLEVBQW1DbEIsS0FBSyxDQUFDRCxLQUFOLENBQVlxQixFQUEvQztNQUNEOztNQUNEcEIsS0FBSyxDQUFDRCxLQUFOLENBQVlnQixhQUFaLENBQTBCTSxtQkFBMUIsQ0FBOENyQixLQUFLLENBQUNELEtBQU4sQ0FBWXFCLEVBQTFELEVBQThELElBQTlEO0lBQ0Q7OztXQUVELHFCQUErQjtNQUFBLElBQXJCRSxZQUFxQix1RUFBTixJQUFNO01BQzdCLElBQU10QixLQUFLLEdBQUcsSUFBZDtNQUNBLElBQUlRLFFBQVEsR0FBRyxLQUFmO01BQ0EsSUFBSUMsV0FBVyxHQUFHLEtBQWxCOztNQUNBLElBQUlhLFlBQUosRUFBa0I7UUFDaEIsSUFBSVosS0FBSyxDQUFDQyxPQUFOLENBQWNXLFlBQWQsQ0FBSixFQUFpQztVQUMvQmQsUUFBUSxHQUFHYyxZQUFYO1FBQ0QsQ0FGRCxNQUVPLElBQUlBLFlBQVksWUFBWVYsYUFBNUIsRUFBb0M7VUFDekNILFdBQVcsR0FBR2EsWUFBZDtRQUNEO01BQ0YsQ0FORCxNQU1PO1FBQ0xkLFFBQVEsR0FBR0EsUUFBUSxJQUFJUixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkwsUUFBekM7UUFDQUMsV0FBVyxHQUFHQSxXQUFXLElBQUlULEtBQUssQ0FBQ0QsS0FBTixDQUFZYyxLQUFaLENBQWtCSixXQUEvQztNQUNEOztNQUNELElBQUlLLGVBQWUsR0FBR2QsS0FBSyxDQUFDRCxLQUFOLENBQVlnQixhQUFaLENBQTBCQyxLQUExQixDQUFnQ0YsZUFBdEQ7O01BQ0EsSUFBSU4sUUFBUSxJQUFJQSxRQUFRLENBQUNTLE1BQVQsR0FBa0IsQ0FBbEMsRUFBcUM7UUFDbkNILGVBQWUsQ0FBQ1MsSUFBaEIsQ0FBcUJ2QixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQk0sTUFBdkMsRUFBK0NYLFFBQS9DLEVBQXlEUixLQUFLLENBQUNELEtBQU4sQ0FBWXFCLEVBQXJFO01BQ0QsQ0FGRCxNQUVPLElBQUlYLFdBQUosRUFBaUI7UUFDdEJLLGVBQWUsQ0FBQ1MsSUFBaEIsQ0FBcUJ2QixLQUFLLENBQUNELEtBQU4sQ0FBWWMsS0FBWixDQUFrQk0sTUFBdkMsRUFBK0NWLFdBQS9DLEVBQTREVCxLQUFLLENBQUNELEtBQU4sQ0FBWXFCLEVBQXhFO01BQ0QsQ0FGTSxNQUdGO1FBQ0hOLGVBQWUsQ0FBQ1MsSUFBaEIsQ0FBcUIsS0FBckIsRUFBNEIsS0FBNUIsRUFBbUN2QixLQUFLLENBQUNELEtBQU4sQ0FBWXFCLEVBQS9DO01BQ0Q7O01BQ0RwQixLQUFLLENBQUNELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJNLG1CQUExQixDQUE4Q3JCLEtBQUssQ0FBQ0QsS0FBTixDQUFZcUIsRUFBMUQsRUFBOEQsS0FBOUQ7SUFDRDs7O1dBQ0QsMEJBQWtCSSxLQUFsQixFQUF5QkMsVUFBekIsRUFBcUNDLE1BQXJDLEVBQTZDO01BQzNDLElBQUlBLE1BQUosRUFBWTtRQUNWLEtBQUtDLFNBQUwsQ0FBZUgsS0FBSyxDQUFDaEIsUUFBTixJQUFrQmdCLEtBQUssQ0FBQ2YsV0FBdkM7TUFDRCxDQUZELE1BR0s7UUFDSCxLQUFLbUIsU0FBTCxDQUFlSixLQUFLLENBQUNoQixRQUFOLElBQWtCZ0IsS0FBSyxDQUFDZixXQUF2QztNQUNEOztNQUNELElBQUllLEtBQUssQ0FBQ0ssTUFBTixJQUFnQkwsS0FBSyxDQUFDSyxNQUFOLENBQWFaLE1BQWIsR0FBc0IsQ0FBMUMsRUFBNkM7UUFDM0MsS0FBSyxJQUFJYSxPQUFULElBQW9CTixLQUFLLENBQUNLLE1BQTFCLEVBQWtDO1VBQ2hDLElBQUlMLEtBQUssQ0FBQ0ssTUFBTixDQUFhRSxjQUFiLENBQTRCRCxPQUE1QixDQUFKLEVBQTBDO1lBQ3hDLElBQUlFLGlCQUFpQixHQUFHUCxVQUFVLENBQUNRLFdBQVgsQ0FBdUJILE9BQXZCLEVBQWdDSixNQUF4RDs7WUFDQSxJQUFJTSxpQkFBaUIsS0FBS04sTUFBMUIsRUFBa0M7Y0FDaENELFVBQVUsQ0FBQ1EsV0FBWCxDQUF1QkgsT0FBdkIsSUFBa0MsS0FBS0ksZ0JBQUwsQ0FBc0JWLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxPQUFiLENBQXRCLEVBQTZDTCxVQUFVLENBQUNRLFdBQVgsQ0FBdUJILE9BQXZCLENBQTdDLEVBQThFSixNQUE5RSxDQUFsQztZQUNEO1VBQ0Y7UUFDRjtNQUNGOztNQUNELEtBQUszQixLQUFMLENBQVdnQixhQUFYLENBQXlCTSxtQkFBekIsQ0FBNkNJLFVBQVUsQ0FBQ0wsRUFBeEQsRUFBNERNLE1BQTVEO01BQ0FELFVBQVUsQ0FBQ0MsTUFBWCxHQUFvQkEsTUFBcEI7TUFDQSxPQUFPRCxVQUFQO0lBQ0Q7OztXQUNELHdCQUFnQlUsR0FBaEIsRUFBcUJDLGFBQXJCLEVBQW9DO01BQ2xDLElBQUlDLFFBQVEsR0FBRyxLQUFLdEMsS0FBTCxDQUFXdUMsV0FBMUI7TUFDQUQsUUFBUSxDQUFDSixXQUFULENBQXFCRSxHQUFyQixJQUE0QkMsYUFBNUI7O01BQ0EsSUFBSUMsUUFBUSxDQUFDWCxNQUFULElBQW1CVSxhQUFhLENBQUNWLE1BQXJDLEVBQTZDO1FBQzNDO1FBQ0EsSUFBSVUsYUFBYSxDQUFDVixNQUFsQixFQUEwQjtVQUN4QixLQUFLQyxTQUFMO1FBQ0QsQ0FGRCxNQUdLO1VBQ0gsS0FBS0MsU0FBTDtRQUNEO01BQ0Y7O01BQ0QsS0FBSzdCLEtBQUwsQ0FBV08sY0FBWCxDQUEwQixLQUFLUCxLQUFMLENBQVd3QyxLQUFyQyxFQUE0Q0YsUUFBNUM7SUFDRDs7O1dBQ0Qsb0JBQVdHLENBQVgsRUFBYztNQUNaLElBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZLEVBQWhCLEVBQW9CO1FBQ2xCLEtBQUt4QyxVQUFMLENBQWdCdUMsQ0FBaEI7TUFDRDtJQUNGOzs7V0FDRCxvQkFBV0EsQ0FBWCxFQUFjO01BQ1pBLENBQUMsQ0FBQ0UsZUFBRjtNQUNBRixDQUFDLENBQUNHLFdBQUYsQ0FBY0Msd0JBQWQ7O01BQ0EsSUFBSSxLQUFLN0MsS0FBTCxDQUFXdUMsV0FBWCxDQUF1Qk8sTUFBM0IsRUFBbUM7UUFDakMsT0FBTyxLQUFQO01BQ0Q7O01BQ0QsSUFBSSxDQUFDLEtBQUs5QyxLQUFMLENBQVd1QyxXQUFYLENBQXVCWixNQUE1QixFQUFvQztRQUNsQyxLQUFLQyxTQUFMO01BQ0QsQ0FGRCxNQUdLO1FBQ0gsS0FBS0MsU0FBTDtNQUNEOztNQUNELElBQUlTLFFBQVEsR0FBRyxLQUFLdEMsS0FBTCxDQUFXdUMsV0FBMUI7O01BQ0EsSUFBSSxLQUFLdkMsS0FBTCxDQUFXYyxLQUFYLENBQWlCZ0IsTUFBakIsSUFBMkIsS0FBSzlCLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmdCLE1BQWpCLENBQXdCWixNQUF4QixHQUFpQyxDQUE1RCxJQUFpRSxDQUFDLEtBQUtsQixLQUFMLENBQVdjLEtBQVgsQ0FBaUJpQyxZQUF2RixFQUFxRztRQUNuRyxJQUFJQyxXQUFXLEdBQUcsS0FBS2hELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQmdCLE1BQW5DOztRQUNBLEtBQUssSUFBSUMsT0FBVCxJQUFvQmlCLFdBQXBCLEVBQWlDO1VBQy9CLElBQUlBLFdBQVcsQ0FBQ2hCLGNBQVosQ0FBMkJELE9BQTNCLENBQUosRUFBeUM7WUFDdkMsSUFBSUUsaUJBQWlCLEdBQUdLLFFBQVEsQ0FBQ0osV0FBVCxDQUFxQkgsT0FBckIsRUFBOEJKLE1BQXREOztZQUNBLElBQUlNLGlCQUFpQixLQUFLSyxRQUFRLENBQUNYLE1BQW5DLEVBQTJDO2NBQ3pDVyxRQUFRLENBQUNKLFdBQVQsQ0FBcUJILE9BQXJCLElBQWdDLEtBQUtJLGdCQUFMLENBQXNCYSxXQUFXLENBQUNqQixPQUFELENBQWpDLEVBQTRDTyxRQUFRLENBQUNKLFdBQVQsQ0FBcUJILE9BQXJCLENBQTVDLEVBQTJFTyxRQUFRLENBQUNYLE1BQXBGLENBQWhDO1lBQ0Q7VUFDRjtRQUNGO01BQ0YsQ0F2QlcsQ0F3Qlo7O0lBQ0Q7OztXQUNELHFCQUFZYyxDQUFaLEVBQWU7TUFBQTs7TUFDYixJQUFJLENBQUMsS0FBS3pDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJaLE1BQTVCLEVBQW9DO1FBQ2xDLEtBQUt6QixVQUFMLENBQWdCdUMsQ0FBaEI7TUFDRDs7TUFDRCxLQUFLekMsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QkMsS0FBekIsQ0FBK0JGLGVBQS9CLENBQStDa0MsTUFBL0MsQ0FBc0QsS0FBS2pELEtBQUwsQ0FBV2MsS0FBakU7TUFDQSxLQUFLZCxLQUFMLENBQVdnQixhQUFYLENBQXlCQyxLQUF6QixDQUErQkYsZUFBL0IsQ0FBK0NtQyxtQkFBL0MsQ0FBbUUsS0FBS2xELEtBQUwsQ0FBV2MsS0FBOUUsRUFBcUYsY0FBckYsRUFBcUcsSUFBckc7TUFDQXFDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO1FBQ3RCLE1BQUksQ0FBQ3BELEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJDLEtBQXpCLENBQStCRixlQUEvQixDQUErQ21DLG1CQUEvQyxDQUFtRSxNQUFJLENBQUNsRCxLQUFMLENBQVdjLEtBQTlFLEVBQXFGLGNBQXJGLEVBQXFHLEtBQXJHO01BQ0QsQ0FGRCxFQUVHLElBRkg7SUFHRDs7O1dBQ0QsMEJBQWlCMkIsQ0FBakIsRUFBb0I7TUFDbEIsSUFBSUEsQ0FBQyxDQUFDQyxLQUFGLEtBQVksRUFBaEIsRUFBb0I7UUFDbEIsS0FBS3RDLFdBQUwsQ0FBaUJxQyxDQUFqQjtNQUNEO0lBQ0Y7OztXQUNELDZCQUFvQnBCLEVBQXBCLEVBQXdCZ0MsS0FBeEIsRUFBK0I7TUFDN0IsS0FBS3JELEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJMLFdBQXZCLENBQW1DYixFQUFuQyxJQUF5Q2dDLEtBQXpDO01BQ0EsS0FBS3JELEtBQUwsQ0FBV00sbUJBQVgsQ0FBK0IsS0FBS04sS0FBTCxDQUFXd0MsS0FBMUMsRUFBaUQsS0FBS3hDLEtBQUwsQ0FBV3VDLFdBQTVEO0lBQ0Q7OztXQUNELG1CQUFVRSxDQUFWLEVBQWE7TUFDWEEsQ0FBQyxDQUFDRSxlQUFGO01BQ0FGLENBQUMsQ0FBQ0csV0FBRixDQUFjQyx3QkFBZDtNQUNBLEtBQUs3QyxLQUFMLENBQVd1QyxXQUFYLENBQXVCZSxTQUF2QixHQUFtQyxDQUFDLEtBQUt0RCxLQUFMLENBQVd1QyxXQUFYLENBQXVCZSxTQUEzRDtNQUNBLEtBQUt0RCxLQUFMLENBQVdNLG1CQUFYLENBQStCLEtBQUtOLEtBQUwsQ0FBV3dDLEtBQTFDLEVBQWlELEtBQUt4QyxLQUFMLENBQVd1QyxXQUE1RDtJQUNEOzs7V0FDRCxrQkFBUztNQUFBOztNQUNQLElBQU10QyxLQUFLLEdBQUcsSUFBZDtNQUNBLElBQUlzRCxZQUFZLEdBQUcsSUFBbkI7TUFDQSxJQUFJQyxRQUFRLEdBQUcsSUFBZjs7TUFFQSxJQUFJLEtBQUt4RCxLQUFMLENBQVdnQixhQUFYLENBQXlCeUMsSUFBekIsQ0FBOEJDLFNBQTlCLENBQXdDQyxhQUF4QyxLQUEwRCxHQUExRCxJQUFpRSxLQUFLM0QsS0FBTCxDQUFXYyxLQUFYLENBQWlCOEMsUUFBbEYsSUFBOEYsS0FBSzVELEtBQUwsQ0FBVzZELFNBQXpHLElBQXNILEtBQUs3RCxLQUFMLENBQVc2RCxTQUFYLENBQXFCQyxZQUEzSSxJQUEySixLQUFLOUQsS0FBTCxDQUFXNkQsU0FBWCxDQUFxQkMsWUFBckIsQ0FBa0MsS0FBSzlELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQjhDLFFBQW5ELENBQS9KLEVBQTZOO1FBQzNOLElBQUksS0FBSzVELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQm1DLE1BQXJCLEVBQTZCO1VBQzNCTSxZQUFZLGdCQUFHLGdDQUFDLG9DQUFEO1lBQW1CLFNBQVMsRUFBRSxLQUFLdkQsS0FBTCxDQUFXNkQsU0FBekM7WUFBb0QsT0FBTyxFQUFFLEtBQUs3RCxLQUFMLENBQVdjLEtBQVgsQ0FBaUI4QyxRQUE5RTtZQUF3RixPQUFPLEVBQUUsS0FBSzVELEtBQUwsQ0FBVytELElBQVgsQ0FBZ0JDLDZCQUFoQixHQUE4QyxLQUFLaEUsS0FBTCxDQUFXYyxLQUFYLENBQWlCbUQsSUFBL0QsR0FBb0UsS0FBS2pFLEtBQUwsQ0FBVytELElBQVgsQ0FBZ0JHLDRCQUFyTDtZQUFtTixVQUFVLEVBQUUsS0FBSzlEO1VBQXBPLEVBQWY7UUFDRCxDQUZELE1BR0s7VUFDSG1ELFlBQVksZ0JBQUcsZ0NBQUMsb0NBQUQ7WUFBbUIsU0FBUyxFQUFFLEtBQUt2RCxLQUFMLENBQVc2RCxTQUF6QztZQUFvRCxPQUFPLEVBQUUsS0FBSzdELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQjhDLFFBQTlFO1lBQXdGLE9BQU8sRUFBRSxLQUFLNUQsS0FBTCxDQUFXYyxLQUFYLENBQWlCbUQ7VUFBbEgsRUFBZjtRQUNEO01BQ0YsQ0FQRCxNQVFLLElBQUksS0FBS2pFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQm1DLE1BQWpCLElBQTJCLENBQUMsS0FBS2pELEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ5QyxJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NTLGtCQUF4RSxFQUE0RjtRQUMvRlgsUUFBUSxnQkFBRztVQUFNLFNBQVMsRUFBRSxvQkFBakI7VUFBdUMsS0FBSyxFQUFFLEtBQUt4RCxLQUFMLENBQVcrRCxJQUFYLENBQWdCQyw2QkFBaEIsR0FBOEMsS0FBS2hFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQm1ELElBQS9ELEdBQW9FLEtBQUtqRSxLQUFMLENBQVcrRCxJQUFYLENBQWdCRyw0QkFBbEk7VUFBZ0ssU0FBUyxFQUFFLG1CQUFDRSxLQUFEO1lBQUEsT0FBVyxNQUFJLENBQUNoRSxXQUFMLENBQWlCZ0UsS0FBakIsQ0FBWDtVQUFBO1FBQTNLLEVBQVg7TUFDRDs7TUFDRCxJQUFJQyxRQUFRLEdBQUcsS0FBS3JFLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJaLE1BQXZCLEdBQWdDMkMsNkJBQUEsQ0FBYUMsTUFBN0MsR0FBc0RELDZCQUFBLENBQWFFLFFBQWxGOztNQUNBLElBQUksS0FBS3hFLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJPLE1BQTNCLEVBQW1DO1FBQ2pDdUIsUUFBUSxJQUFJLE1BQU1DLDZCQUFBLENBQWFHLFFBQS9CO01BQ0Q7O01BQ0QsSUFBSUMsU0FBUyxHQUFHLEtBQUsxRSxLQUFMLENBQVd1QyxXQUFYLENBQXVCZSxTQUF2QixHQUFtQ2dCLDZCQUFBLENBQWFLLEtBQWhELEdBQXdETCw2QkFBQSxDQUFhTSxJQUFyRjtNQUNBLElBQUlDLFNBQVMsR0FBRyxLQUFLN0UsS0FBTCxDQUFXYyxLQUFYLENBQWlCZ0IsTUFBakM7TUFDQSxJQUFJZ0QsUUFBSjtNQUNBLElBQUlDLFVBQUo7O01BQ0EsSUFBSSxLQUFLL0UsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QnlDLElBQXpCLENBQThCQyxTQUE5QixDQUF3Q1Msa0JBQXhDLElBQThELEtBQUtuRSxLQUFMLENBQVdjLEtBQVgsQ0FBaUJtQyxNQUFuRixFQUEyRjtRQUN6RjZCLFFBQVEsZ0JBQUcsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLHFCQUNUO1VBQUcsUUFBUSxFQUFFLENBQWI7VUFBZ0IsS0FBSyxFQUFFLEtBQUs5RSxLQUFMLENBQVdjLEtBQVgsQ0FBaUJtRCxJQUF4QztVQUE4QyxHQUFHLEVBQUUsS0FBS2pFLEtBQUwsQ0FBVytELElBQVgsQ0FBZ0JpQiwyQkFBaEIsR0FBNEMsS0FBS2hGLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQm1ELElBQTdELEdBQWtFLEtBQUtqRSxLQUFMLENBQVcrRCxJQUFYLENBQWdCa0IsMkJBQXJJO1VBQWtLLFNBQVMsRUFBRSxvQkFBN0s7VUFBbU0sVUFBVSxFQUFFLG9CQUFDYixLQUFEO1lBQUEsT0FBVyxNQUFJLENBQUNjLFVBQUwsQ0FBZ0JkLEtBQWhCLENBQVg7VUFBQSxDQUEvTTtVQUFrUCxTQUFTLEVBQUUsbUJBQUNBLEtBQUQ7WUFBQSxPQUFXLE1BQUksQ0FBQ2hFLFdBQUwsQ0FBaUJnRSxLQUFqQixDQUFYO1VBQUE7UUFBN1AsaUJBQTZTLG9CQUFDQSxLQUFEO1VBQUEsT0FBVyxNQUFJLENBQUNlLGdCQUFMLENBQXNCZixLQUF0QixDQUFYO1FBQUEsQ0FBN1MsR0FBdVYsS0FBS3BFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQm1ELElBQXhXLENBRFMsQ0FBWDtRQUlBYyxVQUFVLGdCQUFHO1VBQUcsU0FBUyxFQUFFVixRQUFRLEdBQUcsOEJBQXpCO1VBQXlELFNBQVMsRUFBRSxtQkFBQ0QsS0FBRDtZQUFBLE9BQVcsTUFBSSxDQUFDbEUsVUFBTCxDQUFnQmtFLEtBQWhCLENBQVg7VUFBQTtRQUFwRSxFQUFiO01BQ0MsQ0FOSCxNQU9LO1FBQ0hVLFFBQVEsZ0JBQUc7VUFBRyxRQUFRLEVBQUUsQ0FBYjtVQUFnQixLQUFLLEVBQUUsS0FBSzlFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQm1ELElBQXhDO1VBQThDLEdBQUcsRUFBRSxLQUFLakUsS0FBTCxDQUFXK0QsSUFBWCxDQUFnQmlCLDJCQUFoQixHQUE0QyxLQUFLaEYsS0FBTCxDQUFXYyxLQUFYLENBQWlCbUQsSUFBN0QsR0FBa0UsS0FBS2pFLEtBQUwsQ0FBVytELElBQVgsQ0FBZ0JrQiwyQkFBckk7VUFBa0ssU0FBUyxFQUFFWixRQUE3SztVQUF1TCxVQUFVLEVBQUUsb0JBQUNELEtBQUQ7WUFBQSxPQUFXLE1BQUksQ0FBQ2MsVUFBTCxDQUFnQmQsS0FBaEIsQ0FBWDtVQUFBLENBQW5NO1VBQXNPLFNBQVMsRUFBRSxtQkFBQ0EsS0FBRDtZQUFBLE9BQVcsTUFBSSxDQUFDbEUsVUFBTCxDQUFnQmtFLEtBQWhCLENBQVg7VUFBQTtRQUFqUCxHQUFxUixLQUFLcEUsS0FBTCxDQUFXYyxLQUFYLENBQWlCbUQsSUFBdFMsQ0FBWDtNQUNEOztNQUVELElBQUlZLFNBQVMsSUFBSUEsU0FBUyxDQUFDM0QsTUFBM0IsRUFBbUM7UUFDakMsSUFBSWtFLElBQUksZ0JBQUc7VUFBTSxHQUFHLEVBQUUsS0FBS3BGLEtBQUwsQ0FBVytELElBQVgsQ0FBZ0JzQix3QkFBM0I7VUFBcUQsU0FBUyxFQUFFZiw2QkFBQSxDQUFhZ0IsSUFBN0U7VUFBbUYsU0FBUyxFQUFFLG1CQUFDbEIsS0FBRDtZQUFBLE9BQVcsTUFBSSxDQUFDL0QsU0FBTCxDQUFlK0QsS0FBZixDQUFYO1VBQUE7UUFBOUYsRUFBWDs7UUFFQSxvQkFDRTtVQUFJLFNBQVMsRUFBRU0sU0FBUyxHQUFHO1FBQTNCLEdBQ0dVLElBREgsRUFFRzdCLFlBRkgsRUFHR0MsUUFISCxFQUlHc0IsUUFKSCxFQUtHQyxVQUxILGVBTUUsNENBQ0dGLFNBQVMsQ0FBQ1UsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT25FLEVBQVAsRUFBYztVQUMzQixJQUFJLE1BQUksQ0FBQ3JCLEtBQUwsQ0FBV3lGLFlBQVgsSUFBMkIsTUFBSSxDQUFDekYsS0FBTCxDQUFXMEYsVUFBWCxDQUFzQixNQUFJLENBQUMxRixLQUFMLENBQVcyRixTQUFqQyxFQUE0Q0gsSUFBNUMsRUFBa0QsTUFBSSxDQUFDeEYsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QkwsV0FBdkIsQ0FBbUNiLEVBQW5DLENBQWxELENBQS9CLEVBQTBIO1lBQ3hILG9CQUFPLGdDQUFDLHdCQUFEO2NBQTBCLEdBQUcsRUFBRUEsRUFBL0I7Y0FBbUMsS0FBSyxFQUFFQSxFQUExQztjQUE4QyxFQUFFLEVBQUVtRSxJQUFJLENBQUNuRSxFQUF2RDtjQUEyRCxhQUFhLEVBQUUsTUFBSSxDQUFDckIsS0FBTCxDQUFXZ0IsYUFBckY7Y0FDbUIsY0FBYyxFQUFFLE1BQUksQ0FBQ1QsY0FEeEM7Y0FFbUIsU0FBUyxFQUFFLE1BQUksQ0FBQ1AsS0FBTCxDQUFXMkYsU0FGekM7Y0FHbUIsVUFBVSxFQUFFLE1BQUksQ0FBQzNGLEtBQUwsQ0FBVzBGLFVBSDFDO2NBSW1CLG1CQUFtQixFQUFFLE1BQUksQ0FBQ3BGLG1CQUo3QztjQUttQixJQUFJLEVBQUUsTUFBSSxDQUFDTixLQUFMLENBQVcrRCxJQUxwQztjQU1tQixZQUFZLEVBQUUsTUFBSSxDQUFDL0QsS0FBTCxDQUFXeUYsWUFBWCxJQUEyQixNQUFJLENBQUN6RixLQUFMLENBQVcwRixVQUFYLENBQXNCLE1BQUksQ0FBQzFGLEtBQUwsQ0FBVzJGLFNBQWpDLEVBQTRDSCxJQUE1QyxFQUFrRCxLQUFsRCxFQUF5RCxLQUF6RCxDQU41RDtjQU9tQixXQUFXLEVBQUUsTUFBSSxDQUFDeEYsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QkwsV0FBdkIsQ0FBbUNiLEVBQW5DLENBUGhDO2NBUW1CLEtBQUssRUFBRW1FLElBUjFCO2NBU21CLFNBQVMsRUFBRSxNQUFJLENBQUN4RixLQUFMLENBQVc2RCxTQVR6QztjQVVtQixRQUFRLEVBQUUsTUFBSSxDQUFDN0QsS0FBTCxDQUFXNEY7WUFWeEMsRUFBUDtVQVdEO1FBRUYsQ0FmQSxDQURILENBTkYsQ0FERjtNQTJCRCxDQTlCRCxNQStCSztRQUNILElBQUkxRixVQUFVLEdBQUcsS0FBS0EsVUFBdEI7O1FBQ0EsSUFBSSxLQUFLRixLQUFMLENBQVdjLEtBQVgsQ0FBaUJtQyxNQUFyQixFQUE2QjtVQUMzQi9DLFVBQVUsR0FBRyxLQUFLRSxXQUFsQjtVQUNBaUUsUUFBUSxHQUFHLG9CQUFYO1VBQ0FVLFVBQVUsR0FBRyxJQUFiO1FBQ0Q7O1FBQ0Qsb0JBQ0k7VUFBSSxRQUFRLEVBQUUsQ0FBZDtVQUFpQixTQUFTLEVBQUVMLFNBQVMsR0FBRztRQUF4QyxHQUNHbkIsWUFESCxFQUVHQyxRQUZILEVBR0dzQixRQUhILEVBSUdDLFVBSkgsQ0FESjtNQVFEO0lBQ0Y7OztFQS9PMkNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjlDOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFDOzs7OztFQUVYLGdDQUFZOUYsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBRGlCLHFHQWNBLFlBQU07TUFDdkIsTUFBSytGLGlCQUFMLEdBQXlCLENBQXpCO01BQ0EsTUFBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7O01BQ0EsS0FBSyxJQUFJQyxDQUFULElBQWMsTUFBS2pHLEtBQUwsQ0FBV3VDLFdBQXpCLEVBQXNDO1FBQ3BDLElBQUksTUFBS3ZDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJQLGNBQXZCLENBQXNDaUUsQ0FBdEMsQ0FBSixFQUE4QztVQUM1QyxJQUFJLE1BQUtqRyxLQUFMLENBQVd1QyxXQUFYLENBQXVCMEQsQ0FBdkIsRUFBMEJ0RSxNQUE5QixFQUFzQztZQUNwQyxNQUFLcUUsZ0JBQUw7VUFDRCxDQUZELE1BR0s7WUFDSCxNQUFLRCxpQkFBTDtVQUNEOztVQUNELElBQUksTUFBSy9GLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUIwRCxDQUF2QixFQUEwQi9ELFdBQTlCLEVBQTJDO1lBQ3pDLEtBQUssSUFBSWdFLENBQVQsSUFBYyxNQUFLbEcsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QjBELENBQXZCLEVBQTBCL0QsV0FBeEMsRUFBcUQ7Y0FDbkQsSUFBSSxNQUFLbEMsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QjBELENBQXZCLEVBQTBCL0QsV0FBMUIsQ0FBc0NGLGNBQXRDLENBQXFEa0UsQ0FBckQsQ0FBSixFQUE2RDtnQkFDM0QsTUFBS0Msb0JBQUwsQ0FBMEIsTUFBS25HLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUIwRCxDQUF2QixFQUEwQi9ELFdBQTFCLENBQXNDZ0UsQ0FBdEMsQ0FBMUI7Y0FDRDtZQUNGO1VBQ0Y7UUFDRjtNQUNGOztNQUNELE9BQU8sTUFBS0YsZ0JBQUwsR0FBd0IsTUFBS0QsaUJBQXBDO0lBQ0QsQ0FuQ2tCO0lBQUEscUdBb0RBLFVBQUMzRCxHQUFELEVBQU1FLFFBQU4sRUFBbUI7TUFDcEMsSUFBSThELFNBQVMsR0FBRyxNQUFLcEcsS0FBTCxDQUFXdUMsV0FBM0I7TUFDQTZELFNBQVMsQ0FBQ2hFLEdBQUQsQ0FBVCxHQUFpQkUsUUFBakI7O01BQ0EsTUFBS3RDLEtBQUwsQ0FBV08sY0FBWCxDQUEwQjZGLFNBQTFCO0lBQ0QsQ0F4RGtCO0lBRWpCLElBQU1uRyxLQUFLLGlEQUFYO0lBRUEsTUFBS29HLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQmxHLElBQXBCLGdEQUF0QjtJQUNBLE1BQUttRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJuRyxJQUFyQixnREFBdkI7SUFDQSxNQUFLRyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkgsSUFBekIsZ0RBQTNCO0lBQ0EsTUFBS2tELEtBQUwsR0FBYTtNQUNYa0QsV0FBVyxFQUFFLEtBREY7TUFFWEMsV0FBVyxFQUFFO0lBRkYsQ0FBYixDQVBpQixDQVdqQjs7SUFYaUI7RUFZbEI7Ozs7V0F3QkQsOEJBQXNCL0UsS0FBdEIsRUFBNkI7TUFDM0IsSUFBSUEsS0FBSyxDQUFDRSxNQUFWLEVBQWtCO1FBQ2hCLEtBQUtxRSxnQkFBTDtNQUNELENBRkQsTUFHSztRQUNILEtBQUtELGlCQUFMO01BQ0Q7O01BQ0QsSUFBSXRFLEtBQUssQ0FBQ1MsV0FBVixFQUF1QjtRQUNyQixLQUFLLElBQUkrRCxDQUFULElBQWN4RSxLQUFLLENBQUNTLFdBQXBCLEVBQWlDO1VBQy9CLElBQUlULEtBQUssQ0FBQ1MsV0FBTixDQUFrQkYsY0FBbEIsQ0FBaUNpRSxDQUFqQyxDQUFKLEVBQXlDO1lBQ3ZDLEtBQUtFLG9CQUFMLENBQTBCMUUsS0FBSyxDQUFDUyxXQUFOLENBQWtCK0QsQ0FBbEIsQ0FBMUI7VUFDRDtRQUNGO01BQ0Y7SUFDRjs7O1dBUUQsMEJBQWlCO01BQ2YsSUFBSVEsV0FBVyxHQUFHQyxNQUFNLENBQUMsdUNBQUQsQ0FBTixDQUFnREMsR0FBaEQsTUFBeUQsRUFBM0UsQ0FEZSxDQUNnRTs7TUFDL0UsS0FBS0MsUUFBTCxDQUFjO1FBQUNKLFdBQVcsRUFBRUM7TUFBZCxDQUFkO0lBQ0Q7OztXQUVELG9CQUFXZCxTQUFYLEVBQXNCN0UsS0FBdEIsRUFBMkQ7TUFBQSxJQUE5QnVDLEtBQThCLHVFQUF0QixFQUFzQjtNQUFBLElBQWxCd0QsU0FBa0IsdUVBQU4sSUFBTTtNQUN6RCxJQUFJMUYsSUFBSSxHQUFHLEtBQVg7O01BQ0EsSUFBSUwsS0FBSyxJQUFJQSxLQUFLLENBQUNtRCxJQUFmLEtBQXdCbkQsS0FBSyxDQUFDbUQsSUFBTixDQUFXNkMsV0FBWCxHQUF5QkMsT0FBekIsQ0FBaUNwQixTQUFTLENBQUNtQixXQUFWLEVBQWpDLE1BQThELENBQUMsQ0FBL0QsSUFDckJoRyxLQUFLLENBQUNtRCxJQUFOLENBQVcrQyxXQUFYLEdBQXlCRCxPQUF6QixDQUFpQ3BCLFNBQVMsQ0FBQ3FCLFdBQVYsRUFBakMsTUFBOEQsQ0FBQyxDQURsRSxDQUFKLEVBQzBFO1FBQ3hFN0YsSUFBSSxHQUFHLElBQVA7O1FBQ0EsSUFBSXdFLFNBQVMsSUFBSXRDLEtBQWpCLEVBQXdCO1VBQ3RCQSxLQUFLLENBQUNDLFNBQU4sR0FBa0IsS0FBbEI7UUFDRDtNQUNGLENBTkQsTUFNTyxJQUFHeEMsS0FBSyxDQUFDbUcsSUFBTixJQUFjbkcsS0FBSyxDQUFDbUcsSUFBTixDQUFXQyxJQUFYLENBQWdCLFVBQUNDLE9BQUQsRUFBYTtRQUFDLE9BQU9BLE9BQU8sQ0FBQ0wsV0FBUixHQUFzQkMsT0FBdEIsQ0FBOEJwQixTQUFTLENBQUNtQixXQUFWLEVBQTlCLE1BQTJELENBQUMsQ0FBbkU7TUFBcUUsQ0FBbkcsQ0FBakIsRUFBc0g7UUFDM0gzRixJQUFJLEdBQUcsSUFBUDs7UUFDQSxJQUFJd0UsU0FBUyxJQUFJdEMsS0FBakIsRUFBd0I7VUFDdEJBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixLQUFsQjtRQUNEO01BQ0YsQ0FMTSxNQUtBLElBQUl1RCxTQUFKLEVBQWU7UUFDcEIsS0FBSyxJQUFJOUUsT0FBVCxJQUFvQmpCLEtBQUssQ0FBQ2dCLE1BQTFCLEVBQWtDO1VBQ2hDLElBQUloQixLQUFLLENBQUNnQixNQUFOLENBQWFFLGNBQWIsQ0FBNEJELE9BQTVCLEtBQXdDLENBQUNaLElBQTdDLEVBQW1EO1lBQ2pEQSxJQUFJLEdBQUcsS0FBS3VFLFVBQUwsQ0FBZ0JDLFNBQWhCLEVBQTJCN0UsS0FBSyxDQUFDZ0IsTUFBTixDQUFhQyxPQUFiLENBQTNCLEVBQWtEc0IsS0FBSyxDQUFDbkIsV0FBTixDQUFrQkgsT0FBbEIsQ0FBbEQsQ0FBUDs7WUFDQSxJQUFJNEQsU0FBUyxJQUFJeEUsSUFBYixJQUFxQmtDLEtBQXpCLEVBQWdDO2NBQzlCQSxLQUFLLENBQUNDLFNBQU4sR0FBa0IsS0FBbEI7WUFDRDtVQUNGO1FBQ0Y7TUFDRjs7TUFDRCxPQUFPbkMsSUFBUDtJQUNEOzs7V0FFRCwyQkFBa0I7TUFDaEIsSUFBTWxCLEtBQUssR0FBRyxJQUFkO01BQ0EsSUFBSW1ILE1BQU0sR0FBRyxLQUFLcEgsS0FBTCxDQUFXdUMsV0FBeEI7TUFDQSxJQUFJOEUsTUFBTSxHQUFHLEtBQUtySCxLQUFMLENBQVdzSCxTQUF4Qjs7TUFDQSxTQUFTQyxjQUFULENBQXdCRixNQUF4QixFQUFnQ0QsTUFBaEMsRUFBd0M7UUFDdEMsS0FBSyxJQUFJbkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21CLE1BQU0sQ0FBQ2xHLE1BQTNCLEVBQW1DK0UsQ0FBQyxFQUFwQyxFQUF3QztVQUN0QyxJQUFJLENBQUNtQixNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVXRFLE1BQWYsRUFBdUI7WUFDckIxQixLQUFLLENBQUNELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJDLEtBQTFCLENBQWdDRixlQUFoQyxDQUFnREksSUFBaEQsQ0FBcURrRyxNQUFNLENBQUNwQixDQUFELENBQU4sQ0FBVTdFLE1BQS9ELEVBQXVFaUcsTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVV4RixRQUFWLElBQXNCNEcsTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVV2RixXQUF2RztVQUNEOztVQUNEMEcsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVV0RSxNQUFWLEdBQW1CLElBQW5COztVQUNBLElBQUl5RixNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVS9ELFdBQVYsSUFBeUJrRixNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVS9ELFdBQVYsQ0FBc0JoQixNQUF0QixHQUErQixDQUE1RCxFQUErRDtZQUM3RGtHLE1BQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVL0QsV0FBVixHQUF3QnFGLGNBQWMsQ0FBQ0YsTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVVuRSxNQUFYLEVBQW1Cc0YsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVUvRCxXQUE3QixDQUF0QztVQUNEO1FBQ0Y7O1FBQ0RqQyxLQUFLLENBQUN1SCxhQUFOLEdBQXNCLElBQXRCO1FBQ0EsT0FBT0osTUFBUDtNQUNEOztNQUNELFNBQVNLLGdCQUFULENBQTBCSixNQUExQixFQUFrQ0QsTUFBbEMsRUFBMEM7UUFDeEMsS0FBSyxJQUFJbkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21CLE1BQU0sQ0FBQ2xHLE1BQTNCLEVBQW1DK0UsQ0FBQyxFQUFwQyxFQUF3QztVQUN0QyxJQUFJbUIsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVV0RSxNQUFkLEVBQXNCO1lBQ3BCMUIsS0FBSyxDQUFDRCxLQUFOLENBQVlnQixhQUFaLENBQTBCQyxLQUExQixDQUFnQ0YsZUFBaEMsQ0FBZ0RTLElBQWhELENBQXFENkYsTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVU3RSxNQUEvRCxFQUF1RWlHLE1BQU0sQ0FBQ3BCLENBQUQsQ0FBTixDQUFVeEYsUUFBVixJQUFzQjRHLE1BQU0sQ0FBQ3BCLENBQUQsQ0FBTixDQUFVdkYsV0FBdkc7VUFDRDs7VUFDRDBHLE1BQU0sQ0FBQ25CLENBQUQsQ0FBTixDQUFVdEUsTUFBVixHQUFtQixLQUFuQjs7VUFDQSxJQUFJeUYsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVUvRCxXQUFWLElBQXlCa0YsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVUvRCxXQUFWLENBQXNCaEIsTUFBdEIsR0FBK0IsQ0FBNUQsRUFBK0Q7WUFDN0RrRyxNQUFNLENBQUNuQixDQUFELENBQU4sQ0FBVS9ELFdBQVYsR0FBd0J1RixnQkFBZ0IsQ0FBQ0osTUFBTSxDQUFDcEIsQ0FBRCxDQUFOLENBQVVuRSxNQUFYLEVBQW1Cc0YsTUFBTSxDQUFDbkIsQ0FBRCxDQUFOLENBQVUvRCxXQUE3QixDQUF4QztVQUNEO1FBQ0Y7O1FBQ0RqQyxLQUFLLENBQUN1SCxhQUFOLEdBQXNCLEtBQXRCO1FBQ0EsT0FBT0osTUFBUDtNQUNEOztNQUVELElBQUksQ0FBQ25ILEtBQUssQ0FBQ3VILGFBQVgsRUFBMEI7UUFDeEJKLE1BQU0sR0FBR0csY0FBYyxDQUFDRixNQUFELEVBQVNELE1BQVQsQ0FBdkI7TUFDRCxDQUZELE1BRU87UUFDTEEsTUFBTSxHQUFHSyxnQkFBZ0IsQ0FBQ0osTUFBRCxFQUFTRCxNQUFULENBQXpCO01BQ0Q7O01BRUQsS0FBS3BILEtBQUwsQ0FBV08sY0FBWCxDQUEwQjZHLE1BQTFCO0lBQ0Q7OztXQUNELDZCQUFvQi9GLEVBQXBCLEVBQXdCZ0MsS0FBeEIsRUFBK0IsQ0FFOUI7OztXQUNELGtCQUFTO01BQUE7O01BQ1AsSUFBSSxLQUFLckQsS0FBTCxDQUFXdUMsV0FBWCxJQUEwQixLQUFLdkMsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QnJCLE1BQXZCLEdBQWdDLENBQTFELElBQStELEVBQUUsS0FBSzZFLGlCQUFMLElBQTBCLEtBQUtDLGdCQUFqQyxDQUFuRSxFQUF1SDtRQUNySCxLQUFLd0IsYUFBTCxHQUFxQixLQUFLRSxnQkFBTCxFQUFyQjtNQUNEOztNQUVELElBQUlMLE1BQUosRUFBWUQsTUFBWixFQUFvQk8sTUFBcEI7TUFDQU4sTUFBTSxHQUFHLEtBQUtySCxLQUFMLENBQVdzSCxTQUFwQjtNQUNBRixNQUFNLEdBQUcsS0FBS3BILEtBQUwsQ0FBV3VDLFdBQXBCOztNQUNBLElBQUksQ0FBQyxLQUFLdkMsS0FBTCxDQUFXMkIsTUFBaEIsRUFBd0I7UUFDdEIsT0FBTyxJQUFQO01BQ0Q7O01BRURnRyxNQUFNLEdBQUcsRUFBVDs7TUFDQSxJQUFJLEtBQUszSCxLQUFMLENBQVdnQixhQUFYLENBQXlCeUMsSUFBekIsQ0FBOEJtRSxhQUE5QixDQUE0Q0QsTUFBaEQsRUFBd0Q7UUFDdERBLE1BQU0sZ0JBQUc7VUFBSyxTQUFTLEVBQUU7UUFBaEIsZ0JBQ0E7VUFBTyxTQUFTLEVBQUUsc0NBQWxCO1VBQTBELElBQUksRUFBQyxNQUEvRDtVQUFzRSxPQUFPLEVBQUUsS0FBS3RCLGNBQXBGO1VBQW9HLFdBQVcsRUFBRTtRQUFqSCxFQURBLENBQVQ7TUFHRDs7TUFFRCxJQUFJd0IsUUFBUSxHQUFHLEVBQWY7O01BQ0EsSUFBSSxLQUFLN0gsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QnlDLElBQXpCLENBQThCQyxTQUE5QixDQUF3Q29FLE1BQTVDLEVBQW9EO1FBQ2xERCxRQUFRLGdCQUFHO1VBQUcsU0FBUyxFQUFFLGtDQUFrQyxLQUFLTCxhQUFMLEdBQXFCLFlBQXJCLEdBQW9DLGNBQXRFLENBQWQ7VUFBcUcsU0FBUyxFQUFFLEtBQUtsQjtRQUFySCxHQUF1SSxLQUFLdEcsS0FBTCxDQUFXNkgsUUFBWCxJQUF1QixLQUFLN0gsS0FBTCxDQUFXK0QsSUFBWCxDQUFnQmdFLHdCQUE5SyxDQUFYO01BQ0QsQ0FGRCxNQUVPO1FBQ0xGLFFBQVEsZ0JBQUc7VUFBSyxTQUFTLEVBQUM7UUFBZixHQUFrQyxLQUFLN0gsS0FBTCxDQUFXNkgsUUFBN0MsQ0FBWDtNQUNEOztNQUVELG9CQUNBLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUNHQSxRQURILEVBRUdGLE1BRkgsZUFHRTtRQUFLLFNBQVMsRUFBRTtNQUFoQixnQkFDRTtRQUFLLFNBQVMsRUFBRXJELDZCQUFBLENBQWEwRDtNQUE3QixnQkFDRSw0Q0FDR1gsTUFBTSxDQUFDOUIsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT25FLEVBQVAsRUFBYztRQUN4QixJQUFJLE1BQUksQ0FBQ3FFLFVBQUwsQ0FBZ0IsTUFBSSxDQUFDckMsS0FBTCxDQUFXbUQsV0FBM0IsRUFBd0NoQixJQUF4QyxFQUE4QzRCLE1BQU0sQ0FBQy9GLEVBQUQsQ0FBcEQsQ0FBSixFQUErRDtVQUM3RCxvQkFBTyxnQ0FBQyxrREFBRDtZQUEwQixHQUFHLEVBQUVBLEVBQS9CO1lBQW1DLEtBQUssRUFBRUEsRUFBMUM7WUFBOEMsRUFBRSxFQUFFbUUsSUFBSSxDQUFDbkUsRUFBdkQ7WUFBMkQsYUFBYSxFQUFFLE1BQUksQ0FBQ3JCLEtBQUwsQ0FBV2dCLGFBQXJGO1lBQzBCLGNBQWMsRUFBRSxNQUFJLENBQUNpSCxnQkFEL0M7WUFFMEIsS0FBSyxFQUFFekMsSUFGakM7WUFHMEIsU0FBUyxFQUFFLE1BQUksQ0FBQ3hGLEtBQUwsQ0FBVzZELFNBSGhEO1lBSTBCLG1CQUFtQixFQUFFLE1BQUksQ0FBQzdELEtBQUwsQ0FBV00sbUJBSjFEO1lBSzBCLFdBQVcsRUFBRThHLE1BQU0sQ0FBQy9GLEVBQUQsQ0FMN0M7WUFNMEIsSUFBSSxFQUFFLE1BQUksQ0FBQ3JCLEtBQUwsQ0FBVytELElBTjNDO1lBTzBCLFlBQVksRUFBRSxNQUFJLENBQUMyQixVQUFMLENBQWdCLE1BQUksQ0FBQ3JDLEtBQUwsQ0FBV21ELFdBQTNCLEVBQXdDaEIsSUFBeEMsRUFBNkMsS0FBN0MsRUFBb0QsS0FBcEQsQ0FQeEM7WUFRMEIsU0FBUyxFQUFFLE1BQUksQ0FBQ25DLEtBQUwsQ0FBV21ELFdBUmhEO1lBUzBCLFVBQVUsRUFBRSxNQUFJLENBQUNkLFVBVDNDO1lBVTBCLFFBQVEsRUFBRSxNQUFJLENBQUMxRixLQUFMLENBQVc0RjtVQVYvQyxFQUFQO1FBV0Q7TUFDRixDQWRBLENBREgsQ0FERixDQURGLENBSEYsQ0FEQTtJQTJCRDs7O0VBMUx5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjVDOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBREEsSUFBTXFDLFFBQVEsZ0JBQUdDLGlCQUFBLENBQU1DLElBQU4sQ0FBVztFQUFBLE9BQU0sdUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUdxQkM7Ozs7O0VBRW5CLHdCQUFZckksS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsSUFBTUMsS0FBSyxpREFBWCxDQUZpQixDQUdqQjs7SUFDQSxJQUFJa0gsT0FBTyxHQUFHbUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7SUFDQSxJQUFJVCxNQUFNLEdBQUdRLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0lBQ0EsTUFBS0MsYUFBTCxHQUFxQixJQUFBQyx3QkFBQSxFQUFZekksS0FBSyxDQUFDZ0IsYUFBTixDQUFvQnlDLElBQWhDLENBQXJCO0lBQ0FxRSxNQUFNLENBQUNZLEtBQVAsR0FBZSxNQUFLRixhQUFMLENBQW1CRyxjQUFsQztJQUNBeEIsT0FBTyxDQUFDeUIsU0FBUixHQUFvQixtREFBcEI7O0lBQ0EsSUFBSTVJLEtBQUssQ0FBQzZJLElBQVYsRUFBZ0I7TUFDZDFCLE9BQU8sQ0FBQ3lCLFNBQVIsSUFBcUIsVUFBckI7SUFDRCxDQUZELE1BRU87TUFDTHpCLE9BQU8sQ0FBQ3lCLFNBQVIsSUFBcUIsV0FBckI7SUFDRDs7SUFDRCxJQUFJNUksS0FBSyxDQUFDOEksUUFBVixFQUFvQjtNQUNsQjNCLE9BQU8sQ0FBQ3lCLFNBQVIsSUFBcUIsZUFBckI7SUFDRDs7SUFDRHpCLE9BQU8sQ0FBQzRCLFdBQVIsQ0FBb0JqQixNQUFwQjtJQUNBcEIsTUFBTSxDQUFDUyxPQUFELENBQU4sQ0FBZ0I2QixFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFTNUUsS0FBVCxFQUFnQjtNQUMxQyxJQUFJbkUsS0FBSyxDQUFDb0QsS0FBTixDQUFZd0YsSUFBaEIsRUFBc0I7UUFDcEI1SSxLQUFLLENBQUNnSixLQUFOO01BQ0QsQ0FGRCxNQUVPO1FBQ0xoSixLQUFLLENBQUM0SSxJQUFOO01BQ0Q7SUFDRixDQU5EO0lBT0EsSUFBSTdILGFBQWEsR0FBR2hCLEtBQUssQ0FBQ2dCLGFBQTFCO0lBQ0EsSUFBSWtJLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO01BQUNoQyxPQUFPLEVBQUVBLE9BQVY7TUFBbUJpQyxNQUFNLEVBQUVwSixLQUFLLENBQUNvSjtJQUFqQyxDQUFaLENBQWQ7SUFDQXBJLGFBQWEsQ0FBQ3FJLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxlQUFwQyxHQUFzREwsT0FBdEQ7SUFDQWxJLGFBQWEsQ0FBQ3VFLEdBQWQsQ0FBa0JpRSxVQUFsQixDQUE2Qk4sT0FBN0I7SUFDQSxNQUFLTCxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVMUksSUFBVixnREFBWjtJQUNBLE1BQUtzSix5QkFBTCxHQUFpQyxNQUFLQSx5QkFBTCxDQUErQnRKLElBQS9CLGdEQUFqQztJQUNBLE1BQUt1SixjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0J2SixJQUFwQixnREFBdEI7SUFDQSxNQUFLOEksS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBVzlJLElBQVgsZ0RBQWI7SUFDQSxNQUFLd0osb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJ4SixJQUExQixnREFBNUIsQ0FqQ2lCLENBa0NqQjs7SUFDQSxNQUFLa0QsS0FBTCxHQUFhO01BQ1g7TUFDQXVHLFNBQVMsRUFBRTVKLEtBQUssQ0FBQzRKLFNBQU4sSUFBbUIsT0FGbkI7TUFHWGYsSUFBSSxFQUFFN0ksS0FBSyxDQUFDNkksSUFBTixJQUFjLEtBSFQ7TUFJWEQsU0FBUyxFQUFFNUksS0FBSyxDQUFDNEksU0FBTixJQUFtQixxQkFKbkI7TUFLWDlHLE1BQU0sRUFBRTlCLEtBQUssQ0FBQzhCLE1BQU4sSUFBZ0IsRUFMYjtNQU1Yb0gsT0FBTyxFQUFFQSxPQU5FO01BT1hXLFNBQVMsRUFBRTtJQVBBLENBQWI7SUFuQ2lCO0VBNENsQjs7OztXQUVELDZCQUFvQixDQUVuQjs7O1dBRUQsc0JBQWFDLEdBQWIsRUFBa0I7TUFDaEIsS0FBS2xELFFBQUwsQ0FBYztRQUFDaUQsU0FBUyxFQUFFQztNQUFaLENBQWQ7SUFDRDs7O1dBRUQsa0JBQVM7TUFDUCxJQUFNN0osS0FBSyxHQUFHLElBQWQ7TUFDQSxJQUFNOEosT0FBTyxHQUFHLEtBQUsvSixLQUFMLENBQVdnQixhQUFYLENBQXlCeUMsSUFBekM7TUFDQSxJQUFJbUYsU0FBUyxHQUFHLEtBQUt2RixLQUFMLENBQVd1RixTQUFYLEdBQXVCLEdBQXZCLEdBQTZCLEtBQUt2RixLQUFMLENBQVd1RyxTQUF4RDtNQUNBaEIsU0FBUyxJQUFJLE9BQU8sS0FBS3ZGLEtBQUwsQ0FBV3dGLElBQVgsR0FBa0IsVUFBbEIsR0FBK0IsV0FBdEMsQ0FBYjs7TUFDQSxJQUFJLEtBQUt4RixLQUFMLENBQVd3RixJQUFmLEVBQXFCO1FBQ25CbkMsTUFBTSxDQUFDLEtBQUtyRCxLQUFMLENBQVc2RixPQUFYLENBQW1CL0IsT0FBcEIsQ0FBTixDQUFtQzZDLFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtNQUNELENBRkQsTUFFTztRQUNMdkQsTUFBTSxDQUFDLEtBQUtyRCxLQUFMLENBQVc2RixPQUFYLENBQW1CL0IsT0FBcEIsQ0FBTixDQUFtQzhDLFdBQW5DLENBQStDLFVBQS9DLEVBQTJERCxRQUEzRCxDQUFvRSxXQUFwRTtNQUNEOztNQUNELElBQUlFLGNBQWMsR0FBRyxFQUFyQjtNQUNBLElBQUlDLE9BQU8sR0FBRyxFQUFkOztNQUNBLElBQUksS0FBS25LLEtBQUwsQ0FBV29LLFNBQVgsQ0FBcUJsSixNQUFyQixHQUE4QixDQUFsQyxFQUFxQztRQUNuQyxJQUFJbUosYUFBYSxnQkFBRztVQUFRLEdBQUcsRUFBRSxLQUFLckssS0FBTCxDQUFXb0ssU0FBWCxDQUFxQmxKLE1BQWxDO1VBQTBDLEtBQUssRUFBRSxLQUFLc0gsYUFBTCxDQUFtQjhCLG9DQUFwRTtVQUEwRyxTQUFTLEVBQUUsMENBQXJIO1VBQWlLLFNBQVMsRUFBRSxxQkFBTTtZQUFDckssS0FBSyxDQUFDc0ssWUFBTixDQUFtQixDQUFuQjtVQUFzQjtRQUF6TSxFQUFwQjs7UUFDQUosT0FBTyxDQUFDSyxJQUFSLENBQWFILGFBQWI7UUFDQUYsT0FBTyxDQUFDSyxJQUFSLENBQWEsS0FBS3hLLEtBQUwsQ0FBV29LLFNBQVgsQ0FBcUI3RSxHQUFyQixDQUF5QixVQUFTNEIsT0FBVCxFQUFrQnNELEtBQWxCLEVBQXlCO1VBQzNELElBQUlDLFFBQVEsR0FBR3ZELE9BQU8sQ0FBQ3dELFdBQXZCO1VBQ0ExSyxLQUFLLENBQUMwSixvQkFBTixDQUEyQmUsUUFBM0IsRUFBcUNELEtBQXJDO1VBQ0Esb0JBQU87WUFBUSxHQUFHLEVBQUVBLEtBQWI7WUFBb0IsS0FBSyxFQUFFdEQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXbEQsSUFBdEM7WUFDUSxTQUFTLEVBQUUsb0NBQW9Dd0csS0FEdkQ7WUFFUSxTQUFTLEVBQUUscUJBQU07Y0FBQ3hLLEtBQUssQ0FBQ3NLLFlBQU4sQ0FBbUJFLEtBQUssR0FBRyxDQUEzQjtZQUE4QjtVQUZ4RCxFQUFQO1FBR0QsQ0FOVSxDQUFiO1FBUUFQLGNBQWMsZ0JBQUc7VUFBSyxTQUFTLEVBQUU7UUFBaEIsR0FDZEMsT0FEYyxDQUFqQjtNQUdEOztNQUNELElBQUlTLElBQUksR0FBRyxFQUFYOztNQUNBLElBQUksS0FBSzVLLEtBQUwsQ0FBV29LLFNBQVgsQ0FBcUJsSixNQUFyQixHQUE4QixDQUFsQyxFQUFxQztRQUNuQzBKLElBQUksZ0JBQUcsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0osS0FBSzVLLEtBQUwsQ0FBV29LLFNBQVgsQ0FBcUI3RSxHQUFyQixDQUF5QixVQUFTNEIsT0FBVCxFQUFrQnNELEtBQWxCLEVBQXlCO1VBQ2pELG9CQUFPLGdDQUFDLGlEQUFEO1lBQXdCLEdBQUcsRUFBRUEsS0FBN0I7WUFBb0MsYUFBYSxFQUFFeEssS0FBSyxDQUFDRCxLQUFOLENBQVlnQixhQUEvRDtZQUN3QixTQUFTLEVBQUVmLEtBQUssQ0FBQ0QsS0FBTixDQUFZb0ssU0FBWixDQUFzQkssS0FBdEIsQ0FEbkM7WUFDaUUsY0FBYyxFQUFFeEssS0FBSyxDQUFDRCxLQUFOLENBQVk2SyxXQUQ3RjtZQUV3QixXQUFXLEVBQUU1SyxLQUFLLENBQUNELEtBQU4sQ0FBWThLLFNBRmpEO1lBRTRELFFBQVEsRUFBRTdLLEtBQUssQ0FBQzRJLElBRjVFO1lBRWtGLFFBQVEsRUFBRTFCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2xELElBRnZHO1lBR3dCLElBQUksRUFBRWhFLEtBQUssQ0FBQ29ELEtBQU4sQ0FBWXdGLElBSDFDO1lBR2dELE1BQU0sRUFBRzRCLEtBQUssR0FBRyxDQUFULEtBQWdCeEssS0FBSyxDQUFDb0QsS0FBTixDQUFZd0c7VUFIcEYsRUFBUDtRQUlELENBTEEsQ0FESSxDQUFQO01BUUQ7O01BQ0Qsb0JBQ0U7UUFBSyxTQUFTLEVBQUV2Riw2QkFBQSxDQUFheUc7TUFBN0IsZ0JBQ0UsZ0NBQUMsZUFBRDtRQUFVLFFBQVEsZUFBRTtNQUFwQixnQkFDRSxnQ0FBQyxRQUFEO1FBQVUsWUFBWSxFQUFFLHNCQUF4QjtRQUFnRCxXQUFXLEVBQUV6Ryw2QkFBQSxDQUFhMEcsa0JBQTFFO1FBQ1UsTUFBTSxFQUFFakIsT0FBTyxDQUFDckcsU0FBUixDQUFrQnVILEtBQWxCLElBQTJCLEtBQUt6QyxhQUFMLENBQW1CMEMsU0FEaEU7UUFDMkUsYUFBYSxFQUFFNUcsNkJBQUEsQ0FBYTZHLGVBRHZHO1FBQ3dILFVBQVUsRUFBRSxLQUFLbEMsS0FEekk7UUFFVSxhQUFhLEVBQUUsS0FBS1QsYUFBTCxDQUFtQjdEO01BRjVDLEVBREYsQ0FERixFQU9HdUYsY0FQSCxlQVFFO1FBQUssU0FBUyxFQUFFNUYsNkJBQUEsQ0FBYThHO01BQTdCLGdCQUNFLGdDQUFDLGlEQUFEO1FBQXdCLEdBQUcsRUFBRSxLQUFLcEwsS0FBTCxDQUFXb0ssU0FBWCxDQUFxQmxKLE1BQWxEO1FBQTBELGFBQWEsRUFBRyxLQUFLbEIsS0FBTCxDQUFXZ0IsYUFBckY7UUFBb0csSUFBSSxFQUFFLEtBQUt3SCxhQUEvRztRQUNzQixTQUFTLEVBQUUsS0FBS3hJLEtBQUwsQ0FBV3NILFNBRDVDO1FBQ3VELFNBQVMsRUFBRSxLQUFLdEgsS0FBTCxDQUFXNkQsU0FEN0U7UUFDd0YsY0FBYyxFQUFFLEtBQUs3RCxLQUFMLENBQVdPLGNBRG5IO1FBRXNCLFdBQVcsRUFBRSxLQUFLUCxLQUFMLENBQVd1QyxXQUY5QztRQUUyRCxtQkFBbUIsRUFBRSxLQUFLdkMsS0FBTCxDQUFXTSxtQkFGM0Y7UUFFZ0gsUUFBUSxFQUFFLEtBQUt1SSxJQUYvSDtRQUVxSSxRQUFRLEVBQUVrQixPQUFPLENBQUNuQyxhQUFSLENBQXNCcUQsS0FGcks7UUFHc0IsSUFBSSxFQUFFLEtBQUs1SCxLQUFMLENBQVd3RixJQUh2QztRQUc2QyxNQUFNLEVBQUU1SSxLQUFLLENBQUNvRCxLQUFOLENBQVl3RyxTQUFaLEtBQTBCO01BSC9FLEVBREYsRUFLR2UsSUFMSCxDQVJGLENBREY7SUFrQkQ7OztXQUVELDhCQUFxQkYsUUFBckIsRUFBK0JELEtBQS9CLEVBQXNDO01BQ3BDLElBQUlZLEtBQUssR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFaLENBRG9DLENBRXBDOztNQUNBOEMsS0FBSyxDQUFDdEMsV0FBTixDQUFrQlQsUUFBUSxDQUFDZ0QsY0FBVCxDQUF3QixFQUF4QixDQUFsQjtNQUNBaEQsUUFBUSxDQUFDaUQsSUFBVCxDQUFjeEMsV0FBZCxDQUEwQnNDLEtBQTFCO01BRUEsSUFBSUcsVUFBVSxHQUFHSCxLQUFLLENBQUNJLEtBQXZCO01BQ0FELFVBQVUsQ0FBQ0UsVUFBWCxDQUFzQiwyQ0FBMkNqQixLQUEzQyxHQUFtRCxhQUFuRCxHQUNwQixpQkFEb0IsR0FDQUMsUUFEQSxHQUNXLE9BRFgsR0FFcEIseUNBRm9CLEdBR3BCLHVCQUhvQixHQUlwQix5QkFKb0IsR0FLcEIsR0FMRjtJQU1EOzs7V0FFRCxnQkFBTztNQUFBOztNQUNMLEtBQUs5RCxRQUFMLENBQWM7UUFBQ2lDLElBQUksRUFBRTtNQUFQLENBQWQsRUFBNEI7UUFBQSxPQUFNLE1BQUksQ0FBQ1kseUJBQUwsRUFBTjtNQUFBLENBQTVCO01BQ0EsS0FBS3pKLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUIySyxnQkFBekIsQ0FBMEMsSUFBMUM7SUFDRDs7O1dBRUQsaUJBQVE7TUFBQTs7TUFDTixLQUFLL0UsUUFBTCxDQUFjO1FBQUNpQyxJQUFJLEVBQUU7TUFBUCxDQUFkLEVBQTZCO1FBQUEsT0FBTSxNQUFJLENBQUMrQyx3QkFBTCxFQUFOO01BQUEsQ0FBN0I7SUFDRDs7O1dBRUQsMEJBQWlCO01BQ2YsSUFBTTNMLEtBQUssR0FBRyxJQUFkO01BQ0FrRCxNQUFNLENBQUMwSSxxQkFBUCxDQUE2QixZQUFXO1FBQ3RDNUwsS0FBSyxDQUFDd0oseUJBQU47TUFDRCxDQUZEO0lBR0Q7OztXQUVELDRCQUFtQnFDLFNBQW5CLEVBQThCQyxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbUQ7TUFDakQsSUFBSSxLQUFLM0ksS0FBTCxDQUFXd0YsSUFBZixFQUFxQjtRQUNuQixLQUFLWSx5QkFBTDtNQUNELENBRkQsTUFFTztRQUNMLEtBQUttQyx3QkFBTDtNQUNEOztNQUNELElBQUksS0FBSzVMLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ5QyxJQUF6QixDQUE4QndJLE9BQTlCLElBQXlDLENBQUMsS0FBSzVJLEtBQUwsQ0FBV3dGLElBQXpELEVBQStEO1FBQzdELElBQUlxRCxRQUFRLEdBQUdDLG1CQUFBLENBQU1DLFFBQU4sQ0FBZSxPQUFmLENBQWY7O1FBQ0EsSUFBSUYsUUFBUSxLQUFLLEtBQUtHLFdBQUwsQ0FBaUJwSSxJQUFsQyxFQUF3QztVQUN0Q2tJLG1CQUFBLENBQU1HLFVBQU4sQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUI7UUFDRDtNQUNGO0lBQ0Y7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxxQ0FBNEI7TUFDMUI1RixNQUFNLENBQUMsMEJBQUQsQ0FBTixDQUFtQ3NELFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0NBQTJCO01BQ3pCdkQsTUFBTSxDQUFDLDBCQUFELENBQU4sQ0FBbUNzRCxRQUFuQyxDQUE0QyxXQUE1QyxFQUF5REMsV0FBekQsQ0FBcUUsVUFBckU7SUFDRDs7O0VBM0t5Q3BFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUNUM7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFHYTBHOzs7OztFQUNULDJCQUFZdk0sS0FBWixFQUFtQjtJQUFBO0lBQUEseUJBQ1RBLEtBRFM7RUFFbEI7Ozs7V0FDRCxvQkFBWXlDLENBQVosRUFBZTtNQUNYLElBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZLEVBQWhCLEVBQW9CO1FBQ2hCLEtBQUsxQyxLQUFMLENBQVd3TSxVQUFYLENBQXNCL0osQ0FBdEI7TUFDSDtJQUNKOzs7V0FDRCxrQkFBUztNQUFBOztNQUVMO01BQ0EsSUFBSWdLLGlCQUFpQixHQUFHLElBQXhCO01BQ0EsSUFBSTdJLFFBQVEsR0FBRyxLQUFLNUQsS0FBTCxDQUFXNkQsU0FBWCxDQUFxQkMsWUFBckIsQ0FBa0MsS0FBSzlELEtBQUwsQ0FBVzBNLE9BQTdDLENBQWY7TUFDQSxJQUFJN0ksU0FBUyxHQUFHRCxRQUFRLENBQUMrSSxXQUF6QjtNQUNBLElBQUlDLE1BQU0sR0FBR2hKLFFBQVEsQ0FBQ3lILEtBQVQsSUFBa0J6SCxRQUFRLENBQUN5SCxLQUFULENBQWUsSUFBSXdCLG1CQUFKLENBQVk7UUFBQ0MsUUFBUSxFQUFFLElBQUlDLFdBQUosQ0FBVSxDQUFWLEVBQVksQ0FBWjtNQUFYLENBQVosQ0FBZixFQUF3RCxXQUF4RCxDQUFsQixHQUF5Rm5KLFFBQVEsQ0FBQ3lILEtBQVQsQ0FBZSxJQUFJd0IsbUJBQUosQ0FBWTtRQUFDQyxRQUFRLEVBQUUsSUFBSUMsV0FBSixDQUFVLENBQVYsRUFBWSxDQUFaO01BQVgsQ0FBWixDQUFmLEVBQXdELFdBQXhELENBQXpGLEdBQStKLElBQTVLO01BQ0EsSUFBSUMsTUFBTSxHQUFHck0sS0FBSyxDQUFDQyxPQUFOLENBQWNnTSxNQUFkLElBQXdCQSxNQUFNLENBQUMsQ0FBRCxDQUE5QixHQUFtQ0EsTUFBaEQ7TUFDQSxJQUFJSyxTQUFTLEdBQUdwSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ3FKLFNBQWIsR0FBeUIsU0FBbEQ7TUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBS25OLEtBQUwsQ0FBV21OLE9BQVgsSUFBc0IsRUFBcEM7O01BQ0EsSUFBSXRKLFNBQVMsS0FBS29KLFNBQVMsS0FBSyxXQUFkLElBQTZCQSxTQUFTLEtBQUssZUFBM0MsSUFBOERBLFNBQVMsS0FBSyxPQUFqRixDQUFiLEVBQXdHO1FBQ3BHLElBQUlHLFNBQVMsR0FBRyxJQUFoQjtRQUNBLElBQUlDLE9BQUo7O1FBQ0EsSUFBS3hKLFNBQVMsQ0FBQ3lKLFFBQVYsSUFBc0J6SixTQUFTLENBQUN5SixRQUFWLENBQW1CdkcsT0FBbkIsQ0FBMkIsR0FBM0IsTUFBb0MsQ0FBQyxDQUE1RCxJQUFtRWxELFNBQVMsQ0FBQzBKLE1BQVYsSUFBb0IxSixTQUFTLENBQUMwSixNQUFWLENBQWlCeEcsT0FBakIsQ0FBeUIsR0FBekIsTUFBa0MsQ0FBQyxDQUE5SCxFQUFrSTtVQUM5SCxJQUFJa0csU0FBUyxLQUFLLFdBQWQsSUFBNkJBLFNBQVMsS0FBSyxPQUEvQyxFQUF3RDtZQUNwREksT0FBTyxHQUFHeEosU0FBUyxDQUFDeUosUUFBcEI7VUFDSCxDQUZELE1BR0s7WUFDREQsT0FBTyxHQUFHeEosU0FBUyxDQUFDMEosTUFBcEI7VUFDSDs7VUFDREgsU0FBUyxnQkFBRztZQUFLLEdBQUcsRUFBRUMsT0FBVjtZQUFtQixLQUFLLEVBQUU7Y0FBQ0csTUFBTSxFQUFFLEVBQVQ7Y0FBYUMsS0FBSyxFQUFFO1lBQXBCO1VBQTFCLEVBQVo7UUFDSCxDQVJELE1BUU8sSUFBSVQsTUFBSixFQUFZO1VBQ2YsSUFBSVUsVUFBVSxHQUFHVixNQUFNLENBQUNXLFFBQVAsSUFBbUIsT0FBT1gsTUFBTSxDQUFDVyxRQUFkLEtBQTJCLFVBQTlDLElBQTREWCxNQUFNLENBQUNXLFFBQVAsRUFBNUQsR0FBZ0ZYLE1BQU0sQ0FBQ1csUUFBUCxFQUFoRixHQUFtRyxJQUFwSDs7VUFDQSxJQUFJRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0UsTUFBWCxFQUFsQixFQUF1QztZQUNuQ1IsU0FBUyxnQkFBRztjQUFLLEdBQUcsRUFBRU0sVUFBVSxDQUFDRSxNQUFYLEVBQVY7Y0FBK0IsS0FBSyxFQUFFO2dCQUFDSixNQUFNLEVBQUUsRUFBVDtnQkFBYUMsS0FBSyxFQUFFO2NBQXBCO1lBQXRDLEVBQVo7VUFDSCxDQUZELE1BR0s7WUFDRCxPQUFPLElBQVA7VUFDSDtRQUNKOztRQUNELElBQUksS0FBS3pOLEtBQUwsQ0FBV3dNLFVBQWYsRUFBMkI7VUFDdkJDLGlCQUFpQixnQkFBRztZQUFNLFFBQVEsRUFBRSxDQUFoQjtZQUFtQixTQUFTLEVBQUVuSSw2QkFBQSxDQUFhdUosa0JBQTNDO1lBQStELEtBQUssRUFBRVYsT0FBdEU7WUFBK0UsVUFBVSxFQUFFLG9CQUFDL0ksS0FBRDtjQUFBLE9BQVcsS0FBSSxDQUFDMEosVUFBTCxDQUFnQjFKLEtBQWhCLENBQVg7WUFBQSxDQUEzRjtZQUE4SCxTQUFTLEVBQUUsbUJBQUNBLEtBQUQ7Y0FBQSxPQUFVLEtBQUksQ0FBQ3BFLEtBQUwsQ0FBV3dNLFVBQVgsQ0FBc0JwSSxLQUF0QixDQUFWO1lBQUE7VUFBekksR0FBa0xnSixTQUFsTCxDQUFwQjtRQUNILENBRkQsTUFHSztVQUNEWCxpQkFBaUIsZ0JBQUc7WUFBTSxTQUFTLEVBQUVuSSw2QkFBQSxDQUFhdUosa0JBQTlCO1lBQWtELEtBQUssRUFBRVY7VUFBekQsR0FBbUVDLFNBQW5FLENBQXBCO1FBQ0g7TUFDSixDQTFCRCxNQTBCTztRQUNILElBQUkvSSxRQUFKOztRQUNBLFFBQVE0SSxTQUFSO1VBQXFCO1VBQ2pCLEtBQUssT0FBTDtZQUNJNUksUUFBUSxHQUFHQyw2QkFBQSxDQUFheUosd0JBQXhCO1lBQ0E7O1VBQ0osS0FBSyxRQUFMO1lBQ0kxSixRQUFRLEdBQUdDLDZCQUFBLENBQWEwSix5QkFBeEI7WUFDQTs7VUFDSixLQUFLLE1BQUw7WUFDSTNKLFFBQVEsR0FBR0MsNkJBQUEsQ0FBYTJKLHVCQUF4QjtZQUNBOztVQUNKLEtBQUssR0FBTDtZQUNJNUosUUFBUSxHQUFHQyw2QkFBQSxDQUFhNEosb0JBQXhCO1lBQ0E7O1VBQ0osS0FBSyxPQUFMO1lBQ0k3SixRQUFRLEdBQUdDLDZCQUFBLENBQWE2Six3QkFBeEI7WUFDQTs7VUFDSixLQUFLLFVBQUw7WUFDSTlKLFFBQVEsR0FBR0MsNkJBQUEsQ0FBYThKLDJCQUF4QjtZQUNBOztVQUNKO1lBQ0kvSixRQUFRLEdBQUVDLDZCQUFBLENBQWF1SixrQkFBdkI7WUFDQTtRQXJCUjs7UUF1QkEsSUFBSVEsS0FBSixFQUFXQyxXQUFYOztRQUNBLElBQUl0QixNQUFNLElBQUlBLE1BQU0sQ0FBQ3VCLE9BQVAsRUFBVixJQUE4QnZCLE1BQU0sQ0FBQ3dCLFNBQVAsRUFBbEMsRUFBc0Q7VUFDbERILEtBQUssR0FBR3JCLE1BQU0sQ0FBQ3VCLE9BQVAsR0FBaUJFLFFBQWpCLEVBQVI7VUFDQUgsV0FBVyxHQUFHdEIsTUFBTSxDQUFDd0IsU0FBUCxHQUFtQkMsUUFBbkIsRUFBZDtRQUNILENBSEQsTUFJSyxJQUFJNUssU0FBUyxJQUFJQSxTQUFTLENBQUM2SyxTQUF2QixJQUFvQzdLLFNBQVMsQ0FBQzhLLFdBQWxELEVBQStEO1VBQ2hFTixLQUFLLEdBQUdsQyxtQkFBQSxDQUFNeUMsd0JBQU4sQ0FBK0IvSyxTQUFTLENBQUM2SyxTQUFWLENBQW9CLENBQXBCLENBQS9CLEVBQXVEN0ssU0FBUyxDQUFDNkssU0FBVixDQUFvQixDQUFwQixDQUF2RCxDQUFSO1VBQ0FKLFdBQVcsR0FBR25DLG1CQUFBLENBQU15Qyx3QkFBTixDQUErQi9LLFNBQVMsQ0FBQzhLLFdBQVYsQ0FBc0IsQ0FBdEIsQ0FBL0IsRUFBeUQ5SyxTQUFTLENBQUM4SyxXQUFWLENBQXNCLENBQXRCLENBQXpELENBQWQ7UUFDSDs7UUFDRCxJQUFJRSxhQUFhLEdBQUc7VUFDaEIsZUFBZ0JSLEtBREE7VUFFaEIscUJBQXNCQztRQUZOLENBQXBCOztRQUlBLElBQUksS0FBS3RPLEtBQUwsQ0FBV3dNLFVBQWYsRUFBMkI7VUFDdkJDLGlCQUFpQixnQkFBRztZQUFNLFNBQVMsRUFBRXBJLFFBQWpCO1lBQTJCLEtBQUssRUFBRXdLLGFBQWxDO1lBQWlELEtBQUssRUFBRTFCLE9BQXhEO1lBQWlFLFNBQVMsRUFBRSxtQkFBQy9JLEtBQUQ7Y0FBQSxPQUFVLEtBQUksQ0FBQ3BFLEtBQUwsQ0FBV3dNLFVBQVgsQ0FBc0JwSSxLQUF0QixDQUFWO1lBQUE7VUFBNUUsRUFBcEI7UUFDSCxDQUZELE1BR0s7VUFDRHFJLGlCQUFpQixnQkFBRztZQUFNLFNBQVMsRUFBRXBJLFFBQWpCO1lBQTJCLEtBQUssRUFBRXdLLGFBQWxDO1lBQWlELEtBQUssRUFBRTFCO1VBQXhELEVBQXBCO1FBQ0g7TUFDSjs7TUFDRCxPQUFPVixpQkFBUDtJQUNIOzs7RUEzRmtDNUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgc2hvd0xheWVyKHNob3dFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKHNob3dFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvd0VsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IHNob3dFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIHRydWUpXG4gIH1cblxuICBoaWRlTGF5ZXIoaGlkZUVsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUVsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWRlRWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChoaWRlRWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgZmFsc2UpXG4gIH1cbiAgY2hhbmdlQ2hpbGRTdGF0ZSAoY2hpbGQsIGNoaWxkU3RhdGUsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZHMgJiYgY2hpbGQuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gY2hpbGQuY2hpbGRzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShjaGlsZC5jaGlsZHNbY2hpbGRJZF0sIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKGNoaWxkU3RhdGUuaWQsIGFjdGl2ZSlcbiAgICBjaGlsZFN0YXRlLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgfVxuICBwYXJlbnRDYWxsYmFjayAoa2V5LCBuZXdDaGlsZFN0YXRlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1trZXldID0gbmV3Q2hpbGRTdGF0ZTtcbiAgICBpZiAobmV3U3RhdGUuYWN0aXZlICE9IG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAvLyBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJFbnRlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmxheWVyLmlnbm9yZUNoaWxkcykge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IG5ld1N0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyWm9vbVRvKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG4gIGxheWVyWm9vbVRvRW50ZXIoZSkge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgdGhpcy5sYXllclpvb21UbyhlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllckVudGVyKGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG9FbnRlcihldmVudCl9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9hPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgbGlua1N3aXRjaCA9IDxhIGNsYXNzTmFtZT17Y3NzQ2xhc3MgKyBcIiBjNGctc3RhcmJvYXJkLWNoZWNrYm94LWljb25cIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9PjwvYT5cbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxpbmtUZXh0ID0gPGEgdGFiSW5kZXg9ezF9IHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGFsdD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMn0gY2xhc3NOYW1lPXtjc3NDbGFzc30gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmxheWVyRW50ZXIoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+O1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9DSElMRFN9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICAgIGxpbmtTd2l0Y2ggPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZExheWVyRWxlbWVudH0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLnNldExheWVyRmlsdGVyID0gdGhpcy5zZXRMYXllckZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlQWxsTGF5ZXJzID0gdGhpcy50b2dnbGVBbGxMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICAgIC8vIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlcyA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmID0gMDtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT24gPSAwO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXNbal0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluaXRpYWxDb3VudGVyT24gPiB0aGlzLmluaXRpYWxDb3VudGVyT2ZmO1xuICB9XG4gIGdldEluaXRpYWxTdGF0ZUNoaWxkIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQoY2hpbGQuY2hpbGRTdGF0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2tGdW5jdGlvbiA9IChrZXksIG5ld1N0YXRlKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGVzW2tleV0gPSBuZXdTdGF0ZTtcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG5ld1N0YXRlcylcbiAgfTtcblxuICBzZXRMYXllckZpbHRlcigpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCIpLnZhbCgpIHx8IFwiXCI7IC8vZmFsbGJhY2tcbiAgICB0aGlzLnNldFN0YXRlKHtsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllciwgc3RhdGUgPSB7fSwgZGlnRGVlcGVyID0gdHJ1ZSkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgaWYgKGxheWVyICYmIGxheWVyLm5hbWUgJiYgKGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgICAgfHwgbGF5ZXIubmFtZS50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpIHtcbiAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobGF5ZXIudGFncyAmJiBsYXllci50YWdzLmZpbmQoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMX0pKXtcbiAgICAgIHNob3cgPSB0cnVlXG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlnRGVlcGVyKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyLmNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXIuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpICYmICFzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLmNoaWxkc1tjaGlsZElkXSwgc3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0pO1xuICAgICAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc2hvdyAmJiBzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG93O1xuICB9XG5cbiAgdG9nZ2xlQWxsTGF5ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFzY29wZS5idXR0b25FbmFibGVkKSB7XG4gICAgICBzdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2soc3RhdGVzKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzICYmIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMubGVuZ3RoID4gMCAmJiAhKHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgJiYgdGhpcy5pbml0aWFsQ291bnRlck9uKSkge1xuICAgICAgdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbGV0IGxheWVycywgc3RhdGVzLCBmaWx0ZXI7XG4gICAgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCJ9IHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5zZXRMYXllckZpbHRlcn0gcGxhY2Vob2xkZXI9e1wiXFx1ZjAwMlwifS8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuYnV0dG9uKSB7XG4gICAgICBoZWFkbGluZSA9IDxhIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWhlYWRsaW5lLWxpbmsgXCIgKyAodGhpcy5idXR0b25FbmFibGVkID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnRvZ2dsZUFsbExheWVyc30+e3RoaXMucHJvcHMuaGVhZGxpbmUgfHwgdGhpcy5wcm9wcy5sYW5nLkxBWUVSU1dJVENIRVJfVE9HR0xFX0FMTH08L2E+O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkbGluZSA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGVudEhlYWRsaW5lXCI+e3RoaXMucHJvcHMuaGVhZGxpbmV9PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2hlYWRsaW5lfVxuICAgICAge2ZpbHRlcn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1jb250ZW50LWxheWVydHJlZVwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTEFZRVJUUkVFfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bGF5ZXJzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLCBzdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5jYWxsYmFja0Z1bmN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnN0YXRlLmxheWVyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlcn0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJCT0FSRDtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyA9IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzaXplRnVuY3Rpb24gPSB0aGlzLnJlc2l6ZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uID0gdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbi5iaW5kKHRoaXMpO1xuICAgIC8vIHN0YXRlIHZhcmlhYmxlcyAoZXZlcnkgcHJvcGVydHkgdGhhdCBoYXMgaW5mbHVlbmNlIG9uIHRoaXMgY29tcG9uZW50KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInJpZ2h0XCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBhY3RpdmVUYWI6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHNldEFjdGl2ZVRhYihpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IGlkeH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBtYXBEYXRhID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIGxldCBidXR0b25Td2l0Y2hlciA9IFwiXCI7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHJlZ3VsYXJCdXR0b24gPSA8YnV0dG9uIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUn0gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXJcIn0gb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKDApfX0vPjtcbiAgICAgIGJ1dHRvbnMucHVzaChyZWd1bGFyQnV0dG9uKTtcbiAgICAgIGJ1dHRvbnMucHVzaCh0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaWNvbkNvZGUgPSBlbGVtZW50LmF3ZXNvbWVJY29uO1xuICAgICAgICAgIHNjb3BlLmNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCk7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gdGl0bGU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSl9fS8+O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGJ1dHRvblN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1zd2l0Y2hlclwifT5cbiAgICAgICAge2J1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgbGV0IHRhYnMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3Njb3BlLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17c2NvcGUucHJvcHMudGFiTGF5ZXJzW2luZGV4XX0gcGFyZW50Q2FsbGJhY2s9e3Njb3BlLnByb3BzLnRhYkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c2NvcGUucHJvcHMudGFiU3RhdGVzfSBvcGVuZnVuYz17c2NvcGUub3Blbn0gaGVhZGxpbmU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2NvcGUuc3RhdGUub3Blbn0gYWN0aXZlPXsoaW5kZXggKyAxKSA9PT0gc2NvcGUuc3RhdGUuYWN0aXZlVGFifS8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfV1JBUFBFUn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0hFQURMSU5FfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e21hcERhdGEuc3RhcmJvYXJkLmxhYmVsIHx8IHRoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkR9IGNsb3NlQnRuQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ0xPU0V9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2J1dHRvblN3aXRjaGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUn0+XG4gICAgICAgICAgPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IG1hcENvbnRyb2xsZXIgPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXt0aGlzLnByb3BzLm9iakxheWVyc30gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gcGFyZW50Q2FsbGJhY2s9e3RoaXMucHJvcHMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzfSBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9IG9wZW5mdW5jPXt0aGlzLm9wZW59IGhlYWRsaW5lPXttYXBEYXRhLmxheWVyc3dpdGNoZXIubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gYWN0aXZlPXtzY29wZS5zdGF0ZS5hY3RpdmVUYWIgPT09IDB9Lz5cbiAgICAgICAgICB7dGFic31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpIHtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgLy8gd2Via2l0IGhhY2s6XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoXCJidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXggKyBcIjpiZWZvcmUge1xcblwiICtcbiAgICAgIFwiICBjb250ZW50OiBcXFwiXFxcXFwiICsgaWNvbkNvZGUgKyBcIlxcXCI7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cIiArXG4gICAgICBcIn1cIilcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSwgKCkgPT4gdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSk7XG4gIH1cblxuICByZXNpemVGdW5jdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBlbnRlckV2ZW50IChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgbGV0IHN0eWxlVHJpZ2dlckxhYmVsID0gbnVsbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICBsZXQgc3R5bDByID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGxldCB0b29sdGlwID0gdGhpcy5wcm9wcy50b29sdGlwIHx8IFwiXCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWNvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaWNvblNyYztcbiAgICAgICAgICAgIGlmICgoc3R5bGVEYXRhLmljb25fc3JjICYmIHN0eWxlRGF0YS5pY29uX3NyYy5pbmRleE9mKCcuJykgIT09IC0xKSB8fCAoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuc3ZnU3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLmljb25fc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtpY29uU3JjfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19IC8+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsMHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVJbWFnZSA9IHN0eWwwci5nZXRJbWFnZSAmJiB0eXBlb2Ygc3R5bDByLmdldEltYWdlID09PSBcImZ1bmN0aW9uXCIgJiYgc3R5bDByLmdldEltYWdlKCkgPyBzdHlsMHIuZ2V0SW1hZ2UoKTogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVJbWFnZSAmJiBzdHlsZUltYWdlLmdldFNyYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtzdHlsZUltYWdlLmdldFNyYygpfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIHRhYkluZGV4PXsxfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMuZW50ZXJFdmVudChldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHsgLy8gJ3BvaW50JywgJ3NxdWFyZScsICdzdGFyJywgJ3gnLCAnY3Jvc3MnLCAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1RBUjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1g7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb2xvciwgYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBpZiAoc3R5bDByICYmIHN0eWwwci5nZXRGaWxsKCkgJiYgc3R5bDByLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBzdHlsMHIuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSBzdHlsMHIuZ2V0U3Ryb2tlKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvclswXSwgc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0eWxlRWxlbWVudHMgPSB7XG4gICAgICAgICAgICAgICAgXCItLXZhci1jb2xvclwiIDogY29sb3IsXG4gICAgICAgICAgICAgICAgXCItLXZhci1ib3JkZXJjb2xvclwiIDogYm9yZGVyY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkM0Z1N0YXJib2FyZExheWVyRWxlbWVudCIsInByb3BzIiwic2NvcGUiLCJsYXllckNsaWNrIiwiYmluZCIsImxheWVyWm9vbVRvIiwic3BhbkNsaWNrIiwiY2hhbmdlQ29sbGFwc2VTdGF0ZSIsInBhcmVudENhbGxiYWNrIiwic2hvd0VsZW1lbnRzIiwiZmVhdHVyZXMiLCJ2ZWN0b3JMYXllciIsIkFycmF5IiwiaXNBcnJheSIsIlZlY3RvciIsImxheWVyIiwibGF5ZXJDb250cm9sbGVyIiwibWFwQ29udHJvbGxlciIsInByb3h5IiwibGVuZ3RoIiwic2hvdyIsImxvYWRlciIsImlkIiwic2V0TGF5ZXJTdGF0ZVdpdGhJZCIsImhpZGVFbGVtZW50cyIsImhpZGUiLCJjaGlsZCIsImNoaWxkU3RhdGUiLCJhY3RpdmUiLCJzaG93TGF5ZXIiLCJoaWRlTGF5ZXIiLCJjaGlsZHMiLCJjaGlsZElkIiwiaGFzT3duUHJvcGVydHkiLCJjdXJyZW50Q2hpbGRTdGF0ZSIsImNoaWxkU3RhdGVzIiwiY2hhbmdlQ2hpbGRTdGF0ZSIsImtleSIsIm5ld0NoaWxkU3RhdGUiLCJuZXdTdGF0ZSIsImxheWVyU3RhdGVzIiwia2V5SWQiLCJlIiwid2hpY2giLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImlnbm9yZUNoaWxkcyIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzEiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzIiLCJsYXllckVudGVyIiwibGF5ZXJab29tVG9FbnRlciIsInNwYW4iLCJTVEFSQk9BUkRfRUxFTUVOVF9DSElMRFMiLCJJQ09OIiwibWFwIiwiaXRlbSIsImJ5UGFzc0NoaWxkcyIsImZpbHRlckZ1bmMiLCJzdHJGaWx0ZXIiLCJmblJlc2l6ZSIsIkNvbXBvbmVudCIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwibmV3U3RhdGVzIiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJpbml0aWFsaXplZCIsImxheWVyRmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJqUXVlcnkiLCJ2YWwiLCJzZXRTdGF0ZSIsImRpZ0RlZXBlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwidGFncyIsImZpbmQiLCJlbGVtZW50Iiwic3RhdGVzIiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImdldEluaXRpYWxTdGF0ZXMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiY2FsbGJhY2tGdW5jdGlvbiIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJ0aXRsZSIsIkNUUkxfU1RBUkJPQVJEIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImFkZENvbnRyb2wiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImlkeCIsIm1hcERhdGEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInNldEFjdGl2ZVRhYiIsInB1c2giLCJpbmRleCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9IRUFETElORSIsImxhYmVsIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkM0Z1N0YXJib2FyZFN0eWxlIiwiY2xpY2tFdmVudCIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVJZCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJ0b29sdGlwIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwic3ZnU3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZUltYWdlIiwiZ2V0SW1hZ2UiLCJnZXRTcmMiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJlbnRlckV2ZW50IiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==