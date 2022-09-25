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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FeatureFilterItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FeatureFilterItem, _Component);

  var _super = _createSuper(FeatureFilterItem);

  function FeatureFilterItem(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterItem);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(FeatureFilterItem, [{
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
  return FeatureFilterItem;
}(_react.Component);

exports.FeatureFilterItem = FeatureFilterItem;

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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureFilterItem = __webpack_require__(/*! ./c4g-feature-filter-item.jsx */ "./src/Resources/public/js/components/c4g-feature-filter-item.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FeatureFilterList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FeatureFilterList, _Component);

  var _super = _createSuper(FeatureFilterList);

  function FeatureFilterList(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterList);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(FeatureFilterList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var scope = this;
      var form = null;
      var className = "";

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

        className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = this.props.checkedItem.identifier === "all" ? "" : "c4g-item-checked";
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: liClass
        }, /*#__PURE__*/_react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);

            evt.stopPropagation();
            evt.preventDefault();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), form);
      } else {
        className = " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var _liClass = "c4g-item-checked";
        _liClass += this.props.checkedItem.identifier === "all" ? "" : " clicked";
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
        }, img, /*#__PURE__*/_react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].identifier : "all", _this.props.id, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].value : undefined, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].field : undefined);

            evt.stopPropagation();
            evt.preventDefault();
          }
        }, _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)));
      }
    }
  }]);
  return FeatureFilterList;
}(_react.Component);

exports.FeatureFilterList = FeatureFilterList;

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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureMulticheckboxItem = __webpack_require__(/*! ./c4g-feature-multicheckbox-item.jsx */ "./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FeatureFilterMultiCheckbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FeatureFilterMultiCheckbox, _Component);

  var _super = _createSuper(FeatureFilterMultiCheckbox);

  function FeatureFilterMultiCheckbox(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterMultiCheckbox);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(FeatureFilterMultiCheckbox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var scope = this;
      var form = null;
      var className;

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

        className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = "c4g-item-checked";
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: liClass
        }, /*#__PURE__*/_react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);

            evt.stopPropagation();
            evt.preventDefault();
          }
        }, /*#__PURE__*/_react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), numberSpan, form);
      } else {
        className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var _liClass = "c4g-item-checked";
        _liClass += this.props.checkedItems.length === 0 ? "" : " clicked";
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
        }, img, /*#__PURE__*/_react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier, _this.props.id, true);

            evt.stopPropagation();
            evt.preventDefault();
          }
        }, _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)));
      }
    }
  }]);
  return FeatureFilterMultiCheckbox;
}(_react.Component);

exports.FeatureFilterMultiCheckbox = FeatureFilterMultiCheckbox;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gFeatureFilterList = __webpack_require__(/*! ./c4g-feature-filter-list.jsx */ "./src/Resources/public/js/components/c4g-feature-filter-list.jsx");

