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
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
//import {GeoSearchResults} from "./c4g-geosearch-results.jsx";
var GeoSearchResults = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-geosearch-results_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-geosearch-results.jsx */ "./src/Resources/public/js/components/c4g-geosearch-results.jsx"));
});
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var GeoSearch = exports["default"] = /*#__PURE__*/function (_Component) {
  function GeoSearch(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, GeoSearch);
    _this = _callSuper(this, GeoSearch, [props]);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    // control
    // if (this.props.collapsed) {
    _this.clickControl = _this.clickControl.bind(_this);
    _this.doneFunction = _this.doneFunction.bind(_this);
    var element = document.createElement('div');
    var button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = _this.langConstants.CTRL_GEOSEARCH;
      button.appendChild(span);
    } else {
      button.setAttribute('aria-label', _this.langConstants.CTRL_GEOSEARCH);
      button.setAttribute('title', _this.langConstants.CTRL_GEOSEARCH);
    }
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
      input.addEventListener('input', function (event) {
        _this.deleteCallback(event);
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
      _input.addEventListener('input', function (event) {
        _this.deleteCallback(event);
      });
      element.appendChild(_input);
      _this.input = _input;
      var _span = document.createElement('span');
      _span.addEventListener('click', function () {
        _this.clickControl(true);
      });
      jQuery(_span).addClass('searchSpan');
      var i = document.createElement('i');
      i.innerHTML = "<i class=\"far fa-times-circle\"></i>";
      _span.appendChild(i);
      element.appendChild(_span);
    }
    _this.controlElement = element;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    var index = props.mapController.arrComponents.findIndex(function (element) {
      return element.name === "geosearch";
    });
    props.mapController.arrComponents[index].control = control;
    props.mapController.mapsControls.controls.geosearch = control;
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
    }
    // zoomlevel when centering the found location
    _this.config.zoomlevel = props.searchZoom;
    // zoom to bounds instead of zoomlevel when centering the found location
    _this.config.zoombounds = props.zoomBounds;
    // quicksearch-option (instantly jump to the first found location)
    _this.config.quicksearch = props.quicksearch || true;
    // animation (animate flight to targeted location)
    _this.config.animate = props.animate;
    // highlight the result location
    _this.config.markResult = props.markResult;
    _this.config.animateDuration = props.animateDuration;
    _this.config.resultDuration = props.resultDuration;
    _this.config.popup = props.popup;
    _this.config.autopick = props.autopick;
    _this.config.mapController = props.mapController;
    _this.config.results = props.results;
    _this.config.resultStyle = props.resultStyle;
    if (_this.config.resultStyle && parseInt(_this.config.resultStyle, 10) > 0) {
      var scope = _this;
      // check if style is loaded, otherwise load it
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
    _this.inputCallback = _this.inputCallback.bind(_this);
    _this.deleteCallback = _this.deleteCallback.bind(_this);
    _this.startSearch = _this.startSearch.bind(_this);
    _this.zoomTo = _this.zoomTo.bind(_this);
    _this.closeResults = _this.closeResults.bind(_this);
    _this.openResults = _this.openResults.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.closeResultsCompletely = _this.closeResultsCompletely.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(GeoSearch, _Component);
  return (0, _createClass2["default"])(GeoSearch, [{
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
          onInput: this.deleteCallback,
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
        if (this.props.mapController.data.caching) {
          var panelVal = _c4gMapsUtils.utils.getValue('panel');
          if (panelVal === "GeoSearch" && !this.state.open) {
            _c4gMapsUtils.utils.storeValue('panel', "");
          } else if (panelVal !== "GeoSearch" && this.state.open) {
            _c4gMapsUtils.utils.storeValue('panel', "GeoSearch");
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
    key: "deleteCallback",
    value: function deleteCallback(event) {
      event.stopPropagation();
      var searchInput = jQuery("#c4g-geosearch-input");
      var value = searchInput.val();
      if (this.lastVal !== value) {
        this.lastVal = value;
        if (value.length < 1) {
          var index = this.props.mapController.arrComponents.findIndex(function (element) {
            return element.name === "layerswitcher";
          });
          if (index > -1 && this.props.mapController.arrComponents[index]) {
            var component = this.props.mapController.arrComponents[index].component;
            component.applyOldState("searchResults");
          }
        }
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
        }
        // jQuery(this.props.mapController.searchContainer).removeClass("c4g-open").addClass("c4g-close");
      } else {
        // this.props.mapController.hideOtherComponents(this);
        this.setState({
          open: true
        });
        if (!this.props.external) {
          jQuery(this.input).removeClass('c4g-close').addClass('c4g-open');
          this.input.focus();
        }
        // jQuery(this.props.mapController.searchContainer).removeClass("c4g-close").addClass("c4g-open");
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
      map = mapController.map;

      // show spinner
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
          }).done(this.doneFunction).fail(function () {
            // @TODO
            // self.resultWrapper.innerHTML = 'ohoh!';
          }).always(function () {
            scope.config.mapController.spinner.hide();
          });
          if (mapController.data.geosearch.showOnlyResults) {
            var index = mapController.arrComponents.findIndex(function (element) {
              return element.name === "layerswitcher";
            });
            if (index > -1 && mapController.arrComponents[index]) {
              var component = mapController.arrComponents[index].component;
              if (component.buttonEnabled) {
                component.toggleAllLayers("searchResults");
              }
            }
          }
        }
      } else {
        // @TODO
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
          if (result.hasOwnProperty('uuid')) {
            var index = mapController.arrComponents.findIndex(function (element) {
              return element.name === "layerswitcher";
            });
            var component = false;
            if (index > -1 && mapController.arrComponents[index]) {
              component = mapController.arrComponents[index].component;
            }
            var ids = [];
            var coordinates = [];
            for (var i in this.results) {
              if (this.results.hasOwnProperty(i)) {
                if (this.results[i].hasOwnProperty('uuid')) {
                  ids.push(this.results[i].uuid);
                }
                if (this.results[i].hasOwnProperty('lon') && this.results[i].hasOwnProperty('lat') && this.results[i].lon && this.results[i].lat) {
                  coordinates.push((0, _proj.transform)([parseFloat(this.results[i].lon), parseFloat(this.results[i].lat)], 'EPSG:4326', 'EPSG:3857'));
                }
              }
            }
            if (mapController.data.geosearch.showOnlyResults && component) {
              component.toggleSpecificLayers(ids);
            }
            var size = map.getSize();
            var extent = (0, _extent.boundingExtent)(coordinates);
            var fitOptions = {
              duration: 250,
              padding: [size[1] / 10, size[0] / 10, size[1] / 10, size[0] / 10]
            };
            if (map.getView() && coordinates.length > 0 && extent && fitOptions) {
              map.getView().fit(extent, fitOptions);
            }
          } else {
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
            if (this.config.autopick && this.config.mapController.geopicker && typeof this.config.mapController.geopicker.pick === 'function') {
              this.config.mapController.geopicker.pick(resultCoordinate);
            }
          }
        } else {
          var langConstants = (0, _c4gMapsI18n.getLanguage)(this.options.mapController.data);
          alert(langConstants.SEARCH_NOT_FOUND);
        }
        if (this.results) {
          this.props.mapController.hideOtherComponents(this);
          this.setState({
            results: this.results,
            open: true,
            currentCoordinate: currentCoordinate,
            openResults: true,
            currentResult: results[0]
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
      var _this3 = this;
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
            }
            // continue postrender animation
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
      if (this.config.popup) {
        var pixel = this.props.mapController.map.getPixelFromCoordinate(resultCoordinate);
        window.setTimeout(function () {
          _this3.props.mapController.map.dispatchEvent({
            type: 'click',
            pixel: pixel
          }, 100);
        });
      }
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
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLFlBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxtQkFBQTtBQUdBLElBQUFJLEtBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxPQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sT0FBQSxHQUFBTixtQkFBQTtBQUNBLElBQUFPLE1BQUEsR0FBQVAsbUJBQUE7QUFDQSxJQUFBUSxNQUFBLEdBQUFSLG1CQUFBO0FBQ0EsSUFBQVMsR0FBQSxHQUFBVCxtQkFBQTtBQUNBLElBQUFVLEtBQUEsR0FBQVYsbUJBQUE7QUFDQSxJQUFBVyxPQUFBLEdBQUFYLG1CQUFBO0FBQ0EsSUFBQVksV0FBQSxHQUFBWixtQkFBQTtBQUNBLElBQUFhLGFBQUEsR0FBQWIsbUJBQUE7QUFDQSxJQUFBYyxPQUFBLEdBQUFkLG1CQUFBO0FBQXlDLFNBQUFlLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENBQUE7QUFBQSxTQUFBakIsd0JBQUFpQixDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxJQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUksVUFBQSxTQUFBSixDQUFBLGVBQUFBLENBQUEsZ0JBQUFLLFFBQUEsQ0FBQUwsQ0FBQSwwQkFBQUEsQ0FBQSxzQkFBQUEsQ0FBQSxRQUFBRyxDQUFBLEdBQUFKLHdCQUFBLENBQUFHLENBQUEsT0FBQUMsQ0FB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Z0JBQWdCLEVBQUUsSUFBSSxDQUFDbEksTUFBTSxDQUFDTyxTQUFTLEVBQUUsSUFBSSxDQUFDUCxNQUFNLENBQUNTLFVBQVUsRUFBRTZILE1BQU0sQ0FBQ3lCLFlBQVksRUFDekYsSUFBSSxDQUFDL0osTUFBTSxDQUFDYSxVQUFVLEVBQUUsSUFBSSxDQUFDYixNQUFNLENBQUNlLGNBQWMsRUFBRSxJQUFJLENBQUNmLE1BQU0sQ0FBQ1ksT0FBTyxFQUFFLElBQUksQ0FBQ1osTUFBTSxDQUFDYyxlQUFlLEVBQUVtSCxPQUFPLENBQUM7TUFDcEgsQ0FBQyxNQUNJO1FBQ0gsSUFBSSxDQUFDVSxjQUFjLENBQUMsSUFBSSxDQUFDM0ksTUFBTSxDQUFDYSxVQUFVLEVBQUUsSUFBSSxDQUFDYixNQUFNLENBQUNZLE9BQU8sRUFBRTZILFFBQVEsRUFBRSxJQUFJLENBQUN6SSxNQUFNLENBQUNjLGVBQWUsRUFBRW9ILGdCQUFnQixFQUFFLElBQUksQ0FBQ2xJLE1BQU0sQ0FBQ2UsY0FBYyxDQUFDO1FBQ3JKNEYsR0FBRyxDQUFDaUMsT0FBTyxDQUFDLENBQUMsQ0FBQ29CLFNBQVMsQ0FBQzlCLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDbEksTUFBTSxDQUFDTyxTQUFTLElBQUksQ0FBQyxFQUFFO1VBQzlCb0csR0FBRyxDQUFDaUMsT0FBTyxDQUFDLENBQUMsQ0FBQ3FCLE9BQU8sQ0FBQyxJQUFJLENBQUNqSyxNQUFNLENBQUNPLFNBQVMsQ0FBQztRQUM5QztNQUNGO0lBRUY7RUFBQztBQUFBLEVBN3NCb0NxTyxnQkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1nZW9zZWFyY2guanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuLy9pbXBvcnQge0dlb1NlYXJjaFJlc3VsdHN9IGZyb20gXCIuL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3hcIjtcbmNvbnN0IEdlb1NlYXJjaFJlc3VsdHMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybSwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtlYXNlT3V0LCBsaW5lYXJ9IGZyb20gXCJvbC9lYXNpbmdcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtDaXJjbGUsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldFZlY3RvckNvbnRleHR9IGZyb20gXCJvbC9yZW5kZXJcIjtcbmltcG9ydCB7dW5CeUtleX0gZnJvbSBcIm9sL09ic2VydmFibGVcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtib3VuZGluZ0V4dGVudH0gZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjb250YWluc0Nvb3JkaW5hdGUsIGdldEhlaWdodCwgZ2V0V2lkdGh9IGZyb20gXCJvbC9leHRlbnRcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICAvLyBjb250cm9sXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9uZUZ1bmN0aW9uID0gdGhpcy5kb25lRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0dFT1NFQVJDSDtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIKTtcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWdlb3NlYXJjaFwiICsgXCIgb2wtY29udHJvbCBcIiArIFwib2wtdW5zZWxlY3RhYmxlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShidXR0b24pLm9uKCdjbGljaycsICgpPT4ge3RoaXMuY2xpY2tDb250cm9sKCl9KTtcblxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLmlucHV0Q3NzU2VsZWN0b3IpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5pbnB1dENzc1NlbGVjdG9yKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBcImM0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZXZlbnQpID0+IHt0aGlzLmlucHV0Q2FsbGJhY2soZXZlbnQpfSk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGV2ZW50KSA9PiB7dGhpcy5kZWxldGVDYWxsYmFjayhldmVudCl9KTtcbiAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwiYzRnLWdlb3NlYXJjaC1pbnB1dFwiKTtcbiAgICAgIGlmICghcHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICAgIGpRdWVyeShpbnB1dCkuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KGlucHV0KS5hZGRDbGFzcygnYzRnLWNsb3NlJyk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLChldmVudCkgPT4ge3RoaXMuaW5wdXRDYWxsYmFjayhldmVudCl9KTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZXZlbnQpID0+IHt0aGlzLmRlbGV0ZUNhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0aGlzLmNsaWNrQ29udHJvbCh0cnVlKX0pO1xuICAgICAgalF1ZXJ5KHNwYW4pLmFkZENsYXNzKCdzZWFyY2hTcGFuJyk7XG4gICAgICBsZXQgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGkuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz1cXFwiZmFyIGZhLXRpbWVzLWNpcmNsZVxcXCI+PC9pPlwiO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpKTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuXG5cblxuXG4gICAgdGhpcy5jb250cm9sRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGxldCBpbmRleCA9IHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiZ2Vvc2VhcmNoXCIpO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZ2Vvc2VhcmNoID0gY29udHJvbDtcbiAgICAvLyBlbmQgY29udHJvbFxuXG4gICAgLy8gcHJlcGFyZSBzZWFyY2gtY29uZmlndXJhdGlvblxuICAgIC8vXG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXkgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC51cmwpIHtcbiAgICAgIHRoaXMuY29uZmlnLnVybCA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gudXJsICsgXCJzZWFyY2gucGhwXCI7XG4gICAgICB0aGlzLmNvbmZpZy5rZXkgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnNlYXJjaEtleTtcbiAgICAgIHRoaXMuY29uZmlnLnBhcmFtcyA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gucGFyYW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy51cmwgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLmdlb3NlYXJjaCArIFwiL1wiICsgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByb2ZpbGU7XG4gICAgfVxuICAgIC8vIHpvb21sZXZlbCB3aGVuIGNlbnRlcmluZyB0aGUgZm91bmQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy56b29tbGV2ZWwgPSBwcm9wcy5zZWFyY2hab29tO1xuICAgIC8vIHpvb20gdG8gYm91bmRzIGluc3RlYWQgb2Ygem9vbWxldmVsIHdoZW4gY2VudGVyaW5nIHRoZSBmb3VuZCBsb2NhdGlvblxuICAgIHRoaXMuY29uZmlnLnpvb21ib3VuZHMgPSBwcm9wcy56b29tQm91bmRzO1xuICAgIC8vIHF1aWNrc2VhcmNoLW9wdGlvbiAoaW5zdGFudGx5IGp1bXAgdG8gdGhlIGZpcnN0IGZvdW5kIGxvY2F0aW9uKVxuICAgIHRoaXMuY29uZmlnLnF1aWNrc2VhcmNoID0gcHJvcHMucXVpY2tzZWFyY2ggfHwgdHJ1ZTtcbiAgICAvLyBhbmltYXRpb24gKGFuaW1hdGUgZmxpZ2h0IHRvIHRhcmdldGVkIGxvY2F0aW9uKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGUgPSBwcm9wcy5hbmltYXRlO1xuICAgIC8vIGhpZ2hsaWdodCB0aGUgcmVzdWx0IGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcubWFya1Jlc3VsdCA9IHByb3BzLm1hcmtSZXN1bHQ7XG4gICAgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uID0gcHJvcHMuYW5pbWF0ZUR1cmF0aW9uO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uID0gcHJvcHMucmVzdWx0RHVyYXRpb247XG4gICAgdGhpcy5jb25maWcucG9wdXAgPSBwcm9wcy5wb3B1cDtcblxuICAgIHRoaXMuY29uZmlnLmF1dG9waWNrID0gcHJvcHMuYXV0b3BpY2s7XG4gICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgdGhpcy5jb25maWcucmVzdWx0cyA9IHByb3BzLnJlc3VsdHM7XG4gICAgdGhpcy5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5yZXN1bHRTdHlsZTtcbiAgICBpZiAodGhpcy5jb25maWcucmVzdWx0U3R5bGUgJiYgcGFyc2VJbnQodGhpcy5jb25maWcucmVzdWx0U3R5bGUsIDEwKSA+IDApIHtcbiAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgIC8vIGNoZWNrIGlmIHN0eWxlIGlzIGxvYWRlZCwgb3RoZXJ3aXNlIGxvYWQgaXRcbiAgICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0pIHtcbiAgICAgICAgdGhpcy5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0uc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyhbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdLCB7ZG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY29wZS5jb25maWcucmVzdWx0U3R5bGUgPSBwcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzY29wZS5jb25maWcucmVzdWx0U3R5bGVdLnN0eWxlO1xuICAgICAgICAgIH19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy5jb2xsYXBzZWQgPSBwcm9wcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy5jb25maWcucmVzdWx0Q291bnQgPSBwcm9wcy5yZXN1bHRDb3VudDtcbiAgICB0aGlzLmNvbmZpZy5jYWNoaW5nID0gcHJvcHMuY2FjaGluZztcbiAgICB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46ICFwcm9wcy5jb2xsYXBzZWQsXG4gICAgICBxdWVyeTogXCJcIiwgLy8gdGhlIHNlYXJjaCBxdWVyeVxuICAgICAgcmVzdWx0czogW10sXG4gICAgICBjdXJyZW50Q29vcmRpbmF0ZTogW10sXG4gICAgICBvcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICAvLyBkZXRhaWxPcGVuUmVzdWx0czogZmFsc2UsXG4gICAgICBjdXJyZW50UmVzdWx0OiBudWxsXG4gICAgfTtcblxuICAgIHRoaXMuaW5wdXRDYWxsYmFjayA9IHRoaXMuaW5wdXRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVsZXRlQ2FsbGJhY2sgPSB0aGlzLmRlbGV0ZUNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydFNlYXJjaCA9IHRoaXMuc3RhcnRTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvb21UbyA9IHRoaXMuem9vbVRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZVJlc3VsdHMgPSB0aGlzLmNsb3NlUmVzdWx0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlblJlc3VsdHMgPSB0aGlzLm9wZW5SZXN1bHRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlUmVzdWx0c0NvbXBsZXRlbHkgPSB0aGlzLmNsb3NlUmVzdWx0c0NvbXBsZXRlbHkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbW9kZUNsYXNzID0gdGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3BlblJlc3VsdHMgPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiO1xuICAgIGlmICh0aGlzLnByb3BzLmV4dERpdikge1xuICAgICAgbW9kZUNsYXNzICs9IFwiIGV4dGVybmFsIFwiO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0cyA9IFwiXCI7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlblJlc3VsdHMgJiYgdGhpcy5jb25maWcucmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IDxHZW9TZWFyY2hSZXN1bHRzIGNsYXNzTmFtZT17bW9kZUNsYXNzfSByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IGV4dERpdj17dGhpcy5wcm9wcy5leHRSZXN1bHRzRGl2fSB6b29tRnVuYz17KGlkeCkgPT4ge3RoaXMuc2V0U3RhdGUoe2N1cnJlbnRSZXN1bHQ6IHRoaXMuc3RhdGUucmVzdWx0c1tpZHhdfSk7IHRoaXMuem9vbVRvKGlkeCk7fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVJlc3VsdHM9e3RoaXMuY2xvc2VSZXN1bHRzfSBoZWFkbGluZT17dGhpcy5wcm9wcy5yZXN1bHRzSGVhZGxpbmV9IGN1cnJlbnRSZXN1bHQ9e3RoaXMuc3RhdGUuY3VycmVudFJlc3VsdH0gcmVzdWx0c0Rpdj17dGhpcy5wcm9wcy5yZXN1bHRzRGl2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGggPjB9IG9wZW5SZXN1bHRzPXt0aGlzLm9wZW5SZXN1bHRzfSBjbG9zZUNiPXt0aGlzLmNsb3NlUmVzdWx0c0NvbXBsZXRlbHl9XG4gICAgICAvPjtcbiAgICB9XG4gICAgbGV0IGNsb3NlQnRuQ2xhc3MgPSBcIlwiO1xuICAgIGxldCBjbG9zZUJ0bkNiID0gXCJcIjtcbiAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGNsb3NlQnRuQ2xhc3MgPSBcImM0Zy10aXRsZWJhci1jbG9zZVwiO1xuICAgICAgY2xvc2VCdG5DYiA9IHRoaXMuY2xpY2tDb250cm9sO1xuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IHRoaXMucHJvcHMuaGVhZGxpbmU7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgaGVhZGxpbmUgPSB0aGlzLmxhbmdDb25zdGFudHMuR0VPU0VBUkNIO1xuICAgIH1cbiAgICBsZXQgaW5wdXQgPSBudWxsXG4gICAgaWYgKHRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGlucHV0ID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLWdlb3NlYXJjaC1maWx0ZXJcIn0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uSW5wdXQ9e3RoaXMuZGVsZXRlQ2FsbGJhY2t9IG9uS2V5RG93bj17dGhpcy5pbnB1dENhbGxiYWNrfSBpZD17XCJjNGctZ2Vvc2VhcmNoLWlucHV0XCJ9IHBsYWNlaG9sZGVyPXt0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcn0gYXJpYS1sYWJlbD17dGhpcy5jb25maWcucGxhY2Vob2xkZXJ9Lz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5HRU9TRUFSQ0hfU1RBUlR9IHR5cGU9e1wiYnV0dG9uXCJ9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9TVEFSVF9TRUFSQ0h9IG9uTW91c2VVcD17dGhpcy5zdGFydFNlYXJjaH0vPlxuICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5leHRlcm5hbCB8fCAodGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3BlblJlc3VsdHMpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuR0VPU0VBUkNIX1dSQVBQRVIgKyBcIiBcIiArIG1vZGVDbGFzcyArIFwiIGM0Zy1ob3Jpem9uXCJ9PlxuICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLWhlYWRlclwifSBoZWFkZXI9e2hlYWRsaW5lfSBoZWFkZXJDbGFzcz17XCJjNGctZ2Vvc2VhcmNoLWhlYWRsaW5lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbEJ0bkNsYXNzPXtcIlwifSBkZXRhaWxCdG5DYj17XCJcIn0gY2xvc2VCdG5DbGFzcz17Y2xvc2VCdG5DbGFzc30gY2xvc2VCdG5DYj17Y2xvc2VCdG5DYn0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICAgICAgICB7aW5wdXR9XG4gICAgICAgICAgICAgIHtyZXN1bHRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VSZXN1bHRzQ29tcGxldGVseSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuUmVzdWx0czogZmFsc2V9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaCAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gucmVzdWx0cykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAocHJldlN0YXRlLm9wZW4gIT09IHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLnJlc3VsdHMgJiYgdGhpcy5zdGF0ZS5yZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW5SZXN1bHRzICYmICF0aGlzLnByb3BzLmV4dFJlc3VsdHNEaXYpIHtcbiAgICAgICAgICBqUXVlcnkoXCIuYzRnLWdlb3NlYXJjaC1jb250YWluZXItcmlnaHRcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqUXVlcnkoXCIuYzRnLWdlb3NlYXJjaC1jb250YWluZXItcmlnaHRcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nKSB7XG4gICAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgICBpZiAocGFuZWxWYWwgPT09IFwiR2VvU2VhcmNoXCIgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFuZWxWYWwgIT09IFwiR2VvU2VhcmNoXCIgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIkdlb1NlYXJjaFwiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzQ29uc3RhbnRzLkdFT1NFQVJDSF9TVEFSVCk7XG4gICAgdHJ5IHtcbiAgICAgIGJ1dHRvbi5ibHVyKCk7XG4gICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgfVxuICAgIGxldCBzZWFyY2hJbnB1dCA9IGpRdWVyeShcIiNjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgIGlmIChzZWFyY2hJbnB1dC52YWwoKSkge1xuICAgICAgdGhpcy5maW5kTG9jYXRpb24oc2VhcmNoSW5wdXQudmFsKCkpO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0Q2FsbGJhY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzKSB7XG4gICAgICBsZXQgc2VhcmNoSW5wdXQgPSBqUXVlcnkoXCIjYzRnLWdlb3NlYXJjaC1pbnB1dFwiKTtcbiAgICAgIGlmIChzZWFyY2hJbnB1dC52YWwoKSkge1xuICAgICAgICB0aGlzLmZpbmRMb2NhdGlvbihzZWFyY2hJbnB1dC52YWwoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGRlbGV0ZUNhbGxiYWNrKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHNlYXJjaElucHV0ID0galF1ZXJ5KFwiI2M0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgbGV0IHZhbHVlID0gc2VhcmNoSW5wdXQudmFsKCk7XG4gICAgaWYgKHRoaXMubGFzdFZhbCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMubGFzdFZhbCA9IHZhbHVlO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxheWVyc3dpdGNoZXJcIik7XG4gICAgICAgIGlmIChpbmRleCA+IC0xICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29tcG9uZW50O1xuICAgICAgICAgIGNvbXBvbmVudC5hcHBseU9sZFN0YXRlKFwic2VhcmNoUmVzdWx0c1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsaWNrQ29udHJvbChkaXNyZWdhcmRTdGF0ZSkge1xuICAgIGxldCBvcGVuID0gZGlzcmVnYXJkU3RhdGUgIT09IHVuZGVmaW5lZCA/IGRpc3JlZ2FyZFN0YXRlIDogdGhpcy5zdGF0ZS5vcGVuXG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuaW5wdXQpLmFkZENsYXNzKCdjNGctY2xvc2UnKS5yZW1vdmVDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgIH1cbiAgICAgIC8vIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyh0aGlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5leHRlcm5hbCkge1xuICAgICAgICBqUXVlcnkodGhpcy5pbnB1dCkucmVtb3ZlQ2xhc3MoJ2M0Zy1jbG9zZScpLmFkZENsYXNzKCdjNGctb3BlbicpO1xuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgICAvLyBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICAgIC8vIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUmVzdWx0cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxPcGVuUmVzdWx0czogZmFsc2V9KTtcbiAgfVxuXG4gIG9wZW5SZXN1bHRzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbE9wZW5SZXN1bHRzOiB0cnVlfSk7XG4gIH1cblxuICBmaW5kTG9jYXRpb24obG9jYXRpb24sIG9wdF9vcHRpb25zKSB7XG4gICAgbGV0IG1hcCxcbiAgICAgIGFuaW1hdGUsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgIG1hcmtSZXN1bHQsXG4gICAgICBtYXBDb250cm9sbGVyO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbWFwID0gbWFwQ29udHJvbGxlci5tYXA7XG5cbiAgICAvLyBzaG93IHNwaW5uZXJcbiAgICBtYXBDb250cm9sbGVyLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgYW5pbWF0ZSA9IHRoaXMuY29uZmlnLmFuaW1hdGU7XG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb247XG4gICAgbWFya1Jlc3VsdCA9IHRoaXMuY29uZmlnLm1hcmtSZXN1bHQ7XG5cbiAgICBpZiAodHlwZW9mIG9wdF9vcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKG9wdF9vcHRpb25zLmFuaW1hdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbmltYXRlID0gb3B0X29wdGlvbnMuYW5pbWF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRfb3B0aW9ucy5tYXJrUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWFya1Jlc3VsdCA9IG9wdF9vcHRpb25zLm1hcmtSZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnF1aWNrc2VhcmNoKSB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgZm9ybWF0OiBcImpzb25cIixcbiAgICAgICAgcTogbG9jYXRpb25cbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5jb25maWcucmVzdWx0Q291bnQpIHtcbiAgICAgICAgZGF0YS5saW1pdCA9IHRoaXMuY29uZmlnLnJlc3VsdENvdW50O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlnLmtleSkge1xuICAgICAgICBkYXRhLmtleSA9IHRoaXMuY29uZmlnLmtleTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5wYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgcGFyYW0gaW4gdGhpcy5jb25maWcucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgIGRhdGFbcGFyYW1dID0gdGhpcy5jb25maWcucGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBhcnJSZXN1bHRzID0gdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX3NlYXJjaCwgW2RhdGEsIHRoaXNdKTtcbiAgICAgIGlmIChhcnJSZXN1bHRzICYmIGFyclJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICBmb3IgKGxldCBpIGluIGFyclJlc3VsdHMpIHtcbiAgICAgICAgICBpZiAoYXJyUmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgdGhpcy5kb25lRnVuY3Rpb24oYXJyUmVzdWx0c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gQUpBWCAtPiBAbm9taW5hdGltXG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgdXJsOiB0aGlzLmNvbmZpZy51cmwsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmRvbmUodGhpcy5kb25lRnVuY3Rpb24pXG5cbiAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gQFRPRE9cbiAgICAgICAgICAgICAgLy8gc2VsZi5yZXN1bHRXcmFwcGVyLmlubmVySFRNTCA9ICdvaG9oISc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNjb3BlLmNvbmZpZy5tYXBDb250cm9sbGVyLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnNob3dPbmx5UmVzdWx0cykge1xuICAgICAgICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdKSB7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LnRvZ2dsZUFsbExheWVycyhcInNlYXJjaFJlc3VsdHNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQFRPRE9cbiAgICB9XG5cbiAgfVxuICBkb25lRnVuY3Rpb24gKHJlc3VsdHMpIHtcblxuICAgIHZhciBtYXBWaWV3LFxuICAgICAgICBjdXJyZW50Q29vcmRpbmF0ZSxcbiAgICAgICAgcmVzdWx0Q29vcmRpbmF0ZSxcbiAgICAgICAgY29vcmREaWYsXG4gICAgICAgIGRpZkNvbnRleHQsXG4gICAgICAgIHZpZXdFeHRlbnQsXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgb3NtRXh0ZW50LFxuICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICB6b29tVHlwZSxcbiAgICAgICAgZmx5VG8sXG4gICAgICAgIGNvbXBsZXRlU2VhcmNoLFxuICAgICAgICBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLFxuICAgICAgICBtYXAgPSBtYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgYW5pbWF0ZSA9IHRoaXMuY29uZmlnLmFuaW1hdGUsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLFxuICAgICAgICBtYXJrUmVzdWx0ID0gdGhpcy5jb25maWcubWFya1Jlc3VsdDtcblxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoICYmIHJlc3VsdHMubGVuZ3RoID4gMCl7XG4gICAgICBtYXBWaWV3ID0gbWFwLmdldFZpZXcoKTtcbiAgICAgXG4gICAgICBpZiAocmVzdWx0c1swXSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICBpZiAocmVzdWx0Lmhhc093blByb3BlcnR5KCd1dWlkJykpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxheWVyc3dpdGNoZXJcIik7XG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGZhbHNlO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xICYmIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0pIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29tcG9uZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgaWRzID0gW107XG4gICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0c1tpXS5oYXNPd25Qcm9wZXJ0eSgndXVpZCcpKSB7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2godGhpcy5yZXN1bHRzW2ldLnV1aWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdHNbaV0uaGFzT3duUHJvcGVydHkoJ2xvbicpICYmIHRoaXMucmVzdWx0c1tpXS5oYXNPd25Qcm9wZXJ0eSgnbGF0JykgJiYgdGhpcy5yZXN1bHRzW2ldLmxvbiAmJiB0aGlzLnJlc3VsdHNbaV0ubGF0KSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaCh0cmFuc2Zvcm0oW3BhcnNlRmxvYXQodGhpcy5yZXN1bHRzW2ldLmxvbikscGFyc2VGbG9hdCh0aGlzLnJlc3VsdHNbaV0ubGF0KV0sJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zaG93T25seVJlc3VsdHMgJiYgY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQudG9nZ2xlU3BlY2lmaWNMYXllcnMoaWRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNpemUgPSBtYXAuZ2V0U2l6ZSgpO1xuICAgICAgICAgIGxldCBleHRlbnQgPSBib3VuZGluZ0V4dGVudChjb29yZGluYXRlcyk7XG4gICAgICAgICAgbGV0IGZpdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxuICAgICAgICAgICAgcGFkZGluZzogW1xuICAgICAgICAgICAgICAgIHNpemVbMV0vMTAsXG4gICAgICAgICAgICAgICAgc2l6ZVswXS8xMCxcbiAgICAgICAgICAgICAgICBzaXplWzFdLzEwLFxuICAgICAgICAgICAgICAgIHNpemVbMF0vMTAsXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hcC5nZXRWaWV3KCkgJiYgKGNvb3JkaW5hdGVzLmxlbmd0aCA+IDApICYmIGV4dGVudCAmJiBmaXRPcHRpb25zKSB7XG4gICAgICAgICAgICBtYXAuZ2V0VmlldygpLmZpdChleHRlbnQsIGZpdE9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50Q29vcmRpbmF0ZSA9IG1hcFZpZXcuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgcmVzdWx0Q29vcmRpbmF0ZSA9IHRyYW5zZm9ybShbcGFyc2VGbG9hdChyZXN1bHQubG9uKSwgcGFyc2VGbG9hdChyZXN1bHQubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG5cbiAgICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICAgdGhpcy5mbHlUbyhcbiAgICAgICAgICAgICAgICBtYXAsIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnpvb21sZXZlbCwgdGhpcy5jb25maWcuem9vbWJvdW5kcywgcmVzdWx0LmJvdW5kaW5nX2JveCxcbiAgICAgICAgICAgICAgICBtYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbiwgYW5pbWF0ZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCBtYXAuZ2V0VmlldygpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVNlYXJjaCh0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5hbmltYXRlLCB6b29tVHlwZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbik7XG4gICAgICAgICAgICBtYXBWaWV3LnNldENlbnRlcihyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy56b29tbGV2ZWwgPj0gMCkge1xuICAgICAgICAgICAgICBtYXAuZ2V0VmlldygpLnNldFpvb20odGhpcy5jb25maWcuem9vbWxldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmF1dG9waWNrICYmIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLmdlb3BpY2tlci5waWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLmdlb3BpY2tlci5waWNrKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZSh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICAgICAgYWxlcnQobGFuZ0NvbnN0YW50cy5TRUFSQ0hfTk9UX0ZPVU5EKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3VsdHM6IHRoaXMucmVzdWx0cywgb3BlbjogdHJ1ZSwgY3VycmVudENvb3JkaW5hdGU6IGN1cnJlbnRDb29yZGluYXRlLCBvcGVuUmVzdWx0czogdHJ1ZSwgY3VycmVudFJlc3VsdDogcmVzdWx0c1swXX0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmbHlUbyhtYXAsIGxvY2F0aW9uLCB6b29tbGV2ZWwsIHpvb21ib3VuZHMsIGJvdW5kaW5nYm94LCBtYXJrUmVzdWx0LCByZXN1bHREdXJhdGlvbiwgYW5pbWF0ZSwgYW5pbWF0ZUR1cmF0aW9uLCBtYXBWaWV3KSB7XG4gICAgbGV0IGR1cmF0aW9uID0gYW5pbWF0ZUR1cmF0aW9uO1xuICAgIGxldCB6b29tID0gem9vbWxldmVsO1xuICAgIGxldCBwYXJ0cyA9IDI7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgIGxldCBleHRlbnQ7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY2FsbGJhY2soY29tcGxldGUpIHtcbiAgICAgIC0tcGFydHM7XG4gICAgICBpZiAoY2FsbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0cyA9PT0gMCB8fCAhY29tcGxldGUpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoem9vbWJvdW5kcyAmJiBib3VuZGluZ2JveCAmJiBib3VuZGluZ2JveFswXSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGJvdW5kaW5nYm94WzFdICE9PSBudWxsICYmIGJvdW5kaW5nYm94WzJdICE9PSBudWxsICYmXG4gICAgICAgICAgYm91bmRpbmdib3hbM10gIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gdHJhbnNsYXRlIG9zbS1leHRlbnQgdG8gb2wzLWV4dGVudFxuXG4gICAgICAgICAgbGV0IG9zbUV4dGVudCA9IFtdO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMl0pKTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzBdKSk7XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFszXSkpO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMV0pKTtcblxuICAgICAgICAgIGV4dGVudCA9IHRyYW5zZm9ybUV4dGVudChvc21FeHRlbnQsICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG5cbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmlld0ZpdCA9IG1hcFZpZXcuZml0KFxuICAgICAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAgICAgIG1hcC5nZXRTaXplKCksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtaW5ab29tOiBtYXBWaWV3LmdldCgnbWluWm9vbScpIHx8IDIsXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogem9vbSB8fCBtYXBWaWV3LmdldCgnbWF4Wm9vbScpIHx8IDE4LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDIsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBlYXNlT3V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSwgZHVyYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS5jb21wbGV0ZVNlYXJjaChtYXJrUmVzdWx0LCBhbmltYXRlLCBcImJvdW5jZVwiLCBhbmltYXRlRHVyYXRpb24sIGxvY2F0aW9uLCByZXN1bHREdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwLmdldFZpZXcoKS5hbmltYXRlKHtcbiAgICAgIGNlbnRlcjogbG9jYXRpb24sXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICB9LCBjYWxsYmFjayk7XG5cbiAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgem9vbTogem9vbSAtIDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyAyXG4gICAgfSwge1xuICAgICAgem9vbTogem9vbSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDJcbiAgICB9LCBjYWxsYmFjayk7XG4gIH1cblxuICBjb21wbGV0ZVNlYXJjaChtYXJrUmVzdWx0LCBhbmltYXRlLCB6b29tVHlwZSwgYW5pbWF0aW9uRHVyYXRpb24sIHJlc3VsdENvb3JkaW5hdGUsIHJlc3VsdER1cmF0aW9uKSB7XG4gICAgLy8gcmVzdWx0IG1hcmtlciAmIGFuaW1hdGlvblxuICAgIGlmIChtYXJrUmVzdWx0KSB7XG4gICAgICBsZXQgYWRkTWFya2VyLFxuICAgICAgICBtYXJrZXJTb3VyY2UsXG4gICAgICAgIG1hcmtlckxheWVyLFxuICAgICAgICBhbmltYXRlTWFya2VyO1xuXG4gICAgICBtYXJrZXJTb3VyY2UgPSBuZXcgVmVjdG9yU291cmNlKCk7XG4gICAgICBsZXQgc3R5bGUgPSB0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZTtcbiAgICAgIGlmICghc3R5bGUgfHwgc3R5bGUgPT09IFwiMFwiKSB7XG4gICAgICAgIHN0eWxlID0gW25ldyBTdHlsZSh7XG4gICAgICAgICAgaW1hZ2U6IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgcmFkaXVzOiA3LFxuICAgICAgICAgICAgc25hcFRvUGl4ZWw6IGZhbHNlLFxuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIDAuOSArICcpJyxcbiAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuOVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgICByYWRpdXM6IDIwLFxuICAgICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIDAuOSArICcpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgIGltYWdlOiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgICAgcmFkaXVzOiAzMyxcbiAgICAgICAgICAgICAgc25hcFRvUGl4ZWw6IGZhbHNlLFxuICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyMDAsIDAsIDAsICcgKyAwLjkgKyAnKScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICBtYXJrZXJMYXllciA9IG5ldyBWZWN0b3Ioe1xuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHNvdXJjZTogbWFya2VyU291cmNlLFxuICAgICAgICB6SW5kZXg6IDk5OTk5XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIobWFya2VyTGF5ZXIpO1xuXG4gICAgICBhZGRNYXJrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1hcmtlclNvdXJjZS5hZGRGZWF0dXJlKFxuICAgICAgICAgIG5ldyBGZWF0dXJlKFxuICAgICAgICAgICAgbmV3IFBvaW50KHJlc3VsdENvb3JkaW5hdGUpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgYW5pbWF0ZU1hcmtlciA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBhbmltYXRpb25TdGVwLFxuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgIGxpc3RlbmVyS2V5O1xuXG4gICAgICAgIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGR1cmF0aW9uID0gcmVzdWx0RHVyYXRpb247XG5cbiAgICAgICAgYW5pbWF0aW9uU3RlcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGxldCB2ZWN0b3JDb250ZXh0LFxuICAgICAgICAgICAgZnJhbWVTdGF0ZSxcbiAgICAgICAgICAgIGVsYXBzZWQsXG4gICAgICAgICAgICBlbGFwc2VkUmF0aW8sXG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICBvcGFjaXR5LFxuICAgICAgICAgICAgZmxhc2hHZW9tO1xuXG4gICAgICAgICAgdmVjdG9yQ29udGV4dCA9IGdldFZlY3RvckNvbnRleHQoZXZlbnQpO1xuICAgICAgICAgIGZyYW1lU3RhdGUgPSBldmVudC5mcmFtZVN0YXRlO1xuICAgICAgICAgIGZsYXNoR2VvbSA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5jbG9uZSgpO1xuICAgICAgICAgIGVsYXBzZWQgPSBmcmFtZVN0YXRlLnRpbWUgLSBzdGFydDtcbiAgICAgICAgICBlbGFwc2VkUmF0aW8gPSBlbGFwc2VkIC8gZHVyYXRpb247XG4gICAgICAgICAgcmFkaXVzID0gbGluZWFyKDEgLSBlbGFwc2VkUmF0aW8pICogMTAwO1xuICAgICAgICAgIGlmIChyYWRpdXMgPCAwKSB7XG4gICAgICAgICAgICByYWRpdXMgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcGFjaXR5ID0gbGluZWFyKGVsYXBzZWRSYXRpbyk7XG5cbiAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IFN0eWxlKCk7XG5cbiAgICAgICAgICB2ZWN0b3JDb250ZXh0LnNldFN0eWxlKG1hcmtlcik7XG4gICAgICAgICAgdmVjdG9yQ29udGV4dC5kcmF3R2VvbWV0cnkoZmxhc2hHZW9tLCBudWxsKTtcblxuICAgICAgICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIG1hcmtlclNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgdW5CeUtleShsaXN0ZW5lcktleSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnRpbnVlIHBvc3RyZW5kZXIgYW5pbWF0aW9uXG4gICAgICAgICAgZnJhbWVTdGF0ZS5hbmltYXRlID0gdHJ1ZTtcbiAgICAgICAgfTsgLy8gZW5kIG9mIFwiYW5pbWF0aW9uU3RlcFwiXG5cbiAgICAgICAgbGlzdGVuZXJLZXkgPSBtYXJrZXJMYXllci5vbigncG9zdHJlbmRlcicsIGFuaW1hdGlvblN0ZXApO1xuXG4gICAgICB9OyAvLyBlbmQgb2YgXCJhbmltYXRlTWFya2VyXCJcblxuICAgICAgbWFya2VyU291cmNlLm9uKCdhZGRmZWF0dXJlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGFuaW1hdGVNYXJrZXIoZXZlbnQuZmVhdHVyZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgaWYgKHpvb21UeXBlID09PSAnem9vbScpIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhZGRNYXJrZXIsIGFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYWRkTWFya2VyLCBhbmltYXRpb25EdXJhdGlvbiAvIDIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRNYXJrZXIoKTtcbiAgICAgIH1cblxuICAgIH0vLyBlbmQgb2YgcmVzdWx0IG1hcmtlciAmIGFuaW1hdGlvbiBoYW5kbGluZ1xuICAgIGlmICh0aGlzLmNvbmZpZy5wb3B1cCkge1xuICAgICAgbGV0IHBpeGVsID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRQaXhlbEZyb21Db29yZGluYXRlKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgdHlwZTogJ2NsaWNrJyxcbiAgICAgICAgICBwaXhlbDogcGl4ZWwsXG4gICAgICAgIH0sMTAwKTtcbiAgICAgIH0pXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQFRPRE9cbiAgICpcbiAgICogQHBhcmFtICAge1t0eXBlXX0gIGxvY2F0aW9uICBbZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEByZXR1cm4gIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgem9vbVRvKGluZGV4KSB7XG4gICAgbGV0IG1hcCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICBtYXBDb250cm9sbGVyLFxuICAgICAgem9vbVR5cGU7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXAgPSBtYXBDb250cm9sbGVyLm1hcDtcbiAgICBsZXQgbWFwVmlldyA9IG1hcC5nZXRWaWV3KCk7XG4gICAgbGV0IGN1cnJlbnRDb29yZGluYXRlID0gdGhpcy5zdGF0ZS5jdXJyZW50Q29vcmRpbmF0ZTtcblxuICAgIHJlc3VsdCA9IHNjb3BlLnJlc3VsdHNbaW5kZXhdO1xuICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQocmVzdWx0LmxvbiksIHBhcnNlRmxvYXQocmVzdWx0LmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRlKSB7XG4gICAgICB2YXIgcmVzb2x1dGlvbiA9IG1hcFZpZXcuZ2V0UmVzb2x1dGlvbigpO1xuICAgICAgdmFyIHZpZXdFeHRlbnQgPSBtYXBWaWV3LmNhbGN1bGF0ZUV4dGVudChtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgIGlmIChjb250YWluc0Nvb3JkaW5hdGUodmlld0V4dGVudCwgcmVzdWx0Q29vcmRpbmF0ZSkpIHtcbiAgICAgICAgem9vbVR5cGUgPSAnem9vbSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMF0gLSByZXN1bHRDb29yZGluYXRlWzBdKSA+IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzFdIC0gcmVzdWx0Q29vcmRpbmF0ZVsxXSkpIHtcbiAgICAgICAgICB2YXIgY29vcmREaWYgPSBNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVswXSAtIHJlc3VsdENvb3JkaW5hdGVbMF0pO1xuICAgICAgICAgIHZhciBkaWZDb250ZXh0ID0gZ2V0V2lkdGgodmlld0V4dGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29vcmREaWYgPSBNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVsxXSAtIHJlc3VsdENvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgIGRpZkNvbnRleHQgPSBnZXRIZWlnaHQodmlld0V4dGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkRGlmID4gMCkge1xuICAgICAgICAgIHJlc29sdXRpb24gKj0gY29vcmREaWYgLyBkaWZDb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHpvb21UeXBlID0gJ2JvdW5jZSc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmx5VG8oXG4gICAgICAgICAgbWFwLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy56b29tbGV2ZWwsIHRoaXMuY29uZmlnLnpvb21ib3VuZHMsIHJlc3VsdC5ib3VuZGluZ19ib3gsXG4gICAgICAgICAgdGhpcy5jb25maWcubWFya1Jlc3VsdCwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24sIHRoaXMuY29uZmlnLmFuaW1hdGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgbWFwVmlldyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZVNlYXJjaCh0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5hbmltYXRlLCB6b29tVHlwZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbik7XG4gICAgICBtYXAuZ2V0VmlldygpLnNldENlbnRlcihyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy56b29tbGV2ZWwgPj0gMCkge1xuICAgICAgICBtYXAuZ2V0VmlldygpLnNldFpvb20odGhpcy5jb25maWcuem9vbWxldmVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59Il0sIm5hbWVzIjpbIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9jb250cm9sIiwiX2M0Z01hcHNJMThuIiwiX2M0Z01hcHNDb25zdGFudCIsIl9wcm9qIiwiX2Vhc2luZyIsIl9zb3VyY2UiLCJfbGF5ZXIiLCJfc3R5bGUiLCJfb2wiLCJfZ2VvbSIsIl9yZW5kZXIiLCJfT2JzZXJ2YWJsZSIsIl9jNGdNYXBzVXRpbHMiLCJfZXh0ZW50IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mMyIsImhhcyIsImdldCIsIm4iLCJfX3Byb3RvX18iLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ1IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaSIsInNldCIsIl9jYWxsU3VwZXIiLCJvIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiR2VvU2VhcmNoUmVzdWx0cyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiR2VvU2VhcmNoIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY2xpY2tDb250cm9sIiwiYmluZCIsImRvbmVGdW5jdGlvbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfR0VPU0VBUkNIIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJqUXVlcnkiLCJvbiIsImV4dGVybmFsIiwiZ2Vvc2VhcmNoIiwiaW5wdXRDc3NTZWxlY3RvciIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImlucHV0Q2FsbGJhY2siLCJkZWxldGVDYWxsYmFjayIsImNvbGxhcHNlZCIsImFkZENsYXNzIiwiaW5uZXJIVE1MIiwiY29udHJvbEVsZW1lbnQiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImNvbmZpZyIsInNlYXJjaEtleSIsInVybCIsImtleSIsInBhcmFtcyIsImFwaSIsInByb2ZpbGUiLCJ6b29tbGV2ZWwiLCJzZWFyY2hab29tIiwiem9vbWJvdW5kcyIsInpvb21Cb3VuZHMiLCJxdWlja3NlYXJjaCIsImFuaW1hdGUiLCJtYXJrUmVzdWx0IiwiYW5pbWF0ZUR1cmF0aW9uIiwicmVzdWx0RHVyYXRpb24iLCJwb3B1cCIsImF1dG9waWNrIiwicmVzdWx0cyIsInJlc3VsdFN0eWxlIiwicGFyc2VJbnQiLCJzY29wZSIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJzdHlsZSIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJyZXN1bHRDb3VudCIsImNhY2hpbmciLCJwbGFjZWhvbGRlciIsInN0YXRlIiwib3BlbiIsInF1ZXJ5IiwiY3VycmVudENvb3JkaW5hdGUiLCJvcGVuUmVzdWx0cyIsImN1cnJlbnRSZXN1bHQiLCJzdGFydFNlYXJjaCIsInpvb21UbyIsImNsb3NlUmVzdWx0cyIsImNsb3NlIiwiY2xvc2VSZXN1bHRzQ29tcGxldGVseSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJtb2RlQ2xhc3MiLCJleHREaXYiLCJleHRSZXN1bHRzRGl2Iiwiem9vbUZ1bmMiLCJpZHgiLCJzZXRTdGF0ZSIsImhlYWRsaW5lIiwicmVzdWx0c0hlYWRsaW5lIiwicmVzdWx0c0RpdiIsImxlbmd0aCIsImNsb3NlQ2IiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsIkdFT1NFQVJDSCIsInR5cGUiLCJvbklucHV0Iiwib25LZXlEb3duIiwiaWQiLCJjc3NDb25zdGFudHMiLCJHRU9TRUFSQ0hfU1RBUlQiLCJ0aXRsZSIsIkNUUkxfU1RBUlRfU0VBUkNIIiwib25Nb3VzZVVwIiwiRnJhZ21lbnQiLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXIiLCJoZWFkZXJDbGFzcyIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInNldE9wZW5Db21wb25lbnQiLCJyZW1vdmVDbGFzcyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiaWdub3JlIiwic2VhcmNoSW5wdXQiLCJ2YWwiLCJmaW5kTG9jYXRpb24iLCJ3aGljaCIsImxhc3RWYWwiLCJjb21wb25lbnQiLCJhcHBseU9sZFN0YXRlIiwiZGlzcmVnYXJkU3RhdGUiLCJ1bmRlZmluZWQiLCJmb2N1cyIsImRldGFpbE9wZW5SZXN1bHRzIiwibG9jYXRpb24iLCJvcHRfb3B0aW9ucyIsIm1hcCIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3Bpbm5lciIsInNob3ciLCJfdHlwZW9mMiIsImZvcm1hdCIsInEiLCJsaW1pdCIsInBhcmFtIiwiYXJyUmVzdWx0cyIsImNhbGxIb29rRnVuY3Rpb25zIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiaG9va19zZWFyY2giLCJoaWRlIiwiYWpheCIsImRhdGFUeXBlIiwiZmFpbCIsImFsd2F5cyIsInNob3dPbmx5UmVzdWx0cyIsImJ1dHRvbkVuYWJsZWQiLCJ0b2dnbGVBbGxMYXllcnMiLCJtYXBWaWV3IiwicmVzdWx0Q29vcmRpbmF0ZSIsImNvb3JkRGlmIiwiZGlmQ29udGV4dCIsInZpZXdFeHRlbnQiLCJyZXN1bHQiLCJvc21FeHRlbnQiLCJyZXNvbHV0aW9uIiwiem9vbVR5cGUiLCJmbHlUbyIsImNvbXBsZXRlU2VhcmNoIiwiZ2V0VmlldyIsImlkcyIsImNvb3JkaW5hdGVzIiwicHVzaCIsInV1aWQiLCJsb24iLCJsYXQiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwidG9nZ2xlU3BlY2lmaWNMYXllcnMiLCJzaXplIiwiZ2V0U2l6ZSIsImV4dGVudCIsImJvdW5kaW5nRXh0ZW50IiwiZml0T3B0aW9ucyIsImR1cmF0aW9uIiwicGFkZGluZyIsImZpdCIsImdldENlbnRlciIsImJvdW5kaW5nX2JveCIsInNldENlbnRlciIsInNldFpvb20iLCJnZW9waWNrZXIiLCJwaWNrIiwib3B0aW9ucyIsImFsZXJ0IiwiU0VBUkNIX05PVF9GT1VORCIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJib3VuZGluZ2JveCIsInpvb20iLCJwYXJ0cyIsImNhbGxlZCIsImNhbGxiYWNrIiwiY29tcGxldGUiLCJ0cmFuc2Zvcm1FeHRlbnQiLCJzZXRUaW1lb3V0Iiwidmlld0ZpdCIsIm1pblpvb20iLCJtYXhab29tIiwiZWFzaW5nIiwiZWFzZU91dCIsImNlbnRlciIsIl90aGlzMyIsImFkZE1hcmtlciIsIm1hcmtlclNvdXJjZSIsIm1hcmtlckxheWVyIiwiYW5pbWF0ZU1hcmtlciIsIlZlY3RvclNvdXJjZSIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJyYWRpdXMiLCJzbmFwVG9QaXhlbCIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJvcGFjaXR5IiwiVmVjdG9yIiwic291cmNlIiwiekluZGV4IiwiYWRkTGF5ZXIiLCJhZGRGZWF0dXJlIiwiRmVhdHVyZSIsIlBvaW50IiwiZmVhdHVyZSIsImFuaW1hdGlvblN0ZXAiLCJzdGFydCIsImxpc3RlbmVyS2V5IiwiRGF0ZSIsImdldFRpbWUiLCJ2ZWN0b3JDb250ZXh0IiwiZnJhbWVTdGF0ZSIsImVsYXBzZWQiLCJlbGFwc2VkUmF0aW8iLCJmbGFzaEdlb20iLCJnZXRWZWN0b3JDb250ZXh0IiwiZ2V0R2VvbWV0cnkiLCJjbG9uZSIsInRpbWUiLCJsaW5lYXIiLCJtYXJrZXIiLCJzZXRTdHlsZSIsImRyYXdHZW9tZXRyeSIsImNsZWFyIiwidW5CeUtleSIsInBpeGVsIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsImRpc3BhdGNoRXZlbnQiLCJnZXRSZXNvbHV0aW9uIiwiY2FsY3VsYXRlRXh0ZW50IiwiY29udGFpbnNDb29yZGluYXRlIiwiTWF0aCIsImFicyIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==