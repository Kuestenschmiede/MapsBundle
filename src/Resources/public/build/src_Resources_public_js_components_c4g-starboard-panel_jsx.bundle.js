"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-starboard-panel_jsx"],{

/***/ "./node_modules/@ungap/structured-clone/cjs/deserialize.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/deserialize.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


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


/***/ },

/***/ "./node_modules/@ungap/structured-clone/cjs/index.js"
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/index.js ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


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


/***/ },

/***/ "./node_modules/@ungap/structured-clone/cjs/serialize.js"
/*!***************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/serialize.js ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


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


/***/ },

/***/ "./node_modules/@ungap/structured-clone/cjs/types.js"
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/cjs/types.js ***!
  \***********************************************************/
(__unused_webpack_module, exports) {


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


/***/ },

/***/ "./src/Resources/public/js/components/c4g-starboard-layer-element.jsx"
/*!****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-layer-element.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
var _structuredClone = _interopRequireDefault(__webpack_require__(/*! @ungap/structured-clone */ "./node_modules/@ungap/structured-clone/cjs/index.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.md")
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.layerStates !== nextProps.layerStates) {
        return true;
      }
      if (this.props.strFilter !== nextProps.strFilter) {
        return true;
      }
      if (this.props.byPassChilds !== nextProps.byPassChilds) {
        return true;
      }
      if (this.props.layer !== nextProps.layer) {
        return true;
      }
      return false;
    }
  }, {
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
            childState.childStates[childId] = this.changeChildState(child.childs[childId], childState.childStates[childId], active);
          }
        }
      }
      childState.active = active;
      return childState;
    }
  }, {
    key: "parentCallback",
    value: function parentCallback(key, newChildState) {
      var newState = (0, _structuredClone["default"])(this.props.layerStates);
      newState.childStates[key] = newChildState;
      if (newState.active !== newChildState.active) {
        if (newChildState.active) {
          this.showLayer();
        } else {
          this.hideLayer();
        }
        newState.active = newChildState.active;
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
      var newState = (0, _structuredClone["default"])(this.props.layerStates);
      if (!this.props.layerStates.active) {
        this.showLayer();
        show = true;
        if (this.props.layerStates.collapsed) {
          newState.collapsed = false;
        }
        newState.active = true;
      } else {
        this.hideLayer();
        newState.active = false;
      }
      if (this.props.layer.childs && this.props.layer.childs.length > 0 && !this.props.layer.ignoreChilds) {
        var layerChilds = this.props.layer.childs;
        for (var childId in layerChilds) {
          if (layerChilds.hasOwnProperty(childId)) {
            if (layerChilds[childId].key && layerChilds[childId].key !== layerChilds[childId].id) {
              if (show) {
                this.showLayer(layerChilds[childId]);
              } else {
                this.hideLayer(layerChilds[childId]);
              }
            }
            newState.childStates[childId] = this.changeChildState(layerChilds[childId], newState.childStates[childId], newState.active);
          }
        }
      }
      this.props.parentCallback(this.props.keyId, newState);
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
      var newState = (0, _structuredClone["default"])(this.props.layerStates);
      newState.childStates[id] = state;
      this.props.changeCollapseState(this.props.keyId, newState);
    }
  }, {
    key: "spanClick",
    value: function spanClick(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      var newState = (0, _structuredClone["default"])(this.props.layerStates);
      newState.collapsed = !this.props.layerStates.collapsed;
      this.props.changeCollapseState(this.props.keyId, newState);
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx"
/*!****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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
      var newStates = (0, _structuredClone["default"])(_this.props.layerStates);
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
      } else if (layer.tags && layer.tags.find && layer.tags.find(function (element) {
        return element.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1;
      })) {
        show = true;
      } else if (digDeeper) {
        for (var childId in layer.childs) {
          if (layer.childs.hasOwnProperty(childId) && !show) {
            show = this.filterFunc(strFilter, layer.childs[childId], state.childStates ? state.childStates[childId] : {});
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
      if (this.chunkTimer) {
        cancelAnimationFrame(this.chunkTimer);
        this.chunkTimer = null;
      }
      var states = (0, _structuredClone["default"])(this.props.layerStates);
      var layers = this.props.objLayers;
      if (context) {
        this.states[context] = (0, _structuredClone["default"])(states);
      }
      function activateLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          states[i].active = true;
          if (states[i].childStates && states[i].childStates.length > 0 && layers[i] && layers[i].childs) {
            states[i].childStates = activateLayers(layers[i].childs, states[i].childStates);
          }
        }
        scope.buttonEnabled = true;
        return states;
      }
      function deactivateLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          states[i].active = false;
          if (states[i].childStates && states[i].childStates.length > 0 && layers[i] && layers[i].childs) {
            states[i].childStates = deactivateLayers(layers[i].childs, states[i].childStates);
          }
        }
        scope.buttonEnabled = false;
        return states;
      }
      if (scope.buttonEnabled) {
        var _collectDeactivateOperations = function collectDeactivateOperations(layers, states) {
          for (var i = 0; i < states.length; i++) {
            allLayerOperations.push({
              loader: layers[i].loader,
              data: layers[i].features || layers[i].vectorLayer,
              show: false
            });
            if (states[i].childStates && states[i].childStates.length > 0 && layers[i] && layers[i].childs) {
              _collectDeactivateOperations(layers[i].childs, states[i].childStates);
            }
          }
        };
        scope.props.mapController.map.getView().dispatchEvent({
          type: 'change:resolution'
        });
        states = deactivateLayers(layers, states);
        this.props.parentCallback(states);
        // Processing layers asynchronously to prevent browser freeze
        var allLayerOperations = [];
        _collectDeactivateOperations(layers, states);
        var chunkSize = 25;
        var currentIndex = 0;
        var _processChunks = function processChunks() {
          var end = Math.min(currentIndex + chunkSize, allLayerOperations.length);
          for (var i = currentIndex; i < end; i++) {
            var op = allLayerOperations[i];
            if (op.loader || op.data) {
              scope.props.mapController.proxy.layerController.hide(op.loader, op.data);
            }
          }
          currentIndex = end;
          if (currentIndex < allLayerOperations.length) {
            scope.chunkTimer = requestAnimationFrame(_processChunks);
          } else {
            scope.chunkTimer = null;
          }
        };
        scope.chunkTimer = requestAnimationFrame(_processChunks);
      } else {
        var _collectActivateOperations = function collectActivateOperations(layers, states) {
          for (var i = 0; i < states.length; i++) {
            _allLayerOperations.push({
              loader: layers[i].loader,
              data: layers[i].features || layers[i].vectorLayer,
              show: true
            });
            if (states[i].childStates && states[i].childStates.length > 0 && layers[i] && layers[i].childs) {
              _collectActivateOperations(layers[i].childs, states[i].childStates);
            }
          }
        };
        states = activateLayers(layers, states);
        // Processing layers asynchronously to prevent browser freeze
        var _allLayerOperations = [];
        _collectActivateOperations(layers, states);
        var _chunkSize = 25;
        var _currentIndex = 0;
        var _processChunks2 = function processChunks() {
          var end = Math.min(_currentIndex + _chunkSize, _allLayerOperations.length);
          for (var i = _currentIndex; i < end; i++) {
            var op = _allLayerOperations[i];
            if (op.loader || op.data) {
              scope.props.mapController.proxy.layerController.show(op.loader, op.data);
            }
          }
          _currentIndex = end;
          if (_currentIndex < _allLayerOperations.length) {
            scope.chunkTimer = requestAnimationFrame(_processChunks2);
          } else {
            scope.chunkTimer = null;
          }
        };
        this.props.parentCallback(states);
        scope.chunkTimer = requestAnimationFrame(_processChunks2);
      }
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {
      var newStates = (0, _structuredClone["default"])(this.props.layerStates);
      newStates[id] = state;
      this.props.changeCollapseState(id, state);
    }
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
            changeCollapseState: _this2.changeCollapseState,
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-starboard-panel.jsx"
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-panel.jsx ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-starboard-style.jsx"
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-style.jsx ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXBhbmVsX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsRUFBRSxFQUFFLG1CQUFPLENBQUMsdUVBQVk7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNuRk47QUFDYixPQUFPLGFBQWEsRUFBRSxtQkFBTyxDQUFDLG1GQUFrQjtBQUNoRCxPQUFPLFdBQVcsRUFBRSxtQkFBTyxDQUFDLCtFQUFnQjs7QUFFNUM7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksa0RBQWtELEdBQUc7QUFDakU7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQixpQkFBaUI7Ozs7Ozs7Ozs7O0FD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c2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvZGVzZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9janMvc2VyaWFsaXplLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvY2pzL3R5cGVzLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXBhbmVsLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXN0eWxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIFZPSUQsIFBSSU1JVElWRSwgQVJSQVksIE9CSkVDVCwgREFURSwgUkVHRVhQLCBNQVAsIFNFVCwgRVJST1IsIEJJR0lOVFxufSA9IHJlcXVpcmUoJy4vdHlwZXMuanMnKTtcblxuY29uc3QgZW52ID0gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnID8gc2VsZiA6IGdsb2JhbFRoaXM7XG5cbmNvbnN0IGRlc2VyaWFsaXplciA9ICgkLCBfKSA9PiB7XG4gIGNvbnN0IGFzID0gKG91dCwgaW5kZXgpID0+IHtcbiAgICAkLnNldChpbmRleCwgb3V0KTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xuXG4gIGNvbnN0IHVucGFpciA9IGluZGV4ID0+IHtcbiAgICBpZiAoJC5oYXMoaW5kZXgpKVxuICAgICAgcmV0dXJuICQuZ2V0KGluZGV4KTtcblxuICAgIGNvbnN0IFt0eXBlLCB2YWx1ZV0gPSBfW2luZGV4XTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUFJJTUlUSVZFOlxuICAgICAgY2FzZSBWT0lEOlxuICAgICAgICByZXR1cm4gYXModmFsdWUsIGluZGV4KTtcbiAgICAgIGNhc2UgQVJSQVk6IHtcbiAgICAgICAgY29uc3QgYXJyID0gYXMoW10sIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiB2YWx1ZSlcbiAgICAgICAgICBhcnIucHVzaCh1bnBhaXIoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH1cbiAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGFzKHt9LCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5kZXhdIG9mIHZhbHVlKVxuICAgICAgICAgIG9iamVjdFt1bnBhaXIoa2V5KV0gPSB1bnBhaXIoaW5kZXgpO1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuICAgICAgY2FzZSBEQVRFOlxuICAgICAgICByZXR1cm4gYXMobmV3IERhdGUodmFsdWUpLCBpbmRleCk7XG4gICAgICBjYXNlIFJFR0VYUDoge1xuICAgICAgICBjb25zdCB7c291cmNlLCBmbGFnc30gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBSZWdFeHAoc291cmNlLCBmbGFncyksIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTUFQOiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IGFzKG5ldyBNYXAsIGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBpbmRleF0gb2YgdmFsdWUpXG4gICAgICAgICAgbWFwLnNldCh1bnBhaXIoa2V5KSwgdW5wYWlyKGluZGV4KSk7XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgICB9XG4gICAgICBjYXNlIFNFVDoge1xuICAgICAgICBjb25zdCBzZXQgPSBhcyhuZXcgU2V0LCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgdmFsdWUpXG4gICAgICAgICAgc2V0LmFkZCh1bnBhaXIoaW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICAgIH1cbiAgICAgIGNhc2UgRVJST1I6IHtcbiAgICAgICAgY29uc3Qge25hbWUsIG1lc3NhZ2V9ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBhcyhuZXcgZW52W25hbWVdKG1lc3NhZ2UpLCBpbmRleCk7XG4gICAgICB9XG4gICAgICBjYXNlIEJJR0lOVDpcbiAgICAgICAgcmV0dXJuIGFzKEJpZ0ludCh2YWx1ZSksIGluZGV4KTtcbiAgICAgIGNhc2UgJ0JpZ0ludCc6XG4gICAgICAgIHJldHVybiBhcyhPYmplY3QoQmlnSW50KHZhbHVlKSksIGluZGV4KTtcbiAgICAgIGNhc2UgJ0FycmF5QnVmZmVyJzpcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBVaW50OEFycmF5KHZhbHVlKS5idWZmZXIsIHZhbHVlKTtcbiAgICAgIGNhc2UgJ0RhdGFWaWV3Jzoge1xuICAgICAgICBjb25zdCB7IGJ1ZmZlciB9ID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuICAgICAgICByZXR1cm4gYXMobmV3IERhdGFWaWV3KGJ1ZmZlciksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFzKG5ldyBlbnZbdHlwZV0odmFsdWUpLCBpbmRleCk7XG4gIH07XG5cbiAgcmV0dXJuIHVucGFpcjtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVzZXJpYWxpemVkIHZhbHVlIGZyb20gYSBzZXJpYWxpemVkIGFycmF5IG9mIFJlY29yZHMuXG4gKiBAcGFyYW0ge1JlY29yZFtdfSBzZXJpYWxpemVkIGEgcHJldmlvdXNseSBzZXJpYWxpemVkIHZhbHVlLlxuICogQHJldHVybnMge2FueX1cbiAqL1xuY29uc3QgZGVzZXJpYWxpemUgPSBzZXJpYWxpemVkID0+IGRlc2VyaWFsaXplcihuZXcgTWFwLCBzZXJpYWxpemVkKSgwKTtcbmV4cG9ydHMuZGVzZXJpYWxpemUgPSBkZXNlcmlhbGl6ZTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtkZXNlcmlhbGl6ZX0gPSByZXF1aXJlKCcuL2Rlc2VyaWFsaXplLmpzJyk7XG5jb25zdCB7c2VyaWFsaXplfSA9IHJlcXVpcmUoJy4vc2VyaWFsaXplLmpzJyk7XG5cbi8qKlxuICogQHR5cGVkZWYge0FycmF5PHN0cmluZyxhbnk+fSBSZWNvcmQgYSB0eXBlIHJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHNlcmlhbGl6ZWQgUmVjb3Jkcy5cbiAqIEBwYXJhbSB7YW55fSBhbnkgYSBzZXJpYWxpemFibGUgdmFsdWUuXG4gKiBAcGFyYW0ge3t0cmFuc2Zlcj86IGFueVtdLCBqc29uPzogYm9vbGVhbiwgbG9zc3k/OiBib29sZWFufT99IG9wdGlvbnMgYW4gb2JqZWN0IHdpdGhcbiAqIGEgdHJhbnNmZXIgb3B0aW9uIChpZ25vcmVkIHdoZW4gcG9seWZpbGxlZCkgYW5kL29yIG5vbiBzdGFuZGFyZCBmaWVsZHMgdGhhdFxuICogZmFsbGJhY2sgdG8gdGhlIHBvbHlmaWxsIGlmIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UmVjb3JkW119XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pLmRlZmF1bHQgPSB0eXBlb2Ygc3RydWN0dXJlZENsb25lID09PSBcImZ1bmN0aW9uXCIgP1xuICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgKGFueSwgb3B0aW9ucykgPT4gKFxuICAgIG9wdGlvbnMgJiYgKCdqc29uJyBpbiBvcHRpb25zIHx8ICdsb3NzeScgaW4gb3B0aW9ucykgP1xuICAgICAgZGVzZXJpYWxpemUoc2VyaWFsaXplKGFueSwgb3B0aW9ucykpIDogc3RydWN0dXJlZENsb25lKGFueSlcbiAgKSA6XG4gIChhbnksIG9wdGlvbnMpID0+IGRlc2VyaWFsaXplKHNlcmlhbGl6ZShhbnksIG9wdGlvbnMpKTtcbiAgLyogYzggaWdub3JlIHN0b3AgKi9cblxuZXhwb3J0cy5kZXNlcmlhbGl6ZSA9IGRlc2VyaWFsaXplO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIFZPSUQsIFBSSU1JVElWRSwgQVJSQVksIE9CSkVDVCwgREFURSwgUkVHRVhQLCBNQVAsIFNFVCwgRVJST1IsIEJJR0lOVFxufSA9IHJlcXVpcmUoJy4vdHlwZXMuanMnKTtcblxuY29uc3QgRU1QVFkgPSAnJztcblxuY29uc3Qge3RvU3RyaW5nfSA9IHt9O1xuY29uc3Qge2tleXN9ID0gT2JqZWN0O1xuXG5jb25zdCB0eXBlT2YgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUpXG4gICAgcmV0dXJuIFtQUklNSVRJVkUsIHR5cGVdO1xuXG4gIGNvbnN0IGFzU3RyaW5nID0gdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICBzd2l0Y2ggKGFzU3RyaW5nKSB7XG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIFtBUlJBWSwgRU1QVFldO1xuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gW09CSkVDVCwgRU1QVFldO1xuICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgcmV0dXJuIFtEQVRFLCBFTVBUWV07XG4gICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgIHJldHVybiBbUkVHRVhQLCBFTVBUWV07XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBbTUFQLCBFTVBUWV07XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIHJldHVybiBbU0VULCBFTVBUWV07XG4gICAgY2FzZSAnRGF0YVZpZXcnOlxuICAgICAgcmV0dXJuIFtBUlJBWSwgYXNTdHJpbmddO1xuICB9XG5cbiAgaWYgKGFzU3RyaW5nLmluY2x1ZGVzKCdBcnJheScpKVxuICAgIHJldHVybiBbQVJSQVksIGFzU3RyaW5nXTtcblxuICBpZiAoYXNTdHJpbmcuaW5jbHVkZXMoJ0Vycm9yJykpXG4gICAgcmV0dXJuIFtFUlJPUiwgYXNTdHJpbmddO1xuXG4gIHJldHVybiBbT0JKRUNULCBhc1N0cmluZ107XG59O1xuXG5jb25zdCBzaG91bGRTa2lwID0gKFtUWVBFLCB0eXBlXSkgPT4gKFxuICBUWVBFID09PSBQUklNSVRJVkUgJiZcbiAgKHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gJ3N5bWJvbCcpXG4pO1xuXG5jb25zdCBzZXJpYWxpemVyID0gKHN0cmljdCwganNvbiwgJCwgXykgPT4ge1xuXG4gIGNvbnN0IGFzID0gKG91dCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IF8ucHVzaChvdXQpIC0gMTtcbiAgICAkLnNldCh2YWx1ZSwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBjb25zdCBwYWlyID0gdmFsdWUgPT4ge1xuICAgIGlmICgkLmhhcyh2YWx1ZSkpXG4gICAgICByZXR1cm4gJC5nZXQodmFsdWUpO1xuXG4gICAgbGV0IFtUWVBFLCB0eXBlXSA9IHR5cGVPZih2YWx1ZSk7XG4gICAgc3dpdGNoIChUWVBFKSB7XG4gICAgICBjYXNlIFBSSU1JVElWRToge1xuICAgICAgICBsZXQgZW50cnkgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYmlnaW50JzpcbiAgICAgICAgICAgIFRZUEUgPSBCSUdJTlQ7XG4gICAgICAgICAgICBlbnRyeSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgIGlmIChzdHJpY3QpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBzZXJpYWxpemUgJyArIHR5cGUpO1xuICAgICAgICAgICAgZW50cnkgPSBudWxsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJldHVybiBhcyhbVk9JRF0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIGVudHJ5XSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgY2FzZSBBUlJBWToge1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIGxldCBzcHJlYWQgPSB2YWx1ZTtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ0RhdGFWaWV3Jykge1xuICAgICAgICAgICAgc3ByZWFkID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUuYnVmZmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ0FycmF5QnVmZmVyJykge1xuICAgICAgICAgICAgc3ByZWFkID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIFsuLi5zcHJlYWRdXSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGFycl0sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB2YWx1ZSlcbiAgICAgICAgICBhcnIucHVzaChwYWlyKGVudHJ5KSk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICAgIGNhc2UgT0JKRUNUOiB7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdCaWdJbnQnOlxuICAgICAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIHZhbHVlLnRvU3RyaW5nKCldLCB2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICByZXR1cm4gYXMoW3R5cGUsIHZhbHVlLnZhbHVlT2YoKV0sIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoanNvbiAmJiAoJ3RvSlNPTicgaW4gdmFsdWUpKVxuICAgICAgICAgIHJldHVybiBwYWlyKHZhbHVlLnRvSlNPTigpKTtcblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXModmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHN0cmljdCB8fCAhc2hvdWxkU2tpcCh0eXBlT2YodmFsdWVba2V5XSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKFtwYWlyKGtleSksIHBhaXIodmFsdWVba2V5XSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIERBVEU6XG4gICAgICAgIHJldHVybiBhcyhbVFlQRSwgdmFsdWUudG9JU09TdHJpbmcoKV0sIHZhbHVlKTtcbiAgICAgIGNhc2UgUkVHRVhQOiB7XG4gICAgICAgIGNvbnN0IHtzb3VyY2UsIGZsYWdzfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIHtzb3VyY2UsIGZsYWdzfV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTUFQOiB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcyhbVFlQRSwgZW50cmllc10sIHZhbHVlKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBlbnRyeV0gb2YgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICEoc2hvdWxkU2tpcCh0eXBlT2Yoa2V5KSkgfHwgc2hvdWxkU2tpcCh0eXBlT2YoZW50cnkpKSkpXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goW3BhaXIoa2V5KSwgcGFpcihlbnRyeSldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIFNFVDoge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoc3RyaWN0IHx8ICFzaG91bGRTa2lwKHR5cGVPZihlbnRyeSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKHBhaXIoZW50cnkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge21lc3NhZ2V9ID0gdmFsdWU7XG4gICAgcmV0dXJuIGFzKFtUWVBFLCB7bmFtZTogdHlwZSwgbWVzc2FnZX1dLCB2YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHBhaXI7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcsYW55Pn0gUmVjb3JkIGEgdHlwZSByZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBzZXJpYWxpemVkIFJlY29yZHMuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgYSBzZXJpYWxpemFibGUgdmFsdWUuXG4gKiBAcGFyYW0ge3tqc29uPzogYm9vbGVhbiwgbG9zc3k/OiBib29sZWFufT99IG9wdGlvbnMgYW4gb2JqZWN0IHdpdGggYSBgbG9zc3lgIG9yIGBqc29uYCBwcm9wZXJ0eSB0aGF0LFxuICogIGlmIGB0cnVlYCwgd2lsbCBub3QgdGhyb3cgZXJyb3JzIG9uIGluY29tcGF0aWJsZSB0eXBlcywgYW5kIGJlaGF2ZSBtb3JlXG4gKiAgbGlrZSBKU09OIHN0cmluZ2lmeSB3b3VsZCBiZWhhdmUuIFN5bWJvbCBhbmQgRnVuY3Rpb24gd2lsbCBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UmVjb3JkW119XG4gKi9cbiBjb25zdCBzZXJpYWxpemUgPSAodmFsdWUsIHtqc29uLCBsb3NzeX0gPSB7fSkgPT4ge1xuICBjb25zdCBfID0gW107XG4gIHJldHVybiBzZXJpYWxpemVyKCEoanNvbiB8fCBsb3NzeSksICEhanNvbiwgbmV3IE1hcCwgXykodmFsdWUpLCBfO1xufTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgVk9JRCAgICAgICA9IC0xO1xuZXhwb3J0cy5WT0lEID0gVk9JRDtcbmNvbnN0IFBSSU1JVElWRSAgPSAwO1xuZXhwb3J0cy5QUklNSVRJVkUgPSBQUklNSVRJVkU7XG5jb25zdCBBUlJBWSAgICAgID0gMTtcbmV4cG9ydHMuQVJSQVkgPSBBUlJBWTtcbmNvbnN0IE9CSkVDVCAgICAgPSAyO1xuZXhwb3J0cy5PQkpFQ1QgPSBPQkpFQ1Q7XG5jb25zdCBEQVRFICAgICAgID0gMztcbmV4cG9ydHMuREFURSA9IERBVEU7XG5jb25zdCBSRUdFWFAgICAgID0gNDtcbmV4cG9ydHMuUkVHRVhQID0gUkVHRVhQO1xuY29uc3QgTUFQICAgICAgICA9IDU7XG5leHBvcnRzLk1BUCA9IE1BUDtcbmNvbnN0IFNFVCAgICAgICAgPSA2O1xuZXhwb3J0cy5TRVQgPSBTRVQ7XG5jb25zdCBFUlJPUiAgICAgID0gNztcbmV4cG9ydHMuRVJST1IgPSBFUlJPUjtcbmNvbnN0IEJJR0lOVCAgICAgPSA4O1xuZXhwb3J0cy5CSUdJTlQgPSBCSUdJTlQ7XG4vLyBleHBvcnQgY29uc3QgU1lNQk9MID0gOTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHN0cnVjdHVyZWRDbG9uZSBmcm9tICdAdW5nYXAvc3RydWN0dXJlZC1jbG9uZSc7XG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMubGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGF5ZXJab29tVG8gPSB0aGlzLmxheWVyWm9vbVRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcGFuQ2xpY2sgPSB0aGlzLnNwYW5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgIT09IG5leHRQcm9wcy5sYXllclN0YXRlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnN0ckZpbHRlciAhPT0gbmV4dFByb3BzLnN0ckZpbHRlcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyAhPT0gbmV4dFByb3BzLmJ5UGFzc0NoaWxkcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxheWVyICE9PSBuZXh0UHJvcHMubGF5ZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzaG93TGF5ZXIoc2hvd0VsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoc2hvd0VsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzaG93RWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChzaG93RWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBzaG93RWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcyxzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKXtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkLCBzY29wZS5wcm9wcy5sYXllcktleSA/IHNjb3BlLnByb3BzLmxheWVyS2V5IDogc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHNob3dFbGVtZW50cywgc2hvd0VsZW1lbnRzLmlkLCBzaG93RWxlbWVudHMua2V5ID8gc2hvd0VsZW1lbnRzLmtleSA6IHNob3dFbGVtZW50cy5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQsIHNjb3BlLnByb3BzLmxheWVyS2V5ID8gc2NvcGUucHJvcHMubGF5ZXJLZXkgOiBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZUxheWVyKGhpZGVFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlkZUVsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IGhpZGVFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoaGlkZUVsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCwgc2NvcGUucHJvcHMubGF5ZXJLZXkgPyBzY29wZS5wcm9wcy5sYXllcktleSA6IHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBoaWRlRWxlbWVudHMsIGhpZGVFbGVtZW50cy5pZCwgaGlkZUVsZW1lbnRzLmtleSA/IGhpZGVFbGVtZW50cy5rZXkgOiBoaWRlRWxlbWVudHMuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkLCBzY29wZS5wcm9wcy5sYXllcktleSA/IHNjb3BlLnByb3BzLmxheWVyS2V5IDogc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VDaGlsZFN0YXRlIChjaGlsZCwgY2hpbGRTdGF0ZSwgYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkcyAmJiBjaGlsZC5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBjaGlsZC5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUoY2hpbGQuY2hpbGRzW2NoaWxkSWRdLCBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBhY3RpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNoaWxkU3RhdGUuYWN0aXZlID0gYWN0aXZlO1xuICAgIHJldHVybiBjaGlsZFN0YXRlO1xuICB9XG4gIHBhcmVudENhbGxiYWNrIChrZXksIG5ld0NoaWxkU3RhdGUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSBzdHJ1Y3R1cmVkQ2xvbmUodGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNba2V5XSA9IG5ld0NoaWxkU3RhdGU7XG4gICAgaWYgKG5ld1N0YXRlLmFjdGl2ZSAhPT0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgICBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSk7XG4gIH1cbiAgbGF5ZXJFbnRlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBsZXQgbmV3U3RhdGUgPSBzdHJ1Y3R1cmVkQ2xvbmUodGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkKSB7XG4gICAgICAgIG5ld1N0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgbmV3U3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgICAgbmV3U3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwICYmICF0aGlzLnByb3BzLmxheWVyLmlnbm9yZUNoaWxkcykge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGlmIChsYXllckNoaWxkc1tjaGlsZElkXS5rZXkgJiYgKGxheWVyQ2hpbGRzW2NoaWxkSWRdLmtleSAhPT0gbGF5ZXJDaGlsZHNbY2hpbGRJZF0uaWQpKSB7XG4gICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICB0aGlzLnNob3dMYXllcihsYXllckNoaWxkc1tjaGlsZElkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmhpZGVMYXllcihsYXllckNoaWxkc1tjaGlsZElkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGxheWVyQ2hpbGRzW2NoaWxkSWRdLCBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgbmV3U3RhdGUuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKTtcbiAgfVxuICBsYXllclpvb21UbyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5sYXllckNsaWNrKGUpO1xuICAgIH1cbiAgICBsZXQgYm9vbFpvb21UbyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIGlmIChib29sWm9vbVRvKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5tYXBEYXRhLnN0YXJib2FyZC5vcGVuUG9wdXApIHtcbiAgICAgIGxldCBmZWF0dXJlLCBsYXllcjtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnBvcHVwKSB7XG4gICAgICAgIGZlYXR1cmUgPSBuZXcgRmVhdHVyZSgpO1xuICAgICAgICBsYXllciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3BvcHVwJyx0aGlzLnByb3BzLmxheWVyLnBvcHVwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuZmVhdHVyZXMgJiYgdGhpcy5wcm9wcy5sYXllci5mZWF0dXJlcy5sZW5ndGggPT09IDEpe1xuICAgICAgICBsYXllciA9IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgZmVhdHVyZSA9IHRoaXMucHJvcHMubGF5ZXIuZmVhdHVyZXNbMF07XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkuaGFuZGxlUG9wdXAoZmVhdHVyZSwgbGF5ZXIpO1xuXG4gICAgfVxuICB9XG4gIGxheWVyWm9vbVRvRW50ZXIoZSkge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgdGhpcy5sYXllclpvb21UbyhlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSBzdHJ1Y3R1cmVkQ2xvbmUodGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbaWRdID0gc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgbmV3U3RhdGUgPSBzdHJ1Y3R1cmVkQ2xvbmUodGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gICAgbmV3U3RhdGUuY29sbGFwc2VkID0gIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3R5bGVQaWN0dXJlID0gbnVsbDtcbiAgICBsZXQgc3Bhblpvb20gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5zaG93TG9jc3R5bGVzID09PSBcIjFcIiAmJiB0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlcyAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZV0pIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnpvb21Ubykge1xuICAgICAgICBzdHlsZVBpY3R1cmUgPSA8QzRnU3RhcmJvYXJkU3R5bGUgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17dGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFK3RoaXMucHJvcHMubGF5ZXIubmFtZSt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUn0gY2xpY2tFdmVudD17dGhpcy5sYXllclpvb21Ub30vPjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHlsZVBpY3R1cmUgPSA8QzRnU3RhcmJvYXJkU3R5bGUgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17dGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy5sYXllci5uYW1lfS8+O1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLmxheWVyLnpvb21UbyAmJiAhdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSkge1xuICAgICAgc3Bhblpvb20gPSA8c3BhbiBjbGFzc05hbWU9e1wiYzRnLWdlb2pzb24tYnV0dG9uXCJ9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUrdGhpcy5wcm9wcy5sYXllci5uYW1lK3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9Lz47XG4gICAgfVxuICAgIGxldCBjc3NDbGFzcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlID8gY3NzQ29uc3RhbnRzLkFDVElWRSA6IGNzc0NvbnN0YW50cy5JTkFDVElWRTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIGNzc0NsYXNzICs9IFwiIFwiICsgY3NzQ29uc3RhbnRzLkRJU0FCTEVEO1xuICAgIH1cbiAgICBsZXQgb3BlbkNsb3NlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQgPyBjc3NDb25zdGFudHMuQ0xPU0UgOiBjc3NDb25zdGFudHMuT1BFTjtcbiAgICBsZXQgb2JqQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgbGV0IGxpbmtUZXh0O1xuICAgIGxldCBsaW5rU3dpdGNoO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlICYmIHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICBsaW5rVGV4dCA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGEgdGFiSW5kZXg9ezF9IHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGFsdD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMn0gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdGV4dFwifSBvbktleVByZXNzPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJFbnRlcihldmVudCl9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvRW50ZXIoZXZlbnQpfT48c3BhbiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRfX3RleHRcIn0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L3NwYW4+PC9hPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgbGlua1N3aXRjaCA9IDxhIGNsYXNzTmFtZT17Y3NzQ2xhc3MgKyBcIiBjNGctc3RhcmJvYXJkLWNoZWNrYm94LWljb25cIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9PjwvYT5cbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxpbmtUZXh0ID0gPGEgdGFiSW5kZXg9ezF9IHRpdGxlPXt0aGlzLnByb3BzLmxheWVyLm5hbWV9IGFsdD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMSt0aGlzLnByb3BzLmxheWVyLm5hbWUrdGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1RSSUdHRVJfMn0gY2xhc3NOYW1lPXtjc3NDbGFzc30gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmxheWVyRW50ZXIoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50X190ZXh0XCJ9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9zcGFuPjwvYT47XG4gICAgfVxuXG4gICAgbGV0IGNzc0VsZW1lbnRDbGFzcyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuY3NzQ2xhc3MpIHtcbiAgICAgIGNzc0VsZW1lbnRDbGFzcyA9IFwiIFwiICsgdGhpcy5wcm9wcy5sYXllci5jc3NDbGFzcztcbiAgICB9XG5cbiAgICBpZiAob2JqQ2hpbGRzICYmIG9iakNoaWxkcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzcGFuID0gPHNwYW4gYWx0PXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfQ0hJTERTfSBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5JQ09OfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5zcGFuQ2xpY2soZXZlbnQpfS8+O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgZGF0YS1sYXllci1pZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwiICsgY3NzRWxlbWVudENsYXNzfT5cbiAgICAgICAgICB7c3Bhbn1cbiAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge29iakNoaWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IGxheWVyS2V5PXtpdGVtLmtleX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICAgIGxpbmtTd2l0Y2ggPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgZGF0YS1sYXllci1pZD17dGhpcy5wcm9wcy5pZH0gdGFiSW5kZXg9ezF9IGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIiArIGNzc0VsZW1lbnRDbGFzc30+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcbmltcG9ydCBzdHJ1Y3R1cmVkQ2xvbmUgZnJvbSAnQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUnO1xuXG5leHBvcnQgY2xhc3MgU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBpbmRleCA9IHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zZXRMYXllckZpbHRlciA9IHRoaXMuc2V0TGF5ZXJGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFsbExheWVycyA9IHRoaXMudG9nZ2xlQWxsTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVTcGVjaWZpY0xheWVycyA9IHRoaXMudG9nZ2xlU3BlY2lmaWNMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlcyA9IHt9O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gc3RydWN0dXJlZENsb25lKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICAgIG5ld1N0YXRlc1trZXldID0gbmV3U3RhdGU7XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhuZXdTdGF0ZXMpO1xuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCAmJiBsYXllci50YWdzLmZpbmQoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMX0pKXtcbiAgICAgIHNob3cgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlcyA/IHN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdIDoge30pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG93O1xuICB9XG4gIGFwcGx5T2xkU3RhdGUgKGNvbnRleHQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBvbGRTdGF0ZXMgPSB0aGlzLnN0YXRlc1tjb250ZXh0XTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUxheWVycyAobGF5ZXJzLCBzdGF0ZXMsIG9sZFN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUgIT09IG9sZFN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBpZiAob2xkU3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGFuZGxlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcywgb2xkU3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMsIG9sZFN0YXRlcylcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG9sZFN0YXRlcyk7XG4gIH1cbiAgdG9nZ2xlU3BlY2lmaWNMYXllcnMgKGlkcywgY29udGV4dCA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnN0YXRlc1tjb250ZXh0XSA9IHN0cnVjdHVyZWRDbG9uZShzdGF0ZXMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVNwZWNpZmljTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWRzLmluY2x1ZGVzKGxheWVyc1tpXS5pZCkpIHtcbiAgICAgICAgICBpZiAoIXN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlU3BlY2lmaWNMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgc3RhdGVzID0gYWN0aXZhdGVTcGVjaWZpY0xheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIHRvZ2dsZUFsbExheWVycyhjb250ZXh0ID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5jaHVua1RpbWVyKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmNodW5rVGltZXIpO1xuICAgICAgdGhpcy5jaHVua1RpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgbGV0IHN0YXRlcyA9IHN0cnVjdHVyZWRDbG9uZSh0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHRoaXMuc3RhdGVzW2NvbnRleHRdID0gc3RydWN0dXJlZENsb25lKHN0YXRlcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCAmJiBsYXllcnNbaV0gJiYgbGF5ZXJzW2ldLmNoaWxkcykge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwICYmIGxheWVyc1tpXSAmJiBsYXllcnNbaV0uY2hpbGRzKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgICBpZiAoc2NvcGUuYnV0dG9uRW5hYmxlZCkge1xuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICB0eXBlOiAnY2hhbmdlOnJlc29sdXRpb24nXG4gICAgICB9KTtcbiAgICAgIHN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICAgICAgLy8gUHJvY2Vzc2luZyBsYXllcnMgYXN5bmNocm9ub3VzbHkgdG8gcHJldmVudCBicm93c2VyIGZyZWV6ZVxuICAgICAgY29uc3QgYWxsTGF5ZXJPcGVyYXRpb25zID0gW107XG4gICAgICBmdW5jdGlvbiBjb2xsZWN0RGVhY3RpdmF0ZU9wZXJhdGlvbnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhbGxMYXllck9wZXJhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBsb2FkZXI6IGxheWVyc1tpXS5sb2FkZXIsXG4gICAgICAgICAgICBkYXRhOiBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyLFxuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwICYmIGxheWVyc1tpXSAmJiBsYXllcnNbaV0uY2hpbGRzKSB7XG4gICAgICAgICAgICBjb2xsZWN0RGVhY3RpdmF0ZU9wZXJhdGlvbnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbGxlY3REZWFjdGl2YXRlT3BlcmF0aW9ucyhsYXllcnMsIHN0YXRlcyk7XG5cbiAgICAgIGNvbnN0IGNodW5rU2l6ZSA9IDI1O1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICAgIGNvbnN0IHByb2Nlc3NDaHVua3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGN1cnJlbnRJbmRleCArIGNodW5rU2l6ZSwgYWxsTGF5ZXJPcGVyYXRpb25zLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50SW5kZXg7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9wID0gYWxsTGF5ZXJPcGVyYXRpb25zW2ldO1xuICAgICAgICAgIGlmIChvcC5sb2FkZXIgfHwgb3AuZGF0YSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShvcC5sb2FkZXIsIG9wLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50SW5kZXggPSBlbmQ7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBhbGxMYXllck9wZXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2NvcGUuY2h1bmtUaW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9jZXNzQ2h1bmtzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5jaHVua1RpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHNjb3BlLmNodW5rVGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocHJvY2Vzc0NodW5rcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICAgIC8vIFByb2Nlc3NpbmcgbGF5ZXJzIGFzeW5jaHJvbm91c2x5IHRvIHByZXZlbnQgYnJvd3NlciBmcmVlemVcbiAgICAgIGNvbnN0IGFsbExheWVyT3BlcmF0aW9ucyA9IFtdO1xuICAgICAgZnVuY3Rpb24gY29sbGVjdEFjdGl2YXRlT3BlcmF0aW9ucyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFsbExheWVyT3BlcmF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIGxvYWRlcjogbGF5ZXJzW2ldLmxvYWRlcixcbiAgICAgICAgICAgIGRhdGE6IGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIsXG4gICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCAmJiBsYXllcnNbaV0gJiYgbGF5ZXJzW2ldLmNoaWxkcykge1xuICAgICAgICAgICAgY29sbGVjdEFjdGl2YXRlT3BlcmF0aW9ucyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29sbGVjdEFjdGl2YXRlT3BlcmF0aW9ucyhsYXllcnMsIHN0YXRlcyk7XG5cbiAgICAgIGNvbnN0IGNodW5rU2l6ZSA9IDI1O1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICAgIGNvbnN0IHByb2Nlc3NDaHVua3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKGN1cnJlbnRJbmRleCArIGNodW5rU2l6ZSwgYWxsTGF5ZXJPcGVyYXRpb25zLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50SW5kZXg7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9wID0gYWxsTGF5ZXJPcGVyYXRpb25zW2ldO1xuICAgICAgICAgIGlmIChvcC5sb2FkZXIgfHwgb3AuZGF0YSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhvcC5sb2FkZXIsIG9wLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50SW5kZXggPSBlbmQ7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBhbGxMYXllck9wZXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgc2NvcGUuY2h1bmtUaW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9jZXNzQ2h1bmtzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY29wZS5jaHVua1RpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICAgICAgc2NvcGUuY2h1bmtUaW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9jZXNzQ2h1bmtzKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICBsZXQgbmV3U3RhdGVzID0gc3RydWN0dXJlZENsb25lKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICAgIG5ld1N0YXRlc1tpZF0gPSBzdGF0ZTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLnN0YXRlcy5pbml0aWFsID0gc3RydWN0dXJlZENsb25lKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICAgICAgdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbGV0IGxheWVycywgc3RhdGVzLCBmaWx0ZXI7XG4gICAgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxheWVyc3dpdGNoZXIuZmlsdGVyX3BsYWNlaG9sZGVyIHx8IFwiXFx1ZjAwMlwiO1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1N0YXJib2FyZExheWVyc3dpdGNoZXJ9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXJzd2l0Y2hlclwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcmJvYXJkUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1zdGFyYm9hcmQtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJCT0FSRDtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmhvcml6b250YWxQYW5lbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZC1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfSEVBRExJTkV9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICB7YnV0dG9uU3dpdGNoZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSfT5cbiAgICAgICAgICA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gbWFwQ29udHJvbGxlciA9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3RoaXMucHJvcHMub2JqTGF5ZXJzfSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBwYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXN9IGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX0gb3BlbmZ1bmM9e3RoaXMub3Blbn0gaGVhZGxpbmU9e21hcERhdGEubGF5ZXJzd2l0Y2hlci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBhY3RpdmU9e3Njb3BlLnN0YXRlLmFjdGl2ZVRhYiA9PT0gMH0vPlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCkge1xuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAvLyB3ZWJraXQgaGFjazpcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcImJ1dHRvbi5jNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleCArIFwiOmJlZm9yZSB7XFxuXCIgK1xuICAgICAgXCIgIGNvbnRlbnQ6IFxcXCJcXFxcXCIgKyBpY29uQ29kZSArIFwiXFxcIjtcXG5cIiArXG4gICAgICBcIiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG5cIiArXG4gICAgICBcIiAgZm9udC13ZWlnaHQ6IDkwMDtcXG5cIiArXG4gICAgICBcIiAgZm9udC1zaXplOiBpbmhlcml0O1xcblwiICtcbiAgICAgIFwifVwiKVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9LCAoKSA9PiB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpKTtcbiAgfVxuXG4gIHJlc2l6ZUZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiU3RhcmJvYXJkUGFuZWxcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJTdGFyYm9hcmRQYW5lbFwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiU3RhcmJvYXJkUGFuZWxcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9GZWF0dXJlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRTdHlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBlbnRlckV2ZW50IChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGlja0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGZvciBpbnRlcmFjdGlvbi10cmlnZ2VyXG4gICAgICAgIGxldCBzdHlsZVRyaWdnZXJMYWJlbCA9IG51bGw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsb3IgPSBsb2NzdHlsZS5zdHlsZSAmJiBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpID8gbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKTogbnVsbDtcbiAgICAgICAgbGV0IHN0eWwwciA9IEFycmF5LmlzQXJyYXkoc3R5bG9yKSA/IHN0eWxvclswXTogc3R5bG9yO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gc3R5bGVEYXRhID8gc3R5bGVEYXRhLnN0eWxldHlwZSA6IFwiZGVmYXVsdFwiO1xuICAgICAgICBsZXQgdG9vbHRpcCA9IHRoaXMucHJvcHMudG9vbHRpcCB8fCBcIlwiO1xuICAgICAgICBpZiAoc3R5bGVEYXRhICYmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZUljb24gPSBudWxsO1xuICAgICAgICAgICAgbGV0IGljb25TcmM7XG4gICAgICAgICAgICBpZiAoKHN0eWxlRGF0YS5pY29uX3NyYyAmJiBzdHlsZURhdGEuaWNvbl9zcmMuaW5kZXhPZignLicpICE9PSAtMSkgfHwgKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLnN2Z1NyYy5pbmRleE9mKCcuJykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5pY29uX3NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17aWNvblNyY30gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bDByKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlSW1hZ2UgPSBzdHlsMHIuZ2V0SW1hZ2UgJiYgdHlwZW9mIHN0eWwwci5nZXRJbWFnZSA9PT0gXCJmdW5jdGlvblwiICYmIHN0eWwwci5nZXRJbWFnZSgpID8gc3R5bDByLmdldEltYWdlKCk6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlSW1hZ2UgJiYgc3R5bGVJbWFnZS5nZXRTcmMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17c3R5bGVJbWFnZS5nZXRTcmMoKX0gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiB0YWJJbmRleD17MX0gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dG9vbHRpcH0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiB0aGlzLmVudGVyRXZlbnQoZXZlbnQpfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3Rvb2x0aXB9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30gdGl0bGU9e3Rvb2x0aXB9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlVHJpZ2dlckxhYmVsO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJvbEV4dGVudCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfYzRnU3RhcmJvYXJkU3R5bGUiLCJfbGF5ZXIiLCJfRmVhdHVyZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfc3RydWN0dXJlZENsb25lIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwibGF5ZXJDbGljayIsImJpbmQiLCJsYXllclpvb21UbyIsInNwYW5DbGljayIsImNoYW5nZUNvbGxhcHNlU3RhdGUiLCJwYXJlbnRDYWxsYmFjayIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJsYXllclN0YXRlcyIsInN0ckZpbHRlciIsImJ5UGFzc0NoaWxkcyIsImxheWVyIiwic2hvd0xheWVyIiwic2hvd0VsZW1lbnRzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmVhdHVyZXMiLCJ2ZWN0b3JMYXllciIsIkFycmF5IiwiaXNBcnJheSIsIlZlY3RvciIsImxheWVyQ29udHJvbGxlciIsIm1hcENvbnRyb2xsZXIiLCJwcm94eSIsInNob3ciLCJsb2FkZXIiLCJpZCIsImxheWVyS2V5IiwiaGlkZUxheWVyIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoYW5nZUNoaWxkU3RhdGUiLCJjaGlsZCIsImNoaWxkU3RhdGUiLCJhY3RpdmUiLCJjaGlsZHMiLCJjaGlsZElkIiwiY2hpbGRTdGF0ZXMiLCJuZXdDaGlsZFN0YXRlIiwibmV3U3RhdGUiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJrZXlJZCIsImxheWVyRW50ZXIiLCJ3aGljaCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdGl2ZUV2ZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZ3JleWVkIiwiY29sbGFwc2VkIiwiaWdub3JlQ2hpbGRzIiwibGF5ZXJDaGlsZHMiLCJfdGhpczIiLCJib29sWm9vbVRvIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJtYXBEYXRhIiwic3RhcmJvYXJkIiwib3BlblBvcHVwIiwiZmVhdHVyZSIsInBvcHVwIiwiRmVhdHVyZSIsImhhbmRsZVBvcHVwIiwibGF5ZXJab29tVG9FbnRlciIsInN0YXRlIiwicmVuZGVyIiwiX3RoaXMzIiwic3R5bGVQaWN0dXJlIiwic3Bhblpvb20iLCJkYXRhIiwic2hvd0xvY3N0eWxlcyIsImxvY3N0eWxlIiwic3R5bGVEYXRhIiwiYXJyTG9jU3R5bGVzIiwiY3JlYXRlRWxlbWVudCIsIkM0Z1N0YXJib2FyZFN0eWxlIiwic3R5bGVJZCIsInRvb2x0aXAiLCJsYW5nIiwiU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkUiLCJuYW1lIiwiU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUiIsImNsaWNrRXZlbnQiLCJpbnZlcnRab29tQWN0aXZhdGUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm9uTW91c2VVcCIsImV2ZW50IiwiY3NzQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJBQ1RJVkUiLCJJTkFDVElWRSIsIkRJU0FCTEVEIiwib3BlbkNsb3NlIiwiQ0xPU0UiLCJPUEVOIiwib2JqQ2hpbGRzIiwibGlua1RleHQiLCJsaW5rU3dpdGNoIiwiRnJhZ21lbnQiLCJfZGVmaW5lUHJvcGVydHkyIiwidGFiSW5kZXgiLCJhbHQiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzEiLCJTVEFSQk9BUkRfRUxFTUVOVF9UUklHR0VSXzIiLCJvbktleVByZXNzIiwiY3NzRWxlbWVudENsYXNzIiwic3BhbiIsIlNUQVJCT0FSRF9FTEVNRU5UX0NISUxEUyIsIklDT04iLCJtYXAiLCJpdGVtIiwiZmlsdGVyRnVuYyIsImZuUmVzaXplIiwiQ29tcG9uZW50IiwiX2M0Z1N0YXJib2FyZExheWVyRWxlbWVudCIsIlN0YXJib2FyZExheWVyc3dpdGNoZXIiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJqIiwiZ2V0SW5pdGlhbFN0YXRlQ2hpbGQiLCJuZXdTdGF0ZXMiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwiY29tcG9uZW50Iiwic2V0TGF5ZXJGaWx0ZXIiLCJ0b2dnbGVBbGxMYXllcnMiLCJ0b2dnbGVTcGVjaWZpY0xheWVycyIsInN0YXRlcyIsImluaXRpYWxpemVkIiwibGF5ZXJGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsImpRdWVyeSIsInZhbCIsInNldFN0YXRlIiwiZGlnRGVlcGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJ0YWdzIiwiZmluZCIsImFwcGx5T2xkU3RhdGUiLCJjb250ZXh0IiwibGF5ZXJzIiwib2JqTGF5ZXJzIiwib2xkU3RhdGVzIiwiaGFuZGxlTGF5ZXJzIiwiaWRzIiwiYWN0aXZhdGVTcGVjaWZpY0xheWVycyIsImluY2x1ZGVzIiwiY2h1bmtUaW1lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYWN0aXZhdGVMYXllcnMiLCJidXR0b25FbmFibGVkIiwiZGVhY3RpdmF0ZUxheWVycyIsImNvbGxlY3REZWFjdGl2YXRlT3BlcmF0aW9ucyIsImFsbExheWVyT3BlcmF0aW9ucyIsInB1c2giLCJnZXRWaWV3IiwiZGlzcGF0Y2hFdmVudCIsInR5cGUiLCJjaHVua1NpemUiLCJjdXJyZW50SW5kZXgiLCJwcm9jZXNzQ2h1bmtzIiwiZW5kIiwiTWF0aCIsIm1pbiIsIm9wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29sbGVjdEFjdGl2YXRlT3BlcmF0aW9ucyIsImluaXRpYWwiLCJnZXRJbml0aWFsU3RhdGVzIiwiZmlsdGVyIiwibGF5ZXJzd2l0Y2hlciIsInBsYWNlaG9sZGVyIiwiZmlsdGVyX3BsYWNlaG9sZGVyIiwib25JbnB1dCIsImhlYWRsaW5lIiwiYnV0dG9uIiwiTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsImNhbGxiYWNrRnVuY3Rpb24iLCJfY29udHJvbCIsIl9jNGdTdGFyYm9hcmRMYXllcnN3aXRjaGVyIiwiX2M0Z01hcHNJMThuIiwiX2M0Z01hcHNVdGlscyIsIlRpdGxlYmFyIiwiUmVhY3QiLCJsYXp5IiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJpbm5lclRleHQiLCJDVFJMX1NUQVJCT0FSRCIsImFwcGVuZENoaWxkIiwib3BlbiIsImV4dGVybmFsIiwib24iLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0QWN0aXZlVGFiIiwiaWR4IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJ1dHRvblN3aXRjaGVyIiwiYnV0dG9ucyIsInRhYkxheWVycyIsInJlZ3VsYXJCdXR0b24iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJpY29uQ29kZSIsImF3ZXNvbWVJY29uIiwidGFicyIsInRhYkNhbGxiYWNrIiwidGFiU3RhdGVzIiwib3BlbmZ1bmMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsIlNUQVJCT0FSRF9IRUFETElORSIsImhlYWRlciIsImxhYmVsIiwiU1RBUkJPQVJEIiwiY2xvc2VCdG5DbGFzcyIsIlNUQVJCT0FSRF9DTE9TRSIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJfZ2VvbSIsImVudGVyRXZlbnQiLCJzdHlsZVRyaWdnZXJMYWJlbCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiZ2VvbWV0cnkiLCJQb2ludCIsInN0eWwwciIsInN0eWxlVHlwZSIsInN0eWxldHlwZSIsInN0eWxlSWNvbiIsImljb25TcmMiLCJpY29uX3NyYyIsInN2Z1NyYyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=