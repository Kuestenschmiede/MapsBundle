/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************/
/*! exports provided: langConstants */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langConstants", function() { return langConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * Language constants (en)
   */

  c4g.maps.constant.i18n = $.extend(c4g.maps.constant.i18n, {

    LANG: 'de',

    NAME: 'Name',
    HIDE: 'Zuklappen',
    CLOSE: 'Schließen',
    POINT: 'POI',
    FREEHAND: 'Freihand',
    LINE: 'Linie',
    POLYGON: 'Fläche',
    CIRCLE: 'Radius',
    PERIMETER: 'Umfang',
    LENGTH: 'Länge',
    SURFACEAREA: 'Flächeninhalt',
    RADIUS: 'Radius',
    REFRESH: 'Aktualisieren',
    COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',

    CTRL_ZOOM_IN: 'Vergrößern',
    CTRL_ZOOM_OUT: 'Verkleinern',
    CTRL_ZOOM_EXT: 'Maximal verkleinern',
    CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
    CTRL_ZOOM_POS: 'Zum aktuellen Standort',
    CTRL_ZOOM_SLIDER: 'Zoom Slider',
    CTRL_RESET_ROTATION: 'Rotation (touch, alt+mouse) zurücksetzen',
    CTRL_PORTSIDE: 'Portside ein-/ausblenden',
    CTRL_ROUTER: 'Router ein-/ausblenden',
    CTRL_EDITOR: 'Editor ein-/ausblenden',
    CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
    CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
    CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
    CTRL_ACCOUNT: 'Account ein-/ausblenden',
    CTRL_ZOOMLEVEL: 'Zoom',
    CTRL_MOUSECOORDS: 'Lon/Lat',
    CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
    CTRL_START_SEARCH: 'Suche starten',
    CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
    CTRL_GEOBOOKMARKS: 'Favoriten verwalten',
    CTRL_SIDEBOARD: 'Sideboard ein-/ausblenden',
    CTRL_STARBOARD: 'Starboard ein-/ausblenden',
    CTRL_ATTRIBUTION: 'Attribution anzeigen',
    CTRL_GRID: 'Gitter ein-/ausblenden',
    CTRL_PERMALINK: 'Permalink generieren',
    CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
    CTRL_PRINT: 'Karte exportieren',

    EDITOR: 'Editor',
    EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
    EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
    EDITOR_FEATURE_APPLY: 'Editieren beenden',
    EDITOR_FEATURE_DELETE: 'Element löschen',
    EDITOR_FEATURE_MODIFY: 'Element editieren / verschieben',
    EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
    EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
    EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
    EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Kartenelemente',
    EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihandwerkzeuge',
    EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
    EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
    EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',

    POPUP_ROUTE_FROM: 'Route von hier',
    POPUP_ROUTE_TO: 'Route hierhin',

    STARBOARD: 'Starboard',
    STARBOARD_BASELAYER: 'Basiskarten',
    STARBOARD_LAYER: 'Ebenen',
    STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
    STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',

    SIDEBOARD: 'Sideboard',

    ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
    ROUTER_FROM_LABEL: 'Start',
    ROUTER_OVER_LABEL: 'Zwischenziel',
    ROUTER_TO_LABEL: 'Ziel',
    ROUTER_CLEAR_TITLE: 'Löschen',
    ROUTER_CLEAR_HTML: '',
    ROUTER_Label_Interim: 'Zwischenziel',

    ROUTER_SWITCH: 'Wechsel von Start und Ziel',
    ROUTER_OVER: 'Zwischenziel hinzufügen',
    ROUTER_PRINT: 'Routenbeschreibung drucken',

    ROUTER_VIEW_LABEL_ROUTE: 'Route:',
    ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
    ROUTER_VIEW_LABEL_TIME: 'Zeit:',
    ROUTER_VIEW_LABEL_PROFILE: 'Profil:',

    ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
    ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',

    ROUTER: 'Router',
    ROUTER_N: 'Norden',
    ROUTER_E: 'Ost',
    ROUTER_S: 'Süden',
    ROUTER_W: 'Westen',
    ROUTER_NE: 'Nordost',
    ROUTER_SE: 'Südost',
    ROUTER_SW: 'Südwest',
    ROUTER_NW: 'Nordwest',
    ROUTER_DIRECTION_0: 'Unbekannte Anweisung[ auf <b>%s</b>]',
    ROUTER_DIRECTION_1: 'Geradeaus weiterfahren[ auf <b>%s</b>]',
    ROUTER_DIRECTION_2: 'Leicht rechts abbiegen [auf <b>%s</b>]',
    ROUTER_DIRECTION_3: 'Rechts abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_4: 'Scharf rechts abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_5: 'Wenden[ auf <b>%s</b>]',
    ROUTER_DIRECTION_6: 'Scharf links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_7: 'Links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_8: 'Leicht links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_10: 'Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]',
    'ROUTER_DIRECTION_11-1': 'In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-2': 'In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-3': 'In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-4': 'In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-5': 'In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-6': 'In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-7': 'In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-8': 'In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-9': 'In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-x': 'In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen',
    ROUTER_DIRECTION_15: 'Sie haben Ihr Ziel erreicht',

    'ROUTER_5.X_TYPE_0': ' %m fahren[ auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_1': ' %m dem Straßenverlauf folgen[ als <b>%s</b>]',
    'ROUTER_5.X_TYPE_2': ' Fahren Sie[ auf <b>%s</b>] los',
    'ROUTER_5.X_TYPE_3': ' Das Ziel befindet sich <b>%m</b>',
    'ROUTER_5.X_TYPE_4': ' Weiterfahren[ auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_5': ' %m [auf <b>%s</b> ]auffahren',
    'ROUTER_5.X_TYPE_6': ' %m [auf <b>%s</b> ]abfahren',
    'ROUTER_5.X_TYPE_7': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_8': ' %m abbiegen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_9': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_10': ' %m fahren um auf der Straße zu bleiben',
    'ROUTER_5.X_TYPE_11': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_12': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_13': ' %m fahren [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_14': ' abbiegen[ auf <b>%s</b>]',

    'ROUTER_5.X_MOD_0': 'Uturn',
    'ROUTER_5.X_MOD_1': 'Scharf rechts',
    'ROUTER_5.X_MOD_2': 'Rechts',
    'ROUTER_5.X_MOD_3': 'Leicht rechts',
    'ROUTER_5.X_MOD_4': 'Geradeaus',
    'ROUTER_5.X_MOD_5': 'Leicht links',
    'ROUTER_5.X_MOD_6': 'Links',
    'ROUTER_5.X_MOD_7': 'Scharf links',
    'ROUTER_5.X_MOD_8': 'in der Nähe',

    ROUTER_FROM: 'Start',
    ROUTER_TO: 'Ziel',
    ROUTER_FIND_ROUTE: 'Route finden',
    ROUTER_LOC_ROUTE_TO: 'Route hierhin',
    ROUTER_ROUTEDESC: 'Routenbeschreibung',
    ROUTER_ROUTENAME: 'Route',
    ROUTER_DISTANCE: 'Distanz',
    ROUTER_TIME: 'Zeit',
    ROUTER_REV_GEOCODING: 'Ermittle Adresse...',
    ROUTER_ERROR_REV_GEOCODING: 'Fehler beim Ermitteln der Adresse',
    ROUTER_SEARCHING: 'Suche Adresse...',
    ROUTER_ERROR_SEARCHING: 'Fehler beim Suchen der Adresse',
    ROUTER_CALC_ROUTE: 'Berechne Route...',
    ROUTER_ERROR_CALC_ROUTE: 'Fehler beim Berechnen der Route',

    MEASURETOOLS: 'Messwerkzeuge',
    MEASURETOOLS_INFO: 'Wählen Sie weiter unten einen Messtyp aus und starten Sie die Messung durch das Klicken auf der Karte.',
    MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
    MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',

    GEOBOOKMARKS_PLACEHOLDER: 'Neue Bezeichnung',

    INFOPAGE: 'Informationen',
    ADDITIONALPANEL: 'Panel',
    ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
    ACCOUNT: 'Account',
    ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',

    SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',

    NONE: '' // last line
  }); // end of "language constants" ---
})(jQuery, this.c4g);

var langConstants = this.c4g.maps.constant.i18n;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************/
/*! exports provided: cssConstants */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssConstants", function() { return cssConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * CSS constants
   */

  c4g.maps.constant.css = $.extend(c4g.maps.constant.css, {

    OPEN: 'c4g-open',
    CLOSE: 'c4g-close',
    CLOSEABLE: 'c4g-closeable',
    ENABLED: 'c4g-enabled',
    DISABLED: 'c4g-disabled',
    HIDE: 'c4g-hide',
    ICON: 'c4g-icon',
    CONTROL: 'c4g-control',
    COPY: 'c4g-copy',
    REFRESH: 'c4g-refresh',
    ACTIVE: 'c4g-active',
    INACTIVE: 'c4g-inactive',
    LOADING: 'c4g-loading',
    ANIMATION_SPIN: 'c4g-animation-spin',
    LARGE: 'c4g-large',
    SMALL: 'c4g-small',
    HORIZONTAL: 'c4g-horizontal',
    VERTICAL: 'c4g-vertical',

    ATTRIBUTION_LOGO: 'c4g-attribution-logo',
    CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
    CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
    CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
    CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
    CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
    EDITOR_DRAW_CONTENT_POINT: 'c4g-draw-content-point',
    EDITOR_DRAW_CONTENT_FREEHAND: 'c4g-draw-content-freehand',
    EDITOR_DRAW_CONTENT_LINESTRING: 'c4g-draw-content-line',
    EDITOR_DRAW_CONTENT_POLYGON: 'c4g-draw-content-polygon',
    EDITOR_DRAW_CONTENT_CIRCLE: 'c4g-draw-content-circle',
    EDITOR_DRAW_CONTENT_PROJECT: 'c4g-draw-content-project',
    EDITOR_DRAW_TRIGGER: 'c4g-draw-trigger',
    EDITOR_CONTENT_SELECT: 'c4g-content-select',
    EDITOR_DRAW_OPTIONS: 'c4g-editor-draw-options',
    EDITOR_FEATURE_APPLY: 'c4g-editor-feature-apply',
    EDITOR_FEATURE_DELETE: 'c4g-editor-feature-delete',
    EDITOR_FEATURE_MODIFY: 'c4g-editor-feature-modify',
    EDITOR_VIEW_TRIGGER_SELECT: 'c4g-editor-view-trigger-select',
    EDITOR_VIEW_TRIGGER_DRAW_POINT: 'c4g-editor-view-trigger-draw-point',
    EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-editor-view-trigger-draw-freehand',
    EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-editor-view-trigger-draw-line',
    EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-editor-view-trigger-draw-polygon',
    EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-editor-view-trigger-draw-circle',
    GEOSEARCH: 'c4g-geosearch',
    GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
    GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
    GEOSEARCH_START: 'c4g-geosearch-start',
    GRATICULE: 'c4g-graticule',
    MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
    PRINT: 'c4g-print',
    INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
    INFOPAGE: 'c4g-infopage',
    ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
    ADDITIONALPANEL: 'c4g-additionalpanel',
    ACCOUNT_VIEW_TRIGGER: 'c4g-account-view-trigger',
    ACCOUNT: 'c4g-account',
    OVERVIEWMAP: 'c4g-overviewmap',
    OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
    GEOBOOKMARKS: 'c4g-geobookmarks',
    PERMALINK: 'c4g-permalink',
    PERMALINK_POPUP: 'c4g-permalink-popup',
    POPUP_CLOSE: 'c4g-popup-close',
    POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
    POPUP_ROUTE_FROM: 'c4g-popup-route-from',
    POPUP_ROUTE_TO: 'c4g-popup-route-to',
    PORTSIDE: 'c4g-portside',
    PORTSIDE_CONTAINER: 'c4g-portside-container',
    PORTSIDE_CONTROL: 'c4g-portside-control',
    PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
    PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
    PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
    PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
    PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
    PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
    PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
    PORTSIDE_HEADLINE: 'c4g-portside-headline',
    PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
    PORTSIDE_BUTTON: 'c4g-portside-button',
    PORTSIDE_HIDE: 'c4g-portside-hide',
    PORTSIDE_CLOSE: 'c4g-portside-close',
    SPINNER: 'c4g-spinner',
    STARBOARD: 'c4g-starboard',
    STARBOARD_CONTAINER: 'c4g-starboard-container',
    STARBOARD_CONTROL: 'c4g-starboard-control',
    STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
    STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
    STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
    STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
    STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
    STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
    STARBOARD_HEADLINE: 'c4g-starboard-headline',
    STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
    STARBOARD_BUTTON: 'c4g-starboard-button',
    STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
    STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
    STARBOARD_CLOSE: 'c4g-starboard-close',
    STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
    STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
    STARBOARD_LAYERTREE: 'c4g-layertree',
    STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
    TOOLTIP_POPUP: 'c4g-tooltip-popup',
    ZOOM_LEVEL: 'c4g-zoom-level',

    ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
    ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
    ROUTER_INPUT_FROM: 'c4g-router-input-from',
    ROUTER_INPUT_TO: 'c4g-router-input-to',
    ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
    ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
    ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
    ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
    ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',

    ROUTER_SWITCH: 'c4g-router-switch',
    ROUTER_OVER: 'c4g-router-over',
    ROUTER_PRINT: 'c4g-router-print',

    ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
    ROUTER_PROFILE_HGV: 'c4g-router-profile-hgv',
    ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
    ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
    ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',

    ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
    ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
    ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
    ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',

    OL_CONTROL: 'ol-control',
    OL_UNSELECTABLE: 'ol-unselectable',

    OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
    OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
    OL_VIEWPORT: 'ol-viewport',
    OL_ZOOM: 'ol-zoom',
    OL_ZOOM_IN: 'ol-zoom-in',
    OL_ZOOM_EXT: 'ol-zoom-extent',
    OL_ZOOM_HOME: 'ol-zoom-home',
    OL_ZOOM_POS: 'ol-zoom-position',
    OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
    OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
    OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
    OL_ZOOM_SLIDER: 'ol-zoom-slider',
    OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',

    NONE: '' // last line
  }); // end of "css constants" ---
})(jQuery, this.c4g);

