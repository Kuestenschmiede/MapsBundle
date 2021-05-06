(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-feature-filter_jsx"],{

/***/ "./Resources/public/js/components/c4g-feature-filter-item.jsx":
/*!********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter-item.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

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
          _this.props.filterLayers(scope.props.feature.identifier, scope.props.parentId, scope.props.feature.value);
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

/***/ "./Resources/public/js/components/c4g-feature-filter-list.jsx":
/*!********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter-list.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureFilterItem = __webpack_require__(/*! ./c4g-feature-filter-item.jsx */ "./Resources/public/js/components/c4g-feature-filter-item.jsx");

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
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: _liClass
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: this.props.feature.image
        }), /*#__PURE__*/_react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.filterLayers(_this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].identifier : "all", _this.props.id, _this.props.feature.filters[1].identifier !== _this.props.checkedItem.identifier ? _this.props.feature.filters[1].value : undefined);

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

/***/ "./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx":
/*!*****************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureMulticheckboxItem = __webpack_require__(/*! ./c4g-feature-multicheckbox-item.jsx */ "./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");

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
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: _liClass
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: this.props.feature.image
        }), /*#__PURE__*/_react["default"].createElement("strong", {
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

/***/ "./Resources/public/js/components/c4g-feature-filter.jsx":
/*!***************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gFeatureFilterList = __webpack_require__(/*! ./c4g-feature-filter-list.jsx */ "./Resources/public/js/components/c4g-feature-filter-list.jsx");

var _c4gFeatureFilterMulticheckbox = __webpack_require__(/*! ./c4g-feature-filter-multicheckbox.jsx */ "./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

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

      var newState = this.state.arrChecked;
      newState[listId] = {
        identifier: property,
        value: value
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

      if (objChecked.value === "opening_hours" && feature.get('opening_hours')) {
        var featureHours = new _opening_hours["default"](feature.get('opening_hours'), {
          address: {
            country_code: "de"
          }
        });
        return featureHours.getState();
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

exports.default = FeatureFilter;

/***/ }),

/***/ "./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx":
/*!***************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4Il0sIm5hbWVzIjpbIkZlYXR1cmVGaWx0ZXJJdGVtIiwicHJvcHMiLCJzY29wZSIsImV2dCIsImZpbHRlckxheWVycyIsImZlYXR1cmUiLCJpZGVudGlmaWVyIiwicGFyZW50SWQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJ1dGlscyIsImRlY29kZUhUTUwiLCJ0cmFuc2xhdGlvbiIsIkNvbXBvbmVudCIsIkZlYXR1cmVGaWx0ZXJMaXN0IiwiZm9ybSIsImNsYXNzTmFtZSIsImZpbHRlcnMiLCJsZW5ndGgiLCJvcGVuIiwibWFwIiwiaW5kZXgiLCJpZCIsImNoZWNrZWRJdGVtIiwicmVtb3ZlVW1sYXV0cyIsIm5hbWUiLCJsaUNsYXNzIiwic2V0T3BlbiIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2UiLCJ1bmRlZmluZWQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCIsImNoZWNrZWRJdGVtcyIsImZpbmQiLCJlbGVtZW50IiwibnVtYmVyU3BhbiIsIm51bWJlciIsIkZlYXR1cmVGaWx0ZXIiLCJiaW5kIiwiZmlsdGVyTGF5ZXJzTXVsdGkiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1bFJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImhhbmRsZUNsaWNrSW5zaWRlIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllck11bHRpIiwiaGlkZUZlYXR1cmUiLCJoaWRlRmVhdHVyZU11bHRpIiwibG9hZEZpbHRlcnMiLCJzdGF0ZSIsImFyckNoZWNrZWQiLCJvcGVuZWRMaXN0IiwiZmVhdHVyZXMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJmaWx0ZXIiLCJzaG93QnV0dG9ucyIsImxpc3REaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwidGFyZ2V0IiwicmVzZXRCdXR0b24iLCJwYXJzZUZsb2F0IiwiZmlsdGVyUmVzZXRCdXR0b24iLCJyZXNldEZpbHRlciIsIlJFU0VUX0ZJTFRFUiIsImZpbHRlckhhbmRsaW5nIiwiZGl2IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJwcm9wZXJ0eSIsImxpc3RJZCIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZGVkIiwic2hvd0ZlYXR1cmUiLCJjaGFuZ2VkRW50cnkiLCJmb3VuZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInB1c2giLCJybUluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInNob3dGZWF0dXJlTXVsdGkiLCJvcGVuSWQiLCJyZXNldEZlYXR1cmUiLCJsYXllciIsImdldFN0eWxlIiwiZ2V0U291cmNlIiwic291cmNlIiwiQ2x1c3RlciIsImZvckVhY2hGZWF0dXJlIiwib2JqQ2hlY2tlZCIsImdldCIsImZlYXR1cmVIb3VycyIsIm9wZW5pbmdfaG91cnMiLCJhZGRyZXNzIiwiY291bnRyeV9jb2RlIiwiZ2V0U3RhdGUiLCJmb3JFYWNoIiwic2hvdyIsImtleSIsImNoZWNrRmVhdHVyZSIsInNldCIsInJlbW92ZUZlYXR1cmUiLCJmaWx0ZXJBY3RpdmUiLCJmZWF0dXJlUHJvcGVydHkiLCJhZGRGZWF0dXJlIiwidXJsIiwiYXBpIiwibGFuZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25EYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnRhaW5zIiwicGF0aCIsIm5hdGl2ZUV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsaUI7Ozs7O0FBQ1QsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFDTCxVQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUNBLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLDREQUNJO0FBQ0ksWUFBSSxFQUFDLE9BRFQ7QUFFSSxnQkFBUSxFQUFFLGtCQUFDQyxHQUFELEVBQVM7QUFBQyxlQUFJLENBQUNGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QkYsS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JDLFVBQTVDLEVBQXdESixLQUFLLENBQUNELEtBQU4sQ0FBWU0sUUFBcEUsRUFBOEVMLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CRyxLQUFsRztBQUEwRyxTQUZsSTtBQUdJLGVBQU8sRUFBRU4sS0FBSyxDQUFDRCxLQUFOLENBQVlRLE9BQVosQ0FBb0JILFVBQXBCLEtBQW1DSixLQUFLLENBQUNELEtBQU4sQ0FBWUksT0FBWixDQUFvQkMsVUFIcEU7QUFJSSxhQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXSSxPQUFYLENBQW1CQztB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Q1QsMENBQVl2SSxLQUFaLEVBQW1CO0FBQUE7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7OztXQUNELGtCQUFTO0FBQUE7O0FBQ0wsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksNERBQ0k7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGVBQU8sRUFBRSxLQUFLQSxLQUFMLENBQVdRLE9BRnhCO0FBR0ksZ0JBQVEsRUFBRSxrQkFBQ04sR0FBRCxFQUFTO0FBQUNBLGFBQUcsQ0FBQ3lCLGVBQUo7QUFBc0IsU0FIOUM7QUFJSSxlQUFPLEVBQUUsaUJBQUN6QixHQUFELEVBQVM7QUFBQyxlQUFJLENBQUNGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QixLQUFJLENBQUNILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkMsVUFBM0MsRUFBdUQsS0FBSSxDQUFDTCxLQUFMLENBQVdNLFFBQWxFLEVBQTRFLEtBQUksQ0FBQ04sS0FBTCxDQUFXSSxPQUFYLENBQW1CRyxLQUEvRjtBQUF1RyxTQUo5SDtBQUtJLGFBQUssRUFBRSxLQUFLUCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDO0FBTDlCLFFBREosRUFRS0ksb0JBQU1DLFVBQU4sQ0FBaUIsS0FBS1YsS0FBTCxDQUFXSSxPQUFYLENBQW1CTyxXQUFwQyxDQVJMLENBREosQ0FESjtBQWNIOzs7RUFuQitDQyxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLWZlYXR1cmUtZmlsdGVyX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1maWx0ZXItZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHNjb3BlLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllciwgc2NvcGUucHJvcHMucGFyZW50SWQsIHNjb3BlLnByb3BzLmZlYXR1cmUudmFsdWUpO319XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzY29wZS5wcm9wcy5jaGVja2VkLmlkZW50aWZpZXIgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCJcbmltcG9ydCB7RmVhdHVyZUZpbHRlckl0ZW19IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctb3BlblwiO1xuICAgICAgICAgICAgICAgIGZvcm0gPVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVySXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkSXRlbX0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gXCJcIiA6IFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5zZXRPcGVuKHRoaXMucHJvcHMuaWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319PjxzcGFuLz57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IFwiXCIgOiBcIiBjbGlja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyIDogXCJhbGxcIiwgdGhpcy5wcm9wcy5pZCwgdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0udmFsdWUgOnVuZGVmaW5lZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT4pO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIlxuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW19IGZyb20gXCIuL2M0Zy1mZWF0dXJlLW11bHRpY2hlY2tib3gtaXRlbS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZm9ybSA9IG51bGw7XG4gICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctb3BlblwiO1xuICAgICAgICAgICAgICAgIGZvcm0gPVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrZWQgPSAhISh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkZW50aWZpZXIgPT09IGZlYXR1cmUuaWRlbnRpZmllciAmJiBlbGVtZW50LnZhbHVlID09PSBmZWF0dXJlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcGFyZW50SWQ9e3RoaXMucHJvcHMuaWR9IGNoZWNrZWQ9e2NoZWNrZWR9IGZpbHRlckxheWVycz17dGhpcy5wcm9wcy5maWx0ZXJMYXllcnN9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1jbG9zZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG51bWJlclNwYW4gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXNbMF0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCAtMSA6IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBudW1iZXJTcGFuID0gPHNwYW4gY2xhc3NOYW1lPXtcInN1bVwifT4ge251bWJlcn0gPC9zcGFuPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gIFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5zZXRPcGVuKHRoaXMucHJvcHMuaWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319PjxzcGFuLz57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIHtudW1iZXJTcGFufVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSAgXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICBsaUNsYXNzICs9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiBjbGlja2VkXCJcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmUuaW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciwgdGhpcy5wcm9wcy5pZCwgdHJ1ZSk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJMaXN0fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbGlzdC5qc3hcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3h9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeFwiO1xuaW1wb3J0IHtGaWxsLCBTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IG9wZW5pbmdfaG91cnMgZnJvbSBcIm9wZW5pbmdfaG91cnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnMgPSB0aGlzLmZpbHRlckxheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyc011bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRPcGVuID0gdGhpcy5zZXRPcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cmFwcGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy51bFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlID0gdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXIgPSB0aGlzLmZpbHRlckxheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllck11bHRpID0gdGhpcy5maWx0ZXJMYXllck11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZSA9IHRoaXMuaGlkZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlTXVsdGkgPSB0aGlzLmhpZGVGZWF0dXJlTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFyckNoZWNrZWQ6IFtdLFxuICAgICAgb3BlbmVkTGlzdDogLTFcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5maWx0ZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuc3RhdGUuZmlsdGVycztcbiAgICBsZXQgc2hvd0J1dHRvbnMgPSBmYWxzZTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3RcIik7XG4gICAgaWYgKGxpc3REaXYpIHtcbiAgICAgIHNob3dCdXR0b25zID0gIShsaXN0RGl2LnNjcm9sbFdpZHRoIDw9IGxpc3REaXYuY2xpZW50V2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93QnV0dG9ucyA9IHNjb3BlLnByb3BzLnRhcmdldCAmJiAoIShzY29wZS5wcm9wcy50YXJnZXQuc2Nyb2xsV2lkdGggPD0gc2NvcGUucHJvcHMudGFyZ2V0LmNsaWVudFdpZHRoKSk7XG4gICAgfVxuICAgIGxldCByZXNldEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJSZXNldEJ1dHRvbikpIHtcbiAgICAgIHJlc2V0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLXJlc2V0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5yZXNldEZpbHRlcigpfT57dGhpcy5sYW5nQ29uc3RhbnRzLlJFU0VUX0ZJTFRFUn08L2J1dHRvbj5cbiAgICB9XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtcyA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdIHx8IFtdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzTXVsdGl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJMaXN0IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW09e2NoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuIHNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2Lz4pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXJzIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0ge1xuICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgKCkgPT4ge1xuICAgICAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGZpbHRlckxheWVyc011bHRpIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBsZXQgY2hhbmdlZEVudHJ5ID0gbmV3U3RhdGVbbGlzdElkXTtcblxuICAgIGxldCBmb3VuZCA9IGNoYW5nZWRFbnRyeS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkZW50aWZpZXIgPT09IHByb3BlcnR5ICYmIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZpbHRlcnNbbGlzdElkXS5maWx0ZXJzKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5LnB1c2goe1xuICAgICAgICAgIGlkZW50aWZpZXI6IHByb3BlcnR5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gW107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJtSW5kZXggPSBjaGFuZ2VkRW50cnkuaW5kZXhPZihmb3VuZCk7XG4gICAgICAgIGlmIChybUluZGV4ID4gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkRW50cnkuc3BsaWNlKHJtSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U3RhdGVbbGlzdElkXSA9IGNoYW5nZWRFbnRyeTtcbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBuZXdTdGF0ZX0sICgpID0+IHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMuc2hvd0ZlYXR1cmVNdWx0aSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0T3BlbiAob3BlbklkKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkTGlzdCA9PT0gb3BlbklkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IG9wZW5JZH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyICgpIHtcbiAgICBsZXQgZmlsdGVyID0gW107XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgZmlsdGVyLnB1c2goW10pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBmaWx0ZXJ9LCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnJlc2V0RmVhdHVyZSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckxheWVyIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxheWVyLmdldFN0eWxlICYmIHR5cGVvZiBsYXllci5nZXRTb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHNvdXJjZSA9IGxheWVyLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyLmdldFNvdXJjZSgpLmdldFNvdXJjZSgpIDogbGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTGF5ZXJNdWx0aSAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxheWVyLmdldFN0eWxlICYmIHR5cGVvZiBsYXllci5nZXRTb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHNvdXJjZSA9IGxheWVyLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyLmdldFNvdXJjZSgpLmdldFNvdXJjZSgpIDogbGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmUgKGZlYXR1cmUsIG9iakNoZWNrZWQpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgaWYgKG9iakNoZWNrZWQudmFsdWUgPT09IFwib3BlbmluZ19ob3Vyc1wiICYmIGZlYXR1cmUuZ2V0KCdvcGVuaW5nX2hvdXJzJykpIHtcbiAgICAgIGxldCBmZWF0dXJlSG91cnMgPSBuZXcgb3BlbmluZ19ob3VycyhmZWF0dXJlLmdldCgnb3BlbmluZ19ob3VycycpLCB7YWRkcmVzczoge2NvdW50cnlfY29kZTogXCJkZVwifX0pO1xuICAgICAgcmV0dXJuIGZlYXR1cmVIb3Vycy5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghKHByb3BlcnR5ID09PSBcImFsbFwiIHx8IChmZWF0dXJlLmdldChwcm9wZXJ0eSkgJiYgIW9iakNoZWNrZWQudmFsdWUpIHx8ICgob2JqQ2hlY2tlZC52YWx1ZSA9PSBmZWF0dXJlLmdldChwcm9wZXJ0eSkpICYmIG9iakNoZWNrZWQudmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuXG4gIH1cblxuICBoaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdyAmJiBmaWx0ZXJBY3RpdmUpe1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvd0ZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSB0cnVlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93KSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXNldEZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzaG93RmVhdHVyZU11bHRpIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93IHx8ICFmaWx0ZXJBY3RpdmUpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGxvYWRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmZpbHRlciArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmlkICsgXCIvXCIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nO1xuICAgIGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoISFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaChbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKHtcbiAgICAgICAgICAgICAgaWRlbnRpZmllcjogXCJhbGxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtmaWx0ZXJzOiBqc29uRGF0YSwgYXJyQ2hlY2tlZDogYXJyQ2hlY2tlZH0pXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBGaWx0ZXJGZWF0dXJlTGlzdCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMud3JhcHBlclJlZiAmJiB0aGlzLndyYXBwZXJSZWYuY3VycmVudCAmJiAhdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tJbnNpZGUoZXZlbnQpIHtcbiAgICBsZXQgcGF0aCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnBhdGg7XG4gICAgaWYgKHBhdGhbMF0gPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1maWx0ZXItZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge2V2dC5zdG9wUHJvcGFnYXRpb24oKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHRoaXMucHJvcHMucGFyZW50SWQsIHRoaXMucHJvcHMuZmVhdHVyZS52YWx1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=