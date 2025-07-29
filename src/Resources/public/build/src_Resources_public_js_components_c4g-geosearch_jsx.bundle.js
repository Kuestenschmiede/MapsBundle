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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLFlBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxtQkFBQTtBQUdBLElBQUFJLEtBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxPQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sT0FBQSxHQUFBTixtQkFBQTtBQUNBLElBQUFPLE1BQUEsR0FBQVAsbUJBQUE7QUFDQSxJQUFBUSxNQUFBLEdBQUFSLG1CQUFBO0FBQ0EsSUFBQVMsR0FBQSxHQUFBVCxtQkFBQTtBQUNBLElBQUFVLEtBQUEsR0FBQVYsbUJBQUE7QUFDQSxJQUFBVyxPQUFBLEdBQUFYLG1CQUFBO0FBQ0EsSUFBQVksV0FBQSxHQUFBWixtQkFBQTtBQUNBLElBQUFhLGFBQUEsR0FBQWIsbUJBQUE7QUFDQSxJQUFBYyxPQUFBLEdBQUFkLG1CQUFBO0FBQXlDLFNBQUFELHdCQUFBZ0IsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQWxCLHVCQUFBLFlBQUFBLHdCQUFBZ0IsQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxRQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFB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LFlBQVksRUFDekYsSUFBSSxDQUFDL0osTUFBTSxDQUFDYSxVQUFVLEVBQUUsSUFBSSxDQUFDYixNQUFNLENBQUNlLGNBQWMsRUFBRSxJQUFJLENBQUNmLE1BQU0sQ0FBQ1ksT0FBTyxFQUFFLElBQUksQ0FBQ1osTUFBTSxDQUFDYyxlQUFlLEVBQUVtSCxPQUFPLENBQUM7TUFDcEgsQ0FBQyxNQUNJO1FBQ0gsSUFBSSxDQUFDVSxjQUFjLENBQUMsSUFBSSxDQUFDM0ksTUFBTSxDQUFDYSxVQUFVLEVBQUUsSUFBSSxDQUFDYixNQUFNLENBQUNZLE9BQU8sRUFBRTZILFFBQVEsRUFBRSxJQUFJLENBQUN6SSxNQUFNLENBQUNjLGVBQWUsRUFBRW9ILGdCQUFnQixFQUFFLElBQUksQ0FBQ2xJLE1BQU0sQ0FBQ2UsY0FBYyxDQUFDO1FBQ3JKNEYsR0FBRyxDQUFDaUMsT0FBTyxDQUFDLENBQUMsQ0FBQ29CLFNBQVMsQ0FBQzlCLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDbEksTUFBTSxDQUFDTyxTQUFTLElBQUksQ0FBQyxFQUFFO1VBQzlCb0csR0FBRyxDQUFDaUMsT0FBTyxDQUFDLENBQUMsQ0FBQ3FCLE9BQU8sQ0FBQyxJQUFJLENBQUNqSyxNQUFNLENBQUNPLFNBQVMsQ0FBQztRQUM5QztNQUNGO0lBRUY7RUFBQztBQUFBLEVBN3NCb0NxTyxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWdlb3NlYXJjaC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgU3VzcGVuc2V9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG4vL2ltcG9ydCB7R2VvU2VhcmNoUmVzdWx0c30gZnJvbSBcIi4vYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeFwiO1xuY29uc3QgR2VvU2VhcmNoUmVzdWx0cyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctZ2Vvc2VhcmNoLXJlc3VsdHMuanN4XCIpKTtcbmltcG9ydCB7dHJhbnNmb3JtLCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge2Vhc2VPdXQsIGxpbmVhcn0gZnJvbSBcIm9sL2Vhc2luZ1wiO1xuaW1wb3J0IHtWZWN0b3IgYXMgVmVjdG9yU291cmNlfSBmcm9tIFwib2wvc291cmNlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge0NpcmNsZSwgU3Ryb2tlLCBTdHlsZX0gZnJvbSBcIm9sL3N0eWxlXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Z2V0VmVjdG9yQ29udGV4dH0gZnJvbSBcIm9sL3JlbmRlclwiO1xuaW1wb3J0IHt1bkJ5S2V5fSBmcm9tIFwib2wvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2JvdW5kaW5nRXh0ZW50fSBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2NvbnRhaW5zQ29vcmRpbmF0ZSwgZ2V0SGVpZ2h0LCBnZXRXaWR0aH0gZnJvbSBcIm9sL2V4dGVudFwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb1NlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIC8vIGNvbnRyb2xcbiAgICAvLyBpZiAodGhpcy5wcm9wcy5jb2xsYXBzZWQpIHtcbiAgICB0aGlzLmNsaWNrQ29udHJvbCA9IHRoaXMuY2xpY2tDb250cm9sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb25lRnVuY3Rpb24gPSB0aGlzLmRvbmVGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9HRU9TRUFSQ0gpO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9HRU9TRUFSQ0gpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZ2Vvc2VhcmNoXCIgKyBcIiBvbC1jb250cm9sIFwiICsgXCJvbC11bnNlbGVjdGFibGVcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGJ1dHRvbikub24oJ2NsaWNrJywgKCk9PiB7dGhpcy5jbGlja0NvbnRyb2woKX0pO1xuXG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guaW5wdXRDc3NTZWxlY3Rvcikge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLmlucHV0Q3NzU2VsZWN0b3IpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwiYzRnLWdlb3NlYXJjaC1pbnB1dFwiKTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLChldmVudCkgPT4ge3RoaXMuaW5wdXRDYWxsYmFjayhldmVudCl9KTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZXZlbnQpID0+IHt0aGlzLmRlbGV0ZUNhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKCFwcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgalF1ZXJ5KGlucHV0KS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBqUXVlcnkoaW5wdXQpLmFkZENsYXNzKCdjNGctY2xvc2UnKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGV2ZW50KSA9PiB7dGhpcy5pbnB1dENhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLChldmVudCkgPT4ge3RoaXMuZGVsZXRlQ2FsbGJhY2soZXZlbnQpfSk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcblxuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RoaXMuY2xpY2tDb250cm9sKHRydWUpfSk7XG4gICAgICBqUXVlcnkoc3BhbikuYWRkQ2xhc3MoJ3NlYXJjaFNwYW4nKTtcbiAgICAgIGxldCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgaS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPVxcXCJmYXIgZmEtdGltZXMtY2lyY2xlXFxcIj48L2k+XCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKGkpO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG5cblxuXG5cbiAgICB0aGlzLmNvbnRyb2xFbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbGV0IGluZGV4ID0gcHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJnZW9zZWFyY2hcIik7XG4gICAgcHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb250cm9sID0gY29udHJvbDtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5nZW9zZWFyY2ggPSBjb250cm9sO1xuICAgIC8vIGVuZCBjb250cm9sXG5cbiAgICAvLyBwcmVwYXJlIHNlYXJjaC1jb25maWd1cmF0aW9uXG4gICAgLy9cbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnNlYXJjaEtleSAmJiBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnVybCkge1xuICAgICAgdGhpcy5jb25maWcudXJsID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC51cmwgKyBcInNlYXJjaC5waHBcIjtcbiAgICAgIHRoaXMuY29uZmlnLmtleSA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guc2VhcmNoS2V5O1xuICAgICAgdGhpcy5jb25maWcucGFyYW1zID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5wYXJhbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLnVybCA9IHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgXCIvXCIgKyBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEucHJvZmlsZTtcbiAgICB9XG4gICAgLy8gem9vbWxldmVsIHdoZW4gY2VudGVyaW5nIHRoZSBmb3VuZCBsb2NhdGlvblxuICAgIHRoaXMuY29uZmlnLnpvb21sZXZlbCA9IHByb3BzLnNlYXJjaFpvb207XG4gICAgLy8gem9vbSB0byBib3VuZHMgaW5zdGVhZCBvZiB6b29tbGV2ZWwgd2hlbiBjZW50ZXJpbmcgdGhlIGZvdW5kIGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcuem9vbWJvdW5kcyA9IHByb3BzLnpvb21Cb3VuZHM7XG4gICAgLy8gcXVpY2tzZWFyY2gtb3B0aW9uIChpbnN0YW50bHkganVtcCB0byB0aGUgZmlyc3QgZm91bmQgbG9jYXRpb24pXG4gICAgdGhpcy5jb25maWcucXVpY2tzZWFyY2ggPSBwcm9wcy5xdWlja3NlYXJjaCB8fCB0cnVlO1xuICAgIC8vIGFuaW1hdGlvbiAoYW5pbWF0ZSBmbGlnaHQgdG8gdGFyZ2V0ZWQgbG9jYXRpb24pXG4gICAgdGhpcy5jb25maWcuYW5pbWF0ZSA9IHByb3BzLmFuaW1hdGU7XG4gICAgLy8gaGlnaGxpZ2h0IHRoZSByZXN1bHQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0ID0gcHJvcHMubWFya1Jlc3VsdDtcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24gPSBwcm9wcy5hbmltYXRlRHVyYXRpb247XG4gICAgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24gPSBwcm9wcy5yZXN1bHREdXJhdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5wb3B1cCA9IHByb3BzLnBvcHVwO1xuXG4gICAgdGhpcy5jb25maWcuYXV0b3BpY2sgPSBwcm9wcy5hdXRvcGljaztcbiAgICB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICB0aGlzLmNvbmZpZy5yZXN1bHRzID0gcHJvcHMucmVzdWx0cztcbiAgICB0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZSA9IHByb3BzLnJlc3VsdFN0eWxlO1xuICAgIGlmICh0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZSAmJiBwYXJzZUludCh0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZSwgMTApID4gMCkge1xuICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgLy8gY2hlY2sgaWYgc3R5bGUgaXMgbG9hZGVkLCBvdGhlcndpc2UgbG9hZCBpdFxuICAgICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMuY29uZmlnLnJlc3VsdFN0eWxlXSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZSA9IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMuY29uZmlnLnJlc3VsdFN0eWxlXS5zdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFt0aGlzLmNvbmZpZy5yZXN1bHRTdHlsZV0sIHtkb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjb3BlLmNvbmZpZy5yZXN1bHRTdHlsZSA9IHByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3Njb3BlLmNvbmZpZy5yZXN1bHRTdHlsZV0uc3R5bGU7XG4gICAgICAgICAgfX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLmNvbGxhcHNlZCA9IHByb3BzLmNvbGxhcHNlZDtcbiAgICB0aGlzLmNvbmZpZy5yZXN1bHRDb3VudCA9IHByb3BzLnJlc3VsdENvdW50O1xuICAgIHRoaXMuY29uZmlnLmNhY2hpbmcgPSBwcm9wcy5jYWNoaW5nO1xuICAgIHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXI7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogIXByb3BzLmNvbGxhcHNlZCxcbiAgICAgIHF1ZXJ5OiBcIlwiLCAvLyB0aGUgc2VhcmNoIHF1ZXJ5XG4gICAgICByZXN1bHRzOiBbXSxcbiAgICAgIGN1cnJlbnRDb29yZGluYXRlOiBbXSxcbiAgICAgIG9wZW5SZXN1bHRzOiBmYWxzZSxcbiAgICAgIC8vIGRldGFpbE9wZW5SZXN1bHRzOiBmYWxzZSxcbiAgICAgIGN1cnJlbnRSZXN1bHQ6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy5pbnB1dENhbGxiYWNrID0gdGhpcy5pbnB1dENhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVDYWxsYmFjayA9IHRoaXMuZGVsZXRlQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0U2VhcmNoID0gdGhpcy5zdGFydFNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9vbVRvID0gdGhpcy56b29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlUmVzdWx0cyA9IHRoaXMuY2xvc2VSZXN1bHRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuUmVzdWx0cyA9IHRoaXMub3BlblJlc3VsdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VSZXN1bHRzQ29tcGxldGVseSA9IHRoaXMuY2xvc2VSZXN1bHRzQ29tcGxldGVseS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb2RlQ2xhc3MgPSB0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyA/IFwiYzRnLW9wZW5cIiA6IFwiYzRnLWNsb3NlXCI7XG4gICAgaWYgKHRoaXMucHJvcHMuZXh0RGl2KSB7XG4gICAgICBtb2RlQ2xhc3MgKz0gXCIgZXh0ZXJuYWwgXCI7XG4gICAgfVxuICAgIGxldCByZXN1bHRzID0gXCJcIjtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiB0aGlzLmNvbmZpZy5yZXN1bHRzKSB7XG4gICAgICByZXN1bHRzID0gPEdlb1NlYXJjaFJlc3VsdHMgY2xhc3NOYW1lPXttb2RlQ2xhc3N9IHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gZXh0RGl2PXt0aGlzLnByb3BzLmV4dFJlc3VsdHNEaXZ9IHpvb21GdW5jPXsoaWR4KSA9PiB7dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFJlc3VsdDogdGhpcy5zdGF0ZS5yZXN1bHRzW2lkeF19KTsgdGhpcy56b29tVG8oaWR4KTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUmVzdWx0cz17dGhpcy5jbG9zZVJlc3VsdHN9IGhlYWRsaW5lPXt0aGlzLnByb3BzLnJlc3VsdHNIZWFkbGluZX0gY3VycmVudFJlc3VsdD17dGhpcy5zdGF0ZS5jdXJyZW50UmVzdWx0fSByZXN1bHRzRGl2PXt0aGlzLnByb3BzLnJlc3VsdHNEaXZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5yZXN1bHRzLmxlbmd0aCA+MH0gb3BlblJlc3VsdHM9e3RoaXMub3BlblJlc3VsdHN9IGNsb3NlQ2I9e3RoaXMuY2xvc2VSZXN1bHRzQ29tcGxldGVseX1cbiAgICAgIC8+O1xuICAgIH1cbiAgICBsZXQgY2xvc2VCdG5DbGFzcyA9IFwiXCI7XG4gICAgbGV0IGNsb3NlQnRuQ2IgPSBcIlwiO1xuICAgIGlmICghdGhpcy5wcm9wcy5leHRlcm5hbCkge1xuICAgICAgY2xvc2VCdG5DbGFzcyA9IFwiYzRnLXRpdGxlYmFyLWNsb3NlXCI7XG4gICAgICBjbG9zZUJ0bkNiID0gdGhpcy5jbGlja0NvbnRyb2w7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRsaW5lID0gdGhpcy5wcm9wcy5oZWFkbGluZTtcbiAgICBpZiAoIWhlYWRsaW5lKSB7XG4gICAgICBoZWFkbGluZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5HRU9TRUFSQ0g7XG4gICAgfVxuICAgIGxldCBpbnB1dCA9IG51bGxcbiAgICBpZiAodGhpcy5wcm9wcy5leHRlcm5hbCkge1xuICAgICAgaW5wdXQgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZ2Vvc2VhcmNoLWZpbHRlclwifT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5kZWxldGVDYWxsYmFja30gb25LZXlEb3duPXt0aGlzLmlucHV0Q2FsbGJhY2t9IGlkPXtcImM0Zy1nZW9zZWFyY2gtaW5wdXRcIn0gcGxhY2Vob2xkZXI9e3RoaXMuY29uZmlnLnBsYWNlaG9sZGVyfSBhcmlhLWxhYmVsPXt0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcn0vPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkdFT1NFQVJDSF9TVEFSVH0gdHlwZT17XCJidXR0b25cIn0gdGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJUX1NFQVJDSH0gb25Nb3VzZVVwPXt0aGlzLnN0YXJ0U2VhcmNofS8+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmV4dGVybmFsIHx8ICh0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuUmVzdWx0cykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5HRU9TRUFSQ0hfV1JBUFBFUiArIFwiIFwiICsgbW9kZUNsYXNzICsgXCIgYzRnLWhvcml6b25cIn0+XG4gICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtaGVhZGVyXCJ9IGhlYWRlcj17aGVhZGxpbmV9IGhlYWRlckNsYXNzPXtcImM0Zy1nZW9zZWFyY2gtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsQnRuQ2xhc3M9e1wiXCJ9IGRldGFpbEJ0bkNiPXtcIlwifSBjbG9zZUJ0bkNsYXNzPXtjbG9zZUJ0bkNsYXNzfSBjbG9zZUJ0bkNiPXtjbG9zZUJ0bkNifSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgIHtpbnB1dH1cbiAgICAgICAgICAgICAge3Jlc3VsdHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjbG9zZVJlc3VsdHNDb21wbGV0ZWx5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoICYmIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5yZXN1bHRzKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmIChwcmV2U3RhdGUub3BlbiAhPT0gdGhpcy5zdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUucmVzdWx0cyAmJiB0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3BlblJlc3VsdHMgJiYgIXRoaXMucHJvcHMuZXh0UmVzdWx0c0Rpdikge1xuICAgICAgICAgIGpRdWVyeShcIi5jNGctZ2Vvc2VhcmNoLWNvbnRhaW5lci1yaWdodFwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGpRdWVyeShcIi5jNGctZ2Vvc2VhcmNoLWNvbnRhaW5lci1yaWdodFwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcpIHtcbiAgICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICAgIGlmIChwYW5lbFZhbCA9PT0gXCJHZW9TZWFyY2hcIiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYW5lbFZhbCAhPT0gXCJHZW9TZWFyY2hcIiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiR2VvU2VhcmNoXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgc3RhcnRTZWFyY2goZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUKTtcbiAgICB0cnkge1xuICAgICAgYnV0dG9uLmJsdXIoKTtcbiAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICB9XG4gICAgbGV0IHNlYXJjaElucHV0ID0galF1ZXJ5KFwiI2M0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICB0aGlzLmZpbmRMb2NhdGlvbihzZWFyY2hJbnB1dC52YWwoKSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDYWxsYmFjayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgIGxldCBzZWFyY2hJbnB1dCA9IGpRdWVyeShcIiNjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgaWYgKHNlYXJjaElucHV0LnZhbCgpKSB7XG4gICAgICAgIHRoaXMuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlQ2FsbGJhY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgc2VhcmNoSW5wdXQgPSBqUXVlcnkoXCIjYzRnLWdlb3NlYXJjaC1pbnB1dFwiKTtcbiAgICBsZXQgdmFsdWUgPSBzZWFyY2hJbnB1dC52YWwoKTtcbiAgICBpZiAodGhpcy5sYXN0VmFsICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5sYXN0VmFsID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdKSB7XG4gICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb21wb25lbnQ7XG4gICAgICAgICAgY29tcG9uZW50LmFwcGx5T2xkU3RhdGUoXCJzZWFyY2hSZXN1bHRzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tDb250cm9sKGRpc3JlZ2FyZFN0YXRlKSB7XG4gICAgbGV0IG9wZW4gPSBkaXNyZWdhcmRTdGF0ZSAhPT0gdW5kZWZpbmVkID8gZGlzcmVnYXJkU3RhdGUgOiB0aGlzLnN0YXRlLm9wZW5cbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5leHRlcm5hbCkge1xuICAgICAgICBqUXVlcnkodGhpcy5pbnB1dCkuYWRkQ2xhc3MoJ2M0Zy1jbG9zZScpLnJlbW92ZUNsYXNzKCdjNGctb3BlbicpO1xuICAgICAgfVxuICAgICAgLy8galF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZWFyY2hDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmlucHV0KS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8vIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgICAgLy8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VSZXN1bHRzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbE9wZW5SZXN1bHRzOiBmYWxzZX0pO1xuICB9XG5cbiAgb3BlblJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsT3BlblJlc3VsdHM6IHRydWV9KTtcbiAgfVxuXG4gIGZpbmRMb2NhdGlvbihsb2NhdGlvbiwgb3B0X29wdGlvbnMpIHtcbiAgICBsZXQgbWFwLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgbWFya1Jlc3VsdCxcbiAgICAgIG1hcENvbnRyb2xsZXI7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBtYXAgPSBtYXBDb250cm9sbGVyLm1hcDtcblxuICAgIC8vIHNob3cgc3Bpbm5lclxuICAgIG1hcENvbnRyb2xsZXIuc3Bpbm5lci5zaG93KCk7XG5cbiAgICBhbmltYXRlID0gdGhpcy5jb25maWcuYW5pbWF0ZTtcbiAgICBhbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbjtcbiAgICBtYXJrUmVzdWx0ID0gdGhpcy5jb25maWcubWFya1Jlc3VsdDtcblxuICAgIGlmICh0eXBlb2Ygb3B0X29wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAob3B0X29wdGlvbnMuYW5pbWF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFuaW1hdGUgPSBvcHRfb3B0aW9ucy5hbmltYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG9wdF9vcHRpb25zLm1hcmtSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYXJrUmVzdWx0ID0gb3B0X29wdGlvbnMubWFya1Jlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcucXVpY2tzZWFyY2gpIHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBmb3JtYXQ6IFwianNvblwiLFxuICAgICAgICBxOiBsb2NhdGlvblxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXN1bHRDb3VudCkge1xuICAgICAgICBkYXRhLmxpbWl0ID0gdGhpcy5jb25maWcucmVzdWx0Q291bnQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcua2V5KSB7XG4gICAgICAgIGRhdGEua2V5ID0gdGhpcy5jb25maWcua2V5O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhcmFtcykge1xuICAgICAgICBmb3IgKGxldCBwYXJhbSBpbiB0aGlzLmNvbmZpZy5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcucGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgZGF0YVtwYXJhbV0gPSB0aGlzLmNvbmZpZy5wYXJhbXNbcGFyYW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGFyclJlc3VsdHMgPSB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfc2VhcmNoLCBbZGF0YSwgdGhpc10pO1xuICAgICAgaWYgKGFyclJlc3VsdHMgJiYgYXJyUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyUmVzdWx0cykge1xuICAgICAgICAgIGlmIChhcnJSZXN1bHRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICB0aGlzLmRvbmVGdW5jdGlvbihhcnJSZXN1bHRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBBSkFYIC0+IEBub21pbmF0aW1cbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICB1cmw6IHRoaXMuY29uZmlnLnVybCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZG9uZSh0aGlzLmRvbmVGdW5jdGlvbilcblxuICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBAVE9ET1xuICAgICAgICAgICAgICAvLyBzZWxmLnJlc3VsdFdyYXBwZXIuaW5uZXJIVE1MID0gJ29ob2ghJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2NvcGUuY29uZmlnLm1hcENvbnRyb2xsZXIuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guc2hvd09ubHlSZXN1bHRzKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJsYXllcnN3aXRjaGVyXCIpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xICYmIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0pIHtcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuYnV0dG9uRW5hYmxlZCkge1xuICAgICAgICAgICAgICBjb21wb25lbnQudG9nZ2xlQWxsTGF5ZXJzKFwic2VhcmNoUmVzdWx0c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBAVE9ET1xuICAgIH1cblxuICB9XG4gIGRvbmVGdW5jdGlvbiAocmVzdWx0cykge1xuXG4gICAgdmFyIG1hcFZpZXcsXG4gICAgICAgIGN1cnJlbnRDb29yZGluYXRlLFxuICAgICAgICByZXN1bHRDb29yZGluYXRlLFxuICAgICAgICBjb29yZERpZixcbiAgICAgICAgZGlmQ29udGV4dCxcbiAgICAgICAgdmlld0V4dGVudCxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBvc21FeHRlbnQsXG4gICAgICAgIHJlc29sdXRpb24sXG4gICAgICAgIHpvb21UeXBlLFxuICAgICAgICBmbHlUbyxcbiAgICAgICAgY29tcGxldGVTZWFyY2gsXG4gICAgICAgIG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIsXG4gICAgICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwLFxuICAgICAgICBhbmltYXRlID0gdGhpcy5jb25maWcuYW5pbWF0ZSxcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sXG4gICAgICAgIG1hcmtSZXN1bHQgPSB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0O1xuXG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggJiYgcmVzdWx0cy5sZW5ndGggPiAwKXtcbiAgICAgIG1hcFZpZXcgPSBtYXAuZ2V0VmlldygpO1xuICAgICBcbiAgICAgIGlmIChyZXN1bHRzWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIGlmIChyZXN1bHQuaGFzT3duUHJvcGVydHkoJ3V1aWQnKSkge1xuICAgICAgICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwibGF5ZXJzd2l0Y2hlclwiKTtcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XS5jb21wb25lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucmVzdWx0cykge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRzW2ldLmhhc093blByb3BlcnR5KCd1dWlkJykpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaCh0aGlzLnJlc3VsdHNbaV0udXVpZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0c1tpXS5oYXNPd25Qcm9wZXJ0eSgnbG9uJykgJiYgdGhpcy5yZXN1bHRzW2ldLmhhc093blByb3BlcnR5KCdsYXQnKSAmJiB0aGlzLnJlc3VsdHNbaV0ubG9uICYmIHRoaXMucmVzdWx0c1tpXS5sYXQpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKHRyYW5zZm9ybShbcGFyc2VGbG9hdCh0aGlzLnJlc3VsdHNbaV0ubG9uKSxwYXJzZUZsb2F0KHRoaXMucmVzdWx0c1tpXS5sYXQpXSwnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnNob3dPbmx5UmVzdWx0cyAmJiBjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC50b2dnbGVTcGVjaWZpY0xheWVycyhpZHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc2l6ZSA9IG1hcC5nZXRTaXplKCk7XG4gICAgICAgICAgbGV0IGV4dGVudCA9IGJvdW5kaW5nRXh0ZW50KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICBsZXQgZml0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgICAgICBwYWRkaW5nOiBbXG4gICAgICAgICAgICAgICAgc2l6ZVsxXS8xMCxcbiAgICAgICAgICAgICAgICBzaXplWzBdLzEwLFxuICAgICAgICAgICAgICAgIHNpemVbMV0vMTAsXG4gICAgICAgICAgICAgICAgc2l6ZVswXS8xMCxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWFwLmdldFZpZXcoKSAmJiAoY29vcmRpbmF0ZXMubGVuZ3RoID4gMCkgJiYgZXh0ZW50ICYmIGZpdE9wdGlvbnMpIHtcbiAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuZml0KGV4dGVudCwgZml0T3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRDb29yZGluYXRlID0gbWFwVmlldy5nZXRDZW50ZXIoKTtcbiAgICAgICAgICByZXN1bHRDb29yZGluYXRlID0gdHJhbnNmb3JtKFtwYXJzZUZsb2F0KHJlc3VsdC5sb24pLCBwYXJzZUZsb2F0KHJlc3VsdC5sYXQpXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcblxuICAgICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmZseVRvKFxuICAgICAgICAgICAgICAgIG1hcCwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcuem9vbWxldmVsLCB0aGlzLmNvbmZpZy56b29tYm91bmRzLCByZXN1bHQuYm91bmRpbmdfYm94LFxuICAgICAgICAgICAgICAgIG1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uLCBhbmltYXRlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIG1hcC5nZXRWaWV3KCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlU2VhcmNoKHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLmFuaW1hdGUsIHpvb21UeXBlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uKTtcbiAgICAgICAgICAgIG1hcFZpZXcuc2V0Q2VudGVyKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnpvb21sZXZlbCA+PSAwKSB7XG4gICAgICAgICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbSh0aGlzLmNvbmZpZy56b29tbGV2ZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuYXV0b3BpY2sgJiYgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIgJiYgdHlwZW9mIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyLnBpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIuZ2VvcGlja2VyLnBpY2socmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgICAgICBhbGVydChsYW5nQ29uc3RhbnRzLlNFQVJDSF9OT1RfRk9VTkQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVzdWx0cykge1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuaGlkZU90aGVyQ29tcG9uZW50cyh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogdGhpcy5yZXN1bHRzLCBvcGVuOiB0cnVlLCBjdXJyZW50Q29vcmRpbmF0ZTogY3VycmVudENvb3JkaW5hdGUsIG9wZW5SZXN1bHRzOiB0cnVlLCBjdXJyZW50UmVzdWx0OiByZXN1bHRzWzBdfSk7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZseVRvKG1hcCwgbG9jYXRpb24sIHpvb21sZXZlbCwgem9vbWJvdW5kcywgYm91bmRpbmdib3gsIG1hcmtSZXN1bHQsIHJlc3VsdER1cmF0aW9uLCBhbmltYXRlLCBhbmltYXRlRHVyYXRpb24sIG1hcFZpZXcpIHtcbiAgICBsZXQgZHVyYXRpb24gPSBhbmltYXRlRHVyYXRpb247XG4gICAgbGV0IHpvb20gPSB6b29tbGV2ZWw7XG4gICAgbGV0IHBhcnRzID0gMjtcbiAgICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gICAgbGV0IGV4dGVudDtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhjb21wbGV0ZSkge1xuICAgICAgLS1wYXJ0cztcbiAgICAgIGlmIChjYWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnRzID09PSAwIHx8ICFjb21wbGV0ZSkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh6b29tYm91bmRzICYmIGJvdW5kaW5nYm94ICYmIGJvdW5kaW5nYm94WzBdICE9PSBudWxsICYmXG4gICAgICAgICAgYm91bmRpbmdib3hbMV0gIT09IG51bGwgJiYgYm91bmRpbmdib3hbMl0gIT09IG51bGwgJiZcbiAgICAgICAgICBib3VuZGluZ2JveFszXSAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyB0cmFuc2xhdGUgb3NtLWV4dGVudCB0byBvbDMtZXh0ZW50XG5cbiAgICAgICAgICBsZXQgb3NtRXh0ZW50ID0gW107XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsyXSkpO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbMF0pKTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzNdKSk7XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFsxXSkpO1xuXG4gICAgICAgICAgZXh0ZW50ID0gdHJhbnNmb3JtRXh0ZW50KG9zbUV4dGVudCwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcblxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2aWV3Rml0ID0gbWFwVmlldy5maXQoXG4gICAgICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICAgICAgbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1pblpvb206IG1hcFZpZXcuZ2V0KCdtaW5ab29tJykgfHwgMixcbiAgICAgICAgICAgICAgICBtYXhab29tOiB6b29tIHx8IG1hcFZpZXcuZ2V0KCdtYXhab29tJykgfHwgMTgsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMixcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGVhc2VPdXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LCBkdXJhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLmNvbXBsZXRlU2VhcmNoKG1hcmtSZXN1bHQsIGFuaW1hdGUsIFwiYm91bmNlXCIsIGFuaW1hdGVEdXJhdGlvbiwgbG9jYXRpb24sIHJlc3VsdER1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXAuZ2V0VmlldygpLmFuaW1hdGUoe1xuICAgICAgY2VudGVyOiBsb2NhdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgIH0sIGNhbGxiYWNrKTtcblxuICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICB6b29tOiB6b29tIC0gMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAvIDJcbiAgICB9LCB7XG4gICAgICB6b29tOiB6b29tLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgIH0sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBsZXRlU2VhcmNoKG1hcmtSZXN1bHQsIGFuaW1hdGUsIHpvb21UeXBlLCBhbmltYXRpb25EdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgcmVzdWx0RHVyYXRpb24pIHtcbiAgICAvLyByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uXG4gICAgaWYgKG1hcmtSZXN1bHQpIHtcbiAgICAgIGxldCBhZGRNYXJrZXIsXG4gICAgICAgIG1hcmtlclNvdXJjZSxcbiAgICAgICAgbWFya2VyTGF5ZXIsXG4gICAgICAgIGFuaW1hdGVNYXJrZXI7XG5cbiAgICAgIG1hcmtlclNvdXJjZSA9IG5ldyBWZWN0b3JTb3VyY2UoKTtcbiAgICAgIGxldCBzdHlsZSA9IHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlO1xuICAgICAgaWYgKCFzdHlsZSB8fCBzdHlsZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgc3R5bGUgPSBbbmV3IFN0eWxlKHtcbiAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICByYWRpdXM6IDcsXG4gICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogMjAsXG4gICAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgaW1hZ2U6IG5ldyBDaXJjbGUoe1xuICAgICAgICAgICAgICByYWRpdXM6IDMzLFxuICAgICAgICAgICAgICBzbmFwVG9QaXhlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDIwMCwgMCwgMCwgJyArIDAuOSArICcpJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIG1hcmtlckxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgc291cmNlOiBtYXJrZXJTb3VyY2UsXG4gICAgICAgIHpJbmRleDogOTk5OTlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcihtYXJrZXJMYXllcik7XG5cbiAgICAgIGFkZE1hcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFya2VyU291cmNlLmFkZEZlYXR1cmUoXG4gICAgICAgICAgbmV3IEZlYXR1cmUoXG4gICAgICAgICAgICBuZXcgUG9pbnQocmVzdWx0Q29vcmRpbmF0ZSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlTWFya2VyID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGFuaW1hdGlvblN0ZXAsXG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgbGlzdGVuZXJLZXk7XG5cbiAgICAgICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgZHVyYXRpb24gPSByZXN1bHREdXJhdGlvbjtcblxuICAgICAgICBhbmltYXRpb25TdGVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgbGV0IHZlY3RvckNvbnRleHQsXG4gICAgICAgICAgICBmcmFtZVN0YXRlLFxuICAgICAgICAgICAgZWxhcHNlZCxcbiAgICAgICAgICAgIGVsYXBzZWRSYXRpbyxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICBmbGFzaEdlb207XG5cbiAgICAgICAgICB2ZWN0b3JDb250ZXh0ID0gZ2V0VmVjdG9yQ29udGV4dChldmVudCk7XG4gICAgICAgICAgZnJhbWVTdGF0ZSA9IGV2ZW50LmZyYW1lU3RhdGU7XG4gICAgICAgICAgZmxhc2hHZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmNsb25lKCk7XG4gICAgICAgICAgZWxhcHNlZCA9IGZyYW1lU3RhdGUudGltZSAtIHN0YXJ0O1xuICAgICAgICAgIGVsYXBzZWRSYXRpbyA9IGVsYXBzZWQgLyBkdXJhdGlvbjtcbiAgICAgICAgICByYWRpdXMgPSBsaW5lYXIoMSAtIGVsYXBzZWRSYXRpbykgKiAxMDA7XG4gICAgICAgICAgaWYgKHJhZGl1cyA8IDApIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wYWNpdHkgPSBsaW5lYXIoZWxhcHNlZFJhdGlvKTtcblxuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgU3R5bGUoKTtcblxuICAgICAgICAgIHZlY3RvckNvbnRleHQuc2V0U3R5bGUobWFya2VyKTtcbiAgICAgICAgICB2ZWN0b3JDb250ZXh0LmRyYXdHZW9tZXRyeShmbGFzaEdlb20sIG51bGwpO1xuXG4gICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgbWFya2VyU291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICB1bkJ5S2V5KGxpc3RlbmVyS2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29udGludWUgcG9zdHJlbmRlciBhbmltYXRpb25cbiAgICAgICAgICBmcmFtZVN0YXRlLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICB9OyAvLyBlbmQgb2YgXCJhbmltYXRpb25TdGVwXCJcblxuICAgICAgICBsaXN0ZW5lcktleSA9IG1hcmtlckxheWVyLm9uKCdwb3N0cmVuZGVyJywgYW5pbWF0aW9uU3RlcCk7XG5cbiAgICAgIH07IC8vIGVuZCBvZiBcImFuaW1hdGVNYXJrZXJcIlxuXG4gICAgICBtYXJrZXJTb3VyY2Uub24oJ2FkZGZlYXR1cmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgYW5pbWF0ZU1hcmtlcihldmVudC5mZWF0dXJlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBpZiAoem9vbVR5cGUgPT09ICd6b29tJykge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhZGRNYXJrZXIsIGFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE1hcmtlcigpO1xuICAgICAgfVxuXG4gICAgfS8vIGVuZCBvZiByZXN1bHQgbWFya2VyICYgYW5pbWF0aW9uIGhhbmRsaW5nXG4gICAgaWYgKHRoaXMuY29uZmlnLnBvcHVwKSB7XG4gICAgICBsZXQgcGl4ZWwgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFBpeGVsRnJvbUNvb3JkaW5hdGUocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICB0eXBlOiAnY2xpY2snLFxuICAgICAgICAgIHBpeGVsOiBwaXhlbCxcbiAgICAgICAgfSwxMDApO1xuICAgICAgfSlcblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAVE9ET1xuICAgKlxuICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgbG9jYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB6b29tVG8oaW5kZXgpIHtcbiAgICBsZXQgbWFwLFxuICAgICAgcmVzdWx0LFxuICAgICAgcmVzdWx0Q29vcmRpbmF0ZSxcbiAgICAgIG1hcENvbnRyb2xsZXIsXG4gICAgICB6b29tVHlwZTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwO1xuICAgIGxldCBtYXBWaWV3ID0gbWFwLmdldFZpZXcoKTtcbiAgICBsZXQgY3VycmVudENvb3JkaW5hdGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRDb29yZGluYXRlO1xuXG4gICAgcmVzdWx0ID0gc2NvcGUucmVzdWx0c1tpbmRleF07XG4gICAgcmVzdWx0Q29vcmRpbmF0ZSA9IHRyYW5zZm9ybShbcGFyc2VGbG9hdChyZXN1bHQubG9uKSwgcGFyc2VGbG9hdChyZXN1bHQubGF0KV0sICdFUFNHOjQzMjYnLCAnRVBTRzozODU3Jyk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGUpIHtcbiAgICAgIHZhciByZXNvbHV0aW9uID0gbWFwVmlldy5nZXRSZXNvbHV0aW9uKCk7XG4gICAgICB2YXIgdmlld0V4dGVudCA9IG1hcFZpZXcuY2FsY3VsYXRlRXh0ZW50KG1hcC5nZXRTaXplKCkpO1xuICAgICAgaWYgKGNvbnRhaW5zQ29vcmRpbmF0ZSh2aWV3RXh0ZW50LCByZXN1bHRDb29yZGluYXRlKSkge1xuICAgICAgICB6b29tVHlwZSA9ICd6b29tJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVswXSAtIHJlc3VsdENvb3JkaW5hdGVbMF0pID4gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMV0gLSByZXN1bHRDb29yZGluYXRlWzFdKSkge1xuICAgICAgICAgIHZhciBjb29yZERpZiA9IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzBdIC0gcmVzdWx0Q29vcmRpbmF0ZVswXSk7XG4gICAgICAgICAgdmFyIGRpZkNvbnRleHQgPSBnZXRXaWR0aCh2aWV3RXh0ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb29yZERpZiA9IE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzFdIC0gcmVzdWx0Q29vcmRpbmF0ZVsxXSk7XG4gICAgICAgICAgZGlmQ29udGV4dCA9IGdldEhlaWdodCh2aWV3RXh0ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmREaWYgPiAwKSB7XG4gICAgICAgICAgcmVzb2x1dGlvbiAqPSBjb29yZERpZiAvIGRpZkNvbnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgem9vbVR5cGUgPSAnYm91bmNlJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5mbHlUbyhcbiAgICAgICAgICBtYXAsIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnpvb21sZXZlbCwgdGhpcy5jb25maWcuem9vbWJvdW5kcywgcmVzdWx0LmJvdW5kaW5nX2JveCxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0LCB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbiwgdGhpcy5jb25maWcuYW5pbWF0ZSwgdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uLCBtYXBWaWV3KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlU2VhcmNoKHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLmFuaW1hdGUsIHpvb21UeXBlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIHJlc3VsdENvb3JkaW5hdGUsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uKTtcbiAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnpvb21sZXZlbCA+PSAwKSB7XG4gICAgICAgIG1hcC5nZXRWaWV3KCkuc2V0Wm9vbSh0aGlzLmNvbmZpZy56b29tbGV2ZWwpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn0iXSwibmFtZXMiOlsiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiX2NvbnRyb2wiLCJfYzRnTWFwc0kxOG4iLCJfYzRnTWFwc0NvbnN0YW50IiwiX3Byb2oiLCJfZWFzaW5nIiwiX3NvdXJjZSIsIl9sYXllciIsIl9zdHlsZSIsIl9vbCIsIl9nZW9tIiwiX3JlbmRlciIsIl9PYnNlcnZhYmxlIiwiX2M0Z01hcHNVdGlscyIsIl9leHRlbnQiLCJlIiwidCIsIldlYWtNYXAiLCJyIiwibiIsIl9fZXNNb2R1bGUiLCJvIiwiaSIsImYiLCJfX3Byb3RvX18iLCJfdHlwZW9mMyIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiR2VvU2VhcmNoUmVzdWx0cyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiR2VvU2VhcmNoIiwiZXhwb3J0cyIsIl9Db21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrMiIsImxhbmdDb25zdGFudHMiLCJnZXRMYW5ndWFnZSIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwiY2xpY2tDb250cm9sIiwiYmluZCIsImRvbmVGdW5jdGlvbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsIkNUUkxfR0VPU0VBUkNIIiwiYXBwZW5kQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc05hbWUiLCJqUXVlcnkiLCJvbiIsImV4dGVybmFsIiwiZ2Vvc2VhcmNoIiwiaW5wdXRDc3NTZWxlY3RvciIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImlucHV0Q2FsbGJhY2siLCJkZWxldGVDYWxsYmFjayIsImNvbGxhcHNlZCIsImFkZENsYXNzIiwiaW5uZXJIVE1MIiwiY29udHJvbEVsZW1lbnQiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImNvbmZpZyIsInNlYXJjaEtleSIsInVybCIsImtleSIsInBhcmFtcyIsImFwaSIsInByb2ZpbGUiLCJ6b29tbGV2ZWwiLCJzZWFyY2hab29tIiwiem9vbWJvdW5kcyIsInpvb21Cb3VuZHMiLCJxdWlja3NlYXJjaCIsImFuaW1hdGUiLCJtYXJrUmVzdWx0IiwiYW5pbWF0ZUR1cmF0aW9uIiwicmVzdWx0RHVyYXRpb24iLCJwb3B1cCIsImF1dG9waWNrIiwicmVzdWx0cyIsInJlc3VsdFN0eWxlIiwicGFyc2VJbnQiLCJzY29wZSIsInByb3h5IiwibG9jYXRpb25TdHlsZUNvbnRyb2xsZXIiLCJhcnJMb2NTdHlsZXMiLCJzdHlsZSIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRvbmUiLCJyZXN1bHRDb3VudCIsImNhY2hpbmciLCJwbGFjZWhvbGRlciIsInN0YXRlIiwib3BlbiIsInF1ZXJ5IiwiY3VycmVudENvb3JkaW5hdGUiLCJvcGVuUmVzdWx0cyIsImN1cnJlbnRSZXN1bHQiLCJzdGFydFNlYXJjaCIsInpvb21UbyIsImNsb3NlUmVzdWx0cyIsImNsb3NlIiwiY2xvc2VSZXN1bHRzQ29tcGxldGVseSIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJtb2RlQ2xhc3MiLCJleHREaXYiLCJleHRSZXN1bHRzRGl2Iiwiem9vbUZ1bmMiLCJpZHgiLCJzZXRTdGF0ZSIsImhlYWRsaW5lIiwicmVzdWx0c0hlYWRsaW5lIiwicmVzdWx0c0RpdiIsImxlbmd0aCIsImNsb3NlQ2IiLCJjbG9zZUJ0bkNsYXNzIiwiY2xvc2VCdG5DYiIsIkdFT1NFQVJDSCIsInR5cGUiLCJvbklucHV0Iiwib25LZXlEb3duIiwiaWQiLCJjc3NDb25zdGFudHMiLCJHRU9TRUFSQ0hfU1RBUlQiLCJ0aXRsZSIsIkNUUkxfU1RBUlRfU0VBUkNIIiwib25Nb3VzZVVwIiwiRnJhZ21lbnQiLCJHRU9TRUFSQ0hfV1JBUFBFUiIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJ3cmFwcGVyQ2xhc3MiLCJoZWFkZXIiLCJoZWFkZXJDbGFzcyIsImRldGFpbEJ0bkNsYXNzIiwiZGV0YWlsQnRuQ2IiLCJjbG9zZUJ0blRpdGxlIiwiQ0xPU0UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInNldE9wZW5Db21wb25lbnQiLCJyZW1vdmVDbGFzcyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsInN0b3JlVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiaWdub3JlIiwic2VhcmNoSW5wdXQiLCJ2YWwiLCJmaW5kTG9jYXRpb24iLCJ3aGljaCIsImxhc3RWYWwiLCJjb21wb25lbnQiLCJhcHBseU9sZFN0YXRlIiwiZGlzcmVnYXJkU3RhdGUiLCJ1bmRlZmluZWQiLCJmb2N1cyIsImRldGFpbE9wZW5SZXN1bHRzIiwibG9jYXRpb24iLCJvcHRfb3B0aW9ucyIsIm1hcCIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3Bpbm5lciIsInNob3ciLCJfdHlwZW9mMiIsImZvcm1hdCIsInEiLCJsaW1pdCIsInBhcmFtIiwiYXJyUmVzdWx0cyIsImNhbGxIb29rRnVuY3Rpb25zIiwid2luZG93IiwiYzRnTWFwc0hvb2tzIiwiaG9va19zZWFyY2giLCJoaWRlIiwiYWpheCIsImRhdGFUeXBlIiwiZmFpbCIsImFsd2F5cyIsInNob3dPbmx5UmVzdWx0cyIsImJ1dHRvbkVuYWJsZWQiLCJ0b2dnbGVBbGxMYXllcnMiLCJtYXBWaWV3IiwicmVzdWx0Q29vcmRpbmF0ZSIsImNvb3JkRGlmIiwiZGlmQ29udGV4dCIsInZpZXdFeHRlbnQiLCJyZXN1bHQiLCJvc21FeHRlbnQiLCJyZXNvbHV0aW9uIiwiem9vbVR5cGUiLCJmbHlUbyIsImNvbXBsZXRlU2VhcmNoIiwiZ2V0VmlldyIsImlkcyIsImNvb3JkaW5hdGVzIiwicHVzaCIsInV1aWQiLCJsb24iLCJsYXQiLCJ0cmFuc2Zvcm0iLCJwYXJzZUZsb2F0IiwidG9nZ2xlU3BlY2lmaWNMYXllcnMiLCJzaXplIiwiZ2V0U2l6ZSIsImV4dGVudCIsImJvdW5kaW5nRXh0ZW50IiwiZml0T3B0aW9ucyIsImR1cmF0aW9uIiwicGFkZGluZyIsImZpdCIsImdldENlbnRlciIsImJvdW5kaW5nX2JveCIsInNldENlbnRlciIsInNldFpvb20iLCJnZW9waWNrZXIiLCJwaWNrIiwib3B0aW9ucyIsImFsZXJ0IiwiU0VBUkNIX05PVF9GT1VORCIsImhpZGVPdGhlckNvbXBvbmVudHMiLCJib3VuZGluZ2JveCIsInpvb20iLCJwYXJ0cyIsImNhbGxlZCIsImNhbGxiYWNrIiwiY29tcGxldGUiLCJ0cmFuc2Zvcm1FeHRlbnQiLCJzZXRUaW1lb3V0Iiwidmlld0ZpdCIsIm1pblpvb20iLCJtYXhab29tIiwiZWFzaW5nIiwiZWFzZU91dCIsImNlbnRlciIsIl90aGlzMyIsImFkZE1hcmtlciIsIm1hcmtlclNvdXJjZSIsIm1hcmtlckxheWVyIiwiYW5pbWF0ZU1hcmtlciIsIlZlY3RvclNvdXJjZSIsIlN0eWxlIiwiaW1hZ2UiLCJDaXJjbGUiLCJyYWRpdXMiLCJzbmFwVG9QaXhlbCIsInN0cm9rZSIsIlN0cm9rZSIsImNvbG9yIiwid2lkdGgiLCJvcGFjaXR5IiwiVmVjdG9yIiwic291cmNlIiwiekluZGV4IiwiYWRkTGF5ZXIiLCJhZGRGZWF0dXJlIiwiRmVhdHVyZSIsIlBvaW50IiwiZmVhdHVyZSIsImFuaW1hdGlvblN0ZXAiLCJzdGFydCIsImxpc3RlbmVyS2V5IiwiRGF0ZSIsImdldFRpbWUiLCJ2ZWN0b3JDb250ZXh0IiwiZnJhbWVTdGF0ZSIsImVsYXBzZWQiLCJlbGFwc2VkUmF0aW8iLCJmbGFzaEdlb20iLCJnZXRWZWN0b3JDb250ZXh0IiwiZ2V0R2VvbWV0cnkiLCJjbG9uZSIsInRpbWUiLCJsaW5lYXIiLCJtYXJrZXIiLCJzZXRTdHlsZSIsImRyYXdHZW9tZXRyeSIsImNsZWFyIiwidW5CeUtleSIsInBpeGVsIiwiZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZSIsImRpc3BhdGNoRXZlbnQiLCJnZXRSZXNvbHV0aW9uIiwiY2FsY3VsYXRlRXh0ZW50IiwiY29udGFpbnNDb29yZGluYXRlIiwiTWF0aCIsImFicyIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==