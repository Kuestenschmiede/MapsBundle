"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-editor-component_jsx"],{

/***/ "./src/Resources/public/js/c4g-editor-i18n-de.js":
/*!*******************************************************!*\
  !*** ./src/Resources/public/js/c4g-editor-i18n-de.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.projectEditorLang = void 0;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var projectEditorLang = exports.projectEditorLang = {
  LANG: 'de',
  METADATA_EDIT: "Metadaten bearbeiten",
  DUPLICATE_ELEMENT: "Element duplizieren",
  DISPLACE_ELEMENT: "Element in anderes Projekt verschieben",
  DUPLICATE_AND_DELETE: "Element duplizieren & in anderes Projekt verschieben",
  CHOOSE_PROJECT: "Wähle ein Projekt ...",
  EDITOR_FEATURE_DELETE_HEADLINE: "Element löschen",
  EDITOR_FEATURE_DELETE_QUESTION: "Wollen Sie das Element wirklich löschen?",
  ROTATE_ELEMENT: "Element rotieren",
  DESELECT_ELEMENT: "Element-Auswahl aufheben",
  REVERT_ELEMENT: "Letzte Version wiederherstellen",
  CONFIRM_DELETE_ALL: "Wollen Sie die ausgewählten Elemente wirklich löschen?",
  BUTTON_DESELECT_ALL: "Auswahl für alle aufheben",
  BUTTON_DELETE_ALL: "Ausgewählte Elemente löschen",
  BUTTON_DISPLACE_ALL: "Ausgewählte Elemente in anderes Projekt verschieben",
  BUTTON_CONFIRM: "Bestätigen",
  BUTTON_CANCEL: "Abbrechen",
  BUTTON_COPY_DISPLACE_ALL: "Ausgewählte Elemente kopieren und in anderes Projekt verschieben",
  BUTTON_TRANSLATE_ALL: "Ausgewählte Elemente auf der Karte verschieben",
  BUTTON_APPLY_TRANSLATE: "Änderungen übernehmen",
  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
  EDITOR_FEATURE_APPLY: 'Editieren beenden',
  EDITOR_FEATURE_DELETE: 'Aktives Element löschen',
  EDITOR_FEATURE_MODIFY: 'Elemente editieren',
  EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
  EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Punktwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand zeichnen',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',
  CTRL_EDITOR: 'Editor ein-/ausblenden',
  EDITOR_API_ERROR_TITLE: 'Es ist ein Fehler aufgetreten',
  NONE: '' // last line
};

/***/ }),

/***/ "./src/Resources/public/js/c4g-editor-i18n.js":
/*!****************************************************!*\
  !*** ./src/Resources/public/js/c4g-editor-i18n.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEditorLanguage = getEditorLanguage;
exports.langConstants = void 0;
var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./src/Resources/public/js/c4g-maps-constant-i18n-de.js");
var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "./src/Resources/public/js/c4g-maps-constant-i18n-en.js");
var _c4gEditorI18nDe = __webpack_require__(/*! ./c4g-editor-i18n-de */ "./src/Resources/public/js/c4g-editor-i18n-de.js");
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

