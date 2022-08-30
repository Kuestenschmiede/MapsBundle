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
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var projectEditorLang = {
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
exports.projectEditorLang = projectEditorLang;

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
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
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

var langConstants = jQuery.extend(mapsLang, _c4gEditorI18nDe.projectEditorLang);
exports.langConstants = langConstants;

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

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//import {EditorView} from "./c4g-editor-view.jsx";
var EditorView = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("src_Resources_public_js_c4g-popup-controller_js"), __webpack_require__.e("src_Resources_public_js_components_c4g-editor-view_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-view.jsx */ "./src/Resources/public/js/components/c4g-editor-view.jsx"));
});

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var EditorComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditorComponent, _Component);

  var _super = _createSuper(EditorComponent);

  function EditorComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, EditorComponent);
    _this = _super.call(this, props);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.countEditorId = _this.countEditorId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addFeature = _this.addFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeFeature = _this.removeFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.modifyFeature = _this.modifyFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.changeJSON = _this.changeJSON.bind((0, _assertThisInitialized2["default"])(_this));
    _this.props.mapController.editor = (0, _assertThisInitialized2["default"])(_this);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    var element = document.createElement('div');
    var button = document.createElement('button');
    button.title = "Editor";
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
      mapController.map.addControl(control);
    }

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

  (0, _createClass2["default"])(EditorComponent, [{
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
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close"); //    this.props.mapController.map.removeLayer(this.editorLayer);

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

          for (var j in drawStyle.elements) {
            if (drawStyle.elements.hasOwnProperty(j)) {
              (function () {
                var element = drawStyle.elements[j];

                _this4.config[i].push(element);

                var checkLocstyle = _this4.arrLocstyles.findIndex(function (locstyle) {
                  return locstyle === element.styleId;
                });

                if (checkLocstyle === -1 && element.styleId) {
                  _this4.arrLocstyles.push(element.styleId);
                }
              })();
            }
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
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close"); //      this.props.mapController.map.removeLayer(this.editorLayer);
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
  return EditorComponent;
}(_react.Component);

exports["default"] = EditorComponent;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFJQSxpQkFBaUIsR0FBRztFQUM3QkMsSUFBSSxFQUFFLElBRHVCO0VBRzdCQyxhQUFhLEVBQUUsc0JBSGM7RUFJN0JDLGlCQUFpQixFQUFFLHFCQUpVO0VBSzdCQyxnQkFBZ0IsRUFBRSx3Q0FMVztFQU03QkMsb0JBQW9CLEVBQUUsc0RBTk87RUFPN0JDLGNBQWMsRUFBRSx1QkFQYTtFQVE3QkMsOEJBQThCLEVBQUUsaUJBUkg7RUFTN0JDLDhCQUE4QixFQUFFLDBDQVRIO0VBVTdCQyxjQUFjLEVBQUUsa0JBVmE7RUFXN0JDLGdCQUFnQixFQUFFLDBCQVhXO0VBWTdCQyxjQUFjLEVBQUUsaUNBWmE7RUFhN0JDLGtCQUFrQixFQUFFLHdEQWJTO0VBYzdCQyxtQkFBbUIsRUFBRSwyQkFkUTtFQWU3QkMsaUJBQWlCLEVBQUUsOEJBZlU7RUFnQjdCQyxtQkFBbUIsRUFBRSxxREFoQlE7RUFpQjdCQyxjQUFjLEVBQUUsWUFqQmE7RUFrQjdCQyxhQUFhLEVBQUUsV0FsQmM7RUFtQjdCQyx3QkFBd0IsRUFBRSxrRUFuQkc7RUFvQjdCQyxvQkFBb0IsRUFBRSxnREFwQk87RUFxQjdCQyxzQkFBc0IsRUFBRSx1QkFyQks7RUF1QjdCQyxNQUFNLEVBQUUsUUF2QnFCO0VBd0I3QkMsNkJBQTZCLEVBQUUsOEJBeEJGO0VBeUI3QkMsMkJBQTJCLEVBQUUsbUJBekJBO0VBMEI3QkMsb0JBQW9CLEVBQUUsbUJBMUJPO0VBMkI3QkMscUJBQXFCLEVBQUUseUJBM0JNO0VBNEI3QkMscUJBQXFCLEVBQUUsb0JBNUJNO0VBNkI3QkMsa0JBQWtCLEVBQUUsa0RBN0JTO0VBOEI3QkMsNkJBQTZCLEVBQUUsd0VBOUJGO0VB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bWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1lZGl0b3ItaTE4bi1kZS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1lZGl0b3ItY29tcG9uZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmV4cG9ydCB2YXIgcHJvamVjdEVkaXRvckxhbmcgPSB7XG4gIExBTkc6ICdkZScsXG5cbiAgTUVUQURBVEFfRURJVDogXCJNZXRhZGF0ZW4gYmVhcmJlaXRlblwiLFxuICBEVVBMSUNBVEVfRUxFTUVOVDogXCJFbGVtZW50IGR1cGxpemllcmVuXCIsXG4gIERJU1BMQUNFX0VMRU1FTlQ6IFwiRWxlbWVudCBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgRFVQTElDQVRFX0FORF9ERUxFVEU6IFwiRWxlbWVudCBkdXBsaXppZXJlbiAmIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBDSE9PU0VfUFJPSkVDVDogXCJXw6RobGUgZWluIFByb2pla3QgLi4uXCIsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURV9IRUFETElORTogXCJFbGVtZW50IGzDtnNjaGVuXCIsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURV9RVUVTVElPTjogXCJXb2xsZW4gU2llIGRhcyBFbGVtZW50IHdpcmtsaWNoIGzDtnNjaGVuP1wiLFxuICBST1RBVEVfRUxFTUVOVDogXCJFbGVtZW50IHJvdGllcmVuXCIsXG4gIERFU0VMRUNUX0VMRU1FTlQ6IFwiRWxlbWVudC1BdXN3YWhsIGF1ZmhlYmVuXCIsXG4gIFJFVkVSVF9FTEVNRU5UOiBcIkxldHp0ZSBWZXJzaW9uIHdpZWRlcmhlcnN0ZWxsZW5cIixcbiAgQ09ORklSTV9ERUxFVEVfQUxMOiBcIldvbGxlbiBTaWUgZGllIGF1c2dld8OkaGx0ZW4gRWxlbWVudGUgd2lya2xpY2ggbMO2c2NoZW4/XCIsXG4gIEJVVFRPTl9ERVNFTEVDVF9BTEw6IFwiQXVzd2FobCBmw7xyIGFsbGUgYXVmaGViZW5cIixcbiAgQlVUVE9OX0RFTEVURV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGzDtnNjaGVuXCIsXG4gIEJVVFRPTl9ESVNQTEFDRV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fQ09ORklSTTogXCJCZXN0w6R0aWdlblwiLFxuICBCVVRUT05fQ0FOQ0VMOiBcIkFiYnJlY2hlblwiLFxuICBCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGtvcGllcmVuIHVuZCBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX1RSQU5TTEFURV9BTEw6IFwiQXVzZ2V3w6RobHRlIEVsZW1lbnRlIGF1ZiBkZXIgS2FydGUgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX0FQUExZX1RSQU5TTEFURTogXCLDhG5kZXJ1bmdlbiDDvGJlcm5laG1lblwiLFxuXG4gIEVESVRPUjogJ0VkaXRvcicsXG4gIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnRWRpdGllcmVuIGJlZW5kZW4nLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdBa3RpdmVzIEVsZW1lbnQgbMO2c2NoZW4nLFxuICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50ZSBlZGl0aWVyZW4nLFxuICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ1B1bmt0d2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG4gIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG5cbiAgRURJVE9SX0FQSV9FUlJPUl9USVRMRTogJ0VzIGlzdCBlaW4gRmVobGVyIGF1ZmdldHJldGVuJyxcblxuICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQge2xhbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7cHJvamVjdEVkaXRvckxhbmd9IGZyb20gXCIuL2M0Zy1lZGl0b3ItaTE4bi1kZVwiO1xubGV0IG1hcHNMYW5nID0ge307XG5cbmlmICh0eXBlb2YgbWFwRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAobWFwRGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH0gZWxzZSBpZiAobWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNFbmdsaXNoO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0b3JMYW5ndWFnZShtYXBEYXRhKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfVxufVxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0galF1ZXJ5LmV4dGVuZChtYXBzTGFuZywgcHJvamVjdEVkaXRvckxhbmcpOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQge0VkaXRvclZpZXd9IGZyb20gXCIuL2M0Zy1lZGl0b3Itdmlldy5qc3hcIjtcbmNvbnN0IEVkaXRvclZpZXcgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiKSk7XG5pbXBvcnQge2dldEVkaXRvckxhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctZWRpdG9yLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge0dlb0pTT059IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0ZpbGwsIFN0eWxlLCBUZXh0fSBmcm9tIFwib2wvc3R5bGVcIjtcbmltcG9ydCB7Z2V0LCB0cmFuc2Zvcm19IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQge3RvU3RyaW5nSERNU30gZnJvbSBcIm9sL2Nvb3JkaW5hdGVcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RWRpdG9ySWQgPSB0aGlzLmNvdW50RWRpdG9ySWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEZlYXR1cmUgPSB0aGlzLmFkZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUZlYXR1cmUgPSB0aGlzLnJlbW92ZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUpTT04gPSB0aGlzLmNoYW5nZUpTT04uYmluZCh0aGlzKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yID0gdGhpcztcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBcIkVkaXRvclwiO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZWRpdG9yLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgYzRnLWNsb3NlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBoaWRkZW4gPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGpRdWVyeShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2M0Zy1jbG9zZScpLmFkZENsYXNzKCdjNGctb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdGhpcy5hcnJMb2NzdHlsZXMgPSBbXTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICBpZiAocHJvcHMuY29uZmlnKSB7XG4gICAgICB0aGlzLmhhbmRsZUNvbmZpZyhwcm9wcy5jb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbihtYXBDb250cm9sbGVyLmRhdGEuZmVFZGl0b3JQcm9maWxlIHx8IG1hcENvbnRyb2xsZXIuZGF0YS5iZUVkaXRvclByb2ZpbGUsICEhbWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0RWRpdG9yTGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGNvbnRyb2wuaXNPcGVuID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmVkaXRvcikge1xuICAgICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZWRpdG9yID0gY29udHJvbDtcbiAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgfVxuICAgIHRoaXMubW9kZXMgPSBbXCJzZWxlY3RcIiwgXCJQb2ludFwiLCBcIkxpbmVTdHJpbmdcIiwgXCJQb2x5Z29uXCIsIFwiQ2lyY2xlXCJdO1xuICAgIGxldCBmZWF0dXJlcztcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKSAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCkubGVuZ3RoID4gNTApIHtcbiAgICAgIGZlYXR1cmVzID0gJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpO1xuICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgdGhpcy5yZVJlbmRlcigpO1xuICAgICAgfSwgMjAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gJ3tcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLCBcImZlYXR1cmVzXCI6IFtdfSdcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjdXJyZW50TW9kZTogXCJzZWxlY3RcIixcbiAgICAgIHN0eWxlRGF0YToge30sXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgcmFuZ2U6IDAsXG4gICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICBlZGl0b3JJZDogMCxcbiAgICAgIGFkZENvbXBvbmVudHM6IFtdXG4gICAgfTtcbiAgICB0aGlzLnN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbihmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgICBsZXQgc2l6ZSA9IGZhbHNlO1xuICAgICAgbGV0IHJldHVyblN0eWxlID0gW107XG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCAmJiBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSkge1xuICAgICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICAgc2l6ZSA9IGZlYXR1cmVzLmxlbmd0aDtcbiAgICAgICAgZmVhdHVyZSA9IGZlYXR1cmVzWzBdO1xuICAgICAgfVxuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXRTdHlsZSgpKSB7XG4gICAgICAgIHJldHVyblN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCAmJiBmZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSBmZWF0dXJlLmdldCgnbG9jc3R5bGUnKTtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzICYmIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXSkge1xuICAgICAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKSB7XG4gICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uZ2V0U3R5bGVGdW5jdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGU7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm5TdHlsZSA9IHN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5TdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXR1cm5TdHlsZVswXSAmJiBmZWF0dXJlICYmIGZlYXR1cmUuZ2V0KCd6SW5kZXgnKSkge1xuICAgICAgICByZXR1cm5TdHlsZVswXS5zZXRaSW5kZXgoZmVhdHVyZS5nZXQoJ3pJbmRleCcpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5TdHlsZVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgdGhpcy5lZGl0b3JMYXllciA9IG5ldyBWZWN0b3Ioe1xuICAgICAgc291cmNlOiBuZXcgVmVjdG9yU291cmNlKHtmb3JtYXQ6IG5ldyBHZW9KU09OKCl9KSxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlRnVuY3Rpb25cbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgbGV0IGxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0TGF5ZXJzKCk7XG4gICAgbGV0IGFkZExheWVyID0gdHJ1ZTtcbiAgICBsYXllcnMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lZGl0b3JMYXllcikge1xuICAgICAgICBhZGRMYXllciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKGFkZExheWVyKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbi8vICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvdW50RWRpdG9ySWQgKCkge1xuICAgIGxldCBuZXdDb3VudCA9IHRoaXMuc3RhdGUuZWRpdG9ySWQgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdG9ySWQ6IG5ld0NvdW50XG4gICAgfSlcbiAgfVxuICBnZXRDb25maWd1cmF0aW9uIChpZCwgZnJvbnRlbmQgPSB0cnVlKSB7XG4gICAgbGV0IHVybDtcbiAgICBpZiAoZnJvbnRlbmQpIHtcbiAgICAgIHVybCA9IFwiY29uNGdpcy9lZGl0b3JTZXJ2aWNlL1wiICsgaWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXJsID0gXCJjb240Z2lzL2VkaXRvclNlcnZpY2VCYWNrZW5kL1wiICsgaWQ7XG4gICAgfVxuXG4gICAgZmV0Y2godXJsKS50aGVuKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgIChqc29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNvbmZpZyhqc29uKTtcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxuICBoYW5kbGVDb25maWcgKGpzb24pIHtcbiAgICBmb3IgKGxldCBpIGluIGpzb24uZHJhd1N0eWxlcykge1xuICAgICAgaWYgKGpzb24uZHJhd1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tpXSA9IFtdO1xuICAgICAgICBsZXQgZHJhd1N0eWxlID0ganNvbi5kcmF3U3R5bGVzW2ldO1xuICAgICAgICBmb3IgKGxldCBqIGluIGRyYXdTdHlsZS5lbGVtZW50cykge1xuICAgICAgICAgIGlmIChkcmF3U3R5bGUuZWxlbWVudHMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZHJhd1N0eWxlLmVsZW1lbnRzW2pdO1xuICAgICAgICAgICAgdGhpcy5jb25maWdbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBjaGVja0xvY3N0eWxlID0gdGhpcy5hcnJMb2NzdHlsZXMuZmluZEluZGV4KChsb2NzdHlsZSkgPT4gbG9jc3R5bGUgPT09IGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tMb2NzdHlsZSA9PT0gLTEgJiYgZWxlbWVudC5zdHlsZUlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXJyTG9jc3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmxvYWRMb2NhdGlvblN0eWxlcyh0aGlzLmFyckxvY3N0eWxlcywge1xuICAgICAgXCJkb25lXCI6IChzdHlsZURhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3R5bGVEYXRhOiBzdHlsZURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlUmVuZGVyKCl7XG4gICAgdHJ5e1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZXMubGVuZ3RoID4gNTApIHtcbiAgICAgICAgdGhpcy5saW5rSW5wdXQoKTtcbiAgICAgICAgbGV0IGdlb2pzb24gPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICBsZXQgZmVhdHVyZXMgPSBuZXcgR2VvSlNPTih7XG4gICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICAgICAgfSkucmVhZEZlYXR1cmVzKGdlb2pzb24pO1xuICAgICAgICBsZXQgc291cmNlID0gdGhpcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmZvckVhY2hGZWF0dXJlKChmZWF0dXJlKSA9PiB7XG4gICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpIGluIGZlYXR1cmVzKSB7XG4gICAgICAgICAgaWYgKGZlYXR1cmVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBsZXQganNvbkZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcbiAgICAgICAgICAgIGlmIChqc29uRmVhdHVyZS5nZXQoJ3JhZGl1cycpKSB7XG4gICAgICAgICAgICAgIGpzb25GZWF0dXJlLnNldEdlb21ldHJ5KG5ldyBDaXJjbGUoanNvbkZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpLCBqc29uRmVhdHVyZS5nZXQoJ3JhZGl1cycpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VyY2UuYWRkRmVhdHVyZShqc29uRmVhdHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnJhbmdlKSB7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgbGV0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICBsZXQgc3RhcnRDb250YWluZXIgPSByYW5nZS5zdGFydENvbnRhaW5lci5jaGlsZE5vZGVzWzBdIHx8IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnRDb250YWluZXIsIHRoaXMuc3RhdGUucmFuZ2UpO1xuICAgICAgcmFuZ2Uuc2V0RW5kKHN0YXJ0Q29udGFpbmVyLCB0aGlzLnN0YXRlLnJhbmdlKTtcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVSYW5nZShyYW5nZSk7XG4gICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VKU09OKGV2ZW50KSB7XG4gICAgbGV0IHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkuc3RhcnRPZmZzZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZXM6IGV2ZW50LnRhcmdldC5pbm5lclRleHQsIHJhbmdlOiByYW5nZX0sICgpID0+IHtcbiAgICAgIHRoaXMucmVSZW5kZXIoKTtcbiAgICB9KVxuICB9XG4gIGFkZEZlYXR1cmUgKGZlYXR1cmUpIHtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuXG4gICAgYXJyRmVhdHVyZXMuZmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICBsZXQgZmVhdHVyZXMgPSBKU09OLnN0cmluZ2lmeShhcnJGZWF0dXJlcywgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG4gIHJlbW92ZUZlYXR1cmUgKGdlb2pzb24pIHtcbiAgICBsZXQgZWRpdG9ySWQgPSBnZW9qc29uLnByb3BlcnRpZXMuZWRpdG9ySWQ7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICBsZXQgZmVhdHVyZUlkID0gYXJyRmVhdHVyZXMuZmVhdHVyZXMuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5wcm9wZXJ0aWVzLmVkaXRvcklkID09PSBlZGl0b3JJZDtcbiAgICB9KTtcbiAgICBhcnJGZWF0dXJlcy5mZWF0dXJlcy5zcGxpY2UoZmVhdHVyZUlkLCAxKTtcbiAgICBsZXQgZmVhdHVyZXMgPSBKU09OLnN0cmluZ2lmeShhcnJGZWF0dXJlcywgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfcmVtb3ZlLCBnZW9qc29uKTtcbiAgfVxuICBtb2RpZnlGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBvYmpHZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBvYmpHZW9qc29uLmZlYXR1cmVzO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIG9iakdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUlkXSA9IGdlb2pzb247XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkob2JqR2VvanNvbiwgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG4gIGxpbmtJbnB1dCAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiB0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpOyAvL2xpbmsgdG8gaW5wdXRGaWVsZFxuICAgIH1cbiAgfVxuICBzZXRBZGRDb21wcyhjb25zdHN0ciwgY29uZmlnKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIGNvbnN0c3RyOiBjb25zdHN0clxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFkZENvbXBzO1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnN0c3RyKSB7XG4gICAgICBhZGRDb21wcyA9IDx0aGlzLnN0YXRlLmNvbnN0c3RyIGNvbmZpZz17dGhpcy5zdGF0ZS5jb25maWd9IGdldD17Z2V0fSB0cmFuc2Zvcm09e3RyYW5zZm9ybX0gdG9TdHJpbmdIRE1TPXt0b1N0cmluZ0hETVN9IHNvdXJjZT17dGhpcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKX0gZm9ybWF0PXtuZXcgR2VvSlNPTigpfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1lZGl0b3ItY29udGFpbmVyLXJpZ2h0XCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLkVESVRPUn0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfRURJVE9SfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICB7dGhpcy5tb2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBcInNlbGVjdFwiIHx8IChzY29wZS5jb25maWdbZWxlbWVudF0gJiYgc2NvcGUuY29uZmlnW2VsZW1lbnRdLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgIGxldCB0aXRsZSA9IHNjb3BlLmxhbmdDb25zdGFudHNbXCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfXCIgKyBlbGVtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1cIiArIGVsZW1lbnQgKyBcIiAgXCIgKyAoZWxlbWVudCA9PT0gc2NvcGUuc3RhdGUuY3VycmVudE1vZGUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9IG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RWRpdG9yVmlldyBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12aWV3XCJ9IHN0eWxlRnVuY3Rpb249e3RoaXMuc3R5bGVGdW5jdGlvbn0gbW9kZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZX0gc3R5bGVEYXRhPXt0aGlzLnN0YXRlLnN0eWxlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM9e3RoaXMuY29uZmlnW3RoaXMuc3RhdGUuY3VycmVudE1vZGVdID8gdGhpcy5jb25maWdbdGhpcy5zdGF0ZS5jdXJyZW50TW9kZV06IFtdfSBhY3RpdmU9e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM9e3RoaXMuZmVhdHVyZXN9IGVkaXRvclZhcnM9e3RoaXMucHJvcHMuY29uZmlnLmVkaXRvclZhcnN9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlRmVhdHVyZX0gbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlGZWF0dXJlfVxuICAgICAgICAgICAgICAgICAgICBhZGRGZWF0dXJlPXt0aGlzLmFkZEZlYXR1cmV9IGVkaXRvckxheWVyPXt0aGlzLmVkaXRvckxheWVyfSBlZGl0b3JJZD17dGhpcy5zdGF0ZS5lZGl0b3JJZH0gY291bnRFZGl0b3JJZD17dGhpcy5jb3VudEVkaXRvcklkfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGZWF0dXJlcz17dGhpcy51cGRhdGVGZWF0dXJlc30gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSBlZGl0b3I9e3RoaXN9IGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWNvbnRlbnRcIn0gc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgIDxwcmUgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzdHlsZT17e292ZXJmbG93WTogXCJzY3JvbGxcIiwgb3ZlcmZsb3dYOiBcIm5vbmVcIn19IHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZz17dHJ1ZX0gb25JbnB1dD17dGhpcy5jaGFuZ2VKU09OfT57dGhpcy5zdGF0ZS5mZWF0dXJlc308L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthZGRDb21wc31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKChwcmV2UHJvcHMub3BlbiAmJiAhdGhpcy5wcm9wcy5vcGVuKSB8fCAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbikpIHtcbiAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuLy8gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAod2luZG93LmM0Z01hcHNIb29rcy5ob29rX2VkaXRvcl9jb21wb25lbnRzICYmIHdpbmRvdy5jNGdNYXBzSG9va3MuaG9va19lZGl0b3JfY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLmhvb2tfZWRpdG9yX2NvbXBvbmVudHMsIHtjb21wOiB0aGlzLCBjb250YWluZXI6IFwiI2M0Zy1lZGl0b3ItcG9ydGFsXCJ9KTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsicHJvamVjdEVkaXRvckxhbmciLCJMQU5HIiwiTUVUQURBVEFfRURJVCIsIkRVUExJQ0FURV9FTEVNRU5UIiwiRElTUExBQ0VfRUxFTUVOVCIsIkRVUExJQ0FURV9BTkRfREVMRVRFIiwiQ0hPT1NFX1BST0pFQ1QiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkUiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT04iLCJST1RBVEVfRUxFTUVOVCIsIkRFU0VMRUNUX0VMRU1FTlQiLCJSRVZFUlRfRUxFTUVOVCIsIkNPTkZJUk1fREVMRVRFX0FMTCIsIkJVVFRPTl9ERVNFTEVDVF9BTEwiLCJCVVRUT05fREVMRVRFX0FMTCIsIkJVVFRPTl9ESVNQTEFDRV9BTEwiLCJCVVRUT05fQ09ORklSTSIsIkJVVFRPTl9DQU5DRUwiLCJCVVRUT05fQ09QWV9ESVNQTEFDRV9BTEwiLCJCVVRUT05fVFJBTlNMQVRFX0FMTCIsIkJVVFRPTl9BUFBMWV9UUkFOU0xBVEUiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiQ1RSTF9FRElUT1IiLCJFRElUT1JfQVBJX0VSUk9SX1RJVExFIiwiTk9ORSIsIm1hcHNMYW5nIiwibWFwRGF0YSIsImxhbmciLCJsYW5nQ29uc3RhbnRzR2VybWFuIiwibGFuZ0NvbnN0YW50c0VuZ2xpc2giLCJnZXRFZGl0b3JMYW5ndWFnZSIsImxhbmdDb25zdGFudHMiLCJqUXVlcnkiLCJleHRlbmQiLCJFZGl0b3JWaWV3IiwiUmVhY3QiLCJsYXp5IiwiVGl0bGViYXIiLCJFZGl0b3JDb21wb25lbnQiLCJwcm9wcyIsImNsb3NlIiwiYmluZCIsIm9wZW4iLCJjb3VudEVkaXRvcklkIiwiYWRkRmVhdHVyZSIsInJlbW92ZUZlYXR1cmUiLCJtb2RpZnlGZWF0dXJlIiwiY2hhbmdlSlNPTiIsIm1hcENvbnRyb2xsZXIiLCJlZGl0b3IiLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwib24iLCJldmVudCIsImhpZGRlbiIsImVkaXRvckNvbnRhaW5lciIsImluY2x1ZGVzIiwic3RhdGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY29uZmlnIiwiYXJyTG9jc3R5bGVzIiwiaGFuZGxlQ29uZmlnIiwiZ2V0Q29uZmlndXJhdGlvbiIsImRhdGEiLCJmZUVkaXRvclByb2ZpbGUiLCJiZUVkaXRvclByb2ZpbGUiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsImlzT3BlbiIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWFwIiwiYWRkQ29udHJvbCIsIm1vZGVzIiwiZmVhdHVyZXMiLCJpbnB1dEZpZWxkIiwiJCIsInZhbCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJyZVJlbmRlciIsImN1cnJlbnRNb2RlIiwic3R5bGVEYXRhIiwicmFuZ2UiLCJlZGl0b3JJZCIsImFkZENvbXBvbmVudHMiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXQiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiZ2V0U3R5bGVGdW5jdGlvbiIsInNldFpJbmRleCIsIkNvbGxlY3Rpb24iLCJlZGl0b3JMYXllciIsIlZlY3RvciIsInNvdXJjZSIsIlZlY3RvclNvdXJjZSIsImZvcm1hdCIsIkdlb0pTT04iLCJhZGRMYXllciIsImxheWVycyIsImdldExheWVycyIsImZvckVhY2giLCJpbmRleCIsImFycmF5Iiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwibmV3Q291bnQiLCJpZCIsImZyb250ZW5kIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaSIsImRyYXdTdHlsZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRyYXdTdHlsZSIsImoiLCJlbGVtZW50cyIsInB1c2giLCJjaGVja0xvY3N0eWxlIiwiZmluZEluZGV4Iiwic3R5bGVJZCIsImxvYWRMb2NhdGlvblN0eWxlcyIsImxpbmtJbnB1dCIsImdlb2pzb24iLCJKU09OIiwicGFyc2UiLCJmZWF0dXJlUHJvamVjdGlvbiIsInJlYWRGZWF0dXJlcyIsImdldFNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwianNvbkZlYXR1cmUiLCJzZXRHZW9tZXRyeSIsIkNpcmNsZSIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJjaGlsZE5vZGVzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVSYW5nZSIsImFkZFJhbmdlIiwic3RhcnRPZmZzZXQiLCJpbm5lclRleHQiLCJhcnJGZWF0dXJlcyIsInN0cmluZ2lmeSIsInByb3BlcnRpZXMiLCJmZWF0dXJlSWQiLCJzcGxpY2UiLCJ1dGlscyIsImNhbGxIb29rRnVuY3Rpb25zIiwiYzRnTWFwc0hvb2tzIiwiaG9va19lZGl0b3JfcmVtb3ZlIiwib2JqR2VvanNvbiIsImNvbnN0c3RyIiwiYWRkQ29tcHMiLCJ0cmFuc2Zvcm0iLCJ0b1N0cmluZ0hETVMiLCJDTE9TRSIsInRvVXBwZXJDYXNlIiwiZWRpdG9yVmFycyIsInVwZGF0ZUZlYXR1cmVzIiwiZGlzcGxheSIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiaG9va19lZGl0b3JfY29tcG9uZW50cyIsImNvbXAiLCJjb250YWluZXIiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9