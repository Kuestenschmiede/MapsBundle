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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _geom = _interopRequireDefault(__webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var popupFunctionsDE = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-de */ "./src/Resources/public/js/c4g-maps-popup-info-de.js"));

var popupFunctionsEN = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-popup-info-en */ "./src/Resources/public/js/c4g-maps-popup-info-en.js"));

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../../MapsBundle/src/Resources/public/js/c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterFeatureListItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterFeatureListItem, _Component);

  var _super = _createSuper(RouterFeatureListItem);

  function RouterFeatureListItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterFeatureListItem);
    _this = _super.call(this, props);
    _this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    _this.clickFeature = _this.clickFeature.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(RouterFeatureListItem, [{
    key: "clickFeature",
    value: function clickFeature(event) {
      var scope = this;
      scope.props.setActiveId(scope.props.feature.id);
      scope.props.featureSource.forEachFeature(function (tmpFeature) {
        var layer = undefined;
        var routerLayers = scope.props.mapController.data.routerLayers;

        if (scope.props.routeMode === "area") {
          layer = routerLayers[scope.props.layerArea][scope.props.layerValueArea].layerData;
        } else if (scope.props.routeMode === "route") {
          layer = routerLayers[scope.props.layerRoute][scope.props.layerValueRoute].layerData;
        }

        if (tmpFeature.get('tid') === scope.props.feature.id) {
          var clickStyleId = scope.props.mapController.data.clickLocstyle;

          if (clickStyleId) {
            if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId]) {
              scope.props.mapController.proxy.locationStyleController.loadLocationStyles([clickStyleId], {
                done: function done() {
                  if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style) {
                    scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].getStyleFunction();
                  }

                  var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style; // check if feature is still clicked

                  scope.mapSelectInteraction.getFeatures().forEach(function (elem, index, array) {
                    if (elem === tmpFeature) {
                      // feature is still clicked, style it accordingly
                      tmpFeature.setStyle(style);
                    }
                  });
                }
              });
            } else {
              if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style) {
                scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].getStyleFunction();
              }

              var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
              tmpFeature.setStyle(style);
              var extent = tmpFeature.getGeometry().getExtent();
              var width = jQuery(".c4g-sideboard.c4g-open").css('width');

              if (width) {
                width = width.split(".");
                width = Array.isArray(width) ? width[0] : width;
                width = parseInt(width) + 50;
              } else {
                width = 50;
              }

              var padding = [50, width, 50, 50];
              scope.props.mapController.map.getView().fit(extent, {
                padding: padding,
                maxZoom: 16
              });
            }
          }
        } else {
          tmpFeature.setStyle(scope.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
        }
      }); // refresh css classes

      jQuery(this).parent().children('li').each(function (index, element) {
        jQuery(element).addClass(_c4gMapsConstant.cssConstants.INACTIVE).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
      });
      jQuery(this).addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE); // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
    }
  }, {
    key: "render",
    value: function render() {
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
            feature: this.props.feature,
            // values: values,
            labels: ['name'],
            // router: scope,
            activeLayerValue: layerValue
          };

          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, objHook);

          featureEntryContent = objHook.entry;
        }

        var element = {
          __html: featureEntryContent + "<br>"
        };
        return /*#__PURE__*/_react["default"].createElement("li", {
          ref: this.props.refProp,
          dangerouslySetInnerHTML: element,
          className: this.props.active ? "route-features-list-element c4g-active" : "route-features-list-element c4g-inactive",
          onMouseUp: this.clickFeature
        });
      }

      return null;
    }
  }]);
  return RouterFeatureListItem;
}(_react.Component);

