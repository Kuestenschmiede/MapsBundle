(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-editor-component_jsx"],{

/***/ "./Resources/public/js/c4g-editor-i18n-de.js":
/*!***************************************************!*\
  !*** ./Resources/public/js/c4g-editor-i18n-de.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


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
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
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
  EDITOR_FEATURE_DELETE: 'Elemente löschen',
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

/***/ "./Resources/public/js/c4g-editor-i18n.js":
/*!************************************************!*\
  !*** ./Resources/public/js/c4g-editor-i18n.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEditorLanguage = getEditorLanguage;
exports.langConstants = void 0;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "./Resources/public/js/c4g-maps-constant-i18n-en.js");

var _c4gEditorI18nDe = __webpack_require__(/*! ./c4g-editor-i18n-de */ "./Resources/public/js/c4g-editor-i18n-de.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
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

/***/ "./Resources/public/js/components/c4g-editor-component.jsx":
/*!*****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-editor-component.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gEditorI18n = __webpack_require__(/*! ./../c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//import {EditorView} from "./c4g-editor-view.jsx";
var EditorView = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("Resources_public_js_c4g-popup-controller_js"), __webpack_require__.e("Resources_public_js_components_c4g-editor-view_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-view.jsx */ "./Resources/public/js/components/c4g-editor-view.jsx"));
});

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
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
      editorId: 0
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

        if (scope.props.mapController.proxy.locationStyleController.arrLocStyles && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
          var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;

          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          } else {
            returnStyle = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
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
    return _this;
  }

  (0, _createClass2["default"])(EditorComponent, [{
    key: "open",
    value: function open() {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
      this.props.mapController.map.addLayer(this.editorLayer);
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
      this.props.mapController.map.removeLayer(this.editorLayer);
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
      var _this2 = this;

      var frontend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var url;

      if (frontend) {
        url = "con4gis/editorService/" + id;
      } else {
        url = "con4gis/editorServiceBackend/" + id;
      }

      fetch(url).then(function (response) {
        response.json().then(function (json) {
          _this2.handleConfig(json);
        });
      });
    }
  }, {
    key: "handleConfig",
    value: function handleConfig(json) {
      var _this3 = this;

      for (var i in json.drawStyles) {
        if (json.drawStyles.hasOwnProperty(i)) {
          this.config[i] = [];
          var drawStyle = json.drawStyles[i];

          for (var j in drawStyle.elements) {
            if (drawStyle.elements.hasOwnProperty(j)) {
              (function () {
                var element = drawStyle.elements[j];

                _this3.config[i].push(element);

                var checkLocstyle = _this3.arrLocstyles.findIndex(function (locstyle) {
                  return locstyle === element.styleId;
                });

                if (checkLocstyle === -1 && element.styleId) {
                  _this3.arrLocstyles.push(element.styleId);
                }
              })();
            }
          }
        }
      }

      this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles, {
        "done": function done(styleData) {
          _this3.setState({
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
      var _this4 = this;

      var range = window.getSelection().getRangeAt(0).startOffset;
      this.setState({
        features: event.target.innerText,
        range: range
      }, function () {
        _this4.reRender();
      });
    }
  }, {
    key: "addFeature",
    value: function addFeature(feature) {
      var arrFeatures = JSON.parse(this.state.features);
      arrFeatures.features.push(feature);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      });
      this.linkInput();
    }
  }, {
    key: "removeFeature",
    value: function removeFeature(geojson) {
      var editorId = geojson.properties.editorId;
      var arrFeatures = JSON.parse(this.state.features);
      var featureId = arrFeatures.features.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      arrFeatures.features.splice(featureId, 1);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      });
      this.linkInput();
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(geojson) {
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
      });
      this.linkInput();
    }
  }, {
    key: "linkInput",
    value: function linkInput() {
      if (this.props.inputField && this.state.features.length > 50) {
        $(this.props.inputField).val(this.state.features); //link to inputField
      }
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this; // if (this.props.inputField && $(this.props.inputField).length > 0) {
      //     if (this.state.features < 50) {
      //         console.log(this.state.features);
      //     }
      //     else {
      //         $(this.props.inputField).val(this.state.features);
      //     }
      // }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, (0, _defineProperty2["default"])({
        wrapperClass: "c4g-editor-header",
        headerClass: "c4g-editor-headline",
        hideContainer: ".c4g-editor-container",
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
        active: true,
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
          overflow: "none"
        }
      }, /*#__PURE__*/_react["default"].createElement("pre", {
        contentEditable: true,
        style: {
          overflowY: "scroll",
          overflowX: "none",
          height: "400px"
        },
        suppressContentEditableWarning: true,
        onInput: this.changeJSON
      }, this.state.features)));
    }
  }]);
  return EditorComponent;
}(_react.Component);

