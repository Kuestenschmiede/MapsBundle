(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-feature-list_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-feature-list-item.jsx":
/*!*****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-feature-list-item.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterFeatureListItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _geom = _interopRequireDefault(__webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var popupFunctionsDE = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de */ "./src/Resources/public/js/c4g-maps-popup-info-de.js"));
var popupFunctionsEN = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en */ "./src/Resources/public/js/c4g-maps-popup-info-en.js"));
var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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
var RouterFeatureListItem = exports.RouterFeatureListItem = /*#__PURE__*/function (_Component) {
  function RouterFeatureListItem(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterFeatureListItem);
    _this = _callSuper(this, RouterFeatureListItem, [props]);
    var scope = _this;
    _this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    _this.clickFeature = _this.clickFeature.bind(_this);
    var element = null;
    if (props.layerValueRoute || props.layerValueArea) {
      element = _this.getElement();
    }
    _this.state = {
      element: element
    };
    return _this;
  }
  (0, _inherits2["default"])(RouterFeatureListItem, _Component);
  return (0, _createClass2["default"])(RouterFeatureListItem, [{
    key: "clickFeature",
    value: function clickFeature(event) {
      var scope = this;
      scope.props.setActiveId(scope.props.feature.id);
      var feature = scope.props.featureSource.getFeatureById(scope.props.feature.id);
      if (feature) {
        var extent = feature.getGeometry().getExtent();
        var width = jQuery(".c4g-sideboard.c4g-open").css('width');
        if (width) {
          width = width.split(".");
          width = Array.isArray(width) ? width[0] : width;
          width = parseInt(width) + 50;
        } else {
          width = 50;
        }
        var padding = [50, width, 50, 50];
        if (!scope.props.mapController.proxy.mapData.preventZoomResults) {
          // do not attempt to fit empty extents (Infinity also means empty in this context)
          if (extent && extent.length > 0 && extent[0] !== Infinity) {
            scope.props.mapController.map.getView().fit(extent, {
              padding: padding,
              maxZoom: scope.props.mapController.map.getView().getZoom() || 16
            });
          }
        } else {
          scope.props.mapController.map.getView().setCenter([extent[0], extent[1]]);
        }
      }
      // refresh css classes
      // console.log(jQuery(this));
      // this.props.setActiveId()
      // jQuery(this).parent().children('li').each(function (index, element) {
      //   jQuery(element).addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
      // });
      // jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
      // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!this.state.element || this.props.layerValueRoute !== prevProps.layerValueRoute || this.props.layerValueArea !== prevProps.layerValueArea || this.props.feature !== prevProps.feature) {
        //only get popup if not already set or layer changes
        var element = this.getElement();
        if (element) {
          this.setState({
            element: this.getElement()
          });
        }
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      var scope = this;
      var currentFeature = null;
      if (this.props.featureSource && this.props.featureSource.forEachFeature) {
        this.props.featureSource.forEachFeature(function (feature) {
          if (feature.get('tid') === scope.props.feature.id) {
            currentFeature = feature;
          }
        });
      }
      var featureEntryContent = "";
      var objHook = null;
      if (currentFeature) {
        if (this.props.type === "overpass") {
          if (currentFeature.get('locstyle')) {
            var styleId = currentFeature.get('locstyle');
            var styleSrc = '';
            var locstyle = this.props.mapController.proxy.locationStyleController.arrLocStyles[styleId];
            if (locstyle && locstyle.locStyleArr) {
              styleSrc = locstyle.locStyleArr.styletype === "cust_icon" ? locstyle.locStyleArr.icon_src : locstyle.locStyleArr.styletype === "cust_icon_svg" ? locstyle.locStyleArr.svgSrc : "";
            }
            featureEntryContent = this.popupFunctions.fnStandardInfoPopup(currentFeature, styleSrc);
          }
        } else if (this.props.type === "notOverpass") {
          if (this.props.feature && this.props.feature.popup) {
            featureEntryContent = this.props.feature.popup;
          }
        } else {
          var layerValue = this.props.routeMode === "route" ? this.props.layerValueRoute : this.props.layerValueArea;
          objHook = {
            entry: "",
            id: this.props.counter,
            feature: this.props.feature,
            // values: values,
            labels: ['name'],
            activeLayerValue: layerValue
          };
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, objHook);
          featureEntryContent = objHook.entry;
        }
        var element = {
          __html: featureEntryContent + "<br>"
        };
        return element;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.element) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, this.props.feature.id), /*#__PURE__*/_react["default"].createElement("li", {
          ref: this.props.refProp,
          dangerouslySetInnerHTML: this.state.element,
          className: this.props.active ? "route-features-list-element c4g-active" : "route-features-list-element c4g-inactive",
          onMouseDown: this.clickFeature
        }));
      }
      return null;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-router-feature-list.jsx":
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-feature-list.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gRouterFeatureListItem = __webpack_require__(/*! ./c4g-router-feature-list-item.jsx */ "./src/Resources/public/js/components/c4g-router-feature-list-item.jsx");
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
var RouterFeatureList = exports["default"] = /*#__PURE__*/function (_Component) {
  function RouterFeatureList(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, RouterFeatureList);
    _this = _callSuper(this, RouterFeatureList, [props]);
    _this.setActiveId = _this.setActiveId.bind(_this);
    _this.features = {};
    return _this;
  }
  (0, _inherits2["default"])(RouterFeatureList, _Component);
  return (0, _createClass2["default"])(RouterFeatureList, [{
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({
        "activeId": activeId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var sortedFeatures = this.sortFeatures();
      if (!sortedFeatures) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, this.props.header, this.props.switcher, /*#__PURE__*/_react["default"].createElement("ul", null, sortedFeatures.map(function (feature, index) {
        _this2.features[feature.id] = /*#__PURE__*/_react["default"].createRef();
        return /*#__PURE__*/_react["default"].createElement(_c4gRouterFeatureListItem.RouterFeatureListItem, {
          feature: feature,
          refProp: _this2.features[feature.id],
          type: _this2.props.featureList.type,
          active: _this2.props.activeId === feature.id,
          setActiveId: _this2.props.setActiveId,
          routeMode: _this2.props.routeMode,
          mapController: _this2.props.mapController,
          layerRoute: _this2.props.layerRoute,
          layerArea: _this2.props.layerArea,
          featureSource: _this2.props.featureSource,
          counter: index,
          key: index,
          layerValueRoute: _this2.props.layerValueRoute,
          layerValueArea: _this2.props.layerValueArea
        });
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.activeId !== this.props.activeId) {
        if (this.props.activeId) {
          var ref = this.features[this.props.activeId];
          // ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
          var scrollElement = document.querySelector(".c4g-router-result-container");
          scrollElement.scrollTo(0, ref.current.offsetTop - 100);
        }
      }
    }
  }, {
    key: "sortFeatures",
    value: function sortFeatures() {
      var routerLayers = this.props.mapController.data.routerLayers;
      var currentLayer = this.props.routeMode === "area" ? this.props.layerArea : this.props.layerRoute;
      var currentLayerValue = this.props.routeMode === "area" ? this.props.layerValueArea : this.props.layerValueRoute;
      if (!routerLayers) {
        return;
      }
      var currentLabelProp = routerLayers[currentLayer][currentLayerValue]['mapLabel'];
      var features = (0, _toConsumableArray2["default"])(this.props.featureList.features);
      return features.sort(function (a, b) {
        var aValues = a,
          bValues = b;
        if (a.tags && b.tags) {
          aValues = a.tags;
          bValues = b.tags;
        }
        if (isNaN(aValues[currentLabelProp])) {
          // string values
          return aValues[currentLabelProp] < bValues[currentLabelProp] ? -1 : 1;
        } else {
          // numeric values
          return aValues[currentLabelProp] - bValues[currentLabelProp];
        }
      });
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWZlYXR1cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5QkFBeUIsU0FBUyx5QkFBeUIsa0I7Ozs7Ozs7Ozs7QUNKaEc7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlCQUF5QixTQUFTLHlCQUF5QixrQjs7Ozs7Ozs7OztBQ0g5RjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUJBQXlCLFNBQVMseUJBQXlCLGtCOzs7Ozs7Ozs7O0FDSGhHLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3QjtBQUN4RCxzQkFBc0IsbUJBQU8sQ0FBQyxzRkFBc0I7QUFDcEQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDO0FBQzFFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUJBQXlCLFNBQVMseUJBQXlCLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHaEcsSUFBQUEsTUFBQSxHQUFBQyx1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFDLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUYsbUJBQUE7QUFFQSxJQUFBRyxnQkFBQSxHQUFBSCxtQkFBQTtBQUNBLElBQUFJLEtBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxnQkFBQSxHQUFBTix1QkFBQSxDQUFBQyxtQkFBQTtBQUNBLElBQUFNLGdCQUFBLEdBQUFQLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQU8sYUFBQSxHQUFBUCxtQkFBQTtBQUE0RixTQUFBRCx3QkFBQVMsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQVgsdUJBQUEsWUFBQUEsd0JBQUFTLENBQUEsRUFBQUMsQ0FBQSxT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SyxNQUFNLEdBQUcsSUFBSSxDQUFDckUsS0FBSyxDQUFDWSxjQUFjLEdBQUcsSUFBSSxDQUFDWixLQUFLLENBQUNXLGVBQWU7TUFFbEgsSUFBSSxDQUFDb0csWUFBWSxFQUFFO1FBQ2pCO01BQ0Y7TUFFQSxJQUFNRyxnQkFBZ0IsR0FBR0gsWUFBWSxDQUFDQyxZQUFZLENBQUMsQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUM7TUFDbEYsSUFBSXJCLFFBQVEsT0FBQXVCLG1CQUFBLGFBQU8sSUFBSSxDQUFDbkgsS0FBSyxDQUFDc0csV0FBVyxDQUFDVixRQUFRLENBQUM7TUFDbkQsT0FBT0EsUUFBUSxDQUFDd0IsSUFBSSxDQUFDLFVBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO1FBQ25DLElBQUlDLE9BQU8sR0FBR0YsQ0FBQztVQUFFRyxPQUFPLEdBQUdGLENBQUM7UUFDNUIsSUFBSUQsQ0FBQyxDQUFDSSxJQUFJLElBQUlILENBQUMsQ0FBQ0csSUFBSSxFQUFFO1VBQ3BCRixPQUFPLEdBQUdGLENBQUMsQ0FBQ0ksSUFBSTtVQUNoQkQsT0FBTyxHQUFHRixDQUFDLENBQUNHLElBQUk7UUFDbEI7UUFDQSxJQUFJQyxLQUFLLENBQUNILE9BQU8sQ0FBQ0wsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO1VBQ3BDO1VBQ0EsT0FBT0ssT0FBTyxDQUFDTCxnQkFBZ0IsQ0FBQyxHQUFHTSxPQUFPLENBQUNOLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2RSxDQUFDLE1BQU07VUFDTDtVQUNBLE9BQU9LLE9BQU8sQ0FBQ0wsZ0JBQWdCLENBQUMsR0FBR00sT0FBTyxDQUFDTixnQkFBZ0IsQ0FBQztRQUM5RDtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7QUFBQSxFQXpFNEN6QixnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5KHIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRvTG9uTGF0LCBmcm9tTG9uTGF0LCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0RFIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1kZVwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNFTiBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZW5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5wb3B1cEZ1bmN0aW9ucyA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nID09PSBcImRlXCIgPyBwb3B1cEZ1bmN0aW9uc0RFIDogcG9wdXBGdW5jdGlvbnNFTjtcbiAgICB0aGlzLmNsaWNrRmVhdHVyZSA9IHRoaXMuY2xpY2tGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICAgIGlmIChwcm9wcy5sYXllclZhbHVlUm91dGUgfHwgcHJvcHMubGF5ZXJWYWx1ZUFyZWEpIHtcbiAgICAgIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgY2xpY2tGZWF0dXJlIChldmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBzY29wZS5wcm9wcy5zZXRBY3RpdmVJZChzY29wZS5wcm9wcy5mZWF0dXJlLmlkKTtcbiAgICBsZXQgZmVhdHVyZSA9IHNjb3BlLnByb3BzLmZlYXR1cmVTb3VyY2UuZ2V0RmVhdHVyZUJ5SWQoc2NvcGUucHJvcHMuZmVhdHVyZS5pZClcbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgbGV0IGV4dGVudCA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKTtcbiAgICAgIGxldCB3aWR0aCA9IGpRdWVyeShcIi5jNGctc2lkZWJvYXJkLmM0Zy1vcGVuXCIpLmNzcygnd2lkdGgnKTtcbiAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHdpZHRoLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgd2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdIDogd2lkdGg7XG4gICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgIDUwO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpZHRoID0gNTA7XG4gICAgICB9XG4gICAgICBsZXQgcGFkZGluZyA9IFs1MCwgd2lkdGgsIDUwLCA1MF07XG4gICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubWFwRGF0YS5wcmV2ZW50Wm9vbVJlc3VsdHMpIHtcbiAgICAgICAgLy8gZG8gbm90IGF0dGVtcHQgdG8gZml0IGVtcHR5IGV4dGVudHMgKEluZmluaXR5IGFsc28gbWVhbnMgZW1wdHkgaW4gdGhpcyBjb250ZXh0KVxuICAgICAgICBpZiAoZXh0ZW50ICYmIGV4dGVudC5sZW5ndGggPiAwICYmIGV4dGVudFswXSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwge1xuICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgICAgICAgIG1heFpvb206IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCkgfHwgMTZcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIoW2V4dGVudFswXSwgZXh0ZW50WzFdXSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVmcmVzaCBjc3MgY2xhc3Nlc1xuICAgIC8vIGNvbnNvbGUubG9nKGpRdWVyeSh0aGlzKSk7XG4gICAgLy8gdGhpcy5wcm9wcy5zZXRBY3RpdmVJZCgpXG4gICAgLy8galF1ZXJ5KHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdsaScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgLy8gICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAvLyB9KTtcbiAgICAvLyBqUXVlcnkodGhpcykuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAvLyBqUXVlcnkoXCJkaXYuYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogZW50cnkub2Zmc2V0VG9wIC0gMzAwfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmVsZW1lbnQgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGUgIT09IHByZXZQcm9wcy5sYXllclZhbHVlUm91dGUgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYSAhPT0gcHJldlByb3BzLmxheWVyVmFsdWVBcmVhIHx8XG4gICAgICAgIHRoaXMucHJvcHMuZmVhdHVyZSAhPT0gcHJldlByb3BzLmZlYXR1cmVcbiAgICApIHsgLy9vbmx5IGdldCBwb3B1cCBpZiBub3QgYWxyZWFkeSBzZXQgb3IgbGF5ZXIgY2hhbmdlc1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RWxlbWVudCAoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjdXJyZW50RmVhdHVyZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZVNvdXJjZSAmJiB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUpIHtcbiAgICAgIHRoaXMucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZShmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgICAgY3VycmVudEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBvYmpIb29rID0gbnVsbDtcbiAgICBpZiAoY3VycmVudEZlYXR1cmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwib3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAoY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpKSB7XG4gICAgICAgICAgbGV0IHN0eWxlSWQgPSBjdXJyZW50RmVhdHVyZS5nZXQoJ2xvY3N0eWxlJyk7XG4gICAgICAgICAgbGV0IHN0eWxlU3JjID0gJyc7XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXTtcbiAgICAgICAgICBpZiAobG9jc3R5bGUgJiYgbG9jc3R5bGUubG9jU3R5bGVBcnIpIHtcbiAgICAgICAgICAgIHN0eWxlU3JjID0gbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvblwiID8gbG9jc3R5bGUubG9jU3R5bGVBcnIuaWNvbl9zcmMgOiBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdHlsZXR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiID8gbG9jc3R5bGUubG9jU3R5bGVBcnIuc3ZnU3JjIDogXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IHRoaXMucG9wdXBGdW5jdGlvbnMuZm5TdGFuZGFyZEluZm9Qb3B1cChjdXJyZW50RmVhdHVyZSwgc3R5bGVTcmMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJub3RPdmVycGFzc1wiKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUgJiYgdGhpcy5wcm9wcy5mZWF0dXJlLnBvcHVwKSB7XG4gICAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxheWVyVmFsdWUgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhO1xuICAgICAgICBvYmpIb29rID0gIHtcbiAgICAgICAgICBlbnRyeTogXCJcIixcbiAgICAgICAgICBpZDogdGhpcy5wcm9wcy5jb3VudGVyLFxuICAgICAgICAgIGZlYXR1cmU6IHRoaXMucHJvcHMuZmVhdHVyZSxcbiAgICAgICAgICAvLyB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBsYWJlbHM6IFsnbmFtZSddLFxuICAgICAgICAgIGFjdGl2ZUxheWVyVmFsdWU6IGxheWVyVmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5yb3V0ZVBsdWdpbkVudHJ5LCBvYmpIb29rKTtcbiAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IG9iakhvb2suZW50cnk7XG4gICAgICB9XG4gICAgICBsZXQgZWxlbWVudCA9IHtfX2h0bWw6IGZlYXR1cmVFbnRyeUNvbnRlbnQgKyBcIjxicj5cIn07XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZWxlbWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5mZWF0dXJlLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgIDxsaSByZWY9e3RoaXMucHJvcHMucmVmUHJvcH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3RoaXMuc3RhdGUuZWxlbWVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuYWN0aXZlID8gXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWFjdGl2ZVwiIDogXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWluYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuY2xpY2tGZWF0dXJlfS8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVyRmVhdHVyZUxpc3RJdGVtfSBmcm9tIFwiLi9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVJZCA9IHRoaXMuc2V0QWN0aXZlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gIH1cblxuICBzZXRBY3RpdmVJZChhY3RpdmVJZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XCJhY3RpdmVJZFwiOiBhY3RpdmVJZH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNvcnRlZEZlYXR1cmVzID0gdGhpcy5zb3J0RmVhdHVyZXMoKTtcbiAgICBpZiAoIXNvcnRlZEZlYXR1cmVzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgIHt0aGlzLnByb3BzLnN3aXRjaGVyfVxuICAgICAgICA8dWw+XG4gICAgICAgICAge3NvcnRlZEZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXNbZmVhdHVyZS5pZF0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgICAgIHJldHVybiA8Um91dGVyRmVhdHVyZUxpc3RJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHJlZlByb3A9e3RoaXMuZmVhdHVyZXNbZmVhdHVyZS5pZF19IHR5cGU9e3RoaXMucHJvcHMuZmVhdHVyZUxpc3QudHlwZX0gYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUlkID09PSBmZWF0dXJlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSWQ9e3RoaXMucHJvcHMuc2V0QWN0aXZlSWR9IHJvdXRlTW9kZT17dGhpcy5wcm9wcy5yb3V0ZU1vZGV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUm91dGU9e3RoaXMucHJvcHMubGF5ZXJSb3V0ZX0gbGF5ZXJBcmVhPXt0aGlzLnByb3BzLmxheWVyQXJlYX0gZmVhdHVyZVNvdXJjZT17dGhpcy5wcm9wcy5mZWF0dXJlU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcj17aW5kZXh9IGtleT17aW5kZXh9IGxheWVyVmFsdWVSb3V0ZT17dGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGV9IGxheWVyVmFsdWVBcmVhPXt0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlByb3BzLmFjdGl2ZUlkICE9PSB0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmZlYXR1cmVzW3RoaXMucHJvcHMuYWN0aXZlSWRdO1xuICAgICAgICAvLyByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xuICAgICAgICBsZXQgc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1yZXN1bHQtY29udGFpbmVyXCIpO1xuICAgICAgICBzY3JvbGxFbGVtZW50LnNjcm9sbFRvKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcCAtIDEwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc29ydEZlYXR1cmVzKCkge1xuICAgIGNvbnN0IHJvdXRlckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICBjb25zdCBjdXJyZW50TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJSb3V0ZTtcbiAgICBjb25zdCBjdXJyZW50TGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWEgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZTtcblxuICAgIGlmICghcm91dGVyTGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudExhYmVsUHJvcCA9IHJvdXRlckxheWVyc1tjdXJyZW50TGF5ZXJdW2N1cnJlbnRMYXllclZhbHVlXVsnbWFwTGFiZWwnXTtcbiAgICBsZXQgZmVhdHVyZXMgPSBbLi4udGhpcy5wcm9wcy5mZWF0dXJlTGlzdC5mZWF0dXJlc107XG4gICAgcmV0dXJuIGZlYXR1cmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGxldCBhVmFsdWVzID0gYSwgYlZhbHVlcyA9IGI7XG4gICAgICBpZiAoYS50YWdzICYmIGIudGFncykge1xuICAgICAgICBhVmFsdWVzID0gYS50YWdzO1xuICAgICAgICBiVmFsdWVzID0gYi50YWdzO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0pKSB7XG4gICAgICAgIC8vIHN0cmluZyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPCBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gLSBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZW9tIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfcHJvaiIsInBvcHVwRnVuY3Rpb25zREUiLCJwb3B1cEZ1bmN0aW9uc0VOIiwiX2M0Z01hcHNVdGlscyIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJzZXQiLCJfdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZjIiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJCb29sZWFuIiwicHJvdG90eXBlIiwidmFsdWVPZiIsIlJvdXRlckZlYXR1cmVMaXN0SXRlbSIsImV4cG9ydHMiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJzY29wZSIsInBvcHVwRnVuY3Rpb25zIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJsYW5nIiwiY2xpY2tGZWF0dXJlIiwiYmluZCIsImVsZW1lbnQiLCJsYXllclZhbHVlUm91dGUiLCJsYXllclZhbHVlQXJlYSIsImdldEVsZW1lbnQiLCJzdGF0ZSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJldmVudCIsInNldEFjdGl2ZUlkIiwiZmVhdHVyZSIsImlkIiwiZmVhdHVyZVNvdXJjZSIsImdldEZlYXR1cmVCeUlkIiwiZXh0ZW50IiwiZ2V0R2VvbWV0cnkiLCJnZXRFeHRlbnQiLCJ3aWR0aCIsImpRdWVyeSIsImNzcyIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJwYWRkaW5nIiwicHJveHkiLCJtYXBEYXRhIiwicHJldmVudFpvb21SZXN1bHRzIiwibGVuZ3RoIiwiSW5maW5pdHkiLCJtYXAiLCJnZXRWaWV3IiwiZml0IiwibWF4Wm9vbSIsImdldFpvb20iLCJzZXRDZW50ZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInNldFN0YXRlIiwiY3VycmVudEZlYXR1cmUiLCJmb3JFYWNoRmVhdHVyZSIsImZlYXR1cmVFbnRyeUNvbnRlbnQiLCJvYmpIb29rIiwidHlwZSIsInN0eWxlSWQiLCJzdHlsZVNyYyIsImxvY3N0eWxlIiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJsb2NTdHlsZUFyciIsInN0eWxldHlwZSIsImljb25fc3JjIiwic3ZnU3JjIiwiZm5TdGFuZGFyZEluZm9Qb3B1cCIsInBvcHVwIiwibGF5ZXJWYWx1ZSIsInJvdXRlTW9kZSIsImVudHJ5IiwiY291bnRlciIsImxhYmVscyIsImFjdGl2ZUxheWVyVmFsdWUiLCJ1dGlscyIsImNhbGxIb29rRnVuY3Rpb25zIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwicm91dGVQbHVnaW5FbnRyeSIsIl9faHRtbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInJlZiIsInJlZlByb3AiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImNsYXNzTmFtZSIsImFjdGl2ZSIsIm9uTW91c2VEb3duIiwiQ29tcG9uZW50IiwiX2M0Z1JvdXRlckZlYXR1cmVMaXN0SXRlbSIsIlJvdXRlckZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJhY3RpdmVJZCIsIl90aGlzMiIsInNvcnRlZEZlYXR1cmVzIiwic29ydEZlYXR1cmVzIiwiaGVhZGVyIiwic3dpdGNoZXIiLCJpbmRleCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZmVhdHVyZUxpc3QiLCJsYXllclJvdXRlIiwibGF5ZXJBcmVhIiwic2Nyb2xsRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwiY3VycmVudCIsIm9mZnNldFRvcCIsInJvdXRlckxheWVycyIsImN1cnJlbnRMYXllciIsImN1cnJlbnRMYXllclZhbHVlIiwiY3VycmVudExhYmVsUHJvcCIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJzb3J0IiwiYSIsImIiLCJhVmFsdWVzIiwiYlZhbHVlcyIsInRhZ3MiLCJpc05hTiJdLCJzb3VyY2VSb290IjoiIn0=