var _c4gFeatureFilterMulticheckbox = __webpack_require__(/*! ./c4g-feature-filter-multicheckbox.jsx */ "./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _opening_hours = _interopRequireDefault(__webpack_require__(/*! opening_hours */ "./node_modules/opening_hours/build/opening_hours.js"));

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FeatureFilter = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FeatureFilter, _Component);

  var _super = _createSuper(FeatureFilter);

  function FeatureFilter(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FeatureFilter);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.filterLayers = _this.filterLayers.bind((0, _assertThisInitialized2["default"])(_this));
    _this.filterLayersMulti = _this.filterLayersMulti.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setOpen = _this.setOpen.bind((0, _assertThisInitialized2["default"])(_this));
    _this.wrapperRef = /*#__PURE__*/_react["default"].createRef();
    _this.ulRef = /*#__PURE__*/_react["default"].createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClickInside = _this.handleClickInside.bind((0, _assertThisInitialized2["default"])(_this));
    _this.filterLayer = _this.filterLayer.bind((0, _assertThisInitialized2["default"])(_this));
    _this.filterLayerMulti = _this.filterLayerMulti.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hideFeature = _this.hideFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hideFeatureMulti = _this.hideFeatureMulti.bind((0, _assertThisInitialized2["default"])(_this));
    _this.callbackFunction = _this.callbackFunction.bind((0, _assertThisInitialized2["default"])(_this));
    _this.callbackFunctionMulti = _this.callbackFunctionMulti.bind((0, _assertThisInitialized2["default"])(_this));

    _this.loadFilters();

    if (props.mapController.data.caching) {
      window.onbeforeunload = function () {
        _c4gMapsUtils.utils.storeValue('filtersChecked', JSON.stringify(scope.state.arrChecked));

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
    _this.props.mapController.filter = (0, _assertThisInitialized2["default"])(_this);
    return _this;
  }

  (0, _createClass2["default"])(FeatureFilter, [{
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
        resetButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-feature-filter-reset",
          onMouseUp: function onMouseUp(evt) {
            return _this2.resetFilter();
          }
        }, this.langConstants.RESET_FILTER);
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
          filter.push([]);
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
          console.warn(error);
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
  return FeatureFilter;
}(_react.Component);

exports["default"] = FeatureFilter;

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

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FeatureFilterMultiCheckboxItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FeatureFilterMultiCheckboxItem, _Component);

  var _super = _createSuper(FeatureFilterMultiCheckboxItem);

  function FeatureFilterMultiCheckboxItem(props) {
    (0, _classCallCheck2["default"])(this, FeatureFilterMultiCheckboxItem);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(FeatureFilterMultiCheckboxItem, [{
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
  return FeatureFilterMultiCheckboxItem;
}(_react.Component);

exports.FeatureFilterMultiCheckboxItem = FeatureFilterMultiCheckboxItem;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZmVhdHVyZS1maWx0ZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7RUFDVCwyQkFBWUMsS0FBWixFQUFtQjtJQUFBO0lBQUEseUJBQ1RBLEtBRFM7RUFFbEI7Ozs7V0FDRCxrQkFBUztNQUFBOztNQUNMLElBQU1DLEtBQUssR0FBRyxJQUFkO01BQ0Esb0JBQ0k7UUFBSyxTQUFTLEVBQUM7TUFBZixnQkFDSSw0REFDSTtRQUNJLElBQUksRUFBQyxPQURUO1FBRUksUUFBUSxFQUFFLGtCQUFDQyxHQUFELEVBQVM7VUFBQyxLQUFJLENBQUNGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QkYsS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JDLFVBQTVDLEVBQXdESixLQUFLLENBQUNELEtBQU4sQ0FBWU0sUUFBcEUsRUFBOEVMLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CRyxLQUFsRyxFQUF5R04sS0FBSyxDQUFDRCxLQUFOLENBQVlPLEtBQVosQ0FBa0JDLEtBQTNIO1FBQW1JLENBRjNKO1FBR0ksT0FBTyxFQUFFUCxLQUFLLENBQUNELEtBQU4sQ0FBWVMsT0FBWixDQUFvQkosVUFBcEIsS0FBbUNKLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUhwRTtRQUlJLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDO01BSjlCLEVBREosRUFPS0ssbUJBQUEsQ0FBTUMsVUFBTixDQUFpQixLQUFLWCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJRLFdBQXBDLENBUEwsQ0FESixDQURKO0lBYUg7OztFQW5Ca0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkM7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUM7Ozs7O0VBQ1Qs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TixDQUFpQixLQUFLWCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJRLFdBQXBDLENBUkwsQ0FESixDQURKO0lBY0g7OztFQW5CK0NDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVySXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnMoc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCBzY29wZS5wcm9wcy5wYXJlbnRJZCwgc2NvcGUucHJvcHMuZmVhdHVyZS52YWx1ZSwgc2NvcGUucHJvcHMudmFsdWUuZmllbGQpO319XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzY29wZS5wcm9wcy5jaGVja2VkLmlkZW50aWZpZXIgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCJcbmltcG9ydCB7RmVhdHVyZUZpbHRlckl0ZW19IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctb3BlblwiO1xuICAgICAgICAgICAgICAgIGZvcm0gPVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVySXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkSXRlbX0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gXCJcIiA6IFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5zZXRPcGVuKHRoaXMucHJvcHMuaWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319PjxzcGFuLz57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IFwiXCIgOiBcIiBjbGlja2VkXCI7XG4gICAgICAgICAgICBsZXQgaW1nID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpbWcgPSA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfSB0aXRsZT17dGhpcy5wcm9wcy5mZWF0dXJlLm5hbWV9IHdpZHRoPXt0aGlzLnByb3BzLmZlYXR1cmUud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5mZWF0dXJlLmhlaWdodH0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAge2ltZ31cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyIDogXCJhbGxcIiwgdGhpcy5wcm9wcy5pZCwgdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0udmFsdWUgOnVuZGVmaW5lZCwgdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uZmllbGQgOiB1bmRlZmluZWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319Pnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCJcbmltcG9ydCB7RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2VkID0gISEodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZGVudGlmaWVyID09PSBmZWF0dXJlLmlkZW50aWZpZXIgJiYgZWxlbWVudC52YWx1ZSA9PT0gZmVhdHVyZS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXtjaGVja2VkfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBudW1iZXJTcGFuID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zWzBdLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggLTEgOiB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbnVtYmVyU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17XCJzdW1cIn0+IHtudW1iZXJ9IDwvc3Bhbj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICB7bnVtYmVyU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gIFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgbGlDbGFzcyArPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIgY2xpY2tlZFwiO1xuICAgICAgICAgICAgbGV0IGltZyA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMuZmVhdHVyZS5uYW1lfSB3aWR0aD17dGhpcy5wcm9wcy5mZWF0dXJlLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuZmVhdHVyZS5oZWlnaHR9Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIHtpbWd9XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIsIHRoaXMucHJvcHMuaWQsIHRydWUpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319Pnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTGlzdH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QuanN4XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3hcIjtcbmltcG9ydCB7RmlsbCwgU3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5pbXBvcnQge0NsdXN0ZXJ9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBvcGVuaW5nX2hvdXJzIGZyb20gXCJvcGVuaW5nX2hvdXJzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzID0gdGhpcy5maWx0ZXJMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyc011bHRpID0gdGhpcy5maWx0ZXJMYXllcnNNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0T3BlbiA9IHRoaXMuc2V0T3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMudWxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGlja0luc2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyID0gdGhpcy5maWx0ZXJMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmUgPSB0aGlzLmhpZGVGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZU11bHRpID0gdGhpcy5oaWRlRmVhdHVyZU11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gdGhpcy5jYWxsYmFja0Z1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uTXVsdGkgPSB0aGlzLmNhbGxiYWNrRnVuY3Rpb25NdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ2ZpbHRlcnNDaGVja2VkJywgSlNPTi5zdHJpbmdpZnkoc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZCkpO1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCd0c3RhbXBjNGcnLCBEYXRlLm5vdygpKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFyckNoZWNrZWQ6IFtdLFxuICAgICAgb3BlbmVkTGlzdDogLTFcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5maWx0ZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuc3RhdGUuZmlsdGVycztcbiAgICBsZXQgc2hvd0J1dHRvbnMgPSBmYWxzZTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3RcIik7XG4gICAgaWYgKGxpc3REaXYpIHtcbiAgICAgIHNob3dCdXR0b25zID0gIShsaXN0RGl2LnNjcm9sbFdpZHRoIDw9IGxpc3REaXYuY2xpZW50V2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93QnV0dG9ucyA9IHNjb3BlLnByb3BzLnRhcmdldCAmJiAoIShzY29wZS5wcm9wcy50YXJnZXQuc2Nyb2xsV2lkdGggPD0gc2NvcGUucHJvcHMudGFyZ2V0LmNsaWVudFdpZHRoKSk7XG4gICAgfVxuICAgIGxldCByZXNldEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJSZXNldEJ1dHRvbikpIHtcbiAgICAgIHJlc2V0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLXJlc2V0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5yZXNldEZpbHRlcigpfT57dGhpcy5sYW5nQ29uc3RhbnRzLlJFU0VUX0ZJTFRFUn08L2J1dHRvbj5cbiAgICB9XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtcyA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdIHx8IFtdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzTXVsdGl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJMaXN0IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW09e2NoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuIHNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2Lz4pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXJzIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSwgZmllbGQgPSBcIlwiKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSB7XG4gICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGZpZWxkOiBmaWVsZFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCB0aGlzLmNhbGxiYWNrRnVuY3Rpb24pO1xuICB9XG4gIGNhbGxiYWNrRnVuY3Rpb24gKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZmlsdGVyTGF5ZXJzTXVsdGkgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIGxldCBjaGFuZ2VkRW50cnkgPSBuZXdTdGF0ZVtsaXN0SWRdO1xuXG4gICAgbGV0IGZvdW5kID0gY2hhbmdlZEVudHJ5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gcHJvcGVydHkgJiYgZWxlbWVudC52YWx1ZSA9PT0gdmFsdWUpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmlsdGVyc1tsaXN0SWRdLmZpbHRlcnMpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGFuZ2VkRW50cnkucHVzaCh7XG4gICAgICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBbXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcm1JbmRleCA9IGNoYW5nZWRFbnRyeS5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgaWYgKHJtSW5kZXggPiAtMSkge1xuICAgICAgICAgIGNoYW5nZWRFbnRyeS5zcGxpY2Uocm1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0gY2hhbmdlZEVudHJ5O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgdGhpcy5jYWxsYmFja0Z1bmN0aW9uTXVsdGkpO1xuICB9XG4gIGNhbGxiYWNrRnVuY3Rpb25NdWx0aSAoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZU11bHRpKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0T3BlbiAob3BlbklkKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkTGlzdCA9PT0gb3BlbklkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IG9wZW5JZH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyICgpIHtcbiAgICBsZXQgZmlsdGVyID0gW107XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgZmlsdGVyLnB1c2goW10pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBmaWx0ZXJ9LCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnJlc2V0RmVhdHVyZSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckxheWVyIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxheWVyLmdldFN0eWxlICYmIHR5cGVvZiBsYXllci5nZXRTb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHNvdXJjZSA9IGxheWVyLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyLmdldFNvdXJjZSgpLmdldFNvdXJjZSgpIDogbGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTGF5ZXJNdWx0aSAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxheWVyLmdldFN0eWxlICYmIHR5cGVvZiBsYXllci5nZXRTb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHNvdXJjZSA9IGxheWVyLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyLmdldFNvdXJjZSgpLmdldFNvdXJjZSgpIDogbGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmUgKGZlYXR1cmUsIG9iakNoZWNrZWQpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgaWYgKG9iakNoZWNrZWQudmFsdWUgPT09IFwib3BlbmluZ19ob3Vyc1wiICYmIGZlYXR1cmUuZ2V0KG9iakNoZWNrZWQuZmllbGQgfHwgXCJvcGVuaW5nX2hvdXJzXCIpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZmVhdHVyZUhvdXJzID0gbmV3IG9wZW5pbmdfaG91cnMoZmVhdHVyZS5nZXQob2JqQ2hlY2tlZC5maWVsZCB8fCBcIm9wZW5pbmdfaG91cnNcIiksIHthZGRyZXNzOiB7Y291bnRyeV9jb2RlOiBcImRlXCJ9fSk7XG4gICAgICAgIHJldHVybiBmZWF0dXJlSG91cnMuZ2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCEocHJvcGVydHkgPT09IFwiYWxsXCIgfHwgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSAmJiAhb2JqQ2hlY2tlZC52YWx1ZSkgfHwgKChvYmpDaGVja2VkLnZhbHVlID09IGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkgJiYgb2JqQ2hlY2tlZC52YWx1ZSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZU11bHRpIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG5cbiAgfVxuXG4gIGhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkge1xuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdub0ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5jaGVja0ZlYXR1cmUoZmVhdHVyZSwgdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJyQ2hlY2tlZCl7XG4gICAgICAgICAgICBpZiAoYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBsZXQgb2JqQ2hlY2tlZCA9IGFyckNoZWNrZWRbaV07XG4gICAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgaWYgKChvYmpDaGVja2VkLnZhbHVlICYmIG9iakNoZWNrZWQudmFsdWUgPT09IGZlYXR1cmVQcm9wZXJ0eSkgfHwgIW9iakNoZWNrZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93ICYmIGZpbHRlckFjdGl2ZSl7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzaG93RmVhdHVyZSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNob3cpIHtcbiAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlc2V0RmVhdHVyZSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHNob3dGZWF0dXJlTXVsdGkgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBsZXQgZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBhcnJDaGVja2VkID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyQ2hlY2tlZCl7XG4gICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgb2JqQ2hlY2tlZCA9IGFyckNoZWNrZWRbaV07XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgIGxldCBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3cgfHwgIWZpbHRlckFjdGl2ZSkge1xuICAgICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbG9hZEZpbHRlcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZmlsdGVyICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuaWQgKyBcIi9cIiArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmc7XG4gICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGpzb25EYXRhKSB7XG4gICAgICAgIGxldCBjYWxsYmFja0Z1bmMgPSAoKT0+IHt9O1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoISFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaChbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKHtcbiAgICAgICAgICAgICAgaWRlbnRpZmllcjogXCJhbGxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgICAgIGlmICh1dGlscy5nZXRWYWx1ZSgndHN0YW1wYzRnJykgJiYgdXRpbHMuZ2V0VmFsdWUoJ3RzdGFtcGM0ZycpICsgNjA0ODAwID4gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmdldFZhbHVlKCdmaWx0ZXJzQ2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgIGxldCBhcnJUZW1wID0gSlNPTi5wYXJzZSh1dGlscy5nZXRWYWx1ZSgnZmlsdGVyc0NoZWNrZWQnKSk7XG4gICAgICAgICAgICAgIGlmIChhcnJUZW1wLmxlbmd0aCA9PT0ganNvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXJyQ2hlY2tlZCA9IGFyclRlbXA7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJzX2xvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2tGdW5jID0gIXBhcnNlRmxvYXQoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSA/IHNjb3BlLmNhbGxiYWNrRnVuY3Rpb24gOiBzY29wZS5jYWxsYmFja0Z1bmN0aW9uTXVsdGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzeW5jQ2FsbGJhY2sgPSAhcGFyc2VGbG9hdChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpID8gc2NvcGUuY2FsbGJhY2tGdW5jdGlvbiA6IHNjb3BlLmNhbGxiYWNrRnVuY3Rpb25NdWx0aTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkID0gd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgfHwgW107XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKChsb2wpPT4ge1xuICAgICAgICAgICAgICAgICAgICBhc3luY0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5zZXRTdGF0ZSh7ZmlsdGVyczoganNvbkRhdGEsIGFyckNoZWNrZWQ6IGFyckNoZWNrZWR9LCBjYWxsYmFja0Z1bmMpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhpZGUgRmlsdGVyRmVhdHVyZUxpc3QgaWYgY2xpY2tlZCBvbiBvdXRzaWRlIG9mIGVsZW1lbnRcbiAgICovXG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLndyYXBwZXJSZWYgJiYgdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQgJiYgIXRoaXMud3JhcHBlclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrSW5zaWRlKGV2ZW50KSB7XG4gICAgbGV0IHBhdGggPSBldmVudC5uYXRpdmVFdmVudC5wYXRoO1xuICAgIGlmIChwYXRoWzBdID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtldnQuc3RvcFByb3BhZ2F0aW9uKCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLnBhcmVudElkLCB0aGlzLnByb3BzLmZlYXR1cmUudmFsdWUpO319XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiRmVhdHVyZUZpbHRlckl0ZW0iLCJwcm9wcyIsInNjb3BlIiwiZXZ0IiwiZmlsdGVyTGF5ZXJzIiwiZmVhdHVyZSIsImlkZW50aWZpZXIiLCJwYXJlbnRJZCIsInZhbHVlIiwiZmllbGQiLCJjaGVja2VkIiwidXRpbHMiLCJkZWNvZGVIVE1MIiwidHJhbnNsYXRpb24iLCJDb21wb25lbnQiLCJGZWF0dXJlRmlsdGVyTGlzdCIsImZvcm0iLCJjbGFzc05hbWUiLCJmaWx0ZXJzIiwibGVuZ3RoIiwib3BlbiIsIm1hcCIsImluZGV4IiwiaWQiLCJjaGVja2VkSXRlbSIsInJlbW92ZVVtbGF1dHMiLCJuYW1lIiwibGlDbGFzcyIsInNldE9wZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImltZyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCIsImNoZWNrZWRJdGVtcyIsImZpbmQiLCJlbGVtZW50IiwibnVtYmVyU3BhbiIsIm51bWJlciIsIkZlYXR1cmVGaWx0ZXIiLCJiaW5kIiwiZmlsdGVyTGF5ZXJzTXVsdGkiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1bFJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImhhbmRsZUNsaWNrSW5zaWRlIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllck11bHRpIiwiaGlkZUZlYXR1cmUiLCJoaWRlRmVhdHVyZU11bHRpIiwiY2FsbGJhY2tGdW5jdGlvbiIsImNhbGxiYWNrRnVuY3Rpb25NdWx0aSIsImxvYWRGaWx0ZXJzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjYWNoaW5nIiwid2luZG93Iiwib25iZWZvcmV1bmxvYWQiLCJzdG9yZVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXRlIiwiYXJyQ2hlY2tlZCIsIkRhdGUiLCJub3ciLCJvcGVuZWRMaXN0IiwiZmVhdHVyZXMiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJmaWx0ZXIiLCJzaG93QnV0dG9ucyIsImxpc3REaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwidGFyZ2V0IiwicmVzZXRCdXR0b24iLCJwYXJzZUZsb2F0IiwiZmlsdGVyUmVzZXRCdXR0b24iLCJyZXNldEZpbHRlciIsIlJFU0VUX0ZJTFRFUiIsImZpbHRlckhhbmRsaW5nIiwiZGl2IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJwcm9wZXJ0eSIsImxpc3RJZCIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZGVkIiwic2hvd0ZlYXR1cmUiLCJjaGFuZ2VkRW50cnkiLCJmb3VuZCIsInBhcnNlIiwicHVzaCIsInJtSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwic2hvd0ZlYXR1cmVNdWx0aSIsIm9wZW5JZCIsInJlc2V0RmVhdHVyZSIsImxheWVyIiwiZ2V0U3R5bGUiLCJnZXRTb3VyY2UiLCJzb3VyY2UiLCJDbHVzdGVyIiwiZm9yRWFjaEZlYXR1cmUiLCJvYmpDaGVja2VkIiwiZ2V0IiwiZmVhdHVyZUhvdXJzIiwib3BlbmluZ19ob3VycyIsImFkZHJlc3MiLCJjb3VudHJ5X2NvZGUiLCJnZXRTdGF0ZSIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJmb3JFYWNoIiwic2hvdyIsImtleSIsImNoZWNrRmVhdHVyZSIsInNldCIsInJlbW92ZUZlYXR1cmUiLCJmaWx0ZXJBY3RpdmUiLCJmZWF0dXJlUHJvcGVydHkiLCJhZGRGZWF0dXJlIiwidXJsIiwiYXBpIiwibGFuZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25EYXRhIiwiY2FsbGJhY2tGdW5jIiwiZ2V0VmFsdWUiLCJhcnJUZW1wIiwicHJveHkiLCJsYXllcnNfbG9hZGVkIiwiYXN5bmNDYWxsYmFjayIsImM0Z01hcHNIb29rcyIsImxheWVyX2xvYWRlZCIsImxvbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInBhdGgiLCJuYXRpdmVFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9