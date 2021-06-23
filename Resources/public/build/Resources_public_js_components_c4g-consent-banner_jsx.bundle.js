(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-consent-banner_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Language constants (en)
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.langConstantsGerman = void 0;
var langConstantsGerman = {
  LANG: 'de',
  NAME: 'Name',
  HIDE: 'Zuklappen',
  CLOSE: 'Schließen',
  POINT: 'POI',
  FREEHAND: 'Freihand',
  LINE: 'Linie',
  POLYGON: 'Fläche',
  CIRCLE: 'Kreis',
  PERIMETER: 'Umfang',
  LENGTH: 'Länge',
  SURFACEAREA: 'Flächeninhalt',
  RADIUS: 'Radius',
  REFRESH: 'Aktualisieren',
  ACCEPT: 'Akzeptieren',
  COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',
  CTRL_ZOOM_IN: 'Vergrößern',
  CTRL_ZOOM_OUT: 'Verkleinern',
  CTRL_ZOOM_EXT: 'Maximal verkleinern',
  CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
  CTRL_ZOOM_POS: 'Zum aktuellen Standort',
  CTRL_ZOOM_SLIDER: 'Zoom Slider',
  CTRL_RESET_ROTATION: 'Rotation (touch, ctrl+shift+mouse) zurücksetzen',
  CTRL_PORTSIDE: 'Portside ein-/ausblenden',
  CTRL_ROUTER: 'Router ein-/ausblenden',
  CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
  CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
  CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
  CTRL_ACCOUNT: 'Account ein-/ausblenden',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
  CTRL_START_SEARCH: 'Suche starten',
  CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
  CTRL_SIDEBOARD: 'Sideboard ein-/ausblenden',
  CTRL_STARBOARD: 'Starboard ein-/ausblenden',
  CTRL_ATTRIBUTION: 'Attribution anzeigen',
  CTRL_GRID: 'Gitter ein-/ausblenden',
  CTRL_PERMALINK: 'Permalink generieren',
  CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
  CTRL_PRINT: 'Karte exportieren',
  CTRL_BASELAYER: 'Basiskartenwechsler ein-/ausschalten',
  CTRL_INFOAREA: 'Infobereich öffnen/schließen',
  STARBOARD: 'Kartenelemente',
  STARBOARD_BASELAYER: 'Basiskarten',
  STARBOARD_LAYER: 'Ebenen',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',
  STARBOARD_ELEMENT_ZOOM: 'Auf Element zoomen',
  STARBOARD_ELEMENT_ZOOM_BEFORE: 'Zu ',
  STARBOARD_ELEMENT_ZOOM_AFTER: ' zoomen',
  LAYERSWITCHER_TOGGLE_ALL: "Alle Elemente",
  SIDEBOARD: 'Sideboard',
  RESET_FILTER: 'Filter zurücksetzen',
  GEOSEARCH: 'Suche',
  OVERVIEWMAP: 'Übersichtskarte',
  MEASURETOOLS: 'Messwerkzeuge',
  MEASURETOOLS_INFO: 'Wählen Sie einen Messtyp overviewaus und starten Sie die Messung durch das Klicken in die Karte.',
  MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',
  INFOPAGE: 'Informationen',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',
  SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',
  NONE: '' // last line

};
exports.langConstantsGerman = langConstantsGerman;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-en.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-en.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.langConstantsEnglish = void 0;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Language constants (en)
 */
var langConstantsEnglish = {
  LANG: 'en',
  NAME: 'Name',
  HIDE: 'Hide',
  CLOSE: 'Close',
  POINT: 'POI',
  FREEHAND: 'freehand',
  LINE: 'Line',
  POLYGON: 'Area',
  CIRCLE: 'Circle',
  PERIMETER: 'Perimeter',
  LENGTH: 'Length',
  SURFACEAREA: 'Surface area',
  RADIUS: 'Radius',
  REFRESH: 'Refresh',
  ACCEPT: 'Accept',
  COPY_TO_CLIPBOARD: 'Copy to clipboard',
  CTRL_ZOOM_IN: 'Zoom in',
  CTRL_ZOOM_OUT: 'Zoom out',
  CTRL_ZOOM_EXT: 'Fit to extent',
  CTRL_ZOOM_HOME: 'jump to initial position',
  CTRL_ZOOM_POS: 'jump to browser/device position',
  CTRL_ZOOM_SLIDER: 'Zoom slider',
  CTRL_RESET_ROTATION: 'Reset rotation (touch, ctrl+shift+mouse)',
  CTRL_PORTSIDE: 'Toggle portside',
  CTRL_EDITOR: 'Toggle editor',
  CTRL_MEASURETOOLS: 'Toggle measuretools',
  CTRL_INFOPAGE: 'Toggle infopage',
  CTRL_ADDITIONALPANEL: 'Toggle panel',
  CTRL_ACCOUNT: 'Toggle account',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Toggle geosearch',
  CTRL_START_SEARCH: 'start search',
  CTRL_OVERVIEWMAP: 'Toggle overviewmap',
  CTRL_SIDEBOARD: 'Toggle sideboard',
  CTRL_STARBOARD: 'Toggle starboard',
  CTRL_ATTRIBUTION: 'Show attribution',
  CTRL_GRID: 'Toggle grid',
  CTRL_PERMALINK: 'Generate Permalink',
  CTRL_FULLSCREEN: 'Toggle fullscreen-mode',
  CTRL_PRINT: 'Export map',
  CTRL_BASELAYER: 'Switch base map changer on/off',
  CTRL_INFOAREA: 'Open/close info area',
  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Measure while drawing',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freehand draw',
  EDITOR_FEATURE_APPLY: 'End modification',
  EDITOR_FEATURE_DELETE: 'Delete feature',
  EDITOR_FEATURE_MODIFY: 'Modify feature',
  EDITOR_SELECT_INFO: 'Click an element on the map to select it.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[ctrl] + [click] for multiselect <br>[shift] for boxselect',
  EDITOR_VIEW_TRIGGER_SELECT: 'Select-mode',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Add POIs',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Draw freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Add tracks',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Add areas',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Add circles',
  STARBOARD: 'Layerswitcher',
  STARBOARD_BASELAYER: 'Baselayer',
  STARBOARD_LAYER: 'Layer',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Map elements',
  STARBOARD_ELEMENT_ZOOM: 'Zoom to element',
  STARBOARD_ELEMENT_ZOOM_BEFORE: 'Zoom to element ',
  STARBOARD_ELEMENT_ZOOM_AFTER: '',
  LAYERSWITCHER_TOGGLE_ALL: "All elements",
  RESET_FILTER: 'Reset filter',
  MEASURETOOLS: 'Measuretools',
  MEASURETOOLS_INFO: 'Select a measuretype and start measuring by clicking on the map.',
  MEASURETOOLS_INFO_ADDITIONAL: '(To stop a measurement, double-click on the map.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Select-mode',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Measure tracks',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Measure areas',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Measure radius',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Measure freehand',
  GEOSEARCH: 'Search',
  OVERVIEWMAP: 'Overview map',
  INFOPAGE: 'Infopage',
  INFOPAGE_VIEW_TRIGGER: 'Show informations',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Show panel',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Show account',
  SEARCH_NOT_FOUND: 'Location not found. Sorry... :(',
  NONE: '' // last line

};
exports.langConstantsEnglish = langConstantsEnglish;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-i18n.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-maps-i18n.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLanguage = getLanguage;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "./Resources/public/js/c4g-maps-constant-i18n-en.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
function getLanguage(mapData) {
  if (mapData && mapData.lang === "de") {
    return _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData && mapData.lang === "en") {
    return _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    return _c4gMapsConstantI18nEn.langConstantsEnglish;
  }
}

/***/ }),

