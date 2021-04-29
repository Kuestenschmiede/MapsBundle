(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./Resources/public/js/components/c4g-router-feature-list-item.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-feature-list-item.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterFeatureListItem = undefined;

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

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _geom2 = _interopRequireDefault(_geom);

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _c4gMapsPopupInfoDe = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de */ "./Resources/public/js/c4g-maps-popup-info-de.js");

var popupFunctionsDE = _interopRequireWildcard(_c4gMapsPopupInfoDe);

var _c4gMapsPopupInfoEn = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-en */ "./Resources/public/js/c4g-maps-popup-info-en.js");

var popupFunctionsEN = _interopRequireWildcard(_c4gMapsPopupInfoEn);

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
  (0, _inherits3.default)(RouterFeatureListItem, _Component);

  function RouterFeatureListItem(props) {
    (0, _classCallCheck3.default)(this, RouterFeatureListItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RouterFeatureListItem.__proto__ || (0, _getPrototypeOf2.default)(RouterFeatureListItem)).call(this, props));

    _this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    _this.clickFeature = _this.clickFeature.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(RouterFeatureListItem, [{
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

/***/ "./Resources/public/js/components/c4g-router-feature-list.jsx":
/*!********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-feature-list.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _c4gRouterFeatureListItem = __webpack_require__(/*! ./c4g-router-feature-list-item.jsx */ "./Resources/public/js/components/c4g-router-feature-list-item.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
  (0, _inherits3.default)(RouterFeatureList, _Component);

  function RouterFeatureList(props) {
    (0, _classCallCheck3.default)(this, RouterFeatureList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RouterFeatureList.__proto__ || (0, _getPrototypeOf2.default)(RouterFeatureList)).call(this, props));

    _this.setActiveId = _this.setActiveId.bind(_this);
    _this.features = {};
    return _this;
  }

  (0, _createClass3.default)(RouterFeatureList, [{
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
      var features = [].concat((0, _toConsumableArray3.default)(this.props.featureList.features));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LmpzeCJdLCJuYW1lcyI6WyJwb3B1cEZ1bmN0aW9uc0RFIiwicG9wdXBGdW5jdGlvbnNFTiIsIlJvdXRlckZlYXR1cmVMaXN0SXRlbSIsInByb3BzIiwicG9wdXBGdW5jdGlvbnMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImxhbmciLCJjbGlja0ZlYXR1cmUiLCJiaW5kIiwiZXZlbnQiLCJzY29wZSIsInNldEFjdGl2ZUlkIiwiZmVhdHVyZSIsImlkIiwiZmVhdHVyZVNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwidG1wRmVhdHVyZSIsImxheWVyIiwidW5kZWZpbmVkIiwicm91dGVyTGF5ZXJzIiwicm91dGVNb2RlIiwibGF5ZXJBcmVhIiwibGF5ZXJWYWx1ZUFyZWEiLCJsYXllckRhdGEiLCJsYXllclJvdXRlIiwibGF5ZXJWYWx1ZVJvdXRlIiwiZ2V0IiwiY2xpY2tTdHlsZUlkIiwiY2xpY2tMb2NzdHlsZSIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJkb25lIiwic3R5bGUiLCJtYXBTZWxlY3RJbnRlcmFjdGlvbiIsImdldEZlYXR1cmVzIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsImFycmF5Iiwic2V0U3R5bGUiLCJnZXRHZW9tZXRyeSIsImdldFR5cGUiLCJtYXAiLCJnZXRWaWV3IiwiZml0IiwiZ2V0RXh0ZW50Iiwic2V0Q2VudGVyIiwiZ2V0Q29vcmRpbmF0ZXMiLCJsb2NzdHlsZSIsImpRdWVyeSIsInBhcmVudCIsImNoaWxkcmVuIiwiZWFjaCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImNzc0NvbnN0YW50cyIsIklOQUNUSVZFIiwicmVtb3ZlQ2xhc3MiLCJBQ1RJVkUiLCJjdXJyZW50RmVhdHVyZSIsImZlYXR1cmVFbnRyeUNvbnRlbnQiLCJvYmpIb29rIiwidHlwZSIsInN0eWxlSWQiLCJzdHlsZVNyYyIsImxvY1N0eWxlQXJyIiwic3R5bGV0eXBlIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJmblN0YW5kYXJkSW5mb1BvcHVwIiwicG9wdXAiLCJsYXllclZhbHVlIiwiZW50cnkiLCJsYWJlbHMiLCJhY3RpdmVMYXllclZhbHVlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInJvdXRlUGx1Z2luRW50cnkiLCJfX2h0bWwiLCJyZWZQcm9wIiwiYWN0aXZlIiwiQ29tcG9uZW50IiwiUm91dGVyRmVhdHVyZUxpc3QiLCJmZWF0dXJlcyIsImFjdGl2ZUlkIiwic2V0U3RhdGUiLCJzb3J0ZWRGZWF0dXJlcyIsInNvcnRGZWF0dXJlcyIsImNsYXNzTmFtZSIsImhlYWRlciIsInN3aXRjaGVyIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJmZWF0dXJlTGlzdCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwicmVmIiwic2Nyb2xsRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImN1cnJlbnRMYXllciIsImN1cnJlbnRMYXllclZhbHVlIiwiY3VycmVudExhYmVsUHJvcCIsInNvcnQiLCJhIiwiYiIsImFWYWx1ZXMiLCJiVmFsdWVzIiwidGFncyIsImlzTmFOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztJQUFZQSxnQjs7QUFDWjs7SUFBWUMsZ0I7O0FBQ1o7Ozs7OztBQXBCQTs7Ozs7Ozs7Ozs7OztJQXVCYUMscUIsV0FBQUEscUI7OztBQUVYLGlDQUFZQyxL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O0FBQ0QsWUFBSUMsTUFBTUgsUUFBUUosZ0JBQVIsQ0FBTixDQUFKLEVBQXNDO0FBQ3BDO0FBQ0EsaUJBQU9JLFFBQVFKLGdCQUFSLElBQTRCSyxRQUFRTCxnQkFBUixDQUE1QixHQUF3RCxDQUFDLENBQXpELEdBQTZELENBQXBFO0FBQ0QsU0FIRCxNQUdPO0FBQ0w7QUFDQSxpQkFBT0ksUUFBUUosZ0JBQVIsSUFBNEJLLFFBQVFMLGdCQUFSLENBQW5DO0FBQ0Q7QUFDRixPQWJNLENBQVA7QUFjRDs7O0VBekU0Q3pCLGdCOztrQkFBMUJDLGlCIiwiZmlsZSI6IjYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIMKvXFxfKOODhClfL8KvXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdCAgICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge3RyYW5zZm9ybSwgdG9Mb25MYXQsIGZyb21Mb25MYXQsIHRyYW5zZm9ybUV4dGVudH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zREUgZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZGVcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zRU4gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZW5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucG9wdXBGdW5jdGlvbnMgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiID8gcG9wdXBGdW5jdGlvbnNERSA6IHBvcHVwRnVuY3Rpb25zRU47XG4gICAgdGhpcy5jbGlja0ZlYXR1cmUgPSB0aGlzLmNsaWNrRmVhdHVyZS5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgY2xpY2tGZWF0dXJlIChldmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBzY29wZS5wcm9wcy5zZXRBY3RpdmVJZChzY29wZS5wcm9wcy5mZWF0dXJlLmlkKTtcbiAgICBzY29wZS5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKCh0bXBGZWF0dXJlKSA9PiB7XG4gICAgICBsZXQgbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgcm91dGVyTGF5ZXJzID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICAgIGxheWVyID0gcm91dGVyTGF5ZXJzW3Njb3BlLnByb3BzLmxheWVyQXJlYV1bc2NvcGUucHJvcHMubGF5ZXJWYWx1ZUFyZWFdLmxheWVyRGF0YTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMucm91dGVNb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgbGF5ZXIgPSByb3V0ZXJMYXllcnNbc2NvcGUucHJvcHMubGF5ZXJSb3V0ZV1bc2NvcGUucHJvcHMubGF5ZXJWYWx1ZVJvdXRlXS5sYXllckRhdGE7XG4gICAgICB9XG4gICAgICBpZiAodG1wRmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgIGxldCBjbGlja1N0eWxlSWQgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2xpY2tMb2NzdHlsZTtcbiAgICAgICAgaWYgKGNsaWNrU3R5bGVJZCkge1xuICAgICAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY2xpY2tTdHlsZUlkXSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW2NsaWNrU3R5bGVJZF0sIHtcbiAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGU7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBpcyBzdGlsbCBjbGlja2VkXG4gICAgICAgICAgICAgICAgc2NvcGUubWFwU2VsZWN0SW50ZXJhY3Rpb24uZ2V0RmVhdHVyZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSB0bXBGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZlYXR1cmUgaXMgc3RpbGwgY2xpY2tlZCwgc3R5bGUgaXQgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlO1xuICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICBpZiAodG1wRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PSBcIlBvbHlnb25cIikge1xuICAgICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KHRtcEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcih0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmYWxzZSAmJiBzY29wZS5iZXN0RmVhdHVyZUlkcy5pbmNsdWRlcyh0bXBGZWF0dXJlLmdldCgndGlkJykpKSB7XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGU7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHJlZnJlc2ggY3NzIGNsYXNzZXNcbiAgICBqUXVlcnkodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgIH0pO1xuICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgIC8vIGpRdWVyeShcImRpdi5jNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXJcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBlbnRyeS5vZmZzZXRUb3AgLSAzMDB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGN1cnJlbnRGZWF0dXJlID0gbnVsbDtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgndGlkJykgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpIHtcbiAgICAgICAgY3VycmVudEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBmZWF0dXJlRW50cnlDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgb2JqSG9vayA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRGZWF0dXJlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICAgIGxldCBzdHlsZUlkID0gY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICAgIGxldCBzdHlsZVNyYyA9ICcnO1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF07XG4gICAgICAgICAgaWYgKGxvY3N0eWxlICYmIGxvY3N0eWxlLmxvY1N0eWxlQXJyKSB7XG4gICAgICAgICAgICBzdHlsZVNyYyA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25cIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLmljb25fc3JjIDogbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN2Z1NyYyA6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnBvcHVwRnVuY3Rpb25zLmZuU3RhbmRhcmRJbmZvUG9wdXAoY3VycmVudEZlYXR1cmUsIHN0eWxlU3JjKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwibm90T3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlICYmIHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cCkge1xuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYTtcbiAgICAgICAgb2JqSG9vayA9ICB7XG4gICAgICAgICAgZW50cnk6IFwiXCIsXG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5wcm9wcy5mZWF0dXJlLFxuICAgICAgICAgIC8vIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGxhYmVsczogWyduYW1lJ10sXG4gICAgICAgICAgLy8gcm91dGVyOiBzY29wZSxcbiAgICAgICAgICBhY3RpdmVMYXllclZhbHVlOiBsYXllclZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3Mucm91dGVQbHVnaW5FbnRyeSwgb2JqSG9vayk7XG4gICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBvYmpIb29rLmVudHJ5O1xuICAgICAgfVxuICAgICAgbGV0IGVsZW1lbnQgPSB7X19odG1sOiBmZWF0dXJlRW50cnlDb250ZW50ICsgXCI8YnI+XCJ9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIHJlZj17dGhpcy5wcm9wcy5yZWZQcm9wfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17ZWxlbWVudH0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZSA/IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1hY3RpdmVcIjogXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5jbGlja0ZlYXR1cmV9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHQgICAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZXJGZWF0dXJlTGlzdEl0ZW19IGZyb20gXCIuL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckZlYXR1cmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZUlkID0gdGhpcy5zZXRBY3RpdmVJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgfVxuXG4gIHNldEFjdGl2ZUlkKGFjdGl2ZUlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcImFjdGl2ZUlkXCI6IGFjdGl2ZUlkfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkRmVhdHVyZXMgPSB0aGlzLnNvcnRGZWF0dXJlcygpO1xuICAgIGlmICghc29ydGVkRmVhdHVyZXMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7c29ydGVkRmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcmVmUHJvcD17dGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXX0gdHlwZT17dGhpcy5wcm9wcy5mZWF0dXJlTGlzdC50eXBlfSBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlSWQgPT09IGZlYXR1cmUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJZD17dGhpcy5wcm9wcy5zZXRBY3RpdmVJZH0gcm91dGVNb2RlPXt0aGlzLnByb3BzLnJvdXRlTW9kZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJSb3V0ZT17dGhpcy5wcm9wcy5sYXllclJvdXRlfSBsYXllckFyZWE9e3RoaXMucHJvcHMubGF5ZXJBcmVhfSBmZWF0dXJlU291cmNlPXt0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBsYXllclZhbHVlUm91dGU9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlfSBsYXllclZhbHVlQXJlYT17dGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZQcm9wcy5hY3RpdmVJZCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5mZWF0dXJlc1t0aGlzLnByb3BzLmFjdGl2ZUlkXTtcbiAgICAgICAgLy8gcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCd9KTtcbiAgICAgICAgbGV0IHNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgc2Nyb2xsRWxlbWVudC5zY3JvbGxUbygwLCByZWYuY3VycmVudC5vZmZzZXRUb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRGZWF0dXJlcygpIHtcbiAgICBjb25zdCByb3V0ZXJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgY29uc3QgY3VycmVudExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllckFyZWEgOiB0aGlzLnByb3BzLmxheWVyUm91dGU7XG4gICAgY29uc3QgY3VycmVudExheWVyVmFsdWUgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhIDogdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGU7XG5cbiAgICBpZiAoIXJvdXRlckxheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRMYWJlbFByb3AgPSByb3V0ZXJMYXllcnNbY3VycmVudExheWVyXVtjdXJyZW50TGF5ZXJWYWx1ZV1bJ21hcExhYmVsJ107XG4gICAgbGV0IGZlYXR1cmVzID0gWy4uLnRoaXMucHJvcHMuZmVhdHVyZUxpc3QuZmVhdHVyZXNdO1xuICAgIHJldHVybiBmZWF0dXJlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBsZXQgYVZhbHVlcyA9IGEsIGJWYWx1ZXMgPSBiO1xuICAgICAgaWYgKGEudGFncyAmJiBiLnRhZ3MpIHtcbiAgICAgICAgYVZhbHVlcyA9IGEudGFncztcbiAgICAgICAgYlZhbHVlcyA9IGIudGFncztcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdKSkge1xuICAgICAgICAvLyBzdHJpbmcgdmFsdWVzXG4gICAgICAgIHJldHVybiBhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdIDwgYlZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA/IC0xIDogMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG51bWVyaWMgdmFsdWVzXG4gICAgICAgIHJldHVybiBhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdIC0gYlZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=