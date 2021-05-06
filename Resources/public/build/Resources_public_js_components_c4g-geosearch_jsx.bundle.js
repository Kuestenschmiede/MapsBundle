(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-geosearch_jsx"],{

/***/ "./Resources/public/js/components/c4g-geosearch-results.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-geosearch-results.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GeoSearchResults = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeoSearchResults = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeoSearchResults, _Component);

  var _super = _createSuper(GeoSearchResults);

  function GeoSearchResults(props) {
    (0, _classCallCheck2["default"])(this, GeoSearchResults);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(GeoSearchResults, [{
    key: "render",
    value: function render() {
      var scope = this;
      var resultContainer = "";
      var firstResult = "";
      var detailBtnClass = "";
      var detailBtnCb = "";
      var closeBtnClass = "c4g-titlebar-close";
      var closeBtnCb = this.props.closeCb;
      resultContainer = /*#__PURE__*/_react["default"].createElement("ul", {
        id: "resultcontainer"
      }, this.props.results.map(function (element, index) {
        var buttonClass = "searchResultButton";

        if (element === scope.props.currentResult) {
          buttonClass += " c4g-active";
        }

        return /*#__PURE__*/_react["default"].createElement("li", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          id: index,
          className: buttonClass,
          name: element,
          onMouseUp: function onMouseUp() {
            return scope.props.zoomFunc(index);
          }
        }, element));
      }));

      if (this.props.resultsDiv) {
        return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content c4g-external " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer)), this.props.resultsDiv);
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-geosearch-results-content " + this.props.className + " c4g-beach"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-beach-content"
        }, resultContainer));
      }
    }
  }]);
  return GeoSearchResults;
}(_react.Component);

exports.GeoSearchResults = GeoSearchResults;

/***/ }),

/***/ "./Resources/public/js/components/c4g-geosearch.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-geosearch.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gGeosearchResults = __webpack_require__(/*! ./c4g-geosearch-results.jsx */ "./Resources/public/js/components/c4g-geosearch-results.jsx");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _easing = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _render = __webpack_require__(/*! ol/render */ "./node_modules/ol/render.js");