var mapsLang = {};
if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData.lang === "en") {
    mapsLang = _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  }
}
function getEditorLanguage(mapData) {
  if (mapData.lang === "de") {
    return _c4gEditorI18nDe.projectEditorLang;
  } else if (mapData.lang === "en") {
    return _c4gEditorI18nDe.projectEditorLang;
  } else {
    // fallback
    return _c4gEditorI18nDe.projectEditorLang;
  }
}
var langConstants = exports.langConstants = jQuery.extend(mapsLang, _c4gEditorI18nDe.projectEditorLang);

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-editor-component.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-editor-component.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _c4gEditorI18n = __webpack_require__(/*! ./../c4g-editor-i18n */ "./src/Resources/public/js/c4g-editor-i18n.js");
var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");
var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");
var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var _coordinate = __webpack_require__(/*! ol/coordinate */ "./node_modules/ol/coordinate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
//import {EditorView} from "./c4g-editor-view.jsx";
var EditorView = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("src_Resources_public_js_c4g-popup-controller_js"), __webpack_require__.e("src_Resources_public_js_components_c4g-editor-view_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-view.jsx */ "./src/Resources/public/js/components/c4g-editor-view.jsx"));
});
var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});
var EditorComponent = exports["default"] = /*#__PURE__*/function (_Component) {
  function EditorComponent(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, EditorComponent);
    _this = _callSuper(this, EditorComponent, [props]);
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.countEditorId = _this.countEditorId.bind(_this);
    _this.addFeature = _this.addFeature.bind(_this);
    _this.removeFeature = _this.removeFeature.bind(_this);
    _this.modifyFeature = _this.modifyFeature.bind(_this);
    _this.changeJSON = _this.changeJSON.bind(_this);
    _this.props.mapController.editor = _this;
    var scope = _this;
    var element = document.createElement('div');
    var button = document.createElement('button');
    if (props.mapController.data.themeData && props.mapController.data.themeData.controlLabels) {
      var span = document.createElement('span');
      span.innerText = "Editor";
      button.appendChild(span);
    } else {
      button.title = "Editor";
    }
    element.className = "c4g-editor-control ol-unselectable ol-control c4g-close";
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      var hidden = scope.props.mapController.editorContainer.className.includes('c4g-close');
      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        } else {
          jQuery(scope.props.mapController.editorContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      } else {
        scope.open();
      }
    });
    _this.config = {};
    _this.arrLocstyles = [];
    var mapController = props.mapController;
    if (props.config) {
      _this.handleConfig(props.config);
    } else {
      _this.getConfiguration(mapController.data.feEditorProfile || mapController.data.beEditorProfile, !!mapController.data.feEditorProfile);
    }
    _this.langConstants = (0, _c4gEditorI18n.getEditorLanguage)(mapController.data);
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    control.isOpen = function () {
      return false;
    };
    if (!mapController.mapsControls.controls.editor) {
      mapController.mapsControls.controls.editor = control;
    }
    var index = mapController.arrComponents.findIndex(function (element) {
      return element.name === "editor";
    });
    mapController.arrComponents[index].control = control;
    _this.modes = ["select", "Point", "LineString", "Polygon", "Circle"];
    var features;
    if (_this.props.inputField && $(_this.props.inputField) && $(_this.props.inputField).val() && $(_this.props.inputField).val().length > 50) {
      features = $(_this.props.inputField).val();
      if (_this.rendered) {
        setTimeout(function () {
          _this.reRender();
        }, 200);
      }
    } else {
      features = '{"type": "FeatureCollection", "features": []}';
    }
    _this.state = {
      open: props.open || false,
      currentMode: "select",
      styleData: {},
      control: control,
      range: 0,
      features: features,
      editorId: 0,
      addComponents: []
    };
    _this.styleFunction = function (feature, resolution) {
      var size = false;
      var returnStyle = [];
      if (feature && feature.get && feature.get('features')) {
        var _features = feature.get('features');
        size = _features.length;
        feature = _features[0];
      }
      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      } else if (feature && feature.get && feature.get('locstyle')) {
        var locstyle = feature.get('locstyle');
        if (scope.props.mapController.proxy.locationStyleController.arrLocStyles && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle]) {
          if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].getStyleFunction();
          }
          var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          } else {
            returnStyle = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
      }
      if (returnStyle[0] && feature && feature.get('zIndex')) {
        returnStyle[0].setZIndex(feature.get('zIndex'));
      }
      return returnStyle;
    };
    _this.features = new _ol.Collection();
    _this.editorLayer = new _layer.Vector({
      source: new _source.Vector({
        format: new _format.GeoJSON()
      }),
      style: _this.styleFunction
    });
    if (_this.props.open) {
      _this.props.mapController.map.addLayer(_this.editorLayer);
    }
    return _this;
  }
  (0, _inherits2["default"])(EditorComponent, _Component);
  return (0, _createClass2["default"])(EditorComponent, [{
    key: "open",
    value: function open() {
      var _this2 = this;
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
      var layers = this.props.mapController.map.getLayers();
      var addLayer = true;
      layers.forEach(function (element, index, array) {
        if (element === _this2.editorLayer) {
          addLayer = false;
        }
      });
      if (addLayer) {
        this.props.mapController.map.addLayer(this.editorLayer);
      }
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
      //    this.props.mapController.map.removeLayer(this.editorLayer);
      this.setState({
        open: false
      });
    }
  }, {
    key: "countEditorId",
    value: function countEditorId() {
      var newCount = this.state.editorId + 1;
      this.setState({
        editorId: newCount
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration(id) {
      var _this3 = this;
      var frontend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var url;
      if (frontend) {
        url = "con4gis/editorService/" + id;
      } else {
        url = "con4gis/editorServiceBackend/" + id;
      }
      fetch(url).then(function (response) {
        response.json().then(function (json) {
          _this3.handleConfig(json);
        });
      });
    }
  }, {
    key: "handleConfig",
    value: function handleConfig(json) {
      var _this4 = this;
      for (var i in json.drawStyles) {
        if (json.drawStyles.hasOwnProperty(i)) {
          this.config[i] = [];
          var drawStyle = json.drawStyles[i];
          var _loop = function _loop() {
            if (drawStyle.elements.hasOwnProperty(j)) {
              var element = drawStyle.elements[j];
              _this4.config[i].push(element);
              var checkLocstyle = _this4.arrLocstyles.findIndex(function (locstyle) {
                return locstyle === element.styleId;
              });
              if (checkLocstyle === -1 && element.styleId) {
                _this4.arrLocstyles.push(element.styleId);
              }
            }
          };
          for (var j in drawStyle.elements) {
            _loop();
          }
        }
      }
      this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles, {
        "done": function done(styleData) {
          _this4.setState({
            styleData: styleData
          });
        }
      });
    }
  }, {
    key: "reRender",
    value: function reRender() {
      try {
        if (this.state.features.length > 50) {
          // replace html special chars in geojson string
          this.state.features = this.state.features.replaceAll('&#34;', '"');
          this.linkInput();
          var geojson = JSON.parse(this.state.features);
          var features = new _format.GeoJSON({
            featureProjection: "EPSG:3857"
          }).readFeatures(geojson);
          var source = this.editorLayer.getSource();
          source.forEachFeature(function (feature) {
            source.removeFeature(feature);
          });
          for (var i in features) {
            if (features.hasOwnProperty(i)) {
              var jsonFeature = features[i];
              if (jsonFeature.get('radius')) {
                jsonFeature.setGeometry(new _geom.Circle(jsonFeature.getGeometry().getCoordinates(), jsonFeature.get('radius')));
              }
              source.addFeature(jsonFeature);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
      if (this.state.range) {
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var startContainer = range.startContainer.childNodes[0] || range.startContainer;
        range.setStart(startContainer, this.state.range);
        range.setEnd(startContainer, this.state.range);
        selection.removeRange(range);
        selection.addRange(range);
      }
    }
  }, {
    key: "changeJSON",
    value: function changeJSON(event) {
      var _this5 = this;
      var range = window.getSelection().getRangeAt(0).startOffset;
      this.setState({
        features: event.target.innerText,
        range: range
      }, function () {
        _this5.reRender();
      });
    }
  }, {
    key: "addFeature",
    value: function addFeature(feature) {
      var _this6 = this;
      var arrFeatures = JSON.parse(this.state.features);
      arrFeatures.features.push(feature);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      }, function () {
        _this6.linkInput();
      });
    }
  }, {
    key: "removeFeature",
    value: function removeFeature(geojson) {
      var _this7 = this;
      var editorId = geojson.properties.editorId;
      var arrFeatures = JSON.parse(this.state.features);
      var featureId = arrFeatures.features.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      arrFeatures.features.splice(featureId, 1);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      }, function () {
        _this7.linkInput();
      });
      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_remove, geojson);
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(geojson) {
      var _this8 = this;
      var editorId = geojson.properties.editorId;
      var objGeojson = JSON.parse(this.state.features);
      var arrFeatures = objGeojson.features;
      var featureId = arrFeatures.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      objGeojson.features[featureId] = geojson;
      var features = JSON.stringify(objGeojson, null, 2);
      this.setState({
        features: features
      }, function () {
        _this8.linkInput();
      });
    }
  }, {
    key: "linkInput",
    value: function linkInput() {
      if (this.props.inputField && $(this.props.inputField) && this.state.features.length > 50) {
        $(this.props.inputField).val(this.state.features); //link to inputField
      }
    }
  }, {
    key: "setAddComps",
    value: function setAddComps(conststr, config) {
      this.setState({
        config: config,
        conststr: conststr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      var addComps;
      if (this.state.conststr) {
        addComps = /*#__PURE__*/_react["default"].createElement(this.state.conststr, {
          config: this.state.config,
          get: _proj.get,
          transform: _proj.transform,
          toStringHDMS: _coordinate.toStringHDMS,
          source: this.editorLayer.getSource(),
          format: new _format.GeoJSON()
        });
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, (0, _defineProperty2["default"])({
        wrapperClass: "c4g-editor-header",
        headerClass: "c4g-editor-headline",
        hideContainer: ".c4g-editor-container-right",
        header: this.langConstants.EDITOR,
        closeBtnTitle: this.langConstants.CTRL_EDITOR,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close
      }, "closeBtnTitle", this.langConstants.CLOSE))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-mode-switcher"
      }, this.modes.map(function (element, index) {
        if (element === "select" || scope.config[element] && scope.config[element].length > 0) {
          var title = scope.langConstants["EDITOR_VIEW_TRIGGER_DRAW_" + element.toUpperCase()];
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            className: "c4g-editor-" + element + "  " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
            title: title,
            onMouseUp: function onMouseUp() {
              return scope.setState({
                currentMode: element
              });
            }
          });
        } else {
          return null;
        }
      })), /*#__PURE__*/_react["default"].createElement(EditorView, {
        className: "c4g-editor-view",
        styleFunction: this.styleFunction,
        mode: this.state.currentMode,
        styleData: this.state.styleData,
        elements: this.config[this.state.currentMode] ? this.config[this.state.currentMode] : [],
        active: this.state.open,
        features: this.features,
        editorVars: this.props.config.editorVars,
        removeFeature: this.removeFeature,
        modifyFeature: this.modifyFeature,
        addFeature: this.addFeature,
        editorLayer: this.editorLayer,
        editorId: this.state.editorId,
        countEditorId: this.countEditorId,
        updateFeatures: this.updateFeatures,
        mapController: this.props.mapController,
        editor: this,
        lang: this.langConstants
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-content",
        style: {
          display: "none"
        }
      }, /*#__PURE__*/_react["default"].createElement("pre", {
        id: "c4gGeoEditorGeoDataContent",
        contentEditable: true,
        style: {
          overflowY: "scroll",
          overflowX: "none"
        },
        suppressContentEditableWarning: true,
        onInput: this.changeJSON
      }, this.state.features)), addComps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.open && !this.props.open || prevState.open && !this.state.open) {
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
        //      this.props.mapController.map.removeLayer(this.editorLayer);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.c4gMapsHooks.hook_editor_components && window.c4gMapsHooks.hook_editor_components.length > 0) {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_components, {
          comp: this,
          container: "#c4g-editor-portal"
        });
      }
      this.rendered = true;
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQUlBLGlCQUFpQixHQUFBQyx5QkFBQSxHQUFHO0VBQzdCQyxJQUFJLEVBQUUsSUFBSTtFQUVWQyxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDQyxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeENDLGdCQUFnQixFQUFFLHdDQUF3QztFQUMxREMsb0JBQW9CLEVBQUUsc0RBQXNEO0VBQzVFQyxjQUFjLEVBQUUsdUJBQXVCO0VBQ3ZDQyw4QkFBOEIsRUFBRSxpQkFBaUI7RUFDakRDLDhCQUE4QixFQUFFLDBDQUEwQztFQUMxRUMsY0FBYyxFQUFFLGtCQUFrQjtFQUNsQ0MsZ0JBQWdCLEVBQUUsMEJBQTBCO0VBQzVDQyxjQUFjLEVBQUUsaUNBQWlDO0VBQ2pEQyxrQkFBa0IsRUFBRSx3REFBd0Q7RUFDNUVDLG1CQUFtQixFQUFFLDJCQUEyQjtFQUNoREMsaUJBQWlCLEVBQUUsOEJBQThCO0VBQ2pEQyxtQkFBbUIsRUFBRSxxREFBcUQ7RUFDMUVDLGNBQWMsRUFBRSxZQUFZO0VBQzVCQyxhQUFhLEVBQUUsV0FBVztFQUMxQkMsd0JBQXdCLEVBQUUsa0VBQWtFO0VBQzVGQyxvQkFBb0IsRUFBRSxnREFBZ0Q7RUFDdEVDLHNCQUFzQixFQUFFLHVCQUF1QjtFQUUvQ0MsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLDZCQUE2QixFQUFFLDhCQUE4QjtFQUM3REMsMkJBQTJCLEVBQUUsbUJBQW1CO0VBQ2hEQyxvQkFBb0IsRUFBRSxtQkFBbUI7RUFDekNDLHFCQUFxQixFQUFFLHlCQUF5QjtFQUNoREMscUJBQXFCLEVBQUUsb0JBQW9CO0VBQzNDQyxrQkFBa0IsRUFBRSxrREFBa0Q7RUFDdEVDLDZCQUE2QixFQUFFLHdFQUF3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UyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtNQUNqRCxJQUFLRixTQUFTLENBQUMxTCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssSUFBSSxJQUFNMkwsU0FBUyxDQUFDM0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDMEIsS0FBSyxDQUFDMUIsSUFBSyxFQUFFO1FBQ2hGMUQsTUFBTSxDQUFDLElBQUksQ0FBQ3FELEtBQUssQ0FBQ1csYUFBYSxDQUFDa0IsZUFBZSxDQUFDLENBQUNHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNwRztNQUNJO0lBQ0Y7RUFBQztJQUFBdUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlHLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2xCLElBQUl6RCxNQUFNLENBQUNvQixZQUFZLENBQUNzQyxzQkFBc0IsSUFBSTFELE1BQU0sQ0FBQ29CLFlBQVksQ0FBQ3NDLHNCQUFzQixDQUFDNUksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2R29HLG1CQUFLLENBQUNDLGlCQUFpQixDQUFDbkIsTUFBTSxDQUFDb0IsWUFBWSxDQUFDc0Msc0JBQXNCLEVBQUU7VUFBQ0MsSUFBSSxFQUFFLElBQUk7VUFBRUMsU0FBUyxFQUFFO1FBQW9CLENBQUMsQ0FBQztNQUNwSDtNQUNBLElBQUksQ0FBQzdJLFFBQVEsR0FBRyxJQUFJO0lBQ3RCO0VBQUM7QUFBQSxFQWhXMEM4SSxnQkFBUyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1lZGl0b3ItaTE4bi1kZS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3ItY29tcG9uZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmV4cG9ydCB2YXIgcHJvamVjdEVkaXRvckxhbmcgPSB7XG4gIExBTkc6ICdkZScsXG5cbiAgTUVUQURBVEFfRURJVDogXCJNZXRhZGF0ZW4gYmVhcmJlaXRlblwiLFxuICBEVVBMSUNBVEVfRUxFTUVOVDogXCJFbGVtZW50IGR1cGxpemllcmVuXCIsXG4gIERJU1BMQUNFX0VMRU1FTlQ6IFwiRWxlbWVudCBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgRFVQTElDQVRFX0FORF9ERUxFVEU6IFwiRWxlbWVudCBkdXBsaXppZXJlbiAmIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBDSE9PU0VfUFJPSkVDVDogXCJXw6RobGUgZWluIFByb2pla3QgLi4uXCIsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURV9IRUFETElORTogXCJFbGVtZW50IGzDtnNjaGVuXCIsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURV9RVUVTVElPTjogXCJXb2xsZW4gU2llIGRhcyBFbGVtZW50IHdpcmtsaWNoIGzDtnNjaGVuP1wiLFxuICBST1RBVEVfRUxFTUVOVDogXCJFbGVtZW50IHJvdGllcmVuXCIsXG4gIERFU0VMRUNUX0VMRU1FTlQ6IFwiRWxlbWVudC1BdXN3YWhsIGF1ZmhlYmVuXCIsXG4gIFJFVkVSVF9FTEVNRU5UOiBcIkxldHp0ZSBWZXJzaW9uIHdpZWRlcmhlcnN0ZWxsZW5cIixcbiAgQ09ORklSTV9ERUxFVEVfQUxMOiBcIldvbGxlbiBTaWUgZGllIGF1c2dld8OkaGx0ZW4gRWxlbWVudGUgd2lya2xpY2ggbMO2c2NoZW4/XCIsXG4gIEJVVFRPTl9ERVNFTEVDVF9BTEw6IFwiQXVzd2FobCBmw7xyIGFsbGUgYXVmaGViZW5cIixcbiAgQlVUVE9OX0RFTEVURV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGzDtnNjaGVuXCIsXG4gIEJVVFRPTl9ESVNQTEFDRV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fQ09ORklSTTogXCJCZXN0w6R0aWdlblwiLFxuICBCVVRUT05fQ0FOQ0VMOiBcIkFiYnJlY2hlblwiLFxuICBCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGtvcGllcmVuIHVuZCBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX1RSQU5TTEFURV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGF1ZiBkZXIgS2FydGUgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX0FQUExZX1RSQU5TTEFURTogXCLDhG5kZXJ1bmdlbiDDvGJlcm5laG1lblwiLFxuXG4gIEVESVRPUjogJ0VkaXRvcicsXG4gIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnRWRpdGllcmVuIGJlZW5kZW4nLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdBa3RpdmVzIEVsZW1lbnQgbMO2c2NoZW4nLFxuICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50ZSBlZGl0aWVyZW4nLFxuICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ1B1bmt0d2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG4gIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG5cbiAgRURJVE9SX0FQSV9FUlJPUl9USVRMRTogJ0VzIGlzdCBlaW4gRmVobGVyIGF1ZmdldHJldGVuJyxcblxuICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQge2xhbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7cHJvamVjdEVkaXRvckxhbmd9IGZyb20gXCIuL2M0Zy1lZGl0b3ItaTE4bi1kZVwiO1xubGV0IG1hcHNMYW5nID0ge307XG5cbmlmICh0eXBlb2YgbWFwRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAobWFwRGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH0gZWxzZSBpZiAobWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNFbmdsaXNoO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0b3JMYW5ndWFnZShtYXBEYXRhKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfVxufVxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0galF1ZXJ5LmV4dGVuZChtYXBzTGFuZywgcHJvamVjdEVkaXRvckxhbmcpOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQge0VkaXRvclZpZXd9IGZyb20gXCIuL2M0Zy1lZGl0b3Itdmlldy5qc3hcIjtcbmNvbnN0IEVkaXRvclZpZXcgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiKSk7XG5pbXBvcnQge2dldEVkaXRvckxhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctZWRpdG9yLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge0dlb0pTT059IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0ZpbGwsIFN0eWxlLCBUZXh0fSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7Z2V0LCB0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3RvU3RyaW5nSERNU30gZnJvbSBcIm9sL2Nvb3JkaW5hdGVcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RWRpdG9ySWQgPSB0aGlzLmNvdW50RWRpdG9ySWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEZlYXR1cmUgPSB0aGlzLmFkZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUZlYXR1cmUgPSB0aGlzLnJlbW92ZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUpTT04gPSB0aGlzLmNoYW5nZUpTT04uYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yID0gdGhpcztcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IFwiRWRpdG9yXCI7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gXCJFZGl0b3JcIjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWVkaXRvci1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIGM0Zy1jbG9zZVwiO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHRoaXMuYXJyTG9jc3R5bGVzID0gW107XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuXG4gICAgaWYgKHByb3BzLmNvbmZpZykge1xuICAgICAgdGhpcy5oYW5kbGVDb25maWcocHJvcHMuY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24obWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSB8fCBtYXBDb250cm9sbGVyLmRhdGEuYmVFZGl0b3JQcm9maWxlLCAhIW1hcENvbnRyb2xsZXIuZGF0YS5mZUVkaXRvclByb2ZpbGUpO1xuICAgIH1cblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldEVkaXRvckxhbmd1YWdlKG1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBjb250cm9sLmlzT3BlbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5lZGl0b3IpIHtcbiAgICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmVkaXRvciA9IGNvbnRyb2w7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiZWRpdG9yXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcIlBvaW50XCIsIFwiTGluZVN0cmluZ1wiLCBcIlBvbHlnb25cIiwgXCJDaXJjbGVcIl07XG4gICAgbGV0IGZlYXR1cmVzO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0RmllbGQgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKSAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCkubGVuZ3RoID4gNTApIHtcbiAgICAgIGZlYXR1cmVzID0gJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpO1xuICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgICAgIH0sIDIwMClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9ICd7XCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIiwgXCJmZWF0dXJlc1wiOiBbXX0nXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBzdHlsZURhdGE6IHt9LFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIHJhbmdlOiAwLFxuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgZWRpdG9ySWQ6IDAsXG4gICAgICBhZGRDb21wb25lbnRzOiBbXVxuICAgIH07XG4gICAgdGhpcy5zdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24oZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgICAgbGV0IHNpemUgPSBmYWxzZTtcbiAgICAgIGxldCByZXR1cm5TdHlsZSA9IFtdO1xuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgIHNpemUgPSBmZWF0dXJlcy5sZW5ndGg7XG4gICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlc1swXTtcbiAgICAgIH1cbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSkge1xuICAgICAgICByZXR1cm5TdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2xvY3N0eWxlJykpIHtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gZmVhdHVyZS5nZXQoJ2xvY3N0eWxlJyk7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlcyAmJiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0pIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLmdldFN0eWxlRnVuY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuU3R5bGUgPSBzdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuU3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmV0dXJuU3R5bGVbMF0gJiYgZmVhdHVyZSAmJiBmZWF0dXJlLmdldCgnekluZGV4JykpIHtcbiAgICAgICAgcmV0dXJuU3R5bGVbMF0uc2V0WkluZGV4KGZlYXR1cmUuZ2V0KCd6SW5kZXgnKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuU3R5bGVcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xuICAgIHRoaXMuZWRpdG9yTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogbmV3IFZlY3RvclNvdXJjZSh7Zm9ybWF0OiBuZXcgR2VvSlNPTigpfSksXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZUZ1bmN0aW9uXG4gICAgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgIGxldCBsYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldExheWVycygpO1xuICAgIGxldCBhZGRMYXllciA9IHRydWU7XG4gICAgbGF5ZXJzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWRpdG9yTGF5ZXIpIHtcbiAgICAgICAgYWRkTGF5ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChhZGRMYXllcikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbi8vICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgY291bnRFZGl0b3JJZCAoKSB7XG4gICAgbGV0IG5ld0NvdW50ID0gdGhpcy5zdGF0ZS5lZGl0b3JJZCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0b3JJZDogbmV3Q291bnRcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q29uZmlndXJhdGlvbiAoaWQsIGZyb250ZW5kID0gdHJ1ZSkge1xuICAgIGxldCB1cmw7XG4gICAgaWYgKGZyb250ZW5kKSB7XG4gICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZS9cIiArIGlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVybCA9IFwiY29uNGdpcy9lZGl0b3JTZXJ2aWNlQmFja2VuZC9cIiArIGlkO1xuICAgIH1cblxuICAgIGZldGNoKHVybCkudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAoanNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25maWcoanNvbik7XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVDb25maWcgKGpzb24pIHtcbiAgICBmb3IgKGxldCBpIGluIGpzb24uZHJhd1N0eWxlcykge1xuICAgICAgaWYgKGpzb24uZHJhd1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tpXSA9IFtdO1xuICAgICAgICBsZXQgZHJhd1N0eWxlID0ganNvbi5kcmF3U3R5bGVzW2ldO1xuICAgICAgICBmb3IgKGxldCBqIGluIGRyYXdTdHlsZS5lbGVtZW50cykge1xuICAgICAgICAgIGlmIChkcmF3U3R5bGUuZWxlbWVudHMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZHJhd1N0eWxlLmVsZW1lbnRzW2pdO1xuICAgICAgICAgICAgdGhpcy5jb25maWdbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBjaGVja0xvY3N0eWxlID0gdGhpcy5hcnJMb2NzdHlsZXMuZmluZEluZGV4KChsb2NzdHlsZSkgPT4gbG9jc3R5bGUgPT09IGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tMb2NzdHlsZSA9PT0gLTEgJiYgZWxlbWVudC5zdHlsZUlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXJyTG9jc3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyh0aGlzLmFyckxvY3N0eWxlcywge1xuICAgICAgXCJkb25lXCI6IChzdHlsZURhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3R5bGVEYXRhOiBzdHlsZURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVSZW5kZXIoKXtcbiAgICB0cnl7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlcy5sZW5ndGggPiA1MCkge1xuICAgICAgICAvLyByZXBsYWNlIGh0bWwgc3BlY2lhbCBjaGFycyBpbiBnZW9qc29uIHN0cmluZ1xuICAgICAgICB0aGlzLnN0YXRlLmZlYXR1cmVzID0gdGhpcy5zdGF0ZS5mZWF0dXJlcy5yZXBsYWNlQWxsKCcmIzM0OycsICdcIicpO1xuXG4gICAgICAgIHRoaXMubGlua0lucHV0KCk7XG4gICAgICAgIGxldCBnZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gbmV3IEdlb0pTT04oe1xuICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgIH0pLnJlYWRGZWF0dXJlcyhnZW9qc29uKTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHRoaXMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgIGlmIChmZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgbGV0IGpzb25GZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgICBpZiAoanNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkge1xuICAgICAgICAgICAgICBqc29uRmVhdHVyZS5zZXRHZW9tZXRyeShuZXcgQ2lyY2xlKGpzb25GZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwganNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc291cmNlLmFkZEZlYXR1cmUoanNvbkZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5yYW5nZSkge1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIGxldCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xuICAgICAgbGV0IHN0YXJ0Q29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuY2hpbGROb2Rlc1swXSB8fCByYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0Q29udGFpbmVyLCB0aGlzLnN0YXRlLnJhbmdlKTtcbiAgICAgIHJhbmdlLnNldEVuZChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UocmFuZ2UpO1xuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VKU09OKGV2ZW50KSB7XG4gICAgbGV0IHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkuc3RhcnRPZmZzZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZXM6IGV2ZW50LnRhcmdldC5pbm5lclRleHQsIHJhbmdlOiByYW5nZX0sICgpID0+IHtcbiAgICAgIHRoaXMucmVSZW5kZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgYWRkRmVhdHVyZSAoZmVhdHVyZSkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG5cbiAgICBhcnJGZWF0dXJlcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgIH0sICgpID0+IHt0aGlzLmxpbmtJbnB1dCgpfSk7XG4gIH1cblxuICByZW1vdmVGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgbGV0IGZlYXR1cmVJZCA9IGFyckZlYXR1cmVzLmZlYXR1cmVzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucHJvcGVydGllcy5lZGl0b3JJZCA9PT0gZWRpdG9ySWQ7XG4gICAgfSk7XG4gICAgYXJyRmVhdHVyZXMuZmVhdHVyZXMuc3BsaWNlKGZlYXR1cmVJZCwgMSk7XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkoYXJyRmVhdHVyZXMsIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSwgKCkgPT4ge3RoaXMubGlua0lucHV0KCl9KTtcbiAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX3JlbW92ZSwgZ2VvanNvbik7XG4gIH1cblxuICBtb2RpZnlGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBvYmpHZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBvYmpHZW9qc29uLmZlYXR1cmVzO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIG9iakdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUlkXSA9IGdlb2pzb247XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkob2JqR2VvanNvbiwgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG5cbiAgbGlua0lucHV0ICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKSAmJiB0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpOyAvL2xpbmsgdG8gaW5wdXRGaWVsZFxuICAgIH1cbiAgfVxuXG4gIHNldEFkZENvbXBzKGNvbnN0c3RyLCBjb25maWcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY29uc3RzdHI6IGNvbnN0c3RyXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBhZGRDb21wcztcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25zdHN0cikge1xuICAgICAgYWRkQ29tcHMgPSA8dGhpcy5zdGF0ZS5jb25zdHN0ciBjb25maWc9e3RoaXMuc3RhdGUuY29uZmlnfSBnZXQ9e2dldH0gdHJhbnNmb3JtPXt0cmFuc2Zvcm19IHRvU3RyaW5nSERNUz17dG9TdHJpbmdIRE1TfSBzb3VyY2U9e3RoaXMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCl9IGZvcm1hdD17bmV3IEdlb0pTT04oKX0vPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3Itd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWVkaXRvci1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWVkaXRvci1oZWFkbGluZVwifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctZWRpdG9yLWNvbnRhaW5lci1yaWdodFwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5FRElUT1J9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0VESVRPUn0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgICAge3RoaXMubW9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gXCJzZWxlY3RcIiB8fCAoc2NvcGUuY29uZmlnW2VsZW1lbnRdICYmIHNjb3BlLmNvbmZpZ1tlbGVtZW50XS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBzY29wZS5sYW5nQ29uc3RhbnRzW1wiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1wiICsgZWxlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItXCIgKyBlbGVtZW50ICsgXCIgIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfSBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnNldFN0YXRlKHtjdXJyZW50TW9kZTogZWxlbWVudH0pfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEVkaXRvclZpZXcgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3Itdmlld1wifSBzdHlsZUZ1bmN0aW9uPXt0aGlzLnN0eWxlRnVuY3Rpb259IG1vZGU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGV9IHN0eWxlRGF0YT17dGhpcy5zdGF0ZS5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzPXt0aGlzLmNvbmZpZ1t0aGlzLnN0YXRlLmN1cnJlbnRNb2RlXSA/IHRoaXMuY29uZmlnW3RoaXMuc3RhdGUuY3VycmVudE1vZGVdOiBbXX0gYWN0aXZlPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXt0aGlzLmZlYXR1cmVzfSBlZGl0b3JWYXJzPXt0aGlzLnByb3BzLmNvbmZpZy5lZGl0b3JWYXJzfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZUZlYXR1cmV9IG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5RmVhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgYWRkRmVhdHVyZT17dGhpcy5hZGRGZWF0dXJlfSBlZGl0b3JMYXllcj17dGhpcy5lZGl0b3JMYXllcn0gZWRpdG9ySWQ9e3RoaXMuc3RhdGUuZWRpdG9ySWR9IGNvdW50RWRpdG9ySWQ9e3RoaXMuY291bnRFZGl0b3JJZH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVhdHVyZXM9e3RoaXMudXBkYXRlRmVhdHVyZXN9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZWRpdG9yPXt0aGlzfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1jb250ZW50XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fT5cbiAgICAgICAgICA8cHJlIGlkPXtcImM0Z0dlb0VkaXRvckdlb0RhdGFDb250ZW50XCJ9IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3R5bGU9e3tvdmVyZmxvd1k6IFwic2Nyb2xsXCIsIG92ZXJmbG93WDogXCJub25lXCJ9fSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9IG9uSW5wdXQ9e3RoaXMuY2hhbmdlSlNPTn0+e3RoaXMuc3RhdGUuZmVhdHVyZXN9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YWRkQ29tcHN9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2UHJvcHMub3BlbiAmJiAhdGhpcy5wcm9wcy5vcGVuKSB8fCAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbikpIHtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuLy8gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX2NvbXBvbmVudHMgJiYgd2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9jb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfY29tcG9uZW50cywge2NvbXA6IHRoaXMsIGNvbnRhaW5lcjogXCIjYzRnLWVkaXRvci1wb3J0YWxcIn0pO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJwcm9qZWN0RWRpdG9yTGFuZyIsImV4cG9ydHMiLCJMQU5HIiwiTUVUQURBVEFfRURJVCIsIkRVUExJQ0FURV9FTEVNRU5UIiwiRElTUExBQ0VfRUxFTUVOVCIsIkRVUExJQ0FURV9BTkRfREVMRVRFIiwiQ0hPT1NFX1BST0pFQ1QiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkUiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT04iLCJST1RBVEVfRUxFTUVOVCIsIkRFU0VMRUNUX0VMRU1FTlQiLCJSRVZFUlRfRUxFTUVOVCIsIkNPTkZJUk1fREVMRVRFX0FMTCIsIkJVVFRPTl9ERVNFTEVDVF9BTEwiLCJCVVRUT05fREVMRVRFX0FMTCIsIkJVVFRPTl9ESVNQTEFDRV9BTEwiLCJCVVRUT05fQ09ORklSTSIsIkJVVFRPTl9DQU5DRUwiLCJCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEwiLCJCVVRUT05fVFJBTlNMQVRFX0FMTCIsIkJVVFRPTl9BUFBMWV9UUkFOU0xBVEUiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiQ1RSTF9FRElUT1IiLCJFRElUT1JfQVBJX0VSUk9SX1RJVExFIiwiTk9ORSIsIl9jNGdNYXBzQ29uc3RhbnRJMThuRGUiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudEkxOG5FbiIsIl9jNGdFZGl0b3JJMThuRGUiLCJtYXBzTGFuZyIsIm1hcERhdGEiLCJsYW5nIiwibGFuZ0NvbnN0YW50c0dlcm1hbiIsImxhbmdDb25zdGFudHNFbmdsaXNoIiwiZ2V0RWRpdG9yTGFuZ3VhZ2UiLCJsYW5nQ29uc3RhbnRzIiwialF1ZXJ5IiwiZXh0ZW5kIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfYzRnRWRpdG9ySTE4biIsIl9jb250cm9sIiwiX2xheWVyIiwiX2Zvcm1hdCIsIl9pbnRlcmFjdGlvbiIsIl9zb3VyY2UiLCJfb2wiLCJfZ2VvbSIsIl9jNGdNYXBzVXRpbHMiLCJfc3R5bGUiLCJfcHJvaiIsIl9jb29yZGluYXRlIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRWRpdG9yVmlldyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiRWRpdG9yQ29tcG9uZW50IiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiY2xvc2UiLCJiaW5kIiwib3BlbiIsImNvdW50RWRpdG9ySWQiLCJhZGRGZWF0dXJlIiwicmVtb3ZlRmVhdHVyZSIsIm1vZGlmeUZlYXR1cmUiLCJjaGFuZ2VKU09OIiwibWFwQ29udHJvbGxlciIsImVkaXRvciIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImRhdGEiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJjbGFzc05hbWUiLCJvbiIsImV2ZW50IiwiaGlkZGVuIiwiZWRpdG9yQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJzdGF0ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb25maWciLCJhcnJMb2NzdHlsZXMiLCJoYW5kbGVDb25maWciLCJnZXRDb25maWd1cmF0aW9uIiwiZmVFZGl0b3JQcm9maWxlIiwiYmVFZGl0b3JQcm9maWxlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpc09wZW4iLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtb2RlcyIsImZlYXR1cmVzIiwiaW5wdXRGaWVsZCIsIiQiLCJ2YWwiLCJsZW5ndGgiLCJyZW5kZXJlZCIsInNldFRpbWVvdXQiLCJyZVJlbmRlciIsImN1cnJlbnRNb2RlIiwic3R5bGVEYXRhIiwicmFuZ2UiLCJlZGl0b3JJZCIsImFkZENvbXBvbmVudHMiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsInNldFpJbmRleCIsIkNvbGxlY3Rpb24iLCJlZGl0b3JMYXllciIsIlZlY3RvciIsInNvdXJjZSIsIlZlY3RvclNvdXJjZSIsImZvcm1hdCIsIkdlb0pTT04iLCJtYXAiLCJhZGRMYXllciIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJsYXllcnMiLCJnZXRMYXllcnMiLCJmb3JFYWNoIiwiYXJyYXkiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJuZXdDb3VudCIsImlkIiwiX3RoaXMzIiwiZnJvbnRlbmQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJfdGhpczQiLCJkcmF3U3R5bGVzIiwiZHJhd1N0eWxlIiwiX2xvb3AiLCJlbGVtZW50cyIsImoiLCJwdXNoIiwiY2hlY2tMb2NzdHlsZSIsInN0eWxlSWQiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJkb25lIiwicmVwbGFjZUFsbCIsImxpbmtJbnB1dCIsImdlb2pzb24iLCJKU09OIiwicGFyc2UiLCJmZWF0dXJlUHJvamVjdGlvbiIsInJlYWRGZWF0dXJlcyIsImdldFNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwianNvbkZlYXR1cmUiLCJzZXRHZW9tZXRyeSIsIkNpcmNsZSIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJjaGlsZE5vZGVzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVSYW5nZSIsImFkZFJhbmdlIiwiX3RoaXM1Iiwic3RhcnRPZmZzZXQiLCJfdGhpczYiLCJhcnJGZWF0dXJlcyIsInN0cmluZ2lmeSIsIl90aGlzNyIsInByb3BlcnRpZXMiLCJmZWF0dXJlSWQiLCJzcGxpY2UiLCJ1dGlscyIsImNhbGxIb29rRnVuY3Rpb25zIiwiYzRnTWFwc0hvb2tzIiwiaG9va19lZGl0b3JfcmVtb3ZlIiwiX3RoaXM4Iiwib2JqR2VvanNvbiIsInNldEFkZENvbXBzIiwiY29uc3RzdHIiLCJyZW5kZXIiLCJhZGRDb21wcyIsInRyYW5zZm9ybSIsInRvU3RyaW5nSERNUyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkyIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoaWRlQ29udGFpbmVyIiwiaGVhZGVyIiwiY2xvc2VCdG5UaXRsZSIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiQ0xPU0UiLCJ0b1VwcGVyQ2FzZSIsIm9uTW91c2VVcCIsIm1vZGUiLCJhY3RpdmUiLCJlZGl0b3JWYXJzIiwidXBkYXRlRmVhdHVyZXMiLCJkaXNwbGF5IiwiY29udGVudEVkaXRhYmxlIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25JbnB1dCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY29tcG9uZW50RGlkTW91bnQiLCJob29rX2VkaXRvcl9jb21wb25lbnRzIiwiY29tcCIsImNvbnRhaW5lciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=