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
    _this.getKey = _this.getKey.bind(_this);
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
        if (featuresSorted === false && this.props.mapController.geolocation.getTracking()) {
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
      if (this.props.mapController.geolocation.getTracking()) {
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
              key: _this3.getKey(),
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
  }, {
    key: "getKey",
    value: function getKey() {
      return Math.random() * 999999 + 1;
    }
  }]);
}(_react.Component);

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXNjb3BlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLHlCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsYUFBQSxHQUFBSCxtQkFBQTtBQUF3QyxTQUFBRCx3QkFBQUssQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQVAsdUJBQUEsWUFBQUEsd0JBQUFLLENBQUEsRUFBQUMsQ0FBQSxTQUFBQSxDQUFBLElBQUFELENBQUEsSUFBQUEsQ0FBQSxDQUFBSyxVQUFBLFNBQUFMLENBQUEsTUFBQU0sQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsS0FBQUMsU0FBQSxtQkFBQVQsQ0FBQSxpQkFBQUEsQ0FBQSxnQkFBQVUsT0FBQSxDQUFBVixDQUFBLDBCQUFBQSxDQUFBLFNBQUFRLENBQUEsTUFBQUYsQ0FBQSxHQUFBTCxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxRQUFBRyxDQUFBLENBQUFLLEdBQUEsQ0FBQVgsQ0FBQSxVQUFBTSxDQUFBLENBQUFNLEdBQUEsQ0FBQVosQ0FBQSxHQUFBTSxDQUFBLENBQUFPLEdBQUEsQ0FBQWIsQ0FBQSxFQUFBUSxDQUFBLGNBQUFNLEVBQUEsSUFBQWQsQ0FBQSxnQkFBQWMsRUFBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLElBQUFELENBQUEsR0FBQVcsTUFBQSxDQUFBQyxjQUFBLEtBQUFELE1BQUEsQ0FBQUUsd0JBQUEsQ0FBQW5CLENBQUEsRUFBQWMsRUFBQSxPQUFBUCxDQUFBLENBQUFLLEdBQUEsSUFB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RjtFQUFDO0lBQUFwSCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNkMsb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBSSxDQUFDc0UsVUFBVSxHQUFHLEtBQUs7SUFDekI7RUFBQztJQUFBcEgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThMLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJLElBQUksQ0FBQ2pOLEtBQUssQ0FBQ21DLGFBQWEsQ0FBQ1EsSUFBSSxDQUFDdUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDbE4sS0FBSyxDQUFDbUMsYUFBYSxDQUFDUSxJQUFJLENBQUM0RCxjQUFjLENBQUNDLEdBQUcsRUFBRTtRQUM5RixJQUFJMkcsUUFBUSxHQUFHdEssbUJBQUssQ0FBQ3VLLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSUQsUUFBUSxLQUFLLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDL00sS0FBSyxDQUFDNkYsSUFBSSxFQUFFO1VBQ3JEcEQsbUJBQUssQ0FBQ3dLLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQy9CLENBQUMsTUFDSSxJQUFJRixRQUFRLEtBQUssZ0JBQWdCLElBQUksSUFBSSxDQUFDL00sS0FBSyxDQUFDNkYsSUFBSSxFQUFFO1VBQ3pEcEQsbUJBQUssQ0FBQ3dLLFVBQVUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7UUFDN0M7TUFDRjtJQUNGO0VBQUM7SUFBQXRNLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUErRixNQUFNQSxDQUFBLEVBQUc7TUFDUCxPQUFRdUcsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDO0lBQ3BDO0VBQUM7QUFBQSxFQXRTeUMvSSxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXNjb3BlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt0b0h1bWFuRGlzdGFuY2V9IGZyb20gXCIuLy4uL2M0Zy1yb3V0ZXItdGltZS1jb252ZXJzaW9uc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFyYm9hcmRTY29wZUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaHRtbDogXCI8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cIlxuICAgIH07XG4gICAgdGhpcy5oaWdobGlnaHRGZWF0dXJlID0gdGhpcy5oaWdobGlnaHRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmxvYWRQb3B1cCA9IHRoaXMubG9hZFBvcHVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vYnNlcnZlckZ1bmN0aW9uID0gdGhpcy5vYnNlcnZlckZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBvYnNlcnZlckZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXN0RWxlbWVudCAmJiB0aGlzLnByb3BzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTW9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFBvcHVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVmICYmIHRoaXMucmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGhpcy5yZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRQb3B1cCgpIHtcbiAgICBsZXQgcG9wdXAgPSB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgIGlmIChwb3B1cCAmJiAhcG9wdXAuY29udGVudFN0YXJib2FyZCAmJiBwb3B1cC5hc3luYyAmJiBwb3B1cC5jb250ZW50ICYmICh0eXBlb2YgcG9wdXAuY29udGVudCA9PT0gJ3N0cmluZycpICYmIHBvcHVwLmNvbnRlbnQuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cC5jb250ZW50O1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiO1xuICAgICAgdXJsICs9IFwic2NvcGU9c3RhcmJvYXJkc2NvcGVcIjtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY29udGVudFN0YXJib2FyZCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgJ2h0bWwnOiBwb3B1cC5jb250ZW50U3RhcmJvYXJkXG4gICAgICAgICAgICAgICAgfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwge3BvcHVwOiBwb3B1cCwgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwb3B1cCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICdodG1sJzogcG9wdXAuY29udGVudFN0YXJib2FyZCB8fCBwb3B1cC5jb250ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoaWdobGlnaHRGZWF0dXJlICgpIHtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmUuc2V0KFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZmVhdHVyZS5zZXQoXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVmLmN1cnJlbnQgJiYgIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5vYnNlcnZlckZ1bmN0aW9uLCB7cm9vdDpkb2N1bWVudCwgdGhyZXNob2xkOiAwLjF9KTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLnJlZi5jdXJyZW50KTtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZGlzdGFuY2UgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKSB7XG4gICAgICBkaXN0YW5jZSA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lbGVtZW50LWRpc3RhbmNlXCJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhbmdDb25zdGFudHMuRElTVH06IHt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKX1cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmh0bWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIHJlZj17dGhpcy5yZWZ9IG9uTW91c2VVcD17dGhpcy5oaWdobGlnaHRGZWF0dXJlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1wb3B1cC13cmFwcGVyXCJ9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnN0YXRlLmh0bWx9fS8+XG4gICAgICAgICAgICB7ZGlzdGFuY2V9XG4gICAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy5tZFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtTdGFyYm9hcmRTY29wZUl0ZW19IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc2NvcGUtaXRlbS5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZ30gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dG9Mb25MYXR9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHtnZXRMZW5ndGh9IGZyb20gXCJvbC9zcGhlcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRTY29wZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgdGhpcy5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgIC8vc3BlY2lmaWMgY29kZSBmb3IgdGhlIGNvbnRyb2xcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuRUxFTUVOVFNfU0NPUEU7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkc2NvcGUtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBudWxsO1xuICAgIGxldCBvcGVuID0gcHJvcHMub3BlbiB8fCBmYWxzZVxuICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkc2NvcGUuZGl2KSB7XG4gICAgICB0aGlzLmNsb3NlID0gKCkgPT4ge307XG4gICAgICBvcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcInN0YXJib2FyZHNjb3BlXCIpO1xuICAgICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRNb3JlID0gdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0S2V5ID0gdGhpcy5nZXRLZXkuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlID0gdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZpZXcgPSBwcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIHRoaXMudmVjdG9yU291cmNlID0gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlLmdldFNvdXJjZSgpOiBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlO1xuICAgIHRoaXMudmlldy5vbignY2hhbmdlOmNlbnRlcicsIChldnQpID0+IHtcbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKClcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5taW5ab29tU3RhcmJvYXJkU2NvcGUgJiYgdGhpcy52aWV3LmdldFpvb20oKSA8IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5taW5ab29tU3RhcmJvYXJkU2NvcGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnN0YXRlLmRpc2FibGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpXG4gICAgfSk7XG4gICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKChlbGVtZW50KT0+IHtcbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IG9wZW4sXG4gICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLXN0YXJib2FyZHNjb3BlLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgZmVhdHVyZXM6IFtdLFxuICAgICAgbWF4RWxlbWVudHM6IDIwXG4gICAgfTtcbiAgfVxuXG4gIGdldEZlYXR1cmVzSW5TY29wZSAoKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7IC8vZ2V0IHRpbWVzdGFtcCB0byB0cmlnZ2VyIGV2ZW50IG9ubHkgZXZlcnkgZm91cnRoIG9mIGEgc2Vjb25kXG4gICAgY29uc3QgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBjb25zdCBsYXllckNvbnRyb2xsZXIgPSBtYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcblxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUuZGlzYWJsZSAmJiB0aGlzLl9pc01vdW50ZWQgJiYgdGltZXN0YW1wID4gdGhpcy5sYXN0VGltZSArIDI1MCkge1xuICAgICAgaWYgKG1hcENvbnRyb2xsZXIuZGF0YS5taW5ab29tU3RhcmJvYXJkU2NvcGUgJiYgdGhpcy52aWV3LmdldFpvb20oKSA8IG1hcENvbnRyb2xsZXIuZGF0YS5taW5ab29tU3RhcmJvYXJkU2NvcGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIGxldCBleHRlbnQgPSB0aGlzLnZpZXcuY2FsY3VsYXRlRXh0ZW50KCk7XG4gICAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnZlY3RvclNvdXJjZS5nZXRGZWF0dXJlc0luRXh0ZW50KGV4dGVudCk7XG4gICAgICBmb3IgKGxldCBpIGluIGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzKSB7XG4gICAgICAgIGlmIChsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBzaW5nbGVTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlc1tpXSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlc1tpXS5nZXRTb3VyY2UoKSA6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldO1xuICAgICAgICAgIGxldCBzaW5nbGVGZWF0dXJlcyA9IHNpbmdsZVNvdXJjZS5nZXRGZWF0dXJlc0luRXh0ZW50KGV4dGVudCk7XG4gICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQoc2luZ2xlRmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGRlZHVwbGljYXRlIGZlYXR1cmVzIGJ5ICd0aWQnIG9yICd1dWlkJyBvciBmYWxsYmFjayB0byBvcGVubGF5ZXJzIHVpZFxuICAgICAgbGV0IHVuaXF1ZUZlYXR1cmVzID0gW107XG4gICAgICBsZXQgZmVhdHVyZUlkcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICBsZXQgdGlkID0gZmVhdHVyZS5nZXQoJ3RpZCcpIHx8IChmZWF0dXJlLmdldCgncG9wdXAnKSA/IGZlYXR1cmUuZ2V0KCdwb3B1cCcpLmNvbnRlbnQgOiBudWxsKSB8fCBmZWF0dXJlLm9sX3VpZDtcbiAgICAgICAgaWYgKHRpZCAmJiBmZWF0dXJlSWRzLmluZGV4T2YodGlkKSA9PT0gLTEpIHtcbiAgICAgICAgICBmZWF0dXJlSWRzLnB1c2godGlkKTtcbiAgICAgICAgICB1bmlxdWVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aWQpIHtcbiAgICAgICAgICB1bmlxdWVGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmZWF0dXJlcyA9IHVuaXF1ZUZlYXR1cmVzO1xuXG4gICAgICBsZXQgZmVhdHVyZXNTb3J0ZWQgPSB0aGlzLnNvcnRGZWF0dXJlcyhmZWF0dXJlcyk7XG4gICAgICBpZiAoZmVhdHVyZXNTb3J0ZWQgPT09IGZhbHNlICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRUcmFja2luZygpKSB7XG4gICAgICAgIGlmICghdGhpcy5wZW5kaW5nU2NvcGVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdTY29wZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1Njb3BlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmZWF0dXJlczogZmVhdHVyZXNTb3J0ZWQgfHwgZmVhdHVyZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgc29ydEZlYXR1cmVzIChmZWF0dXJlcykge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0VHJhY2tpbmcoKSkge1xuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCk7XG4gICAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCBtYXhEaXN0YW5jZSA9IDA7XG4gICAgICBmZWF0dXJlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBnZW9tQSA9ICh0eXBlb2YgYS5nZXRHZW9tZXRyeSA9PT0gJ2Z1bmN0aW9uJykgPyBhLmdldEdlb21ldHJ5KCkgOiBudWxsO1xuICAgICAgICBsZXQgZ2VvbUIgPSAodHlwZW9mIGIuZ2V0R2VvbWV0cnkgPT09ICdmdW5jdGlvbicpID8gYi5nZXRHZW9tZXRyeSgpIDogbnVsbDtcbiAgICAgICAgaWYgKCFnZW9tQSB8fCAhZ2VvbUIgfHwgdHlwZW9mIGdlb21BLmdldENvb3JkaW5hdGVzICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBnZW9tQi5nZXRDb29yZGluYXRlcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb29yZHNBID0gZ2VvbUEuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgbGV0IGNvb3Jkc0IgPSBnZW9tQi5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBpZiAoIWNvb3Jkc0EgfHwgIWNvb3Jkc0IgfHwgIUFycmF5LmlzQXJyYXkoY29vcmRzQSkgfHwgIUFycmF5LmlzQXJyYXkoY29vcmRzQikpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGluZVN0cmluZ0EgPSBuZXcgTGluZVN0cmluZyhbcG9zaXRpb24sIGNvb3Jkc0FdKVxuICAgICAgICBsZXQgZGlzdGFuY2VBID0gZ2V0TGVuZ3RoKGxpbmVTdHJpbmdBKTtcbiAgICAgICAgYS5zZXQoJ2Rpc3RhbmNlJywgZGlzdGFuY2VBKTtcblxuICAgICAgICBsZXQgbGluZVN0cmluZ0IgPSBuZXcgTGluZVN0cmluZyhbcG9zaXRpb24sIGNvb3Jkc0JdKVxuICAgICAgICBsZXQgZGlzdGFuY2VCID0gZ2V0TGVuZ3RoKGxpbmVTdHJpbmdCKTtcblxuICAgICAgICBtYXhEaXN0YW5jZSA9IGRpc3RhbmNlQSA+IG1heERpc3RhbmNlID8gZGlzdGFuY2VBIDogbWF4RGlzdGFuY2U7XG4gICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2VCID4gbWF4RGlzdGFuY2UgPyBkaXN0YW5jZUIgOiBtYXhEaXN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlQSAtIGRpc3RhbmNlQjtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1heERpc3RhbmNlIDwgMzAgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWF0cml4S2V5KSB7XG4gICAgICAgIGxldCBvYmpNaXNzRGlzdCA9IFtdO1xuICAgICAgICBsZXQgYXJyTG9jYXRpb25zID0gW107XG4gICAgICAgIGFyckxvY2F0aW9ucy5wdXNoKHRvTG9uTGF0KHBvc2l0aW9uKSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZmVhdHVyZXMpIHtcbiAgICAgICAgICBsZXQgZ2VvbSA9ICh0eXBlb2YgZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkgPT09ICdmdW5jdGlvbicpID8gZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkoKSA6IG51bGw7XG4gICAgICAgICAgbGV0IGNvb3JkcyA9IChnZW9tICYmIHR5cGVvZiBnZW9tLmdldENvb3JkaW5hdGVzID09PSAnZnVuY3Rpb24nKSA/IGdlb20uZ2V0Q29vcmRpbmF0ZXMoKSA6IG51bGw7XG4gICAgICAgICAgaWYgKGZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpICYmICFmZWF0dXJlc1tpXS5nZXQoJ2Rpc3RhbmNlTWF0cml4JykgJiYgY29vcmRzICYmIEFycmF5LmlzQXJyYXkoY29vcmRzKSkge1xuICAgICAgICAgICAgb2JqTWlzc0Rpc3QucHVzaChmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgICBhcnJMb2NhdGlvbnMucHVzaCh0b0xvbkxhdChjb29yZHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyckxvY2F0aW9ucy5sZW5ndGggPiAyICYmICF0aGlzLnByZXZlbnRBZGRSZXFzKSB7XG4gICAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByb3h5VXJsICsgJ21hdHJpeC5waHA/bGFuZ3VhZ2U9ZGUmcHJvZmlsZT1hdXRvJmtleT0nICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWF0cml4S2V5O1xuICAgICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe2xvY2F0aW9uczogYXJyTG9jYXRpb25zfSk7XG4gICAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICAgIHNjb3BlLnByZXZlbnRBZGRSZXFzID0gdHJ1ZTtcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzY29wZS5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGpzb25EYXRhKSB7XG4gICAgICAgICAgICAgIGxldCBkaXN0YW5jZXMgPSAoanNvbkRhdGEgJiYganNvbkRhdGEuc291cmNlc190b190YXJnZXRzICYmIGpzb25EYXRhLnNvdXJjZXNfdG9fdGFyZ2V0cy5sZW5ndGggPiAwKSA/IGpzb25EYXRhLnNvdXJjZXNfdG9fdGFyZ2V0c1swXSA6IFtdO1xuICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gZGlzdGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBvYmpNaXNzRGlzdC5oYXNPd25Qcm9wZXJ0eShpKSAmJiBkaXN0YW5jZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgIG9iak1pc3NEaXN0W2ldLnNldCgnZGlzdGFuY2VNYXRyaXgnLCBkaXN0YW5jZXNbaV0uZGlzdGFuY2UgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2NvcGUuc29ydEZlYXR1cmVzKHNjb3BlLnN0YXRlLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgc2NvcGUuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250cm9sKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmRzY29wZS1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmRzY29wZS1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGlzdCA9ICBudWxsO1xuICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlKSB7XG4gICAgICBsaXN0ID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRlbnQtY29udGFpbmVyXCJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5zdGF0ZS5tYXhFbGVtZW50cykge1xuICAgICAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZFNjb3BlSXRlbSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmdDb25zdGFudHM9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBrZXk9e3RoaXMuZ2V0S2V5KCl9IGZlYXR1cmU9e2ZlYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50PXtpbmRleCA9PT0gdGhpcy5zdGF0ZS5tYXhFbGVtZW50cyAtIDF9IGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlfS8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgdmFyIGV4dGVybmFsSGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1leHRlcm5hbC1oZWFkbGluZVwiKTtcbiAgICBpZiAoZXh0ZXJuYWxIZWFkbGluZSkge1xuICAgICAgdGhpcy5sYW5nQ29uc3RhbnRzLkVMRU1FTlRTX1NDT1BFID0gZXh0ZXJuYWxIZWFkbGluZS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfV1JBUFBFUn0+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmRzY29wZS1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLkVMRU1FTlRTX1NDT1BFfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy1zdGFyYm9hcmRzY29wZS1jbG9zZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAge2xpc3R9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB7XG4gICAgICBsZXQgZXZ0ID0ge307XG4gICAgICBldnQudGFyZ2V0ID0gdGhpcy52aWV3O1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBsb2FkTW9yZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttYXhFbGVtZW50czogdGhpcy5zdGF0ZS5tYXhFbGVtZW50cyArIDIwfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIC8vIGlmICghdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAvLyAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAvLyB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkc2NvcGUuZGl2KSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJTdGFyYm9hcmRTY29wZVwiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIlN0YXJib2FyZFNjb3BlXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJTdGFyYm9hcmRTY29wZVwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEtleSgpIHtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkgKyAxKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfYzRnTWFwc0NvbnN0YW50IiwiX2M0Z1JvdXRlclRpbWVDb252ZXJzaW9ucyIsIl9jNGdNYXBzVXRpbHMiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJTdGFyYm9hcmRTY29wZUl0ZW0iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJzdGF0ZSIsImh0bWwiLCJoaWdobGlnaHRGZWF0dXJlIiwiYmluZCIsInJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibG9hZFBvcHVwIiwib2JzZXJ2ZXJGdW5jdGlvbiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJfdGhpczIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImxhc3RFbGVtZW50IiwibG9hZE1vcmUiLCJjdXJyZW50IiwidW5vYnNlcnZlIiwiX3RoaXMzIiwicG9wdXAiLCJmZWF0dXJlIiwiY29udGVudFN0YXJib2FyZCIsImFzeW5jIiwiY29udGVudCIsImluZGV4T2YiLCJ1cmwiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJhcGlfaW5mb3dpbmRvd191cmwiLCJpbmNsdWRlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRTdGF0ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJwcm94eV9maWxsUG9wdXAiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiX3RoaXM0Iiwic2V0VGltZW91dCIsImNvbXBvbmVudERpZE1vdW50IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJyb290IiwiZG9jdW1lbnQiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJkaXN0YW5jZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJsYW5nQ29uc3RhbnRzIiwiRElTVCIsInRvSHVtYW5EaXN0YW5jZSIsIm9uTW91c2VVcCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ29tcG9uZW50IiwiX2NvbnRyb2wiLCJfc291cmNlIiwiX2M0Z1N0YXJib2FyZFNjb3BlSXRlbSIsIl9jNGdNYXBzSTE4biIsIl9vbCIsIl9nZW9tIiwiX3Byb2oiLCJfc3BoZXJlIiwiVGl0bGViYXIiLCJsYXp5IiwiU3RhcmJvYXJkU2NvcGUiLCJsYXN0VGltZSIsIkluZmluaXR5IiwicHJldmVudEFkZFJlcXMiLCJlbGVtZW50IiwiYnV0dG9uIiwiZ2V0TGFuZ3VhZ2UiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkVMRU1FTlRTX1NDT1BFIiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsIm9wZW4iLCJqUXVlcnkiLCJvbiIsImV2ZW50IiwiY2xvc2UiLCJjb250cm9sIiwic3RhcmJvYXJkc2NvcGUiLCJkaXYiLCJDb250cm9sIiwidGFyZ2V0IiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsImdldEtleSIsImdldEZlYXR1cmVzSW5TY29wZSIsInZpZXciLCJtYXAiLCJnZXRWaWV3IiwibGF5ZXJDb250cm9sbGVyIiwidmVjdG9yU291cmNlIiwiQ2x1c3RlciIsImdldFNvdXJjZSIsImV2dCIsIm1pblpvb21TdGFyYm9hcmRTY29wZSIsImdldFpvb20iLCJkaXNhYmxlIiwibGF5ZXJfbG9hZGVkIiwicHVzaCIsImZlYXR1cmVzIiwibWF4RWxlbWVudHMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiX2lzTW91bnRlZCIsImV4dGVudCIsImNhbGN1bGF0ZUV4dGVudCIsImdldEZlYXR1cmVzSW5FeHRlbnQiLCJ2ZWN0b3JTb3VyY2VzIiwic2luZ2xlU291cmNlIiwic2luZ2xlRmVhdHVyZXMiLCJjb25jYXQiLCJ1bmlxdWVGZWF0dXJlcyIsImZlYXR1cmVJZHMiLCJsZW5ndGgiLCJ0aWQiLCJvbF91aWQiLCJmZWF0dXJlc1NvcnRlZCIsInNvcnRGZWF0dXJlcyIsImdlb2xvY2F0aW9uIiwiZ2V0VHJhY2tpbmciLCJwZW5kaW5nU2NvcGVVcGRhdGUiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWF4RGlzdGFuY2UiLCJzb3J0IiwiYSIsImIiLCJnZW9tQSIsImdldEdlb21ldHJ5IiwiZ2VvbUIiLCJnZXRDb29yZGluYXRlcyIsImNvb3Jkc0EiLCJjb29yZHNCIiwiQXJyYXkiLCJpc0FycmF5IiwibGluZVN0cmluZ0EiLCJMaW5lU3RyaW5nIiwiZGlzdGFuY2VBIiwiZ2V0TGVuZ3RoIiwibGluZVN0cmluZ0IiLCJkaXN0YW5jZUIiLCJtYXRyaXhLZXkiLCJvYmpNaXNzRGlzdCIsImFyckxvY2F0aW9ucyIsInRvTG9uTGF0IiwiZ2VvbSIsImNvb3JkcyIsInByb3h5VXJsIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImpzb25EYXRhIiwiZGlzdGFuY2VzIiwic291cmNlc190b190YXJnZXRzIiwiZm9yY2VVcGRhdGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGlzdCIsImV4dGVybmFsSGVhZGxpbmUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiY3NzQ29uc3RhbnRzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoZWFkZXIiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsInNldE9wZW5Db21wb25lbnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsIk1hdGgiLCJyYW5kb20iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==