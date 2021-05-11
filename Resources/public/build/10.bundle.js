(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-feature-list-item.jsx":
/*!****************************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-feature-list-item.jsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterFeatureListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _geom = __webpack_require__(/*! ol/geom */ "../RoutingBundle/node_modules/ol/geom.js");

var _geom2 = _interopRequireDefault(_geom);

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "../RoutingBundle/node_modules/ol/proj.js");

var _c4gMapsPopupInfoDe = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de */ "./Resources/public/js/c4g-maps-popup-info-de.js");

var popupFunctionsDE = _interopRequireWildcard(_c4gMapsPopupInfoDe);

var _c4gMapsPopupInfoEn = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-en */ "./Resources/public/js/c4g-maps-popup-info-en.js");

var popupFunctionsEN = _interopRequireWildcard(_c4gMapsPopupInfoEn);

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    ¯\_(ツ)_/¯
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	    Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link            https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var RouterFeatureListItem = exports.RouterFeatureListItem = function (_Component) {
  _inherits(RouterFeatureListItem, _Component);

  function RouterFeatureListItem(props) {
    _classCallCheck(this, RouterFeatureListItem);

    var _this = _possibleConstructorReturn(this, (RouterFeatureListItem.__proto__ || Object.getPrototypeOf(RouterFeatureListItem)).call(this, props));

    _this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    _this.clickFeature = _this.clickFeature.bind(_this);

    return _this;
  }

  _createClass(RouterFeatureListItem, [{
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
                  var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
                  // check if feature is still clicked
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
      });
      // refresh css classes
      jQuery(this).parent().children('li').each(function (index, element) {
        jQuery(element).addClass(_c4gMapsConstant.cssConstants.INACTIVE).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
      });
      jQuery(this).addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE);
      // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
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
        var element = { __html: featureEntryContent + "<br>" };
        return _react2.default.createElement("li", { ref: this.props.refProp, dangerouslySetInnerHTML: element, className: this.props.active ? "route-features-list-element c4g-active" : "route-features-list-element c4g-inactive", onMouseUp: this.clickFeature });
      }
      return null;
    }
  }]);

  return RouterFeatureListItem;
}(_react.Component);

/***/ }),

