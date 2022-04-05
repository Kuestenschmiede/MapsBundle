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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZmVhdHVyZS1maWx0ZXJfanN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7QUFDVCw2QkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNMLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksNERBQ0k7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLGdCQUFRLEVBQUUsa0JBQUNDLEdBQUQsRUFBUztBQUFDLGVBQUksQ0FBQ0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCRixLQUFLLENBQUNELEtBQU4sQ0FBWUksT0FBWixDQUFvQkMsVUFBNUMsRUFBd0RKLEtBQUssQ0FBQ0QsS0FBTixDQUFZTSxRQUFwRSxFQUE4RUwsS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JHLEtBQWxHLEVBQXlHTixLQUFLLENBQUNELEtBQU4sQ0FBWU8sS0FBWixDQUFrQkMsS0FBM0g7QUFBbUksU0FGM0o7QUFHSSxlQUFPLEVBQUVQLEtBQUssQ0FBQ0QsS0FBTixDQUFZUyxPQUFaLENBQW9CSixVQUFwQixLQUFtQ0osS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JDLFVBSHBFO0FBSUksYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkM7QUFKOUIsUUFESixFQU9LSyxvQkFBTUMsVUFBTixDQUFpQixLQUFLWCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJRLFdBQXBDLENBUEwsQ0FESixDQURKO0FBYUg7OztFQW5Ca0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkM7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUM7Ozs7O0FBQ1QsNkJB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QUFtQlEsV0FBcEMsQ0FSTCxDQURKLENBREo7QUFjSDs7O0VBbkIrQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItaXRlbS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXIuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLW11bHRpY2hlY2tib3gtaXRlbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyhzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHNjb3BlLnByb3BzLnBhcmVudElkLCBzY29wZS5wcm9wcy5mZWF0dXJlLnZhbHVlLCBzY29wZS5wcm9wcy52YWx1ZS5maWVsZCk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Njb3BlLnByb3BzLmNoZWNrZWQuaWRlbnRpZmllciA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIlxuaW1wb3J0IHtGZWF0dXJlRmlsdGVySXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gXCJcIiA6IFwiIGNsaWNrZWRcIjtcbiAgICAgICAgICAgIGxldCBpbWcgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5pbWFnZSkge1xuICAgICAgICAgICAgICAgIGltZyA9IDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2V9IHRpdGxlPXt0aGlzLnByb3BzLmZlYXR1cmUubmFtZX0gd2lkdGg9e3RoaXMucHJvcHMuZmVhdHVyZS53aWR0aH0gaGVpZ2h0PXt0aGlzLnByb3BzLmZlYXR1cmUuaGVpZ2h0fS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICB7aW1nfVxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgOiBcImFsbFwiLCB0aGlzLnByb3BzLmlkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS52YWx1ZSA6dW5kZWZpbmVkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5maWVsZCA6IHVuZGVmaW5lZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIlxuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW19IGZyb20gXCIuL2M0Zy1mZWF0dXJlLW11bHRpY2hlY2tib3gtaXRlbS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZm9ybSA9IG51bGw7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctb3BlblwiO1xuICAgICAgICAgICAgICAgIGZvcm0gPVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrZWQgPSAhISh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkZW50aWZpZXIgPT09IGZlYXR1cmUuaWRlbnRpZmllciAmJiBlbGVtZW50LnZhbHVlID09PSBmZWF0dXJlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcGFyZW50SWQ9e3RoaXMucHJvcHMuaWR9IGNoZWNrZWQ9e2NoZWNrZWR9IGZpbHRlckxheWVycz17dGhpcy5wcm9wcy5maWx0ZXJMYXllcnN9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1jbG9zZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG51bWJlclNwYW4gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXNbMF0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCAtMSA6IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBudW1iZXJTcGFuID0gPHNwYW4gY2xhc3NOYW1lPXtcInN1bVwifT4ge251bWJlcn0gPC9zcGFuPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gIFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5zZXRPcGVuKHRoaXMucHJvcHMuaWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319PjxzcGFuLz57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHtudW1iZXJTcGFufVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSAgXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiBjbGlja2VkXCI7XG4gICAgICAgICAgICBsZXQgaW1nID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpbWcgPSA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfSB0aXRsZT17dGhpcy5wcm9wcy5mZWF0dXJlLm5hbWV9IHdpZHRoPXt0aGlzLnByb3BzLmZlYXR1cmUud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5mZWF0dXJlLmhlaWdodH0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAge2ltZ31cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciwgdGhpcy5wcm9wcy5pZCwgdHJ1ZSk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJMaXN0fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbGlzdC5qc3hcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3h9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeFwiO1xuaW1wb3J0IHtGaWxsLCBTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IG9wZW5pbmdfaG91cnMgZnJvbSBcIm9wZW5pbmdfaG91cnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnMgPSB0aGlzLmZpbHRlckxheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyc011bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRPcGVuID0gdGhpcy5zZXRPcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cmFwcGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy51bFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlID0gdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXIgPSB0aGlzLmZpbHRlckxheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllck11bHRpID0gdGhpcy5maWx0ZXJMYXllck11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZSA9IHRoaXMuaGlkZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlTXVsdGkgPSB0aGlzLmhpZGVGZWF0dXJlTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFyckNoZWNrZWQ6IFtdLFxuICAgICAgb3BlbmVkTGlzdDogLTFcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5maWx0ZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuc3RhdGUuZmlsdGVycztcbiAgICBsZXQgc2hvd0J1dHRvbnMgPSBmYWxzZTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3RcIik7XG4gICAgaWYgKGxpc3REaXYpIHtcbiAgICAgIHNob3dCdXR0b25zID0gIShsaXN0RGl2LnNjcm9sbFdpZHRoIDw9IGxpc3REaXYuY2xpZW50V2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93QnV0dG9ucyA9IHNjb3BlLnByb3BzLnRhcmdldCAmJiAoIShzY29wZS5wcm9wcy50YXJnZXQuc2Nyb2xsV2lkdGggPD0gc2NvcGUucHJvcHMudGFyZ2V0LmNsaWVudFdpZHRoKSk7XG4gICAgfVxuICAgIGxldCByZXNldEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJSZXNldEJ1dHRvbikpIHtcbiAgICAgIHJlc2V0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLXJlc2V0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5yZXNldEZpbHRlcigpfT57dGhpcy5sYW5nQ29uc3RhbnRzLlJFU0VUX0ZJTFRFUn08L2J1dHRvbj5cbiAgICB9XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtcyA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdIHx8IFtdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzTXVsdGl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJMaXN0IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW09e2NoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuIHNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2Lz4pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXJzIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSwgZmllbGQgPSBcIlwiKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSB7XG4gICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGZpZWxkOiBmaWVsZFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCAoKSA9PiB7XG4gICAgICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZmlsdGVyTGF5ZXJzTXVsdGkgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIGxldCBjaGFuZ2VkRW50cnkgPSBuZXdTdGF0ZVtsaXN0SWRdO1xuXG4gICAgbGV0IGZvdW5kID0gY2hhbmdlZEVudHJ5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gcHJvcGVydHkgJiYgZWxlbWVudC52YWx1ZSA9PT0gdmFsdWUpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmlsdGVyc1tsaXN0SWRdLmZpbHRlcnMpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGFuZ2VkRW50cnkucHVzaCh7XG4gICAgICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBbXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcm1JbmRleCA9IGNoYW5nZWRFbnRyeS5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgaWYgKHJtSW5kZXggPiAtMSkge1xuICAgICAgICAgIGNoYW5nZWRFbnRyeS5zcGxpY2Uocm1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0gY2hhbmdlZEVudHJ5O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgKCkgPT4ge1xuICAgICAgbGV0IGFyckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZU11bHRpKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRPcGVuIChvcGVuSWQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWRMaXN0ID09PSBvcGVuSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogb3BlbklkfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGaWx0ZXIgKCkge1xuICAgIGxldCBmaWx0ZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBmaWx0ZXIucHVzaChbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IGZpbHRlcn0sICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMucmVzZXRGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXIgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJMYXllck11bHRpIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICBpZiAob2JqQ2hlY2tlZC52YWx1ZSA9PT0gXCJvcGVuaW5nX2hvdXJzXCIgJiYgZmVhdHVyZS5nZXQob2JqQ2hlY2tlZC5maWVsZCB8fCBcIm9wZW5pbmdfaG91cnNcIikpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBmZWF0dXJlSG91cnMgPSBuZXcgb3BlbmluZ19ob3VycyhmZWF0dXJlLmdldChvYmpDaGVja2VkLmZpZWxkIHx8IFwib3BlbmluZ19ob3Vyc1wiKSwge2FkZHJlc3M6IHtjb3VudHJ5X2NvZGU6IFwiZGVcIn19KTtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmVIb3Vycy5nZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIShwcm9wZXJ0eSA9PT0gXCJhbGxcIiB8fCAoZmVhdHVyZS5nZXQocHJvcGVydHkpICYmICFvYmpDaGVja2VkLnZhbHVlKSB8fCAoKG9iakNoZWNrZWQudmFsdWUgPT0gZmVhdHVyZS5nZXQocHJvcGVydHkpKSAmJiBvYmpDaGVja2VkLnZhbHVlKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlTXVsdGkgKGZlYXR1cmUsIG9iakNoZWNrZWQpIHtcblxuICB9XG5cbiAgaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSB0cnVlO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkgJiYgc2hvdykge1xuICAgICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdykge1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBoaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkge1xuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdub0ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgICBsZXQgZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGxldCBhcnJDaGVja2VkID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV07XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJDaGVja2VkKXtcbiAgICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIGZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvYmpDaGVja2VkID0gYXJyQ2hlY2tlZFtpXTtcbiAgICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3cgJiYgZmlsdGVyQWN0aXZlKXtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNob3dGZWF0dXJlIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkgJiYgc2hvdykge1xuICAgICAgICBzaG93ID0gdGhpcy5jaGVja0ZlYXR1cmUoZmVhdHVyZSwgdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdykge1xuICAgICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVzZXRGZWF0dXJlIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc2hvd0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJDaGVja2VkKXtcbiAgICAgICAgICBpZiAoYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBvYmpDaGVja2VkID0gYXJyQ2hlY2tlZFtpXTtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgbGV0IGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgaWYgKChvYmpDaGVja2VkLnZhbHVlICYmIG9iakNoZWNrZWQudmFsdWUgPT09IGZlYXR1cmVQcm9wZXJ0eSkgfHwgIW9iakNoZWNrZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdyB8fCAhZmlsdGVyQWN0aXZlKSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBsb2FkRmlsdGVycygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5maWx0ZXIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pZCArIFwiL1wiICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZztcbiAgICBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oanNvbkRhdGEpIHtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCEhcGFyc2VGbG9hdChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiYWxsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5zZXRTdGF0ZSh7ZmlsdGVyczoganNvbkRhdGEsIGFyckNoZWNrZWQ6IGFyckNoZWNrZWR9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhpZGUgRmlsdGVyRmVhdHVyZUxpc3QgaWYgY2xpY2tlZCBvbiBvdXRzaWRlIG9mIGVsZW1lbnRcbiAgICovXG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLndyYXBwZXJSZWYgJiYgdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQgJiYgIXRoaXMud3JhcHBlclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrSW5zaWRlKGV2ZW50KSB7XG4gICAgbGV0IHBhdGggPSBldmVudC5uYXRpdmVFdmVudC5wYXRoO1xuICAgIGlmIChwYXRoWzBdID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtldnQuc3RvcFByb3BhZ2F0aW9uKCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLnBhcmVudElkLCB0aGlzLnByb3BzLmZlYXR1cmUudmFsdWUpO319XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiRmVhdHVyZUZpbHRlckl0ZW0iLCJwcm9wcyIsInNjb3BlIiwiZXZ0IiwiZmlsdGVyTGF5ZXJzIiwiZmVhdHVyZSIsImlkZW50aWZpZXIiLCJwYXJlbnRJZCIsInZhbHVlIiwiZmllbGQiLCJjaGVja2VkIiwidXRpbHMiLCJkZWNvZGVIVE1MIiwidHJhbnNsYXRpb24iLCJDb21wb25lbnQiLCJGZWF0dXJlRmlsdGVyTGlzdCIsImZvcm0iLCJjbGFzc05hbWUiLCJmaWx0ZXJzIiwibGVuZ3RoIiwib3BlbiIsIm1hcCIsImluZGV4IiwiaWQiLCJjaGVja2VkSXRlbSIsInJlbW92ZVVtbGF1dHMiLCJuYW1lIiwibGlDbGFzcyIsInNldE9wZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImltZyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCIsImNoZWNrZWRJdGVtcyIsImZpbmQiLCJlbGVtZW50IiwibnVtYmVyU3BhbiIsIm51bWJlciIsIkZlYXR1cmVGaWx0ZXIiLCJiaW5kIiwiZmlsdGVyTGF5ZXJzTXVsdGkiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1bFJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImhhbmRsZUNsaWNrSW5zaWRlIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllck11bHRpIiwiaGlkZUZlYXR1cmUiLCJoaWRlRmVhdHVyZU11bHRpIiwibG9hZEZpbHRlcnMiLCJzdGF0ZSIsImFyckNoZWNrZWQiLCJvcGVuZWRMaXN0IiwiZmVhdHVyZXMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJmaWx0ZXIiLCJzaG93QnV0dG9ucyIsImxpc3REaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwidGFyZ2V0IiwicmVzZXRCdXR0b24iLCJwYXJzZUZsb2F0IiwiZmlsdGVyUmVzZXRCdXR0b24iLCJyZXNldEZpbHRlciIsIlJFU0VUX0ZJTFRFUiIsImZpbHRlckhhbmRsaW5nIiwiZGl2IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJwcm9wZXJ0eSIsImxpc3RJZCIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZGVkIiwic2hvd0ZlYXR1cmUiLCJjaGFuZ2VkRW50cnkiLCJmb3VuZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInB1c2giLCJybUluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInNob3dGZWF0dXJlTXVsdGkiLCJvcGVuSWQiLCJyZXNldEZlYXR1cmUiLCJsYXllciIsImdldFN0eWxlIiwiZ2V0U291cmNlIiwic291cmNlIiwiQ2x1c3RlciIsImZvckVhY2hGZWF0dXJlIiwib2JqQ2hlY2tlZCIsImdldCIsImZlYXR1cmVIb3VycyIsIm9wZW5pbmdfaG91cnMiLCJhZGRyZXNzIiwiY291bnRyeV9jb2RlIiwiZ2V0U3RhdGUiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiZm9yRWFjaCIsInNob3ciLCJrZXkiLCJjaGVja0ZlYXR1cmUiLCJzZXQiLCJyZW1vdmVGZWF0dXJlIiwiZmlsdGVyQWN0aXZlIiwiZmVhdHVyZVByb3BlcnR5IiwiYWRkRmVhdHVyZSIsInVybCIsImFwaSIsImxhbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInBhdGgiLCJuYXRpdmVFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9