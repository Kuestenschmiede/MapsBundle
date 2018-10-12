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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-maps-control-grid.js");
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

/***/ "./Resources/public/js/c4g-maps-control-grid.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-grid.js ***!
  \******************************************************/
/*! exports provided: Grid */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};




(function ($, c4g) {
  'use strict';

  /**
   * Control to toggle a grid on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Grid = function (opt_options) {

    var self = this;
    var options = opt_options || {};

    var element, button;

    var objGrid = new ol.Graticule({
      /*
      strokeStyle: new ol.style.Stroke({
          width: 2,
          lineDash: [0.5, 4]
      }),*/
      showLabels: true
    });

    // default options
    options = $.extend({
      className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].GRATICULE,
      switchable: true,
      tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["langConstants"].CTRL_GRID,
      label: '#',
      disableLabel: '[]'
    }, options);

    // @TODO move functions to prototype?
    //
    // function to enable the grid
    var enable = function enable() {
      objGrid.setMap(self.getMap());
      $(element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '1');
      // }
    };

    // function to disable the grid
    var disable = function disable() {
      objGrid.setMap(null);
      $(element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '0');
      // }
    };

    // function to toggle the grid
    var toggle = function toggle(event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (objGrid.getMap()) {
        disable();
      } else {
        enable();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_UNSELECTABLE + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["cssConstants"].OL_CONTROL;

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, false);
      button.addEventListener('touchstart', toggle, false);
    }

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });

    // if (options.caching && (c4g.maps.utils.getValue('grid') == '1')) {
    //     objGrid.setMap(self.getMap());
    //     $(element).addClass(cssConstants.ENABLED);
    // }
  };
  ol.inherits(c4g.maps.control.Grid, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Grid.prototype = $.extend(c4g.maps.control.Grid.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var Grid = this.c4g.maps.control.Grid;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWE0OTVlNGMwYjI5ZjZhODJlNTIiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLWdyaWQuanMiXSwibmFtZXMiOlsiYzRnIiwibWFwcyIsImNvbnN0YW50IiwiJCIsImkxOG4iLCJleHRlbmQiLCJMQU5HIiwiTkFNRSIsIkhJREUiLCJDTE9TRSIsIlBPSU5UIiwiRlJFRUhBTkQiLCJMSU5FIiwiUE9MWUdPTiIsIkNJUkNMRSIsIlBFUklNRVRFUiIsIkxFTkdUSCIsIlNVUkZBQ0VBUkVBIiwiUkFESVVTIiwiUkVGUkVTSCIsIkNPUFlfVE9fQ0xJUEJPQVJEIiwiQ1RSTF9aT09NX0lOIiwiQ1RSTF9aT09NX09VVCIsIkNUUkxfWk9PTV9FWFQiLCJDVFJMX1pPT01fSE9NRSIsIkNUUkxfWk9PTV9QT1MiLCJDVFJMX1pPT01fU0xJREVSIiwiQ1RSTF9SRVNFVF9ST1RBVElPTiIsIkNUUkxfUE9SVFNJREUiLCJDVFJMX1JPVVRFUiIsIkNUUkxfRURJVE9SIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJDVFJMX0lORk9QQUdFIiwiQ1RSTF9BRERJVElPTkFMUEFORUwiLCJDVFJMX0FDQ09VTlQiLCJDVFJMX1pPT01MRVZFTCIsIkNUUkxfTU9VU0VDT09SRFMiLCJDVFJMX0dFT1NFQVJDSCIsIkNUUkxfU1RBUlRfU0VBUkNIIiwiQ1RSTF9PVkVSVklFV01BUCIsIkNUUkxfR0VPQk9PS01BUktTIiwiQ1RSTF9TSURFQk9BUkQiLCJDVFJMX1NUQVJCT0FSRCIsIkNUUkxfQVRUUklCVVRJT04iLCJDVFJMX0dSSUQiLCJDVFJMX1BFUk1BTElOSyIsIkNUUkxfRlVMTFNDUkVFTiIsIkNUUkxfUFJJTlQiLCJFRElUT1IiLCJFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRSIsIkVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVyIsIkVESVRPUl9GRUFUVVJFX0FQUExZIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFIiwiRURJVE9SX0ZFQVRVUkVfTU9ESUZZIiwiRURJVE9SX1NFTEVDVF9JTkZPIiwiRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUwiLCJFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORCIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiUE9QVVBfUk9VVEVfRlJPTSIsIlBPUFVQX1JPVVRFX1RPIiwiU1RBUkJPQVJEIiwiU1RBUkJPQVJEX0JBU0VMQVlFUiIsIlNUQVJCT0FSRF9MQVlFUiIsIlNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVIiLCJTSURFQk9BUkQiLCJST1VURVJfVklFV19BRERSRVNTX0lOUFVUIiwiUk9VVEVSX0ZST01fTEFCRUwiLCJST1VURVJfT1ZFUl9MQUJFTCIsIlJPVVRFUl9UT19MQUJFTCIsIlJPVVRFUl9DTEVBUl9USVRMRSIsIlJPVVRFUl9DTEVBUl9IVE1MIiwiUk9VVEVSX0xhYmVsX0ludGVyaW0iLCJST1VURVJfU1dJVENIIiwiUk9VVEVSX09WRVIiLCJST1VURVJfUFJJTlQiLCJST1VURVJfVklFV19MQUJFTF9ST1VURSIsIlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFIiwiUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEUiLCJST1VURVJfVklFV19BTEVSVF9BRERSRVNTIiwiUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkciLCJST1VURVIiLCJST1VURVJfTiIsIlJPVVRFUl9FIiwiUk9VVEVSX1MiLCJST1VURVJfVyIsIlJPVVRFUl9ORSIsIlJPVVRFUl9TRSIsIlJPVVRFUl9TVyIsIlJPVVRFUl9OVyIsIlJPVVRFUl9ESVJFQ1RJT05fMCIsIlJPVVRFUl9ESVJFQ1RJT05fMSIsIlJPVVRFUl9ESVJFQ1RJT05fMiIsIlJPVVRFUl9ESVJFQ1RJT05fMyIsIlJPVVRFUl9ESVJFQ1RJT05fNCIsIlJPVVRFUl9ESVJFQ1RJT05fNSIsIlJPVVRFUl9ESVJFQ1RJT05fNiIsIlJPVVRFUl9ESVJFQ1RJT05fNyIsIlJPVVRFUl9ESVJFQ1RJT05fOCIsIlJPVVRFUl9ESVJFQ1RJT05fMTAiLCJST1VURVJfRElSRUNUSU9OXzE1IiwiUk9VVEVSX0ZST00iLCJST1VURVJfVE8iLCJST1VURVJfRklORF9ST1VURSIsIlJPVVRFUl9MT0NfUk9VVEVfVE8iLCJST1VURVJfUk9VVEVERVNDIiwiUk9VVEVSX1JPVVRFTkFNRSIsIlJPVVRFUl9ESVNUQU5DRSIsIlJPVVRFUl9USU1FIiwiUk9VVEVSX1JFVl9HRU9DT0RJTkciLCJST1VURVJfRVJST1JfUkVWX0dFT0NPRElORyIsIlJPVVRFUl9TRUFSQ0hJTkciLCJST1VURVJfRVJST1JfU0VBUkNISU5HIiwiUk9VVEVSX0NBTENfUk9VVEUiLCJST1VURVJfRVJST1JfQ0FMQ19ST1VURSIsIk1FQVNVUkVUT09MUyIsIk1FQVNVUkVUT09MU19JTkZPIiwiTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJHRU9CT09LTUFSS1NfUExBQ0VIT0xERVIiLCJJTkZPUEFHRSIsIkFERElUSU9OQUxQQU5FTCIsIkFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVIiLCJBQ0NPVU5UIiwiQUNDT1VOVF9WSUVXX1RSSUdHRVIiLCJTRUFSQ0hfTk9UX0ZPVU5EIiwiTk9ORSIsImpRdWVyeSIsImxhbmdDb25zdGFudHMiLCJjc3MiLCJPUEVOIiwiQ0xPU0VBQkxFIiwiRU5BQkxFRCIsIkRJU0FCTEVEIiwiSUNPTiIsIkNPTlRST0wiLCJDT1BZIiwiQUNUSVZFIiwiSU5BQ1RJVkUiLCJMT0FESU5HIiwiQU5JTUFUSU9OX1NQSU4iLCJMQVJHRSIsIlNNQUxMIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiQVRUUklCVVRJT05fTE9HTyIsIkNPTlRST0xfQ09OVEFJTkVSX1RMIiwiQ09OVFJPTF9DT05UQUlORVJfVFIiLCJDT05UUk9MX0NPTlRBSU5FUl9CTCIsIkNPTlRST0xfQ09OVEFJTkVSX0JMX1NVQiIsIkNPTlRST0xfQ09OVEFJTkVSX0JSIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVCIsIkVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQiLCJFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkciLCJFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT04iLCJFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRSIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVCIsIkVESVRPUl9EUkFXX1RSSUdHRVIiLCJFRElUT1JfQ09OVEVOVF9TRUxFQ1QiLCJFRElUT1JfRFJBV19PUFRJT05TIiwiR0VPU0VBUkNIIiwiR0VPU0VBUkNIX1dSQVBQRVIiLCJHRU9TRUFSQ0hfVFJJR0dFUiIsIkdFT1NFQVJDSF9TVEFSVCIsIkdSQVRJQ1VMRSIsIlBSSU5UIiwiSU5GT1BBR0VfVklFV19UUklHR0VSIiwiT1ZFUlZJRVdNQVAiLCJPVkVSVklFV01BUF9XUkFQUEVSIiwiR0VPQk9PS01BUktTIiwiUEVSTUFMSU5LIiwiUEVSTUFMSU5LX1BPUFVQIiwiUE9QVVBfQ0xPU0UiLCJQT1BVUF9ST1VURV9XUkFQUEVSIiwiUE9SVFNJREUiLCJQT1JUU0lERV9DT05UQUlORVIiLCJQT1JUU0lERV9DT05UUk9MIiwiUE9SVFNJREVfV1JBUFBFUiIsIlBPUlRTSURFX1RJVExFQkFSIiwiUE9SVFNJREVfVE9QX1RPT0xCQVIiLCJQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUiIsIlBPUlRTSURFX0JPVFRPTV9UT09MQkFSIiwiUE9SVFNJREVfU1RBVFVTQkFSIiwiUE9SVFNJREVfVklFV1RSSUdHRVJCQVIiLCJQT1JUU0lERV9IRUFETElORSIsIlBPUlRTSURFX0JVVFRPTkJBUiIsIlBPUlRTSURFX0JVVFRPTiIsIlBPUlRTSURFX0hJREUiLCJQT1JUU0lERV9DTE9TRSIsIlNQSU5ORVIiLCJTVEFSQk9BUkRfQ09OVEFJTkVSIiwiU1RBUkJPQVJEX0NPTlRST0wiLCJTVEFSQk9BUkRfV1JBUFBFUiIsIlNUQVJCT0FSRF9USVRMRUJBUiIsIlNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUiIsIlNUQVJCT0FSRF9TVEFUVVNCQVIiLCJTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVIiLCJTVEFSQk9BUkRfSEVBRExJTkUiLCJTVEFSQk9BUkRfQlVUVE9OQkFSIiwiU1RBUkJPQVJEX0JVVFRPTiIsIlNUQVJCT0FSRF9DTE9TRSIsIlNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUUiLCJTVEFSQk9BUkRfTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUiIsIlRPT0xUSVBfUE9QVVAiLCJaT09NX0xFVkVMIiwiUk9VVEVSX0lOUFVUX1dSQVBQRVIiLCJST1VURVJfUFJPRklMRV9XUkFQUEVSIiwiUk9VVEVSX0lOUFVUX0ZST00iLCJST1VURVJfSU5QVVRfVE8iLCJST1VURVJfSU5QVVRfQ0xFQVIiLCJST1VURVJfQlVUVE9OQkFSIiwiUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUiIsIlJPVVRFUl9QUk9GSUxFX0NBUiIsIlJPVVRFUl9QUk9GSUxFX0hHViIsIlJPVVRFUl9QUk9GSUxFX0JJS0UiLCJST1VURVJfUFJPRklMRV9GT09UIiwiUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUiLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU0iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU4iLCJST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSIsIk9MX0NPTlRST0wiLCJPTF9VTlNFTEVDVEFCTEUiLCJPTF9PVkVSTEFZQ09OVEFJTkVSIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRSIsIk9MX1ZJRVdQT1JUIiwiT0xfWk9PTSIsIk9MX1pPT01fSU4iLCJPTF9aT09NX0VYVCIsIk9MX1pPT01fSE9NRSIsIk9MX1pPT01fUE9TIiwiT0xfWk9PTV9XSVRIX0VYVCIsIk9MX1pPT01fV0lUSF9IT01FIiwiT0xfWk9PTV9XSVRIX1BPUyIsIk9MX1pPT01fU0xJREVSIiwiT0xfWk9PTV9XSVRIX1NMSURFUiIsImNzc0NvbnN0YW50cyIsImNvbnRyb2wiLCJHcmlkIiwib3B0X29wdGlvbnMiLCJzZWxmIiwib3B0aW9ucyIsImVsZW1lbnQiLCJidXR0b24iLCJvYmpHcmlkIiwib2wiLCJHcmF0aWN1bGUiLCJzaG93TGFiZWxzIiwiY2xhc3NOYW1lIiwic3dpdGNoYWJsZSIsInRpcExhYmVsIiwibGFiZWwiLCJkaXNhYmxlTGFiZWwiLCJlbmFibGUiLCJzZXRNYXAiLCJnZXRNYXAiLCJhZGRDbGFzcyIsImRpc2FibGUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmx1ciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ29udHJvbCIsImNhbGwiLCJ0YXJnZXQiLCJpbmhlcml0cyIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFDQSxLQUFLQSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxJQUFZLEVBQXZCO0FBQ0EsS0FBS0EsR0FBTCxDQUFTQyxJQUFULEdBQWdCLEtBQUtELEdBQUwsQ0FBU0MsSUFBVCxJQUFpQixFQUFqQztBQUNBLEtBQUtELEdBQUwsQ0FBU0MsSUFBVCxDQUFjQyxRQUFkLEdBQXlCLEtBQUtGLEdBQUwsQ0FBU0MsSUFBVCxDQUFjQyxRQUFkLElBQTBCLEVBQW5EOztBQUVDLFdBQVVDLENBQVYsRUFBYUgsR0FBYixFQUFrQjtBQUNqQjs7QUFFQTs7OztB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LFFBQVFRLFVBQVosRUFBd0I7QUFDdEI7QUFDQU4sZUFBU29CLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtBQUNBckIsYUFBT3NCLEtBQVAsR0FBZXhCLFFBQVFTLFFBQXZCO0FBQ0FSLGNBQVF3QixXQUFSLENBQW9CdkIsTUFBcEI7O0FBRUE7QUFDQUEsYUFBT3dCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDUixNQUFqQyxFQUF5QyxLQUF6QztBQUNBaEIsYUFBT3dCLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDUixNQUF0QyxFQUE4QyxLQUE5QztBQUNEOztBQUVEO0FBQ0FkLE9BQUdSLE9BQUgsQ0FBVytCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLEVBQThCO0FBQzVCM0IsZUFBU0EsT0FEbUI7QUFFNUI0QixjQUFRN0IsUUFBUTZCO0FBRlksS0FBOUI7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFRCxHQXBGRDtBQXFGQXpCLEtBQUcwQixRQUFILENBQVlqUyxJQUFJQyxJQUFKLENBQVM4UCxPQUFULENBQWlCQyxJQUE3QixFQUFtQ08sR0FBR1IsT0FBSCxDQUFXK0IsT0FBOUM7O0FBR0E7OztBQUdBOVIsTUFBSUMsSUFBSixDQUFTOFAsT0FBVCxDQUFpQkMsSUFBakIsQ0FBc0JrQyxTQUF0QixHQUFrQy9SLEVBQUVFLE1BQUYsQ0FBU0wsSUFBSUMsSUFBSixDQUFTOFAsT0FBVCxDQUFpQkMsSUFBakIsQ0FBc0JrQyxTQUEvQixFQUEwQzs7QUFFMUU7O0FBRjBFLEdBQTFDLENBQWxDLENBdEdpQixDQTBHYjtBQUVMLENBNUdBLEVBNEdDMUosTUE1R0QsRUE0R1MsS0FBS3hJLEdBNUdkLENBQUQ7O0FBOEdPLElBQUlnUSxPQUFPLEtBQUtoUSxHQUFMLENBQVNDLElBQVQsQ0FBYzhQLE9BQWQsQ0FBc0JDLElBQWpDLEMiLCJmaWxlIjoiYzRnLW1hcHMtY29udHJvbC1ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtZ3JpZC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YTQ5NWU0YzBiMjlmNmE4MmU1MiIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvbnN0YW50cyAoZW4pXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5pMThuID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuaTE4biwge1xuXG4gICAgTEFORzogJ2RlJyxcblxuICAgIE5BTUU6ICdOYW1lJyxcbiAgICBISURFOiAnWnVrbGFwcGVuJyxcbiAgICBDTE9TRTogJ1NjaGxpZcOfZW4nLFxuICAgIFBPSU5UOiAnUE9JJyxcbiAgICBGUkVFSEFORDogJ0ZyZWloYW5kJyxcbiAgICBMSU5FOiAnTGluaWUnLFxuICAgIFBPTFlHT046ICdGbMOkY2hlJyxcbiAgICBDSVJDTEU6ICdSYWRpdXMnLFxuICAgIFBFUklNRVRFUjogJ1VtZmFuZycsXG4gICAgTEVOR1RIOiAnTMOkbmdlJyxcbiAgICBTVVJGQUNFQVJFQTogJ0Zsw6RjaGVuaW5oYWx0JyxcbiAgICBSQURJVVM6ICdSYWRpdXMnLFxuICAgIFJFRlJFU0g6ICdBa3R1YWxpc2llcmVuJyxcbiAgICBDT1BZX1RPX0NMSVBCT0FSRDogJ0luIFp3aXNjaGVuYWJsYWdlIGtvcGllcmVuJyxcblxuICAgIENUUkxfWk9PTV9JTjogJ1Zlcmdyw7bDn2VybicsXG4gICAgQ1RSTF9aT09NX09VVDogJ1ZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fRVhUOiAnTWF4aW1hbCB2ZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0hPTUU6ICdadXIgdXJzcHLDvG5nbGljaGVuIFBvc2l0aW9uJyxcbiAgICBDVFJMX1pPT01fUE9TOiAnWnVtIGFrdHVlbGxlbiBTdGFuZG9ydCcsXG4gICAgQ1RSTF9aT09NX1NMSURFUjogJ1pvb20gU2xpZGVyJyxcbiAgICBDVFJMX1JFU0VUX1JPVEFUSU9OOiAnUm90YXRpb24gKHRvdWNoLCBhbHQrbW91c2UpIHp1csO8Y2tzZXR6ZW4nLFxuICAgIENUUkxfUE9SVFNJREU6ICdQb3J0c2lkZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUk9VVEVSOiAnUm91dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9FRElUT1I6ICdFZGl0b3IgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX01FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0lORk9QQUdFOiAnSW5mb3NlaXRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BRERJVElPTkFMUEFORUw6ICdQYW5lbCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQUNDT1VOVDogJ0FjY291bnQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1pPT01MRVZFTDogJ1pvb20nLFxuICAgIENUUkxfTU9VU0VDT09SRFM6ICdMb24vTGF0JyxcbiAgICBDVFJMX0dFT1NFQVJDSDogJ1N1Y2hlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgICBDVFJMX09WRVJWSUVXTUFQOiAnw5xiZXJzaWNodHNrYXJ0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfR0VPQk9PS01BUktTOiAnRmF2b3JpdGVuIHZlcndhbHRlbicsXG4gICAgQ1RSTF9TSURFQk9BUkQ6ICdTaWRlYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJCT0FSRDogJ1N0YXJib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQVRUUklCVVRJT046ICdBdHRyaWJ1dGlvbiBhbnplaWdlbicsXG4gICAgQ1RSTF9HUklEOiAnR2l0dGVyIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9QRVJNQUxJTks6ICdQZXJtYWxpbmsgZ2VuZXJpZXJlbicsXG4gICAgQ1RSTF9GVUxMU0NSRUVOOiAnVm9sbGJpbGRtb2R1cyBlaW4tL2F1c3NjaGFsdGVuJyxcbiAgICBDVFJMX1BSSU5UOiAnS2FydGUgZXhwb3J0aWVyZW4nLFxuXG4gICAgRURJVE9SOiAnRWRpdG9yJyxcbiAgICBFRElUT1JfRU5BQkxFX0lOU1RBTlRfTUVBU1VSRTogJ01lc3NlbiB3w6RocmVuZCBkZXMgWmVpY2huZW5zJyxcbiAgICBFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVc6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFZGl0aWVyZW4gYmVlbmRlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnRWxlbWVudCBsw7ZzY2hlbicsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnRWxlbWVudCBlZGl0aWVyZW4gLyB2ZXJzY2hpZWJlbicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPOiAnWnVyIEF1c3dhaGwgZWluIEVsZW1lbnQgYXVmIGRlciBLYXJ0ZSBhbmtsaWNrZW4uJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk9fQURESVRJT05BTDogJ1tTdHJnXSArIFtLbGlja10gZsO8ciBNZWhyZmFjaGF1c3dhaGwgPGJyPltTaGlmdF0gaGFsdGVuIGbDvHIgQXVzd2FobGJveCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdLYXJ0ZW5lbGVtZW50ZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmR3ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW53ZXJremV1Z2UnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdLcmVpc3dlcmt6ZXVnZScsXG5cbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnUm91dGUgdm9uIGhpZXInLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG5cbiAgICBTVEFSQk9BUkQ6ICdTdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX0xBWUVSOiAnRWJlbmVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ0thcnRlbmVsZW1lbnRlJyxcblxuICAgIFNJREVCT0FSRDogJ1NpZGVib2FyZCcsXG5cbiAgICBST1VURVJfVklFV19BRERSRVNTX0lOUFVUOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfRlJPTV9MQUJFTDogJ1N0YXJ0JyxcbiAgICBST1VURVJfT1ZFUl9MQUJFTDogJ1p3aXNjaGVuemllbCcsXG4gICAgUk9VVEVSX1RPX0xBQkVMOiAnWmllbCcsXG4gICAgUk9VVEVSX0NMRUFSX1RJVExFOiAnTMO2c2NoZW4nLFxuICAgIFJPVVRFUl9DTEVBUl9IVE1MOiAnJyxcbiAgICBST1VURVJfTGFiZWxfSW50ZXJpbTogJ1p3aXNjaGVuemllbCcsXG5cbiAgICBST1VURVJfU1dJVENIOidXZWNoc2VsIHZvbiBTdGFydCB1bmQgWmllbCcsXG4gICAgUk9VVEVSX09WRVI6J1p3aXNjaGVuemllbCBoaW56dWbDvGdlbicsXG4gICAgUk9VVEVSX1BSSU5UOidSb3V0ZW5iZXNjaHJlaWJ1bmcgZHJ1Y2tlbicsXG5cbiAgICBST1VURVJfVklFV19MQUJFTF9ST1VURTogJ1JvdXRlOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfRElTVEFOQ0U6ICdFbnRmZXJudW5nOicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfVElNRTogJ1plaXQ6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9QUk9GSUxFOiAnUHJvZmlsOicsXG5cbiAgICBST1VURVJfVklFV19BTEVSVF9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbi4nLFxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HOiAnWnVncmlmZiBhdWYgR2VvY29kZXIgZmVobGdlc2NobGFnZW4uJyxcblxuICAgIFJPVVRFUjogJ1JvdXRlcicsXG4gICAgUk9VVEVSX046ICdOb3JkZW4nLFxuICAgIFJPVVRFUl9FOiAnT3N0JyxcbiAgICBST1VURVJfUzogJ1PDvGRlbicsXG4gICAgUk9VVEVSX1c6ICdXZXN0ZW4nLFxuICAgIFJPVVRFUl9ORTogJ05vcmRvc3QnLFxuICAgIFJPVVRFUl9TRTogJ1PDvGRvc3QnLFxuICAgIFJPVVRFUl9TVzogJ1PDvGR3ZXN0JyxcbiAgICBST1VURVJfTlc6ICdOb3Jkd2VzdCcsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8wOiAnVW5iZWthbm50ZSBBbndlaXN1bmdbIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE6ICdHZXJhZGVhdXMgd2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8yOiAnTGVpY2h0IHJlY2h0cyBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMzogJ1JlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNDogJ1NjaGFyZiByZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzU6ICdXZW5kZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzY6ICdTY2hhcmYgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzc6ICdMaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fODogJ0xlaWNodCBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTA6ICdGYWhyZW4gU2llIFJpY2h0dW5nIDxiPiVkPC9iPlsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTEnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlcnN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHp3ZWl0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGRyaXR0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHZpZXJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGbDvG5mdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTYnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzZWNoc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS03JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2llYnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS04JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgYWNodGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTknOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBuZXVudGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLXgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBlaW5lciBkZXIgdmllbGVuIE3DtmdsaWNoa2VpdGVuWyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xNTogJ1NpZSBoYWJlbiBJaHIgWmllbCBlcnJlaWNodCcsXG5cbiAgICAnUk9VVEVSXzUuWF9UWVBFXzAnOiAnICVtIGZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMSc6ICcgJW0gZGVtIFN0cmHDn2VudmVybGF1ZiBmb2xnZW5bIGFscyA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzInOiAnIEZhaHJlbiBTaWVbIGF1ZiA8Yj4lczwvYj5dIGxvcycsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8zJzogJyBEYXMgWmllbCBiZWZpbmRldCBzaWNoIDxiPiVtPC9iPicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV80JzogJyBXZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzUnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hdWZmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNic6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWFiZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzcnOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzgnOiAnICVtIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV85JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMCc6ICcgJW0gZmFocmVuIHVtIGF1ZiBkZXIgU3RyYcOfZSB6dSBibGVpYmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzExJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMic6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTMnOiAnICVtIGZhaHJlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTQnOiAnIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG5cbiAgICAnUk9VVEVSXzUuWF9NT0RfMCcgIDogJ1V0dXJuJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMScgIDogJ1NjaGFyZiByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8yJyAgOiAnUmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMycgIDogJ0xlaWNodCByZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF80JyAgOiAnR2VyYWRlYXVzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNScgIDogJ0xlaWNodCBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzYnICA6ICdMaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzcnICA6ICdTY2hhcmYgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF84JyAgOiAnaW4gZGVyIE7DpGhlJyxcblxuICAgIFJPVVRFUl9GUk9NOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9UTzogJ1ppZWwnLFxuICAgIFJPVVRFUl9GSU5EX1JPVVRFOiAnUm91dGUgZmluZGVuJyxcbiAgICBST1VURVJfTE9DX1JPVVRFX1RPOiAnUm91dGUgaGllcmhpbicsXG4gICAgUk9VVEVSX1JPVVRFREVTQzogJ1JvdXRlbmJlc2NocmVpYnVuZycsXG4gICAgUk9VVEVSX1JPVVRFTkFNRTogJ1JvdXRlJyxcbiAgICBST1VURVJfRElTVEFOQ0U6ICdEaXN0YW56JyxcbiAgICBST1VURVJfVElNRTogJ1plaXQnLFxuICAgIFJPVVRFUl9SRVZfR0VPQ09ESU5HOiAnRXJtaXR0bGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkc6ICdGZWhsZXIgYmVpbSBFcm1pdHRlbG4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9TRUFSQ0hJTkc6ICdTdWNoZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfU0VBUkNISU5HOiAnRmVobGVyIGJlaW0gU3VjaGVuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfQ0FMQ19ST1VURTogJ0JlcmVjaG5lIFJvdXRlLi4uJyxcbiAgICBST1VURVJfRVJST1JfQ0FMQ19ST1VURTogJ0ZlaGxlciBiZWltIEJlcmVjaG5lbiBkZXIgUm91dGUnLFxuXG4gICAgTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZScsXG4gICAgTUVBU1VSRVRPT0xTX0lORk86ICdXw6RobGVuIFNpZSB3ZWl0ZXIgdW50ZW4gZWluZW4gTWVzc3R5cCBhdXMgdW5kIHN0YXJ0ZW4gU2llIGRpZSBNZXNzdW5nIGR1cmNoIGRhcyBLbGlja2VuIGF1ZiBkZXIgS2FydGUuJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMOiAnKEVpbnplbG5lIE1lc3N1bmdlbiBrw7ZubmVuIG1pdCBlaW5lbSBEb3BwZWxrbGljayBiZWVuZGV0IHdlcmRlbi4pJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ1JhZGl1cyBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kIG1lc3NlbicsXG5cbiAgICBHRU9CT09LTUFSS1NfUExBQ0VIT0xERVI6ICdOZXVlIEJlemVpY2hudW5nJyxcblxuICAgIElORk9QQUdFOiAnSW5mb3JtYXRpb25lbicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnUGFuZWwnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdQYW5lbCBhbnplaWdlbicsXG4gICAgQUNDT1VOVDogJ0FjY291bnQnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnQWNjb3VudCBhbnplaWdlbicsXG5cbiAgICBTRUFSQ0hfTk9UX0ZPVU5EOiAnRGllIExva2F0aW9uIGtvbm50ZSBuaWNodCBnZWZ1bmRlbiB3ZXJkZW4uIEJpdHRlIHZlcnN1Y2hlbiBTaWUgZWluZSBhbmRlcmUgRWluZ2FiZS4nLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJsYW5ndWFnZSBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgbGFuZ0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuaTE4bjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGUuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDU1MgY29uc3RhbnRzXG4gICAqL1xuICBjNGcubWFwcy5jb25zdGFudC5jc3MgPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5jc3MsIHtcblxuICAgIE9QRU46ICdjNGctb3BlbicsXG4gICAgQ0xPU0U6ICdjNGctY2xvc2UnLFxuICAgIENMT1NFQUJMRTogJ2M0Zy1jbG9zZWFibGUnLFxuICAgIEVOQUJMRUQ6ICdjNGctZW5hYmxlZCcsXG4gICAgRElTQUJMRUQ6ICdjNGctZGlzYWJsZWQnLFxuICAgIEhJREU6ICdjNGctaGlkZScsXG4gICAgSUNPTjogJ2M0Zy1pY29uJyxcbiAgICBDT05UUk9MOiAnYzRnLWNvbnRyb2wnLFxuICAgIENPUFk6ICdjNGctY29weScsXG4gICAgUkVGUkVTSDogJ2M0Zy1yZWZyZXNoJyxcbiAgICBBQ1RJVkU6ICdjNGctYWN0aXZlJyxcbiAgICBJTkFDVElWRTogJ2M0Zy1pbmFjdGl2ZScsXG4gICAgTE9BRElORzogJ2M0Zy1sb2FkaW5nJyxcbiAgICBBTklNQVRJT05fU1BJTjogJ2M0Zy1hbmltYXRpb24tc3BpbicsXG4gICAgTEFSR0U6ICdjNGctbGFyZ2UnLFxuICAgIFNNQUxMOiAnYzRnLXNtYWxsJyxcbiAgICBIT1JJWk9OVEFMOiAnYzRnLWhvcml6b250YWwnLFxuICAgIFZFUlRJQ0FMOiAnYzRnLXZlcnRpY2FsJyxcblxuICAgIEFUVFJJQlVUSU9OX0xPR086ICdjNGctYXR0cmlidXRpb24tbG9nbycsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVEw6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1yaWdodCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkw6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMX1NVQjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdC1zdWInLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JSOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1yaWdodCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0lOVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9pbnQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfRlJFRUhBTkQ6ICdjNGctZHJhdy1jb250ZW50LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0xJTkVTVFJJTkc6ICdjNGctZHJhdy1jb250ZW50LWxpbmUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9MWUdPTjogJ2M0Zy1kcmF3LWNvbnRlbnQtcG9seWdvbicsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEU6ICdjNGctZHJhdy1jb250ZW50LWNpcmNsZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QUk9KRUNUOiAnYzRnLWRyYXctY29udGVudC1wcm9qZWN0JyxcbiAgICBFRElUT1JfRFJBV19UUklHR0VSOiAnYzRnLWRyYXctdHJpZ2dlcicsXG4gICAgRURJVE9SX0NPTlRFTlRfU0VMRUNUOiAnYzRnLWNvbnRlbnQtc2VsZWN0JyxcbiAgICBFRElUT1JfRFJBV19PUFRJT05TOiAnYzRnLWVkaXRvci1kcmF3LW9wdGlvbnMnLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnYzRnLWVkaXRvci1mZWF0dXJlLWFwcGx5JyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdjNGctZWRpdG9yLWZlYXR1cmUtZGVsZXRlJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdjNGctZWRpdG9yLWZlYXR1cmUtbW9kaWZ5JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2ludCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIEdFT1NFQVJDSDogJ2M0Zy1nZW9zZWFyY2gnLFxuICAgIEdFT1NFQVJDSF9XUkFQUEVSOiAnYzRnLWdlb3NlYXJjaC13cmFwcGVyJyxcbiAgICBHRU9TRUFSQ0hfVFJJR0dFUjogJ2M0Zy1nZW9zZWFyY2gtdHJpZ2dlcicsXG4gICAgR0VPU0VBUkNIX1NUQVJUOiAnYzRnLWdlb3NlYXJjaC1zdGFydCcsXG4gICAgR1JBVElDVUxFOiAnYzRnLWdyYXRpY3VsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBQUklOVDonYzRnLXByaW50JyxcbiAgICBJTkZPUEFHRV9WSUVXX1RSSUdHRVI6ICdjNGctaW5mb3BhZ2Utdmlldy10cmlnZ2VyJyxcbiAgICBJTkZPUEFHRTogJ2M0Zy1pbmZvcGFnZScsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hZGRpdGlvbmFscGFuZWwtdmlldy10cmlnZ2VyJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdjNGctYWRkaXRpb25hbHBhbmVsJyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ2M0Zy1hY2NvdW50LXZpZXctdHJpZ2dlcicsXG4gICAgQUNDT1VOVDogJ2M0Zy1hY2NvdW50JyxcbiAgICBPVkVSVklFV01BUDogJ2M0Zy1vdmVydmlld21hcCcsXG4gICAgT1ZFUlZJRVdNQVBfV1JBUFBFUjogJ2M0Zy1vdmVydmlld21hcC13cmFwcGVyJyxcbiAgICBHRU9CT09LTUFSS1M6ICdjNGctZ2VvYm9va21hcmtzJyxcbiAgICBQRVJNQUxJTks6ICdjNGctcGVybWFsaW5rJyxcbiAgICBQRVJNQUxJTktfUE9QVVA6ICdjNGctcGVybWFsaW5rLXBvcHVwJyxcbiAgICBQT1BVUF9DTE9TRTogJ2M0Zy1wb3B1cC1jbG9zZScsXG4gICAgUE9QVVBfUk9VVEVfV1JBUFBFUjogJ2M0Zy1wb3B1cC1yb3V0ZS13cmFwcGVyJyxcbiAgICBQT1BVUF9ST1VURV9GUk9NOiAnYzRnLXBvcHVwLXJvdXRlLWZyb20nLFxuICAgIFBPUFVQX1JPVVRFX1RPOiAnYzRnLXBvcHVwLXJvdXRlLXRvJyxcbiAgICBQT1JUU0lERTogJ2M0Zy1wb3J0c2lkZScsXG4gICAgUE9SVFNJREVfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQ09OVFJPTDogJ2M0Zy1wb3J0c2lkZS1jb250cm9sJyxcbiAgICBQT1JUU0lERV9XUkFQUEVSOiAnYzRnLXBvcnRzaWRlLXdyYXBwZXInLFxuICAgIFBPUlRTSURFX1RJVExFQkFSOiAnYzRnLXBvcnRzaWRlLXRpdGxlYmFyJyxcbiAgICBQT1JUU0lERV9UT1BfVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS10b3AtdG9vbGJhcicsXG4gICAgUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0JPVFRPTV9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLWJvdHRvbS10b29sYmFyJyxcbiAgICBQT1JUU0lERV9TVEFUVVNCQVI6ICdjNGctcG9ydHNpZGUtc3RhdHVzYmFyJyxcbiAgICBQT1JUU0lERV9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1wb3J0c2lkZS12aWV3dHJpZ2dlcmJhcicsXG4gICAgUE9SVFNJREVfSEVBRExJTkU6ICdjNGctcG9ydHNpZGUtaGVhZGxpbmUnLFxuICAgIFBPUlRTSURFX0JVVFRPTkJBUjogJ2M0Zy1wb3J0c2lkZS1idXR0b25iYXInLFxuICAgIFBPUlRTSURFX0JVVFRPTjogJ2M0Zy1wb3J0c2lkZS1idXR0b24nLFxuICAgIFBPUlRTSURFX0hJREU6ICdjNGctcG9ydHNpZGUtaGlkZScsXG4gICAgUE9SVFNJREVfQ0xPU0U6ICdjNGctcG9ydHNpZGUtY2xvc2UnLFxuICAgIFNQSU5ORVI6ICdjNGctc3Bpbm5lcicsXG4gICAgU1RBUkJPQVJEOiAnYzRnLXN0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQ09OVFJPTDogJ2M0Zy1zdGFyYm9hcmQtY29udHJvbCcsXG4gICAgU1RBUkJPQVJEX1dSQVBQRVI6ICdjNGctc3RhcmJvYXJkLXdyYXBwZXInLFxuICAgIFNUQVJCT0FSRF9USVRMRUJBUjogJ2M0Zy1zdGFyYm9hcmQtdGl0bGViYXInLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1zdGFyYm9hcmQtY29udGVudC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9CT1RUT01fVE9PTEJBUjogJ2M0Zy1zdGFyYm9hcmQtYm90dG9tLXRvb2xiYXInLFxuICAgIFNUQVJCT0FSRF9TVEFUVVNCQVI6ICdjNGctc3RhcmJvYXJkLXN0YXR1c2JhcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXN0YXJib2FyZC12aWV3dHJpZ2dlcmJhcicsXG4gICAgU1RBUkJPQVJEX0hFQURMSU5FOiAnYzRnLXN0YXJib2FyZC1oZWFkbGluZScsXG4gICAgU1RBUkJPQVJEX0JVVFRPTkJBUjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uYmFyJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OOiAnYzRnLXN0YXJib2FyZC1idXR0b24nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0NMT1NFOiAnYzRnLXN0YXJib2FyZC1jbG9zZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQkFTRUxBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1iYXNlbGF5ZXJzd2l0Y2hlcicsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUlRSRUU6ICdjNGctYmFzZWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0xBWUVSVFJFRTogJ2M0Zy1sYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVI6ICdjNGctY29udGVudC1sYXllcnN3aXRjaGVyJyxcbiAgICBUT09MVElQX1BPUFVQOiAnYzRnLXRvb2x0aXAtcG9wdXAnLFxuICAgIFpPT01fTEVWRUw6ICdjNGctem9vbS1sZXZlbCcsXG5cbiAgICBST1VURVJfSU5QVVRfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5wdXQtd3JhcHBlcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyJyxcbiAgICBST1VURVJfSU5QVVRfRlJPTTogJ2M0Zy1yb3V0ZXItaW5wdXQtZnJvbScsXG4gICAgUk9VVEVSX0lOUFVUX1RPOiAnYzRnLXJvdXRlci1pbnB1dC10bycsXG4gICAgUk9VVEVSX0lOUFVUX0NMRUFSOiAnYzRnLXJvdXRlci1pbnB1dC1jbGVhcicsXG4gICAgUk9VVEVSX0JVVFRPTkJBUjogJ2M0Zy1yb3V0ZXItYnV0dG9uYmFyJyxcbiAgICBST1VURVJfQVRUUklCVVRJT05fV1JBUFBFUjogJ2M0Zy1yb3V0ZXItYXR0cmlidXRpb24td3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy1oZWFkZXInLFxuXG4gICAgUk9VVEVSX1NXSVRDSDogJ2M0Zy1yb3V0ZXItc3dpdGNoJyxcbiAgICBST1VURVJfT1ZFUjogJ2M0Zy1yb3V0ZXItb3ZlcicsXG4gICAgUk9VVEVSX1BSSU5UOiAnYzRnLXJvdXRlci1wcmludCcsXG5cbiAgICBST1VURVJfUFJPRklMRV9DQVI6ICdjNGctcm91dGVyLXByb2ZpbGUtY2FyJyxcbiAgICBST1VURVJfUFJPRklMRV9IR1Y6ICdjNGctcm91dGVyLXByb2ZpbGUtaGd2JyxcbiAgICBST1VURVJfUFJPRklMRV9CSUtFOiAnYzRnLXJvdXRlci1wcm9maWxlLWJpa2UnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0ZPT1Q6ICdjNGctcm91dGVyLXByb2ZpbGUtZm9vdCcsXG4gICAgUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS13aGVlbGNoYWlyJyxcblxuXG5cbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi10YWJsZScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1vZGQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtLS1ldmVuJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2RpcmVjdGlvbi1pY29uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fdGV4dCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXN0YW5jZScsXG5cbiAgICBPTF9DT05UUk9MOiAnb2wtY29udHJvbCcsXG4gICAgT0xfVU5TRUxFQ1RBQkxFOiAnb2wtdW5zZWxlY3RhYmxlJyxcblxuICAgIE9MX09WRVJMQVlDT05UQUlORVI6ICdvbC1vdmVybGF5Y29udGFpbmVyJyxcbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSX1NFOiAnb2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQnLFxuICAgIE9MX1ZJRVdQT1JUOiAnb2wtdmlld3BvcnQnLFxuICAgIE9MX1pPT006ICdvbC16b29tJyxcbiAgICBPTF9aT09NX0lOOiAnb2wtem9vbS1pbicsXG4gICAgT0xfWk9PTV9FWFQ6ICdvbC16b29tLWV4dGVudCcsXG4gICAgT0xfWk9PTV9IT01FOiAnb2wtem9vbS1ob21lJyxcbiAgICBPTF9aT09NX1BPUzogJ29sLXpvb20tcG9zaXRpb24nLFxuICAgIE9MX1pPT01fV0lUSF9FWFQ6ICdvbC16b29tLXdpdGgtZXh0ZW50JyxcbiAgICBPTF9aT09NX1dJVEhfSE9NRTogJ29sLXpvb20td2l0aC1ob21lJyxcbiAgICBPTF9aT09NX1dJVEhfUE9TOiAnb2wtem9vbS13aXRoLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1NMSURFUjogJ29sLXpvb20tc2xpZGVyJyxcbiAgICBPTF9aT09NX1dJVEhfU0xJREVSOiAnb2wtem9vbS13aXRoLXNsaWRlcicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgY3NzQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5jc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcblxuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENvbnRyb2wgdG8gdG9nZ2xlIGEgZ3JpZCBvbiB0aGUgbWFwLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGV4dGVuZHMgIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqXG4gICAqIEBwYXJhbSAgICB7T2JqZWN0fSAgICAgICAgICAgICAgb3B0X29wdGlvbnMgICpvcHRpb25hbCogY29udHJvbCBvcHRpb25zLlxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5HcmlkID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBlbGVtZW50LFxuICAgICAgICBidXR0b247XG5cbiAgICB2YXIgb2JqR3JpZCA9IG5ldyBvbC5HcmF0aWN1bGUoe1xuICAgICAgICAvKlxuICAgICAgICBzdHJva2VTdHlsZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGxpbmVEYXNoOiBbMC41LCA0XVxuICAgICAgICB9KSwqL1xuICAgICAgICBzaG93TGFiZWxzOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuR1JBVElDVUxFLFxuICAgICAgc3dpdGNoYWJsZTogdHJ1ZSxcbiAgICAgIHRpcExhYmVsOiBsYW5nQ29uc3RhbnRzLkNUUkxfR1JJRCxcbiAgICAgIGxhYmVsOiAnIycsXG4gICAgICBkaXNhYmxlTGFiZWw6ICdbXSdcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vIEBUT0RPIG1vdmUgZnVuY3Rpb25zIHRvIHByb3RvdHlwZT9cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHRvIGVuYWJsZSB0aGUgZ3JpZFxuICAgIHZhciBlbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmpHcmlkLnNldE1hcChzZWxmLmdldE1hcCgpKTtcbiAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkVOQUJMRUQpO1xuICAgICAgLy8gaWYgKG9wdGlvbnMuY2FjaGluZykge1xuICAgICAgLy8gICAgIGM0Zy5tYXBzLnV0aWxzLnN0b3JlVmFsdWUoJ2dyaWQnLCAnMScpO1xuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSBncmlkXG4gICAgdmFyIGRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmpHcmlkLnNldE1hcChudWxsKTtcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkVOQUJMRUQpO1xuICAgICAgLy8gaWYgKG9wdGlvbnMuY2FjaGluZykge1xuICAgICAgLy8gICAgIGM0Zy5tYXBzLnV0aWxzLnN0b3JlVmFsdWUoJ2dyaWQnLCAnMCcpO1xuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICAvLyBmdW5jdGlvbiB0byB0b2dnbGUgdGhlIGdyaWRcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgaWYgKG9iakdyaWQuZ2V0TWFwKCkpIHtcbiAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIHdyYXBwZXIgZGl2XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX0NPTlRST0w7XG5cbiAgICBpZiAob3B0aW9ucy5zd2l0Y2hhYmxlKSB7XG4gICAgICAvLyBidXR0b25cbiAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgYnV0dG9uLnRpdGxlID0gb3B0aW9ucy50aXBMYWJlbDtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgLy8gc2V0IG9uQ2xpY2sgdG8gdGhlIHRvZ2dsZS1mdW5jdGlvblxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlLCBmYWxzZSk7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvZ2dsZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIGluaGVyaXRhbmNlLXN0dWZmXG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcblxuICAgIC8vIGlmIChvcHRpb25zLmNhY2hpbmcgJiYgKGM0Zy5tYXBzLnV0aWxzLmdldFZhbHVlKCdncmlkJykgPT0gJzEnKSkge1xuICAgIC8vICAgICBvYmpHcmlkLnNldE1hcChzZWxmLmdldE1hcCgpKTtcbiAgICAvLyAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuRU5BQkxFRCk7XG4gICAgLy8gfVxuXG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuR3JpZCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuXG4gIC8qXG4gICAqIEFkZCBtZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLkdyaWQucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5HcmlkLnByb3RvdHlwZSwge1xuXG4gICAgLy8gbm90aGluZyB0byBhZGQgaGVyZVxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBHcmlkID0gdGhpcy5jNGcubWFwcy5jb250cm9sLkdyaWQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLWdyaWQuanMiXSwic291cmNlUm9vdCI6IiJ9