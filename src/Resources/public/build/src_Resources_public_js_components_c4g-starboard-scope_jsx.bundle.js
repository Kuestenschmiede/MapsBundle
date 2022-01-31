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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./src/Resources/public/js/c4g-maps-constant.js");

var _c4gRouterTimeConversions = __webpack_require__(/*! ./../c4g-router-time-conversions */ "./src/Resources/public/js/c4g-router-time-conversions.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StarboardScopeItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StarboardScopeItem, _Component);

  var _super = _createSuper(StarboardScopeItem);

  function StarboardScopeItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StarboardScopeItem);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.state = {};
    _this.highlightFeature = _this.highlightFeature.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(StarboardScopeItem, [{
    key: "highlightFeature",
    value: function highlightFeature() {
      var _this2 = this;

      this.props.feature.set("markLocstyle", true);
      window.setTimeout(function () {
        _this2.props.feature.set("markLocstyle", false);
      }, 3000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var popup = this.props.feature.get('popup');

      if (popup.async) {
        popup.async = false;
        fetch(this.props.mapController.proxy.api_infowindow_url + '/' + popup.content).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this3.props.feature.set('popup', data); // this.props.setSingleFeature(this.props.feature, this.props.index);

        });
      }

      var distance = null; // let featureGeometry = this.props.feature.getGeometry();
      // if (this.props.userPosition && featureGeometry.getType() === "Point") {
      //   let coordinates = [
      //       this.props.userPosition,
      //       featureGeometry.getCoordinates()
      //   ];
      //   let lineString = new LineString(coordinates);
      //   distance = <div className={"c4g-element-distance"}>
      //       {this.props.langConstants.DIST}: {toHumanDistance(lineString.getLength())}
      //   </div>
      // }

      if (this.props.feature.get('distance')) {
        distance = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-element-distance"
        }, this.props.langConstants.DIST, ": ", (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.feature.get('distanceMatrix') || this.props.feature.get('distance')));
      }

      return /*#__PURE__*/_react["default"].createElement("li", {
        onMouseUp: this.highlightFeature
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-popup-wrapper",
        dangerouslySetInnerHTML: {
          __html: this.props.feature.get('popup').content
        }
      }), distance);
    }
  }]);
  return StarboardScopeItem;
}(_react.Component);

