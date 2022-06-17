(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-router-feature-list_jsx"],{

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
              var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
              tmpFeature.setStyle(style);

              if (tmpFeature.getGeometry().getType() == "Polygon") {
                scope.props.mapController.map.getView().fit(tmpFeature.getGeometry().getExtent());
              } else {
                scope.props.mapController.map.getView().setCenter(tmpFeature.getGeometry().getCoordinates());
              }
            }
          }
        } else {
          if (false) { var locstyle; } else {
            tmpFeature.setStyle(scope.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
          }
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
      this.props.featureSource.forEachFeature(function (feature) {
        if (feature.get('tid') === scope.props.feature.id) {
          currentFeature = feature;
        }
      });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWZlYXR1cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ05oRztBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ0o5RjtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ0poRyx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhELHNCQUFzQixtQkFBTyxDQUFDLHNGQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMseUJBQXlCLFNBQVMseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhHOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR2FBOzs7OztFQUVYLCtCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFDQSxNQUFLQyxjQUFMLEdBQXNCRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLElBQXBCLENBQXlCQyxJQUF6QixLQUFrQyxJQUFsQyxHQUF5Q0MsZ0JBQXpDLEdBQTREQyxnQkFBbEY7SUFDQSxNQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLGdEQUFwQjtJQUhpQjtFQUtsQjs7OztXQUNELHNCQUFjQyxLQUFkLEVBQXFCO01BQ25CLElBQU1DLEtBQUssR0FBRyxJQUFkO01BQ0FBLEtBQUssQ0FBQ1YsS0FBTixDQUFZVyxXQUFaLENBQXdC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QUE3QyxHQUE4RCxLQUFLdEIsS0FBTCxDQUFXeUIsZUFBbkc7O01BRUEsSUFBSSxDQUFDTixZQUFMLEVBQW1CO1FBQ2pCO01BQ0Q7O01BRUQsSUFBTThGLGdCQUFnQixHQUFHOUYsWUFBWSxDQUFDNEYsWUFBRCxDQUFaLENBQTJCQyxpQkFBM0IsRUFBOEMsVUFBOUMsQ0FBekI7TUFDQSxJQUFJdEIsUUFBUSx1Q0FBTyxLQUFLMUYsS0FBTCxDQUFXb0csV0FBWCxDQUF1QlYsUUFBOUIsQ0FBWjtNQUNBLE9BQU9BLFFBQVEsQ0FBQ3dCLElBQVQsQ0FBYyxVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7UUFDbkMsSUFBSUMsT0FBTyxHQUFHRixDQUFkO1FBQUEsSUFBaUJHLE9BQU8sR0FBR0YsQ0FBM0I7O1FBQ0EsSUFBSUQsQ0FBQyxDQUFDSSxJQUFGLElBQVVILENBQUMsQ0FBQ0csSUFBaEIsRUFBc0I7VUFDcEJGLE9BQU8sR0FBR0YsQ0FBQyxDQUFDSSxJQUFaO1VBQ0FELE9BQU8sR0FBR0YsQ0FBQyxDQUFDRyxJQUFaO1FBQ0Q7O1FBQ0QsSUFBSUMsS0FBSyxDQUFDSCxPQUFPLENBQUNKLGdCQUFELENBQVIsQ0FBVCxFQUFzQztVQUNwQztVQUNBLE9BQU9JLE9BQU8sQ0FBQ0osZ0JBQUQsQ0FBUCxHQUE0QkssT0FBTyxDQUFDTCxnQkFBRCxDQUFuQyxHQUF3RCxDQUFDLENBQXpELEdBQTZELENBQXBFO1FBQ0QsQ0FIRCxNQUdPO1VBQ0w7VUFDQSxPQUFPSSxPQUFPLENBQUNKLGdCQUFELENBQVAsR0FBNEJLLE9BQU8sQ0FBQ0wsZ0JBQUQsQ0FBMUM7UUFDRDtNQUNGLENBYk0sQ0FBUDtJQWNEOzs7RUF6RTRDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb2x5Z29uIGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge3RyYW5zZm9ybSwgdG9Mb25MYXQsIGZyb21Mb25MYXQsIHRyYW5zZm9ybUV4dGVudH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zREUgZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1wb3B1cC1pbmZvLWRlXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0VOIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1lblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucG9wdXBGdW5jdGlvbnMgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiID8gcG9wdXBGdW5jdGlvbnNERSA6IHBvcHVwRnVuY3Rpb25zRU47XG4gICAgdGhpcy5jbGlja0ZlYXR1cmUgPSB0aGlzLmNsaWNrRmVhdHVyZS5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgY2xpY2tGZWF0dXJlIChldmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBzY29wZS5wcm9wcy5zZXRBY3RpdmVJZChzY29wZS5wcm9wcy5mZWF0dXJlLmlkKTtcbiAgICBzY29wZS5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKCh0bXBGZWF0dXJlKSA9PiB7XG4gICAgICBsZXQgbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgcm91dGVyTGF5ZXJzID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICAgIGxheWVyID0gcm91dGVyTGF5ZXJzW3Njb3BlLnByb3BzLmxheWVyQXJlYV1bc2NvcGUucHJvcHMubGF5ZXJWYWx1ZUFyZWFdLmxheWVyRGF0YTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMucm91dGVNb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgbGF5ZXIgPSByb3V0ZXJMYXllcnNbc2NvcGUucHJvcHMubGF5ZXJSb3V0ZV1bc2NvcGUucHJvcHMubGF5ZXJWYWx1ZVJvdXRlXS5sYXllckRhdGE7XG4gICAgICB9XG4gICAgICBpZiAodG1wRmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgIGxldCBjbGlja1N0eWxlSWQgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2xpY2tMb2NzdHlsZTtcbiAgICAgICAgaWYgKGNsaWNrU3R5bGVJZCkge1xuICAgICAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY2xpY2tTdHlsZUlkXSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW2NsaWNrU3R5bGVJZF0sIHtcbiAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGU7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBpcyBzdGlsbCBjbGlja2VkXG4gICAgICAgICAgICAgICAgc2NvcGUubWFwU2VsZWN0SW50ZXJhY3Rpb24uZ2V0RmVhdHVyZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSB0bXBGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZlYXR1cmUgaXMgc3RpbGwgY2xpY2tlZCwgc3R5bGUgaXQgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlO1xuICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICBpZiAodG1wRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PSBcIlBvbHlnb25cIikge1xuICAgICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KHRtcEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcih0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmYWxzZSAmJiBzY29wZS5iZXN0RmVhdHVyZUlkcy5pbmNsdWRlcyh0bXBGZWF0dXJlLmdldCgndGlkJykpKSB7XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGU7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHJlZnJlc2ggY3NzIGNsYXNzZXNcbiAgICBqUXVlcnkodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgIH0pO1xuICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgIC8vIGpRdWVyeShcImRpdi5jNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXJcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBlbnRyeS5vZmZzZXRUb3AgLSAzMDB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGN1cnJlbnRGZWF0dXJlID0gbnVsbDtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgndGlkJykgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpIHtcbiAgICAgICAgY3VycmVudEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBmZWF0dXJlRW50cnlDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgb2JqSG9vayA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRGZWF0dXJlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICAgIGxldCBzdHlsZUlkID0gY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICAgIGxldCBzdHlsZVNyYyA9ICcnO1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF07XG4gICAgICAgICAgaWYgKGxvY3N0eWxlICYmIGxvY3N0eWxlLmxvY1N0eWxlQXJyKSB7XG4gICAgICAgICAgICBzdHlsZVNyYyA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25cIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLmljb25fc3JjIDogbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN2Z1NyYyA6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnBvcHVwRnVuY3Rpb25zLmZuU3RhbmRhcmRJbmZvUG9wdXAoY3VycmVudEZlYXR1cmUsIHN0eWxlU3JjKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwibm90T3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlICYmIHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cCkge1xuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYTtcbiAgICAgICAgb2JqSG9vayA9ICB7XG4gICAgICAgICAgZW50cnk6IFwiXCIsXG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5wcm9wcy5mZWF0dXJlLFxuICAgICAgICAgIC8vIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGxhYmVsczogWyduYW1lJ10sXG4gICAgICAgICAgLy8gcm91dGVyOiBzY29wZSxcbiAgICAgICAgICBhY3RpdmVMYXllclZhbHVlOiBsYXllclZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3Mucm91dGVQbHVnaW5FbnRyeSwgb2JqSG9vayk7XG4gICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBvYmpIb29rLmVudHJ5O1xuICAgICAgfVxuICAgICAgbGV0IGVsZW1lbnQgPSB7X19odG1sOiBmZWF0dXJlRW50cnlDb250ZW50ICsgXCI8YnI+XCJ9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIHJlZj17dGhpcy5wcm9wcy5yZWZQcm9wfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17ZWxlbWVudH0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZSA/IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1hY3RpdmVcIjogXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5jbGlja0ZlYXR1cmV9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVyRmVhdHVyZUxpc3RJdGVtfSBmcm9tIFwiLi9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC1pdGVtLmpzeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRBY3RpdmVJZCA9IHRoaXMuc2V0QWN0aXZlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gIH1cblxuICBzZXRBY3RpdmVJZChhY3RpdmVJZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XCJhY3RpdmVJZFwiOiBhY3RpdmVJZH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNvcnRlZEZlYXR1cmVzID0gdGhpcy5zb3J0RmVhdHVyZXMoKTtcbiAgICBpZiAoIXNvcnRlZEZlYXR1cmVzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgIHt0aGlzLnByb3BzLnN3aXRjaGVyfVxuICAgICAgICA8dWw+XG4gICAgICAgICAge3NvcnRlZEZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXNbZmVhdHVyZS5pZF0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgICAgIHJldHVybiA8Um91dGVyRmVhdHVyZUxpc3RJdGVtIGZlYXR1cmU9e2ZlYXR1cmV9IHJlZlByb3A9e3RoaXMuZmVhdHVyZXNbZmVhdHVyZS5pZF19IHR5cGU9e3RoaXMucHJvcHMuZmVhdHVyZUxpc3QudHlwZX0gYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZUlkID09PSBmZWF0dXJlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSWQ9e3RoaXMucHJvcHMuc2V0QWN0aXZlSWR9IHJvdXRlTW9kZT17dGhpcy5wcm9wcy5yb3V0ZU1vZGV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUm91dGU9e3RoaXMucHJvcHMubGF5ZXJSb3V0ZX0gbGF5ZXJBcmVhPXt0aGlzLnByb3BzLmxheWVyQXJlYX0gZmVhdHVyZVNvdXJjZT17dGhpcy5wcm9wcy5mZWF0dXJlU291cmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gbGF5ZXJWYWx1ZVJvdXRlPXt0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZX0gbGF5ZXJWYWx1ZUFyZWE9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWF9Lz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlSWQgIT09IHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZmVhdHVyZXNbdGhpcy5wcm9wcy5hY3RpdmVJZF07XG4gICAgICAgIC8vIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gICAgICAgIGxldCBzY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctcm91dGVyLXJlc3VsdC1jb250YWluZXJcIik7XG4gICAgICAgIHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG8oMCwgcmVmLmN1cnJlbnQub2Zmc2V0VG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0RmVhdHVyZXMoKSB7XG4gICAgY29uc3Qgcm91dGVyTGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJBcmVhIDogdGhpcy5wcm9wcy5sYXllclJvdXRlO1xuICAgIGNvbnN0IGN1cnJlbnRMYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlO1xuXG4gICAgaWYgKCFyb3V0ZXJMYXllcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50TGFiZWxQcm9wID0gcm91dGVyTGF5ZXJzW2N1cnJlbnRMYXllcl1bY3VycmVudExheWVyVmFsdWVdWydtYXBMYWJlbCddO1xuICAgIGxldCBmZWF0dXJlcyA9IFsuLi50aGlzLnByb3BzLmZlYXR1cmVMaXN0LmZlYXR1cmVzXTtcbiAgICByZXR1cm4gZmVhdHVyZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgbGV0IGFWYWx1ZXMgPSBhLCBiVmFsdWVzID0gYjtcbiAgICAgIGlmIChhLnRhZ3MgJiYgYi50YWdzKSB7XG4gICAgICAgIGFWYWx1ZXMgPSBhLnRhZ3M7XG4gICAgICAgIGJWYWx1ZXMgPSBiLnRhZ3M7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4oYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSkpIHtcbiAgICAgICAgLy8gc3RyaW5nIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA8IGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPyAtMSA6IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBudW1lcmljIHZhbHVlc1xuICAgICAgICByZXR1cm4gYVZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSAtIGJWYWx1ZXNbY3VycmVudExhYmVsUHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwicHJvcHMiLCJwb3B1cEZ1bmN0aW9ucyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwibGFuZyIsInBvcHVwRnVuY3Rpb25zREUiLCJwb3B1cEZ1bmN0aW9uc0VOIiwiY2xpY2tGZWF0dXJlIiwiYmluZCIsImV2ZW50Iiwic2NvcGUiLCJzZXRBY3RpdmVJZCIsImZlYXR1cmUiLCJpZCIsImZlYXR1cmVTb3VyY2UiLCJmb3JFYWNoRmVhdHVyZSIsInRtcEZlYXR1cmUiLCJsYXllciIsInVuZGVmaW5lZCIsInJvdXRlckxheWVycyIsInJvdXRlTW9kZSIsImxheWVyQXJlYSIsImxheWVyVmFsdWVBcmVhIiwibGF5ZXJEYXRhIiwibGF5ZXJSb3V0ZSIsImxheWVyVmFsdWVSb3V0ZSIsImdldCIsImNsaWNrU3R5bGVJZCIsImNsaWNrTG9jc3R5bGUiLCJwcm94eSIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZG9uZSIsInN0eWxlIiwibWFwU2VsZWN0SW50ZXJhY3Rpb24iLCJnZXRGZWF0dXJlcyIsImZvckVhY2giLCJlbGVtIiwiaW5kZXgiLCJhcnJheSIsInNldFN0eWxlIiwiZ2V0R2VvbWV0cnkiLCJnZXRUeXBlIiwibWFwIiwiZ2V0VmlldyIsImZpdCIsImdldEV4dGVudCIsInNldENlbnRlciIsImdldENvb3JkaW5hdGVzIiwiYmVzdEZlYXR1cmVJZHMiLCJpbmNsdWRlcyIsImxvY3N0eWxlIiwicHJpb3JpdHlMb2NzdHlsZSIsImpRdWVyeSIsInBhcmVudCIsImNoaWxkcmVuIiwiZWFjaCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImNzc0NvbnN0YW50cyIsIklOQUNUSVZFIiwicmVtb3ZlQ2xhc3MiLCJBQ1RJVkUiLCJjdXJyZW50RmVhdHVyZSIsImZlYXR1cmVFbnRyeUNvbnRlbnQiLCJvYmpIb29rIiwidHlwZSIsInN0eWxlSWQiLCJzdHlsZVNyYyIsImxvY1N0eWxlQXJyIiwic3R5bGV0eXBlIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJmblN0YW5kYXJkSW5mb1BvcHVwIiwicG9wdXAiLCJsYXllclZhbHVlIiwiZW50cnkiLCJsYWJlbHMiLCJhY3RpdmVMYXllclZhbHVlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInJvdXRlUGx1Z2luRW50cnkiLCJfX2h0bWwiLCJyZWZQcm9wIiwiYWN0aXZlIiwiQ29tcG9uZW50IiwiUm91dGVyRmVhdHVyZUxpc3QiLCJmZWF0dXJlcyIsImFjdGl2ZUlkIiwic2V0U3RhdGUiLCJzb3J0ZWRGZWF0dXJlcyIsInNvcnRGZWF0dXJlcyIsImNsYXNzTmFtZSIsImhlYWRlciIsInN3aXRjaGVyIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJmZWF0dXJlTGlzdCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVmIiwic2Nyb2xsRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImN1cnJlbnRMYXllciIsImN1cnJlbnRMYXllclZhbHVlIiwiY3VycmVudExhYmVsUHJvcCIsInNvcnQiLCJhIiwiYiIsImFWYWx1ZXMiLCJiVmFsdWVzIiwidGFncyIsImlzTmFOIl0sInNvdXJjZVJvb3QiOiIifQ==