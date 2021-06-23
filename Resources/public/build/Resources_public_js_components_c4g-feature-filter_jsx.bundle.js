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
          src: this.props.feature.image,
          title: this.props.feature.name,
          width: this.props.feature.width,
          height: this.props.feature.height
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
          src: this.props.feature.image,
          title: this.props.feature.name,
          width: this.props.feature.width,
          height: this.props.feature.height
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4Il0sIm5hbWVzIjpbIkZlYXR1cmVGaWx0ZXJJdGVtIiwicHJvcHMiLCJzY29wZSIsImV2dCIsImZpbHRlckxheWVycyIsImZlYXR1cmUiLCJpZGVudGlmaWVyIiwicGFyZW50SWQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJ1dGlscyIsImRlY29kZUhUTUwiLCJ0cmFuc2xhdGlvbiIsIkNvbXBvbmVudCIsIkZlYXR1cmVGaWx0ZXJMaXN0IiwiZm9ybSIsImNsYXNzTmFtZSIsImZpbHRlcnMiLCJsZW5ndGgiLCJvcGVuIiwibWFwIiwiaW5kZXgiLCJpZCIsImNoZWNrZWRJdGVtIiwicmVtb3ZlVW1sYXV0cyIsIm5hbWUiLCJsaUNsYXNzIiwic2V0T3BlbiIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInVuZGVmaW5lZCIsIkZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IiwiY2hlY2tlZEl0ZW1zIiwiZmluZCIsImVsZW1lbnQiLCJudW1iZXJTcGFuIiwibnVtYmVyIiwiRmVhdHVyZUZpbHRlciIsImJpbmQiLCJmaWx0ZXJMYXllcnNNdWx0aSIsIndyYXBwZXJSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInVsUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiaGFuZGxlQ2xpY2tJbnNpZGUiLCJmaWx0ZXJMYXllciIsImZpbHRlckxheWVyTXVsdGkiLCJoaWRlRmVhdHVyZSIsImhpZGVGZWF0dXJlTXVsdGkiLCJsb2FkRmlsdGVycyIsInN0YXRlIiwiYXJyQ2hlY2tlZCIsIm9wZW5lZExpc3QiLCJmZWF0dXJlcyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImZpbHRlciIsInNob3dCdXR0b25zIiwibGlzdERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJ0YXJnZXQiLCJyZXNldEJ1dHRvbiIsInBhcnNlRmxvYXQiLCJmaWx0ZXJSZXNldEJ1dHRvbiIsInJlc2V0RmlsdGVyIiwiUkVTRVRfRklMVEVSIiwiZmlsdGVySGFuZGxpbmciLCJkaXYiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsInByb3BlcnR5IiwibGlzdElkIiwibmV3U3RhdGUiLCJzZXRTdGF0ZSIsImFyckxheWVycyIsImdldExheWVycyIsImdldEFycmF5IiwiaSIsImhhc093blByb3BlcnR5IiwiYWRkZWQiLCJzaG93RmVhdHVyZSIsImNoYW5nZWRFbnRyeSIsImZvdW5kIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicHVzaCIsInJtSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwic2hvd0ZlYXR1cmVNdWx0aSIsIm9wZW5JZCIsInJlc2V0RmVhdHVyZSIsImxheWVyIiwiZ2V0U3R5bGUiLCJnZXRTb3VyY2UiLCJzb3VyY2UiLCJDbHVzdGVyIiwiZm9yRWFjaEZlYXR1cmUiLCJvYmpDaGVja2VkIiwiZ2V0IiwiZmVhdHVyZUhvdXJzIiwib3BlbmluZ19ob3VycyIsImFkZHJlc3MiLCJjb3VudHJ5X2NvZGUiLCJnZXRTdGF0ZSIsImZvckVhY2giLCJzaG93Iiwia2V5IiwiY2hlY2tGZWF0dXJlIiwic2V0IiwicmVtb3ZlRmVhdHVyZSIsImZpbHRlckFjdGl2ZSIsImZlYXR1cmVQcm9wZXJ0eSIsImFkZEZlYXR1cmUiLCJ1cmwiLCJhcGkiLCJsYW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29udGFpbnMiLCJwYXRoIiwibmF0aXZlRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQSxpQjs7Ozs7QUFDVCw2QkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNMLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksNERBQ0k7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLGdCQUFRLEVBQUUsa0JBQUNDLEdBQUQsRUFBUztBQUFDLGVBQUksQ0FBQ0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCRixLQUFLLENBQUNELEtBQU4sQ0FBWUksT0FBWixDQUFvQkMsVUFBNUMsRUFBd0RKLEtBQUssQ0FBQ0QsS0FBTixDQUFZTSxRQUFwRSxFQUE4RUwsS0FBSyxDQUFDRCxLQUFOLENBQVlJLE9BQVosQ0FBb0JHLEtBQWxHO0FBQTBHLFNBRmxJO0FBR0ksZUFBTyxFQUFFTixLQUFLLENBQUNELEtBQU4sQ0FBWVEsT0FBWixDQUFvQkgsVUFBcEIsS0FBbUNKLEtBQUssQ0FBQ0QsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUhwRTtBQUlJLGFBQUssRUFBRSxLQUFLTCxLQUFMLENB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Q0FSTCxDQURKLENBREo7QUFjSDs7O0VBbkIrQ0MsZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1mZWF0dXJlLWZpbHRlcl9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyhzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHNjb3BlLnByb3BzLnBhcmVudElkLCBzY29wZS5wcm9wcy5mZWF0dXJlLnZhbHVlKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2NvcGUucHJvcHMuY2hlY2tlZC5pZGVudGlmaWVyID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItaXRlbS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZm9ybSA9IG51bGw7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcGFyZW50SWQ9e3RoaXMucHJvcHMuaWR9IGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5wcm9wcy5maWx0ZXJMYXllcnN9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1jbG9zZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IFwiXCIgOiBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgbGlDbGFzcyArPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCIgY2xpY2tlZFwiO1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfSB0aXRsZT17dGhpcy5wcm9wcy5mZWF0dXJlLm5hbWV9IHdpZHRoPXt0aGlzLnByb3BzLmZlYXR1cmUud2lkdGh9IGhlaWdodD17dGhpcy5wcm9wcy5mZWF0dXJlLmhlaWdodH0vPlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgOiBcImFsbFwiLCB0aGlzLnByb3BzLmlkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS52YWx1ZSA6dW5kZWZpbmVkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZCA9ICEhKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gZmVhdHVyZS5pZGVudGlmaWVyICYmIGVsZW1lbnQudmFsdWUgPT09IGZlYXR1cmUudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17Y2hlY2tlZH0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3BhbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtc1swXS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoIC0xIDogdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG51bWJlclNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e1wic3VtXCJ9PiB7bnVtYmVyfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSAgXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge251bWJlclNwYW59XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIGNsaWNrZWRcIlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0gdGl0bGU9e3RoaXMucHJvcHMuZmVhdHVyZS5uYW1lfSB3aWR0aD17dGhpcy5wcm9wcy5mZWF0dXJlLndpZHRofSBoZWlnaHQ9e3RoaXMucHJvcHMuZmVhdHVyZS5oZWlnaHR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciwgdGhpcy5wcm9wcy5pZCwgdHJ1ZSk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJMaXN0fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbGlzdC5qc3hcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3h9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeFwiO1xuaW1wb3J0IHtGaWxsLCBTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IG9wZW5pbmdfaG91cnMgZnJvbSBcIm9wZW5pbmdfaG91cnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnMgPSB0aGlzLmZpbHRlckxheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyc011bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRPcGVuID0gdGhpcy5zZXRPcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cmFwcGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy51bFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlID0gdGhpcy5oYW5kbGVDbGlja0luc2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXIgPSB0aGlzLmZpbHRlckxheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllck11bHRpID0gdGhpcy5maWx0ZXJMYXllck11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZSA9IHRoaXMuaGlkZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlTXVsdGkgPSB0aGlzLmhpZGVGZWF0dXJlTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGFyckNoZWNrZWQ6IFtdLFxuICAgICAgb3BlbmVkTGlzdDogLTFcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5maWx0ZXIgPSB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmlsdGVycyA9IHRoaXMuc3RhdGUuZmlsdGVycztcbiAgICBsZXQgc2hvd0J1dHRvbnMgPSBmYWxzZTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3RcIik7XG4gICAgaWYgKGxpc3REaXYpIHtcbiAgICAgIHNob3dCdXR0b25zID0gIShsaXN0RGl2LnNjcm9sbFdpZHRoIDw9IGxpc3REaXYuY2xpZW50V2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93QnV0dG9ucyA9IHNjb3BlLnByb3BzLnRhcmdldCAmJiAoIShzY29wZS5wcm9wcy50YXJnZXQuc2Nyb2xsV2lkdGggPD0gc2NvcGUucHJvcHMudGFyZ2V0LmNsaWVudFdpZHRoKSk7XG4gICAgfVxuICAgIGxldCByZXNldEJ1dHRvbiA9IG51bGw7XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJSZXNldEJ1dHRvbikpIHtcbiAgICAgIHJlc2V0QnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLXJlc2V0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5yZXNldEZpbHRlcigpfT57dGhpcy5sYW5nQ29uc3RhbnRzLlJFU0VUX0ZJTFRFUn08L2J1dHRvbj5cbiAgICB9XG4gICAgaWYgKCEhcGFyc2VGbG9hdCh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtcyA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdIHx8IFtdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtcz17Y2hlY2tlZEl0ZW1zfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzTXVsdGl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgZGl2ID0gZmlsdGVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF07XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJMaXN0IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW09e2NoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMuZmlsdGVyTGF5ZXJzfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuIHNjcm9sbExlZnQgKz0xMDB9Lz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICg8ZGl2Lz4pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXJzIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0ge1xuICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgKCkgPT4ge1xuICAgICAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGZpbHRlckxheWVyc011bHRpIChwcm9wZXJ0eSwgbGlzdElkLCB2YWx1ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZDtcbiAgICBsZXQgY2hhbmdlZEVudHJ5ID0gbmV3U3RhdGVbbGlzdElkXTtcblxuICAgIGxldCBmb3VuZCA9IGNoYW5nZWRFbnRyeS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkZW50aWZpZXIgPT09IHByb3BlcnR5ICYmIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmZpbHRlcnNbbGlzdElkXS5maWx0ZXJzKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5LnB1c2goe1xuICAgICAgICAgIGlkZW50aWZpZXI6IHByb3BlcnR5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAocHJvcGVydHkgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgY2hhbmdlZEVudHJ5ID0gW107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJtSW5kZXggPSBjaGFuZ2VkRW50cnkuaW5kZXhPZihmb3VuZCk7XG4gICAgICAgIGlmIChybUluZGV4ID4gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkRW50cnkuc3BsaWNlKHJtSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3U3RhdGVbbGlzdElkXSA9IGNoYW5nZWRFbnRyeTtcbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBuZXdTdGF0ZX0sICgpID0+IHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMuc2hvd0ZlYXR1cmVNdWx0aSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0T3BlbiAob3BlbklkKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkTGlzdCA9PT0gb3BlbklkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IG9wZW5JZH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyICgpIHtcbiAgICBsZXQgZmlsdGVyID0gW107XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgZmlsdGVyLnB1c2goW10pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBmaWx0ZXJ9LCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnJlc2V0RmVhdHVyZSh0aGlzLmZlYXR1cmVzW2ldLCBpKTtcbiAgICAgICAgICBpZiAoYWRkZWQpIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckxheWVyIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXIoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxheWVyLmdldFN0eWxlICYmIHR5cGVvZiBsYXllci5nZXRTb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHNvdXJjZSA9IGxheWVyLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyLmdldFNvdXJjZSgpLmdldFNvdXJjZSgpIDogbGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTGF5ZXJNdWx0aSAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkoZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxheWVyLmdldFN0eWxlICYmIHR5cGVvZiBsYXllci5nZXRTb3VyY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHNvdXJjZSA9IGxheWVyLmdldFNvdXJjZSgpIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyLmdldFNvdXJjZSgpLmdldFNvdXJjZSgpIDogbGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmUgKGZlYXR1cmUsIG9iakNoZWNrZWQpIHtcbiAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgaWYgKG9iakNoZWNrZWQudmFsdWUgPT09IFwib3BlbmluZ19ob3Vyc1wiICYmIGZlYXR1cmUuZ2V0KCdvcGVuaW5nX2hvdXJzJykpIHtcbiAgICAgIGxldCBmZWF0dXJlSG91cnMgPSBuZXcgb3BlbmluZ19ob3VycyhmZWF0dXJlLmdldCgnb3BlbmluZ19ob3VycycpLCB7YWRkcmVzczoge2NvdW50cnlfY29kZTogXCJkZVwifX0pO1xuICAgICAgcmV0dXJuIGZlYXR1cmVIb3Vycy5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghKHByb3BlcnR5ID09PSBcImFsbFwiIHx8IChmZWF0dXJlLmdldChwcm9wZXJ0eSkgJiYgIW9iakNoZWNrZWQudmFsdWUpIHx8ICgob2JqQ2hlY2tlZC52YWx1ZSA9PSBmZWF0dXJlLmdldChwcm9wZXJ0eSkpICYmIG9iakNoZWNrZWQudmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuXG4gIH1cblxuICBoaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdyAmJiBmaWx0ZXJBY3RpdmUpe1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvd0ZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSB0cnVlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzaG93KSB7XG4gICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93KSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXNldEZlYXR1cmUgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzaG93RmVhdHVyZU11bHRpIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFyckNoZWNrZWQpe1xuICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG9iakNoZWNrZWQgPSBhcnJDaGVja2VkW2ldO1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZVByb3BlcnR5ID0gZmVhdHVyZS5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG93IHx8ICFmaWx0ZXJBY3RpdmUpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGxvYWRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmZpbHRlciArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmlkICsgXCIvXCIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nO1xuICAgIGZldGNoKHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoISFwYXJzZUZsb2F0KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5maWx0ZXJIYW5kbGluZykpIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaChbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKHtcbiAgICAgICAgICAgICAgaWRlbnRpZmllcjogXCJhbGxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjb3BlLnNldFN0YXRlKHtmaWx0ZXJzOiBqc29uRGF0YSwgYXJyQ2hlY2tlZDogYXJyQ2hlY2tlZH0pXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBGaWx0ZXJGZWF0dXJlTGlzdCBpZiBjbGlja2VkIG9uIG91dHNpZGUgb2YgZWxlbWVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMud3JhcHBlclJlZiAmJiB0aGlzLndyYXBwZXJSZWYuY3VycmVudCAmJiAhdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tJbnNpZGUoZXZlbnQpIHtcbiAgICBsZXQgcGF0aCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnBhdGg7XG4gICAgaWYgKHBhdGhbMF0gPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1maWx0ZXItZm9ybS1lbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge2V2dC5zdG9wUHJvcGFnYXRpb24oKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHRoaXMucHJvcHMucGFyZW50SWQsIHRoaXMucHJvcHMuZmVhdHVyZS52YWx1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLnRyYW5zbGF0aW9uKX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=