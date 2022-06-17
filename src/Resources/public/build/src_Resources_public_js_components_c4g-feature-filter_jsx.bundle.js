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

    _this.loadFilters();

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
      var _this3 = this;

      var field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var newState = this.state.arrChecked;
      newState[listId] = {
        identifier: property,
        value: value,
        field: field
      };
      this.setState({
        arrChecked: newState
      }, function () {
        var arrLayers = _this3.props.mapController.map.getLayers().getArray();

        arrLayers.map(function (feature, index) {
          _this3.filterLayer(feature);
        });

        for (var i = 0; i < _this3.features.length; i++) {
          if (_this3.features.hasOwnProperty(i)) {
            var added = _this3.showFeature(_this3.features[i], i);

            if (added) {
              i--;
            }
          }
        }
      });
    }
  }, {
    key: "filterLayersMulti",
    value: function filterLayersMulti(property, listId, value) {
      var _this4 = this;

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
      }, function () {
        var arrLayers = _this4.props.mapController.map.getLayers().getArray();

        arrLayers.map(function (feature, index) {
          _this4.filterLayerMulti(feature);
        });

        for (var i = 0; i < _this4.features.length; i++) {
          if (_this4.features.hasOwnProperty(i)) {
            var added = _this4.showFeatureMulti(_this4.features[i], i);

            if (added) {
              i--;
            }
          }
        }
      });
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

          scope.setState({
            filters: jsonData,
            arrChecked: arrChecked
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZmVhdHVyZS1maWx0ZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7RUFDVCwyQkFBWUMsS0FBWixFQUFtQjtJQUFBO0lBQUEseUJBQ1RBLEtBRFM7RUFFbEI7Ozs7V0FDRCxrQkFBUztNQUFBOztNQUNMLElBQU1DLEtBQUssR0FBRyxJQUFkO01BQ0Esb0JBQ0k7UUFBSyxTQUFTLEVBQUM7TUFBZixnQkFDSSw0REFDSTtRQUNJLElBQUksRUFBQyxPQURUO1FBRUksUUFBUSxFQUFFLGtCQUFDQyxHQUFELEVBQVM7VUFBQyxLQUFJLENBQUNGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QkYsS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JDLFVBQTVDLEVBQXdESixLQUFLLENBQUNELEtBQU4sQ0FBWU0sUUFBcEUsRUFBOEVMLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CRyxLQUFsRyxFQUF5R04sS0FBSyxDQUFDRCxLQUFOLENBQVlPLEtBQVosQ0FBa0JDLEtBQTNIO1FBQW1JLENBRjNKO1FBR0ksT0FBTyxFQUFFUCxLQUFLLENBQUNELEtBQU4sQ0FBWVMsT0FBWixDQUFvQkosVUFBcEIsS0FBbUNKLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUhwRTtRQUlJLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDO01BSjlCLEVBREosRUFPS0ssbUJBQUEsQ0FBTUMsVUFBTixDQUFpQixLQUFLWCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJRLFdBQXBDLENBUEwsQ0FESixDQURKO0lBYUg7OztFQW5Ca0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkM7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUM7Ozs7O0VBQ1Qs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QUFKO1FBQXNCLENBSDlDO1FBSUksT0FBTyxFQUFFLGlCQUFDMUIsR0FBRCxFQUFTO1VBQUMsS0FBSSxDQUFDRixLQUFMLENBQVdHLFlBQVgsQ0FBd0IsS0FBSSxDQUFDSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDLFVBQTNDLEVBQXVELEtBQUksQ0FBQ0wsS0FBTCxDQUFXTSxRQUFsRSxFQUE0RSxLQUFJLENBQUNOLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkcsS0FBL0Y7UUFBdUcsQ0FKOUg7UUFLSSxLQUFLLEVBQUUsS0FBS1AsS0FBTCxDQUFXSSxPQUFYLENBQW1CQztNQUw5QixFQURKLEVBUUtLLG1CQUFBLENBQU1DLFVBQU4sQ0FBaUIsS0FBS1gsS0FBTCxDQUFXSSxPQUFYLENBQW1CUSxXQUFwQyxDQVJMLENBREosQ0FESjtJQWNIOzs7RUFuQitDQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLW11bHRpY2hlY2tib3guanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1maWx0ZXItZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHNjb3BlLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllciwgc2NvcGUucHJvcHMucGFyZW50SWQsIHNjb3BlLnByb3BzLmZlYXR1cmUudmFsdWUsIHNjb3BlLnByb3BzLnZhbHVlLmZpZWxkKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2NvcGUucHJvcHMuY2hlY2tlZC5pZGVudGlmaWVyID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItaXRlbS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZm9ybSA9IG51bGw7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcGFyZW50SWQ9e3RoaXMucHJvcHMuaWR9IGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5wcm9wcy5maWx0ZXJMYXllcnN9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1jbG9zZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IFwiXCIgOiBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgbGlDbGFzcyArPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCIgY2xpY2tlZFwiO1xuICAgICAgICAgICAgbGV0IGltZyA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMuZmVhdHVyZS5uYW1lfSB3aWR0aD17dGhpcy5wcm9wcy5mZWF0dXJlLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuZmVhdHVyZS5oZWlnaHR9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgIHtpbWd9XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciA6IFwiYWxsXCIsIHRoaXMucHJvcHMuaWQsIHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLnZhbHVlIDp1bmRlZmluZWQsIHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmZpZWxkIDogdW5kZWZpbmVkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZCA9ICEhKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gZmVhdHVyZS5pZGVudGlmaWVyICYmIGVsZW1lbnQudmFsdWUgPT09IGZlYXR1cmUudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17Y2hlY2tlZH0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3BhbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtc1swXS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoIC0xIDogdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG51bWJlclNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e1wic3VtXCJ9PiB7bnVtYmVyfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSAgXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge251bWJlclNwYW59XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIGNsaWNrZWRcIjtcbiAgICAgICAgICAgIGxldCBpbWcgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5pbWFnZSkge1xuICAgICAgICAgICAgICAgIGltZyA9IDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2V9IHRpdGxlPXt0aGlzLnByb3BzLmZlYXR1cmUubmFtZX0gd2lkdGg9e3RoaXMucHJvcHMuZmVhdHVyZS53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmZlYXR1cmUuaGVpZ2h0fS8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICB7aW1nfVxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLmlkLCB0cnVlKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlckxpc3R9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLW11bHRpY2hlY2tib3guanN4XCI7XG5pbXBvcnQge0ZpbGwsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtDbHVzdGVyfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQgb3BlbmluZ19ob3VycyBmcm9tIFwib3BlbmluZ19ob3Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlckxheWVycyA9IHRoaXMuZmlsdGVyTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnNNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldE9wZW4gPSB0aGlzLnNldE9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnVsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllciA9IHRoaXMuZmlsdGVyTGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlID0gdGhpcy5oaWRlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmVNdWx0aSA9IHRoaXMuaGlkZUZlYXR1cmVNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyczogW10sXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYXJyQ2hlY2tlZDogW10sXG4gICAgICBvcGVuZWRMaXN0OiAtMVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmZpbHRlciA9IHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzO1xuICAgIGxldCBzaG93QnV0dG9ucyA9IGZhbHNlO1xuICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZmVhdHVyZS1maWx0ZXItbGlzdFwiKTtcbiAgICBpZiAobGlzdERpdikge1xuICAgICAgc2hvd0J1dHRvbnMgPSAhKGxpc3REaXYuc2Nyb2xsV2lkdGggPD0gbGlzdERpdi5jbGllbnRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dCdXR0b25zID0gc2NvcGUucHJvcHMudGFyZ2V0ICYmICghKHNjb3BlLnByb3BzLnRhcmdldC5zY3JvbGxXaWR0aCA8PSBzY29wZS5wcm9wcy50YXJnZXQuY2xpZW50V2lkdGgpKTtcbiAgICB9XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gbnVsbDtcbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlclJlc2V0QnV0dG9uKSkge1xuICAgICAgcmVzZXRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItcmVzZXRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnJlc2V0RmlsdGVyKCl9Pnt0aGlzLmxhbmdDb25zdGFudHMuUkVTRVRfRklMVEVSfTwvYnV0dG9uPlxuICAgIH1cbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkaXYgPSBmaWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY2hlY2tlZEl0ZW1zID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF0gfHwgW107XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9IGZpbHRlckxheWVycz17dGhpcy5maWx0ZXJMYXllcnNNdWx0aX0gaWQ9e2luZGV4fSBrZXk9e2luZGV4fS8+XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPTEwMH0vPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkaXYgPSBmaWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY2hlY2tlZEl0ZW0gPSBzY29wZS5zdGF0ZS5hcnJDaGVja2VkW2luZGV4XTtcbiAgICAgICAgICBsZXQgb3BlbmVkTGlzdCA9IHNjb3BlLnN0YXRlLm9wZW5lZExpc3QgPT09IGluZGV4O1xuICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckxpc3QgZmVhdHVyZT17ZmVhdHVyZX0gb3Blbj17b3BlbmVkTGlzdH0gc2V0T3Blbj17dGhpcy5zZXRPcGVufSBjaGVja2VkSXRlbT17Y2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5maWx0ZXJMYXllcnN9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFzaG93QnV0dG9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1ub3Qtb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LXByZXZpb3VzXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0xMDB9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtbmV4dFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC4gc2Nyb2xsTGVmdCArPTEwMH0vPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKDxkaXYvPik7XG4gIH1cblxuICBmaWx0ZXJMYXllcnMgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlLCBmaWVsZCA9IFwiXCIpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWQ7XG4gICAgbmV3U3RhdGVbbGlzdElkXSA9IHtcbiAgICAgIGlkZW50aWZpZXI6IHByb3BlcnR5LFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZmllbGQ6IGZpZWxkXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBuZXdTdGF0ZX0sICgpID0+IHtcbiAgICAgICAgbGV0IGFyckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMuc2hvd0ZlYXR1cmUodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBmaWx0ZXJMYXllcnNNdWx0aSAocHJvcGVydHksIGxpc3RJZCwgdmFsdWUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWQ7XG4gICAgbGV0IGNoYW5nZWRFbnRyeSA9IG5ld1N0YXRlW2xpc3RJZF07XG5cbiAgICBsZXQgZm91bmQgPSBjaGFuZ2VkRW50cnkuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZGVudGlmaWVyID09PSBwcm9wZXJ0eSAmJiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZSk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5maWx0ZXJzW2xpc3RJZF0uZmlsdGVycykpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeS5wdXNoKHtcbiAgICAgICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeSA9IFtdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBybUluZGV4ID0gY2hhbmdlZEVudHJ5LmluZGV4T2YoZm91bmQpO1xuICAgICAgICBpZiAocm1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZEVudHJ5LnNwbGljZShybUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSBjaGFuZ2VkRW50cnk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCAoKSA9PiB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlTXVsdGkodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldE9wZW4gKG9wZW5JZCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZExpc3QgPT09IG9wZW5JZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiBvcGVuSWR9KTtcbiAgICB9XG4gIH1cblxuICByZXNldEZpbHRlciAoKSB7XG4gICAgbGV0IGZpbHRlciA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGZpbHRlci5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogZmlsdGVyfSwgKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5yZXNldEZlYXR1cmUodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJMYXllciAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckxheWVyTXVsdGkgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgIGlmIChvYmpDaGVja2VkLnZhbHVlID09PSBcIm9wZW5pbmdfaG91cnNcIiAmJiBmZWF0dXJlLmdldChvYmpDaGVja2VkLmZpZWxkIHx8IFwib3BlbmluZ19ob3Vyc1wiKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGZlYXR1cmVIb3VycyA9IG5ldyBvcGVuaW5nX2hvdXJzKGZlYXR1cmUuZ2V0KG9iakNoZWNrZWQuZmllbGQgfHwgXCJvcGVuaW5nX2hvdXJzXCIpLCB7YWRkcmVzczoge2NvdW50cnlfY29kZTogXCJkZVwifX0pO1xuICAgICAgICByZXR1cm4gZmVhdHVyZUhvdXJzLmdldFN0YXRlKCk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghKHByb3BlcnR5ID09PSBcImFsbFwiIHx8IChmZWF0dXJlLmdldChwcm9wZXJ0eSkgJiYgIW9iakNoZWNrZWQudmFsdWUpIHx8ICgob2JqQ2hlY2tlZC52YWx1ZSA9PSBmZWF0dXJlLmdldChwcm9wZXJ0eSkpICYmIG9iakNoZWNrZWQudmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuXG4gIH1cblxuICBoaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdyAmJiBmaWx0ZXJBY3RpdmUpe1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvd0ZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSB0cnVlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93KSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXNldEZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzaG93RmVhdHVyZU11bHRpIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93IHx8ICFmaWx0ZXJBY3RpdmUpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGxvYWRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmZpbHRlciArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmlkICsgXCIvXCIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nO1xuICAgIGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoISFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaChbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKHtcbiAgICAgICAgICAgICAgaWRlbnRpZmllcjogXCJhbGxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtmaWx0ZXJzOiBqc29uRGF0YSwgYXJyQ2hlY2tlZDogYXJyQ2hlY2tlZH0pXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBGaWx0ZXJGZWF0dXJlTGlzdCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMud3JhcHBlclJlZiAmJiB0aGlzLndyYXBwZXJSZWYuY3VycmVudCAmJiAhdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tJbnNpZGUoZXZlbnQpIHtcbiAgICBsZXQgcGF0aCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnBhdGg7XG4gICAgaWYgKHBhdGhbMF0gPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1maWx0ZXItZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge2V2dC5zdG9wUHJvcGFnYXRpb24oKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHRoaXMucHJvcHMucGFyZW50SWQsIHRoaXMucHJvcHMuZmVhdHVyZS52YWx1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJGZWF0dXJlRmlsdGVySXRlbSIsInByb3BzIiwic2NvcGUiLCJldnQiLCJmaWx0ZXJMYXllcnMiLCJmZWF0dXJlIiwiaWRlbnRpZmllciIsInBhcmVudElkIiwidmFsdWUiLCJmaWVsZCIsImNoZWNrZWQiLCJ1dGlscyIsImRlY29kZUhUTUwiLCJ0cmFuc2xhdGlvbiIsIkNvbXBvbmVudCIsIkZlYXR1cmVGaWx0ZXJMaXN0IiwiZm9ybSIsImNsYXNzTmFtZSIsImZpbHRlcnMiLCJsZW5ndGgiLCJvcGVuIiwibWFwIiwiaW5kZXgiLCJpZCIsImNoZWNrZWRJdGVtIiwicmVtb3ZlVW1sYXV0cyIsIm5hbWUiLCJsaUNsYXNzIiwic2V0T3BlbiIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaW1nIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInVuZGVmaW5lZCIsIkZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IiwiY2hlY2tlZEl0ZW1zIiwiZmluZCIsImVsZW1lbnQiLCJudW1iZXJTcGFuIiwibnVtYmVyIiwiRmVhdHVyZUZpbHRlciIsImJpbmQiLCJmaWx0ZXJMYXllcnNNdWx0aSIsIndyYXBwZXJSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInVsUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiaGFuZGxlQ2xpY2tJbnNpZGUiLCJmaWx0ZXJMYXllciIsImZpbHRlckxheWVyTXVsdGkiLCJoaWRlRmVhdHVyZSIsImhpZGVGZWF0dXJlTXVsdGkiLCJsb2FkRmlsdGVycyIsInN0YXRlIiwiYXJyQ2hlY2tlZCIsIm9wZW5lZExpc3QiLCJmZWF0dXJlcyIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiZmlsdGVyIiwic2hvd0J1dHRvbnMiLCJsaXN0RGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsInRhcmdldCIsInJlc2V0QnV0dG9uIiwicGFyc2VGbG9hdCIsImZpbHRlclJlc2V0QnV0dG9uIiwicmVzZXRGaWx0ZXIiLCJSRVNFVF9GSUxURVIiLCJmaWx0ZXJIYW5kbGluZyIsImRpdiIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwicHJvcGVydHkiLCJsaXN0SWQiLCJuZXdTdGF0ZSIsInNldFN0YXRlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzIiwiZ2V0QXJyYXkiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJhZGRlZCIsInNob3dGZWF0dXJlIiwiY2hhbmdlZEVudHJ5IiwiZm91bmQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwicm1JbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzaG93RmVhdHVyZU11bHRpIiwib3BlbklkIiwicmVzZXRGZWF0dXJlIiwibGF5ZXIiLCJnZXRTdHlsZSIsImdldFNvdXJjZSIsInNvdXJjZSIsIkNsdXN0ZXIiLCJmb3JFYWNoRmVhdHVyZSIsIm9iakNoZWNrZWQiLCJnZXQiLCJmZWF0dXJlSG91cnMiLCJvcGVuaW5nX2hvdXJzIiwiYWRkcmVzcyIsImNvdW50cnlfY29kZSIsImdldFN0YXRlIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsImZvckVhY2giLCJzaG93Iiwia2V5IiwiY2hlY2tGZWF0dXJlIiwic2V0IiwicmVtb3ZlRmVhdHVyZSIsImZpbHRlckFjdGl2ZSIsImZlYXR1cmVQcm9wZXJ0eSIsImFkZEZlYXR1cmUiLCJ1cmwiLCJhcGkiLCJsYW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29udGFpbnMiLCJwYXRoIiwibmF0aXZlRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==