exports.RouterFeatureListItem = RouterFeatureListItem;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterFeatureListItem = __webpack_require__(/*! ./c4g-router-feature-list-item.jsx */ "./src/Resources/public/js/components/c4g-router-feature-list-item.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterFeatureList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterFeatureList, _Component);

  var _super = _createSuper(RouterFeatureList);

  function RouterFeatureList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterFeatureList);
    _this = _super.call(this, props);
    _this.setActiveId = _this.setActiveId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.features = {};
    return _this;
  }

  (0, _createClass2["default"])(RouterFeatureList, [{
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
          var ref = this.features[this.props.activeId]; // ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});

          var scrollElement = document.querySelector(".c4g-router-result-container");
          scrollElement.scrollTo(0, ref.current.offsetTop);
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
  return RouterFeatureList;
}(_react.Component);

exports["default"] = RouterFeatureList;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWZlYXR1cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFHYUE7Ozs7O0VBRVgsK0JBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFBQTtJQUNqQiwwQkFBTUEsS0FBTjtJQUNBLE1BQUtDLGNBQUwsR0FBc0JELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJDLElBQXpCLEtBQWtDLElBQWxDLEdBQXlDQyxnQkFBekMsR0FBNERDLGdCQUFsRjtJQUNBLE1BQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsZ0RBQXBCO0lBSGlCO0VBS2xCOzs7O1dBQ0Qsc0JBQWNDLEtBQWQsRUFBcUI7TUFDbkIsSUFBTUMsS0FBSyxHQUFHLElBQWQ7TUFDQUEsS0FBSyxDQUFDVixLQUFOLENBQVlXLFdBQVosQ0FBd0JELEtBQUssQ0FBQ1YsS0FBTixDQUFZWSxPQUFaLENBQW9CQyxFQUE1QztNQUNBSCxLQUFLLENBQUNWLEtBQU4sQ0FBWWMsYUFBWixDQUEwQkMsY0FBMUIsQ0FBeUMsVUFBQ0MsVUFBRCxFQUFnQjtRQUN2RCxJQUFJQyxLQUFLLEdBQUdDLFNBQVo7UUFDQSxJQUFJQyxZQUFZLEdBQUdULEtBQUssQ0FBQ1YsS0FBTixDQUFZRSxhQUFaLENBQTBCQyxJQUExQixDQUErQmdCLFlBQWxEOztRQUNBLElBQUlULEtBQUssQ0FBQ1YsS0FBTixDQUFZb0IsU0FBWixLQUEwQixNQUE5QixFQUFzQztVQUNwQ0gsS0FBSyxHQUFHRSxZQUFZLENBQUNULEtBQUssQ0FBQ1YsS0FBTixDQUFZcUIsU0FBYixDQUFaLENBQW9DWCxLQUFLLENBQUNWLEtBQU4sQ0FBWXNCLGNBQWhELEVBQWdFQyxTQUF4RTtRQUNE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d2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRvTG9uTGF0LCBmcm9tTG9uTGF0LCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0RFIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1kZVwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNFTiBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZW5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBvcHVwRnVuY3Rpb25zID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIiA/IHBvcHVwRnVuY3Rpb25zREUgOiBwb3B1cEZ1bmN0aW9uc0VOO1xuICAgIHRoaXMuY2xpY2tGZWF0dXJlID0gdGhpcy5jbGlja0ZlYXR1cmUuYmluZCh0aGlzKTtcblxuICB9XG4gIGNsaWNrRmVhdHVyZSAoZXZlbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgc2NvcGUucHJvcHMuc2V0QWN0aXZlSWQoc2NvcGUucHJvcHMuZmVhdHVyZS5pZCk7XG4gICAgc2NvcGUucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZSgodG1wRmVhdHVyZSkgPT4ge1xuICAgICAgbGV0IGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IHJvdXRlckxheWVycyA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIikge1xuICAgICAgICBsYXllciA9IHJvdXRlckxheWVyc1tzY29wZS5wcm9wcy5sYXllckFyZWFdW3Njb3BlLnByb3BzLmxheWVyVmFsdWVBcmVhXS5sYXllckRhdGE7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIGxheWVyID0gcm91dGVyTGF5ZXJzW3Njb3BlLnByb3BzLmxheWVyUm91dGVdW3Njb3BlLnByb3BzLmxheWVyVmFsdWVSb3V0ZV0ubGF5ZXJEYXRhO1xuICAgICAgfVxuICAgICAgaWYgKHRtcEZlYXR1cmUuZ2V0KCd0aWQnKSA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZCkge1xuICAgICAgICBsZXQgY2xpY2tTdHlsZUlkID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNsaWNrTG9jc3R5bGU7XG4gICAgICAgIGlmIChjbGlja1N0eWxlSWQpIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0pIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFtjbGlja1N0eWxlSWRdLCB7XG4gICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0uZ2V0U3R5bGVGdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaXMgc3RpbGwgY2xpY2tlZFxuICAgICAgICAgICAgICAgIHNjb3BlLm1hcFNlbGVjdEludGVyYWN0aW9uLmdldEZlYXR1cmVzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gdG1wRmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmZWF0dXJlIGlzIHN0aWxsIGNsaWNrZWQsIHN0eWxlIGl0IGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlKSB7XG4gICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLmdldFN0eWxlRnVuY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGU7XG4gICAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgICAgIGxldCBleHRlbnQgPSB0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSBqUXVlcnkoXCIuYzRnLXNpZGVib2FyZC5jNGctb3BlblwiKS5jc3MoJ3dpZHRoJyk7XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgd2lkdGggPSB3aWR0aC5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAgIHdpZHRoID0gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aFswXSA6IHdpZHRoO1xuICAgICAgICAgICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKSArICA1MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCA9IDUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHBhZGRpbmcgPSBbNTAsIHdpZHRoLCA1MCwgNTBdO1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdChleHRlbnQsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgICAgICAgICAgbWF4Wm9vbTogMTZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xheWVyLmxvY3N0eWxlXS5zdHlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gcmVmcmVzaCBjc3MgY2xhc3Nlc1xuICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignbGknKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgfSk7XG4gICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgLy8galF1ZXJ5KFwiZGl2LmM0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lclwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IGVudHJ5Lm9mZnNldFRvcCAtIDMwMH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY3VycmVudEZlYXR1cmUgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UgJiYgdGhpcy5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKSB7XG4gICAgICB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCd0aWQnKSA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZCkge1xuICAgICAgICAgIGN1cnJlbnRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBmZWF0dXJlRW50cnlDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgb2JqSG9vayA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRGZWF0dXJlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICAgIGxldCBzdHlsZUlkID0gY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICAgIGxldCBzdHlsZVNyYyA9ICcnO1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF07XG4gICAgICAgICAgaWYgKGxvY3N0eWxlICYmIGxvY3N0eWxlLmxvY1N0eWxlQXJyKSB7XG4gICAgICAgICAgICBzdHlsZVNyYyA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25cIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLmljb25fc3JjIDogbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN2Z1NyYyA6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnBvcHVwRnVuY3Rpb25zLmZuU3RhbmRhcmRJbmZvUG9wdXAoY3VycmVudEZlYXR1cmUsIHN0eWxlU3JjKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwibm90T3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlICYmIHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cCkge1xuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYTtcbiAgICAgICAgb2JqSG9vayA9ICB7XG4gICAgICAgICAgZW50cnk6IFwiXCIsXG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5wcm9wcy5mZWF0dXJlLFxuICAgICAgICAgIC8vIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGxhYmVsczogWyduYW1lJ10sXG4gICAgICAgICAgLy8gcm91dGVyOiBzY29wZSxcbiAgICAgICAgICBhY3RpdmVMYXllclZhbHVlOiBsYXllclZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3Mucm91dGVQbHVnaW5FbnRyeSwgb2JqSG9vayk7XG4gICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBvYmpIb29rLmVudHJ5O1xuICAgICAgfVxuICAgICAgbGV0IGVsZW1lbnQgPSB7X19odG1sOiBmZWF0dXJlRW50cnlDb250ZW50ICsgXCI8YnI+XCJ9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIHJlZj17dGhpcy5wcm9wcy5yZWZQcm9wfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17ZWxlbWVudH0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZSA/IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1hY3RpdmVcIjogXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5jbGlja0ZlYXR1cmV9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVyRmVhdHVyZUxpc3RJdGVtfSBmcm9tIFwiLi9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVJZCA9IHRoaXMuc2V0QWN0aXZlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gIH1cblxuICBzZXRBY3RpdmVJZChhY3RpdmVJZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XCJhY3RpdmVJZFwiOiBhY3RpdmVJZH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNvcnRlZEZlYXR1cmVzID0gdGhpcy5zb3J0RmVhdHVyZXMoKTtcbiAgICBpZiAoIXNvcnRlZEZlYXR1cmVzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgIHt0aGlzLnByb3BzLnN3aXRjaGVyfVxuICAgICAgICA8dWw+XG4gICAgICAgICAge3NvcnRlZEZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXNbZmVhdHVyZS5pZF0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgICAgIHJldHVybiA8Um91dGVyRmVhdHVyZUxpc3RJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHJlZlByb3A9e3RoaXMuZmVhdHVyZXNbZmVhdHVyZS5pZF19IHR5cGU9e3RoaXMucHJvcHMuZmVhdHVyZUxpc3QudHlwZX0gYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUlkID09PSBmZWF0dXJlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSWQ9e3RoaXMucHJvcHMuc2V0QWN0aXZlSWR9IHJvdXRlTW9kZT17dGhpcy5wcm9wcy5yb3V0ZU1vZGV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUm91dGU9e3RoaXMucHJvcHMubGF5ZXJSb3V0ZX0gbGF5ZXJBcmVhPXt0aGlzLnByb3BzLmxheWVyQXJlYX0gZmVhdHVyZVNvdXJjZT17dGhpcy5wcm9wcy5mZWF0dXJlU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gbGF5ZXJWYWx1ZVJvdXRlPXt0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZX0gbGF5ZXJWYWx1ZUFyZWE9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlSWQgIT09IHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZmVhdHVyZXNbdGhpcy5wcm9wcy5hY3RpdmVJZF07XG4gICAgICAgIC8vIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gICAgICAgIGxldCBzY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXJcIik7XG4gICAgICAgIHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG8oMCwgcmVmLmN1cnJlbnQub2Zmc2V0VG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0RmVhdHVyZXMoKSB7XG4gICAgY29uc3Qgcm91dGVyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJBcmVhIDogdGhpcy5wcm9wcy5sYXllclJvdXRlO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlO1xuXG4gICAgaWYgKCFyb3V0ZXJMYXllcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TGFiZWxQcm9wID0gcm91dGVyTGF5ZXJzW2N1cnJlbnRMYXllcl1bY3VycmVudExheWVyVmFsdWVdWydtYXBMYWJlbCddO1xuICAgIGxldCBmZWF0dXJlcyA9IFsuLi50aGlzLnByb3BzLmZlYXR1cmVMaXN0LmZlYXR1cmVzXTtcbiAgICByZXR1cm4gZmVhdHVyZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgbGV0IGFWYWx1ZXMgPSBhLCBiVmFsdWVzID0gYjtcbiAgICAgIGlmIChhLnRhZ3MgJiYgYi50YWdzKSB7XG4gICAgICAgIGFWYWx1ZXMgPSBhLnRhZ3M7XG4gICAgICAgIGJWYWx1ZXMgPSBiLnRhZ3M7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4oYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSkpIHtcbiAgICAgICAgLy8gc3RyaW5nIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA8IGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPyAtMSA6IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBudW1lcmljIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSAtIGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7Il0sIm5hbWVzIjpbIlJvdXRlckZlYXR1cmVMaXN0SXRlbSIsInByb3BzIiwicG9wdXBGdW5jdGlvbnMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImxhbmciLCJwb3B1cEZ1bmN0aW9uc0RFIiwicG9wdXBGdW5jdGlvbnNFTiIsImNsaWNrRmVhdHVyZSIsImJpbmQiLCJldmVudCIsInNjb3BlIiwic2V0QWN0aXZlSWQiLCJmZWF0dXJlIiwiaWQiLCJmZWF0dXJlU291cmNlIiwiZm9yRWFjaEZlYXR1cmUiLCJ0bXBGZWF0dXJlIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJyb3V0ZXJMYXllcnMiLCJyb3V0ZU1vZGUiLCJsYXllckFyZWEiLCJsYXllclZhbHVlQXJlYSIsImxheWVyRGF0YSIsImxheWVyUm91dGUiLCJsYXllclZhbHVlUm91dGUiLCJnZXQiLCJjbGlja1N0eWxlSWQiLCJjbGlja0xvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJzdHlsZSIsInJvdXRlcl9mcm9tX2xvY3N0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsIm1hcFNlbGVjdEludGVyYWN0aW9uIiwiZ2V0RmVhdHVyZXMiLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4IiwiYXJyYXkiLCJzZXRTdHlsZSIsImV4dGVudCIsImdldEdlb21ldHJ5IiwiZ2V0RXh0ZW50Iiwid2lkdGgiLCJqUXVlcnkiLCJjc3MiLCJzcGxpdCIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwicGFkZGluZyIsIm1hcCIsImdldFZpZXciLCJmaXQiLCJtYXhab29tIiwibG9jc3R5bGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVhY2giLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJJTkFDVElWRSIsInJlbW92ZUNsYXNzIiwiQUNUSVZFIiwiY3VycmVudEZlYXR1cmUiLCJmZWF0dXJlRW50cnlDb250ZW50Iiwib2JqSG9vayIsInR5cGUiLCJzdHlsZUlkIiwic3R5bGVTcmMiLCJsb2NTdHlsZUFyciIsInN0eWxldHlwZSIsImljb25fc3JjIiwic3ZnU3JjIiwiZm5TdGFuZGFyZEluZm9Qb3B1cCIsInBvcHVwIiwibGF5ZXJWYWx1ZSIsImVudHJ5IiwibGFiZWxzIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJyb3V0ZVBsdWdpbkVudHJ5IiwiX19odG1sIiwicmVmUHJvcCIsImFjdGl2ZSIsIkNvbXBvbmVudCIsIlJvdXRlckZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJhY3RpdmVJZCIsInNldFN0YXRlIiwic29ydGVkRmVhdHVyZXMiLCJzb3J0RmVhdHVyZXMiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzd2l0Y2hlciIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZmVhdHVyZUxpc3QiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJlZiIsInNjcm9sbEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjdXJyZW50TGF5ZXIiLCJjdXJyZW50TGF5ZXJWYWx1ZSIsImN1cnJlbnRMYWJlbFByb3AiLCJzb3J0IiwiYSIsImIiLCJhVmFsdWVzIiwiYlZhbHVlcyIsInRhZ3MiLCJpc05hTiJdLCJzb3VyY2VSb290IjoiIn0=