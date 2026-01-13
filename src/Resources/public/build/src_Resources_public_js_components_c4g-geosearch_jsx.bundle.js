"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-geosearch_jsx"],{

/***/ "./src/Resources/public/js/components/c4g-geosearch.jsx"
/*!**************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-geosearch.jsx ***!
  \**************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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
      if (input) {
        input.setAttribute('id', "c4g-geosearch-input");
        input.addEventListener('keydown', function (event) {
          _this.inputCallback(event);
        });
        input.addEventListener('input', function (event) {
          _this.deleteCallback(event);
        });
        _this.input = input;
      }
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZ2Vvc2VhcmNoX2pzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLG1CQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRCxtQkFBQTtBQUNBLElBQUFFLFlBQUEsR0FBQUYsbUJBQUE7QUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxtQkFBQTtBQUdBLElBQUFJLEtBQUEsR0FBQUosbUJBQUE7QUFDQSxJQUFBSyxPQUFBLEdBQUFMLG1CQUFBO0FBQ0EsSUFBQU0sT0FBQSxHQUFBTixtQkFBQTtBQUNBLElBQUFPLE1BQUEsR0FBQVAsbUJBQUE7QUFDQSxJQUFBUSxNQUFBLEdBQUFSLG1CQUFBO0FBQ0EsSUFBQVMsR0FBQSxHQUFBVCxtQkFBQTtBQUNBLElBQUFVLEtBQUEsR0FBQVYsbUJBQUE7QUFDQSxJQUFBVyxPQUFBLEdBQUFYLG1CQUFBO0FBQ0EsSUFBQVksV0FBQSxHQUFBWixtQkFBQTtBQUNBLElBQUFhLGFBQUEsR0FBQWIsbUJBQUE7QUFDQSxJQUFBYyxPQUFBLEdBQUFkLG1CQUFBO0FBQXlDLFNBQUFELHdCQUFBZ0IsQ0FBQSxFQUFBQyxDQUFBLDZCQUFBQyxPQUFBLE1BQUFDLENBQUEsT0FBQUQsT0FBQSxJQUFBRSxDQUFBLE9BQUFGLE9BQUEsWUFBQWxCLHVCQUFBLFlBQUFBLHdCQUFBZ0IsQ0FBQSxFQUFBQyxDQUFBLFNBQUFBLENBQUEsSUFBQUQsQ0FBQSxJQUFBQSxDQUFBLENBQUFLLFVBQUEsU0FBQUwsQ0FBQSxNQUFBTSxDQUFBLEVBQUFDLENBQUEsRUFBQUMsQ0FBQSxLQUFBQyxTQUFBLG1CQUFBVCxDQUFBLGlCQUFBQSxDQUFBLGdCQUFBVSxRQUFBLENBQUFWLENBQUEsMEJBQUFBLENBQUEsU0FBQVEsQ0FBQSxNQUFBRixDQUFBLEdBQUFMLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFB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Q1MsVUFBVSxFQUFFNkgsTUFBTSxDQUFDeUIsWUFBWSxFQUN6RixJQUFJLENBQUMvSixNQUFNLENBQUNhLFVBQVUsRUFBRSxJQUFJLENBQUNiLE1BQU0sQ0FBQ2UsY0FBYyxFQUFFLElBQUksQ0FBQ2YsTUFBTSxDQUFDWSxPQUFPLEVBQUUsSUFBSSxDQUFDWixNQUFNLENBQUNjLGVBQWUsRUFBRW1ILE9BQU8sQ0FBQztNQUNwSCxDQUFDLE1BQ0k7UUFDSCxJQUFJLENBQUNVLGNBQWMsQ0FBQyxJQUFJLENBQUMzSSxNQUFNLENBQUNhLFVBQVUsRUFBRSxJQUFJLENBQUNiLE1BQU0sQ0FBQ1ksT0FBTyxFQUFFNkgsUUFBUSxFQUFFLElBQUksQ0FBQ3pJLE1BQU0sQ0FBQ2MsZUFBZSxFQUFFb0gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDbEksTUFBTSxDQUFDZSxjQUFjLENBQUM7UUFDcko0RixHQUFHLENBQUNpQyxPQUFPLENBQUMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDOUIsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUNsSSxNQUFNLENBQUNPLFNBQVMsSUFBSSxDQUFDLEVBQUU7VUFDOUJvRyxHQUFHLENBQUNpQyxPQUFPLENBQUMsQ0FBQyxDQUFDcUIsT0FBTyxDQUFDLElBQUksQ0FBQ2pLLE1BQU0sQ0FBQ08sU0FBUyxDQUFDO1FBQzlDO01BQ0Y7SUFFRjtFQUFDO0FBQUEsRUEvc0JvQ3FPLGdCQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctZ2Vvc2VhcmNoLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLm1kXCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuLy9pbXBvcnQge0dlb1NlYXJjaFJlc3VsdHN9IGZyb20gXCIuL2M0Zy1nZW9zZWFyY2gtcmVzdWx0cy5qc3hcIjtcbmNvbnN0IEdlb1NlYXJjaFJlc3VsdHMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWdlb3NlYXJjaC1yZXN1bHRzLmpzeFwiKSk7XG5pbXBvcnQge3RyYW5zZm9ybSwgdHJhbnNmb3JtRXh0ZW50fSBmcm9tIFwib2wvcHJvalwiO1xuaW1wb3J0IHtlYXNlT3V0LCBsaW5lYXJ9IGZyb20gXCJvbC9lYXNpbmdcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuaW1wb3J0IHtDaXJjbGUsIFN0cm9rZSwgU3R5bGV9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tIFwib2xcIjtcbmltcG9ydCB7UG9pbnR9IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2dldFZlY3RvckNvbnRleHR9IGZyb20gXCJvbC9yZW5kZXJcIjtcbmltcG9ydCB7dW5CeUtleX0gZnJvbSBcIm9sL09ic2VydmFibGVcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuaW1wb3J0IHtib3VuZGluZ0V4dGVudH0gZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjb250YWluc0Nvb3JkaW5hdGUsIGdldEhlaWdodCwgZ2V0V2lkdGh9IGZyb20gXCJvbC9leHRlbnRcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICAvLyBjb250cm9sXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgdGhpcy5jbGlja0NvbnRyb2wgPSB0aGlzLmNsaWNrQ29udHJvbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9uZUZ1bmN0aW9uID0gdGhpcy5kb25lRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0dFT1NFQVJDSDtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfR0VPU0VBUkNIKTtcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWdlb3NlYXJjaFwiICsgXCIgb2wtY29udHJvbCBcIiArIFwib2wtdW5zZWxlY3RhYmxlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShidXR0b24pLm9uKCdjbGljaycsICgpPT4ge3RoaXMuY2xpY2tDb250cm9sKCl9KTtcblxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLmlucHV0Q3NzU2VsZWN0b3IpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5pbnB1dENzc1NlbGVjdG9yKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZXZlbnQpID0+IHt0aGlzLmlucHV0Q2FsbGJhY2soZXZlbnQpfSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZXZlbnQpID0+IHt0aGlzLmRlbGV0ZUNhbGxiYWNrKGV2ZW50KX0pO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBcImM0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgICBpZiAoIXByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgICBqUXVlcnkoaW5wdXQpLmFkZENsYXNzKCdjNGctb3BlbicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGpRdWVyeShpbnB1dCkuYWRkQ2xhc3MoJ2M0Zy1jbG9zZScpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywoZXZlbnQpID0+IHt0aGlzLmlucHV0Q2FsbGJhY2soZXZlbnQpfSk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGV2ZW50KSA9PiB7dGhpcy5kZWxldGVDYWxsYmFjayhldmVudCl9KTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7dGhpcy5jbGlja0NvbnRyb2wodHJ1ZSl9KTtcbiAgICAgIGpRdWVyeShzcGFuKS5hZGRDbGFzcygnc2VhcmNoU3BhbicpO1xuICAgICAgbGV0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBpLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9XFxcImZhciBmYS10aW1lcy1jaXJjbGVcXFwiPjwvaT5cIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoaSk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cblxuXG5cblxuICAgIHRoaXMuY29udHJvbEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBsZXQgaW5kZXggPSBwcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImdlb3NlYXJjaFwiKTtcbiAgICBwcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIHByb3BzLm1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmdlb3NlYXJjaCA9IGNvbnRyb2w7XG4gICAgLy8gZW5kIGNvbnRyb2xcblxuICAgIC8vIHByZXBhcmUgc2VhcmNoLWNvbmZpZ3VyYXRpb25cbiAgICAvL1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guc2VhcmNoS2V5ICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2gudXJsKSB7XG4gICAgICB0aGlzLmNvbmZpZy51cmwgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnVybCArIFwic2VhcmNoLnBocFwiO1xuICAgICAgdGhpcy5jb25maWcua2V5ID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zZWFyY2hLZXk7XG4gICAgICB0aGlzLmNvbmZpZy5wYXJhbXMgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnBhcmFtcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcudXJsID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2ggKyBcIi9cIiArIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgIH1cbiAgICAvLyB6b29tbGV2ZWwgd2hlbiBjZW50ZXJpbmcgdGhlIGZvdW5kIGxvY2F0aW9uXG4gICAgdGhpcy5jb25maWcuem9vbWxldmVsID0gcHJvcHMuc2VhcmNoWm9vbTtcbiAgICAvLyB6b29tIHRvIGJvdW5kcyBpbnN0ZWFkIG9mIHpvb21sZXZlbCB3aGVuIGNlbnRlcmluZyB0aGUgZm91bmQgbG9jYXRpb25cbiAgICB0aGlzLmNvbmZpZy56b29tYm91bmRzID0gcHJvcHMuem9vbUJvdW5kcztcbiAgICAvLyBxdWlja3NlYXJjaC1vcHRpb24gKGluc3RhbnRseSBqdW1wIHRvIHRoZSBmaXJzdCBmb3VuZCBsb2NhdGlvbilcbiAgICB0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCA9IHByb3BzLnF1aWNrc2VhcmNoIHx8IHRydWU7XG4gICAgLy8gYW5pbWF0aW9uIChhbmltYXRlIGZsaWdodCB0byB0YXJnZXRlZCBsb2NhdGlvbilcbiAgICB0aGlzLmNvbmZpZy5hbmltYXRlID0gcHJvcHMuYW5pbWF0ZTtcbiAgICAvLyBoaWdobGlnaHQgdGhlIHJlc3VsdCBsb2NhdGlvblxuICAgIHRoaXMuY29uZmlnLm1hcmtSZXN1bHQgPSBwcm9wcy5tYXJrUmVzdWx0O1xuICAgIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiA9IHByb3BzLmFuaW1hdGVEdXJhdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5yZXN1bHREdXJhdGlvbiA9IHByb3BzLnJlc3VsdER1cmF0aW9uO1xuICAgIHRoaXMuY29uZmlnLnBvcHVwID0gcHJvcHMucG9wdXA7XG5cbiAgICB0aGlzLmNvbmZpZy5hdXRvcGljayA9IHByb3BzLmF1dG9waWNrO1xuICAgIHRoaXMuY29uZmlnLm1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdHMgPSBwcm9wcy5yZXN1bHRzO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlID0gcHJvcHMucmVzdWx0U3R5bGU7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlICYmIHBhcnNlSW50KHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlLCAxMCkgPiAwKSB7XG4gICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAvLyBjaGVjayBpZiBzdHlsZSBpcyBsb2FkZWQsIG90aGVyd2lzZSBsb2FkIGl0XG4gICAgICBpZiAocHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnJlc3VsdFN0eWxlID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5jb25maWcucmVzdWx0U3R5bGVdLnN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW3RoaXMuY29uZmlnLnJlc3VsdFN0eWxlXSwge2RvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2NvcGUuY29uZmlnLnJlc3VsdFN0eWxlID0gcHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc2NvcGUuY29uZmlnLnJlc3VsdFN0eWxlXS5zdHlsZTtcbiAgICAgICAgICB9fSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcuY29sbGFwc2VkID0gcHJvcHMuY29sbGFwc2VkO1xuICAgIHRoaXMuY29uZmlnLnJlc3VsdENvdW50ID0gcHJvcHMucmVzdWx0Q291bnQ7XG4gICAgdGhpcy5jb25maWcuY2FjaGluZyA9IHByb3BzLmNhY2hpbmc7XG4gICAgdGhpcy5jb25maWcucGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcjtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiAhcHJvcHMuY29sbGFwc2VkLFxuICAgICAgcXVlcnk6IFwiXCIsIC8vIHRoZSBzZWFyY2ggcXVlcnlcbiAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgY3VycmVudENvb3JkaW5hdGU6IFtdLFxuICAgICAgb3BlblJlc3VsdHM6IGZhbHNlLFxuICAgICAgLy8gZGV0YWlsT3BlblJlc3VsdHM6IGZhbHNlLFxuICAgICAgY3VycmVudFJlc3VsdDogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLmlucHV0Q2FsbGJhY2sgPSB0aGlzLmlucHV0Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZUNhbGxiYWNrID0gdGhpcy5kZWxldGVDYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRTZWFyY2ggPSB0aGlzLnN0YXJ0U2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b29tVG8gPSB0aGlzLnpvb21Uby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VSZXN1bHRzID0gdGhpcy5jbG9zZVJlc3VsdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5SZXN1bHRzID0gdGhpcy5vcGVuUmVzdWx0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5ID0gdGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5LmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1vZGVDbGFzcyA9IHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5leHREaXYpIHtcbiAgICAgIG1vZGVDbGFzcyArPSBcIiBleHRlcm5hbCBcIjtcbiAgICB9XG4gICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW5SZXN1bHRzICYmIHRoaXMuY29uZmlnLnJlc3VsdHMpIHtcbiAgICAgIHJlc3VsdHMgPSA8R2VvU2VhcmNoUmVzdWx0cyBjbGFzc05hbWU9e21vZGVDbGFzc30gcmVzdWx0cz17dGhpcy5zdGF0ZS5yZXN1bHRzfSBleHREaXY9e3RoaXMucHJvcHMuZXh0UmVzdWx0c0Rpdn0gem9vbUZ1bmM9eyhpZHgpID0+IHt0aGlzLnNldFN0YXRlKHtjdXJyZW50UmVzdWx0OiB0aGlzLnN0YXRlLnJlc3VsdHNbaWR4XX0pOyB0aGlzLnpvb21UbyhpZHgpO319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VSZXN1bHRzPXt0aGlzLmNsb3NlUmVzdWx0c30gaGVhZGxpbmU9e3RoaXMucHJvcHMucmVzdWx0c0hlYWRsaW5lfSBjdXJyZW50UmVzdWx0PXt0aGlzLnN0YXRlLmN1cnJlbnRSZXN1bHR9IHJlc3VsdHNEaXY9e3RoaXMucHJvcHMucmVzdWx0c0Rpdn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4wfSBvcGVuUmVzdWx0cz17dGhpcy5vcGVuUmVzdWx0c30gY2xvc2VDYj17dGhpcy5jbG9zZVJlc3VsdHNDb21wbGV0ZWx5fVxuICAgICAgLz47XG4gICAgfVxuICAgIGxldCBjbG9zZUJ0bkNsYXNzID0gXCJcIjtcbiAgICBsZXQgY2xvc2VCdG5DYiA9IFwiXCI7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICBjbG9zZUJ0bkNsYXNzID0gXCJjNGctdGl0bGViYXItY2xvc2VcIjtcbiAgICAgIGNsb3NlQnRuQ2IgPSB0aGlzLmNsaWNrQ29udHJvbDtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSB0aGlzLnByb3BzLmhlYWRsaW5lO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgIGhlYWRsaW5lID0gdGhpcy5sYW5nQ29uc3RhbnRzLkdFT1NFQVJDSDtcbiAgICB9XG4gICAgbGV0IGlucHV0ID0gbnVsbFxuICAgIGlmICh0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICBpbnB1dCA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1nZW9zZWFyY2gtZmlsdGVyXCJ9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLmRlbGV0ZUNhbGxiYWNrfSBvbktleURvd249e3RoaXMuaW5wdXRDYWxsYmFja30gaWQ9e1wiYzRnLWdlb3NlYXJjaC1pbnB1dFwifSBwbGFjZWhvbGRlcj17dGhpcy5jb25maWcucGxhY2Vob2xkZXJ9IGFyaWEtbGFiZWw9e3RoaXMuY29uZmlnLnBsYWNlaG9sZGVyfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuR0VPU0VBUkNIX1NUQVJUfSB0eXBlPXtcImJ1dHRvblwifSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUlRfU0VBUkNIfSBvbk1vdXNlVXA9e3RoaXMuc3RhcnRTZWFyY2h9Lz5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZXh0ZXJuYWwgfHwgKHRoaXMuc3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW5SZXN1bHRzKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLkdFT1NFQVJDSF9XUkFQUEVSICsgXCIgXCIgKyBtb2RlQ2xhc3MgKyBcIiBjNGctaG9yaXpvblwifT5cbiAgICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1oZWFkZXJcIn0gaGVhZGVyPXtoZWFkbGluZX0gaGVhZGVyQ2xhc3M9e1wiYzRnLWdlb3NlYXJjaC1oZWFkbGluZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxCdG5DbGFzcz17XCJcIn0gZGV0YWlsQnRuQ2I9e1wiXCJ9IGNsb3NlQnRuQ2xhc3M9e2Nsb3NlQnRuQ2xhc3N9IGNsb3NlQnRuQ2I9e2Nsb3NlQnRuQ2J9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgICAgICB7cmVzdWx0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUmVzdWx0c0NvbXBsZXRlbHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlciAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2ggJiYgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLnJlc3VsdHMpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5yZXN1bHRzICYmIHRoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuUmVzdWx0cyAmJiAhdGhpcy5wcm9wcy5leHRSZXN1bHRzRGl2KSB7XG4gICAgICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiLmM0Zy1nZW9zZWFyY2gtY29udGFpbmVyLXJpZ2h0XCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZykge1xuICAgICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgICAgaWYgKHBhbmVsVmFsID09PSBcIkdlb1NlYXJjaFwiICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhbmVsVmFsICE9PSBcIkdlb1NlYXJjaFwiICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJHZW9TZWFyY2hcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICBzdGFydFNlYXJjaChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNzc0NvbnN0YW50cy5HRU9TRUFSQ0hfU1RBUlQpO1xuICAgIHRyeSB7XG4gICAgICBidXR0b24uYmx1cigpO1xuICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgIH1cbiAgICBsZXQgc2VhcmNoSW5wdXQgPSBqUXVlcnkoXCIjYzRnLWdlb3NlYXJjaC1pbnB1dFwiKTtcbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsKCkpIHtcbiAgICAgIHRoaXMuZmluZExvY2F0aW9uKHNlYXJjaElucHV0LnZhbCgpKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dENhbGxiYWNrKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAxMykge1xuICAgICAgbGV0IHNlYXJjaElucHV0ID0galF1ZXJ5KFwiI2M0Zy1nZW9zZWFyY2gtaW5wdXRcIik7XG4gICAgICBpZiAoc2VhcmNoSW5wdXQudmFsKCkpIHtcbiAgICAgICAgdGhpcy5maW5kTG9jYXRpb24oc2VhcmNoSW5wdXQudmFsKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBkZWxldGVDYWxsYmFjayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBzZWFyY2hJbnB1dCA9IGpRdWVyeShcIiNjNGctZ2Vvc2VhcmNoLWlucHV0XCIpO1xuICAgIGxldCB2YWx1ZSA9IHNlYXJjaElucHV0LnZhbCgpO1xuICAgIGlmICh0aGlzLmxhc3RWYWwgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmxhc3RWYWwgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJsYXllcnN3aXRjaGVyXCIpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0pIHtcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbXBvbmVudDtcbiAgICAgICAgICBjb21wb25lbnQuYXBwbHlPbGRTdGF0ZShcInNlYXJjaFJlc3VsdHNcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGlja0NvbnRyb2woZGlzcmVnYXJkU3RhdGUpIHtcbiAgICBsZXQgb3BlbiA9IGRpc3JlZ2FyZFN0YXRlICE9PSB1bmRlZmluZWQgPyBkaXNyZWdhcmRTdGF0ZSA6IHRoaXMuc3RhdGUub3BlblxuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmV4dGVybmFsKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmlucHV0KS5hZGRDbGFzcygnYzRnLWNsb3NlJykucmVtb3ZlQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICB9XG4gICAgICAvLyBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmhpZGVPdGhlckNvbXBvbmVudHModGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgICAgalF1ZXJ5KHRoaXMuaW5wdXQpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgLy8galF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZWFyY2hDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgICAvLyB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVJlc3VsdHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsT3BlblJlc3VsdHM6IGZhbHNlfSk7XG4gIH1cblxuICBvcGVuUmVzdWx0cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxPcGVuUmVzdWx0czogdHJ1ZX0pO1xuICB9XG5cbiAgZmluZExvY2F0aW9uKGxvY2F0aW9uLCBvcHRfb3B0aW9ucykge1xuICAgIGxldCBtYXAsXG4gICAgICBhbmltYXRlLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBtYXJrUmVzdWx0LFxuICAgICAgbWFwQ29udHJvbGxlcjtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBtYXBDb250cm9sbGVyID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIG1hcCA9IG1hcENvbnRyb2xsZXIubWFwO1xuXG4gICAgLy8gc2hvdyBzcGlubmVyXG4gICAgbWFwQ29udHJvbGxlci5zcGlubmVyLnNob3coKTtcblxuICAgIGFuaW1hdGUgPSB0aGlzLmNvbmZpZy5hbmltYXRlO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZUR1cmF0aW9uO1xuICAgIG1hcmtSZXN1bHQgPSB0aGlzLmNvbmZpZy5tYXJrUmVzdWx0O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRfb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChvcHRfb3B0aW9ucy5hbmltYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYW5pbWF0ZSA9IG9wdF9vcHRpb25zLmFuaW1hdGU7XG4gICAgICB9XG4gICAgICBpZiAob3B0X29wdGlvbnMubWFya1Jlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1hcmtSZXN1bHQgPSBvcHRfb3B0aW9ucy5tYXJrUmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5xdWlja3NlYXJjaCkge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICAgIHE6IGxvY2F0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlc3VsdENvdW50KSB7XG4gICAgICAgIGRhdGEubGltaXQgPSB0aGlzLmNvbmZpZy5yZXN1bHRDb3VudDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5rZXkpIHtcbiAgICAgICAgZGF0YS5rZXkgPSB0aGlzLmNvbmZpZy5rZXk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMuY29uZmlnLnBhcmFtcykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5wYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICBkYXRhW3BhcmFtXSA9IHRoaXMuY29uZmlnLnBhcmFtc1twYXJhbV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgYXJyUmVzdWx0cyA9IHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19zZWFyY2gsIFtkYXRhLCB0aGlzXSk7XG4gICAgICBpZiAoYXJyUmVzdWx0cyAmJiBhcnJSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJSZXN1bHRzKSB7XG4gICAgICAgICAgaWYgKGFyclJlc3VsdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZUZ1bmN0aW9uKGFyclJlc3VsdHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIEFKQVggLT4gQG5vbWluYXRpbVxuICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgIHVybDogdGhpcy5jb25maWcudXJsLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5kb25lKHRoaXMuZG9uZUZ1bmN0aW9uKVxuXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIEBUT0RPXG4gICAgICAgICAgICAgIC8vIHNlbGYucmVzdWx0V3JhcHBlci5pbm5lckhUTUwgPSAnb2hvaCEnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzY29wZS5jb25maWcubWFwQ29udHJvbGxlci5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAobWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5zaG93T25seVJlc3VsdHMpIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBcImxheWVyc3dpdGNoZXJcIik7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5idXR0b25FbmFibGVkKSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudC50b2dnbGVBbGxMYXllcnMoXCJzZWFyY2hSZXN1bHRzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEBUT0RPXG4gICAgfVxuXG4gIH1cbiAgZG9uZUZ1bmN0aW9uIChyZXN1bHRzKSB7XG5cbiAgICB2YXIgbWFwVmlldyxcbiAgICAgICAgY3VycmVudENvb3JkaW5hdGUsXG4gICAgICAgIHJlc3VsdENvb3JkaW5hdGUsXG4gICAgICAgIGNvb3JkRGlmLFxuICAgICAgICBkaWZDb250ZXh0LFxuICAgICAgICB2aWV3RXh0ZW50LFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIG9zbUV4dGVudCxcbiAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgem9vbVR5cGUsXG4gICAgICAgIGZseVRvLFxuICAgICAgICBjb21wbGV0ZVNlYXJjaCxcbiAgICAgICAgbWFwQ29udHJvbGxlciA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlcixcbiAgICAgICAgbWFwID0gbWFwQ29udHJvbGxlci5tYXAsXG4gICAgICAgIGFuaW1hdGUgPSB0aGlzLmNvbmZpZy5hbmltYXRlLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbixcbiAgICAgICAgbWFya1Jlc3VsdCA9IHRoaXMuY29uZmlnLm1hcmtSZXN1bHQ7XG5cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCAmJiByZXN1bHRzLmxlbmd0aCA+IDApe1xuICAgICAgbWFwVmlldyA9IG1hcC5nZXRWaWV3KCk7XG4gICAgIFxuICAgICAgaWYgKHJlc3VsdHNbMF0pIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cztcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgndXVpZCcpKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gbWFwQ29udHJvbGxlci5hcnJDb21wb25lbnRzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gXCJsYXllcnN3aXRjaGVyXCIpO1xuICAgICAgICAgIGxldCBjb21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbXBvbmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGlkcyA9IFtdO1xuICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5yZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdHNbaV0uaGFzT3duUHJvcGVydHkoJ3V1aWQnKSkge1xuICAgICAgICAgICAgICAgIGlkcy5wdXNoKHRoaXMucmVzdWx0c1tpXS51dWlkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5yZXN1bHRzW2ldLmhhc093blByb3BlcnR5KCdsb24nKSAmJiB0aGlzLnJlc3VsdHNbaV0uaGFzT3duUHJvcGVydHkoJ2xhdCcpICYmIHRoaXMucmVzdWx0c1tpXS5sb24gJiYgdGhpcy5yZXN1bHRzW2ldLmxhdCkge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2godHJhbnNmb3JtKFtwYXJzZUZsb2F0KHRoaXMucmVzdWx0c1tpXS5sb24pLHBhcnNlRmxvYXQodGhpcy5yZXN1bHRzW2ldLmxhdCldLCdFUFNHOjQzMjYnLCAnRVBTRzozODU3JykpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1hcENvbnRyb2xsZXIuZGF0YS5nZW9zZWFyY2guc2hvd09ubHlSZXN1bHRzICYmIGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50LnRvZ2dsZVNwZWNpZmljTGF5ZXJzKGlkcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzaXplID0gbWFwLmdldFNpemUoKTtcbiAgICAgICAgICBsZXQgZXh0ZW50ID0gYm91bmRpbmdFeHRlbnQoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgIGxldCBmaXRPcHRpb25zID0ge1xuICAgICAgICAgICAgZHVyYXRpb246IDI1MCxcbiAgICAgICAgICAgIHBhZGRpbmc6IFtcbiAgICAgICAgICAgICAgICBzaXplWzFdLzEwLFxuICAgICAgICAgICAgICAgIHNpemVbMF0vMTAsXG4gICAgICAgICAgICAgICAgc2l6ZVsxXS8xMCxcbiAgICAgICAgICAgICAgICBzaXplWzBdLzEwLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXAuZ2V0VmlldygpICYmIChjb29yZGluYXRlcy5sZW5ndGggPiAwKSAmJiBleHRlbnQgJiYgZml0T3B0aW9ucykge1xuICAgICAgICAgICAgbWFwLmdldFZpZXcoKS5maXQoZXh0ZW50LCBmaXRPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY3VycmVudENvb3JkaW5hdGUgPSBtYXBWaWV3LmdldENlbnRlcigpO1xuICAgICAgICAgIHJlc3VsdENvb3JkaW5hdGUgPSB0cmFuc2Zvcm0oW3BhcnNlRmxvYXQocmVzdWx0LmxvbiksIHBhcnNlRmxvYXQocmVzdWx0LmxhdCldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmx5VG8oXG4gICAgICAgICAgICAgICAgbWFwLCByZXN1bHRDb29yZGluYXRlLCB0aGlzLmNvbmZpZy56b29tbGV2ZWwsIHRoaXMuY29uZmlnLnpvb21ib3VuZHMsIHJlc3VsdC5ib3VuZGluZ19ib3gsXG4gICAgICAgICAgICAgICAgbWFya1Jlc3VsdCwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24sIGFuaW1hdGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgbWFwLmdldFZpZXcoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVTZWFyY2godGhpcy5jb25maWcubWFya1Jlc3VsdCwgdGhpcy5jb25maWcuYW5pbWF0ZSwgem9vbVR5cGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24pO1xuICAgICAgICAgICAgbWFwVmlldy5zZXRDZW50ZXIocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuem9vbWxldmVsID49IDApIHtcbiAgICAgICAgICAgICAgbWFwLmdldFZpZXcoKS5zZXRab29tKHRoaXMuY29uZmlnLnpvb21sZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvcGljayAmJiB0aGlzLmNvbmZpZy5tYXBDb250cm9sbGVyLmdlb3BpY2tlciAmJiB0eXBlb2YgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIucGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcubWFwQ29udHJvbGxlci5nZW9waWNrZXIucGljayhyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgICAgIGFsZXJ0KGxhbmdDb25zdGFudHMuU0VBUkNIX05PVF9GT1VORCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXN1bHRzKSB7XG4gICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5oaWRlT3RoZXJDb21wb25lbnRzKHRoaXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXN1bHRzOiB0aGlzLnJlc3VsdHMsIG9wZW46IHRydWUsIGN1cnJlbnRDb29yZGluYXRlOiBjdXJyZW50Q29vcmRpbmF0ZSwgb3BlblJlc3VsdHM6IHRydWUsIGN1cnJlbnRSZXN1bHQ6IHJlc3VsdHNbMF19KTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmx5VG8obWFwLCBsb2NhdGlvbiwgem9vbWxldmVsLCB6b29tYm91bmRzLCBib3VuZGluZ2JveCwgbWFya1Jlc3VsdCwgcmVzdWx0RHVyYXRpb24sIGFuaW1hdGUsIGFuaW1hdGVEdXJhdGlvbiwgbWFwVmlldykge1xuICAgIGxldCBkdXJhdGlvbiA9IGFuaW1hdGVEdXJhdGlvbjtcbiAgICBsZXQgem9vbSA9IHpvb21sZXZlbDtcbiAgICBsZXQgcGFydHMgPSAyO1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgICBsZXQgZXh0ZW50O1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGNvbXBsZXRlKSB7XG4gICAgICAtLXBhcnRzO1xuICAgICAgaWYgKGNhbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFydHMgPT09IDAgfHwgIWNvbXBsZXRlKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHpvb21ib3VuZHMgJiYgYm91bmRpbmdib3ggJiYgYm91bmRpbmdib3hbMF0gIT09IG51bGwgJiZcbiAgICAgICAgICBib3VuZGluZ2JveFsxXSAhPT0gbnVsbCAmJiBib3VuZGluZ2JveFsyXSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGJvdW5kaW5nYm94WzNdICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIHRyYW5zbGF0ZSBvc20tZXh0ZW50IHRvIG9sMy1leHRlbnRcblxuICAgICAgICAgIGxldCBvc21FeHRlbnQgPSBbXTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzJdKSk7XG4gICAgICAgICAgb3NtRXh0ZW50LnB1c2gocGFyc2VGbG9hdChib3VuZGluZ2JveFswXSkpO1xuICAgICAgICAgIG9zbUV4dGVudC5wdXNoKHBhcnNlRmxvYXQoYm91bmRpbmdib3hbM10pKTtcbiAgICAgICAgICBvc21FeHRlbnQucHVzaChwYXJzZUZsb2F0KGJvdW5kaW5nYm94WzFdKSk7XG5cbiAgICAgICAgICBleHRlbnQgPSB0cmFuc2Zvcm1FeHRlbnQob3NtRXh0ZW50LCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuXG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZpZXdGaXQgPSBtYXBWaWV3LmZpdChcbiAgICAgICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgICAgICBtYXAuZ2V0U2l6ZSgpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWluWm9vbTogbWFwVmlldy5nZXQoJ21pblpvb20nKSB8fCAyLFxuICAgICAgICAgICAgICAgIG1heFpvb206IHpvb20gfHwgbWFwVmlldy5nZXQoJ21heFpvb20nKSB8fCAxOCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyAyLFxuICAgICAgICAgICAgICAgIGVhc2luZzogZWFzZU91dFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sIGR1cmF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgc2NvcGUuY29tcGxldGVTZWFyY2gobWFya1Jlc3VsdCwgYW5pbWF0ZSwgXCJib3VuY2VcIiwgYW5pbWF0ZUR1cmF0aW9uLCBsb2NhdGlvbiwgcmVzdWx0RHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hcC5nZXRWaWV3KCkuYW5pbWF0ZSh7XG4gICAgICBjZW50ZXI6IGxvY2F0aW9uLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgfSwgY2FsbGJhY2spO1xuXG4gICAgbWFwLmdldFZpZXcoKS5hbmltYXRlKHtcbiAgICAgIHpvb206IHpvb20gLSAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gMlxuICAgIH0sIHtcbiAgICAgIHpvb206IHpvb20sXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gLyAyXG4gICAgfSwgY2FsbGJhY2spO1xuICB9XG5cbiAgY29tcGxldGVTZWFyY2gobWFya1Jlc3VsdCwgYW5pbWF0ZSwgem9vbVR5cGUsIGFuaW1hdGlvbkR1cmF0aW9uLCByZXN1bHRDb29yZGluYXRlLCByZXN1bHREdXJhdGlvbikge1xuICAgIC8vIHJlc3VsdCBtYXJrZXIgJiBhbmltYXRpb25cbiAgICBpZiAobWFya1Jlc3VsdCkge1xuICAgICAgbGV0IGFkZE1hcmtlcixcbiAgICAgICAgbWFya2VyU291cmNlLFxuICAgICAgICBtYXJrZXJMYXllcixcbiAgICAgICAgYW5pbWF0ZU1hcmtlcjtcblxuICAgICAgbWFya2VyU291cmNlID0gbmV3IFZlY3RvclNvdXJjZSgpO1xuICAgICAgbGV0IHN0eWxlID0gdGhpcy5jb25maWcucmVzdWx0U3R5bGU7XG4gICAgICBpZiAoIXN0eWxlIHx8IHN0eWxlID09PSBcIjBcIikge1xuICAgICAgICBzdHlsZSA9IFtuZXcgU3R5bGUoe1xuICAgICAgICAgIGltYWdlOiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgIHJhZGl1czogNyxcbiAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSh7XG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyMDAsIDAsIDAsICcgKyAwLjkgKyAnKScsXG4gICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgICAgbmV3IFN0eWxlKHtcbiAgICAgICAgICAgIGltYWdlOiBuZXcgQ2lyY2xlKHtcbiAgICAgICAgICAgICAgcmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgc25hcFRvUGl4ZWw6IGZhbHNlLFxuICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyMDAsIDAsIDAsICcgKyAwLjkgKyAnKScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBTdHlsZSh7XG4gICAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZSh7XG4gICAgICAgICAgICAgIHJhZGl1czogMzMsXG4gICAgICAgICAgICAgIHNuYXBUb1BpeGVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjAwLCAwLCAwLCAnICsgMC45ICsgJyknLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgbWFya2VyTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBzb3VyY2U6IG1hcmtlclNvdXJjZSxcbiAgICAgICAgekluZGV4OiA5OTk5OVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKG1hcmtlckxheWVyKTtcblxuICAgICAgYWRkTWFya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtYXJrZXJTb3VyY2UuYWRkRmVhdHVyZShcbiAgICAgICAgICBuZXcgRmVhdHVyZShcbiAgICAgICAgICAgIG5ldyBQb2ludChyZXN1bHRDb29yZGluYXRlKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGVNYXJrZXIgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgYW5pbWF0aW9uU3RlcCxcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICBsaXN0ZW5lcktleTtcblxuICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBkdXJhdGlvbiA9IHJlc3VsdER1cmF0aW9uO1xuXG4gICAgICAgIGFuaW1hdGlvblN0ZXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBsZXQgdmVjdG9yQ29udGV4dCxcbiAgICAgICAgICAgIGZyYW1lU3RhdGUsXG4gICAgICAgICAgICBlbGFwc2VkLFxuICAgICAgICAgICAgZWxhcHNlZFJhdGlvLFxuICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgICAgIGZsYXNoR2VvbTtcblxuICAgICAgICAgIHZlY3RvckNvbnRleHQgPSBnZXRWZWN0b3JDb250ZXh0KGV2ZW50KTtcbiAgICAgICAgICBmcmFtZVN0YXRlID0gZXZlbnQuZnJhbWVTdGF0ZTtcbiAgICAgICAgICBmbGFzaEdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKTtcbiAgICAgICAgICBlbGFwc2VkID0gZnJhbWVTdGF0ZS50aW1lIC0gc3RhcnQ7XG4gICAgICAgICAgZWxhcHNlZFJhdGlvID0gZWxhcHNlZCAvIGR1cmF0aW9uO1xuICAgICAgICAgIHJhZGl1cyA9IGxpbmVhcigxIC0gZWxhcHNlZFJhdGlvKSAqIDEwMDtcbiAgICAgICAgICBpZiAocmFkaXVzIDwgMCkge1xuICAgICAgICAgICAgcmFkaXVzID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3BhY2l0eSA9IGxpbmVhcihlbGFwc2VkUmF0aW8pO1xuXG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBTdHlsZSgpO1xuXG4gICAgICAgICAgdmVjdG9yQ29udGV4dC5zZXRTdHlsZShtYXJrZXIpO1xuICAgICAgICAgIHZlY3RvckNvbnRleHQuZHJhd0dlb21ldHJ5KGZsYXNoR2VvbSwgbnVsbCk7XG5cbiAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBtYXJrZXJTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHVuQnlLZXkobGlzdGVuZXJLZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb250aW51ZSBwb3N0cmVuZGVyIGFuaW1hdGlvblxuICAgICAgICAgIGZyYW1lU3RhdGUuYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgIH07IC8vIGVuZCBvZiBcImFuaW1hdGlvblN0ZXBcIlxuXG4gICAgICAgIGxpc3RlbmVyS2V5ID0gbWFya2VyTGF5ZXIub24oJ3Bvc3RyZW5kZXInLCBhbmltYXRpb25TdGVwKTtcblxuICAgICAgfTsgLy8gZW5kIG9mIFwiYW5pbWF0ZU1hcmtlclwiXG5cbiAgICAgIG1hcmtlclNvdXJjZS5vbignYWRkZmVhdHVyZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBhbmltYXRlTWFya2VyKGV2ZW50LmZlYXR1cmUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIGlmICh6b29tVHlwZSA9PT0gJ3pvb20nKSB7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYWRkTWFya2VyLCBhbmltYXRpb25EdXJhdGlvbiAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFkZE1hcmtlciwgYW5pbWF0aW9uRHVyYXRpb24gLyAyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkTWFya2VyKCk7XG4gICAgICB9XG5cbiAgICB9Ly8gZW5kIG9mIHJlc3VsdCBtYXJrZXIgJiBhbmltYXRpb24gaGFuZGxpbmdcbiAgICBpZiAodGhpcy5jb25maWcucG9wdXApIHtcbiAgICAgIGxldCBwaXhlbCA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0UGl4ZWxGcm9tQ29vcmRpbmF0ZShyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHR5cGU6ICdjbGljaycsXG4gICAgICAgICAgcGl4ZWw6IHBpeGVsLFxuICAgICAgICB9LDEwMCk7XG4gICAgICB9KVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBUT0RPXG4gICAqXG4gICAqIEBwYXJhbSAgIHtbdHlwZV19ICBsb2NhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHpvb21UbyhpbmRleCkge1xuICAgIGxldCBtYXAsXG4gICAgICByZXN1bHQsXG4gICAgICByZXN1bHRDb29yZGluYXRlLFxuICAgICAgbWFwQ29udHJvbGxlcixcbiAgICAgIHpvb21UeXBlO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIG1hcENvbnRyb2xsZXIgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbWFwID0gbWFwQ29udHJvbGxlci5tYXA7XG4gICAgbGV0IG1hcFZpZXcgPSBtYXAuZ2V0VmlldygpO1xuICAgIGxldCBjdXJyZW50Q29vcmRpbmF0ZSA9IHRoaXMuc3RhdGUuY3VycmVudENvb3JkaW5hdGU7XG5cbiAgICByZXN1bHQgPSBzY29wZS5yZXN1bHRzW2luZGV4XTtcbiAgICByZXN1bHRDb29yZGluYXRlID0gdHJhbnNmb3JtKFtwYXJzZUZsb2F0KHJlc3VsdC5sb24pLCBwYXJzZUZsb2F0KHJlc3VsdC5sYXQpXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcbiAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0ZSkge1xuICAgICAgdmFyIHJlc29sdXRpb24gPSBtYXBWaWV3LmdldFJlc29sdXRpb24oKTtcbiAgICAgIHZhciB2aWV3RXh0ZW50ID0gbWFwVmlldy5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSk7XG4gICAgICBpZiAoY29udGFpbnNDb29yZGluYXRlKHZpZXdFeHRlbnQsIHJlc3VsdENvb3JkaW5hdGUpKSB7XG4gICAgICAgIHpvb21UeXBlID0gJ3pvb20nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGN1cnJlbnRDb29yZGluYXRlWzBdIC0gcmVzdWx0Q29vcmRpbmF0ZVswXSkgPiBNYXRoLmFicyhjdXJyZW50Q29vcmRpbmF0ZVsxXSAtIHJlc3VsdENvb3JkaW5hdGVbMV0pKSB7XG4gICAgICAgICAgdmFyIGNvb3JkRGlmID0gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMF0gLSByZXN1bHRDb29yZGluYXRlWzBdKTtcbiAgICAgICAgICB2YXIgZGlmQ29udGV4dCA9IGdldFdpZHRoKHZpZXdFeHRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvb3JkRGlmID0gTWF0aC5hYnMoY3VycmVudENvb3JkaW5hdGVbMV0gLSByZXN1bHRDb29yZGluYXRlWzFdKTtcbiAgICAgICAgICBkaWZDb250ZXh0ID0gZ2V0SGVpZ2h0KHZpZXdFeHRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZERpZiA+IDApIHtcbiAgICAgICAgICByZXNvbHV0aW9uICo9IGNvb3JkRGlmIC8gZGlmQ29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICB6b29tVHlwZSA9ICdib3VuY2UnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZseVRvKFxuICAgICAgICAgIG1hcCwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcuem9vbWxldmVsLCB0aGlzLmNvbmZpZy56b29tYm91bmRzLCByZXN1bHQuYm91bmRpbmdfYm94LFxuICAgICAgICAgIHRoaXMuY29uZmlnLm1hcmtSZXN1bHQsIHRoaXMuY29uZmlnLnJlc3VsdER1cmF0aW9uLCB0aGlzLmNvbmZpZy5hbmltYXRlLCB0aGlzLmNvbmZpZy5hbmltYXRlRHVyYXRpb24sIG1hcFZpZXcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVTZWFyY2godGhpcy5jb25maWcubWFya1Jlc3VsdCwgdGhpcy5jb25maWcuYW5pbWF0ZSwgem9vbVR5cGUsIHRoaXMuY29uZmlnLmFuaW1hdGVEdXJhdGlvbiwgcmVzdWx0Q29vcmRpbmF0ZSwgdGhpcy5jb25maWcucmVzdWx0RHVyYXRpb24pO1xuICAgICAgbWFwLmdldFZpZXcoKS5zZXRDZW50ZXIocmVzdWx0Q29vcmRpbmF0ZSk7XG4gICAgICBpZiAodGhpcy5jb25maWcuem9vbWxldmVsID49IDApIHtcbiAgICAgICAgbWFwLmdldFZpZXcoKS5zZXRab29tKHRoaXMuY29uZmlnLnpvb21sZXZlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufSJdLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29udHJvbCIsIl9jNGdNYXBzSTE4biIsIl9jNGdNYXBzQ29uc3RhbnQiLCJfcHJvaiIsIl9lYXNpbmciLCJfc291cmNlIiwiX2xheWVyIiwiX3N0eWxlIiwiX29sIiwiX2dlb20iLCJfcmVuZGVyIiwiX09ic2VydmFibGUiLCJfYzRnTWFwc1V0aWxzIiwiX2V4dGVudCIsImUiLCJ0IiwiV2Vha01hcCIsInIiLCJuIiwiX19lc01vZHVsZSIsIm8iLCJpIiwiZiIsIl9fcHJvdG9fXyIsIl90eXBlb2YzIiwiaGFzIiwiZ2V0Iiwic2V0IiwiX3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJHZW9TZWFyY2hSZXN1bHRzIiwiUmVhY3QiLCJsYXp5IiwiVGl0bGViYXIiLCJHZW9TZWFyY2giLCJleHBvcnRzIiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwibGFuZ0NvbnN0YW50cyIsImdldExhbmd1YWdlIiwibWFwQ29udHJvbGxlciIsImRhdGEiLCJjbGlja0NvbnRyb2wiLCJiaW5kIiwiZG9uZUZ1bmN0aW9uIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiQ1RSTF9HRU9TRUFSQ0giLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImpRdWVyeSIsIm9uIiwiZXh0ZXJuYWwiLCJnZW9zZWFyY2giLCJpbnB1dENzc1NlbGVjdG9yIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW5wdXRDYWxsYmFjayIsImRlbGV0ZUNhbGxiYWNrIiwiY29sbGFwc2VkIiwiYWRkQ2xhc3MiLCJpbm5lckhUTUwiLCJjb250cm9sRWxlbWVudCIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiY29uZmlnIiwic2VhcmNoS2V5IiwidXJsIiwia2V5IiwicGFyYW1zIiwiYXBpIiwicHJvZmlsZSIsInpvb21sZXZlbCIsInNlYXJjaFpvb20iLCJ6b29tYm91bmRzIiwiem9vbUJvdW5kcyIsInF1aWNrc2VhcmNoIiwiYW5pbWF0ZSIsIm1hcmtSZXN1bHQiLCJhbmltYXRlRHVyYXRpb24iLCJyZXN1bHREdXJhdGlvbiIsInBvcHVwIiwiYXV0b3BpY2siLCJyZXN1bHRzIiwicmVzdWx0U3R5bGUiLCJwYXJzZUludCIsInNjb3BlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZG9uZSIsInJlc3VsdENvdW50IiwiY2FjaGluZyIsInBsYWNlaG9sZGVyIiwic3RhdGUiLCJvcGVuIiwicXVlcnkiLCJjdXJyZW50Q29vcmRpbmF0ZSIsIm9wZW5SZXN1bHRzIiwiY3VycmVudFJlc3VsdCIsInN0YXJ0U2VhcmNoIiwiem9vbVRvIiwiY2xvc2VSZXN1bHRzIiwiY2xvc2UiLCJjbG9zZVJlc3VsdHNDb21wbGV0ZWx5IiwiX2luaGVyaXRzMiIsIl9jcmVhdGVDbGFzczIiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzMiIsIm1vZGVDbGFzcyIsImV4dERpdiIsImV4dFJlc3VsdHNEaXYiLCJ6b29tRnVuYyIsImlkeCIsInNldFN0YXRlIiwiaGVhZGxpbmUiLCJyZXN1bHRzSGVhZGxpbmUiLCJyZXN1bHRzRGl2IiwibGVuZ3RoIiwiY2xvc2VDYiIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiR0VPU0VBUkNIIiwidHlwZSIsIm9uSW5wdXQiLCJvbktleURvd24iLCJpZCIsImNzc0NvbnN0YW50cyIsIkdFT1NFQVJDSF9TVEFSVCIsInRpdGxlIiwiQ1RSTF9TVEFSVF9TRUFSQ0giLCJvbk1vdXNlVXAiLCJGcmFnbWVudCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIndyYXBwZXJDbGFzcyIsImhlYWRlciIsImhlYWRlckNsYXNzIiwiZGV0YWlsQnRuQ2xhc3MiLCJkZXRhaWxCdG5DYiIsImNsb3NlQnRuVGl0bGUiLCJDTE9TRSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90Iiwic2V0T3BlbkNvbXBvbmVudCIsInJlbW92ZUNsYXNzIiwicGFuZWxWYWwiLCJ1dGlscyIsImdldFZhbHVlIiwic3RvcmVWYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsImJsdXIiLCJpZ25vcmUiLCJzZWFyY2hJbnB1dCIsInZhbCIsImZpbmRMb2NhdGlvbiIsIndoaWNoIiwibGFzdFZhbCIsImNvbXBvbmVudCIsImFwcGx5T2xkU3RhdGUiLCJkaXNyZWdhcmRTdGF0ZSIsInVuZGVmaW5lZCIsImZvY3VzIiwiZGV0YWlsT3BlblJlc3VsdHMiLCJsb2NhdGlvbiIsIm9wdF9vcHRpb25zIiwibWFwIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzcGlubmVyIiwic2hvdyIsIl90eXBlb2YyIiwiZm9ybWF0IiwicSIsImxpbWl0IiwicGFyYW0iLCJhcnJSZXN1bHRzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJob29rX3NlYXJjaCIsImhpZGUiLCJhamF4IiwiZGF0YVR5cGUiLCJmYWlsIiwiYWx3YXlzIiwic2hvd09ubHlSZXN1bHRzIiwiYnV0dG9uRW5hYmxlZCIsInRvZ2dsZUFsbExheWVycyIsIm1hcFZpZXciLCJyZXN1bHRDb29yZGluYXRlIiwiY29vcmREaWYiLCJkaWZDb250ZXh0Iiwidmlld0V4dGVudCIsInJlc3VsdCIsIm9zbUV4dGVudCIsInJlc29sdXRpb24iLCJ6b29tVHlwZSIsImZseVRvIiwiY29tcGxldGVTZWFyY2giLCJnZXRWaWV3IiwiaWRzIiwiY29vcmRpbmF0ZXMiLCJwdXNoIiwidXVpZCIsImxvbiIsImxhdCIsInRyYW5zZm9ybSIsInBhcnNlRmxvYXQiLCJ0b2dnbGVTcGVjaWZpY0xheWVycyIsInNpemUiLCJnZXRTaXplIiwiZXh0ZW50IiwiYm91bmRpbmdFeHRlbnQiLCJmaXRPcHRpb25zIiwiZHVyYXRpb24iLCJwYWRkaW5nIiwiZml0IiwiZ2V0Q2VudGVyIiwiYm91bmRpbmdfYm94Iiwic2V0Q2VudGVyIiwic2V0Wm9vbSIsImdlb3BpY2tlciIsInBpY2siLCJvcHRpb25zIiwiYWxlcnQiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwiaGlkZU90aGVyQ29tcG9uZW50cyIsImJvdW5kaW5nYm94Iiwiem9vbSIsInBhcnRzIiwiY2FsbGVkIiwiY2FsbGJhY2siLCJjb21wbGV0ZSIsInRyYW5zZm9ybUV4dGVudCIsInNldFRpbWVvdXQiLCJ2aWV3Rml0IiwibWluWm9vbSIsIm1heFpvb20iLCJlYXNpbmciLCJlYXNlT3V0IiwiY2VudGVyIiwiX3RoaXMzIiwiYWRkTWFya2VyIiwibWFya2VyU291cmNlIiwibWFya2VyTGF5ZXIiLCJhbmltYXRlTWFya2VyIiwiVmVjdG9yU291cmNlIiwiU3R5bGUiLCJpbWFnZSIsIkNpcmNsZSIsInJhZGl1cyIsInNuYXBUb1BpeGVsIiwic3Ryb2tlIiwiU3Ryb2tlIiwiY29sb3IiLCJ3aWR0aCIsIm9wYWNpdHkiLCJWZWN0b3IiLCJzb3VyY2UiLCJ6SW5kZXgiLCJhZGRMYXllciIsImFkZEZlYXR1cmUiLCJGZWF0dXJlIiwiUG9pbnQiLCJmZWF0dXJlIiwiYW5pbWF0aW9uU3RlcCIsInN0YXJ0IiwibGlzdGVuZXJLZXkiLCJEYXRlIiwiZ2V0VGltZSIsInZlY3RvckNvbnRleHQiLCJmcmFtZVN0YXRlIiwiZWxhcHNlZCIsImVsYXBzZWRSYXRpbyIsImZsYXNoR2VvbSIsImdldFZlY3RvckNvbnRleHQiLCJnZXRHZW9tZXRyeSIsImNsb25lIiwidGltZSIsImxpbmVhciIsIm1hcmtlciIsInNldFN0eWxlIiwiZHJhd0dlb21ldHJ5IiwiY2xlYXIiLCJ1bkJ5S2V5IiwicGl4ZWwiLCJnZXRQaXhlbEZyb21Db29yZGluYXRlIiwiZGlzcGF0Y2hFdmVudCIsImdldFJlc29sdXRpb24iLCJjYWxjdWxhdGVFeHRlbnQiLCJjb250YWluc0Nvb3JkaW5hdGUiLCJNYXRoIiwiYWJzIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJDb21wb25lbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==