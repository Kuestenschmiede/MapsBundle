"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-feature-filter_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-feature-filter-item.jsx"
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter-item.jsx ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
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
var FeatureFilterItem = exports.FeatureFilterItem = /*#__PURE__*/function (_Component) {
  function FeatureFilterItem(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterItem);
    return _callSuper(this, FeatureFilterItem, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterItem, _Component);
  return (0, _createClass2["default"])(FeatureFilterItem, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-filter-form-element"
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "radio",
        onChange: function onChange(evt) {
          _this.props.filterLayers(scope.props.feature.identifier, scope.props.parentId, scope.props.feature.value, scope.props.value.field);
        },
        checked: scope.props.checked.identifier === scope.props.feature.identifier,
        value: this.props.feature.identifier
      }), _c4gMapsUtils.utils.decodeHTML(this.props.feature.translation)));
    }
  }]);
}(_react.Component);

/***/ },

/***/ "./src/Resources/public/js/components/c4g-feature-filter-list.jsx"
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter-list.jsx ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterList = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _c4gFeatureFilterItem = __webpack_require__(/*! ./c4g-feature-filter-item.jsx */ "./src/Resources/public/js/components/c4g-feature-filter-item.jsx");
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
var FeatureFilterList = exports.FeatureFilterList = /*#__PURE__*/function (_Component) {
  function FeatureFilterList(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterList);
    return _callSuper(this, FeatureFilterList, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterList, _Component);
  return (0, _createClass2["default"])(FeatureFilterList, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      var form = null;
      var className = "";
      var classNameText = "";
      if (this.props.feature.filters.length > 2) {
        if (this.props.open) {
          className = "c4g-open";
          form = /*#__PURE__*/_react["default"].createElement("form", null, this.props.feature.filters.map(function (feature, index) {
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureFilterItem.FeatureFilterItem, {
              feature: feature,
              parentId: _this.props.id,
              checked: _this.props.checkedItem,
              filterLayers: _this.props.filterLayers,
              key: index
            });
          }));
        } else {
          className = "c4g-close";
        }
        className += "fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = this.props.checkedItem.identifier === "all c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name) ? "" : "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);
            evt.stopPropagation();
            evt.preventDefault();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), form);
      } else {
        className = "fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        classNameText = "fi_text fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name) + "_text";
        var _liClass = "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        _liClass += this.props.checkedItem.identifier === "all" ? "" : " clicked";
        var img = null;
        var clickEvent = null;
        if (!this.props.feature.link) {
          clickEvent = function clickEvent(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].identifier : "all", _this.props.id, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].value : undefined, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].field : undefined);
            evt.stopPropagation();
            evt.preventDefault();
          };
        } else {
          clickEvent = function clickEvent(evt) {
            window.open(_this.props.feature.link, "_self");
          };
        }
        if (this.props.feature.image) {
          img = /*#__PURE__*/_react["default"].createElement("img", {
            src: this.props.feature.image,
            title: this.props.feature.name,
            width: this.props.feature.width,
            height: this.props.feature.height
          });
        }
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: _liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: clickEvent
        }, img, /*#__PURE__*/_react["default"].createElement("span", {
          className: classNameText
        }, _c4gMapsUtils.utils.decodeHTML(this.props.feature.name))));
      }
    }
  }]);
}(_react.Component);

/***/ },

/***/ "./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx"
/*!*********************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx ***!
  \*********************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterMultiCheckbox = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _c4gFeatureMulticheckboxItem = __webpack_require__(/*! ./c4g-feature-multicheckbox-item.jsx */ "./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");
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
var FeatureFilterMultiCheckbox = exports.FeatureFilterMultiCheckbox = /*#__PURE__*/function (_Component) {
  function FeatureFilterMultiCheckbox(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterMultiCheckbox);
    return _callSuper(this, FeatureFilterMultiCheckbox, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterMultiCheckbox, _Component);
  return (0, _createClass2["default"])(FeatureFilterMultiCheckbox, [{
    key: "render",
    value: function render() {
      var _this = this;
      var scope = this;
      var form = null;
      var className, classNameText;
      if (this.props.feature.filters.length > 2) {
        if (this.props.open) {
          className = "c4g-open";
          form = /*#__PURE__*/_react["default"].createElement("form", null, this.props.feature.filters.map(function (feature, index) {
            var checked = !!_this.props.checkedItems.find(function (element) {
              return element.identifier === feature.identifier && element.value === feature.value;
            });
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureMulticheckboxItem.FeatureFilterMultiCheckboxItem, {
              feature: feature,
              parentId: _this.props.id,
              checked: checked,
              filterLayers: _this.props.filterLayers,
              key: index
            });
          }));
        } else {
          className = "c4g-close";
        }
        var numberSpan = null;
        if (this.props.checkedItems.length > 0) {
          var number = this.props.checkedItems[0].identifier === "all" ? this.props.checkedItems.length - 1 : this.props.checkedItems.length;
          numberSpan = /*#__PURE__*/_react["default"].createElement("span", {
            className: "sum"
          }, " ", number, " ");
        }
        className += " fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);
            evt.stopPropagation();
            evt.preventDefault();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), numberSpan, form);
      } else {
        className = "fi_wrapper fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        classNameText = "fi_text fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name) + "_text";
        var _liClass = "c4g-item-checked c4g-item-" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        _liClass += this.props.checkedItems.length === 0 ? "" : " clicked";
        var clickEvent;
        if (!this.props.feature.link) {
          clickEvent = function clickEvent(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier, _this.props.id, true);
            evt.stopPropagation();
            evt.preventDefault();
          };
        } else {
          clickEvent = function clickEvent(evt) {
            window.open(_this.props.feature.link, '_self');
          };
        }
        var img = null;
        if (this.props.feature.image) {
          img = /*#__PURE__*/_react["default"].createElement("img", {
            src: this.props.feature.image,
            title: this.props.feature.name,
            width: this.props.feature.width,
            height: this.props.feature.height
          });
        }
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: _liClass
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: className,
          onMouseUp: clickEvent
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: classNameText
        }, img, _c4gMapsUtils.utils.decodeHTML(this.props.feature.name))));
      }
    }
  }]);
}(_react.Component);

