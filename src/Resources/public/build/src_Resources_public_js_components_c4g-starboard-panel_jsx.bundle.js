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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var olExtent = _interopRequireWildcard(__webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style */ "./src/Resources/public/js/components/c4g-starboard-style.jsx");
var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));
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
var C4gStarboardLayerElement = exports.C4gStarboardLayerElement = /*#__PURE__*/function (_Component) {
  function C4gStarboardLayerElement(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, C4gStarboardLayerElement);
    _this = _callSuper(this, C4gStarboardLayerElement, [props]);
    var scope = _this;
    _this.layerClick = _this.layerClick.bind(_this);
    _this.layerZoomTo = _this.layerZoomTo.bind(_this);
    _this.spanClick = _this.spanClick.bind(_this);
    _this.changeCollapseState = _this.changeCollapseState.bind(_this);
    _this.parentCallback = _this.parentCallback.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(C4gStarboardLayerElement, _Component);
  return (0, _createClass2["default"])(C4gStarboardLayerElement, [{
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
      }
      // this.props.parentCallback(this.props.keyId, newState)
    }
  }, {
    key: "layerZoomTo",
    value: function layerZoomTo(e) {
      var _this2 = this;
      if (!this.props.layerStates.active) {
        this.layerClick(e);
      }
      var boolZoomTo = this.props.mapController.proxy.layerController.zoomTo(this.props.layer);
      if (boolZoomTo) {
        this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer, "markLocstyle", true);
        window.setTimeout(function () {
          _this2.props.mapController.proxy.layerController.setChildFeatureFlag(_this2.props.layer, "markLocstyle", false);
        }, 3000);
      }
      if (this.props.mapController.proxy.mapData.starboard.openPopup) {
        var feature, layer;
        if (this.props.layer.popup) {
          feature = new _Feature["default"]();
          layer = new _layer.Vector();
          feature.set('popup', this.props.layer.popup);
        } else if (this.props.layer.features && this.props.layer.features.length === 1) {
          layer = new _layer.Vector();
          feature = this.props.layer.features[0];
        }
        this.props.mapController.proxy.handlePopup(feature, layer);
      }
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
        }), /*#__PURE__*/_react["default"].createElement("span", {
          className: "c4g-starboard-list-element__text"
        }, this.props.layer.name)));
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
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: "c4g-starboard-list-element__text"
        }, this.props.layer.name));
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
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gStarboardLayerElement = __webpack_require__(/*! ./c4g-starboard-layer-element */ "./src/Resources/public/js/components/c4g-starboard-layer-element.jsx");
var _structuredClone = _interopRequireDefault(__webpack_require__(/*! @ungap/structured-clone */ "./node_modules/@ungap/structured-clone/cjs/index.js"));
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
var StarboardLayerswitcher = exports.StarboardLayerswitcher = /*#__PURE__*/function (_Component) {
  function StarboardLayerswitcher(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StarboardLayerswitcher);
    _this = _callSuper(this, StarboardLayerswitcher, [props]);
    (0, _defineProperty2["default"])(_this, "getInitialStates", function () {
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
    (0, _defineProperty2["default"])(_this, "callbackFunction", function (key, newState) {
      var newStates = _this.props.layerStates;
      newStates[key] = newState;
      _this.props.parentCallback(newStates);
    });
    var scope = _this;
    var index = props.mapController.arrComponents.findIndex(function (element) {
      return element.name === "layerswitcher";
    });
    props.mapController.arrComponents[index].component = _this;
    _this.setLayerFilter = _this.setLayerFilter.bind(_this);
    _this.toggleAllLayers = _this.toggleAllLayers.bind(_this);
    _this.toggleSpecificLayers = _this.toggleSpecificLayers.bind(_this);
    _this.changeCollapseState = _this.changeCollapseState.bind(_this);
    _this.states = {};
    _this.state = {
      initialized: false,
      layerFilter: ""
    };
    // this.buttonEnabled = this.getInitialStates();
    return _this;
  }
  (0, _inherits2["default"])(StarboardLayerswitcher, _Component);
  return (0, _createClass2["default"])(StarboardLayerswitcher, [{
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
    key: "applyOldState",
    value: function applyOldState(context) {
      var scope = this;
      var layers = this.props.objLayers;
      var states = this.props.layerStates;
      var oldStates = this.states[context];
      function handleLayers(layers, states, oldStates) {
        for (var i = 0; i < states.length; i++) {
          if (states[i].active !== oldStates[i].active) {
            if (oldStates[i].active) {
              scope.props.mapController.proxy.layerController.show(layers[i].loader, layers[i].features || layers[i].vectorLayer);
            } else {
              scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].features || layers[i].vectorLayer);
            }
          }
          if (states[i].childStates && states[i].childStates.length > 0) {
            handleLayers(layers[i].childs, states[i].childStates, oldStates[i].childStates);
          }
        }
      }
      handleLayers(layers, states, oldStates);
      this.props.parentCallback(oldStates);
    }
  }, {
    key: "toggleSpecificLayers",
    value: function toggleSpecificLayers(ids) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var scope = this;
      var layers = this.props.objLayers;
      var states = this.props.layerStates;
      if (context) {
        this.states[context] = (0, _structuredClone["default"])(states);
      }
      function activateSpecificLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          if (ids.includes(layers[i].id)) {
            if (!states[i].active) {
              scope.props.mapController.proxy.layerController.show(layers[i].loader, layers[i].features || layers[i].vectorLayer);
            }
            states[i].active = true;
          } else {
            if (states[i].active) {
              scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].features || layers[i].vectorLayer);
            }
            states[i].active = false;
          }
          if (states[i].childStates && states[i].childStates.length > 0) {
            states[i].childStates = activateSpecificLayers(layers[i].childs, states[i].childStates);
          }
        }
        return states;
      }
      states = activateSpecificLayers(layers, states);
      this.props.parentCallback(states);
    }
  }, {
    key: "toggleAllLayers",
    value: function toggleAllLayers() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scope = this;
      var states = this.props.layerStates;
      var layers = this.props.objLayers;
      if (context) {
        this.states[context] = (0, _structuredClone["default"])(states);
      }
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
            if (layers[i].vectorLayer || layers[i].loader) {
              scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].vectorLayer);
            }
          }
          states[i].active = false;
          if (states[i].childStates && states[i].childStates.length > 0) {
            states[i].childStates = deactivateLayers(layers[i].childs, states[i].childStates);
          }
        }
        scope.buttonEnabled = false;
        return states;
      }
      if (scope.buttonEnabled) {
        scope.props.mapController.map.getView().dispatchEvent({
          type: "change:resolution"
        });
        scope.props.mapController.proxy.layerController.vectorCollection.clear();
        states = deactivateLayers(layers, states);
      } else {
        states = activateLayers(layers, states);
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
        this.states.initial = (0, _structuredClone["default"])(this.props.layerStates);
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
        var placeholder = this.props.mapController.data.layerswitcher.filter_placeholder || "\uF002";
        filter = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-starboard-layertree-filter without-button"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "c4g-starboard-layertree-filter-field",
          type: "text",
          onInput: this.setLayerFilter,
          placeholder: placeholder
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
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gStarboardLayerswitcher = __webpack_require__(/*! ./c4g-starboard-layerswitcher */ "./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var StarboardPanel = exports["default"] = /*#__PURE__*/function (_Component) {
  function StarboardPanel(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StarboardPanel);
    _this = _callSuper(this, StarboardPanel, [props]);
    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    element.className = "c4g-starboard-control ol-unselectable ol-control ";
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_STARBOARD;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.CTRL_STARBOARD;
    }
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
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "layerswitcher";
    });
    mapController.arrComponents[index].control = control;
    mapController.mapsControls.controls.horizontalPanel = control;
    _this.open = _this.open.bind(_this);
    _this.slideOutCollidingElements = _this.slideOutCollidingElements.bind(_this);
    _this.resizeFunction = _this.resizeFunction.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.createStylingForIcon = _this.createStylingForIcon.bind(_this);
    // state variables (every property that has influence on this component)
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
  (0, _inherits2["default"])(StarboardPanel, _Component);
  return (0, _createClass2["default"])(StarboardPanel, [{
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
      var style = document.createElement("style");
      // webkit hack:
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
      if (this.props.mapController.data.caching) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "StarboardPanel" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "StarboardPanel" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "StarboardPanel");
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
}(_react.Component);

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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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
var C4gStarboardStyle = exports.C4gStarboardStyle = /*#__PURE__*/function (_Component) {
  function C4gStarboardStyle(props) {
    (0, _classCallCheck2["default"])(this, C4gStarboardStyle);
    return _callSuper(this, C4gStarboardStyle, [props]);
  }
  (0, _inherits2["default"])(C4gStarboardStyle, _Component);
  return (0, _createClass2["default"])(C4gStarboardStyle, [{
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
}(_react.Component);

/***/ }),

/***/ "./node_modules/@ungap/structured-clone/cjs/deserialize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/deserialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const {
  VOID, PRIMITIVE, ARRAY, OBJECT, DATE, REGEXP, MAP, SET, ERROR, BIGINT
} = __webpack_require__(/*! ./types.js */ "./node_modules/@ungap/structured-clone/cjs/types.js");

const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);
exports.deserialize = deserialize;