exports.default = EditorComponent;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctZWRpdG9yLWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWVkaXRvci1jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbInByb2plY3RFZGl0b3JMYW5nIiwiTEFORyIsIk1FVEFEQVRBX0VESVQiLCJEVVBMSUNBVEVfRUxFTUVOVCIsIkRJU1BMQUNFX0VMRU1FTlQiLCJEVVBMSUNBVEVfQU5EX0RFTEVURSIsIkNIT09TRV9QUk9KRUNUIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFX0hFQURMSU5FIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFX1FVRVNUSU9OIiwiUk9UQVRFX0VMRU1FTlQiLCJERVNFTEVDVF9FTEVNRU5UIiwiUkVWRVJUX0VMRU1FTlQiLCJDT05GSVJNX0RFTEVURV9BTEwiLCJCVVRUT05fREVTRUxFQ1RfQUxMIiwiQlVUVE9OX0RFTEVURV9BTEwiLCJCVVRUT05fRElTUExBQ0VfQUxMIiwiQlVUVE9OX0NPTkZJUk0iLCJCVVRUT05fQ0FOQ0VMIiwiQlVUVE9OX0NPUFlfRElTUExBQ0VfQUxMIiwiQlVUVE9OX1RSQU5TTEFURV9BTEwiLCJCVVRUT05fQVBQTFlfVFJBTlNMQVRFIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIkNUUkxfRURJVE9SIiwiRURJVE9SX0FQSV9FUlJPUl9USVRMRSIsIk5PTkUiLCJtYXBzTGFuZyIsIm1hcERhdGEiLCJsYW5nIiwibGFuZ0NvbnN0YW50c0dlcm1hbiIsImxhbmdDb25zdGFudHNFbmdsaXNoIiwiZ2V0RWRpdG9yTGFuZ3VhZ2UiLCJsYW5nQ29uc3RhbnRzIiwialF1ZXJ5IiwiZXh0ZW5kIiwiRWRpdG9yVmlldyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiRWRpdG9yQ29tcG9uZW50IiwicHJvcHMiLCJjbG9zZSIsImJpbmQiLCJvcGVuIiwiY291bnRFZGl0b3JJZCIsImFkZEZlYXR1cmUiLCJyZW1vdmVGZWF0dXJlIiwibW9kaWZ5RmVhdHVyZSIsImNoYW5nZUpTT04iLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwib24iLCJldmVudCIsImhpZGRlbiIsIm1hcENvbnRyb2xsZXIiLCJlZGl0b3JDb250YWluZXIiLCJpbmNsdWRlcyIsInN0YXRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbmZpZyIsImFyckxvY3N0eWxlcyIsImhhbmRsZUNvbmZpZyIsImdldENvbmZpZ3VyYXRpb24iLCJkYXRhIiwiZmVFZGl0b3JQcm9maWxlIiwiYmVFZGl0b3JQcm9maWxlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpc09wZW4iLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImVkaXRvciIsIm1hcCIsImFkZENvbnRyb2wiLCJtb2RlcyIsImZlYXR1cmVzIiwiaW5wdXRGaWVsZCIsIiQiLCJ2YWwiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicmVSZW5kZXIiLCJjdXJyZW50TW9kZSIsInN0eWxlRGF0YSIsInJhbmdlIiwiZWRpdG9ySWQiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXQiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiQ29sbGVjdGlvbiIsImVkaXRvckxheWVyIiwiVmVjdG9yIiwic291cmNlIiwiVmVjdG9yU291cmNlIiwiZm9ybWF0IiwiR2VvSlNPTiIsImFkZExheWVyIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicmVtb3ZlTGF5ZXIiLCJuZXdDb3VudCIsImlkIiwiZnJvbnRlbmQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJpIiwiZHJhd1N0eWxlcyIsImhhc093blByb3BlcnR5IiwiZHJhd1N0eWxlIiwiaiIsImVsZW1lbnRzIiwicHVzaCIsImNoZWNrTG9jc3R5bGUiLCJmaW5kSW5kZXgiLCJzdHlsZUlkIiwibG9hZExvY2F0aW9uU3R5bGVzIiwibGlua0lucHV0IiwiZ2VvanNvbiIsIkpTT04iLCJwYXJzZSIsImZlYXR1cmVQcm9qZWN0aW9uIiwicmVhZEZlYXR1cmVzIiwiZ2V0U291cmNlIiwiZm9yRWFjaEZlYXR1cmUiLCJqc29uRmVhdHVyZSIsInNldEdlb21ldHJ5IiwiQ2lyY2xlIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydENvbnRhaW5lciIsImNoaWxkTm9kZXMiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZVJhbmdlIiwiYWRkUmFuZ2UiLCJzdGFydE9mZnNldCIsImlubmVyVGV4dCIsImFyckZlYXR1cmVzIiwic3RyaW5naWZ5IiwicHJvcGVydGllcyIsImZlYXR1cmVJZCIsInNwbGljZSIsIm9iakdlb2pzb24iLCJDTE9TRSIsImluZGV4IiwidG9VcHBlckNhc2UiLCJlZGl0b3JWYXJzIiwidXBkYXRlRmVhdHVyZXMiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsImhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQUlBLGlCQUFpQixHQUFHO0FBQzdCQyxNQUFJLEVBQUUsSUFEdUI7QUFHN0JDLGVBQWEsRUFBRSxzQkFIYztBQUk3QkMsbUJBQWlCLEVBQUUscUJBSlU7QUFLN0JDLGtCQUFnQixFQUFFLHdDQUxXO0FBTTdCQyxzQkFBb0IsRUFBRSxzREFOTztBQU83QkMsZ0JBQWMsRUFBRSx1QkFQYTtBQVE3QkMsZ0NBQThCLEVBQUUsaUJBUkg7QUFTN0JDLGdDQUE4QixFQUFFLDBDQVRIO0FBVTdCQyxnQkFBYyxFQUFFLGtCQVZhO0FBVzdCQyxrQkFBZ0IsRUFBRSwwQkFYVztBQVk3QkMsZ0JBQWMsRUFBRSxpQ0FaYTtBQWE3QkMsb0JBQWtCLEVBQUUsd0RBYlM7QUFjN0JDLHFCQUFtQixFQUFFLDJCQWRRO0FBZTdCQyxtQkFBaUIsRUFBRSw4QkFmVTtBQWdCN0JDLHFCQUFtQixFQUFFLHFEQWhCUTtBQWlCN0JDLGdCQUFjLEVBQUUsWUFqQmE7QUFrQjdCQyxlQUFhLEVBQUUsV0FsQmM7QUFtQjdCQywwQkFBd0IsRUFBRSxrRUFuQkc7QUFvQjdCQyxzQkFBb0IsRUFBRSxnREFwQk87QUFxQjdCQyx3QkFBc0IsRUFBRSx1QkFyQks7QUF1QjdCQyxRQUFNLEVBQUUsUUF2QnFCO0FBd0I3QkMsK0JBQTZCLEVBQUUsOEJBeEJGO0FBeUI3QkMsNkJBQTJCLEVBQUUsbUJBekJBO0FBMEI3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OVIwQ2dHLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5leHBvcnQgdmFyIHByb2plY3RFZGl0b3JMYW5nID0ge1xuICBMQU5HOiAnZGUnLFxuXG4gIE1FVEFEQVRBX0VESVQ6IFwiTWV0YWRhdGVuIGJlYXJiZWl0ZW5cIixcbiAgRFVQTElDQVRFX0VMRU1FTlQ6IFwiRWxlbWVudCBkdXBsaXppZXJlblwiLFxuICBESVNQTEFDRV9FTEVNRU5UOiBcIkVsZW1lbnQgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIERVUExJQ0FURV9BTkRfREVMRVRFOiBcIkVsZW1lbnQgZHVwbGl6aWVyZW4gJiBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQ0hPT1NFX1BST0pFQ1Q6IFwiV8OkaGxlIGVpbiBQcm9qZWt0IC4uLlwiLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkU6IFwiRWxlbWVudCBsw7ZzY2hlblwiLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT046IFwiV29sbGVuIFNpZSBkYXMgRWxlbWVudCB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgUk9UQVRFX0VMRU1FTlQ6IFwiRWxlbWVudCByb3RpZXJlblwiLFxuICBERVNFTEVDVF9FTEVNRU5UOiBcIkVsZW1lbnQtQXVzd2FobCBhdWZoZWJlblwiLFxuICBSRVZFUlRfRUxFTUVOVDogXCJMZXR6dGUgVmVyc2lvbiB3aWVkZXJoZXJzdGVsbGVuXCIsXG4gIENPTkZJUk1fREVMRVRFX0FMTDogXCJXb2xsZW4gU2llIGRpZSBhdXNnZXfDpGhsdGVuIEVsZW1lbnRlIHdpcmtsaWNoIGzDtnNjaGVuP1wiLFxuICBCVVRUT05fREVTRUxFQ1RfQUxMOiBcIkF1c3dhaGwgZsO8ciBhbGxlIGF1ZmhlYmVuXCIsXG4gIEJVVFRPTl9ERUxFVEVfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBsw7ZzY2hlblwiLFxuICBCVVRUT05fRElTUExBQ0VfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX0NPTkZJUk06IFwiQmVzdMOkdGlnZW5cIixcbiAgQlVUVE9OX0NBTkNFTDogXCJBYmJyZWNoZW5cIixcbiAgQlVUVE9OX0NPUFlfRElTUExBQ0VfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBrb3BpZXJlbiB1bmQgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9UUkFOU0xBVEVfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBhdWYgZGVyIEthcnRlIHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9BUFBMWV9UUkFOU0xBVEU6IFwiw4RuZGVydW5nZW4gw7xiZXJuZWhtZW5cIixcblxuICBFRElUT1I6ICdFZGl0b3InLFxuICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRWxlbWVudGUgbMO2c2NoZW4nLFxuICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50ZSBlZGl0aWVyZW4nLFxuICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ1B1bmt0d2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG4gIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG5cbiAgRURJVE9SX0FQSV9FUlJPUl9USVRMRTogJ0VzIGlzdCBlaW4gRmVobGVyIGF1ZmdldHJldGVuJyxcblxuICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQge2xhbmdDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7cHJvamVjdEVkaXRvckxhbmd9IGZyb20gXCIuL2M0Zy1lZGl0b3ItaTE4bi1kZVwiO1xubGV0IG1hcHNMYW5nID0ge307XG5cbmlmICh0eXBlb2YgbWFwRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpZiAobWFwRGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH0gZWxzZSBpZiAobWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNFbmdsaXNoO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0b3JMYW5ndWFnZShtYXBEYXRhKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiBwcm9qZWN0RWRpdG9yTGFuZztcbiAgfVxufVxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0galF1ZXJ5LmV4dGVuZChtYXBzTGFuZywgcHJvamVjdEVkaXRvckxhbmcpOyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxTdXNwZW5zZSB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQge0VkaXRvclZpZXd9IGZyb20gXCIuL2M0Zy1lZGl0b3Itdmlldy5qc3hcIjtcbmNvbnN0IEVkaXRvclZpZXcgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiKSk7XG5pbXBvcnQge2dldEVkaXRvckxhbmd1YWdlfSBmcm9tIFwiLi8uLi9jNGctZWRpdG9yLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge0dlb0pTT059IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0ZpbGwsIFN0eWxlLCBUZXh0fSBmcm9tIFwib2wvc3R5bGVcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvdW50RWRpdG9ySWQgPSB0aGlzLmNvdW50RWRpdG9ySWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEZlYXR1cmUgPSB0aGlzLmFkZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUZlYXR1cmUgPSB0aGlzLnJlbW92ZUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUpTT04gPSB0aGlzLmNoYW5nZUpTT04uYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGl0bGUgPSBcIkVkaXRvclwiO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZWRpdG9yLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgYzRnLWNsb3NlXCI7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBoaWRkZW4gPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lci5jbGFzc05hbWUuaW5jbHVkZXMoJ2M0Zy1jbG9zZScpO1xuICAgICAgaWYgKHNjb3BlLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGpRdWVyeShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ2M0Zy1jbG9zZScpLmFkZENsYXNzKCdjNGctb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgdGhpcy5hcnJMb2NzdHlsZXMgPSBbXTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICBpZiAocHJvcHMuY29uZmlnKSB7XG4gICAgICB0aGlzLmhhbmRsZUNvbmZpZyhwcm9wcy5jb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbihtYXBDb250cm9sbGVyLmRhdGEuZmVFZGl0b3JQcm9maWxlIHx8IG1hcENvbnRyb2xsZXIuZGF0YS5iZUVkaXRvclByb2ZpbGUsICEhbWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0RWRpdG9yTGFuZ3VhZ2UobWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIGNvbnRyb2wuaXNPcGVuID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmVkaXRvcikge1xuICAgICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZWRpdG9yID0gY29udHJvbDtcbiAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgfVxuICAgIHRoaXMubW9kZXMgPSBbXCJzZWxlY3RcIiwgXCJQb2ludFwiLCBcIkxpbmVTdHJpbmdcIiwgXCJQb2x5Z29uXCIsIFwiQ2lyY2xlXCJdO1xuICAgIGxldCBmZWF0dXJlcztcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKSAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCkubGVuZ3RoID4gNTApIHtcbiAgICAgIGZlYXR1cmVzID0gJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpO1xuICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgdGhpcy5yZVJlbmRlcigpO1xuICAgICAgfSwgMjAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZlYXR1cmVzID0gJ3tcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLCBcImZlYXR1cmVzXCI6IFtdfSdcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjdXJyZW50TW9kZTogXCJzZWxlY3RcIixcbiAgICAgIHN0eWxlRGF0YToge30sXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgcmFuZ2U6IDAsXG4gICAgICBmZWF0dXJlczogZmVhdHVyZXMsXG4gICAgICBlZGl0b3JJZDogMFxuICAgIH07XG4gICAgdGhpcy5zdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24oZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgICAgbGV0IHNpemUgPSBmYWxzZTtcbiAgICAgIGxldCByZXR1cm5TdHlsZSA9IFtdO1xuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJyk7XG4gICAgICAgIHNpemUgPSBmZWF0dXJlcy5sZW5ndGg7XG4gICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlc1swXTtcbiAgICAgIH1cbiAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSkge1xuICAgICAgICByZXR1cm5TdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2xvY3N0eWxlJykpIHtcbiAgICAgICAgbGV0IGxvY3N0eWxlID0gZmVhdHVyZS5nZXQoJ2xvY3N0eWxlJyk7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlcyAmJiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKSB7XG4gICAgICAgICAgbGV0IHN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuU3R5bGUgPSBzdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuU3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuU3R5bGVcbiAgICB9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xuICAgIHRoaXMuZWRpdG9yTGF5ZXIgPSBuZXcgVmVjdG9yKHtcbiAgICAgIHNvdXJjZTogbmV3IFZlY3RvclNvdXJjZSh7Zm9ybWF0OiBuZXcgR2VvSlNPTigpfSksXG4gICAgICBzdHlsZTogdGhpcy5zdHlsZUZ1bmN0aW9uXG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5lZGl0b3JMYXllcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgY291bnRFZGl0b3JJZCAoKSB7XG4gICAgbGV0IG5ld0NvdW50ID0gdGhpcy5zdGF0ZS5lZGl0b3JJZCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlZGl0b3JJZDogbmV3Q291bnRcbiAgICB9KVxuICB9XG4gIGdldENvbmZpZ3VyYXRpb24gKGlkLCBmcm9udGVuZCA9IHRydWUpIHtcbiAgICBsZXQgdXJsO1xuICAgIGlmIChmcm9udGVuZCkge1xuICAgICAgdXJsID0gXCJjb240Z2lzL2VkaXRvclNlcnZpY2UvXCIgKyBpZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZUJhY2tlbmQvXCIgKyBpZDtcbiAgICB9XG5cbiAgICBmZXRjaCh1cmwpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgICAgKGpzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmlnKGpzb24pO1xuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG4gIGhhbmRsZUNvbmZpZyAoanNvbikge1xuICAgIGZvciAobGV0IGkgaW4ganNvbi5kcmF3U3R5bGVzKSB7XG4gICAgICBpZiAoanNvbi5kcmF3U3R5bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ldID0gW107XG4gICAgICAgIGxldCBkcmF3U3R5bGUgPSBqc29uLmRyYXdTdHlsZXNbaV07XG4gICAgICAgIGZvciAobGV0IGogaW4gZHJhd1N0eWxlLmVsZW1lbnRzKSB7XG4gICAgICAgICAgaWYgKGRyYXdTdHlsZS5lbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkcmF3U3R5bGUuZWxlbWVudHNbal07XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1tpXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGNoZWNrTG9jc3R5bGUgPSB0aGlzLmFyckxvY3N0eWxlcy5maW5kSW5kZXgoKGxvY3N0eWxlKSA9PiBsb2NzdHlsZSA9PT0gZWxlbWVudC5zdHlsZUlkKTtcbiAgICAgICAgICAgIGlmIChjaGVja0xvY3N0eWxlID09PSAtMSAmJiBlbGVtZW50LnN0eWxlSWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5hcnJMb2NzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKHRoaXMuYXJyTG9jc3R5bGVzLCB7XG4gICAgICBcImRvbmVcIjogKHN0eWxlRGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdHlsZURhdGE6IHN0eWxlRGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmVSZW5kZXIoKXtcbiAgICB0cnl7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlcy5sZW5ndGggPiA1MCkge1xuICAgICAgICB0aGlzLmxpbmtJbnB1dCgpO1xuICAgICAgICBsZXQgZ2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IG5ldyBHZW9KU09OKHtcbiAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgICAgICB9KS5yZWFkRmVhdHVyZXMoZ2VvanNvbik7XG4gICAgICAgIGxldCBzb3VyY2UgPSB0aGlzLmVkaXRvckxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZmVhdHVyZXMpIHtcbiAgICAgICAgICBpZiAoZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGxldCBqc29uRmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgaWYgKGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpIHtcbiAgICAgICAgICAgICAganNvbkZlYXR1cmUuc2V0R2VvbWV0cnkobmV3IENpcmNsZShqc29uRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCksIGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNvdXJjZS5hZGRGZWF0dXJlKGpzb25GZWF0dXJlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUucmFuZ2UpIHtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICBsZXQgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgIGxldCBzdGFydENvbnRhaW5lciA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0gfHwgcmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgICByYW5nZS5zZXRTdGFydChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICByYW5nZS5zZXRFbmQoc3RhcnRDb250YWluZXIsIHRoaXMuc3RhdGUucmFuZ2UpO1xuICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgfVxuICB9XG4gIGNoYW5nZUpTT04oZXZlbnQpIHtcbiAgICBsZXQgcmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5zdGFydE9mZnNldDtcbiAgICB0aGlzLnNldFN0YXRlKHtmZWF0dXJlczogZXZlbnQudGFyZ2V0LmlubmVyVGV4dCwgcmFuZ2U6IHJhbmdlfSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZVJlbmRlcigpO1xuICAgIH0pXG4gIH1cbiAgYWRkRmVhdHVyZSAoZmVhdHVyZSkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG5cbiAgICBhcnJGZWF0dXJlcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgIH0pO1xuICAgIHRoaXMubGlua0lucHV0KCk7XG4gIH1cbiAgcmVtb3ZlRmVhdHVyZSAoZ2VvanNvbikge1xuICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5mZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIGFyckZlYXR1cmVzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlSWQsIDEpO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgIH0pO1xuICAgIHRoaXMubGlua0lucHV0KCk7XG4gIH1cbiAgbW9kaWZ5RmVhdHVyZSAoZ2VvanNvbikge1xuICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICBsZXQgb2JqR2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gb2JqR2VvanNvbi5mZWF0dXJlcztcbiAgICBsZXQgZmVhdHVyZUlkID0gYXJyRmVhdHVyZXMuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5wcm9wZXJ0aWVzLmVkaXRvcklkID09PSBlZGl0b3JJZDtcbiAgICB9KTtcbiAgICBvYmpHZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJZF0gPSBnZW9qc29uO1xuICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KG9iakdlb2pzb24sIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSk7XG4gICAgdGhpcy5saW5rSW5wdXQoKTtcbiAgfVxuICBsaW5rSW5wdXQgKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0RmllbGQgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlcy5sZW5ndGggPiA1MCkge1xuICAgICAgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCh0aGlzLnN0YXRlLmZlYXR1cmVzKTsgLy9saW5rIHRvIGlucHV0RmllbGRcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVzIDwgNTApIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2Uge1xuICAgIC8vICAgICAgICAgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci13cmFwcGVyXCJ9PlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1lZGl0b3ItY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLkVESVRPUn0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfRURJVE9SfSBjbG9zZUJ0bkNsYXNzPXtcImM0Zy10aXRsZWJhci1jbG9zZVwifSBjbG9zZUJ0bkNiPXt0aGlzLmNsb3NlfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ0xPU0V9PlxuICAgICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICB7dGhpcy5tb2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSBcInNlbGVjdFwiIHx8IChzY29wZS5jb25maWdbZWxlbWVudF0gJiYgc2NvcGUuY29uZmlnW2VsZW1lbnRdLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgIGxldCB0aXRsZSA9IHNjb3BlLmxhbmdDb25zdGFudHNbXCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfXCIgKyBlbGVtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1cIiArIGVsZW1lbnQgKyBcIiAgXCIgKyAoZWxlbWVudCA9PT0gc2NvcGUuc3RhdGUuY3VycmVudE1vZGUgPyBcImM0Zy1hY3RpdmVcIiA6IFwiYzRnLWluYWN0aXZlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9IG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9Lz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RWRpdG9yVmlldyBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12aWV3XCJ9IHN0eWxlRnVuY3Rpb249e3RoaXMuc3R5bGVGdW5jdGlvbn0gbW9kZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZX0gc3R5bGVEYXRhPXt0aGlzLnN0YXRlLnN0eWxlRGF0YX0gZWxlbWVudHM9e3RoaXMuY29uZmlnW3RoaXMuc3RhdGUuY3VycmVudE1vZGVdID8gdGhpcy5jb25maWdbdGhpcy5zdGF0ZS5jdXJyZW50TW9kZV06IFtdfSBhY3RpdmU9e3RydWV9IGZlYXR1cmVzPXt0aGlzLmZlYXR1cmVzfSBlZGl0b3JWYXJzPXt0aGlzLnByb3BzLmNvbmZpZy5lZGl0b3JWYXJzfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZUZlYXR1cmV9IG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5RmVhdHVyZX0gYWRkRmVhdHVyZT17dGhpcy5hZGRGZWF0dXJlfSBlZGl0b3JMYXllcj17dGhpcy5lZGl0b3JMYXllcn0gZWRpdG9ySWQ9e3RoaXMuc3RhdGUuZWRpdG9ySWR9IGNvdW50RWRpdG9ySWQ9e3RoaXMuY291bnRFZGl0b3JJZH0gdXBkYXRlRmVhdHVyZXM9e3RoaXMudXBkYXRlRmVhdHVyZXN9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gZWRpdG9yPXt0aGlzfSBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1jb250ZW50XCJ9IHN0eWxlPXt7b3ZlcmZsb3c6IFwibm9uZVwifX0+XG4gICAgICAgICAgPHByZSBjb250ZW50RWRpdGFibGU9e3RydWV9IHN0eWxlPXt7b3ZlcmZsb3dZOiBcInNjcm9sbFwiLCBvdmVyZmxvd1g6IFwibm9uZVwiLCBoZWlnaHQ6IFwiNDAwcHhcIn19IHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZz17dHJ1ZX0gb25JbnB1dD17dGhpcy5jaGFuZ2VKU09OfT57dGhpcy5zdGF0ZS5mZWF0dXJlc308L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9