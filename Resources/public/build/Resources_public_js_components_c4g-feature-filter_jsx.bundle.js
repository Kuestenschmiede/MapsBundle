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
      return _react["default"].createElement("div", {
        className: "c4g-filter-form-element"
      }, _react["default"].createElement("label", null, _react["default"].createElement("input", {
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
          form = _react["default"].createElement("form", null, this.props.feature.filters.map(function (feature, index) {
            return _react["default"].createElement(_c4gFeatureFilterItem.FeatureFilterItem, {
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
        return _react["default"].createElement("li", {
          className: liClass
        }, _react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);

            evt.stopPropagation();
            evt.preventDefault();
          }
        }, _react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), form);
      } else {
        className = " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var _liClass = "c4g-item-checked";
        _liClass += this.props.checkedItem.identifier === "all" ? "" : " clicked";
        return _react["default"].createElement("li", {
          className: _liClass
        }, _react["default"].createElement("img", {
          src: this.props.feature.image
        }), _react["default"].createElement("strong", {
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
          form = _react["default"].createElement("form", null, this.props.feature.filters.map(function (feature, index) {
            var checked = !!_this.props.checkedItems.find(function (element) {
              return element.identifier === feature.identifier && element.value === feature.value;
            });
            return _react["default"].createElement(_c4gFeatureMulticheckboxItem.FeatureFilterMultiCheckboxItem, {
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
          numberSpan = _react["default"].createElement("span", {
            className: "sum"
          }, " ", number, " ");
        }

        className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var liClass = "c4g-item-checked";
        return _react["default"].createElement("li", {
          className: liClass
        }, _react["default"].createElement("strong", {
          className: className,
          onMouseUp: function onMouseUp(evt) {
            _this.props.setOpen(_this.props.id);

            evt.stopPropagation();
            evt.preventDefault();
          }
        }, _react["default"].createElement("span", null), _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)), numberSpan, form);
      } else {
        className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
        var _liClass = "c4g-item-checked";
        _liClass += this.props.checkedItems.length === 0 ? "" : " clicked";
        return _react["default"].createElement("li", {
          className: _liClass
        }, _react["default"].createElement("img", {
          src: this.props.feature.image
        }), _react["default"].createElement("strong", {
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
    _this.wrapperRef = _react["default"].createRef();
    _this.ulRef = _react["default"].createRef();
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
        resetButton = _react["default"].createElement("button", {
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
            return _react["default"].createElement(_c4gFeatureFilterMulticheckbox.FeatureFilterMultiCheckbox, {
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
            return _react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, _react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-not-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, div), resetButton);
          } else {
            return _react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, _react["default"].createElement("button", {
              className: "c4g-btn-nav-previous",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft -= 100;
              }
            }), _react["default"].createElement("button", {
              className: "c4g-btn-nav-next",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft += 100;
              }
            }), _react["default"].createElement("ul", {
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
            return _react["default"].createElement(_c4gFeatureFilterList.FeatureFilterList, {
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
            return _react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, _react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-not-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, _div), resetButton);
          } else {
            return _react["default"].createElement("div", {
              className: "c4g-feature-filter",
              ref: this.wrapperRef
            }, _react["default"].createElement("button", {
              className: "c4g-btn-nav-previous",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft -= 100;
              }
            }), _react["default"].createElement("button", {
              className: "c4g-btn-nav-next",
              onMouseUp: function onMouseUp(evt) {
                return _this2.ulRef.current.scrollLeft += 100;
              }
            }), _react["default"].createElement("ul", {
              className: "c4g-feature-filter-list c4g-overflowed",
              onMouseUp: function onMouseUp(evt) {
                return _this2.handleClickInside(evt);
              },
              ref: this.ulRef
            }, _div), resetButton);
          }
        }
      }

      return _react["default"].createElement("div", null);
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

      return _react["default"].createElement("div", {
        className: "c4g-filter-form-element"
      }, _react["default"].createElement("label", null, _react["default"].createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4Il0sIm5hbWVzIjpbIkZlYXR1cmVGaWx0ZXJJdGVtIiwicHJvcHMiLCJzY29wZSIsImV2dCIsImZpbHRlckxheWVycyIsImZlYXR1cmUiLCJpZGVudGlmaWVyIiwicGFyZW50SWQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJ1dGlscyIsImRlY29kZUhUTUwiLCJ0cmFuc2xhdGlvbiIsIkNvbXBvbmVudCIsIkZlYXR1cmVGaWx0ZXJMaXN0IiwiZm9ybSIsImNsYXNzTmFtZSIsImZpbHRlcnMiLCJsZW5ndGgiLCJvcGVuIiwibWFwIiwiaW5kZXgiLCJpZCIsImNoZWNrZWRJdGVtIiwicmVtb3ZlVW1sYXV0cyIsIm5hbWUiLCJsaUNsYXNzIiwic2V0T3BlbiIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2UiLCJ1bmRlZmluZWQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCIsImNoZWNrZWRJdGVtcyIsImZpbmQiLCJlbGVtZW50IiwibnVtYmVyU3BhbiIsIm51bWJlciIsIkZlYXR1cmVGaWx0ZXIiLCJiaW5kIiwiZmlsdGVyTGF5ZXJzTXVsdGkiLCJ3cmFwcGVyUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJ1bFJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImhhbmRsZUNsaWNrSW5zaWRlIiwiZmlsdGVyTGF5ZXIiLCJmaWx0ZXJMYXllck11bHRpIiwiaGlkZUZlYXR1cmUiLCJoaWRlRmVhdHVyZU11bHRpIiwibG9hZEZpbHRlcnMiLCJzdGF0ZSIsImFyckNoZWNrZWQiLCJvcGVuZWRMaXN0IiwiZmVhdHVyZXMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJmaWx0ZXIiLCJzaG93QnV0dG9ucyIsImxpc3REaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwidGFyZ2V0IiwicmVzZXRCdXR0b24iLCJwYXJzZUZsb2F0IiwiZmlsdGVyUmVzZXRCdXR0b24iLCJyZXNldEZpbHRlciIsIlJFU0VUX0ZJTFRFUiIsImZpbHRlckhhbmRsaW5nIiwiZGl2IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJwcm9wZXJ0eSIsImxpc3RJZCIsIm5ld1N0YXRlIiwic2V0U3RhdGUiLCJhcnJMYXllcnMiLCJnZXRMYXllcnMiLCJnZXRBcnJheSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImFkZGVkIiwic2hvd0ZlYXR1cmUiLCJjaGFuZ2VkRW50cnkiLCJmb3VuZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInB1c2giLCJybUluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInNob3dGZWF0dXJlTXVsdGkiLCJvcGVuSWQiLCJyZXNldEZlYXR1cmUiLCJsYXllciIsImdldFN0eWxlIiwiZ2V0U291cmNlIiwic291cmNlIiwiQ2x1c3RlciIsImZvckVhY2hGZWF0dXJlIiwib2JqQ2hlY2tlZCIsImdldCIsImZlYXR1cmVIb3VycyIsIm9wZW5pbmdfaG91cnMiLCJhZGRyZXNzIiwiY291bnRyeV9jb2RlIiwiZ2V0U3RhdGUiLCJmb3JFYWNoIiwic2hvdyIsImtleSIsImNoZWNrRmVhdHVyZSIsInNldCIsInJlbW92ZUZlYXR1cmUiLCJmaWx0ZXJBY3RpdmUiLCJmZWF0dXJlUHJvcGVydHkiLCJhZGRGZWF0dXJlIiwidXJsIiwiYXBpIiwibGFuZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25EYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnRhaW5zIiwicGF0aCIsIm5hdGl2ZUV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsaUI7Ozs7O0FBQ1QsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFDTCxVQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUNBLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSwrQ0FDSTtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksZ0JBQVEsRUFBRSxrQkFBQ0MsR0FBRCxFQUFTO0FBQUMsZUFBSSxDQUFDRixLQUFMLENBQVdHLFlBQVgsQ0FBd0JGLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUE1QyxFQUF3REosS0FBSyxDQUFDRCxLQUFOLENBQVlNLFFBQXBFLEVBQThFTCxLQUFLLENBQUNELEtBQU4sQ0FBWUksT0FBWixDQUFvQkcsS0FBbEc7QUFBMEcsU0FGbEk7QUFHSSxlQUFPLEVBQUVOLEtBQUssQ0FBQ0QsS0FBTixDQUFZUSxPQUFaLENBQW9CSCxVQUFwQixLQUFtQ0osS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JDLFVBSHBFO0FBSUksYUFBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkM7QUFK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QUFBO0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSwrQ0FDSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksZUFBTyxFQUFFLEtBQUtBLEtBQUwsQ0FBV1EsT0FGeEI7QUFHSSxnQkFBUSxFQUFFLGtCQUFDTixHQUFELEVBQVM7QUFBQ0EsYUFBRyxDQUFDeUIsZUFBSjtBQUFzQixTQUg5QztBQUlJLGVBQU8sRUFBRSxpQkFBQ3pCLEdBQUQsRUFBUztBQUFDLGVBQUksQ0FBQ0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSSxPQUFYLENBQW1CQyxVQUEzQyxFQUF1RCxLQUFJLENBQUNMLEtBQUwsQ0FBV00sUUFBbEUsRUFBNEUsS0FBSSxDQUFDTixLQUFMLENBQVdJLE9BQVgsQ0FBbUJHLEtBQS9GO0FBQXVHLFNBSjlIO0FBS0ksYUFBSyxFQUFFLEtBQUtQLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkM7QUFMOUIsUUFESixFQVFLSSxvQkFBTUMsVUFBTixDQUFpQixLQUFLVixLQUFMLENBQVdJLE9BQVgsQ0FBbUJPLFdBQXBDLENBUkwsQ0FESixDQURKO0FBY0g7OztFQW5CK0NDLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZmVhdHVyZS1maWx0ZXJfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVySXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnMoc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCBzY29wZS5wcm9wcy5wYXJlbnRJZCwgc2NvcGUucHJvcHMuZmVhdHVyZS52YWx1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Njb3BlLnByb3BzLmNoZWNrZWQuaWRlbnRpZmllciA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIlxuaW1wb3J0IHtGZWF0dXJlRmlsdGVySXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gXCJcIiA6IFwiIGNsaWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0vPlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgOiBcImFsbFwiLCB0aGlzLnByb3BzLmlkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS52YWx1ZSA6dW5kZWZpbmVkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZCA9ICEhKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gZmVhdHVyZS5pZGVudGlmaWVyICYmIGVsZW1lbnQudmFsdWUgPT09IGZlYXR1cmUudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17Y2hlY2tlZH0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3BhbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtc1swXS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoIC0xIDogdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG51bWJlclNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e1wic3VtXCJ9PiB7bnVtYmVyfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSAgXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge251bWJlclNwYW59XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIGNsaWNrZWRcIlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLmlkLCB0cnVlKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlckxpc3R9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLW11bHRpY2hlY2tib3guanN4XCI7XG5pbXBvcnQge0ZpbGwsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtDbHVzdGVyfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQgb3BlbmluZ19ob3VycyBmcm9tIFwib3BlbmluZ19ob3Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlckxheWVycyA9IHRoaXMuZmlsdGVyTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnNNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldE9wZW4gPSB0aGlzLnNldE9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnVsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllciA9IHRoaXMuZmlsdGVyTGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlID0gdGhpcy5oaWRlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmVNdWx0aSA9IHRoaXMuaGlkZUZlYXR1cmVNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyczogW10sXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYXJyQ2hlY2tlZDogW10sXG4gICAgICBvcGVuZWRMaXN0OiAtMVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmZpbHRlciA9IHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzO1xuICAgIGxldCBzaG93QnV0dG9ucyA9IGZhbHNlO1xuICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZmVhdHVyZS1maWx0ZXItbGlzdFwiKTtcbiAgICBpZiAobGlzdERpdikge1xuICAgICAgc2hvd0J1dHRvbnMgPSAhKGxpc3REaXYuc2Nyb2xsV2lkdGggPD0gbGlzdERpdi5jbGllbnRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dCdXR0b25zID0gc2NvcGUucHJvcHMudGFyZ2V0ICYmICghKHNjb3BlLnByb3BzLnRhcmdldC5zY3JvbGxXaWR0aCA8PSBzY29wZS5wcm9wcy50YXJnZXQuY2xpZW50V2lkdGgpKTtcbiAgICB9XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gbnVsbDtcbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlclJlc2V0QnV0dG9uKSkge1xuICAgICAgcmVzZXRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItcmVzZXRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnJlc2V0RmlsdGVyKCl9Pnt0aGlzLmxhbmdDb25zdGFudHMuUkVTRVRfRklMVEVSfTwvYnV0dG9uPlxuICAgIH1cbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkaXYgPSBmaWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY2hlY2tlZEl0ZW1zID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF0gfHwgW107XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9IGZpbHRlckxheWVycz17dGhpcy5maWx0ZXJMYXllcnNNdWx0aX0gaWQ9e2luZGV4fSBrZXk9e2luZGV4fS8+XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPTEwMH0vPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkaXYgPSBmaWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY2hlY2tlZEl0ZW0gPSBzY29wZS5zdGF0ZS5hcnJDaGVja2VkW2luZGV4XTtcbiAgICAgICAgICBsZXQgb3BlbmVkTGlzdCA9IHNjb3BlLnN0YXRlLm9wZW5lZExpc3QgPT09IGluZGV4O1xuICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckxpc3QgZmVhdHVyZT17ZmVhdHVyZX0gb3Blbj17b3BlbmVkTGlzdH0gc2V0T3Blbj17dGhpcy5zZXRPcGVufSBjaGVja2VkSXRlbT17Y2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5maWx0ZXJMYXllcnN9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFzaG93QnV0dG9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1ub3Qtb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LXByZXZpb3VzXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0xMDB9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtbmV4dFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC4gc2Nyb2xsTGVmdCArPTEwMH0vPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKDxkaXYvPik7XG4gIH1cblxuICBmaWx0ZXJMYXllcnMgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSB7XG4gICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCAoKSA9PiB7XG4gICAgICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZmlsdGVyTGF5ZXJzTXVsdGkgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIGxldCBjaGFuZ2VkRW50cnkgPSBuZXdTdGF0ZVtsaXN0SWRdO1xuXG4gICAgbGV0IGZvdW5kID0gY2hhbmdlZEVudHJ5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gcHJvcGVydHkgJiYgZWxlbWVudC52YWx1ZSA9PT0gdmFsdWUpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmlsdGVyc1tsaXN0SWRdLmZpbHRlcnMpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGFuZ2VkRW50cnkucHVzaCh7XG4gICAgICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBbXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcm1JbmRleCA9IGNoYW5nZWRFbnRyeS5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgaWYgKHJtSW5kZXggPiAtMSkge1xuICAgICAgICAgIGNoYW5nZWRFbnRyeS5zcGxpY2Uocm1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0gY2hhbmdlZEVudHJ5O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgKCkgPT4ge1xuICAgICAgbGV0IGFyckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZU11bHRpKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRPcGVuIChvcGVuSWQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWRMaXN0ID09PSBvcGVuSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogb3BlbklkfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGaWx0ZXIgKCkge1xuICAgIGxldCBmaWx0ZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBmaWx0ZXIucHVzaChbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IGZpbHRlcn0sICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMucmVzZXRGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXIgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJMYXllck11bHRpIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICBpZiAob2JqQ2hlY2tlZC52YWx1ZSA9PT0gXCJvcGVuaW5nX2hvdXJzXCIgJiYgZmVhdHVyZS5nZXQoJ29wZW5pbmdfaG91cnMnKSkge1xuICAgICAgbGV0IGZlYXR1cmVIb3VycyA9IG5ldyBvcGVuaW5nX2hvdXJzKGZlYXR1cmUuZ2V0KCdvcGVuaW5nX2hvdXJzJyksIHthZGRyZXNzOiB7Y291bnRyeV9jb2RlOiBcImRlXCJ9fSk7XG4gICAgICByZXR1cm4gZmVhdHVyZUhvdXJzLmdldFN0YXRlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCEocHJvcGVydHkgPT09IFwiYWxsXCIgfHwgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSAmJiAhb2JqQ2hlY2tlZC52YWx1ZSkgfHwgKChvYmpDaGVja2VkLnZhbHVlID09IGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkgJiYgb2JqQ2hlY2tlZC52YWx1ZSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZU11bHRpIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG5cbiAgfVxuXG4gIGhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkge1xuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdub0ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5jaGVja0ZlYXR1cmUoZmVhdHVyZSwgdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJyQ2hlY2tlZCl7XG4gICAgICAgICAgICBpZiAoYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBsZXQgb2JqQ2hlY2tlZCA9IGFyckNoZWNrZWRbaV07XG4gICAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgaWYgKChvYmpDaGVja2VkLnZhbHVlICYmIG9iakNoZWNrZWQudmFsdWUgPT09IGZlYXR1cmVQcm9wZXJ0eSkgfHwgIW9iakNoZWNrZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93ICYmIGZpbHRlckFjdGl2ZSl7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzaG93RmVhdHVyZSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNob3cpIHtcbiAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlc2V0RmVhdHVyZSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHNob3dGZWF0dXJlTXVsdGkgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBsZXQgZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBhcnJDaGVja2VkID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyQ2hlY2tlZCl7XG4gICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgb2JqQ2hlY2tlZCA9IGFyckNoZWNrZWRbaV07XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgIGxldCBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3cgfHwgIWZpbHRlckFjdGl2ZSkge1xuICAgICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbG9hZEZpbHRlcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZmlsdGVyICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuaWQgKyBcIi9cIiArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmc7XG4gICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGpzb25EYXRhKSB7XG4gICAgICAgIGxldCBhcnJDaGVja2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighIXBhcnNlRmxvYXQoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goe1xuICAgICAgICAgICAgICBpZGVudGlmaWVyOiBcImFsbFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUuc2V0U3RhdGUoe2ZpbHRlcnM6IGpzb25EYXRhLCBhcnJDaGVja2VkOiBhcnJDaGVja2VkfSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIEZpbHRlckZlYXR1cmVMaXN0IGlmIGNsaWNrZWQgb24gb3V0c2lkZSBvZiBlbGVtZW50XG4gICAqL1xuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmIHRoaXMud3JhcHBlclJlZi5jdXJyZW50ICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGlja0luc2lkZShldmVudCkge1xuICAgIGxldCBwYXRoID0gZXZlbnQubmF0aXZlRXZlbnQucGF0aDtcbiAgICBpZiAocGF0aFswXSA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7ZXZ0LnN0b3BQcm9wYWdhdGlvbigpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllciwgdGhpcy5wcm9wcy5wYXJlbnRJZCwgdGhpcy5wcm9wcy5mZWF0dXJlLnZhbHVlKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==