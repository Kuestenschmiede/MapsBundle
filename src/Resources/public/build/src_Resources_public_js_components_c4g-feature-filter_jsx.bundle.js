"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-feature-filter_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-feature-filter-item.jsx":
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter-item.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
 * @author con4gis contributors (see "authors.txt")
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

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-feature-filter-list.jsx":
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter-list.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
 * @author con4gis contributors (see "authors.txt")
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

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx":
/*!*********************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
 * @author con4gis contributors (see "authors.txt")
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

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-feature-filter.jsx":
/*!*******************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-filter.jsx ***!
  \*******************************************************************/
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
 * @author con4gis contributors (see "authors.txt")
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

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx":
/*!*******************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



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
 * @author con4gis contributors (see "authors.txt")
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZmVhdHVyZS1maWx0ZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUQsbUJBQUE7QUFBd0MsU0FBQUQsd0JBQUFHLENBQUEsRUFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxNQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFMLHVCQUFBLFlBQUFBLHdCQUFBRyxDQUFBLEVBQUFDLENBQUEsU0FBQUEsQ0FBQSxJQUFBRCxDQUFBLElBQUFBLENBQUEsQ0FBQUssVUFBQSxTQUFBTCxDQUFBLE1BQUFNLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEtBQUFDLFNBQUEsbUJBQUFULENBQUEsaUJBQUFBLENBQUEsZ0JBQUFVLE9BQUEsQ0FBQVYsQ0FBQSwwQkFBQUEsQ0FBQSxTQUFBUSxDQUFBLE1BQUFGLENBQUEsR0FBQUwsQ0FBQSxHQUFBRyxDQUFBLEdBQUFELENBQUEsUUFBQUcsQ0FBQSxDQUFBSyxHQUFBLENBQUFYLENBQUEsVUFBQU0sQ0FBQSxDQUFBTSxHQUFBLENBQUFaLENBQUEsR0FBQU0sQ0FBQSxDQUFBTyxHQUFBLENBQUFiLENBQUEsRUFBQVEsQ0FBQSxjQUFBTSxFQUFBLElBQUFkLENBQUEsZ0JBQUFjLEVBQUEsT0FBQUMsY0FBQSxDQUFBQyxJQUFBLENBQUFoQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxJQUFBRCxDQUFBLEdBQUFXLE1BQUEsQ0FBQUMsY0FBQSxLQUFBRCxNQUFBLENBQUFFLHdCQUFBLENBQUFuQixDQUFBLEVBQUFjLEVBQUEsT0FBQVAsQ0FBQSxDQUFBSyxHQUFBLElBQUFMLENBQUEsQ0FBQU0sR0FBQSxJQUFBUCxDQUFBLENBQUFFLENBQUEsRUFBQU0sRUFBQSxFQUFBUCxD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QUVULEtBQUksQ0FBQ1AsS0FBSyxDQUFDaUIsUUFBUSxFQUFFVixLQUFJLENBQUNQLEtBQUssQ0FBQ2UsT0FBTyxDQUFDVixLQUFLLENBQUM7UUFBQyxDQUFFO1FBQzNIQSxLQUFLLEVBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNlLE9BQU8sQ0FBQ0M7TUFBVyxDQUN4QyxDQUFDLEVBQ0RJLG1CQUFLLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNyQixLQUFLLENBQUNlLE9BQU8sQ0FBQ08sV0FBVyxDQUM3QyxDQUNOLENBQUM7SUFFZDtFQUFDO0FBQUEsRUFuQitDQyxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVySXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnMoc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCBzY29wZS5wcm9wcy5wYXJlbnRJZCwgc2NvcGUucHJvcHMuZmVhdHVyZS52YWx1ZSwgc2NvcGUucHJvcHMudmFsdWUuZmllbGQpO319XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzY29wZS5wcm9wcy5jaGVja2VkLmlkZW50aWZpZXIgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCJcbmltcG9ydCB7RmVhdHVyZUZpbHRlckl0ZW19IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIGxldCBjbGFzc05hbWVUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcImZpX3dyYXBwZXIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbCBjNGctaXRlbS1cIit1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKSA/IFwiXCIgOiBcImM0Zy1pdGVtLWNoZWNrZWQgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImZpX3dyYXBwZXIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZVRleHQgPSBcImZpX3RleHQgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKSArIFwiX3RleHRcIjtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gXCJjNGctaXRlbS1jaGVja2VkIGM0Zy1pdGVtLVwiK3V0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGlDbGFzcyArPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCIgY2xpY2tlZFwiO1xuICAgICAgICAgICAgbGV0IGltZyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgY2xpY2tFdmVudCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuZmVhdHVyZS5saW5rKSB7XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudCA9IChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciA6IFwiYWxsXCIsIHRoaXMucHJvcHMuaWQsIHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLnZhbHVlIDp1bmRlZmluZWQsIHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmZpZWxkIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmZlYXR1cmUubGluaywgXCJfc2VsZlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMuZmVhdHVyZS5uYW1lfSB3aWR0aD17dGhpcy5wcm9wcy5mZWF0dXJlLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuZmVhdHVyZS5oZWlnaHR9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17Y2xpY2tFdmVudH0+e2ltZ308c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZVRleHR9Pnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSwgY2xhc3NOYW1lVGV4dDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZCA9ICEhKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gZmVhdHVyZS5pZGVudGlmaWVyICYmIGVsZW1lbnQudmFsdWUgPT09IGZlYXR1cmUudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17Y2hlY2tlZH0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3BhbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtc1swXS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoIC0xIDogdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG51bWJlclNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e1wic3VtXCJ9PiB7bnVtYmVyfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV93cmFwcGVyIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWQgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge251bWJlclNwYW59XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJmaV93cmFwcGVyIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBjbGFzc05hbWVUZXh0ID0gXCJmaV90ZXh0IGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSkgKyBcIl90ZXh0XCI7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWQgYzRnLWl0ZW0tXCIrdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiBjbGlja2VkXCI7XG4gICAgICAgICAgICBsZXQgY2xpY2tFdmVudDtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5mZWF0dXJlLmxpbmspIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLmlkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50ID0gKGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmZlYXR1cmUubGluaywgJ19zZWxmJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGltZyA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMuZmVhdHVyZS5uYW1lfSB3aWR0aD17dGhpcy5wcm9wcy5mZWF0dXJlLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuZmVhdHVyZS5oZWlnaHR9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17Y2xpY2tFdmVudH0+PHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVUZXh0fT57aW1nfXt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlckxpc3R9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLW11bHRpY2hlY2tib3guanN4XCI7XG5pbXBvcnQge0ZpbGwsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtDbHVzdGVyfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQgb3BlbmluZ19ob3VycyBmcm9tIFwib3BlbmluZ19ob3Vyc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB0aGlzLmZpbHRlckxheWVycyA9IHRoaXMuZmlsdGVyTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnNNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldE9wZW4gPSB0aGlzLnNldE9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnVsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllciA9IHRoaXMuZmlsdGVyTGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlID0gdGhpcy5oaWRlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmVNdWx0aSA9IHRoaXMuaGlkZUZlYXR1cmVNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiA9IHRoaXMuY2FsbGJhY2tGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbk11bHRpID0gdGhpcy5jYWxsYmFja0Z1bmN0aW9uTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdmaWx0ZXJzQ2hlY2tlZCcsIEpTT04uc3RyaW5naWZ5KHNjb3BlLnN0YXRlLmFyckNoZWNrZWQpKTtcbiAgICAgICAgbGV0IGxheWVycyA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZ2V0Q3VycmVudExheWVyU3RhdGVzKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc3RhdGUuYXJyTGF5ZXJTdGF0ZXMpO1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdsYXllcnMnLCBsYXllcnMpO1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCd0c3RhbXBjNGcnLCBEYXRlLm5vdygpKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFyckNoZWNrZWQ6IFtdLFxuICAgICAgb3BlbmVkTGlzdDogLTFcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5maWx0ZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuc3RhdGUuZmlsdGVycztcbiAgICBsZXQgc2hvd0J1dHRvbnMgPSBmYWxzZTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3RcIik7XG4gICAgaWYgKGxpc3REaXYpIHtcbiAgICAgIHNob3dCdXR0b25zID0gIShsaXN0RGl2LnNjcm9sbFdpZHRoIDw9IGxpc3REaXYuY2xpZW50V2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93QnV0dG9ucyA9IHNjb3BlLnByb3BzLnRhcmdldCAmJiAoIShzY29wZS5wcm9wcy50YXJnZXQuc2Nyb2xsV2lkdGggPD0gc2NvcGUucHJvcHMudGFyZ2V0LmNsaWVudFdpZHRoKSk7XG4gICAgfVxuICAgIGxldCByZXNldEJ1dHRvbiA9IG51bGw7XG5cbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlclJlc2V0QnV0dG9uKSkge1xuICAgICAgbGV0IGJvb2xGaWx0ZXJSZXNldCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKCFib29sRmlsdGVyUmVzZXQgJiYgdGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgaWYgKCFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgICAgICAgYm9vbEZpbHRlclJlc2V0ID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2ldLmlkZW50aWZpZXIgIT0gJ2FsbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9vbEZpbHRlclJlc2V0ID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2ldICE9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJvb2xGaWx0ZXJSZXNldCkge1xuICAgICAgICByZXNldEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1yZXNldFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMucmVzZXRGaWx0ZXIoKX0+e3RoaXMubGFuZ0NvbnN0YW50cy5SRVNFVF9GSUxURVJ9PC9idXR0b24+XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGRpdiA9IGZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBjaGVja2VkSXRlbXMgPSBzY29wZS5zdGF0ZS5hcnJDaGVja2VkW2luZGV4XSB8fCBbXTtcbiAgICAgICAgICBsZXQgb3BlbmVkTGlzdCA9IHNjb3BlLnN0YXRlLm9wZW5lZExpc3QgPT09IGluZGV4O1xuICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZmVhdHVyZT17ZmVhdHVyZX0gb3Blbj17b3BlbmVkTGlzdH0gc2V0T3Blbj17dGhpcy5zZXRPcGVufSBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc30gZmlsdGVyTGF5ZXJzPXt0aGlzLmZpbHRlckxheWVyc011bHRpfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzaG93QnV0dG9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1ub3Qtb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LXByZXZpb3VzXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0xMDB9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtbmV4dFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9MTAwfS8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGRpdiA9IGZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBjaGVja2VkSXRlbSA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTGlzdCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtPXtjaGVja2VkSXRlbX0gZmlsdGVyTGF5ZXJzPXt0aGlzLmZpbHRlckxheWVyc30gaWQ9e2luZGV4fSBrZXk9e2luZGV4fS8+XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LiBzY3JvbGxMZWZ0ICs9MTAwfS8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoPGRpdi8+KTtcbiAgfVxuXG4gIGZpbHRlckxheWVycyAocHJvcGVydHksIGxpc3RJZCwgdmFsdWUsIGZpZWxkID0gXCJcIikge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0ge1xuICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBmaWVsZDogZmllbGRcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgdGhpcy5jYWxsYmFja0Z1bmN0aW9uKTtcbiAgfVxuICBjYWxsYmFja0Z1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZTpjZW50ZXInKTtcbiAgfVxuICBmaWx0ZXJMYXllcnNNdWx0aSAocHJvcGVydHksIGxpc3RJZCwgdmFsdWUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWQ7XG4gICAgbGV0IGNoYW5nZWRFbnRyeSA9IG5ld1N0YXRlW2xpc3RJZF07XG5cbiAgICBsZXQgZm91bmQgPSBjaGFuZ2VkRW50cnkuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZGVudGlmaWVyID09PSBwcm9wZXJ0eSAmJiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZSk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5maWx0ZXJzW2xpc3RJZF0uZmlsdGVycykpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeS5wdXNoKHtcbiAgICAgICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeSA9IFtdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBybUluZGV4ID0gY2hhbmdlZEVudHJ5LmluZGV4T2YoZm91bmQpO1xuICAgICAgICBpZiAocm1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZEVudHJ5LnNwbGljZShybUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSBjaGFuZ2VkRW50cnk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCB0aGlzLmNhbGxiYWNrRnVuY3Rpb25NdWx0aSk7XG4gIH1cbiAgY2FsbGJhY2tGdW5jdGlvbk11bHRpICgpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkoZmVhdHVyZSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlTXVsdGkodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRPcGVuIChvcGVuSWQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWRMaXN0ID09PSBvcGVuSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogb3BlbklkfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGaWx0ZXIgKCkge1xuICAgIGxldCBmaWx0ZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAoIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgZmlsdGVyLnB1c2goe2lkZW50aWZpZXI6ICdhbGwnfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmlsdGVyLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IGZpbHRlcn0sICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMucmVzZXRGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXIgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJMYXllck11bHRpIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICBpZiAob2JqQ2hlY2tlZC52YWx1ZSA9PT0gXCJvcGVuaW5nX2hvdXJzXCIgJiYgZmVhdHVyZS5nZXQob2JqQ2hlY2tlZC5maWVsZCB8fCBcIm9wZW5pbmdfaG91cnNcIikpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBmZWF0dXJlSG91cnMgPSBuZXcgb3BlbmluZ19ob3VycyhmZWF0dXJlLmdldChvYmpDaGVja2VkLmZpZWxkIHx8IFwib3BlbmluZ19ob3Vyc1wiKSwge2FkZHJlc3M6IHtjb3VudHJ5X2NvZGU6IFwiZGVcIn19KTtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmVIb3Vycy5nZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vVG9Eb1xuICAgICAgICAvL2NvbnNvbGUud2FybihlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIShwcm9wZXJ0eSA9PT0gXCJhbGxcIiB8fCAoZmVhdHVyZS5nZXQocHJvcGVydHkpICYmICFvYmpDaGVja2VkLnZhbHVlKSB8fCAoKG9iakNoZWNrZWQudmFsdWUgPT0gZmVhdHVyZS5nZXQocHJvcGVydHkpKSAmJiBvYmpDaGVja2VkLnZhbHVlKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlTXVsdGkgKGZlYXR1cmUsIG9iakNoZWNrZWQpIHtcblxuICB9XG5cbiAgaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSB0cnVlO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkgJiYgc2hvdykge1xuICAgICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdykge1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBoaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkge1xuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdub0ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgICBsZXQgZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGxldCBhcnJDaGVja2VkID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV07XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJDaGVja2VkKXtcbiAgICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIGZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvYmpDaGVja2VkID0gYXJyQ2hlY2tlZFtpXTtcbiAgICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3cgJiYgZmlsdGVyQWN0aXZlKXtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNob3dGZWF0dXJlIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkgJiYgc2hvdykge1xuICAgICAgICBzaG93ID0gdGhpcy5jaGVja0ZlYXR1cmUoZmVhdHVyZSwgdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdykge1xuICAgICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVzZXRGZWF0dXJlIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc2hvd0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJDaGVja2VkKXtcbiAgICAgICAgICBpZiAoYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBvYmpDaGVja2VkID0gYXJyQ2hlY2tlZFtpXTtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgbGV0IGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgaWYgKChvYmpDaGVja2VkLnZhbHVlICYmIG9iakNoZWNrZWQudmFsdWUgPT09IGZlYXR1cmVQcm9wZXJ0eSkgfHwgIW9iakNoZWNrZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdyB8fCAhZmlsdGVyQWN0aXZlKSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBsb2FkRmlsdGVycygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5maWx0ZXIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pZCArIFwiL1wiICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZztcbiAgICBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oanNvbkRhdGEpIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrRnVuYyA9ICgpPT4ge307XG4gICAgICAgIGxldCBhcnJDaGVja2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighIXBhcnNlRmxvYXQoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goe1xuICAgICAgICAgICAgICBpZGVudGlmaWVyOiBcImFsbFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICAgICAgaWYgKHV0aWxzLmdldFZhbHVlKCd0c3RhbXBjNGcnKSAmJiB1dGlscy5nZXRWYWx1ZSgndHN0YW1wYzRnJykgKyA2MDQ4MDAgPiBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuZ2V0VmFsdWUoJ2ZpbHRlcnNDaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgbGV0IGFyclRlbXAgPSBKU09OLnBhcnNlKHV0aWxzLmdldFZhbHVlKCdmaWx0ZXJzQ2hlY2tlZCcpKTtcbiAgICAgICAgICAgICAgaWYgKGFyclRlbXAubGVuZ3RoID09PSBqc29uRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcnJDaGVja2VkID0gYXJyVGVtcDtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllcnNfbG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMgPSAhcGFyc2VGbG9hdChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpID8gc2NvcGUuY2FsbGJhY2tGdW5jdGlvbiA6IHNjb3BlLmNhbGxiYWNrRnVuY3Rpb25NdWx0aTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsZXQgYXN5bmNDYWxsYmFjayA9ICFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykgPyBzY29wZS5jYWxsYmFja0Z1bmN0aW9uIDogc2NvcGUuY2FsbGJhY2tGdW5jdGlvbk11bHRpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goKGxvbCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtmaWx0ZXJzOiBqc29uRGF0YSwgYXJyQ2hlY2tlZDogYXJyQ2hlY2tlZH0sIGNhbGxiYWNrRnVuYyk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBGaWx0ZXJGZWF0dXJlTGlzdCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMud3JhcHBlclJlZiAmJiB0aGlzLndyYXBwZXJSZWYuY3VycmVudCAmJiAhdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tJbnNpZGUoZXZlbnQpIHtcbiAgICBsZXQgcGF0aCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnBhdGg7XG4gICAgaWYgKHBhdGhbMF0gPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1maWx0ZXItZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge2V2dC5zdG9wUHJvcGFnYXRpb24oKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHRoaXMucHJvcHMucGFyZW50SWQsIHRoaXMucHJvcHMuZmVhdHVyZS52YWx1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYzRnTWFwc1V0aWxzIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRmVhdHVyZUZpbHRlckl0ZW0iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyIsInNjb3BlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsImV2dCIsImZpbHRlckxheWVycyIsImZlYXR1cmUiLCJpZGVudGlmaWVyIiwicGFyZW50SWQiLCJmaWVsZCIsImNoZWNrZWQiLCJ1dGlscyIsImRlY29kZUhUTUwiLCJ0cmFuc2xhdGlvbiIsIkNvbXBvbmVudCIsIl9jNGdGZWF0dXJlRmlsdGVySXRlbSIsIkZlYXR1cmVGaWx0ZXJMaXN0IiwiZm9ybSIsImNsYXNzTmFtZVRleHQiLCJmaWx0ZXJzIiwibGVuZ3RoIiwib3BlbiIsIm1hcCIsImluZGV4IiwiaWQiLCJjaGVja2VkSXRlbSIsInJlbW92ZVVtbGF1dHMiLCJuYW1lIiwibGlDbGFzcyIsIm9uTW91c2VVcCIsInNldE9wZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImltZyIsImNsaWNrRXZlbnQiLCJsaW5rIiwidW5kZWZpbmVkIiwid2luZG93IiwiaW1hZ2UiLCJzcmMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiX2M0Z0ZlYXR1cmVNdWx0aWNoZWNrYm94SXRlbSIsIkZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IiwiY2hlY2tlZEl0ZW1zIiwiZmluZCIsImVsZW1lbnQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0iLCJudW1iZXJTcGFuIiwibnVtYmVyIiwiX2M0Z0ZlYXR1cmVGaWx0ZXJMaXN0IiwiX2M0Z0ZlYXR1cmVGaWx0ZXJNdWx0aWNoZWNrYm94IiwiX3N0eWxlIiwiX3NvdXJjZSIsIl9jNGdNYXBzSTE4biIsIl9vcGVuaW5nX2hvdXJzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIkZlYXR1cmVGaWx0ZXIiLCJiaW5kIiwiZmlsdGVyTGF5ZXJzTXVsdGkiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1bFJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImhhbmRsZUNsaWNrSW5zaWRlIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllck11bHRpIiwiaGlkZUZlYXR1cmUiLCJoaWRlRmVhdHVyZU11bHRpIiwiY2FsbGJhY2tGdW5jdGlvbiIsImNhbGxiYWNrRnVuY3Rpb25NdWx0aSIsImxvYWRGaWx0ZXJzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjYWNoaW5nIiwib25iZWZvcmV1bmxvYWQiLCJzdG9yZVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwiYXJyQ2hlY2tlZCIsImxheWVycyIsImdldEN1cnJlbnRMYXllclN0YXRlcyIsImFyckxheWVyU3RhdGVzIiwiRGF0ZSIsIm5vdyIsIm9wZW5lZExpc3QiLCJmZWF0dXJlcyIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsImZpbHRlciIsIl90aGlzMiIsInNob3dCdXR0b25zIiwibGlzdERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJ0YXJnZXQiLCJyZXNldEJ1dHRvbiIsInBhcnNlRmxvYXQiLCJmaWx0ZXJSZXNldEJ1dHRvbiIsImJvb2xGaWx0ZXJSZXNldCIsImZpbHRlckhhbmRsaW5nIiwicmVzZXRGaWx0ZXIiLCJSRVNFVF9GSUxURVIiLCJkaXYiLCJyZWYiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsInByb3BlcnR5IiwibGlzdElkIiwiYXJndW1lbnRzIiwibmV3U3RhdGUiLCJzZXRTdGF0ZSIsIl90aGlzMyIsImFyckxheWVycyIsImdldExheWVycyIsImdldEFycmF5IiwiYWRkZWQiLCJzaG93RmVhdHVyZSIsImdldFZpZXciLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlZEVudHJ5IiwiZm91bmQiLCJwYXJzZSIsInB1c2giLCJybUluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIl90aGlzNCIsInNob3dGZWF0dXJlTXVsdGkiLCJvcGVuSWQiLCJfdGhpczUiLCJyZXNldEZlYXR1cmUiLCJsYXllciIsIl90aGlzNiIsImdldFN0eWxlIiwiZ2V0U291cmNlIiwic291cmNlIiwiQ2x1c3RlciIsImZvckVhY2hGZWF0dXJlIiwiX3RoaXM3IiwiY2hlY2tGZWF0dXJlIiwib2JqQ2hlY2tlZCIsImZlYXR1cmVIb3VycyIsIm9wZW5pbmdfaG91cnMiLCJhZGRyZXNzIiwiY291bnRyeV9jb2RlIiwiZ2V0U3RhdGUiLCJlcnJvciIsImNoZWNrRmVhdHVyZU11bHRpIiwiX3RoaXM4IiwiZm9yRWFjaCIsInNob3ciLCJyZW1vdmVGZWF0dXJlIiwiX3RoaXM5IiwiZmlsdGVyQWN0aXZlIiwiZmVhdHVyZVByb3BlcnR5IiwiYWRkRmVhdHVyZSIsInVybCIsImFwaSIsImxhbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uRGF0YSIsImNhbGxiYWNrRnVuYyIsImdldFZhbHVlIiwiYXJyVGVtcCIsInByb3h5IiwibGF5ZXJzX2xvYWRlZCIsImFzeW5jQ2FsbGJhY2siLCJjNGdNYXBzSG9va3MiLCJsYXllcl9sb2FkZWQiLCJsb2wiLCJjb21wb25lbnREaWRNb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnRhaW5zIiwicGF0aCIsIm5hdGl2ZUV2ZW50IiwiY3VycmVudFRhcmdldCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9