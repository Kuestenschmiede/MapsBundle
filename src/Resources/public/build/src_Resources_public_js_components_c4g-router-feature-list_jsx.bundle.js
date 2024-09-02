(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-feature-list_jsx"],{

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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWZlYXR1cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsS0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUVBLElBQUFHLGdCQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLGdCQUFBLEdBQUFOLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQU0sZ0JBQUEsR0FBQVAsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBTyxhQUFBLEdBQUFQLG1CQUFBO0FBQTRGLFNBQUFRLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBVix3QkFBQVUsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsSUFBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFVBQUEsU0FBQUosQ0FBQSxlQUFBQSxDQUFBLGdCQUFBSyxPQUFBLENBQUFMLENBQUEsMEJBQUFBLENBQUEsc0JBQUFBLENBQUEsUUFBQUcsQ0FBQSxHQUFBSix3QkFBQSxDQUFBRyxDQUFBLE9BQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUFOLENBQUEsVUFBQUcsQ0FBQSxDQUFBSSxHQUFBLENBQUFQLENBQUEsT0FBQVEsQ0FBQSxLQUFBQyxTQUFBLFVBQUFDLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxjQUFBLElBQUFELE1BQUEsQ0FBQUUsd0JBQUEsV0FBQUMsQ0FBQSxJQUFBZCxDQUFBLG9CQUFBYyxDQUFB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QUF3QixtQkFBTyxDQUFDLDBGQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMseUJBQXlCLFNBQVMseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb2x5Z29uIGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge3RyYW5zZm9ybSwgdG9Mb25MYXQsIGZyb21Mb25MYXQsIHRyYW5zZm9ybUV4dGVudH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zREUgZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1wb3B1cC1pbmZvLWRlXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0VOIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1lblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB0aGlzLnBvcHVwRnVuY3Rpb25zID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIiA/IHBvcHVwRnVuY3Rpb25zREUgOiBwb3B1cEZ1bmN0aW9uc0VOO1xuICAgIHRoaXMuY2xpY2tGZWF0dXJlID0gdGhpcy5jbGlja0ZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG4gICAgaWYgKHByb3BzLmxheWVyVmFsdWVSb3V0ZSB8fCBwcm9wcy5sYXllclZhbHVlQXJlYSkge1xuICAgICAgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWxlbWVudDogZWxlbWVudFxuICAgIH07XG4gIH1cblxuICBjbGlja0ZlYXR1cmUgKGV2ZW50KSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHNjb3BlLnByb3BzLnNldEFjdGl2ZUlkKHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpO1xuICAgIGxldCBmZWF0dXJlID0gc2NvcGUucHJvcHMuZmVhdHVyZVNvdXJjZS5nZXRGZWF0dXJlQnlJZChzY29wZS5wcm9wcy5mZWF0dXJlLmlkKVxuICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICBsZXQgZXh0ZW50ID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpO1xuICAgICAgbGV0IHdpZHRoID0galF1ZXJ5KFwiLmM0Zy1zaWRlYm9hcmQuYzRnLW9wZW5cIikuY3NzKCd3aWR0aCcpO1xuICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGguc3BsaXQoXCIuXCIpO1xuICAgICAgICB3aWR0aCA9IEFycmF5LmlzQXJyYXkod2lkdGgpID8gd2lkdGhbMF0gOiB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBwYXJzZUludCh3aWR0aCkgKyAgNTA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2lkdGggPSA1MDtcbiAgICAgIH1cbiAgICAgIGxldCBwYWRkaW5nID0gWzUwLCB3aWR0aCwgNTAsIDUwXTtcbiAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5tYXBEYXRhLnByZXZlbnRab29tUmVzdWx0cykge1xuICAgICAgICAvLyBkbyBub3QgYXR0ZW1wdCB0byBmaXQgZW1wdHkgZXh0ZW50cyAoSW5maW5pdHkgYWxzbyBtZWFucyBlbXB0eSBpbiB0aGlzIGNvbnRleHQpXG4gICAgICAgIGlmIChleHRlbnQgJiYgZXh0ZW50Lmxlbmd0aCA+IDAgJiYgZXh0ZW50WzBdICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5maXQoZXh0ZW50LCB7XG4gICAgICAgICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgICAgICAgbWF4Wm9vbTogc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmdldFpvb20oKSB8fCAxNlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihbZXh0ZW50WzBdLCBleHRlbnRbMV1dKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyByZWZyZXNoIGNzcyBjbGFzc2VzXG4gICAgLy8gY29uc29sZS5sb2coalF1ZXJ5KHRoaXMpKTtcbiAgICAvLyB0aGlzLnByb3BzLnNldEFjdGl2ZUlkKClcbiAgICAvLyBqUXVlcnkodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAvLyAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgIC8vIH0pO1xuICAgIC8vIGpRdWVyeSh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgIC8vIGpRdWVyeShcImRpdi5jNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXJcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBlbnRyeS5vZmZzZXRUb3AgLSAzMDB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuZWxlbWVudCB8fFxuICAgICAgICB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZSAhPT0gcHJldlByb3BzLmxheWVyVmFsdWVSb3V0ZSB8fFxuICAgICAgICB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhICE9PSBwcmV2UHJvcHMubGF5ZXJWYWx1ZUFyZWEgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5mZWF0dXJlICE9PSBwcmV2UHJvcHMuZmVhdHVyZVxuICAgICkgeyAvL29ubHkgZ2V0IHBvcHVwIGlmIG5vdCBhbHJlYWR5IHNldCBvciBsYXllciBjaGFuZ2VzXG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZWxlbWVudDogdGhpcy5nZXRFbGVtZW50KClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRFbGVtZW50ICgpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGN1cnJlbnRGZWF0dXJlID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlU291cmNlICYmIHRoaXMucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZSkge1xuICAgICAgdGhpcy5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgndGlkJykgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpIHtcbiAgICAgICAgICBjdXJyZW50RmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgZmVhdHVyZUVudHJ5Q29udGVudCA9IFwiXCI7XG4gICAgbGV0IG9iakhvb2sgPSBudWxsO1xuICAgIGlmIChjdXJyZW50RmVhdHVyZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJvdmVycGFzc1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RmVhdHVyZS5nZXQoJ2xvY3N0eWxlJykpIHtcbiAgICAgICAgICBsZXQgc3R5bGVJZCA9IGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKTtcbiAgICAgICAgICBsZXQgc3R5bGVTcmMgPSAnJztcbiAgICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdO1xuICAgICAgICAgIGlmIChsb2NzdHlsZSAmJiBsb2NzdHlsZS5sb2NTdHlsZUFycikge1xuICAgICAgICAgICAgc3R5bGVTcmMgPSBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdHlsZXR5cGUgPT09IFwiY3VzdF9pY29uXCIgPyBsb2NzdHlsZS5sb2NTdHlsZUFyci5pY29uX3NyYyA6IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgPyBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdmdTcmMgOiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gdGhpcy5wb3B1cEZ1bmN0aW9ucy5mblN0YW5kYXJkSW5mb1BvcHVwKGN1cnJlbnRGZWF0dXJlLCBzdHlsZVNyYyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm5vdE92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZSAmJiB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXApIHtcbiAgICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gdGhpcy5wcm9wcy5mZWF0dXJlLnBvcHVwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWE7XG4gICAgICAgIG9iakhvb2sgPSAge1xuICAgICAgICAgIGVudHJ5OiBcIlwiLFxuICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmNvdW50ZXIsXG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5wcm9wcy5mZWF0dXJlLFxuICAgICAgICAgIC8vIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGxhYmVsczogWyduYW1lJ10sXG4gICAgICAgICAgYWN0aXZlTGF5ZXJWYWx1ZTogbGF5ZXJWYWx1ZVxuICAgICAgICB9O1xuICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnJvdXRlUGx1Z2luRW50cnksIG9iakhvb2spO1xuICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gb2JqSG9vay5lbnRyeTtcbiAgICAgIH1cbiAgICAgIGxldCBlbGVtZW50ID0ge19faHRtbDogZmVhdHVyZUVudHJ5Q29udGVudCArIFwiPGJyPlwifTtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5lbGVtZW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmZlYXR1cmUuaWR9PC9zcGFuPlxuICAgICAgICAgICAgPGxpIHJlZj17dGhpcy5wcm9wcy5yZWZQcm9wfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17dGhpcy5zdGF0ZS5lbGVtZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmUgPyBcInJvdXRlLWZlYXR1cmVzLWxpc3QtZWxlbWVudCBjNGctYWN0aXZlXCIgOiBcInJvdXRlLWZlYXR1cmVzLWxpc3QtZWxlbWVudCBjNGctaW5hY3RpdmVcIn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5jbGlja0ZlYXR1cmV9Lz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZXJGZWF0dXJlTGlzdEl0ZW19IGZyb20gXCIuL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckZlYXR1cmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZUlkID0gdGhpcy5zZXRBY3RpdmVJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgfVxuXG4gIHNldEFjdGl2ZUlkKGFjdGl2ZUlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcImFjdGl2ZUlkXCI6IGFjdGl2ZUlkfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkRmVhdHVyZXMgPSB0aGlzLnNvcnRGZWF0dXJlcygpO1xuICAgIGlmICghc29ydGVkRmVhdHVyZXMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7c29ydGVkRmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcmVmUHJvcD17dGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXX0gdHlwZT17dGhpcy5wcm9wcy5mZWF0dXJlTGlzdC50eXBlfSBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlSWQgPT09IGZlYXR1cmUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJZD17dGhpcy5wcm9wcy5zZXRBY3RpdmVJZH0gcm91dGVNb2RlPXt0aGlzLnByb3BzLnJvdXRlTW9kZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJSb3V0ZT17dGhpcy5wcm9wcy5sYXllclJvdXRlfSBsYXllckFyZWE9e3RoaXMucHJvcHMubGF5ZXJBcmVhfSBmZWF0dXJlU291cmNlPXt0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyPXtpbmRleH0ga2V5PXtpbmRleH0gbGF5ZXJWYWx1ZVJvdXRlPXt0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZX0gbGF5ZXJWYWx1ZUFyZWE9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlSWQgIT09IHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZmVhdHVyZXNbdGhpcy5wcm9wcy5hY3RpdmVJZF07XG4gICAgICAgIC8vIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gICAgICAgIGxldCBzY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXJcIik7XG4gICAgICAgIHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG8oMCwgcmVmLmN1cnJlbnQub2Zmc2V0VG9wIC0gMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0RmVhdHVyZXMoKSB7XG4gICAgY29uc3Qgcm91dGVyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJBcmVhIDogdGhpcy5wcm9wcy5sYXllclJvdXRlO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlO1xuXG4gICAgaWYgKCFyb3V0ZXJMYXllcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TGFiZWxQcm9wID0gcm91dGVyTGF5ZXJzW2N1cnJlbnRMYXllcl1bY3VycmVudExheWVyVmFsdWVdWydtYXBMYWJlbCddO1xuICAgIGxldCBmZWF0dXJlcyA9IFsuLi50aGlzLnByb3BzLmZlYXR1cmVMaXN0LmZlYXR1cmVzXTtcbiAgICByZXR1cm4gZmVhdHVyZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgbGV0IGFWYWx1ZXMgPSBhLCBiVmFsdWVzID0gYjtcbiAgICAgIGlmIChhLnRhZ3MgJiYgYi50YWdzKSB7XG4gICAgICAgIGFWYWx1ZXMgPSBhLnRhZ3M7XG4gICAgICAgIGJWYWx1ZXMgPSBiLnRhZ3M7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4oYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSkpIHtcbiAgICAgICAgLy8gc3RyaW5nIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA8IGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPyAtMSA6IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBudW1lcmljIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSAtIGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZW9tIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfcHJvaiIsInBvcHVwRnVuY3Rpb25zREUiLCJwb3B1cEZ1bmN0aW9uc0VOIiwiX2M0Z01hcHNVdGlscyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsImUiLCJXZWFrTWFwIiwiciIsInQiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwicG9wdXBGdW5jdGlvbnMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImxhbmciLCJjbGlja0ZlYXR1cmUiLCJiaW5kIiwiZWxlbWVudCIsImxheWVyVmFsdWVSb3V0ZSIsImxheWVyVmFsdWVBcmVhIiwiZ2V0RWxlbWVudCIsInN0YXRlIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50Iiwic2V0QWN0aXZlSWQiLCJmZWF0dXJlIiwiaWQiLCJmZWF0dXJlU291cmNlIiwiZ2V0RmVhdHVyZUJ5SWQiLCJleHRlbnQiLCJnZXRHZW9tZXRyeSIsImdldEV4dGVudCIsIndpZHRoIiwialF1ZXJ5IiwiY3NzIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsInBhZGRpbmciLCJwcm94eSIsIm1hcERhdGEiLCJwcmV2ZW50Wm9vbVJlc3VsdHMiLCJsZW5ndGgiLCJJbmZpbml0eSIsIm1hcCIsImdldFZpZXciLCJmaXQiLCJtYXhab29tIiwiZ2V0Wm9vbSIsInNldENlbnRlciIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJjdXJyZW50RmVhdHVyZSIsImZvckVhY2hGZWF0dXJlIiwiZmVhdHVyZUVudHJ5Q29udGVudCIsIm9iakhvb2siLCJ0eXBlIiwic3R5bGVJZCIsInN0eWxlU3JjIiwibG9jc3R5bGUiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsImxvY1N0eWxlQXJyIiwic3R5bGV0eXBlIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJmblN0YW5kYXJkSW5mb1BvcHVwIiwicG9wdXAiLCJsYXllclZhbHVlIiwicm91dGVNb2RlIiwiZW50cnkiLCJjb3VudGVyIiwibGFiZWxzIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJyb3V0ZVBsdWdpbkVudHJ5IiwiX19odG1sIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVmIiwicmVmUHJvcCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwib25Nb3VzZURvd24iLCJDb21wb25lbnQiLCJfYzRnUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwiUm91dGVyRmVhdHVyZUxpc3QiLCJmZWF0dXJlcyIsImFjdGl2ZUlkIiwiX3RoaXMyIiwic29ydGVkRmVhdHVyZXMiLCJzb3J0RmVhdHVyZXMiLCJoZWFkZXIiLCJzd2l0Y2hlciIsImluZGV4IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJmZWF0dXJlTGlzdCIsImxheWVyUm91dGUiLCJsYXllckFyZWEiLCJzY3JvbGxFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG8iLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwicm91dGVyTGF5ZXJzIiwiY3VycmVudExheWVyIiwiY3VycmVudExheWVyVmFsdWUiLCJjdXJyZW50TGFiZWxQcm9wIiwiX3RvQ29uc3VtYWJsZUFycmF5MiIsInNvcnQiLCJiIiwiYVZhbHVlcyIsImJWYWx1ZXMiLCJ0YWdzIiwiaXNOYU4iXSwic291cmNlUm9vdCI6IiJ9