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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctc3RhcmJvYXJkLXNjb3BlX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVhQTs7Ozs7RUFFWCw0QkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBQ0EsSUFBTUMsS0FBSyxpREFBWDtJQUNBLE1BQUtDLEtBQUwsR0FBYSxFQUFiO0lBRUEsTUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLGdEQUF4QjtJQUxpQjtFQU1sQjs7OztXQUNELDRCQUFvQjtNQUFBOztNQUNsQixLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLGNBQXZCLEVBQXVDLElBQXZDO01BQ0FDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO1FBQ3RCLE1BQUksQ0FBQ1IsS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixjQUF2QixFQUF1QyxLQUF2QztNQUNELENBRkQsRUFFRyxJQUZIO0lBR0Q7OztXQUVELGtCQUFTO01BQUE7O01BQ1AsSUFBSUcsS0FBSyxHQUFHLEtBQUtULEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkssR0FBbkIsQ0FBdUIsT0FBdkIsQ0FBWjs7TUFDQSxJQUFJRCxLQUFLLENBQUNFLEtBQVYsRUFBaUI7UUFDZkYsS0FBSyxDQUFDRSxLQUFOLEdBQWMsS0FBZDtRQUNBQyxLQUFLLENBQUMsS0FBS1osS0FBTCxDQUFXYSxhQUFYLENBQXlCQyxLQUF6QixDQUErQkMsa0JBQS9CLEdBQW9ELEdBQXBELEdBQTBETixLQUFLLENBQUNPLE9BQWpFLENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLFFBQVE7VUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtRQUFBLENBRGhCLEVBRUdGLElBRkgsQ0FF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UUFDQSxNQUFJLENBQUNELGtCQUFMO01BQ0QsQ0FKRDtNQUtBLEtBQUt4RCxLQUFMLENBQVdhLGFBQVgsQ0FBeUI2SCxnQkFBekIsQ0FBMEMsSUFBMUM7SUFDRDs7O1dBRUQsaUJBQVE7TUFDTixLQUFLdEQsUUFBTCxDQUFjO1FBQUMxQyxJQUFJLEVBQUU7TUFBUCxDQUFkO0lBQ0Q7OztXQUNELDZCQUFvQjtNQUNsQixLQUFLOEIsVUFBTCxHQUFrQixJQUFsQjs7TUFDQSxJQUFJLENBQUMsS0FBS3hFLEtBQUwsQ0FBV2EsYUFBWCxDQUF5QjBGLFdBQXpCLENBQXFDb0MsV0FBckMsRUFBTCxFQUF5RDtRQUN2RCxLQUFLM0ksS0FBTCxDQUFXYSxhQUFYLENBQXlCMEYsV0FBekIsQ0FBcUNxQyxXQUFyQyxDQUFpRCxJQUFqRDtNQUNEO0lBQ0Y7OztXQUNELGdDQUF1QjtNQUNyQixLQUFLcEUsVUFBTCxHQUFrQixLQUFsQjtJQUNEOzs7V0FFRCw0QkFBbUJxRSxTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO01BQ2pELElBQUksS0FBSy9JLEtBQUwsQ0FBV2EsYUFBWCxDQUF5Qk8sSUFBekIsQ0FBOEI0SCxPQUE5QixJQUF5QyxDQUFDLEtBQUs5SSxLQUFMLENBQVd3QyxJQUF6RCxFQUErRDtRQUM3RCxJQUFJdUcsUUFBUSxHQUFHQyxtQkFBQSxDQUFNQyxRQUFOLENBQWUsT0FBZixDQUFmOztRQUNBLElBQUlGLFFBQVEsS0FBSyxLQUFLRyxXQUFMLENBQWlCQyxJQUFsQyxFQUF3QztVQUN0Q0gsbUJBQUEsQ0FBTUksVUFBTixDQUFpQixPQUFqQixFQUEwQixFQUExQjtRQUNEO01BQ0Y7SUFDRjs7O0VBaE95QzVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1zY29wZS1pdGVtLmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctc3RhcmJvYXJkLXNjb3BlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBTdXNwZW5zZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7dG9IdW1hbkRpc3RhbmNlfSBmcm9tIFwiLi8uLi9jNGctcm91dGVyLXRpbWUtY29udmVyc2lvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZFNjb3BlSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfTtcbiAgICB0aGlzLmhpZ2hsaWdodEZlYXR1cmUgPSB0aGlzLmhpZ2hsaWdodEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgfVxuICBoaWdobGlnaHRGZWF0dXJlICgpIHtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmUuc2V0KFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZmVhdHVyZS5zZXQoXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwb3B1cCA9IHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ3BvcHVwJyk7XG4gICAgaWYgKHBvcHVwLmFzeW5jKSB7XG4gICAgICBwb3B1cC5hc3luYyA9IGZhbHNlO1xuICAgICAgZmV0Y2godGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwLmNvbnRlbnQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5mZWF0dXJlLnNldCgncG9wdXAnLCBkYXRhKTtcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNpbmdsZUZlYXR1cmUodGhpcy5wcm9wcy5mZWF0dXJlLCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XG4gICAgLy8gbGV0IGZlYXR1cmVHZW9tZXRyeSA9IHRoaXMucHJvcHMuZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xuICAgIC8vIGlmICh0aGlzLnByb3BzLnVzZXJQb3NpdGlvbiAmJiBmZWF0dXJlR2VvbWV0cnkuZ2V0VHlwZSgpID09PSBcIlBvaW50XCIpIHtcbiAgICAvLyAgIGxldCBjb29yZGluYXRlcyA9IFtcbiAgICAvLyAgICAgICB0aGlzLnByb3BzLnVzZXJQb3NpdGlvbixcbiAgICAvLyAgICAgICBmZWF0dXJlR2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKVxuICAgIC8vICAgXTtcbiAgICAvLyAgIGxldCBsaW5lU3RyaW5nID0gbmV3IExpbmVTdHJpbmcoY29vcmRpbmF0ZXMpO1xuICAgIC8vICAgZGlzdGFuY2UgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWxlbWVudC1kaXN0YW5jZVwifT5cbiAgICAvLyAgICAgICB7dGhpcy5wcm9wcy5sYW5nQ29uc3RhbnRzLkRJU1R9OiB7dG9IdW1hbkRpc3RhbmNlKGxpbmVTdHJpbmcuZ2V0TGVuZ3RoKCkpfVxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKSB7XG4gICAgICBkaXN0YW5jZSA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lbGVtZW50LWRpc3RhbmNlXCJ9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhbmdDb25zdGFudHMuRElTVH06IHt0b0h1bWFuRGlzdGFuY2UodGhpcy5wcm9wcy5mZWF0dXJlLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCB0aGlzLnByb3BzLmZlYXR1cmUuZ2V0KCdkaXN0YW5jZScpKX1cbiAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBvbk1vdXNlVXA9e3RoaXMuaGlnaGxpZ2h0RmVhdHVyZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLXBvcHVwLXdyYXBwZXJcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuZmVhdHVyZS5nZXQoJ3BvcHVwJykuY29udGVudH19Lz5cbiAgICAgICAgICAgIHtkaXN0YW5jZX1cbiAgICAgICAgPC9saT5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0NsdXN0ZXJ9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7U3RhcmJvYXJkU2NvcGVJdGVtfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXNjb3BlLWl0ZW0uanN4XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5jb25zdCBUaXRsZWJhciA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctdGl0bGViYXIuanN4XCIpKTtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtHZW9sb2NhdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0xpbmVTdHJpbmd9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge3RvTG9uTGF0fSBmcm9tICdvbC9wcm9qJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRTY29wZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHRoaXMubGFzdFRpbWUgPSAtSW5maW5pdHk7XG4gICAgdGhpcy5wcmV2ZW50QWRkUmVxcyA9IGZhbHNlO1xuICAgIC8vc3BlY2lmaWMgY29kZSBmb3IgdGhlIGNvbnRyb2xcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5FTEVNRU5UU19TQ09QRTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuYmFzZWxheWVyU3dpdGNoZXIgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuXG4gICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUgPSB0aGlzLmdldEZlYXR1cmVzSW5TY29wZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmlldyA9IHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgdGhpcy52ZWN0b3JTb3VyY2UgPSBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlIGluc3RhbmNlb2YgQ2x1c3RlciA/IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2UuZ2V0U291cmNlKCk6IGxheWVyQ29udHJvbGxlci52ZWN0b3JTb3VyY2U7XG4gICAgdGhpcy52aWV3Lm9uKCdjaGFuZ2UnLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLmdldEZlYXR1cmVzSW5TY29wZSgpXG4gICAgfSk7XG4gICAgd2luZG93LmM0Z01hcHNIb29rcy5sYXllcl9sb2FkZWQgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZCB8fCBbXTtcbiAgICB3aW5kb3cuYzRnTWFwc0hvb2tzLmxheWVyX2xvYWRlZC5wdXNoKChsb2wpPT4ge1xuICAgICAgdGhpcy5nZXRGZWF0dXJlc0luU2NvcGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIHx8IFwiYzRnLXN0YXJib2FyZHNjb3BlLXBhbmVsXCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgZmVhdHVyZXM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGdldEZlYXR1cmVzSW5TY29wZSAoKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7IC8vZ2V0IHRpbWVzdGFtcCB0byB0cmlnZ2VyIGV2ZW50IG9ubHkgZXZlcnkgZm91cnRoIG9mIGEgc2Vjb25kXG4gICAgY29uc3QgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBjb25zdCBsYXllckNvbnRyb2xsZXIgPSBtYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcblxuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5faXNNb3VudGVkICYmIHRpbWVzdGFtcCA+IHRoaXMubGFzdFRpbWUgKyAyNTApIHtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICBsZXQgZXh0ZW50ID0gdGhpcy52aWV3LmNhbGN1bGF0ZUV4dGVudCgpO1xuICAgICAgbGV0IGZlYXR1cmVzID0gdGhpcy52ZWN0b3JTb3VyY2UuZ2V0RmVhdHVyZXNJbkV4dGVudChleHRlbnQpO1xuICAgICAgZm9yIChsZXQgaSBpbiBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlcykge1xuICAgICAgICBpZiAobGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBsZXQgc2luZ2xlU291cmNlID0gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV0gaW5zdGFuY2VvZiBDbHVzdGVyID8gbGF5ZXJDb250cm9sbGVyLnZlY3RvclNvdXJjZXNbaV0uZ2V0U291cmNlKCkgOiBsYXllckNvbnRyb2xsZXIudmVjdG9yU291cmNlc1tpXTtcbiAgICAgICAgICBsZXQgc2luZ2xlRmVhdHVyZXMgPSBzaW5nbGVTb3VyY2UuZ2V0RmVhdHVyZXNJbkV4dGVudChleHRlbnQpO1xuICAgICAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMuY29uY2F0KHNpbmdsZUZlYXR1cmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGZlYXR1cmVzU29ydGVkID0gdGhpcy5zb3J0RmVhdHVyZXMoZmVhdHVyZXMpO1xuICAgICAgaWYgKCFmZWF0dXJlc1NvcnRlZCkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gLUluZmluaXR5O1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e3RoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCl9LCAyMDApO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldERpc3RhbmNlIChwb2ludDEsIHBvaW50MilcbiAge1xuICAgIGNvbnN0IFIgPSA2MzcxOyAvLyBrbVxuICAgIGxldCBkTGF0ID0gdGhpcy50b1JhZChwb2ludDJbMF0tcG9pbnQxWzBdKTtcbiAgICBsZXQgZExvbiA9IHRoaXMudG9SYWQocG9pbnQyWzFdLXBvaW50MVsxXSk7XG4gICAgbGV0IGxhdDEgPSB0aGlzLnRvUmFkKHBvaW50MVswXSk7XG4gICAgbGV0IGxhdDIgPSB0aGlzLnRvUmFkKHBvaW50MlswXSk7XG4gICAgbGV0IGEgPSBNYXRoLnNpbihkTGF0LzIpICogTWF0aC5zaW4oZExhdC8yKSArXG4gICAgICAgIE1hdGguc2luKGRMb24vMikgKiBNYXRoLnNpbihkTG9uLzIpICogTWF0aC5jb3MobGF0MSkgKiBNYXRoLmNvcyhsYXQyKTtcbiAgICBsZXQgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEtYSkpO1xuICAgIGxldCBkID0gUiAqIGM7XG4gICAgcmV0dXJuIGQgKiAxMDAwO1xuICB9XG5cbiAgdG9SYWQgKHZhbHVlKVxuICB7XG4gICAgcmV0dXJuIHZhbHVlICogTWF0aC5QSSAvIDE4MDtcbiAgfVxuICBzb3J0RmVhdHVyZXMgKGZlYXR1cmVzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1hdHJpeEtleSkge1xuICAgICAgICBsZXQgb2JqTWlzc0Rpc3QgPSBbXTtcbiAgICAgICAgbGV0IGFyckxvY2F0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgaWYgKCFwb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBhcnJMb2NhdGlvbnMucHVzaCh0b0xvbkxhdChwb3NpdGlvbikpO1xuICAgICAgICBmb3IgKGxldCBpIGluIGZlYXR1cmVzKSB7XG4gICAgICAgICAgaWYgKGZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpICYmICFmZWF0dXJlc1tpXS5nZXQoJ2Rpc3RhbmNlTWF0cml4JykpIHtcbiAgICAgICAgICAgIG9iak1pc3NEaXN0LnB1c2goZmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgYXJyTG9jYXRpb25zLnB1c2godG9Mb25MYXQoZmVhdHVyZXNbaV0uZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJMb2NhdGlvbnMubGVuZ3RoID4gMiAmJiAhdGhpcy5wcmV2ZW50QWRkUmVxcykge1xuICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm94eVVybCArICdtYXRyaXgucGhwP2xhbmd1YWdlPWRlJnByb2ZpbGU9YXV0byZrZXk9JyArIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLm1hdHJpeEtleTtcbiAgICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtsb2NhdGlvbnM6IGFyckxvY2F0aW9uc30pO1xuICAgICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgICBzY29wZS5wcmV2ZW50QWRkUmVxcyA9IHRydWU7XG4gICAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGJvZHlcbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgc2NvcGUucHJldmVudEFkZFJlcXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihmdW5jdGlvbihqc29uRGF0YSkge1xuICAgICAgICAgICAgICBsZXQgZGlzdGFuY2VzID0ganNvbkRhdGEuc291cmNlc190b190YXJnZXRzWzBdO1xuICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gZGlzdGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiBvYmpNaXNzRGlzdC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgb2JqTWlzc0Rpc3RbaV0uc2V0KCdkaXN0YW5jZU1hdHJpeCcsIGRpc3RhbmNlc1tpXS5kaXN0YW5jZSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzY29wZS5zb3J0RmVhdHVyZXMoc2NvcGUuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICBzY29wZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5nZW9sb2NhdGlvbi5nZXRQb3NpdGlvbigpO1xuICAgICAgZmVhdHVyZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlQSA9IDA7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2VCID0gMDtcbiAgICAgICAgICAgIGlmIChhLmdldCgnZGlzdGFuY2VNYXRyaXgnKSB8fCBhLmdldCgnZGlzdGFuY2UnKSkge1xuICAgICAgICAgICAgICBkaXN0YW5jZUEgPSBhLmdldCgnZGlzdGFuY2VNYXRyaXgnKXx8IGEuZ2V0KCdkaXN0YW5jZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGZlYXR1cmVHZW9tZXRyeSA9IGEuZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgICAgICAgZGlzdGFuY2VBID0gdGhpcy5nZXREaXN0YW5jZSh0b0xvbkxhdChwb3NpdGlvbiksIHRvTG9uTGF0KGZlYXR1cmVHZW9tZXRyeS5nZXRDb29yZGluYXRlcygpKSk7XG4gICAgICAgICAgICAgIGEuc2V0KCdkaXN0YW5jZScsIGRpc3RhbmNlQSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYi5nZXQoJ2Rpc3RhbmNlTWF0cml4JykgfHwgYi5nZXQoJ2Rpc3RhbmNlJykpIHtcbiAgICAgICAgICAgICAgZGlzdGFuY2VCID0gYi5nZXQoJ2Rpc3RhbmNlTWF0cml4JykgfHwgYi5nZXQoJ2Rpc3RhbmNlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgZmVhdHVyZUdlb21ldHJ5ID0gYi5nZXRHZW9tZXRyeSgpO1xuICAgICAgICAgICAgICBkaXN0YW5jZUIgPSB0aGlzLmdldERpc3RhbmNlKHRvTG9uTGF0KHBvc2l0aW9uKSwgdG9Mb25MYXQoZmVhdHVyZUdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCkpKTtcbiAgICAgICAgICAgICAgYi5zZXQoJ2Rpc3RhbmNlJywgZGlzdGFuY2VCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZUEgLSBkaXN0YW5jZUI7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZHNjb3BlLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkc2NvcGUtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuRUxFTUVOVFNfU0NPUEV9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXN0YXJib2FyZHNjb3BlLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0vPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkc2NvcGUtY29udGVudC1jb250YWluZXJcIn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPCAyMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8U3RhcmJvYXJkU2NvcGVJdGVtIG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZ0NvbnN0YW50cz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IGtleT17aW5kZXh9IGZlYXR1cmU9e2ZlYXR1cmV9Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4ge1xuICAgICAgbGV0IGV2dCA9IHt9O1xuICAgICAgZXZ0LnRhcmdldCA9IHRoaXMudmlldztcbiAgICAgIHRoaXMuZ2V0RmVhdHVyZXNJblNjb3BlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZ2VvbG9jYXRpb24uZ2V0VHJhY2tpbmcoKSkge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmdlb2xvY2F0aW9uLnNldFRyYWNraW5nKHRydWUpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlN0YXJib2FyZFNjb3BlSXRlbSIsInByb3BzIiwic2NvcGUiLCJzdGF0ZSIsImhpZ2hsaWdodEZlYXR1cmUiLCJiaW5kIiwiZmVhdHVyZSIsInNldCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJwb3B1cCIsImdldCIsImFzeW5jIiwiZmV0Y2giLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJhcGlfaW5mb3dpbmRvd191cmwiLCJjb250ZW50IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkaXN0YW5jZSIsImxhbmdDb25zdGFudHMiLCJESVNUIiwidG9IdW1hbkRpc3RhbmNlIiwiX19odG1sIiwiQ29tcG9uZW50IiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJTdGFyYm9hcmRTY29wZSIsImxhc3RUaW1lIiwiSW5maW5pdHkiLCJwcmV2ZW50QWRkUmVxcyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJnZXRMYW5ndWFnZSIsInRpdGxlIiwiRUxFTUVOVFNfU0NPUEUiLCJjbGFzc05hbWUiLCJvcGVuIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50IiwiY2xvc2UiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiYmFzZWxheWVyU3dpdGNoZXIiLCJtYXAiLCJhZGRDb250cm9sIiwiZ2V0RmVhdHVyZXNJblNjb3BlIiwidmlldyIsImdldFZpZXciLCJsYXllckNvbnRyb2xsZXIiLCJ2ZWN0b3JTb3VyY2UiLCJDbHVzdGVyIiwiZ2V0U291cmNlIiwiZXZ0IiwiYzRnTWFwc0hvb2tzIiwibGF5ZXJfbG9hZGVkIiwicHVzaCIsImxvbCIsImZlYXR1cmVzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIl9pc01vdW50ZWQiLCJleHRlbnQiLCJjYWxjdWxhdGVFeHRlbnQiLCJnZXRGZWF0dXJlc0luRXh0ZW50IiwiaSIsInZlY3RvclNvdXJjZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInNpbmdsZVNvdXJjZSIsInNpbmdsZUZlYXR1cmVzIiwiY29uY2F0IiwiZmVhdHVyZXNTb3J0ZWQiLCJzb3J0RmVhdHVyZXMiLCJzZXRTdGF0ZSIsInBvaW50MSIsInBvaW50MiIsIlIiLCJkTGF0IiwidG9SYWQiLCJkTG9uIiwibGF0MSIsImxhdDIiLCJhIiwiTWF0aCIsInNpbiIsImNvcyIsImMiLCJhdGFuMiIsInNxcnQiLCJkIiwidmFsdWUiLCJQSSIsImdlb2xvY2F0aW9uIiwibWF0cml4S2V5Iiwib2JqTWlzc0Rpc3QiLCJhcnJMb2NhdGlvbnMiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwidG9Mb25MYXQiLCJnZXRHZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwibGVuZ3RoIiwidXJsIiwicHJveHlVcmwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2F0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwianNvbkRhdGEiLCJkaXN0YW5jZXMiLCJzb3VyY2VzX3RvX3RhcmdldHMiLCJmb3JjZVVwZGF0ZSIsInNvcnQiLCJiIiwiZGlzdGFuY2VBIiwiZGlzdGFuY2VCIiwiZmVhdHVyZUdlb21ldHJ5IiwiZ2V0RGlzdGFuY2UiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3NzQ29uc3RhbnRzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJDTE9TRSIsImluZGV4Iiwic2V0T3BlbkNvbXBvbmVudCIsImdldFRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdG9yZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==