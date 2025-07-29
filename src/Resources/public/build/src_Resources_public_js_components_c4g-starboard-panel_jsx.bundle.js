"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-starboard-panel_jsx"],{

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
      case 'ArrayBuffer':
        return as(new Uint8Array(value).buffer, value);
      case 'DataView': {
        const { buffer } = new Uint8Array(value);
        return as(new DataView(buffer), value);
      }
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
    case 'DataView':
      return [ARRAY, asString];
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
        if (type) {
          let spread = value;
          if (type === 'DataView') {
            spread = new Uint8Array(value.buffer);
          }
          else if (type === 'ArrayBuffer') {
            spread = new Uint8Array(value);
          }
          return as([type, [...spread]], value);
        }

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


/***/ }),

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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
      var cssElementClass = "";
      if (this.props.layer.cssClass) {
        cssElementClass = " " + this.props.layer.cssClass;
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
          className: openClose + " c4g-starboard-list-element" + cssElementClass
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
          className: openClose + " c4g-starboard-list-element" + cssElementClass
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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsRUFBRSxFQUFFLG1CQUFPLENBQUMsdUVBQVk7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNuRk47QUFDYixPQUFPLGFBQWEsRUFBRSxtQkFBTyxDQUFDLG1GQUFrQjtBQUNoRCxPQUFPLFdBQVcsRUFBRSxtQkFBTyxDQUFDLCtFQUFnQjs7QUFFNUM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksa0RBQWtELEdBQUc7QUFDakU7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQixpQkFBaUI7Ozs7Ozs7Ozs7O0FD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U0FBUyxDQUFDd04sU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFeE4sU0FBUyxDQUFDd04sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3RGSixXQUFXLEdBQUcvQixtQkFBSyxDQUFDcUMsd0JBQXdCLENBQUMxTixTQUFTLENBQUN5TixXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUV6TixTQUFTLENBQUN5TixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEc7UUFDQSxJQUFJRSxhQUFhLEdBQUc7VUFDaEIsYUFBYSxFQUFHUixLQUFLO1VBQ3JCLG1CQUFtQixFQUFHQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUNwUyxLQUFLLENBQUMwRixVQUFVLEVBQUU7VUFDdkJnTCxpQkFBaUIsZ0JBQUdyVCxNQUFBLFlBQUE2SCxhQUFBO1lBQU1VLFNBQVMsRUFBRUksUUFBUztZQUFDc0osS0FBSyxFQUFFcUQsYUFBYztZQUFDOU0sS0FBSyxFQUFFUixPQUFRO1lBQUNTLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFHQyxLQUFLO2NBQUEsT0FBSTlGLEtBQUksQ0FBQ0QsS0FBSyxDQUFDMEYsVUFBVSxDQUFDSyxLQUFLLENBQUM7WUFBQTtVQUFDLENBQUMsQ0FBQztRQUM3SSxDQUFDLE1BQ0k7VUFDRDJLLGlCQUFpQixnQkFBR3JULE1BQUEsWUFBQTZILGFBQUE7WUFBTVUsU0FBUyxFQUFFSSxRQUFTO1lBQUNzSixLQUFLLEVBQUVxRCxhQUFjO1lBQUM5TSxLQUFLLEVBQUVSO1VBQVEsQ0FBQyxDQUFDO1FBQzFGO01BQ0o7TUFDQSxPQUFPcUwsaUJBQWlCO0lBQzVCO0VBQUM7QUFBQSxFQTFGa0M5SSxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvZGVzZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvc2VyaWFsaXplLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvY2pzL3R5cGVzLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIFZPSUQsIFBSSU1JVElWRSwgQVJSQVksIE9CSkVDVCwgREFURSwgUkVHRVhQLCBNQVAsIFNFVCwgRVJST1IsIEJJR0lOVFxufSA9IHJlcXVpcmUoJy4vdHlwZXMuanMnKTtcblxuY29uc3QgZW52ID0gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnID8gc2VsZiA6IGdsb2JhbFRoaXM7XG5cbmNvbnN0IGRlc2VyaWFsaXplciA9ICgkLCBfKSA9PiB7XG4gIGNvbnN0IGFzID0gKG91dCwgaW5kZXgpID0+IHtcbiAgICAkLnNldChpbmRleCwgb3V0KTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xuXG4gIGNvbnN0IHVucGFpciA9IGluZGV4ID0+IHtcbiAgICBpZiAoJC5oYXMoaW5kZXgpKVxuICAgICAgcmV0dXJuICQuZ2V0KGluZGV4KTtcblxuICAgIGNvbnN0IFt0eXBlLCB2YWx1ZV0gPSBfW2luZGV4XTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUFJJTUlUSVZFOlxuICAgICAgY2FzZSBWT0lEOlxuICAgICAgICByZXR1cm4gYXModmFsdWUsIGluZGV4KTtcbiAgICAgIGNhc2UgQVJSQVk6IHtcbiAgICAgICAgY29uc3QgYXJyID0gYXMoW10sIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiB2YWx1ZSlcbiAgICAgICAgICBhcnIucHVzaCh1bnBhaXIoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH1cbiAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGFzKHt9LCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5kZXhdIG9mIHZhbHVlKVxuICAgICAgICAgIG9iamVjdFt1bnBhaXIoa2V5KV0gPSB1bnBhaXIoaW5kZXgpO1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuICAgICAgY2FzZSBEQVRFOlxuICAgICAgICByZXR1cm4gYXMobmV3IERhdGUodmFsdWUpLCBpbmRleCk7XG4gICAgICBjYXNlIFJFR0VYUDoge1xuICAgICAgICBjb25zdCB7c291cmNlLCBmbGFnc30gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBSZWdFeHAoc291cmNlLCBmbGFncyksIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTUFQOiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IGFzKG5ldyBNYXAsIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbmRleF0gb2YgdmFsdWUpXG4gICAgICAgICAgbWFwLnNldCh1bnBhaXIoa2V5KSwgdW5wYWlyKGluZGV4KSk7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9XG4gICAgICBjYXNlIFNFVDoge1xuICAgICAgICBjb25zdCBzZXQgPSBhcyhuZXcgU2V0LCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgdmFsdWUpXG4gICAgICAgICAgc2V0LmFkZCh1bnBhaXIoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICAgIH1cbiAgICAgIGNhc2UgRVJST1I6IHtcbiAgICAgICAgY29uc3Qge25hbWUsIG1lc3NhZ2V9ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBhcyhuZXcgZW52W25hbWVdKG1lc3NhZ2UpLCBpbmRleCk7XG4gICAgICB9XG4gICAgICBjYXNlIEJJR0lOVDpcbiAgICAgICAgcmV0dXJuIGFzKEJpZ0ludCh2YWx1ZSksIGluZGV4KTtcbiAgICAgIGNhc2UgJ0JpZ0ludCc6XG4gICAgICAgIHJldHVybiBhcyhPYmplY3QoQmlnSW50KHZhbHVlKSksIGluZGV4KTtcbiAgICAgIGNhc2UgJ0FycmF5QnVmZmVyJzpcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBVaW50OEFycmF5KHZhbHVlKS5idWZmZXIsIHZhbHVlKTtcbiAgICAgIGNhc2UgJ0RhdGFWaWV3Jzoge1xuICAgICAgICBjb25zdCB7IGJ1ZmZlciB9ID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuICAgICAgICByZXR1cm4gYXMobmV3IERhdGFWaWV3KGJ1ZmZlciksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFzKG5ldyBlbnZbdHlwZV0odmFsdWUpLCBpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIHVucGFpcjtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVzZXJpYWxpemVkIHZhbHVlIGZyb20gYSBzZXJpYWxpemVkIGFycmF5IG9mIFJlY29yZHMuXG4gKiBAcGFyYW0ge1JlY29yZFtdfSBzZXJpYWxpemVkIGEgcHJldmlvdXNseSBzZXJpYWxpemVkIHZhbHVlLlxuICogQHJldHVybnMge2FueX1cbiAqL1xuY29uc3QgZGVzZXJpYWxpemUgPSBzZXJpYWxpemVkID0+IGRlc2VyaWFsaXplcihuZXcgTWFwLCBzZXJpYWxpemVkKSgwKTtcbmV4cG9ydHMuZGVzZXJpYWxpemUgPSBkZXNlcmlhbGl6ZTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtkZXNlcmlhbGl6ZX0gPSByZXF1aXJlKCcuL2Rlc2VyaWFsaXplLmpzJyk7XG5jb25zdCB7c2VyaWFsaXplfSA9IHJlcXVpcmUoJy4vc2VyaWFsaXplLmpzJyk7XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlcmlhbGl6ZWQgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7YW55fSBhbnkgYSBzZXJpYWxpemFibGUgdmFsdWUuXG4gKiBAcGFyYW0ge3t0cmFuc2Zlcj86IGFueVtdLCBqc29uPzogYm9vbGVhbiwgbG9zc3k/OiBib29sZWFufT99IG9wdGlvbnMgYW4gb2JqZWN0IHdpdGhcbiAqIGEgdHJhbnNmZXIgb3B0aW9uIChpZ25vcmVkIHdoZW4gcG9seWZpbGxlZCkgYW5kL29yIG5vbiBzdGFuZGFyZCBmaWVsZHMgdGhhdFxuICogZmFsbGJhY2sgdG8gdGhlIHBvbHlmaWxsIGlmIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UmVjb3JkW119XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pLmRlZmF1bHQgPSB0eXBlb2Ygc3RydWN0dXJlZENsb25lID09PSBcImZ1bmN0aW9uXCIgP1xuICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgKGFueSwgb3B0aW9ucykgPT4gKFxuICAgIG9wdGlvbnMgJiYgKCdqc29uJyBpbiBvcHRpb25zIHx8ICdsb3NzeScgaW4gb3B0aW9ucykgP1xuICAgICAgZGVzZXJpYWxpemUoc2VyaWFsaXplKGFueSwgb3B0aW9ucykpIDogc3RydWN0dXJlZENsb25lKGFueSlcbiAgKSA6XG4gIChhbnksIG9wdGlvbnMpID0+IGRlc2VyaWFsaXplKHNlcmlhbGl6ZShhbnksIG9wdGlvbnMpKTtcbiAgLyogYzggaWdub3JlIHN0b3AgKi9cblxuZXhwb3J0cy5kZXNlcmlhbGl6ZSA9IGRlc2VyaWFsaXplO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIFZPSUQsIFBSSU1JVElWRSwgQVJSQVksIE9CSkVDVCwgREFURSwgUkVHRVhQLCBNQVAsIFNFVCwgRVJST1IsIEJJR0lOVFxufSA9IHJlcXVpcmUoJy4vdHlwZXMuanMnKTtcblxuY29uc3QgRU1QVFkgPSAnJztcblxuY29uc3Qge3RvU3RyaW5nfSA9IHt9O1xuY29uc3Qge2tleXN9ID0gT2JqZWN0O1xuXG5jb25zdCB0eXBlT2YgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUpXG4gICAgcmV0dXJuIFtQUklNSVRJVkUsIHR5cGVdO1xuXG4gIGNvbnN0IGFzU3RyaW5nID0gdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICBzd2l0Y2ggKGFzU3RyaW5nKSB7XG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIFtBUlJBWSwgRU1QVFldO1xuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gW09CSkVDVCwgRU1QVFldO1xuICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgcmV0dXJuIFtEQVRFLCBFTVBUWV07XG4gICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgIHJldHVybiBbUkVHRVhQLCBFTVBUWV07XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBbTUFQLCBFTVBUWV07XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIHJldHVybiBbU0VULCBFTVBUWV07XG4gICAgY2FzZSAnRGF0YVZpZXcnOlxuICAgICAgcmV0dXJuIFtBUlJBWSwgYXNTdHJpbmddO1xuICB9XG5cbiAgaWYgKGFzU3RyaW5nLmluY2x1ZGVzKCdBcnJheScpKVxuICAgIHJldHVybiBbQVJSQVksIGFzU3RyaW5nXTtcblxuICBpZiAoYXNTdHJpbmcuaW5jbHVkZXMoJ0Vycm9yJykpXG4gICAgcmV0dXJuIFtFUlJPUiwgYXNTdHJpbmddO1xuXG4gIHJldHVybiBbT0JKRUNULCBhc1N0cmluZ107XG59O1xuXG5jb25zdCBzaG91bGRTa2lwID0gKFtUWVBFLCB0eXBlXSkgPT4gKFxuICBUWVBFID09PSBQUklNSVRJVkUgJiZcbiAgKHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcpXG4pO1xuXG5jb25zdCBzZXJpYWxpemVyID0gKHN0cmljdCwganNvbiwgJCwgXykgPT4ge1xuXG4gIGNvbnN0IGFzID0gKG91dCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IF8ucHVzaChvdXQpIC0gMTtcbiAgICAkLnNldCh2YWx1ZSwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBjb25zdCBwYWlyID0gdmFsdWUgPT4ge1xuICAgIGlmICgkLmhhcyh2YWx1ZSkpXG4gICAgICByZXR1cm4gJC5nZXQodmFsdWUpO1xuXG4gICAgbGV0IFtUWVBFLCB0eXBlXSA9IHR5cGVPZih2YWx1ZSk7XG4gICAgc3dpdGNoIChUWVBFKSB7XG4gICAgICBjYXNlIFBSSU1JVElWRToge1xuICAgICAgICBsZXQgZW50cnkgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmlnaW50JzpcbiAgICAgICAgICAgIFRZUEUgPSBCSUdJTlQ7XG4gICAgICAgICAgICBlbnRyeSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgIGlmIChzdHJpY3QpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBzZXJpYWxpemUgJyArIHR5cGUpO1xuICAgICAgICAgICAgZW50cnkgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJldHVybiBhcyhbVk9JRF0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIGVudHJ5XSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBBUlJBWToge1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIGxldCBzcHJlYWQgPSB2YWx1ZTtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ0RhdGFWaWV3Jykge1xuICAgICAgICAgICAgc3ByZWFkID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUuYnVmZmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ0FycmF5QnVmZmVyJykge1xuICAgICAgICAgICAgc3ByZWFkID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIFsuLi5zcHJlYWRdXSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGFycl0sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSlcbiAgICAgICAgICBhcnIucHVzaChwYWlyKGVudHJ5KSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdCaWdJbnQnOlxuICAgICAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIHZhbHVlLnRvU3RyaW5nKCldLCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIHZhbHVlLnZhbHVlT2YoKV0sIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoanNvbiAmJiAoJ3RvSlNPTicgaW4gdmFsdWUpKVxuICAgICAgICAgIHJldHVybiBwYWlyKHZhbHVlLnRvSlNPTigpKTtcblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXModmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHN0cmljdCB8fCAhc2hvdWxkU2tpcCh0eXBlT2YodmFsdWVba2V5XSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKFtwYWlyKGtleSksIHBhaXIodmFsdWVba2V5XSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIERBVEU6XG4gICAgICAgIHJldHVybiBhcyhbVFlQRSwgdmFsdWUudG9JU09TdHJpbmcoKV0sIHZhbHVlKTtcbiAgICAgIGNhc2UgUkVHRVhQOiB7XG4gICAgICAgIGNvbnN0IHtzb3VyY2UsIGZsYWdzfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIHtzb3VyY2UsIGZsYWdzfV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTUFQOiB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBlbnRyeV0gb2YgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICEoc2hvdWxkU2tpcCh0eXBlT2Yoa2V5KSkgfHwgc2hvdWxkU2tpcCh0eXBlT2YoZW50cnkpKSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goW3BhaXIoa2V5KSwgcGFpcihlbnRyeSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIFNFVDoge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICFzaG91bGRTa2lwKHR5cGVPZihlbnRyeSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKHBhaXIoZW50cnkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge21lc3NhZ2V9ID0gdmFsdWU7XG4gICAgcmV0dXJuIGFzKFtUWVBFLCB7bmFtZTogdHlwZSwgbWVzc2FnZX1dLCB2YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHBhaXI7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcsYW55Pn0gUmVjb3JkIGEgdHlwZSByZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBzZXJpYWxpemVkIFJlY29yZHMuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgYSBzZXJpYWxpemFibGUgdmFsdWUuXG4gKiBAcGFyYW0ge3tqc29uPzogYm9vbGVhbiwgbG9zc3k/OiBib29sZWFufT99IG9wdGlvbnMgYW4gb2JqZWN0IHdpdGggYSBgbG9zc3lgIG9yIGBqc29uYCBwcm9wZXJ0eSB0aGF0LFxuICogIGlmIGB0cnVlYCwgd2lsbCBub3QgdGhyb3cgZXJyb3JzIG9uIGluY29tcGF0aWJsZSB0eXBlcywgYW5kIGJlaGF2ZSBtb3JlXG4gKiAgbGlrZSBKU09OIHN0cmluZ2lmeSB3b3VsZCBiZWhhdmUuIFN5bWJvbCBhbmQgRnVuY3Rpb24gd2lsbCBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UmVjb3JkW119XG4gKi9cbiBjb25zdCBzZXJpYWxpemUgPSAodmFsdWUsIHtqc29uLCBsb3NzeX0gPSB7fSkgPT4ge1xuICBjb25zdCBfID0gW107XG4gIHJldHVybiBzZXJpYWxpemVyKCEoanNvbiB8fCBsb3NzeSksICEhanNvbiwgbmV3IE1hcCwgXykodmFsdWUpLCBfO1xufTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVk9JRCAgICAgICA9IC0xO1xuZXhwb3J0cy5WT0lEID0gVk9JRDtcbmNvbnN0IFBSSU1JVElWRSAgPSAwO1xuZXhwb3J0cy5QUklNSVRJVkUgPSBQUklNSVRJVkU7XG5jb25zdCBBUlJBWSAgICAgID0gMTtcbmV4cG9ydHMuQVJSQVkgPSBBUlJBWTtcbmNvbnN0IE9CSkVDVCAgICAgPSAyO1xuZXhwb3J0cy5PQkpFQ1QgPSBPQkpFQ1Q7XG5jb25zdCBEQVRFICAgICAgID0gMztcbmV4cG9ydHMuREFURSA9IERBVEU7XG5jb25zdCBSRUdFWFAgICAgID0gNDtcbmV4cG9ydHMuUkVHRVhQID0gUkVHRVhQO1xuY29uc3QgTUFQICAgICAgICA9IDU7XG5leHBvcnRzLk1BUCA9IE1BUDtcbmNvbnN0IFNFVCAgICAgICAgPSA2O1xuZXhwb3J0cy5TRVQgPSBTRVQ7XG5jb25zdCBFUlJPUiAgICAgID0gNztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbmNvbnN0IEJJR0lOVCAgICAgPSA4O1xuZXhwb3J0cy5CSUdJTlQgPSBCSUdJTlQ7XG4vLyBleHBvcnQgY29uc3QgU1lNQk9MID0gOTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNob3dMYXllcihzaG93RWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNob3dFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBzaG93RWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKHNob3dFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IHNob3dFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLHNjb3BlLnByb3BzLmlkLCBzY29wZS5wcm9wcy5sYXllcktleSA/IHNjb3BlLnByb3BzLmxheWVyS2V5IDogc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQsIHNjb3BlLnByb3BzLmxheWVyS2V5ID8gc2NvcGUucHJvcHMubGF5ZXJLZXkgOiBzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgc2hvd0VsZW1lbnRzLCBzaG93RWxlbWVudHMuaWQsIHNob3dFbGVtZW50cy5rZXkgPyBzaG93RWxlbWVudHMua2V5IDogc2hvd0VsZW1lbnRzLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCB0cnVlKVxuICB9XG5cbiAgaGlkZUxheWVyKGhpZGVFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlkZUVsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IGhpZGVFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoaGlkZUVsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBoaWRlRWxlbWVudHMsIGhpZGVFbGVtZW50cy5pZCwgaGlkZUVsZW1lbnRzLmtleSA/IGhpZGVFbGVtZW50cy5rZXkgOiBoaWRlRWxlbWVudHMuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkLCBzY29wZS5wcm9wcy5sYXllcktleSA/IHNjb3BlLnByb3BzLmxheWVyS2V5IDogc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIGZhbHNlKVxuICB9XG4gIGNoYW5nZUNoaWxkU3RhdGUgKGNoaWxkLCBjaGlsZFN0YXRlLCBhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRzICYmIGNoaWxkLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGNoaWxkLmNoaWxkcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUoY2hpbGQuY2hpbGRzW2NoaWxkSWRdLCBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBhY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChjaGlsZFN0YXRlLmlkLCBhY3RpdmUpXG4gICAgY2hpbGRTdGF0ZS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgcmV0dXJuIGNoaWxkU3RhdGU7XG4gIH1cbiAgcGFyZW50Q2FsbGJhY2sgKGtleSwgbmV3Q2hpbGRTdGF0ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNba2V5XSA9IG5ld0NoaWxkU3RhdGU7XG4gICAgaWYgKG5ld1N0YXRlLmFjdGl2ZSAhPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgaWYgKG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllckVudGVyKGUpIHtcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gIH1cbiAgbGF5ZXJDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCkge1xuICAgICAgICBsZXQgbGF5ZXJTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgICAgIGxheWVyU3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCBsYXllclN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmxheWVyLmlnbm9yZUNoaWxkcykge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcblxuICAgICAgICAgIGlmIChsYXllckNoaWxkc1tjaGlsZElkXS5rZXkgJiYgKGxheWVyQ2hpbGRzW2NoaWxkSWRdLmtleSAhPSBsYXllckNoaWxkc1tjaGlsZElkXS5pZCkpIHtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0xheWVyKGxheWVyQ2hpbGRzW2NoaWxkSWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZUxheWVyKGxheWVyQ2hpbGRzW2NoaWxkSWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBsYXllclpvb21UbyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5sYXllckNsaWNrKGUpO1xuICAgIH1cbiAgICBsZXQgYm9vbFpvb21UbyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIGlmIChib29sWm9vbVRvKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5tYXBEYXRhLnN0YXJib2FyZC5vcGVuUG9wdXApIHtcbiAgICAgIGxldCBmZWF0dXJlLCBsYXllcjtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnBvcHVwKSB7XG4gICAgICAgIGZlYXR1cmUgPSBuZXcgRmVhdHVyZSgpO1xuICAgICAgICBsYXllciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3BvcHVwJyx0aGlzLnByb3BzLmxheWVyLnBvcHVwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuZmVhdHVyZXMgJiYgdGhpcy5wcm9wcy5sYXllci5mZWF0dXJlcy5sZW5ndGggPT09IDEpe1xuICAgICAgICBsYXllciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgZmVhdHVyZSA9IHRoaXMucHJvcHMubGF5ZXIuZmVhdHVyZXNbMF07XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaGFuZGxlUG9wdXAoZmVhdHVyZSwgbGF5ZXIpO1xuXG4gICAgfVxuICB9XG4gIGxheWVyWm9vbVRvRW50ZXIoZSkge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgdGhpcy5sYXllclpvb21UbyhlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gdGhpcy5sYXllckVudGVyKGV2ZW50KX0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG9FbnRlcihldmVudCl9PjxzcGFuIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudF9fdGV4dFwifT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvc3Bhbj48L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICBsaW5rU3dpdGNoID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzcyArIFwiIGM0Zy1zdGFyYm9hcmQtY2hlY2tib3gtaWNvblwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PC9hPlxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGlua1RleHQgPSA8YSB0YWJJbmRleD17MX0gdGl0bGU9e3RoaXMucHJvcHMubGF5ZXIubmFtZX0gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8xK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfVFJJR0dFUl8yfSBjbGFzc05hbWU9e2Nzc0NsYXNzfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJFbnRlcihldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT48c3BhbiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRfX3RleHRcIn0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L3NwYW4+PC9hPjtcbiAgICB9XG5cbiAgICBsZXQgY3NzRWxlbWVudENsYXNzID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllci5jc3NDbGFzcykge1xuICAgICAgY3NzRWxlbWVudENsYXNzID0gXCIgXCIgKyB0aGlzLnByb3BzLmxheWVyLmNzc0NsYXNzO1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBhbHQ9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9DSElMRFN9IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBkYXRhLWxheWVyLWlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCIgKyBjc3NFbGVtZW50Q2xhc3N9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbGF5ZXJLZXk9e2l0ZW0ua2V5fSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5wcm9wcy5zdHJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLnByb3BzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2s7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJab29tVG87XG4gICAgICAgIGNzc0NsYXNzID0gXCJjNGctZ2VvanNvbi1idXR0b25cIjtcbiAgICAgICAgbGlua1N3aXRjaCA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBkYXRhLWxheWVyLWlkPXt0aGlzLnByb3BzLmlkfSB0YWJJbmRleD17MX0gY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwiICsgY3NzRWxlbWVudENsYXNzfT5cbiAgICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcbmltcG9ydCBzdHJ1Y3R1cmVkQ2xvbmUgZnJvbSAnQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUnO1xuXG5leHBvcnQgY2xhc3MgU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBpbmRleCA9IHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zZXRMYXllckZpbHRlciA9IHRoaXMuc2V0TGF5ZXJGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFsbExheWVycyA9IHRoaXMudG9nZ2xlQWxsTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVTcGVjaWZpY0xheWVycyA9IHRoaXMudG9nZ2xlU3BlY2lmaWNMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGF5ZXIudGFncyAmJiBsYXllci50YWdzLmZpbmQgJiYgbGF5ZXIudGFncy5maW5kKChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTF9KSl7XG4gICAgICBzaG93ID0gdHJ1ZVxuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpZ0RlZXBlcikge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBsYXllci5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSAmJiAhc2hvdykge1xuICAgICAgICAgIHNob3cgPSB0aGlzLmZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllci5jaGlsZHNbY2hpbGRJZF0sIHN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKTtcbiAgICAgICAgICBpZiAoc3RyRmlsdGVyICYmIHNob3cgJiYgc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hvdztcbiAgfVxuICBhcHBseU9sZFN0YXRlIChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBsZXQgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBsZXQgb2xkU3RhdGVzID0gdGhpcy5zdGF0ZXNbY29udGV4dF07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVMYXllcnMgKGxheWVycywgc3RhdGVzLCBvbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlICE9PSBvbGRTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgaWYgKG9sZFN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGhhbmRsZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMsIG9sZFN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlTGF5ZXJzKGxheWVycywgc3RhdGVzLCBvbGRTdGF0ZXMpXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhvbGRTdGF0ZXMpO1xuICB9XG4gIHRvZ2dsZVNwZWNpZmljTGF5ZXJzIChpZHMsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBsZXQgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgdGhpcy5zdGF0ZXNbY29udGV4dF0gPSBzdHJ1Y3R1cmVkQ2xvbmUoc3RhdGVzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVTcGVjaWZpY0xheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlkcy5pbmNsdWRlcyhsYXllcnNbaV0uaWQpKSB7XG4gICAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93KGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBhY3RpdmF0ZVNwZWNpZmljTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICAgIHN0YXRlcyA9IGFjdGl2YXRlU3BlY2lmaWNMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2soc3RhdGVzKTtcbiAgfVxuICB0b2dnbGVBbGxMYXllcnMoY29udGV4dCA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnN0YXRlc1tjb250ZXh0XSA9IHN0cnVjdHVyZWRDbG9uZShzdGF0ZXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBpZiAobGF5ZXJzW2ldLnZlY3RvckxheWVyIHx8bGF5ZXJzW2ldLmxvYWRlcikge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICAgIGlmIChzY29wZS5idXR0b25FbmFibGVkKSB7XG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHR5cGU6IFwiY2hhbmdlOnJlc29sdXRpb25cIlxuICAgICAgfSk7XG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci52ZWN0b3JDb2xsZWN0aW9uLmNsZWFyKCk7XG4gICAgICBzdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH1cblxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLnN0YXRlcy5pbml0aWFsID0gc3RydWN0dXJlZENsb25lKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICAgICAgdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbGV0IGxheWVycywgc3RhdGVzLCBmaWx0ZXI7XG4gICAgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxheWVyc3dpdGNoZXIuZmlsdGVyX3BsYWNlaG9sZGVyIHx8IFwiXFx1ZjAwMlwiO1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTdGFyYm9hcmRMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXJcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJCT0FSRDtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSQk9BUkQ7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxheWVyc3dpdGNoZXJcIik7XG4gICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyA9IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzaXplRnVuY3Rpb24gPSB0aGlzLnJlc2l6ZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uID0gdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbi5iaW5kKHRoaXMpO1xuICAgIC8vIHN0YXRlIHZhcmlhYmxlcyAoZXZlcnkgcHJvcGVydHkgdGhhdCBoYXMgaW5mbHVlbmNlIG9uIHRoaXMgY29tcG9uZW50KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInJpZ2h0XCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBhY3RpdmVUYWI6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHNldEFjdGl2ZVRhYihpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IGlkeH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBtYXBEYXRhID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIGxldCBidXR0b25Td2l0Y2hlciA9IFwiXCI7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHJlZ3VsYXJCdXR0b24gPSA8YnV0dG9uIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUn0gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXJcIn0gb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKDApfX0vPjtcbiAgICAgIGJ1dHRvbnMucHVzaChyZWd1bGFyQnV0dG9uKTtcbiAgICAgIGJ1dHRvbnMucHVzaCh0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaWNvbkNvZGUgPSBlbGVtZW50LmF3ZXNvbWVJY29uO1xuICAgICAgICAgIHNjb3BlLmNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCk7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gdGl0bGU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSl9fS8+O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGJ1dHRvblN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1zd2l0Y2hlclwifT5cbiAgICAgICAge2J1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgbGV0IHRhYnMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3Njb3BlLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17c2NvcGUucHJvcHMudGFiTGF5ZXJzW2luZGV4XX0gcGFyZW50Q2FsbGJhY2s9e3Njb3BlLnByb3BzLnRhYkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c2NvcGUucHJvcHMudGFiU3RhdGVzfSBvcGVuZnVuYz17c2NvcGUub3Blbn0gaGVhZGxpbmU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2NvcGUuc3RhdGUub3Blbn0gYWN0aXZlPXsoaW5kZXggKyAxKSA9PT0gc2NvcGUuc3RhdGUuYWN0aXZlVGFifS8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfV1JBUFBFUn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0hFQURMSU5FfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e21hcERhdGEuc3RhcmJvYXJkLmxhYmVsIHx8IHRoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkR9IGNsb3NlQnRuQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ0xPU0V9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAge2J1dHRvblN3aXRjaGVyfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUn0+XG4gICAgICAgICAgPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IG1hcENvbnRyb2xsZXIgPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXt0aGlzLnByb3BzLm9iakxheWVyc30gc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gcGFyZW50Q2FsbGJhY2s9e3RoaXMucHJvcHMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzfSBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9IG9wZW5mdW5jPXt0aGlzLm9wZW59IGhlYWRsaW5lPXttYXBEYXRhLmxheWVyc3dpdGNoZXIubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn0gYWN0aXZlPXtzY29wZS5zdGF0ZS5hY3RpdmVUYWIgPT09IDB9Lz5cbiAgICAgICAgICB7dGFic31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjcmVhdGVTdHlsaW5nRm9ySWNvbihpY29uQ29kZSwgaW5kZXgpIHtcbiAgICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgLy8gd2Via2l0IGhhY2s6XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgbGV0IHN0eWxlU2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoXCJidXR0b24uYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXggKyBcIjpiZWZvcmUge1xcblwiICtcbiAgICAgIFwiICBjb250ZW50OiBcXFwiXFxcXFwiICsgaWNvbkNvZGUgKyBcIlxcXCI7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuXCIgK1xuICAgICAgXCIgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cIiArXG4gICAgICBcIn1cIilcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSwgKCkgPT4gdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSk7XG4gIH1cblxuICByZXNpemVGdW5jdGlvbigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHNjb3BlLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSBcIlN0YXJib2FyZFBhbmVsXCIgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFuZWxWYWwgIT09IFwiU3RhcmJvYXJkUGFuZWxcIiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlN0YXJib2FyZFBhbmVsXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICAvKipcbiAgICogVW5kb2VzIHRoZSBwcmV2aW91cyBidXR0b24gbW92ZW1lbnQuXG4gICAqL1xuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGVudGVyRXZlbnQgKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBDcmVhdGUgbGFiZWwgZm9yIGludGVyYWN0aW9uLXRyaWdnZXJcbiAgICAgICAgbGV0IHN0eWxlVHJpZ2dlckxhYmVsID0gbnVsbDtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMuc3R5bGVJZF07XG4gICAgICAgIGxldCBzdHlsZURhdGEgPSBsb2NzdHlsZS5sb2NTdHlsZUFycjtcbiAgICAgICAgbGV0IHN0eWxvciA9IGxvY3N0eWxlLnN0eWxlICYmIGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIikgPyBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpOiBudWxsO1xuICAgICAgICBsZXQgc3R5bDByID0gQXJyYXkuaXNBcnJheShzdHlsb3IpID8gc3R5bG9yWzBdOiBzdHlsb3I7XG4gICAgICAgIGxldCBzdHlsZVR5cGUgPSBzdHlsZURhdGEgPyBzdHlsZURhdGEuc3R5bGV0eXBlIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIGxldCB0b29sdGlwID0gdGhpcy5wcm9wcy50b29sdGlwIHx8IFwiXCI7XG4gICAgICAgIGlmIChzdHlsZURhdGEgJiYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSkge1xuICAgICAgICAgICAgbGV0IHN0eWxlSWNvbiA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaWNvblNyYztcbiAgICAgICAgICAgIGlmICgoc3R5bGVEYXRhLmljb25fc3JjICYmIHN0eWxlRGF0YS5pY29uX3NyYy5pbmRleE9mKCcuJykgIT09IC0xKSB8fCAoc3R5bGVEYXRhLnN2Z1NyYyAmJiBzdHlsZURhdGEuc3ZnU3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25cIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLmljb25fc3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5zdmdTcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtpY29uU3JjfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19IC8+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsMHIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVJbWFnZSA9IHN0eWwwci5nZXRJbWFnZSAmJiB0eXBlb2Ygc3R5bDByLmdldEltYWdlID09PSBcImZ1bmN0aW9uXCIgJiYgc3R5bDByLmdldEltYWdlKCkgPyBzdHlsMHIuZ2V0SW1hZ2UoKTogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVJbWFnZSAmJiBzdHlsZUltYWdlLmdldFNyYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlSWNvbiA9IDxpbWcgc3JjPXtzdHlsZUltYWdlLmdldFNyYygpfSBzdHlsZT17e2hlaWdodDogMjUsIHdpZHRoOiAyNX19Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIHRhYkluZGV4PXsxfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9IHRpdGxlPXt0b29sdGlwfSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMuZW50ZXJFdmVudChldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHsgLy8gJ3BvaW50JywgJ3NxdWFyZScsICdzdGFyJywgJ3gnLCAnY3Jvc3MnLCAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1RBUjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1g7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb2xvciwgYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBpZiAoc3R5bDByICYmIHN0eWwwci5nZXRGaWxsKCkgJiYgc3R5bDByLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBzdHlsMHIuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSBzdHlsMHIuZ2V0U3Ryb2tlKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvclswXSwgc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0eWxlRWxlbWVudHMgPSB7XG4gICAgICAgICAgICAgICAgXCItLXZhci1jb2xvclwiIDogY29sb3IsXG4gICAgICAgICAgICAgICAgXCItLXZhci1ib3JkZXJjb2xvclwiIDogYm9yZGVyY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dG9vbHRpcH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIm9sRXh0ZW50IiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdTdGFyYm9hcmRTdHlsZSIsIl9sYXllciIsIl9GZWF0dXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkM0Z1N0YXJib2FyZExheWVyRWxlbWVudCIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwic2hvd0xheWVyIiwic2hvd0VsZW1lbnRzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmVhdHVyZXMiLCJ2ZWN0b3JMYXllciIsIkFycmF5IiwiaXNBcnJheSIsIlZlY3RvciIsImxheWVyIiwibGF5ZXJDb250cm9sbGVyIiwibWFwQ29udHJvbGxlciIsInByb3h5Iiwic2hvdyIsImxvYWRlciIsImlkIiwibGF5ZXJLZXkiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUxheWVyIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoYW5nZUNoaWxkU3RhdGUiLCJjaGlsZCIsImNoaWxkU3RhdGUiLCJhY3RpdmUiLCJjaGlsZHMiLCJjaGlsZElkIiwiY3VycmVudENoaWxkU3RhdGUiLCJjaGlsZFN0YXRlcyIsIm5ld0NoaWxkU3RhdGUiLCJuZXdTdGF0ZSIsImxheWVyU3RhdGVzIiwia2V5SWQiLCJsYXllckVudGVyIiwid2hpY2giLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImNvbGxhcHNlZCIsImxheWVyU3RhdGUiLCJpZ25vcmVDaGlsZHMiLCJsYXllckNoaWxkcyIsIl90aGlzMiIsImJvb2xab29tVG8iLCJ6b29tVG8iLCJzZXRDaGlsZEZlYXR1cmVGbGFnIiwid2luZG93Iiwic2V0VGltZW91dCIsIm1hcERhdGEiLCJzdGFyYm9hcmQiLCJvcGVuUG9wdXAiLCJmZWF0dXJlIiwicG9wdXAiLCJGZWF0dXJlIiwiaGFuZGxlUG9wdXAiLCJsYXllclpvb21Ub0VudGVyIiwic3RhdGUiLCJyZW5kZXIiLCJfdGhpczMiLCJzdHlsZVBpY3R1cmUiLCJzcGFuWm9vbSIsImRhdGEiLCJzaG93TG9jc3R5bGVzIiwibG9jc3R5bGUiLCJzdHlsZURhdGEiLCJhcnJMb2NTdHlsZXMiLCJjcmVhdGVFbGVtZW50IiwiQzRnU3RhcmJvYXJkU3R5bGUiLCJzdHlsZUlkIiwidG9vbHRpcCIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0JFRk9SRSIsIm5hbWUiLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSIiwiY2xpY2tFdmVudCIsImludmVydFpvb21BY3RpdmF0ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwib25Nb3VzZVVwIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJGcmFnbWVudCIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJ0YWJJbmRleCIsImFsdCIsIlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMSIsIlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMiIsIm9uS2V5UHJlc3MiLCJjc3NFbGVtZW50Q2xhc3MiLCJzcGFuIiwiU1RBUkJPQVJEX0VMRU1FTlRfQ0hJTERTIiwiSUNPTiIsIm1hcCIsIml0ZW0iLCJieVBhc3NDaGlsZHMiLCJmaWx0ZXJGdW5jIiwic3RyRmlsdGVyIiwiZm5SZXNpemUiLCJDb21wb25lbnQiLCJfYzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwiX3N0cnVjdHVyZWRDbG9uZSIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJqIiwiZ2V0SW5pdGlhbFN0YXRlQ2hpbGQiLCJuZXdTdGF0ZXMiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwiY29tcG9uZW50Iiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJ0b2dnbGVTcGVjaWZpY0xheWVycyIsInN0YXRlcyIsImluaXRpYWxpemVkIiwibGF5ZXJGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsImpRdWVyeSIsInZhbCIsInNldFN0YXRlIiwiZGlnRGVlcGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJ0YWdzIiwiZmluZCIsImFwcGx5T2xkU3RhdGUiLCJjb250ZXh0IiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwib2xkU3RhdGVzIiwiaGFuZGxlTGF5ZXJzIiwiaWRzIiwic3RydWN0dXJlZENsb25lIiwiYWN0aXZhdGVTcGVjaWZpY0xheWVycyIsImluY2x1ZGVzIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImdldFZpZXciLCJkaXNwYXRjaEV2ZW50IiwidHlwZSIsInZlY3RvckNvbGxlY3Rpb24iLCJjbGVhciIsImluaXRpYWwiLCJnZXRJbml0aWFsU3RhdGVzIiwiZmlsdGVyIiwibGF5ZXJzd2l0Y2hlciIsInBsYWNlaG9sZGVyIiwiZmlsdGVyX3BsYWNlaG9sZGVyIiwib25JbnB1dCIsImhlYWRsaW5lIiwiYnV0dG9uIiwiTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsImNhbGxiYWNrRnVuY3Rpb24iLCJfY29udHJvbCIsIl9jNGdTdGFyYm9hcmRMYXllcnN3aXRjaGVyIiwiX2M0Z01hcHNJMThuIiwiX2M0Z01hcHNVdGlscyIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJpbm5lclRleHQiLCJDVFJMX1NUQVJCT0FSRCIsImFwcGVuZENoaWxkIiwib3BlbiIsImV4dGVybmFsIiwib24iLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0QWN0aXZlVGFiIiwiaWR4IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJ1dHRvblN3aXRjaGVyIiwiYnV0dG9ucyIsInRhYkxheWVycyIsInJlZ3VsYXJCdXR0b24iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJwdXNoIiwiaWNvbkNvZGUiLCJhd2Vzb21lSWNvbiIsInRhYnMiLCJ0YWJDYWxsYmFjayIsInRhYlN0YXRlcyIsIm9wZW5mdW5jIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJoZWFkZXIiLCJsYWJlbCIsIlNUQVJCT0FSRCIsImNsb3NlQnRuQ2xhc3MiLCJTVEFSQk9BUkRfQ0xPU0UiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsInN0eWxlIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwic3R5bGVTaGVldCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInNldE9wZW5Db21wb25lbnQiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIiwiX2dlb20iLCJlbnRlckV2ZW50Iiwic3R5bGVUcmlnZ2VyTGFiZWwiLCJsb2NTdHlsZUFyciIsInN0eWxvciIsImdlb21ldHJ5IiwiUG9pbnQiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJzdHlsZUljb24iLCJpY29uU3JjIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlSW1hZ2UiLCJnZXRJbWFnZSIsImdldFNyYyIsIlNUQVJCT0FSRF9MT0NTVFlMRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkUiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1RBUiIsIlNUQVJCT0FSRF9MT0NTVFlMRV9YIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFIiwiY29sb3IiLCJib3JkZXJjb2xvciIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJnZXRDb2xvciIsImZpbGxjb2xvciIsInN0cm9rZWNvbG9yIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5Iiwic3R5bGVFbGVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=