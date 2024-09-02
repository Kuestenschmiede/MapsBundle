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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.feature.ol_uid !== prevProps.feature.ol_uid) {
        this.loadPopup();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXNjb3BlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsbUJBQUE7QUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLHlCQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsYUFBQSxHQUFBSCxtQkFBQTtBQUF3QyxTQUFBSSx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQU4sd0JBQUFNLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFBLFdBQUFDLENBQUEsSUFBQWQsQ0FBQSxvQkFBQWMsQ0FBQSxPQUFBQyxjQUFBLENBQUFDLElBQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFQLENBQUEsR0FBQUMsTUFBQSxDQUFBRSx3QkFBQSxDQUFBYixDQUFBLEVBQUFjLENBQUEsVUFBQUcsQ0FBQSxL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QkFBaUJBLENBQUEsRUFBRztNQUNsQixJQUFJLENBQUMyRSxVQUFVLEdBQUcsSUFBSTtNQUN0QjtNQUNBO01BQ0E7SUFDRjtFQUFDO0lBQUF2SCxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBaUQsb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBSSxDQUFDcUUsVUFBVSxHQUFHLEtBQUs7SUFDekI7RUFBQztJQUFBdkgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNDLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFJLElBQUksQ0FBQ3pELEtBQUssQ0FBQ2lDLGFBQWEsQ0FBQ1MsSUFBSSxDQUFDb0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDOUwsS0FBSyxDQUFDaUMsYUFBYSxDQUFDUyxJQUFJLENBQUNpRSxjQUFjLENBQUNDLEdBQUcsRUFBRTtRQUM5RixJQUFJbUYsUUFBUSxHQUFHbkosbUJBQUssQ0FBQ29KLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsSUFBSUQsUUFBUSxLQUFLLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDM0wsS0FBSyxDQUFDaUcsSUFBSSxFQUFFO1VBQ3JEekQsbUJBQUssQ0FBQ3FKLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQy9CLENBQUMsTUFDSSxJQUFJRixRQUFRLEtBQUssZ0JBQWdCLElBQUksSUFBSSxDQUFDM0wsS0FBSyxDQUFDaUcsSUFBSSxFQUFFO1VBQ3pEekQsbUJBQUssQ0FBQ3FKLFVBQVUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7UUFDN0M7TUFDRjtJQUNGO0VBQUM7QUFBQSxFQXRQeUNySCxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc2NvcGUtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge3RvSHVtYW5EaXN0YW5jZX0gZnJvbSBcIi4vLi4vYzRnLXJvdXRlci10aW1lLWNvbnZlcnNpb25zXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZFNjb3BlSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBodG1sOiBcIjxkaXY+TG9hZGluZy4uLjwvZGl2PlwiXG4gICAgfTtcbiAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmUgPSB0aGlzLmhpZ2hsaWdodEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMubG9hZFBvcHVwID0gdGhpcy5sb2FkUG9wdXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9ic2VydmVyRnVuY3Rpb24gPSB0aGlzLm9ic2VydmVyRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuICBvYnNlcnZlckZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXN0RWxlbWVudCAmJiB0aGlzLnByb3BzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5sb2FkTW9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFBvcHVwKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVmICYmIHRoaXMucmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGhpcy5yZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGxvYWRQb3B1cCgpIHtcbiAgICBsZXQgcG9wdXAgPSB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgIGlmICghcG9wdXAuY29udGVudFN0YXJib2FyZCAmJiBwb3B1cC5hc3luYykge1xuICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cC5jb250ZW50O1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiO1xuICAgICAgdXJsICs9IFwic2NvcGU9c3RhcmJvYXJkc2NvcGVcIjtcbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcG9wdXAuY29udGVudFN0YXJib2FyZCA9IGRhdGEuY29udGVudFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgJ2h0bWwnOiBwb3B1cC5jb250ZW50U3RhcmJvYXJkXG4gICAgICAgICAgICAgICAgfSwgKCk9PiB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwge3BvcHVwOiBwb3B1cCwgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICdodG1sJzogcG9wdXAuY29udGVudFN0YXJib2FyZCB8fCBwb3B1cC5jb250ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaGlnaGxpZ2h0RmVhdHVyZSAoKSB7XG4gICAgdGhpcy5wcm9wcy5mZWF0dXJlLnNldChcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmZlYXR1cmUuc2V0KFwibWFya0xvY3N0eWxlXCIsIGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZS5vbF91aWQgIT09IHByZXZQcm9wcy5mZWF0dXJlLm9sX3VpZCkge1xuICAgICAgdGhpcy5sb2FkUG9wdXAoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWYuY3VycmVudCAmJiAhdGhpcy5vYnNlcnZlcikge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLm9ic2VydmVyRnVuY3Rpb24sIHtyb290OmRvY3VtZW50LCB0aHJlc2hvbGQ6IDAuMX0pO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMucmVmLmN1cnJlbnQpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRpc3RhbmNlID0gbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2UnKSkge1xuICAgICAgZGlzdGFuY2UgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWxlbWVudC1kaXN0YW5jZVwifT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYW5nQ29uc3RhbnRzLkRJU1R9OiB7dG9IdW1hbkRpc3RhbmNlKHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ2Rpc3RhbmNlTWF0cml4JykgfHwgdGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2UnKSl9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaHRtbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgcmVmPXt0aGlzLnJlZn0gb25Nb3VzZVVwPXt0aGlzLmhpZ2hsaWdodEZlYXR1cmV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMuc3RhdGUuaHRtbH19Lz5cbiAgICAgICAgICAgIHtkaXN0YW5jZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7Q2x1c3Rlcn0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtTdGFyYm9hcmRTY29wZUl0ZW19IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc2NvcGUtaXRlbS5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0dlb2xvY2F0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7TGluZVN0cmluZ30gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dG9Mb25MYXR9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHtnZXRMZW5ndGh9IGZyb20gXCJvbC9zcGhlcmVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRTY29wZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgdGhpcy5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgIC8vc3BlY2lmaWMgY29kZSBmb3IgdGhlIGNvbnRyb2xcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuRUxFTUVOVFNfU0NPUEU7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkc2NvcGUtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBudWxsO1xuICAgIGxldCBvcGVuID0gcHJvcHMub3BlbiB8fCBmYWxzZVxuICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkc2NvcGUuZGl2KSB7XG4gICAgICB0aGlzLmNsb3NlID0gKCkgPT4ge307XG4gICAgICBvcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcInN0YXJib2FyZHNjb3BlXCIpO1xuICAgICAgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRNb3JlID0gdGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUgPSB0aGlzLmdldEZlYXR1cmVzSW5TY29wZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmlldyA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgdGhpcy52ZWN0b3JTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2UuZ2V0U291cmNlKCk6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2U7XG4gICAgdGhpcy52aWV3Lm9uKCdjaGFuZ2U6Y2VudGVyJywgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5vbignY2hhbmdlOnJlc29sdXRpb24nLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnZpZXcuZ2V0Wm9vbSgpIDwgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWluWm9vbVN0YXJib2FyZFNjb3BlICYmIHRoaXMuc3RhdGUuZGlzYWJsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKClcbiAgICB9KTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCA9IHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkIHx8IFtdO1xuICAgIHdpbmRvdy5jNGdNYXBzSG9va3MubGF5ZXJfbG9hZGVkLnB1c2goKGVsZW1lbnQpPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbjogb3BlbixcbiAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkc2NvcGUtcGFuZWxcIixcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBmZWF0dXJlczogW10sXG4gICAgICBtYXhFbGVtZW50czogMjBcbiAgICB9O1xuICB9XG5cbiAgZ2V0RmVhdHVyZXNJblNjb3BlICgpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gRGF0ZS5ub3coKTsgLy9nZXQgdGltZXN0YW1wIHRvIHRyaWdnZXIgZXZlbnQgb25seSBldmVyeSBmb3VydGggb2YgYSBzZWNvbmRcbiAgICBjb25zdCBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGNvbnN0IGxheWVyQ29udHJvbGxlciA9IG1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5kaXNhYmxlICYmIHRoaXMuX2lzTW91bnRlZCAmJiB0aW1lc3RhbXAgPiB0aGlzLmxhc3RUaW1lICsgMjUwKSB7XG4gICAgICBpZiAobWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSAmJiB0aGlzLnZpZXcuZ2V0Wm9vbSgpIDwgbWFwQ29udHJvbGxlci5kYXRhLm1pblpvb21TdGFyYm9hcmRTY29wZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmZWF0dXJlczogW11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZXN0YW1wO1xuICAgICAgbGV0IGV4dGVudCA9IHRoaXMudmlldy5jYWxjdWxhdGVFeHRlbnQoKTtcbiAgICAgIGxldCBmZWF0dXJlcyA9IHRoaXMudmVjdG9yU291cmNlLmdldEZlYXR1cmVzSW5FeHRlbnQoZXh0ZW50KTtcbiAgICAgIGZvciAobGV0IGkgaW4gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXMpIHtcbiAgICAgICAgaWYgKGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgbGV0IHNpbmdsZVNvdXJjZSA9IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldLmdldFNvdXJjZSgpIDogbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV07XG4gICAgICAgICAgbGV0IHNpbmdsZUZlYXR1cmVzID0gc2luZ2xlU291cmNlLmdldEZlYXR1cmVzSW5FeHRlbnQoZXh0ZW50KTtcbiAgICAgICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLmNvbmNhdChzaW5nbGVGZWF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmZWF0dXJlc1NvcnRlZCA9IHRoaXMuc29ydEZlYXR1cmVzKGZlYXR1cmVzKTtcbiAgICAgIGlmICghZmVhdHVyZXNTb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IC1JbmZpbml0eTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9Pnt0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpfSwgMjAwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgc29ydEZlYXR1cmVzIChmZWF0dXJlcykge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24pIHtcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpO1xuICAgICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgbWF4RGlzdGFuY2UgPSAwO1xuICAgICAgZmVhdHVyZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgbGluZVN0cmluZ0EgPSBuZXcgTGluZVN0cmluZyhbcG9zaXRpb24sIGEuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpXSlcbiAgICAgICAgbGV0IGRpc3RhbmNlQSA9IGdldExlbmd0aChsaW5lU3RyaW5nQSk7XG4gICAgICAgIGEuc2V0KCdkaXN0YW5jZScsIGRpc3RhbmNlQSk7XG5cbiAgICAgICAgbGV0IGxpbmVTdHJpbmdCID0gbmV3IExpbmVTdHJpbmcoW3Bvc2l0aW9uLCBiLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKV0pXG4gICAgICAgIGxldCBkaXN0YW5jZUIgPSBnZXRMZW5ndGgobGluZVN0cmluZ0IpO1xuXG4gICAgICAgIG1heERpc3RhbmNlID0gZGlzdGFuY2VBID4gbWF4RGlzdGFuY2UgPyBkaXN0YW5jZUEgOiBtYXhEaXN0YW5jZTtcbiAgICAgICAgbWF4RGlzdGFuY2UgPSBkaXN0YW5jZUIgPiBtYXhEaXN0YW5jZSA/IGRpc3RhbmNlQiA6IG1heERpc3RhbmNlO1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VBIC0gZGlzdGFuY2VCO1xuICAgICAgfSk7XG4gICAgICBpZiAobWF4RGlzdGFuY2UgPCAzMCAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXRyaXhLZXkpIHtcbiAgICAgICAgbGV0IG9iak1pc3NEaXN0ID0gW107XG4gICAgICAgIGxldCBhcnJMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgYXJyTG9jYXRpb25zLnB1c2godG9Mb25MYXQocG9zaXRpb24pKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgIGlmIChmZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiAhZmVhdHVyZXNbaV0uZ2V0KCdkaXN0YW5jZU1hdHJpeCcpKSB7XG4gICAgICAgICAgICBvYmpNaXNzRGlzdC5wdXNoKGZlYXR1cmVzW2ldKTtcbiAgICAgICAgICAgIGFyckxvY2F0aW9ucy5wdXNoKHRvTG9uTGF0KGZlYXR1cmVzW2ldLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJyTG9jYXRpb25zLmxlbmd0aCA+IDIgJiYgIXRoaXMucHJldmVudEFkZFJlcXMpIHtcbiAgICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucHJveHlVcmwgKyAnbWF0cml4LnBocD9sYW5ndWFnZT1kZSZwcm9maWxlPWF1dG8ma2V5PScgKyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5tYXRyaXhLZXk7XG4gICAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7bG9jYXRpb25zOiBhcnJMb2NhdGlvbnN9KTtcbiAgICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgICAgc2NvcGUucHJldmVudEFkZFJlcXMgPSB0cnVlO1xuICAgICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9wbGFpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBib2R5XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNjb3BlLnByZXZlbnRBZGRSZXFzID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oanNvbkRhdGEpIHtcbiAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlcyA9IGpzb25EYXRhICYmIGpzb25EYXRhLnNvdXJjZXNfdG9fdGFyZ2V0cyA/IGpzb25EYXRhLnNvdXJjZXNfdG9fdGFyZ2V0c1swXSA6IFtdO1xuICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gZGlzdGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBvYmpNaXNzRGlzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgb2JqTWlzc0Rpc3RbaV0uc2V0KCdkaXN0YW5jZU1hdHJpeCcsIGRpc3RhbmNlc1tpXS5kaXN0YW5jZSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzY29wZS5zb3J0RmVhdHVyZXMoc2NvcGUuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICBzY29wZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRyb2wpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbGlzdCA9ICBudWxsO1xuICAgIGlmICghdGhpcy5zdGF0ZS5kaXNhYmxlKSB7XG4gICAgICBsaXN0ID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRlbnQtY29udGFpbmVyXCJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5zdGF0ZS5tYXhFbGVtZW50cykge1xuICAgICAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZFNjb3BlSXRlbSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGxhbmdDb25zdGFudHM9e3RoaXMubGFuZ0NvbnN0YW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSBmZWF0dXJlPXtmZWF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RWxlbWVudD17aW5kZXggPT09IHRoaXMuc3RhdGUubWF4RWxlbWVudHMgLSAxfSBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZX0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRX0gY2xvc2VCdG5DbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtY2xvc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9Lz5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgIHtsaXN0fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4ge1xuICAgICAgbGV0IGV2dCA9IHt9O1xuICAgICAgZXZ0LnRhcmdldCA9IHRoaXMudmlldztcbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG4gIGxvYWRNb3JlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe21heEVsZW1lbnRzOiB0aGlzLnN0YXRlLm1heEVsZW1lbnRzICsgMjB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIC8vIGlmICghdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFRyYWNraW5nKCkpIHtcbiAgICAvLyAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5zZXRUcmFja2luZyh0cnVlKTtcbiAgICAvLyB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZHNjb3BlLmRpdikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IFwiU3RhcmJvYXJkU2NvcGVcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJTdGFyYm9hcmRTY29wZVwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiU3RhcmJvYXJkU2NvcGVcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudCIsIl9jNGdSb3V0ZXJUaW1lQ29udmVyc2lvbnMiLCJfYzRnTWFwc1V0aWxzIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJTdGFyYm9hcmRTY29wZUl0ZW0iLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwic2NvcGUiLCJzdGF0ZSIsImh0bWwiLCJoaWdobGlnaHRGZWF0dXJlIiwiYmluZCIsInJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibG9hZFBvcHVwIiwib2JzZXJ2ZXJGdW5jdGlvbiIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJfdGhpczIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImxhc3RFbGVtZW50IiwibG9hZE1vcmUiLCJjdXJyZW50IiwidW5vYnNlcnZlIiwiX3RoaXMzIiwicG9wdXAiLCJmZWF0dXJlIiwiY29udGVudFN0YXJib2FyZCIsImFzeW5jIiwidXJsIiwibWFwQ29udHJvbGxlciIsInByb3h5IiwiYXBpX2luZm93aW5kb3dfdXJsIiwiY29udGVudCIsImluY2x1ZGVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwidXRpbHMiLCJjYWxsSG9va0Z1bmN0aW9ucyIsIndpbmRvdyIsImM0Z01hcHNIb29rcyIsInByb3h5X2ZpbGxQb3B1cCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJfdGhpczQiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJvbF91aWQiLCJjb21wb25lbnREaWRNb3VudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImRvY3VtZW50IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZGlzdGFuY2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFuZ0NvbnN0YW50cyIsIkRJU1QiLCJ0b0h1bWFuRGlzdGFuY2UiLCJvbk1vdXNlVXAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbXBvbmVudCIsIl9jb250cm9sIiwiX3NvdXJjZSIsIl9jNGdTdGFyYm9hcmRTY29wZUl0ZW0iLCJfYzRnTWFwc0kxOG4iLCJfb2wiLCJfZ2VvbSIsIl9wcm9qIiwiX3NwaGVyZSIsIlRpdGxlYmFyIiwibGF6eSIsIlN0YXJib2FyZFNjb3BlIiwibGFzdFRpbWUiLCJJbmZpbml0eSIsInByZXZlbnRBZGRSZXFzIiwiZWxlbWVudCIsImJ1dHRvbiIsImdldExhbmd1YWdlIiwidGhlbWVEYXRhIiwiY29udHJvbExhYmVscyIsInNwYW4iLCJpbm5lclRleHQiLCJFTEVNRU5UU19TQ09QRSIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJvcGVuIiwialF1ZXJ5Iiwib24iLCJldmVudCIsImNsb3NlIiwiY29udHJvbCIsInN0YXJib2FyZHNjb3BlIiwiZGl2IiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJnZXRGZWF0dXJlc0luU2NvcGUiLCJ2aWV3IiwibWFwIiwiZ2V0VmlldyIsImxheWVyQ29udHJvbGxlciIsInZlY3RvclNvdXJjZSIsIkNsdXN0ZXIiLCJnZXRTb3VyY2UiLCJldnQiLCJtaW5ab29tU3RhcmJvYXJkU2NvcGUiLCJnZXRab29tIiwiZGlzYWJsZSIsImxheWVyX2xvYWRlZCIsInB1c2giLCJmZWF0dXJlcyIsIm1heEVsZW1lbnRzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIl9pc01vdW50ZWQiLCJleHRlbnQiLCJjYWxjdWxhdGVFeHRlbnQiLCJnZXRGZWF0dXJlc0luRXh0ZW50IiwidmVjdG9yU291cmNlcyIsInNpbmdsZVNvdXJjZSIsInNpbmdsZUZlYXR1cmVzIiwiY29uY2F0IiwiZmVhdHVyZXNTb3J0ZWQiLCJzb3J0RmVhdHVyZXMiLCJnZW9sb2NhdGlvbiIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJtYXhEaXN0YW5jZSIsInNvcnQiLCJiIiwibGluZVN0cmluZ0EiLCJMaW5lU3RyaW5nIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImRpc3RhbmNlQSIsImdldExlbmd0aCIsImxpbmVTdHJpbmdCIiwiZGlzdGFuY2VCIiwibWF0cml4S2V5Iiwib2JqTWlzc0Rpc3QiLCJhcnJMb2NhdGlvbnMiLCJ0b0xvbkxhdCIsImxlbmd0aCIsInByb3h5VXJsIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImpzb25EYXRhIiwiZGlzdGFuY2VzIiwic291cmNlc190b190YXJnZXRzIiwiZm9yY2VVcGRhdGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwibGlzdCIsImNzc0NvbnN0YW50cyIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlckNsYXNzIiwiaGVhZGVyIiwiY2xvc2VCdG5DbGFzcyIsImNsb3NlQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJzZXRPcGVuQ29tcG9uZW50IiwiY2FjaGluZyIsInBhbmVsVmFsIiwiZ2V0VmFsdWUiLCJzdG9yZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==