var cssConstants = this.c4g.maps.constant.css;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js":
/*!***********************************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-starboardplugin-baselayerswitcher.js ***!
  \***********************************************************************************/
/*! exports provided: Baselayerswitcher */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Baselayerswitcher", function() { return Baselayerswitcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};
this.c4g.maps.control.starboardplugin = this.c4g.maps.control.starboardplugin || {};





(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              starboard
   */

  c4g.maps.control.starboardplugin.Baselayerswitcher = function (starboard) {
    if (!starboard) {
      console.warn('Cannot initialize Baselayerswitcher without a starboard.');
      return false;
    }

    this.initialized = false;
    this.baselayers = {};

    this.starboard = starboard;
    this.proxy = starboard.options.mapController.proxy;

    this.create();
    this.loadContent();
  };

  // Add methods
  c4g.maps.control.starboardplugin.Baselayerswitcher.prototype = $.extend(c4g.maps.control.starboardplugin.Baselayerswitcher.prototype, {

    /**
     * @TODO: [create description]
     *
     * @return  {[type]}  [description]
     */
    create: function create() {
      var self, contentWrapper, contentHeadline, contentInfo;

      self = this;

      contentWrapper = document.createElement('div');

      contentHeadline = document.createElement('div');
      contentHeadline.innerHTML = this.starboard.options.baselayerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER;
      contentHeadline.className = 'contentHeadline';
      contentWrapper.appendChild(contentHeadline);

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_CONTENT_BASELAYERSWITCHER;
      contentInfo = document.createElement('p');
      this.contentDiv.appendChild(contentInfo);
      contentWrapper.appendChild(this.contentDiv);

      self.view = self.starboard.addView({
        name: 'layerswitcher',
        triggerConfig: {
          tipLabel: this.starboard.options.baselayerSwitcherTitle || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER,
          className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER,
          withHeadline: false
        },
        sectionElements: [{ section: self.starboard.contentContainer, element: contentWrapper }, { section: self.starboard.topToolbar, element: self.starboard.viewTriggerBar }]
      });
    },

    /**
     * @TODO: [activate description]
     *
     * @return  {[type]}  [description]
     */
    activate: function activate() {
      this.view.activate();
    },

    /**
     * @TODO: [setContent description]
     *
     * @param  {[type]}  newContent  [description]
     */
    setContent: function setContent(newContent) {
      if (newContent) {
        if (typeof newContent === "string") {
          this.contentDiv.innerHTML = newContent;
        } else {
          try {
            if (this.contentDiv.firstChild) {
              this.contentDiv.replaceChild(newContent, this.contentDiv.firstChild);
            } else {
              this.contentDiv.appendChild(newContent);
            }
          } catch (e) {
            // @TODO
            console.warn(e.message);
            // return false;
          }
        }
      }
      return this.contentDiv.innerHTML;
    },

    loadContent: function loadContent() {
      var self, fnDrawContent;

      self = this;
      this.starboard.spinner.show();

      fnDrawContent = function fnDrawContent(baselayerIds) {
        self.baseLayerControl = document.createElement('div');
        $(self.baseLayerControl).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].STARBOARD_BASELAYERTREE);
        self.setContent(self.baseLayerControl);

        self.addItems(baselayerIds, self.baseLayerControl);

        self.initialized = true;
        self.starboard.spinner.hide();
        self.starboard.update();
      }; // end of "fnDrawContent()"

      if (this.proxy.baselayers_loaded) {
        fnDrawContent(this.proxy.baselayerController.baselayerIds);
      } else {
        this.proxy.hook_baselayer_loaded.push(fnDrawContent);
      }
    }, // end of "loadContent()"

    /**
     * @TODO: [drawContent description]
     *
     * @param   {[type]}  contentData  [description]
     */
    drawContent: function drawContent(contentData) {
      // PASS
    }, // end of "drawContent()"

    /**
     * @TODO: [addItems description]
     *
     * @param  {[type]}  itemData        [description]
     * @param  {[type]}  wrapperElement  [description]
     * @param  {[type]}  options         [description]
     */
    addItems: function addItems(itemData, wrapperElement, options) {
      var i, j, self, wrapper, item, uid, listItem, childList, childItem, childEntry, toggle, entry, $entry, filter, handleEntryClick, handleChangeBaselayerVisibility;

      self = this;

      if ((typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
        options = {
          parseAsList: true
        };
      }

      handleEntryClick = function handleEntryClick(event) {
        event.preventDefault();

        var itemUid, siblings, baselayerItem;
        siblings = $(this).parent().siblings();
        for (var i = 0; i < siblings.length; i++) {
          if (siblings[i] && $(siblings[i]).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN)) {
            if (self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId] && self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].hasOverlays) {
              for (var _j in self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays) {
                if (self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays.hasOwnProperty(_j)) self.proxy.options.mapController.map.removeLayer(self.proxy.baselayerController.arrBaselayers[self.proxy.activeBaselayerId].overlayController.arrOverlays[_j].layer);
              }
            }
            $(siblings[i]).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
          }
        }
        itemUid = $(this).data('uid');

        if (self.starboard.options.caching) {
          __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].storeValue('baselayer', itemUid);
        }

        if ($(this).parent().hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE)) {
          $(this).parent().removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
        } else {
          $(this).parent().removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
        }

        if (self.proxy.options.mapController.rightSlideElements) {
          self.proxy.options.mapController.rightSlideElements.forEach(function (element) {
            $(element).css('right', self.starboard.container.offsetWidth);
          });
        }
        $(self.starboard.element).css('right', self.starboard.container.offsetWidth);

        if (self.proxy.activeBaselayerId !== itemUid) {
          self.proxy.baselayerController.showBaseLayer(itemUid);
          if (self.proxy.baselayerController.arrBaselayers[itemUid].hasOverlays) {
            for (var _j2 in self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays) {
              if (self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays.hasOwnProperty(_j2)) {
                self.proxy.options.mapController.map.addLayer(self.proxy.baselayerController.arrBaselayers[itemUid].overlayController.arrOverlays[_j2].layer);
              }
            }
          }
          $(this).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);

          // if(this.nextSibling){
          //     var children = this.nextSibling.childNodes;
          //     for(i = 0; i < children.length; i++){
          //         $(children[i].firstChild).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
          //     }
          // }
          c4g.maps.hook.baselayer_changed = c4g.maps.hook.baselayer_changed || [];
          __WEBPACK_IMPORTED_MODULE_2__c4g_maps_utils__["utils"].callHookFunctions(c4g.maps.hook.baselayer_changed, itemUid);
        }
      }; // end of "handleEntryClick()"

      handleChangeBaselayerVisibility = function handleChangeBaselayerVisibility(baselayerConfig) {
        var id;

        for (id in self.baselayers) {
          if (self.baselayers.hasOwnProperty(id)) {
            if (id === baselayerConfig.id) {
              self.baselayers[id].$entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
            } else {
              self.baselayers[id].$entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
            }
          }
        }
      };

      wrapper = options.parseAsList ? document.createElement('ul') : document.createElement('div');

      if (itemData.length > 0) {

        for (i = 0; i < itemData.length; i += 1) {

          uid = itemData[i];
          this.baselayers[uid] = {};

          listItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
          this.baselayers[uid].entryWrapper = listItem;
          entry = document.createElement('a');
          entry.setAttribute('href', '#');
          entry.appendChild(document.createTextNode(self.proxy.baselayerController.arrBaselayers[uid].name));
          $(entry).data('id', uid);
          if (self.proxy.baselayerController.arrBaselayers[uid].hasOverlays) {

            childList = document.createElement('ul');options.parseAsList ? document.createElement('ul') : document.createElement('div');
            for (j = 0; j < self.proxy.baselayerController.arrBaselayers[uid].overlays.length; j++) {
              childItem = options.parseAsList ? document.createElement('li') : document.createElement('div');
              childEntry = document.createElement('a');
              if (self.proxy.activeBaselayerId == uid) {
                $(childEntry).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
                var overlayId = self.proxy.baselayerController.arrBaselayers[uid].overlays[j].id;
                self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[overlayId].changeOpacity(self.proxy.baselayerController.arrBaselayers[uid].overlays[j].opacity);
              } else {
                $(childEntry).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
              }

              childEntry.appendChild(document.createTextNode(self.proxy.baselayerController.arrBaselayers[uid].overlays[j].name));
              $(childEntry).data('id', self.proxy.baselayerController.arrBaselayers[uid].overlays[j].id);
              $(childEntry).data('pid', uid);
              toggle = document.createElement('input');
              toggle.className = 'c4g-overlay-toggle';
              toggle.setAttribute('type', 'range');
              toggle.setAttribute('min', 0);
              toggle.setAttribute('max', 100);
              toggle.setAttribute('value', self.proxy.baselayerController.arrBaselayers[uid].overlays[j].opacity);
              toggle.setAttribute('steps', 10);
              $(toggle).on('input', function (event) {
                self.proxy.baselayerController.arrBaselayers[$(this).parent().data('pid')].overlayController.arrOverlays[$(this).parent().data('id')].changeOpacity(this.value);
              });

              childEntry.appendChild(toggle);
              childItem.appendChild(childEntry);
              childList.appendChild(childItem);
            }
          }
          listItem.appendChild(entry);
          if (childList) {
            listItem.appendChild(childList);
            childList = undefined;
          }

          $entry = $(entry);
          this.baselayers[uid].$entry = $entry;

          if (this.starboard.options.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(self.starboard.options.mapController.data.default_baselayer, 10)) {
            $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ACTIVE);
            $(listItem).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OPEN);
            if (self.proxy.baselayerController.arrBaselayers[uid].hasOverlays) {
              for (var _j3 in self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays) {
                if (self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays.hasOwnProperty(_j3)) {
                  self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[_j3].changeOpacity(self.proxy.baselayerController.arrBaselayers[uid].overlayController.arrOverlays[_j3].opacity);
                }
              }
            }
          } else {
            $entry.addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].INACTIVE);
            $(listItem).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CLOSE);
          }

          $entry.data('uid', uid);
          $entry.click(handleEntryClick);

          wrapper.appendChild(listItem);
        }
        // Starboard Filter
        if (this.starboard.options.filter) {
          var dv = document.createElement('div');
          dv.className = "c4g-starboard-filter c4g-content-select";
          var filter = document.createElement('input');
          filter.type = 'text';
          filter.placeholder = ""; //Font Awesome
          var i = document.createElement('i');
          i.className = 'fas fa-filter';
          i.setAttribute("aria-hidden", "true");
          dv.appendChild(filter);
          dv.appendChild(i);
          filter.onkeyup = function () {
            function filter_ulli(element, showSubtree) {

              // do not apply filter for short search terms

              showSubtree = showSubtree || false; // used while traversing down the tree

              /**
               * Returns an array (modified: first element) of the given elements. Only finds children of the given parent element, but
               * no further descendants like getElementsByTagName does.
               */
              function getChildrenByTagName(element, tagName) {
                var found = [];
                for (var i = 0; i < element.children.length; i++) {
                  if (element.children[i].tagName.toUpperCase() == tagName.toUpperCase()) {
                    found.push(element.children[i]);
                  }
                }
                if (found.length > 0) {
                  return found[0]; // !!!
                } else {
                  return false;
                }
              }

              var matchFlagUl = false;
              var subtreeMatches = false;
              // for each LI do
              if (element.children) {
                for (var i = 0; i < element.children.length; i++) {
                  element.children[i].style.display = "block";

                  var isMatch = false;

                  // search current LI for filter term
                  if (element.children[i].getElementsByTagName('a')[0].innerHTML.toUpperCase().indexOf(filter.value.toUpperCase()) >= 0) {
                    // it's a match
                    isMatch = true;
                  }

                  // recurse if a subtree (UL) exists in current LI (max 1 expected)
                  var ul = getChildrenByTagName(element.children[i], "ul");

                  if (ul) {
                    // recursion
                    var hasSubtree = true;
                    subtreeMatches = filter_ulli(ul, showSubtree || isMatch);
                  } else {
                    var hasSubtree = false;
                  }

                  if (isMatch || subtreeMatches || showSubtree) {
                    matchFlagUl = true; // used while traversing up the tree again
                    // set current LI visible and open
                    element.children[i].style.display = "";

                    if (filter.value.length > 2) {
                      element.children[i].classList.remove("c4g-close");
                      element.children[i].classList.add("c4g-open");
                    }

                    element.children[i].classList.remove("c4g-starboard-filter-match"); // always remove
                    if (isMatch && filter.value.length > 0) {
                      element.children[i].classList.add("c4g-starboard-filter-match");
                    }
                    ;
                  } else {
                    // set current LI invisible
                    element.children[i].style.display = "none";
                    element.children[i].classList.remove("c4g-open");
                    element.children[i].classList.add("c4g-close");
                    element.children[i].classList.remove("c4g-starboard-filter-match");
                  }
                }

                if (matchFlagUl) {
                  return true;
                } else {
                  return false;
                }
              }
            }

            // do not react immediately but allow for some keystrokes
            setTimeout(function () {
              // two or zero letters are required
              if (filter.value.length != 1) filter_ulli(document.querySelector('.c4g-baselayertree > ul:nth-child(2)'));
            }, 350);
          };

          wrapperElement.appendChild(dv);
        }

        this.proxy.hook_baselayer_visibility.push(handleChangeBaselayerVisibility);
      }
      wrapperElement.appendChild(wrapper);
    } // end of "addItems()"

  }); // end of "add methods"
})(jQuery, this.c4g);

var Baselayerswitcher = this.c4g.maps.control.starboardplugin.Baselayerswitcher;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************/
/*! exports provided: Zoomlevel */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoomlevel", function() { return Zoomlevel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};



