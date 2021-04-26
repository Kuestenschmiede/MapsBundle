(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

var olExtent = _interopRequireWildcard(_extent);

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style */ "./Resources/public/js/components/c4g-starboard-style.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var C4gStarboardLayerElement = exports.C4gStarboardLayerElement = function (_Component) {
  _inherits(C4gStarboardLayerElement, _Component);

  function C4gStarboardLayerElement(props) {
    _classCallCheck(this, C4gStarboardLayerElement);

    var _this = _possibleConstructorReturn(this, (C4gStarboardLayerElement.__proto__ || Object.getPrototypeOf(C4gStarboardLayerElement)).call(this, props));

    var scope = _this;

    _this.layerClick = _this.layerClick.bind(_this);
    _this.layerZoomTo = _this.layerZoomTo.bind(_this);
    _this.spanClick = _this.spanClick.bind(_this);
    _this.changeCollapseState = _this.changeCollapseState.bind(_this);
    _this.parentCallback = _this.parentCallback.bind(_this);
    return _this;
  }

  _createClass(C4gStarboardLayerElement, [{
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
}(_react.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerElement = __webpack_require__(/*! ./c4g-starboard-layer-element */ "./Resources/public/js/components/c4g-starboard-layer-element.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var StarboardLayerswitcher = exports.StarboardLayerswitcher = function (_Component) {
  _inherits(StarboardLayerswitcher, _Component);

  function StarboardLayerswitcher(props) {
    _classCallCheck(this, StarboardLayerswitcher);

    var _this = _possibleConstructorReturn(this, (StarboardLayerswitcher.__proto__ || Object.getPrototypeOf(StarboardLayerswitcher)).call(this, props));

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

  _createClass(StarboardLayerswitcher, [{
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
}(_react.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gStarboardLayerswitcher = __webpack_require__(/*! ./c4g-starboard-layerswitcher */ "./Resources/public/js/components/c4g-starboard-layerswitcher.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var Titlebar = _react2.default.lazy(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx", 7));
});

var StarboardPanel = function (_Component) {
  _inherits(StarboardPanel, _Component);

  function StarboardPanel(props) {
    _classCallCheck(this, StarboardPanel);

    var _this = _possibleConstructorReturn(this, (StarboardPanel.__proto__ || Object.getPrototypeOf(StarboardPanel)).call(this, props));

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

  _createClass(StarboardPanel, [{
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
        _react2.default.createElement(
          _react.Suspense,
          { fallback: _react2.default.createElement(
              "div",
              null,
              "Loading..."
            ) },
          _react2.default.createElement(Titlebar, { wrapperClass: "c4g-starboard-header", headerClass: _c4gMapsConstant.cssConstants.STARBOARD_HEADLINE,
            header: mapData.starboard.label || this.langConstants.STARBOARD, closeBtnClass: _c4gMapsConstant.cssConstants.STARBOARD_CLOSE, closeBtnCb: this.close,
            closeBtnTitle: this.langConstants.CLOSE })
        ),
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
}(_react.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Feature = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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


var C4gStarboardStyle = exports.C4gStarboardStyle = function (_Component) {
    _inherits(C4gStarboardStyle, _Component);

    function C4gStarboardStyle(props) {
        _classCallCheck(this, C4gStarboardStyle);

        return _possibleConstructorReturn(this, (C4gStarboardStyle.__proto__ || Object.getPrototypeOf(C4gStarboardStyle)).call(this, props));
    }

    _createClass(C4gStarboardStyle, [{
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
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4Il0sIm5hbWVzIjpbIm9sRXh0ZW50IiwiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImFkZFpvb21UbyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJuYW1lIiwic3BhbiIsIklDT04iLCJtYXAiLCJpdGVtIiwiYnlQYXNzQ2hpbGRzIiwiZmlsdGVyRnVuYyIsInN0ckZpbHRlciIsImZuUmVzaXplIiwiQ29tcG9uZW50IiwiU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciIsImdldEluaXRpYWxTdGF0ZXMiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwiY2FsbGJhY2tGdW5jdGlvbiIsIm5ld1N0YXRlcyIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiZWxlbWVudCIsInN0YXRlcyIsImxheWVycyIsIm9iakxheWVycyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJTdGFyYm9hcmRQYW5lbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxhbmdDb25zdGFudHMiLCJ0aXRsZSIsIkNUUkxfU1RBUkJPQVJEIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJvbiIsImNsb3NlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImhvcml6b250YWxQYW5lbCIsImFkZENvbnRyb2wiLCJzbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzIiwicmVzaXplRnVuY3Rpb24iLCJjcmVhdGVTdHlsaW5nRm9ySWNvbiIsImRpcmVjdGlvbiIsImFjdGl2ZVRhYiIsImlkeCIsIm1hcERhdGEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYnV0dG9uU3dpdGNoZXIiLCJidXR0b25zIiwidGFiTGF5ZXJzIiwicmVndWxhckJ1dHRvbiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUiIsInNldEFjdGl2ZVRhYiIsInB1c2giLCJpbmRleCIsImljb25Db2RlIiwiYXdlc29tZUljb24iLCJ0YWJzIiwidGFiQ2FsbGJhY2siLCJ0YWJTdGF0ZXMiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9IRUFETElORSIsImxhYmVsIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0NMT1NFIiwiU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSIiwic3R5bGUiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJpbnNlcnRSdWxlIiwic2V0T3BlbkNvbXBvbmVudCIsInNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwic3RvcmVWYWx1ZSIsIkM0Z1N0YXJib2FyZFN0eWxlIiwic3R5bGVUcmlnZ2VyTGFiZWwiLCJzdHlsZUlkIiwibG9jU3R5bGVBcnIiLCJzdHlsb3IiLCJGZWF0dXJlIiwiZ2VvbWV0cnkiLCJQb2ludCIsInN0eWwwciIsInN0eWxlVHlwZSIsInN0eWxldHlwZSIsInN0eWxlSWNvbiIsImljb25TcmMiLCJpY29uX3NyYyIsInN2Z1NyYyIsImhlaWdodCIsIndpZHRoIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwiY2xpY2tFdmVudCIsInRvb2x0aXAiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJTVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVIiLCJTVEFSQk9BUkRfTE9DU1RZTEVfWCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9DUk9TUyIsIlNUQVJCT0FSRF9MT0NTVFlMRV9UUklBTkdMRSIsImNvbG9yIiwiYm9yZGVyY29sb3IiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0Q29sb3IiLCJmaWxsY29sb3IiLCJzdHJva2Vjb2xvciIsImdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eSIsInN0eWxlRWxlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUNBOztJQUFZQSxROztBQUNaOztBQUNBOztBQUNBOzs7Ozs7Ozs7OytlQWpCQTs7Ozs7Ozs7Ozs7OztJQW1CYUMsd0IsV0FBQUEsd0I7OztBQUVYLG9DQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0pBQ1hBLEtBRFc7O0FBRWpCLFFBQU1DLGFBQU47O0FBRUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQSxVQUFLRSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUYsSUFBZixPQUFqQjtBQUNBLFVBQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCSCxJQUF6QixPQUEzQjtBQUNBLFVBQUtJLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkosSUFBcEIsT0FBdEI7QUFSaUI7QUFTbEI7Ozs7Z0NBRzhCO0FBQUEsVUFBckJLLFlBQXFCLHVFQUFOLElBQU07O0FBQzdCLFVBQU1QLFFBQVEsSUFBZDtBQUNBLFVBQUlRLFdBQVcsS0FBZjtBQUNBLFVBQUlDLGNBQWMsS0FBbEI7QUFDQSxVQUFJRixZQUFKLEVBQWtCO0FBQ2hCLFlBQUlHLE1BQU1DLE9BQU4sQ0FBY0osWUFBZCxDQUFKLEVBQWlDO0FBQy9CQyxxQkFBV0QsWUFBWDtBQUNELFNBRkQsTUFFTyxJQUFJQSx3QkFBd0JLLGFBQTVCLEVBQW9DO0FBQ3pDSCx3QkFBY0YsWUFBZDtBQUNEO0FBQ0YsT0FORCxNQU1PO0FBQ0xDLG1CQUFXQSxZQUFZUixNQUFNRCxLQUFOLENBQVljLEtBQVosQ0FBa0JMLFFBQXpDO0FBQ0FDLHNCQUFjQSxlQUFlVCxNQUFNRCxLQUFOLENBQVljLEtBQVosQ0FBa0JKLFdBQS9DO0FBQ0Q7QUFDREQsaUJBQVdBLFlBQVlSLE1BQU1ELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkwsUUFBekM7QUFDQSxVQUFJTSxrQkFBa0JkLE1BQU1ELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJDLEtBQTFCLENBQWdDRixlQUF0RDtBQUNBLFVBQUlOLFlBQVlBLFNBQVNTLE1BQVQsR0FBa0IsQ0FBbEMsRUFBcUM7QUFDbkNILHdCQUFnQkksSUFBaEIsQ0FBcUJsQixNQUFNRCxLQUFOLENBQVljLEtBQVosQ0FBa0JNLE1BQXZDLEVBQStDWCxRQUEvQyxFQUF3RFIsTUFBTUQsS0FBTixDQUFZcUIsRUFBcEU7QUFDRCxPQUZELE1BRU8sSUFBSVgsV0FBSixFQUFnQjtBQUNyQkssd0JBQWdCSSxJQUFoQixDQUFxQmxCLE1BQU1ELEtBQU4sQ0FBWWMsS0FBWixDQUFrQk0sTUFBdkMsRUFBK0NWLFdBQS9DLEVBQTREVCxNQUFNRCxLQUFOLENBQVlxQixFQUF4RTtBQUNELE9BRk0sTUFHRjtBQUNITix3QkFBZ0JJLElBQWhCLENBQXFCLEtBQXJCLEVBQTRCLEtBQTVCLEVBQW1DbEIsTUFBTUQsS0FBTixDQUFZcUIsRUFBL0M7QUFDRDtBQUNEcEIsWUFBTUQsS0FBTixDQUFZZ0IsYUFBWixDQUEwQk0sbUJBQTFCLENBQThDckIsTUFBTUQsS0FBTixDQUFZcUIsRUFBMUQsRUFBOEQsSUFBOUQ7QUFDRDs7O2dDQUU4QjtBQUFBLFVBQXJCRSxZQUFxQix1RUFBTixJQUFNOztBQUM3QixVQUFNdEIsUUFBUSxJQUFkO0FBQ0EsVUFBSVEsV0FBVyxLQUFmO0FBQ0EsVUFBSUMsY0FBYyxLQUFsQjtBQUNBLFVBQUlhLFlBQUosRUFBa0I7QUFDaEIsWUFBSVosTUFBTUMsT0FBTixDQUFjVyxZQUFkLENBQUosRUFBaUM7QUFDL0JkLHFCQUFXYyxZQUFYO0FBQ0QsU0FGRCxNQUVPLElBQUlBLHdCQUF3QlYsYUFBNUIsRUFBb0M7QUFDekNILHdCQUFjYSxZQUFkO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTGQsbUJBQVdBLFlBQVlSLE1BQU1ELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkwsUUFBekM7QUFDQUMsc0JBQWNBLGVBQWVULE1BQU1ELEtBQU4sQ0FBWWMsS0FBWixDQUFrQkosV0FBL0M7QUFDRDtBQUNELFVBQUlLLGtCQUFrQmQsTUFBTUQsS0FBTixDQUFZZ0IsYUFBWixDQUEwQkMsS0FBMUIsQ0FBZ0NGLGVBQXREO0FBQ0EsVUFBSU4sWUFBWUEsU0FBU1MsTUFBVCxHQUFrQixDQUFsQyxFQUFxQztBQUNuQ0gsd0JBQWdCUyxJQUFoQixDQUFxQnZCLE1BQU1ELEtBQU4sQ0FBWWMsS0FBWixDQUFrQk0sTUFBdkMsRUFBK0NYLFFBQS9DLEVBQXlEUixNQUFNRCxLQUFOLENBQVlxQixFQUFyRTtBQUNELE9BRkQsTUFFTyxJQUFJWCxXQUFKLEVBQWlCO0FBQ3RCSyx3QkFBZ0JTLElBQWhCLENBQXFCdkIsTUFBTUQsS0FBTixDQUFZYyxLQUFaLENBQWtCTSxNQUF2QyxFQUErQ1YsV0FBL0MsRUFBNERULE1BQU1ELEtBQU4sQ0FBWXFCLEVBQXhFO0FBQ0QsT0FGTSxNQUdGO0FBQ0hOLHdCQUFnQlMsSUFBaEIsQ0FBcUIsS0FBckIsRUFBNEIsS0FBNUIsRUFBbUN2QixNQUFNRCxLQUFOLENBQVlxQixFQUEvQztBQUNEO0FBQ0RwQixZQUFNRCxLQUFOLENBQVlnQixhQUFaLENBQTBCTSxtQkFBMUIsQ0FBOENyQixNQUFNRCxLQUFOLENBQVlxQixFQUExRCxFQUE4RCxLQUE5RDtBQUNEOzs7cUNBQ2lCSSxLLEVBQU9DLFUsRUFBWUMsTSxFQUFRO0FBQzNDLFVBQUlBLE1BQUosRUFBWTtBQUNWLGFBQUtDLFNBQUwsQ0FBZUgsTUFBTWhCLFFBQU4sSUFBa0JnQixNQUFNZixXQUF2QztBQUNELE9BRkQsTUFHSztBQUNILGFBQUttQixTQUFMLENBQWVKLE1BQU1oQixRQUFOLElBQWtCZ0IsTUFBTWYsV0FBdkM7QUFDRDtBQUNELFVBQUllLE1BQU1LLE1BQU4sSUFBZ0JMLE1BQU1LLE1BQU4sQ0FBYVosTUFBYixHQUFzQixDQUExQyxFQUE2QztBQUMzQyxhQUFLLElBQUlhLE9BQVQsSUFBb0JOLE1BQU1LLE1BQTFCLEVBQWtDO0FBQ2hDLGNBQUlMLE1BQU1LLE1BQU4sQ0FBYUUsY0FBYixDQUE0QkQsT0FBNUIsQ0FBSixFQUEwQztBQUN4QyxnQkFBSUUsb0JBQW9CUCxXQUFXUSxXQUFYLENBQXVCSCxPQUF2QixFQUFnQ0osTUFBeEQ7QUFDQSxnQkFBSU0sc0JBQXNCTixNQUExQixFQUFrQztBQUNoQ0QseUJBQVdRLFdBQVgsQ0FBdUJILE9BQXZCLElBQWtDLEtBQUtJLGdCQUFMLENBQXNCVixNQUFNSyxNQUFOLENBQWFDLE9BQWIsQ0FBdEIsRUFBNkNMLFdBQVdRLFdBQVgsQ0FBdUJILE9BQXZCLENBQTdDLEVBQThFSixNQUE5RSxDQUFsQztBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0QsV0FBSzNCLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJNLG1CQUF6QixDQUE2Q0ksV0FBV0wsRUFBeEQsRUFBNERNLE1BQTVEO0FBQ0FELGlCQUFXQyxNQUFYLEdBQW9CQSxNQUFwQjtBQUNBLGFBQU9ELFVBQVA7QUFDRDs7O21DQUNlVSxHLEVBQUtDLGEsRUFBZTtBQUNsQyxVQUFJQyxXQUFXLEtBQUt0QyxLQUFMLENBQVd1QyxXQUExQjtBQUNBRCxlQUFTSixXQUFULENBQXFCRSxHQUFyQixJQUE0QkMsYUFBNUI7QUFDQSxVQUFJQyxTQUFTWCxNQUFULElBQW1CVSxjQUFjVixNQUFyQyxFQUE2QztBQUMzQztBQUNBLFlBQUlVLGNBQWNWLE1BQWxCLEVBQTBCO0FBQ3hCLGVBQUtDLFNBQUw7QUFDRCxTQUZELE1BR0s7QUFDSCxlQUFLQyxTQUFMO0FBQ0Q7QUFDRjtBQUNELFdBQUs3QixLQUFMLENBQVdPLGNBQVgsQ0FBMEIsS0FBS1AsS0FBTCxDQUFXd0MsS0FBckMsRUFBNENGLFFBQTVDO0FBQ0Q7OzsrQkFDVUcsQyxFQUFHO0FBQ1pBLFFBQUVDLGVBQUY7QUFDQUQsUUFBRUUsV0FBRixDQUFjQyx3QkFBZDtBQUNBLFVBQUksS0FBSzVDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJNLE1BQTNCLEVBQW1DO0FBQ2pDLGVBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBSSxDQUFDLEtBQUs3QyxLQUFMLENBQVd1QyxXQUFYLENBQXVCWixNQUE1QixFQUFvQztBQUNsQyxhQUFLQyxTQUFMO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0MsU0FBTDtBQUNEO0FBQ0QsVUFBSVMsV0FBVyxLQUFLdEMsS0FBTCxDQUFXdUMsV0FBMUI7QUFDQSxVQUFJLEtBQUt2QyxLQUFMLENBQVdjLEtBQVgsQ0FBaUJnQixNQUFqQixJQUEyQixLQUFLOUIsS0FBTCxDQUFXYyxLQUFYLENBQWlCZ0IsTUFBakIsQ0FBd0JaLE1BQXhCLEdBQWlDLENBQWhFLEVBQW1FO0FBQ2pFLFlBQUk0QixjQUFjLEtBQUs5QyxLQUFMLENBQVdjLEtBQVgsQ0FBaUJnQixNQUFuQztBQUNBLGFBQUssSUFBSUMsT0FBVCxJQUFvQmUsV0FBcEIsRUFBaUM7QUFDL0IsY0FBSUEsWUFBWWQsY0FBWixDQUEyQkQsT0FBM0IsQ0FBSixFQUF5QztBQUN2QyxnQkFBSUUsb0JBQW9CSyxTQUFTSixXQUFULENBQXFCSCxPQUFyQixFQUE4QkosTUFBdEQ7QUFDQSxnQkFBSU0sc0JBQXNCSyxTQUFTWCxNQUFuQyxFQUEyQztBQUN6Q1csdUJBQVNKLFdBQVQsQ0FBcUJILE9BQXJCLElBQWdDLEtBQUtJLGdCQUFMLENBQXNCVyxZQUFZZixPQUFaLENBQXRCLEVBQTRDTyxTQUFTSixXQUFULENBQXFCSCxPQUFyQixDQUE1QyxFQUEyRU8sU0FBU1gsTUFBcEYsQ0FBaEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNEO0FBQ0Q7OztnQ0FDV2MsQyxFQUFHO0FBQUE7O0FBQ2IsVUFBSSxDQUFDLEtBQUt6QyxLQUFMLENBQVd1QyxXQUFYLENBQXVCWixNQUE1QixFQUFvQztBQUNsQyxhQUFLekIsVUFBTCxDQUFnQnVDLENBQWhCO0FBQ0Q7QUFDRCxXQUFLekMsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QkMsS0FBekIsQ0FBK0JGLGVBQS9CLENBQStDZ0MsTUFBL0MsQ0FBc0QsS0FBSy9DLEtBQUwsQ0FBV2MsS0FBakU7QUFDQSxXQUFLZCxLQUFMLENBQVdnQixhQUFYLENBQXlCQyxLQUF6QixDQUErQkYsZUFBL0IsQ0FBK0NpQyxtQkFBL0MsQ0FBbUUsS0FBS2hELEtBQUwsQ0FBV2MsS0FBOUUsRUFBcUYsY0FBckYsRUFBcUcsSUFBckc7QUFDQW1DLGFBQU9DLFVBQVAsQ0FBa0IsWUFBTTtBQUN0QixlQUFLbEQsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QkMsS0FBekIsQ0FBK0JGLGVBQS9CLENBQStDaUMsbUJBQS9DLENBQW1FLE9BQUtoRCxLQUFMLENBQVdjLEtBQTlFLEVBQXFGLGNBQXJGLEVBQXFHLEtBQXJHO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDs7O3dDQUNtQk8sRSxFQUFJOEIsSyxFQUFPO0FBQzdCLFdBQUtuRCxLQUFMLENBQVd1QyxXQUFYLENBQXVCTCxXQUF2QixDQUFtQ2IsRUFBbkMsSUFBeUM4QixLQUF6QztBQUNBLFdBQUtuRCxLQUFMLENBQVdNLG1CQUFYLENBQStCLEtBQUtOLEtBQUwsQ0FBV3dDLEtBQTFDLEVBQWlELEtBQUt4QyxLQUFMLENBQVd1QyxXQUE1RDtBQUNEOzs7OEJBQ1NFLEMsRUFBRztBQUNYQSxRQUFFQyxlQUFGO0FBQ0FELFFBQUVFLFdBQUYsQ0FBY0Msd0JBQWQ7QUFDQSxXQUFLNUMsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QmEsU0FBdkIsR0FBbUMsQ0FBQyxLQUFLcEQsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QmEsU0FBM0Q7QUFDQSxXQUFLcEQsS0FBTCxDQUFXTSxtQkFBWCxDQUErQixLQUFLTixLQUFMLENBQVd3QyxLQUExQyxFQUFpRCxLQUFLeEMsS0FBTCxDQUFXdUMsV0FBNUQ7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQ1AsVUFBTXRDLFFBQVEsSUFBZDtBQUNBLFVBQUlvRCxlQUFlLElBQW5CO0FBQ0EsVUFBSUMsV0FBVyxJQUFmOztBQUVBLFVBQUksS0FBS3RELEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NDLGFBQXhDLEtBQTBELEdBQTFELElBQWlFLEtBQUt6RCxLQUFMLENBQVdjLEtBQVgsQ0FBaUI0QyxRQUFsRixJQUE4RixLQUFLMUQsS0FBTCxDQUFXMkQsU0FBekcsSUFBc0gsS0FBSzNELEtBQUwsQ0FBVzJELFNBQVgsQ0FBcUJDLFlBQTNJLElBQTJKLEtBQUs1RCxLQUFMLENBQVcyRCxTQUFYLENBQXFCQyxZQUFyQixDQUFrQyxLQUFLNUQsS0FBTCxDQUFXYyxLQUFYLENBQWlCNEMsUUFBbkQsQ0FBL0osRUFBNk47QUFDM04sWUFBSSxLQUFLMUQsS0FBTCxDQUFXYyxLQUFYLENBQWlCK0MsU0FBckIsRUFBZ0M7QUFDOUJSLHlCQUFlLDhCQUFDLG9DQUFELElBQW1CLFdBQVcsS0FBS3JELEtBQUwsQ0FBVzJELFNBQXpDLEVBQW9ELFNBQVMsS0FBSzNELEtBQUwsQ0FBV2MsS0FBWCxDQUFpQjRDLFFBQTlFLEVBQXdGLFNBQVMsS0FBSzFELEtBQUwsQ0FBVzhELElBQVgsQ0FBZ0JDLHNCQUFqSCxFQUF5SSxZQUFZLEtBQUszRCxXQUExSixHQUFmO0FBQ0QsU0FGRCxNQUdLO0FBQ0hpRCx5QkFBZSw4QkFBQyxvQ0FBRCxJQUFtQixXQUFXLEtBQUtyRCxLQUFMLENBQVcyRCxTQUF6QyxFQUFvRCxTQUFTLEtBQUszRCxLQUFMLENBQVdjLEtBQVgsQ0FBaUI0QyxRQUE5RSxHQUFmO0FBQ0Q7QUFDRixPQVBELE1BUUssSUFBSSxLQUFLMUQsS0FBTCxDQUFXYyxLQUFYLENBQWlCK0MsU0FBakIsSUFBOEIsQ0FBQyxLQUFLN0QsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QnVDLElBQXpCLENBQThCQyxTQUE5QixDQUF3Q1Esa0JBQTNFLEVBQStGO0FBQ2xHVixtQkFBVyx3Q0FBTSxXQUFXLG9CQUFqQixFQUF1QyxPQUFPLEtBQUt0RCxLQUFMLENBQVc4RCxJQUFYLENBQWdCQyxzQkFBOUQsRUFBc0YsV0FBVyxtQkFBQ0UsS0FBRDtBQUFBLG1CQUFXLE9BQUs3RCxXQUFMLENBQWlCNkQsS0FBakIsQ0FBWDtBQUFBLFdBQWpHLEdBQVg7QUFDRDtBQUNELFVBQUlDLFdBQVcsS0FBS2xFLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJaLE1BQXZCLEdBQWdDd0MsOEJBQWFDLE1BQTdDLEdBQXNERCw4QkFBYUUsUUFBbEY7QUFDQSxVQUFJLEtBQUtyRSxLQUFMLENBQVd1QyxXQUFYLENBQXVCTSxNQUEzQixFQUFtQztBQUNqQ3FCLG9CQUFZLE1BQU1DLDhCQUFhRyxRQUEvQjtBQUNEO0FBQ0QsVUFBSUMsWUFBWSxLQUFLdkUsS0FBTCxDQUFXdUMsV0FBWCxDQUF1QmEsU0FBdkIsR0FBbUNlLDhCQUFhSyxLQUFoRCxHQUF3REwsOEJBQWFNLElBQXJGO0FBQ0EsVUFBSUMsWUFBWSxLQUFLMUUsS0FBTCxDQUFXYyxLQUFYLENBQWlCZ0IsTUFBakM7QUFDQSxVQUFJNkMsaUJBQUo7QUFDQSxVQUFJQyxtQkFBSjtBQUNBLFVBQUksS0FBSzVFLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NRLGtCQUF4QyxJQUE4RCxLQUFLaEUsS0FBTCxDQUFXYyxLQUFYLENBQWlCK0MsU0FBbkYsRUFBOEY7QUFDNUZjLG1CQUFXO0FBQUMseUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDVDtBQUFBO0FBQUEsY0FBRyxXQUFXLG9CQUFkLEVBQW9DLFdBQVcsbUJBQUNWLEtBQUQ7QUFBQSx1QkFBVyxPQUFLN0QsV0FBTCxDQUFpQjZELEtBQWpCLENBQVg7QUFBQSxlQUEvQztBQUFvRixpQkFBS2pFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQitEO0FBQXJHO0FBRFMsU0FBWDs7QUFJQUQscUJBQWEscUNBQUcsV0FBV1YsV0FBVyw4QkFBekIsRUFBeUQsV0FBVyxtQkFBQ0QsS0FBRDtBQUFBLG1CQUFXLE9BQUsvRCxVQUFMLENBQWdCK0QsS0FBaEIsQ0FBWDtBQUFBLFdBQXBFLEdBQWI7QUFDQyxPQU5ILE1BT0s7QUFDSFUsbUJBQVc7QUFBQTtBQUFBLFlBQUcsV0FBV1QsUUFBZCxFQUF3QixXQUFXLG1CQUFDRCxLQUFEO0FBQUEscUJBQVcsT0FBSy9ELFVBQUwsQ0FBZ0IrRCxLQUFoQixDQUFYO0FBQUEsYUFBbkM7QUFBdUUsZUFBS2pFLEtBQUwsQ0FBV2MsS0FBWCxDQUFpQitEO0FBQXhGLFNBQVg7QUFDRDs7QUFFRCxVQUFJSCxhQUFhQSxVQUFVeEQsTUFBM0IsRUFBbUM7QUFDakMsWUFBSTRELE9BQU8sd0NBQU0sV0FBV1gsOEJBQWFZLElBQTlCLEVBQW9DLFdBQVcsbUJBQUNkLEtBQUQ7QUFBQSxtQkFBVyxPQUFLNUQsU0FBTCxDQUFlNEQsS0FBZixDQUFYO0FBQUEsV0FBL0MsR0FBWDs7QUFFQSxlQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVdNLFlBQVksNkJBQTNCO0FBQ0dPLGNBREg7QUFFR3pCLHNCQUZIO0FBR0dDLGtCQUhIO0FBSUdxQixrQkFKSDtBQUtHQyxvQkFMSDtBQU1FO0FBQUE7QUFBQTtBQUNHRixzQkFBVU0sR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTzVELEVBQVAsRUFBYztBQUMzQixrQkFBSSxPQUFLckIsS0FBTCxDQUFXa0YsWUFBWCxJQUEyQixPQUFLbEYsS0FBTCxDQUFXbUYsVUFBWCxDQUFzQixPQUFLbkYsS0FBTCxDQUFXb0YsU0FBakMsRUFBNENILElBQTVDLEVBQWtELE9BQUtqRixLQUFMLENBQVd1QyxXQUFYLENBQXVCTCxXQUF2QixDQUFtQ2IsRUFBbkMsQ0FBbEQsQ0FBL0IsRUFBMEg7QUFDeEgsdUJBQU8sOEJBQUMsd0JBQUQsSUFBMEIsS0FBS0EsRUFBL0IsRUFBbUMsT0FBT0EsRUFBMUMsRUFBOEMsSUFBSTRELEtBQUs1RCxFQUF2RCxFQUEyRCxlQUFlLE9BQUtyQixLQUFMLENBQVdnQixhQUFyRjtBQUNtQixrQ0FBZ0IsT0FBS1QsY0FEeEM7QUFFbUIsNkJBQVcsT0FBS1AsS0FBTCxDQUFXb0YsU0FGekM7QUFHbUIsOEJBQVksT0FBS3BGLEtBQUwsQ0FBV21GLFVBSDFDO0FBSW1CLHVDQUFxQixPQUFLN0UsbUJBSjdDO0FBS21CLHdCQUFNLE9BQUtOLEtBQUwsQ0FBVzhELElBTHBDO0FBTW1CLGdDQUFjLE9BQUs5RCxLQUFMLENBQVdrRixZQUFYLElBQTJCLE9BQUtsRixLQUFMLENBQVdtRixVQUFYLENBQXNCLE9BQUtuRixLQUFMLENBQVdvRixTQUFqQyxFQUE0Q0gsSUFBNUMsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsQ0FONUQ7QUFPbUIsK0JBQWEsT0FBS2pGLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJMLFdBQXZCLENBQW1DYixFQUFuQyxDQVBoQztBQVFtQix5QkFBTzRELElBUjFCO0FBU21CLDZCQUFXLE9BQUtqRixLQUFMLENBQVcyRCxTQVR6QztBQVVtQiw0QkFBVSxPQUFLM0QsS0FBTCxDQUFXcUYsUUFWeEMsR0FBUDtBQVdEO0FBRUYsYUFmQTtBQURIO0FBTkYsU0FERjtBQTJCRCxPQTlCRCxNQStCSztBQUNILFlBQUkvQixZQUFXLElBQWY7QUFDQSxZQUFJcEQsYUFBYSxLQUFLQSxVQUF0QjtBQUNBLFlBQUksS0FBS0YsS0FBTCxDQUFXYyxLQUFYLENBQWlCaUMsTUFBckIsRUFBNkI7QUFDM0I3Qyx1QkFBYSxLQUFLRSxXQUFsQjtBQUNBOEQscUJBQVcsb0JBQVg7QUFDRDtBQUNELGVBQ0k7QUFBQTtBQUFBLFlBQUksV0FBV0ssWUFBWSw2QkFBM0I7QUFDR2xCLHNCQURIO0FBRUdDLG1CQUZIO0FBR0dxQixrQkFISDtBQUlHQztBQUpILFNBREo7QUFRRDtBQUNGOzs7O0VBck8yQ1UsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ045Qzs7OztBQUNBOztBQUNBOzs7Ozs7OzsrZUFmQTs7Ozs7Ozs7Ozs7OztJQWlCYUMsc0IsV0FBQUEsc0I7OztBQUVYLGtDQUFZdkYsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdKQUNYQSxLQURXOztBQUFBLFVBY25Cd0YsZ0JBZG1CLEdBY0EsWUFBTTtBQUN2QixZQUFLQyxpQkFBTCxHQUF5QixDQUF6QjtBQUNBLFlBQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsV0FBSyxJQUFJQyxDQUFULElBQWMsTUFBSzNGLEtBQUwsQ0FBV3VDLFdBQXpCLEVBQXNDO0FBQ3BDLFlBQUksTUFBS3ZDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJQLGNBQXZCLENBQXNDMkQsQ0FBdEMsQ0FBSixFQUE4QztBQUM1QyxjQUFJLE1BQUszRixLQUFMLENBQVd1QyxXQUFYLENBQXVCb0QsQ0FBdkIsRUFBMEJoRSxNQUE5QixFQUFzQztBQUNwQyxrQkFBSytELGdCQUFMO0FBQ0QsV0FGRCxNQUdLO0FBQ0gsa0JBQUtELGlCQUFMO0FBQ0Q7QUFDRCxjQUFJLE1BQUt6RixLQUFMLENBQVd1QyxXQUFYLENBQXVCb0QsQ0FBdkIsRUFBMEJ6RCxXQUE5QixFQUEyQztBQUN6QyxpQkFBSyxJQUFJMEQsQ0FBVCxJQUFjLE1BQUs1RixLQUFMLENBQVd1QyxXQUFYLENBQXVCb0QsQ0FBdkIsRUFBMEJ6RCxXQUF4QyxFQUFxRDtBQUNuRCxrQkFBSSxNQUFLbEMsS0FBTCxDQUFXdUMsV0FBWCxDQUF1Qm9ELENBQXZCLEVBQTBCekQsV0FBMUIsQ0FBc0NGLGNBQXRDLENBQXFENEQsQ0FBckQsQ0FBSixFQUE2RDtBQUMzRCxzQkFBS0Msb0JBQUwsQ0FBMEIsTUFBSzdGLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJvRCxDQUF2QixFQUEwQnpELFdBQTFCLENBQXNDMEQsQ0FBdEMsQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0QsYUFBTyxNQUFLRixnQkFBTCxHQUF3QixNQUFLRCxpQkFBcEM7QUFDRCxLQW5Da0I7O0FBQUEsVUFvRG5CSyxnQkFwRG1CLEdBb0RBLFVBQUMxRCxHQUFELEVBQU1FLFFBQU4sRUFBbUI7QUFDcEMsVUFBSXlELFlBQVksTUFBSy9GLEtBQUwsQ0FBV3VDLFdBQTNCO0FBQ0F3RCxnQkFBVTNELEdBQVYsSUFBaUJFLFFBQWpCO0FBQ0EsWUFBS3RDLEtBQUwsQ0FBV08sY0FBWCxDQUEwQndGLFNBQTFCO0FBQ0QsS0F4RGtCOztBQUVqQixRQUFNOUYsYUFBTjs7QUFFQSxVQUFLK0YsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CN0YsSUFBcEIsT0FBdEI7QUFDQSxVQUFLOEYsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCOUYsSUFBckIsT0FBdkI7QUFDQSxVQUFLRyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkgsSUFBekIsT0FBM0I7QUFDQSxVQUFLZ0QsS0FBTCxHQUFhO0FBQ1grQyxtQkFBYSxLQURGO0FBRVhDLG1CQUFhO0FBRkYsS0FBYjtBQUlBO0FBWGlCO0FBWWxCOzs7O3lDQXdCcUIxRSxLLEVBQU87QUFDM0IsVUFBSUEsTUFBTUUsTUFBVixFQUFrQjtBQUNoQixhQUFLK0QsZ0JBQUw7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLRCxpQkFBTDtBQUNEO0FBQ0QsVUFBSWhFLE1BQU1TLFdBQVYsRUFBdUI7QUFDckIsYUFBSyxJQUFJeUQsQ0FBVCxJQUFjbEUsTUFBTVMsV0FBcEIsRUFBaUM7QUFDL0IsY0FBSVQsTUFBTVMsV0FBTixDQUFrQkYsY0FBbEIsQ0FBaUMyRCxDQUFqQyxDQUFKLEVBQXlDO0FBQ3ZDLGlCQUFLRSxvQkFBTCxDQUEwQnBFLE1BQU1TLFdBQU4sQ0FBa0J5RCxDQUFsQixDQUExQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7cUNBUWdCO0FBQ2YsVUFBSVMsY0FBY0MsT0FBTyx1Q0FBUCxFQUFnREMsR0FBaEQsTUFBeUQsRUFBM0UsQ0FEZSxDQUNnRTtBQUMvRSxXQUFLQyxRQUFMLENBQWMsRUFBQ0osYUFBYUMsV0FBZCxFQUFkO0FBQ0Q7OzsrQkFFVWhCLFMsRUFBV3RFLEssRUFBcUM7QUFBQSxVQUE5QnFDLEtBQThCLHVFQUF0QixFQUFzQjtBQUFBLFVBQWxCcUQsU0FBa0IsdUVBQU4sSUFBTTs7QUFDekQsVUFBSXJGLE9BQU8sS0FBWDtBQUNBLFVBQUlMLFNBQVNBLE1BQU0rRCxJQUFmLEtBQXdCL0QsTUFBTStELElBQU4sQ0FBVzRCLFdBQVgsR0FBeUJDLE9BQXpCLENBQWlDdEIsVUFBVXFCLFdBQVYsRUFBakMsTUFBOEQsQ0FBQyxDQUEvRCxJQUNyQjNGLE1BQU0rRCxJQUFOLENBQVc4QixXQUFYLEdBQXlCRCxPQUF6QixDQUFpQ3RCLFVBQVV1QixXQUFWLEVBQWpDLE1BQThELENBQUMsQ0FEbEUsQ0FBSixFQUMwRTtBQUN4RXhGLGVBQU8sSUFBUDtBQUNBLFlBQUlpRSxhQUFhakMsS0FBakIsRUFBd0I7QUFDdEJBLGdCQUFNQyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0Q7QUFDRixPQU5ELE1BTU8sSUFBR3RDLE1BQU04RixJQUFOLElBQWM5RixNQUFNOEYsSUFBTixDQUFXQyxJQUFYLENBQWdCLFVBQUNDLE9BQUQsRUFBYTtBQUFDLGVBQU9BLFFBQVFMLFdBQVIsR0FBc0JDLE9BQXRCLENBQThCdEIsVUFBVXFCLFdBQVYsRUFBOUIsTUFBMkQsQ0FBQyxDQUFuRTtBQUFxRSxPQUFuRyxDQUFqQixFQUFzSDtBQUMzSHRGLGVBQU8sSUFBUDtBQUNBLFlBQUlpRSxhQUFhakMsS0FBakIsRUFBd0I7QUFDdEJBLGdCQUFNQyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0Q7QUFDRixPQUxNLE1BS0EsSUFBSW9ELFNBQUosRUFBZTtBQUNwQixhQUFLLElBQUl6RSxPQUFULElBQW9CakIsTUFBTWdCLE1BQTFCLEVBQWtDO0FBQ2hDLGNBQUloQixNQUFNZ0IsTUFBTixDQUFhRSxjQUFiLENBQTRCRCxPQUE1QixLQUF3QyxDQUFDWixJQUE3QyxFQUFtRDtBQUNqREEsbUJBQU8sS0FBS2dFLFVBQUwsQ0FBZ0JDLFNBQWhCLEVBQTJCdEUsTUFBTWdCLE1BQU4sQ0FBYUMsT0FBYixDQUEzQixFQUFrRG9CLE1BQU1qQixXQUFOLENBQWtCSCxPQUFsQixDQUFsRCxDQUFQO0FBQ0EsZ0JBQUlxRCxhQUFhakUsSUFBYixJQUFxQmdDLEtBQXpCLEVBQWdDO0FBQzlCQSxvQkFBTUMsU0FBTixHQUFrQixLQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0QsYUFBT2pDLElBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNbEIsUUFBUSxJQUFkO0FBQ0EsVUFBSThHLFNBQVMsS0FBSy9HLEtBQUwsQ0FBV3VDLFdBQXhCO0FBQ0EsVUFBSXlFLFNBQVMsS0FBS2hILEtBQUwsQ0FBV2lILFNBQXhCO0FBQ0EsZUFBU0MsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NELE1BQWhDLEVBQXdDO0FBQ3RDLGFBQUssSUFBSXBCLElBQUksQ0FBYixFQUFnQkEsSUFBSW9CLE9BQU83RixNQUEzQixFQUFtQ3lFLEdBQW5DLEVBQXdDO0FBQ3RDLGNBQUksQ0FBQ29CLE9BQU9wQixDQUFQLEVBQVVoRSxNQUFmLEVBQXVCO0FBQ3JCMUIsa0JBQU1ELEtBQU4sQ0FBWWdCLGFBQVosQ0FBMEJDLEtBQTFCLENBQWdDRixlQUFoQyxDQUFnREksSUFBaEQsQ0FBcUQ2RixPQUFPckIsQ0FBUCxFQUFVdkUsTUFBL0QsRUFBdUU0RixPQUFPckIsQ0FBUCxFQUFVbEYsUUFBVixJQUFzQnVHLE9BQU9yQixDQUFQLEVBQVVqRixXQUF2RztBQUNEO0FBQ0RxRyxpQkFBT3BCLENBQVAsRUFBVWhFLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxjQUFJb0YsT0FBT3BCLENBQVAsRUFBVXpELFdBQVYsSUFBeUI2RSxPQUFPcEIsQ0FBUCxFQUFVekQsV0FBVixDQUFzQmhCLE1BQXRCLEdBQStCLENBQTVELEVBQStEO0FBQzdENkYsbUJBQU9wQixDQUFQLEVBQVV6RCxXQUFWLEdBQXdCZ0YsZUFBZUYsT0FBT3JCLENBQVAsRUFBVTdELE1BQXpCLEVBQWlDaUYsT0FBT3BCLENBQVAsRUFBVXpELFdBQTNDLENBQXhCO0FBQ0Q7QUFDRjtBQUNEakMsY0FBTWtILGFBQU4sR0FBc0IsSUFBdEI7QUFDQSxlQUFPSixNQUFQO0FBQ0Q7QUFDRCxlQUFTSyxnQkFBVCxDQUEwQkosTUFBMUIsRUFBa0NELE1BQWxDLEVBQTBDO0FBQ3hDLGFBQUssSUFBSXBCLElBQUksQ0FBYixFQUFnQkEsSUFBSW9CLE9BQU83RixNQUEzQixFQUFtQ3lFLEdBQW5DLEVBQXdDO0FBQ3RDLGNBQUlvQixPQUFPcEIsQ0FBUCxFQUFVaEUsTUFBZCxFQUFzQjtBQUNwQjFCLGtCQUFNRCxLQUFOLENBQVlnQixhQUFaLENBQTBCQyxLQUExQixDQUFnQ0YsZUFBaEMsQ0FBZ0RTLElBQWhELENBQXFEd0YsT0FBT3JCLENBQVAsRUFBVXZFLE1BQS9ELEVBQXVFNEYsT0FBT3JCLENBQVAsRUFBVWxGLFFBQVYsSUFBc0J1RyxPQUFPckIsQ0FBUCxFQUFVakYsV0FBdkc7QUFDRDtBQUNEcUcsaUJBQU9wQixDQUFQLEVBQVVoRSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0EsY0FBSW9GLE9BQU9wQixDQUFQLEVBQVV6RCxXQUFWLElBQXlCNkUsT0FBT3BCLENBQVAsRUFBVXpELFdBQVYsQ0FBc0JoQixNQUF0QixHQUErQixDQUE1RCxFQUErRDtBQUM3RDZGLG1CQUFPcEIsQ0FBUCxFQUFVekQsV0FBVixHQUF3QmtGLGlCQUFpQkosT0FBT3JCLENBQVAsRUFBVTdELE1BQTNCLEVBQW1DaUYsT0FBT3BCLENBQVAsRUFBVXpELFdBQTdDLENBQXhCO0FBQ0Q7QUFDRjtBQUNEakMsY0FBTWtILGFBQU4sR0FBc0IsS0FBdEI7QUFDQSxlQUFPSixNQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDOUcsTUFBTWtILGFBQVgsRUFBMEI7QUFDeEJKLGlCQUFTRyxlQUFlRixNQUFmLEVBQXVCRCxNQUF2QixDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGlCQUFTSyxpQkFBaUJKLE1BQWpCLEVBQXlCRCxNQUF6QixDQUFUO0FBQ0Q7O0FBRUQsV0FBSy9HLEtBQUwsQ0FBV08sY0FBWCxDQUEwQndHLE1BQTFCO0FBQ0Q7Ozt3Q0FDbUIxRixFLEVBQUk4QixLLEVBQU8sQ0FFOUI7Ozs2QkFDUTtBQUFBOztBQUNQLFVBQUksS0FBS25ELEtBQUwsQ0FBV3VDLFdBQVgsSUFBMEIsS0FBS3ZDLEtBQUwsQ0FBV3VDLFdBQVgsQ0FBdUJyQixNQUF2QixHQUFnQyxDQUExRCxJQUErRCxFQUFFLEtBQUt1RSxpQkFBTCxJQUEwQixLQUFLQyxnQkFBakMsQ0FBbkUsRUFBdUg7QUFDckgsYUFBS3lCLGFBQUwsR0FBcUIsS0FBSzNCLGdCQUFMLEVBQXJCO0FBQ0Q7O0FBRUQsVUFBSXdCLGVBQUo7QUFBQSxVQUFZRCxlQUFaO0FBQUEsVUFBb0JNLGVBQXBCO0FBQ0FMLGVBQVMsS0FBS2hILEtBQUwsQ0FBV2lILFNBQXBCO0FBQ0FGLGVBQVMsS0FBSy9HLEtBQUwsQ0FBV3VDLFdBQXBCO0FBQ0EsVUFBSSxDQUFDLEtBQUt2QyxLQUFMLENBQVcyQixNQUFoQixFQUF3QjtBQUN0QixlQUFPLElBQVA7QUFDRDs7QUFFRDBGLGVBQVMsRUFBVDtBQUNBLFVBQUksS0FBS3JILEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QitELGFBQTlCLENBQTRDRCxNQUFoRCxFQUF3RDtBQUN0REEsaUJBQVM7QUFBQTtBQUFBLFlBQUssV0FBVywrQ0FBaEI7QUFDQSxtREFBTyxXQUFXLHNDQUFsQixFQUEwRCxNQUFLLE1BQS9ELEVBQXNFLFNBQVMsS0FBS3JCLGNBQXBGLEVBQW9HLGFBQWEsUUFBakg7QUFEQSxTQUFUO0FBR0Q7O0FBRUQsVUFBSXVCLFdBQVcsRUFBZjtBQUNBLFVBQUksS0FBS3ZILEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QkMsU0FBOUIsQ0FBd0NnRSxNQUE1QyxFQUFvRDtBQUNsREQsbUJBQVc7QUFBQTtBQUFBLFlBQUcsV0FBVyxrQ0FBa0MsS0FBS0osYUFBTCxHQUFxQixZQUFyQixHQUFvQyxjQUF0RSxDQUFkLEVBQXFHLFdBQVcsS0FBS2xCLGVBQXJIO0FBQXVJLGVBQUtqRyxLQUFMLENBQVd1SCxRQUFYLElBQXVCLEtBQUt2SCxLQUFMLENBQVc4RCxJQUFYLENBQWdCMkQ7QUFBOUssU0FBWDtBQUNELE9BRkQsTUFFTztBQUNMRixtQkFBVztBQUFBO0FBQUEsWUFBSyxXQUFVLGlCQUFmO0FBQWtDLGVBQUt2SCxLQUFMLENBQVd1SDtBQUE3QyxTQUFYO0FBQ0Q7O0FBRUQsYUFDQTtBQUFDLHVCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0dBLGdCQURIO0FBRUdGLGNBRkg7QUFHRTtBQUFBO0FBQUEsWUFBSyxXQUFXLHVCQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVdsRCw4QkFBYXVELG1CQUE3QjtBQUNFO0FBQUE7QUFBQTtBQUNHVixxQkFBT2hDLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU81RCxFQUFQLEVBQWM7QUFDeEIsb0JBQUksT0FBSzhELFVBQUwsQ0FBZ0IsT0FBS2hDLEtBQUwsQ0FBV2dELFdBQTNCLEVBQXdDbEIsSUFBeEMsRUFBOEM4QixPQUFPMUYsRUFBUCxDQUE5QyxDQUFKLEVBQStEO0FBQzdELHlCQUFPLDhCQUFDLGtEQUFELElBQTBCLEtBQUtBLEVBQS9CLEVBQW1DLE9BQU9BLEVBQTFDLEVBQThDLElBQUk0RCxLQUFLNUQsRUFBdkQsRUFBMkQsZUFBZSxPQUFLckIsS0FBTCxDQUFXZ0IsYUFBckY7QUFDMEIsb0NBQWdCLE9BQUs4RSxnQkFEL0M7QUFFMEIsMkJBQU9iLElBRmpDO0FBRzBCLCtCQUFXLE9BQUtqRixLQUFMLENBQVcyRCxTQUhoRDtBQUkwQix5Q0FBcUIsT0FBSzNELEtBQUwsQ0FBV00sbUJBSjFEO0FBSzBCLGlDQUFheUcsT0FBTzFGLEVBQVAsQ0FMdkM7QUFNMEIsMEJBQU0sT0FBS3JCLEtBQUwsQ0FBVzhELElBTjNDO0FBTzBCLGtDQUFjLE9BQUtxQixVQUFMLENBQWdCLE9BQUtoQyxLQUFMLENBQVdnRCxXQUEzQixFQUF3Q2xCLElBQXhDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBUHhDO0FBUTBCLCtCQUFXLE9BQUs5QixLQUFMLENBQVdnRCxXQVJoRDtBQVMwQixnQ0FBWSxPQUFLaEIsVUFUM0M7QUFVMEIsOEJBQVUsT0FBS25GLEtBQUwsQ0FBV3FGLFFBVi9DLEdBQVA7QUFXRDtBQUNGLGVBZEE7QUFESDtBQURGO0FBREY7QUFIRixPQURBO0FBMkJEOzs7O0VBMUx5Q0MsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjVDOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7OytlQW5CQTs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFNcUMsV0FBV0MsZ0JBQU1DLElBQU4sQ0FBVztBQUFBLFNBQU0saUtBQU47QUFBQSxDQUFYLENBQWpCOztJQUdxQkMsYzs7O0FBRW5CLDBCQUFZOUgsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixRQUFNQyxhQUFOO0FBQ0E7QUFDQSxRQUFJNkcsVUFBVWlCLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFFBQUlSLFNBQVNPLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsOEJBQVlqSSxNQUFNZ0IsYUFBTixDQUFvQnVDLElBQWhDLENBQXJCO0FBQ0FpRSxXQUFPVSxLQUFQLEdBQWUsTUFBS0QsYUFBTCxDQUFtQkUsY0FBbEM7QUFDQXJCLFlBQVFzQixTQUFSLEdBQW9CLG1EQUFwQjtBQUNBLFFBQUlwSSxNQUFNcUksSUFBVixFQUFnQjtBQUNkdkIsY0FBUXNCLFNBQVIsSUFBcUIsVUFBckI7QUFDRCxLQUZELE1BRU87QUFDTHRCLGNBQVFzQixTQUFSLElBQXFCLFdBQXJCO0FBQ0Q7QUFDRCxRQUFJcEksTUFBTXNJLFFBQVYsRUFBb0I7QUFDbEJ4QixjQUFRc0IsU0FBUixJQUFxQixlQUFyQjtBQUNEO0FBQ0R0QixZQUFReUIsV0FBUixDQUFvQmYsTUFBcEI7QUFDQW5CLFdBQU9TLE9BQVAsRUFBZ0IwQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFTdkUsS0FBVCxFQUFnQjtBQUMxQyxVQUFJaEUsTUFBTWtELEtBQU4sQ0FBWWtGLElBQWhCLEVBQXNCO0FBQ3BCcEksY0FBTXdJLEtBQU47QUFDRCxPQUZELE1BRU87QUFDTHhJLGNBQU1vSSxJQUFOO0FBQ0Q7QUFDRixLQU5EO0FBT0EsUUFBSXJILGdCQUFnQmhCLE1BQU1nQixhQUExQjtBQUNBLFFBQUkwSCxVQUFVLElBQUlDLGdCQUFKLENBQVksRUFBQzdCLFNBQVNBLE9BQVYsRUFBbUI4QixRQUFRNUksTUFBTTRJLE1BQWpDLEVBQVosQ0FBZDtBQUNBNUgsa0JBQWM2SCxZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsZUFBcEMsR0FBc0RMLE9BQXREO0FBQ0ExSCxrQkFBY2dFLEdBQWQsQ0FBa0JnRSxVQUFsQixDQUE2Qk4sT0FBN0I7QUFDQSxVQUFLTCxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVbEksSUFBVixPQUFaO0FBQ0EsVUFBSzhJLHlCQUFMLEdBQWlDLE1BQUtBLHlCQUFMLENBQStCOUksSUFBL0IsT0FBakM7QUFDQSxVQUFLK0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CL0ksSUFBcEIsT0FBdEI7QUFDQSxVQUFLc0ksS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV3RJLElBQVgsT0FBYjtBQUNBLFVBQUtnSixvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQmhKLElBQTFCLE9BQTVCO0FBQ0E7QUFDQSxVQUFLZ0QsS0FBTCxHQUFhO0FBQ1g7QUFDQWlHLGlCQUFXcEosTUFBTW9KLFNBQU4sSUFBbUIsT0FGbkI7QUFHWGYsWUFBTXJJLE1BQU1xSSxJQUFOLElBQWMsS0FIVDtBQUlYRCxpQkFBV3BJLE1BQU1vSSxTQUFOLElBQW1CLHFCQUpuQjtBQUtYdEcsY0FBUTlCLE1BQU04QixNQUFOLElBQWdCLEVBTGI7QUFNWDRHLGVBQVNBLE9BTkU7QUFPWFcsaUJBQVc7QUFQQSxLQUFiO0FBbkNpQjtBQTRDbEI7Ozs7d0NBRW1CLENBRW5COzs7aUNBRVlDLEcsRUFBSztBQUNoQixXQUFLL0MsUUFBTCxDQUFjLEVBQUM4QyxXQUFXQyxHQUFaLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTXJKLFFBQVEsSUFBZDtBQUNBLFVBQU1zSixVQUFVLEtBQUt2SixLQUFMLENBQVdnQixhQUFYLENBQXlCdUMsSUFBekM7QUFDQSxVQUFJNkUsWUFBWSxLQUFLakYsS0FBTCxDQUFXaUYsU0FBWCxHQUF1QixHQUF2QixHQUE2QixLQUFLakYsS0FBTCxDQUFXaUcsU0FBeEQ7QUFDQWhCLG1CQUFhLE9BQU8sS0FBS2pGLEtBQUwsQ0FBV2tGLElBQVgsR0FBa0IsVUFBbEIsR0FBK0IsV0FBdEMsQ0FBYjtBQUNBLFVBQUksS0FBS2xGLEtBQUwsQ0FBV2tGLElBQWYsRUFBcUI7QUFDbkJoQyxlQUFPLEtBQUtsRCxLQUFMLENBQVd1RixPQUFYLENBQW1CNUIsT0FBMUIsRUFBbUMwQyxRQUFuQyxDQUE0QyxVQUE1QyxFQUF3REMsV0FBeEQsQ0FBb0UsV0FBcEU7QUFDRCxPQUZELE1BRU87QUFDTHBELGVBQU8sS0FBS2xELEtBQUwsQ0FBV3VGLE9BQVgsQ0FBbUI1QixPQUExQixFQUFtQzJDLFdBQW5DLENBQStDLFVBQS9DLEVBQTJERCxRQUEzRCxDQUFvRSxXQUFwRTtBQUNEO0FBQ0QsVUFBSUUsaUJBQWlCLEVBQXJCO0FBQ0EsVUFBSUMsVUFBVSxFQUFkO0FBQ0EsVUFBSSxLQUFLM0osS0FBTCxDQUFXNEosU0FBWCxDQUFxQjFJLE1BQXJCLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DLFlBQUkySSxnQkFBZ0IsMENBQVEsS0FBSyxLQUFLN0osS0FBTCxDQUFXNEosU0FBWCxDQUFxQjFJLE1BQWxDLEVBQTBDLE9BQU8sS0FBSytHLGFBQUwsQ0FBbUI2QixvQ0FBcEUsRUFBMEcsV0FBVywwQ0FBckgsRUFBaUssV0FBVyxxQkFBTTtBQUFDN0osa0JBQU04SixZQUFOLENBQW1CLENBQW5CO0FBQXNCLFdBQXpNLEdBQXBCO0FBQ0FKLGdCQUFRSyxJQUFSLENBQWFILGFBQWI7QUFDQUYsZ0JBQVFLLElBQVIsQ0FBYSxLQUFLaEssS0FBTCxDQUFXNEosU0FBWCxDQUFxQjVFLEdBQXJCLENBQXlCLFVBQVM4QixPQUFULEVBQWtCbUQsS0FBbEIsRUFBeUI7QUFDM0QsY0FBSUMsV0FBV3BELFFBQVFxRCxXQUF2QjtBQUNBbEssZ0JBQU1rSixvQkFBTixDQUEyQmUsUUFBM0IsRUFBcUNELEtBQXJDO0FBQ0EsaUJBQU8sMENBQVEsS0FBS0EsS0FBYixFQUFvQixPQUFPbkQsUUFBUSxDQUFSLEVBQVdqQyxJQUF0QztBQUNRLHVCQUFXLG9DQUFvQ29GLEtBRHZEO0FBRVEsdUJBQVcscUJBQU07QUFBQ2hLLG9CQUFNOEosWUFBTixDQUFtQkUsUUFBUSxDQUEzQjtBQUE4QixhQUZ4RCxHQUFQO0FBR0QsU0FOVSxDQUFiO0FBUUFQLHlCQUFpQjtBQUFBO0FBQUEsWUFBSyxXQUFXLHdCQUFoQjtBQUNkQztBQURjLFNBQWpCO0FBR0Q7QUFDRCxVQUFJUyxPQUFPLEVBQVg7QUFDQSxVQUFJLEtBQUtwSyxLQUFMLENBQVc0SixTQUFYLENBQXFCMUksTUFBckIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkNrSixlQUFPO0FBQUMseUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDSixlQUFLcEssS0FBTCxDQUFXNEosU0FBWCxDQUFxQjVFLEdBQXJCLENBQXlCLFVBQVM4QixPQUFULEVBQWtCbUQsS0FBbEIsRUFBeUI7QUFDakQsbUJBQU8sOEJBQUMsaURBQUQsSUFBd0IsS0FBS0EsS0FBN0IsRUFBb0MsZUFBZWhLLE1BQU1ELEtBQU4sQ0FBWWdCLGFBQS9EO0FBQ3dCLHlCQUFXZixNQUFNRCxLQUFOLENBQVk0SixTQUFaLENBQXNCSyxLQUF0QixDQURuQyxFQUNpRSxnQkFBZ0JoSyxNQUFNRCxLQUFOLENBQVlxSyxXQUQ3RjtBQUV3QiwyQkFBYXBLLE1BQU1ELEtBQU4sQ0FBWXNLLFNBRmpELEVBRTRELFVBQVVySyxNQUFNb0ksSUFGNUUsRUFFa0YsVUFBVXZCLFFBQVEsQ0FBUixFQUFXakMsSUFGdkc7QUFHd0Isb0JBQU01RSxNQUFNa0QsS0FBTixDQUFZa0YsSUFIMUMsRUFHZ0QsUUFBUzRCLFFBQVEsQ0FBVCxLQUFnQmhLLE1BQU1rRCxLQUFOLENBQVlrRyxTQUhwRixHQUFQO0FBSUQsV0FMQTtBQURJLFNBQVA7QUFRRDtBQUNELGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV2xGLDhCQUFhb0csaUJBQTdCO0FBQ0U7QUFBQyx5QkFBRDtBQUFBLFlBQVUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXBCO0FBQ0Usd0NBQUMsUUFBRCxJQUFVLGNBQWMsc0JBQXhCLEVBQWdELGFBQWFwRyw4QkFBYXFHLGtCQUExRTtBQUNVLG9CQUFRakIsUUFBUS9GLFNBQVIsQ0FBa0JpSCxLQUFsQixJQUEyQixLQUFLeEMsYUFBTCxDQUFtQnlDLFNBRGhFLEVBQzJFLGVBQWV2Ryw4QkFBYXdHLGVBRHZHLEVBQ3dILFlBQVksS0FBS2xDLEtBRHpJO0FBRVUsMkJBQWUsS0FBS1IsYUFBTCxDQUFtQnpELEtBRjVDO0FBREYsU0FERjtBQU9Ha0Ysc0JBUEg7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFXdkYsOEJBQWF5RywyQkFBN0I7QUFDRSx3Q0FBQyxpREFBRCxJQUF3QixLQUFLLEtBQUs1SyxLQUFMLENBQVc0SixTQUFYLENBQXFCMUksTUFBbEQsRUFBMEQsZUFBZ0IsS0FBS2xCLEtBQUwsQ0FBV2dCLGFBQXJGLEVBQW9HLE1BQU0sS0FBS2lILGFBQS9HO0FBQ3NCLHVCQUFXLEtBQUtqSSxLQUFMLENBQVdpSCxTQUQ1QyxFQUN1RCxXQUFXLEtBQUtqSCxLQUFMLENBQVcyRCxTQUQ3RSxFQUN3RixnQkFBZ0IsS0FBSzNELEtBQUwsQ0FBV08sY0FEbkg7QUFFc0IseUJBQWEsS0FBS1AsS0FBTCxDQUFXdUMsV0FGOUMsRUFFMkQscUJBQXFCLEtBQUt2QyxLQUFMLENBQVdNLG1CQUYzRixFQUVnSCxVQUFVLEtBQUsrSCxJQUYvSCxFQUVxSSxVQUFVa0IsUUFBUWpDLGFBQVIsQ0FBc0JtRCxLQUZySztBQUdzQixrQkFBTSxLQUFLdEgsS0FBTCxDQUFXa0YsSUFIdkMsRUFHNkMsUUFBUXBJLE1BQU1rRCxLQUFOLENBQVlrRyxTQUFaLEtBQTBCLENBSC9FLEdBREY7QUFLR2U7QUFMSDtBQVJGLE9BREY7QUFrQkQ7Ozt5Q0FFb0JGLFEsRUFBVUQsSyxFQUFPO0FBQ3BDLFVBQUlZLFFBQVE5QyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQTtBQUNBNkMsWUFBTXRDLFdBQU4sQ0FBa0JSLFNBQVMrQyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0EvQyxlQUFTZ0QsSUFBVCxDQUFjeEMsV0FBZCxDQUEwQnNDLEtBQTFCOztBQUVBLFVBQUlHLGFBQWFILE1BQU1JLEtBQXZCO0FBQ0FELGlCQUFXRSxVQUFYLENBQXNCLDJDQUEyQ2pCLEtBQTNDLEdBQW1ELGFBQW5ELEdBQ3BCLGlCQURvQixHQUNBQyxRQURBLEdBQ1csT0FEWCxHQUVwQix5Q0FGb0IsR0FHcEIsdUJBSG9CLEdBSXBCLHlCQUpvQixHQUtwQixHQUxGO0FBTUQ7OzsyQkFFTTtBQUFBOztBQUNMLFdBQUszRCxRQUFMLENBQWMsRUFBQzhCLE1BQU0sSUFBUCxFQUFkLEVBQTRCO0FBQUEsZUFBTSxPQUFLWSx5QkFBTCxFQUFOO0FBQUEsT0FBNUI7QUFDQSxXQUFLakosS0FBTCxDQUFXZ0IsYUFBWCxDQUF5Qm1LLGdCQUF6QixDQUEwQyxJQUExQztBQUNEOzs7NEJBRU87QUFBQTs7QUFDTixXQUFLNUUsUUFBTCxDQUFjLEVBQUM4QixNQUFNLEtBQVAsRUFBZCxFQUE2QjtBQUFBLGVBQU0sT0FBSytDLHdCQUFMLEVBQU47QUFBQSxPQUE3QjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTW5MLFFBQVEsSUFBZDtBQUNBZ0QsYUFBT29JLHFCQUFQLENBQTZCLFlBQVc7QUFDdENwTCxjQUFNZ0oseUJBQU47QUFDRCxPQUZEO0FBR0Q7Ozt1Q0FFa0JxQyxTLEVBQVdDLFMsRUFBV0MsUSxFQUFVO0FBQ2pELFVBQUksS0FBS3JJLEtBQUwsQ0FBV2tGLElBQWYsRUFBcUI7QUFDbkIsYUFBS1kseUJBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLbUMsd0JBQUw7QUFDRDtBQUNELFVBQUksS0FBS3BMLEtBQUwsQ0FBV2dCLGFBQVgsQ0FBeUJ1QyxJQUF6QixDQUE4QmtJLE9BQTlCLElBQXlDLENBQUMsS0FBS3RJLEtBQUwsQ0FBV2tGLElBQXpELEVBQStEO0FBQzdELFlBQUlxRCxXQUFXQyxvQkFBTUMsUUFBTixDQUFlLE9BQWYsQ0FBZjtBQUNBLFlBQUlGLGFBQWEsS0FBS0csV0FBTCxDQUFpQmhILElBQWxDLEVBQXdDO0FBQ3RDOEcsOEJBQU1HLFVBQU4sQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7OztnREFHNEI7QUFDMUJ6RixhQUFPLDBCQUFQLEVBQW1DbUQsUUFBbkMsQ0FBNEMsVUFBNUMsRUFBd0RDLFdBQXhELENBQW9FLFdBQXBFO0FBQ0Q7O0FBRUQ7Ozs7OzsrQ0FHMkI7QUFDekJwRCxhQUFPLDBCQUFQLEVBQW1DbUQsUUFBbkMsQ0FBNEMsV0FBNUMsRUFBeURDLFdBQXpELENBQXFFLFVBQXJFO0FBQ0Q7Ozs7RUEzS3lDbkUsZ0I7O2tCQUF2QndDLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7OytlQWhCQTs7Ozs7Ozs7Ozs7Ozs7SUFtQmFpRSxpQixXQUFBQSxpQjs7O0FBQ1QsK0JBQVkvTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUlBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7QUFBQTs7QUFFTDtBQUNBLGdCQUFJZ00sb0JBQW9CLElBQXhCO0FBQ0EsZ0JBQUl0SSxXQUFXLEtBQUsxRCxLQUFMLENBQVcyRCxTQUFYLENBQXFCQyxZQUFyQixDQUFrQyxLQUFLNUQsS0FBTCxDQUFXaU0sT0FBN0MsQ0FBZjtBQUNBLGdCQUFJdEksWUFBWUQsU0FBU3dJLFdBQXpCO0FBQ0EsZ0JBQUlDLFNBQVN6SSxTQUFTbUgsS0FBVCxJQUFrQm5ILFNBQVNtSCxLQUFULENBQWUsSUFBSXVCLGlCQUFKLENBQVksRUFBQ0MsVUFBVSxJQUFJQyxXQUFKLENBQVUsQ0FBVixFQUFZLENBQVosQ0FBWCxFQUFaLENBQWYsRUFBd0QsV0FBeEQsQ0FBbEIsR0FBeUY1SSxTQUFTbUgsS0FBVCxDQUFlLElBQUl1QixpQkFBSixDQUFZLEVBQUNDLFVBQVUsSUFBSUMsV0FBSixDQUFVLENBQVYsRUFBWSxDQUFaLENBQVgsRUFBWixDQUFmLEVBQXdELFdBQXhELENBQXpGLEdBQStKLElBQTVLO0FBQ0EsZ0JBQUlDLFNBQVM1TCxNQUFNQyxPQUFOLENBQWN1TCxNQUFkLElBQXdCQSxPQUFPLENBQVAsQ0FBeEIsR0FBbUNBLE1BQWhEO0FBQ0EsZ0JBQUlLLFlBQVk3SSxZQUFZQSxVQUFVOEksU0FBdEIsR0FBa0MsU0FBbEQ7QUFDQSxnQkFBSTlJLGNBQWM2SSxjQUFjLFdBQWQsSUFBNkJBLGNBQWMsZUFBM0MsSUFBOERBLGNBQWMsT0FBMUYsQ0FBSixFQUF3RztBQUNwRyxvQkFBSUUsWUFBWSxJQUFoQjtBQUNBLG9CQUFJQyxnQkFBSjtBQUNBLG9CQUFLaEosVUFBVWlKLFFBQVYsSUFBc0JqSixVQUFVaUosUUFBVixDQUFtQmxHLE9BQW5CLENBQTJCLEdBQTNCLE1BQW9DLENBQUMsQ0FBNUQsSUFBbUUvQyxVQUFVa0osTUFBVixJQUFvQmxKLFVBQVVrSixNQUFWLENBQWlCbkcsT0FBakIsQ0FBeUIsR0FBekIsTUFBa0MsQ0FBQyxDQUE5SCxFQUFrSTtBQUM5SCx3QkFBSThGLGNBQWMsV0FBZCxJQUE2QkEsY0FBYyxPQUEvQyxFQUF3RDtBQUNwREcsa0NBQVVoSixVQUFVaUosUUFBcEI7QUFDSCxxQkFGRCxNQUdLO0FBQ0RELGtDQUFVaEosVUFBVWtKLE1BQXBCO0FBQ0g7QUFDREgsZ0NBQVksdUNBQUssS0FBS0MsT0FBVixFQUFtQixPQUFPLEVBQUNHLFFBQVEsRUFBVCxFQUFhQyxPQUFPLEVBQXBCLEVBQTFCLEdBQVo7QUFDSCxpQkFSRCxNQVFPLElBQUlSLE1BQUosRUFBWTtBQUNmLHdCQUFJUyxhQUFhVCxPQUFPVSxRQUFQLElBQW1CLE9BQU9WLE9BQU9VLFFBQWQsS0FBMkIsVUFBOUMsSUFBNERWLE9BQU9VLFFBQVAsRUFBNUQsR0FBZ0ZWLE9BQU9VLFFBQVAsRUFBaEYsR0FBbUcsSUFBcEg7QUFDQSx3QkFBSUQsY0FBY0EsV0FBV0UsTUFBWCxFQUFsQixFQUF1QztBQUNuQ1Isb0NBQVksdUNBQUssS0FBS00sV0FBV0UsTUFBWCxFQUFWLEVBQStCLE9BQU8sRUFBQ0osUUFBUSxFQUFULEVBQWFDLE9BQU8sRUFBcEIsRUFBdEMsR0FBWjtBQUNILHFCQUZELE1BR0s7QUFDRCwrQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNELG9CQUFJLEtBQUsvTSxLQUFMLENBQVdtTixVQUFYLElBQXlCLEtBQUtuTixLQUFMLENBQVdvTixPQUF4QyxFQUFpRDtBQUM3Q3BCLHdDQUFvQjtBQUFBO0FBQUEsMEJBQU0sV0FBVzdILDhCQUFha0osa0JBQTlCLEVBQWtELE9BQU8sS0FBS3JOLEtBQUwsQ0FBV29OLE9BQXBFLEVBQTZFLFdBQVcsbUJBQUNuSixLQUFEO0FBQUEsdUNBQVUsT0FBS2pFLEtBQUwsQ0FBV21OLFVBQVgsQ0FBc0JsSixLQUF0QixDQUFWO0FBQUEsNkJBQXhGO0FBQWlJeUk7QUFBakkscUJBQXBCO0FBQ0gsaUJBRkQsTUFHSztBQUNEVix3Q0FBb0I7QUFBQTtBQUFBLDBCQUFNLFdBQVc3SCw4QkFBYWtKLGtCQUE5QjtBQUFtRFg7QUFBbkQscUJBQXBCO0FBQ0g7QUFDSixhQTFCRCxNQTBCTztBQUNILG9CQUFJeEksaUJBQUo7QUFDQSx3QkFBUXNJLFNBQVIsR0FBcUI7QUFDakIseUJBQUssT0FBTDtBQUNJdEksbUNBQVdDLDhCQUFhbUosd0JBQXhCO0FBQ0E7QUFDSix5QkFBSyxRQUFMO0FBQ0lwSixtQ0FBV0MsOEJBQWFvSix5QkFBeEI7QUFDQTtBQUNKLHlCQUFLLE1BQUw7QUFDSXJKLG1DQUFXQyw4QkFBYXFKLHVCQUF4QjtBQUNBO0FBQ0oseUJBQUssR0FBTDtBQUNJdEosbUNBQVdDLDhCQUFhc0osb0JBQXhCO0FBQ0E7QUFDSix5QkFBSyxPQUFMO0FBQ0l2SixtQ0FBV0MsOEJBQWF1Six3QkFBeEI7QUFDQTtBQUNKLHlCQUFLLFVBQUw7QUFDSXhKLG1DQUFXQyw4QkFBYXdKLDJCQUF4QjtBQUNBO0FBQ0o7QUFDSXpKLG1DQUFVQyw4QkFBYWtKLGtCQUF2QjtBQUNBO0FBckJSO0FBdUJBLG9CQUFJTyxjQUFKO0FBQUEsb0JBQVdDLG9CQUFYO0FBQ0Esb0JBQUl0QixVQUFVQSxPQUFPdUIsT0FBUCxFQUFWLElBQThCdkIsT0FBT3dCLFNBQVAsRUFBbEMsRUFBc0Q7QUFDbERILDRCQUFRckIsT0FBT3VCLE9BQVAsR0FBaUJFLFFBQWpCLEVBQVI7QUFDQUgsa0NBQWN0QixPQUFPd0IsU0FBUCxHQUFtQkMsUUFBbkIsRUFBZDtBQUNILGlCQUhELE1BSUssSUFBSXJLLGFBQWFBLFVBQVVzSyxTQUF2QixJQUFvQ3RLLFVBQVV1SyxXQUFsRCxFQUErRDtBQUNoRU4sNEJBQVFqQyxvQkFBTXdDLHdCQUFOLENBQStCeEssVUFBVXNLLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBL0IsRUFBdUR0SyxVQUFVc0ssU0FBVixDQUFvQixDQUFwQixDQUF2RCxDQUFSO0FBQ0FKLGtDQUFjbEMsb0JBQU13Qyx3QkFBTixDQUErQnhLLFVBQVV1SyxXQUFWLENBQXNCLENBQXRCLENBQS9CLEVBQXlEdkssVUFBVXVLLFdBQVYsQ0FBc0IsQ0FBdEIsQ0FBekQsQ0FBZDtBQUNIO0FBQ0Qsb0JBQUlFLGdCQUFnQjtBQUNoQixtQ0FBZ0JSLEtBREE7QUFFaEIseUNBQXNCQztBQUZOLGlCQUFwQjtBQUlBLG9CQUFJLEtBQUs3TixLQUFMLENBQVdtTixVQUFYLElBQXlCLEtBQUtuTixLQUFMLENBQVdvTixPQUF4QyxFQUFpRDtBQUM3Q3BCLHdDQUFvQix3Q0FBTSxXQUFXOUgsUUFBakIsRUFBMkIsT0FBT2tLLGFBQWxDLEVBQWlELE9BQU8sS0FBS3BPLEtBQUwsQ0FBV29OLE9BQW5FLEVBQTRFLFdBQVcsbUJBQUNuSixLQUFEO0FBQUEsbUNBQVUsT0FBS2pFLEtBQUwsQ0FBV21OLFVBQVgsQ0FBc0JsSixLQUF0QixDQUFWO0FBQUEseUJBQXZGLEdBQXBCO0FBQ0gsaUJBRkQsTUFHSztBQUNEK0gsd0NBQW9CLHdDQUFNLFdBQVc5SCxRQUFqQixFQUEyQixPQUFPa0ssYUFBbEMsR0FBcEI7QUFDSDtBQUNKO0FBQ0QsbUJBQU9wQyxpQkFBUDtBQUNIOzs7O0VBdEZrQzFHLGdCIiwiZmlsZSI6IjcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBvbEV4dGVudCBmcm9tIFwib2wvZXh0ZW50XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkU3R5bGV9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtc3R5bGVcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5sYXllckNsaWNrID0gdGhpcy5sYXllckNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXllclpvb21UbyA9IHRoaXMubGF5ZXJab29tVG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwYW5DbGljayA9IHRoaXMuc3BhbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgc2hvd0xheWVyKHNob3dFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKHNob3dFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvd0VsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IHNob3dFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoc2hvd0VsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gc2hvd0VsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsc2NvcGUucHJvcHMuaWQpO1xuICAgIH0gZWxzZSBpZiAodmVjdG9yTGF5ZXIpe1xuICAgICAgbGF5ZXJDb250cm9sbGVyLnNob3coc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIHRydWUpXG4gIH1cblxuICBoaWRlTGF5ZXIoaGlkZUVsZW1lbnRzID0gbnVsbCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZmVhdHVyZXMgPSBmYWxzZTtcbiAgICBsZXQgdmVjdG9yTGF5ZXIgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUVsZW1lbnRzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWRlRWxlbWVudHMpKSB7XG4gICAgICAgIGZlYXR1cmVzID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfSBlbHNlIGlmIChoaWRlRWxlbWVudHMgaW5zdGFuY2VvZiBWZWN0b3IpIHtcbiAgICAgICAgdmVjdG9yTGF5ZXIgPSBoaWRlRWxlbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgICB2ZWN0b3JMYXllciA9IHZlY3RvckxheWVyIHx8IHNjb3BlLnByb3BzLmxheWVyLnZlY3RvckxheWVyO1xuICAgIH1cbiAgICBsZXQgbGF5ZXJDb250cm9sbGVyID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXI7XG4gICAgaWYgKGZlYXR1cmVzICYmIGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgZmVhdHVyZXMsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIHZlY3RvckxheWVyLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoZmFsc2UsIGZhbHNlLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfVxuICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChzY29wZS5wcm9wcy5pZCwgZmFsc2UpXG4gIH1cbiAgY2hhbmdlQ2hpbGRTdGF0ZSAoY2hpbGQsIGNoaWxkU3RhdGUsIGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2hvd0xheWVyKGNoaWxkLmZlYXR1cmVzIHx8IGNoaWxkLnZlY3RvckxheWVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZHMgJiYgY2hpbGQuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gY2hpbGQuY2hpbGRzKSB7XG4gICAgICAgIGlmIChjaGlsZC5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLmFjdGl2ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkU3RhdGUgIT09IGFjdGl2ZSkge1xuICAgICAgICAgICAgY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShjaGlsZC5jaGlsZHNbY2hpbGRJZF0sIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIGFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKGNoaWxkU3RhdGUuaWQsIGFjdGl2ZSlcbiAgICBjaGlsZFN0YXRlLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgfVxuICBwYXJlbnRDYWxsYmFjayAoa2V5LCBuZXdDaGlsZFN0YXRlKSB7XG4gICAgbGV0IG5ld1N0YXRlID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1trZXldID0gbmV3Q2hpbGRTdGF0ZTtcbiAgICBpZiAobmV3U3RhdGUuYWN0aXZlICE9IG5ld0NoaWxkU3RhdGUuYWN0aXZlKSB7XG4gICAgICAvLyBuZXdTdGF0ZS5hY3RpdmUgPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZTtcbiAgICAgIGlmIChuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJDbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUxheWVyKCk7XG4gICAgfVxuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzICYmIHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBsYXllckNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBsYXllckNoaWxkcykge1xuICAgICAgICBpZiAobGF5ZXJDaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkpIHtcbiAgICAgICAgICBsZXQgY3VycmVudENoaWxkU3RhdGUgPSBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBuZXdTdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdID0gdGhpcy5jaGFuZ2VDaGlsZFN0YXRlKGxheWVyQ2hpbGRzW2NoaWxkSWRdLCBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSwgbmV3U3RhdGUuYWN0aXZlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayh0aGlzLnByb3BzLmtleUlkLCBuZXdTdGF0ZSlcbiAgfVxuICBsYXllclpvb21UbyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5sYXllckNsaWNrKGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnpvb21Ubyh0aGlzLnByb3BzLmxheWVyKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLnNldENoaWxkRmVhdHVyZUZsYWcodGhpcy5wcm9wcy5sYXllciwgXCJtYXJrTG9jc3R5bGVcIiwgdHJ1ZSk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuICBjaGFuZ2VDb2xsYXBzZVN0YXRlKGlkLCBzdGF0ZSkge1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdID0gc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMua2V5SWQsIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpO1xuICB9XG4gIHNwYW5DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID0gIXRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0eWxlUGljdHVyZSA9IG51bGw7XG4gICAgbGV0IHNwYW5ab29tID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5zdGFyYm9hcmQuc2hvd0xvY3N0eWxlcyA9PT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YSAmJiB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXMgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzW3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGVdKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8pIHtcbiAgICAgICAgc3R5bGVQaWN0dXJlID0gPEM0Z1N0YXJib2FyZFN0eWxlIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHN0eWxlSWQ9e3RoaXMucHJvcHMubGF5ZXIubG9jc3R5bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMubGFuZy5TVEFSQk9BUkRfRUxFTUVOVF9aT09NfSBjbGlja0V2ZW50PXt0aGlzLmxheWVyWm9vbVRvfS8+O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfS8+O1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnByb3BzLmxheWVyLmFkZFpvb21UbyAmJiAhdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSkge1xuICAgICAgc3Bhblpvb20gPSA8c3BhbiBjbGFzc05hbWU9e1wiYzRnLWdlb2pzb24tYnV0dG9uXCJ9IHRpdGxlPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTX0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfS8+O1xuICAgIH1cbiAgICBsZXQgY3NzQ2xhc3MgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSA/IGNzc0NvbnN0YW50cy5BQ1RJVkUgOiBjc3NDb25zdGFudHMuSU5BQ1RJVkU7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuZ3JleWVkKSB7XG4gICAgICBjc3NDbGFzcyArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ESVNBQkxFRDtcbiAgICB9XG4gICAgbGV0IG9wZW5DbG9zZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY29sbGFwc2VkID8gY3NzQ29uc3RhbnRzLkNMT1NFIDogY3NzQ29uc3RhbnRzLk9QRU47XG4gICAgbGV0IG9iakNoaWxkcyA9IHRoaXMucHJvcHMubGF5ZXIuY2hpbGRzO1xuICAgIGxldCBsaW5rVGV4dDtcbiAgICBsZXQgbGlua1N3aXRjaDtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmludmVydFpvb21BY3RpdmF0ZSAmJiB0aGlzLnByb3BzLmxheWVyLmFkZFpvb21Ubykge1xuICAgICAgbGlua1RleHQgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXRleHRcIn0gb25Nb3VzZVVwPXsoZXZlbnQpID0+IHRoaXMubGF5ZXJab29tVG8oZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgIGxpbmtTd2l0Y2ggPSA8YSBjbGFzc05hbWU9e2Nzc0NsYXNzICsgXCIgYzRnLXN0YXJib2FyZC1jaGVja2JveC1pY29uXCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT48L2E+XG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsaW5rVGV4dCA9IDxhIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyQ2xpY2soZXZlbnQpfT57dGhpcy5wcm9wcy5sYXllci5uYW1lfTwvYT47XG4gICAgfVxuXG4gICAgaWYgKG9iakNoaWxkcyAmJiBvYmpDaGlsZHMubGVuZ3RoKSB7XG4gICAgICBsZXQgc3BhbiA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLklDT059IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLnNwYW5DbGljayhldmVudCl9Lz47XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e29wZW5DbG9zZSArIFwiIGM0Zy1zdGFyYm9hcmQtbGlzdC1lbGVtZW50XCJ9PlxuICAgICAgICAgIHtzcGFufVxuICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7b2JqQ2hpbGRzLm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYnlQYXNzQ2hpbGRzIHx8IHRoaXMucHJvcHMuZmlsdGVyRnVuYyh0aGlzLnByb3BzLnN0ckZpbHRlciwgaXRlbSwgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMucGFyZW50Q2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMucHJvcHMuc3RyRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5wcm9wcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIGZhbHNlLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlcy5jaGlsZFN0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmblJlc2l6ZT17dGhpcy5wcm9wcy5mblJlc2l6ZX0vPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG4gICAgICBsZXQgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljaztcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyLnpvb21Ubykge1xuICAgICAgICBsYXllckNsaWNrID0gdGhpcy5sYXllclpvb21UbztcbiAgICAgICAgY3NzQ2xhc3MgPSBcImM0Zy1nZW9qc29uLWJ1dHRvblwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICAgIHtzdHlsZVBpY3R1cmV9XG4gICAgICAgICAgICB7c3Bhblpvb219XG4gICAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAgICB7bGlua1N3aXRjaH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHQgICAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRMYXllckVsZW1lbnR9IGZyb20gXCIuL2M0Zy1zdGFyYm9hcmQtbGF5ZXItZWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRMYXllckZpbHRlciA9IHRoaXMuc2V0TGF5ZXJGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFsbExheWVycyA9IHRoaXMudG9nZ2xlQWxsTGF5ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlID0gdGhpcy5jaGFuZ2VDb2xsYXBzZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgIGxheWVyRmlsdGVyOiBcIlwiXG4gICAgfTtcbiAgICAvLyB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbml0aWFsQ291bnRlck9mZiA9IDA7XG4gICAgdGhpcy5pbml0aWFsQ291bnRlck9uID0gMDtcbiAgICBmb3IgKGxldCBpIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcykge1xuICAgICAgICAgIGZvciAobGV0IGogaW4gdGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZCh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzW2pdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbml0aWFsQ291bnRlck9uID4gdGhpcy5pbml0aWFsQ291bnRlck9mZjtcbiAgfVxuICBnZXRJbml0aWFsU3RhdGVDaGlsZCAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQuYWN0aXZlKSB7XG4gICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgfVxuICAgIGlmIChjaGlsZC5jaGlsZFN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSBpbiBjaGlsZC5jaGlsZFN0YXRlcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZUNoaWxkKGNoaWxkLmNoaWxkU3RhdGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrRnVuY3Rpb24gPSAoa2V5LCBuZXdTdGF0ZSkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIG5ld1N0YXRlc1trZXldID0gbmV3U3RhdGU7XG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhuZXdTdGF0ZXMpXG4gIH07XG5cbiAgc2V0TGF5ZXJGaWx0ZXIoKSB7XG4gICAgbGV0IGZpbHRlclZhbHVlID0galF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlci1maWVsZFwiKS52YWwoKSB8fCBcIlwiOyAvL2ZhbGxiYWNrXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGF5ZXJGaWx0ZXI6IGZpbHRlclZhbHVlfSk7XG4gIH1cblxuICBmaWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIsIHN0YXRlID0ge30sIGRpZ0RlZXBlciA9IHRydWUpIHtcbiAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgIGlmIChsYXllciAmJiBsYXllci5uYW1lICYmIChsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgICAgIHx8IGxheWVyLm5hbWUudG9VcHBlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b1VwcGVyQ2FzZSgpKSAhPT0gLTEpKSB7XG4gICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGxheWVyLnRhZ3MgJiYgbGF5ZXIudGFncy5maW5kKChlbGVtZW50KSA9PiB7cmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0ckZpbHRlci50b0xvd2VyQ2FzZSgpKSAhPT0gLTF9KSl7XG4gICAgICBzaG93ID0gdHJ1ZVxuICAgICAgaWYgKHN0ckZpbHRlciAmJiBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpZ0RlZXBlcikge1xuICAgICAgZm9yIChsZXQgY2hpbGRJZCBpbiBsYXllci5jaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyLmNoaWxkcy5oYXNPd25Qcm9wZXJ0eShjaGlsZElkKSAmJiAhc2hvdykge1xuICAgICAgICAgIHNob3cgPSB0aGlzLmZpbHRlckZ1bmMoc3RyRmlsdGVyLCBsYXllci5jaGlsZHNbY2hpbGRJZF0sIHN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdKTtcbiAgICAgICAgICBpZiAoc3RyRmlsdGVyICYmIHNob3cgJiYgc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hvdztcbiAgfVxuXG4gIHRvZ2dsZUFsbExheWVycygpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zaG93KGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmFjdGl2ZSkge1xuICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyLmhpZGUobGF5ZXJzW2ldLmxvYWRlciwgbGF5ZXJzW2ldLmZlYXR1cmVzIHx8IGxheWVyc1tpXS52ZWN0b3JMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmNoaWxkU3RhdGVzICYmIHN0YXRlc1tpXS5jaGlsZFN0YXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3RhdGVzW2ldLmNoaWxkU3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnNbaV0uY2hpbGRzLCBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzY29wZS5idXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cblxuICAgIGlmICghc2NvcGUuYnV0dG9uRW5hYmxlZCkge1xuICAgICAgc3RhdGVzID0gYWN0aXZhdGVMYXllcnMobGF5ZXJzLCBzdGF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMgPSBkZWFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHN0YXRlcyk7XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcyAmJiB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmxlbmd0aCA+IDAgJiYgISh0aGlzLmluaXRpYWxDb3VudGVyT2ZmICYmIHRoaXMuaW5pdGlhbENvdW50ZXJPbikpIHtcbiAgICAgIHRoaXMuYnV0dG9uRW5hYmxlZCA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlcygpO1xuICAgIH1cblxuICAgIGxldCBsYXllcnMsIHN0YXRlcywgZmlsdGVyO1xuICAgIGxheWVycyA9IHRoaXMucHJvcHMub2JqTGF5ZXJzO1xuICAgIHN0YXRlcyA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZmlsdGVyID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxheWVyc3dpdGNoZXIuZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXIgd2l0aG91dC1idXR0b25cIn0+XG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtbGF5ZXJ0cmVlLWZpbHRlci1maWVsZFwifSB0eXBlPVwidGV4dFwiIG9uSW5wdXQ9e3RoaXMuc2V0TGF5ZXJGaWx0ZXJ9IHBsYWNlaG9sZGVyPXtcIlxcdWYwMDJcIn0vPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAgbGV0IGhlYWRsaW5lID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLmJ1dHRvbikge1xuICAgICAgaGVhZGxpbmUgPSA8YSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1oZWFkbGluZS1saW5rIFwiICsgKHRoaXMuYnV0dG9uRW5hYmxlZCA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9IG9uTW91c2VVcD17dGhpcy50b2dnbGVBbGxMYXllcnN9Pnt0aGlzLnByb3BzLmhlYWRsaW5lIHx8IHRoaXMucHJvcHMubGFuZy5MQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEx9PC9hPjtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGxpbmUgPSA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRIZWFkbGluZVwiPnt0aGlzLnByb3BzLmhlYWRsaW5lfTwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtoZWFkbGluZX1cbiAgICAgIHtmaWx0ZXJ9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctY29udGVudC1sYXllcnRyZWVcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xBWUVSVFJFRX0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2xheWVycy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlckZ1bmModGhpcy5zdGF0ZS5sYXllckZpbHRlciwgaXRlbSwgc3RhdGVzW2lkXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEM0Z1N0YXJib2FyZExheWVyRWxlbWVudCBrZXk9e2lkfSBrZXlJZD17aWR9IGlkPXtpdGVtLmlkfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2FsbGJhY2s9e3RoaXMuY2FsbGJhY2tGdW5jdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17c3RhdGVzW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLnByb3BzLmxhbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlQYXNzQ2hpbGRzPXt0aGlzLmZpbHRlckZ1bmModGhpcy5zdGF0ZS5sYXllckZpbHRlciwgaXRlbSxmYWxzZSwgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbHRlcj17dGhpcy5zdGF0ZS5sYXllckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJGdW5jPXt0aGlzLmZpbHRlckZ1bmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5SZXNpemU9e3RoaXMucHJvcHMuZm5SZXNpemV9Lz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0ICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdCAgICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTdGFyYm9hcmRMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXJcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLXN0YXJib2FyZC1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfSEVBRExJTkV9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICB7YnV0dG9uU3dpdGNoZXJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSfT5cbiAgICAgICAgICA8U3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciBrZXk9e3RoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aH0gbWFwQ29udHJvbGxlciA9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpMYXllcnM9e3RoaXMucHJvcHMub2JqTGF5ZXJzfSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBwYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXN9IGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZX0gb3BlbmZ1bmM9e3RoaXMub3Blbn0gaGVhZGxpbmU9e21hcERhdGEubGF5ZXJzd2l0Y2hlci5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBhY3RpdmU9e3Njb3BlLnN0YXRlLmFjdGl2ZVRhYiA9PT0gMH0vPlxuICAgICAgICAgIHt0YWJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNyZWF0ZVN0eWxpbmdGb3JJY29uKGljb25Db2RlLCBpbmRleCkge1xuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAvLyB3ZWJraXQgaGFjazpcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcImJ1dHRvbi5jNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleCArIFwiOmJlZm9yZSB7XFxuXCIgK1xuICAgICAgXCIgIGNvbnRlbnQ6IFxcXCJcXFxcXCIgKyBpY29uQ29kZSArIFwiXFxcIjtcXG5cIiArXG4gICAgICBcIiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG5cIiArXG4gICAgICBcIiAgZm9udC13ZWlnaHQ6IDkwMDtcXG5cIiArXG4gICAgICBcIiAgZm9udC1zaXplOiBpbmhlcml0O1xcblwiICtcbiAgICAgIFwifVwiKVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9LCAoKSA9PiB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpKTtcbiAgfVxuXG4gIHJlc2l6ZUZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgc2NvcGUuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIHRoaXMuc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBidXR0b25zIHRoYXQgd291bGQgY29sbGlkZSB3aXRoIHRoZSBwYW5lbC5cbiAgICovXG4gIHNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gIH1cblxuICAvKipcbiAgICogVW5kb2VzIHRoZSBwcmV2aW91cyBidXR0b24gbW92ZW1lbnQuXG4gICAqL1xuICBzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMoKSB7XG4gICAgalF1ZXJ5KFwiLmM0Zy1zdGFyYm9hcmQtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIik7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCAmJiB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCAmJiB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==