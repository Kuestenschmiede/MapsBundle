"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-geosearch_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-geosearch.jsx":
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-geosearch.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./src/Resources/public/js/c4g-maps-i18n.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./src/Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _easing = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _render = __webpack_require__(/*! ol/render */ "./node_modules/ol/render.js");

var _Observable = __webpack_require__(/*! ol/Observable */ "./node_modules/ol/Observable.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//import {GeoSearchResults} from "./c4g-geosearch-results.jsx";
var GeoSearchResults = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-geosearch-results_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-geosearch-results.jsx */ "./src/Resources/public/js/components/c4g-geosearch-results.jsx"));
});

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

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
    element.appendChild(button);
    jQuery(button).on('click', function () {
      _this.clickControl();
    });

    if (props.external) {
      element.className += " c4g-external";
    } else {
      var input = document.createElement('input');
      input.setAttribute('id', "c4g-geosearch-input");

      if (!props.collapsed) {
        jQuery(input).addClass('c4g-open');
      } else {
        jQuery(input).addClass('c4g-close');
      }

      input.addEventListener('keydown', function (event) {
        _this.inputCallback(event);
      });
      element.appendChild(input);
      _this.input = input;
      var span = document.createElement('span');
      span.addEventListener('click', function () {
        _this.clickControl(true);
      });
      jQuery(span).addClass('searchSpan');
      var i = document.createElement('i');
      i.innerHTML = "<i class=\"far fa-times-circle\"></i>";
      span.appendChild(i);
      element.appendChild(span);
    } // input.onkeydown = (event) => {this.inputCallback(event)};


    _this.controlElement = element;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    props.mapController.map.addControl(control); // end control
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

      var modeClass = this.state.open && this.state.openResults ? "c4g-open" : "c4g-close";

      if (this.props.extDiv) {
        modeClass += " external ";
      }

      var results = "";

      if (this.state.openResults && this.config.results) {
        results = /*#__PURE__*/_react["default"].createElement(GeoSearchResults, {
          className: modeClass,
          results: this.state.results,
          extDiv: this.props.extResultsDiv,
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

      if (!this.props.external) {
        closeBtnClass = "c4g-titlebar-close";
        closeBtnCb = this.clickControl;
      }

      var headline = this.props.headline;

      if (!headline) {
        headline = this.langConstants.GEOSEARCH;
      }

      var input = null;

      if (this.props.external) {
        input = /*#__PURE__*/_react["default"].createElement("div", {
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
        }));
      }

      if (this.props.external || this.state.open && this.state.openResults) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: _c4gMapsConstant.cssConstants.GEOSEARCH_WRAPPER + " " + modeClass + " c4g-horizon"
        }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
        }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
          wrapperClass: "c4g-geosearch-header",
          header: headline,
          headerClass: "c4g-geosearch-headline",
          detailBtnClass: "",
          detailBtnCb: "",
          closeBtnClass: closeBtnClass,
          closeBtnCb: closeBtnCb,
          closeBtnTitle: this.langConstants.CLOSE
        })), input, results));
      } else {
        return null;
      }
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
      if (this.props.mapController && this.props.mapController.data && this.props.mapController.data.geosearch && this.props.mapController.data.geosearch.results) {
        if (this.state.open) {
          if (prevState.open !== this.state.open && this.state.results && this.state.results.length) {
            this.props.mapController.setOpenComponent(this);
          }

          if (this.state.openResults && !this.props.extResultsDiv) {
            jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close");
          }
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
    value: function clickControl(disregardState) {
      var open = disregardState !== undefined ? disregardState : this.state.open;

      if (open) {
        this.setState({
          open: false
        });

        if (!this.props.external) {
          jQuery(this.input).addClass('c4g-close').removeClass('c4g-open');
        } // jQuery(this.props.mapController.searchContainer).removeClass("c4g-open").addClass("c4g-close");

      } else {
        // this.props.mapController.hideOtherComponents(this);
        this.setState({
          open: true
        });

        if (!this.props.external) {
          jQuery(this.input).removeClass('c4g-close').addClass('c4g-open');
          this.input.focus();
        } // jQuery(this.props.mapController.searchContainer).removeClass("c4g-close").addClass("c4g-open");
        // this.props.mapController.setOpenComponent(this);

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
          }, {
            hitTolerance: 4
          });
          var layer = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            return layer;
          }, {
            hitTolerance: 4
          });
          feature = feature && feature.get('features') && feature.get('features').length > 0 ? feature.get('features')[0] : feature;

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

            var objPopup;
            var scope = this;

            if (feature) {
              var geometry = feature.getGeometry();

              if (geometry instanceof _geom.Point) {
                var coord = geometry.getCoordinates();
              } else {
                var coord = resultCoordinate;
              }

              window.c4gMapsPopup.popup.setPosition(coord);
              var mapData = this.props.mapController.data;

              if (popupInfos.content) {
                if (mapData.popupHandling !== '3') {
                  window.c4gMapsPopup.$content ? window.c4gMapsPopup.$content.html('') : false;
                  window.c4gMapsPopup.$popup ? window.c4gMapsPopup.$popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING) : false;
                  window.c4gMapsPopup.spinner.show();
                }

                if (popupInfos.async === false || popupInfos.async == '0') {
                  objPopup = {};
                  objPopup.popup = popupInfos;
                  objPopup.feature = feature;
                  objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                  if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                      popup: objPopup,
                      mapController: this.props.mapController
                    });
                  }

                  if (!this.props.mapController.proxy.popupController.currentPopup) {
                    this.props.mapController.proxy.popupController.addPopUp(false);
                  }

                  this.props.mapController.proxy.popupController.setPopup(objPopup);
                } else {
                  jQuery.ajax({
                    dataType: "json",
                    url: this.props.mapController.proxy.api_infowindow_url + '/' + popupInfos.content
                  }).done(function (data) {
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
                      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                        popup: objPopup,
                        mapController: scope.props.mapController
                      });
                    }

                    if (!scope.props.mapController.proxy.popupController.currentPopup) {
                      scope.props.mapController.proxy.popupController.addPopUp(false);
                    }

                    scope.props.mapController.proxy.popupController.setPopup(objPopup);
                  });
                }
              } //
              //   window.c4gMapsPopup.$content.html('');
              //   window.c4gMapsPopup.$popup.addClass(cssConstants.ACTIVE).addClass(cssConstants.LOADING);
              //   window.c4gMapsPopup.spinner.show();
              //
              //   if (popupInfos.async === false || popupInfos.async == '0') {
              //     var objPopup = {};
              //     objPopup.popup = popupInfos;
              //     objPopup.feature = feature;
              //     objPopup.layer = layer;
              //     // Call the popup hook for plugin specific popup content
              //     if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
              //       utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
              //     }
              //     this.config.mapController.proxy.setPopup(objPopup);
              //   } else {
              //     jQuery.ajax({
              //       dataType: "json",
              //       url: this.api_infowindow_url + '/' + popupInfos.content,
              //       done: function (data) {
              //         var popupInfo = {
              //           async: popupInfos.async,
              //           content: data.content,
              //           popup: popupInfos.popup,
              //           routing_link: popupInfos.routing_link
              //         };
              //
              //         objPopup = {};
              //         objPopup.popup = popupInfo;
              //         objPopup.feature = feature;
              //         objPopup.layer = layer;
              //
              //         // Call the popup hook for plugin specific popup content
              //         if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
              //           utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
              //         }
              //
              //         this.setPopup(objPopup);
              //       }
              //     });
              //   }
              // } else {
              //   window.c4gMapsPopup.popup.removeClass(cssConstants.ACTIVE);
              // }

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

          this.props.mapController.hideOtherComponents(this);
          this.setState({
            results: _results,
            open: true,
            currentCoordinate: currentCoordinate,
            openResults: true,
            currentResult: _results[0]
          });
          this.props.mapController.setOpenComponent(this);
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

