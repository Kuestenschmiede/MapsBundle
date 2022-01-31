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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBOzs7OztBQUVYLG9DQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLGlEQUFYO0FBRUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixnREFBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLGdEQUFuQjtBQUNBLFVBQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRixJQUFmLGdEQUFqQjtBQUNBLFVBQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCSCxJQUF6QixnREFBM0I7QUFDQSxVQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLGdEQUF0QjtBQVJpQjtBQVNsQjs7OztXQUdELHFCQUErQjtBQUFBLFVBQXJCSyxZQUFxQix1RUFBTixJQUFNO0FBQzdCLFVBQU1QLEtBQUssR0FBRyxJQUFkO0FBQ0EsVUFBSVEsUUFBUSxHQUFHLEtBQWY7QUFDQSxVQUFJQyxXQUFXLEdBQUcsS0FBbEI7O0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUNoQixZQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osWUFBZCxDQUFKLEVBQWlDO0FBQy9CQyxVQUFBQSxRQUFRLEdBQUdELFlBQVg7QUFDRCxTQUZELE1BRU8sSUFBSUEsWUFBWSxZQUFZSyxhQUE1QixFQUFvQztBQUN6Q0gsVUFBQUEsV0FBVyxHQUFHRixZQUFkO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTEMsUUFBQUEsUUFBUSxHQUFHQSxRQUFRLElBQUlSLEtBQUssQ0FBQ0Qs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QUFmLEVBQTJCO0FBQ3ZCQyxVQUFBQSxpQkFBaUIsZ0JBQUc7QUFBTSxxQkFBUyxFQUFFbkksUUFBakI7QUFBMkIsaUJBQUssRUFBRXVLLGFBQWxDO0FBQWlELGlCQUFLLEVBQUUxQixPQUF4RDtBQUFpRSxxQkFBUyxFQUFFLG1CQUFDOUksS0FBRDtBQUFBLHFCQUFVLEtBQUksQ0FBQ3BFLEtBQUwsQ0FBV3VNLFVBQVgsQ0FBc0JuSSxLQUF0QixDQUFWO0FBQUE7QUFBNUUsWUFBcEI7QUFDSCxTQUZELE1BR0s7QUFDRG9JLFVBQUFBLGlCQUFpQixnQkFBRztBQUFNLHFCQUFTLEVBQUVuSSxRQUFqQjtBQUEyQixpQkFBSyxFQUFFdUssYUFBbEM7QUFBaUQsaUJBQUssRUFBRTFCO0FBQXhELFlBQXBCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPVixpQkFBUDtBQUNIOzs7RUEzRmtDM0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgc2hvd0xheWVyKHNob3dFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKHNob3dFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvd0VsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IHNob3dFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIHRydWUpXG4gIH1cblxuICBoaWRlTGF5ZXIoaGlkZUVsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUVsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWRlRWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChoaWRlRWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgZmFsc2UpXG4gIH1cbiAgY2hhbmdlQ2hpbGRTdGF0ZSAoY2hpbGQsIGNoaWxkU3RhdGUsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZHMgJiYgY2hpbGQuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gY2hpbGQuY2hpbGRzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShjaGlsZC5jaGlsZHNbY2hpbGRJZF0sIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKGNoaWxkU3RhdGUuaWQsIGFjdGl2ZSlcbiAgICBjaGlsZFN0YXRlLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgfVxuICBwYXJlbnRDYWxsYmFjayAoa2V5LCBuZXdDaGlsZFN0YXRlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1trZXldID0gbmV3Q2hpbGRTdGF0ZTtcbiAgICBpZiAobmV3U3RhdGUuYWN0aXZlICE9IG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAvLyBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJFbnRlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmxheWVyLmlnbm9yZUNoaWxkcykge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IG5ld1N0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyWm9vbVRvKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG4gIGxheWVyWm9vbVRvRW50ZXIoZSkge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgdGhpcy5sYXllclpvb21UbyhlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllckVudGVyKGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG9FbnRlcihldmVudCl9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9hPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgbGlua1N3aXRjaCA9IDxhIGNsYXNzTmFtZT17Y3NzQ2xhc3MgKyBcIiBjNGctc3RhcmJvYXJkLWNoZWNrYm94LWljb25cIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9PjwvYT5cbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxpbmtUZXh0ID0gPGEgdGFiSW5kZXg9ezF9IHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGFsdD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMn0gY2xhc3NOYW1lPXtjc3NDbGFzc30gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmxheWVyRW50ZXIoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+O1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9DSElMRFN9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICAgIGxpbmtTd2l0Y2ggPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZExheWVyRWxlbWVudH0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLnNldExheWVyRmlsdGVyID0gdGhpcy5zZXRMYXllckZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlQWxsTGF5ZXJzID0gdGhpcy50b2dnbGVBbGxMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICAgIC8vIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlcyA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmID0gMDtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT24gPSAwO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXNbal0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluaXRpYWxDb3VudGVyT24gPiB0aGlzLmluaXRpYWxDb3VudGVyT2ZmO1xuICB9XG4gIGdldEluaXRpYWxTdGF0ZUNoaWxkIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQoY2hpbGQuY2hpbGRTdGF0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2tGdW5jdGlvbiA9IChrZXksIG5ld1N0YXRlKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGVzW2tleV0gPSBuZXdTdGF0ZTtcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG5ld1N0YXRlcylcbiAgfTtcblxuICBzZXRMYXllckZpbHRlcigpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCIpLnZhbCgpIHx8IFwiXCI7IC8vZmFsbGJhY2tcbiAgICB0aGlzLnNldFN0YXRlKHtsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllciwgc3RhdGUgPSB7fSwgZGlnRGVlcGVyID0gdHJ1ZSkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgaWYgKGxheWVyICYmIGxheWVyLm5hbWUgJiYgKGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgICAgfHwgbGF5ZXIubmFtZS50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpIHtcbiAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobGF5ZXIudGFncyAmJiBsYXllci50YWdzLmZpbmQoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMX0pKXtcbiAgICAgIHNob3cgPSB0cnVlXG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlnRGVlcGVyKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyLmNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXIuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpICYmICFzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLmNoaWxkc1tjaGlsZElkXSwgc3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0pO1xuICAgICAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc2hvdyAmJiBzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG93O1xuICB9XG5cbiAgdG9nZ2xlQWxsTGF5ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFzY29wZS5idXR0b25FbmFibGVkKSB7XG4gICAgICBzdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2soc3RhdGVzKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzICYmIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMubGVuZ3RoID4gMCAmJiAhKHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgJiYgdGhpcy5pbml0aWFsQ291bnRlck9uKSkge1xuICAgICAgdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbGV0IGxheWVycywgc3RhdGVzLCBmaWx0ZXI7XG4gICAgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCJ9IHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5zZXRMYXllckZpbHRlcn0gcGxhY2Vob2xkZXI9e1wiXFx1ZjAwMlwifS8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuYnV0dG9uKSB7XG4gICAgICBoZWFkbGluZSA9IDxhIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWhlYWRsaW5lLWxpbmsgXCIgKyAodGhpcy5idXR0b25FbmFibGVkID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnRvZ2dsZUFsbExheWVyc30+e3RoaXMucHJvcHMuaGVhZGxpbmUgfHwgdGhpcy5wcm9wcy5sYW5nLkxBWUVSU1dJVENIRVJfVE9HR0xFX0FMTH08L2E+O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkbGluZSA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGVudEhlYWRsaW5lXCI+e3RoaXMucHJvcHMuaGVhZGxpbmV9PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2hlYWRsaW5lfVxuICAgICAge2ZpbHRlcn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1jb250ZW50LWxheWVydHJlZVwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTEFZRVJUUkVFfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bGF5ZXJzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLCBzdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5jYWxsYmFja0Z1bmN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnN0YXRlLmxheWVyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlcn0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJCT0FSRDtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyA9IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzaXplRnVuY3Rpb24gPSB0aGlzLnJlc2l6ZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uID0gdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbi5iaW5kKHRoaXMpO1xuICAgIC8vIHN0YXRlIHZhcmlhYmxlcyAoZXZlcnkgcHJvcGVydHkgdGhhdCBoYXMgaW5mbHVlbmNlIG9uIHRoaXMgY29tcG9uZW50KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInJpZ2h0XCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBhY3RpdmVUYWI6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHNldEFjdGl2ZVRhYihpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IGlkeH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBtYXBEYXRhID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIGxldCBidXR0b25Td2l0Y2hlciA9IFwiXCI7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHJlZ3VsYXJCdXR0b24gPSA8YnV0dG9uIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUn0gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXJcIn0gb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKDApfX0vPjtcbiAgICAgIGJ1dHRvbnMucHVzaChyZWd1bGFyQnV0dG9uKTtcbiAgICAgIGJ1dHRvbnMucHVzaCh0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaWNvbkNvZGUgPSBlbGVtZW50LmF3ZXNvbWVJY29uO1xuICAgICAgICAgIHNjb3BlLmNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCk7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gdGl0bGU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSl9fS8+O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGJ1dHRvblN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1zd2l0Y2hlclwifT5cbiAgICAgICAge2J1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgbGV0IHRhYnMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3Njb3BlLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17c2NvcGUucHJvcHMudGFiTGF5ZXJzW2luZGV4XX0gcGFyZW50Q2FsbGJhY2s9e3Njb3BlLnByb3BzLnRhYkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c2NvcGUucHJvcHMudGFiU3RhdGVzfSBvcGVuZnVuYz17c2NvcGUub3Blbn0gaGVhZGxpbmU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2NvcGUuc3RhdGUub3Blbn0gYWN0aXZlPXsoaW5kZXggKyAxKSA9PT0gc2NvcGUuc3RhdGUuYWN0aXZlVGFifS8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfV1JBUFBFUn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0hFQURMSU5FfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e21hcERhdGEuc3RhcmJvYXJkLmxhYmVsIHx8IHRoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkR9IGNsb3NlQnRuQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ0xPU0V9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2J1dHRvblN3aXRjaGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUn0+XG4gICAgICAgICAgPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IG1hcENvbnRyb2xsZXIgPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXt0aGlzLnByb3BzLm9iakxheWVyc30gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gcGFyZW50Q2FsbGJhY2s9e3RoaXMucHJvcHMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzfSBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9IG9wZW5mdW5jPXt0aGlzLm9wZW59IGhlYWRsaW5lPXttYXBEYXRhLmxheWVyc3dpdGNoZXIubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gYWN0aXZlPXtzY29wZS5zdGF0ZS5hY3RpdmVUYWIgPT09IDB9Lz5cbiAgICAgICAgICB7dGFic31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpIHtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgLy8gd2Via2l0IGhhY2s6XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoXCJidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXggKyBcIjpiZWZvcmUge1xcblwiICtcbiAgICAgIFwiICBjb250ZW50OiBcXFwiXFxcXFwiICsgaWNvbkNvZGUgKyBcIlxcXCI7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cIiArXG4gICAgICBcIn1cIilcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSwgKCkgPT4gdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSk7XG4gIH1cblxuICByZXNpemVGdW5jdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBlbnRlckV2ZW50IChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgbGV0IHN0eWxlVHJpZ2dlckxhYmVsID0gbnVsbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICBsZXQgc3R5bDByID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGxldCB0b29sdGlwID0gdGhpcy5wcm9wcy50b29sdGlwIHx8IFwiXCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWNvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaWNvblNyYztcbiAgICAgICAgICAgIGlmICgoc3R5bGVEYXRhLmljb25fc3JjICYmIHN0eWxlRGF0YS5pY29uX3NyYy5pbmRleE9mKCcuJykgIT09IC0xKSB8fCAoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuc3ZnU3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLmljb25fc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtpY29uU3JjfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19IC8+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsMHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVJbWFnZSA9IHN0eWwwci5nZXRJbWFnZSAmJiB0eXBlb2Ygc3R5bDByLmdldEltYWdlID09PSBcImZ1bmN0aW9uXCIgJiYgc3R5bDByLmdldEltYWdlKCkgPyBzdHlsMHIuZ2V0SW1hZ2UoKTogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVJbWFnZSAmJiBzdHlsZUltYWdlLmdldFNyYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtzdHlsZUltYWdlLmdldFNyYygpfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIHRhYkluZGV4PXsxfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMuZW50ZXJFdmVudChldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHsgLy8gJ3BvaW50JywgJ3NxdWFyZScsICdzdGFyJywgJ3gnLCAnY3Jvc3MnLCAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1RBUjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1g7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb2xvciwgYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBpZiAoc3R5bDByICYmIHN0eWwwci5nZXRGaWxsKCkgJiYgc3R5bDByLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBzdHlsMHIuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSBzdHlsMHIuZ2V0U3Ryb2tlKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvclswXSwgc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0eWxlRWxlbWVudHMgPSB7XG4gICAgICAgICAgICAgICAgXCItLXZhci1jb2xvclwiIDogY29sb3IsXG4gICAgICAgICAgICAgICAgXCItLXZhci1ib3JkZXJjb2xvclwiIDogYm9yZGVyY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkM0Z1N0YXJib2FyZExheWVyRWxlbWVudCIsInByb3BzIiwic2NvcGUiLCJsYXllckNsaWNrIiwiYmluZCIsImxheWVyWm9vbVRvIiwic3BhbkNsaWNrIiwiY2hhbmdlQ29sbGFwc2VTdGF0ZSIsInBhcmVudENhbGxiYWNrIiwic2hvd0VsZW1lbnRzIiwiZmVhdHVyZXMiLCJ2ZWN0b3JMYXllciIsIkFycmF5IiwiaXNBcnJheSIsIlZlY3RvciIsImxheWVyIiwibGF5ZXJDb250cm9sbGVyIiwibWFwQ29udHJvbGxlciIsInByb3h5IiwibGVuZ3RoIiwic2hvdyIsImxvYWRlciIsImlkIiwic2V0TGF5ZXJTdGF0ZVdpdGhJZCIsImhpZGVFbGVtZW50cyIsImhpZGUiLCJjaGlsZCIsImNoaWxkU3RhdGUiLCJhY3RpdmUiLCJzaG93TGF5ZXIiLCJoaWRlTGF5ZXIiLCJjaGlsZHMiLCJjaGlsZElkIiwiaGFzT3duUHJvcGVydHkiLCJjdXJyZW50Q2hpbGRTdGF0ZSIsImNoaWxkU3RhdGVzIiwiY2hhbmdlQ2hpbGRTdGF0ZSIsImtleSIsIm5ld0NoaWxkU3RhdGUiLCJuZXdTdGF0ZSIsImxheWVyU3RhdGVzIiwia2V5SWQiLCJlIiwid2hpY2giLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImlnbm9yZUNoaWxkcyIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzEiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzIiLCJsYXllckVudGVyIiwibGF5ZXJab29tVG9FbnRlciIsInNwYW4iLCJTVEFSQk9BUkRfRUxFTUVOVF9DSElMRFMiLCJJQ09OIiwibWFwIiwiaXRlbSIsImJ5UGFzc0NoaWxkcyIsImZpbHRlckZ1bmMiLCJzdHJGaWx0ZXIiLCJmblJlc2l6ZSIsIkNvbXBvbmVudCIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwibmV3U3RhdGVzIiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJpbml0aWFsaXplZCIsImxheWVyRmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJqUXVlcnkiLCJ2YWwiLCJzZXRTdGF0ZSIsImRpZ0RlZXBlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwidGFncyIsImZpbmQiLCJlbGVtZW50Iiwic3RhdGVzIiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImdldEluaXRpYWxTdGF0ZXMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiY2FsbGJhY2tGdW5jdGlvbiIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwidGl0bGUiLCJDVFJMX1NUQVJCT0FSRCIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwib24iLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJhZGRDb250cm9sIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInJlc2l6ZUZ1bmN0aW9uIiwiY3JlYXRlU3R5bGluZ0Zvckljb24iLCJkaXJlY3Rpb24iLCJhY3RpdmVUYWIiLCJpZHgiLCJtYXBEYXRhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJ1dHRvblN3aXRjaGVyIiwiYnV0dG9ucyIsInRhYkxheWVycyIsInJlZ3VsYXJCdXR0b24iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJzZXRBY3RpdmVUYWIiLCJwdXNoIiwiaW5kZXgiLCJpY29uQ29kZSIsImF3ZXNvbWVJY29uIiwidGFicyIsInRhYkNhbGxiYWNrIiwidGFiU3RhdGVzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJsYWJlbCIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsInN0eWxlIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwic3R5bGVTaGVldCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInNldE9wZW5Db21wb25lbnQiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJDNGdTdGFyYm9hcmRTdHlsZSIsImNsaWNrRXZlbnQiLCJzdHlsZVRyaWdnZXJMYWJlbCIsInN0eWxlSWQiLCJsb2NTdHlsZUFyciIsInN0eWxvciIsIkZlYXR1cmUiLCJnZW9tZXRyeSIsIlBvaW50Iiwic3R5bDByIiwic3R5bGVUeXBlIiwic3R5bGV0eXBlIiwidG9vbHRpcCIsInN0eWxlSWNvbiIsImljb25TcmMiLCJpY29uX3NyYyIsInN2Z1NyYyIsImhlaWdodCIsIndpZHRoIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwiZW50ZXJFdmVudCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkUiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1RBUiIsIlNUQVJCT0FSRF9MT0NTVFlMRV9YIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFIiwiY29sb3IiLCJib3JkZXJjb2xvciIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJnZXRDb2xvciIsImZpbGxjb2xvciIsInN0cm9rZWNvbG9yIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5Iiwic3R5bGVFbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=