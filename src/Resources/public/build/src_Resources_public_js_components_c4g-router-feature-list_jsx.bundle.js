"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-feature-list_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-router-feature-list-item.jsx"
/*!*****************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-feature-list-item.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-router-feature-list.jsx"
/*!************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-router-feature-list.jsx ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWZlYXR1cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsS0FBQSxHQUFBQyxzQkFBQSxDQUFBRixtQkFBQTtBQUVBLElBQUFHLGdCQUFBLEdBQUFILG1CQUFBO0FBQ0EsSUFBQUksS0FBQSxHQUFBSixtQkFBQTtBQUNBLElBQUFLLGdCQUFBLEdBQUFOLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQU0sZ0JBQUEsR0FBQVAsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBTyxhQUFBLEdBQUFQLG1CQUFBO0FBQTRGLFNBQUFELHdCQUFBUyxDQUFBLEVBQUFDLENBQUEsNkJBQUFDLE9BQUEsTUFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBWCx1QkFBQSxZQUFBQSx3QkFBQVMsQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxPQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLFFBQUFHLENBQUEsQ0FBQUssR0FBQSxDQUFBWCxDQUFBLFVBQUFNLENBQUEsQ0FBQU0sR0FBQSxDQUFBWixDQUFBLEdBQUFNLENBQUEsQ0FBQU8sR0FBQSxDQUFBYixDQUFBLEVBQUFRLENBQUEsY0FBQU0sRUFBQSxJQUFBZCxDQUFBLGdCQUFBYyxFQUFBLE9BQUFDLGNBQUEsQ0FBQUMsSUFBQSxDQUFBaEIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsSUFBQUQsQ0FBQSxHQUFBVyxNQUFBLENBQUFDLGNBQUEsS0FBQUQsTUFBQSxDQUFBRSx3QkFBQSxDQUFBbkIsQ0FBQSxFQUFBYyxFQUFBLE9BQUFQLENBQUEsQ0FBQUssR0FBQSxJQUFBTCxDQUFBLENBQUFNLEdBQUEsSUFBQVAsQ0FBQSxDQUFBRSxDQUFBLEVBQUFNLEVBQUEsRUFBQVAsQ0FBQSxJQUFBQyxDQUFBLENBQUFNLEVBQUEsSUFBQWQsQ0FBQSxDQUFBYyxFQUFBLFdBQUFOLENBQUEsS0FBQVIsQ0FBQSxFQUFBQyxDQUFBO0FBQUEsU0FBQW1CLFdBQUFuQixDQUFBLEVBQUFLLENBQUEsRUFBQU4sQ0FBQSxXQUFBTSxDQUFBLE9BQUFlLGdCQUFBLGFBQUFmLENBQUEsT0FBQWdCLDJCQUFBLGFBQUFyQixDQUFBLEVBQUFzQix5QkFBQSxLQUFBQyxPQUFBLENBQUFDLFNBQUEsQ0FBQW5CLENBQUEsRUFBQU4sQ0FBQSxZQUFBcUIsZ0JBQUEsYUFBQXBCLENBQUEsRUFBQXlCLFdBQUEsSUFBQXBCLENBQUEsQ0FBQXFCLEtBQUEsQ0FBQTFCLENBQUEsRUFBQUQsQ0FBQTtBQUFBLFNBQUF1QiwwQkFBQSxjQUFBdEIsQ0FBQSxJQUFBMkIsT0FBQSxDQUFBQyxTQUFBLENBQUFDLE9BQUEsQ0FBQWQsSUFBQSxDQUFBUSxPQUFBLENBQUFDLFNBQUEsQ0FBQUcsT0FBQSxpQ0FBQTNCLENBQUEsYUFBQXNCLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUF0QixDQUFBLFVBakI1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQW9CYThCLHFCQUFxQixHQUFBQyw2QkFBQSwwQkFBQUMsVUFBQTtFQUVoQyxTQUFBRixzQkFBWUcsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBTCxxQkFBQTtJQUNqQkksS0FBQSxHQUFBZixVQUFBLE9BQUFXLHFCQUFBLEdBQU1HLEtBQUs7SUFDWCxJQUFNRyxLQUFLLEdBQUFGLEtBQU87SUFDbEJBLEtBQUEsQ0FBS0csY0FBYyxHQUFHSixLQUFLLENBQUNLLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLEtBQUssSUFBSSxHQUFHNUMsZ0JBQWdCLEdBQUdDLGdCQUFnQjtJQUNsR3FDLEtBQUEsQ0FBS08sWUFBWSxHQUFHUCxLQUFBLENBQUtPLFlBQVksQ0FBQ0MsSUFBSSxDQUFBUixLQUFLLENBQUM7SUFDaEQsSUFBSVMsT0FBTyxHQUFHLElBQUk7SUFDbEIsSUFBSVYsS0FBSyxDQUFDVyxlQUFlLElBQUlYLEtBQUssQ0FBQ1ksY0FBYyxFQUFFO01BQ2pERixPQUFPLEdBQUdULEtBQUEsQ0FBS1ksVUFBVSxDQUFDLENBQUM7SUFDN0I7SUFDQVosS0FBQSxDQUFLYSxLQUFLLEdBQUc7TUFDWEosT0FBTyxFQUFFQTtJQUNYLENBQUM7SUFBQyxPQUFBVCxLQUFBO0VBQ0o7RUFBQyxJQUFBYyxVQUFBLGFBQUFsQixxQkFBQSxFQUFBRSxVQUFBO0VBQUEsV0FBQWlCLGFBQUEsYUFBQW5CLHFCQUFBO0lBQUFvQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVixZQUFZQSxDQUFFVyxLQUFLLEVBQUU7TUFDbkIsSUFBTWhCLEtBQUssR0FBRyxJQUFJO01BQ2xCQSxLQUFLLENBQUNILEtBQUssQ0FBQ29CLFdBQVcsQ0FBQ2pCLEtBQUssQ0FBQ0gsS0FBSyxDQUFDcUIsT0FBTyxDQUFDQyxFQUFFLENBQUM7TUFDL0MsSUFBSUQsT0FBTyxHQUFHbEIsS0FBSyxDQUFDSCxLQUFLLENBQUN1QixhQUFhLENBQUNDLGNBQWMsQ0FBQ3JCLEtBQUssQ0FBQ0gsS0FBSyxDQUFDcUIsT0FBTyxDQUFDQyxFQUFFLENBQUM7TUFDOUUsSUFBSUQsT0FBTyxFQUFFO1FBQ1gsSUFBSUksTUFBTSxHQUFHSixPQUFPLENBQUNLLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDMUQsSUFBSUYsS0FBSyxFQUFFO1VBQ1RBLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO1VBQ3hCSCxLQUFLLEdBQUdJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTCxLQUFLLENBQUMsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxLQUFLO1VBQy9DQSxLQUFLLEdBQUdNLFFBQVEsQ0FBQ04sS0FBSyxDQUFDLEdBQUksRUFBRTtRQUMvQixDQUFDLE1BQ0k7VUFDSEEsS0FBSyxHQUFHLEVBQUU7UUFDWjtRQUNBLElBQUlPLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRVAsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDekIsS0FBSyxDQUFDSCxLQUFLLENBQUNLLGFBQWEsQ0FBQytCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxrQkFBa0IsRUFBRTtVQUMvRDtVQUNBLElBQUliLE1BQU0sSUFBSUEsTUFBTSxDQUFDYyxNQUFNLEdBQUcsQ0FBQyxJQUFJZCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUtlLFFBQVEsRUFBRTtZQUN6RHJDLEtBQUssQ0FBQ0gsS0FBSyxDQUFDSyxhQUFhLENBQUNvQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQ2xCLE1BQU0sRUFBRTtjQUNsRFUsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCUyxPQUFPLEVBQUV6QyxLQUFLLENBQUNILEtBQUssQ0FBQ0ssYUFBYSxDQUFDb0MsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLENBQUMsQ0FBQztVQUNKO1FBQ0YsQ0FBQyxNQUNJO1VBQ0gxQyxLQUFLLENBQUNILEtBQUssQ0FBQ0ssYUFBYSxDQUFDb0MsR0FBRyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDSSxTQUFTLENBQUMsQ0FBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0U7TUFDRjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDRjtFQUFDO0lBQUFSLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2QixrQkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7TUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ0osT0FBTyxJQUNuQixJQUFJLENBQUNWLEtBQUssQ0FBQ1csZUFBZSxLQUFLcUMsU0FBUyxDQUFDckMsZUFBZSxJQUN4RCxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksY0FBYyxLQUFLb0MsU0FBUyxDQUFDcEMsY0FBYyxJQUN0RCxJQUFJLENBQUNaLEtBQUssQ0FBQ3FCLE9BQU8sS0FBSzJCLFNBQVMsQ0FBQzNCLE9BQU8sRUFDMUM7UUFBRTtRQUNGLElBQUlYLE9BQU8sR0FBRyxJQUFJLENBQUNHLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLElBQUlILE9BQU8sRUFBRTtVQUNYLElBQUksQ0FBQ3lDLFFBQVEsQ0FBQztZQUNaekMsT0FBTyxFQUFFLElBQUksQ0FBQ0csVUFBVSxDQUFDO1VBQzNCLENBQUMsQ0FBQztRQUNKO01BQ0Y7SUFDRjtFQUFDO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLFVBQVVBLENBQUEsRUFBSTtNQUNaLElBQU1WLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQUlpRCxjQUFjLEdBQUcsSUFBSTtNQUN6QixJQUFJLElBQUksQ0FBQ3BELEtBQUssQ0FBQ3VCLGFBQWEsSUFBSSxJQUFJLENBQUN2QixLQUFLLENBQUN1QixhQUFhLENBQUM4QixjQUFjLEVBQUU7UUFDdkUsSUFBSSxDQUFDckQsS0FBSyxDQUFDdUIsYUFBYSxDQUFDOEIsY0FBYyxDQUFDLFVBQVVoQyxPQUFPLEVBQUU7VUFDekQsSUFBSUEsT0FBTyxDQUFDM0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLeUIsS0FBSyxDQUFDSCxLQUFLLENBQUNxQixPQUFPLENBQUNDLEVBQUUsRUFBRTtZQUNqRDhCLGNBQWMsR0FBRy9CLE9BQU87VUFDMUI7UUFDRixDQUFDLENBQUM7TUFDSjtNQUNBLElBQUlpQyxtQkFBbUIsR0FBRyxFQUFFO01BQzVCLElBQUlDLE9BQU8sR0FBRyxJQUFJO01BQ2xCLElBQUlILGNBQWMsRUFBRTtRQUNsQixJQUFJLElBQUksQ0FBQ3BELEtBQUssQ0FBQ3dELElBQUksS0FBSyxVQUFVLEVBQUU7VUFDbEMsSUFBSUosY0FBYyxDQUFDMUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLElBQUkrRSxPQUFPLEdBQUdMLGNBQWMsQ0FBQzFFLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDNUMsSUFBSWdGLFFBQVEsR0FBRyxFQUFFO1lBQ2pCLElBQUlDLFFBQVEsR0FBRyxJQUFJLENBQUMzRCxLQUFLLENBQUNLLGFBQWEsQ0FBQytCLEtBQUssQ0FBQ3dCLHVCQUF1QixDQUFDQyxZQUFZLENBQUNKLE9BQU8sQ0FBQztZQUMzRixJQUFJRSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csV0FBVyxFQUFFO2NBQ3BDSixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0csV0FBVyxDQUFDQyxTQUFTLEtBQUssV0FBVyxHQUFHSixRQUFRLENBQUNHLFdBQVcsQ0FBQ0UsUUFBUSxHQUFHTCxRQUFRLENBQUNHLFdBQVcsQ0FBQ0MsU0FBUyxLQUFLLGVBQWUsR0FBR0osUUFBUSxDQUFDRyxXQUFXLENBQUNHLE1BQU0sR0FBRyxFQUFFO1lBQ25MO1lBQ0FYLG1CQUFtQixHQUFHLElBQUksQ0FBQ2xELGNBQWMsQ0FBQzhELG1CQUFtQixDQUFDZCxjQUFjLEVBQUVNLFFBQVEsQ0FBQztVQUN6RjtRQUNGLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQzFELEtBQUssQ0FBQ3dELElBQUksS0FBSyxhQUFhLEVBQUU7VUFDNUMsSUFBSSxJQUFJLENBQUN4RCxLQUFLLENBQUNxQixPQUFPLElBQUksSUFBSSxDQUFDckIsS0FBSyxDQUFDcUIsT0FBTyxDQUFDOEMsS0FBSyxFQUFFO1lBQ2xEYixtQkFBbUIsR0FBRyxJQUFJLENBQUN0RCxLQUFLLENBQUNxQixPQUFPLENBQUM4QyxLQUFLO1VBQ2hEO1FBQ0YsQ0FBQyxNQUFNO1VBQ0wsSUFBSUMsVUFBVSxHQUFHLElBQUksQ0FBQ3BFLEtBQUssQ0FBQ3FFLFNBQVMsS0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDckUsS0FBSyxDQUFDVyxlQUFlLEdBQUcsSUFBSSxDQUFDWCxLQUFLLENBQUNZLGNBQWM7VUFDMUcyQyxPQUFPLEdBQUk7WUFDVGUsS0FBSyxFQUFFLEVBQUU7WUFDVGhELEVBQUUsRUFBRSxJQUFJLENBQUN0QixLQUFLLENBQUN1RSxPQUFPO1lBQ3RCbEQsT0FBTyxFQUFFLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ3FCLE9BQU87WUFDM0I7WUFDQW1ELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNoQkMsZ0JBQWdCLEVBQUVMO1VBQ3BCLENBQUM7VUFDRE0sbUJBQUssQ0FBQ0MsaUJBQWlCLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxnQkFBZ0IsRUFBRXZCLE9BQU8sQ0FBQztVQUN0RUQsbUJBQW1CLEdBQUdDLE9BQU8sQ0FBQ2UsS0FBSztRQUNyQztRQUNBLElBQUk1RCxPQUFPLEdBQUc7VUFBQ3FFLE1BQU0sRUFBRXpCLG1CQUFtQixHQUFHO1FBQU0sQ0FBQztRQUNwRCxPQUFPNUMsT0FBTztNQUNoQjtJQUNGO0VBQUM7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThELE1BQU1BLENBQUEsRUFBRztNQUNQLElBQUksSUFBSSxDQUFDbEUsS0FBSyxDQUFDSixPQUFPLEVBQUU7UUFDdEIsb0JBQ0l0RCxNQUFBLFlBQUE2SCxhQUFBLENBQUM3SCxNQUFBLFdBQUssQ0FBQzhILFFBQVEscUJBQ2I5SCxNQUFBLFlBQUE2SCxhQUFBLGVBQU8sSUFBSSxDQUFDakYsS0FBSyxDQUFDcUIsT0FBTyxDQUFDQyxFQUFTLENBQUMsZUFDcENsRSxNQUFBLFlBQUE2SCxhQUFBO1VBQUlFLEdBQUcsRUFBRSxJQUFJLENBQUNuRixLQUFLLENBQUNvRixPQUFRO1VBQUNDLHVCQUF1QixFQUFFLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQ0osT0FBUTtVQUNyRTRFLFNBQVMsRUFBRSxJQUFJLENBQUN0RixLQUFLLENBQUN1RixNQUFNLEdBQUcsd0NBQXdDLEdBQUcsMENBQTJDO1VBQ3JIQyxXQUFXLEVBQUUsSUFBSSxDQUFDaEY7UUFBYSxDQUFDLENBQ3RCLENBQUM7TUFFdkI7TUFDQSxPQUFPLElBQUk7SUFDYjtFQUFDO0FBQUEsRUEvSHdDaUYsZ0JBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnBELElBQUFySSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQW9JLHlCQUFBLEdBQUFwSSxtQkFBQTtBQUF5RSxTQUFBRCx3QkFBQVMsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQVgsdUJBQUEsWUFBQUEsd0JBQUFTLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFBQUwsQ0FBQSxDQUFBTSxHQUFBLElBQUFQLENBQUEsQ0FBQUUsQ0FBQSxFQUFBTSxFQUFBLEVBQUFQLENBQUEsSUFBQUMsQ0FBQSxDQUFBTSxFQUFBLElBQUFkLENBQUEsQ0FBQWMsRUFBQSxXQUFBTixDQUFBLEtBQUFSLENBQUEsRUFBQUMsQ0FBQTtBQUFBLFNBQUFtQixXQUFBbkIsQ0FBQSxFQUFBSyxDQUFBLEVBQUFOLENBQUEsV0FBQU0sQ0FBQSxPQUFBZSxnQkFBQSxhQUFBZixDQUFBLE9BQUFnQiwyQkFBQSxhQUFBckIsQ0FBQSxFQUFBc0IseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFuQixDQUFBLEVBQUFOLENBQUEsWUFBQXFCLGdCQUFBLGFBQUFwQixDQUFBLEVBQUF5QixXQUFBLElBQUFwQixDQUFBLENBQUFxQixLQUFBLENBQUExQixDQUFBLEVBQUFELENBQUE7QUFBQSxTQUFBdUIsMEJBQUEsY0FBQXRCLENBQUEsSUFBQTJCLE9BQUEsQ0FBQUMsU0FBQSxDQUFBQyxPQUFBLENBQUFkLElBQUEsQ0FBQVEsT0FBQSxDQUFBQyxTQUFBLENBQUFHLE9BQUEsaUNBQUEzQixDQUFBLGFBQUFzQix5QkFBQSxZQUFBQSwwQkFBQSxhQUFBdEIsQ0FBQSxVQVh6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQWFxQjRILGlCQUFpQixHQUFBN0Ysa0JBQUEsMEJBQUFDLFVBQUE7RUFFcEMsU0FBQTRGLGtCQUFZM0YsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBLElBQUFDLGdCQUFBLG1CQUFBeUYsaUJBQUE7SUFDakIxRixLQUFBLEdBQUFmLFVBQUEsT0FBQXlHLGlCQUFBLEdBQU0zRixLQUFLO0lBQ1hDLEtBQUEsQ0FBS21CLFdBQVcsR0FBR25CLEtBQUEsQ0FBS21CLFdBQVcsQ0FBQ1gsSUFBSSxDQUFBUixLQUFLLENBQUM7SUFDOUNBLEtBQUEsQ0FBSzJGLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFBQyxPQUFBM0YsS0FBQTtFQUNyQjtFQUFDLElBQUFjLFVBQUEsYUFBQTRFLGlCQUFBLEVBQUE1RixVQUFBO0VBQUEsV0FBQWlCLGFBQUEsYUFBQTJFLGlCQUFBO0lBQUExRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBRSxXQUFXQSxDQUFDeUUsUUFBUSxFQUFFO01BQ2xCLElBQUksQ0FBQzFDLFFBQVEsQ0FBQztRQUFDLFVBQVUsRUFBRTBDO01BQVEsQ0FBQyxDQUFDO0lBQ3pDO0VBQUM7SUFBQTVFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RCxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBYyxNQUFBO01BQ1AsSUFBSUMsY0FBYyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7TUFDeEMsSUFBSSxDQUFDRCxjQUFjLEVBQUU7UUFDbkIsb0JBQ0kzSSxNQUFBLFlBQUE2SCxhQUFBO1VBQUtLLFNBQVMsRUFBRSxJQUFJLENBQUN0RixLQUFLLENBQUNzRjtRQUFVLENBQ2hDLENBQUM7TUFFWjtNQUVBLG9CQUNFbEksTUFBQSxZQUFBNkgsYUFBQTtRQUFLSyxTQUFTLEVBQUUsSUFBSSxDQUFDdEYsS0FBSyxDQUFDc0Y7TUFBVSxHQUNsQyxJQUFJLENBQUN0RixLQUFLLENBQUNpRyxNQUFNLEVBQ2pCLElBQUksQ0FBQ2pHLEtBQUssQ0FBQ2tHLFFBQVEsZUFDcEI5SSxNQUFBLFlBQUE2SCxhQUFBLGFBQ0djLGNBQWMsQ0FBQ3RELEdBQUcsQ0FBQyxVQUFDcEIsT0FBTyxFQUFFOEUsS0FBSyxFQUFLO1FBQ3RDTCxNQUFJLENBQUNGLFFBQVEsQ0FBQ3ZFLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDLGdCQUFHOEUsaUJBQUssQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDN0Msb0JBQU9qSixNQUFBLFlBQUE2SCxhQUFBLENBQUNTLHlCQUFBLENBQUE3RixxQkFBcUI7VUFBQ3dCLE9BQU8sRUFBRUEsT0FBUTtVQUFDK0QsT0FBTyxFQUFFVSxNQUFJLENBQUNGLFFBQVEsQ0FBQ3ZFLE9BQU8sQ0FBQ0MsRUFBRSxDQUFFO1VBQUNrQyxJQUFJLEVBQUVzQyxNQUFJLENBQUM5RixLQUFLLENBQUNzRyxXQUFXLENBQUM5QyxJQUFLO1VBQUMrQixNQUFNLEVBQUVPLE1BQUksQ0FBQzlGLEtBQUssQ0FBQzZGLFFBQVEsS0FBS3hFLE9BQU8sQ0FBQ0MsRUFBRztVQUNwSUYsV0FBVyxFQUFFMEUsTUFBSSxDQUFDOUYsS0FBSyxDQUFDb0IsV0FBWTtVQUFDaUQsU0FBUyxFQUFFeUIsTUFBSSxDQUFDOUYsS0FBSyxDQUFDcUUsU0FBVTtVQUFDaEUsYUFBYSxFQUFFeUYsTUFBSSxDQUFDOUYsS0FBSyxDQUFDSyxhQUFjO1VBQzlHa0csVUFBVSxFQUFFVCxNQUFJLENBQUM5RixLQUFLLENBQUN1RyxVQUFXO1VBQUNDLFNBQVMsRUFBRVYsTUFBSSxDQUFDOUYsS0FBSyxDQUFDd0csU0FBVTtVQUFDakYsYUFBYSxFQUFFdUUsTUFBSSxDQUFDOUYsS0FBSyxDQUFDdUIsYUFBYztVQUM1R2dELE9BQU8sRUFBRTRCLEtBQU07VUFBQ2xGLEdBQUcsRUFBRWtGLEtBQU07VUFBQ3hGLGVBQWUsRUFBRW1GLE1BQUksQ0FBQzlGLEtBQUssQ0FBQ1csZUFBZ0I7VUFBQ0MsY0FBYyxFQUFFa0YsTUFBSSxDQUFDOUYsS0FBSyxDQUFDWTtRQUFlLENBQUMsQ0FBQztNQUNySixDQUFDLENBQ0MsQ0FDRCxDQUFDO0lBRVY7RUFBQztJQUFBSyxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBNkIsa0JBQWtCQSxDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFO01BQ2pELElBQUlGLFNBQVMsQ0FBQzZDLFFBQVEsS0FBSyxJQUFJLENBQUM3RixLQUFLLENBQUM2RixRQUFRLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUM3RixLQUFLLENBQUM2RixRQUFRLEVBQUU7VUFDdkIsSUFBTVYsR0FBRyxHQUFHLElBQUksQ0FBQ1MsUUFBUSxDQUFDLElBQUksQ0FBQzVGLEtBQUssQ0FBQzZGLFFBQVEsQ0FBQztVQUM5QztVQUNBLElBQUlZLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsOEJBQThCLENBQUM7VUFDMUVGLGFBQWEsQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRXpCLEdBQUcsQ0FBQzBCLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN4RDtNQUNGO0lBQ0Y7RUFBQztJQUFBN0YsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThFLFlBQVlBLENBQUEsRUFBRztNQUNiLElBQU1lLFlBQVksR0FBRyxJQUFJLENBQUMvRyxLQUFLLENBQUNLLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDeUcsWUFBWTtNQUMvRCxJQUFNQyxZQUFZLEdBQUcsSUFBSSxDQUFDaEgsS0FBSyxDQUFDcUUsU0FBUyxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUNyRSxLQUFLLENBQUN3RyxTQUFTLEdBQUcsSUFBSSxDQUFDeEcsS0FBSyxDQUFDdUcsVUFBVTtNQUNuRyxJQUFNVSxpQkFBaUIsR0FBRyxJQUFJLENBQUNqSCxLQUFLLENBQUNxRSxTQUFTLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQ3JFLEtBQUssQ0FBQ1ksY0FBYyxHQUFHLElBQUksQ0FBQ1osS0FBSyxDQUFDVyxlQUFlO01BRWxILElBQUksQ0FBQ29HLFlBQVksRUFBRTtRQUNqQjtNQUNGO01BRUEsSUFBTUcsZ0JBQWdCLEdBQUdILFlBQVksQ0FBQ0MsWUFBWSxDQUFDLENBQUNDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDO01BQ2xGLElBQUlyQixRQUFRLE9BQUF1QixtQkFBQSxhQUFPLElBQUksQ0FBQ25ILEtBQUssQ0FBQ3NHLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDO01BQ25ELE9BQU9BLFFBQVEsQ0FBQ3dCLElBQUksQ0FBQyxVQUFVQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNuQyxJQUFJQyxPQUFPLEdBQUdGLENBQUM7VUFBRUcsT0FBTyxHQUFHRixDQUFDO1FBQzVCLElBQUlELENBQUMsQ0FBQ0ksSUFBSSxJQUFJSCxDQUFDLENBQUNHLElBQUksRUFBRTtVQUNwQkYsT0FBTyxHQUFHRixDQUFDLENBQUNJLElBQUk7VUFDaEJELE9BQU8sR0FBR0YsQ0FBQyxDQUFDRyxJQUFJO1FBQ2xCO1FBQ0EsSUFBSUMsS0FBSyxDQUFDSCxPQUFPLENBQUNMLGdCQUFnQixDQUFDLENBQUMsRUFBRTtVQUNwQztVQUNBLE9BQU9LLE9BQU8sQ0FBQ0wsZ0JBQWdCLENBQUMsR0FBR00sT0FBTyxDQUFDTixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdkUsQ0FBQyxNQUFNO1VBQ0w7VUFDQSxPQUFPSyxPQUFPLENBQUNMLGdCQUFnQixDQUFDLEdBQUdNLE9BQU8sQ0FBQ04sZ0JBQWdCLENBQUM7UUFDOUQ7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0FBQUEsRUF6RTRDekIsZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRvTG9uTGF0LCBmcm9tTG9uTGF0LCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0RFIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1kZVwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNFTiBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZW5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5wb3B1cEZ1bmN0aW9ucyA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nID09PSBcImRlXCIgPyBwb3B1cEZ1bmN0aW9uc0RFIDogcG9wdXBGdW5jdGlvbnNFTjtcbiAgICB0aGlzLmNsaWNrRmVhdHVyZSA9IHRoaXMuY2xpY2tGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICAgIGlmIChwcm9wcy5sYXllclZhbHVlUm91dGUgfHwgcHJvcHMubGF5ZXJWYWx1ZUFyZWEpIHtcbiAgICAgIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgY2xpY2tGZWF0dXJlIChldmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBzY29wZS5wcm9wcy5zZXRBY3RpdmVJZChzY29wZS5wcm9wcy5mZWF0dXJlLmlkKTtcbiAgICBsZXQgZmVhdHVyZSA9IHNjb3BlLnByb3BzLmZlYXR1cmVTb3VyY2UuZ2V0RmVhdHVyZUJ5SWQoc2NvcGUucHJvcHMuZmVhdHVyZS5pZClcbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgbGV0IGV4dGVudCA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKTtcbiAgICAgIGxldCB3aWR0aCA9IGpRdWVyeShcIi5jNGctc2lkZWJvYXJkLmM0Zy1vcGVuXCIpLmNzcygnd2lkdGgnKTtcbiAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHdpZHRoLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgd2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdIDogd2lkdGg7XG4gICAgICAgIHdpZHRoID0gcGFyc2VJbnQod2lkdGgpICsgIDUwO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpZHRoID0gNTA7XG4gICAgICB9XG4gICAgICBsZXQgcGFkZGluZyA9IFs1MCwgd2lkdGgsIDUwLCA1MF07XG4gICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubWFwRGF0YS5wcmV2ZW50Wm9vbVJlc3VsdHMpIHtcbiAgICAgICAgLy8gZG8gbm90IGF0dGVtcHQgdG8gZml0IGVtcHR5IGV4dGVudHMgKEluZmluaXR5IGFsc28gbWVhbnMgZW1wdHkgaW4gdGhpcyBjb250ZXh0KVxuICAgICAgICBpZiAoZXh0ZW50ICYmIGV4dGVudC5sZW5ndGggPiAwICYmIGV4dGVudFswXSAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwge1xuICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgICAgICAgIG1heFpvb206IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5nZXRab29tKCkgfHwgMTZcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIoW2V4dGVudFswXSwgZXh0ZW50WzFdXSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVmcmVzaCBjc3MgY2xhc3Nlc1xuICAgIC8vIGNvbnNvbGUubG9nKGpRdWVyeSh0aGlzKSk7XG4gICAgLy8gdGhpcy5wcm9wcy5zZXRBY3RpdmVJZCgpXG4gICAgLy8galF1ZXJ5KHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdsaScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgLy8gICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAvLyB9KTtcbiAgICAvLyBqUXVlcnkodGhpcykuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAvLyBqUXVlcnkoXCJkaXYuYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogZW50cnkub2Zmc2V0VG9wIC0gMzAwfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmVsZW1lbnQgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGUgIT09IHByZXZQcm9wcy5sYXllclZhbHVlUm91dGUgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYSAhPT0gcHJldlByb3BzLmxheWVyVmFsdWVBcmVhIHx8XG4gICAgICAgIHRoaXMucHJvcHMuZmVhdHVyZSAhPT0gcHJldlByb3BzLmZlYXR1cmVcbiAgICApIHsgLy9vbmx5IGdldCBwb3B1cCBpZiBub3QgYWxyZWFkeSBzZXQgb3IgbGF5ZXIgY2hhbmdlc1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZ2V0RWxlbWVudCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RWxlbWVudCAoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjdXJyZW50RmVhdHVyZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZVNvdXJjZSAmJiB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUpIHtcbiAgICAgIHRoaXMucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZShmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgICAgY3VycmVudEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBvYmpIb29rID0gbnVsbDtcbiAgICBpZiAoY3VycmVudEZlYXR1cmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwib3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAoY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpKSB7XG4gICAgICAgICAgbGV0IHN0eWxlSWQgPSBjdXJyZW50RmVhdHVyZS5nZXQoJ2xvY3N0eWxlJyk7XG4gICAgICAgICAgbGV0IHN0eWxlU3JjID0gJyc7XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXTtcbiAgICAgICAgICBpZiAobG9jc3R5bGUgJiYgbG9jc3R5bGUubG9jU3R5bGVBcnIpIHtcbiAgICAgICAgICAgIHN0eWxlU3JjID0gbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvblwiID8gbG9jc3R5bGUubG9jU3R5bGVBcnIuaWNvbl9zcmMgOiBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdHlsZXR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiID8gbG9jc3R5bGUubG9jU3R5bGVBcnIuc3ZnU3JjIDogXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IHRoaXMucG9wdXBGdW5jdGlvbnMuZm5TdGFuZGFyZEluZm9Qb3B1cChjdXJyZW50RmVhdHVyZSwgc3R5bGVTcmMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJub3RPdmVycGFzc1wiKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUgJiYgdGhpcy5wcm9wcy5mZWF0dXJlLnBvcHVwKSB7XG4gICAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxheWVyVmFsdWUgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhO1xuICAgICAgICBvYmpIb29rID0gIHtcbiAgICAgICAgICBlbnRyeTogXCJcIixcbiAgICAgICAgICBpZDogdGhpcy5wcm9wcy5jb3VudGVyLFxuICAgICAgICAgIGZlYXR1cmU6IHRoaXMucHJvcHMuZmVhdHVyZSxcbiAgICAgICAgICAvLyB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBsYWJlbHM6IFsnbmFtZSddLFxuICAgICAgICAgIGFjdGl2ZUxheWVyVmFsdWU6IGxheWVyVmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5yb3V0ZVBsdWdpbkVudHJ5LCBvYmpIb29rKTtcbiAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IG9iakhvb2suZW50cnk7XG4gICAgICB9XG4gICAgICBsZXQgZWxlbWVudCA9IHtfX2h0bWw6IGZlYXR1cmVFbnRyeUNvbnRlbnQgKyBcIjxicj5cIn07XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZWxlbWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5mZWF0dXJlLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgIDxsaSByZWY9e3RoaXMucHJvcHMucmVmUHJvcH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3RoaXMuc3RhdGUuZWxlbWVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuYWN0aXZlID8gXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWFjdGl2ZVwiIDogXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWluYWN0aXZlXCJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuY2xpY2tGZWF0dXJlfS8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZXJGZWF0dXJlTGlzdEl0ZW19IGZyb20gXCIuL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckZlYXR1cmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZUlkID0gdGhpcy5zZXRBY3RpdmVJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgfVxuXG4gIHNldEFjdGl2ZUlkKGFjdGl2ZUlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcImFjdGl2ZUlkXCI6IGFjdGl2ZUlkfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkRmVhdHVyZXMgPSB0aGlzLnNvcnRGZWF0dXJlcygpO1xuICAgIGlmICghc29ydGVkRmVhdHVyZXMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7c29ydGVkRmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcmVmUHJvcD17dGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXX0gdHlwZT17dGhpcy5wcm9wcy5mZWF0dXJlTGlzdC50eXBlfSBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlSWQgPT09IGZlYXR1cmUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJZD17dGhpcy5wcm9wcy5zZXRBY3RpdmVJZH0gcm91dGVNb2RlPXt0aGlzLnByb3BzLnJvdXRlTW9kZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJSb3V0ZT17dGhpcy5wcm9wcy5sYXllclJvdXRlfSBsYXllckFyZWE9e3RoaXMucHJvcHMubGF5ZXJBcmVhfSBmZWF0dXJlU291cmNlPXt0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyPXtpbmRleH0ga2V5PXtpbmRleH0gbGF5ZXJWYWx1ZVJvdXRlPXt0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZX0gbGF5ZXJWYWx1ZUFyZWE9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlSWQgIT09IHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZmVhdHVyZXNbdGhpcy5wcm9wcy5hY3RpdmVJZF07XG4gICAgICAgIC8vIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gICAgICAgIGxldCBzY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXJcIik7XG4gICAgICAgIHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG8oMCwgcmVmLmN1cnJlbnQub2Zmc2V0VG9wIC0gMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0RmVhdHVyZXMoKSB7XG4gICAgY29uc3Qgcm91dGVyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJBcmVhIDogdGhpcy5wcm9wcy5sYXllclJvdXRlO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlO1xuXG4gICAgaWYgKCFyb3V0ZXJMYXllcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TGFiZWxQcm9wID0gcm91dGVyTGF5ZXJzW2N1cnJlbnRMYXllcl1bY3VycmVudExheWVyVmFsdWVdWydtYXBMYWJlbCddO1xuICAgIGxldCBmZWF0dXJlcyA9IFsuLi50aGlzLnByb3BzLmZlYXR1cmVMaXN0LmZlYXR1cmVzXTtcbiAgICByZXR1cm4gZmVhdHVyZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgbGV0IGFWYWx1ZXMgPSBhLCBiVmFsdWVzID0gYjtcbiAgICAgIGlmIChhLnRhZ3MgJiYgYi50YWdzKSB7XG4gICAgICAgIGFWYWx1ZXMgPSBhLnRhZ3M7XG4gICAgICAgIGJWYWx1ZXMgPSBiLnRhZ3M7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4oYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSkpIHtcbiAgICAgICAgLy8gc3RyaW5nIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA8IGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPyAtMSA6IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBudW1lcmljIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSAtIGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2dlb20iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2M0Z01hcHNDb25zdGFudCIsIl9wcm9qIiwicG9wdXBGdW5jdGlvbnNERSIsInBvcHVwRnVuY3Rpb25zRU4iLCJfYzRnTWFwc1V0aWxzIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwicG9wdXBGdW5jdGlvbnMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImxhbmciLCJjbGlja0ZlYXR1cmUiLCJiaW5kIiwiZWxlbWVudCIsImxheWVyVmFsdWVSb3V0ZSIsImxheWVyVmFsdWVBcmVhIiwiZ2V0RWxlbWVudCIsInN0YXRlIiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImV2ZW50Iiwic2V0QWN0aXZlSWQiLCJmZWF0dXJlIiwiaWQiLCJmZWF0dXJlU291cmNlIiwiZ2V0RmVhdHVyZUJ5SWQiLCJleHRlbnQiLCJnZXRHZW9tZXRyeSIsImdldEV4dGVudCIsIndpZHRoIiwialF1ZXJ5IiwiY3NzIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsInBhZGRpbmciLCJwcm94eSIsIm1hcERhdGEiLCJwcmV2ZW50Wm9vbVJlc3VsdHMiLCJsZW5ndGgiLCJJbmZpbml0eSIsIm1hcCIsImdldFZpZXciLCJmaXQiLCJtYXhab29tIiwiZ2V0Wm9vbSIsInNldENlbnRlciIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90Iiwic2V0U3RhdGUiLCJjdXJyZW50RmVhdHVyZSIsImZvckVhY2hGZWF0dXJlIiwiZmVhdHVyZUVudHJ5Q29udGVudCIsIm9iakhvb2siLCJ0eXBlIiwic3R5bGVJZCIsInN0eWxlU3JjIiwibG9jc3R5bGUiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsImxvY1N0eWxlQXJyIiwic3R5bGV0eXBlIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJmblN0YW5kYXJkSW5mb1BvcHVwIiwicG9wdXAiLCJsYXllclZhbHVlIiwicm91dGVNb2RlIiwiZW50cnkiLCJjb3VudGVyIiwibGFiZWxzIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJyb3V0ZVBsdWdpbkVudHJ5IiwiX19odG1sIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVmIiwicmVmUHJvcCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwib25Nb3VzZURvd24iLCJDb21wb25lbnQiLCJfYzRnUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwiUm91dGVyRmVhdHVyZUxpc3QiLCJmZWF0dXJlcyIsImFjdGl2ZUlkIiwiX3RoaXMyIiwic29ydGVkRmVhdHVyZXMiLCJzb3J0RmVhdHVyZXMiLCJoZWFkZXIiLCJzd2l0Y2hlciIsImluZGV4IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJmZWF0dXJlTGlzdCIsImxheWVyUm91dGUiLCJsYXllckFyZWEiLCJzY3JvbGxFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG8iLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwicm91dGVyTGF5ZXJzIiwiY3VycmVudExheWVyIiwiY3VycmVudExheWVyVmFsdWUiLCJjdXJyZW50TGFiZWxQcm9wIiwiX3RvQ29uc3VtYWJsZUFycmF5MiIsInNvcnQiLCJhIiwiYiIsImFWYWx1ZXMiLCJiVmFsdWVzIiwidGFncyIsImlzTmFOIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=