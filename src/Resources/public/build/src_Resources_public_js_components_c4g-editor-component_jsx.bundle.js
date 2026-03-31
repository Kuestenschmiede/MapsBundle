"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-editor-component_jsx"],{

/***/ "./src/Resources/public/js/c4g-editor-i18n-de.js"
/*!*******************************************************!*\
  !*** ./src/Resources/public/js/c4g-editor-i18n-de.js ***!
  \*******************************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.projectEditorLang = void 0;
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
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

/***/ },

/***/ "./src/Resources/public/js/c4g-editor-i18n.js"
/*!****************************************************!*\
  !*** ./src/Resources/public/js/c4g-editor-i18n.js ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2026, by Küstenschmiede GmbH Software & Design
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

/***/ },

/***/ "./src/Resources/public/js/components/c4g-editor-component.jsx"
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-editor-component.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
 * @author con4gis contributors (see "authors.md")
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
    var control = null;
    if (props.target) {
      control = new _control.Control({
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
      if (index !== -1) {
        mapController.arrComponents[index].control = control;
      }
    }
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
        editorVars: this.props.config ? this.props.config.editorVars : this.config.editorVars || {},
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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFJQSxpQkFBaUIsR0FBQUMseUJBQUEsR0FBRztFQUM3QkMsSUFBSSxFQUFFLElBQUk7RUFFVkMsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQ0MsaUJBQWlCLEVBQUUscUJBQXFCO0VBQ3hDQyxnQkFBZ0IsRUFBRSx3Q0FBd0M7RUFDMURDLG9CQUFvQixFQUFFLHNEQUFzRDtFQUM1RUMsY0FBYyxFQUFFLHVCQUF1QjtFQUN2Q0MsOEJBQThCLEVBQUUsaUJBQWlCO0VBQ2pEQyw4QkFBOEIsRUFBRSwwQ0FBMEM7RUFDMUVDLGNBQWMsRUFBRSxrQkFBa0I7RUFDbENDLGdCQUFnQixFQUFFLDBCQUEwQjtFQUM1Q0MsY0FBYyxFQUFFLGlDQUFpQztFQUNqREMsa0JBQWtCLEVBQUUsd0RBQXdEO0VBQzVFQyxtQkFBbUIsRUFBRSwyQkFBMkI7RUFDaERDLGlCQUFpQixFQUFFLDhCQUE4QjtFQUNqREMsbUJBQW1CLEVBQUUscURBQXFEO0VBQzFFQyxjQUFjLEVBQUUsWUFBWTtFQUM1QkMsYUFBYSxFQUFFLFdBQVc7RUFDMUJDLHdCQUF3QixFQUFFLGtFQUFrRTtFQUM1RkMsb0JBQW9CLEVBQUUsZ0RBQWdEO0VBQ3RFQyxzQkFBc0IsRUFBRSx1QkFBdUI7RUFFL0NDLE1BQU0sRUFBRSxRQUFRO0VBQ2hCQyw2QkFBNkIsRUFBRSw4QkFBOEI7RUFDN0RDLDJCQUEyQixFQUFFLG1CQUFtQjtFQUNoREMsb0JBQW9CLEVBQUUsbUJBQW1CO0VBQ3pDQyxxQkFBcUIsRUFBRSx5QkFBeUI7RUFDaERDLHFCQUFxQixFQUFFLG9CQUFvQjtFQUMzQ0Msa0JBQWtCLEVBQUUsa0RBQWtEO0VBQ3RFQyw2QkFBNkIsRUFBRSx3RUFBd0U7RUFD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ci1pMThuLWRlLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctZWRpdG9yLWkxOG4uanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWVkaXRvci1jb21wb25lbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjYsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5leHBvcnQgdmFyIHByb2plY3RFZGl0b3JMYW5nID0ge1xuICBMQU5HOiAnZGUnLFxuXG4gIE1FVEFEQVRBX0VESVQ6IFwiTWV0YWRhdGVuIGJlYXJiZWl0ZW5cIixcbiAgRFVQTElDQVRFX0VMRU1FTlQ6IFwiRWxlbWVudCBkdXBsaXppZXJlblwiLFxuICBESVNQTEFDRV9FTEVNRU5UOiBcIkVsZW1lbnQgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIERVUExJQ0FURV9BTkRfREVMRVRFOiBcIkVsZW1lbnQgZHVwbGl6aWVyZW4gJiBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQ0hPT1NFX1BST0pFQ1Q6IFwiV8OkaGxlIGVpbiBQcm9qZWt0IC4uLlwiLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkU6IFwiRWxlbWVudCBsw7ZzY2hlblwiLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT046IFwiV29sbGVuIFNpZSBkYXMgRWxlbWVudCB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgUk9UQVRFX0VMRU1FTlQ6IFwiRWxlbWVudCByb3RpZXJlblwiLFxuICBERVNFTEVDVF9FTEVNRU5UOiBcIkVsZW1lbnQtQXVzd2FobCBhdWZoZWJlblwiLFxuICBSRVZFUlRfRUxFTUVOVDogXCJMZXR6dGUgVmVyc2lvbiB3aWVkZXJoZXJzdGVsbGVuXCIsXG4gIENPTkZJUk1fREVMRVRFX0FMTDogXCJXb2xsZW4gU2llIGRpZSBhdXNnZXfDpGhsdGVuIEVsZW1lbnRlIHdpcmtsaWNoIGzDtnNjaGVuP1wiLFxuICBCVVRUT05fREVTRUxFQ1RfQUxMOiBcIkF1c3dhaGwgZsO8ciBhbGxlIGF1ZmhlYmVuXCIsXG4gIEJVVFRPTl9ERUxFVEVfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBsw7ZzY2hlblwiLFxuICBCVVRUT05fRElTUExBQ0VfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX0NPTkZJUk06IFwiQmVzdMOkdGlnZW5cIixcbiAgQlVUVE9OX0NBTkNFTDogXCJBYmJyZWNoZW5cIixcbiAgQlVUVE9OX0NPUFlfRElTUExBQ0VfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBrb3BpZXJlbiB1bmQgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9UUkFOU0xBVEVfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBhdWYgZGVyIEthcnRlIHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9BUFBMWV9UUkFOU0xBVEU6IFwiw4RuZGVydW5nZW4gw7xiZXJuZWhtZW5cIixcblxuICBFRElUT1I6ICdFZGl0b3InLFxuICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnQWt0aXZlcyBFbGVtZW50IGzDtnNjaGVuJyxcbiAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnRWxlbWVudGUgZWRpdGllcmVuJyxcbiAgRURJVE9SX1NFTEVDVF9JTkZPOiAnWnVyIEF1c3dhaGwgZWluIEVsZW1lbnQgYXVmIGRlciBLYXJ0ZSBhbmtsaWNrZW4uJyxcbiAgRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUw6ICdbU3RyZ10gKyBbS2xpY2tdIGbDvHIgTWVocmZhY2hhdXN3YWhsIDxicj5bU2hpZnRdIGhhbHRlbiBmw7xyIEF1c3dhaGxib3gnLFxuICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdQdW5rdHdlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW53ZXJremV1Z2UnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnS3JlaXN3ZXJremV1Z2UnLFxuICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuXG4gIEVESVRPUl9BUElfRVJST1JfVElUTEU6ICdFcyBpc3QgZWluIEZlaGxlciBhdWZnZXRyZXRlbicsXG5cbiAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjYsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQge2xhbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7cHJvamVjdEVkaXRvckxhbmd9IGZyb20gXCIuL2M0Zy1lZGl0b3ItaTE4bi1kZVwiO1xubGV0IG1hcHNMYW5nID0ge307XG5cbmlmICh0eXBlb2YgbWFwRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAobWFwRGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH0gZWxzZSBpZiAobWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNFbmdsaXNoO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0b3JMYW5ndWFnZShtYXBEYXRhKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfVxufVxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0galF1ZXJ5LmV4dGVuZChtYXBzTGFuZywgcHJvamVjdEVkaXRvckxhbmcpOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMubWRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7RWRpdG9yVmlld30gZnJvbSBcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiO1xuY29uc3QgRWRpdG9yVmlldyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctZWRpdG9yLXZpZXcuanN4XCIpKTtcbmltcG9ydCB7Z2V0RWRpdG9yTGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1lZGl0b3ItaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtEcmF3fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7RmlsbCwgU3R5bGUsIFRleHR9IGZyb20gXCJvbC9zdHlsZVwiO1xuaW1wb3J0IHtnZXQsIHRyYW5zZm9ybX0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCB7dG9TdHJpbmdIRE1TfSBmcm9tIFwib2wvY29vcmRpbmF0ZVwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY291bnRFZGl0b3JJZCA9IHRoaXMuY291bnRFZGl0b3JJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRmVhdHVyZSA9IHRoaXMuYWRkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRmVhdHVyZSA9IHRoaXMucmVtb3ZlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlSlNPTiA9IHRoaXMuY2hhbmdlSlNPTi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3IgPSB0aGlzO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEgJiYgcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnRoZW1lRGF0YS5jb250cm9sTGFiZWxzKSB7XG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJFZGl0b3JcIjtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24udGl0bGUgPSBcIkVkaXRvclwiO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZWRpdG9yLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgYzRnLWNsb3NlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBoaWRkZW4gPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGpRdWVyeShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2M0Zy1jbG9zZScpLmFkZENsYXNzKCdjNGctb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdGhpcy5hcnJMb2NzdHlsZXMgPSBbXTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICBpZiAocHJvcHMuY29uZmlnKSB7XG4gICAgICB0aGlzLmhhbmRsZUNvbmZpZyhwcm9wcy5jb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbihtYXBDb250cm9sbGVyLmRhdGEuZmVFZGl0b3JQcm9maWxlIHx8IG1hcENvbnRyb2xsZXIuZGF0YS5iZUVkaXRvclByb2ZpbGUsICEhbWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0RWRpdG9yTGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgY29udHJvbCA9IG51bGw7XG4gICAgaWYgKHByb3BzLnRhcmdldCkge1xuICAgICAgICBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgICAgIGNvbnRyb2wuaXNPcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZWRpdG9yKSB7XG4gICAgICAgICAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5lZGl0b3IgPSBjb250cm9sO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiZWRpdG9yXCIpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBtYXBDb250cm9sbGVyLmFyckNvbXBvbmVudHNbaW5kZXhdLmNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMubW9kZXMgPSBbXCJzZWxlY3RcIiwgXCJQb2ludFwiLCBcIkxpbmVTdHJpbmdcIiwgXCJQb2x5Z29uXCIsIFwiQ2lyY2xlXCJdO1xuICAgIGxldCBmZWF0dXJlcztcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKSAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCkgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpLmxlbmd0aCA+IDUwKSB7XG4gICAgICBmZWF0dXJlcyA9ICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKTtcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgdGhpcy5yZVJlbmRlcigpO1xuICAgICAgICB9LCAyMDApXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSAne1widHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsIFwiZmVhdHVyZXNcIjogW119J1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgc3R5bGVEYXRhOiB7fSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICByYW5nZTogMCxcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgIGVkaXRvcklkOiAwLFxuICAgICAgYWRkQ29tcG9uZW50czogW11cbiAgICB9O1xuICAgIHRoaXMuc3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgIGxldCBzaXplID0gZmFsc2U7XG4gICAgICBsZXQgcmV0dXJuU3R5bGUgPSBbXTtcbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0ICYmIGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKSB7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICBzaXplID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgICAgICBmZWF0dXJlID0gZmVhdHVyZXNbMF07XG4gICAgICB9XG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldFN0eWxlKCkpIHtcbiAgICAgICAgcmV0dXJuU3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0ICYmIGZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpKSB7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IGZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXMgJiYgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdKSB7XG4gICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5nZXRTdHlsZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZTtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVyblN0eWxlID0gc3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbiwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVyblN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJldHVyblN0eWxlWzBdICYmIGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ3pJbmRleCcpKSB7XG4gICAgICAgIHJldHVyblN0eWxlWzBdLnNldFpJbmRleChmZWF0dXJlLmdldCgnekluZGV4JykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblN0eWxlXG4gICAgfTtcbiAgICB0aGlzLmZlYXR1cmVzID0gbmV3IENvbGxlY3Rpb24oKTtcbiAgICB0aGlzLmVkaXRvckxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2Uoe2Zvcm1hdDogbmV3IEdlb0pTT04oKX0pLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVGdW5jdGlvblxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKTtcbiAgICBsZXQgYWRkTGF5ZXIgPSB0cnVlO1xuICAgIGxheWVycy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVkaXRvckxheWVyKSB7XG4gICAgICAgIGFkZExheWVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoYWRkTGF5ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4vLyAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGNvdW50RWRpdG9ySWQgKCkge1xuICAgIGxldCBuZXdDb3VudCA9IHRoaXMuc3RhdGUuZWRpdG9ySWQgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdG9ySWQ6IG5ld0NvdW50XG4gICAgfSlcbiAgfVxuXG4gIGdldENvbmZpZ3VyYXRpb24gKGlkLCBmcm9udGVuZCA9IHRydWUpIHtcbiAgICBsZXQgdXJsO1xuICAgIGlmIChmcm9udGVuZCkge1xuICAgICAgdXJsID0gXCJjb240Z2lzL2VkaXRvclNlcnZpY2UvXCIgKyBpZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZUJhY2tlbmQvXCIgKyBpZDtcbiAgICB9XG5cbiAgICBmZXRjaCh1cmwpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgKGpzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmlnKGpzb24pO1xuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ29uZmlnIChqc29uKSB7XG4gICAgZm9yIChsZXQgaSBpbiBqc29uLmRyYXdTdHlsZXMpIHtcbiAgICAgIGlmIChqc29uLmRyYXdTdHlsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbaV0gPSBbXTtcbiAgICAgICAgbGV0IGRyYXdTdHlsZSA9IGpzb24uZHJhd1N0eWxlc1tpXTtcbiAgICAgICAgZm9yIChsZXQgaiBpbiBkcmF3U3R5bGUuZWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZHJhd1N0eWxlLmVsZW1lbnRzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRyYXdTdHlsZS5lbGVtZW50c1tqXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgY2hlY2tMb2NzdHlsZSA9IHRoaXMuYXJyTG9jc3R5bGVzLmZpbmRJbmRleCgobG9jc3R5bGUpID0+IGxvY3N0eWxlID09PSBlbGVtZW50LnN0eWxlSWQpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTG9jc3R5bGUgPT09IC0xICYmIGVsZW1lbnQuc3R5bGVJZCkge1xuICAgICAgICAgICAgICB0aGlzLmFyckxvY3N0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXModGhpcy5hcnJMb2NzdHlsZXMsIHtcbiAgICAgIFwiZG9uZVwiOiAoc3R5bGVEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0eWxlRGF0YTogc3R5bGVEYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlUmVuZGVyKCl7XG4gICAgdHJ5e1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZXMubGVuZ3RoID4gNTApIHtcbiAgICAgICAgLy8gcmVwbGFjZSBodG1sIHNwZWNpYWwgY2hhcnMgaW4gZ2VvanNvbiBzdHJpbmdcbiAgICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlcyA9IHRoaXMuc3RhdGUuZmVhdHVyZXMucmVwbGFjZUFsbCgnJiMzNDsnLCAnXCInKTtcblxuICAgICAgICB0aGlzLmxpbmtJbnB1dCgpO1xuICAgICAgICBsZXQgZ2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IG5ldyBHZW9KU09OKHtcbiAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgICAgICB9KS5yZWFkRmVhdHVyZXMoZ2VvanNvbik7XG4gICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZmVhdHVyZXMpIHtcbiAgICAgICAgICBpZiAoZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGxldCBqc29uRmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgaWYgKGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpIHtcbiAgICAgICAgICAgICAganNvbkZlYXR1cmUuc2V0R2VvbWV0cnkobmV3IENpcmNsZShqc29uRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCksIGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGpzb25GZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUucmFuZ2UpIHtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICBsZXQgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgIGxldCBzdGFydENvbnRhaW5lciA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0gfHwgcmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgICByYW5nZS5zZXRTdGFydChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICByYW5nZS5zZXRFbmQoc3RhcnRDb250YWluZXIsIHRoaXMuc3RhdGUucmFuZ2UpO1xuICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSlNPTihldmVudCkge1xuICAgIGxldCByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLnN0YXJ0T2Zmc2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVzOiBldmVudC50YXJnZXQuaW5uZXJUZXh0LCByYW5nZTogcmFuZ2V9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgfSlcbiAgfVxuXG4gIGFkZEZlYXR1cmUgKGZlYXR1cmUpIHtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuXG4gICAgYXJyRmVhdHVyZXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICBsZXQgZmVhdHVyZXMgPSBKU09OLnN0cmluZ2lmeShhcnJGZWF0dXJlcywgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG5cbiAgcmVtb3ZlRmVhdHVyZSAoZ2VvanNvbikge1xuICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5mZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIGFyckZlYXR1cmVzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlSWQsIDEpO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgIH0sICgpID0+IHt0aGlzLmxpbmtJbnB1dCgpfSk7XG4gICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9yZW1vdmUsIGdlb2pzb24pO1xuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZSAoZ2VvanNvbikge1xuICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICBsZXQgb2JqR2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gb2JqR2VvanNvbi5mZWF0dXJlcztcbiAgICBsZXQgZmVhdHVyZUlkID0gYXJyRmVhdHVyZXMuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5wcm9wZXJ0aWVzLmVkaXRvcklkID09PSBlZGl0b3JJZDtcbiAgICB9KTtcbiAgICBvYmpHZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJZF0gPSBnZW9qc29uO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KG9iakdlb2pzb24sIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSwgKCkgPT4ge3RoaXMubGlua0lucHV0KCl9KTtcbiAgfVxuXG4gIGxpbmtJbnB1dCAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlcy5sZW5ndGggPiA1MCkge1xuICAgICAgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCh0aGlzLnN0YXRlLmZlYXR1cmVzKTsgLy9saW5rIHRvIGlucHV0RmllbGRcbiAgICB9XG4gIH1cblxuICBzZXRBZGRDb21wcyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYWRkQ29tcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29uc3RzdHIpIHtcbiAgICAgIGFkZENvbXBzID0gPHRoaXMuc3RhdGUuY29uc3RzdHIgY29uZmlnPXt0aGlzLnN0YXRlLmNvbmZpZ30gZ2V0PXtnZXR9IHRyYW5zZm9ybT17dHJhbnNmb3JtfSB0b1N0cmluZ0hETVM9e3RvU3RyaW5nSERNU30gc291cmNlPXt0aGlzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpfSBmb3JtYXQ9e25ldyBHZW9KU09OKCl9Lz47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1lZGl0b3ItaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1lZGl0b3ItaGVhZGxpbmVcIn0gaGlkZUNvbnRhaW5lcj17XCIuYzRnLWVkaXRvci1jb250YWluZXItcmlnaHRcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuRURJVE9SfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9FRElUT1J9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IFwic2VsZWN0XCIgfHwgKHNjb3BlLmNvbmZpZ1tlbGVtZW50XSAmJiBzY29wZS5jb25maWdbZWxlbWVudF0ubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgICAgbGV0IHRpdGxlID0gc2NvcGUubGFuZ0NvbnN0YW50c1tcIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19cIiArIGVsZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLVwiICsgZWxlbWVudCArIFwiICBcIiArIChlbGVtZW50ID09PSBzY29wZS5zdGF0ZS5jdXJyZW50TW9kZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX0gb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IGVsZW1lbnR9KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFZGl0b3JWaWV3IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXZpZXdcIn0gc3R5bGVGdW5jdGlvbj17dGhpcy5zdHlsZUZ1bmN0aW9ufSBtb2RlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlfSBzdHlsZURhdGE9e3RoaXMuc3RhdGUuc3R5bGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cz17dGhpcy5jb25maWdbdGhpcy5zdGF0ZS5jdXJyZW50TW9kZV0gPyB0aGlzLmNvbmZpZ1t0aGlzLnN0YXRlLmN1cnJlbnRNb2RlXTogW119IGFjdGl2ZT17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17dGhpcy5mZWF0dXJlc30gZWRpdG9yVmFycz17dGhpcy5wcm9wcy5jb25maWcgPyB0aGlzLnByb3BzLmNvbmZpZy5lZGl0b3JWYXJzIDogKHRoaXMuY29uZmlnLmVkaXRvclZhcnMgfHwge30pfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZUZlYXR1cmV9IG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5RmVhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgYWRkRmVhdHVyZT17dGhpcy5hZGRGZWF0dXJlfSBlZGl0b3JMYXllcj17dGhpcy5lZGl0b3JMYXllcn0gZWRpdG9ySWQ9e3RoaXMuc3RhdGUuZWRpdG9ySWR9IGNvdW50RWRpdG9ySWQ9e3RoaXMuY291bnRFZGl0b3JJZH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVhdHVyZXM9e3RoaXMudXBkYXRlRmVhdHVyZXN9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZWRpdG9yPXt0aGlzfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1jb250ZW50XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fT5cbiAgICAgICAgICA8cHJlIGlkPXtcImM0Z0dlb0VkaXRvckdlb0RhdGFDb250ZW50XCJ9IGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3R5bGU9e3tvdmVyZmxvd1k6IFwic2Nyb2xsXCIsIG92ZXJmbG93WDogXCJub25lXCJ9fSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9IG9uSW5wdXQ9e3RoaXMuY2hhbmdlSlNPTn0+e3RoaXMuc3RhdGUuZmVhdHVyZXN9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YWRkQ29tcHN9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2UHJvcHMub3BlbiAmJiAhdGhpcy5wcm9wcy5vcGVuKSB8fCAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbikpIHtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuLy8gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX2NvbXBvbmVudHMgJiYgd2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9jb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfY29tcG9uZW50cywge2NvbXA6IHRoaXMsIGNvbnRhaW5lcjogXCIjYzRnLWVkaXRvci1wb3J0YWxcIn0pO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcbiAgfVxufSJdLCJuYW1lcyI6WyJwcm9qZWN0RWRpdG9yTGFuZyIsImV4cG9ydHMiLCJMQU5HIiwiTUVUQURBVEFfRURJVCIsIkRVUExJQ0FURV9FTEVNRU5UIiwiRElTUExBQ0VfRUxFTUVOVCIsIkRVUExJQ0FURV9BTkRfREVMRVRFIiwiQ0hPT1NFX1BST0pFQ1QiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkUiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT04iLCJST1RBVEVfRUxFTUVOVCIsIkRFU0VMRUNUX0VMRU1FTlQiLCJSRVZFUlRfRUxFTUVOVCIsIkNPTkZJUk1fREVMRVRFX0FMTCIsIkJVVFRPTl9ERVNFTEVDVF9BTEwiLCJCVVRUT05fREVMRVRFX0FMTCIsIkJVVFRPTl9ESVNQTEFDRV9BTEwiLCJCVVRUT05fQ09ORklSTSIsIkJVVFRPTl9DQU5DRUwiLCJCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEwiLCJCVVRUT05fVFJBTlNMQVRFX0FMTCIsIkJVVFRPTl9BUFBMWV9UUkFOU0xBVEUiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiQ1RSTF9FRElUT1IiLCJFRElUT1JfQVBJX0VSUk9SX1RJVExFIiwiTk9ORSIsIl9jNGdNYXBzQ29uc3RhbnRJMThuRGUiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudEkxOG5FbiIsIl9jNGdFZGl0b3JJMThuRGUiLCJtYXBzTGFuZyIsIm1hcERhdGEiLCJsYW5nIiwibGFuZ0NvbnN0YW50c0dlcm1hbiIsImxhbmdDb25zdGFudHNFbmdsaXNoIiwiZ2V0RWRpdG9yTGFuZ3VhZ2UiLCJsYW5nQ29uc3RhbnRzIiwialF1ZXJ5IiwiZXh0ZW5kIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfYzRnRWRpdG9ySTE4biIsIl9jb250cm9sIiwiX2xheWVyIiwiX2Zvcm1hdCIsIl9pbnRlcmFjdGlvbiIsIl9zb3VyY2UiLCJfb2wiLCJfZ2VvbSIsIl9jNGdNYXBzVXRpbHMiLCJfc3R5bGUiLCJfcHJvaiIsIl9jb29yZGluYXRlIiwiZSIsInQiLCJXZWFrTWFwIiwiciIsIm4iLCJfX2VzTW9kdWxlIiwibyIsImkiLCJmIiwiX19wcm90b19fIiwiX3R5cGVvZiIsImhhcyIsImdldCIsInNldCIsIl90IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiRWRpdG9yVmlldyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiRWRpdG9yQ29tcG9uZW50IiwiX0NvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2syIiwiY2xvc2UiLCJiaW5kIiwib3BlbiIsImNvdW50RWRpdG9ySWQiLCJhZGRGZWF0dXJlIiwicmVtb3ZlRmVhdHVyZSIsIm1vZGlmeUZlYXR1cmUiLCJjaGFuZ2VKU09OIiwibWFwQ29udHJvbGxlciIsImVkaXRvciIsInNjb3BlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsImRhdGEiLCJ0aGVtZURhdGEiLCJjb250cm9sTGFiZWxzIiwic3BhbiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJjbGFzc05hbWUiLCJvbiIsImV2ZW50IiwiaGlkZGVuIiwiZWRpdG9yQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJzdGF0ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb25maWciLCJhcnJMb2NzdHlsZXMiLCJoYW5kbGVDb25maWciLCJnZXRDb25maWd1cmF0aW9uIiwiZmVFZGl0b3JQcm9maWxlIiwiYmVFZGl0b3JQcm9maWxlIiwiY29udHJvbCIsInRhcmdldCIsIkNvbnRyb2wiLCJpc09wZW4iLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImluZGV4IiwiYXJyQ29tcG9uZW50cyIsImZpbmRJbmRleCIsIm5hbWUiLCJtb2RlcyIsImZlYXR1cmVzIiwiaW5wdXRGaWVsZCIsIiQiLCJ2YWwiLCJsZW5ndGgiLCJyZW5kZXJlZCIsInNldFRpbWVvdXQiLCJyZVJlbmRlciIsImN1cnJlbnRNb2RlIiwic3R5bGVEYXRhIiwicmFuZ2UiLCJlZGl0b3JJZCIsImFkZENvbXBvbmVudHMiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsInNldFpJbmRleCIsIkNvbGxlY3Rpb24iLCJlZGl0b3JMYXllciIsIlZlY3RvciIsInNvdXJjZSIsIlZlY3RvclNvdXJjZSIsImZvcm1hdCIsIkdlb0pTT04iLCJtYXAiLCJhZGRMYXllciIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJsYXllcnMiLCJnZXRMYXllcnMiLCJmb3JFYWNoIiwiYXJyYXkiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJuZXdDb3VudCIsImlkIiwiX3RoaXMzIiwiZnJvbnRlbmQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJfdGhpczQiLCJkcmF3U3R5bGVzIiwiZHJhd1N0eWxlIiwiX2xvb3AiLCJlbGVtZW50cyIsImoiLCJwdXNoIiwiY2hlY2tMb2NzdHlsZSIsInN0eWxlSWQiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJkb25lIiwicmVwbGFjZUFsbCIsImxpbmtJbnB1dCIsImdlb2pzb24iLCJKU09OIiwicGFyc2UiLCJmZWF0dXJlUHJvamVjdGlvbiIsInJlYWRGZWF0dXJlcyIsImdldFNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwianNvbkZlYXR1cmUiLCJzZXRHZW9tZXRyeSIsIkNpcmNsZSIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJjaGlsZE5vZGVzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVSYW5nZSIsImFkZFJhbmdlIiwiX3RoaXM1Iiwic3RhcnRPZmZzZXQiLCJfdGhpczYiLCJhcnJGZWF0dXJlcyIsInN0cmluZ2lmeSIsIl90aGlzNyIsInByb3BlcnRpZXMiLCJmZWF0dXJlSWQiLCJzcGxpY2UiLCJ1dGlscyIsImNhbGxIb29rRnVuY3Rpb25zIiwiYzRnTWFwc0hvb2tzIiwiaG9va19lZGl0b3JfcmVtb3ZlIiwiX3RoaXM4Iiwib2JqR2VvanNvbiIsInNldEFkZENvbXBzIiwiY29uc3RzdHIiLCJyZW5kZXIiLCJhZGRDb21wcyIsInRyYW5zZm9ybSIsInRvU3RyaW5nSERNUyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkyIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoaWRlQ29udGFpbmVyIiwiaGVhZGVyIiwiY2xvc2VCdG5UaXRsZSIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiQ0xPU0UiLCJ0b1VwcGVyQ2FzZSIsIm9uTW91c2VVcCIsIm1vZGUiLCJhY3RpdmUiLCJlZGl0b3JWYXJzIiwidXBkYXRlRmVhdHVyZXMiLCJkaXNwbGF5IiwiY29udGVudEVkaXRhYmxlIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25JbnB1dCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY29tcG9uZW50RGlkTW91bnQiLCJob29rX2VkaXRvcl9jb21wb25lbnRzIiwiY29tcCIsImNvbnRhaW5lciIsIkNvbXBvbmVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9