/***/ }),

/***/ "./node_modules/@ungap/structured-clone/cjs/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const {deserialize} = __webpack_require__(/*! ./deserialize.js */ "./node_modules/@ungap/structured-clone/cjs/deserialize.js");
const {serialize} = __webpack_require__(/*! ./serialize.js */ "./node_modules/@ungap/structured-clone/cjs/serialize.js");

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} any a serializable value.
 * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with
 * a transfer option (ignored when polyfilled) and/or non standard fields that
 * fallback to the polyfill if present.
 * @returns {Record[]}
 */
Object.defineProperty(exports, '__esModule', {value: true}).default = typeof structuredClone === "function" ?
  /* c8 ignore start */
  (any, options) => (
    options && ('json' in options || 'lossy' in options) ?
      deserialize(serialize(any, options)) : structuredClone(any)
  ) :
  (any, options) => deserialize(serialize(any, options));
  /* c8 ignore stop */

exports.deserialize = deserialize;
exports.serialize = serialize;


/***/ }),

/***/ "./node_modules/@ungap/structured-clone/cjs/serialize.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/serialize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const {
  VOID, PRIMITIVE, ARRAY, OBJECT, DATE, REGEXP, MAP, SET, ERROR, BIGINT
} = __webpack_require__(/*! ./types.js */ "./node_modules/@ungap/structured-clone/cjs/types.js");

const EMPTY = '';

const {toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [PRIMITIVE, type];

  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
  }

  if (asString.includes('Array'))
    return [ARRAY, asString];

  if (asString.includes('Error'))
    return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
          case 'undefined':
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type)
          return as([type, [...value]], value);
  
        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};
exports.serialize = serialize;


/***/ }),

/***/ "./node_modules/@ungap/structured-clone/cjs/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