/***/ "../RoutingBundle/Resources/public/js/components/c4g-router-feature-list.jsx":
/*!***********************************************************************************!*\
  !*** ../RoutingBundle/Resources/public/js/components/c4g-router-feature-list.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../RoutingBundle/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gRouterFeatureListItem = __webpack_require__(/*! ./c4g-router-feature-list-item.jsx */ "../RoutingBundle/Resources/public/js/components/c4g-router-feature-list-item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	    Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link            https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var RouterFeatureList = function (_Component) {
  _inherits(RouterFeatureList, _Component);

  function RouterFeatureList(props) {
    _classCallCheck(this, RouterFeatureList);

    var _this = _possibleConstructorReturn(this, (RouterFeatureList.__proto__ || Object.getPrototypeOf(RouterFeatureList)).call(this, props));

    _this.setActiveId = _this.setActiveId.bind(_this);
    _this.features = {};
    return _this;
  }

  _createClass(RouterFeatureList, [{
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({ "activeId": activeId });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sortedFeatures = this.sortFeatures();
      if (!sortedFeatures) {
        return _react2.default.createElement("div", { className: this.props.className });
      }

      return _react2.default.createElement(
        "div",
        { className: this.props.className },
        this.props.header,
        this.props.switcher,
        _react2.default.createElement(
          "ul",
          null,
          sortedFeatures.map(function (feature, index) {
            _this2.features[feature.id] = _react2.default.createRef();
            return _react2.default.createElement(_c4gRouterFeatureListItem.RouterFeatureListItem, { feature: feature, refProp: _this2.features[feature.id], type: _this2.props.featureList.type, active: _this2.props.activeId === feature.id,
              setActiveId: _this2.props.setActiveId, routeMode: _this2.props.routeMode, mapController: _this2.props.mapController,
              layerRoute: _this2.props.layerRoute, layerArea: _this2.props.layerArea, featureSource: _this2.props.featureSource,
              key: index, layerValueRoute: _this2.props.layerValueRoute, layerValueArea: _this2.props.layerValueArea });
          })
        )
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.activeId !== this.props.activeId) {
        if (this.props.activeId) {
          var ref = this.features[this.props.activeId];
          // ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
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
      var features = [].concat(_toConsumableArray(this.props.featureList.features));
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

exports.default = RouterFeatureList;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vUm91dGluZ0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4uL1JvdXRpbmdCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeCJdLCJuYW1lcyI6WyJwb3B1cEZ1bmN0aW9uc0RFIiwicG9wdXBGdW5jdGlvbnNFTiIsIlJvdXRlckZlYXR1cmVMaXN0SXRlbSIsInByb3BzIiwicG9wdXBGdW5jdGlvbnMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImxhbmciLCJjbGlja0ZlYXR1cmUiLCJiaW5kIiwiZXZlbnQiLCJzY29wZSIsInNldEFjdGl2ZUlkIiwiZmVhdHVyZSIsImlkIiwiZmVhdHVyZVNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwidG1wRmVhdHVyZSIsImxheWVyIiwidW5kZWZpbmVkIiwicm91dGVyTGF5ZXJzIiwicm91dGVNb2RlIiwibGF5ZXJBcmVhIiwibGF5ZXJWYWx1ZUFyZWEiLCJsYXllckRhdGEiLCJsYXllclJvdXRlIiwibGF5ZXJWYWx1ZVJvdXRlIiwiZ2V0IiwiY2xpY2tTdHlsZUlkIiwiY2xpY2tMb2NzdHlsZSIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJkb25lIiwic3R5bGUiLCJtYXBTZWxlY3RJbnRlcmFjdGlvbiIsImdldEZlYXR1cmVzIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsImFycmF5Iiwic2V0U3R5bGUiLCJnZXRHZW9tZXRyeSIsImdldFR5cGUiLCJtYXAiLCJnZXRWaWV3IiwiZml0IiwiZ2V0RXh0ZW50Iiwic2V0Q2VudGVyIiwiZ2V0Q29vcmRpbmF0ZXMiLCJsb2NzdHlsZSIsImpRdWVyeSIsInBhcmVudCIsImNoaWxkcmVuIiwiZWFjaCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImNzc0NvbnN0YW50cyIsIklOQUNUSVZFIiwicmVtb3ZlQ2xhc3MiLCJBQ1RJVkUiLCJjdXJyZW50RmVhdHVyZSIsImZlYXR1cmVFbnRyeUNvbnRlbnQiLCJvYmpIb29rIiwidHlwZSIsInN0eWxlSWQiLCJzdHlsZVNyYyIsImxvY1N0eWxlQXJyIiwic3R5bGV0eXBlIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJmblN0YW5kYXJkSW5mb1BvcHVwIiwicG9wdXAiLCJsYXllclZhbHVlIiwiZW50cnkiLCJsYWJlbHMiLCJhY3RpdmVMYXllclZhbHVlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInJvdXRlUGx1Z2luRW50cnkiLCJfX2h0bWwiLCJyZWZQcm9wIiwiYWN0aXZlIiwiQ29tcG9uZW50IiwiUm91dGVyRmVhdHVyZUxpc3QiLCJmZWF0dXJlcyIsImFjdGl2ZUlkIiwic2V0U3RhdGUiLCJzb3J0ZWRGZWF0dXJlcyIsInNvcnRGZWF0dXJlcyIsImNsYXNzTmFtZSIsImhlYWRlciIsInN3aXRjaGVyIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJmZWF0dXJlTGlzdCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVmIiwic2Nyb2xsRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImN1cnJlbnRMYXllciIsImN1cnJlbnRMYXllclZhbHVlIiwiY3VycmVudExhYmVsUHJvcCIsInNvcnQiLCJhIiwiYiIsImFWYWx1ZXMiLCJiVmFsdWVzIiwidGFncyIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztJQUFZQSxnQjs7QUFDWjs7SUFBWUMsZ0I7O0FBQ1o7Ozs7Ozs7Ozs7K2VBcEJBOzs7Ozs7Ozs7Ozs7O0lBdUJhQyxxQixXQUFBQSxx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QUNEO0FBQ0QsWUFBSUMsTUFBTUgsUUFBUUosZ0JBQVIsQ0FBTixDQUFKLEVBQXNDO0FBQ3BDO0FBQ0EsaUJBQU9JLFFBQVFKLGdCQUFSLElBQTRCSyxRQUFRTCxnQkFBUixDQUE1QixHQUF3RCxDQUFDLENBQXpELEdBQTZELENBQXBFO0FBQ0QsU0FIRCxNQUdPO0FBQ0w7QUFDQSxpQkFBT0ksUUFBUUosZ0JBQVIsSUFBNEJLLFFBQVFMLGdCQUFSLENBQW5DO0FBQ0Q7QUFDRixPQWJNLENBQVA7QUFjRDs7OztFQXpFNEN6QixnQjs7a0JBQTFCQyxpQiIsImZpbGUiOiIxMC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgwq9cXF8o44OEKV8vwq9cbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0ICAgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb2x5Z29uIGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7dHJhbnNmb3JtLCB0b0xvbkxhdCwgZnJvbUxvbkxhdCwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNERSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1kZVwiO1xuaW1wb3J0ICogYXMgcG9wdXBGdW5jdGlvbnNFTiBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtcG9wdXAtaW5mby1lblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFJvdXRlckZlYXR1cmVMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wb3B1cEZ1bmN0aW9ucyA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYW5nID09PSBcImRlXCIgPyBwb3B1cEZ1bmN0aW9uc0RFIDogcG9wdXBGdW5jdGlvbnNFTjtcbiAgICB0aGlzLmNsaWNrRmVhdHVyZSA9IHRoaXMuY2xpY2tGZWF0dXJlLmJpbmQodGhpcyk7XG5cbiAgfVxuICBjbGlja0ZlYXR1cmUgKGV2ZW50KSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHNjb3BlLnByb3BzLnNldEFjdGl2ZUlkKHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpO1xuICAgIHNjb3BlLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUoKHRtcEZlYXR1cmUpID0+IHtcbiAgICAgIGxldCBsYXllciA9IHVuZGVmaW5lZDtcbiAgICAgIGxldCByb3V0ZXJMYXllcnMgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyTGF5ZXJzO1xuICAgICAgaWYgKHNjb3BlLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIpIHtcbiAgICAgICAgbGF5ZXIgPSByb3V0ZXJMYXllcnNbc2NvcGUucHJvcHMubGF5ZXJBcmVhXVtzY29wZS5wcm9wcy5sYXllclZhbHVlQXJlYV0ubGF5ZXJEYXRhO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5yb3V0ZU1vZGUgPT09IFwicm91dGVcIikge1xuICAgICAgICBsYXllciA9IHJvdXRlckxheWVyc1tzY29wZS5wcm9wcy5sYXllclJvdXRlXVtzY29wZS5wcm9wcy5sYXllclZhbHVlUm91dGVdLmxheWVyRGF0YTtcbiAgICAgIH1cbiAgICAgIGlmICh0bXBGZWF0dXJlLmdldCgndGlkJykgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpIHtcbiAgICAgICAgbGV0IGNsaWNrU3R5bGVJZCA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jbGlja0xvY3N0eWxlO1xuICAgICAgICBpZiAoY2xpY2tTdHlsZUlkKSB7XG4gICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbY2xpY2tTdHlsZUlkXSwge1xuICAgICAgICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY2xpY2tTdHlsZUlkXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGlzIHN0aWxsIGNsaWNrZWRcbiAgICAgICAgICAgICAgICBzY29wZS5tYXBTZWxlY3RJbnRlcmFjdGlvbi5nZXRGZWF0dXJlcygpLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW0gPT09IHRtcEZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmVhdHVyZSBpcyBzdGlsbCBjbGlja2VkLCBzdHlsZSBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGU7XG4gICAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgICAgIGlmICh0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09IFwiUG9seWdvblwiKSB7XG4gICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5maXQodG1wRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKHRtcEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZhbHNlICYmIHNjb3BlLmJlc3RGZWF0dXJlSWRzLmluY2x1ZGVzKHRtcEZlYXR1cmUuZ2V0KCd0aWQnKSkpIHtcbiAgICAgICAgICBsZXQgbG9jc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucHJpb3JpdHlMb2NzdHlsZTtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsYXllci5sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gcmVmcmVzaCBjc3MgY2xhc3Nlc1xuICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbignbGknKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgalF1ZXJ5KGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgfSk7XG4gICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgLy8galF1ZXJ5KFwiZGl2LmM0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lclwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IGVudHJ5Lm9mZnNldFRvcCAtIDMwMH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgY3VycmVudEZlYXR1cmUgPSBudWxsO1xuICAgIHRoaXMucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZShmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgaWYgKGZlYXR1cmUuZ2V0KCd0aWQnKSA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZCkge1xuICAgICAgICBjdXJyZW50RmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBcIlwiO1xuICAgIGxldCBvYmpIb29rID0gbnVsbDtcbiAgICBpZiAoY3VycmVudEZlYXR1cmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwib3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAoY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpKSB7XG4gICAgICAgICAgbGV0IHN0eWxlSWQgPSBjdXJyZW50RmVhdHVyZS5nZXQoJ2xvY3N0eWxlJyk7XG4gICAgICAgICAgbGV0IHN0eWxlU3JjID0gJyc7XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXTtcbiAgICAgICAgICBpZiAobG9jc3R5bGUgJiYgbG9jc3R5bGUubG9jU3R5bGVBcnIpIHtcbiAgICAgICAgICAgIHN0eWxlU3JjID0gbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvblwiID8gbG9jc3R5bGUubG9jU3R5bGVBcnIuaWNvbl9zcmMgOiBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdHlsZXR5cGUgPT09IFwiY3VzdF9pY29uX3N2Z1wiID8gbG9jc3R5bGUubG9jU3R5bGVBcnIuc3ZnU3JjIDogXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IHRoaXMucG9wdXBGdW5jdGlvbnMuZm5TdGFuZGFyZEluZm9Qb3B1cChjdXJyZW50RmVhdHVyZSwgc3R5bGVTcmMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJub3RPdmVycGFzc1wiKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUgJiYgdGhpcy5wcm9wcy5mZWF0dXJlLnBvcHVwKSB7XG4gICAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxheWVyVmFsdWUgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJyb3V0ZVwiID8gdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGUgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhO1xuICAgICAgICBvYmpIb29rID0gIHtcbiAgICAgICAgICBlbnRyeTogXCJcIixcbiAgICAgICAgICBmZWF0dXJlOiB0aGlzLnByb3BzLmZlYXR1cmUsXG4gICAgICAgICAgLy8gdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgbGFiZWxzOiBbJ25hbWUnXSxcbiAgICAgICAgICAvLyByb3V0ZXI6IHNjb3BlLFxuICAgICAgICAgIGFjdGl2ZUxheWVyVmFsdWU6IGxheWVyVmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5yb3V0ZVBsdWdpbkVudHJ5LCBvYmpIb29rKTtcbiAgICAgICAgZmVhdHVyZUVudHJ5Q29udGVudCA9IG9iakhvb2suZW50cnk7XG4gICAgICB9XG4gICAgICBsZXQgZWxlbWVudCA9IHtfX2h0bWw6IGZlYXR1cmVFbnRyeUNvbnRlbnQgKyBcIjxicj5cIn07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgcmVmPXt0aGlzLnByb3BzLnJlZlByb3B9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtlbGVtZW50fSBjbGFzc05hbWU9e3RoaXMucHJvcHMuYWN0aXZlID8gXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWFjdGl2ZVwiOiBcInJvdXRlLWZlYXR1cmVzLWxpc3QtZWxlbWVudCBjNGctaW5hY3RpdmVcIn0gb25Nb3VzZVVwPXt0aGlzLmNsaWNrRmVhdHVyZX0vPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdCAgICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckZlYXR1cmVMaXN0SXRlbX0gZnJvbSBcIi4vYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlSWQgPSB0aGlzLnNldEFjdGl2ZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICB9XG5cbiAgc2V0QWN0aXZlSWQoYWN0aXZlSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1wiYWN0aXZlSWRcIjogYWN0aXZlSWR9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzb3J0ZWRGZWF0dXJlcyA9IHRoaXMuc29ydEZlYXR1cmVzKCk7XG4gICAgaWYgKCFzb3J0ZWRGZWF0dXJlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICB7dGhpcy5wcm9wcy5zd2l0Y2hlcn1cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzb3J0ZWRGZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckZlYXR1cmVMaXN0SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSByZWZQcm9wPXt0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdfSB0eXBlPXt0aGlzLnByb3BzLmZlYXR1cmVMaXN0LnR5cGV9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gZmVhdHVyZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUlkPXt0aGlzLnByb3BzLnNldEFjdGl2ZUlkfSByb3V0ZU1vZGU9e3RoaXMucHJvcHMucm91dGVNb2RlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclJvdXRlPXt0aGlzLnByb3BzLmxheWVyUm91dGV9IGxheWVyQXJlYT17dGhpcy5wcm9wcy5sYXllckFyZWF9IGZlYXR1cmVTb3VyY2U9e3RoaXMucHJvcHMuZmVhdHVyZVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGxheWVyVmFsdWVSb3V0ZT17dGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGV9IGxheWVyVmFsdWVBcmVhPXt0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlByb3BzLmFjdGl2ZUlkICE9PSB0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmZlYXR1cmVzW3RoaXMucHJvcHMuYWN0aXZlSWRdO1xuICAgICAgICAvLyByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xuICAgICAgICBsZXQgc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1yZXN1bHQtY29udGFpbmVyXCIpO1xuICAgICAgICBzY3JvbGxFbGVtZW50LnNjcm9sbFRvKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc29ydEZlYXR1cmVzKCkge1xuICAgIGNvbnN0IHJvdXRlckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICBjb25zdCBjdXJyZW50TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJSb3V0ZTtcbiAgICBjb25zdCBjdXJyZW50TGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWEgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZTtcblxuICAgIGlmICghcm91dGVyTGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudExhYmVsUHJvcCA9IHJvdXRlckxheWVyc1tjdXJyZW50TGF5ZXJdW2N1cnJlbnRMYXllclZhbHVlXVsnbWFwTGFiZWwnXTtcbiAgICBsZXQgZmVhdHVyZXMgPSBbLi4udGhpcy5wcm9wcy5mZWF0dXJlTGlzdC5mZWF0dXJlc107XG4gICAgcmV0dXJuIGZlYXR1cmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGxldCBhVmFsdWVzID0gYSwgYlZhbHVlcyA9IGI7XG4gICAgICBpZiAoYS50YWdzICYmIGIudGFncykge1xuICAgICAgICBhVmFsdWVzID0gYS50YWdzO1xuICAgICAgICBiVmFsdWVzID0gYi50YWdzO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0pKSB7XG4gICAgICAgIC8vIHN0cmluZyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPCBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gLSBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==