(function ($, c4g) {
  'use strict';

  /**
   * Displays the current zoomlevel on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Zoomlevel = function (options) {

    var self, element, updateZoomlevel;

    self = this;

    if (!options || !options.mapView) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = $.extend({
      className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = options.mapView.getZoom();

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(options.mapView.getZoom());
    };

    options.mapView.on('change:resolution', updateZoomlevel);
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.Zoomlevel, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Zoomlevel.prototype = $.extend(c4g.maps.control.Zoomlevel.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var Zoomlevel = this.c4g.maps.control.Zoomlevel;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-utils.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************/
/*! exports provided: utils */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};




(function ($, c4g) {
  'use strict';

  /**
   * c4g-Maps utility functions
   */

  c4g.maps.utils = $.extend(c4g.maps.utils, {
    /**
     *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
     *
     *  @param    {string}    the string to capitalize
     *
     *  @return   {string}    the capitalized string
     */
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    /**
     * Generate an unique id.
     *
     * The id is 9 characters long and prefixed with an underscore.
     *
     * @return  {string}  The generated id.
     */
    getUniqueId: function getUniqueId() {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Encode input strings for GeoJSON-Objects properly,
     * so they will not break the Code.
     * Transforms:
     *   \ -> \\;
     *   " -> '';
     *   Ä -> &Auml;
     *   ä -> &auml;
     *   Ö -> &Ouml;
     *   ö -> &ouml;
     *   Ü -> &Uuml;
     *   ü -> &uuml;
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }

      output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');

      return output;
    }, // end of encodeGeoJsonProperty()

    /**
     * Decode input strings for GeoJSON-Objects properly,
     * so they will be displayed correctly.
     * Transforms:
     *   \\     -> \;
     *   ''     -> ";
     *   &Auml; -> Ä
     *   &auml; -> ä
     *   &Ouml; -> Ö
     *   &ouml; -> ö
     *   &Uuml; -> Ü
     *   &uuml; -> ü
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }
      if (typeof input !== "string") {
        input = input + "";
      }

      output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');

      return output;
    }, // end of decodeGeoJsonProperty()

    /**
     * Create or replace an URL-parameter.
     *
     * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
     * will be applied as "hash-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps#param
     * Note, that already existing "hash-parameters" will be overriden,
     * whereas existing "GET-parameters" stay untouched.
     *
     * If `opt_getKey` is set, it will be applied as "GET-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps?opt_getKey=param
     * If the key described by `opt_getKey` is already existing, its value will be overriden,
     * otherwise the key-value-pair will be appended appropriatly.
     * Already existing "hash-parameters" will stay untouched.
     *
     * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
     * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
     *
     * @param  {string}                    param        [description]
     * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
     * @param  {undefined|boolean}         opt_execute  Default: `undefined`
     */
    setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
      var link, searchParam, paramReplaced, i;

      if ((typeof param === "undefined" ? "undefined" : _typeof(param)) === undefined) {
        return false;
      }

      link = location.origin + location.pathname;

      if (!opt_getKey) {
        // use hash-parameter
        if (opt_execute) {
          location.hash = param;
          return true;
        }
        link += location.search + '#' + param;
      } else {
        // use GET-parameter
        if (location.search) {
          // there are already search-parameters
          paramReplaced = false;
          opt_getKey = opt_getKey.toLowerCase();
          // replace parameter if already existent
          searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
            if (key === opt_getKey) {
              paramReplaced = true;
              return key + '=' + param;
            }
            return match;
          });
          // otherwise append as new parameter
          if (!paramReplaced) {
            searchParam += '&' + opt_getKey + '=' + param;
          }
        } else {
          // this will be the only search-parameter in the URL
          searchParam = '?' + opt_getKey + '=' + param;
        }
        if (opt_execute) {
          location.search = searchParam;
          return true;
        }
        link += searchParam + location.hash;
      }

      return link;
    }, // end of setUrlParam()

    /**
     * Get search or hash URL-parameter as string.
     *
     * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
     * otherwise it will search for a GET-parameter and return its value.
     *
     * If a parameter is not existent, or empty, an empty string will be returned.
     *
     * @param   {undefined|string}  opt_getKey  Default: `undefined`
     *
     * @return  {string}                        The found parameter.
     */
    getUrlParam: function getUrlParam(opt_getKey) {
      var param, regEx;

      if (!opt_getKey) {
        param = location.hash.substring(1);
      } else {
        if (!location.search) {
          param = '';
        } else {
          regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
          param = regEx.exec(location.search);
          param = param ? param[1] : '';
        }
      }

      return param;
    }, // end of getUrlParam()

    /**
     * Delta-encode an array of numbers.
     * Note that the array will be sorted (lowest to highest)
     * before encoding.
     *
     * So after the encoding the first value of the output contains
     * the smallest number of the set and each following number just
     * represents the offset to its previous neighbor.
     *
     * This is mostly efficient for high numbers, that are "close to each other".
     *
     * Example:
     *   [1337, 11, 101, 123, 96, 69, 42, 42]
     *   will be sorted
     *   [11, 42, 42, 69, 96, 101, 123, 1337]
     *   and encoded to
     *   [11, 31, 0, 27, 27, 5, 22, 1214]
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaEncode: function deltaEncode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }
      if (arrInput.length === 1) {
        return arrInput;
      }

      arrInput.sort(function (a, b) {
        return a - b;
      });

      arrOutput = [];
      arrOutput[0] = arrInput[0];
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = arrInput[i] - arrInput[i - 1];
      }

      return arrOutput;
    }, // end of deltaEncode()

    /**
     * Decode a delta-encoded array.
     * See `deltaEncode` function for more detailed information.
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaDecode: function deltaDecode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }

      arrOutput = [];
      arrOutput[0] = parseInt(arrInput[0], 10);
      if (isNaN(arrInput[0])) {
        return [];
      }
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = parseInt(arrInput[i], 10) + arrOutput[i - 1];
        if (isNaN(arrOutput[i])) {
          return [];
        }
      }

      return arrOutput;
    }, // end of deltaDecode()

    /**
     * Check and call functions in `arrHookFunctions` with given `parameters`.
     *
     * @param   {array<function>}   arrHookFunctions  [description]
     * @param   {mixed}             parameters        [description]
     */
    callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
      var j;

      if (arrHookFunctions && arrHookFunctions.length > 0) {
        for (j = 0; j < arrHookFunctions.length; j += 1) {
          if (typeof arrHookFunctions[j] === 'function') {
            arrHookFunctions[j](parameters);
          }
        }
      }
    }, // end of "callHookFunctions()"

    /**
     * Convert a hex-formated color value into rgba()-format.
     *
     * @param   {string|number}  hex          [description]
     * @param   {string|number}  opt_opacity  [description]
     *
     * @return  {string}                      [description]
     */
    getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {

      var bigint, r, g, b, a;

      bigint = parseInt(hex, 16);
      if (opt_opacity && opt_opacity.value) {
        opt_opacity.value = parseInt(opt_opacity.value);
      }

      if (opt_opacity && typeof opt_opacity !== 'number') {
        if ((typeof opt_opacity === "undefined" ? "undefined" : _typeof(opt_opacity)) === 'object' && opt_opacity.value) {
          opt_opacity = opt_opacity.value;
        } else {
          opt_opacity = 100;
        }
      }

      r = bigint >> 16 & 255;
      g = bigint >> 8 & 255;
      b = bigint & 255;
      a = opt_opacity ? opt_opacity / 100 : 1;
      if (opt_array) {
        return [r, g, b, a];
      }

      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    },

    /**
     * Reduce a defined style, to a simpler version.
     *
     * The reduced style is the first style of the defined styleset,
     * with a 1px thick stroke and a circle with a 5px radius.
     *
     * This can be used to display additional geometries with a main-geometry,
     * without having to define a whole new style.
     *
     * @param   {number|string}           styleId  [description]
     *
     * @return  {array<ol.style.Style>}            [description]
     */
    reduceStyle: function reduceStyle(styleId) {
      var style, reducedStyle, fillStyle, strokeStyle;

      if (!c4g.maps.locationStyles[styleId] || !c4g.maps.locationStyles[styleId].style) {
        return [];
      }

      style = c4g.maps.locationStyles[styleId].style()[0];

      fillStyle = style.getFill();
      strokeStyle = style.getStroke();
      strokeStyle.setWidth(1);

      reducedStyle = new ol.style.Style({
        image: new ol.style.Circle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: 5
        }),
        // text: style.getText(),
        stroke: strokeStyle,
        fill: fillStyle
      });

      return [reducedStyle];
    }, // end of "reduceStyle"

    /**
     * Measure the dimensions of the given geometry.
     *
     * If the geometry is a `LineString` the function will measure its length,
     * is it a `Polygon` it will measure the acreage,
     * otherwise it will return `0`.
     *
     * If the optional `opt_forceLineMeasure` parameter is `true`
     * and the geometry is a `Polygon` it will measure its perimeter instead
     * of its acreage.
     *
     * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
     * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
     *
     * @return  {array<string>|number}                                       [description]
     */
    measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
      var value, sphere, coordinates, coord1, coord2, result, i;

      if (!geometry) {
        return false;
      }

      //sphere = new ol.Sphere(6378137);
      result = {};

      if (geometry instanceof ol.geom.LineString || geometry instanceof ol.geom.Polygon && opt_forceLineMeasure) {

        coordinates = geometry.getCoordinates();
        if (geometry instanceof ol.geom.Polygon) {
          coordinates = coordinates[0];
        }
        value = 0;
        for (i = 0; i < coordinates.length - 1; i += 1) {
          coord1 = ol.proj.transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
          coord2 = ol.proj.transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
          value += ol.sphere.getDistance(coord1, coord2, 6378137);
        }
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 1000) {
          result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else if (geometry instanceof ol.geom.Polygon) {
        //geometry = /** @type {ol.geom.Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
        //coordinates = geometry.getLinearRing(0).getCoordinates();
        value = Math.abs(ol.sphere.getArea(geometry));
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle && opt_forceSurfaceMeasure) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        value = Math.PI * Math.sqrt(value);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (result.rawValue > 10000) {
          result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else {
        result = 0;
      }

      return result;
    },

    /**
     * Calculate extent for an array of geometries.
     *
     * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
     *
     * @return  {ol.Extent}                                      [description]
     */
    getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
      var extentSource;

      if (!arrGeometries) {
        console.warn('Geometries missing for extent calculation');
        return false;
      }

      extentSource = new ol.source.Vector();
      extentSource.addFeatures(arrGeometries);

      return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
    }, // end of getExtentForGeometries()

    /**
     * Fit view of `map` to a given array of `extents`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {object}     extents                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {integer}    opt_animationDuration  [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
      var view, padding, extent, key;

      if (!extents || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }
      //extent = ol.extent.createEmpty();

      for (key in extents) {
        if (extents.hasOwnProperty(key)) {
          if (typeof extent === "undefined") {
            extent = extents[key];
          } else {
            ol.extent.extend(extent, extents[key]);
          }
        }
      }

      this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
    }, // end of fitToExtents

    /**
     * Fit view of `map` to a given `extent`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {ol.Extent}  extent                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {array}      opt_padding            [description]
     * @param   {integer}    opt_animationDuration  [description]
     * @param   {integer}    opt_minZoom            [description]
     * @param   {integer}    opt_maxZoom            [description]
     * @param   {integer}    opt_minResolution      [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
      var view, padding, fitOptions;

      if (!extent || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }

      view = map.getView();

      fitOptions = {
        'padding': opt_padding || [25, 25, 25, 25]
      };

      if (opt_minResolution && opt_minResolution > 0) {
        fitOptions.minResolution = opt_minResolution;
      }

      if (opt_minZoom && opt_minZoom >= 0) {
        fitOptions.minZoom = opt_minZoom;
      }

      if (opt_maxZoom && opt_maxZoom >= 0) {
        fitOptions.maxZoom = opt_maxZoom;
      }

      // animate the "fitting" when a duration is given and its greater than 0
      if (opt_animationDuration && opt_animationDuration > 0) {
        view.animate({
          start: +new Date(),
          duration: opt_animationDuration,
          resolution: view.getResolution(),
          center: [0, 0]
          //rotation: Math.PI
        });
        // map.beforeRender(
        //     ol.animation.pan({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       source: view.getCenter()
        //     }),
        //     ol.animation.zoom({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       resolution: view.getResolution()
        //     })
        // );
      }

      try {
        view.fit(extent, map.getSize(), { padding: [25, 25, 25, 25] });
        //view.fit(extent, map.getSize());
        //view.setZoom(view.getZoom()-1);
        return true;
      } catch (e) {
        return false;
      }
    }, // end of fitToExtent()

    /**
     * Convenience function to run all placeholder functions at once.
     *
     * @param   {string}                      strInput   [description]
     * @param   {ol.Feature}                  feature    [description]
     * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
     *
     * @return  {string}                                 [description]
     */
    replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer) {
      var strOutput;

      // only check the first two parameters as they will be used by all placeholder-functions
      // -> for performance
      if (!strInput || !feature) {
        return strInput;
      }

      strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
      strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
      strOutput = this.replaceAttributePlaceholders(strOutput, feature);

      return strOutput;
    }, // end of replaceAllPlaceholders()

    /**
     * Replace every occurance of `${FNfunctionName}`, in `strInput`,
     * with the result of `window.functionName(feature, style)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     * Style will be taken either from the feature, or the layer.
     *
     * @param   {string}          strInput  [description]
     * @param   {ol.Feature}      feature   [description]
     * @param   {ol.layer.Layer}  layer     [description]
     *
     * @return  {string}                    [description]
     */
    replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer) {
      var strOutput;

      if (!strInput || !feature || !layer) {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
        var style;

        // check if function exists
        if (typeof window[functionName] === 'function') {
          // search style
          if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
            style = feature.getStyle();
          } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
            style = layer.getStyle();
          } else {
            return '';
          }
          return window[functionName](feature, style);
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceFunctionPlaceholders()

    /**
     * Replace placeholders, in `strInput`, for variables set by the geoEditor.
     * Valid placeholders are: ([key] represents the stringname of the variables key)
     *   `${EL[key]}`   =>  Label for the variable
     *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
     *   `${EV[key]}`   =>  Value of the variable
     *   `${EVV[key]}`  =>  Same as `${EV[key]}`
     *
     * If no appropriate value can be found for a placeholder
     * it will simply be removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
        var editorVars, i;

        // check if feature has editorVars
        if (feature.get('editorVars')) {
          editorVars = feature.get('editorVars');
          // search for editorVar with key == evKey
          for (i = 0; i < editorVars.length; i += 1) {
            if (editorVars[i].key === evKey) {
              // if type is 'EVL' display label only if a value is set too
              if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
                return editorVars[i].label;
              } else {
                return editorVars[i].value;
              }
            }
          }
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceEditorVarsPlaceholders()

    /**
     * Replace every occurance of `${attr}`, in `strInput`,
     * with the result of `feature.get(attr)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
        return feature.get(attr) || '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceAttributePlaceholders()

    objectToArray: function objectToArray(object) {
      if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
        object = Object.keys(object).map(function (key) {
          return object[key];
        });
      }
      return object;
    }, // end of objectToArray()

    getVectorLayer: function getVectorLayer(source, style) {
      var fnStyle;

      // make sure that the style is a function
      if (typeof style === 'function') {
        fnStyle = style;
      } else if (style !== undefined) {
        fnStyle = function fnStyle() {
          return style;
        };
      }

      return new ol.layer.Vector({
        source: source,
        style: fnStyle
      });
    },
    // end of "getVectorLayer()"

    /**
     * Extracts the subdomain from the current request host and returns it.
     * @returns {string | *}
     */
    getCurrentSubdomain: function getCurrentSubdomain() {
      return window.location.href;
    },


    redrawMapView: function redrawMapView(mapController) {
      var mapData = mapController.data;
      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
      mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;
      $(controlContainerTopLeft).after(controlContainerBottomLeft);
      mapController.leftSlideElements.push(controlContainerBottomLeft);

      var controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE;

      if (mapData.scaleline) {
        mapController.map.removeControl(mapController.controls.scaleline);
        mapController.controls.scaleline = new ol.control.ScaleLine({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeft,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.scaleline);
      }

      $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);

      if (mapData.zoomlevel) {
        mapController.map.removeControl(mapController.controls.zoomlevel);
        mapController.controls.zoomlevel = new __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__["Zoomlevel"]({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.zoomlevel);
      }

      if (mapData.mouseposition) {
        mapController.map.removeControl(mapController.controls.mouseposition);
        mapController.controls.mouseposition = new ol.control.MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: ol.coordinate.toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.mouseposition);
      }
    },
    getValue: function getValue(key) {
      return localStorage[key] || '';
    },
    storeValue: function storeValue(key, value) {
      localStorage[key] = value; // only strings
    }
  });
})(jQuery, this.c4g);

