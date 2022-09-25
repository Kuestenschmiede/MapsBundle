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

        if (this.props.layerStates.collapsed) {
          var layerState = this.props.layerStates;
          layerState.collapsed = false;
          this.props.changeCollapseState(this.props.keyId, layerState);
        }
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
          "data-layer-id": this.props.id,
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
          "data-layer-id": this.props.id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBOzs7OztFQUVYLGtDQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFDQSxJQUFNQyxLQUFLLGlEQUFYO0lBRUEsTUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixnREFBbEI7SUFDQSxNQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLGdEQUFuQjtJQUNBLE1BQUtFLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRixJQUFmLGdEQUFqQjtJQUNBLE1BQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCSCxJQUF6QixnREFBM0I7SUFDQSxNQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLGdEQUF0QjtJQVJpQjtFQVNsQjs7OztXQUdELHFCQUErQjtNQUFBLElBQXJCSyxZQUFxQix1RUFBTixJQUFNO01BQzdCLElBQU1QLEtBQUssR0FBRyxJQUFkO01BQ0EsSUFBSVEsUUFBUSxHQUFHLEtBQWY7TUFDQSxJQUFJQyxXQUFXLEdBQUcsS0FBbEI7O01BQ0EsSUFBSUYsWUFBSixFQUFrQjtRQUNoQixJQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osWUFBZCxDQUFKLEVBQWlDO1VBQy9CQyxRQUFRLEdBQUdELFlBQVg7UUFDRCxDQUZELE1BRU8sSUFBSUEsWUFBWSxZQUFZSyxhQUE1QixFQUFvQztVQUN6Q0gsV0FBVyxHQUFHRixZQUFkO1FBQ0Q7TUFDRixDQU5ELE1BTU87UUFDTEMsUUFBUSxHQUFHQSxRQUFRLElBQUlSLEtBQUssQ0FBQ0QsS0FBTixDQUFZYyxLQUFaLENB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QUFQLEdBQW1CQyxRQUFuQixFQUFkO1FBQ0gsQ0FIRCxNQUlLLElBQUk1SyxTQUFTLElBQUlBLFNBQVMsQ0FBQzZLLFNBQXZCLElBQW9DN0ssU0FBUyxDQUFDOEssV0FBbEQsRUFBK0Q7VUFDaEVOLEtBQUssR0FBR2xDLG1CQUFBLENBQU15Qyx3QkFBTixDQUErQi9LLFNBQVMsQ0FBQzZLLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBL0IsRUFBdUQ3SyxTQUFTLENBQUM2SyxTQUFWLENBQW9CLENBQXBCLENBQXZELENBQVI7VUFDQUosV0FBVyxHQUFHbkMsbUJBQUEsQ0FBTXlDLHdCQUFOLENBQStCL0ssU0FBUyxDQUFDOEssV0FBVixDQUFzQixDQUF0QixDQUEvQixFQUF5RDlLLFNBQVMsQ0FBQzhLLFdBQVYsQ0FBc0IsQ0FBdEIsQ0FBekQsQ0FBZDtRQUNIOztRQUNELElBQUlFLGFBQWEsR0FBRztVQUNoQixlQUFnQlIsS0FEQTtVQUVoQixxQkFBc0JDO1FBRk4sQ0FBcEI7O1FBSUEsSUFBSSxLQUFLdk8sS0FBTCxDQUFXeU0sVUFBZixFQUEyQjtVQUN2QkMsaUJBQWlCLGdCQUFHO1lBQU0sU0FBUyxFQUFFcEksUUFBakI7WUFBMkIsS0FBSyxFQUFFd0ssYUFBbEM7WUFBaUQsS0FBSyxFQUFFMUIsT0FBeEQ7WUFBaUUsU0FBUyxFQUFFLG1CQUFDL0ksS0FBRDtjQUFBLE9BQVUsS0FBSSxDQUFDckUsS0FBTCxDQUFXeU0sVUFBWCxDQUFzQnBJLEtBQXRCLENBQVY7WUFBQTtVQUE1RSxFQUFwQjtRQUNILENBRkQsTUFHSztVQUNEcUksaUJBQWlCLGdCQUFHO1lBQU0sU0FBUyxFQUFFcEksUUFBakI7WUFBMkIsS0FBSyxFQUFFd0ssYUFBbEM7WUFBaUQsS0FBSyxFQUFFMUI7VUFBeEQsRUFBcEI7UUFDSDtNQUNKOztNQUNELE9BQU9WLGlCQUFQO0lBQ0g7OztFQTNGa0M1RyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIG9sRXh0ZW50IGZyb20gXCJvbC9leHRlbnRcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRTdHlsZX0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1zdHlsZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuXG5leHBvcnQgY2xhc3MgQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLmxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmxheWVyWm9vbVRvID0gdGhpcy5sYXllclpvb21Uby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3BhbkNsaWNrID0gdGhpcy5zcGFuQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmVudENhbGxiYWNrID0gdGhpcy5wYXJlbnRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBzaG93TGF5ZXIoc2hvd0VsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoc2hvd0VsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzaG93RWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChzaG93RWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBzaG93RWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcyxzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmICh2ZWN0b3JMYXllcil7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGVMYXllcihoaWRlRWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChoaWRlRWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpZGVFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKGhpZGVFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IGhpZGVFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcywgc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCBmYWxzZSlcbiAgfVxuICBjaGFuZ2VDaGlsZFN0YXRlIChjaGlsZCwgY2hpbGRTdGF0ZSwgYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkcyAmJiBjaGlsZC5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBjaGlsZC5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGNoaWxkLmNoaWxkc1tjaGlsZElkXSwgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgYWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoY2hpbGRTdGF0ZS5pZCwgYWN0aXZlKVxuICAgIGNoaWxkU3RhdGUuYWN0aXZlID0gYWN0aXZlO1xuICAgIHJldHVybiBjaGlsZFN0YXRlO1xuICB9XG4gIHBhcmVudENhbGxiYWNrIChrZXksIG5ld0NoaWxkU3RhdGUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2tleV0gPSBuZXdDaGlsZFN0YXRlO1xuICAgIGlmIChuZXdTdGF0ZS5hY3RpdmUgIT0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIC8vIG5ld1N0YXRlLmFjdGl2ZSA9IG5ld0NoaWxkU3RhdGUuYWN0aXZlO1xuICAgICAgaWYgKG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllckVudGVyKGUpIHtcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gIH1cbiAgbGF5ZXJDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkKSB7XG4gICAgICAgIGxldCBsYXllclN0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICAgICAgbGF5ZXJTdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIGxheWVyU3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzICYmIHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzLmxlbmd0aCA+IDAgJiYgIXRoaXMucHJvcHMubGF5ZXIuaWdub3JlQ2hpbGRzKSB7XG4gICAgICBsZXQgbGF5ZXJDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXJDaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyQ2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gbmV3U3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShsYXllckNoaWxkc1tjaGlsZElkXSwgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIG5ld1N0YXRlLmFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJab29tVG8oZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci56b29tVG8odGhpcy5wcm9wcy5sYXllcik7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbiAgbGF5ZXJab29tVG9FbnRlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICB0aGlzLmxheWVyWm9vbVRvKGUpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdID0gc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICB9XG4gIHNwYW5DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID0gIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0eWxlUGljdHVyZSA9IG51bGw7XG4gICAgbGV0IHNwYW5ab29tID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuc2hvd0xvY3N0eWxlcyA9PT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXMgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IGNsaWNrRXZlbnQ9e3RoaXMubGF5ZXJab29tVG99Lz47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0vPjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8gJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUpIHtcbiAgICAgIHNwYW5ab29tID0gPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1nZW9qc29uLWJ1dHRvblwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfS8+O1xuICAgIH1cbiAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSA/IGNzc0NvbnN0YW50cy5BQ1RJVkUgOiBjc3NDb25zdGFudHMuSU5BQ1RJVkU7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICBjc3NDbGFzcyArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ESVNBQkxFRDtcbiAgICB9XG4gICAgbGV0IG9wZW5DbG9zZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID8gY3NzQ29uc3RhbnRzLkNMT1NFIDogY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgbGV0IG9iakNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgIGxldCBsaW5rVGV4dDtcbiAgICBsZXQgbGlua1N3aXRjaDtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSAmJiB0aGlzLnByb3BzLmxheWVyLnpvb21Ubykge1xuICAgICAgbGlua1RleHQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxhIHRhYkluZGV4PXsxfSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzErdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzJ9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXRleHRcIn0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmxheWVyRW50ZXIoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21Ub0VudGVyKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICBsaW5rU3dpdGNoID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzcyArIFwiIGM0Zy1zdGFyYm9hcmQtY2hlY2tib3gtaWNvblwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PC9hPlxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGlua1RleHQgPSA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e2Nzc0NsYXNzfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJFbnRlcihldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT47XG4gICAgfVxuXG4gICAgaWYgKG9iakNoaWxkcyAmJiBvYmpDaGlsZHMubGVuZ3RoKSB7XG4gICAgICBsZXQgc3BhbiA9IDxzcGFuIGFsdD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX0NISUxEU30gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuSUNPTn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMuc3BhbkNsaWNrKGV2ZW50KX0vPjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGRhdGEtbGF5ZXItaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAge3NwYW59XG4gICAgICAgICAge3N0eWxlUGljdHVyZX1cbiAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgIHtsaW5rU3dpdGNofVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtvYmpDaGlsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5ieVBhc3NDaGlsZHMgfHwgdGhpcy5wcm9wcy5maWx0ZXJGdW5jKHRoaXMucHJvcHMuc3RyRmlsdGVyLCBpdGVtLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBrZXk9e2lkfSBrZXlJZD17aWR9IGlkPXtpdGVtLmlkfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5wcm9wcy5zdHJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLnByb3BzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2s7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJab29tVG87XG4gICAgICAgIGNzc0NsYXNzID0gXCJjNGctZ2VvanNvbi1idXR0b25cIjtcbiAgICAgICAgbGlua1N3aXRjaCA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBkYXRhLWxheWVyLWlkPXt0aGlzLnByb3BzLmlkfSB0YWJJbmRleD17MX0gY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB0b2dnbGVBbGxMYXllcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTdGFyYm9hcmRMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXJcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZC1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfSEVBRExJTkV9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICB7YnV0dG9uU3dpdGNoZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSfT5cbiAgICAgICAgICA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gbWFwQ29udHJvbGxlciA9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3RoaXMucHJvcHMub2JqTGF5ZXJzfSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBwYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXN9IGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX0gb3BlbmZ1bmM9e3RoaXMub3Blbn0gaGVhZGxpbmU9e21hcERhdGEubGF5ZXJzd2l0Y2hlci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBhY3RpdmU9e3Njb3BlLnN0YXRlLmFjdGl2ZVRhYiA9PT0gMH0vPlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCkge1xuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAvLyB3ZWJraXQgaGFjazpcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcImJ1dHRvbi5jNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleCArIFwiOmJlZm9yZSB7XFxuXCIgK1xuICAgICAgXCIgIGNvbnRlbnQ6IFxcXCJcXFxcXCIgKyBpY29uQ29kZSArIFwiXFxcIjtcXG5cIiArXG4gICAgICBcIiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG5cIiArXG4gICAgICBcIiAgZm9udC13ZWlnaHQ6IDkwMDtcXG5cIiArXG4gICAgICBcIiAgZm9udC1zaXplOiBpbmhlcml0O1xcblwiICtcbiAgICAgIFwifVwiKVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9LCAoKSA9PiB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpKTtcbiAgfVxuXG4gIHJlc2l6ZUZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICAvKipcbiAgICogVW5kb2VzIHRoZSBwcmV2aW91cyBidXR0b24gbW92ZW1lbnQuXG4gICAqL1xuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGVudGVyRXZlbnQgKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgbGV0IHRvb2x0aXAgPSB0aGlzLnByb3BzLnRvb2x0aXAgfHwgXCJcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5lbnRlckV2ZW50KGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlVHlwZSkgeyAvLyAncG9pbnQnLCAnc3F1YXJlJywgJ3N0YXInLCAneCcsICdjcm9zcycsICd0cmlhbmdsZSdcbiAgICAgICAgICAgICAgICBjYXNlIFwicG9pbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3F1YXJlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfWDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNyb3NzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbG9yLCBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGlmIChzdHlsMHIgJiYgc3R5bDByLmdldEZpbGwoKSAmJiBzdHlsMHIuZ2V0U3Ryb2tlKCkpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHN0eWwwci5nZXRGaWxsKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHN0eWwwci5nZXRTdHJva2UoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVEYXRhICYmIHN0eWxlRGF0YS5maWxsY29sb3IgJiYgc3R5bGVEYXRhLnN0cm9rZWNvbG9yKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLmZpbGxjb2xvclswXSwgc3R5bGVEYXRhLmZpbGxjb2xvclsxXSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSB1dGlscy5nZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkoc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzBdLCBzdHlsZURhdGEuc3Ryb2tlY29sb3JbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3R5bGVFbGVtZW50cyA9IHtcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWNvbG9yXCIgOiBjb2xvcixcbiAgICAgICAgICAgICAgICBcIi0tdmFyLWJvcmRlcmNvbG9yXCIgOiBib3JkZXJjb2xvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVRyaWdnZXJMYWJlbDtcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJ3aGljaCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZ3JleWVkIiwiY29sbGFwc2VkIiwibGF5ZXJTdGF0ZSIsImlnbm9yZUNoaWxkcyIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzEiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzIiLCJsYXllckVudGVyIiwibGF5ZXJab29tVG9FbnRlciIsInNwYW4iLCJTVEFSQk9BUkRfRUxFTUVOVF9DSElMRFMiLCJJQ09OIiwibWFwIiwiaXRlbSIsImJ5UGFzc0NoaWxkcyIsImZpbHRlckZ1bmMiLCJzdHJGaWx0ZXIiLCJmblJlc2l6ZSIsIkNvbXBvbmVudCIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwibmV3U3RhdGVzIiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJpbml0aWFsaXplZCIsImxheWVyRmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJqUXVlcnkiLCJ2YWwiLCJzZXRTdGF0ZSIsImRpZ0RlZXBlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwidGFncyIsImZpbmQiLCJlbGVtZW50Iiwic3RhdGVzIiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImdldEluaXRpYWxTdGF0ZXMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiY2FsbGJhY2tGdW5jdGlvbiIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJ0aXRsZSIsIkNUUkxfU1RBUkJPQVJEIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImFkZENvbnRyb2wiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImlkeCIsIm1hcERhdGEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInNldEFjdGl2ZVRhYiIsInB1c2giLCJpbmRleCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9IRUFETElORSIsImxhYmVsIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkM0Z1N0YXJib2FyZFN0eWxlIiwiY2xpY2tFdmVudCIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVJZCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJ0b29sdGlwIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwic3ZnU3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZUltYWdlIiwiZ2V0SW1hZ2UiLCJnZXRTcmMiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJlbnRlckV2ZW50IiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==