const VOID       = -1;
exports.VOID = VOID;
const PRIMITIVE  = 0;
exports.PRIMITIVE = PRIMITIVE;
const ARRAY      = 1;
exports.ARRAY = ARRAY;
const OBJECT     = 2;
exports.OBJECT = OBJECT;
const DATE       = 3;
exports.DATE = DATE;
const REGEXP     = 4;
exports.REGEXP = REGEXP;
const MAP        = 5;
exports.MAP = MAP;
const SET        = 6;
exports.SET = SET;
const ERROR      = 7;
exports.ERROR = ERROR;
const BIGINT     = 8;
exports.BIGINT = BIGINT;
// export const SYMBOL = 9;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRix1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxNQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssUUFBQSxHQUFBQyxzQkFBQSxDQUFBTixtQkFBQTtBQUFpQyxTQUFBTyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVQsd0JBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FB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O0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxnQ0FBZ0MsR0FBRztBQUMvQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLGFBQWEsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDL0pKO0FBQ2I7QUFDQSxZQUFZO0FBQ1o7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxZQUFZO0FBQ1o7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxhQUFhO0FBQ2I7QUFDQSxjQUFjO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvZGVzZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvc2VyaWFsaXplLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvY2pzL3R5cGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgc2hvd0xheWVyKHNob3dFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKHNob3dFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvd0VsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IHNob3dFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIHRydWUpXG4gIH1cblxuICBoaWRlTGF5ZXIoaGlkZUVsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUVsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWRlRWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChoaWRlRWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgZmFsc2UpXG4gIH1cbiAgY2hhbmdlQ2hpbGRTdGF0ZSAoY2hpbGQsIGNoaWxkU3RhdGUsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZHMgJiYgY2hpbGQuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gY2hpbGQuY2hpbGRzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShjaGlsZC5jaGlsZHNbY2hpbGRJZF0sIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKGNoaWxkU3RhdGUuaWQsIGFjdGl2ZSlcbiAgICBjaGlsZFN0YXRlLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgfVxuICBwYXJlbnRDYWxsYmFjayAoa2V5LCBuZXdDaGlsZFN0YXRlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1trZXldID0gbmV3Q2hpbGRTdGF0ZTtcbiAgICBpZiAobmV3U3RhdGUuYWN0aXZlICE9IG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAvLyBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJFbnRlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCkge1xuICAgICAgICBsZXQgbGF5ZXJTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgICAgIGxheWVyU3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCBsYXllclN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmxheWVyLmlnbm9yZUNoaWxkcykge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IG5ld1N0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyWm9vbVRvKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICAgIGxldCBib29sWm9vbVRvID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci56b29tVG8odGhpcy5wcm9wcy5sYXllcik7XG4gICAgaWYgKGJvb2xab29tVG8pIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIGZhbHNlKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5Lm1hcERhdGEuc3RhcmJvYXJkLm9wZW5Qb3B1cCkge1xuICAgICAgbGV0IGZlYXR1cmUsIGxheWVyO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIucG9wdXApIHtcbiAgICAgICAgZmVhdHVyZSA9IG5ldyBGZWF0dXJlKCk7XG4gICAgICAgIGxheWVyID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBmZWF0dXJlLnNldCgncG9wdXAnLHRoaXMucHJvcHMubGF5ZXIucG9wdXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5sYXllci5mZWF0dXJlcyAmJiB0aGlzLnByb3BzLmxheWVyLmZlYXR1cmVzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIGxheWVyID0gbmV3IFZlY3RvcigpO1xuICAgICAgICBmZWF0dXJlID0gdGhpcy5wcm9wcy5sYXllci5mZWF0dXJlc1swXTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5oYW5kbGVQb3B1cChmZWF0dXJlLCBsYXllcik7XG5cbiAgICB9XG4gIH1cbiAgbGF5ZXJab29tVG9FbnRlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICB0aGlzLmxheWVyWm9vbVRvKGUpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdID0gc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICB9XG4gIHNwYW5DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID0gIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0eWxlUGljdHVyZSA9IG51bGw7XG4gICAgbGV0IHNwYW5ab29tID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuc2hvd0xvY3N0eWxlcyA9PT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXMgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IGNsaWNrRXZlbnQ9e3RoaXMubGF5ZXJab29tVG99Lz47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0vPjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8gJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUpIHtcbiAgICAgIHNwYW5ab29tID0gPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1nZW9qc29uLWJ1dHRvblwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfS8+O1xuICAgIH1cbiAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSA/IGNzc0NvbnN0YW50cy5BQ1RJVkUgOiBjc3NDb25zdGFudHMuSU5BQ1RJVkU7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICBjc3NDbGFzcyArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ESVNBQkxFRDtcbiAgICB9XG4gICAgbGV0IG9wZW5DbG9zZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID8gY3NzQ29uc3RhbnRzLkNMT1NFIDogY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgbGV0IG9iakNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgIGxldCBsaW5rVGV4dDtcbiAgICBsZXQgbGlua1N3aXRjaDtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSAmJiB0aGlzLnByb3BzLmxheWVyLnpvb21Ubykge1xuICAgICAgbGlua1RleHQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxhIHRhYkluZGV4PXsxfSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzErdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzJ9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXRleHRcIn0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmxheWVyRW50ZXIoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21Ub0VudGVyKGV2ZW50KX0+PHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50X190ZXh0XCJ9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9zcGFuPjwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgIGxpbmtTd2l0Y2ggPSA8YSBjbGFzc05hbWU9e2Nzc0NsYXNzICsgXCIgYzRnLXN0YXJib2FyZC1jaGVja2JveC1pY29uXCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT48L2E+XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsaW5rVGV4dCA9IDxhIHRhYkluZGV4PXsxfSB0aXRsZT17dGhpcy5wcm9wcy5sYXllci5uYW1lfSBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzErdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzJ9IGNsYXNzTmFtZT17Y3NzQ2xhc3N9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllckVudGVyKGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9PjxzcGFuIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudF9fdGV4dFwifT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvc3Bhbj48L2E+O1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9DSElMRFN9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBkYXRhLWxheWVyLWlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICAgIGxpbmtTd2l0Y2ggPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgZGF0YS1sYXllci1pZD17dGhpcy5wcm9wcy5pZH0gdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZExheWVyRWxlbWVudH0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50XCI7XG5pbXBvcnQgc3RydWN0dXJlZENsb25lIGZyb20gJ0B1bmdhcC9zdHJ1Y3R1cmVkLWNsb25lJztcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaW5kZXggPSBwcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxheWVyc3dpdGNoZXJcIik7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlU3BlY2lmaWNMYXllcnMgPSB0aGlzLnRvZ2dsZVNwZWNpZmljTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICAgIC8vIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlcyA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmID0gMDtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT24gPSAwO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXNbal0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluaXRpYWxDb3VudGVyT24gPiB0aGlzLmluaXRpYWxDb3VudGVyT2ZmO1xuICB9XG4gIGdldEluaXRpYWxTdGF0ZUNoaWxkIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQoY2hpbGQuY2hpbGRTdGF0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2tGdW5jdGlvbiA9IChrZXksIG5ld1N0YXRlKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGVzW2tleV0gPSBuZXdTdGF0ZTtcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG5ld1N0YXRlcylcbiAgfTtcblxuICBzZXRMYXllckZpbHRlcigpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCIpLnZhbCgpIHx8IFwiXCI7IC8vZmFsbGJhY2tcbiAgICB0aGlzLnNldFN0YXRlKHtsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllciwgc3RhdGUgPSB7fSwgZGlnRGVlcGVyID0gdHJ1ZSkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgaWYgKGxheWVyICYmIGxheWVyLm5hbWUgJiYgKGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgICAgfHwgbGF5ZXIubmFtZS50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpIHtcbiAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobGF5ZXIudGFncyAmJiBsYXllci50YWdzLmZpbmQoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMX0pKXtcbiAgICAgIHNob3cgPSB0cnVlXG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlnRGVlcGVyKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyLmNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXIuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpICYmICFzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLmNoaWxkc1tjaGlsZElkXSwgc3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0pO1xuICAgICAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc2hvdyAmJiBzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG93O1xuICB9XG4gIGFwcGx5T2xkU3RhdGUgKGNvbnRleHQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBvbGRTdGF0ZXMgPSB0aGlzLnN0YXRlc1tjb250ZXh0XTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxheWVycyAobGF5ZXJzLCBzdGF0ZXMsIG9sZFN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUgIT09IG9sZFN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBpZiAob2xkU3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGFuZGxlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcywgb2xkU3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMsIG9sZFN0YXRlcylcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG9sZFN0YXRlcyk7XG4gIH1cbiAgdG9nZ2xlU3BlY2lmaWNMYXllcnMgKGlkcywgY29udGV4dCA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnN0YXRlc1tjb250ZXh0XSA9IHN0cnVjdHVyZWRDbG9uZShzdGF0ZXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVNwZWNpZmljTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWRzLmluY2x1ZGVzKGxheWVyc1tpXS5pZCkpIHtcbiAgICAgICAgICBpZiAoIXN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlU3BlY2lmaWNMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgc3RhdGVzID0gYWN0aXZhdGVTcGVjaWZpY0xheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIHRvZ2dsZUFsbExheWVycyhjb250ZXh0ID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHRoaXMuc3RhdGVzW2NvbnRleHRdID0gc3RydWN0dXJlZENsb25lKHN0YXRlcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93KGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIGlmIChsYXllcnNbaV0udmVjdG9yTGF5ZXIgfHxsYXllcnNbaV0ubG9hZGVyKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgaWYgKHNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgdHlwZTogXCJjaGFuZ2U6cmVzb2x1dGlvblwiXG4gICAgICB9KTtcbiAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnZlY3RvckNvbGxlY3Rpb24uY2xlYXIoKTtcbiAgICAgIHN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG5cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHN0YXRlcyk7XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcyAmJiB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmxlbmd0aCA+IDAgJiYgISh0aGlzLmluaXRpYWxDb3VudGVyT2ZmICYmIHRoaXMuaW5pdGlhbENvdW50ZXJPbikpIHtcbiAgICAgIHRoaXMuc3RhdGVzLmluaXRpYWwgPSBzdHJ1Y3R1cmVkQ2xvbmUodGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgbGV0IHBsYWNlaG9sZGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJzd2l0Y2hlci5maWx0ZXJfcGxhY2Vob2xkZXIgfHwgXCJcXHVmMDAyXCI7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXIgd2l0aG91dC1idXR0b25cIn0+XG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIG9uSW5wdXQ9e3RoaXMuc2V0TGF5ZXJGaWx0ZXJ9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0vPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAgbGV0IGhlYWRsaW5lID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmJ1dHRvbikge1xuICAgICAgaGVhZGxpbmUgPSA8YSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1oZWFkbGluZS1saW5rIFwiICsgKHRoaXMuYnV0dG9uRW5hYmxlZCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy50b2dnbGVBbGxMYXllcnN9Pnt0aGlzLnByb3BzLmhlYWRsaW5lIHx8IHRoaXMucHJvcHMubGFuZy5MQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEx9PC9hPjtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGxpbmUgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRIZWFkbGluZVwiPnt0aGlzLnByb3BzLmhlYWRsaW5lfTwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtoZWFkbGluZX1cbiAgICAgIHtmaWx0ZXJ9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctY29udGVudC1sYXllcnRyZWVcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRX0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2xheWVycy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlckZ1bmModGhpcy5zdGF0ZS5sYXllckZpbHRlciwgaXRlbSwgc3RhdGVzW2lkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBrZXk9e2lkfSBrZXlJZD17aWR9IGlkPXtpdGVtLmlkfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMuY2FsbGJhY2tGdW5jdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLmZpbHRlckZ1bmModGhpcy5zdGF0ZS5sYXllckZpbHRlciwgaXRlbSxmYWxzZSwgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5zdGF0ZS5sYXllckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5SZXNpemU9e3RoaXMucHJvcHMuZm5SZXNpemV9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1N0YXJib2FyZExheWVyc3dpdGNoZXJ9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlclwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcmJvYXJkUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1zdGFyYm9hcmQtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJCT0FSRDtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZC1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfSEVBRExJTkV9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICB7YnV0dG9uU3dpdGNoZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSfT5cbiAgICAgICAgICA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gbWFwQ29udHJvbGxlciA9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3RoaXMucHJvcHMub2JqTGF5ZXJzfSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBwYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXN9IGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX0gb3BlbmZ1bmM9e3RoaXMub3Blbn0gaGVhZGxpbmU9e21hcERhdGEubGF5ZXJzd2l0Y2hlci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBhY3RpdmU9e3Njb3BlLnN0YXRlLmFjdGl2ZVRhYiA9PT0gMH0vPlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCkge1xuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAvLyB3ZWJraXQgaGFjazpcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcImJ1dHRvbi5jNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleCArIFwiOmJlZm9yZSB7XFxuXCIgK1xuICAgICAgXCIgIGNvbnRlbnQ6IFxcXCJcXFxcXCIgKyBpY29uQ29kZSArIFwiXFxcIjtcXG5cIiArXG4gICAgICBcIiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG5cIiArXG4gICAgICBcIiAgZm9udC13ZWlnaHQ6IDkwMDtcXG5cIiArXG4gICAgICBcIiAgZm9udC1zaXplOiBpbmhlcml0O1xcblwiICtcbiAgICAgIFwifVwiKVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9LCAoKSA9PiB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpKTtcbiAgfVxuXG4gIHJlc2l6ZUZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiU3RhcmJvYXJkUGFuZWxcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJTdGFyYm9hcmRQYW5lbFwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiU3RhcmJvYXJkUGFuZWxcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQzRnU3RhcmJvYXJkU3R5bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgZW50ZXJFdmVudCAoZSkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpY2tFdmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGZvciBpbnRlcmFjdGlvbi10cmlnZ2VyXG4gICAgICAgIGxldCBzdHlsZVRyaWdnZXJMYWJlbCA9IG51bGw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsb3IgPSBsb2NzdHlsZS5zdHlsZSAmJiBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpID8gbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKTogbnVsbDtcbiAgICAgICAgbGV0IHN0eWwwciA9IEFycmF5LmlzQXJyYXkoc3R5bG9yKSA/IHN0eWxvclswXTogc3R5bG9yO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gc3R5bGVEYXRhID8gc3R5bGVEYXRhLnN0eWxldHlwZSA6IFwiZGVmYXVsdFwiO1xuICAgICAgICBsZXQgdG9vbHRpcCA9IHRoaXMucHJvcHMudG9vbHRpcCB8fCBcIlwiO1xuICAgICAgICBpZiAoc3R5bGVEYXRhICYmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZUljb24gPSBudWxsO1xuICAgICAgICAgICAgbGV0IGljb25TcmM7XG4gICAgICAgICAgICBpZiAoKHN0eWxlRGF0YS5pY29uX3NyYyAmJiBzdHlsZURhdGEuaWNvbl9zcmMuaW5kZXhPZignLicpICE9PSAtMSkgfHwgKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLnN2Z1NyYy5pbmRleE9mKCcuJykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5pY29uX3NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17aWNvblNyY30gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bDByKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlSW1hZ2UgPSBzdHlsMHIuZ2V0SW1hZ2UgJiYgdHlwZW9mIHN0eWwwci5nZXRJbWFnZSA9PT0gXCJmdW5jdGlvblwiICYmIHN0eWwwci5nZXRJbWFnZSgpID8gc3R5bDByLmdldEltYWdlKCk6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlSW1hZ2UgJiYgc3R5bGVJbWFnZS5nZXRTcmMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17c3R5bGVJbWFnZS5nZXRTcmMoKX0gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiB0YWJJbmRleD17MX0gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmVudGVyRXZlbnQoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlVHJpZ2dlckxhYmVsO1xuICAgIH1cblxufSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgVk9JRCwgUFJJTUlUSVZFLCBBUlJBWSwgT0JKRUNULCBEQVRFLCBSRUdFWFAsIE1BUCwgU0VULCBFUlJPUiwgQklHSU5UXG59ID0gcmVxdWlyZSgnLi90eXBlcy5qcycpO1xuXG5jb25zdCBlbnYgPSB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgPyBzZWxmIDogZ2xvYmFsVGhpcztcblxuY29uc3QgZGVzZXJpYWxpemVyID0gKCQsIF8pID0+IHtcbiAgY29uc3QgYXMgPSAob3V0LCBpbmRleCkgPT4ge1xuICAgICQuc2V0KGluZGV4LCBvdXQpO1xuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgY29uc3QgdW5wYWlyID0gaW5kZXggPT4ge1xuICAgIGlmICgkLmhhcyhpbmRleCkpXG4gICAgICByZXR1cm4gJC5nZXQoaW5kZXgpO1xuXG4gICAgY29uc3QgW3R5cGUsIHZhbHVlXSA9IF9baW5kZXhdO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBQUklNSVRJVkU6XG4gICAgICBjYXNlIFZPSUQ6XG4gICAgICAgIHJldHVybiBhcyh2YWx1ZSwgaW5kZXgpO1xuICAgICAgY2FzZSBBUlJBWToge1xuICAgICAgICBjb25zdCBhcnIgPSBhcyhbXSwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHZhbHVlKVxuICAgICAgICAgIGFyci5wdXNoKHVucGFpcihpbmRleCkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfVxuICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXMoe30sIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbmRleF0gb2YgdmFsdWUpXG4gICAgICAgICAgb2JqZWN0W3VucGFpcihrZXkpXSA9IHVucGFpcihpbmRleCk7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG4gICAgICBjYXNlIERBVEU6XG4gICAgICAgIHJldHVybiBhcyhuZXcgRGF0ZSh2YWx1ZSksIGluZGV4KTtcbiAgICAgIGNhc2UgUkVHRVhQOiB7XG4gICAgICAgIGNvbnN0IHtzb3VyY2UsIGZsYWdzfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMobmV3IFJlZ0V4cChzb3VyY2UsIGZsYWdzKSwgaW5kZXgpO1xuICAgICAgfVxuICAgICAgY2FzZSBNQVA6IHtcbiAgICAgICAgY29uc3QgbWFwID0gYXMobmV3IE1hcCwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGluZGV4XSBvZiB2YWx1ZSlcbiAgICAgICAgICBtYXAuc2V0KHVucGFpcihrZXkpLCB1bnBhaXIoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH1cbiAgICAgIGNhc2UgU0VUOiB7XG4gICAgICAgIGNvbnN0IHNldCA9IGFzKG5ldyBTZXQsIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiB2YWx1ZSlcbiAgICAgICAgICBzZXQuYWRkKHVucGFpcihpbmRleCkpO1xuICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgfVxuICAgICAgY2FzZSBFUlJPUjoge1xuICAgICAgICBjb25zdCB7bmFtZSwgbWVzc2FnZX0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBlbnZbbmFtZV0obWVzc2FnZSksIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNhc2UgQklHSU5UOlxuICAgICAgICByZXR1cm4gYXMoQmlnSW50KHZhbHVlKSwgaW5kZXgpO1xuICAgICAgY2FzZSAnQmlnSW50JzpcbiAgICAgICAgcmV0dXJuIGFzKE9iamVjdChCaWdJbnQodmFsdWUpKSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gYXMobmV3IGVudlt0eXBlXSh2YWx1ZSksIGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gdW5wYWlyO1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nLGFueT59IFJlY29yZCBhIHR5cGUgcmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBkZXNlcmlhbGl6ZWQgdmFsdWUgZnJvbSBhIHNlcmlhbGl6ZWQgYXJyYXkgb2YgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7UmVjb3JkW119IHNlcmlhbGl6ZWQgYSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdmFsdWUuXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5jb25zdCBkZXNlcmlhbGl6ZSA9IHNlcmlhbGl6ZWQgPT4gZGVzZXJpYWxpemVyKG5ldyBNYXAsIHNlcmlhbGl6ZWQpKDApO1xuZXhwb3J0cy5kZXNlcmlhbGl6ZSA9IGRlc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge2Rlc2VyaWFsaXplfSA9IHJlcXVpcmUoJy4vZGVzZXJpYWxpemUuanMnKTtcbmNvbnN0IHtzZXJpYWxpemV9ID0gcmVxdWlyZSgnLi9zZXJpYWxpemUuanMnKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nLGFueT59IFJlY29yZCBhIHR5cGUgcmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc2VyaWFsaXplZCBSZWNvcmRzLlxuICogQHBhcmFtIHthbnl9IGFueSBhIHNlcmlhbGl6YWJsZSB2YWx1ZS5cbiAqIEBwYXJhbSB7e3RyYW5zZmVyPzogYW55W10sIGpzb24/OiBib29sZWFuLCBsb3NzeT86IGJvb2xlYW59P30gb3B0aW9ucyBhbiBvYmplY3Qgd2l0aFxuICogYSB0cmFuc2ZlciBvcHRpb24gKGlnbm9yZWQgd2hlbiBwb2x5ZmlsbGVkKSBhbmQvb3Igbm9uIHN0YW5kYXJkIGZpZWxkcyB0aGF0XG4gKiBmYWxsYmFjayB0byB0aGUgcG9seWZpbGwgaWYgcHJlc2VudC5cbiAqIEByZXR1cm5zIHtSZWNvcmRbXX1cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSkuZGVmYXVsdCA9IHR5cGVvZiBzdHJ1Y3R1cmVkQ2xvbmUgPT09IFwiZnVuY3Rpb25cIiA/XG4gIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAoYW55LCBvcHRpb25zKSA9PiAoXG4gICAgb3B0aW9ucyAmJiAoJ2pzb24nIGluIG9wdGlvbnMgfHwgJ2xvc3N5JyBpbiBvcHRpb25zKSA/XG4gICAgICBkZXNlcmlhbGl6ZShzZXJpYWxpemUoYW55LCBvcHRpb25zKSkgOiBzdHJ1Y3R1cmVkQ2xvbmUoYW55KVxuICApIDpcbiAgKGFueSwgb3B0aW9ucykgPT4gZGVzZXJpYWxpemUoc2VyaWFsaXplKGFueSwgb3B0aW9ucykpO1xuICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuXG5leHBvcnRzLmRlc2VyaWFsaXplID0gZGVzZXJpYWxpemU7XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgVk9JRCwgUFJJTUlUSVZFLCBBUlJBWSwgT0JKRUNULCBEQVRFLCBSRUdFWFAsIE1BUCwgU0VULCBFUlJPUiwgQklHSU5UXG59ID0gcmVxdWlyZSgnLi90eXBlcy5qcycpO1xuXG5jb25zdCBFTVBUWSA9ICcnO1xuXG5jb25zdCB7dG9TdHJpbmd9ID0ge307XG5jb25zdCB7a2V5c30gPSBPYmplY3Q7XG5cbmNvbnN0IHR5cGVPZiA9IHZhbHVlID0+IHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgIT09ICdvYmplY3QnIHx8ICF2YWx1ZSlcbiAgICByZXR1cm4gW1BSSU1JVElWRSwgdHlwZV07XG5cbiAgY29uc3QgYXNTdHJpbmcgPSB0b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gIHN3aXRjaCAoYXNTdHJpbmcpIHtcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICByZXR1cm4gW0FSUkFZLCBFTVBUWV07XG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBbT0JKRUNULCBFTVBUWV07XG4gICAgY2FzZSAnRGF0ZSc6XG4gICAgICByZXR1cm4gW0RBVEUsIEVNUFRZXTtcbiAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgcmV0dXJuIFtSRUdFWFAsIEVNUFRZXTtcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIFtNQVAsIEVNUFRZXTtcbiAgICBjYXNlICdTZXQnOlxuICAgICAgcmV0dXJuIFtTRVQsIEVNUFRZXTtcbiAgfVxuXG4gIGlmIChhc1N0cmluZy5pbmNsdWRlcygnQXJyYXknKSlcbiAgICByZXR1cm4gW0FSUkFZLCBhc1N0cmluZ107XG5cbiAgaWYgKGFzU3RyaW5nLmluY2x1ZGVzKCdFcnJvcicpKVxuICAgIHJldHVybiBbRVJST1IsIGFzU3RyaW5nXTtcblxuICByZXR1cm4gW09CSkVDVCwgYXNTdHJpbmddO1xufTtcblxuY29uc3Qgc2hvdWxkU2tpcCA9IChbVFlQRSwgdHlwZV0pID0+IChcbiAgVFlQRSA9PT0gUFJJTUlUSVZFICYmXG4gICh0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdzeW1ib2wnKVxuKTtcblxuY29uc3Qgc2VyaWFsaXplciA9IChzdHJpY3QsIGpzb24sICQsIF8pID0+IHtcblxuICBjb25zdCBhcyA9IChvdXQsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBfLnB1c2gob3V0KSAtIDE7XG4gICAgJC5zZXQodmFsdWUsIGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH07XG5cbiAgY29uc3QgcGFpciA9IHZhbHVlID0+IHtcbiAgICBpZiAoJC5oYXModmFsdWUpKVxuICAgICAgcmV0dXJuICQuZ2V0KHZhbHVlKTtcblxuICAgIGxldCBbVFlQRSwgdHlwZV0gPSB0eXBlT2YodmFsdWUpO1xuICAgIHN3aXRjaCAoVFlQRSkge1xuICAgICAgY2FzZSBQUklNSVRJVkU6IHtcbiAgICAgICAgbGV0IGVudHJ5ID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2JpZ2ludCc6XG4gICAgICAgICAgICBUWVBFID0gQklHSU5UO1xuICAgICAgICAgICAgZW50cnkgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICBpZiAoc3RyaWN0KVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmFibGUgdG8gc2VyaWFsaXplICcgKyB0eXBlKTtcbiAgICAgICAgICAgIGVudHJ5ID0gbnVsbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICByZXR1cm4gYXMoW1ZPSURdLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzKFtUWVBFLCBlbnRyeV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgQVJSQVk6IHtcbiAgICAgICAgaWYgKHR5cGUpXG4gICAgICAgICAgcmV0dXJuIGFzKFt0eXBlLCBbLi4udmFsdWVdXSwgdmFsdWUpO1xuICBcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGFycl0sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSlcbiAgICAgICAgICBhcnIucHVzaChwYWlyKGVudHJ5KSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdCaWdJbnQnOlxuICAgICAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIHZhbHVlLnRvU3RyaW5nKCldLCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIHZhbHVlLnZhbHVlT2YoKV0sIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoanNvbiAmJiAoJ3RvSlNPTicgaW4gdmFsdWUpKVxuICAgICAgICAgIHJldHVybiBwYWlyKHZhbHVlLnRvSlNPTigpKTtcblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXModmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHN0cmljdCB8fCAhc2hvdWxkU2tpcCh0eXBlT2YodmFsdWVba2V5XSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKFtwYWlyKGtleSksIHBhaXIodmFsdWVba2V5XSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIERBVEU6XG4gICAgICAgIHJldHVybiBhcyhbVFlQRSwgdmFsdWUudG9JU09TdHJpbmcoKV0sIHZhbHVlKTtcbiAgICAgIGNhc2UgUkVHRVhQOiB7XG4gICAgICAgIGNvbnN0IHtzb3VyY2UsIGZsYWdzfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIHtzb3VyY2UsIGZsYWdzfV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTUFQOiB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBlbnRyeV0gb2YgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICEoc2hvdWxkU2tpcCh0eXBlT2Yoa2V5KSkgfHwgc2hvdWxkU2tpcCh0eXBlT2YoZW50cnkpKSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goW3BhaXIoa2V5KSwgcGFpcihlbnRyeSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIFNFVDoge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICFzaG91bGRTa2lwKHR5cGVPZihlbnRyeSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKHBhaXIoZW50cnkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge21lc3NhZ2V9ID0gdmFsdWU7XG4gICAgcmV0dXJuIGFzKFtUWVBFLCB7bmFtZTogdHlwZSwgbWVzc2FnZX1dLCB2YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHBhaXI7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcsYW55Pn0gUmVjb3JkIGEgdHlwZSByZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBzZXJpYWxpemVkIFJlY29yZHMuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgYSBzZXJpYWxpemFibGUgdmFsdWUuXG4gKiBAcGFyYW0ge3tqc29uPzogYm9vbGVhbiwgbG9zc3k/OiBib29sZWFufT99IG9wdGlvbnMgYW4gb2JqZWN0IHdpdGggYSBgbG9zc3lgIG9yIGBqc29uYCBwcm9wZXJ0eSB0aGF0LFxuICogIGlmIGB0cnVlYCwgd2lsbCBub3QgdGhyb3cgZXJyb3JzIG9uIGluY29tcGF0aWJsZSB0eXBlcywgYW5kIGJlaGF2ZSBtb3JlXG4gKiAgbGlrZSBKU09OIHN0cmluZ2lmeSB3b3VsZCBiZWhhdmUuIFN5bWJvbCBhbmQgRnVuY3Rpb24gd2lsbCBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UmVjb3JkW119XG4gKi9cbiBjb25zdCBzZXJpYWxpemUgPSAodmFsdWUsIHtqc29uLCBsb3NzeX0gPSB7fSkgPT4ge1xuICBjb25zdCBfID0gW107XG4gIHJldHVybiBzZXJpYWxpemVyKCEoanNvbiB8fCBsb3NzeSksICEhanNvbiwgbmV3IE1hcCwgXykodmFsdWUpLCBfO1xufTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVk9JRCAgICAgICA9IC0xO1xuZXhwb3J0cy5WT0lEID0gVk9JRDtcbmNvbnN0IFBSSU1JVElWRSAgPSAwO1xuZXhwb3J0cy5QUklNSVRJVkUgPSBQUklNSVRJVkU7XG5jb25zdCBBUlJBWSAgICAgID0gMTtcbmV4cG9ydHMuQVJSQVkgPSBBUlJBWTtcbmNvbnN0IE9CSkVDVCAgICAgPSAyO1xuZXhwb3J0cy5PQkpFQ1QgPSBPQkpFQ1Q7XG5jb25zdCBEQVRFICAgICAgID0gMztcbmV4cG9ydHMuREFURSA9IERBVEU7XG5jb25zdCBSRUdFWFAgICAgID0gNDtcbmV4cG9ydHMuUkVHRVhQID0gUkVHRVhQO1xuY29uc3QgTUFQICAgICAgICA9IDU7XG5leHBvcnRzLk1BUCA9IE1BUDtcbmNvbnN0IFNFVCAgICAgICAgPSA2O1xuZXhwb3J0cy5TRVQgPSBTRVQ7XG5jb25zdCBFUlJPUiAgICAgID0gNztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbmNvbnN0IEJJR0lOVCAgICAgPSA4O1xuZXhwb3J0cy5CSUdJTlQgPSBCSUdJTlQ7XG4vLyBleHBvcnQgY29uc3QgU1lNQk9MID0gOTtcbiJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJvbEV4dGVudCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnU3RhcmJvYXJkU3R5bGUiLCJfbGF5ZXIiLCJfRmVhdHVyZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfY2FsbFN1cGVyIiwibyIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkM0Z1N0YXJib2FyZExheWVyRWxlbWVudCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwic2hvd0xheWVyIiwic2hvd0VsZW1lbnRzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmVhdHVyZXMiLCJ2ZWN0b3JMYXllciIsIkFycmF5IiwiaXNBcnJheSIsIlZlY3RvciIsImxheWVyIiwibGF5ZXJDb250cm9sbGVyIiwibWFwQ29udHJvbGxlciIsInByb3h5Iiwic2hvdyIsImxvYWRlciIsImlkIiwic2V0TGF5ZXJTdGF0ZVdpdGhJZCIsImhpZGVMYXllciIsImhpZGVFbGVtZW50cyIsImhpZGUiLCJjaGFuZ2VDaGlsZFN0YXRlIiwiY2hpbGQiLCJjaGlsZFN0YXRlIiwiYWN0aXZlIiwiY2hpbGRzIiwiY2hpbGRJZCIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJuZXdDaGlsZFN0YXRlIiwibmV3U3RhdGUiLCJsYXllclN0YXRlcyIsImtleUlkIiwibGF5ZXJFbnRlciIsIndoaWNoIiwic3RvcFByb3BhZ2F0aW9uIiwibmF0aXZlRXZlbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJncmV5ZWQiLCJjb2xsYXBzZWQiLCJsYXllclN0YXRlIiwiaWdub3JlQ2hpbGRzIiwibGF5ZXJDaGlsZHMiLCJfdGhpczIiLCJib29sWm9vbVRvIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJtYXBEYXRhIiwic3RhcmJvYXJkIiwib3BlblBvcHVwIiwiZmVhdHVyZSIsInBvcHVwIiwiRmVhdHVyZSIsImhhbmRsZVBvcHVwIiwibGF5ZXJab29tVG9FbnRlciIsInN0YXRlIiwicmVuZGVyIiwiX3RoaXMzIiwic3R5bGVQaWN0dXJlIiwic3Bhblpvb20iLCJkYXRhIiwic2hvd0xvY3N0eWxlcyIsImxvY3N0eWxlIiwic3R5bGVEYXRhIiwiYXJyTG9jU3R5bGVzIiwiY3JlYXRlRWxlbWVudCIsIkM0Z1N0YXJib2FyZFN0eWxlIiwic3R5bGVJZCIsInRvb2x0aXAiLCJsYW5nIiwiU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUiLCJuYW1lIiwiU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUiIsImNsaWNrRXZlbnQiLCJpbnZlcnRab29tQWN0aXZhdGUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm9uTW91c2VVcCIsImV2ZW50IiwiY3NzQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkRJU0FCTEVEIiwib3BlbkNsb3NlIiwiQ0xPU0UiLCJPUEVOIiwib2JqQ2hpbGRzIiwibGlua1RleHQiLCJsaW5rU3dpdGNoIiwiRnJhZ21lbnQiLCJfZGVmaW5lUHJvcGVydHkyIiwidGFiSW5kZXgiLCJhbHQiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzEiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzIiLCJvbktleVByZXNzIiwic3BhbiIsIlNUQVJCT0FSRF9FTEVNRU5UX0NISUxEUyIsIklDT04iLCJtYXAiLCJpdGVtIiwiYnlQYXNzQ2hpbGRzIiwiZmlsdGVyRnVuYyIsInN0ckZpbHRlciIsImZuUmVzaXplIiwiQ29tcG9uZW50IiwiX2M0Z1N0YXJib2FyZExheWVyRWxlbWVudCIsIl9zdHJ1Y3R1cmVkQ2xvbmUiLCJTdGFyYm9hcmRMYXllcnN3aXRjaGVyIiwiaW5pdGlhbENvdW50ZXJPZmYiLCJpbml0aWFsQ291bnRlck9uIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwibmV3U3RhdGVzIiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwiZWxlbWVudCIsImNvbXBvbmVudCIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwidG9nZ2xlU3BlY2lmaWNMYXllcnMiLCJzdGF0ZXMiLCJpbml0aWFsaXplZCIsImxheWVyRmlsdGVyIiwiZmlsdGVyVmFsdWUiLCJqUXVlcnkiLCJ2YWwiLCJzZXRTdGF0ZSIsImRpZ0RlZXBlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwidGFncyIsImZpbmQiLCJhcHBseU9sZFN0YXRlIiwiY29udGV4dCIsImxheWVycyIsIm9iakxheWVycyIsIm9sZFN0YXRlcyIsImhhbmRsZUxheWVycyIsImlkcyIsInN0cnVjdHVyZWRDbG9uZSIsImFjdGl2YXRlU3BlY2lmaWNMYXllcnMiLCJpbmNsdWRlcyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJnZXRWaWV3IiwiZGlzcGF0Y2hFdmVudCIsInR5cGUiLCJ2ZWN0b3JDb2xsZWN0aW9uIiwiY2xlYXIiLCJpbml0aWFsIiwiZ2V0SW5pdGlhbFN0YXRlcyIsImZpbHRlciIsImxheWVyc3dpdGNoZXIiLCJwbGFjZWhvbGRlciIsImZpbHRlcl9wbGFjZWhvbGRlciIsIm9uSW5wdXQiLCJoZWFkbGluZSIsImJ1dHRvbiIsIkxBWUVSU1dJVENIRVJfVE9HR0xFX0FMTCIsIlNUQVJCT0FSRF9MQVlFUlRSRUUiLCJjYWxsYmFja0Z1bmN0aW9uIiwiX2NvbnRyb2wiLCJfYzRnU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciIsIl9jNGdNYXBzSTE4biIsIl9jNGdNYXBzVXRpbHMiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIlN0YXJib2FyZFBhbmVsIiwiZG9jdW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwiaW5uZXJUZXh0IiwiQ1RSTF9TVEFSQk9BUkQiLCJhcHBlbmRDaGlsZCIsIm9wZW4iLCJleHRlcm5hbCIsIm9uIiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaG9yaXpvbnRhbFBhbmVsIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInJlc2l6ZUZ1bmN0aW9uIiwiY3JlYXRlU3R5bGluZ0Zvckljb24iLCJkaXJlY3Rpb24iLCJhY3RpdmVUYWIiLCJjb21wb25lbnREaWRNb3VudCIsInNldEFjdGl2ZVRhYiIsImlkeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJidXR0b25Td2l0Y2hlciIsImJ1dHRvbnMiLCJ0YWJMYXllcnMiLCJyZWd1bGFyQnV0dG9uIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwicHVzaCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJvcGVuZnVuYyIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlckNsYXNzIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiaGVhZGVyIiwibGFiZWwiLCJTVEFSQk9BUkQiLCJjbG9zZUJ0bkNsYXNzIiwiU1RBUkJPQVJEX0NMT1NFIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJzdHlsZSIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsInN0eWxlU2hlZXQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJzZXRPcGVuQ29tcG9uZW50Iiwic2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsIl9nZW9tIiwiZW50ZXJFdmVudCIsInN0eWxlVHJpZ2dlckxhYmVsIiwibG9jU3R5bGVBcnIiLCJzdHlsb3IiLCJnZW9tZXRyeSIsIlBvaW50Iiwic3R5bDByIiwic3R5bGVUeXBlIiwic3R5bGV0eXBlIiwic3R5bGVJY29uIiwiaWNvblNyYyIsImljb25fc3JjIiwic3ZnU3JjIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZUltYWdlIiwiZ2V0SW1hZ2UiLCJnZXRTcmMiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJTVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVIiLCJTVEFSQk9BUkRfTE9DU1RZTEVfWCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUyIsIlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRSIsImNvbG9yIiwiYm9yZGVyY29sb3IiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0Q29sb3IiLCJmaWxsY29sb3IiLCJzdHJva2Vjb2xvciIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsInN0eWxlRWxlbWVudHMiXSwic291cmNlUm9vdCI6IiJ9