"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-starboard-scope_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-starboard-scope-item.jsx":
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-scope-item.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StarboardScopeItem = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
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
var StarboardScopeItem = exports.StarboardScopeItem = /*#__PURE__*/function (_Component) {
  function StarboardScopeItem(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StarboardScopeItem);
    _this = _callSuper(this, StarboardScopeItem, [props]);
    var scope = _this;
    _this.state = {
      html: "<div>Loading...</div>"
    };
    _this.highlightFeature = _this.highlightFeature.bind(_this);
    _this.ref = /*#__PURE__*/_react["default"].createRef();
    _this.loadPopup = _this.loadPopup.bind(_this);
    _this.observerFunction = _this.observerFunction.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(StarboardScopeItem, _Component);
  return (0, _createClass2["default"])(StarboardScopeItem, [{
    key: "observerFunction",
    value: function observerFunction(entries, observer) {
      var _this2 = this;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (_this2.props.lastElement && _this2.props.loadMore) {
            _this2.props.loadMore();
          }
          _this2.loadPopup();
          if (_this2.ref && _this2.ref.current) {
            observer.unobserve(_this2.ref.current);
          }
        }
      });
    }
  }, {
    key: "loadPopup",
    value: function loadPopup() {
      var _this3 = this;
      var popup = this.props.feature.get('popup');
      if (!popup.contentStarboard && popup.async) {
        var url = this.props.mapController.proxy.api_infowindow_url + '/' + popup.content;
        url += url.includes("?") ? "&" : "?";
        url += "scope=starboardscope";
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data) {
            if (data.content) {
              popup.contentStarboard = data.content;
              _this3.setState({
                'html': popup.contentStarboard
              }, function () {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                  popup: popup,
                  mapController: _this3.props.mapController
                });
              });
            }
          }
          // this.props.setSingleFeature(this.props.feature, this.props.index);
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        this.setState({
          'html': popup.contentStarboard || popup.content
        });
      }
    }
  }, {
    key: "highlightFeature",
    value: function highlightFeature() {
      var _this4 = this;
      this.props.feature.set("markLocstyle", true);
      window.setTimeout(function () {
        _this4.props.feature.set("markLocstyle", false);
      }, 3000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref.current && !this.observer) {
        this.observer = new IntersectionObserver(this.observerFunction, {
          root: document,
          threshold: 0.1
        });
        this.observer.observe(this.ref.current);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.unobserve(this.ref.current);
      this.observer = null;
    }
  }, {
    key: "render",
    value: function render() {
      var distance = null;
      if (this.props.feature.get('distance')) {
        distance = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-element-distance"
        }, this.props.langConstants.DIST, ": ", (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.feature.get('distanceMatrix') || this.props.feature.get('distance')));
      }
      if (this.state.html) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          ref: this.ref,
          onMouseUp: this.highlightFeature
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-popup-wrapper",
          dangerouslySetInnerHTML: {
            __html: this.state.html
          }
        }), distance);
      }
      return null;
    }
  }]);
}(_react.Component);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-starboard-scope.jsx":
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-scope.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");
var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
var _c4gStarboardScopeItem = __webpack_require__(/*! ./c4g-starboard-scope-item.jsx */ "./src/Resources/public/js/components/c4g-starboard-scope-item.jsx");
var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");
var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var _sphere = __webpack_require__(/*! ol/sphere */ "./node_modules/ol/sphere.js");
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
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var StarboardScope = exports["default"] = /*#__PURE__*/function (_Component) {
  function StarboardScope(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, StarboardScope);
    _this = _callSuper(this, StarboardScope, [props]);
    var scope = _this;
    _this.lastTime = -Infinity;
    _this.preventAddReqs = false;
    //specific code for the control
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.ELEMENTS_SCOPE;
      button.appendChild(span);
    } else {
      button.title = _this.langConstants.ELEMENTS_SCOPE;
    }
    element.className = "c4g-starboardscope-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = null;
    var open = props.open || false;
    if (mapController.data.starboardscope.div) {
      _this.close = function () {};
      open = true;
    } else {
      control = new _control.Control({
        element: element,
        target: props.target
      });
      var index = mapController.arrComponents.findIndex(function (element) {
        return element.name === "starboardscope";
      });
      mapController.arrComponents[index].control = control;
    }
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.loadMore = _this.loadMore.bind(_this);
    _this.getFeaturesInScope = _this.getFeaturesInScope.bind(_this);
    _this.view = props.mapController.map.getView();
    var layerController = props.mapController.proxy.layerController;
    _this.vectorSource = layerController.vectorSource instanceof _source.Cluster ? layerController.vectorSource.getSource() : layerController.vectorSource;
    _this.view.on('change:center', function (evt) {
      _this.getFeaturesInScope();
    });
    _this.view.on('change:resolution', function (evt) {
      if (props.mapController.data.minZoomStarboardScope && _this.view.getZoom() < props.mapController.data.minZoomStarboardScope) {
        _this.setState({
          disable: true
        });
      } else if (props.mapController.data.minZoomStarboardScope && _this.state.disable) {
        _this.setState({
          disable: false
        });
      }
      _this.getFeaturesInScope();
    });
    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
    window.c4gMapsHooks.layer_loaded.push(function (element) {
      _this.getFeaturesInScope();
    });
    _this.state = {
      open: open,
      disable: false,
      className: props.className || "c4g-starboardscope-panel",
      control: control,
      features: [],
      maxElements: 20
    };
    return _this;
  }
  (0, _inherits2["default"])(StarboardScope, _Component);
  return (0, _createClass2["default"])(StarboardScope, [{
    key: "getFeaturesInScope",
    value: function getFeaturesInScope() {
      var _this2 = this;
      var timestamp = Date.now(); //get timestamp to trigger event only every fourth of a second
      var mapController = this.props.mapController;
      var layerController = mapController.proxy.layerController;
      if (this.state.open && !this.state.disable && this._isMounted && timestamp > this.lastTime + 250) {
        if (mapController.data.minZoomStarboardScope && this.view.getZoom() < mapController.data.minZoomStarboardScope) {
          this.setState({
            features: []
          });
        }
        this.lastTime = timestamp;
        var extent = this.view.calculateExtent();
        var features = this.vectorSource.getFeaturesInExtent(extent);
        for (var i in layerController.vectorSources) {
          if (layerController.vectorSources.hasOwnProperty(i)) {
            var singleSource = layerController.vectorSources[i] instanceof _source.Cluster ? layerController.vectorSources[i].getSource() : layerController.vectorSources[i];
            var singleFeatures = singleSource.getFeaturesInExtent(extent);
            features = features.concat(singleFeatures);
          }
        }
        var featuresSorted = this.sortFeatures(features);
        if (!featuresSorted) {
          this.lastTime = -Infinity;
          window.setTimeout(function () {
            _this2.getFeaturesInScope();
          }, 200);
        }
        this.setState({
          features: features
        });
      }
    }
  }, {
    key: "sortFeatures",
    value: function sortFeatures(features) {
      if (this.props.mapController.geolocation) {
        var position = this.props.mapController.geolocation.getPosition();
        if (!position) {
          return false;
        }
        var maxDistance = 0;
        features.sort(function (a, b) {
          var lineStringA = new _geom.LineString([position, a.getGeometry().getCoordinates()]);
          var distanceA = (0, _sphere.getLength)(lineStringA);
          a.set('distance', distanceA);
          var lineStringB = new _geom.LineString([position, b.getGeometry().getCoordinates()]);
          var distanceB = (0, _sphere.getLength)(lineStringB);
          maxDistance = distanceA > maxDistance ? distanceA : maxDistance;
          maxDistance = distanceB > maxDistance ? distanceB : maxDistance;
          return distanceA - distanceB;
        });
        if (maxDistance < 30 && this.props.mapController.data.matrixKey) {
          var objMissDist = [];
          var arrLocations = [];
          arrLocations.push((0, _proj.toLonLat)(position));
          for (var i in features) {
            if (features.hasOwnProperty(i) && !features[i].get('distanceMatrix')) {
              objMissDist.push(features[i]);
              arrLocations.push((0, _proj.toLonLat)(features[i].getGeometry().getCoordinates()));
            }
          }
          if (arrLocations.length > 2 && !this.preventAddReqs) {
            var url = this.props.mapController.data.proxyUrl + 'matrix.php?language=de&profile=auto&key=' + this.props.mapController.data.matrixKey;
            var body = JSON.stringify({
              locations: arrLocations
            });
            var scope = this;
            scope.preventAddReqs = true;
            fetch(url, {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'text/plain'
              },
              body: body
            }).then(function (response) {
              scope.preventAddReqs = false;
              return response.json().then(function (jsonData) {
                var distances = jsonData && jsonData.sources_to_targets ? jsonData.sources_to_targets[0] : [];
                for (var _i in distances) {
                  if (distances.hasOwnProperty(_i) && objMissDist.hasOwnProperty(_i)) {
                    objMissDist[_i].set('distanceMatrix', distances[_i].distance * 1000);
                  }
                }
                scope.sortFeatures(scope.state.features);
                scope.forceUpdate();
              });
            });
          }
        }
      }
      return features;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (this.state.control) {
        if (this.state.open) {
          jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
          jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close");
        } else {
          jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
          jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close");
        }
      }
      var list = null;
      if (!this.state.disable) {
        list = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-starboardscope-content-container"
        }, /*#__PURE__*/_react["default"].createElement("ul", null, this.state.features.map(function (feature, index) {
          if (index < _this3.state.maxElements) {
            return /*#__PURE__*/_react["default"].createElement(_c4gStarboardScopeItem.StarboardScopeItem, {
              mapController: _this3.props.mapController,
              langConstants: _this3.langConstants,
              index: index,
              key: index,
              feature: feature,
              lastElement: index === _this3.state.maxElements - 1,
              loadMore: _this3.loadMore
            });
          }
        })));
      }
      var externalHeadline = document.querySelector(".c4g-external-headline");
      if (externalHeadline) {
        this.langConstants.ELEMENTS_SCOPE = externalHeadline.textContent.trim();
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-starboardscope-header",
        headerClass: "c4g-starboardscope-headline",
        header: this.langConstants.ELEMENTS_SCOPE,
        closeBtnClass: "c4g-starboardscope-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), list);
    }
  }, {
    key: "open",
    value: function open() {
      var _this4 = this;
      this.setState({
        open: true
      }, function () {
        var evt = {};
        evt.target = _this4.view;
        _this4.getFeaturesInScope();
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "loadMore",
    value: function loadMore() {
      this.setState({
        maxElements: this.state.maxElements + 20
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      // if (!this.props.mapController.geolocation.getTracking()) {
      //   this.props.mapController.geolocation.setTracking(true);
      // }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching && !this.props.mapController.data.starboardscope.div) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === "StarboardScope" && !this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        } else if (panelVal !== "StarboardScope" && this.state.open) {
          _c4gMapsUtils.utils.storeValue('panel', "StarboardScope");
        }
      }
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXNjb3BlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLHlCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsYUFBQSxHQUFBSCxtQkFBQTtBQUF3QyxTQUFBRCx3QkFBQUssQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQVAsdUJBQUEsWUFBQUEsd0JBQUFLLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFB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SUFDekI7RUFBQztJQUFBbEgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThLLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJLElBQUksQ0FBQ2pNLEtBQUssQ0FBQ2lDLGFBQWEsQ0FBQ1MsSUFBSSxDQUFDd0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDbE0sS0FBSyxDQUFDaUMsYUFBYSxDQUFDUyxJQUFJLENBQUM0RCxjQUFjLENBQUNDLEdBQUcsRUFBRTtRQUM5RixJQUFJNEYsUUFBUSxHQUFHdkosbUJBQUssQ0FBQ3dKLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSUQsUUFBUSxLQUFLLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDL0wsS0FBSyxDQUFDNEYsSUFBSSxFQUFFO1VBQ3JEcEQsbUJBQUssQ0FBQ3lKLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQy9CLENBQUMsTUFDSSxJQUFJRixRQUFRLEtBQUssZ0JBQWdCLElBQUksSUFBSSxDQUFDL0wsS0FBSyxDQUFDNEYsSUFBSSxFQUFFO1VBQ3pEcEQsbUJBQUssQ0FBQ3lKLFVBQVUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7UUFDN0M7TUFDRjtJQUNGO0VBQUM7QUFBQSxFQTNQeUM5SCxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXNjb3BlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhcmJvYXJkU2NvcGVJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGh0bWw6IFwiPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XCJcbiAgICB9O1xuICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZSA9IHRoaXMuaGlnaGxpZ2h0RmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5sb2FkUG9wdXAgPSB0aGlzLmxvYWRQb3B1cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub2JzZXJ2ZXJGdW5jdGlvbiA9IHRoaXMub2JzZXJ2ZXJGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBvYnNlcnZlckZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXN0RWxlbWVudCAmJiB0aGlzLnByb3BzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTW9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFBvcHVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVmICYmIHRoaXMucmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGhpcy5yZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRQb3B1cCgpIHtcbiAgICBsZXQgcG9wdXAgPSB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgIGlmICghcG9wdXAuY29udGVudFN0YXJib2FyZCAmJiBwb3B1cC5hc3luYykge1xuICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cC5jb250ZW50O1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiO1xuICAgICAgdXJsICs9IFwic2NvcGU9c3RhcmJvYXJkc2NvcGVcIjtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY29udGVudFN0YXJib2FyZCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgJ2h0bWwnOiBwb3B1cC5jb250ZW50U3RhcmJvYXJkXG4gICAgICAgICAgICAgICAgfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwge3BvcHVwOiBwb3B1cCwgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICdodG1sJzogcG9wdXAuY29udGVudFN0YXJib2FyZCB8fCBwb3B1cC5jb250ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoaWdobGlnaHRGZWF0dXJlICgpIHtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmUuc2V0KFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZmVhdHVyZS5zZXQoXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVmLmN1cnJlbnQgJiYgIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5vYnNlcnZlckZ1bmN0aW9uLCB7cm9vdDpkb2N1bWVudCwgdGhyZXNob2xkOiAwLjF9KTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLnJlZi5jdXJyZW50KTtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZGlzdGFuY2UgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKSB7XG4gICAgICBkaXN0YW5jZSA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lbGVtZW50LWRpc3RhbmNlXCJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhbmdDb25zdGFudHMuRElTVH06IHt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKX1cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5odG1sKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSByZWY9e3RoaXMucmVmfSBvbk1vdXNlVXA9e3RoaXMuaGlnaGxpZ2h0RmVhdHVyZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctcG9wdXAtd3JhcHBlclwifSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5zdGF0ZS5odG1sfX0vPlxuICAgICAgICAgICAge2Rpc3RhbmNlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtDbHVzdGVyfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge1N0YXJib2FyZFNjb3BlSXRlbX0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1zY29wZS1pdGVtLmpzeFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7R2VvbG9jYXRpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtMaW5lU3RyaW5nfSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHt0b0xvbkxhdH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQge2dldExlbmd0aH0gZnJvbSBcIm9sL3NwaGVyZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFNjb3BlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5sYXN0VGltZSA9IC1JbmZpbml0eTtcbiAgICB0aGlzLnByZXZlbnRBZGRSZXFzID0gZmFsc2U7XG4gICAgLy9zcGVjaWZpYyBjb2RlIGZvciB0aGUgY29udHJvbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkVMRU1FTlRTX1NDT1BFO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICB9XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1zdGFyYm9hcmRzY29wZS1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG51bGw7XG4gICAgbGV0IG9wZW4gPSBwcm9wcy5vcGVuIHx8IGZhbHNlXG4gICAgaWYgKG1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmRzY29wZS5kaXYpIHtcbiAgICAgIHRoaXMuY2xvc2UgPSAoKSA9PiB7fTtcbiAgICAgIG9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwic3RhcmJvYXJkc2NvcGVcIik7XG4gICAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIH1cbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZE1vcmUgPSB0aGlzLmxvYWRNb3JlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSA9IHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlLmJpbmQodGhpcyk7XG4gICAgdGhpcy52aWV3ID0gcHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICB0aGlzLnZlY3RvclNvdXJjZSA9IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2UgaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZS5nZXRTb3VyY2UoKTogbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZTtcbiAgICB0aGlzLnZpZXcub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpXG4gICAgfSk7XG4gICAgdGhpcy52aWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIChldnQpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlICYmIHRoaXMudmlldy5nZXRab29tKCkgPCBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc2FibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5taW5ab29tU3RhcmJvYXJkU2NvcGUgJiYgdGhpcy5zdGF0ZS5kaXNhYmxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc2FibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKVxuICAgIH0pO1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkID0gd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgfHwgW107XG4gICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQucHVzaCgoZWxlbWVudCk9PiB7XG4gICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBvcGVuLFxuICAgICAgZGlzYWJsZTogZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmRzY29wZS1wYW5lbFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGZlYXR1cmVzOiBbXSxcbiAgICAgIG1heEVsZW1lbnRzOiAyMFxuICAgIH07XG4gIH1cblxuICBnZXRGZWF0dXJlc0luU2NvcGUgKCkge1xuICAgIGxldCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpOyAvL2dldCB0aW1lc3RhbXAgdG8gdHJpZ2dlciBldmVudCBvbmx5IGV2ZXJ5IGZvdXJ0aCBvZiBhIHNlY29uZFxuICAgIGNvbnN0IG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgY29uc3QgbGF5ZXJDb250cm9sbGVyID0gbWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuICYmICF0aGlzLnN0YXRlLmRpc2FibGUgJiYgdGhpcy5faXNNb3VudGVkICYmIHRpbWVzdGFtcCA+IHRoaXMubGFzdFRpbWUgKyAyNTApIHtcbiAgICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlICYmIHRoaXMudmlldy5nZXRab29tKCkgPCBtYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICBsZXQgZXh0ZW50ID0gdGhpcy52aWV3LmNhbGN1bGF0ZUV4dGVudCgpO1xuICAgICAgbGV0IGZlYXR1cmVzID0gdGhpcy52ZWN0b3JTb3VyY2UuZ2V0RmVhdHVyZXNJbkV4dGVudChleHRlbnQpO1xuICAgICAgZm9yIChsZXQgaSBpbiBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlcykge1xuICAgICAgICBpZiAobGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgc2luZ2xlU291cmNlID0gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV0gaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV0uZ2V0U291cmNlKCkgOiBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlc1tpXTtcbiAgICAgICAgICBsZXQgc2luZ2xlRmVhdHVyZXMgPSBzaW5nbGVTb3VyY2UuZ2V0RmVhdHVyZXNJbkV4dGVudChleHRlbnQpO1xuICAgICAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMuY29uY2F0KHNpbmdsZUZlYXR1cmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGZlYXR1cmVzU29ydGVkID0gdGhpcy5zb3J0RmVhdHVyZXMoZmVhdHVyZXMpO1xuICAgICAgaWYgKCFmZWF0dXJlc1NvcnRlZCkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gLUluZmluaXR5O1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e3RoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCl9LCAyMDApO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBzb3J0RmVhdHVyZXMgKGZlYXR1cmVzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbikge1xuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCk7XG4gICAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCBtYXhEaXN0YW5jZSA9IDA7XG4gICAgICBmZWF0dXJlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBsaW5lU3RyaW5nQSA9IG5ldyBMaW5lU3RyaW5nKFtwb3NpdGlvbiwgYS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCldKVxuICAgICAgICBsZXQgZGlzdGFuY2VBID0gZ2V0TGVuZ3RoKGxpbmVTdHJpbmdBKTtcbiAgICAgICAgYS5zZXQoJ2Rpc3RhbmNlJywgZGlzdGFuY2VBKTtcblxuICAgICAgICBsZXQgbGluZVN0cmluZ0IgPSBuZXcgTGluZVN0cmluZyhbcG9zaXRpb24sIGIuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpXSlcbiAgICAgICAgbGV0IGRpc3RhbmNlQiA9IGdldExlbmd0aChsaW5lU3RyaW5nQik7XG5cbiAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0YW5jZUEgPiBtYXhEaXN0YW5jZSA/IGRpc3RhbmNlQSA6IG1heERpc3RhbmNlO1xuICAgICAgICBtYXhEaXN0YW5jZSA9IGRpc3RhbmNlQiA+IG1heERpc3RhbmNlID8gZGlzdGFuY2VCIDogbWF4RGlzdGFuY2U7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZUEgLSBkaXN0YW5jZUI7XG4gICAgICB9KTtcbiAgICAgIGlmIChtYXhEaXN0YW5jZSA8IDMwICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1hdHJpeEtleSkge1xuICAgICAgICBsZXQgb2JqTWlzc0Rpc3QgPSBbXTtcbiAgICAgICAgbGV0IGFyckxvY2F0aW9ucyA9IFtdO1xuICAgICAgICBhcnJMb2NhdGlvbnMucHVzaCh0b0xvbkxhdChwb3NpdGlvbikpO1xuICAgICAgICBmb3IgKGxldCBpIGluIGZlYXR1cmVzKSB7XG4gICAgICAgICAgaWYgKGZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpICYmICFmZWF0dXJlc1tpXS5nZXQoJ2Rpc3RhbmNlTWF0cml4JykpIHtcbiAgICAgICAgICAgIG9iak1pc3NEaXN0LnB1c2goZmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgYXJyTG9jYXRpb25zLnB1c2godG9Mb25MYXQoZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJMb2NhdGlvbnMubGVuZ3RoID4gMiAmJiAhdGhpcy5wcmV2ZW50QWRkUmVxcykge1xuICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm94eVVybCArICdtYXRyaXgucGhwP2xhbmd1YWdlPWRlJnByb2ZpbGU9YXV0byZrZXk9JyArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1hdHJpeEtleTtcbiAgICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtsb2NhdGlvbnM6IGFyckxvY2F0aW9uc30pO1xuICAgICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgICBzY29wZS5wcmV2ZW50QWRkUmVxcyA9IHRydWU7XG4gICAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGJvZHlcbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2NvcGUucHJldmVudEFkZFJlcXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICAgICAgICBsZXQgZGlzdGFuY2VzID0ganNvbkRhdGEgJiYganNvbkRhdGEuc291cmNlc190b190YXJnZXRzID8ganNvbkRhdGEuc291cmNlc190b190YXJnZXRzWzBdIDogW107XG4gICAgICAgICAgICAgIGZvcihsZXQgaSBpbiBkaXN0YW5jZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzLmhhc093blByb3BlcnR5KGkpICYmIG9iak1pc3NEaXN0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICBvYmpNaXNzRGlzdFtpXS5zZXQoJ2Rpc3RhbmNlTWF0cml4JywgZGlzdGFuY2VzW2ldLmRpc3RhbmNlICogMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNjb3BlLnNvcnRGZWF0dXJlcyhzY29wZS5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgIHNjb3BlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udHJvbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkc2NvcGUtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkc2NvcGUtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBsaXN0ID0gIG51bGw7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRpc2FibGUpIHtcbiAgICAgIGxpc3QgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkc2NvcGUtY29udGVudC1jb250YWluZXJcIn0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLnN0YXRlLm1heEVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8U3RhcmJvYXJkU2NvcGVJdGVtIG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZ0NvbnN0YW50cz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IGtleT17aW5kZXh9IGZlYXR1cmU9e2ZlYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50PXtpbmRleCA9PT0gdGhpcy5zdGF0ZS5tYXhFbGVtZW50cyAtIDF9IGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlfS8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgdmFyIGV4dGVybmFsSGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1leHRlcm5hbC1oZWFkbGluZVwiKTtcbiAgICBpZiAoZXh0ZXJuYWxIZWFkbGluZSkge1xuICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzLkVMRU1FTlRTX1NDT1BFID0gZXh0ZXJuYWxIZWFkbGluZS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfV1JBUFBFUn0+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmRzY29wZS1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLkVMRU1FTlRTX1NDT1BFfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1zdGFyYm9hcmRzY29wZS1jbG9zZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAge2xpc3R9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB7XG4gICAgICBsZXQgZXZ0ID0ge307XG4gICAgICBldnQudGFyZ2V0ID0gdGhpcy52aWV3O1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cbiAgbG9hZE1vcmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWF4RWxlbWVudHM6IHRoaXMuc3RhdGUubWF4RWxlbWVudHMgKyAyMH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgLy8gaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0VHJhY2tpbmcoKSkge1xuICAgIC8vICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLnNldFRyYWNraW5nKHRydWUpO1xuICAgIC8vIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkc2NvcGUuZGl2KSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJTdGFyYm9hcmRTY29wZVwiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIlN0YXJib2FyZFNjb3BlXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJTdGFyYm9hcmRTY29wZVwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYzRnTWFwc0NvbnN0YW50IiwiX2M0Z1JvdXRlclRpbWVDb252ZXJzaW9ucyIsIl9jNGdNYXBzVXRpbHMiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJTdGFyYm9hcmRTY29wZUl0ZW0iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJzdGF0ZSIsImh0bWwiLCJoaWdobGlnaHRGZWF0dXJlIiwiYmluZCIsInJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibG9hZFBvcHVwIiwib2JzZXJ2ZXJGdW5jdGlvbiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJfdGhpczIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImxhc3RFbGVtZW50IiwibG9hZE1vcmUiLCJjdXJyZW50IiwidW5vYnNlcnZlIiwiX3RoaXMzIiwicG9wdXAiLCJmZWF0dXJlIiwiY29udGVudFN0YXJib2FyZCIsImFzeW5jIiwidXJsIiwibWFwQ29udHJvbGxlciIsInByb3h5IiwiYXBpX2luZm93aW5kb3dfdXJsIiwiY29udGVudCIsImluY2x1ZGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInByb3h5X2ZpbGxQb3B1cCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJfdGhpczQiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50RGlkTW91bnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInJvb3QiLCJkb2N1bWVudCIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImRpc3RhbmNlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImxhbmdDb25zdGFudHMiLCJESVNUIiwidG9IdW1hbkRpc3RhbmNlIiwib25Nb3VzZVVwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJfY29udHJvbCIsIl9zb3VyY2UiLCJfYzRnU3RhcmJvYXJkU2NvcGVJdGVtIiwiX2M0Z01hcHNJMThuIiwiX29sIiwiX2dlb20iLCJfcHJvaiIsIl9zcGhlcmUiLCJUaXRsZWJhciIsImxhenkiLCJTdGFyYm9hcmRTY29wZSIsImxhc3RUaW1lIiwiSW5maW5pdHkiLCJwcmV2ZW50QWRkUmVxcyIsImVsZW1lbnQiLCJidXR0b24iLCJnZXRMYW5ndWFnZSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiRUxFTUVOVFNfU0NPUEUiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwib3BlbiIsImpRdWVyeSIsIm9uIiwiZXZlbnQiLCJjbG9zZSIsImNvbnRyb2wiLCJzdGFyYm9hcmRzY29wZSIsImRpdiIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpbmRleCIsImFyckNvbXBvbmVudHMiLCJmaW5kSW5kZXgiLCJuYW1lIiwiZ2V0RmVhdHVyZXNJblNjb3BlIiwidmlldyIsIm1hcCIsImdldFZpZXciLCJsYXllckNvbnRyb2xsZXIiLCJ2ZWN0b3JTb3VyY2UiLCJDbHVzdGVyIiwiZ2V0U291cmNlIiwiZXZ0IiwibWluWm9vbVN0YXJib2FyZFNjb3BlIiwiZ2V0Wm9vbSIsImRpc2FibGUiLCJsYXllcl9sb2FkZWQiLCJwdXNoIiwiZmVhdHVyZXMiLCJtYXhFbGVtZW50cyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJfaXNNb3VudGVkIiwiZXh0ZW50IiwiY2FsY3VsYXRlRXh0ZW50IiwiZ2V0RmVhdHVyZXNJbkV4dGVudCIsInZlY3RvclNvdXJjZXMiLCJzaW5nbGVTb3VyY2UiLCJzaW5nbGVGZWF0dXJlcyIsImNvbmNhdCIsImZlYXR1cmVzU29ydGVkIiwic29ydEZlYXR1cmVzIiwiZ2VvbG9jYXRpb24iLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWF4RGlzdGFuY2UiLCJzb3J0IiwiYSIsImIiLCJsaW5lU3RyaW5nQSIsIkxpbmVTdHJpbmciLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiZGlzdGFuY2VBIiwiZ2V0TGVuZ3RoIiwibGluZVN0cmluZ0IiLCJkaXN0YW5jZUIiLCJtYXRyaXhLZXkiLCJvYmpNaXNzRGlzdCIsImFyckxvY2F0aW9ucyIsInRvTG9uTGF0IiwibGVuZ3RoIiwicHJveHlVcmwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2F0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwianNvbkRhdGEiLCJkaXN0YW5jZXMiLCJzb3VyY2VzX3RvX3RhcmdldHMiLCJmb3JjZVVwZGF0ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsaXN0IiwiZXh0ZXJuYWxIZWFkbGluZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJjc3NDb25zdGFudHMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwic2V0T3BlbkNvbXBvbmVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==