/***/ },

/***/ "./src/Resources/public/js/components/c4g-feature-filter.jsx"
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter.jsx ***!
  \*******************************************************************/
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
var _c4gFeatureFilterList = __webpack_require__(/*! ./c4g-feature-filter-list.jsx */ "./src/Resources/public/js/components/c4g-feature-filter-list.jsx");
var _c4gFeatureFilterMulticheckbox = __webpack_require__(/*! ./c4g-feature-filter-multicheckbox.jsx */ "./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx");
var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _opening_hours = _interopRequireDefault(__webpack_require__(/*! opening_hours */ "./node_modules/opening_hours/build/opening_hours.js"));
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
var FeatureFilter = exports["default"] = /*#__PURE__*/function (_Component) {
  function FeatureFilter(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FeatureFilter);
    _this = _callSuper(this, FeatureFilter, [props]);
    var scope = _this;
    _this.filterLayers = _this.filterLayers.bind(_this);
    _this.filterLayersMulti = _this.filterLayersMulti.bind(_this);
    _this.setOpen = _this.setOpen.bind(_this);
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.ulRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleClickInside = _this.handleClickInside.bind(_this);
    _this.filterLayer = _this.filterLayer.bind(_this);
    _this.filterLayerMulti = _this.filterLayerMulti.bind(_this);
    _this.hideFeature = _this.hideFeature.bind(_this);
    _this.hideFeatureMulti = _this.hideFeatureMulti.bind(_this);
    _this.callbackFunction = _this.callbackFunction.bind(_this);
    _this.callbackFunctionMulti = _this.callbackFunctionMulti.bind(_this);
    _this.loadFilters();
    if (props.mapController.data.caching) {
      window.onbeforeunload = function () {
        _c4gMapsUtils.utils.storeValue('filtersChecked', JSON.stringify(scope.state.arrChecked));
        var layers = scope.props.mapController.getCurrentLayerStates(scope.props.mapController.state.arrLayerStates);
        _c4gMapsUtils.utils.storeValue('layers', layers);
        _c4gMapsUtils.utils.storeValue('tstampc4g', Date.now());
      };
    }
    _this.state = {
      filters: [],
      open: true,
      arrChecked: [],
      openedList: -1
    };
    _this.features = [];
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    _this.props.mapController.filter = _this;
    return _this;
  }
  (0, _inherits2["default"])(FeatureFilter, _Component);
  return (0, _createClass2["default"])(FeatureFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var scope = this;
      var filters = this.state.filters;
      var showButtons = false;
      var listDiv = document.querySelector(".c4g-feature-filter-list");
      if (listDiv) {
        showButtons = !(listDiv.scrollWidth <= listDiv.clientWidth);
      } else {
        showButtons = scope.props.target && !(scope.props.target.scrollWidth <= scope.props.target.clientWidth);
      }
      var resetButton = null;
      if (!!parseFloat(this.props.mapController.data.filterResetButton)) {
        var boolFilterReset = false;
        for (var i in this.state.arrChecked) {
          if (!boolFilterReset && this.state.arrChecked.hasOwnProperty(i)) {
            if (!parseFloat(this.props.mapController.data.filterHandling)) {
              boolFilterReset = this.state.arrChecked[i].identifier != 'all';
            } else {
              boolFilterReset = this.state.arrChecked[i] != [];
            }
          }
        }
        if (boolFilterReset) {
          resetButton = /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-feature-filter-reset",
            onMouseUp: function onMouseUp(evt) {
              return _this2.resetFilter();
            }
          }, this.langConstants.RESET_FILTER);
        }
      }
      if (!!parseFloat(this.props.mapController.data.filterHandling)) {
        if (filters && filters.length > 0) {
          var div = filters.map(function (feature, index) {
            var checkedItems = scope.state.arrChecked[index] || [];
            var openedList = scope.state.openedList === index;
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureFilterMulticheckbox.FeatureFilterMultiCheckbox, {
              feature: feature,
              open: openedList,
              setOpen: _this2.setOpen,
              checkedItems: checkedItems,
              filterLayers: _this2.filterLayersMulti,
              id: index,
              key: index
            });
          });
          if (!showButtons) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-not-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, div), resetButton);
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-previous",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft -= 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-next",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft += 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, div), resetButton);
          }
        }
      } else {
        if (filters && filters.length > 0) {
          var _div = filters.map(function (feature, index) {
            var checkedItem = scope.state.arrChecked[index];
            var openedList = scope.state.openedList === index;
            return /*#__PURE__*/_react["default"].createElement(_c4gFeatureFilterList.FeatureFilterList, {
              feature: feature,
              open: openedList,
              setOpen: _this2.setOpen,
              checkedItem: checkedItem,
              filterLayers: _this2.filterLayers,
              id: index,
              key: index
            });
          });
          if (!showButtons) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-not-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, _div), resetButton);
          } else {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-previous",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft -= 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("button", {
              className: "c4g-btn-nav-next",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft += 100;
              }
            }), /*#__PURE__*/_react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, _div), resetButton);
          }
        }
      }
      return /*#__PURE__*/_react["default"].createElement("div", null);
    }
  }, {
    key: "filterLayers",
    value: function filterLayers(property, listId, value) {
      var field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var newState = this.state.arrChecked;
      newState[listId] = {
        identifier: property,
        value: value,
        field: field
      };
      this.setState({
        arrChecked: newState
      }, this.callbackFunction);
    }
  }, {
    key: "callbackFunction",
    value: function callbackFunction() {
      var _this3 = this;
      var arrLayers = this.props.mapController.map.getLayers().getArray();
      arrLayers.map(function (feature, index) {
        _this3.filterLayer(feature);
      });
      for (var i = 0; i < this.features.length; i++) {
        if (this.features.hasOwnProperty(i)) {
          var added = this.showFeature(this.features[i], i);
          if (added) {
            i--;
          }
        }
      }
      this.props.mapController.map.getView().dispatchEvent('change:center');
    }
  }, {
    key: "filterLayersMulti",
    value: function filterLayersMulti(property, listId, value) {
      var newState = this.state.arrChecked;
      var changedEntry = newState[listId];
      var found = changedEntry.find(function (element) {
        return element.identifier === property && element.value === value;
      });
      if (!found) {
        if (property === "all") {
          changedEntry = JSON.parse(JSON.stringify(this.state.filters[listId].filters));
        } else {
          changedEntry.push({
            identifier: property,
            value: value
          });
        }
      } else {
        if (property === "all") {
          changedEntry = [];
        } else {
          var rmIndex = changedEntry.indexOf(found);
          if (rmIndex > -1) {
            changedEntry.splice(rmIndex, 1);
          }
        }
      }
      newState[listId] = changedEntry;
      this.setState({
        arrChecked: newState
      }, this.callbackFunctionMulti);
    }
  }, {
    key: "callbackFunctionMulti",
    value: function callbackFunctionMulti() {
      var _this4 = this;
      var arrLayers = this.props.mapController.map.getLayers().getArray();
      arrLayers.map(function (feature, index) {
        _this4.filterLayerMulti(feature);
      });
      for (var i = 0; i < this.features.length; i++) {
        if (this.features.hasOwnProperty(i)) {
          var added = this.showFeatureMulti(this.features[i], i);
          if (added) {
            i--;
          }
        }
      }
    }
  }, {
    key: "setOpen",
    value: function setOpen(openId) {
      if (this.state.openedList === openId) {
        this.setState({
          openedList: -1
        });
      } else {
        this.setState({
          openedList: openId
        });
      }
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      var _this5 = this;
      var filter = [];
      for (var i in this.state.arrChecked) {
        if (this.state.arrChecked.hasOwnProperty(i)) {
          if (!parseFloat(this.props.mapController.data.filterHandling)) {
            filter.push({
              identifier: 'all'
            });
          } else {
            filter.push([]);
          }
        }
      }
      this.setState({
        arrChecked: filter
      }, function () {
        for (var _i = 0; _i < _this5.features.length; _i++) {
          if (_this5.features.hasOwnProperty(_i)) {
            var added = _this5.resetFeature(_this5.features[_i], _i);
            if (added) {
              _i--;
            }
          }
        }
      });
    }
  }, {
    key: "filterLayer",
    value: function filterLayer(layer) {
      var _this6 = this;
      if (layer.getLayers && typeof layer.getLayers === "function") {
        var arrLayers = layer.getLayers().getArray();
        arrLayers.map(function (feature, index) {
          _this6.filterLayer(feature);
        });
      } else if (layer.getStyle && typeof layer.getSource === "function") {
        var source = layer.getSource() instanceof _source.Cluster ? layer.getSource().getSource() : layer.getSource();
        source.forEachFeature(function (feature) {
          return _this6.hideFeature(feature, source);
        });
      }
    }
  }, {
    key: "filterLayerMulti",
    value: function filterLayerMulti(layer) {
      var _this7 = this;
      if (layer.getLayers && typeof layer.getLayers === "function") {
        var arrLayers = layer.getLayers().getArray();
        arrLayers.map(function (feature, index) {
          _this7.filterLayerMulti(feature);
        });
      } else if (layer.getStyle && typeof layer.getSource === "function") {
        var source = layer.getSource() instanceof _source.Cluster ? layer.getSource().getSource() : layer.getSource();
        source.forEachFeature(function (feature) {
          return _this7.hideFeatureMulti(feature, source);
        });
      }
    }
  }, {
    key: "checkFeature",
    value: function checkFeature(feature, objChecked) {
      var property = objChecked.identifier;
      if (objChecked.value === "opening_hours" && feature.get(objChecked.field || "opening_hours")) {
        try {
          var featureHours = new _opening_hours["default"](feature.get(objChecked.field || "opening_hours"), {
            address: {
              country_code: "de"
            }
          });
          return featureHours.getState();
        } catch (error) {
          //ToDo
          //console.warn(error);
          return false;
        }
      } else {
        if (!(property === "all" || feature.get(property) && !objChecked.value || objChecked.value == feature.get(property) && objChecked.value)) {
          return false;
        } else {
          return true;
        }
      }
    }
  }, {
    key: "checkFeatureMulti",
    value: function checkFeatureMulti(feature, objChecked) {}
  }, {
    key: "hideFeature",
    value: function hideFeature(feature, source) {
      var _this8 = this;
      if (feature.get('features')) {
        var features = feature.get('features');
        features.forEach(function (feature) {
          return _this8.hideFeature(feature, source);
        });
      } else {
        if (feature.get('noFilter')) {
          return;
        }
        var show = true;
        for (var key in this.state.arrChecked) {
          if (this.state.arrChecked.hasOwnProperty(key) && show) {
            show = this.checkFeature(feature, this.state.arrChecked[key]);
          }
        }
        if (!show) {
          feature.set('source', source);
          this.features.push(feature);
          source.removeFeature(feature);
        }
      }
    }
  }, {
    key: "hideFeatureMulti",
    value: function hideFeatureMulti(feature, source) {
      var _this9 = this;
      if (feature.get('features')) {
        var features = feature.get('features');
        features.forEach(function (feature) {
          return _this9.hideFeatureMulti(feature, source);
        });
      } else {
        if (feature.get('noFilter')) {
          return;
        }
        var show = false;
        var filterActive = false;
        for (var key in this.state.arrChecked) {
          if (this.state.arrChecked.hasOwnProperty(key)) {
            var arrChecked = this.state.arrChecked[key];
            for (var i in arrChecked) {
              if (arrChecked.hasOwnProperty(i)) {
                filterActive = true;
                var objChecked = arrChecked[i];
                var property = objChecked.identifier;
                if (feature.get(property)) {
                  var featureProperty = feature.get(property);
                  if (objChecked.value && objChecked.value === featureProperty || !objChecked.value) {
                    show = true;
                  }
                }
              }
            }
          }
        }
        if (!show && filterActive) {
          feature.set('source', source);
          this.features.push(feature);
          source.removeFeature(feature);
        }
      }
    }
  }, {
    key: "showFeature",
    value: function showFeature(feature, index) {
      var show = true;
      for (var key in this.state.arrChecked) {
        if (this.state.arrChecked.hasOwnProperty(key) && show) {
          show = this.checkFeature(feature, this.state.arrChecked[key]);
        }
      }
      if (show) {
        var source = feature.get('source');
        feature.set('source', false);
        source.addFeature(feature);
        this.features.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "resetFeature",
    value: function resetFeature(feature, index) {
      var source = feature.get('source');
      feature.set('source', false);
      source.addFeature(feature);
      this.features.splice(index, 1);
      return true;
    }
  }, {
    key: "showFeatureMulti",
    value: function showFeatureMulti(feature, index) {
      var show = false;
      var filterActive = false;
      for (var key in this.state.arrChecked) {
        if (this.state.arrChecked.hasOwnProperty(key)) {
          var arrChecked = this.state.arrChecked[key];
          for (var i in arrChecked) {
            if (arrChecked.hasOwnProperty(i)) {
              filterActive = true;
              var objChecked = arrChecked[i];
              var property = objChecked.identifier;
              if (feature.get(property)) {
                var featureProperty = feature.get(property);
                if (objChecked.value && objChecked.value === featureProperty || !objChecked.value) {
                  show = true;
                }
              }
            }
          }
        }
      }
      if (show || !filterActive) {
        var source = feature.get('source');
        feature.set('source', false);
        source.addFeature(feature);
        this.features.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "loadFilters",
    value: function loadFilters() {
      var scope = this;
      var url = this.props.mapController.data.api.filter + this.props.mapController.data.id + "/" + this.props.mapController.data.lang;
      fetch(url).then(function (response) {
        return response.json().then(function (jsonData) {
          var callbackFunc = function callbackFunc() {};
          var arrChecked = [];
          for (var i = 0; i < jsonData.length; i++) {
            if (!!parseFloat(scope.props.mapController.data.filterHandling)) {
              arrChecked.push([]);
            } else {
              arrChecked.push({
                identifier: "all"
              });
            }
          }
          if (scope.props.mapController.data.caching) {
            if (_c4gMapsUtils.utils.getValue('tstampc4g') && _c4gMapsUtils.utils.getValue('tstampc4g') + 604800 > Date.now()) {
              if (_c4gMapsUtils.utils.getValue('filtersChecked')) {
                var arrTemp = JSON.parse(_c4gMapsUtils.utils.getValue('filtersChecked'));
                if (arrTemp.length === jsonData.length) {
                  arrChecked = arrTemp;
                  if (scope.props.mapController.proxy.layers_loaded) {
                    callbackFunc = !parseFloat(scope.props.mapController.data.filterHandling) ? scope.callbackFunction : scope.callbackFunctionMulti;
                  } else {
                    var asyncCallback = !parseFloat(scope.props.mapController.data.filterHandling) ? scope.callbackFunction : scope.callbackFunctionMulti;
                    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
                    window.c4gMapsHooks.layer_loaded.push(function (lol) {
                      asyncCallback();
                    });
                  }
                }
              }
            }
          }
          scope.setState({
            filters: jsonData,
            arrChecked: arrChecked
          }, callbackFunc);
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * hide FilterFeatureList if clicked on outside of element
     */
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          openedList: -1
        });
      }
    }
  }, {
    key: "handleClickInside",
    value: function handleClickInside(event) {
      var path = event.nativeEvent.path;
      if (path[0] === event.currentTarget) {
        this.setState({
          openedList: -1
        });
      }
    }
  }]);
}(_react.Component);

/***/ },

/***/ "./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx"
/*!*******************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FeatureFilterMultiCheckboxItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
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
var FeatureFilterMultiCheckboxItem = exports.FeatureFilterMultiCheckboxItem = /*#__PURE__*/function (_Component) {
  function FeatureFilterMultiCheckboxItem(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterMultiCheckboxItem);
    return _callSuper(this, FeatureFilterMultiCheckboxItem, [props]);
  }
  (0, _inherits2["default"])(FeatureFilterMultiCheckboxItem, _Component);
  return (0, _createClass2["default"])(FeatureFilterMultiCheckboxItem, [{
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-filter-form-element"
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        checked: this.props.checked,
        onChange: function onChange(evt) {
          evt.stopPropagation();
        },
        onClick: function onClick(evt) {
          _this.props.filterLayers(_this.props.feature.identifier, _this.props.parentId, _this.props.feature.value);
        },
        value: this.props.feature.identifier
      }), _c4gMapsUtils.utils.decodeHTML(this.props.feature.translation)));
    }
  }]);
}(_react.Component);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZmVhdHVyZS1maWx0ZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUQsbUJBQUE7QUFBd0MsU0FBQUQsd0JBQUFHLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFMLHVCQUFBLFlBQUFBLHdCQUFBRyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFBQU0sRUFBQSxFQUFBUCxD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QUVULEtBQUksQ0FBQ1AsS0FBSyxDQUFDaUIsUUFBUSxFQUFFVixLQUFJLENBQUNQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDVixLQUFLLENBQUM7UUFBQyxDQUFFO1FBQzNIQSxLQUFLLEVBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNlLE9BQU8sQ0FBQ0M7TUFBVyxDQUN4QyxDQUFDLEVBQ0RJLG1CQUFLLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNyQixLQUFLLENBQUNlLE9BQU8sQ0FBQ08sV0FBVyxDQUM3QyxDQUNOLENBQUM7SUFFZDtFQUFDO0FBQUEsRUFuQitDQyxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyhzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHNjb3BlLnByb3BzLnBhcmVudElkLCBzY29wZS5wcm9wcy5mZWF0dXJlLnZhbHVlLCBzY29wZS5wcm9wcy52YWx1ZS5maWVsZCk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Njb3BlLnByb3BzLmNoZWNrZWQuaWRlbnRpZmllciA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItaXRlbS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZm9ybSA9IG51bGw7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBsZXQgY2xhc3NOYW1lVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctb3BlblwiO1xuICAgICAgICAgICAgICAgIGZvcm0gPVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVySXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkSXRlbX0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCJmaV93cmFwcGVyIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGwgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSkgPyBcIlwiIDogXCJjNGctaXRlbS1jaGVja2VkIGM0Zy1pdGVtLVwiK3V0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5zZXRPcGVuKHRoaXMucHJvcHMuaWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319PjxzcGFuLz57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJmaV93cmFwcGVyIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBjbGFzc05hbWVUZXh0ID0gXCJmaV90ZXh0IGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSkgKyBcIl90ZXh0XCI7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IFwiYzRnLWl0ZW0tY2hlY2tlZCBjNGctaXRlbS1cIit1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gXCJcIiA6IFwiIGNsaWNrZWRcIjtcbiAgICAgICAgICAgIGxldCBpbWcgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZlYXR1cmUubGluaykge1xuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgOiBcImFsbFwiLCB0aGlzLnByb3BzLmlkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS52YWx1ZSA6dW5kZWZpbmVkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5maWVsZCA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudCA9IChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5wcm9wcy5mZWF0dXJlLmxpbmssIFwiX3NlbGZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5pbWFnZSkge1xuICAgICAgICAgICAgICAgIGltZyA9IDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2V9IHRpdGxlPXt0aGlzLnByb3BzLmZlYXR1cmUubmFtZX0gd2lkdGg9e3RoaXMucHJvcHMuZmVhdHVyZS53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmZlYXR1cmUuaGVpZ2h0fS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9e2NsaWNrRXZlbnR9PntpbWd9PHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVUZXh0fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSwgY2xhc3NOYW1lVGV4dDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZCA9ICEhKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gZmVhdHVyZS5pZGVudGlmaWVyICYmIGVsZW1lbnQudmFsdWUgPT09IGZlYXR1cmUudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17Y2hlY2tlZH0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3BhbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtc1swXS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoIC0xIDogdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG51bWJlclNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e1wic3VtXCJ9PiB7bnVtYmVyfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV93cmFwcGVyIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWQgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge251bWJlclNwYW59XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJmaV93cmFwcGVyIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBjbGFzc05hbWVUZXh0ID0gXCJmaV90ZXh0IGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSkgKyBcIl90ZXh0XCI7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWQgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiBjbGlja2VkXCI7XG4gICAgICAgICAgICBsZXQgY2xpY2tFdmVudDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5mZWF0dXJlLmxpbmspIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLmlkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmZlYXR1cmUubGluaywgJ19zZWxmJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGltZyA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMuZmVhdHVyZS5uYW1lfSB3aWR0aD17dGhpcy5wcm9wcy5mZWF0dXJlLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuZmVhdHVyZS5oZWlnaHR9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17Y2xpY2tFdmVudH0+PHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVUZXh0fT57aW1nfXt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTGlzdH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QuanN4XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3hcIjtcbmltcG9ydCB7RmlsbCwgU3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5pbXBvcnQge0NsdXN0ZXJ9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBvcGVuaW5nX2hvdXJzIGZyb20gXCJvcGVuaW5nX2hvdXJzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzID0gdGhpcy5maWx0ZXJMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyc011bHRpID0gdGhpcy5maWx0ZXJMYXllcnNNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0T3BlbiA9IHRoaXMuc2V0T3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMudWxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGlja0luc2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyID0gdGhpcy5maWx0ZXJMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmUgPSB0aGlzLmhpZGVGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZU11bHRpID0gdGhpcy5oaWRlRmVhdHVyZU11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gdGhpcy5jYWxsYmFja0Z1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uTXVsdGkgPSB0aGlzLmNhbGxiYWNrRnVuY3Rpb25NdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2ZpbHRlcnNDaGVja2VkJywgSlNPTi5zdHJpbmdpZnkoc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZCkpO1xuICAgICAgICBsZXQgbGF5ZXJzID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5nZXRDdXJyZW50TGF5ZXJTdGF0ZXMoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zdGF0ZS5hcnJMYXllclN0YXRlcyk7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2xheWVycycsIGxheWVycyk7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3RzdGFtcGM0ZycsIERhdGUubm93KCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyczogW10sXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYXJyQ2hlY2tlZDogW10sXG4gICAgICBvcGVuZWRMaXN0OiAtMVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmZpbHRlciA9IHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzO1xuICAgIGxldCBzaG93QnV0dG9ucyA9IGZhbHNlO1xuICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZmVhdHVyZS1maWx0ZXItbGlzdFwiKTtcbiAgICBpZiAobGlzdERpdikge1xuICAgICAgc2hvd0J1dHRvbnMgPSAhKGxpc3REaXYuc2Nyb2xsV2lkdGggPD0gbGlzdERpdi5jbGllbnRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dCdXR0b25zID0gc2NvcGUucHJvcHMudGFyZ2V0ICYmICghKHNjb3BlLnByb3BzLnRhcmdldC5zY3JvbGxXaWR0aCA8PSBzY29wZS5wcm9wcy50YXJnZXQuY2xpZW50V2lkdGgpKTtcbiAgICB9XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gbnVsbDtcblxuICAgIGlmICghIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVyUmVzZXRCdXR0b24pKSB7XG4gICAgICBsZXQgYm9vbEZpbHRlclJlc2V0ID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAoIWJvb2xGaWx0ZXJSZXNldCAmJiB0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgICBib29sRmlsdGVyUmVzZXQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRbaV0uaWRlbnRpZmllciAhPSAnYWxsJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib29sRmlsdGVyUmVzZXQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRbaV0gIT0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYm9vbEZpbHRlclJlc2V0KSB7XG4gICAgICAgIHJlc2V0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLXJlc2V0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5yZXNldEZpbHRlcigpfT57dGhpcy5sYW5nQ29uc3RhbnRzLlJFU0VUX0ZJTFRFUn08L2J1dHRvbj5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtcyA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdIHx8IFtdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzTXVsdGl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJMaXN0IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW09e2NoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuIHNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2Lz4pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXJzIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSwgZmllbGQgPSBcIlwiKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSB7XG4gICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGZpZWxkOiBmaWVsZFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCB0aGlzLmNhbGxiYWNrRnVuY3Rpb24pO1xuICB9XG4gIGNhbGxiYWNrRnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZGlzcGF0Y2hFdmVudCgnY2hhbmdlOmNlbnRlcicpO1xuICB9XG4gIGZpbHRlckxheWVyc011bHRpIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBsZXQgY2hhbmdlZEVudHJ5ID0gbmV3U3RhdGVbbGlzdElkXTtcblxuICAgIGxldCBmb3VuZCA9IGNoYW5nZWRFbnRyeS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkZW50aWZpZXIgPT09IHByb3BlcnR5ICYmIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZpbHRlcnNbbGlzdElkXS5maWx0ZXJzKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5LnB1c2goe1xuICAgICAgICAgIGlkZW50aWZpZXI6IHByb3BlcnR5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gW107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJtSW5kZXggPSBjaGFuZ2VkRW50cnkuaW5kZXhPZihmb3VuZCk7XG4gICAgICAgIGlmIChybUluZGV4ID4gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkRW50cnkuc3BsaWNlKHJtSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U3RhdGVbbGlzdElkXSA9IGNoYW5nZWRFbnRyeTtcbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBuZXdTdGF0ZX0sIHRoaXMuY2FsbGJhY2tGdW5jdGlvbk11bHRpKTtcbiAgfVxuICBjYWxsYmFja0Z1bmN0aW9uTXVsdGkgKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGxldCBhZGRlZCA9IHRoaXMuc2hvd0ZlYXR1cmVNdWx0aSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldE9wZW4gKG9wZW5JZCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZExpc3QgPT09IG9wZW5JZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiBvcGVuSWR9KTtcbiAgICB9XG4gIH1cblxuICByZXNldEZpbHRlciAoKSB7XG4gICAgbGV0IGZpbHRlciA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGlmICghcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgICAgICBmaWx0ZXIucHVzaCh7aWRlbnRpZmllcjogJ2FsbCd9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXIucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogZmlsdGVyfSwgKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5yZXNldEZlYXR1cmUodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJMYXllciAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckxheWVyTXVsdGkgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgIGlmIChvYmpDaGVja2VkLnZhbHVlID09PSBcIm9wZW5pbmdfaG91cnNcIiAmJiBmZWF0dXJlLmdldChvYmpDaGVja2VkLmZpZWxkIHx8IFwib3BlbmluZ19ob3Vyc1wiKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGZlYXR1cmVIb3VycyA9IG5ldyBvcGVuaW5nX2hvdXJzKGZlYXR1cmUuZ2V0KG9iakNoZWNrZWQuZmllbGQgfHwgXCJvcGVuaW5nX2hvdXJzXCIpLCB7YWRkcmVzczoge2NvdW50cnlfY29kZTogXCJkZVwifX0pO1xuICAgICAgICByZXR1cm4gZmVhdHVyZUhvdXJzLmdldFN0YXRlKCk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy9Ub0RvXG4gICAgICAgIC8vY29uc29sZS53YXJuKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghKHByb3BlcnR5ID09PSBcImFsbFwiIHx8IChmZWF0dXJlLmdldChwcm9wZXJ0eSkgJiYgIW9iakNoZWNrZWQudmFsdWUpIHx8ICgob2JqQ2hlY2tlZC52YWx1ZSA9PSBmZWF0dXJlLmdldChwcm9wZXJ0eSkpICYmIG9iakNoZWNrZWQudmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuXG4gIH1cblxuICBoaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdyAmJiBmaWx0ZXJBY3RpdmUpe1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvd0ZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSB0cnVlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93KSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXNldEZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzaG93RmVhdHVyZU11bHRpIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93IHx8ICFmaWx0ZXJBY3RpdmUpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGxvYWRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmZpbHRlciArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmlkICsgXCIvXCIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nO1xuICAgIGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICBsZXQgY2FsbGJhY2tGdW5jID0gKCk9PiB7fTtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCEhcGFyc2VGbG9hdChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiYWxsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgICAgICBpZiAodXRpbHMuZ2V0VmFsdWUoJ3RzdGFtcGM0ZycpICYmIHV0aWxzLmdldFZhbHVlKCd0c3RhbXBjNGcnKSArIDYwNDgwMCA+IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5nZXRWYWx1ZSgnZmlsdGVyc0NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICBsZXQgYXJyVGVtcCA9IEpTT04ucGFyc2UodXRpbHMuZ2V0VmFsdWUoJ2ZpbHRlcnNDaGVja2VkJykpO1xuICAgICAgICAgICAgICBpZiAoYXJyVGVtcC5sZW5ndGggPT09IGpzb25EYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyckNoZWNrZWQgPSBhcnJUZW1wO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyc19sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyA9ICFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykgPyBzY29wZS5jYWxsYmFja0Z1bmN0aW9uIDogc2NvcGUuY2FsbGJhY2tGdW5jdGlvbk11bHRpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxldCBhc3luY0NhbGxiYWNrID0gIXBhcnNlRmxvYXQoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSA/IHNjb3BlLmNhbGxiYWNrRnVuY3Rpb24gOiBzY29wZS5jYWxsYmFja0Z1bmN0aW9uTXVsdGk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQucHVzaCgobG9sKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmNDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUuc2V0U3RhdGUoe2ZpbHRlcnM6IGpzb25EYXRhLCBhcnJDaGVja2VkOiBhcnJDaGVja2VkfSwgY2FsbGJhY2tGdW5jKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIEZpbHRlckZlYXR1cmVMaXN0IGlmIGNsaWNrZWQgb24gb3V0c2lkZSBvZiBlbGVtZW50XG4gICAqL1xuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmIHRoaXMud3JhcHBlclJlZi5jdXJyZW50ICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGlja0luc2lkZShldmVudCkge1xuICAgIGxldCBwYXRoID0gZXZlbnQubmF0aXZlRXZlbnQucGF0aDtcbiAgICBpZiAocGF0aFswXSA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtldnQuc3RvcFByb3BhZ2F0aW9uKCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLnBhcmVudElkLCB0aGlzLnByb3BzLmZlYXR1cmUudmFsdWUpO319XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z01hcHNVdGlscyIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIkZlYXR1cmVGaWx0ZXJJdGVtIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMiLCJzY29wZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJldnQiLCJmaWx0ZXJMYXllcnMiLCJmZWF0dXJlIiwiaWRlbnRpZmllciIsInBhcmVudElkIiwiZmllbGQiLCJjaGVja2VkIiwidXRpbHMiLCJkZWNvZGVIVE1MIiwidHJhbnNsYXRpb24iLCJDb21wb25lbnQiLCJfYzRnRmVhdHVyZUZpbHRlckl0ZW0iLCJGZWF0dXJlRmlsdGVyTGlzdCIsImZvcm0iLCJjbGFzc05hbWVUZXh0IiwiZmlsdGVycyIsImxlbmd0aCIsIm9wZW4iLCJtYXAiLCJpbmRleCIsImlkIiwiY2hlY2tlZEl0ZW0iLCJyZW1vdmVVbWxhdXRzIiwibmFtZSIsImxpQ2xhc3MiLCJvbk1vdXNlVXAiLCJzZXRPcGVuIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJpbWciLCJjbGlja0V2ZW50IiwibGluayIsInVuZGVmaW5lZCIsIndpbmRvdyIsImltYWdlIiwic3JjIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIl9jNGdGZWF0dXJlTXVsdGljaGVja2JveEl0ZW0iLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCIsImNoZWNrZWRJdGVtcyIsImZpbmQiLCJlbGVtZW50IiwiRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIiwibnVtYmVyU3BhbiIsIm51bWJlciIsIl9jNGdGZWF0dXJlRmlsdGVyTGlzdCIsIl9jNGdGZWF0dXJlRmlsdGVyTXVsdGljaGVja2JveCIsIl9zdHlsZSIsIl9zb3VyY2UiLCJfYzRnTWFwc0kxOG4iLCJfb3BlbmluZ19ob3VycyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJGZWF0dXJlRmlsdGVyIiwiYmluZCIsImZpbHRlckxheWVyc011bHRpIiwid3JhcHBlclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJoYW5kbGVDbGlja0luc2lkZSIsImZpbHRlckxheWVyIiwiZmlsdGVyTGF5ZXJNdWx0aSIsImhpZGVGZWF0dXJlIiwiaGlkZUZlYXR1cmVNdWx0aSIsImNhbGxiYWNrRnVuY3Rpb24iLCJjYWxsYmFja0Z1bmN0aW9uTXVsdGkiLCJsb2FkRmlsdGVycyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY2FjaGluZyIsIm9uYmVmb3JldW5sb2FkIiwic3RvcmVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0ZSIsImFyckNoZWNrZWQiLCJsYXllcnMiLCJnZXRDdXJyZW50TGF5ZXJTdGF0ZXMiLCJhcnJMYXllclN0YXRlcyIsIkRhdGUiLCJub3ciLCJvcGVuZWRMaXN0IiwiZmVhdHVyZXMiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJmaWx0ZXIiLCJfdGhpczIiLCJzaG93QnV0dG9ucyIsImxpc3REaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwidGFyZ2V0IiwicmVzZXRCdXR0b24iLCJwYXJzZUZsb2F0IiwiZmlsdGVyUmVzZXRCdXR0b24iLCJib29sRmlsdGVyUmVzZXQiLCJmaWx0ZXJIYW5kbGluZyIsInJlc2V0RmlsdGVyIiwiUkVTRVRfRklMVEVSIiwiZGl2IiwicmVmIiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJwcm9wZXJ0eSIsImxpc3RJZCIsImFyZ3VtZW50cyIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJfdGhpczMiLCJhcnJMYXllcnMiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImFkZGVkIiwic2hvd0ZlYXR1cmUiLCJnZXRWaWV3IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZWRFbnRyeSIsImZvdW5kIiwicGFyc2UiLCJwdXNoIiwicm1JbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJfdGhpczQiLCJzaG93RmVhdHVyZU11bHRpIiwib3BlbklkIiwiX3RoaXM1IiwicmVzZXRGZWF0dXJlIiwibGF5ZXIiLCJfdGhpczYiLCJnZXRTdHlsZSIsImdldFNvdXJjZSIsInNvdXJjZSIsIkNsdXN0ZXIiLCJmb3JFYWNoRmVhdHVyZSIsIl90aGlzNyIsImNoZWNrRmVhdHVyZSIsIm9iakNoZWNrZWQiLCJmZWF0dXJlSG91cnMiLCJvcGVuaW5nX2hvdXJzIiwiYWRkcmVzcyIsImNvdW50cnlfY29kZSIsImdldFN0YXRlIiwiZXJyb3IiLCJjaGVja0ZlYXR1cmVNdWx0aSIsIl90aGlzOCIsImZvckVhY2giLCJzaG93IiwicmVtb3ZlRmVhdHVyZSIsIl90aGlzOSIsImZpbHRlckFjdGl2ZSIsImZlYXR1cmVQcm9wZXJ0eSIsImFkZEZlYXR1cmUiLCJ1cmwiLCJhcGkiLCJsYW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJjYWxsYmFja0Z1bmMiLCJnZXRWYWx1ZSIsImFyclRlbXAiLCJwcm94eSIsImxheWVyc19sb2FkZWQiLCJhc3luY0NhbGxiYWNrIiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwibG9sIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInBhdGgiLCJuYXRpdmVFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=