var _Observable = __webpack_require__(/*! ol/Observable */ "./node_modules/ol/Observable.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar */ "./Resources/public/js/components/c4g-titlebar.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GeoSearch = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeoSearch, _Component);

  var _super = _createSuper(GeoSearch);

  function GeoSearch(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoSearch);
    _this = _super.call(this, props);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data); // control
    // if (this.props.collapsed) {

    _this.clickControl = _this.clickControl.bind((0, _assertThisInitialized2["default"])(_this));
    _this.doneFunction = _this.doneFunction.bind((0, _assertThisInitialized2["default"])(_this));
    var element = document.createElement('div');
    var button = document.createElement('button');
    button.setAttribute('aria-label', _this.langConstants.CTRL_GEOSEARCH);
    button.setAttribute('title', _this.langConstants.CTRL_GEOSEARCH);
    element.className = "c4g-geosearch" + " ol-control " + "ol-unselectable";

    if (props.external) {
      element.className += " c4g-external";
    }

    element.appendChild(button);
    jQuery(button).on('click', _this.clickControl);
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    props.mapController.map.addControl(control); // }
    // end control
    // prepare search-configuration
    //

    _this.config = {};

    if (props.mapController.data.geosearch.searchKey && props.mapController.data.geosearch.url) {
      _this.config.url = props.mapController.data.geosearch.url + "search.php";
      _this.config.key = props.mapController.data.geosearch.searchKey;
      _this.config.params = props.mapController.data.geosearch.params;
    } else {
      _this.config.url = props.mapController.data.api.geosearch + "/" + props.mapController.data.profile;
    } // zoomlevel when centering the found location


    _this.config.zoomlevel = props.searchZoom; // zoom to bounds instead of zoomlevel when centering the found location

    _this.config.zoombounds = props.zoomBounds; // quicksearch-option (instantly jump to the first found location)

    _this.config.quicksearch = props.quicksearch || true; // animation (animate flight to targeted location)

    _this.config.animate = props.animate; // highlight the result location

    _this.config.markResult = props.markResult;
    _this.config.animateDuration = props.animateDuration;
    _this.config.resultDuration = props.resultDuration;
    _this.config.popup = props.popup;
    _this.config.autopick = props.autopick;
    _this.config.mapController = props.mapController;
    _this.config.results = props.results;
    _this.config.resultStyle = props.resultStyle;

    if (_this.config.resultStyle && parseInt(_this.config.resultStyle, 10) > 0) {
      var scope = (0, _assertThisInitialized2["default"])(_this); // check if style is loaded, otherwise load it

      if (props.mapController.proxy.locationStyleController.arrLocStyles[_this.config.resultStyle]) {
        _this.config.resultStyle = props.mapController.proxy.locationStyleController.arrLocStyles[_this.config.resultStyle].style;
      } else {
        props.mapController.proxy.locationStyleController.loadLocationStyles([_this.config.resultStyle], {
          done: function done() {
            scope.config.resultStyle = props.mapController.proxy.locationStyleController.arrLocStyles[scope.config.resultStyle].style;
          }
        });
      }
    }

    _this.config.collapsed = props.collapsed;
    _this.config.resultCount = props.resultCount;
    _this.config.caching = props.caching;
    _this.config.placeholder = props.placeholder;
    _this.state = {
      open: !props.collapsed,
      query: "",
      // the search query
      results: [],
      currentCoordinate: [],
      openResults: false,
      // detailOpenResults: false,
      currentResult: null
    };
    _this.inputCallback = _this.inputCallback.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startSearch = _this.startSearch.bind((0, _assertThisInitialized2["default"])(_this));
    _this.zoomTo = _this.zoomTo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeResults = _this.closeResults.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openResults = _this.openResults.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeResultsCompletely = _this.closeResultsCompletely.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(GeoSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var modeClass = this.state.open ? "c4g-open" : "c4g-close";

      if (this.props.extDiv) {
        modeClass += " external ";
      }

      var results = "";

      if (this.state.openResults && this.config.results) {
        results = /*#__PURE__*/_react["default"].createElement(_c4gGeosearchResults.GeoSearchResults, {
          className: modeClass,
          results: this.state.results,
          zoomFunc: function zoomFunc(idx) {
            _this2.setState({
              currentResult: _this2.state.results[idx]
            });

            _this2.zoomTo(idx);
          },
          closeResults: this.closeResults,
          headline: this.props.resultsHeadline,
          currentResult: this.state.currentResult,
          resultsDiv: this.props.resultsDiv,
          open: this.state.results.length > 0,
          openResults: this.openResults,
          closeCb: this.closeResultsCompletely
        });
      }

      var closeBtnClass = "";
      var closeBtnCb = "";

      if (this.config.collapsed) {
        closeBtnClass = "c4g-titlebar-close";
        closeBtnCb = this.close;
      }

      var headline = this.props.headline;

      if (!headline) {
        headline = this.langConstants.GEOSEARCH;
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.GEOSEARCH_WRAPPER + " " + modeClass + " c4g-horizon"
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-geosearch-header",
        header: headline,
        headerClass: "c4g-geosearch-headline",
        detailBtnClass: "",
        detailBtnCb: "",
        closeBtnClass: closeBtnClass,
        closeBtnCb: closeBtnCb,
        closeBtnTitle: this.langConstants.CLOSE
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-geosearch-filter"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onKeyDown: this.inputCallback,
        id: "c4g-geosearch-input",
        placeholder: this.config.placeholder,
        "aria-label": this.config.placeholder
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.GEOSEARCH_START,
        type: "button",
        title: this.langConstants.CTRL_START_SEARCH,
        onMouseUp: this.startSearch
      })), results));
    }
  }, {
    key: "closeResultsCompletely",
    value: function closeResultsCompletely() {
      this.setState({
        openResults: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.open) {
        if (prevState.open !== this.state.open) {
          this.props.mapController.setOpenComponent(this);
        }

        jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open");
      }

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "startSearch",
    value: function startSearch(event) {
      event.stopPropagation();
      var button = document.querySelector(_c4gMapsConstant.cssConstants.GEOSEARCH_START);

      try {
        button.blur();
      } catch (ignore) {}

      var searchInput = jQuery("#c4g-geosearch-input");

      if (searchInput.val()) {
        this.findLocation(searchInput.val());
      }
    }
  }, {
    key: "inputCallback",
    value: function inputCallback(event) {
      event.stopPropagation();

      if (event.which === 13) {
        var searchInput = jQuery("#c4g-geosearch-input");

        if (searchInput.val()) {
          this.findLocation(searchInput.val());
        }

        return false;
      }
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.state.open) {
        this.setState({
          open: false
        });
        jQuery(this.props.mapController.searchContainer).removeClass("c4g-open").addClass("c4g-close");
      } else {
        // this.props.mapController.hideOtherComponents(this);
        this.setState({
          open: true
        });
        jQuery(this.props.mapController.searchContainer).removeClass("c4g-close").addClass("c4g-open");
        this.props.mapController.setOpenComponent(this);
      }
    }
  }, {
    key: "closeResults",
    value: function closeResults() {
      this.setState({
        detailOpenResults: false
      });
    }
  }, {
    key: "openResults",
    value: function openResults() {
      this.setState({
        detailOpenResults: true
      });
    }
  }, {
    key: "findLocation",
    value: function findLocation(location, opt_options) {
      var map, animate, animationDuration, markResult, mapController;
      var scope = this;
      mapController = this.props.mapController;
      map = mapController.map; // show spinner

      mapController.spinner.show();
      animate = this.config.animate;
      animationDuration = this.config.animateDuration;
      markResult = this.config.markResult;

      if ((0, _typeof2["default"])(opt_options) === 'object') {
        if (opt_options.animate !== undefined) {
          animate = opt_options.animate;
        }

        if (opt_options.markResult !== undefined) {
          markResult = opt_options.markResult;
        }
      }

      if (this.config.quicksearch) {
        var data = {
          format: "json",
          q: location
        };

        if (this.config.resultCount) {
          data.limit = this.config.resultCount;
        }

        if (this.config.key) {
          data.key = this.config.key;
        }

        if (this.config.params) {
          for (var param in this.config.params) {
            if (this.config.params.hasOwnProperty(param)) {
              data[param] = this.config.params[param];
            }
          }
        }

        var arrResults = _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_search, [data, this]);

        if (arrResults && arrResults.length > 0) {
          this.config.mapController.spinner.hide();

          for (var i in arrResults) {
            if (arrResults.hasOwnProperty(i)) {
              this.doneFunction(arrResults[i]);
            }
          }
        } else {
          // AJAX -> @nominatim
          jQuery.ajax({
            dataType: "json",
            url: this.config.url,
            data: data
          }).done(this.doneFunction).fail(function () {// @TODO
            // self.resultWrapper.innerHTML = 'ohoh!';
          }).always(function () {
            scope.config.mapController.spinner.hide();
          });
        }
      } else {// @TODO
      }
    }
  }, {
    key: "doneFunction",
    value: function doneFunction(results) {
      var mapView,
          currentCoordinate,
          resultCoordinate,
          coordDif,
          difContext,
          viewExtent,
          result,
          osmExtent,
          resolution,
          zoomType,
          flyTo,
          completeSearch,
          mapController = this.props.mapController,
          map = mapController.map,
          animate = this.config.animate,
          animationDuration = this.config.animateDuration,
          markResult = this.config.markResult;

      if (results && results.length && results.length > 0) {
        mapView = map.getView();

        if (results[0]) {
          result = results[0];
          this.results = results;
          currentCoordinate = mapView.getCenter();
          resultCoordinate = (0, _proj.transform)([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

          if (animate) {
            this.flyTo(map, resultCoordinate, this.config.zoomlevel, this.config.zoombounds, result.bounding_box, markResult, this.config.resultDuration, animate, this.config.animateDuration, map.getView());
          } else {
            this.completeSearch(this.config.markResult, this.config.animate, zoomType, this.config.animateDuration, resultCoordinate, this.config.resultDuration);
            mapView.setCenter(resultCoordinate);

            if (this.config.zoomlevel >= 0) {
              map.getView().setZoom(this.config.zoomlevel);
            }
          }

          var pixel = map.getPixelFromCoordinate(resultCoordinate);
          var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            return feature;
          });
          var layer = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            return layer;
          });

          if (this.config.popup) {
            var popupInfos = {};

            if (feature && feature.get('popup')) {
              // single POI
              popupInfos = feature.get('popup');
            } else if (layer && layer.popup) {
              popupInfos = layer.popup;
            } else {
              feature = false;
            }

            if (feature) {
              var geometry = feature.getGeometry();

              if (geometry instanceof _geom.Point) {
                var coord = geometry.getCoordinates();
              } else {
                var coord = resultCoordinate;
              }

              window.c4gMapsPopup.popup.setPosition(coord);

              if (popupInfos.content) {
                window.c4gMapsPopup.$content.html('');
                window.c4gMapsPopup.popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
                window.c4gMapsPopup.spinner.show();

                if (popupInfos.async === false || popupInfos.async == '0') {
                  var objPopup = {};
                  objPopup.popup = popupInfos;
                  objPopup.feature = feature;
                  objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                  if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                  }

                  this.config.mapController.proxy.setPopup(objPopup);
                } else {
                  jQuery.ajax({
                    dataType: "json",
                    url: this.api_infowindow_url + '/' + popupInfos.content,
                    done: function done(data) {
                      var popupInfo = {
                        async: popupInfos.async,
                        content: data.content,
                        popup: popupInfos.popup,
                        routing_link: popupInfos.routing_link
                      };
                      objPopup = {};
                      objPopup.popup = popupInfo;
                      objPopup.feature = feature;
                      objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                      if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                      }

                      this.setPopup(objPopup);
                    }
                  });
                }
              } else {
                window.c4gMapsPopup.popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
              }
            } else if (window && window.c4gMapsPopup && window.c4gMapsPopup.popup) {
              jQuery(window.c4gMapsPopup.popup).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            }
          }

          if (this.config.autopick && this.config.mapController.geopicker && typeof this.config.mapController.geopicker.pick === 'function') {
            this.config.mapController.geopicker.pick(resultCoordinate);
          }
        } else {
          var langConstants = (0, _c4gMapsI18n.getLanguage)(this.options.mapController.data);
          alert(langConstants.SEARCH_NOT_FOUND);
        }

        if (this.results) {
          var _results = [];

          for (var i = 0; i < this.results.length; i++) {
            _results.push(this.results[i].display_name);
          }

          this.setState({
            results: _results,
            currentCoordinate: currentCoordinate,
            openResults: true,
            currentResult: _results[0]
          });
        }
      }
    }
  }, {
    key: "flyTo",
    value: function flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, resultDuration, animate, animateDuration, mapView) {
      var duration = animateDuration;
      var zoom = zoomlevel;
      var parts = 2;
      var called = false;
      var extent;
      var scope = this;

      function callback(complete) {
        --parts;

        if (called) {
          return;
        }

        if (parts === 0 || !complete) {
          called = true;

          if (zoombounds && boundingbox && boundingbox[0] !== null && boundingbox[1] !== null && boundingbox[2] !== null && boundingbox[3] !== null) {
            // translate osm-extent to ol3-extent
            var osmExtent = [];
            osmExtent.push(parseFloat(boundingbox[2]));
            osmExtent.push(parseFloat(boundingbox[0]));
            osmExtent.push(parseFloat(boundingbox[3]));
            osmExtent.push(parseFloat(boundingbox[1]));
            extent = (0, _proj.transformExtent)(osmExtent, 'EPSG:4326', 'EPSG:3857');
            window.setTimeout(function () {
              var viewFit = mapView.fit(extent, map.getSize(), {
                minZoom: mapView.get('minZoom') || 2,
                maxZoom: zoom || mapView.get('maxZoom') || 18,
                duration: duration / 2,
                easing: _easing.easeOut
              });
            }, duration);
          }

          scope.completeSearch(markResult, animate, "bounce", animateDuration, location, resultDuration);
        }
      }

      map.getView().animate({
        center: location,
        duration: duration
      }, callback);
      map.getView().animate({
        zoom: zoom - 1,
        duration: duration / 2
      }, {
        zoom: zoom,
        duration: duration / 2
      }, callback);
    }
  }, {
    key: "completeSearch",
    value: function completeSearch(markResult, animate, zoomType, animationDuration, resultCoordinate, resultDuration) {
      // result marker & animation
      if (markResult) {
        var addMarker, markerSource, markerLayer, animateMarker;
        markerSource = new _source.Vector();
        var style = this.config.resultStyle;

        if (!style || style === "0") {
          style = [new _style.Style({
            image: new _style.Circle({
              radius: 7,
              snapToPixel: false,
              stroke: new _style.Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          }), new _style.Style({
            image: new _style.Circle({
              radius: 20,
              snapToPixel: false,
              stroke: new _style.Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          }), new _style.Style({
            image: new _style.Circle({
              radius: 33,
              snapToPixel: false,
              stroke: new _style.Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          })];
        }

        markerLayer = new _layer.Vector({
          style: style,
          source: markerSource,
          zIndex: 99999
        });
        this.props.mapController.map.addLayer(markerLayer);

        addMarker = function addMarker() {
          markerSource.addFeature(new _ol.Feature(new _geom.Point(resultCoordinate)));
        };

        animateMarker = function animateMarker(feature) {
          var animationStep, start, duration, listenerKey;
          start = new Date().getTime();
          duration = resultDuration;

          animationStep = function animationStep(event) {
            var vectorContext, frameState, elapsed, elapsedRatio, radius, opacity, flashGeom;
            vectorContext = (0, _render.getVectorContext)(event);
            frameState = event.frameState;
            flashGeom = feature.getGeometry().clone();
            elapsed = frameState.time - start;
            elapsedRatio = elapsed / duration;
            radius = (0, _easing.linear)(1 - elapsedRatio) * 100;

            if (radius < 0) {
              radius = 0;
            }

            opacity = (0, _easing.linear)(elapsedRatio);
            var marker = new _style.Style();
            vectorContext.setStyle(marker);
            vectorContext.drawGeometry(flashGeom, null);

            if (elapsed > duration) {
              markerSource.clear();
              (0, _Observable.unByKey)(listenerKey);
              return;
            } // continue postrender animation


            frameState.animate = true;
          }; // end of "animationStep"


          listenerKey = markerLayer.on('postrender', animationStep);
        }; // end of "animateMarker"


        markerSource.on('addfeature', function (event) {
          animateMarker(event.feature);
        });

        if (animate) {
          if (zoomType === 'zoom') {
            window.setTimeout(addMarker, animationDuration / 2);
          } else {
            window.setTimeout(addMarker, animationDuration / 2);
          }
        } else {
          addMarker();
        }
      } // end of result marker & animation handling

    }
    /**
     * @TODO
     *
     * @param   {[type]}  location  [description]
     *
     * @return  {[type]}            [description]
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(index) {
      var map, result, resultCoordinate, mapController, zoomType;
      var scope = this;
      mapController = this.props.mapController;
      map = mapController.map;
      var mapView = map.getView();
      var currentCoordinate = this.state.currentCoordinate;
      result = scope.results[index];
      resultCoordinate = (0, _proj.transform)([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

      if (this.config.animate) {
        var resolution = mapView.getResolution();
        var viewExtent = mapView.calculateExtent(map.getSize());

        if ((0, _extent.containsCoordinate)(viewExtent, resultCoordinate)) {
          zoomType = 'zoom';
        } else {
          if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
            var coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
            var difContext = (0, _extent.getWidth)(viewExtent);
          } else {
            coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
            difContext = (0, _extent.getHeight)(viewExtent);
          }

          if (coordDif > 0) {
            resolution *= coordDif / difContext;
          }

          zoomType = 'bounce';
        }

        this.flyTo(map, resultCoordinate, this.config.zoomlevel, this.config.zoombounds, result.bounding_box, this.config.markResult, this.config.resultDuration, this.config.animate, this.config.animateDuration, mapView);
      } else {
        this.completeSearch(this.config.markResult, this.config.animate, zoomType, this.config.animateDuration, resultCoordinate, this.config.resultDuration);
        map.getView().setCenter(resultCoordinate);

        if (this.config.zoomlevel >= 0) {
          map.getView().setZoom(this.config.zoomlevel);
        }
      }
    }
  }]);
  return GeoSearch;
}(_react.Component);

exports.default = GeoSearch;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZ2Vvc2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJHZW9TZWFyY2hSZXN1bHRzIiwicHJvcHMiLCJzY29wZSIsInJlc3VsdENvbnRhaW5lciIsImZpcnN0UmVzdWx0IiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiY2xvc2VDYiIsInJlc3VsdHMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJidXR0b25DbGFzcyIsImN1cnJlbnRSZXN1bHQiLCJ6b29tRnVuYyIsInJlc3VsdHNEaXYiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsIkdlb1NlYXJjaCIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImNsaWNrQ29udHJvbCIsImJpbmQiLCJkb25lRnVuY3Rpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJDVFJMX0dFT1NFQVJDSCIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiYWRkQ29udHJvbCIsImNvbmZpZyIsImdlb3NlYXJjaCIsInNlYXJjaEtleSIsInVybCIsImtleSIsInBhcmFtcyIsImFwaSIsInByb2ZpbGUiLCJ6b29tbGV2ZWwiLCJzZWFyY2hab29tIiwiem9vbWJvdW5kcyIsInpvb21Cb3VuZHMiLCJxdWlja3NlYXJjaCIsImFuaW1hdGUiLCJtYXJrUmVzdWx0IiwiYW5pbWF0ZUR1cmF0aW9uIiwicmVzdWx0RHVyYXRpb24iLCJwb3B1cCIsImF1dG9waWNrIiwicmVzdWx0U3R5bGUiLCJwYXJzZUludCIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJzdHlsZSIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJjb2xsYXBzZWQiLCJyZXN1bHRDb3VudCIsImNhY2hpbmciLCJwbGFjZWhvbGRlciIsInN0YXRlIiwib3BlbiIsInF1ZXJ5IiwiY3VycmVudENvb3JkaW5hdGUiLCJvcGVuUmVzdWx0cyIsImlucHV0Q2FsbGJhY2siLCJzdGFydFNlYXJjaCIsInpvb21UbyIsImNsb3NlUmVzdWx0cyIsImNsb3NlIiwiY2xvc2VSZXN1bHRzQ29tcGxldGVseSIsIm1vZGVDbGFzcyIsImV4dERpdiIsImlkeCIsInNldFN0YXRlIiwicmVzdWx0c0hlYWRsaW5lIiwibGVuZ3RoIiwiaGVhZGxpbmUiLCJHRU9TRUFSQ0giLCJjc3NDb25zdGFudHMiLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkNMT1NFIiwiR0VPU0VBUkNIX1NUQVJUIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInNldE9wZW5Db21wb25lbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic3RvcmVWYWx1ZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvciIsImJsdXIiLCJpZ25vcmUiLCJzZWFyY2hJbnB1dCIsInZhbCIsImZpbmRMb2NhdGlvbiIsIndoaWNoIiwic2VhcmNoQ29udGFpbmVyIiwiZGV0YWlsT3BlblJlc3VsdHMiLCJsb2NhdGlvbiIsIm9wdF9vcHRpb25zIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzcGlubmVyIiwic2hvdyIsInVuZGVmaW5lZCIsImZvcm1hdCIsInEiLCJsaW1pdCIsInBhcmFtIiwiaGFzT3duUHJvcGVydHkiLCJhcnJSZXN1bHRzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJob29rX3NlYXJjaCIsImhpZGUiLCJpIiwiYWpheCIsImRhdGFUeXBlIiwiZmFpbCIsImFsd2F5cyIsIm1hcFZpZXciLCJyZXN1bHRDb29yZGluYXRlIiwiY29vcmREaWYiLCJkaWZDb250ZXh0Iiwidmlld0V4dGVudCIsInJlc3VsdCIsIm9zbUV4dGVudCIsInJlc29sdXRpb24iLCJ6b29tVHlwZSIsImZseVRvIiwiY29tcGxldGVTZWFyY2giLCJnZXRWaWV3IiwiZ2V0Q2VudGVyIiwicGFyc2VGbG9hdCIsImxvbiIsImxhdCIsImJvdW5kaW5nX2JveCIsInNldENlbnRlciIsInNldFpvb20iLCJwaXhlbCIsImdldFBpeGVsRnJvbUNvb3JkaW5hdGUiLCJmZWF0dXJlIiwiZm9yRWFjaEZlYXR1cmVBdFBpeGVsIiwibGF5ZXIiLCJwb3B1cEluZm9zIiwiZ2V0IiwiZ2VvbWV0cnkiLCJnZXRHZW9tZXRyeSIsIlBvaW50IiwiY29vcmQiLCJnZXRDb29yZGluYXRlcyIsImM0Z01hcHNQb3B1cCIsInNldFBvc2l0aW9uIiwiY29udGVudCIsIiRjb250ZW50IiwiaHRtbCIsIkFDVElWRSIsIkxPQURJTkciLCJhc3luYyIsIm9ialBvcHVwIiwicHJveHlfZmlsbFBvcHVwIiwic2V0UG9wdXAiLCJhcGlfaW5mb3dpbmRvd191cmwiLCJwb3B1cEluZm8iLCJyb3V0aW5nX2xpbmsiLCJnZW9waWNrZXIiLCJwaWNrIiwib3B0aW9ucyIsImFsZXJ0IiwiU0VBUkNIX05PVF9GT1VORCIsInB1c2giLCJkaXNwbGF5X25hbWUiLCJib3VuZGluZ2JveCIsImR1cmF0aW9uIiwiem9vbSIsInBhcnRzIiwiY2FsbGVkIiwiZXh0ZW50IiwiY2FsbGJhY2siLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJ2aWV3Rml0IiwiZml0IiwiZ2V0U2l6ZSIsIm1pblpvb20iLCJtYXhab29tIiwiZWFzaW5nIiwiZWFzZU91dCIsImNlbnRlciIsImFkZE1hcmtlciIsIm1hcmtlclNvdXJjZSIsIm1hcmtlckxheWVyIiwiYW5pbWF0ZU1hcmtlciIsIlZlY3RvclNvdXJjZSIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJyYWRpdXMiLCJzbmFwVG9QaXhlbCIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJvcGFjaXR5IiwiVmVjdG9yIiwic291cmNlIiwiekluZGV4IiwiYWRkTGF5ZXIiLCJhZGRGZWF0dXJlIiwiRmVhdHVyZSIsImFuaW1hdGlvblN0ZXAiLCJzdGFydCIsImxpc3RlbmVyS2V5IiwiRGF0ZSIsImdldFRpbWUiLCJ2ZWN0b3JDb250ZXh0IiwiZnJhbWVTdGF0ZSIsImVsYXBzZWQiLCJlbGFwc2VkUmF0aW8iLCJmbGFzaEdlb20iLCJjbG9uZSIsInRpbWUiLCJtYXJrZXIiLCJzZXRTdHlsZSIsImRyYXdHZW9tZXRyeSIsImNsZWFyIiwiZ2V0UmVzb2x1dGlvbiIsImNhbGN1bGF0ZUV4dGVudCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOzs7Ozs7Ozs7O0lBRWFBLGdCOzs7OztBQUNYLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7QUFBQSw2QkFDWEEsS0FEVztBQUdsQjs7OztXQUVELGtCQUFTO0FBQ1AsVUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSxVQUFJQyxlQUFlLEdBQUcsRUFBdEI7QUFDQSxVQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxVQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFJQyxhQUFhLEdBQUcsb0JBQXBCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLEtBQUtQLEtBQUwsQ0FBV1EsT0FBNUI7QUFFQU4scUJBQWUsZ0JBQUc7QUFBSSxVQUFFLEVBQUU7QUFBUixTQUNmLEtBQUtGLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIs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QUFZYyxVQUFoQyxFQUE0QyxLQUFLZCxNQUFMLENBQVlhLE9BQXhELEVBQWlFK0YsUUFBakUsRUFBMkUsS0FBSzVHLE1BQUwsQ0FBWWUsZUFBdkYsRUFBd0dzRixnQkFBeEcsRUFBMEgsS0FBS3JHLE1BQUwsQ0FBWWdCLGNBQXRJO0FBQ0EvQyxXQUFHLENBQUM4SSxPQUFKLEdBQWNNLFNBQWQsQ0FBd0JoQixnQkFBeEI7O0FBQ0EsWUFBSSxLQUFLckcsTUFBTCxDQUFZUSxTQUFaLElBQXlCLENBQTdCLEVBQWdDO0FBQzlCdkMsYUFBRyxDQUFDOEksT0FBSixHQUFjTyxPQUFkLENBQXNCLEtBQUt0SCxNQUFMLENBQVlRLFNBQWxDO0FBQ0Q7QUFDRjtBQUVGOzs7RUEvb0JvQzdCLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmV4cG9ydCBjbGFzcyBHZW9TZWFyY2hSZXN1bHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdENvbnRhaW5lciA9IFwiXCI7XG4gICAgbGV0IGZpcnN0UmVzdWx0ID0gXCJcIjtcbiAgICBsZXQgZGV0YWlsQnRuQ2xhc3MgPSBcIlwiO1xuICAgIGxldCBkZXRhaWxCdG5DYiA9IFwiXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2xhc3MgPSBcImM0Zy10aXRsZWJhci1jbG9zZVwiO1xuICAgIGxldCBjbG9zZUJ0bkNiID0gdGhpcy5wcm9wcy5jbG9zZUNiO1xuXG4gICAgcmVzdWx0Q29udGFpbmVyID0gPHVsIGlkPXtcInJlc3VsdGNvbnRhaW5lclwifT5cbiAgICAgIHt0aGlzLnByb3BzLnJlc3VsdHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IFwic2VhcmNoUmVzdWx0QnV0dG9uXCI7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBzY29wZS5wcm9wcy5jdXJyZW50UmVzdWx0KSB7XG4gICAgICAgICAgYnV0dG9uQ2xhc3MgKz0gXCIgYzRnLWFjdGl2ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPGxpIGtleT17aW5kZXh9PjxidXR0b24ga2V5PXtpbmRleH0gaWQ9e2luZGV4fSBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfSBuYW1lPXtlbGVtZW50fSBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnByb3BzLnpvb21GdW5jKGluZGV4KX0+e2VsZW1lbnR9PC9idXR0b24+PC9saT4pXG4gICAgICB9KX1cbiAgICA8L3VsPjtcblxuICAgIGlmICh0aGlzLnByb3BzLnJlc3VsdHNEaXYpIHtcbiAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBjNGctZXh0ZXJuYWwgXCIgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArIFwiIGM0Zy1iZWFjaFwifT5cbiAgICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17ZGV0YWlsQnRuQ2xhc3N9IGRldGFpbEJ0bkNiPXtkZXRhaWxCdG5DYn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0vPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWJlYWNoLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5wcm9wcy5yZXN1bHRzRGl2XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLXJlc3VsdHMtY29udGVudCBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgYzRnLWJlYWNoXCJ9PlxuICAgICAgICAgIHsvKjxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRlciBjNGctYmVhY2gtaGVhZGVyXCJ9IGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1yZXN1bHRzLWhlYWRsaW5lIGM0Zy1iZWFjaC1oZWFkZXItaGVhZGxpbmVcIn0qL31cbiAgICAgICAgICB7LyogICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e2RldGFpbEJ0bkNsYXNzfSBkZXRhaWxCdG5DYj17ZGV0YWlsQnRuQ2J9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9Lz4qL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctYmVhY2gtY29udGVudFwifT5cbiAgICAgICAgICAgIHtyZXN1bHRDb250YWluZXJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7R2VvU2VhcmNoUmVzdWx0c30gZnJvbSBcIi4vYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRyYW5zZm9ybUV4dGVudH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7ZWFzZU91dCwgbGluZWFyfSBmcm9tIFwib2wvZWFzaW5nXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7Q2lyY2xlLCBTdHJva2UsIFN0eWxlfSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtnZXRWZWN0b3JDb250ZXh0fSBmcm9tIFwib2wvcmVuZGVyXCI7XG5pbXBvcnQge3VuQnlLZXl9IGZyb20gXCJvbC9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7Y29udGFpbnNDb29yZGluYXRlLCBnZXRIZWlnaHQsIGdldFdpZHRofSBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgLy8gY29udHJvbFxuICAgIC8vIGlmICh0aGlzLnByb3BzLmNvbGxhcHNlZCkge1xuICAgIHRoaXMuY2xpY2tDb250cm9sID0gdGhpcy5jbGlja0NvbnRyb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRvbmVGdW5jdGlvbiA9IHRoaXMuZG9uZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0dFT1NFQVJDSCk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9HRU9TRUFSQ0gpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZ2Vvc2VhcmNoXCIgKyBcIiBvbC1jb250cm9sIFwiICsgXCJvbC11bnNlbGVjdGFibGVcIjtcbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGJ1dHRvbikub24oJ2NsaWNrJywgdGhpcy5jbGlja0NvbnRyb2wpO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICAvLyB9XG4gICAgLy8gZW5kIGNvbnRyb2xcblxuICAgIC8vIHByZXBhcmUgc2VhcmNoLWNvbmZpZ3VyYXRpb25cbiAgICAvL1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guc2VhcmNoS2V5ICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gudXJsKSB7XG4gICAgICB0aGlzLmNvbmZpZy51cmwgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnVybCArIFwic2VhcmNoLnBocFwiO1xuICAgICAgdGhpcy5jb25maWcua2V5ID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXk7XG4gICAgICB0aGlzLmNvbmZpZy5wYXJhbXMgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnBhcmFtcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcudXJsID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2ggKyBcIi9cIiArIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgIH1cbiAgICAvLyB6b29tbGV2ZWwgd2hlbiBjZW50ZXJpbmcgdGhlIGZvdW5kIGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcuem9vbWxldmVsID0gcHJvcHMuc2VhcmNoWm9vbTtcbiAgICAvLyB6b29tIHRvIGJvdW5kcyBpbnN0ZWFkIG9mIHpvb21sZXZlbCB3aGVuIGNlbnRlcmluZyB0aGUgZm91bmQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy56b29tYm91bmRzID0gcHJvcHMuem9vbUJvdW5kcztcbiAgICAvLyBxdWlja3NlYXJjaC1vcHRpb24gKGluc3RhbnRseSBqdW1wIHRvIHRoZSBmaXJzdCBmb3VuZCBsb2NhdGlvbilcbiAgICB0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCA9IHByb3BzLnF1aWNrc2VhcmNoIHx8IHRydWU7XG4gICAgLy8gYW5pbWF0aW9uIChhbmltYXRlIGZsaWdodCB0byB0YXJnZXRlZCBsb2NhdGlvbilcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRlID0gcHJvcHMuYW5pbWF0ZTtcbiAgICAvLyBoaWdobGlnaHQgdGhlIHJlc3VsdCBsb2NhdGlvblxuICAgIHRoaXMuY29uZmlnLm1hcmtSZXN1bHQgPSBwcm9wcy5tYXJrUmVzdWx0O1xuICAgIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiA9IHByb3BzLmFuaW1hdGVEdXJhdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbiA9IHByb3BzLnJlc3VsdER1cmF0aW9uO1xuICAgIHRoaXMuY29uZmlnLnBvcHVwID0gcHJvcHMucG9wdXA7XG5cbiAgICB0aGlzLmNvbmZpZy5hdXRvcGljayA9IHByb3BzLmF1dG9waWNrO1xuICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdHMgPSBwcm9wcy5yZXN1bHRzO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlID0gcHJvcHMucmVzdWx0U3R5bGU7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlICYmIHBhcnNlSW50KHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlLCAxMCkgPiAwKSB7XG4gICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAvLyBjaGVjayBpZiBzdHlsZSBpcyBsb2FkZWQsIG90aGVyd2lzZSBsb2FkIGl0XG4gICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdLnN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW3RoaXMuY29uZmlnLnJlc3VsdFN0eWxlXSwge2RvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2NvcGUuY29uZmlnLnJlc3VsdFN0eWxlID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc2NvcGUuY29uZmlnLnJlc3VsdFN0eWxlXS5zdHlsZTtcbiAgICAgICAgICB9fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcuY29sbGFwc2VkID0gcHJvcHMuY29sbGFwc2VkO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdENvdW50ID0gcHJvcHMucmVzdWx0Q291bnQ7XG4gICAgdGhpcy5jb25maWcuY2FjaGluZyA9IHByb3BzLmNhY2hpbmc7XG4gICAgdGhpcy5jb25maWcucGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcjtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiAhcHJvcHMuY29sbGFwc2VkLFxuICAgICAgcXVlcnk6IFwiXCIsIC8vIHRoZSBzZWFyY2ggcXVlcnlcbiAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgY3VycmVudENvb3JkaW5hdGU6IFtdLFxuICAgICAgb3BlblJlc3VsdHM6IGZhbHNlLFxuICAgICAgLy8gZGV0YWlsT3BlblJlc3VsdHM6IGZhbHNlLFxuICAgICAgY3VycmVudFJlc3VsdDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLmlucHV0Q2FsbGJhY2sgPSB0aGlzLmlucHV0Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0U2VhcmNoID0gdGhpcy5zdGFydFNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9vbVRvID0gdGhpcy56b29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlUmVzdWx0cyA9IHRoaXMuY2xvc2VSZXN1bHRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuUmVzdWx0cyA9IHRoaXMub3BlblJlc3VsdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VSZXN1bHRzQ29tcGxldGVseSA9IHRoaXMuY2xvc2VSZXN1bHRzQ29tcGxldGVseS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb2RlQ2xhc3MgPSB0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiO1xuICAgIGlmICh0aGlzLnByb3BzLmV4dERpdikge1xuICAgICAgbW9kZUNsYXNzICs9IFwiIGV4dGVybmFsIFwiO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlblJlc3VsdHMgJiYgdGhpcy5jb25maWcucmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IDxHZW9TZWFyY2hSZXN1bHRzIGNsYXNzTmFtZT17bW9kZUNsYXNzfSByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IHpvb21GdW5jPXsoaWR4KSA9PiB7dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFJlc3VsdDogdGhpcy5zdGF0ZS5yZXN1bHRzW2lkeF19KTsgdGhpcy56b29tVG8oaWR4KTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUmVzdWx0cz17dGhpcy5jbG9zZVJlc3VsdHN9IGhlYWRsaW5lPXt0aGlzLnByb3BzLnJlc3VsdHNIZWFkbGluZX0gY3VycmVudFJlc3VsdD17dGhpcy5zdGF0ZS5jdXJyZW50UmVzdWx0fSByZXN1bHRzRGl2PXt0aGlzLnByb3BzLnJlc3VsdHNEaXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5yZXN1bHRzLmxlbmd0aCA+MH0gb3BlblJlc3VsdHM9e3RoaXMub3BlblJlc3VsdHN9IGNsb3NlQ2I9e3RoaXMuY2xvc2VSZXN1bHRzQ29tcGxldGVseX1cbiAgICAgIC8+O1xuICAgIH1cbiAgICBsZXQgY2xvc2VCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2IgPSBcIlwiO1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb2xsYXBzZWQpIHtcbiAgICAgIGNsb3NlQnRuQ2xhc3MgPSBcImM0Zy10aXRsZWJhci1jbG9zZVwiO1xuICAgICAgY2xvc2VCdG5DYiA9IHRoaXMuY2xvc2U7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5oZWFkbGluZTtcbiAgICBpZiAoIWhlYWRsaW5lKSB7XG4gICAgICBoZWFkbGluZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5HRU9TRUFSQ0g7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5HRU9TRUFSQ0hfV1JBUFBFUiArIFwiIFwiICsgbW9kZUNsYXNzICsgXCIgYzRnLWhvcml6b25cIn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLWhlYWRlclwifSBoZWFkZXI9e2hlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtZmlsdGVyXCJ9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25LZXlEb3duPXt0aGlzLmlucHV0Q2FsbGJhY2t9IGlkPXtcImM0Zy1nZW9zZWFyY2gtaW5wdXRcIn0gcGxhY2Vob2xkZXI9e3RoaXMuY29uZmlnLnBsYWNlaG9sZGVyfSBhcmlhLWxhYmVsPXt0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcn0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5HRU9TRUFSQ0hfU1RBUlR9IHR5cGU9e1wiYnV0dG9uXCJ9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSVF9TRUFSQ0h9IG9uTW91c2VVcD17dGhpcy5zdGFydFNlYXJjaH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZXN1bHRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGNsb3NlUmVzdWx0c0NvbXBsZXRlbHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgaWYgKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gICAgICB9XG4gICAgICBqUXVlcnkoXCIuYzRnLWdlb3NlYXJjaC1jb250YWluZXItcmlnaHRcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgc3RhcnRTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUKTtcbiAgICB0cnkge1xuICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICB9XG4gICAgbGV0IHNlYXJjaElucHV0ID0galF1ZXJ5KFwiI2M0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICB0aGlzLmZpbmRMb2NhdGlvbihzZWFyY2hJbnB1dC52YWwoKSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDYWxsYmFjayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgIGxldCBzZWFyY2hJbnB1dCA9IGpRdWVyeShcIiNjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICAgIHRoaXMuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjbGlja0NvbnRyb2woKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyh0aGlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VSZXN1bHRzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbE9wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICB9XG5cbiAgb3BlblJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsT3BlblJlc3VsdHM6IHRydWV9KTtcbiAgfVxuXG4gIGZpbmRMb2NhdGlvbihsb2NhdGlvbiwgb3B0X29wdGlvbnMpIHtcbiAgICBsZXQgbWFwLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgbWFya1Jlc3VsdCxcbiAgICAgIG1hcENvbnRyb2xsZXI7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXAgPSBtYXBDb250cm9sbGVyLm1hcDtcblxuICAgIC8vIHNob3cgc3Bpbm5lclxuICAgIG1hcENvbnRyb2xsZXIuc3Bpbm5lci5zaG93KCk7XG5cbiAgICBhbmltYXRlID0gdGhpcy5jb25maWcuYW5pbWF0ZTtcbiAgICBhbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbjtcbiAgICBtYXJrUmVzdWx0ID0gdGhpcy5jb25maWcubWFya1Jlc3VsdDtcblxuICAgIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAob3B0X29wdGlvbnMuYW5pbWF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFuaW1hdGUgPSBvcHRfb3B0aW9ucy5hbmltYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG9wdF9vcHRpb25zLm1hcmtSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYXJrUmVzdWx0ID0gb3B0X29wdGlvbnMubWFya1Jlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcucXVpY2tzZWFyY2gpIHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBmb3JtYXQ6IFwianNvblwiLFxuICAgICAgICBxOiBsb2NhdGlvblxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXN1bHRDb3VudCkge1xuICAgICAgICBkYXRhLmxpbWl0ID0gdGhpcy5jb25maWcucmVzdWx0Q291bnQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcua2V5KSB7XG4gICAgICAgIGRhdGEua2V5ID0gdGhpcy5jb25maWcua2V5O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhcmFtcykge1xuICAgICAgICBmb3IgKGxldCBwYXJhbSBpbiB0aGlzLmNvbmZpZy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcucGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgZGF0YVtwYXJhbV0gPSB0aGlzLmNvbmZpZy5wYXJhbXNbcGFyYW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGFyclJlc3VsdHMgPSB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfc2VhcmNoLCBbZGF0YSwgdGhpc10pO1xuICAgICAgaWYgKGFyclJlc3VsdHMgJiYgYXJyUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyUmVzdWx0cykge1xuICAgICAgICAgIGlmIChhcnJSZXN1bHRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICB0aGlzLmRvbmVGdW5jdGlvbihhcnJSZXN1bHRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBBSkFYIC0+IEBub21pbmF0aW1cbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB1cmw6IHRoaXMuY29uZmlnLnVybCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZG9uZSh0aGlzLmRvbmVGdW5jdGlvbilcblxuICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBAVE9ET1xuICAgICAgICAgICAgICAvLyBzZWxmLnJlc3VsdFdyYXBwZXIuaW5uZXJIVE1MID0gJ29ob2ghJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2NvcGUuY29uZmlnLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBAVE9ET1xuICAgIH1cblxuICB9XG4gIGRvbmVGdW5jdGlvbiAocmVzdWx0cykge1xuXG4gICAgdmFyIG1hcFZpZXcsXG4gICAgICAgIGN1cnJlbnRDb29yZGluYXRlLFxuICAgICAgICByZXN1bHRDb29yZGluYXRlLFxuICAgICAgICBjb29yZERpZixcbiAgICAgICAgZGlmQ29udGV4dCxcbiAgICAgICAgdmlld0V4dGVudCxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBvc21FeHRlbnQsXG4gICAgICAgIHJlc29sdXRpb24sXG4gICAgICAgIHpvb21UeXBlLFxuICAgICAgICBmbHlUbyxcbiAgICAgICAgY29tcGxldGVTZWFyY2gsXG4gICAgICAgIG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIsXG4gICAgICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwLFxuICAgICAgICBhbmltYXRlID0gdGhpcy5jb25maWcuYW5pbWF0ZSxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sXG4gICAgICAgIG1hcmtSZXN1bHQgPSB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0O1xuXG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggJiYgcmVzdWx0cy5sZW5ndGggPiAwKXtcbiAgICAgIG1hcFZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBpZiAocmVzdWx0c1swXSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICBjdXJyZW50Q29vcmRpbmF0ZSA9IG1hcFZpZXcuZ2V0Q2VudGVyKCk7XG4gICAgICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQocmVzdWx0LmxvbiksIHBhcnNlRmxvYXQocmVzdWx0LmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgdGhpcy5mbHlUbyhcbiAgICAgICAgICAgICAgbWFwLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy56b29tbGV2ZWwsIHRoaXMuY29uZmlnLnpvb21ib3VuZHMsIHJlc3VsdC5ib3VuZGluZ19ib3gsXG4gICAgICAgICAgICAgIG1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uLCBhbmltYXRlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIG1hcC5nZXRWaWV3KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZWFyY2godGhpcy5jb25maWcubWFya1Jlc3VsdCwgdGhpcy5jb25maWcuYW5pbWF0ZSwgem9vbVR5cGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24pO1xuICAgICAgICAgIG1hcFZpZXcuc2V0Q2VudGVyKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy56b29tbGV2ZWwgPj0gMCkge1xuICAgICAgICAgICAgbWFwLmdldFZpZXcoKS5zZXRab29tKHRoaXMuY29uZmlnLnpvb21sZXZlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBpeGVsID0gbWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgIHZhciBmZWF0dXJlID0gbWFwLmZvckVhY2hGZWF0dXJlQXRQaXhlbChwaXhlbCxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChmZWF0dXJlLCBsYXllcikge1xuICAgICAgICAgICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKHBpeGVsLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsYXllcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb25maWcucG9wdXApIHtcbiAgICAgICAgICB2YXIgcG9wdXBJbmZvcyA9IHt9O1xuICAgICAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0KCdwb3B1cCcpKSB7XG4gICAgICAgICAgICAvLyBzaW5nbGUgUE9JXG4gICAgICAgICAgICBwb3B1cEluZm9zID0gZmVhdHVyZS5nZXQoJ3BvcHVwJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsYXllciAmJiBsYXllci5wb3B1cCkge1xuICAgICAgICAgICAgcG9wdXBJbmZvcyA9IGxheWVyLnBvcHVwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWF0dXJlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICAgICAgICB2YXIgY29vcmQgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGNvb3JkID0gcmVzdWx0Q29vcmRpbmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihjb29yZCk7XG4gICAgICAgICAgICBpZiAocG9wdXBJbmZvcy5jb250ZW50KSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJGNvbnRlbnQuaHRtbCgnJyk7XG4gICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkxPQURJTkcpO1xuICAgICAgICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgICAgIGlmIChwb3B1cEluZm9zLmFzeW5jID09PSBmYWxzZSB8fCBwb3B1cEluZm9zLmFzeW5jID09ICcwJykge1xuICAgICAgICAgICAgICAgIHZhciBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgICAgIG9ialBvcHVwLnBvcHVwID0gcG9wdXBJbmZvcztcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICBvYmpQb3B1cC5sYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jNGdNYXBzSG9va3MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9maWxsUG9wdXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLnByb3h5LnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYXBpX2luZm93aW5kb3dfdXJsICsgJy8nICsgcG9wdXBJbmZvcy5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcHVwSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICBhc3luYzogcG9wdXBJbmZvcy5hc3luYyxcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgcG9wdXA6IHBvcHVwSW5mb3MucG9wdXAsXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGluZ19saW5rOiBwb3B1cEluZm9zLnJvdXRpbmdfbGlua1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICAgICAgICAgIG9ialBvcHVwLnBvcHVwID0gcG9wdXBJbmZvO1xuICAgICAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9wdXAubGF5ZXIgPSBsYXllcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBwb3B1cCBob29rIGZvciBwbHVnaW4gc3BlY2lmaWMgcG9wdXAgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3B1cChvYmpQb3B1cCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXAucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdyAmJiB3aW5kb3cuYzRnTWFwc1BvcHVwICYmIHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXApIHtcbiAgICAgICAgICAgIGpRdWVyeSh3aW5kb3cuYzRnTWFwc1BvcHVwLnBvcHVwKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvcGljayAmJiB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLmdlb3BpY2tlciAmJiB0eXBlb2YgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIucGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyLnBpY2socmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICAgICAgYWxlcnQobGFuZ0NvbnN0YW50cy5TRUFSQ0hfTk9UX0ZPVU5EKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJlc3VsdHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5yZXN1bHRzW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogcmVzdWx0cywgY3VycmVudENvb3JkaW5hdGU6IGN1cnJlbnRDb29yZGluYXRlLCBvcGVuUmVzdWx0czogdHJ1ZSwgY3VycmVudFJlc3VsdDogcmVzdWx0c1swXX0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZmx5VG8obWFwLCBsb2NhdGlvbiwgem9vbWxldmVsLCB6b29tYm91bmRzLCBib3VuZGluZ2JveCwgbWFya1Jlc3VsdCwgcmVzdWx0RHVyYXRpb24sIGFuaW1hdGUsIGFuaW1hdGVEdXJhdGlvbiwgbWFwVmlldykge1xuICAgIGxldCBkdXJhdGlvbiA9IGFuaW1hdGVEdXJhdGlvbjtcbiAgICBsZXQgem9vbSA9IHpvb21sZXZlbDtcbiAgICBsZXQgcGFydHMgPSAyO1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICBsZXQgZXh0ZW50O1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGNvbXBsZXRlKSB7XG4gICAgICAtLXBhcnRzO1xuICAgICAgaWYgKGNhbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFydHMgPT09IDAgfHwgIWNvbXBsZXRlKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHpvb21ib3VuZHMgJiYgYm91bmRpbmdib3ggJiYgYm91bmRpbmdib3hbMF0gIT09IG51bGwgJiZcbiAgICAgICAgICBib3VuZGluZ2JveFsxXSAhPT0gbnVsbCAmJiBib3VuZGluZ2JveFsyXSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGJvdW5kaW5nYm94WzNdICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIHRyYW5zbGF0ZSBvc20tZXh0ZW50IHRvIG9sMy1leHRlbnRcblxuICAgICAgICAgIGxldCBvc21FeHRlbnQgPSBbXTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzJdKSk7XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFswXSkpO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbM10pKTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzFdKSk7XG5cbiAgICAgICAgICBleHRlbnQgPSB0cmFuc2Zvcm1FeHRlbnQob3NtRXh0ZW50LCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZpZXdGaXQgPSBtYXBWaWV3LmZpdChcbiAgICAgICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgICAgICBtYXAuZ2V0U2l6ZSgpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWluWm9vbTogbWFwVmlldy5nZXQoJ21pblpvb20nKSB8fCAyLFxuICAgICAgICAgICAgICAgIG1heFpvb206IHpvb20gfHwgbWFwVmlldy5nZXQoJ21heFpvb20nKSB8fCAxOCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyAyLFxuICAgICAgICAgICAgICAgIGVhc2luZzogZWFzZU91dFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sIGR1cmF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUuY29tcGxldGVTZWFyY2gobWFya1Jlc3VsdCwgYW5pbWF0ZSwgXCJib3VuY2VcIiwgYW5pbWF0ZUR1cmF0aW9uLCBsb2NhdGlvbiwgcmVzdWx0RHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICBjZW50ZXI6IGxvY2F0aW9uLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSwgY2FsbGJhY2spO1xuXG4gICAgbWFwLmdldFZpZXcoKS5hbmltYXRlKHtcbiAgICAgIHpvb206IHpvb20gLSAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgIH0sIHtcbiAgICAgIHpvb206IHpvb20sXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyAyXG4gICAgfSwgY2FsbGJhY2spO1xuICB9XG5cbiAgY29tcGxldGVTZWFyY2gobWFya1Jlc3VsdCwgYW5pbWF0ZSwgem9vbVR5cGUsIGFuaW1hdGlvbkR1cmF0aW9uLCByZXN1bHRDb29yZGluYXRlLCByZXN1bHREdXJhdGlvbikge1xuICAgIC8vIHJlc3VsdCBtYXJrZXIgJiBhbmltYXRpb25cbiAgICBpZiAobWFya1Jlc3VsdCkge1xuICAgICAgbGV0IGFkZE1hcmtlcixcbiAgICAgICAgbWFya2VyU291cmNlLFxuICAgICAgICBtYXJrZXJMYXllcixcbiAgICAgICAgYW5pbWF0ZU1hcmtlcjtcblxuICAgICAgbWFya2VyU291cmNlID0gbmV3IFZlY3RvclNvdXJjZSgpO1xuICAgICAgbGV0IHN0eWxlID0gdGhpcy5jb25maWcucmVzdWx0U3R5bGU7XG4gICAgICBpZiAoIXN0eWxlIHx8IHN0eWxlID09PSBcIjBcIikge1xuICAgICAgICBzdHlsZSA9IFtuZXcgU3R5bGUoe1xuICAgICAgICAgIGltYWdlOiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogNyxcbiAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyMDAsIDAsIDAsICcgKyAwLjkgKyAnKScsXG4gICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgIGltYWdlOiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgICAgcmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgc25hcFRvUGl4ZWw6IGZhbHNlLFxuICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyMDAsIDAsIDAsICcgKyAwLjkgKyAnKScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogMzMsXG4gICAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgbWFya2VyTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBzb3VyY2U6IG1hcmtlclNvdXJjZSxcbiAgICAgICAgekluZGV4OiA5OTk5OVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKG1hcmtlckxheWVyKTtcblxuICAgICAgYWRkTWFya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtYXJrZXJTb3VyY2UuYWRkRmVhdHVyZShcbiAgICAgICAgICBuZXcgRmVhdHVyZShcbiAgICAgICAgICAgIG5ldyBQb2ludChyZXN1bHRDb29yZGluYXRlKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGVNYXJrZXIgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgYW5pbWF0aW9uU3RlcCxcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICBsaXN0ZW5lcktleTtcblxuICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBkdXJhdGlvbiA9IHJlc3VsdER1cmF0aW9uO1xuXG4gICAgICAgIGFuaW1hdGlvblN0ZXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBsZXQgdmVjdG9yQ29udGV4dCxcbiAgICAgICAgICAgIGZyYW1lU3RhdGUsXG4gICAgICAgICAgICBlbGFwc2VkLFxuICAgICAgICAgICAgZWxhcHNlZFJhdGlvLFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgICAgIGZsYXNoR2VvbTtcblxuICAgICAgICAgIHZlY3RvckNvbnRleHQgPSBnZXRWZWN0b3JDb250ZXh0KGV2ZW50KTtcbiAgICAgICAgICBmcmFtZVN0YXRlID0gZXZlbnQuZnJhbWVTdGF0ZTtcbiAgICAgICAgICBmbGFzaEdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKTtcbiAgICAgICAgICBlbGFwc2VkID0gZnJhbWVTdGF0ZS50aW1lIC0gc3RhcnQ7XG4gICAgICAgICAgZWxhcHNlZFJhdGlvID0gZWxhcHNlZCAvIGR1cmF0aW9uO1xuICAgICAgICAgIHJhZGl1cyA9IGxpbmVhcigxIC0gZWxhcHNlZFJhdGlvKSAqIDEwMDtcbiAgICAgICAgICBpZiAocmFkaXVzIDwgMCkge1xuICAgICAgICAgICAgcmFkaXVzID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3BhY2l0eSA9IGxpbmVhcihlbGFwc2VkUmF0aW8pO1xuXG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBTdHlsZSgpO1xuXG4gICAgICAgICAgdmVjdG9yQ29udGV4dC5zZXRTdHlsZShtYXJrZXIpO1xuICAgICAgICAgIHZlY3RvckNvbnRleHQuZHJhd0dlb21ldHJ5KGZsYXNoR2VvbSwgbnVsbCk7XG5cbiAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBtYXJrZXJTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHVuQnlLZXkobGlzdGVuZXJLZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb250aW51ZSBwb3N0cmVuZGVyIGFuaW1hdGlvblxuICAgICAgICAgIGZyYW1lU3RhdGUuYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgIH07IC8vIGVuZCBvZiBcImFuaW1hdGlvblN0ZXBcIlxuXG4gICAgICAgIGxpc3RlbmVyS2V5ID0gbWFya2VyTGF5ZXIub24oJ3Bvc3RyZW5kZXInLCBhbmltYXRpb25TdGVwKTtcblxuICAgICAgfTsgLy8gZW5kIG9mIFwiYW5pbWF0ZU1hcmtlclwiXG5cbiAgICAgIG1hcmtlclNvdXJjZS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhbmltYXRlTWFya2VyKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIGlmICh6b29tVHlwZSA9PT0gJ3pvb20nKSB7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYWRkTWFya2VyLCBhbmltYXRpb25EdXJhdGlvbiAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkTWFya2VyKCk7XG4gICAgICB9XG5cbiAgICB9Ly8gZW5kIG9mIHJlc3VsdCBtYXJrZXIgJiBhbmltYXRpb24gaGFuZGxpbmdcbiAgfVxuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKlxuICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgbG9jYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB6b29tVG8oaW5kZXgpIHtcbiAgICBsZXQgbWFwLFxuICAgICAgcmVzdWx0LFxuICAgICAgcmVzdWx0Q29vcmRpbmF0ZSxcbiAgICAgIG1hcENvbnRyb2xsZXIsXG4gICAgICB6b29tVHlwZTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwO1xuICAgIGxldCBtYXBWaWV3ID0gbWFwLmdldFZpZXcoKTtcbiAgICBsZXQgY3VycmVudENvb3JkaW5hdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRDb29yZGluYXRlO1xuXG4gICAgcmVzdWx0ID0gc2NvcGUucmVzdWx0c1tpbmRleF07XG4gICAgcmVzdWx0Q29vcmRpbmF0ZSA9IHRyYW5zZm9ybShbcGFyc2VGbG9hdChyZXN1bHQubG9uKSwgcGFyc2VGbG9hdChyZXN1bHQubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0ZSkge1xuICAgICAgdmFyIHJlc29sdXRpb24gPSBtYXBWaWV3LmdldFJlc29sdXRpb24oKTtcbiAgICAgIHZhciB2aWV3RXh0ZW50ID0gbWFwVmlldy5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSk7XG4gICAgICBpZiAoY29udGFpbnNDb29yZGluYXRlKHZpZXdFeHRlbnQsIHJlc3VsdENvb3JkaW5hdGUpKSB7XG4gICAgICAgIHpvb21UeXBlID0gJ3pvb20nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzBdIC0gcmVzdWx0Q29vcmRpbmF0ZVswXSkgPiBNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVsxXSAtIHJlc3VsdENvb3JkaW5hdGVbMV0pKSB7XG4gICAgICAgICAgdmFyIGNvb3JkRGlmID0gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMF0gLSByZXN1bHRDb29yZGluYXRlWzBdKTtcbiAgICAgICAgICB2YXIgZGlmQ29udGV4dCA9IGdldFdpZHRoKHZpZXdFeHRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvb3JkRGlmID0gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMV0gLSByZXN1bHRDb29yZGluYXRlWzFdKTtcbiAgICAgICAgICBkaWZDb250ZXh0ID0gZ2V0SGVpZ2h0KHZpZXdFeHRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZERpZiA+IDApIHtcbiAgICAgICAgICByZXNvbHV0aW9uICo9IGNvb3JkRGlmIC8gZGlmQ29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICB6b29tVHlwZSA9ICdib3VuY2UnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZseVRvKFxuICAgICAgICAgIG1hcCwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcuem9vbWxldmVsLCB0aGlzLmNvbmZpZy56b29tYm91bmRzLCByZXN1bHQuYm91bmRpbmdfYm94LFxuICAgICAgICAgIHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uLCB0aGlzLmNvbmZpZy5hbmltYXRlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIG1hcFZpZXcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVTZWFyY2godGhpcy5jb25maWcubWFya1Jlc3VsdCwgdGhpcy5jb25maWcuYW5pbWF0ZSwgem9vbVR5cGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24pO1xuICAgICAgbWFwLmdldFZpZXcoKS5zZXRDZW50ZXIocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICBpZiAodGhpcy5jb25maWcuem9vbWxldmVsID49IDApIHtcbiAgICAgICAgbWFwLmdldFZpZXcoKS5zZXRab29tKHRoaXMuY29uZmlnLnpvb21sZXZlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=