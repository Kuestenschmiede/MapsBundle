(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
    (0, _inherits3.default)(FeatureFilterItem, _Component);

    function FeatureFilterItem(props) {
        (0, _classCallCheck3.default)(this, FeatureFilterItem);
        return (0, _possibleConstructorReturn3.default)(this, (FeatureFilterItem.__proto__ || (0, _getPrototypeOf2.default)(FeatureFilterItem)).call(this, props));
    }

    (0, _createClass3.default)(FeatureFilterItem, [{
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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureFilterItem = __webpack_require__(/*! ./c4g-feature-filter-item.jsx */ "./Resources/public/js/components/c4g-feature-filter-item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureFilterList = exports.FeatureFilterList = function (_Component) {
    (0, _inherits3.default)(FeatureFilterList, _Component);

    function FeatureFilterList(props) {
        (0, _classCallCheck3.default)(this, FeatureFilterList);
        return (0, _possibleConstructorReturn3.default)(this, (FeatureFilterList.__proto__ || (0, _getPrototypeOf2.default)(FeatureFilterList)).call(this, props));
    }

    (0, _createClass3.default)(FeatureFilterList, [{
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
}(_react.Component); /*
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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gFeatureMulticheckboxItem = __webpack_require__(/*! ./c4g-feature-multicheckbox-item.jsx */ "./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureFilterMultiCheckbox = exports.FeatureFilterMultiCheckbox = function (_Component) {
    (0, _inherits3.default)(FeatureFilterMultiCheckbox, _Component);

    function FeatureFilterMultiCheckbox(props) {
        (0, _classCallCheck3.default)(this, FeatureFilterMultiCheckbox);
        return (0, _possibleConstructorReturn3.default)(this, (FeatureFilterMultiCheckbox.__proto__ || (0, _getPrototypeOf2.default)(FeatureFilterMultiCheckbox)).call(this, props));
    }

    (0, _createClass3.default)(FeatureFilterMultiCheckbox, [{
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
}(_react.Component); /*
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

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

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

var FeatureFilter = function (_Component) {
  (0, _inherits3.default)(FeatureFilter, _Component);

  function FeatureFilter(props) {
    (0, _classCallCheck3.default)(this, FeatureFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FeatureFilter.__proto__ || (0, _getPrototypeOf2.default)(FeatureFilter)).call(this, props));

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

  (0, _createClass3.default)(FeatureFilter, [{
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
          changedEntry = JSON.parse((0, _stringify2.default)(this.state.filters[listId].filters));
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
}(_react.Component); /*
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

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
    (0, _inherits3.default)(FeatureFilterMultiCheckboxItem, _Component);

    function FeatureFilterMultiCheckboxItem(props) {
        (0, _classCallCheck3.default)(this, FeatureFilterMultiCheckboxItem);
        return (0, _possibleConstructorReturn3.default)(this, (FeatureFilterMultiCheckboxItem.__proto__ || (0, _getPrototypeOf2.default)(FeatureFilterMultiCheckboxItem)).call(this, props));
    }

    (0, _createClass3.default)(FeatureFilterMultiCheckboxItem, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4Iiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZmVhdHVyZS1maWx0ZXItbGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1mZWF0dXJlLWZpbHRlci1tdWx0aWNoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtZmlsdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlRmlsdGVySXRlbSIsInByb3BzIiwic2NvcGUiLCJldnQiLCJmaWx0ZXJMYXllcnMiLCJmZWF0dXJlIiwiaWRlbnRpZmllciIsInBhcmVudElkIiwidmFsdWUiLCJjaGVja2VkIiwidXRpbHMiLCJkZWNvZGVIVE1MIiwidHJhbnNsYXRpb24iLCJDb21wb25lbnQiLCJGZWF0dXJlRmlsdGVyTGlzdCIsImZvcm0iLCJjbGFzc05hbWUiLCJmaWx0ZXJzIiwibGVuZ3RoIiwib3BlbiIsIm1hcCIsImluZGV4IiwiaWQiLCJjaGVja2VkSXRlbSIsInJlbW92ZVVtbGF1dHMiLCJuYW1lIiwibGlDbGFzcyIsInNldE9wZW4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlIiwidW5kZWZpbmVkIiwiRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3giLCJjaGVja2VkSXRlbXMiLCJmaW5kIiwiZWxlbWVudCIsIm51bWJlclNwYW4iLCJudW1iZXIiLCJGZWF0dXJlRmlsdGVyIiwiYmluZCIsImZpbHRlckxheWVyc011bHRpIiwid3JhcHBlclJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwidWxSZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJoYW5kbGVDbGlja0luc2lkZSIsImZpbHRlckxheWVyIiwiZmlsdGVyTGF5ZXJNdWx0aSIsImhpZGVGZWF0dXJlIiwiaGlkZUZlYXR1cmVNdWx0aSIsImxvYWRGaWx0ZXJzIiwic3RhdGUiLCJhcnJDaGVja2VkIiwib3BlbmVkTGlzdCIsImZlYXR1cmVzIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiZmlsdGVyIiwic2hvd0J1dHRvbnMiLCJsaXN0RGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsInRhcmdldCIsInJlc2V0QnV0dG9uIiwicGFyc2VGbG9hdCIsImZpbHRlclJlc2V0QnV0dG9uIiwicmVzZXRGaWx0ZXIiLCJSRVNFVF9GSUxURVIiLCJmaWx0ZXJIYW5kbGluZyIsImRpdiIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwicHJvcGVydHkiLCJsaXN0SWQiLCJuZXdTdGF0ZSIsInNldFN0YXRlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzIiwiZ2V0QXJyYXkiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJhZGRlZCIsInNob3dGZWF0dXJlIiwiY2hhbmdlZEVudHJ5IiwiZm91bmQiLCJKU09OIiwicGFyc2UiLCJwdXNoIiwicm1JbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJzaG93RmVhdHVyZU11bHRpIiwib3BlbklkIiwicmVzZXRGZWF0dXJlIiwibGF5ZXIiLCJnZXRTdHlsZSIsImdldFNvdXJjZSIsInNvdXJjZSIsIkNsdXN0ZXIiLCJmb3JFYWNoRmVhdHVyZSIsIm9iakNoZWNrZWQiLCJnZXQiLCJmZWF0dXJlSG91cnMiLCJvcGVuaW5nX2hvdXJzIiwiYWRkcmVzcyIsImNvdW50cnlfY29kZSIsImdldFN0YXRlIiwiZm9yRWFjaCIsInNob3ciLCJrZXkiLCJjaGVja0ZlYXR1cmUiLCJzZXQiLCJyZW1vdmVGZWF0dXJlIiwiZmlsdGVyQWN0aXZlIiwiZmVhdHVyZVByb3BlcnR5IiwiYWRkRmVhdHVyZSIsInVybCIsImFwaSIsImxhbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb250YWlucyIsInBhdGgiLCJuYXRpdmVFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOzs7O0FBZEE7Ozs7Ozs7Ozs7Ozs7SUFnQmFBLGlCLFdBQUFBLGlCOzs7QUFDVCwrQkFBWUMsS0FBWixFQUFtQjtBQUFBO0FBQUEsMkpBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBQ1E7QUFBQTs7QUFDTCxnQkFBTUMsUUFBUSxJQUFkO0FBQ0EsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUseUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDhCQUFLLE9BRFQ7QUFFSSxrQ0FBVSxrQkFBQ0MsR0FBRCxFQUFTO0FBQUMsbUNBQUtGLEtBQUwsQ0FBV0csWUFBWCxDQUF3QkYsTUFBTUQsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUE1QyxFQUF3REosTUFBTUQsS0FBTixDQUFZTSxRQUFwRSxFQUE4RUwsTUFBTUQsS0FBTixDQUFZSSxPQUFaLENBQW9CRyxLQUFsRztBQUEwRyx5QkFGbEk7QUFHSSxpQ0FBU04sTUFBTUQsS0FBTixDQUFZUSxPQUFaLENBQW9CSCxVQUFwQixLQUFtQ0osTUFBTUQsS0FBTixDQUFZSSxPQUFaLENBQW9CQyxVQUhwRTtBQUlJLCtCQUFPLEtBQUtMLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkM7QUFKOUIsc0JBREo7QUFPS0ksd0NBQU1DLFVBQU4sQ0FBaUIsS0FBS1YsS0FBTCxDQUFXSSxPQUFYLENBQW1CTyxXQUFwQztBQVBM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QVUsa0JBQUNOLEdBQUQsRUFBUztBQUFDQSxnQ0FBSXlCLGVBQUo7QUFBc0IseUJBSDlDO0FBSUksaUNBQVMsaUJBQUN6QixHQUFELEVBQVM7QUFBQyxtQ0FBS0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCLE9BQUtILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkMsVUFBM0MsRUFBdUQsT0FBS0wsS0FBTCxDQUFXTSxRQUFsRSxFQUE0RSxPQUFLTixLQUFMLENBQVdJLE9BQVgsQ0FBbUJHLEtBQS9GO0FBQXVHLHlCQUo5SDtBQUtJLCtCQUFPLEtBQUtQLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkM7QUFMOUIsc0JBREo7QUFRS0ksd0NBQU1DLFVBQU4sQ0FBaUIsS0FBS1YsS0FBTCxDQUFXSSxPQUFYLENBQW1CTyxXQUFwQztBQVJMO0FBREosYUFESjtBQWNIOzs7RUFuQitDQyxnQiIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVySXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7dGhpcy5wcm9wcy5maWx0ZXJMYXllcnMoc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyLCBzY29wZS5wcm9wcy5wYXJlbnRJZCwgc2NvcGUucHJvcHMuZmVhdHVyZS52YWx1ZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Njb3BlLnByb3BzLmNoZWNrZWQuaWRlbnRpZmllciA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIlxuaW1wb3J0IHtGZWF0dXJlRmlsdGVySXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmlsdGVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHBhcmVudElkPXt0aGlzLnByb3BzLmlkfSBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWRJdGVtfSBmaWx0ZXJMYXllcnM9e3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzfSBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJjNGctY2xvc2VcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPT09IFwiYWxsXCIgPyBcIlwiIDogXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gXCJcIiA6IFwiIGNsaWNrZWRcIjtcbiAgICAgICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZT17bGlDbGFzc30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0vPlxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VVcD17KGV2dCkgPT4ge3RoaXMucHJvcHMuZmlsdGVyTGF5ZXJzKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuY2hlY2tlZEl0ZW0uaWRlbnRpZmllciA/IHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzWzFdLmlkZW50aWZpZXIgOiBcImFsbFwiLCB0aGlzLnByb3BzLmlkLCB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyICE9PSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtLmlkZW50aWZpZXIgPyB0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS52YWx1ZSA6dW5kZWZpbmVkKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2xpPik7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiXG5pbXBvcnQge0ZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbX0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtbXVsdGljaGVja2JveC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGxldCBmb3JtID0gbnVsbDtcbiAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImM0Zy1vcGVuXCI7XG4gICAgICAgICAgICAgICAgZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZS5maWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZCA9ICEhKHRoaXMucHJvcHMuY2hlY2tlZEl0ZW1zLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gZmVhdHVyZS5pZGVudGlmaWVyICYmIGVsZW1lbnQudmFsdWUgPT09IGZlYXR1cmUudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSBwYXJlbnRJZD17dGhpcy5wcm9wcy5pZH0gY2hlY2tlZD17Y2hlY2tlZH0gZmlsdGVyTGF5ZXJzPXt0aGlzLnByb3BzLmZpbHRlckxheWVyc30ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYzRnLWNsb3NlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbnVtYmVyU3BhbiA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnByb3BzLmNoZWNrZWRJdGVtc1swXS5pZGVudGlmaWVyID09PSBcImFsbFwiID8gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoIC0xIDogdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG51bWJlclNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e1wic3VtXCJ9PiB7bnVtYmVyfSA8L3NwYW4+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBmaV9cIiArIHV0aWxzLnJlbW92ZVVtbGF1dHModGhpcy5wcm9wcy5mZWF0dXJlLm5hbWUpO1xuICAgICAgICAgICAgbGV0IGxpQ2xhc3MgPSAgXCJjNGctaXRlbS1jaGVja2VkXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLnNldE9wZW4odGhpcy5wcm9wcy5pZCk7IGV2dC5zdG9wUHJvcGFnYXRpb24oKTsgZXZ0LnByZXZlbnREZWZhdWx0KCk7fX0+PHNwYW4vPnt1dGlscy5kZWNvZGVIVE1MKHRoaXMucHJvcHMuZmVhdHVyZS5uYW1lKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAge251bWJlclNwYW59XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGZpX1wiICsgdXRpbHMucmVtb3ZlVW1sYXV0cyh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSk7XG4gICAgICAgICAgICBsZXQgbGlDbGFzcyA9ICBcImM0Zy1pdGVtLWNoZWNrZWRcIjtcbiAgICAgICAgICAgIGxpQ2xhc3MgKz0gdGhpcy5wcm9wcy5jaGVja2VkSXRlbXMubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIGNsaWNrZWRcIlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZS5pbWFnZX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbk1vdXNlVXA9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuZmlsdGVyc1sxXS5pZGVudGlmaWVyLCB0aGlzLnByb3BzLmlkLCB0cnVlKTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpOyBldnQucHJldmVudERlZmF1bHQoKTt9fT57dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUubmFtZSl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmVhdHVyZUZpbHRlckxpc3R9IGZyb20gXCIuL2M0Zy1mZWF0dXJlLWZpbHRlci1saXN0LmpzeFwiO1xuaW1wb3J0IHtGZWF0dXJlRmlsdGVyTXVsdGlDaGVja2JveH0gZnJvbSBcIi4vYzRnLWZlYXR1cmUtZmlsdGVyLW11bHRpY2hlY2tib3guanN4XCI7XG5pbXBvcnQge0ZpbGwsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtDbHVzdGVyfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQgb3BlbmluZ19ob3VycyBmcm9tIFwib3BlbmluZ19ob3Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlckxheWVycyA9IHRoaXMuZmlsdGVyTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllcnNNdWx0aSA9IHRoaXMuZmlsdGVyTGF5ZXJzTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldE9wZW4gPSB0aGlzLnNldE9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnVsUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJMYXllciA9IHRoaXMuZmlsdGVyTGF5ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZpbHRlckxheWVyTXVsdGkgPSB0aGlzLmZpbHRlckxheWVyTXVsdGkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVGZWF0dXJlID0gdGhpcy5oaWRlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUZlYXR1cmVNdWx0aSA9IHRoaXMuaGlkZUZlYXR1cmVNdWx0aS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyczogW10sXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgYXJyQ2hlY2tlZDogW10sXG4gICAgICBvcGVuZWRMaXN0OiAtMVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmZpbHRlciA9IHRoaXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5maWx0ZXJzO1xuICAgIGxldCBzaG93QnV0dG9ucyA9IGZhbHNlO1xuICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZmVhdHVyZS1maWx0ZXItbGlzdFwiKTtcbiAgICBpZiAobGlzdERpdikge1xuICAgICAgc2hvd0J1dHRvbnMgPSAhKGxpc3REaXYuc2Nyb2xsV2lkdGggPD0gbGlzdERpdi5jbGllbnRXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dCdXR0b25zID0gc2NvcGUucHJvcHMudGFyZ2V0ICYmICghKHNjb3BlLnByb3BzLnRhcmdldC5zY3JvbGxXaWR0aCA8PSBzY29wZS5wcm9wcy50YXJnZXQuY2xpZW50V2lkdGgpKTtcbiAgICB9XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gbnVsbDtcbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlclJlc2V0QnV0dG9uKSkge1xuICAgICAgcmVzZXRCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItcmVzZXRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnJlc2V0RmlsdGVyKCl9Pnt0aGlzLmxhbmdDb25zdGFudHMuUkVTRVRfRklMVEVSfTwvYnV0dG9uPlxuICAgIH1cbiAgICBpZiAoISFwYXJzZUZsb2F0KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkaXYgPSBmaWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY2hlY2tlZEl0ZW1zID0gc2NvcGUuc3RhdGUuYXJyQ2hlY2tlZFtpbmRleF0gfHwgW107XG4gICAgICAgICAgbGV0IG9wZW5lZExpc3QgPSBzY29wZS5zdGF0ZS5vcGVuZWRMaXN0ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEZlYXR1cmVGaWx0ZXJNdWx0aUNoZWNrYm94IGZlYXR1cmU9e2ZlYXR1cmV9IG9wZW49e29wZW5lZExpc3R9IHNldE9wZW49e3RoaXMuc2V0T3Blbn0gY2hlY2tlZEl0ZW1zPXtjaGVja2VkSXRlbXN9IGZpbHRlckxheWVycz17dGhpcy5maWx0ZXJMYXllcnNNdWx0aX0gaWQ9e2luZGV4fSBrZXk9e2luZGV4fS8+XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2hvd0J1dHRvbnMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWZlYXR1cmUtZmlsdGVyXCJ9IHJlZj17dGhpcy53cmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXItbGlzdCBjNGctbm90LW92ZXJmbG93ZWRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLmhhbmRsZUNsaWNrSW5zaWRlKGV2dCl9IHJlZj17dGhpcy51bFJlZn0+XG4gICAgICAgICAgICAgICAge2Rpdn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAge3Jlc2V0QnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctYnRuLW5hdi1wcmV2aW91c1wifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC09MTAwfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LW5leHRcIn0gb25Nb3VzZVVwPXsoZXZ0KSA9PiB0aGlzLnVsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCArPTEwMH0vPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBkaXYgPSBmaWx0ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgY2hlY2tlZEl0ZW0gPSBzY29wZS5zdGF0ZS5hcnJDaGVja2VkW2luZGV4XTtcbiAgICAgICAgICBsZXQgb3BlbmVkTGlzdCA9IHNjb3BlLnN0YXRlLm9wZW5lZExpc3QgPT09IGluZGV4O1xuICAgICAgICAgIHJldHVybiA8RmVhdHVyZUZpbHRlckxpc3QgZmVhdHVyZT17ZmVhdHVyZX0gb3Blbj17b3BlbmVkTGlzdH0gc2V0T3Blbj17dGhpcy5zZXRPcGVufSBjaGVja2VkSXRlbT17Y2hlY2tlZEl0ZW19IGZpbHRlckxheWVycz17dGhpcy5maWx0ZXJMYXllcnN9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0vPlxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFzaG93QnV0dG9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZmVhdHVyZS1maWx0ZXJcIn0gcmVmPXt0aGlzLndyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1ub3Qtb3ZlcmZsb3dlZFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMuaGFuZGxlQ2xpY2tJbnNpZGUoZXZ0KX0gcmVmPXt0aGlzLnVsUmVmfT5cbiAgICAgICAgICAgICAgICB7ZGl2fVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICB7cmVzZXRCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlclwifSByZWY9e3RoaXMud3JhcHBlclJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1idG4tbmF2LXByZXZpb3VzXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy51bFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLT0xMDB9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLWJ0bi1uYXYtbmV4dFwifSBvbk1vdXNlVXA9eyhldnQpID0+IHRoaXMudWxSZWYuY3VycmVudC4gc2Nyb2xsTGVmdCArPTEwMH0vPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcImM0Zy1mZWF0dXJlLWZpbHRlci1saXN0IGM0Zy1vdmVyZmxvd2VkXCJ9IG9uTW91c2VVcD17KGV2dCkgPT4gdGhpcy5oYW5kbGVDbGlja0luc2lkZShldnQpfSByZWY9e3RoaXMudWxSZWZ9PlxuICAgICAgICAgICAgICAgIHtkaXZ9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIHtyZXNldEJ1dHRvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKDxkaXYvPik7XG4gIH1cblxuICBmaWx0ZXJMYXllcnMgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIG5ld1N0YXRlW2xpc3RJZF0gPSB7XG4gICAgICBpZGVudGlmaWVyOiBwcm9wZXJ0eSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXJyQ2hlY2tlZDogbmV3U3RhdGV9LCAoKSA9PiB7XG4gICAgICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpLmdldEFycmF5KCk7XG4gICAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgYWRkZWQgPSB0aGlzLnNob3dGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZmlsdGVyTGF5ZXJzTXVsdGkgKHByb3BlcnR5LCBsaXN0SWQsIHZhbHVlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkO1xuICAgIGxldCBjaGFuZ2VkRW50cnkgPSBuZXdTdGF0ZVtsaXN0SWRdO1xuXG4gICAgbGV0IGZvdW5kID0gY2hhbmdlZEVudHJ5LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWRlbnRpZmllciA9PT0gcHJvcGVydHkgJiYgZWxlbWVudC52YWx1ZSA9PT0gdmFsdWUpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmlsdGVyc1tsaXN0SWRdLmZpbHRlcnMpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGFuZ2VkRW50cnkucHVzaCh7XG4gICAgICAgICAgaWRlbnRpZmllcjogcHJvcGVydHksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJhbGxcIikge1xuICAgICAgICBjaGFuZ2VkRW50cnkgPSBbXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcm1JbmRleCA9IGNoYW5nZWRFbnRyeS5pbmRleE9mKGZvdW5kKTtcbiAgICAgICAgaWYgKHJtSW5kZXggPiAtMSkge1xuICAgICAgICAgIGNoYW5nZWRFbnRyeS5zcGxpY2Uocm1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdTdGF0ZVtsaXN0SWRdID0gY2hhbmdlZEVudHJ5O1xuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IG5ld1N0YXRlfSwgKCkgPT4ge1xuICAgICAgbGV0IGFyckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IGFkZGVkID0gdGhpcy5zaG93RmVhdHVyZU11bHRpKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRPcGVuIChvcGVuSWQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWRMaXN0ID09PSBvcGVuSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5lZExpc3Q6IC0xfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogb3BlbklkfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGaWx0ZXIgKCkge1xuICAgIGxldCBmaWx0ZXIgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBmaWx0ZXIucHVzaChbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FyckNoZWNrZWQ6IGZpbHRlcn0sICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBhZGRlZCA9IHRoaXMucmVzZXRGZWF0dXJlKHRoaXMuZmVhdHVyZXNbaV0sIGkpO1xuICAgICAgICAgIGlmIChhZGRlZCkge1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTGF5ZXIgKGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmdldExheWVycyAmJiB0eXBlb2YgbGF5ZXIuZ2V0TGF5ZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGxldCBhcnJMYXllcnMgPSBsYXllci5nZXRMYXllcnMoKS5nZXRBcnJheSgpO1xuICAgICAgYXJyTGF5ZXJzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJMYXllcihmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZShmZWF0dXJlLCBzb3VyY2UpKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJMYXllck11bHRpIChsYXllcikge1xuICAgIGlmIChsYXllci5nZXRMYXllcnMgJiYgdHlwZW9mIGxheWVyLmdldExheWVycyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgYXJyTGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcbiAgICAgIGFyckxheWVycy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGF5ZXJNdWx0aShmZWF0dXJlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGF5ZXIuZ2V0U3R5bGUgJiYgdHlwZW9mIGxheWVyLmdldFNvdXJjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgc291cmNlID0gbGF5ZXIuZ2V0U291cmNlKCkgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0U291cmNlKCkgOiBsYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZSAoZmVhdHVyZSwgb2JqQ2hlY2tlZCkge1xuICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICBpZiAob2JqQ2hlY2tlZC52YWx1ZSA9PT0gXCJvcGVuaW5nX2hvdXJzXCIgJiYgZmVhdHVyZS5nZXQoJ29wZW5pbmdfaG91cnMnKSkge1xuICAgICAgbGV0IGZlYXR1cmVIb3VycyA9IG5ldyBvcGVuaW5nX2hvdXJzKGZlYXR1cmUuZ2V0KCdvcGVuaW5nX2hvdXJzJyksIHthZGRyZXNzOiB7Y291bnRyeV9jb2RlOiBcImRlXCJ9fSk7XG4gICAgICByZXR1cm4gZmVhdHVyZUhvdXJzLmdldFN0YXRlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCEocHJvcGVydHkgPT09IFwiYWxsXCIgfHwgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSAmJiAhb2JqQ2hlY2tlZC52YWx1ZSkgfHwgKChvYmpDaGVja2VkLnZhbHVlID09IGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkgJiYgb2JqQ2hlY2tlZC52YWx1ZSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrRmVhdHVyZU11bHRpIChmZWF0dXJlLCBvYmpDaGVja2VkKSB7XG5cbiAgfVxuXG4gIGhpZGVGZWF0dXJlKGZlYXR1cmUsIHNvdXJjZSkge1xuICAgIGlmIChmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSl7XG4gICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgIGZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHRoaXMuaGlkZUZlYXR1cmUoZmVhdHVyZSwgc291cmNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdub0ZpbHRlcicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzaG93ID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnN0YXRlLmFyckNoZWNrZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5jaGVja0ZlYXR1cmUoZmVhdHVyZSwgdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ3NvdXJjZScsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgaGlkZUZlYXR1cmVNdWx0aShmZWF0dXJlLCBzb3VyY2UpIHtcbiAgICBpZiAoZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpe1xuICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gdGhpcy5oaWRlRmVhdHVyZU11bHRpKGZlYXR1cmUsIHNvdXJjZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgnbm9GaWx0ZXInKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgICAgbGV0IGZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hcnJDaGVja2VkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgYXJyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJyQ2hlY2tlZCl7XG4gICAgICAgICAgICBpZiAoYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBmaWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBsZXQgb2JqQ2hlY2tlZCA9IGFyckNoZWNrZWRbaV07XG4gICAgICAgICAgICAgIGxldCBwcm9wZXJ0eSA9IG9iakNoZWNrZWQuaWRlbnRpZmllcjtcbiAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgaWYgKChvYmpDaGVja2VkLnZhbHVlICYmIG9iakNoZWNrZWQudmFsdWUgPT09IGZlYXR1cmVQcm9wZXJ0eSkgfHwgIW9iakNoZWNrZWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFzaG93ICYmIGZpbHRlckFjdGl2ZSl7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzaG93RmVhdHVyZSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc2hvdyA9IHRydWU7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNob3cpIHtcbiAgICAgICAgc2hvdyA9IHRoaXMuY2hlY2tGZWF0dXJlKGZlYXR1cmUsIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZFtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGxldCBzb3VyY2UgPSBmZWF0dXJlLmdldCgnc291cmNlJyk7XG4gICAgICBmZWF0dXJlLnNldCgnc291cmNlJywgZmFsc2UpO1xuICAgICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICB0aGlzLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlc2V0RmVhdHVyZSAoZmVhdHVyZSwgaW5kZXgpIHtcbiAgICBsZXQgc291cmNlID0gZmVhdHVyZS5nZXQoJ3NvdXJjZScpO1xuICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgc291cmNlLmFkZEZlYXR1cmUoZmVhdHVyZSk7XG4gICAgdGhpcy5mZWF0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHNob3dGZWF0dXJlTXVsdGkgKGZlYXR1cmUsIGluZGV4KSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBsZXQgZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuYXJyQ2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXJyQ2hlY2tlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBhcnJDaGVja2VkID0gdGhpcy5zdGF0ZS5hcnJDaGVja2VkW2tleV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyQ2hlY2tlZCl7XG4gICAgICAgICAgaWYgKGFyckNoZWNrZWQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgb2JqQ2hlY2tlZCA9IGFyckNoZWNrZWRbaV07XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBvYmpDaGVja2VkLmlkZW50aWZpZXI7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgIGxldCBmZWF0dXJlUHJvcGVydHkgPSBmZWF0dXJlLmdldChwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIGlmICgob2JqQ2hlY2tlZC52YWx1ZSAmJiBvYmpDaGVja2VkLnZhbHVlID09PSBmZWF0dXJlUHJvcGVydHkpIHx8ICFvYmpDaGVja2VkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3cgfHwgIWZpbHRlckFjdGl2ZSkge1xuICAgICAgbGV0IHNvdXJjZSA9IGZlYXR1cmUuZ2V0KCdzb3VyY2UnKTtcbiAgICAgIGZlYXR1cmUuc2V0KCdzb3VyY2UnLCBmYWxzZSk7XG4gICAgICBzb3VyY2UuYWRkRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgIHRoaXMuZmVhdHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbG9hZEZpbHRlcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZmlsdGVyICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuaWQgKyBcIi9cIiArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmc7XG4gICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGpzb25EYXRhKSB7XG4gICAgICAgIGxldCBhcnJDaGVja2VkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbkRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighIXBhcnNlRmxvYXQoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmZpbHRlckhhbmRsaW5nKSkge1xuICAgICAgICAgICAgYXJyQ2hlY2tlZC5wdXNoKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJDaGVja2VkLnB1c2goe1xuICAgICAgICAgICAgICBpZGVudGlmaWVyOiBcImFsbFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUuc2V0U3RhdGUoe2ZpbHRlcnM6IGpzb25EYXRhLCBhcnJDaGVja2VkOiBhcnJDaGVja2VkfSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIEZpbHRlckZlYXR1cmVMaXN0IGlmIGNsaWNrZWQgb24gb3V0c2lkZSBvZiBlbGVtZW50XG4gICAqL1xuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy53cmFwcGVyUmVmICYmIHRoaXMud3JhcHBlclJlZi5jdXJyZW50ICYmICF0aGlzLndyYXBwZXJSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuZWRMaXN0OiAtMX0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGlja0luc2lkZShldmVudCkge1xuICAgIGxldCBwYXRoID0gZXZlbnQubmF0aXZlRXZlbnQucGF0aDtcbiAgICBpZiAocGF0aFswXSA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbmVkTGlzdDogLTF9KTtcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZpbHRlck11bHRpQ2hlY2tib3hJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYzRnLWZpbHRlci1mb3JtLWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7ZXZ0LnN0b3BQcm9wYWdhdGlvbigpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IHt0aGlzLnByb3BzLmZpbHRlckxheWVycyh0aGlzLnByb3BzLmZlYXR1cmUuaWRlbnRpZmllciwgdGhpcy5wcm9wcy5wYXJlbnRJZCwgdGhpcy5wcm9wcy5mZWF0dXJlLnZhbHVlKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmVhdHVyZS5pZGVudGlmaWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZGVjb2RlSFRNTCh0aGlzLnByb3BzLmZlYXR1cmUudHJhbnNsYXRpb24pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==