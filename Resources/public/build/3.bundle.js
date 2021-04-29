(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./Resources/public/js/components/c4g-starboard-layer-element.jsx":
/*!************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-layer-element.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C4gStarboardLayerElement = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

var olExtent = _interopRequireWildcard(_extent);

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style */ "./Resources/public/js/components/c4g-starboard-style.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C4gStarboardLayerElement = exports.C4gStarboardLayerElement = function (_Component) {
  (0, _inherits3.default)(C4gStarboardLayerElement, _Component);

  function C4gStarboardLayerElement(props) {
    (0, _classCallCheck3.default)(this, C4gStarboardLayerElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (C4gStarboardLayerElement.__proto__ || (0, _getPrototypeOf2.default)(C4gStarboardLayerElement)).call(this, props));

    var scope = _this;

    _this.layerClick = _this.layerClick.bind(_this);
    _this.layerZoomTo = _this.layerZoomTo.bind(_this);
    _this.spanClick = _this.spanClick.bind(_this);
    _this.changeCollapseState = _this.changeCollapseState.bind(_this);
    _this.parentCallback = _this.parentCallback.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(C4gStarboardLayerElement, [{
    key: "showLayer",
    value: function showLayer() {
      var showElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var scope = this;
      var features = false;
      var vectorLayer = false;
      if (showElements) {
        if (Array.isArray(showElements)) {
          features = showElements;
        } else if (showElements instanceof _layer.Vector) {
          vectorLayer = showElements;
        }
      } else {
        features = features || scope.props.layer.features;
        vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
      }
      features = features || scope.props.layer.features;
      var layerController = scope.props.mapController.proxy.layerController;
      if (features && features.length > 0) {
        layerController.show(scope.props.layer.loader, features, scope.props.id);
      } else if (vectorLayer) {
        layerController.show(scope.props.layer.loader, vectorLayer, scope.props.id);
      } else {
        layerController.show(false, false, scope.props.id);
      }
      scope.props.mapController.setLayerStateWithId(scope.props.id, true);
    }
  }, {
    key: "hideLayer",
    value: function hideLayer() {
      var hideElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var scope = this;
      var features = false;
      var vectorLayer = false;
      if (hideElements) {
        if (Array.isArray(hideElements)) {
          features = hideElements;
        } else if (hideElements instanceof _layer.Vector) {
          vectorLayer = hideElements;
        }
      } else {
        features = features || scope.props.layer.features;
        vectorLayer = vectorLayer || scope.props.layer.vectorLayer;
      }
      var layerController = scope.props.mapController.proxy.layerController;
      if (features && features.length > 0) {
        layerController.hide(scope.props.layer.loader, features, scope.props.id);
      } else if (vectorLayer) {
        layerController.hide(scope.props.layer.loader, vectorLayer, scope.props.id);
      } else {
        layerController.hide(false, false, scope.props.id);
      }
      scope.props.mapController.setLayerStateWithId(scope.props.id, false);
    }
  }, {
    key: "changeChildState",
    value: function changeChildState(child, childState, active) {
      if (active) {
        this.showLayer(child.features || child.vectorLayer);
      } else {
        this.hideLayer(child.features || child.vectorLayer);
      }
      if (child.childs && child.childs.length > 0) {
        for (var childId in child.childs) {
          if (child.childs.hasOwnProperty(childId)) {
            var currentChildState = childState.childStates[childId].active;
            if (currentChildState !== active) {
              childState.childStates[childId] = this.changeChildState(child.childs[childId], childState.childStates[childId], active);
            }
          }
        }
      }
      this.props.mapController.setLayerStateWithId(childState.id, active);
      childState.active = active;
      return childState;
    }
  }, {
    key: "parentCallback",
    value: function parentCallback(key, newChildState) {
      var newState = this.props.layerStates;
      newState.childStates[key] = newChildState;
      if (newState.active != newChildState.active) {
        // newState.active = newChildState.active;
        if (newChildState.active) {
          this.showLayer();
        } else {
          this.hideLayer();
        }
      }
      this.props.parentCallback(this.props.keyId, newState);
    }
  }, {
    key: "layerClick",
    value: function layerClick(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      if (this.props.layerStates.greyed) {
        return false;
      }
      if (!this.props.layerStates.active) {
        this.showLayer();
      } else {
        this.hideLayer();
      }
      var newState = this.props.layerStates;
      if (this.props.layer.childs && this.props.layer.childs.length > 0) {
        var layerChilds = this.props.layer.childs;
        for (var childId in layerChilds) {
          if (layerChilds.hasOwnProperty(childId)) {
            var currentChildState = newState.childStates[childId].active;
            if (currentChildState !== newState.active) {
              newState.childStates[childId] = this.changeChildState(layerChilds[childId], newState.childStates[childId], newState.active);
            }
          }
        }
      }
      // this.props.parentCallback(this.props.keyId, newState)
    }
  }, {
    key: "layerZoomTo",
    value: function layerZoomTo(e) {
      var _this2 = this;

      if (!this.props.layerStates.active) {
        this.layerClick(e);
      }
      this.props.mapController.proxy.layerController.zoomTo(this.props.layer);
      this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer, "markLocstyle", true);
      window.setTimeout(function () {
        _this2.props.mapController.proxy.layerController.setChildFeatureFlag(_this2.props.layer, "markLocstyle", false);
      }, 3000);
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {
      this.props.layerStates.childStates[id] = state;
      this.props.changeCollapseState(this.props.keyId, this.props.layerStates);
    }
  }, {
    key: "spanClick",
    value: function spanClick(e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      this.props.layerStates.collapsed = !this.props.layerStates.collapsed;
      this.props.changeCollapseState(this.props.keyId, this.props.layerStates);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var scope = this;
      var stylePicture = null;
      var spanZoom = null;

      if (this.props.mapController.data.starboard.showLocstyles === "1" && this.props.layer.locstyle && this.props.styleData && this.props.styleData.arrLocStyles && this.props.styleData.arrLocStyles[this.props.layer.locstyle]) {
        if (this.props.layer.addZoomTo) {
          stylePicture = _react2.default.createElement(_c4gStarboardStyle.C4gStarboardStyle, { styleData: this.props.styleData, styleId: this.props.layer.locstyle, tooltip: this.props.lang.STARBOARD_ELEMENT_ZOOM, clickEvent: this.layerZoomTo });
        } else {
          stylePicture = _react2.default.createElement(_c4gStarboardStyle.C4gStarboardStyle, { styleData: this.props.styleData, styleId: this.props.layer.locstyle });
        }
      } else if (this.props.layer.addZoomTo && !this.props.mapController.data.starboard.invertZoomActivate) {
        spanZoom = _react2.default.createElement("span", { className: "c4g-geojson-button", title: this.props.lang.STARBOARD_ELEMENT_ZOOM, onMouseUp: function onMouseUp(event) {
            return _this3.layerZoomTo(event);
          } });
      }
      var cssClass = this.props.layerStates.active ? _c4gMapsConstant.cssConstants.ACTIVE : _c4gMapsConstant.cssConstants.INACTIVE;
      if (this.props.layerStates.greyed) {
        cssClass += " " + _c4gMapsConstant.cssConstants.DISABLED;
      }
      var openClose = this.props.layerStates.collapsed ? _c4gMapsConstant.cssConstants.CLOSE : _c4gMapsConstant.cssConstants.OPEN;
      var objChilds = this.props.layer.childs;
      var linkText = void 0;
      var linkSwitch = void 0;
      if (this.props.mapController.data.starboard.invertZoomActivate && this.props.layer.addZoomTo) {
        linkText = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            "a",
            { className: "c4g-starboard-text", onMouseUp: function onMouseUp(event) {
                return _this3.layerZoomTo(event);
              } },
            this.props.layer.name
          )
        );

        linkSwitch = _react2.default.createElement("a", { className: cssClass + " c4g-starboard-checkbox-icon", onMouseUp: function onMouseUp(event) {
            return _this3.layerClick(event);
          } });
      } else {
        linkText = _react2.default.createElement(
          "a",
          { className: cssClass, onMouseUp: function onMouseUp(event) {
              return _this3.layerClick(event);
            } },
          this.props.layer.name
        );
      }

      if (objChilds && objChilds.length) {
        var span = _react2.default.createElement("span", { className: _c4gMapsConstant.cssConstants.ICON, onMouseUp: function onMouseUp(event) {
            return _this3.spanClick(event);
          } });

        return _react2.default.createElement(
          "li",
          { className: openClose + " c4g-starboard-list-element" },
          span,
          stylePicture,
          spanZoom,
          linkText,
          linkSwitch,
          _react2.default.createElement(
            "ul",
            null,
            objChilds.map(function (item, id) {
              if (_this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, _this3.props.layerStates.childStates[id])) {
                return _react2.default.createElement(C4gStarboardLayerElement, { key: id, keyId: id, id: item.id, mapController: _this3.props.mapController,
                  parentCallback: _this3.parentCallback,
                  strFilter: _this3.props.strFilter,
                  filterFunc: _this3.props.filterFunc,
                  changeCollapseState: _this3.changeCollapseState,
                  lang: _this3.props.lang,
                  byPassChilds: _this3.props.byPassChilds || _this3.props.filterFunc(_this3.props.strFilter, item, false, false),
                  layerStates: _this3.props.layerStates.childStates[id],
                  layer: item,
                  styleData: _this3.props.styleData,
                  fnResize: _this3.props.fnResize });
              }
            })
          )
        );
      } else {
        var _spanZoom = null;
        var layerClick = this.layerClick;
        if (this.props.layer.zoomTo) {
          layerClick = this.layerZoomTo;
          cssClass = "c4g-geojson-button";
        }
        return _react2.default.createElement(
          "li",
          { className: openClose + " c4g-starboard-list-element" },
          stylePicture,
          _spanZoom,
          linkText,
          linkSwitch
        );
      }
    }
  }]);
  return C4gStarboardLayerElement;
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	Küstenschmiede GmbH Software & Design
                      * @link              https://www.con4gis.org
                      *
                      */

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-layerswitcher.jsx":
/*!************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-layerswitcher.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarboardLayerswitcher = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerElement = __webpack_require__(/*! ./c4g-starboard-layer-element */ "./Resources/public/js/components/c4g-starboard-layer-element.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarboardLayerswitcher = exports.StarboardLayerswitcher = function (_Component) {
  (0, _inherits3.default)(StarboardLayerswitcher, _Component);

  function StarboardLayerswitcher(props) {
    (0, _classCallCheck3.default)(this, StarboardLayerswitcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StarboardLayerswitcher.__proto__ || (0, _getPrototypeOf2.default)(StarboardLayerswitcher)).call(this, props));

    _this.getInitialStates = function () {
      _this.initialCounterOff = 0;
      _this.initialCounterOn = 0;
      for (var i in _this.props.layerStates) {
        if (_this.props.layerStates.hasOwnProperty(i)) {
          if (_this.props.layerStates[i].active) {
            _this.initialCounterOn++;
          } else {
            _this.initialCounterOff++;
          }
          if (_this.props.layerStates[i].childStates) {
            for (var j in _this.props.layerStates[i].childStates) {
              if (_this.props.layerStates[i].childStates.hasOwnProperty(j)) {
                _this.getInitialStateChild(_this.props.layerStates[i].childStates[j]);
              }
            }
          }
        }
      }
      return _this.initialCounterOn > _this.initialCounterOff;
    };

    _this.callbackFunction = function (key, newState) {
      var newStates = _this.props.layerStates;
      newStates[key] = newState;
      _this.props.parentCallback(newStates);
    };

    var scope = _this;

    _this.setLayerFilter = _this.setLayerFilter.bind(_this);
    _this.toggleAllLayers = _this.toggleAllLayers.bind(_this);
    _this.changeCollapseState = _this.changeCollapseState.bind(_this);
    _this.state = {
      initialized: false,
      layerFilter: ""
    };
    // this.buttonEnabled = this.getInitialStates();
    return _this;
  }

  (0, _createClass3.default)(StarboardLayerswitcher, [{
    key: "getInitialStateChild",
    value: function getInitialStateChild(child) {
      if (child.active) {
        this.initialCounterOn++;
      } else {
        this.initialCounterOff++;
      }
      if (child.childStates) {
        for (var i in child.childStates) {
          if (child.childStates.hasOwnProperty(i)) {
            this.getInitialStateChild(child.childStates[i]);
          }
        }
      }
    }
  }, {
    key: "setLayerFilter",
    value: function setLayerFilter() {
      var filterValue = jQuery(".c4g-starboard-layertree-filter-field").val() || ""; //fallback
      this.setState({ layerFilter: filterValue });
    }
  }, {
    key: "filterFunc",
    value: function filterFunc(strFilter, layer) {
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var digDeeper = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var show = false;
      if (layer && layer.name && (layer.name.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1 || layer.name.toUpperCase().indexOf(strFilter.toUpperCase()) !== -1)) {
        show = true;
        if (strFilter && state) {
          state.collapsed = false;
        }
      } else if (layer.tags && layer.tags.find(function (element) {
        return element.toLowerCase().indexOf(strFilter.toLowerCase()) !== -1;
      })) {
        show = true;
        if (strFilter && state) {
          state.collapsed = false;
        }
      } else if (digDeeper) {
        for (var childId in layer.childs) {
          if (layer.childs.hasOwnProperty(childId) && !show) {
            show = this.filterFunc(strFilter, layer.childs[childId], state.childStates[childId]);
            if (strFilter && show && state) {
              state.collapsed = false;
            }
          }
        }
      }
      return show;
    }
  }, {
    key: "toggleAllLayers",
    value: function toggleAllLayers() {
      var scope = this;
      var states = this.props.layerStates;
      var layers = this.props.objLayers;
      function activateLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          if (!states[i].active) {
            scope.props.mapController.proxy.layerController.show(layers[i].loader, layers[i].features || layers[i].vectorLayer);
          }
          states[i].active = true;
          if (states[i].childStates && states[i].childStates.length > 0) {
            states[i].childStates = activateLayers(layers[i].childs, states[i].childStates);
          }
        }
        scope.buttonEnabled = true;
        return states;
      }
      function deactivateLayers(layers, states) {
        for (var i = 0; i < states.length; i++) {
          if (states[i].active) {
            scope.props.mapController.proxy.layerController.hide(layers[i].loader, layers[i].features || layers[i].vectorLayer);
          }
          states[i].active = false;
          if (states[i].childStates && states[i].childStates.length > 0) {
            states[i].childStates = deactivateLayers(layers[i].childs, states[i].childStates);
          }
        }
        scope.buttonEnabled = false;
        return states;
      }

      if (!scope.buttonEnabled) {
        states = activateLayers(layers, states);
      } else {
        states = deactivateLayers(layers, states);
      }

      this.props.parentCallback(states);
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.layerStates && this.props.layerStates.length > 0 && !(this.initialCounterOff && this.initialCounterOn)) {
        this.buttonEnabled = this.getInitialStates();
      }

      var layers = void 0,
          states = void 0,
          filter = void 0;
      layers = this.props.objLayers;
      states = this.props.layerStates;
      if (!this.props.active) {
        return null;
      }

      filter = '';
      if (this.props.mapController.data.layerswitcher.filter) {
        filter = _react2.default.createElement(
          "div",
          { className: "c4g-starboard-layertree-filter without-button" },
          _react2.default.createElement("input", { className: "c4g-starboard-layertree-filter-field", type: "text", onInput: this.setLayerFilter, placeholder: "\uF002" })
        );
      }

      var headline = "";
      if (this.props.mapController.data.starboard.button) {
        headline = _react2.default.createElement(
          "a",
          { className: "c4g-starboard-headline-link " + (this.buttonEnabled ? "c4g-active" : "c4g-inactive"), onMouseUp: this.toggleAllLayers },
          this.props.headline || this.props.lang.LAYERSWITCHER_TOGGLE_ALL
        );
      } else {
        headline = _react2.default.createElement(
          "div",
          { className: "contentHeadline" },
          this.props.headline
        );
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        headline,
        filter,
        _react2.default.createElement(
          "div",
          { className: "c4g-content-layertree" },
          _react2.default.createElement(
            "div",
            { className: _c4gMapsConstant.cssConstants.STARBOARD_LAYERTREE },
            _react2.default.createElement(
              "ul",
              null,
              layers.map(function (item, id) {
                if (_this2.filterFunc(_this2.state.layerFilter, item, states[id])) {
                  return _react2.default.createElement(_c4gStarboardLayerElement.C4gStarboardLayerElement, { key: id, keyId: id, id: item.id, mapController: _this2.props.mapController,
                    parentCallback: _this2.callbackFunction,
                    layer: item,
                    styleData: _this2.props.styleData,
                    changeCollapseState: _this2.props.changeCollapseState,
                    layerStates: states[id],
                    lang: _this2.props.lang,
                    byPassChilds: _this2.filterFunc(_this2.state.layerFilter, item, false, false),
                    strFilter: _this2.state.layerFilter,
                    filterFunc: _this2.filterFunc,
                    fnResize: _this2.props.fnResize });
                }
              })
            )
          )
        )
      );
    }
  }]);
  return StarboardLayerswitcher;
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	    Küstenschmiede GmbH Software & Design
                      * @link            https://www.con4gis.org
                      *
                      */

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-panel.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-panel.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerswitcher = __webpack_require__(/*! ./c4g-starboard-layerswitcher */ "./Resources/public/js/components/c4g-starboard-layerswitcher.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarboardPanel = function (_Component) {
  (0, _inherits3.default)(StarboardPanel, _Component);

  function StarboardPanel(props) {
    (0, _classCallCheck3.default)(this, StarboardPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StarboardPanel.__proto__ || (0, _getPrototypeOf2.default)(StarboardPanel)).call(this, props));

    var scope = _this;
    // create control to toggle the panel
    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_STARBOARD;
    element.className = "c4g-starboard-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    if (props.external) {
      element.className += " c4g-external";
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
    var control = new _control.Control({ element: element, target: props.target });
    mapController.mapsControls.controls.horizontalPanel = control;
    mapController.map.addControl(control);
    _this.open = _this.open.bind(_this);
    _this.slideOutCollidingElements = _this.slideOutCollidingElements.bind(_this);
    _this.resizeFunction = _this.resizeFunction.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.createStylingForIcon = _this.createStylingForIcon.bind(_this);
    // state variables (every property that has influence on this component)
    _this.state = {
      // either "top" or "bottom"
      direction: props.direction || "right",
      open: props.open || false,
      className: props.className || "c4g-starboard-panel",
      childs: props.childs || [],
      control: control,
      activeTab: 0
    };
    return _this;
  }

  (0, _createClass3.default)(StarboardPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "setActiveTab",
    value: function setActiveTab(idx) {
      this.setState({ activeTab: idx });
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      var mapData = this.props.mapController.data;
      var className = this.state.className + "-" + this.state.direction;
      className += " " + (this.state.open ? "c4g-open" : "c4g-close");
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      }
      var buttonSwitcher = "";
      var buttons = [];
      if (this.props.tabLayers.length > 0) {
        var regularButton = _react2.default.createElement("button", { key: this.props.tabLayers.length, title: this.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER, className: "c4g-starboard-view-trigger-layerswitcher", onMouseUp: function onMouseUp() {
            scope.setActiveTab(0);
          } });
        buttons.push(regularButton);
        buttons.push(this.props.tabLayers.map(function (element, index) {
          var iconCode = element.awesomeIcon;
          scope.createStylingForIcon(iconCode, index);
          return _react2.default.createElement("button", { key: index, title: element[0].name,
            className: "c4g-starboard-view-trigger-tab-" + index,
            onMouseUp: function onMouseUp() {
              scope.setActiveTab(index + 1);
            } });
        }));
        buttonSwitcher = _react2.default.createElement(
          "div",
          { className: "c4g-starboard-switcher" },
          buttons
        );
      }
      var tabs = "";
      if (this.props.tabLayers.length > 0) {
        tabs = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          this.props.tabLayers.map(function (element, index) {
            return _react2.default.createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, { key: index, mapController: scope.props.mapController,
              objLayers: scope.props.tabLayers[index], parentCallback: scope.props.tabCallback,
              layerStates: scope.props.tabStates, openfunc: scope.open, headline: element[0].name,
              open: scope.state.open, active: index + 1 === scope.state.activeTab });
          })
        );
      }
      return _react2.default.createElement(
        "div",
        { className: _c4gMapsConstant.cssConstants.STARBOARD_WRAPPER },
        _react2.default.createElement(_c4gTitlebar.Titlebar, { wrapperClass: "c4g-starboard-header", headerClass: _c4gMapsConstant.cssConstants.STARBOARD_HEADLINE,
          header: mapData.starboard.label || this.langConstants.STARBOARD, closeBtnClass: _c4gMapsConstant.cssConstants.STARBOARD_CLOSE, closeBtnCb: this.close,
          closeBtnTitle: this.langConstants.CLOSE }),
        buttonSwitcher,
        _react2.default.createElement(
          "div",
          { className: _c4gMapsConstant.cssConstants.STARBOARD_CONTENT_CONTAINER },
          _react2.default.createElement(_c4gStarboardLayerswitcher.StarboardLayerswitcher, { key: this.props.tabLayers.length, mapController: this.props.mapController, lang: this.langConstants,
            objLayers: this.props.objLayers, styleData: this.props.styleData, parentCallback: this.props.parentCallback,
            layerStates: this.props.layerStates, changeCollapseState: this.props.changeCollapseState, openfunc: this.open, headline: mapData.layerswitcher.label,
            open: this.state.open, active: scope.state.activeTab === 0 }),
          tabs
        )
      );
    }
  }, {
    key: "createStylingForIcon",
    value: function createStylingForIcon(iconCode, index) {
      var style = document.createElement("style");
      // webkit hack:
      style.appendChild(document.createTextNode(""));
      document.head.appendChild(style);

      var styleSheet = style.sheet;
      styleSheet.insertRule("button.c4g-starboard-view-trigger-tab-" + index + ":before {\n" + "  content: \"\\" + iconCode + "\";\n" + "  font-family: 'Font Awesome 5 Free';\n" + "  font-weight: 900;\n" + "  font-size: inherit;\n" + "}");
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.setState({ open: true }, function () {
        return _this2.slideOutCollidingElements();
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      this.setState({ open: false }, function () {
        return _this3.slideInCollidingElements();
      });
    }
  }, {
    key: "resizeFunction",
    value: function resizeFunction() {
      var scope = this;
      window.requestAnimationFrame(function () {
        scope.slideOutCollidingElements();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.open) {
        this.slideOutCollidingElements();
      } else {
        this.slideInCollidingElements();
      }
      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');
        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }

    /**
     * Moves the buttons that would collide with the panel.
     */

  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {
      jQuery(".c4g-starboard-container").addClass("c4g-open").removeClass("c4g-close");
    }

    /**
     * Undoes the previous button movement.
     */

  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {
      jQuery(".c4g-starboard-container").addClass("c4g-close").removeClass("c4g-open");
    }
  }]);
  return StarboardPanel;
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	    con4gis
                      * @version         6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	    Küstenschmiede GmbH Software & Design
                      * @link            https://www.con4gis.org
                      *
                      */

exports.default = StarboardPanel;

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-style.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-style.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.C4gStarboardStyle = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Feature = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C4gStarboardStyle = exports.C4gStarboardStyle = function (_Component) {
    (0, _inherits3.default)(C4gStarboardStyle, _Component);

    function C4gStarboardStyle(props) {
        (0, _classCallCheck3.default)(this, C4gStarboardStyle);
        return (0, _possibleConstructorReturn3.default)(this, (C4gStarboardStyle.__proto__ || (0, _getPrototypeOf2.default)(C4gStarboardStyle)).call(this, props));
    }

    (0, _createClass3.default)(C4gStarboardStyle, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            // Create label for interaction-trigger
            var styleTriggerLabel = null;
            var locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
            var styleData = locstyle.locStyleArr;
            var stylor = locstyle.style && locstyle.style(new _Feature2.default({ geometry: new _geom.Point(0, 0) }), "EPSG:4326") ? locstyle.style(new _Feature2.default({ geometry: new _geom.Point(0, 0) }), "EPSG:4326") : null;
            var styl0r = Array.isArray(stylor) ? stylor[0] : stylor;
            var styleType = styleData ? styleData.styletype : "default";
            if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
                var styleIcon = null;
                var iconSrc = void 0;
                if (styleData.icon_src && styleData.icon_src.indexOf('.') !== -1 || styleData.svgSrc && styleData.svgSrc.indexOf('.') !== -1) {
                    if (styleType === "cust_icon" || styleType === "photo") {
                        iconSrc = styleData.icon_src;
                    } else {
                        iconSrc = styleData.svgSrc;
                    }
                    styleIcon = _react2.default.createElement("img", { src: iconSrc, style: { height: 25, width: 25 } });
                } else if (styl0r) {
                    var styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage() : null;
                    if (styleImage && styleImage.getSrc()) {
                        styleIcon = _react2.default.createElement("img", { src: styleImage.getSrc(), style: { height: 25, width: 25 } });
                    } else {
                        return null;
                    }
                }
                if (this.props.clickEvent && this.props.tooltip) {
                    styleTriggerLabel = _react2.default.createElement(
                        "span",
                        { className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE, title: this.props.tooltip, onMouseUp: function onMouseUp(event) {
                                return _this2.props.clickEvent(event);
                            } },
                        styleIcon
                    );
                } else {
                    styleTriggerLabel = _react2.default.createElement(
                        "span",
                        { className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE },
                        styleIcon
                    );
                }
            } else {
                var cssClass = void 0;
                switch (styleType) {// 'point', 'square', 'star', 'x', 'cross', 'triangle'
                    case "point":
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_POINT;
                        break;
                    case "square":
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_SQUARE;
                        break;
                    case "star":
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_STAR;
                        break;
                    case "x":
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_X;
                        break;
                    case "cross":
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_CROSS;
                        break;
                    case "triangle":
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;
                        break;
                    default:
                        cssClass = _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE;
                        break;
                }
                var color = void 0,
                    bordercolor = void 0;
                if (styl0r && styl0r.getFill() && styl0r.getStroke()) {
                    color = styl0r.getFill().getColor();
                    bordercolor = styl0r.getStroke().getColor();
                } else if (styleData && styleData.fillcolor && styleData.strokecolor) {
                    color = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1]);
                    bordercolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]);
                }
                var styleElements = {
                    "--var-color": color,
                    "--var-bordercolor": bordercolor
                };
                if (this.props.clickEvent && this.props.tooltip) {
                    styleTriggerLabel = _react2.default.createElement("span", { className: cssClass, style: styleElements, title: this.props.tooltip, onMouseUp: function onMouseUp(event) {
                            return _this2.props.clickEvent(event);
                        } });
                } else {
                    styleTriggerLabel = _react2.default.createElement("span", { className: cssClass, style: styleElements });
                }
            }
            return styleTriggerLabel;
        }
    }]);
    return C4gStarboardStyle;
}(_react.Component); /*
                      * This file is part of con4gis,
                      * the gis-kit for Contao CMS.
                      *
                      * @package   	con4gis
                      * @version        6
                      * @author  	    con4gis contributors (see "authors.txt")
                      * @license 	    LGPL-3.0-or-later
                      * @copyright 	Küstenschmiede GmbH Software & Design
                      * @link              https://www.con4gis.org
                      *
                      */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4Il0sIm5hbWVzIjpbIm9sRXh0ZW50IiwiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImFkZFpvb21UbyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJuYW1lIiwic3BhbiIsIklDT04iLCJtYXAiLCJpdGVtIiwiYnlQYXNzQ2hpbGRzIiwiZmlsdGVyRnVuYyIsInN0ckZpbHRlciIsImZuUmVzaXplIiwiQ29tcG9uZW50IiwiU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciIsImdldEluaXRpYWxTdGF0ZXMiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwiY2FsbGJhY2tGdW5jdGlvbiIsIm5ld1N0YXRlcyIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiZWxlbWVudCIsInN0YXRlcyIsImxheWVycyIsIm9iakxheWVycyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwidGl0bGUiLCJDVFJMX1NUQVJCT0FSRCIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwib24iLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJhZGRDb250cm9sIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInJlc2l6ZUZ1bmN0aW9uIiwiY3JlYXRlU3R5bGluZ0Zvckljb24iLCJkaXJlY3Rpb24iLCJhY3RpdmVUYWIiLCJpZHgiLCJtYXBEYXRhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJ1dHRvblN3aXRjaGVyIiwiYnV0dG9ucyIsInRhYkxheWVycyIsInJlZ3VsYXJCdXR0b24iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJzZXRBY3RpdmVUYWIiLCJwdXNoIiwiaW5kZXgiLCJpY29uQ29kZSIsImF3ZXNvbWVJY29uIiwidGFicyIsInRhYkNhbGxiYWNrIiwidGFiU3RhdGVzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJsYWJlbCIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsInN0eWxlIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwic3R5bGVTaGVldCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInNldE9wZW5Db21wb25lbnQiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJDNGdTdGFyYm9hcmRTdHlsZSIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVJZCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJzdHlsZUljb24iLCJpY29uU3JjIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlSW1hZ2UiLCJnZXRJbWFnZSIsImdldFNyYyIsImNsaWNrRXZlbnQiLCJ0b29sdGlwIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7SUFBWUEsUTs7QUFDWjs7QUFDQTs7QUFDQTs7Ozs7O0lBRWFDLHdCLFdBQUFBLHdCOzs7QUFFWCxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBLQUNYQSxLQURXOztBQUVqQixRQUFNQyxhQUFOOztBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxXQUFMLEdB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O0FBSUEsb0JBQUksS0FBSzFOLEtBQUwsQ0FBV2dOLFVBQVgsSUFBeUIsS0FBS2hOLEtBQUwsQ0FBV2lOLE9BQXhDLEVBQWlEO0FBQzdDcEIsd0NBQW9CLHdDQUFNLFdBQVczSCxRQUFqQixFQUEyQixPQUFPK0osYUFBbEMsRUFBaUQsT0FBTyxLQUFLak8sS0FBTCxDQUFXaU4sT0FBbkUsRUFBNEUsV0FBVyxtQkFBQ2hKLEtBQUQ7QUFBQSxtQ0FBVSxPQUFLakUsS0FBTCxDQUFXZ04sVUFBWCxDQUFzQi9JLEtBQXRCLENBQVY7QUFBQSx5QkFBdkYsR0FBcEI7QUFDSCxpQkFGRCxNQUdLO0FBQ0Q0SCx3Q0FBb0Isd0NBQU0sV0FBVzNILFFBQWpCLEVBQTJCLE9BQU8rSixhQUFsQyxHQUFwQjtBQUNIO0FBQ0o7QUFDRCxtQkFBT3BDLGlCQUFQO0FBQ0g7OztFQXRGa0N2RyxnQixHQW5CdkMiLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIG9sRXh0ZW50IGZyb20gXCJvbC9leHRlbnRcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRTdHlsZX0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1zdHlsZVwiO1xuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCJvbC9sYXllclwiO1xuXG5leHBvcnQgY2xhc3MgQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLmxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmxheWVyWm9vbVRvID0gdGhpcy5sYXllclpvb21Uby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3BhbkNsaWNrID0gdGhpcy5zcGFuQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcmVudENhbGxiYWNrID0gdGhpcy5wYXJlbnRDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBzaG93TGF5ZXIoc2hvd0VsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoc2hvd0VsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzaG93RWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChzaG93RWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBzaG93RWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcyxzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmICh2ZWN0b3JMYXllcil7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGVMYXllcihoaWRlRWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChoaWRlRWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpZGVFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKGhpZGVFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IGhpZGVFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGxldCBsYXllckNvbnRyb2xsZXIgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlcjtcbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCBmZWF0dXJlcywgc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCBmYWxzZSlcbiAgfVxuICBjaGFuZ2VDaGlsZFN0YXRlIChjaGlsZCwgY2hpbGRTdGF0ZSwgYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkcyAmJiBjaGlsZC5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBjaGlsZC5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gYWN0aXZlKSB7XG4gICAgICAgICAgICBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGNoaWxkLmNoaWxkc1tjaGlsZElkXSwgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgYWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoY2hpbGRTdGF0ZS5pZCwgYWN0aXZlKVxuICAgIGNoaWxkU3RhdGUuYWN0aXZlID0gYWN0aXZlO1xuICAgIHJldHVybiBjaGlsZFN0YXRlO1xuICB9XG4gIHBhcmVudENhbGxiYWNrIChrZXksIG5ld0NoaWxkU3RhdGUpIHtcbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2tleV0gPSBuZXdDaGlsZFN0YXRlO1xuICAgIGlmIChuZXdTdGF0ZS5hY3RpdmUgIT0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgIC8vIG5ld1N0YXRlLmFjdGl2ZSA9IG5ld0NoaWxkU3RhdGUuYWN0aXZlO1xuICAgICAgaWYgKG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllckNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoKTtcbiAgICB9XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllci5jaGlsZHMgJiYgdGhpcy5wcm9wcy5sYXllci5jaGlsZHMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGxheWVyQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyQ2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllckNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSkge1xuICAgICAgICAgIGxldCBjdXJyZW50Q2hpbGRTdGF0ZSA9IG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IG5ld1N0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUobGF5ZXJDaGlsZHNbY2hpbGRJZF0sIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBuZXdTdGF0ZS5hY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyWm9vbVRvKGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmxheWVyQ2xpY2soZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuem9vbVRvKHRoaXMucHJvcHMubGF5ZXIpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG4gICAgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0gPSBzdGF0ZTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcyk7XG4gIH1cbiAgc3BhbkNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQgPSAhdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3R5bGVQaWN0dXJlID0gbnVsbDtcbiAgICBsZXQgc3Bhblpvb20gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5zaG93TG9jc3R5bGVzID09PSBcIjFcIiAmJiB0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlcyAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZV0pIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmFkZFpvb21Ubykge1xuICAgICAgICBzdHlsZVBpY3R1cmUgPSA8QzRnU3RhcmJvYXJkU3R5bGUgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17dGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT019IGNsaWNrRXZlbnQ9e3RoaXMubGF5ZXJab29tVG99Lz47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9Lz47XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvICYmICF0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlKSB7XG4gICAgICBzcGFuWm9vbSA9IDxzcGFuIGNsYXNzTmFtZT17XCJjNGctZ2VvanNvbi1idXR0b25cIn0gdGl0bGU9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9Lz47XG4gICAgfVxuICAgIGxldCBjc3NDbGFzcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlID8gY3NzQ29uc3RhbnRzLkFDVElWRSA6IGNzc0NvbnN0YW50cy5JTkFDVElWRTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIGNzc0NsYXNzICs9IFwiIFwiICsgY3NzQ29uc3RhbnRzLkRJU0FCTEVEO1xuICAgIH1cbiAgICBsZXQgb3BlbkNsb3NlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jb2xsYXBzZWQgPyBjc3NDb25zdGFudHMuQ0xPU0UgOiBjc3NDb25zdGFudHMuT1BFTjtcbiAgICBsZXQgb2JqQ2hpbGRzID0gdGhpcy5wcm9wcy5sYXllci5jaGlsZHM7XG4gICAgbGV0IGxpbmtUZXh0O1xuICAgIGxldCBsaW5rU3dpdGNoO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuaW52ZXJ0Wm9vbUFjdGl2YXRlICYmIHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvKSB7XG4gICAgICBsaW5rVGV4dCA9IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdGV4dFwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllclpvb21UbyhldmVudCl9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9hPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgbGlua1N3aXRjaCA9IDxhIGNsYXNzTmFtZT17Y3NzQ2xhc3MgKyBcIiBjNGctc3RhcmJvYXJkLWNoZWNrYm94LWljb25cIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9PjwvYT5cbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxpbmtUZXh0ID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzc30gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJDbGljayhldmVudCl9Pnt0aGlzLnByb3BzLmxheWVyLm5hbWV9PC9hPjtcbiAgICB9XG5cbiAgICBpZiAob2JqQ2hpbGRzICYmIG9iakNoaWxkcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzcGFuID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuSUNPTn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMuc3BhbkNsaWNrKGV2ZW50KX0vPjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAge3NwYW59XG4gICAgICAgICAge3N0eWxlUGljdHVyZX1cbiAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgIHtsaW5rU3dpdGNofVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtvYmpDaGlsZHMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5ieVBhc3NDaGlsZHMgfHwgdGhpcy5wcm9wcy5maWx0ZXJGdW5jKHRoaXMucHJvcHMuc3RyRmlsdGVyLCBpdGVtLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBrZXk9e2lkfSBrZXlJZD17aWR9IGlkPXtpdGVtLmlkfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5wcm9wcy5zdHJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLnByb3BzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXt0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHNwYW5ab29tID0gbnVsbDtcbiAgICAgIGxldCBsYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrO1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuem9vbVRvKSB7XG4gICAgICAgIGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyWm9vbVRvO1xuICAgICAgICBjc3NDbGFzcyA9IFwiYzRnLWdlb2pzb24tYnV0dG9uXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgICAge3N0eWxlUGljdHVyZX1cbiAgICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICAgIHtsaW5rU3dpdGNofVxuICAgICAgICAgIDwvbGk+XG4gICAgICApXG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdCAgICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZExheWVyRWxlbWVudH0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG5cbiAgICB0aGlzLnNldExheWVyRmlsdGVyID0gdGhpcy5zZXRMYXllckZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlQWxsTGF5ZXJzID0gdGhpcy50b2dnbGVBbGxMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUgPSB0aGlzLmNoYW5nZUNvbGxhcHNlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgbGF5ZXJGaWx0ZXI6IFwiXCJcbiAgICB9O1xuICAgIC8vIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlcyA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmID0gMDtcbiAgICB0aGlzLmluaXRpYWxDb3VudGVyT24gPSAwO1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXNbal0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluaXRpYWxDb3VudGVyT24gPiB0aGlzLmluaXRpYWxDb3VudGVyT2ZmO1xuICB9XG4gIGdldEluaXRpYWxTdGF0ZUNoaWxkIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5hY3RpdmUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICB9XG4gICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpIGluIGNoaWxkLmNoaWxkU3RhdGVzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQoY2hpbGQuY2hpbGRTdGF0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2tGdW5jdGlvbiA9IChrZXksIG5ld1N0YXRlKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGVzW2tleV0gPSBuZXdTdGF0ZTtcbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKG5ld1N0YXRlcylcbiAgfTtcblxuICBzZXRMYXllckZpbHRlcigpIHtcbiAgICBsZXQgZmlsdGVyVmFsdWUgPSBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCIpLnZhbCgpIHx8IFwiXCI7IC8vZmFsbGJhY2tcbiAgICB0aGlzLnNldFN0YXRlKHtsYXllckZpbHRlcjogZmlsdGVyVmFsdWV9KTtcbiAgfVxuXG4gIGZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllciwgc3RhdGUgPSB7fSwgZGlnRGVlcGVyID0gdHJ1ZSkge1xuICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgaWYgKGxheWVyICYmIGxheWVyLm5hbWUgJiYgKGxheWVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgICAgfHwgbGF5ZXIubmFtZS50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpIHtcbiAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYobGF5ZXIudGFncyAmJiBsYXllci50YWdzLmZpbmQoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMX0pKXtcbiAgICAgIHNob3cgPSB0cnVlXG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlnRGVlcGVyKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGxheWVyLmNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXIuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpICYmICFzaG93KSB7XG4gICAgICAgICAgc2hvdyA9IHRoaXMuZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLmNoaWxkc1tjaGlsZElkXSwgc3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0pO1xuICAgICAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc2hvdyAmJiBzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG93O1xuICB9XG5cbiAgdG9nZ2xlQWxsTGF5ZXJzKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNob3cobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuaGlkZShsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgJiYgc3RhdGVzW2ldLmNoaWxkU3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFzY29wZS5idXR0b25FbmFibGVkKSB7XG4gICAgICBzdGF0ZXMgPSBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2soc3RhdGVzKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzICYmIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMubGVuZ3RoID4gMCAmJiAhKHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgJiYgdGhpcy5pbml0aWFsQ291bnRlck9uKSkge1xuICAgICAgdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gICAgfVxuXG4gICAgbGV0IGxheWVycywgc3RhdGVzLCBmaWx0ZXI7XG4gICAgbGF5ZXJzID0gdGhpcy5wcm9wcy5vYmpMYXllcnM7XG4gICAgc3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmaWx0ZXIgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGF5ZXJzd2l0Y2hlci5maWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlciB3aXRob3V0LWJ1dHRvblwifT5cbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyLWZpZWxkXCJ9IHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5zZXRMYXllckZpbHRlcn0gcGxhY2Vob2xkZXI9e1wiXFx1ZjAwMlwifS8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICBsZXQgaGVhZGxpbmUgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuYnV0dG9uKSB7XG4gICAgICBoZWFkbGluZSA9IDxhIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWhlYWRsaW5lLWxpbmsgXCIgKyAodGhpcy5idXR0b25FbmFibGVkID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX0gb25Nb3VzZVVwPXt0aGlzLnRvZ2dsZUFsbExheWVyc30+e3RoaXMucHJvcHMuaGVhZGxpbmUgfHwgdGhpcy5wcm9wcy5sYW5nLkxBWUVSU1dJVENIRVJfVE9HR0xFX0FMTH08L2E+O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkbGluZSA9IDxkaXYgY2xhc3NOYW1lPVwiY29udGVudEhlYWRsaW5lXCI+e3RoaXMucHJvcHMuaGVhZGxpbmV9PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2hlYWRsaW5lfVxuICAgICAge2ZpbHRlcn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1jb250ZW50LWxheWVydHJlZVwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTEFZRVJUUkVFfT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bGF5ZXJzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLCBzdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDYWxsYmFjaz17dGhpcy5jYWxsYmFja0Z1bmN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieVBhc3NDaGlsZHM9e3RoaXMuZmlsdGVyRnVuYyh0aGlzLnN0YXRlLmxheWVyRmlsdGVyLCBpdGVtLGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnN0YXRlLmxheWVyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHQgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0ICAgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlcn0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyXCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXJcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyYm9hcmRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX1NUQVJCT0FSRDtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuaG9yaXpvbnRhbFBhbmVsID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyA9IHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzaXplRnVuY3Rpb24gPSB0aGlzLnJlc2l6ZUZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uID0gdGhpcy5jcmVhdGVTdHlsaW5nRm9ySWNvbi5iaW5kKHRoaXMpO1xuICAgIC8vIHN0YXRlIHZhcmlhYmxlcyAoZXZlcnkgcHJvcGVydHkgdGhhdCBoYXMgaW5mbHVlbmNlIG9uIHRoaXMgY29tcG9uZW50KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBlaXRoZXIgXCJ0b3BcIiBvciBcImJvdHRvbVwiXG4gICAgICBkaXJlY3Rpb246IHByb3BzLmRpcmVjdGlvbiB8fCBcInJpZ2h0XCIsXG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgXCJjNGctc3RhcmJvYXJkLXBhbmVsXCIsXG4gICAgICBjaGlsZHM6IHByb3BzLmNoaWxkcyB8fCBbXSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICBhY3RpdmVUYWI6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHNldEFjdGl2ZVRhYihpZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IGlkeH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBjb25zdCBtYXBEYXRhID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGE7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY2xhc3NOYW1lICsgXCItXCIgKyB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJjNGctb3BlblwiIDogXCJjNGctY2xvc2VcIik7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIGxldCBidXR0b25Td2l0Y2hlciA9IFwiXCI7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHJlZ3VsYXJCdXR0b24gPSA8YnV0dG9uIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSB0aXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUn0gY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXJcIn0gb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKDApfX0vPjtcbiAgICAgIGJ1dHRvbnMucHVzaChyZWd1bGFyQnV0dG9uKTtcbiAgICAgIGJ1dHRvbnMucHVzaCh0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaWNvbkNvZGUgPSBlbGVtZW50LmF3ZXNvbWVJY29uO1xuICAgICAgICAgIHNjb3BlLmNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCk7XG4gICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gdGl0bGU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItdGFiLVwiICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7c2NvcGUuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSl9fS8+O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGJ1dHRvblN3aXRjaGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1zd2l0Y2hlclwifT5cbiAgICAgICAge2J1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgbGV0IHRhYnMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJzID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWJMYXllcnMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17aW5kZXh9IG1hcENvbnRyb2xsZXI9e3Njb3BlLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17c2NvcGUucHJvcHMudGFiTGF5ZXJzW2luZGV4XX0gcGFyZW50Q2FsbGJhY2s9e3Njb3BlLnByb3BzLnRhYkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c2NvcGUucHJvcHMudGFiU3RhdGVzfSBvcGVuZnVuYz17c2NvcGUub3Blbn0gaGVhZGxpbmU9e2VsZW1lbnRbMF0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2NvcGUuc3RhdGUub3Blbn0gYWN0aXZlPXsoaW5kZXggKyAxKSA9PT0gc2NvcGUuc3RhdGUuYWN0aXZlVGFifS8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfV1JBUFBFUn0+XG4gICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZC1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfSEVBRExJTkV9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e21hcERhdGEuc3RhcmJvYXJkLmxhYmVsIHx8IHRoaXMubGFuZ0NvbnN0YW50cy5TVEFSQk9BUkR9IGNsb3NlQnRuQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ0xPU0V9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9XG4gICAgICAgICAgICAgICAgICBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICB7YnV0dG9uU3dpdGNoZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSfT5cbiAgICAgICAgICA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gbWFwQ29udHJvbGxlciA9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3RoaXMucHJvcHMub2JqTGF5ZXJzfSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBwYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXN9IGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX0gb3BlbmZ1bmM9e3RoaXMub3Blbn0gaGVhZGxpbmU9e21hcERhdGEubGF5ZXJzd2l0Y2hlci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBhY3RpdmU9e3Njb3BlLnN0YXRlLmFjdGl2ZVRhYiA9PT0gMH0vPlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCkge1xuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAvLyB3ZWJraXQgaGFjazpcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcImJ1dHRvbi5jNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleCArIFwiOmJlZm9yZSB7XFxuXCIgK1xuICAgICAgXCIgIGNvbnRlbnQ6IFxcXCJcXFxcXCIgKyBpY29uQ29kZSArIFwiXFxcIjtcXG5cIiArXG4gICAgICBcIiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG5cIiArXG4gICAgICBcIiAgZm9udC13ZWlnaHQ6IDkwMDtcXG5cIiArXG4gICAgICBcIiAgZm9udC1zaXplOiBpbmhlcml0O1xcblwiICtcbiAgICAgIFwifVwiKVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9LCAoKSA9PiB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpKTtcbiAgfVxuXG4gIHJlc2l6ZUZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICAvKipcbiAgICogVW5kb2VzIHRoZSBwcmV2aW91cyBidXR0b24gbW92ZW1lbnQuXG4gICAqL1xuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCAmJiB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCAmJiB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==