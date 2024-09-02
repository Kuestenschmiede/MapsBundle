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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
    if (_this.props.inputField && $(_this.props.inputField).val() && $(_this.props.inputField).val().length > 50) {
      features = $(_this.props.inputField).val();
      setTimeout(function () {
        _this.reRender();
      }, 200);
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
      if (this.props.inputField && this.state.features.length > 50) {
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
    }
  }]);
}(_react.Component);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQUlBLGlCQUFpQixHQUFBQyx5QkFBQSxHQUFHO0VBQzdCQyxJQUFJLEVBQUUsSUFBSTtFQUVWQyxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDQyxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeENDLGdCQUFnQixFQUFFLHdDQUF3QztFQUMxREMsb0JBQW9CLEVBQUUsc0RBQXNEO0VBQzVFQyxjQUFjLEVBQUUsdUJBQXVCO0VBQ3ZDQyw4QkFBOEIsRUFBRSxpQkFBaUI7RUFDakRDLDhCQUE4QixFQUFFLDBDQUEwQztFQUMxRUMsY0FBYyxFQUFFLGtCQUFrQjtFQUNsQ0MsZ0JBQWdCLEVBQUUsMEJBQTBCO0VBQzVDQyxjQUFjLEVBQUUsaUNBQWlDO0VBQ2pEQyxrQkFBa0IsRUFBRSx3REFBd0Q7RUFDNUVDLG1CQUFtQixFQUFFLDJCQUEyQjtFQUNoREMsaUJBQWlCLEVBQUUsOEJBQThCO0VBQ2pEQyxtQkFBbUIsRUFBRSxxREFBcUQ7RUFDMUVDLGNBQWMsRUFBRSxZQUFZO0VBQzVCQyxhQUFhLEVBQUUsV0FBVztFQUMxQkMsd0JBQXdCLEVBQUUsa0VBQWtFO0VBQzVGQyxvQkFBb0IsRUFBRSxnREFBZ0Q7RUFDdEVDLHNCQUFzQixFQUFFLHVCQUF1QjtFQUUvQ0MsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLDZCQUE2QixFQUFFLDhCQUE4QjtFQUM3REMsMkJBQTJCLEVBQUUsbUJBQW1CO0VBQ2hEQyxvQkFBb0IsRUFBRSxtQkFBbUI7RUFDekNDLHFCQUFxQixFQUFFLHlCQUF5QjtFQUNoREMscUJBQXFCLEVBQUUsb0JBQW9CO0VBQzNDQyxrQkFBa0IsRUFBRSxrREFBa0Q7RUFDdEVDLDZCQUE2QixFQUFFLHdFQUF3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LEtBQUssQ0FBQ0ssSUFBSSxJQUFNMEwsU0FBUyxDQUFDMUwsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDMEIsS0FBSyxDQUFDMUIsSUFBSyxFQUFFO1FBQ2hGM0QsTUFBTSxDQUFDLElBQUksQ0FBQ3NELEtBQUssQ0FBQ1csYUFBYSxDQUFDa0IsZUFBZSxDQUFDLENBQUNHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNwRztNQUNJO0lBQ0Y7RUFBQztJQUFBc0QsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlHLGlCQUFpQkEsQ0FBQSxFQUFHO01BQ2xCLElBQUl6RCxNQUFNLENBQUNvQixZQUFZLENBQUNzQyxzQkFBc0IsSUFBSTFELE1BQU0sQ0FBQ29CLFlBQVksQ0FBQ3NDLHNCQUFzQixDQUFDM0ksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2R21HLG1CQUFLLENBQUNDLGlCQUFpQixDQUFDbkIsTUFBTSxDQUFDb0IsWUFBWSxDQUFDc0Msc0JBQXNCLEVBQUU7VUFBQ0MsSUFBSSxFQUFFLElBQUk7VUFBRUMsU0FBUyxFQUFFO1FBQW9CLENBQUMsQ0FBQztNQUNwSDtJQUNGO0VBQUM7QUFBQSxFQTdWMENDLGdCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1lZGl0b3ItaTE4bi1kZS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3ItY29tcG9uZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA5XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyNCwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmV4cG9ydCB2YXIgcHJvamVjdEVkaXRvckxhbmcgPSB7XG4gIExBTkc6ICdkZScsXG5cbiAgTUVUQURBVEFfRURJVDogXCJNZXRhZGF0ZW4gYmVhcmJlaXRlblwiLFxuICBEVVBMSUNBVEVfRUxFTUVOVDogXCJFbGVtZW50IGR1cGxpemllcmVuXCIsXG4gIERJU1BMQUNFX0VMRU1FTlQ6IFwiRWxlbWVudCBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgRFVQTElDQVRFX0FORF9ERUxFVEU6IFwiRWxlbWVudCBkdXBsaXppZXJlbiAmIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBDSE9PU0VfUFJPSkVDVDogXCJXw6RobGUgZWluIFByb2pla3QgLi4uXCIsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURV9IRUFETElORTogXCJFbGVtZW50IGzDtnNjaGVuXCIsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURV9RVUVTVElPTjogXCJXb2xsZW4gU2llIGRhcyBFbGVtZW50IHdpcmtsaWNoIGzDtnNjaGVuP1wiLFxuICBST1RBVEVfRUxFTUVOVDogXCJFbGVtZW50IHJvdGllcmVuXCIsXG4gIERFU0VMRUNUX0VMRU1FTlQ6IFwiRWxlbWVudC1BdXN3YWhsIGF1ZmhlYmVuXCIsXG4gIFJFVkVSVF9FTEVNRU5UOiBcIkxldHp0ZSBWZXJzaW9uIHdpZWRlcmhlcnN0ZWxsZW5cIixcbiAgQ09ORklSTV9ERUxFVEVfQUxMOiBcIldvbGxlbiBTaWUgZGllIGF1c2dld8OkaGx0ZW4gRWxlbWVudGUgd2lya2xpY2ggbMO2c2NoZW4/XCIsXG4gIEJVVFRPTl9ERVNFTEVDVF9BTEw6IFwiQXVzd2FobCBmw7xyIGFsbGUgYXVmaGViZW5cIixcbiAgQlVUVE9OX0RFTEVURV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGzDtnNjaGVuXCIsXG4gIEJVVFRPTl9ESVNQTEFDRV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fQ09ORklSTTogXCJCZXN0w6R0aWdlblwiLFxuICBCVVRUT05fQ0FOQ0VMOiBcIkFiYnJlY2hlblwiLFxuICBCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGtvcGllcmVuIHVuZCBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX1RSQU5TTEFURV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGF1ZiBkZXIgS2FydGUgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX0FQUExZX1RSQU5TTEFURTogXCLDhG5kZXJ1bmdlbiDDvGJlcm5laG1lblwiLFxuXG4gIEVESVRPUjogJ0VkaXRvcicsXG4gIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnRWRpdGllcmVuIGJlZW5kZW4nLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdBa3RpdmVzIEVsZW1lbnQgbMO2c2NoZW4nLFxuICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50ZSBlZGl0aWVyZW4nLFxuICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ1B1bmt0d2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG4gIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG5cbiAgRURJVE9SX0FQSV9FUlJPUl9USVRMRTogJ0VzIGlzdCBlaW4gRmVobGVyIGF1ZmdldHJldGVuJyxcblxuICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOVxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjQsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQge2xhbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7cHJvamVjdEVkaXRvckxhbmd9IGZyb20gXCIuL2M0Zy1lZGl0b3ItaTE4bi1kZVwiO1xubGV0IG1hcHNMYW5nID0ge307XG5cbmlmICh0eXBlb2YgbWFwRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAobWFwRGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH0gZWxzZSBpZiAobWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNFbmdsaXNoO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0b3JMYW5ndWFnZShtYXBEYXRhKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfVxufVxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0galF1ZXJ5LmV4dGVuZChtYXBzTGFuZywgcHJvamVjdEVkaXRvckxhbmcpOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDlcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDI0LCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQge0VkaXRvclZpZXd9IGZyb20gXCIuL2M0Zy1lZGl0b3Itdmlldy5qc3hcIjtcbmNvbnN0IEVkaXRvclZpZXcgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiKSk7XG5pbXBvcnQge2dldEVkaXRvckxhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctZWRpdG9yLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge0dlb0pTT059IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0ZpbGwsIFN0eWxlLCBUZXh0fSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7Z2V0LCB0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3RvU3RyaW5nSERNU30gZnJvbSBcIm9sL2Nvb3JkaW5hdGVcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RWRpdG9ySWQgPSB0aGlzLmNvdW50RWRpdG9ySWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEZlYXR1cmUgPSB0aGlzLmFkZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUZlYXR1cmUgPSB0aGlzLnJlbW92ZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUpTT04gPSB0aGlzLmNoYW5nZUpTT04uYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yID0gdGhpcztcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGlmIChwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEudGhlbWVEYXRhICYmIHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS50aGVtZURhdGEuY29udHJvbExhYmVscykge1xuICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmlubmVyVGV4dCA9IFwiRWRpdG9yXCI7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uLnRpdGxlID0gXCJFZGl0b3JcIjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLWVkaXRvci1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIGM0Zy1jbG9zZVwiO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIHRoaXMuYXJyTG9jc3R5bGVzID0gW107XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwcm9wcy5tYXBDb250cm9sbGVyO1xuXG4gICAgaWYgKHByb3BzLmNvbmZpZykge1xuICAgICAgdGhpcy5oYW5kbGVDb25maWcocHJvcHMuY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmdldENvbmZpZ3VyYXRpb24obWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSB8fCBtYXBDb250cm9sbGVyLmRhdGEuYmVFZGl0b3JQcm9maWxlLCAhIW1hcENvbnRyb2xsZXIuZGF0YS5mZUVkaXRvclByb2ZpbGUpO1xuICAgIH1cblxuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldEVkaXRvckxhbmd1YWdlKG1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBjb250cm9sLmlzT3BlbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5lZGl0b3IpIHtcbiAgICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmVkaXRvciA9IGNvbnRyb2w7XG4gICAgfVxuICAgIGxldCBpbmRleCA9IG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IFwiZWRpdG9yXCIpO1xuICAgIG1hcENvbnRyb2xsZXIuYXJyQ29tcG9uZW50c1tpbmRleF0uY29udHJvbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcIlBvaW50XCIsIFwiTGluZVN0cmluZ1wiLCBcIlBvbHlnb25cIiwgXCJDaXJjbGVcIl07XG4gICAgbGV0IGZlYXR1cmVzO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0RmllbGQgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKS5sZW5ndGggPiA1MCkge1xuICAgICAgZmVhdHVyZXMgPSAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgICB9LCAyMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSAne1widHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsIFwiZmVhdHVyZXNcIjogW119J1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgc3R5bGVEYXRhOiB7fSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICByYW5nZTogMCxcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgIGVkaXRvcklkOiAwLFxuICAgICAgYWRkQ29tcG9uZW50czogW11cbiAgICB9O1xuICAgIHRoaXMuc3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgIGxldCBzaXplID0gZmFsc2U7XG4gICAgICBsZXQgcmV0dXJuU3R5bGUgPSBbXTtcbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0ICYmIGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpKSB7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlcycpO1xuICAgICAgICBzaXplID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgICAgICBmZWF0dXJlID0gZmVhdHVyZXNbMF07XG4gICAgICB9XG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldFN0eWxlKCkpIHtcbiAgICAgICAgcmV0dXJuU3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0ICYmIGZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpKSB7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IGZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICBpZiAoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXMgJiYgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdKSB7XG4gICAgICAgICAgaWYgKCFzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5nZXRTdHlsZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZTtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVyblN0eWxlID0gc3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbiwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVyblN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJldHVyblN0eWxlWzBdICYmIGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQoJ3pJbmRleCcpKSB7XG4gICAgICAgIHJldHVyblN0eWxlWzBdLnNldFpJbmRleChmZWF0dXJlLmdldCgnekluZGV4JykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblN0eWxlXG4gICAgfTtcbiAgICB0aGlzLmZlYXR1cmVzID0gbmV3IENvbGxlY3Rpb24oKTtcbiAgICB0aGlzLmVkaXRvckxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICBzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2Uoe2Zvcm1hdDogbmV3IEdlb0pTT04oKX0pLFxuICAgICAgc3R5bGU6IHRoaXMuc3R5bGVGdW5jdGlvblxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRMYXllcnMoKTtcbiAgICBsZXQgYWRkTGF5ZXIgPSB0cnVlO1xuICAgIGxheWVycy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVkaXRvckxheWVyKSB7XG4gICAgICAgIGFkZExheWVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoYWRkTGF5ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4vLyAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGNvdW50RWRpdG9ySWQgKCkge1xuICAgIGxldCBuZXdDb3VudCA9IHRoaXMuc3RhdGUuZWRpdG9ySWQgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdG9ySWQ6IG5ld0NvdW50XG4gICAgfSlcbiAgfVxuXG4gIGdldENvbmZpZ3VyYXRpb24gKGlkLCBmcm9udGVuZCA9IHRydWUpIHtcbiAgICBsZXQgdXJsO1xuICAgIGlmIChmcm9udGVuZCkge1xuICAgICAgdXJsID0gXCJjb240Z2lzL2VkaXRvclNlcnZpY2UvXCIgKyBpZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZUJhY2tlbmQvXCIgKyBpZDtcbiAgICB9XG5cbiAgICBmZXRjaCh1cmwpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgKGpzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmlnKGpzb24pO1xuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ29uZmlnIChqc29uKSB7XG4gICAgZm9yIChsZXQgaSBpbiBqc29uLmRyYXdTdHlsZXMpIHtcbiAgICAgIGlmIChqc29uLmRyYXdTdHlsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbaV0gPSBbXTtcbiAgICAgICAgbGV0IGRyYXdTdHlsZSA9IGpzb24uZHJhd1N0eWxlc1tpXTtcbiAgICAgICAgZm9yIChsZXQgaiBpbiBkcmF3U3R5bGUuZWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZHJhd1N0eWxlLmVsZW1lbnRzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRyYXdTdHlsZS5lbGVtZW50c1tqXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgY2hlY2tMb2NzdHlsZSA9IHRoaXMuYXJyTG9jc3R5bGVzLmZpbmRJbmRleCgobG9jc3R5bGUpID0+IGxvY3N0eWxlID09PSBlbGVtZW50LnN0eWxlSWQpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTG9jc3R5bGUgPT09IC0xICYmIGVsZW1lbnQuc3R5bGVJZCkge1xuICAgICAgICAgICAgICB0aGlzLmFyckxvY3N0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXModGhpcy5hcnJMb2NzdHlsZXMsIHtcbiAgICAgIFwiZG9uZVwiOiAoc3R5bGVEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0eWxlRGF0YTogc3R5bGVEYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlUmVuZGVyKCl7XG4gICAgdHJ5e1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZXMubGVuZ3RoID4gNTApIHtcbiAgICAgICAgLy8gcmVwbGFjZSBodG1sIHNwZWNpYWwgY2hhcnMgaW4gZ2VvanNvbiBzdHJpbmdcbiAgICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlcyA9IHRoaXMuc3RhdGUuZmVhdHVyZXMucmVwbGFjZUFsbCgnJiMzNDsnLCAnXCInKTtcblxuICAgICAgICB0aGlzLmxpbmtJbnB1dCgpO1xuICAgICAgICBsZXQgZ2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IG5ldyBHZW9KU09OKHtcbiAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgICAgICB9KS5yZWFkRmVhdHVyZXMoZ2VvanNvbik7XG4gICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZmVhdHVyZXMpIHtcbiAgICAgICAgICBpZiAoZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGxldCBqc29uRmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgaWYgKGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpIHtcbiAgICAgICAgICAgICAganNvbkZlYXR1cmUuc2V0R2VvbWV0cnkobmV3IENpcmNsZShqc29uRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCksIGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGpzb25GZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUucmFuZ2UpIHtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICBsZXQgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgIGxldCBzdGFydENvbnRhaW5lciA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0gfHwgcmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgICByYW5nZS5zZXRTdGFydChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICByYW5nZS5zZXRFbmQoc3RhcnRDb250YWluZXIsIHRoaXMuc3RhdGUucmFuZ2UpO1xuICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSlNPTihldmVudCkge1xuICAgIGxldCByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLnN0YXJ0T2Zmc2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVzOiBldmVudC50YXJnZXQuaW5uZXJUZXh0LCByYW5nZTogcmFuZ2V9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgfSlcbiAgfVxuXG4gIGFkZEZlYXR1cmUgKGZlYXR1cmUpIHtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuXG4gICAgYXJyRmVhdHVyZXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICBsZXQgZmVhdHVyZXMgPSBKU09OLnN0cmluZ2lmeShhcnJGZWF0dXJlcywgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG5cbiAgcmVtb3ZlRmVhdHVyZSAoZ2VvanNvbikge1xuICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5mZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIGFyckZlYXR1cmVzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlSWQsIDEpO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgIH0sICgpID0+IHt0aGlzLmxpbmtJbnB1dCgpfSk7XG4gICAgdXRpbHMuY2FsbEhvb2tGdW5jdGlvbnMod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9yZW1vdmUsIGdlb2pzb24pO1xuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZSAoZ2VvanNvbikge1xuICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICBsZXQgb2JqR2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gb2JqR2VvanNvbi5mZWF0dXJlcztcbiAgICBsZXQgZmVhdHVyZUlkID0gYXJyRmVhdHVyZXMuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5wcm9wZXJ0aWVzLmVkaXRvcklkID09PSBlZGl0b3JJZDtcbiAgICB9KTtcbiAgICBvYmpHZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJZF0gPSBnZW9qc29uO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KG9iakdlb2pzb24sIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSwgKCkgPT4ge3RoaXMubGlua0lucHV0KCl9KTtcbiAgfVxuXG4gIGxpbmtJbnB1dCAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiB0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpOyAvL2xpbmsgdG8gaW5wdXRGaWVsZFxuICAgIH1cbiAgfVxuXG4gIHNldEFkZENvbXBzKGNvbnN0c3RyLCBjb25maWcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgY29uc3RzdHI6IGNvbnN0c3RyXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBhZGRDb21wcztcbiAgICBpZiAodGhpcy5zdGF0ZS5jb25zdHN0cikge1xuICAgICAgYWRkQ29tcHMgPSA8dGhpcy5zdGF0ZS5jb25zdHN0ciBjb25maWc9e3RoaXMuc3RhdGUuY29uZmlnfSBnZXQ9e2dldH0gdHJhbnNmb3JtPXt0cmFuc2Zvcm19IHRvU3RyaW5nSERNUz17dG9TdHJpbmdIRE1TfSBzb3VyY2U9e3RoaXMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCl9IGZvcm1hdD17bmV3IEdlb0pTT04oKX0vPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3Itd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWVkaXRvci1oZWFkZXJcIn0gaGVhZGVyQ2xhc3M9e1wiYzRnLWVkaXRvci1oZWFkbGluZVwifSBoaWRlQ29udGFpbmVyPXtcIi5jNGctZWRpdG9yLWNvbnRhaW5lci1yaWdodFwifVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5FRElUT1J9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DVFJMX0VESVRPUn0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgICAge3RoaXMubW9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gXCJzZWxlY3RcIiB8fCAoc2NvcGUuY29uZmlnW2VsZW1lbnRdICYmIHNjb3BlLmNvbmZpZ1tlbGVtZW50XS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBzY29wZS5sYW5nQ29uc3RhbnRzW1wiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1wiICsgZWxlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItXCIgKyBlbGVtZW50ICsgXCIgIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfSBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnNldFN0YXRlKHtjdXJyZW50TW9kZTogZWxlbWVudH0pfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEVkaXRvclZpZXcgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3Itdmlld1wifSBzdHlsZUZ1bmN0aW9uPXt0aGlzLnN0eWxlRnVuY3Rpb259IG1vZGU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGV9IHN0eWxlRGF0YT17dGhpcy5zdGF0ZS5zdHlsZURhdGF9XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzPXt0aGlzLmNvbmZpZ1t0aGlzLnN0YXRlLmN1cnJlbnRNb2RlXSA/IHRoaXMuY29uZmlnW3RoaXMuc3RhdGUuY3VycmVudE1vZGVdOiBbXX0gYWN0aXZlPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXt0aGlzLmZlYXR1cmVzfSBlZGl0b3JWYXJzPXt0aGlzLnByb3BzLmNvbmZpZy5lZGl0b3JWYXJzfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZUZlYXR1cmV9IG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5RmVhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgYWRkRmVhdHVyZT17dGhpcy5hZGRGZWF0dXJlfSBlZGl0b3JMYXllcj17dGhpcy5lZGl0b3JMYXllcn0gZWRpdG9ySWQ9e3RoaXMuc3RhdGUuZWRpdG9ySWR9IGNvdW50RWRpdG9ySWQ9e3RoaXMuY291bnRFZGl0b3JJZH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmVhdHVyZXM9e3RoaXMudXBkYXRlRmVhdHVyZXN9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZWRpdG9yPXt0aGlzfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1jb250ZW50XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJub25lXCJ9fT5cbiAgICAgICAgICA8cHJlIGNvbnRlbnRFZGl0YWJsZT17dHJ1ZX0gc3R5bGU9e3tvdmVyZmxvd1k6IFwic2Nyb2xsXCIsIG92ZXJmbG93WDogXCJub25lXCJ9fSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9IG9uSW5wdXQ9e3RoaXMuY2hhbmdlSlNPTn0+e3RoaXMuc3RhdGUuZmVhdHVyZXN9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YWRkQ29tcHN9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2UHJvcHMub3BlbiAmJiAhdGhpcy5wcm9wcy5vcGVuKSB8fCAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbikpIHtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuLy8gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX2NvbXBvbmVudHMgJiYgd2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9jb21wb25lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfY29tcG9uZW50cywge2NvbXA6IHRoaXMsIGNvbnRhaW5lcjogXCIjYzRnLWVkaXRvci1wb3J0YWxcIn0pO1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJwcm9qZWN0RWRpdG9yTGFuZyIsImV4cG9ydHMiLCJMQU5HIiwiTUVUQURBVEFfRURJVCIsIkRVUExJQ0FURV9FTEVNRU5UIiwiRElTUExBQ0VfRUxFTUVOVCIsIkRVUExJQ0FURV9BTkRfREVMRVRFIiwiQ0hPT1NFX1BST0pFQ1QiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkUiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT04iLCJST1RBVEVfRUxFTUVOVCIsIkRFU0VMRUNUX0VMRU1FTlQiLCJSRVZFUlRfRUxFTUVOVCIsIkNPTkZJUk1fREVMRVRFX0FMTCIsIkJVVFRPTl9ERVNFTEVDVF9BTEwiLCJCVVRUT05fREVMRVRFX0FMTCIsIkJVVFRPTl9ESVNQTEFDRV9BTEwiLCJCVVRUT05fQ09ORklSTSIsIkJVVFRPTl9DQU5DRUwiLCJCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEwiLCJCVVRUT05fVFJBTlNMQVRFX0FMTCIsIkJVVFRPTl9BUFBMWV9UUkFOU0xBVEUiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiQ1RSTF9FRElUT1IiLCJFRElUT1JfQVBJX0VSUk9SX1RJVExFIiwiTk9ORSIsIl9jNGdNYXBzQ29uc3RhbnRJMThuRGUiLCJyZXF1aXJlIiwiX2M0Z01hcHNDb25zdGFudEkxOG5FbiIsIl9jNGdFZGl0b3JJMThuRGUiLCJtYXBzTGFuZyIsIm1hcERhdGEiLCJsYW5nIiwibGFuZ0NvbnN0YW50c0dlcm1hbiIsImxhbmdDb25zdGFudHNFbmdsaXNoIiwiZ2V0RWRpdG9yTGFuZ3VhZ2UiLCJsYW5nQ29uc3RhbnRzIiwialF1ZXJ5IiwiZXh0ZW5kIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfYzRnRWRpdG9ySTE4biIsIl9jb250cm9sIiwiX2xheWVyIiwiX2Zvcm1hdCIsIl9pbnRlcmFjdGlvbiIsIl9zb3VyY2UiLCJfb2wiLCJfZ2VvbSIsIl9jNGdNYXBzVXRpbHMiLCJfc3R5bGUiLCJfcHJvaiIsIl9jb29yZGluYXRlIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiZSIsIldlYWtNYXAiLCJyIiwidCIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiaGFzIiwiZ2V0IiwibiIsIl9fcHJvdG9fXyIsImEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpIiwic2V0IiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJFZGl0b3JWaWV3IiwiUmVhY3QiLCJsYXp5IiwiVGl0bGViYXIiLCJFZGl0b3JDb21wb25lbnQiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjazIiLCJjbG9zZSIsImJpbmQiLCJvcGVuIiwiY291bnRFZGl0b3JJZCIsImFkZEZlYXR1cmUiLCJyZW1vdmVGZWF0dXJlIiwibW9kaWZ5RmVhdHVyZSIsImNoYW5nZUpTT04iLCJtYXBDb250cm9sbGVyIiwiZWRpdG9yIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwiZGF0YSIsInRoZW1lRGF0YSIsImNvbnRyb2xMYWJlbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIm9uIiwiZXZlbnQiLCJoaWRkZW4iLCJlZGl0b3JDb250YWluZXIiLCJpbmNsdWRlcyIsInN0YXRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbmZpZyIsImFyckxvY3N0eWxlcyIsImhhbmRsZUNvbmZpZyIsImdldENvbmZpZ3VyYXRpb24iLCJmZUVkaXRvclByb2ZpbGUiLCJiZUVkaXRvclByb2ZpbGUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImlzT3BlbiIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwiaW5kZXgiLCJhcnJDb21wb25lbnRzIiwiZmluZEluZGV4IiwibmFtZSIsIm1vZGVzIiwiZmVhdHVyZXMiLCJpbnB1dEZpZWxkIiwiJCIsInZhbCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJyZVJlbmRlciIsImN1cnJlbnRNb2RlIiwic3R5bGVEYXRhIiwicmFuZ2UiLCJlZGl0b3JJZCIsImFkZENvbXBvbmVudHMiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsInNldFpJbmRleCIsIkNvbGxlY3Rpb24iLCJlZGl0b3JMYXllciIsIlZlY3RvciIsInNvdXJjZSIsIlZlY3RvclNvdXJjZSIsImZvcm1hdCIsIkdlb0pTT04iLCJtYXAiLCJhZGRMYXllciIsIl9pbmhlcml0czIiLCJfY3JlYXRlQ2xhc3MyIiwia2V5IiwidmFsdWUiLCJfdGhpczIiLCJsYXllcnMiLCJnZXRMYXllcnMiLCJmb3JFYWNoIiwiYXJyYXkiLCJzZXRTdGF0ZSIsInNldE9wZW5Db21wb25lbnQiLCJuZXdDb3VudCIsImlkIiwiX3RoaXMzIiwiZnJvbnRlbmQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJfdGhpczQiLCJkcmF3U3R5bGVzIiwiZHJhd1N0eWxlIiwiX2xvb3AiLCJlbGVtZW50cyIsImoiLCJwdXNoIiwiY2hlY2tMb2NzdHlsZSIsInN0eWxlSWQiLCJsb2FkTG9jYXRpb25TdHlsZXMiLCJkb25lIiwicmVwbGFjZUFsbCIsImxpbmtJbnB1dCIsImdlb2pzb24iLCJKU09OIiwicGFyc2UiLCJmZWF0dXJlUHJvamVjdGlvbiIsInJlYWRGZWF0dXJlcyIsImdldFNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwianNvbkZlYXR1cmUiLCJzZXRHZW9tZXRyeSIsIkNpcmNsZSIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJjaGlsZE5vZGVzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVSYW5nZSIsImFkZFJhbmdlIiwiX3RoaXM1Iiwic3RhcnRPZmZzZXQiLCJfdGhpczYiLCJhcnJGZWF0dXJlcyIsInN0cmluZ2lmeSIsIl90aGlzNyIsInByb3BlcnRpZXMiLCJmZWF0dXJlSWQiLCJzcGxpY2UiLCJ1dGlscyIsImNhbGxIb29rRnVuY3Rpb25zIiwiYzRnTWFwc0hvb2tzIiwiaG9va19lZGl0b3JfcmVtb3ZlIiwiX3RoaXM4Iiwib2JqR2VvanNvbiIsInNldEFkZENvbXBzIiwiY29uc3RzdHIiLCJyZW5kZXIiLCJhZGRDb21wcyIsInRyYW5zZm9ybSIsInRvU3RyaW5nSERNUyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkyIiwid3JhcHBlckNsYXNzIiwiaGVhZGVyQ2xhc3MiLCJoaWRlQ29udGFpbmVyIiwiaGVhZGVyIiwiY2xvc2VCdG5UaXRsZSIsImNsb3NlQnRuQ2xhc3MiLCJjbG9zZUJ0bkNiIiwiQ0xPU0UiLCJ0b1VwcGVyQ2FzZSIsIm9uTW91c2VVcCIsIm1vZGUiLCJhY3RpdmUiLCJlZGl0b3JWYXJzIiwidXBkYXRlRmVhdHVyZXMiLCJkaXNwbGF5IiwiY29udGVudEVkaXRhYmxlIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25JbnB1dCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY29tcG9uZW50RGlkTW91bnQiLCJob29rX2VkaXRvcl9jb21wb25lbnRzIiwiY29tcCIsImNvbnRhaW5lciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=