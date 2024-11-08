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
        layerController.show(scope.props.layer.loader, features, scope.props.id, scope.props.layerKey ? scope.props.layerKey : scope.props.id);
      } else if (vectorLayer) {
        layerController.show(scope.props.layer.loader, vectorLayer, scope.props.id, scope.props.layerKey ? scope.props.layerKey : scope.props.id);
      } else if (showElements) {
        layerController.show(scope.props.layer.loader, showElements, showElements.id, showElements.key ? showElements.key : showElements.id);
      } else {
        layerController.show(false, false, scope.props.id, scope.props.layerKey ? scope.props.layerKey : scope.props.id);
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
        layerController.hide(scope.props.layer.loader, features, scope.props.id, scope.props.layerKey ? scope.props.layerKey : scope.props.id);
      } else if (vectorLayer) {
        layerController.hide(scope.props.layer.loader, vectorLayer, scope.props.id, scope.props.layerKey ? scope.props.layerKey : scope.props.id);
      } else if (hideElements) {
        layerController.hide(scope.props.layer.loader, hideElements, hideElements.id, hideElements.key ? hideElements.key : hideElements.id);
      } else {
        layerController.hide(false, false, scope.props.id, scope.props.layerKey ? scope.props.layerKey : scope.props.id);
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
      var show = false;
      if (!this.props.layerStates.active) {
        this.showLayer();
        show = true;
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
            if (layerChilds[childId].key && layerChilds[childId].key != layerChilds[childId].id) {
              if (show) {
                this.showLayer(layerChilds[childId]);
              } else {
                this.hideLayer(layerChilds[childId]);
              }
            } else {
              newState.childStates[childId] = this.changeChildState(layerChilds[childId], newState.childStates[childId], newState.active);
            }
          }
        }
      }
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
              layerKey: item.key,
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
      } else if (layer.tags && layer.tags.find && layer.tags.find(function (element) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRix1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFFLGdCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsa0JBQUEsR0FBQUgsbUJBQUE7QUFDQSxJQUFBSSxNQUFBLEdBQUFKLG1CQUFBO0FBQ0EsSUFBQUssUUFBQSxHQUFBQyxzQkFBQSxDQUFBTixtQkFBQTtBQUFpQyxTQUFBTyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQVQsd0JBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCLHNCQUFzQixvQkFBb0I7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxnQ0FBZ0MsR0FBRztBQUMvQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLGFBQWEsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDL0pKO0FBQ2I7QUFDQSxZQUFZO0FBQ1o7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxZQUFZO0FBQ1o7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxhQUFhO0FBQ2I7QUFDQSxjQUFjO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zdHlsZS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvZGVzZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvc2VyaWFsaXplLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvY2pzL3R5cGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3dMYXllcihzaG93RWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNob3dFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBzaG93RWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKHNob3dFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IHNob3dFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLHNjb3BlLnByb3BzLmlkLCBzY29wZS5wcm9wcy5sYXllcktleSA/IHNjb3BlLnByb3BzLmxheWVyS2V5IDogc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQsIHNjb3BlLnByb3BzLmxheWVyS2V5ID8gc2NvcGUucHJvcHMubGF5ZXJLZXkgOiBzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgc2hvd0VsZW1lbnRzLCBzaG93RWxlbWVudHMuaWQsIHNob3dFbGVtZW50cy5rZXkgPyBzaG93RWxlbWVudHMua2V5IDogc2hvd0VsZW1lbnRzLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCB0cnVlKVxuICB9XG5cbiAgaGlkZUxheWVyKGhpZGVFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlkZUVsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IGhpZGVFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoaGlkZUVsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBoaWRlRWxlbWVudHMsIGhpZGVFbGVtZW50cy5pZCwgaGlkZUVsZW1lbnRzLmtleSA/IGhpZGVFbGVtZW50cy5rZXkgOiBoaWRlRWxlbWVudHMuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkLCBzY29wZS5wcm9wcy5sYXllcktleSA/IHNjb3BlLnByb3BzLmxheWVyS2V5IDogc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIGZhbHNlKVxuICB9XG4gIGNoYW5nZUNoaWxkU3RhdGUgKGNoaWxkLCBjaGlsZFN0YXRlLCBhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRzICYmIGNoaWxkLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGNoaWxkLmNoaWxkcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUoY2hpbGQuY2hpbGRzW2NoaWxkSWRdLCBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBhY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChjaGlsZFN0YXRlLmlkLCBhY3RpdmUpXG4gICAgY2hpbGRTdGF0ZS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgcmV0dXJuIGNoaWxkU3RhdGU7XG4gIH1cbiAgcGFyZW50Q2FsbGJhY2sgKGtleSwgbmV3Q2hpbGRTdGF0ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNba2V5XSA9IG5ld0NoaWxkU3RhdGU7XG4gICAgaWYgKG5ld1N0YXRlLmFjdGl2ZSAhPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgaWYgKG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllckVudGVyKGUpIHtcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gIH1cbiAgbGF5ZXJDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCkge1xuICAgICAgICBsZXQgbGF5ZXJTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgICAgIGxheWVyU3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCBsYXllclN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmxheWVyLmlnbm9yZUNoaWxkcykge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcblxuICAgICAgICAgIGlmIChsYXllckNoaWxkc1tjaGlsZElkXS5rZXkgJiYgKGxheWVyQ2hpbGRzW2NoaWxkSWRdLmtleSAhPSBsYXllckNoaWxkc1tjaGlsZElkXS5pZCkpIHtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0xheWVyKGxheWVyQ2hpbGRzW2NoaWxkSWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZUxheWVyKGxheWVyQ2hpbGRzW2NoaWxkSWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBsYXllclpvb21UbyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5sYXllckNsaWNrKGUpO1xuICAgIH1cbiAgICBsZXQgYm9vbFpvb21UbyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIGlmIChib29sWm9vbVRvKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5tYXBEYXRhLnN0YXJib2FyZC5vcGVuUG9wdXApIHtcbiAgICAgIGxldCBmZWF0dXJlLCBsYXllcjtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnBvcHVwKSB7XG4gICAgICAgIGZlYXR1cmUgPSBuZXcgRmVhdHVyZSgpO1xuICAgICAgICBsYXllciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3BvcHVwJyx0aGlzLnByb3BzLmxheWVyLnBvcHVwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuZmVhdHVyZXMgJiYgdGhpcy5wcm9wcy5sYXllci5mZWF0dXJlcy5sZW5ndGggPT09IDEpe1xuICAgICAgICBsYXllciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgZmVhdHVyZSA9IHRoaXMucHJvcHMubGF5ZXIuZmVhdHVyZXNbMF07XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaGFuZGxlUG9wdXAoZmVhdHVyZSwgbGF5ZXIpO1xuXG4gICAgfVxuICB9XG4gIGxheWVyWm9vbVRvRW50ZXIoZSkge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgdGhpcy5sYXllclpvb21UbyhlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllckVudGVyKGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG9FbnRlcihldmVudCl9PjxzcGFuIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudF9fdGV4dFwifT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvc3Bhbj48L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICBsaW5rU3dpdGNoID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzcyArIFwiIGM0Zy1zdGFyYm9hcmQtY2hlY2tib3gtaWNvblwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PC9hPlxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGlua1RleHQgPSA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e2Nzc0NsYXNzfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJFbnRlcihldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT48c3BhbiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRfX3RleHRcIn0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L3NwYW4+PC9hPjtcbiAgICB9XG5cbiAgICBpZiAob2JqQ2hpbGRzICYmIG9iakNoaWxkcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzcGFuID0gPHNwYW4gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfQ0hJTERTfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5JQ09OfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5zcGFuQ2xpY2soZXZlbnQpfS8+O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgZGF0YS1sYXllci1pZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICB7c3Bhbn1cbiAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge29iakNoaWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IGxheWVyS2V5PXtpdGVtLmtleX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICAgIGxpbmtTd2l0Y2ggPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgZGF0YS1sYXllci1pZD17dGhpcy5wcm9wcy5pZH0gdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZExheWVyRWxlbWVudH0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50XCI7XG5pbXBvcnQgc3RydWN0dXJlZENsb25lIGZyb20gJ0B1bmdhcC9zdHJ1Y3R1cmVkLWNsb25lJztcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgaW5kZXggPSBwcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxheWVyc3dpdGNoZXJcIik7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlU3BlY2lmaWNMYXllcnMgPSB0aGlzLnRvZ2dsZVNwZWNpZmljTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICAgIC8vIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlcyA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmID0gMDtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT24gPSAwO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXNbal0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluaXRpYWxDb3VudGVyT24gPiB0aGlzLmluaXRpYWxDb3VudGVyT2ZmO1xuICB9XG4gIGdldEluaXRpYWxTdGF0ZUNoaWxkIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQoY2hpbGQuY2hpbGRTdGF0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2tGdW5jdGlvbiA9IChrZXksIG5ld1N0YXRlKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGVzW2tleV0gPSBuZXdTdGF0ZTtcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG5ld1N0YXRlcylcbiAgfTtcblxuICBzZXRMYXllckZpbHRlcigpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCIpLnZhbCgpIHx8IFwiXCI7IC8vZmFsbGJhY2tcbiAgICB0aGlzLnNldFN0YXRlKHtsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllciwgc3RhdGUgPSB7fSwgZGlnRGVlcGVyID0gdHJ1ZSkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgaWYgKGxheWVyICYmIGxheWVyLm5hbWUgJiYgKGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgICAgfHwgbGF5ZXIubmFtZS50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpIHtcbiAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxheWVyLnRhZ3MgJiYgbGF5ZXIudGFncy5maW5kICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cbiAgYXBwbHlPbGRTdGF0ZSAoY29udGV4dCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgbGV0IHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbGV0IG9sZFN0YXRlcyA9IHRoaXMuc3RhdGVzW2NvbnRleHRdO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGF5ZXJzIChsYXllcnMsIHN0YXRlcywgb2xkU3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmFjdGl2ZSAhPT0gb2xkU3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIGlmIChvbGRTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93KGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGUobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoYW5kbGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLCBvbGRTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUxheWVycyhsYXllcnMsIHN0YXRlcywgb2xkU3RhdGVzKVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sob2xkU3RhdGVzKTtcbiAgfVxuICB0b2dnbGVTcGVjaWZpY0xheWVycyAoaWRzLCBjb250ZXh0ID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgbGV0IHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHRoaXMuc3RhdGVzW2NvbnRleHRdID0gc3RydWN0dXJlZENsb25lKHN0YXRlcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlU3BlY2lmaWNMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZHMuaW5jbHVkZXMobGF5ZXJzW2ldLmlkKSkge1xuICAgICAgICAgIGlmICghc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGUobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gYWN0aXZhdGVTcGVjaWZpY0xheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgICBzdGF0ZXMgPSBhY3RpdmF0ZVNwZWNpZmljTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHN0YXRlcyk7XG4gIH1cbiAgdG9nZ2xlQWxsTGF5ZXJzKGNvbnRleHQgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgdGhpcy5zdGF0ZXNbY29udGV4dF0gPSBzdHJ1Y3R1cmVkQ2xvbmUoc3RhdGVzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgaWYgKGxheWVyc1tpXS52ZWN0b3JMYXllciB8fGxheWVyc1tpXS5sb2FkZXIpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGUobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgICBpZiAoc2NvcGUuYnV0dG9uRW5hYmxlZCkge1xuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICB0eXBlOiBcImNoYW5nZTpyZXNvbHV0aW9uXCJcbiAgICAgIH0pO1xuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIudmVjdG9yQ29sbGVjdGlvbi5jbGVhcigpO1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9XG5cblxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2soc3RhdGVzKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzICYmIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMubGVuZ3RoID4gMCAmJiAhKHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgJiYgdGhpcy5pbml0aWFsQ291bnRlck9uKSkge1xuICAgICAgdGhpcy5zdGF0ZXMuaW5pdGlhbCA9IHN0cnVjdHVyZWRDbG9uZSh0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgICAgIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICAgIH1cblxuICAgIGxldCBsYXllcnMsIHN0YXRlcywgZmlsdGVyO1xuICAgIGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZmlsdGVyID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcl9wbGFjZWhvbGRlciB8fCBcIlxcdWYwMDJcIjtcbiAgICAgIGZpbHRlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCJ9IHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5zZXRMYXllckZpbHRlcn0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfS8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuYnV0dG9uKSB7XG4gICAgICBoZWFkbGluZSA9IDxhIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWhlYWRsaW5lLWxpbmsgXCIgKyAodGhpcy5idXR0b25FbmFibGVkID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnRvZ2dsZUFsbExheWVyc30+e3RoaXMucHJvcHMuaGVhZGxpbmUgfHwgdGhpcy5wcm9wcy5sYW5nLkxBWUVSU1dJVENIRVJfVE9HR0xFX0FMTH08L2E+O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkbGluZSA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGVudEhlYWRsaW5lXCI+e3RoaXMucHJvcHMuaGVhZGxpbmV9PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2hlYWRsaW5lfVxuICAgICAge2ZpbHRlcn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1jb250ZW50LWxheWVydHJlZVwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTEFZRVJUUkVFfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bGF5ZXJzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLCBzdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5jYWxsYmFja0Z1bmN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnN0YXRlLmxheWVyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlcn0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG5cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhLmNvbnRyb2xMYWJlbHMpIHtcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5pbm5lclRleHQgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSQk9BUkQ7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJsYXllcnN3aXRjaGVyXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMgPSB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2l6ZUZ1bmN0aW9uID0gdGhpcy5yZXNpemVGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbiA9IHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24uYmluZCh0aGlzKTtcbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXMgKGV2ZXJ5IHByb3BlcnR5IHRoYXQgaGFzIGluZmx1ZW5jZSBvbiB0aGlzIGNvbXBvbmVudClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZWl0aGVyIFwidG9wXCIgb3IgXCJib3R0b21cIlxuICAgICAgZGlyZWN0aW9uOiBwcm9wcy5kaXJlY3Rpb24gfHwgXCJyaWdodFwiLFxuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLXN0YXJib2FyZC1wYW5lbFwiLFxuICAgICAgY2hpbGRzOiBwcm9wcy5jaGlsZHMgfHwgW10sXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgYWN0aXZlVGFiOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBzZXRBY3RpdmVUYWIoaWR4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiBpZHh9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgY29uc3QgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnN0YXRlLmNsYXNzTmFtZSArIFwiLVwiICsgdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgY2xhc3NOYW1lICs9IFwiIFwiICsgKHRoaXMuc3RhdGUub3BlbiA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCIpO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cbiAgICBsZXQgYnV0dG9uU3dpdGNoZXIgPSBcIlwiO1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCByZWd1bGFyQnV0dG9uID0gPGJ1dHRvbiBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVJ9IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyXCJ9IG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYigwKX19Lz47XG4gICAgICBidXR0b25zLnB1c2gocmVndWxhckJ1dHRvbik7XG4gICAgICBidXR0b25zLnB1c2godGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IGljb25Db2RlID0gZWxlbWVudC5hd2Vzb21lSWNvbjtcbiAgICAgICAgICBzY29wZS5jcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpO1xuICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IHRpdGxlPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4ge3Njb3BlLnNldEFjdGl2ZVRhYihpbmRleCArIDEpfX0vPjtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBidXR0b25Td2l0Y2hlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtc3dpdGNoZXJcIn0+XG4gICAgICAgIHtidXR0b25zfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGxldCB0YWJzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGFicyA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3RoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e2luZGV4fSBtYXBDb250cm9sbGVyPXtzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3Njb3BlLnByb3BzLnRhYkxheWVyc1tpbmRleF19IHBhcmVudENhbGxiYWNrPXtzY29wZS5wcm9wcy50YWJDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3Njb3BlLnByb3BzLnRhYlN0YXRlc30gb3BlbmZ1bmM9e3Njb3BlLm9wZW59IGhlYWRsaW5lPXtlbGVtZW50WzBdLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Njb3BlLnN0YXRlLm9wZW59IGFjdGl2ZT17KGluZGV4ICsgMSkgPT09IHNjb3BlLnN0YXRlLmFjdGl2ZVRhYn0vPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkLWhlYWRlclwifSBoZWFkZXJDbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9IRUFETElORX1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXttYXBEYXRhLnN0YXJib2FyZC5sYWJlbCB8fCB0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEfSBjbG9zZUJ0bkNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NMT1NFfSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIHtidXR0b25Td2l0Y2hlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVJ9PlxuICAgICAgICAgIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSBtYXBDb250cm9sbGVyID17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17dGhpcy5wcm9wcy5vYmpMYXllcnN9IHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHBhcmVudENhbGxiYWNrPXt0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlc30gY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfSBvcGVuZnVuYz17dGhpcy5vcGVufSBoZWFkbGluZT17bWFwRGF0YS5sYXllcnN3aXRjaGVyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IGFjdGl2ZT17c2NvcGUuc3RhdGUuYWN0aXZlVGFiID09PSAwfS8+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KSB7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIC8vIHdlYmtpdCBoYWNrOlxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKFwiYnV0dG9uLmM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4ICsgXCI6YmVmb3JlIHtcXG5cIiArXG4gICAgICBcIiAgY29udGVudDogXFxcIlxcXFxcIiArIGljb25Db2RlICsgXCJcXFwiO1xcblwiICtcbiAgICAgIFwiICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcblwiICtcbiAgICAgIFwiICBmb250LXdlaWdodDogOTAwO1xcblwiICtcbiAgICAgIFwiICBmb250LXNpemU6IGluaGVyaXQ7XFxuXCIgK1xuICAgICAgXCJ9XCIpXG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0sICgpID0+IHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICB9XG5cbiAgcmVzaXplRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJTdGFyYm9hcmRQYW5lbFwiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIlN0YXJib2FyZFBhbmVsXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJTdGFyYm9hcmRQYW5lbFwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgYnV0dG9ucyB0aGF0IHdvdWxkIGNvbGxpZGUgd2l0aCB0aGUgcGFuZWwuXG4gICAqL1xuICBzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuZG9lcyB0aGUgcHJldmlvdXMgYnV0dG9uIG1vdmVtZW50LlxuICAgKi9cbiAgc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkge1xuICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBlbnRlckV2ZW50IChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgbGV0IHN0eWxlVHJpZ2dlckxhYmVsID0gbnVsbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICBsZXQgc3R5bDByID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGxldCB0b29sdGlwID0gdGhpcy5wcm9wcy50b29sdGlwIHx8IFwiXCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWNvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaWNvblNyYztcbiAgICAgICAgICAgIGlmICgoc3R5bGVEYXRhLmljb25fc3JjICYmIHN0eWxlRGF0YS5pY29uX3NyYy5pbmRleE9mKCcuJykgIT09IC0xKSB8fCAoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuc3ZnU3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLmljb25fc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtpY29uU3JjfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19IC8+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsMHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVJbWFnZSA9IHN0eWwwci5nZXRJbWFnZSAmJiB0eXBlb2Ygc3R5bDByLmdldEltYWdlID09PSBcImZ1bmN0aW9uXCIgJiYgc3R5bDByLmdldEltYWdlKCkgPyBzdHlsMHIuZ2V0SW1hZ2UoKTogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVJbWFnZSAmJiBzdHlsZUltYWdlLmdldFNyYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtzdHlsZUltYWdlLmdldFNyYygpfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIHRhYkluZGV4PXsxfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMuZW50ZXJFdmVudChldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHsgLy8gJ3BvaW50JywgJ3NxdWFyZScsICdzdGFyJywgJ3gnLCAnY3Jvc3MnLCAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1RBUjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1g7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb2xvciwgYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBpZiAoc3R5bDByICYmIHN0eWwwci5nZXRGaWxsKCkgJiYgc3R5bDByLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBzdHlsMHIuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSBzdHlsMHIuZ2V0U3Ryb2tlKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvclswXSwgc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0eWxlRWxlbWVudHMgPSB7XG4gICAgICAgICAgICAgICAgXCItLXZhci1jb2xvclwiIDogY29sb3IsXG4gICAgICAgICAgICAgICAgXCItLXZhci1ib3JkZXJjb2xvclwiIDogYm9yZGVyY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICBWT0lELCBQUklNSVRJVkUsIEFSUkFZLCBPQkpFQ1QsIERBVEUsIFJFR0VYUCwgTUFQLCBTRVQsIEVSUk9SLCBCSUdJTlRcbn0gPSByZXF1aXJlKCcuL3R5cGVzLmpzJyk7XG5cbmNvbnN0IGVudiA9IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyA/IHNlbGYgOiBnbG9iYWxUaGlzO1xuXG5jb25zdCBkZXNlcmlhbGl6ZXIgPSAoJCwgXykgPT4ge1xuICBjb25zdCBhcyA9IChvdXQsIGluZGV4KSA9PiB7XG4gICAgJC5zZXQoaW5kZXgsIG91dCk7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICBjb25zdCB1bnBhaXIgPSBpbmRleCA9PiB7XG4gICAgaWYgKCQuaGFzKGluZGV4KSlcbiAgICAgIHJldHVybiAkLmdldChpbmRleCk7XG5cbiAgICBjb25zdCBbdHlwZSwgdmFsdWVdID0gX1tpbmRleF07XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFBSSU1JVElWRTpcbiAgICAgIGNhc2UgVk9JRDpcbiAgICAgICAgcmV0dXJuIGFzKHZhbHVlLCBpbmRleCk7XG4gICAgICBjYXNlIEFSUkFZOiB7XG4gICAgICAgIGNvbnN0IGFyciA9IGFzKFtdLCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgdmFsdWUpXG4gICAgICAgICAgYXJyLnB1c2godW5wYWlyKGluZGV4KSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgICB9XG4gICAgICBjYXNlIE9CSkVDVDoge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBhcyh7fSwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGluZGV4XSBvZiB2YWx1ZSlcbiAgICAgICAgICBvYmplY3RbdW5wYWlyKGtleSldID0gdW5wYWlyKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cbiAgICAgIGNhc2UgREFURTpcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBEYXRlKHZhbHVlKSwgaW5kZXgpO1xuICAgICAgY2FzZSBSRUdFWFA6IHtcbiAgICAgICAgY29uc3Qge3NvdXJjZSwgZmxhZ3N9ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBhcyhuZXcgUmVnRXhwKHNvdXJjZSwgZmxhZ3MpLCBpbmRleCk7XG4gICAgICB9XG4gICAgICBjYXNlIE1BUDoge1xuICAgICAgICBjb25zdCBtYXAgPSBhcyhuZXcgTWFwLCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5kZXhdIG9mIHZhbHVlKVxuICAgICAgICAgIG1hcC5zZXQodW5wYWlyKGtleSksIHVucGFpcihpbmRleCkpO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfVxuICAgICAgY2FzZSBTRVQ6IHtcbiAgICAgICAgY29uc3Qgc2V0ID0gYXMobmV3IFNldCwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHZhbHVlKVxuICAgICAgICAgIHNldC5hZGQodW5wYWlyKGluZGV4KSk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgICB9XG4gICAgICBjYXNlIEVSUk9SOiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBtZXNzYWdlfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMobmV3IGVudltuYW1lXShtZXNzYWdlKSwgaW5kZXgpO1xuICAgICAgfVxuICAgICAgY2FzZSBCSUdJTlQ6XG4gICAgICAgIHJldHVybiBhcyhCaWdJbnQodmFsdWUpLCBpbmRleCk7XG4gICAgICBjYXNlICdCaWdJbnQnOlxuICAgICAgICByZXR1cm4gYXMoT2JqZWN0KEJpZ0ludCh2YWx1ZSkpLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBhcyhuZXcgZW52W3R5cGVdKHZhbHVlKSwgaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiB1bnBhaXI7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcsYW55Pn0gUmVjb3JkIGEgdHlwZSByZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGRlc2VyaWFsaXplZCB2YWx1ZSBmcm9tIGEgc2VyaWFsaXplZCBhcnJheSBvZiBSZWNvcmRzLlxuICogQHBhcmFtIHtSZWNvcmRbXX0gc2VyaWFsaXplZCBhIHByZXZpb3VzbHkgc2VyaWFsaXplZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmNvbnN0IGRlc2VyaWFsaXplID0gc2VyaWFsaXplZCA9PiBkZXNlcmlhbGl6ZXIobmV3IE1hcCwgc2VyaWFsaXplZCkoMCk7XG5leHBvcnRzLmRlc2VyaWFsaXplID0gZGVzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7ZGVzZXJpYWxpemV9ID0gcmVxdWlyZSgnLi9kZXNlcmlhbGl6ZS5qcycpO1xuY29uc3Qge3NlcmlhbGl6ZX0gPSByZXF1aXJlKCcuL3NlcmlhbGl6ZS5qcycpO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcsYW55Pn0gUmVjb3JkIGEgdHlwZSByZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBzZXJpYWxpemVkIFJlY29yZHMuXG4gKiBAcGFyYW0ge2FueX0gYW55IGEgc2VyaWFsaXphYmxlIHZhbHVlLlxuICogQHBhcmFtIHt7dHJhbnNmZXI/OiBhbnlbXSwganNvbj86IGJvb2xlYW4sIGxvc3N5PzogYm9vbGVhbn0/fSBvcHRpb25zIGFuIG9iamVjdCB3aXRoXG4gKiBhIHRyYW5zZmVyIG9wdGlvbiAoaWdub3JlZCB3aGVuIHBvbHlmaWxsZWQpIGFuZC9vciBub24gc3RhbmRhcmQgZmllbGRzIHRoYXRcbiAqIGZhbGxiYWNrIHRvIHRoZSBwb2x5ZmlsbCBpZiBwcmVzZW50LlxuICogQHJldHVybnMge1JlY29yZFtdfVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KS5kZWZhdWx0ID0gdHlwZW9mIHN0cnVjdHVyZWRDbG9uZSA9PT0gXCJmdW5jdGlvblwiID9cbiAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gIChhbnksIG9wdGlvbnMpID0+IChcbiAgICBvcHRpb25zICYmICgnanNvbicgaW4gb3B0aW9ucyB8fCAnbG9zc3knIGluIG9wdGlvbnMpID9cbiAgICAgIGRlc2VyaWFsaXplKHNlcmlhbGl6ZShhbnksIG9wdGlvbnMpKSA6IHN0cnVjdHVyZWRDbG9uZShhbnkpXG4gICkgOlxuICAoYW55LCBvcHRpb25zKSA9PiBkZXNlcmlhbGl6ZShzZXJpYWxpemUoYW55LCBvcHRpb25zKSk7XG4gIC8qIGM4IGlnbm9yZSBzdG9wICovXG5cbmV4cG9ydHMuZGVzZXJpYWxpemUgPSBkZXNlcmlhbGl6ZTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICBWT0lELCBQUklNSVRJVkUsIEFSUkFZLCBPQkpFQ1QsIERBVEUsIFJFR0VYUCwgTUFQLCBTRVQsIEVSUk9SLCBCSUdJTlRcbn0gPSByZXF1aXJlKCcuL3R5cGVzLmpzJyk7XG5cbmNvbnN0IEVNUFRZID0gJyc7XG5cbmNvbnN0IHt0b1N0cmluZ30gPSB7fTtcbmNvbnN0IHtrZXlzfSA9IE9iamVjdDtcblxuY29uc3QgdHlwZU9mID0gdmFsdWUgPT4ge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSAhPT0gJ29iamVjdCcgfHwgIXZhbHVlKVxuICAgIHJldHVybiBbUFJJTUlUSVZFLCB0eXBlXTtcblxuICBjb25zdCBhc1N0cmluZyA9IHRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgc3dpdGNoIChhc1N0cmluZykge1xuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBbQVJSQVksIEVNUFRZXTtcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIFtPQkpFQ1QsIEVNUFRZXTtcbiAgICBjYXNlICdEYXRlJzpcbiAgICAgIHJldHVybiBbREFURSwgRU1QVFldO1xuICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICByZXR1cm4gW1JFR0VYUCwgRU1QVFldO1xuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gW01BUCwgRU1QVFldO1xuICAgIGNhc2UgJ1NldCc6XG4gICAgICByZXR1cm4gW1NFVCwgRU1QVFldO1xuICB9XG5cbiAgaWYgKGFzU3RyaW5nLmluY2x1ZGVzKCdBcnJheScpKVxuICAgIHJldHVybiBbQVJSQVksIGFzU3RyaW5nXTtcblxuICBpZiAoYXNTdHJpbmcuaW5jbHVkZXMoJ0Vycm9yJykpXG4gICAgcmV0dXJuIFtFUlJPUiwgYXNTdHJpbmddO1xuXG4gIHJldHVybiBbT0JKRUNULCBhc1N0cmluZ107XG59O1xuXG5jb25zdCBzaG91bGRTa2lwID0gKFtUWVBFLCB0eXBlXSkgPT4gKFxuICBUWVBFID09PSBQUklNSVRJVkUgJiZcbiAgKHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcpXG4pO1xuXG5jb25zdCBzZXJpYWxpemVyID0gKHN0cmljdCwganNvbiwgJCwgXykgPT4ge1xuXG4gIGNvbnN0IGFzID0gKG91dCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IF8ucHVzaChvdXQpIC0gMTtcbiAgICAkLnNldCh2YWx1ZSwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBjb25zdCBwYWlyID0gdmFsdWUgPT4ge1xuICAgIGlmICgkLmhhcyh2YWx1ZSkpXG4gICAgICByZXR1cm4gJC5nZXQodmFsdWUpO1xuXG4gICAgbGV0IFtUWVBFLCB0eXBlXSA9IHR5cGVPZih2YWx1ZSk7XG4gICAgc3dpdGNoIChUWVBFKSB7XG4gICAgICBjYXNlIFBSSU1JVElWRToge1xuICAgICAgICBsZXQgZW50cnkgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmlnaW50JzpcbiAgICAgICAgICAgIFRZUEUgPSBCSUdJTlQ7XG4gICAgICAgICAgICBlbnRyeSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgIGlmIChzdHJpY3QpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBzZXJpYWxpemUgJyArIHR5cGUpO1xuICAgICAgICAgICAgZW50cnkgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJldHVybiBhcyhbVk9JRF0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIGVudHJ5XSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBBUlJBWToge1xuICAgICAgICBpZiAodHlwZSlcbiAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIFsuLi52YWx1ZV1dLCB2YWx1ZSk7XG4gIFxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgYXJyXSwgdmFsdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKVxuICAgICAgICAgIGFyci5wdXNoKHBhaXIoZW50cnkpKTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0JpZ0ludCc6XG4gICAgICAgICAgICAgIHJldHVybiBhcyhbdHlwZSwgdmFsdWUudG9TdHJpbmcoKV0sIHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICAgIHJldHVybiBhcyhbdHlwZSwgdmFsdWUudmFsdWVPZigpXSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqc29uICYmICgndG9KU09OJyBpbiB2YWx1ZSkpXG4gICAgICAgICAgcmV0dXJuIHBhaXIodmFsdWUudG9KU09OKCkpO1xuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICFzaG91bGRTa2lwKHR5cGVPZih2YWx1ZVtrZXldKSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goW3BhaXIoa2V5KSwgcGFpcih2YWx1ZVtrZXldKV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgREFURTpcbiAgICAgICAgcmV0dXJuIGFzKFtUWVBFLCB2YWx1ZS50b0lTT1N0cmluZygpXSwgdmFsdWUpO1xuICAgICAgY2FzZSBSRUdFWFA6IHtcbiAgICAgICAgY29uc3Qge3NvdXJjZSwgZmxhZ3N9ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBhcyhbVFlQRSwge3NvdXJjZSwgZmxhZ3N9XSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBNQVA6IHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFzKFtUWVBFLCBlbnRyaWVzXSwgdmFsdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGVudHJ5XSBvZiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChzdHJpY3QgfHwgIShzaG91bGRTa2lwKHR5cGVPZihrZXkpKSB8fCBzaG91bGRTa2lwKHR5cGVPZihlbnRyeSkpKSlcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChbcGFpcihrZXkpLCBwYWlyKGVudHJ5KV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgU0VUOiB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChzdHJpY3QgfHwgIXNob3VsZFNraXAodHlwZU9mKGVudHJ5KSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2gocGFpcihlbnRyeSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7bWVzc2FnZX0gPSB2YWx1ZTtcbiAgICByZXR1cm4gYXMoW1RZUEUsIHtuYW1lOiB0eXBlLCBtZXNzYWdlfV0sIHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gcGFpcjtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlcmlhbGl6ZWQgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBhIHNlcmlhbGl6YWJsZSB2YWx1ZS5cbiAqIEBwYXJhbSB7e2pzb24/OiBib29sZWFuLCBsb3NzeT86IGJvb2xlYW59P30gb3B0aW9ucyBhbiBvYmplY3Qgd2l0aCBhIGBsb3NzeWAgb3IgYGpzb25gIHByb3BlcnR5IHRoYXQsXG4gKiAgaWYgYHRydWVgLCB3aWxsIG5vdCB0aHJvdyBlcnJvcnMgb24gaW5jb21wYXRpYmxlIHR5cGVzLCBhbmQgYmVoYXZlIG1vcmVcbiAqICBsaWtlIEpTT04gc3RyaW5naWZ5IHdvdWxkIGJlaGF2ZS4gU3ltYm9sIGFuZCBGdW5jdGlvbiB3aWxsIGJlIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtSZWNvcmRbXX1cbiAqL1xuIGNvbnN0IHNlcmlhbGl6ZSA9ICh2YWx1ZSwge2pzb24sIGxvc3N5fSA9IHt9KSA9PiB7XG4gIGNvbnN0IF8gPSBbXTtcbiAgcmV0dXJuIHNlcmlhbGl6ZXIoIShqc29uIHx8IGxvc3N5KSwgISFqc29uLCBuZXcgTWFwLCBfKSh2YWx1ZSksIF87XG59O1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBWT0lEICAgICAgID0gLTE7XG5leHBvcnRzLlZPSUQgPSBWT0lEO1xuY29uc3QgUFJJTUlUSVZFICA9IDA7XG5leHBvcnRzLlBSSU1JVElWRSA9IFBSSU1JVElWRTtcbmNvbnN0IEFSUkFZICAgICAgPSAxO1xuZXhwb3J0cy5BUlJBWSA9IEFSUkFZO1xuY29uc3QgT0JKRUNUICAgICA9IDI7XG5leHBvcnRzLk9CSkVDVCA9IE9CSkVDVDtcbmNvbnN0IERBVEUgICAgICAgPSAzO1xuZXhwb3J0cy5EQVRFID0gREFURTtcbmNvbnN0IFJFR0VYUCAgICAgPSA0O1xuZXhwb3J0cy5SRUdFWFAgPSBSRUdFWFA7XG5jb25zdCBNQVAgICAgICAgID0gNTtcbmV4cG9ydHMuTUFQID0gTUFQO1xuY29uc3QgU0VUICAgICAgICA9IDY7XG5leHBvcnRzLlNFVCA9IFNFVDtcbmNvbnN0IEVSUk9SICAgICAgPSA3O1xuZXhwb3J0cy5FUlJPUiA9IEVSUk9SO1xuY29uc3QgQklHSU5UICAgICA9IDg7XG5leHBvcnRzLkJJR0lOVCA9IEJJR0lOVDtcbi8vIGV4cG9ydCBjb25zdCBTWU1CT0wgPSA5O1xuIl0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIm9sRXh0ZW50IiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdTdGFyYm9hcmRTdHlsZSIsIl9sYXllciIsIl9GZWF0dXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwibGF5ZXJDbGljayIsImJpbmQiLCJsYXllclpvb21UbyIsInNwYW5DbGljayIsImNoYW5nZUNvbGxhcHNlU3RhdGUiLCJwYXJlbnRDYWxsYmFjayIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJzaG93TGF5ZXIiLCJzaG93RWxlbWVudHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJsYXllcktleSIsInNldExheWVyU3RhdGVXaXRoSWQiLCJoaWRlTGF5ZXIiLCJoaWRlRWxlbWVudHMiLCJoaWRlIiwiY2hhbmdlQ2hpbGRTdGF0ZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsImNoaWxkcyIsImNoaWxkSWQiLCJjdXJyZW50Q2hpbGRTdGF0ZSIsImNoaWxkU3RhdGVzIiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImxheWVyRW50ZXIiLCJ3aGljaCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZ3JleWVkIiwiY29sbGFwc2VkIiwibGF5ZXJTdGF0ZSIsImlnbm9yZUNoaWxkcyIsImxheWVyQ2hpbGRzIiwiX3RoaXMyIiwiYm9vbFpvb21UbyIsInpvb21UbyIsInNldENoaWxkRmVhdHVyZUZsYWciLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibWFwRGF0YSIsInN0YXJib2FyZCIsIm9wZW5Qb3B1cCIsImZlYXR1cmUiLCJwb3B1cCIsIkZlYXR1cmUiLCJoYW5kbGVQb3B1cCIsImxheWVyWm9vbVRvRW50ZXIiLCJzdGF0ZSIsInJlbmRlciIsIl90aGlzMyIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImNyZWF0ZUVsZW1lbnQiLCJDNGdTdGFyYm9hcmRTdHlsZSIsInN0eWxlSWQiLCJ0b29sdGlwIiwibGFuZyIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFIiwibmFtZSIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVIiLCJjbGlja0V2ZW50IiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvbk1vdXNlVXAiLCJldmVudCIsImNzc0NsYXNzIiwiY3NzQ29uc3RhbnRzIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJESVNBQkxFRCIsIm9wZW5DbG9zZSIsIkNMT1NFIiwiT1BFTiIsIm9iakNoaWxkcyIsImxpbmtUZXh0IiwibGlua1N3aXRjaCIsIkZyYWdtZW50IiwiX2RlZmluZVByb3BlcnR5MiIsInRhYkluZGV4IiwiYWx0IiwiU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xIiwiU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yIiwib25LZXlQcmVzcyIsInNwYW4iLCJTVEFSQk9BUkRfRUxFTUVOVF9DSElMRFMiLCJJQ09OIiwibWFwIiwiaXRlbSIsImJ5UGFzc0NoaWxkcyIsImZpbHRlckZ1bmMiLCJzdHJGaWx0ZXIiLCJmblJlc2l6ZSIsIkNvbXBvbmVudCIsIl9jNGdTdGFyYm9hcmRMYXllckVsZW1lbnQiLCJfc3RydWN0dXJlZENsb25lIiwiU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciIsImluaXRpYWxDb3VudGVyT2ZmIiwiaW5pdGlhbENvdW50ZXJPbiIsImoiLCJnZXRJbml0aWFsU3RhdGVDaGlsZCIsIm5ld1N0YXRlcyIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJjb21wb25lbnQiLCJzZXRMYXllckZpbHRlciIsInRvZ2dsZUFsbExheWVycyIsInRvZ2dsZVNwZWNpZmljTGF5ZXJzIiwic3RhdGVzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiYXBwbHlPbGRTdGF0ZSIsImNvbnRleHQiLCJsYXllcnMiLCJvYmpMYXllcnMiLCJvbGRTdGF0ZXMiLCJoYW5kbGVMYXllcnMiLCJpZHMiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJhY3RpdmF0ZVNwZWNpZmljTGF5ZXJzIiwiaW5jbHVkZXMiLCJhY3RpdmF0ZUxheWVycyIsImJ1dHRvbkVuYWJsZWQiLCJkZWFjdGl2YXRlTGF5ZXJzIiwiZ2V0VmlldyIsImRpc3BhdGNoRXZlbnQiLCJ0eXBlIiwidmVjdG9yQ29sbGVjdGlvbiIsImNsZWFyIiwiaW5pdGlhbCIsImdldEluaXRpYWxTdGF0ZXMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwicGxhY2Vob2xkZXIiLCJmaWx0ZXJfcGxhY2Vob2xkZXIiLCJvbklucHV0IiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiY2FsbGJhY2tGdW5jdGlvbiIsIl9jb250cm9sIiwiX2M0Z1N0YXJib2FyZExheWVyc3dpdGNoZXIiLCJfYzRnTWFwc0kxOG4iLCJfYzRnTWFwc1V0aWxzIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJTdGFyYm9hcmRQYW5lbCIsImRvY3VtZW50IiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsImlubmVyVGV4dCIsIkNUUkxfU1RBUkJPQVJEIiwiYXBwZW5kQ2hpbGQiLCJvcGVuIiwiZXh0ZXJuYWwiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsInNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMiLCJyZXNpemVGdW5jdGlvbiIsImNyZWF0ZVN0eWxpbmdGb3JJY29uIiwiZGlyZWN0aW9uIiwiYWN0aXZlVGFiIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRBY3RpdmVUYWIiLCJpZHgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInB1c2giLCJpY29uQ29kZSIsImF3ZXNvbWVJY29uIiwidGFicyIsInRhYkNhbGxiYWNrIiwidGFiU3RhdGVzIiwib3BlbmZ1bmMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsIlNUQVJCT0FSRF9IRUFETElORSIsImhlYWRlciIsImxhYmVsIiwiU1RBUkJPQVJEIiwiY2xvc2VCdG5DbGFzcyIsIlNUQVJCT0FSRF9DTE9TRSIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJfZ2VvbSIsImVudGVyRXZlbnQiLCJzdHlsZVRyaWdnZXJMYWJlbCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiZ2VvbWV0cnkiLCJQb2ludCIsInN0eWwwciIsInN0eWxlVHlwZSIsInN0eWxldHlwZSIsInN0eWxlSWNvbiIsImljb25TcmMiLCJpY29uX3NyYyIsInN2Z1NyYyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==