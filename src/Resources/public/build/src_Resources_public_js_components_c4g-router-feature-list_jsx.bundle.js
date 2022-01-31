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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctcm91dGVyLWZlYXR1cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUJBQXVCLG1CQUFPLENBQUMsd0ZBQXVCOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ05oRztBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ0o5RjtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7Ozs7OztBQ0poRyx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhELHNCQUFzQixtQkFBTyxDQUFDLHNGQUFzQjs7QUFFcEQsaUNBQWlDLG1CQUFPLENBQUMsNEdBQWlDOztBQUUxRSx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBd0I7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMseUJBQXlCLFNBQVMseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmhHOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBR2FBOzs7OztBQUVYLGlDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxjQUFMLEdBQXNCRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLElBQXBCLENBQXlCQyxJQUF6QixLQUFrQyxJQUFsQyxHQUF5Q0MsZ0JBQXpDLEdBQTREQyxnQkFBbEY7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLGdEQUFwQjtBQUhpQjtBQUtsQjs7OztXQUNELHNCQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0FBLE1BQUFBLEtBQUssQ0FBQ1YsS0FBTixDQUFZVyxXQUFa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ekU0Q3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRvTG9uTGF0LCBmcm9tTG9uTGF0LCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0RFIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1kZVwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNFTiBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZW5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBvcHVwRnVuY3Rpb25zID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIiA/IHBvcHVwRnVuY3Rpb25zREUgOiBwb3B1cEZ1bmN0aW9uc0VOO1xuICAgIHRoaXMuY2xpY2tGZWF0dXJlID0gdGhpcy5jbGlja0ZlYXR1cmUuYmluZCh0aGlzKTtcblxuICB9XG4gIGNsaWNrRmVhdHVyZSAoZXZlbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgc2NvcGUucHJvcHMuc2V0QWN0aXZlSWQoc2NvcGUucHJvcHMuZmVhdHVyZS5pZCk7XG4gICAgc2NvcGUucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZSgodG1wRmVhdHVyZSkgPT4ge1xuICAgICAgbGV0IGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IHJvdXRlckxheWVycyA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIikge1xuICAgICAgICBsYXllciA9IHJvdXRlckxheWVyc1tzY29wZS5wcm9wcy5sYXllckFyZWFdW3Njb3BlLnByb3BzLmxheWVyVmFsdWVBcmVhXS5sYXllckRhdGE7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIGxheWVyID0gcm91dGVyTGF5ZXJzW3Njb3BlLnByb3BzLmxheWVyUm91dGVdW3Njb3BlLnByb3BzLmxheWVyVmFsdWVSb3V0ZV0ubGF5ZXJEYXRhO1xuICAgICAgfVxuICAgICAgaWYgKHRtcEZlYXR1cmUuZ2V0KCd0aWQnKSA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZCkge1xuICAgICAgICBsZXQgY2xpY2tTdHlsZUlkID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNsaWNrTG9jc3R5bGU7XG4gICAgICAgIGlmIChjbGlja1N0eWxlSWQpIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0pIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFtjbGlja1N0eWxlSWRdLCB7XG4gICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaXMgc3RpbGwgY2xpY2tlZFxuICAgICAgICAgICAgICAgIHNjb3BlLm1hcFNlbGVjdEludGVyYWN0aW9uLmdldEZlYXR1cmVzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gdG1wRmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmZWF0dXJlIGlzIHN0aWxsIGNsaWNrZWQsIHN0eWxlIGl0IGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY2xpY2tTdHlsZUlkXS5zdHlsZTtcbiAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgaWYgKHRtcEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT0gXCJQb2x5Z29uXCIpIHtcbiAgICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdCh0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIodG1wRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmFsc2UgJiYgc2NvcGUuYmVzdEZlYXR1cmVJZHMuaW5jbHVkZXModG1wRmVhdHVyZS5nZXQoJ3RpZCcpKSkge1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcmlvcml0eUxvY3N0eWxlO1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xheWVyLmxvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyByZWZyZXNoIGNzcyBjbGFzc2VzXG4gICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdsaScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICB9KTtcbiAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAvLyBqUXVlcnkoXCJkaXYuYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogZW50cnkub2Zmc2V0VG9wIC0gMzAwfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjdXJyZW50RmVhdHVyZSA9IG51bGw7XG4gICAgdGhpcy5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgIGN1cnJlbnRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgZmVhdHVyZUVudHJ5Q29udGVudCA9IFwiXCI7XG4gICAgbGV0IG9iakhvb2sgPSBudWxsO1xuICAgIGlmIChjdXJyZW50RmVhdHVyZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJvdmVycGFzc1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RmVhdHVyZS5nZXQoJ2xvY3N0eWxlJykpIHtcbiAgICAgICAgICBsZXQgc3R5bGVJZCA9IGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKTtcbiAgICAgICAgICBsZXQgc3R5bGVTcmMgPSAnJztcbiAgICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdO1xuICAgICAgICAgIGlmIChsb2NzdHlsZSAmJiBsb2NzdHlsZS5sb2NTdHlsZUFycikge1xuICAgICAgICAgICAgc3R5bGVTcmMgPSBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdHlsZXR5cGUgPT09IFwiY3VzdF9pY29uXCIgPyBsb2NzdHlsZS5sb2NTdHlsZUFyci5pY29uX3NyYyA6IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgPyBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdmdTcmMgOiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gdGhpcy5wb3B1cEZ1bmN0aW9ucy5mblN0YW5kYXJkSW5mb1BvcHVwKGN1cnJlbnRGZWF0dXJlLCBzdHlsZVNyYyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm5vdE92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZSAmJiB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXApIHtcbiAgICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gdGhpcy5wcm9wcy5mZWF0dXJlLnBvcHVwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWE7XG4gICAgICAgIG9iakhvb2sgPSAge1xuICAgICAgICAgIGVudHJ5OiBcIlwiLFxuICAgICAgICAgIGZlYXR1cmU6IHRoaXMucHJvcHMuZmVhdHVyZSxcbiAgICAgICAgICAvLyB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBsYWJlbHM6IFsnbmFtZSddLFxuICAgICAgICAgIC8vIHJvdXRlcjogc2NvcGUsXG4gICAgICAgICAgYWN0aXZlTGF5ZXJWYWx1ZTogbGF5ZXJWYWx1ZVxuICAgICAgICB9O1xuICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnJvdXRlUGx1Z2luRW50cnksIG9iakhvb2spO1xuICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gb2JqSG9vay5lbnRyeTtcbiAgICAgIH1cbiAgICAgIGxldCBlbGVtZW50ID0ge19faHRtbDogZmVhdHVyZUVudHJ5Q29udGVudCArIFwiPGJyPlwifTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSByZWY9e3RoaXMucHJvcHMucmVmUHJvcH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2VsZW1lbnR9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmUgPyBcInJvdXRlLWZlYXR1cmVzLWxpc3QtZWxlbWVudCBjNGctYWN0aXZlXCI6IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1pbmFjdGl2ZVwifSBvbk1vdXNlVXA9e3RoaXMuY2xpY2tGZWF0dXJlfS8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckZlYXR1cmVMaXN0SXRlbX0gZnJvbSBcIi4vYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlSWQgPSB0aGlzLnNldEFjdGl2ZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICB9XG5cbiAgc2V0QWN0aXZlSWQoYWN0aXZlSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1wiYWN0aXZlSWRcIjogYWN0aXZlSWR9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzb3J0ZWRGZWF0dXJlcyA9IHRoaXMuc29ydEZlYXR1cmVzKCk7XG4gICAgaWYgKCFzb3J0ZWRGZWF0dXJlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICB7dGhpcy5wcm9wcy5zd2l0Y2hlcn1cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzb3J0ZWRGZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckZlYXR1cmVMaXN0SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSByZWZQcm9wPXt0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdfSB0eXBlPXt0aGlzLnByb3BzLmZlYXR1cmVMaXN0LnR5cGV9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gZmVhdHVyZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUlkPXt0aGlzLnByb3BzLnNldEFjdGl2ZUlkfSByb3V0ZU1vZGU9e3RoaXMucHJvcHMucm91dGVNb2RlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclJvdXRlPXt0aGlzLnByb3BzLmxheWVyUm91dGV9IGxheWVyQXJlYT17dGhpcy5wcm9wcy5sYXllckFyZWF9IGZlYXR1cmVTb3VyY2U9e3RoaXMucHJvcHMuZmVhdHVyZVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGxheWVyVmFsdWVSb3V0ZT17dGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGV9IGxheWVyVmFsdWVBcmVhPXt0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlByb3BzLmFjdGl2ZUlkICE9PSB0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmZlYXR1cmVzW3RoaXMucHJvcHMuYWN0aXZlSWRdO1xuICAgICAgICAvLyByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xuICAgICAgICBsZXQgc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1yZXN1bHQtY29udGFpbmVyXCIpO1xuICAgICAgICBzY3JvbGxFbGVtZW50LnNjcm9sbFRvKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc29ydEZlYXR1cmVzKCkge1xuICAgIGNvbnN0IHJvdXRlckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICBjb25zdCBjdXJyZW50TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJSb3V0ZTtcbiAgICBjb25zdCBjdXJyZW50TGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWEgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZTtcblxuICAgIGlmICghcm91dGVyTGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudExhYmVsUHJvcCA9IHJvdXRlckxheWVyc1tjdXJyZW50TGF5ZXJdW2N1cnJlbnRMYXllclZhbHVlXVsnbWFwTGFiZWwnXTtcbiAgICBsZXQgZmVhdHVyZXMgPSBbLi4udGhpcy5wcm9wcy5mZWF0dXJlTGlzdC5mZWF0dXJlc107XG4gICAgcmV0dXJuIGZlYXR1cmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGxldCBhVmFsdWVzID0gYSwgYlZhbHVlcyA9IGI7XG4gICAgICBpZiAoYS50YWdzICYmIGIudGFncykge1xuICAgICAgICBhVmFsdWVzID0gYS50YWdzO1xuICAgICAgICBiVmFsdWVzID0gYi50YWdzO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0pKSB7XG4gICAgICAgIC8vIHN0cmluZyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPCBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gLSBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIlJvdXRlckZlYXR1cmVMaXN0SXRlbSIsInByb3BzIiwicG9wdXBGdW5jdGlvbnMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImxhbmciLCJwb3B1cEZ1bmN0aW9uc0RFIiwicG9wdXBGdW5jdGlvbnNFTiIsImNsaWNrRmVhdHVyZSIsImJpbmQiLCJldmVudCIsInNjb3BlIiwic2V0QWN0aXZlSWQiLCJmZWF0dXJlIiwiaWQiLCJmZWF0dXJlU291cmNlIiwiZm9yRWFjaEZlYXR1cmUiLCJ0bXBGZWF0dXJlIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJyb3V0ZXJMYXllcnMiLCJyb3V0ZU1vZGUiLCJsYXllckFyZWEiLCJsYXllclZhbHVlQXJlYSIsImxheWVyRGF0YSIsImxheWVyUm91dGUiLCJsYXllclZhbHVlUm91dGUiLCJnZXQiLCJjbGlja1N0eWxlSWQiLCJjbGlja0xvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJzdHlsZSIsIm1hcFNlbGVjdEludGVyYWN0aW9uIiwiZ2V0RmVhdHVyZXMiLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4IiwiYXJyYXkiLCJzZXRTdHlsZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIm1hcCIsImdldFZpZXciLCJmaXQiLCJnZXRFeHRlbnQiLCJzZXRDZW50ZXIiLCJnZXRDb29yZGluYXRlcyIsImJlc3RGZWF0dXJlSWRzIiwiaW5jbHVkZXMiLCJsb2NzdHlsZSIsInByaW9yaXR5TG9jc3R5bGUiLCJqUXVlcnkiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVhY2giLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJJTkFDVElWRSIsInJlbW92ZUNsYXNzIiwiQUNUSVZFIiwiY3VycmVudEZlYXR1cmUiLCJmZWF0dXJlRW50cnlDb250ZW50Iiwib2JqSG9vayIsInR5cGUiLCJzdHlsZUlkIiwic3R5bGVTcmMiLCJsb2NTdHlsZUFyciIsInN0eWxldHlwZSIsImljb25fc3JjIiwic3ZnU3JjIiwiZm5TdGFuZGFyZEluZm9Qb3B1cCIsInBvcHVwIiwibGF5ZXJWYWx1ZSIsImVudHJ5IiwibGFiZWxzIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJyb3V0ZVBsdWdpbkVudHJ5IiwiX19odG1sIiwicmVmUHJvcCIsImFjdGl2ZSIsIkNvbXBvbmVudCIsIlJvdXRlckZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJhY3RpdmVJZCIsInNldFN0YXRlIiwic29ydGVkRmVhdHVyZXMiLCJzb3J0RmVhdHVyZXMiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzd2l0Y2hlciIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZmVhdHVyZUxpc3QiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJlZiIsInNjcm9sbEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjdXJyZW50TGF5ZXIiLCJjdXJyZW50TGF5ZXJWYWx1ZSIsImN1cnJlbnRMYWJlbFByb3AiLCJzb3J0IiwiYSIsImIiLCJhVmFsdWVzIiwiYlZhbHVlcyIsInRhZ3MiLCJpc05hTiJdLCJzb3VyY2VSb290IjoiIn0=