var utils = this.c4g.maps.utils;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjBlMTcxOTUyZjkxNDhlMDQ4NjkiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1iYXNlbGF5ZXJzd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnN0YW50IiwiJCIsImkxOG4iLCJleHRlbmQiLCJMQU5HIiwiTkFNRSIsIkhJREUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfRURJVE9SIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJDVFJMX0lORk9QQUdFIiwiQ1RSTF9BRERJVElPTkFMUEFORUwiLCJDVFJMX0FDQ09VTlQiLCJDVFJMX1pPT01MRVZFTCIsIkNUUkxfTU9VU0VDT09SRFMiLCJDVFJMX0dFT1NFQVJDSCIsIkNUUkxfU1RBUlRfU0VBUkNIIiwiQ1RSTF9PVkVSVklFV01BUCIsIkNUUkxfR0VPQk9PS01BUktTIiwiQ1RSTF9TSURFQk9BUkQiLCJDVFJMX1NUQVJCT0FSRCIsIkNUUkxfQVRUUklCVVRJT04iLCJDVFJMX0dSSUQiLCJDVFJMX1BFUk1BTElOSyIsIkNUUkxfRlVMTFNDUkVFTiIsIkNUUkxfUFJJTlQiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0JBU0VMQVlFUiIsIlNUQVJCT0FSRF9MQVlFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTSURFQk9BUkQiLCJST1VURVJfVklFV19BRERSRVNTX0lOUFVUIiwiUk9VVEVSX0ZST01fTEFCRUwiLCJST1VURVJfT1ZFUl9MQUJFTCIsIlJPVVRFUl9UT19MQUJFTCIsIlJPVVRFUl9DTEVBUl9USVRMRSIsIlJPVVRFUl9DTEVBUl9IVE1MIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX0ZST00iLCJST1VURVJfVE8iLCJST1VURVJfRklORF9ST1VURSIsIlJPVVRFUl9MT0NfUk9VVEVfVE8iLCJST1VURVJfUk9VVEVERVNDIiwiUk9VVEVSX1JPVVRFTkFNRSIsIlJPVVRFUl9ESVNUQU5DRSIsIlJPVVRFUl9USU1FIiwiUk9VVEVSX1JFVl9HRU9DT0RJTkciLCJST1VURVJfRVJST1JfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9TRUFSQ0hJTkciLCJST1VURVJfRVJST1JfU0VBUkNISU5HIiwiUk9VVEVSX0NBTENfUk9VVEUiLCJST1VURVJfRVJST1JfQ0FMQ19ST1VURSIsIk1FQVNVUkVUT09MUyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJHRU9CT09LTUFSS1NfUExBQ0VIT0xERVIiLCJJTkZPUEFHRSIsIkFERElUSU9OQUxQQU5FTCIsIkFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwiTk9ORSIsImpRdWVyeSIsImxhbmdDb25zdGFudHMiLCJjc3MiLCJPUEVOIiwiQ0xPU0VBQkxFIiwiRU5BQkxFRCIsIkRJU0FCTEVEIiwiSUNPTiIsIkNPTlRST0wiLCJDT1BZIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJMT0FESU5HIiwiQU5JTUFUSU9OX1NQSU4iLCJMQVJHRSIsIlNNQUxMIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiQVRUUklCVVRJT05fTE9HTyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsIkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQiLCJFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkciLCJFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT04iLCJFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRSIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfRFJBV19PUFRJT05TIiwiR0VPU0VBUkNIIiwiR0VPU0VBUkNIX1dSQVBQRVIiLCJHRU9TRUFSQ0hfVFJJR0dFUiIsIkdFT1NFQVJDSF9TVEFSVCIsIkdSQVRJQ1VMRSIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUUiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUiIsIlRPT0xUSVBfUE9QVVAiLCJaT09NX0xFVkVMIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfQ0xFQVIiLCJST1VURVJfQlVUVE9OQkFSIiwiUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUiIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX0hHViIsIlJPVVRFUl9QUk9GSUxFX0JJS0UiLCJST1VURVJfUFJPRklMRV9GT09UIiwiUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU0iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU4iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9PVkVSTEFZQ09OVEFJTkVSIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRSIsIk9MX1ZJRVdQT1JUIiwiT0xfWk9PTSIsIk9MX1pPT01fSU4iLCJPTF9aT09NX0VYVCIsIk9MX1pPT01fSE9NRSIsIk9MX1pPT01fUE9TIiwiT0xfWk9PTV9XSVRIX0VYVCIsIk9MX1pPT01fV0lUSF9IT01FIiwiT0xfWk9PTV9XSVRIX1BPUyIsIk9MX1pPT01fU0xJREVSIiwiT0xfWk9PTV9XSVRIX1NMSURFUiIsImNzc0NvbnN0YW50cyIsImNvbnRyb2wiLCJzdGFyYm9hcmRwbHVnaW4iLCJCYXNlbGF5ZXJzd2l0Y2hlciIsInN0YXJib2FyZCIsImNvbnNvbGUiLCJ3YXJuIiwiaW5pdGlhbGl6ZWQiLCJiYXNlbGF5ZXJzIiwicHJveHkiLCJvcHRpb25zIiwibWFwQ29udHJvbGxlciIsImNyZWF0ZSIsImxvYWRDb250ZW50IiwicHJvdG90eXBlIiwic2VsZiIsImNvbnRlbnRXcmFwcGVyIiwiY29udGVudEhlYWRsaW5lIiwiY29udGVudEluZm8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJiYXNlbGF5ZXJTd2l0Y2hlclRpdGxlIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50RGl2IiwidmlldyIsImFkZFZpZXciLCJuYW1lIiwidHJpZ2dlckNvbmZpZyIsInRpcExhYmVsIiwid2l0aEhlYWRsaW5lIiwic2VjdGlvbkVsZW1lbnRzIiwic2VjdGlvbiIsImNvbnRlbnRDb250YWluZXIiLCJlbGVtZW50IiwidG9wVG9vbGJhciIsInZpZXdUcmlnZ2VyQmFyIiwiYWN0aXZhdGUiLCJzZXRDb250ZW50IiwibmV3Q29udGVudCIsImZpcnN0Q2hpbGQiLCJyZXBsYWNlQ2hpbGQiLCJlIiwibWVzc2FnZSIsImZuRHJhd0NvbnRlbnQiLCJzcGlubmVyIiwic2hvdyIsImJhc2VsYXllcklkcyIsImJhc2VMYXllckNvbnRyb2wiLCJhZGRDbGFzcyIsImFkZEl0ZW1zIiwiaGlkZSIsInVwZGF0ZSIsImJhc2VsYXllcnNfbG9hZGVkIiwiYmFzZWxheWVyQ29udHJvbGxlciIsImhvb2tfYmFzZWxheWVyX2xvYWRlZCIsInB1c2giLCJkcmF3Q29udGVudCIsImNvbnRlbnREYXRhIiwiaXRlbURhdGEiLCJ3cmFwcGVyRWxlbWVudCIsImkiLCJqIiwid3JhcHBlciIsIml0ZW0iLCJ1aWQiLCJsaXN0SXRlbSIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkRW50cnkiLCJ0b2dnbGUiLCJlbnRyeSIsIiRlbnRyeSIsImZpbHRlciIsImhhbmRsZUVudHJ5Q2xpY2siLCJoYW5kbGVDaGFuZ2VCYXNlbGF5ZXJWaXNpYmlsaXR5IiwicGFyc2VBc0xpc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXRlbVVpZCIsInNpYmxpbmdzIiwiYmFzZWxheWVySXRlbSIsInBhcmVudCIsImxlbmd0aCIsImhhc0NsYXNzIiwiYXJyQmFzZWxheWVycyIsImFjdGl2ZUJhc2VsYXllcklkIiwiaGFzT3ZlcmxheXMiLCJvdmVybGF5Q29udHJvbGxlciIsImFyck92ZXJsYXlzIiwiaGFzT3duUHJvcGVydHkiLCJtYXAiLCJyZW1vdmVMYXllciIsImxheWVyIiwicmVtb3ZlQ2xhc3MiLCJkYXRhIiwiY2FjaGluZyIsInV0aWxzIiwic3RvcmVWYWx1ZSIsInJpZ2h0U2xpZGVFbGVtZW50cyIsImZvckVhY2giLCJjb250YWluZXIiLCJvZmZzZXRXaWR0aCIsInNob3dCYXNlTGF5ZXIiLCJhZGRMYXllciIsImhvb2siLCJiYXNlbGF5ZXJfY2hhbmdlZCIsImNhbGxIb29rRnVuY3Rpb25zIiwiYmFzZWxheWVyQ29uZmlnIiwiaWQiLCJlbnRyeVdyYXBwZXIiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm92ZXJsYXlzIiwib3ZlcmxheUlkIiwiY2hhbmdlT3BhY2l0eSIsIm9wYWNpdHkiLCJvbiIsInZhbHVlIiwidW5kZWZpbmVkIiwiZGVmYXVsdF9iYXNlbGF5ZXIiLCJwYXJzZUludCIsImNsaWNrIiwiZHYiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbmtleXVwIiwiZmlsdGVyX3VsbGkiLCJzaG93U3VidHJlZSIsImdldENoaWxkcmVuQnlUYWdOYW1lIiwidGFnTmFtZSIsImZvdW5kIiwiY2hpbGRyZW4iLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoRmxhZ1VsIiwic3VidHJlZU1hdGNoZXMiLCJzdHlsZSIsImRpc3BsYXkiLCJpc01hdGNoIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbmRleE9mIiwidWwiLCJoYXNTdWJ0cmVlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJob29rX2Jhc2VsYXllcl92aXNpYmlsaXR5IiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwibWFwVmlldyIsInVuZGVmaW5lZEhUTUwiLCJnZXRab29tIiwib2wiLCJDb250cm9sIiwiY2FsbCIsInRhcmdldCIsImluaGVyaXRzIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0Iiwic2xpY2UiLCJnZXRVbmlxdWVJZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImVuY29kZUdlb0pzb25Qcm9wZXJ0eSIsImlucHV0Iiwib3V0cHV0IiwicmVwbGFjZSIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImhhc2giLCJzZWFyY2giLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwia2V5Iiwib2Zmc2V0Iiwib3JpZ2luU3RyaW5nIiwiZ2V0VXJsUGFyYW0iLCJyZWdFeCIsInN1YnN0cmluZyIsIlJlZ0V4cCIsImV4ZWMiLCJkZWx0YUVuY29kZSIsImFycklucHV0IiwiYXJyT3V0cHV0Iiwic29ydCIsImEiLCJiIiwiZGVsdGFEZWNvZGUiLCJpc05hTiIsImFyckhvb2tGdW5jdGlvbnMiLCJwYXJhbWV0ZXJzIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInJlZHVjZWRTdHlsZSIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibG9jYXRpb25TdHlsZXMiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwic2V0V2lkdGgiLCJTdHlsZSIsImltYWdlIiwiQ2lyY2xlIiwiZmlsbCIsInN0cm9rZSIsInJhZGl1cyIsIm1lYXN1cmVHZW9tZXRyeSIsImdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkaW5hdGVzIiwiY29vcmQxIiwiY29vcmQyIiwicmVzdWx0IiwiZ2VvbSIsIkxpbmVTdHJpbmciLCJQb2x5Z29uIiwiZ2V0Q29vcmRpbmF0ZXMiLCJwcm9qIiwidHJhbnNmb3JtIiwiZ2V0RGlzdGFuY2UiLCJyYXdWYWx1ZSIsInJvdW5kIiwidG9GaXhlZCIsImh0bWxWYWx1ZSIsImFicyIsImdldEFyZWEiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJnZXRSYWRpdXMiLCJlZGdlQ29vcmRpbmF0ZSIsIlBJIiwic3FydCIsImdldEV4dGVudEZvckdlb21ldHJpZXMiLCJhcnJHZW9tZXRyaWVzIiwiZXh0ZW50U291cmNlIiwic291cmNlIiwiVmVjdG9yIiwiYWRkRmVhdHVyZXMiLCJnZXRFeHRlbnQiLCJFeHRlbnQiLCJmaXRUb0V4dGVudHMiLCJleHRlbnRzIiwib3B0X3BhZGRpbmciLCJvcHRfYW5pbWF0aW9uRHVyYXRpb24iLCJwYWRkaW5nIiwiZXh0ZW50IiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwiZ2V0VmlldyIsIm1pblJlc29sdXRpb24iLCJtaW5ab29tIiwibWF4Wm9vbSIsImFuaW1hdGUiLCJzdGFydCIsIkRhdGUiLCJkdXJhdGlvbiIsInJlc29sdXRpb24iLCJnZXRSZXNvbHV0aW9uIiwiZml0IiwiZ2V0U2l6ZSIsInJlcGxhY2VBbGxQbGFjZWhvbGRlcnMiLCJzdHJJbnB1dCIsImZlYXR1cmUiLCJvcHRfbGF5ZXIiLCJzdHJPdXRwdXQiLCJyZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMiLCJyZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyIsInJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMiLCJmdW5jdGlvbk5hbWUiLCJ3aW5kb3ciLCJnZXRTdHlsZSIsImdldCIsImV2S2V5IiwiZWRpdG9yVmFycyIsImxhYmVsIiwiYXR0ciIsIm9iamVjdFRvQXJyYXkiLCJvYmplY3QiLCJPYmplY3QiLCJrZXlzIiwiZ2V0VmVjdG9yTGF5ZXIiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsImhyZWYiLCJyZWRyYXdNYXBWaWV3IiwibWFwRGF0YSIsImNvbnRyb2xDb250YWluZXJUb3BMZWZ0IiwiJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50IiwicHJlcGVuZCIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0IiwiYWZ0ZXIiLCJsZWZ0U2xpZGVFbGVtZW50cyIsImNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViIiwic2NhbGVsaW5lIiwicmVtb3ZlQ29udHJvbCIsImNvbnRyb2xzIiwiU2NhbGVMaW5lIiwiYWRkQ29udHJvbCIsImFwcGVuZCIsInpvb21sZXZlbCIsIm1vdXNlcG9zaXRpb24iLCJNb3VzZVBvc2l0aW9uIiwicHJvamVjdGlvbiIsImNvb3JkaW5hdGVGb3JtYXQiLCJjb29yZGluYXRlIiwidG9TdHJpbmdIRE1TIiwiZ2V0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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ckgsa0JBQVFpSyw2QkFGdUM7QUFHL0N0Syx5QkFBZTtBQUhnQyxTQUFkLENBQW5DO0FBS0E5SSxzQkFBY2lGLEdBQWQsQ0FBa0J3TyxVQUFsQixDQUE2QnpULGNBQWN1VCxRQUFkLENBQXVCSSxTQUFwRDtBQUNEOztBQUVELFVBQUlkLFFBQVFlLGFBQVosRUFBMkI7QUFDekI1VCxzQkFBY2lGLEdBQWQsQ0FBa0JxTyxhQUFsQixDQUFnQ3RULGNBQWN1VCxRQUFkLENBQXVCSyxhQUF2RDtBQUNBNVQsc0JBQWN1VCxRQUFkLENBQXVCSyxhQUF2QixHQUF1QyxJQUFJNUssR0FBRzFKLE9BQUgsQ0FBV3VVLGFBQWYsQ0FBNkI7QUFDbEVDLHNCQUFZLFdBRHNEO0FBRWxFQyw0QkFBa0IvSyxHQUFHZ0wsVUFBSCxDQUFjQyxZQUZrQztBQUdsRTlLLGtCQUFRaUssNkJBSDBEO0FBSWxFdEsseUJBQWU7QUFKbUQsU0FBN0IsQ0FBdkM7QUFNQTlJLHNCQUFjaUYsR0FBZCxDQUFrQndPLFVBQWxCLENBQTZCelQsY0FBY3VULFFBQWQsQ0FBdUJLLGFBQXBEO0FBQ0Q7QUFDRixLQWgzQnVDO0FBaTNCeENNLGNBQVUsa0JBQVVqSixHQUFWLEVBQWU7QUFDckIsYUFBT2tKLGFBQWFsSixHQUFiLEtBQXFCLEVBQTVCO0FBQ0gsS0FuM0J1QztBQW8zQnhDekYsZ0JBQVksb0JBQVV5RixHQUFWLEVBQWVyRSxLQUFmLEVBQXNCO0FBQ2hDdU4sbUJBQWFsSixHQUFiLElBQW9CckUsS0FBcEIsQ0FEZ0MsQ0FDTDtBQUM1QjtBQXQzQnVDLEdBQXpCLENBQWpCO0FBeTNCRCxDQS8zQkEsRUErM0JDN08sTUEvM0JELEVBKzNCUyxLQUFLeEksR0EvM0JkLENBQUQ7O0FBaTRCTyxJQUFJZ1csUUFBUSxLQUFLaFcsR0FBTCxDQUFTQyxJQUFULENBQWMrVixLQUExQixDIiwiZmlsZSI6ImM0Zy1tYXBzLWNvbnRyb2wtc3RhcmJvYXJkcGx1Z2luLWJhc2VsYXllcnN3aXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc3RhcmJvYXJkcGx1Z2luLWJhc2VsYXllcnN3aXRjaGVyLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYwZTE3MTk1MmY5MTQ4ZTA0ODY5IiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbiA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4gfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi9jNGctbWFwcy11dGlsc1wiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBleHRlbmRzIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgICBzdGFyYm9hcmRcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuc3RhcmJvYXJkcGx1Z2luLkJhc2VsYXllcnN3aXRjaGVyID0gZnVuY3Rpb24gKHN0YXJib2FyZCkge1xuICAgIGlmICghc3RhcmJvYXJkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBpbml0aWFsaXplIEJhc2VsYXllcnN3aXRjaGVyIHdpdGhvdXQgYSBzdGFyYm9hcmQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuYmFzZWxheWVycyA9IHt9O1xuXG4gICAgdGhpcy5zdGFyYm9hcmQgPSBzdGFyYm9hcmQ7XG4gICAgdGhpcy5wcm94eSA9IHN0YXJib2FyZC5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHk7XG5cbiAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIHRoaXMubG9hZENvbnRlbnQoKTtcbiAgfTtcblxuICAvLyBBZGQgbWV0aG9kc1xuICBjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5CYXNlbGF5ZXJzd2l0Y2hlci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLnN0YXJib2FyZHBsdWdpbi5CYXNlbGF5ZXJzd2l0Y2hlci5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbY3JlYXRlIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLFxuICAgICAgICAgIGNvbnRlbnRIZWFkbGluZSxcbiAgICAgICAgICBjb250ZW50SW5mbztcblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudEhlYWRsaW5lLmlubmVySFRNTCA9ICh0aGlzLnN0YXJib2FyZC5vcHRpb25zLmJhc2VsYXllclN3aXRjaGVyVGl0bGUgfHwgbGFuZ0NvbnN0YW50cy5TVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSKTtcbiAgICAgIGNvbnRlbnRIZWFkbGluZS5jbGFzc05hbWUgPSAnY29udGVudEhlYWRsaW5lJztcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkbGluZSk7XG5cbiAgICAgIHRoaXMuY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb250ZW50RGl2LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5TVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjtcbiAgICAgIGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGhpcy5jb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRJbmZvKTtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudERpdik7XG5cbiAgICAgIHNlbGYudmlldyA9IHNlbGYuc3RhcmJvYXJkLmFkZFZpZXcoe1xuICAgICAgICBuYW1lOiAnbGF5ZXJzd2l0Y2hlcicsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICB0aXBMYWJlbDogKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMuYmFzZWxheWVyU3dpdGNoZXJUaXRsZSB8fCBsYW5nQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIpLFxuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIsXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogc2VsZi5zdGFyYm9hcmQuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogY29udGVudFdyYXBwZXJ9LFxuICAgICAgICAgIHtzZWN0aW9uOiBzZWxmLnN0YXJib2FyZC50b3BUb29sYmFyLCBlbGVtZW50OiBzZWxmLnN0YXJib2FyZC52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbYWN0aXZhdGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnZpZXcuYWN0aXZhdGUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE86IFtzZXRDb250ZW50IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgbmV3Q29udGVudCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uIChuZXdDb250ZW50KSB7XG4gICAgICBpZiAobmV3Q29udGVudCkge1xuICAgICAgICBpZiAodHlwZW9mIG5ld0NvbnRlbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnREaXYuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGVudERpdi5yZXBsYWNlQ2hpbGQobmV3Q29udGVudCwgdGhpcy5jb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50RGl2LmFwcGVuZENoaWxkKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIEBUT0RPXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnREaXYuaW5uZXJIVE1MO1xuICAgIH0sXG5cbiAgICBsb2FkQ29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgZm5EcmF3Q29udGVudDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnN0YXJib2FyZC5zcGlubmVyLnNob3coKTtcblxuICAgICAgZm5EcmF3Q29udGVudCA9IGZ1bmN0aW9uIChiYXNlbGF5ZXJJZHMpIHtcbiAgICAgICAgc2VsZi5iYXNlTGF5ZXJDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICQoc2VsZi5iYXNlTGF5ZXJDb250cm9sKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUUpO1xuICAgICAgICBzZWxmLnNldENvbnRlbnQoc2VsZi5iYXNlTGF5ZXJDb250cm9sKTtcblxuICAgICAgICBzZWxmLmFkZEl0ZW1zKGJhc2VsYXllcklkcywgc2VsZi5iYXNlTGF5ZXJDb250cm9sKTtcblxuICAgICAgICBzZWxmLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5zdGFyYm9hcmQuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgIHNlbGYuc3RhcmJvYXJkLnVwZGF0ZSgpO1xuICAgICAgfSAvLyBlbmQgb2YgXCJmbkRyYXdDb250ZW50KClcIlxuXG4gICAgICBpZiAodGhpcy5wcm94eS5iYXNlbGF5ZXJzX2xvYWRlZCkge1xuICAgICAgICBmbkRyYXdDb250ZW50KHRoaXMucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5iYXNlbGF5ZXJJZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm94eS5ob29rX2Jhc2VsYXllcl9sb2FkZWQucHVzaChmbkRyYXdDb250ZW50KTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJsb2FkQ29udGVudCgpXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPOiBbZHJhd0NvbnRlbnQgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7W3R5cGVdfSAgY29udGVudERhdGEgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkcmF3Q29udGVudDogZnVuY3Rpb24gKGNvbnRlbnREYXRhKSB7XG4gICAgICAvLyBQQVNTXG4gICAgfSwgLy8gZW5kIG9mIFwiZHJhd0NvbnRlbnQoKVwiXG5cbiAgICAvKipcbiAgICAgKiBAVE9ETzogW2FkZEl0ZW1zIGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSAgaXRlbURhdGEgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICB3cmFwcGVyRWxlbWVudCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkSXRlbXM6IGZ1bmN0aW9uIChpdGVtRGF0YSwgd3JhcHBlckVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGosXG4gICAgICAgICAgc2VsZixcbiAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgdWlkLFxuICAgICAgICAgIGxpc3RJdGVtLFxuICAgICAgICAgIGNoaWxkTGlzdCxcbiAgICAgICAgICBjaGlsZEl0ZW0sXG4gICAgICAgICAgY2hpbGRFbnRyeSxcbiAgICAgICAgICB0b2dnbGUsXG4gICAgICAgICAgZW50cnksXG4gICAgICAgICAgJGVudHJ5LFxuICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICBoYW5kbGVFbnRyeUNsaWNrLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZUJhc2VsYXllclZpc2liaWxpdHk7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBwYXJzZUFzTGlzdDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVFbnRyeUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHZhciBpdGVtVWlkLFxuICAgICAgICAgICAgc2libGluZ3MsXG4gICAgICAgICAgICBiYXNlbGF5ZXJJdGVtO1xuICAgICAgICAgIHNpYmxpbmdzID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpO1xuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8IHNpYmxpbmdzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYgKHNpYmxpbmdzW2ldICYmICQoc2libGluZ3NbaV0pLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5PUEVOKSkge1xuICAgICAgICAgICAgICAgICAgaWYoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbc2VsZi5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZF0gJiYgc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbc2VsZi5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZF0uaGFzT3ZlcmxheXMpe1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogaW4gc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbc2VsZi5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMpe1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3NlbGYucHJveHkuYWN0aXZlQmFzZWxheWVySWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzLmhhc093blByb3BlcnR5KGopKVxuICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcihzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1tzZWxmLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tqXS5sYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICQoc2libGluZ3NbaV0pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1VaWQgPSAkKHRoaXMpLmRhdGEoJ3VpZCcpO1xuXG4gICAgICAgICAgaWYgKHNlbGYuc3RhcmJvYXJkLm9wdGlvbnMuY2FjaGluZykge1xuICAgICAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdiYXNlbGF5ZXInLCBpdGVtVWlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIucmlnaHRTbGlkZUVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm94eS5vcHRpb25zLm1hcENvbnRyb2xsZXIucmlnaHRTbGlkZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3MoJ3JpZ2h0Jywgc2VsZi5zdGFyYm9hcmQuY29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoc2VsZi5zdGFyYm9hcmQuZWxlbWVudCkuY3NzKCdyaWdodCcsIHNlbGYuc3RhcmJvYXJkLmNvbnRhaW5lci5vZmZzZXRXaWR0aCk7XG5cbiAgICAgICAgICBpZiAoc2VsZi5wcm94eS5hY3RpdmVCYXNlbGF5ZXJJZCAhPT0gaXRlbVVpZCkge1xuICAgICAgICAgICAgc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLnNob3dCYXNlTGF5ZXIoaXRlbVVpZCk7XG4gICAgICAgICAgICBpZihzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1tpdGVtVWlkXS5oYXNPdmVybGF5cyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqIGluIHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW2l0ZW1VaWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzKXtcbiAgICAgICAgICAgICAgICAgIGlmKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW2l0ZW1VaWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzLmhhc093blByb3BlcnR5KGopKXtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3h5Lm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbaXRlbVVpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbal0ubGF5ZXIpOyAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG5cbiAgICAgICAgICAgIC8vIGlmKHRoaXMubmV4dFNpYmxpbmcpe1xuICAgICAgICAgICAgLy8gICAgIHZhciBjaGlsZHJlbiA9IHRoaXMubmV4dFNpYmxpbmcuY2hpbGROb2RlcztcbiAgICAgICAgICAgIC8vICAgICBmb3IoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgICAgICQoY2hpbGRyZW5baV0uZmlyc3RDaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBjNGcubWFwcy5ob29rLmJhc2VsYXllcl9jaGFuZ2VkID0gYzRnLm1hcHMuaG9vay5iYXNlbGF5ZXJfY2hhbmdlZCB8fCBbXTtcbiAgICAgICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKGM0Zy5tYXBzLmhvb2suYmFzZWxheWVyX2NoYW5nZWQsIGl0ZW1VaWQpO1xuICAgICAgICAgIH1cbiAgICAgIH07IC8vIGVuZCBvZiBcImhhbmRsZUVudHJ5Q2xpY2soKVwiXG5cbiAgICAgIGhhbmRsZUNoYW5nZUJhc2VsYXllclZpc2liaWxpdHkgPSBmdW5jdGlvbiAoYmFzZWxheWVyQ29uZmlnKSB7XG4gICAgICAgIHZhciBpZDtcblxuICAgICAgICBmb3IgKGlkIGluIHNlbGYuYmFzZWxheWVycykge1xuICAgICAgICAgIGlmIChzZWxmLmJhc2VsYXllcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT09IGJhc2VsYXllckNvbmZpZy5pZCkge1xuICAgICAgICAgICAgICBzZWxmLmJhc2VsYXllcnNbaWRdLiRlbnRyeS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5iYXNlbGF5ZXJzW2lkXS4kZW50cnkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgd3JhcHBlciA9IG9wdGlvbnMucGFyc2VBc0xpc3QgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGlmIChpdGVtRGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1EYXRhLmxlbmd0aDsgaSArPSAxKSB7XG5cbiAgICAgICAgICB1aWQgPSBpdGVtRGF0YVtpXTtcbiAgICAgICAgICB0aGlzLmJhc2VsYXllcnNbdWlkXSA9IHt9O1xuXG4gICAgICAgICAgbGlzdEl0ZW0gPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRoaXMuYmFzZWxheWVyc1t1aWRdLmVudHJ5V3JhcHBlciA9IGxpc3RJdGVtO1xuICAgICAgICAgIGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgICAgICAgZW50cnkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5uYW1lKSk7XG4gICAgICAgICAgJChlbnRyeSkuZGF0YSgnaWQnLCB1aWQpO1xuICAgICAgICAgIGlmKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0uaGFzT3ZlcmxheXMpe1xuXG5cbiAgICAgICAgICAgIGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7b3B0aW9ucy5wYXJzZUFzTGlzdCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcihqID0gMDsgaiA8IHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICBjaGlsZEl0ZW0gPSBvcHRpb25zLnBhcnNlQXNMaXN0ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICBjaGlsZEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICBpZihzZWxmLnByb3h5LmFjdGl2ZUJhc2VsYXllcklkID09IHVpZCl7XG4gICAgICAgICAgICAgICAgICAkKGNoaWxkRW50cnkpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgbGV0IG92ZXJsYXlJZCA9IHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0uaWQ7XG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzW292ZXJsYXlJZF0uY2hhbmdlT3BhY2l0eShzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlzW2pdLm9wYWNpdHkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAkKGNoaWxkRW50cnkpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5JTkFDVElWRSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjaGlsZEVudHJ5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0ubmFtZSkpO1xuICAgICAgICAgICAgICAkKGNoaWxkRW50cnkpLmRhdGEoJ2lkJyxzZWxmLnByb3h5LmJhc2VsYXllckNvbnRyb2xsZXIuYXJyQmFzZWxheWVyc1t1aWRdLm92ZXJsYXlzW2pdLmlkKTtcbiAgICAgICAgICAgICAgJChjaGlsZEVudHJ5KS5kYXRhKCdwaWQnLHVpZCk7XG4gICAgICAgICAgICAgIHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc05hbWUgPSAnYzRnLW92ZXJsYXktdG9nZ2xlJztcbiAgICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhbmdlJyk7XG4gICAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ21pbicsMCk7XG4gICAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ21heCcsMTAwKTtcbiAgICAgICAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgndmFsdWUnLHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheXNbal0ub3BhY2l0eSk7XG4gICAgICAgICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ3N0ZXBzJywxMCk7XG4gICAgICAgICAgICAgICQodG9nZ2xlKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzWyQodGhpcykucGFyZW50KCkuZGF0YSgncGlkJyldLm92ZXJsYXlDb250cm9sbGVyLmFyck92ZXJsYXlzWyQodGhpcykucGFyZW50KCkuZGF0YSgnaWQnKV0uY2hhbmdlT3BhY2l0eSh0aGlzLnZhbHVlKVxuICAgICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAgICAgY2hpbGRFbnRyeS5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGRFbnRyeSk7XG4gICAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmRDaGlsZChjaGlsZEl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICBpZihjaGlsZExpc3Qpe1xuICAgICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGlsZExpc3QpO1xuICAgICAgICAgICAgICBjaGlsZExpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGVudHJ5ID0gJChlbnRyeSk7XG4gICAgICAgICAgdGhpcy5iYXNlbGF5ZXJzW3VpZF0uJGVudHJ5ID0gJGVudHJ5O1xuXG4gICAgICAgICAgaWYgKHRoaXMuc3RhcmJvYXJkLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmRlZmF1bHRfYmFzZWxheWVyICYmIHBhcnNlSW50KHVpZCwgMTApID09PSBwYXJzZUludChzZWxmLnN0YXJib2FyZC5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5kZWZhdWx0X2Jhc2VsYXllciwgMTApKSB7XG4gICAgICAgICAgICAkZW50cnkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAkKGxpc3RJdGVtKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgICAgICAgIGlmKHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0uaGFzT3ZlcmxheXMpe1xuICAgICAgICAgICAgICAgICAgZm9yKGxldCBqIGluIHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5cy5oYXNPd25Qcm9wZXJ0eShqKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm94eS5iYXNlbGF5ZXJDb250cm9sbGVyLmFyckJhc2VsYXllcnNbdWlkXS5vdmVybGF5Q29udHJvbGxlci5hcnJPdmVybGF5c1tqXS5jaGFuZ2VPcGFjaXR5KHNlbGYucHJveHkuYmFzZWxheWVyQ29udHJvbGxlci5hcnJCYXNlbGF5ZXJzW3VpZF0ub3ZlcmxheUNvbnRyb2xsZXIuYXJyT3ZlcmxheXNbal0ub3BhY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZW50cnkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAgICAgICAgICQobGlzdEl0ZW0pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGVudHJ5LmRhdGEoJ3VpZCcsIHVpZCk7XG4gICAgICAgICAgJGVudHJ5LmNsaWNrKGhhbmRsZUVudHJ5Q2xpY2spO1xuXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICAgIC8vIFN0YXJib2FyZCBGaWx0ZXJcbiAgICAgICAgICBpZiAodGhpcy5zdGFyYm9hcmQub3B0aW9ucy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgdmFyIGR2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGR2LmNsYXNzTmFtZSA9IFwiYzRnLXN0YXJib2FyZC1maWx0ZXIgYzRnLWNvbnRlbnQtc2VsZWN0XCI7XG4gICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICBmaWx0ZXIudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgZmlsdGVyLnBsYWNlaG9sZGVyID0gXCJcIjsgLy9Gb250IEF3ZXNvbWVcbiAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgIGkuY2xhc3NOYW1lID0gJ2ZhcyBmYS1maWx0ZXInO1xuICAgICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgZHYuYXBwZW5kQ2hpbGQoZmlsdGVyKTtcbiAgICAgICAgICAgICAgZHYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgICAgICAgIGZpbHRlci5vbmtleXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlsdGVyX3VsbGkoZWxlbWVudCwgc2hvd1N1YnRyZWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhcHBseSBmaWx0ZXIgZm9yIHNob3J0IHNlYXJjaCB0ZXJtc1xuXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd1N1YnRyZWUgPSBzaG93U3VidHJlZSB8fCBmYWxzZTsgIC8vIHVzZWQgd2hpbGUgdHJhdmVyc2luZyBkb3duIHRoZSB0cmVlXG5cbiAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IChtb2RpZmllZDogZmlyc3QgZWxlbWVudCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRzLiBPbmx5IGZpbmRzIGNoaWxkcmVuIG9mIHRoZSBnaXZlbiBwYXJlbnQgZWxlbWVudCwgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICogbm8gZnVydGhlciBkZXNjZW5kYW50cyBsaWtlIGdldEVsZW1lbnRzQnlUYWdOYW1lIGRvZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2hpbGRyZW5CeVRhZ05hbWUoZWxlbWVudCwgdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbltpXS50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQucHVzaChlbGVtZW50LmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kWzBdOyAvLyAhISFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaEZsYWdVbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJ0cmVlTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIExJIGRvXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc01hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBjdXJyZW50IExJIGZvciBmaWx0ZXIgdGVybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW5baV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKVswXS5pbm5lckhUTUwudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBhIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2UgaWYgYSBzdWJ0cmVlIChVTCkgZXhpc3RzIGluIGN1cnJlbnQgTEkgKG1heCAxIGV4cGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVsID0gZ2V0Q2hpbGRyZW5CeVRhZ05hbWUoZWxlbWVudC5jaGlsZHJlbltpXSwgXCJ1bFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVjdXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc1N1YnRyZWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRyZWVNYXRjaGVzID0gZmlsdGVyX3VsbGkodWwsIHNob3dTdWJ0cmVlIHx8IGlzTWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzU3VidHJlZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXRjaCB8fCBzdWJ0cmVlTWF0Y2hlcyB8fCBzaG93U3VidHJlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRmxhZ1VsID0gdHJ1ZTsgLy8gdXNlZCB3aGlsZSB0cmF2ZXJzaW5nIHVwIHRoZSB0cmVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGN1cnJlbnQgTEkgdmlzaWJsZSBhbmQgb3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJjNGctb3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjNGctc3RhcmJvYXJkLWZpbHRlci1tYXRjaFwiKTsgLy8gYWx3YXlzIHJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc01hdGNoICYmIGZpbHRlci52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGN1cnJlbnQgTEkgaW52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYzRnLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImM0Zy1zdGFyYm9hcmQtZmlsdGVyLW1hdGNoXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hGbGFnVWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCByZWFjdCBpbW1lZGlhdGVseSBidXQgYWxsb3cgZm9yIHNvbWUga2V5c3Ryb2tlc1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gdHdvIG9yIHplcm8gbGV0dGVycyBhcmUgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLnZhbHVlLmxlbmd0aCAhPSAxKSBmaWx0ZXJfdWxsaShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYzRnLWJhc2VsYXllcnRyZWUgPiB1bDpudGgtY2hpbGQoMiknKSlcbiAgICAgICAgICAgICAgICAgIH0sIDM1MCk7XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChkdik7XG4gICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJveHkuaG9va19iYXNlbGF5ZXJfdmlzaWJpbGl0eS5wdXNoKGhhbmRsZUNoYW5nZUJhc2VsYXllclZpc2liaWxpdHkpO1xuICAgICAgfVxuICAgICAgd3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfSAvLyBlbmQgb2YgXCJhZGRJdGVtcygpXCJcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBCYXNlbGF5ZXJzd2l0Y2hlciA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5zdGFyYm9hcmRwbHVnaW4uQmFzZWxheWVyc3dpdGNoZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXN0YXJib2FyZHBsdWdpbi1iYXNlbGF5ZXJzd2l0Y2hlci5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1pvb21sZXZlbH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWxcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBjNGctTWFwcyB1dGlsaXR5IGZ1bmN0aW9uc1xuICAgKi9cbiAgYzRnLm1hcHMudXRpbHMgPSAkLmV4dGVuZChjNGcubWFwcy51dGlscywge1xuICAgIC8qKlxuICAgICAqICBDb252ZXJ0cyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgZ2l2ZW4gc3RyaW5nIHRvIHVwcGVyY2FzZSwgbGVhdmluZyB0aGUgcmVtYWluaW5nIHN0cmluZyB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiAgQHBhcmFtICAgIHtzdHJpbmd9ICAgIHRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZVxuICAgICAqXG4gICAgICogIEByZXR1cm4gICB7c3RyaW5nfSAgICB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGFuIHVuaXF1ZSBpZC5cbiAgICAgKlxuICAgICAqIFRoZSBpZCBpcyA5IGNoYXJhY3RlcnMgbG9uZyBhbmQgcHJlZml4ZWQgd2l0aCBhbiB1bmRlcnNjb3JlLlxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gIFRoZSBnZW5lcmF0ZWQgaWQuXG4gICAgICovXG4gICAgZ2V0VW5pcXVlSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gICAgICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAgICAgLy8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG4gICAgICByZXR1cm4gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBub3QgYnJlYWsgdGhlIENvZGUuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcIC0+IFxcXFw7XG4gICAgICogICBcIiAtPiAnJztcbiAgICAgKiAgIMOEIC0+ICZBdW1sO1xuICAgICAqICAgw6QgLT4gJmF1bWw7XG4gICAgICogICDDliAtPiAmT3VtbDtcbiAgICAgKiAgIMO2IC0+ICZvdW1sO1xuICAgICAqICAgw5wgLT4gJlV1bWw7XG4gICAgICogICDDvCAtPiAmdXVtbDtcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZW5jb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcL2csICdcXFxcXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFxcIi9nLCAnXFwnXFwnJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DhC9nLCAnJkF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DpC9nLCAnJmF1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dli9nLCAnJk91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/Dti9nLCAnJm91bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DnC9nLCAnJlV1bWw7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC/DvC9nLCAnJnV1bWw7J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZW5jb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIGJlIGRpc3BsYXllZCBjb3JyZWN0bHkuXG4gICAgICogVHJhbnNmb3JtczpcbiAgICAgKiAgIFxcXFwgICAgIC0+IFxcO1xuICAgICAqICAgJycgICAgIC0+IFwiO1xuICAgICAqICAgJkF1bWw7IC0+IMOEXG4gICAgICogICAmYXVtbDsgLT4gw6RcbiAgICAgKiAgICZPdW1sOyAtPiDDllxuICAgICAqICAgJm91bWw7IC0+IMO2XG4gICAgICogICAmVXVtbDsgLT4gw5xcbiAgICAgKiAgICZ1dW1sOyAtPiDDvFxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXFxcXFxcXC9nLCAnXFxcXCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvXFwnXFwnL2csICdcXFwiJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mQXVtbDsvZywgJ8OEJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mYXVtbDsvZywgJ8OkJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mT3VtbDsvZywgJ8OWJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mb3VtbDsvZywgJ8O2J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mVXVtbDsvZywgJ8OcOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJnV1bWw7L2csICfDvCdcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGRlY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3IgcmVwbGFjZSBhbiBVUkwtcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAgdGhlIGdpdmVuIHBhcmFtZXRlciwgYHBhcmFtYCxcbiAgICAgKiB3aWxsIGJlIGFwcGxpZWQgYXMgXCJoYXNoLXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzI3BhcmFtXG4gICAgICogTm90ZSwgdGhhdCBhbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogd2hlcmVhcyBleGlzdGluZyBcIkdFVC1wYXJhbWV0ZXJzXCIgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgc2V0LCBpdCB3aWxsIGJlIGFwcGxpZWQgYXMgXCJHRVQtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHM/b3B0X2dldEtleT1wYXJhbVxuICAgICAqIElmIHRoZSBrZXkgZGVzY3JpYmVkIGJ5IGBvcHRfZ2V0S2V5YCBpcyBhbHJlYWR5IGV4aXN0aW5nLCBpdHMgdmFsdWUgd2lsbCBiZSBvdmVycmlkZW4sXG4gICAgICogb3RoZXJ3aXNlIHRoZSBrZXktdmFsdWUtcGFpciB3aWxsIGJlIGFwcGVuZGVkIGFwcHJvcHJpYXRseS5cbiAgICAgKiBBbHJlYWR5IGV4aXN0aW5nIFwiaGFzaC1wYXJhbWV0ZXJzXCIgd2lsbCBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZXhlY3V0ZWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBuZXcgbGluayBhcyBgc3RyaW5nYCxcbiAgICAgKiBvdGhlcndpc2UgdGhlIFwiaHJlZi9sb2NhdGlvblwiIHdpbGwgYmUgY2hhbmdlZCBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlciwgd2hpY2ggY2FuIGNhdXNlIGEgcGFnZXJlbG9hZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIHBhcmFtICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW58c3RyaW5nfSAgb3B0X2dldEtleSAgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICogQHBhcmFtICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgb3B0X2V4ZWN1dGUgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgc2V0VXJsUGFyYW06IGZ1bmN0aW9uIChwYXJhbSwgb3B0X2dldEtleSwgb3B0X2V4ZWN1dGUpIHtcbiAgICAgIHZhciBsaW5rLFxuICAgICAgICAgIHNlYXJjaFBhcmFtLFxuICAgICAgICAgIHBhcmFtUmVwbGFjZWQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGluayA9IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgLy8gdXNlIGhhc2gtcGFyYW1ldGVyXG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IGxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhcmFtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlIEdFVC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIC8vIHRoZXJlIGFyZSBhbHJlYWR5IHNlYXJjaC1wYXJhbWV0ZXJzXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgIG9wdF9nZXRLZXkgPSBvcHRfZ2V0S2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgLy8gcmVwbGFjZSBwYXJhbWV0ZXIgaWYgYWxyZWFkeSBleGlzdGVudFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC8oW149XFw/XFwmXSspPShbXiZdKykvZ2ksXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBvcHRfZ2V0S2V5KSB7XG4gICAgICAgICAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBvdGhlcndpc2UgYXBwZW5kIGFzIG5ldyBwYXJhbWV0ZXJcbiAgICAgICAgICBpZiAoIXBhcmFtUmVwbGFjZWQpIHtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtICs9ICcmJyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHRoZSBvbmx5IHNlYXJjaC1wYXJhbWV0ZXIgaW4gdGhlIFVSTFxuICAgICAgICAgIHNlYXJjaFBhcmFtID0gJz8nICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRfZXhlY3V0ZSkge1xuICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaCA9IHNlYXJjaFBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gc2VhcmNoUGFyYW0gKyBsb2NhdGlvbi5oYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluaztcbiAgICB9LCAvLyBlbmQgb2Ygc2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCBvciBoYXNoIFVSTC1wYXJhbWV0ZXIgYXMgc3RyaW5nLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBoYXNoLXBhcmFtZXRlciBvZiB0aGUgVVJMIGlzIHJldHVybmVkLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHNlYXJjaCBmb3IgYSBHRVQtcGFyYW1ldGVyIGFuZCByZXR1cm4gaXRzIHZhbHVlLlxuICAgICAqXG4gICAgICogSWYgYSBwYXJhbWV0ZXIgaXMgbm90IGV4aXN0ZW50LCBvciBlbXB0eSwgYW4gZW1wdHkgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfHN0cmluZ30gIG9wdF9nZXRLZXkgIERlZmF1bHQ6IGB1bmRlZmluZWRgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb3VuZCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZ2V0VXJsUGFyYW06IGZ1bmN0aW9uIChvcHRfZ2V0S2V5KSB7XG4gICAgICB2YXIgcGFyYW0sXG4gICAgICAgICAgcmVnRXg7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICBwYXJhbSA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICBwYXJhbSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZ0V4ID0gbmV3IFJlZ0V4cCgnW1xcP1xcJl0nICsgb3B0X2dldEtleSArICc9KFteJl0rKScsICdpJyk7XG4gICAgICAgICAgcGFyYW0gPSByZWdFeC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcGFyYW0gPSBwYXJhbSA/IHBhcmFtWzFdIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWx0YS1lbmNvZGUgYW4gYXJyYXkgb2YgbnVtYmVycy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFycmF5IHdpbGwgYmUgc29ydGVkIChsb3dlc3QgdG8gaGlnaGVzdClcbiAgICAgKiBiZWZvcmUgZW5jb2RpbmcuXG4gICAgICpcbiAgICAgKiBTbyBhZnRlciB0aGUgZW5jb2RpbmcgdGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBvdXRwdXQgY29udGFpbnNcbiAgICAgKiB0aGUgc21hbGxlc3QgbnVtYmVyIG9mIHRoZSBzZXQgYW5kIGVhY2ggZm9sbG93aW5nIG51bWJlciBqdXN0XG4gICAgICogcmVwcmVzZW50cyB0aGUgb2Zmc2V0IHRvIGl0cyBwcmV2aW91cyBuZWlnaGJvci5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgbW9zdGx5IGVmZmljaWVudCBmb3IgaGlnaCBudW1iZXJzLCB0aGF0IGFyZSBcImNsb3NlIHRvIGVhY2ggb3RoZXJcIi5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICBbMTMzNywgMTEsIDEwMSwgMTIzLCA5NiwgNjksIDQyLCA0Ml1cbiAgICAgKiAgIHdpbGwgYmUgc29ydGVkXG4gICAgICogICBbMTEsIDQyLCA0MiwgNjksIDk2LCAxMDEsIDEyMywgMTMzN11cbiAgICAgKiAgIGFuZCBlbmNvZGVkIHRvXG4gICAgICogICBbMTEsIDMxLCAwLCAyNywgMjcsIDUsIDIyLCAxMjE0XVxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFFbmNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcnJJbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGFycklucHV0O1xuICAgICAgfVxuXG4gICAgICBhcnJJbnB1dC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH0pO1xuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IGFycklucHV0WzBdO1xuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IGFycklucHV0W2ldIC0gYXJySW5wdXRbaSAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRW5jb2RlKClcblxuICAgIC8qKlxuICAgICAqIERlY29kZSBhIGRlbHRhLWVuY29kZWQgYXJyYXkuXG4gICAgICogU2VlIGBkZWx0YUVuY29kZWAgZnVuY3Rpb24gZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YURlY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJPdXRwdXQgPSBbXTtcbiAgICAgIGFyck91dHB1dFswXSA9IHBhcnNlSW50KGFycklucHV0WzBdLCAxMCk7XG4gICAgICBpZiAoaXNOYU4oYXJySW5wdXRbMF0pKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBwYXJzZUludChhcnJJbnB1dFtpXSwgMTApICsgYXJyT3V0cHV0W2kgLSAxXTtcbiAgICAgICAgaWYgKGlzTmFOKGFyck91dHB1dFtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YURlY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgY2FsbCBmdW5jdGlvbnMgaW4gYGFyckhvb2tGdW5jdGlvbnNgIHdpdGggZ2l2ZW4gYHBhcmFtZXRlcnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PGZ1bmN0aW9uPn0gICBhcnJIb29rRnVuY3Rpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge21peGVkfSAgICAgICAgICAgICBwYXJhbWV0ZXJzICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY2FsbEhvb2tGdW5jdGlvbnM6IGZ1bmN0aW9uIChhcnJIb29rRnVuY3Rpb25zLCBwYXJhbWV0ZXJzKSB7XG4gICAgICB2YXIgajtcblxuICAgICAgaWYgKGFyckhvb2tGdW5jdGlvbnMgJiYgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcnJIb29rRnVuY3Rpb25zW2pdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcnJIb29rRnVuY3Rpb25zW2pdKHBhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBcImNhbGxIb29rRnVuY3Rpb25zKClcIlxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGhleC1mb3JtYXRlZCBjb2xvciB2YWx1ZSBpbnRvIHJnYmEoKS1mb3JtYXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIGhleCAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBvcHRfb3BhY2l0eSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldFJnYmFGcm9tSGV4QW5kT3BhY2l0eTogZnVuY3Rpb24gKGhleCwgb3B0X29wYWNpdHksIG9wdF9hcnJheSkge1xuXG4gICAgICB2YXIgYmlnaW50LCByLCBnLCBiLCBhO1xuXG4gICAgICBiaWdpbnQgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICBvcHRfb3BhY2l0eS52YWx1ZSA9IHBhcnNlSW50KG9wdF9vcGFjaXR5LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIHR5cGVvZiBvcHRfb3BhY2l0eSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRfb3BhY2l0eSA9PT0gJ29iamVjdCcgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IG9wdF9vcGFjaXR5LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHIgPSAoYmlnaW50ID4+IDE2KSAmIDI1NTtcbiAgICAgIGcgPSAoYmlnaW50ID4+IDgpICYgMjU1O1xuICAgICAgYiA9IGJpZ2ludCAmIDI1NTtcbiAgICAgIGEgPSBvcHRfb3BhY2l0eSA/IChvcHRfb3BhY2l0eSAvIDEwMCkgOiAxO1xuICAgICAgaWYob3B0X2FycmF5KXtcbiAgICAgICAgcmV0dXJuIFtyLGcsYixhXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIixcIiArIGEgKyBcIilcIjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVkdWNlIGEgZGVmaW5lZCBzdHlsZSwgdG8gYSBzaW1wbGVyIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBUaGUgcmVkdWNlZCBzdHlsZSBpcyB0aGUgZmlyc3Qgc3R5bGUgb2YgdGhlIGRlZmluZWQgc3R5bGVzZXQsXG4gICAgICogd2l0aCBhIDFweCB0aGljayBzdHJva2UgYW5kIGEgY2lyY2xlIHdpdGggYSA1cHggcmFkaXVzLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGFkZGl0aW9uYWwgZ2VvbWV0cmllcyB3aXRoIGEgbWFpbi1nZW9tZXRyeSxcbiAgICAgKiB3aXRob3V0IGhhdmluZyB0byBkZWZpbmUgYSB3aG9sZSBuZXcgc3R5bGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfHN0cmluZ30gICAgICAgICAgIHN0eWxlSWQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxvbC5zdHlsZS5TdHlsZT59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlZHVjZVN0eWxlOiBmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgdmFyIHN0eWxlLFxuICAgICAgICAgIHJlZHVjZWRTdHlsZSxcbiAgICAgICAgICBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlU3R5bGU7XG5cbiAgICAgIGlmICghYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0gfHwgIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUgPSBjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSgpWzBdO1xuXG4gICAgICBmaWxsU3R5bGUgPSBzdHlsZS5nZXRGaWxsKCk7XG4gICAgICBzdHJva2VTdHlsZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xuICAgICAgc3Ryb2tlU3R5bGUuc2V0V2lkdGgoMSk7XG5cbiAgICAgIHJlZHVjZWRTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgIGltYWdlOiBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcbiAgICAgICAgICBmaWxsOiBmaWxsU3R5bGUsXG4gICAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSksXG4gICAgICAgIC8vIHRleHQ6IHN0eWxlLmdldFRleHQoKSxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2VTdHlsZSxcbiAgICAgICAgZmlsbDogZmlsbFN0eWxlXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFtyZWR1Y2VkU3R5bGVdO1xuICAgIH0sIC8vIGVuZCBvZiBcInJlZHVjZVN0eWxlXCJcblxuICAgIC8qKlxuICAgICAqIE1lYXN1cmUgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdpdmVuIGdlb21ldHJ5LlxuICAgICAqXG4gICAgICogSWYgdGhlIGdlb21ldHJ5IGlzIGEgYExpbmVTdHJpbmdgIHRoZSBmdW5jdGlvbiB3aWxsIG1lYXN1cmUgaXRzIGxlbmd0aCxcbiAgICAgKiBpcyBpdCBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgdGhlIGFjcmVhZ2UsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIGAwYC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBvcHRpb25hbCBgb3B0X2ZvcmNlTGluZU1lYXN1cmVgIHBhcmFtZXRlciBpcyBgdHJ1ZWBcbiAgICAgKiBhbmQgdGhlIGdlb21ldHJ5IGlzIGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSBpdHMgcGVyaW1ldGVyIGluc3RlYWRcbiAgICAgKiBvZiBpdHMgYWNyZWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5nZW9tLkxpbmVTdHJpbmd8b2wuZ2VvbS5Qb2x5Z29ufSAgIGdlb21ldHJ5ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgICAgICAgICAgICAgb3B0X2ZvcmNlTGluZU1lYXN1cmUgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxzdHJpbmc+fG51bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgbWVhc3VyZUdlb21ldHJ5OiBmdW5jdGlvbiAoZ2VvbWV0cnksIG9wdF9mb3JjZUxpbmVNZWFzdXJlLCBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgIHNwaGVyZSxcbiAgICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgICBjb29yZDEsXG4gICAgICAgICAgY29vcmQyLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9zcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgcmVzdWx0ID0ge307XG5cbiAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZyB8fCAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24gJiYgb3B0X2ZvcmNlTGluZU1lYXN1cmUpKSB7XG5cbiAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICAgIGNvb3JkMSA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2ldLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIGNvb3JkMiA9IG9sLnByb2oudHJhbnNmb3JtKGNvb3JkaW5hdGVzW2kgKyAxXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICB2YWx1ZSArPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoY29vcmQxLCBjb29yZDIsIDYzNzgxMzcpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLlBvbHlnb24pIHtcbiAgICAgICAgLy9nZW9tZXRyeSA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyhnZW9tZXRyeS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpKTtcbiAgICAgICAgLy9jb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldExpbmVhclJpbmcoMCkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhvbC5zcGhlcmUuZ2V0QXJlYShnZW9tZXRyeSkpO1xuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlICYmIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFsdWUgPSBNYXRoLlBJICogTWF0aC5zcXJ0KHZhbHVlKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICAgIH1cblxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHJlc3VsdC5yYXdWYWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCgodmFsdWUgKiAxMDApIC8gMTAwKSAvIDEwMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZXh0ZW50IGZvciBhbiBhcnJheSBvZiBnZW9tZXRyaWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0FycmF5LjxvbC5nZW9tLnNpbXBsZUdlb21ldHJ5Pn0gIGFyckdlb21ldHJpZXMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtvbC5FeHRlbnR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllczogZnVuY3Rpb24gKGFyckdlb21ldHJpZXMpIHtcbiAgICAgIHZhciBleHRlbnRTb3VyY2U7XG5cbiAgICAgIGlmICghYXJyR2VvbWV0cmllcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0dlb21ldHJpZXMgbWlzc2luZyBmb3IgZXh0ZW50IGNhbGN1bGF0aW9uJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW50U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIGV4dGVudFNvdXJjZS5hZGRGZWF0dXJlcyhhcnJHZW9tZXRyaWVzKTtcblxuICAgICAgcmV0dXJuIGV4dGVudFNvdXJjZS5nZXRFeHRlbnQoKSB8fCBvbC5FeHRlbnQoWzAsIDAsIDAsIDBdKTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0RXh0ZW50Rm9yR2VvbWV0cmllcygpXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGFycmF5IG9mIGBleHRlbnRzYC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICBleHRlbnRzICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudHM6IGZ1bmN0aW9uIChleHRlbnRzLCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZXh0ZW50LFxuICAgICAgICAgIGtleTtcblxuICAgICAgaWYgKCFleHRlbnRzIHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL2V4dGVudCA9IG9sLmV4dGVudC5jcmVhdGVFbXB0eSgpO1xuXG4gICAgICBmb3IgKGtleSBpbiBleHRlbnRzKSB7XG4gICAgICAgIGlmIChleHRlbnRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGV4dGVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW50ID0gZXh0ZW50c1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbC5leHRlbnQuZXh0ZW5kKGV4dGVudCwgZXh0ZW50c1trZXldKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpdFRvRXh0ZW50KGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgNSwgMCwgMCwgMik7XG5cblxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudHNcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYGV4dGVudGAuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuRXh0ZW50fSAgZXh0ZW50ICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLk1hcH0gICAgIG1hcCAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHthcnJheX0gICAgICBvcHRfcGFkZGluZyAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5ab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWF4Wm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblJlc29sdXRpb24gICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnQ6IGZ1bmN0aW9uIChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbiwgb3B0X21pblpvb20sIG9wdF9tYXhab29tLCBvcHRfbWluUmVzb2x1dGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBmaXRPcHRpb25zO1xuXG4gICAgICBpZiAoIWV4dGVudCB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2aWV3ID0gbWFwLmdldFZpZXcoKTtcblxuICAgICAgZml0T3B0aW9ucyA9IHtcbiAgICAgICAgJ3BhZGRpbmcnOiBvcHRfcGFkZGluZyB8fCBbMjUsIDI1LCAyNSwgMjVdXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0X21pblJlc29sdXRpb24gJiYgb3B0X21pblJlc29sdXRpb24gPiAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluUmVzb2x1dGlvbiA9IG9wdF9taW5SZXNvbHV0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21pblpvb20gJiYgb3B0X21pblpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblpvb20gPSBvcHRfbWluWm9vbTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9tYXhab29tICYmIG9wdF9tYXhab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5tYXhab29tID0gb3B0X21heFpvb207XG4gICAgICB9XG5cbiAgICAgIC8vIGFuaW1hdGUgdGhlIFwiZml0dGluZ1wiIHdoZW4gYSBkdXJhdGlvbiBpcyBnaXZlbiBhbmQgaXRzIGdyZWF0ZXIgdGhhbiAwXG4gICAgICBpZiAob3B0X2FuaW1hdGlvbkR1cmF0aW9uICYmIG9wdF9hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICBjZW50ZXI6IFswLCAwXVxuICAgICAgICAgIC8vcm90YXRpb246IE1hdGguUElcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1hcC5iZWZvcmVSZW5kZXIoXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24ucGFuKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICBzb3VyY2U6IHZpZXcuZ2V0Q2VudGVyKClcbiAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnpvb20oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCksIHtwYWRkaW5nOiBbMjUsIDI1LCAyNSwgMjVdfSk7XG4gICAgICAgIC8vdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgICAgLy92aWV3LnNldFpvb20odmlldy5nZXRab29tKCktMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50KClcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJ1biBhbGwgcGxhY2Vob2xkZXIgZnVuY3Rpb25zIGF0IG9uY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBzdHJJbnB1dCAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICAgICAgICAgICAgICBmZWF0dXJlICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXIgfCB1bmRlZmluZWR9ICBvcHRfbGF5ZXIgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICAvLyBvbmx5IGNoZWNrIHRoZSBmaXJzdCB0d28gcGFyYW1ldGVycyBhcyB0aGV5IHdpbGwgYmUgdXNlZCBieSBhbGwgcGxhY2Vob2xkZXItZnVuY3Rpb25zXG4gICAgICAvLyAtPiBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycyhzdHJJbnB1dCwgZmVhdHVyZSwgb3B0X2xheWVyKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQWxsUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke0ZOZnVuY3Rpb25OYW1lfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGB3aW5kb3cuZnVuY3Rpb25OYW1lKGZlYXR1cmUsIHN0eWxlKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqIFN0eWxlIHdpbGwgYmUgdGFrZW4gZWl0aGVyIGZyb20gdGhlIGZlYXR1cmUsIG9yIHRoZSBsYXllci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wubGF5ZXIuTGF5ZXJ9ICBsYXllciAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgIWxheWVyKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7Rk4oW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGZ1bmN0aW9uTmFtZSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZnVuY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1tmdW5jdGlvbk5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBzdHlsZVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgZmVhdHVyZS5nZXRTdHlsZSgpICYmIHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlKCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGZlYXR1cmUuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGF5ZXIuZ2V0U3R5bGUgPT09ICdmdW5jdGlvbicgJiYgbGF5ZXIuZ2V0U3R5bGUoKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tmdW5jdGlvbk5hbWVdKGZlYXR1cmUsIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIHBsYWNlaG9sZGVycywgaW4gYHN0cklucHV0YCwgZm9yIHZhcmlhYmxlcyBzZXQgYnkgdGhlIGdlb0VkaXRvci5cbiAgICAgKiBWYWxpZCBwbGFjZWhvbGRlcnMgYXJlOiAoW2tleV0gcmVwcmVzZW50cyB0aGUgc3RyaW5nbmFtZSBvZiB0aGUgdmFyaWFibGVzIGtleSlcbiAgICAgKiAgIGAke0VMW2tleV19YCAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVkxba2V5XX1gICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZSwgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICogICBgJHtFVltrZXldfWAgICA9PiAgVmFsdWUgb2YgdGhlIHZhcmlhYmxlXG4gICAgICogICBgJHtFVlZba2V5XX1gICA9PiAgU2FtZSBhcyBgJHtFVltrZXldfWBcbiAgICAgKlxuICAgICAqIElmIG5vIGFwcHJvcHJpYXRlIHZhbHVlIGNhbiBiZSBmb3VuZCBmb3IgYSBwbGFjZWhvbGRlclxuICAgICAqIGl0IHdpbGwgc2ltcGx5IGJlIHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoRVY/W0xWXSkoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIHR5cGUsIGV2S2V5LCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIGVkaXRvclZhcnMsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBoYXMgZWRpdG9yVmFyc1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJykpIHtcbiAgICAgICAgICAgICAgZWRpdG9yVmFycyA9IGZlYXR1cmUuZ2V0KCdlZGl0b3JWYXJzJyk7XG4gICAgICAgICAgICAgIC8vIHNlYXJjaCBmb3IgZWRpdG9yVmFyIHdpdGgga2V5ID09IGV2S2V5XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlZGl0b3JWYXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvclZhcnNbaV0ua2V5ID09PSBldktleSkge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgdHlwZSBpcyAnRVZMJyBkaXNwbGF5IGxhYmVsIG9ubHkgaWYgYSB2YWx1ZSBpcyBzZXQgdG9vXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0VMJyB8fCAodHlwZSA9PT0gJ0VWTCcgJiYgZWRpdG9yVmFyc1tpXS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgZXZlcnkgb2NjdXJhbmNlIG9mIGAke2F0dHJ9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYGZlYXR1cmUuZ2V0KGF0dHIpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnM6IGZ1bmN0aW9uIChzdHJJbnB1dCwgZmVhdHVyZSkge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCB0eXBlb2YgZmVhdHVyZS5nZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHsoW15cXH1dKilcXH0vZyxcbiAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGF0dHIsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZS5nZXQoYXR0cikgfHwgJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKClcblxuICAgIG9iamVjdFRvQXJyYXk6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sIC8vIGVuZCBvZiBvYmplY3RUb0FycmF5KClcblxuICAgIGdldFZlY3RvckxheWVyKHNvdXJjZSwgc3R5bGUpIHtcbiAgICAgICAgdmFyIGZuU3R5bGU7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHN0eWxlIGlzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm5TdHlsZSA9IHN0eWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgc3R5bGU6IGZuU3R5bGVcbiAgICAgICAgfSk7XG4gICAgfSwvLyBlbmQgb2YgXCJnZXRWZWN0b3JMYXllcigpXCJcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBzdWJkb21haW4gZnJvbSB0aGUgY3VycmVudCByZXF1ZXN0IGhvc3QgYW5kIHJldHVybnMgaXQuXG4gICAgICogQHJldHVybnMge3N0cmluZyB8ICp9XG4gICAgICovXG4gICAgZ2V0Q3VycmVudFN1YmRvbWFpbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgcmVkcmF3TWFwVmlldzogZnVuY3Rpb24gKG1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHZhciBtYXBEYXRhID0gbWFwQ29udHJvbGxlci5kYXRhO1xuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyVG9wTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfVEwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgbWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQucHJlcGVuZChjb250cm9sQ29udGFpbmVyVG9wTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgICQoY29udHJvbENvbnRhaW5lclRvcExlZnQpLmFmdGVyKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcbiAgICAgIG1hcENvbnRyb2xsZXIubGVmdFNsaWRlRWxlbWVudHMucHVzaChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG5cbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG5cbiAgICAgIGlmIChtYXBEYXRhLnNjYWxlbGluZSkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUgPSBuZXcgb2wuY29udHJvbC5TY2FsZUxpbmUoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lKTtcbiAgICAgIH1cblxuICAgICAgJChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCkuYXBwZW5kKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViKTtcblxuICAgICAgaWYgKG1hcERhdGEuem9vbWxldmVsKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCA9IG5ldyBab29tbGV2ZWwoe1xuICAgICAgICAgIG1hcFZpZXc6IG1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKSxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcERhdGEubW91c2Vwb3NpdGlvbikge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbiA9IG5ldyBvbC5jb250cm9sLk1vdXNlUG9zaXRpb24oe1xuICAgICAgICAgIHByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgIGNvb3JkaW5hdGVGb3JtYXQ6IG9sLmNvb3JkaW5hdGUudG9TdHJpbmdIRE1TLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Vba2V5XSB8fCAnJztcbiAgICB9LFxuICAgIHN0b3JlVmFsdWU6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlOyAvLyBvbmx5IHN0cmluZ3NcbiAgICB9XG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciB1dGlscyA9IHRoaXMuYzRnLm1hcHMudXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=