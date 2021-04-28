(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./Resources/public/js/components/c4g-feature-filter-item.jsx":
/*!********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter-item.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureFilterItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FeatureFilterItem = exports.FeatureFilterItem = function (_Component) {
    _inherits(FeatureFilterItem, _Component);

    function FeatureFilterItem(props) {
        _classCallCheck(this, FeatureFilterItem);

        return _possibleConstructorReturn(this, (FeatureFilterItem.__proto__ || Object.getPrototypeOf(FeatureFilterItem)).call(this, props));
    }

    _createClass(FeatureFilterItem, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var scope = this;
            return _react2.default.createElement(
                "div",
                { className: "c4g-filter-form-element" },
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", {
                        type: "radio",
                        onChange: function onChange(evt) {
                            _this2.props.filterLayers(scope.props.feature.identifier, scope.props.parentId, scope.props.feature.value);
                        },
                        checked: scope.props.checked.identifier === scope.props.feature.identifier,
                        value: this.props.feature.identifier
                    }),
                    _c4gMapsUtils.utils.decodeHTML(this.props.feature.translation)
                )
            );
        }
    }]);

    return FeatureFilterItem;
}(_react.Component);

/***/ }),

/***/ "./Resources/public/js/components/c4g-feature-filter-list.jsx":
/*!********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter-list.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureFilterList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureFilterItem = __webpack_require__(/*! ./c4g-feature-filter-item.jsx */ "./Resources/public/js/components/c4g-feature-filter-item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FeatureFilterList = exports.FeatureFilterList = function (_Component) {
    _inherits(FeatureFilterList, _Component);

    function FeatureFilterList(props) {
        _classCallCheck(this, FeatureFilterList);

        return _possibleConstructorReturn(this, (FeatureFilterList.__proto__ || Object.getPrototypeOf(FeatureFilterList)).call(this, props));
    }

    _createClass(FeatureFilterList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var scope = this;
            var form = null;
            var className = "";
            if (this.props.feature.filters.length > 2) {
                if (this.props.open) {
                    className = "c4g-open";
                    form = _react2.default.createElement(
                        "form",
                        null,
                        this.props.feature.filters.map(function (feature, index) {
                            return _react2.default.createElement(_c4gFeatureFilterItem.FeatureFilterItem, { feature: feature, parentId: _this2.props.id, checked: _this2.props.checkedItem, filterLayers: _this2.props.filterLayers, key: index });
                        })
                    );
                } else {
                    className = "c4g-close";
                }
                className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
                var liClass = this.props.checkedItem.identifier === "all" ? "" : "c4g-item-checked";
                return _react2.default.createElement(
                    "li",
                    { className: liClass },
                    _react2.default.createElement(
                        "strong",
                        { className: className, onMouseUp: function onMouseUp(evt) {
                                _this2.props.setOpen(_this2.props.id);evt.stopPropagation();evt.preventDefault();
                            } },
                        _react2.default.createElement("span", null),
                        _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)
                    ),
                    form
                );
            } else {
                className = " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
                var _liClass = "c4g-item-checked";
                _liClass += this.props.checkedItem.identifier === "all" ? "" : " clicked";
                return _react2.default.createElement(
                    "li",
                    { className: _liClass },
                    _react2.default.createElement("img", { src: this.props.feature.image }),
                    _react2.default.createElement(
                        "strong",
                        { className: className, onMouseUp: function onMouseUp(evt) {
                                _this2.props.filterLayers(_this2.props.feature.filters[1].identifier !== _this2.props.checkedItem.identifier ? _this2.props.feature.filters[1].identifier : "all", _this2.props.id, _this2.props.feature.filters[1].identifier !== _this2.props.checkedItem.identifier ? _this2.props.feature.filters[1].value : undefined);evt.stopPropagation();evt.preventDefault();
                            } },
                        _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)
                    )
                );
            }
        }
    }]);

    return FeatureFilterList;
}(_react.Component);

/***/ }),

