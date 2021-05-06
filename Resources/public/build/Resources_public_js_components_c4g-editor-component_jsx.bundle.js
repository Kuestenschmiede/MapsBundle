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
  EDITOR_FEATURE_DELETE: 'Element löschen',
  EDITOR_FEATURE_MODIFY: 'Element editieren',
  EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
  EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Kartenelemente',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihandwerkzeuge',
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
exports.EditorComponent = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gEditorView = __webpack_require__(/*! ./c4g-editor-view.jsx */ "./Resources/public/js/components/c4g-editor-view.jsx");

var _c4gEditorI18n = __webpack_require__(/*! ./../c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

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

          for (var j in drawStyle.categories) {
            if (drawStyle.categories.hasOwnProperty(j)) {
              var category = drawStyle.categories[j];

              for (var k in category.elements) {
                if (category.elements.hasOwnProperty(k)) {
                  (function () {
                    var element = category.elements[k];

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
      var _React$createElement;

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
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
        wrapperClass: "c4g-editor-header",
        headerClass: "c4g-editor-headline",
        hideContainer: ".c4g-editor-container",
        header: this.langConstants.EDITOR,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-mode-switcher"
      }, this.modes.map(function (element, index) {
        if (element === "select" || scope.config[element] && scope.config[element].length > 0) {
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            className: "c4g-editor-" + element + "  " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
            onMouseUp: function onMouseUp() {
              return scope.setState({
                currentMode: element
              });
            }
          });
        } else {
          return null;
        }
      })), /*#__PURE__*/_react["default"].createElement(_c4gEditorView.EditorView, (_React$createElement = {
        className: "c4g-editor-view",
        styleFunction: this.styleFunction,
        mode: this.state.currentMode,
        styleData: this.state.styleData,
        elements: this.config[this.state.currentMode] ? this.config[this.state.currentMode] : [],
        active: true,
        editorLayer: this.state.editorLayer,
        features: this.features,
        removeFeature: this.removeFeature,
        modifyFeature: this.modifyFeature,
        addFeature: this.addFeature
      }, (0, _defineProperty2["default"])(_React$createElement, "editorLayer", this.editorLayer), (0, _defineProperty2["default"])(_React$createElement, "editorId", this.state.editorId), (0, _defineProperty2["default"])(_React$createElement, "countEditorId", this.countEditorId), (0, _defineProperty2["default"])(_React$createElement, "updateFeatures", this.updateFeatures), (0, _defineProperty2["default"])(_React$createElement, "mapController", this.props.mapController), (0, _defineProperty2["default"])(_React$createElement, "editor", this), (0, _defineProperty2["default"])(_React$createElement, "lang", this.langConstants), _React$createElement)), /*#__PURE__*/_react["default"].createElement("div", {
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

exports.EditorComponent = EditorComponent;

/***/ }),

/***/ "./Resources/public/js/components/c4g-editor-view.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-editor-view.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EditorView = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gStarboardStyle = __webpack_require__(/*! ./c4g-starboard-style.jsx */ "./Resources/public/js/components/c4g-starboard-style.jsx");

var _c4gPopupController = __webpack_require__(/*! ./../c4g-popup-controller */ "./Resources/public/js/c4g-popup-controller.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EditorView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditorView, _Component);

  var _super = _createSuper(EditorView);

  function EditorView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, EditorView);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    _this.state = {
      freehand: false,
      features: "[]",
      activeElement: props.elements[0] ? props.elements[0].id : 0,
      activeStyle: props.elements[0] ? props.elements[0].styleId : 0,
      selectMode: "modify"
    };
    _this.interaction;
    _this.changeJSON = _this.changeJSON.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(EditorView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.mode !== "select" && this.props.active) {
        if (this.interaction) {
          //only one drawinteraction at a time
          if (Array.isArray(this.interaction)) {
            this.props.mapController.map.removeInteraction(this.interaction[0]);
            this.props.mapController.map.removeInteraction(this.interaction[1]);
          } else {
            this.props.mapController.map.removeInteraction(this.interaction);
          }
        }

        var geometry;

        switch (this.props.mode) {
          case "Point":
            geometry = new _geom.Point(0, 0);
            break;

          case "LineString":
            geometry = new _geom.LineString([[0, 0], [1, 1]]);
            break;

          case "Polygon":
            geometry = new _geom.Polygon([[0, 0], [1, 1]]);
        }

        var feature = new _ol.Feature(geometry);
        feature.set('locstyle', this.state.activeStyle);
        this.interaction = new _interaction.Draw({
          // features: this.props.features,
          source: this.props.editorLayer.getSource(),
          type: this.props.mode,
          stopclick: false,
          snapTolerance: 0,
          style: this.props.styleFunction(feature),
          freehand: this.state.freehand
        });
        this.interaction.on('drawend', function (event) {
          event.feature.set('editorId', _this2.props.editorId);
          event.feature.set('locstyle', _this2.state.activeStyle);
          event.feature.set('elementId', _this2.state.activeElement);
          var geojson;

          if (_this2.props.mode === "Circle") {
            //turn Circle into valid GeoJSON
            var _geometry = event.feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326");

            var center = _geometry.getCenter();

            var radius = event.feature.getGeometry().getRadius();
            geojson = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: center
              },
              properties: {
                editorId: _this2.props.editorId,
                elementId: _this2.state.activeElement,
                locstyle: _this2.state.activeStyle,
                radius: radius
              }
            };
          } else {
            geojson = new _format.GeoJSON().writeFeatureObject(event.feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });
          }

          _this2.props.addFeature(geojson);

          _this2.props.countEditorId();
        });
        this.props.mapController.map.addInteraction(this.interaction);
      } else {
        if (this.interaction) {
          //only one drawinteraction at a time
          if (Array.isArray(this.interaction)) {
            this.props.mapController.map.removeInteraction(this.interaction[0]);
            this.props.mapController.map.removeInteraction(this.interaction[1]);
          } else {
            this.props.mapController.map.removeInteraction(this.interaction);
          }
        }

        if (this.state.selectMode === "remove") {
          this.interaction = new _interaction.Select({
            layers: [this.props.editorLayer],
            hitTolerance: 20
          });
          this.interaction.on('select', function (e) {
            var feature = e.target.getFeatures().getArray()[0];
            var geojson = new _format.GeoJSON().writeFeatureObject(feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });

            _this2.props.removeFeature(geojson);

            var source = _this2.props.editorLayer.getSource();

            source.removeFeature(feature);
          });
          this.props.mapController.map.addInteraction(this.interaction);
        } else {
          this.interaction = [];
          this.interaction.push(new _interaction.Select({
            layers: [this.props.editorLayer],
            hitTolerance: 20
          }));
          this.interaction.push(new _interaction.Modify({
            features: this.interaction[0].getFeatures(),
            pixelTolerance: 20
          }));
          this.interaction[1].on('modifyend', function (e) {
            var feature = e.features.getArray()[0];
            var geojson = new _format.GeoJSON().writeFeatureObject(feature, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857"
            });

            _this2.props.modifyFeature(geojson);
          });
          this.props.mapController.map.addInteraction(this.interaction[0]);
          this.props.mapController.map.addInteraction(this.interaction[1]);
        }
      }

      var elements = null;

      if (this.props.elements && this.props.elements.length > 1) {
        elements = this.props.elements.map(function (element) {
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: element.id,
            style: {
              height: "32px",
              width: "32px"
            },
            onMouseUp: function onMouseUp() {
              _this2.setState({
                activeElement: element.id,
                activeStyle: element.styleId
              });
            }
          }, /*#__PURE__*/_react["default"].createElement(_c4gStarboardStyle.C4gStarboardStyle, {
            styleData: _this2.props.styleData,
            styleId: element.styleId
          }));
        });
      }

      var customButton = null;

      if ("LineStringPolygon".includes(this.props.mode)) {
        var freehandClass = "c4g-editor-view ";
        freehandClass += this.state.freehand ? "c4g-active" : "c4g-inactive";
        customButton = /*#__PURE__*/_react["default"].createElement("a", {
          className: freehandClass,
          onMouseUp: function onMouseUp() {
            _this2.changeFreehand();
          }
        }, "Freehand");
      } else if (this.props.mode === "select") {
        customButton = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-editor-mode-switcher"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          title: "Modify",
          className: "c4g-editor-feature-modify " + (this.state.selectMode === "modify" ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.changeSelectMode("modify");
          }
        }), /*#__PURE__*/_react["default"].createElement("button", {
          title: "Remove",
          className: "c4g-editor-feature-delete " + (this.state.selectMode === "remove" ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.changeSelectMode("remove");
          }
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, customButton, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-element-selection"
      }, elements));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;

      if (this.props.elements[0] && prevProps.mode !== this.props.mode) {
        if (this.state.activeElement === 0) {
          this.setState({
            activeElement: this.props.elements[0].id,
            activeStyle: this.props.elements[0].styleId
          }); //  this.state.activeElement = this.props.elements[0].id
          //  this.state.activeStyle = this.props.elements[0].styleId
        } else if (!this.props.elements.find(function (element) {
          return element.id === _this3.state.activeElement;
        })) {
          this.setState({
            activeElement: this.props.elements[0].id,
            activeStyle: this.props.elements[0].styleId
          }); // this.state.activeElement = this.props.elements[0].id
          // this.state.activeStyle = this.props.elements[0].styleId
        }
      }
    } // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("shouldComponentUpdate");
    // }

  }, {
    key: "changeSelectMode",
    value: function changeSelectMode(string) {
      this.setState({
        selectMode: string
      });
    }
  }, {
    key: "changeFreehand",
    value: function changeFreehand() {
      this.setState({
        freehand: !this.state.freehand
      });
    }
  }, {
    key: "changeJSON",
    value: function changeJSON(event) {
      this.setState({
        features: event.target.value
      });
    }
  }]);
  return EditorView;
}(_react.Component);

exports.EditorView = EditorView;

/***/ }),

/***/ "./Resources/public/js/components/c4g-starboard-style.jsx":
/*!****************************************************************!*\
  !*** ./Resources/public/js/components/c4g-starboard-style.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gStarboardStyle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant.js */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var C4gStarboardStyle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(C4gStarboardStyle, _Component);

  var _super = _createSuper(C4gStarboardStyle);

  function C4gStarboardStyle(props) {
    (0, _classCallCheck2["default"])(this, C4gStarboardStyle);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(C4gStarboardStyle, [{
    key: "render",
    value: function render() {
      var _this = this;

      // Create label for interaction-trigger
      var styleTriggerLabel = null;
      var locstyle = this.props.styleData.arrLocStyles[this.props.styleId];
      var styleData = locstyle.locStyleArr;
      var stylor = locstyle.style && locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") ? locstyle.style(new _Feature["default"]({
        geometry: new _geom.Point(0, 0)
      }), "EPSG:4326") : null;
      var styl0r = Array.isArray(stylor) ? stylor[0] : stylor;
      var styleType = styleData ? styleData.styletype : "default";

      if (styleData && (styleType === "cust_icon" || styleType === "cust_icon_svg" || styleType === "photo")) {
        var styleIcon = null;
        var iconSrc;

        if (styleData.icon_src && styleData.icon_src.indexOf('.') !== -1 || styleData.svgSrc && styleData.svgSrc.indexOf('.') !== -1) {
          if (styleType === "cust_icon" || styleType === "photo") {
            iconSrc = styleData.icon_src;
          } else {
            iconSrc = styleData.svgSrc;
          }

          styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
            src: iconSrc,
            style: {
              height: 25,
              width: 25
            }
          });
        } else if (styl0r) {
          var styleImage = styl0r.getImage && typeof styl0r.getImage === "function" && styl0r.getImage() ? styl0r.getImage() : null;

          if (styleImage && styleImage.getSrc()) {
            styleIcon = /*#__PURE__*/_react["default"].createElement("img", {
              src: styleImage.getSrc(),
              style: {
                height: 25,
                width: 25
              }
            });
          } else {
            return null;
          }
        }

        if (this.props.clickEvent && this.props.tooltip) {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE,
            title: this.props.tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          }, styleIcon);
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: _c4gMapsConstant.cssConstants.STARBOARD_LOCSTYLE
          }, styleIcon);
        }
      } else {
        var cssClass;

        switch (styleType) {
          // 'point', 'square', 'star', 'x', 'cross', 'triangle'
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

        var color, bordercolor;

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
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements,
            title: this.props.tooltip,
            onMouseUp: function onMouseUp(event) {
              return _this.props.clickEvent(event);
            }
          });
        } else {
          styleTriggerLabel = /*#__PURE__*/_react["default"].createElement("span", {
            className: cssClass,
            style: styleElements
          });
        }
      }

      return styleTriggerLabel;
    }
  }]);
  return C4gStarboardStyle;
}(_react.Component);