exports.StarboardScopeItem = StarboardScopeItem;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var StarboardScope = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StarboardScope, _Component);

  var _super = _createSuper(StarboardScope);

  function StarboardScope(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StarboardScope);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.lastTime = -Infinity;
    _this.preventAddReqs = false; //specific code for the control

    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.ELEMENTS_SCOPE;
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
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    mapController.mapsControls.controls.baselayerSwitcher = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getFeaturesInScope = _this.getFeaturesInScope.bind((0, _assertThisInitialized2["default"])(_this));
    _this.view = props.mapController.map.getView();
    var layerController = props.mapController.proxy.layerController;
    _this.vectorSource = layerController.vectorSource instanceof _source.Cluster ? layerController.vectorSource.getSource() : layerController.vectorSource;

    _this.view.on('change', function (evt) {
      _this.getFeaturesInScope();
    });

    window.c4gMapsHooks.layer_loaded = window.c4gMapsHooks.layer_loaded || [];
    window.c4gMapsHooks.layer_loaded.push(function (lol) {
      _this.getFeaturesInScope();
    });
    _this.state = {
      open: props.open || false,
      className: props.className || "c4g-starboardscope-panel",
      control: control,
      features: []
    };
    return _this;
  }

  (0, _createClass2["default"])(StarboardScope, [{
    key: "getFeaturesInScope",
    value: function getFeaturesInScope() {
      var _this2 = this;

      var timestamp = Date.now(); //get timestamp to trigger event only every fourth of a second

      var mapController = this.props.mapController;
      var layerController = mapController.proxy.layerController;

      if (this.state.open && this._isMounted && timestamp > this.lastTime + 250) {
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
    key: "getDistance",
    value: function getDistance(point1, point2) {
      var R = 6371; // km

      var dLat = this.toRad(point2[0] - point1[0]);
      var dLon = this.toRad(point2[1] - point1[1]);
      var lat1 = this.toRad(point1[0]);
      var lat2 = this.toRad(point2[0]);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d * 1000;
    }
  }, {
    key: "toRad",
    value: function toRad(value) {
      return value * Math.PI / 180;
    }
  }, {
    key: "sortFeatures",
    value: function sortFeatures(features) {
      var _this3 = this;

      if (this.props.mapController.geolocation) {
        if (this.props.mapController.data.matrixKey) {
          var objMissDist = [];
          var arrLocations = [];

          var _position = this.props.mapController.geolocation.getPosition();

          if (!_position) {
            return false;
          }

          arrLocations.push((0, _proj.toLonLat)(_position));

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
                var distances = jsonData.sources_to_targets[0];

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

        var position = this.props.mapController.geolocation.getPosition();
        features.sort(function (a, b) {
          var distanceA = 0;
          var distanceB = 0;

          if (a.get('distanceMatrix') || a.get('distance')) {
            distanceA = a.get('distanceMatrix') || a.get('distance');
          } else {
            var featureGeometry = a.getGeometry();
            distanceA = _this3.getDistance((0, _proj.toLonLat)(position), (0, _proj.toLonLat)(featureGeometry.getCoordinates()));
            a.set('distance', distanceA);
          }

          if (b.get('distanceMatrix') || b.get('distance')) {
            distanceB = b.get('distanceMatrix') || b.get('distance');
          } else {
            var _featureGeometry = b.getGeometry();

            distanceB = _this3.getDistance((0, _proj.toLonLat)(position), (0, _proj.toLonLat)(_featureGeometry.getCoordinates()));
            b.set('distance', distanceB);
          }

          return distanceA - distanceB;
        });
      }

      return features;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close");
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
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-starboardscope-content-container"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, this.state.features.map(function (feature, index) {
        if (index < 20) {
          return /*#__PURE__*/_react["default"].createElement(_c4gStarboardScopeItem.StarboardScopeItem, {
            mapController: _this4.props.mapController,
            langConstants: _this4.langConstants,
            index: index,
            key: index,
            feature: feature
          });
        }
      }))));
    }
  }, {
    key: "open",
    value: function open() {
      var _this5 = this;

      this.setState({
        open: true
      }, function () {
        var evt = {};
        evt.target = _this5.view;

        _this5.getFeaturesInScope();
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      if (!this.props.mapController.geolocation.getTracking()) {
        this.props.mapController.geolocation.setTracking(true);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }]);
  return StarboardScope;
}(_react.Component);

exports["default"] = StarboardScope;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXNjb3BlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7QUFFWCw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBTUMsS0FBSyxpREFBWDtBQUNBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRUEsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLGdEQUF4QjtBQUxpQjtBQU1sQjs7OztXQUNELDRCQUFvQjtBQUFBOztBQUNsQixXQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLGNBQXZCLEVBQXVDLElBQXZDO0FBQ0FDLE1BQUFBLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO0FBQ3RCLGNBQUksQ0FBQ1IsS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixjQUF2QixFQUF1QyxLQUF2QztBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1AsVUFBSUcsS0FBSyxHQUFHLEtBQUtULEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkssR0FBbkIsQ0FBdUIsT0FBdkIsQ0FBWjs7QUFDQSxVQUFJRCxLQUFLLENBQUNFLEtBQVYsRUFBaUI7QUFDZkYsUUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsS0FBZDtBQUNBQyxRQUFBQSxLQUFLLENBQUMsS0FBS1osS0FBTCxDQUFXYSxhQUFYLENBQXlCQyxLQUF6QixDQUErQkMsa0JBQS9CLEdBQW9ELEdBQXBELEdBQTBETixLQUFLLENBQUNPLE9BQWpFLENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLFFBQVE7QUFBQSxpQkFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxT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QUwsQ0FBaUJDLElBQWxDLEVBQXdDO0FBQ3RDSCw4QkFBTUksVUFBTixDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQUNEO0FBQ0Y7QUFDRjs7O0VBaE95QzFIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXNjb3BlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZFNjb3BlSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfTtcbiAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmUgPSB0aGlzLmhpZ2hsaWdodEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgfVxuICBoaWdobGlnaHRGZWF0dXJlICgpIHtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmUuc2V0KFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZmVhdHVyZS5zZXQoXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwb3B1cCA9IHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ3BvcHVwJyk7XG4gICAgaWYgKHBvcHVwLmFzeW5jKSB7XG4gICAgICBwb3B1cC5hc3luYyA9IGZhbHNlO1xuICAgICAgZmV0Y2godGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwLmNvbnRlbnQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5mZWF0dXJlLnNldCgncG9wdXAnLCBkYXRhKTtcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XG4gICAgLy8gbGV0IGZlYXR1cmVHZW9tZXRyeSA9IHRoaXMucHJvcHMuZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIC8vIGlmICh0aGlzLnByb3BzLnVzZXJQb3NpdGlvbiAmJiBmZWF0dXJlR2VvbWV0cnkuZ2V0VHlwZSgpID09PSBcIlBvaW50XCIpIHtcbiAgICAvLyAgIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICAvLyAgICAgICB0aGlzLnByb3BzLnVzZXJQb3NpdGlvbixcbiAgICAvLyAgICAgICBmZWF0dXJlR2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKVxuICAgIC8vICAgXTtcbiAgICAvLyAgIGxldCBsaW5lU3RyaW5nID0gbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMpO1xuICAgIC8vICAgZGlzdGFuY2UgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWxlbWVudC1kaXN0YW5jZVwifT5cbiAgICAvLyAgICAgICB7dGhpcy5wcm9wcy5sYW5nQ29uc3RhbnRzLkRJU1R9OiB7dG9IdW1hbkRpc3RhbmNlKGxpbmVTdHJpbmcuZ2V0TGVuZ3RoKCkpfVxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKSB7XG4gICAgICBkaXN0YW5jZSA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lbGVtZW50LWRpc3RhbmNlXCJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhbmdDb25zdGFudHMuRElTVH06IHt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKX1cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBvbk1vdXNlVXA9e3RoaXMuaGlnaGxpZ2h0RmVhdHVyZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ3BvcHVwJykuY29udGVudH19Lz5cbiAgICAgICAgICAgIHtkaXN0YW5jZX1cbiAgICAgICAgPC9saT5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0NsdXN0ZXJ9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7U3RhcmJvYXJkU2NvcGVJdGVtfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXNjb3BlLWl0ZW0uanN4XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtHZW9sb2NhdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0xpbmVTdHJpbmd9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge3RvTG9uTGF0fSBmcm9tICdvbC9wcm9qJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRTY29wZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgdGhpcy5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgIC8vc3BlY2lmaWMgY29kZSBmb3IgdGhlIGNvbnRyb2xcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuYmFzZWxheWVyU3dpdGNoZXIgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuXG4gICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUgPSB0aGlzLmdldEZlYXR1cmVzSW5TY29wZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmlldyA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgdGhpcy52ZWN0b3JTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2UuZ2V0U291cmNlKCk6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2U7XG4gICAgdGhpcy52aWV3Lm9uKCdjaGFuZ2UnLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpXG4gICAgfSk7XG4gICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKChsb2wpPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkc2NvcGUtcGFuZWxcIixcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBmZWF0dXJlczogW11cbiAgICB9O1xuICB9XG5cbiAgZ2V0RmVhdHVyZXNJblNjb3BlICgpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gRGF0ZS5ub3coKTsgLy9nZXQgdGltZXN0YW1wIHRvIHRyaWdnZXIgZXZlbnQgb25seSBldmVyeSBmb3VydGggb2YgYSBzZWNvbmRcbiAgICBjb25zdCBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGNvbnN0IGxheWVyQ29udHJvbGxlciA9IG1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLl9pc01vdW50ZWQgJiYgdGltZXN0YW1wID4gdGhpcy5sYXN0VGltZSArIDI1MCkge1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgIGxldCBleHRlbnQgPSB0aGlzLnZpZXcuY2FsY3VsYXRlRXh0ZW50KCk7XG4gICAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnZlY3RvclNvdXJjZS5nZXRGZWF0dXJlc0luRXh0ZW50KGV4dGVudCk7XG4gICAgICBmb3IgKGxldCBpIGluIGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzKSB7XG4gICAgICAgIGlmIChsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGxldCBzaW5nbGVTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlc1tpXSBpbnN0YW5jZW9mIENsdXN0ZXIgPyBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlc1tpXS5nZXRTb3VyY2UoKSA6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2VzW2ldO1xuICAgICAgICAgIGxldCBzaW5nbGVGZWF0dXJlcyA9IHNpbmdsZVNvdXJjZS5nZXRGZWF0dXJlc0luRXh0ZW50KGV4dGVudCk7XG4gICAgICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcy5jb25jYXQoc2luZ2xlRmVhdHVyZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZmVhdHVyZXNTb3J0ZWQgPSB0aGlzLnNvcnRGZWF0dXJlcyhmZWF0dXJlcyk7XG4gICAgICBpZiAoIWZlYXR1cmVzU29ydGVkKSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT57dGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKX0sIDIwMCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0RGlzdGFuY2UgKHBvaW50MSwgcG9pbnQyKVxuICB7XG4gICAgY29uc3QgUiA9IDYzNzE7IC8vIGttXG4gICAgbGV0IGRMYXQgPSB0aGlzLnRvUmFkKHBvaW50MlswXS1wb2ludDFbMF0pO1xuICAgIGxldCBkTG9uID0gdGhpcy50b1JhZChwb2ludDJbMV0tcG9pbnQxWzFdKTtcbiAgICBsZXQgbGF0MSA9IHRoaXMudG9SYWQocG9pbnQxWzBdKTtcbiAgICBsZXQgbGF0MiA9IHRoaXMudG9SYWQocG9pbnQyWzBdKTtcbiAgICBsZXQgYSA9IE1hdGguc2luKGRMYXQvMikgKiBNYXRoLnNpbihkTGF0LzIpICtcbiAgICAgICAgTWF0aC5zaW4oZExvbi8yKSAqIE1hdGguc2luKGRMb24vMikgKiBNYXRoLmNvcyhsYXQxKSAqIE1hdGguY29zKGxhdDIpO1xuICAgIGxldCBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMS1hKSk7XG4gICAgbGV0IGQgPSBSICogYztcbiAgICByZXR1cm4gZCAqIDEwMDA7XG4gIH1cblxuICB0b1JhZCAodmFsdWUpXG4gIHtcbiAgICByZXR1cm4gdmFsdWUgKiBNYXRoLlBJIC8gMTgwO1xuICB9XG4gIHNvcnRGZWF0dXJlcyAoZmVhdHVyZXMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWF0cml4S2V5KSB7XG4gICAgICAgIGxldCBvYmpNaXNzRGlzdCA9IFtdO1xuICAgICAgICBsZXQgYXJyTG9jYXRpb25zID0gW107XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpO1xuICAgICAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGFyckxvY2F0aW9ucy5wdXNoKHRvTG9uTGF0KHBvc2l0aW9uKSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZmVhdHVyZXMpIHtcbiAgICAgICAgICBpZiAoZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgIWZlYXR1cmVzW2ldLmdldCgnZGlzdGFuY2VNYXRyaXgnKSkge1xuICAgICAgICAgICAgb2JqTWlzc0Rpc3QucHVzaChmZWF0dXJlc1tpXSk7XG4gICAgICAgICAgICBhcnJMb2NhdGlvbnMucHVzaCh0b0xvbkxhdChmZWF0dXJlc1tpXS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyckxvY2F0aW9ucy5sZW5ndGggPiAyICYmICF0aGlzLnByZXZlbnRBZGRSZXFzKSB7XG4gICAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByb3h5VXJsICsgJ21hdHJpeC5waHA/bGFuZ3VhZ2U9ZGUmcHJvZmlsZT1hdXRvJmtleT0nICsgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubWF0cml4S2V5O1xuICAgICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe2xvY2F0aW9uczogYXJyTG9jYXRpb25zfSk7XG4gICAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICAgIHNjb3BlLnByZXZlbnRBZGRSZXFzID0gdHJ1ZTtcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogYm9keVxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzY29wZS5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGpzb25EYXRhKSB7XG4gICAgICAgICAgICAgIGxldCBkaXN0YW5jZXMgPSBqc29uRGF0YS5zb3VyY2VzX3RvX3RhcmdldHNbMF07XG4gICAgICAgICAgICAgIGZvcihsZXQgaSBpbiBkaXN0YW5jZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzLmhhc093blByb3BlcnR5KGkpICYmIG9iak1pc3NEaXN0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICBvYmpNaXNzRGlzdFtpXS5zZXQoJ2Rpc3RhbmNlTWF0cml4JywgZGlzdGFuY2VzW2ldLmRpc3RhbmNlICogMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNjb3BlLnNvcnRGZWF0dXJlcyhzY29wZS5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgIHNjb3BlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLmdldFBvc2l0aW9uKCk7XG4gICAgICBmZWF0dXJlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2VBID0gMDtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZUIgPSAwO1xuICAgICAgICAgICAgaWYgKGEuZ2V0KCdkaXN0YW5jZU1hdHJpeCcpIHx8IGEuZ2V0KCdkaXN0YW5jZScpKSB7XG4gICAgICAgICAgICAgIGRpc3RhbmNlQSA9IGEuZ2V0KCdkaXN0YW5jZU1hdHJpeCcpfHwgYS5nZXQoJ2Rpc3RhbmNlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZUdlb21ldHJ5ID0gYS5nZXRHZW9tZXRyeSgpO1xuICAgICAgICAgICAgICBkaXN0YW5jZUEgPSB0aGlzLmdldERpc3RhbmNlKHRvTG9uTGF0KHBvc2l0aW9uKSwgdG9Mb25MYXQoZmVhdHVyZUdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCkpKTtcbiAgICAgICAgICAgICAgYS5zZXQoJ2Rpc3RhbmNlJywgZGlzdGFuY2VBKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCBiLmdldCgnZGlzdGFuY2UnKSkge1xuICAgICAgICAgICAgICBkaXN0YW5jZUIgPSBiLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCBiLmdldCgnZGlzdGFuY2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBmZWF0dXJlR2VvbWV0cnkgPSBiLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICAgIGRpc3RhbmNlQiA9IHRoaXMuZ2V0RGlzdGFuY2UodG9Mb25MYXQocG9zaXRpb24pLCB0b0xvbkxhdChmZWF0dXJlR2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSkpO1xuICAgICAgICAgICAgICBiLnNldCgnZGlzdGFuY2UnLCBkaXN0YW5jZUIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlQSAtIGRpc3RhbmNlQjtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkc2NvcGUtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctc3RhcmJvYXJkc2NvcGUtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX1dSQVBQRVJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1zdGFyYm9hcmRzY29wZS1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRX0gY2xvc2VCdG5DbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfS8+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmRzY29wZS1jb250ZW50LWNvbnRhaW5lclwifT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA8IDIwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxTdGFyYm9hcmRTY29wZUl0ZW0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBsYW5nQ29uc3RhbnRzPXt0aGlzLmxhbmdDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0ga2V5PXtpbmRleH0gZmVhdHVyZT17ZmVhdHVyZX0vPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB7XG4gICAgICBsZXQgZXZ0ID0ge307XG4gICAgICBldnQudGFyZ2V0ID0gdGhpcy52aWV3O1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRUcmFja2luZygpKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uc2V0VHJhY2tpbmcodHJ1ZSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiU3RhcmJvYXJkU2NvcGVJdGVtIiwicHJvcHMiLCJzY29wZSIsInN0YXRlIiwiaGlnaGxpZ2h0RmVhdHVyZSIsImJpbmQiLCJmZWF0dXJlIiwic2V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsInBvcHVwIiwiZ2V0IiwiYXN5bmMiLCJmZXRjaCIsIm1hcENvbnRyb2xsZXIiLCJwcm94eSIsImFwaV9pbmZvd2luZG93X3VybCIsImNvbnRlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRpc3RhbmNlIiwibGFuZ0NvbnN0YW50cyIsIkRJU1QiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJUaXRsZWJhciIsIlJlYWN0IiwibGF6eSIsIlN0YXJib2FyZFNjb3BlIiwibGFzdFRpbWUiLCJJbmZpbml0eSIsInByZXZlbnRBZGRSZXFzIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiRUxFTUVOVFNfU0NPUEUiLCJjbGFzc05hbWUiLCJvcGVuIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50IiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiYmFzZWxheWVyU3dpdGNoZXIiLCJtYXAiLCJhZGRDb250cm9sIiwiZ2V0RmVhdHVyZXNJblNjb3BlIiwidmlldyIsImdldFZpZXciLCJsYXllckNvbnRyb2xsZXIiLCJ2ZWN0b3JTb3VyY2UiLCJDbHVzdGVyIiwiZ2V0U291cmNlIiwiZXZ0IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicHVzaCIsImxvbCIsImZlYXR1cmVzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIl9pc01vdW50ZWQiLCJleHRlbnQiLCJjYWxjdWxhdGVFeHRlbnQiLCJnZXRGZWF0dXJlc0luRXh0ZW50IiwiaSIsInZlY3RvclNvdXJjZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInNpbmdsZVNvdXJjZSIsInNpbmdsZUZlYXR1cmVzIiwiY29uY2F0IiwiZmVhdHVyZXNTb3J0ZWQiLCJzb3J0RmVhdHVyZXMiLCJzZXRTdGF0ZSIsInBvaW50MSIsInBvaW50MiIsIlIiLCJkTGF0IiwidG9SYWQiLCJkTG9uIiwibGF0MSIsImxhdDIiLCJhIiwiTWF0aCIsInNpbiIsImNvcyIsImMiLCJhdGFuMiIsInNxcnQiLCJkIiwidmFsdWUiLCJQSSIsImdlb2xvY2F0aW9uIiwibWF0cml4S2V5Iiwib2JqTWlzc0Rpc3QiLCJhcnJMb2NhdGlvbnMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImxlbmd0aCIsInVybCIsInByb3h5VXJsIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImpzb25EYXRhIiwiZGlzdGFuY2VzIiwic291cmNlc190b190YXJnZXRzIiwiZm9yY2VVcGRhdGUiLCJzb3J0IiwiYiIsImRpc3RhbmNlQSIsImRpc3RhbmNlQiIsImZlYXR1cmVHZW9tZXRyeSIsImdldERpc3RhbmNlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzc0NvbnN0YW50cyIsIlNUQVJCT0FSRF9XUkFQUEVSIiwiQ0xPU0UiLCJpbmRleCIsInNldE9wZW5Db21wb25lbnQiLCJnZXRUcmFja2luZyIsInNldFRyYWNraW5nIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJjYWNoaW5nIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=