/***/ "./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx":
/*!*****************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureFilterMultiCheckbox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureMulticheckboxItem = __webpack_require__(/*! ./c4g-feature-multicheckbox-item.jsx */ "./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FeatureFilterMultiCheckbox = exports.FeatureFilterMultiCheckbox = function (_Component) {
    _inherits(FeatureFilterMultiCheckbox, _Component);

    function FeatureFilterMultiCheckbox(props) {
        _classCallCheck(this, FeatureFilterMultiCheckbox);

        return _possibleConstructorReturn(this, (FeatureFilterMultiCheckbox.__proto__ || Object.getPrototypeOf(FeatureFilterMultiCheckbox)).call(this, props));
    }

    _createClass(FeatureFilterMultiCheckbox, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var scope = this;
            var form = null;
            var className = void 0;
            if (this.props.feature.filters.length > 2) {
                if (this.props.open) {
                    className = "c4g-open";
                    form = _react2.default.createElement(
                        "form",
                        null,
                        this.props.feature.filters.map(function (feature, index) {
                            var checked = !!_this2.props.checkedItems.find(function (element) {
                                return element.identifier === feature.identifier && element.value === feature.value;
                            });
                            return _react2.default.createElement(_c4gFeatureMulticheckboxItem.FeatureFilterMultiCheckboxItem, { feature: feature, parentId: _this2.props.id, checked: checked, filterLayers: _this2.props.filterLayers, key: index });
                        })
                    );
                } else {
                    className = "c4g-close";
                }
                var numberSpan = null;
                if (this.props.checkedItems.length > 0) {
                    var number = this.props.checkedItems[0].identifier === "all" ? this.props.checkedItems.length - 1 : this.props.checkedItems.length;
                    numberSpan = _react2.default.createElement(
                        "span",
                        { className: "sum" },
                        " ",
                        number,
                        " "
                    );
                }

                className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
                var liClass = "c4g-item-checked";
                return _react2.default.createElement(
                    "li",
                    { className: liClass },
                    _react2.default.createElement(
                        "strong",
                        { className: className, onMouseUp: function onMouseUp(evt) {
                                _this2.props.setOpen(_this2.props.id);evt.stopPropagation();evt.preventDefault();
                            } },
                        _react2.default.createElement("span", null),
                        _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)
                    ),
                    numberSpan,
                    form
                );
            } else {
                className += " fi_" + _c4gMapsUtils.utils.removeUmlauts(this.props.feature.name);
                var _liClass = "c4g-item-checked";
                _liClass += this.props.checkedItems.length === 0 ? "" : " clicked";
                return _react2.default.createElement(
                    "li",
                    { className: _liClass },
                    _react2.default.createElement("img", { src: this.props.feature.image }),
                    _react2.default.createElement(
                        "strong",
                        { className: className, onMouseUp: function onMouseUp(evt) {
                                _this2.props.filterLayers(_this2.props.feature.filters[1].identifier, _this2.props.id, true);evt.stopPropagation();evt.preventDefault();
                            } },
                        _c4gMapsUtils.utils.decodeHTML(this.props.feature.name)
                    )
                );
            }
        }
    }]);

    return FeatureFilterMultiCheckbox;
}(_react.Component);

/***/ }),

/***/ "./Resources/public/js/components/c4g-feature-filter.jsx":
/*!***************************************************************!*\
  !*** ./Resources/public/js/components/c4g-feature-filter.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gFeatureFilterList = __webpack_require__(/*! ./c4g-feature-filter-list.jsx */ "./Resources/public/js/components/c4g-feature-filter-list.jsx");