exports["default"] = GeoSearch;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBWkE7QUFDQSxJQUFNQSxnQkFBZ0IsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQVc7QUFBQSxTQUFNLDhQQUFOO0FBQUEsQ0FBWCxDQUF6Qjs7QUFZQSxJQUFNQyxRQUFRLGdCQUFHRixrQkFBTUMsSUFBTixDQUFXO0FBQUEsU0FBTSx1S0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBRXFCRTs7Ozs7QUFFbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLGFBQUwsR0FBcUIsOEJBQVlELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsSUFBaEMsQ0FBckIsQ0FIaUIsQ0FJakI7QUFDQTs7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLGdEQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsZ0RBQXBCO0FBQ0EsUUFBSUUsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFFBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLE1BQUtWLGFBQUwsQ0FBbUJXLGNBQXJEO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixPQUFwQixFQUE2QixNQUFLVixhQUFMLENBQW1CVyxjQUFoRDtBQUNBTCxJQUFBQSxPQUFP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QUFMLENBQW9CLEtBQUtqSCxNQUFMLENBQVljLFVBQWhDLEVBQTRDLEtBQUtkLE1BQUwsQ0FBWWEsT0FBeEQsRUFBaUVrRyxRQUFqRSxFQUEyRSxLQUFLL0csTUFBTCxDQUFZZSxlQUF2RixFQUF3R3lGLGdCQUF4RyxFQUEwSCxLQUFLeEcsTUFBTCxDQUFZZ0IsY0FBdEk7QUFDQWxCLFFBQUFBLEdBQUcsQ0FBQ29ILE9BQUosR0FBY00sU0FBZCxDQUF3QmhCLGdCQUF4Qjs7QUFDQSxZQUFJLEtBQUt4RyxNQUFMLENBQVlRLFNBQVosSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUJWLFVBQUFBLEdBQUcsQ0FBQ29ILE9BQUosR0FBY08sT0FBZCxDQUFzQixLQUFLekgsTUFBTCxDQUFZUSxTQUFsQztBQUNEO0FBQ0Y7QUFFRjs7O0VBaHdCb0NzTiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2guanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuLy9pbXBvcnQge0dlb1NlYXJjaFJlc3VsdHN9IGZyb20gXCIuL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3hcIjtcbmNvbnN0IEdlb1NlYXJjaFJlc3VsdHMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybSwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtlYXNlT3V0LCBsaW5lYXJ9IGZyb20gXCJvbC9lYXNpbmdcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtDaXJjbGUsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldFZlY3RvckNvbnRleHR9IGZyb20gXCJvbC9yZW5kZXJcIjtcbmltcG9ydCB7dW5CeUtleX0gZnJvbSBcIm9sL09ic2VydmFibGVcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtjb250YWluc0Nvb3JkaW5hdGUsIGdldEhlaWdodCwgZ2V0V2lkdGh9IGZyb20gXCJvbC9leHRlbnRcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICAvLyBjb250cm9sXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9uZUZ1bmN0aW9uID0gdGhpcy5kb25lRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0dFT1NFQVJDSCk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1nZW9zZWFyY2hcIiArIFwiIG9sLWNvbnRyb2wgXCIgKyBcIm9sLXVuc2VsZWN0YWJsZVwiO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoYnV0dG9uKS5vbignY2xpY2snLCAoKT0+IHt0aGlzLmNsaWNrQ29udHJvbCgpfSk7XG5cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKCFwcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgalF1ZXJ5KGlucHV0KS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBqUXVlcnkoaW5wdXQpLmFkZENsYXNzKCdjNGctY2xvc2UnKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGV2ZW50KSA9PiB7dGhpcy5pbnB1dENhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmNsaWNrQ29udHJvbCh0cnVlKX0pO1xuICAgICAgalF1ZXJ5KHNwYW4pLmFkZENsYXNzKCdzZWFyY2hTcGFuJyk7XG4gICAgICBsZXQgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGkuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz1cXFwiZmFyIGZhLXRpbWVzLWNpcmNsZVxcXCI+PC9pPlwiO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7dGhpcy5pbnB1dENhbGxiYWNrKGV2ZW50KX07XG5cblxuXG4gICAgdGhpcy5jb250cm9sRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG5cbiAgICAvLyBlbmQgY29udHJvbFxuXG4gICAgLy8gcHJlcGFyZSBzZWFyY2gtY29uZmlndXJhdGlvblxuICAgIC8vXG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC51cmwpIHtcbiAgICAgIHRoaXMuY29uZmlnLnVybCA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gudXJsICsgXCJzZWFyY2gucGhwXCI7XG4gICAgICB0aGlzLmNvbmZpZy5rZXkgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnNlYXJjaEtleTtcbiAgICAgIHRoaXMuY29uZmlnLnBhcmFtcyA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gucGFyYW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy51cmwgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmdlb3NlYXJjaCArIFwiL1wiICsgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByb2ZpbGU7XG4gICAgfVxuICAgIC8vIHpvb21sZXZlbCB3aGVuIGNlbnRlcmluZyB0aGUgZm91bmQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy56b29tbGV2ZWwgPSBwcm9wcy5zZWFyY2hab29tO1xuICAgIC8vIHpvb20gdG8gYm91bmRzIGluc3RlYWQgb2Ygem9vbWxldmVsIHdoZW4gY2VudGVyaW5nIHRoZSBmb3VuZCBsb2NhdGlvblxuICAgIHRoaXMuY29uZmlnLnpvb21ib3VuZHMgPSBwcm9wcy56b29tQm91bmRzO1xuICAgIC8vIHF1aWNrc2VhcmNoLW9wdGlvbiAoaW5zdGFudGx5IGp1bXAgdG8gdGhlIGZpcnN0IGZvdW5kIGxvY2F0aW9uKVxuICAgIHRoaXMuY29uZmlnLnF1aWNrc2VhcmNoID0gcHJvcHMucXVpY2tzZWFyY2ggfHwgdHJ1ZTtcbiAgICAvLyBhbmltYXRpb24gKGFuaW1hdGUgZmxpZ2h0IHRvIHRhcmdldGVkIGxvY2F0aW9uKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGUgPSBwcm9wcy5hbmltYXRlO1xuICAgIC8vIGhpZ2hsaWdodCB0aGUgcmVzdWx0IGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcubWFya1Jlc3VsdCA9IHByb3BzLm1hcmtSZXN1bHQ7XG4gICAgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uID0gcHJvcHMuYW5pbWF0ZUR1cmF0aW9uO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uID0gcHJvcHMucmVzdWx0RHVyYXRpb247XG4gICAgdGhpcy5jb25maWcucG9wdXAgPSBwcm9wcy5wb3B1cDtcblxuICAgIHRoaXMuY29uZmlnLmF1dG9waWNrID0gcHJvcHMuYXV0b3BpY2s7XG4gICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5jb25maWcucmVzdWx0cyA9IHByb3BzLnJlc3VsdHM7XG4gICAgdGhpcy5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5yZXN1bHRTdHlsZTtcbiAgICBpZiAodGhpcy5jb25maWcucmVzdWx0U3R5bGUgJiYgcGFyc2VJbnQodGhpcy5jb25maWcucmVzdWx0U3R5bGUsIDEwKSA+IDApIHtcbiAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgIC8vIGNoZWNrIGlmIHN0eWxlIGlzIGxvYWRlZCwgb3RoZXJ3aXNlIGxvYWQgaXRcbiAgICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0pIHtcbiAgICAgICAgdGhpcy5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0uc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY29wZS5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzY29wZS5jb25maWcucmVzdWx0U3R5bGVdLnN0eWxlO1xuICAgICAgICAgIH19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy5jb2xsYXBzZWQgPSBwcm9wcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy5jb25maWcucmVzdWx0Q291bnQgPSBwcm9wcy5yZXN1bHRDb3VudDtcbiAgICB0aGlzLmNvbmZpZy5jYWNoaW5nID0gcHJvcHMuY2FjaGluZztcbiAgICB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBxdWVyeTogXCJcIiwgLy8gdGhlIHNlYXJjaCBxdWVyeVxuICAgICAgcmVzdWx0czogW10sXG4gICAgICBjdXJyZW50Q29vcmRpbmF0ZTogW10sXG4gICAgICBvcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICAvLyBkZXRhaWxPcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICBjdXJyZW50UmVzdWx0OiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMuaW5wdXRDYWxsYmFjayA9IHRoaXMuaW5wdXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRTZWFyY2ggPSB0aGlzLnN0YXJ0U2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b29tVG8gPSB0aGlzLnpvb21Uby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VSZXN1bHRzID0gdGhpcy5jbG9zZVJlc3VsdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5SZXN1bHRzID0gdGhpcy5vcGVuUmVzdWx0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5ID0gdGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1vZGVDbGFzcyA9IHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5leHREaXYpIHtcbiAgICAgIG1vZGVDbGFzcyArPSBcIiBleHRlcm5hbCBcIjtcbiAgICB9XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5SZXN1bHRzICYmIHRoaXMuY29uZmlnLnJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSA8R2VvU2VhcmNoUmVzdWx0cyBjbGFzc05hbWU9e21vZGVDbGFzc30gcmVzdWx0cz17dGhpcy5zdGF0ZS5yZXN1bHRzfSBleHREaXY9e3RoaXMucHJvcHMuZXh0UmVzdWx0c0Rpdn0gem9vbUZ1bmM9eyhpZHgpID0+IHt0aGlzLnNldFN0YXRlKHtjdXJyZW50UmVzdWx0OiB0aGlzLnN0YXRlLnJlc3VsdHNbaWR4XX0pOyB0aGlzLnpvb21UbyhpZHgpO319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VSZXN1bHRzPXt0aGlzLmNsb3NlUmVzdWx0c30gaGVhZGxpbmU9e3RoaXMucHJvcHMucmVzdWx0c0hlYWRsaW5lfSBjdXJyZW50UmVzdWx0PXt0aGlzLnN0YXRlLmN1cnJlbnRSZXN1bHR9IHJlc3VsdHNEaXY9e3RoaXMucHJvcHMucmVzdWx0c0Rpdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4wfSBvcGVuUmVzdWx0cz17dGhpcy5vcGVuUmVzdWx0c30gY2xvc2VDYj17dGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5fVxuICAgICAgLz47XG4gICAgfVxuICAgIGxldCBjbG9zZUJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgY2xvc2VCdG5DYiA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICBjbG9zZUJ0bkNsYXNzID0gXCJjNGctdGl0bGViYXItY2xvc2VcIjtcbiAgICAgIGNsb3NlQnRuQ2IgPSB0aGlzLmNsaWNrQ29udHJvbDtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSB0aGlzLnByb3BzLmhlYWRsaW5lO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgIGhlYWRsaW5lID0gdGhpcy5sYW5nQ29uc3RhbnRzLkdFT1NFQVJDSDtcbiAgICB9XG4gICAgbGV0IGlucHV0ID0gbnVsbFxuICAgIGlmICh0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICBpbnB1dCA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtZmlsdGVyXCJ9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbktleURvd249e3RoaXMuaW5wdXRDYWxsYmFja30gaWQ9e1wiYzRnLWdlb3NlYXJjaC1pbnB1dFwifSBwbGFjZWhvbGRlcj17dGhpcy5jb25maWcucGxhY2Vob2xkZXJ9IGFyaWEtbGFiZWw9e3RoaXMuY29uZmlnLnBsYWNlaG9sZGVyfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUfSB0eXBlPXtcImJ1dHRvblwifSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUlRfU0VBUkNIfSBvbk1vdXNlVXA9e3RoaXMuc3RhcnRTZWFyY2h9Lz5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZXh0ZXJuYWwgfHwgKHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkdFT1NFQVJDSF9XUkFQUEVSICsgXCIgXCIgKyBtb2RlQ2xhc3MgKyBcIiBjNGctaG9yaXpvblwifT5cbiAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17XCJcIn0gZGV0YWlsQnRuQ2I9e1wiXCJ9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgICAgICB7cmVzdWx0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUmVzdWx0c0NvbXBsZXRlbHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlciAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2ggJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnJlc3VsdHMpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5yZXN1bHRzICYmIHRoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhdGhpcy5wcm9wcy5leHRSZXN1bHRzRGl2KSB7XG4gICAgICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgc3RhcnRTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUKTtcbiAgICB0cnkge1xuICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICB9XG4gICAgbGV0IHNlYXJjaElucHV0ID0galF1ZXJ5KFwiI2M0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICB0aGlzLmZpbmRMb2NhdGlvbihzZWFyY2hJbnB1dC52YWwoKSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDYWxsYmFjayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgIGxldCBzZWFyY2hJbnB1dCA9IGpRdWVyeShcIiNjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICAgIHRoaXMuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjbGlja0NvbnRyb2woZGlzcmVnYXJkU3RhdGUpIHtcbiAgICBsZXQgb3BlbiA9IGRpc3JlZ2FyZFN0YXRlICE9PSB1bmRlZmluZWQgPyBkaXNyZWdhcmRTdGF0ZSA6IHRoaXMuc3RhdGUub3BlblxuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmlucHV0KS5hZGRDbGFzcygnYzRnLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICB9XG4gICAgICAvLyBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuaW5wdXQpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgLy8galF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZWFyY2hDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICAvLyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsT3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBvcGVuUmVzdWx0cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxPcGVuUmVzdWx0czogdHJ1ZX0pO1xuICB9XG5cbiAgZmluZExvY2F0aW9uKGxvY2F0aW9uLCBvcHRfb3B0aW9ucykge1xuICAgIGxldCBtYXAsXG4gICAgICBhbmltYXRlLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBtYXJrUmVzdWx0LFxuICAgICAgbWFwQ29udHJvbGxlcjtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwO1xuXG4gICAgLy8gc2hvdyBzcGlubmVyXG4gICAgbWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcblxuICAgIGFuaW1hdGUgPSB0aGlzLmNvbmZpZy5hbmltYXRlO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uO1xuICAgIG1hcmtSZXN1bHQgPSB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChvcHRfb3B0aW9ucy5hbmltYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYW5pbWF0ZSA9IG9wdF9vcHRpb25zLmFuaW1hdGU7XG4gICAgICB9XG4gICAgICBpZiAob3B0X29wdGlvbnMubWFya1Jlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1hcmtSZXN1bHQgPSBvcHRfb3B0aW9ucy5tYXJrUmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCkge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICAgIHE6IGxvY2F0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlc3VsdENvdW50KSB7XG4gICAgICAgIGRhdGEubGltaXQgPSB0aGlzLmNvbmZpZy5yZXN1bHRDb3VudDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5rZXkpIHtcbiAgICAgICAgZGF0YS5rZXkgPSB0aGlzLmNvbmZpZy5rZXk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMuY29uZmlnLnBhcmFtcykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5wYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICBkYXRhW3BhcmFtXSA9IHRoaXMuY29uZmlnLnBhcmFtc1twYXJhbV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgYXJyUmVzdWx0cyA9IHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19zZWFyY2gsIFtkYXRhLCB0aGlzXSk7XG4gICAgICBpZiAoYXJyUmVzdWx0cyAmJiBhcnJSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJSZXN1bHRzKSB7XG4gICAgICAgICAgaWYgKGFyclJlc3VsdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZUZ1bmN0aW9uKGFyclJlc3VsdHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIEFKQVggLT4gQG5vbWluYXRpbVxuICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgIHVybDogdGhpcy5jb25maWcudXJsLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5kb25lKHRoaXMuZG9uZUZ1bmN0aW9uKVxuXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIEBUT0RPXG4gICAgICAgICAgICAgIC8vIHNlbGYucmVzdWx0V3JhcHBlci5pbm5lckhUTUwgPSAnb2hvaCEnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzY29wZS5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEBUT0RPXG4gICAgfVxuXG4gIH1cbiAgZG9uZUZ1bmN0aW9uIChyZXN1bHRzKSB7XG5cbiAgICB2YXIgbWFwVmlldyxcbiAgICAgICAgY3VycmVudENvb3JkaW5hdGUsXG4gICAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICAgIGNvb3JkRGlmLFxuICAgICAgICBkaWZDb250ZXh0LFxuICAgICAgICB2aWV3RXh0ZW50LFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIG9zbUV4dGVudCxcbiAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgem9vbVR5cGUsXG4gICAgICAgIGZseVRvLFxuICAgICAgICBjb21wbGV0ZVNlYXJjaCxcbiAgICAgICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcixcbiAgICAgICAgbWFwID0gbWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgIGFuaW1hdGUgPSB0aGlzLmNvbmZpZy5hbmltYXRlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbixcbiAgICAgICAgbWFya1Jlc3VsdCA9IHRoaXMuY29uZmlnLm1hcmtSZXN1bHQ7XG5cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCAmJiByZXN1bHRzLmxlbmd0aCA+IDApe1xuICAgICAgbWFwVmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGlmIChyZXN1bHRzWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIGN1cnJlbnRDb29yZGluYXRlID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICAgICAgcmVzdWx0Q29vcmRpbmF0ZSA9IHRyYW5zZm9ybShbcGFyc2VGbG9hdChyZXN1bHQubG9uKSwgcGFyc2VGbG9hdChyZXN1bHQubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICB0aGlzLmZseVRvKFxuICAgICAgICAgICAgICBtYXAsIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnpvb21sZXZlbCwgdGhpcy5jb25maWcuem9vbWJvdW5kcywgcmVzdWx0LmJvdW5kaW5nX2JveCxcbiAgICAgICAgICAgICAgbWFya1Jlc3VsdCwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24sIGFuaW1hdGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgbWFwLmdldFZpZXcoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZVNlYXJjaCh0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5hbmltYXRlLCB6b29tVHlwZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbik7XG4gICAgICAgICAgbWFwVmlldy5zZXRDZW50ZXIocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnpvb21sZXZlbCA+PSAwKSB7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldFpvb20odGhpcy5jb25maWcuem9vbWxldmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGl4ZWwgPSBtYXAuZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZShyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSBtYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKHBpeGVsLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgICAgICAgICAgfSwge2hpdFRvbGVyYW5jZTogNH0pO1xuICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKHBpeGVsLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsYXllcjtcbiAgICAgICAgICAgIH0sIHtoaXRUb2xlcmFuY2U6IDR9KTtcbiAgICAgICAgZmVhdHVyZSA9IGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykubGVuZ3RoID4gMCA/IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdIDogZmVhdHVyZTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBvcHVwKSB7XG4gICAgICAgICAgdmFyIHBvcHVwSW5mb3MgPSB7fTtcbiAgICAgICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgncG9wdXAnKSkge1xuICAgICAgICAgICAgLy8gc2luZ2xlIFBPSVxuICAgICAgICAgICAgcG9wdXBJbmZvcyA9IGZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGF5ZXIgJiYgbGF5ZXIucG9wdXApIHtcbiAgICAgICAgICAgIHBvcHVwSW5mb3MgPSBsYXllci5wb3B1cDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVhdHVyZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgb2JqUG9wdXA7XG4gICAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICAgICAgICB2YXIgY29vcmQgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGNvb3JkID0gcmVzdWx0Q29vcmRpbmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihjb29yZCk7XG4gICAgICAgICAgICBsZXQgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgICAgICAgaWYgKHBvcHVwSW5mb3MuY29udGVudCkge1xuICAgICAgICAgICAgICBpZiAobWFwRGF0YS5wb3B1cEhhbmRsaW5nICE9PSAnMycpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLiRjb250ZW50ID8gd2luZG93LmM0Z01hcHNQb3B1cC4kY29udGVudC5odG1sKCcnKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJHBvcHVwID8gd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkxPQURJTkcpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5zcGlubmVyLnNob3coKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChwb3B1cEluZm9zLmFzeW5jID09PSBmYWxzZSB8fCBwb3B1cEluZm9zLmFzeW5jID09ICcwJykge1xuICAgICAgICAgICAgICAgIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm9zO1xuICAgICAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfZmlsbFBvcHVwLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBvYmpQb3B1cCxcbiAgICAgICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkucG9wdXBDb250cm9sbGVyLmN1cnJlbnRQb3B1cCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LnBvcHVwQ29udHJvbGxlci5hZGRQb3BVcChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5wb3B1cENvbnRyb2xsZXIuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwSW5mb3MuY29udGVudFxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwb3B1cEluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiBwb3B1cEluZm9zLmFzeW5jLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cEluZm9zLnBvcHVwLFxuICAgICAgICAgICAgICAgICAgICByb3V0aW5nX2xpbms6IHBvcHVwSW5mb3Mucm91dGluZ19saW5rXG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm87XG4gICAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG5cbiAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9maWxsUG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogb2JqUG9wdXAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogc2NvcGUucHJvcHMubWFwQ29udHJvbGxlclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5wb3B1cENvbnRyb2xsZXIuY3VycmVudFBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkucG9wdXBDb250cm9sbGVyLmFkZFBvcFVwKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkucG9wdXBDb250cm9sbGVyLnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgd2luZG93LmM0Z01hcHNQb3B1cC4kY29udGVudC5odG1sKCcnKTtcbiAgICAgICAgICAgIC8vICAgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkxPQURJTkcpO1xuICAgICAgICAgICAgLy8gICB3aW5kb3cuYzRnTWFwc1BvcHVwLnNwaW5uZXIuc2hvdygpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgaWYgKHBvcHVwSW5mb3MuYXN5bmMgPT09IGZhbHNlIHx8IHBvcHVwSW5mb3MuYXN5bmMgPT0gJzAnKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICAvLyAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm9zO1xuICAgICAgICAgICAgLy8gICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICAgICAgLy8gICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAvLyAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgIC8vICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfZmlsbFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIucHJveHkuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIC8vICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIC8vICAgICAgIHVybDogdGhpcy5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cEluZm9zLmNvbnRlbnQsXG4gICAgICAgICAgICAvLyAgICAgICBkb25lOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgIGFzeW5jOiBwb3B1cEluZm9zLmFzeW5jLFxuICAgICAgICAgICAgLy8gICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICByb3V0aW5nX2xpbms6IHBvcHVwSW5mb3Mucm91dGluZ19saW5rXG4gICAgICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgLy8gICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mbztcbiAgICAgICAgICAgIC8vICAgICAgICAgb2JqUG9wdXAuZmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyBDYWxsIHRoZSBwb3B1cCBob29rIGZvciBwbHVnaW4gc3BlY2lmaWMgcG9wdXAgY29udGVudFxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93ICYmIHdpbmRvdy5jNGdNYXBzUG9wdXAgJiYgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cCkge1xuICAgICAgICAgICAgalF1ZXJ5KHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXApLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF1dG9waWNrICYmIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLmdlb3BpY2tlci5waWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIucGljayhyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgICAgICBhbGVydChsYW5nQ29uc3RhbnRzLlNFQVJDSF9OT1RfRk9VTkQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVzdWx0cykge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnJlc3VsdHNbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogcmVzdWx0cywgb3BlbjogdHJ1ZSwgY3VycmVudENvb3JkaW5hdGU6IGN1cnJlbnRDb29yZGluYXRlLCBvcGVuUmVzdWx0czogdHJ1ZSwgY3VycmVudFJlc3VsdDogcmVzdWx0c1swXX0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGZseVRvKG1hcCwgbG9jYXRpb24sIHpvb21sZXZlbCwgem9vbWJvdW5kcywgYm91bmRpbmdib3gsIG1hcmtSZXN1bHQsIHJlc3VsdER1cmF0aW9uLCBhbmltYXRlLCBhbmltYXRlRHVyYXRpb24sIG1hcFZpZXcpIHtcbiAgICBsZXQgZHVyYXRpb24gPSBhbmltYXRlRHVyYXRpb247XG4gICAgbGV0IHpvb20gPSB6b29tbGV2ZWw7XG4gICAgbGV0IHBhcnRzID0gMjtcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgbGV0IGV4dGVudDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhjb21wbGV0ZSkge1xuICAgICAgLS1wYXJ0cztcbiAgICAgIGlmIChjYWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnRzID09PSAwIHx8ICFjb21wbGV0ZSkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh6b29tYm91bmRzICYmIGJvdW5kaW5nYm94ICYmIGJvdW5kaW5nYm94WzBdICE9PSBudWxsICYmXG4gICAgICAgICAgYm91bmRpbmdib3hbMV0gIT09IG51bGwgJiYgYm91bmRpbmdib3hbMl0gIT09IG51bGwgJiZcbiAgICAgICAgICBib3VuZGluZ2JveFszXSAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyB0cmFuc2xhdGUgb3NtLWV4dGVudCB0byBvbDMtZXh0ZW50XG5cbiAgICAgICAgICBsZXQgb3NtRXh0ZW50ID0gW107XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsyXSkpO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMF0pKTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzNdKSk7XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsxXSkpO1xuXG4gICAgICAgICAgZXh0ZW50ID0gdHJhbnNmb3JtRXh0ZW50KG9zbUV4dGVudCwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcblxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2aWV3Rml0ID0gbWFwVmlldy5maXQoXG4gICAgICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICAgICAgbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1pblpvb206IG1hcFZpZXcuZ2V0KCdtaW5ab29tJykgfHwgMixcbiAgICAgICAgICAgICAgICBtYXhab29tOiB6b29tIHx8IG1hcFZpZXcuZ2V0KCdtYXhab29tJykgfHwgMTgsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMixcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGVhc2VPdXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LCBkdXJhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLmNvbXBsZXRlU2VhcmNoKG1hcmtSZXN1bHQsIGFuaW1hdGUsIFwiYm91bmNlXCIsIGFuaW1hdGVEdXJhdGlvbiwgbG9jYXRpb24sIHJlc3VsdER1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgY2VudGVyOiBsb2NhdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0sIGNhbGxiYWNrKTtcblxuICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICB6b29tOiB6b29tIC0gMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDJcbiAgICB9LCB7XG4gICAgICB6b29tOiB6b29tLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgIH0sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBsZXRlU2VhcmNoKG1hcmtSZXN1bHQsIGFuaW1hdGUsIHpvb21UeXBlLCBhbmltYXRpb25EdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgcmVzdWx0RHVyYXRpb24pIHtcbiAgICAvLyByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uXG4gICAgaWYgKG1hcmtSZXN1bHQpIHtcbiAgICAgIGxldCBhZGRNYXJrZXIsXG4gICAgICAgIG1hcmtlclNvdXJjZSxcbiAgICAgICAgbWFya2VyTGF5ZXIsXG4gICAgICAgIGFuaW1hdGVNYXJrZXI7XG5cbiAgICAgIG1hcmtlclNvdXJjZSA9IG5ldyBWZWN0b3JTb3VyY2UoKTtcbiAgICAgIGxldCBzdHlsZSA9IHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlO1xuICAgICAgaWYgKCFzdHlsZSB8fCBzdHlsZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgc3R5bGUgPSBbbmV3IFN0eWxlKHtcbiAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IDcsXG4gICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogMjAsXG4gICAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgICByYWRpdXM6IDMzLFxuICAgICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIDAuOSArICcpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIG1hcmtlckxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgc291cmNlOiBtYXJrZXJTb3VyY2UsXG4gICAgICAgIHpJbmRleDogOTk5OTlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihtYXJrZXJMYXllcik7XG5cbiAgICAgIGFkZE1hcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFya2VyU291cmNlLmFkZEZlYXR1cmUoXG4gICAgICAgICAgbmV3IEZlYXR1cmUoXG4gICAgICAgICAgICBuZXcgUG9pbnQocmVzdWx0Q29vcmRpbmF0ZSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlTWFya2VyID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvblN0ZXAsXG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgbGlzdGVuZXJLZXk7XG5cbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZHVyYXRpb24gPSByZXN1bHREdXJhdGlvbjtcblxuICAgICAgICBhbmltYXRpb25TdGVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgbGV0IHZlY3RvckNvbnRleHQsXG4gICAgICAgICAgICBmcmFtZVN0YXRlLFxuICAgICAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgICAgIGVsYXBzZWRSYXRpbyxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICBmbGFzaEdlb207XG5cbiAgICAgICAgICB2ZWN0b3JDb250ZXh0ID0gZ2V0VmVjdG9yQ29udGV4dChldmVudCk7XG4gICAgICAgICAgZnJhbWVTdGF0ZSA9IGV2ZW50LmZyYW1lU3RhdGU7XG4gICAgICAgICAgZmxhc2hHZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCk7XG4gICAgICAgICAgZWxhcHNlZCA9IGZyYW1lU3RhdGUudGltZSAtIHN0YXJ0O1xuICAgICAgICAgIGVsYXBzZWRSYXRpbyA9IGVsYXBzZWQgLyBkdXJhdGlvbjtcbiAgICAgICAgICByYWRpdXMgPSBsaW5lYXIoMSAtIGVsYXBzZWRSYXRpbykgKiAxMDA7XG4gICAgICAgICAgaWYgKHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wYWNpdHkgPSBsaW5lYXIoZWxhcHNlZFJhdGlvKTtcblxuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgU3R5bGUoKTtcblxuICAgICAgICAgIHZlY3RvckNvbnRleHQuc2V0U3R5bGUobWFya2VyKTtcbiAgICAgICAgICB2ZWN0b3JDb250ZXh0LmRyYXdHZW9tZXRyeShmbGFzaEdlb20sIG51bGwpO1xuXG4gICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgbWFya2VyU291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICB1bkJ5S2V5KGxpc3RlbmVyS2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29udGludWUgcG9zdHJlbmRlciBhbmltYXRpb25cbiAgICAgICAgICBmcmFtZVN0YXRlLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICB9OyAvLyBlbmQgb2YgXCJhbmltYXRpb25TdGVwXCJcblxuICAgICAgICBsaXN0ZW5lcktleSA9IG1hcmtlckxheWVyLm9uKCdwb3N0cmVuZGVyJywgYW5pbWF0aW9uU3RlcCk7XG5cbiAgICAgIH07IC8vIGVuZCBvZiBcImFuaW1hdGVNYXJrZXJcIlxuXG4gICAgICBtYXJrZXJTb3VyY2Uub24oJ2FkZGZlYXR1cmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYW5pbWF0ZU1hcmtlcihldmVudC5mZWF0dXJlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBpZiAoem9vbVR5cGUgPT09ICd6b29tJykge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhZGRNYXJrZXIsIGFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE1hcmtlcigpO1xuICAgICAgfVxuXG4gICAgfS8vIGVuZCBvZiByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uIGhhbmRsaW5nXG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICpcbiAgICogQHBhcmFtICAge1t0eXBlXX0gIGxvY2F0aW9uICBbZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgem9vbVRvKGluZGV4KSB7XG4gICAgbGV0IG1hcCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICBtYXBDb250cm9sbGVyLFxuICAgICAgem9vbVR5cGU7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXAgPSBtYXBDb250cm9sbGVyLm1hcDtcbiAgICBsZXQgbWFwVmlldyA9IG1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IGN1cnJlbnRDb29yZGluYXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50Q29vcmRpbmF0ZTtcblxuICAgIHJlc3VsdCA9IHNjb3BlLnJlc3VsdHNbaW5kZXhdO1xuICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQocmVzdWx0LmxvbiksIHBhcnNlRmxvYXQocmVzdWx0LmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGUpIHtcbiAgICAgIHZhciByZXNvbHV0aW9uID0gbWFwVmlldy5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICB2YXIgdmlld0V4dGVudCA9IG1hcFZpZXcuY2FsY3VsYXRlRXh0ZW50KG1hcC5nZXRTaXplKCkpO1xuICAgICAgaWYgKGNvbnRhaW5zQ29vcmRpbmF0ZSh2aWV3RXh0ZW50LCByZXN1bHRDb29yZGluYXRlKSkge1xuICAgICAgICB6b29tVHlwZSA9ICd6b29tJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVswXSAtIHJlc3VsdENvb3JkaW5hdGVbMF0pID4gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMV0gLSByZXN1bHRDb29yZGluYXRlWzFdKSkge1xuICAgICAgICAgIHZhciBjb29yZERpZiA9IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzBdIC0gcmVzdWx0Q29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgdmFyIGRpZkNvbnRleHQgPSBnZXRXaWR0aCh2aWV3RXh0ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb29yZERpZiA9IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzFdIC0gcmVzdWx0Q29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgZGlmQ29udGV4dCA9IGdldEhlaWdodCh2aWV3RXh0ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmREaWYgPiAwKSB7XG4gICAgICAgICAgcmVzb2x1dGlvbiAqPSBjb29yZERpZiAvIGRpZkNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgem9vbVR5cGUgPSAnYm91bmNlJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5mbHlUbyhcbiAgICAgICAgICBtYXAsIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnpvb21sZXZlbCwgdGhpcy5jb25maWcuem9vbWJvdW5kcywgcmVzdWx0LmJvdW5kaW5nX2JveCxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbiwgdGhpcy5jb25maWcuYW5pbWF0ZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCBtYXBWaWV3KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlU2VhcmNoKHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLmFuaW1hdGUsIHpvb21UeXBlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uKTtcbiAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnpvb21sZXZlbCA+PSAwKSB7XG4gICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbSh0aGlzLmNvbmZpZy56b29tbGV2ZWwpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn0iXSwibmFtZXMiOlsiR2VvU2VhcmNoUmVzdWx0cyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiR2VvU2VhcmNoIiwicHJvcHMiLCJsYW5nQ29uc3RhbnRzIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjbGlja0NvbnRyb2wiLCJiaW5kIiwiZG9uZUZ1bmN0aW9uIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsIkNUUkxfR0VPU0VBUkNIIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV4dGVybmFsIiwiaW5wdXQiLCJjb2xsYXBzZWQiLCJhZGRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImlucHV0Q2FsbGJhY2siLCJzcGFuIiwiaSIsImlubmVySFRNTCIsImNvbnRyb2xFbGVtZW50IiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXAiLCJhZGRDb250cm9sIiwiY29uZmlnIiwiZ2Vvc2VhcmNoIiwic2VhcmNoS2V5IiwidXJsIiwia2V5IiwicGFyYW1zIiwiYXBpIiwicHJvZmlsZSIsInpvb21sZXZlbCIsInNlYXJjaFpvb20iLCJ6b29tYm91bmRzIiwiem9vbUJvdW5kcyIsInF1aWNrc2VhcmNoIiwiYW5pbWF0ZSIsIm1hcmtSZXN1bHQiLCJhbmltYXRlRHVyYXRpb24iLCJyZXN1bHREdXJhdGlvbiIsInBvcHVwIiwiYXV0b3BpY2siLCJyZXN1bHRzIiwicmVzdWx0U3R5bGUiLCJwYXJzZUludCIsInNjb3BlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZG9uZSIsInJlc3VsdENvdW50IiwiY2FjaGluZyIsInBsYWNlaG9sZGVyIiwic3RhdGUiLCJvcGVuIiwicXVlcnkiLCJjdXJyZW50Q29vcmRpbmF0ZSIsIm9wZW5SZXN1bHRzIiwiY3VycmVudFJlc3VsdCIsInN0YXJ0U2VhcmNoIiwiem9vbVRvIiwiY2xvc2VSZXN1bHRzIiwiY2xvc2UiLCJjbG9zZVJlc3VsdHNDb21wbGV0ZWx5IiwibW9kZUNsYXNzIiwiZXh0RGl2IiwiZXh0UmVzdWx0c0RpdiIsImlkeCIsInNldFN0YXRlIiwicmVzdWx0c0hlYWRsaW5lIiwicmVzdWx0c0RpdiIsImxlbmd0aCIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiaGVhZGxpbmUiLCJHRU9TRUFSQ0giLCJjc3NDb25zdGFudHMiLCJHRU9TRUFSQ0hfU1RBUlQiLCJDVFJMX1NUQVJUX1NFQVJDSCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiQ0xPU0UiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInNldE9wZW5Db21wb25lbnQiLCJyZW1vdmVDbGFzcyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0b3JlVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYmx1ciIsImlnbm9yZSIsInNlYXJjaElucHV0IiwidmFsIiwiZmluZExvY2F0aW9uIiwid2hpY2giLCJkaXNyZWdhcmRTdGF0ZSIsInVuZGVmaW5lZCIsImZvY3VzIiwiZGV0YWlsT3BlblJlc3VsdHMiLCJsb2NhdGlvbiIsIm9wdF9vcHRpb25zIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzcGlubmVyIiwic2hvdyIsImZvcm1hdCIsInEiLCJsaW1pdCIsInBhcmFtIiwiaGFzT3duUHJvcGVydHkiLCJhcnJSZXN1bHRzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJob29rX3NlYXJjaCIsImhpZGUiLCJhamF4IiwiZGF0YVR5cGUiLCJmYWlsIiwiYWx3YXlzIiwibWFwVmlldyIsInJlc3VsdENvb3JkaW5hdGUiLCJjb29yZERpZiIsImRpZkNvbnRleHQiLCJ2aWV3RXh0ZW50IiwicmVzdWx0Iiwib3NtRXh0ZW50IiwicmVzb2x1dGlvbiIsInpvb21UeXBlIiwiZmx5VG8iLCJjb21wbGV0ZVNlYXJjaCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJwYXJzZUZsb2F0IiwibG9uIiwibGF0IiwiYm91bmRpbmdfYm94Iiwic2V0Q2VudGVyIiwic2V0Wm9vbSIsInBpeGVsIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsImZlYXR1cmUiLCJmb3JFYWNoRmVhdHVyZUF0UGl4ZWwiLCJsYXllciIsImhpdFRvbGVyYW5jZSIsImdldCIsInBvcHVwSW5mb3MiLCJvYmpQb3B1cCIsImdlb21ldHJ5IiwiZ2V0R2VvbWV0cnkiLCJQb2ludCIsImNvb3JkIiwiZ2V0Q29vcmRpbmF0ZXMiLCJjNGdNYXBzUG9wdXAiLCJzZXRQb3NpdGlvbiIsIm1hcERhdGEiLCJjb250ZW50IiwicG9wdXBIYW5kbGluZyIsIiRjb250ZW50IiwiaHRtbCIsIiRwb3B1cCIsIkFDVElWRSIsIkxPQURJTkciLCJhc3luYyIsInByb3h5X2ZpbGxQb3B1cCIsInBvcHVwQ29udHJvbGxlciIsImN1cnJlbnRQb3B1cCIsImFkZFBvcFVwIiwic2V0UG9wdXAiLCJhcGlfaW5mb3dpbmRvd191cmwiLCJwb3B1cEluZm8iLCJyb3V0aW5nX2xpbmsiLCJnZW9waWNrZXIiLCJwaWNrIiwib3B0aW9ucyIsImFsZXJ0IiwiU0VBUkNIX05PVF9GT1VORCIsInB1c2giLCJkaXNwbGF5X25hbWUiLCJoaWRlT3RoZXJDb21wb25lbnRzIiwiYm91bmRpbmdib3giLCJkdXJhdGlvbiIsInpvb20iLCJwYXJ0cyIsImNhbGxlZCIsImV4dGVudCIsImNhbGxiYWNrIiwiY29tcGxldGUiLCJzZXRUaW1lb3V0Iiwidmlld0ZpdCIsImZpdCIsImdldFNpemUiLCJtaW5ab29tIiwibWF4Wm9vbSIsImVhc2luZyIsImVhc2VPdXQiLCJjZW50ZXIiLCJhZGRNYXJrZXIiLCJtYXJrZXJTb3VyY2UiLCJtYXJrZXJMYXllciIsImFuaW1hdGVNYXJrZXIiLCJWZWN0b3JTb3VyY2UiLCJTdHlsZSIsImltYWdlIiwiQ2lyY2xlIiwicmFkaXVzIiwic25hcFRvUGl4ZWwiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwib3BhY2l0eSIsIlZlY3RvciIsInNvdXJjZSIsInpJbmRleCIsImFkZExheWVyIiwiYWRkRmVhdHVyZSIsIkZlYXR1cmUiLCJhbmltYXRpb25TdGVwIiwic3RhcnQiLCJsaXN0ZW5lcktleSIsIkRhdGUiLCJnZXRUaW1lIiwidmVjdG9yQ29udGV4dCIsImZyYW1lU3RhdGUiLCJlbGFwc2VkIiwiZWxhcHNlZFJhdGlvIiwiZmxhc2hHZW9tIiwiY2xvbmUiLCJ0aW1lIiwibWFya2VyIiwic2V0U3R5bGUiLCJkcmF3R2VvbWV0cnkiLCJjbGVhciIsImluZGV4IiwiZ2V0UmVzb2x1dGlvbiIsImNhbGN1bGF0ZUV4dGVudCIsIk1hdGgiLCJhYnMiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9