exports.C4gStarboardStyle = C4gStarboardStyle;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctZWRpdG9yLWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWVkaXRvci1jb21wb25lbnQuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWVkaXRvci12aWV3LmpzeCIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1zdGFyYm9hcmQtc3R5bGUuanN4Il0sIm5hbWVzIjpbInByb2plY3RFZGl0b3JMYW5nIiwiTEFORyIsIk1FVEFEQVRBX0VESVQiLCJEVVBMSUNBVEVfRUxFTUVOVCIsIkRJU1BMQUNFX0VMRU1FTlQiLCJEVVBMSUNBVEVfQU5EX0RFTEVURSIsIkNIT09TRV9QUk9KRUNUIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFX0hFQURMSU5FIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFX1FVRVNUSU9OIiwiUk9UQVRFX0VMRU1FTlQiLCJERVNFTEVDVF9FTEVNRU5UIiwiUkVWRVJUX0VMRU1FTlQiLCJDT05GSVJNX0RFTEVURV9BTEwiLCJCVVRUT05fREVTRUxFQ1RfQUxMIiwiQlVUVE9OX0RFTEVURV9BTEwiLCJCVVRUT05fRElTUExBQ0VfQUxMIiwiQlVUVE9OX0NPTkZJUk0iLCJCVVRUT05fQ0FOQ0VMIiwiQlVUVE9OX0NPUFlfRElTUExBQ0VfQUxMIiwiQlVUVE9OX1RSQU5TTEFURV9BTEwiLCJCVVRUT05fQVBQTFlfVFJBTlNMQVRFIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIkNUUkxfRURJVE9SIiwiRURJVE9SX0FQSV9FUlJPUl9USVRMRSIsIk5PTkUiLCJtYXBzTGFuZyIsIm1hcERhdGEiLCJsYW5nIiwibGFuZ0NvbnN0YW50c0dlcm1hbiIsImxhbmdDb25zdGFudHNFbmdsaXNoIiwiZ2V0RWRpdG9yTGFuZ3VhZ2UiLCJsYW5nQ29uc3RhbnRzIiwialF1ZXJ5IiwiZXh0ZW5kIiwiRWRpdG9yQ29tcG9uZW50IiwicHJvcHMiLCJjbG9zZSIsImJpbmQiLCJvcGVuIiwiY291bnRFZGl0b3JJZCIsImFkZEZlYXR1cmUiLCJyZW1vdmVGZWF0dXJlIiwibW9kaWZ5RmVhdHVyZSIsImNoYW5nZUpTT04iLCJzY29wZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJ0aXRsZSIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwib24iLCJldmVudCIsImhpZGRlbiIsIm1hcENvbnRyb2xsZXIiLCJlZGl0b3JDb250YWluZXIiLCJpbmNsdWRlcyIsInN0YXRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbmZpZyIsImFyckxvY3N0eWxlcyIsImhhbmRsZUNvbmZpZyIsImdldENvbmZpZ3VyYXRpb24iLCJkYXRhIiwiZmVFZGl0b3JQcm9maWxlIiwiYmVFZGl0b3JQcm9maWxlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpc09wZW4iLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsImVkaXRvciIsIm1hcCIsImFkZENvbnRyb2wiLCJtb2RlcyIsImZlYXR1cmVzIiwiaW5wdXRGaWVsZCIsIiQiLCJ2YWwiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicmVSZW5kZXIiLCJjdXJyZW50TW9kZSIsInN0eWxlRGF0YSIsInJhbmdlIiwiZWRpdG9ySWQiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXQiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiQ29sbGVjdGlvbiIsImVkaXRvckxheWVyIiwiVmVjdG9yIiwic291cmNlIiwiVmVjdG9yU291cmNlIiwiZm9ybWF0IiwiR2VvSlNPTiIsImFkZExheWVyIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicmVtb3ZlTGF5ZXIiLCJuZXdDb3VudCIsImlkIiwiZnJvbnRlbmQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJpIiwiZHJhd1N0eWxlcyIsImhhc093blByb3BlcnR5IiwiZHJhd1N0eWxlIiwiaiIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImsiLCJlbGVtZW50cyIsInB1c2giLCJjaGVja0xvY3N0eWxlIiwiZmluZEluZGV4Iiwic3R5bGVJZCIsImxvYWRMb2NhdGlvblN0eWxlcyIsImxpbmtJbnB1dCIsImdlb2pzb24iLCJKU09OIiwicGFyc2UiLCJmZWF0dXJlUHJvamVjdGlvbiIsInJlYWRGZWF0dXJlcyIsImdldFNvdXJjZSIsImZvckVhY2hGZWF0dXJlIiwianNvbkZlYXR1cmUiLCJzZXRHZW9tZXRyeSIsIkNpcmNsZSIsImdldEdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJjaGlsZE5vZGVzIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVSYW5nZSIsImFkZFJhbmdlIiwic3RhcnRPZmZzZXQiLCJpbm5lclRleHQiLCJhcnJGZWF0dXJlcyIsInN0cmluZ2lmeSIsInByb3BlcnRpZXMiLCJmZWF0dXJlSWQiLCJzcGxpY2UiLCJvYmpHZW9qc29uIiwiQ0xPU0UiLCJpbmRleCIsInVwZGF0ZUZlYXR1cmVzIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJoZWlnaHQiLCJDb21wb25lbnQiLCJFZGl0b3JWaWV3IiwiZnJlZWhhbmQiLCJhY3RpdmVFbGVtZW50IiwiYWN0aXZlU3R5bGUiLCJzZWxlY3RNb2RlIiwiaW50ZXJhY3Rpb24iLCJtb2RlIiwiYWN0aXZlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVtb3ZlSW50ZXJhY3Rpb24iLCJnZW9tZXRyeSIsIlBvaW50IiwiTGluZVN0cmluZyIsIlBvbHlnb24iLCJGZWF0dXJlIiwic2V0IiwiRHJhdyIsInR5cGUiLCJzdG9wY2xpY2siLCJzbmFwVG9sZXJhbmNlIiwiY2xvbmUiLCJ0cmFuc2Zvcm0iLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRSYWRpdXMiLCJjb29yZGluYXRlcyIsImVsZW1lbnRJZCIsIndyaXRlRmVhdHVyZU9iamVjdCIsImRhdGFQcm9qZWN0aW9uIiwiYWRkSW50ZXJhY3Rpb24iLCJTZWxlY3QiLCJsYXllcnMiLCJoaXRUb2xlcmFuY2UiLCJlIiwiZ2V0RmVhdHVyZXMiLCJnZXRBcnJheSIsIk1vZGlmeSIsInBpeGVsVG9sZXJhbmNlIiwid2lkdGgiLCJjdXN0b21CdXR0b24iLCJmcmVlaGFuZENsYXNzIiwiY2hhbmdlRnJlZWhhbmQiLCJjaGFuZ2VTZWxlY3RNb2RlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic25hcHNob3QiLCJmaW5kIiwic3RyaW5nIiwidmFsdWUiLCJDNGdTdGFyYm9hcmRTdHlsZSIsInN0eWxlVHJpZ2dlckxhYmVsIiwibG9jU3R5bGVBcnIiLCJzdHlsb3IiLCJzdHlsMHIiLCJzdHlsZVR5cGUiLCJzdHlsZXR5cGUiLCJzdHlsZUljb24iLCJpY29uU3JjIiwiaWNvbl9zcmMiLCJpbmRleE9mIiwic3ZnU3JjIiwic3R5bGVJbWFnZSIsImdldEltYWdlIiwiZ2V0U3JjIiwiY2xpY2tFdmVudCIsInRvb2x0aXAiLCJjc3NDb25zdGFudHMiLCJTVEFSQk9BUkRfTE9DU1RZTEUiLCJjc3NDbGFzcyIsIlNUQVJCT0FSRF9MT0NTVFlMRV9QT0lOVCIsIlNUQVJCT0FSRF9MT0NTVFlMRV9TUVVBUkUiLCJTVEFSQk9BUkRfTE9DU1RZTEVfU1RBUiIsIlNUQVJCT0FSRF9MT0NTVFlMRV9YIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTIiwiU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFIiwiY29sb3IiLCJib3JkZXJjb2xvciIsImdldEZpbGwiLCJnZXRTdHJva2UiLCJnZXRDb2xvciIsImZpbGxjb2xvciIsInN0cm9rZWNvbG9yIiwidXRpbHMiLCJnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHkiLCJzdHlsZUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBSUEsaUJBQWlCLEdBQUc7QUFDN0JDLE1BQUksRUFBRSxJQUR1QjtBQUc3QkMsZUFBYSxFQUFFLHNCQUhjO0FBSTdCQyxtQkFBaUIsRUFBRSxxQkFKVTtBQUs3QkMsa0JBQWdCLEVBQUUsd0NBTFc7QUFNN0JDLHNCQUFvQixFQUFFLHNEQU5PO0FBTzdCQyxnQkFBYyxFQUFFLHVCQVBhO0FBUTdCQyxnQ0FBOEIsRUFBRSxpQkFSSDtBQVM3QkMsZ0NBQThCLEVBQUUsMENBVEg7QUFVN0JDLGdCQUFjLEVBQUUsa0JBVmE7QUFXN0JDLGtCQUFnQixFQUFFLDBCQVhXO0FBWTdCQyxnQkFBYyxFQUFFLGlDQVphO0FBYTdCQyxvQkFBa0IsRUFBRSx3REFiUztBQWM3QkMscUJBQW1CLEVBQUUsMkJBZFE7QUFlN0JDLG1CQUFpQixFQUFFLDhCQWZVO0FBZ0I3QkMscUJBQW1CLEVBQUUscURBaEJRO0FBaUI3QkMsZ0JBQWMsRUFBRSxZQWpCYTtBQWtCN0JDLGVBQWEsRUFBRSxXQWxCYztBQW1CN0JDLDBCQUF3QixFQUFFLGtFQW5CRztBQW9CN0JDLHNCQUFvQixFQUFFLGdEQXBCTztBQXFCN0JDLHdCQUFzQixFQUFFLHVCQXJCSztBQXVCN0JDLFFBQU0sRUFBRSxRQXZCcUI7QUF3QjdCQywrQkFBNkIsRUFBRSw4QkF4QkY7QUF5QjdCQyw2QkFBMkIsRUFBRSxtQkF6QkE7QUEwQjdCQyxzQkFBb0IsRUFBRSxtQkExQk87QUEyQjdCQyx1QkFBcUIsRUFBRSxpQkEzQk07QUE0QjdCQyx1QkFBcUIsRUFBRSxtQkE1Qk07QUE2QjdCQyxvQkFBa0IsRUFBRSxrREE3QlM7QUE4QjdCQywrQkFBNkIsRUFBRSx3RUE5QkY7QUErQjdCQyw0QkFBMEIsRUFBRSxlQS9CQztBQWdDN0JDLGdDQUE4QixFQUFFLGdCQWhDSDtBQWlDN0JDLG1DQUFpQyxFQUFFLG1CQWpDTjtBQWtDN0JDLHFDQUFtQyxFQUFFLG1CQWxDUjtBQW1DN0JDLGtDQUFnQyxFQUFFLGtCQW5DTDtBQW9DN0JDLGlDQUErQixFQUFFLGdCQXBDSjtBQXFDN0JDLGFBQVcsRUFBRSx3QkFyQ2dCO0FBdUM3QkMsd0JBQXNCLEVBQUUsK0JBdkNLO0FBeUM3QkMsTUFBSSxFQUFFLEVBekN1QixDQXlDcEI7O0FBekNvQixDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7QUFDQTs7QUFDQTs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxJQUFJLE9BQU9DLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbEMsTUFBSUEsT0FBTyxDQUFDQyxJQUFSLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRixZQUFRLEdBQUdHLDBDQUFYO0FBQ0QsR0FGRCxNQUVPLElBQUlGLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQixJQUFyQixFQUEyQjtBQUNoQ0YsWUFBUSxHQUFHSSwyQ0FBWDtBQUNELEdBRk0sTUFFQTtBQUNMO0FBQ0FKLFlBQVEsR0FBR0csMENBQVg7QUFDRDtBQUNGOztBQUVNLFNBQVNFLGlCQUFULENBQTJCSixPQUEzQixFQUFvQztBQUN6QyxNQUFJQSxPQUFPLENBQUNDLElBQVIsS0FBaUIsSUFBckIsRUFBMkI7QUFDekIsV0FBT3hDLGtDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUl1QyxPQUFPLENBQUNDLElBQVIsS0FBaUIsSUFBckIsRUFBMkI7QUFDaEMsV0FBT3hDLGtDQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0w7QUFDQSxXQUFPQSxrQ0FBUDtBQUNEO0FBQ0Y7O0FBQ00sSUFBSTRDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNSLFFBQWQsRUFBd0J0QyxrQ0FBeEIsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlA7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYStDLGU7Ozs7O0FBQ1QsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCxnREFBYjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVELElBQVYsZ0RBQVo7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLGdEQUFyQjtBQUNBLFVBQUtHLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkgsSUFBaEIsZ0RBQWxCO0FBQ0EsVUFBS0ksYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSixJQUFuQixnREFBckI7QUFDQSxVQUFLSyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJMLElBQW5CLGdEQUFyQjtBQUNBLFVBQUtNLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQk4sSUFBaEIsZ0RBQWxCO0FBRUEsUUFBTU8sS0FBSyxpREFBWDtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxRQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FDLFVBQU0sQ0FBQ0MsS0FBUCxHQUFlLFFBQWY7QUFDQUosV0FBTyxDQUFDSyxTQUFSLEdBQW9CLHlEQUFwQjtBQUNBTCxXQUFPLENBQUNNLFdBQVIsQ0FBb0JILE1BQXBCO0FBQ0FoQixVQUFNLENBQUNhLE9BQUQsQ0FBTixDQUFnQk8sRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBQ0MsS0FBRCxFQUFXO0FBQ25DLFVBQUlDLE1BQU0sR0FBR1YsS0FBSyxDQUFDVCxLQUFOLENBQVlvQixhQUFaLENBQTBCQyxlQUExQixDQUEwQ04sU0FBMUMsQ0FBb0RPLFFBQXBELENBQTZELFdBQTdELENBQWI7O0FBQ0EsVUFBSWIsS0FBSyxDQUFDYyxLQUFOLENBQVlwQixJQUFoQixFQUFzQjtBQUNsQixZQUFJLENBQUNnQixNQUFMLEVBQWE7QUFDVFYsZUFBSyxDQUFDUixLQUFOO0FBQ0gsU0FGRCxNQUdLO0FBQ0RKLGdCQUFNLENBQUNZLEtBQUssQ0FBQ1QsS0FBTixDQUFZb0IsYUFBWixDQUEwQkMsZUFBM0IsQ0FBTixDQUFrREcsV0FBbEQsQ0FBOEQsV0FBOUQsRUFBMkVDLFFBQTNFLENBQW9GLFVBQXBGO0FBQ0g7QUFDSixPQVBELE1BUUs7QUFDRGhCLGFBQUssQ0FBQ04sSUFBTjtBQUNIO0FBQ0osS0FiRDtBQWNBLFVBQUt1QixNQUFMLEdBQWMsRUFBZDtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxRQUFJUCxhQUFhLEdBQUdwQixLQUFLLENBQUNvQixhQUExQjs7QUFFQSxRQUFJcEIsS0FBSyxDQUFDMEIsTUFBVixFQUFrQjtBQUNkLFlBQUtFLFlBQUwsQ0FBa0I1QixLQUFLLENBQUMwQixNQUF4QjtBQUNILEtBRkQsTUFHSztBQUNELFlBQUtHLGdCQUFMLENBQXNCVCxhQUFhLENBQUNVLElBQWQsQ0FBbUJDLGVBQW5CLElBQXNDWCxhQUFhLENBQUNVLElBQWQsQ0FBbUJFLGVBQS9FLEVBQWdHLENBQUMsQ0FBQ1osYUFBYSxDQUFDVSxJQUFkLENBQW1CQyxlQUFySDtBQUNIOztBQUVELFVBQUtuQyxhQUFMLEdBQXFCLHNDQUFrQndCLGFBQWEsQ0FBQ1UsSUFBaEMsQ0FBckI7QUFDQSxRQUFJRyxPQUFPLEdBQUcsSUFBSUMsZ0JBQUosQ0FBWTtBQUFDeEIsYUFBTyxFQUFFQSxPQUFWO0FBQW1CeUIsWUFBTSxFQUFFbkMsS0FBSyxDQUFDbUM7QUFBakMsS0FBWixDQUFkOztBQUNBRixXQUFPLENBQUNHLE1BQVIsR0FBaUIsWUFBTTtBQUNuQixhQUFPLEtBQVA7QUFDSCxLQUZEOztBQUdBLFFBQUksQ0FBQ2hCLGFBQWEsQ0FBQ2lCLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxNQUF6QyxFQUFpRDtBQUM3Q25CLG1CQUFhLENBQUNpQixZQUFkLENBQTJCQyxRQUEzQixDQUFvQ0MsTUFBcEMsR0FBNkNOLE9BQTdDO0FBQ0FiLG1CQUFhLENBQUNvQixHQUFkLENBQWtCQyxVQUFsQixDQUE2QlIsT0FBN0I7QUFDSDs7QUFDRCxVQUFLUyxLQUFMLEdBQWEsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixZQUFwQixFQUFrQyxTQUFsQyxFQUE2QyxRQUE3QyxDQUFiO0FBQ0EsUUFBSUMsUUFBSjs7QUFDQSxRQUFJLE1BQUszQyxLQUFMLENBQVc0QyxVQUFYLElBQXlCQyxDQUFDLENBQUMsTUFBSzdDLEtBQUwsQ0FBVzRDLFVBQVosQ0FBRCxDQUF5QkUsR0FBekIsRUFBekIsSUFBMkRELENBQUMsQ0FBQyxNQUFLN0MsS0FBTCxDQUFXNEMsVUFBWixDQUFELENBQXlCRSxHQUF6QixHQUErQkMsTUFBL0IsR0FBd0MsRUFBdkcsRUFBMkc7QUFDdkdKLGNBQVEsR0FBR0UsQ0FBQyxDQUFDLE1BQUs3QyxLQUFMLENBQVc0QyxVQUFaLENBQUQsQ0FBeUJFLEdBQXpCLEVBQVg7QUFDQUUsZ0JBQVUsQ0FBQyxZQUFLO0FBQ1osY0FBS0MsUUFBTDtBQUNILE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxLQUxELE1BTUs7QUFDRE4sY0FBUSxHQUFHLCtDQUFYO0FBQ0g7O0FBQ0QsVUFBS3BCLEtBQUwsR0FBYTtBQUNUcEIsVUFBSSxFQUFFSCxLQUFLLENBQUNHLElBQU4sSUFBYyxLQURYO0FBRVQrQyxpQkFBVyxFQUFFLFFBRko7QUFHVEMsZUFBUyxFQUFFLEVBSEY7QUFJVGxCLGFBQU8sRUFBRUEsT0FKQTtBQUtUbUIsV0FBSyxFQUFFLENBTEU7QUFNVFQsY0FBUSxFQUFFQSxRQU5EO0FBT1RVLGNBQVEsRUFBRTtBQVBELEtBQWI7O0FBU0EsVUFBS0MsYUFBTCxHQUFxQixVQUFTQyxPQUFULEVBQWtCQyxVQUFsQixFQUE4QjtBQUMvQyxVQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUNBLFVBQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxVQUFJSCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ksR0FBbkIsSUFBMEJKLE9BQU8sQ0FBQ0ksR0FBUixDQUFZLFVBQVosQ0FBOUIsRUFBdUQ7QUFDbkQsWUFBSWhCLFNBQVEsR0FBR1ksT0FBTyxDQUFDSSxHQUFSLENBQVksVUFBWixDQUFmOztBQUNBRixZQUFJLEdBQUdkLFNBQVEsQ0FBQ0ksTUFBaEI7QUFDQVEsZUFBTyxHQUFHWixTQUFRLENBQUMsQ0FBRCxDQUFsQjtBQUNIOztBQUNELFVBQUlZLE9BQU8sSUFBSUEsT0FBTyxDQUFDSyxRQUFSLEVBQWYsRUFBbUM7QUFDL0JGLG1CQUFXLEdBQUdILE9BQU8sQ0FBQ0ssUUFBUixFQUFkO0FBQ0gsT0FGRCxNQUdLLElBQUlMLE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxHQUFuQixJQUEwQkosT0FBTyxDQUFDSSxHQUFSLENBQVksVUFBWixDQUE5QixFQUF1RDtBQUN4RCxZQUFJRSxRQUFRLEdBQUdOLE9BQU8sQ0FBQ0ksR0FBUixDQUFZLFVBQVosQ0FBZjs7QUFDQSxZQUFJbEQsS0FBSyxDQUFDVCxLQUFOLENBQVlvQixhQUFaLENBQTBCMEMsS0FBMUIsQ0FBZ0NDLHVCQUFoQyxDQUF3REMsWUFBeEQsSUFBd0V2RCxLQUFLLENBQUNULEtBQU4sQ0FBWW9CLGFBQVosQ0FBMEIwQyxLQUExQixDQUFnQ0MsdUJBQWhDLENBQXdEQyxZQUF4RCxDQUFxRUgsUUFBckUsQ0FBeEUsSUFBMEpwRCxLQUFLLENBQUNULEtBQU4sQ0FBWW9CLGFBQVosQ0FBMEIwQyxLQUExQixDQUFnQ0MsdUJBQWhDLENBQXdEQyxZQUF4RCxDQUFxRUgsUUFBckUsRUFBK0VJLEtBQTdPLEVBQW9QO0FBQ2hQLGNBQUlBLEtBQUssR0FBR3hELEtBQUssQ0FBQ1QsS0FBTixDQUFZb0IsYUFBWixDQUEwQjBDLEtBQTFCLENBQWdDQyx1QkFBaEMsQ0FBd0RDLFlBQXhELENBQXFFSCxRQUFyRSxFQUErRUksS0FBM0Y7O0FBQ0EsY0FBSSxPQUFPQSxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQzdCUCx1QkFBVyxHQUFHTyxLQUFLLENBQUNWLE9BQUQsRUFBVUMsVUFBVixFQUFzQixLQUF0QixDQUFuQjtBQUNILFdBRkQsTUFHSztBQUNERSx1QkFBVyxHQUFHakQsS0FBSyxDQUFDVCxLQUFOLENBQVlvQixhQUFaLENBQTBCMEMsS0FBMUIsQ0FBZ0NDLHVCQUFoQyxDQUF3REMsWUFBeEQsQ0FBcUVILFFBQXJFLEVBQStFSSxLQUE3RjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxhQUFPUCxXQUFQO0FBQ0gsS0F4QkQ7O0FBeUJBLFVBQUtmLFFBQUwsR0FBZ0IsSUFBSXVCLGNBQUosRUFBaEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLElBQUlDLGFBQUosQ0FBVztBQUMxQkMsWUFBTSxFQUFFLElBQUlDLGNBQUosQ0FBaUI7QUFBQ0MsY0FBTSxFQUFFLElBQUlDLGVBQUo7QUFBVCxPQUFqQixDQURrQjtBQUUxQlAsV0FBSyxFQUFFLE1BQUtYO0FBRmMsS0FBWCxDQUFuQjtBQWpHZTtBQXFHbEI7Ozs7V0FFRCxnQkFBTztBQUNIekQsWUFBTSxDQUFDLEtBQUtHLEtBQUwsQ0FBV29CLGFBQVgsQ0FBeUJDLGVBQTFCLENBQU4sQ0FBaURHLFdBQWpELENBQTZELFdBQTdELEVBQTBFQyxRQUExRSxDQUFtRixVQUFuRjtBQUNBLFdBQUt6QixLQUFMLENBQVdvQixhQUFYLENBQXlCb0IsR0FBekIsQ0FBNkJpQyxRQUE3QixDQUFzQyxLQUFLTixXQUEzQztBQUNBLFdBQUtPLFFBQUwsQ0FBYztBQUNWdkUsWUFBSSxFQUFFO0FBREksT0FBZDtBQUdBLFdBQUtILEtBQUwsQ0FBV29CLGFBQVgsQ0FBeUJ1RCxnQkFBekIsQ0FBMEMsSUFBMUM7QUFDSDs7O1dBQ0QsaUJBQVE7QUFDSjlFLFlBQU0sQ0FBQyxLQUFLRyxLQUFMLENBQVdvQixhQUFYLENBQXlCQyxlQUExQixDQUFOLENBQWlERyxXQUFqRCxDQUE2RCxVQUE3RCxFQUF5RUMsUUFBekUsQ0FBa0YsV0FBbEY7QUFDQSxXQUFLekIsS0FBTCxDQUFXb0IsYUFBWCxDQUF5Qm9CLEdBQXpCLENBQTZCb0MsV0FBN0IsQ0FBeUMsS0FBS1QsV0FBOUM7QUFDQSxXQUFLTyxRQUFMLENBQWM7QUFDVnZFLFlBQUksRUFBRTtBQURJLE9BQWQ7QUFHSDs7O1dBQ0QseUJBQWlCO0FBQ2IsVUFBSTBFLFFBQVEsR0FBRyxLQUFLdEQsS0FBTCxDQUFXOEIsUUFBWCxHQUFzQixDQUFyQztBQUNBLFdBQUtxQixRQUFMLENBQWM7QUFDVnJCLGdCQUFRLEVBQUV3QjtBQURBLE9BQWQ7QUFHSDs7O1dBQ0QsMEJBQWtCQyxFQUFsQixFQUF1QztBQUFBOztBQUFBLFVBQWpCQyxRQUFpQix1RUFBTixJQUFNO0FBQ25DLFVBQUlDLEdBQUo7O0FBQ0EsVUFBSUQsUUFBSixFQUFjO0FBQ1ZDLFdBQUcsR0FBRywyQkFBMkJGLEVBQWpDO0FBQ0gsT0FGRCxNQUdLO0FBQ0RFLFdBQUcsR0FBRyxrQ0FBa0NGLEVBQXhDO0FBQ0g7O0FBRURHLFdBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FDSSxVQUFDQyxRQUFELEVBQWM7QUFDVkEsZ0JBQVEsQ0FBQ0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FDSSxVQUFDRSxJQUFELEVBQVU7QUFDTixnQkFBSSxDQUFDeEQsWUFBTCxDQUFrQndELElBQWxCO0FBQ1AsU0FIRDtBQUlILE9BTkw7QUFPSDs7O1dBQ0Qsc0JBQWNBLElBQWQsRUFBb0I7QUFBQTs7QUFDaEIsV0FBSyxJQUFJQyxDQUFULElBQWNELElBQUksQ0FBQ0UsVUFBbkIsRUFBK0I7QUFDM0IsWUFBSUYsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxjQUFoQixDQUErQkYsQ0FBL0IsQ0FBSixFQUF1QztBQUNuQyxlQUFLM0QsTUFBTCxDQUFZMkQsQ0FBWixJQUFpQixFQUFqQjtBQUNBLGNBQUlHLFNBQVMsR0FBR0osSUFBSSxDQUFDRSxVQUFMLENBQWdCRCxDQUFoQixDQUFoQjs7QUFDQSxlQUFLLElBQUlJLENBQVQsSUFBY0QsU0FBUyxDQUFDRSxVQUF4QixFQUFvQztBQUNoQyxnQkFBSUYsU0FBUyxDQUFDRSxVQUFWLENBQXFCSCxjQUFyQixDQUFvQ0UsQ0FBcEMsQ0FBSixFQUE0QztBQUN4QyxrQkFBSUUsUUFBUSxHQUFHSCxTQUFTLENBQUNFLFVBQVYsQ0FBcUJELENBQXJCLENBQWY7O0FBQ0EsbUJBQUssSUFBSUcsQ0FBVCxJQUFjRCxRQUFRLENBQUNFLFFBQXZCLEVBQWlDO0FBQzdCLG9CQUFJRixRQUFRLENBQUNFLFFBQVQsQ0FBa0JOLGNBQWxCLENBQWlDSyxDQUFqQyxDQUFKLEVBQXlDO0FBQUE7QUFDckMsd0JBQUlsRixPQUFPLEdBQUdpRixRQUFRLENBQUNFLFFBQVQsQ0FBa0JELENBQWxCLENBQWQ7O0FBQ0EsMEJBQUksQ0FBQ2xFLE1BQUwsQ0FBWTJELENBQVosRUFBZVMsSUFBZixDQUFvQnBGLE9BQXBCOztBQUNBLHdCQUFJcUYsYUFBYSxHQUFHLE1BQUksQ0FBQ3BFLFlBQUwsQ0FBa0JxRSxTQUFsQixDQUE0QixVQUFDbkMsUUFBRDtBQUFBLDZCQUFjQSxRQUFRLEtBQUtuRCxPQUFPLENBQUN1RixPQUFuQztBQUFBLHFCQUE1QixDQUFwQjs7QUFDQSx3QkFBSUYsYUFBYSxLQUFLLENBQUMsQ0FBbkIsSUFBd0JyRixPQUFPLENBQUN1RixPQUFwQyxFQUE2QztBQUN6Qyw0QkFBSSxDQUFDdEUsWUFBTCxDQUFrQm1FLElBQWxCLENBQXVCcEYsT0FBTyxDQUFDdUYsT0FBL0I7QUFDSDtBQU5vQztBQU94QztBQUNKO0FBQ0o7QUFDSjtBQUVKO0FBQ0o7O0FBQ0QsV0FBS2pHLEtBQUwsQ0FBV29CLGFBQVgsQ0FBeUIwQyxLQUF6QixDQUErQkMsdUJBQS9CLENBQXVEbUMsa0JBQXZELENBQTBFLEtBQUt2RSxZQUEvRSxFQUE2RjtBQUN6RixnQkFBUSxjQUFDd0IsU0FBRCxFQUFlO0FBQ25CLGdCQUFJLENBQUN1QixRQUFMLENBQWM7QUFDVnZCLHFCQUFTLEVBQUVBO0FBREQsV0FBZDtBQUdIO0FBTHdGLE9BQTdGO0FBT0g7OztXQUNELG9CQUFVO0FBQ04sVUFBRztBQUNDLFlBQUksS0FBSzVCLEtBQUwsQ0FBV29CLFFBQVgsQ0FBb0JJLE1BQXBCLEdBQTZCLEVBQWpDLEVBQXFDO0FBQ2pDLGVBQUtvRCxTQUFMO0FBQ0EsY0FBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLL0UsS0FBTCxDQUFXb0IsUUFBdEIsQ0FBZDtBQUNBLGNBQUlBLFFBQVEsR0FBRyxJQUFJNkIsZUFBSixDQUFZO0FBQ3ZCK0IsNkJBQWlCLEVBQUU7QUFESSxXQUFaLEVBRVpDLFlBRlksQ0FFQ0osT0FGRCxDQUFmO0FBR0EsY0FBSS9CLE1BQU0sR0FBRyxLQUFLRixXQUFMLENBQWlCc0MsU0FBakIsRUFBYjtBQUNBcEMsZ0JBQU0sQ0FBQ3FDLGNBQVAsQ0FBc0IsVUFBQ25ELE9BQUQsRUFBYTtBQUMvQmMsa0JBQU0sQ0FBQy9ELGFBQVAsQ0FBcUJpRCxPQUFyQjtBQUNILFdBRkQ7O0FBR0EsZUFBSyxJQUFJOEIsQ0FBVCxJQUFjMUMsUUFBZCxFQUF3QjtBQUNwQixnQkFBSUEsUUFBUSxDQUFDNEMsY0FBVCxDQUF3QkYsQ0FBeEIsQ0FBSixFQUFnQztBQUM1QixrQkFBSXNCLFdBQVcsR0FBR2hFLFFBQVEsQ0FBQzBDLENBQUQsQ0FBMUI7O0FBQ0Esa0JBQUlzQixXQUFXLENBQUNoRCxHQUFaLENBQWdCLFFBQWhCLENBQUosRUFBK0I7QUFDM0JnRCwyQkFBVyxDQUFDQyxXQUFaLENBQXdCLElBQUlDLFlBQUosQ0FBV0YsV0FBVyxDQUFDRyxXQUFaLEdBQTBCQyxjQUExQixFQUFYLEVBQXVESixXQUFXLENBQUNoRCxHQUFaLENBQWdCLFFBQWhCLENBQXZELENBQXhCO0FBQ0g7O0FBQ0RVLG9CQUFNLENBQUNoRSxVQUFQLENBQWtCc0csV0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSixPQXJCRCxDQXNCQSxPQUFNSyxLQUFOLEVBQWE7QUFDVEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDs7QUFDRCxVQUFJLEtBQUt6RixLQUFMLENBQVc2QixLQUFmLEVBQXNCO0FBQ2xCLFlBQUkrRCxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsWUFBUCxFQUFoQjtBQUNBLFlBQUlqRSxLQUFLLEdBQUcrRCxTQUFTLENBQUNHLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBWjtBQUNBLFlBQUlDLGNBQWMsR0FBR25FLEtBQUssQ0FBQ21FLGNBQU4sQ0FBcUJDLFVBQXJCLENBQWdDLENBQWhDLEtBQXNDcEUsS0FBSyxDQUFDbUUsY0FBakU7QUFDQW5FLGFBQUssQ0FBQ3FFLFFBQU4sQ0FBZUYsY0FBZixFQUErQixLQUFLaEcsS0FBTCxDQUFXNkIsS0FBMUM7QUFDQUEsYUFBSyxDQUFDc0UsTUFBTixDQUFhSCxjQUFiLEVBQTZCLEtBQUtoRyxLQUFMLENBQVc2QixLQUF4QztBQUNBK0QsaUJBQVMsQ0FBQ1EsV0FBVixDQUFzQnZFLEtBQXRCO0FBQ0ErRCxpQkFBUyxDQUFDUyxRQUFWLENBQW1CeEUsS0FBbkI7QUFDSDtBQUNKOzs7V0FDRCxvQkFBV2xDLEtBQVgsRUFBa0I7QUFBQTs7QUFDZCxVQUFJa0MsS0FBSyxHQUFHZ0UsTUFBTSxDQUFDQyxZQUFQLEdBQXNCQyxVQUF0QixDQUFpQyxDQUFqQyxFQUFvQ08sV0FBaEQ7QUFDQSxXQUFLbkQsUUFBTCxDQUFjO0FBQUMvQixnQkFBUSxFQUFFekIsS0FBSyxDQUFDaUIsTUFBTixDQUFhMkYsU0FBeEI7QUFBbUMxRSxhQUFLLEVBQUVBO0FBQTFDLE9BQWQsRUFBZ0UsWUFBTTtBQUNsRSxjQUFJLENBQUNILFFBQUw7QUFDSCxPQUZEO0FBR0g7OztXQUNELG9CQUFZTSxPQUFaLEVBQXFCO0FBQ2pCLFVBQUl3RSxXQUFXLEdBQUcxQixJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLL0UsS0FBTCxDQUFXb0IsUUFBdEIsQ0FBbEI7QUFFQW9GLGlCQUFXLENBQUNwRixRQUFaLENBQXFCbUQsSUFBckIsQ0FBMEJ2QyxPQUExQjtBQUNBLFVBQUlaLFFBQVEsR0FBRzBELElBQUksQ0FBQzJCLFNBQUwsQ0FBZUQsV0FBZixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQUFmO0FBQ0EsV0FBS3JELFFBQUwsQ0FBYztBQUNWL0IsZ0JBQVEsRUFBRUE7QUFEQSxPQUFkO0FBR0EsV0FBS3dELFNBQUw7QUFDSDs7O1dBQ0QsdUJBQWVDLE9BQWYsRUFBd0I7QUFDcEIsVUFBSS9DLFFBQVEsR0FBRytDLE9BQU8sQ0FBQzZCLFVBQVIsQ0FBbUI1RSxRQUFsQztBQUNBLFVBQUkwRSxXQUFXLEdBQUcxQixJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLL0UsS0FBTCxDQUFXb0IsUUFBdEIsQ0FBbEI7QUFDQSxVQUFJdUYsU0FBUyxHQUFHSCxXQUFXLENBQUNwRixRQUFaLENBQXFCcUQsU0FBckIsQ0FBK0IsVUFBQ3RGLE9BQUQsRUFBYTtBQUN4RCxlQUFPQSxPQUFPLENBQUN1SCxVQUFSLENBQW1CNUUsUUFBbkIsS0FBZ0NBLFFBQXZDO0FBQ0gsT0FGZSxDQUFoQjtBQUdBMEUsaUJBQVcsQ0FBQ3BGLFFBQVosQ0FBcUJ3RixNQUFyQixDQUE0QkQsU0FBNUIsRUFBdUMsQ0FBdkM7QUFDQSxVQUFJdkYsUUFBUSxHQUFHMEQsSUFBSSxDQUFDMkIsU0FBTCxDQUFlRCxXQUFmLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBQWY7QUFDQSxXQUFLckQsUUFBTCxDQUFjO0FBQ1YvQixnQkFBUSxFQUFFQTtBQURBLE9BQWQ7QUFHQSxXQUFLd0QsU0FBTDtBQUNIOzs7V0FDRCx1QkFBZUMsT0FBZixFQUF3QjtBQUNwQixVQUFJL0MsUUFBUSxHQUFHK0MsT0FBTyxDQUFDNkIsVUFBUixDQUFtQjVFLFFBQWxDO0FBQ0EsVUFBSStFLFVBQVUsR0FBRy9CLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUsvRSxLQUFMLENBQVdvQixRQUF0QixDQUFqQjtBQUNBLFVBQUlvRixXQUFXLEdBQUdLLFVBQVUsQ0FBQ3pGLFFBQTdCO0FBQ0EsVUFBSXVGLFNBQVMsR0FBR0gsV0FBVyxDQUFDL0IsU0FBWixDQUFzQixVQUFDdEYsT0FBRCxFQUFhO0FBQy9DLGVBQU9BLE9BQU8sQ0FBQ3VILFVBQVIsQ0FBbUI1RSxRQUFuQixLQUFnQ0EsUUFBdkM7QUFDSCxPQUZlLENBQWhCO0FBR0ErRSxnQkFBVSxDQUFDekYsUUFBWCxDQUFvQnVGLFNBQXBCLElBQWlDOUIsT0FBakM7QUFDQSxVQUFJekQsUUFBUSxHQUFHMEQsSUFBSSxDQUFDMkIsU0FBTCxDQUFlSSxVQUFmLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDLENBQWY7QUFDQSxXQUFLMUQsUUFBTCxDQUFjO0FBQ1YvQixnQkFBUSxFQUFFQTtBQURBLE9BQWQ7QUFHQSxXQUFLd0QsU0FBTDtBQUNIOzs7V0FDRCxxQkFBYTtBQUNULFVBQUksS0FBS25HLEtBQUwsQ0FBVzRDLFVBQVgsSUFBeUIsS0FBS3JCLEtBQUwsQ0FBV29CLFFBQVgsQ0FBb0JJLE1BQXBCLEdBQTZCLEVBQTFELEVBQThEO0FBQzFERixTQUFDLENBQUMsS0FBSzdDLEtBQUwsQ0FBVzRDLFVBQVosQ0FBRCxDQUF5QkUsR0FBekIsQ0FBNkIsS0FBS3ZCLEtBQUwsQ0FBV29CLFFBQXhDLEVBRDBELENBQ1A7QUFDdEQ7QUFDSjs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFDTCxVQUFNbEMsS0FBSyxHQUFHLElBQWQsQ0FESyxDQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsMEJBQ0k7QUFBSyxpQkFBUyxFQUFFO0FBQWhCLHNCQUNJLGdDQUFDLHFCQUFEO0FBQVUsb0JBQVksRUFBRSxtQkFBeEI7QUFBNkMsbUJBQVcsRUFBRSxxQkFBMUQ7QUFBaUYscUJBQWEsRUFBRSx1QkFBaEc7QUFDVSxjQUFNLEVBQUUsS0FBS2IsYUFBTCxDQUFtQnZCLE1BRHJDO0FBQzZDLHFCQUFhLEVBQUUsb0JBRDVEO0FBQ2tGLGtCQUFVLEVBQUUsS0FBSzRCLEtBRG5HO0FBQzBHLHFCQUFhLEVBQUUsS0FBS0wsYUFBTCxDQUFtQnlJO0FBRDVJLFFBREosZUFJSTtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsU0FDSyxLQUFLM0YsS0FBTCxDQUFXRixHQUFYLENBQWUsVUFBUzlCLE9BQVQsRUFBa0I0SCxLQUFsQixFQUF5QjtBQUNyQyxZQUFJNUgsT0FBTyxLQUFLLFFBQVosSUFBeUJELEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYWhCLE9BQWIsS0FBeUJELEtBQUssQ0FBQ2lCLE1BQU4sQ0FBYWhCLE9BQWIsRUFBc0JxQyxNQUF0QixHQUErQixDQUFyRixFQUF5RjtBQUNyRiw4QkFBTztBQUFRLGVBQUcsRUFBRXVGLEtBQWI7QUFBb0IscUJBQVMsRUFBRSxnQkFBZ0I1SCxPQUFoQixHQUEwQixJQUExQixJQUFrQ0EsT0FBTyxLQUFLRCxLQUFLLENBQUNjLEtBQU4sQ0FBWTJCLFdBQXhCLEdBQXNDLFlBQXRDLEdBQXFELGNBQXZGLENBQS9CO0FBQ1EscUJBQVMsRUFBRTtBQUFBLHFCQUFNekMsS0FBSyxDQUFDaUUsUUFBTixDQUFlO0FBQUN4QiwyQkFBVyxFQUFFeEM7QUFBZCxlQUFmLENBQU47QUFBQTtBQURuQixZQUFQO0FBRUgsU0FIRCxNQUlLO0FBQ0QsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FSQSxDQURMLENBSkosZUFlSSxnQ0FBQyx5QkFBRDtBQUFZLGlCQUFTLEVBQUUsaUJBQXZCO0FBQTBDLHFCQUFhLEVBQUUsS0FBSzRDLGFBQTlEO0FBQTZFLFlBQUksRUFBRSxLQUFLL0IsS0FBTCxDQUFXMkIsV0FBOUY7QUFBMkcsaUJBQVMsRUFBRSxLQUFLM0IsS0FBTCxDQUFXNEIsU0FBakk7QUFBNEksZ0JBQVEsRUFBRSxLQUFLekIsTUFBTCxDQUFZLEtBQUtILEtBQUwsQ0FBVzJCLFdBQXZCLElBQXNDLEtBQUt4QixNQUFMLENBQVksS0FBS0gsS0FBTCxDQUFXMkIsV0FBdkIsQ0FBdEMsR0FBMkUsRUFBak87QUFBcU8sY0FBTSxFQUFFLElBQTdPO0FBQW1QLG1CQUFXLEVBQUUsS0FBSzNCLEtBQUwsQ0FBVzRDLFdBQTNRO0FBQXdSLGdCQUFRLEVBQUUsS0FBS3hCLFFBQXZTO0FBQWlULHFCQUFhLEVBQUUsS0FBS3JDLGFBQXJVO0FBQW9WLHFCQUFhLEVBQUUsS0FBS0MsYUFBeFc7QUFBdVgsa0JBQVUsRUFBRSxLQUFLRjtBQUF4WSwrRUFBaWEsS0FBSzhELFdBQXRhLHNFQUE2YixLQUFLNUMsS0FBTCxDQUFXOEIsUUFBeGMsMkVBQWllLEtBQUtqRCxhQUF0ZSw0RUFBcWdCLEtBQUttSSxjQUExZ0IsMkVBQXlpQixLQUFLdkksS0FBTCxDQUFXb0IsYUFBcGpCLG9FQUEya0IsSUFBM2tCLGtFQUF1bEIsS0FBS3hCLGFBQTVsQix5QkFmSixlQWdCSTtBQUFLLGlCQUFTLEVBQUUsb0JBQWhCO0FBQXNDLGFBQUssRUFBRTtBQUFDNEksa0JBQVEsRUFBRTtBQUFYO0FBQTdDLHNCQUNJO0FBQUssdUJBQWUsRUFBRSxJQUF0QjtBQUE0QixhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRSxRQUFaO0FBQXNCQyxtQkFBUyxFQUFFLE1BQWpDO0FBQXlDQyxnQkFBTSxFQUFFO0FBQWpELFNBQW5DO0FBQThGLHNDQUE4QixFQUFFLElBQTlIO0FBQW9JLGVBQU8sRUFBRSxLQUFLbkk7QUFBbEosU0FBK0osS0FBS2UsS0FBTCxDQUFXb0IsUUFBMUssQ0FESixDQWhCSixDQURKO0FBc0JIOzs7RUFqU2dDaUcsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RyQzs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztJQUdhQyxVOzs7OztBQUNULHNCQUFZN0ksS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxRQUFNUyxLQUFLLGlEQUFYO0FBQ0EsVUFBS2MsS0FBTCxHQUFhO0FBQ1R1SCxjQUFRLEVBQUUsS0FERDtBQUVUbkcsY0FBUSxFQUFFLElBRkQ7QUFHVG9HLG1CQUFhLEVBQUUvSSxLQUFLLENBQUM2RixRQUFOLENBQWUsQ0FBZixJQUFvQjdGLEtBQUssQ0FBQzZGLFFBQU4sQ0FBZSxDQUFmLEVBQWtCZixFQUF0QyxHQUEyQyxDQUhqRDtBQUlUa0UsaUJBQVcsRUFBRWhKLEtBQUssQ0FBQzZGLFFBQU4sQ0FBZSxDQUFmLElBQW9CN0YsS0FBSyxDQUFDNkYsUUFBTixDQUFlLENBQWYsRUFBa0JJLE9BQXRDLEdBQWdELENBSnBEO0FBS1RnRCxnQkFBVSxFQUFFO0FBTEgsS0FBYjtBQU9BLFVBQUtDLFdBQUw7QUFDQSxVQUFLMUksVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCTixJQUFoQixnREFBbEI7QUFYZTtBQVlsQjs7OztXQUNELGtCQUFTO0FBQUE7O0FBQ0wsVUFBSSxLQUFLRixLQUFMLENBQVdtSixJQUFYLEtBQW9CLFFBQXBCLElBQWdDLEtBQUtuSixLQUFMLENBQVdvSixNQUEvQyxFQUF1RDtBQUNuRCxZQUFJLEtBQUtGLFdBQVQsRUFBc0I7QUFBRTtBQUNwQixjQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLSixXQUFuQixDQUFKLEVBQXFDO0FBQ2pDLGlCQUFLbEosS0FBTCxDQUFXb0IsYUFBWCxDQUF5Qm9CLEdBQXpCLENBQTZCK0csaUJBQTdCLENBQStDLEtBQUtMLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBL0M7QUFDQSxpQkFBS2xKLEtBQUwsQ0FBV29CLGFBQVgsQ0FBeUJvQixHQUF6QixDQUE2QitHLGlCQUE3QixDQUErQyxLQUFLTCxXQUFMLENBQWlCLENBQWpCLENBQS9DO0FBQ0gsV0FIRCxNQUlLO0FBQ0QsaUJBQUtsSixLQUFMLENBQVdvQixhQUFYLENBQXlCb0IsR0FBekIsQ0FBNkIrRyxpQkFBN0IsQ0FBK0MsS0FBS0wsV0FBcEQ7QUFDSDtBQUNKOztBQUNELFlBQUlNLFFBQUo7O0FBQ0EsZ0JBQU8sS0FBS3hKLEtBQUwsQ0FBV21KLElBQWxCO0FBQ0ksZUFBSyxPQUFMO0FBQ0lLLG9CQUFRLEdBQUcsSUFBSUMsV0FBSixDQUFVLENBQVYsRUFBWSxDQUFaLENBQVg7QUFDQTs7QUFDSixlQUFLLFlBQUw7QUFDSUQsb0JBQVEsR0FBRyxJQUFJRSxnQkFBSixDQUFlLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELEVBQVEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFSLENBQWYsQ0FBWDtBQUNBOztBQUNKLGVBQUssU0FBTDtBQUNJRixvQkFBUSxHQUFHLElBQUlHLGFBQUosQ0FBWSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxFQUFRLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBUixDQUFaLENBQVg7QUFSUjs7QUFVQSxZQUFJcEcsT0FBTyxHQUFHLElBQUlxRyxXQUFKLENBQVlKLFFBQVosQ0FBZDtBQUNBakcsZUFBTyxDQUFDc0csR0FBUixDQUFZLFVBQVosRUFBd0IsS0FBS3RJLEtBQUwsQ0FBV3lILFdBQW5DO0FBQ0EsYUFBS0UsV0FBTCxHQUFtQixJQUFJWSxpQkFBSixDQUFTO0FBQ3hCO0FBQ0F6RixnQkFBTSxFQUFFLEtBQUtyRSxLQUFMLENBQVdtRSxXQUFYLENBQXVCc0MsU0FBdkIsRUFGZ0I7QUFHeEJzRCxjQUFJLEVBQUUsS0FBSy9KLEtBQUwsQ0FBV21KLElBSE87QUFJeEJhLG1CQUFTLEVBQUUsS0FKYTtBQUt4QkMsdUJBQWEsRUFBRSxDQUxTO0FBTXhCaEcsZUFBSyxFQUFFLEtBQUtqRSxLQUFMLENBQVdzRCxhQUFYLENBQXlCQyxPQUF6QixDQU5pQjtBQU94QnVGLGtCQUFRLEVBQUUsS0FBS3ZILEtBQUwsQ0FBV3VIO0FBUEcsU0FBVCxDQUFuQjtBQVNBLGFBQUtJLFdBQUwsQ0FBaUJqSSxFQUFqQixDQUFvQixTQUFwQixFQUNJLFVBQUNDLEtBQUQsRUFBVztBQUNQQSxlQUFLLENBQUNxQyxPQUFOLENBQWNzRyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLE1BQUksQ0FBQzdKLEtBQUwsQ0FBV3FELFFBQXpDO0FBQ0FuQyxlQUFLLENBQUNxQyxPQUFOLENBQWNzRyxHQUFkLENBQWtCLFVBQWxCLEVBQThCLE1BQUksQ0FBQ3RJLEtBQUwsQ0FBV3lILFdBQXpDO0FBQ0E5SCxlQUFLLENBQUNxQyxPQUFOLENBQWNzRyxHQUFkLENBQWtCLFdBQWxCLEVBQStCLE1BQUksQ0FBQ3RJLEtBQUwsQ0FBV3dILGFBQTFDO0FBQ0EsY0FBSTNDLE9BQUo7O0FBQ0EsY0FBSSxNQUFJLENBQUNwRyxLQUFMLENBQVdtSixJQUFYLEtBQW9CLFFBQXhCLEVBQWtDO0FBQUU7QUFDaEMsZ0JBQUlLLFNBQVEsR0FBR3RJLEtBQUssQ0FBQ3FDLE9BQU4sQ0FBY3VELFdBQWQsR0FBNEJvRCxLQUE1QixHQUFvQ0MsU0FBcEMsQ0FBOEMsV0FBOUMsRUFBMkQsV0FBM0QsQ0FBZjs7QUFDQSxnQkFBSUMsTUFBTSxHQUFHWixTQUFRLENBQUNhLFNBQVQsRUFBYjs7QUFDQSxnQkFBSUMsTUFBTSxHQUFHcEosS0FBSyxDQUFDcUMsT0FBTixDQUFjdUQsV0FBZCxHQUE0QnlELFNBQTVCLEVBQWI7QUFDQW5FLG1CQUFPLEdBQUc7QUFDTjJELGtCQUFJLEVBQUUsU0FEQTtBQUVOUCxzQkFBUSxFQUFFO0FBQ05PLG9CQUFJLEVBQUUsT0FEQTtBQUVOUywyQkFBVyxFQUFFSjtBQUZQLGVBRko7QUFNTm5DLHdCQUFVLEVBQUU7QUFDUjVFLHdCQUFRLEVBQUUsTUFBSSxDQUFDckQsS0FBTCxDQUFXcUQsUUFEYjtBQUVSb0gseUJBQVMsRUFBRSxNQUFJLENBQUNsSixLQUFMLENBQVd3SCxhQUZkO0FBR1JsRix3QkFBUSxFQUFFLE1BQUksQ0FBQ3RDLEtBQUwsQ0FBV3lILFdBSGI7QUFJUnNCLHNCQUFNLEVBQUVBO0FBSkE7QUFOTixhQUFWO0FBYUgsV0FqQkQsTUFrQks7QUFDRGxFLG1CQUFPLEdBQUcsSUFBSTVCLGVBQUosR0FBY2tHLGtCQUFkLENBQWlDeEosS0FBSyxDQUFDcUMsT0FBdkMsRUFBZ0Q7QUFDdERvSCw0QkFBYyxFQUFFLFdBRHNDO0FBRXREcEUsK0JBQWlCLEVBQUU7QUFGbUMsYUFBaEQsQ0FBVjtBQUlIOztBQUNELGdCQUFJLENBQUN2RyxLQUFMLENBQVdLLFVBQVgsQ0FBc0IrRixPQUF0Qjs7QUFDQSxnQkFBSSxDQUFDcEcsS0FBTCxDQUFXSSxhQUFYO0FBQ0gsU0FoQ0w7QUFrQ0EsYUFBS0osS0FBTCxDQUFXb0IsYUFBWCxDQUF5Qm9CLEdBQXpCLENBQTZCb0ksY0FBN0IsQ0FBNEMsS0FBSzFCLFdBQWpEO0FBQ0gsT0FuRUQsTUFvRUs7QUFDRCxZQUFJLEtBQUtBLFdBQVQsRUFBc0I7QUFBRTtBQUNwQixjQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLSixXQUFuQixDQUFKLEVBQXFDO0FBQ2pDLGlCQUFLbEosS0FBTCxDQUFXb0IsYUFBWCxDQUF5Qm9CLEdBQXpCLENBQTZCK0csaUJBQTdCLENBQStDLEtBQUtMLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBL0M7QUFDQSxpQkFBS2xKLEtBQUwsQ0FBV29CLGFBQVgsQ0FBeUJvQixHQUF6QixDQUE2QitHLGlCQUE3QixDQUErQyxLQUFLTCxXQUFMLENBQWlCLENBQWpCLENBQS9DO0FBQ0gsV0FIRCxNQUlLO0FBQ0QsaUJBQUtsSixLQUFMLENBQVdvQixhQUFYLENBQXlCb0IsR0FBekIsQ0FBNkIrRyxpQkFBN0IsQ0FBK0MsS0FBS0wsV0FBcEQ7QUFDSDtBQUNKOztBQUNELFlBQUksS0FBSzNILEtBQUwsQ0FBVzBILFVBQVgsS0FBMEIsUUFBOUIsRUFBd0M7QUFDcEMsZUFBS0MsV0FBTCxHQUFtQixJQUFJMkIsbUJBQUosQ0FBVztBQUMxQkMsa0JBQU0sRUFBRSxDQUFDLEtBQUs5SyxLQUFMLENBQVdtRSxXQUFaLENBRGtCO0FBRTFCNEcsd0JBQVksRUFBRTtBQUZZLFdBQVgsQ0FBbkI7QUFJQSxlQUFLN0IsV0FBTCxDQUFpQmpJLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQUMrSixDQUFELEVBQU87QUFDakMsZ0JBQUl6SCxPQUFPLEdBQUd5SCxDQUFDLENBQUM3SSxNQUFGLENBQVM4SSxXQUFULEdBQXVCQyxRQUF2QixHQUFrQyxDQUFsQyxDQUFkO0FBQ0EsZ0JBQUk5RSxPQUFPLEdBQUcsSUFBSTVCLGVBQUosR0FBY2tHLGtCQUFkLENBQWlDbkgsT0FBakMsRUFBMEM7QUFDcERvSCw0QkFBYyxFQUFFLFdBRG9DO0FBRXBEcEUsK0JBQWlCLEVBQUU7QUFGaUMsYUFBMUMsQ0FBZDs7QUFJQSxrQkFBSSxDQUFDdkcsS0FBTCxDQUFXTSxhQUFYLENBQXlCOEYsT0FBekI7O0FBQ0EsZ0JBQUkvQixNQUFNLEdBQUcsTUFBSSxDQUFDckUsS0FBTCxDQUFXbUUsV0FBWCxDQUF1QnNDLFNBQXZCLEVBQWI7O0FBQ0FwQyxrQkFBTSxDQUFDL0QsYUFBUCxDQUFxQmlELE9BQXJCO0FBQ0gsV0FURDtBQVVBLGVBQUt2RCxLQUFMLENBQVdvQixhQUFYLENBQXlCb0IsR0FBekIsQ0FBNkJvSSxjQUE3QixDQUE0QyxLQUFLMUIsV0FBakQ7QUFDSCxTQWhCRCxNQWlCSztBQUNELGVBQUtBLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxlQUFLQSxXQUFMLENBQWlCcEQsSUFBakIsQ0FBc0IsSUFBSStFLG1CQUFKLENBQVc7QUFDN0JDLGtCQUFNLEVBQUUsQ0FBQyxLQUFLOUssS0FBTCxDQUFXbUUsV0FBWixDQURxQjtBQUU3QjRHLHdCQUFZLEVBQUU7QUFGZSxXQUFYLENBQXRCO0FBSUEsZUFBSzdCLFdBQUwsQ0FBaUJwRCxJQUFqQixDQUFzQixJQUFJcUYsbUJBQUosQ0FBVztBQUM3QnhJLG9CQUFRLEVBQUUsS0FBS3VHLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IrQixXQUFwQixFQURtQjtBQUU3QkcsMEJBQWMsRUFBRTtBQUZhLFdBQVgsQ0FBdEI7QUFJQSxlQUFLbEMsV0FBTCxDQUFpQixDQUFqQixFQUFvQmpJLEVBQXBCLENBQXVCLFdBQXZCLEVBQW9DLFVBQUMrSixDQUFELEVBQU87QUFDdkMsZ0JBQUl6SCxPQUFPLEdBQUd5SCxDQUFDLENBQUNySSxRQUFGLENBQVd1SSxRQUFYLEdBQXNCLENBQXRCLENBQWQ7QUFDQSxnQkFBSTlFLE9BQU8sR0FBRyxJQUFJNUIsZUFBSixHQUFja0csa0JBQWQsQ0FBaUNuSCxPQUFqQyxFQUEwQztBQUNwRG9ILDRCQUFjLEVBQUUsV0FEb0M7QUFFcERwRSwrQkFBaUIsRUFBRTtBQUZpQyxhQUExQyxDQUFkOztBQUlBLGtCQUFJLENBQUN2RyxLQUFMLENBQVdPLGFBQVgsQ0FBeUI2RixPQUF6QjtBQUNILFdBUEQ7QUFRQSxlQUFLcEcsS0FBTCxDQUFXb0IsYUFBWCxDQUF5Qm9CLEdBQXpCLENBQTZCb0ksY0FBN0IsQ0FBNEMsS0FBSzFCLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBNUM7QUFDQSxlQUFLbEosS0FBTCxDQUFXb0IsYUFBWCxDQUF5Qm9CLEdBQXpCLENBQTZCb0ksY0FBN0IsQ0FBNEMsS0FBSzFCLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBNUM7QUFDSDtBQUNKOztBQUNELFVBQUlyRCxRQUFRLEdBQUcsSUFBZjs7QUFDQSxVQUFJLEtBQUs3RixLQUFMLENBQVc2RixRQUFYLElBQXVCLEtBQUs3RixLQUFMLENBQVc2RixRQUFYLENBQW9COUMsTUFBcEIsR0FBNkIsQ0FBeEQsRUFBMkQ7QUFDdkQ4QyxnQkFBUSxHQUFHLEtBQUs3RixLQUFMLENBQVc2RixRQUFYLENBQW9CckQsR0FBcEIsQ0FBd0IsVUFBQzlCLE9BQUQsRUFBYTtBQUM1Qyw4QkFBUTtBQUFRLGVBQUcsRUFBRUEsT0FBTyxDQUFDb0UsRUFBckI7QUFBeUIsaUJBQUssRUFBRTtBQUFDNkQsb0JBQU0sRUFBRSxNQUFUO0FBQWlCMEMsbUJBQUssRUFBRTtBQUF4QixhQUFoQztBQUNRLHFCQUFTLEVBQUUscUJBQUs7QUFBQyxvQkFBSSxDQUFDM0csUUFBTCxDQUFjO0FBQUNxRSw2QkFBYSxFQUFFckksT0FBTyxDQUFDb0UsRUFBeEI7QUFBNEJrRSwyQkFBVyxFQUFFdEksT0FBTyxDQUFDdUY7QUFBakQsZUFBZDtBQUF5RTtBQURsRywwQkFFSixnQ0FBQyxvQ0FBRDtBQUFtQixxQkFBUyxFQUFFLE1BQUksQ0FBQ2pHLEtBQUwsQ0FBV21ELFNBQXpDO0FBQW9ELG1CQUFPLEVBQUV6QyxPQUFPLENBQUN1RjtBQUFyRSxZQUZJLENBQVI7QUFHSCxTQUpVLENBQVg7QUFLSDs7QUFDRCxVQUFJcUYsWUFBWSxHQUFHLElBQW5COztBQUNBLFVBQUksb0JBQW9CaEssUUFBcEIsQ0FBNkIsS0FBS3RCLEtBQUwsQ0FBV21KLElBQXhDLENBQUosRUFBbUQ7QUFDL0MsWUFBSW9DLGFBQWEsR0FBRyxrQkFBcEI7QUFDQUEscUJBQWEsSUFBSSxLQUFLaEssS0FBTCxDQUFXdUgsUUFBWCxHQUFzQixZQUF0QixHQUFxQyxjQUF0RDtBQUNBd0Msb0JBQVksZ0JBQUk7QUFBRyxtQkFBUyxFQUFFQyxhQUFkO0FBQTZCLG1CQUFTLEVBQUUscUJBQU07QUFBQyxrQkFBSSxDQUFDQyxjQUFMO0FBQXNCO0FBQXJFLHNCQUFoQjtBQUNILE9BSkQsTUFLSyxJQUFJLEtBQUt4TCxLQUFMLENBQVdtSixJQUFYLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ25DbUMsb0JBQVksZ0JBQUk7QUFBSyxtQkFBUyxFQUFFO0FBQWhCLHdCQUNaO0FBQVEsZUFBSyxFQUFFLFFBQWY7QUFBeUIsbUJBQVMsRUFBRSxnQ0FBZ0MsS0FBSy9KLEtBQUwsQ0FBVzBILFVBQVgsS0FBMEIsUUFBMUIsR0FBcUMsWUFBckMsR0FBbUQsY0FBbkYsQ0FBcEM7QUFBd0ksbUJBQVMsRUFBRSxxQkFBTTtBQUFDLGtCQUFJLENBQUN3QyxnQkFBTCxDQUFzQixRQUF0QjtBQUFnQztBQUExTCxVQURZLGVBRVo7QUFBUSxlQUFLLEVBQUUsUUFBZjtBQUF5QixtQkFBUyxFQUFFLGdDQUFnQyxLQUFLbEssS0FBTCxDQUFXMEgsVUFBWCxLQUEwQixRQUExQixHQUFxQyxZQUFyQyxHQUFtRCxjQUFuRixDQUFwQztBQUF3SSxtQkFBUyxFQUFFLHFCQUFNO0FBQUMsa0JBQUksQ0FBQ3dDLGdCQUFMLENBQXNCLFFBQXRCO0FBQWdDO0FBQTFMLFVBRlksQ0FBaEI7QUFJSDs7QUFDRCwwQkFDSSw2Q0FDS0gsWUFETCxlQUVJO0FBQUssaUJBQVMsRUFBRTtBQUFoQixTQUNLekYsUUFETCxDQUZKLENBREo7QUFTSDs7O1dBQ0QsNEJBQW1CNkYsU0FBbkIsRUFBOEJDLFNBQTlCLEVBQXlDQyxRQUF6QyxFQUFtRDtBQUFBOztBQUMvQyxVQUFJLEtBQUs1TCxLQUFMLENBQVc2RixRQUFYLENBQW9CLENBQXBCLEtBQTBCNkYsU0FBUyxDQUFDdkMsSUFBVixLQUFtQixLQUFLbkosS0FBTCxDQUFXbUosSUFBNUQsRUFBa0U7QUFDOUQsWUFBSSxLQUFLNUgsS0FBTCxDQUFXd0gsYUFBWCxLQUE2QixDQUFqQyxFQUFvQztBQUNoQyxlQUFLckUsUUFBTCxDQUFjO0FBQ1ZxRSx5QkFBYSxFQUFFLEtBQUsvSSxLQUFMLENBQVc2RixRQUFYLENBQW9CLENBQXBCLEVBQXVCZixFQUQ1QjtBQUVWa0UsdUJBQVcsRUFBRSxLQUFLaEosS0FBTCxDQUFXNkYsUUFBWCxDQUFvQixDQUFwQixFQUF1Qkk7QUFGMUIsV0FBZCxFQURnQyxDQUtoQztBQUNBO0FBQ0gsU0FQRCxNQVFLLElBQUksQ0FBQyxLQUFLakcsS0FBTCxDQUFXNkYsUUFBWCxDQUFvQmdHLElBQXBCLENBQXlCLFVBQUFuTCxPQUFPO0FBQUEsaUJBQUlBLE9BQU8sQ0FBQ29FLEVBQVIsS0FBZSxNQUFJLENBQUN2RCxLQUFMLENBQVd3SCxhQUE5QjtBQUFBLFNBQWhDLENBQUwsRUFBbUY7QUFDcEYsZUFBS3JFLFFBQUwsQ0FBYztBQUNWcUUseUJBQWEsRUFBRSxLQUFLL0ksS0FBTCxDQUFXNkYsUUFBWCxDQUFvQixDQUFwQixFQUF1QmYsRUFENUI7QUFFVmtFLHVCQUFXLEVBQUUsS0FBS2hKLEtBQUwsQ0FBVzZGLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJJO0FBRjFCLFdBQWQsRUFEb0YsQ0FLcEY7QUFDQTtBQUNIO0FBQ0o7QUFDSixLLENBRUQ7QUFDQTtBQUNBOzs7O1dBQ0EsMEJBQWlCNkYsTUFBakIsRUFBeUI7QUFDckIsV0FBS3BILFFBQUwsQ0FBYztBQUNWdUUsa0JBQVUsRUFBRTZDO0FBREYsT0FBZDtBQUdIOzs7V0FDRCwwQkFBaUI7QUFDYixXQUFLcEgsUUFBTCxDQUFjO0FBQ1ZvRSxnQkFBUSxFQUFFLENBQUMsS0FBS3ZILEtBQUwsQ0FBV3VIO0FBRFosT0FBZDtBQUdIOzs7V0FDRCxvQkFBVzVILEtBQVgsRUFBa0I7QUFDZCxXQUFLd0QsUUFBTCxDQUFjO0FBQUMvQixnQkFBUSxFQUFFekIsS0FBSyxDQUFDaUIsTUFBTixDQUFhNEo7QUFBeEIsT0FBZDtBQUNIOzs7RUF0TTJCbkQsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaaEM7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFHYW9ELGlCOzs7OztBQUNULDZCQUFZaE0sS0FBWixFQUFtQjtBQUFBO0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUVMO0FBQ0EsVUFBSWlNLGlCQUFpQixHQUFHLElBQXhCO0FBQ0EsVUFBSXBJLFFBQVEsR0FBRyxLQUFLN0QsS0FBTCxDQUFXbUQsU0FBWCxDQUFxQmEsWUFBckIsQ0FBa0MsS0FBS2hFLEtBQUwsQ0FBV2lHLE9BQTdDLENBQWY7QUFDQSxVQUFJOUMsU0FBUyxHQUFHVSxRQUFRLENBQUNxSSxXQUF6QjtBQUNBLFVBQUlDLE1BQU0sR0FBR3RJLFFBQVEsQ0FBQ0ksS0FBVCxJQUFrQkosUUFBUSxDQUFDSSxLQUFULENBQWUsSUFBSTJGLG1CQUFKLENBQVk7QUFBQ0osZ0JBQVEsRUFBRSxJQUFJQyxXQUFKLENBQVUsQ0FBVixFQUFZLENBQVo7QUFBWCxPQUFaLENBQWYsRUFBd0QsV0FBeEQsQ0FBbEIsR0FBeUY1RixRQUFRLENBQUNJLEtBQVQsQ0FBZSxJQUFJMkYsbUJBQUosQ0FBWTtBQUFDSixnQkFBUSxFQUFFLElBQUlDLFdBQUosQ0FBVSxDQUFWLEVBQVksQ0FBWjtBQUFYLE9BQVosQ0FBZixFQUF3RCxXQUF4RCxDQUF6RixHQUErSixJQUE1SztBQUNBLFVBQUkyQyxNQUFNLEdBQUcvQyxLQUFLLENBQUNDLE9BQU4sQ0FBYzZDLE1BQWQsSUFBd0JBLE1BQU0sQ0FBQyxDQUFELENBQTlCLEdBQW1DQSxNQUFoRDtBQUNBLFVBQUlFLFNBQVMsR0FBR2xKLFNBQVMsR0FBR0EsU0FBUyxDQUFDbUosU0FBYixHQUF5QixTQUFsRDs7QUFDQSxVQUFJbkosU0FBUyxLQUFLa0osU0FBUyxLQUFLLFdBQWQsSUFBNkJBLFNBQVMsS0FBSyxlQUEzQyxJQUE4REEsU0FBUyxLQUFLLE9BQWpGLENBQWIsRUFBd0c7QUFDcEcsWUFBSUUsU0FBUyxHQUFHLElBQWhCO0FBQ0EsWUFBSUMsT0FBSjs7QUFDQSxZQUFLckosU0FBUyxDQUFDc0osUUFBVixJQUFzQnRKLFNBQVMsQ0FBQ3NKLFFBQVYsQ0FBbUJDLE9BQW5CLENBQTJCLEdBQTNCLE1BQW9DLENBQUMsQ0FBNUQsSUFBbUV2SixTQUFTLENBQUN3SixNQUFWLElBQW9CeEosU0FBUyxDQUFDd0osTUFBVixDQUFpQkQsT0FBakIsQ0FBeUIsR0FBekIsTUFBa0MsQ0FBQyxDQUE5SCxFQUFrSTtBQUM5SCxjQUFJTCxTQUFTLEtBQUssV0FBZCxJQUE2QkEsU0FBUyxLQUFLLE9BQS9DLEVBQXdEO0FBQ3BERyxtQkFBTyxHQUFHckosU0FBUyxDQUFDc0osUUFBcEI7QUFDSCxXQUZELE1BR0s7QUFDREQsbUJBQU8sR0FBR3JKLFNBQVMsQ0FBQ3dKLE1BQXBCO0FBQ0g7O0FBQ0RKLG1CQUFTLGdCQUFHO0FBQUssZUFBRyxFQUFFQyxPQUFWO0FBQW1CLGlCQUFLLEVBQUU7QUFBQzdELG9CQUFNLEVBQUUsRUFBVDtBQUFhMEMsbUJBQUssRUFBRTtBQUFwQjtBQUExQixZQUFaO0FBQ0gsU0FSRCxNQVFPLElBQUllLE1BQUosRUFBWTtBQUNmLGNBQUlRLFVBQVUsR0FBR1IsTUFBTSxDQUFDUyxRQUFQLElBQW1CLE9BQU9ULE1BQU0sQ0FBQ1MsUUFBZCxLQUEyQixVQUE5QyxJQUE0RFQsTUFBTSxDQUFDUyxRQUFQLEVBQTVELEdBQWdGVCxNQUFNLENBQUNTLFFBQVAsRUFBaEYsR0FBbUcsSUFBcEg7O0FBQ0EsY0FBSUQsVUFBVSxJQUFJQSxVQUFVLENBQUNFLE1BQVgsRUFBbEIsRUFBdUM7QUFDbkNQLHFCQUFTLGdCQUFHO0FBQUssaUJBQUcsRUFBRUssVUFBVSxDQUFDRSxNQUFYLEVBQVY7QUFBK0IsbUJBQUssRUFBRTtBQUFDbkUsc0JBQU0sRUFBRSxFQUFUO0FBQWEwQyxxQkFBSyxFQUFFO0FBQXBCO0FBQXRDLGNBQVo7QUFDSCxXQUZELE1BR0s7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxZQUFJLEtBQUtyTCxLQUFMLENBQVcrTSxVQUFYLElBQXlCLEtBQUsvTSxLQUFMLENBQVdnTixPQUF4QyxFQUFpRDtBQUM3Q2YsMkJBQWlCLGdCQUFHO0FBQU0scUJBQVMsRUFBRWdCLDhCQUFhQyxrQkFBOUI7QUFBa0QsaUJBQUssRUFBRSxLQUFLbE4sS0FBTCxDQUFXZ04sT0FBcEU7QUFBNkUscUJBQVMsRUFBRSxtQkFBQzlMLEtBQUQ7QUFBQSxxQkFBVSxLQUFJLENBQUNsQixLQUFMLENBQVcrTSxVQUFYLENBQXNCN0wsS0FBdEIsQ0FBVjtBQUFBO0FBQXhGLGFBQWlJcUwsU0FBakksQ0FBcEI7QUFDSCxTQUZELE1BR0s7QUFDRE4sMkJBQWlCLGdCQUFHO0FBQU0scUJBQVMsRUFBRWdCLDhCQUFhQztBQUE5QixhQUFtRFgsU0FBbkQsQ0FBcEI7QUFDSDtBQUNKLE9BMUJELE1BMEJPO0FBQ0gsWUFBSVksUUFBSjs7QUFDQSxnQkFBUWQsU0FBUjtBQUFxQjtBQUNqQixlQUFLLE9BQUw7QUFDSWMsb0JBQVEsR0FBR0YsOEJBQWFHLHdCQUF4QjtBQUNBOztBQUNKLGVBQUssUUFBTDtBQUNJRCxvQkFBUSxHQUFHRiw4QkFBYUkseUJBQXhCO0FBQ0E7O0FBQ0osZUFBSyxNQUFMO0FBQ0lGLG9CQUFRLEdBQUdGLDhCQUFhSyx1QkFBeEI7QUFDQTs7QUFDSixlQUFLLEdBQUw7QUFDSUgsb0JBQVEsR0FBR0YsOEJBQWFNLG9CQUF4QjtBQUNBOztBQUNKLGVBQUssT0FBTDtBQUNJSixvQkFBUSxHQUFHRiw4QkFBYU8sd0JBQXhCO0FBQ0E7O0FBQ0osZUFBSyxVQUFMO0FBQ0lMLG9CQUFRLEdBQUdGLDhCQUFhUSwyQkFBeEI7QUFDQTs7QUFDSjtBQUNJTixvQkFBUSxHQUFFRiw4QkFBYUMsa0JBQXZCO0FBQ0E7QUFyQlI7O0FBdUJBLFlBQUlRLEtBQUosRUFBV0MsV0FBWDs7QUFDQSxZQUFJdkIsTUFBTSxJQUFJQSxNQUFNLENBQUN3QixPQUFQLEVBQVYsSUFBOEJ4QixNQUFNLENBQUN5QixTQUFQLEVBQWxDLEVBQXNEO0FBQ2xESCxlQUFLLEdBQUd0QixNQUFNLENBQUN3QixPQUFQLEdBQWlCRSxRQUFqQixFQUFSO0FBQ0FILHFCQUFXLEdBQUd2QixNQUFNLENBQUN5QixTQUFQLEdBQW1CQyxRQUFuQixFQUFkO0FBQ0gsU0FIRCxNQUlLLElBQUkzSyxTQUFTLElBQUlBLFNBQVMsQ0FBQzRLLFNBQXZCLElBQW9DNUssU0FBUyxDQUFDNkssV0FBbEQsRUFBK0Q7QUFDaEVOLGVBQUssR0FBR08sb0JBQU1DLHdCQUFOLENBQStCL0ssU0FBUyxDQUFDNEssU0FBVixDQUFvQixDQUFwQixDQUEvQixFQUF1RDVLLFNBQVMsQ0FBQzRLLFNBQVYsQ0FBb0IsQ0FBcEIsQ0FBdkQsQ0FBUjtBQUNBSixxQkFBVyxHQUFHTSxvQkFBTUMsd0JBQU4sQ0FBK0IvSyxTQUFTLENBQUM2SyxXQUFWLENBQXNCLENBQXRCLENBQS9CLEVBQXlEN0ssU0FBUyxDQUFDNkssV0FBVixDQUFzQixDQUF0QixDQUF6RCxDQUFkO0FBQ0g7O0FBQ0QsWUFBSUcsYUFBYSxHQUFHO0FBQ2hCLHlCQUFnQlQsS0FEQTtBQUVoQiwrQkFBc0JDO0FBRk4sU0FBcEI7O0FBSUEsWUFBSSxLQUFLM04sS0FBTCxDQUFXK00sVUFBWCxJQUF5QixLQUFLL00sS0FBTCxDQUFXZ04sT0FBeEMsRUFBaUQ7QUFDN0NmLDJCQUFpQixnQkFBRztBQUFNLHFCQUFTLEVBQUVrQixRQUFqQjtBQUEyQixpQkFBSyxFQUFFZ0IsYUFBbEM7QUFBaUQsaUJBQUssRUFBRSxLQUFLbk8sS0FBTCxDQUFXZ04sT0FBbkU7QUFBNEUscUJBQVMsRUFBRSxtQkFBQzlMLEtBQUQ7QUFBQSxxQkFBVSxLQUFJLENBQUNsQixLQUFMLENBQVcrTSxVQUFYLENBQXNCN0wsS0FBdEIsQ0FBVjtBQUFBO0FBQXZGLFlBQXBCO0FBQ0gsU0FGRCxNQUdLO0FBQ0QrSywyQkFBaUIsZ0JBQUc7QUFBTSxxQkFBUyxFQUFFa0IsUUFBakI7QUFBMkIsaUJBQUssRUFBRWdCO0FBQWxDLFlBQXBCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPbEMsaUJBQVA7QUFDSDs7O0VBdEZrQ3JELGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjEsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5leHBvcnQgdmFyIHByb2plY3RFZGl0b3JMYW5nID0ge1xuICBMQU5HOiAnZGUnLFxuXG4gIE1FVEFEQVRBX0VESVQ6IFwiTWV0YWRhdGVuIGJlYXJiZWl0ZW5cIixcbiAgRFVQTElDQVRFX0VMRU1FTlQ6IFwiRWxlbWVudCBkdXBsaXppZXJlblwiLFxuICBESVNQTEFDRV9FTEVNRU5UOiBcIkVsZW1lbnQgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIERVUExJQ0FURV9BTkRfREVMRVRFOiBcIkVsZW1lbnQgZHVwbGl6aWVyZW4gJiBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQ0hPT1NFX1BST0pFQ1Q6IFwiV8OkaGxlIGVpbiBQcm9qZWt0IC4uLlwiLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEVfSEVBRExJTkU6IFwiRWxlbWVudCBsw7ZzY2hlblwiLFxuICBFRElUT1JfRkVBVFVSRV9ERUxFVEVfUVVFU1RJT046IFwiV29sbGVuIFNpZSBkYXMgRWxlbWVudCB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgUk9UQVRFX0VMRU1FTlQ6IFwiRWxlbWVudCByb3RpZXJlblwiLFxuICBERVNFTEVDVF9FTEVNRU5UOiBcIkVsZW1lbnQtQXVzd2FobCBhdWZoZWJlblwiLFxuICBSRVZFUlRfRUxFTUVOVDogXCJMZXR6dGUgVmVyc2lvbiB3aWVkZXJoZXJzdGVsbGVuXCIsXG4gIENPTkZJUk1fREVMRVRFX0FMTDogXCJXb2xsZW4gU2llIGRpZSBhdXNnZXfDpGhsdGVuIEVsZW1lbnRlIHdpcmtsaWNoIGzDtnNjaGVuP1wiLFxuICBCVVRUT05fREVTRUxFQ1RfQUxMOiBcIkF1c3dhaGwgZsO8ciBhbGxlIGF1ZmhlYmVuXCIsXG4gIEJVVFRPTl9ERUxFVEVfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBsw7ZzY2hlblwiLFxuICBCVVRUT05fRElTUExBQ0VfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBpbiBhbmRlcmVzIFByb2pla3QgdmVyc2NoaWViZW5cIixcbiAgQlVUVE9OX0NPTkZJUk06IFwiQmVzdMOkdGlnZW5cIixcbiAgQlVUVE9OX0NBTkNFTDogXCJBYmJyZWNoZW5cIixcbiAgQlVUVE9OX0NPUFlfRElTUExBQ0VfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBrb3BpZXJlbiB1bmQgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9UUkFOU0xBVEVfQUxMOiBcIkF1c2dld8OkaGx0ZSBFbGVtZW50ZSBhdWYgZGVyIEthcnRlIHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9BUFBMWV9UUkFOU0xBVEU6IFwiw4RuZGVydW5nZW4gw7xiZXJuZWhtZW5cIixcblxuICBFRElUT1I6ICdFZGl0b3InLFxuICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRWxlbWVudCBsw7ZzY2hlbicsXG4gIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ0VsZW1lbnQgZWRpdGllcmVuJyxcbiAgRURJVE9SX1NFTEVDVF9JTkZPOiAnWnVyIEF1c3dhaGwgZWluIEVsZW1lbnQgYXVmIGRlciBLYXJ0ZSBhbmtsaWNrZW4uJyxcbiAgRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUw6ICdbU3RyZ10gKyBbS2xpY2tdIGbDvHIgTWVocmZhY2hhdXN3YWhsIDxicj5bU2hpZnRdIGhhbHRlbiBmw7xyIEF1c3dhaGxib3gnLFxuICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdLYXJ0ZW5lbGVtZW50ZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kd2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW53ZXJremV1Z2UnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnS3JlaXN3ZXJremV1Z2UnLFxuICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuXG4gIEVESVRPUl9BUElfRVJST1JfVElUTEU6ICdFcyBpc3QgZWluIEZlaGxlciBhdWZnZXRyZXRlbicsXG5cbiAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWVuXCI7XG5pbXBvcnQge3Byb2plY3RFZGl0b3JMYW5nfSBmcm9tIFwiLi9jNGctZWRpdG9yLWkxOG4tZGVcIjtcbmxldCBtYXBzTGFuZyA9IHt9O1xuXG5pZiAodHlwZW9mIG1hcERhdGEgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaWYgKG1hcERhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9IGVsc2UgaWYgKG1hcERhdGEubGFuZyA9PT0gXCJlblwiKSB7XG4gICAgbWFwc0xhbmcgPSBsYW5nQ29uc3RhbnRzRW5nbGlzaDtcbiAgfSBlbHNlIHtcbiAgICAvLyBmYWxsYmFja1xuICAgIG1hcHNMYW5nID0gbGFuZ0NvbnN0YW50c0dlcm1hbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWRpdG9yTGFuZ3VhZ2UobWFwRGF0YSkge1xuICBpZiAobWFwRGF0YS5sYW5nID09PSBcImRlXCIpIHtcbiAgICByZXR1cm4gcHJvamVjdEVkaXRvckxhbmc7XG4gIH0gZWxzZSBpZiAobWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gcHJvamVjdEVkaXRvckxhbmc7XG4gIH0gZWxzZSB7XG4gICAgLy8gZmFsbGJhY2tcbiAgICByZXR1cm4gcHJvamVjdEVkaXRvckxhbmc7XG4gIH1cbn1cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50cyA9IGpRdWVyeS5leHRlbmQobWFwc0xhbmcsIHByb2plY3RFZGl0b3JMYW5nKTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RWRpdG9yVmlld30gZnJvbSBcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiO1xuaW1wb3J0IHtnZXRFZGl0b3JMYW5ndWFnZX0gZnJvbSBcIi4vLi4vYzRnLWVkaXRvci1pMThuXCI7XG5pbXBvcnQge1RpdGxlYmFyfSBmcm9tIFwiLi9jNGctdGl0bGViYXIuanN4XCJcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge0dlb0pTT059IGZyb20gXCJvbC9mb3JtYXRcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge0ZpbGwsIFN0eWxlLCBUZXh0fSBmcm9tIFwib2wvc3R5bGVcIjtcblxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvdW50RWRpdG9ySWQgPSB0aGlzLmNvdW50RWRpdG9ySWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRGZWF0dXJlID0gdGhpcy5hZGRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRmVhdHVyZSA9IHRoaXMucmVtb3ZlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZGlmeUZlYXR1cmUgPSB0aGlzLm1vZGlmeUZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VKU09OID0gdGhpcy5jaGFuZ2VKU09OLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IFwiRWRpdG9yXCI7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjNGctZWRpdG9yLWNvbnRyb2wgb2wtdW5zZWxlY3RhYmxlIG9sLWNvbnRyb2wgYzRnLWNsb3NlXCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICAgICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICAgICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgICAgICB0aGlzLmFyckxvY3N0eWxlcyA9IFtdO1xuICAgICAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG5cbiAgICAgICAgaWYgKHByb3BzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25maWcocHJvcHMuY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29uZmlndXJhdGlvbihtYXBDb250cm9sbGVyLmRhdGEuZmVFZGl0b3JQcm9maWxlIHx8IG1hcENvbnRyb2xsZXIuZGF0YS5iZUVkaXRvclByb2ZpbGUsICEhbWFwQ29udHJvbGxlci5kYXRhLmZlRWRpdG9yUHJvZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRFZGl0b3JMYW5ndWFnZShtYXBDb250cm9sbGVyLmRhdGEpO1xuICAgICAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgICAgICBjb250cm9sLmlzT3BlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmVkaXRvcikge1xuICAgICAgICAgICAgbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZWRpdG9yID0gY29udHJvbDtcbiAgICAgICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcIlBvaW50XCIsIFwiTGluZVN0cmluZ1wiLCBcIlBvbHlnb25cIiwgXCJDaXJjbGVcIl07XG4gICAgICAgIGxldCBmZWF0dXJlcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCkgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICBmZWF0dXJlcyA9ICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZVJlbmRlcigpO1xuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmVhdHVyZXMgPSAne1widHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsIFwiZmVhdHVyZXNcIjogW119J1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICBzdHlsZURhdGE6IHt9LFxuICAgICAgICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgICAgICAgIHJhbmdlOiAwLFxuICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgICAgICAgZWRpdG9ySWQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24oZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCByZXR1cm5TdHlsZSA9IFtdO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXQgJiYgZmVhdHVyZS5nZXQoJ2ZlYXR1cmVzJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICAgICAgICAgICBzaXplID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmZWF0dXJlICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCAmJiBmZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgIGxldCBsb2NzdHlsZSA9IGZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlcyAmJiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5TdHlsZSA9IHN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblN0eWxlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBuZXcgQ29sbGVjdGlvbigpO1xuICAgICAgICB0aGlzLmVkaXRvckxheWVyID0gbmV3IFZlY3Rvcih7XG4gICAgICAgICAgICBzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2Uoe2Zvcm1hdDogbmV3IEdlb0pTT04oKX0pLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVGdW5jdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIikuYWRkQ2xhc3MoXCJjNGctb3BlblwiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb3VudEVkaXRvcklkICgpIHtcbiAgICAgICAgbGV0IG5ld0NvdW50ID0gdGhpcy5zdGF0ZS5lZGl0b3JJZCArIDE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWRpdG9ySWQ6IG5ld0NvdW50XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGdldENvbmZpZ3VyYXRpb24gKGlkLCBmcm9udGVuZCA9IHRydWUpIHtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYgKGZyb250ZW5kKSB7XG4gICAgICAgICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZS9cIiArIGlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gXCJjb240Z2lzL2VkaXRvclNlcnZpY2VCYWNrZW5kL1wiICsgaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwpLnRoZW4oXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmlnKGpzb24pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVDb25maWcgKGpzb24pIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBqc29uLmRyYXdTdHlsZXMpIHtcbiAgICAgICAgICAgIGlmIChqc29uLmRyYXdTdHlsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1tpXSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBkcmF3U3R5bGUgPSBqc29uLmRyYXdTdHlsZXNbaV07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBkcmF3U3R5bGUuY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJhd1N0eWxlLmNhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGRyYXdTdHlsZS5jYXRlZ29yaWVzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayBpbiBjYXRlZ29yeS5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5lbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGNhdGVnb3J5LmVsZW1lbnRzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1tpXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tMb2NzdHlsZSA9IHRoaXMuYXJyTG9jc3R5bGVzLmZpbmRJbmRleCgobG9jc3R5bGUpID0+IGxvY3N0eWxlID09PSBlbGVtZW50LnN0eWxlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tMb2NzdHlsZSA9PT0gLTEgJiYgZWxlbWVudC5zdHlsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckxvY3N0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKHRoaXMuYXJyTG9jc3R5bGVzLCB7XG4gICAgICAgICAgICBcImRvbmVcIjogKHN0eWxlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZURhdGE6IHN0eWxlRGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlUmVuZGVyKCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rSW5wdXQoKTtcbiAgICAgICAgICAgICAgICBsZXQgZ2VvanNvbiA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVzID0gbmV3IEdlb0pTT04oe1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIlxuICAgICAgICAgICAgICAgIH0pLnJlYWRGZWF0dXJlcyhnZW9qc29uKTtcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gdGhpcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UuZm9yRWFjaEZlYXR1cmUoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uRmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb25GZWF0dXJlLmdldCgncmFkaXVzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uRmVhdHVyZS5zZXRHZW9tZXRyeShuZXcgQ2lyY2xlKGpzb25GZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwganNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLmFkZEZlYXR1cmUoanNvbkZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmFuZ2UpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBsZXQgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgICAgICAgIGxldCBzdGFydENvbnRhaW5lciA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLmNoaWxkTm9kZXNbMF0gfHwgcmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgICAgICAgICByYW5nZS5zZXRTdGFydChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICAgICAgICByYW5nZS5zZXRFbmQoc3RhcnRDb250YWluZXIsIHRoaXMuc3RhdGUucmFuZ2UpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlSlNPTihldmVudCkge1xuICAgICAgICBsZXQgcmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKS5zdGFydE9mZnNldDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZXM6IGV2ZW50LnRhcmdldC5pbm5lclRleHQsIHJhbmdlOiByYW5nZX0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVSZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkRmVhdHVyZSAoZmVhdHVyZSkge1xuICAgICAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuXG4gICAgICAgIGFyckZlYXR1cmVzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KGFyckZlYXR1cmVzLCBudWxsLCAyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlua0lucHV0KCk7XG4gICAgfVxuICAgIHJlbW92ZUZlYXR1cmUgKGdlb2pzb24pIHtcbiAgICAgICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgICAgICBsZXQgYXJyRmVhdHVyZXMgPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICBsZXQgZmVhdHVyZUlkID0gYXJyRmVhdHVyZXMuZmVhdHVyZXMuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5wcm9wZXJ0aWVzLmVkaXRvcklkID09PSBlZGl0b3JJZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGFyckZlYXR1cmVzLmZlYXR1cmVzLnNwbGljZShmZWF0dXJlSWQsIDEpO1xuICAgICAgICBsZXQgZmVhdHVyZXMgPSBKU09OLnN0cmluZ2lmeShhcnJGZWF0dXJlcywgbnVsbCwgMik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpbmtJbnB1dCgpO1xuICAgIH1cbiAgICBtb2RpZnlGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgICAgIGxldCBlZGl0b3JJZCA9IGdlb2pzb24ucHJvcGVydGllcy5lZGl0b3JJZDtcbiAgICAgICAgbGV0IG9iakdlb2pzb24gPSBKU09OLnBhcnNlKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICBsZXQgYXJyRmVhdHVyZXMgPSBvYmpHZW9qc29uLmZlYXR1cmVzO1xuICAgICAgICBsZXQgZmVhdHVyZUlkID0gYXJyRmVhdHVyZXMuZmluZEluZGV4KChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5wcm9wZXJ0aWVzLmVkaXRvcklkID09PSBlZGl0b3JJZDtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iakdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUlkXSA9IGdlb2pzb247XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IEpTT04uc3RyaW5naWZ5KG9iakdlb2pzb24sIG51bGwsIDIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saW5rSW5wdXQoKTtcbiAgICB9XG4gICAgbGlua0lucHV0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiB0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpOyAvL2xpbmsgdG8gaW5wdXRGaWVsZFxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5pbnB1dEZpZWxkICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlcyA8IDUwKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXdyYXBwZXJcIn0+XG4gICAgICAgICAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctZWRpdG9yLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1lZGl0b3ItY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLkVESVRPUn0gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgICAgICAgICA8L1RpdGxlYmFyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMubW9kZXMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gXCJzZWxlY3RcIiB8fCAoc2NvcGUuY29uZmlnW2VsZW1lbnRdICYmIHNjb3BlLmNvbmZpZ1tlbGVtZW50XS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLVwiICsgZWxlbWVudCArIFwiICBcIiArIChlbGVtZW50ID09PSBzY29wZS5zdGF0ZS5jdXJyZW50TW9kZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IGVsZW1lbnR9KX0vPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RWRpdG9yVmlldyBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci12aWV3XCJ9IHN0eWxlRnVuY3Rpb249e3RoaXMuc3R5bGVGdW5jdGlvbn0gbW9kZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZX0gc3R5bGVEYXRhPXt0aGlzLnN0YXRlLnN0eWxlRGF0YX0gZWxlbWVudHM9e3RoaXMuY29uZmlnW3RoaXMuc3RhdGUuY3VycmVudE1vZGVdID8gdGhpcy5jb25maWdbdGhpcy5zdGF0ZS5jdXJyZW50TW9kZV06IFtdfSBhY3RpdmU9e3RydWV9IGVkaXRvckxheWVyPXt0aGlzLnN0YXRlLmVkaXRvckxheWVyfSBmZWF0dXJlcz17dGhpcy5mZWF0dXJlc30gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVGZWF0dXJlfSBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeUZlYXR1cmV9IGFkZEZlYXR1cmU9e3RoaXMuYWRkRmVhdHVyZX0gZWRpdG9yTGF5ZXI9e3RoaXMuZWRpdG9yTGF5ZXJ9IGVkaXRvcklkPXt0aGlzLnN0YXRlLmVkaXRvcklkfSBjb3VudEVkaXRvcklkPXt0aGlzLmNvdW50RWRpdG9ySWR9IHVwZGF0ZUZlYXR1cmVzPXt0aGlzLnVwZGF0ZUZlYXR1cmVzfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGVkaXRvcj17dGhpc30gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1jb250ZW50XCJ9IHN0eWxlPXt7b3ZlcmZsb3c6IFwibm9uZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxwcmUgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzdHlsZT17e292ZXJmbG93WTogXCJzY3JvbGxcIiwgb3ZlcmZsb3dYOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjQwMHB4XCJ9fSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9IG9uSW5wdXQ9e3RoaXMuY2hhbmdlSlNPTn0+e3RoaXMuc3RhdGUuZmVhdHVyZXN9PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtHZW9KU09OfSBmcm9tIFwib2wvZm9ybWF0XCI7XG5pbXBvcnQge0NvbGxlY3Rpb259IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtQb2ludCwgTGluZVN0cmluZywgUG9seWdvbiwgQ2lyY2xlfSBmcm9tICdvbC9nZW9tJ1xuaW1wb3J0IHtEcmF3LCBTZWxlY3QsIE1vZGlmeX0gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gXCJvbFwiO1xuaW1wb3J0IHtDNGdTdGFyYm9hcmRTdHlsZX0gZnJvbSBcIi4vYzRnLXN0YXJib2FyZC1zdHlsZS5qc3hcIjtcbmltcG9ydCB7QzRnUG9wdXBDb250cm9sbGVyfSBmcm9tIFwiLi8uLi9jNGctcG9wdXAtY29udHJvbGxlclwiO1xuXG5cbmV4cG9ydCBjbGFzcyBFZGl0b3JWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZyZWVoYW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBcIltdXCIsXG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50OiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLmlkIDogMCxcbiAgICAgICAgICAgIGFjdGl2ZVN0eWxlOiBwcm9wcy5lbGVtZW50c1swXSA/IHByb3BzLmVsZW1lbnRzWzBdLnN0eWxlSWQgOiAwLFxuICAgICAgICAgICAgc2VsZWN0TW9kZTogXCJtb2RpZnlcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uO1xuICAgICAgICB0aGlzLmNoYW5nZUpTT04gPSB0aGlzLmNoYW5nZUpTT04uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiICYmIHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbikgeyAvL29ubHkgb25lIGRyYXdpbnRlcmFjdGlvbiBhdCBhIHRpbWVcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmludGVyYWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZ2VvbWV0cnk7XG4gICAgICAgICAgICBzd2l0Y2godGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IFBvaW50KDAsMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkgPSBuZXcgTGluZVN0cmluZyhbWzAsMF0sIFsxLDFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJQb2x5Z29uXCI6XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IFBvbHlnb24oW1swLDBdLCBbMSwxXV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZmVhdHVyZSA9IG5ldyBGZWF0dXJlKGdlb21ldHJ5KTtcbiAgICAgICAgICAgIGZlYXR1cmUuc2V0KCdsb2NzdHlsZScsIHRoaXMuc3RhdGUuYWN0aXZlU3R5bGUpXG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uID0gbmV3IERyYXcoe1xuICAgICAgICAgICAgICAgIC8vIGZlYXR1cmVzOiB0aGlzLnByb3BzLmZlYXR1cmVzLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLm1vZGUsXG4gICAgICAgICAgICAgICAgc3RvcGNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbmFwVG9sZXJhbmNlOiAwLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlRnVuY3Rpb24oZmVhdHVyZSksXG4gICAgICAgICAgICAgICAgZnJlZWhhbmQ6IHRoaXMuc3RhdGUuZnJlZWhhbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsXG4gICAgICAgICAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmZlYXR1cmUuc2V0KCdlZGl0b3JJZCcsIHRoaXMucHJvcHMuZWRpdG9ySWQpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5mZWF0dXJlLnNldCgnbG9jc3R5bGUnLCB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZmVhdHVyZS5zZXQoJ2VsZW1lbnRJZCcsIHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9qc29uO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcIkNpcmNsZVwiKSB7IC8vdHVybiBDaXJjbGUgaW50byB2YWxpZCBHZW9KU09OXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBldmVudC5mZWF0dXJlLmdldEdlb21ldHJ5KCkuY2xvbmUoKS50cmFuc2Zvcm0oXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFkaXVzID0gZXZlbnQuZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFJhZGl1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvanNvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9ySWQ6IHRoaXMucHJvcHMuZWRpdG9ySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJZDogdGhpcy5zdGF0ZS5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NzdHlsZTogdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiByYWRpdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9qc29uID0gbmV3IEdlb0pTT04oKS53cml0ZUZlYXR1cmVPYmplY3QoZXZlbnQuZmVhdHVyZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZEZlYXR1cmUoZ2VvanNvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3VudEVkaXRvcklkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbikgeyAvL29ubHkgb25lIGRyYXdpbnRlcmFjdGlvbiBhdCBhIHRpbWVcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmludGVyYWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKHRoaXMuaW50ZXJhY3Rpb25bMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RNb2RlID09PSBcInJlbW92ZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbiA9IG5ldyBTZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBsYXllcnM6IFt0aGlzLnByb3BzLmVkaXRvckxheWVyXSxcbiAgICAgICAgICAgICAgICAgICAgaGl0VG9sZXJhbmNlOiAyMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb24ub24oJ3NlbGVjdCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlID0gZS50YXJnZXQuZ2V0RmVhdHVyZXMoKS5nZXRBcnJheSgpWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGZlYXR1cmUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVGZWF0dXJlKGdlb2pzb24pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gdGhpcy5wcm9wcy5lZGl0b3JMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb24gPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uLnB1c2gobmV3IFNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyczogW3RoaXMucHJvcHMuZWRpdG9yTGF5ZXJdLFxuICAgICAgICAgICAgICAgICAgICBoaXRUb2xlcmFuY2U6IDIwXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb24ucHVzaChuZXcgTW9kaWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IHRoaXMuaW50ZXJhY3Rpb25bMF0uZ2V0RmVhdHVyZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxUb2xlcmFuY2U6IDIwXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25bMV0ub24oJ21vZGlmeWVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlID0gZS5mZWF0dXJlcy5nZXRBcnJheSgpWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvanNvbiA9IG5ldyBHZW9KU09OKCkud3JpdGVGZWF0dXJlT2JqZWN0KGZlYXR1cmUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiBcIkVQU0c6NDMyNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IFwiRVBTRzozODU3XCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGdlb2pzb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnRlcmFjdGlvblswXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbih0aGlzLmludGVyYWN0aW9uWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudHMgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5lbGVtZW50cyAmJiB0aGlzLnByb3BzLmVsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5wcm9wcy5lbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxidXR0b24ga2V5PXtlbGVtZW50LmlkfSBzdHlsZT17e2hlaWdodDogXCIzMnB4XCIsIHdpZHRoOiBcIjMycHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT57dGhpcy5zZXRTdGF0ZSh7YWN0aXZlRWxlbWVudDogZWxlbWVudC5pZCwgYWN0aXZlU3R5bGU6IGVsZW1lbnQuc3R5bGVJZH0pfX0+XG4gICAgICAgICAgICAgICAgICAgIDxDNGdTdGFyYm9hcmRTdHlsZSBzdHlsZURhdGE9e3RoaXMucHJvcHMuc3R5bGVEYXRhfSBzdHlsZUlkPXtlbGVtZW50LnN0eWxlSWR9Lz48L2J1dHRvbj4pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VzdG9tQnV0dG9uID0gbnVsbDtcbiAgICAgICAgaWYgKFwiTGluZVN0cmluZ1BvbHlnb25cIi5pbmNsdWRlcyh0aGlzLnByb3BzLm1vZGUpKSB7XG4gICAgICAgICAgICBsZXQgZnJlZWhhbmRDbGFzcyA9IFwiYzRnLWVkaXRvci12aWV3IFwiO1xuICAgICAgICAgICAgZnJlZWhhbmRDbGFzcyArPSB0aGlzLnN0YXRlLmZyZWVoYW5kID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiO1xuICAgICAgICAgICAgY3VzdG9tQnV0dG9uID0gKDxhIGNsYXNzTmFtZT17ZnJlZWhhbmRDbGFzc30gb25Nb3VzZVVwPXsoKSA9PiB7dGhpcy5jaGFuZ2VGcmVlaGFuZCgpfX0+RnJlZWhhbmQ8L2E+KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgIGN1c3RvbUJ1dHRvbiA9ICg8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLW1vZGUtc3dpdGNoZXJcIn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17XCJNb2RpZnlcIn0gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnkgXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RNb2RlID09PSBcIm1vZGlmeVwiID8gXCJjNGctYWN0aXZlXCI6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLmNoYW5nZVNlbGVjdE1vZGUoXCJtb2RpZnlcIil9fS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0aXRsZT17XCJSZW1vdmVcIn0gY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUgXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RNb2RlID09PSBcInJlbW92ZVwiID8gXCJjNGctYWN0aXZlXCI6IFwiYzRnLWluYWN0aXZlXCIpfSBvbk1vdXNlVXA9eygpID0+IHt0aGlzLmNoYW5nZVNlbGVjdE1vZGUoXCJyZW1vdmVcIil9fS8+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2N1c3RvbUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLWVsZW1lbnQtc2VsZWN0aW9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZWxlbWVudHNbMF0gJiYgcHJldlByb3BzLm1vZGUgIT09IHRoaXMucHJvcHMubW9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50OiB0aGlzLnByb3BzLmVsZW1lbnRzWzBdLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdHlsZTogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gIHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uaWRcbiAgICAgICAgICAgICAgICAvLyAgdGhpcy5zdGF0ZS5hY3RpdmVTdHlsZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMucHJvcHMuZWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudDogdGhpcy5wcm9wcy5lbGVtZW50c1swXS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3R5bGU6IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uc3R5bGVJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdGUuYWN0aXZlRWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudHNbMF0uaWRcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXRlLmFjdGl2ZVN0eWxlID0gdGhpcy5wcm9wcy5lbGVtZW50c1swXS5zdHlsZUlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIpO1xuICAgIC8vIH1cbiAgICBjaGFuZ2VTZWxlY3RNb2RlKHN0cmluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdE1vZGU6IHN0cmluZ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlRnJlZWhhbmQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnJlZWhhbmQ6ICF0aGlzLnN0YXRlLmZyZWVoYW5kXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNoYW5nZUpTT04oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi9jNGctbWFwcy1jb25zdGFudC5qc1wiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEM0Z1N0YXJib2FyZFN0eWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbCBmb3IgaW50ZXJhY3Rpb24tdHJpZ2dlclxuICAgICAgICBsZXQgc3R5bGVUcmlnZ2VyTGFiZWwgPSBudWxsO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlRGF0YS5hcnJMb2NTdHlsZXNbdGhpcy5wcm9wcy5zdHlsZUlkXTtcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyO1xuICAgICAgICBsZXQgc3R5bG9yID0gbG9jc3R5bGUuc3R5bGUgJiYgbG9jc3R5bGUuc3R5bGUobmV3IEZlYXR1cmUoe2dlb21ldHJ5OiBuZXcgUG9pbnQoMCwwKX0pLCBcIkVQU0c6NDMyNlwiKSA/IGxvY3N0eWxlLnN0eWxlKG5ldyBGZWF0dXJlKHtnZW9tZXRyeTogbmV3IFBvaW50KDAsMCl9KSwgXCJFUFNHOjQzMjZcIik6IG51bGw7XG4gICAgICAgIGxldCBzdHlsMHIgPSBBcnJheS5pc0FycmF5KHN0eWxvcikgPyBzdHlsb3JbMF06IHN0eWxvcjtcbiAgICAgICAgbGV0IHN0eWxlVHlwZSA9IHN0eWxlRGF0YSA/IHN0eWxlRGF0YS5zdHlsZXR5cGUgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgaWYgKHN0eWxlRGF0YSAmJiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgfHwgc3R5bGVUeXBlID09PSBcInBob3RvXCIpKSB7XG4gICAgICAgICAgICBsZXQgc3R5bGVJY29uID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpY29uU3JjO1xuICAgICAgICAgICAgaWYgKChzdHlsZURhdGEuaWNvbl9zcmMgJiYgc3R5bGVEYXRhLmljb25fc3JjLmluZGV4T2YoJy4nKSAhPT0gLTEpIHx8IChzdHlsZURhdGEuc3ZnU3JjICYmIHN0eWxlRGF0YS5zdmdTcmMuaW5kZXhPZignLicpICE9PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVUeXBlID09PSBcImN1c3RfaWNvblwiIHx8IHN0eWxlVHlwZSA9PT0gXCJwaG90b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcmMgPSBzdHlsZURhdGEuaWNvbl9zcmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpY29uU3JjID0gc3R5bGVEYXRhLnN2Z1NyYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e2ljb25TcmN9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0gLz47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0eWwwcikge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZUltYWdlID0gc3R5bDByLmdldEltYWdlICYmIHR5cGVvZiBzdHlsMHIuZ2V0SW1hZ2UgPT09IFwiZnVuY3Rpb25cIiAmJiBzdHlsMHIuZ2V0SW1hZ2UoKSA/IHN0eWwwci5nZXRJbWFnZSgpOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZUltYWdlICYmIHN0eWxlSW1hZ2UuZ2V0U3JjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVJY29uID0gPGltZyBzcmM9e3N0eWxlSW1hZ2UuZ2V0U3JjKCl9IHN0eWxlPXt7aGVpZ2h0OiAyNSwgd2lkdGg6IDI1fX0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCAmJiB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRX0gdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH0gb25Nb3VzZVVwPXsoZXZlbnQpPT4gdGhpcy5wcm9wcy5jbGlja0V2ZW50KGV2ZW50KX0+e3N0eWxlSWNvbn08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEV9PntzdHlsZUljb259PC9zcGFuPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGVUeXBlKSB7IC8vICdwb2ludCcsICdzcXVhcmUnLCAnc3RhcicsICd4JywgJ2Nyb3NzJywgJ3RyaWFuZ2xlJ1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcyA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfTE9DU1RZTEVfUE9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NRVUFSRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1NUQVI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzID0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRV9YO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX0NST1NTO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidHJpYW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3MgPSBjc3NDb25zdGFudHMuU1RBUkJPQVJEX0xPQ1NUWUxFX1RSSUFOR0xFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz0gY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9MT0NTVFlMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29sb3IsIGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgaWYgKHN0eWwwciAmJiBzdHlsMHIuZ2V0RmlsbCgpICYmIHN0eWwwci5nZXRTdHJva2UoKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gc3R5bDByLmdldEZpbGwoKS5nZXRDb2xvcigpO1xuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yID0gc3R5bDByLmdldFN0cm9rZSgpLmdldENvbG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZURhdGEgJiYgc3R5bGVEYXRhLmZpbGxjb2xvciAmJiBzdHlsZURhdGEuc3Ryb2tlY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuZmlsbGNvbG9yWzBdLCBzdHlsZURhdGEuZmlsbGNvbG9yWzFdKTtcbiAgICAgICAgICAgICAgICBib3JkZXJjb2xvciA9IHV0aWxzLmdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eShzdHlsZURhdGEuc3Ryb2tlY29sb3JbMF0sIHN0eWxlRGF0YS5zdHJva2Vjb2xvclsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgIFwiLS12YXItY29sb3JcIiA6IGNvbG9yLFxuICAgICAgICAgICAgICAgIFwiLS12YXItYm9yZGVyY29sb3JcIiA6IGJvcmRlcmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xpY2tFdmVudCAmJiB0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICBzdHlsZVRyaWdnZXJMYWJlbCA9IDxzcGFuIGNsYXNzTmFtZT17Y3NzQ2xhc3N9IHN0eWxlPXtzdHlsZUVsZW1lbnRzfSB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfSBvbk1vdXNlVXA9eyhldmVudCk9PiB0aGlzLnByb3BzLmNsaWNrRXZlbnQoZXZlbnQpfS8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVUcmlnZ2VyTGFiZWwgPSA8c3BhbiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBzdHlsZT17c3R5bGVFbGVtZW50c30vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVUcmlnZ2VyTGFiZWw7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==