var _c4gFeatureFilterMulticheckbox = __webpack_require__(/*! ./c4g-feature-filter-multicheckbox.jsx */ "./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _opening_hours = __webpack_require__(/*! opening_hours */ "./node_modules/opening_hours/build/opening_hours.js");

var _opening_hours2 = _interopRequireDefault(_opening_hours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FeatureFilter = function (_Component) {
  _inherits(FeatureFilter, _Component);

  function FeatureFilter(props) {
    _classCallCheck(this, FeatureFilter);

    var _this = _possibleConstructorReturn(this, (FeatureFilter.__proto__ || Object.getPrototypeOf(FeatureFilter)).call(this, props));

    _this.filterLayers = _this.filterLayers.bind(_this);
    _this.filterLayersMulti = _this.filterLayersMulti.bind(_this);
    _this.setOpen = _this.setOpen.bind(_this);
    _this.wrapperRef = _react2.default.createRef();
    _this.ulRef = _react2.default.createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleClickInside = _this.handleClickInside.bind(_this);
    _this.filterLayer = _this.filterLayer.bind(_this);
    _this.filterLayerMulti = _this.filterLayerMulti.bind(_this);
    _this.hideFeature = _this.hideFeature.bind(_this);
    _this.hideFeatureMulti = _this.hideFeatureMulti.bind(_this);
    _this.loadFilters();
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

  _createClass(FeatureFilter, [{
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
        resetButton = _react2.default.createElement(
          "button",
          { className: "c4g-feature-filter-reset", onMouseUp: function onMouseUp(evt) {
              return _this2.resetFilter();
            } },
          this.langConstants.RESET_FILTER
        );
      }
      if (!!parseFloat(this.props.mapController.data.filterHandling)) {
        if (filters && filters.length > 0) {
          var div = filters.map(function (feature, index) {
            var checkedItems = scope.state.arrChecked[index] || [];
            var openedList = scope.state.openedList === index;
            return _react2.default.createElement(_c4gFeatureFilterMulticheckbox.FeatureFilterMultiCheckbox, { feature: feature, open: openedList, setOpen: _this2.setOpen, checkedItems: checkedItems, filterLayers: _this2.filterLayersMulti, id: index, key: index });
          });

          if (!showButtons) {
            return _react2.default.createElement(
              "div",
              { className: "c4g-feature-filter", ref: this.wrapperRef },
              _react2.default.createElement(
                "ul",
                { className: "c4g-feature-filter-list c4g-not-overflowed", onMouseUp: function onMouseUp(evt) {
                    return _this2.handleClickInside(evt);
                  }, ref: this.ulRef },
                div
              ),
              resetButton
            );
          } else {
            return _react2.default.createElement(
              "div",
              { className: "c4g-feature-filter", ref: this.wrapperRef },
              _react2.default.createElement("button", { className: "c4g-btn-nav-previous", onMouseUp: function onMouseUp(evt) {
                  return _this2.ulRef.current.scrollLeft -= 100;
                } }),
              _react2.default.createElement("button", { className: "c4g-btn-nav-next", onMouseUp: function onMouseUp(evt) {
                  return _this2.ulRef.current.scrollLeft += 100;
                } }),
              _react2.default.createElement(
                "ul",
                { className: "c4g-feature-filter-list c4g-overflowed", onMouseUp: function onMouseUp(evt) {
                    return _this2.handleClickInside(evt);
                  }, ref: this.ulRef },
                div
              ),
              resetButton
            );
          }
        }
      } else {
        if (filters && filters.length > 0) {
          var _div = filters.map(function (feature, index) {
            var checkedItem = scope.state.arrChecked[index];
            var openedList = scope.state.openedList === index;
            return _react2.default.createElement(_c4gFeatureFilterList.FeatureFilterList, { feature: feature, open: openedList, setOpen: _this2.setOpen, checkedItem: checkedItem, filterLayers: _this2.filterLayers, id: index, key: index });
          });
          if (!showButtons) {
            return _react2.default.createElement(
              "div",
              { className: "c4g-feature-filter", ref: this.wrapperRef },
              _react2.default.createElement(
                "ul",
                { className: "c4g-feature-filter-list c4g-not-overflowed", onMouseUp: function onMouseUp(evt) {
                    return _this2.handleClickInside(evt);
                  }, ref: this.ulRef },
                _div
              ),
              resetButton
            );
          } else {
            return _react2.default.createElement(
              "div",
              { className: "c4g-feature-filter", ref: this.wrapperRef },
              _react2.default.createElement("button", { className: "c4g-btn-nav-previous", onMouseUp: function onMouseUp(evt) {
                  return _this2.ulRef.current.scrollLeft -= 100;
                } }),
              _react2.default.createElement("button", { className: "c4g-btn-nav-next", onMouseUp: function onMouseUp(evt) {
                  return _this2.ulRef.current.scrollLeft += 100;
                } }),
              _react2.default.createElement(
                "ul",
                { className: "c4g-feature-filter-list c4g-overflowed", onMouseUp: function onMouseUp(evt) {
                    return _this2.handleClickInside(evt);
                  }, ref: this.ulRef },
                _div
              ),
              resetButton
            );
          }
        }
      }
      return _react2.default.createElement("div", null);
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
      this.setState({ arrChecked: newState }, function () {
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
      this.setState({ arrChecked: newState }, function () {
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
        this.setState({ openedList: -1 });
      } else {
        this.setState({ openedList: openId });
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
      this.setState({ arrChecked: filter }, function () {
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
        var featureHours = new _opening_hours2.default(feature.get('opening_hours'), { address: { country_code: "de" } });
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
          scope.setState({ filters: jsonData, arrChecked: arrChecked });
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
        this.setState({ openedList: -1 });
      }
    }
  }, {
    key: "handleClickInside",
    value: function handleClickInside(event) {
      var path = event.nativeEvent.path;
      if (path[0] === event.currentTarget) {
        this.setState({ openedList: -1 });
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeatureFilterMultiCheckboxItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FeatureFilterMultiCheckboxItem = exports.FeatureFilterMultiCheckboxItem = function (_Component) {
    _inherits(FeatureFilterMultiCheckboxItem, _Component);

    function FeatureFilterMultiCheckboxItem(props) {
        _classCallCheck(this, FeatureFilterMultiCheckboxItem);

        return _possibleConstructorReturn(this, (FeatureFilterMultiCheckboxItem.__proto__ || Object.getPrototypeOf(FeatureFilterMultiCheckboxItem)).call(this, props));
    }

    _createClass(FeatureFilterMultiCheckboxItem, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "c4g-filter-form-element" },
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", {
                        type: "checkbox",
                        checked: this.props.checked,
                        onChange: function onChange(evt) {
                            evt.stopPropagation();
                        },
                        onClick: function onClick(evt) {
                            _this2.props.filterLayers(_this2.props.feature.identifier, _this2.props.parentId, _this2.props.feature.value);
                        },
                        value: this.props.feature.identifier
                    }),
                    _c4gMapsUtils.utils.decodeHTML(this.props.feature.translation)
                )
            );
        }
    }]);

    return FeatureFilterMultiCheckboxItem;
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4Iiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlRmlsdGVySXRlbSIsInByb3BzIiwic2NvcGUiLCJldnQiLCJmaWx0ZXJMYXllcnMiLCJmZWF0dXJlIiwiaWRlbnRpZmllciIsInBhcmVudElkIiwidmFsdWUiLCJjaGVja2VkIiwidXRpbHMiLCJkZWNvZGVIVE1MIiwidHJhbnNsYXRpb24iLCJDb21wb25lbnQiLCJGZWF0dXJlRmlsdGVyTGlzdCIsImZvcm0iLCJjbGFzc05hbWUiLCJmaWx0ZXJzIiwibGVuZ3RoIiwib3BlbiIsIm1hcCIsImluZGV4IiwiaWQiLCJjaGVja2VkSXRlbSIsInJlbW92ZVVtbGF1dHMiLCJuYW1lIiwibGlDbGFzcyIsInNldE9wZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlIiwidW5kZWZpbmVkIiwiRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3giLCJjaGVja2VkSXRlbXMiLCJmaW5kIiwiZWxlbWVudCIsIm51bWJlclNwYW4iLCJudW1iZXIiLCJGZWF0dXJlRmlsdGVyIiwiYmluZCIsImZpbHRlckxheWVyc011bHRpIiwid3JhcHBlclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJoYW5kbGVDbGlja0luc2lkZSIsImZpbHRlckxheWVyIiwiZmlsdGVyTGF5ZXJNdWx0aSIsImhpZGVGZWF0dXJlIiwiaGlkZUZlYXR1cmVNdWx0aSIsImxvYWRGaWx0ZXJzIiwic3RhdGUiLCJhcnJDaGVja2VkIiwib3BlbmVkTGlzdCIsImZlYXR1cmVzIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiZmlsdGVyIiwic2hvd0J1dHRvbnMiLCJsaXN0RGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsInRhcmdldCIsInJlc2V0QnV0dG9uIiwicGFyc2VGbG9hdCIsImZpbHRlclJlc2V0QnV0dG9uIiwicmVzZXRGaWx0ZXIiLCJSRVNFVF9GSUxURVIiLCJmaWx0ZXJIYW5kbGluZyIsImRpdiIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwicHJvcGVydHkiLCJsaXN0SWQiLCJuZXdTdGF0ZSIsInNldFN0YXRlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzIiwiZ2V0QXJyYXkiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJhZGRlZCIsInNob3dGZWF0dXJlIiwiY2hhbmdlZEVudHJ5IiwiZm91bmQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwdXNoIiwicm1JbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzaG93RmVhdHVyZU11bHRpIiwib3BlbklkIiwicmVzZXRGZWF0dXJlIiwibGF5ZXIiLCJnZXRTdHlsZSIsImdldFNvdXJjZSIsInNvdXJjZSIsIkNsdXN0ZXIiLCJmb3JFYWNoRmVhdHVyZSIsIm9iakNoZWNrZWQiLCJnZXQiLCJmZWF0dXJlSG91cnMiLCJvcGVuaW5nX2hvdXJzIiwiYWRkcmVzcyIsImNvdW50cnlfY29kZSIsImdldFN0YXRlIiwiZm9yRWFjaCIsInNob3ciLCJrZXkiLCJjaGVja0ZlYXR1cmUiLCJzZXQiLCJyZW1vdmVGZWF0dXJlIiwiZmlsdGVyQWN0aXZlIiwiZmVhdHVyZVByb3BlcnR5IiwiYWRkRmVhdHVyZSIsInVybCIsImFwaSIsImxhbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInBhdGgiLCJuYXRpdmVFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOzs7Ozs7OzsrZUFkQTs7Ozs7Ozs7Ozs7OztJQWdCYUEsaUIsV0FBQUEsaUI7OztBQUNULCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUlBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBQ1E7QUFBQTs7QUFDTCxnQkFBTUMsUUFBUSxJQUFkO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUseUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDhCQUFLLE9BRFQ7QUFFSSxrQ0FBVSxrQkFBQ0MsR0FBRCxFQUFTO0FBQUMsbUNBQUtGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QkYsTUFBTUQsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUE1QyxFQUF3REosTUFBTUQsS0FBTixDQUFZTSxRQUFwRSxFQUE4RUwsTUFBTUQsS0FBTixDQUFZSSxPQUFaLENBQW9CRyxLQUFsRztBQUEwRyx5QkFGbEk7QUFHSSxpQ0FBU04sTUFBTUQsS0FBTixDQUFZUSxPQUFaLENBQW9CSCxVQUFwQixLQUFtQ0osTUFBTUQsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUhwRTtBQUlJLCtCQUFPLEtBQUtMLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkM7QUFKOUIsc0JBREo7QUFPS0ksd0NBQU1DLFVBQU4sQ0FBaUIsS0FBS1YsS0FBTCxDQUFXSSxPQUFYLENBQW1CTyxXQUFwQztBQVBM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QUFKO0FBQXNCLHlCQUg5QztBQUlJLGlDQUFTLGlCQUFDekIsR0FBRCxFQUFTO0FBQUMsbUNBQUtGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QixPQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDLFVBQTNDLEVBQXVELE9BQUtMLEtBQUwsQ0FBV00sUUFBbEUsRUFBNEUsT0FBS04sS0FBTCxDQUFXSSxPQUFYLENBQW1CRyxLQUEvRjtBQUF1Ryx5QkFKOUg7QUFLSSwrQkFBTyxLQUFLUCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJDO0FBTDlCLHNCQURKO0FBUUtJLHdDQUFNQyxVQUFOLENBQWlCLEtBQUtWLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQk8sV0FBcEM7QUFSTDtBQURKLGFBREo7QUFjSDs7OztFQW5CK0NDLGdCIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyhzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXIsIHNjb3BlLnByb3BzLnBhcmVudElkLCBzY29wZS5wcm9wcy5mZWF0dXJlLnZhbHVlKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2NvcGUucHJvcHMuY2hlY2tlZC5pZGVudGlmaWVyID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItaXRlbS5qc3hcIjtcblxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGaWx0ZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZm9ybSA9IG51bGw7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcGFyZW50SWQ9e3RoaXMucHJvcHMuaWR9IGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5wcm9wcy5maWx0ZXJMYXllcnN9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1jbG9zZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA9PT0gXCJhbGxcIiA/IFwiXCIgOiBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9IFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgbGlDbGFzcyArPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCIgY2xpY2tlZFwiO1xuICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfS8+XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnModGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciAhPT0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID8gdGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnNbMV0uaWRlbnRpZmllciA6IFwiYWxsXCIsIHRoaXMucHJvcHMuaWQsIHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLnZhbHVlIDp1bmRlZmluZWQpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319Pnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCJcbmltcG9ydCB7RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtfSBmcm9tIFwiLi9jNGctZmVhdHVyZS1tdWx0aWNoZWNrYm94LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLW9wZW5cIjtcbiAgICAgICAgICAgICAgICBmb3JtID1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlLmZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2VkID0gISEodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZGVudGlmaWVyID09PSBmZWF0dXJlLmlkZW50aWZpZXIgJiYgZWxlbWVudC52YWx1ZSA9PT0gZmVhdHVyZS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXtjaGVja2VkfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBudW1iZXJTcGFuID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zWzBdLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggLTEgOiB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbnVtYmVyU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17XCJzdW1cIn0+IHtudW1iZXJ9IDwvc3Bhbj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuc2V0T3Blbih0aGlzLnByb3BzLmlkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT48c3Bhbi8+e3V0aWxzLmRlY29kZUhUTUwodGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICB7bnVtYmVyU3Bhbn1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgZmlfXCIgKyB1dGlscy5yZW1vdmVVbWxhdXRzKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKTtcbiAgICAgICAgICAgIGxldCBsaUNsYXNzID0gIFwiYzRnLWl0ZW0tY2hlY2tlZFwiO1xuICAgICAgICAgICAgbGlDbGFzcyArPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtcy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIgY2xpY2tlZFwiXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlLmltYWdlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIsIHRoaXMucHJvcHMuaWQsIHRydWUpOyBldnQuc3RvcFByb3BhZ2F0aW9uKCk7IGV2dC5wcmV2ZW50RGVmYXVsdCgpO319Pnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTGlzdH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QuanN4XCI7XG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94fSBmcm9tIFwiLi9jNGctZmVhdHVyZS1maWx0ZXItbXVsdGljaGVja2JveC5qc3hcIjtcbmltcG9ydCB7RmlsbCwgU3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5pbXBvcnQge0NsdXN0ZXJ9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCBvcGVuaW5nX2hvdXJzIGZyb20gXCJvcGVuaW5nX2hvdXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlYXR1cmVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJzID0gdGhpcy5maWx0ZXJMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyc011bHRpID0gdGhpcy5maWx0ZXJMYXllcnNNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0T3BlbiA9IHRoaXMuc2V0T3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMudWxSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGlja0luc2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyID0gdGhpcy5maWx0ZXJMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmUgPSB0aGlzLmhpZGVGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oaWRlRmVhdHVyZU11bHRpID0gdGhpcy5oaWRlRmVhdHVyZU11bHRpLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWx0ZXJzOiBbXSxcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBhcnJDaGVja2VkOiBbXSxcbiAgICAgIG9wZW5lZExpc3Q6IC0xXG4gICAgfTtcbiAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZmlsdGVyID0gdGhpcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZpbHRlcnMgPSB0aGlzLnN0YXRlLmZpbHRlcnM7XG4gICAgbGV0IHNob3dCdXR0b25zID0gZmFsc2U7XG4gICAgbGV0IGxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1mZWF0dXJlLWZpbHRlci1saXN0XCIpO1xuICAgIGlmIChsaXN0RGl2KSB7XG4gICAgICBzaG93QnV0dG9ucyA9ICEobGlzdERpdi5zY3JvbGxXaWR0aCA8PSBsaXN0RGl2LmNsaWVudFdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0J1dHRvbnMgPSBzY29wZS5wcm9wcy50YXJnZXQgJiYgKCEoc2NvcGUucHJvcHMudGFyZ2V0LnNjcm9sbFdpZHRoIDw9IHNjb3BlLnByb3BzLnRhcmdldC5jbGllbnRXaWR0aCkpO1xuICAgIH1cbiAgICBsZXQgcmVzZXRCdXR0b24gPSBudWxsO1xuICAgIGlmICghIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVyUmVzZXRCdXR0b24pKSB7XG4gICAgICByZXNldEJ1dHRvbiA9IDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1yZXNldFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMucmVzZXRGaWx0ZXIoKX0+e3RoaXMubGFuZ0NvbnN0YW50cy5SRVNFVF9GSUxURVJ9PC9idXR0b24+XG4gICAgfVxuICAgIGlmICghIXBhcnNlRmxvYXQodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGRpdiA9IGZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBjaGVja2VkSXRlbXMgPSBzY29wZS5zdGF0ZS5hcnJDaGVja2VkW2luZGV4XSB8fCBbXTtcbiAgICAgICAgICBsZXQgb3BlbmVkTGlzdCA9IHNjb3BlLnN0YXRlLm9wZW5lZExpc3QgPT09IGluZGV4O1xuICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZmVhdHVyZT17ZmVhdHVyZX0gb3Blbj17b3BlbmVkTGlzdH0gc2V0T3Blbj17dGhpcy5zZXRPcGVufSBjaGVja2VkSXRlbXM9e2NoZWNrZWRJdGVtc30gZmlsdGVyTGF5ZXJzPXt0aGlzLmZpbHRlckxheWVyc011bHRpfSBpZD17aW5kZXh9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzaG93QnV0dG9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1ub3Qtb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LXByZXZpb3VzXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0xMDB9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtbmV4dFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9MTAwfS8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsdGVycyAmJiBmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGRpdiA9IGZpbHRlcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBjaGVja2VkSXRlbSA9IHNjb3BlLnN0YXRlLmFyckNoZWNrZWRbaW5kZXhdO1xuICAgICAgICAgIGxldCBvcGVuZWRMaXN0ID0gc2NvcGUuc3RhdGUub3BlbmVkTGlzdCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxGZWF0dXJlRmlsdGVyTGlzdCBmZWF0dXJlPXtmZWF0dXJlfSBvcGVuPXtvcGVuZWRMaXN0fSBzZXRPcGVuPXt0aGlzLnNldE9wZW59IGNoZWNrZWRJdGVtPXtjaGVja2VkSXRlbX0gZmlsdGVyTGF5ZXJzPXt0aGlzLmZpbHRlckxheWVyc30gaWQ9e2luZGV4fSBrZXk9e2luZGV4fS8+XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXNob3dCdXR0b25zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW5vdC1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtcHJldmlvdXNcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPTEwMH0vPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1uZXh0XCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LiBzY3JvbGxMZWZ0ICs9MTAwfS8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyLWxpc3QgYzRnLW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoPGRpdi8+KTtcbiAgfVxuXG4gIGZpbHRlckxheWVycyAocHJvcGVydHksIGxpc3RJZCwgdmFsdWUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWQ7XG4gICAgbmV3U3RhdGVbbGlzdElkXSA9IHtcbiAgICAgIGlkZW50aWZpZXI6IHByb3BlcnR5LFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHthcnJDaGVja2VkOiBuZXdTdGF0ZX0sICgpID0+IHtcbiAgICAgICAgbGV0IGFyckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMuc2hvd0ZlYXR1cmUodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBmaWx0ZXJMYXllcnNNdWx0aSAocHJvcGVydHksIGxpc3RJZCwgdmFsdWUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWQ7XG4gICAgbGV0IGNoYW5nZWRFbnRyeSA9IG5ld1N0YXRlW2xpc3RJZF07XG5cbiAgICBsZXQgZm91bmQgPSBjaGFuZ2VkRW50cnkuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZGVudGlmaWVyID09PSBwcm9wZXJ0eSAmJiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZSk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5maWx0ZXJzW2xpc3RJZF0uZmlsdGVycykpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeS5wdXNoKHtcbiAgICAgICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNoYW5nZWRFbnRyeSA9IFtdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBybUluZGV4ID0gY2hhbmdlZEVudHJ5LmluZGV4T2YoZm91bmQpO1xuICAgICAgICBpZiAocm1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZEVudHJ5LnNwbGljZShybUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSBjaGFuZ2VkRW50cnk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCAoKSA9PiB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlTXVsdGkodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldE9wZW4gKG9wZW5JZCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZExpc3QgPT09IG9wZW5JZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiBvcGVuSWR9KTtcbiAgICB9XG4gIH1cblxuICByZXNldEZpbHRlciAoKSB7XG4gICAgbGV0IGZpbHRlciA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGZpbHRlci5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogZmlsdGVyfSwgKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5yZXNldEZlYXR1cmUodGhpcy5mZWF0dXJlc1tpXSwgaSk7XG4gICAgICAgICAgaWYgKGFkZGVkKSB7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJMYXllciAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXIuZ2V0TGF5ZXJzICYmIHR5cGVvZiBsYXllci5nZXRMYXllcnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IGFyckxheWVycyA9IGxheWVyLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICBhcnJMYXllcnMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlckxheWVyKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckxheWVyTXVsdGkgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllck11bHRpKGZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXllci5nZXRTdHlsZSAmJiB0eXBlb2YgbGF5ZXIuZ2V0U291cmNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBsYXllci5nZXRTb3VyY2UoKSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllci5nZXRTb3VyY2UoKS5nZXRTb3VyY2UoKSA6IGxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgIGlmIChvYmpDaGVja2VkLnZhbHVlID09PSBcIm9wZW5pbmdfaG91cnNcIiAmJiBmZWF0dXJlLmdldCgnb3BlbmluZ19ob3VycycpKSB7XG4gICAgICBsZXQgZmVhdHVyZUhvdXJzID0gbmV3IG9wZW5pbmdfaG91cnMoZmVhdHVyZS5nZXQoJ29wZW5pbmdfaG91cnMnKSwge2FkZHJlc3M6IHtjb3VudHJ5X2NvZGU6IFwiZGVcIn19KTtcbiAgICAgIHJldHVybiBmZWF0dXJlSG91cnMuZ2V0U3RhdGUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIShwcm9wZXJ0eSA9PT0gXCJhbGxcIiB8fCAoZmVhdHVyZS5nZXQocHJvcGVydHkpICYmICFvYmpDaGVja2VkLnZhbHVlKSB8fCAoKG9iakNoZWNrZWQudmFsdWUgPT0gZmVhdHVyZS5nZXQocHJvcGVydHkpKSAmJiBvYmpDaGVja2VkLnZhbHVlKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGZWF0dXJlTXVsdGkgKGZlYXR1cmUsIG9iakNoZWNrZWQpIHtcblxuICB9XG5cbiAgaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSB7XG4gICAgaWYgKGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKXtcbiAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ25vRmlsdGVyJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHNob3cgPSB0cnVlO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkgJiYgc2hvdykge1xuICAgICAgICAgIHNob3cgPSB0aGlzLmNoZWNrRmVhdHVyZShmZWF0dXJlLCB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2hvdykge1xuICAgICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgc291cmNlKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBoaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkge1xuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICBmZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKSA9PiB0aGlzLmhpZGVGZWF0dXJlTXVsdGkoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdub0ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgICBsZXQgZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGxldCBhcnJDaGVja2VkID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV07XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJDaGVja2VkKXtcbiAgICAgICAgICAgIGlmIChhcnJDaGVja2VkLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIGZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGxldCBvYmpDaGVja2VkID0gYXJyQ2hlY2tlZFtpXTtcbiAgICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gb2JqQ2hlY2tlZC5pZGVudGlmaWVyO1xuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICBpZiAoKG9iakNoZWNrZWQudmFsdWUgJiYgb2JqQ2hlY2tlZC52YWx1ZSA9PT0gZmVhdHVyZVByb3BlcnR5KSB8fCAhb2JqQ2hlY2tlZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3cgJiYgZmlsdGVyQWN0aXZlKXtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNob3dGZWF0dXJlIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkgJiYgc2hvdykge1xuICAgICAgICBzaG93ID0gdGhpcy5jaGVja0ZlYXR1cmUoZmVhdHVyZSwgdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdykge1xuICAgICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmVzZXRGZWF0dXJlIChmZWF0dXJlLCBpbmRleCkge1xuICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc2hvd0ZlYXR1cmVNdWx0aSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGxldCBmaWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zdGF0ZS5hcnJDaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSB0aGlzLnN0YXRlLmFyckNoZWNrZWRba2V5XTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJDaGVja2VkKXtcbiAgICAgICAgICBpZiAoYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBvYmpDaGVja2VkID0gYXJyQ2hlY2tlZFtpXTtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldChwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgbGV0IGZlYXR1cmVQcm9wZXJ0eSA9IGZlYXR1cmUuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgaWYgKChvYmpDaGVja2VkLnZhbHVlICYmIG9iakNoZWNrZWQudmFsdWUgPT09IGZlYXR1cmVQcm9wZXJ0eSkgfHwgIW9iakNoZWNrZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdyB8fCAhZmlsdGVyQWN0aXZlKSB7XG4gICAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIGZhbHNlKTtcbiAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBsb2FkRmlsdGVycygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5maWx0ZXIgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5pZCArIFwiL1wiICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZztcbiAgICBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oanNvbkRhdGEpIHtcbiAgICAgICAgbGV0IGFyckNoZWNrZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCEhcGFyc2VGbG9hdChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZmlsdGVySGFuZGxpbmcpKSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFyckNoZWNrZWQucHVzaCh7XG4gICAgICAgICAgICAgIGlkZW50aWZpZXI6IFwiYWxsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY29wZS5zZXRTdGF0ZSh7ZmlsdGVyczoganNvbkRhdGEsIGFyckNoZWNrZWQ6IGFyckNoZWNrZWR9KVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhpZGUgRmlsdGVyRmVhdHVyZUxpc3QgaWYgY2xpY2tlZCBvbiBvdXRzaWRlIG9mIGVsZW1lbnRcbiAgICovXG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLndyYXBwZXJSZWYgJiYgdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQgJiYgIXRoaXMud3JhcHBlclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrSW5zaWRlKGV2ZW50KSB7XG4gICAgbGV0IHBhdGggPSBldmVudC5uYXRpdmVFdmVudC5wYXRoO1xuICAgIGlmIChwYXRoWzBdID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjNGctZmlsdGVyLWZvcm0tZWxlbWVudFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtldnQuc3RvcFByb3BhZ2F0aW9uKCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLnBhcmVudElkLCB0aGlzLnByb3BzLmZlYXR1cmUudmFsdWUpO319XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5mZWF0dXJlLmlkZW50aWZpZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS50cmFuc2xhdGlvbil9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9