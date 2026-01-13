"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-starboard-scope_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-starboard-scope-item.jsx"
/*!*************************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-scope-item.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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
      if (popup && !popup.contentStarboard && popup.async && popup.content && typeof popup.content === 'string' && popup.content.indexOf(':') !== -1) {
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
      } else if (popup) {
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-starboard-scope.jsx"
/*!********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-starboard-scope.jsx ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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

        // deduplicate features by 'tid' or 'uuid' or fallback to openlayers uid
        var uniqueFeatures = [];
        var featureIds = [];
        for (var _i = 0; _i < features.length; _i++) {
          var feature = features[_i];
          var tid = feature.get('tid') || (feature.get('popup') ? feature.get('popup').content : null) || feature.ol_uid;
          if (tid && featureIds.indexOf(tid) === -1) {
            featureIds.push(tid);
            uniqueFeatures.push(feature);
          } else if (!tid) {
            uniqueFeatures.push(feature);
          }
        }
        features = uniqueFeatures;
        var featuresSorted = this.sortFeatures(features);
        if (featuresSorted === false && this.props.mapController.geolocation) {
          if (!this.pendingScopeUpdate) {
            this.pendingScopeUpdate = true;
            window.setTimeout(function () {
              _this2.pendingScopeUpdate = false;
              _this2.getFeaturesInScope();
            }, 1000);
          }
        }
        this.setState({
          features: featuresSorted || features
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
          var geomA = typeof a.getGeometry === 'function' ? a.getGeometry() : null;
          var geomB = typeof b.getGeometry === 'function' ? b.getGeometry() : null;
          if (!geomA || !geomB || typeof geomA.getCoordinates !== 'function' || typeof geomB.getCoordinates !== 'function') {
            return 0;
          }
          var coordsA = geomA.getCoordinates();
          var coordsB = geomB.getCoordinates();
          if (!coordsA || !coordsB || !Array.isArray(coordsA) || !Array.isArray(coordsB)) {
            return 0;
          }
          var lineStringA = new _geom.LineString([position, coordsA]);
          var distanceA = (0, _sphere.getLength)(lineStringA);
          a.set('distance', distanceA);
          var lineStringB = new _geom.LineString([position, coordsB]);
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
            var geom = typeof features[i].getGeometry === 'function' ? features[i].getGeometry() : null;
            var coords = geom && typeof geom.getCoordinates === 'function' ? geom.getCoordinates() : null;
            if (features.hasOwnProperty(i) && !features[i].get('distanceMatrix') && coords && Array.isArray(coords)) {
              objMissDist.push(features[i]);
              arrLocations.push((0, _proj.toLonLat)(coords));
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
                var distances = jsonData && jsonData.sources_to_targets && jsonData.sources_to_targets.length > 0 ? jsonData.sources_to_targets[0] : [];
                for (var _i2 in distances) {
                  if (distances.hasOwnProperty(_i2) && objMissDist.hasOwnProperty(_i2) && distances[_i2]) {
                    objMissDist[_i2].set('distanceMatrix', distances[_i2].distance * 1000);
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXNjb3BlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLHlCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsYUFBQSxHQUFBSCxtQkFBQTtBQUF3QyxTQUFBRCx3QkFBQUssQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQVAsdUJBQUEsWUFBQUEsd0JBQUFLLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFB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QkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7TUFDakQsSUFBSSxJQUFJLENBQUMvTSxLQUFLLENBQUNtQyxhQUFhLENBQUNRLElBQUksQ0FBQ3FLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ21DLGFBQWEsQ0FBQ1EsSUFBSSxDQUFDNEQsY0FBYyxDQUFDQyxHQUFHLEVBQUU7UUFDOUYsSUFBSXlHLFFBQVEsR0FBR3BLLG1CQUFLLENBQUNxSyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUlELFFBQVEsS0FBSyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQzdNLEtBQUssQ0FBQzZGLElBQUksRUFBRTtVQUNyRHBELG1CQUFLLENBQUNzSyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUMvQixDQUFDLE1BQ0ksSUFBSUYsUUFBUSxLQUFLLGdCQUFnQixJQUFJLElBQUksQ0FBQzdNLEtBQUssQ0FBQzZGLElBQUksRUFBRTtVQUN6RHBELG1CQUFLLENBQUNzSyxVQUFVLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO1FBQzdDO01BQ0Y7SUFDRjtFQUFDO0FBQUEsRUE1UnlDM0ksZ0JBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc2NvcGUtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhcmJvYXJkU2NvcGVJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGh0bWw6IFwiPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XCJcbiAgICB9O1xuICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZSA9IHRoaXMuaGlnaGxpZ2h0RmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5sb2FkUG9wdXAgPSB0aGlzLmxvYWRQb3B1cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub2JzZXJ2ZXJGdW5jdGlvbiA9IHRoaXMub2JzZXJ2ZXJGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBvYnNlcnZlckZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXN0RWxlbWVudCAmJiB0aGlzLnByb3BzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTW9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFBvcHVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVmICYmIHRoaXMucmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGhpcy5yZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRQb3B1cCgpIHtcbiAgICBsZXQgcG9wdXAgPSB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgIGlmIChwb3B1cCAmJiAhcG9wdXAuY29udGVudFN0YXJib2FyZCAmJiBwb3B1cC5hc3luYyAmJiBwb3B1cC5jb250ZW50ICYmICh0eXBlb2YgcG9wdXAuY29udGVudCA9PT0gJ3N0cmluZycpICYmIHBvcHVwLmNvbnRlbnQuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cC5jb250ZW50O1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiO1xuICAgICAgdXJsICs9IFwic2NvcGU9c3RhcmJvYXJkc2NvcGVcIjtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY29udGVudFN0YXJib2FyZCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgJ2h0bWwnOiBwb3B1cC5jb250ZW50U3RhcmJvYXJkXG4gICAgICAgICAgICAgICAgfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwge3BvcHVwOiBwb3B1cCwgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBvcHVwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgJ2h0bWwnOiBwb3B1cC5jb250ZW50U3RhcmJvYXJkIHx8IHBvcHVwLmNvbnRlbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodEZlYXR1cmUgKCkge1xuICAgIHRoaXMucHJvcHMuZmVhdHVyZS5zZXQoXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5mZWF0dXJlLnNldChcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWYuY3VycmVudCAmJiAhdGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLm9ic2VydmVyRnVuY3Rpb24sIHtyb290OmRvY3VtZW50LCB0aHJlc2hvbGQ6IDAuMX0pO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMucmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMucmVmLmN1cnJlbnQpO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ2Rpc3RhbmNlJykpIHtcbiAgICAgIGRpc3RhbmNlID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVsZW1lbnQtZGlzdGFuY2VcIn0+XG4gICAgICAgICAge3RoaXMucHJvcHMubGFuZ0NvbnN0YW50cy5ESVNUfToge3RvSHVtYW5EaXN0YW5jZSh0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZU1hdHJpeCcpIHx8IHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ2Rpc3RhbmNlJykpfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmh0bWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIHJlZj17dGhpcy5yZWZ9IG9uTW91c2VVcD17dGhpcy5oaWdobGlnaHRGZWF0dXJlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC13cmFwcGVyXCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmh0bWx9fS8+XG4gICAgICAgICAgICB7ZGlzdGFuY2V9XG4gICAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtTdGFyYm9hcmRTY29wZUl0ZW19IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc2NvcGUtaXRlbS5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZ30gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dG9Mb25MYXR9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHtnZXRMZW5ndGh9IGZyb20gXCJvbC9zcGhlcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRTY29wZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgdGhpcy5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgIC8vc3BlY2lmaWMgY29kZSBmb3IgdGhlIGNvbnRyb2xcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuRUxFTUVOVFNfU0NPUEU7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkc2NvcGUtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBudWxsO1xuICAgIGxldCBvcGVuID0gcHJvcHMub3BlbiB8fCBmYWxzZVxuICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkc2NvcGUuZGl2KSB7XG4gICAgICB0aGlzLmNsb3NlID0gKCkgPT4ge307XG4gICAgICBvcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcInN0YXJib2FyZHNjb3BlXCIpO1xuICAgICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRNb3JlID0gdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUgPSB0aGlzLmdldEZlYXR1cmVzSW5TY29wZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmlldyA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgdGhpcy52ZWN0b3JTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2UuZ2V0U291cmNlKCk6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2U7XG4gICAgdGhpcy52aWV3Lm9uKCdjaGFuZ2U6Y2VudGVyJywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5vbignY2hhbmdlOnJlc29sdXRpb24nLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnZpZXcuZ2V0Wm9vbSgpIDwgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlICYmIHRoaXMuc3RhdGUuZGlzYWJsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKClcbiAgICB9KTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goKGVsZW1lbnQpPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbjogb3BlbixcbiAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkc2NvcGUtcGFuZWxcIixcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBmZWF0dXJlczogW10sXG4gICAgICBtYXhFbGVtZW50czogMjBcbiAgICB9O1xuICB9XG5cbiAgZ2V0RmVhdHVyZXNJblNjb3BlICgpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gRGF0ZS5ub3coKTsgLy9nZXQgdGltZXN0YW1wIHRvIHRyaWdnZXIgZXZlbnQgb25seSBldmVyeSBmb3VydGggb2YgYSBzZWNvbmRcbiAgICBjb25zdCBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGNvbnN0IGxheWVyQ29udHJvbGxlciA9IG1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5kaXNhYmxlICYmIHRoaXMuX2lzTW91bnRlZCAmJiB0aW1lc3RhbXAgPiB0aGlzLmxhc3RUaW1lICsgMjUwKSB7XG4gICAgICBpZiAobWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnZpZXcuZ2V0Wm9vbSgpIDwgbWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmZWF0dXJlczogW11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgbGV0IGV4dGVudCA9IHRoaXMudmlldy5jYWxjdWxhdGVFeHRlbnQoKTtcbiAgICAgIGxldCBmZWF0dXJlcyA9IHRoaXMudmVjdG9yU291cmNlLmdldEZlYXR1cmVzSW5FeHRlbnQoZXh0ZW50KTtcbiAgICAgIGZvciAobGV0IGkgaW4gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXMpIHtcbiAgICAgICAgaWYgKGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IHNpbmdsZVNvdXJjZSA9IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldLmdldFNvdXJjZSgpIDogbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV07XG4gICAgICAgICAgbGV0IHNpbmdsZUZlYXR1cmVzID0gc2luZ2xlU291cmNlLmdldEZlYXR1cmVzSW5FeHRlbnQoZXh0ZW50KTtcbiAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChzaW5nbGVGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZGVkdXBsaWNhdGUgZmVhdHVyZXMgYnkgJ3RpZCcgb3IgJ3V1aWQnIG9yIGZhbGxiYWNrIHRvIG9wZW5sYXllcnMgdWlkXG4gICAgICBsZXQgdW5pcXVlRmVhdHVyZXMgPSBbXTtcbiAgICAgIGxldCBmZWF0dXJlSWRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgIGxldCB0aWQgPSBmZWF0dXJlLmdldCgndGlkJykgfHwgKGZlYXR1cmUuZ2V0KCdwb3B1cCcpID8gZmVhdHVyZS5nZXQoJ3BvcHVwJykuY29udGVudCA6IG51bGwpIHx8IGZlYXR1cmUub2xfdWlkO1xuICAgICAgICBpZiAodGlkICYmIGZlYXR1cmVJZHMuaW5kZXhPZih0aWQpID09PSAtMSkge1xuICAgICAgICAgIGZlYXR1cmVJZHMucHVzaCh0aWQpO1xuICAgICAgICAgIHVuaXF1ZUZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRpZCkge1xuICAgICAgICAgIHVuaXF1ZUZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZlYXR1cmVzID0gdW5pcXVlRmVhdHVyZXM7XG5cbiAgICAgIGxldCBmZWF0dXJlc1NvcnRlZCA9IHRoaXMuc29ydEZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgIGlmIChmZWF0dXJlc1NvcnRlZCA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5wZW5kaW5nU2NvcGVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdTY29wZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1Njb3BlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzU29ydGVkIHx8IGZlYXR1cmVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHNvcnRGZWF0dXJlcyAoZmVhdHVyZXMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0UG9zaXRpb24oKTtcbiAgICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IG1heERpc3RhbmNlID0gMDtcbiAgICAgIGZlYXR1cmVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IGdlb21BID0gKHR5cGVvZiBhLmdldEdlb21ldHJ5ID09PSAnZnVuY3Rpb24nKSA/IGEuZ2V0R2VvbWV0cnkoKSA6IG51bGw7XG4gICAgICAgIGxldCBnZW9tQiA9ICh0eXBlb2YgYi5nZXRHZW9tZXRyeSA9PT0gJ2Z1bmN0aW9uJykgPyBiLmdldEdlb21ldHJ5KCkgOiBudWxsO1xuICAgICAgICBpZiAoIWdlb21BIHx8ICFnZW9tQiB8fCB0eXBlb2YgZ2VvbUEuZ2V0Q29vcmRpbmF0ZXMgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGdlb21CLmdldENvb3JkaW5hdGVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvb3Jkc0EgPSBnZW9tQS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBsZXQgY29vcmRzQiA9IGdlb21CLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmICghY29vcmRzQSB8fCAhY29vcmRzQiB8fCAhQXJyYXkuaXNBcnJheShjb29yZHNBKSB8fCAhQXJyYXkuaXNBcnJheShjb29yZHNCKSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaW5lU3RyaW5nQSA9IG5ldyBMaW5lU3RyaW5nKFtwb3NpdGlvbiwgY29vcmRzQV0pXG4gICAgICAgIGxldCBkaXN0YW5jZUEgPSBnZXRMZW5ndGgobGluZVN0cmluZ0EpO1xuICAgICAgICBhLnNldCgnZGlzdGFuY2UnLCBkaXN0YW5jZUEpO1xuXG4gICAgICAgIGxldCBsaW5lU3RyaW5nQiA9IG5ldyBMaW5lU3RyaW5nKFtwb3NpdGlvbiwgY29vcmRzQl0pXG4gICAgICAgIGxldCBkaXN0YW5jZUIgPSBnZXRMZW5ndGgobGluZVN0cmluZ0IpO1xuXG4gICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2VBID4gbWF4RGlzdGFuY2UgPyBkaXN0YW5jZUEgOiBtYXhEaXN0YW5jZTtcbiAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0YW5jZUIgPiBtYXhEaXN0YW5jZSA/IGRpc3RhbmNlQiA6IG1heERpc3RhbmNlO1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VBIC0gZGlzdGFuY2VCO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF4RGlzdGFuY2UgPCAzMCAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXRyaXhLZXkpIHtcbiAgICAgICAgbGV0IG9iak1pc3NEaXN0ID0gW107XG4gICAgICAgIGxldCBhcnJMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgYXJyTG9jYXRpb25zLnB1c2godG9Mb25MYXQocG9zaXRpb24pKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgIGxldCBnZW9tID0gKHR5cGVvZiBmZWF0dXJlc1tpXS5nZXRHZW9tZXRyeSA9PT0gJ2Z1bmN0aW9uJykgPyBmZWF0dXJlc1tpXS5nZXRHZW9tZXRyeSgpIDogbnVsbDtcbiAgICAgICAgICBsZXQgY29vcmRzID0gKGdlb20gJiYgdHlwZW9mIGdlb20uZ2V0Q29vcmRpbmF0ZXMgPT09ICdmdW5jdGlvbicpID8gZ2VvbS5nZXRDb29yZGluYXRlcygpIDogbnVsbDtcbiAgICAgICAgICBpZiAoZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgIWZlYXR1cmVzW2ldLmdldCgnZGlzdGFuY2VNYXRyaXgnKSAmJiBjb29yZHMgJiYgQXJyYXkuaXNBcnJheShjb29yZHMpKSB7XG4gICAgICAgICAgICBvYmpNaXNzRGlzdC5wdXNoKGZlYXR1cmVzW2ldKTtcbiAgICAgICAgICAgIGFyckxvY2F0aW9ucy5wdXNoKHRvTG9uTGF0KGNvb3JkcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyTG9jYXRpb25zLmxlbmd0aCA+IDIgJiYgIXRoaXMucHJldmVudEFkZFJlcXMpIHtcbiAgICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucHJveHlVcmwgKyAnbWF0cml4LnBocD9sYW5ndWFnZT1kZSZwcm9maWxlPWF1dG8ma2V5PScgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXRyaXhLZXk7XG4gICAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bG9jYXRpb25zOiBhcnJMb2NhdGlvbnN9KTtcbiAgICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgICAgc2NvcGUucHJldmVudEFkZFJlcXMgPSB0cnVlO1xuICAgICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNjb3BlLnByZXZlbnRBZGRSZXFzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oanNvbkRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlcyA9IChqc29uRGF0YSAmJiBqc29uRGF0YS5zb3VyY2VzX3RvX3RhcmdldHMgJiYganNvbkRhdGEuc291cmNlc190b190YXJnZXRzLmxlbmd0aCA+IDApID8ganNvbkRhdGEuc291cmNlc190b190YXJnZXRzWzBdIDogW107XG4gICAgICAgICAgICAgIGZvcihsZXQgaSBpbiBkaXN0YW5jZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzLmhhc093blByb3BlcnR5KGkpICYmIG9iak1pc3NEaXN0Lmhhc093blByb3BlcnR5KGkpICYmIGRpc3RhbmNlc1tpXSkge1xuICAgICAgICAgICAgICAgICAgb2JqTWlzc0Rpc3RbaV0uc2V0KCdkaXN0YW5jZU1hdHJpeCcsIGRpc3RhbmNlc1tpXS5kaXN0YW5jZSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzY29wZS5zb3J0RmVhdHVyZXMoc2NvcGUuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICBzY29wZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRyb2wpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbGlzdCA9ICBudWxsO1xuICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlKSB7XG4gICAgICBsaXN0ID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRlbnQtY29udGFpbmVyXCJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5zdGF0ZS5tYXhFbGVtZW50cykge1xuICAgICAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZFNjb3BlSXRlbSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmdDb25zdGFudHM9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSBmZWF0dXJlPXtmZWF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RWxlbWVudD17aW5kZXggPT09IHRoaXMuc3RhdGUubWF4RWxlbWVudHMgLSAxfSBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZX0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHZhciBleHRlcm5hbEhlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jNGctZXh0ZXJuYWwtaGVhZGxpbmVcIik7XG4gICAgaWYgKGV4dGVybmFsSGVhZGxpbmUpIHtcbiAgICAgIHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRSA9IGV4dGVybmFsSGVhZGxpbmUudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRX0gY2xvc2VCdG5DbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtY2xvc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgIHtsaXN0fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4ge1xuICAgICAgbGV0IGV2dCA9IHt9O1xuICAgICAgZXZ0LnRhcmdldCA9IHRoaXMudmlldztcbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG4gIGxvYWRNb3JlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe21heEVsZW1lbnRzOiB0aGlzLnN0YXRlLm1heEVsZW1lbnRzICsgMjB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIC8vIGlmICghdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAvLyAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAvLyB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZHNjb3BlLmRpdikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiU3RhcmJvYXJkU2NvcGVcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJTdGFyYm9hcmRTY29wZVwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiU3RhcmJvYXJkU2NvcGVcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdSb3V0ZXJUaW1lQ29udmVyc2lvbnMiLCJfYzRnTWFwc1V0aWxzIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiU3RhcmJvYXJkU2NvcGVJdGVtIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsInNjb3BlIiwic3RhdGUiLCJodG1sIiwiaGlnaGxpZ2h0RmVhdHVyZSIsImJpbmQiLCJyZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImxvYWRQb3B1cCIsIm9ic2VydmVyRnVuY3Rpb24iLCJfaW5oZXJpdHMyIiwiX2NyZWF0ZUNsYXNzMiIsImtleSIsInZhbHVlIiwiZW50cmllcyIsIm9ic2VydmVyIiwiX3RoaXMyIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJsYXN0RWxlbWVudCIsImxvYWRNb3JlIiwiY3VycmVudCIsInVub2JzZXJ2ZSIsIl90aGlzMyIsInBvcHVwIiwiZmVhdHVyZSIsImNvbnRlbnRTdGFyYm9hcmQiLCJhc3luYyIsImNvbnRlbnQiLCJpbmRleE9mIiwidXJsIiwibWFwQ29udHJvbGxlciIsInByb3h5IiwiYXBpX2luZm93aW5kb3dfdXJsIiwiaW5jbHVkZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0U3RhdGUiLCJ1dGlscyIsImNhbGxIb29rRnVuY3Rpb25zIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwicHJveHlfZmlsbFBvcHVwIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIl90aGlzNCIsInNldFRpbWVvdXQiLCJjb21wb25lbnREaWRNb3VudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImRvY3VtZW50IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZGlzdGFuY2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFuZ0NvbnN0YW50cyIsIkRJU1QiLCJ0b0h1bWFuRGlzdGFuY2UiLCJvbk1vdXNlVXAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbXBvbmVudCIsIl9jb250cm9sIiwiX3NvdXJjZSIsIl9jNGdTdGFyYm9hcmRTY29wZUl0ZW0iLCJfYzRnTWFwc0kxOG4iLCJfb2wiLCJfZ2VvbSIsIl9wcm9qIiwiX3NwaGVyZSIsIlRpdGxlYmFyIiwibGF6eSIsIlN0YXJib2FyZFNjb3BlIiwibGFzdFRpbWUiLCJJbmZpbml0eSIsInByZXZlbnRBZGRSZXFzIiwiZWxlbWVudCIsImJ1dHRvbiIsImdldExhbmd1YWdlIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJFTEVNRU5UU19TQ09QRSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJvcGVuIiwialF1ZXJ5Iiwib24iLCJldmVudCIsImNsb3NlIiwiY29udHJvbCIsInN0YXJib2FyZHNjb3BlIiwiZGl2IiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJnZXRGZWF0dXJlc0luU2NvcGUiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsImxheWVyQ29udHJvbGxlciIsInZlY3RvclNvdXJjZSIsIkNsdXN0ZXIiLCJnZXRTb3VyY2UiLCJldnQiLCJtaW5ab29tU3RhcmJvYXJkU2NvcGUiLCJnZXRab29tIiwiZGlzYWJsZSIsImxheWVyX2xvYWRlZCIsInB1c2giLCJmZWF0dXJlcyIsIm1heEVsZW1lbnRzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIl9pc01vdW50ZWQiLCJleHRlbnQiLCJjYWxjdWxhdGVFeHRlbnQiLCJnZXRGZWF0dXJlc0luRXh0ZW50IiwidmVjdG9yU291cmNlcyIsInNpbmdsZVNvdXJjZSIsInNpbmdsZUZlYXR1cmVzIiwiY29uY2F0IiwidW5pcXVlRmVhdHVyZXMiLCJmZWF0dXJlSWRzIiwibGVuZ3RoIiwidGlkIiwib2xfdWlkIiwiZmVhdHVyZXNTb3J0ZWQiLCJzb3J0RmVhdHVyZXMiLCJnZW9sb2NhdGlvbiIsInBlbmRpbmdTY29wZVVwZGF0ZSIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJtYXhEaXN0YW5jZSIsInNvcnQiLCJhIiwiYiIsImdlb21BIiwiZ2V0R2VvbWV0cnkiLCJnZW9tQiIsImdldENvb3JkaW5hdGVzIiwiY29vcmRzQSIsImNvb3Jkc0IiLCJBcnJheSIsImlzQXJyYXkiLCJsaW5lU3RyaW5nQSIsIkxpbmVTdHJpbmciLCJkaXN0YW5jZUEiLCJnZXRMZW5ndGgiLCJsaW5lU3RyaW5nQiIsImRpc3RhbmNlQiIsIm1hdHJpeEtleSIsIm9iak1pc3NEaXN0IiwiYXJyTG9jYXRpb25zIiwidG9Mb25MYXQiLCJnZW9tIiwiY29vcmRzIiwicHJveHlVcmwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2F0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwianNvbkRhdGEiLCJkaXN0YW5jZXMiLCJzb3VyY2VzX3RvX3RhcmdldHMiLCJmb3JjZVVwZGF0ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsaXN0IiwiZXh0ZXJuYWxIZWFkbGluZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJjc3NDb25zdGFudHMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXJDbGFzcyIsImhlYWRlciIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VCdG5UaXRsZSIsIkNMT1NFIiwic2V0T3BlbkNvbXBvbmVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=