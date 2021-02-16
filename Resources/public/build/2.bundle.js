(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar */ "./Resources/public/js/components/c4g-titlebar.jsx");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllci1lbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1sYXllcnN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXN0YXJib2FyZC1wYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4Il0sIm5hbWVzIjpbIm9sRXh0ZW50IiwiQzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IiwicHJvcHMiLCJzY29wZSIsImxheWVyQ2xpY2siLCJiaW5kIiwibGF5ZXJab29tVG8iLCJzcGFuQ2xpY2siLCJjaGFuZ2VDb2xsYXBzZVN0YXRlIiwicGFyZW50Q2FsbGJhY2siLCJzaG93RWxlbWVudHMiLCJmZWF0dXJlcyIsInZlY3RvckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiVmVjdG9yIiwibGF5ZXIiLCJsYXllckNvbnRyb2xsZXIiLCJtYXBDb250cm9sbGVyIiwicHJveHkiLCJsZW5ndGgiLCJzaG93IiwibG9hZGVyIiwiaWQiLCJzZXRMYXllclN0YXRlV2l0aElkIiwiaGlkZUVsZW1lbnRzIiwiaGlkZSIsImNoaWxkIiwiY2hpbGRTdGF0ZSIsImFjdGl2ZSIsInNob3dMYXllciIsImhpZGVMYXllciIsImNoaWxkcyIsImNoaWxkSWQiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRDaGlsZFN0YXRlIiwiY2hpbGRTdGF0ZXMiLCJjaGFuZ2VDaGlsZFN0YXRlIiwia2V5IiwibmV3Q2hpbGRTdGF0ZSIsIm5ld1N0YXRlIiwibGF5ZXJTdGF0ZXMiLCJrZXlJZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXRpdmVFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdyZXllZCIsImxheWVyQ2hpbGRzIiwiem9vbVRvIiwic2V0Q2hpbGRGZWF0dXJlRmxhZyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsImNvbGxhcHNlZCIsInN0eWxlUGljdHVyZSIsInNwYW5ab29tIiwiZGF0YSIsInN0YXJib2FyZCIsInNob3dMb2NzdHlsZXMiLCJsb2NzdHlsZSIsInN0eWxlRGF0YSIsImFyckxvY1N0eWxlcyIsImFkZFpvb21UbyIsImxhbmciLCJTVEFSQk9BUkRfRUxFTUVOVF9aT09NIiwiaW52ZXJ0Wm9vbUFjdGl2YXRlIiwiZXZlbnQiLCJjc3NDbGFzcyIsImNzc0NvbnN0YW50cyIsIkFDVElWRSIsIklOQUNUSVZFIiwiRElTQUJMRUQiLCJvcGVuQ2xvc2UiLCJDTE9TRSIsIk9QRU4iLCJvYmpDaGlsZHMiLCJsaW5rVGV4dCIsImxpbmtTd2l0Y2giLCJuYW1lIiwic3BhbiIsIklDT04iLCJtYXAiLCJpdGVtIiwiYnlQYXNzQ2hpbGRzIiwiZmlsdGVyRnVuYyIsInN0ckZpbHRlciIsImZuUmVzaXplIiwiQ29tcG9uZW50IiwiU3RhcmJvYXJkTGF5ZXJzd2l0Y2hlciIsImdldEluaXRpYWxTdGF0ZXMiLCJpbml0aWFsQ291bnRlck9mZiIsImluaXRpYWxDb3VudGVyT24iLCJpIiwiaiIsImdldEluaXRpYWxTdGF0ZUNoaWxkIiwiY2FsbGJhY2tGdW5jdGlvbiIsIm5ld1N0YXRlcyIsInNldExheWVyRmlsdGVyIiwidG9nZ2xlQWxsTGF5ZXJzIiwiaW5pdGlhbGl6ZWQiLCJsYXllckZpbHRlciIsImZpbHRlclZhbHVlIiwialF1ZXJ5IiwidmFsIiwic2V0U3RhdGUiLCJkaWdEZWVwZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MiLCJmaW5kIiwiZWxlbWVudCIsInN0YXRlcyIsImxheWVycyIsIm9iakxheWVycyIsImFjdGl2YXRlTGF5ZXJzIiwiYnV0dG9uRW5hYmxlZCIsImRlYWN0aXZhdGVMYXllcnMiLCJmaWx0ZXIiLCJsYXllcnN3aXRjaGVyIiwiaGVhZGxpbmUiLCJidXR0b24iLCJMQVlFUlNXSVRDSEVSX1RPR0dMRV9BTEwiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU3RhcmJvYXJkUGFuZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nQ29uc3RhbnRzIiwidGl0bGUiLCJDVFJMX1NUQVJCT0FSRCIsImNsYXNzTmFtZSIsIm9wZW4iLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwib24iLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJob3Jpem9udGFsUGFuZWwiLCJhZGRDb250cm9sIiwic2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cyIsInJlc2l6ZUZ1bmN0aW9uIiwiY3JlYXRlU3R5bGluZ0Zvckljb24iLCJkaXJlY3Rpb24iLCJhY3RpdmVUYWIiLCJpZHgiLCJtYXBEYXRhIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJ1dHRvblN3aXRjaGVyIiwiYnV0dG9ucyIsInRhYkxheWVycyIsInJlZ3VsYXJCdXR0b24iLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJzZXRBY3RpdmVUYWIiLCJwdXNoIiwiaW5kZXgiLCJpY29uQ29kZSIsImF3ZXNvbWVJY29uIiwidGFicyIsInRhYkNhbGxiYWNrIiwidGFiU3RhdGVzIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJsYWJlbCIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsInN0eWxlIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwic3R5bGVTaGVldCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInNldE9wZW5Db21wb25lbnQiLCJzbGlkZUluQ29sbGlkaW5nRWxlbWVudHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNhY2hpbmciLCJwYW5lbFZhbCIsInV0aWxzIiwiZ2V0VmFsdWUiLCJjb25zdHJ1Y3RvciIsInN0b3JlVmFsdWUiLCJDNGdTdGFyYm9hcmRTdHlsZSIsInN0eWxlVHJpZ2dlckxhYmVsIiwic3R5bGVJZCIsImxvY1N0eWxlQXJyIiwic3R5bG9yIiwiRmVhdHVyZSIsImdlb21ldHJ5IiwiUG9pbnQiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJzdHlsZUljb24iLCJpY29uU3JjIiwiaWNvbl9zcmMiLCJzdmdTcmMiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlSW1hZ2UiLCJnZXRJbWFnZSIsImdldFNyYyIsImNsaWNrRXZlbnQiLCJ0b29sdGlwIiwiU1RBUkJPQVJEX0xPQ1NUWUxFIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1BPSU5UIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRSIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TVEFSIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1giLCJTVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1MiLCJTVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEUiLCJjb2xvciIsImJvcmRlcmNvbG9yIiwiZ2V0RmlsbCIsImdldFN0cm9rZSIsImdldENvbG9yIiwiZmlsbGNvbG9yIiwic3Ryb2tlY29sb3IiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFDQTs7SUFBWUEsUTs7QUFDWjs7QUFDQTs7QUFDQTs7Ozs7Ozs7OzsrZUFqQkE7Ozs7Ozs7Ozs7Ozs7SUFtQmFDLHdCLFdBQUFBLHdCOzs7QUFFWCxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9KQUNYQSxLQURXOztBQUVqQixRQUFNQyxhQUFOOztBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxX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QUFXZ04sVUFBWCxJQUF5QixLQUFLaE4sS0FBTCxDQUFXaU4sT0FBeEMsRUFBaUQ7QUFDN0NwQix3Q0FBb0Isd0NBQU0sV0FBVzNILFFBQWpCLEVBQTJCLE9BQU8rSixhQUFsQyxFQUFpRCxPQUFPLEtBQUtqTyxLQUFMLENBQVdpTixPQUFuRSxFQUE0RSxXQUFXLG1CQUFDaEosS0FBRDtBQUFBLG1DQUFVLE9BQUtqRSxLQUFMLENBQVdnTixVQUFYLENBQXNCL0ksS0FBdEIsQ0FBVjtBQUFBLHlCQUF2RixHQUFwQjtBQUNILGlCQUZELE1BR0s7QUFDRDRILHdDQUFvQix3Q0FBTSxXQUFXM0gsUUFBakIsRUFBMkIsT0FBTytKLGFBQWxDLEdBQXBCO0FBQ0g7QUFDSjtBQUNELG1CQUFPcEMsaUJBQVA7QUFDSDs7OztFQXRGa0N2RyxnQiIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0S8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgb2xFeHRlbnQgZnJvbSBcIm9sL2V4dGVudFwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge0M0Z1N0YXJib2FyZFN0eWxlfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLXN0eWxlXCI7XG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMubGF5ZXJDbGljayA9IHRoaXMubGF5ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGF5ZXJab29tVG8gPSB0aGlzLmxheWVyWm9vbVRvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcGFuQ2xpY2sgPSB0aGlzLnNwYW5DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFyZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudENhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIHNob3dMYXllcihzaG93RWxlbWVudHMgPSBudWxsKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBmZWF0dXJlcyA9IGZhbHNlO1xuICAgIGxldCB2ZWN0b3JMYXllciA9IGZhbHNlO1xuICAgIGlmIChzaG93RWxlbWVudHMpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNob3dFbGVtZW50cykpIHtcbiAgICAgICAgZmVhdHVyZXMgPSBzaG93RWxlbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKHNob3dFbGVtZW50cyBpbnN0YW5jZW9mIFZlY3Rvcikge1xuICAgICAgICB2ZWN0b3JMYXllciA9IHNob3dFbGVtZW50cztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSBmZWF0dXJlcyB8fCBzY29wZS5wcm9wcy5sYXllci5mZWF0dXJlcztcbiAgICAgIHZlY3RvckxheWVyID0gdmVjdG9yTGF5ZXIgfHwgc2NvcGUucHJvcHMubGF5ZXIudmVjdG9yTGF5ZXI7XG4gICAgfVxuICAgIGZlYXR1cmVzID0gZmVhdHVyZXMgfHwgc2NvcGUucHJvcHMubGF5ZXIuZmVhdHVyZXM7XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLHNjb3BlLnByb3BzLmlkKTtcbiAgICB9IGVsc2UgaWYgKHZlY3RvckxheWVyKXtcbiAgICAgIGxheWVyQ29udHJvbGxlci5zaG93KHNjb3BlLnByb3BzLmxheWVyLmxvYWRlciwgdmVjdG9yTGF5ZXIsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuc2hvdyhmYWxzZSwgZmFsc2UsIHNjb3BlLnByb3BzLmlkKTtcbiAgICB9XG4gICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5zZXRMYXllclN0YXRlV2l0aElkKHNjb3BlLnByb3BzLmlkLCB0cnVlKVxuICB9XG5cbiAgaGlkZUxheWVyKGhpZGVFbGVtZW50cyA9IG51bGwpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGZlYXR1cmVzID0gZmFsc2U7XG4gICAgbGV0IHZlY3RvckxheWVyID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFbGVtZW50cykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlkZUVsZW1lbnRzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IGhpZGVFbGVtZW50cztcbiAgICAgIH0gZWxzZSBpZiAoaGlkZUVsZW1lbnRzIGluc3RhbmNlb2YgVmVjdG9yKSB7XG4gICAgICAgIHZlY3RvckxheWVyID0gaGlkZUVsZW1lbnRzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGZlYXR1cmVzIHx8IHNjb3BlLnByb3BzLmxheWVyLmZlYXR1cmVzO1xuICAgICAgdmVjdG9yTGF5ZXIgPSB2ZWN0b3JMYXllciB8fCBzY29wZS5wcm9wcy5sYXllci52ZWN0b3JMYXllcjtcbiAgICB9XG4gICAgbGV0IGxheWVyQ29udHJvbGxlciA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubGF5ZXJDb250cm9sbGVyO1xuICAgIGlmIChmZWF0dXJlcyAmJiBmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllckNvbnRyb2xsZXIuaGlkZShzY29wZS5wcm9wcy5sYXllci5sb2FkZXIsIGZlYXR1cmVzLCBzY29wZS5wcm9wcy5pZCk7XG4gICAgfSBlbHNlIGlmICh2ZWN0b3JMYXllcikge1xuICAgICAgbGF5ZXJDb250cm9sbGVyLmhpZGUoc2NvcGUucHJvcHMubGF5ZXIubG9hZGVyLCB2ZWN0b3JMYXllciwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxheWVyQ29udHJvbGxlci5oaWRlKGZhbHNlLCBmYWxzZSwgc2NvcGUucHJvcHMuaWQpO1xuICAgIH1cbiAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnNldExheWVyU3RhdGVXaXRoSWQoc2NvcGUucHJvcHMuaWQsIGZhbHNlKVxuICB9XG4gIGNoYW5nZUNoaWxkU3RhdGUgKGNoaWxkLCBjaGlsZFN0YXRlLCBhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNob3dMYXllcihjaGlsZC5mZWF0dXJlcyB8fCBjaGlsZC52ZWN0b3JMYXllcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTGF5ZXIoY2hpbGQuZmVhdHVyZXMgfHwgY2hpbGQudmVjdG9yTGF5ZXIpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRzICYmIGNoaWxkLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZElkIGluIGNoaWxkLmNoaWxkcykge1xuICAgICAgICBpZiAoY2hpbGQuY2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gY2hpbGRTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXS5hY3RpdmU7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZFN0YXRlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIGNoaWxkU3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0gPSB0aGlzLmNoYW5nZUNoaWxkU3RhdGUoY2hpbGQuY2hpbGRzW2NoaWxkSWRdLCBjaGlsZFN0YXRlLmNoaWxkU3RhdGVzW2NoaWxkSWRdLCBhY3RpdmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0TGF5ZXJTdGF0ZVdpdGhJZChjaGlsZFN0YXRlLmlkLCBhY3RpdmUpXG4gICAgY2hpbGRTdGF0ZS5hY3RpdmUgPSBhY3RpdmU7XG4gICAgcmV0dXJuIGNoaWxkU3RhdGU7XG4gIH1cbiAgcGFyZW50Q2FsbGJhY2sgKGtleSwgbmV3Q2hpbGRTdGF0ZSkge1xuICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMucHJvcHMubGF5ZXJTdGF0ZXM7XG4gICAgbmV3U3RhdGUuY2hpbGRTdGF0ZXNba2V5XSA9IG5ld0NoaWxkU3RhdGU7XG4gICAgaWYgKG5ld1N0YXRlLmFjdGl2ZSAhPSBuZXdDaGlsZFN0YXRlLmFjdGl2ZSkge1xuICAgICAgLy8gbmV3U3RhdGUuYWN0aXZlID0gbmV3Q2hpbGRTdGF0ZS5hY3RpdmU7XG4gICAgICBpZiAobmV3Q2hpbGRTdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrKHRoaXMucHJvcHMua2V5SWQsIG5ld1N0YXRlKVxuICB9XG4gIGxheWVyQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5ncmV5ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5zaG93TGF5ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVMYXllcigpO1xuICAgIH1cbiAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyLmNoaWxkcyAmJiB0aGlzLnByb3BzLmxheWVyLmNoaWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGF5ZXJDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXJDaGlsZHMpIHtcbiAgICAgICAgaWYgKGxheWVyQ2hpbGRzLmhhc093blByb3BlcnR5KGNoaWxkSWQpKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRDaGlsZFN0YXRlID0gbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0uYWN0aXZlO1xuICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGRTdGF0ZSAhPT0gbmV3U3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSA9IHRoaXMuY2hhbmdlQ2hpbGRTdGF0ZShsYXllckNoaWxkc1tjaGlsZElkXSwgbmV3U3RhdGUuY2hpbGRTdGF0ZXNbY2hpbGRJZF0sIG5ld1N0YXRlLmFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sodGhpcy5wcm9wcy5rZXlJZCwgbmV3U3RhdGUpXG4gIH1cbiAgbGF5ZXJab29tVG8oZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMubGF5ZXJDbGljayhlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci56b29tVG8odGhpcy5wcm9wcy5sYXllcik7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5zZXRDaGlsZEZlYXR1cmVGbGFnKHRoaXMucHJvcHMubGF5ZXIsIFwibWFya0xvY3N0eWxlXCIsIHRydWUpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2V0Q2hpbGRGZWF0dXJlRmxhZyh0aGlzLnByb3BzLmxheWVyLCBcIm1hcmtMb2NzdHlsZVwiLCBmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbiAgY2hhbmdlQ29sbGFwc2VTdGF0ZShpZCwgc3RhdGUpIHtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNoaWxkU3RhdGVzW2lkXSA9IHN0YXRlO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlQ29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmtleUlkLCB0aGlzLnByb3BzLmxheWVyU3RhdGVzKTtcbiAgfVxuICBzcGFuQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA9ICF0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGUodGhpcy5wcm9wcy5rZXlJZCwgdGhpcy5wcm9wcy5sYXllclN0YXRlcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdHlsZVBpY3R1cmUgPSBudWxsO1xuICAgIGxldCBzcGFuWm9vbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuc3RhcmJvYXJkLnNob3dMb2NzdHlsZXMgPT09IFwiMVwiICYmIHRoaXMucHJvcHMubGF5ZXIubG9jc3R5bGUgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEgJiYgdGhpcy5wcm9wcy5zdHlsZURhdGEuYXJyTG9jU3R5bGVzICYmIHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlXSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXIuYWRkWm9vbVRvKSB7XG4gICAgICAgIHN0eWxlUGljdHVyZSA9IDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXt0aGlzLnByb3BzLmxheWVyLmxvY3N0eWxlfSB0b29sdGlwPXt0aGlzLnByb3BzLmxhbmcuU1RBUkJPQVJEX0VMRU1FTlRfWk9PTX0gY2xpY2tFdmVudD17dGhpcy5sYXllclpvb21Ub30vPjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHlsZVBpY3R1cmUgPSA8QzRnU3RhcmJvYXJkU3R5bGUgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX0gc3R5bGVJZD17dGhpcy5wcm9wcy5sYXllci5sb2NzdHlsZX0vPjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8gJiYgIXRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUpIHtcbiAgICAgIHNwYW5ab29tID0gPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1nZW9qc29uLWJ1dHRvblwifSB0aXRsZT17dGhpcy5wcm9wcy5sYW5nLlNUQVJCT0FSRF9FTEVNRU5UX1pPT019IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0vPjtcbiAgICB9XG4gICAgbGV0IGNzc0NsYXNzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcy5hY3RpdmUgPyBjc3NDb25zdGFudHMuQUNUSVZFIDogY3NzQ29uc3RhbnRzLklOQUNUSVZFO1xuICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzLmdyZXllZCkge1xuICAgICAgY3NzQ2xhc3MgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuRElTQUJMRUQ7XG4gICAgfVxuICAgIGxldCBvcGVuQ2xvc2UgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzLmNvbGxhcHNlZCA/IGNzc0NvbnN0YW50cy5DTE9TRSA6IGNzc0NvbnN0YW50cy5PUEVOO1xuICAgIGxldCBvYmpDaGlsZHMgPSB0aGlzLnByb3BzLmxheWVyLmNoaWxkcztcbiAgICBsZXQgbGlua1RleHQ7XG4gICAgbGV0IGxpbmtTd2l0Y2g7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5pbnZlcnRab29tQWN0aXZhdGUgJiYgdGhpcy5wcm9wcy5sYXllci5hZGRab29tVG8pIHtcbiAgICAgIGxpbmtUZXh0ID0gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC10ZXh0XCJ9IG9uTW91c2VVcD17KGV2ZW50KSA9PiB0aGlzLmxheWVyWm9vbVRvKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICBsaW5rU3dpdGNoID0gPGEgY2xhc3NOYW1lPXtjc3NDbGFzcyArIFwiIGM0Zy1zdGFyYm9hcmQtY2hlY2tib3gtaWNvblwifSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+PC9hPlxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGlua1RleHQgPSA8YSBjbGFzc05hbWU9e2Nzc0NsYXNzfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5sYXllckNsaWNrKGV2ZW50KX0+e3RoaXMucHJvcHMubGF5ZXIubmFtZX08L2E+O1xuICAgIH1cblxuICAgIGlmIChvYmpDaGlsZHMgJiYgb2JqQ2hpbGRzLmxlbmd0aCkge1xuICAgICAgbGV0IHNwYW4gPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5JQ09OfSBvbk1vdXNlVXA9eyhldmVudCkgPT4gdGhpcy5zcGFuQ2xpY2soZXZlbnQpfS8+O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuQ2xvc2UgKyBcIiBjNGctc3RhcmJvYXJkLWxpc3QtZWxlbWVudFwifT5cbiAgICAgICAgICB7c3Bhbn1cbiAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgIHtzcGFuWm9vbX1cbiAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge29iakNoaWxkcy5tYXAoKGl0ZW0sIGlkKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJ5UGFzc0NoaWxkcyB8fCB0aGlzLnByb3BzLmZpbHRlckZ1bmModGhpcy5wcm9wcy5zdHJGaWx0ZXIsIGl0ZW0sIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50IGtleT17aWR9IGtleUlkPXtpZH0gaWQ9e2l0ZW0uaWR9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyRmlsdGVyPXt0aGlzLnByb3BzLnN0ckZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckZ1bmM9e3RoaXMucHJvcHMuZmlsdGVyRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbGxhcHNlU3RhdGU9e3RoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMucHJvcHMubGFuZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5wcm9wcy5ieVBhc3NDaGlsZHMgfHwgdGhpcy5wcm9wcy5maWx0ZXJGdW5jKHRoaXMucHJvcHMuc3RyRmlsdGVyLCBpdGVtLCBmYWxzZSwgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3RoaXMucHJvcHMubGF5ZXJTdGF0ZXMuY2hpbGRTdGF0ZXNbaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5SZXNpemU9e3RoaXMucHJvcHMuZm5SZXNpemV9Lz5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc3Bhblpvb20gPSBudWxsO1xuICAgICAgbGV0IGxheWVyQ2xpY2sgPSB0aGlzLmxheWVyQ2xpY2s7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllci56b29tVG8pIHtcbiAgICAgICAgbGF5ZXJDbGljayA9IHRoaXMubGF5ZXJab29tVG87XG4gICAgICAgIGNzc0NsYXNzID0gXCJjNGctZ2VvanNvbi1idXR0b25cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17b3BlbkNsb3NlICsgXCIgYzRnLXN0YXJib2FyZC1saXN0LWVsZW1lbnRcIn0+XG4gICAgICAgICAgICB7c3R5bGVQaWN0dXJlfVxuICAgICAgICAgICAge3NwYW5ab29tfVxuICAgICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICAgICAge2xpbmtTd2l0Y2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgICAgICA2XG4gKiBAYXV0aG9yICBcdCAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIFx0ICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IFx0ICAgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtY29uc3RhbnQuanNcIjtcbmltcG9ydCB7QzRnU3RhcmJvYXJkTGF5ZXJFbGVtZW50fSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXJib2FyZExheWVyc3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcblxuICAgIHRoaXMuc2V0TGF5ZXJGaWx0ZXIgPSB0aGlzLnNldExheWVyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBbGxMYXllcnMgPSB0aGlzLnRvZ2dsZUFsbExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZSA9IHRoaXMuY2hhbmdlQ29sbGFwc2VTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBsYXllckZpbHRlcjogXCJcIlxuICAgIH07XG4gICAgLy8gdGhpcy5idXR0b25FbmFibGVkID0gdGhpcy5nZXRJbml0aWFsU3RhdGVzKCk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGVzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPZmYgPSAwO1xuICAgIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA9IDA7XG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnByb3BzLmxheWVyU3RhdGVzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT24rKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxDb3VudGVyT2ZmKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMucHJvcHMubGF5ZXJTdGF0ZXNbaV0uY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxheWVyU3RhdGVzW2ldLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlQ2hpbGQodGhpcy5wcm9wcy5sYXllclN0YXRlc1tpXS5jaGlsZFN0YXRlc1tqXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvdW50ZXJPbiA+IHRoaXMuaW5pdGlhbENvdW50ZXJPZmY7XG4gIH1cbiAgZ2V0SW5pdGlhbFN0YXRlQ2hpbGQgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9uKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsQ291bnRlck9mZisrO1xuICAgIH1cbiAgICBpZiAoY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgIGZvciAobGV0IGkgaW4gY2hpbGQuY2hpbGRTdGF0ZXMpIHtcbiAgICAgICAgaWYgKGNoaWxkLmNoaWxkU3RhdGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGVDaGlsZChjaGlsZC5jaGlsZFN0YXRlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxsYmFja0Z1bmN0aW9uID0gKGtleSwgbmV3U3RhdGUpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVzID0gdGhpcy5wcm9wcy5sYXllclN0YXRlcztcbiAgICBuZXdTdGF0ZXNba2V5XSA9IG5ld1N0YXRlO1xuICAgIHRoaXMucHJvcHMucGFyZW50Q2FsbGJhY2sobmV3U3RhdGVzKVxuICB9O1xuXG4gIHNldExheWVyRmlsdGVyKCkge1xuICAgIGxldCBmaWx0ZXJWYWx1ZSA9IGpRdWVyeShcIi5jNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIikudmFsKCkgfHwgXCJcIjsgLy9mYWxsYmFja1xuICAgIHRoaXMuc2V0U3RhdGUoe2xheWVyRmlsdGVyOiBmaWx0ZXJWYWx1ZX0pO1xuICB9XG5cbiAgZmlsdGVyRnVuYyhzdHJGaWx0ZXIsIGxheWVyLCBzdGF0ZSA9IHt9LCBkaWdEZWVwZXIgPSB0cnVlKSB7XG4gICAgbGV0IHNob3cgPSBmYWxzZTtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIubmFtZSAmJiAobGF5ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyRmlsdGVyLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxuICAgICAgICB8fCBsYXllci5uYW1lLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9VcHBlckNhc2UoKSkgIT09IC0xKSkge1xuICAgICAgc2hvdyA9IHRydWU7XG4gICAgICBpZiAoc3RyRmlsdGVyICYmIHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihsYXllci50YWdzICYmIGxheWVyLnRhZ3MuZmluZCgoZWxlbWVudCkgPT4ge3JldHVybiBlbGVtZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJGaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xfSkpe1xuICAgICAgc2hvdyA9IHRydWVcbiAgICAgIGlmIChzdHJGaWx0ZXIgJiYgc3RhdGUpIHtcbiAgICAgICAgc3RhdGUuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWdEZWVwZXIpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkSWQgaW4gbGF5ZXIuY2hpbGRzKSB7XG4gICAgICAgIGlmIChsYXllci5jaGlsZHMuaGFzT3duUHJvcGVydHkoY2hpbGRJZCkgJiYgIXNob3cpIHtcbiAgICAgICAgICBzaG93ID0gdGhpcy5maWx0ZXJGdW5jKHN0ckZpbHRlciwgbGF5ZXIuY2hpbGRzW2NoaWxkSWRdLCBzdGF0ZS5jaGlsZFN0YXRlc1tjaGlsZElkXSk7XG4gICAgICAgICAgaWYgKHN0ckZpbHRlciAmJiBzaG93ICYmIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3c7XG4gIH1cblxuICB0b2dnbGVBbGxMYXllcnMoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzdGF0ZXNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuc2hvdyhsYXllcnNbaV0ubG9hZGVyLCBsYXllcnNbaV0uZmVhdHVyZXMgfHwgbGF5ZXJzW2ldLnZlY3RvckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVyc1tpXS5jaGlsZHMsIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjb3BlLmJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5oaWRlKGxheWVyc1tpXS5sb2FkZXIsIGxheWVyc1tpXS5mZWF0dXJlcyB8fCBsYXllcnNbaV0udmVjdG9yTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0YXRlc1tpXS5jaGlsZFN0YXRlcyAmJiBzdGF0ZXNbaV0uY2hpbGRTdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHN0YXRlc1tpXS5jaGlsZFN0YXRlcyA9IGRlYWN0aXZhdGVMYXllcnMobGF5ZXJzW2ldLmNoaWxkcywgc3RhdGVzW2ldLmNoaWxkU3RhdGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2NvcGUuYnV0dG9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG5cbiAgICBpZiAoIXNjb3BlLmJ1dHRvbkVuYWJsZWQpIHtcbiAgICAgIHN0YXRlcyA9IGFjdGl2YXRlTGF5ZXJzKGxheWVycywgc3RhdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZGVhY3RpdmF0ZUxheWVycyhsYXllcnMsIHN0YXRlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5wYXJlbnRDYWxsYmFjayhzdGF0ZXMpO1xuICB9XG4gIGNoYW5nZUNvbGxhcHNlU3RhdGUoaWQsIHN0YXRlKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGF5ZXJTdGF0ZXMgJiYgdGhpcy5wcm9wcy5sYXllclN0YXRlcy5sZW5ndGggPiAwICYmICEodGhpcy5pbml0aWFsQ291bnRlck9mZiAmJiB0aGlzLmluaXRpYWxDb3VudGVyT24pKSB7XG4gICAgICB0aGlzLmJ1dHRvbkVuYWJsZWQgPSB0aGlzLmdldEluaXRpYWxTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgbGF5ZXJzLCBzdGF0ZXMsIGZpbHRlcjtcbiAgICBsYXllcnMgPSB0aGlzLnByb3BzLm9iakxheWVycztcbiAgICBzdGF0ZXMgPSB0aGlzLnByb3BzLmxheWVyU3RhdGVzO1xuICAgIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZpbHRlciA9ICcnO1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5sYXllcnN3aXRjaGVyLmZpbHRlcikge1xuICAgICAgZmlsdGVyID0gPGRpdiBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC1sYXllcnRyZWUtZmlsdGVyIHdpdGhvdXQtYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLWxheWVydHJlZS1maWx0ZXItZmllbGRcIn0gdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLnNldExheWVyRmlsdGVyfSBwbGFjZWhvbGRlcj17XCJcXHVmMDAyXCJ9Lz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGxldCBoZWFkbGluZSA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnN0YXJib2FyZC5idXR0b24pIHtcbiAgICAgIGhlYWRsaW5lID0gPGEgY2xhc3NOYW1lPXtcImM0Zy1zdGFyYm9hcmQtaGVhZGxpbmUtbGluayBcIiArICh0aGlzLmJ1dHRvbkVuYWJsZWQgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9e3RoaXMudG9nZ2xlQWxsTGF5ZXJzfT57dGhpcy5wcm9wcy5oZWFkbGluZSB8fCB0aGlzLnByb3BzLmxhbmcuTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMfTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRsaW5lID0gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50SGVhZGxpbmVcIj57dGhpcy5wcm9wcy5oZWFkbGluZX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZGxpbmV9XG4gICAgICB7ZmlsdGVyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWNvbnRlbnQtbGF5ZXJ0cmVlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MQVlFUlRSRUV9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtsYXllcnMubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sIHN0YXRlc1tpZF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDNGdTdGFyYm9hcmRMYXllckVsZW1lbnQga2V5PXtpZH0ga2V5SWQ9e2lkfSBpZD17aXRlbS5pZH0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENhbGxiYWNrPXt0aGlzLmNhbGxiYWNrRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVEYXRhPXt0aGlzLnByb3BzLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb2xsYXBzZVN0YXRlPXt0aGlzLnByb3BzLmNoYW5nZUNvbGxhcHNlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdGF0ZXM9e3N0YXRlc1tpZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5wcm9wcy5sYW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5UGFzc0NoaWxkcz17dGhpcy5maWx0ZXJGdW5jKHRoaXMuc3RhdGUubGF5ZXJGaWx0ZXIsIGl0ZW0sZmFsc2UsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJGaWx0ZXI9e3RoaXMuc3RhdGUubGF5ZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRnVuYz17dGhpcy5maWx0ZXJGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuUmVzaXplPXt0aGlzLnByb3BzLmZuUmVzaXplfS8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICBcdCAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHQgICAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTdGFyYm9hcmRMYXllcnN3aXRjaGVyfSBmcm9tIFwiLi9jNGctc3RhcmJvYXJkLWxheWVyc3dpdGNoZXJcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhclwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJib2FyZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfU1RBUkJPQVJEO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctc3RhcmJvYXJkLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgXCI7XG4gICAgaWYgKHByb3BzLm9wZW4pIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctY2xvc2VcIjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV4dGVybmFsKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBjNGctZXh0ZXJuYWxcIjtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5ob3Jpem9udGFsUGFuZWwgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzID0gdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNpemVGdW5jdGlvbiA9IHRoaXMucmVzaXplRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU3R5bGluZ0Zvckljb24gPSB0aGlzLmNyZWF0ZVN0eWxpbmdGb3JJY29uLmJpbmQodGhpcyk7XG4gICAgLy8gc3RhdGUgdmFyaWFibGVzIChldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBpbmZsdWVuY2Ugb24gdGhpcyBjb21wb25lbnQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGVpdGhlciBcInRvcFwiIG9yIFwiYm90dG9tXCJcbiAgICAgIGRpcmVjdGlvbjogcHJvcHMuZGlyZWN0aW9uIHx8IFwicmlnaHRcIixcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImM0Zy1zdGFyYm9hcmQtcGFuZWxcIixcbiAgICAgIGNoaWxkczogcHJvcHMuY2hpbGRzIHx8IFtdLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIGFjdGl2ZVRhYjogMFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGlkeCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogaWR4fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGNvbnN0IG1hcERhdGEgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5jbGFzc05hbWUgKyBcIi1cIiArIHRoaXMuc3RhdGUuZGlyZWN0aW9uO1xuICAgIGNsYXNzTmFtZSArPSBcIiBcIiArICh0aGlzLnN0YXRlLm9wZW4gPyBcImM0Zy1vcGVuXCIgOiBcImM0Zy1jbG9zZVwiKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1dHRvblN3aXRjaGVyID0gXCJcIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcmVndWxhckJ1dHRvbiA9IDxidXR0b24ga2V5PXt0aGlzLnByb3BzLnRhYkxheWVycy5sZW5ndGh9IHRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSfSBjbGFzc05hbWU9e1wiYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlclwifSBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoMCl9fS8+O1xuICAgICAgYnV0dG9ucy5wdXNoKHJlZ3VsYXJCdXR0b24pO1xuICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucHJvcHMudGFiTGF5ZXJzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgIGxldCBpY29uQ29kZSA9IGVsZW1lbnQuYXdlc29tZUljb247XG4gICAgICAgICAgc2NvcGUuY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KTtcbiAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSB0aXRsZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci10YWItXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHtzY29wZS5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKX19Lz47XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgYnV0dG9uU3dpdGNoZXIgPSA8ZGl2IGNsYXNzTmFtZT17XCJjNGctc3RhcmJvYXJkLXN3aXRjaGVyXCJ9PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICBsZXQgdGFicyA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudGFiTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYnMgPSA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhYkxheWVycy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gPFN0YXJib2FyZExheWVyc3dpdGNoZXIga2V5PXtpbmRleH0gbWFwQ29udHJvbGxlcj17c2NvcGUucHJvcHMubWFwQ29udHJvbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqTGF5ZXJzPXtzY29wZS5wcm9wcy50YWJMYXllcnNbaW5kZXhdfSBwYXJlbnRDYWxsYmFjaz17c2NvcGUucHJvcHMudGFiQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyU3RhdGVzPXtzY29wZS5wcm9wcy50YWJTdGF0ZXN9IG9wZW5mdW5jPXtzY29wZS5vcGVufSBoZWFkbGluZT17ZWxlbWVudFswXS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzY29wZS5zdGF0ZS5vcGVufSBhY3RpdmU9eyhpbmRleCArIDEpID09PSBzY29wZS5zdGF0ZS5hY3RpdmVUYWJ9Lz47XG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9XUkFQUEVSfT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctc3RhcmJvYXJkLWhlYWRlclwifSBoZWFkZXJDbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9IRUFETElORX1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17bWFwRGF0YS5zdGFyYm9hcmQubGFiZWwgfHwgdGhpcy5sYW5nQ29uc3RhbnRzLlNUQVJCT0FSRH0gY2xvc2VCdG5DbGFzcz17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9DTE9TRX0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX1cbiAgICAgICAgICAgICAgICAgIGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIHtidXR0b25Td2l0Y2hlcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVJ9PlxuICAgICAgICAgIDxTdGFyYm9hcmRMYXllcnN3aXRjaGVyIGtleT17dGhpcy5wcm9wcy50YWJMYXllcnMubGVuZ3RofSBtYXBDb250cm9sbGVyID17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakxheWVycz17dGhpcy5wcm9wcy5vYmpMYXllcnN9IHN0eWxlRGF0YT17dGhpcy5wcm9wcy5zdHlsZURhdGF9IHBhcmVudENhbGxiYWNrPXt0aGlzLnByb3BzLnBhcmVudENhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclN0YXRlcz17dGhpcy5wcm9wcy5sYXllclN0YXRlc30gY2hhbmdlQ29sbGFwc2VTdGF0ZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xsYXBzZVN0YXRlfSBvcGVuZnVuYz17dGhpcy5vcGVufSBoZWFkbGluZT17bWFwRGF0YS5sYXllcnN3aXRjaGVyLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IGFjdGl2ZT17c2NvcGUuc3RhdGUuYWN0aXZlVGFiID09PSAwfS8+XG4gICAgICAgICAge3RhYnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlU3R5bGluZ0Zvckljb24oaWNvbkNvZGUsIGluZGV4KSB7XG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIC8vIHdlYmtpdCBoYWNrOlxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKFwiYnV0dG9uLmM0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLXRhYi1cIiArIGluZGV4ICsgXCI6YmVmb3JlIHtcXG5cIiArXG4gICAgICBcIiAgY29udGVudDogXFxcIlxcXFxcIiArIGljb25Db2RlICsgXCJcXFwiO1xcblwiICtcbiAgICAgIFwiICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcblwiICtcbiAgICAgIFwiICBmb250LXdlaWdodDogOTAwO1xcblwiICtcbiAgICAgIFwiICBmb250LXNpemU6IGluaGVyaXQ7XFxuXCIgK1xuICAgICAgXCJ9XCIpXG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB0aGlzLnNsaWRlT3V0Q29sbGlkaW5nRWxlbWVudHMoKSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0sICgpID0+IHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCkpO1xuICB9XG5cbiAgcmVzaXplRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBzY29wZS5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5zbGlkZU91dENvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVJbkNvbGxpZGluZ0VsZW1lbnRzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbnMgdGhhdCB3b3VsZCBjb2xsaWRlIHdpdGggdGhlIHBhbmVsLlxuICAgKi9cbiAgc2xpZGVPdXRDb2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmRvZXMgdGhlIHByZXZpb3VzIGJ1dHRvbiBtb3ZlbWVudC5cbiAgICovXG4gIHNsaWRlSW5Db2xsaWRpbmdFbGVtZW50cygpIHtcbiAgICBqUXVlcnkoXCIuYzRnLXN0YXJib2FyZC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLWNvbnN0YW50LmpzXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgQzRnU3RhcmJvYXJkU3R5bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxhYmVsIGZvciBpbnRlcmFjdGlvbi10cmlnZ2VyXG4gICAgICAgIGxldCBzdHlsZVRyaWdnZXJMYWJlbCA9IG51bGw7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGVEYXRhLmFyckxvY1N0eWxlc1t0aGlzLnByb3BzLnN0eWxlSWRdO1xuICAgICAgICBsZXQgc3R5bGVEYXRhID0gbG9jc3R5bGUubG9jU3R5bGVBcnI7XG4gICAgICAgIGxldCBzdHlsb3IgPSBsb2NzdHlsZS5zdHlsZSAmJiBsb2NzdHlsZS5zdHlsZShuZXcgRmVhdHVyZSh7Z2VvbWV0cnk6IG5ldyBQb2ludCgwLDApfSksIFwiRVBTRzo0MzI2XCIpID8gbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKTogbnVsbDtcbiAgICAgICAgbGV0IHN0eWwwciA9IEFycmF5LmlzQXJyYXkoc3R5bG9yKSA/IHN0eWxvclswXTogc3R5bG9yO1xuICAgICAgICBsZXQgc3R5bGVUeXBlID0gc3R5bGVEYXRhID8gc3R5bGVEYXRhLnN0eWxldHlwZSA6IFwiZGVmYXVsdFwiO1xuICAgICAgICBpZiAoc3R5bGVEYXRhICYmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiB8fCBzdHlsZVR5cGUgPT09IFwicGhvdG9cIikpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZUljb24gPSBudWxsO1xuICAgICAgICAgICAgbGV0IGljb25TcmM7XG4gICAgICAgICAgICBpZiAoKHN0eWxlRGF0YS5pY29uX3NyYyAmJiBzdHlsZURhdGEuaWNvbl9zcmMuaW5kZXhPZignLicpICE9PSAtMSkgfHwgKHN0eWxlRGF0YS5zdmdTcmMgJiYgc3R5bGVEYXRhLnN2Z1NyYy5pbmRleE9mKCcuJykgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZVR5cGUgPT09IFwiY3VzdF9pY29uXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvblNyYyA9IHN0eWxlRGF0YS5pY29uX3NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuc3ZnU3JjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17aWNvblNyY30gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fSAvPjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bDByKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlSW1hZ2UgPSBzdHlsMHIuZ2V0SW1hZ2UgJiYgdHlwZW9mIHN0eWwwci5nZXRJbWFnZSA9PT0gXCJmdW5jdGlvblwiICYmIHN0eWwwci5nZXRJbWFnZSgpID8gc3R5bDByLmdldEltYWdlKCk6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlSW1hZ2UgJiYgc3R5bGVJbWFnZS5nZXRTcmMoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZUljb24gPSA8aW1nIHNyYz17c3R5bGVJbWFnZS5nZXRTcmMoKX0gc3R5bGU9e3toZWlnaHQ6IDI1LCB3aWR0aDogMjV9fS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50ICYmIHRoaXMucHJvcHMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFfSB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfT57c3R5bGVJY29ufTwvc3Bhbj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgICAgICAgc3dpdGNoIChzdHlsZVR5cGUpIHsgLy8gJ3BvaW50JywgJ3NxdWFyZScsICdzdGFyJywgJ3gnLCAnY3Jvc3MnLCAndHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1FVQVJFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfU1RBUjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1g7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfQ1JPU1M7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfVFJJQU5HTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjb2xvciwgYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBpZiAoc3R5bDByICYmIHN0eWwwci5nZXRGaWxsKCkgJiYgc3R5bDByLmdldFN0cm9rZSgpKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBzdHlsMHIuZ2V0RmlsbCgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3IgPSBzdHlsMHIuZ2V0U3Ryb2tlKCkuZ2V0Q29sb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0eWxlRGF0YSAmJiBzdHlsZURhdGEuZmlsbGNvbG9yICYmIHN0eWxlRGF0YS5zdHJva2Vjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5maWxsY29sb3JbMF0sIHN0eWxlRGF0YS5maWxsY29sb3JbMV0pO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gdXRpbHMuZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5KHN0eWxlRGF0YS5zdHJva2Vjb2xvclswXSwgc3R5bGVEYXRhLnN0cm9rZWNvbG9yWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHN0eWxlRWxlbWVudHMgPSB7XG4gICAgICAgICAgICAgICAgXCItLXZhci1jb2xvclwiIDogY29sb3IsXG4gICAgICAgICAgICAgICAgXCItLXZhci1ib3JkZXJjb2xvclwiIDogYm9yZGVyY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGlja0V2ZW50ICYmIHRoaXMucHJvcHMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHN0eWxlVHJpZ2dlckxhYmVsID0gPHNwYW4gY2xhc3NOYW1lPXtjc3NDbGFzc30gc3R5bGU9e3N0eWxlRWxlbWVudHN9IHRpdGxlPXt0aGlzLnByb3BzLnRvb2x0aXB9IG9uTW91c2VVcD17KGV2ZW50KT0+IHRoaXMucHJvcHMuY2xpY2tFdmVudChldmVudCl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVRyaWdnZXJMYWJlbDtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9