/***/ "./Resources/public/js/components/c4g-consent-banner.jsx":
/*!***************************************************************!*\
  !*** ./Resources/public/js/components/c4g-consent-banner.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ConsentBanner = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ConsentBanner, _Component);

  var _super = _createSuper(ConsentBanner);

  function ConsentBanner(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ConsentBanner);
    _this = _super.call(this, props);
    _this.language = (0, _c4gMapsI18n.getLanguage)(props.mapData);
    return _this;
  }

  (0, _createClass2["default"])(ConsentBanner, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var settings = this.props.mapData.cookie;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-maps-consent-overlay"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-maps-consent-info",
        dangerouslySetInnerHTML: {
          __html: settings.info
        }
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "c4g-maps-consent-button btn",
        onClick: function onClick() {
          return _this2.clickEvent(_this2);
        }
      }, " ", this.language.ACCEPT)));
    }
  }, {
    key: "clickEvent",
    value: function clickEvent(scope) {
      var settings = scope.props.mapData.cookie;
      scope.setCookie(settings.name, settings.value);
      window.initMap(this.props.mapData);
    }
  }, {
    key: "setCookie",
    value: function setCookie(name, value) {
      document.cookie = name + "=" + value + "; Session";
    }
  }]);
  return ConsentBanner;
}(_react.Component);

exports.default = ConsentBanner;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWVuLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWkxOG4uanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctY29uc2VudC1iYW5uZXIuanN4Il0sIm5hbWVzIjpbImxhbmdDb25zdGFudHNHZXJtYW4iLCJMQU5HIiwiTkFNRSIsIkhJREUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkFDQ0VQVCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiQ1RSTF9JTkZPUEFHRSIsIkNUUkxfQURESVRJT05BTFBBTkVMIiwiQ1RSTF9BQ0NPVU5UIiwiQ1RSTF9aT09NTEVWRUwiLCJDVFJMX01PVVNFQ09PUkRTIiwiQ1RSTF9HRU9TRUFSQ0giLCJDVFJMX1NUQVJUX1NFQVJDSCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJDVFJMX1NJREVCT0FSRCIsIkNUUkxfU1RBUkJPQVJEIiwiQ1RSTF9BVFRSSUJVVElPTiIsIkNUUkxfR1JJRCIsIkNUUkxfUEVSTUFMSU5LIiwiQ1RSTF9GVUxMU0NSRUVOIiwiQ1RSTF9QUklOVCIsIkNUUkxfQkFTRUxBWUVSIiwiQ1RSTF9JTkZPQVJFQSIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9CQVNFTEFZRVIiLCJTVEFSQk9BUkRfTEFZRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0VMRU1FTlRfWk9PTSIsIlNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFIiwiU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9BRlRFUiIsIkxBWUVSU1dJVENIRVJfVE9HR0xFX0FMTCIsIlNJREVCT0FSRCIsIlJFU0VUX0ZJTFRFUiIsIkdFT1NFQVJDSCIsIk9WRVJWSUVXTUFQIiwiTUVBU1VSRVRPT0xTIiwiTUVBU1VSRVRPT0xTX0lORk8iLCJNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIklORk9QQUdFIiwiQURESVRJT05BTFBBTkVMIiwiQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUiIsIkFDQ09VTlQiLCJBQ0NPVU5UX1ZJRVdfVFJJR0dFUiIsIlNFQVJDSF9OT1RfRk9VTkQiLCJOT05FIiwibGFuZ0NvbnN0YW50c0VuZ2xpc2giLCJDVFJMX0VESVRPUiIsIkVESVRPUiIsIkVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFIiwiRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXIiwiRURJVE9SX0ZFQVRVUkVfQVBQTFkiLCJFRElUT1JfRkVBVFVSRV9ERUxFVEUiLCJFRElUT1JfRkVBVFVSRV9NT0RJRlkiLCJFRElUT1JfU0VMRUNUX0lORk8iLCJFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJJTkZPUEFHRV9WSUVXX1RSSUdHRVIiLCJnZXRMYW5ndWFnZSIsIm1hcERhdGEiLCJsYW5nIiwiQ29uc2VudEJhbm5lciIsInByb3BzIiwibGFuZ3VhZ2UiLCJzZXR0aW5ncyIsImNvb2tpZSIsIl9faHRtbCIsImluZm8iLCJjbGlja0V2ZW50Iiwic2NvcGUiLCJzZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJ3aW5kb3ciLCJpbml0TWFwIiwiZG9jdW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNUckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNQckU7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDakJyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0JBQXlCLG1CQUFtQix5QkFBeUI7QUFDdkU7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNUckUscUJBQXFCLG1CQUFPLENBQUMsb0ZBQXFCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNsQnJFLGNBQWMsbUhBQW1EOztBQUVqRSw0QkFBNEIsbUJBQU8sQ0FBQyxrR0FBNEI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDYnJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxzQkFBeUIsbUJBQW1CLHlCQUF5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Ozs7V0FDRCxtQkFBV1ksSUFBWCxFQUFpQkMsS0FBakIsRUFBd0I7QUFDcEJHLGNBQVEsQ0FBQ1YsTUFBVCxHQUFrQk0sSUFBSSxHQUFHLEdBQVAsR0FBYUMsS0FBYixHQUFxQixXQUF2QztBQUNIOzs7RUF4QnNDSSxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLWNvbnNlbnQtYmFubmVyX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExhbmd1YWdlIGNvbnN0YW50cyAoZW4pXG4gKi9cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50c0dlcm1hbiA9IHtcblxuICBMQU5HOiAnZGUnLFxuXG4gIE5BTUU6ICdOYW1lJyxcbiAgSElERTogJ1p1a2xhcHBlbicsXG4gIENMT1NFOiAnU2NobGllw59lbicsXG4gIFBPSU5UOiAnUE9JJyxcbiAgRlJFRUhBTkQ6ICdGcmVpaGFuZCcsXG4gIExJTkU6ICdMaW5pZScsXG4gIFBPTFlHT046ICdGbMOkY2hlJyxcbiAgQ0lSQ0xFOiAnS3JlaXMnLFxuICBQRVJJTUVURVI6ICdVbWZhbmcnLFxuICBMRU5HVEg6ICdMw6RuZ2UnLFxuICBTVVJGQUNFQVJFQTogJ0Zsw6RjaGVuaW5oYWx0JyxcbiAgUkFESVVTOiAnUmFkaXVzJyxcbiAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICBBQ0NFUFQ6ICdBa3plcHRpZXJlbicsXG4gIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gIENUUkxfWk9PTV9JTjogJ1Zlcmdyw7bDn2VybicsXG4gIENUUkxfWk9PTV9PVVQ6ICdWZXJrbGVpbmVybicsXG4gIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgQ1RSTF9aT09NX0hPTUU6ICdadXIgdXJzcHLDvG5nbGljaGVuIFBvc2l0aW9uJyxcbiAgQ1RSTF9aT09NX1BPUzogJ1p1bSBha3R1ZWxsZW4gU3RhbmRvcnQnLFxuICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICBDVFJMX1JFU0VUX1JPVEFUSU9OOiAnUm90YXRpb24gKHRvdWNoLCBjdHJsK3NoaWZ0K21vdXNlKSB6dXLDvGNrc2V0emVuJyxcbiAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gIENUUkxfUk9VVEVSOiAnUm91dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICBDVFJMX0lORk9QQUdFOiAnSW5mb3NlaXRlIGVpbi0vYXVzYmxlbmRlbicsXG4gIENUUkxfQURESVRJT05BTFBBTkVMOiAnUGFuZWwgZWluLS9hdXNibGVuZGVuJyxcbiAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICBDVFJMX1pPT01MRVZFTDogJ1pvb20nLFxuICBDVFJMX01PVVNFQ09PUkRTOiAnTG9uL0xhdCcsXG4gIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgQ1RSTF9TVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgQ1RSTF9PVkVSVklFV01BUDogJ8OcYmVyc2ljaHRza2FydGUgZWluLS9hdXNibGVuZGVuJyxcbiAgQ1RSTF9TSURFQk9BUkQ6ICdTaWRlYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgQ1RSTF9TVEFSQk9BUkQ6ICdTdGFyYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgQ1RSTF9HUklEOiAnR2l0dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gIENUUkxfUEVSTUFMSU5LOiAnUGVybWFsaW5rIGdlbmVyaWVyZW4nLFxuICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICBDVFJMX1BSSU5UOiAnS2FydGUgZXhwb3J0aWVyZW4nLFxuICBDVFJMX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVud2VjaHNsZXIgZWluLS9hdXNzY2hhbHRlbicsXG4gIENUUkxfSU5GT0FSRUE6ICdJbmZvYmVyZWljaCDDtmZmbmVuL3NjaGxpZcOfZW4nLFxuXG4gIFNUQVJCT0FSRDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgU1RBUkJPQVJEX0xBWUVSOiAnRWJlbmVuJyxcbiAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ0Jhc2lza2FydGVuJyxcbiAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuICBTVEFSQk9BUkRfRUxFTUVOVF9aT09NOiAnQXVmIEVsZW1lbnQgem9vbWVuJyxcbiAgU1RBUkJPQVJEX0VMRU1FTlRfWk9PTV9CRUZPUkU6ICdadSAnLFxuICBTVEFSQk9BUkRfRUxFTUVOVF9aT09NX0FGVEVSOiAnIHpvb21lbicsXG5cbiAgTEFZRVJTV0lUQ0hFUl9UT0dHTEVfQUxMOiBcIkFsbGUgRWxlbWVudGVcIixcblxuICBTSURFQk9BUkQ6ICdTaWRlYm9hcmQnLFxuXG4gIFJFU0VUX0ZJTFRFUjogJ0ZpbHRlciB6dXLDvGNrc2V0emVuJyxcblxuICBHRU9TRUFSQ0g6ICdTdWNoZScsXG4gIE9WRVJWSUVXTUFQOiAnw5xiZXJzaWNodHNrYXJ0ZScsXG5cbiAgTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZScsXG4gIE1FQVNVUkVUT09MU19JTkZPOiAnV8OkaGxlbiBTaWUgZWluZW4gTWVzc3R5cCBvdmVydmlld2F1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gaW4gZGllIEthcnRlLicsXG4gIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2VuIG1lc3NlbicsXG4gIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ1JhZGl1cyBtZXNzZW4nLFxuICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZCBtZXNzZW4nLFxuXG4gIElORk9QQUdFOiAnSW5mb3JtYXRpb25lbicsXG4gIEFERElUSU9OQUxQQU5FTDogJ1BhbmVsJyxcbiAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgQUNDT1VOVDogJ0FjY291bnQnLFxuICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ0FjY291bnQgYW56ZWlnZW4nLFxuXG4gIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG4vKipcbiAqIExhbmd1YWdlIGNvbnN0YW50cyAoZW4pXG4gKi9cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50c0VuZ2xpc2ggPSB7XG5cbiAgTEFORzogJ2VuJyxcblxuICBOQU1FOiAnTmFtZScsXG4gIEhJREU6ICdIaWRlJyxcbiAgQ0xPU0U6ICdDbG9zZScsXG4gIFBPSU5UOiAnUE9JJyxcbiAgRlJFRUhBTkQ6ICdmcmVlaGFuZCcsXG4gIExJTkU6ICdMaW5lJyxcbiAgUE9MWUdPTjogJ0FyZWEnLFxuICBDSVJDTEU6ICdDaXJjbGUnLFxuICBQRVJJTUVURVI6ICdQZXJpbWV0ZXInLFxuICBMRU5HVEg6ICdMZW5ndGgnLFxuICBTVVJGQUNFQVJFQTogJ1N1cmZhY2UgYXJlYScsXG4gIFJBRElVUzogJ1JhZGl1cycsXG4gIFJFRlJFU0g6ICdSZWZyZXNoJyxcbiAgQUNDRVBUOiAnQWNjZXB0JyxcbiAgQ09QWV9UT19DTElQQk9BUkQ6ICdDb3B5IHRvIGNsaXBib2FyZCcsXG5cbiAgQ1RSTF9aT09NX0lOOiAnWm9vbSBpbicsXG4gIENUUkxfWk9PTV9PVVQ6ICdab29tIG91dCcsXG4gIENUUkxfWk9PTV9FWFQ6ICdGaXQgdG8gZXh0ZW50JyxcbiAgQ1RSTF9aT09NX0hPTUU6ICdqdW1wIHRvIGluaXRpYWwgcG9zaXRpb24nLFxuICBDVFJMX1pPT01fUE9TOiAnanVtcCB0byBicm93c2VyL2RldmljZSBwb3NpdGlvbicsXG4gIENUUkxfWk9PTV9TTElERVI6ICdab29tIHNsaWRlcicsXG4gIENUUkxfUkVTRVRfUk9UQVRJT046ICdSZXNldCByb3RhdGlvbiAodG91Y2gsIGN0cmwrc2hpZnQrbW91c2UpJyxcbiAgQ1RSTF9QT1JUU0lERTogJ1RvZ2dsZSBwb3J0c2lkZScsXG4gIENUUkxfRURJVE9SOiAnVG9nZ2xlIGVkaXRvcicsXG4gIENUUkxfTUVBU1VSRVRPT0xTOiAnVG9nZ2xlIG1lYXN1cmV0b29scycsXG4gIENUUkxfSU5GT1BBR0U6ICdUb2dnbGUgaW5mb3BhZ2UnLFxuICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1RvZ2dsZSBwYW5lbCcsXG4gIENUUkxfQUNDT1VOVDogJ1RvZ2dsZSBhY2NvdW50JyxcbiAgQ1RSTF9aT09NTEVWRUw6ICdab29tJyxcbiAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICBDVFJMX0dFT1NFQVJDSDogJ1RvZ2dsZSBnZW9zZWFyY2gnLFxuICBDVFJMX1NUQVJUX1NFQVJDSDogJ3N0YXJ0IHNlYXJjaCcsXG4gIENUUkxfT1ZFUlZJRVdNQVA6ICdUb2dnbGUgb3ZlcnZpZXdtYXAnLFxuICBDVFJMX1NJREVCT0FSRDogJ1RvZ2dsZSBzaWRlYm9hcmQnLFxuICBDVFJMX1NUQVJCT0FSRDogJ1RvZ2dsZSBzdGFyYm9hcmQnLFxuICBDVFJMX0FUVFJJQlVUSU9OOiAnU2hvdyBhdHRyaWJ1dGlvbicsXG4gIENUUkxfR1JJRDogJ1RvZ2dsZSBncmlkJyxcbiAgQ1RSTF9QRVJNQUxJTks6ICdHZW5lcmF0ZSBQZXJtYWxpbmsnLFxuICBDVFJMX0ZVTExTQ1JFRU46ICdUb2dnbGUgZnVsbHNjcmVlbi1tb2RlJyxcbiAgQ1RSTF9QUklOVDogJ0V4cG9ydCBtYXAnLFxuICBDVFJMX0JBU0VMQVlFUjogJ1N3aXRjaCBiYXNlIG1hcCBjaGFuZ2VyIG9uL29mZicsXG4gIENUUkxfSU5GT0FSRUE6ICdPcGVuL2Nsb3NlIGluZm8gYXJlYScsXG5cbiAgRURJVE9SOiAnRWRpdG9yJyxcbiAgRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkU6ICdNZWFzdXJlIHdoaWxlIGRyYXdpbmcnLFxuICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVlaGFuZCBkcmF3JyxcbiAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFbmQgbW9kaWZpY2F0aW9uJyxcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRGVsZXRlIGZlYXR1cmUnLFxuICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdNb2RpZnkgZmVhdHVyZScsXG4gIEVESVRPUl9TRUxFQ1RfSU5GTzogJ0NsaWNrIGFuIGVsZW1lbnQgb24gdGhlIG1hcCB0byBzZWxlY3QgaXQuJyxcbiAgRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUw6ICdbY3RybF0gKyBbY2xpY2tdIGZvciBtdWx0aXNlbGVjdCA8YnI+W3NoaWZ0XSBmb3IgYm94c2VsZWN0JyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdTZWxlY3QtbW9kZScsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0FkZCBQT0lzJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRHJhdyBmcmVlaGFuZCcsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnQWRkIHRyYWNrcycsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnQWRkIGFyZWFzJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0FkZCBjaXJjbGVzJyxcblxuICBTVEFSQk9BUkQ6ICdMYXllcnN3aXRjaGVyJyxcbiAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2VsYXllcicsXG4gIFNUQVJCT0FSRF9MQVlFUjogJ0xheWVyJyxcbiAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ0Jhc2VsYXllcnN3aXRjaGVyJyxcbiAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnTWFwIGVsZW1lbnRzJyxcbiAgU1RBUkJPQVJEX0VMRU1FTlRfWk9PTTogJ1pvb20gdG8gZWxlbWVudCcsXG4gIFNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQkVGT1JFOiAnWm9vbSB0byBlbGVtZW50ICcsXG4gIFNUQVJCT0FSRF9FTEVNRU5UX1pPT01fQUZURVI6ICcnLFxuXG4gIExBWUVSU1dJVENIRVJfVE9HR0xFX0FMTDogXCJBbGwgZWxlbWVudHNcIixcblxuICBSRVNFVF9GSUxURVI6ICdSZXNldCBmaWx0ZXInLFxuXG4gIE1FQVNVUkVUT09MUzogJ01lYXN1cmV0b29scycsXG4gIE1FQVNVUkVUT09MU19JTkZPOiAnU2VsZWN0IGEgbWVhc3VyZXR5cGUgYW5kIHN0YXJ0IG1lYXN1cmluZyBieSBjbGlja2luZyBvbiB0aGUgbWFwLicsXG4gIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoVG8gc3RvcCBhIG1lYXN1cmVtZW50LCBkb3VibGUtY2xpY2sgb24gdGhlIG1hcC4pJyxcbiAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdTZWxlY3QtbW9kZScsXG4gIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnTWVhc3VyZSB0cmFja3MnLFxuICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ01lYXN1cmUgYXJlYXMnLFxuICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnTWVhc3VyZSByYWRpdXMnLFxuICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdNZWFzdXJlIGZyZWVoYW5kJyxcblxuICBHRU9TRUFSQ0g6ICdTZWFyY2gnLFxuICBPVkVSVklFV01BUDogJ092ZXJ2aWV3IG1hcCcsXG5cbiAgSU5GT1BBR0U6ICdJbmZvcGFnZScsXG4gIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ1Nob3cgaW5mb3JtYXRpb25zJyxcblxuICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdTaG93IHBhbmVsJyxcblxuICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gIEFDQ09VTlRfVklFV19UUklHR0VSOiAnU2hvdyBhY2NvdW50JyxcblxuICBTRUFSQ0hfTk9UX0ZPVU5EOiAnTG9jYXRpb24gbm90IGZvdW5kLiBTb3JyeS4uLiA6KCcsXG5cbiAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG4vKipcbiAqICBUaGlzIHNjcmlwdCBpbXBvcnRzIGFsbCBkaWZmZXJlbnQgbGFuZ3VhZ2VzIGFuZCBleHBvcnRzIHRoZSBvbmUgdGhhdCBpcyB2YWxpZCBmb3IgdGhlIGNvbmZpZ3VyZWQgbGFuZ3VhZ2UuXG4gKi9cbmltcG9ydCB7bGFuZ0NvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1lblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UobWFwRGF0YSkge1xuICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIHJldHVybiBsYW5nQ29uc3RhbnRzR2VybWFuO1xuICB9IGVsc2UgaWYgKG1hcERhdGEgJiYgbWFwRGF0YS5sYW5nID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gbGFuZ0NvbnN0YW50c0VuZ2xpc2g7XG4gIH0gZWxzZSB7XG4gICAgLy8gZmFsbGJhY2tcbiAgICByZXR1cm4gbGFuZ0NvbnN0YW50c0VuZ2xpc2g7XG4gIH1cbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZW50QmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGdldExhbmd1YWdlKHByb3BzLm1hcERhdGEpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5tYXBEYXRhLmNvb2tpZTtcbiAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tYXBzLWNvbnNlbnQtb3ZlcmxheVwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWFwcy1jb25zZW50LWluZm9cIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHNldHRpbmdzLmluZm99fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJjNGctbWFwcy1jb25zZW50LWJ1dHRvbiBidG5cIn0gb25DbGljaz17KCk9PiB0aGlzLmNsaWNrRXZlbnQodGhpcyl9PiB7dGhpcy5sYW5ndWFnZS5BQ0NFUFR9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICB9XG4gICAgY2xpY2tFdmVudCAoc2NvcGUpIHtcbiAgICAgICAgbGV0IHNldHRpbmdzID0gc2NvcGUucHJvcHMubWFwRGF0YS5jb29raWU7XG5cbiAgICAgICAgc2NvcGUuc2V0Q29va2llKHNldHRpbmdzLm5hbWUsIHNldHRpbmdzLnZhbHVlKTtcbiAgICAgICAgd2luZG93LmluaXRNYXAodGhpcy5wcm9wcy5tYXBEYXRhKTtcbiAgICB9XG4gICAgc2V0Q29va2llIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBTZXNzaW9uXCJcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==