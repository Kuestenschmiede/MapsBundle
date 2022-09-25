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
    }

    if (props.mapController.data.geosearch.inputCssSelector) {
      var input = document.querySelector(props.mapController.data.geosearch.inputCssSelector);
      input.setAttribute('id', "c4g-geosearch-input");
      input.addEventListener('keydown', function (event) {
        _this.inputCallback(event);
      });
      _this.input = input;
    } else {
      var _input = document.createElement('input');

      _input.setAttribute('id', "c4g-geosearch-input");

      if (!props.collapsed) {
        jQuery(_input).addClass('c4g-open');
      } else {
        jQuery(_input).addClass('c4g-close');
      }

      _input.addEventListener('keydown', function (event) {
        _this.inputCallback(event);
      });

      element.appendChild(_input);
      _this.input = _input;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBWkE7QUFDQSxJQUFNQSxnQkFBZ0IsZ0JBQUdDLGlCQUFBLENBQU1DLElBQU4sQ0FBVztFQUFBLE9BQU0sOFBBQU47QUFBQSxDQUFYLENBQXpCOztBQVlBLElBQU1DLFFBQVEsZ0JBQUdGLGlCQUFBLENBQU1DLElBQU4sQ0FBVztFQUFBLE9BQU0sdUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUVxQkU7Ozs7O0VBRW5CLG1CQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFFQSxNQUFLQyxhQUFMLEdBQXFCLElBQUFDLHdCQUFBLEVBQVlGLEtBQUssQ0FBQ0csYUFBTixDQUFvQkMsSUFBaEMsQ0FBckIsQ0FIaUIsQ0FJakI7SUFDQTs7SUFDQSxNQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLGdEQUFwQjtJQUNBLE1BQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsZ0RBQXBCO0lBQ0EsSUFBSUUsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtJQUNBLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7SUFDQUMsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLE1BQUtYLGFBQUwsQ0FBbUJZLGNBQXJEO0lBQ0FGLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixPQUFwQixFQUE2QixNQUFLWCxhQUFMLENBQW1CWSxjQUFoRDtJQUNBTCxP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LEdBREosRUFDU3dHLGdCQURULEVBQzJCLEtBQUt0RyxNQUFMLENBQVlPLFNBRHZDLEVBQ2tELEtBQUtQLE1BQUwsQ0FBWVMsVUFEOUQsRUFDMEVpRyxNQUFNLENBQUNZLFlBRGpGLEVBRUksS0FBS3RILE1BQUwsQ0FBWWEsVUFGaEIsRUFFNEIsS0FBS2IsTUFBTCxDQUFZZSxjQUZ4QyxFQUV3RCxLQUFLZixNQUFMLENBQVlZLE9BRnBFLEVBRTZFLEtBQUtaLE1BQUwsQ0FBWWMsZUFGekYsRUFFMEd1RixPQUYxRztNQUdELENBdEJELE1BdUJLO1FBQ0gsS0FBS1UsY0FBTCxDQUFvQixLQUFLL0csTUFBTCxDQUFZYSxVQUFoQyxFQUE0QyxLQUFLYixNQUFMLENBQVlZLE9BQXhELEVBQWlFaUcsUUFBakUsRUFBMkUsS0FBSzdHLE1BQUwsQ0FBWWMsZUFBdkYsRUFBd0d3RixnQkFBeEcsRUFBMEgsS0FBS3RHLE1BQUwsQ0FBWWUsY0FBdEk7UUFDQWpCLEdBQUcsQ0FBQ2tILE9BQUosR0FBY08sU0FBZCxDQUF3QmpCLGdCQUF4Qjs7UUFDQSxJQUFJLEtBQUt0RyxNQUFMLENBQVlPLFNBQVosSUFBeUIsQ0FBN0IsRUFBZ0M7VUFDOUJULEdBQUcsQ0FBQ2tILE9BQUosR0FBY1EsT0FBZCxDQUFzQixLQUFLeEgsTUFBTCxDQUFZTyxTQUFsQztRQUNEO01BQ0Y7SUFFRjs7O0VBdHdCb0M2TiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2guanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuLy9pbXBvcnQge0dlb1NlYXJjaFJlc3VsdHN9IGZyb20gXCIuL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3hcIjtcbmNvbnN0IEdlb1NlYXJjaFJlc3VsdHMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybSwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtlYXNlT3V0LCBsaW5lYXJ9IGZyb20gXCJvbC9lYXNpbmdcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtDaXJjbGUsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldFZlY3RvckNvbnRleHR9IGZyb20gXCJvbC9yZW5kZXJcIjtcbmltcG9ydCB7dW5CeUtleX0gZnJvbSBcIm9sL09ic2VydmFibGVcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtjb250YWluc0Nvb3JkaW5hdGUsIGdldEhlaWdodCwgZ2V0V2lkdGh9IGZyb20gXCJvbC9leHRlbnRcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICAvLyBjb250cm9sXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9uZUZ1bmN0aW9uID0gdGhpcy5kb25lRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0dFT1NFQVJDSCk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1nZW9zZWFyY2hcIiArIFwiIG9sLWNvbnRyb2wgXCIgKyBcIm9sLXVuc2VsZWN0YWJsZVwiO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoYnV0dG9uKS5vbignY2xpY2snLCAoKT0+IHt0aGlzLmNsaWNrQ29udHJvbCgpfSk7XG5cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5pbnB1dENzc1NlbGVjdG9yKSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guaW5wdXRDc3NTZWxlY3Rvcik7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGV2ZW50KSA9PiB7dGhpcy5pbnB1dENhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKCFwcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgalF1ZXJ5KGlucHV0KS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBqUXVlcnkoaW5wdXQpLmFkZENsYXNzKCdjNGctY2xvc2UnKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGV2ZW50KSA9PiB7dGhpcy5pbnB1dENhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmNsaWNrQ29udHJvbCh0cnVlKX0pO1xuICAgICAgalF1ZXJ5KHNwYW4pLmFkZENsYXNzKCdzZWFyY2hTcGFuJyk7XG4gICAgICBsZXQgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGkuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz1cXFwiZmFyIGZhLXRpbWVzLWNpcmNsZVxcXCI+PC9pPlwiO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuXG4gICAgLy8gaW5wdXQub25rZXlkb3duID0gKGV2ZW50KSA9PiB7dGhpcy5pbnB1dENhbGxiYWNrKGV2ZW50KX07XG5cblxuXG4gICAgdGhpcy5jb250cm9sRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG5cbiAgICAvLyBlbmQgY29udHJvbFxuXG4gICAgLy8gcHJlcGFyZSBzZWFyY2gtY29uZmlndXJhdGlvblxuICAgIC8vXG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC51cmwpIHtcbiAgICAgIHRoaXMuY29uZmlnLnVybCA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gudXJsICsgXCJzZWFyY2gucGhwXCI7XG4gICAgICB0aGlzLmNvbmZpZy5rZXkgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnNlYXJjaEtleTtcbiAgICAgIHRoaXMuY29uZmlnLnBhcmFtcyA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gucGFyYW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy51cmwgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmdlb3NlYXJjaCArIFwiL1wiICsgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByb2ZpbGU7XG4gICAgfVxuICAgIC8vIHpvb21sZXZlbCB3aGVuIGNlbnRlcmluZyB0aGUgZm91bmQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy56b29tbGV2ZWwgPSBwcm9wcy5zZWFyY2hab29tO1xuICAgIC8vIHpvb20gdG8gYm91bmRzIGluc3RlYWQgb2Ygem9vbWxldmVsIHdoZW4gY2VudGVyaW5nIHRoZSBmb3VuZCBsb2NhdGlvblxuICAgIHRoaXMuY29uZmlnLnpvb21ib3VuZHMgPSBwcm9wcy56b29tQm91bmRzO1xuICAgIC8vIHF1aWNrc2VhcmNoLW9wdGlvbiAoaW5zdGFudGx5IGp1bXAgdG8gdGhlIGZpcnN0IGZvdW5kIGxvY2F0aW9uKVxuICAgIHRoaXMuY29uZmlnLnF1aWNrc2VhcmNoID0gcHJvcHMucXVpY2tzZWFyY2ggfHwgdHJ1ZTtcbiAgICAvLyBhbmltYXRpb24gKGFuaW1hdGUgZmxpZ2h0IHRvIHRhcmdldGVkIGxvY2F0aW9uKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGUgPSBwcm9wcy5hbmltYXRlO1xuICAgIC8vIGhpZ2hsaWdodCB0aGUgcmVzdWx0IGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcubWFya1Jlc3VsdCA9IHByb3BzLm1hcmtSZXN1bHQ7XG4gICAgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uID0gcHJvcHMuYW5pbWF0ZUR1cmF0aW9uO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uID0gcHJvcHMucmVzdWx0RHVyYXRpb247XG4gICAgdGhpcy5jb25maWcucG9wdXAgPSBwcm9wcy5wb3B1cDtcblxuICAgIHRoaXMuY29uZmlnLmF1dG9waWNrID0gcHJvcHMuYXV0b3BpY2s7XG4gICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5jb25maWcucmVzdWx0cyA9IHByb3BzLnJlc3VsdHM7XG4gICAgdGhpcy5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5yZXN1bHRTdHlsZTtcbiAgICBpZiAodGhpcy5jb25maWcucmVzdWx0U3R5bGUgJiYgcGFyc2VJbnQodGhpcy5jb25maWcucmVzdWx0U3R5bGUsIDEwKSA+IDApIHtcbiAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgIC8vIGNoZWNrIGlmIHN0eWxlIGlzIGxvYWRlZCwgb3RoZXJ3aXNlIGxvYWQgaXRcbiAgICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0pIHtcbiAgICAgICAgdGhpcy5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0uc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY29wZS5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzY29wZS5jb25maWcucmVzdWx0U3R5bGVdLnN0eWxlO1xuICAgICAgICAgIH19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy5jb2xsYXBzZWQgPSBwcm9wcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy5jb25maWcucmVzdWx0Q291bnQgPSBwcm9wcy5yZXN1bHRDb3VudDtcbiAgICB0aGlzLmNvbmZpZy5jYWNoaW5nID0gcHJvcHMuY2FjaGluZztcbiAgICB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBxdWVyeTogXCJcIiwgLy8gdGhlIHNlYXJjaCBxdWVyeVxuICAgICAgcmVzdWx0czogW10sXG4gICAgICBjdXJyZW50Q29vcmRpbmF0ZTogW10sXG4gICAgICBvcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICAvLyBkZXRhaWxPcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICBjdXJyZW50UmVzdWx0OiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMuaW5wdXRDYWxsYmFjayA9IHRoaXMuaW5wdXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRTZWFyY2ggPSB0aGlzLnN0YXJ0U2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b29tVG8gPSB0aGlzLnpvb21Uby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VSZXN1bHRzID0gdGhpcy5jbG9zZVJlc3VsdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5SZXN1bHRzID0gdGhpcy5vcGVuUmVzdWx0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5ID0gdGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1vZGVDbGFzcyA9IHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5leHREaXYpIHtcbiAgICAgIG1vZGVDbGFzcyArPSBcIiBleHRlcm5hbCBcIjtcbiAgICB9XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5SZXN1bHRzICYmIHRoaXMuY29uZmlnLnJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSA8R2VvU2VhcmNoUmVzdWx0cyBjbGFzc05hbWU9e21vZGVDbGFzc30gcmVzdWx0cz17dGhpcy5zdGF0ZS5yZXN1bHRzfSBleHREaXY9e3RoaXMucHJvcHMuZXh0UmVzdWx0c0Rpdn0gem9vbUZ1bmM9eyhpZHgpID0+IHt0aGlzLnNldFN0YXRlKHtjdXJyZW50UmVzdWx0OiB0aGlzLnN0YXRlLnJlc3VsdHNbaWR4XX0pOyB0aGlzLnpvb21UbyhpZHgpO319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VSZXN1bHRzPXt0aGlzLmNsb3NlUmVzdWx0c30gaGVhZGxpbmU9e3RoaXMucHJvcHMucmVzdWx0c0hlYWRsaW5lfSBjdXJyZW50UmVzdWx0PXt0aGlzLnN0YXRlLmN1cnJlbnRSZXN1bHR9IHJlc3VsdHNEaXY9e3RoaXMucHJvcHMucmVzdWx0c0Rpdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4wfSBvcGVuUmVzdWx0cz17dGhpcy5vcGVuUmVzdWx0c30gY2xvc2VDYj17dGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5fVxuICAgICAgLz47XG4gICAgfVxuICAgIGxldCBjbG9zZUJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgY2xvc2VCdG5DYiA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICBjbG9zZUJ0bkNsYXNzID0gXCJjNGctdGl0bGViYXItY2xvc2VcIjtcbiAgICAgIGNsb3NlQnRuQ2IgPSB0aGlzLmNsaWNrQ29udHJvbDtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSB0aGlzLnByb3BzLmhlYWRsaW5lO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgIGhlYWRsaW5lID0gdGhpcy5sYW5nQ29uc3RhbnRzLkdFT1NFQVJDSDtcbiAgICB9XG4gICAgbGV0IGlucHV0ID0gbnVsbFxuICAgIGlmICh0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICBpbnB1dCA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtZmlsdGVyXCJ9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbktleURvd249e3RoaXMuaW5wdXRDYWxsYmFja30gaWQ9e1wiYzRnLWdlb3NlYXJjaC1pbnB1dFwifSBwbGFjZWhvbGRlcj17dGhpcy5jb25maWcucGxhY2Vob2xkZXJ9IGFyaWEtbGFiZWw9e3RoaXMuY29uZmlnLnBsYWNlaG9sZGVyfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUfSB0eXBlPXtcImJ1dHRvblwifSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUlRfU0VBUkNIfSBvbk1vdXNlVXA9e3RoaXMuc3RhcnRTZWFyY2h9Lz5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZXh0ZXJuYWwgfHwgKHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkdFT1NFQVJDSF9XUkFQUEVSICsgXCIgXCIgKyBtb2RlQ2xhc3MgKyBcIiBjNGctaG9yaXpvblwifT5cbiAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17XCJcIn0gZGV0YWlsQnRuQ2I9e1wiXCJ9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgICAgICB7cmVzdWx0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUmVzdWx0c0NvbXBsZXRlbHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlciAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2ggJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnJlc3VsdHMpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5yZXN1bHRzICYmIHRoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhdGhpcy5wcm9wcy5leHRSZXN1bHRzRGl2KSB7XG4gICAgICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgc3RhcnRTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUKTtcbiAgICB0cnkge1xuICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICB9XG4gICAgbGV0IHNlYXJjaElucHV0ID0galF1ZXJ5KFwiI2M0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICB0aGlzLmZpbmRMb2NhdGlvbihzZWFyY2hJbnB1dC52YWwoKSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDYWxsYmFjayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgIGxldCBzZWFyY2hJbnB1dCA9IGpRdWVyeShcIiNjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICAgIHRoaXMuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjbGlja0NvbnRyb2woZGlzcmVnYXJkU3RhdGUpIHtcbiAgICBsZXQgb3BlbiA9IGRpc3JlZ2FyZFN0YXRlICE9PSB1bmRlZmluZWQgPyBkaXNyZWdhcmRTdGF0ZSA6IHRoaXMuc3RhdGUub3BlblxuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmlucHV0KS5hZGRDbGFzcygnYzRnLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICB9XG4gICAgICAvLyBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuaW5wdXQpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgLy8galF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZWFyY2hDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICAvLyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsT3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBvcGVuUmVzdWx0cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxPcGVuUmVzdWx0czogdHJ1ZX0pO1xuICB9XG5cbiAgZmluZExvY2F0aW9uKGxvY2F0aW9uLCBvcHRfb3B0aW9ucykge1xuICAgIGxldCBtYXAsXG4gICAgICBhbmltYXRlLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBtYXJrUmVzdWx0LFxuICAgICAgbWFwQ29udHJvbGxlcjtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwO1xuXG4gICAgLy8gc2hvdyBzcGlubmVyXG4gICAgbWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcblxuICAgIGFuaW1hdGUgPSB0aGlzLmNvbmZpZy5hbmltYXRlO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uO1xuICAgIG1hcmtSZXN1bHQgPSB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChvcHRfb3B0aW9ucy5hbmltYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYW5pbWF0ZSA9IG9wdF9vcHRpb25zLmFuaW1hdGU7XG4gICAgICB9XG4gICAgICBpZiAob3B0X29wdGlvbnMubWFya1Jlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1hcmtSZXN1bHQgPSBvcHRfb3B0aW9ucy5tYXJrUmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCkge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICAgIHE6IGxvY2F0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlc3VsdENvdW50KSB7XG4gICAgICAgIGRhdGEubGltaXQgPSB0aGlzLmNvbmZpZy5yZXN1bHRDb3VudDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5rZXkpIHtcbiAgICAgICAgZGF0YS5rZXkgPSB0aGlzLmNvbmZpZy5rZXk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMuY29uZmlnLnBhcmFtcykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5wYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICBkYXRhW3BhcmFtXSA9IHRoaXMuY29uZmlnLnBhcmFtc1twYXJhbV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgYXJyUmVzdWx0cyA9IHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19zZWFyY2gsIFtkYXRhLCB0aGlzXSk7XG4gICAgICBpZiAoYXJyUmVzdWx0cyAmJiBhcnJSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJSZXN1bHRzKSB7XG4gICAgICAgICAgaWYgKGFyclJlc3VsdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZUZ1bmN0aW9uKGFyclJlc3VsdHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIEFKQVggLT4gQG5vbWluYXRpbVxuICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgIHVybDogdGhpcy5jb25maWcudXJsLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5kb25lKHRoaXMuZG9uZUZ1bmN0aW9uKVxuXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIEBUT0RPXG4gICAgICAgICAgICAgIC8vIHNlbGYucmVzdWx0V3JhcHBlci5pbm5lckhUTUwgPSAnb2hvaCEnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzY29wZS5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEBUT0RPXG4gICAgfVxuXG4gIH1cbiAgZG9uZUZ1bmN0aW9uIChyZXN1bHRzKSB7XG5cbiAgICB2YXIgbWFwVmlldyxcbiAgICAgICAgY3VycmVudENvb3JkaW5hdGUsXG4gICAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICAgIGNvb3JkRGlmLFxuICAgICAgICBkaWZDb250ZXh0LFxuICAgICAgICB2aWV3RXh0ZW50LFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIG9zbUV4dGVudCxcbiAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgem9vbVR5cGUsXG4gICAgICAgIGZseVRvLFxuICAgICAgICBjb21wbGV0ZVNlYXJjaCxcbiAgICAgICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcixcbiAgICAgICAgbWFwID0gbWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgIGFuaW1hdGUgPSB0aGlzLmNvbmZpZy5hbmltYXRlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbixcbiAgICAgICAgbWFya1Jlc3VsdCA9IHRoaXMuY29uZmlnLm1hcmtSZXN1bHQ7XG5cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCAmJiByZXN1bHRzLmxlbmd0aCA+IDApe1xuICAgICAgbWFwVmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGlmIChyZXN1bHRzWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIGN1cnJlbnRDb29yZGluYXRlID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICAgICAgcmVzdWx0Q29vcmRpbmF0ZSA9IHRyYW5zZm9ybShbcGFyc2VGbG9hdChyZXN1bHQubG9uKSwgcGFyc2VGbG9hdChyZXN1bHQubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICB0aGlzLmZseVRvKFxuICAgICAgICAgICAgICBtYXAsIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnpvb21sZXZlbCwgdGhpcy5jb25maWcuem9vbWJvdW5kcywgcmVzdWx0LmJvdW5kaW5nX2JveCxcbiAgICAgICAgICAgICAgbWFya1Jlc3VsdCwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24sIGFuaW1hdGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgbWFwLmdldFZpZXcoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZVNlYXJjaCh0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5hbmltYXRlLCB6b29tVHlwZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbik7XG4gICAgICAgICAgbWFwVmlldy5zZXRDZW50ZXIocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnpvb21sZXZlbCA+PSAwKSB7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldFpvb20odGhpcy5jb25maWcuem9vbWxldmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGl4ZWwgPSBtYXAuZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZShyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSBtYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKHBpeGVsLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgICAgICAgICAgfSwge2hpdFRvbGVyYW5jZTogNH0pO1xuICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZm9yRWFjaEZlYXR1cmVBdFBpeGVsKHBpeGVsLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsYXllcjtcbiAgICAgICAgICAgIH0sIHtoaXRUb2xlcmFuY2U6IDR9KTtcbiAgICAgICAgZmVhdHVyZSA9IGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykubGVuZ3RoID4gMCA/IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpWzBdIDogZmVhdHVyZTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBvcHVwKSB7XG4gICAgICAgICAgdmFyIHBvcHVwSW5mb3MgPSB7fTtcbiAgICAgICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgncG9wdXAnKSkge1xuICAgICAgICAgICAgLy8gc2luZ2xlIFBPSVxuICAgICAgICAgICAgcG9wdXBJbmZvcyA9IGZlYXR1cmUuZ2V0KCdwb3B1cCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGF5ZXIgJiYgbGF5ZXIucG9wdXApIHtcbiAgICAgICAgICAgIHBvcHVwSW5mb3MgPSBsYXllci5wb3B1cDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVhdHVyZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgb2JqUG9wdXA7XG4gICAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICAgICAgICB2YXIgY29vcmQgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGNvb3JkID0gcmVzdWx0Q29vcmRpbmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5zZXRQb3NpdGlvbihjb29yZCk7XG4gICAgICAgICAgICBsZXQgbWFwRGF0YSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgICAgICAgaWYgKHBvcHVwSW5mb3MuY29udGVudCkge1xuICAgICAgICAgICAgICBpZiAobWFwRGF0YS5wb3B1cEhhbmRsaW5nICE9PSAnMycpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYzRnTWFwc1BvcHVwLiRjb250ZW50ID8gd2luZG93LmM0Z01hcHNQb3B1cC4kY29udGVudC5odG1sKCcnKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jNGdNYXBzUG9wdXAuJHBvcHVwID8gd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkxPQURJTkcpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgd2luZG93LmM0Z01hcHNQb3B1cC5zcGlubmVyLnNob3coKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChwb3B1cEluZm9zLmFzeW5jID09PSBmYWxzZSB8fCBwb3B1cEluZm9zLmFzeW5jID09ICcwJykge1xuICAgICAgICAgICAgICAgIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm9zO1xuICAgICAgICAgICAgICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfZmlsbFBvcHVwLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBvYmpQb3B1cCxcbiAgICAgICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkucG9wdXBDb250cm9sbGVyLmN1cnJlbnRQb3B1cCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LnBvcHVwQ29udHJvbGxlci5hZGRQb3BVcChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5wb3B1cENvbnRyb2xsZXIuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmFwaV9pbmZvd2luZG93X3VybCArICcvJyArIHBvcHVwSW5mb3MuY29udGVudFxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBwb3B1cEluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiBwb3B1cEluZm9zLmFzeW5jLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwOiBwb3B1cEluZm9zLnBvcHVwLFxuICAgICAgICAgICAgICAgICAgICByb3V0aW5nX2xpbms6IHBvcHVwSW5mb3Mucm91dGluZ19saW5rXG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgICAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm87XG4gICAgICAgICAgICAgICAgICBvYmpQb3B1cC5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG5cbiAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIHBvcHVwIGhvb2sgZm9yIHBsdWdpbiBzcGVjaWZpYyBwb3B1cCBjb250ZW50XG4gICAgICAgICAgICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5wcm94eV9maWxsUG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICBwb3B1cDogb2JqUG9wdXAsXG4gICAgICAgICAgICAgICAgICAgICAgbWFwQ29udHJvbGxlcjogc2NvcGUucHJvcHMubWFwQ29udHJvbGxlclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5wb3B1cENvbnRyb2xsZXIuY3VycmVudFBvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkucG9wdXBDb250cm9sbGVyLmFkZFBvcFVwKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkucG9wdXBDb250cm9sbGVyLnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgd2luZG93LmM0Z01hcHNQb3B1cC4kY29udGVudC5odG1sKCcnKTtcbiAgICAgICAgICAgIC8vICAgd2luZG93LmM0Z01hcHNQb3B1cC4kcG9wdXAuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkxPQURJTkcpO1xuICAgICAgICAgICAgLy8gICB3aW5kb3cuYzRnTWFwc1BvcHVwLnNwaW5uZXIuc2hvdygpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgaWYgKHBvcHVwSW5mb3MuYXN5bmMgPT09IGZhbHNlIHx8IHBvcHVwSW5mb3MuYXN5bmMgPT0gJzAnKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIG9ialBvcHVwID0ge307XG4gICAgICAgICAgICAvLyAgICAgb2JqUG9wdXAucG9wdXAgPSBwb3B1cEluZm9zO1xuICAgICAgICAgICAgLy8gICAgIG9ialBvcHVwLmZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICAgICAgLy8gICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAvLyAgICAgLy8gQ2FsbCB0aGUgcG9wdXAgaG9vayBmb3IgcGx1Z2luIHNwZWNpZmljIHBvcHVwIGNvbnRlbnRcbiAgICAgICAgICAgIC8vICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MucHJveHlfZmlsbFBvcHVwLCBvYmpQb3B1cCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIucHJveHkuc2V0UG9wdXAob2JqUG9wdXApO1xuICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIC8vICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIC8vICAgICAgIHVybDogdGhpcy5hcGlfaW5mb3dpbmRvd191cmwgKyAnLycgKyBwb3B1cEluZm9zLmNvbnRlbnQsXG4gICAgICAgICAgICAvLyAgICAgICBkb25lOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB2YXIgcG9wdXBJbmZvID0ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgIGFzeW5jOiBwb3B1cEluZm9zLmFzeW5jLFxuICAgICAgICAgICAgLy8gICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICBwb3B1cDogcG9wdXBJbmZvcy5wb3B1cCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICByb3V0aW5nX2xpbms6IHBvcHVwSW5mb3Mucm91dGluZ19saW5rXG4gICAgICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBvYmpQb3B1cCA9IHt9O1xuICAgICAgICAgICAgLy8gICAgICAgICBvYmpQb3B1cC5wb3B1cCA9IHBvcHVwSW5mbztcbiAgICAgICAgICAgIC8vICAgICAgICAgb2JqUG9wdXAuZmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgICAgICAvLyAgICAgICAgIG9ialBvcHVwLmxheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyBDYWxsIHRoZSBwb3B1cCBob29rIGZvciBwbHVnaW4gc3BlY2lmaWMgcG9wdXAgY29udGVudFxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnByb3h5X2ZpbGxQb3B1cCwgb2JqUG9wdXApO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFBvcHVwKG9ialBvcHVwKTtcbiAgICAgICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cC5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93ICYmIHdpbmRvdy5jNGdNYXBzUG9wdXAgJiYgd2luZG93LmM0Z01hcHNQb3B1cC5wb3B1cCkge1xuICAgICAgICAgICAgalF1ZXJ5KHdpbmRvdy5jNGdNYXBzUG9wdXAucG9wdXApLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF1dG9waWNrICYmIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLmdlb3BpY2tlci5waWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIucGljayhyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgICAgICBhbGVydChsYW5nQ29uc3RhbnRzLlNFQVJDSF9OT1RfRk9VTkQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVzdWx0cykge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnJlc3VsdHNbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogcmVzdWx0cywgb3BlbjogdHJ1ZSwgY3VycmVudENvb3JkaW5hdGU6IGN1cnJlbnRDb29yZGluYXRlLCBvcGVuUmVzdWx0czogdHJ1ZSwgY3VycmVudFJlc3VsdDogcmVzdWx0c1swXX0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGZseVRvKG1hcCwgbG9jYXRpb24sIHpvb21sZXZlbCwgem9vbWJvdW5kcywgYm91bmRpbmdib3gsIG1hcmtSZXN1bHQsIHJlc3VsdER1cmF0aW9uLCBhbmltYXRlLCBhbmltYXRlRHVyYXRpb24sIG1hcFZpZXcpIHtcbiAgICBsZXQgZHVyYXRpb24gPSBhbmltYXRlRHVyYXRpb247XG4gICAgbGV0IHpvb20gPSB6b29tbGV2ZWw7XG4gICAgbGV0IHBhcnRzID0gMjtcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgbGV0IGV4dGVudDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhjb21wbGV0ZSkge1xuICAgICAgLS1wYXJ0cztcbiAgICAgIGlmIChjYWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnRzID09PSAwIHx8ICFjb21wbGV0ZSkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh6b29tYm91bmRzICYmIGJvdW5kaW5nYm94ICYmIGJvdW5kaW5nYm94WzBdICE9PSBudWxsICYmXG4gICAgICAgICAgYm91bmRpbmdib3hbMV0gIT09IG51bGwgJiYgYm91bmRpbmdib3hbMl0gIT09IG51bGwgJiZcbiAgICAgICAgICBib3VuZGluZ2JveFszXSAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyB0cmFuc2xhdGUgb3NtLWV4dGVudCB0byBvbDMtZXh0ZW50XG5cbiAgICAgICAgICBsZXQgb3NtRXh0ZW50ID0gW107XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsyXSkpO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMF0pKTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzNdKSk7XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsxXSkpO1xuXG4gICAgICAgICAgZXh0ZW50ID0gdHJhbnNmb3JtRXh0ZW50KG9zbUV4dGVudCwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcblxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2aWV3Rml0ID0gbWFwVmlldy5maXQoXG4gICAgICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICAgICAgbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1pblpvb206IG1hcFZpZXcuZ2V0KCdtaW5ab29tJykgfHwgMixcbiAgICAgICAgICAgICAgICBtYXhab29tOiB6b29tIHx8IG1hcFZpZXcuZ2V0KCdtYXhab29tJykgfHwgMTgsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMixcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGVhc2VPdXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LCBkdXJhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLmNvbXBsZXRlU2VhcmNoKG1hcmtSZXN1bHQsIGFuaW1hdGUsIFwiYm91bmNlXCIsIGFuaW1hdGVEdXJhdGlvbiwgbG9jYXRpb24sIHJlc3VsdER1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgY2VudGVyOiBsb2NhdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0sIGNhbGxiYWNrKTtcblxuICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICB6b29tOiB6b29tIC0gMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDJcbiAgICB9LCB7XG4gICAgICB6b29tOiB6b29tLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgIH0sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBsZXRlU2VhcmNoKG1hcmtSZXN1bHQsIGFuaW1hdGUsIHpvb21UeXBlLCBhbmltYXRpb25EdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgcmVzdWx0RHVyYXRpb24pIHtcbiAgICAvLyByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uXG4gICAgaWYgKG1hcmtSZXN1bHQpIHtcbiAgICAgIGxldCBhZGRNYXJrZXIsXG4gICAgICAgIG1hcmtlclNvdXJjZSxcbiAgICAgICAgbWFya2VyTGF5ZXIsXG4gICAgICAgIGFuaW1hdGVNYXJrZXI7XG5cbiAgICAgIG1hcmtlclNvdXJjZSA9IG5ldyBWZWN0b3JTb3VyY2UoKTtcbiAgICAgIGxldCBzdHlsZSA9IHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlO1xuICAgICAgaWYgKCFzdHlsZSB8fCBzdHlsZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgc3R5bGUgPSBbbmV3IFN0eWxlKHtcbiAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IDcsXG4gICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogMjAsXG4gICAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgICByYWRpdXM6IDMzLFxuICAgICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIDAuOSArICcpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIG1hcmtlckxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgc291cmNlOiBtYXJrZXJTb3VyY2UsXG4gICAgICAgIHpJbmRleDogOTk5OTlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihtYXJrZXJMYXllcik7XG5cbiAgICAgIGFkZE1hcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFya2VyU291cmNlLmFkZEZlYXR1cmUoXG4gICAgICAgICAgbmV3IEZlYXR1cmUoXG4gICAgICAgICAgICBuZXcgUG9pbnQocmVzdWx0Q29vcmRpbmF0ZSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlTWFya2VyID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvblN0ZXAsXG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgbGlzdGVuZXJLZXk7XG5cbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZHVyYXRpb24gPSByZXN1bHREdXJhdGlvbjtcblxuICAgICAgICBhbmltYXRpb25TdGVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgbGV0IHZlY3RvckNvbnRleHQsXG4gICAgICAgICAgICBmcmFtZVN0YXRlLFxuICAgICAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgICAgIGVsYXBzZWRSYXRpbyxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICBmbGFzaEdlb207XG5cbiAgICAgICAgICB2ZWN0b3JDb250ZXh0ID0gZ2V0VmVjdG9yQ29udGV4dChldmVudCk7XG4gICAgICAgICAgZnJhbWVTdGF0ZSA9IGV2ZW50LmZyYW1lU3RhdGU7XG4gICAgICAgICAgZmxhc2hHZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCk7XG4gICAgICAgICAgZWxhcHNlZCA9IGZyYW1lU3RhdGUudGltZSAtIHN0YXJ0O1xuICAgICAgICAgIGVsYXBzZWRSYXRpbyA9IGVsYXBzZWQgLyBkdXJhdGlvbjtcbiAgICAgICAgICByYWRpdXMgPSBsaW5lYXIoMSAtIGVsYXBzZWRSYXRpbykgKiAxMDA7XG4gICAgICAgICAgaWYgKHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wYWNpdHkgPSBsaW5lYXIoZWxhcHNlZFJhdGlvKTtcblxuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgU3R5bGUoKTtcblxuICAgICAgICAgIHZlY3RvckNvbnRleHQuc2V0U3R5bGUobWFya2VyKTtcbiAgICAgICAgICB2ZWN0b3JDb250ZXh0LmRyYXdHZW9tZXRyeShmbGFzaEdlb20sIG51bGwpO1xuXG4gICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgbWFya2VyU291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICB1bkJ5S2V5KGxpc3RlbmVyS2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29udGludWUgcG9zdHJlbmRlciBhbmltYXRpb25cbiAgICAgICAgICBmcmFtZVN0YXRlLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICB9OyAvLyBlbmQgb2YgXCJhbmltYXRpb25TdGVwXCJcblxuICAgICAgICBsaXN0ZW5lcktleSA9IG1hcmtlckxheWVyLm9uKCdwb3N0cmVuZGVyJywgYW5pbWF0aW9uU3RlcCk7XG5cbiAgICAgIH07IC8vIGVuZCBvZiBcImFuaW1hdGVNYXJrZXJcIlxuXG4gICAgICBtYXJrZXJTb3VyY2Uub24oJ2FkZGZlYXR1cmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYW5pbWF0ZU1hcmtlcihldmVudC5mZWF0dXJlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBpZiAoem9vbVR5cGUgPT09ICd6b29tJykge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhZGRNYXJrZXIsIGFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE1hcmtlcigpO1xuICAgICAgfVxuXG4gICAgfS8vIGVuZCBvZiByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uIGhhbmRsaW5nXG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICpcbiAgICogQHBhcmFtICAge1t0eXBlXX0gIGxvY2F0aW9uICBbZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgem9vbVRvKGluZGV4KSB7XG4gICAgbGV0IG1hcCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICBtYXBDb250cm9sbGVyLFxuICAgICAgem9vbVR5cGU7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXAgPSBtYXBDb250cm9sbGVyLm1hcDtcbiAgICBsZXQgbWFwVmlldyA9IG1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IGN1cnJlbnRDb29yZGluYXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50Q29vcmRpbmF0ZTtcblxuICAgIHJlc3VsdCA9IHNjb3BlLnJlc3VsdHNbaW5kZXhdO1xuICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQocmVzdWx0LmxvbiksIHBhcnNlRmxvYXQocmVzdWx0LmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGUpIHtcbiAgICAgIHZhciByZXNvbHV0aW9uID0gbWFwVmlldy5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICB2YXIgdmlld0V4dGVudCA9IG1hcFZpZXcuY2FsY3VsYXRlRXh0ZW50KG1hcC5nZXRTaXplKCkpO1xuICAgICAgaWYgKGNvbnRhaW5zQ29vcmRpbmF0ZSh2aWV3RXh0ZW50LCByZXN1bHRDb29yZGluYXRlKSkge1xuICAgICAgICB6b29tVHlwZSA9ICd6b29tJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVswXSAtIHJlc3VsdENvb3JkaW5hdGVbMF0pID4gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMV0gLSByZXN1bHRDb29yZGluYXRlWzFdKSkge1xuICAgICAgICAgIHZhciBjb29yZERpZiA9IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzBdIC0gcmVzdWx0Q29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgdmFyIGRpZkNvbnRleHQgPSBnZXRXaWR0aCh2aWV3RXh0ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb29yZERpZiA9IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzFdIC0gcmVzdWx0Q29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgZGlmQ29udGV4dCA9IGdldEhlaWdodCh2aWV3RXh0ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmREaWYgPiAwKSB7XG4gICAgICAgICAgcmVzb2x1dGlvbiAqPSBjb29yZERpZiAvIGRpZkNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgem9vbVR5cGUgPSAnYm91bmNlJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5mbHlUbyhcbiAgICAgICAgICBtYXAsIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnpvb21sZXZlbCwgdGhpcy5jb25maWcuem9vbWJvdW5kcywgcmVzdWx0LmJvdW5kaW5nX2JveCxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbiwgdGhpcy5jb25maWcuYW5pbWF0ZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCBtYXBWaWV3KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlU2VhcmNoKHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLmFuaW1hdGUsIHpvb21UeXBlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uKTtcbiAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnpvb21sZXZlbCA+PSAwKSB7XG4gICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbSh0aGlzLmNvbmZpZy56b29tbGV2ZWwpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn0iXSwibmFtZXMiOlsiR2VvU2VhcmNoUmVzdWx0cyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiR2VvU2VhcmNoIiwicHJvcHMiLCJsYW5nQ29uc3RhbnRzIiwiZ2V0TGFuZ3VhZ2UiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImNsaWNrQ29udHJvbCIsImJpbmQiLCJkb25lRnVuY3Rpb24iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiQ1RSTF9HRU9TRUFSQ0giLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImpRdWVyeSIsIm9uIiwiZXh0ZXJuYWwiLCJnZW9zZWFyY2giLCJpbnB1dENzc1NlbGVjdG9yIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW5wdXRDYWxsYmFjayIsImNvbGxhcHNlZCIsImFkZENsYXNzIiwic3BhbiIsImkiLCJpbm5lckhUTUwiLCJjb250cm9sRWxlbWVudCIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwIiwiYWRkQ29udHJvbCIsImNvbmZpZyIsInNlYXJjaEtleSIsInVybCIsImtleSIsInBhcmFtcyIsImFwaSIsInByb2ZpbGUiLCJ6b29tbGV2ZWwiLCJzZWFyY2hab29tIiwiem9vbWJvdW5kcyIsInpvb21Cb3VuZHMiLCJxdWlja3NlYXJjaCIsImFuaW1hdGUiLCJtYXJrUmVzdWx0IiwiYW5pbWF0ZUR1cmF0aW9uIiwicmVzdWx0RHVyYXRpb24iLCJwb3B1cCIsImF1dG9waWNrIiwicmVzdWx0cyIsInJlc3VsdFN0eWxlIiwicGFyc2VJbnQiLCJzY29wZSIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJzdHlsZSIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJyZXN1bHRDb3VudCIsImNhY2hpbmciLCJwbGFjZWhvbGRlciIsInN0YXRlIiwib3BlbiIsInF1ZXJ5IiwiY3VycmVudENvb3JkaW5hdGUiLCJvcGVuUmVzdWx0cyIsImN1cnJlbnRSZXN1bHQiLCJzdGFydFNlYXJjaCIsInpvb21UbyIsImNsb3NlUmVzdWx0cyIsImNsb3NlIiwiY2xvc2VSZXN1bHRzQ29tcGxldGVseSIsIm1vZGVDbGFzcyIsImV4dERpdiIsImV4dFJlc3VsdHNEaXYiLCJpZHgiLCJzZXRTdGF0ZSIsInJlc3VsdHNIZWFkbGluZSIsInJlc3VsdHNEaXYiLCJsZW5ndGgiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsImhlYWRsaW5lIiwiR0VPU0VBUkNIIiwiY3NzQ29uc3RhbnRzIiwiR0VPU0VBUkNIX1NUQVJUIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIkNMT1NFIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJzZXRPcGVuQ29tcG9uZW50IiwicmVtb3ZlQ2xhc3MiLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdG9yZVZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImlnbm9yZSIsInNlYXJjaElucHV0IiwidmFsIiwiZmluZExvY2F0aW9uIiwid2hpY2giLCJkaXNyZWdhcmRTdGF0ZSIsInVuZGVmaW5lZCIsImZvY3VzIiwiZGV0YWlsT3BlblJlc3VsdHMiLCJsb2NhdGlvbiIsIm9wdF9vcHRpb25zIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzcGlubmVyIiwic2hvdyIsImZvcm1hdCIsInEiLCJsaW1pdCIsInBhcmFtIiwiaGFzT3duUHJvcGVydHkiLCJhcnJSZXN1bHRzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJob29rX3NlYXJjaCIsImhpZGUiLCJhamF4IiwiZGF0YVR5cGUiLCJmYWlsIiwiYWx3YXlzIiwibWFwVmlldyIsInJlc3VsdENvb3JkaW5hdGUiLCJjb29yZERpZiIsImRpZkNvbnRleHQiLCJ2aWV3RXh0ZW50IiwicmVzdWx0Iiwib3NtRXh0ZW50IiwicmVzb2x1dGlvbiIsInpvb21UeXBlIiwiZmx5VG8iLCJjb21wbGV0ZVNlYXJjaCIsImdldFZpZXciLCJnZXRDZW50ZXIiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwibG9uIiwibGF0IiwiYm91bmRpbmdfYm94Iiwic2V0Q2VudGVyIiwic2V0Wm9vbSIsInBpeGVsIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsImZlYXR1cmUiLCJmb3JFYWNoRmVhdHVyZUF0UGl4ZWwiLCJsYXllciIsImhpdFRvbGVyYW5jZSIsImdldCIsInBvcHVwSW5mb3MiLCJvYmpQb3B1cCIsImdlb21ldHJ5IiwiZ2V0R2VvbWV0cnkiLCJQb2ludCIsImNvb3JkIiwiZ2V0Q29vcmRpbmF0ZXMiLCJjNGdNYXBzUG9wdXAiLCJzZXRQb3NpdGlvbiIsIm1hcERhdGEiLCJjb250ZW50IiwicG9wdXBIYW5kbGluZyIsIiRjb250ZW50IiwiaHRtbCIsIiRwb3B1cCIsIkFDVElWRSIsIkxPQURJTkciLCJhc3luYyIsInByb3h5X2ZpbGxQb3B1cCIsInBvcHVwQ29udHJvbGxlciIsImN1cnJlbnRQb3B1cCIsImFkZFBvcFVwIiwic2V0UG9wdXAiLCJhcGlfaW5mb3dpbmRvd191cmwiLCJwb3B1cEluZm8iLCJyb3V0aW5nX2xpbmsiLCJnZW9waWNrZXIiLCJwaWNrIiwib3B0aW9ucyIsImFsZXJ0IiwiU0VBUkNIX05PVF9GT1VORCIsInB1c2giLCJkaXNwbGF5X25hbWUiLCJoaWRlT3RoZXJDb21wb25lbnRzIiwiYm91bmRpbmdib3giLCJkdXJhdGlvbiIsInpvb20iLCJwYXJ0cyIsImNhbGxlZCIsImV4dGVudCIsImNhbGxiYWNrIiwiY29tcGxldGUiLCJ0cmFuc2Zvcm1FeHRlbnQiLCJzZXRUaW1lb3V0Iiwidmlld0ZpdCIsImZpdCIsImdldFNpemUiLCJtaW5ab29tIiwibWF4Wm9vbSIsImVhc2luZyIsImVhc2VPdXQiLCJjZW50ZXIiLCJhZGRNYXJrZXIiLCJtYXJrZXJTb3VyY2UiLCJtYXJrZXJMYXllciIsImFuaW1hdGVNYXJrZXIiLCJWZWN0b3JTb3VyY2UiLCJTdHlsZSIsImltYWdlIiwiQ2lyY2xlIiwicmFkaXVzIiwic25hcFRvUGl4ZWwiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwib3BhY2l0eSIsIlZlY3RvciIsInNvdXJjZSIsInpJbmRleCIsImFkZExheWVyIiwiYWRkRmVhdHVyZSIsIkZlYXR1cmUiLCJhbmltYXRpb25TdGVwIiwic3RhcnQiLCJsaXN0ZW5lcktleSIsIkRhdGUiLCJnZXRUaW1lIiwidmVjdG9yQ29udGV4dCIsImZyYW1lU3RhdGUiLCJlbGFwc2VkIiwiZWxhcHNlZFJhdGlvIiwiZmxhc2hHZW9tIiwiZ2V0VmVjdG9yQ29udGV4dCIsImNsb25lIiwidGltZSIsImxpbmVhciIsIm1hcmtlciIsInNldFN0eWxlIiwiZHJhd0dlb21ldHJ5IiwiY2xlYXIiLCJ1bkJ5S2V5IiwiaW5kZXgiLCJnZXRSZXNvbHV0aW9uIiwiY2FsY3VsYXRlRXh0ZW50IiwiY29udGFpbnNDb29yZGluYXRlIiwiTWF0aCIsImFicyIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==